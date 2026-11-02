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

const U = 'fr-b1-2-paysages';
const L = 'fr-b12-future-choice' as const;

const landscapes = vocabList(U, 'Landscapes', [
  ['le sommet', 'summit', '🏔️'],
  ['la vallée', 'valley', '🏞️'],
  ['la falaise', 'cliff', '🧗'],
  ['la côte', 'coast', '🏖️'],
  ['l’île', 'island', '🏝️'],
  ['le lac', 'lake', '🛶'],
  ['le désert', 'desert', '🏜️'],
  ['la plaine', 'plain', '🌾'],
  ['le volcan', 'volcano', '🌋'],
  ['la cascade', 'waterfall', '💦'],
  ['la grotte', 'cave', '🦇'],
  ['le sentier', 'path, trail', '🥾'],
  ['le glacier', 'glacier', '🧊'],
  ['la dune', 'dune', '🐪'],
  ['les gorges', 'gorge', '🪨'],
  ['le littoral', 'shoreline', '🌊'],
  ['la prairie', 'meadow', '🐄'],
  ['le marais', 'marsh', '🦆'],
  ['le col', 'mountain pass', '🚵'],
  ['le panorama', 'panoramic view', '🌄'],
]);

const weather = vocabList(U, 'Weather and the forecast', [
  ['la météo', 'weather forecast', '📺'],
  ['les prévisions', 'forecast', '📈'],
  ['une éclaircie', 'sunny spell', '🌤️'],
  ['une averse', 'shower', '🌦️'],
  ['un orage', 'thunderstorm', '⛈️'],
  ['le brouillard', 'fog', '🌫️'],
  ['la canicule', 'heatwave', '🥵'],
  ['la tempête', 'storm', '🌪️'],
  ['le verglas', 'black ice', '🧊'],
  ['une rafale', 'gust', '💨'],
  ['la grêle', 'hail', '🌨️'],
  ['un arc-en-ciel', 'rainbow', '🌈'],
  ['nuageux', 'cloudy', '☁️'],
  ['ensoleillé', 'sunny', '🌞'],
  ['orageux', 'stormy', '🌩️'],
  ['dégagé', 'clear', '🔭'],
  ['couvert', 'overcast', '🌥️'],
  ['doux', 'mild', '🍃'],
  ['frais', 'cool, chilly', '🧥'],
  ['se dégager', 'to clear up (sky)', '🌤️'],
]);

const outdoors = vocabList(U, 'Outdoors and time words', [
  ['la randonnée', 'hike', '🥾'],
  ['l’escalade', 'climbing', '🧗‍♀️'],
  ['la baignade', 'swimming (outdoors)', '🏊'],
  ['le bivouac', 'bivouac, camping out', '🏕️'],
  ['le sac de couchage', 'sleeping bag', '🛌'],
  ['la boussole', 'compass', '🧭'],
  ['randonner', 'to hike', '🚶'],
  ['bientôt', 'soon', '⏳'],
  ['ultérieurement', 'later on', '⏭️'],
  ['prochainement', 'shortly, in the near future', '🔜'],
  ['dès que', 'as soon as', '⚡'],
  ['lorsque', 'when', '🕰️'],
  ['d’ici', 'by, within (a time)', '🗓️'],
  ['tout à l’heure', 'in a little while, earlier', '🕐'],
]);

const phrases = vocabList(U, 'Phrases', [
  [
    'Qu’est-ce que la météo annonce pour demain ?',
    'What does the forecast say for tomorrow?',
    '❓',
  ],
  [
    'On annonce des averses en fin de journée.',
    'Showers are forecast for the end of the day.',
    '🌦️',
  ],
  [
    'Dès qu’il fera beau, nous partirons en randonnée.',
    'As soon as the weather is fine, we will go hiking.',
    '🥾',
  ],
  ['D’ici deux jours, le brouillard se lèvera.', 'Within two days the fog will clear.', '🌫️'],
  ['Le sentier longe la falaise.', 'The path runs along the cliff.', '🧗'],
  ['La vue depuis le sommet est magnifique.', 'The view from the summit is wonderful.', '🌄'],
  [
    'Il va y avoir de l’orage cet après-midi.',
    'There is going to be a thunderstorm this afternoon.',
    '⛈️',
  ],
  ['Nous dormirons sous la tente.', 'We will sleep in a tent.', '⛺'],
]);

