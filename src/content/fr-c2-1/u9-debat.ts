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

const U = 'fr-c2-1-debat';

const structure = vocabList(U, 'The parts of an argument', [
  ['la thèse', 'the thesis, the position defended', '🚩'],
  ['l’antithèse', 'the opposing position', '↔️'],
  ['la prémisse', 'the premise', '🧱'],
  ['le contre-exemple', 'the counter-example', '🧪'],
  ['la réfutation', 'the refutation', '❌'],
  ['l’argument d’autorité', 'argument from authority', '🎓'],
  ['le bien-fondé', 'the validity, the soundness', '⚓'],
  ['le plaidoyer', 'the plea, the defence speech', '🗣️'],
  ['le réquisitoire', 'the indictment, the attack speech', '🔨'],
]);

const positions = vocabList(U, 'Taking a position', [
  ['réfuter', 'to refute', '🚫'],
  ['étayer', 'to support, to back up', '🏗️'],
  ['nuancer', 'to qualify, to add nuance', '🎚️'],
  ['contester', 'to challenge, to dispute', '🙅'],
  ['cautionner', 'to back, to lend support to', '🤝'],
  ['dénoncer', 'to denounce', '📣'],
  ['se rallier à', 'to rally to, to come round to', '🧲'],
  ['trancher', 'to settle, to decide', '✂️'],
  ['plaider en faveur de', 'to argue in favour of', '⚖️'],
]);

const debate = vocabList(U, 'In a debate', [
  ['le modérateur', 'the moderator', '🎙️'],
  ['le temps de parole', 'the speaking time', '⏲️'],
  ['la réplique', 'the reply, the rejoinder', '↩️'],
  ['le débat contradictoire', 'a debate with opposing views', '🆚'],
  ['l’orateur', 'the speaker', '🧑‍🏫'],
  ['le point de vue', 'the point of view', '👁️'],
  ['le parti pris', 'the bias, the stance taken', '🧭'],
  ['la tribune', 'the platform, the forum', '🏛️'],
]);

const vocab = [...structure, ...positions, ...debate];

const linkItems: [string, string, string][] = [
  ['tout d’abord', 'enumeration', 'first of all'],
  ['ensuite', 'enumeration', 'then'],
  ['en second lieu', 'enumeration', 'secondly'],
  ['en premier lieu', 'enumeration', 'in the first place'],
  ['cependant', 'opposition', 'however'],
  ['toutefois', 'opposition', 'nevertheless'],
  ['en revanche', 'opposition', 'on the other hand'],
  ['pourtant', 'opposition', 'yet, and yet'],
  ['en conclusion', 'conclusion', 'in conclusion'],
  ['donc', 'conclusion', 'so, therefore'],
  ['pour conclure', 'conclusion', 'to conclude'],
  ['en définitive', 'conclusion', 'in the end'],
];

const quizWords = vocab.filter(
  (v) => !['le bien-fondé', 'le parti pris', 'se rallier à', 'la tribune'].includes(v.de),
);

