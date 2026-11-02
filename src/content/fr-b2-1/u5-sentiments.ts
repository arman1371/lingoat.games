import { vocabList } from '../builders';
import {
  activity,
  cards,
  frForms,
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

const U = 'fr-b2-1-sentiments';

const feelings = vocabList(U, 'Feelings', [
  ['la joie', 'joy', '😄'],
  ['la déception', 'disappointment', '😞'],
  ['la fierté', 'pride', '🦚'],
  ['la honte', 'shame', '😳'],
  ['la jalousie', 'jealousy', '💚'],
  ['la colère', 'anger', '😡'],
  ['l’inquiétude', 'worry', '😟'],
  ['le soulagement', 'relief', '😮‍💨'],
  ['la nostalgie', 'nostalgia', '🕰️'],
  ['la gêne', 'embarrassment, discomfort', '😬'],
  ['l’angoisse', 'anxiety', '😰'],
  ['le regret', 'regret', '😔'],
  ['la rancune', 'grudge', '😒'],
  ['l’indignation', 'indignation', '😤'],
]);

const looks = vocabList(U, 'Appearance and judgements', [
  ['la silhouette', 'figure, outline', '🧍'],
  ['le teint', 'complexion', '🌸'],
  ['une allure', 'a bearing, a look', '🚶'],
  ['une coiffure', 'a hairstyle', '💇'],
  ['un tatouage', 'a tattoo', '🐉'],
  ['élégant', 'elegant', '🎩'],
  ['soigné', 'neat, well-groomed', '✨'],
  ['négligé', 'untidy, scruffy', '🧦'],
  ['un complexe', 'a complex, insecurity', '🪞'],
  ['le charme', 'charm', '💫'],
  ['une cicatrice', 'a scar', '🩹'],
  ['une ride', 'a wrinkle', '〰️'],
]);

const phrases = vocabList(U, 'Saying how you feel', [
  ['Je suis ravi que tu sois venu.', 'I am delighted that you came.', '🎉'],
  ['Je regrette de ne pas être parti plus tôt.', 'I regret not having left earlier.', '😔'],
  ['Je suis déçu que vous n’ayez pas appelé.', 'I am disappointed that you did not call.', '📵'],
  ['Elle est fière d’avoir réussi.', 'She is proud to have succeeded.', '🏆'],
  ['Il est dommage que tu sois parti si tôt.', 'It is a pity that you left so early.', '🚪'],
  ['Je suis soulagé qu’il soit arrivé.', 'I am relieved that he has arrived.', '😮‍💨'],
  ['Ça me gêne qu’on me regarde.', 'It bothers me to be looked at.', '👀'],
  ['Il a une allure très soignée.', 'He has a very neat look.', '🧥'],
]);

const vocab = [...feelings, ...looks, ...phrases];

const TIME: [string, 'pres' | 'past', string][] = [
  ['Je suis content que tu viennes demain.', 'pres', 'I am glad that you are coming tomorrow.'],
  ['Je suis content que tu sois venu hier.', 'past', 'I am glad that you came yesterday.'],
  ['Il faut qu’il parte maintenant.', 'pres', 'He has to leave now.'],
  ['Je regrette qu’il soit parti sans moi.', 'past', 'I regret that he left without me.'],
  ['Je doute qu’elle réussisse.', 'pres', 'I doubt that she will succeed.'],
  ['Je doute qu’elle ait réussi.', 'past', 'I doubt that she succeeded.'],
  ['Bien qu’il pleuve, nous sortons.', 'pres', 'Although it is raining, we are going out.'],
  [
    'Bien qu’il ait plu toute la nuit, le sol est sec.',
    'past',
    'Although it rained all night, the ground is dry.',
  ],
  ['Je ne crois pas qu’il comprenne.', 'pres', 'I do not think he understands.'],
  ['Je ne crois pas qu’il ait compris.', 'past', 'I do not think he understood.'],
  ['Il est possible qu’elle arrive à midi.', 'pres', 'She may arrive at noon.'],
  ['Il est possible qu’elle soit arrivée hier.', 'past', 'She may have arrived yesterday.'],
];

export const sentiments: UnitContent = {
  unit: unitFr({
    id: U,
    order: 5,
    title: 'Sentiments et jugements',
    subtitle:
      'Express feelings and judge people, with the subjunctive, the infinitive and the past subjunctive',
    emoji: '💬',
    goals: [
      'Name and nuance feelings',
      'Describe appearance and give a judgement with tact',
      'Choose between que + subjunctive and de + infinitive, and use the past subjunctive',
    ],
    grammar: ['Subjunctive or infinitive', 'The past subjunctive'],
    vocabFields: ['Feelings', 'Appearance and judgements', 'Saying how you feel'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'feelings-judgements', {
      a: { title: 'Feelings', description: 'Names of emotions.', words: feelings },
      b: {
        title: 'Appearance and judgements',
        description: 'How people look and seem.',
        words: looks,
      },
      listen: [
        'la déception',
        'la honte',
        'le soulagement',
        'la rancune',
        'la silhouette',
        'une coiffure',
        'élégant',
        'négligé',
      ],
      spell: [
        ['unscramble', 'déception', 'disappointment', '😞', 'la déception'],
        ['unscramble', 'nostalgie', 'nostalgia', '🕰️', 'la nostalgie'],
        ['type', 'soulagement', 'relief', '😮‍💨', 'le soulagement'],
        ['type', 'silhouette', 'figure', '🧍', 'la silhouette'],
        ['type', 'cicatrice', 'scar', '🩹', 'une cicatrice'],
      ],
    }),

    activity(
      U,
      'gap-infinitive',
      'gapfill',
      meta(
        'Que or de?',
        'Same subject: infinitive. New subject: que + subjunctive.',
        ['grammar', 'fr-subjunctive-or-infinitive', 'feelings-judgements'],
        2,
        4,
        'fr-subjunctive-or-infinitive',
      ),
      {
        items: [
          g(
            'i1',
            'Je suis content ___ ici.',
            'd’être',
            [
              ['que je sois', 'Same subject in both parts: use de + infinitive.'],
              ['être', 'Content takes de before the infinitive.'],
              ['que d’être', 'Never combine que and de.'],
            ],
            'I am glad to be here.',
            'Same subject: de + infinitive.',
          ),
          g(
            'i2',
            'Je suis content que tu ___ ici.',
            'sois',
            [
              ['es', 'Content que is followed by the subjunctive.'],
              ['d’être', 'Two different subjects (je / tu) need que + subjunctive.'],
              ['serais', 'Content que is followed by the subjunctive.'],
            ],
            'I am glad that you are here.',
            'Different subjects: que + subjunctive.',
          ),
          g(
            'i3',
            'Elle a peur ___ en retard.',
            'd’arriver',
            [
              ['qu’elle arrive', 'Same subject: de + infinitive.'],
              ['arriver', 'Avoir peur takes de before the infinitive.'],
              ['que d’arriver', 'Never combine que and de.'],
            ],
            'She is afraid of arriving late.',
            'Avoir peur de + infinitive.',
          ),
          g(
            'i4',
            'Elle a peur que son fils ___ en retard.',
            'arrive',
            [
              ['arrivera', 'Avoir peur que is followed by the subjunctive.'],
              ['d’arriver', 'Two different subjects need que + subjunctive.'],
              ['arrivait', 'Avoir peur que is followed by the subjunctive.'],
            ],
            'She is afraid that her son will arrive late.',
            'Different subjects: que + subjunctive.',
          ),
          g(
            'i5',
            'Il faut ___ plus tôt.',
            'partir',
            [
              ['que partir', 'A general necessity is followed by the infinitive.'],
              ['de partir', 'Il faut is directly followed by the infinitive.'],
              ['que je parte', 'No person is named: use the infinitive.'],
            ],
            'One has to leave earlier.',
            'General necessity: il faut + infinitive.',
          ),
          g(
            'i6',
            'Il faut que nous ___ plus tôt.',
            'partions',
            [
              ['partir', 'When the person is named, use que + subjunctive.'],
              ['partons', 'Il faut que is followed by the subjunctive.'],
              ['partirons', 'Il faut que is followed by the subjunctive.'],
            ],
            'We have to leave earlier.',
            'Named person: il faut que + subjunctive.',
          ),
          g(
            'i7',
            'Je regrette ___ pas t’avoir écouté.',
            'de ne',
            [
              ['que je ne', 'Same subject: de + infinitive.'],
              ['que de ne', 'Never combine que and de.'],
              ['à ne', 'Regretter takes de.'],
            ],
            'I regret not having listened to you.',
            'Regretter de + infinitive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-past-subjunctive',
      'gapfill',
      meta(
        'The past subjunctive',
        'Something that happened before: avoir or être in the subjunctive + participle.',
        ['grammar', 'fr-subjonctif-passe', 'feelings-judgements'],
        3,
        4,
        'fr-subjonctif-passe',
      ),
      {
        items: [
          g(
            'p1',
            'Je suis ravi que tu ___ venu.',
            'sois',
            [
              ['es', 'After “je suis ravi que” use the subjunctive.'],
              ['seras', 'After “je suis ravi que” use the subjunctive.'],
              ['étais', 'After “je suis ravi que” use the subjunctive.'],
            ],
            'I am delighted that you came.',
            'Venir takes être: que tu sois venu.',
          ),
          g(
            'p2',
            'Je regrette que vous n’___ pas appelé.',
            'ayez',
            [
              ['avez', 'Regretter que is followed by the subjunctive.'],
              ['aviez', 'Regretter que is followed by the subjunctive.'],
              ['auriez', 'The conditional is not the subjunctive.'],
            ],
            'I regret that you did not call.',
            'Appeler takes avoir: que vous ayez appelé.',
          ),
          g(
            'p3',
            'Bien qu’il ___ travaillé toute la nuit, il n’était pas fatigué.',
            'ait',
            [
              ['a', 'Bien que is followed by the subjunctive.'],
              ['avait', 'Bien que is followed by the subjunctive.'],
              ['aurait', 'The conditional is not the subjunctive.'],
            ],
            'Although he had worked all night, he was not tired.',
            'Bien que + past subjunctive.',
          ),
          g(
            'p4',
            'Il est dommage qu’elle ___ partie si tôt.',
            'soit',
            [
              ['est', 'Il est dommage que is followed by the subjunctive.'],
              ['avait', 'Partir takes être.'],
              ['a', 'Partir takes être.'],
            ],
            'It is a pity that she left so early.',
            'Partir takes être: qu’elle soit partie.',
          ),
          g(
            'p5',
            'Je ne crois pas qu’ils ___ compris.',
            'aient',
            [
              ['ont', 'A negated croire que takes the subjunctive.'],
              ['avaient', 'A negated croire que takes the subjunctive.'],
              ['auront', 'A negated croire que takes the subjunctive.'],
            ],
            'I do not think they understood.',
            'Que + aient compris.',
          ),
          g(
            'p6',
            'Elle est fière d’___ réussi.',
            'avoir',
            [
              ['ait', 'Same subject: de + infinitive, not a subjunctive.'],
              ['aie', 'Same subject: de + infinitive, not a subjunctive.'],
              ['ayant', 'After fière de use the infinitive.'],
            ],
            'She is proud of having succeeded.',
            'Past infinitive: avoir + participle.',
          ),
          g(
            'p7',
            'Nous sommes contents qu’ils ___ arrivés sans problème.',
            'soient',
            [
              ['sont', 'Content que is followed by the subjunctive.'],
              ['étaient', 'Content que is followed by the subjunctive.'],
              ['seraient', 'The conditional is not the subjunctive.'],
            ],
            'We are glad that they arrived without problems.',
            'Arriver takes être: qu’ils soient arrivés.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-time',
      'sortit',
      meta(
        'Now or before?',
        'Present subjunctive for the same time or later, past subjunctive for earlier.',
        ['grammar', 'fr-subjonctif-passe', 'feelings-judgements'],
        2,
        4,
        'fr-subjonctif-passe',
      ),
      {
        instruction: 'Is the subjunctive in the present or in the past?',
        buckets: [
          { id: 'pres', label: 'present subjunctive', emoji: '⏺️' },
          { id: 'past', label: 'past subjunctive', emoji: '⏮️' },
        ],
        items: cards('t', TIME),
      },
    ),

    activity(
      U,
      'conj-past-subjunctive',
      'conjugation',
      meta(
        'The past subjunctive',
        'Fill in the forms (after “que”).',
        ['grammar', 'fr-subjonctif-passe'],
        3,
        4,
      ),
      {
        tables: [
          frForms(
            'sp-finir',
            'finir (subjonctif passé)',
            'to finish',
            ['aie fini', 'aies fini', 'ait fini', 'ayons fini', 'ayez fini', 'aient fini'],
            ['je', 'il/elle/on', 'ils/elles'],
            'fr-subjonctif-passe',
          ),
          frForms(
            'sp-venir',
            'venir (subjonctif passé)',
            'to come',
            ['sois venu', 'sois venu', 'soit venu', 'soyons venus', 'soyez venus', 'soient venus'],
            ['tu', 'nous', 'vous'],
            'fr-subjonctif-passe',
          ),
          frForms(
            'sp-faire',
            'faire (subjonctif passé)',
            'to do',
            ['aie fait', 'aies fait', 'ait fait', 'ayons fait', 'ayez fait', 'aient fait'],
            ['tu', 'nous', 'ils/elles'],
            'fr-subjonctif-passe',
          ),
          frForms(
            'sp-partir',
            'partir (subjonctif passé)',
            'to leave',
            [
              'sois parti',
              'sois parti',
              'soit parti',
              'soyons partis',
              'soyez partis',
              'soient partis',
            ],
            ['je', 'il/elle/on', 'vous'],
            'fr-subjonctif-passe',
          ),
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
        ['grammar', 'fr-subjunctive-or-infinitive', 'fr-subjonctif-passe'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'I am delighted that you came.',
            ['Je', 'suis', 'ravi', 'que', 'tu', 'sois', 'venu.'],
            { extra: ['es'], lesson: 'fr-subjonctif-passe' },
          ),
          sent(
            's2',
            'She is proud to have succeeded.',
            ['Elle', 'est', 'fière', 'd’avoir', 'réussi.'],
            { extra: ['qu’elle'], lesson: 'fr-subjunctive-or-infinitive' },
          ),
          sent(
            's3',
            'I am afraid that he will be late.',
            ['J’ai', 'peur', 'qu’il', 'soit', 'en', 'retard.'],
            { extra: ['de'], lesson: 'fr-subjunctive-or-infinitive' },
          ),
          sent(
            's4',
            'It is a pity that you did not call.',
            ['Il', 'est', 'dommage', 'que', 'tu', 'n’aies', 'pas', 'appelé.'],
            { extra: ['n’as'], lesson: 'fr-subjonctif-passe' },
          ),
          sent('s5', 'I regret having said that.', ['Je', 'regrette', 'd’avoir', 'dit', 'ça.'], {
            extra: ['que'],
            lesson: 'fr-subjunctive-or-infinitive',
          }),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'How do they feel?',
        'Read the sentence and pick its meaning.',
        ['communication', 'feelings-judgements'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Je suis soulagé que tu sois arrivé sans problème.',
            'I am relieved that you arrived without problems.',
            [
              'I am angry that you arrived late.',
              'I hope you will arrive soon.',
              'I was relieved to leave you.',
            ],
          ),
          qs(
            'r2',
            'Elle est déçue de ne pas avoir été invitée.',
            'She is disappointed not to have been invited.',
            [
              'She is delighted to be invited.',
              'She invited nobody.',
              'She is afraid to be invited.',
            ],
          ),
          qs(
            'r3',
            'Ça me gêne qu’on parle de ma cicatrice.',
            'It bothers me that people talk about my scar.',
            [
              'I am proud to talk about my scar.',
              'I got my scar yesterday.',
              'People hide my scar.',
            ],
          ),
          qs(
            'r4',
            'Il a une allure très soignée, mais un peu froide.',
            'He has a very neat look, but a bit cold.',
            [
              'He has a messy look.',
              'He has a warm, scruffy look.',
              'He is neat because he is cold.',
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
        'Share your feelings',
        'Express joy, regret and tactful judgements.',
        ['communication', 'feelings-judgements'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'news',
            title: 'Good and bad news',
            emoji: '📬',
            setting: 'A friend tells you about a job interview. Use tu.',
            turns: [
              say(
                'Sami',
                'J’ai eu le poste ! Je suis tellement fier.',
                'I got the job! I am so proud.',
              ),
              you(
                'Je suis ravi que tu aies réussi !',
                [
                  'Je suis ravi que tu as réussi !',
                  'Ravi que takes the subjunctive: que tu aies réussi.',
                ],
                [
                  'Je suis ravi de tu aies réussi !',
                  'De cannot be followed by a new subject: que.',
                ],
              ),
              say(
                'Sami',
                'Mais je regrette de ne pas avoir préparé mieux.',
                'But I regret not having prepared better.',
              ),
              you(
                'Ne t’inquiète pas : l’essentiel, c’est que tu sois content.',
                [
                  'Ne t’inquiète pas : l’essentiel, c’est que tu es content.',
                  'L’essentiel, c’est que + subjunctive.',
                ],
                ['Ne t’inquiète pas : c’est la honte !', 'This would make him feel worse.'],
              ),
            ],
          },
          {
            id: 'looks',
            title: 'A tactful remark',
            emoji: '🪞',
            setting: 'A colleague is unhappy with a new haircut. Reassure them with vous.',
            turns: [
              say(
                'Claire',
                'J’ai un complexe avec ma nouvelle coiffure.',
                'I am self-conscious about my new hairstyle.',
              ),
              you(
                'Je trouve que cette coiffure vous donne beaucoup de charme.',
                [
                  'Je trouve que cette coiffure vous donne beaucoup de honte.',
                  'La honte is shame: not a compliment.',
                ],
                [
                  'Je ne trouve pas que cette coiffure vous donne du charme.',
                  'This is the opposite of reassuring.',
                ],
              ),
              say(
                'Claire',
                'Vraiment ? Je craignais qu’elle soit trop négligée.',
                'Really? I was afraid it would look too untidy.',
              ),
              you(
                'Au contraire, elle est très soignée.',
                ['Au contraire, elle est très négligée.', 'Négligé means untidy: not reassuring.'],
                [
                  'Au contraire, elle est très colère.',
                  'Colère is a noun (anger), not an adjective.',
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
        'Feelings blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-subjunctive-or-infinitive', 'fr-subjonctif-passe'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf(
            'b1',
            '“Je suis content d’être là” uses the infinitive because the subject is the same.',
            true,
          ),
          tf(
            'b2',
            '“Je suis content que je sois là” is the best way to say it.',
            false,
            'With the same subject use de + infinitive: je suis content d’être là.',
          ),
          tf(
            'b3',
            'The past subjunctive is built with avoir or être in the subjunctive + participle.',
            true,
          ),
          tf(
            'b4',
            '“Je regrette qu’il est parti” is correct.',
            false,
            'Regretter que takes the subjunctive: qu’il soit parti.',
          ),
          tf('b5', '“Il faut partir” is general; “il faut que je parte” names a person.', true),
          tf('b6', '“La honte” means pride.', false, 'La honte is shame; la fierté is pride.'),
          tf('b7', '“Bien que” is followed by the subjunctive.', true),
          tf('b8', '“Soigné” means untidy.', false, 'Soigné means neat; négligé means untidy.'),
          tf('b9', '“Qu’elle soit partie” is the past subjunctive of partir.', true),
          tf('b10', '“Un complexe” can mean an insecurity about your looks.', true),
          tf(
            'b11',
            '“Elle a peur d’elle arrive” is correct.',
            false,
            'Avoir peur de + infinitive, or avoir peur qu’elle arrive.',
          ),
          tf('b12', '“L’allure” can describe someone’s general look.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Feelings challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'feelings-judgements'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Nous sommes heureux ___ ensemble.”',
            'd’être',
            ['qu’être', 'que nous soyons', 'être'],
            undefined,
            'fr-subjunctive-or-infinitive',
          ),
          q(
            'c2',
            'Complete: “Je suis surpris qu’elle ___ si vite répondu.”',
            'ait',
            ['a', 'avait', 'aura'],
            undefined,
            'fr-subjonctif-passe',
          ),
          q(
            'c3',
            'Complete: “Il est regrettable que vous ___ partis sans rien dire.”',
            'soyez',
            ['êtes', 'étiez', 'serez'],
            undefined,
            'fr-subjonctif-passe',
          ),
          q(
            'c4',
            'Complete: “Elle craint ___ trop tard.”',
            'd’arriver',
            ['qu’arriver', 'qu’elle arriver', 'arriver'],
            undefined,
            'fr-subjunctive-or-infinitive',
          ),
          q('c5', 'Which word means “relief”?', 'le soulagement', [
            'la gêne',
            'la rancune',
            'le regret',
          ]),
          q('c6', 'Which word means “a hairstyle”?', 'une coiffure', [
            'une silhouette',
            'une cicatrice',
            'une allure',
          ]),
          q('c7', '“Il est dommage que tu sois parti” means …', 'It is a pity that you left.', [
            'I hope you will leave.',
            'You leave too late.',
            'It is a shame to be here.',
          ]),
          q('c8', 'Which adjective means “well-groomed”?', 'soigné', [
            'négligé',
            'crédule',
            'indécis',
          ]),
        ],
      },
    ),
  ],
};
