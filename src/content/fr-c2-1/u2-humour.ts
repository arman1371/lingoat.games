import { activity, byDe, flashcards, listen, memory, quizDeEn, unit, vocabList } from '../builders';
import type { UnitContent } from './types';

const U = 'fr-c2-1-humour';

const humour = vocabList(U, 'Humour and irony', [
  ['l’ironie', 'irony: saying the opposite of what you mean', '🙃'],
  ['le sarcasme', 'sarcasm: a bitter, cutting remark', '🗡️'],
  ['la raillerie', 'teasing, light mockery', '😏'],
  ['la dérision', 'derision, mocking contempt', '🤨'],
  ['l’autodérision', 'self-mockery', '🪞'],
  ['la satire', 'satire', '📰'],
  ['la parodie', 'parody: an imitation made to amuse', '🎭'],
  ['la caricature', 'caricature', '🖍️'],
  ['l’humour noir', 'dark humour', '🖤'],
  ['le second degré', 'tongue in cheek, not to be taken literally', '🎚️'],
  ['un pince-sans-rire', 'a deadpan person', '😐'],
  ['le quiproquo', 'a mix-up between two people', '🔀'],
  ['le canular', 'hoax, prank', '🃏'],
  ['la gaffe', 'blunder, faux pas', '🙊'],
  ['loufoque', 'zany, wacky', '🤪'],
  ['cocasse', 'comical in a strange way', '🤡'],
  ['désopilant', 'hilarious', '😂'],
  ['mordant', 'biting, sharp-tongued', '🦷'],
  ['grinçant', 'grating, bitterly funny', '🚪'],
  ['railler', 'to mock', '🫢'],
  ['persifler', 'to poke fun at, to tease cruelly', '😼'],
  ['tourner en dérision', 'to hold up to ridicule', '🎪'],
]);

const paronyms = vocabList(U, 'Paronyms', [
  ['une effraction', 'a break-in, forced entry', '🔨'],
  ['une infraction', 'an offence, a breach of a rule', '🚔'],
  ['éminent', 'distinguished, eminent', '🎓'],
  ['imminent', 'about to happen', '⏳'],
  ['la conjoncture', 'the economic situation', '📉'],
  ['une conjecture', 'a guess, speculation', '🤔'],
  ['la collusion', 'a secret agreement to cheat', '🤝'],
  ['la collision', 'a crash, an impact', '💥'],
  ['prodigue', 'lavish, wasteful with money', '💸'],
  ['un prodige', 'a wonder, a child prodigy', '🌟'],
  ['un différend', 'a dispute, a disagreement', '⚖️'],
]);

const vocab = [...humour, ...paronyms];

const kinds = byDe(
  humour,
  'l’ironie',
  'le sarcasme',
  'la parodie',
  'la caricature',
  'l’humour noir',
  'le canular',
  'le quiproquo',
  'la gaffe',
);

const irony: [string, string, string][] = [
  // [context and sentence, bucket, English]
  [
    'Il pleut depuis trois jours. — « Quel temps magnifique ! »',
    'ironic',
    'It has rained for three days: “What wonderful weather!”',
  ],
  [
    'Le train a deux heures de retard. — « Quelle ponctualité remarquable ! »',
    'ironic',
    'The train is two hours late: “What remarkable punctuality!”',
  ],
  [
    'Tu as renversé ton café sur mon clavier. — « Bravo, quel talent ! »',
    'ironic',
    'You spilled coffee on my keyboard: “Bravo, what talent!”',
  ],
  [
    'Le plat est complètement brûlé. — « C’est délicieux, mes compliments au chef. »',
    'ironic',
    'The dish is burnt black: “Delicious, my compliments to the chef.”',
  ],
  [
    'Il a oublié mon anniversaire pour la troisième fois. — « Tu es vraiment attentionné. »',
    'ironic',
    'He forgot my birthday a third time: “You are so thoughtful.”',
  ],
  [
    'Elle arrive en retard à toutes les réunions. — « Comme toujours, tu es la première ! »',
    'ironic',
    'She is late to every meeting: “As always, you are the first!”',
  ],
  [
    'Le soleil brille depuis ce matin. — « Quel temps magnifique ! »',
    'literal',
    'The sun has shone since morning: “What wonderful weather!”',
  ],
  [
    'Le train est arrivé à l’heure pile. — « Quelle ponctualité remarquable ! »',
    'literal',
    'The train arrived on the dot: “What remarkable punctuality!”',
  ],
  [
    'Tu as réparé mon ordinateur en dix minutes. — « Bravo, quel talent ! »',
    'literal',
    'You fixed my computer in ten minutes: “Bravo, what talent!”',
  ],
  [
    'Le plat est parfaitement cuit. — « C’est délicieux, mes compliments au chef. »',
    'literal',
    'The dish is perfectly cooked: “Delicious, my compliments to the chef.”',
  ],
  [
    'Il m’a envoyé des fleurs pour mon anniversaire. — « Tu es vraiment attentionné. »',
    'literal',
    'He sent me flowers for my birthday: “You are so thoughtful.”',
  ],
  [
    'Elle arrive toujours à l’heure. — « Comme toujours, tu es la première ! »',
    'literal',
    'She is always on time: “As always, you are the first!”',
  ],
];

