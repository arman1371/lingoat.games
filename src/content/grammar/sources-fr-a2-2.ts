import type { Source } from './sources';

/** Pages fetched while writing the French A2.2 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});

const wk = (page: string, title: string): Source => ({
  title: `Wiktionnaire: ${title}`,
  url: `https://fr.wiktionary.org/wiki/${encodeURI(page)}`,
});

export const FR22_SOURCES = {
  cod: wp("Complément_d'objet_direct", 'Complément d’objet direct'),
  coi: wp("Complément_d'objet_indirect", 'Complément d’objet indirect'),
  personalPronoun: wp('Pronom_personnel', 'Pronom personnel'),
  degrees: wp('Degré_de_comparaison', 'Degré de comparaison'),
  interrogativePronoun: wp('Pronom_interrogatif', 'Pronom interrogatif'),
  subordinatingConjunction: wp('Conjonction_de_subordination', 'Conjonction de subordination'),
  graceA: wk('grâce_à', 'grâce à'),
  donc: wk('donc', 'donc'),
  aCauseDe: wk('à_cause_de', 'à cause de'),
  subjunctive: wp('Subjonctif_en_français', 'Subjonctif en français'),
  adverb: wp('Adverbe', 'Adverbe'),
} as const satisfies Record<string, Source>;
