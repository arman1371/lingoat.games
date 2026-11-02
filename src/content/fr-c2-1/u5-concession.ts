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

const U = 'fr-c2-1-concession';

const concession = vocabList(U, 'Concession', [
  ['bien que', 'although (+ subjunctive)', '🌦️'],
  ['quoique', 'although (+ subjunctive)', '☁️'],
  ['encore que', 'although, even though (formal)', '🎩'],
  ['quand bien même', 'even if (+ conditional)', '🔮'],
  ['en dépit de', 'in spite of', '🛡️'],
  ['nonobstant', 'notwithstanding (legal, formal)', '⚖️'],
  ['certes', 'admittedly, of course', '🤝'],
  ['néanmoins', 'nevertheless', '↪️'],
  ['toutefois', 'however', '↩️'],
]);

const opposition = vocabList(U, 'Opposition', [
  ['alors que', 'whereas, while', '⚖️'],
  ['tandis que', 'whereas, while', '🆚'],
  ['au lieu de', 'instead of', '🔁'],
  ['en revanche', 'on the other hand', '🔄'],
  ['à l’inverse', 'conversely', '🙃'],
  ['quitte à', 'even if it means', '🎲'],
  ['par contre', 'on the other hand (spoken)', '💬'],
]);

const hypothesis = vocabList(U, 'Hypothesis and condition', [
  ['au cas où', 'in case (+ conditional)', '☂️'],
  ['à condition que', 'provided that (+ subjunctive)', '📝'],
  ['pourvu que', 'as long as, let us hope (+ subjunctive)', '🤞'],
  ['à moins que', 'unless (+ subjunctive)', '⛔'],
  ['à supposer que', 'supposing that (+ subjunctive)', '💭'],
  ['en admettant que', 'admitting that (+ subjunctive)', '🙋'],
  ['dans l’hypothèse où', 'in the event that (+ conditional)', '🧪'],
  ['sauf si', 'unless, except if (+ indicative)', '🚧'],
]);

const vocab = [...concession, ...opposition, ...hypothesis];

const moodItems: [string, string, string][] = [
  ['Bien qu’il soit fatigué, il continue.', 'subjunctive', 'Although he is tired, he carries on.'],
  [
    'Quoiqu’elle ait raison, personne ne l’écoute.',
    'subjunctive',
    'Although she is right, nobody listens to her.',
  ],
  [
    'Nous partirons à condition que tu viennes.',
    'subjunctive',
    'We will leave provided that you come.',
  ],
  ['À moins qu’il ne pleuve, nous sortirons.', 'subjunctive', 'Unless it rains, we will go out.'],
  [
    'Il travaille alors que ses amis s’amusent.',
    'indicative',
    'He works while his friends enjoy themselves.',
  ],
  ['Je lis tandis que tu dors.', 'indicative', 'I read while you sleep.'],
  ['Même si tu insistes, je refuse.', 'indicative', 'Even if you insist, I refuse.'],
  [
    'Sauf si tu changes d’avis, on part à huit heures.',
    'indicative',
    'Unless you change your mind, we leave at eight.',
  ],
  [
    'Au cas où il pleuvrait, prends un parapluie.',
    'conditional',
    'In case it rains, take an umbrella.',
  ],
  [
    'Quand bien même tu insisterais, je refuserais.',
    'conditional',
    'Even if you were to insist, I would refuse.',
  ],
  [
    'Dans l’hypothèse où il viendrait, prévenez-moi.',
    'conditional',
    'In the event that he comes, let me know.',
  ],
  [
    'Au cas où elle arriverait en retard, commencez sans elle.',
    'conditional',
    'In case she arrives late, start without her.',
  ],
];

const quizWords = vocab.filter(
  (v) => !['nonobstant', 'encore que', 'par contre', 'en admettant que'].includes(v.de),
);

