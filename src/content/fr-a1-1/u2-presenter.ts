import {
  activity,
  byDe,
  flashcards,
  listen,
  quizDeEn,
  quizEmoji,
  spell,
  vocabList,
} from '../builders';
import { frTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-presenter';

const vocab = vocabList(U, 'Introductions', [
  ['Je m’appelle …', 'My name is …', '🙋'],
  ['Comment tu t’appelles ?', 'What is your name? (informal)', '🏷️'],
  ['Comment vous appelez-vous ?', 'What is your name? (formal)', '🎩'],
  ['Enchanté(e) !', 'Nice to meet you!', '🤝'],
  ['Voici …', 'Here is … / This is …', '👉'],
  ['Qui est-ce ?', 'Who is that?', '🕵️'],
  ['Je suis de …', 'I am from …', '🧳'],
  ['Tu es d’où ?', 'Where are you from? (informal)', '🌍'],
  ['J’habite à …', 'I live in …', '🏠'],
  ['Où habitez-vous ?', 'Where do you live? (formal)', '📍'],
  ['Je parle …', 'I speak …', '🗣️'],
  ['Quelle est votre profession ?', 'What do you do? (formal)', '💼'],
  ['la France', 'France', '🇫🇷'],
  ['l’Allemagne', 'Germany', '🇩🇪'],
  ['l’Espagne', 'Spain', '🇪🇸'],
  ['l’Italie', 'Italy', '🇮🇹'],
  ['la Suisse', 'Switzerland', '🇨🇭'],
  ['le Canada', 'Canada', '🇨🇦'],
  ['le Maroc', 'Morocco', '🇲🇦'],
  ['les États-Unis', 'the United States', '🇺🇸'],
  ['français', 'French (m.)', '🥖'],
  ['française', 'French (f.)', '🥐'],
  ['allemand', 'German (m.)', '🥨'],
  ['allemande', 'German (f.)', '🍺'],
  ['espagnol', 'Spanish (m.)', '💃'],
  ['espagnole', 'Spanish (f.)', '🌹'],
  ['italien', 'Italian (m.)', '🍕'],
  ['italienne', 'Italian (f.)', '🍝'],
  ['suisse', 'Swiss (m. and f.)', '🏔️'],
  ['canadien', 'Canadian (m.)', '🍁'],
  ['canadienne', 'Canadian (f.)', '🦫'],
  ['étudiant', 'student (m.)', '🧑‍🎓'],
  ['étudiante', 'student (f.)', '👩‍🎓'],
  ['professeur', 'teacher / professor', '🧑‍🏫'],
  ['médecin', 'doctor', '🩺'],
  ['infirmier', 'nurse (m.)', '💉'],
  ['infirmière', 'nurse (f.)', '🩹'],
  ['journaliste', 'journalist (m. and f.)', '📰'],
  ['serveur', 'waiter', '🍽️'],
  ['serveuse', 'waitress', '☕'],
  ['vendeur', 'shop assistant (m.)', '🛍️'],
  ['vendeuse', 'shop assistant (f.)', '👜'],
  ['je', 'I', '☝️'],
  ['il', 'he', '👨'],
  ['elle', 'she', '👩'],
  ['on', 'we / one (everyday speech)', '🧑‍🤝‍🧑'],
  ['nous', 'we', '👥'],
  ['ils', 'they (m. or mixed)', '👬'],
  ['elles', 'they (f.)', '👭'],
]);

const phrases = vocab.slice(0, 12);
const countries = vocab.slice(12, 20);
const nationalities = vocab.slice(20, 31);
const jobs = vocab.slice(31, 42);

const pairs = [
  ['la France', 'français'],
  ['l’Allemagne', 'allemand'],
  ['l’Espagne', 'espagnol'],
  ['l’Italie', 'italien'],
  ['le Canada', 'canadien'],
  ['la Suisse', 'suisse'],
] as const;

/** m. / f. forms for the "masculine or feminine?" sort */
const GENDER_CARDS: [string, 'm' | 'f'][] = [
  ['français', 'm'],
  ['française', 'f'],
  ['allemand', 'm'],
  ['allemande', 'f'],
  ['italien', 'm'],
  ['italienne', 'f'],
  ['étudiant', 'm'],
  ['étudiante', 'f'],
  ['infirmier', 'm'],
  ['infirmière', 'f'],
  ['serveur', 'm'],
  ['serveuse', 'f'],
];

export const presenter: UnitContent = {
  unit: unitFr({
    id: U,
    order: 2,
    title: 'Je me présente',
    subtitle: 'Say who you are, where you are from and what you do',
    emoji: '🙋',
    goals: [
      'Give your name, nationality, job and home town',
      'Ask someone the same questions',
      'Use je, tu, il and elle with être and regular -er verbs',
    ],
    grammar: ['Subject pronouns', 'être and avoir', 'Regular -er verbs', 'le, la, l’, les'],
    vocabFields: ['Introductions', 'Countries', 'Nationalities', 'Jobs', 'Pronouns'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash',
      'flashcards',
      {
        title: 'Introduction phrases',
        description: 'The sentences you need to introduce yourself.',
        tags: ['vocabulary', 'introductions'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(phrases),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match each French phrase with its English meaning.',
        tags: ['vocabulary', 'introductions'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(phrases, phrases),
    ),

    activity(
      U,
      'flash-countries',
      'flashcards',
      {
        title: 'Countries',
        description: 'Learn the countries with their articles: la France, le Canada, l’Italie.',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(countries),
    ),

    activity(
      U,
      'quiz-flags',
      'quiz',
      {
        title: 'Which country?',
        description: 'Look at the flag and pick the country with its article.',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(countries, countries, 4),
    ),

    activity(
      U,
      'memory-nationalities',
      'memory',
      {
        title: 'Country and nationality',
        description: 'Match each country with the nationality of its people.',
        tags: ['vocabulary', 'countries-languages'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        pairs: pairs.map(([country, nationality], i) => ({
          id: `p${i}`,
          a: country,
          b: nationality,
        })),
      },
    ),

    activity(
      U,
      'flash-jobs',
      'flashcards',
      {
        title: 'Jobs',
        description: 'Many jobs have a masculine and a feminine form.',
        tags: ['vocabulary', 'work-jobs'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(jobs),
    ),

    activity(
      U,
      'listen-people',
      'listen',
      {
        title: 'Who is it?',
        description: 'Listen to the word: a job or a nationality? Pick its meaning.',
        tags: ['listening', 'work-jobs', 'countries-languages'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen([...jobs.slice(0, 5), ...nationalities.slice(0, 3)], [...jobs, ...nationalities]),
    ),

    activity(
      U,
      'sort-gender',
      'sortit',
      {
        title: 'Masculine or feminine?',
        description: 'Sort the nationalities and jobs: is the person a man or a woman?',
        tags: ['grammar', 'fr-gender'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Does the word describe a man or a woman?',
        buckets: [
          { id: 'm', label: 'a man (il)', emoji: '👨' },
          { id: 'f', label: 'a woman (elle)', emoji: '👩' },
        ],
        items: GENDER_CARDS.map(([word, bucket], i) => {
          const v = byDe(vocab, word)[0]!;
          return { id: `g${i}`, text: word, bucket, speak: word, translation: v.en };
        }),
      },
    ),

    activity(
      U,
      'conj-etre-avoir',
      'conjugation',
      {
        title: 'être & avoir',
        description: 'Complete the tables of the two most important verbs.',
        tags: ['grammar', 'fr-etre-avoir'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('etre-1', 'être', 'to be', ['je', 'tu', 'il/elle/on']),
          frTable('avoir-1', 'avoir', 'to have', ['je', 'tu', 'il/elle/on']),
          frTable('etre-2', 'être', 'to be', ['nous', 'vous', 'ils/elles']),
          frTable('avoir-2', 'avoir', 'to have', ['nous', 'vous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'conj-er',
      'conjugation',
      {
        title: 'Regular -er verbs',
        description: 'parler, habiter and s’appeler follow the same pattern.',
        tags: ['grammar', 'fr-er-verbs'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('parler-1', 'parler', 'to speak', ['je', 'tu', 'il/elle/on']),
          frTable('habiter-1', 'habiter', 'to live', ['nous', 'vous', 'ils/elles']),
          frTable('appeler-1', 'appeler', 'to be called', ['je', 'tu', 'nous'], true),
          frTable('parler-2', 'parler', 'to speak', ['nous', 'vous', 'ils/elles']),
          frTable('habiter-2', 'habiter', 'to live', ['je', 'tu', 'il/elle/on']),
        ],
      },
    ),

    activity(
      U,
      'gap-introductions',
      'gapfill',
      {
        title: 'Complete the sentence',
        description: 'Pick the right verb form, pronoun or article.',
        tags: ['grammar', 'introductions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Je ___ Marie.',
            answer: 'm’appelle',
            options: ['m’appelle', 't’appelles', 's’appelle', 'appelle'],
            translation: 'My name is Marie.',
            explanation: 'With je the reflexive pronoun is me, shortened to m’ before a vowel.',
            lesson: 'fr-er-verbs',
          },
          {
            id: 'g2',
            text: 'Tu ___ italien ?',
            answer: 'es',
            options: ['es', 'est', 'suis', 'êtes'],
            translation: 'Are you Italian?',
            explanation: 'être: je suis, tu es, il est.',
            lesson: 'fr-etre-avoir',
          },
          {
            id: 'g3',
            text: 'Nous ___ à Lyon.',
            answer: 'habitons',
            options: ['habitons', 'habitez', 'habitent', 'habite'],
            translation: 'We live in Lyon.',
            explanation: 'The ending for nous is -ons.',
            lesson: 'fr-er-verbs',
          },
          {
            id: 'g4',
            text: 'Elle ___ étudiante.',
            answer: 'est',
            options: ['est', 'es', 'sont', 'a'],
            translation: 'She is a student.',
            explanation: 'No article after être: elle est étudiante.',
            lesson: 'fr-etre-avoir',
          },
          {
            id: 'g5',
            text: '___ étudiants parlent français.',
            answer: 'Les',
            options: ['Les', 'Le', 'La', 'L’'],
            translation: 'The students speak French.',
            explanation: 'The plural article is les for masculine and feminine nouns.',
            lesson: 'fr-articles',
          },
          {
            id: 'g6',
            text: 'Voici ___ professeur.',
            answer: 'le',
            options: ['le', 'la', 'l’', 'les'],
            translation: 'Here is the teacher.',
            explanation: 'Professeur is masculine, so the article is le.',
            lesson: 'fr-articles',
          },
          {
            id: 'g7',
            text: 'Elle est ___.',
            answer: 'italienne',
            options: ['italienne', 'italien', 'italiens', 'italiennes'],
            translation: 'She is Italian.',
            explanation: 'For a woman the nationality takes the feminine ending: -ienne.',
            lesson: 'fr-gender',
          },
          {
            id: 'g8',
            text: 'J’___ à Paris.',
            answer: 'habite',
            options: ['habite', 'habites', 'habitez', 'habitent'],
            translation: 'I live in Paris.',
            explanation: 'With je the verb ends in -e, never in -s.',
            lesson: 'fr-er-verbs',
          },
          {
            id: 'g9',
            text: '___ habitons à Nice.',
            answer: 'Nous',
            options: ['Nous', 'Vous', 'Ils', 'Je'],
            translation: 'We live in Nice.',
            explanation: 'The ending -ons goes with nous.',
            lesson: 'fr-pronouns',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'introductions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'My name is Marie.',
            words: ['Je', 'm’appelle', 'Marie.'],
            lesson: 'fr-er-verbs',
          },
          {
            id: 's2',
            translation: 'What is your name? (informal)',
            words: ['Comment', 'tu', 't’appelles ?'],
            lesson: 'fr-questions',
          },
          {
            id: 's3',
            translation: 'She is French.',
            words: ['Elle', 'est', 'française.'],
            extra: ['français'],
            lesson: 'fr-gender',
          },
          {
            id: 's4',
            translation: 'I live in Paris.',
            words: ['J’habite', 'à', 'Paris.'],
            lesson: 'fr-er-verbs',
          },
          {
            id: 's5',
            translation: 'We speak French.',
            words: ['Nous', 'parlons', 'français.'],
            extra: ['parlez'],
            lesson: 'fr-pronouns',
          },
          {
            id: 's6',
            translation: 'He is a student.',
            words: ['Il', 'est', 'étudiant.'],
            extra: ['un'],
            lesson: 'fr-etre-avoir',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-people',
      'spell',
      {
        title: 'Spell the words',
        description: 'Unscramble and type jobs and nationalities. Accents are optional here.',
        tags: ['spelling', 'work-jobs', 'countries-languages'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...spell(byDe(vocab, 'médecin', 'italien'), 'unscramble').items,
          {
            id: 'sp-etudiante',
            mode: 'type',
            answer: 'étudiante',
            hint: 'student (f.)',
            emoji: '👩‍🎓',
            speak: 'étudiante',
          },
          {
            id: 'sp-professeur',
            mode: 'type',
            answer: 'professeur',
            hint: 'teacher',
            emoji: '🧑‍🏫',
            speak: 'professeur',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Introduce yourself',
        description: 'A new classmate, a polite interview and introducing a friend.',
        tags: ['communication', 'introductions'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'classmate',
            title: 'A new classmate',
            emoji: '🧑‍🎓',
            setting: 'You meet Marie in your French class. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Marie',
                text: 'Salut ! Comment tu t’appelles ?',
                translation: 'Hi! What is your name?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je m’appelle Tom. Et toi ?', correct: true },
                  {
                    text: 'Tu t’appelles Tom.',
                    correct: false,
                    feedback: 'About yourself you say “je m’appelle”, not “tu”.',
                  },
                  {
                    text: 'Comment vous appelez-vous ?',
                    correct: false,
                    feedback: 'Marie asked you first, and “vous” is too formal for a classmate.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marie',
                text: 'Je m’appelle Marie. Tu es d’où ?',
                translation: 'My name is Marie. Where are you from?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je suis de Londres.', correct: true },
                  {
                    text: 'Je parle Londres.',
                    correct: false,
                    feedback: '“Parler” goes with a language. For a city say “je suis de …”.',
                  },
                  {
                    text: 'Tu es de Londres.',
                    correct: false,
                    feedback: 'Marie asked about you, so the answer starts with “je”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marie',
                text: 'Moi, je suis de Lyon. Enchantée !',
                translation: 'I am from Lyon. Nice to meet you!',
              },
            ],
          },
          {
            id: 'interview',
            title: 'A polite interview',
            emoji: '💼',
            setting: 'Monsieur Durand asks you questions. Use vous when he speaks to you.',
            turns: [
              {
                kind: 'npc',
                who: 'M. Durand',
                text: 'Bonjour. Quelle est votre profession ?',
                translation: 'Hello. What is your job?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je suis infirmière.', correct: true },
                  {
                    text: 'Tu es infirmière.',
                    correct: false,
                    feedback: 'You speak about yourself: “je suis”.',
                  },
                  {
                    text: 'Je m’appelle infirmière.',
                    correct: false,
                    feedback: '“Je m’appelle” is for your name, not your job.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'M. Durand',
                text: 'Et où habitez-vous ?',
                translation: 'And where do you live?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'J’habite à Bruxelles.', correct: true },
                  {
                    text: 'J’habites à Bruxelles.',
                    correct: false,
                    feedback: 'With je the verb is habite, without -s.',
                  },
                  {
                    text: 'Vous habitez à Bruxelles.',
                    correct: false,
                    feedback: 'You answer about yourself: “j’habite”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'M. Durand',
                text: 'Merci. Au revoir !',
                translation: 'Thank you. Goodbye!',
              },
            ],
          },
          {
            id: 'friend',
            title: 'Meeting a friend’s friend',
            emoji: '🤝',
            setting: 'Tom introduces you to Léa.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Voici Léa. Elle est française.',
                translation: 'This is Léa. She is French.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Enchanté(e) !', correct: true },
                  {
                    text: 'Au revoir !',
                    correct: false,
                    feedback: 'You are meeting Léa, not leaving.',
                  },
                  {
                    text: 'De rien !',
                    correct: false,
                    feedback: '“De rien” answers “merci”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Enchantée ! Tu parles français ?',
                translation: 'Nice to meet you! Do you speak French?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, je parle français.', correct: true },
                  {
                    text: 'Oui, tu parles français.',
                    correct: false,
                    feedback: 'About yourself you say “je parle”.',
                  },
                  {
                    text: 'Non, merci.',
                    correct: false,
                    feedback: '“Non, merci” does not answer a question about languages.',
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
        title: 'Introductions blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'introductions', 'fr-gender'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Je m’appelle Marie” means “My name is Marie”.', isTrue: true },
          { id: 'b2', text: '“Elle est française” is about a woman.', isTrue: true },
          {
            id: 'b3',
            text: '“Il est étudiante” is correct.',
            isTrue: false,
            explanation: 'For a man: “il est étudiant”. “Étudiante” is feminine.',
          },
          { id: 'b4', text: '“Nous parlons” is the nous form of parler.', isTrue: true },
          {
            id: 'b5',
            text: '“Tu es” means “you are”.',
            isTrue: true,
          },
          {
            id: 'b6',
            text: '“J’habite” is correct, “je habite” is not.',
            isTrue: true,
          },
          {
            id: 'b7',
            text: '“Je suis une médecin” is the usual way to say your job.',
            isTrue: false,
            explanation: 'After être there is no article: “Je suis médecin”.',
          },
          { id: 'b8', text: '“la Suisse” is feminine.', isTrue: true },
          {
            id: 'b9',
            text: '“Ils sont” means “we are”.',
            isTrue: false,
            explanation: '“Nous sommes” = we are. “Ils sont” = they are.',
          },
          { id: 'b10', text: '“Suisse” has the same form for men and women.', isTrue: true },
          {
            id: 'b11',
            text: '“Enchanté(e)” is a way to say goodbye.',
            isTrue: false,
            explanation: 'You say it when you meet someone: nice to meet you.',
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
        tags: ['vocabulary', 'grammar', 'introductions'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'How do you ask a classmate for their name?',
            options: [
              'Comment tu t’appelles ?',
              'Comment vous appelez-vous ?',
              'Qui est-ce ?',
              'Où habites-tu ?',
            ],
            answer: 'Comment tu t’appelles ?',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Nous ___ de Madrid.”',
            options: ['sommes', 'êtes', 'sont', 'suis'],
            answer: 'sommes',
            lesson: 'fr-etre-avoir',
          },
          {
            id: 'c3',
            prompt: 'Complete: “Vous ___ français ?”',
            options: ['parlez', 'parlons', 'parlent', 'parle'],
            answer: 'parlez',
            lesson: 'fr-er-verbs',
          },
          {
            id: 'c4',
            prompt: 'Léa is Canadian. Léa est …',
            options: ['canadienne', 'canadien', 'canadiens', 'canadiennes'],
            answer: 'canadienne',
            lesson: 'fr-gender',
          },
          {
            id: 'c5',
            prompt: 'Which article goes with “école” (a school)?',
            options: ['l’', 'le', 'la', 'les'],
            answer: 'l’',
            explanation: 'Before a vowel le and la become l’: l’école.',
            lesson: 'fr-articles',
          },
          {
            id: 'c6',
            prompt: '“Je suis de …” means …',
            options: ['I am from …', 'I live in …', 'I speak …', 'My name is …'],
            answer: 'I am from …',
          },
          {
            id: 'c7',
            prompt: 'Complete: “J’___ à Rome.”',
            options: ['habite', 'habites', 'habitons', 'habitent'],
            answer: 'habite',
            lesson: 'fr-er-verbs',
          },
          {
            id: 'c8',
            prompt: 'Which pronoun goes with “est”?',
            options: ['elle', 'je', 'nous', 'ils'],
            answer: 'elle',
            lesson: 'fr-pronouns',
          },
        ],
      },
    ),
  ],
};
