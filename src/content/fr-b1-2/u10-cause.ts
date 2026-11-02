import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  dictation,
  gap,
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

const U = 'fr-b1-2-cause';
const CAUSE = 'fr-b12-cause-consequence' as const;
const PART = 'fr-b12-participe-present' as const;
const TOPIC = 'media-news' as const;

const events = vocabList(U, 'News and incidents', [
  ['la grève', 'strike', '✊'],
  ['la coupure', 'outage, cut', '🔌'],
  ['l’embouteillage', 'traffic jam', '🚗'],
  ['l’incendie', 'fire', '🔥'],
  ['les dégâts', 'damage', '🏚️'],
  ['l’enquête', 'investigation', '🕵️'],
  ['le témoin', 'witness', '👀'],
  ['le blessé', 'injured person', '🤕'],
  ['le sauveteur', 'rescuer', '🚒'],
  ['la décision', 'decision', '⚖️'],
  ['la mesure', 'measure', '📏'],
  ['l’effet', 'effect', '🎬'],
]);

const causes = vocabList(U, 'Cause and effect', [
  ['la cause', 'cause', '🔙'],
  ['la conséquence', 'consequence', '🔜'],
  ['le résultat', 'result', '🏁'],
  ['l’origine', 'origin', '🌱'],
  ['le responsable', 'person responsible', '👤'],
  ['l’impact', 'impact', '💥'],
  ['le motif', 'reason, motive', '❓'],
  ['la raison', 'reason', '🧩'],
]);

const verbs = vocabList(U, 'Verbs of cause and effect', [
  ['provoquer', 'to cause, to provoke', '💢'],
  ['causer', 'to cause', '⚠️'],
  ['entraîner', 'to lead to', '🔗'],
  ['résulter de', 'to result from', '↩️'],
  ['perturber', 'to disrupt', '🌀'],
  ['bloquer', 'to block', '🚧'],
  ['retarder', 'to delay', '⏳'],
  ['inonder', 'to flood', '🌊'],
  ['expliquer par', 'to explain by', '💡'],
  ['découler de', 'to follow from', '⬇️'],
]);

const connectors = vocabList(U, 'Linking cause and effect', [
  ['à cause de', 'because of', '👎'],
  ['grâce à', 'thanks to', '👍'],
  ['en raison de', 'owing to', '📋'],
  ['puisque', 'since (obvious reason)', '✔️'],
  ['vu que', 'given that', '🔜'],
  ['donc', 'therefore', '➡️'],
  ['par conséquent', 'consequently', '⏩'],
  ['si bien que', 'so that, with the result that', '🎯'],
  ['tellement … que', 'so … that', '📈'],
  ['c’est pourquoi', 'that is why', '🧭'],
]);

const vocab = [...events, ...causes, ...verbs, ...connectors];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const ROLE: [string, 'cause' | 'effect', string][] = [
  [
    'Le train est en retard parce qu’il y a une panne.',
    'cause',
    'The train is late because there is a breakdown.',
  ],
  ['Comme il pleut, le match est annulé.', 'cause', 'As it is raining, the match is cancelled.'],
  [
    'À cause de la grève, les bus ne circulent pas.',
    'cause',
    'Because of the strike, the buses are not running.',
  ],
  [
    'Grâce aux sauveteurs, personne n’est blessé.',
    'cause',
    'Thanks to the rescuers, nobody is injured.',
  ],
  ['Puisque tu es là, aide-moi.', 'cause', 'Since you are here, help me.'],
  [
    'Il y a une panne ; donc le train est en retard.',
    'effect',
    'There is a breakdown; so the train is late.',
  ],
  [
    'Il a tellement plu que la route est inondée.',
    'effect',
    'It rained so much that the road is flooded.',
  ],
  [
    'Le pont est fermé ; par conséquent, il faut faire un détour.',
    'effect',
    'The bridge is closed; consequently, we must make a detour.',
  ],
  [
    'Il y a une grève, c’est pourquoi les bus sont rares.',
    'effect',
    'There is a strike, that is why buses are rare.',
  ],
];

