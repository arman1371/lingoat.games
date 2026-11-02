import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { frTable, gap, meta, q, say, sent, tf, unitFr, you, type UnitContent } from './helpers';

const U = 'fr-a1-2-travail';

const work = vocabList(U, 'Working life', [
  ['le métier', 'profession, trade', '🛠️'],
  ['le poste', 'post, position', '💼'],
  ['l’employé, l’employée', 'employee', '👷'],
  ['l’entreprise', 'company', '🏭'],
  ['le patron, la patronne', 'boss', '🧑‍💼'],
  ['le collègue', 'colleague', '🧑‍🤝‍🧑'],
  ['le salaire', 'salary', '💶'],
  ['le contrat', 'contract', '📃'],
  ['les horaires', 'working hours', '🕘'],
  ['le congé', 'leave from work', '🌴'],
  ['la réunion', 'meeting', '🗂️'],
  ['l’ordinateur', 'computer', '💻'],
  ['le courriel', 'email', '📧'],
  ['gagner sa vie', 'to earn a living', '💰'],
  ['à temps plein', 'full time', '⏱️'],
  ['à temps partiel', 'part time', '🕒'],
  ['le chômage', 'unemployment', '📉'],
]);

const search = vocabList(U, 'Looking for a job', [
  ['chercher un emploi', 'to look for a job', '🔍'],
  ['postuler', 'to apply', '✍️'],
  ['la candidature', 'application', '📨'],
  ['le CV', 'CV, résumé', '📄'],
  ['la lettre de motivation', 'cover letter', '✉️'],
  ['l’entretien', 'interview', '🤝'],
  ['l’offre d’emploi', 'job ad', '📰'],
  ['le recruteur', 'recruiter', '🕵️'],
  ['embaucher', 'to hire', '✅'],
  ['démissionner', 'to resign', '🚪'],
  ['licencier', 'to dismiss', '🚫'],
  ['l’expérience', 'experience', '🧠'],
]);

const skills = vocabList(U, 'Skills and qualities', [
  ['la compétence', 'skill', '🎯'],
  ['le talent', 'talent', '🌟'],
  ['être doué, douée', 'to be gifted', '🏅'],
  ['être bon, bonne en …', 'to be good at …', '👍'],
  ['parler couramment', 'to speak fluently', '🗣️'],
  ['conduire', 'to drive', '🚗'],
  ['le permis de conduire', 'driving licence', '🪪'],
  ['le logiciel', 'software', '🖥️'],
  ['l’informatique', 'computing, IT', '⌨️'],
  ['la qualité', 'quality, strength', '✨'],
  ['le défaut', 'flaw, weakness', '⚠️'],
  ['motivé, motivée', 'motivated', '🔥'],
]);

const study = vocabList(U, 'University life', [
  ['la faculté', 'faculty, university department', '🏛️'],
  ['l’étudiant, l’étudiante', 'student', '🎓'],
  ['le cours', 'class, lecture', '📚'],
  ['l’examen', 'exam', '📝'],
  ['réussir un examen', 'to pass an exam', '🏆'],
  ['rater', 'to fail, to miss', '😖'],
  ['la note', 'mark, grade', '🔢'],
  ['le campus', 'campus', '🏫'],
  ['le professeur', 'teacher, professor', '👨‍🏫'],
  ['la matière', 'subject', '📐'],
]);

const goals = vocabList(U, 'Plans and goals', [
  ['le projet', 'project, plan', '🗺️'],
  ['le but', 'goal', '🎯'],
  ['rêver de …', 'to dream of …', '💭'],
  ['avoir envie de …', 'to feel like …', '😍'],
  ['progresser', 'to make progress', '📈'],
  ['réaliser', 'to achieve, to carry out', '🏁'],
  ['l’avenir', 'future', '🔮'],
  ['la réussite', 'success', '🥇'],
]);

const vocab = [...work, ...search, ...skills, ...study, ...goals];

