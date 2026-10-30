import {
  activity,
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  quizEmoji,
  spell,
  unit,
  vocabList,
} from '../builders';
import type { UnitContent } from './types';

const U = 'fr-a1-1-bonjour';

const vocab = vocabList(U, 'Greetings', [
  ['Bonjour', 'hello / good morning / good day', '👋'],
  ['Bonsoir', 'good evening', '🌆'],
  ['Salut', 'hi / bye (informal)', '🙋'],
  ['Coucou', 'hi (very informal)', '🐣'],
  ['Allô', 'hello (on the phone)', '📞'],
  ['Bonne nuit', 'good night', '🌙'],
  ['Au revoir', 'goodbye', '🤝'],
  ['À bientôt', 'see you soon', '🔜'],
  ['À tout à l’heure', 'see you later', '🕓'],
  ['À demain', 'see you tomorrow', '📆'],
  ['Bonne journée', 'have a nice day', '☀️'],
  ['Bonne soirée', 'have a nice evening', '🌃'],
  ['Ça va ?', 'How are you? / Are you OK?', '💬'],
  ['Comment vas-tu ?', 'How are you? (informal)', '🗨️'],
  ['Comment allez-vous ?', 'How are you? (formal)', '🎩'],
  ['Et toi ?', 'And you? (informal)', '👉'],
  ['Et vous ?', 'And you? (formal)', '🤵'],
  ['Merci', 'thank you', '🙏'],
  ['Merci beaucoup', 'thank you very much', '🎁'],
  ['De rien', 'you’re welcome', '😊'],
  ['S’il vous plaît', 'please (formal)', '🤲'],
  ['S’il te plaît', 'please (informal)', '🫶'],
  ['Excusez-moi', 'excuse me (formal)', '🙇'],
  ['Pardon', 'sorry / excuse me', '😬'],
  ['Oui', 'yes', '✅'],
  ['Non', 'no', '❌'],
  ['Monsieur', 'Mr. / sir', '👨‍💼'],
  ['Madame', 'Mrs. / madam', '👩‍💼'],
  ['Très bien', 'very well', '🤩'],
  ['Bien', 'well / fine', '👍'],
  ['Pas mal', 'not bad', '🙂'],
  ['Comme ci, comme ça', 'so-so', '😐'],
  ['Mal', 'bad', '👎'],
  ['tu', 'you (informal, one person)', '🧑‍🤝‍🧑'],
  ['vous', 'you (formal, or several people)', '🎩'],
]);

const hellos = byDe(vocab, 'Bonjour', 'Bonsoir', 'Salut', 'Coucou', 'Allô');
const byes = byDe(
  vocab,
  'Au revoir',
  'À bientôt',
  'À tout à l’heure',
  'À demain',
  'Bonne nuit',
  'Bonne journée',
);
const feelings = byDe(vocab, 'Très bien', 'Bien', 'Pas mal', 'Comme ci, comme ça', 'Mal');
const polite = byDe(vocab, 'Merci', 'Bonjour', 'Pardon');
const manners = byDe(
  vocab,
  'Merci',
  'Merci beaucoup',
  'De rien',
  'S’il vous plaît',
  'S’il te plaît',
  'Excusez-moi',
  'Pardon',
  'Oui',
  'Non',
  'Monsieur',
  'Madame',
  'Et toi ?',
);

