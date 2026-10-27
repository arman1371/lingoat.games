import type { Source } from './sources';

/**
 * Pages read while writing the B2.1 and B2.2 lessons (see docs/grammar-sources.md). Kept apart from
 * `sources.ts` so the level families that write lessons in parallel do not edit the same lines.
 */
const wp = (page: string, title: string): Source => ({
  title: `Wikipedia (German): ${title}`,
  url: `https://de.wikipedia.org/wiki/${page}`,
});
const wiktionary = (word: string): Source => ({
  title: `Wiktionary (German): ${word}`,
  url: `https://de.wiktionary.org/wiki/${encodeURIComponent(word)}`,
});

export const B2_SOURCES = {
  // sentence structure
  object: wp('Objekt_(Grammatik)', 'Objekt (Grammatik)'),
  pronominalAdverb: wp('Pronominaladverb', 'Pronominaladverb'),
  middleFieldSaarland: {
    title: 'Universität des Saarlandes: Das Mittelfeld (PDF)',
    url: 'https://nds.uni-saarland.de/wp-content/uploads/2020/01/MF-allgemein2011.pdf',
  },
  middleFieldElon: {
    title: 'elon.io: Pronoun position in the Mittelfeld',
    url: 'https://elon.io/grammar/german/pronouns/personal/pronoun-vs-noun-order',
  },
  contentClause: wp('Inhaltssatz', 'Inhaltssatz'),
  expletive: wp('Expletivum', 'Expletivum'),
  cohesion: wp('Koh%C3%A4sion_(Linguistik)', 'Kohäsion (Linguistik)'),
  // moods and tenses
  indirectSpeech: wp('Indirekte_Rede', 'Indirekte Rede'),
  subjunctive: wp('Konjunktiv', 'Konjunktiv'),
  future2: wp('Futur_II', 'Futur II'),
  statePassive: wp('Zustandspassiv', 'Zustandspassiv'),
  passive: wp('Passiv_(Grammatik)', 'Passiv (Grammatik)'),
  functionVerbs: wp('Funktionsverbgef%C3%BCge', 'Funktionsverbgefüge'),
  nominalisation: wp('Nominalisierung', 'Nominalisierung'),
  relativeClause: wp('Relativsatz', 'Relativsatz'),
  // adverbial clauses
  temporalClause: wp('Temporalsatz', 'Temporalsatz'),
  conditionalClause: wp('Konditionalsatz', 'Konditionalsatz'),
  concessiveClause: wp('Konzessivsatz', 'Konzessivsatz'),
  causalClause: wp('Kausalsatz', 'Kausalsatz'),
  consecutiveClause: wp('Konsekutivsatz', 'Konsekutivsatz'),
  adversativeClause: wp('Adversativsatz', 'Adversativsatz'),
  modalClause: wp('Modalsatz', 'Modalsatz'),
  comparativeClause: wp('Komparativsatz', 'Komparativsatz'),
  // modal verbs and verb clusters
  doubleInfinitive: wp('Ersatzinfinitiv', 'Ersatzinfinitiv'),
  modalVerbs: wp('Modalverb', 'Modalverb'),
  participle1: wp('Partizip_I', 'Partizip I'),
  indefinitePronouns: wp('Indefinitpronomen', 'Indefinitpronomen'),
  // Wiktionary entries
  aufgrund: wiktionary('aufgrund'),
  angesichts: wiktionary('angesichts'),
  dank: wiktionary('dank'),
  infolge: wiktionary('infolge'),
  falls: wiktionary('falls'),
  sofern: wiktionary('sofern'),
  solange: wiktionary('solange'),
  sobald: wiktionary('sobald'),
  ehe: wiktionary('ehe'),
  seitdem: wiktionary('seitdem'),
  sooft: wiktionary('sooft'),
  bis: wiktionary('bis'),
  folglich: wiktionary('folglich'),
  infolgedessen: wiktionary('infolgedessen'),
  somit: wiktionary('somit'),
  hingegen: wiktionary('hingegen'),
  wohingegen: wiktionary('wohingegen'),
  jedoch: wiktionary('jedoch'),
  einerseits: wiktionary('einerseits'),
  demgegenueber: wiktionary('demgegenüber'),
  gegensatz: wiktionary('Gegensatz'),
  angst: wiktionary('Angst'),
  obgleich: wiktionary('obgleich'),
  wenngleich: wiktionary('wenngleich'),
  trotz: wiktionary('trotz'),
  ungeachtet: wiktionary('ungeachtet'),
  indem: wiktionary('indem'),
  damit: wiktionary('damit'),
  dadurch: wiktionary('dadurch'),
  lassen: wiktionary('lassen'),
  bar: wiktionary('-bar'),
  irgendein: wiktionary('irgendein'),
  mehrere: wiktionary('mehrere'),
  einige: wiktionary('einige'),
  muessen: wiktionary('müssen'),
  duerfen: wiktionary('dürfen'),
  koennen: wiktionary('können'),
  sollen: wiktionary('sollen'),
  wollen: wiktionary('wollen'),
} as const satisfies Record<string, Source>;
