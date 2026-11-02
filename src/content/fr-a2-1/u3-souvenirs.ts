import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  gaps,
  imparfaitTable,
  meta,
  quizRows,
  say,
  sentRows,
  sortCards,
  spellRows,
  tfRows,
  unitFr21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-souvenirs';

const landscapes = vocabList(U, 'Landscapes', [
  ['la campagne', 'countryside', '🌾'],
  ['la forêt', 'forest', '🌲'],
  ['le lac', 'lake', '🦢'],
  ['la rivière', 'river', '🛶'],
  ['la vallée', 'valley', '🌄'],
  ['la colline', 'hill', '🌱'],
  ['le village', 'village', '🏘️'],
  ['la ferme', 'farm', '🚜'],
  ['le champ', 'field', '🌻'],
  ['la falaise', 'cliff', '🧗'],
  ['le sentier', 'footpath', '🥾'],
  ['la prairie', 'meadow', '🐄'],
]);

const weather = vocabList(U, 'Weather and sky', [
  ['le brouillard', 'fog', '🌫️'],
  ['l’orage', 'thunderstorm', '⛈️'],
  ['l’éclair', 'lightning', '⚡'],
  ['le nuage', 'cloud', '☁️'],
  ['la tempête', 'storm', '🌪️'],
  ['l’arc-en-ciel', 'rainbow', '🌈'],
  ['la chaleur', 'heat', '🥵'],
  ['le verglas', 'black ice', '🧊'],
  ['la grêle', 'hail', '🌨️'],
  ['la brume', 'mist', '🌁'],
]);

const memories = vocabList(U, 'Childhood memories', [
  ['le souvenir', 'memory', '🧠'],
  ['la nostalgie', 'nostalgia', '🕰️'],
  ['la colonie de vacances', 'holiday camp', '⛺'],
  ['le jouet', 'toy', '🧸'],
  ['la balançoire', 'swing', '🎠'],
  ['la cabane', 'hut / treehouse', '🛖'],
  ['le goûter', 'afternoon snack', '🍪'],
  ['le feu de camp', 'campfire', '🔥'],
  ['l’album', 'photo album', '📖'],
  ['la bande de copains', 'group of friends', '🧑‍🤝‍🧑'],
]);

const verbs = vocabList(U, 'Remembering', [
  ['se souvenir de', 'to remember', '💭'],
  ['se rappeler', 'to recall', '🔁'],
  ['patauger', 'to splash about', '💦'],
  ['raconter', 'to tell (a story)', '🗣️'],
  ['rêver', 'to dream', '💤'],
  ['grimper', 'to climb', '🌳'],
  ['se baigner', 'to go for a swim', '🏊'],
  ['regretter', 'to miss / to regret', '🥺'],
]);

const phrases = vocabList(U, 'Telling a memory', [
  ['Quand j’étais petit, …', 'When I was little, …', '🧒'],
  ['À l’époque, …', 'Back then, …', '⏳'],
  ['Autrefois, …', 'In the past, …', '📜'],
  ['Je m’en souviens très bien.', 'I remember it very well.', '💭'],
  ['C’était comment ?', 'What was it like?', '❓'],
  ['C’était magnifique !', 'It was wonderful!', '😍'],
  ['Quel beau souvenir !', 'What a lovely memory!', '🥰'],
  ['Ça me manque.', 'I miss it.', '💔'],
  ['Il faisait beau.', 'The weather was nice.', '☀️'],
  ['Il pleuvait.', 'It was raining.', '🌧️'],
  ['Il y avait du brouillard.', 'There was fog.', '🌫️'],
]);

const vocab = [...landscapes, ...weather, ...memories, ...verbs, ...phrases];

const IMP = 'fr-a21-imparfait' as const;
const USE = 'fr-a21-imparfait-use' as const;
const EN = 'fr-a21-en' as const;

