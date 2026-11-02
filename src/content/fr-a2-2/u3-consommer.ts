import { activity, byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import { gap, mc, npc, unitFr, you, type UnitContent } from './helpers';

const U = 'fr-a2-2-consommer';

const shopping = vocabList(U, 'Shopping and consumption', [
  ['un consommateur', 'a consumer', '🛍️'],
  ['un achat', 'a purchase', '🧾'],
  ['un emballage', 'packaging', '📦'],
  ['une marque', 'a brand', '🏷️'],
  ['le commerce équitable', 'fair trade', '⚖️'],
  ['un produit local', 'a local product', '🥕'],
  ['d’occasion', 'second-hand', '♻️'],
  ['un produit neuf', 'a brand-new product', '🆕'],
  ['une garantie', 'a guarantee', '📜'],
  ['un remboursement', 'a refund', '💶'],
  ['une réclamation', 'a complaint', '📣'],
  ['un échange', 'an exchange', '🔄'],
  ['un rayon', 'a department, an aisle', '🏬'],
  ['gaspiller', 'to waste', '🗑️'],
]);

const repair = vocabList(U, 'Repairs and do-it-yourself', [
  ['réparer', 'to repair', '🔧'],
  ['une panne', 'a breakdown', '⚠️'],
  ['un outil', 'a tool', '🧰'],
  ['un marteau', 'a hammer', '🔨'],
  ['un tournevis', 'a screwdriver', '🪛'],
  ['une vis', 'a screw', '🔩'],
  ['un clou', 'a nail', '📌'],
  ['une ampoule', 'a light bulb', '💡'],
  ['une prise', 'a socket', '🔌'],
  ['un atelier', 'a workshop', '🛠️'],
  ['bricoler', 'to do DIY', '🪚'],
  ['jeter', 'to throw away', '🚮'],
]);

const green = vocabList(U, 'Environment and services', [
  ['l’environnement', 'the environment', '🌍'],
  ['les déchets', 'waste', '🗑️'],
  ['recycler', 'to recycle', '♻️'],
  ['économiser', 'to save', '🪙'],
  ['durable', 'long-lasting, sustainable', '🌱'],
  ['réutilisable', 'reusable', '🔁'],
  ['louer', 'to rent', '🔑'],
  ['emprunter', 'to borrow', '🤲'],
  ['Pourriez-vous m’aider ?', 'Could you help me?', '🙋'],
  ['Je voudrais un renseignement.', 'I would like some information.', 'ℹ️'],
  ['Je serais ravi de vous aider.', 'I would be delighted to help you.', '😊'],
  ['Ça vous dérange si j’ouvre la fenêtre ?', 'Do you mind if I open the window?', '🪟'],
]);

const vocab = [...shopping, ...repair, ...green];

const meaningQuiz = byDe(
  vocab,
  'un consommateur',
  'un emballage',
  'd’occasion',
  'un remboursement',
  'une panne',
  'un tournevis',
  'une ampoule',
  'les déchets',
);

/** [phrase, bucket, English] for the noun-complement sort */
const COMPLEMENTS: [string, 'en' | 'a' | 'de', string][] = [
  ['une table en bois', 'en', 'a wooden table'],
  ['un sac en papier', 'en', 'a paper bag'],
  ['un pull en laine', 'en', 'a woollen jumper'],
  ['une machine à laver', 'a', 'a washing machine'],
  ['une tasse à café', 'a', 'a coffee cup'],
  ['une brosse à dents', 'a', 'a toothbrush'],
  ['un verre de lait', 'de', 'a glass of milk'],
  ['un sac de sport', 'de', 'a sports bag'],
  ['un jus de fruits', 'de', 'a fruit juice'],
  ['une salle de bains', 'de', 'a bathroom'],
];

export const consommer: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Consommer responsable',
    subtitle: 'Shop and repair more sustainably, make wishes and ask for a service politely',
    emoji: '♻️',
    goals: [
      'Ask for and offer a service politely',
      'Express a wish and give advice',
      'Describe an object: what it is made of and what it is for',
    ],
    grammar: [
      'The present conditional: je voudrais, tu pourrais, nous pourrions',
      'The gerund: en réparant, en achetant',
      'Noun complements with en, à and de',
    ],
    vocabFields: [
      'Shopping and consumption',
      'Repairs and do-it-yourself',
      'Environment and services',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-shop',
      'flashcards',
      {
        title: 'Shopping and consumption',
        description: 'Brands, packaging, refunds and complaints.',
        tags: ['vocabulary', 'consumption', 'shopping'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(shopping),
    ),

    activity(
      U,
      'flash-repair',
      'flashcards',
      {
        title: 'Repairs and do-it-yourself',
        description: 'Tools, breakdowns and small repairs.',
        tags: ['vocabulary', 'household'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(repair),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Read the word and pick its meaning.',
        tags: ['vocabulary', 'consumption'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(meaningQuiz, [...shopping, ...repair], 4),
    ),

    activity(
      U,
      'listen-shop',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'consumption', 'household'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'un achat',
          'une marque',
          'une garantie',
          'une réclamation',
          'un marteau',
          'un clou',
          'une prise',
          'l’environnement',
        ),
        [...shopping, ...repair, ...green],
      ),
    ),

    activity(
      U,
      'spell-shop',
      'spell',
      {
        title: 'Spell the consumer words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'consumption'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-emballage',
            mode: 'unscramble',
            answer: 'emballage',
            hint: 'packaging',
            emoji: '📦',
            speak: 'un emballage',
          },
          {
            id: 'sp-tournevis',
            mode: 'unscramble',
            answer: 'tournevis',
            hint: 'screwdriver',
            emoji: '🪛',
            speak: 'un tournevis',
          },
          {
            id: 'sp-garantie',
            mode: 'type',
            answer: 'garantie',
            hint: 'guarantee',
            emoji: '📜',
            speak: 'une garantie',
          },
          {
            id: 'sp-remboursement',
            mode: 'type',
            answer: 'remboursement',
            hint: 'refund',
            emoji: '💶',
            speak: 'un remboursement',
          },
          {
            id: 'sp-ampoule',
            mode: 'dictation',
            answer: 'ampoule',
            hint: 'Type what you hear (a light bulb)',
            emoji: '💡',
            speak: 'une ampoule',
          },
        ],
      },
    ),

    activity(
      U,
      'conj-conditional',
      'conjugation',
      {
        title: 'The present conditional',
        description: 'Fill in the forms: je voudrais, tu pourrais, il faudrait.',
        tags: ['grammar', 'fr-a22-conditional'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a22-conditional',
      },
      {
        tables: [
          {
            id: 'vouloir',
            verb: 'vouloir',
            meaning: 'to want (conditional)',
            forms: {
              je: 'voudrais',
              tu: 'voudrais',
              'il/elle/on': 'voudrait',
              nous: 'voudrions',
              vous: 'voudriez',
              'ils/elles': 'voudraient',
            },
            blanks: ['je', 'il/elle/on', 'vous'],
          },
          {
            id: 'pouvoir',
            verb: 'pouvoir',
            meaning: 'to be able to (conditional)',
            forms: {
              je: 'pourrais',
              tu: 'pourrais',
              'il/elle/on': 'pourrait',
              nous: 'pourrions',
              vous: 'pourriez',
              'ils/elles': 'pourraient',
            },
            blanks: ['tu', 'nous', 'vous'],
          },
          {
            id: 'aimer',
            verb: 'aimer',
            meaning: 'to like (conditional)',
            forms: {
              je: 'aimerais',
              tu: 'aimerais',
              'il/elle/on': 'aimerait',
              nous: 'aimerions',
              vous: 'aimeriez',
              'ils/elles': 'aimeraient',
            },
            blanks: ['je', 'nous', 'ils/elles'],
          },
          {
            id: 'etre',
            verb: 'être',
            meaning: 'to be (conditional)',
            forms: {
              je: 'serais',
              tu: 'serais',
              'il/elle/on': 'serait',
              nous: 'serions',
              vous: 'seriez',
              'ils/elles': 'seraient',
            },
            blanks: ['je', 'il/elle/on', 'ils/elles'],
          },
          {
            id: 'avoir',
            verb: 'avoir',
            meaning: 'to have (conditional)',
            forms: {
              je: 'aurais',
              tu: 'aurais',
              'il/elle/on': 'aurait',
              nous: 'aurions',
              vous: 'auriez',
              'ils/elles': 'auraient',
            },
            blanks: ['tu', 'nous', 'vous'],
          },
          {
            id: 'faire',
            verb: 'faire',
            meaning: 'to do, to make (conditional)',
            forms: {
              je: 'ferais',
              tu: 'ferais',
              'il/elle/on': 'ferait',
              nous: 'ferions',
              vous: 'feriez',
              'ils/elles': 'feraient',
            },
            blanks: ['je', 'nous', 'ils/elles'],
          },
          {
            id: 'aller',
            verb: 'aller',
            meaning: 'to go (conditional)',
            forms: {
              je: 'irais',
              tu: 'irais',
              'il/elle/on': 'irait',
              nous: 'irions',
              vous: 'iriez',
              'ils/elles': 'iraient',
            },
            blanks: ['tu', 'il/elle/on', 'vous'],
          },
          {
            id: 'devoir',
            verb: 'devoir',
            meaning: 'to have to (conditional)',
            forms: {
              je: 'devrais',
              tu: 'devrais',
              'il/elle/on': 'devrait',
              nous: 'devrions',
              vous: 'devriez',
              'ils/elles': 'devraient',
            },
            blanks: ['je', 'tu', 'nous'],
          },
        ],
      },
    ),

    activity(
      U,
      'gap-conditional',
      'gapfill',
      {
        title: 'Wishes, advice and polite requests',
        description: 'Pick the conditional form that fits.',
        tags: ['grammar', 'fr-a22-conditional', 'consumption'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a22-conditional',
      },
      {
        items: [
          gap(
            'k1',
            'Bonjour, je ___ réparer mon vélo. Vous pouvez m’aider ?',
            'voudrais',
            ['veux', 'voudrai', 'voulais'],
            'Hello, I would like to repair my bike. Can you help me?',
            'The conditional of vouloir is a polite way to ask: je voudrais.',
          ),
          gap(
            'k2',
            '___-vous me prêter un tournevis, s’il vous plaît ?',
            'Pourriez',
            ['Pouvez', 'Pourrez', 'Pouviez'],
            'Could you lend me a screwdriver, please?',
            'Pourriez-vous… is the polite request: pouvoir in the conditional.',
          ),
          gap(
            'k3',
            'Tu ___ acheter un téléphone d’occasion : il coûte moins cher.',
            'devrais',
            ['dois', 'devras', 'devais'],
            'You should buy a second-hand phone: it costs less.',
            'Advice: devoir in the conditional (tu devrais).',
          ),
          gap(
            'k4',
            'Nous ___ volontiers vous aider à porter ce carton.',
            'pourrions',
            ['pouvons', 'pourrons', 'pouvions'],
            'We could gladly help you carry this box.',
            'The conditional stem of pouvoir is pourr-: nous pourrions.',
          ),
          gap(
            'k5',
            'Ça ___ plus écologique d’utiliser des sacs réutilisables.',
            'serait',
            ['sera', 'est', 'était'],
            'It would be more ecological to use reusable bags.',
            'Être in the conditional: serait.',
          ),
          gap(
            'k6',
            'Si j’avais plus de temps, je ___ mes meubles moi-même.',
            'réparerais',
            ['répare', 'réparerai', 'réparais'],
            'If I had more time, I would repair my furniture myself.',
            'Si + imparfait in the if-clause, conditional in the main clause.',
          ),
          gap(
            'k7',
            'Si nous jetions moins, nous ___ moins de déchets.',
            'aurions',
            ['avons', 'aurons', 'avions'],
            'If we threw away less, we would have less waste.',
            'Avoir in the conditional: nous aurions.',
          ),
          gap(
            'k8',
            'Elle ___ bien un atelier de réparation dans son quartier.',
            'aimerait',
            ['aime', 'aimera', 'aimait'],
            'She would really like a repair workshop in her neighbourhood.',
            'Aimer in the conditional expresses a wish: elle aimerait.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-gerund',
      'gapfill',
      {
        title: 'The gerund',
        description: 'Complete with “en” + the -ant form.',
        tags: ['grammar', 'fr-a22-gerund', 'consumption'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a22-gerund',
      },
      {
        items: [
          gap(
            'g1',
            'On économise de l’argent ___ des produits d’occasion.',
            'en achetant',
            ['en acheter', 'en acheté', 'achetant'],
            'You save money by buying second-hand products.',
            'The gerund is en + the -ant form: en achetant.',
          ),
          gap(
            'g2',
            'Il a réparé la lampe ___ un tuto.',
            'en regardant',
            ['en regarder', 'en regardé', 'regardant'],
            'He repaired the lamp by watching a tutorial.',
            'Regarder: nous regardons → en regardant.',
          ),
          gap(
            'g3',
            'Elle écoute de la musique ___ du bricolage.',
            'en faisant',
            ['en faire', 'en fait', 'en faisait'],
            'She listens to music while doing DIY.',
            'Faire: nous faisons → en faisant.',
          ),
          gap(
            'g4',
            'Nous protégeons l’environnement ___ nos déchets.',
            'en recyclant',
            ['en recycler', 'en recyclé', 'recyclons'],
            'We protect the environment by recycling our waste.',
            'Recycler → en recyclant.',
          ),
          gap(
            'g5',
            'Tu peux gagner du temps ___ en ligne.',
            'en commandant',
            ['en commander', 'en commandé', 'en commandons'],
            'You can save time by ordering online.',
            'The gerund shows the means: en commandant.',
          ),
          gap(
            'g6',
            'Ils ont trouvé une solution ___ ensemble.',
            'en réfléchissant',
            ['en réfléchir', 'en réfléchi', 'en réfléchissent'],
            'They found a solution by thinking together.',
            'Verbs in -ir: nous réfléchissons → en réfléchissant.',
          ),
          gap(
            'g7',
            '___ prudent, vous évitez les mauvais achats.',
            'En étant',
            ['En être', 'En été', 'En sois'],
            'By being careful you avoid bad purchases.',
            'Être has an irregular gerund: en étant.',
          ),
          gap(
            'g8',
            'Je me suis fait mal ___ le mur.',
            'en perçant',
            ['en percer', 'en percé', 'en perçons'],
            'I hurt myself drilling the wall.',
            'Percer → en perçant (the c keeps its cedilla before a).',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-complements',
      'sortit',
      {
        title: 'En, à or de?',
        description: 'Does the noun complement tell the material, the use or the content?',
        tags: ['grammar', 'fr-a22-noun-complements', 'household'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-a22-noun-complements',
      },
      {
        instruction: 'Which small word links the two nouns: en, à or de?',
        buckets: [
          { id: 'en', label: 'en (material)', emoji: '🪵' },
          { id: 'a', label: 'à (use)', emoji: '🔧' },
          { id: 'de', label: 'de (content, kind)', emoji: '🥛' },
        ],
        items: COMPLEMENTS.map(([text, bucket, translation], i) => ({
          id: `n${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-complements',
      'gapfill',
      {
        title: 'Describe the object',
        description: 'Pick en, à or de to complete the noun.',
        tags: ['grammar', 'fr-a22-noun-complements', 'household'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a22-noun-complements',
      },
      {
        items: [
          gap(
            'n1',
            'Je cherche une chaise ___ plastique recyclé.',
            'en',
            ['à', 'de', 'dans'],
            'I am looking for a chair made of recycled plastic.',
            'En gives the material: une chaise en plastique.',
          ),
          gap(
            'n2',
            'Ma grand-mère a une vieille machine ___ coudre.',
            'à',
            ['en', 'de', 'pour'],
            'My grandmother has an old sewing machine.',
            'À gives the purpose: une machine à coudre.',
          ),
          gap(
            'n3',
            'J’ai acheté un sac ___ voyage d’occasion.',
            'de',
            ['en', 'à', 'pour'],
            'I bought a second-hand travel bag.',
            'De gives the kind: un sac de voyage.',
          ),
          gap(
            'n4',
            'Passe-moi la boîte ___ outils, s’il te plaît.',
            'à',
            ['en', 'de', 'des'],
            'Pass me the toolbox, please.',
            'La boîte à outils: the box used for tools.',
          ),
          gap(
            'n5',
            'Cette veste ___ cuir est très durable.',
            'en',
            ['à', 'de', 'au'],
            'This leather jacket is very durable.',
            'En gives the material: une veste en cuir.',
          ),
          gap(
            'n6',
            'Il y a une bouteille ___ eau sur la table.',
            'd’',
            ['en', 'à l’', 'au'],
            'There is a bottle of water on the table.',
            'De (d’ before a vowel) gives the content: une bouteille d’eau.',
          ),
          gap(
            'n7',
            'Elle aime les pulls ___ laine.',
            'en',
            ['à', 'de', 'dans'],
            'She likes woollen jumpers.',
            'En gives the material: un pull en laine.',
          ),
          gap(
            'n8',
            'Nous avons un fer ___ repasser qui ne marche plus.',
            'à',
            ['en', 'de', 'pour'],
            'We have an iron that no longer works.',
            'À gives the purpose: un fer à repasser.',
          ),
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
        tags: ['grammar', 'consumption'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'Could you help me, please?',
            words: ['Pourriez-vous', 'm’aider,', 's’il', 'vous', 'plaît ?'],
            extra: ['pouvez'],
            lesson: 'fr-a22-conditional',
          },
          {
            id: 's2',
            translation: 'I would like to repair my bike.',
            words: ['Je', 'voudrais', 'réparer', 'mon', 'vélo.'],
            extra: ['veux'],
            lesson: 'fr-a22-conditional',
          },
          {
            id: 's3',
            translation: 'You save money by buying second-hand.',
            words: ['On', 'économise', 'en', 'achetant', 'd’occasion.'],
            extra: ['acheter'],
            lesson: 'fr-a22-gerund',
          },
          {
            id: 's4',
            translation: 'She is looking for a wooden table.',
            words: ['Elle', 'cherche', 'une', 'table', 'en', 'bois.'],
            extra: ['à'],
            lesson: 'fr-a22-noun-complements',
          },
          {
            id: 's5',
            translation: 'We should recycle our waste.',
            words: ['Nous', 'devrions', 'recycler', 'nos', 'déchets.'],
            extra: ['devons'],
            lesson: 'fr-a22-conditional',
          },
          {
            id: 's6',
            translation: 'He listens to the radio while repairing the lamp.',
            words: ['Il', 'écoute', 'la', 'radio', 'en', 'réparant', 'la', 'lampe.'],
            extra: ['réparer'],
            lesson: 'fr-a22-gerund',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-services',
      'flashcards',
      {
        title: 'Asking for and offering a service',
        description: 'Polite phrases for a request, an offer and a permission.',
        tags: ['vocabulary', 'communication', 'customer-service'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(green),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'A repair, a loan, a complaint',
        description: 'Ask for help in a workshop, borrow a tool and return a product.',
        tags: ['communication', 'consumption', 'customer-service'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'workshop',
            title: 'The repair workshop',
            emoji: '🛠️',
            setting: 'You take a broken toaster to a repair café. You say vous to the volunteer.',
            turns: [
              npc(
                'Le bénévole',
                'Bonjour ! Qu’est-ce que je peux faire pour vous ?',
                'Hello! What can I do for you?',
              ),
              you(
                'Bonjour, je voudrais réparer mon grille-pain, il ne marche plus.',
                [
                  'Bonjour, je veux réparer mon grille-pain, il ne marche plus.',
                  'It is polite to use the conditional for a request: je voudrais.',
                ],
                [
                  'Bonjour, je voudrai réparer mon grille-pain, il ne marche plus.',
                  'The conditional ends in -ais: je voudrais.',
                ],
              ),
              npc(
                'Le bénévole',
                'On pourrait regarder ensemble. Vous avez un tournevis ?',
                'We could look at it together. Do you have a screwdriver?',
              ),
              you(
                'Non, pourriez-vous m’en prêter un ?',
                [
                  'Non, pouvez-vous m’en prêter un ?',
                  'Pourriez-vous is more polite than pouvez-vous.',
                ],
                [
                  'Non, pourriez-vous me prêter en un ?',
                  'The pronouns stand before the verb: m’en prêter.',
                ],
              ),
              npc(
                'Le bénévole',
                'Bien sûr. Et voilà, c’est réparé !',
                'Of course. And there you go, it is repaired!',
              ),
            ],
          },
          {
            id: 'loan',
            title: 'Borrowing a drill',
            emoji: '🔧',
            setting: 'You ask your neighbour Marc for help. You say tu to each other.',
            turns: [
              npc('Marc', 'Tu fais quoi ce week-end ?', 'What are you doing this weekend?'),
              you(
                'Je voudrais fixer une étagère, mais je n’ai pas de perceuse.',
                [
                  'Je voudrais fixer une étagère, mais je n’aurais pas de perceuse.',
                  'Use the present for a fact: je n’ai pas de perceuse.',
                ],
                [
                  'Je voudrais fixer une étagère, mais je n’ai pas une perceuse.',
                  'After a negation use de: je n’ai pas de perceuse.',
                ],
              ),
              npc(
                'Marc',
                'Je te prêterais la mienne avec plaisir !',
                'I would gladly lend you mine!',
              ),
              you(
                'Tu es sympa ! Je te la rendrai en réparant ton portail.',
                [
                  'Tu es sympa ! Je te la rendrai en réparer ton portail.',
                  'After en use the -ant form: en réparant.',
                ],
                [
                  'Tu es sympa ! Je te rendrai la en réparant ton portail.',
                  'Pronouns go before the verb: je te la rendrai.',
                ],
              ),
              npc('Marc', 'Ça, ce serait parfait.', 'That would be perfect.'),
            ],
          },
          {
            id: 'complaint',
            title: 'A product that does not work',
            emoji: '📣',
            setting: 'You return a kettle to the shop. You say vous to the assistant.',
            turns: [
              npc('La vendeuse', 'Bonjour, vous avez un problème ?', 'Hello, is there a problem?'),
              you(
                'Oui, cette bouilloire en plastique est tombée en panne après une semaine.',
                [
                  'Oui, cette bouilloire à plastique est tombée en panne après une semaine.',
                  'The material is introduced with en: une bouilloire en plastique.',
                ],
                [
                  'Oui, cette bouilloire de plastique est tombée en panne après une semaine.',
                  'The material is introduced with en, not de.',
                ],
              ),
              npc(
                'La vendeuse',
                'Vous avez gardé le ticket et la garantie ?',
                'Did you keep the receipt and the guarantee?',
              ),
              you(
                'Oui, les voilà. Je voudrais un remboursement ou un échange.',
                [
                  'Oui, les voilà. Je veux un remboursement ou un échange.',
                  'The conditional is more polite: je voudrais.',
                ],
                [
                  'Oui, les voilà. Je voudrai un remboursement ou un échange.',
                  'The conditional ends in -ais: je voudrais.',
                ],
              ),
              npc(
                'La vendeuse',
                'Nous pourrions vous proposer un autre modèle.',
                'We could offer you another model.',
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
      {
        title: 'Consumer blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'consumption', 'fr-a22-conditional'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Je voudrais un renseignement” is a polite request.', isTrue: true },
          {
            id: 'b2',
            text: 'The conditional of “avoir” for “je” is “j’aurai”.',
            isTrue: false,
            explanation: 'J’aurai is the future. The conditional is j’aurais.',
          },
          {
            id: 'b3',
            text: '“Pourriez-vous m’aider ?” is more polite than “Pouvez-vous m’aider ?”.',
            isTrue: true,
          },
          {
            id: 'b4',
            text: 'The gerund of “faire” is “en faire”.',
            isTrue: false,
            explanation: 'The gerund is en + the -ant form: en faisant.',
          },
          { id: 'b5', text: '“En étant” is the gerund of “être”.', isTrue: true },
          { id: 'b6', text: '“Une table en bois” means a wooden table.', isTrue: true },
          {
            id: 'b7',
            text: '“Une machine à laver” is a machine made of washing.',
            isTrue: false,
            explanation: 'À gives the use: a machine for washing, a washing machine.',
          },
          { id: 'b8', text: '“Un emballage” is packaging.', isTrue: true },
          {
            id: 'b9',
            text: '“Jeter” means to repair.',
            isTrue: false,
            explanation: 'Jeter means to throw away. To repair is réparer.',
          },
          { id: 'b10', text: '“D’occasion” means second-hand.', isTrue: true },
          {
            id: 'b11',
            text: '“Si j’avais le temps, je répare tout” is correct.',
            isTrue: false,
            explanation:
              'With si + imparfait the main clause takes the conditional: je réparerais.',
          },
          { id: 'b12', text: '“Un remboursement” is a refund.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'consumption'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          mc(
            'c1',
            'Complete: “Nous ___ volontiers vous aider.”',
            'pourrions',
            ['pouvons', 'pourrons', 'pouvions'],
            {
              lesson: 'fr-a22-conditional',
            },
          ),
          mc(
            'c2',
            'Complete: “Si j’avais le temps, je ___ cette chaise.”',
            'réparerais',
            ['réparerai', 'répare', 'réparais'],
            {
              lesson: 'fr-a22-conditional',
            },
          ),
          mc(
            'c3',
            'Complete: “Tu ___ acheter d’occasion.” (advice)',
            'devrais',
            ['dois', 'devras', 'devais'],
            {
              lesson: 'fr-a22-conditional',
            },
          ),
          mc(
            'c4',
            'Complete: “On apprend ___ des vidéos.”',
            'en regardant',
            ['en regarder', 'regarde en', 'en regardé'],
            {
              lesson: 'fr-a22-gerund',
            },
          ),
          mc(
            'c5',
            'What is the gerund of “avoir”?',
            'en ayant',
            ['en avoir', 'en avons', 'en eu'],
            {
              lesson: 'fr-a22-gerund',
            },
          ),
          mc('c6', 'Complete: “Une brosse ___ dents.”', 'à', ['en', 'de', 'pour'], {
            lesson: 'fr-a22-noun-complements',
          }),
          mc('c7', 'Complete: “Un pull ___ coton.”', 'en', ['à', 'de', 'dans'], {
            lesson: 'fr-a22-noun-complements',
          }),
          mc(
            'c8',
            'You want to ask politely for information. What do you say?',
            'Je voudrais un renseignement.',
            [
              'Donnez-moi un renseignement.',
              'Je veux un renseignement.',
              'Un renseignement, vite !',
            ],
          ),
        ],
      },
    ),
  ],
};
