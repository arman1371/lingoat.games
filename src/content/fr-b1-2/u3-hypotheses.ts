import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  conditionnelTable,
  dictation,
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

const U = 'fr-b1-2-hypotheses';
const SI = 'fr-b12-si-clauses' as const;
const COND = 'fr-b12-conditional' as const;

const dreams = vocabList(U, 'Dreams and chances', [
  ['le rêve', 'dream', '💭'],
  ['le souhait', 'wish', '🌠'],
  ['la loterie', 'lottery', '🎰'],
  ['le gain', 'winnings', '💰'],
  ['la fortune', 'fortune', '🤑'],
  ['le pari', 'bet', '🎲'],
  ['le hasard', 'chance, coincidence', '🍀'],
  ['l’occasion', 'opportunity', '🚪'],
  ['le choix', 'choice', '🔀'],
  ['l’hypothèse', 'hypothesis', '🧪'],
  ['le risque', 'risk', '⚠️'],
  ['le conseil', 'piece of advice', '🗣️'],
  ['la proposition', 'suggestion, offer', '🤝'],
  ['le tour du monde', 'trip around the world', '🌍'],
  ['le défi', 'challenge', '🏁'],
  ['la reconversion', 'career change', '🔄'],
]);

const verbs = vocabList(U, 'Verbs of imagining and deciding', [
  ['imaginer', 'to imagine', '🧠'],
  ['supposer', 'to suppose', '🤔'],
  ['envisager', 'to consider', '👀'],
  ['hésiter', 'to hesitate', '😬'],
  ['renoncer à', 'to give up', '🏳️'],
  ['tenter', 'to try, to attempt', '🎯'],
  ['oser', 'to dare', '🦁'],
  ['se lancer', 'to take the plunge', '🏊'],
  ['hériter', 'to inherit', '📜'],
  ['renoncer', 'to give up', '🏳️'],
  ['réaliser un rêve', 'to make a dream come true', '✨'],
  ['gagner à la loterie', 'to win the lottery', '🎉'],
  ['miser', 'to bet, to stake', '🎰'],
  ['conseiller', 'to advise', '💡'],
]);

const links = vocabList(U, 'Linking words', [
  ['éventuellement', 'possibly, if need be', '🤷'],
  ['sinon', 'otherwise', '↪️'],
  ['au cas où', 'in case', '☔'],
  ['à ta place', 'in your place', '🧍'],
  ['à moins de', 'unless (+ infinitive)', '🚫'],
  ['en cas de', 'in case of', '🆘'],
  ['peut-être', 'maybe', '❔'],
  ['pourquoi pas', 'why not', '👍'],
]);

const phrases = vocabList(U, 'Phrases', [
  [
    'Et si on partait un an autour du monde ?',
    'What if we spent a year travelling around the world?',
    '🌍',
  ],
  [
    'Si j’avais plus de temps, je voyagerais davantage.',
    'If I had more time, I would travel more.',
    '⏳',
  ],
  ['À ta place, je n’hésiterais pas.', 'If I were you, I would not hesitate.', '🧍'],
  ['Si tu viens, on ira au musée.', 'If you come, we will go to the museum.', '🖼️'],
  ['Je voudrais réserver une table pour deux.', 'I would like to book a table for two.', '🍽️'],
  ['Pourriez-vous m’aider, s’il vous plaît ?', 'Could you help me, please?', '🙏'],
]);

