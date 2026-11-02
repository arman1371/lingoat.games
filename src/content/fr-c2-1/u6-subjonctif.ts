import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
import {
  activity,
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  spell,
  unit,
  vocabList,
} from '../builders';
import type { ConfigOf } from '../schema';
import type { UnitContent } from './types';

const U = 'fr-c2-1-subjonctif';

const reporting = vocabList(U, 'Verbs that report speech', [
  ['affirmer', 'to claim, to assert', '☝️'],
  ['avouer', 'to admit, to confess', '🙊'],
  ['répliquer', 'to retort', '🏓'],
  ['objecter', 'to object', '✋'],
  ['souligner', 'to stress, to point out', '🖍️'],
  ['prétendre', 'to claim (without proof)', '🤨'],
  ['insinuer', 'to insinuate', '🐍'],
  ['certifier', 'to assure, to certify', '📜'],
  ['concéder', 'to concede', '🤝'],
]);

const timeShift = vocabList(U, 'Time words in reported speech', [
  ['la veille', 'the day before', '⏮️'],
  ['l’avant-veille', 'two days before', '⏪'],
  ['le lendemain', 'the next day', '⏭️'],
  ['le surlendemain', 'two days later', '⏩'],
  ['ce jour-là', 'that day', '📆'],
  ['la semaine précédente', 'the week before', '🗓️'],
  ['la semaine suivante', 'the week after', '📅'],
  ['sur le moment', 'at the time, on the spot', '⏱️'],
]);

const triggers = vocabList(U, 'Verbs that need the subjunctive', [
  ['exiger que', 'to demand that', '📣'],
  ['déplorer que', 'to deplore that', '😞'],
  ['s’indigner que', 'to be outraged that', '😠'],
  ['s’étonner que', 'to be surprised that', '😮'],
  ['se réjouir que', 'to be delighted that', '🎉'],
  ['il importe que', 'it is important that', '❗'],
  ['il convient que', 'it is fitting that', '🎩'],
  ['il se peut que', 'it may be that', '🤷'],
  ['il est douteux que', 'it is doubtful that', '❓'],
]);

const vocab = [...reporting, ...timeShift, ...triggers];

type Table = ConfigOf<'conjugation'>['tables'][number];
type Six = [string, string, string, string, string, string];

/** A subjunctive table: forms are written out, because `src/lib/french` only conjugates the indicative present. */
function subjTable(
  id: string,
  verb: string,
  meaning: string,
  forms: Six,
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb: `${verb} (subjonctif présent)`,
    meaning,
    forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, forms[i]])) as Table['forms'],
    blanks,
    lesson: 'fr-c21-subjunctive',
  };
}

const moodItems: [string, string, string][] = [
  ['Je regrette qu’il soit parti.', 'subjunctive', 'I regret that he has left.'],
  ['Il faut que nous partions.', 'subjunctive', 'We must leave.'],
  ['Il se peut qu’elle ait raison.', 'subjunctive', 'She may be right.'],
  ['Nous exigeons que tout soit prêt.', 'subjunctive', 'We demand that everything be ready.'],
  ['Je m’étonne que tu ne sois pas venu.', 'subjunctive', 'I am surprised that you did not come.'],
  ['Il importe que chacun comprenne.', 'subjunctive', 'It is important that everyone understands.'],
  ['Je pense qu’il est parti.', 'indicative', 'I think he has left.'],
  ['Il est certain qu’elle a raison.', 'indicative', 'It is certain that she is right.'],
  ['Nous savons que tout est prêt.', 'indicative', 'We know that everything is ready.'],
  ['Je constate que tu n’es pas venu.', 'indicative', 'I note that you did not come.'],
  ['Il paraît que chacun comprend.', 'indicative', 'It seems that everyone understands.'],
  ['Elle affirme qu’il viendra.', 'indicative', 'She claims that he will come.'],
];

const quizWords = vocab.filter(
  (v) => !['concéder', 'la semaine suivante', 'il convient que'].includes(v.de),
);

