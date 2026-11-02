import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  dictation,
  gap,
  manualTable,
  meta,
  presentTable,
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

const U = 'fr-b1-2-ville';
const IND = 'fr-b12-indefinite' as const;
const TOPIC = 'city-country' as const;

const street = vocabList(U, 'Street and neighbourhood', [
  ['la propreté', 'cleanliness', '🧼'],
  ['l’incivilité', 'incivility, antisocial act', '😠'],
  ['le mégot', 'cigarette butt', '🚬'],
  ['le trottoir', 'pavement', '🚶'],
  ['le réverbère', 'street lamp', '💡'],
  ['le banc', 'bench', '🪑'],
  ['l’espace vert', 'green space', '🌳'],
  ['la fresque', 'mural', '🖼️'],
  ['le graffiti', 'graffiti', '🎨'],
  ['l’affiche', 'poster', '📋'],
  ['le tapage', 'racket, noise disturbance', '📢'],
  ['la nuisance', 'nuisance', '🚫'],
  ['le bien-être', 'well-being', '😌'],
  ['la tranquillité', 'peace and quiet', '🧘'],
]);

const actions = vocabList(U, 'Verbs for the city', [
  ['se plaindre', 'to complain', '😤'],
  ['signaler', 'to report', '🚨'],
  ['jeter', 'to throw', '🗑️'],
  ['nettoyer', 'to clean', '🧽'],
  ['ramasser', 'to pick up', '🧤'],
  ['dégrader', 'to damage', '💥'],
  ['embellir', 'to beautify', '🌸'],
  ['améliorer', 'to improve', '📈'],
  ['déranger', 'to disturb', '🔔'],
  ['flâner', 'to stroll', '🚶‍♀️'],
  ['peindre', 'to paint', '🖌️'],
  ['réclamer', 'to demand', '📣'],
]);

const pronouns = vocabList(U, 'Indefinite pronouns', [
  ['plusieurs', 'several', '🔢'],
  ['certains', 'some (people)', '🧑‍🤝‍🧑'],
  ['la plupart', 'most', '📊'],
  ['chacun', 'each one', '☝️'],
  ['aucun', 'none, not any', '🚫'],
  ['quelqu’un', 'someone', '👤'],
  ['personne', 'nobody', '🕳️'],
  ['rien', 'nothing', '⭕'],
  ['quelque chose', 'something', '📦'],
  ['n’importe quoi', 'anything, nonsense', '🤪'],
  ['tout le monde', 'everybody', '🌐'],
  ['d’autres', 'others', '➡️'],
]);

const phrases = vocabList(U, 'Phrases', [
  [
    'Plusieurs habitants se plaignent du bruit.',
    'Several residents complain about the noise.',
    '🔊',
  ],
  ['La plupart des gens respectent les règles.', 'Most people follow the rules.', '✅'],
  ['Chacun doit ramasser ses déchets.', 'Everyone must pick up their own waste.', '🧤'],
  ['Il n’y a personne dans la rue.', 'There is nobody in the street.', '🌙'],
  ['Je voudrais signaler un problème.', 'I would like to report a problem.', '🚨'],
]);

