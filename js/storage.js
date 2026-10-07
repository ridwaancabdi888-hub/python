(function exposeStorageHelpers(globalScope) {
  function createSafeStorage(storageProvider) {
    const resolveStorage = typeof storageProvider === 'function'
      ? storageProvider
      : () => storageProvider;

    function getStorage() {
      try {
        return resolveStorage() || null;
      } catch {
        return null;
      }
    }

    return {
      get(key, fallback = null) {
        try {
          const value = getStorage()?.getItem(key);
          return value === null || value === undefined ? fallback : value;
        } catch {
          return fallback;
        }
      },
      set(key, value) {
        try {
          const storage = getStorage();
          if (!storage) return false;
          storage.setItem(key, value);
          return true;
        } catch {
          return false;
        }
      }
    };
  }

  function parseStringArray(value) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed)
        ? parsed.filter(item => typeof item === 'string')
        : [];
    } catch {
      return [];
    }
  }

  const helpers = { createSafeStorage, parseStringArray };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = helpers;
  }
  globalScope.LearnPythonStorage = helpers;
}(typeof globalThis !== 'undefined' ? globalThis : window));
