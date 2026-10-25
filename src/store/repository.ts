import type { StateStorage } from 'zustand/middleware';

/**
 * Storage seam for learner data. Today everything lives in the browser (localStorage).
 * To sync across devices later, implement this interface against an API (e.g. Cloudflare D1 via a
 * Pages Function) and pass it to `createJSONStorage` in the stores – nothing else has to change.
 */
export type ProgressRepository = StateStorage;

/** Keys used before the app was renamed to Lingoat; read as a fallback so learners keep their progress. */
const LEGACY_PREFIX = 'spielplatz.';
const PREFIX = 'lingoat.';

const legacyName = (name: string) =>
  name.startsWith(PREFIX) ? LEGACY_PREFIX + name.slice(PREFIX.length) : null;

/** localStorage that never throws (private mode, blocked storage, quota). */
export const localRepository: ProgressRepository = {
  getItem: (name) => {
    try {
      const value = localStorage.getItem(name);
      const legacy = legacyName(name);
      return value ?? (legacy ? localStorage.getItem(legacy) : null);
    } catch {
      return null;
    }
  },
  setItem: (name, value) => {
    try {
      localStorage.setItem(name, value);
      const legacy = legacyName(name);
      if (legacy) localStorage.removeItem(legacy);
    } catch {
      /* ignore – progress just won't persist */
    }
  },
  removeItem: (name) => {
    try {
      localStorage.removeItem(name);
      const legacy = legacyName(name);
      if (legacy) localStorage.removeItem(legacy);
    } catch {
      /* ignore */
    }
  },
};
