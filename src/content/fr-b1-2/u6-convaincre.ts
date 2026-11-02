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

const U = 'fr-b1-2-convaincre';
const GER = 'fr-b12-gerondif' as const;
const CON = 'fr-b12-connectors' as const;
const TOPIC = 'opinions-presenting' as const;

const ideas = vocabList(U, 'Arguments and opinions', [
  ['l’argument', 'argument', '🗯️'],
  ['l’opinion', 'opinion', '💭'],
  ['le débat', 'debate', '🎙️'],
  ['la conviction', 'conviction', '🔥'],
  ['la preuve', 'proof, evidence', '🧾'],
  ['le point de vue', 'point of view', '👁️'],
  ['l’objection', 'objection', '✋'],
  ['la thèse', 'thesis', '📘'],
  ['le bilan', 'summary, balance sheet', '📊'],
  ['la conclusion', 'conclusion', '🏁'],
  ['l’orateur', 'speaker', '🧑‍🏫'],
  ['le public', 'audience', '👥'],
]);

const verbs = vocabList(U, 'Verbs of persuasion', [
  ['convaincre', 'to convince', '🤝'],
  ['persuader', 'to persuade', '🎯'],
  ['insister', 'to insist', '☝️'],
  ['prouver', 'to prove', '✅'],
  ['soutenir', 'to support, to maintain', '🏗️'],
  ['défendre', 'to defend', '🛡️'],
  ['contredire', 'to contradict', '🚫'],
  ['admettre', 'to admit', '🙋'],
  ['nuancer', 'to qualify', '🎚️'],
  ['résumer', 'to sum up', '📝'],
  ['conclure', 'to conclude', '🔚'],
  ['approuver', 'to approve', '👍'],
]);

