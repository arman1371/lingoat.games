import { byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  sortCards,
  subjTable,
  tf,
  unitFr,
  withLesson,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-1-travail';

const world = vocabList(U, 'The professional world', [
  ['le salarié', 'employee', '🧑‍💼'],
  ['l’employeur', 'employer', '🏢'],
  ['le CDI', 'permanent contract', '📃'],
  ['le CDD', 'fixed-term contract', '⏳'],
  ['le télétravail', 'working from home', '🏠'],
  ['le chômage', 'unemployment', '📉'],
  ['le licenciement', 'dismissal, redundancy', '📦'],
  ['la démission', 'resignation', '🚪'],
  ['les horaires flexibles', 'flexible hours', '🕐'],
  ['le temps partiel', 'part-time work', '🌓'],
  ['l’intérimaire', 'temp worker', '🔄'],
  ['l’indépendant', 'freelancer', '🧑‍💻'],
  ['le coworking', 'co-working space', '🛋️'],
  ['la mission', 'assignment', '🎯'],
]);

const experience = vocabList(U, 'Experience and responsibilities', [
  ['avoir de l’expérience', 'to have experience', '🎖️'],
  ['être chargé de', 'to be in charge of', '📋'],
  ['encadrer', 'to supervise', '👥'],
  ['gérer', 'to manage', '🗂️'],
  ['s’investir', 'to get involved', '💪'],
  ['relever un défi', 'to take up a challenge', '🏔️'],
  ['atteindre un objectif', 'to reach a goal', '🥅'],
  ['la motivation', 'motivation', '🔥'],
  ['l’épanouissement', 'personal fulfilment', '🌱'],
  ['la reconversion', 'career change', '🔀'],
  ['le savoir-faire', 'know-how', '🛠️'],
  ['les compétences', 'skills', '🧰'],
]);

const opinion = vocabList(U, 'Giving your opinion', [
  ['à mon avis', 'in my opinion', '💭'],
  ['selon moi', 'according to me', '🗣️'],
  ['il me semble que', 'it seems to me that', '🧐'],
  ['en ce qui me concerne', 'as far as I am concerned', '🙋'],
  ['je suis convaincu que', 'I am convinced that', '💯'],
  ['d’une part … d’autre part', 'on the one hand … on the other', '⚖️'],
  ['par contre', 'on the other hand', '↔️'],
  ['en revanche', 'whereas, in return', '🔁'],
  ['en effet', 'indeed', '✔️'],
]);

const vocab = [...world, ...experience, ...opinion];

const OPINION_CARDS: [string, 'opinion' | 'contrast' | 'reason', string][] = [
  ['à mon avis', 'opinion', 'in my opinion'],
  ['selon moi', 'opinion', 'according to me'],
  ['il me semble que', 'opinion', 'it seems to me that'],
  ['je suis convaincu que', 'opinion', 'I am convinced that'],
  ['par contre', 'contrast', 'on the other hand'],
  ['en revanche', 'contrast', 'in return, whereas'],
  ['cependant', 'contrast', 'however'],
  ['pourtant', 'contrast', 'yet'],
  ['en effet', 'reason', 'indeed'],
  ['car', 'reason', 'because, for'],
  ['puisque', 'reason', 'since'],
  ['parce que', 'reason', 'because'],
];

export const travail: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Travailler autrement',
    subtitle: 'Talk about work, experience and motivation, and give your opinion',
    emoji: '💼',
    goals: [
      'Talk about your professional experience and responsibilities',
      'Give and nuance an opinion on work',
      'Express a purpose and link ideas with relative pronouns',
    ],
    grammar: [
      'qui, que, dont, où',
      'Giving an opinion',
      'Purpose: pour, afin de, pour que, afin que',
    ],
    vocabFields: [
      'The professional world',
      'Experience and responsibilities',
      'Giving your opinion',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-world',
      'flashcards',
      meta(
        'The professional world',
        'Contracts, employers and new ways of working.',
        ['vocabulary', 'work-jobs'],
        1,
        4,
      ),
      flashcards(world),
    ),
    activity(
      U,
      'flash-experience',
      'flashcards',
      meta(
        'Experience and responsibilities',
        'Say what you did, what you manage and what motivates you.',
        ['vocabulary', 'work-jobs', 'cv-career'],
        1,
        4,
      ),
      flashcards(experience),
    ),
    activity(
      U,
      'flash-opinion',
      'flashcards',
      meta(
        'Giving your opinion',
        'Phrases to give an opinion and to contrast ideas.',
        ['vocabulary', 'work-jobs'],
        1,
        3,
      ),
      flashcards(opinion),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the meaning of the work words.',
        ['vocabulary', 'work-jobs'],
        1,
        3,
      ),
      quizDeEn(
        byDe(
          vocab,
          'le CDI',
          'le CDD',
          'le chômage',
          'le licenciement',
          'la démission',
          'encadrer',
          'la reconversion',
          'le savoir-faire',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'listen-work',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'work-jobs'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'le salarié',
          'l’employeur',
          'le télétravail',
          'les horaires flexibles',
          'l’intérimaire',
          'gérer',
          'les compétences',
          'en revanche',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'gap-relatives',
      'gapfill',
      {
        ...meta(
          'qui, que, dont or où?',
          'Pick the relative pronoun.',
          ['grammar', 'fr-b11-relatives', 'work-jobs'],
          2,
          5,
        ),
        lesson: 'fr-b11-relatives',
      },
      {
        items: [
          gap(
            'r1',
            'Le collègue ___ travaille avec moi est très sympa.',
            'qui',
            ['qui', 'que', 'dont', 'où'],
            'The colleague who works with me is very nice.',
            'Qui replaces the subject of the relative clause.',
          ),
          gap(
            'r2',
            'Le poste ___ je cherche est à Lyon.',
            'que',
            ['que', 'qui', 'dont', 'où'],
            'The job I am looking for is in Lyon.',
            'Que replaces the direct object (je cherche ce poste).',
          ),
          gap(
            'r3',
            'C’est l’entreprise ___ je rêve depuis longtemps.',
            'dont',
            ['dont', 'que', 'qui', 'où'],
            'It is the company I have dreamt of for a long time.',
            'Rêver de → dont.',
          ),
          gap(
            'r4',
            'La ville ___ j’ai trouvé mon premier emploi s’appelle Nantes.',
            'où',
            ['où', 'que', 'dont', 'qui'],
            'The town where I found my first job is called Nantes.',
            'Où replaces a place or a time.',
          ),
          gap(
            'r5',
            'Le jour ___ j’ai signé mon contrat était un lundi.',
            'où',
            ['où', 'que', 'dont', 'qui'],
            'The day I signed my contract was a Monday.',
            'Où also replaces a time: le jour où.',
          ),
          gap(
            'r6',
            'Le CV ___ tu as envoyé était très clair.',
            'que',
            ['que', 'qui', 'dont', 'où'],
            'The CV you sent was very clear.',
            'Envoyer takes a direct object: que.',
          ),
          gap(
            'r7',
            'C’est un métier ___ on a besoin de patience.',
            'dont',
            ['dont', 'où', 'que', 'qui'],
            'It is a job for which you need patience.',
            'Avoir besoin de → dont.',
          ),
          gap(
            'r8',
            'Mon chef, ___ le bureau est au troisième étage, est très disponible.',
            'dont',
            ['dont', 'que', 'qui', 'où'],
            'My boss, whose office is on the third floor, is very available.',
            'Dont expresses belonging: whose.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-opinion',
      'sortit',
      {
        ...meta(
          'Opinion, contrast or reason?',
          'Which job do these phrases do in an argument?',
          ['grammar', 'fr-b11-opinion', 'work-jobs'],
          2,
          4,
        ),
        lesson: 'fr-b11-opinion',
      },
      {
        instruction: 'What does the phrase do in an argument?',
        buckets: [
          { id: 'opinion', label: 'Give an opinion', emoji: '💭' },
          { id: 'contrast', label: 'Contrast', emoji: '↔️' },
          { id: 'reason', label: 'Give a reason', emoji: '🔗' },
        ],
        items: sortCards('o', OPINION_CARDS),
      },
    ),
    activity(
      U,
      'gap-opinion',
      'gapfill',
      {
        ...meta(
          'Say what you think',
          'Complete the opinion and the contrast.',
          ['grammar', 'fr-b11-opinion'],
          2,
          4,
        ),
        lesson: 'fr-b11-opinion',
      },
      {
        items: [
          gap(
            'o1',
            'À ___, le télétravail fait gagner du temps.',
            'mon avis',
            ['mon avis', 'moi', 'ma pensée', 'mon opinion que'],
            'In my opinion, working from home saves time.',
            'À mon avis is followed directly by the clause: no que.',
          ),
          gap(
            'o2',
            'Il me semble ___ les salariés sont plus motivés.',
            'que',
            ['que', 'de', 'à', 'qui'],
            'It seems to me that employees are more motivated.',
            'Il me semble que + indicative.',
          ),
          gap(
            'o3',
            'Je suis convaincu ___ ce métier a de l’avenir.',
            'que',
            ['que', 'de', 'dont', 'où'],
            'I am convinced this job has a future.',
            'Convaincu que + indicative.',
          ),
          gap(
            'o4',
            'Les horaires flexibles sont pratiques ; ___, ils compliquent l’organisation.',
            'en revanche',
            ['en revanche', 'en effet', 'car', 'puisque'],
            'Flexible hours are practical; on the other hand they complicate organisation.',
            'En revanche introduces a contrast.',
          ),
          gap(
            'o5',
            'Il a démissionné ; ___, il n’était plus motivé.',
            'en effet',
            ['en effet', 'par contre', 'cependant', 'pourtant'],
            'He resigned; indeed, he was no longer motivated.',
            'En effet adds a reason.',
          ),
          gap(
            'o6',
            '___ moi, la motivation compte plus que le salaire.',
            'Selon',
            ['Selon', 'Pour que', 'À cause', 'Dont'],
            'According to me, motivation matters more than pay.',
            'Selon moi = in my opinion.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-purpose',
      'gapfill',
      {
        ...meta(
          'Why do you do it?',
          'pour, afin de, pour que, afin que.',
          ['grammar', 'fr-b11-purpose', 'work-jobs'],
          2,
          5,
        ),
        lesson: 'fr-b11-purpose',
      },
      {
        items: [
          gap(
            'p1',
            'Je travaille le soir ___ payer mes études.',
            'pour',
            ['pour', 'pour que', 'afin que', 'parce que'],
            'I work in the evening to pay for my studies.',
            'Same subject: pour + infinitive.',
          ),
          gap(
            'p2',
            'Il change de poste ___ ses enfants aient plus de temps.',
            'pour que',
            ['pour que', 'pour', 'afin de', 'de peur de'],
            'He changes jobs so that his children have more time.',
            'New subject: pour que + subjunctive (aient).',
          ),
          gap(
            'p3',
            'Elle fait un stage afin ___ trouver un emploi.',
            'de',
            ['de', 'que', 'à', 'pour'],
            'She does an internship to find a job.',
            'Afin de + infinitive.',
          ),
          gap(
            'p4',
            'Le patron explique le projet afin que tout le monde ___.',
            'comprenne',
            ['comprenne', 'comprend', 'comprendre', 'comprenait'],
            'The boss explains the project so that everybody understands.',
            'Afin que + subjunctive.',
          ),
          gap(
            'p5',
            'Nous avons embauché une assistante pour qu’elle ___ les clients.',
            'accueille',
            ['accueille', 'accueillir', 'accueillait', 'accueillera'],
            'We hired an assistant so that she welcomes the customers.',
            'Pour que + subjunctive.',
          ),
          gap(
            'p6',
            'Je prends un café ___ me réveiller.',
            'pour',
            ['pour', 'pour que', 'afin que', 'de'],
            'I have a coffee to wake myself up.',
            'Same subject: pour + infinitive.',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-subjunctive',
      'conjugation',
      {
        ...meta(
          'Forms after pour que',
          'The subjunctive forms you need after pour que and afin que.',
          ['grammar', 'fr-b11-purpose'],
          2,
          4,
        ),
        lesson: 'fr-b11-purpose',
      },
      {
        tables: [
          subjTable('faire-p', 'faire', 'to do, to make', ['je', 'tu', 'ils/elles']),
          subjTable('pouvoir-p', 'pouvoir', 'to be able to', ['nous', 'vous', 'il/elle/on']),
          subjTable('finir-p', 'finir', 'to finish', ['je', 'nous', 'ils/elles']),
          subjTable('prendre-p', 'prendre', 'to take', ['tu', 'vous', 'il/elle/on']),
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
          withLesson(
            'fr-b11-relatives',
            sent(
              's1',
              'The colleague who helped me is very nice.',
              ['Le', 'collègue', 'qui', 'm’a', 'aidé', 'est', 'très', 'sympa.'],
              { extra: ['que'] },
            ),
          ),
          withLesson(
            'fr-b11-relatives',
            sent(
              's2',
              'The job I am looking for is in Lyon.',
              ['Le', 'poste', 'que', 'je', 'cherche', 'est', 'à', 'Lyon.'],
              { extra: ['qui'] },
            ),
          ),
          withLesson(
            'fr-b11-relatives',
            sent(
              's3',
              'It is the company I dream of.',
              ['C’est', 'l’entreprise', 'dont', 'je', 'rêve.'],
              { extra: ['que'] },
            ),
          ),
          withLesson(
            'fr-b11-opinion',
            sent(
              's4',
              'In my opinion, working from home saves time.',
              ['À', 'mon', 'avis,', 'le', 'télétravail', 'fait', 'gagner', 'du', 'temps.'],
              { extra: ['que'] },
            ),
          ),
          withLesson(
            'fr-b11-purpose',
            sent(
              's5',
              'I work part-time so that I can study.',
              ['Je', 'travaille', 'à', 'temps', 'partiel', 'pour', 'pouvoir', 'étudier.'],
              { extra: ['pour que'] },
            ),
          ),
          withLesson(
            'fr-b11-purpose',
            sent(
              's6',
              'She explains the project so that everybody understands.',
              [
                'Elle',
                'explique',
                'le',
                'projet',
                'afin',
                'que',
                'tout',
                'le',
                'monde',
                'comprenne.',
              ],
              { extra: ['comprend'] },
            ),
          ),
        ],
      },
    ),
    activity(
      U,
      'spell-work',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words from the unit. Accents are optional here.',
        ['spelling', 'work-jobs'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-chomage',
            mode: 'unscramble',
            answer: 'chômage',
            hint: 'unemployment',
            emoji: '📉',
            speak: 'le chômage',
          },
          {
            id: 'sp-salarie',
            mode: 'unscramble',
            answer: 'salarié',
            hint: 'employee',
            emoji: '🧑‍💼',
            speak: 'le salarié',
          },
          {
            id: 'sp-teletravail',
            mode: 'type',
            answer: 'télétravail',
            hint: 'working from home',
            emoji: '🏠',
            speak: 'le télétravail',
          },
          dictation(
            'sp-epanouissement',
            'épanouissement',
            'personal fulfilment',
            'l’épanouissement',
          ),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Work conversations',
        'A job interview, a request to work from home and a debate about the four-day week.',
        ['communication', 'work-jobs'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'A job interview',
            emoji: '🤝',
            setting: 'You are at an interview with Mme Aubert. Use vous.',
            turns: [
              say(
                'Mme Aubert',
                'Pouvez-vous me parler de votre dernier poste ?',
                'Can you tell me about your last job?',
              ),
              you(
                'J’étais responsable d’une équipe qui comptait dix personnes.',
                [
                  'J’étais responsable d’une équipe que comptait dix personnes.',
                  'The team is the subject of comptait: use qui, not que.',
                ],
                [
                  'J’étais responsable d’une équipe dont comptait dix personnes.',
                  'Dont needs a “de” structure; here the subject needs qui.',
                ],
              ),
              say(
                'Mme Aubert',
                'Qu’est-ce qui vous motive dans ce poste ?',
                'What motivates you in this job?',
              ),
              you(
                'C’est un travail dont j’ai toujours rêvé.',
                ['C’est un travail que j’ai toujours rêvé.', 'Rêver de takes dont, not que.'],
                [
                  'C’est un travail où j’ai toujours rêvé.',
                  'Où is for a place or a time; rêver de takes dont.',
                ],
              ),
              say(
                'Mme Aubert',
                'Pourquoi voulez-vous quitter votre entreprise ?',
                'Why do you want to leave your company?',
              ),
              you(
                'Je veux évoluer afin de relever de nouveaux défis.',
                [
                  'Je veux évoluer afin que relever de nouveaux défis.',
                  'Same subject: afin de + infinitive.',
                ],
                [
                  'Je veux évoluer pour que je relève de nouveaux défis.',
                  'With the same subject use pour or afin de + infinitive, not que + subjunctive.',
                ],
              ),
            ],
          },
          {
            id: 'remote',
            title: 'Working from home',
            emoji: '🏠',
            setting: 'You ask your manager, M. Girard, to work from home. Use vous.',
            turns: [
              say(
                'M. Girard',
                'Vous souhaitez faire du télétravail ?',
                'You would like to work from home?',
              ),
              you(
                'Oui, à mon avis, c’est plus efficace.',
                [
                  'Oui, à mon avis que c’est plus efficace.',
                  'À mon avis is followed directly by the clause, without que.',
                ],
                ['Oui, selon que moi, c’est plus efficace.', 'Say selon moi, without que.'],
              ),
              say(
                'M. Girard',
                'Mais comment vos collègues vont-ils vous joindre ?',
                'But how will your colleagues reach you?',
              ),
              you(
                'Ils peuvent m’écrire : c’est la messagerie que nous utilisons déjà.',
                [
                  'Ils peuvent m’écrire : c’est la messagerie qui nous utilisons déjà.',
                  'Nous is the subject, so the pronoun is the object: que.',
                ],
                [
                  'Ils peuvent m’écrire : c’est la messagerie dont nous utilisons déjà.',
                  'Utiliser takes a direct object: que, not dont.',
                ],
              ),
              say(
                'M. Girard',
                'D’accord, essayons pendant un mois.',
                'All right, let us try for a month.',
              ),
              you(
                'Merci ! Je ferai un bilan pour que vous puissiez décider.',
                [
                  'Merci ! Je ferai un bilan pour que vous pouvez décider.',
                  'Pour que is followed by the subjunctive: puissiez.',
                ],
                [
                  'Merci ! Je ferai un bilan pour vous puissiez décider.',
                  'Pour que needs que: pour que vous puissiez décider.',
                ],
              ),
            ],
          },
          {
            id: 'four-days',
            title: 'The four-day week',
            emoji: '📅',
            setting: 'You discuss a four-day week with your friend Sam. Use tu.',
            turns: [
              say(
                'Sam',
                'Tu es pour la semaine de quatre jours ?',
                'Are you in favour of the four-day week?',
              ),
              you(
                'Oui. Il me semble que les gens sont plus motivés.',
                [
                  'Oui. Il me semble de les gens sont plus motivés.',
                  'Say il me semble que + clause.',
                ],
                [
                  'Oui. Il me semble qui les gens sont plus motivés.',
                  'The clause needs que (conjunction), not qui.',
                ],
              ),
              say(
                'Sam',
                'Mais les patrons disent que la production baisse.',
                'But bosses say production falls.',
              ),
              you('En revanche, les salariés sont moins souvent malades.', [
                'En effet, les salariés sont moins souvent malades.',
                'En effet agrees and adds a reason. Here you contrast: en revanche.',
              ]),
              say(
                'Sam',
                'Tu connais une entreprise qui a essayé ?',
                'Do you know a company that tried it?',
              ),
              you(
                'Oui, c’est une entreprise dont mon frère m’a parlé.',
                ['Oui, c’est une entreprise que mon frère m’a parlé.', 'Parler de → dont.'],
                [
                  'Oui, c’est une entreprise où mon frère m’a parlé.',
                  'Où is for a place or a time; parler de takes dont.',
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
      meta('Work blitz', 'True or false? Beat the clock!', ['grammar', 'work-jobs'], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Le poste que je cherche” is correct.', true),
          tf(
            'b2',
            '“Le collègue que travaille avec moi” is correct.',
            false,
            'The relative pronoun is the subject: qui.',
          ),
          tf('b3', 'Dont replaces a complement introduced by de.', true),
          tf('b4', 'Où can refer to a time as well as a place.', true),
          tf('b5', 'Afin que is followed by the subjunctive.', true),
          tf('b6', 'With the same subject you say pour + infinitive.', true),
          tf(
            'b7',
            '“À mon avis que c’est utile” is correct.',
            false,
            'À mon avis is followed directly by the clause, without que.',
          ),
          tf(
            'b8',
            'Le CDI is a fixed-term contract.',
            false,
            'CDI is the permanent contract; the fixed-term one is the CDD.',
          ),
          tf('b9', 'Le chômage means unemployment.', true),
          tf(
            'b10',
            'Le licenciement is the same as a resignation.',
            false,
            'Licenciement is dismissal; resignation is démission.',
          ),
          tf('b11', '“En revanche” introduces a contrast.', true),
          tf(
            'b12',
            '“Je travaille pour que je gagne ma vie” is the natural way to say it.',
            false,
            'With one subject use the infinitive: pour gagner ma vie.',
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
        5,
      ),
      {
        questions: [
          withLesson(
            'fr-b11-relatives',
            q('c1', 'Complete: “L’équipe ___ je dirige a dix personnes.”', 'que', [
              'qui',
              'dont',
              'où',
            ]),
          ),
          withLesson(
            'fr-b11-relatives',
            q('c2', 'Complete: “C’est le bureau ___ j’ai passé l’entretien.”', 'où', [
              'que',
              'qui',
              'dont',
            ]),
          ),
          withLesson(
            'fr-b11-relatives',
            q('c3', 'Complete: “Voilà le projet ___ je t’ai parlé.”', 'dont', ['que', 'qui', 'où']),
          ),
          withLesson(
            'fr-b11-purpose',
            q('c4', 'Complete: “Il travaille beaucoup pour que sa famille ___ heureuse.”', 'soit', [
              'est',
              'être',
              'sera',
            ]),
          ),
          withLesson(
            'fr-b11-purpose',
            q(
              'c5',
              'Complete: “Elle apprend l’anglais afin ___ trouver un meilleur poste.”',
              'de',
              ['que', 'à', 'pour que'],
            ),
          ),
          withLesson(
            'fr-b11-opinion',
            q('c6', 'Which phrase introduces a contrast?', 'En revanche', [
              'À mon avis',
              'Selon moi',
              'En effet',
            ]),
          ),
          q('c7', '“La reconversion” is …', 'a career change', [
            'a holiday',
            'a promotion',
            'a contract',
          ]),
          q('c8', '“Encadrer une équipe” means …', 'to supervise a team', [
            'to join a team',
            'to photograph a team',
            'to leave a team',
          ]),
        ],
      },
    ),
  ],
};
