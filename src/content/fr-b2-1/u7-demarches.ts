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

const U = 'fr-b2-1-demarches';

const paperwork = vocabList(U, 'Paperwork and procedures', [
  ['une démarche', 'a procedure, a step', '📝'],
  ['un formulaire', 'a form', '📋'],
  ['un justificatif', 'a supporting document', '🧾'],
  ['une pièce d’identité', 'an identity document', '🪪'],
  ['un récépissé', 'a receipt (for a file)', '📨'],
  ['une attestation', 'a certificate, a statement', '📜'],
  ['un guichet', 'a counter, a service window', '🪟'],
  ['une préfecture', 'a prefecture (local state office)', '🏛️'],
  ['un délai', 'a time limit, a delay', '⏳'],
  ['un recommandé', 'a registered letter', '✉️'],
  ['une copie conforme', 'a certified copy', '🖨️'],
  ['un acte de naissance', 'a birth certificate', '👶'],
  ['un accusé de réception', 'an acknowledgement of receipt', '📬'],
  ['une convocation', 'a summons, an appointment letter', '📅'],
]);

const travel = vocabList(U, 'Travel and tourism', [
  ['un séjour', 'a stay', '🏨'],
  ['un circuit', 'a guided tour, a route', '🚌'],
  ['un forfait', 'a package, a flat rate', '🎟️'],
  ['une escale', 'a stopover', '🛬'],
  ['le dépaysement', 'a change of scenery', '🌴'],
  ['un hébergement', 'accommodation', '🛏️'],
  ['une auberge de jeunesse', 'a youth hostel', '🎒'],
  ['un office de tourisme', 'a tourist office', 'ℹ️'],
  ['une randonnée', 'a hike', '🥾'],
  ['un itinéraire', 'an itinerary', '🗺️'],
  ['le patrimoine', 'heritage', '🏰'],
  ['une visite guidée', 'a guided tour', '🧑‍🏫'],
]);

const phrases = vocabList(U, 'Aims and purposes', [
  [
    'Il a pris rendez-vous pour renouveler son titre de séjour.',
    'He made an appointment to renew his residence permit.',
    '📅',
  ],
  [
    'Je vous envoie ce formulaire pour que vous le remplissiez.',
    'I am sending you this form so that you fill it in.',
    '📋',
  ],
  [
    'Il a apporté une copie conforme afin de prouver son identité.',
    'He brought a certified copy in order to prove his identity.',
    '🖨️',
  ],
  [
    'Le guichet ouvre tôt afin que chacun puisse être servi.',
    'The counter opens early so that everyone can be served.',
    '🪟',
  ],
  [
    'Elle a vérifié ses papiers pour ne pas avoir de problème.',
    'She checked her papers so as not to have any trouble.',
    '✅',
  ],
  [
    'Il a réservé tôt de manière à obtenir un tarif réduit.',
    'He booked early so as to get a reduced fare.',
    '💶',
  ],
  [
    'Il a envoyé le dossier en recommandé de peur qu’il se perde.',
    'He sent the file by registered mail for fear it would get lost.',
    '✉️',
  ],
  [
    'Dans le but de découvrir la région, nous avons loué une voiture.',
    'In order to discover the region, we rented a car.',
    '🚗',
  ],
]);

const vocab = [...paperwork, ...travel, ...phrases];

const SUBJ: [string, 'inf' | 'subj', string][] = [
  ['Il vient pour renouveler son visa.', 'inf', 'He comes to renew his visa.'],
  ['Je t’écris pour que tu viennes.', 'subj', 'I write to you so that you come.'],
  ['Elle part tôt afin d’éviter la file.', 'inf', 'She leaves early to avoid the queue.'],
  [
    'Elle part tôt afin que tout soit prêt.',
    'subj',
    'She leaves early so that everything is ready.',
  ],
  [
    'Nous sommes venus dans le but de visiter la ville.',
    'inf',
    'We came in order to visit the city.',
  ],
  ['Je lui explique pour qu’il comprenne.', 'subj', 'I explain to him so that he understands.'],
  ['Il a réservé de manière à gagner du temps.', 'inf', 'He booked so as to save time.'],
  [
    'Parle lentement pour qu’on te comprenne.',
    'subj',
    'Speak slowly so that people understand you.',
  ],
  ['Je me dépêche de peur de rater le train.', 'inf', 'I hurry for fear of missing the train.'],
  [
    'Je me dépêche de peur qu’il parte sans moi.',
    'subj',
    'I hurry for fear that he leaves without me.',
  ],
  ['Il a pris des photos afin de garder des souvenirs.', 'inf', 'He took photos to keep memories.'],
  [
    'Il a pris des photos afin que nous gardions des souvenirs.',
    'subj',
    'He took photos so that we keep memories.',
  ],
];