export const cause: UnitContent = {
  unit: unitFr({
    id: U,
    order: 10,
    title: 'Cause et conséquence',
    subtitle:
      'Explain why things happen and what follows, using connectors and the present participle',
    emoji: '🔗',
    goals: [
      'Describe events in the news: strikes, breakdowns, storms',
      'Give causes (parce que, puisque, grâce à, à cause de)',
      'Give consequences (donc, si bien que, tellement … que) and use the participe présent',
    ],
    grammar: [
      'Connecteurs de cause',
      'Connecteurs de conséquence',
      'tellement … que',
      'Participe présent (cause)',
    ],
    vocabFields: [
      'News and incidents',
      'Cause and effect',
      'Verbs of cause and effect',
      'Linking cause and effect',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-events',
      'flashcards',
      meta(
        'News and incidents',
        'Words for events that make the news.',
        ['vocabulary', TOPIC],
        1,
        4,
      ),
      flashcards(events),
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
          'la grève',
          'la coupure',
          'l’embouteillage',
          'l’incendie',
          'les dégâts',
          'le témoin',
          'le blessé',
          'le sauveteur',
        ),
        events,
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
        ['vocabulary', CAUSE],
        2,
        3,
      ),
      memory(
        byDe(
          vocab,
          'provoquer',
          'entraîner',
          'résulter de',
          'perturber',
          'bloquer',
          'retarder',
          'inonder',
          'découler de',
        ),
      ),
    ),

    activity(
      U,
      'listen-cause',
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
          'l’enquête',
          'la décision',
          'la conséquence',
          'l’origine',
          'le motif',
          'à cause de',
          'grâce à',
          'donc',
        ),
        vocab.slice(0, 34),
      ),
    ),

    activity(
      U,
      'flash-links',
      'flashcards',
      meta('Linking words', 'Connectors of cause and consequence.', ['vocabulary', CAUSE], 2, 4),
      flashcards([...causes, ...connectors]),
    ),

    activity(
      U,
      'spell-cause',
      'spell',
      meta(
        'Spell the news',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', TOPIC],
        2,
        4,
      ),
      {
        items: [
          sp('sp-greve', 'unscramble', 'grève', mean('la grève'), '✊', 'la grève'),
          sp('sp-coupure', 'unscramble', 'coupure', mean('la coupure'), '🔌', 'la coupure'),
          sp('sp-incendie', 'type', 'incendie', mean('l’incendie'), '🔥', 'l’incendie'),
          sp('sp-enquete', 'type', 'enquête', mean('l’enquête'), '🕵️', 'l’enquête'),
          dictation('sp-consequence', 'conséquence', 'consequence', 'la conséquence'),
          dictation('sp-grace', 'grâce à', 'thanks to', 'grâce à'),
        ],
      },
    ),

    activity(
      U,
      'sort-cause',
      'sortit',
      meta(
        'Cause or consequence?',
        'Does the sentence give the cause or the consequence?',
        ['grammar', CAUSE],
        2,
        3,
      ),
      {
        instruction: 'Which part is introduced: the cause or the effect?',
        buckets: [
          { id: 'cause', label: 'Gives the cause', emoji: '🔙' },
          { id: 'effect', label: 'Gives the consequence', emoji: '🔜' },
        ],
        items: sortCards('s', ROLE),
      },
    ),

    activity(
      U,
      'conj-cause',
      'conjugation',
      meta(
        'Cause and effect verbs',
        'The present tense of verbs for news reports.',
        ['grammar', TOPIC],
        2,
        4,
      ),
      {
        tables: [
          presentTable('provoquer-1', 'provoquer', 'to cause', ['je', 'tu', 'il/elle/on']),
          presentTable('bloquer-1', 'bloquer', 'to block', ['nous', 'vous', 'ils/elles']),
          presentTable('retarder-1', 'retarder', 'to delay', ['je', 'nous', 'ils/elles']),
          presentTable('inonder-1', 'inonder', 'to flood', ['tu', 'il/elle/on', 'vous']),
          presentTable('perturber-1', 'perturber', 'to disrupt', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-cause',
      'gapfill',
      meta(
        'Cause or consequence word',
        'Choose the connector that fits.',
        ['grammar', CAUSE],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Le match est annulé ___ la tempête.',
            'à cause de',
            ['à cause de', 'grâce à', 'donc'],
            'The match is cancelled because of the storm.',
            'À cause de + noun gives a negative cause.',
          ),
          gap(
            'g2',
            '___ aux secours, il n’y a pas eu de blessés.',
            'Grâce',
            ['Grâce', 'À cause', 'Donc'],
            'Thanks to the rescue services, nobody was hurt.',
            'Grâce à gives a positive cause.',
          ),
          gap(
            'g3',
            'Il n’y a plus de courant ; ___ nous allumons des bougies.',
            'donc',
            ['donc', 'car', 'puisque'],
            'There is no more power; so we light candles.',
            'Donc introduces the consequence.',
          ),
          gap(
            'g4',
            'Le métro est arrêté, ___ je suis en retard.',
            'c’est pourquoi',
            ['c’est pourquoi', 'parce que', 'grâce à'],
            'The metro has stopped, that is why I am late.',
            'C’est pourquoi introduces a consequence.',
          ),
          gap(
            'g5',
            'Il a ___ plu que la route est inondée.',
            'tellement',
            ['tellement', 'puisque', 'donc'],
            'It rained so much that the road is flooded.',
            'Tellement … que = so … that.',
          ),
          gap(
            'g6',
            '___ tu es là, tu peux m’aider.',
            'Puisque',
            ['Puisque', 'Donc', 'Si bien que'],
            'Since you are here, you can help me.',
            'Puisque gives a reason both people know.',
          ),
          gap(
            'g7',
            'Il n’est pas venu ___ il était malade.',
            'parce qu’',
            ['parce qu’', 'donc', 'par conséquent'],
            'He did not come because he was ill.',
            'Parce que introduces the cause.',
          ),
          gap(
            'g8',
            'Le pont est fermé ; ___, il faut faire un détour.',
            'par conséquent',
            ['par conséquent', 'puisque', 'à cause de'],
            'The bridge is closed; consequently we must make a detour.',
            'Par conséquent introduces a result.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-participle',
      'gapfill',
      meta(
        'Present participle as cause',
        'Complete the sentence with the participe présent.',
        ['grammar', PART],
        3,
        4,
      ),
      {
        items: [
          gap(
            'c1',
            '___ malade, il est resté au lit.',
            'Étant',
            ['Étant', 'Être', 'Été'],
            'Being ill, he stayed in bed.',
            'Étant = participe présent of être.',
          ),
          gap(
            'c2',
            '___ peur du noir, elle laisse la lumière.',
            'Ayant',
            ['Ayant', 'Avoir', 'Eu'],
            'Being afraid of the dark, she leaves the light on.',
            'Ayant = participe présent of avoir.',
          ),
          gap(
            'c3',
            '___ la grève, nous avons pris un taxi.',
            'Connaissant',
            ['Connaissant', 'Connaître', 'Connu'],
            'Knowing about the strike, we took a taxi.',
            'Connaître → connaissant.',
          ),
          gap(
            'c4',
            '___ trop vite, le chauffeur a perdu le contrôle.',
            'Roulant',
            ['Roulant', 'Rouler', 'Roulé'],
            'Driving too fast, the driver lost control.',
            'Rouler → roulant.',
          ),
          gap(
            'c5',
            '___ son temps, elle a bien préparé son exposé.',
            'Prenant',
            ['Prenant', 'Prendre', 'Pris'],
            'Taking her time, she prepared her talk well.',
            'Prendre → prenant.',
          ),
          gap(
            'c6',
            '___ la réponse, elle a rappelé.',
            'Ignorant',
            ['Ignorant', 'Ignorer', 'Ignoré'],
            'Not knowing the answer, she called back.',
            'Ignorer → ignorant.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', CAUSE], 3, 4),
      {
        items: [
          sent(
            's1',
            'The train is late because of a breakdown.',
            ['Le', 'train', 'est', 'en', 'retard', 'à', 'cause', 'd’une', 'panne.'],
            { extra: ['grâce'] },
          ),
          sent('s2', 'It rained so much that the road is flooded.', [
            'Il',
            'a',
            'tellement',
            'plu',
            'que',
            'la',
            'route',
            'est',
            'inondée.',
          ]),
          sent('s3', 'Thanks to the rescuers, nobody is hurt.', [
            'Grâce',
            'aux',
            'sauveteurs,',
            'personne',
            'n’est',
            'blessé.',
          ]),
          sent('s4', 'There is a strike, that is why I am walking.', [
            'Il',
            'y',
            'a',
            'grève,',
            'c’est',
            'pourquoi',
            'je',
            'marche.',
          ]),
          sent('s5', 'Since you know, tell me.', ['Puisque', 'tu', 'le', 'sais,', 'dis-le-moi.']),
          sent('s6', 'Being tired, she went to bed.', [
            'Étant',
            'fatiguée,',
            'elle',
            'est',
            'allée',
            'se',
            'coucher.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'What happened?',
        'Explain a delay and its consequences.',
        ['communication', TOPIC],
        3,
        6,
      ),
      {
        scenes: [
          scene('retard', 'A delay', '🚉', 'You explain to your boss why you are late. Use vous.', [
            say(
              'Le chef',
              'Vous êtes en retard. Que s’est-il passé ?',
              'You are late. What happened?',
            ),
            you(
              'À cause d’une panne de métro, je suis arrivé trop tard.',
              [
                'Grâce à une panne de métro, je suis arrivé trop tard.',
                'Grâce à is only for positive causes.',
              ],
              [
                'Donc une panne de métro, je suis arrivé trop tard.',
                'Donc cannot introduce a noun; use à cause de.',
              ],
            ),
            say('Le chef', 'Et le téléphone ?', 'And the phone?'),
            you(
              'Ma batterie était vide, c’est pourquoi je n’ai pas pu vous prévenir.',
              [
                'Ma batterie était vide, parce que je n’ai pas pu vous prévenir.',
                'Parce que introduces the cause, not the consequence.',
              ],
              [
                'Ma batterie était vide, puisque je n’ai pas pu vous prévenir.',
                'Puisque gives a reason already known; here the flat battery explains the effect.',
              ],
            ),
          ]),
          scene(
            'tempete',
            'After the storm',
            '🌪️',
            'A neighbour asks about the damage. You say tu.',
            [
              say('Le voisin', 'Il y a eu beaucoup de dégâts ?', 'Was there a lot of damage?'),
              you(
                'Il a tellement plu que la cave est inondée.',
                [
                  'Il a tellement plu la cave est inondée.',
                  'Tellement needs que before the result.',
                ],
                ['Il a si plu que la cave est inondée.', 'Plu is a verb: use tellement, not si.'],
              ),
              say('Le voisin', 'Et personne n’est blessé ?', 'And nobody is hurt?'),
              you(
                'Non, grâce aux pompiers, tout va bien.',
                [
                  'Non, à cause des pompiers, tout va bien.',
                  'À cause de is negative; thanks to the firefighters is grâce à.',
                ],
                [
                  'Non, donc aux pompiers, tout va bien.',
                  'Donc is not followed by a noun with aux.',
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
      meta('Cause blitz', 'True or false? Beat the clock!', ['grammar', CAUSE], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Grâce à” gives a positive cause.', true),
          tf('b2', '“À cause de” is followed by a noun.', true),
          tf('b3', '“Donc” introduces a consequence.', true),
          tf('b4', '“Puisque” introduces a reason known to everyone.', true),
          tf('b5', '“C’est pourquoi” introduces a cause.', false, 'It introduces a consequence.'),
          tf('b6', '“Tellement … que” expresses a consequence.', true),
          tf('b7', 'The participe présent of “avoir” is “ayant”.', true),
          tf('b8', 'The participe présent can give a reason.', true),
          tf('b9', '“La grève” means strike.', true),
          tf('b10', '“Le témoin” is the person responsible.', false, 'Le témoin is the witness.'),
          tf('b11', '“Entraîner” can mean “to lead to”.', true),
          tf(
            'b12',
            '“Inonder” means to delay.',
            false,
            'Inonder is to flood; retarder is to delay.',
          ),
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
          q('c1', 'Complete: “Il est malade, ___ il reste chez lui.”', 'donc', [
            'grâce à',
            'car',
            'puisque',
          ]),
          q('c2', 'Complete: “Le vol est annulé ___ la tempête.”', 'à cause de', [
            'grâce à',
            'donc',
            'c’est pourquoi',
          ]),
          q('c3', 'Which connector gives a positive cause?', 'grâce à', [
            'à cause de',
            'donc',
            'si bien que',
          ]),
          q('c4', 'The participe présent of “prendre” is …', 'prenant', [
            'prendant',
            'pris',
            'prendre',
          ]),
          q('c5', 'What does “les dégâts” mean?', 'damage', ['strike', 'witness', 'decision']),
          q('c6', 'Complete: “Il a ___ neigé que les routes sont fermées.”', 'tellement', [
            'donc',
            'puisque',
            'grâce',
          ]),
          q('c7', '“La conséquence” means …', 'the consequence', [
            'the cause',
            'the origin',
            'the reason',
          ]),
          q('c8', 'What does “perturber” mean?', 'to disrupt', [
            'to cancel',
            'to explain',
            'to rescue',
          ]),
        ],
      },
    ),
  ],
};
