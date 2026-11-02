import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  dictation,
  futAnterieurTable,
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

const U = 'fr-b1-2-sport';
const DBL = 'fr-b12-double-pronouns' as const;
const EMP = 'fr-b12-emphasis' as const;
const FA = 'fr-b12-futur-anterieur' as const;
const TOPIC = 'sport' as const;

const sport = vocabList(U, 'Sport and competition', [
  ['le championnat', 'championship, league', '🏆'],
  ['le tournoi', 'tournament', '🎾'],
  ['l’entraîneur', 'coach', '🧑‍🏫'],
  ['l’arbitre', 'referee', '🟨'],
  ['le supporter', 'fan, supporter', '📣'],
  ['le maillot', 'shirt, jersey', '👕'],
  ['le classement', 'ranking', '📊'],
  ['l’entraînement', 'training session', '🏋️'],
  ['la victoire', 'victory', '🥇'],
  ['la défaite', 'defeat', '🥈'],
  ['l’exploit', 'feat', '🌟'],
  ['le record', 'record', '⏱️'],
  ['l’échauffement', 'warm-up', '🤸'],
  ['le dopage', 'doping', '💉'],
]);

const verbs = vocabList(U, 'Verbs of sport', [
  ['remporter', 'to win', '🏅'],
  ['battre', 'to beat', '👊'],
  ['marquer', 'to score', '⚽'],
  ['s’entraîner', 'to train', '🏃'],
  ['s’échauffer', 'to warm up', '🔥'],
  ['disputer', 'to play (a match)', '🤼'],
  ['se qualifier', 'to qualify', '✅'],
  ['encourager', 'to encourage', '👏'],
  ['dépasser', 'to overtake, to exceed', '💨'],
  ['abandonner', 'to give up', '🏳️'],
]);