export const humourUnit: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 2,
    title: 'Humour et ironie',
    subtitle: 'Catch irony, puns and the words that describe what makes people laugh',
    emoji: '🎭',
    goals: [
      'Tell a literal remark from an ironic one',
      'Name the kinds of humour: parody, satire, dark humour, hoax',
      'Tell homophones and paronyms apart, the raw material of puns',
    ],
    grammar: ['Homophones and paronyms'],
    vocabFields: ['Humour and irony', 'Paronyms'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-humour',
      'flashcards',
      {
        title: 'Words for humour and irony',
        description: 'Meet the vocabulary of jokes, mockery and irony.',
        tags: ['vocabulary', 'fr-c21-humour'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(humour),
    ),

    activity(
      U,
      'flash-paronyms',
      'flashcards',
      {
        title: 'Words that look alike',
        description: 'Pairs of words that are easy to mix up: effraction and infraction, and more.',
        tags: ['vocabulary', 'fr-c21-wordplay'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(paronyms),
    ),

    activity(
      U,
      'quiz-kinds',
      'quiz',
      {
        title: 'What kind of humour?',
        description: 'Match each word with what it means.',
        tags: ['vocabulary', 'fr-c21-humour'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(kinds, kinds, 4),
    ),

    activity(
      U,
      'sort-irony',
      'sortit',
      {
        title: 'Literal or ironic?',
        description: 'Read the situation and the remark: does the speaker mean it?',
        tags: ['communication', 'fr-c21-humour'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Does the speaker mean what they say?',
        buckets: [
          { id: 'literal', label: 'Meant literally', emoji: '🙂' },
          { id: 'ironic', label: 'Ironic', emoji: '🙃' },
        ],
        items: irony.map(([text, bucket, translation], i) => ({
          id: `i${i + 1}`,
          text,
          bucket,
          speak: text.split(' — ')[1]!.replace(/[«»]/g, '').trim(),
          translation,
        })),
      },
    ),

    activity(
      U,
      'listen-humour',
      'listen',
      {
        title: 'Which word did you hear?',
        description: 'Listen and pick the meaning.',
        tags: ['listening', 'vocabulary', 'fr-c21-humour'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(kinds, kinds),
    ),

    activity(
      U,
      'memory-humour',
      'memory',
      {
        title: 'Humour memory',
        description: 'Match each word with its meaning.',
        tags: ['vocabulary', 'fr-c21-humour'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          humour,
          'l’ironie',
          'le sarcasme',
          'le canular',
          'le quiproquo',
          'la parodie',
          'la gaffe',
          'l’humour noir',
          'un pince-sans-rire',
        ),
      ),
    ),

    activity(
      U,
      'gap-paronyms',
      'gapfill',
      {
        title: 'Which of the two?',
        description: 'Choose the word that fits. Several look nearly alike.',
        tags: ['grammar', 'vocabulary', 'fr-c21-wordplay'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'p1',
            text: 'Le cambrioleur a été arrêté pour ___ dans une villa.',
            answer: 'effraction',
            options: ['effraction', 'infraction', 'collision', 'conjecture'],
            translation: 'The burglar was arrested for breaking into a villa.',
            why: {
              infraction: 'An “infraction” is any offence; “effraction” is forcing an entry.',
            },
          },
          {
            id: 'p2',
            text: 'Conduire sans permis est une ___ au code de la route.',
            answer: 'infraction',
            options: ['infraction', 'effraction', 'collusion', 'conjoncture'],
            translation: 'Driving without a licence is an offence against the highway code.',
            why: { effraction: '“Effraction” means a forced entry, not a breach of a rule.' },
          },
          {
            id: 'p3',
            text: 'Le professeur ___ a reçu un prix international.',
            answer: 'éminent',
            options: ['éminent', 'imminent', 'prodigue', 'différent'],
            translation: 'The distinguished professor received an international prize.',
            why: { imminent: '“Imminent” means about to happen, not distinguished.' },
          },
          {
            id: 'p4',
            text: 'Les sondages annoncent une chute ___ du gouvernement.',
            answer: 'imminente',
            options: ['imminente', 'éminente', 'prodigue', 'différente'],
            translation: 'The polls announce an imminent fall of the government.',
            why: { éminente: '“Éminent” describes a person of high standing, not an event.' },
          },
          {
            id: 'p5',
            text: 'Dans la ___ actuelle, les entreprises hésitent à embaucher.',
            answer: 'conjoncture',
            options: ['conjoncture', 'conjecture', 'collusion', 'collision'],
            translation: 'In the current economic situation, firms hesitate to hire.',
            why: {
              conjecture: 'A “conjecture” is a guess; the economic situation is the “conjoncture”.',
            },
          },
          {
            id: 'p6',
            text: 'Ce ne sont que des ___ : aucun fait ne les confirme.',
            answer: 'conjectures',
            options: ['conjectures', 'conjonctures', 'collisions', 'infractions'],
            translation: 'These are only guesses: no fact confirms them.',
            why: { conjonctures: '“Conjonctures” would be economic situations, not guesses.' },
          },
          {
            id: 'p7',
            text: 'Les deux entreprises ont été condamnées pour ___ : elles fixaient les prix ensemble.',
            answer: 'collusion',
            options: ['collusion', 'collision', 'effraction', 'conjoncture'],
            translation: 'Both firms were convicted of collusion: they set prices together.',
            why: { collision: 'A “collision” is a physical crash; “collusion” is a secret deal.' },
          },
          {
            id: 'p8',
            text: 'La ___ entre les deux voitures a fait trois blessés.',
            answer: 'collision',
            options: ['collision', 'collusion', 'infraction', 'conjecture'],
            translation: 'The crash between the two cars left three people injured.',
            why: { collusion: '“Collusion” is a secret agreement, not a crash.' },
          },
        ],
      },
    ),

    activity(
      U,
      'quiz-paronyms',
      'quiz',
      {
        title: 'Which word means …?',
        description: 'Pick the French word for the meaning.',
        tags: ['grammar', 'vocabulary', 'fr-c21-wordplay'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        questions: [
          {
            id: 'q1',
            prompt: 'about to happen',
            options: ['imminent', 'éminent', 'prodigue', 'différend'],
            answer: 'imminent',
          },
          {
            id: 'q2',
            prompt: 'a guess, speculation',
            options: ['une conjecture', 'la conjoncture', 'la collusion', 'une infraction'],
            answer: 'une conjecture',
          },
          {
            id: 'q3',
            prompt: 'a dispute between two parties',
            options: ['un différend', 'un prodige', 'une effraction', 'la collision'],
            answer: 'un différend',
          },
          {
            id: 'q4',
            prompt: 'wasteful with money',
            options: ['prodigue', 'éminent', 'imminent', 'mordant'],
            answer: 'prodigue',
          },
          {
            id: 'q5',
            prompt: 'a wonder, a child who is astonishingly gifted',
            options: ['un prodige', 'un différend', 'une conjecture', 'la collusion'],
            answer: 'un prodige',
          },
          {
            id: 'q6',
            prompt: 'a break-in',
            options: ['une effraction', 'une infraction', 'la dérision', 'la collision'],
            answer: 'une effraction',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the tricky ones',
        description: 'Unscramble, type and write down words that are easy to confuse.',
        tags: ['spelling', 'fr-c21-humour'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'sp-canular',
            mode: 'unscramble',
            answer: 'canular',
            hint: 'hoax, prank',
            emoji: '🃏',
            speak: 'le canular',
          },
          {
            id: 'sp-quiproquo',
            mode: 'type',
            answer: 'quiproquo',
            hint: 'a mix-up between two people',
            emoji: '🔀',
            speak: 'le quiproquo',
          },
          {
            id: 'sp-eminent',
            mode: 'type',
            answer: 'éminent',
            hint: 'distinguished, eminent',
            emoji: '🎓',
            speak: 'éminent',
          },
          {
            id: 'sp-imminent',
            mode: 'dictation',
            answer: 'imminent',
            hint: 'Type what you hear (about to happen)',
            emoji: '⏳',
            speak: 'imminent',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put the words in order: jokes, blunders and misunderstandings.',
        tags: ['communication', 'fr-c21-humour'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'Do not take it literally: it is tongue in cheek.',
            words: [
              'Ne',
              'le',
              'prends',
              'pas',
              'au',
              'pied',
              'de',
              'la',
              'lettre :',
              'c’est',
              'du',
              'second',
              'degré.',
            ],
          },
          {
            id: 's2',
            translation: 'She said it in a deadpan tone.',
            words: ['Elle', 'l’a', 'dit', 'd’un', 'ton', 'pince-sans-rire.'],
          },
          {
            id: 's3',
            translation: 'He made a blunder in front of the whole team.',
            words: ['Il', 'a', 'fait', 'une', 'gaffe', 'devant', 'toute', 'l’équipe.'],
          },
          {
            id: 's4',
            translation: 'The comedian holds the politicians up to ridicule.',
            words: ['L’humoriste', 'tourne', 'les', 'politiciens', 'en', 'dérision.'],
          },
          {
            id: 's5',
            translation: 'It was a mix-up: we were talking about two different people.',
            words: [
              'C’était',
              'un',
              'quiproquo :',
              'nous',
              'parlions',
              'de',
              'deux',
              'personnes',
              'différentes.',
            ],
          },
          {
            id: 's6',
            translation: 'Her self-mockery disarms everyone.',
            words: ['Son', 'autodérision', 'désarme', 'tout', 'le', 'monde.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Irony, blunders and mix-ups',
        description: 'Three scenes: a sarcastic colleague, a blunder and a misunderstanding.',
        tags: ['communication', 'fr-c21-humour'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'irony',
            title: 'A sarcastic colleague',
            emoji: '🙃',
            setting: 'It is Friday, 5:30 p.m. Lucas has just read an email from the boss.',
            turns: [
              {
                kind: 'npc',
                who: 'Lucas',
                text: 'Super, une réunion à 18 heures un vendredi ! J’adore ça.',
                translation: 'Great, a meeting at 6 p.m. on a Friday! I love that.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Tu es ironique, non ? Moi non plus, je ne suis pas ravi.',
                    correct: true,
                  },
                  {
                    text: 'Ah bon, tu aimes les réunions tardives ? Je le dirai au chef.',
                    correct: false,
                    feedback: 'Lucas is being ironic: he means the opposite of what he says.',
                  },
                  {
                    text: 'Tant mieux, je vais te prêter mes dossiers alors.',
                    correct: false,
                    feedback: 'That takes his words literally, and he does not mean them.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Lucas',
                text: 'On pourrait demander à la décaler ?',
                translation: 'Could we ask to move it?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Bonne idée, je lui écris tout de suite.', correct: true },
                  {
                    text: 'Surtout pas, c’est une gaffe monumentale !',
                    correct: false,
                    feedback: 'Asking politely is not a blunder; the reply does not fit.',
                  },
                ],
              },
            ],
          },
          {
            id: 'blunder',
            title: 'A blunder at the office',
            emoji: '🙊',
            setting: 'Your friend Inès tells you what happened this morning.',
            turns: [
              {
                kind: 'npc',
                who: 'Inès',
                text: 'J’ai appelé la patronne par le prénom de son ex-mari. Quelle gaffe !',
                translation: 'I called the boss by her ex-husband’s first name. What a blunder!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Aïe ! Elle l’a pris avec humour, au moins ?', correct: true },
                  {
                    text: 'Bravo, quelle intelligence ! Tu devrais recommencer demain.',
                    correct: false,
                    feedback: 'That is sarcasm, and it would rub salt in the wound.',
                  },
                  {
                    text: 'C’est un canular, n’est-ce pas ?',
                    correct: false,
                    feedback:
                      'A hoax is a prank; Inès is telling you something that really happened.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Elle a ri, heureusement. Elle a beaucoup d’autodérision.',
                translation: 'She laughed, luckily. She can laugh at herself.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Tant mieux ! Ça aurait pu mal tourner.', correct: true },
                  {
                    text: 'Quel humour noir, cette femme !',
                    correct: false,
                    feedback: 'Dark humour is about grim subjects, which is not the case here.',
                  },
                ],
              },
            ],
          },
          {
            id: 'mixup',
            title: 'A mix-up',
            emoji: '🔀',
            setting: 'You and Karim have each understood something different.',
            turns: [
              {
                kind: 'npc',
                who: 'Karim',
                text: 'Tu as réservé la salle pour mardi ?',
                translation: 'Did you book the room for Tuesday?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Mardi ? J’avais compris jeudi. C’est un vrai quiproquo !',
                    correct: true,
                  },
                  {
                    text: 'Mardi ? Quelle parodie !',
                    correct: false,
                    feedback: 'A parody is an imitation made to amuse; it does not fit here.',
                  },
                  {
                    text: 'Mardi ? Quel beau canular !',
                    correct: false,
                    feedback:
                      'A hoax is a deliberate prank, but this is an honest misunderstanding.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Karim',
                text: 'On vérifie le mail pour trancher ?',
                translation: 'Shall we check the email to settle it?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, ça évitera un différend.', correct: true },
                  {
                    text: 'Oui, ça évitera une effraction.',
                    correct: false,
                    feedback:
                      '“Effraction” is a break-in; the word you need is “différend”, a dispute.',
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
        title: 'Humour blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'fr-c21-humour', 'fr-c21-wordplay'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'Irony means saying the opposite of what you mean.', isTrue: true },
          {
            id: 'b2',
            text: '“Un canular” is a serious official report.',
            isTrue: false,
            explanation: 'It is a hoax or a prank.',
          },
          {
            id: 'b3',
            text: '“Éminent” and “imminent” mean the same thing.',
            isTrue: false,
            explanation: '“Éminent” = distinguished, “imminent” = about to happen.',
          },
          { id: 'b4', text: '“Une gaffe” is a blunder.', isTrue: true },
          { id: 'b5', text: '“Mer”, “mère” and “maire” are homophones.', isTrue: true },
          {
            id: 'b6',
            text: '“La conjoncture” means a guess.',
            isTrue: false,
            explanation: 'A guess is “une conjecture”; “la conjoncture” is the economic situation.',
          },
          { id: 'b7', text: 'A “pince-sans-rire” jokes with a straight face.', isTrue: true },
          {
            id: 'b8',
            text: '“Une effraction” is the same as “une infraction”.',
            isTrue: false,
            explanation: 'An effraction is a forced entry; an infraction is any offence.',
          },
          { id: 'b9', text: '“Se moquer de soi” is “l’autodérision”.', isTrue: true },
          { id: 'b10', text: '“Un quiproquo” is a misunderstanding.', isTrue: true },
          {
            id: 'b11',
            text: '“Collision” and “collusion” both mean a car crash.',
            isTrue: false,
            explanation: '“Collusion” is a secret agreement.',
          },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-humour', 'fr-c21-wordplay'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'It pours, and you say “Quel temps magnifique !” You are being …',
            options: ['ironic', 'literal', 'sincere', 'silent'],
            answer: 'ironic',
          },
          {
            id: 'c2',
            prompt: 'A film imitating another one to make people laugh is a …',
            options: ['parodie', 'effraction', 'gaffe', 'conjoncture'],
            answer: 'parodie',
          },
          {
            id: 'c3',
            prompt: 'Which word describes a hilarious show?',
            options: ['désopilant', 'prodigue', 'imminent', 'mordant'],
            answer: 'désopilant',
          },
          {
            id: 'c4',
            prompt: 'Which word is used for a mix-up between two people?',
            options: ['un quiproquo', 'un canular', 'un prodige', 'une conjecture'],
            answer: 'un quiproquo',
          },
          {
            id: 'c5',
            prompt: 'Your boss is about to resign. The resignation is …',
            options: ['imminente', 'éminente', 'prodigue', 'loufoque'],
            answer: 'imminente',
            lesson: 'fr-c21-wordplay',
          },
          {
            id: 'c6',
            prompt: 'Two neighbours quarrel over a hedge. They have a …',
            options: ['différend', 'prodige', 'effraction', 'collision'],
            answer: 'différend',
            lesson: 'fr-c21-wordplay',
          },
          {
            id: 'c7',
            prompt: 'Which pair are paronyms (nearly alike, different meaning)?',
            options: ['conjecture / conjoncture', 'mer / mère', 'vert / verre', 'sang / cent'],
            answer: 'conjecture / conjoncture',
            lesson: 'fr-c21-wordplay',
          },
          {
            id: 'c8',
            prompt: 'Which pair are homophones (same sound, different spelling)?',
            options: [
              'mer / mère',
              'effraction / infraction',
              'éminent / imminent',
              'collision / collusion',
            ],
            answer: 'mer / mère',
            lesson: 'fr-c21-wordplay',
          },
        ],
      },
    ),
  ],
};
