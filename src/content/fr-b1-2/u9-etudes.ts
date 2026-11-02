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

const U = 'fr-b1-2-etudes';
const REL = 'fr-b12-compound-relatives' as const;
const TOPIC = 'university-study' as const;

const studies = vocabList(U, 'Studies and university', [
  ['l’inscription', 'enrolment', '📝'],
  ['la filière', 'degree programme', '🎓'],
  ['le cursus', 'course of study', '📚'],
  ['la bourse', 'grant, scholarship', '💶'],
  ['le mémoire', 'dissertation', '📖'],
  ['la soutenance', 'oral defence', '🎤'],
  ['la licence', 'bachelor’s degree', '🎓'],
  ['le master', 'master’s degree', '🏛️'],
  ['le partiel', 'term exam', '✏️'],
  ['le campus', 'campus', '🏫'],
  ['l’amphithéâtre', 'lecture hall', '🏟️'],
  ['la formation', 'training, education', '🧑‍🎓'],
]);

const feelings = vocabList(U, 'Knowledge and feelings', [
  ['le savoir', 'knowledge', '🧠'],
  ['la connaissance', 'knowledge, acquaintance', '💡'],
  ['la curiosité', 'curiosity', '🔍'],
  ['l’inquiétude', 'worry', '😟'],
  ['la fierté', 'pride', '🥇'],
  ['la satisfaction', 'satisfaction', '😊'],
  ['la réussite', 'success', '🏆'],
  ['le stress', 'stress', '😰'],
]);

const verbs = vocabList(U, 'Verbs for learning', [
  ['s’inscrire', 'to enrol', '🖊️'],
  ['réviser', 'to revise', '🔁'],
  ['approfondir', 'to go deeper into', '⛏️'],
  ['maîtriser', 'to master', '🥋'],
  ['retenir', 'to remember', '📌'],
  ['mémoriser', 'to memorise', '🧠'],
  ['se spécialiser', 'to specialise', '🎯'],
  ['s’inquiéter', 'to worry', '😬'],
  ['se réjouir', 'to be delighted', '🥳'],
  ['progresser', 'to make progress', '📈'],
]);

const phrases = vocabList(U, 'Phrases', [
  [
    'La filière dans laquelle je suis inscrit est difficile.',
    'The programme I am enrolled in is hard.',
    '🎓',
  ],
  ['Le professeur auquel j’ai écrit m’a répondu.', 'The teacher I wrote to answered me.', '✉️'],
  ['Voilà le livre dont j’ai besoin.', 'Here is the book I need.', '📘'],
  ['Les amis avec lesquels je révise sont sympas.', 'The friends I revise with are nice.', '👯'],
]);