const pictureQuiz = byDe(
  vocab,
  'l’ordinateur',
  'le salaire',
  'le CV',
  'le campus',
  'le permis de conduire',
  'la réunion',
  'l’étudiant, l’étudiante',
  'le courriel',
);

const heard = byDe(
  vocab,
  'le métier',
  'l’entretien',
  'la candidature',
  'les horaires',
  'embaucher',
  'rater',
  'le but',
);

export const travail: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'Beau travail !',
    subtitle: 'Talk about studies and work, say what you can do and what you plan',
    emoji: '💼',
    goals: [
      'Talk about your job, your studies and your working hours',
      'Apply for a job and answer simple interview questions',
      'Say what you know how to do and what you can do',
      'Say how long you have been doing something',
    ],
    grammar: [
      'savoir and pouvoir',
      'si + present',
      'depuis and pendant',
      'qui and que',
      'très, trop, assez, un peu',
    ],
    vocabFields: [
      'Working life',
      'Looking for a job',
      'Skills and qualities',
      'University life',
      'Plans and goals',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-work',
      'flashcards',
      meta(
        'Working life',
        'Boss, colleagues, salary and hours.',
        ['vocabulary', 'work-jobs'],
        1,
        4,
      ),
      flashcards(work),
    ),

    activity(
      U,
      'flash-search',
      'flashcards',
      meta(
        'Looking for a job',
        'CV, application, interview: the words of a job search.',
        ['vocabulary', 'job-search'],
        1,
        3,
      ),
      flashcards(search),
    ),

    activity(
      U,
      'flash-skills',
      'flashcards',
      meta(
        'Skills and qualities',
        'What you can do and what you are good at.',
        ['vocabulary', 'cv-career'],
        1,
        3,
      ),
      flashcards(skills),
    ),

    activity(
      U,
      'flash-study',
      'flashcards',
      meta(
        'University and goals',
        'Classes, exams and plans for the future.',
        ['vocabulary', 'university-study', 'plans-wishes'],
        1,
        4,
      ),
      flashcards([...study, ...goals]),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'At work and at university',
        'Look at the picture and pick the word.',
        ['vocabulary', 'work-jobs'],
        1,
        3,
      ),
      quizEmoji(pictureQuiz, [...work, ...search, ...skills, ...study], 4),
    ),

    activity(
      U,
      'listen-work',
      'listen',
      meta(
        'Listen: work and study',
        'Listen to the word and pick its meaning.',
        ['listening', 'work-jobs'],
        2,
        3,
      ),
      listen(heard, vocab),
    ),

    activity(
      U,
      'conj-savoir-pouvoir',
      'conjugation',
      {
        ...meta(
          'savoir, pouvoir, vouloir',
          'Three irregular verbs for ability, possibility and wishes.',
          ['grammar', 'fr-a12-savoir-pouvoir'],
          2,
          4,
        ),
        lesson: 'fr-a12-savoir-pouvoir',
      },
      {
        tables: [
          frTable('savoir-1', 'savoir', 'to know how to', ['je', 'il/elle/on', 'nous']),
          frTable('pouvoir-1', 'pouvoir', 'can, to be able to', ['tu', 'vous', 'ils/elles']),
          frTable('vouloir-1', 'vouloir', 'to want', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'gap-savoir-pouvoir',
      'gapfill',
      {
        ...meta(
          'savoir or pouvoir?',
          'A skill you have learnt, or a possibility.',
          ['grammar', 'fr-a12-savoir-pouvoir', 'work-jobs'],
          2,
          4,
        ),
        lesson: 'fr-a12-savoir-pouvoir',
      },
      {
        items: [
          gap(
            's1',
            'Elle ___ parler quatre langues.',
            'sait',
            ['sait', 'peut', 'veut', 'sais'],
            'She can speak four languages.',
            'A learnt skill: savoir + infinitive.',
          ),
          gap(
            's2',
            'Je ne ___ pas venir demain : je travaille.',
            'peux',
            ['peux', 'sais', 'veux', 'peut'],
            'I cannot come tomorrow: I am working.',
            'A possibility or circumstance: pouvoir.',
          ),
          gap(
            's3',
            'Vous ___ utiliser ce logiciel ? Vous avez suivi une formation ?',
            'savez',
            ['savez', 'pouvez', 'voulez', 'sait'],
            'Do you know how to use this software? Did you take a training course?',
            'Knowing how to do something you learnt: savoir.',
          ),
          gap(
            's4',
            'Est-ce que je ___ vous poser une question ?',
            'peux',
            ['peux', 'sais', 'peut', 'veux'],
            'Can I ask you a question?',
            'Asking permission: pouvoir.',
          ),
          gap(
            's5',
            'Nous ___ travailler à temps partiel si nous voulons.',
            'pouvons',
            ['pouvons', 'savons', 'voulons', 'peuvent'],
            'We can work part time if we want.',
            'Having the possibility: pouvoir.',
          ),
          gap(
            's6',
            'Mon fils ne ___ pas encore lire.',
            'sait',
            ['sait', 'peut', 'veut', 'sais'],
            'My son cannot read yet.',
            'He has not learnt it yet: savoir.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-si',
      'gapfill',
      {
        ...meta(
          'si + present',
          'If this happens, then that.',
          ['grammar', 'fr-a12-si-present', 'work-jobs'],
          2,
          4,
        ),
        lesson: 'fr-a12-si-present',
      },
      {
        items: [
          gap(
            'i1',
            'Si tu ___ du temps, tu peux m’aider ?',
            'as',
            ['as', 'auras', 'avais', 'aies'],
            'If you have time, can you help me?',
            'After si, the verb is in the present.',
          ),
          gap(
            'i2',
            'Si elle réussit l’examen, elle ___ à l’université.',
            'va aller',
            ['va aller', 'va allé', 'vas aller', 'allait'],
            'If she passes the exam, she is going to go to university.',
            'The result can be the near future: va aller.',
          ),
          gap(
            'i3',
            'Si vous cherchez un emploi, ___ votre CV.',
            'envoyez',
            ['envoyez', 'envoyer', 'envoyons', 'envoyé'],
            'If you are looking for a job, send your CV.',
            'The result can be an order: the imperative.',
          ),
          gap(
            'i4',
            'S’il ___ trop de travail, il démissionne.',
            'a',
            ['a', 'aura', 'avait', 'ait'],
            'If he has too much work, he resigns.',
            'Si + il becomes s’il. The verb stays in the present.',
          ),
          gap(
            'i5',
            'Si je trouve un poste, je ___ déménager.',
            'vais',
            ['vais', 'vas', 'va', 'allons'],
            'If I find a job, I am going to move.',
            'Je goes with vais: near future in the result.',
          ),
          gap(
            'i6',
            'Si on travaille ensemble, on ___ plus vite.',
            'finit',
            ['finit', 'finira', 'finissait', 'finissent'],
            'If we work together, we finish faster.',
            'On takes the il form: finit.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-depuis',
      'gapfill',
      {
        ...meta(
          'depuis or pendant?',
          'Still going on, or finished?',
          ['grammar', 'fr-a12-depuis-pendant', 'work-jobs'],
          2,
          4,
        ),
        lesson: 'fr-a12-depuis-pendant',
      },
      {
        items: [
          gap(
            'd1',
            'Je travaille ici ___ trois ans.',
            'depuis',
            ['depuis', 'pendant', 'il y a', 'dans'],
            'I have been working here for three years.',
            'Still true now: depuis + present.',
          ),
          gap(
            'd2',
            'J’ai travaillé en Italie ___ deux ans.',
            'pendant',
            ['pendant', 'depuis', 'il y a', 'dans'],
            'I worked in Italy for two years.',
            'Finished: pendant + passé composé.',
          ),
          gap(
            'd3',
            'Elle cherche un emploi ___ janvier.',
            'depuis',
            ['depuis', 'pendant', 'dans', 'en'],
            'She has been looking for a job since January.',
            'Depuis also gives the starting point.',
          ),
          gap(
            'd4',
            'Il a dormi ___ dix heures.',
            'pendant',
            ['pendant', 'depuis', 'il y a', 'dans'],
            'He slept for ten hours.',
            'Finished: pendant.',
          ),
          gap(
            'd5',
            'Nous habitons à Lyon ___ 2019.',
            'depuis',
            ['depuis', 'pendant', 'il y a', 'pour'],
            'We have lived in Lyon since 2019.',
            'Still true now: depuis + present.',
          ),
          gap(
            'd6',
            'Il a été malade ___ une semaine.',
            'pendant',
            ['pendant', 'depuis', 'il y a', 'dans'],
            'He was ill for a week.',
            'Finished: pendant.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-qui-que',
      'gapfill',
      {
        ...meta(
          'qui or que?',
          'Join two sentences with a relative pronoun.',
          ['grammar', 'fr-a12-qui-que', 'work-jobs'],
          2,
          4,
        ),
        lesson: 'fr-a12-qui-que',
      },
      {
        items: [
          gap(
            'q1',
            'C’est un métier ___ me plaît.',
            'qui',
            ['qui', 'que', 'quoi', 'dont'],
            'It is a job that I like.',
            'Qui is the subject of plaît.',
          ),
          gap(
            'q2',
            'Voici le collègue ___ je préfère.',
            'que',
            ['que', 'qui', 'quoi', 'où'],
            'Here is the colleague I prefer.',
            'Que is the object of préfère: “I prefer him”.',
          ),
          gap(
            'q3',
            'J’ai un patron ___ est très sympa.',
            'qui',
            ['qui', 'que', 'quoi', 'dont'],
            'I have a boss who is very nice.',
            'Qui is the subject of est.',
          ),
          gap(
            'q4',
            'Le poste ___ je cherche est à Paris.',
            'que',
            ['que', 'qui', 'quoi', 'où'],
            'The job I am looking for is in Paris.',
            'Que is the object of cherche.',
          ),
          gap(
            'q5',
            'La société ___ m’a embauché est grande.',
            'qui',
            ['qui', 'que', 'quoi', 'dont'],
            'The company that hired me is big.',
            'Qui is the subject of a embauché.',
          ),
          gap(
            'q6',
            'Le métier ___ aime est difficile. (elle)',
            'qu’elle',
            ['qu’elle', 'que elle', 'qui elle', 'quoi elle'],
            'The job she likes is difficult.',
            'Que becomes qu’ before a vowel: qu’elle.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-intensity',
      'gapfill',
      {
        ...meta(
          'très, trop, assez, un peu',
          'How much? Pick the right word.',
          ['grammar', 'fr-a12-intensity', 'work-jobs'],
          2,
          4,
        ),
        lesson: 'fr-a12-intensity',
      },
      {
        items: [
          gap(
            't1',
            'Ce travail est ___ difficile : personne ne peut le faire.',
            'trop',
            ['trop', 'très', 'assez', 'un peu'],
            'This job is too difficult: nobody can do it.',
            'Trop = more than is good.',
          ),
          gap(
            't2',
            'Je suis ___ contente de mon nouveau poste : c’est parfait !',
            'très',
            ['très', 'trop', 'assez', 'un peu'],
            'I am very happy with my new job: it is perfect!',
            'Très = a high degree, no problem.',
          ),
          gap(
            't3',
            'Le salaire est ___ bon, mais pas excellent.',
            'assez',
            ['assez', 'trop', 'très', 'beaucoup'],
            'The salary is quite good, but not excellent.',
            'Assez = fairly.',
          ),
          gap(
            't4',
            'J’ai ___ de travail : je n’ai pas le temps de manger.',
            'trop',
            ['trop', 'très', 'assez', 'peu'],
            'I have too much work: I have no time to eat.',
            'Trop de + noun = too much.',
          ),
          gap(
            't5',
            'Elle parle ___ anglais : elle sait dire quelques phrases.',
            'un peu',
            ['un peu', 'très', 'trop', 'beaucoup'],
            'She speaks a little English: she can say a few sentences.',
            'Un peu = a little.',
          ),
          gap(
            't6',
            'Il aime ___ son métier.',
            'beaucoup',
            ['beaucoup', 'très', 'trop', 'assez'],
            'He likes his job a lot.',
            'With a verb use beaucoup, not très.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', 'work-jobs'], 2, 4),
      {
        items: [
          {
            ...sent('s1', 'I know how to drive.', ['Je', 'sais', 'conduire.'], {
              extra: ['peux'],
            }),
            lesson: 'fr-a12-savoir-pouvoir' as const,
          },
          {
            ...sent(
              's2',
              'If you want, you can come.',
              ['Si', 'tu', 'veux,', 'tu', 'peux', 'venir.'],
              {
                extra: ['sais'],
              },
            ),
            lesson: 'fr-a12-si-present' as const,
          },
          {
            ...sent(
              's3',
              'I have been working here for three years.',
              ['Je', 'travaille', 'ici', 'depuis', 'trois', 'ans.'],
              { extra: ['pendant'] },
            ),
            lesson: 'fr-a12-depuis-pendant' as const,
          },
          {
            ...sent(
              's4',
              'This is the job that I like.',
              ['C’est', 'le', 'métier', 'que', 'j’aime.'],
              {
                extra: ['qui'],
              },
            ),
            lesson: 'fr-a12-qui-que' as const,
          },
          {
            ...sent('s5', 'She is very motivated.', ['Elle', 'est', 'très', 'motivée.'], {
              extra: ['trop'],
            }),
            lesson: 'fr-a12-intensity' as const,
          },
          {
            ...sent(
              's6',
              'He worked in Lyon for two years.',
              ['Il', 'a', 'travaillé', 'pendant', 'deux', 'ans', 'à', 'Lyon.'],
              { extra: ['depuis'] },
            ),
            lesson: 'fr-a12-depuis-pendant' as const,
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'An interview and a chat about studies',
        'Answer a recruiter, then talk to a student.',
        ['communication', 'job-search'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'A job interview',
            emoji: '🤝',
            setting: 'You apply for a job in a shop. Use vous.',
            turns: [
              say(
                'La recruteuse',
                'Bonjour. Vous cherchez un emploi depuis longtemps ?',
                'Hello. Have you been looking for a job for a long time?',
              ),
              you(
                'Depuis deux mois. J’ai envoyé mon CV à plusieurs entreprises.',
                [
                  'Pendant deux mois. J’ai envoyé mon CV à plusieurs entreprises.',
                  'The search is still going on, so you say depuis.',
                ],
                [
                  'Depuis deux mois. J’ai envoyé ma CV à plusieurs entreprises.',
                  'CV is masculine: mon CV.',
                ],
              ),
              say(
                'La recruteuse',
                'Vous savez utiliser un ordinateur ?',
                'Do you know how to use a computer?',
              ),
              you(
                'Oui, je sais très bien utiliser les logiciels de caisse.',
                [
                  'Oui, je peux très bien utiliser les logiciels de caisse.',
                  'A learnt skill: savoir, not pouvoir.',
                ],
                [
                  'Oui, je sais très utiliser les logiciels de caisse.',
                  'Très modifies adjectives; with the verb say bien: je sais très bien.',
                ],
              ),
            ],
          },
          {
            id: 'student',
            title: 'Chatting with a student',
            emoji: '🎓',
            setting: 'A student tells you about her studies. Use tu.',
            turns: [
              say(
                'Inès',
                'Je prépare un examen difficile. Je révise depuis lundi.',
                'I am preparing a difficult exam. I have been revising since Monday.',
              ),
              you(
                'Courage ! C’est un examen que tu dois réussir ?',
                [
                  'Courage ! C’est un examen qui tu dois réussir ?',
                  'The exam is the object of réussir, so que, not qui.',
                ],
                [
                  'Courage ! C’est un examen que tu doit réussir ?',
                  'The tu form of devoir is dois.',
                ],
              ),
              say(
                'Inès',
                'Oui, si je réussis, je peux entrer à la faculté de médecine.',
                'Yes, if I pass, I can get into the medical faculty.',
              ),
              you(
                'Alors, bonne chance. Si tu as besoin d’aide, tu peux m’appeler.',
                [
                  'Alors, bonne chance. Si tu auras besoin d’aide, tu peux m’appeler.',
                  'After si the verb is in the present: si tu as.',
                ],
                [
                  'Alors, bonne chance. Si tu as besoin d’aide, tu sais m’appeler.',
                  'Permission and possibility: tu peux, not tu sais.',
                ],
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
        'Work blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', 'work-jobs'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Le salaire” is what you earn.', true),
          tf(
            'b2',
            '“Embaucher” means “to resign”.',
            false,
            'Embaucher is to hire. To resign is démissionner.',
          ),
          tf('b3', '“Je sais nager” means “I know how to swim”.', true),
          tf(
            'b4',
            '“Je peux parler français” is the best way to say you learnt French.',
            false,
            'A learnt skill is je sais parler français.',
          ),
          tf('b5', '“Si” can be followed by the present.', true),
          tf(
            'b6',
            '“Si tu viendras, je serai content” is correct.',
            false,
            'No future after si: si tu viens, je serai content.',
          ),
          tf('b7', '“Je travaille ici depuis un an” means “I still work here”.', true),
          tf(
            'b8',
            '“J’ai travaillé ici depuis un an” is correct.',
            false,
            'For a finished period use pendant: j’ai travaillé ici pendant un an.',
          ),
          tf('b9', '“Le poste que je cherche” uses que as an object.', true),
          tf(
            'b10',
            '“Le collègue que travaille ici” is correct.',
            false,
            'Qui is the subject: le collègue qui travaille ici.',
          ),
          tf('b11', '“Trop difficile” means “too difficult”.', true),
          tf(
            'b12',
            '“Il aime très son travail” is correct.',
            false,
            'With a verb use beaucoup: il aime beaucoup son travail.',
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
        ['vocabulary', 'grammar', 'work-jobs'],
        3,
        4,
      ),
      {
        questions: [
          {
            ...q('c1', 'Complete: “Elle ___ parler chinois.” (she learnt it)', 'sait', [
              'peut',
              'veut',
              'savons',
            ]),
            lesson: 'fr-a12-savoir-pouvoir' as const,
          },
          {
            ...q('c2', 'Complete: “Si tu ___ fatigué, repose-toi.”', 'es', [
              'seras',
              'serais',
              'étais',
            ]),
            lesson: 'fr-a12-si-present' as const,
          },
          {
            ...q('c3', 'Complete: “J’habite à Nice ___ cinq ans.” (I still live there)', 'depuis', [
              'pendant',
              'il y a',
              'dans',
            ]),
            lesson: 'fr-a12-depuis-pendant' as const,
          },
          {
            ...q('c4', 'Complete: “La femme ___ travaille ici est médecin.”', 'qui', [
              'que',
              'quoi',
              'où',
            ]),
            lesson: 'fr-a12-qui-que' as const,
          },
          {
            ...q('c5', 'Which sentence is correct?', 'Il aime beaucoup son travail.', [
              'Il aime très son travail.',
              'Il aime trop beau son travail.',
              'Il très aime son travail.',
            ]),
            lesson: 'fr-a12-intensity' as const,
          },
          q('c6', 'What does “l’entretien” mean?', 'interview', ['contract', 'holiday', 'salary']),
          q('c7', 'What does “postuler” mean?', 'to apply', ['to hire', 'to resign', 'to earn']),
          q('c8', 'What does “à temps partiel” mean?', 'part time', [
            'full time',
            'on time',
            'at night',
          ]),
        ],
      },
    ),
  ],
};
