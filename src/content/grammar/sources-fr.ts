import type { Source } from './sources';

/** Pages fetched while writing the French A1.1 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipédia: ${title}`,
  url: `https://fr.wikipedia.org/wiki/${encodeURI(page)}`,
});
const wiktionary = (page: string, title: string): Source => ({
  title: `Wiktionnaire: ${title}`,
  url: `https://fr.wiktionary.org/wiki/${encodeURI(page)}`,
});
const conj = (verb: string): Source =>
  wiktionary(`Conjugaison:français/${verb}`, `Conjugaison : ${verb}`);

export const FR_SOURCES = {
  tuVous: wp('Tutoiement_et_vouvoiement', 'Tutoiement et vouvoiement'),
  interrogative: wp('Phrase_interrogative', 'Phrase interrogative'),
  personalPronoun: wp('Pronom_personnel', 'Pronom personnel'),
  etre: conj('être'),
  avoir: conj('avoir'),
  parler: conj('parler'),
  aimer: conj('aimer'),
  jouer: conj('jouer'),
  faire: conj('faire'),
  aller: conj('aller'),
  futurSimple: wp('Futur_simple', 'Futur simple'),
  prendre: conj('prendre'),
  vouloir: conj('vouloir'),
  boire: conj('boire'),
  finir: conj('finir'),
  definite: wp('Article_défini', 'Article défini'),
  indefinite: wp('Article_indéfini', 'Article indéfini'),
  partitive: wp('Article_partitif', 'Article partitif'),
  gender: wp('Genre_grammatical', 'Genre grammatical'),
  feminine: wp('Féminin_(grammaire)', 'Féminin (grammaire)'),
  possessive: wp('Adjectif_possessif', 'Adjectif possessif'),
  adjective: wp('Adjectif_en_français', 'Adjectif en français'),
  cest: wiktionary('c’est', 'c’est'),
  number: wp('Nombre_grammatical', 'Nombre grammatical'),
  negation: wp('Négation_en_français', 'Négation en français'),
  contraction: wp('Contraction_(grammaire)', 'Contraction (grammaire)'),
  preposition: wp('Préposition', 'Préposition'),
  beaucoup: wiktionary('beaucoup', 'beaucoup'),
  peu: wiktionary('peu', 'peu'),
  imperative: wp('Impératif_(grammaire)', 'Impératif (grammaire)'),
  demonstrative: wp('Adjectif_démonstratif', 'Adjectif démonstratif'),
  futurProche: wp('Futur_proche', 'Futur proche'),
} as const satisfies Record<string, Source>;
