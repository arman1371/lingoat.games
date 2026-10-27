import type { Source } from './sources';

/** Pages fetched while writing the B1.1 and B1.2 lessons (see docs/grammar-sources.md). */
const wp = (page: string, title: string): Source => ({
  title: `Wikipedia (German): ${title}`,
  url: `https://de.wikipedia.org/wiki/${page}`,
});
const wiktionary = (word: string): Source => ({
  title: `Wiktionary (German): ${decodeURIComponent(word)}`,
  url: `https://de.wiktionary.org/wiki/${word}`,
});

export const B1_SOURCES = {
  pluperfect: wp('Plusquamperfekt', 'Plusquamperfekt'),
  nachdem: wiktionary('nachdem'),
  concessive: wp('Konzessivsatz', 'Konzessivsatz'),
  obwohl: wiktionary('obwohl'),
  genitive: wp('Genitiv', 'Genitiv'),
  wegen: wiktionary('wegen'),
  trotz: wiktionary('trotz'),
  waehrend: wiktionary('w%C3%A4hrend'),
  innerhalb: wiktionary('innerhalb'),
  statt: wiktionary('statt'),
  infinitive: wp('Infinitiv', 'Infinitiv'),
  commaRules: wp('Kommaregeln_der_deutschen_Sprache', 'Kommaregeln der deutschen Sprache'),
  brauchen: wiktionary('brauchen'),
  ohne: wiktionary('ohne'),
  weder: wiktionary('weder'),
  sowohl: wiktionary('sowohl'),
  entweder: wiktionary('entweder'),
  sondern: wiktionary('sondern'),
  substantivization: wp('Substantivierung', 'Substantivierung'),
  futur: wp('Futur_I', 'Futur'),
  werden: wiktionary('werden'),
  subjunctive: wp('Konjunktiv_II', 'Konjunktiv im Deutschen'),
  je: wiktionary('je'),
  alsOb: wiktionary('als_ob'),
  participle1: wp('Partizip_I', 'Partizip I'),
  participle2: wp('Partizip_II', 'Partizip II'),
  modalParticles: wp('Abt%C3%B6nungspartikel', 'Abtönungspartikel'),
  indem: wiktionary('indem'),
  passive: wp('Passiv_(Grammatik)', 'Passiv (Grammatik)'),
  relative: wp('Relativsatz', 'Relativsatz'),
  was: wiktionary('was'),
  wo: wiktionary('wo'),
  negation: wp('Negation', 'Negation'),
  nicht: wiktionary('nicht'),
  consecutive: wp('Konsekutivsatz', 'Konsekutivsatz'),
  sodass: wiktionary('sodass'),
} as const satisfies Record<string, Source>;