export const subjonctif: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 6,
    title: 'Subjonctif et discours rapporté',
    subtitle: 'Choose the mood, shift the tenses and report what others said',
    emoji: '🗣️',
    goals: [
      'Decide between the subjunctive and the indicative after verbs and expressions',
      'Form the present subjunctive of common irregular verbs',
      'Report speech in the past: shift the tenses and the time words',
    ],
    grammar: ['Subjunctive', 'Reported speech'],
    vocabFields: [
      'Verbs that report speech',
      'Time words in reported speech',
      'Verbs that need the subjunctive',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-reporting',
      'flashcards',
      {
        title: 'Verbs that report speech',
        description: 'Say how someone spoke: claimed, admitted, retorted.',
        tags: ['vocabulary', 'fr-c21-mood'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(reporting),
    ),

    activity(
      U,
      'flash-time',
      'flashcards',
      {
        title: 'Time words in reported speech',
        description: 'Hier becomes la veille, demain becomes le lendemain.',
        tags: ['vocabulary', 'fr-c21-mood'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(timeShift),
    ),

    activity(
      U,
      'flash-triggers',
      'flashcards',
      {
        title: 'Verbs that need the subjunctive',
        description: 'Demands, emotions, possibility and doubt.',
        tags: ['vocabulary', 'fr-c21-mood'],
        difficulty: 2,
        estMinutes: 4,
      },
      flashcards(triggers),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the verb or expression with its meaning.',
        tags: ['vocabulary', 'fr-c21-mood'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'répliquer',
          'objecter',
          'prétendre',
          'insinuer',
          'la veille',
          'le surlendemain',
          'exiger que',
          's’indigner que',
          'il est douteux que',
        ),
        quizWords,
        4,
      ),
    ),

    activity(
      U,
      'listen-words',
      'listen',
      {
        title: 'Listen and pick the meaning',
        description: 'Listen to the verb or expression and choose what it means.',
        tags: ['listening', 'vocabulary', 'fr-c21-mood'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'avouer',
          'souligner',
          'le lendemain',
          'sur le moment',
          'déplorer que',
          'il se peut que',
        ),
        quizWords,
      ),
    ),

    activity(
      U,
      'memory-words',
      'memory',
      {
        title: 'Reporting memory',
        description: 'Match the word with its meaning.',
        tags: ['vocabulary', 'fr-c21-mood'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'affirmer',
          'certifier',
          'l’avant-veille',
          'ce jour-là',
          'la semaine précédente',
          's’étonner que',
          'se réjouir que',
          'il importe que',
        ),
      ),
    ),

    activity(
      U,
      'sort-mood',
      'sortit',
      {
        title: 'Subjunctive or indicative?',
        description: 'Wish, doubt and emotion take the subjunctive; fact and certainty do not.',
        tags: ['grammar', 'fr-c21-subjunctive'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Which mood follows the main clause?',
        buckets: [
          { id: 'subjunctive', label: 'Subjunctive', emoji: '🌫️' },
          { id: 'indicative', label: 'Indicative', emoji: '✔️' },
        ],
        items: moodItems.map(([text, bucket, translation], i) => ({
          id: `m${i + 1}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-subjunctive',
      'gapfill',
      {
        title: 'Which verb form?',
        description: 'Fill in the verb, subjunctive or indicative as the sentence needs.',
        tags: ['grammar', 'fr-c21-subjunctive'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Il faut que tu ___ patient.',
            answer: 'sois',
            options: ['sois', 'es', 'seras', 'serais'],
            translation: 'You must be patient.',
            why: { es: 'Il faut que is followed by the subjunctive.' },
          },
          {
            id: 'g2',
            text: 'Je doute qu’il ___ la vérité.',
            answer: 'dise',
            options: ['dise', 'dit', 'dira', 'disait'],
            translation: 'I doubt that he is telling the truth.',
            why: { dit: 'Douter que takes the subjunctive.' },
          },
          {
            id: 'g3',
            text: 'Nous regrettons qu’elle n’___ pas pu venir.',
            answer: 'ait',
            options: ['ait', 'a', 'aura', 'avait'],
            translation: 'We regret that she could not come.',
            why: { a: 'Regretter que takes the subjunctive; the past form is ait pu.' },
          },
          {
            id: 'g4',
            text: 'Il est certain qu’elle ___ raison.',
            answer: 'a',
            options: ['a', 'ait', 'aie', 'aurait'],
            translation: 'It is certain that she is right.',
            why: { ait: 'Certainty takes the indicative.' },
          },
          {
            id: 'g5',
            text: 'Il se peut qu’ils ___ en retard.',
            answer: 'soient',
            options: ['soient', 'sont', 'seront', 'étaient'],
            translation: 'They may be late.',
            why: { sont: 'Il se peut que takes the subjunctive.' },
          },
          {
            id: 'g6',
            text: 'Je pense qu’il ___ bientôt.',
            answer: 'viendra',
            options: ['viendra', 'vienne', 'viendrait', 'vînt'],
            translation: 'I think he will come soon.',
            why: { vienne: 'Penser que, affirmative, takes the indicative.' },
          },
          {
            id: 'g7',
            text: 'Il est possible qu’elle ___ demain.',
            answer: 'parte',
            options: ['parte', 'part', 'partira', 'partait'],
            translation: 'She may leave tomorrow.',
            why: { part: 'Il est possible que takes the subjunctive.' },
          },
          {
            id: 'g8',
            text: 'Je suis content que vous ___ venus.',
            answer: 'soyez',
            options: ['soyez', 'êtes', 'serez', 'étiez'],
            translation: 'I am glad that you have come.',
            why: { êtes: 'Verbs of emotion take the subjunctive.' },
          },
        ],
      },
    ),

    activity(
      U,
      'conj-subjunctive',
      'conjugation',
      {
        title: 'The present subjunctive',
        description: 'Être, avoir, aller, faire and savoir have irregular stems.',
        tags: ['grammar', 'fr-c21-subjunctive'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        tables: [
          subjTable(
            'etre-1',
            'être',
            'to be',
            ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
            ['je', 'il/elle/on', 'ils/elles'],
          ),
          subjTable(
            'avoir-1',
            'avoir',
            'to have',
            ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
            ['tu', 'nous', 'ils/elles'],
          ),
          subjTable(
            'aller-1',
            'aller',
            'to go',
            ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'],
            ['je', 'nous', 'ils/elles'],
          ),
          subjTable(
            'faire-1',
            'faire',
            'to do, to make',
            ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
            ['tu', 'il/elle/on', 'vous'],
          ),
          subjTable(
            'savoir-1',
            'savoir',
            'to know',
            ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'],
            ['je', 'nous', 'ils/elles'],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-reported',
      'gapfill',
      {
        title: 'Report it in the past',
        description: 'Shift the tense and the time word when you report what someone said.',
        tags: ['grammar', 'fr-c21-reported-speech'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        items: [
          {
            id: 'r1',
            text: 'Il a dit : « Je suis fatigué. » → Il a dit qu’il ___ fatigué.',
            answer: 'était',
            options: ['était', 'est', 'sera', 'fut'],
            translation: 'He said he was tired.',
            why: { est: 'After a past verb of saying, the present becomes the imparfait.' },
          },
          {
            id: 'r2',
            text: 'Elle a dit : « J’ai fini. » → Elle a dit qu’elle ___ fini.',
            answer: 'avait',
            options: ['avait', 'a', 'aura', 'eut'],
            translation: 'She said she had finished.',
            why: { a: 'The passé composé becomes the plus-que-parfait.' },
          },
          {
            id: 'r3',
            text: 'Il a promis : « Je viendrai demain. » → Il a promis qu’il viendrait ___.',
            answer: 'le lendemain',
            options: ['le lendemain', 'demain', 'hier', 'la veille'],
            translation: 'He promised he would come the next day.',
            why: { demain: 'Demain becomes le lendemain in past reported speech.' },
          },
          {
            id: 'r4',
            text: 'Elle a dit : « Je l’ai vu hier. » → Elle a dit qu’elle l’avait vu ___.',
            answer: 'la veille',
            options: ['la veille', 'hier', 'le lendemain', 'demain'],
            translation: 'She said she had seen him the day before.',
            why: { hier: 'Hier becomes la veille in past reported speech.' },
          },
          {
            id: 'r5',
            text: 'Il a répondu : « Nous partirons. » → Il a répondu qu’ils ___.',
            answer: 'partiraient',
            options: ['partiraient', 'partirons', 'partaient', 'partent'],
            translation: 'He answered that they would leave.',
            why: { partirons: 'The future becomes the conditional.' },
          },
          {
            id: 'r6',
            text: 'Il dit : « Je suis malade. » → Il dit qu’il ___ malade.',
            answer: 'est',
            options: ['est', 'était', 'sera', 'serait'],
            translation: 'He says he is ill.',
            why: { était: 'When the verb of saying is in the present, nothing shifts.' },
          },
          {
            id: 'r7',
            text: 'Le professeur a rappelé que la Terre ___ ronde.',
            answer: 'est',
            options: ['est', 'était', 'sera', 'fut'],
            translation: 'The teacher reminded us that the Earth is round.',
            why: { était: 'A general truth keeps its tense.' },
          },
          {
            id: 'r8',
            text: 'Il m’a demandé : « Tu viens ? » → Il m’a demandé ___ je venais.',
            answer: 'si',
            options: ['si', 'que', 'ce que', 'quoi'],
            translation: 'He asked me whether I was coming.',
            why: { que: 'A yes/no question is reported with si.' },
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the reporting verbs',
        description: 'Unscramble, type and write down verbs that report speech.',
        tags: ['spelling', 'fr-c21-mood'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(vocab, 'avouer', 'répliquer'), 'unscramble').items,
          ...spell(byDe(vocab, 'insinuer'), 'type').items,
          ...spell(byDe(vocab, 'souligner'), 'dictation').items,
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put subjunctive and reported-speech sentences in order.',
        tags: ['grammar', 'fr-c21-subjunctive', 'fr-c21-reported-speech'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'We must leave before nightfall.',
            words: ['Il', 'faut', 'que', 'nous', 'partions', 'avant', 'la', 'nuit.'],
          },
          {
            id: 's2',
            translation: 'I regret that he did not come.',
            words: ['Je', 'regrette', 'qu’il', 'ne', 'soit', 'pas', 'venu.'],
          },
          {
            id: 's3',
            translation: 'She claimed she would come the next day.',
            words: ['Elle', 'a', 'affirmé', 'qu’elle', 'viendrait', 'le', 'lendemain.'],
          },
          {
            id: 's4',
            translation: 'He admitted he had lied the day before.',
            words: ['Il', 'a', 'avoué', 'qu’il', 'avait', 'menti', 'la', 'veille.'],
          },
          {
            id: 's5',
            translation: 'She may have forgotten the appointment.',
            words: ['Il', 'se', 'peut', 'qu’elle', 'ait', 'oublié', 'le', 'rendez-vous.'],
          },
          {
            id: 's6',
            translation: 'He objected that the project was too expensive.',
            words: ['Il', 'a', 'objecté', 'que', 'le', 'projet', 'était', 'trop', 'cher.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Report and demand',
        description: 'Pass on a message, make a demand and report a question.',
        tags: ['communication', 'fr-c21-mood'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'message',
            title: 'Pass on a message',
            emoji: '📞',
            setting: 'A colleague asks what the client said on the phone yesterday.',
            turns: [
              {
                kind: 'npc',
                who: 'Marc',
                text: 'Qu’a dit le client hier ?',
                translation: 'What did the client say yesterday?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il a dit qu’il rappellerait le lendemain.', correct: true },
                  {
                    text: 'Il a dit qu’il rappellera demain.',
                    correct: false,
                    feedback: 'After a past verb: futur → conditionnel, demain → le lendemain.',
                  },
                  {
                    text: 'Il a dit qu’il rappelle le lendemain.',
                    correct: false,
                    feedback:
                      'The present of the original becomes the conditional or imparfait here.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marc',
                text: 'Et il était content ?',
                translation: 'And was he happy?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il a affirmé que tout lui convenait.', correct: true },
                  {
                    text: 'Il a affirmé que tout lui convient.',
                    correct: false,
                    feedback: 'Report a past statement with the imparfait.',
                  },
                ],
              },
            ],
          },
          {
            id: 'demand',
            title: 'Make a demand',
            emoji: '📣',
            setting: 'You are a tenant writing to a landlord about a broken heater.',
            turns: [
              {
                kind: 'npc',
                who: 'Le propriétaire',
                text: 'Que souhaitez-vous ?',
                translation: 'What would you like?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'J’exige que vous réparassiez le chauffage cette semaine.',
                    correct: false,
                    feedback:
                      'After a present main verb use the present subjunctive: que vous répariez.',
                  },
                  { text: 'J’exige que vous répariez le chauffage cette semaine.', correct: true },
                  {
                    text: 'J’exige que vous réparez le chauffage cette semaine.',
                    correct: false,
                    feedback: 'Exiger que takes the subjunctive: répariez.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le propriétaire',
                text: 'Je suis surpris par votre ton.',
                translation: 'I am surprised by your tone.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je regrette que ce soit nécessaire.', correct: true },
                  {
                    text: 'Je regrette que c’est nécessaire.',
                    correct: false,
                    feedback: 'Regretter que takes the subjunctive: que ce soit.',
                  },
                ],
              },
            ],
          },
          {
            id: 'question',
            title: 'Report a question',
            emoji: '❓',
            setting: 'You tell a friend about a job interview.',
            turns: [
              {
                kind: 'npc',
                who: 'Sonia',
                text: 'Alors, cet entretien ?',
                translation: 'So, how was the interview?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Elle m’a demandé si j’avais de l’expérience.', correct: true },
                  {
                    text: 'Elle m’a demandé que j’avais de l’expérience.',
                    correct: false,
                    feedback: 'A yes/no question is reported with si.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Sonia',
                text: 'Et qu’as-tu répondu ?',
                translation: 'And what did you answer?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'J’ai objecté que j’avais déjà travaillé à l’étranger.', correct: true },
                  {
                    text: 'J’ai objecté que j’ai déjà travaillé à l’étranger.',
                    correct: false,
                    feedback: 'After a past verb the passé composé becomes the plus-que-parfait.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Subjunctive and reported speech blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-subjunctive', 'fr-c21-reported-speech'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Il faut que” is followed by the subjunctive.', isTrue: true },
          {
            id: 'b2',
            text: '“Il est certain que” is followed by the subjunctive.',
            isTrue: false,
            explanation: 'Certainty takes the indicative.',
          },
          { id: 'b3', text: '“Douter que” takes the subjunctive.', isTrue: true },
          {
            id: 'b4',
            text: 'The subjunctive of “être” for “nous” is “soyons”.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: 'The subjunctive of “avoir” for “il” is “a”.',
            isTrue: false,
            explanation: 'It is qu’il ait.',
          },
          {
            id: 'b6',
            text: 'After a past verb of saying, the future becomes the conditional.',
            isTrue: true,
          },
          {
            id: 'b7',
            text: '“Demain” stays “demain” in past reported speech.',
            isTrue: false,
            explanation: 'It becomes le lendemain.',
          },
          { id: 'b8', text: '“Hier” becomes “la veille” in past reported speech.', isTrue: true },
          {
            id: 'b9',
            text: 'A yes/no question is reported with “que”.',
            isTrue: false,
            explanation: 'It is reported with si.',
          },
          {
            id: 'b10',
            text: 'A general truth can keep its present tense in reported speech.',
            isTrue: true,
          },
          { id: 'b11', text: '“Prétendre” suggests the speaker doubts the claim.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Subjunctive challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-subjunctive', 'fr-c21-reported-speech'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which verb form completes: “Il faut que vous ___ à l’heure”?',
            options: ['arriviez', 'arrivez', 'arriverez', 'arriviez-vous'],
            answer: 'arriviez',
            lesson: 'fr-c21-subjunctive',
          },
          {
            id: 'c2',
            prompt: 'Which sentence is correct?',
            options: [
              'Je crois qu’il a raison.',
              'Je crois qu’il ait raison.',
              'Je crois qu’il aurait eu raisons.',
              'Je crois qu’il aie raison.',
            ],
            answer: 'Je crois qu’il a raison.',
            lesson: 'fr-c21-subjunctive',
          },
          {
            id: 'c3',
            prompt: '“Il a dit : « Je viendrai demain. »” Report it:',
            options: [
              'Il a dit qu’il viendrait le lendemain.',
              'Il a dit qu’il viendra demain.',
              'Il a dit qu’il vient le lendemain.',
              'Il a dit qu’il viendrait hier.',
            ],
            answer: 'Il a dit qu’il viendrait le lendemain.',
            lesson: 'fr-c21-reported-speech',
          },
          {
            id: 'c4',
            prompt: 'Which verb means “to retort”?',
            options: ['répliquer', 'objecter', 'souligner', 'concéder'],
            answer: 'répliquer',
          },
          {
            id: 'c5',
            prompt: '“Hier” becomes … in past reported speech.',
            options: ['la veille', 'le lendemain', 'ce jour-là', 'sur le moment'],
            answer: 'la veille',
            lesson: 'fr-c21-reported-speech',
          },
          {
            id: 'c6',
            prompt: 'Subjunctive of “faire” for “tu”:',
            options: ['fasses', 'fais', 'feras', 'ferais'],
            answer: 'fasses',
            lesson: 'fr-c21-subjunctive',
          },
          {
            id: 'c7',
            prompt: 'Which expression means “it is doubtful that”?',
            options: ['il est douteux que', 'il importe que', 'il se peut que', 'il convient que'],
            answer: 'il est douteux que',
          },
          {
            id: 'c8',
            prompt: 'How do you report: “Tu viens ?” (he asked me …)',
            options: ['si je venais', 'que je venais', 'ce que je venais', 'je venais'],
            answer: 'si je venais',
            lesson: 'fr-c21-reported-speech',
          },
        ],
      },
    ),
  ],
};
