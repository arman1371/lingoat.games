import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import {
  frTable,
  gap,
  meta,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-a1-2-nature';

const town = vocabList(U, 'Town and countryside', [
  ['la campagne', 'countryside', '🌄'],
  ['le village', 'village', '🏘️'],
  ['la banlieue', 'suburbs', '🏙️'],
  ['la circulation', 'traffic', '🚦'],
  ['la pollution', 'pollution', '🏭'],
  ['le calme', 'calm, peace and quiet', '🕊️'],
  ['la foule', 'crowd', '👥'],
  ['les transports en commun', 'public transport', '🚌'],
  ['la ferme', 'farm', '🚜'],
  ['l’agriculteur, l’agricultrice', 'farmer', '👨‍🌾'],
  ['le champ', 'field', '🌾'],
  ['le mode de vie', 'lifestyle', '🌿'],
  ['le voisinage', 'neighbourhood, neighbours', '🤝'],
  ['le potager', 'vegetable garden', '🥕'],
]);

const nature = vocabList(U, 'Nature and landscape', [
  ['la forêt', 'forest', '🌲'],
  ['l’arbre', 'tree', '🌳'],
  ['la fleur', 'flower', '🌸'],
  ['l’herbe', 'grass', '🌱'],
  ['le lac', 'lake', '🏞️'],
  ['la rivière', 'river', '🏞️'],
  ['la colline', 'hill', '⛰️'],
  ['la vallée', 'valley', '🏔️'],
  ['le sentier', 'path, trail', '🥾'],
  ['l’île', 'island', '🏝️'],
  ['le ciel', 'sky', '🌌'],
  ['l’étoile', 'star', '⭐'],
  ['le nuage', 'cloud', '☁️'],
  ['la pierre', 'stone', '🪨'],
  ['le feu de camp', 'campfire', '🔥'],
  ['le coucher de soleil', 'sunset', '🌇'],
]);

const animals = vocabList(U, 'Animals', [
  ['le cheval', 'horse', '🐴'],
  ['la vache', 'cow', '🐄'],
  ['le mouton', 'sheep', '🐑'],
  ['le cochon', 'pig', '🐖'],
  ['la poule', 'hen', '🐔'],
  ['le lapin', 'rabbit', '🐇'],
  ['l’oiseau', 'bird', '🐦'],
  ['le renard', 'fox', '🦊'],
  ['le cerf', 'deer', '🦌'],
  ['la grenouille', 'frog', '🐸'],
  ['l’abeille', 'bee', '🐝'],
  ['le papillon', 'butterfly', '🦋'],
]);

const change = vocabList(U, 'Environment and a new life', [
  ['l’environnement', 'environment', '🌍'],
  ['la planète', 'planet', '🪐'],
  ['protéger', 'to protect', '🛡️'],
  ['polluer', 'to pollute', '🚱'],
  ['recycler', 'to recycle', '♻️'],
  ['le déchet', 'waste', '🗑️'],
  ['économiser', 'to save', '💡'],
  ['recommencer à zéro', 'to start from scratch', '🔄'],
  ['quitter la ville', 'to leave the city', '🚪'],
  ['cultiver', 'to grow (plants)', '🪴'],
  ['élever', 'to raise (animals)', '🐮'],
  ['tranquillement', 'quietly, calmly', '🧘'],
]);

const vocab = [...town, ...nature, ...animals, ...change];

const pictureQuiz = byDe(
  vocab,
  'le cheval',
  'la vache',
  'le renard',
  'la forêt',
  'le lac',
  'l’île',
  'le papillon',
  'le coucher de soleil',
);

const heard = byDe(
  vocab,
  'la circulation',
  'la rivière',
  'l’agriculteur, l’agricultrice',
  'le sentier',
  'protéger',
  'le déchet',
  'tranquillement',
);

export const grandAir: UnitContent = {
  unit: unitFr({
    id: U,
    order: 7,
    title: 'Au grand air',
    subtitle: 'Compare town and countryside, name nature and talk about a new life',
    emoji: '🌳',
    goals: [
      'Compare life in town and in the countryside',
      'Name landscapes, farm animals and wild animals',
      'Say how much there is of something',
      'Talk about the environment and a change of life',
    ],
    grammar: ['plus de, moins de, autant de + noun', 'The pronoun en', 'Adverbs in -ment'],
    vocabFields: [
      'Town and countryside',
      'Nature and landscape',
      'Animals',
      'Environment and a new life',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-town',
      'flashcards',
      meta(
        'Town and countryside',
        'Traffic, farms, fields and the lifestyle that goes with them.',
        ['vocabulary', 'urban-rural'],
        1,
        4,
      ),
      flashcards(town),
    ),

    activity(
      U,
      'flash-nature',
      'flashcards',
      meta(
        'Nature and landscape',
        'Forests, lakes, hills and the sky.',
        ['vocabulary', 'environment'],
        1,
        4,
      ),
      flashcards(nature),
    ),

    activity(
      U,
      'flash-animals',
      'flashcards',
      meta('Animals', 'Farm animals and wild animals.', ['vocabulary', 'environment'], 1, 3),
      flashcards(animals),
    ),

    activity(
      U,
      'flash-change',
      'flashcards',
      meta(
        'Environment and a new life',
        'Protect the planet or start a new life in the country.',
        ['vocabulary', 'environment', 'urban-rural'],
        1,
        3,
      ),
      flashcards(change),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'Animals and landscapes',
        'Look at the picture and pick the word.',
        ['vocabulary', 'environment'],
        1,
        3,
      ),
      quizEmoji(pictureQuiz, [...nature, ...animals], 4),
    ),

    activity(
      U,
      'listen-nature',
      'listen',
      meta(
        'Listen: in the country',
        'Listen to the word and pick its meaning.',
        ['listening', 'urban-rural'],
        2,
        3,
      ),
      listen(heard, vocab),
    ),

    activity(
      U,
      'sort-town-country',
      'sortit',
      meta(
        'Town or countryside?',
        'Where do you find it more often?',
        ['vocabulary', 'urban-rural'],
        2,
        3,
      ),
      {
        instruction: 'Where do you find it more often?',
        buckets: [
          { id: 'ville', label: 'en ville', emoji: '🏙️' },
          { id: 'campagne', label: 'à la campagne', emoji: '🌄' },
        ],
        items: sortCards('t', [
          ['la circulation', 'ville', 'traffic'],
          ['la pollution', 'ville', 'pollution'],
          ['la foule', 'ville', 'crowd'],
          ['les transports en commun', 'ville', 'public transport'],
          ['la banlieue', 'ville', 'suburbs'],
          ['la ferme', 'campagne', 'farm'],
          ['le champ', 'campagne', 'field'],
          ['le calme', 'campagne', 'peace and quiet'],
          ['le potager', 'campagne', 'vegetable garden'],
          ['l’agriculteur', 'campagne', 'farmer'],
        ]),
      },
    ),

    activity(
      U,
      'spell-nature',
      'spell',
      meta(
        'Spell the animals',
        'Unscramble and type the words. Accents are optional here.',
        ['spelling', 'environment'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-cheval',
            mode: 'unscramble',
            answer: 'cheval',
            hint: 'horse',
            emoji: '🐴',
            speak: 'cheval',
          },
          {
            id: 'sp-mouton',
            mode: 'unscramble',
            answer: 'mouton',
            hint: 'sheep',
            emoji: '🐑',
            speak: 'mouton',
          },
          {
            id: 'sp-renard',
            mode: 'type',
            answer: 'renard',
            hint: 'fox',
            emoji: '🦊',
            speak: 'renard',
          },
          {
            id: 'sp-abeille',
            mode: 'type',
            answer: 'abeille',
            hint: 'bee',
            emoji: '🐝',
            speak: 'abeille',
          },
          {
            id: 'sp-foret',
            mode: 'type',
            answer: 'forêt',
            hint: 'forest',
            emoji: '🌲',
            speak: 'forêt',
          },
        ],
      },
    ),

    activity(
      U,
      'conj-er',
      'conjugation',
      {
        ...meta(
          'Verbs of a new life',
          'Regular -er verbs: déménager keeps its e before -ons.',
          ['grammar', 'fr-er-verbs', 'urban-rural'],
          2,
          4,
        ),
        lesson: 'fr-er-verbs',
      },
      {
        tables: [
          frTable('demenager-1', 'déménager', 'to move house', ['je', 'nous', 'ils/elles']),
          frTable('cultiver-1', 'cultiver', 'to grow', ['tu', 'il/elle/on', 'vous']),
          frTable('recycler-1', 'recycler', 'to recycle', ['je', 'il/elle/on', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-quantity',
      'gapfill',
      {
        ...meta(
          'plus de, moins de, autant de',
          'Compare how much there is.',
          ['grammar', 'fr-a12-quantity-compare', 'urban-rural'],
          2,
          4,
        ),
        lesson: 'fr-a12-quantity-compare',
      },
      {
        items: [
          gap(
            'q1',
            'En ville, il y a ___ bruit qu’à la campagne.',
            'plus de',
            ['plus de', 'moins de', 'autant de', 'plus'],
            'In town there is more noise than in the countryside.',
            'More + noun: plus de.',
          ),
          gap(
            'q2',
            'À la campagne, il y a ___ pollution qu’en ville.',
            'moins de',
            ['moins de', 'plus de', 'autant de', 'moins'],
            'In the countryside there is less pollution than in town.',
            'Less + noun: moins de.',
          ),
          gap(
            'q3',
            'Mon village a ___ que ta ville : 800 chacun.',
            'autant d’habitants',
            ['autant d’habitants', 'plus d’habitants', 'moins d’habitants', 'aussi d’habitants'],
            'My village has as many inhabitants as your town: 800 each.',
            'As many + noun: autant de, which becomes autant d’ before a vowel.',
          ),
          gap(
            'q4',
            'Il y a ___ que de maisons dans ce quartier.',
            'plus d’arbres',
            ['plus d’arbres', 'plus de arbres', 'moins de arbres', 'autant arbres'],
            'There are more trees than houses in this area.',
            'Plus de becomes plus d’ before a vowel: plus d’arbres.',
          ),
          gap(
            'q5',
            'Ici, nous avons ___ temps : nous ne sommes jamais pressés.',
            'plus de',
            ['plus de', 'moins de', 'autant', 'très'],
            'Here we have more time: we are never in a hurry.',
            'More + noun: plus de.',
          ),
          gap(
            'q6',
            'La campagne offre ___ que la ville.',
            'autant',
            ['autant', 'aussi', 'plus de', 'tant'],
            'The countryside offers as much as the town.',
            'Without a noun after it, autant stands alone.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-en',
      'gapfill',
      {
        ...meta(
          'The pronoun en',
          'Replace du, de la, des or a number with en.',
          ['grammar', 'fr-a12-en', 'urban-rural'],
          2,
          4,
        ),
        lesson: 'fr-a12-en',
      },
      {
        items: [
          gap(
            'e1',
            'Tu as des légumes dans ton potager ? – Oui, j’___ ai beaucoup.',
            'en',
            ['en', 'y', 'le', 'les'],
            'Do you have vegetables in your garden? – Yes, I have a lot.',
            'En replaces des légumes and stays before the verb.',
          ),
          gap(
            'e2',
            'Il y a des vaches dans ce champ ? – Oui, il y ___ a dix.',
            'en',
            ['en', 'y', 'les', 'le'],
            'Are there cows in this field? – Yes, there are ten.',
            'The number stays at the end: il y en a dix.',
          ),
          gap(
            'e3',
            'Vous avez des poules ? – Non, nous n’___ avons pas.',
            'en',
            ['en', 'y', 'les', 'la'],
            'Do you have hens? – No, we do not have any.',
            'In the negative, ne goes before en: nous n’en avons pas.',
          ),
          gap(
            'e4',
            'Tu veux de la confiture ? – Oui, j’___ veux bien.',
            'en',
            ['en', 'la', 'y', 'le'],
            'Do you want some jam? – Yes, I would like some.',
            'En replaces du / de la / des + noun.',
          ),
          gap(
            'e5',
            'Combien de lapins tu as ? – J’___ ai trois.',
            'en',
            ['en', 'y', 'les', 'ils'],
            'How many rabbits do you have? – I have three.',
            'En stands for the noun; the number comes after the verb.',
          ),
          gap(
            'e6',
            'Il y a du calme ici ? – Oui, il y ___ a beaucoup.',
            'en',
            ['en', 'y', 'le', 'la'],
            'Is there peace and quiet here? – Yes, there is a lot.',
            'Il y en a beaucoup.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-adverbs',
      'gapfill',
      {
        ...meta(
          'Adverbs in -ment',
          'Make the adverb from the adjective.',
          ['grammar', 'fr-a12-adverbs', 'urban-rural'],
          2,
          4,
        ),
        lesson: 'fr-a12-adverbs',
      },
      {
        items: [
          gap(
            'a1',
            'À la campagne, on vit ___. (calme)',
            'calmement',
            ['calmement', 'calme', 'calment', 'calmmément'],
            'In the countryside, you live calmly.',
            'Calme ends in -e: add -ment.',
          ),
          gap(
            'a2',
            'Le renard marche ___ dans la forêt. (lent)',
            'lentement',
            ['lentement', 'lentment', 'lent', 'lentemment'],
            'The fox walks slowly in the forest.',
            'Lent becomes lente (feminine), then lentement.',
          ),
          gap(
            'a3',
            'Elle a ___ changé de vie. (complet)',
            'complètement',
            ['complètement', 'complétement', 'complet', 'complètment'],
            'She has completely changed her life.',
            'Complet becomes complète (feminine), then complètement.',
          ),
          gap(
            'a4',
            'Ils habitent ___ dans une petite maison. (heureux)',
            'heureusement',
            ['heureusement', 'heureux', 'heureuxment', 'heureuse'],
            'Luckily they live in a small house.',
            'Heureux becomes heureuse (feminine), then heureusement.',
          ),
          gap(
            'a5',
            'Il court très ___ dans le champ. (rapide)',
            'rapidement',
            ['rapidement', 'rapide', 'rapidment', 'rapid'],
            'He runs very fast in the field.',
            'Rapide ends in -e: add -ment.',
          ),
          gap(
            'a6',
            'Elle travaille ___ dans son jardin. (tranquille)',
            'tranquillement',
            ['tranquillement', 'tranquille', 'tranquilment', 'tranquillemment'],
            'She works quietly in her garden.',
            'Tranquille ends in -e: add -ment.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'urban-rural'],
        2,
        4,
      ),
      {
        items: [
          {
            ...sent(
              's1',
              'There is more traffic in town.',
              ['Il', 'y', 'a', 'plus', 'de', 'circulation', 'en', 'ville.'],
              { extra: ['moins'] },
            ),
            lesson: 'fr-a12-quantity-compare' as const,
          },
          {
            ...sent(
              's2',
              'We have as many trees as houses.',
              ['Nous', 'avons', 'autant', 'd’arbres', 'que', 'de', 'maisons.'],
              { extra: ['plus'] },
            ),
            lesson: 'fr-a12-quantity-compare' as const,
          },
          {
            ...sent('s3', 'I have three of them.', ['J’en', 'ai', 'trois.'], { extra: ['j’y'] }),
            lesson: 'fr-a12-en' as const,
          },
          {
            ...sent('s4', 'We do not have any.', ['Nous', 'n’en', 'avons', 'pas.'], {
              extra: ['y'],
            }),
            lesson: 'fr-a12-en' as const,
          },
          {
            ...sent(
              's5',
              'She lives calmly in the countryside.',
              ['Elle', 'vit', 'calmement', 'à', 'la', 'campagne.'],
              { extra: ['calme'] },
            ),
            lesson: 'fr-a12-adverbs' as const,
          },
          {
            ...sent(
              's6',
              'We want to change our lives.',
              ['Nous', 'voulons', 'changer', 'de', 'vie.'],
              { extra: ['la'] },
            ),
            lesson: 'fr-a12-savoir-pouvoir' as const,
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'A new life in the country',
        'Talk about moving out of town and about the village.',
        ['communication', 'urban-rural'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'move',
            title: 'Moving to the country',
            emoji: '📦',
            setting: 'A friend asks why you want to leave the city. Use tu.',
            turns: [
              say(
                'Hugo',
                'Tu veux vraiment quitter la ville ? Pourquoi ?',
                'Do you really want to leave the city? Why?',
              ),
              you(
                'Oui, parce qu’il y a trop de circulation et moins de calme.',
                [
                  'Oui, parce qu’il y a trop circulation et moins calme.',
                  'Before a noun use de: trop de circulation, moins de calme.',
                ],
                [
                  'Oui, pourquoi il y a trop de circulation et moins de calme.',
                  'Pourquoi asks the question. The answer starts with parce que.',
                ],
              ),
              say(
                'Hugo',
                'Mais à la campagne, tu n’as pas de transports en commun !',
                'But in the country you have no public transport!',
              ),
              you(
                'C’est vrai. J’en ai besoin un peu, mais j’aime marcher tranquillement.',
                [
                  'C’est vrai. J’y ai besoin un peu, mais j’aime marcher tranquillement.',
                  'Avoir besoin de takes de, so the pronoun is en, not y.',
                ],
                [
                  'C’est vrai. J’en ai besoin un peu, mais j’aime marcher tranquille.',
                  'The adverb is tranquillement.',
                ],
              ),
            ],
          },
          {
            id: 'village',
            title: 'In the village',
            emoji: '🏘️',
            setting: 'A neighbour shows you the village. Use vous.',
            turns: [
              say(
                'La voisine',
                'Voici notre potager. Nous cultivons des légumes. Vous en voulez ?',
                'Here is our vegetable garden. We grow vegetables. Do you want some?',
              ),
              you(
                'Oui, avec plaisir. J’en prends trois, merci !',
                [
                  'Oui, avec plaisir. J’y prends trois, merci !',
                  'En replaces the vegetables: j’en prends trois.',
                ],
                ['Oui, avec plaisir. Je les prends en trois, merci !', 'Say j’en prends trois.'],
              ),
              say(
                'La voisine',
                'Ici, il y a moins de bruit qu’en ville, mais beaucoup d’animaux.',
                'Here there is less noise than in town, but a lot of animals.',
              ),
              you(
                'C’est parfait ! Je dors complètement bien depuis mon arrivée.',
                [
                  'C’est parfait ! Je dors complet bien depuis mon arrivée.',
                  'The adverb is complètement.',
                ],
                [
                  'C’est parfait ! Je dors complètement bien pendant mon arrivée.',
                  'Still true now: depuis, not pendant.',
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
      meta(
        'Nature blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', 'urban-rural'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Le cheval” is a horse.', true),
          tf('b2', '“La poule” is a cow.', false, 'La poule is the hen. The cow is la vache.'),
          tf('b3', '“Il y a plus de bruit en ville” means “There is more noise in town”.', true),
          tf(
            'b4',
            '“Plus bruit” is correct before a noun.',
            false,
            'Before a noun use de: plus de bruit.',
          ),
          tf('b5', '“Autant de” means “as many / as much”.', true),
          tf('b6', '“J’en ai trois” means “I have three of them”.', true),
          tf(
            'b7',
            '“Je ai en trois” is correct.',
            false,
            'En goes before the verb: j’en ai trois.',
          ),
          tf('b8', '“Nous n’en avons pas” means “We have none”.', true),
          tf('b9', '“Calmement” comes from “calme”.', true),
          tf(
            'b10',
            '“Rapidement” comes from “rapid”.',
            false,
            'It comes from rapide, which already ends in -e: rapide + ment.',
          ),
          tf('b11', '“Recycler” means “to recycle”.', true),
          tf('b12', '“Le déchet” means “the decision”.', false, 'Le déchet is waste.'),
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
        ['vocabulary', 'grammar', 'urban-rural'],
        3,
        4,
      ),
      {
        questions: [
          {
            ...q('c1', 'Complete: “À la campagne il y a ___ bruit.” (less)', 'moins de', [
              'plus de',
              'autant',
              'moins',
            ]),
            lesson: 'fr-a12-quantity-compare' as const,
          },
          {
            ...q('c2', 'Replace the noun: “Je veux des fleurs.”', 'J’en veux.', [
              'Je les veux.',
              'J’y veux.',
              'Je veux en.',
            ]),
            lesson: 'fr-a12-en' as const,
          },
          {
            ...q('c3', 'Which sentence is correct?', 'Il y en a dix.', [
              'Il y a dix en.',
              'Il y en dix a.',
              'Il en y a dix.',
            ]),
            lesson: 'fr-a12-en' as const,
          },
          {
            ...q('c4', 'Make an adverb from “rapide”.', 'rapidement', [
              'rapidment',
              'rapide',
              'rapidemment',
            ]),
            lesson: 'fr-a12-adverbs' as const,
          },
          {
            ...q('c5', 'Make an adverb from “lent”.', 'lentement', [
              'lentment',
              'lentemment',
              'lente',
            ]),
            lesson: 'fr-a12-adverbs' as const,
          },
          q('c6', 'What does “le potager” mean?', 'vegetable garden', [
            'orchard',
            'farm',
            'greenhouse',
          ]),
          q('c7', 'What does “économiser” mean?', 'to save', ['to waste', 'to recycle', 'to buy']),
          q('c8', 'Which animal is “le renard”?', 'fox', ['wolf', 'deer', 'rabbit']),
        ],
      },
    ),
  ],
};
