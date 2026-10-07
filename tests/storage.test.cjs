const test = require('node:test');
const assert = require('node:assert/strict');

const { createSafeStorage, parseStringArray } = require('../js/storage.js');

test('parseStringArray accepts a saved string array', () => {
  assert.deepEqual(parseStringArray('["variables","loops"]'), ['variables', 'loops']);
});

test('parseStringArray ignores malformed or unexpected data', () => {
  assert.deepEqual(parseStringArray('{bad json'), []);
  assert.deepEqual(parseStringArray('{"lesson":"loops"}'), []);
  assert.deepEqual(parseStringArray('null'), []);
});

test('parseStringArray removes non-string entries', () => {
  assert.deepEqual(parseStringArray('["variables",42,null,"loops"]'), ['variables', 'loops']);
});

test('safe storage reads and writes when storage is available', () => {
  const values = new Map();
  const storage = {
    getItem: key => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, value)
  };
  const safeStorage = createSafeStorage(storage);

  assert.equal(safeStorage.get('missing', 'fallback'), 'fallback');
  assert.equal(safeStorage.set('theme', 'dark'), true);
  assert.equal(safeStorage.get('theme'), 'dark');
});

test('safe storage falls back when browser storage access throws', () => {
  const safeStorage = createSafeStorage(() => {
    throw new Error('Storage is blocked');
  });

  assert.equal(safeStorage.get('progress', '[]'), '[]');
  assert.equal(safeStorage.set('progress', '[]'), false);
});

test('safe storage handles getItem and setItem failures independently', () => {
  const safeStorage = createSafeStorage({
    getItem: () => { throw new Error('Read denied'); },
    setItem: () => { throw new Error('Quota exceeded'); }
  });

  assert.equal(safeStorage.get('theme', 'light'), 'light');
  assert.equal(safeStorage.set('theme', 'dark'), false);
});
