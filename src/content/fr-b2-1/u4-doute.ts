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

const U = 'fr-b2-1-doute';

const ideas = vocabList(U, 'Opinions and arguments', [
  ['un point de vue', 'a point of view', '👁️'],
  ['un argument', 'an argument', '🗣️'],
  ['la conviction', 'conviction', '💪'],
  ['un doute', 'a doubt', '❓'],
  ['une certitude', 'a certainty', '✅'],
  ['une hypothèse', 'a hypothesis', '🧪'],
  ['une évidence', 'something obvious', '💡'],
  ['un désaccord', 'a disagreement', '⚡'],
  ['un compromis', 'a compromise', '🤝'],
  ['une objection', 'an objection', '✋'],
  ['une preuve', 'a proof, evidence', '🔍'],
  ['un débat', 'a debate', '🎙️'],
  ['une rumeur', 'a rumour', '🗨️'],
  ['une polémique', 'a controversy', '🔥'],
]);

const attitudes = vocabList(U, 'Attitudes and judgements', [
  ['sceptique', 'sceptical', '🤨'],
  ['convaincu', 'convinced', '😤'],
  ['persuadé', 'persuaded, sure', '👍'],
  ['indécis', 'undecided', '🤷'],
  ['crédule', 'gullible', '🐑'],
  ['méfiant', 'wary, distrustful', '🕵️'],
  ['catégorique', 'categorical', '🚫'],
  ['nuancé', 'nuanced, balanced', '⚖️'],
  ['incontestable', 'undeniable', '🏛️'],
  ['discutable', 'debatable', '🤔'],
  ['plausible', 'plausible', '🙂'],
  ['improbable', 'unlikely', '🎰'],
]);

const phrases = vocabList(U, 'Giving your opinion', [
  ['À mon avis, vous avez tort.', 'In my opinion, you are wrong.', '🗣️'],
  ['Je ne suis pas convaincu que ce soit vrai.', 'I am not convinced that it is true.', '🤨'],
  ['Il est probable qu’il viendra.', 'He will probably come.', '🔮'],
  ['Je doute que ce soit une bonne idée.', 'I doubt that it is a good idea.', '❓'],
  ['Il est évident que tu as raison.', 'It is obvious that you are right.', '💡'],
  ['Je ne pense pas qu’il ait menti.', 'I do not think that he lied.', '🙅'],
  [
    'Je suis d’accord avec vous, dans une certaine mesure.',
    'I agree with you, to a certain extent.',
    '🤝',
  ],
  ['Je tiens à nuancer ce point.', 'I want to qualify this point.', '⚖️'],
]);

const vocab = [...ideas, ...attitudes, ...phrases];

const MOOD: [string, 'ind' | 'subj', string][] = [
  ['Je suis sûr qu’il a raison.', 'ind', 'I am sure that he is right.'],
  ['Je ne suis pas sûr qu’il ait raison.', 'subj', 'I am not sure that he is right.'],
  ['Il est probable qu’il viendra.', 'ind', 'He will probably come.'],
  ['Il est peu probable qu’il vienne.', 'subj', 'He is unlikely to come.'],
  ['Je pense qu’elle dit la vérité.', 'ind', 'I think she is telling the truth.'],
  ['Je ne pense pas qu’elle dise la vérité.', 'subj', 'I do not think she is telling the truth.'],
  ['Je doute qu’il soit sincère.', 'subj', 'I doubt that he is sincere.'],
  ['Il me semble qu’il est fatigué.', 'ind', 'It seems to me that he is tired.'],
  ['Il se peut qu’il pleuve.', 'subj', 'It may rain.'],
  ['Je suis convaincu que c’est vrai.', 'ind', 'I am convinced that it is true.'],
  ['Il est possible qu’il ait raison.', 'subj', 'It is possible that he is right.'],
  ['J’espère qu’il viendra.', 'ind', 'I hope that he will come.'],
];

