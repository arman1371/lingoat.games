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
import type { UnitContent } from './types';

const U = 'fr-c2-1-cause';

const causes = vocabList(U, 'Giving a reason', [
  ['étant donné que', 'given that', '📌'],
  ['vu que', 'seeing that', '👀'],
  ['attendu que', 'whereas, since (legal, formal)', '⚖️'],
  ['d’autant que', 'all the more as', '➕'],
  ['du fait que', 'owing to the fact that', '🧾'],
  ['en raison de', 'because of (+ noun)', '🔖'],
  ['faute de', 'for lack of', '🚫'],
  ['sous prétexte que', 'on the pretext that', '🎭'],
  ['à force de', 'by dint of, through constantly', '🔁'],
]);

const effects = vocabList(U, 'Stating a consequence', [
  ['si bien que', 'so that, with the result that', '➡️'],
  ['de sorte que', 'so that (result or purpose)', '🎯'],
  ['au point de', 'to the point of (+ infinitive)', '📈'],
  ['par conséquent', 'consequently', '🧮'],
  ['de ce fait', 'for that reason', '🪜'],
  ['en conséquence', 'accordingly', '✅'],
  ['d’où', 'hence', '🔀'],
  ['tellement', 'so, so much (…que: so … that)', '🌊'],
]);

const verbs = vocabList(U, 'Cause and effect verbs', [
  ['entraîner', 'to lead to, to bring about', '🚂'],
  ['engendrer', 'to give rise to', '🌱'],
  ['occasionner', 'to cause (damage, costs)', '💥'],
  ['déclencher', 'to trigger', '🔔'],
  ['découler de', 'to follow from', '💧'],
  ['résulter de', 'to result from', '🧪'],
  ['être à l’origine de', 'to be at the origin of', '🧭'],
  ['imputer à', 'to attribute to', '🏷️'],
]);

const vocab = [...causes, ...effects, ...verbs];

const roleItems: [string, string, string][] = [
  [
    'Étant donné qu’il pleut, le match est reporté.',
    'cause',
    'Given that it is raining, the match is postponed.',
  ],
  ['Il a échoué faute de temps.', 'cause', 'He failed for lack of time.'],
  [
    'Vu que le train est en retard, nous prenons un taxi.',
    'cause',
    'Seeing that the train is late, we take a taxi.',
  ],
  [
    'Elle est partie sous prétexte qu’elle était fatiguée.',
    'cause',
    'She left on the pretext that she was tired.',
  ],
  ['Il a réussi à force de travail.', 'cause', 'He succeeded through sheer hard work.'],
  [
    'Je reste, d’autant que le film est gratuit.',
    'cause',
    'I am staying, all the more as the film is free.',
  ],
  [
    'Il a beaucoup plu, si bien que la route est inondée.',
    'consequence',
    'It rained a lot, so the road is flooded.',
  ],
  [
    'Elle était fatiguée au point de s’endormir debout.',
    'consequence',
    'She was so tired that she fell asleep standing up.',
  ],
  [
    'Les prix ont doublé ; par conséquent, les ventes ont chuté.',
    'consequence',
    'Prices doubled; consequently sales fell.',
  ],
  [
    'Il a mal dormi ; de ce fait, il est de mauvaise humeur.',
    'consequence',
    'He slept badly; for that reason he is in a bad mood.',
  ],
  [
    'La crise s’est aggravée, d’où une hausse du chômage.',
    'consequence',
    'The crisis got worse, hence rising unemployment.',
  ],
  [
    'Une tempête a éclaté, de sorte que le vol a été annulé.',
    'consequence',
    'A storm broke out, so the flight was cancelled.',
  ],
];

const quizWords = vocab.filter(
  (v) => !['attendu que', 'en conséquence', 'imputer à'].includes(v.de),
);

