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
  // ---- B1.1 -----------------------------------------------------------------------------------
  'b1-1-glueck': [
    { topic: 'past-tense', note: 'mixed verbs: brachte, dachte, wusste, kannte' },
    { topic: 'plusquamperfekt', note: 'including nachdem' },
    { topic: 'temporal-clauses', note: 'als and nachdem' },
  ],
  'b1-1-unterhaltung': [
    { topic: 'concessive-clauses', note: 'obwohl versus trotzdem' },
    { topic: 'relative-clauses', note: 'in the dative and with prepositions' },
  ],
  'b1-1-gesundheit': [
    { topic: 'modal-verbs', note: 'with the passive: Der Blutdruck muss gemessen werden' },
    { topic: 'genitive-prepositions', note: 'the genitive: die Praxis des Arztes' },
    { topic: 'passive', note: 'with modal verbs' },
    { topic: 'genitive' },
  ],
  'b1-1-sprachen': [
    { topic: 'genitive-prepositions', note: 'wegen' },
    { topic: 'polite-forms', note: 'Ich müsste eigentlich …' },
    { topic: 'konjunktiv-2', note: 'unreal situations and polite refusals' },
    { topic: 'connectors', note: 'darum, deswegen, daher' },
  ],
  'b1-1-beruf': [
    { topic: 'infinitive-zu' },
    { topic: 'separable-verbs', note: 'zu between prefix and verb: anzurufen' },
    { topic: 'genitive-prepositions', note: 'während, innerhalb, außerhalb' },
    { topic: 'temporal-clauses', note: 'bevor and während' },
  ],
  'b1-1-service': [
    { topic: 'infinitive-zu', note: 'statt … zu, ohne … zu, um … zu' },
    { topic: 'purpose-clauses', note: 'um … zu versus damit' },
  ],
  'b1-1-wohnen': [
    { topic: 'two-part-conjunctions' },
    { topic: 'genitive-prepositions', note: 'trotz' },
    { topic: 'polite-forms', note: 'Es wäre nett, wenn Sie …' },
    { topic: 'konjunktiv-2', note: 'polite criticism' },
  ],
  'b1-1-freundschaft': [
    { topic: 'adjectives-as-nouns' },
    { topic: 'adjective-endings' },
    { topic: 'n-declension', note: 'review' },
  ],
  'b1-1-zukunft': [
    { topic: 'futur-1', note: 'also assumptions with wohl' },
    { topic: 'passive', note: 'werden as the passive next to Futur I' },
  ],
  'b1-1-feiern': [
    { topic: 'genitive-prepositions', note: 'anlässlich, während, wegen, trotz' },
    { topic: 'polite-forms', note: 'Ich würde gern kommen, aber …' },
    { topic: 'subordinate-clauses', note: 'falls' },
  ],
  'b1-1-umwelt': [
    { topic: 'modal-verbs', note: 'sollte + passive: Plastik sollte vermieden werden' },
    { topic: 'subordinate-clauses', note: 'da (causal)' },
    { topic: 'dative-prepositions', note: 'aus + material' },
    { topic: 'passive', note: 'with sollte' },
  ],
  'b1-1-pannen': [
    { topic: 'konjunktiv-2-past' },
    { topic: 'perfekt', note: 'hätte / wäre follow the same choice as in the Perfekt' },
    { topic: 'konjunktiv-2', note: 'the present forms this unit builds on' },
  ],
  // ---- B1.2 -----------------------------------------------------------------------------------
  'b1-2-kollegen': [
    { topic: 'je-desto' },
    { topic: 'comparison', note: 'mehr, weniger, besser, lieber' },
  ],
  'b1-2-digital': [
    { topic: 'als-ob' },
    { topic: 'polite-forms', note: 'Ich würde eine Sicherungskopie machen' },
    { topic: 'konjunktiv-2', note: 'würde / sollte for advice' },
  ],
  'b1-2-konsum': [
    { topic: 'participles-as-adjectives', note: 'Partizip I and Partizip II' },
    { topic: 'adjective-endings' },
  ],
  'b1-2-weiterbildung': [
    { topic: 'participles-as-adjectives', note: 'Partizip II as an adjective' },
    { topic: 'adjective-endings' },
  ],
  'b1-2-regeln': [{ topic: 'modal-particles' }, { topic: 'passive', note: 'with modal verbs' }],
  'b1-2-engagement': [
    { topic: 'indem-ohne-dass' },
    { topic: 'infinitive-zu', note: 'ohne … zu, statt … zu' },
  ],
  'b1-2-politik': [
    {
      topic: 'comparison',
      note: 'before a noun and with je: die beste Idee, die ich je gehört habe',
    },
    { topic: 'adjective-endings' },
    { topic: 'superlative' },
  ],
  'b1-2-geschichte': [
    { topic: 'passive-past' },
    { topic: 'passive', note: 'Präsens and Präteritum first' },
  ],
  'b1-2-stadt-land': [{ topic: 'relative-wo-was' }],
  'b1-2-heimat': [
    { topic: 'articles', note: 'compound nouns take the article of the last part' },
    { topic: 'word-formation', note: 'compound nouns and verbs as nouns' },
  ],
  'b1-2-kunst': [{ topic: 'nicht-position' }, { topic: 'negation', note: 'nicht or kein' }],
  'b1-2-diskussion': [
    { topic: 'consecutive-clauses' },
    { topic: 'two-part-conjunctions', note: 'einerseits … andererseits' },
  ],
  // ---- B2.1 -----------------------------------------------------------------------------------
  'b2-1-beziehungen': [
    { topic: 'nouns-with-prepositions', note: 'Angst vor, Interesse an, stolz auf' },
    { topic: 'middle-field' },
  ],
  'b2-1-besitz': [
    { topic: 'konjunktiv-1', note: 'er sei, sie habe, with Konjunktiv II as a replacement' },
  ],
  'b2-1-wohlbefinden': [
    { topic: 'causal-expressions', note: 'aufgrund, infolge, angesichts, dank, aus, vor' },
  ],
  'b2-1-kommunikation': [
    { topic: 'assumptions', note: 'Futur I and Futur II, wohl, vermutlich' },
    { topic: 'es-dass', note: 'es, darauf / darüber, dass and zu + infinitive' },
  ],
  'b2-1-teamgeist': [
    { topic: 'state-passive', note: 'ist unterschrieben vs. wird unterschrieben; von and durch' },
  ],
  'b2-1-lebenswege': [
    { topic: 'temporal-connectors', note: 'solange, sobald, ehe, seitdem, sooft, bis' },
  ],
  'b2-1-gesellschaft': [
    { topic: 'noun-verb-phrases', note: 'eine Entscheidung treffen, in Anspruch nehmen' },
    { topic: 'passive', note: 'review: Petitionen werden unterschrieben, wurden eingereicht' },
  ],
  'b2-1-wohnen': [
    { topic: 'relative-wer', note: 'wer / wen / wem for rules and notices' },
    { topic: 'conditional-b2', note: 'falls, sofern, Hätte ich …, andernfalls' },
  ],
  'b2-1-medien': [{ topic: 'text-cohesion', note: 'dadurch, damit, dafür, darüber, daran, dabei' }],
  'b2-1-wissenschaft': [
    { topic: 'passive-alternatives', note: 'sich lassen, sein + zu, -bar' },
    { topic: 'passive', note: 'review: wird gemessen, wurde bewiesen' },
  ],
  'b2-1-unterwegs': [
    { topic: 'auch-wenn', note: 'auch wenn, selbst wenn, zwar … aber, dennoch' },
    { topic: 'konjunktiv-2', note: 'review: Selbst wenn ich Zeit hätte, würde ich …' },
  ],
  'b2-1-klima': [
    { topic: 'nominalisation', note: '-ung, -keit, -heit, der Anstieg der Preise' },
    { topic: 'adversative', note: 'während, dagegen, hingegen, jedoch' },
  ],
  // ---- B2.2 -----------------------------------------------------------------------------------
  'b2-2-beziehungen': [
    { topic: 'noun-prepositions', note: 'Angst vor / um, Streit um / mit, Vorurteile gegen' },
    { topic: 'comparative-clauses', note: 'genauso … wie, anders als, je nachdem, ob' },
  ],
  'b2-2-ernaehrung': [
    { topic: 'modal-hearsay', note: 'sollen and wollen with infinitive Perfekt' },
    { topic: 'nominalisation', note: 'weil … → wegen …, verzichten → der Verzicht' },
  ],
  'b2-2-studium': [
    { topic: 'consecutive-connectors', note: 'folglich, infolgedessen, somit, zu … als dass' },
    { topic: 'noun-verb-phrases', note: 'in Anspruch nehmen, zur Verfügung stellen' },
    { topic: 'word-formation', note: 'negation with un-, in- / il- / ir- and -los' },
  ],
  'b2-2-service': [
    {
      topic: 'passive-alternatives',
      note: 'man, sich lassen, sein + zu, -bar and the passive without a subject',
    },
  ],
  'b2-2-gesundheit': [
    { topic: 'irgend-pronouns', note: 'irgendjemand, einige, manche, mehrere, sämtliche' },
    { topic: 'modal-clauses', note: 'indem, dadurch dass, mithilfe, ohne dass' },
    { topic: 'purpose-clauses', note: 'damit and um … zu for the aim' },
  ],
  'b2-2-sprache': [
    { topic: 'extended-participle', note: 'das vom Kunden bestellte Produkt' },
    {
      topic: 'adversative-connectors',
      note: 'wohingegen, im Gegensatz zu, einerseits … andererseits',
    },
  ],
  'b2-2-wirtschaft': [
    { topic: 'concessive-advanced', note: 'obgleich, wenngleich, dennoch, trotz, ungeachtet' },
  ],
  'b2-2-kunst': [
    { topic: 'relative-wer', note: 'wer, wen, wem, wessen and was in general statements' },
    { topic: 'state-passive', note: 'wird restauriert vs. ist restauriert' },
  ],
  'b2-2-geschichte': [
    {
      topic: 'perfekt-double-infinitive',
      note: 'Ich habe ihn kommen hören; … dass er hat gehen müssen',
    },
    { topic: 'perfekt', note: 'narrating the past' },
    { topic: 'past-tense', note: 'Präteritum for narration' },
    { topic: 'passive', note: 'Passiv Präteritum: wurde … gebaut' },
    { topic: 'temporal-clauses', note: 'nachdem, bevor' },
  ],
  'b2-2-stadt': [
    { topic: 'adjective-prepositions', note: 'stolz auf, zufrieden mit, abhängig von' },
    { topic: 'verbs-with-prepositions', note: 'review: sich interessieren für, abhängen von' },
  ],
  'b2-2-druck': [
    { topic: 'konjunktiv-1', note: 'the past with habe / sei and the Konjunktiv II replacement' },
  ],
  'b2-2-netz': [
    { topic: 'modal-assumption', note: 'muss, dürfte, könnte, kann nicht + infinitive Perfekt' },
  ],

  // ---- C1.1 -----------------------------------------------------------------------------------
  'c1-1-zeit': [
    {
      topic: 'formal-connectors',
      note: 'andernfalls, folglich, hingegen; außer wenn vs. es sei denn',
    },
    { topic: 'word-order', note: 'the verb after an adverb connector' },
    { topic: 'word-formation', note: 'ent-, miss-, zer-' },
  ],
  'c1-1-digital': [
    { topic: 'subjective-modals', note: 'sollen, wollen, müssen, dürfte, könnte' },
    { topic: 'modal-verbs', note: 'the objective meanings you already know' },
  ],
  'c1-1-sprache': [
    { topic: 'konjunktiv-1', note: 'reported speech: er sagt, er habe …' },
    { topic: 'verb-conjugation', note: 'the stem and endings that Konjunktiv I is built on' },
  ],
  'c1-1-manieren': [
    { topic: 'noun-verb-phrases', note: 'in Betracht ziehen, Rücksicht nehmen, Kritik üben' },
    { topic: 'nominal-style', note: 'the same phrases as a feature of formal writing' },
  ],
  'c1-1-tourismus': [
    { topic: 'concessive-restrictive', note: 'wenngleich, so sehr … auch, es sei denn, nur dass' },
  ],
  'c1-1-arbeit': [
    { topic: 'es-functions' },
    { topic: 'intensifiers', note: 'ziemlich, äußerst, höchst, zu' },
    { topic: 'comparison', note: 'graduating with comparatives: viel, weit, deutlich' },
  ],
  'c1-1-lebenswege': [{ topic: 'unreal-consecutive' }],
  'c1-1-studium': [{ topic: 'participial-attributes' }],
  'c1-1-konsum': [{ topic: 'prefix-verbs', note: 'miss-, zer-, ent-, ver-, be-' }],
  'c1-1-wirtschaft': [
    { topic: 'nominal-style', note: 'clauses as noun phrases: wegen, trotz, durch' },
  ],
  'c1-1-gesellschaft': [
    { topic: 'modal-alternatives' },
    { topic: 'lassen', note: 'sich lassen = can be done' },
  ],
  // ---- C1.2 -----------------------------------------------------------------------------------
  'c1-2-finanzen': [{ topic: 'nominal-style' }, { topic: 'written-prepositions' }],
  'c1-2-gesundheit': [{ topic: 'infinitive-perfect' }, { topic: 'nominal-style' }],
  'c1-2-recht': [
    { topic: 'passive', note: 'the forms to replace' },
    { topic: 'passive-substitutes' },
  ],
  'c1-2-psychologie': [
    { topic: 'subjective-modals', note: 'hearsay and doubt: soll, will, dürfte' },
    { topic: 'word-formation' },
  ],
  'c1-2-stadt': [{ topic: 'advanced-connectors' }, { topic: 'adjective-complements' }],
  'c1-2-literatur': [
    { topic: 'advanced-connectors', note: 'linking arguments in a review' },
    { topic: 'word-order', note: 'position 1 and the verb' },
    { topic: 'word-formation' },
  ],
  'c1-2-kino': [{ topic: 'advanced-connectors' }, { topic: 'nominal-style' }],
  'c1-2-geschaeft': [
    { topic: 'advanced-connectors' },
    { topic: 'comparison', note: 'doppelt so … wie, im Vergleich zu' },
  ],
  'c1-2-forschung': [{ topic: 'participial-clauses' }, { topic: 'written-prepositions' }],
  'c1-2-team': [{ topic: 'conditional-clauses' }, { topic: 'modality-verbs' }],
  'c1-2-nachhaltigkeit': [{ topic: 'participial-clauses' }, { topic: 'quantities-graphs' }],
  'c1-2-vortrag': [{ topic: 'advanced-connectors' }, { topic: 'nominal-style' }],
  // ---- C2.1 -----------------------------------------------------------------------------------
  'c2-1-sprache': [{ topic: 'c21-word-formation' }],
  'c2-1-arbeit': [{ topic: 'c21-noun-verb' }],
  'c2-1-wirtschaft': [{ topic: 'c21-contrast-cause' }],
  'c2-1-digital': [
    { topic: 'c21-consecutive', note: 'derart … dass, folglich, somit' },
    { topic: 'c21-futur-2' },
  ],
  'c2-1-ki': [{ topic: 'c21-reported-speech' }],
  'c2-1-medizin': [{ topic: 'c21-nominal-style' }],
  'c2-1-psyche': [{ topic: 'c21-unreal' }],
  'c2-1-medien': [{ topic: 'c21-text-cohesion' }],
  'c2-1-debatte': [{ topic: 'c21-concession' }],
  // ---- C2.2 -----------------------------------------------------------------------------------
  'c2-2-kunst': [{ topic: 'c22-participial-attributes' }],
  'c2-2-literatur': [{ topic: 'c22-subjective-modals' }],
  'c2-2-kulturerbe': [{ topic: 'c22-passive-forms' }],
  'c2-2-recht': [{ topic: 'c22-gerundive' }],
  'c2-2-staat': [{ topic: 'c22-formal-genitive' }],
  'c2-2-engagement': [{ topic: 'c22-prefix-verbs' }],
  'c2-2-klima': [{ topic: 'c22-passive-alternatives' }],
  'c2-2-nuancen': [{ topic: 'c22-nuance-particles' }],
  'c2-2-stellung': [
    { topic: 'c21-concession', note: 'conceding and rebutting' },
    { topic: 'c21-text-cohesion', note: 'linking and concluding an argument' },
  ],
  // ---- French A1.1 ----------------------------------------------------------------------------
  'fr-a1-1-bonjour': [{ topic: 'fr-tu-vous' }, { topic: 'fr-questions', note: 'Comment vas-tu ?' }],
  'fr-a1-1-presenter': [
    { topic: 'fr-pronouns' },
    { topic: 'fr-etre-avoir', note: 'être for who you are' },
    { topic: 'fr-er-verbs' },
    { topic: 'fr-articles' },
    { topic: 'fr-gender', note: 'nationalities and jobs' },
  ],
  'fr-a1-1-nombres': [
    { topic: 'fr-etre-avoir', note: 'avoir for your age, il y a' },
    { topic: 'fr-questions', note: 'quel âge, combien' },
  ],
  'fr-a1-1-famille': [
    { topic: 'fr-possessives' },
    { topic: 'fr-adjectives' },
    { topic: 'fr-cest-il-est' },
    { topic: 'fr-plurals' },
  ],
  'fr-a1-1-loisirs': [{ topic: 'fr-likes' }, { topic: 'fr-jouer-faire' }, { topic: 'fr-negation' }],
  'fr-a1-1-table': [
    { topic: 'fr-partitive' },
    { topic: 'fr-quantities' },
    { topic: 'fr-prendre-vouloir' },
    { topic: 'fr-ir-verbs' },
  ],
  'fr-a1-1-ville': [
    { topic: 'fr-contractions', note: 'au, à la, à l’, aux' },
    { topic: 'fr-place-prepositions' },
    { topic: 'fr-aller' },
    { topic: 'fr-imperative' },
  ],
  'fr-a1-1-temps': [
    { topic: 'fr-demonstratives' },
    { topic: 'fr-futur-proche' },
    { topic: 'fr-adjective-position' },
  ],
  // ---- French A1.2 ----------------------------------------------------------------------------
  'fr-a1-2-journee': [
    { topic: 'fr-pronominal' },
    { topic: 'fr-frequency' },
    { topic: 'fr-sequence', note: 'à, vers, de … à …' },
  ],
  'fr-a1-2-fetes': [
    { topic: 'fr-passe-compose-avoir' },
    { topic: 'fr-time-markers' },
    { topic: 'fr-adjectives', note: 'looks and character' },
  ],
  'fr-a1-2-logement': [
    { topic: 'fr-a12-object-pronouns' },
    { topic: 'fr-y' },
    { topic: 'fr-rules', note: 'infinitive and imperative' },
    { topic: 'fr-place-more' },
  ],
  'fr-a1-2-vacances': [
    { topic: 'fr-a12-comparison' },
    { topic: 'fr-a12-partir' },
    { topic: 'fr-a12-pc-etre' },
    { topic: 'fr-a12-cetait' },
  ],
  'fr-a1-2-sante': [
    { topic: 'fr-a12-avoir-mal' },
    { topic: 'fr-a12-devoir-falloir' },
    { topic: 'fr-a12-lui-leur' },
    { topic: 'fr-a12-pc-pronominal' },
    { topic: 'fr-a12-because' },
  ],
  // ---- French A2.1 ----------------------------------------------------------------------------
  'fr-a2-1-parcours': [
    { topic: 'fr-a21-passe-compose', note: 'naître, aller, se marier' },
    { topic: 'fr-a21-participles' },
    { topic: 'fr-a21-negatives', note: 'rien, personne, plus, pas encore' },
    { topic: 'fr-a21-time-markers', note: 'pendant, depuis, en' },
  ],
  // ---- French A2.2 ----------------------------------------------------------------------------
  'fr-a2-2-sante': [
    { topic: 'fr-object-pronouns', note: 'le, la, les, lui, leur' },
    { topic: 'fr-superlative' },
    { topic: 'fr-interrogative-pronouns' },
  ],
};
