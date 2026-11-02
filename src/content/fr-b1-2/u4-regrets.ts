import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  condPasseTable,
  dictation,
  gap,
  meta,
  pqpTable,
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

const U = 'fr-b1-2-regrets';
const PQP = 'fr-b12-past-hypotheses' as const;

const feelings = vocabList(U, 'Regrets and mistakes', [
  ['le regret', 'regret', '😔'],
  ['le remords', 'remorse', '😞'],
  ['la déception', 'disappointment', '😕'],
  ['la faute', 'fault, mistake', '❌'],
  ['le malentendu', 'misunderstanding', '🙈'],
  ['le reproche', 'reproach', '👉'],
  ['la dispute', 'quarrel', '💢'],
  ['la réconciliation', 'making up', '🕊️'],
  ['l’excuse', 'apology, excuse', '🙇'],
  ['la rupture', 'break-up', '💔'],
  ['la culpabilité', 'guilt', '😣'],
  ['la seconde chance', 'second chance', '🔁'],
]);

const verbs = vocabList(U, 'Verbs of regret and repair', [
  ['regretter', 'to regret', '😢'],
  ['reprocher', 'to blame, to reproach', '☝️'],
  ['s’en vouloir', 'to be cross with oneself', '🤦'],
  ['pardonner', 'to forgive', '🤝'],
  ['rater', 'to miss, to fail', '🎯'],
  ['gâcher', 'to spoil, to waste', '🗑️'],
  ['rattraper', 'to make up for, to catch up', '🏃'],
  ['éviter', 'to avoid', '🚧'],
  ['échouer', 'to fail', '📉'],
  ['s’excuser', 'to apologise', '🙏'],
  ['mériter', 'to deserve', '🏅'],
  ['avoir tort', 'to be wrong', '🙅'],
]);

