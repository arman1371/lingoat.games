import { vocabList } from '../builders';
import {
  activity,
  cards,
  g,
  meta,
  q,
  qs,
  say,
  sent,
  tf,
  unitFr,
  vocabGames,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b2-1-logement';

const renting = vocabList(U, 'Renting and sharing', [
  ['un colocataire', 'a flatmate', '🧑‍🤝‍🧑'],
  ['une colocation', 'a flatshare', '🏠'],
  ['un propriétaire', 'a landlord, an owner', '🔑'],
  ['un locataire', 'a tenant', '🧳'],
  ['un bail', 'a lease', '📃'],
  ['un loyer', 'rent', '💶'],
  ['les charges', 'service charges, bills', '🧾'],
  ['une caution', 'a deposit, a guarantee', '🔒'],
  ['un état des lieux', 'an inventory of fixtures', '📋'],
  ['un préavis', 'notice (period)', '📆'],
  ['une agence immobilière', 'an estate agency', '🏢'],
  ['un syndic', 'a property manager', '🧑‍💼'],
  ['une copropriété', 'a jointly owned building', '🏘️'],
  ['une quittance', 'a rent receipt', '🧾'],
]);

const describing = vocabList(U, 'Describing a home, complaining', [
  ['vétuste', 'run-down, dilapidated', '🏚️'],
  ['insalubre', 'unhealthy, unfit to live in', '🦠'],
  ['exigu', 'cramped', '📦'],
  ['spacieux', 'spacious', '🛋️'],
  ['lumineux', 'bright', '💡'],
  ['ensoleillé', 'sunny', '☀️'],
  ['une fuite', 'a leak', '💧'],
  ['une panne', 'a breakdown, a fault', '🔌'],
  ['un dégât des eaux', 'water damage', '🌊'],
  ['l’isolation', 'insulation', '🧱'],
  ['une nuisance', 'a nuisance', '🔊'],
  ['une réclamation', 'a complaint', '📣'],
]);

const phrases = vocabList(U, 'Living together', [
  ['Voici l’appartement dans lequel j’habite.', 'Here is the flat in which I live.', '🏢'],
  [
    'La personne avec qui je partage l’appartement est sympa.',
    'The person I share the flat with is nice.',
    '🤝',
  ],
  [
    'Le propriétaire auquel je paie le loyer est absent.',
    'The landlord to whom I pay the rent is away.',
    '🔑',
  ],
  [
    'La fenêtre par laquelle on voit la mer est cassée.',
    'The window through which you see the sea is broken.',
    '🪟',
  ],
  [
    'Les problèmes auxquels nous sommes confrontés sont graves.',
    'The problems we are facing are serious.',
    '⚠️',
  ],
  [
    'C’est un immeuble au pied duquel il y a un parc.',
    'It is a building at the foot of which there is a park.',
    '🌳',
  ],
  ['La raison pour laquelle j’ai déménagé est simple.', 'The reason why I moved is simple.', '📦'],
  [
    'Les murs entre lesquels passe la fuite sont humides.',
    'The walls between which the leak runs are damp.',
    '💧',
  ],
]);

const vocab = [...renting, ...describing, ...phrases];

const PREP: [string, 'a' | 'de' | 'other', string][] = [
  ['Le projet auquel je participe est utile.', 'a', 'The project I take part in is useful.'],
  [
    'Les questions auxquelles il a répondu étaient dures.',
    'a',
    'The questions he answered were hard.',
  ],
  ['La règle à laquelle je tiens est simple.', 'a', 'The rule I hold on to is simple.'],
  ['Le jardin près duquel j’habite est calme.', 'de', 'The garden near which I live is quiet.'],
  [
    'La place au centre de laquelle il y a une fontaine est jolie.',
    'de',
    'The square in the centre of which there is a fountain is pretty.',
  ],
  [
    'Les arbres à l’ombre desquels nous lisons sont vieux.',
    'de',
    'The trees in the shade of which we read are old.',
  ],
  ['La chambre dans laquelle je dors est petite.', 'other', 'The room in which I sleep is small.'],
  ['Les amis avec lesquels je vis sont sympas.', 'other', 'The friends with whom I live are nice.'],
  ['Le balcon sur lequel je lis est ensoleillé.', 'other', 'The balcony on which I read is sunny.'],
  [
    'Les raisons pour lesquelles je pars sont claires.',
    'other',
    'The reasons why I am leaving are clear.',
  ],
  [
    'La fenêtre par laquelle on voit la mer est ouverte.',
    'other',
    'The window through which you see the sea is open.',
  ],
  [
    'Les problèmes auxquels nous faisons face augmentent.',
    'a',
    'The problems we are facing are growing.',
  ],
];

export const logement: UnitContent = {
  unit: unitFr({
    id: U,
    order: 11,
    title: 'Logement',
    subtitle: 'Rent, share and describe a home, and complain with precise relative clauses',
    emoji: '🏠',
    goals: [
      'Talk about renting, flatshares and housing problems',
      'Make a complaint to a landlord or a property manager',
      'Use lequel, auquel and duquel after a preposition',
    ],
    grammar: ['Compound relative pronouns', 'Choosing the right relative pronoun'],
    vocabFields: ['Renting and sharing', 'Describing a home, complaining', 'Living together'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'housing', {
      a: {
        title: 'Renting and sharing',
        description: 'Words for flats and contracts.',
        words: renting,
      },
      b: {
        title: 'Describing a home, complaining',
        description: 'Adjectives and problems.',
        words: describing,
      },
      listen: [
        'un colocataire',
        'un bail',
        'un préavis',
        'un syndic',
        'vétuste',
        'exigu',
        'une fuite',
        'une réclamation',
      ],
      spell: [
        ['unscramble', 'colocataire', 'flatmate', '🧑‍🤝‍🧑', 'un colocataire'],
        ['unscramble', 'propriétaire', 'landlord', '🔑', 'un propriétaire'],
        ['type', 'loyer', 'rent', '💶', 'un loyer'],
        ['type', 'caution', 'deposit', '🔒', 'une caution'],
        ['type', 'lumineux', 'bright', '💡', 'lumineux'],
      ],
    }),

    activity(
      U,
      'gap-lequel',
      'gapfill',
      meta(
        'Lequel, auquel, duquel',
        'Pick the compound relative pronoun that agrees with the noun.',
        ['grammar', 'fr-lequel', 'housing'],
        3,
        4,
        'fr-lequel',
      ),
      {
        items: [
          g(
            'l1',
            'C’est l’appartement dans ___ j’habite.',
            'lequel',
            [
              ['laquelle', 'Appartement is masculine singular: lequel.'],
              ['que', 'After a preposition, que cannot be used.'],
              ['dont', 'Dont replaces de + noun, but here the preposition is dans.'],
            ],
            'This is the flat in which I live.',
            'Preposition + lequel / laquelle / lesquels / lesquelles.',
          ),
          g(
            'l2',
            'La fenêtre par ___ on voit la mer est cassée.',
            'laquelle',
            [
              ['lequel', 'Fenêtre is feminine: laquelle.'],
              ['lesquelles', 'Fenêtre is singular: laquelle.'],
              ['qui', 'Qui after a preposition is only used for people.'],
            ],
            'The window through which you see the sea is broken.',
            'Par laquelle: feminine singular.',
          ),
          g(
            'l3',
            'Les problèmes ___ nous sommes confrontés sont graves.',
            'auxquels',
            [
              ['lesquels', 'Être confronté à: the preposition à is needed (auxquels).'],
              ['desquels', 'Être confronté à, not de.'],
              ['à qui', 'À qui is only used for people.'],
            ],
            'The problems we are facing are serious.',
            'à + lesquels = auxquels.',
          ),
          g(
            'l4',
            'Les clés ___ je tiens sont à toi.',
            'auxquelles',
            [
              ['lesquelles', 'Tenir à: the preposition à is needed (auxquelles).'],
              ['desquelles', 'Tenir à, not de.'],
              ['dont', 'Tenir à, not tenir de.'],
            ],
            'The keys I hold on to are yours.',
            'à + lesquelles = auxquelles.',
          ),
          g(
            'l5',
            'L’immeuble au pied ___ il y a un parc est calme.',
            'duquel',
            [
              ['lequel', 'Au pied de: the preposition de is needed (duquel).'],
              ['dont', 'After a prepositional phrase (au pied de), use duquel, not dont.'],
              ['auquel', 'Au pied de, not à.'],
            ],
            'The building at the foot of which there is a park is quiet.',
            'de + lequel = duquel.',
          ),
          g(
            'l6',
            'La raison pour ___ j’ai déménagé est simple.',
            'laquelle',
            [
              ['lequel', 'Raison is feminine: laquelle.'],
              ['laquelles', 'Raison is singular: laquelle.'],
              ['dont', 'Dont replaces de + noun; here the preposition is pour.'],
            ],
            'The reason why I moved is simple.',
            'Pour laquelle.',
          ),
          g(
            'l7',
            'Les murs entre ___ il y a une fuite sont humides.',
            'lesquels',
            [
              ['lesquelles', 'Murs is masculine plural: lesquels.'],
              ['lequel', 'Murs is plural: lesquels.'],
              ['laquelle', 'Murs is masculine plural: lesquels.'],
            ],
            'The walls between which there is a leak are damp.',
            'Entre lesquels.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-choice',
      'gapfill',
      meta(
        'Qui, dont, où or lequel?',
        'Choose the best relative pronoun in context.',
        ['grammar', 'fr-relative-choice', 'housing'],
        3,
        4,
        'fr-relative-choice',
      ),
      {
        items: [
          g(
            'c1',
            'La personne avec ___ je partage l’appartement est sympa.',
            'qui',
            [
              ['lequel', 'Personne is feminine: laquelle; with people qui is simpler.'],
              ['dont', 'Dont replaces de + noun; the preposition here is avec.'],
              ['que', 'After a preposition, que cannot be used.'],
            ],
            'The person I share the flat with is nice.',
            'Preposition + qui for people.',
          ),
          g(
            'c2',
            'L’ami chez ___ j’habite m’a prêté la clé.',
            'qui',
            [
              ['lequel', 'For people, use qui after a preposition.'],
              ['dont', 'Dont replaces de + noun; the preposition here is chez.'],
              ['où', 'Où replaces a place, not a person.'],
            ],
            'The friend I live with lent me the key.',
            'Chez qui.',
          ),
          g(
            'c3',
            'Le propriétaire à ___ je paie le loyer est absent.',
            'qui',
            [
              ['que', 'After a preposition, que cannot be used.'],
              ['dont', 'Payer à: the preposition is à, not de.'],
              ['où', 'Où replaces a place, not a person.'],
            ],
            'The landlord I pay the rent to is away.',
            'À qui for people.',
          ),
          g(
            'c4',
            'La cuisine ___ les murs sont blancs est lumineuse.',
            'dont',
            [
              ['duquel', 'When the noun follows directly, whose = dont.'],
              ['lesquels', 'Lesquels needs a preposition.'],
              ['que', 'Que replaces a direct object.'],
            ],
            'The kitchen whose walls are white is bright.',
            'Dont = whose, followed by the noun.',
          ),
          g(
            'c5',
            'La résidence au centre ___ se trouve un jardin est vétuste.',
            'de laquelle',
            [
              ['dont', 'After au centre (de), use de laquelle.'],
              ['laquelle', 'The preposition de is needed.'],
              ['de qui', 'De qui is for people.'],
            ],
            'The residence in the centre of which there is a garden is run-down.',
            'De laquelle after a prepositional phrase.',
          ),
          g(
            'c6',
            'La ville ___ je travaille est loin.',
            'où',
            [
              ['laquelle', 'Laquelle needs a preposition: dans laquelle.'],
              ['que', 'A place needs où.'],
              ['dont', 'Dont replaces de + noun.'],
            ],
            'The city where I work is far.',
            'Où for a place (simpler than dans laquelle).',
          ),
          g(
            'c7',
            'Les questions ___ il a répondu étaient difficiles.',
            'auxquelles',
            [
              ['lesquelles', 'Répondre à: the preposition à is needed.'],
              ['que', 'Répondre à: the preposition à is needed.'],
              ['dont', 'Répondre à, not répondre de.'],
            ],
            'The questions he answered were hard.',
            'Répondre à → auxquelles.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-prep',
      'sortit',
      meta(
        'Which preposition?',
        'Auquel, duquel, or another preposition + lequel?',
        ['grammar', 'fr-lequel', 'housing'],
        2,
        4,
        'fr-lequel',
      ),
      {
        instruction: 'Which preposition is hidden in the pronoun?',
        buckets: [
          { id: 'a', label: 'à (auquel…)', emoji: '➡️' },
          { id: 'de', label: 'de (duquel…)', emoji: '⬅️' },
          { id: 'other', label: 'dans, avec, par, pour…', emoji: '🔀' },
        ],
        items: cards('p', PREP),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-lequel', 'fr-relative-choice'],
        3,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'This is the flat in which I live.',
            ['C’est', 'l’appartement', 'dans', 'lequel', 'j’habite.'],
            { extra: ['laquelle'], lesson: 'fr-lequel' },
          ),
          sent(
            's2',
            'The reason why I moved is simple.',
            ['La', 'raison', 'pour', 'laquelle', 'j’ai', 'déménagé', 'est', 'simple.'],
            { extra: ['lequel'], lesson: 'fr-lequel' },
          ),
          sent(
            's3',
            'The problems we face are serious.',
            ['Les', 'problèmes', 'auxquels', 'nous', 'faisons', 'face', 'sont', 'graves.'],
            { extra: ['lesquels'], lesson: 'fr-lequel' },
          ),
          sent(
            's4',
            'The friend I live with is away.',
            ['L’ami', 'chez', 'qui', 'j’habite', 'est', 'absent.'],
            { extra: ['lequel'], lesson: 'fr-relative-choice' },
          ),
          sent(
            's5',
            'The kitchen whose walls are white is bright.',
            ['La', 'cuisine', 'dont', 'les', 'murs', 'sont', 'blancs', 'est', 'lumineuse.'],
            { extra: ['duquel'], lesson: 'fr-relative-choice' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Read the ad',
        'Read the sentence from a small ad or a letter and pick its meaning.',
        ['communication', 'housing'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Colocation lumineuse dans un immeuble rénové, charges comprises.',
            'Bright flatshare in a renovated building, bills included.',
            [
              'Dark flat in an old building, bills extra.',
              'Bright flat for sale, bills extra.',
              'Flatshare in a hotel, bills included.',
            ],
          ),
          qs(
            'r2',
            'Le préavis de départ est de trois mois.',
            'The notice period for leaving is three months.',
            [
              'The departure was three months ago.',
              'The lease starts in three months.',
              'The rent is due in three months.',
            ],
          ),
          qs(
            'r3',
            'Nous vous demandons de réparer la fuite dans les plus brefs délais.',
            'We ask you to repair the leak as soon as possible.',
            [
              'We ask you to wait a long time for the leak.',
              'We will repair the leak for you next year.',
              'You are asked to cause a leak.',
            ],
          ),
          qs(
            'r4',
            'L’état des lieux a été signé par le propriétaire et le locataire.',
            'The inventory was signed by the landlord and the tenant.',
            [
              'The landlord and the tenant moved out.',
              'The state of the places is unknown.',
              'The tenant refused to sign.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'A complaint',
        'Talk to your flatmate and to your landlord.',
        ['communication', 'housing'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'flatmate',
            title: 'A flatmate',
            emoji: '🧑‍🤝‍🧑',
            setting: 'You and your flatmate discuss the bills. Use tu.',
            turns: [
              say(
                'Théo',
                'On doit parler des charges, elles sont très élevées.',
                'We need to talk about the bills, they are very high.',
              ),
              you(
                'Oui, c’est un sujet auquel je pensais aussi.',
                [
                  'Oui, c’est un sujet que auquel je pensais aussi.',
                  'Do not combine que and auquel.',
                ],
                ['Oui, c’est un sujet duquel je pensais aussi.', 'Penser à: auquel, not duquel.'],
              ),
              say(
                'Théo',
                'Et il y a le bruit des voisins.',
                'And there is the noise from the neighbours.',
              ),
              you(
                'C’est une nuisance dont je me plains depuis longtemps.',
                ['C’est une nuisance que je me plains depuis longtemps.', 'Se plaindre de: dont.'],
                [
                  'C’est une nuisance à laquelle je me plains depuis longtemps.',
                  'Se plaindre de, not à.',
                ],
              ),
            ],
          },
          {
            id: 'landlord',
            title: 'The landlord',
            emoji: '🔑',
            setting: 'You phone your landlord about a leak. Use vous.',
            turns: [
              say('Le propriétaire', 'Allô ? Que se passe-t-il ?', 'Hello? What is going on?'),
              you(
                'Il y a une fuite dans la salle de bains, et c’est un dégât des eaux.',
                [
                  'Il y a une fuite dans la salle de bains, et c’est un loyer.',
                  'A loyer is rent, not damage.',
                ],
                [
                  'Il y a une fuite dans la salle de bains, et c’est un préavis.',
                  'A préavis is a notice period.',
                ],
              ),
              say(
                'Le propriétaire',
                'Je préviens le syndic. Quel est l’étage ?',
                'I will warn the property manager. Which floor?',
              ),
              you(
                'Le deuxième, celui au-dessus duquel il y a le toit.',
                [
                  'Le deuxième, celui au-dessus dont il y a le toit.',
                  'After au-dessus de, use duquel.',
                ],
                ['Le deuxième, celui au-dessus auquel il y a le toit.', 'Au-dessus de, not à.'],
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
        'Housing blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-lequel', 'fr-relative-choice'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Lequel” agrees with the noun in gender and number.', true),
          tf('b2', '“À + lequel” becomes “auquel”.', true),
          tf('b3', '“De + lequel” becomes “duquel”.', true),
          tf(
            'b4',
            '“La fenêtre par lequel” is correct.',
            false,
            'Fenêtre is feminine: par laquelle.',
          ),
          tf('b5', 'After a preposition, people are usually referred to with “qui”.', true),
          tf('b6', '“Dont” is used when the noun follows directly and means “whose”.', true),
          tf(
            'b7',
            '“Un loyer” is a lease contract.',
            false,
            'Un loyer is rent; un bail is the lease.',
          ),
          tf('b8', '“Insalubre” means “unfit to live in”.', true),
          tf('b9', '“Un colocataire” is the owner of a flat.', false, 'It is a flatmate.'),
          tf('b10', '“Lesquelles” is feminine plural.', true),
          tf('b11', '“Une quittance” is a rent receipt.', true),
          tf('b12', '“Exigu” means “spacious”.', false, 'Exigu means cramped.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Housing challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'housing'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Les amis chez ___ je dors sont absents.”',
            'qui',
            ['lesquels', 'dont', 'que'],
            undefined,
            'fr-relative-choice',
          ),
          q(
            'c2',
            'Complete: “La table sur ___ je travaille est vieille.”',
            'laquelle',
            ['lequel', 'lesquelles', 'qui'],
            undefined,
            'fr-lequel',
          ),
          q(
            'c3',
            'Complete: “Les projets ___ nous participons sont utiles.”',
            'auxquels',
            ['lesquels', 'desquels', 'dont'],
            undefined,
            'fr-lequel',
          ),
          q(
            'c4',
            'Complete: “La rue au bout ___ j’habite est calme.”',
            'de laquelle',
            ['dont', 'laquelle', 'de lequel'],
            undefined,
            'fr-lequel',
          ),
          q('c5', 'Which word means “a lease”?', 'un bail', [
            'un loyer',
            'une caution',
            'un syndic',
          ]),
          q('c6', 'Which word means “a deposit”?', 'une caution', [
            'un préavis',
            'une quittance',
            'une charge',
          ]),
          q('c7', '“Vétuste” means …', 'run-down', ['bright', 'sunny', 'spacious']),
          q('c8', '“Un dégât des eaux” is …', 'water damage', [
            'a dry cellar',
            'a fountain',
            'a water tank',
          ]),
        ],
      },
    ),
  ],
};
