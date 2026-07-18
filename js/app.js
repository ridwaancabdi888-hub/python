const STORAGE_KEYS = { theme: 'learn-python-theme', progress: 'learn-python-progress' };
const completedLessons = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '[]'));
let pyodideInstance = null;
let pyodideLoading = null;

const byId = id => document.getElementById(id);

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
}

function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function groupLessons() {
  return LESSONS.reduce((groups, lesson) => {
    (groups[lesson.level] ||= []).push(lesson);
    return groups;
  }, {});
}

function renderNavigation() {
  const nav = byId('lesson-navigation');
  nav.innerHTML = Object.entries(groupLessons()).map(([group, lessons]) => `
    <span class="nav-label">${group}</span>
    ${lessons.map(lesson => `<a class="lesson-nav-link ${completedLessons.has(lesson.id) ? 'complete' : ''}" data-lesson-link="${lesson.id}" href="#lesson/${lesson.id}"><span class="lesson-check">✓</span><span>${lesson.title}</span></a>`).join('')}
  `).join('');
}

function renderOverview() {
  byId('path-grid').innerHTML = [
    ['01','Understand','Learn syntax, variables, data types, and collections.'],
    ['02','Practice','Use control flow, functions, files, and the live editor.'],
    ['03','Build','Apply your knowledge in six complete beginner projects.']
  ].map(item => `<article class="path-card reveal"><span class="path-number">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join('');
  byId('lesson-grid').innerHTML = LESSONS.map((lesson, index) => `<a class="lesson-card ${completedLessons.has(lesson.id) ? 'complete' : ''}" data-overview-lesson="${lesson.id}" href="#lesson/${lesson.id}"><span class="card-number">${String(index + 1).padStart(2,'0')}</span><strong>${lesson.title}</strong></a>`).join('');
}

function codeBlock(code) {
  return `<div class="code-example"><div class="code-example-head"><span>PYTHON</span><button class="copy-code" type="button">Copy code</button></div><pre><code class="language-python">${escapeHtml(code)}</code></pre></div>`;
}

function renderLesson(id) {
  const index = LESSONS.findIndex(item => item.id === id);
  if (index < 0) { location.hash = '#home'; return; }
  const lesson = LESSONS[index];
  document.querySelectorAll('[data-lesson-link]').forEach(link => link.classList.toggle('active', link.dataset.lessonLink === id));
  byId('lesson-content').innerHTML = `
    <div class="lesson-breadcrumb"><a href="#home">Home</a><span>›</span><span>${lesson.level}</span><span>›</span><span>Lesson ${index + 1}</span></div>
    <header class="lesson-header reveal"><span class="eyebrow">Lesson ${String(index + 1).padStart(2,'0')} · ${lesson.level}</span><h1>${lesson.title}</h1><p>${lesson.summary}</p></header>
    <article class="lesson-body">${lesson.content}${codeBlock(lesson.code)}${lesson.after || ''}
      <section class="exercise"><span class="eyebrow">Practice exercise</span><h3>Now try it yourself</h3><p>${lesson.exercise}</p><details><summary>Show suggested solution</summary>${codeBlock(lesson.solution)}</details><button class="button primary complete-lesson ${completedLessons.has(id) ? 'completed' : ''}" data-complete="${id}">${completedLessons.has(id) ? '✓ Lesson Completed' : 'Mark Lesson Complete'}</button></section>
    </article>
    <nav class="lesson-pager" aria-label="Lesson pages">
      ${index > 0 ? `<a href="#lesson/${LESSONS[index - 1].id}"><small>← Previous lesson</small><strong>${LESSONS[index - 1].title}</strong></a>` : '<span></span>'}
      ${index < LESSONS.length - 1 ? `<a href="#lesson/${LESSONS[index + 1].id}"><small>Next lesson →</small><strong>${LESSONS[index + 1].title}</strong></a>` : `<a href="#quiz"><small>Course complete →</small><strong>Take the Quiz</strong></a>`}
    </nav>`;
  window.Prism?.highlightAllUnder(byId('lesson-content'));
  closeSidebar();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function updateProgress() {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify([...completedLessons]));
  const percentage = Math.round(completedLessons.size / LESSONS.length * 100);
  byId('progress-label').textContent = `${percentage}%`;
  byId('progress-fill').style.width = `${percentage}%`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', percentage);
  renderNavigation();
  renderOverview();
}

function toggleComplete(id) {
  if (completedLessons.has(id)) completedLessons.delete(id); else completedLessons.add(id);
  updateProgress();
  renderLesson(id);
  showToast(completedLessons.has(id) ? 'Lesson completed — progress saved!' : 'Lesson marked incomplete');
}

function route() {
  const hash = location.hash || '#home';
  const lessonId = hash.startsWith('#lesson/') ? hash.split('/')[1] : null;
  const lessonView = byId('lesson-view');
  [...document.querySelectorAll('main > section')].forEach(section => section.classList.remove('route-hidden'));
  if (lessonId) {
    document.querySelectorAll('main > section:not(#lesson-view)').forEach(section => section.classList.add('hidden'));
    lessonView.classList.remove('hidden');
    renderLesson(lessonId);
  } else {
    document.querySelectorAll('main > section:not(#lesson-view)').forEach(section => section.classList.remove('hidden'));
    lessonView.classList.add('hidden');
    const target = byId(hash.slice(1));
    if (target) window.setTimeout(() => target.scrollIntoView({behavior:'smooth'}), 0);
    closeSidebar();
  }
}

function setupTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const apply = theme => {
    document.documentElement.dataset.theme = theme;
    byId('theme-toggle').textContent = theme === 'dark' ? '☀' : '☾';
    byId('theme-toggle').setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  };
  apply(stored || preferred);
  byId('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEYS.theme, next); apply(next);
  });
}

function openSidebar() {
  byId('sidebar').classList.add('open'); byId('sidebar-scrim').classList.add('show');
  byId('menu-toggle').setAttribute('aria-expanded','true');
}
function closeSidebar() {
  byId('sidebar').classList.remove('open'); byId('sidebar-scrim').classList.remove('show');
  byId('menu-toggle').setAttribute('aria-expanded','false');
}

function setupEditor() {
  const editor = byId('python-editor');
  const output = byId('python-output');
  const sample = editor.value;
  editor.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = editor.selectionStart;
      editor.value = editor.value.slice(0,start) + '    ' + editor.value.slice(editor.selectionEnd);
      editor.selectionStart = editor.selectionEnd = start + 4;
    }
  });
  byId('reset-code').addEventListener('click', () => { editor.value = sample; output.textContent = 'Editor reset.'; });
  byId('clear-output').addEventListener('click', () => { output.textContent = ''; output.classList.remove('output-error'); });
  byId('run-code').addEventListener('click', async () => {
    const button = byId('run-code');
    button.disabled = true; output.classList.remove('output-error'); output.textContent = 'Loading Python runtime…';
    try {
      if (!pyodideInstance) {
        if (!pyodideLoading) {
          pyodideLoading = new Promise((resolve,reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js';
            script.onload = async () => resolve(await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'}));
            script.onerror = () => reject(new Error('Could not download Pyodide. Check your internet connection.'));
            document.head.append(script);
          });
        }
        pyodideInstance = await pyodideLoading;
      }
      pyodideInstance.setStdout({batched: text => { output.textContent += `${text}\n`; }});
      pyodideInstance.setStderr({batched: text => { output.textContent += `${text}\n`; }});
      output.textContent = '';
      const result = await pyodideInstance.runPythonAsync(editor.value);
      if (result !== undefined) output.textContent += String(result);
      if (!output.textContent) output.textContent = 'Code finished successfully (no output).';
    } catch (error) {
      output.classList.add('output-error'); output.textContent = error.message || String(error);
    } finally { button.disabled = false; }
  });
}

function renderProjects() {
  byId('projects-grid').innerHTML = PROJECTS.map(project => `<article class="project-card reveal"><span class="project-icon">${project.icon}</span><h3>${project.title}</h3><p>${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div><button data-project="${project.id}">View project →</button></article>`).join('');
}

function openProject(id) {
  const project = PROJECTS.find(item => item.id === id);
  if (!project) return;
  byId('project-modal-content').innerHTML = `<span class="eyebrow">Beginner project</span><h2>${project.title}</h2><p>${project.description}</p><h3>Requirements</h3><ul>${project.requirements.map(item => `<li>${item}</li>`).join('')}</ul><h3>Source code</h3>${codeBlock(project.code)}<h3>How to run</h3><ol><li>Copy the code into a file named <code>${project.id}.py</code>.</li><li>Open a terminal in that folder.</li><li>Run <code>python ${project.id}.py</code>.</li></ol>`;
  byId('project-modal').showModal();
  window.Prism?.highlightAllUnder(byId('project-modal-content'));
}

document.addEventListener('click', event => {
  const copy = event.target.closest('.copy-code');
  if (copy) {
    navigator.clipboard.writeText(copy.closest('.code-example').querySelector('code').textContent).then(() => { copy.textContent='Copied!'; showToast('Code copied to clipboard'); window.setTimeout(()=>copy.textContent='Copy code',1300); });
  }
  const complete = event.target.closest('[data-complete]');
  if (complete) toggleComplete(complete.dataset.complete);
  const project = event.target.closest('[data-project]');
  if (project) openProject(project.dataset.project);
});

document.addEventListener('DOMContentLoaded', () => {
  setupTheme(); renderNavigation(); renderOverview(); updateProgress(); renderProjects(); createQuiz(); setupEditor(); route();
  byId('year').textContent = new Date().getFullYear();
  byId('menu-toggle').addEventListener('click', () => byId('sidebar').classList.contains('open') ? closeSidebar() : openSidebar());
  byId('sidebar-scrim').addEventListener('click', closeSidebar);
  byId('modal-close').addEventListener('click', () => byId('project-modal').close());
  byId('project-modal').addEventListener('click', event => { if (event.target === byId('project-modal')) byId('project-modal').close(); });
  window.addEventListener('hashchange', route);
});