const connectors = vocabList(U, 'Linking words', [
  ['en effet', 'indeed', '✔️'],
  ['d’ailleurs', 'besides, by the way', '➕'],
  ['en revanche', 'on the other hand', '↔️'],
  ['cependant', 'however', '⚖️'],
  ['pourtant', 'yet', '🤨'],
  ['certes', 'admittedly', '🙂'],
  ['de plus', 'moreover', '➕'],
  ['autrement dit', 'in other words', '🔁'],
  ['en somme', 'in short', '🔚'],
  ['par exemple', 'for example', '📌'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['D’abord, je vais présenter mon idée.', 'First, I am going to present my idea.', '1️⃣'],
  ['Je suis d’accord, mais il faut nuancer.', 'I agree, but it needs qualifying.', '🎚️'],
  ['En résumé, nous avons trois solutions.', 'In summary, we have three solutions.', '📝'],
  ['Il parle en marchant.', 'He talks while walking.', '🚶'],
  ['On apprend en pratiquant.', 'We learn by practising.', '🛠️'],
]);

const vocab = [...ideas, ...verbs, ...connectors, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const MEANING: [string, 'time' | 'means' | 'if', string][] = [
  ['Elle chante en cuisinant.', 'time', 'She sings while cooking.'],
  ['Il est tombé en descendant l’escalier.', 'time', 'He fell while coming down the stairs.'],
  [
    'Tu progresseras en t’entraînant chaque jour.',
    'means',
    'You will improve by training every day.',
  ],
  [
    'On convainc ses amis en écoutant leurs arguments.',
    'means',
    'You convince friends by listening to their arguments.',
  ],
  ['En travaillant plus, tu réussiras.', 'if', 'If you work more, you will succeed.'],
  [
    'En partant tôt, vous éviterez les bouchons.',
    'if',
    'If you leave early, you will avoid the traffic jams.',
  ],
  ['Nous avons discuté en buvant un café.', 'time', 'We talked while drinking a coffee.'],
  [
    'On gagne du temps en préparant sa réponse.',
    'means',
    'You save time by preparing your answer.',
  ],
];

export const convaincre: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'Convaincre',
    subtitle: 'Argue, convince and structure what you say with the gerund and linking words',
    emoji: '🗣️',
    goals: [
      'Give an opinion, insist and convince',
      'Say how or when with the gérondif (en parlant)',
      'Structure a talk with linking words (d’abord, en revanche, en somme)',
    ],
    grammar: ['Gérondif (en + -ant)', 'Participe présent', 'Connecteurs logiques'],
    vocabFields: ['Arguments and opinions', 'Verbs of persuasion', 'Linking words', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-ideas',
      'flashcards',
      meta('Arguments and opinions', 'Words for a debate.', ['vocabulary', TOPIC], 1, 4),
      flashcards(ideas),
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
          'l’argument',
          'l’opinion',
          'le débat',
          'la preuve',
          'le point de vue',
          'l’objection',
          'le bilan',
          'le public',
        ),
        ideas,
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
          'convaincre',
          'persuader',
          'insister',
          'prouver',
          'soutenir',
          'contredire',
          'admettre',
          'nuancer',
        ),
      ),
    ),

    activity(
      U,
      'listen-ideas',
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
          'la conviction',
          'la thèse',
          'l’orateur',
          'résumer',
          'conclure',
          'approuver',
          'en effet',
          'pourtant',
        ),
        vocab.slice(0, 34),
      ),
    ),

    activity(
      U,
      'flash-links',
      'flashcards',
      meta('Linking words', 'Words to structure what you say.', ['vocabulary', CON], 2, 4),
      flashcards([...connectors, ...verbs.slice(0, 4)]),
    ),

    activity(
      U,
      'spell-ideas',
      'spell',
      meta(
        'Spell the arguments',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', TOPIC],
        2,
        4,
      ),
      {
        items: [
          sp('sp-preuve', 'unscramble', 'preuve', mean('la preuve'), '🧾', 'la preuve'),
          sp('sp-debat', 'unscramble', 'débat', mean('le débat'), '🎙️', 'le débat'),
          sp('sp-opinion', 'type', 'opinion', mean('l’opinion'), '💭', 'l’opinion'),
          sp('sp-conclusion', 'type', 'conclusion', mean('la conclusion'), '🏁', 'la conclusion'),
          dictation('sp-cependant', 'cependant', 'however', 'cependant'),
          dictation('sp-revanche', 'revanche', 'revenge, return', 'en revanche'),
        ],
      },
    ),

    activity(
      U,
      'sort-gerund',
      'sortit',
      meta(
        'When, how or if?',
        'What does the gérondif express in each sentence?',
        ['grammar', GER],
        2,
        3,
      ),
      {
        instruction: 'What does “en + -ant” express here?',
        buckets: [
          { id: 'time', label: 'At the same time', emoji: '⏱️' },
          { id: 'means', label: 'By doing (means)', emoji: '🛠️' },
          { id: 'if', label: 'If (condition)', emoji: '🔀' },
        ],
        items: sortCards('m', MEANING),
      },
    ),

    activity(
      U,
      'conj-persuasion',
      'conjugation',
      meta(
        'Verbs of persuasion',
        'The present tense of verbs for arguing.',
        ['grammar', TOPIC],
        2,
        4,
      ),
      {
        tables: [
          presentTable('insister-1', 'insister', 'to insist', ['je', 'tu', 'il/elle/on']),
          presentTable('persuader-1', 'persuader', 'to persuade', ['nous', 'vous', 'ils/elles']),
          manualTable(
            'convaincre-1',
            'convaincre',
            'to convince',
            ['convaincs', 'convaincs', 'convainc', 'convainquons', 'convainquez', 'convainquent'],
            ['je', 'nous', 'ils/elles'],
          ),
          manualTable(
            'conclure-1',
            'conclure',
            'to conclude',
            ['conclus', 'conclus', 'conclut', 'concluons', 'concluez', 'concluent'],
            ['tu', 'il/elle/on', 'vous'],
          ),
          presentTable('resumer-1', 'résumer', 'to sum up', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-gerund',
      'gapfill',
      meta(
        'Form the gérondif',
        'Complete the sentence with en + participe présent.',
        ['grammar', GER],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Elle écoute de la musique ___.',
            'en travaillant',
            ['en travaillant', 'en travaille', 'en travaillé'],
            'She listens to music while working.',
            'Gérondif: en + stem of nous + -ant.',
          ),
          gap(
            'g2',
            'On apprend le français ___ beaucoup.',
            'en pratiquant',
            ['en pratiquant', 'en pratique', 'à pratiquer'],
            'You learn French by practising a lot.',
            'The gérondif tells how: en pratiquant.',
          ),
          gap(
            'g3',
            'Il est tombé ___ du vélo.',
            'en descendant',
            ['en descendant', 'en descendu', 'en descendre'],
            'He fell getting off the bike.',
            'Descendre → nous descendons → en descendant.',
          ),
          gap(
            'g4',
            'Vous gagnerez du temps ___ votre dossier à l’avance.',
            'en préparant',
            ['en préparant', 'en préparez', 'en préparer'],
            'You will save time by preparing your file in advance.',
            'En + -ant, invariable.',
          ),
          gap(
            'g5',
            'Nous convainquons nos amis ___ des exemples concrets.',
            'en donnant',
            ['en donnant', 'en donnons', 'en donné'],
            'We convince our friends by giving concrete examples.',
            'The gérondif never agrees: en donnant.',
          ),
          gap(
            'g6',
            'Ils discutent ___ un café.',
            'en buvant',
            ['en buvant', 'en buvent', 'en bu'],
            'They talk while drinking a coffee.',
            'Boire → nous buvons → en buvant.',
          ),
          gap(
            'g7',
            'Elle a conclu ___ les points essentiels.',
            'en résumant',
            ['en résumant', 'en résume', 'en résumé'],
            'She concluded by summing up the key points.',
            'Résumer → en résumant.',
          ),
          gap(
            'g8',
            'Tu perdras ta voix ___ trop fort.',
            'en criant',
            ['en criant', 'en crié', 'en cries'],
            'You will lose your voice by shouting too much.',
            'Crier → en criant.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-connectors',
      'gapfill',
      meta(
        'Which linking word?',
        'Choose the connector that fits the logic.',
        ['grammar', CON],
        3,
        5,
      ),
      {
        items: [
          gap(
            'c1',
            'Je comprends ton idée ; ___, elle coûte trop cher.',
            'cependant',
            ['cependant', 'd’ailleurs', 'par exemple'],
            'I understand your idea; however, it costs too much.',
            'Cependant introduces an objection.',
          ),
          gap(
            'c2',
            'Le vélo est écologique. ___, il est rapide en ville.',
            'De plus',
            ['De plus', 'Pourtant', 'Autrement dit'],
            'The bike is ecological. Moreover, it is fast in town.',
            'De plus adds a second argument.',
          ),
          gap(
            'c3',
            'Il pleut ; ___, nous irons nous promener.',
            'pourtant',
            ['pourtant', 'd’ailleurs', 'en somme'],
            'It is raining; yet we will go for a walk.',
            'Pourtant expresses a contrast with what is expected.',
          ),
          gap(
            'c4',
            'La ville est bruyante. ___, la campagne est calme.',
            'En revanche',
            ['En revanche', 'De plus', 'D’ailleurs'],
            'The city is noisy. On the other hand, the countryside is quiet.',
            'En revanche contrasts two things.',
          ),
          gap(
            'c5',
            'Beaucoup de métiers ont changé : ___, les comptables.',
            'par exemple',
            ['par exemple', 'pourtant', 'cependant'],
            'Many jobs have changed: for example, accountants.',
            'Par exemple gives an example.',
          ),
          gap(
            'c6',
            '___, l’idée est bonne, mais elle est difficile à réaliser.',
            'Certes',
            ['Certes', 'Pourtant', 'En somme'],
            'Admittedly, the idea is good, but it is hard to carry out.',
            'Certes … mais concedes a point.',
          ),
          gap(
            'c7',
            'Elle n’a rien dit. ___, elle n’était pas d’accord.',
            'Autrement dit',
            ['Autrement dit', 'Par exemple', 'Certes'],
            'She said nothing. In other words, she did not agree.',
            'Autrement dit rephrases.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', GER], 3, 4),
      {
        items: [
          sent('s1', 'We learn by practising.', ['On', 'apprend', 'en', 'pratiquant.'], {
            extra: ['pratique'],
          }),
          sent('s2', 'He talks while walking.', ['Il', 'parle', 'en', 'marchant.'], {
            extra: ['marché'],
          }),
          sent('s3', 'Admittedly, it is expensive, but it is useful.', [
            'Certes,',
            'c’est',
            'cher,',
            'mais',
            'c’est',
            'utile.',
          ]),
          sent('s4', 'In short, we agree.', ['En', 'somme,', 'nous', 'sommes', 'd’accord.']),
          sent('s5', 'She won by insisting.', ['Elle', 'a', 'gagné', 'en', 'insistant.']),
          sent('s6', 'I do not agree, however I understand you.', [
            'Je',
            'ne',
            'suis',
            'pas',
            'd’accord,',
            'cependant',
            'je',
            'te',
            'comprends.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Convince me!',
        'Defend an idea and answer an objection.',
        ['communication', TOPIC],
        3,
        6,
      ),
      {
        scenes: [
          scene(
            'debat',
            'A debate',
            '🎙️',
            'You discuss a bike lane with your colleague Hugo. You say tu.',
            [
              say(
                'Hugo',
                'Je ne suis pas sûr que cette piste cyclable soit utile.',
                'I am not sure this bike lane is useful.',
              ),
              you(
                'Elle est utile : on va plus vite en roulant à vélo.',
                [
                  'Elle est utile : on va plus vite en roule à vélo.',
                  'The gérondif is en + participe présent: en roulant.',
                ],
                [
                  'Elle est utile : on va plus vite en rouler à vélo.',
                  'After en use the -ant form, not the infinitive.',
                ],
              ),
              say('Hugo', 'Peut-être, mais ça coûte cher.', 'Maybe, but it costs a lot.'),
              you(
                'Certes, mais c’est un bon investissement.',
                [
                  'Pourtant, mais c’est un bon investissement.',
                  'Pourtant is not followed by mais; use certes … mais.',
                ],
                [
                  'Par exemple, mais c’est un bon investissement.',
                  'Par exemple introduces an example, not a concession.',
                ],
              ),
            ],
          ),
          scene(
            'expose',
            'A short talk',
            '🧑‍🏫',
            'You give a short talk in class. Use vous to the teacher.',
            [
              say(
                'La professeure',
                'Commencez votre exposé, s’il vous plaît.',
                'Start your presentation, please.',
              ),
              you(
                'D’abord, je vais présenter mon idée.',
                [
                  'En effet, je vais présenter mon idée.',
                  'En effet confirms something already said; start with d’abord.',
                ],
                [
                  'Enfin, je vais présenter mon idée.',
                  'Enfin closes a list; to start say d’abord.',
                ],
              ),
              say('La professeure', 'Et pour finir ?', 'And to finish?'),
              you(
                'En somme, nous avons trois solutions possibles.',
                [
                  'D’ailleurs, nous avons trois solutions possibles.',
                  'D’ailleurs adds a remark; to sum up say en somme.',
                ],
                [
                  'Certes, nous avons trois solutions possibles.',
                  'Certes concedes a point; to sum up say en somme.',
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
      meta('Gérondif blitz', 'True or false? Beat the clock!', ['grammar', GER], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', 'The gérondif is en + participe présent.', true),
          tf(
            'b2',
            'The gérondif agrees with the subject.',
            false,
            'It is invariable: elles chantent en marchant.',
          ),
          tf('b3', 'The participe présent of “faire” is “faisant”.', true),
          tf('b4', 'The participe présent of “avoir” is “ayant”.', true),
          tf('b5', '“Il parle en marchant” means he talks while walking.', true),
          tf('b6', '“Cependant” means “however”.', true),
          tf('b7', '“En revanche” introduces a contrast.', true),
          tf('b8', '“Autrement dit” means “for example”.', false, 'It means “in other words”.'),
          tf('b9', '“En somme” introduces a summary.', true),
          tf('b10', 'The gérondif can express means: “en pratiquant”.', true),
          tf(
            'b11',
            '“Convaincre” means to contradict.',
            false,
            'Convaincre is to convince; contredire is to contradict.',
          ),
          tf('b12', 'The participe présent of “être” is “étant”.', true),
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
          q('c1', 'The gérondif of “parler” is …', 'en parlant', [
            'en parlé',
            'en parle',
            'en parler',
          ]),
          q('c2', 'Which sentence uses the gérondif correctly?', 'Elle lit en mangeant.', [
            'Elle lit en mange.',
            'Elle lit en mangé.',
            'Elle lit en manger.',
          ]),
          q('c3', '“Pourtant” expresses …', 'contrast', ['addition', 'example', 'conclusion']),
          q('c4', 'Which connector adds an argument?', 'De plus', [
            'Cependant',
            'En revanche',
            'Pourtant',
          ]),
          q('c5', 'What does “prouver” mean?', 'to prove', [
            'to approve',
            'to insist',
            'to defend',
          ]),
          q('c6', '“Autrement dit” means …', 'in other words', [
            'for example',
            'however',
            'indeed',
          ]),
          q('c7', 'The gérondif of “finir” is …', 'en finissant', [
            'en finant',
            'en fini',
            'en finir',
          ]),
          q('c8', 'What does “l’orateur” mean?', 'the speaker', [
            'the audience',
            'the argument',
            'the proof',
          ]),
        ],
      },
    ),
  ],
};
