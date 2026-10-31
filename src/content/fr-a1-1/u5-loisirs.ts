import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { frTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-loisirs';

const vocab = vocabList(U, 'Free time', [
  ['nager', 'to swim', '🏊'],
  ['danser', 'to dance', '💃'],
  ['chanter', 'to sing', '🎤'],
  ['cuisiner', 'to cook', '🧑‍🍳'],
  ['lire', 'to read', '📖'],
  ['dessiner', 'to draw', '✏️'],
  ['voyager', 'to travel', '✈️'],
  ['écouter de la musique', 'to listen to music', '🎧'],
  ['regarder un film', 'to watch a film', '🎬'],
  ['retrouver des amis', 'to meet friends', '🧑‍🤝‍🧑'],
  ['jouer au football', 'to play football', '⚽'],
  ['jouer au tennis', 'to play tennis', '🎾'],
  ['jouer au basket', 'to play basketball', '🏀'],
  ['jouer aux cartes', 'to play cards', '🃏'],
  ['jouer du piano', 'to play the piano', '🎹'],
  ['jouer de la guitare', 'to play the guitar', '🎸'],
  ['faire du sport', 'to do sport', '🏅'],
  ['faire du vélo', 'to cycle', '🚴'],
  ['faire de la natation', 'to go swimming (as a sport)', '🏊‍♀️'],
  ['faire du yoga', 'to do yoga', '🧘'],
  ['faire de la randonnée', 'to go hiking', '🥾'],
  ['faire du ski', 'to ski', '⛷️'],
  ['aimer', 'to like / to love', '💛'],
  ['adorer', 'to love', '😍'],
  ['détester', 'to hate', '😠'],
  ['préférer', 'to prefer', '🙌'],
  ['beaucoup', 'a lot', '💯'],
  ['un peu', 'a little', '🤏'],
  ['ne … pas', 'not', '🚫'],
  ['Moi aussi !', 'Me too!', '🙋'],
  ['Moi non plus !', 'Me neither!', '🙅'],
  ['le chocolat', 'chocolate', '🍫'],
  ['le café', 'coffee', '☕'],
  ['la musique', 'music', '🎵'],
  ['le cinéma', 'the cinema', '🎥'],
  ['les chats', 'cats', '🐱'],
  ['les chiens', 'dogs', '🐶'],
  ['Qu’est-ce que tu aimes ?', 'What do you like?', '❓'],
  ['Qu’est-ce que tu fais le week-end ?', 'What do you do at the weekend?', '🗓️'],
  ['Tu aimes danser ?', 'Do you like dancing?', '🕺'],
  ['Oui, j’adore !', 'Yes, I love it!', '❤️'],
  ['Pas du tout.', 'Not at all.', '🙅‍♀️'],
  ['Ça dépend.', 'It depends.', '🤷'],
  ['le temps libre', 'free time', '⏳'],
  ['le week-end', 'the weekend', '🏖️'],
]);

const activities = vocab.slice(0, 10);
const sports = vocab.slice(10, 22);
const likes = vocab.slice(22, 37);
const phrases = vocab.slice(37);

const pictureQuiz = byDe(
  vocab,
  'nager',
  'danser',
  'chanter',
  'cuisiner',
  'lire',
  'jouer au football',
  'faire du vélo',
  'jouer de la guitare',
);

/** [noun, bucket, English] for the "jouer à, jouer de or faire de?" sort */
const SORT_CARDS: [string, 'jouer-a' | 'jouer-de' | 'faire', string][] = [
  ['football', 'jouer-a', 'football'],
  ['basket', 'jouer-a', 'basketball'],
  ['cartes', 'jouer-a', 'cards'],
  ['piano', 'jouer-de', 'piano'],
  ['guitare', 'jouer-de', 'guitar'],
  ['violon', 'jouer-de', 'violin'],
  ['sport', 'faire', 'sport'],
  ['vélo', 'faire', 'cycling'],
  ['natation', 'faire', 'swimming'],
  ['yoga', 'faire', 'yoga'],
  ['ski', 'faire', 'skiing'],
  ['randonnée', 'faire', 'hiking'],
];

export const loisirs: UnitContent = {
  unit: unitFr({
    id: U,
    order: 5,
    title: 'Goûts et loisirs',
    subtitle: 'Say what you like, what you do in your free time and what you do not like',
    emoji: '🎸',
    goals: [
      'Say what you like, love, prefer and hate',
      'Talk about sport, music and other hobbies',
      'Say that you do not do or like something',
    ],
    grammar: ['aimer, adorer, détester', 'jouer à / jouer de / faire de', 'faire', 'ne … pas'],
    vocabFields: ['Free time', 'Likes and dislikes', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-activities',
      'flashcards',
      {
        title: 'Free-time activities',
        description: 'Verbs for the things you do for fun.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(activities),
    ),

    activity(
      U,
      'flash-sports',
      'flashcards',
      {
        title: 'Sports, games and music',
        description: 'jouer au, jouer du, faire du: learn them as small blocks.',
        tags: ['vocabulary', 'hobbies', 'sport'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(sports),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'What are they doing?',
        description: 'Look at the picture and pick the activity.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, pictureQuiz, 4),
    ),

    activity(
      U,
      'listen-activities',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the verb and pick its meaning.',
        tags: ['listening', 'hobbies'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(vocab, 'nager', 'danser', 'chanter', 'cuisiner', 'lire', 'dessiner', 'voyager'),
        activities,
      ),
    ),

    activity(
      U,
      'flash-likes',
      'flashcards',
      {
        title: 'Likes and dislikes',
        description: 'aimer, adorer, détester and the things people like.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(likes),
    ),

    activity(
      U,
      'conj-likes',
      'conjugation',
      {
        title: 'aimer, adorer, détester, préférer',
        description: 'Regular -er verbs, and préférer with its accent change.',
        tags: ['grammar', 'fr-er-verbs', 'hobbies'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('aimer-1', 'aimer', 'to like', ['je', 'tu', 'il/elle/on']),
          frTable('adorer-1', 'adorer', 'to love', ['nous', 'vous', 'ils/elles']),
          frTable('detester-1', 'détester', 'to hate', ['je', 'nous', 'ils/elles']),
          frTable('preferer-1', 'préférer', 'to prefer', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-likes',
      'gapfill',
      {
        title: 'What do you like?',
        description: 'Verb forms, articles and the infinitive after aimer.',
        tags: ['grammar', 'fr-likes', 'hobbies'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-likes',
      },
      {
        items: [
          {
            id: 'l1',
            text: 'J’___ le chocolat.',
            answer: 'aime',
            options: ['aime', 'aimes', 'aimons'],
            translation: 'I like chocolate.',
            explanation: 'With je the verb ends in -e: j’aime.',
          },
          {
            id: 'l2',
            text: 'Elle adore ___ chats.',
            answer: 'les',
            options: ['les', 'des', 'le', 'la'],
            translation: 'She loves cats.',
            explanation:
              'After aimer, adorer and détester use the definite article, even for things in general.',
          },
          {
            id: 'l3',
            text: 'Nous ___ la musique.',
            answer: 'adorons',
            options: ['adorons', 'adorez', 'adorent'],
            translation: 'We love music.',
            explanation: 'The ending for nous is -ons.',
          },
          {
            id: 'l4',
            text: 'Tu aimes ___ ?',
            answer: 'danser',
            options: ['danser', 'danses', 'dansons'],
            translation: 'Do you like dancing?',
            explanation: 'After aimer an activity stays in the infinitive.',
          },
          {
            id: 'l5',
            text: 'Il déteste ___ café.',
            answer: 'le',
            options: ['le', 'la', 'les', 'l’'],
            translation: 'He hates coffee.',
            explanation: 'Café is masculine: le café.',
          },
          {
            id: 'l6',
            text: 'J’aime ___ le cinéma.',
            answer: 'beaucoup',
            options: ['beaucoup', 'un peu'],
            translation: 'I like the cinema a lot.',
            explanation: 'Beaucoup means a lot, un peu means a little.',
          },
          {
            id: 'l7',
            text: 'Vous ___ le café ?',
            answer: 'aimez',
            options: ['aimez', 'aimons', 'aiment', 'aimes'],
            translation: 'Do you like coffee? (formal)',
            explanation: 'The ending for vous is -ez.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-jouer-faire',
      'sortit',
      {
        title: 'jouer à, jouer de or faire?',
        description: 'Games, instruments and activities each take their own verb.',
        tags: ['grammar', 'fr-jouer-faire', 'sport'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-jouer-faire',
      },
      {
        instruction: 'Which verb goes with the word?',
        buckets: [
          { id: 'jouer-a', label: 'jouer au / aux (game)', emoji: '⚽' },
          { id: 'jouer-de', label: 'jouer du / de la (instrument)', emoji: '🎸' },
          { id: 'faire', label: 'faire du / de la (activity)', emoji: '🏃' },
        ],
        items: SORT_CARDS.map(([text, bucket, translation], i) => ({
          id: `s${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'conj-faire',
      'conjugation',
      {
        title: 'faire and jouer',
        description: 'Faire is irregular. Jouer is a regular -er verb.',
        tags: ['grammar', 'fr-jouer-faire'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('faire-1', 'faire', 'to do / to make', ['je', 'tu', 'il/elle/on']),
          frTable('faire-2', 'faire', 'to do / to make', ['nous', 'vous', 'ils/elles']),
          frTable('jouer-1', 'jouer', 'to play', ['je', 'nous', 'ils/elles']),
          frTable('jouer-2', 'jouer', 'to play', ['tu', 'il/elle/on', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'gap-negation',
      'gapfill',
      {
        title: 'Say it in the negative',
        description: 'ne … pas, n’ before a vowel and pas de.',
        tags: ['grammar', 'fr-negation', 'hobbies'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-negation',
      },
      {
        items: [
          {
            id: 'n1',
            text: 'Je ne parle ___ allemand.',
            answer: 'pas',
            options: ['pas', 'non', 'ne', 'sans'],
            translation: 'I do not speak German.',
            explanation: 'Ne goes before the verb and pas goes after it.',
          },
          {
            id: 'n2',
            text: 'Elle ___ aime pas danser.',
            answer: 'n’',
            options: ['n’', 'ne', 'non', 'pas'],
            translation: 'She does not like dancing.',
            explanation: 'Ne becomes n’ before a vowel: elle n’aime pas.',
          },
          {
            id: 'n3',
            text: 'Nous ne jouons ___ au tennis.',
            answer: 'pas',
            options: ['pas', 'non', 'ne', 'sans'],
            translation: 'We do not play tennis.',
            explanation: 'Pas follows the verb: nous ne jouons pas.',
          },
          {
            id: 'n4',
            text: 'Je n’ai pas ___ sœur.',
            answer: 'de',
            options: ['de', 'une', 'la', 'des'],
            translation: 'I do not have a sister.',
            explanation: 'After pas, un, une and des turn into de: je n’ai pas de sœur.',
          },
          {
            id: 'n5',
            text: 'Ils ne ___ pas le football.',
            answer: 'aiment',
            options: ['aiment', 'aime', 'aimez', 'aimes'],
            translation: 'They do not like football.',
            explanation: 'Ils goes with the -ent ending; ne … pas wraps around the verb.',
          },
          {
            id: 'n6',
            text: 'Tu ne ___ pas de sport ?',
            answer: 'fais',
            options: ['fais', 'fait', 'faites', 'faisons'],
            translation: 'Do you not do any sport?',
            explanation: 'Faire: je fais, tu fais, il fait.',
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
        tags: ['grammar', 'hobbies'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I like music.',
            words: ['J’aime', 'la', 'musique.'],
            extra: ['des'],
            lesson: 'fr-likes',
          },
          {
            id: 's2',
            translation: 'She plays tennis.',
            words: ['Elle', 'joue', 'au', 'tennis.'],
            extra: ['du'],
            lesson: 'fr-jouer-faire',
          },
          {
            id: 's3',
            translation: 'We do sport at the weekend.',
            words: ['Nous', 'faisons', 'du', 'sport', 'le', 'week-end.'],
            lesson: 'fr-jouer-faire',
          },
          {
            id: 's4',
            translation: 'I do not like swimming.',
            words: ['Je', 'n’aime', 'pas', 'nager.'],
            lesson: 'fr-negation',
          },
          {
            id: 's5',
            translation: 'What do you like?',
            words: ['Qu’est-ce', 'que', 'tu', 'aimes ?'],
            lesson: 'fr-questions',
          },
          {
            id: 's6',
            translation: 'They love dancing.',
            words: ['Ils', 'adorent', 'danser.'],
            extra: ['adore'],
            lesson: 'fr-likes',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-free-time',
      'spell',
      {
        title: 'Spell the hobbies',
        description: 'Unscramble and type free-time words. Accents are optional here.',
        tags: ['spelling', 'hobbies'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-danser',
            mode: 'unscramble',
            answer: 'danser',
            hint: 'to dance',
            emoji: '💃',
            speak: 'danser',
          },
          {
            id: 'sp-chanter',
            mode: 'unscramble',
            answer: 'chanter',
            hint: 'to sing',
            emoji: '🎤',
            speak: 'chanter',
          },
          {
            id: 'sp-preferer',
            mode: 'type',
            answer: 'préférer',
            hint: 'to prefer',
            emoji: '🙌',
            speak: 'préférer',
          },
          {
            id: 'sp-week-end',
            mode: 'type',
            answer: 'week-end',
            hint: 'the weekend',
            emoji: '🏖️',
            speak: 'le week-end',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Talking about free time',
        description: 'Questions and answers for a chat about hobbies.',
        tags: ['vocabulary', 'hobbies'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(phrases),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Hobby talk',
        description: 'Making friends, saying no politely and planning the weekend.',
        tags: ['communication', 'hobbies'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'new-friends',
            title: 'New friends',
            emoji: '🎸',
            setting: 'You meet Léo at a student party. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Léo',
                text: 'Qu’est-ce que tu aimes ?',
                translation: 'What do you like?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'J’aime la musique et je joue de la guitare.', correct: true },
                  {
                    text: 'J’aimes la musique et je joue de la guitare.',
                    correct: false,
                    feedback: 'With je the verb is aime, without -s.',
                  },
                  {
                    text: 'J’aime la musique et je joue à la guitare.',
                    correct: false,
                    feedback: 'Instruments take de: jouer de la guitare.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léo',
                text: 'Moi aussi ! Tu fais du sport ?',
                translation: 'Me too! Do you do sport?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, je fais du yoga.', correct: true },
                  {
                    text: 'Oui, je joue du yoga.',
                    correct: false,
                    feedback: 'Activities like yoga take faire: je fais du yoga.',
                  },
                  {
                    text: 'Oui, je fais le yoga.',
                    correct: false,
                    feedback: 'After faire say du or de la: faire du yoga.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léo',
                text: 'Super ! Moi, j’adore le football.',
                translation: 'Great! I love football.',
              },
            ],
          },
          {
            id: 'not-cooking',
            title: 'Saying no politely',
            emoji: '🧑‍🍳',
            setting: 'Sophie asks about your tastes.',
            turns: [
              {
                kind: 'npc',
                who: 'Sophie',
                text: 'Tu aimes cuisiner ?',
                translation: 'Do you like cooking?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Non, je n’aime pas cuisiner.', correct: true },
                  {
                    text: 'Non, je ne aime pas cuisiner.',
                    correct: false,
                    feedback: 'Before a vowel ne becomes n’: je n’aime pas.',
                  },
                  {
                    text: 'Non, je n’aime cuisiner.',
                    correct: false,
                    feedback: 'A negative sentence needs two parts: ne … pas.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Sophie',
                text: 'Moi non plus ! Qu’est-ce que tu préfères ?',
                translation: 'Me neither! What do you prefer?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je préfère danser.', correct: true },
                  {
                    text: 'Je préfères danser.',
                    correct: false,
                    feedback: 'With je the verb has no -s: je préfère.',
                  },
                  {
                    text: 'Je préférer danser.',
                    correct: false,
                    feedback:
                      'Conjugate the verb: je préfère. Only the second verb stays in the infinitive.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Sophie',
                text: 'Moi aussi, j’adore danser !',
                translation: 'Me too, I love dancing!',
              },
            ],
          },
          {
            id: 'weekend',
            title: 'The weekend',
            emoji: '🗓️',
            setting: 'Marc asks about your plans. Answer with jouer or faire.',
            turns: [
              {
                kind: 'npc',
                who: 'Marc',
                text: 'Qu’est-ce que tu fais le week-end ?',
                translation: 'What do you do at the weekend?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je joue aux cartes.', correct: true },
                  {
                    text: 'Je fais aux cartes.',
                    correct: false,
                    feedback: 'Games take jouer à: jouer aux cartes.',
                  },
                  {
                    text: 'Je joue des cartes.',
                    correct: false,
                    feedback: 'For a game say à, not de: jouer aux cartes.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marc',
                text: 'Moi, je fais de la randonnée. Tu aimes ça ?',
                translation: 'I go hiking. Do you like that?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, j’aime beaucoup !', correct: true },
                  {
                    text: 'Oui, je aime beaucoup !',
                    correct: false,
                    feedback: 'Je becomes j’ before aime.',
                  },
                  {
                    text: 'Oui, j’aimes beaucoup !',
                    correct: false,
                    feedback: 'With je the verb is aime, without -s.',
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
        title: 'Hobbies blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'hobbies', 'fr-jouer-faire'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“J’aime le chocolat” means “I like chocolate”.', isTrue: true },
          {
            id: 'b2',
            text: '“Je joue du football” is correct.',
            isTrue: false,
            explanation: 'Games take jouer à: je joue au football.',
          },
          { id: 'b3', text: '“Elle fait de la natation” is correct.', isTrue: true },
          {
            id: 'b4',
            text: '“Je ne aime pas” is correct.',
            isTrue: false,
            explanation: 'Ne becomes n’ before a vowel: je n’aime pas.',
          },
          { id: 'b5', text: '“Nous faisons” is the nous form of faire.', isTrue: true },
          { id: 'b6', text: '“Il joue de la guitare” is about an instrument.', isTrue: true },
          { id: 'b7', text: '“Moi aussi !” means “me too!”.', isTrue: true },
          {
            id: 'b8',
            text: '“Je déteste” means “I love”.',
            isTrue: false,
            explanation: 'Détester means to hate. Adorer means to love.',
          },
          { id: 'b9', text: '“Ils font du sport” is correct.', isTrue: true },
          { id: 'b10', text: '“Pas du tout” means “not at all”.', isTrue: true },
          {
            id: 'b11',
            text: '“Je n’ai pas un frère” is the negative of “J’ai un frère”.',
            isTrue: false,
            explanation: 'After pas, un becomes de: je n’ai pas de frère.',
          },
          { id: 'b12', text: '“Tu fais” and “je fais” are spelled the same.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'hobbies'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which sentence says you do not like swimming?',
            options: [
              'Je n’aime pas nager.',
              'Je ne aime pas nager.',
              'Je pas aime nager.',
              'J’aime pas ne nager.',
            ],
            answer: 'Je n’aime pas nager.',
            lesson: 'fr-negation',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Nous ___ du sport.”',
            options: ['faisons', 'faites', 'font', 'fait'],
            answer: 'faisons',
            lesson: 'fr-jouer-faire',
          },
          {
            id: 'c3',
            prompt: 'Complete: “Elle joue ___ basket.”',
            options: ['au', 'du', 'à la', 'de'],
            answer: 'au',
            lesson: 'fr-jouer-faire',
          },
          {
            id: 'c4',
            prompt: 'Complete: “Il joue ___ piano.”',
            options: ['du', 'au', 'de la', 'à la'],
            answer: 'du',
            lesson: 'fr-jouer-faire',
          },
          {
            id: 'c5',
            prompt: 'Which sentence can you answer with “Moi non plus !”?',
            options: [
              'Je n’aime pas le café.',
              'J’adore le café.',
              'Qu’est-ce que tu aimes ?',
              'Je fais du sport.',
            ],
            answer: 'Je n’aime pas le café.',
            lesson: 'fr-negation',
          },
          {
            id: 'c6',
            prompt: 'Complete: “J’aime ___ chats.”',
            options: ['les', 'des', 'le', 'de'],
            answer: 'les',
            lesson: 'fr-likes',
          },
          {
            id: 'c7',
            prompt: '“Qu’est-ce que tu fais le week-end ?” means …',
            options: [
              'What do you do at the weekend?',
              'What do you like?',
              'Do you like sport?',
              'Where do you live?',
            ],
            answer: 'What do you do at the weekend?',
          },
          {
            id: 'c8',
            prompt: 'Complete: “Je n’ai pas ___ chat.”',
            options: ['de', 'un', 'le', 'du'],
            answer: 'de',
            lesson: 'fr-negation',
          },
        ],
      },
    ),
  ],
};
