import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import {
  gap,
  meta,
  pcReflexiveTable,
  pcTable,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr21,
  withLesson,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-parcours';

const events = vocabList(U, 'Life path', [
  ['la naissance', 'birth', '👶'],
  ['l’enfance', 'childhood', '🧒'],
  ['l’adolescence', 'teenage years', '🧑‍🎤'],
  ['les études', 'studies', '📖'],
  ['le baccalauréat', 'school-leaving exam (le bac)', '📜'],
  ['le diplôme', 'degree / diploma', '🎓'],
  ['le stage', 'internship', '🧑‍💼'],
  ['l’emploi', 'job', '💼'],
  ['la carrière', 'career', '📈'],
  ['le mariage', 'wedding / marriage', '💍'],
  ['le déménagement', 'move (to a new home)', '📦'],
  ['la retraite', 'retirement', '🏖️'],
]);

const lifeVerbs = vocabList(U, 'Life events', [
  ['naître', 'to be born', '🍼'],
  ['grandir', 'to grow up', '📏'],
  ['étudier', 'to study', '📚'],
  ['réussir', 'to pass / to succeed', '✅'],
  ['obtenir un diplôme', 'to get a degree', '🎓'],
  ['trouver un emploi', 'to find a job', '🔍'],
  ['déménager', 'to move house', '🚚'],
  ['s’installer', 'to settle (somewhere)', '🏡'],
  ['se marier', 'to get married', '👰'],
  ['changer de vie', 'to change one’s life', '🔄'],
  ['quitter', 'to leave', '🚪'],
  ['prendre sa retraite', 'to retire', '🌴'],
]);

const jobs = vocabList(U, 'Creative jobs', [
  ['le peintre', 'painter', '🎨'],
  ['le sculpteur', 'sculptor', '🗿'],
  ['le chanteur', 'singer', '🎤'],
  ['le musicien', 'musician', '🎻'],
  ['l’acteur', 'actor', '🎭'],
  ['le réalisateur', 'film director', '🎬'],
  ['le photographe', 'photographer', '📷'],
  ['l’écrivain', 'writer', '✍️'],
  ['le danseur', 'dancer', '🩰'],
  ['l’architecte', 'architect', '🏛️'],
]);

const linkers = vocabList(U, 'Telling a story', [
  ['d’abord', 'first', '1️⃣'],
  ['ensuite', 'then / next', '2️⃣'],
  ['enfin', 'finally', '🏁'],
  ['ne … rien', 'nothing', '🚫'],
  ['ne … personne', 'nobody', '👤'],
  ['ne … jamais', 'never', '⛔'],
  ['ne … plus', 'no longer', '🔚'],
  ['ne … pas encore', 'not yet', '⏳'],
]);

const vocab = [...events, ...lifeVerbs, ...jobs, ...linkers];

export const parcours: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 1,
    title: 'Nouvelles vies',
    subtitle: 'Tell your life story and talk about changes, studies and work',
    emoji: '🛤️',
    goals: [
      'Tell your life story in the passé composé',
      'Say what you have never done or no longer do',
      'Place events in time with il y a, pendant and depuis',
    ],
    grammar: [
      'Passé composé: avoir or être',
      'Irregular past participles',
      'ne … rien / personne / jamais / plus',
      'il y a, pendant, depuis, en',
    ],
    vocabFields: ['Life path', 'Life events', 'Creative jobs', 'Telling a story'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-life',
      'flashcards',
      meta(
        'Life stages',
        'Words for the big moments of a life: birth, studies, career, retirement.',
        ['vocabulary', 'life-path'],
        1,
        3,
      ),
      flashcards(events),
    ),

    activity(
      U,
      'flash-verbs',
      'flashcards',
      meta(
        'What happens in a life',
        'Verbs and phrases for telling a life story.',
        ['vocabulary', 'life-path'],
        1,
        3,
      ),
      flashcards(lifeVerbs),
    ),

    activity(
      U,
      'flash-jobs',
      'flashcards',
      meta(
        'Creative jobs',
        'Painters, singers, directors: jobs in the arts.',
        ['vocabulary', 'life-path', 'music-art'],
        1,
        3,
      ),
      flashcards(jobs),
    ),

    activity(
      U,
      'quiz-jobs',
      'quiz',
      meta(
        'What is this?',
        'Name the job or life event from the picture.',
        ['vocabulary', 'life-path', 'music-art'],
        1,
        3,
      ),
      quizEmoji([...jobs.slice(0, 6), ...events.slice(3, 9)], [...jobs, ...events]),
    ),

    activity(
      U,
      'listen-life',
      'listen',
      meta(
        'Listen: life events',
        'Listen to the word and pick its meaning.',
        ['listening', 'life-path'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'le diplôme', 'le stage', 'la retraite', 'le mariage'),
          ...byDe(vocab, 'déménager', 'obtenir un diplôme', 'se marier', 'quitter'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'conj-avoir',
      'conjugation',
      meta(
        'Passé composé with avoir',
        'Most verbs use avoir plus a past participle: j’ai travaillé.',
        ['grammar', 'fr-a21-passe-compose'],
        2,
        4,
      ),
      {
        tables: [
          pcTable('travailler', 'to work', ['je', 'nous', 'ils/elles']),
          pcTable('finir', 'to finish', ['tu', 'il/elle/on', 'vous']),
          pcTable('obtenir', 'to obtain', ['je', 'tu', 'ils/elles']),
          pcTable('faire', 'to do / to make', ['il/elle/on', 'nous', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'conj-etre',
      'conjugation',
      meta(
        'Passé composé with être',
        'Movement verbs, naître and pronominal verbs use être. The participle agrees (shown for men).',
        ['grammar', 'fr-a21-passe-compose'],
        2,
        4,
      ),
      {
        tables: [
          pcTable('aller', 'to go', ['je', 'il/elle/on', 'nous']),
          pcTable('arriver', 'to arrive', ['tu', 'vous', 'ils/elles']),
          pcTable('naître', 'to be born', ['je', 'il/elle/on', 'ils/elles']),
          pcReflexiveTable('marier', 'to get married', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'sort-auxiliary',
      'sortit',
      meta(
        'avoir or être?',
        'Which auxiliary does the verb take in the passé composé?',
        ['grammar', 'fr-a21-passe-compose'],
        2,
        4,
      ),
      {
        instruction: 'Which auxiliary goes with the verb?',
        buckets: [
          { id: 'avoir', label: 'avoir (j’ai …)', emoji: '🅰️' },
          { id: 'etre', label: 'être (je suis …)', emoji: '🅱️' },
        ],
        items: sortCards('s', [
          ['travailler', 'avoir', 'to work: j’ai travaillé'],
          ['étudier', 'avoir', 'to study: j’ai étudié'],
          ['obtenir', 'avoir', 'to obtain: j’ai obtenu'],
          ['trouver', 'avoir', 'to find: j’ai trouvé'],
          ['faire', 'avoir', 'to do: j’ai fait'],
          ['prendre', 'avoir', 'to take: j’ai pris'],
          ['quitter', 'avoir', 'to leave (a place): j’ai quitté'],
          ['grandir', 'avoir', 'to grow up: j’ai grandi'],
          ['aller', 'etre', 'to go: je suis allé'],
          ['naître', 'etre', 'to be born: je suis né'],
          ['arriver', 'etre', 'to arrive: je suis arrivé'],
          ['partir', 'etre', 'to leave: je suis parti'],
          ['rester', 'etre', 'to stay: je suis resté'],
          ['sortir', 'etre', 'to go out: je suis sorti'],
          ['se marier', 'etre', 'to get married: je me suis marié'],
          ['s’installer', 'etre', 'to settle: je me suis installé'],
        ]),
      },
    ),

    activity(
      U,
      'gap-participles',
      'gapfill',
      meta(
        'Which participle?',
        'Irregular past participles: fait, pris, eu, vu, vécu.',
        ['grammar', 'fr-a21-participles', 'life-path'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'p1',
            'J’ai ___ un stage à Paris.',
            'fait',
            ['fait', 'faisé', 'faire', 'faisant'],
            'I did an internship in Paris.',
            'Faire is irregular: fait.',
          ),
          gap(
            'p2',
            'Il a ___ à Lyon pendant dix ans.',
            'vécu',
            ['vécu', 'vivé', 'vivre', 'vivu'],
            'He lived in Lyon for ten years.',
            'Vivre is irregular: vécu.',
          ),
          gap(
            'p3',
            'Nous avons ___ la décision de déménager.',
            'pris',
            ['pris', 'prendu', 'prendé', 'prenu'],
            'We took the decision to move.',
            'Prendre is irregular: pris.',
          ),
          gap(
            'p4',
            'Elle a ___ un roman en un an.',
            'écrit',
            ['écrit', 'écrivé', 'écrire', 'écrivu'],
            'She wrote a novel in a year.',
            'Écrire is irregular: écrit.',
          ),
          gap(
            'p5',
            'Il a ___ son baccalauréat en juin.',
            'eu',
            ['eu', 'avu', 'avoir', 'été'],
            'He passed his baccalauréat in June.',
            'Avoir is irregular: eu (avoir son bac = to get the bac).',
          ),
          gap(
            'p6',
            'Tu as ___ ce film ?',
            'vu',
            ['vu', 'voyé', 'voir', 'voyu'],
            'Did you see this film?',
            'Voir is irregular: vu.',
          ),
          gap(
            'p7',
            'Elle a ___ très heureuse en France.',
            'été',
            ['été', 'eu', 'étée', 'étant'],
            'She was very happy in France.',
            'Être is irregular: été.',
          ),
          gap(
            'p8',
            'J’ai ___ le français à Nice.',
            'appris',
            ['appris', 'apprendu', 'apprendé', 'apprenu'],
            'I learned French in Nice.',
            'Apprendre is irregular like prendre: appris.',
          ),
          gap(
            'p9',
            'Ils ont ___ un petit café.',
            'ouvert',
            ['ouvert', 'ouvri', 'ouvré', 'ouvru'],
            'They opened a small café.',
            'Ouvrir is irregular: ouvert.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-negatives',
      'gapfill',
      meta(
        'Nothing, nobody, never',
        'ne … rien, personne, jamais, plus and pas encore around the passé composé.',
        ['grammar', 'fr-a21-negatives'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'n1',
            'Je n’ai ___ mangé ce matin.',
            'rien',
            ['rien', 'personne', 'jamais', 'plus'],
            'I have not eaten anything this morning.',
            'Rien means nothing and stands between the auxiliary and the participle.',
          ),
          gap(
            'n2',
            'Elle n’a invité ___ à son mariage.',
            'personne',
            ['personne', 'rien', 'jamais', 'plus'],
            'She did not invite anybody to her wedding.',
            'Personne comes after the participle: n’a invité personne.',
          ),
          gap(
            'n3',
            'Nous ne sommes ___ allés au Japon.',
            'jamais',
            ['jamais', 'rien', 'personne', 'pas encore'],
            'We have never been to Japan.',
            'Jamais means never and stands between the auxiliary and the participle.',
          ),
          gap(
            'n4',
            'Il n’habite ___ à Paris : il a déménagé.',
            'plus',
            ['plus', 'jamais', 'rien', 'personne'],
            'He no longer lives in Paris: he has moved.',
            'Ne … plus means no longer.',
          ),
          gap(
            'n5',
            'Elle n’a ___ fini ses études.',
            'pas encore',
            ['pas encore', 'jamais', 'rien', 'personne'],
            'She has not finished her studies yet.',
            'Ne … pas encore means not yet.',
          ),
          gap(
            'n6',
            '___ n’est venu à la fête.',
            'Personne',
            ['Personne', 'Rien', 'Jamais', 'Plus'],
            'Nobody came to the party.',
            'As a subject, personne comes first and ne follows it.',
          ),
          gap(
            'n7',
            '___ n’a changé dans ce quartier.',
            'Rien',
            ['Rien', 'Personne', 'Jamais', 'Plus'],
            'Nothing has changed in this neighbourhood.',
            'As a subject, rien comes first and ne follows it.',
          ),
        ].map((item) => withLesson('fr-a21-negatives', item)),
      },
    ),

    activity(
      U,
      'gap-time',
      'gapfill',
      meta(
        'How long, how long ago?',
        'il y a, pendant, depuis and en place an event in time.',
        ['grammar', 'fr-a21-time-markers', 'life-path'],
        3,
        4,
      ),
      {
        items: [
          gap(
            't1',
            'Je suis né ___ 1998.',
            'en',
            ['en', 'depuis', 'il y a', 'pendant'],
            'I was born in 1998.',
            'En + year gives the moment.',
          ),
          gap(
            't2',
            'Elle habite à Lyon ___ trois ans.',
            'depuis',
            ['depuis', 'pendant', 'il y a', 'en'],
            'She has lived in Lyon for three years.',
            'Depuis + present: it started in the past and still goes on.',
          ),
          gap(
            't3',
            'Il a travaillé à Marseille ___ deux ans.',
            'pendant',
            ['pendant', 'depuis', 'il y a', 'en'],
            'He worked in Marseille for two years.',
            'Pendant gives the length of something that is over.',
          ),
          gap(
            't4',
            'J’ai déménagé ___ six mois.',
            'il y a',
            ['il y a', 'pendant', 'depuis', 'en'],
            'I moved six months ago.',
            'Il y a + duration means ago.',
          ),
          gap(
            't5',
            '___ septembre, je commence mon stage.',
            'En',
            ['En', 'Depuis', 'Il y a', 'Pendant'],
            'In September I start my internship.',
            'En + month names the moment.',
          ),
          gap(
            't6',
            'Nous nous sommes mariés ___ dix ans.',
            'il y a',
            ['il y a', 'pendant', 'depuis', 'en'],
            'We got married ten years ago.',
            'Il y a + duration means ago.',
          ),
          gap(
            't7',
            'Elle étudie le français ___ janvier.',
            'depuis',
            ['depuis', 'pendant', 'il y a', 'en'],
            'She has been studying French since January.',
            'Depuis also names the starting point: depuis janvier.',
          ),
          gap(
            't8',
            'Il est resté chez ses parents ___ toute son enfance.',
            'pendant',
            ['pendant', 'depuis', 'il y a', 'en'],
            'He stayed with his parents throughout his childhood.',
            'Pendant covers a period that is finished.',
          ),
        ].map((item) => withLesson('fr-a21-time-markers', item)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of a life story in the right order.',
        ['grammar', 'fr-a21-passe-compose', 'life-path'],
        2,
        4,
      ),
      {
        items: [
          withLesson(
            'fr-a21-passe-compose',
            sent(
              's1',
              'I was born in Lyon in 1990.',
              ['Je', 'suis', 'né', 'à', 'Lyon', 'en', '1990.'],
              {
                extra: ['ai'],
                alsoAccept: ['Je suis née à Lyon en 1990.'],
              },
            ),
          ),
          withLesson(
            'fr-a21-negatives',
            sent(
              's2',
              'She has not found a job yet.',
              ['Elle', 'n’a', 'pas', 'encore', 'trouvé', 'un', 'emploi.'],
              { extra: ['jamais'] },
            ),
          ),
          withLesson(
            'fr-a21-time-markers',
            sent(
              's3',
              'We moved to Paris two years ago.',
              ['Nous', 'avons', 'déménagé', 'à', 'Paris', 'il', 'y', 'a', 'deux', 'ans.'],
              { extra: ['sommes', 'depuis'] },
            ),
          ),
          withLesson(
            'fr-a21-negatives',
            sent('s4', 'He has never worked abroad.', [
              'Il',
              'n’a',
              'jamais',
              'travaillé',
              'à',
              'l’étranger.',
            ]),
          ),
          withLesson(
            'fr-a21-passe-compose',
            sent(
              's5',
              'First I studied, then I left.',
              ['D’abord,', 'j’ai', 'étudié,', 'ensuite', 'je', 'suis', 'parti.'],
              { alsoAccept: ['D’abord, j’ai étudié, ensuite je suis partie.'] },
            ),
          ),
          withLesson(
            'fr-a21-passe-compose',
            sent(
              's6',
              'They got married in June.',
              ['Ils', 'se', 'sont', 'mariés', 'en', 'juin.'],
              {
                extra: ['ont'],
              },
            ),
          ),
        ],
      },
    ),

    activity(
      U,
      'spell-life',
      'spell',
      meta(
        'Spell the life words',
        'Unscramble and type life words. Accents are optional here.',
        ['spelling', 'life-path'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-diplome',
            mode: 'unscramble',
            answer: 'diplôme',
            hint: 'degree',
            emoji: '🎓',
            speak: 'le diplôme',
          },
          {
            id: 'sp-etudier',
            mode: 'unscramble',
            answer: 'étudier',
            hint: 'to study',
            emoji: '📚',
            speak: 'étudier',
          },
          {
            id: 'sp-demenager',
            mode: 'type',
            answer: 'déménager',
            hint: 'to move house',
            emoji: '🚚',
            speak: 'déménager',
          },
          {
            id: 'sp-retraite',
            mode: 'type',
            answer: 'retraite',
            hint: 'retirement',
            emoji: '🏖️',
            speak: 'la retraite',
          },
          {
            id: 'sp-ecrivain',
            mode: 'type',
            answer: 'écrivain',
            hint: 'writer',
            emoji: '✍️',
            speak: 'l’écrivain',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Life stories',
        'Tell where you were born, what you studied and what you have never done.',
        ['communication', 'life-path'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'my-story',
            title: 'Where are you from?',
            emoji: '🌍',
            setting: 'Camille asks about your life. You say tu to each other.',
            turns: [
              say('Camille', 'Tu es né où ?', 'Where were you born?'),
              you(
                'Je suis né à Bordeaux.',
                ['J’ai né à Bordeaux.', 'Naître takes être: je suis né.'],
                ['Je suis naître à Bordeaux.', 'Use the participle né, not the infinitive.'],
              ),
              say('Camille', 'Et tu as étudié où ?', 'And where did you study?'),
              you(
                'J’ai étudié à Toulouse pendant cinq ans.',
                [
                  'J’ai étudié à Toulouse depuis cinq ans.',
                  'The studies are over, so pendant: depuis is for something that still goes on.',
                ],
                [
                  'Je suis étudié à Toulouse pendant cinq ans.',
                  'Étudier takes avoir: j’ai étudié.',
                ],
              ),
              say('Camille', 'Super ! Et maintenant ?', 'Great! And now?'),
              you(
                'Maintenant, je travaille à Paris depuis un an.',
                [
                  'Maintenant, je travaille à Paris pendant un an.',
                  'The job goes on, so depuis, with the present tense.',
                ],
                [
                  'Maintenant, je travaille à Paris il y a un an.',
                  'Il y a means ago and names a point in the past.',
                ],
              ),
            ],
          },
          {
            id: 'interview',
            title: 'At a job interview',
            emoji: '💼',
            setting: 'A recruiter asks about your experience. You say vous.',
            turns: [
              say(
                'Mme Roux',
                'Vous avez déjà travaillé à l’étranger ?',
                'Have you ever worked abroad?',
              ),
              you(
                'Non, je n’ai jamais travaillé à l’étranger.',
                [
                  'Non, je n’ai travaillé jamais à l’étranger.',
                  'Jamais goes between the auxiliary and the participle.',
                ],
                [
                  'Non, je ne travaille jamais à l’étranger.',
                  'The question is in the passé composé: answer with n’ai … travaillé.',
                ],
              ),
              say('Mme Roux', 'Vous avez un diplôme ?', 'Do you have a degree?'),
              you(
                'Oui, j’ai obtenu mon diplôme il y a deux ans.',
                [
                  'Oui, j’ai obtenu mon diplôme depuis deux ans.',
                  'Depuis goes with the present. For a moment in the past use il y a.',
                ],
                [
                  'Oui, j’ai obtenu mon diplôme pendant deux ans.',
                  'Pendant gives a length of time, not a moment ago.',
                ],
              ),
              say(
                'Mme Roux',
                'Parfait ! Vous pouvez commencer lundi.',
                'Perfect! You can start on Monday.',
              ),
            ],
          },
          {
            id: 'the-move',
            title: 'A new city',
            emoji: '📦',
            setting: 'Your friend Julie hears that you have moved.',
            turns: [
              say('Julie', 'Alors, tu as déménagé ?', 'So, you have moved?'),
              you(
                'Oui, nous avons déménagé il y a un mois.',
                [
                  'Oui, nous avons déménagé depuis un mois.',
                  'Depuis would need the present: nous habitons ici depuis un mois.',
                ],
                [
                  'Oui, nous sommes déménagé il y a un mois.',
                  'Déménager takes avoir: nous avons déménagé.',
                ],
              ),
              say('Julie', 'Pourquoi ?', 'Why?'),
              you(
                'Parce que j’ai trouvé un nouvel emploi.',
                ['Parce que je suis trouvé un nouvel emploi.', 'Trouver takes avoir: j’ai trouvé.'],
                [
                  'Parce que j’ai trouver un nouvel emploi.',
                  'After avoir use the participle: trouvé.',
                ],
              ),
              say('Julie', 'Félicitations !', 'Congratulations!'),
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
        'Life blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'life-path', 'fr-a21-passe-compose'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Je suis né en 1998” is correct.', true),
          tf('b2', '“J’ai né en 1998” is correct.', false, 'Naître takes être: je suis né.'),
          tf('b3', '“Il a fait un stage” is correct.', true),
          tf(
            'b4',
            '“Elle a allée à Paris” is correct.',
            false,
            'Aller takes être: elle est allée.',
          ),
          tf('b5', '“Je n’ai rien dit” is correct.', true),
          tf(
            'b6',
            '“Je n’ai personne vu” is correct.',
            false,
            'Personne comes after the participle: je n’ai vu personne.',
          ),
          tf(
            'b7',
            '“Il y a deux ans” means “in two years”.',
            false,
            'Il y a + duration means ago.',
          ),
          tf('b8', '“Depuis 2020” goes with the present tense.', true),
          tf('b9', '“La retraite” is the time after working life.', true),
          tf('b10', '“Un stage” is an internship.', true),
          tf('b11', '“Nous nous sommes mariés” uses être.', true),
          tf('b12', '“Pris” is the participle of prendre.', true),
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
        ['vocabulary', 'grammar', 'life-path'],
        3,
        4,
      ),
      {
        questions: [
          {
            ...q(
              'c1',
              'Complete: “Elle ___ à Paris en 2015.”',
              'est arrivée',
              ['a arrivé', 'est arrivé', 'a arrivée'],
              'Arriver takes être and the participle agrees with elle.',
            ),
            lesson: 'fr-a21-passe-compose' as const,
          },
          {
            ...q('c2', 'Complete: “Nous ___ un stage.”', 'avons fait', [
              'sommes fait',
              'avons faits',
              'faisons fait',
            ]),
            lesson: 'fr-a21-participles' as const,
          },
          {
            ...q('c3', 'Which sentence is correct?', 'Il n’a jamais voyagé.', [
              'Il n’a voyagé jamais.',
              'Il ne a jamais voyagé.',
              'Il jamais n’a voyagé.',
            ]),
            lesson: 'fr-a21-negatives' as const,
          },
          {
            ...q('c4', 'Complete: “Nous habitons ici ___ 2020.”', 'depuis', [
              'pendant',
              'il y a',
              'à',
            ]),
            lesson: 'fr-a21-time-markers' as const,
          },
          {
            ...q('c5', 'Complete: “J’ai quitté Lyon ___ deux ans.”', 'il y a', [
              'depuis',
              'pendant',
              'en',
            ]),
            lesson: 'fr-a21-time-markers' as const,
          },
          {
            ...q('c6', 'What is the participle of écrire?', 'écrit', [
              'écrivé',
              'écrite',
              'écrivu',
            ]),
            lesson: 'fr-a21-participles' as const,
          },
          q('c7', '“Le baccalauréat” is …', 'the exam at the end of school', [
            'a type of job',
            'a retirement plan',
            'a kind of diploma for artists',
          ]),
          {
            ...q('c8', 'Complete: “Personne ___ venu.”', 'n’est', ['ne est', 'n’a', 'pas']),
            lesson: 'fr-a21-negatives' as const,
          },
        ],
      },
    ),
  ],
};
