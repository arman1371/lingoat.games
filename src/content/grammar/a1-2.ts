import { conjugate, conjugatePreterite, konjunktiv2 } from '@/lib/german/conjugation';
import { ordinal, ordinalDative } from '@/lib/german/ordinals';
import {
  articleTable,
  compare,
  conjugationTable,
  examples,
  indefiniteTable,
  list,
  mistake,
  p,
  section,
  table,
  tip,
} from './build';
import type { GrammarTopic } from './schema';
import { SOURCES } from './sources';

const LEVEL = 'a1-2';

export const A12_TOPICS: GrammarTopic[] = [
  {
    id: 'dative',
    title: 'Dative (Wem?)',
    tagline: 'Who receives it? To or for whom?',
    level: LEVEL,
    summary:
      'The dative marks the person or thing that receives something or is affected by it: Ich gebe dem Mann das Buch. It also follows certain verbs and prepositions.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'German shows the job of a noun with its **case** instead of with word order. The **dative** (the “Wem?” case) is the case of the **indirect object**: the person or thing that receives something, or that something is done to or for. The question word is **Wem?** (to whom, for whom).',
        ),
        examples(
          [
            'Ich gebe dem Mann das Buch.',
            'I give the man the book. (Wem gebe ich das Buch? – dem Mann)',
          ],
          ['Sie hilft der Frau.', 'She helps the woman.'],
          ['Das Kleid gefällt mir.', 'I like the dress. (literally: the dress is pleasing to me)'],
        ),
      ),
      section(
        'when',
        'When it is used',
        list(
          '**Indirect object** of verbs of giving and telling: geben, schenken, zeigen, schicken, sagen, erklären (Ich schenke meiner Mutter Blumen).',
          '**Dative verbs** that take only a dative: helfen, gefallen, gehören, danken, antworten, gratulieren, passen, schmecken (Ich helfe dir).',
          '**Dative prepositions**, always followed by the dative: aus, außer, bei, mit, nach, seit, von, zu, gegenüber (mit dem Auto, bei meiner Oma, zu mir).',
          '**Two-way prepositions** when they answer **Wo?** (in, an, auf, neben, vor, hinter, über, unter, zwischen): Das Buch liegt auf dem Tisch.',
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          'The dative changes the article of **every** gender. Masculine and neuter share **dem** (einem), feminine is **der** (einer) and the plural is **den**. Most nouns also add **-n** in the dative plural.',
        ),
        articleTable(
          'The definite article in three cases; the dative row is highlighted.',
          'dat',
          'dative-n',
        ),
        indefiniteTable('The indefinite article in three cases.', 'dat'),
        table(
          'Personal pronouns in the dative.',
          ['Nominative', 'Dative', 'Example'],
          [
            ['ich', 'mir', 'Er hilft mir.'],
            ['du', 'dir', 'Ich danke dir.'],
            ['er / es', 'ihm', 'Das Buch gehört ihm.'],
            ['sie (she)', 'ihr', 'Wir schenken ihr Blumen.'],
            ['wir', 'uns', 'Sie zeigt uns die Stadt.'],
            ['ihr', 'euch', 'Ich antworte euch.'],
            ['sie (they)', 'ihnen', 'Ich helfe ihnen.'],
            ['Sie', 'Ihnen', 'Wie geht es Ihnen?'],
          ],
        ),
        p(
          'In the dative plural a noun adds **-n** (die Kinder → mit den Kinder**n**), unless the plural already ends in **-n** or **-s**: mit den Auto**s**.',
        ),
      ),
      section(
        'compare',
        'Dative or accusative?',
        compare(
          { title: 'Accusative', question: 'Wen? Was?', example: 'Ich sehe den Mann.' },
          { title: 'Dative', question: 'Wem?', example: 'Ich helfe dem Mann.' },
        ),
        p(
          'With verbs that have two objects the dative (the receiver) comes first and the accusative (the thing) second: **Ich gebe dem Mann das Buch.** A pronoun comes before a noun: Ich gebe **ihm** das Buch. With two pronouns the accusative comes first: Ich gebe **es ihm**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ mit den Auto  ✓ mit dem Auto',
          '✗ Ich helfe ihn.  ✓ Ich helfe ihm.',
          '✗ Das Kleid gefällt mich.  ✓ Das Kleid gefällt mir.',
          '✗ mit den Kinder  ✓ mit den Kindern',
        ),
      ),
    ],
    related: ['accusative', 'object-pronouns', 'two-way-prepositions', 'plurals'],
    sources: [SOURCES.dativeDuden, SOURCES.dative, SOURCES.dativeObject, SOURCES.prepositions],
    reviewed: false,
  },
  {
    id: 'object-pronouns',
    title: 'mich or mir?',
    tagline: 'Pronouns in the accusative and dative',
    level: LEVEL,
    summary:
      'Accusative pronouns are direct objects (mich, dich, ihn, sie, es, uns, euch, sie, Sie). Dative pronouns are receivers and follow verbs like helfen, gefallen and gehören (mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen).',
    sections: [
      section(
        'table',
        'The forms',
        table(
          'Personal pronouns by case.',
          ['Nominative', 'Accusative (Wen?)', 'Dative (Wem?)'],
          [
            ['ich', 'mich', 'mir'],
            ['du', 'dich', 'dir'],
            ['er', 'ihn', 'ihm'],
            ['sie (she)', 'sie', 'ihr'],
            ['es', 'es', 'ihm'],
            ['wir', 'uns', 'uns'],
            ['ihr', 'euch', 'euch'],
            ['sie (they)', 'sie', 'ihnen'],
            ['Sie', 'Sie', 'Ihnen'],
          ],
        ),
        p(
          'Only a few forms are the same in both cases: **uns** and **euch**. Everything else you have to tell apart.',
        ),
      ),
      section(
        'choose',
        'Which one do I need?',
        p(
          'The verb decides. Most verbs take the accusative. A group of common verbs takes the dative instead, and they are worth learning as a list.',
        ),
        table(
          'Verbs with an accusative or a dative object.',
          ['Accusative (Wen? Was?)', 'Dative (Wem?)'],
          [
            ['sehen, kennen, lieben, besuchen', 'helfen, danken, antworten'],
            ['suchen, brauchen, nehmen', 'gehören, gefallen, passen'],
            ['Ich sehe ihn. Ich besuche sie.', 'Ich helfe ihm. Das gehört ihr.'],
          ],
        ),
        examples(
          ['Wie geht es dir?', 'How are you?'],
          ['Mir ist kalt. / Mir tut der Kopf weh.', 'I am cold. / My head hurts.'],
          ['Die Jacke gefällt mir.', 'I like the jacket.'],
        ),
      ),
      section(
        'two',
        'Two objects',
        p(
          'With verbs like geben or schenken the dative pronoun comes first when the other object is a noun, and the accusative pronoun comes first when both are pronouns.',
        ),
        examples(
          ['Ich gebe ihm das Buch.', 'I give him the book.'],
          ['Ich gebe es ihm.', 'I give it to him.'],
        ),
        mistake(
          'Watch out',
          '✗ Ich helfe dich.  ✓ Ich helfe dir.',
          '✗ Ich sehe ihm.  ✓ Ich sehe ihn.',
          '✗ Das Kleid gefällt mich.  ✓ Das Kleid gefällt mir.',
        ),
      ),
    ],
    related: ['dative', 'accusative', 'pronouns'],
    sources: [SOURCES.personalPronouns, SOURCES.dativeObject],
    reviewed: false,
  },
  {
    id: 'two-way-prepositions',
    title: 'Wo? or Wohin?',
    tagline: 'Dative for position, accusative for movement',
    level: LEVEL,
    summary:
      'in, an, auf, über, unter, vor, hinter, neben and zwischen take the dative when they answer Wo? (position) and the accusative when they answer Wohin? (movement to a place).',
    sections: [
      section(
        'rule',
        'The rule',
        p(
          'Nine prepositions are “two-way” prepositions: **an, auf, hinter, in, neben, über, unter, vor, zwischen**. Ask the question: **Wo?** (where is it?) → **dative**. **Wohin?** (where to?) → **accusative**.',
        ),
        table(
          'The same preposition with the dative (position) and the accusative (movement).',
          ['Preposition', 'Wo? (dative)', 'Wohin? (accusative)'],
          [
            ['in', 'Ich bin im Park.', 'Ich gehe in den Park.'],
            ['an', 'Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.'],
            ['auf', 'Das Buch liegt auf dem Tisch.', 'Ich lege das Buch auf den Tisch.'],
            ['neben', 'Die Lampe steht neben dem Sofa.', 'Ich stelle die Lampe neben das Sofa.'],
            ['vor', 'Die Schuhe stehen vor der Tür.', 'Stell die Schuhe vor die Tür.'],
          ],
        ),
        p(
          'The other prepositions work the same way: hinter (behind), über (above, over), unter (under) and zwischen (between).',
        ),
      ),
      section(
        'verbs',
        'Verbs that go with them',
        p(
          'German uses two different verbs: one for a position (no movement) and one for putting something somewhere (movement). The first group goes with **Wo? + dative**, the second with **Wohin? + accusative**.',
        ),
        table(
          'Position verbs and placing verbs.',
          ['Wo? (position, dative)', 'Wohin? (placing, accusative)'],
          [
            ['stehen (to stand)', 'stellen (to put upright)'],
            ['liegen (to lie)', 'legen (to lay down)'],
            ['sitzen (to sit)', 'setzen (to seat), sich setzen (to sit down)'],
            ['hängen (to hang, intransitive)', 'hängen (to hang something up)'],
          ],
        ),
      ),
      section(
        'contractions',
        'Short forms',
        p(
          'Some prepositions join the article: **in dem → im**, **an dem → am**, **in das → ins**, **an das → ans**, **auf das → aufs**.',
        ),
        examples(
          ['Ich bin im Kino.', 'I am at the cinema.'],
          ['Wir gehen ins Kino.', 'We are going to the cinema.'],
        ),
        mistake(
          'Watch out',
          '✗ Ich gehe in dem Park.  ✓ Ich gehe in den Park.',
          '✗ Ich bin in den Park.  ✓ Ich bin im Park.',
        ),
      ),
    ],
    related: ['dative', 'accusative'],
    sources: [SOURCES.prepositions, SOURCES.vor],
    reviewed: false,
  },
  {
    id: 'imperative',
    title: 'The imperative',
    tagline: 'Commands, instructions and invitations',
    level: LEVEL,
    summary:
      'du: the stem without -st and without du (Komm!). ihr: the present tense form without ihr (Kommt!). Sie: the verb first, then Sie (Kommen Sie!).',
    sections: [
      section(
        'forms',
        'The three forms',
        table(
          'The imperative of common verbs.',
          ['Verb', 'du', 'ihr', 'Sie'],
          [
            ['machen', 'Mach!', 'Macht!', 'Machen Sie!'],
            ['kommen', 'Komm!', 'Kommt!', 'Kommen Sie!'],
            ['warten', 'Warte!', 'Wartet!', 'Warten Sie!'],
            ['fahren', 'Fahr!', 'Fahrt!', 'Fahren Sie!'],
            ['lesen', 'Lies!', 'Lest!', 'Lesen Sie!'],
            ['geben', 'Gib!', 'Gebt!', 'Geben Sie!'],
            ['nehmen', 'Nimm!', 'Nehmt!', 'Nehmen Sie!'],
            ['sein', 'Sei!', 'Seid!', 'Seien Sie!'],
          ],
        ),
        p(
          'For **du** take the present tense form (du kommst), drop **-st** and the pronoun: **Komm!** An **-e** is added after stems in **-t / -d** (Warte! Arbeite!) and is optional after most others. For **ihr** keep the verb form and drop the pronoun. For **Sie** put the verb first: **Kommen Sie!**',
        ),
      ),
      section(
        'vowels',
        'Vowel changes',
        p(
          'Verbs with **e → i / ie** keep that change in the du form: **Gib! Nimm! Lies! Iss!** Verbs with an umlaut (a → ä) drop it: **Fahr! Schlaf! Lauf!** (not “Fähr!”). The ihr and Sie forms never change the vowel.',
        ),
        mistake('Watch out', '✗ Du komm!  ✓ Komm!', '✗ Lese!  ✓ Lies!', '✗ Fähr!  ✓ Fahr!'),
      ),
      section(
        'separable',
        'Separable verbs',
        p(
          'The prefix goes to the end, as in a statement: **Steh auf! Ruft mich an! Kommen Sie mit!**',
        ),
        examples(
          ['Steh um 7 Uhr auf!', 'Get up at 7 o’clock!'],
          ['Gehen Sie geradeaus!', 'Go straight ahead!'],
          ['Seid bitte leise!', 'Please be quiet!'],
        ),
      ),
      section(
        'polite',
        'Being polite',
        p(
          'Add **bitte** to sound friendly: **Kommen Sie bitte herein.** For requests to people you do not know well, a question with könnte/würde is more polite than a command, and signs and recipes often use the infinitive (Nicht rauchen!). With **wir** the verb comes first too: **Gehen wir!** (Let’s go!)',
        ),
      ),
    ],
    related: ['separable-verbs', 'verb-conjugation', 'polite-forms'],
    sources: [SOURCES.imperative],
    reviewed: false,
  },
  {
    id: 'past-tense',
    title: 'Präteritum',
    tagline: 'war, hatte and the simple past',
    level: LEVEL,
    summary:
      'In everyday speech only a few verbs use the simple past: sein (war), haben (hatte) and the modal verbs. Other verbs use the Perfekt when you talk and the Präteritum when you write a story.',
    sections: [
      section(
        'sein-haben',
        'war and hatte',
        p(
          'For **sein** and **haben** the simple past (Präteritum) is more common than the Perfekt, even in speech. **ich** and **er/sie/es** have the same form.',
        ),
        table(
          'Präteritum of sein and haben.',
          ['Person', 'sein', 'haben'],
          [
            ...(['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const).map((pr) => [
              pr,
              conjugatePreterite('sein')[pr],
              conjugatePreterite('haben')[pr],
            ]),
          ],
        ),
        examples(
          ['Gestern war ich krank.', 'Yesterday I was ill.'],
          ['Wir hatten keine Zeit.', 'We had no time.'],
          ['Wie war das Wetter?', 'How was the weather?'],
        ),
      ),
      section(
        'modals',
        'Modal verbs',
        p(
          'The modal verbs are also mostly used in the Präteritum when you talk about the past. They add **-te** to the stem, without the umlaut (können → konnte).',
        ),
        table(
          'Präteritum of the modal verbs (ich / er, sie, es).',
          ['Infinitive', 'Präteritum', 'Example'],
          [
            ['können', 'konnte', 'Ich konnte nicht kommen.'],
            ['müssen', 'musste', 'Er musste arbeiten.'],
            ['wollen', 'wollte', 'Sie wollte schlafen.'],
            ['dürfen', 'durfte', 'Wir durften nicht rauchen.'],
            ['sollen', 'sollte', 'Du solltest anrufen.'],
          ],
        ),
      ),
      section(
        'others',
        'Other verbs',
        p(
          'Regular verbs add **-te** (wohnen → ich wohnte), strong verbs change their vowel (fahren → ich fuhr, lesen → ich las). In conversation you normally use the **Perfekt** for these; the Präteritum is the tense of written stories, reports and news. In the south of the German-speaking area the Perfekt is even more common.',
        ),
        examples(
          ['Ich habe gestern Brot gekauft. (spoken)', 'I bought bread yesterday.'],
          ['Sie kaufte Brot und ging nach Hause. (written)', 'She bought bread and went home.'],
        ),
      ),
    ],
    related: ['perfekt', 'modal-verbs', 'verb-conjugation'],
    sources: [SOURCES.preterite],
    reviewed: false,
  },
  {
    id: 'perfekt',
    title: 'The Perfekt',
    tagline: 'How to talk about the past',
    level: LEVEL,
    summary:
      'haben or sein in position 2 plus the participle at the end: Ich habe gearbeitet. Wir sind gefahren. Verbs of movement or change of state and sein/bleiben use sein.',
    sections: [
      section(
        'form',
        'How it is built',
        p(
          'The Perfekt is the normal past tense of everyday speech. It has two parts: a conjugated form of **haben** or **sein** in position 2 and the **participle (Partizip II)** at the end of the clause.',
        ),
        table(
          'The Perfekt with haben and with sein.',
          ['Person', 'with haben', 'with sein'],
          [
            ...(['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const).map((pr) => [
              pr,
              `${conjugate('haben')[pr]} gespielt`,
              `${conjugate('sein')[pr]} gefahren`,
            ]),
          ],
        ),
        examples(
          ['Ich habe gestern Fußball gespielt.', 'I played football yesterday.'],
          ['Wir sind nach Wien gefahren.', 'We went to Vienna.'],
        ),
      ),
      section(
        'participle',
        'The participle',
        table(
          'How the participle is formed.',
          ['Type', 'Pattern', 'Examples'],
          [
            ['regular', 'ge- + stem + -t', 'spielen → gespielt, machen → gemacht'],
            ['stem in -t / -d', 'ge- + stem + -et', 'arbeiten → gearbeitet'],
            [
              'strong',
              'ge- + stem (vowel often changes) + -en',
              'fahren → gefahren, sehen → gesehen, schreiben → geschrieben',
            ],
            [
              'no ge-',
              'verbs in -ieren and with be-, er-, ver-, ent-, zer-',
              'telefonieren → telefoniert, besuchen → besucht, verstehen → verstanden',
            ],
            [
              'separable',
              'prefix + ge- + stem',
              'aufstehen → aufgestanden, einkaufen → eingekauft',
            ],
          ],
        ),
        p(
          'Learn the participle of every strong verb together with its infinitive (dictionaries list it).',
        ),
      ),
      section(
        'sein',
        'haben or sein?',
        p(
          'Most verbs use **haben**. Use **sein** for verbs of **movement** from A to B (gehen, fahren, kommen, fliegen), for a **change of state** (aufstehen, einschlafen, werden) and for **sein** and **bleiben** themselves.',
        ),
        table(
          'haben or sein?',
          ['haben', 'sein'],
          [
            ['Ich habe gearbeitet.', 'Ich bin gegangen.'],
            ['Wir haben gegessen.', 'Wir sind nach Hause gefahren.'],
            ['Er hat Deutsch gelernt.', 'Er ist früh aufgestanden.'],
            ['Sie hat einen Kuchen gebacken.', 'Sie ist zu Hause geblieben.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ich habe gegangen.  ✓ Ich bin gegangen.',
          '✗ Ich habe aufgestanden.  ✓ Ich bin aufgestanden.',
          '✗ Ich habe gebesucht.  ✓ Ich habe besucht.',
        ),
      ),
      section(
        'order',
        'Word order',
        p(
          'haben/sein stays in position 2 and the participle moves to the very end, however long the sentence is: **Gestern habe ich im Supermarkt Brot und Milch gekauft.** With a separable verb the prefix stays attached to the participle.',
        ),
      ),
    ],
    related: ['past-tense', 'separable-verbs', 'word-order'],
    sources: [SOURCES.perfect, SOURCES.participle2],
    reviewed: false,
  },
  {
    id: 'comparison',
    title: 'Comparing: -er als, am -sten',
    tagline: 'bigger, biggest, as big as',
    level: LEVEL,
    summary:
      'Comparative: adjective + -er + als (schneller als). Superlative: am + adjective + -sten (am schnellsten). Equal: so … wie. gut, viel and gern are irregular.',
    sections: [
      section(
        'forms',
        'The forms',
        p(
          'Adjectives have three degrees. The **comparative** adds **-er**, the **superlative** (after **am**) adds **-sten** (**-esten** after -t, -d, -s, -ß, -z). Many short adjectives add an **umlaut**.',
        ),
        table(
          'Regular comparison.',
          ['Positive', 'Comparative', 'Superlative'],
          [
            ['schnell', 'schneller', 'am schnellsten'],
            ['klein', 'kleiner', 'am kleinsten'],
            ['alt', 'älter', 'am ältesten'],
            ['jung', 'jünger', 'am jüngsten'],
            ['warm', 'wärmer', 'am wärmsten'],
          ],
        ),
      ),
      section(
        'irregular',
        'Irregular forms',
        table(
          'Irregular comparison.',
          ['Positive', 'Comparative', 'Superlative'],
          [
            ['gut', 'besser', 'am besten'],
            ['viel', 'mehr', 'am meisten'],
            ['gern', 'lieber', 'am liebsten'],
            ['groß', 'größer', 'am größten'],
            ['hoch', 'höher', 'am höchsten'],
            ['nah', 'näher', 'am nächsten'],
          ],
        ),
      ),
      section(
        'sentences',
        'In sentences',
        p(
          'Compare with **als** (than) after a comparative and with **so … wie** (as … as) for things that are equal. **nicht so … wie** says one is less than the other.',
        ),
        examples(
          ['Mein Bruder ist älter als ich.', 'My brother is older than I am.'],
          ['Ich bin so groß wie du.', 'I am as tall as you.'],
          ['Das ist am besten.', 'That is the best.'],
          [
            'Ich esse gern Pizza, aber lieber Pasta, am liebsten Eis.',
            'I like pizza, but I prefer pasta and like ice cream best.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Er ist älter wie ich.  ✓ Er ist älter als ich.',
          '✗ mehr gut  ✓ besser',
        ),
      ),
    ],
    related: ['articles', 'conjunctions'],
    sources: [SOURCES.comparison],
    reviewed: false,
  },
  {
    id: 'ordinal-numbers',
    title: 'Ordinal numbers and dates',
    tagline: 'der erste, der zweite, der dritte …',
    level: LEVEL,
    summary:
      'Up to 19 add -te (der zweite), from 20 add -ste (der zwanzigste). Exceptions: erste, dritte, siebte, achte. For dates use am + -ten: am ersten Mai.',
    sections: [
      section(
        'forms',
        'The forms',
        p(
          'Ordinal numbers say the position in a row: first, second, third. In writing they are shown with a **period** after the digit: **der 3. Oktober**. They take adjective endings, so you must add the right ending to the stem.',
        ),
        table(
          'Ordinal numbers (stem + -e) and the form in dates (am + -en).',
          ['Number', 'der / die / das …', 'am …'],
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 19, 20, 21, 30].map((n) => [
            `${n}.`,
            ordinal(n),
            `am ${ordinalDative(n)}`,
          ]),
        ),
        tip(
          'Exceptions',
          '1 → erste, 3 → dritte, 7 → siebte, 8 → achte. From 20 the ending is -ste (zwanzigste, dreißigste).',
        ),
      ),
      section(
        'dates',
        'Dates and floors',
        p(
          'For “on a date” use **am** + the ordinal ending in **-en**. For “which date is it?” use the nominative: **Heute ist der 3. Mai.** The same pattern works for floors: **im dritten Stock**.',
        ),
        examples(
          ['Ich habe am ersten Mai Geburtstag.', 'My birthday is on 1 May.'],
          ['Heute ist der dritte Oktober.', 'Today is 3 October.'],
          ['Sie wohnt im vierten Stock.', 'She lives on the fourth floor.'],
        ),
      ),
    ],
    related: ['prepositions-of-time', 'articles'],
    sources: [SOURCES.numerals],
    reviewed: false,
  },
  {
    id: 'conjunctions',
    title: 'und, oder, aber, denn, sondern',
    tagline: 'Joining two sentences',
    level: LEVEL,
    summary:
      'These conjunctions join two main clauses and do not change the word order: the verb stays in position 2 after them. denn gives a reason; sondern corrects a negative (nicht …, sondern …).',
    sections: [
      section(
        'list',
        'The five conjunctions',
        table(
          'Coordinating conjunctions.',
          ['Conjunction', 'Meaning', 'Example'],
          [
            ['und', 'and (adds)', 'Ich lerne Deutsch und mein Bruder lernt Spanisch.'],
            ['oder', 'or (alternative)', 'Gehen wir ins Kino oder bleiben wir zu Hause?'],
            ['aber', 'but (contrast)', 'Ich möchte kommen, aber ich habe keine Zeit.'],
            ['denn', 'because (reason)', 'Ich bleibe zu Hause, denn ich bin krank.'],
            [
              'sondern',
              'but rather (after a negative)',
              'Ich wohne nicht in Berlin, sondern in Hamburg.',
            ],
          ],
        ),
      ),
      section(
        'order',
        'The word order stays the same',
        p(
          'After these conjunctions each clause keeps its normal order, with the verb in position 2. The conjunction counts as “position 0”. This is different from **weil** (also “because”), which sends the verb to the end.',
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
        mistake(
          'Watch out',
          '✗ Ich bleibe hier, denn ich müde bin.  ✓ Ich bleibe hier, denn ich bin müde.',
        ),
      ),
      section(
        'aber-sondern',
        'aber or sondern?',
        p(
          'Use **sondern** when the first part is negative and the second part replaces it. Use **aber** for a contrast that does not replace anything.',
        ),
        examples(
          ['Das ist nicht rot, sondern orange.', 'That is not red but orange.'],
          ['Das Kleid ist schön, aber teuer.', 'The dress is beautiful, but expensive.'],
        ),
      ),
    ],
    related: ['word-order', 'questions'],
    sources: [SOURCES.conjunctions],
    reviewed: false,
  },
  {
    id: 'polite-forms',
    title: 'Polite requests',
    tagline: 'Könnten Sie …? Ich hätte gern …',
    level: LEVEL,
    summary:
      'Use Konjunktiv II forms to sound polite: Könnten Sie …? Würden Sie …? Ich hätte gern … Ich möchte … The main verb goes to the end.',
    sections: [
      section(
        'why',
        'Why use them',
        p(
          'A direct question or a command can sound blunt in German. The **Konjunktiv II** forms of a few common verbs soften a request or a wish. They are used all the time in shops, offices and on the phone.',
        ),
        compare(
          { title: 'Blunt', question: 'sounds direct', example: 'Können Sie mir helfen?' },
          { title: 'Polite', question: 'sounds friendly', example: 'Könnten Sie mir helfen?' },
        ),
      ),
      section(
        'forms',
        'The forms',
        conjugationTable(
          'Konjunktiv II of four important verbs.',
          ['können', 'haben', 'sein', 'werden'],
          {
            können: konjunktiv2('können'),
            haben: konjunktiv2('haben'),
            sein: konjunktiv2('sein'),
            werden: konjunktiv2('werden'),
          },
        ),
        p(
          'With **würde** you can make a polite form of almost any verb: **würde + infinitive** (Ich würde gern ein Eis essen). **möchte** (would like) is the polite form of mögen.',
        ),
      ),
      section(
        'phrases',
        'Phrases to learn',
        examples(
          ['Könnten Sie mir bitte helfen?', 'Could you please help me?'],
          ['Würden Sie das bitte wiederholen?', 'Would you please repeat that?'],
          ['Ich hätte gern einen Kaffee.', 'I would like a coffee.'],
          ['Ich würde gern ins Kino gehen.', 'I would like to go to the cinema.'],
          ['Ich möchte einen Termin machen.', 'I would like to make an appointment.'],
        ),
        mistake(
          'Watch out',
          '✗ Ich würde gern einen Kaffee trinke.  ✓ Ich würde gern einen Kaffee trinken.',
          '✗ Ich will einen Kaffee. (very direct)  ✓ Ich hätte gern einen Kaffee.',
        ),
      ),
    ],
    related: ['modal-verbs', 'imperative', 'word-order'],
    sources: [SOURCES.subjunctive],
    reviewed: false,
  },
];
