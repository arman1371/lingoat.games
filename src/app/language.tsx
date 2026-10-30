import { createContext, useContext } from 'react';
import {
  DEFAULT_LANGUAGE,
  getLanguage,
  type LanguageId,
  type LanguageMeta,
} from '@/content/languages';
import { getProgressStore, type ProgressState } from '@/store/progressStore';

/**
 * The language being studied. It is fixed for the lifetime of a page: the router is created with the
 * language's route prefix as its basename (`/fr`), so every link inside the app stays in that language
 * and switching language is a normal page navigation to the other prefix.
 */
export const LanguageContext = createContext<LanguageId>(DEFAULT_LANGUAGE);

export const useLanguage = (): LanguageId => useContext(LanguageContext);

export const useLanguageMeta = (): LanguageMeta => getLanguage(useLanguage());

/** Progress of the active language; same shape as the German-only store it replaces. */
export function useProgress<T>(selector: (state: ProgressState) => T): T {
  return getProgressStore(useLanguage())(selector);
}