export const demarches: UnitContent = {
  unit: unitFr({
    id: U,
    order: 7,
    title: 'Démarches et voyages',
    subtitle: 'Handle paperwork and plan a trip, and say what your actions are for',
    emoji: '🛂',
    goals: [
      'Understand and fill in administrative documents',
      'Talk about tourism and plan a trip',
      'Express a purpose with pour, afin de, pour que and afin que',
    ],
    grammar: ['Expressing a purpose'],
    vocabFields: ['Paperwork and procedures', 'Travel and tourism', 'Aims and purposes'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'paperwork-travel', {
      a: {
        title: 'Paperwork and procedures',
        description: 'Words for official steps.',
        words: paperwork,
      },
      b: {
        title: 'Travel and tourism',
        description: 'Words for trips and sightseeing.',
        words: travel,
      },
      listen: [
        'un formulaire',
        'un justificatif',
        'un guichet',
        'un délai',
        'une escale',
        'un forfait',
        'une randonnée',
        'le patrimoine',
      ],
      spell: [
        ['unscramble', 'formulaire', 'form', '📋', 'un formulaire'],
        ['unscramble', 'itinéraire', 'itinerary', '🗺️', 'un itinéraire'],
        ['type', 'guichet', 'counter', '🪟', 'un guichet'],
        ['type', 'attestation', 'certificate', '📜', 'une attestation'],
        ['type', 'hébergement', 'accommodation', '🛏️', 'un hébergement'],
      ],
    }),

    activity(
      U,
      'gap-connector',
      'gapfill',
      meta(
        'In order to…',
        'Choose the right connector of purpose.',
        ['grammar', 'fr-purpose', 'paperwork-travel'],
        2,
        4,
        'fr-purpose',
      ),
      {
        items: [
          g(
            'c1',
            'Il a pris rendez-vous ___ renouveler son titre de séjour.',
            'pour',
            [
              ['pour que', 'Same subject: pour + infinitive.'],
              ['afin que', 'Same subject: afin de + infinitive.'],
              ['de peur de', 'De peur de expresses fear, not a goal.'],
            ],
            'He made an appointment to renew his residence permit.',
            'Same subject: pour + infinitive.',
          ),
          g(
            'c2',
            'Je t’envoie ce formulaire ___ tu le remplisses.',
            'pour que',
            [
              ['pour', 'A new subject (tu) needs pour que + subjunctive.'],
              ['afin de', 'A new subject needs afin que + subjunctive.'],
              ['de manière à', 'De manière à is followed by an infinitive.'],
            ],
            'I am sending you this form so that you fill it in.',
            'New subject: pour que + subjunctive.',
          ),
          g(
            'c3',
            'Il a apporté une copie conforme ___ prouver son identité.',
            'afin de',
            [
              ['afin que', 'Same subject: afin de + infinitive.'],
              ['pour qu’il', 'Same subject: no new subject needed.'],
              ['de peur de', 'De peur de expresses fear, not a goal.'],
            ],
            'He brought a certified copy in order to prove his identity.',
            'Afin de + infinitive.',
          ),
          g(
            'c4',
            'Le guichet ouvre tôt ___ les usagers puissent être servis.',
            'afin que',
            [
              ['afin de', 'A new subject (les usagers) needs afin que.'],
              ['pour', 'A new subject needs pour que.'],
              ['ainsi', 'Ainsi does not introduce a purpose clause.'],
            ],
            'The counter opens early so that users can be served.',
            'Afin que + subjunctive.',
          ),
          g(
            'c5',
            'Elle a vérifié ses papiers ___ ne pas avoir de problème.',
            'pour',
            [
              ['pour que', 'Same subject: pour + infinitive.'],
              ['afin que', 'Same subject: afin de, not afin que.'],
              ['de peur que', 'De peur que needs a new subject and a verb.'],
            ],
            'She checked her papers so as not to have any trouble.',
            'Pour ne pas + infinitive.',
          ),
          g(
            'c6',
            'Elle a réservé tôt ___ obtenir un tarif réduit.',
            'de manière à',
            [
              ['afin que', 'Same subject: afin de, not afin que.'],
              ['pour que', 'Same subject: pour + infinitive.'],
              ['de peur que', 'De peur que expresses fear.'],
            ],
            'She booked early so as to get a reduced fare.',
            'De manière à / de façon à + infinitive.',
          ),
          g(
            'c7',
            'Il a envoyé le dossier en recommandé ___ il se perde.',
            'de peur qu’',
            [
              ['afin qu’', 'Afin que states what you want; here the aim is to avoid a loss.'],
              ['de peur de', 'A new subject (le dossier) needs de peur que.'],
              ['pour', 'Pour would need an infinitive.'],
            ],
            'He sent the file by registered mail for fear it would get lost.',
            'De peur que + subjunctive (fear).',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-form',
      'gapfill',
      meta(
        'The right verb form',
        'After pour que and afin que, use the subjunctive.',
        ['grammar', 'fr-purpose', 'paperwork-travel'],
        3,
        4,
        'fr-purpose',
      ),
      {
        items: [
          g(
            'f1',
            'Je vous écris pour que vous ___ mon dossier.',
            'examiniez',
            [
              ['examinez', 'Pour que is followed by the subjunctive.'],
              ['examinerez', 'Pour que is followed by the subjunctive.'],
              ['examineriez', 'The conditional is not the subjunctive.'],
            ],
            'I am writing so that you examine my file.',
            'Subjunctive: que vous examiniez.',
          ),
          g(
            'f2',
            'Il explique la procédure afin que chacun la ___.',
            'comprenne',
            [
              ['comprend', 'Afin que is followed by the subjunctive.'],
              ['comprendra', 'Afin que is followed by the subjunctive.'],
              ['comprendrait', 'The conditional is not the subjunctive.'],
            ],
            'He explains the procedure so that everyone understands it.',
            'Subjunctive: que chacun comprenne.',
          ),
          g(
            'f3',
            'Prévenez-nous pour que nous ___ quand vous arrivez.',
            'sachions',
            [
              ['savons', 'Pour que is followed by the subjunctive.'],
              ['saurons', 'Pour que is followed by the subjunctive.'],
              ['saurions', 'The conditional is not the subjunctive.'],
            ],
            'Let us know so that we know when you arrive.',
            'Savoir: que nous sachions.',
          ),
          g(
            'f4',
            'Elle a payé en avance pour que tout ___ prêt.',
            'soit',
            [
              ['est', 'Pour que is followed by the subjunctive.'],
              ['sera', 'Pour que is followed by the subjunctive.'],
              ['serait', 'The conditional is not the subjunctive.'],
            ],
            'She paid in advance so that everything would be ready.',
            'Être: que tout soit.',
          ),
          g(
            'f5',
            'Il a pris des photos afin de ___ ses souvenirs.',
            'garder',
            [
              ['garde', 'Same subject: afin de + infinitive.'],
              ['qu’il garde', 'Same subject: afin de + infinitive.'],
              ['gardera', 'Same subject: afin de + infinitive.'],
            ],
            'He took photos in order to keep his memories.',
            'Afin de + infinitive.',
          ),
          g(
            'f6',
            'Apportez un justificatif pour que nous ___ vous aider.',
            'puissions',
            [
              ['pouvons', 'Pour que is followed by the subjunctive.'],
              ['pourrons', 'Pour que is followed by the subjunctive.'],
              ['pourrions', 'The conditional is not the subjunctive.'],
            ],
            'Bring a supporting document so that we can help you.',
            'Pouvoir: que nous puissions.',
          ),
          g(
            'f7',
            'Il a téléphoné pour que je ___ à la préfecture.',
            'vienne',
            [
              ['viens', 'Pour que is followed by the subjunctive.'],
              ['viendrai', 'Pour que is followed by the subjunctive.'],
              ['venais', 'Pour que is followed by the subjunctive.'],
            ],
            'He phoned so that I would come to the prefecture.',
            'Venir: que je vienne.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-subject',
      'sortit',
      meta(
        'One subject or two?',
        'Infinitive for the same subject, subjunctive for a new one.',
        ['grammar', 'fr-purpose', 'paperwork-travel'],
        2,
        4,
        'fr-purpose',
      ),
      {
        instruction: 'Does the sentence use an infinitive or a subjunctive?',
        buckets: [
          { id: 'inf', label: 'infinitive (same subject)', emoji: '1️⃣' },
          { id: 'subj', label: 'subjunctive (new subject)', emoji: '2️⃣' },
        ],
        items: cards('s', SUBJ),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-purpose'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'He came to renew his permit.',
            ['Il', 'est', 'venu', 'pour', 'renouveler', 'son', 'titre', 'de', 'séjour.'],
            { extra: ['que'], lesson: 'fr-purpose' },
          ),
          sent(
            's2',
            'I am writing so that you receive the form.',
            ['Je', 'vous', 'écris', 'pour', 'que', 'vous', 'receviez', 'le', 'formulaire.'],
            { extra: ['de'], lesson: 'fr-purpose' },
          ),
          sent(
            's3',
            'She keeps a copy in order not to lose anything.',
            ['Elle', 'garde', 'une', 'copie', 'afin', 'de', 'ne', 'rien', 'perdre.'],
            { extra: ['que'], lesson: 'fr-purpose' },
          ),
          sent(
            's4',
            'The office opens early so that everyone can come.',
            [
              'Le',
              'bureau',
              'ouvre',
              'tôt',
              'afin',
              'que',
              'tout',
              'le',
              'monde',
              'puisse',
              'venir.',
            ],
            { extra: ['peut'], lesson: 'fr-purpose' },
          ),
          sent(
            's5',
            'We booked early so as to save money.',
            ['Nous', 'avons', 'réservé', 'tôt', 'de', 'manière', 'à', 'économiser.'],
            { extra: ['que'], lesson: 'fr-purpose' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Read the letter',
        'Read the sentence from an official letter and pick its meaning.',
        ['communication', 'paperwork-travel'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Veuillez fournir un justificatif de domicile afin de compléter votre dossier.',
            'Please provide proof of address to complete your file.',
            [
              'Please send your file to the housing office.',
              'Your file is complete without any document.',
              'We provide a flat for your file.',
            ],
          ),
          qs(
            'r2',
            'Vous êtes convoqué à la préfecture le 12 mars à 9 heures.',
            'You are summoned to the prefecture on 12 March at 9 a.m.',
            [
              'You have an appointment at the tourist office.',
              'The prefecture is closed on 12 March.',
              'You called the prefecture on 12 March.',
            ],
          ),
          qs(
            'r3',
            'Ce forfait comprend l’hébergement et une visite guidée.',
            'This package includes accommodation and a guided tour.',
            [
              'This flat rate excludes accommodation.',
              'The tour guide stays in a hotel.',
              'This package is only for hikers.',
            ],
          ),
          qs(
            'r4',
            'Un accusé de réception vous sera envoyé dans un délai de dix jours.',
            'An acknowledgement of receipt will be sent to you within ten days.',
            [
              'You must send an acknowledgement in ten days.',
              'Your receipt was sent ten days ago.',
              'Ten days are needed for the registered letter.',
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
        'Paperwork and travel',
        'Ask for information at a counter and at a tourist office.',
        ['communication', 'paperwork-travel'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'counter',
            title: 'At the prefecture',
            emoji: '🏛️',
            setting: 'You go to the counter to renew your residence permit. Use vous.',
            turns: [
              say(
                'L’agent',
                'Bonjour. Que puis-je faire pour vous ?',
                'Hello. What can I do for you?',
              ),
              you(
                'Bonjour. Je viens pour renouveler mon titre de séjour.',
                [
                  'Bonjour. Je viens pour que je renouvelle mon titre de séjour.',
                  'Same subject: pour + infinitive.',
                ],
                [
                  'Bonjour. Je viens de peur de renouveler mon titre de séjour.',
                  'De peur de expresses fear, not purpose.',
                ],
              ),
              say(
                'L’agent',
                'Il me faut un justificatif de domicile et une pièce d’identité.',
                'I need proof of address and an ID.',
              ),
              you(
                'Voici une copie conforme, afin que vous puissiez vérifier.',
                [
                  'Voici une copie conforme, afin de vous puissiez vérifier.',
                  'New subject (vous): afin que + subjunctive.',
                ],
                [
                  'Voici un circuit, afin que vous puissiez vérifier.',
                  'A circuit is a tour: it does not fit.',
                ],
              ),
            ],
          },
          {
            id: 'tourist',
            title: 'At the tourist office',
            emoji: 'ℹ️',
            setting: 'You plan a weekend away. Use vous.',
            turns: [
              say(
                'L’employée',
                'Vous cherchez quoi, exactement ?',
                'What exactly are you looking for?',
              ),
              you(
                'Un hébergement pas cher et un itinéraire de randonnée.',
                [
                  'Un guichet pas cher et un itinéraire de randonnée.',
                  'A guichet is a counter, not accommodation.',
                ],
                [
                  'Un hébergement pas cher et un récépissé de randonnée.',
                  'A récépissé is a receipt.',
                ],
              ),
              say(
                'L’employée',
                'Je vous donne cette carte pour que vous trouviez facilement.',
                'I am giving you this map so that you find it easily.',
              ),
              you(
                'Merci, c’est très utile pour organiser notre séjour.',
                ['Merci, c’est très inutile pour organiser notre séjour.', 'This would be rude.'],
                [
                  'Merci, c’est très utile pour que organiser notre séjour.',
                  'Same subject: pour + infinitive.',
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
      meta('Purpose blitz', 'True or false? Beat the clock!', ['grammar', 'fr-purpose'], 2, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Pour que” is followed by the subjunctive.', true),
          tf('b2', '“Pour” + infinitive is used when the subject is the same.', true),
          tf(
            'b3',
            '“Afin de” can be followed by a new subject.',
            false,
            'A new subject needs afin que + subjunctive.',
          ),
          tf('b4', '“De peur que” expresses fear.', true),
          tf(
            'b5',
            '“Je viens pour que je signe” is the best way to say it.',
            false,
            'Same subject: je viens pour signer.',
          ),
          tf('b6', '“Un récépissé” is a receipt for a file.', true),
          tf('b7', '“Un forfait” is a flat-rate package.', true),
          tf('b8', '“Une escale” is a stopover.', true),
          tf('b9', '“Un guichet” is a type of hotel.', false, 'Un guichet is a counter.'),
          tf('b10', '“Dans le but de” is followed by an infinitive.', true),
          tf(
            'b11',
            '“Afin que” is followed by the indicative.',
            false,
            'Afin que takes the subjunctive.',
          ),
          tf('b12', '“Un délai” is a time limit.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Purpose challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'paperwork-travel'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Je vous appelle ___ vous veniez demain.”',
            'pour que',
            ['pour', 'afin de', 'de manière à'],
            undefined,
            'fr-purpose',
          ),
          q(
            'c2',
            'Complete: “Il a pris un taxi afin ___ à l’heure.”',
            'd’arriver',
            ['qu’arriver', 'qu’il arrive', 'arriver'],
            undefined,
            'fr-purpose',
          ),
          q(
            'c3',
            'Complete: “Parlez lentement pour qu’on vous ___.”',
            'comprenne',
            ['comprend', 'comprendra', 'comprendrait'],
            undefined,
            'fr-purpose',
          ),
          q(
            'c4',
            'Complete: “Il a mis un réveil de peur ___ en retard.”',
            'd’être',
            ['qu’être', 'qu’il être', 'être'],
            undefined,
            'fr-purpose',
          ),
          q('c5', 'Which word means “a certified copy”?', 'une copie conforme', [
            'un accusé de réception',
            'une convocation',
            'un justificatif',
          ]),
          q('c6', 'Which word means “a youth hostel”?', 'une auberge de jeunesse', [
            'un office de tourisme',
            'un forfait',
            'une préfecture',
          ]),
          q('c7', '“Le dépaysement” means …', 'a change of scenery', [
            'a form',
            'a delay',
            'a counter',
          ]),
          q('c8', 'Which word means “a guided tour”?', 'une visite guidée', [
            'une randonnée',
            'une escale',
            'un hébergement',
          ]),
        ],
      },
    ),
  ],
};
