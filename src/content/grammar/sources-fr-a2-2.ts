import type { Source } from './sources';

/** Pages fetched while writing the French A2.2 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});

export const FR22_SOURCES = {
  cod: wp("Complément_d'objet_direct", 'Complément d’objet direct'),
  coi: wp("Complément_d'objet_indirect", 'Complément d’objet indirect'),
  personalPronoun: wp('Pronom_personnel', 'Pronom personnel'),
  degrees: wp('Degré_de_comparaison', 'Degré de comparaison'),
  interrogativePronoun: wp('Pronom_interrogatif', 'Pronom interrogatif'),
} as const satisfies Record<string, Source>;
