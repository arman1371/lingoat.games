import { definiteArticle, type Case, type Gender } from '@/lib/german/articles';
import { reflexiveDativeForms, reflexiveForms } from '@/lib/german/conjugation';
import { declineAdjective } from '@/lib/german/adjectives';
import {
  articleTable,
  compare,
  conjugationTable,
  datPlural,
  examples,
  mistake,
  p,
  section,
  table,
  tip,
} from './build';
import type { GrammarTopic } from './schema';
import { SOURCES } from './sources';

const LEVEL = 'a2-1';

/** "der schnellste Zug", "den schnellsten Zug" … one row per case, from the adjective helpers. */
const superlativeRows = (stem: string, nouns: Record<Gender, string>): string[][] =>
  (
    [
      ['nom', 'Nominative'],
      ['acc', 'Accusative'],
      ['dat', 'Dative'],
    ] as [Case, string][]
  ).map(([c, label]) => [
    label,
    ...(['m', 'f', 'n', 'pl'] as Gender[]).map(
      (g) =>
        `${definiteArticle(g, c)} ${declineAdjective(stem, 'definite', g, c)} ${datPlural(nouns[g], g, c)}`,
    ),
  ]);

export const A21_TOPICS: GrammarTopic[] = [
  {
    id: 'subordinate-clauses',
    title: 'weil, wenn, dass: verb at the end',
    tagline: 'Sentences inside sentences',
    level: LEVEL,
    summary:
      'After weil, wenn, dass and ob the conjugated verb moves to the end of the clause: Ich bleibe zu Hause, weil ich krank bin. If the clause comes first, the main clause starts with its verb.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **main clause** can stand alone (Ich bleibe zu Hause). A **subordinate clause** (Nebensatz) cannot: it depends on the main clause and is introduced by a **subordinating conjunction** such as **weil**, **wenn**, **dass** or **ob**. In a subordinate clause the **conjugated verb goes to the very end**.',
        ),
        table(
          'Common subordinating conjunctions.',
          ['Conjunction', 'Meaning', 'Example'],
          [
            ['weil', 'because (reason)', 'Ich bleibe zu Hause, weil ich krank bin.'],
            ['wenn', 'if / whenever', 'Wenn es regnet, bleibe ich zu Hause.'],
            ['dass', 'that', 'Ich glaube, dass er morgen kommt.'],
            ['ob', 'whether, if (yes/no)', 'Ich weiß nicht, ob er kommt.'],
          ],
        ),
        p('There is always a **comma** between the main clause and the subordinate clause.'),
      ),
      section(
        'verb-end',
        'Where the verbs go',
        p(
          'Only the **conjugated verb** moves to the end. Everything else keeps its place. If the clause has more than one verb, the conjugated verb is the **last** one. A separable verb is **not split** in a subordinate clause.',
        ),
        examples(
          [
            'Ich lerne Deutsch, weil ich in Berlin wohne.',
            'I learn German because I live in Berlin.',
          ],
          [
            'Ich bleibe zu Hause, weil ich arbeiten muss.',
            'I stay at home because I have to work. (modal verb last)',
          ],
          [
            'Er ist müde, weil er früh aufsteht.',
            'He is tired because he gets up early. (auf|stehen stays together)',
          ],
          [
            'Sie ist sauer, weil ich es vergessen habe.',
            'She is angry because I forgot it. (Perfekt: participle, then haben)',
          ],
        ),
      ),
      section(
        'first',
        'Subordinate clause first',
        p(
          'You can start the sentence with the subordinate clause. The whole clause then fills **position 1**, so the main clause continues with its **verb in position 2**: verb – comma – verb.',
        ),
        compare(
          {
            title: 'Main clause first',
            question: 'Ich + verb …',
            example: 'Ich bleibe zu Hause, wenn es regnet.',
          },
          {
            title: 'Subordinate clause first',
            question: '… , verb + ich …',
            example: 'Wenn es regnet, bleibe ich zu Hause.',
          },
        ),
      ),
      section(
        'weil-denn',
        'weil or denn?',
        p(
          'Both give a reason. **denn** joins two main clauses and the verb stays in position 2; **weil** starts a subordinate clause with the verb at the end.',
        ),
        compare(
          {
            title: 'denn',
            question: 'verb in position 2',
            example: 'Ich bleibe hier, denn ich bin müde.',
          },
          {
            title: 'weil',
            question: 'verb at the end',
            example: 'Ich bleibe hier, weil ich müde bin.',
          },
        ),
      ),
      section(
        'wenn',
        'wenn: if and whenever',
        p(
          '**wenn** names a condition (**if**) or something that happens again and again (**whenever**). It is used for the present and future. For one single event in the past use **als** (see the lesson on temporal clauses).',
        ),
        examples(
          [
            'Wenn es kalt ist, trage ich eine Jacke.',
            'If it is cold / When it is cold, I wear a jacket.',
          ],
          ['Wenn du Zeit hast, kannst du mich anrufen.', 'If you have time, you can call me.'],
        ),
        mistake(
          'Watch out',
          '✗ Ich bleibe zu Hause, weil ich bin krank.  ✓ … weil ich krank bin.',
          '✗ Wenn es regnet, ich bleibe zu Hause.  ✓ Wenn es regnet, bleibe ich zu Hause.',
          '✗ Ich weiß nicht, wenn er kommt.  ✓ Ich weiß nicht, ob er kommt.',
        ),
        tip(
          'Quick check',
          'Count the verbs: in a weil/wenn/dass clause the conjugated verb is the last word, and after a clause at the start the next word is a verb.',
        ),
      ),
    ],
    related: ['conjunctions', 'connectors', 'word-order', 'temporal-clauses'],
    sources: [SOURCES.subordinateClause, SOURCES.wenn, SOURCES.conjunctions],
  },
  {
    id: 'connectors',
    title: 'deshalb, trotzdem, dann: verb right after',
    tagline: 'Linking words that behave like any other first word',
    level: LEVEL,
    summary:
      'deshalb, trotzdem, dann, danach and zuerst fill position 1, so the verb follows immediately and the subject comes after it: Es regnet, deshalb bleibe ich zu Hause.',
    sections: [
      section(
        'what',
        'What they do',
        p(
          'These words connect a sentence with the **previous** sentence. They are adverbs, not conjunctions: they take a **place in the sentence** like “heute” or “morgen”. That is why they do **not** send the verb to the end.',
        ),
        table(
          'Linking adverbs.',
          ['Word', 'Meaning', 'Example'],
          [
            [
              'deshalb, deswegen',
              'therefore, that is why (result)',
              'Ich bin müde, deshalb gehe ich ins Bett.',
            ],
            ['trotzdem', 'nevertheless (contrast)', 'Es regnet, trotzdem gehen wir spazieren.'],
            ['zuerst, dann', 'first, then (order)', 'Zuerst esse ich, dann lerne ich.'],
            ['danach', 'after that', 'Ich dusche und danach frühstücke ich.'],
          ],
        ),
      ),
      section(
        'order',
        'The word order',
        p(
          'When the word is in **position 1**, the **verb is in position 2** and the **subject follows the verb**: deshalb **gehe ich** – not “deshalb ich gehe”. The word can also stand later in the sentence: Ich gehe **deshalb** ins Bett.',
        ),
        examples(
          ['Ich habe Hunger. Deshalb esse ich.', 'I am hungry. That is why I am eating.'],
          ['Er ist krank. Trotzdem arbeitet er.', 'He is ill. Even so he works.'],
          ['Ich arbeite trotzdem.', 'I work anyway. (in the middle of the clause)'],
        ),
      ),
      section(
        'compare',
        'deshalb or weil?',
        p(
          'The two sentences say the same thing from different directions. **weil** gives the **reason**, **deshalb** gives the **result**.',
        ),
        compare(
          {
            title: 'weil (reason, verb at the end)',
            question: 'Why do you stay at home?',
            example: 'Ich bleibe zu Hause, weil ich krank bin.',
          },
          {
            title: 'deshalb (result, verb next)',
            question: 'What follows from it?',
            example: 'Ich bin krank, deshalb bleibe ich zu Hause.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Ich bin krank, deshalb ich bleibe zu Hause.  ✓ … deshalb bleibe ich zu Hause.',
          '✗ Ich bin krank, deshalb ich zu Hause bleibe.  ✓ … deshalb bleibe ich zu Hause.',
        ),
      ),
    ],
    related: ['subordinate-clauses', 'conjunctions', 'word-order'],
    sources: [SOURCES.conjunctionalAdverb, SOURCES.deshalb, SOURCES.trotzdem],
  },
  {
    id: 'reflexive-verbs',
    title: 'Reflexive verbs',
    tagline: 'Ich freue mich · Ich wasche mir die Hände',
    level: LEVEL,
    summary:
      'A reflexive verb has a pronoun that refers back to the subject: mich, dich, sich, uns, euch, sich. If the sentence already has an accusative object, the pronoun is dative: mir, dir.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'With a **reflexive verb** the action goes back to the subject: Ich freue **mich**. The little word **mich** is the **reflexive pronoun**. Some verbs are always reflexive (sich freuen, sich bewerben, sich beeilen), others can be reflexive or not (waschen: Ich wasche das Auto. / Ich wasche mich).',
        ),
        conjugationTable('sich freuen (accusative reflexive pronoun).', ['sich freuen'], {
          'sich freuen': reflexiveForms('freuen'),
        }),
        p(
          'The pronoun changes with the person, but for **er, sie, es, wir, sie** it is easy: **sich** for the third person, **uns** for “wir”.',
        ),
      ),
      section(
        'position',
        'Where the pronoun goes',
        p(
          'The reflexive pronoun stands **right after the conjugated verb** in a main clause and, in a subordinate clause, usually **right after the subject or conjunction**. In the Perfekt it stays near the auxiliary.',
        ),
        examples(
          ['Ich freue mich auf das Wochenende.', 'I am looking forward to the weekend.'],
          ['Heute treffen wir uns um acht.', 'We meet at eight today.'],
          ['Ich habe mich beeilt.', 'I hurried. (Perfekt: haben + participle, mich after haben)'],
          [
            'Ich weiß, dass er sich bewirbt.',
            'I know that he is applying. (sich before the verb at the end)',
          ],
        ),
      ),
      section(
        'dative',
        'Accusative or dative pronoun?',
        p(
          'Normally the reflexive pronoun is **accusative** (mich, dich). If the verb already has an **accusative object** – for example a body part – the pronoun becomes the **dative** (mir, dir): the person is the “receiver”.',
        ),
        table(
          'Reflexive pronouns.',
          ['Person', 'Accusative', 'Dative'],
          [
            ['ich', 'mich', 'mir'],
            ['du', 'dich', 'dir'],
            ['er / sie / es', 'sich', 'sich'],
            ['wir', 'uns', 'uns'],
            ['ihr', 'euch', 'euch'],
            ['sie / Sie', 'sich', 'sich'],
          ],
        ),
        conjugationTable('sich die Hände waschen (dative reflexive pronoun).', ['sich waschen'], {
          'sich waschen': reflexiveDativeForms('waschen'),
        }),
        compare(
          {
            title: 'Accusative',
            question: 'no other object',
            example: 'Ich wasche mich.',
          },
          {
            title: 'Dative',
            question: 'another accusative object',
            example: 'Ich wasche mir die Hände.',
          },
        ),
      ),
      section(
        'prepositions',
        'With a preposition',
        p(
          'Many reflexive verbs need a **fixed preposition** and case. Learn the verb together with its preposition.',
        ),
        table(
          'Reflexive verbs with prepositions (all accusative).',
          ['Verb', 'Preposition', 'Example'],
          [
            ['sich bewerben', 'um', 'Ich bewerbe mich um eine Stelle.'],
            ['sich interessieren', 'für', 'Er interessiert sich für Musik.'],
            [
              'sich freuen',
              'auf (future) · über (now, past)',
              'Ich freue mich auf den Urlaub. · … über das Geschenk.',
            ],
            ['sich beschweren', 'über', 'Sie beschwert sich über den Lärm.'],
            ['sich einigen', 'auf', 'Wir einigen uns auf einen Preis.'],
            ['sich entschuldigen', 'für', 'Ich entschuldige mich für die Verspätung.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ich freue mir.  ✓ Ich freue mich.',
          '✗ Ich wasche mich die Hände.  ✓ Ich wasche mir die Hände.',
          '✗ Ich interessiere mich an Musik.  ✓ Ich interessiere mich für Musik.',
        ),
      ),
    ],
    related: ['verbs-with-prepositions', 'accusative', 'dative', 'object-pronouns'],
    sources: [SOURCES.reflexiveVerb, SOURCES.personalPronouns, SOURCES.prepositionalObject],
  },
  {
    id: 'indefinite-pronouns',
    title: 'man, jemand, einer, welche',
    tagline: 'Words for “people”, “somebody” and “one of them”',
    level: LEVEL,
    summary:
      'man (one, you) takes the er/sie/es form. jemand / niemand are people, etwas / nichts / alles are things. To replace a noun use einen, eine, eins, keinen … and welche for the plural.',
    sections: [
      section(
        'man',
        'man: people in general',
        p(
          '**man** means “people in general”, “one” or “you” (not you personally). It is always followed by the **er/sie/es verb form**: man kann, man darf, man muss. It exists only as a subject. In the accusative and dative **einen** and **einem** replace it.',
        ),
        examples(
          ['Hier kann man den Antrag abgeben.', 'You can hand in the application here.'],
          [
            'In Deutschland isst man abends oft Brot.',
            'In Germany people often eat bread in the evening.',
          ],
          ['Regen macht einen müde.', 'Rain makes you tired. (einen = accusative of man)'],
        ),
        tip('Not the same word', '**man** (people) has one n; **der Mann** (the man) has two.'),
      ),
      section(
        'jemand',
        'jemand, niemand and etwas, nichts, alles',
        p(
          '**jemand** (somebody) and **niemand** (nobody) are for **people**. They have no gender and no plural, but they change in the **accusative (-en)** and **dative (-em)**. **etwas** (something), **nichts** (nothing) and **alles** (everything) are for **things** and never change.',
        ),
        table(
          'jemand and niemand in the cases.',
          ['Case', 'jemand', 'niemand', 'Example'],
          [
            ['Nominative', 'jemand', 'niemand', 'Ist jemand da? · Niemand ist da.'],
            ['Accusative', 'jemanden', 'niemanden', 'Ich kenne niemanden hier.'],
            ['Dative', 'jemandem', 'niemandem', 'Mit niemandem sprechen.'],
          ],
        ),
        examples(
          ['Ich brauche etwas zu trinken.', 'I need something to drink.'],
          [
            'Hast du alles? – Ja, ich habe nichts vergessen.',
            'Do you have everything? – Yes, I forgot nothing.',
          ],
        ),
      ),
      section(
        'replace',
        'einen, eine, eins, keinen, welche',
        p(
          "When the noun is already known, you can leave it out and use a **pronoun**: Hast du **einen** Stift? – Ja, ich habe **einen**. The ending shows the noun's gender, so the forms are the same as for **ein-/kein-**, except that the **neuter ends in -s** (eins, keins). For a **plural without an article** use **welche** (positive) or **keine** (negative).",
        ),
        table(
          'Replacing a noun (nominative / accusative).',
          ['Noun', 'Positive', 'Negative', 'Example'],
          [
            [
              'der Stift (masc.)',
              'einer / einen',
              'keiner / keinen',
              'Ich habe einen. · Ich habe keinen.',
            ],
            [
              'die Karte (fem.)',
              'eine / eine',
              'keine / keine',
              'Ich habe eine. · Ich habe keine.',
            ],
            [
              'das Buch (neut.)',
              'eins / eins',
              'keins / keins',
              'Ich habe eins. · Ich habe keins.',
            ],
            [
              'die Fotos (plural)',
              'welche / welche',
              'keine / keine',
              'Ich habe welche. · Ich habe keine.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ich habe ein.  ✓ Ich habe einen. (der Stift) · Ich habe eins. (das Buch)',
          '✗ Ich kenne niemand hier.  ✓ Ich kenne niemanden hier.',
        ),
      ),
    ],
    related: ['negation', 'articles', 'accusative'],
    sources: [SOURCES.indefinitePronoun, SOURCES.man, SOURCES.niemand],
  },
  {
    id: 'superlative',
    title: 'The superlative',
    tagline: 'the fastest, the best, the most',
    level: LEVEL,
    summary:
      'After a verb use am + -sten (Er läuft am schnellsten). Before a noun use the article and an adjective ending (der schnellste Läufer). Adjectives in -t, -d, -s, -z add -esten.',
    sections: [
      section(
        'after-verb',
        'After a verb: am … -sten',
        p(
          'To say that someone or something is the **most** of all, use **am** + the adjective + **-sten**. This form never changes. Adjectives ending in **-d, -t, -s, -ß, -z** add **-esten** (am ältesten, am heißesten), and many add an **umlaut** (am kältesten, am längsten).',
        ),
        table(
          'Superlative after a verb.',
          ['Adjective', 'Comparative', 'Superlative'],
          [
            ['schnell', 'schneller', 'am schnellsten'],
            ['billig', 'billiger', 'am billigsten'],
            ['kalt', 'kälter', 'am kältesten'],
            ['gut', 'besser', 'am besten'],
            ['gern', 'lieber', 'am liebsten'],
            ['viel', 'mehr', 'am meisten'],
          ],
        ),
        examples(
          ['Im Januar ist es am kältesten.', 'It is coldest in January.'],
          ['Der Zug ist am schnellsten.', 'The train is the fastest.'],
          ['Ich esse am liebsten Pizza.', 'I like to eat pizza best of all.'],
        ),
      ),
      section(
        'before-noun',
        'Before a noun: der schnellste Zug',
        p(
          'In front of a noun the superlative is an **adjective** and gets an ending. It comes with the **definite article** (der, die, das), so the endings are the weak ones: **-e** in the nominative singular and the feminine/neuter accusative, otherwise **-en**.',
        ),
        table(
          'The superlative after der, die, das.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          superlativeRows('schnellst', {
            m: 'Zug',
            f: 'Bahn',
            n: 'Auto',
            pl: 'Züge',
          }),
        ),
        examples(
          ['Das ist der höchste Berg in Deutschland.', 'That is the highest mountain in Germany.'],
          ['Sie ist die beste Schülerin.', 'She is the best pupil.'],
          [
            'Ich nehme den billigsten Zug.',
            'I take the cheapest train. (masculine accusative: -en)',
          ],
        ),
      ),
      section(
        'compare',
        'Which form do I need?',
        compare(
          {
            title: 'am … -sten',
            question: 'after sein or another verb',
            example: 'Dieser Zug ist am schnellsten.',
          },
          {
            title: 'der … -ste',
            question: 'before a noun',
            example: 'Das ist der schnellste Zug.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Das ist am besten Film.  ✓ Das ist der beste Film.',
          '✗ Er läuft am schnellste.  ✓ Er läuft am schnellsten.',
          '✗ Das ist der guteste Film.  ✓ Das ist der beste Film. (gut → besser → best-)',
        ),
      ),
    ],
    related: ['comparison', 'adjective-endings', 'articles'],
    sources: [SOURCES.comparison, SOURCES.adjective],
  },
  {
    id: 'dative-prepositions',
    title: 'mit, von, zu, seit … + dative',
    tagline: 'Prepositions that always take the dative',
    level: LEVEL,
    summary:
      'aus, bei, mit, nach, seit, von, zu and gegenüber always take the dative, whatever the sentence: mit dem Bus, bei meiner Oma. zu dem → zum, zu der → zur, von dem → vom, bei dem → beim.',
    sections: [
      section(
        'list',
        'The prepositions',
        p(
          'Some prepositions are followed by the **dative** every time. You do not have to decide between accusative and dative – you only have to know the list.',
        ),
        table(
          'Prepositions with the dative.',
          ['Preposition', 'Meaning', 'Example'],
          [
            ['aus', 'out of, from (a place)', 'Ich komme aus der Türkei.'],
            ['bei', 'at, near, with (a person or firm)', 'Ich wohne bei meinen Eltern.'],
            ['mit', 'with, by (transport)', 'Ich fahre mit dem Bus.'],
            ['nach', 'to (cities, countries), after', 'Wir fahren nach Berlin. · nach dem Essen'],
            ['seit', 'since, for (still going on)', 'Ich lerne seit einem Jahr Deutsch.'],
            ['von', 'from, of', 'Das Geschenk ist von meiner Schwester.'],
            ['zu', 'to (people, buildings)', 'Ich gehe zu meinem Arzt.'],
            ['gegenüber', 'opposite', 'Die Bank ist gegenüber dem Bahnhof.'],
          ],
        ),
      ),
      section(
        'forms',
        'The forms',
        articleTable('Definite article by case; the dative row is highlighted.', 'dat', 'dative-n'),
        p(
          'Masculine and neuter use **dem**, feminine **der** and the plural **den** (and the noun usually adds **-n**).',
        ),
        examples([
          'mit dem Auto · mit der Bahn · mit dem Kind · mit den Kindern',
          'by car · by train · with the child · with the children',
        ]),
      ),
      section(
        'contractions',
        'Short forms',
        p(
          'Some prepositions melt together with **dem** and **der**. The short form is the normal one in speaking and writing.',
        ),
        table(
          'Contractions.',
          ['Long', 'Short', 'Example'],
          [
            ['zu dem', 'zum', 'Ich gehe zum Bahnhof.'],
            ['zu der', 'zur', 'Ich gehe zur Schule.'],
            ['von dem', 'vom', 'Er kommt vom Arzt.'],
            ['bei dem', 'beim', 'Ich bin beim Zahnarzt.'],
          ],
        ),
      ),
      section(
        'nach-zu',
        'nach or zu?',
        compare(
          {
            title: 'nach',
            question: 'Wohin? cities, countries, “home”',
            example: 'Ich fahre nach Wien. · Ich gehe nach Hause.',
          },
          {
            title: 'zu',
            question: 'Wohin? people and buildings',
            example: 'Ich gehe zu meiner Freundin. · Ich gehe zum Bahnhof.',
          },
        ),
        mistake(
          'Watch out',
          '✗ mit den Auto  ✓ mit dem Auto',
          '✗ Ich gehe nach den Arzt.  ✓ Ich gehe zum Arzt.',
          '✗ Ich fahre zu Berlin.  ✓ Ich fahre nach Berlin.',
        ),
      ),
    ],
    related: ['dative', 'two-way-prepositions', 'prepositions-of-time'],
    sources: [SOURCES.prepositions, SOURCES.dative, SOURCES.dativeDuden],
  },
  {
    id: 'genitive',
    title: 'Genitive: Annas Auto, das Auto des Vaters',
    tagline: 'Whose is it?',
    level: LEVEL,
    summary:
      'The genitive answers “Wessen?” (whose?). With names add -s without an apostrophe: Annas Bruder. In speaking von + dative is common: das Auto von meiner Mutter. With articles use des (m/n) and der (f/pl).',
    sections: [
      section(
        'names',
        'Names: add -s',
        p(
          'To say that something belongs to a person, put the **name first** and add **-s**: **Annas** Bruder, **Peters** Frau. There is **no apostrophe** (unlike English). Names that already end in an s-sound take an apostrophe in writing: Klaus’ Auto. The question word is **Wessen?** (whose).',
        ),
        examples(
          ['Annas Bruder wohnt in Köln.', 'Anna’s brother lives in Cologne.'],
          [
            'Wessen Auto ist das? – Das ist Peters Auto.',
            'Whose car is that? – That is Peter’s car.',
          ],
        ),
      ),
      section(
        'von',
        'Everything else in speaking: von + dative',
        p(
          'For other nouns, spoken German usually avoids the genitive and uses **von + dative** instead. It works with every noun, so it is a safe choice.',
        ),
        compare(
          {
            title: 'Spoken: von + dative',
            question: 'Wessen? in conversation',
            example: 'Das ist das Auto von meinem Vater.',
          },
          {
            title: 'Written: genitive',
            question: 'Wessen? in a text',
            example: 'Das ist das Auto meines Vaters.',
          },
        ),
      ),
      section(
        'articles',
        'The genitive articles',
        table(
          'The definite article in the four cases; the genitive row is highlighted.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          [
            ['Nominative', 'der', 'die', 'das', 'die'],
            ['Accusative', 'den', 'die', 'das', 'die'],
            ['Dative', 'dem', 'der', 'dem', 'den'],
            ['Genitive', 'des', 'der', 'des', 'der'],
          ],
          3,
        ),
        p(
          'Masculine and neuter nouns also get **-s** (or **-es** after a sibilant or in one-syllable words): das Auto des Vater**s**, das Ende des Film**s**, das Dach des Hause**s**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Anna’s Bruder  ✓ Annas Bruder',
          '✗ das Auto von Peters  ✓ das Auto von Peter · Peters Auto',
          '✗ das Auto des Vater  ✓ das Auto des Vaters',
        ),
        tip(
          'Later',
          'Some prepositions take the genitive too (wegen, trotz, während). You will meet them at higher levels.',
        ),
      ),
    ],
    related: ['possessives', 'dative', 'articles'],
    sources: [SOURCES.genitive, SOURCES.article],
  },
];
