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

const U = 'fr-a2-1-logement';

const building = vocabList(U, 'The building', [
  ['l’immeuble', 'apartment building', '🏢'],
  ['l’étage', 'floor / storey', '🔢'],
  ['le rez-de-chaussée', 'ground floor', '⬇️'],
  ['l’ascenseur', 'lift', '🛗'],
  ['l’escalier', 'staircase', '🪜'],
  ['le balcon', 'balcony', '🌇'],
  ['la terrasse', 'terrace', '☕'],
  ['la cave', 'cellar', '🍷'],
  ['le grenier', 'attic', '🕸️'],
  ['le studio', 'studio flat', '🏠'],
  ['le garage', 'garage', '🚗'],
  ['le couloir', 'corridor', '🚪'],
]);

const renting = vocabList(U, 'Renting a flat', [
  ['le loyer', 'rent', '💶'],
  ['les charges', 'service charges', '🧾'],
  ['le propriétaire', 'landlord', '🧑‍💼'],
  ['le locataire', 'tenant', '🧑‍🔧'],
  ['le colocataire', 'flatmate', '👥'],
  ['le bail', 'lease', '📃'],
  ['la caution', 'deposit', '💰'],
  ['l’agence immobilière', 'estate agent', '🏤'],
  ['l’annonce', 'advertisement', '📰'],
  ['l’état des lieux', 'inventory check', '📋'],
]);

const furniture = vocabList(U, 'Furniture and equipment', [
  ['le canapé', 'sofa', '🛋️'],
  ['l’étagère', 'shelf', '📚'],
  ['le placard', 'cupboard', '🗄️'],
  ['le tapis', 'rug', '🧶'],
  ['le rideau', 'curtain', '🪟'],
  ['la lampe', 'lamp', '💡'],
  ['le miroir', 'mirror', '🪞'],
  ['le frigo', 'fridge', '🧊'],
  ['le lave-linge', 'washing machine', '🧺'],
  ['le lave-vaisselle', 'dishwasher', '🍽️'],
  ['la baignoire', 'bathtub', '🛁'],
  ['le radiateur', 'radiator', '🌡️'],
]);

const verbs = vocabList(U, 'Moving in', [
  ['louer', 'to rent', '🏷️'],
  ['visiter', 'to view / to visit', '👀'],
  ['décorer', 'to decorate', '🖼️'],
  ['aménager', 'to fit out', '🔧'],
  ['meubler', 'to furnish', '🪑'],
  ['repeindre', 'to repaint', '🎨'],
  ['signer', 'to sign', '✍️'],
  ['ranger', 'to tidy up', '🧹'],
]);

const phrases = vocabList(U, 'Disappointment and comfort', [
  ['Il est à louer.', 'It is for rent.', '🪧'],
  ['Le loyer est de six cents euros.', 'The rent is 600 euros.', '💶'],
  ['Tant pis !', 'Never mind! / Too bad!', '🤷'],
  ['Quel dommage !', 'What a pity!', '😞'],
  ['Ce n’est pas grave.', 'It does not matter.', '🙂'],
  ['Ne t’inquiète pas.', 'Don’t worry.', '🤗'],
  ['Courage !', 'Hang in there!', '💪'],
  ['Je suis déçu.', 'I am disappointed.', '😕'],
  ['Ça m’énerve !', 'It annoys me!', '😠'],
  ['Je te comprends.', 'I understand you.', '🫂'],
  ['Ça va aller.', 'It will be fine.', '🌈'],
]);

const vocab = [...building, ...renting, ...furniture, ...verbs, ...phrases];

const REL = 'fr-a21-relatives' as const;
const CMP = 'fr-a21-comparison' as const;
const IF = 'fr-a21-condition' as const;

