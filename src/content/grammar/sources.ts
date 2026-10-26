/**
 * Reference pages that were fetched and read while writing the lessons (see docs/grammar-sources.md).
 * The lessons are written in our own words; these are the pages a rule was checked against.
 */
export interface Source {
  title: string;
  url: string;
}

const wp = (page: string, title: string): Source => ({
  title: `Wikipedia (German): ${title}`,
  url: `https://de.wikipedia.org/wiki/${page}`,
});
const wiktionary = (word: string): Source => ({
  title: `Wiktionary (German): ${word}`,
  url: `https://de.wiktionary.org/wiki/${word}`,
});

export const SOURCES = {
  verbSecond: wp('Verbzweitstellung', 'Verbzweitstellung'),
  questions: wp('Fragesatz', 'Fragesatz'),
  personalPronouns: wp('Personalpronomen', 'Personalpronomen'),
  strongVerbs: wp('Starkes_Verb', 'Starkes Verb'),
  gender: wp('Genus', 'Genus'),
  article: wp('Artikel_(Wortart)', 'Artikel (Wortart)'),
  kein: wiktionary('kein'),
  nicht: wiktionary('nicht'),
  plural: wp('Plural', 'Plural'),
  possessives: wp('Possessivpronomen', 'Possessivpronomen'),
  seit: wiktionary('seit'),
  vor: wiktionary('vor'),
  um: wiktionary('um'),
  separableVerbs: wp('Trennbares_Verb', 'Trennbares Verb'),
  accusative: wp('Akkusativ', 'Akkusativ'),
  modalVerbs: wp('Modalverb', 'Modalverb'),
  dativeDuden: { title: 'Duden: Dativ', url: 'https://www.duden.de/rechtschreibung/Dativ' },
  dative: wp('Dativ', 'Dativ'),
  dativeObject: wp('Dativobjekt', 'Dativobjekt'),
  prepositions: wp('Pr%C3%A4position', 'Präposition'),
  imperative: wp('Imperativ_(Modus)', 'Imperativ (Modus)'),
  preterite: wp('Pr%C3%A4teritum', 'Präteritum'),
  perfect: wp('Perfekt', 'Perfekt'),
  participle2: wp('Partizip_II', 'Partizip II'),
  comparison: wp('Komparation', 'Komparation'),
  numerals: wp('Zahlwort', 'Zahlwort'),
  conjunctions: wp('Konjunktion_(Wortart)', 'Konjunktion (Wortart)'),
  subjunctive: wp('Konjunktiv_II', 'Konjunktiv im Deutschen'),
} as const satisfies Record<string, Source>;
