(function exposeRuntimeLoader(globalScope) {
  function createRetryableLoader(load) {
    let cachedValue;
    let hasCachedValue = false;
    let pending = null;

    return function getValue() {
      if (hasCachedValue) return Promise.resolve(cachedValue);
      if (!pending) {
        pending = Promise.resolve()
          .then(load)
          .then(value => {
            cachedValue = value;
            hasCachedValue = true;
            return value;
          })
          .catch(error => {
            pending = null;
            throw error;
          });
      }
      return pending;
    };
  }

  const helpers = { createRetryableLoader };
  if (typeof module !== 'undefined' && module.exports) module.exports = helpers;
  globalScope.LearnPythonRuntime = helpers;
}(typeof globalThis !== 'undefined' ? globalThis : window));
