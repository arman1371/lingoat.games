import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  dictation,
  gap,
  manualTable,
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

const U = 'fr-b1-2-culture';
const OPP = 'fr-b12-opposition' as const;
const PS = 'fr-b12-passe-simple' as const;
const TOPIC = 'art-creativity' as const;

const arts = vocabList(U, 'Books and arts', [
  ['le roman', 'novel', '📕'],
  ['le recueil', 'collection (of poems)', '📚'],
  ['la nouvelle', 'short story', '📰'],
  ['le poète', 'poet', '✒️'],
  ['le dramaturge', 'playwright', '🖋️'],
  ['le chef-d’œuvre', 'masterpiece', '🌟'],
  ['le tableau', 'painting', '🖼️'],
  ['la sculpture', 'sculpture', '🗿'],
  ['le vernissage', 'private view', '🥂'],
  ['la galerie', 'gallery', '🎨'],
  ['la troupe', 'theatre company', '🎭'],
  ['la scène', 'stage', '🎤'],
  ['le talent', 'talent', '✨'],
  ['l’inspiration', 'inspiration', '💡'],
]);

const verbs = vocabList(U, 'Verbs of creating', [
  ['cultiver', 'to cultivate, to develop', '🌱'],
  ['créer', 'to create', '🛠️'],
  ['inspirer', 'to inspire', '💫'],
  ['exposer', 'to exhibit', '🏛️'],
  ['rédiger', 'to write up', '📖'],
  ['interpréter', 'to perform, to interpret', '🎻'],
  ['dévoiler', 'to unveil', '🎁'],
  ['ovationner', 'to give an ovation', '👏'],
  ['représenter', 'to represent', '🧩'],
  ['se produire', 'to perform (on stage)', '🎸'],
]);

