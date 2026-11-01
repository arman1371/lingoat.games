import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-2-logement';

const rooms = vocabList(U, 'Rooms and the building', [
  ['l’immeuble', 'apartment building', '🏢'],
  ['l’appartement', 'flat, apartment', '🏬'],
  ['la maison', 'house', '🏡'],
  ['la pièce', 'room', '🚪'],
  ['la cuisine', 'kitchen', '🍳'],
  ['le salon', 'living room', '🛋️'],
  ['la chambre', 'bedroom', '🛌'],
  ['la salle de bains', 'bathroom', '🛁'],
  ['les toilettes', 'toilet', '🚽'],
  ['le couloir', 'corridor, hall', '↔️'],
  ['le balcon', 'balcony', '🌇'],
  ['le jardin', 'garden', '🌳'],
  ['la cave', 'cellar', '🍷'],
  ['l’escalier', 'stairs', '🪜'],
  ['l’ascenseur', 'lift, elevator', '🛗'],
  ['le rez-de-chaussée', 'ground floor', '🔽'],
  ['l’étage', 'floor, storey', '🔼'],
  ['le propriétaire', 'owner, landlord', '🔑'],
  ['le locataire', 'tenant', '🧑‍💼'],
  ['le loyer', 'rent', '💶'],
]);

const furniture = vocabList(U, 'Furniture and appliances', [
  ['le lit', 'bed', '🛏️'],
  ['l’armoire', 'wardrobe', '🗄️'],
  ['la table', 'table', '🍽️'],
  ['la chaise', 'chair', '🪑'],
  ['le canapé', 'sofa', '🛋️'],
  ['le fauteuil', 'armchair', '💺'],
  ['l’étagère', 'shelf', '📚'],
  ['le bureau', 'desk', '🖥️'],
  ['la lampe', 'lamp', '🪔'],
  ['le tapis', 'rug', '🟫'],
  ['le rideau', 'curtain', '🪟'],
  ['la télévision', 'television', '📺'],
  ['le frigo', 'fridge', '🧊'],
  ['la cuisinière', 'cooker, stove', '🍲'],
  ['le four', 'oven', '♨️'],
  ['le lave-linge', 'washing machine', '🧺'],
  ['le lave-vaisselle', 'dishwasher', '🫧'],
  ['la douche', 'shower', '🚿'],
  ['la baignoire', 'bathtub', '🛀'],
  ['le lavabo', 'washbasin', '🚰'],
  ['le miroir', 'mirror', '🪞'],
]);

const repairs = vocabList(U, 'Problems and repairs', [
  ['la panne', 'breakdown', '🛠️'],
  ['en panne', 'out of order', '🚫'],
  ['cassé, cassée', 'broken', '💔'],
  ['la fuite', 'leak', '💧'],
  ['le chauffage', 'heating', '🔥'],
  ['l’eau chaude', 'hot water', '🌡️'],
  ['la lumière', 'light', '💡'],
  ['le plombier', 'plumber', '🧑‍🔧'],
  ['l’électricien', 'electrician', '⚡'],
  ['réparer', 'to repair', '🔧'],
  ['marcher', 'to work (a machine)', '⚙️'],
  ['Ça ne marche pas.', 'It does not work.', '❌'],
  ['Il y a une fuite.', 'There is a leak.', '🚱'],
  ['désolé, désolée', 'sorry', '🙇'],
]);

const rules = vocabList(U, 'House rules', [
  ['le règlement', 'house rules', '📋'],
  ['interdit, interdite', 'forbidden', '⛔'],
  ['Il est interdit de …', 'It is forbidden to …', '🚭'],
  ['Ne pas …', 'Do not … (written rule)', '🙅'],
  ['le bruit', 'noise', '🔊'],
  ['le silence', 'silence', '🤫'],
  ['fumer', 'to smoke', '🚬'],
  ['jeter', 'to throw away', '🗑️'],
  ['la poubelle', 'rubbish bin', '♻️'],
  ['fermer', 'to close, to lock', '🔒'],
  ['la clé', 'key', '🗝️'],
  ['laisser', 'to leave', '👋'],
  ['garer', 'to park', '🅿️'],
]);

