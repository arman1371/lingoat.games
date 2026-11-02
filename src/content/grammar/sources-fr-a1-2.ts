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
  passeCompose: wp('Passé_composé_en_français', 'Passé composé en français'),
  manger: wiktionary('Conjugaison:français/manger', 'Conjugaison : manger'),
  attendre: wiktionary('Conjugaison:français/attendre', 'Conjugaison : attendre'),
  ilYA: wiktionary('il_y_a', 'il y a'),
  dernier: wiktionary('dernier', 'dernier'),
  prochain: wiktionary('prochain', 'prochain'),
  cod: wp('Complément_d’objet_direct', 'Complément d’objet direct'),
  y: wiktionary('y', 'y'),
  auDessus: wiktionary('au-dessus', 'au-dessus'),
  interdit: wiktionary('interdit', 'interdit'),
  plus: wiktionary('plus', 'plus'),
  aussi: wiktionary('aussi', 'aussi'),
  meilleur: wiktionary('meilleur', 'meilleur'),
  partir: wiktionary('Conjugaison:français/partir', 'Conjugaison : partir'),
  sortir: wiktionary('Conjugaison:français/sortir', 'Conjugaison : sortir'),
  dormir: wiktionary('Conjugaison:français/dormir', 'Conjugaison : dormir'),
  rester: wiktionary('Conjugaison:français/rester', 'Conjugaison : rester'),
  arriver: wiktionary('Conjugaison:français/arriver', 'Conjugaison : arriver'),
  imparfait: wp('Imparfait', 'Imparfait'),
  etreConj: wiktionary('Conjugaison:français/être', 'Conjugaison : être'),
  devoir: wiktionary('Conjugaison:français/devoir', 'Conjugaison : devoir'),
  pouvoir: wiktionary('Conjugaison:français/pouvoir', 'Conjugaison : pouvoir'),
  falloir: wiktionary('falloir', 'falloir'),
  lui: wiktionary('lui', 'lui'),
  leur: wiktionary('leur', 'leur'),
  coi: wp('Complément_d’objet_indirect', 'Complément d’objet indirect'),
  mal: wiktionary('mal', 'mal'),
  parceQue: wiktionary('parce_que', 'parce que'),
  pourquoi: wiktionary('pourquoi', 'pourquoi'),
} as const satisfies Record<string, Source>;
