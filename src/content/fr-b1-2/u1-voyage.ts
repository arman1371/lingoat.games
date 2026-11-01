import { activity, byDe, flashcards, listen, quizEmoji, quizEnDe, vocabList } from '../builders';
import { futurTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-b1-2-voyage';
const LESSON = 'fr-futur-simple' as const;

const transport = vocabList(U, 'Transport and luggage', [
  ['l’avion', 'plane', '✈️'],
  ['le vol', 'flight', '🛫'],
  ['l’aéroport', 'airport', '🛬'],
  ['le ferry', 'ferry', '⛴️'],
  ['la croisière', 'cruise', '🚢'],
  ['le car', 'coach', '🚌'],
  ['le covoiturage', 'car sharing', '🚗'],
  ['le quai', 'platform', '🚉'],
  ['le trajet', 'journey', '🛣️'],
  ['la correspondance', 'connection (change of train)', '🔁'],
  ['l’aller simple', 'one-way ticket', '➡️'],
  ['l’aller-retour', 'return ticket', '↔️'],
  ['la valise', 'suitcase', '🧳'],
  ['le sac à dos', 'backpack', '🎒'],
  ['le passeport', 'passport', '🛂'],
  ['la douane', 'customs', '🛃'],
  ['l’embarquement', 'boarding', '💺'],
  ['le retard', 'delay', '⏰'],
  ['le départ', 'departure', '🔜'],
  ['l’arrivée', 'arrival', '🏁'],
]);

const lodging = vocabList(U, 'Accommodation and booking', [
  ['l’auberge de jeunesse', 'youth hostel', '🛏️'],
  ['le camping', 'campsite', '⛺'],
  ['le gîte', 'holiday cottage', '🏡'],
  ['la chambre d’hôtes', 'bed and breakfast', '☕'],
  ['la chambre simple', 'single room', '🧍'],
  ['la chambre double', 'double room', '👫'],
  ['la réservation', 'booking', '📅'],
  ['la nuitée', 'night (of a stay)', '🌙'],
  ['la pension complète', 'full board', '🍽️'],
  ['l’acompte', 'deposit', '💶'],
  ['le séjour', 'stay', '🌴'],
  ['la location', 'rental', '🔑'],
  ['le tarif', 'rate, fare', '🏷️'],
  ['l’office de tourisme', 'tourist office', 'ℹ️'],
  ['le guide touristique', 'guidebook', '📘'],
]);

const verbs = vocabList(U, 'Travel verbs', [
  ['décoller', 'to take off', '🛫'],
  ['atterrir', 'to land', '🛬'],
  ['réserver', 'to book', '📝'],
  ['annuler', 'to cancel', '❌'],
  ['confirmer', 'to confirm', '✅'],
  ['louer', 'to rent', '🗝️'],
  ['se déplacer', 'to get around, to travel around', '🧭'],
  ['séjourner', 'to stay (somewhere)', '🏨'],
  ['rentrer', 'to go home', '🏠'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['Et si on partait en week-end ?', 'What if we went away for the weekend?', '💡'],
  [
    'Je voudrais réserver une chambre pour deux nuits.',
    'I would like to book a room for two nights.',
    '📞',
  ],
  ['Est-ce qu’il reste une chambre libre ?', 'Is there a room left?', '❓'],
  ['Le vol a vingt minutes de retard.', 'The flight is twenty minutes late.', '⌛'],
  ['Pouvez-vous me confirmer la réservation ?', 'Can you confirm the booking for me?', '📧'],
  ['Nous partirons samedi matin.', 'We will leave on Saturday morning.', '🗓️'],
  ['Bon voyage !', 'Have a good trip!', '👋'],
]);

const vocab = [...transport, ...lodging, ...verbs, ...phrases];
const meaning = (word: string) => byDe(vocab, word)[0]!.en;

const emojiWords = byDe(
  vocab,
  'l’avion',
  'le ferry',
  'la valise',
  'le sac à dos',
  'le passeport',
  'le camping',
  'le gîte',
  'la croisière',
);

const PAIRS = [
  ['le départ', 'l’arrivée'],
  ['décoller', 'atterrir'],
  ['réserver', 'annuler'],
  ['l’aller simple', 'l’aller-retour'],
  ['la chambre simple', 'la chambre double'],
  ['le car', 'l’avion'],
] as const;

/** Verbs whose future stem is the infinitive (regular) or something new (irregular). */
const STEM_CARDS: [string, 'regular' | 'irregular', string][] = [
  ['partir', 'regular', 'to leave → partirai'],
  ['voyager', 'regular', 'to travel → voyagerai'],
  ['réserver', 'regular', 'to book → réserverai'],
  ['prendre', 'regular', 'to take → prendrai (the e of -re goes)'],
  ['louer', 'regular', 'to rent → louerai'],
  ['rentrer', 'regular', 'to go home → rentrerai'],
  ['aller', 'irregular', 'to go → j’irai'],
  ['faire', 'irregular', 'to do → je ferai'],
  ['venir', 'irregular', 'to come → je viendrai'],
  ['voir', 'irregular', 'to see → je verrai'],
  ['être', 'irregular', 'to be → je serai'],
  ['pouvoir', 'irregular', 'can → je pourrai'],
];

type Gap = {
  id: string;
  text: string;
  answer: string;
  options: string[];
  translation: string;
  explanation: string;
  why: Record<string, string>;
};

const GAPS: Gap[] = [
  {
    id: 'g1',
    text: 'Demain, nous ___ à Marseille en train.',
    answer: 'partirons',
    options: ['partirons', 'partons', 'partirions', 'partiront'],
    translation: 'Tomorrow we will leave for Marseille by train.',
    explanation: 'Future: infinitive partir + -ons.',
    why: {
      partons: 'That is the present tense. For a plan in the future use partir + -ons: partirons.',
      partirions: 'That is the conditional (-ions). The future ending for nous is -ons.',
      partiront: 'That is the ils/elles form. With nous the ending is -ons.',
    },
  },
  {
    id: 'g2',
    text: 'L’été prochain, j’___ en Italie.',
    answer: 'irai',
    options: ['irai', 'vais', 'allerai', 'aillerai'],
    translation: 'Next summer I will go to Italy.',
    explanation: 'Aller has an irregular future stem: ir- + -ai.',
    why: {
      vais: 'Vais is the present tense. The simple future of aller is irai.',
      allerai: 'Aller does not keep its infinitive: the future stem is ir-.',
      aillerai: 'There is no such stem. The future of aller starts with ir-.',
    },
  },
  {
    id: 'g3',
    text: 'Tu ___ ta valise ce soir ?',
    answer: 'feras',
    options: ['feras', 'ferras', 'faiseras', 'fais'],
    translation: 'Will you pack your suitcase this evening?',
    explanation: 'Faire has the stem fer- (one r): tu feras.',
    why: {
      ferras: 'The stem of faire is fer- with a single r.',
      faiseras: 'Faire changes its stem in the future: fer-, not fais-.',
      fais: 'Fais is the present. The future is feras.',
    },
  },
  {
    id: 'g4',
    text: 'Quand j’___ l’argent, je réserverai un gîte.',
    answer: 'aurai',
    options: ['aurai', 'ai', 'avrai', 'aurais'],
    translation: 'When I have the money, I will book a cottage.',
    explanation: 'After quand, French uses the future if the action is still to come. Avoir: aur-.',
    why: {
      ai: 'In English you would say “when I have”, but French puts the future after quand.',
      avrai: 'Avoir has the irregular stem aur-.',
      aurais: 'Aurais is the conditional. The future ending for je is -ai.',
    },
  },
  {
    id: 'g5',
    text: 'Il ___ beau demain, alors nous irons à la plage.',
    answer: 'fera',
    options: ['fera', 'sera', 'fait', 'ferait'],
    translation: 'It will be fine tomorrow, so we will go to the beach.',
    explanation: 'Weather uses faire: il fait beau → il fera beau.',
    why: {
      sera: 'The weather is described with faire, not être: il fera beau.',
      fait: 'Fait is the present. Tomorrow needs the future: fera.',
      ferait: 'Ferait is the conditional. For something planned use the future: fera.',
    },
  },
  {
    id: 'g6',
    text: 'Mes amis ___ nous rejoindre samedi.',
    answer: 'pourront',
    options: ['pourront', 'peuvent', 'pourrons', 'pouvoiront'],
    translation: 'My friends will be able to join us on Saturday.',
    explanation: 'Pouvoir: stem pourr- and the ils/elles ending -ont.',
    why: {
      peuvent: 'Peuvent is the present. For Saturday use the future: pourront.',
      pourrons: 'Pourrons goes with nous. Mes amis is ils: pourront.',
      pouvoiront: 'Pouvoir has the irregular stem pourr-.',
    },
  },
  {
    id: 'g7',
    text: 'Nous ___ à l’aéroport à six heures.',
    answer: 'serons',
    options: ['serons', 'sommes', 'êtrons', 'serions'],
    translation: 'We will be at the airport at six o’clock.',
    explanation: 'Être: stem ser- + -ons.',
    why: {
      sommes: 'Sommes is the present. The future of être is serons.',
      êtrons: 'Être has an irregular stem: ser-.',
      serions: 'Serions is the conditional. The future ending for nous is -ons.',
    },
  },
  {
    id: 'g8',
    text: 'Léa ___ le train de huit heures.',
    answer: 'prendra',
    options: ['prendra', 'prendera', 'prend', 'prendrait'],
    translation: 'Léa will take the eight o’clock train.',
    explanation: 'Verbs in -re lose the final e: prendr- + -a.',
    why: {
      prendera: 'Drop the final e of -re verbs before the ending: prendr-.',
      prend: 'Prend is the present. The future is prendra.',
      prendrait: 'Prendrait is the conditional. For a plan use the future: prendra.',
    },
  },
];

export const voyage: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'Et si on partait ?',
    subtitle: 'Plan a trip: transport, bookings and the simple future',
    emoji: '🧳',
    goals: [
      'Name means of transport, luggage and places to stay',
      'Book a trip or a room by phone',
      'Say what you will do with the simple future',
    ],
    grammar: ['Futur simple', 'Irregular future stems', 'quand + future'],
    vocabFields: ['Transport and luggage', 'Accommodation and booking', 'Travel verbs', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-transport',
      'flashcards',
      {
        title: 'Getting there',
        description: 'Transport, tickets and luggage.',
        tags: ['vocabulary', 'travel-mobility'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(transport),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'What is this?',
        description: 'Look at the picture and pick the travel word.',
        tags: ['vocabulary', 'travel-mobility'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(emojiWords, [...transport, ...lodging], 4),
    ),

    activity(
      U,
      'memory-pairs',
      'memory',
      {
        title: 'Opposites and partners',
        description: 'Match each word with its counterpart.',
        tags: ['vocabulary', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 3,
      },
      { pairs: PAIRS.map(([a, b], i) => ({ id: `p${i}`, a, b })) },
    ),

    activity(
      U,
      'listen-travel',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the travel word and pick its meaning.',
        tags: ['listening', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'le vol',
          'le quai',
          'la douane',
          'le retard',
          'l’aller-retour',
          'la correspondance',
          'atterrir',
          'annuler',
        ),
        [...transport, ...verbs],
      ),
    ),

    activity(
      U,
      'flash-lodging',
      'flashcards',
      {
        title: 'Places to stay',
        description: 'Accommodation and everything about a booking.',
        tags: ['vocabulary', 'travel-mobility'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards([...lodging, ...verbs]),
    ),

    activity(
      U,
      'quiz-lodging',
      'quiz',
      {
        title: 'Say it in French',
        description: 'Pick the French word for the English meaning.',
        tags: ['vocabulary', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 3,
      },
      quizEnDe(
        byDe(
          vocab,
          'l’auberge de jeunesse',
          'la chambre d’hôtes',
          'la pension complète',
          'l’acompte',
          'le tarif',
          'l’office de tourisme',
          'louer',
          'séjourner',
        ),
        [...lodging, ...verbs],
      ),
    ),

    activity(
      U,
      'spell-travel',
      'spell',
      {
        title: 'Spell the travel words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'sp-valise',
            mode: 'unscramble',
            answer: 'valise',
            hint: meaning('la valise'),
            emoji: '🧳',
            speak: 'la valise',
          },
          {
            id: 'sp-passeport',
            mode: 'unscramble',
            answer: 'passeport',
            hint: meaning('le passeport'),
            emoji: '🛂',
            speak: 'le passeport',
          },
          {
            id: 'sp-reservation',
            mode: 'type',
            answer: 'réservation',
            hint: meaning('la réservation'),
            emoji: '📅',
            speak: 'la réservation',
          },
          {
            id: 'sp-correspondance',
            mode: 'type',
            answer: 'correspondance',
            hint: meaning('la correspondance'),
            emoji: '🔁',
            speak: 'la correspondance',
          },
          {
            id: 'sp-aeroport',
            mode: 'dictation',
            answer: 'aéroport',
            hint: 'Type what you hear (airport)',
            speak: 'l’aéroport',
          },
          {
            id: 'sp-embarquement',
            mode: 'dictation',
            answer: 'embarquement',
            hint: 'Type what you hear (boarding)',
            speak: 'l’embarquement',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-future-stems',
      'sortit',
      {
        title: 'Regular or new stem?',
        description: 'Which verbs keep the infinitive in the future, and which change it?',
        tags: ['grammar', 'fr-futur-simple', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 3,
        lesson: LESSON,
      },
      {
        instruction: 'What does the future stem look like?',
        buckets: [
          { id: 'regular', label: 'Infinitive + ending', emoji: '✅' },
          { id: 'irregular', label: 'New stem', emoji: '🔀' },
        ],
        items: STEM_CARDS.map(([text, bucket, translation], i) => ({
          id: `s${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'conj-future-regular',
      'conjugation',
      {
        title: 'The simple future',
        description: 'Infinitive + -ai, -as, -a, -ons, -ez, -ont.',
        tags: ['grammar', 'fr-futur-simple'],
        difficulty: 2,
        estMinutes: 4,
        lesson: LESSON,
      },
      {
        tables: [
          futurTable('partir-1', 'partir', 'to leave', ['je', 'tu', 'il/elle/on']),
          futurTable('reserver-1', 'réserver', 'to book', ['nous', 'vous', 'ils/elles']),
          futurTable('prendre-1', 'prendre', 'to take', ['je', 'nous', 'ils/elles']),
          futurTable('voyager-1', 'voyager', 'to travel', ['tu', 'il/elle/on', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'conj-future-irregular',
      'conjugation',
      {
        title: 'Irregular stems',
        description: 'The endings stay the same; the stem changes.',
        tags: ['grammar', 'fr-futur-simple'],
        difficulty: 3,
        estMinutes: 4,
        lesson: LESSON,
      },
      {
        tables: [
          futurTable('aller-1', 'aller', 'to go', ['je', 'tu', 'nous']),
          futurTable('faire-1', 'faire', 'to do, to make', ['il/elle/on', 'vous', 'ils/elles']),
          futurTable('etre-1', 'être', 'to be', ['je', 'nous', 'ils/elles']),
          futurTable('venir-1', 'venir', 'to come', ['tu', 'il/elle/on', 'vous']),
          futurTable('pouvoir-1', 'pouvoir', 'to be able to', ['je', 'tu', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-future',
      'gapfill',
      {
        title: 'What will happen?',
        description: 'Pick the simple future form that fits.',
        tags: ['grammar', 'fr-futur-simple', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 5,
        lesson: LESSON,
      },
      { items: GAPS.map((g) => ({ ...g, lesson: LESSON })) },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'fr-futur-simple', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 4,
        lesson: LESSON,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'We will leave on Saturday morning.',
            words: ['Nous', 'partirons', 'samedi', 'matin.'],
            extra: ['partons'],
          },
          {
            id: 's2',
            translation: 'I will book a room for two nights.',
            words: ['Je', 'réserverai', 'une', 'chambre', 'pour', 'deux', 'nuits.'],
            extra: ['réserve'],
          },
          {
            id: 's3',
            translation: 'Will you take the plane or the train?',
            words: ['Vous', 'prendrez', 'l’avion', 'ou', 'le', 'train ?'],
            extra: ['prenez'],
          },
          {
            id: 's4',
            translation: 'The flight will land at nine o’clock.',
            words: ['Le', 'vol', 'atterrira', 'à', 'neuf', 'heures.'],
            extra: ['atterrit'],
          },
          {
            id: 's5',
            translation: 'We will be at the airport early.',
            words: ['Nous', 'serons', 'à', 'l’aéroport', 'tôt.'],
            extra: ['sommes'],
          },
          {
            id: 's6',
            translation: 'When I arrive, I will call you.',
            words: ['Quand', 'j’arriverai,', 'je', 't’appellerai.'],
            extra: ['j’arrive,'],
          },
        ],
      },
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Talking about a trip',
        description: 'Phrases for planning and booking.',
        tags: ['vocabulary', 'communication', 'travel-mobility'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(phrases),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Booking and planning',
        description: 'A travel agency, a hotel by phone and a weekend with a friend.',
        tags: ['communication', 'travel-mobility'],
        difficulty: 2,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'agence',
            title: 'At the travel agency',
            emoji: '🏢',
            setting: 'You want to book a flight. Use vous with the clerk.',
            turns: [
              {
                kind: 'npc',
                who: 'L’agent',
                text: 'Bonjour, je peux vous aider ?',
                translation: 'Hello, can I help you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je voudrais réserver un vol pour Lisbonne.', correct: true },
                  {
                    text: 'Je voudrais réservé un vol pour Lisbonne.',
                    correct: false,
                    feedback: 'After je voudrais use the infinitive: réserver.',
                  },
                  {
                    text: 'Je voudrais réservons un vol pour Lisbonne.',
                    correct: false,
                    feedback: 'After je voudrais the verb stays in the infinitive: réserver.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'L’agent',
                text: 'Très bien. Un aller simple ou un aller-retour ?',
                translation: 'Very well. A one-way ticket or a return?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Un aller-retour. Nous partirons vendredi.', correct: true },
                  {
                    text: 'Un aller-retour. Nous partons vendredi dernier.',
                    correct: false,
                    feedback: 'Dernier looks back. For next Friday you need the future: partirons.',
                  },
                  {
                    text: 'Un aller-retour. Nous partira vendredi.',
                    correct: false,
                    feedback: 'Nous asks for -ons: partirons.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'L’agent',
                text: 'Parfait. Je vous confirmerai la réservation par courriel.',
                translation: 'Perfect. I will confirm the booking to you by email.',
              },
            ],
          },
          {
            id: 'hotel',
            title: 'Booking a room',
            emoji: '🏨',
            setting: 'You phone a hotel. Use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'L’hôtel',
                text: 'Hôtel des Alpes, bonjour.',
                translation: 'Hotel des Alpes, hello.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Bonjour, je voudrais réserver une chambre double pour deux nuits.',
                    correct: true,
                  },
                  {
                    text: 'Bonjour, je veux réserver une chambre double pour deux nuits.',
                    correct: false,
                    feedback: 'Je veux sounds blunt on the phone. Je voudrais is polite.',
                  },
                  {
                    text: 'Bonjour, je voudrais réserver une chambre double pour deux nuitées.',
                    correct: false,
                    feedback: 'In everyday French you say deux nuits.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'L’hôtel',
                text: 'Pour quelles dates ?',
                translation: 'For which dates?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Nous arriverons vendredi et nous partirons dimanche.', correct: true },
                  {
                    text: 'Nous arriverai vendredi et nous partirons dimanche.',
                    correct: false,
                    feedback: 'Nous takes -ons: arriverons.',
                  },
                  {
                    text: 'Nous arriveront vendredi et nous partiront dimanche.',
                    correct: false,
                    feedback: '-ont is for ils and elles. With nous use -ons.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'L’hôtel',
                text: 'Il reste une chambre libre. Je vous demanderai un acompte.',
                translation: 'There is one room left. I will ask you for a deposit.',
              },
            ],
          },
          {
            id: 'ami',
            title: 'A weekend away',
            emoji: '🎒',
            setting: 'You and your friend Inès plan a trip. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Et si on partait en week-end ?',
                translation: 'What if we went away for the weekend?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Bonne idée ! Où est-ce qu’on ira ?', correct: true },
                  {
                    text: 'Bonne idée ! Où est-ce qu’on allera ?',
                    correct: false,
                    feedback: 'Aller has the irregular stem ir-: on ira.',
                  },
                  {
                    text: 'Bonne idée ! Où est-ce qu’on irez ?',
                    correct: false,
                    feedback: 'On goes with the il form: ira.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'À la mer. On prendra le car, c’est moins cher.',
                translation: 'To the seaside. We will take the coach, it is cheaper.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Super ! Je réserverai les billets ce soir.', correct: true },
                  {
                    text: 'Super ! Je réserveras les billets ce soir.',
                    correct: false,
                    feedback: '-as is for tu. With je the future ends in -ai: réserverai.',
                  },
                  {
                    text: 'Super ! Je réservé les billets ce soir.',
                    correct: false,
                    feedback: 'Use the future for something you will do tonight: réserverai.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Et moi, je ferai les valises !',
                translation: 'And I will pack the suitcases!',
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
        title: 'Future blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-futur-simple'],
        difficulty: 2,
        estMinutes: 2,
        lesson: LESSON,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Je partirai” is the simple future of partir.', isTrue: true },
          { id: 'b2', text: 'The future of aller is “j’irai”.', isTrue: true },
          {
            id: 'b3',
            text: 'The future of aller is “j’allerai”.',
            isTrue: false,
            explanation: 'Aller has the irregular stem ir-: j’irai.',
          },
          { id: 'b4', text: '“Nous serons” is the future of être.', isTrue: true },
          {
            id: 'b5',
            text: 'The future of faire is “je faiserai”.',
            isTrue: false,
            explanation: 'The stem of faire is fer-: je ferai.',
          },
          {
            id: 'b6',
            text: 'Prendre loses its final e in the future: “je prendrai”.',
            isTrue: true,
          },
          {
            id: 'b7',
            text: 'The endings of the simple future change with irregular verbs.',
            isTrue: false,
            explanation: 'The endings are always -ai, -as, -a, -ons, -ez, -ont.',
          },
          {
            id: 'b8',
            text: 'After “quand” French uses the future for what is still to come.',
            isTrue: true,
          },
          { id: 'b9', text: '“Il fera beau” means “It will be fine”.', isTrue: true },
          {
            id: 'b10',
            text: '“Tu pourras” uses the stem pouvoir.',
            isTrue: false,
            explanation: 'The stem is pourr-, with two r.',
          },
          { id: 'b11', text: 'The future of venir is “je viendrai”.', isTrue: true },
          { id: 'b12', text: '“L’aller-retour” is a return ticket.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'travel-mobility'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'What is “un aller simple”?',
            options: ['a one-way ticket', 'a return ticket', 'a seat reservation', 'a delay'],
            answer: 'a one-way ticket',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Demain, je ___ à la gare.”',
            options: ['serai', 'suis', 'étais', 'serais'],
            answer: 'serai',
            lesson: LESSON,
          },
          {
            id: 'c3',
            prompt: 'Which sentence is in the simple future?',
            options: [
              'Nous voyagerons en train.',
              'Nous voyageons en train.',
              'Nous voyagions en train.',
              'Nous avons voyagé en train.',
            ],
            answer: 'Nous voyagerons en train.',
            lesson: LESSON,
          },
          {
            id: 'c4',
            prompt: 'Complete: “Vous ___ la réservation demain ?”',
            options: ['confirmerez', 'confirmez', 'confirmeriez', 'confirmerons'],
            answer: 'confirmerez',
            lesson: LESSON,
          },
          {
            id: 'c5',
            prompt: 'What does a plane do when it “atterrit”?',
            options: ['it lands', 'it takes off', 'it is cancelled', 'it is booked'],
            answer: 'it lands',
          },
          {
            id: 'c6',
            prompt: 'Complete: “Elles ___ à Paris le mois prochain.”',
            options: ['iront', 'vont', 'allèrent', 'irons'],
            answer: 'iront',
            lesson: LESSON,
          },
          {
            id: 'c7',
            prompt: 'Which word means “deposit”?',
            options: ['l’acompte', 'le tarif', 'le séjour', 'la location'],
            answer: 'l’acompte',
          },
          {
            id: 'c8',
            prompt: 'Complete: “Quand tu ___ à Lyon, appelle-moi.”',
            options: ['arriveras', 'arrives', 'arrivais', 'arriverais'],
            answer: 'arriveras',
            lesson: LESSON,
          },
        ],
      },
    ),
  ],
};
