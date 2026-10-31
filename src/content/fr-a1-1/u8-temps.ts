import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-temps';

const days = vocabList(U, 'Days', [
  ['lundi', 'Monday', '1️⃣'],
  ['mardi', 'Tuesday', '2️⃣'],
  ['mercredi', 'Wednesday', '3️⃣'],
  ['jeudi', 'Thursday', '4️⃣'],
  ['vendredi', 'Friday', '5️⃣'],
  ['samedi', 'Saturday', '6️⃣'],
  ['dimanche', 'Sunday', '7️⃣'],
  ['aujourd’hui', 'today', '📍'],
  ['demain', 'tomorrow', '⏭️'],
  ['hier', 'yesterday', '⏮️'],
]);

const months = vocabList(U, 'Months and seasons', [
  ['janvier', 'January', '🎆'],
  ['février', 'February', '💘'],
  ['mars', 'March', '🌷'],
  ['avril', 'April', '🐟'],
  ['mai', 'May', '💐'],
  ['juin', 'June', '🏖️'],
  ['juillet', 'July', '🎇'],
  ['août', 'August', '🏝️'],
  ['septembre', 'September', '🎒'],
  ['octobre', 'October', '🎃'],
  ['novembre', 'November', '🍂'],
  ['décembre', 'December', '🎄'],
  ['le printemps', 'spring', '🌸'],
  ['l’été', 'summer', '🌞'],
  ['l’automne', 'autumn', '🍁'],
  ['l’hiver', 'winter', '⛄'],
]);

const weather = vocabList(U, 'Time and weather', [
  ['Quelle heure est-il ?', 'What time is it?', '🕒'],
  ['À quelle heure ?', 'At what time?', '⏰'],
  ['midi', 'noon', '🕛'],
  ['minuit', 'midnight', '🌌'],
  ['Quel temps fait-il ?', 'What is the weather like?', '🌦️'],
  ['Il fait beau.', 'The weather is nice.', '☀️'],
  ['Il fait chaud.', 'It is hot.', '🥵'],
  ['Il fait froid.', 'It is cold.', '🥶'],
  ['Il pleut.', 'It is raining.', '🌧️'],
  ['Il neige.', 'It is snowing.', '❄️'],
  ['Il y a du vent.', 'It is windy.', '💨'],
  ['Il y a de l’orage.', 'There is a thunderstorm.', '⛈️'],
]);

const clothes = vocabList(U, 'Clothes and colours', [
  ['porter', 'to wear', '👚'],
  ['le pantalon', 'trousers', '👖'],
  ['la robe', 'dress', '👗'],
  ['le manteau', 'coat', '🧥'],
  ['le pull', 'jumper', '🧶'],
  ['la chemise', 'shirt', '👔'],
  ['les chaussures', 'shoes', '👟'],
  ['le parapluie', 'umbrella', '☂️'],
  ['l’écharpe', 'scarf', '🧣'],
  ['rouge', 'red', '🔴'],
  ['bleu', 'blue', '🔵'],
  ['vert', 'green', '🟢'],
  ['jaune', 'yellow', '🟡'],
  ['noir', 'black', '⚫'],
  ['blanc', 'white', '⚪'],
]);

const vocab = [...days, ...months, ...weather, ...clothes];

const pictureQuiz = byDe(
  vocab,
  'l’hiver',
  'le printemps',
  'l’été',
  'l’automne',
  'Il pleut.',
  'Il neige.',
  'Il fait chaud.',
  'Il y a du vent.',
);

/** [noun, bucket, English] for the ce / cet / cette / ces sort */
const SORT_CARDS: [string, 'ce' | 'cet' | 'cette' | 'ces', string][] = [
  ['pantalon', 'ce', 'trousers'],
  ['manteau', 'ce', 'coat'],
  ['pull', 'ce', 'jumper'],
  ['hiver', 'cet', 'winter'],
  ['été', 'cet', 'summer'],
  ['automne', 'cet', 'autumn'],
  ['après-midi', 'cet', 'afternoon'],
  ['robe', 'cette', 'dress'],
  ['chemise', 'cette', 'shirt'],
  ['écharpe', 'cette', 'scarf'],
  ['semaine', 'cette', 'week'],
  ['chaussures', 'ces', 'shoes'],
  ['pulls', 'ces', 'jumpers'],
  ['robes', 'ces', 'dresses'],
];