const vocab = [...studies, ...feelings, ...verbs, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const FORM: [string, 'prep' | 'a' | 'dont', string][] = [
  [
    'La méthode avec laquelle j’étudie est efficace.',
    'prep',
    'The method I study with is effective.',
  ],
  ['La salle dans laquelle nous révisons est calme.', 'prep', 'The room we revise in is quiet.'],
  ['Les amis avec lesquels je travaille sont là.', 'prep', 'The friends I work with are here.'],
  ['Le professeur auquel j’ai écrit m’a répondu.', 'a', 'The teacher I wrote to answered me.'],
  ['Les examens auxquels je pense sont difficiles.', 'a', 'The exams I am thinking of are hard.'],
  [
    'Le cours auquel je participe est passionnant.',
    'a',
    'The course I take part in is fascinating.',
  ],
  ['Voilà le livre dont j’ai besoin.', 'dont', 'Here is the book I need.'],
  [
    'Le sujet dont elle parle est intéressant.',
    'dont',
    'The subject she is talking about is interesting.',
  ],
  [
    'L’étudiant dont le mémoire est prêt sourit.',
    'dont',
    'The student whose dissertation is ready smiles.',
  ],
];

export const etudes: UnitContent = {
  unit: unitFr({
    id: U,
    order: 9,
    title: 'Soif d’apprendre',
    subtitle:
      'Talk about studies, worries and satisfaction and link ideas with lequel, auquel and dont',
    emoji: '🎓',
    goals: [
      'Talk about courses, exams and study plans',
      'Express worry, pride and satisfaction',
      'Link ideas with compound relative pronouns (lequel, auquel, duquel, dont)',
    ],
    grammar: [
      'Préposition + lequel / laquelle / lesquels / lesquelles',
      'auquel, auxquels, auxquelles',
      'dont, duquel',
    ],
    vocabFields: [
      'Studies and university',
      'Knowledge and feelings',
      'Verbs for learning',
      'Phrases',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-studies',
      'flashcards',
      meta('Studies and university', 'Words for courses and exams.', ['vocabulary', TOPIC], 1, 4),
      flashcards(studies),
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
          'l’inscription',
          'la bourse',
          'le mémoire',
          'le partiel',
          'le campus',
          'l’amphithéâtre',
          'la réussite',
          'le stress',
        ),
        [...studies, ...feelings],
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
          's’inscrire',
          'réviser',
          'approfondir',
          'maîtriser',
          'retenir',
          'mémoriser',
          'se spécialiser',
          'se réjouir',
        ),
      ),
    ),

    activity(
      U,
      'listen-studies',
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
          'la filière',
          'le cursus',
          'la soutenance',
          'la licence',
          'le savoir',
          'la curiosité',
          'l’inquiétude',
          'la fierté',
        ),
        vocab.slice(0, 30),
      ),
    ),

    activity(
      U,
      'flash-feelings',
      'flashcards',
      meta(
        'Knowledge and feelings',
        'Words for what you feel about your studies.',
        ['vocabulary', TOPIC],
        1,
        4,
      ),
      flashcards([...feelings, ...verbs.slice(0, 4)]),
    ),

    activity(
      U,
      'spell-studies',
      'spell',
      meta(
        'Spell the studies',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', TOPIC],
        2,
        4,
      ),
      {
        items: [
          sp('sp-bourse', 'unscramble', 'bourse', mean('la bourse'), '💶', 'la bourse'),
          sp('sp-campus', 'unscramble', 'campus', mean('le campus'), '🏫', 'le campus'),
          sp('sp-memoire', 'type', 'mémoire', mean('le mémoire'), '📖', 'le mémoire'),
          sp('sp-licence', 'type', 'licence', mean('la licence'), '🎓', 'la licence'),
          dictation('sp-filiere', 'filière', 'degree programme', 'la filière'),
          dictation('sp-curiosite', 'curiosité', 'curiosity', 'la curiosité'),
        ],
      },
    ),

    activity(
      U,
      'sort-relatives',
      'sortit',
      meta(
        'Which relative pronoun?',
        'Is it preposition + lequel, à + lequel or dont?',
        ['grammar', REL],
        3,
        3,
      ),
      {
        instruction: 'Which type of relative pronoun is used?',
        buckets: [
          { id: 'prep', label: 'preposition + lequel', emoji: '🔗' },
          { id: 'a', label: 'auquel / auxquels', emoji: '➡️' },
          { id: 'dont', label: 'dont', emoji: '⬅️' },
        ],
        items: sortCards('r', FORM),
      },
    ),

    activity(
      U,
      'conj-study',
      'conjugation',
      meta(
        'Verbs for learning',
        'The present tense of verbs for studies.',
        ['grammar', TOPIC],
        2,
        4,
      ),
      {
        tables: [
          presentTable('reviser-1', 'réviser', 'to revise', ['je', 'tu', 'il/elle/on']),
          presentTable('etudier-1', 'étudier', 'to study', ['nous', 'vous', 'ils/elles']),
          presentTable('progresser-1', 'progresser', 'to make progress', [
            'je',
            'nous',
            'ils/elles',
          ]),
          manualTable(
            'inscrire-1',
            's’inscrire',
            'to enrol',
            [
              'm’inscris',
              't’inscris',
              's’inscrit',
              'nous inscrivons',
              'vous inscrivez',
              's’inscrivent',
            ],
            ['je', 'il/elle/on', 'ils/elles'],
          ),
          presentTable('reussir-1', 'réussir', 'to succeed', ['tu', 'il/elle/on', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'gap-relatives',
      'gapfill',
      meta(
        'Complete with a relative pronoun',
        'Choose the right pronoun for the sentence.',
        ['grammar', REL],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'La filière ___ je suis inscrit est difficile.',
            'dans laquelle',
            ['dans laquelle', 'dans lequel', 'dont'],
            'The programme I am enrolled in is hard.',
            'Filière is feminine: dans laquelle.',
          ),
          gap(
            'g2',
            'Le professeur ___ j’ai écrit m’a répondu.',
            'auquel',
            ['auquel', 'duquel', 'dont'],
            'The teacher I wrote to answered me.',
            'Écrire à → auquel for a masculine singular.',
          ),
          gap(
            'g3',
            'Voilà le livre ___ j’ai besoin.',
            'dont',
            ['dont', 'auquel', 'avec lequel'],
            'Here is the book I need.',
            'Avoir besoin de → dont.',
          ),
          gap(
            'g4',
            'Les amis ___ je révise sont sympas.',
            'avec lesquels',
            ['avec lesquels', 'avec lequel', 'auxquels'],
            'The friends I revise with are nice.',
            'Masculine plural: lesquels.',
          ),
          gap(
            'g5',
            'Les examens ___ je pense sont difficiles.',
            'auxquels',
            ['auxquels', 'desquels', 'dont'],
            'The exams I am thinking of are hard.',
            'Penser à → auxquels (masc. plural).',
          ),
          gap(
            'g6',
            'La méthode ___ j’étudie est efficace.',
            'avec laquelle',
            ['avec laquelle', 'avec lequel', 'auquel'],
            'The method I study with is effective.',
            'Méthode is feminine: laquelle.',
          ),
          gap(
            'g7',
            'L’étudiante ___ le mémoire est prêt sourit.',
            'dont',
            ['dont', 'auquel', 'laquelle'],
            'The student whose dissertation is ready smiles.',
            'Dont also means “whose”.',
          ),
          gap(
            'g8',
            'Les questions ___ nous répondons sont simples.',
            'auxquelles',
            ['auxquelles', 'auxquels', 'duquel'],
            'The questions we answer are simple.',
            'Répondre à → auxquelles (feminine plural).',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', REL], 3, 4),
      {
        items: [
          sent(
            's1',
            'Here is the book I need.',
            ['Voilà', 'le', 'livre', 'dont', 'j’ai', 'besoin.'],
            { extra: ['auquel'] },
          ),
          sent(
            's2',
            'The friends I revise with are nice.',
            ['Les', 'amis', 'avec', 'lesquels', 'je', 'révise', 'sont', 'sympas.'],
            { extra: ['lequel'] },
          ),
          sent('s3', 'The teacher I wrote to answered me.', [
            'Le',
            'professeur',
            'auquel',
            'j’ai',
            'écrit',
            'm’a',
            'répondu.',
          ]),
          sent('s4', 'I am proud of my success.', ['Je', 'suis', 'fier', 'de', 'ma', 'réussite.']),
          sent('s5', 'She is worried about the exam.', [
            'Elle',
            's’inquiète',
            'pour',
            'le',
            'partiel.',
          ]),
          sent('s6', 'The programme I chose is demanding.', [
            'La',
            'filière',
            'que',
            'j’ai',
            'choisie',
            'est',
            'exigeante.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Student life',
        'Talk about your studies and your worries.',
        ['communication', TOPIC],
        3,
        6,
      ),
      {
        scenes: [
          scene('inscription', 'Enrolment', '📝', 'You talk to a university secretary. Use vous.', [
            say(
              'La secrétaire',
              'Dans quelle filière voulez-vous vous inscrire ?',
              'Which programme do you want to enrol in?',
            ),
            you(
              'Je voudrais m’inscrire en licence de lettres.',
              [
                'Je voudrais m’inscrire dans licence de lettres.',
                'The set expression is en licence.',
              ],
              ['Je voudrais m’inscrire à licence de lettres.', 'Say en licence.'],
            ),
            say(
              'La secrétaire',
              'Voici le formulaire auquel vous devez répondre.',
              'Here is the form you must fill in.',
            ),
            you(
              'Merci. Et la bourse dont j’ai entendu parler ?',
              [
                'Merci. Et la bourse que j’ai entendu parler ?',
                'Entendre parler de → dont: la bourse dont j’ai entendu parler.',
              ],
              [
                'Merci. Et la bourse laquelle j’ai entendu parler ?',
                'After a preposition use dont, not laquelle alone.',
              ],
            ),
          ]),
          scene(
            'inquiet',
            'Worries',
            '😟',
            'Your friend Chloé worries about an exam. You say tu.',
            [
              say('Chloé', 'Je m’inquiète pour le partiel.', 'I am worried about the exam.'),
              you(
                'Ne t’inquiète pas : tu as bien révisé.',
                [
                  'Ne t’inquiètes pas : tu as bien révisé.',
                  'In the imperative, drop the s: ne t’inquiète pas.',
                ],
                [
                  'Ne t’inquiète pas : tu as bien révises.',
                  'The participle révisé does not change.',
                ],
              ),
              say(
                'Chloé',
                'Merci. La prof avec laquelle j’ai parlé m’a rassurée.',
                'Thanks. The teacher I spoke to reassured me.',
              ),
              you(
                'Tu vois ! Tu seras fière de ta réussite.',
                ['Tu vois ! Tu seras fier de ta réussite.', 'Chloé is a girl: fière.'],
                ['Tu vois ! Tu seras fière à ta réussite.', 'Fier takes de: fière de.'],
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
      meta('Relative pronoun blitz', 'True or false? Beat the clock!', ['grammar', REL], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Dont” replaces de + noun.', true),
          tf('b2', '“Auquel” = à + lequel.', true),
          tf('b3', '“Lesquels” is masculine plural.', true),
          tf('b4', '“Laquelle” agrees with a feminine noun.', true),
          tf('b5', 'After “avoir besoin de”, use “auquel”.', false, 'Avoir besoin de → dont.'),
          tf('b6', '“Avec lequel” is used for a masculine singular noun.', true),
          tf('b7', '“Auxquelles” is feminine plural.', true),
          tf('b8', '“Dont” can mean “whose”.', true),
          tf('b9', '“La bourse” is a scholarship.', true),
          tf('b10', '“Le mémoire” is a memory game.', false, 'Le mémoire is a dissertation.'),
          tf('b11', '“Retenir” means to remember.', true),
          tf('b12', '“Se réjouir” means to be upset.', false, 'It means to be delighted.'),
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
          q('c1', 'Complete: “Le film ___ je parle est ancien.”', 'dont', [
            'auquel',
            'lequel',
            'avec lequel',
          ]),
          q('c2', 'Complete: “Les amis ___ je voyage.”', 'avec lesquels', [
            'avec lequel',
            'auxquels',
            'dont',
          ]),
          q('c3', 'Complete: “La question ___ je réponds.”', 'à laquelle', [
            'de laquelle',
            'dont',
            'avec laquelle',
          ]),
          q('c4', 'What does “le mémoire” mean?', 'dissertation', ['memory', 'memo', 'internship']),
          q('c5', 'Which word means “scholarship”?', 'la bourse', [
            'la filière',
            'le cursus',
            'l’amphithéâtre',
          ]),
          q('c6', '“Approfondir” means …', 'to go deeper into', [
            'to forget',
            'to enrol',
            'to worry',
          ]),
          q('c7', 'Complete: “Le cours ___ je participe.”', 'auquel', [
            'dont',
            'duquel',
            'laquelle',
          ]),
          q('c8', 'What does “la fierté” mean?', 'pride', ['worry', 'curiosity', 'stress']),
        ],
      },
    ),
  ],
};
