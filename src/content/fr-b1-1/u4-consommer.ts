import { byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  sortCards,
  subjTable,
  tf,
  unitFr,
  withLesson,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-1-consommer';

const consumption = vocabList(U, 'Consuming differently', [
  ['la consommation', 'consumption', '🛒'],
  ['d’occasion', 'second-hand', '♻️'],
  ['le troc', 'bartering', '🔁'],
  ['la location', 'renting', '🔑'],
  ['le covoiturage', 'carpooling', '🚗'],
  ['le gaspillage', 'waste', '🗑️'],
  ['l’emballage', 'packaging', '📦'],
  ['le circuit court', 'short supply chain', '🥕'],
  ['la garantie', 'warranty', '🧾'],
  ['le vide-grenier', 'flea market', '🏷️'],
  ['la consigne', 'bottle deposit', '🍾'],
  ['s’abonner', 'to subscribe', '📰'],
  ['la plateforme', 'platform', '💻'],
  ['trier', 'to sort (waste)', '🗂️'],
]);

const places = vocabList(U, 'Shops and markets', [
  ['l’enseigne', 'shop brand, chain', '🏬'],
  ['le rayon', 'department, aisle', '🛍️'],
  ['la vitrine', 'shop window', '🪟'],
  ['l’étal', 'market stall', '🧺'],
  ['le commerce de proximité', 'local shop', '🏪'],
  ['la file d’attente', 'queue', '🚶'],
  ['l’ambiance', 'atmosphere', '🎶'],
  ['le stand', 'stand, booth', '⛺'],
  ['le client fidèle', 'loyal customer', '🤝'],
  ['les soldes', 'sales', '🏷️'],
  ['la promotion', 'special offer', '💸'],
  ['le tarif', 'price list, rate', '💶'],
]);

const certainty = vocabList(U, 'Certainty and doubt', [
  ['je suis sûr que', 'I am sure that', '✅'],
  ['il est évident que', 'it is obvious that', '👁️'],
  ['il est probable que', 'it is likely that', '📈'],
  ['il est possible que', 'it is possible that', '🤷'],
  ['il se peut que', 'it may be that', '🎲'],
  ['je doute que', 'I doubt that', '🤨'],
  ['il est douteux que', 'it is doubtful that', '❓'],
  ['je ne crois pas que', 'I do not think that', '🙅'],
]);

const vocab = [...consumption, ...places, ...certainty];

const MOOD_CARDS: [string, 'indicative' | 'subjunctive', string][] = [
  ['je suis sûr que', 'indicative', 'I am sure that'],
  ['il est évident que', 'indicative', 'it is obvious that'],
  ['je pense que', 'indicative', 'I think that'],
  ['il est certain que', 'indicative', 'it is certain that'],
  ['je crois que', 'indicative', 'I believe that'],
  ['il est probable que', 'indicative', 'it is likely that'],
  ['je doute que', 'subjunctive', 'I doubt that'],
  ['il est possible que', 'subjunctive', 'it is possible that'],
  ['il se peut que', 'subjunctive', 'it may be that'],
  ['je ne pense pas que', 'subjunctive', 'I do not think that'],
  ['il est douteux que', 'subjunctive', 'it is doubtful that'],
  ['je ne crois pas que', 'subjunctive', 'I do not believe that'],
];

const POSITION_CARDS: [string, 'before' | 'after', string][] = [
  ['beau', 'before', 'beautiful'],
  ['bon', 'before', 'good'],
  ['petit', 'before', 'small'],
  ['grand', 'before', 'big, tall'],
  ['jeune', 'before', 'young'],
  ['vieux', 'before', 'old'],
  ['nouveau', 'before', 'new'],
  ['joli', 'before', 'pretty'],
  ['rouge', 'after', 'red'],
  ['économique', 'after', 'economical'],
  ['local', 'after', 'local'],
  ['durable', 'after', 'sustainable'],
  ['français', 'after', 'French'],
  ['rond', 'after', 'round'],
];

export const consommer: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Consommer autrement',
    subtitle: 'Compare, give your point of view and describe shops, products and places',
    emoji: '♻️',
    goals: [
      'Say how sure you are and when to use the subjunctive',
      'Compare products, prices and shops',
      'Describe things with adjectives in the right place',
    ],
    grammar: [
      'Indicative or subjunctive after opinion verbs',
      'Comparative and superlative',
      'Place of the adjective',
    ],
    vocabFields: ['Consuming differently', 'Shops and markets', 'Certainty and doubt'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-consumption',
      'flashcards',
      meta(
        'Consuming differently',
        'Second-hand, sharing and less waste.',
        ['vocabulary', 'shopping'],
        1,
        4,
      ),
      flashcards(consumption),
    ),
    activity(
      U,
      'flash-places',
      'flashcards',
      meta(
        'Shops and markets',
        'Words for shops, stalls and offers.',
        ['vocabulary', 'shopping'],
        1,
        4,
      ),
      flashcards(places),
    ),
    activity(
      U,
      'flash-certainty',
      'flashcards',
      meta(
        'Certainty and doubt',
        'Say how sure you are.',
        ['vocabulary', 'opinions-presenting'],
        1,
        3,
      ),
      flashcards(certainty),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the meaning of the consumer words.',
        ['vocabulary', 'shopping'],
        1,
        3,
      ),
      quizDeEn(
        byDe(
          vocab,
          'd’occasion',
          'le troc',
          'le gaspillage',
          'l’emballage',
          'le circuit court',
          'la consigne',
          'l’étal',
          'les soldes',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'listen-consumption',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'shopping'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la location',
          'le covoiturage',
          'la garantie',
          'le vide-grenier',
          's’abonner',
          'trier',
          'la vitrine',
          'il se peut que',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'gap-certainty',
      'gapfill',
      {
        ...meta(
          'Indicative or subjunctive?',
          'Pick the right mood after the expression.',
          ['grammar', 'fr-b11-certainty', 'shopping'],
          2,
          5,
        ),
        lesson: 'fr-b11-certainty',
      },
      {
        items: [
          gap(
            'c1',
            'Je pense que cette plateforme ___ très utile.',
            'est',
            ['est', 'soit', 'être', 'sois'],
            'I think this platform is very useful.',
            'Je pense que + indicative.',
          ),
          gap(
            'c2',
            'Je ne pense pas que ce produit ___ durable.',
            'soit',
            ['soit', 'est', 'être', 'sera'],
            'I do not think this product is sustainable.',
            'Doubt or denial: subjunctive.',
          ),
          gap(
            'c3',
            'Il est évident que le gaspillage ___ un problème.',
            'est',
            ['est', 'soit', 'être', 'sont'],
            'It is obvious that waste is a problem.',
            'Il est évident que + indicative.',
          ),
          gap(
            'c4',
            'Il est possible que nous ___ moins.',
            'consommions',
            ['consommions', 'consommons', 'consommer', 'consommerons'],
            'It is possible that we consume less.',
            'Il est possible que + subjunctive.',
          ),
          gap(
            'c5',
            'Je suis sûr que tu ___ raison.',
            'as',
            ['as', 'aies', 'avoir', 'ait'],
            'I am sure you are right.',
            'Certainty: indicative.',
          ),
          gap(
            'c6',
            'Je doute que cette marque ___ vraiment locale.',
            'soit',
            ['soit', 'est', 'sera', 'être'],
            'I doubt that this brand is really local.',
            'Douter que + subjunctive.',
          ),
          gap(
            'c7',
            'Il est probable qu’elle ___ demain.',
            'viendra',
            ['viendra', 'vienne', 'venir', 'venue'],
            'She will probably come tomorrow.',
            'Il est probable que + indicative.',
          ),
          gap(
            'c8',
            'Il se peut que ce ___ plus cher.',
            'soit',
            ['soit', 'est', 'sera', 'être'],
            'It may be more expensive.',
            'Il se peut que + subjunctive.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-mood',
      'sortit',
      {
        ...meta(
          'Certain or doubtful?',
          'Sort the expressions by the mood they take.',
          ['grammar', 'fr-b11-certainty'],
          2,
          4,
        ),
        lesson: 'fr-b11-certainty',
      },
      {
        instruction: 'Which mood follows the expression?',
        buckets: [
          { id: 'indicative', label: 'Indicative (certain)', emoji: '✅' },
          { id: 'subjunctive', label: 'Subjunctive (doubt)', emoji: '🤔' },
        ],
        items: sortCards('m', MOOD_CARDS),
      },
    ),
    activity(
      U,
      'gap-comparison',
      'gapfill',
      {
        ...meta(
          'More, less or as much?',
          'Compare with plus, moins, aussi, autant and meilleur.',
          ['grammar', 'fr-b11-comparison', 'shopping'],
          2,
          5,
        ),
        lesson: 'fr-b11-comparison',
      },
      {
        items: [
          gap(
            'k1',
            'Ce magasin est ___ cher que l’autre.',
            'plus',
            ['plus', 'aussi', 'autant', 'meilleur'],
            'This shop is more expensive than the other.',
            'Plus + adjective + que.',
          ),
          gap(
            'k2',
            'Les produits locaux sont ___ bons que les produits importés.',
            'aussi',
            ['aussi', 'autant', 'plus', 'mieux'],
            'Local products are as good as imported ones.',
            'Aussi + adjective + que for equality.',
          ),
          gap(
            'k3',
            'C’est la plateforme ___ pratique de toutes.',
            'la plus',
            ['la plus', 'plus', 'le plus', 'la meilleure'],
            'It is the most practical platform of all.',
            'Superlative: la plus + adjective (feminine).',
          ),
          gap(
            'k4',
            'Ce vélo est ___ que l’ancien.',
            'meilleur',
            ['meilleur', 'mieux', 'plus bon', 'bon'],
            'This bike is better than the old one.',
            'Bon → meilleur (never plus bon).',
          ),
          gap(
            'k5',
            'Elle cuisine ___ que moi.',
            'mieux',
            ['mieux', 'meilleur', 'plus bien', 'meilleure'],
            'She cooks better than me.',
            'Bien → mieux (an adverb after a verb).',
          ),
          gap(
            'k6',
            'Nous achetons ___ de vêtements qu’avant.',
            'moins',
            ['moins', 'moindre', 'aussi', 'mieux'],
            'We buy fewer clothes than before.',
            'Moins de + noun + que.',
          ),
          gap(
            'k7',
            'C’est le marché ___ animé de la ville.',
            'le plus',
            ['le plus', 'plus', 'la plus', 'le meilleur'],
            'It is the liveliest market in town.',
            'Superlative: le plus + adjective (masculine).',
          ),
          gap(
            'k8',
            'Il y a ___ de bruit ici qu’en ville.',
            'autant',
            ['autant', 'aussi', 'tant', 'plus que'],
            'There is as much noise here as in town.',
            'Autant de + noun + que for equal amounts.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-position',
      'sortit',
      {
        ...meta(
          'Before or after the noun?',
          'Where does the adjective go?',
          ['grammar', 'fr-b11-adj-place', 'shopping'],
          2,
          4,
        ),
        lesson: 'fr-b11-adj-place',
      },
      {
        instruction: 'Where does the adjective usually go?',
        buckets: [
          { id: 'before', label: 'Before the noun', emoji: '⬅️' },
          { id: 'after', label: 'After the noun', emoji: '➡️' },
        ],
        items: sortCards('p', POSITION_CARDS),
      },
    ),
    activity(
      U,
      'conj-subjunctive',
      'conjugation',
      {
        ...meta(
          'Forms after doubt',
          'The subjunctive forms you need after je ne pense pas que.',
          ['grammar', 'fr-b11-certainty'],
          2,
          4,
        ),
        lesson: 'fr-b11-certainty',
      },
      {
        tables: [
          subjTable('aller-d', 'aller', 'to go', ['je', 'nous', 'ils/elles']),
          subjTable('etre-d', 'être', 'to be', ['tu', 'vous', 'il/elle/on']),
          subjTable('avoir-d', 'avoir', 'to have', ['je', 'tu', 'nous']),
          subjTable('savoir-d', 'savoir', 'to know', ['il/elle/on', 'vous', 'ils/elles']),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', 'shopping'], 2, 4),
      {
        items: [
          withLesson(
            'fr-b11-certainty',
            sent(
              's1',
              'I do not think this product is sustainable.',
              ['Je', 'ne', 'pense', 'pas', 'que', 'ce', 'produit', 'soit', 'durable.'],
              { extra: ['est'] },
            ),
          ),
          withLesson(
            'fr-b11-certainty',
            sent(
              's2',
              'It is obvious that waste is a problem.',
              ['Il', 'est', 'évident', 'que', 'le', 'gaspillage', 'est', 'un', 'problème.'],
              { extra: ['soit'] },
            ),
          ),
          withLesson(
            'fr-b11-comparison',
            sent(
              's3',
              'This shop is cheaper than the other.',
              ['Ce', 'magasin', 'est', 'moins', 'cher', 'que', 'l’autre.'],
              { extra: ['plus'] },
            ),
          ),
          withLesson(
            'fr-b11-comparison',
            sent(
              's4',
              'It is the most practical platform.',
              ['C’est', 'la', 'plateforme', 'la', 'plus', 'pratique.'],
              { extra: ['le'] },
            ),
          ),
          withLesson(
            'fr-b11-adj-place',
            sent(
              's5',
              'She has a beautiful old bike.',
              ['Elle', 'a', 'un', 'beau', 'vélo', 'ancien.'],
              { extra: ['bel'] },
            ),
          ),
          withLesson(
            'fr-b11-adj-place',
            sent(
              's6',
              'We are buying a small red car.',
              ['Nous', 'achetons', 'une', 'petite', 'voiture', 'rouge.'],
              { extra: ['petit'] },
            ),
          ),
        ],
      },
    ),
    activity(
      U,
      'spell-consumption',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words from the unit. Accents are optional here.',
        ['spelling', 'shopping'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-gaspillage',
            mode: 'unscramble',
            answer: 'gaspillage',
            hint: 'waste',
            emoji: '🗑️',
            speak: 'le gaspillage',
          },
          {
            id: 'sp-emballage',
            mode: 'unscramble',
            answer: 'emballage',
            hint: 'packaging',
            emoji: '📦',
            speak: 'l’emballage',
          },
          {
            id: 'sp-covoiturage',
            mode: 'type',
            answer: 'covoiturage',
            hint: 'carpooling',
            emoji: '🚗',
            speak: 'le covoiturage',
          },
          dictation('sp-consommation', 'consommation', 'consumption', 'la consommation'),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Shopping conversations',
        'A flea market, carpooling and a market stall.',
        ['communication', 'shopping'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'flea',
            title: 'At the flea market',
            emoji: '🏷️',
            setting: 'You are at a vide-grenier and talk to a seller. Use vous.',
            turns: [
              say(
                'La vendeuse',
                'Bonjour ! Cette lampe est en très bon état.',
                'Hello! This lamp is in very good condition.',
              ),
              you(
                'Elle est moins chère que dans un magasin, non ?',
                [
                  'Elle est moins chère comme dans un magasin, non ?',
                  'After moins + adjective the comparison uses que.',
                ],
                [
                  'Elle est moins cher que dans un magasin, non ?',
                  'Chère agrees with lampe (feminine).',
                ],
              ),
              say(
                'La vendeuse',
                'Oui, et c’est la plus belle de mon stand.',
                'Yes, and it is the most beautiful one at my stand.',
              ),
              you(
                'Je pense qu’elle est parfaite pour mon salon.',
                ['Je pense qu’elle soit parfaite pour mon salon.', 'Je pense que + indicative.'],
                [
                  'Je pense que elle est parfaite pour mon salon.',
                  'Que becomes qu’ before a vowel sound: qu’elle.',
                ],
              ),
              say('La vendeuse', 'Vous voulez l’emporter ?', 'Do you want to take it with you?'),
              you(
                'Oui, mais je ne crois pas que j’aie assez d’argent.',
                [
                  'Oui, mais je ne crois pas que j’ai assez d’argent.',
                  'Je ne crois pas que + subjunctive: j’aie.',
                ],
                [
                  'Oui, mais je ne crois pas que j’aies assez d’argent.',
                  'Aies is the tu form; with je it is j’aie.',
                ],
              ),
            ],
          },
          {
            id: 'carpool',
            title: 'Carpooling',
            emoji: '🚗',
            setting: 'You talk to your colleague Karim about getting to work. Use tu.',
            turns: [
              say('Karim', 'Tu viens au travail en voiture ?', 'Do you come to work by car?'),
              you('Non, je fais du covoiturage ; c’est meilleur pour la planète.', [
                'Non, je fais du covoiturage ; c’est plus bon pour la planète.',
                'Bon becomes meilleur in the comparative.',
              ]),
              say(
                'Karim',
                'Je me demande si c’est vraiment économique.',
                'I wonder whether it is really economical.',
              ),
              you(
                'Il est évident que ça coûte moins cher.',
                ['Il est évident que ça soit moins cher.', 'Il est évident que + indicative.'],
                ['Il est évident ça coûte moins cher.', 'Do not forget que.'],
              ),
              say('Karim', 'Alors, on essaie lundi ?', 'So, shall we try on Monday?'),
              you(
                'D’accord, mais je doute que ma voiture soit assez grande.',
                [
                  'D’accord, mais je doute que ma voiture est assez grande.',
                  'Douter que + subjunctive.',
                ],
                [
                  'D’accord, mais je doute que ma voiture être assez grande.',
                  'Use the conjugated subjunctive: soit.',
                ],
              ),
            ],
          },
          {
            id: 'stall',
            title: 'At a market stall',
            emoji: '🍓',
            setting: 'You buy strawberries from Mme Roche. Use vous.',
            turns: [
              say(
                'Mme Roche',
                'Ces fraises sont locales et très bonnes.',
                'These strawberries are local and very good.',
              ),
              you(
                'Ce sont les plus belles fraises du marché !',
                ['Ce sont les plus belles fraises de le marché !', 'De + le contracts to du.'],
                [
                  'Ce sont plus belles fraises du marché !',
                  'The superlative needs the article: les plus belles.',
                ],
              ),
              say(
                'Mme Roche',
                'Elles sont aussi sucrées que celles de l’an dernier.',
                'They are as sweet as last year’s.',
              ),
              you(
                'Il se peut qu’elles soient encore meilleures.',
                ['Il se peut qu’elles sont encore meilleures.', 'Il se peut que + subjunctive.'],
                [
                  'Il se peut qu’elles soient encore plus bonnes.',
                  'Bonnes becomes meilleures in the comparative.',
                ],
              ),
              say('Mme Roche', 'Combien en voulez-vous ?', 'How many would you like?'),
              you('Un petit panier, s’il vous plaît.', [
                'Un panier petit, s’il vous plaît.',
                'Petit goes before the noun.',
              ]),
            ],
          },
        ],
      },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      meta('Consumer blitz', 'True or false? Beat the clock!', ['grammar', 'shopping'], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Je pense que c’est utile” uses the indicative.', true),
          tf(
            'b2',
            '“Je ne pense pas que c’est utile” is correct.',
            false,
            'Je ne pense pas que is followed by the subjunctive: soit.',
          ),
          tf('b3', 'Douter que is followed by the subjunctive.', true),
          tf(
            'b4',
            '“Plus bon” is the comparative of bon.',
            false,
            'The comparative of bon is meilleur.',
          ),
          tf('b5', 'Bien becomes mieux in the comparative.', true),
          tf('b6', 'The superlative needs the article: le plus, la plus, les plus.', true),
          tf(
            'b7',
            '“Un panier petit” is the normal order.',
            false,
            'Petit goes before the noun: un petit panier.',
          ),
          tf('b8', 'Rouge goes after the noun.', true),
          tf(
            'b9',
            'Le troc is paying with a card.',
            false,
            'Le troc is bartering, swapping things without money.',
          ),
          tf('b10', 'D’occasion means second-hand.', true),
          tf('b11', 'L’étal is a market stall.', true),
          tf(
            'b12',
            'La consigne is a sort of warranty.',
            false,
            'La consigne is the deposit on a bottle; the warranty is la garantie.',
          ),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'shopping'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            'fr-b11-certainty',
            q('c1', 'Complete: “Je ne crois pas qu’il ___ raison.”', 'ait', ['a', 'aura', 'avoir']),
          ),
          withLesson(
            'fr-b11-certainty',
            q('c2', 'Complete: “Je suis sûr que c’___ une bonne idée.”', 'est', [
              'soit',
              'être',
              'sera',
            ]),
          ),
          withLesson(
            'fr-b11-comparison',
            q('c3', 'Complete: “Cette glace est ___ que l’autre.”', 'meilleure', [
              'plus bonne',
              'mieux',
              'bonne',
            ]),
          ),
          withLesson(
            'fr-b11-comparison',
            q('c4', 'Complete: “C’est le prix ___ bas de la ville.”', 'le plus', [
              'plus',
              'la plus',
              'le mieux',
            ]),
          ),
          withLesson(
            'fr-b11-adj-place',
            q('c5', 'Which phrase is correct? (a pretty red dress)', 'une jolie robe rouge', [
              'une rouge robe jolie',
              'une robe jolie rouge',
              'une rouge jolie robe',
            ]),
          ),
          withLesson(
            'fr-b11-adj-place',
            q('c6', 'Which phrase is correct? (a good meal)', 'un bon repas', [
              'un repas bon',
              'un bonne repas',
              'un repas bien',
            ]),
          ),
          q('c7', '“Le gaspillage” means …', 'waste', ['packaging', 'a discount', 'a warranty']),
          q('c8', '“Le covoiturage” is …', 'sharing a car ride', [
            'renting a flat',
            'a flea market',
            'a loyalty card',
          ]),
        ],
      },
    ),
  ],
};