const events = vocabList(U, 'Events and plans', [
  ['la finale', 'final', '🏁'],
  ['la demi-finale', 'semi-final', '🎯'],
  ['la billetterie', 'ticket office', '🎫'],
  ['la tribune', 'stand', '🏟️'],
  ['la médaille', 'medal', '🥉'],
  ['les Jeux olympiques', 'Olympic Games', '🔥'],
  ['d’ici là', 'by then', '⏳'],
  ['avant que tout soit fini', 'before it is all over', '🔚'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['C’est Paul qui a marqué le but.', 'It is Paul who scored the goal.', '⚽'],
  ['Je te le prête demain.', 'I will lend it to you tomorrow.', '🤝'],
  ['Il va y avoir du sport !', 'There is going to be some action!', '🔥'],
  [
    'Quand l’équipe aura gagné, nous fêterons ça.',
    'When the team has won, we will celebrate.',
    '🎉',
  ],
]);

const vocab = [...sport, ...verbs, ...events, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const ORDER: [string, 'ld' | 'md' | 'en', string][] = [
  ['Je le lui donne.', 'ld', 'I give it to him.'],
  ['Elle la leur montre.', 'ld', 'She shows it to them.'],
  ['Nous les lui envoyons.', 'ld', 'We send them to him.'],
  ['Il me la prête.', 'md', 'He lends it to me.'],
  ['Tu nous les envoies.', 'md', 'You send them to us.'],
  ['Elle te le dit.', 'md', 'She tells it to you.'],
  ['Je t’en parle.', 'en', 'I am talking to you about it.'],
  ['Il m’y emmène.', 'en', 'He takes me there.'],
  ['Elle leur en offre.', 'en', 'She gives them some.'],
];

export const sportUnit: UnitContent = {
  unit: unitFr({
    id: U,
    order: 11,
    title: 'Il va y avoir du sport',
    subtitle: 'Talk about sport and plans, stress what matters and combine two pronouns',
    emoji: '⚽',
    goals: [
      'Talk about competitions, results and training',
      'Combine two pronouns (je te le donne, il leur en parle)',
      'Stress a word with c’est … qui / que and say what will have happened (futur antérieur)',
    ],
    grammar: [
      'Doubles pronoms (le lui, me les, leur en)',
      'C’est … qui / c’est … que',
      'Futur antérieur',
    ],
    vocabFields: ['Sport and competition', 'Verbs of sport', 'Events and plans', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-sport',
      'flashcards',
      meta('Sport and competition', 'Words for matches and results.', ['vocabulary', TOPIC], 1, 4),
      flashcards(sport),
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
          'le championnat',
          'le tournoi',
          'l’arbitre',
          'le supporter',
          'le maillot',
          'la victoire',
          'la médaille',
          'la tribune',
        ),
        [...sport, ...events],
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
          'remporter',
          'battre',
          'marquer',
          's’échauffer',
          'disputer',
          'se qualifier',
          'dépasser',
          'abandonner',
        ),
      ),
    ),

    activity(
      U,
      'listen-sport',
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
          'le classement',
          'l’entraînement',
          'la défaite',
          'l’exploit',
          'le record',
          'la finale',
          'la billetterie',
          'd’ici là',
        ),
        vocab.slice(0, 36),
      ),
    ),

    activity(
      U,
      'flash-events',
      'flashcards',
      meta('Events and plans', 'Words for big events and plans.', ['vocabulary', TOPIC], 1, 4),
      flashcards([...verbs, ...events]),
    ),

    activity(
      U,
      'spell-sport',
      'spell',
      meta(
        'Spell the sport',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', TOPIC],
        2,
        4,
      ),
      {
        items: [
          sp('sp-arbitre', 'unscramble', 'arbitre', mean('l’arbitre'), '🟨', 'l’arbitre'),
          sp('sp-maillot', 'unscramble', 'maillot', mean('le maillot'), '👕', 'le maillot'),
          sp('sp-tournoi', 'type', 'tournoi', mean('le tournoi'), '🎾', 'le tournoi'),
          sp('sp-victoire', 'type', 'victoire', mean('la victoire'), '🥇', 'la victoire'),
          dictation('sp-defaite', 'défaite', 'defeat', 'la défaite'),
          dictation('sp-exploit', 'exploit', 'feat', 'l’exploit'),
        ],
      },
    ),

    activity(
      U,
      'sort-pronouns',
      'sortit',
      meta(
        'Which pronoun order?',
        'Sort the double pronouns by their pattern.',
        ['grammar', DBL],
        3,
        3,
      ),
      {
        instruction: 'Which pattern does the sentence follow?',
        buckets: [
          { id: 'ld', label: 'le / la / les + lui / leur', emoji: '1️⃣' },
          { id: 'md', label: 'me / te / nous / vous + le / la / les', emoji: '2️⃣' },
          { id: 'en', label: 'pronoun + y / en', emoji: '3️⃣' },
        ],
        items: sortCards('o', ORDER),
      },
    ),

    activity(
      U,
      'conj-futur-anterieur',
      'conjugation',
      meta(
        'The futur antérieur',
        'The future of avoir or être plus the participle.',
        ['grammar', FA],
        3,
        4,
      ),
      {
        tables: [
          futAnterieurTable('finir-1', 'finir', 'to finish', ['je', 'tu', 'il/elle/on']),
          futAnterieurTable('gagner-1', 'gagner', 'to win', ['nous', 'vous', 'ils/elles']),
          futAnterieurTable('arriver-1', 'arriver', 'to arrive', ['je', 'nous', 'ils/elles']),
          futAnterieurTable('partir-1', 'partir', 'to leave', ['tu', 'il/elle/on', 'vous'], true),
          futAnterieurTable('faire-1', 'faire', 'to do', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-double',
      'gapfill',
      meta('Two pronouns', 'Answer with two pronouns in the right order.', ['grammar', DBL], 3, 5),
      {
        items: [
          gap(
            'g1',
            'Tu donnes le ballon à Paul ? — Oui, je ___ donne.',
            'le lui',
            ['le lui', 'lui le', 'le leur'],
            'Do you give the ball to Paul? Yes, I give it to him.',
            'le before lui.',
          ),
          gap(
            'g2',
            'Il te prête sa raquette ? — Oui, il ___ prête.',
            'me la',
            ['me la', 'la me', 'lui la'],
            'Does he lend you his racket? Yes, he lends it to me.',
            'me before la.',
          ),
          gap(
            'g3',
            'Tu montres les photos aux enfants ? — Oui, je ___ montre.',
            'les leur',
            ['les leur', 'leur les', 'les lui'],
            'Do you show the photos to the children? Yes, I show them to them.',
            'les before leur.',
          ),
          gap(
            'g4',
            'Vous m’avez donné des conseils ? — Oui, je ___ ai donné.',
            'vous en',
            ['vous en', 'en vous', 'les vous'],
            'Did you give me some advice? Yes, I gave you some.',
            'Vous before en.',
          ),
          gap(
            'g5',
            'Tu parles du match à Léa ? — Oui, je ___ parle.',
            'lui en',
            ['lui en', 'en lui', 'le lui'],
            'Do you talk about the match to Léa? Yes, I talk to her about it.',
            'lui before en.',
          ),
          gap(
            'g6',
            'Elle nous envoie les billets ? — Oui, elle ___ envoie.',
            'nous les',
            ['nous les', 'les nous', 'leur les'],
            'Does she send us the tickets? Yes, she sends them to us.',
            'nous before les.',
          ),
          gap(
            'g7',
            'Vous allez au stade ? — Oui, nous ___ allons ce soir.',
            'y',
            ['y', 'en', 'le'],
            'Are you going to the stadium? Yes, we are going there tonight.',
            'Y replaces à + place.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-emphasis',
      'gapfill',
      meta('C’est … qui / que', 'Choose qui or que to stress a word.', ['grammar', EMP], 3, 4),
      {
        items: [
          gap(
            'e1',
            'C’est Paul ___ a marqué le but.',
            'qui',
            ['qui', 'que', 'dont'],
            'It is Paul who scored the goal.',
            'Qui replaces the subject.',
          ),
          gap(
            'e2',
            'C’est ce match ___ j’ai préféré.',
            'que',
            ['que', 'qui', 'où'],
            'It is this match that I preferred.',
            'Que replaces the object.',
          ),
          gap(
            'e3',
            'Ce sont les supporters ___ chantent.',
            'qui',
            ['qui', 'que', 'dont'],
            'It is the fans who are singing.',
            'Qui, subject; ce sont before a plural.',
          ),
          gap(
            'e4',
            'C’est à Lyon ___ ils jouent la finale.',
            'que',
            ['que', 'qui', 'où'],
            'It is in Lyon that they play the final.',
            'Que after a place or time.',
          ),
          gap(
            'e5',
            'C’est moi ___ ai gagné.',
            'qui',
            ['qui', 'que', 'ça'],
            'It was I who won.',
            'Qui + verb agrees with moi: ai.',
          ),
          gap(
            'e6',
            'C’est demain ___ commence le tournoi.',
            'que',
            ['que', 'qui', 'dont'],
            'It is tomorrow that the tournament starts.',
            'Que stresses the time.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-futur-anterieur',
      'gapfill',
      meta(
        'What will have happened',
        'Complete with the futur antérieur or the futur simple.',
        ['grammar', FA],
        3,
        4,
      ),
      {
        items: [
          gap(
            'f1',
            'Quand j’___ fini, je t’appellerai.',
            'aurai',
            ['aurai', 'avais', 'aurais'],
            'When I have finished, I will call you.',
            'Futur antérieur: aurai + participle.',
          ),
          gap(
            'f2',
            'Dès qu’il ___ arrivé, nous commencerons.',
            'sera',
            ['sera', 'était', 'serait'],
            'As soon as he has arrived, we will start.',
            'Arriver takes être: sera arrivé.',
          ),
          gap(
            'f3',
            'Demain à midi, l’équipe ___ gagné la finale.',
            'aura',
            ['aura', 'avait', 'aurait'],
            'Tomorrow at noon the team will have won the final.',
            'A future action completed before a point.',
          ),
          gap(
            'f4',
            'Quand nous ___ partis, la fête commencera.',
            'serons',
            ['serons', 'étions', 'sommes'],
            'When we have left, the party will start.',
            'Partir takes être: serons partis.',
          ),
          gap(
            'f5',
            'Elle ___ rentrée avant vingt heures.',
            'sera',
            ['sera', 'était', 'serait'],
            'She will have come home before eight.',
            'Elle sera rentrée: the participle agrees.',
          ),
          gap(
            'f6',
            'Lorsque tu ___ ton choix, dis-le-moi.',
            'auras fait',
            ['auras fait', 'as fait', 'avais fait'],
            'When you have made your choice, tell me.',
            'Futur antérieur of faire.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', DBL], 3, 4),
      {
        items: [
          sent('s1', 'I give it to him.', ['Je', 'le', 'lui', 'donne.'], { extra: ['lui'] }),
          sent('s2', 'He lends it to me.', ['Il', 'me', 'la', 'prête.']),
          sent('s3', 'It is Paul who scored.', ['C’est', 'Paul', 'qui', 'a', 'marqué.'], {
            extra: ['que'],
          }),
          sent('s4', 'It is in Lyon that we play.', [
            'C’est',
            'à',
            'Lyon',
            'que',
            'nous',
            'jouons.',
          ]),
          sent('s5', 'When she has won, we will celebrate.', [
            'Quand',
            'elle',
            'aura',
            'gagné,',
            'nous',
            'fêterons',
            'ça.',
          ]),
          sent('s6', 'She talks to them about it.', ['Elle', 'leur', 'en', 'parle.']),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Big match',
        'Plan a match with friends and share tickets.',
        ['communication', TOPIC],
        3,
        6,
      ),
      {
        scenes: [
          scene(
            'billets',
            'The tickets',
            '🎫',
            'Your friend Marc asks about the tickets. You say tu.',
            [
              say(
                'Marc',
                'Tu as les billets pour la finale ?',
                'Do you have the tickets for the final?',
              ),
              you(
                'Oui, je te les donne demain.',
                ['Oui, je les te donne demain.', 'With me/te/nous/vous the order is te les.'],
                ['Oui, je te leur donne demain.', 'Leur is for a third person; here it is te les.'],
              ),
              say('Marc', 'Et ton frère, il vient ?', 'And your brother, is he coming?'),
              you(
                'Oui, je lui en ai déjà donné un.',
                ['Oui, je en lui ai déjà donné un.', 'The order is lui en.'],
                ['Oui, je lui le ai déjà donné un.', 'With a quantity (un) use lui en.'],
              ),
            ],
          ),
          scene(
            'equipe',
            'Supporting the team',
            '📣',
            'You chat with a fan after a match. You say tu.',
            [
              say('Julie', 'Qui a marqué le but ?', 'Who scored the goal?'),
              you(
                'C’est Karim qui a marqué le but.',
                ['C’est Karim que a marqué le but.', 'The subject is replaced by qui.'],
                [
                  'C’est Karim dont a marqué le but.',
                  'Dont is not used here; qui stresses the subject.',
                ],
              ),
              say('Julie', 'Quand sera la prochaine finale ?', 'When is the next final?'),
              you(
                'Quand l’équipe aura gagné la demi-finale.',
                [
                  'Quand l’équipe a gagné la demi-finale.',
                  'The final comes after: use the futur antérieur, aura gagné.',
                ],
                [
                  'Quand l’équipe gagnait la demi-finale.',
                  'The imparfait describes the past; here we look ahead.',
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
      meta('Sport blitz', 'True or false? Beat the clock!', ['grammar', DBL], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Je le lui donne” is correct.', true),
          tf('b2', '“Je lui le donne” is correct.', false, 'Le goes before lui: Je le lui donne.'),
          tf('b3', '“Il me la prête” is correct.', true),
          tf('b4', 'Y and en come last when combined.', true),
          tf('b5', '“C’est Paul qui joue” stresses the subject.', true),
          tf('b6', '“Que” stresses an object or a circumstance.', true),
          tf('b7', 'The futur antérieur uses the futur simple of avoir or être.', true),
          tf('b8', 'The futur antérieur says an action will be finished before another.', true),
          tf('b9', '“L’arbitre” is the referee.', true),
          tf(
            'b10',
            '“La défaite” means victory.',
            false,
            'La défaite is defeat; la victoire is victory.',
          ),
          tf('b11', '“Remporter” means to win.', true),
          tf('b12', '“Le maillot” is a shirt.', true),
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
          q('c1', 'Complete: “Tu me prêtes ton maillot ? — Oui, je ___ prête.”', 'te le', [
            'le te',
            'lui le',
            'te lui',
          ]),
          q('c2', 'Complete: “C’est elle ___ a gagné.”', 'qui', ['que', 'dont', 'où']),
          q('c3', 'Complete: “Quand j’___ terminé, je dormirai.”', 'aurai', [
            'avais',
            'aurais',
            'ai',
          ]),
          q('c4', 'What does “le classement” mean?', 'the ranking', [
            'the referee',
            'the medal',
            'the final',
          ]),
          q('c5', 'Complete: “Tu parles de ça à Paul ? — Oui, je ___ parle.”', 'lui en', [
            'en lui',
            'le lui',
            'lui y',
          ]),
          q('c6', '“Marquer” means …', 'to score', ['to lose', 'to train', 'to give up']),
          q('c7', 'The futur antérieur of “finir” for “nous” is …', 'nous aurons fini', [
            'nous avions fini',
            'nous finirons',
            'nous aurions fini',
          ]),
          q('c8', 'What does “d’ici là” mean?', 'by then', [
            'from here',
            'over there',
            'right now',
          ]),
        ],
      },
    ),
  ],
};