export const doute: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Doute et certitude',
    subtitle:
      'Give an opinion, express certainty and doubt, and choose between indicative and subjunctive',
    emoji: '🤔',
    goals: [
      'Give, nuance and challenge an opinion',
      'Form the present subjunctive of common verbs',
      'Choose the indicative or the subjunctive after verbs and phrases of opinion',
    ],
    grammar: ['The present subjunctive', 'Indicative or subjunctive after opinion verbs'],
    vocabFields: ['Opinions and arguments', 'Attitudes and judgements', 'Giving your opinion'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'opinion-doubt', {
      a: { title: 'Opinions and arguments', description: 'Words to discuss ideas.', words: ideas },
      b: {
        title: 'Attitudes and judgements',
        description: 'Adjectives for beliefs.',
        words: attitudes,
      },
      listen: [
        'un argument',
        'une certitude',
        'un compromis',
        'une rumeur',
        'sceptique',
        'crédule',
        'incontestable',
        'improbable',
      ],
      spell: [
        ['unscramble', 'argument', 'argument', '🗣️', 'un argument'],
        ['unscramble', 'compromis', 'compromise', '🤝', 'un compromis'],
        ['type', 'hypothèse', 'hypothesis', '🧪', 'une hypothèse'],
        ['type', 'sceptique', 'sceptical', '🤨', 'sceptique'],
        ['type', 'polémique', 'controversy', '🔥', 'une polémique'],
      ],
    }),

    activity(
      U,
      'gap-forms',
      'gapfill',
      meta(
        'Subjunctive forms',
        'Choose the right present subjunctive.',
        ['grammar', 'fr-subjonctif-present', 'opinion-doubt'],
        2,
        4,
        'fr-subjonctif-present',
      ),
      {
        items: [
          g(
            'f1',
            'Il faut que tu ___ à l’heure.',
            'sois',
            [
              ['es', 'Il faut que is followed by the subjunctive of être: sois.'],
              ['seras', 'Il faut que is followed by the subjunctive.'],
              ['serais', 'The conditional is not the subjunctive.'],
            ],
            'You have to be on time.',
            'Être: que je sois, que tu sois …',
          ),
          g(
            'f2',
            'Je doute qu’il ___ la vérité.',
            'dise',
            [
              ['dit', 'Douter que is followed by the subjunctive.'],
              ['dira', 'Douter que is followed by the subjunctive.'],
              ['disait', 'Douter que is followed by the subjunctive.'],
            ],
            'I doubt that he tells the truth.',
            'Dire: que je dise.',
          ),
          g(
            'f3',
            'Il est possible qu’elle ___ raison.',
            'ait',
            [
              ['a', 'Il est possible que is followed by the subjunctive.'],
              ['aura', 'Il est possible que is followed by the subjunctive.'],
              ['aie', 'With elle the subjunctive of avoir is ait.'],
            ],
            'It is possible that she is right.',
            'Avoir: que j’aie, que tu aies, qu’il ait.',
          ),
          g(
            'f4',
            'Je ne pense pas qu’ils ___ venir.',
            'puissent',
            [
              ['peuvent', 'After a negated penser, the subjunctive is used.'],
              ['pourront', 'After a negated penser, the subjunctive is used.'],
              ['pourraient', 'The conditional is not the subjunctive.'],
            ],
            'I do not think they can come.',
            'Pouvoir: que je puisse … qu’ils puissent.',
          ),
          g(
            'f5',
            'Il est douteux que nous ___ d’accord.',
            'soyons',
            [
              ['sommes', 'Il est douteux que is followed by the subjunctive.'],
              ['serons', 'Il est douteux que is followed by the subjunctive.'],
              ['étions', 'The imparfait is not the subjunctive.'],
            ],
            'It is doubtful that we agree.',
            'Nous soyons, vous soyez.',
          ),
          g(
            'f6',
            'Je voudrais que vous ___ plus attentifs.',
            'soyez',
            [
              ['êtes', 'Vouloir que is followed by the subjunctive.'],
              ['serez', 'Vouloir que is followed by the subjunctive.'],
              ['soyons', 'Soyons is the nous form; here the subject is vous.'],
            ],
            'I would like you to be more attentive.',
            'Vous soyez.',
          ),
          g(
            'f7',
            'Il faut que je le ___ avant ce soir.',
            'fasse',
            [
              ['fais', 'Il faut que is followed by the subjunctive.'],
              ['ferai', 'Il faut que is followed by the subjunctive.'],
              ['ferais', 'The conditional is not the subjunctive.'],
            ],
            'I have to do it before tonight.',
            'Faire: que je fasse.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-mood',
      'gapfill',
      meta(
        'Sure or not sure?',
        'Indicative for certainty, subjunctive for doubt.',
        ['grammar', 'fr-opinion-mood', 'opinion-doubt'],
        3,
        4,
        'fr-opinion-mood',
      ),
      {
        items: [
          g(
            'm1',
            'Je pense qu’il ___ raison.',
            'a',
            [
              ['ait', 'Penser que (affirmative) is followed by the indicative.'],
              ['aura eu', 'The sentence states an opinion about now.'],
              ['aurait', 'The conditional is not needed here.'],
            ],
            'I think he is right.',
            'Penser que + indicative.',
          ),
          g(
            'm2',
            'Je ne pense pas qu’il ___ raison.',
            'ait',
            [
              ['a', 'A negated penser que is followed by the subjunctive.'],
              ['avait', 'A negated penser que is followed by the subjunctive.'],
              ['aura', 'A negated penser que is followed by the subjunctive.'],
            ],
            'I do not think he is right.',
            'Ne pas penser que + subjunctive.',
          ),
          g(
            'm3',
            'Il est certain que ce projet ___ un succès.',
            'sera',
            [
              ['soit', 'Il est certain que states a fact: indicative.'],
              ['serait', 'The conditional would make the certainty weaker.'],
              ['fût', 'That is the literary imparfait du subjonctif.'],
            ],
            'It is certain that this project will be a success.',
            'Il est certain que + indicative.',
          ),
          g(
            'm4',
            'Il est possible que tu ___ raison.',
            'aies',
            [
              ['as', 'Il est possible que is followed by the subjunctive.'],
              ['auras', 'Il est possible que is followed by the subjunctive.'],
              ['avais', 'Il est possible que is followed by the subjunctive.'],
            ],
            'It is possible that you are right.',
            'Il est possible que + subjunctive.',
          ),
          g(
            'm5',
            'Je doute que cette rumeur ___ vraie.',
            'soit',
            [
              ['est', 'Douter que is followed by the subjunctive.'],
              ['sera', 'Douter que is followed by the subjunctive.'],
              ['était', 'Douter que is followed by the subjunctive.'],
            ],
            'I doubt that this rumour is true.',
            'Douter que + subjunctive.',
          ),
          g(
            'm6',
            'Il est évident qu’elle ___ menti.',
            'a',
            [
              ['ait', 'Il est évident que states a fact: indicative.'],
              ['aurait', 'Il est évident que states a fact: indicative.'],
              ['eût', 'That is the literary subjunctive.'],
            ],
            'It is obvious that she lied.',
            'Il est évident que + indicative.',
          ),
          g(
            'm7',
            'J’espère qu’il ___ bientôt.',
            'viendra',
            [
              ['vienne', 'Espérer que is followed by the indicative.'],
              ['viendrait', 'Espérer que is followed by the indicative.'],
              ['venait', 'Espérer que is followed by the indicative.'],
            ],
            'I hope he comes soon.',
            'Espérer que + indicative (often the future).',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-mood',
      'sortit',
      meta(
        'Indicative or subjunctive?',
        'Which mood follows the expression of opinion?',
        ['grammar', 'fr-opinion-mood', 'opinion-doubt'],
        2,
        4,
        'fr-opinion-mood',
      ),
      {
        instruction: 'Is the verb in the indicative or in the subjunctive?',
        buckets: [
          { id: 'ind', label: 'indicative', emoji: '🟢' },
          { id: 'subj', label: 'subjunctive', emoji: '🔵' },
        ],
        items: cards('m', MOOD),
      },
    ),

    activity(
      U,
      'conj-subjunctive',
      'conjugation',
      meta(
        'The present subjunctive',
        'Fill in the forms (after “que”).',
        ['grammar', 'fr-subjonctif-present'],
        3,
        4,
      ),
      {
        tables: [
          frForms(
            'subj-etre',
            'être (subjonctif)',
            'to be',
            ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
            ['je', 'il/elle/on', 'nous'],
            'fr-subjonctif-present',
          ),
          frForms(
            'subj-avoir',
            'avoir (subjonctif)',
            'to have',
            ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
            ['tu', 'vous', 'ils/elles'],
            'fr-subjonctif-present',
          ),
          frForms(
            'subj-faire',
            'faire (subjonctif)',
            'to do',
            ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
            ['je', 'nous', 'ils/elles'],
            'fr-subjonctif-present',
          ),
          frForms(
            'subj-prendre',
            'prendre (subjonctif)',
            'to take',
            ['prenne', 'prennes', 'prenne', 'prenions', 'preniez', 'prennent'],
            ['tu', 'il/elle/on', 'vous'],
            'fr-subjonctif-present',
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
        ['grammar', 'fr-subjonctif-present', 'fr-opinion-mood'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'I do not think that he is lying.',
            ['Je', 'ne', 'pense', 'pas', 'qu’il', 'mente.'],
            { extra: ['ment'], lesson: 'fr-opinion-mood' },
          ),
          sent(
            's2',
            'It is obvious that you are right.',
            ['Il', 'est', 'évident', 'que', 'tu', 'as', 'raison.'],
            { extra: ['aies'], lesson: 'fr-opinion-mood' },
          ),
          sent(
            's3',
            'I doubt that this rumour is true.',
            ['Je', 'doute', 'que', 'cette', 'rumeur', 'soit', 'vraie.'],
            { extra: ['est'], lesson: 'fr-opinion-mood' },
          ),
          sent(
            's4',
            'It is possible that they know the answer.',
            ['Il', 'est', 'possible', 'qu’ils', 'sachent', 'la', 'réponse.'],
            { extra: ['savent'], lesson: 'fr-subjonctif-present' },
          ),
          sent(
            's5',
            'I hope that you will come tomorrow.',
            ['J’espère', 'que', 'vous', 'viendrez', 'demain.'],
            { extra: ['veniez'], lesson: 'fr-opinion-mood' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Who is sure?',
        'Read the opinion and pick its meaning.',
        ['communication', 'opinion-doubt'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Je suis persuadé qu’il dit la vérité.',
            'I am sure that he is telling the truth.',
            [
              'I doubt that he is telling the truth.',
              'I wish he told the truth.',
              'He is persuading me to lie.',
            ],
          ),
          qs(
            'r2',
            'Je ne suis pas convaincu que ce soit une bonne idée.',
            'I am not convinced that this is a good idea.',
            [
              'I am convinced that this is a good idea.',
              'I never had a good idea.',
              'This idea convinced me.',
            ],
          ),
          qs(
            'r3',
            'Il est peu probable qu’elle accepte ce compromis.',
            'She is unlikely to accept this compromise.',
            [
              'She will certainly accept this compromise.',
              'She proposed a compromise.',
              'She never heard of the compromise.',
            ],
          ),
          qs(
            'r4',
            'Je tiens à nuancer ce point : tout n’est pas si simple.',
            'I want to qualify this point: not everything is so simple.',
            [
              'I refuse to discuss this point.',
              'I want to simplify everything.',
              'This point is the most important.',
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
        'Take part in a debate',
        'Give and challenge opinions.',
        ['communication', 'opinion-doubt'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'debate',
            title: 'A debate',
            emoji: '🎙️',
            setting:
              'At a meeting, a colleague says remote work is always better. Answer politely with vous.',
            turns: [
              say(
                'Paul',
                'Pour moi, le télétravail est toujours préférable. C’est une évidence !',
                'For me, remote work is always better. It is obvious!',
              ),
              you(
                'Je ne suis pas sûr que ce soit toujours le cas. Je tiens à nuancer.',
                [
                  'Je ne suis pas sûr que c’est toujours le cas. Je tiens à nuancer.',
                  'After “je ne suis pas sûr que” use the subjunctive: que ce soit.',
                ],
                [
                  'Je suis sûr que ce soit toujours le cas.',
                  'Je suis sûr que takes the indicative, and the meaning does not fit your answer.',
                ],
              ),
              say('Paul', 'Vous avez un argument ?', 'Do you have an argument?'),
              you(
                'Oui : il est probable que certains collègues se sentent isolés.',
                [
                  'Oui : il est probable que certains collègues se sentiraient isolés demain.',
                  'The conditional and “demain” do not fit.',
                ],
                [
                  'Oui : il est sûr que certains collègues se sentent isolés, je doute.',
                  'This contradicts itself: sûr and doute.',
                ],
              ),
            ],
          },
          {
            id: 'rumour',
            title: 'A rumour',
            emoji: '🗨️',
            setting: 'A friend repeats a rumour. You are sceptical. Use tu.',
            turns: [
              say(
                'Léa',
                'Il paraît que le patron va démissionner !',
                'Apparently the boss is going to resign!',
              ),
              you(
                'Je doute que ce soit vrai. Tu as une preuve ?',
                [
                  'Je doute que c’est vrai. Tu as une preuve ?',
                  'Douter que is followed by the subjunctive: que ce soit.',
                ],
                [
                  'Je sais que ce soit vrai. Tu as une preuve ?',
                  'Je sais que takes the indicative, and it would not fit the question.',
                ],
              ),
              say('Léa', 'Non, mais tout le monde le dit.', 'No, but everyone says so.'),
              you(
                'Une rumeur n’est pas un fait. Je reste sceptique.',
                ['Une rumeur est une preuve incontestable.', 'A rumour is not a proof.'],
                [
                  'Une rumeur est un compromis. Je reste crédule.',
                  'This does not fit: you are being sceptical, not gullible.',
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
        'Opinion blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-subjonctif-present', 'fr-opinion-mood'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Je pense qu’il vient” takes the indicative.', true),
          tf(
            'b2',
            '“Je ne pense pas qu’il vient” is correct.',
            false,
            'A negated penser que takes the subjunctive: qu’il vienne.',
          ),
          tf('b3', '“Il est certain que” is followed by the indicative.', true),
          tf(
            'b4',
            '“Il est possible que” is followed by the indicative.',
            false,
            'Il est possible que takes the subjunctive.',
          ),
          tf('b5', 'The subjunctive of être for je is “sois”.', true),
          tf(
            'b6',
            '“Que nous prenons” is the subjunctive of prendre.',
            false,
            'The subjunctive is que nous prenions.',
          ),
          tf(
            'b7',
            '“Espérer que” is followed by the subjunctive.',
            false,
            'Espérer que takes the indicative.',
          ),
          tf('b8', '“Sceptique” describes someone who doubts.', true),
          tf(
            'b9',
            '“Crédule” means “difficult to convince”.',
            false,
            'Crédule means gullible: easy to convince.',
          ),
          tf('b10', 'Douter que is followed by the subjunctive.', true),
          tf('b11', '“Une évidence” is something obvious.', true),
          tf(
            'b12',
            '“Un compromis” is a quarrel.',
            false,
            'A compromise is a deal where both sides give something up.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Opinion challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'opinion-doubt'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Je ne crois pas qu’elle ___ menti.”',
            'ait',
            ['a', 'avait', 'aura'],
            undefined,
            'fr-opinion-mood',
          ),
          q(
            'c2',
            'Complete: “Il est évident que vous ___ raison.”',
            'avez',
            ['ayez', 'auriez', 'aviez eu'],
            undefined,
            'fr-opinion-mood',
          ),
          q(
            'c3',
            'Complete: “Il faut que nous ___ une décision.”',
            'prenions',
            ['prenons', 'prendrons', 'prendrions'],
            undefined,
            'fr-subjonctif-present',
          ),
          q(
            'c4',
            'Complete: “Il se peut qu’il ___ en retard.”',
            'soit',
            ['est', 'sera', 'serait'],
            undefined,
            'fr-subjonctif-present',
          ),
          q('c5', 'Which word means “a rumour”?', 'une rumeur', [
            'une preuve',
            'une objection',
            'une hypothèse',
          ]),
          q('c6', 'Which adjective means “undeniable”?', 'incontestable', [
            'discutable',
            'improbable',
            'indécis',
          ]),
          q('c7', '“Je tiens à nuancer ce point” means …', 'I want to qualify this point.', [
            'I refuse this point.',
            'I am attached to my neighbour.',
            'I cannot hear this point.',
          ]),
          q(
            'c8',
            'Which sentence expresses the strongest certainty?',
            'Il est incontestable que tu as raison.',
            [
              'Il est possible que tu aies raison.',
              'Je doute que tu aies raison.',
              'Il se peut que tu aies raison.',
            ],
          ),
        ],
      },
    ),
  ],
};
