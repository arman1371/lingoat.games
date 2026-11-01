import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { frTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-2-journee';

const morning = vocabList(U, 'Morning and evening', [
  ['se réveiller', 'to wake up', '⏰'],
  ['se lever', 'to get up', '🛏️'],
  ['se laver', 'to wash (yourself)', '🧼'],
  ['se doucher', 'to take a shower', '🚿'],
  ['se brosser les dents', 'to brush your teeth', '🪥'],
  ['s’habiller', 'to get dressed', '🧥'],
  ['se reposer', 'to rest', '😌'],
  ['se coucher', 'to go to bed', '🌙'],
  ['dormir', 'to sleep', '😴'],
  ['le réveil', 'alarm clock', '🔔'],
]);

const chores = vocabList(U, 'Daily activities', [
  ['travailler', 'to work', '💼'],
  ['aller au travail', 'to go to work', '🚌'],
  ['rentrer', 'to come home', '🏡'],
  ['faire les courses', 'to go shopping', '🛒'],
  ['faire le ménage', 'to do the housework', '🧹'],
  ['faire la cuisine', 'to cook', '🍳'],
  ['faire la vaisselle', 'to do the dishes', '🍽️'],
  ['faire la lessive', 'to do the laundry', '🧺'],
  ['regarder la télévision', 'to watch TV', '📺'],
  ['se promener', 'to go for a walk', '🚶'],
]);

const when = vocabList(U, 'Parts of the day', [
  ['le matin', 'in the morning', '🌅'],
  ['l’après-midi', 'in the afternoon', '☀️'],
  ['le soir', 'in the evening', '🌆'],
  ['la nuit', 'at night', '🌃'],
  ['la journée', 'the day', '📅'],
  ['tôt', 'early', '🐓'],
  ['tard', 'late', '🦉'],
  ['en retard', 'late, not on time', '🏃'],
  ['en avance', 'early, ahead of time', '⏱️'],
]);

const order = vocabList(U, 'How often, and in what order', [
  ['toujours', 'always', '♾️'],
  ['d’habitude', 'usually', '🔄'],
  ['souvent', 'often', '🔁'],
  ['parfois', 'sometimes', '🤷'],
  ['de temps en temps', 'from time to time', '🕰️'],
  ['rarement', 'rarely', '🐌'],
  ['ne … jamais', 'never', '🚫'],
  ['tous les jours', 'every day', '📆'],
  ['d’abord', 'first', '1️⃣'],
  ['ensuite', 'then, next', '2️⃣'],
  ['puis', 'then', '3️⃣'],
  ['enfin', 'finally', '🏁'],
  ['avant', 'before', '⏪'],
  ['après', 'after', '⏩'],
  ['vers', 'around (a time)', '🕖'],
  ['de … à …', 'from … to …', '↔️'],
]);

const vocab = [...morning, ...chores, ...when, ...order];

const pictureQuiz = byDe(
  vocab,
  'se doucher',
  'se brosser les dents',
  'dormir',
  'faire la cuisine',
  'faire la vaisselle',
  'faire les courses',
  'regarder la télévision',
  'faire la lessive',
);

const heard = byDe(
  vocab,
  'se lever',
  'se coucher',
  's’habiller',
  'rentrer',
  'faire les courses',
  'regarder la télévision',
  'faire le ménage',
  'se promener',
);

export const journee: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'Ma journée',
    subtitle: 'Describe your day: what you do, how often and in what order',
    emoji: '⏰',
    goals: [
      'Talk about your morning and evening routine',
      'Say how often you do something',
      'Put your day in order and give the time',
    ],
    grammar: [
      'Pronominal verbs: je me lève, il s’habille',
      'toujours, souvent, parfois, ne … jamais',
      'd’abord, ensuite, enfin; à, vers, de … à',
    ],
    vocabFields: [
      'Morning and evening',
      'Daily activities',
      'Parts of the day',
      'How often, and in what order',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-morning',
      'flashcards',
      {
        title: 'Morning and evening',
        description: 'The verbs of your daily routine, from waking up to going to bed.',
        tags: ['vocabulary', 'daily-routine'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(morning),
    ),

    activity(
      U,
      'flash-activities',
      'flashcards',
      {
        title: 'Daily activities',
        description: 'Work, housework and free time during the day.',
        tags: ['vocabulary', 'daily-routine', 'household'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(chores),
    ),

    activity(
      U,
      'flash-when',
      'flashcards',
      {
        title: 'Parts of the day',
        description: 'Morning, afternoon, evening, early and late.',
        tags: ['vocabulary', 'daily-routine', 'time-clock'],
        difficulty: 1,
        estMinutes: 2,
      },
      flashcards(when),
    ),

    activity(
      U,
      'flash-order',
      'flashcards',
      {
        title: 'How often and in what order',
        description: 'Always, never, first, then, finally.',
        tags: ['vocabulary', 'daily-routine'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(order),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'What are they doing?',
        description: 'Look at the picture and pick the activity.',
        tags: ['vocabulary', 'daily-routine'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, [...morning, ...chores], 4),
    ),

    activity(
      U,
      'listen-routine',
      'listen',
      {
        title: 'Listen to the routine',
        description: 'Listen to the verb and pick its meaning.',
        tags: ['listening', 'daily-routine'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(heard, [...morning, ...chores]),
    ),

    activity(
      U,
      'conj-pronominal',
      'conjugation',
      {
        title: 'Pronominal verbs',
        description: 'The little word before the verb changes with the person.',
        tags: ['grammar', 'fr-pronominal'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('lever-1', 'lever', 'to get up', ['je', 'tu', 'il/elle/on'], true),
          frTable('laver-1', 'laver', 'to wash (yourself)', ['nous', 'vous', 'ils/elles'], true),
          frTable('habiller-1', 'habiller', 'to get dressed', ['je', 'nous', 'ils/elles'], true),
          frTable('coucher-1', 'coucher', 'to go to bed', ['tu', 'il/elle/on', 'vous'], true),
          frTable('reveiller-1', 'réveiller', 'to wake up', ['je', 'tu', 'nous'], true),
        ],
      },
    ),

    activity(
      U,
      'gap-pronominal',
      'gapfill',
      {
        title: 'me, te, se, nous, vous',
        description: 'Pick the pronoun that goes with the subject.',
        tags: ['grammar', 'fr-pronominal', 'daily-routine'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-pronominal',
      },
      {
        items: [
          {
            id: 'p1',
            text: 'Je ___ lève à sept heures.',
            answer: 'me',
            options: ['me', 'te', 'se', 'nous'],
            translation: 'I get up at seven.',
            explanation: 'The pronoun matches the subject: je me lève.',
          },
          {
            id: 'p2',
            text: 'Tu ___ laves les mains ?',
            answer: 'te',
            options: ['te', 'me', 'se', 'vous'],
            translation: 'Do you wash your hands?',
            explanation: 'With tu the pronoun is te: tu te laves.',
          },
          {
            id: 'p3',
            text: 'Elle ___ brosse les dents.',
            answer: 'se',
            options: ['se', 'me', 'te', 'nous'],
            translation: 'She brushes her teeth.',
            explanation: 'With il, elle and on the pronoun is se: elle se brosse.',
          },
          {
            id: 'p4',
            text: 'Nous ___ couchons tard le samedi.',
            answer: 'nous',
            options: ['nous', 'vous', 'se', 'me'],
            translation: 'We go to bed late on Saturdays.',
            explanation: 'With nous the pronoun is nous too: nous nous couchons.',
          },
          {
            id: 'p5',
            text: 'Vous ___ reposez le dimanche ?',
            answer: 'vous',
            options: ['vous', 'nous', 'se', 'te'],
            translation: 'Do you rest on Sundays?',
            explanation: 'With vous the pronoun is vous: vous vous reposez.',
          },
          {
            id: 'p6',
            text: 'Les enfants ___ réveillent à sept heures.',
            answer: 'se',
            options: ['se', 'nous', 'vous', 'me'],
            translation: 'The children wake up at seven.',
            explanation: 'With ils and elles the pronoun is se: ils se réveillent.',
          },
          {
            id: 'p7',
            text: 'Je ___ en cinq minutes.',
            answer: 'm’habille',
            options: ['m’habille', 'me habille', 's’habille', 't’habille'],
            translation: 'I get dressed in five minutes.',
            explanation: 'Me becomes m’ before a vowel or a silent h: je m’habille.',
          },
          {
            id: 'p8',
            text: 'Il ne ___ lève jamais tôt.',
            answer: 'se',
            options: ['se', 'me', 'te', 'le'],
            translation: 'He never gets up early.',
            explanation: 'The pronoun stays right before the verb: il ne se lève jamais.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-frequency',
      'gapfill',
      {
        title: 'How often?',
        description: 'Choose the word that says how often, or use ne … jamais.',
        tags: ['grammar', 'fr-frequency', 'daily-routine'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-frequency',
      },
      {
        items: [
          {
            id: 'f1',
            text: 'Je me lève ___ à sept heures.',
            answer: 'toujours',
            options: ['toujours', 'jamais', 'rarement', 'parfois'],
            translation: 'I always get up at seven.',
            explanation: 'Toujours means always and goes right after the verb.',
          },
          {
            id: 'f2',
            text: 'Elle regarde ___ la télévision le soir.',
            answer: 'souvent',
            options: ['souvent', 'jamais', 'rarement', 'pas'],
            translation: 'She often watches TV in the evening.',
            explanation: 'Souvent means often and goes right after the verb.',
          },
          {
            id: 'f3',
            text: 'Nous ne dînons ___ avant huit heures.',
            answer: 'jamais',
            options: ['jamais', 'souvent', 'toujours', 'parfois'],
            translation: 'We never have dinner before eight.',
            explanation: 'Ne … jamais means never: jamais goes after the verb.',
          },
          {
            id: 'f4',
            text: 'Ils vont ___ au marché le samedi.',
            answer: 'parfois',
            options: ['parfois', 'jamais', 'pas', 'toujours'],
            translation: 'They sometimes go to the market on Saturday.',
            explanation: 'Parfois means sometimes.',
          },
          {
            id: 'f5',
            text: 'Je ne me promène ___ le dimanche matin.',
            answer: 'jamais',
            options: ['jamais', 'toujours', 'souvent', 'parfois'],
            translation: 'I never go for a walk on Sunday morning.',
            explanation:
              'Ne … jamais wraps the verb, with the pronoun inside: je ne me promène jamais.',
          },
          {
            id: 'f6',
            text: 'Il se brosse ___ les dents après le repas.',
            answer: 'toujours',
            options: ['toujours', 'jamais', 'rarement', 'pas'],
            translation: 'He always brushes his teeth after the meal.',
            explanation: 'Toujours goes right after the verb.',
          },
          {
            id: 'f7',
            text: 'Tu ne fais ___ la vaisselle !',
            answer: 'jamais',
            options: ['jamais', 'toujours', 'souvent', 'parfois'],
            translation: 'You never do the dishes!',
            explanation: 'Ne … jamais means never. Do not add pas.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-sequence',
      'gapfill',
      {
        title: 'First, then, finally',
        description: 'Put the day in order and give the time.',
        tags: ['grammar', 'fr-sequence', 'daily-routine', 'time-clock'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-sequence',
      },
      {
        items: [
          {
            id: 's1',
            text: '___, je me lève. Ensuite, je me douche.',
            answer: 'D’abord',
            options: ['D’abord', 'Enfin', 'Après', 'Vers'],
            translation: 'First I get up. Then I take a shower.',
            explanation: 'D’abord starts a sequence; ensuite is the next step.',
          },
          {
            id: 's2',
            text: 'Je me douche, ___ je m’habille.',
            answer: 'puis',
            options: ['puis', 'd’abord', 'avant', 'tôt'],
            translation: 'I take a shower, then I get dressed.',
            explanation: 'Puis and ensuite both mean then.',
          },
          {
            id: 's3',
            text: '___ le travail, je fais les courses.',
            answer: 'Après',
            options: ['Après', 'Avant', 'Vers', 'Enfin'],
            translation: 'After work I go shopping.',
            explanation: 'Après means after and comes before a noun.',
          },
          {
            id: 's4',
            text: 'Je prends mon café ___ le travail.',
            answer: 'avant',
            options: ['avant', 'après', 'enfin', 'vers'],
            translation: 'I have my coffee before work.',
            explanation: 'Avant means before and comes before a noun.',
          },
          {
            id: 's5',
            text: 'Je rentre ___ six heures et demie.',
            answer: 'vers',
            options: ['vers', 'de', 'en', 'sur'],
            translation: 'I come home around half past six.',
            explanation: 'Vers means around: it gives an approximate time.',
          },
          {
            id: 's6',
            text: 'Je travaille de neuf heures ___ dix-sept heures.',
            answer: 'à',
            options: ['à', 'vers', 'avant', 'après'],
            translation: 'I work from nine to five o’clock.',
            explanation: 'From … to … is de … à ….',
          },
          {
            id: 's7',
            text: 'D’abord je mange, ensuite je me repose et ___ je dors.',
            answer: 'enfin',
            options: ['enfin', 'd’abord', 'avant', 'tôt'],
            translation: 'First I eat, then I rest and finally I sleep.',
            explanation: 'Enfin closes a sequence.',
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
        tags: ['grammar', 'daily-routine'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I wake up at half past six.',
            words: ['Je', 'me', 'réveille', 'à', 'six', 'heures', 'et', 'demie.'],
            extra: ['te'],
            lesson: 'fr-pronominal',
          },
          {
            id: 's2',
            translation: 'She gets dressed quickly.',
            words: ['Elle', 's’habille', 'vite.'],
            extra: ['se'],
            lesson: 'fr-pronominal',
          },
          {
            id: 's3',
            translation: 'We never go to bed early.',
            words: ['Nous', 'ne', 'nous', 'couchons', 'jamais', 'tôt.'],
            extra: ['pas'],
            lesson: 'fr-frequency',
          },
          {
            id: 's4',
            translation: 'I always take a shower in the morning.',
            words: ['Je', 'me', 'douche', 'toujours', 'le', 'matin.'],
            extra: ['souvent'],
            lesson: 'fr-frequency',
          },
          {
            id: 's5',
            translation: 'First I get up, then I have breakfast.',
            words: [
              'D’abord,',
              'je',
              'me',
              'lève,',
              'ensuite',
              'je',
              'prends',
              'le',
              'petit-déjeuner.',
            ],
            extra: ['enfin'],
            lesson: 'fr-sequence',
          },
          {
            id: 's6',
            translation: 'After work he goes shopping.',
            words: ['Après', 'le', 'travail,', 'il', 'fait', 'les', 'courses.'],
            extra: ['avant'],
            lesson: 'fr-sequence',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-routine',
      'spell',
      {
        title: 'Spell the routine',
        description: 'Unscramble and type the words. Accents are optional here.',
        tags: ['spelling', 'daily-routine'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-toujours',
            mode: 'unscramble',
            answer: 'toujours',
            hint: 'always',
            emoji: '♾️',
            speak: 'toujours',
          },
          {
            id: 'sp-ensuite',
            mode: 'unscramble',
            answer: 'ensuite',
            hint: 'then, next',
            emoji: '2️⃣',
            speak: 'ensuite',
          },
          {
            id: 'sp-reveil',
            mode: 'type',
            answer: 'réveil',
            hint: 'alarm clock',
            emoji: '🔔',
            speak: 'le réveil',
          },
          {
            id: 'sp-apres-midi',
            mode: 'type',
            answer: 'après-midi',
            hint: 'afternoon (a hyphen and an accent)',
            emoji: '☀️',
            speak: 'l’après-midi',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Your day, in conversation',
        description: 'Talk about your routine with a friend, a teacher and a neighbour.',
        tags: ['communication', 'daily-routine'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'friend',
            title: 'A typical day',
            emoji: '🛏️',
            setting: 'Your new friend Hugo asks about your day. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Hugo',
                text: 'À quelle heure tu te lèves, d’habitude ?',
                translation: 'What time do you usually get up?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je me lève vers sept heures.', correct: true },
                  {
                    text: 'Je lève vers sept heures.',
                    correct: false,
                    feedback: 'Se lever is pronominal: you need the pronoun, je me lève.',
                  },
                  {
                    text: 'Je me levez vers sept heures.',
                    correct: false,
                    feedback: 'With je the verb ends in -e: je me lève.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Hugo',
                text: 'Et le soir, tu te couches tard ?',
                translation: 'And in the evening, do you go to bed late?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Non, je ne me couche jamais tard.', correct: true },
                  {
                    text: 'Non, je me couche jamais tard.',
                    correct: false,
                    feedback: 'Never needs two parts: ne … jamais. Add ne before the pronoun.',
                  },
                  {
                    text: 'Non, je ne couche jamais tard.',
                    correct: false,
                    feedback: 'Keep the pronoun: je ne me couche jamais.',
                  },
                ],
              },
            ],
          },
          {
            id: 'teacher',
            title: 'Describe your morning',
            emoji: '🚿',
            setting: 'Madame Roux, your French teacher, asks about your day. Use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Qu’est-ce que vous faites le matin ?',
                translation: 'What do you do in the morning?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'D’abord, je me lève. Ensuite, je prends mon petit-déjeuner.',
                    correct: true,
                  },
                  {
                    text: 'D’abord, je me lève. Enfin, je prends mon petit-déjeuner.',
                    correct: false,
                    feedback:
                      'Enfin means finally: it closes a list. Use ensuite for the second step.',
                  },
                  {
                    text: 'D’abord, je lève moi. Ensuite, je prends mon petit-déjeuner.',
                    correct: false,
                    feedback: 'The pronoun goes before the verb: je me lève.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Et vous travaillez de quelle heure à quelle heure ?',
                translation: 'And what hours do you work?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'De neuf heures à dix-sept heures.', correct: true },
                  {
                    text: 'De neuf heures vers dix-sept heures.',
                    correct: false,
                    feedback: 'A span is de … à …; vers means around.',
                  },
                  {
                    text: 'À neuf heures à dix-sept heures.',
                    correct: false,
                    feedback: 'From … to … is de … à …, not à … à ….',
                  },
                ],
              },
            ],
          },
          {
            id: 'sunday',
            title: 'What do you do on Sundays?',
            emoji: '📺',
            setting: 'Your friend Camille calls you on Sunday. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Tu fais quoi, le dimanche ?',
                translation: 'What do you do on Sundays?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je me repose et je regarde la télévision.', correct: true },
                  {
                    text: 'Je repose et je regarde la télévision.',
                    correct: false,
                    feedback: 'Se reposer is pronominal: je me repose.',
                  },
                  {
                    text: 'Je me reposes et je regarde la télévision.',
                    correct: false,
                    feedback: 'With je there is no -s: je me repose.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Moi, je fais toujours le ménage le dimanche matin !',
                translation: 'Me, I always do the housework on Sunday morning!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Pas moi ! Je ne fais jamais le ménage.', correct: true },
                  {
                    text: 'Pas moi ! Je ne fais pas jamais le ménage.',
                    correct: false,
                    feedback: 'Do not combine pas and jamais: ne … jamais is enough.',
                  },
                  {
                    text: 'Pas moi ! Je jamais fais le ménage.',
                    correct: false,
                    feedback: 'Jamais goes after the verb, with ne before it: je ne fais jamais.',
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
        title: 'Routine blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'daily-routine'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Se lever” means “to get up”.', isTrue: true },
          { id: 'b2', text: '“Je me lève” is correct.', isTrue: true },
          {
            id: 'b3',
            text: '“Je lève à sept heures” is correct for “I get up at seven”.',
            isTrue: false,
            explanation: 'Se lever needs its pronoun: je me lève.',
          },
          { id: 'b4', text: '“Nous nous couchons” is correct.', isTrue: true },
          {
            id: 'b5',
            text: '“Tu se laves” is correct.',
            isTrue: false,
            explanation: 'The pronoun matches the subject: tu te laves.',
          },
          { id: 'b6', text: '“Je m’habille” is correct.', isTrue: true },
          {
            id: 'b7',
            text: '“Toujours” means “never”.',
            isTrue: false,
            explanation: 'Toujours means always. Never is ne … jamais.',
          },
          {
            id: 'b8',
            text: '“Je ne mange jamais de viande” says that you sometimes eat meat.',
            isTrue: false,
            explanation: 'Ne … jamais means never.',
          },
          {
            id: 'b9',
            text: '“Je ne me couche pas jamais” is correct.',
            isTrue: false,
            explanation: 'Use ne … jamais without pas.',
          },
          { id: 'b10', text: '“Enfin” means “finally”.', isTrue: true },
          { id: 'b11', text: '“Vers huit heures” means “around eight o’clock”.', isTrue: true },
          {
            id: 'b12',
            text: '“Le soir” means “in the morning”.',
            isTrue: false,
            explanation: 'Le soir is the evening. The morning is le matin.',
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
        tags: ['vocabulary', 'grammar', 'daily-routine'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “Nous ___ couchons à onze heures.”',
            options: ['nous', 'vous', 'se', 'me'],
            answer: 'nous',
            lesson: 'fr-pronominal',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Elle ___ vite.”',
            options: ['s’habille', 'se habille', 'm’habille', 't’habille'],
            answer: 's’habille',
            lesson: 'fr-pronominal',
          },
          {
            id: 'c3',
            prompt: 'How do you say “I never get up early”?',
            options: [
              'Je ne me lève jamais tôt.',
              'Je me lève jamais tôt.',
              'Je ne me lève pas jamais tôt.',
              'Je jamais me lève tôt.',
            ],
            answer: 'Je ne me lève jamais tôt.',
            lesson: 'fr-frequency',
          },
          {
            id: 'c4',
            prompt: '“Souvent” means …',
            options: ['often', 'never', 'always', 'rarely'],
            answer: 'often',
          },
          {
            id: 'c5',
            prompt: 'Which word starts a sequence?',
            options: ['d’abord', 'enfin', 'ensuite', 'après'],
            answer: 'd’abord',
            lesson: 'fr-sequence',
          },
          {
            id: 'c6',
            prompt: '“Je rentre vers six heures” means …',
            options: [
              'I come home around six.',
              'I come home at six sharp.',
              'I come home after six.',
              'I come home before six.',
            ],
            answer: 'I come home around six.',
            lesson: 'fr-sequence',
          },
          {
            id: 'c7',
            prompt: 'How do you say “from nine to five” (o’clock)?',
            options: [
              'de neuf heures à dix-sept heures',
              'à neuf heures de dix-sept heures',
              'vers neuf heures à dix-sept heures',
              'de neuf heures avant dix-sept heures',
            ],
            answer: 'de neuf heures à dix-sept heures',
            lesson: 'fr-sequence',
          },
          {
            id: 'c8',
            prompt: 'What does “faire la vaisselle” mean?',
            options: ['to do the dishes', 'to do the housework', 'to cook', 'to do the laundry'],
            answer: 'to do the dishes',
          },
        ],
      },
    ),
  ],
};