const links = vocabList(U, 'Expressions', [
  ['si seulement', 'if only', '🙏'],
  ['hélas', 'alas', '😮‍💨'],
  ['malheureusement', 'unfortunately', '☹️'],
  ['tant pis', 'too bad', '🤷'],
  ['c’est dommage', 'it is a pity', '😞'],
  ['trop tard', 'too late', '⏰'],
  ['à l’époque', 'at the time', '📅'],
  ['autrement', 'otherwise', '↩️'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['Si j’avais su, je serais venu plus tôt.', 'If I had known, I would have come earlier.', '⏪'],
  ['J’aurais dû t’écouter.', 'I should have listened to you.', '👂'],
  ['Si seulement j’avais réussi !', 'If only I had succeeded!', '🙏'],
  ['Nous aurions pu éviter cette dispute.', 'We could have avoided this quarrel.', '💢'],
  ['Elle regrette de ne pas être partie.', 'She regrets not having left.', '🧳'],
  ['Il aurait fallu prévenir.', 'We should have warned them.', '📢'],
]);

const vocab = [...feelings, ...verbs, ...links, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const TIME: [string, 'past' | 'present', string][] = [
  ['Si j’avais su, je serais venu.', 'past', 'If I had known, I would have come.'],
  [
    'Si nous avions pris le train, nous serions arrivés à l’heure.',
    'past',
    'If we had taken the train, we would have arrived on time.',
  ],
  ['Elle aurait dû s’excuser.', 'past', 'She should have apologised.'],
  ['Tu aurais pu me prévenir !', 'past', 'You could have warned me!'],
  ['Si j’avais plus de temps, je viendrais.', 'present', 'If I had more time, I would come.'],
  ['À ta place, j’irais.', 'present', 'In your place I would go.'],
  ['Si tu partais, je serais triste.', 'present', 'If you left, I would be sad.'],
  ['Nous pourrions en parler demain.', 'present', 'We could talk about it tomorrow.'],
];

export const regrets: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Si seulement…',
    subtitle:
      'Talk about regrets and what could have been with the plus-que-parfait and the past conditional',
    emoji: '⏪',
    goals: [
      'Say what you regret and what you should have done (j’aurais dû)',
      'Imagine a different past (si + plus-que-parfait, conditionnel passé)',
      'Apologise, forgive and make up for a mistake',
    ],
    grammar: [
      'Plus-que-parfait',
      'Conditionnel passé',
      'si + plus-que-parfait + conditionnel passé',
      'devoir / pouvoir au conditionnel passé',
    ],
    vocabFields: ['Regrets and mistakes', 'Verbs of regret and repair', 'Expressions', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-regrets',
      'flashcards',
      meta(
        'Regrets and mistakes',
        'Words for feelings after a mistake.',
        ['vocabulary', 'life-paths'],
        1,
        4,
      ),
      flashcards(feelings),
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
          'le regret',
          'la déception',
          'la faute',
          'le malentendu',
          'la dispute',
          'la réconciliation',
          'la rupture',
          'la seconde chance',
        ),
        feelings,
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
          'regretter',
          'reprocher',
          's’en vouloir',
          'pardonner',
          'rater',
          'gâcher',
          'rattraper',
          'mériter',
        ),
      ),
    ),

    activity(
      U,
      'listen-regrets',
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
          'le remords',
          'le reproche',
          'l’excuse',
          'éviter',
          'échouer',
          'hélas',
          'tant pis',
          'autrement',
        ),
        vocab.slice(0, 32),
      ),
    ),

    activity(
      U,
      'flash-verbs',
      'flashcards',
      meta(
        'Repairing a mistake',
        'Verbs and expressions to talk about regrets.',
        ['vocabulary', 'life-paths'],
        1,
        4,
      ),
      flashcards([...verbs, ...links]),
    ),

    activity(
      U,
      'spell-regrets',
      'spell',
      meta(
        'Spell the regrets',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', 'life-paths'],
        2,
        4,
      ),
      {
        items: [
          sp('sp-regret', 'unscramble', 'regret', mean('le regret'), '😔', 'le regret'),
          sp('sp-faute', 'unscramble', 'faute', mean('la faute'), '❌', 'la faute'),
          sp(
            'sp-reconciliation',
            'type',
            'réconciliation',
            mean('la réconciliation'),
            '🕊️',
            'la réconciliation',
          ),
          sp('sp-rupture', 'type', 'rupture', mean('la rupture'), '💔', 'la rupture'),
          dictation('sp-malentendu', 'malentendu', 'misunderstanding', 'le malentendu'),
          dictation('sp-hélas', 'hélas', 'alas', 'hélas'),
        ],
      },
    ),

    activity(
      U,
      'sort-time',
      'sortit',
      meta(
        'Past or present hypothesis?',
        'Does the sentence imagine a different past or a different present?',
        ['grammar', PQP, 'life-paths'],
        2,
        3,
      ),
      {
        instruction: 'Is the sentence about something that did not happen, or about now?',
        buckets: [
          { id: 'past', label: 'Different past', emoji: '⏪' },
          { id: 'present', label: 'Present or future', emoji: '⏩' },
        ],
        items: sortCards('t', TIME),
      },
    ),

    activity(
      U,
      'conj-pqp',
      'conjugation',
      meta(
        'Plus-que-parfait',
        'The imparfait of avoir or être plus the participle.',
        ['grammar', PQP],
        2,
        4,
      ),
      {
        tables: [
          pqpTable('finir-1', 'finir', 'to finish', ['je', 'tu', 'il/elle/on']),
          pqpTable('prendre-1', 'prendre', 'to take', ['nous', 'vous', 'ils/elles']),
          pqpTable('arriver-1', 'arriver', 'to arrive', ['je', 'nous', 'ils/elles']),
          pqpTable('partir-1', 'partir', 'to leave', ['tu', 'il/elle/on', 'vous'], true),
          pqpTable('voir-1', 'voir', 'to see', ['je', 'tu', 'nous']),
          pqpTable('dire-1', 'dire', 'to say', ['il/elle/on', 'vous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'conj-cond-past',
      'conjugation',
      meta(
        'Past conditional',
        'The conditional of avoir or être plus the participle.',
        ['grammar', PQP],
        3,
        4,
      ),
      {
        tables: [
          condPasseTable('faire-1', 'faire', 'to do, to make', ['je', 'tu', 'il/elle/on']),
          condPasseTable('aller-1', 'aller', 'to go', ['je', 'nous', 'ils/elles']),
          condPasseTable('devoir-1', 'devoir', 'to have to', ['tu', 'nous', 'ils/elles']),
          condPasseTable('pouvoir-1', 'pouvoir', 'to be able to', ['je', 'il/elle/on', 'vous']),
          condPasseTable('venir-1', 'venir', 'to come', ['tu', 'il/elle/on', 'nous'], true),
        ],
      },
    ),

    activity(
      U,
      'gap-past-hypothesis',
      'gapfill',
      meta(
        'If only…',
        'Complete the sentence with the right past tense.',
        ['grammar', PQP, 'life-paths'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Si j’___ su, je serais venu plus tôt.',
            'avais',
            ['avais', 'aurais', 'ai'],
            'If I had known, I would have come earlier.',
            'Si + plus-que-parfait: avais su.',
          ),
          gap(
            'g2',
            'Si nous avions pris un taxi, nous ___ à l’heure.',
            'serions arrivés',
            ['serions arrivés', 'étions arrivés', 'arriverions'],
            'If we had taken a taxi, we would have arrived on time.',
            'Conditionnel passé in the main clause: serions arrivés.',
          ),
          gap(
            'g3',
            'Tu ___ me prévenir !',
            'aurais pu',
            ['aurais pu', 'pouvais', 'pourrais'],
            'You could have warned me!',
            'A reproach about the past: aurais pu + infinitive.',
          ),
          gap(
            'g4',
            'J’___ dû vous écouter.',
            'aurais',
            ['aurais', 'avais', 'ai'],
            'I should have listened to you.',
            'J’aurais dû + infinitive = “I should have”.',
          ),
          gap(
            'g5',
            'Si elle ___ plus tôt, elle aurait vu le film.',
            'était venue',
            ['était venue', 'serait venue', 'venait'],
            'If she had come earlier, she would have seen the film.',
            'Si + plus-que-parfait; venir takes être, so the participle agrees.',
          ),
          gap(
            'g6',
            'Ils ___ évité cette dispute s’ils avaient parlé.',
            'auraient',
            ['auraient', 'avaient', 'ont'],
            'They would have avoided this quarrel if they had talked.',
            'Past conditional: auraient + participle.',
          ),
          gap(
            'g7',
            'Si j’avais su, je ne ___ pas parti.',
            'serais',
            ['serais', 'étais', 'suis'],
            'If I had known, I would not have left.',
            'Partir takes être: je serais parti.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', PQP], 3, 4),
      {
        items: [
          sent(
            's1',
            'If I had known, I would have come.',
            ['Si', 'j’avais', 'su,', 'je', 'serais', 'venu.'],
            { extra: ['viendrais'] },
          ),
          sent('s2', 'I should have listened to you.', ['J’aurais', 'dû', 'vous', 'écouter.']),
          sent(
            's3',
            'We could have avoided this mistake.',
            ['Nous', 'aurions', 'pu', 'éviter', 'cette', 'erreur.'],
            { extra: ['pouvions'] },
          ),
          sent('s4', 'She regrets not having called him.', [
            'Elle',
            'regrette',
            'de',
            'ne',
            'pas',
            'l’avoir',
            'appelé.',
          ]),
          sent('s5', 'If only I had succeeded!', ['Si', 'seulement', 'j’avais', 'réussi', '!']),
          sent('s6', 'Unfortunately, it is too late.', [
            'Malheureusement,',
            'il',
            'est',
            'trop',
            'tard.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Sorry, I should have…',
        'Apologise, admit a mistake and forgive.',
        ['communication', 'life-paths'],
        2,
        6,
      ),
      {
        scenes: [
          scene(
            'excuse',
            'An apology',
            '🙇',
            'You forgot a meeting with your colleague Inès. You say tu.',
            [
              say('Inès', 'On t’a attendu une heure !', 'We waited for you for an hour!'),
              you(
                'Je suis désolé, j’aurais dû vous prévenir.',
                [
                  'Je suis désolé, je devais vous prévenir.',
                  'Devais means “was supposed to”. To admit a mistake use j’aurais dû.',
                ],
                [
                  'Je suis désolé, je dois vous prévenir.',
                  'The present does not express a regret about the past: j’aurais dû.',
                ],
              ),
              say(
                'Inès',
                'Ce n’est pas grave, mais la prochaine fois, téléphone !',
                'It is no big deal, but next time, call!',
              ),
              you(
                'Promis, j’appellerai.',
                ['Promis, j’appelais.', 'A promise looks ahead: j’appellerai.'],
                [
                  'Promis, j’aurais appelé.',
                  'The past conditional looks back; a promise needs the future.',
                ],
              ),
            ],
          ),
          scene(
            'regret',
            'A regret',
            '😔',
            'Your friend Paul talks about his studies. You say tu.',
            [
              say(
                'Paul',
                'J’ai arrêté mes études à vingt ans. Je le regrette.',
                'I stopped studying at twenty. I regret it.',
              ),
              you(
                'Si tu avais continué, tu aurais trouvé un meilleur poste.',
                [
                  'Si tu aurais continué, tu aurais trouvé un meilleur poste.',
                  'Never the conditional after si: si tu avais continué.',
                ],
                [
                  'Si tu continuais, tu aurais trouvé un meilleur poste.',
                  'For the past, si needs the plus-que-parfait: si tu avais continué.',
                ],
              ),
              say('Paul', 'Tant pis, c’est trop tard.', 'Too bad, it is too late.'),
              you(
                'Mais non, tu peux toujours reprendre !',
                [
                  'Mais non, tu pourrais toujours reprendre !',
                  'Possible, but here you encourage with a fact: tu peux.',
                ],
                [
                  'Mais non, tu aurais pu reprendre !',
                  'That repeats the regret about the past instead of encouraging.',
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
      meta('Regret blitz', 'True or false? Beat the clock!', ['grammar', PQP], 2, 2),
      {
        seconds: 45,
        statements: [
          tf(
            'b1',
            'The plus-que-parfait is the imparfait of avoir or être plus a participle.',
            true,
          ),
          tf(
            'b2',
            'The past conditional is the conditional of avoir or être plus a participle.',
            true,
          ),
          tf(
            'b3',
            '“Si j’aurais su” is correct.',
            false,
            'Never the conditional after si: Si j’avais su.',
          ),
          tf('b4', '“J’aurais dû” means “I should have”.', true),
          tf('b5', '“Tu aurais pu” means “you could have”.', true),
          tf('b6', 'Si + plus-que-parfait is followed by the past conditional.', true),
          tf(
            'b7',
            'The past conditional of aller uses avoir.',
            false,
            'Aller takes être: je serais allé.',
          ),
          tf('b8', '“Hélas” means “alas”.', true),
          tf('b9', '“La rupture” means a break-up.', true),
          tf('b10', '“Tant pis” means “too bad”.', true),
          tf('b11', 'With être the participle agrees with the subject.', true),
          tf('b12', '“Gâcher” means “to spoil”.', true),
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
          q('c1', 'Complete: “Si tu avais étudié, tu ___ réussi.”', 'aurais', [
            'avais',
            'as',
            'aies',
          ]),
          q('c2', 'Which sentence expresses a regret about the past?', 'J’aurais dû venir.', [
            'Je dois venir.',
            'Je viendrais.',
            'Je viens.',
          ]),
          q('c3', 'The plus-que-parfait of “finir” for “nous” is …', 'nous avions fini', [
            'nous avons fini',
            'nous aurions fini',
            'nous finissions',
          ]),
          q('c4', 'What does “gâcher” mean?', 'to spoil', ['to forgive', 'to avoid', 'to deserve']),
          q('c5', '“Tu aurais pu m’aider” is …', 'a reproach', [
            'a promise',
            'a question about the future',
            'a polite request',
          ]),
          q('c6', 'The past conditional of “aller” for “je” is …', 'je serais allé', [
            'j’aurais allé',
            'j’irais',
            'j’étais allé',
          ]),
          q('c7', '“Si seulement” means …', 'if only', ['even though', 'as soon as', 'unless']),
          q('c8', '“Trop tard” means …', 'too late', ['too early', 'too much', 'not enough']),
        ],
      },
    ),
  ],
};
