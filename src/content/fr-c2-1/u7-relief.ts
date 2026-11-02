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

const U = 'fr-c2-1-relief';

const markers = vocabList(U, 'Words that stress a point', [
  ['notamment', 'in particular, notably', '📌'],
  ['précisément', 'precisely, exactly', '🎯'],
  ['voire', 'even, indeed', '➕'],
  ['d’ailleurs', 'besides, by the way', '↪️'],
  ['de surcroît', 'moreover (formal)', '📎'],
  ['qui plus est', 'what is more', '🧩'],
  ['à plus forte raison', 'all the more reason', '🔎'],
  ['en l’occurrence', 'in this case', '🗂️'],
  ['tout particulièrement', 'especially', '⭐'],
]);

const nouns = vocabList(U, 'Verbs turned into nouns', [
  ['l’aboutissement', 'the outcome, result (aboutir)', '🏁'],
  ['le déroulement', 'the course of events (se dérouler)', '🎞️'],
  ['l’essor', 'the rapid growth, rise', '🚀'],
  ['le recul', 'the decline, step back (reculer)', '📉'],
  ['le bouleversement', 'the upheaval (bouleverser)', '🌪️'],
  ['l’aggravation', 'the worsening (s’aggraver)', '⚠️'],
  ['la remise en cause', 'the questioning (remettre en cause)', '❔'],
  ['l’émergence', 'the emergence (émerger)', '🌅'],
]);

const press = vocabList(U, 'Words of the press', [
  ['le revirement', 'the U-turn', '↩️'],
  ['la flambée', 'the surge (of prices)', '🔥'],
  ['le coup d’envoi', 'the kick-off, the start', '⚽'],
  ['le bras de fer', 'the stand-off', '💪'],
  ['l’enjeu', 'what is at stake', '🎲'],
  ['le tollé', 'the outcry', '📢'],
  ['la polémique', 'the controversy', '💬'],
  ['le bilan', 'the outcome, the toll', '🧮'],
]);

const vocab = [...markers, ...nouns, ...press];

const structureItems: [string, string, string][] = [
  ['C’est Marie qui a gagné.', 'cleft', 'It was Marie who won.'],
  [
    'Ce sont les élèves que le directeur a félicités.',
    'cleft',
    'It was the pupils whom the head praised.',
  ],
  ['C’est demain que nous partons.', 'cleft', 'It is tomorrow that we leave.'],
  ['C’est à toi que je parle.', 'cleft', 'It is you I am talking to.'],
  ['Ce livre, je l’ai lu deux fois.', 'dislocation', 'This book, I have read it twice.'],
  ['Elle est géniale, ta sœur.', 'dislocation', 'She is great, your sister.'],
  ['Les voisins, on ne les voit jamais.', 'dislocation', 'The neighbours, we never see them.'],
  ['Je l’ai lu, ce roman.', 'dislocation', 'I have read it, this novel.'],
  ['Ce qui m’intéresse, c’est la musique.', 'pseudo', 'What interests me is music.'],
  ['Ce que je veux, c’est du calme.', 'pseudo', 'What I want is some peace.'],
  ['Ce dont j’ai besoin, c’est de temps.', 'pseudo', 'What I need is time.'],
  ['Ce qui compte, c’est de participer.', 'pseudo', 'What matters is taking part.'],
];

const quizWords = vocab.filter(
  (v) => !['de surcroît', 'à plus forte raison', 'le déroulement'].includes(v.de),
);

