import type { Source } from './sources';

/** Pages fetched while writing the French A2.1 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});
const wiktionary = (page: string, title: string): Source => ({
  title: `Wiktionnaire: ${title}`,
  url: `https://fr.wiktionary.org/wiki/${encodeURI(page)}`,
});

export const FR21_SOURCES = {
  passeCompose: wp('Passé_composé_en_français', 'Passé composé en français'),
  negation: wp('Négation_en_français', 'Négation en français'),
  depuis: wiktionary('depuis', 'depuis'),
  pendant: wiktionary('pendant', 'pendant'),
  faire: wiktionary('Conjugaison:français/faire', 'Conjugaison : faire'),
  prendre: wiktionary('Conjugaison:français/prendre', 'Conjugaison : prendre'),
} as const satisfies Record<string, Source>;