const where = vocabList(U, 'Where exactly?', [
  ['au-dessus de', 'above', '⬆️'],
  ['en dessous de', 'below, under', '⏬'],
  ['au milieu de', 'in the middle of', '🎯'],
  ['autour de', 'around', '🔄'],
  ['contre', 'against', '🧱'],
  ['à l’intérieur de', 'inside', '📥'],
  ['à l’extérieur de', 'outside', '📤'],
  ['au fond de', 'at the back of, at the end of', '🔚'],
  ['en haut', 'upstairs, at the top', '🔝'],
  ['en bas', 'downstairs, at the bottom', '🔻'],
  ['au premier étage', 'on the first floor', '1️⃣'],
  ['par terre', 'on the floor', '🦶'],
]);

const vocab = [...rooms, ...furniture, ...repairs, ...rules, ...where];

const pictureQuiz = byDe(
  vocab,
  'le canapé',
  'le lit',
  'la douche',
  'le frigo',
  'la baignoire',
  'la lampe',
  'le plombier',
  'l’ascenseur',
);

const heard = byDe(
  vocab,
  'la fuite',
  'le chauffage',
  'l’eau chaude',
  'le plombier',
  'l’électricien',
  'réparer',
  'Ça ne marche pas.',
);

/** [object, bucket, English] for the room sort */
const ROOM_CARDS: [string, 'kitchen' | 'bathroom' | 'living', string][] = [
  ['le frigo', 'kitchen', 'fridge'],
  ['le four', 'kitchen', 'oven'],
  ['la cuisinière', 'kitchen', 'cooker'],
  ['le lave-vaisselle', 'kitchen', 'dishwasher'],
  ['la douche', 'bathroom', 'shower'],
  ['la baignoire', 'bathroom', 'bathtub'],
  ['le lavabo', 'bathroom', 'washbasin'],
  ['le miroir', 'bathroom', 'mirror'],
  ['le canapé', 'living', 'sofa'],
  ['le fauteuil', 'living', 'armchair'],
  ['la télévision', 'living', 'television'],
  ['le tapis', 'living', 'rug'],
];