const vocab = [...street, ...actions, ...pronouns, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const KIND: [string, 'people' | 'things' | 'amount', string][] = [
  ['Quelqu’un a laissé un sac sur le banc.', 'people', 'Someone left a bag on the bench.'],
  ['Personne n’a entendu le bruit.', 'people', 'Nobody heard the noise.'],
  ['Tout le monde aime cette fresque.', 'people', 'Everybody likes this mural.'],
  ['Chacun a son avis sur la question.', 'people', 'Everyone has their own opinion on it.'],
  ['J’ai vu quelque chose d’étrange.', 'things', 'I saw something strange.'],
  ['Il n’y a rien à voir ici.', 'things', 'There is nothing to see here.'],
  ['Il dit n’importe quoi.', 'things', 'He is talking nonsense.'],
  ['La plupart des rues sont propres.', 'amount', 'Most streets are clean.'],
  ['Plusieurs voisins ont signé la pétition.', 'amount', 'Several neighbours signed the petition.'],
  ['Aucun habitant n’a protesté.', 'amount', 'No resident protested.'],
];

export const ville: UnitContent = {
  unit: unitFr({
    id: U,
    order: 7,
    title: 'Un tour en ville',
    subtitle: 'Describe city life, street art and everyday complaints with indefinite pronouns',
    emoji: '🏙️',
    goals: [
      'Talk about cleanliness, noise, green spaces and street art',
      'Use indefinite pronouns (plusieurs, chacun, personne, rien, la plupart …)',
      'Report a problem and make a complaint politely',
    ],
    grammar: [
      'Pronoms indéfinis (personnes, choses, quantités)',
      'ne … personne / ne … rien / ne … aucun',
      'en + quantité (j’en ai vu plusieurs)',
    ],
    vocabFields: [
      'Street and neighbourhood',
      'Verbs for the city',
      'Indefinite pronouns',
      'Phrases',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-street',
      'flashcards',
      meta(
        'Street and neighbourhood',
        'Words for the street and the neighbourhood.',
        ['vocabulary', TOPIC],
        1,
        4,
      ),
      flashcards(street),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What does it show?',
        'Look at the picture and pick the word.',
        ['vocabulary', TOPIC],
        1,
        3,
      ),
      quizEmoji(
        byDe(
          vocab,
          'le mégot',
          'le trottoir',
          'le réverbère',
          'le banc',
          'l’espace vert',
          'la fresque',
          'l’affiche',
          'le graffiti',
        ),
        street,
        4,
      ),
    ),

    activity(
      U,
      'memory-actions',
      'memory',
      meta(
        'Verbs and meanings',
        'Match each verb with its English meaning.',
        ['vocabulary', TOPIC],
        2,
        3,
      ),
      memory(
        byDe(
          vocab,
          'se plaindre',
          'signaler',
          'ramasser',
          'dégrader',
          'embellir',
          'déranger',
          'flâner',
          'réclamer',
        ),
      ),
    ),

    activity(
      U,
      'listen-street',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', TOPIC],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la propreté',
          'l’incivilité',
          'le tapage',
          'la nuisance',
          'le bien-être',
          'la tranquillité',
          'améliorer',
          'peindre',
        ),
        vocab.slice(0, 34),
      ),
    ),

    activity(
      U,
      'flash-pronouns',
      'flashcards',
      meta(
        'Indefinite pronouns',
        'Words for people, things and quantities.',
        ['vocabulary', IND],
        2,
        4,
      ),
      flashcards(pronouns),
    ),

    activity(
      U,
      'spell-street',
      'spell',
      meta(
        'Spell the street',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', TOPIC],
        2,
        4,
      ),
      {
        items: [
          sp('sp-trottoir', 'unscramble', 'trottoir', mean('le trottoir'), '🚶', 'le trottoir'),
          sp('sp-fresque', 'unscramble', 'fresque', mean('la fresque'), '🖼️', 'la fresque'),
          sp('sp-proprete', 'type', 'propreté', mean('la propreté'), '🧼', 'la propreté'),
          sp('sp-tapage', 'type', 'tapage', mean('le tapage'), '📢', 'le tapage'),
          dictation('sp-plusieurs', 'plusieurs', 'several', 'plusieurs'),
          dictation('sp-quelquun', 'quelqu’un', 'someone', 'quelqu’un'),
        ],
      },
    ),

    activity(
      U,
      'sort-pronouns',
      'sortit',
      meta(
        'People, things or amounts?',
        'What does the indefinite pronoun stand for?',
        ['grammar', IND],
        2,
        3,
      ),
      {
        instruction: 'Does the pronoun refer to people, things or an amount?',
        buckets: [
          { id: 'people', label: 'People', emoji: '👥' },
          { id: 'things', label: 'Things', emoji: '📦' },
          { id: 'amount', label: 'Amounts', emoji: '📊' },
        ],
        items: sortCards('k', KIND),
      },
    ),

    activity(
      U,
      'conj-city',
      'conjugation',
      meta('City verbs', 'The present tense of verbs for the street.', ['grammar', TOPIC], 2, 4),
      {
        tables: [
          presentTable('nettoyer-1', 'nettoyer', 'to clean', ['je', 'tu', 'il/elle/on']),
          presentTable('jeter-1', 'jeter', 'to throw', ['nous', 'vous', 'ils/elles']),
          presentTable('ramasser-1', 'ramasser', 'to pick up', ['je', 'nous', 'ils/elles']),
          manualTable(
            'plaindre-1',
            'se plaindre',
            'to complain',
            [
              'me plains',
              'te plains',
              'se plaint',
              'nous plaignons',
              'vous plaignez',
              'se plaignent',
            ],
            ['je', 'il/elle/on', 'ils/elles'],
          ),
          presentTable('signaler-1', 'signaler', 'to report', ['tu', 'nous', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'gap-pronouns',
      'gapfill',
      meta(
        'Which pronoun?',
        'Complete the sentence with the right indefinite pronoun.',
        ['grammar', IND, TOPIC],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            '___ des habitants sont contents du nouveau parc.',
            'La plupart',
            ['La plupart', 'Aucun', 'Personne'],
            'Most of the residents are happy with the new park.',
            'La plupart des + plural noun: most of.',
          ),
          gap(
            'g2',
            'Il n’y a ___ dans la rue à cette heure.',
            'personne',
            ['personne', 'quelqu’un', 'plusieurs'],
            'There is nobody in the street at this hour.',
            'Ne … personne = nobody.',
          ),
          gap(
            'g3',
            'Des affiches ? J’en ai vu ___ sur ce mur.',
            'plusieurs',
            ['plusieurs', 'chacun', 'personne'],
            'Posters? I saw several on this wall.',
            'En replaces the noun; plusieurs gives the amount.',
          ),
          gap(
            'g4',
            '___ doit ramasser ses déchets.',
            'Chacun',
            ['Chacun', 'Aucun', 'Rien'],
            'Everyone must pick up their own waste.',
            'Chacun = each person.',
          ),
          gap(
            'g5',
            'Je n’ai ___ vu de suspect.',
            'rien',
            ['rien', 'personne', 'aucun'],
            'I saw nothing suspicious.',
            'Ne … rien = nothing.',
          ),
          gap(
            'g6',
            '___ n’a protesté contre la fresque.',
            'Personne',
            ['Personne', 'Rien', 'Quelqu’un'],
            'Nobody protested against the mural.',
            'Personne can be the subject: Personne n’a …',
          ),
          gap(
            'g7',
            'J’ai posé trois questions et ___ réponse n’a été claire.',
            'aucune',
            ['aucune', 'aucun', 'personne'],
            'I asked three questions and no answer was clear.',
            'Aucune agrees with réponse (feminine).',
          ),
          gap(
            'g8',
            '___ pensent que la ville est trop bruyante, d’autres non.',
            'Certains',
            ['Certains', 'Chacun', 'Rien'],
            'Some people think the city is too noisy, others do not.',
            'Certains … d’autres = some … others.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', IND], 3, 4),
      {
        items: [
          sent('s1', 'Nobody has seen anything.', ['Personne', 'n’a', 'rien', 'vu.'], {
            extra: ['pas'],
          }),
          sent(
            's2',
            'Most people respect the rules.',
            ['La', 'plupart', 'des', 'gens', 'respectent', 'les', 'règles.'],
            { extra: ['respecte'] },
          ),
          sent('s3', 'Several neighbours are complaining.', [
            'Plusieurs',
            'voisins',
            'se',
            'plaignent.',
          ]),
          sent('s4', 'Everybody likes the mural.', [
            'Tout',
            'le',
            'monde',
            'aime',
            'cette',
            'fresque.',
          ]),
          sent('s5', 'I would like to report a problem.', [
            'Je',
            'voudrais',
            'signaler',
            'un',
            'problème.',
          ]),
          sent('s6', 'Some like it, others do not.', ['Certains', 'aiment,', 'd’autres', 'non.']),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'A complaint',
        'Report a problem and talk about the neighbourhood.',
        ['communication', TOPIC],
        3,
        6,
      ),
      {
        scenes: [
          scene('mairie', 'At the town hall', '🏛️', 'You report a problem to a clerk. Use vous.', [
            say(
              'L’employée',
              'Bonjour, que puis-je faire pour vous ?',
              'Hello, what can I do for you?',
            ),
            you(
              'Bonjour, je voudrais signaler un problème dans ma rue.',
              [
                'Bonjour, je veux signaler un problème dans ma rue.',
                'Je veux sounds blunt here; je voudrais is polite.',
              ],
              [
                'Bonjour, je signale un problème dans ma rue.',
                'The present is possible but flat; je voudrais signaler is the polite form.',
              ],
            ),
            say('L’employée', 'Il y a beaucoup de déchets ?', 'Is there a lot of waste?'),
            you(
              'Oui, plusieurs poubelles sont pleines et personne ne les vide.',
              [
                'Oui, plusieurs poubelles sont pleines et rien ne les vide.',
                'Rien refers to things; for people use personne.',
              ],
              [
                'Oui, plusieurs poubelles sont pleines et quelqu’un ne les vide pas.',
                'Quelqu’un is not used with ne … pas; say personne ne.',
              ],
            ),
          ]),
          scene(
            'quartier',
            'About the neighbourhood',
            '🖼️',
            'You talk with a neighbour about a new mural. You say tu.',
            [
              say('Samir', 'Tu aimes la nouvelle fresque ?', 'Do you like the new mural?'),
              you(
                'Oui, la plupart des voisins l’aiment.',
                ['Oui, la plupart des voisins l’aime.', 'The verb agrees with voisins: aiment.'],
                ['Oui, le plupart des voisins l’aiment.', 'La plupart is feminine.'],
              ),
              say('Samir', 'Certains trouvent ça laid.', 'Some find it ugly.'),
              you(
                'Chacun a ses goûts, d’autres adorent.',
                ['Chacun ont ses goûts, d’autres adorent.', 'Chacun is singular: chacun a.'],
                [
                  'Chaque a ses goûts, d’autres adorent.',
                  'Chaque is an adjective; as a pronoun use chacun.',
                ],
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
      meta('Pronoun blitz', 'True or false? Beat the clock!', ['grammar', IND], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Personne” means nobody.', true),
          tf('b2', '“Rien” means nothing.', true),
          tf('b3', '“Personne n’a vu” is correct.', true),
          tf('b4', '“Chacun ont” is correct.', false, 'Chacun is singular: chacun a.'),
          tf('b5', '“Plusieurs” is followed by a plural noun.', true),
          tf('b6', '“La plupart des gens” takes a plural verb.', true),
          tf(
            'b7',
            '“Aucun” can be used with a plural noun.',
            false,
            'Aucun is normally singular: aucun habitant.',
          ),
          tf('b8', '“Quelqu’un” means someone.', true),
          tf('b9', '“Le mégot” is a cigarette butt.', true),
          tf(
            'b10',
            '“Embellir” means to damage.',
            false,
            'Embellir is to beautify; dégrader is to damage.',
          ),
          tf('b11', '“Se plaindre” means to complain.', true),
          tf('b12', '“Certains” can refer to people.', true),
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
        ['vocabulary', 'grammar', TOPIC],
        3,
        4,
      ),
      {
        questions: [
          q('c1', 'Complete: “___ n’est venu.”', 'Personne', ['Rien', 'Plusieurs', 'Chaque']),
          q('c2', 'Complete: “Il n’y a ___ à manger.”', 'rien', [
            'personne',
            'plusieurs',
            'chacun',
          ]),
          q('c3', '“La plupart des gens” means …', 'most people', [
            'nobody',
            'some people',
            'every person',
          ]),
          q('c4', 'What does “le trottoir” mean?', 'the pavement', [
            'the bench',
            'the lamp',
            'the poster',
          ]),
          q('c5', 'Complete: “Des fresques ? Il y en a ___.”', 'plusieurs', [
            'personne',
            'rien',
            'chacun',
          ]),
          q('c6', 'Which verb means “to report”?', 'signaler', ['ramasser', 'flâner', 'peindre']),
          q('c7', 'Which pronoun means “each one”?', 'chacun', ['aucun', 'certains', 'rien']),
          q('c8', 'What does “la nuisance” mean?', 'a nuisance', [
            'cleanliness',
            'peace and quiet',
            'well-being',
          ]),
        ],
      },
    ),
  ],
};