export const concessionUnit: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 5,
    title: 'Concession et hypothèse',
    subtitle: 'Concede a point, contrast two facts and imagine conditions',
    emoji: '⚖️',
    goals: [
      'Concede a point with bien que, quoique, quand bien même and en dépit de',
      'Contrast two facts with alors que, tandis que and en revanche',
      'Express a condition or hypothesis with the right mood',
    ],
    grammar: ['Concession and opposition', 'Condition and hypothesis'],
    vocabFields: ['Concession', 'Opposition', 'Hypothesis and condition'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-concession',
      'flashcards',
      {
        title: 'Conceding a point',
        description: 'Connectors for “although”, “even if” and “nevertheless”.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(concession),
    ),

    activity(
      U,
      'flash-opposition',
      'flashcards',
      {
        title: 'Contrasting two facts',
        description: 'Connectors for “whereas” and “on the other hand”.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(opposition),
    ),

    activity(
      U,
      'flash-hypothesis',
      'flashcards',
      {
        title: 'Conditions and hypotheses',
        description: 'Connectors for “in case”, “provided that” and “unless”.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 4,
      },
      flashcards(hypothesis),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the connector with its meaning.',
        tags: ['vocabulary', 'fr-c21-logic'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'quoique',
          'quand bien même',
          'en dépit de',
          'néanmoins',
          'tandis que',
          'en revanche',
          'au cas où',
          'à moins que',
          'sauf si',
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
        description: 'Listen and pick what the connector means.',
        tags: ['listening', 'vocabulary', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(vocab, 'quoique', 'néanmoins', 'toutefois', 'au cas où', 'à moins que', 'quitte à'),
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
          'bien que',
          'certes',
          'au lieu de',
          'à l’inverse',
          'pourvu que',
          'à supposer que',
          'dans l’hypothèse où',
          'alors que',
        ),
      ),
    ),

    activity(
      U,
      'sort-moods',
      'sortit',
      {
        title: 'Which mood follows?',
        description: 'After each connector the verb takes a different mood.',
        tags: ['grammar', 'fr-c21-concession'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        instruction: 'Which mood does the verb after the connector take?',
        buckets: [
          { id: 'subjunctive', label: 'Subjunctive', emoji: '🌫️' },
          { id: 'indicative', label: 'Indicative', emoji: '✔️' },
          { id: 'conditional', label: 'Conditional', emoji: '🔮' },
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
      'gap-connectors',
      'gapfill',
      {
        title: 'Find the right connector',
        description: 'Concession, opposition or condition: choose the connector that fits.',
        tags: ['grammar', 'fr-c21-concession'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'g1',
            text: '___ le temps soit mauvais, nous sortons.',
            answer: 'Bien que',
            options: ['Bien que', 'Parce que', 'Pourvu que', 'Si bien que'],
            translation: 'Although the weather is bad, we are going out.',
            why: { 'Parce que': 'Parce que gives a cause; the idea here is “in spite of”.' },
          },
          {
            id: 'g2',
            text: '___ la pluie, le match a eu lieu.',
            answer: 'En dépit de',
            options: ['En dépit de', 'Bien que', 'Quoique', 'Alors que'],
            translation: 'In spite of the rain, the match took place.',
            why: { 'Bien que': 'Bien que needs a verb clause; before a noun use en dépit de.' },
          },
          {
            id: 'g3',
            text: 'Il travaille beaucoup ___ son frère ne fait rien.',
            answer: 'alors que',
            options: ['alors que', 'bien que', 'au cas où', 'à moins que'],
            translation: 'He works a lot whereas his brother does nothing.',
            why: { 'bien que': 'Here two facts are set against each other, with the indicative.' },
          },
          {
            id: 'g4',
            text: 'Ce plan est risqué ; ___, il vaut la peine d’être tenté.',
            answer: 'néanmoins',
            options: ['néanmoins', 'par conséquent', 'étant donné que', 'tellement'],
            translation: 'This plan is risky; nevertheless, it is worth trying.',
            why: { 'par conséquent': 'Par conséquent adds a result, not a concession.' },
          },
          {
            id: 'g5',
            text: 'Les ventes baissent à Paris ; ___, elles progressent à Lyon.',
            answer: 'en revanche',
            options: ['en revanche', 'faute de', 'au point de', 'puisque'],
            translation: 'Sales are falling in Paris; on the other hand, they are rising in Lyon.',
          },
          {
            id: 'g6',
            text: '___ vous insisteriez, je refuserais.',
            answer: 'Quand bien même',
            options: ['Quand bien même', 'Bien que', 'Quoique', 'Alors que'],
            translation: 'Even if you insisted, I would refuse.',
            why: {
              'Bien que': 'Bien que takes the subjunctive; quand bien même takes the conditional.',
            },
          },
          {
            id: 'g7',
            text: 'Elle est restée calme, ___ très inquiète.',
            answer: 'quoique',
            options: ['quoique', 'puisque', 'si bien que', 'd’autant que'],
            translation: 'She stayed calm, although very worried.',
            why: { puisque: 'Puisque gives a cause; the idea here is “although”.' },
          },
          {
            id: 'g8',
            text: 'Il agit ___ de réfléchir.',
            answer: 'au lieu',
            options: ['au lieu', 'faute', 'grâce', 'vu'],
            translation: 'He acts instead of thinking.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-hypothesis',
      'gapfill',
      {
        title: 'Which verb form?',
        description: 'Match the verb to the condition: indicative, conditional or subjunctive.',
        tags: ['grammar', 'fr-c21-concession'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'h1',
            text: 'Si tu viens demain, nous ___ au cinéma.',
            answer: 'irons',
            options: ['irons', 'irions', 'allons', 'allions'],
            translation: 'If you come tomorrow, we will go to the cinema.',
            why: { irions: 'Si + present is followed by the future, not the conditional.' },
          },
          {
            id: 'h2',
            text: 'Si j’avais plus de temps, je ___ un roman.',
            answer: 'lirais',
            options: ['lirais', 'lirai', 'lis', 'lisais'],
            translation: 'If I had more time, I would read a novel.',
            why: { lirai: 'Si + imparfait is followed by the conditional.' },
          },
          {
            id: 'h3',
            text: 'Au cas où il ___, prends un parapluie.',
            answer: 'pleuvrait',
            options: ['pleuvrait', 'pleuvra', 'pleut', 'pleuvait'],
            translation: 'In case it rains, take an umbrella.',
            why: { pleuvra: 'Au cas où is followed by the conditional.' },
          },
          {
            id: 'h4',
            text: 'À condition qu’il ___ à l’heure, nous partirons.',
            answer: 'arrive',
            options: ['arrive', 'arrivera', 'arriverait', 'arrivait'],
            translation: 'Provided he arrives on time, we will leave.',
            why: { arrivera: 'À condition que takes the subjunctive.' },
          },
          {
            id: 'h5',
            text: 'Pourvu qu’il ___ beau demain !',
            answer: 'fasse',
            options: ['fasse', 'fera', 'ferait', 'fait'],
            translation: 'Let us hope it is fine tomorrow!',
            why: { fera: 'Pourvu que takes the subjunctive.' },
          },
          {
            id: 'h6',
            text: 'À moins que tu ne ___ pressé, restons un peu.',
            answer: 'sois',
            options: ['sois', 'es', 'seras', 'serais'],
            translation: 'Unless you are in a hurry, let us stay a little.',
            why: { es: 'À moins que takes the subjunctive.' },
          },
          {
            id: 'h7',
            text: 'Si j’avais su, je ne ___ pas venu.',
            answer: 'serais',
            options: ['serais', 'suis', 'serai', 'étais'],
            translation: 'If I had known, I would not have come.',
            why: { serai: 'Si + plus-que-parfait is followed by the conditional (past).' },
          },
          {
            id: 'h8',
            text: 'Quand bien même il ___ riche, je refuserais.',
            answer: 'serait',
            options: ['serait', 'soit', 'est', 'sera'],
            translation: 'Even if he were rich, I would refuse.',
            why: { soit: 'Quand bien même takes the conditional, not the subjunctive.' },
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the connectors',
        description: 'Unscramble, type and write down tricky one-word connectors.',
        tags: ['spelling', 'fr-c21-logic'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(vocab, 'néanmoins', 'toutefois'), 'unscramble').items,
          ...spell(byDe(vocab, 'nonobstant'), 'type').items,
          ...spell(byDe(vocab, 'quoique'), 'dictation').items,
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put the words of concession and condition in order.',
        tags: ['grammar', 'fr-c21-concession'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'Although he is tired, he keeps working.',
            words: ['Bien', 'qu’il', 'soit', 'fatigué,', 'il', 'continue', 'de', 'travailler.'],
          },
          {
            id: 's2',
            translation: 'In spite of the delay, the concert took place.',
            words: ['En', 'dépit', 'du', 'retard,', 'le', 'concert', 'a', 'eu', 'lieu.'],
          },
          {
            id: 's3',
            translation: 'I like the sea, whereas my sister prefers the mountains.',
            words: [
              'J’aime',
              'la',
              'mer,',
              'tandis',
              'que',
              'ma',
              'sœur',
              'préfère',
              'la',
              'montagne.',
            ],
          },
          {
            id: 's4',
            translation: 'Take an umbrella in case it rains.',
            words: ['Prends', 'un', 'parapluie', 'au', 'cas', 'où', 'il', 'pleuvrait.'],
          },
          {
            id: 's5',
            translation: 'We will leave unless it snows.',
            words: ['Nous', 'partirons', 'à', 'moins', 'qu’il', 'ne', 'neige.'],
          },
          {
            id: 's6',
            translation: 'Admittedly the offer is attractive; however, it is expensive.',
            words: [
              'Certes,',
              'l’offre',
              'est',
              'attrayante ;',
              'toutefois,',
              'elle',
              'est',
              'chère.',
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Concede and contrast',
        description: 'Make a plan with conditions, accept an objection and compare two cities.',
        tags: ['communication', 'fr-c21-logic'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'plan',
            title: 'Plan with conditions',
            emoji: '🗓️',
            setting: 'You plan a day trip with a friend and set your conditions.',
            turns: [
              {
                kind: 'npc',
                who: 'Camille',
                text: 'On y va samedi ?',
                translation: 'Shall we go on Saturday?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'D’accord, à condition qu’il fasse beau.', correct: true },
                  {
                    text: 'D’accord, à condition qu’il fera beau.',
                    correct: false,
                    feedback: 'À condition que takes the subjunctive: qu’il fasse.',
                  },
                  {
                    text: 'D’accord, à condition qu’il ferait beau.',
                    correct: false,
                    feedback:
                      'À condition que is followed by the subjunctive, not the conditional.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Et s’il pleut ?',
                translation: 'And if it rains?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Au cas où il pleuvrait, nous irions au musée.', correct: true },
                  {
                    text: 'Au cas où il pleuvra, nous irons au musée.',
                    correct: false,
                    feedback: 'Au cas où takes the conditional.',
                  },
                ],
              },
            ],
          },
          {
            id: 'objection',
            title: 'Accept an objection',
            emoji: '🤝',
            setting: 'In a meeting a colleague points out a weakness in your project.',
            turns: [
              {
                kind: 'npc',
                who: 'Monsieur Roy',
                text: 'Votre projet est cher.',
                translation: 'Your project is expensive.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Certes, il est cher ; toutefois, il rapportera beaucoup.',
                    correct: true,
                  },
                  {
                    text: 'Parce que, il est cher ; toutefois, il rapportera beaucoup.',
                    correct: false,
                    feedback: 'Parce que gives a cause; to concede a point, use certes.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Monsieur Roy',
                text: 'Quand même, je ne suis pas convaincu.',
                translation: 'Still, I am not convinced.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Quand bien même vous ne le seriez pas, nous avançons.', correct: true },
                  {
                    text: 'Quand bien même vous ne le soyez pas, nous avançons.',
                    correct: false,
                    feedback: 'Quand bien même takes the conditional: vous ne le seriez pas.',
                  },
                ],
              },
            ],
          },
          {
            id: 'cities',
            title: 'Compare two cities',
            emoji: '🏙️',
            setting: 'You tell a friend how Lyon and Marseille differ.',
            turns: [
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Tu préfères Lyon ou Marseille ?',
                translation: 'Do you prefer Lyon or Marseille?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Lyon est plutôt calme, alors que Marseille est très animée.',
                    correct: true,
                  },
                  {
                    text: 'Lyon est plutôt calme, bien que Marseille est très animée.',
                    correct: false,
                    feedback: 'Bien que needs the subjunctive and expresses a concession.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Et pour les prix ?',
                translation: 'And what about prices?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Les loyers sont élevés à Lyon ; en revanche, la vie est moins chère à Marseille.',
                    correct: true,
                  },
                  {
                    text: 'Les loyers sont élevés à Lyon ; en dépit de, la vie est moins chère à Marseille.',
                    correct: false,
                    feedback: 'En dépit de needs a noun after it; for a contrast use en revanche.',
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
        title: 'Concession blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-concession'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Bien que” is followed by the subjunctive.', isTrue: true },
          {
            id: 'b2',
            text: '“Quand bien même” is followed by the subjunctive.',
            isTrue: false,
            explanation: 'It takes the conditional: quand bien même vous insisteriez.',
          },
          { id: 'b3', text: '“Au cas où” is followed by the conditional.', isTrue: true },
          {
            id: 'b4',
            text: '“En dépit de” can be followed by a noun.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: '“À condition que” is followed by the future.',
            isTrue: false,
            explanation: 'It takes the subjunctive: à condition que tu viennes.',
          },
          { id: 'b6', text: '“Alors que” can contrast two facts.', isTrue: true },
          {
            id: 'b7',
            text: '“Néanmoins” means “therefore”.',
            isTrue: false,
            explanation: 'It means “nevertheless”.',
          },
          { id: 'b8', text: '“Si” + present is followed by the future.', isTrue: true },
          {
            id: 'b9',
            text: '“Si” + imparfait is followed by the future.',
            isTrue: false,
            explanation: 'It is followed by the conditional.',
          },
          { id: 'b10', text: '“Pourvu que” is followed by the subjunctive.', isTrue: true },
          {
            id: 'b11',
            text: '“Quoique” and “quoi que” are two spellings of the same word.',
            isTrue: false,
            explanation: 'Quoique is a conjunction (although); quoi que means “whatever”.',
          },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Concession challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-concession'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which mood follows “bien que”?',
            options: ['subjunctive', 'indicative', 'conditional', 'imperative'],
            answer: 'subjunctive',
            lesson: 'fr-c21-concession',
          },
          {
            id: 'c2',
            prompt: 'Which mood follows “quand bien même”?',
            options: ['conditional', 'subjunctive', 'future', 'imperative'],
            answer: 'conditional',
            lesson: 'fr-c21-concession',
          },
          {
            id: 'c3',
            prompt: 'Which connector fits before a noun: “___ la fatigue, il a gagné”?',
            options: ['En dépit de', 'Bien que', 'Alors que', 'Pourvu que'],
            answer: 'En dépit de',
            lesson: 'fr-c21-concession',
          },
          {
            id: 'c4',
            prompt: 'Which word means “nevertheless”?',
            options: ['néanmoins', 'certes', 'quitte à', 'au lieu de'],
            answer: 'néanmoins',
          },
          {
            id: 'c5',
            prompt: '“Si j’avais le temps, je ___.” Which verb?',
            options: ['viendrais', 'viendrai', 'viens', 'vienne'],
            answer: 'viendrais',
            lesson: 'fr-c21-concession',
          },
          {
            id: 'c6',
            prompt: 'Which expression means “unless”, with the subjunctive?',
            options: ['à moins que', 'au cas où', 'sauf si', 'alors que'],
            answer: 'à moins que',
          },
          {
            id: 'c7',
            prompt: 'You contrast two cities. Which connector fits?',
            options: ['en revanche', 'faute de', 'grâce à', 'au cas où'],
            answer: 'en revanche',
          },
          {
            id: 'c8',
            prompt: '“Au cas où” takes …',
            options: ['the conditional', 'the future', 'the subjunctive only', 'the imperative'],
            answer: 'the conditional',
            lesson: 'fr-c21-concession',
          },
        ],
      },
    ),
  ],
};