const vocab = [...landscapes, ...weather, ...outdoors, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const FORMS: [string, 'present' | 'proche' | 'simple', string][] = [
  ['Le car part dans dix minutes.', 'present', 'The coach leaves in ten minutes. (timetable)'],
  [
    'Demain, je vais à la montagne.',
    'present',
    'Tomorrow I am going to the mountains. (fixed plan)',
  ],
  ['Attention, il va pleuvoir !', 'proche', 'Watch out, it is going to rain! (about to happen)'],
  [
    'Regarde ces nuages : on va avoir un orage.',
    'proche',
    'Look at those clouds: we are going to get a storm.',
  ],
  ['Je vais appeler le gîte tout de suite.', 'proche', 'I am going to call the cottage right now.'],
  ['L’été prochain, nous irons en Corse.', 'simple', 'Next summer we will go to Corsica.'],
  [
    'Dans dix ans, les glaciers auront presque disparu.',
    'simple',
    'In ten years the glaciers will have almost gone.',
  ],
  [
    'Je te rappellerai dès que je serai au sommet.',
    'simple',
    'I will call you back as soon as I am at the summit.',
  ],
  ['Il fera très chaud la semaine prochaine.', 'simple', 'It will be very hot next week.'],
];

export const paysages: UnitContent = {
  unit: unitFr({
    id: U,
    order: 2,
    title: 'Paysages et météo',
    subtitle: 'Describe landscapes, read the forecast and say what will happen',
    emoji: '🏔️',
    goals: [
      'Name landscapes and read a weather forecast',
      'Choose between the present, aller + infinitive and the simple future',
      'Link two future actions with dès que, quand and lorsque',
    ],
    grammar: ['Present, near future or simple future', 'dès que, lorsque + future', 'Time words'],
    vocabFields: ['Landscapes', 'Weather and the forecast', 'Outdoors and time words', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-landscapes',
      'flashcards',
      meta(
        'Landscapes',
        'Mountains, coasts, valleys and trails.',
        ['vocabulary', 'weather-travel'],
        1,
        4,
      ),
      flashcards(landscapes),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this landscape?',
        'Look at the picture and pick the word.',
        ['vocabulary', 'weather-travel'],
        1,
        3,
      ),
      quizEmoji(
        byDe(
          vocab,
          'le sommet',
          'l’île',
          'le désert',
          'le volcan',
          'la cascade',
          'le glacier',
          'la dune',
          'la côte',
        ),
        landscapes,
        4,
      ),
    ),

    activity(
      U,
      'memory-weather',
      'memory',
      meta(
        'Weather in pictures',
        'Match each weather word with its picture.',
        ['vocabulary', 'weather-travel'],
        2,
        3,
      ),
      memory(
        byDe(
          vocab,
          'une averse',
          'un orage',
          'le brouillard',
          'la tempête',
          'la grêle',
          'un arc-en-ciel',
          'ensoleillé',
          'nuageux',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'listen-forecast',
      'listen',
      meta(
        'Listen to the forecast',
        'Listen to the word and pick its meaning.',
        ['listening', 'weather-travel'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'une éclaircie',
          'la canicule',
          'le verglas',
          'une rafale',
          'dégagé',
          'frais',
          'la falaise',
          'le marais',
        ),
        [...weather, ...landscapes],
      ),
    ),

    activity(
      U,
      'flash-weather',
      'flashcards',
      meta(
        'The forecast',
        'Weather words, outdoor activities and time words.',
        ['vocabulary', 'weather-travel'],
        1,
        4,
      ),
      flashcards([...weather, ...outdoors]),
    ),

    activity(
      U,
      'spell-outdoors',
      'spell',
      meta(
        'Spell the outdoors',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', 'weather-travel'],
        2,
        4,
      ),
      {
        items: [
          sp('sp-vallee', 'unscramble', 'vallée', mean('la vallée'), '🏞️', 'la vallée'),
          sp('sp-falaise', 'unscramble', 'falaise', mean('la falaise'), '🧗', 'la falaise'),
          sp('sp-tempete', 'type', 'tempête', mean('la tempête'), '🌪️', 'la tempête'),
          sp('sp-eclaircie', 'type', 'éclaircie', mean('une éclaircie'), '🌤️', 'une éclaircie'),
          dictation('sp-brouillard', 'brouillard', 'fog', 'le brouillard'),
          dictation('sp-randonnee', 'randonnée', 'hike', 'la randonnée'),
        ],
      },
    ),

    activity(
      U,
      'sort-future-forms',
      'sortit',
      meta(
        'Which future?',
        'Present, aller + infinitive or simple future: which form is used?',
        ['grammar', L, 'weather-travel'],
        2,
        3,
      ),
      {
        instruction: 'Which form expresses the future here?',
        buckets: [
          { id: 'present', label: 'Present', emoji: '⏱️' },
          { id: 'proche', label: 'aller + infinitive', emoji: '🔮' },
          { id: 'simple', label: 'Simple future', emoji: '🗓️' },
        ],
        items: sortCards('f', FORMS),
      },
    ),

    activity(
      U,
      'conj-future',
      'conjugation',
      meta(
        'Future of outdoor verbs',
        'Simple future of verbs for a trip in nature.',
        ['grammar', 'fr-futur-simple'],
        2,
        4,
      ),
      {
        tables: [
          futurTable('randonner-1', 'randonner', 'to hike', ['je', 'tu', 'il/elle/on']),
          futurTable('dormir-1', 'dormir', 'to sleep', ['nous', 'vous', 'ils/elles']),
          futurTable('courir-1', 'courir', 'to run', ['je', 'nous', 'ils/elles']),
          futurTable('devoir-1', 'devoir', 'must, to have to', ['tu', 'il/elle/on', 'vous']),
          futurTable('voir-1', 'voir', 'to see', ['je', 'tu', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-future-choice',
      'gapfill',
      meta(
        'Choose the form',
        'Complete the sentence with the future that fits.',
        ['grammar', L, 'weather-travel'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Regarde le ciel : il ___ pleuvoir !',
            'va',
            ['va', 'aura', 'ira'],
            'Look at the sky: it is going to rain!',
            'Something that is about to happen and you can see it: aller + infinitive.',
          ),
          gap(
            'g2',
            'Le train ___ à huit heures demain.',
            'part',
            ['part', 'partait', 'est parti'],
            'The train leaves at eight o’clock tomorrow.',
            'A timetable takes the present, even for the future.',
          ),
          gap(
            'g3',
            'Dans cinq ans, nous ___ au bord de la mer.',
            'habiterons',
            ['habiterons', 'habitons', 'habitions'],
            'In five years we will live by the sea.',
            'A distant plan or prediction: the simple future.',
          ),
          gap(
            'g4',
            'Dès qu’il ___ beau, je sortirai.',
            'fera',
            ['fera', 'faisait', 'ferait'],
            'As soon as the weather is fine, I will go out.',
            'After dès que the action is still to come: simple future.',
          ),
          gap(
            'g5',
            'Lorsque nous ___ au sommet, nous prendrons une photo.',
            'arriverons',
            ['arriverons', 'arrivions', 'arrivaient'],
            'When we reach the summit, we will take a photo.',
            'After lorsque and quand a future action takes the future.',
          ),
          gap(
            'g6',
            'Attends, je ___ chercher ma boussole.',
            'vais',
            ['vais', 'allais', 'vas'],
            'Wait, I am going to fetch my compass.',
            'What you do right away: aller + infinitive.',
          ),
          gap(
            'g7',
            'La semaine prochaine, il ___ du brouillard sur la côte.',
            'y aura',
            ['y aura', 'y a', 'va y avoir'],
            'Next week there will be fog on the coast.',
            'Il y a becomes il y aura in the simple future.',
          ),
          gap(
            'g8',
            'D’ici trois jours, les prévisions ___ meilleures.',
            'seront',
            ['seront', 'étaient', 'seraient'],
            'Within three days the forecast will be better.',
            'D’ici + a time points to the future: être → seront.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', L], 2, 4),
      {
        items: [
          sent(
            's1',
            'As soon as the fog clears, we will leave.',
            ['Dès', 'que', 'le', 'brouillard', 'se', 'lèvera,', 'nous', 'partirons.'],
            { extra: ['lève'] },
          ),
          sent(
            's2',
            'It is going to rain this afternoon.',
            ['Il', 'va', 'pleuvoir', 'cet', 'après-midi.'],
            { extra: ['pleuvra'] },
          ),
          sent('s3', 'We will sleep in a sleeping bag.', [
            'Nous',
            'dormirons',
            'dans',
            'un',
            'sac',
            'de',
            'couchage.',
          ]),
          sent('s4', 'Within two days the storm will be over.', [
            'D’ici',
            'deux',
            'jours,',
            'la',
            'tempête',
            'sera',
            'finie.',
          ]),
          sent(
            's5',
            'When I see the summit, I will call you.',
            ['Quand', 'je', 'verrai', 'le', 'sommet,', 'je', 't’appellerai.'],
            { extra: ['vois'] },
          ),
          sent('s6', 'The path runs along the cliff.', [
            'Le',
            'sentier',
            'longe',
            'la',
            'falaise.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Weather and plans',
        'A forecast, a mountain hut and a plan with a friend.',
        ['communication', 'weather-travel'],
        2,
        6,
      ),
      {
        scenes: [
          scene(
            'prevision',
            'Checking the forecast',
            '📺',
            'You ask a hotel receptionist about tomorrow. Use vous.',
            [
              say(
                'La réceptionniste',
                'On annonce des averses en fin de journée.',
                'Showers are forecast for the end of the day.',
              ),
              you(
                'Et le matin, il fera beau ?',
                [
                  'Et le matin, il fait beau demain ?',
                  'Fait is the present; here you ask about tomorrow morning, so use the future: il fera.',
                ],
                [
                  'Et le matin, il ferai beau ?',
                  'The ending of the simple future for il is -a: il fera.',
                ],
              ),
              say(
                'La réceptionniste',
                'Oui, il y aura même une belle éclaircie.',
                'Yes, there will even be a nice sunny spell.',
              ),
              you(
                'Parfait, nous partirons dès que le soleil sera là.',
                [
                  'Parfait, nous partons dès que le soleil est là.',
                  'After dès que a future action needs the future: nous partirons, sera.',
                ],
                [
                  'Parfait, nous allons partir dès que le soleil ira.',
                  'Aller + infinitive is fine once, but not after dès que; use sera.',
                ],
              ),
            ],
          ),
          scene('refuge', 'At the mountain hut', '🏔️', 'You talk to the hut keeper. Use vous.', [
            say(
              'Le gardien',
              'Le sentier longe la falaise, faites attention.',
              'The path runs along the cliff, be careful.',
            ),
            you(
              'Merci. Combien de temps faudra-t-il jusqu’au col ?',
              [
                'Merci. Combien de temps faut-il jusqu’au col demain ?',
                'For tomorrow’s walk the future is better here: faudra-t-il.',
              ],
              [
                'Merci. Combien de temps faudrons-nous ?',
                'Falloir only has an il form: il faudra.',
              ],
            ),
            say(
              'Le gardien',
              'Deux heures environ. D’ici midi, vous serez en haut.',
              'About two hours. By midday you will be at the top.',
            ),
            you(
              'Super, nous dormirons au bivouac ce soir.',
              [
                'Super, nous dormons au bivouac ce soir.',
                'You decide for the evening: nous dormirons (simple future) fits the plan.',
              ],
              ['Super, nous dormirez au bivouac ce soir.', 'Nous takes -ons: dormirons.'],
            ),
          ]),
          scene('ami', 'A plan with a friend', '🥾', 'You and Inès plan a hike. You say tu.', [
            say(
              'Inès',
              'Regarde ces nuages, il va y avoir de l’orage.',
              'Look at those clouds, there is going to be a storm.',
            ),
            you(
              'Alors on remettra la randonnée à demain.',
              ['Alors on remet la randonnée à hier.', 'À hier is the past. Say à demain.'],
              [
                'Alors on remettera la randonnée à demain.',
                'Remettre loses its e in the future: on remettra.',
              ],
            ),
            say(
              'Inès',
              'D’accord. Je te préviendrai dès que la météo changera.',
              'OK. I will let you know as soon as the forecast changes.',
            ),
            you(
              'Merci, tu seras gentille.',
              [
                'Merci, tu étais gentille.',
                'You thank her for something to come, so: tu seras gentille.',
              ],
              ['Merci, tu sera gentille.', 'Tu takes -as: tu seras.'],
            ),
          ]),
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      meta('Future blitz', 'True or false? Beat the clock!', ['grammar', L], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Il va pleuvoir” is used for something that is about to happen.', true),
          tf('b2', 'After “dès que” French uses the simple future for a future action.', true),
          tf('b3', '“Quand je serai là” uses the future after quand.', true),
          tf('b4', 'A timetable can use the present: “Le train part à huit heures”.', true),
          tf(
            'b5',
            '“Dès que j’arrive, je t’appelle” is wrong in French.',
            false,
            'It is possible in speech, but the careful form is dès que j’arriverai.',
          ),
          tf('b6', 'Il y a becomes “il y aura” in the simple future.', true),
          tf('b7', '“D’ici deux jours” points to the future.', true),
          tf(
            'b8',
            '“Le brouillard” means thunderstorm.',
            false,
            'Le brouillard is fog; a thunderstorm is un orage.',
          ),
          tf('b9', '“Une éclaircie” is a sunny spell.', true),
          tf('b10', '“Prochainement” means “in the near future”.', true),
          tf('b11', '“La falaise” is a cliff.', true),
          tf('b12', '“Une rafale” is a kind of snow.', false, 'Une rafale is a gust of wind.'),
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
          q('c1', 'What is “le verglas”?', 'black ice', ['fog', 'hail', 'a gust of wind']),
          q(
            'c2',
            'Complete: “Dès qu’il ___ nuit, nous allumerons le feu.”',
            'fera',
            ['faisait', 'ferait', 'faisons'],
            'Dès que + future action: simple future.',
          ),
          q(
            'c3',
            'Which sentence announces something about to happen?',
            'Attention, il va neiger !',
            ['Il neigera dans dix ans.', 'Il neigeait hier.', 'Il a neigé.'],
          ),
          q('c4', 'What is “un sentier”?', 'a path', ['a cliff', 'a valley', 'a lake']),
          q(
            'c5',
            'Complete: “Lorsque tu ___ au col, envoie-moi un message.”',
            'seras',
            ['étais', 'serais', 'sois'],
            'Lorsque + future action: simple future.',
          ),
          q('c6', '“La canicule” is …', 'a heatwave', ['a storm', 'a cold spell', 'a rainbow']),
          q('c7', 'Which time word points to the future?', 'après-demain', [
            'hier',
            'avant-hier',
            'autrefois',
          ]),
          q(
            'c8',
            'Complete: “Il y ___ du vent cet après-midi.” (it is going to be windy)',
            'aura',
            ['a', 'avait', 'aurait'],
            'Il y aura: simple future of il y a.',
          ),
        ],
      },
    ),
  ],
};