export const logement: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Chez moi',
    subtitle: 'Describe your home, report a problem and follow the house rules',
    emoji: '🏠',
    goals: [
      'Name the rooms, the furniture and the appliances',
      'Say where things are with more place words',
      'Report a problem at home and apologise',
      'Understand and give simple house rules',
    ],
    grammar: [
      'Object pronouns: le, la, l’, les',
      'The pronoun y',
      'Rules with the infinitive and the imperative',
      'au-dessus de, au milieu de, à l’intérieur de',
    ],
    vocabFields: [
      'Rooms and the building',
      'Furniture and appliances',
      'Problems and repairs',
      'House rules',
      'Where exactly?',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-rooms',
      'flashcards',
      {
        title: 'Rooms and the building',
        description: 'The rooms of a flat, the building and the people who go with it.',
        tags: ['vocabulary', 'housing'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(rooms),
    ),

    activity(
      U,
      'flash-furniture',
      'flashcards',
      {
        title: 'Furniture and appliances',
        description: 'What you find in the kitchen, the bathroom and the living room.',
        tags: ['vocabulary', 'housing'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(furniture),
    ),

    activity(
      U,
      'flash-repairs',
      'flashcards',
      {
        title: 'Problems and repairs',
        description: 'Say what is broken and who can repair it.',
        tags: ['vocabulary', 'household'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(repairs),
    ),

    activity(
      U,
      'flash-rules',
      'flashcards',
      {
        title: 'House rules',
        description: 'The words of a notice in the stairwell.',
        tags: ['vocabulary', 'household'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(rules),
    ),

    activity(
      U,
      'flash-where',
      'flashcards',
      {
        title: 'Where exactly?',
        description: 'Above, below, around, inside, outside.',
        tags: ['vocabulary', 'housing'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(where),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'What is in the flat?',
        description: 'Look at the picture and pick the word.',
        tags: ['vocabulary', 'housing'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, [...rooms, ...furniture, ...repairs], 4),
    ),

    activity(
      U,
      'listen-repairs',
      'listen',
      {
        title: 'Listen to the problem',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'household'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(heard, repairs),
    ),

    activity(
      U,
      'sort-rooms',
      'sortit',
      {
        title: 'Which room?',
        description: 'Sort the appliances and furniture by room.',
        tags: ['vocabulary', 'housing'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'In which room do you usually find it?',
        buckets: [
          { id: 'kitchen', label: 'la cuisine', emoji: '🍳' },
          { id: 'bathroom', label: 'la salle de bains', emoji: '🛁' },
          { id: 'living', label: 'le salon', emoji: '🛋️' },
        ],
        items: ROOM_CARDS.map(([text, bucket, translation], i) => ({
          id: `r${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-object-pronouns',
      'gapfill',
      {
        title: 'le, la, l’ or les?',
        description: 'Replace the noun with the right pronoun.',
        tags: ['grammar', 'fr-a12-object-pronouns', 'housing'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a12-object-pronouns',
      },
      {
        items: [
          {
            id: 'o1',
            text: 'Tu prends la lampe ? – Oui, je ___ prends.',
            answer: 'la',
            options: ['la', 'le', 'l’', 'les'],
            translation: 'Are you taking the lamp? – Yes, I am taking it.',
            explanation: 'Lampe is feminine, so la replaces it, right before the verb.',
          },
          {
            id: 'o2',
            text: 'Le plombier répare le lavabo. Il ___ répare ce matin.',
            answer: 'le',
            options: ['le', 'la', 'les', 'l’'],
            translation: 'The plumber is repairing the washbasin. He is repairing it this morning.',
            explanation: 'Lavabo is masculine, so le replaces it.',
          },
          {
            id: 'o3',
            text: 'Tu aimes ces rideaux ? – Oui, je ___ aime beaucoup.',
            answer: 'les',
            options: ['les', 'le', 'la', 'l’'],
            translation: 'Do you like these curtains? – Yes, I like them a lot.',
            explanation: 'Rideaux is plural, so les replaces it.',
          },
          {
            id: 'o4',
            text: 'Tu aimes le canapé ? – Oui, je ___.',
            answer: 'l’aime',
            options: ['l’aime', 'le aime', 'la aime', 'les aime'],
            translation: 'Do you like the sofa? – Yes, I like it.',
            explanation: 'Le becomes l’ before a vowel: je l’aime.',
          },
          {
            id: 'o5',
            text: 'Le fauteuil est cassé. Nous ne ___ prenons pas.',
            answer: 'le',
            options: ['le', 'la', 'les', 'l’'],
            translation: 'The armchair is broken. We are not taking it.',
            explanation: 'In the negative ne goes before the pronoun: nous ne le prenons pas.',
          },
          {
            id: 'o6',
            text: 'Voilà la lampe. Je vais ___ mettre dans le salon.',
            answer: 'la',
            options: ['la', 'le', 'les', 'l’'],
            translation: 'Here is the lamp. I am going to put it in the living room.',
            explanation: 'With aller + infinitive the pronoun goes before the infinitive.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-y',
      'gapfill',
      {
        title: 'The little word y',
        description: 'Replace a place with y.',
        tags: ['grammar', 'fr-y', 'housing'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-y',
      },
      {
        items: [
          {
            id: 'y1',
            text: 'Tu vas au marché ? – Oui, ___.',
            answer: 'j’y vais',
            options: ['j’y vais', 'je vais y', 'je y vais', 'j’en vais'],
            translation: 'Are you going to the market? – Yes, I am going there.',
            explanation: 'Y replaces au marché and goes before the verb: j’y vais.',
          },
          {
            id: 'y2',
            text: 'Vous restez à la maison ? – Oui, nous ___.',
            answer: 'y restons',
            options: ['y restons', 'restons y', 'y restez', 'les restons'],
            translation: 'Are you staying at home? – Yes, we are staying there.',
            explanation: 'Y goes before the verb, and the verb agrees with nous: nous y restons.',
          },
          {
            id: 'y3',
            text: 'Tu vas à la cave ? – Non, je n’___ vais pas.',
            answer: 'y',
            options: ['y', 'l’', 'le', 'en'],
            translation: 'Are you going to the cellar? – No, I am not going there.',
            explanation: 'Ne and pas wrap the pronoun and the verb: je n’y vais pas.',
          },
          {
            id: 'y4',
            text: 'Le chat est dans le jardin ? – Oui, il ___ est.',
            answer: 'y',
            options: ['y', 'le', 'la', 'les'],
            translation: 'Is the cat in the garden? – Yes, it is there.',
            explanation: 'Y stands for dans le jardin.',
          },
          {
            id: 'y5',
            text: 'Nous allons à la gare. Nous ___ allons à pied.',
            answer: 'y',
            options: ['y', 'la', 'les', 'l’'],
            translation: 'We are going to the station. We are going there on foot.',
            explanation: 'Y replaces a place; la would replace a thing.',
          },
          {
            id: 'y6',
            text: 'Tu veux aller chez le plombier ? – Oui, je vais ___ aller demain.',
            answer: 'y',
            options: ['y', 'le', 'la', 'l’'],
            translation:
              'Do you want to go to the plumber’s? – Yes, I am going to go there tomorrow.',
            explanation: 'With aller + infinitive y goes before the infinitive: je vais y aller.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-where',
      'gapfill',
      {
        title: 'Where is it exactly?',
        description: 'Pick the place word and watch du, de la, de l’.',
        tags: ['grammar', 'fr-place-more', 'housing'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-place-more',
      },
      {
        items: [
          {
            id: 'p1',
            text: 'La lampe est ___ la table.',
            answer: 'au-dessus de',
            options: ['au-dessus de', 'en dessous de', 'autour de', 'contre'],
            translation: 'The lamp is above the table.',
            explanation: 'Au-dessus de means above, followed by the noun.',
          },
          {
            id: 'p2',
            text: 'Le chat dort ___ canapé.',
            answer: 'en dessous du',
            options: ['en dessous du', 'en dessous de', 'au-dessus du', 'contre du'],
            translation: 'The cat sleeps under the sofa.',
            explanation: 'De + le contracts to du: en dessous du canapé.',
          },
          {
            id: 'p3',
            text: 'Le tapis est ___ salon.',
            answer: 'au milieu du',
            options: ['au milieu du', 'au milieu de la', 'autour du', 'contre le'],
            translation: 'The rug is in the middle of the living room.',
            explanation: 'Salon is masculine: de + le = du.',
          },
          {
            id: 'p4',
            text: 'Il y a des chaises ___ table.',
            answer: 'autour de la',
            options: ['autour de la', 'autour du', 'au milieu des', 'contre du'],
            translation: 'There are chairs around the table.',
            explanation: 'Table is feminine: de la.',
          },
          {
            id: 'p5',
            text: 'Le vélo est ___ la maison.',
            answer: 'à l’extérieur de',
            options: ['à l’extérieur de', 'à l’intérieur de', 'au fond de', 'contre de'],
            translation: 'The bike is outside the house.',
            explanation: 'À l’extérieur de means outside; à l’intérieur de means inside.',
          },
          {
            id: 'p6',
            text: 'Les toilettes sont ___ couloir.',
            answer: 'au fond du',
            options: ['au fond du', 'au fond de', 'au milieu de la', 'autour de'],
            translation: 'The toilet is at the end of the corridor.',
            explanation: 'Couloir is masculine: de + le = du.',
          },
          {
            id: 'p7',
            text: 'La chambre est ___.',
            answer: 'au premier étage',
            options: ['au premier étage', 'au rez-de-chaussée', 'par terre', 'autour'],
            translation: 'The bedroom is on the first floor.',
            explanation: 'Au premier étage means on the first floor above the ground floor.',
          },
          {
            id: 'p8',
            text: 'Le salon est en bas et les chambres sont ___.',
            answer: 'en haut',
            options: ['en haut', 'en bas', 'par terre', 'contre'],
            translation: 'The living room is downstairs and the bedrooms are upstairs.',
            explanation: 'En haut means upstairs; en bas means downstairs.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-rules',
      'gapfill',
      {
        title: 'Rules and orders',
        description: 'Written rules use the infinitive, orders use the imperative.',
        tags: ['grammar', 'fr-rules', 'household'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-rules',
      },
      {
        items: [
          {
            id: 'r1',
            text: 'Il est interdit ___ fumer dans l’immeuble.',
            answer: 'de',
            options: ['de', 'à', 'que', 'pour'],
            translation: 'Smoking is forbidden in the building.',
            explanation: 'The pattern is il est interdit de + infinitive.',
          },
          {
            id: 'r2',
            text: '___ pas jeter de papier par terre.',
            answer: 'Ne',
            options: ['Ne', 'Non', 'Pas', 'N’'],
            translation: 'Do not throw paper on the floor.',
            explanation: 'A written rule in the negative: ne pas + infinitive.',
          },
          {
            id: 'r3',
            text: '___ la porte à clé, s’il vous plaît.',
            answer: 'Fermez',
            options: ['Fermez', 'Fermer', 'Fermons', 'Fermes'],
            translation: 'Lock the door, please.',
            explanation: 'An order to vous uses the imperative: fermez.',
          },
          {
            id: 'r4',
            text: 'Ne ___ pas de bruit après dix heures !',
            answer: 'faites',
            options: ['faites', 'faire', 'fais', 'faisez'],
            translation: 'Do not make noise after ten o’clock!',
            explanation: 'In the negative imperative ne goes before the verb and pas after it.',
          },
          {
            id: 'r5',
            text: 'Il est interdit de ___ dans l’escalier.',
            answer: 'fumer',
            options: ['fumer', 'fumez', 'fumé', 'fume'],
            translation: 'It is forbidden to smoke on the stairs.',
            explanation: 'After de use the infinitive.',
          },
          {
            id: 'r6',
            text: 'Ne ___ pas la poubelle devant la porte, s’il te plaît.',
            answer: 'laisse',
            options: ['laisse', 'laisses', 'laisser', 'laissez'],
            translation: 'Do not leave the bin in front of the door, please.',
            explanation: 'The tu imperative of an -er verb has no -s: laisse.',
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
        tags: ['grammar', 'housing'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'There is a sofa in the living room.',
            words: ['Il', 'y', 'a', 'un', 'canapé', 'dans', 'le', 'salon.'],
            extra: ['une'],
          },
          {
            id: 's2',
            translation: 'The lamp is above the table.',
            words: ['La', 'lampe', 'est', 'au-dessus', 'de', 'la', 'table.'],
            extra: ['du'],
            lesson: 'fr-place-more',
          },
          {
            id: 's3',
            translation: 'I am not taking it (the lamp).',
            words: ['Je', 'ne', 'la', 'prends', 'pas.'],
            extra: ['le'],
            lesson: 'fr-a12-object-pronouns',
          },
          {
            id: 's4',
            translation: 'The plumber is repairing them today.',
            words: ['Le', 'plombier', 'les', 'répare', 'aujourd’hui.'],
            extra: ['la'],
            lesson: 'fr-a12-object-pronouns',
          },
          {
            id: 's5',
            translation: 'It is forbidden to smoke in the building.',
            words: ['Il', 'est', 'interdit', 'de', 'fumer', 'dans', 'l’immeuble.'],
            extra: ['à'],
            lesson: 'fr-rules',
          },
          {
            id: 's6',
            translation: 'We are going there tomorrow.',
            words: ['Nous', 'y', 'allons', 'demain.'],
            extra: ['la'],
            lesson: 'fr-y',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'A flat, a leak and a neighbour',
        description: 'Visit a flat, call a plumber and apologise to a neighbour.',
        tags: ['communication', 'housing'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'visit',
            title: 'Visiting a flat',
            emoji: '🏢',
            setting: 'You visit a flat with the estate agent. Use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'L’agent',
                text: 'Voici le salon. L’appartement a deux chambres et un balcon.',
                translation: 'Here is the living room. The flat has two bedrooms and a balcony.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Super ! Il y a un lave-vaisselle dans la cuisine ?', correct: true },
                  {
                    text: 'Super ! Il y a un lave-vaisselle sur la cuisine ?',
                    correct: false,
                    feedback: 'Sur means on top of. Inside a room you say dans.',
                  },
                  {
                    text: 'Super ! Il y a une lave-vaisselle dans la cuisine ?',
                    correct: false,
                    feedback: 'Lave-vaisselle is masculine: un lave-vaisselle.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'L’agent',
                text: 'Oui, il est neuf. Vous voulez voir la chambre ?',
                translation: 'Yes, it is new. Do you want to see the bedroom?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, je veux la voir.', correct: true },
                  {
                    text: 'Oui, je veux le voir.',
                    correct: false,
                    feedback: 'Chambre is feminine, so la.',
                  },
                  {
                    text: 'Oui, je la veux voir.',
                    correct: false,
                    feedback: 'The pronoun goes before the infinitive: je veux la voir.',
                  },
                ],
              },
            ],
          },
          {
            id: 'leak',
            title: 'A problem at home',
            emoji: '💧',
            setting: 'You phone a plumber. Use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'Le plombier',
                text: 'Allô ? Quel est le problème ?',
                translation: 'Hello? What is the problem?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Bonjour. Il y a une fuite dans la salle de bains.', correct: true },
                  {
                    text: 'Bonjour. Il y a un fuite dans la salle de bains.',
                    correct: false,
                    feedback: 'Fuite is feminine: une fuite.',
                  },
                  {
                    text: 'Bonjour. Il a une fuite dans la salle de bains.',
                    correct: false,
                    feedback: 'There is a leak is il y a une fuite.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le plombier',
                text: 'Je peux venir demain matin. Vous êtes à la maison ?',
                translation: 'I can come tomorrow morning. Are you at home?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, j’y suis tous les matins.', correct: true },
                  {
                    text: 'Oui, je la suis tous les matins.',
                    correct: false,
                    feedback: 'A place is replaced by y, not by la: j’y suis.',
                  },
                  {
                    text: 'Oui, je y suis tous les matins.',
                    correct: false,
                    feedback: 'Je shortens before y: j’y suis.',
                  },
                ],
              },
            ],
          },
          {
            id: 'neighbour',
            title: 'House rules',
            emoji: '🔊',
            setting: 'Madame Martin, your neighbour, knocks on your door. Use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'Madame Martin',
                text: 'Bonjour. Il y a beaucoup de bruit le soir chez vous.',
                translation: 'Hello. There is a lot of noise at your place in the evening.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Excusez-moi, madame. Je suis désolé pour le bruit.', correct: true },
                  {
                    text: 'Salut ! Je suis désolé pour le bruit.',
                    correct: false,
                    feedback: 'You say vous to your neighbour: do not start with salut.',
                  },
                  {
                    text: 'Excusez-moi, madame. Je désolé pour le bruit.',
                    correct: false,
                    feedback: 'You need the verb être: je suis désolé.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Madame Martin',
                text: 'Merci. Le règlement dit : Ne pas faire de bruit après vingt-deux heures.',
                translation: 'Thank you. The rules say: No noise after ten p.m.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'D’accord, je vais le respecter.', correct: true },
                  {
                    text: 'D’accord, je vais la respecter.',
                    correct: false,
                    feedback: 'Règlement is masculine: le.',
                  },
                  {
                    text: 'D’accord, je le vais respecter.',
                    correct: false,
                    feedback: 'The pronoun goes before the infinitive: je vais le respecter.',
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
        title: 'Home blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'grammar', 'housing'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“La salle de bains” is the bathroom.', isTrue: true },
          { id: 'b2', text: '“Le frigo” means “fridge”.', isTrue: true },
          {
            id: 'b3',
            text: '“Le loyer” means “the key”.',
            isTrue: false,
            explanation: 'Le loyer is the rent. The key is la clé.',
          },
          { id: 'b4', text: '“Je la prends” can replace “Je prends la lampe”.', isTrue: true },
          {
            id: 'b5',
            text: '“Je le prends” can replace “Je prends la lampe”.',
            isTrue: false,
            explanation: 'Lampe is feminine, so je la prends.',
          },
          { id: 'b6', text: '“J’y vais” means “I am going there”.', isTrue: true },
          {
            id: 'b7',
            text: '“Je ne vais y pas” is correct.',
            isTrue: false,
            explanation: 'Ne … pas wraps the pronoun and the verb: je n’y vais pas.',
          },
          {
            id: 'b8',
            text: '“Il est interdit de fumer” means “smoking is forbidden”.',
            isTrue: true,
          },
          {
            id: 'b9',
            text: '“Interdit” means “allowed”.',
            isTrue: false,
            explanation: 'Interdit means forbidden.',
          },
          { id: 'b10', text: '“Au-dessus de” means “above”.', isTrue: true },
          {
            id: 'b11',
            text: '“Autour du table” is correct.',
            isTrue: false,
            explanation: 'Table is feminine: autour de la table.',
          },
          { id: 'b12', text: '“Le plombier” is the plumber.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'housing'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “Je ___ prends.” (the lamp)',
            options: ['la', 'le', 'les', 'l’'],
            answer: 'la',
            lesson: 'fr-a12-object-pronouns',
          },
          {
            id: 'c2',
            prompt: 'Replace the noun: “Il répare les lampes.”',
            options: ['Il les répare.', 'Il la répare.', 'Il répare les.', 'Il les répare pas.'],
            answer: 'Il les répare.',
            lesson: 'fr-a12-object-pronouns',
          },
          {
            id: 'c3',
            prompt: 'Replace “à la cave”: “Nous allons à la cave.”',
            options: ['Nous y allons.', 'Nous la allons.', 'Nous allons y.', 'Nous les allons.'],
            answer: 'Nous y allons.',
            lesson: 'fr-y',
          },
          {
            id: 'c4',
            prompt: 'Which sentence is a written rule?',
            options: ['Ne pas fumer.', 'Je ne fume pas.', 'Il ne fume pas.', 'Nous fumons.'],
            answer: 'Ne pas fumer.',
            lesson: 'fr-rules',
          },
          {
            id: 'c5',
            prompt: 'How do you say “The lamp is above the table”?',
            options: [
              'La lampe est au-dessus de la table.',
              'La lampe est en dessous de la table.',
              'La lampe est autour de la table.',
              'La lampe est contre la table.',
            ],
            answer: 'La lampe est au-dessus de la table.',
            lesson: 'fr-place-more',
          },
          {
            id: 'c6',
            prompt: 'How do you say “The rug is in the middle of the living room”?',
            options: [
              'Le tapis est au milieu du salon.',
              'Le tapis est au milieu de le salon.',
              'Le tapis est au milieu de la salon.',
              'Le tapis est au milieu des salon.',
            ],
            answer: 'Le tapis est au milieu du salon.',
            lesson: 'fr-place-more',
          },
          {
            id: 'c7',
            prompt: 'What does “la panne” mean?',
            options: ['breakdown', 'leak', 'rent', 'key'],
            answer: 'breakdown',
          },
          {
            id: 'c8',
            prompt: 'What does “le locataire” mean?',
            options: ['tenant', 'owner', 'neighbour', 'plumber'],
            answer: 'tenant',
          },
        ],
      },
    ),
  ],
};
