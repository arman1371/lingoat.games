import type { Source } from './sources';

/** Pages fetched while writing the French A1.2 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});
const wiktionary = (page: string, title: string): Source => ({
  title: `Wiktionnaire: ${title}`,
  url: `https://fr.wiktionary.org/wiki/${encodeURI(page)}`,
});

export const FR12_SOURCES = {
  pronominal: wp('Verbe_pronominal', 'Verbe pronominal'),
  pronominalForm: wp(
    'Forme_pronominale_du_verbe_en_français',
    'Forme pronominale du verbe en français',
  ),
  jamais: wiktionary('jamais', 'jamais'),
  vers: wiktionary('vers', 'vers'),
  dAbord: wiktionary('d’abord', 'd’abord'),
} as const satisfies Record<string, Source>;
