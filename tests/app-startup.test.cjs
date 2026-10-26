const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const storageSource = fs.readFileSync(path.join(__dirname, '../js/storage.js'), 'utf8');
const runtimeLoaderSource = fs.readFileSync(path.join(__dirname, '../js/runtime-loader.js'), 'utf8');
const appSource = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');

function runAppWithStorage(storageDescriptor) {
  const window = {
    clearTimeout() {},
    setTimeout() {},
    addEventListener() {},
    matchMedia: () => ({ matches: false })
  };
  Object.defineProperty(window, 'localStorage', storageDescriptor);

  const context = vm.createContext({
    window,
    document: {
      addEventListener() {},
      getElementById() { return null; },
      querySelector() { return null; },
      querySelectorAll() { return []; }
    },
    location: { hash: '' },
    navigator: {},
    LESSONS: [{ id: 'variables' }, { id: 'loops' }],
    PROJECTS: [],
    createQuiz() {},
    console
  });

  vm.runInContext(storageSource, context, { filename: 'storage.js' });
  vm.runInContext(runtimeLoaderSource, context, { filename: 'runtime-loader.js' });
  vm.runInContext(appSource, context, { filename: 'app.js' });
}

test('app initialization survives malformed saved progress', () => {
  assert.doesNotThrow(() => runAppWithStorage({
    value: {
      getItem: () => '{invalid json',
      setItem() {}
    }
  }));
});

test('app initialization survives blocked localStorage access', () => {
  assert.doesNotThrow(() => runAppWithStorage({
    get() {
      throw new Error('Storage access denied');
    }
  }));
});
