import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  gaps,
  meta,
  presentTable,
  quizRows,
  say,
  sentRows,
  sortCards,
  spellRows,
  tfRows,
  unitFr21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-cuisine';

const kitchen = vocabList(U, 'Kitchen and recipe', [
  ['la recette', 'recipe', '📖'],
  ['l’ingrédient', 'ingredient', '🧂'],
  ['la farine', 'flour', '🌾'],
  ['la pâte', 'dough / batter', '🫓'],
  ['la casserole', 'saucepan', '🍲'],
  ['la poêle', 'frying pan', '🍳'],
  ['le saladier', 'mixing bowl', '🥣'],
  ['le fouet', 'whisk', '🥢'],
  ['le four', 'oven', '♨️'],
  ['la cuillère', 'spoon', '🥄'],
  ['l’épice', 'spice', '🌶️'],
  ['la râpe', 'grater', '🧀'],
]);

const measures = vocabList(U, 'Amounts', [
  ['la cuillère à soupe', 'tablespoon', '🥄'],
  ['la cuillère à café', 'teaspoon', '☕'],
  ['la pincée', 'pinch', '🤏'],
  ['la poignée', 'handful', '🤲'],
  ['la tranche', 'slice', '🍞'],
  ['la gousse', 'clove', '🧄'],
  ['le morceau', 'piece', '🧩'],
  ['le gramme', 'gram', '⚖️'],
]);

const actions = vocabList(U, 'Cooking verbs', [
  ['éplucher', 'to peel', '🥔'],
  ['couper', 'to cut', '✂️'],
  ['mélanger', 'to mix', '🌀'],
  ['ajouter', 'to add', '➕'],
  ['verser', 'to pour', '🫗'],
  ['faire cuire', 'to cook', '🔥'],
  ['faire bouillir', 'to boil', '🫕'],
  ['remuer', 'to stir', '🔄'],
  ['saler', 'to add salt', '🧂'],
  ['déguster', 'to taste / to enjoy', '😋'],
]);

const restaurant = vocabList(U, 'At the restaurant', [
  ['la carte', 'menu', '📜'],
  ['le hors-d’œuvre', 'starter', '🥗'],
  ['le plat principal', 'main course', '🍝'],
  ['le plat du jour', 'dish of the day', '🍛'],
  ['le cuisinier', 'cook', '👨‍🍳'],
  ['le sommelier', 'wine waiter', '🍷'],
  ['le pourboire', 'tip', '🪙'],
  ['l’apéritif', 'aperitif', '🥂'],
  ['la spécialité', 'speciality', '🏅'],
  ['l’allergie', 'allergy', '🤧'],
  ['la commande', 'order', '🛎️'],
  ['la salle', 'dining room', '🍽️'],
]);

const phrases = vocabList(U, 'Ordering and complaining', [
  ['Je voudrais voir la carte.', 'I would like to see the menu.', '📜'],
  ['Qu’est-ce que vous me conseillez ?', 'What do you recommend?', '🤔'],
  ['Pouvez-vous apporter l’addition ?', 'Can you bring the bill?', '🧾'],
  ['Ce n’est pas ce que j’ai commandé.', 'That is not what I ordered.', '😕'],
  ['C’est trop salé.', 'It is too salty.', '🧂'],
  ['C’est froid !', 'It is cold!', '🥶'],
  ['On attend depuis une heure.', 'We have been waiting for an hour.', '⏰'],
  ['Pouvez-vous le changer ?', 'Can you change it?', '🔁'],
  ['Je suis allergique aux noix.', 'I am allergic to nuts.', '🥜'],
  ['C’était délicieux !', 'It was delicious!', '😍'],
]);

const vocab = [...kitchen, ...measures, ...actions, ...restaurant, ...phrases];

const OB = 'fr-a21-obligation' as const;
const NQ = 'fr-a21-ne-que' as const;
const MS = 'fr-a21-measures' as const;

