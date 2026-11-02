import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import {
  gap,
  meta,
  presentTable,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-a1-2-langues';

const learning = vocabList(U, 'Learning a language', [
  ['la langue', 'language', '🗣️'],
  ['la prononciation', 'pronunciation', '👄'],
  ['le vocabulaire', 'vocabulary', '🔤'],
  ['la grammaire', 'grammar', '📐'],
  ['corriger', 'to correct', '✅'],
  ['traduire', 'to translate', '🔁'],
  ['le dictionnaire', 'dictionary', '📖'],
  ['l’exercice', 'exercise', '📝'],
  ['le niveau', 'level', '📶'],
  ['le débutant, la débutante', 'beginner', '🌱'],
  ['la méthode', 'method', '🧭'],
  ['l’application', 'app', '📱'],
  ['les sous-titres', 'subtitles', '🎬'],
]);

const difficulties = vocabList(U, 'Difficulties', [
  ['avoir du mal à …', 'to find it hard to …', '😓'],
  ['ne pas y arriver', 'not to manage', '🙁'],
  ['se tromper', 'to make a mistake', '🙈'],
  ['oublier', 'to forget', '🫥'],
  ['avoir peur de …', 'to be afraid of …', '😨'],
  ['répéter', 'to repeat', '🔂'],
  ['parler plus lentement', 'to speak more slowly', '🐌'],
  ['Pouvez-vous répéter ?', 'Can you repeat?', '🙋'],
]);

const encourage = vocabList(U, 'Encouraging someone', [
  ['Bien joué !', 'Well played!', '👏'],
  ['Continue !', 'Carry on!', '➡️'],
  ['Tu y arrives !', 'You are getting there!', '🎯'],
  ['N’hésite pas !', 'Do not hesitate!', '🙌'],
  ['C’est normal.', 'That is normal.', '👌'],
  ['Pas de panique !', 'Do not panic!', '🧘'],
  ['Tu fais des progrès.', 'You are making progress.', '📈'],
]);

const opinions = vocabList(U, 'Giving an opinion', [
  ['Je pense que …', 'I think that …', '💭'],
  ['Je trouve que …', 'I find that …', '🧐'],
  ['Je suis d’accord.', 'I agree.', '👍'],
  ['Je ne suis pas d’accord.', 'I disagree.', '👎'],
  ['avoir raison', 'to be right', '✔️'],
  ['Pas du tout !', 'Not at all!', '🙅'],
  ['Exactement !', 'Exactly!', '🎯'],
]);

const practise = vocabList(U, 'Practising', [
  ['l’échange linguistique', 'language exchange', '🤝'],
  ['le tandem', 'language tandem partner', '👥'],
  ['tenir un journal', 'to keep a diary', '📓'],
  ['regarder un film en version originale', 'to watch a film in the original language', '🎞️'],
  ['faire des progrès', 'to make progress', '📊'],
  ['parler avec des Français', 'to talk with French people', '🇫🇷'],
  ['bavarder', 'to chat', '💬'],
]);

const vocab = [...learning, ...difficulties, ...encourage, ...opinions, ...practise];

const pictureQuiz = byDe(
  vocab,
  'le dictionnaire',
  'les sous-titres',
  'l’application',
  'Bien joué !',
  'tenir un journal',
  'l’échange linguistique',
);

const heard = byDe(
  vocab,
  'la prononciation',
  'corriger',
  'le dictionnaire',
  'Pas de panique !',
  'Je ne suis pas d’accord.',
);

export const langues: UnitContent = {
  unit: unitFr({
    id: U,
    order: 8,
    title: 'C’était bien ?',
    subtitle: 'Talk about learning French, share your opinion and encourage others',
    emoji: '🇫🇷',
    goals: [
      'Say how you learn French and what is hard',
      'Ask for help and encourage someone',
      'Give an opinion, agree and disagree politely',
      'Tell what you did, what you do and what you will do',
    ],
    grammar: [
      'me, te, nous, vous as objects',
      'Giving an opinion',
      'Verbs followed by à or de',
      'Which tense?',
    ],
    vocabFields: [
      'Learning a language',
      'Difficulties',
      'Encouraging someone',
      'Giving an opinion',
      'Practising',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-learning',
      'flashcards',
      meta(
        'Learning a language',
        'Pronunciation, grammar, dictionary and apps.',
        ['vocabulary', 'language-learning'],
        1,
        4,
      ),
      flashcards(learning),
    ),

    activity(
      U,
      'flash-difficulties',
      'flashcards',
      meta(
        'Difficulties and encouragement',
        'Say what is hard and cheer somebody up.',
        ['vocabulary', 'language-learning'],
        1,
        4,
      ),
      flashcards([...difficulties, ...encourage]),
    ),

    activity(
      U,
      'flash-opinions',
      'flashcards',
      meta(
        'Giving an opinion',
        'Agree, disagree and say what you think.',
        ['vocabulary', 'communication'],
        1,
        3,
      ),
      flashcards(opinions),
    ),

    activity(
      U,
      'flash-practise',
      'flashcards',
      meta(
        'Practising French',
        'Ways to practise outside the classroom.',
        ['vocabulary', 'language-learning'],
        1,
        3,
      ),
      flashcards(practise),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'Tools and encouragement',
        'Look at the picture and pick the word.',
        ['vocabulary', 'language-learning'],
        1,
        3,
      ),
      quizEmoji(pictureQuiz, [...learning, ...encourage, ...practise], 4),
    ),

    activity(
      U,
      'listen-langues',
      'listen',
      meta(
        'Listen: learning French',
        'Listen to the word and pick its meaning.',
        ['listening', 'language-learning'],
        2,
        3,
      ),
      listen(heard, vocab),
    ),

    activity(
      U,
      'conj-apprendre',
      'conjugation',
      {
        ...meta(
          'apprendre, comprendre, répondre',
          'Two verbs like prendre, and a regular -re verb.',
          ['grammar', 'fr-a12-verbs-a-de', 'language-learning'],
          2,
          4,
        ),
        lesson: 'fr-a12-verbs-a-de',
      },
      {
        tables: [
          presentTable(
            'apprendre',
            'to learn',
            ['apprends', 'apprends', 'apprend', 'apprenons', 'apprenez', 'apprennent'],
            ['je', 'il/elle/on', 'nous'],
          ),
          presentTable(
            'comprendre',
            'to understand',
            ['comprends', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent'],
            ['tu', 'vous', 'ils/elles'],
          ),
          presentTable(
            'répondre',
            'to answer',
            ['réponds', 'réponds', 'répond', 'répondons', 'répondez', 'répondent'],
            ['je', 'tu', 'nous'],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-a-de',
      'sortit',
      {
        ...meta(
          'à or de?',
          'Which preposition goes between the verb and the infinitive?',
          ['grammar', 'fr-a12-verbs-a-de', 'language-learning'],
          2,
          3,
        ),
        lesson: 'fr-a12-verbs-a-de',
      },
      {
        instruction: 'Which preposition follows the verb?',
        buckets: [
          { id: 'a', label: 'à + infinitive', emoji: '➡️' },
          { id: 'de', label: 'de + infinitive', emoji: '↩️' },
        ],
        items: sortCards('v', [
          ['apprendre', 'a', 'to learn to: j’apprends à parler'],
          ['commencer', 'a', 'to start: je commence à comprendre'],
          ['continuer', 'a', 'to continue: je continue à lire'],
          ['réussir', 'a', 'to succeed: je réussis à écrire'],
          ['avoir du mal', 'a', 'to find it hard: j’ai du mal à parler'],
          ['essayer', 'de', 'to try: j’essaie de répondre'],
          ['arrêter', 'de', 'to stop: j’arrête de traduire'],
          ['décider', 'de', 'to decide: je décide de parler'],
          ['oublier', 'de', 'to forget: j’oublie de répéter'],
          ['avoir peur', 'de', 'to be afraid: j’ai peur de parler'],
        ]),
      },
    ),

    activity(
      U,
      'gap-pronouns',
      'gapfill',
      {
        ...meta(
          'me, te, nous or vous?',
          'The pronoun for I, you and we as an object.',
          ['grammar', 'fr-a12-me-te', 'language-learning'],
          2,
          4,
        ),
        lesson: 'fr-a12-me-te',
      },
      {
        items: [
          gap(
            'm1',
            'Le professeur ___ beaucoup. (helps me)',
            'm’aide',
            ['m’aide', 'me aide', 'moi aide', 'je aide'],
            'The teacher helps me.',
            'Me becomes m’ before a vowel: il m’aide.',
          ),
          gap(
            'm2',
            'Je ___ bien quand tu parles. (listen to you)',
            't’écoute',
            ['t’écoute', 'te écoute', 'toi écoute', 'tu écoute'],
            'I listen to you carefully when you speak.',
            'Te becomes t’ before a vowel: je t’écoute.',
          ),
          gap(
            'm3',
            'Il ___ téléphone tous les soirs. (to us)',
            'nous',
            ['nous', 'vous', 'leur', 'lui'],
            'He phones us every evening.',
            'Nous stays nous, before the verb.',
          ),
          gap(
            'm4',
            'Madame, je ___ comprends bien. (you, formal)',
            'vous',
            ['vous', 'nous', 'te', 'les'],
            'Madam, I understand you well.',
            'Vous stays vous, before the verb.',
          ),
          gap(
            'm5',
            'Ils ne ___ répondent pas. (to me)',
            'me',
            ['me', 'moi', 'm’', 'je'],
            'They do not answer me.',
            'Ne goes before me: ils ne me répondent pas.',
          ),
          gap(
            'm6',
            'Elle va ___ expliquer la règle. (to you, informal)',
            'te',
            ['te', 'tu', 'toi', 't’'],
            'She is going to explain the rule to you.',
            'With aller + infinitive the pronoun goes before the infinitive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-opinion',
      'gapfill',
      {
        ...meta(
          'What do you think?',
          'Give an opinion and agree or disagree.',
          ['grammar', 'fr-a12-opinion', 'communication'],
          2,
          4,
        ),
        lesson: 'fr-a12-opinion',
      },
      {
        items: [
          gap(
            'o1',
            'Je ___ que le français est très beau.',
            'trouve',
            ['trouve', 'trouver', 'trouvé', 'trouves'],
            'I find that French is very beautiful.',
            'Je trouve que + a full sentence.',
          ),
          gap(
            'o2',
            '___ mon avis, la grammaire est difficile.',
            'À',
            ['À', 'En', 'Dans', 'Pour'],
            'In my opinion, grammar is difficult.',
            'The fixed phrase is à mon avis.',
          ),
          gap(
            'o3',
            'Tu ___ raison : c’est plus facile avec un tandem.',
            'as',
            ['as', 'es', 'a', 'ai'],
            'You are right: it is easier with a tandem partner.',
            'You are right: avoir raison, with avoir.',
          ),
          gap(
            'o4',
            'Je suis d’___ avec toi.',
            'accord',
            ['accord', 'avis', 'raison', 'tort'],
            'I agree with you.',
            'Être d’accord avec quelqu’un.',
          ),
          gap(
            'o5',
            'Tu dis que c’est facile ? Je ne suis pas d’accord. ___ du tout !',
            'Pas',
            ['Pas', 'Non', 'Jamais', 'Rien'],
            'You say it is easy? I disagree. Not at all!',
            'Pas du tout = not at all.',
          ),
          gap(
            'o6',
            'Il a ___ : on ne peut pas apprendre sans faire d’erreurs.',
            'raison',
            ['raison', 'tort', 'peur', 'mal'],
            'He is right: you cannot learn without making mistakes.',
            'Avoir raison = to be right.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-a-de',
      'gapfill',
      {
        ...meta(
          'à or de before the infinitive',
          'Pick the right little word.',
          ['grammar', 'fr-a12-verbs-a-de', 'language-learning'],
          2,
          4,
        ),
        lesson: 'fr-a12-verbs-a-de',
      },
      {
        items: [
          gap(
            'a1',
            'J’apprends ___ parler français.',
            'à',
            ['à', 'de', 'pour', 'en'],
            'I am learning to speak French.',
            'Apprendre à + infinitive.',
          ),
          gap(
            'a2',
            'Elle essaie ___ répondre en français.',
            'de',
            ['de', 'à', 'pour', 'en'],
            'She tries to answer in French.',
            'Essayer de + infinitive.',
          ),
          gap(
            'a3',
            'Nous commençons ___ comprendre les films.',
            'à',
            ['à', 'de', 'pour', 'en'],
            'We are starting to understand films.',
            'Commencer à + infinitive.',
          ),
          gap(
            'a4',
            'J’ai peur ___ faire des fautes.',
            'de',
            ['de', 'à', 'pour', 'en'],
            'I am afraid of making mistakes.',
            'Avoir peur de + infinitive.',
          ),
          gap(
            'a5',
            'Tu as du mal ___ retenir le vocabulaire ?',
            'à',
            ['à', 'de', 'pour', 'en'],
            'Do you find it hard to remember the vocabulary?',
            'Avoir du mal à + infinitive.',
          ),
          gap(
            'a6',
            'Il a arrêté ___ traduire tous les mots.',
            'de',
            ['de', 'à', 'pour', 'en'],
            'He stopped translating every word.',
            'Arrêter de + infinitive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-tenses',
      'gapfill',
      {
        ...meta(
          'Which tense?',
          'Present, past or future? Let the time word decide.',
          ['grammar', 'fr-a12-tenses', 'communication'],
          3,
          4,
        ),
        lesson: 'fr-a12-tenses',
      },
      {
        items: [
          gap(
            't1',
            'Hier, j’___ un film en version originale.',
            'ai regardé',
            ['ai regardé', 'regarde', 'vais regarder', 'regardais'],
            'Yesterday I watched a film in the original language.',
            'Hier points to the passé composé.',
          ),
          gap(
            't2',
            'Demain, nous ___ avec un tandem.',
            'allons parler',
            ['allons parler', 'avons parlé', 'parlons', 'parlerons'],
            'Tomorrow we are going to talk with a tandem partner.',
            'Demain points to the near future.',
          ),
          gap(
            't3',
            'D’habitude, je ___ mes exercices le soir.',
            'fais',
            ['fais', 'ai fait', 'vais faire', 'faisais'],
            'Usually I do my exercises in the evening.',
            'A habit: the present.',
          ),
          gap(
            't4',
            'L’année dernière, le cours ___ difficile.',
            'était',
            ['était', 'est', 'sera', 'a été'],
            'Last year the course was difficult.',
            'Describing how it was: était.',
          ),
          gap(
            't5',
            'Cette semaine, elle ___ trois podcasts.',
            'écoute',
            ['écoute', 'a écouté', 'écoutait', 'écoutera'],
            'This week she listens to three podcasts.',
            'A current routine: the present.',
          ),
          gap(
            't6',
            'Le mois prochain, je ___ à Paris pour pratiquer.',
            'vais aller',
            ['vais aller', 'suis allé', 'allais', 'vas aller'],
            'Next month I am going to go to Paris to practise.',
            'Le mois prochain points to the near future.',
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
        ['grammar', 'language-learning'],
        2,
        4,
      ),
      {
        items: [
          {
            ...sent('s1', 'The teacher helps me.', ['Le', 'professeur', 'm’aide.'], {
              extra: ['me'],
            }),
            lesson: 'fr-a12-me-te' as const,
          },
          {
            ...sent('s2', 'I do not understand you.', ['Je', 'ne', 'vous', 'comprends', 'pas.'], {
              extra: ['leur'],
            }),
            lesson: 'fr-a12-me-te' as const,
          },
          {
            ...sent('s3', 'In my opinion, it is easy.', ['À', 'mon', 'avis,', 'c’est', 'facile.'], {
              extra: ['ma'],
            }),
            lesson: 'fr-a12-opinion' as const,
          },
          {
            ...sent(
              's4',
              'I am learning to speak French.',
              ['J’apprends', 'à', 'parler', 'français.'],
              { extra: ['de'] },
            ),
            lesson: 'fr-a12-verbs-a-de' as const,
          },
          {
            ...sent(
              's5',
              'She is afraid of making mistakes.',
              ['Elle', 'a', 'peur', 'de', 'faire', 'des', 'fautes.'],
              { extra: ['à'] },
            ),
            lesson: 'fr-a12-verbs-a-de' as const,
          },
          {
            ...sent(
              's6',
              'Yesterday I listened to a podcast.',
              ['Hier,', 'j’ai', 'écouté', 'un', 'podcast.'],
              { extra: ['écoute'] },
            ),
            lesson: 'fr-a12-tenses' as const,
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Learning French together',
        'Ask for help, encourage a friend and give your opinion.',
        ['communication', 'language-learning'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'class',
            title: 'In class',
            emoji: '🏫',
            setting: 'You ask your teacher for help. Use vous.',
            turns: [
              say(
                'La professeure',
                'Vous avez une question sur l’exercice ?',
                'Do you have a question about the exercise?',
              ),
              you(
                'Oui. Je n’ai pas compris. Pouvez-vous répéter, s’il vous plaît ?',
                [
                  'Oui. Je ne comprends pas. Pouvez-vous répéter, s’il te plaît ?',
                  'You use vous with your teacher: s’il vous plaît.',
                ],
                [
                  'Oui. J’ai pas compris. Pouvez-vous répéter, s’il vous plaît ?',
                  'In writing keep ne: je n’ai pas compris.',
                ],
              ),
              say(
                'La professeure',
                'Bien sûr. Je vais parler plus lentement. Vous commencez à comprendre ?',
                'Of course. I am going to speak more slowly. Are you starting to understand?',
              ),
              you(
                'Oui, merci. Vous m’aidez beaucoup.',
                [
                  'Oui, merci. Vous me aidez beaucoup.',
                  'Me becomes m’ before a vowel: vous m’aidez.',
                ],
                [
                  'Oui, merci. Vous aidez moi beaucoup.',
                  'The pronoun goes before the verb: vous m’aidez.',
                ],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'With a friend',
            emoji: '💬',
            setting: 'A friend is discouraged. Use tu.',
            turns: [
              say(
                'Léo',
                'J’ai peur de parler. Je fais trop de fautes, c’est nul.',
                'I am afraid to speak. I make too many mistakes, it is awful.',
              ),
              you(
                'Pas de panique ! Je te comprends très bien. Continue à parler.',
                [
                  'Pas de panique ! Je te comprends très bien. Continue de parler.',
                  'Continuer à + infinitive.',
                ],
                [
                  'Pas de panique ! Je te comprends très. Continue à parler.',
                  'With a verb use très bien: je te comprends très bien.',
                ],
              ),
              say(
                'Léo',
                'À ton avis, c’est mieux de parler avec un tandem ?',
                'In your opinion, is it better to talk with a tandem partner?',
              ),
              you(
                'Oui, je pense que tu as raison. Moi aussi, je m’entraîne comme ça.',
                [
                  'Oui, je pense que tu es raison. Moi aussi, je m’entraîne comme ça.',
                  'You are right: tu as raison, with avoir.',
                ],
                [
                  'Oui, je pense que tu as raison. Moi non plus, je m’entraîne comme ça.',
                  'Moi non plus answers a negative sentence. Here you agree: moi aussi.',
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
        'Language blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', 'language-learning'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“La prononciation” is how you say words.', true),
          tf(
            'b2',
            '“Oublier” means “to remember”.',
            false,
            'Oublier means to forget. To remember is retenir.',
          ),
          tf('b3', '“Il m’aide” means “He helps me”.', true),
          tf('b4', '“Il me aide” is correct.', false, 'Me becomes m’ before a vowel: il m’aide.'),
          tf('b5', '“Je suis d’accord” means “I agree”.', true),
          tf(
            'b6',
            '“J’ai raison” means “I am wrong”.',
            false,
            'J’ai raison means I am right. Wrong is j’ai tort.',
          ),
          tf('b7', '“J’apprends à parler” is correct.', true),
          tf(
            'b8',
            '“J’essaie à parler” is correct.',
            false,
            'Essayer takes de: j’essaie de parler.',
          ),
          tf(
            'b9',
            '“Hier, je regarde un film” is correct.',
            false,
            'Hier needs the past: hier, j’ai regardé un film.',
          ),
          tf('b10', '“Demain, je vais travailler” is correct.', true),
          tf('b11', '“Bien joué !” is a way to encourage someone.', true),
          tf('b12', '“À mon avis” means “in my opinion”.', true),
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
        ['vocabulary', 'grammar', 'language-learning'],
        3,
        4,
      ),
      {
        questions: [
          {
            ...q('c1', 'Complete: “Elle ___ répond souvent.” (to me)', 'me', ['moi', 'je', 'lui']),
            lesson: 'fr-a12-me-te' as const,
          },
          {
            ...q('c2', 'Which sentence is correct?', 'Il nous téléphone.', [
              'Il téléphone nous.',
              'Il téléphone nous les.',
              'Il nous téléphones.',
            ]),
            lesson: 'fr-a12-me-te' as const,
          },
          {
            ...q('c3', 'How do you say “I agree”?', 'Je suis d’accord.', [
              'J’ai d’accord.',
              'Je suis raison.',
              'Je fais d’accord.',
            ]),
            lesson: 'fr-a12-opinion' as const,
          },
          {
            ...q('c4', 'Complete: “Elle commence ___ comprendre.”', 'à', ['de', 'pour', 'en']),
            lesson: 'fr-a12-verbs-a-de' as const,
          },
          {
            ...q('c5', 'Complete: “Il a décidé ___ partir.”', 'de', ['à', 'pour', 'en']),
            lesson: 'fr-a12-verbs-a-de' as const,
          },
          {
            ...q('c6', 'Which tense goes with “hier”?', 'passé composé', [
              'present',
              'futur proche',
              'imperative',
            ]),
            lesson: 'fr-a12-tenses' as const,
          },
          q('c7', 'What does “hésiter” mean?', 'to hesitate', [
            'to forget',
            'to repeat',
            'to translate',
          ]),
          q('c8', 'What do you say to encourage someone?', 'Courage !', [
            'Pas du tout !',
            'Peut-être.',
            'À mon avis.',
          ]),
        ],
      },
    ),
  ],
};
