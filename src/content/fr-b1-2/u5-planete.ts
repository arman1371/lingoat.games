import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  dictation,
  futurTable,
  gap,
  meta,
  q,
  say,
  scene,
  sent,
  sortCards,
  sp,
  tf,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-2-planete';
const PREP = 'fr-b12-prepositions' as const;

const planet = vocabList(U, 'Planet and pollution', [
  ['la pollution', 'pollution', '🏭'],
  ['le réchauffement', 'warming', '🌡️'],
  ['le déchet', 'waste', '🗑️'],
  ['le recyclage', 'recycling', '♻️'],
  ['l’éolienne', 'wind turbine', '🌬️'],
  ['le panneau solaire', 'solar panel', '☀️'],
  ['la ressource', 'resource', '💧'],
  ['l’espèce', 'species', '🐼'],
  ['la biodiversité', 'biodiversity', '🦋'],
  ['la sécheresse', 'drought', '🏜️'],
  ['l’inondation', 'flood', '🌊'],
  ['la génération', 'generation', '👨‍👩‍👧'],
  ['l’héritage', 'heritage, legacy', '🎁'],
  ['le geste', 'gesture, small action', '🤲'],
]);

const actions = vocabList(U, 'Protecting the planet', [
  ['polluer', 'to pollute', '🚬'],
  ['gaspiller', 'to waste', '💦'],
  ['trier', 'to sort (waste)', '🗂️'],
  ['recycler', 'to recycle', '🔄'],
  ['préserver', 'to preserve', '🛡️'],
  ['protéger', 'to protect', '🌳'],
  ['économiser', 'to save', '🐷'],
  ['sensibiliser', 'to raise awareness', '📣'],
  ['menacer', 'to threaten', '⚠️'],
  ['s’engager', 'to commit oneself', '✊'],
  ['disparaître', 'to disappear', '💨'],
  ['réchauffer', 'to warm up', '🔥'],
]);

