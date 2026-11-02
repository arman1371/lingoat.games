import { byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  meta,
  pcTable,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  withLesson,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-1-apprendre';

const studies = vocabList(U, 'Studies and training', [
  ['la formation', 'training, course', '🎓'],
  ['la thèse', 'thesis', '📜'],
  ['la période de stage', 'internship period', '🧑‍💼'],
  ['l’alternance', 'work-study programme', '🔀'],
  ['la bourse', 'grant, scholarship', '💶'],
  ['s’inscrire', 'to enrol', '📝'],
  ['le cours magistral', 'lecture', '🏛️'],
  ['la licence', 'bachelor’s degree', '🎓'],
  ['le master', 'master’s degree', '🎓'],
  ['redoubler', 'to repeat a year', '🔁'],
  ['l’enseignant', 'teacher, lecturer', '🧑‍🏫'],
  ['l’apprentissage', 'learning, apprenticeship', '🌱'],
]);

const career = vocabList(U, 'Applying for a job', [
  ['la lettre de motivation', 'cover letter', '✉️'],
  ['postuler', 'to apply', '📨'],
  ['le recruteur', 'recruiter', '🕵️'],
  ['les références', 'references', '📇'],
  ['la candidature', 'application', '📂'],
  ['le poste à pourvoir', 'vacancy', '🪑'],
  ['l’annonce', 'job ad', '📢'],
  ['évoluer', 'to progress in a career', '📈'],
  ['le cursus', 'course of study, track', '🛤️'],
  ['bénévole', 'volunteer', '🙋'],
  ['l’avancement', 'career advancement', '⬆️'],
  ['la période d’essai', 'probation period', '🧪'],
]);

const discussion = vocabList(U, 'Agreeing and disagreeing', [
  ['tout à fait', 'absolutely, exactly', '👍'],
  ['au contraire', 'on the contrary', '🔄'],
  ['certes', 'admittedly', '🤝'],
  ['ça dépend', 'it depends', '🤷'],
  ['dans une certaine mesure', 'to a certain extent', '📏'],
  ['je partage votre avis', 'I share your view', '🫱'],
  ['je ne suis pas convaincu', 'I am not convinced', '🤨'],
  ['d’ailleurs', 'besides, by the way', '➕'],
]);

const vocab = [...studies, ...career, ...discussion];

const STANCE_CARDS: [string, 'agree' | 'disagree' | 'nuance', string][] = [
  ['tout à fait', 'agree', 'absolutely'],
  ['je suis d’accord', 'agree', 'I agree'],
  ['c’est exact', 'agree', 'that is right'],
  ['je partage votre avis', 'agree', 'I share your view'],
  ['pas du tout', 'disagree', 'not at all'],
  ['je ne suis pas d’accord', 'disagree', 'I do not agree'],
  ['au contraire', 'disagree', 'on the contrary'],
  ['je ne suis pas convaincu', 'disagree', 'I am not convinced'],
  ['certes, mais', 'nuance', 'admittedly, but'],
  ['ça dépend', 'nuance', 'it depends'],
  ['dans une certaine mesure', 'nuance', 'to a certain extent'],
  ['d’un côté, de l’autre', 'nuance', 'on one side, on the other'],
];

export const apprendre: UnitContent = {
  unit: unitFr({
    id: U,
    order: 8,
    title: 'Apprendre autrement',
    subtitle: 'Studies, training and job applications; agree and disagree',
    emoji: '🎓',
    goals: [
      'Talk about studies, training and applying for a job',
      'Do two things at once with the gerund',
      'Agree, disagree and nuance an opinion; make the participle agree after avoir',
    ],
    grammar: [
      'The gerund (en + -ant)',
      'Participle agreement with avoir',
      'Agreeing and disagreeing',
    ],
    vocabFields: ['Studies and training', 'Applying for a job', 'Agreeing and disagreeing'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-studies',
      'flashcards',
      meta(
        'Studies and training',
        'Degrees, courses and grants.',
        ['vocabulary', 'further-education'],
        1,
        4,
      ),
      flashcards(studies),
    ),
    activity(
      U,
      'flash-career',
      'flashcards',
      meta(
        'Applying for a job',
        'Words for applications and recruiters.',
        ['vocabulary', 'job-search'],
        1,
        4,
      ),
      flashcards(career),
    ),
    activity(
      U,
      'flash-discussion',
      'flashcards',
      meta(
        'Agreeing and disagreeing',
        'Phrases to take part in a discussion.',
        ['vocabulary', 'opinions-presenting'],
        1,
        3,
      ),
      flashcards(discussion),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the meaning of the words.',
        ['vocabulary', 'further-education'],
        1,
        3,
      ),
      quizDeEn(
        byDe(
          vocab,
          'l’alternance',
          'la bourse',
          'redoubler',
          'la lettre de motivation',
          'postuler',
          'le poste à pourvoir',
          'la période d’essai',
          'certes',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'listen-apprendre',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'further-education'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la période de stage',
          'le cours magistral',
          's’inscrire',
          'le recruteur',
          'évoluer',
          'bénévole',
          'au contraire',
          'd’ailleurs',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'gap-gerund',
      'gapfill',
      {
        ...meta(
          'Two things at once',
          'Complete with the gerund (en + -ant).',
          ['grammar', 'fr-b11-gerund', 'further-education'],
          2,
          5,
        ),
        lesson: 'fr-b11-gerund',
      },
      {
        items: [
          gap(
            'g1',
            'Elle apprend le français ___ des films.',
            'en regardant',
            ['en regardant', 'regardant', 'en regarde', 'en regarder'],
            'She learns French by watching films.',
            'Gerund: en + present participle.',
          ),
          gap(
            'g2',
            'Je révise ___ de la musique.',
            'en écoutant',
            ['en écoutant', 'écoutant en', 'en écoute', 'en écouter'],
            'I revise while listening to music.',
            'The gerund shows two actions at the same time.',
          ),
          gap(
            'g3',
            'Nous progressons ___ tous les jours.',
            'en pratiquant',
            ['en pratiquant', 'en pratique', 'pratiquons', 'en pratiquer'],
            'We make progress by practising every day.',
            'The gerund shows the way (how).',
          ),
          gap(
            'g4',
            'Il a réussi son examen ___ beaucoup.',
            'en travaillant',
            ['en travaillant', 'en travaille', 'travaillé', 'en travailler'],
            'He passed his exam by working a lot.',
            'En travaillant = by working.',
          ),
          gap(
            'g5',
            'Il s’est blessé ___ au football.',
            'en jouant',
            ['en jouant', 'jouant en', 'en joué', 'en jouer'],
            'He got hurt while playing football.',
            'En jouant = while playing.',
          ),
          gap(
            'g6',
            '___ de l’expérience, elle a trouvé un poste plus vite.',
            'En ayant',
            ['En ayant', 'Ayant en', 'En avoir', 'En aillant'],
            'By having experience, she found a job faster.',
            'Avoir has an irregular participle: ayant.',
          ),
          gap(
            'g7',
            'On apprend à nager ___.',
            'en nageant',
            ['en nageant', 'en nagant', 'en nage', 'en nager'],
            'You learn to swim by swimming.',
            'Keep the e before -ant: nageant.',
          ),
          gap(
            'g8',
            'Elle est tombée ___ du cours.',
            'en sortant',
            ['en sortant', 'en sortie', 'en sorti', 'sortant en'],
            'She fell while leaving the lecture.',
            'Sortir → sortant.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-participle',
      'gapfill',
      {
        ...meta(
          'Does the participle agree?',
          'avoir: agree only with an object placed before.',
          ['grammar', 'fr-b11-participle-avoir', 'further-education'],
          2,
          5,
        ),
        lesson: 'fr-b11-participle-avoir',
      },
      {
        items: [
          gap(
            'a1',
            'La leçon que j’ai ___ est difficile.',
            'apprise',
            ['apprise', 'appris', 'apprises', 'apprendre'],
            'The lesson I learnt is difficult.',
            'The object (que = la leçon) comes before: agree.',
          ),
          gap(
            'a2',
            'Les exercices qu’il a ___ étaient longs.',
            'faits',
            ['faits', 'fait', 'faite', 'faites'],
            'The exercises he did were long.',
            'Les exercices (masc. plural) comes before.',
          ),
          gap(
            'a3',
            'Cette étudiante, je l’ai ___ hier.',
            'vue',
            ['vue', 'vu', 'vus', 'voir'],
            'This student, I saw her yesterday.',
            'L’ = elle (feminine) comes before.',
          ),
          gap(
            'a4',
            'Les livres que nous avons ___ sont à la bibliothèque.',
            'lus',
            ['lus', 'lu', 'lue', 'lues'],
            'The books we read are in the library.',
            'Que = les livres (masc. plural).',
          ),
          gap(
            'a5',
            'Elle a ___ les résultats ce matin.',
            'reçu',
            ['reçu', 'reçus', 'reçue', 'reçues'],
            'She received the results this morning.',
            'The object comes after the verb: no agreement.',
          ),
          gap(
            'a6',
            'Quels cours as-tu ___ ?',
            'suivis',
            ['suivis', 'suivi', 'suivie', 'suivies'],
            'Which courses did you take?',
            'Quels cours comes before: masc. plural.',
          ),
          gap(
            'a7',
            'Les notes qu’elle a ___ sont excellentes.',
            'obtenues',
            ['obtenues', 'obtenu', 'obtenue', 'obtenus'],
            'The marks she got are excellent.',
            'Notes: feminine plural.',
          ),
          gap(
            'a8',
            'J’ai ___ une bourse à l’université.',
            'demandé',
            ['demandé', 'demandée', 'demandés', 'demander'],
            'I applied for a grant at university.',
            'The object comes after: no agreement.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-stance',
      'sortit',
      {
        ...meta(
          'Agree, disagree or nuance?',
          'What does the phrase do in a discussion?',
          ['grammar', 'fr-b11-agreement', 'opinions-presenting'],
          2,
          4,
        ),
        lesson: 'fr-b11-agreement',
      },
      {
        instruction: 'What does the phrase do?',
        buckets: [
          { id: 'agree', label: 'Agree', emoji: '👍' },
          { id: 'disagree', label: 'Disagree', emoji: '👎' },
          { id: 'nuance', label: 'Nuance', emoji: '⚖️' },
        ],
        items: sortCards('s', STANCE_CARDS),
      },
    ),
    activity(
      U,
      'conj-participle',
      'conjugation',
      {
        ...meta(
          'Participles to remember',
          'The passé composé of verbs of study gives you their participle.',
          ['grammar', 'fr-b11-participle-avoir'],
          2,
          4,
        ),
        lesson: 'fr-b11-participle-avoir',
      },
      {
        tables: [
          pcTable('apprendre', 'to learn', ['je', 'tu', 'ils/elles']),
          pcTable('réussir', 'to succeed', ['je', 'nous', 'ils/elles']),
          pcTable('lire', 'to read', ['tu', 'vous', 'il/elle/on']),
          pcTable('suivre', 'to follow', ['nous', 'vous', 'ils/elles']),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'further-education'],
        2,
        4,
      ),
      {
        items: [
          withLesson(
            'fr-b11-gerund',
            sent(
              's1',
              'She learns French by watching films.',
              ['Elle', 'apprend', 'le', 'français', 'en', 'regardant', 'des', 'films.'],
              { extra: ['regarder'] },
            ),
          ),
          withLesson(
            'fr-b11-gerund',
            sent(
              's2',
              'He studies while listening to music.',
              ['Il', 'étudie', 'en', 'écoutant', 'de', 'la', 'musique.'],
              { extra: ['écouté'] },
            ),
          ),
          withLesson(
            'fr-b11-participle-avoir',
            sent(
              's3',
              'The lesson I learnt is difficult.',
              ['La', 'leçon', 'que', 'j’ai', 'apprise', 'est', 'difficile.'],
              { extra: ['appris'] },
            ),
          ),
          withLesson(
            'fr-b11-participle-avoir',
            sent('s4', 'I saw her yesterday.', ['Je', 'l’ai', 'vue', 'hier.'], { extra: ['vu'] }),
          ),
          withLesson(
            'fr-b11-agreement',
            sent('s5', 'Admittedly, but it depends.', ['Certes,', 'mais', 'ça', 'dépend.'], {
              extra: ['pas'],
            }),
          ),
          withLesson(
            'fr-b11-agreement',
            sent('s6', 'I am not convinced.', ['Je', 'ne', 'suis', 'pas', 'convaincu.'], {
              extra: ['tout'],
            }),
          ),
        ],
      },
    ),
    activity(
      U,
      'spell-apprendre',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words from the unit. Accents are optional here.',
        ['spelling', 'further-education'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-diplome',
            mode: 'unscramble',
            answer: 'diplôme',
            hint: 'diploma',
            emoji: '📜',
            speak: 'le diplôme',
          },
          {
            id: 'sp-candidature',
            mode: 'unscramble',
            answer: 'candidature',
            hint: 'application',
            emoji: '📂',
            speak: 'la candidature',
          },
          {
            id: 'sp-formation',
            mode: 'type',
            answer: 'formation',
            hint: 'training',
            emoji: '🎓',
            speak: 'la formation',
          },
          dictation('sp-apprentissage', 'apprentissage', 'learning', 'l’apprentissage'),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Studies and applications',
        'Enrolling at university, a phone call about a job and a debate about online courses.',
        ['communication', 'further-education'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'enrol',
            title: 'Enrolling at university',
            emoji: '🏛️',
            setting: 'You are at the registration office. Use vous.',
            turns: [
              say(
                'L’employée',
                'Bonjour, que puis-je faire pour vous ?',
                'Hello, how can I help you?',
              ),
              you(
                'Je voudrais m’inscrire en licence de lettres.',
                ['Je voudrais s’inscrire en licence de lettres.', 'With je: m’inscrire.'],
                [
                  'Je voudrais m’inscrit en licence de lettres.',
                  'After voudrais use the infinitive: m’inscrire.',
                ],
              ),
              say(
                'L’employée',
                'Avez-vous déjà fait une demande de bourse ?',
                'Have you already applied for a grant?',
              ),
              you(
                'Oui, la demande que j’ai déposée hier est complète.',
                [
                  'Oui, la demande que j’ai déposé hier est complète.',
                  'The object (la demande) comes before: déposée.',
                ],
                [
                  'Oui, la demande que j’ai déposées hier est complète.',
                  'Demande is singular: déposée.',
                ],
              ),
              say(
                'L’employée',
                'Très bien. Vous pouvez payer en ligne.',
                'Very well. You can pay online.',
              ),
              you('Certes, mais je préfère payer ici.', [
                'Certes, mais je préfère payer là-ici.',
                'Say simply: ici.',
              ]),
            ],
          },
          {
            id: 'call',
            title: 'A phone call about a job',
            emoji: '📞',
            setting: 'You call a recruiter, M. Dumas. Use vous.',
            turns: [
              say('M. Dumas', 'Bonjour, c’est à quel sujet ?', 'Hello, what is it about?'),
              you('Je vous appelle au sujet du poste à pourvoir.', [
                'Je vous appelle au sujet de poste à pourvoir.',
                'Au sujet du (de + le).',
              ]),
              say(
                'M. Dumas',
                'Avez-vous envoyé votre candidature ?',
                'Have you sent your application?',
              ),
              you(
                'Oui, je l’ai envoyée ce matin.',
                ['Oui, je l’ai envoyé ce matin.', 'L’ = la candidature (feminine): envoyée.'],
                ['Oui, je l’ai envoyés ce matin.', 'Candidature is singular.'],
              ),
              say('M. Dumas', 'Parlez-moi de votre parcours.', 'Tell me about your background.'),
              you(
                'J’ai beaucoup appris en travaillant dans un stage.',
                [
                  'J’ai beaucoup appris en travaillé dans un stage.',
                  'The gerund is en + travaillant.',
                ],
                ['J’ai beaucoup appris travaillant dans un stage.', 'The gerund needs en.'],
              ),
            ],
          },
          {
            id: 'debate',
            title: 'A debate on online courses',
            emoji: '💻',
            setting: 'You discuss online courses with your classmate Chloé. Use tu.',
            turns: [
              say(
                'Chloé',
                'Pour moi, les cours en ligne sont meilleurs.',
                'For me, online courses are better.',
              ),
              you('Je ne suis pas convaincu : on apprend mieux en classe.', [
                'Je ne suis pas convaincu : on apprend meilleur en classe.',
                'Apprendre is a verb: use mieux.',
              ]),
              say(
                'Chloé',
                'Mais c’est plus pratique, non ?',
                'But it is more practical, isn’t it?',
              ),
              you(
                'Certes, mais ça dépend des gens.',
                ['Certes, mais ça dépends des gens.', 'Ça dépend: third person, no -s.'],
                ['Certes mais ça dépend de les gens.', 'De + les contracts to des.'],
              ),
              say(
                'Chloé',
                'On peut réviser en écoutant les cours.',
                'You can revise by listening to the lectures.',
              ),
              you('Tout à fait, je l’ai fait la semaine dernière.', [
                'Tout à fait, je l’ai faite la semaine dernière.',
                'L’ stands for “it” (masculine, the whole idea); no agreement here: fait.',
              ]),
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
        'Learning blitz',
        'True or false? Beat the clock!',
        ['grammar', 'further-education'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', 'The gerund is formed with en + the -ant form.', true),
          tf('b2', 'The gerund can express “by doing” or “while doing”.', true),
          tf('b3', '“En avoir” is the gerund of avoir.', false, 'The gerund of avoir is en ayant.'),
          tf(
            'b4',
            'With avoir, the participle agrees with an object that comes before the verb.',
            true,
          ),
          tf(
            'b5',
            '“Les exercices qu’il a fait” is correct.',
            false,
            'The object comes before: qu’il a faits.',
          ),
          tf(
            'b6',
            '“Elle a reçue les résultats” is correct.',
            false,
            'The object comes after the verb: elle a reçu.',
          ),
          tf('b7', '“Au contraire” expresses disagreement.', true),
          tf('b8', '“Certes, mais …” introduces a nuance.', true),
          tf(
            'b9',
            'Le stage is a degree.',
            false,
            'Le stage is an internship; the degree is le diplôme.',
          ),
          tf('b10', 'Postuler means to apply for a job.', true),
          tf('b11', 'La bourse is a grant.', true),
          tf(
            'b12',
            'Redoubler means to double the fees.',
            false,
            'Redoubler means to repeat a school year.',
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
        ['vocabulary', 'grammar', 'further-education'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            'fr-b11-gerund',
            q('c1', 'Complete: “Elle a trouvé un stage ___ sur Internet.”', 'en cherchant', [
              'cherchant en',
              'en chercher',
              'en cherché',
            ]),
          ),
          withLesson(
            'fr-b11-gerund',
            q('c2', 'Gerund of “faire”:', 'en faisant', ['en fesant', 'en faire', 'faisant en']),
          ),
          withLesson(
            'fr-b11-participle-avoir',
            q('c3', 'Complete: “Les cours qu’il a ___ étaient utiles.”', 'suivis', [
              'suivi',
              'suivie',
              'suivre',
            ]),
          ),
          withLesson(
            'fr-b11-participle-avoir',
            q('c4', 'Complete: “J’ai ___ ta lettre ce matin.”', 'reçu', [
              'reçue',
              'reçus',
              'reçues',
            ]),
          ),
          withLesson(
            'fr-b11-agreement',
            q('c5', 'Which phrase shows a nuance?', 'Ça dépend', [
              'Pas du tout',
              'Tout à fait',
              'Au contraire',
            ]),
          ),
          withLesson(
            'fr-b11-agreement',
            q('c6', 'Which phrase expresses disagreement?', 'Au contraire', [
              'Tout à fait',
              'Certes',
              'D’ailleurs',
            ]),
          ),
          q('c7', '“La lettre de motivation” is …', 'a cover letter', [
            'a reference letter',
            'a contract',
            'a diploma',
          ]),
          q('c8', '“L’alternance” is …', 'a work-study programme', [
            'a holiday',
            'a scholarship',
            'a lecture',
          ]),
        ],
      },
    ),
  ],
};
