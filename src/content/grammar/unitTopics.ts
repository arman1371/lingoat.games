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
};