const prepositions = vocabList(U, 'Verbs and adjectives with prepositions', [
  ['lutter contre', 'to fight against', '🥊'],
  ['être responsable de', 'to be responsible for', '🧾'],
  ['dépendre de', 'to depend on', '⛓️'],
  ['participer à', 'to take part in', '🙋'],
  ['se soucier de', 'to care about', '🧐'],
  ['être sensible à', 'to be sensitive to', '🤲'],
  ['contribuer à', 'to contribute to', '🧩'],
  ['s’occuper de', 'to take care of', '🧸'],
  ['compter sur', 'to count on', '🤞'],
  ['être favorable à', 'to be in favour of', '👍'],
  ['être capable de', 'to be able to', '💪'],
  ['s’intéresser à', 'to be interested in', '🔍'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['Nous sommes tous responsables de la planète.', 'We are all responsible for the planet.', '🌍'],
  ['Ils luttent contre le gaspillage.', 'They fight against waste.', '🥊'],
  ['Je m’intéresse à l’écologie.', 'I am interested in ecology.', '🌱'],
  [
    'Qu’allons-nous laisser aux générations futures ?',
    'What will we leave to future generations?',
    '👶',
  ],
  ['Chaque petit geste compte.', 'Every small action counts.', '🤲'],
]);

const vocab = [...planet, ...actions, ...prepositions, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const PREPOSITIONS: [string, string, string][] = [
  ['participer', 'a', 'to take part in'],
  ['s’intéresser', 'a', 'to be interested in'],
  ['contribuer', 'a', 'to contribute to'],
  ['penser', 'a', 'to think of'],
  ['dépendre', 'de', 'to depend on'],
  ['se soucier', 'de', 'to care about'],
  ['s’occuper', 'de', 'to take care of'],
  ['être capable', 'de', 'to be able to'],
  ['lutter', 'other', 'to fight against'],
  ['compter', 'other', 'to count on'],
  ['attendre', 'other', 'to wait for'],
  ['être favorable', 'a', 'to be in favour of'],
];

export const planete: UnitContent = {
  unit: unitFr({
    id: U,
    order: 5,
    title: 'La planète en héritage',
    subtitle:
      'Talk about the environment and choose the right preposition after a verb or an adjective',
    emoji: '🌍',
    goals: [
      'Talk about pollution, resources and everyday ecological actions',
      'Use verbs and adjectives with à, de and other prepositions',
      'Say what we owe to future generations',
    ],
    grammar: ['Verbes + à / de', 'Adjectifs + à / de', 'Verbes + préposition + nom ou infinitif'],
    vocabFields: [
      'Planet and pollution',
      'Protecting the planet',
      'Verbs and adjectives with prepositions',
      'Phrases',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-planet',
      'flashcards',
      meta(
        'Planet and pollution',
        'Words about the environment.',
        ['vocabulary', 'environment'],
        1,
        4,
      ),
      flashcards(planet),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What does it show?',
        'Look at the picture and pick the word.',
        ['vocabulary', 'environment'],
        1,
        3,
      ),
      quizEmoji(
        byDe(
          vocab,
          'la pollution',
          'le déchet',
          'le recyclage',
          'l’éolienne',
          'le panneau solaire',
          'la sécheresse',
          'l’inondation',
          'l’espèce',
        ),
        planet,
        4,
      ),
    ),

    activity(
      U,
      'memory-actions',
      'memory',
      meta(
        'Actions and meanings',
        'Match each verb with its English meaning.',
        ['vocabulary', 'environment'],
        2,
        3,
      ),
      memory(
        byDe(
          vocab,
          'polluer',
          'gaspiller',
          'trier',
          'préserver',
          'économiser',
          'sensibiliser',
          'menacer',
          'disparaître',
        ),
      ),
    ),

    activity(
      U,
      'listen-planet',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'environment'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la ressource',
          'la biodiversité',
          'l’héritage',
          'le geste',
          'recycler',
          'protéger',
          's’engager',
          'réchauffer',
        ),
        vocab.slice(0, 30),
      ),
    ),

    activity(
      U,
      'flash-actions',
      'flashcards',
      meta(
        'Protecting the planet',
        'Verbs of action and prevention.',
        ['vocabulary', 'environment'],
        1,
        4,
      ),
      flashcards(actions),
    ),

    activity(
      U,
      'flash-prepositions',
      'flashcards',
      meta(
        'Verbs with prepositions',
        'Learn the verb together with its preposition.',
        ['vocabulary', PREP, 'environment'],
        2,
        4,
      ),
      flashcards(prepositions),
    ),

    activity(
      U,
      'spell-planet',
      'spell',
      meta(
        'Spell the planet',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', 'environment'],
        2,
        4,
      ),
      {
        items: [
          sp('sp-dechet', 'unscramble', 'déchet', mean('le déchet'), '🗑️', 'le déchet'),
          sp('sp-pollution', 'unscramble', 'pollution', mean('la pollution'), '🏭', 'la pollution'),
          sp('sp-recyclage', 'type', 'recyclage', mean('le recyclage'), '♻️', 'le recyclage'),
          sp('sp-secheresse', 'type', 'sécheresse', mean('la sécheresse'), '🏜️', 'la sécheresse'),
          dictation('sp-gaspiller', 'gaspiller', 'to waste', 'gaspiller'),
          dictation('sp-heritage', 'héritage', 'legacy', 'l’héritage'),
        ],
      },
    ),

    activity(
      U,
      'sort-prepositions',
      'sortit',
      meta(
        'à, de or something else?',
        'Which preposition follows the verb?',
        ['grammar', PREP],
        2,
        3,
      ),
      {
        instruction: 'Which preposition follows the verb or adjective?',
        buckets: [
          { id: 'a', label: 'à', emoji: '➡️' },
          { id: 'de', label: 'de', emoji: '⬅️' },
          { id: 'other', label: 'contre / sur / no preposition', emoji: '🔀' },
        ],
        items: sortCards('p', PREPOSITIONS),
      },
    ),

    activity(
      U,
      'conj-actions',
      'conjugation',
      meta(
        'What we will do',
        'The simple future of environment verbs.',
        ['grammar', 'environment'],
        2,
        4,
      ),
      {
        tables: [
          futurTable('recycler-1', 'recycler', 'to recycle', ['je', 'tu', 'il/elle/on']),
          futurTable('trier-1', 'trier', 'to sort', ['nous', 'vous', 'ils/elles']),
          futurTable('proteger-1', 'protéger', 'to protect', ['je', 'nous', 'ils/elles']),
          futurTable('economiser-1', 'économiser', 'to save', ['tu', 'il/elle/on', 'vous']),
          futurTable('agir-1', 'agir', 'to act', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-prepositions',
      'gapfill',
      meta(
        'Which preposition?',
        'Complete the sentence with the right preposition.',
        ['grammar', PREP, 'environment'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Nous participons ___ une campagne de nettoyage.',
            'à',
            ['à', 'de', 'sur'],
            'We are taking part in a clean-up campaign.',
            'Participer à.',
          ),
          gap(
            'g2',
            'Il s’occupe ___ tri des déchets.',
            'du',
            ['du', 'au', 'sur le'],
            'He is in charge of sorting the waste.',
            'S’occuper de + le = du.',
          ),
          gap(
            'g3',
            'Les agriculteurs dépendent ___ la pluie.',
            'de',
            ['de', 'à', 'sur'],
            'Farmers depend on the rain.',
            'Dépendre de.',
          ),
          gap(
            'g4',
            'Elle lutte ___ la pollution.',
            'contre',
            ['contre', 'de', 'à'],
            'She fights against pollution.',
            'Lutter contre.',
          ),
          gap(
            'g5',
            'Je m’intéresse ___ énergies renouvelables.',
            'aux',
            ['aux', 'des', 'sur'],
            'I am interested in renewable energy.',
            'S’intéresser à + les = aux.',
          ),
          gap(
            'g6',
            'Nous comptons ___ vous pour ce projet.',
            'sur',
            ['sur', 'de', 'à'],
            'We are counting on you for this project.',
            'Compter sur.',
          ),
          gap(
            'g7',
            'Ils sont capables ___ changer leurs habitudes.',
            'de',
            ['de', 'à', 'sur'],
            'They are able to change their habits.',
            'Capable de + infinitive.',
          ),
          gap(
            'g8',
            'Il est sensible ___ problèmes du climat.',
            'aux',
            ['aux', 'des', 'à les'],
            'He is sensitive to climate issues.',
            'Sensible à + les = aux.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', PREP], 3, 4),
      {
        items: [
          sent(
            's1',
            'We are all responsible for the planet.',
            ['Nous', 'sommes', 'tous', 'responsables', 'de', 'la', 'planète.'],
            { extra: ['à'] },
          ),
          sent('s2', 'She is interested in ecology.', ['Elle', 's’intéresse', 'à', 'l’écologie.'], {
            extra: ['de'],
          }),
          sent('s3', 'They fight against waste.', [
            'Ils',
            'luttent',
            'contre',
            'le',
            'gaspillage.',
          ]),
          sent('s4', 'Everything depends on our actions.', [
            'Tout',
            'dépend',
            'de',
            'nos',
            'actions.',
          ]),
          sent('s5', 'Do you take part in the sorting?', ['Participez-vous', 'au', 'tri', '?']),
          sent('s6', 'I count on you.', ['Je', 'compte', 'sur', 'toi.']),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Small actions',
        'Talk about everyday gestures for the planet.',
        ['communication', 'environment'],
        2,
        6,
      ),
      {
        scenes: [
          scene(
            'gestes',
            'Everyday gestures',
            '♻️',
            'You talk to your neighbour Julie about waste. You say tu.',
            [
              say('Julie', 'Tu tries tes déchets, toi ?', 'Do you sort your waste?'),
              you(
                'Oui, je m’occupe du tri chaque semaine.',
                ['Oui, je m’occupe le tri chaque semaine.', 'S’occuper takes de: du tri.'],
                ['Oui, je m’occupe au tri chaque semaine.', 'S’occuper takes de, not à: du tri.'],
              ),
              say(
                'Julie',
                'Moi, je ne sais pas par où commencer.',
                'I do not know where to start.',
              ),
              you(
                'Chaque petit geste compte, tu sais.',
                [
                  'Chaque petit geste compte sur, tu sais.',
                  'Compter used like this needs no preposition: Chaque geste compte.',
                ],
                [
                  'Chaque petit geste comptent, tu sais.',
                  'Geste is singular, so the verb is compte.',
                ],
              ),
            ],
          ),
          scene(
            'reunion',
            'A meeting',
            '🏛️',
            'You attend a town-hall meeting and speak to the mayor. Use vous.',
            [
              say(
                'Le maire',
                'Nous voulons réduire la pollution en ville.',
                'We want to reduce pollution in town.',
              ),
              you(
                'Je suis favorable à cette idée.',
                ['Je suis favorable de cette idée.', 'Favorable takes à.'],
                ['Je suis favorable pour cette idée.', 'The set expression is favorable à.'],
              ),
              say('Le maire', 'Pouvons-nous compter sur vous ?', 'Can we count on you?'),
              you(
                'Oui, je participerai à votre projet.',
                ['Oui, je participerai de votre projet.', 'Participer takes à.'],
                ['Oui, je participerai votre projet.', 'Participer needs à before its complement.'],
              ),
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      meta('Preposition blitz', 'True or false? Beat the clock!', ['grammar', PREP], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Participer” is followed by à.', true),
          tf('b2', '“Dépendre” is followed by de.', true),
          tf(
            'b3',
            '“Lutter” is followed by de.',
            false,
            'You fight contre something: lutter contre.',
          ),
          tf('b4', '“S’occuper” is followed by à.', false, 'S’occuper de.'),
          tf('b5', 'de + le becomes du.', true),
          tf('b6', 'à + les becomes aux.', true),
          tf('b7', '“Être capable” is followed by de.', true),
          tf('b8', '“Compter” takes sur when you rely on someone.', true),
          tf('b9', '“Le déchet” means waste.', true),
          tf(
            'b10',
            '“Gaspiller” means to save.',
            false,
            'Gaspiller is to waste; économiser is to save.',
          ),
          tf('b11', '“La sécheresse” is a time without rain.', true),
          tf('b12', '“Sensible” takes à.', true),
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
        ['vocabulary', 'grammar', 'environment'],
        3,
        4,
      ),
      {
        questions: [
          q('c1', 'Complete: “Nous participons ___ projet.”', 'au', ['du', 'sur le', 'dans le']),
          q('c2', 'Which preposition follows “dépendre”?', 'de', ['à', 'sur', 'pour']),
          q('c3', '“Lutter contre la pollution” means …', 'to fight against pollution', [
            'to cause pollution',
            'to ignore pollution',
            'to measure pollution',
          ]),
          q('c4', 'What does “gaspiller” mean?', 'to waste', [
            'to sort',
            'to recycle',
            'to threaten',
          ]),
          q('c5', 'Complete: “Elle s’intéresse ___ écologie.”', 'à l’', [
            'de l’',
            'sur l’',
            'pour l’',
          ]),
          q('c6', 'What is “l’éolienne”?', 'a wind turbine', [
            'a solar panel',
            'a recycling bin',
            'a drought',
          ]),
          q('c7', 'Complete: “Je compte ___ toi.”', 'sur', ['de', 'à', 'pour']),
          q('c8', '“Être favorable à” means …', 'to be in favour of', [
            'to be responsible for',
            'to depend on',
            'to threaten',
          ]),
        ],
      },
    ),
  ],
};