const vocab = [...dreams, ...verbs, ...links, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const KIND: [string, 'real' | 'unreal', string][] = [
  ['Si tu viens, on ira au cinéma.', 'real', 'If you come, we will go to the cinema.'],
  ['S’il pleut, nous resterons à la maison.', 'real', 'If it rains, we will stay at home.'],
  ['Si tu as soif, bois de l’eau !', 'real', 'If you are thirsty, drink some water!'],
  ['Si je gagne, je partirai demain.', 'real', 'If I win, I will leave tomorrow.'],
  [
    'Si j’avais un million, je ferais le tour du monde.',
    'unreal',
    'If I had a million, I would go round the world.',
  ],
  [
    'Si elle parlait mieux, elle trouverait ce poste.',
    'unreal',
    'If she spoke better, she would get that job.',
  ],
  ['Si nous étions plus jeunes, nous oserions.', 'unreal', 'If we were younger, we would dare.'],
  ['Si tu venais, on irait au cinéma.', 'unreal', 'If you came, we would go to the cinema.'],
];

export const hypotheses: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Et si… ?',
    subtitle: 'Make suggestions, imagine other lives and give advice with si and the conditional',
    emoji: '💭',
    goals: [
      'Say what you will do if something happens (si + present)',
      'Imagine what you would do (si + imparfait, conditionnel)',
      'Suggest, advise and ask politely with the conditional',
    ],
    grammar: [
      'si + présent + futur',
      'si + imparfait + conditionnel',
      'Et si on + imparfait ?',
      'Conditionnel présent',
    ],
    vocabFields: [
      'Dreams and chances',
      'Verbs of imagining and deciding',
      'Linking words',
      'Phrases',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-dreams',
      'flashcards',
      meta(
        'Dreams and chances',
        'Words for wishes, risks and choices.',
        ['vocabulary', 'life-paths'],
        1,
        4,
      ),
      flashcards(dreams),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What does it show?',
        'Look at the picture and pick the word.',
        ['vocabulary', 'life-paths'],
        1,
        3,
      ),
      quizEmoji(
        byDe(
          vocab,
          'le rêve',
          'la loterie',
          'le gain',
          'le pari',
          'le hasard',
          'le risque',
          'le conseil',
          'le tour du monde',
        ),
        dreams,
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
        ['vocabulary', 'life-paths'],
        2,
        3,
      ),
      memory(
        byDe(
          vocab,
          'imaginer',
          'supposer',
          'envisager',
          'hésiter',
          'renoncer à',
          'tenter',
          'oser',
          'se lancer',
        ),
      ),
    ),

    activity(
      U,
      'listen-hypotheses',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'life-paths'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'le souhait',
          'l’occasion',
          'le défi',
          'hériter',
          'renoncer',
          'sinon',
          'au cas où',
          'éventuellement',
        ),
        vocab.slice(0, 38),
      ),
    ),

    activity(
      U,
      'flash-verbs',
      'flashcards',
      meta(
        'Imagining and deciding',
        'Verbs and linking words for hypotheses.',
        ['vocabulary', 'life-paths'],
        1,
        4,
      ),
      flashcards([...verbs, ...links]),
    ),

    activity(
      U,
      'spell-dreams',
      'spell',
      meta(
        'Spell the dreams',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', 'life-paths'],
        2,
        4,
      ),
      {
        items: [
          sp('sp-loterie', 'unscramble', 'loterie', mean('la loterie'), '🎰', 'la loterie'),
          sp('sp-hasard', 'unscramble', 'hasard', mean('le hasard'), '🍀', 'le hasard'),
          sp('sp-hypothese', 'type', 'hypothèse', mean('l’hypothèse'), '🧪', 'l’hypothèse'),
          sp('sp-occasion', 'type', 'occasion', mean('l’occasion'), '🚪', 'l’occasion'),
          dictation('sp-fortune', 'fortune', 'fortune', 'la fortune'),
          dictation('sp-heriter', 'hériter', 'to inherit', 'hériter'),
        ],
      },
    ),

    activity(
      U,
      'sort-si',
      'sortit',
      meta(
        'Possible or imaginary?',
        'Does the sentence describe a real possibility or an imaginary case?',
        ['grammar', SI, 'life-paths'],
        2,
        3,
      ),
      {
        instruction: 'Is the condition likely, or only imagined?',
        buckets: [
          { id: 'real', label: 'Real possibility', emoji: '✅' },
          { id: 'unreal', label: 'Imaginary case', emoji: '💭' },
        ],
        items: sortCards('k', KIND),
      },
    ),

    activity(
      U,
      'conj-conditional',
      'conjugation',
      meta(
        'The conditional',
        'Future stem + the endings of the imparfait.',
        ['grammar', COND],
        2,
        4,
      ),
      {
        tables: [
          conditionnelTable('aimer-1', 'aimer', 'to like, to love', ['je', 'tu', 'il/elle/on']),
          conditionnelTable('finir-1', 'finir', 'to finish', ['nous', 'vous', 'ils/elles']),
          conditionnelTable('aller-1', 'aller', 'to go', ['je', 'nous', 'ils/elles']),
          conditionnelTable('avoir-1', 'avoir', 'to have', ['tu', 'il/elle/on', 'vous']),
          conditionnelTable('pouvoir-1', 'pouvoir', 'to be able to', ['je', 'tu', 'nous']),
          conditionnelTable('faire-1', 'faire', 'to do, to make', [
            'il/elle/on',
            'vous',
            'ils/elles',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-si',
      'gapfill',
      meta(
        'Si… what happens?',
        'Complete the sentence with the right tense after si.',
        ['grammar', SI, 'life-paths'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Si j’___ plus d’argent, j’achèterais une maison.',
            'avais',
            ['avais', 'ai', 'aurai'],
            'If I had more money, I would buy a house.',
            'Imaginary case: si + imparfait, then the conditional.',
          ),
          gap(
            'g2',
            'Si tu viens demain, nous ___ au musée.',
            'irons',
            ['irons', 'irions', 'allions'],
            'If you come tomorrow, we will go to the museum.',
            'Real possibility: si + present, then the future.',
          ),
          gap(
            'g3',
            'Si elle gagnait à la loterie, elle ___ de travailler.',
            'arrêterait',
            ['arrêterait', 'arrêtera', 'arrêtait'],
            'If she won the lottery, she would stop working.',
            'Si + imparfait asks for the conditional in the other clause.',
          ),
          gap(
            'g4',
            'S’il ___ beau, nous ferons une randonnée.',
            'fait',
            ['fait', 'fera', 'ferait'],
            'If the weather is fine, we will go for a hike.',
            'After si you never use the future or the conditional: present.',
          ),
          gap(
            'g5',
            'Si nous ___ plus de temps, nous resterions un mois.',
            'avions',
            ['avions', 'aurions', 'avons'],
            'If we had more time, we would stay a month.',
            'Never the conditional after si: use the imparfait.',
          ),
          gap(
            'g6',
            'Si vous ___ de l’aide, appelez-moi.',
            'avez besoin',
            ['avez besoin', 'aviez besoin', 'aurez besoin'],
            'If you need help, call me.',
            'Real case: si + present, then an imperative.',
          ),
          gap(
            'g7',
            'Et si on ___ en train plutôt qu’en avion ?',
            'voyageait',
            ['voyageait', 'voyagerait', 'voyage'],
            'What if we travelled by train rather than by plane?',
            'A suggestion with Et si on … uses the imparfait.',
          ),
          gap(
            'g8',
            'Si tu ___ à ma place, que ferais-tu ?',
            'étais',
            ['étais', 'serais', 'es'],
            'If you were in my place, what would you do?',
            'Si + imparfait: étais; the conditional is in the main clause.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-conditional',
      'gapfill',
      meta(
        'Advice, wishes and politeness',
        'Use the conditional to advise, wish and ask politely.',
        ['grammar', COND, 'life-paths'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'c1',
            'À ta place, je n’___ pas.',
            'hésiterais',
            ['hésiterais', 'hésite', 'hésiterai'],
            'If I were you, I would not hesitate.',
            'Advice with à ta place: conditional.',
          ),
          gap(
            'c2',
            'Je ___ réserver une table pour ce soir.',
            'voudrais',
            ['voudrais', 'veux', 'voulais'],
            'I would like to book a table for tonight.',
            'A polite request: conditional of vouloir.',
          ),
          gap(
            'c3',
            '___-vous m’indiquer la gare, s’il vous plaît ?',
            'Pourriez',
            ['Pourriez', 'Pouvez', 'Pourrez'],
            'Could you tell me where the station is, please?',
            'Pourriez-vous is more polite than pouvez-vous.',
          ),
          gap(
            'c4',
            'Tu ___ prendre un parapluie, au cas où.',
            'devrais',
            ['devrais', 'dois', 'devras'],
            'You should take an umbrella, just in case.',
            'Devrais gives gentle advice (“you should”).',
          ),
          gap(
            'c5',
            'Nous ___ volontiers faire un tour du monde.',
            'ferions',
            ['ferions', 'faisons', 'ferons'],
            'We would happily go round the world.',
            'A wish that may never happen: conditional.',
          ),
          gap(
            'c6',
            'Ils ___ habiter à la campagne, mais ils n’osent pas.',
            'aimeraient',
            ['aimeraient', 'aiment', 'aimeront'],
            'They would like to live in the country, but they do not dare.',
            'A softened wish: aimeraient.',
          ),
          gap(
            'c7',
            'Selon la presse, le ministre ___ démissionner.',
            'serait prêt à',
            ['serait prêt à', 'est prêt à', 'sera prêt à'],
            'According to the press, the minister is said to be ready to resign.',
            'The conditional also reports an unconfirmed fact.',
          ),
          gap(
            'c8',
            'Vous ___ me passer le sel ?',
            'pourriez',
            ['pourriez', 'pouviez', 'pourrez'],
            'Could you pass me the salt?',
            'Pourriez: polite question.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', SI], 2, 4),
      {
        items: [
          sent(
            's1',
            'If I had time, I would travel more.',
            ['Si', 'j’avais', 'le', 'temps,', 'je', 'voyagerais', 'davantage.'],
            { extra: ['voyagerai'] },
          ),
          sent(
            's2',
            'If it rains, we will stay at home.',
            ['S’il', 'pleut,', 'nous', 'resterons', 'à', 'la', 'maison.'],
            { extra: ['pleuvra'] },
          ),
          sent('s3', 'What if we left tomorrow?', ['Et', 'si', 'on', 'partait', 'demain', '?'], {
            extra: ['partirait'],
          }),
          sent('s4', 'In your place, I would dare.', ['À', 'ta', 'place,', 'j’oserais.']),
          sent('s5', 'Could you help me, please?', [
            'Pourriez-vous',
            'm’aider,',
            's’il',
            'vous',
            'plaît',
            '?',
          ]),
          sent('s6', 'If you win, will you give up your job?', [
            'Si',
            'tu',
            'gagnes,',
            'renonceras-tu',
            'à',
            'ton',
            'travail',
            '?',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'What if…?',
        'A dream, a suggestion and a polite request.',
        ['communication', 'life-paths'],
        2,
        6,
      ),
      {
        scenes: [
          scene(
            'reve',
            'A dream',
            '💭',
            'You and your friend Karim talk about a lottery win. You say tu.',
            [
              say(
                'Karim',
                'Si tu gagnais à la loterie, que ferais-tu ?',
                'If you won the lottery, what would you do?',
              ),
              you(
                'Je ferais un tour du monde.',
                [
                  'Je ferai un tour du monde.',
                  'After a question with si + imparfait answer with the conditional: je ferais.',
                ],
                [
                  'Je faisais un tour du monde.',
                  'The imparfait describes the past. For a dream use the conditional: je ferais.',
                ],
              ),
              say('Karim', 'Moi, j’arrêterais de travailler.', 'I would stop working.'),
              you(
                'Et si on partait ensemble ?',
                [
                  'Et si on partirait ensemble ?',
                  'After si you do not use the conditional: Et si on partait ?',
                ],
                [
                  'Et si on part ensemble ?',
                  'For a suggestion use the imparfait: Et si on partait ?',
                ],
              ),
            ],
          ),
          scene('conseil', 'Advice', '🧍', 'Léa hesitates about a new job. You say tu.', [
            say(
              'Léa',
              'J’hésite : le poste est loin de chez moi.',
              'I hesitate: the job is far from home.',
            ),
            you(
              'À ta place, je tenterais ma chance.',
              [
                'À ta place, je tenterai ma chance.',
                'Advice with à ta place takes the conditional: tenterais.',
              ],
              ['À ta place, je tentais ma chance.', 'Tentais is the imparfait. Use tenterais.'],
            ),
            say(
              'Léa',
              'Et si je ne trouvais pas de logement ?',
              'And what if I could not find a flat?',
            ),
            you(
              'Si tu en cherches un maintenant, tu en trouveras un.',
              [
                'Si tu en chercheras un maintenant, tu en trouveras un.',
                'Never the future directly after si: Si tu en cherches.',
              ],
              [
                'Si tu en chercherais un, tu en trouveras un.',
                'Never the conditional after si; here: Si tu en cherches.',
              ],
            ),
          ]),
          scene('restaurant', 'A polite request', '🍽️', 'You phone a restaurant. Use vous.', [
            say(
              'Le restaurateur',
              'Restaurant Le Passage, bonjour.',
              'Restaurant Le Passage, hello.',
            ),
            you(
              'Bonjour, je voudrais réserver une table pour ce soir.',
              [
                'Bonjour, je veux réserver une table pour ce soir.',
                'Je veux is blunt on the phone; the polite form is je voudrais.',
              ],
              [
                'Bonjour, je voulais réserver une table pour ce soir.',
                'Je voulais is possible but less direct; je voudrais is the polite request.',
              ],
            ),
            say('Le restaurateur', 'Pour combien de personnes ?', 'For how many people?'),
            you(
              'Pour quatre. Pourriez-vous nous donner une table près de la fenêtre ?',
              [
                'Pour quatre. Pouvez-vous nous donner une table près de la fenêtre ?',
                'Correct but less polite; pourriez-vous is the courteous form.',
              ],
              [
                'Pour quatre. Pourrez-vous nous donner une table près de la fenêtre ?',
                'Pourrez is the future. A polite request needs pourriez.',
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
      meta('Hypothesis blitz', 'True or false? Beat the clock!', ['grammar', SI], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', 'Si + imparfait is followed by the conditional.', true),
          tf('b2', 'Si + présent is followed by the future or the imperative.', true),
          tf(
            'b3',
            '“Si j’aurais le temps” is correct.',
            false,
            'Never the conditional after si: Si j’avais le temps.',
          ),
          tf('b4', '“Et si on partait ?” is a suggestion.', true),
          tf('b5', '“Je voudrais” is more polite than “je veux”.', true),
          tf('b6', '“Si tu viendras” is correct.', false, 'After si use the present: Si tu viens.'),
          tf('b7', 'The conditional uses the future stem.', true),
          tf(
            'b8',
            'The endings of the conditional are -ais, -ais, -ait, -ions, -iez, -aient.',
            true,
          ),
          tf('b9', '“Pourriez-vous” is a polite way to ask.', true),
          tf('b10', '“À ta place” introduces advice.', true),
          tf(
            'b11',
            'The conditional of aller is “j’allerais”.',
            false,
            'The stem is irregular: j’irais.',
          ),
          tf('b12', '“Le pari” means a bet.', true),
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
        ['vocabulary', 'grammar', 'life-paths'],
        3,
        4,
      ),
      {
        questions: [
          q('c1', 'Complete: “Si nous ___ le temps, nous voyagerions.”', 'avions', [
            'aurions',
            'avons',
            'aurons',
          ]),
          q('c2', 'Complete: “Si tu pars, je ___ triste.”', 'serai', ['serais', 'étais', 'sois']),
          q('c3', 'Which sentence is a polite request?', 'Je voudrais un café.', [
            'Je veux un café.',
            'Je voulais un café.',
            'Je voudrai un café.',
          ]),
          q('c4', 'What does “hériter” mean?', 'to inherit', ['to hesitate', 'to quit', 'to dare']),
          q('c5', 'The conditional of “faire” for “nous” is …', 'ferions', [
            'ferons',
            'faisions',
            'ferrions',
          ]),
          q('c6', 'Complete: “Et si on ___ au cinéma ?”', 'allait', ['irait', 'ira', 'allons']),
          q('c7', '“Au cas où” means …', 'in case', ['unless', 'otherwise', 'maybe']),
          q('c8', 'Which sentence gives advice?', 'À ta place, je partirais.', [
            'Je pars à ta place.',
            'Tu es parti à ma place.',
            'Je partirai sans toi.',
          ]),
        ],
      },
    ),
  ],
};