export const relief: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 7,
    title: 'Mise en relief',
    subtitle: 'Stress what matters with clefts and dislocation, and write dense noun phrases',
    emoji: '🔦',
    goals: [
      'Stress one element with c’est … qui / que and ce qui … c’est',
      'Use dislocation with a resumptive pronoun, in speech and in writing',
      'Turn verbs into nouns (nominalisation) for a dense written style',
    ],
    grammar: ['Emphasis', 'Nominalisation'],
    vocabFields: ['Words that stress a point', 'Verbs turned into nouns', 'Words of the press'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-markers',
      'flashcards',
      {
        title: 'Words that stress a point',
        description: 'Adverbs and phrases that highlight an idea.',
        tags: ['vocabulary', 'fr-c21-style'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(markers),
    ),

    activity(
      U,
      'flash-nouns',
      'flashcards',
      {
        title: 'Verbs turned into nouns',
        description: 'Nouns for processes and changes, as used in articles and reports.',
        tags: ['vocabulary', 'fr-c21-style'],
        difficulty: 2,
        estMinutes: 4,
      },
      flashcards(nouns),
    ),

    activity(
      U,
      'flash-press',
      'flashcards',
      {
        title: 'Words of the press',
        description: 'Headline nouns for conflicts, surprises and results.',
        tags: ['vocabulary', 'fr-c21-style'],
        difficulty: 2,
        estMinutes: 3,
      },
      flashcards(press),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the word with its meaning.',
        tags: ['vocabulary', 'fr-c21-style'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'notamment',
          'voire',
          'en l’occurrence',
          'l’essor',
          'le recul',
          'le revirement',
          'la flambée',
          'le tollé',
          'le bras de fer',
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
        description: 'Listen to the word and choose what it means.',
        tags: ['listening', 'vocabulary', 'fr-c21-style'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'précisément',
          'qui plus est',
          'l’émergence',
          'le bouleversement',
          'la polémique',
          'l’enjeu',
        ),
        quizWords,
      ),
    ),

    activity(
      U,
      'memory-words',
      'memory',
      {
        title: 'Style memory',
        description: 'Match the word with its meaning.',
        tags: ['vocabulary', 'fr-c21-style'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'd’ailleurs',
          'tout particulièrement',
          'l’aboutissement',
          'l’aggravation',
          'la remise en cause',
          'le coup d’envoi',
          'le bilan',
          'le tollé',
        ),
      ),
    ),

    activity(
      U,
      'sort-structures',
      'sortit',
      {
        title: 'Which kind of emphasis?',
        description: 'Cleft, dislocation or “ce qui … c’est”: sort the sentences.',
        tags: ['grammar', 'fr-c21-emphasis'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'How does the sentence stress an element?',
        buckets: [
          { id: 'cleft', label: 'C’est … qui / que', emoji: '✂️' },
          { id: 'dislocation', label: 'Dislocation (pronoun)', emoji: '↔️' },
          { id: 'pseudo', label: 'Ce qui / ce que … c’est', emoji: '🔦' },
        ],
        items: structureItems.map(([text, bucket, translation], i) => ({
          id: `s${i + 1}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-emphasis',
      'gapfill',
      {
        title: 'Qui, que, dont or a pronoun?',
        description: 'Complete the stressed sentence with the right small word.',
        tags: ['grammar', 'fr-c21-emphasis'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'e1',
            text: 'C’est Paul ___ a cassé le vase.',
            answer: 'qui',
            options: ['qui', 'que', 'dont', 'où'],
            translation: 'It was Paul who broke the vase.',
            why: { que: 'Paul is the subject of the verb, so the pronoun is qui.' },
          },
          {
            id: 'e2',
            text: 'C’est ce film ___ nous avons vu hier.',
            answer: 'que',
            options: ['que', 'qui', 'dont', 'où'],
            translation: 'It is this film that we saw yesterday.',
            why: { qui: 'The film is the object of “avons vu”, so the pronoun is que.' },
          },
          {
            id: 'e3',
            text: 'Ce ___ je veux, c’est du calme.',
            answer: 'que',
            options: ['que', 'qui', 'dont', 'quoi'],
            translation: 'What I want is some peace.',
            why: { qui: '“Je veux” has its own subject; the object takes ce que.' },
          },
          {
            id: 'e4',
            text: 'Ce ___ m’intéresse, c’est la musique.',
            answer: 'qui',
            options: ['qui', 'que', 'dont', 'quoi'],
            translation: 'What interests me is music.',
            why: { que: 'Here “ce” is the subject of “m’intéresse”, so ce qui.' },
          },
          {
            id: 'e5',
            text: 'Ce ___ j’ai besoin, c’est de temps.',
            answer: 'dont',
            options: ['dont', 'que', 'qui', 'où'],
            translation: 'What I need is time.',
            why: { que: 'Avoir besoin de requires dont: ce dont j’ai besoin.' },
          },
          {
            id: 'e6',
            text: 'Ce ___ les enfants qui font le bruit.',
            answer: 'sont',
            options: ['sont', 'est', 'ont', 'était'],
            translation: 'It is the children who make the noise.',
            why: { est: 'In careful writing a plural noun after the presentative takes ce sont.' },
          },
          {
            id: 'e7',
            text: 'Les voisins, on ne ___ voit jamais.',
            answer: 'les',
            options: ['les', 'leur', 'lui', 'ils'],
            translation: 'The neighbours, we never see them.',
            why: { leur: 'The detached noun is the direct object, so the pronoun is les.' },
          },
          {
            id: 'e8',
            text: 'Ce roman, je ___ relirais volontiers.',
            answer: 'le',
            options: ['le', 'lui', 'y', 'en'],
            translation: 'This novel, I would gladly read it again.',
            why: { lui: 'Lui replaces a person with à; the novel is a direct object, so le.' },
          },
        ],
      },
    ),

    activity(
      U,
      'gap-nominal',
      'gapfill',
      {
        title: 'From verb to noun',
        description: 'Write the noun that packs the verb, as in a news article.',
        tags: ['grammar', 'fr-c21-nominalisation'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'n1',
            text: 'On a décidé de reporter la réunion. → Le ___ de la réunion a été décidé.',
            answer: 'report',
            options: ['report', 'reporter', 'reportage', 'reportant'],
            translation:
              'It was decided to postpone the meeting. → The postponement of the meeting was decided.',
            why: { reportage: 'Un reportage is a news report; the noun of reporter is le report.' },
          },
          {
            id: 'n2',
            text: 'Les prix ont flambé. → La ___ des prix inquiète.',
            answer: 'flambée',
            options: ['flambée', 'flamber', 'flambant', 'flambeau'],
            translation: 'Prices soared. → The surge in prices is worrying.',
          },
          {
            id: 'n3',
            text: 'Les négociations ont abouti. → L’___ des négociations est un succès.',
            answer: 'aboutissement',
            options: ['aboutissement', 'aboutir', 'abouti', 'aboutissant'],
            translation:
              'The negotiations succeeded. → The outcome of the negotiations is a success.',
          },
          {
            id: 'n4',
            text: 'La situation s’aggrave. → L’___ de la situation inquiète.',
            answer: 'aggravation',
            options: ['aggravation', 'aggravement', 'aggraver', 'aggravé'],
            translation:
              'The situation is getting worse. → The worsening of the situation is worrying.',
          },
          {
            id: 'n5',
            text: 'Le ministre a démissionné. → La ___ du ministre a surpris.',
            answer: 'démission',
            options: ['démission', 'démissionner', 'démis', 'démissionnaire'],
            translation: 'The minister resigned. → The minister’s resignation was a surprise.',
          },
          {
            id: 'n6',
            text: 'Le parti a changé d’avis. → Le ___ du parti a surpris.',
            answer: 'revirement',
            options: ['revirement', 'revenant', 'retourner', 'revenir'],
            translation: 'The party changed its mind. → The party’s U-turn was a surprise.',
          },
          {
            id: 'n7',
            text: 'Les syndicats s’opposent à la réforme. → L’___ des syndicats à la réforme est forte.',
            answer: 'opposition',
            options: ['opposition', 'opposer', 'opposant', 'opposé'],
            translation:
              'The unions oppose the reform. → The unions’ opposition to the reform is strong.',
          },
          {
            id: 'n8',
            text: 'La ville se développe vite. → Le ___ rapide de la ville impressionne.',
            answer: 'développement',
            options: ['développement', 'développer', 'développé', 'développant'],
            translation:
              'The city is developing fast. → The fast development of the city is impressive.',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the stress words',
        description: 'Unscramble, type and write down adverbs that stress a point.',
        tags: ['spelling', 'fr-c21-style'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(byDe(vocab, 'notamment', 'voire'), 'unscramble').items,
          ...spell(byDe(vocab, 'précisément'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put stressed sentences and dense noun phrases in order.',
        tags: ['grammar', 'fr-c21-emphasis', 'fr-c21-nominalisation'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'It is tiredness that explains this delay.',
            words: ['C’est', 'la', 'fatigue', 'qui', 'explique', 'ce', 'retard.'],
          },
          {
            id: 's2',
            translation: 'It is young people whom the reform affects.',
            words: ['Ce', 'sont', 'les', 'jeunes', 'que', 'la', 'réforme', 'concerne.'],
          },
          {
            id: 's3',
            translation: 'What I regret is your silence.',
            words: ['Ce', 'que', 'je', 'regrette,', 'c’est', 'ton', 'silence.'],
          },
          {
            id: 's4',
            translation: 'This novel, I have read it twice.',
            words: ['Ce', 'roman,', 'je', 'l’ai', 'lu', 'deux', 'fois.'],
          },
          {
            id: 's5',
            translation: 'The emergence of this party upset the political scene.',
            words: [
              'L’émergence',
              'de',
              'ce',
              'parti',
              'a',
              'bouleversé',
              'la',
              'scène',
              'politique.',
            ],
          },
          {
            id: 's6',
            translation: 'He is competent, even brilliant.',
            words: ['Il', 'est', 'compétent,', 'voire', 'brillant.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Say it with emphasis',
        description: 'Correct a misunderstanding, voice an opinion and read a headline.',
        tags: ['communication', 'fr-c21-style'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'correct',
            title: 'Correct a misunderstanding',
            emoji: '🙋',
            setting: 'Your boss thinks Anne wrote the report, but it was Hugo.',
            turns: [
              {
                kind: 'npc',
                who: 'Le chef',
                text: 'Anne a écrit le rapport, n’est-ce pas ?',
                translation: 'Anne wrote the report, didn’t she?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Non, c’est Hugo qui l’a écrit.', correct: true },
                  {
                    text: 'Non, c’est Hugo que l’a écrit.',
                    correct: false,
                    feedback: 'Hugo is the subject of “a écrit”: c’est … qui.',
                  },
                  {
                    text: 'Non, ce Hugo qui l’a écrit.',
                    correct: false,
                    feedback: 'You need c’est (or ce sont before a plural noun).',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le chef',
                text: 'Et la présentation ?',
                translation: 'And the presentation?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'La présentation, c’est Anne qui la fera.', correct: true },
                  {
                    text: 'La présentation, c’est Anne qui le fera.',
                    correct: false,
                    feedback: 'Présentation is feminine: the pronoun is la.',
                  },
                ],
              },
            ],
          },
          {
            id: 'opinion',
            title: 'Voice an opinion',
            emoji: '💬',
            setting: 'A friend asks what you look for in a job.',
            turns: [
              {
                kind: 'npc',
                who: 'Léo',
                text: 'Qu’est-ce qui compte pour toi dans un travail ?',
                translation: 'What matters to you in a job?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ce qui compte, c’est l’ambiance.', correct: true },
                  {
                    text: 'Ce que compte, c’est l’ambiance.',
                    correct: false,
                    feedback: 'Compter is the verb of “ce”: ce qui compte.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léo',
                text: 'Et le salaire ?',
                translation: 'And the salary?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Le salaire, je n’y pense pas trop.', correct: true },
                  {
                    text: 'Le salaire, je n’en pense pas trop.',
                    correct: false,
                    feedback: 'Penser à takes y, not en.',
                  },
                ],
              },
            ],
          },
          {
            id: 'headline',
            title: 'Read the news',
            emoji: '📰',
            setting: 'Two colleagues discuss a headline at the coffee machine.',
            turns: [
              {
                kind: 'npc',
                who: 'Julie',
                text: 'Tu as vu ? « Revirement du gouvernement sur la réforme. »',
                translation: 'Did you see? “Government U-turn on the reform.”',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, ce revirement a provoqué un tollé.', correct: true },
                  {
                    text: 'Oui, ce revirement a provoqué une flambée de sourires.',
                    correct: false,
                    feedback: 'Flambée describes a surge of prices or fires, not smiles.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Julie',
                text: 'Et que penses-tu de l’enjeu ?',
                translation: 'And what do you think about what is at stake?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'L’enjeu est important, voire décisif.', correct: true },
                  {
                    text: 'L’enjeu est important, qu’en plus décisif.',
                    correct: false,
                    feedback: 'Use voire, or qui plus est, to add a stronger idea.',
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
        title: 'Emphasis blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-emphasis', 'fr-c21-nominalisation'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          {
            id: 'b1',
            text: 'In “C’est Paul qui a cassé le vase”, qui replaces the subject.',
            isTrue: true,
          },
          {
            id: 'b2',
            text: 'After “c’est” a direct object takes “qui”.',
            isTrue: false,
            explanation: 'A direct object takes que: c’est ce film que j’ai vu.',
          },
          { id: 'b3', text: '“Ce dont j’ai besoin, c’est de temps” is correct.', isTrue: true },
          {
            id: 'b4',
            text: 'In a dislocation the detached noun is taken up by a pronoun.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: '“Ce livre, je lis” is a correct dislocation.',
            isTrue: false,
            explanation: 'The pronoun is missing: Ce livre, je le lis.',
          },
          {
            id: 'b6',
            text: 'Dislocation can also put the noun at the end: Je l’ai lu, ce livre.',
            isTrue: true,
          },
          {
            id: 'b7',
            text: '“Voire” means “moreover, even”.',
            isTrue: true,
          },
          {
            id: 'b8',
            text: 'Nominalisation turns a verb or adjective into a noun.',
            isTrue: true,
          },
          {
            id: 'b9',
            text: 'The noun for “aboutir” is “aboutissant”.',
            isTrue: false,
            explanation: 'It is l’aboutissement.',
          },
          {
            id: 'b10',
            text: 'Nominalisation is typical of written, dense style.',
            isTrue: true,
          },
          {
            id: 'b11',
            text: 'French can nominalise every infinitive, like Latin.',
            isTrue: false,
            explanation: 'We say le coucher but not le dormir.',
          },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Emphasis challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-emphasis', 'fr-c21-nominalisation'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “C’est à Lyon ___ nous habitons.”',
            options: ['que', 'qui', 'dont', 'où'],
            answer: 'que',
            lesson: 'fr-c21-emphasis',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Ce ___ m’énerve, c’est le bruit.”',
            options: ['qui', 'que', 'dont', 'quoi'],
            answer: 'qui',
            lesson: 'fr-c21-emphasis',
          },
          {
            id: 'c3',
            prompt: 'Which sentence is a dislocation?',
            options: [
              'Cette idée, je la trouve excellente.',
              'C’est cette idée qui me plaît.',
              'Ce qui me plaît, c’est cette idée.',
              'Cette idée me plaît.',
            ],
            answer: 'Cette idée, je la trouve excellente.',
            lesson: 'fr-c21-emphasis',
          },
          {
            id: 'c4',
            prompt: 'Which noun fits: “Les prix ont flambé → la ___ des prix”?',
            options: ['flambée', 'flamber', 'flambant', 'flambé'],
            answer: 'flambée',
            lesson: 'fr-c21-nominalisation',
          },
          {
            id: 'c5',
            prompt: 'Which word means “even”, adding a stronger idea?',
            options: ['voire', 'notamment', 'd’ailleurs', 'en l’occurrence'],
            answer: 'voire',
          },
          {
            id: 'c6',
            prompt: '“Le revirement du gouvernement” means …',
            options: [
              'the government’s U-turn',
              'the government’s return',
              'the government’s review',
              'the government’s revival',
            ],
            answer: 'the government’s U-turn',
          },
          {
            id: 'c7',
            prompt: 'Which form is correct?',
            options: [
              'Ce sont mes amis qui m’ont aidé.',
              'Ce sont mes amis que m’ont aidé.',
              'C’est mes amis dont m’ont aidé.',
              'Ce mes amis qui m’ont aidé.',
            ],
            answer: 'Ce sont mes amis qui m’ont aidé.',
            lesson: 'fr-c21-emphasis',
          },
          {
            id: 'c8',
            prompt: 'Nominalisation is mainly used in …',
            options: ['written, dense style', 'baby talk', 'spoken slang only', 'poetry only'],
            answer: 'written, dense style',
            lesson: 'fr-c21-nominalisation',
          },
        ],
      },
    ),
  ],
};
