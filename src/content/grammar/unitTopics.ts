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
  // ---- A2.1 -----------------------------------------------------------------------------------
  'a2-1-online': [
    { topic: 'separable-verbs', note: 'herunterladen, ausdrucken, einloggen' },
    { topic: 'perfekt', note: 'separable verbs and verbs without ge-' },
  ],
  'a2-1-freizeit': [
    { topic: 'connectors', note: 'zuerst, dann, danach' },
    { topic: 'prepositions-of-time', note: 'bis, ab, für' },
    { topic: 'indefinite-pronouns', note: 'alles, etwas, nichts' },
    { topic: 'separable-verbs', note: 'einladen, stattfinden, mitkommen' },
  ],
  'a2-1-wetter': [
    { topic: 'subordinate-clauses', note: 'wenn-clauses' },
    { topic: 'comparison', note: 'wärmer als, so warm wie' },
    { topic: 'superlative', note: 'am kältesten, am liebsten' },
  ],
  'a2-1-bahn': [
    { topic: 'comparison', note: 'schneller als' },
    { topic: 'superlative', note: 'am billigsten, der schnellste Zug' },
    { topic: 'dative-prepositions', note: 'mit, nach, von, zu, bei' },
    { topic: 'separable-verbs', note: 'abfahren, ankommen, umsteigen' },
  ],
  'a2-1-wohnung': [
    { topic: 'two-way-prepositions', note: 'stellen / stehen, legen / liegen, hängen' },
    { topic: 'accusative', note: 'Wohin?' },
    { topic: 'dative', note: 'Wo?' },
  ],
  'a2-1-aemter': [
    { topic: 'indefinite-pronouns', note: 'man, einen / keinen / eins / welche' },
    { topic: 'separable-verbs', note: 'ausfüllen, abgeben' },
  ],
  'a2-1-familie': [
    { topic: 'genitive', note: 'Annas Bruder, Peters Frau' },
    { topic: 'object-pronouns', note: 'mich / mir, ihn / ihm …' },
    { topic: 'dative', note: 'geben, schenken, zeigen, helfen, gehören' },
  ],
  'a2-1-schule': [
    { topic: 'prepositions-of-time', note: 'seit and vor + dative' },
    { topic: 'subordinate-clauses', note: 'weil' },
    { topic: 'conjunctions', note: 'denn' },
    { topic: 'perfekt', note: 'verbs without ge-: studiert, bestanden' },
  ],
  'a2-1-jobsuche': [
    { topic: 'reflexive-verbs', note: 'sich bewerben um, sich interessieren für' },
    { topic: 'connectors', note: 'deshalb' },
    { topic: 'subordinate-clauses', note: 'weil' },
  ],
  'a2-1-beruf': [
    { topic: 'perfekt', note: 'regular and irregular verbs, sein and haben' },
    { topic: 'prepositions-of-time', note: 'von … bis, seit, vor, ab' },
    { topic: 'subordinate-clauses', note: 'weil' },
    { topic: 'connectors', note: 'deshalb' },
  ],
  // ---- A2.2 -----------------------------------------------------------------------------------
  'a2-2-lernen': [
    { topic: 'konjunktiv-2', note: 'advice with sollte' },
    { topic: 'connectors', note: 'deshalb and trotzdem' },
    { topic: 'subordinate-clauses', note: 'weil' },
    { topic: 'word-formation', note: '-ung, -er, -in' },
  ],
  'a2-2-sport': [
    { topic: 'verbs-with-prepositions', note: 'warten auf, denken an, träumen von' },
    { topic: 'konjunktiv-2', note: 'Wie wäre es mit …?' },
  ],
  'a2-2-nachbarn': [
    { topic: 'lassen' },
    { topic: 'polite-forms', note: 'Könnten Sie …? Würden Sie …?' },
    { topic: 'reflexive-verbs', note: 'sich beschweren über, sich entschuldigen für' },
    { topic: 'verbs-with-prepositions' },
  ],
  'a2-2-kunst': [
    { topic: 'adjective-endings', note: 'after der / die / das' },
    { topic: 'questions', note: 'Was für ein …?' },
  ],
  'a2-2-wuensche': [
    { topic: 'konjunktiv-2', note: 'wishes and unreal wenn-clauses' },
    { topic: 'temporal-clauses', note: 'bis and seitdem' },
    { topic: 'prepositions-of-time', note: 'über, von … an, ab' },
    { topic: 'conjunctions', note: 'aber, sondern' },
  ],
  'a2-2-feste': [
    { topic: 'indefinite-pronouns', note: 'jemand, niemand' },
    { topic: 'n-declension' },
    { topic: 'polite-forms', note: 'du and Sie' },
  ],
  'a2-2-post': [
    { topic: 'passive', note: 'present tense' },
    { topic: 'indirect-questions' },
    { topic: 'object-pronouns', note: 'two objects: Ich schicke es dir.' },
  ],
  'a2-2-werbung': [
    { topic: 'adjective-endings', note: 'after ein / kein / mein and without an article' },
    { topic: 'comparison', note: 'before a noun: das günstigere Angebot' },
    { topic: 'word-formation', note: 'un-, -los, -bar, -ig, -isch' },
    { topic: 'subordinate-clauses', note: 'dass' },
  ],
  'a2-2-reisen': [
    { topic: 'route-prepositions' },
    { topic: 'two-way-prepositions', note: 'Wo? Wohin? Woher?' },
    { topic: 'word-formation', note: 'compound nouns and -chen' },
  ],
  'a2-2-bank': [
    { topic: 'purpose-clauses', note: 'um … zu, damit, zum' },
    { topic: 'questions', note: 'Wozu? Wofür?' },
  ],
  'a2-2-leben': [
    { topic: 'past-tense', note: 'regular and irregular verbs' },
    { topic: 'perfekt', note: 'speaking versus writing' },
    { topic: 'temporal-clauses', note: 'als and wenn' },
  ],
  'a2-2-arbeit': [
    { topic: 'relative-clauses', note: 'nominative and accusative' },
    { topic: 'reflexive-verbs', note: 'dative reflexive pronouns' },
    { topic: 'passive', note: 'review' },
  ],
};
