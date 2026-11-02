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

const U = 'fr-b2-1-cause';

const effects = vocabList(U, 'Cause and effect', [
  ['une cause', 'a cause', '🔥'],
  ['une conséquence', 'a consequence', '🌊'],
  ['un facteur', 'a factor', '🧮'],
  ['une origine', 'an origin, a source', '🌱'],
  ['un enjeu', 'a stake, an issue', '🎲'],
  ['un risque', 'a risk', '⚠️'],
  ['un impact', 'an impact', '💥'],
  ['une répercussion', 'a repercussion', '〰️'],
  ['un bilan', 'an assessment, a balance sheet', '📊'],
  ['un déclencheur', 'a trigger', '🔫'],
  ['un cercle vicieux', 'a vicious circle', '🌀'],
  ['une menace', 'a threat', '☠️'],
  ['un obstacle', 'an obstacle', '🚧'],
  ['un dommage', 'damage, harm', '🩹'],
]);

const judging = vocabList(U, 'Judging results', [
  ['inévitable', 'unavoidable', '🪨'],
  ['durable', 'lasting, sustainable', '🌳'],
  ['néfaste', 'harmful', '🧪'],
  ['bénéfique', 'beneficial', '💚'],
  ['prévisible', 'foreseeable', '🔮'],
  ['irréversible', 'irreversible', '⛔'],
  ['considérable', 'considerable', '🏔️'],
  ['désastreux', 'disastrous', '🌪️'],
  ['décisif', 'decisive', '🎯'],
  ['insuffisant', 'insufficient', '📉'],
  ['efficace', 'effective', '✅'],
  ['préjudiciable', 'detrimental', '👎'],
]);

const phrases = vocabList(U, 'Linking cause and effect', [
  [
    'Les prix ont augmenté, c’est pourquoi les ventes ont baissé.',
    'Prices rose, which is why sales fell.',
    '📈',
  ],
  [
    'Il y avait tellement de monde que nous n’avons rien vu.',
    'There were so many people that we saw nothing.',
    '👥',
  ],
  ['La sécheresse a provoqué une hausse des prix.', 'The drought caused a rise in prices.', '🏜️'],
  ['Ce problème est dû à un manque de moyens.', 'This problem is due to a lack of means.', '💸'],
  [
    'Il a organisé la réunion de sorte que tout le monde soit présent.',
    'He organised the meeting so that everybody would be there.',
    '🗓️',
  ],
  [
    'Cette décision a eu des répercussions considérables.',
    'This decision had considerable repercussions.',
    '🏛️',
  ],
  [
    'Il est si fatigué qu’il s’endort au travail.',
    'He is so tired that he falls asleep at work.',
    '😴',
  ],
  [
    'Par conséquent, le service sera fermé lundi.',
    'Consequently, the service will be closed on Monday.',
    '🚪',
  ],
]);

const vocab = [...effects, ...judging, ...phrases];

const SIDE: [string, 'cause' | 'result', string][] = [
  [
    'Les prix montent parce que la demande augmente.',
    'cause',
    'Prices rise because demand increases.',
  ],
  ['Les prix montent, donc les ventes baissent.', 'result', 'Prices rise, so sales fall.'],
  [
    'À cause du gel, la récolte est mauvaise.',
    'cause',
    'Because of the frost, the harvest is poor.',
  ],
  [
    'Il a gelé, si bien que la récolte est mauvaise.',
    'result',
    'It froze, so the harvest is poor.',
  ],
  ['Comme il a plu, le match est annulé.', 'cause', 'As it rained, the match is cancelled.'],
  [
    'Il pleut, c’est pourquoi le match est annulé.',
    'result',
    'It is raining, which is why the match is cancelled.',
  ],
  ['Puisque tu es fatigué, repose-toi.', 'cause', 'Since you are tired, rest.'],
  ['Il est si fatigué qu’il dort debout.', 'result', 'He is so tired that he sleeps standing up.'],
  ['Grâce à cette aide, il a réussi.', 'cause', 'Thanks to this help, he succeeded.'],
  [
    'Il a tellement plu que la rivière a débordé.',
    'result',
    'It rained so much that the river overflowed.',
  ],
  ['Il est absent car il est malade.', 'cause', 'He is absent because he is ill.'],
  ['Par conséquent, le service est fermé.', 'result', 'Consequently, the service is closed.'],
];

