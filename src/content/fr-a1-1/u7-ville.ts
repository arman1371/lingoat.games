import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { frTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-ville';

const places = vocabList(U, 'Places in town', [
  ['la boulangerie', 'bakery', '🥖'],
  ['la pharmacie', 'pharmacy', '💊'],
  ['la banque', 'bank', '🏦'],
  ['la poste', 'post office', '📮'],
  ['la gare', 'train station', '🚉'],
  ['l’hôpital', 'hospital', '🏥'],
  ['l’école', 'school', '🏫'],
  ['le supermarché', 'supermarket', '🏪'],
  ['le marché', 'market', '🧺'],
  ['la mairie', 'town hall', '🏛️'],
  ['la bibliothèque', 'library', '📚'],
  ['le musée', 'museum', '🖼️'],
  ['le parc', 'park', '🌳'],
  ['l’hôtel', 'hotel', '🏨'],
  ['l’église', 'church', '⛪'],
  ['la place', 'square', '⛲'],
]);

const where = vocabList(U, 'Where is it?', [
  ['dans', 'in', '📦'],
  ['sur', 'on', '🔝'],
  ['sous', 'under', '⬇️'],
  ['devant', 'in front of', '⏫'],
  ['derrière', 'behind', '⏪'],
  ['entre', 'between', '↔️'],
  ['à côté de', 'next to', '🤝'],
  ['en face de', 'opposite', '🔁'],
  ['près de', 'near', '📍'],
  ['loin de', 'far from', '🏔️'],
  ['à gauche', 'on the left', '⬅️'],
  ['à droite', 'on the right', '➡️'],
  ['tout droit', 'straight on', '⬆️'],
]);

const route = vocabList(U, 'Asking the way', [
  ['aller', 'to go', '🚶'],
  ['tourner', 'to turn', '↪️'],
  ['traverser', 'to cross', '🚸'],
  ['continuer', 'to continue', '⏩'],
  ['chercher', 'to look for', '🔍'],
  ['la première rue', 'the first street', '1️⃣'],
  ['la deuxième rue', 'the second street', '2️⃣'],
  ['Où est la gare ?', 'Where is the station?', '❓'],
  ['Pour aller à la poste ?', 'How do I get to the post office?', '🧭'],
  ['Je cherche la banque.', 'I am looking for the bank.', '👀'],
  ['C’est loin ?', 'Is it far?', '📏'],
  ['C’est à cinq minutes.', 'It is five minutes away.', '⏱️'],
  ['Allez tout droit.', 'Go straight on.', '👆'],
  ['Tournez à gauche.', 'Turn left.', '👈'],
  ['Merci, c’est gentil !', 'Thank you, that is kind!', '🙏'],
]);

const vocab = [...places, ...where, ...route];
const words = route.slice(0, 7);
const phrases = route.slice(7);

const pictureQuiz = byDe(
  vocab,
  'la banque',
  'la pharmacie',
  'la gare',
  'l’hôpital',
  'l’école',
  'le musée',
  'le parc',
  'l’église',
);

/** [noun, bucket, English] for the au / à la / à l’ / aux sort */
const SORT_CARDS: [string, 'au' | 'a-la' | 'a-l' | 'aux', string][] = [
  ['musée', 'au', 'museum'],
  ['parc', 'au', 'park'],
  ['supermarché', 'au', 'supermarket'],
  ['marché', 'au', 'market'],
  ['banque', 'a-la', 'bank'],
  ['poste', 'a-la', 'post office'],
  ['gare', 'a-la', 'station'],
  ['mairie', 'a-la', 'town hall'],
  ['école', 'a-l', 'school'],
  ['hôpital', 'a-l', 'hospital'],
  ['hôtel', 'a-l', 'hotel'],
  ['église', 'a-l', 'church'],
  ['magasins', 'aux', 'shops'],
  ['toilettes', 'aux', 'toilets'],
];

export const ville: UnitContent = {
  unit: unitFr({
    id: U,
    order: 7,
    title: 'En ville',
    subtitle: 'Name places, ask the way and understand a simple route',
    emoji: '🏙️',
    goals: [
      'Name the places in a town',
      'Say where something is and where you are going',
      'Ask the way and understand directions',
    ],
    grammar: [
      'à + article: au, à la, à l’, aux',
      'Prepositions of place',
      'aller',
      'The imperative',
    ],
    vocabFields: ['Places in town', 'Where is it?', 'Asking the way'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-places',
      'flashcards',
      {
        title: 'Places in town',
        description: 'Learn the places with le, la or l’.',
        tags: ['vocabulary', 'city-directions'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(places),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'Which place is this?',
        description: 'Look at the picture and pick the place.',
        tags: ['vocabulary', 'city-directions'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, pictureQuiz, 4),
    ),

    activity(
      U,
      'listen-places',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the place and pick its meaning.',
        tags: ['listening', 'city-directions'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'la gare',
          'la banque',
          'la poste',
          'le musée',
          'le parc',
          'la mairie',
          'l’hôtel',
          'l’église',
        ),
        places,
      ),
    ),

    activity(
      U,
      'flash-prepositions',
      'flashcards',
      {
        title: 'Where is it?',
        description: 'Prepositions of place and the words for left, right and straight on.',
        tags: ['vocabulary', 'city-directions'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(where),
    ),

    activity(
      U,
      'gap-prepositions',
      'gapfill',
      {
        title: 'Where is it?',
        description: 'Pick the preposition that says where things are.',
        tags: ['grammar', 'fr-place-prepositions', 'city-directions'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-place-prepositions',
      },
      {
        items: [
          {
            id: 'w1',
            text: 'La banque est ___ la poste et la pharmacie.',
            answer: 'entre',
            options: ['entre', 'dans', 'sur', 'devant'],
            translation: 'The bank is between the post office and the pharmacy.',
            explanation: 'Entre goes with two places.',
          },
          {
            id: 'w2',
            text: 'Le parc est ___ l’école.',
            answer: 'à côté de',
            options: ['à côté de', 'dans', 'sur', 'sous'],
            translation: 'The park is next to the school.',
            explanation: 'À côté de ends in de: à côté de l’école.',
          },
          {
            id: 'w3',
            text: 'La pharmacie est ___ la gare.',
            answer: 'en face de',
            options: ['en face de', 'entre', 'sous', 'sur'],
            translation: 'The pharmacy is opposite the station.',
            explanation: 'En face de means opposite.',
          },
          {
            id: 'w4',
            text: 'Il y a un taxi ___ l’hôtel.',
            answer: 'devant',
            options: ['devant', 'derrière', 'sous', 'entre'],
            translation: 'There is a taxi in front of the hotel.',
            explanation: 'Devant takes the noun directly.',
          },
          {
            id: 'w5',
            text: 'Le musée est ___ la gare, à dix kilomètres.',
            answer: 'loin de',
            options: ['loin de', 'près de', 'sous', 'entre'],
            translation: 'The museum is far from the station, ten kilometres away.',
            explanation: 'Loin de means far from.',
          },
          {
            id: 'w6',
            text: 'Le livre est ___ la table.',
            answer: 'sur',
            options: ['sur', 'sous', 'dans', 'devant'],
            translation: 'The book is on the table.',
            explanation: 'Sur means on.',
          },
          {
            id: 'w7',
            text: 'Le sac est ___ la chaise.',
            answer: 'sous',
            options: ['sous', 'sur', 'entre', 'loin de'],
            translation: 'The bag is under the chair.',
            explanation: 'Sous means under.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-contractions',
      'sortit',
      {
        title: 'au, à la, à l’ or aux?',
        description: 'Which form of “to the” goes with the place?',
        tags: ['grammar', 'fr-contractions', 'city-directions'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-contractions',
      },
      {
        instruction: 'Which form of “to the” goes with the place?',
        buckets: [
          { id: 'au', label: 'au (le)', emoji: '🖼️' },
          { id: 'a-la', label: 'à la', emoji: '🏦' },
          { id: 'a-l', label: 'à l’ (vowel)', emoji: '🏫' },
          { id: 'aux', label: 'aux (plural)', emoji: '🛍️' },
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
      'gap-contractions',
      'gapfill',
      {
        title: 'Going to, near to',
        description: 'à and de merge with le and les: au, aux, du, des.',
        tags: ['grammar', 'fr-contractions', 'fr-aller', 'city-directions'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-contractions',
      },
      {
        items: [
          {
            id: 'a1',
            text: 'Je vais ___ banque.',
            answer: 'à la',
            options: ['à la', 'au', 'à l’', 'aux'],
            translation: 'I am going to the bank.',
            explanation: 'Banque is feminine: à la banque.',
          },
          {
            id: 'a2',
            text: 'Nous allons ___ musée.',
            answer: 'au',
            options: ['au', 'à la', 'à l’', 'aux'],
            translation: 'We are going to the museum.',
            explanation: 'À + le = au.',
          },
          {
            id: 'a3',
            text: 'Elle va ___ école.',
            answer: 'à l’',
            options: ['à l’', 'au', 'à la', 'aux'],
            translation: 'She is going to school.',
            explanation: 'Before a vowel la and le become l’: à l’école.',
          },
          {
            id: 'a4',
            text: 'Ils vont ___ magasins.',
            answer: 'aux',
            options: ['aux', 'au', 'à la', 'à l’'],
            translation: 'They are going to the shops.',
            explanation: 'À + les = aux.',
          },
          {
            id: 'a5',
            text: 'Tu vas ___ marché ?',
            answer: 'au',
            options: ['au', 'à la', 'à l’', 'aux'],
            translation: 'Are you going to the market?',
            explanation: 'Marché is masculine: au marché.',
          },
          {
            id: 'a6',
            text: 'Vous allez ___ gare ?',
            answer: 'à la',
            options: ['à la', 'au', 'à l’', 'aux'],
            translation: 'Are you going to the station?',
            explanation: 'Gare is feminine: à la gare.',
          },
          {
            id: 'a7',
            text: 'Il habite près ___ parc.',
            answer: 'du',
            options: ['du', 'de la', 'de l’', 'des'],
            translation: 'He lives near the park.',
            explanation: 'De + le = du: près du parc.',
          },
          {
            id: 'a8',
            text: 'La banque est en face ___ hôtel.',
            answer: 'de l’',
            options: ['de l’', 'du', 'de la', 'des'],
            translation: 'The bank is opposite the hotel.',
            explanation: 'Before a vowel: de l’hôtel.',
          },
        ],
      },
    ),

    activity(
      U,
      'conj-aller',
      'conjugation',
      {
        title: 'aller and the verbs of the route',
        description: 'Aller is irregular. Traverser, tourner and continuer are regular -er verbs.',
        tags: ['grammar', 'fr-aller'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('aller-1', 'aller', 'to go', ['je', 'tu', 'il/elle/on']),
          frTable('aller-2', 'aller', 'to go', ['nous', 'vous', 'ils/elles']),
          frTable('traverser-1', 'traverser', 'to cross', ['je', 'tu', 'il/elle/on']),
          frTable('continuer-1', 'continuer', 'to continue', ['nous', 'vous', 'ils/elles']),
          frTable('tourner-1', 'tourner', 'to turn', ['je', 'nous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-imperative',
      'gapfill',
      {
        title: 'Give directions',
        description: 'The imperative: tournez, traverse, va.',
        tags: ['grammar', 'fr-imperative', 'city-directions'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-imperative',
      },
      {
        items: [
          {
            id: 'i1',
            text: 'Pour aller à la gare, ___ tout droit, madame.',
            answer: 'allez',
            options: ['allez', 'va', 'vas', 'vont'],
            translation: 'To get to the station, go straight on, madam.',
            explanation: 'With vous the imperative is allez.',
          },
          {
            id: 'i2',
            text: '___ à gauche à la poste, monsieur !',
            answer: 'Tournez',
            options: ['Tournez', 'Tourne', 'Tournes', 'Tourner'],
            translation: 'Turn left at the post office, sir!',
            explanation: 'With vous the imperative ends in -ez.',
          },
          {
            id: 'i3',
            text: '___ la rue, Léa !',
            answer: 'Traverse',
            options: ['Traverse', 'Traverses', 'Traversez', 'Traversons'],
            translation: 'Cross the street, Léa!',
            explanation: 'With tu, -er verbs lose the -s: traverse.',
          },
          {
            id: 'i4',
            text: '___ à droite, s’il te plaît.',
            answer: 'Tourne',
            options: ['Tourne', 'Tournez', 'Tournes', 'Tourner'],
            translation: 'Turn right, please.',
            explanation: 'S’il te plaît goes with tu: tourne, without -s.',
          },
          {
            id: 'i5',
            text: '___ tout droit, Tom !',
            answer: 'Va',
            options: ['Va', 'Vas', 'Allez', 'Allons'],
            translation: 'Go straight on, Tom!',
            explanation: 'Aller is va for tu, without -s.',
          },
          {
            id: 'i6',
            text: 'Pour aller au musée, ___ la première rue à gauche.',
            answer: 'prenez',
            options: ['prenez', 'prends', 'prend', 'prenons'],
            translation: 'To get to the museum, take the first street on the left.',
            explanation: 'With vous the imperative is prenez.',
          },
        ],
      },
    ),

    activity(
      U,
      'quiz-route',
      'quiz',
      {
        title: 'Understand the directions',
        description: 'Read the directions and pick what they mean.',
        tags: ['communication', 'city-directions'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        questions: [
          {
            id: 'r1',
            prompt: 'Allez tout droit, puis tournez à gauche.',
            options: [
              'Go straight on, then turn left.',
              'Go straight on, then turn right.',
              'Turn left, then go straight on.',
              'Cross the street, then turn left.',
            ],
            answer: 'Go straight on, then turn left.',
            speak: 'Allez tout droit, puis tournez à gauche.',
          },
          {
            id: 'r2',
            prompt: 'Prenez la deuxième rue à droite.',
            options: [
              'Take the second street on the right.',
              'Take the first street on the right.',
              'Take the second street on the left.',
              'Take the second street straight on.',
            ],
            answer: 'Take the second street on the right.',
            speak: 'Prenez la deuxième rue à droite.',
          },
          {
            id: 'r3',
            prompt: 'Traversez la place : la banque est en face.',
            options: [
              'Cross the square: the bank is opposite.',
              'Cross the square: the bank is behind you.',
              'Turn left at the square: the bank is next door.',
              'The bank is far from the square.',
            ],
            answer: 'Cross the square: the bank is opposite.',
            speak: 'Traversez la place : la banque est en face.',
          },
          {
            id: 'r4',
            prompt: 'La gare est près de la mairie.',
            options: [
              'The station is near the town hall.',
              'The station is far from the town hall.',
              'The station is behind the town hall.',
              'The station is in the town hall.',
            ],
            answer: 'The station is near the town hall.',
            speak: 'La gare est près de la mairie.',
          },
          {
            id: 'r5',
            prompt: 'C’est à cinq minutes.',
            options: [
              'It is five minutes away.',
              'It is five kilometres away.',
              'It is at five o’clock.',
              'It is the fifth street.',
            ],
            answer: 'It is five minutes away.',
            speak: 'C’est à cinq minutes.',
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
        tags: ['grammar', 'city-directions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'The station is near the bank.',
            words: ['La', 'gare', 'est', 'près', 'de', 'la', 'banque.'],
            extra: ['du'],
            lesson: 'fr-place-prepositions',
          },
          {
            id: 's2',
            translation: 'I am going to the museum.',
            words: ['Je', 'vais', 'au', 'musée.'],
            extra: ['à la'],
            lesson: 'fr-contractions',
          },
          {
            id: 's3',
            translation: 'Turn left.',
            words: ['Tournez', 'à', 'gauche.'],
            extra: ['droite'],
            lesson: 'fr-imperative',
          },
          {
            id: 's4',
            translation: 'Where is the post office?',
            words: ['Où', 'est', 'la', 'poste ?'],
            extra: ['le'],
            lesson: 'fr-questions',
          },
          {
            id: 's5',
            translation: 'The school is opposite the park.',
            words: ['L’école', 'est', 'en', 'face', 'du', 'parc.'],
            extra: ['de la'],
            lesson: 'fr-contractions',
          },
          {
            id: 's6',
            translation: 'We go to the market.',
            words: ['Nous', 'allons', 'au', 'marché.'],
            extra: ['allez'],
            lesson: 'fr-aller',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-places',
      'spell',
      {
        title: 'Spell the places',
        description: 'Unscramble and type places in town. Accents are optional here.',
        tags: ['spelling', 'city-directions'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-pharmacie',
            mode: 'unscramble',
            answer: 'pharmacie',
            hint: 'pharmacy',
            emoji: '💊',
            speak: 'la pharmacie',
          },
          {
            id: 'sp-bibliotheque',
            mode: 'unscramble',
            answer: 'bibliothèque',
            hint: 'library',
            emoji: '📚',
            speak: 'la bibliothèque',
          },
          {
            id: 'sp-boulangerie',
            mode: 'type',
            answer: 'boulangerie',
            hint: 'bakery',
            emoji: '🥖',
            speak: 'la boulangerie',
          },
          {
            id: 'sp-eglise',
            mode: 'type',
            answer: 'église',
            hint: 'church',
            emoji: '⛪',
            speak: 'l’église',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Asking the way',
        description: 'The verbs and phrases you need to find your way.',
        tags: ['vocabulary', 'city-directions'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards([...words, ...phrases]),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Ask the way',
        description: 'Find the station, the bank and the museum.',
        tags: ['communication', 'city-directions'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'station',
            title: 'Looking for the station',
            emoji: '🚉',
            setting: 'You stop a woman in the street. Use vous.',
            turns: [
              {
                kind: 'you',
                options: [
                  { text: 'Excusez-moi, madame. Où est la gare ?', correct: true },
                  {
                    text: 'Excusez-moi, madame. Où est le gare ?',
                    correct: false,
                    feedback: 'Gare is feminine: la gare.',
                  },
                  {
                    text: 'Excusez-moi, madame. Je vais la gare ?',
                    correct: false,
                    feedback: 'To ask where something is, say où est … ?',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La passante',
                text: 'Allez tout droit, puis tournez à gauche.',
                translation: 'Go straight on, then turn left.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'C’est loin ?', correct: true },
                  {
                    text: 'C’est bon appétit ?',
                    correct: false,
                    feedback: 'To ask about the distance, say c’est loin ?',
                  },
                  {
                    text: 'Je suis loin ?',
                    correct: false,
                    feedback: 'You ask about the place, not about yourself: c’est loin ?',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La passante',
                text: 'Non, c’est à cinq minutes.',
                translation: 'No, it is five minutes away.',
              },
            ],
          },
          {
            id: 'bank',
            title: 'Looking for the bank',
            emoji: '🏦',
            setting: 'You are in front of the town hall and look for the bank. Use vous.',
            turns: [
              {
                kind: 'you',
                options: [
                  { text: 'Pour aller à la banque, s’il vous plaît ?', correct: true },
                  {
                    text: 'Pour aller au banque, s’il vous plaît ?',
                    correct: false,
                    feedback: 'Banque is feminine: à la banque, not au banque.',
                  },
                  {
                    text: 'Pour aller à les banque, s’il vous plaît ?',
                    correct: false,
                    feedback: 'There is only one bank: à la banque.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Un passant',
                text: 'Traversez la place. La banque est en face de la poste.',
                translation: 'Cross the square. The bank is opposite the post office.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Merci, c’est gentil !', correct: true },
                  {
                    text: 'Bon appétit !',
                    correct: false,
                    feedback: 'Bon appétit is for a meal. Here you thank the person.',
                  },
                  {
                    text: 'Je cherche la banque.',
                    correct: false,
                    feedback: 'You already asked. Now thank the person: merci, c’est gentil !',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Un passant',
                text: 'De rien. Bonne journée !',
                translation: 'You are welcome. Have a nice day!',
              },
            ],
          },
          {
            id: 'museum',
            title: 'A friend asks you',
            emoji: '🖼️',
            setting: 'Your friend Léa knows the town. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Tu vas où, aujourd’hui ?',
                translation: 'Where are you going today?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je vais au musée.', correct: true },
                  {
                    text: 'Je vais à le musée.',
                    correct: false,
                    feedback: 'À + le merges into au: au musée.',
                  },
                  {
                    text: 'Je vas au musée.',
                    correct: false,
                    feedback: 'Aller: je vais, tu vas.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Super ! Traverse le parc, le musée est à côté de la mairie.',
                translation: 'Great! Cross the park, the museum is next to the town hall.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'D’accord, merci !', correct: true },
                  {
                    text: 'Enchanté !',
                    correct: false,
                    feedback: 'You say enchanté when you meet someone.',
                  },
                  {
                    text: 'Au revoir, madame !',
                    correct: false,
                    feedback: 'Léa is your friend and you say tu: au revoir would end the chat.',
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
        title: 'City blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'city-directions', 'fr-contractions'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Je vais au musée” is correct.', isTrue: true },
          {
            id: 'b2',
            text: '“Je vais à le musée” is correct.',
            isTrue: false,
            explanation: 'À + le merges into au: au musée.',
          },
          { id: 'b3', text: '“À la gare” is correct, because gare is feminine.', isTrue: true },
          { id: 'b4', text: '“Aux magasins” is the plural: to the shops.', isTrue: true },
          { id: 'b5', text: '“Tournez à gauche” means “turn left”.', isTrue: true },
          {
            id: 'b6',
            text: '“Tout droit” means “on the right”.',
            isTrue: false,
            explanation: 'Tout droit means straight on. On the right is à droite.',
          },
          { id: 'b7', text: '“Près du parc” means “near the park”.', isTrue: true },
          {
            id: 'b8',
            text: '“Nous allez” is correct.',
            isTrue: false,
            explanation: 'Nous allons, vous allez.',
          },
          { id: 'b9', text: '“Va tout droit” is the tu imperative of aller.', isTrue: true },
          { id: 'b10', text: '“En face de” means “opposite”.', isTrue: true },
          {
            id: 'b11',
            text: '“Sous” means “on”.',
            isTrue: false,
            explanation: 'Sous means under. On is sur.',
          },
          { id: 'b12', text: '“La mairie” is the town hall.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'city-directions'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “Je vais ___ gare.”',
            options: ['à la', 'au', 'à l’', 'aux'],
            answer: 'à la',
            lesson: 'fr-contractions',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Nous allons ___ musée.”',
            options: ['au', 'à la', 'à l’', 'aux'],
            answer: 'au',
            lesson: 'fr-contractions',
          },
          {
            id: 'c3',
            prompt: 'Complete: “Le parc est près ___ école.”',
            options: ['de l’', 'du', 'de la', 'des'],
            answer: 'de l’',
            lesson: 'fr-contractions',
          },
          {
            id: 'c4',
            prompt: 'Complete (tu): “___ la rue !”',
            options: ['Traverse', 'Traverses', 'Traversez', 'Traverser'],
            answer: 'Traverse',
            lesson: 'fr-imperative',
          },
          {
            id: 'c5',
            prompt: 'Complete: “Vous ___ à la poste ?”',
            options: ['allez', 'allons', 'vas', 'vont'],
            answer: 'allez',
            lesson: 'fr-aller',
          },
          {
            id: 'c6',
            prompt: 'How do you ask the way to the station?',
            options: [
              'Pour aller à la gare ?',
              'Où vas-tu la gare ?',
              'Je suis la gare ?',
              'La gare est où à ?',
            ],
            answer: 'Pour aller à la gare ?',
          },
          {
            id: 'c7',
            prompt: '“En face de la banque” means …',
            options: [
              'opposite the bank',
              'behind the bank',
              'next to the bank',
              'far from the bank',
            ],
            answer: 'opposite the bank',
          },
          {
            id: 'c8',
            prompt: 'Which sentence tells someone to turn right?',
            options: [
              'Tournez à droite.',
              'Tournez à gauche.',
              'Allez tout droit.',
              'Traversez la rue.',
            ],
            answer: 'Tournez à droite.',
          },
        ],
      },
    ),
  ],
};
