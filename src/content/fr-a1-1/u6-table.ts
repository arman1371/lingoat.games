import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { formatPrice } from '@/lib/german/numbers';
import { priceToFrench } from '@/lib/french/numbers';
import { frTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-table';

const foods = vocabList(U, 'Food', [
  ['le pain', 'bread', '🍞'],
  ['le croissant', 'croissant', '🥐'],
  ['le fromage', 'cheese', '🧀'],
  ['le beurre', 'butter', '🧈'],
  ['l’œuf', 'egg', '🥚'],
  ['la viande', 'meat', '🥩'],
  ['le poulet', 'chicken', '🍗'],
  ['le poisson', 'fish', '🐟'],
  ['le riz', 'rice', '🍚'],
  ['les pâtes', 'pasta', '🍝'],
  ['la soupe', 'soup', '🥣'],
  ['la salade', 'salad', '🥗'],
  ['les légumes', 'vegetables', '🥦'],
  ['la pomme', 'apple', '🍎'],
  ['la banane', 'banana', '🍌'],
  ['la fraise', 'strawberry', '🍓'],
  ['le gâteau', 'cake', '🍰'],
  ['la glace', 'ice cream', '🍨'],
]);

const drinksMeals = vocabList(U, 'Drinks and meals', [
  ['l’eau', 'water', '💧'],
  ['le lait', 'milk', '🥛'],
  ['le jus d’orange', 'orange juice', '🧃'],
  ['le thé', 'tea', '🍵'],
  ['le vin', 'wine', '🍷'],
  ['le petit-déjeuner', 'breakfast', '🌅'],
  ['le déjeuner', 'lunch', '☀️'],
  ['le dîner', 'dinner', '🌙'],
  ['le restaurant', 'restaurant', '🍽️'],
  ['le menu', 'menu', '📋'],
  ['l’addition', 'the bill', '🧾'],
]);

const quantities = vocabList(U, 'Quantities and verbs', [
  ['un peu de', 'a little …', '🤏'],
  ['beaucoup de', 'a lot of …', '🧺'],
  ['un kilo de', 'a kilo of …', '⚖️'],
  ['une bouteille de', 'a bottle of …', '🍾'],
  ['un verre de', 'a glass of …', '🥂'],
  ['un morceau de', 'a piece of …', '🧩'],
  ['une tranche de', 'a slice of …', '🍞'],
  ['prendre', 'to take / to have (food)', '🤲'],
  ['vouloir', 'to want', '🙏'],
  ['boire', 'to drink', '🥤'],
  ['manger', 'to eat', '🍴'],
  ['choisir', 'to choose', '👆'],
  ['finir', 'to finish', '🏁'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['Vous désirez ?', 'What would you like?', '🛎️'],
  ['Je voudrais …', 'I would like …', '🙋'],
  ['Je prends …', 'I’ll have …', '🛒'],
  ['C’est tout ?', 'Is that all?', '☝️'],
  ['C’est combien ?', 'How much is it?', '💶'],
  ['Ça fait … euros.', 'That comes to … euros.', '🧮'],
  ['L’addition, s’il vous plaît.', 'The bill, please.', '🧾'],
  ['Bon appétit !', 'Enjoy your meal!', '😋'],
  ['C’est délicieux !', 'It is delicious!', '😍'],
]);

const vocab = [...foods, ...drinksMeals, ...quantities, ...phrases];

const pictureQuiz = byDe(
  vocab,
  'le pain',
  'le fromage',
  'la pomme',
  'la banane',
  'la glace',
  'l’œuf',
  'la soupe',
  'le poulet',
);

const priceListen = (cents: number, wrong: number[]) => ({
  id: `pr-${cents}`,
  speak: priceToFrench(cents),
  transcript: `${priceToFrench(cents)} = ${formatPrice(cents)}`,
  answer: formatPrice(cents),
  options: [cents, ...wrong].map(formatPrice),
});

/** [noun, bucket, English] for the du / de la / des sort */
const SORT_CARDS: [string, 'du' | 'de-la' | 'des', string][] = [
  ['pain', 'du', 'bread'],
  ['fromage', 'du', 'cheese'],
  ['beurre', 'du', 'butter'],
  ['riz', 'du', 'rice'],
  ['poisson', 'du', 'fish'],
  ['viande', 'de-la', 'meat'],
  ['soupe', 'de-la', 'soup'],
  ['salade', 'de-la', 'salad'],
  ['glace', 'de-la', 'ice cream'],
  ['pâtes', 'des', 'pasta'],
  ['légumes', 'des', 'vegetables'],
  ['fraises', 'des', 'strawberries'],
];

export const table: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'À table !',
    subtitle: 'Buy food, order in a restaurant and talk about meals',
    emoji: '🍽️',
    goals: [
      'Name common foods, drinks and meals',
      'Say some bread, some soup, some water with du, de la and des',
      'Order politely and pay in a shop or a restaurant',
    ],
    grammar: [
      'du, de la, de l’, des',
      'un peu de, beaucoup de',
      'prendre, vouloir, boire',
      '-ir verbs',
    ],
    vocabFields: ['Food', 'Drinks and meals', 'Quantities and verbs', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-food',
      'flashcards',
      {
        title: 'Food',
        description: 'Learn the foods with le, la, l’ or les.',
        tags: ['vocabulary', 'food-drinks'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(foods),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'What is this food?',
        description: 'Look at the picture and pick the word.',
        tags: ['vocabulary', 'food-drinks'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, pictureQuiz, 4),
    ),

    activity(
      U,
      'flash-drinks-meals',
      'flashcards',
      {
        title: 'Drinks, meals and the restaurant',
        description: 'Drinks, the three meals and what you find in a restaurant.',
        tags: ['vocabulary', 'food-drinks'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(drinksMeals),
    ),

    activity(
      U,
      'listen-shop',
      'listen',
      {
        title: 'Listen in the shop',
        description: 'Understand food words and prices.',
        tags: ['listening', 'food-drinks', 'shopping'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...listen(
            byDe(vocab, 'le pain', 'le fromage', 'la viande', 'le riz', 'la soupe', 'la glace'),
            foods,
          ).items,
          priceListen(340, [430, 304, 440]),
          priceListen(555, [550, 565, 455]),
          priceListen(770, [760, 707, 670]),
        ],
      },
    ),

    activity(
      U,
      'gap-partitive',
      'gapfill',
      {
        title: 'Some bread, some soup',
        description: 'du, de la, de l’ or des?',
        tags: ['grammar', 'fr-partitive', 'food-drinks'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-partitive',
      },
      {
        items: [
          {
            id: 'p1',
            text: 'Je mange ___ pain.',
            answer: 'du',
            options: ['du', 'de la', 'de l’', 'des'],
            translation: 'I eat some bread.',
            explanation: 'Pain is masculine: du pain.',
          },
          {
            id: 'p2',
            text: 'Elle boit ___ eau.',
            answer: 'de l’',
            options: ['de l’', 'du', 'de la', 'des'],
            translation: 'She drinks some water.',
            explanation: 'Before a vowel du and de la become de l’: de l’eau.',
          },
          {
            id: 'p3',
            text: 'Nous prenons ___ soupe.',
            answer: 'de la',
            options: ['de la', 'du', 'de l’', 'des'],
            translation: 'We have some soup.',
            explanation: 'Soupe is feminine: de la soupe.',
          },
          {
            id: 'p4',
            text: 'Il mange ___ pâtes.',
            answer: 'des',
            options: ['des', 'du', 'de la', 'de l’'],
            translation: 'He eats pasta.',
            explanation: 'Pâtes is plural: des pâtes.',
          },
          {
            id: 'p5',
            text: 'Tu veux ___ fromage ?',
            answer: 'du',
            options: ['du', 'de la', 'de l’', 'des'],
            translation: 'Do you want some cheese?',
            explanation: 'Fromage is masculine: du fromage.',
          },
          {
            id: 'p6',
            text: 'Elle prend ___ glace.',
            answer: 'de la',
            options: ['de la', 'du', 'de l’', 'des'],
            translation: 'She has some ice cream.',
            explanation: 'Glace is feminine: de la glace.',
          },
          {
            id: 'p7',
            text: 'Ils mangent ___ légumes.',
            answer: 'des',
            options: ['des', 'du', 'de la', 'de l’'],
            translation: 'They eat vegetables.',
            explanation: 'Légumes is plural: des légumes.',
          },
          {
            id: 'p8',
            text: 'Je voudrais ___ jus d’orange.',
            answer: 'du',
            options: ['du', 'de la', 'de l’', 'des'],
            translation: 'I would like some orange juice.',
            explanation: 'Jus is masculine: du jus d’orange.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-partitive',
      'sortit',
      {
        title: 'du, de la or des?',
        description: 'Sort the foods by the word for “some”.',
        tags: ['grammar', 'fr-partitive', 'food-drinks'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-partitive',
      },
      {
        instruction: 'Which word for “some” goes with the food?',
        buckets: [
          { id: 'du', label: 'du (m.)', emoji: '🥖' },
          { id: 'de-la', label: 'de la (f.)', emoji: '🥣' },
          { id: 'des', label: 'des (plural)', emoji: '🍝' },
        ],
        items: SORT_CARDS.map(([text, bucket, translation], i) => ({
          id: `f${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'conj-irregular',
      'conjugation',
      {
        title: 'prendre, vouloir, boire',
        description: 'Three irregular verbs you need at the table.',
        tags: ['grammar', 'fr-prendre-vouloir'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('prendre-1', 'prendre', 'to take', ['je', 'tu', 'il/elle/on']),
          frTable('vouloir-1', 'vouloir', 'to want', ['nous', 'vous', 'ils/elles']),
          frTable('boire-1', 'boire', 'to drink', ['je', 'nous', 'ils/elles']),
          frTable('prendre-2', 'prendre', 'to take', ['nous', 'vous', 'ils/elles']),
          frTable('vouloir-2', 'vouloir', 'to want', ['je', 'tu', 'il/elle/on']),
        ],
      },
    ),

    activity(
      U,
      'conj-ir',
      'conjugation',
      {
        title: 'choisir and finir',
        description: 'Regular -ir verbs: the stem grows in the plural.',
        tags: ['grammar', 'fr-ir-verbs'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          frTable('choisir-1', 'choisir', 'to choose', ['je', 'tu', 'il/elle/on']),
          frTable('finir-1', 'finir', 'to finish', ['nous', 'vous', 'ils/elles']),
          frTable('choisir-2', 'choisir', 'to choose', ['nous', 'vous', 'ils/elles']),
          frTable('finir-2', 'finir', 'to finish', ['je', 'tu', 'il/elle/on']),
        ],
      },
    ),

    activity(
      U,
      'gap-quantities',
      'gapfill',
      {
        title: 'How much?',
        description: 'After a quantity, de has no article.',
        tags: ['grammar', 'fr-quantities', 'food-drinks'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-quantities',
      },
      {
        items: [
          {
            id: 'q1',
            text: 'Je voudrais un peu ___ fromage.',
            answer: 'de',
            options: ['de', 'du', 'des', 'de la'],
            translation: 'I would like a little cheese.',
            explanation: 'After a quantity use de, not du.',
          },
          {
            id: 'q2',
            text: 'Il y a beaucoup ___ légumes.',
            answer: 'de',
            options: ['de', 'des', 'du', 'de la'],
            translation: 'There are a lot of vegetables.',
            explanation: 'Beaucoup is followed by de alone.',
          },
          {
            id: 'q3',
            text: 'Un kilo ___ pommes, s’il vous plaît.',
            answer: 'de',
            options: ['de', 'des', 'du', 'de la'],
            translation: 'A kilo of apples, please.',
            explanation: 'A measure takes de: un kilo de pommes.',
          },
          {
            id: 'q4',
            text: 'Une bouteille ___ eau, s’il vous plaît.',
            answer: 'd’',
            options: ['d’', 'de', 'du', 'de l’'],
            translation: 'A bottle of water, please.',
            explanation: 'De becomes d’ before a vowel: d’eau.',
          },
          {
            id: 'q5',
            text: 'Je ne mange pas ___ viande.',
            answer: 'de',
            options: ['de', 'du', 'de la', 'des'],
            translation: 'I do not eat meat.',
            explanation: 'After a negative du, de la and des become de.',
          },
          {
            id: 'q6',
            text: 'Un verre ___ lait, s’il vous plaît.',
            answer: 'de',
            options: ['de', 'du', 'de la', 'des'],
            translation: 'A glass of milk, please.',
            explanation: 'A container takes de: un verre de lait.',
          },
        ],
      },
    ),

    activity(
      U,
      'market',
      'market',
      {
        title: 'At the bakery',
        description: 'Serve the customers: fill the basket, then say how much it costs.',
        tags: ['communication', 'shopping', 'food-drinks'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        products: [
          { id: 'croissant', name: 'croissant', emoji: '🥐', priceCents: 110 },
          { id: 'baguette', name: 'baguette', emoji: '🥖', priceCents: 120 },
          { id: 'fromage', name: 'fromage', emoji: '🧀', priceCents: 450 },
          { id: 'lait', name: 'lait', emoji: '🥛', priceCents: 105 },
          { id: 'pommes', name: 'pommes (1 kg)', emoji: '🍎', priceCents: 290 },
          { id: 'jus', name: 'jus d’orange', emoji: '🧃', priceCents: 240 },
        ],
        orders: [
          {
            id: 'o1',
            request: 'Je voudrais deux croissants et une baguette, s’il vous plaît.',
            translation: 'Two croissants and a baguette, please.',
            items: [
              { product: 'croissant', qty: 2 },
              { product: 'baguette', qty: 1 },
            ],
          },
          {
            id: 'o2',
            request: 'Je prends un fromage et un lait.',
            translation: 'I’ll take a cheese and a milk.',
            items: [
              { product: 'fromage', qty: 1 },
              { product: 'lait', qty: 1 },
            ],
          },
          {
            id: 'o3',
            request: 'Je voudrais deux jus d’orange et un kilo de pommes.',
            translation: 'Two orange juices and a kilo of apples, please.',
            items: [
              { product: 'jus', qty: 2 },
              { product: 'pommes', qty: 1 },
            ],
          },
          {
            id: 'o4',
            request: 'Trois croissants et un lait, s’il vous plaît.',
            translation: 'Three croissants and a milk, please.',
            items: [
              { product: 'croissant', qty: 3 },
              { product: 'lait', qty: 1 },
            ],
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
        tags: ['grammar', 'food-drinks'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I would like some bread.',
            words: ['Je', 'voudrais', 'du', 'pain.'],
            extra: ['des'],
            lesson: 'fr-partitive',
          },
          {
            id: 's2',
            translation: 'She eats some soup.',
            words: ['Elle', 'mange', 'de', 'la', 'soupe.'],
            extra: ['du'],
            lesson: 'fr-partitive',
          },
          {
            id: 's3',
            translation: 'We choose the menu.',
            words: ['Nous', 'choisissons', 'le', 'menu.'],
            extra: ['choisissez'],
            lesson: 'fr-ir-verbs',
          },
          {
            id: 's4',
            translation: 'I do not eat meat.',
            words: ['Je', 'ne', 'mange', 'pas', 'de', 'viande.'],
            extra: ['du'],
            lesson: 'fr-quantities',
          },
          {
            id: 's5',
            translation: 'They drink some water.',
            words: ['Ils', 'boivent', 'de', 'l’eau.'],
            extra: ['boit'],
            lesson: 'fr-prendre-vouloir',
          },
          {
            id: 's6',
            translation: 'A lot of vegetables, please.',
            words: ['Beaucoup', 'de', 'légumes,', 's’il', 'vous', 'plaît.'],
            lesson: 'fr-quantities',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-food',
      'spell',
      {
        title: 'Spell the food',
        description: 'Unscramble and type food words. Accents are optional here.',
        tags: ['spelling', 'food-drinks'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-fromage',
            mode: 'unscramble',
            answer: 'fromage',
            hint: 'cheese',
            emoji: '🧀',
            speak: 'le fromage',
          },
          {
            id: 'sp-gateau',
            mode: 'unscramble',
            answer: 'gâteau',
            hint: 'cake',
            emoji: '🍰',
            speak: 'le gâteau',
          },
          {
            id: 'sp-petit-dejeuner',
            mode: 'type',
            answer: 'petit-déjeuner',
            hint: 'breakfast',
            emoji: '🌅',
            speak: 'le petit-déjeuner',
          },
          {
            id: 'sp-legumes',
            mode: 'type',
            answer: 'légumes',
            hint: 'vegetables',
            emoji: '🥦',
            speak: 'les légumes',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'In the shop and the restaurant',
        description: 'Phrases for ordering, paying and enjoying a meal.',
        tags: ['vocabulary', 'food-drinks', 'shopping'],
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
        title: 'Order and pay',
        description: 'At the bakery, in a restaurant and when the bill comes.',
        tags: ['communication', 'food-drinks'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'bakery',
            title: 'At the bakery',
            emoji: '🥖',
            setting: 'You buy bread. Use vous with the baker.',
            turns: [
              {
                kind: 'npc',
                who: 'La boulangère',
                text: 'Bonjour ! Vous désirez ?',
                translation: 'Hello! What would you like?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je voudrais une baguette, s’il vous plaît.', correct: true },
                  {
                    text: 'Je veux une baguette.',
                    correct: false,
                    feedback: 'Je veux is too blunt in a shop. Je voudrais is the polite way.',
                  },
                  {
                    text: 'Je voudrais du baguette.',
                    correct: false,
                    feedback:
                      'A baguette is a single loaf: une baguette. Du means some of something.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La boulangère',
                text: 'Voilà. C’est tout ?',
                translation: 'Here you are. Is that all?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, c’est tout. C’est combien ?', correct: true },
                  {
                    text: 'Oui, je suis tout. C’est combien ?',
                    correct: false,
                    feedback: 'To say that is all, use c’est tout.',
                  },
                  {
                    text: 'Bon appétit ! C’est combien ?',
                    correct: false,
                    feedback:
                      'Bon appétit wishes someone a good meal. The baker asked if that is all.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'La boulangère',
                text: 'Ça fait un euro vingt.',
                translation: 'That comes to 1.20 euros.',
              },
            ],
          },
          {
            id: 'restaurant',
            title: 'In a restaurant',
            emoji: '🍽️',
            setting: 'You order lunch. The waiter says vous to you, so you say vous too.',
            turns: [
              {
                kind: 'npc',
                who: 'Le serveur',
                text: 'Bonjour. Vous désirez ?',
                translation: 'Hello. What would you like?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je prends du poulet, s’il vous plaît.', correct: true },
                  {
                    text: 'Je prends de poulet, s’il vous plaît.',
                    correct: false,
                    feedback: 'Poulet is masculine: du poulet.',
                  },
                  {
                    text: 'Je prends des poulet, s’il vous plaît.',
                    correct: false,
                    feedback: 'Des is plural. Poulet is one dish, masculine: du poulet.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le serveur',
                text: 'Très bien. Et pour boire ?',
                translation: 'Very good. And to drink?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'De l’eau, s’il vous plaît.', correct: true },
                  {
                    text: 'Du eau, s’il vous plaît.',
                    correct: false,
                    feedback: 'Before a vowel du and de la become de l’: de l’eau.',
                  },
                  {
                    text: 'De la eau, s’il vous plaît.',
                    correct: false,
                    feedback: 'Before a vowel use de l’: de l’eau.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le serveur',
                text: 'Voilà. Bon appétit !',
                translation: 'Here you are. Enjoy your meal!',
              },
            ],
          },
          {
            id: 'bill',
            title: 'The bill',
            emoji: '🧾',
            setting: 'You have finished your meal and want to pay.',
            turns: [
              {
                kind: 'you',
                options: [
                  { text: 'L’addition, s’il vous plaît.', correct: true },
                  {
                    text: 'Bon appétit, s’il vous plaît.',
                    correct: false,
                    feedback: 'Bon appétit is said before eating. To pay, ask for l’addition.',
                  },
                  {
                    text: 'Je suis l’addition, s’il vous plaît.',
                    correct: false,
                    feedback: 'You ask for the bill: l’addition, s’il vous plaît.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le serveur',
                text: 'Voilà. Ça fait vingt-deux euros. Vous avez bien mangé ?',
                translation: 'Here you are. That is 22 euros. Did you enjoy your meal?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, c’est délicieux !', correct: true },
                  {
                    text: 'Oui, je suis délicieux !',
                    correct: false,
                    feedback: 'You describe the food: c’est délicieux.',
                  },
                  {
                    text: 'Oui, bon appétit !',
                    correct: false,
                    feedback: 'Bon appétit is said before the meal, not after it.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le serveur',
                text: 'Merci beaucoup ! Au revoir !',
                translation: 'Thank you very much! Goodbye!',
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
        title: 'Food blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'food-drinks', 'fr-partitive'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Du pain” means “some bread”.', isTrue: true },
          {
            id: 'b2',
            text: '“De la eau” is correct.',
            isTrue: false,
            explanation: 'Before a vowel: de l’eau.',
          },
          { id: 'b3', text: '“Je voudrais” is more polite than “je veux”.', isTrue: true },
          { id: 'b4', text: '“Ils finissent” is the ils form of finir.', isTrue: true },
          { id: 'b5', text: '“Nous prenons” is the nous form of prendre.', isTrue: true },
          {
            id: 'b6',
            text: '“Je ne mange pas du pain” is correct.',
            isTrue: false,
            explanation: 'After a negative the partitive becomes de: je ne mange pas de pain.',
          },
          { id: 'b7', text: '“Beaucoup de légumes” means “a lot of vegetables”.', isTrue: true },
          {
            id: 'b8',
            text: '“Un kilo des pommes” is correct.',
            isTrue: false,
            explanation: 'After a quantity use de alone: un kilo de pommes.',
          },
          { id: 'b9', text: '“L’addition” is the bill.', isTrue: true },
          { id: 'b10', text: '“Il choisit” is the il form of choisir.', isTrue: true },
          { id: 'b11', text: '“Bon appétit !” is said before a meal.', isTrue: true },
          {
            id: 'b12',
            text: '“Le petit-déjeuner” is the evening meal.',
            isTrue: false,
            explanation: 'Le petit-déjeuner is breakfast. The evening meal is le dîner.',
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
        tags: ['vocabulary', 'grammar', 'food-drinks'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “Je mange ___ pain.”',
            options: ['du', 'de la', 'des', 'de l’'],
            answer: 'du',
            lesson: 'fr-partitive',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Elle boit ___ eau.”',
            options: ['de l’', 'du', 'de la', 'des'],
            answer: 'de l’',
            lesson: 'fr-partitive',
          },
          {
            id: 'c3',
            prompt: 'Complete: “Nous mangeons ___ pâtes.”',
            options: ['des', 'du', 'de la', 'de l’'],
            answer: 'des',
            lesson: 'fr-partitive',
          },
          {
            id: 'c4',
            prompt: 'Which sentence is the most polite way to order?',
            options: [
              'Je voudrais du pain, s’il vous plaît.',
              'Je veux du pain.',
              'Du pain !',
              'Donne du pain.',
            ],
            answer: 'Je voudrais du pain, s’il vous plaît.',
          },
          {
            id: 'c5',
            prompt: 'Complete: “Ils ___ la salade.” (to choose)',
            options: ['choisissent', 'choisit', 'choisissons', 'choisis'],
            answer: 'choisissent',
            lesson: 'fr-ir-verbs',
          },
          {
            id: 'c6',
            prompt: 'Complete: “Vous ___ du thé ?” (to want)',
            options: ['voulez', 'voulons', 'veux', 'veulent'],
            answer: 'voulez',
            lesson: 'fr-prendre-vouloir',
          },
          {
            id: 'c7',
            prompt: 'Complete: “Un kilo ___ pommes, s’il vous plaît.”',
            options: ['de', 'des', 'du', 'de la'],
            answer: 'de',
            lesson: 'fr-quantities',
          },
          {
            id: 'c8',
            prompt: 'Complete: “Je ___ un jus d’orange.” (to take)',
            options: ['prends', 'prend', 'prenons', 'prennent'],
            answer: 'prends',
            lesson: 'fr-prendre-vouloir',
          },
        ],
      },
    ),
  ],
};