/** [adjective, bucket, English] for the before / after the noun sort */
const POSITION_CARDS: [string, 'before' | 'after', string][] = [
  ['petit', 'before', 'small'],
  ['grand', 'before', 'big, tall'],
  ['beau', 'before', 'beautiful'],
  ['joli', 'before', 'pretty'],
  ['jeune', 'before', 'young'],
  ['bon', 'before', 'good'],
  ['rouge', 'after', 'red'],
  ['bleu', 'after', 'blue'],
  ['noir', 'after', 'black'],
  ['blanc', 'after', 'white'],
  ['français', 'after', 'French'],
  ['sportif', 'after', 'sporty'],
];

const readRound = (time: string, style: 'formal' | 'informal') => ({
  id: `read-${style}-${time.replace(':', '')}`,
  time,
  mode: 'read' as const,
  style,
});
const setRound = (time: string, style: 'formal' | 'informal') => ({
  id: `set-${style}-${time.replace(':', '')}`,
  time,
  mode: 'set' as const,
  style,
});

export const temps: UnitContent = {
  unit: unitFr({
    id: U,
    order: 8,
    title: 'Jours, heure et météo',
    subtitle: 'Talk about days, the time, the weather and what people wear',
    emoji: '🌦️',
    goals: [
      'Name the days, the months and the seasons',
      'Tell the time and say when something happens',
      'Describe the weather and what you wear',
    ],
    grammar: [
      'ce, cet, cette, ces',
      'The near future: aller + infinitive',
      'Adjectives before and after the noun',
    ],
    vocabFields: ['Days', 'Months and seasons', 'Time and weather', 'Clothes and colours'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-days',
      'flashcards',
      {
        title: 'The days',
        description: 'Learn the days of the week, today, tomorrow and yesterday.',
        tags: ['vocabulary', 'weekdays'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(days),
    ),

    activity(
      U,
      'flash-months',
      'flashcards',
      {
        title: 'Months and seasons',
        description: 'The twelve months and the four seasons.',
        tags: ['vocabulary', 'weekdays'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(months),
    ),

    activity(
      U,
      'flash-weather',
      'flashcards',
      {
        title: 'Time and weather',
        description: 'Ask the time and describe the weather.',
        tags: ['vocabulary', 'time-clock', 'weather'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(weather),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'Season or weather?',
        description: 'Look at the picture and pick the season or the weather.',
        tags: ['vocabulary', 'weather'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, pictureQuiz, 4),
    ),

    activity(
      U,
      'listen-days',
      'listen',
      {
        title: 'Listen to the days',
        description: 'Listen to the day and pick its meaning.',
        tags: ['listening', 'weekdays'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(days, 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'),
        days.slice(0, 7),
      ),
    ),

    activity(
      U,
      'clock-time',
      'clock',
      {
        title: 'What time is it?',
        description: 'Read the clock and set the hands, in everyday and official time.',
        tags: ['vocabulary', 'time-clock'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        rounds: [
          readRound('07:30', 'informal'),
          readRound('09:15', 'informal'),
          readRound('10:45', 'informal'),
          readRound('14:20', 'informal'),
          readRound('18:50', 'informal'),
          readRound('13:30', 'formal'),
          readRound('20:15', 'formal'),
          setRound('02:30', 'informal'),
          setRound('06:15', 'informal'),
          setRound('16:40', 'formal'),
        ],
      },
    ),

    activity(
      U,
      'flash-clothes',
      'flashcards',
      {
        title: 'Clothes and colours',
        description: 'What people wear, and in which colour.',
        tags: ['vocabulary', 'clothing'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(clothes),
    ),

    activity(
      U,
      'gap-demonstratives',
      'gapfill',
      {
        title: 'This and these',
        description: 'Pick ce, cet, cette or ces.',
        tags: ['grammar', 'fr-demonstratives', 'clothing'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-demonstratives',
      },
      {
        items: [
          {
            id: 'd1',
            text: 'Je prends ___ pull.',
            answer: 'ce',
            options: ['ce', 'cet', 'cette', 'ces'],
            translation: 'I take this jumper.',
            explanation: 'Pull is masculine and starts with a consonant: ce pull.',
          },
          {
            id: 'd2',
            text: 'Elle aime ___ robe.',
            answer: 'cette',
            options: ['cette', 'ce', 'cet', 'ces'],
            translation: 'She likes this dress.',
            explanation: 'Robe is feminine: cette robe.',
          },
          {
            id: 'd3',
            text: '___ chaussures sont jaunes.',
            answer: 'Ces',
            options: ['Ces', 'Ce', 'Cet', 'Cette'],
            translation: 'These shoes are yellow.',
            explanation: 'Chaussures is plural: ces chaussures.',
          },
          {
            id: 'd4',
            text: '___ hiver, il neige.',
            answer: 'Cet',
            options: ['Cet', 'Ce', 'Cette', 'Ces'],
            translation: 'This winter it snows.',
            explanation: 'Hiver is masculine and starts with a vowel sound: cet hiver.',
          },
          {
            id: 'd5',
            text: 'Tu aimes ___ manteau ?',
            answer: 'ce',
            options: ['ce', 'cet', 'cette', 'ces'],
            translation: 'Do you like this coat?',
            explanation: 'Manteau is masculine and starts with a consonant: ce manteau.',
          },
          {
            id: 'd6',
            text: 'Quel temps fait-il ___ matin ?',
            answer: 'ce',
            options: ['ce', 'cet', 'cette', 'ces'],
            translation: 'What is the weather like this morning?',
            explanation: 'Matin is masculine: ce matin.',
          },
          {
            id: 'd7',
            text: 'Je cherche ___ écharpe.',
            answer: 'cette',
            options: ['cette', 'ce', 'cet', 'ces'],
            translation: 'I am looking for this scarf.',
            explanation: 'Écharpe is feminine, even though it starts with a vowel: cette écharpe.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-demonstratives',
      'sortit',
      {
        title: 'ce, cet, cette or ces?',
        description: 'Which word for “this” goes with the noun?',
        tags: ['grammar', 'fr-demonstratives', 'clothing'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-demonstratives',
      },
      {
        instruction: 'Which word for “this” goes with the noun?',
        buckets: [
          { id: 'ce', label: 'ce (masculine)', emoji: '🧥' },
          { id: 'cet', label: 'cet (vowel sound)', emoji: '⛄' },
          { id: 'cette', label: 'cette (feminine)', emoji: '👗' },
          { id: 'ces', label: 'ces (plural)', emoji: '👟' },
        ],
        items: SORT_CARDS.map(([text, bucket, translation], i) => ({
          id: `c${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-futur',
      'gapfill',
      {
        title: 'What is going to happen?',
        description: 'Use aller + infinitive to talk about tomorrow.',
        tags: ['grammar', 'fr-futur-proche', 'weather'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-futur-proche',
      },
      {
        items: [
          {
            id: 'f1',
            text: 'Demain, je ___ jouer au tennis.',
            answer: 'vais',
            options: ['vais', 'vas', 'va', 'allons'],
            translation: 'Tomorrow I am going to play tennis.',
            explanation: 'Aller with je is vais, then the infinitive: je vais jouer.',
          },
          {
            id: 'f2',
            text: 'En été, nous ___ voyager.',
            answer: 'allons',
            options: ['allons', 'allez', 'vont', 'vais'],
            translation: 'In summer we are going to travel.',
            explanation: 'Aller with nous is allons.',
          },
          {
            id: 'f3',
            text: 'Il ___ pleuvoir ce soir.',
            answer: 'va',
            options: ['va', 'vas', 'vais', 'vont'],
            translation: 'It is going to rain this evening.',
            explanation: 'Aller with il is va: il va pleuvoir.',
          },
          {
            id: 'f4',
            text: 'Ils ___ faire du ski en hiver.',
            answer: 'vont',
            options: ['vont', 'va', 'allons', 'allez'],
            translation: 'They are going to ski in winter.',
            explanation: 'Aller with ils is vont.',
          },
          {
            id: 'f5',
            text: 'Tu ___ porter ton manteau ?',
            answer: 'vas',
            options: ['vas', 'vais', 'va', 'vont'],
            translation: 'Are you going to wear your coat?',
            explanation: 'Aller with tu is vas.',
          },
          {
            id: 'f6',
            text: 'Vous ___ prendre le parapluie ?',
            answer: 'allez',
            options: ['allez', 'allons', 'vas', 'va'],
            translation: 'Are you going to take the umbrella?',
            explanation: 'Aller with vous is allez.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-position',
      'sortit',
      {
        title: 'Before or after the noun?',
        description: 'Where does the adjective go?',
        tags: ['grammar', 'fr-adjective-position', 'clothing'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-adjective-position',
      },
      {
        instruction: 'Does the adjective go before or after the noun?',
        buckets: [
          { id: 'before', label: 'before: un petit pull', emoji: '⬅️' },
          { id: 'after', label: 'after: un pull rouge', emoji: '➡️' },
        ],
        items: POSITION_CARDS.map(([text, bucket, translation], i) => ({
          id: `p${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'weekdays', 'weather'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'Today is Monday.',
            words: ['Aujourd’hui,', 'c’est', 'lundi.'],
            extra: ['mardi'],
          },
          {
            id: 's2',
            translation: 'It is half past two.',
            words: ['Il', 'est', 'deux', 'heures', 'et', 'demie.'],
            extra: ['quart'],
          },
          {
            id: 's3',
            translation: 'Tomorrow I am going to ski.',
            words: ['Demain,', 'je', 'vais', 'faire', 'du', 'ski.'],
            extra: ['vas'],
            lesson: 'fr-futur-proche',
          },
          {
            id: 's4',
            translation: 'I like this red dress.',
            words: ['J’aime', 'cette', 'robe', 'rouge.'],
            extra: ['ce'],
            lesson: 'fr-demonstratives',
          },
          {
            id: 's5',
            translation: 'In autumn it rains.',
            words: ['En', 'automne,', 'il', 'pleut.'],
            extra: ['neige'],
          },
          {
            id: 's6',
            translation: 'She wears a small black coat.',
            words: ['Elle', 'porte', 'un', 'petit', 'manteau', 'noir.'],
            extra: ['une'],
            lesson: 'fr-adjective-position',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-time',
      'spell',
      {
        title: 'Spell days, months and clothes',
        description: 'Unscramble and type the words. Accents are optional here.',
        tags: ['spelling', 'weekdays', 'clothing'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-mercredi',
            mode: 'unscramble',
            answer: 'mercredi',
            hint: 'Wednesday',
            emoji: '3️⃣',
            speak: 'mercredi',
          },
          {
            id: 'sp-septembre',
            mode: 'unscramble',
            answer: 'septembre',
            hint: 'September',
            emoji: '🎒',
            speak: 'septembre',
          },
          {
            id: 'sp-parapluie',
            mode: 'type',
            answer: 'parapluie',
            hint: 'umbrella',
            emoji: '☂️',
            speak: 'le parapluie',
          },
          {
            id: 'sp-echarpe',
            mode: 'type',
            answer: 'écharpe',
            hint: 'scarf',
            emoji: '🧣',
            speak: 'l’écharpe',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Weather, plans and shopping',
        description: 'Talk about the weather, make a plan and buy clothes.',
        tags: ['communication', 'weather', 'clothing'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'weather',
            title: 'What is the weather like?',
            emoji: '🌦️',
            setting: 'Your friend Léa calls you. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Allô ! Quel temps fait-il chez toi ?',
                translation: 'Hello! What is the weather like where you are?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il pleut et il fait froid.', correct: true },
                  {
                    text: 'Je pleut et je fais froid.',
                    correct: false,
                    feedback: 'The weather uses il: il pleut, il fait froid.',
                  },
                  {
                    text: 'Il fait pleut et froid.',
                    correct: false,
                    feedback: 'Il pleut is a phrase on its own. Say il pleut et il fait froid.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Ici, il fait beau ! Demain, je vais jouer au tennis. Et toi ?',
                translation:
                  'Here the weather is nice! Tomorrow I am going to play tennis. And you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Demain, je vais faire du ski.', correct: true },
                  {
                    text: 'Demain, je vais faites du ski.',
                    correct: false,
                    feedback: 'After aller the verb stays in the infinitive: je vais faire.',
                  },
                  {
                    text: 'Demain, je faire du ski.',
                    correct: false,
                    feedback: 'Use aller + infinitive: je vais faire du ski.',
                  },
                ],
              },
            ],
          },
          {
            id: 'plans',
            title: 'Making a plan',
            emoji: '⏰',
            setting: 'Your friend Tom wants to meet you on Saturday. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'On va au parc samedi ?',
                translation: 'Shall we go to the park on Saturday?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui ! À quelle heure ?', correct: true },
                  {
                    text: 'Oui ! Quelle heure est-il ?',
                    correct: false,
                    feedback: 'That asks for the time now. To ask when, say à quelle heure ?',
                  },
                  {
                    text: 'Oui ! Quel temps fait-il ?',
                    correct: false,
                    feedback: 'That asks about the weather, not about the time.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Tom',
                text: 'À trois heures et demie.',
                translation: 'At half past three.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'D’accord, à samedi !', correct: true },
                  {
                    text: 'Bon appétit, à samedi !',
                    correct: false,
                    feedback: 'Bon appétit is for a meal, not for a plan.',
                  },
                  {
                    text: 'Enchanté, à samedi !',
                    correct: false,
                    feedback: 'Tom is your friend: you do not say enchanté to him.',
                  },
                ],
              },
            ],
          },
          {
            id: 'shop',
            title: 'Buying clothes',
            emoji: '🧥',
            setting: 'You are in a clothes shop and talk to the shop assistant. Use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'La vendeuse',
                text: 'Bonjour, monsieur. Je peux vous aider ?',
                translation: 'Hello, sir. Can I help you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je cherche un manteau noir.', correct: true },
                  {
                    text: 'Je cherche un noir manteau.',
                    correct: false,
                    feedback: 'Colours go after the noun: un manteau noir.',
                  },
                  {
                    text: 'Je cherche une manteau noir.',
                    correct: false,
                    feedback: 'Manteau is masculine: un manteau.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La vendeuse',
                text: 'Voilà. Et ce pull bleu ? Il est très joli.',
                translation: 'Here you are. And this blue jumper? It is very pretty.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, je prends ce pull bleu.', correct: true },
                  {
                    text: 'Oui, je prends cette pull bleu.',
                    correct: false,
                    feedback: 'Pull is masculine: ce pull.',
                  },
                  {
                    text: 'Oui, je prends ces pull bleu.',
                    correct: false,
                    feedback: 'There is only one jumper, so ces (plural) does not fit.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La vendeuse',
                text: 'Très bien. Ça fait quarante euros.',
                translation: 'Very good. That is forty euros.',
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
        title: 'Weather and clothes blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'weather', 'clothing'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Lundi” is Monday.', isTrue: true },
          {
            id: 'b2',
            text: '“Mercredi” is Thursday.',
            isTrue: false,
            explanation: 'Mercredi is Wednesday. Thursday is jeudi.',
          },
          { id: 'b3', text: '“Il pleut” means “it is raining”.', isTrue: true },
          { id: 'b4', text: '“Cet hiver” is correct.', isTrue: true },
          {
            id: 'b5',
            text: '“Ce robe” is correct.',
            isTrue: false,
            explanation: 'Robe is feminine: cette robe.',
          },
          { id: 'b6', text: '“Ces chaussures” means “these shoes”.', isTrue: true },
          {
            id: 'b7',
            text: '“Midi” means “midnight”.',
            isTrue: false,
            explanation: 'Midi is noon. Midnight is minuit.',
          },
          { id: 'b8', text: '“Je vais jouer” says what you are going to do.', isTrue: true },
          {
            id: 'b9',
            text: '“Un rouge pull” is correct.',
            isTrue: false,
            explanation: 'Colours go after the noun: un pull rouge.',
          },
          { id: 'b10', text: '“Une petite robe” is correct.', isTrue: true },
          {
            id: 'b11',
            text: '“Il fait chaud” means “it is cold”.',
            isTrue: false,
            explanation: 'Il fait chaud is hot. Cold is il fait froid.',
          },
          {
            id: 'b12',
            text: 'French days and months start with a capital letter.',
            isTrue: false,
            explanation: 'They are written in lower case: lundi, janvier.',
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
        tags: ['vocabulary', 'grammar', 'weather'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “___ écharpe est blanche.”',
            options: ['Cette', 'Ce', 'Cet', 'Ces'],
            answer: 'Cette',
            lesson: 'fr-demonstratives',
          },
          {
            id: 'c2',
            prompt: 'Complete: “___ pantalon est bleu.”',
            options: ['Ce', 'Cet', 'Cette', 'Ces'],
            answer: 'Ce',
            lesson: 'fr-demonstratives',
          },
          {
            id: 'c3',
            prompt: 'Complete: “Demain, nous ___ voyager.”',
            options: ['allons', 'allez', 'vont', 'vais'],
            answer: 'allons',
            lesson: 'fr-futur-proche',
          },
          {
            id: 'c4',
            prompt: 'How do you say “a red jumper”?',
            options: ['un pull rouge', 'un rouge pull', 'rouge un pull', 'pull un rouge'],
            answer: 'un pull rouge',
            lesson: 'fr-adjective-position',
          },
          {
            id: 'c5',
            prompt: 'How do you say “a big coat”?',
            options: [
              'un grand manteau',
              'un manteau grand',
              'grand un manteau',
              'manteau un grand',
            ],
            answer: 'un grand manteau',
            lesson: 'fr-adjective-position',
          },
          {
            id: 'c6',
            prompt: '“Il est trois heures et demie” means …',
            options: [
              'It is half past three.',
              'It is a quarter past three.',
              'It is half past two.',
              'It is three o’clock.',
            ],
            answer: 'It is half past three.',
          },
          {
            id: 'c7',
            prompt: 'How do you ask about the weather?',
            options: [
              'Quel temps fait-il ?',
              'Quelle heure est-il ?',
              'À quelle heure ?',
              'Il fait beau ?',
            ],
            answer: 'Quel temps fait-il ?',
          },
          {
            id: 'c8',
            prompt: '“Hier” means …',
            options: ['yesterday', 'today', 'tomorrow', 'this morning'],
            answer: 'yesterday',
          },
        ],
      },
    ),
  ],
};