export const cause: UnitContent = {
  unit: unitFr({
    id: U,
    order: 8,
    title: 'Cause et conséquence',
    subtitle: 'Argue step by step: link causes and consequences and judge the results',
    emoji: '⛓️',
    goals: [
      'Link a cause to its consequence with donc, c’est pourquoi, si bien que, tellement … que',
      'Choose between causer, provoquer, entraîner and être dû à, résulter de',
      'Judge results with precise adjectives',
    ],
    grammar: ['Expressing consequence', 'Verbs of cause and effect'],
    vocabFields: ['Cause and effect', 'Judging results', 'Linking cause and effect'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'cause-effect', {
      a: { title: 'Cause and effect', description: 'Words for arguing.', words: effects },
      b: { title: 'Judging results', description: 'Adjectives for outcomes.', words: judging },
      listen: [
        'une cause',
        'une conséquence',
        'un enjeu',
        'un risque',
        'inévitable',
        'durable',
        'néfaste',
        'désastreux',
      ],
      spell: [
        ['unscramble', 'conséquence', 'consequence', '🌊', 'une conséquence'],
        ['unscramble', 'obstacle', 'obstacle', '🚧', 'un obstacle'],
        ['type', 'répercussion', 'repercussion', '〰️', 'une répercussion'],
        ['type', 'bénéfique', 'beneficial', '💚', 'bénéfique'],
        ['type', 'menace', 'threat', '☠️', 'une menace'],
      ],
    }),

    activity(
      U,
      'gap-consequence',
      'gapfill',
      meta(
        'So, therefore…',
        'Choose the right connector of consequence.',
        ['grammar', 'fr-consequence', 'cause-effect'],
        2,
        4,
        'fr-consequence',
      ),
      {
        items: [
          g(
            'c1',
            'Il y avait tellement de monde ___ nous n’avons rien vu.',
            'que',
            [
              ['pour', 'Tellement … que introduces a result.'],
              ['donc', 'Donc cannot follow tellement de.'],
              ['car', 'Car introduces a cause.'],
            ],
            'There were so many people that we saw nothing.',
            'Tellement (de) … que + indicative.',
          ),
          g(
            'c2',
            'Il pleut beaucoup, ___ nous restons à la maison.',
            'donc',
            [
              ['car', 'Car introduces a cause, not a result.'],
              ['parce que', 'Parce que introduces a cause.'],
              ['puisque', 'Puisque introduces a known cause.'],
            ],
            'It rains a lot, so we stay at home.',
            'Donc introduces the result.',
          ),
          g(
            'c3',
            'Les prix ont augmenté, c’est ___ les ventes ont baissé.',
            'pourquoi',
            [
              ['parce que', 'C’est parce que gives a cause; here you need a result.'],
              ['car', 'Car introduces a cause.'],
              ['pour que', 'Pour que introduces a purpose.'],
            ],
            'Prices went up, which is why sales fell.',
            'C’est pourquoi introduces the result.',
          ),
          g(
            'c4',
            'Il est si fatigué ___ il s’endort au travail.',
            'qu’il',
            [
              ['pour qu’il', 'Si … que introduces a result.'],
              ['donc', 'Donc cannot follow si + adjective.'],
              ['que de', 'Never combine que and de.'],
            ],
            'He is so tired that he falls asleep at work.',
            'Si + adjective + que.',
          ),
          g(
            'c5',
            'Il y a eu une panne ; ___, le train a été supprimé.',
            'par conséquent',
            [
              ['parce que', 'Parce que introduces a cause.'],
              ['grâce à', 'Grâce à needs a noun and gives a cause.'],
              ['puisque', 'Puisque introduces a known cause.'],
            ],
            'There was a breakdown; as a result, the train was cancelled.',
            'Par conséquent: formal consequence.',
          ),
          g(
            'c6',
            'Il est trop tard ___ nous partions maintenant.',
            'pour que',
            [
              ['pour', 'A new subject (nous) needs pour que + subjunctive.'],
              ['donc', 'Trop … pour que is a fixed pattern.'],
              ['que', 'Trop … pour que, not trop … que.'],
            ],
            'It is too late for us to leave now.',
            'Trop / assez … pour que + subjunctive.',
          ),
          g(
            'c7',
            'Il est assez grand ___ comprendre.',
            'pour',
            [
              ['que', 'With the same subject: assez … pour + infinitive.'],
              ['donc', 'Donc is not part of this pattern.'],
              ['parce que', 'Parce que introduces a cause.'],
            ],
            'He is old enough to understand.',
            'Assez … pour + infinitive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-verbs',
      'gapfill',
      meta(
        'Verbs of cause',
        'Provoquer, entraîner, être dû à, résulter de, conduire à.',
        ['grammar', 'fr-cause-verbs', 'cause-effect'],
        3,
        4,
        'fr-cause-verbs',
      ),
      {
        items: [
          g(
            'v1',
            'La sécheresse a ___ une hausse des prix.',
            'provoqué',
            [
              ['dû', 'Être dû à points back to the cause; here the drought is the cause.'],
              ['résulté', 'Résulter de points back to the cause.'],
              ['découlé', 'Découler de points back to the cause.'],
            ],
            'The drought caused a rise in prices.',
            'Provoquer: the subject is the cause.',
          ),
          g(
            'v2',
            'Ce problème est ___ à un manque de moyens.',
            'dû',
            [
              ['provoqué', 'With à, use être dû à.'],
              ['entraîné', 'With à, use être dû à.'],
              ['causé', 'With à, use être dû à.'],
            ],
            'This problem is due to a lack of means.',
            'Être dû à: the subject is the effect.',
          ),
          g(
            'v3',
            'Cette décision a ___ des répercussions considérables.',
            'entraîné',
            [
              ['résulté', 'Résulter takes de, not a direct object.'],
              ['dû', 'Être dû takes à.'],
              ['découlé', 'Découler takes de.'],
            ],
            'This decision had considerable repercussions.',
            'Entraîner: the subject is the cause.',
          ),
          g(
            'v4',
            'Les accidents ___ de la fatigue des conducteurs.',
            'résultent',
            [
              ['entraînent', 'This would make accidents the cause of the tiredness.'],
              ['provoquent', 'This would make accidents the cause of the tiredness.'],
              ['causent', 'This would make accidents the cause of the tiredness.'],
            ],
            'The accidents result from the drivers’ tiredness.',
            'Résulter de: the subject is the effect.',
          ),
          g(
            'v5',
            'Il a organisé la réunion de sorte que tout le monde ___ présent.',
            'soit',
            [
              ['est', 'De sorte que with a goal takes the subjunctive.'],
              ['sera', 'De sorte que with a goal takes the subjunctive.'],
              ['serait', 'The conditional is not the subjunctive.'],
            ],
            'He organised the meeting so that everyone could be there.',
            'De sorte que + subjunctive = purpose.',
          ),
          g(
            'v6',
            'Il a plu tout l’été, de sorte que les récoltes ___ mauvaises.',
            'ont été',
            [
              ['soient', 'A real result takes the indicative.'],
              ['aient été', 'A real result takes the indicative.'],
              ['seraient', 'A real result takes the indicative.'],
            ],
            'It rained all summer, so the harvests were poor.',
            'De sorte que + indicative = result.',
          ),
          g(
            'v7',
            'Le trafic ___ à une pollution accrue.',
            'conduit',
            [
              ['résulte', 'Résulter de: the subject is the effect.'],
              ['découle', 'Découler de: the subject is the effect.'],
              ['est dû', 'Être dû à: the subject is the effect.'],
            ],
            'Traffic leads to increased pollution.',
            'Conduire à / mener à: the subject is the cause.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-side',
      'sortit',
      meta(
        'Cause or result?',
        'Does the sentence give the reason or the outcome?',
        ['grammar', 'fr-consequence', 'fr-cause-conjunctions', 'cause-effect'],
        2,
        4,
        'fr-consequence',
      ),
      {
        instruction: 'Does the connector introduce a cause or a result?',
        buckets: [
          { id: 'cause', label: 'cause', emoji: '🔥' },
          { id: 'result', label: 'result', emoji: '🌊' },
        ],
        items: cards('s', SIDE),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-consequence', 'fr-cause-verbs'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'It rained so much that the road was flooded.',
            ['Il', 'a', 'tellement', 'plu', 'que', 'la', 'route', 'est', 'inondée.'],
            { extra: ['donc'], lesson: 'fr-consequence' },
          ),
          sent(
            's2',
            'Prices went up, which is why sales fell.',
            [
              'Les',
              'prix',
              'ont',
              'augmenté,',
              'c’est',
              'pourquoi',
              'les',
              'ventes',
              'ont',
              'baissé.',
            ],
            { extra: ['car'], lesson: 'fr-consequence' },
          ),
          sent(
            's3',
            'The strike caused delays.',
            ['La', 'grève', 'a', 'entraîné', 'des', 'retards.'],
            { extra: ['dû'], lesson: 'fr-cause-verbs' },
          ),
          sent(
            's4',
            'These delays are due to the strike.',
            ['Ces', 'retards', 'sont', 'dus', 'à', 'la', 'grève.'],
            { extra: ['entraînés'], lesson: 'fr-cause-verbs' },
          ),
          sent(
            's5',
            'He is old enough to decide.',
            ['Il', 'est', 'assez', 'grand', 'pour', 'décider.'],
            { extra: ['que'], lesson: 'fr-consequence' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Follow the argument',
        'Read the sentence and pick its meaning.',
        ['communication', 'cause-effect'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Le manque de sommeil est un facteur de stress.',
            'Lack of sleep is a factor in stress.',
            [
              'Stress is a factor of sleeping.',
              'Sleep removes the stress.',
              'Lack of sleep is a result of stress.',
            ],
          ),
          qs(
            'r2',
            'Cette mesure a eu un impact durable sur l’emploi.',
            'This measure had a lasting impact on employment.',
            [
              'This measure was cancelled for employment.',
              'This measure has no impact.',
              'Employment caused this measure.',
            ],
          ),
          qs(
            'r3',
            'Les dégâts sont irréversibles : on ne peut plus rien faire.',
            'The damage is irreversible: nothing more can be done.',
            [
              'The damage is minor: we can repair it.',
              'The damage is predictable but small.',
              'The damage was done by irreversible plans.',
            ],
          ),
          qs(
            'r4',
            'Il a tellement travaillé qu’il est tombé malade.',
            'He worked so much that he fell ill.',
            [
              'He fell ill, then worked so much.',
              'He did not work because he was ill.',
              'He works so that he will be ill.',
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
        'Argue it out',
        'Link causes and consequences in a discussion.',
        ['communication', 'cause-effect'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'meeting',
            title: 'A team meeting',
            emoji: '🧑‍💼',
            setting: 'Your team’s sales have dropped. Discuss the reasons. Use vous.',
            turns: [
              say(
                'La directrice',
                'Pourquoi nos ventes ont-elles baissé ?',
                'Why have our sales dropped?',
              ),
              you(
                'Nos prix ont augmenté, c’est pourquoi nos clients sont partis.',
                [
                  'Nos prix ont augmenté, c’est parce que nos clients sont partis.',
                  'C’est pourquoi introduces the result; parce que the cause.',
                ],
                [
                  'Nos prix ont augmenté, car nos clients sont partis.',
                  'Car would reverse the logic: the price rise is the cause.',
                ],
              ),
              say(
                'La directrice',
                'Quelles seront les conséquences ?',
                'What will the consequences be?',
              ),
              you(
                'Si nous ne réagissons pas, l’impact sera désastreux.',
                [
                  'Si nous ne réagissons pas, l’impact sera bénéfique.',
                  'A beneficial impact does not fit with doing nothing.',
                ],
                [
                  'Si nous ne réagissons pas, l’impact sera efficace.',
                  'Efficace does not describe an impact like this.',
                ],
              ),
            ],
          },
          {
            id: 'news',
            title: 'The news',
            emoji: '📺',
            setting: 'A friend asks what happened after the storm. Use tu.',
            turns: [
              say('Zoé', 'Il y a eu des inondations ?', 'Were there floods?'),
              you(
                'Oui, il a tellement plu que la rivière a débordé.',
                [
                  'Oui, il a tellement plu donc la rivière a débordé.',
                  'Tellement … que, not donc.',
                ],
                [
                  'Oui, il a plu parce que la rivière a débordé.',
                  'This reverses cause and effect.',
                ],
              ),
              say('Zoé', 'Et les dégâts ?', 'And the damage?'),
              you(
                'Ils sont dus à un manque de prévention.',
                ['Ils provoquent un manque de prévention.', 'This reverses cause and effect.'],
                ['Ils sont dus par un manque de prévention.', 'Être dû à, not par.'],
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
        'Consequence blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-consequence', 'fr-cause-verbs'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Donc” introduces a consequence.', true),
          tf('b2', '“Car” introduces a consequence.', false, 'Car introduces a cause.'),
          tf('b3', '“Tellement … que” expresses a result.', true),
          tf('b4', '“Être dû à” points back to the cause.', true),
          tf(
            'b5',
            '“La grève a été due des retards” is correct.',
            false,
            'Les retards sont dus à la grève.',
          ),
          tf('b6', '“Provoquer” and “entraîner” have the cause as subject.', true),
          tf('b7', '“De sorte que” + subjunctive expresses a goal.', true),
          tf(
            'b8',
            '“Irréversible” means that something can be undone.',
            false,
            'Irreversible means it cannot be undone.',
          ),
          tf(
            'b9',
            '“Un cercle vicieux” is a pleasant routine.',
            false,
            'It is a self-reinforcing bad situation.',
          ),
          tf('b10', '“Par conséquent” is a formal way to say “so”.', true),
          tf('b11', '“Un facteur” can be one of several causes.', true),
          tf('b12', '“Néfaste” means “harmful”.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Cause and effect challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'cause-effect'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Il a tant travaillé ___ il a réussi.”',
            'qu’il',
            ['donc', 'pour qu’il', 'car'],
            undefined,
            'fr-consequence',
          ),
          q(
            'c2',
            'Complete: “La fatigue ___ à la perte de concentration.”',
            'conduit',
            ['est due', 'résulte', 'découle'],
            undefined,
            'fr-cause-verbs',
          ),
          q(
            'c3',
            'Complete: “L’échec ___ d’un manque de préparation.”',
            'résulte',
            ['provoque', 'entraîne', 'cause'],
            undefined,
            'fr-cause-verbs',
          ),
          q(
            'c4',
            'Complete: “Il est trop jeune ___ voter.”',
            'pour',
            ['donc', 'que', 'car'],
            undefined,
            'fr-consequence',
          ),
          q('c5', 'Which word means “a trigger”?', 'un déclencheur', [
            'un facteur',
            'un enjeu',
            'un obstacle',
          ]),
          q('c6', 'Which word means “harmful”?', 'néfaste', ['bénéfique', 'durable', 'décisif']),
          q('c7', '“Un cercle vicieux” means …', 'a vicious circle', [
            'a good habit',
            'a round table',
            'a quick solution',
          ]),
          q('c8', '“Par conséquent” is closest to …', 'therefore', [
            'although',
            'because',
            'before',
          ]),
        ],
      },
    ),
  ],
};
