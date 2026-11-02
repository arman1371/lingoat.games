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
  // ---- French C2.1
  prefixes: wiktionary('Annexe:Préfixes_en_français', 'Annexe : Préfixes en français'),
  suffixes: wiktionary('Annexe:Suffixes_en_français', 'Annexe : Suffixes en français'),
  paronymy: wp('Paronymie', 'Paronymie'),
  homophone: wp('Homophone', 'Homophone'),
  pun: wp('Calembour', 'Calembour'),
  passeSimple: wp('Passé_simple_en_français', 'Passé simple en français'),
  passeAnterieur: wp('Passé_antérieur', 'Passé antérieur'),
  presentHistorique: wp('Présent_historique', 'Présent historique'),
  register: wp('Registre_de_langue', 'Registre de langue'),
  subConjunction: wp('Conjonction_de_subordination', 'Conjonction de subordination'),
  puisque: wiktionary('puisque', 'puisque'),
  quandBienMeme: wiktionary('quand_bien_même', 'quand bien même'),
  auCasOu: wiktionary('au_cas_où', 'au cas où'),
  quoique: wiktionary('quoique', 'quoique'),
  subjunctive: wp('Subjonctif_en_français', 'Subjonctif en français'),
  concordance: wp('Concordance_des_temps', 'Concordance des temps'),
  indirectSpeech: wp('Discours_indirect', 'Discours indirect'),
  deSorteQue: wiktionary('de_sorte_que', 'de sorte que'),
} as const satisfies Record<string, Source>;
