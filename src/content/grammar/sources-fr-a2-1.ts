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
  devoir: wiktionary('Conjugaison:français/devoir', 'Conjugaison : devoir'),
  pouvoir: wiktionary('pouvoir', 'pouvoir'),
  y: wiktionary('y', 'y'),
  envie: wiktionary('envie', 'envie'),
  imparfait: wp("Imparfait_de_l'indicatif_en_français", 'Imparfait de l’indicatif en français'),
  imparfaitGeneral: wp('Imparfait', 'Imparfait'),
  concordance: wp('Concordance_des_temps', 'Concordance des temps'),
  en: wiktionary('en', 'en'),
  pronomRelatif: wp('Pronom_relatif', 'Pronom relatif'),
  comparatif: wp('Comparatif', 'Comparatif'),
  si: wiktionary('si', 'si'),
  aussi: wiktionary('aussi', 'aussi'),
  autant: wiktionary('autant', 'autant'),
  chaque: wiktionary('chaque', 'chaque'),
  tout: wiktionary('tout', 'tout'),
  pronomPossessif: wp('Pronom_possessif', 'Pronom possessif'),
  futurSimple: wp('Futur_simple', 'Futur simple'),
  aller: wiktionary('Conjugaison:français/aller', 'Conjugaison : aller'),
  avoir: wiktionary('Conjugaison:français/avoir', 'Conjugaison : avoir'),
  etre: wiktionary('Conjugaison:français/être', 'Conjugaison : être'),
  falloir: wiktionary('falloir', 'falloir'),
  interdit: wiktionary('interdit', 'interdit'),
  que: wiktionary('que', 'que'),
  cuillere: wiktionary('cuillère', 'cuillère'),
  parceQue: wiktionary('parce_que', 'parce que'),
  graceA: wiktionary('grâce_à', 'grâce à'),
  causeDe: wiktionary('à_cause_de', 'à cause de'),
  donc: wiktionary('donc', 'donc'),
  alors: wiktionary('alors', 'alors'),
} as const satisfies Record<string, Source>;