const opposition = vocabList(U, 'Contrast and concession', [
  ['alors que', 'whereas, while', '⚖️'],
  ['tandis que', 'whereas', '↔️'],
  ['au contraire', 'on the contrary', '🔄'],
  ['bien que', 'although', '🤔'],
  ['même si', 'even if', '🌧️'],
  ['malgré', 'despite', '🚧'],
  ['en dépit de', 'in spite of', '🛑'],
  ['néanmoins', 'nevertheless', '➡️'],
  ['toutefois', 'however', '↪️'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['Il est né en 1802 et mourut en 1885.', 'He was born in 1802 and died in 1885.', '📜'],
  [
    'Bien qu’elle soit timide, elle chante sur scène.',
    'Although she is shy, she sings on stage.',
    '🎤',
  ],
  [
    'Il aime la peinture, alors qu’elle préfère la sculpture.',
    'He likes painting, whereas she prefers sculpture.',
    '🎨',
  ],
  ['Malgré la pluie, le festival a eu lieu.', 'Despite the rain, the festival took place.', '🌧️'],
]);

const vocab = [...arts, ...verbs, ...opposition, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const KIND: [string, 'contrast' | 'concession', string][] = [
  [
    'Paul lit des romans, alors que Léa préfère la poésie.',
    'contrast',
    'Paul reads novels, whereas Léa prefers poetry.',
  ],
  [
    'Je préfère le cinéma, tandis que mon frère aime le théâtre.',
    'contrast',
    'I prefer cinema, whereas my brother likes theatre.',
  ],
  [
    'Il n’est pas timide ; au contraire, il adore parler.',
    'contrast',
    'He is not shy; on the contrary, he loves talking.',
  ],
  [
    'Bien que le livre soit long, je l’ai adoré.',
    'concession',
    'Although the book is long, I loved it.',
  ],
  [
    'Même s’il pleut, nous irons au festival.',
    'concession',
    'Even if it rains, we will go to the festival.',
  ],
  [
    'Malgré la pluie, le concert a eu lieu.',
    'concession',
    'Despite the rain, the concert took place.',
  ],
  [
    'Elle a réussi en dépit des critiques.',
    'concession',
    'She succeeded in spite of the criticism.',
  ],
  [
    'Il est jeune ; néanmoins, il joue très bien.',
    'concession',
    'He is young; nevertheless, he plays very well.',
  ],
];

const TENSE: [string, 'ps' | 'pc', string][] = [
  ['Il ouvrit la porte et entra.', 'ps', 'He opened the door and went in.'],
  ['Elle naquit en 1850.', 'ps', 'She was born in 1850.'],
  ['Ils furent très surpris.', 'ps', 'They were very surprised.'],
  ['Nous allâmes à Paris.', 'ps', 'We went to Paris.'],
  ['Il a ouvert la porte et il est entré.', 'pc', 'He opened the door and went in.'],
  ['Elle est née en 1850.', 'pc', 'She was born in 1850.'],
  ['Ils ont été très surpris.', 'pc', 'They were very surprised.'],
  ['Nous sommes allés à Paris.', 'pc', 'We went to Paris.'],
];

export const culture: UnitContent = {
  unit: unitFr({
    id: U,
    order: 12,
    title: 'Cultiver les talents',
    subtitle:
      'Talk about books, art and talent, express contrast and concession and recognise the passé simple',
    emoji: '🎨',
    goals: [
      'Talk about books, painting, theatre and talent',
      'Express opposition and concession (alors que, bien que, malgré)',
      'Recognise the passé simple in a text',
    ],
    grammar: [
      'alors que, tandis que, au contraire',
      'bien que + subjonctif, même si, malgré',
      'Passé simple (reconnaissance)',
    ],
    vocabFields: ['Books and arts', 'Verbs of creating', 'Contrast and concession', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-arts',
      'flashcards',
      meta('Books and arts', 'Words for literature and art.', ['vocabulary', TOPIC], 1, 4),
      flashcards(arts),
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
          'le roman',
          'le poète',
          'le tableau',
          'la sculpture',
          'le vernissage',
          'la troupe',
          'la scène',
          'le talent',
        ),
        arts,
        4,
      ),
    ),

    activity(
      U,
      'memory-verbs',
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
          'cultiver',
          'créer',
          'inspirer',
          'exposer',
          'rédiger',
          'interpréter',
          'dévoiler',
          'ovationner',
        ),
      ),
    ),

    activity(
      U,
      'listen-arts',
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
          'le recueil',
          'la nouvelle',
          'le dramaturge',
          'le chef-d’œuvre',
          'la galerie',
          'l’inspiration',
          'représenter',
          'se produire',
        ),
        vocab.slice(0, 34),
      ),
    ),

    activity(
      U,
      'flash-links',
      'flashcards',
      meta('Contrast and concession', 'Words to oppose ideas.', ['vocabulary', OPP], 2, 4),
      flashcards([...opposition, ...verbs.slice(0, 3)]),
    ),

    activity(
      U,
      'spell-arts',
      'spell',
      meta(
        'Spell the arts',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', TOPIC],
        2,
        4,
      ),
      {
        items: [
          sp('sp-roman', 'unscramble', 'roman', mean('le roman'), '📕', 'le roman'),
          sp('sp-poete', 'unscramble', 'poète', mean('le poète'), '✒️', 'le poète'),
          sp('sp-tableau', 'type', 'tableau', mean('le tableau'), '🖼️', 'le tableau'),
          sp('sp-sculpture', 'type', 'sculpture', mean('la sculpture'), '🗿', 'la sculpture'),
          dictation('sp-malgre', 'malgré', 'despite', 'malgré'),
          dictation('sp-neanmoins', 'néanmoins', 'nevertheless', 'néanmoins'),
        ],
      },
    ),

    activity(
      U,
      'sort-opposition',
      'sortit',
      meta(
        'Contrast or concession?',
        'Does the sentence contrast two things or concede a point?',
        ['grammar', OPP],
        3,
        3,
      ),
      {
        instruction: 'Contrast two things, or accept a point despite an obstacle?',
        buckets: [
          { id: 'contrast', label: 'Contrast', emoji: '↔️' },
          { id: 'concession', label: 'Concession', emoji: '🚧' },
        ],
        items: sortCards('k', KIND),
      },
    ),

    activity(
      U,
      'sort-tenses',
      'sortit',
      meta(
        'Written or spoken?',
        'Passé simple in stories, passé composé in speech.',
        ['grammar', PS],
        3,
        3,
      ),
      {
        instruction: 'Which tense does the sentence use?',
        buckets: [
          { id: 'ps', label: 'Passé simple (literary)', emoji: '📖' },
          { id: 'pc', label: 'Passé composé (spoken)', emoji: '🗣️' },
        ],
        items: sortCards('t', TENSE),
      },
    ),

    activity(
      U,
      'conj-passe-simple',
      'conjugation',
      meta(
        'Recognise the passé simple',
        'The literary past tense of common verbs.',
        ['grammar', PS],
        3,
        4,
      ),
      {
        tables: [
          manualTable(
            'parler-1',
            'parler (passé simple)',
            'to speak',
            ['parlai', 'parlas', 'parla', 'parlâmes', 'parlâtes', 'parlèrent'],
            ['il/elle/on', 'ils/elles', 'nous'],
          ),
          manualTable(
            'finir-1',
            'finir (passé simple)',
            'to finish',
            ['finis', 'finis', 'finit', 'finîmes', 'finîtes', 'finirent'],
            ['il/elle/on', 'ils/elles', 'je'],
          ),
          manualTable(
            'etre-1',
            'être (passé simple)',
            'to be',
            ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
            ['il/elle/on', 'ils/elles', 'tu'],
          ),
          manualTable(
            'avoir-1',
            'avoir (passé simple)',
            'to have',
            ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
            ['il/elle/on', 'ils/elles', 'vous'],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-opposition',
      'gapfill',
      meta(
        'Which connector?',
        'Choose the word that opposes the two ideas.',
        ['grammar', OPP],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Léa aime la peinture, ___ Paul préfère la musique.',
            'alors que',
            ['alors que', 'malgré', 'bien que'],
            'Léa likes painting, whereas Paul prefers music.',
            'Alors que contrasts two things.',
          ),
          gap(
            'g2',
            '___ le roman soit long, je l’ai adoré.',
            'Bien que',
            ['Bien que', 'Alors que', 'Malgré'],
            'Although the novel is long, I loved it.',
            'Bien que + subjunctive: soit.',
          ),
          gap(
            'g3',
            '___ la pluie, le concert a eu lieu.',
            'Malgré',
            ['Malgré', 'Bien que', 'Même si'],
            'Despite the rain, the concert took place.',
            'Malgré + noun.',
          ),
          gap(
            'g4',
            '___ il pleut, nous irons au festival.',
            'Même si',
            ['Même si', 'Malgré', 'Bien que'],
            'Even if it rains, we will go to the festival.',
            'Même si + present (indicative).',
          ),
          gap(
            'g5',
            'Il n’est pas timide ; ___, il adore la scène.',
            'au contraire',
            ['au contraire', 'bien que', 'malgré'],
            'He is not shy; on the contrary, he loves the stage.',
            'Au contraire corrects an idea.',
          ),
          gap(
            'g6',
            'Elle a réussi ___ les critiques.',
            'en dépit de',
            ['en dépit de', 'bien que', 'alors que'],
            'She succeeded in spite of the criticism.',
            'En dépit de + noun.',
          ),
          gap(
            'g7',
            'Bien qu’elle ___ jeune, elle expose déjà.',
            'soit',
            ['soit', 'est', 'sera'],
            'Although she is young, she already exhibits.',
            'Bien que takes the subjunctive: soit.',
          ),
          gap(
            'g8',
            'Il est jeune ; ___, il joue très bien.',
            'néanmoins',
            ['néanmoins', 'alors que', 'malgré'],
            'He is young; nevertheless, he plays very well.',
            'Néanmoins introduces a concession.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', OPP], 3, 4),
      {
        items: [
          sent(
            's1',
            'Despite the rain, the festival took place.',
            ['Malgré', 'la', 'pluie,', 'le', 'festival', 'a', 'eu', 'lieu.'],
            { extra: ['bien'] },
          ),
          sent('s2', 'He likes painting, whereas she prefers sculpture.', [
            'Il',
            'aime',
            'la',
            'peinture,',
            'alors',
            'qu’elle',
            'préfère',
            'la',
            'sculpture.',
          ]),
          sent(
            's3',
            'Although she is shy, she sings.',
            ['Bien', 'qu’elle', 'soit', 'timide,', 'elle', 'chante.'],
            { extra: ['est'] },
          ),
          sent('s4', 'Even if it is late, I will go.', ['Même', 's’il', 'est', 'tard,', 'j’irai.']),
          sent('s5', 'The painter unveiled his masterpiece.', [
            'Le',
            'peintre',
            'a',
            'dévoilé',
            'son',
            'chef-d’œuvre.',
          ]),
          sent('s6', 'He opened the door and went in.', [
            'Il',
            'ouvrit',
            'la',
            'porte',
            'et',
            'entra.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta('Art talk', 'Talk about an exhibition and a novel.', ['communication', TOPIC], 3, 6),
      {
        scenes: [
          scene(
            'expo',
            'At the exhibition',
            '🖼️',
            'You visit an exhibition with your friend Amélie. You say tu.',
            [
              say('Amélie', 'Tu aimes ce tableau ?', 'Do you like this painting?'),
              you(
                'Bien qu’il soit étrange, je le trouve magnifique.',
                [
                  'Bien qu’il est étrange, je le trouve magnifique.',
                  'Bien que takes the subjunctive: soit.',
                ],
                [
                  'Alors qu’il soit étrange, je le trouve magnifique.',
                  'Alors que contrasts; here a concession needs bien que.',
                ],
              ),
              say('Amélie', 'Moi, je préfère les sculptures.', 'I prefer the sculptures.'),
              you(
                'Moi, j’aime la peinture, alors que toi, tu préfères la sculpture.',
                [
                  'Moi, j’aime la peinture, malgré toi, tu préfères la sculpture.',
                  'Malgré is followed by a noun, not a clause.',
                ],
                [
                  'Moi, j’aime la peinture, bien que toi, tu préfères la sculpture.',
                  'Bien que expresses concession; here we only contrast: alors que.',
                ],
              ),
            ],
          ),
          scene('roman', 'A novel', '📕', 'Your colleague Hugo recommends a book. Use vous.', [
            say(
              'Hugo',
              'Ce roman est long, mais il est génial.',
              'This novel is long, but it is great.',
            ),
            you(
              'Malgré sa longueur, je le lirai.',
              ['Malgré il est long, je le lirai.', 'Malgré needs a noun: malgré sa longueur.'],
              ['Même si sa longueur, je le lirai.', 'Même si needs a verb: même s’il est long.'],
            ),
            say('Hugo', 'Victor Hugo l’écrivit en 1862.', 'Victor Hugo wrote it in 1862.'),
            you(
              'Ah oui, il l’écrivit avant de partir en exil.',
              [
                'Ah oui, il l’écrive avant de partir en exil.',
                'That is a subjunctive; the literary past is écrivit.',
              ],
              [
                'Ah oui, il l’écrira avant de partir en exil.',
                'The action is past; the future écrira does not fit.',
              ],
            ),
          ]),
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      meta('Culture blitz', 'True or false? Beat the clock!', ['grammar', OPP], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Bien que” is followed by the subjunctive.', true),
          tf('b2', '“Même si” is followed by the present or imparfait indicative.', true),
          tf('b3', '“Malgré” is followed by a noun.', true),
          tf('b4', '“Alors que” can contrast two facts.', true),
          tf('b5', '“Au contraire” means “also”.', false, 'It means “on the contrary”.'),
          tf('b6', 'The passé simple is mostly used in written stories.', true),
          tf('b7', '“Il fut” is the passé simple of être.', true),
          tf('b8', '“Elle naquit” means “she was born”.', true),
          tf('b9', '“Le recueil” is a collection of poems.', true),
          tf(
            'b10',
            '“La scène” means the painting.',
            false,
            'La scène is the stage; le tableau is the painting.',
          ),
          tf('b11', '“Exposer” means to exhibit.', true),
          tf('b12', '“Néanmoins” introduces a concession.', true),
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
          q('c1', 'Complete: “___ la fatigue, il a joué.”', 'Malgré', [
            'Bien que',
            'Alors que',
            'Même si',
          ]),
          q('c2', 'Complete: “Bien qu’il ___ tard, nous restons.”', 'soit', [
            'est',
            'sera',
            'était',
          ]),
          q('c3', 'Which form is the passé simple?', 'il parla', [
            'il parle',
            'il a parlé',
            'il parlera',
          ]),
          q('c4', 'What does “le chef-d’œuvre” mean?', 'masterpiece', [
            'workshop',
            'collection',
            'private view',
          ]),
          q('c5', '“Ils furent” is the passé simple of …', 'être', ['avoir', 'faire', 'aller']),
          q('c6', 'Which connector contrasts two things?', 'alors que', [
            'malgré',
            'bien que',
            'même si',
          ]),
          q('c7', 'What does “dévoiler” mean?', 'to unveil', [
            'to applaud',
            'to publish',
            'to inspire',
          ]),
          q('c8', '“Elle eut” is the passé simple of …', 'avoir', ['être', 'voir', 'savoir']),
        ],
      },
    ),
  ],
};