export const logement: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 4,
    title: 'Comme à la maison',
    subtitle: 'Find and rent a flat, compare, complain and console someone',
    emoji: '🛋️',
    goals: [
      'Describe and compare flats',
      'Join sentences with qui, que and où',
      'Give advice and comfort someone with si and set phrases',
    ],
    grammar: ['qui, que, où', 'plus, moins … que', 'si + présent'],
    vocabFields: [
      'The building',
      'Renting a flat',
      'Furniture and equipment',
      'Disappointment and comfort',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-building',
      'flashcards',
      meta(
        'The building',
        'Floors, lifts, balconies and cellars.',
        ['vocabulary', 'housing'],
        1,
        3,
      ),
      flashcards(building),
    ),

    activity(
      U,
      'flash-renting',
      'flashcards',
      meta('Renting a flat', 'Rent, lease, deposit and landlord.', ['vocabulary', 'housing'], 1, 3),
      flashcards(renting),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the part of the building or the piece of furniture.',
        ['vocabulary', 'housing'],
        1,
        3,
      ),
      quizEmoji([...building.slice(0, 7), ...furniture.slice(0, 5)], [...building, ...furniture]),
    ),

    activity(
      U,
      'listen-housing',
      'listen',
      meta(
        'Listen: the flat',
        'Listen to the word and pick its meaning.',
        ['listening', 'housing'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'l’ascenseur', 'le grenier', 'le loyer', 'la caution'),
          ...byDe(vocab, 'le placard', 'le lave-linge', 'décorer', 'meubler'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-furniture',
      'memory',
      meta(
        'Furniture memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'housing'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'le tapis', 'le rideau', 'le miroir', 'la baignoire'),
        ...byDe(vocab, 'louer', 'signer', 'ranger', 'repeindre'),
      ]),
    ),

    activity(
      U,
      'flash-furniture',
      'flashcards',
      meta(
        'Furniture and moving in',
        'Words for equipping a flat, and phrases for good and bad news.',
        ['vocabulary', 'communication', 'housing'],
        1,
        3,
      ),
      flashcards([...furniture, ...verbs, ...phrases]),
    ),

    activity(
      U,
      'conj-flat',
      'conjugation',
      meta(
        'Verbs of the flat',
        'Four irregular verbs you need to view, furnish and live in a flat.',
        ['grammar', 'housing'],
        2,
        4,
      ),
      {
        tables: [
          presentTable('mettre', 'to put', ['je', 'nous', 'ils/elles']),
          presentTable('voir', 'to see', ['tu', 'il/elle/on', 'vous']),
          presentTable('ouvrir', 'to open', ['je', 'nous', 'ils/elles']),
          presentTable('recevoir', 'to receive', ['tu', 'nous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-relatives',
      'gapfill',
      meta('qui, que or où?', 'Choose the relative pronoun.', ['grammar', REL, 'housing'], 2, 4),
      {
        items: gaps('r', REL, [
          [
            'Je cherche un appartement ___ a un balcon.',
            'qui',
            ['qui', 'que', 'où', 'quoi'],
            'I am looking for a flat that has a balcony.',
            'Appartement is the subject of a: qui.',
          ],
          [
            'L’appartement ___ nous avons visité est très lumineux.',
            'que',
            ['que', 'qui', 'où', 'quoi'],
            'The flat we viewed is very bright.',
            'Appartement is the object of avons visité (nous is the subject): que.',
          ],
          [
            'La rue ___ j’habite est calme.',
            'où',
            ['où', 'que', 'qui', 'dont'],
            'The street where I live is quiet.',
            'Où replaces a place.',
          ],
          [
            'Le voisin ___ habite au troisième étage est sympa.',
            'qui',
            ['qui', 'que', 'où', 'quoi'],
            'The neighbour who lives on the third floor is nice.',
            'Voisin is the subject of habite: qui.',
          ],
          [
            'C’est le quartier ___ j’adore.',
            'que',
            ['que', 'qui', 'où', 'quoi'],
            'It is the district I love.',
            'Quartier is the object of j’adore: que.',
          ],
          [
            'Voici l’agence ___ s’occupe de la location.',
            'qui',
            ['qui', 'que', 'où', 'quoi'],
            'Here is the agency that deals with the rental.',
            'Agence is the subject: qui.',
          ],
          [
            'Le jour ___ nous avons emménagé, il pleuvait.',
            'où',
            ['où', 'que', 'qui', 'quand'],
            'The day we moved in, it was raining.',
            'Où can also replace a time: le jour où.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sort-relatives',
      'sortit',
      meta(
        'Which pronoun fits?',
        'Sort the sentences by the relative pronoun that completes them.',
        ['grammar', REL],
        3,
        4,
      ),
      {
        instruction: 'Which pronoun fills the gap: qui, que or où?',
        buckets: [
          { id: 'qui', label: 'qui', emoji: '👤' },
          { id: 'que', label: 'que', emoji: '🎯' },
          { id: 'ou', label: 'où', emoji: '📍' },
        ],
        items: sortCards('s', [
          [
            'J’ai un voisin ___ joue de la guitare.',
            'qui',
            'I have a neighbour who plays the guitar.',
          ],
          ['Voici la clé ___ ouvre la cave.', 'qui', 'Here is the key that opens the cellar.'],
          [
            'Je cherche un studio ___ est près du métro.',
            'qui',
            'I am looking for a studio that is near the metro.',
          ],
          ['Voici l’appartement ___ je préfère.', 'que', 'Here is the flat I prefer.'],
          [
            'Le canapé ___ tu as acheté est confortable.',
            'que',
            'The sofa you bought is comfortable.',
          ],
          ['La lampe ___ elle a choisie est belle.', 'que', 'The lamp she chose is beautiful.'],
          ['La ville ___ nous habitons est petite.', 'ou', 'The town where we live is small.'],
          [
            'Le quartier ___ je suis né est calme.',
            'ou',
            'The district where I was born is quiet.',
          ],
          [
            'Le moment ___ j’ai signé le bail, j’étais heureux.',
            'ou',
            'The moment I signed the lease, I was happy.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-comparison',
      'gapfill',
      meta(
        'More, less, better',
        'Compare flats with plus, moins, meilleur and mieux.',
        ['grammar', CMP, 'housing'],
        3,
        4,
      ),
      {
        items: gaps('c', CMP, [
          [
            'Ce studio fait 20 m² et l’autre 40 m² : il est ___ grand que l’autre.',
            'moins',
            ['moins', 'plus', 'aussi', 'très'],
            'This studio is 20 m² and the other 40 m²: it is less big than the other.',
            'Smaller than = moins grand que.',
          ],
          [
            'Paris est ___ cher que Nantes : les loyers sont plus élevés.',
            'plus',
            ['plus', 'moins', 'aussi', 'très'],
            'Paris is more expensive than Nantes: rents are higher.',
            'Higher rents: plus cher que.',
          ],
          [
            'J’ai ___ de chaises que toi : j’en ai trois et tu en as dix.',
            'moins',
            ['moins', 'plus', 'aussi', 'très'],
            'I have fewer chairs than you: I have three and you have ten.',
            'Before a noun: moins de … que.',
          ],
          [
            'Ce canapé est très bon ; il est ___ que l’autre.',
            'meilleur',
            ['meilleur', 'mieux', 'plus bon', 'bon'],
            'This sofa is very good; it is better than the other.',
            'Bon (adjective) → meilleur, never plus bon.',
          ],
          [
            'Je dors ___ dans ce lit que dans l’ancien.',
            'mieux',
            ['mieux', 'meilleur', 'plus bien', 'bon'],
            'I sleep better in this bed than in the old one.',
            'Bien (adverb, with a verb) → mieux.',
          ],
          [
            'Ici c’est très calme : il y a ___ de bruit qu’avant.',
            'moins',
            ['moins', 'plus', 'trop', 'très'],
            'It is very quiet here: there is less noise than before.',
            'Quiet = less noise: moins de … que.',
          ],
          [
            'Un loyer est souvent ___ élevé à Paris qu’en province.',
            'plus',
            ['plus', 'moins', 'meilleur', 'mieux'],
            'Rent is often higher in Paris than in the provinces.',
            'Plus + adjective + que.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-condition',
      'gapfill',
      meta(
        'If … then',
        'After si use the present; the result is in the present or the imperative.',
        ['grammar', IF, 'housing'],
        2,
        4,
      ),
      {
        items: gaps('i', IF, [
          [
            'Si tu cherches un studio, ___ les annonces.',
            'regarde',
            ['regarde', 'regardes', 'regardait', 'regarder'],
            'If you are looking for a studio, look at the ads.',
            'The imperative of -er verbs drops the -s with tu.',
          ],
          [
            'Si tu ___ le temps, passe voir l’appartement.',
            'as',
            ['as', 'a', 'avais', 'auras'],
            'If you have time, come and see the flat.',
            'After si: the present.',
          ],
          [
            'Si vous ___, vous pouvez visiter demain.',
            'voulez',
            ['voulez', 'voulons', 'veulent', 'vouliez'],
            'If you like, you can visit tomorrow.',
            'Vouloir with vous: voulez.',
          ],
          [
            'Si le loyer est trop élevé, ___ un colocataire !',
            'cherche',
            ['cherche', 'cherches', 'cherchait', 'chercher'],
            'If the rent is too high, look for a flatmate!',
            'Imperative with tu: cherche.',
          ],
          [
            'Si on ___ ensemble, on paie moins de loyer.',
            'habite',
            ['habite', 'habitons', 'habitait', 'habiter'],
            'If we live together, we pay less rent.',
            'On takes the il form: habite.',
          ],
          [
            'Si tu ne ___ pas content, dis-le au propriétaire.',
            'es',
            ['es', 'est', 'étais', 'sois'],
            'If you are not happy, tell the landlord.',
            'Être with tu: es.',
          ],
          [
            'Si vous avez un problème, ___ le propriétaire.',
            'appelez',
            ['appelez', 'appelons', 'appelle', 'appeler'],
            'If you have a problem, call the landlord.',
            'Imperative with vous: appelez.',
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
        'Put the words about a flat in the right order.',
        ['grammar', 'housing'],
        2,
        4,
      ),
      {
        items: sentRows('s', [
          [
            REL,
            'The street where I live is quiet.',
            ['La', 'rue', 'où', 'j’habite', 'est', 'calme.'],
            ['que'],
          ],
          [
            REL,
            'The flat that we viewed is bright.',
            ['L’appartement', 'que', 'nous', 'avons', 'visité', 'est', 'lumineux.'],
            ['qui'],
          ],
          [
            CMP,
            'This studio is smaller than my old flat.',
            ['Ce', 'studio', 'est', 'plus', 'petit', 'que', 'mon', 'ancien', 'appartement.'],
            ['moins'],
          ],
          [
            IF,
            'If you like, we can visit tomorrow.',
            ['Si', 'vous', 'voulez,', 'on', 'peut', 'visiter', 'demain.'],
            ['peuvent'],
          ],
          [
            CMP,
            'There is less noise than before.',
            ['Il', 'y', 'a', 'moins', 'de', 'bruit', 'qu’avant.'],
            ['plus'],
          ],
          [IF, 'Never mind, don’t worry!', ['Tant', 'pis,', 'ne', 't’inquiète', 'pas !'], ['tu']],
        ]),
      },
    ),

    activity(
      U,
      'spell-flat',
      'spell',
      meta(
        'Spell the flat words',
        'Unscramble and type words about a flat. Accents are optional here.',
        ['spelling', 'housing'],
        2,
        3,
      ),
      {
        items: spellRows('sp', [
          ['unscramble', 'ascenseur', 'lift', '🛗', 'l’ascenseur'],
          ['unscramble', 'locataire', 'tenant', '🧑‍🔧', 'le locataire'],
          ['type', 'balcon', 'balcony', '🌇', 'le balcon'],
          ['type', 'canapé', 'sofa', '🛋️', 'le canapé'],
          ['type', 'loyer', 'rent', '💶', 'le loyer'],
        ]),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'At home',
        'View a flat, report a problem and comfort a friend.',
        ['communication', 'housing'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'visit',
            title: 'Viewing a flat',
            emoji: '🔑',
            setting: 'An estate agent shows you a flat. You say vous.',
            turns: [
              say(
                'L’agent',
                'Voici l’appartement que je vous ai montré en photo.',
                'Here is the flat I showed you in the photo.',
              ),
              you(
                'Il est plus grand que sur la photo !',
                ['Il est plus grand de sur la photo !', 'Comparison: plus grand que.'],
                ['Il est plus grande que sur la photo !', 'Appartement is masculine: grand.'],
              ),
              say(
                'L’agent',
                'Le loyer est de sept cent cinquante euros, charges comprises.',
                'The rent is 750 euros, service charges included.',
              ),
              you(
                'Si les charges sont comprises, je le prends.',
                [
                  'Si les charges seront comprises, je le prends.',
                  'After si use the present, not the future.',
                ],
                ['Si les charges sont comprises, je le prend.', 'Prendre with je: je prends.'],
              ),
            ],
          },
          {
            id: 'problem',
            title: 'A problem with the radiator',
            emoji: '🌡️',
            setting: 'You phone your landlord. You say vous.',
            turns: [
              say(
                'Le propriétaire',
                'Allô ? Que puis-je faire pour vous ?',
                'Hello? What can I do for you?',
              ),
              you(
                'Le radiateur qui est dans la chambre ne marche pas.',
                [
                  'Le radiateur que est dans la chambre ne marche pas.',
                  'The radiator is the subject of est: qui.',
                ],
                [
                  'Le radiateur où est dans la chambre ne marche pas.',
                  'Où gives a place; here the radiator is the subject: qui.',
                ],
              ),
              say(
                'Le propriétaire',
                'Je suis désolé. J’envoie quelqu’un demain.',
                'I am sorry. I will send someone tomorrow.',
              ),
              you(
                'Merci. Si personne ne vient, je vous rappelle.',
                [
                  'Merci. Si personne ne vient, je vous rappeler.',
                  'The verb must be conjugated: je vous rappelle.',
                ],
                [
                  'Merci. Si personne vient, je vous rappelle.',
                  'Personne needs ne before the verb: si personne ne vient.',
                ],
              ),
            ],
          },
          {
            id: 'console',
            title: 'Comforting a friend',
            emoji: '🫂',
            setting: 'Karim did not get the flat he wanted. You say tu.',
            turns: [
              say(
                'Karim',
                'Je n’ai pas eu l’appartement… Je suis très déçu.',
                'I did not get the flat… I am very disappointed.',
              ),
              you(
                'Ce n’est pas grave, ne t’inquiète pas !',
                [
                  'Ce n’est pas grave, tu t’inquiètes pas !',
                  'Negative imperative: ne t’inquiète pas.',
                ],
                [
                  'Tant mieux, tu es déçu !',
                  'Tant mieux means “good”. To console say tant pis or ce n’est pas grave.',
                ],
              ),
              say(
                'Karim',
                'Merci. Mais où est-ce que je vais habiter ?',
                'Thanks. But where am I going to live?',
              ),
              you(
                'Si tu veux, tu peux habiter chez moi.',
                ['Si tu veux, tu peut habiter chez moi.', 'Pouvoir with tu: tu peux.'],
                ['Si tu veux, il peut habiter chez moi.', 'Karim is “tu”, so the verb is tu peux.'],
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
      meta('Housing blitz', 'True or false? Beat the clock!', ['vocabulary', 'housing', REL], 2, 2),
      {
        seconds: 45,
        statements: tfRows('b', [
          ['“Le loyer” is the rent.', true],
          ['“La rue où j’habite” is correct.', true],
          [
            '“L’appartement qui j’ai visité” is correct.',
            false,
            'The object needs que: que j’ai visité.',
          ],
          ['“Un ascenseur” is a staircase.', false, 'It is a lift; a staircase is un escalier.'],
          ['“Plus grand que” means “bigger than”.', true],
          ['“Moins de bruit” means “less noise”.', true],
          ['“Meilleur” is the comparative of “bon”.', true],
          ['“Je dors plus bien” is correct.', false, 'Use mieux: je dors mieux.'],
          ['“Si tu as le temps, viens” is correct.', true],
          ['“Si tu auras le temps” is correct.', false, 'After si use the present.'],
          ['“Tant pis !” means “Never mind!”.', true],
          [
            '“Le propriétaire” is the tenant.',
            false,
            'It is the landlord; the tenant is le locataire.',
          ],
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
        ['vocabulary', 'grammar', 'housing'],
        3,
        4,
      ),
      {
        questions: quizRows('c', [
          ['Complete: “La rue ___ j’habite est calme.”', 'où', ['qui', 'que', 'quoi'], REL],
          [
            'Complete: “Le voisin ___ habite en face est gentil.”',
            'qui',
            ['que', 'où', 'quoi'],
            REL,
          ],
          [
            'Complete: “Le canapé ___ j’ai acheté est confortable.”',
            'que',
            ['qui', 'où', 'quoi'],
            REL,
          ],
          [
            'Complete: “Cette cuisine est ___ grande que l’autre.” (it is smaller)',
            'moins',
            ['plus', 'aussi', 'meilleur'],
            CMP,
          ],
          [
            'Complete: “Ce lit est ___ que l’ancien.”',
            'meilleur',
            ['mieux', 'plus bon', 'bien'],
            CMP,
          ],
          [
            'Which sentence is correct?',
            'Si tu veux, viens visiter.',
            [
              'Si tu voudras, viens visiter.',
              'Si tu veux, venir visiter.',
              'Si veux tu, viens visiter.',
            ],
            IF,
          ],
          [
            'What do you say to console a friend?',
            'Ce n’est pas grave.',
            ['Tant mieux !', 'Ça m’énerve !', 'Bonne chance !'],
          ],
          ['“La caution” is …', 'the deposit', ['the rent', 'the lease', 'the landlord']],
        ]),
      },
    ),
  ],
};
