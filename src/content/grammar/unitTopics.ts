import type { UnitTopicRef } from './schema';

/**
 * Which full lessons a unit teaches (keys are unit ids). `note` says what this unit adds to the
 * topic. Several units may link to the same topic; the lesson itself is written once.
 */
export const UNIT_TOPICS: Record<string, UnitTopicRef[]> = {
  // ---- A1.1 -----------------------------------------------------------------------------------
  'a1-1-hallo': [{ topic: 'word-order' }, { topic: 'questions' }],
  'a1-1-wer': [{ topic: 'pronouns' }, { topic: 'verb-conjugation', note: 'heißen and sein' }],
  'a1-1-woher': [
    { topic: 'questions', note: 'woher, wo, welche and yes/no questions' },
    { topic: 'verb-conjugation', note: 'kommen, wohnen, sprechen' },
  ],
  'a1-1-zahlen': [{ topic: 'questions', note: 'wie alt, wie schreibt man' }],
  'a1-1-familie': [
    { topic: 'verb-conjugation', note: 'haben' },
    { topic: 'possessives' },
    { topic: 'plurals' },
    { topic: 'negation', note: 'kein / keine' },
  ],
  'a1-1-freizeit': [
    { topic: 'modal-verbs', note: 'können and wollen' },
    { topic: 'word-order', note: 'the verb at the end' },
  ],
  'a1-1-tag': [
    { topic: 'prepositions-of-time', note: 'am, um, von … bis' },
    { topic: 'separable-verbs' },
  ],
  'a1-1-einkaufen': [
    { topic: 'articles', note: 'der / die / das and ein / eine' },
    { topic: 'negation', note: 'kein / keine' },
    { topic: 'accusative' },
    { topic: 'plurals' },
  ],
  // ---- A1.2 -----------------------------------------------------------------------------------
  'a1-2-stadt': [
    { topic: 'two-way-prepositions', note: 'Wo? and Wohin? with places in town' },
    { topic: 'imperative', note: 'the Sie form' },
    { topic: 'ordinal-numbers' },
  ],
  'a1-2-wohnen': [
    { topic: 'two-way-prepositions', note: 'stehen / stellen, liegen / legen' },
    { topic: 'dative', note: 'mit + dative' },
  ],
  'a1-2-arbeit': [
    { topic: 'prepositions-of-time', note: 'seit, vor, ab, bis, nach' },
    { topic: 'past-tense', note: 'war and hatte' },
    { topic: 'perfekt' },
  ],
  'a1-2-gesundheit': [
    { topic: 'object-pronouns', note: 'mir, dir, ihm … and Wie geht es dir?' },
    { topic: 'modal-verbs', note: 'müssen, dürfen, sollen' },
    { topic: 'imperative', note: 'du, ihr and Sie' },
  ],
  'a1-2-kleidung': [
    { topic: 'dative', note: 'gefallen, passen, stehen, gehören' },
    { topic: 'object-pronouns', note: 'mich, dich, ihn …' },
    { topic: 'comparison' },
    { topic: 'ordinal-numbers', note: 'floors: im dritten Stock' },
  ],
  'a1-2-reisen': [
    { topic: 'perfekt', note: 'haben and sein' },
    { topic: 'past-tense', note: 'war and hatte for descriptions' },
    { topic: 'conjunctions' },
  ],
  'a1-2-feste': [
    { topic: 'ordinal-numbers', note: 'dates: am dritten Mai' },
    { topic: 'dative', note: 'schenken, gratulieren, danken' },
    { topic: 'separable-verbs', note: 'einladen, mitbringen' },
  ],
  'a1-2-termine': [
    { topic: 'polite-forms', note: 'würde, könnte, hätte' },
    { topic: 'prepositions-of-time' },
    { topic: 'possessives', note: 'mein, dein, Ihr' },
    { topic: 'separable-verbs', note: 'anrufen, zurückrufen' },
  ],
  'a1-2-aemter': [
    { topic: 'object-pronouns', note: 'ihn, sie, es' },
    { topic: 'possessives' },
    { topic: 'imperative', note: 'Bitte + Sie-imperative' },
    { topic: 'conjunctions' },
  ],
  'a1-2-alltag': [
    { topic: 'modal-verbs', note: 'man darf, man muss, ich möchte' },
    { topic: 'polite-forms', note: 'Ich würde gern …, Ich hätte gern …' },
    { topic: 'comparison' },
    { topic: 'conjunctions' },
  ],
  // ---- B1.1 -----------------------------------------------------------------------------------
  'b1-1-glueck': [
    { topic: 'past-tense', note: 'mixed verbs: brachte, dachte, wusste, kannte' },
    { topic: 'plusquamperfekt', note: 'including nachdem' },
  ],
  'b1-1-unterhaltung': [{ topic: 'concessive-clauses', note: 'obwohl versus trotzdem' }],
  'b1-1-gesundheit': [
    { topic: 'modal-verbs', note: 'with the passive: Der Blutdruck muss gemessen werden' },
    { topic: 'genitive-prepositions', note: 'the genitive: die Praxis des Arztes' },
  ],
  'b1-1-sprachen': [
    { topic: 'genitive-prepositions', note: 'wegen' },
    { topic: 'polite-forms', note: 'Ich müsste eigentlich …' },
  ],
  'b1-1-beruf': [
    { topic: 'infinitive-zu' },
    { topic: 'separable-verbs', note: 'zu between prefix and verb: anzurufen' },
    { topic: 'genitive-prepositions', note: 'während, innerhalb, außerhalb' },
  ],
  'b1-1-service': [{ topic: 'infinitive-zu', note: 'statt … zu, ohne … zu, um … zu' }],
  'b1-1-wohnen': [
    { topic: 'two-part-conjunctions' },
    { topic: 'genitive-prepositions', note: 'trotz' },
    { topic: 'polite-forms', note: 'Es wäre nett, wenn Sie …' },
  ],
  'b1-1-freundschaft': [{ topic: 'adjectives-as-nouns' }],
  'b1-1-zukunft': [{ topic: 'futur-1', note: 'also assumptions with wohl' }],
  'b1-1-feiern': [
    { topic: 'genitive-prepositions', note: 'anlässlich, während, wegen, trotz' },
    { topic: 'polite-forms', note: 'Ich würde gern kommen, aber …' },
  ],
  'b1-1-umwelt': [
    { topic: 'modal-verbs', note: 'sollte + passive: Plastik sollte vermieden werden' },
  ],
  'b1-1-pannen': [
    { topic: 'konjunktiv-2-past' },
    { topic: 'perfekt', note: 'hätte / wäre follow the same choice as in the Perfekt' },
  ],
  // ---- B1.2 -----------------------------------------------------------------------------------
  'b1-2-kollegen': [
    { topic: 'je-desto' },
    { topic: 'comparison', note: 'mehr, weniger, besser, lieber' },
  ],
  'b1-2-digital': [
    { topic: 'als-ob' },
    { topic: 'polite-forms', note: 'Ich würde eine Sicherungskopie machen' },
  ],
  'b1-2-konsum': [{ topic: 'participles-as-adjectives', note: 'Partizip I and Partizip II' }],
  'b1-2-weiterbildung': [
    { topic: 'participles-as-adjectives', note: 'Partizip II as an adjective' },
  ],
  'b1-2-regeln': [{ topic: 'modal-particles' }],
  'b1-2-engagement': [
    { topic: 'indem-ohne-dass' },
    { topic: 'infinitive-zu', note: 'ohne … zu, statt … zu' },
  ],
  'b1-2-politik': [
    {
      topic: 'comparison',
      note: 'before a noun and with je: die beste Idee, die ich je gehört habe',
    },
  ],
  'b1-2-geschichte': [{ topic: 'passive-past' }],
  'b1-2-stadt-land': [{ topic: 'relative-wo-was' }],
  'b1-2-heimat': [{ topic: 'articles', note: 'compound nouns take the article of the last part' }],
  'b1-2-kunst': [{ topic: 'nicht-position' }, { topic: 'negation', note: 'nicht or kein' }],
  'b1-2-diskussion': [
    { topic: 'consecutive-clauses' },
    { topic: 'two-part-conjunctions', note: 'einerseits … andererseits' },
  ],
};
