import type { Source } from './sources';

/**
 * Pages read for the C1.1 and C1.2 lessons (see docs/grammar-sources.md). Kept apart from
 * `sources.ts` so level families that are written in parallel do not edit the same lines.
 */
const wp = (page: string, title: string): Source => ({
  title: `Wikipedia (German): ${title}`,
  url: `https://de.wikipedia.org/wiki/${page}`,
});

export const C1_SOURCES = {
  conjunctionAdverb: wp('Konjunktionaladverb', 'Konjunktionaladverb'),
  conjunction: wp('Konjunktion_(Wortart)', 'Konjunktion (Wortart)'),
  modalVerb: wp('Modalverb', 'Modalverb'),
  nominalStyle: wp('Nominalstil', 'Nominalstil'),
  supportVerb: wp('Funktionsverbgef%C3%BCge', 'Funktionsverbgefüge'),
  expletive: wp('Expletivum', 'Expletivum'),
  degreeParticle: wp('Gradpartikel', 'Steigerungspartikel (Gradpartikel)'),
  participle1: wp('Partizip_I', 'Partizip I'),
  participle2: wp('Partizip_II', 'Partizip II'),
  participialConstruction: wp('Partizipialkonstruktion', 'Partizipialkonstruktion'),
  gerundive: wp('Gerundivum', 'Gerundivum'),
  separableVerb: wp('Trennbares_Verb', 'Trennbares Verb'),
  consecutiveClause: wp('Konsekutivsatz', 'Konsekutivsatz'),
  concessiveClause: wp('Konzessivsatz', 'Konzessivsatz'),
  conditionalClause: wp('Konditionalsatz', 'Konditionalsatz'),
  infinitive: wp('Infinitiv', 'Infinitiv'),
  government: wp('Rektion', 'Rektion'),
  prepositions: wp('Pr%C3%A4position', 'Präposition (Genitivpräpositionen)'),
  numerals: wp('Zahlwort', 'Zahlwort (Bruchzahlwörter, Multiplikativa)'),
} as const satisfies Record<string, Source>;
