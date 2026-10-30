/**
 * Languages a learner can study. Pure data: `src/content/**` is imported by Node (e2e), so no React or
 * browser APIs here. German is the default and keeps its original URLs, storage keys and level ids;
 * every other language lives under its own route prefix and uses level ids prefixed with its id.
 */
export const LANGUAGE_IDS = ['de', 'fr'] as const;
export type LanguageId = (typeof LANGUAGE_IDS)[number];

export const DEFAULT_LANGUAGE: LanguageId = 'de';

export interface LanguageMeta {
  id: LanguageId;
  /** English name, used in the UI chrome. */
  name: string;
  /** The language's own name, used next to the flag (and as `lang` on that text). */
  nativeName: string;
  flag: string;
  /** BCP 47 tag for speech synthesis and the `lang` attribute on learning content. */
  bcp47: string;
  /** Route prefix: '' for the default language, '/fr' for French. */
  routePrefix: string;
}

export const LANGUAGES: Record<LanguageId, LanguageMeta> = {
  de: {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    bcp47: 'de-DE',
    routePrefix: '',
  },
  fr: {
    id: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    bcp47: 'fr-FR',
    routePrefix: '/fr',
  },
};

export const isLanguageId = (value: unknown): value is LanguageId =>
  typeof value === 'string' && (LANGUAGE_IDS as readonly string[]).includes(value);

export const getLanguage = (id: LanguageId): LanguageMeta => LANGUAGES[id];

/** The language a path belongs to: `/fr/...` is French, everything else is the default. */
export function languageOfPath(pathname: string): LanguageId {
  for (const id of LANGUAGE_IDS) {
    const prefix = LANGUAGES[id].routePrefix;
    if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) return id;
  }
  return DEFAULT_LANGUAGE;
}

/** Prefixes an app path (`/library`) with the language's route prefix. */
export function pathInLanguage(language: LanguageId, path: string): string {
  const prefix = LANGUAGES[language].routePrefix;
  if (!prefix) return path;
  return path === '/' ? prefix : `${prefix}${path}`;
}

/** Removes the language prefix so `/fr/library?x=1` becomes `/library?x=1`. */
export function stripLanguagePrefix(path: string): string {
  const language = languageOfPath(path);
  const prefix = LANGUAGES[language].routePrefix;
  if (!prefix) return path;
  return path.slice(prefix.length) || '/';
}