export const bonjour: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-a1-1',
    order: 1,
    title: 'Bonjour !',
    subtitle: 'Greet people, say goodbye and ask how they are',
    emoji: '👋',
    goals: [
      'Greet people and say goodbye',
      'Ask and answer “How are you?”',
      'Choose between tu and vous',
    ],
    grammar: ['tu or vous', 'Questions with Comment'],
    vocabFields: ['Greetings', 'Polite phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash',
      'flashcards',
      {
        title: 'Greeting cards',
        description: 'Meet the most important greetings and goodbyes.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(vocab.slice(0, 12)),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match each French phrase with its English meaning.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn([...hellos, ...byes.slice(0, 4)], vocab),
    ),

    activity(
      U,
      'sort-hello-bye',
      'sortit',
      {
        title: 'Hello or goodbye?',
        description: 'Sort the phrases: do you say them when you arrive or when you leave?',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        instruction: 'Is it a hello or a goodbye?',
        buckets: [
          { id: 'hello', label: 'Hello', emoji: '👋' },
          { id: 'bye', label: 'Goodbye', emoji: '🚪' },
        ],
        items: [
          // "Salut" works both ways, so it is a flashcard and quiz word but not a sorting card
          ...hellos
            .filter((v) => v.de !== 'Salut')
            .map((v) => ({
              id: v.id,
              text: v.de,
              bucket: 'hello',
              speak: v.de,
              translation: v.en,
            })),
          ...byes.map((v) => ({
            id: v.id,
            text: v.de,
            bucket: 'bye',
            speak: v.de,
            translation: v.en,
          })),
        ],
      },
    ),

    activity(
      U,
      'listen-greetings',
      'listen',
      {
        title: 'Which greeting?',
        description: 'Listen to the greeting and pick its meaning.',
        tags: ['listening', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      listen([...hellos.slice(0, 4), ...byes.slice(0, 4)], vocab),
    ),

    activity(
      U,
      'memory-greetings',
      'memory',
      {
        title: 'Greeting memory',
        description: 'Find the pairs: French greeting and English meaning.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      memory([...hellos.slice(0, 3), ...byes.slice(0, 3)]),
    ),

    activity(
      U,
      'flash-polite',
      'flashcards',
      {
        title: 'Polite words',
        description: 'Thank people, say please and sorry, and meet Monsieur and Madame.',
        tags: ['vocabulary', 'greetings'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(manners),
    ),

    activity(
      U,
      'time-of-day',
      'quiz',
      {
        title: 'Greeting for the time of day',
        description: 'Which greeting fits the picture?',
        tags: ['vocabulary', 'greetings'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        questions: [
          {
            id: 'morning',
            prompt: 'You wake up. 7:00 a.m.',
            emoji: '🌅',
            options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Au revoir'],
            answer: 'Bonjour',
          },
          {
            id: 'noon',
            prompt: 'Lunch time. 1:00 p.m.',
            emoji: '☀️',
            options: ['Bonjour', 'Bonne nuit', 'Bonsoir', 'À demain'],
            answer: 'Bonjour',
            explanation: '“Bonjour” is used all day, until it gets dark.',
          },
          {
            id: 'evening',
            prompt: 'You arrive at a restaurant. 7:00 p.m.',
            emoji: '🌆',
            options: ['Bonsoir', 'Bonne nuit', 'Au revoir', 'Merci'],
            answer: 'Bonsoir',
          },
          {
            id: 'night',
            prompt: 'You go to bed.',
            emoji: '🌙',
            options: ['Bonne nuit', 'Bonjour', 'Bonsoir', 'Salut'],
            answer: 'Bonne nuit',
            explanation:
              '“Bonne nuit” is only said when someone goes to bed – it is not a greeting.',
          },
          {
            id: 'tomorrow',
            prompt: 'You will see your friend tomorrow.',
            emoji: '📆',
            options: ['À demain', 'Bonne nuit', 'Merci', 'Bonjour'],
            answer: 'À demain',
          },
        ],
      },
    ),

    activity(
      U,
      'feelings',
      'quiz',
      {
        title: 'How are you?',
        description: 'Answer “Ça va ?” in French.',
        tags: ['vocabulary', 'communication', 'greetings'],
        difficulty: 1,
        estMinutes: 2,
      },
      quizEmoji(feelings, feelings, 4),
    ),

    activity(
      U,
      'sort-tu-vous',
      'sortit',
      {
        title: 'Tu or vous?',
        description: 'Who are you talking to: a friend (tu) or a stranger (vous)?',
        tags: ['grammar', 'fr-tu-vous'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Is this said to a friend (tu) or politely (vous)?',
        buckets: [
          { id: 'tu', label: 'tu – a friend', emoji: '🧑‍🤝‍🧑' },
          { id: 'vous', label: 'vous – polite', emoji: '🎩' },
        ],
        items: [
          {
            id: 't1',
            text: 'Comment vas-tu ?',
            bucket: 'tu',
            speak: 'Comment vas-tu ?',
            translation: 'How are you? (informal)',
          },
          {
            id: 'v1',
            text: 'Comment allez-vous ?',
            bucket: 'vous',
            speak: 'Comment allez-vous ?',
            translation: 'How are you? (formal)',
          },
          {
            id: 't2',
            text: 'S’il te plaît.',
            bucket: 'tu',
            speak: 'S’il te plaît.',
            translation: 'Please. (informal)',
          },
          {
            id: 'v2',
            text: 'S’il vous plaît, madame.',
            bucket: 'vous',
            speak: 'S’il vous plaît, madame.',
            translation: 'Please, madam. (formal)',
          },
          {
            id: 't3',
            text: 'Et toi ?',
            bucket: 'tu',
            speak: 'Et toi ?',
            translation: 'And you? (informal)',
          },
          {
            id: 'v3',
            text: 'Et vous ?',
            bucket: 'vous',
            speak: 'Et vous ?',
            translation: 'And you? (formal)',
          },
          {
            id: 'v4',
            text: 'Excusez-moi, monsieur.',
            bucket: 'vous',
            speak: 'Excusez-moi, monsieur.',
            translation: 'Excuse me, sir.',
          },
          {
            id: 't4',
            text: 'Salut, ça va ?',
            bucket: 'tu',
            speak: 'Salut, ça va ?',
            translation: 'Hi, how are you? (informal)',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-greetings',
      'gapfill',
      {
        title: 'Complete the greeting',
        description: 'Fill in the missing word.',
        tags: ['grammar', 'greetings'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Au ___ !',
            answer: 'revoir',
            options: ['revoir', 'merci', 'bonjour', 'plaît'],
            translation: 'Goodbye!',
          },
          {
            id: 'g2',
            text: 'Comment ___-vous ?',
            answer: 'allez',
            options: ['allez', 'vas', 'va', 'êtes'],
            translation: 'How are you? (formal)',
            explanation: 'With vous the verb is allez: vous allez.',
            lesson: 'fr-questions',
          },
          {
            id: 'g3',
            text: 'Comment ___-tu ?',
            answer: 'vas',
            options: ['vas', 'va', 'allez', 'vais'],
            translation: 'How are you? (informal)',
            explanation: 'With tu the verb is vas: tu vas.',
            lesson: 'fr-questions',
          },
          {
            id: 'g4',
            text: 'Bonjour, ___ Dupont !',
            answer: 'Madame',
            options: ['Madame', 'Merci', 'Salut', 'Pardon'],
            translation: 'Good day, Mrs. Dupont!',
          },
          {
            id: 'g5',
            text: 'Merci ___ !',
            answer: 'beaucoup',
            options: ['beaucoup', 'rien', 'revoir', 'bien'],
            translation: 'Thank you very much!',
          },
          {
            id: 'g6',
            text: 'S’il ___ plaît, madame.',
            answer: 'vous',
            options: ['vous', 'te', 'tu', 'toi'],
            translation: 'Please, madam.',
            explanation: 'To a stranger you say “s’il vous plaît”, to a friend “s’il te plaît”.',
            lesson: 'fr-tu-vous',
          },
          {
            id: 'g7',
            text: 'Ça ___ ?',
            answer: 'va',
            options: ['va', 'vas', 'allez', 'vais'],
            translation: 'How are you?',
            explanation: '“Ça” stands for “it”, so the verb is va.',
            lesson: 'fr-questions',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a greeting',
        description: 'Put the words in the right order – first questions, then statements.',
        tags: ['grammar', 'greetings'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'How are you? (informal)',
            words: ['Comment', 'vas-tu ?'],
            lesson: 'fr-questions',
          },
          {
            id: 's2',
            translation: 'How are you? (formal)',
            words: ['Comment', 'allez-vous ?'],
            explanation: 'With vous the verb comes first and is joined to vous by a hyphen.',
            lesson: 'fr-questions',
          },
          {
            id: 's3',
            translation: 'I am fine, thank you.',
            words: ['Ça', 'va', 'bien,', 'merci.'],
            extra: ['mal'],
          },
          {
            id: 's4',
            translation: 'Good evening, madam!',
            words: ['Bonsoir,', 'madame !'],
          },
          {
            id: 's5',
            translation: 'Goodbye, sir!',
            words: ['Au', 'revoir,', 'monsieur !'],
          },
          {
            id: 's6',
            translation: 'Thank you very much!',
            words: ['Merci', 'beaucoup !'],
            extra: ['rien'],
          },
        ],
      },
    ),

    activity(
      U,
      'spell-polite',
      'spell',
      {
        title: 'Spell the polite words',
        description: 'Unscramble and type the key words. Accents are optional here.',
        tags: ['spelling', 'greetings'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(polite, 'unscramble').items,
          {
            id: 'sp-bonsoir',
            mode: 'type',
            answer: 'Bonsoir',
            hint: 'good evening',
            emoji: '🌆',
            speak: 'Bonsoir',
          },
          {
            id: 'sp-demain',
            mode: 'type',
            answer: 'À demain',
            hint: 'see you tomorrow',
            emoji: '📆',
            speak: 'À demain',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Say hello!',
        description: 'Three short chats: with a friend, with a teacher and when leaving.',
        tags: ['communication', 'greetings'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        scenes: [
          {
            id: 'friend',
            title: 'Meeting a friend',
            emoji: '🧑‍🤝‍🧑',
            setting: 'You meet Léa in the street.',
            turns: [
              { kind: 'npc', who: 'Léa', text: 'Salut !', translation: 'Hi!' },
              {
                kind: 'you',
                options: [
                  { text: 'Salut !', correct: true },
                  {
                    text: 'Au revoir !',
                    correct: false,
                    feedback: 'That is a goodbye, but you are just meeting.',
                  },
                  {
                    text: 'Bonne nuit !',
                    correct: false,
                    feedback: 'It is daytime – “Bonne nuit” is for bedtime.',
                  },
                ],
              },
              { kind: 'npc', who: 'Léa', text: 'Ça va ?', translation: 'How are you?' },
              {
                kind: 'you',
                options: [
                  { text: 'Ça va bien, merci. Et toi ?', correct: true },
                  {
                    text: 'De rien, Léa.',
                    correct: false,
                    feedback: '“De rien” answers “merci”, not “Ça va ?”.',
                  },
                  {
                    text: 'Ça va bien, merci. Et vous ?',
                    correct: false,
                    feedback: 'Léa is your friend – use “toi”, not “vous”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Ça va très bien, merci !',
                translation: 'I am doing very well, thanks!',
              },
            ],
          },
          {
            id: 'teacher',
            title: 'Meeting your teacher',
            emoji: '👩‍🏫',
            setting: 'Madame Dupont is your teacher. Be polite!',
            turns: [
              {
                kind: 'npc',
                who: 'Madame Dupont',
                text: 'Bonjour ! Comment allez-vous ?',
                translation: 'Hello! How are you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Très bien, merci. Et vous ?', correct: true },
                  {
                    text: 'Très bien, merci. Et toi ?',
                    correct: false,
                    feedback: 'With a teacher use the polite “vous”.',
                  },
                  { text: 'Au revoir !', correct: false, feedback: 'That is a goodbye.' },
                ],
              },
              {
                kind: 'npc',
                who: 'Madame Dupont',
                text: 'Très bien, merci !',
                translation: 'Very well, thank you!',
              },
            ],
          },
          {
            id: 'leaving',
            title: 'Saying goodbye',
            emoji: '🚪',
            setting: 'Class is over.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Au revoir ! À demain !',
                translation: 'Bye! See you tomorrow!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Au revoir ! À demain !', correct: true },
                  {
                    text: 'Bonjour !',
                    correct: false,
                    feedback: 'It is the end of the lesson, not the start.',
                  },
                  { text: 'Ça va ?', correct: false, feedback: 'He is leaving – say goodbye.' },
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
        title: 'Greeting blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'greetings', 'fr-tu-vous'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Bonjour” is a greeting for the day.', isTrue: true },
          {
            id: 'b2',
            text: '“Bonne nuit” is a good way to say hello at 8 a.m.',
            isTrue: false,
            explanation: '“Bonne nuit” is said before bed.',
          },
          { id: 'b3', text: '“Au revoir” means goodbye.', isTrue: true },
          {
            id: 'b4',
            text: 'You say “Comment vas-tu ?” to your boss.',
            isTrue: false,
            explanation: 'To your boss: “Comment allez-vous ?”',
          },
          { id: 'b5', text: '“Merci” means thank you.', isTrue: true },
          {
            id: 'b6',
            text: '“Au revoir” is a hello.',
            isTrue: false,
            explanation: 'It means goodbye.',
          },
          { id: 'b7', text: '“Madame” is used for women, “Monsieur” for men.', isTrue: true },
          { id: 'b8', text: '“Comment allez-vous ?” is polite.', isTrue: true },
          { id: 'b9', text: '“À demain” means “see you tomorrow”.', isTrue: true },
          {
            id: 'b10',
            text: '“Non” means yes.',
            isTrue: false,
            explanation: '“Oui” = yes, “Non” = no.',
          },
          { id: 'b11', text: 'You use “vous” when you talk to several people.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'greetings'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'It is 9 p.m. You arrive at a party.',
            options: ['Bonsoir', 'Bonjour', 'À bientôt', 'Bonne nuit'],
            answer: 'Bonsoir',
          },
          {
            id: 'c2',
            prompt: 'Which question is polite?',
            options: ['Comment allez-vous ?', 'Comment vas-tu ?', 'Ça va ?', 'Salut !'],
            answer: 'Comment allez-vous ?',
          },
          {
            id: 'c3',
            prompt: 'Which answer fits “Ça va ?”',
            options: ['Très bien, merci !', 'Bonne nuit !', 'Au revoir !', 'À demain !'],
            answer: 'Très bien, merci !',
          },
          {
            id: 'c4',
            prompt: 'How do you say “see you later”?',
            options: ['À tout à l’heure', 'À demain', 'Bonjour', 'De rien'],
            answer: 'À tout à l’heure',
          },
          {
            id: 'c5',
            prompt: 'Which word answers “Merci” ?',
            options: ['De rien', 'Pardon', 'Oui', 'Bonsoir'],
            answer: 'De rien',
          },
          {
            id: 'c6',
            prompt: 'How do you say “please” to a stranger?',
            options: ['S’il vous plaît', 'S’il te plaît', 'De rien', 'Pardon'],
            answer: 'S’il vous plaît',
            lesson: 'fr-tu-vous',
          },
          {
            id: 'c7',
            prompt: '“Pardon” means …',
            options: ['sorry / excuse me', 'thank you', 'good night', 'see you soon'],
            answer: 'sorry / excuse me',
          },
          {
            id: 'c8',
            prompt: 'Whom do you say “tu” to?',
            options: ['a friend', 'your boss', 'a stranger', 'a shop assistant'],
            answer: 'a friend',
            lesson: 'fr-tu-vous',
          },
        ],
      },
    ),
  ],
};
