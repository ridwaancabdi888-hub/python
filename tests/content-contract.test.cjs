const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const appSource = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const quizSource = fs.readFileSync(path.join(root, 'js/quiz.js'), 'utf8');

function readScriptValue(file, expression) {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  return vm.runInContext(expression, context);
}

function assertNonEmptyString(value, message) {
  assert.equal(typeof value, 'string', message);
  assert.notEqual(value.trim(), '', message);
}

function assertUniqueIds(items, label) {
  const ids = items.map(item => item.id);
  assert.equal(new Set(ids).size, ids.length, `${label} IDs must be unique`);
  ids.forEach(id => assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `Invalid ${label} ID: ${id}`));
}

test('all local assets referenced by the homepage exist', () => {
  const references = [...indexHtml.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(match => match[1])
    .filter(reference => !reference.startsWith('#') && !reference.includes('://'));

  const missing = references.filter(reference => !fs.existsSync(path.join(root, reference)));

  assert.deepEqual(missing, []);
});

test('JavaScript DOM selectors are backed by homepage elements', () => {
  const htmlIds = new Set([...indexHtml.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  const appIds = [...appSource.matchAll(/\bbyId\(['"]([^'"]+)['"]\)/g)].map(match => match[1]);
  const quizIds = [...quizSource.matchAll(/querySelector\(['"]#([^'"]+)['"]\)/g)].map(match => match[1]);
  const missing = [...new Set([...appIds, ...quizIds])].filter(id => !htmlIds.has(id));

  assert.deepEqual(missing, []);
});

test('the course contains 20 complete lessons with stable unique IDs', () => {
  const lessons = readScriptValue('js/lessons.js', 'LESSONS');

  assert.equal(lessons.length, 20);
  assertUniqueIds(lessons, 'lesson');

  for (const lesson of lessons) {
    for (const field of ['title', 'level', 'summary', 'content', 'code', 'exercise', 'solution']) {
      assertNonEmptyString(lesson[field], `Lesson ${lesson.id} is missing ${field}`);
    }
  }
});

test('the project catalogue contains six runnable project guides', () => {
  const projects = readScriptValue('js/lessons.js', 'PROJECTS');

  assert.equal(projects.length, 6);
  assertUniqueIds(projects, 'project');

  for (const project of projects) {
    for (const field of ['icon', 'title', 'description', 'code']) {
      assertNonEmptyString(project[field], `Project ${project.id} is missing ${field}`);
    }
    assert.ok(Array.isArray(project.tags) && project.tags.length > 0, `Project ${project.id} needs tags`);
    assert.ok(Array.isArray(project.requirements) && project.requirements.length > 0, `Project ${project.id} needs requirements`);
  }
});

test('the quiz contains ten valid four-option questions', () => {
  const questions = readScriptValue('js/quiz.js', 'QUIZ_QUESTIONS');

  assert.equal(questions.length, 10);

  for (const [index, question] of questions.entries()) {
    assertNonEmptyString(question.question, `Quiz question ${index + 1} is empty`);
    assertNonEmptyString(question.explanation, `Quiz question ${index + 1} needs an explanation`);
    assert.equal(question.options.length, 4, `Quiz question ${index + 1} must have four options`);
    question.options.forEach(option => assertNonEmptyString(option, `Quiz question ${index + 1} has an empty option`));
    assert.ok(Number.isInteger(question.answer), `Quiz question ${index + 1} answer must be an integer`);
    assert.ok(question.answer >= 0 && question.answer < question.options.length, `Quiz question ${index + 1} answer is out of range`);
  }
});

test('SEO files consistently reference the canonical production URL', () => {
  const canonical = 'https://learn-python-ridwaan.vercel.app/';
  const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');

  assert.match(indexHtml, new RegExp(`<link rel="canonical" href="${canonical}"`));
  assert.ok(robots.includes(`${canonical}sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
});