export const debat: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 9,
    title: 'Débat et argumentation',
    subtitle: 'Defend a thesis, rebut an argument and structure a debate',
    emoji: '🗨️',
    goals: [
      'Name the parts of an argument: thesis, premise, counter-example, refutation',
      'Take a position with étayer, réfuter, nuancer, contester and cautionner',
      'Structure a spoken or written argument with the right connectors',
    ],
    grammar: ['Structuring an argument'],
    vocabFields: ['The parts of an argument', 'Taking a position', 'In a debate'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-structure',
      'flashcards',
      {
        title: 'The parts of an argument',
        description: 'Thesis, premise, counter-example and refutation.',
        tags: ['vocabulary', 'fr-c21-debate'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(structure),
    ),

    activity(
      U,
      'flash-positions',
      'flashcards',
      {
        title: 'Taking a position',
        description: 'Verbs to support, challenge and qualify an idea.',
        tags: ['vocabulary', 'fr-c21-debate'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(positions),
    ),

    activity(
      U,
      'flash-debate',
      'flashcards',
      {
        title: 'In a debate',
        description: 'People, turns and stances in a debate.',
        tags: ['vocabulary', 'fr-c21-debate'],
        difficulty: 2,
        estMinutes: 3,
      },
      flashcards(debate),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the word with its meaning.',
        tags: ['vocabulary', 'fr-c21-debate'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'la thèse',
          'la réfutation',
          'le contre-exemple',
          'étayer',
          'nuancer',
          'trancher',
          'dénoncer',
          'le modérateur',
          'la réplique',
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
        tags: ['listening', 'vocabulary', 'fr-c21-debate'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'la prémisse',
          'le plaidoyer',
          'contester',
          'cautionner',
          'l’orateur',
          'le temps de parole',
        ),
        quizWords,
      ),
    ),

    activity(
      U,
      'memory-words',
      'memory',
      {
        title: 'Debate memory',
        description: 'Match the word with its meaning.',
        tags: ['vocabulary', 'fr-c21-debate'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'l’antithèse',
          'l’argument d’autorité',
          'le réquisitoire',
          'réfuter',
          'plaider en faveur de',
          'le débat contradictoire',
          'le point de vue',
          'la tribune',
        ),
      ),
    ),

    activity(
      U,
      'sort-links',
      'sortit',
      {
        title: 'Enumeration, opposition or conclusion?',
        description: 'Sort the connectors by the job they do in an argument.',
        tags: ['grammar', 'fr-c21-argument'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'What does the connector do?',
        buckets: [
          { id: 'enumeration', label: 'Lists the points', emoji: '🔢' },
          { id: 'opposition', label: 'Opposes or restricts', emoji: '↔️' },
          { id: 'conclusion', label: 'Concludes', emoji: '🏁' },
        ],
        items: linkItems.map(([text, bucket, translation], i) => ({
          id: `l${i + 1}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-links',
      'gapfill',
      {
        title: 'Which connector?',
        description: 'Choose the connector that fits the line of reasoning.',
        tags: ['grammar', 'fr-c21-argument'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'k1',
            text: '___, il faut définir le problème ; ensuite, proposer des solutions.',
            answer: 'D’abord',
            options: ['D’abord', 'Enfin', 'Donc', 'Cependant'],
            translation: 'First, we must define the problem; then, propose solutions.',
            why: { Enfin: 'Enfin closes a list; the list here opens with ensuite following.' },
          },
          {
            id: 'k2',
            text: 'Cette mesure est efficace ; ___, elle coûte cher.',
            answer: 'cependant',
            options: ['cependant', 'donc', 'ensuite', 'en conclusion'],
            translation: 'This measure is effective; however, it is expensive.',
            why: { donc: 'Donc adds a result; here the second idea opposes the first.' },
          },
          {
            id: 'k3',
            text: 'Les prix augmentent ; ___, les salaires restent stables.',
            answer: 'en revanche',
            options: ['en revanche', 'par conséquent', 'de surcroît', 'pour conclure'],
            translation: 'Prices are rising; on the other hand, wages stay stable.',
          },
          {
            id: 'k4',
            text: 'Tous les arguments sont réunis ; ___, la thèse est valide.',
            answer: 'en conclusion',
            options: ['en conclusion', 'tout d’abord', 'toutefois', 'en second lieu'],
            translation: 'All the arguments are in; in conclusion, the thesis is valid.',
          },
          {
            id: 'k5',
            text: 'Il a raison sur ce point. ___, son plan reste irréaliste.',
            answer: 'Toutefois',
            options: ['Toutefois', 'Donc', 'En premier lieu', 'Pour conclure'],
            translation: 'He is right on this point. However, his plan remains unrealistic.',
          },
          {
            id: 'k6',
            text: 'Il pense que le projet est utile ; ___, il le soutient.',
            answer: 'donc',
            options: ['donc', 'cependant', 'toutefois', 'en revanche'],
            translation: 'He thinks the project is useful; so he supports it.',
            why: {
              cependant:
                'Cependant would oppose the two ideas; here the second follows from the first.',
            },
          },
          {
            id: 'k7',
            text: 'En premier lieu, le budget ; ___, le calendrier.',
            answer: 'en second lieu',
            options: ['en second lieu', 'pour conclure', 'pourtant', 'donc'],
            translation: 'In the first place, the budget; secondly, the schedule.',
          },
          {
            id: 'k8',
            text: 'Je comprends votre point de vue ; ___, je ne le partage pas.',
            answer: 'néanmoins',
            options: ['néanmoins', 'donc', 'ensuite', 'pour conclure'],
            translation: 'I understand your point of view; nevertheless, I do not share it.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-positions',
      'gapfill',
      {
        title: 'Which verb?',
        description: 'Choose the verb that takes the right position in the argument.',
        tags: ['vocabulary', 'fr-c21-debate'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'v1',
            text: 'Elle a ___ cette thèse en citant trois études.',
            answer: 'étayé',
            options: ['étayé', 'réfuté', 'dénoncé', 'tranché'],
            translation: 'She backed up this thesis by citing three studies.',
          },
          {
            id: 'v2',
            text: 'Le juge devra ___ entre les deux versions.',
            answer: 'trancher',
            options: ['trancher', 'étayer', 'nuancer', 'dénoncer'],
            translation: 'The judge will have to decide between the two versions.',
          },
          {
            id: 'v3',
            text: 'Il faut ___ votre propos : tout n’est pas si simple.',
            answer: 'nuancer',
            options: ['nuancer', 'trancher', 'cautionner', 'étayer'],
            translation: 'Your remark needs qualifying: not everything is so simple.',
          },
          {
            id: 'v4',
            text: 'Les syndicats ___ ces pratiques dans un communiqué.',
            answer: 'dénoncent',
            options: ['dénoncent', 'étayent', 'nuancent', 'tranchent'],
            translation: 'The unions denounce these practices in a statement.',
          },
          {
            id: 'v5',
            text: 'Je refuse de ___ une décision injuste.',
            answer: 'cautionner',
            options: ['cautionner', 'trancher', 'nuancer', 'étayer'],
            translation: 'I refuse to back an unfair decision.',
          },
          {
            id: 'v6',
            text: 'Après le débat, beaucoup se sont ___ à son avis.',
            answer: 'ralliés',
            options: ['ralliés', 'tranchés', 'étayés', 'nuancés'],
            translation: 'After the debate, many came round to his opinion.',
          },
          {
            id: 'v7',
            text: 'Il ___ en faveur d’une réforme fiscale.',
            answer: 'plaide',
            options: ['plaide', 'tranche', 'conteste', 'nuance'],
            translation: 'He argues in favour of a tax reform.',
          },
          {
            id: 'v8',
            text: 'L’opposition ___ la légitimité du vote et demande un nouveau scrutin.',
            answer: 'conteste',
            options: ['conteste', 'étaye', 'cautionne', 'tranche'],
            translation:
              'The opposition disputes the legitimacy of the vote and asks for a new ballot.',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the verbs',
        description: 'Unscramble, type and write down verbs of argument.',
        tags: ['spelling', 'fr-c21-debate'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(vocab, 'réfuter', 'étayer'), 'unscramble').items,
          ...spell(byDe(vocab, 'nuancer', 'contester'), 'type').items,
          ...spell(byDe(vocab, 'dénoncer'), 'dictation').items,
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put the sentences of an argument in order.',
        tags: ['grammar', 'fr-c21-argument'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'First of all, we must define the thesis.',
            words: ['Tout', 'd’abord,', 'il', 'faut', 'définir', 'la', 'thèse.'],
          },
          {
            id: 's2',
            translation: 'This argument is backed up by three examples.',
            words: ['Cet', 'argument', 'est', 'étayé', 'par', 'trois', 'exemples.'],
          },
          {
            id: 's3',
            translation: 'Admittedly this plan is ambitious; however, it remains realistic.',
            words: [
              'Certes,',
              'ce',
              'plan',
              'est',
              'ambitieux ;',
              'toutefois,',
              'il',
              'reste',
              'réaliste.',
            ],
          },
          {
            id: 's4',
            translation: 'The moderator gives the floor to each speaker.',
            words: ['Le', 'modérateur', 'donne', 'la', 'parole', 'à', 'chaque', 'orateur.'],
          },
          {
            id: 's5',
            translation: 'A single counter-example is enough to refute this thesis.',
            words: ['Un', 'seul', 'contre-exemple', 'suffit', 'à', 'réfuter', 'cette', 'thèse.'],
          },
          {
            id: 's6',
            translation: 'In conclusion, I argue in favour of this reform.',
            words: ['En', 'conclusion,', 'je', 'plaide', 'en', 'faveur', 'de', 'cette', 'réforme.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Take part in a debate',
        description: 'Open a debate, rebut an argument and qualify your own.',
        tags: ['communication', 'fr-c21-debate'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'moderator',
            title: 'Open the debate',
            emoji: '🎙️',
            setting: 'You moderate a debate on remote work.',
            turns: [
              {
                kind: 'npc',
                who: 'Un participant',
                text: 'Pouvez-vous présenter le sujet ?',
                translation: 'Can you introduce the topic?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Tout d’abord, je rappelle la question : le télétravail doit-il être généralisé ?',
                    correct: true,
                  },
                  {
                    text: 'En conclusion, je rappelle la question : le télétravail doit-il être généralisé ?',
                    correct: false,
                    feedback: 'En conclusion ends an argument; to open, say tout d’abord.',
                  },
                  {
                    text: 'Donc, je rappelle la question : le télétravail doit-il être généralisé ?',
                    correct: false,
                    feedback: 'Donc draws a conclusion from something said before.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Un participant',
                text: 'Combien de temps ai-je pour répondre ?',
                translation: 'How much time do I have to reply?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Chaque orateur a trois minutes de temps de parole.', correct: true },
                  {
                    text: 'Chaque orateur a trois minutes de parti pris.',
                    correct: false,
                    feedback: 'Parti pris means bias; the speaking time is le temps de parole.',
                  },
                ],
              },
            ],
          },
          {
            id: 'rebut',
            title: 'Rebut an argument',
            emoji: '🧪',
            setting: 'An opponent claims that all remote workers are less productive.',
            turns: [
              {
                kind: 'npc',
                who: 'Monsieur Vidal',
                text: 'Tous les télétravailleurs sont moins productifs.',
                translation: 'All remote workers are less productive.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Un seul contre-exemple suffit à réfuter cette thèse : notre équipe produit plus.',
                    correct: true,
                  },
                  {
                    text: 'Un seul contre-exemple suffit à étayer cette thèse : notre équipe produit plus.',
                    correct: false,
                    feedback: 'A counter-example refutes a thesis; étayer would support it.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Monsieur Vidal',
                text: 'Un seul cas ne prouve rien.',
                translation: 'One case proves nothing.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Certes ; toutefois, une thèse universelle tombe dès qu’un cas la contredit.',
                    correct: true,
                  },
                  {
                    text: 'Donc ; toutefois, une thèse universelle tombe dès qu’un cas la contredit.',
                    correct: false,
                    feedback: 'To grant a point before objecting, start with certes.',
                  },
                ],
              },
            ],
          },
          {
            id: 'nuance',
            title: 'Qualify your own claim',
            emoji: '🎚️',
            setting: 'Someone points out that your claim is too sweeping.',
            turns: [
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Vous généralisez beaucoup.',
                translation: 'You are generalising a lot.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Vous avez raison : je dois nuancer mon propos.', correct: true },
                  {
                    text: 'Vous avez raison : je dois cautionner mon propos.',
                    correct: false,
                    feedback: 'Cautionner means to back; to qualify a claim, say nuancer.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Et que concluez-vous ?',
                translation: 'And what do you conclude?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Pour conclure, je plaide en faveur d’un télétravail partiel.',
                    correct: true,
                  },
                  {
                    text: 'Pour conclure, je dénonce en faveur d’un télétravail partiel.',
                    correct: false,
                    feedback: 'Dénoncer means to denounce; “en faveur de” goes with plaider.',
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
        title: 'Debate blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-argument'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'The “thèse” is the position that someone defends.', isTrue: true },
          { id: 'b2', text: 'A counter-example can refute a thesis.', isTrue: true },
          {
            id: 'b3',
            text: '“Étayer” means to weaken an argument.',
            isTrue: false,
            explanation: 'Étayer means to support, to back up.',
          },
          { id: 'b4', text: '“Réfuter” means to prove something wrong.', isTrue: true },
          { id: 'b5', text: '“Cependant” introduces an opposition.', isTrue: true },
          {
            id: 'b6',
            text: '“En conclusion” opens a list of arguments.',
            isTrue: false,
            explanation: 'It closes an argument.',
          },
          {
            id: 'b7',
            text: 'An argument from authority relies on the standing of its author.',
            isTrue: true,
          },
          { id: 'b8', text: '“Cautionner” means to lend support to.', isTrue: true },
          {
            id: 'b9',
            text: '“Trancher” means to hesitate.',
            isTrue: false,
            explanation: 'It means to settle, to decide.',
          },
          { id: 'b10', text: 'The “modérateur” gives the floor to the speakers.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Debate challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-debate', 'fr-c21-argument'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which connector introduces a concession or restriction?',
            options: ['toutefois', 'tout d’abord', 'en conclusion', 'donc'],
            answer: 'toutefois',
            lesson: 'fr-c21-argument',
          },
          {
            id: 'c2',
            prompt: 'Which connector closes an argument?',
            options: ['en conclusion', 'tout d’abord', 'cependant', 'en second lieu'],
            answer: 'en conclusion',
            lesson: 'fr-c21-argument',
          },
          {
            id: 'c3',
            prompt: 'What does “la réfutation” mean?',
            options: [
              'disproving a claim',
              'proving a claim',
              'repeating a claim',
              'ending a debate',
            ],
            answer: 'disproving a claim',
          },
          {
            id: 'c4',
            prompt: 'Which verb means “to qualify a statement”?',
            options: ['nuancer', 'trancher', 'cautionner', 'dénoncer'],
            answer: 'nuancer',
          },
          {
            id: 'c5',
            prompt: 'Which word means “the opposing position”?',
            options: ['l’antithèse', 'la prémisse', 'le plaidoyer', 'la tribune'],
            answer: 'l’antithèse',
          },
          {
            id: 'c6',
            prompt: 'You list your points. After “en premier lieu” comes …',
            options: ['en second lieu', 'en conclusion', 'pourtant', 'donc'],
            answer: 'en second lieu',
            lesson: 'fr-c21-argument',
          },
          {
            id: 'c7',
            prompt: 'Which verb means “to argue in favour of”?',
            options: ['plaider en faveur de', 'réfuter', 'contester', 'dénoncer'],
            answer: 'plaider en faveur de',
          },
          {
            id: 'c8',
            prompt: 'Who gives the floor to each speaker in a debate?',
            options: ['le modérateur', 'l’orateur', 'le réquisitoire', 'la prémisse'],
            answer: 'le modérateur',
          },
        ],
      },
    ),
  ],
};