export const cause: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 4,
    title: 'Cause et conséquence',
    subtitle: 'Give reasons and draw consequences with precise connectors',
    emoji: '🔗',
    goals: [
      'Choose between parce que, puisque, étant donné que, faute de, grâce à and en raison de',
      'Express a consequence with si bien que, de sorte que, au point de and par conséquent',
      'Use the right mood after the connector, and verbs such as entraîner and découler de',
    ],
    grammar: ['Cause connectors', 'Consequence connectors'],
    vocabFields: ['Giving a reason', 'Stating a consequence', 'Cause and effect verbs'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-cause',
      'flashcards',
      {
        title: 'Giving a reason',
        description: 'Connectors that introduce a cause.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(causes),
    ),

    activity(
      U,
      'flash-effect',
      'flashcards',
      {
        title: 'Stating a consequence',
        description: 'Connectors that introduce a result.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(effects),
    ),

    activity(
      U,
      'flash-verbs',
      'flashcards',
      {
        title: 'Verbs of cause and effect',
        description: 'Say that one thing leads to, follows from or triggers another.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 3,
      },
      flashcards(verbs),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the connector or verb with its meaning.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'vu que',
          'faute de',
          'sous prétexte que',
          'à force de',
          'si bien que',
          'par conséquent',
          'd’où',
          'engendrer',
          'déclencher',
        ),
        quizWords,
        4,
      ),
    ),

    activity(
      U,
      'listen-links',
      'listen',
      {
        title: 'Listen to the connectors',
        description: 'Listen and pick what the connector or verb means.',
        tags: ['listening', 'vocabulary', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'étant donné que',
          'faute de',
          'si bien que',
          'de ce fait',
          'engendrer',
          'découler de',
        ),
        quizWords,
      ),
    ),

    activity(
      U,
      'memory-links',
      'memory',
      {
        title: 'Connector memory',
        description: 'Match the connector with its meaning.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'du fait que',
          'en raison de',
          'sous prétexte que',
          'au point de',
          'tellement',
          'entraîner',
          'résulter de',
          'être à l’origine de',
        ),
      ),
    ),

    activity(
      U,
      'sort-roles',
      'sortit',
      {
        title: 'Cause or consequence?',
        description: 'Does the connector give the reason or the result?',
        tags: ['grammar', 'fr-c21-cause-consequence'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Does the connector give the reason or the result?',
        buckets: [
          { id: 'cause', label: 'The reason (cause)', emoji: '🔙' },
          { id: 'consequence', label: 'The result (consequence)', emoji: '🔜' },
        ],
        items: roleItems.map(([text, bucket, translation], i) => ({
          id: `r${i + 1}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-connectors',
      'gapfill',
      {
        title: 'Find the right connector',
        description: 'Reason or result, noun or clause: choose the connector that fits.',
        tags: ['grammar', 'fr-c21-cause-consequence'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Il n’a pas pu venir ___ maladie.',
            answer: 'en raison de',
            options: ['en raison de', 'parce que', 'puisque', 'si bien que'],
            translation: 'He could not come because of illness.',
            why: {
              'parce que': 'Parce que needs a clause with a verb; before a noun use en raison de.',
            },
          },
          {
            id: 'g2',
            text: 'Il a échoué ___ préparation.',
            answer: 'faute de',
            options: ['faute de', 'grâce à', 'puisque', 'tellement'],
            translation: 'He failed for lack of preparation.',
            why: {
              'grâce à': 'Grâce à gives a positive cause; a failure needs faute de or à cause de.',
            },
          },
          {
            id: 'g3',
            text: 'Elle a gagné le concours ___ son travail acharné.',
            answer: 'grâce à',
            options: ['grâce à', 'faute de', 'au point de', 'de sorte que'],
            translation: 'She won the competition thanks to her hard work.',
            why: {
              'faute de': 'Faute de means “for lack of”, which makes no sense for a success.',
            },
          },
          {
            id: 'g4',
            text: '___ vous êtes déjà au courant, je ne répète pas.',
            answer: 'Puisque',
            options: ['Puisque', 'Parce que', 'Si bien que', 'Au point que'],
            translation: 'Since you already know, I will not repeat it.',
            why: {
              'Parce que':
                'Parce que gives new information; puisque refers to a reason the listener already knows.',
            },
          },
          {
            id: 'g5',
            text: 'Il a trop mangé, ___ son ventre le fait souffrir.',
            answer: 'si bien que',
            options: ['si bien que', 'étant donné que', 'vu que', 'faute de'],
            translation: 'He ate too much, so his stomach hurts.',
            why: {
              'étant donné que':
                'Étant donné que introduces a cause; here the second clause is the result.',
            },
          },
          {
            id: 'g6',
            text: 'Les prix ont augmenté ; ___, la demande a baissé.',
            answer: 'par conséquent',
            options: ['par conséquent', 'd’autant que', 'étant donné que', 'faute de'],
            translation: 'Prices went up; consequently demand fell.',
            why: { 'd’autant que': 'D’autant que adds a reason; par conséquent adds a result.' },
          },
          {
            id: 'g7',
            text: 'Il était ému ___ ne plus pouvoir parler.',
            answer: 'au point de',
            options: ['au point de', 'faute de', 'vu que', 'par conséquent'],
            translation: 'He was so moved that he could no longer speak.',
            why: {
              'faute de':
                'Faute de gives a cause (“for lack of”); here the infinitive shows the result.',
            },
          },
          {
            id: 'g8',
            text: 'Il est resté au lit ___ son dos lui faisait mal, mais il allait très bien.',
            answer: 'sous prétexte que',
            options: ['sous prétexte que', 'puisque', 'du fait que', 'si bien que'],
            translation:
              'He stayed in bed on the pretext that his back hurt, but he was perfectly fine.',
            why: {
              puisque:
                'Puisque states a real reason; the speaker doubts this one, so sous prétexte que.',
            },
          },
        ],
      },
    ),

    activity(
      U,
      'gap-mood',
      'gapfill',
      {
        title: 'Indicative or subjunctive?',
        description: 'The mood after the connector depends on what it expresses.',
        tags: ['grammar', 'fr-c21-cause-consequence'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'm1',
            text: 'Il a bien préparé son exposé, de sorte que tout le monde ___.',
            answer: 'a compris',
            options: ['a compris', 'comprenne', 'comprît', 'comprendrait'],
            translation: 'He prepared his talk well, so everyone understood.',
            why: { comprenne: 'A result that really happened takes the indicative.' },
          },
          {
            id: 'm2',
            text: 'Parlez lentement de sorte que tout le monde ___.',
            answer: 'comprenne',
            options: ['comprenne', 'comprend', 'comprendra', 'a compris'],
            translation: 'Speak slowly so that everyone understands.',
            why: {
              comprend: 'De sorte que with a purpose (not yet reached) takes the subjunctive.',
            },
          },
          {
            id: 'm3',
            text: 'Il pleut tellement que la rue ___ inondée.',
            answer: 'est',
            options: ['est', 'soit', 'fût', 'serait'],
            translation: 'It is raining so much that the street is flooded.',
            why: { soit: 'A real result after tellement … que takes the indicative.' },
          },
          {
            id: 'm4',
            text: 'Étant donné qu’il ___ malade, on a annulé la réunion.',
            answer: 'est',
            options: ['est', 'soit', 'fût', 'serait'],
            translation: 'Given that he is ill, the meeting was cancelled.',
            why: { soit: 'Étant donné que states a real cause, so the indicative.' },
          },
          {
            id: 'm5',
            text: 'Ce n’est pas qu’il ___ paresseux, mais il manque de temps.',
            answer: 'soit',
            options: ['soit', 'est', 'sera', 'était'],
            translation: 'It is not that he is lazy, but he is short of time.',
            why: { est: 'Ce n’est pas que denies a reason and takes the subjunctive.' },
          },
          {
            id: 'm6',
            text: 'Puisque vous ___ là, aidez-moi.',
            answer: 'êtes',
            options: ['êtes', 'soyez', 'fussiez', 'seriez'],
            translation: 'Since you are here, help me.',
            why: { soyez: 'Puisque presents a known fact, so the indicative.' },
          },
          {
            id: 'm7',
            text: 'Elle a tant crié qu’elle n’___ plus de voix.',
            answer: 'a',
            options: ['a', 'ait', 'eût', 'aurait'],
            translation: 'She shouted so much that she has no voice left.',
            why: { ait: 'A real result takes the indicative, not the subjunctive.' },
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the verbs of cause',
        description: 'Unscramble, type and write down verbs of cause and effect.',
        tags: ['spelling', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(vocab, 'déclencher', 'engendrer'), 'unscramble').items,
          ...spell(byDe(vocab, 'occasionner'), 'type').items,
          ...spell(byDe(vocab, 'entraîner'), 'dictation').items,
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put the words of reasons and results in order.',
        tags: ['grammar', 'fr-c21-cause-consequence'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'Given that it is raining, the picnic is postponed.',
            words: ['Étant', 'donné', 'qu’il', 'pleut,', 'le', 'pique-nique', 'est', 'reporté.'],
          },
          {
            id: 's2',
            translation: 'For lack of time, we had to shorten the meeting.',
            words: ['Faute', 'de', 'temps,', 'nous', 'avons', 'dû', 'abréger', 'la', 'réunion.'],
          },
          {
            id: 's3',
            translation: 'The crisis gave rise to a sharp rise in unemployment.',
            words: ['La', 'crise', 'a', 'engendré', 'une', 'forte', 'hausse', 'du', 'chômage.'],
          },
          {
            id: 's4',
            translation: 'He worked too much, so he fell ill.',
            words: [
              'Il',
              'a',
              'trop',
              'travaillé,',
              'si',
              'bien',
              'qu’il',
              'est',
              'tombé',
              'malade.',
            ],
          },
          {
            id: 's5',
            translation: 'He arrived late on the pretext that his train was cancelled.',
            words: [
              'Il',
              'est',
              'arrivé',
              'en',
              'retard',
              'sous',
              'prétexte',
              'que',
              'son',
              'train',
              'était',
              'annulé.',
            ],
          },
          {
            id: 's6',
            translation: 'This decision follows from a long debate.',
            words: ['Cette', 'décision', 'découle', 'd’un', 'long', 'débat.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Explain why',
        description: 'Justify a delay, analyse a strike and ask for a reason.',
        tags: ['communication', 'fr-c21-logic'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'delay',
            title: 'Justify a delay',
            emoji: '⏰',
            setting: 'Your manager asks why the report is late.',
            turns: [
              {
                kind: 'npc',
                who: 'La directrice',
                text: 'Pourquoi le rapport n’est-il pas prêt ?',
                translation: 'Why is the report not ready?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Faute de données, je n’ai pas pu le terminer.', correct: true },
                  {
                    text: 'Grâce à un manque de données, je n’ai pas pu le terminer.',
                    correct: false,
                    feedback: 'Grâce à gives a positive cause; for a problem say faute de.',
                  },
                  {
                    text: 'Si bien que des données, je n’ai pas pu le terminer.',
                    correct: false,
                    feedback: 'Si bien que introduces a result and needs a clause.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La directrice',
                text: 'Et que comptez-vous faire ?',
                translation: 'And what do you plan to do?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Je les demande aujourd’hui ; par conséquent, vous l’aurez lundi.',
                    correct: true,
                  },
                  {
                    text: 'Je les demande aujourd’hui ; étant donné que, vous l’aurez lundi.',
                    correct: false,
                    feedback: 'Étant donné que gives a reason and needs its own clause.',
                  },
                ],
              },
            ],
          },
          {
            id: 'strike',
            title: 'Analyse a strike',
            emoji: '🚉',
            setting: 'On the radio, a journalist and you discuss why trains are cancelled.',
            turns: [
              {
                kind: 'npc',
                who: 'Le journaliste',
                text: 'Quelle est la cause de la perturbation ?',
                translation: 'What is the cause of the disruption?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Elle découle d’un mouvement de grève national.', correct: true },
                  {
                    text: 'Elle découle un mouvement de grève national.',
                    correct: false,
                    feedback: 'Découler is followed by de: découler de.',
                  },
                  {
                    text: 'Elle est tellement un mouvement de grève.',
                    correct: false,
                    feedback: 'Tellement needs an adjective or verb and a que-clause.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le journaliste',
                text: 'Et pour les voyageurs ?',
                translation: 'And for travellers?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'La grève a entraîné de nombreuses annulations.',
                    correct: true,
                  },
                  {
                    text: 'La grève a entraîné à de nombreuses annulations.',
                    correct: false,
                    feedback: 'Entraîner takes a direct object, no preposition.',
                  },
                ],
              },
            ],
          },
          {
            id: 'reason',
            title: 'Ask for a reason',
            emoji: '❓',
            setting: 'A colleague turns down your invitation. You ask politely why.',
            turns: [
              {
                kind: 'npc',
                who: 'Julien',
                text: 'Je ne viendrai pas à la fête.',
                translation: 'I will not come to the party.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Puisque tu le dis… mais quelle en est la raison ?', correct: true },
                  {
                    text: 'Parce que tu le dis… mais quelle en est la raison ?',
                    correct: false,
                    feedback: 'Here you refer to what he just said, a known reason: puisque.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Julien',
                text: 'Je suis épuisé, d’autant que je travaille demain.',
                translation: 'I am exhausted, all the more as I work tomorrow.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je comprends : repose-toi bien.', correct: true },
                  {
                    text: 'Tu es épuisé sous prétexte que tu travailles demain ?',
                    correct: false,
                    feedback:
                      'Sous prétexte que suggests you doubt his reason, which would be rude here.',
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
        title: 'Cause and consequence blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-cause-consequence'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Puisque” gives a reason the listener already knows.', isTrue: true },
          {
            id: 'b2',
            text: '“Parce que” can be followed directly by a noun.',
            isTrue: false,
            explanation: 'Before a noun use à cause de or en raison de; parce que needs a clause.',
          },
          { id: 'b3', text: '“Faute de” means “for lack of”.', isTrue: true },
          {
            id: 'b4',
            text: '“Grâce à” introduces a negative cause.',
            isTrue: false,
            explanation: 'Grâce à is positive: thanks to.',
          },
          { id: 'b5', text: '“Si bien que” introduces a result.', isTrue: true },
          {
            id: 'b6',
            text: '“Étant donné que” introduces a result.',
            isTrue: false,
            explanation: 'It introduces a cause: given that.',
          },
          {
            id: 'b7',
            text: '“De sorte que” takes the indicative for a real result and the subjunctive for a purpose.',
            isTrue: true,
          },
          { id: 'b8', text: '“Par conséquent” can start a new sentence.', isTrue: true },
          {
            id: 'b9',
            text: '“Entraîner” is followed by “de”.',
            isTrue: false,
            explanation: 'Entraîner takes a direct object; it is découler that takes de.',
          },
          {
            id: 'b10',
            text: '“Sous prétexte que” hints that the reason is doubtful.',
            isTrue: true,
          },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Cause and consequence challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-cause-consequence'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which connector gives a reason the listener already knows?',
            options: ['puisque', 'parce que', 'si bien que', 'de sorte que'],
            answer: 'puisque',
            lesson: 'fr-c21-cause-consequence',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Il a échoué ___ temps.”',
            options: ['faute de', 'grâce à', 'si bien que', 'puisque'],
            answer: 'faute de',
            lesson: 'fr-c21-cause-consequence',
          },
          {
            id: 'c3',
            prompt: 'Mood in: “Il a parlé de sorte que tout le monde a compris” (real result):',
            options: ['indicative', 'subjunctive', 'conditional', 'imperative'],
            answer: 'indicative',
            lesson: 'fr-c21-cause-consequence',
          },
          {
            id: 'c4',
            prompt: 'Which verb means “to follow from”?',
            options: ['découler de', 'engendrer', 'occasionner', 'imputer à'],
            answer: 'découler de',
          },
          {
            id: 'c5',
            prompt: 'Which connector introduces a result?',
            options: ['si bien que', 'étant donné que', 'vu que', 'd’autant que'],
            answer: 'si bien que',
            lesson: 'fr-c21-cause-consequence',
          },
          {
            id: 'c6',
            prompt: 'Which expression means “on the pretext that”?',
            options: ['sous prétexte que', 'du fait que', 'à force de', 'en raison de'],
            answer: 'sous prétexte que',
          },
          {
            id: 'c7',
            prompt: 'Which connector fits before a noun: “___ la pluie, le concert est annulé”?',
            options: ['En raison de', 'Parce que', 'Puisque', 'Si bien que'],
            answer: 'En raison de',
            lesson: 'fr-c21-cause-consequence',
          },
          {
            id: 'c8',
            prompt: 'Which verb means “to trigger”?',
            options: ['déclencher', 'entraîner', 'résulter de', 'imputer à'],
            answer: 'déclencher',
          },
        ],
      },
    ),
  ],
};
