import { negativeArticle, possessive, type Case, type Gender } from '@/lib/german/articles';
import {
  articleTable,
  compare,
  conjugationTable,
  examples,
  mistake,
  p,
  section,
  table,
  tip,
} from './build';
import type { GrammarTopic } from './schema';
import { SOURCES } from './sources';

const LEVEL = 'a1-1';

const GENDERS: Gender[] = ['m', 'f', 'n', 'pl'];
const CASES: [Case, string][] = [
  ['nom', 'Nominative'],
  ['acc', 'Accusative'],
  ['dat', 'Dative'],
];

export const A11_TOPICS: GrammarTopic[] = [
  {
    id: 'word-order',
    title: 'Verb in position 2',
    tagline: 'Where does the verb go?',
    level: LEVEL,
    summary:
      'In a German statement the conjugated verb is always the second element. Whatever comes first, the verb stays second and the subject moves behind it.',
    sections: [
      section(
        'rule',
        'The rule',
        p(
          'A German statement has a fixed skeleton: the conjugated verb (the one that has a person ending) sits in **position 2**. Position 1 can hold almost anything: the subject, a time word, a place or an object. “Position 2” means the second *element*, not the second word, and an element can be several words (**Am Montag**, **Meine Schwester**).',
        ),
        table(
          'The verb stays in position 2 whatever comes first.',
          ['Position 1', 'Position 2 (verb)', 'Middle', 'End'],
          [
            ['Ich', 'gehe', 'heute', 'ins Kino.'],
            ['Heute', 'gehe', 'ich', 'ins Kino.'],
            ['Am Montag', 'habe', 'ich', 'Deutschkurs.'],
            ['Meine Schwester', 'wohnt', '', 'in Wien.'],
          ].map((r) => r.map((c) => c || '–')),
        ),
      ),
      section(
        'inversion',
        'The subject moves behind the verb',
        p(
          'When something other than the subject comes first, the subject moves behind the verb. English keeps “Today I go …”, German turns it round: **Heute gehe ich …**',
        ),
        mistake(
          'Watch out',
          '✗ Heute ich gehe ins Kino.  ✓ Heute gehe ich ins Kino.',
          '✗ Am Montag ich habe Deutschkurs.  ✓ Am Montag habe ich Deutschkurs.',
        ),
      ),
      section(
        'end',
        'Other verb parts go to the end',
        p(
          'Verb parts that belong to the conjugated verb go to the very end of the clause: the infinitive after a modal verb, the participle in the Perfekt and the prefix of a separable verb. Together with the verb in position 2 they form a frame around the rest of the sentence.',
        ),
        examples(
          ['Ich kann heute nicht kommen.', 'I cannot come today.'],
          ['Wir haben Brot gekauft.', 'We bought bread.'],
          ['Der Zug fährt um 9 Uhr ab.', 'The train leaves at 9 o’clock.'],
        ),
      ),
      section(
        'questions',
        'Questions and the other positions',
        p(
          'A yes/no question starts with the verb (**Kommst du?**), a W-question with the question word and then the verb (**Wann kommst du?**). After und, oder, aber and denn the word order does not change; subordinate clauses with weil or dass send the verb to the end (you will meet them in later levels).',
        ),
      ),
    ],
    related: ['questions', 'separable-verbs', 'modal-verbs'],
    sources: [SOURCES.verbSecond],
    reviewed: false,
  },
  {
    id: 'questions',
    title: 'Asking questions',
    tagline: 'How do I ask?',
    level: LEVEL,
    summary:
      'W-questions start with a question word and the verb comes second. Yes/no questions start with the verb.',
    sections: [
      section(
        'w-questions',
        'W-questions',
        p(
          'Most question words start with **W** (that is where the name comes from). The question word is position 1, the conjugated verb is position 2, then the subject follows.',
        ),
        table(
          'Common question words.',
          ['Question word', 'Asks for', 'Example'],
          [
            ['Wer', 'a person', 'Wer ist das?'],
            ['Was', 'a thing', 'Was machst du?'],
            ['Wo', 'a place', 'Wo wohnst du?'],
            ['Woher', 'where from', 'Woher kommst du?'],
            ['Wohin', 'where to', 'Wohin gehst du?'],
            ['Wann', 'a time', 'Wann kommt der Bus?'],
            ['Wie', 'how', 'Wie heißt du?'],
            ['Wie viele', 'a number', 'Wie viele Kinder hast du?'],
            ['Warum', 'a reason', 'Warum lernst du Deutsch?'],
            ['Welche', 'which one', 'Welche Sprache sprichst du?'],
          ],
        ),
      ),
      section(
        'yes-no',
        'Yes/no questions',
        p(
          'A question that can be answered with “yes” or “no” starts with the **verb**. Answer with **Ja** or **Nein**. If the question is negative, **Doch** says “yes, it is”.',
        ),
        examples(
          [
            'Wohnst du in Berlin? – Ja, ich wohne in Berlin.',
            'Do you live in Berlin? – Yes, I live in Berlin.',
          ],
          ['Hast du Zeit? – Nein, leider nicht.', 'Do you have time? – No, unfortunately not.'],
          ['Hast du keine Zeit? – Doch, ich habe Zeit.', 'Don’t you have time? – Yes, I do.'],
        ),
      ),
      section(
        'order',
        'The verb stays in position 2',
        p(
          'After a question word the subject does not come before the verb. The pattern is always question word + verb + subject.',
        ),
        mistake(
          'Watch out',
          '✗ Woher du kommst?  ✓ Woher kommst du?',
          '✗ Wo deine Familie wohnt?  ✓ Wo wohnt deine Familie?',
        ),
      ),
    ],
    related: ['word-order', 'verb-conjugation'],
    sources: [SOURCES.questions],
    reviewed: false,
  },
  {
    id: 'pronouns',
    title: 'Personal pronouns',
    tagline: 'ich, du, er … and du or Sie?',
    level: LEVEL,
    summary:
      'The pronoun decides the verb ending. du is for one person you know well, ihr for several, and the polite Sie (always with a capital S) for one or more people you address formally.',
    sections: [
      section(
        'table',
        'The pronouns',
        table(
          'Personal pronouns in the nominative.',
          ['Person', 'Singular', 'Plural'],
          [
            ['1st person', 'ich (I)', 'wir (we)'],
            ['2nd person, informal', 'du (you)', 'ihr (you)'],
            ['2nd person, formal', 'Sie (you)', 'Sie (you)'],
            ['3rd person', 'er / sie / es (he / she / it)', 'sie (they)'],
          ],
        ),
      ),
      section(
        'du-sie',
        'du or Sie?',
        p(
          '**du** (plural **ihr**) is the familiar form for friends, family, children and in most casual settings. **Sie** is the distant, polite form for adults you do not know, in shops, offices and formal situations, until someone offers you the du. Sie is always written with a capital S and takes the same verb form as **sie** (they).',
        ),
        examples(
          ['Wie heißt du?', 'What is your name? (to a friend)'],
          ['Wie heißen Sie?', 'What is your name? (formal)'],
          ['Woher kommt ihr?', 'Where are you (all) from?'],
        ),
      ),
      section(
        'er-sie-es',
        'er, sie, es replace nouns',
        p(
          'The 3rd person pronoun follows the **grammatical gender** of the noun, not what it is: der Tisch → **er**, die Lampe → **sie**, das Buch → **es**. A sentence like “sie ist” can mean “she is” or “it is”; **sie sind** means “they are”.',
        ),
        examples(
          ['Wo ist der Schlüssel? – Er liegt hier.', 'Where is the key? – It is here.'],
          ['Wo ist die Lampe? – Sie steht dort.', 'Where is the lamp? – It is over there.'],
        ),
      ),
      section(
        'verbs',
        'The pronoun decides the verb form',
        conjugationTable('The present tense of sein and haben.', ['sein', 'haben']),
      ),
    ],
    related: ['verb-conjugation', 'object-pronouns', 'polite-forms'],
    sources: [SOURCES.personalPronouns],
    reviewed: false,
  },
  {
    id: 'verb-conjugation',
    title: 'Present tense endings',
    tagline: 'How does the verb change?',
    level: LEVEL,
    summary:
      'Take the stem (the infinitive minus -en) and add the ending for the person: -e, -st, -t, -en, -t, -en. Some stems change, and sein and haben are irregular.',
    sections: [
      section(
        'regular',
        'Regular verbs',
        p(
          'Remove **-en** from the infinitive to get the stem (spielen → spiel-) and add the ending. The **wir** and **sie/Sie** forms are always the same as the infinitive (except sein).',
        ),
        conjugationTable('Regular verbs in the present tense.', ['spielen', 'wohnen', 'kommen']),
      ),
      section(
        'e-stems',
        'Stems that add an extra e',
        p(
          'If the stem ends in **-t** or **-d** (arbeiten, finden) an **e** is inserted before **-st** and **-t** so that you can pronounce it: du arbeit**e**st, er arbeit**e**t. If the stem ends in **-s, -ß or -z** (heißen, tanzen) the du form takes only **-t**: du heißt.',
        ),
        conjugationTable('Verbs with an e before -st / -t, and a stem ending in -ß.', [
          'arbeiten',
          'heißen',
        ]),
      ),
      section(
        'vowel-change',
        'Vowel changes in du and er/sie/es',
        p(
          'Many common verbs change their stem vowel in the **du** and **er/sie/es** forms only: **e → i / ie** (sprechen, lesen, essen) and **a → ä** (fahren, schlafen). The other persons are regular. Learn them together with the verb.',
        ),
        conjugationTable('Verbs with a vowel change.', ['sprechen', 'lesen', 'fahren']),
        mistake('Watch out', '✗ du sprechst, er sprecht  ✓ du sprichst, er spricht'),
      ),
      section(
        'irregular',
        'sein, haben and werden',
        p('These three have to be learned by heart, because they are used all the time.'),
        conjugationTable('Irregular verbs in the present tense.', ['sein', 'haben', 'werden']),
      ),
    ],
    related: ['pronouns', 'modal-verbs', 'word-order'],
    sources: [SOURCES.strongVerbs],
    reviewed: false,
  },
  {
    id: 'articles',
    title: 'der, die, das',
    tagline: 'Which article does the noun take?',
    level: LEVEL,
    summary:
      'Every German noun has a gender: der (masculine), die (feminine) or das (neuter). The plural is always die. Learn each noun together with its article.',
    sections: [
      section(
        'gender',
        'Three genders',
        p(
          'Each noun has one fixed gender. The gender is **grammatical**, not natural: das Mädchen (the girl) is neuter. So always learn the article together with the noun: **der Tisch**, not just “Tisch”. The plural article is **die** for all genders.',
        ),
        table(
          'Definite and indefinite article in the nominative.',
          ['Form', 'masc.', 'fem.', 'neut.', 'plural'],
          [
            ['Definite', 'der Tisch', 'die Lampe', 'das Buch', 'die Bücher'],
            ['Indefinite', 'ein Tisch', 'eine Lampe', 'ein Buch', '– Bücher'],
          ],
        ),
      ),
      section(
        'endings',
        'Endings that help',
        p(
          'Gender is largely arbitrary, but some word endings are good hints. They are guides, not laws.',
        ),
        table(
          'Word endings that usually give the gender.',
          ['Ending', 'Article', 'Examples'],
          [
            [
              '-ung, -heit, -keit, -schaft, -ion',
              'die',
              'die Zeitung, die Freiheit, die Freundschaft, die Station',
            ],
            ['-in (a woman)', 'die', 'die Lehrerin'],
            ['-chen, -lein', 'das', 'das Mädchen, das Brötchen'],
            ['-ling, -ismus', 'der', 'der Frühling, der Tourismus'],
          ],
        ),
      ),
      section(
        'use',
        'Definite or indefinite?',
        p(
          'Use **ein/eine** when you mention something for the first time and **der/die/das** when it is known or clear which one you mean. There is no indefinite article in the plural: you simply leave it out.',
        ),
        examples(
          ['Ich habe einen Hund. Der Hund heißt Max.', 'I have a dog. The dog is called Max.'],
          ['Da liegen Bücher.', 'There are books lying there.'],
        ),
      ),
      section(
        'cases',
        'The article changes with the case',
        p(
          'The forms above are the nominative. In the accusative only the masculine changes (der → den); in the dative the forms change for every gender. See the lessons on the accusative and the dative.',
        ),
        articleTable('The definite article in three cases.'),
      ),
    ],
    related: ['plurals', 'accusative', 'dative'],
    sources: [SOURCES.gender, SOURCES.article],
    reviewed: false,
  },
  {
    id: 'negation',
    title: 'nicht or kein?',
    level: LEVEL,
    tagline: 'How do I say “not”?',
    summary:
      'kein negates a noun that has ein or no article. nicht negates everything else: verbs, adjectives, adverbs and nouns with der/die/das or a possessive.',
    sections: [
      section(
        'kein',
        'kein: no, not a',
        p(
          '**kein** is the negative of **ein**, and it also negates nouns that have no article (including all plurals). It takes the same endings as ein, and its plural is **keine**.',
        ),
        table(
          'kein in three cases.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          CASES.map(([c, label]) => [label, ...GENDERS.map((g) => negativeArticle(g, c))]),
        ),
        examples(
          ['Ich habe ein Auto. → Ich habe kein Auto.', 'I have a car. → I do not have a car.'],
          ['Ich habe Zeit. → Ich habe keine Zeit.', 'I have time. → I have no time.'],
          ['Wir haben keine Äpfel.', 'We have no apples.'],
        ),
      ),
      section(
        'nicht',
        'nicht: not',
        p(
          '**nicht** negates verbs, adjectives, adverbs and nouns that have **der/die/das** or a possessive. It stands at the end when it negates the whole sentence (Ich kenne ihn **nicht**), directly before the word it negates (Das ist **nicht** gut) and before an infinitive, participle or place at the end (Ich kann **nicht** kommen).',
        ),
        examples(
          ['Ich komme nicht.', 'I am not coming.'],
          ['Das ist nicht gut.', 'That is not good.'],
          ['Das ist nicht mein Auto.', 'That is not my car.'],
        ),
      ),
      section(
        'choose',
        'Which one do I need?',
        table(
          'Choosing between kein and nicht.',
          ['Positive', 'Negative', 'Why'],
          [
            ['Ich habe einen Hund.', 'Ich habe keinen Hund.', 'ein-word → kein'],
            ['Ich habe Zeit.', 'Ich habe keine Zeit.', 'no article → kein'],
            ['Das ist der Chef.', 'Das ist nicht der Chef.', 'der/die/das → nicht'],
            ['Das ist mein Bruder.', 'Das ist nicht mein Bruder.', 'possessive → nicht'],
            ['Ich arbeite heute.', 'Ich arbeite heute nicht.', 'verb → nicht'],
            ['Das Wetter ist schön.', 'Das Wetter ist nicht schön.', 'adjective → nicht'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ich habe nicht Zeit.  ✓ Ich habe keine Zeit.',
          '✗ Ich bin kein müde.  ✓ Ich bin nicht müde.',
        ),
      ),
    ],
    related: ['articles', 'accusative', 'possessives'],
    sources: [SOURCES.kein, SOURCES.nicht],
    reviewed: false,
  },
  {
    id: 'plurals',
    title: 'Plural forms',
    tagline: 'How do I make the plural?',
    level: LEVEL,
    summary:
      'German has several plural patterns, so learn the plural with the noun. The plural article is always die.',
    sections: [
      section(
        'patterns',
        'The main patterns',
        p(
          'A noun forms its plural with an ending, with an umlaut (a → ä, o → ö, u → ü, au → äu), with both, or with no change at all. There is a tendency by gender, but no safe rule: feminine nouns mostly take **-(e)n**, masculine nouns **-e** and neuter nouns **-er**.',
        ),
        table(
          'Plural patterns with examples.',
          ['Pattern', 'Typical for', 'Examples'],
          [
            ['-(e)n', 'most feminine nouns', 'die Lampe → die Lampen, die Zeitung → die Zeitungen'],
            ['-nen', 'feminine nouns in -in', 'die Freundin → die Freundinnen'],
            [
              '-e (often with umlaut)',
              'many masculine nouns',
              'der Tag → die Tage, der Stuhl → die Stühle',
            ],
            [
              '-er (with umlaut if possible)',
              'many neuter nouns',
              'das Kind → die Kinder, das Buch → die Bücher',
            ],
            [
              'no ending (sometimes umlaut)',
              'nouns in -er, -el, -en',
              'der Lehrer → die Lehrer, der Apfel → die Äpfel',
            ],
            ['-s', 'many foreign words', 'das Auto → die Autos, das Handy → die Handys'],
          ],
        ),
      ),
      section(
        'learn',
        'Learn the plural with the noun',
        p(
          'Dictionaries give the plural right after the noun: **der Tisch, -e** means die Tische. When you learn a word, learn three things: the article, the noun and the plural.',
        ),
        examples(
          ['der Apfel, die Äpfel', 'the apple, the apples'],
          ['das Kind, die Kinder', 'the child, the children'],
        ),
      ),
      section(
        'use',
        'Using the plural',
        p(
          'Use the plural after numbers other than one (**drei Bücher**). The plural article is **die** for every gender, and there is no indefinite article in the plural. In the dative plural most nouns add **-n** (mit den Kindern), unless the plural already ends in -n or -s.',
        ),
        mistake('Watch out', '✗ zwei Kind  ✓ zwei Kinder', '✗ mit den Autosn  ✓ mit den Autos'),
      ),
    ],
    related: ['articles', 'dative'],
    sources: [SOURCES.plural, SOURCES.dative],
    reviewed: false,
  },
  {
    id: 'possessives',
    title: 'mein, dein, sein, ihr …',
    tagline: 'Whose is it?',
    level: LEVEL,
    summary:
      'The stem shows the owner (mein = my, sein = his, ihr = her or their, Ihr = your, polite). The ending agrees with the thing owned and works like ein/kein.',
    sections: [
      section(
        'stems',
        'The owner decides the stem',
        table(
          'Possessive articles by owner.',
          ['Owner', 'Stem', 'Example'],
          [
            ['ich', 'mein', 'mein Bruder'],
            ['du', 'dein', 'dein Bruder'],
            ['er / es', 'sein', 'sein Bruder'],
            ['sie (she)', 'ihr', 'ihr Bruder'],
            ['wir', 'unser', 'unser Bruder'],
            ['ihr', 'euer', 'euer Bruder'],
            ['sie (they)', 'ihr', 'ihr Bruder'],
            ['Sie', 'Ihr', 'Ihr Bruder'],
          ],
        ),
        p(
          'The choice between **sein** and **ihr** depends on the *owner*, not on the thing owned: das Haus des Bruders → **sein** Haus, das Haus der Schwester → **ihr** Haus.',
        ),
      ),
      section(
        'endings',
        'The thing owned decides the ending',
        p(
          'The ending follows the noun you put it in front of and is the same as for **ein/kein**: nothing for masculine and neuter in the nominative, **-e** for feminine and plural, and **-en** for masculine in the accusative. With **euer** the e before the r drops when an ending is added (eure Eltern).',
        ),
        table(
          'mein in the nominative and accusative.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          (['nom', 'acc'] as const).map((c) => [
            c === 'nom' ? 'Nominative' : 'Accusative',
            ...GENDERS.map((g) => possessive('mein', g, c)),
          ]),
        ),
        examples(
          ['Das ist mein Bruder.', 'That is my brother.'],
          ['Ich besuche meinen Bruder.', 'I am visiting my brother.'],
          ['Meine Eltern wohnen in Köln.', 'My parents live in Cologne.'],
        ),
      ),
    ],
    related: ['negation', 'articles', 'accusative'],
    sources: [SOURCES.possessives],
    reviewed: false,
  },
  {
    id: 'prepositions-of-time',
    title: 'Time words: um, am, im, seit, vor …',
    tagline: 'How do I say when?',
    level: LEVEL,
    summary:
      'um for clock times, am for days and parts of the day, im for months and seasons. seit = since or for (still going on), vor = ago, ab = from, bis = until, nach = after.',
    sections: [
      section(
        'when',
        'Saying when',
        table(
          'Time prepositions.',
          ['Preposition', 'Use', 'Example'],
          [
            ['um', 'clock time', 'um 8 Uhr'],
            ['am', 'days and parts of the day', 'am Freitag, am Morgen'],
            ['im', 'months and seasons', 'im Juli, im Winter'],
            ['von … bis', 'from … until', 'von 9 bis 17 Uhr'],
            ['ab', 'from (a start)', 'ab Montag'],
            ['nach', 'after', 'nach dem Unterricht'],
            ['vor', 'ago / before', 'vor einem Jahr'],
            ['seit', 'since / for (not finished)', 'seit einem Jahr'],
          ],
        ),
        p(
          '**am** and **im** are contractions of an dem and in dem. The prepositions **seit, vor, nach** and **ab** are followed by the dative.',
        ),
      ),
      section(
        'seit-vor',
        'seit or vor?',
        p(
          '**seit** is used for something that began in the past and is still going on, so you use the present tense (Ich wohne **seit einem Jahr** hier). **vor** means “ago” and points to a finished time in the past, so you usually use the Perfekt or Präteritum (Ich bin **vor einem Jahr** gekommen).',
        ),
        examples(
          ['Ich lerne seit drei Monaten Deutsch.', 'I have been learning German for three months.'],
          ['Ich bin vor drei Monaten nach Berlin gezogen.', 'I moved to Berlin three months ago.'],
          ['Ab Montag arbeite ich bis 17 Uhr.', 'From Monday I work until 5 p.m.'],
        ),
      ),
    ],
    related: ['dative', 'perfekt'],
    sources: [SOURCES.um, SOURCES.seit, SOURCES.vor],
    reviewed: false,
  },
  {
    id: 'separable-verbs',
    title: 'Separable verbs',
    tagline: 'Why does the verb split in two?',
    level: LEVEL,
    summary:
      'In a main clause the prefix of a separable verb splits off and goes to the end. With a modal verb it stays attached; in the Perfekt ge- goes between prefix and verb.',
    sections: [
      section(
        'split',
        'Verb and prefix split',
        p(
          'Many German verbs have a stressed prefix that can be separated: **auf**stehen, **an**rufen, **ein**kaufen, **mit**kommen. In a main clause the conjugated verb stays in position 2 and the prefix goes to the very end.',
        ),
        conjugationTable('aufstehen in the present tense.', ['aufstehen'], {
          aufstehen: {
            ich: 'stehe … auf',
            du: 'stehst … auf',
            'er/sie/es': 'steht … auf',
            wir: 'stehen … auf',
            ihr: 'steht … auf',
            'sie/Sie': 'stehen … auf',
          },
        }),
        examples(
          ['Ich stehe um 7 Uhr auf.', 'I get up at 7 o’clock.'],
          ['Der Zug fährt um 9 Uhr ab.', 'The train leaves at 9 o’clock.'],
        ),
      ),
      section(
        'together',
        'When the verb stays together',
        p(
          'The verb is not split when it is an infinitive: after a modal verb, in the infinitive with **zu** (the zu goes between prefix and stem: aufzustehen) and in subordinate clauses with the verb at the end.',
        ),
        examples(
          ['Ich muss früh aufstehen.', 'I have to get up early.'],
          [
            'Ich rufe dich an. / Ich möchte dich anrufen.',
            'I will call you. / I would like to call you.',
          ],
        ),
      ),
      section(
        'perfekt',
        'In the Perfekt',
        p(
          'The participle puts **ge-** between prefix and verb and the prefix stays attached: **aufgestanden, angerufen, eingekauft**. Verbs with an inseparable prefix (be-, ver-, ent-, er-, zer-, ge-) are not separable and take no extra ge-: bestellt, verstanden.',
        ),
        examples(
          ['Ich habe eingekauft.', 'I did the shopping.'],
          ['Wir sind um 6 Uhr aufgestanden.', 'We got up at 6 o’clock.'],
        ),
        tip('Tip', 'aufstehen splits (Ich stehe auf), verstehen does not (Ich verstehe).'),
      ),
    ],
    related: ['word-order', 'modal-verbs', 'perfekt'],
    sources: [SOURCES.separableVerbs, SOURCES.participle2],
    reviewed: false,
  },
  {
    id: 'accusative',
    title: 'Accusative (Wen? Was?)',
    tagline: 'The direct object',
    level: LEVEL,
    summary:
      'The direct object is in the accusative. Only the masculine changes: der → den, ein → einen, kein → keinen. Feminine, neuter and plural look like the nominative.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Every German noun has a case that shows its job in the sentence. The **nominative** is the subject (Wer? Was? – who does it). The **accusative** is the direct object: the person or thing that the action is done to, found by asking **Wen?** or **Was?**',
        ),
        examples(
          ['Ich kaufe den Tisch.', 'I buy the table. (Was kaufe ich? – den Tisch)'],
          ['Sie besucht ihren Bruder.', 'She visits her brother. (Wen besucht sie?)'],
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          'Compared with the nominative, only the **masculine singular** is different in the accusative. All other forms stay the same.',
        ),
        articleTable('The definite article; the accusative row is highlighted.', 'acc'),
        table(
          'ein, kein and mein in the accusative.',
          ['Form', 'masc.', 'fem.', 'neut.', 'plural'],
          [
            ['ein', 'einen', 'eine', 'ein', '–'],
            ['kein', 'keinen', 'keine', 'kein', 'keine'],
            ['mein', 'meinen', 'meine', 'mein', 'meine'],
          ],
        ),
      ),
      section(
        'compare',
        'Nominative or accusative?',
        compare(
          { title: 'Nominative', question: 'Wer? Was?', example: 'Der Tisch ist neu.' },
          { title: 'Accusative', question: 'Wen? Was?', example: 'Ich kaufe den Tisch.' },
        ),
        mistake(
          'Watch out',
          '✗ Ich habe ein Bruder.  ✓ Ich habe einen Bruder.',
          '✗ Ich kaufe der Tisch.  ✓ Ich kaufe den Tisch.',
        ),
      ),
      section(
        'preps',
        'Accusative prepositions',
        p(
          'Some prepositions are always followed by the accusative: **durch, für, gegen, ohne, um**. (Der Zug fährt **durch den** Tunnel. Das Geschenk ist **für dich**.)',
        ),
        examples(
          ['Der Bus fährt durch die Stadt.', 'The bus goes through the town.'],
          ['Das Geschenk ist für den Lehrer.', 'The gift is for the teacher.'],
        ),
      ),
    ],
    related: ['articles', 'dative', 'object-pronouns'],
    sources: [SOURCES.accusative, SOURCES.article],
    reviewed: false,
  },
  {
    id: 'modal-verbs',
    title: 'Modal verbs',
    tagline: 'können, müssen, wollen …',
    level: LEVEL,
    summary:
      'The modal verb is conjugated in position 2 and the main verb goes to the end in the infinitive. ich and er/sie/es have the same form, with no ending: ich kann, er kann.',
    sections: [
      section(
        'forms',
        'The forms',
        p(
          'Modal verbs say whether you can, must, may, want to or should do something. They have an irregular singular: **ich** and **er/sie/es** have the same form with no ending, and the vowel often differs from the infinitive.',
        ),
        conjugationTable('Modal verbs in the present tense.', [
          'können',
          'müssen',
          'dürfen',
          'sollen',
          'wollen',
          'mögen',
        ]),
        p(
          '**möchte** (would like) is a form of mögen: ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten. It is the polite way to say what you want.',
        ),
      ),
      section(
        'order',
        'Word order',
        p(
          'The modal verb takes position 2 and the main verb goes to the **end** as an infinitive. Without a second verb the main verb can be left out when it is clear (Ich muss nach Hause).',
        ),
        examples(
          ['Ich kann heute nicht kommen.', 'I cannot come today.'],
          ['Er muss morgen arbeiten.', 'He has to work tomorrow.'],
          ['Wir wollen ins Kino gehen.', 'We want to go to the cinema.'],
        ),
        mistake(
          'Watch out',
          '✗ Ich kann kommst nicht.  ✓ Ich kann nicht kommen.',
          '✗ er kannt  ✓ er kann',
        ),
      ),
      section(
        'meaning',
        'What they mean',
        table(
          'Meanings of the modal verbs.',
          ['Verb', 'Meaning', 'Example'],
          [
            ['können', 'ability or possibility', 'Ich kann schwimmen.'],
            ['müssen', 'necessity', 'Du musst lernen.'],
            ['dürfen', 'permission', 'Hier darf man parken.'],
            ['sollen', 'duty or advice from someone', 'Du sollst mehr schlafen.'],
            ['wollen', 'a strong wish or plan', 'Ich will Deutsch lernen.'],
            ['möchten', 'a polite wish', 'Ich möchte einen Kaffee.'],
          ],
        ),
      ),
    ],
    related: ['word-order', 'separable-verbs', 'verb-conjugation'],
    sources: [SOURCES.modalVerbs],
    reviewed: false,
  },
];
