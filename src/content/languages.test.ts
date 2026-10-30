import {
  DEFAULT_LANGUAGE,
  getLanguage,
  isLanguageId,
  LANGUAGE_IDS,
  languageOfPath,
  pathInLanguage,
  stripLanguagePrefix,
} from './languages';
import { levelsOf, LEVELS } from './levels';

describe('languages', () => {
  it('has German as the default, without a route prefix', () => {
    expect(DEFAULT_LANGUAGE).toBe('de');
    expect(getLanguage('de').routePrefix).toBe('');
    expect(getLanguage('fr')).toMatchObject({ routePrefix: '/fr', bcp47: 'fr-FR' });
  });

  it('recognises language ids', () => {
    expect(LANGUAGE_IDS.every(isLanguageId)).toBe(true);
    expect(isLanguageId('es')).toBe(false);
    expect(isLanguageId(undefined)).toBe(false);
  });

  it.each([
    ['/', 'de'],
    ['/library', 'de'],
    ['/fr', 'fr'],
    ['/fr/', 'fr'],
    ['/fr/levels/fr-a1-1', 'fr'],
    ['/french', 'de'],
    ['/play/a1-1-x', 'de'],
  ])('puts %s in language %s', (path, language) => {
    expect(languageOfPath(path)).toBe(language);
  });

  it('adds and removes the route prefix', () => {
    expect(pathInLanguage('de', '/library')).toBe('/library');
    expect(pathInLanguage('fr', '/library')).toBe('/fr/library');
    expect(pathInLanguage('fr', '/')).toBe('/fr');
    expect(stripLanguagePrefix('/fr/library?x=1')).toBe('/library?x=1');
    expect(stripLanguagePrefix('/fr')).toBe('/');
    expect(stripLanguagePrefix('/library')).toBe('/library');
  });

  it('assigns every level to a language and prefixes non-default level ids', () => {
    for (const level of LEVELS) {
      expect(LANGUAGE_IDS).toContain(level.language);
      if (level.language !== DEFAULT_LANGUAGE) {
        expect(level.id.startsWith(`${level.language}-`)).toBe(true);
      }
    }
    expect(levelsOf('de')).toHaveLength(12);
    expect(levelsOf()).toBe(levelsOf('de'));
  });
});
