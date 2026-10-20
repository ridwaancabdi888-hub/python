const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const quizSource = fs.readFileSync(path.join(__dirname, '../js/quiz.js'), 'utf8');

class FakeElement {
  constructor() {
    this.attributes = new Map();
    this.children = [];
    this.classList = {
      values: new Set(),
      add: (...values) => values.forEach(value => this.classList.values.add(value)),
      remove: (...values) => values.forEach(value => this.classList.values.delete(value)),
      contains: value => this.classList.values.has(value),
    };
    this.listeners = {};
    this.style = {};
    this.textContent = '';
    this.focusCount = 0;
    this.disabled = false;
  }

  addEventListener(type, listener) { this.listeners[type] = listener; }
  append(child) { this.children.push(child); }
  replaceChildren() { this.children = []; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  focus() { this.focusCount += 1; }
  click() { this.listeners.click(); }
}

function createQuizHarness(questionCount = 2) {
  const ids = [
    'quiz-card', 'quiz-result', 'quiz-question', 'quiz-options', 'quiz-feedback',
    'next-question', 'quiz-progress', 'quiz-progress-fill', 'result-title',
    'quiz-counter', 'quiz-score', 'final-score', 'result-message', 'restart-quiz',
  ];
  const elements = Object.fromEntries(ids.map(id => [id, new FakeElement()]));
  elements['next-question'].classList.add('hidden');
  elements['quiz-result'].classList.add('hidden');
  const resultRing = new FakeElement();

  const document = {
    createElement: () => new FakeElement(),
    querySelector(selector) {
      if (selector === '.result-ring') return resultRing;
      return elements[selector.slice(1)];
    },
  };

  const context = vm.createContext({ document });
  vm.runInContext(quizSource, context, { filename: 'quiz.js' });
  vm.runInContext(`QUIZ_QUESTIONS.splice(${questionCount})`, context);
  vm.runInContext('createQuiz()', context);

  return { elements, resultRing };
}

test('quiz progress exposes the current question to assistive technology', () => {
  const { elements } = createQuizHarness(2);

  assert.equal(elements['quiz-progress'].getAttribute('aria-valuemax'), '2');
  assert.equal(elements['quiz-progress'].getAttribute('aria-valuenow'), '1');
  assert.equal(elements['quiz-progress'].getAttribute('aria-valuetext'), 'Question 1 of 2');
  assert.equal(elements['quiz-progress-fill'].style.width, '50%');

  elements['quiz-options'].children[1].click();
  elements['next-question'].click();

  assert.equal(elements['quiz-progress'].getAttribute('aria-valuenow'), '2');
  assert.equal(elements['quiz-question'].focusCount, 1);
});

test('quiz identifies answers and moves focus to the final result', () => {
  const { elements } = createQuizHarness(1);
  const correctAnswer = elements['quiz-options'].children[1];

  correctAnswer.click();
  assert.match(correctAnswer.getAttribute('aria-label'), /Correct answer$/);
  assert.equal(elements['quiz-feedback'].textContent.startsWith('Correct!'), true);

  elements['next-question'].click();
  assert.equal(elements['result-title'].focusCount, 1);
  assert.equal(elements['quiz-card'].classList.contains('hidden'), true);
  assert.equal(elements['quiz-result'].classList.contains('hidden'), false);
});

test('restarting the quiz returns focus to the first question', () => {
  const { elements } = createQuizHarness(1);

  elements['quiz-options'].children[0].click();
  elements['next-question'].click();
  elements['restart-quiz'].click();

  assert.equal(elements['quiz-question'].focusCount, 1);
  assert.equal(elements['quiz-progress'].getAttribute('aria-valuenow'), '1');
});