export const cuisine: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 7,
    title: 'En cuisine',
    subtitle: 'Follow a recipe, say what you must do and order or complain in a restaurant',
    emoji: '🍳',
    goals: [
      'Follow and give a recipe',
      'Say what is necessary and what is forbidden',
      'Order, complain and ask for the bill politely',
    ],
    grammar: ['il faut, devoir, interdit', 'ne … que', 'Quantities and measures'],
    vocabFields: ['Kitchen and recipe', 'Amounts', 'Cooking verbs', 'At the restaurant'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-kitchen',
      'flashcards',
      meta('Kitchen and recipe', 'Pans, bowls, whisks and ovens.', ['vocabulary', 'cooking'], 1, 3),
      flashcards(kitchen),
    ),

    activity(
      U,
      'flash-actions',
      'flashcards',
      meta(
        'Cooking verbs and amounts',
        'Peel, cut, mix, pour: and how much to add.',
        ['vocabulary', 'cooking', 'food-drinks'],
        1,
        3,
      ),
      flashcards([...actions, ...measures]),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the utensil or the dish from the picture.',
        ['vocabulary', 'cooking'],
        1,
        3,
      ),
      quizEmoji([...kitchen.slice(0, 9), ...restaurant.slice(0, 3)], [...kitchen, ...restaurant]),
    ),

    activity(
      U,
      'listen-cooking',
      'listen',
      meta(
        'Listen: in the kitchen',
        'Listen to the word and pick its meaning.',
        ['listening', 'cooking'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'la casserole', 'le fouet', 'la gousse', 'la pincée'),
          ...byDe(vocab, 'éplucher', 'verser', 'remuer', 'le pourboire'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-cooking',
      'memory',
      meta(
        'Cooking memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'cooking'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'la farine', 'la poêle', 'le saladier', 'la râpe'),
        ...byDe(vocab, 'couper', 'mélanger', 'ajouter', 'saler'),
      ]),
    ),

    activity(
      U,
      'flash-restaurant',
      'flashcards',
      meta(
        'At the restaurant',
        'Words and phrases to order, complain and pay.',
        ['vocabulary', 'communication', 'cooking'],
        1,
        3,
      ),
      flashcards([...restaurant, ...phrases]),
    ),

    activity(
      U,
      'conj-recipe',
      'conjugation',
      meta(
        'Verbs of the recipe',
        'Regular -er verbs, with a spelling twist for mélanger.',
        ['grammar', 'cooking'],
        2,
        4,
      ),
      {
        tables: [
          presentTable('ajouter', 'to add', ['je', 'nous', 'ils/elles']),
          presentTable('mélanger', 'to mix', ['tu', 'nous', 'ils/elles']),
          presentTable('éplucher', 'to peel', ['je', 'il/elle/on', 'vous']),
          presentTable('verser', 'to pour', ['tu', 'nous', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'gap-obligation',
      'gapfill',
      meta(
        'It is necessary to …',
        'Il faut, devoir and interdit.',
        ['grammar', OB, 'cooking'],
        2,
        4,
      ),
      {
        items: gaps('o', OB, [
          [
            'Il ___ mélanger les œufs et la farine.',
            'faut',
            ['faut', 'doit', 'fait', 'falloir'],
            'You have to mix the eggs and the flour.',
            'Il faut + infinitive.',
          ],
          [
            'Il ne ___ pas fumer dans le restaurant.',
            'faut',
            ['faut', 'doit', 'peut', 'veut'],
            'One must not smoke in the restaurant.',
            'Il ne faut pas + infinitive forbids.',
          ],
          [
            'Vous ___ réserver une table le samedi.',
            'devez',
            ['devez', 'devons', 'doit', 'faut'],
            'You have to book a table on Saturdays.',
            'Devoir with vous: devez.',
          ],
          [
            'Il est ___ de fumer ici.',
            'interdit',
            ['interdit', 'interdire', 'interdite', 'interdits'],
            'Smoking is forbidden here.',
            'Il est interdit de + infinitive (on signs).',
          ],
          [
            'Tu ___ goûter la sauce avant de servir.',
            'dois',
            ['dois', 'doit', 'faut', 'devons'],
            'You must taste the sauce before serving.',
            'Devoir with tu: dois.',
          ],
          [
            'Pour la sauce, il faut ___ sans arrêt.',
            'remuer',
            ['remuer', 'remuez', 'remué', 'remue'],
            'For the sauce you have to keep stirring.',
            'Il faut is followed by the infinitive.',
          ],
          [
            'Il ne faut ___ laisser le four allumé.',
            'pas',
            ['pas', 'ne', 'non', 'sans'],
            'You must not leave the oven on.',
            'Ne … pas goes around faut.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sort-obligation',
      'sortit',
      meta(
        'Must or must not?',
        'Sort the rules: is it an obligation or a prohibition?',
        ['grammar', OB],
        2,
        4,
      ),
      {
        instruction: 'Does the sentence say what you must do, or what you must not do?',
        buckets: [
          { id: 'must', label: 'Must do', emoji: '✅' },
          { id: 'mustnot', label: 'Must not do', emoji: '🚫' },
        ],
        items: sortCards('s', [
          ['Il faut éplucher les pommes de terre.', 'must', 'You have to peel the potatoes.'],
          ['Vous devez réserver à l’avance.', 'must', 'You must book in advance.'],
          ['Il faut goûter la sauce.', 'must', 'You have to taste the sauce.'],
          ['Tu dois te laver les mains.', 'must', 'You must wash your hands.'],
          ['Il faut laisser reposer la pâte.', 'must', 'You have to let the dough rest.'],
          ['Il ne faut pas toucher le four.', 'mustnot', 'You must not touch the oven.'],
          ['Il est interdit de fumer.', 'mustnot', 'Smoking is forbidden.'],
          ['Vous ne devez pas entrer.', 'mustnot', 'You must not come in.'],
          ['Il ne faut pas salir la cuisine.', 'mustnot', 'You must not make the kitchen dirty.'],
          ['Il est interdit de courir.', 'mustnot', 'Running is forbidden.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-ne-que',
      'gapfill',
      meta('Only: ne … que', 'Ne … que means “only”, not “not”.', ['grammar', NQ], 3, 4),
      {
        items: gaps('q', NQ, [
          [
            'Il n’y a ___ deux œufs dans le frigo.',
            'que',
            ['que', 'pas', 'plus', 'rien'],
            'There are only two eggs in the fridge.',
            'Ne … que = only.',
          ],
          [
            'Je ne bois ___ de l’eau.',
            'que',
            ['que', 'pas', 'jamais', 'plus'],
            'I only drink water.',
            'After que the partitive stays: de l’eau.',
          ],
          [
            'Elle n’a mangé ___ du riz.',
            'que',
            ['que', 'pas', 'rien', 'jamais'],
            'She only ate rice.',
            'Que goes before the word it limits.',
          ],
          [
            'Il ne reste ___ une tranche de gâteau.',
            'qu’',
            ['qu’', 'que', 'pas', 'plus'],
            'There is only one slice of cake left.',
            'Que becomes qu’ before a vowel: qu’une.',
          ],
          [
            'Je n’ai ___ dix euros pour dîner.',
            'que',
            ['que', 'pas', 'plus', 'de'],
            'I only have ten euros for dinner.',
            'Ne … que with an amount.',
          ],
          [
            'Ils ne servent ___ des plats végétariens.',
            'que',
            ['que', 'pas', 'plus', 'jamais'],
            'They only serve vegetarian dishes.',
            'The article des stays after que.',
          ],
          [
            'Elle ne prend ___ un café le matin.',
            'qu’un',
            ['qu’un', 'que un', 'pas un', 'rien un'],
            'She only has a coffee in the morning.',
            'Qu’ + un.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-measures',
      'gapfill',
      meta('How much?', 'After a quantity use de: no article.', ['grammar', MS, 'cooking'], 2, 4),
      {
        items: gaps('m', MS, [
          [
            'Il faut deux cents grammes ___ farine.',
            'de',
            ['de', 'des', 'd’', 'du'],
            'You need 200 grams of flour.',
            'After a measure: de, no article.',
          ],
          [
            'Ajoutez une pincée ___ sel.',
            'de',
            ['de', 'du', 'des', 'le'],
            'Add a pinch of salt.',
            'Une pincée de sel.',
          ],
          [
            'Je prends un verre ___ eau.',
            'd’',
            ['d’', 'de', 'du', 'de l’'],
            'I will have a glass of water.',
            'De becomes d’ before a vowel.',
          ],
          [
            'Il y a beaucoup ___ sucre dans ce dessert.',
            'de',
            ['de', 'du', 'des', 'd’'],
            'There is a lot of sugar in this dessert.',
            'Beaucoup de + noun.',
          ],
          [
            'Verse une cuillère à soupe ___ huile.',
            'd’',
            ['d’', 'de', 'de l’', 'du'],
            'Pour a tablespoon of oil.',
            'Huile starts with a vowel: d’huile.',
          ],
          [
            'Il y a trop ___ sel dans la soupe.',
            'de',
            ['de', 'du', 'des', 'de la'],
            'There is too much salt in the soup.',
            'Trop de + noun.',
          ],
          [
            'Il faut ___ tomates pour la sauce.',
            'quelques',
            ['quelques', 'quelque', 'quelqu’un', 'de'],
            'You need a few tomatoes for the sauce.',
            'Quelques + plural noun, without de.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of a recipe or a rule in the right order.',
        ['grammar', 'cooking'],
        2,
        4,
      ),
      {
        items: sentRows('s', [
          [OB, 'You have to mix the eggs.', ['Il', 'faut', 'mélanger', 'les', 'œufs.'], ['doit']],
          [OB, 'You must not smoke here.', ['Il', 'ne', 'faut', 'pas', 'fumer', 'ici.'], ['doit']],
          [NQ, 'There are only two eggs.', ['Il', 'n’y', 'a', 'que', 'deux', 'œufs.'], ['pas']],
          [NQ, 'I only drink water.', ['Je', 'ne', 'bois', 'que', 'de', 'l’eau.'], ['pas']],
          [MS, 'Add a pinch of salt.', ['Ajoutez', 'une', 'pincée', 'de', 'sel.'], ['du']],
          [
            MS,
            'We need two hundred grams of flour.',
            ['Il', 'faut', 'deux', 'cents', 'grammes', 'de', 'farine.'],
            ['des'],
          ],
        ]),
      },
    ),

    activity(
      U,
      'spell-cooking',
      'spell',
      meta(
        'Spell the kitchen words',
        'Unscramble and type words for cooking. Accents are optional here.',
        ['spelling', 'cooking'],
        2,
        3,
      ),
      {
        items: spellRows('sp', [
          ['unscramble', 'casserole', 'saucepan', '🍲', 'la casserole'],
          ['unscramble', 'recette', 'recipe', '📖', 'la recette'],
          ['type', 'farine', 'flour', '🌾', 'la farine'],
          ['type', 'addition', 'bill', '🧾', 'l’addition'],
          ['type', 'pourboire', 'tip', '🪙', 'le pourboire'],
        ]),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'In the kitchen and at the table',
        'Share a recipe, order a meal and make a complaint.',
        ['communication', 'cooking'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'recipe',
            title: 'A cake recipe',
            emoji: '🎂',
            setting: 'A friend asks how to make your cake. You say tu.',
            turns: [
              say(
                'Nina',
                'Tu fais un gâteau ? Qu’est-ce qu’il faut ?',
                'You are making a cake? What do you need?',
              ),
              you(
                'Il faut deux cents grammes de farine et trois œufs.',
                [
                  'Il faut deux cents grammes de la farine et trois œufs.',
                  'After a measure use de without an article.',
                ],
                [
                  'Il faut deux cents grammes farine et trois œufs.',
                  'Do not forget de after grammes.',
                ],
              ),
              say('Nina', 'Et on fait quoi ensuite ?', 'And what do we do next?'),
              you(
                'On mélange tout, puis il faut laisser reposer la pâte.',
                [
                  'On mélange tout, puis il faut laissez reposer la pâte.',
                  'Il faut is followed by the infinitive.',
                ],
                [
                  'On mélange tout, puis il faux laisser reposer la pâte.',
                  'Il faut (from falloir) ends in -ut.',
                ],
              ),
            ],
          },
          {
            id: 'ordering',
            title: 'Ordering a meal',
            emoji: '🍽️',
            setting: 'You eat out. You say vous to the waiter.',
            turns: [
              say('Le serveur', 'Bonsoir, vous avez choisi ?', 'Good evening, have you chosen?'),
              you(
                'Oui, je voudrais le plat du jour, s’il vous plaît.',
                ['Oui, je veux le plat du jour.', 'Be polite: je voudrais … s’il vous plaît.'],
                [
                  'Oui, je voudrais le plat de jour, s’il vous plaît.',
                  'The expression is le plat du jour.',
                ],
              ),
              say('Le serveur', 'Très bien. Un apéritif ?', 'Very well. An aperitif?'),
              you(
                'Non merci, je ne bois que de l’eau.',
                [
                  'Non merci, je ne bois pas que de l’eau.',
                  'Ne … que already means only; do not add pas.',
                ],
                ['Non merci, je bois que de l’eau.', 'Ne … que needs both parts: je ne bois que.'],
              ),
            ],
          },
          {
            id: 'complaint',
            title: 'Something is wrong',
            emoji: '😕',
            setting: 'The dish is not right. You say vous.',
            turns: [
              say('Le serveur', 'Tout va bien ?', 'Is everything all right?'),
              you(
                'Excusez-moi, ce n’est pas ce que j’ai commandé.',
                [
                  'Excusez-moi, ce n’est pas ce que je commande.',
                  'You ordered earlier: j’ai commandé.',
                ],
                [
                  'Excusez-moi, ce n’est pas ce qui j’ai commandé.',
                  'The dish is the object of j’ai commandé: ce que.',
                ],
              ),
              say(
                'Le serveur',
                'Je suis désolé, je vous apporte autre chose.',
                'I am sorry, I will bring you something else.',
              ),
              you(
                'Merci. Il faut aussi changer ma fourchette, elle est sale.',
                [
                  'Merci. Il faut aussi changez ma fourchette, elle est sale.',
                  'Il faut is followed by the infinitive.',
                ],
                [
                  'Merci. Il faut aussi changer mon fourchette, elle est sale.',
                  'Fourchette is feminine: ma fourchette.',
                ],
              ),
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      meta('Kitchen blitz', 'True or false? Beat the clock!', ['vocabulary', 'cooking', OB], 2, 2),
      {
        seconds: 45,
        statements: tfRows('b', [
          ['“Il faut remuer” means “you have to stir”.', true],
          ['“Il ne faut pas fumer” means “you may smoke”.', false, 'It forbids smoking.'],
          ['“Il est interdit de courir” means “running is forbidden”.', true],
          [
            '“Je ne mange que du pain” means “I do not eat bread”.',
            false,
            'It means I only eat bread.',
          ],
          ['“Il n’y a qu’un œuf” means “there is only one egg”.', true],
          ['“Une pincée de sel” is correct.', true],
          ['“Un verre de l’eau” is correct.', false, 'After a measure: un verre d’eau.'],
          ['“Deux cents grammes de farine” is correct.', true],
          ['“Éplucher” means “to peel”.', true],
          ['“Le pourboire” is the bill.', false, 'It is the tip; the bill is l’addition.'],
          ['“La poêle” is a frying pan.', true],
          ['“Vous devez réserver” is an obligation.', true],
        ]),
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'cooking'],
        3,
        4,
      ),
      {
        questions: quizRows('c', [
          ['Complete: “Il ___ ajouter du sel.”', 'faut', ['fait', 'doit', 'falloir'], OB],
          [
            'Which sentence forbids something?',
            'Il ne faut pas toucher.',
            ['Il faut toucher.', 'Vous devez toucher.', 'Il peut toucher.'],
            OB,
          ],
          [
            '“Je n’ai que cinq euros” means …',
            'I only have five euros',
            ['I have no euros', 'I never have euros', 'I have more euros'],
            NQ,
          ],
          ['Complete: “Il ne reste ___ une pomme.”', 'qu’', ['pas', 'plus', 'que'], NQ],
          ['Complete: “un kilo ___ pommes”', 'de', ['des', 'les', 'du'], MS],
          ['Complete: “une tasse ___ thé”', 'de', ['du', 'des', 'le'], MS],
          ['“Faire bouillir” means …', 'to boil', ['to peel', 'to pour', 'to taste']],
          [
            '“L’addition, s’il vous plaît” means …',
            'the bill, please',
            ['the menu, please', 'a table, please', 'the tip, please'],
          ],
        ]),
      },
    ),
  ],
};
