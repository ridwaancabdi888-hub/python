const test = require('node:test');
const assert = require('node:assert/strict');

const { createRetryableLoader } = require('../js/runtime-loader.js');

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, reject, resolve };
}

test('concurrent callers share one in-flight runtime load', async () => {
  const request = deferred();
  let calls = 0;
  const load = createRetryableLoader(() => {
    calls += 1;
    return request.promise;
  });

  const first = load();
  const second = load();
  request.resolve({ ready: true });

  assert.strictEqual(await first, await second);
  assert.equal(calls, 1);
});

test('a failed load can be retried successfully', async () => {
  let calls = 0;
  const runtime = { ready: true };
  const load = createRetryableLoader(async () => {
    calls += 1;
    if (calls === 1) throw new Error('temporary CDN failure');
    return runtime;
  });

  await assert.rejects(load(), /temporary CDN failure/);
  assert.strictEqual(await load(), runtime);
  assert.equal(calls, 2);
});

test('a successful runtime is cached for later calls', async () => {
  let calls = 0;
  const runtime = { ready: true };
  const load = createRetryableLoader(async () => {
    calls += 1;
    return runtime;
  });

  assert.strictEqual(await load(), runtime);
  assert.strictEqual(await load(), runtime);
  assert.equal(calls, 1);
});

test('undefined is still treated as a successfully cached value', async () => {
  let calls = 0;
  const load = createRetryableLoader(async () => {
    calls += 1;
    return undefined;
  });

  assert.equal(await load(), undefined);
  assert.equal(await load(), undefined);
  assert.equal(calls, 1);
});