export const souvenirs: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 3,
    title: 'Je me souviens',
    subtitle: 'Tell a childhood memory and describe the landscape and the weather',
    emoji: '🏞️',
    goals: [
      'Say what you used to do and what things were like',
      'Describe a landscape and the weather in the past',
      'Replace a noun with en',
    ],
    grammar: ['The imparfait', 'Habits and descriptions', 'The pronoun en'],
    vocabFields: ['Landscapes', 'Weather and sky', 'Childhood memories', 'Telling a memory'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-landscapes',
      'flashcards',
      meta(
        'Landscapes',
        'Forests, lakes and fields: the places of a childhood memory.',
        ['vocabulary', 'memories'],
        1,
        3,
      ),
      flashcards(landscapes),
    ),

    activity(
      U,
      'flash-weather',
      'flashcards',
      meta(
        'Weather and sky',
        'Fog, thunderstorms and rainbows.',
        ['vocabulary', 'memories', 'weather'],
        1,
        3,
      ),
      flashcards(weather),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the landscape or the weather from the picture.',
        ['vocabulary', 'memories'],
        1,
        3,
      ),
      quizEmoji(
        [...landscapes.slice(0, 7), ...weather.slice(0, 3), ...weather.slice(5, 7)],
        [...landscapes, ...weather],
      ),
    ),

    activity(
      U,
      'listen-memories',
      'listen',
      meta(
        'Listen: memories',
        'Listen to the word and pick its meaning.',
        ['listening', 'memories'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'la vallée', 'la falaise', 'le brouillard', 'l’orage'),
          ...byDe(vocab, 'le souvenir', 'la balançoire', 'grimper', 'rêver'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-nature',
      'memory',
      meta(
        'Nature memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'memories'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'la colline', 'la prairie', 'le sentier', 'la ferme'),
        ...byDe(vocab, 'le nuage', 'la grêle', 'la brume', 'la chaleur'),
      ]),
    ),

    activity(
      U,
      'flash-memories',
      'flashcards',
      meta(
        'Telling a memory',
        'Words and phrases for talking about the past.',
        ['vocabulary', 'communication', 'memories'],
        1,
        3,
      ),
      flashcards([...memories, ...verbs, ...phrases]),
    ),

    activity(
      U,
      'conj-imparfait',
      'conjugation',
      meta(
        'The imparfait',
        'Nous form minus -ons, plus the imparfait endings.',
        ['grammar', IMP],
        2,
        4,
      ),
      {
        tables: [
          imparfaitTable('être', 'to be', ['je', 'il/elle/on', 'nous']),
          imparfaitTable('avoir', 'to have', ['tu', 'nous', 'ils/elles']),
          imparfaitTable('aller', 'to go', ['je', 'vous', 'ils/elles']),
          imparfaitTable('faire', 'to do / to make', ['tu', 'il/elle/on', 'nous']),
          imparfaitTable('habiter', 'to live', ['nous', 'vous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-imparfait',
      'gapfill',
      meta(
        'Complete the imparfait',
        'Choose the right ending for the person.',
        ['grammar', IMP, 'memories'],
        2,
        4,
      ),
      {
        items: gaps('f', IMP, [
          [
            'Quand j’___ petit, j’habitais à la campagne.',
            'étais',
            ['étais', 'était', 'étions', 'étaient'],
            'When I was little, I lived in the countryside.',
            'Être in the imparfait is irregular (ét-): j’étais.',
          ],
          [
            'Nous ___ chez nos grands-parents chaque été.',
            'allions',
            ['allions', 'allez', 'allaient', 'allais'],
            'We went to our grandparents every summer.',
            'Nous allons → all- + ions.',
          ],
          [
            'Tu ___ toujours un vélo rouge.',
            'avais',
            ['avais', 'avait', 'avions', 'avez'],
            'You always had a red bike.',
            'Tu takes -ais: avais.',
          ],
          [
            'Ils ___ au football dans le champ.',
            'jouaient',
            ['jouaient', 'jouait', 'jouions', 'jouent'],
            'They used to play football in the field.',
            'Ils/elles take -aient: jouaient.',
          ],
          [
            'Il ___ très froid en hiver.',
            'faisait',
            ['faisait', 'faisais', 'faisions', 'faisaient'],
            'It was very cold in winter.',
            'Nous faisons → fais- + ait: il faisait.',
          ],
          [
            'Vous ___ souvent au bord du lac ?',
            'étiez',
            ['étiez', 'étais', 'étions', 'êtes'],
            'Were you often at the edge of the lake?',
            'Vous takes -iez: étiez.',
          ],
          [
            'Je ___ mes devoirs dans le jardin.',
            'finissais',
            ['finissais', 'finissait', 'finissions', 'finis'],
            'I used to finish my homework in the garden.',
            'Nous finissons → finiss- + ais.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sort-usage',
      'sortit',
      meta(
        'Habit or description?',
        'Sort the sentences: a repeated habit or a description of the scene?',
        ['grammar', USE, 'memories'],
        2,
        3,
      ),
      {
        instruction: 'Does the imparfait sentence tell a habit or describe the scene?',
        buckets: [
          { id: 'habit', label: 'A habit', emoji: '🔁' },
          { id: 'description', label: 'A description', emoji: '🖼️' },
        ],
        items: sortCards('s', [
          ['Chaque été, nous allions à la mer.', 'habit', 'Every summer we went to the sea.'],
          [
            'Tous les dimanches, ma grand-mère faisait un gâteau.',
            'habit',
            'Every Sunday my grandmother made a cake.',
          ],
          ['Autrefois, on jouait dehors.', 'habit', 'In the past, we played outside.'],
          ['Je me baignais tous les matins.', 'habit', 'I went for a swim every morning.'],
          [
            'Le soir, mon père racontait une histoire.',
            'habit',
            'In the evening my father told a story.',
          ],
          ['Il faisait très chaud.', 'description', 'It was very hot.'],
          ['La maison était grande et vieille.', 'description', 'The house was big and old.'],
          ['Il y avait un grand jardin.', 'description', 'There was a big garden.'],
          ['Le ciel était gris.', 'description', 'The sky was grey.'],
          ['Ma sœur avait les cheveux longs.', 'description', 'My sister had long hair.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-use',
      'gapfill',
      meta(
        'Then and now',
        'Choose the tense: today in the present, back then in the imparfait.',
        ['grammar', USE, 'memories'],
        3,
        4,
      ),
      {
        items: gaps('u', USE, [
          [
            'Aujourd’hui j’habite à Paris, mais autrefois j’___ à la campagne.',
            'habitais',
            ['habitais', 'habite', 'habiterai', 'ai habité'],
            'Today I live in Paris, but in the past I lived in the countryside.',
            'Autrefois points to the past, and a long-lasting state takes the imparfait.',
          ],
          [
            'Maintenant il y a un supermarché ; avant, il y ___ une ferme.',
            'avait',
            ['avait', 'a', 'aura', 'ont'],
            'Now there is a supermarket; before, there was a farm.',
            'Il y a → il y avait in the imparfait.',
          ],
          [
            'À l’époque, les enfants ___ sans écran.',
            'jouaient',
            ['jouaient', 'jouent', 'joueront', 'ont joué'],
            'Back then, children played without screens.',
            'À l’époque introduces a habit in the past.',
          ],
          [
            'Je suis fatigué maintenant ; petit, je ___ beaucoup.',
            'dormais',
            ['dormais', 'dors', 'dormirai', 'ai dormi'],
            'I am tired now; as a child, I slept a lot.',
            'Nous dormons → dorm- + ais.',
          ],
          [
            'Tous les étés, ma famille ___ en Bretagne.',
            'partait',
            ['partait', 'part', 'partira', 'est parti'],
            'Every summer my family left for Brittany.',
            'Tous les étés marks a repeated action: imparfait.',
          ],
          [
            'Aujourd’hui je mange vite ; avant, nous ___ ensemble.',
            'mangions',
            ['mangions', 'mangeons', 'mangerons', 'avons mangé'],
            'Today I eat fast; before, we ate together.',
            'Nous mangeons → mang- + ions (the e is dropped before i).',
          ],
          [
            'Quand il ___, nous restions à la maison.',
            'pleuvait',
            ['pleuvait', 'pleut', 'pleuvra', 'a plu'],
            'When it rained, we stayed at home.',
            'A repeated situation in the past: pleuvait.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-en',
      'gapfill',
      meta(
        'Replace it with en',
        'En stands for de + noun, for a quantity or for a place you come from.',
        ['grammar', EN],
        3,
        4,
      ),
      {
        items: gaps('e', EN, [
          [
            '— Tu veux du pain ? — Oui, j’___ veux.',
            'en',
            ['en', 'y', 'le', 'lui'],
            'Do you want some bread? Yes, I want some.',
            'En replaces du pain (partitive).',
          ],
          [
            '— Tu as des frères ? — J’en ai ___.',
            'deux',
            ['deux', 'des deux', 'de deux', 'lesquels'],
            'Do you have brothers? I have two.',
            'The number stays at the end, without article.',
          ],
          [
            '— Il y a de la neige ? — Non, il n’y en a ___.',
            'pas',
            ['pas', 'que', 'ne', 'si'],
            'Is there any snow? No, there is none.',
            'Ne … pas goes around the group n’y en a.',
          ],
          [
            '— Vous avez des souvenirs de cette ferme ? — Oui, nous ___ avons beaucoup.',
            'en',
            ['en', 'y', 'les', 'leur'],
            'Do you have memories of this farm? Yes, we have a lot.',
            'En replaces des souvenirs; beaucoup stays.',
          ],
          [
            'Il parle souvent de son enfance : il ___ parle avec joie.',
            'en',
            ['en', 'y', 'la', 'lui'],
            'He often talks about his childhood: he talks about it happily.',
            'Parler de + thing → en.',
          ],
          [
            '— Tu as pris des photos ? — Oui, j’___ ai pris beaucoup.',
            'en',
            ['en', 'y', 'les', 'leur'],
            'Did you take photos? Yes, I took a lot.',
            'En goes before the auxiliary in the passé composé.',
          ],
          [
            '— Tu reviens de la campagne ? — Oui, j’___ reviens.',
            'en',
            ['en', 'y', 'la', 'lui'],
            'Are you coming back from the countryside? Yes, I’m coming back from there.',
            'Revenir de + place → en.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of a memory in the right order.',
        ['grammar', 'memories'],
        2,
        4,
      ),
      {
        items: sentRows('s', [
          [
            IMP,
            'When I was little, I lived in the countryside.',
            ['Quand', 'j’étais', 'petit,', 'j’habitais', 'à', 'la', 'campagne.'],
            ['habite'],
          ],
          [
            USE,
            'Every summer we went to the sea.',
            ['Chaque', 'été,', 'nous', 'allions', 'à', 'la', 'mer.'],
            ['allons'],
          ],
          [
            USE,
            'It was raining and we were cold.',
            ['Il', 'pleuvait', 'et', 'on', 'avait', 'froid.'],
            ['a'],
          ],
          [
            IMP,
            'We played in the garden all day.',
            ['Nous', 'jouions', 'dans', 'le', 'jardin', 'toute', 'la', 'journée.'],
            ['jouons'],
          ],
          [EN, 'Do you have brothers? I have two.', ['J’en', 'ai', 'deux.'], ['y']],
          [
            USE,
            'My grandfather told stories.',
            ['Mon', 'grand-père', 'racontait', 'des', 'histoires.'],
            ['raconte'],
          ],
        ]),
      },
    ),

    activity(
      U,
      'spell-nature',
      'spell',
      meta(
        'Spell the nature words',
        'Unscramble and type words for landscapes and memories. Accents are optional here.',
        ['spelling', 'memories'],
        2,
        3,
      ),
      {
        items: spellRows('sp', [
          ['unscramble', 'forêt', 'forest', '🌲', 'la forêt'],
          ['unscramble', 'rivière', 'river', '🛶', 'la rivière'],
          ['type', 'campagne', 'countryside', '🌾', 'la campagne'],
          ['type', 'souvenir', 'memory', '🧠', 'le souvenir'],
          ['type', 'brouillard', 'fog', '🌫️', 'le brouillard'],
        ]),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Remembering',
        'Talk about your childhood, a summer on the farm and an old photo.',
        ['communication', 'memories'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'childhood',
            title: 'Where did you grow up?',
            emoji: '🧒',
            setting: 'Chloé asks about your childhood. You say tu to each other.',
            turns: [
              say(
                'Chloé',
                'Tu habitais où quand tu étais petit ?',
                'Where did you live when you were little?',
              ),
              you(
                'J’habitais à la campagne, près d’un lac.',
                [
                  'J’habite à la campagne, près d’un lac.',
                  'Chloé asks about the past: use the imparfait, j’habitais.',
                ],
                ['J’habitais à la campagne, près un lac.', 'Près de + noun: près d’un lac.'],
              ),
              say(
                'Chloé',
                'Et qu’est-ce que tu faisais le week-end ?',
                'And what did you do at the weekend?',
              ),
              you(
                'Je jouais dans la forêt avec mes copains.',
                [
                  'Je jouerai dans la forêt avec mes copains.',
                  'That is the future. For habits in the past use the imparfait: je jouais.',
                ],
                ['Je jouaient dans la forêt avec mes copains.', 'Je takes -ais: je jouais.'],
              ),
            ],
          },
          {
            id: 'farm',
            title: 'Summers on the farm',
            emoji: '🚜',
            setting: 'Your grandfather remembers the summers on the farm.',
            turns: [
              say(
                'Grand-père',
                'Chaque été, vous veniez à la ferme. Vous vous en souvenez ?',
                'Every summer you came to the farm. Do you remember?',
              ),
              you(
                'Oui, je m’en souviens très bien !',
                [
                  'Oui, je y souviens très bien !',
                  'En replaces de + noun (se souvenir de): je m’en souviens.',
                ],
                ['Oui, je me souviens très bien de !', 'Put en before the verb: je m’en souviens.'],
              ),
              say(
                'Grand-père',
                'Il y avait toujours du soleil, non ?',
                'There was always sun, wasn’t there?',
              ),
              you(
                'Pas toujours ! Il pleuvait souvent.',
                [
                  'Pas toujours ! Il pleut souvent.',
                  'Talking about the past, use the imparfait: il pleuvait.',
                ],
                [
                  'Pas toujours ! Il a pleuvait souvent.',
                  'Do not add avoir: the imparfait is a single word.',
                ],
              ),
            ],
          },
          {
            id: 'album',
            title: 'The photo album',
            emoji: '📖',
            setting: 'Karim looks at an old photo with you.',
            turns: [
              say(
                'Karim',
                'Regarde cette photo ! C’était où ?',
                'Look at this photo! Where was it?',
              ),
              you(
                'C’était à la montagne, il neigeait.',
                ['C’est à la montagne, il neigeait.', 'The memory is in the past: c’était.'],
                [
                  'C’était à la montagne, il neigerait.',
                  'The description of the weather uses the imparfait: il neigeait.',
                ],
              ),
              say('Karim', 'Tu avais quel âge ?', 'How old were you?'),
              you(
                'J’avais huit ans.',
                ['J’ai huit ans.', 'You were eight then, not now: j’avais.'],
                ['Je avais huit ans.', 'Before a vowel je becomes j’: j’avais.'],
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
        'Memories blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'memories', IMP],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: tfRows('b', [
          ['“Quand j’étais petit” introduces a memory.', true],
          ['“Il pleuvait” means “it will rain”.', false, 'It means it was raining.'],
          ['“Nous habitions” is the nous form of the imparfait.', true],
          ['“J’étais” is the je form of être in the imparfait.', true],
          ['“Ils jouait” is correct.', false, 'Ils jouaient, with -aient.'],
          ['“La forêt” is a forest.', true],
          ['“Autrefois” means “tomorrow”.', false, 'It means in the past.'],
          ['“J’en ai deux” can answer “Tu as des frères ?”.', true],
          ['“Je en veux” is correct.', false, 'Je + en becomes j’en: j’en veux.'],
          ['“Le brouillard” is fog.', true],
          ['“Il faisait beau” describes the weather in the past.', true],
          ['“Vous étions” is correct.', false, 'Nous étions, vous étiez.'],
        ]),
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'memories'],
        3,
        4,
      ),
      {
        questions: quizRows('c', [
          [
            'Complete: “Quand j’___ petit, j’aimais la forêt.”',
            'étais',
            ['était', 'étions', 'suis'],
            IMP,
          ],
          [
            'Complete: “Nous ___ à la mer chaque été.”',
            'allions',
            ['allons', 'allaient', 'irons'],
            IMP,
          ],
          [
            'Which sentence describes the weather in the past?',
            'Il faisait très froid.',
            ['Il fait très froid.', 'Il fera très froid.', 'Il a fait très froid.'],
            USE,
          ],
          ['“Autrefois, on ___ dehors.”', 'jouait', ['joue', 'jouera', 'jouaient'], USE],
          [
            '“Tu veux du lait ?” – “Oui, ___ ”',
            'j’en veux.',
            ['j’y veux.', 'je le veux.', 'je lui veux.'],
            EN,
          ],
          [
            '“Il n’y en a pas” means …',
            'there is none',
            ['there is nothing', 'there is nobody', 'there are two'],
            EN,
          ],
          ['“La falaise” is …', 'the cliff', ['the valley', 'the lake', 'the meadow']],
          ['“Ça me manque” means …', 'I miss it', ['I forget it', 'I like it', 'I need it']],
        ]),
      },
    ),
  ],
};
