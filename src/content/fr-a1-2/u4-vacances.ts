import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import {
  gap,
  meta,
  pcAnyTable,
  presentTable,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-a1-2-vacances';

const planning = vocabList(U, 'Planning a trip', [
  ['les vacances', 'holidays, vacation', '🏖️'],
  ['le voyage', 'trip, journey', '🧳'],
  ['le touriste', 'tourist', '🧑‍🤝‍🧑'],
  ['la destination', 'destination', '📍'],
  ['l’agence de voyages', 'travel agency', '🏢'],
  ['la réservation', 'booking', '📅'],
  ['réserver', 'to book', '📝'],
  ['annuler', 'to cancel', '❌'],
  ['le billet', 'ticket', '🎫'],
  ['l’aller simple', 'one-way ticket', '➡️'],
  ['l’aller-retour', 'return ticket', '🔁'],
  ['la valise', 'suitcase', '🧳'],
  ['le passeport', 'passport', '🛂'],
  ['le guide', 'guidebook', '📘'],
  ['le départ', 'departure', '🛫'],
  ['l’arrivée', 'arrival', '🛬'],
  ['le retard', 'delay', '⏳'],
]);

const stay = vocabList(U, 'Where to stay', [
  ['la piscine', 'swimming pool', '🏊'],
  ['la réception', 'reception desk', '🛎️'],
  ['l’auberge de jeunesse', 'youth hostel', '🛏️'],
  ['le camping', 'campsite', '⛺'],
  ['la tente', 'tent', '🏕️'],
  ['le gîte', 'holiday cottage', '🏘️'],
  ['le séjour', 'stay', '🗓️'],
  ['les bagages', 'luggage', '🧳'],
  ['la chambre double', 'double room', '🛌'],
  ['la pension complète', 'full board', '🍽️'],
  ['complet, complète', 'full, fully booked', '🈵'],
  ['libre', 'free, vacant', '🟢'],
]);

const holiday = vocabList(U, 'On holiday', [
  ['la plage', 'beach', '🏖️'],
  ['la mer', 'sea', '🌊'],
  ['la montagne', 'mountain', '⛰️'],
  ['le soleil', 'sun', '☀️'],
  ['bronzer', 'to sunbathe', '😎'],
  ['se baigner', 'to go for a swim', '🏊'],
  ['la crème solaire', 'sunscreen', '🧴'],
  ['la randonnée', 'hike', '🥾'],
  ['le paysage', 'landscape', '🏞️'],
  ['visiter', 'to visit (a place)', '🏛️'],
  ['la visite guidée', 'guided tour', '🧭'],
  ['le monument', 'monument', '🗼'],
  ['le château', 'castle', '🏰'],
  ['l’appareil photo', 'camera', '📷'],
]);

const postcard = vocabList(U, 'Postcards and memories', [
  ['la carte postale', 'postcard', '💌'],
  ['le timbre', 'stamp', '📮'],
  ['envoyer', 'to send', '📨'],
  ['Grosses bises !', 'Love! (ending a postcard)', '😘'],
  ['Je pense à vous.', 'I am thinking of you.', '💭'],
  ['On s’amuse bien.', 'We are having a good time.', '🎉'],
  ['C’était super !', 'It was great!', '🤩'],
  ['C’était nul.', 'It was awful.', '👎'],
  ['Il y avait beaucoup de monde.', 'There were lots of people.', '👥'],
]);

const compare = vocabList(U, 'Comparing places', [
  ['bruyant, bruyante', 'noisy', '🔊'],
  ['tranquille', 'quiet, peaceful', '🤫'],
  ['animé, animée', 'lively', '🎶'],
  ['bon marché', 'cheap', '💰'],
  ['ensoleillé, ensoleillée', 'sunny', '🌞'],
  ['touristique', 'touristy', '📸'],
  ['confortable', 'comfortable', '🛋️'],
  ['propre', 'clean', '🧼'],
  ['sale', 'dirty', '🧽'],
  ['meilleur, meilleure', 'better', '🥇'],
]);

const vocab = [...planning, ...stay, ...holiday, ...postcard, ...compare];

const pictureQuiz = byDe(
  vocab,
  'la plage',
  'la montagne',
  'la valise',
  'la tente',
  'l’appareil photo',
  'le château',
  'la crème solaire',
  'le passeport',
);

const heard = byDe(
  vocab,
  'la réservation',
  'l’aller-retour',
  'la visite guidée',
  'la randonnée',
  'complet, complète',
  'le retard',
  'la carte postale',
);

export const vacances: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Bonnes vacances !',
    subtitle: 'Book a trip, compare places and tell a friend how the holiday was',
    emoji: '🏖️',
    goals: [
      'Book a trip, a ticket and a room',
      'Compare two places, hotels or trips',
      'Say where you went and what it was like',
      'Write a short postcard',
    ],
    grammar: [
      'plus, moins, aussi … que',
      'partir, sortir, dormir',
      'The passé composé with être',
      'c’était and il y avait',
    ],
    vocabFields: [
      'Planning a trip',
      'Where to stay',
      'On holiday',
      'Postcards and memories',
      'Comparing places',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-planning',
      'flashcards',
      meta(
        'Planning a trip',
        'Tickets, bookings and the words of a travel agency.',
        ['vocabulary', 'weather-travel'],
        1,
        4,
      ),
      flashcards(planning),
    ),

    activity(
      U,
      'flash-stay',
      'flashcards',
      meta(
        'Where to stay',
        'Hotels, campsites and what to say at the reception.',
        ['vocabulary', 'weather-travel'],
        1,
        3,
      ),
      flashcards(stay),
    ),

    activity(
      U,
      'flash-holiday',
      'flashcards',
      meta(
        'On holiday',
        'The beach, the mountain, sights and the words of a postcard.',
        ['vocabulary', 'weather-travel'],
        1,
        4,
      ),
      flashcards([...holiday, ...postcard]),
    ),

    activity(
      U,
      'flash-compare',
      'flashcards',
      meta(
        'Comparing places',
        'Adjectives for hotels, towns and beaches.',
        ['vocabulary', 'describing-people'],
        1,
        3,
      ),
      flashcards(compare),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is it?',
        'Look at the picture and pick the word.',
        ['vocabulary', 'weather-travel'],
        1,
        3,
      ),
      quizEmoji(pictureQuiz, [...planning, ...stay, ...holiday], 4),
    ),

    activity(
      U,
      'listen-trip',
      'listen',
      meta(
        'Listen to the trip',
        'Listen to the word and pick its meaning.',
        ['listening', 'weather-travel'],
        2,
        3,
      ),
      listen(heard, vocab),
    ),

    activity(
      U,
      'conj-partir',
      'conjugation',
      {
        ...meta(
          'partir, sortir, dormir',
          'Three -ir verbs that do not follow finir: the singular loses the ending letters.',
          ['grammar', 'fr-a12-partir'],
          2,
          4,
        ),
        lesson: 'fr-a12-partir',
      },
      {
        tables: [
          presentTable(
            'partir',
            'to leave',
            ['pars', 'pars', 'part', 'partons', 'partez', 'partent'],
            ['je', 'il/elle/on', 'nous'],
          ),
          presentTable(
            'sortir',
            'to go out',
            ['sors', 'sors', 'sort', 'sortons', 'sortez', 'sortent'],
            ['tu', 'vous', 'ils/elles'],
          ),
          presentTable(
            'dormir',
            'to sleep',
            ['dors', 'dors', 'dort', 'dormons', 'dormez', 'dorment'],
            ['je', 'il/elle/on', 'vous'],
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-etre',
      'conjugation',
      {
        ...meta(
          'Passé composé with être',
          'Verbs of movement take être. The participle agrees with the subject (shown for men).',
          ['grammar', 'fr-a12-pc-etre'],
          2,
          4,
        ),
        lesson: 'fr-a12-pc-etre',
      },
      {
        tables: [
          pcAnyTable('aller', 'to go', ['je', 'il/elle/on', 'nous']),
          pcAnyTable('arriver', 'to arrive', ['tu', 'vous', 'ils/elles']),
          pcAnyTable('partir', 'to leave', ['je', 'nous', 'ils/elles']),
          pcAnyTable('rester', 'to stay', ['tu', 'il/elle/on', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'sort-auxiliary',
      'sortit',
      {
        ...meta(
          'avoir or être?',
          'Which helping verb does the travel verb take in the passé composé?',
          ['grammar', 'fr-a12-pc-etre'],
          2,
          3,
        ),
        lesson: 'fr-a12-pc-etre',
      },
      {
        instruction: 'Which helping verb goes with it?',
        buckets: [
          { id: 'avoir', label: 'avoir (j’ai …)', emoji: '🅰️' },
          { id: 'etre', label: 'être (je suis …)', emoji: '🅱️' },
        ],
        items: sortCards('s', [
          ['visiter', 'avoir', 'to visit: j’ai visité'],
          ['réserver', 'avoir', 'to book: j’ai réservé'],
          ['voyager', 'avoir', 'to travel: j’ai voyagé'],
          ['envoyer', 'avoir', 'to send: j’ai envoyé'],
          ['prendre', 'avoir', 'to take: j’ai pris'],
          ['dormir', 'avoir', 'to sleep: j’ai dormi'],
          ['aller', 'etre', 'to go: je suis allé'],
          ['arriver', 'etre', 'to arrive: je suis arrivé'],
          ['partir', 'etre', 'to leave: je suis parti'],
          ['rester', 'etre', 'to stay: je suis resté'],
          ['sortir', 'etre', 'to go out: je suis sorti'],
          ['venir', 'etre', 'to come: je suis venu'],
        ]),
      },
    ),

    activity(
      U,
      'gap-comparison',
      'gapfill',
      {
        ...meta(
          'plus, moins or aussi?',
          'Compare two things with the right word.',
          ['grammar', 'fr-a12-comparison', 'weather-travel'],
          2,
          4,
        ),
        lesson: 'fr-a12-comparison',
      },
      {
        items: [
          gap(
            'c1',
            'Le train va à 300 km/h, le bus à 90. Le train est ___ rapide que le bus.',
            'plus',
            ['plus', 'moins', 'aussi', 'très'],
            'The train goes 300 km/h, the bus 90. The train is faster than the bus.',
            'More: plus … que.',
          ),
          gap(
            'c2',
            'L’hôtel coûte 50 euros, l’auberge aussi. L’hôtel est ___ cher que l’auberge.',
            'aussi',
            ['aussi', 'plus', 'moins', 'si'],
            'The hotel costs 50 euros, so does the hostel. The hotel is as expensive as the hostel.',
            'Equal: aussi … que.',
          ),
          gap(
            'c3',
            'En ville, il y a du bruit. La ville est ___ tranquille que la campagne.',
            'moins',
            ['moins', 'plus', 'aussi', 'pas'],
            'In town there is noise. The town is less quiet than the countryside.',
            'Less: moins … que.',
          ),
          gap(
            'c4',
            'Cet hôtel est bon, mais l’autre est encore ___.',
            'meilleur',
            ['meilleur', 'plus bon', 'plus bien', 'mieux'],
            'This hotel is good, but the other one is even better.',
            'Bon has its own comparative: meilleur (never plus bon).',
          ),
          gap(
            'c5',
            'Mon frère marche vite, moi lentement. Je marche ___ vite que mon frère.',
            'moins',
            ['moins', 'plus', 'aussi', 'très'],
            'My brother walks fast, I walk slowly. I walk less fast than my brother.',
            'Less: moins … que.',
          ),
          gap(
            'c6',
            'Cette plage est plus belle ___ l’autre.',
            'que',
            ['que', 'de', 'comme', 'qu’'],
            'This beach is more beautiful than the other one.',
            'After plus, moins and aussi the second term follows que.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-pc-etre',
      'gapfill',
      {
        ...meta(
          'avoir or être, and agreement',
          'Pick the helping verb and the right ending.',
          ['grammar', 'fr-a12-pc-etre', 'weather-travel'],
          2,
          4,
        ),
        lesson: 'fr-a12-pc-etre',
      },
      {
        items: [
          gap(
            'e1',
            'Nous ___ allés à la mer.',
            'sommes',
            ['sommes', 'avons', 'sont', 'ai'],
            'We went to the sea.',
            'Aller takes être: nous sommes allés.',
          ),
          gap(
            'e2',
            'Elle est ___ à Nice hier soir.',
            'arrivée',
            ['arrivée', 'arrivé', 'arrivés', 'arrivées'],
            'She arrived in Nice last night.',
            'With être the participle agrees: elle is feminine, so arrivée.',
          ),
          gap(
            'e3',
            'Mes parents sont ___ en Italie.',
            'partis',
            ['partis', 'parti', 'partie', 'parties'],
            'My parents left for Italy.',
            'Parents is masculine plural, so partis.',
          ),
          gap(
            'e4',
            'Je ___ resté à l’hôtel.',
            'suis',
            ['suis', 'ai', 'es', 'a'],
            'I stayed at the hotel.',
            'Rester takes être: je suis resté.',
          ),
          gap(
            'e5',
            'Léa, tu ___ allée à la plage ?',
            'es',
            ['es', 'as', 'est', 'sont'],
            'Léa, did you go to the beach?',
            'Aller takes être: tu es allée (Léa is a girl).',
          ),
          gap(
            'e6',
            'Ils ___ visité le château.',
            'ont',
            ['ont', 'sont', 'ai', 'est'],
            'They visited the castle.',
            'Visiter takes avoir: ils ont visité.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-cetait',
      'gapfill',
      {
        ...meta(
          'c’était or il y avait?',
          'Describe a past holiday.',
          ['grammar', 'fr-a12-cetait', 'weather-travel'],
          2,
          4,
        ),
        lesson: 'fr-a12-cetait',
      },
      {
        items: [
          gap(
            't1',
            'Hier, à la plage, ___ super !',
            'c’était',
            ['c’était', 'c’est', 'ça a', 'il était'],
            'Yesterday at the beach it was great!',
            'Describing a past situation: c’était.',
          ),
          gap(
            't2',
            'À l’hôtel, il y ___ une piscine.',
            'avait',
            ['avait', 'a', 'était', 'avais'],
            'At the hotel there was a swimming pool.',
            'Il y a becomes il y avait in the past.',
          ),
          gap(
            't3',
            'Il ___ beau pendant tout le séjour.',
            'faisait',
            ['faisait', 'fait', 'était', 'a fait'],
            'The weather was nice during the whole stay.',
            'Weather in the past: il faisait beau.',
          ),
          gap(
            't4',
            'Le paysage ___ magnifique.',
            'était',
            ['était', 'est', 'avait', 'étais'],
            'The landscape was magnificent.',
            'Être in the past: était.',
          ),
          gap(
            't5',
            'Sur la plage, il y ___ beaucoup de monde.',
            'avait',
            ['avait', 'a', 'avais', 'avaient'],
            'On the beach there were lots of people.',
            'Il y avait stays the same, even with many people.',
          ),
          gap(
            't6',
            'Les vacances ? ___ très bien.',
            'C’était',
            ['C’était', 'C’est', 'Ça a', 'Il était'],
            'The holidays? They were very good.',
            'Looking back at a whole trip: c’était.',
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
        ['grammar', 'weather-travel'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'The train is faster than the bus.',
            ['Le', 'train', 'est', 'plus', 'rapide', 'que', 'le', 'bus.'],
            { extra: ['de'] },
          ),
          {
            ...sent(
              's2',
              'We went to the sea last year.',
              ['Nous', 'sommes', 'allés', 'à', 'la', 'mer', 'l’année', 'dernière.'],
              { extra: ['avons'] },
            ),
            lesson: 'fr-a12-pc-etre' as const,
          },
          {
            ...sent(
              's3',
              'She arrived at the hotel at six o’clock.',
              ['Elle', 'est', 'arrivée', 'à', 'l’hôtel', 'à', 'six', 'heures.'],
              { extra: ['arrivé'] },
            ),
            lesson: 'fr-a12-pc-etre' as const,
          },
          {
            ...sent(
              's4',
              'It was great, there were lots of people.',
              ['C’était', 'super,', 'il', 'y', 'avait', 'beaucoup', 'de', 'monde.'],
              { extra: ['a'] },
            ),
            lesson: 'fr-a12-cetait' as const,
          },
          {
            ...sent('s5', 'I leave on Monday.', ['Je', 'pars', 'lundi.'], { extra: ['partons'] }),
            lesson: 'fr-a12-partir' as const,
          },
          {
            ...sent(
              's6',
              'They did not stay in a hotel.',
              ['Ils', 'ne', 'sont', 'pas', 'restés', 'à', 'l’hôtel.'],
              { extra: ['ont'] },
            ),
            lesson: 'fr-a12-pc-etre' as const,
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Booking and a postcard',
        'Book a room, then tell a friend about your holiday.',
        ['communication', 'weather-travel'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'hotel',
            title: 'At the hotel',
            emoji: '🏨',
            setting: 'You phone a hotel to book a room. Use vous.',
            turns: [
              say(
                'La réceptionniste',
                'Hôtel du Lac, bonjour. Je peux vous aider ?',
                'Hôtel du Lac, hello. Can I help you?',
              ),
              you(
                'Bonjour. Je voudrais réserver une chambre double pour trois nuits.',
                [
                  'Bonjour. Je voudrais annuler une chambre double pour trois nuits.',
                  'Annuler means to cancel. You want to book: réserver.',
                ],
                [
                  'Bonjour. Je voudrais réserver une chambre double pour trois nuit.',
                  'After trois the noun is plural: trois nuits.',
                ],
              ),
              say(
                'La réceptionniste',
                'Désolée, l’hôtel est complet ce week-end. Nous avons une chambre libre lundi.',
                'Sorry, the hotel is full this weekend. We have a room free on Monday.',
              ),
              you(
                'Alors, je prends la chambre de lundi. Elle est moins chère que celle du week-end ?',
                [
                  'Alors, je prends la chambre de lundi. Elle est moins cher que celle du week-end ?',
                  'The adjective agrees with chambre: moins chère.',
                ],
                [
                  'Alors, je prends la chambre de lundi. Elle est plus bon marché que ?',
                  'The second term is missing: plus … que + something.',
                ],
              ),
            ],
          },
          {
            id: 'holiday',
            title: 'How were the holidays?',
            emoji: '💌',
            setting: 'A friend asks about your holiday. Use tu.',
            turns: [
              say(
                'Camille',
                'Alors, tes vacances ? Vous êtes partis où ?',
                'So, your holidays? Where did you go?',
              ),
              you(
                'Nous sommes allés à la montagne. C’était super !',
                [
                  'Nous avons allé à la montagne. C’était super !',
                  'Aller takes être: nous sommes allés.',
                ],
                [
                  'Nous sommes allés à la montagne. C’est super !',
                  'You are looking back: c’était, not c’est.',
                ],
              ),
              say(
                'Camille',
                'Super ! Et il y avait beaucoup de monde ?',
                'Great! And were there a lot of people?',
              ),
              you(
                'Non, c’était tranquille. Il faisait beau tous les jours.',
                [
                  'Non, c’est tranquille. Il fait beau tous les jours.',
                  'It is about the past: c’était and il faisait.',
                ],
                [
                  'Non, c’était tranquille. Il y avait beau tous les jours.',
                  'For the weather you say il faisait beau, not il y avait.',
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
        'Holiday blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', 'weather-travel'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“L’aller-retour” is a return ticket.', true),
          tf(
            'b2',
            '“Annuler” means “to book”.',
            false,
            'Annuler means to cancel. To book is réserver.',
          ),
          tf('b3', '“Elle est plus grande que moi” means “She is taller than me”.', true),
          tf(
            'b4',
            '“Il est plus bon que moi” is correct.',
            false,
            'Bon has its own comparative: il est meilleur que moi.',
          ),
          tf('b5', '“Je suis allé” uses être.', true),
          tf(
            'b6',
            '“J’ai arrivé hier” is correct.',
            false,
            'Arriver takes être: je suis arrivé hier.',
          ),
          tf(
            'b7',
            '“Elle est partis” is correct.',
            false,
            'Elle is feminine singular: elle est partie.',
          ),
          tf('b8', '“Il y avait” describes the past.', true),
          tf('b9', '“Nous partons” is the nous form of partir.', true),
          tf('b10', '“Je part” is correct.', false, 'The je form is je pars (with an s).'),
          tf('b11', '“Le camping” is a campsite.', true),
          tf('b12', '“Complet” means “free”.', false, 'Complet means full. Free is libre.'),
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
        ['vocabulary', 'grammar', 'weather-travel'],
        3,
        4,
      ),
      {
        questions: [
          {
            ...q(
              'c1',
              'Complete: “Le bus est ___ rapide que le train.” (the bus is slower)',
              'moins',
              ['plus', 'aussi', 'très'],
            ),
            lesson: 'fr-a12-comparison' as const,
          },
          {
            ...q('c2', 'Which one is correct?', 'Ce film est meilleur que l’autre.', [
              'Ce film est plus bon que l’autre.',
              'Ce film est plus meilleur que l’autre.',
              'Ce film est aussi mieux que l’autre.',
            ]),
            lesson: 'fr-a12-comparison' as const,
          },
          {
            ...q('c3', 'Complete: “Je ___ à huit heures.” (partir)', 'pars', [
              'part',
              'partes',
              'partons',
            ]),
            lesson: 'fr-a12-partir' as const,
          },
          {
            ...q('c4', 'Complete: “Elle ___ à Paris.” (aller, passé composé)', 'est allée', [
              'a allée',
              'est allé',
              'a allé',
            ]),
            lesson: 'fr-a12-pc-etre' as const,
          },
          {
            ...q('c5', 'Which sentence is correct?', 'Nous sommes restés à l’hôtel.', [
              'Nous avons resté à l’hôtel.',
              'Nous sommes resté à l’hôtel.',
              'Nous ont restés à l’hôtel.',
            ]),
            lesson: 'fr-a12-pc-etre' as const,
          },
          {
            ...q('c6', 'Complete: “À l’hôtel, il y ___ une piscine.”', 'avait', [
              'a',
              'était',
              'avaient',
            ]),
            lesson: 'fr-a12-cetait' as const,
          },
          q('c7', 'What does “la randonnée” mean?', 'hike', ['beach', 'postcard', 'ticket']),
          q('c8', 'What does “complet” mean for a hotel?', 'fully booked', [
            'cheap',
            'with breakfast',
            'with a pool',
          ]),
        ],
      },
    ),
  ],
};
