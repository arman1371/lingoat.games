import { byDe, flashcards, quizDeEn, vocabList } from '../builders';
import {
  activity,
  cards,
  gh,
  heard,
  meta,
  q,
  qh,
  say,
  sent,
  tf,
  typed,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-c1-1-travail';
const L = 'fr-c11-registers' as const;

const contrats = vocabList(U, 'Contracts and working conditions', [
  ['le télétravail', 'remote working', '🏠'],
  ['un CDI', 'a permanent contract', '📄'],
  ['un CDD', 'a fixed-term contract', '🗓️'],
  ['l’intérim', 'temping, agency work', '🔁'],
  ['un préavis', 'a period of notice', '⏳'],
  ['une démission', 'a resignation', '🚪'],
  ['un licenciement', 'a dismissal, a redundancy', '📦'],
  ['une rupture conventionnelle', 'a mutually agreed termination', '🤝'],
  ['un syndicat', 'a trade union', '🛡️'],
  ['le droit du travail', 'employment law', '⚖️'],
  ['une négociation salariale', 'a pay negotiation', '💶'],
  ['la rémunération', 'pay, remuneration', '💰'],
  ['une reconversion professionnelle', 'a career change', '🔄'],
  ['un plan de charge', 'a workload plan', '📊'],
  ['la conciliation vie pro / vie perso', 'work-life balance', '⚖️'],
  ['un congé sabbatique', 'a sabbatical', '🏖️'],
]);

const equipe = vocabList(U, 'Teamwork and management', [
  ['la hiérarchie', 'the hierarchy', '🪜'],
  ['un cadre', 'a manager, an executive', '👔'],
  ['un entretien annuel', 'an annual review', '🗂️'],
  ['un retour d’expérience', 'a lessons-learned review', '🔍'],
  ['un enjeu', 'a stake, an issue', '🎯'],
  ['une échéance', 'a deadline, a due date', '📅'],
  ['un délai', 'a time limit, a delay', '⌛'],
  ['la charge de travail', 'workload', '🏋️'],
  ['un indicateur', 'an indicator, a KPI', '📈'],
  ['déléguer', 'to delegate', '📤'],
  ['solliciter', 'to ask for, to request formally', '🙏'],
  ['valoriser un poste', 'to promote a role', '🏅'],
  ['un atout', 'an asset, an advantage', '🃏'],
  ['l’épanouissement professionnel', 'professional fulfilment', '🌻'],
  ['un poste à responsabilités', 'a position of responsibility', '🔑'],
  ['la montée en compétences', 'upskilling', '📚'],
]);

const vocab = [...contrats, ...equipe];

export const travail: UnitContent = {
  unit: unitFr({
    id: U,
    order: 10,
    title: 'Le monde du travail',
    subtitle: 'Contracts, teams and management, with the registers of French',
    emoji: '💼',
    goals: [
      'Understand contracts, notice periods and employment rights',
      'Talk about management, deadlines and professional fulfilment',
      'Choose the right register: familier, courant or soutenu, in speech and in writing',
    ],
    grammar: [
      'Vocabulary by register: bosser / travailler / œuvrer',
      'Questions and negation by register: tu viens ? / est-ce que tu viens ? / viendrez-vous ?',
      'Formal email: Madame, Monsieur; je vous prie de; veuillez; cordialement',
    ],
    vocabFields: ['Contracts and working conditions', 'Teamwork and management'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-contrats',
      'flashcards',
      meta(
        'Contracts and working conditions',
        'Un CDI, un préavis, une rupture conventionnelle – the words of employment.',
        ['vocabulary', 'work-jobs'],
        1,
        4,
      ),
      flashcards(contrats),
    ),

    activity(
      U,
      'flash-equipe',
      'flashcards',
      meta(
        'Teamwork and management',
        'Une échéance, déléguer, un atout – the words of the workplace.',
        ['vocabulary', 'meetings-teamwork'],
        1,
        4,
      ),
      flashcards(equipe),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'work-jobs'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'un préavis',
          'une rupture conventionnelle',
          'un congé sabbatique',
          'un enjeu',
          'un indicateur',
          'solliciter',
          'un atout',
          'la montée en compétences',
        ),
        vocab,
      ),
    ),

    activity(
      U,
      'memory-definitions',
      'memory',
      meta(
        'Word and definition',
        'Match each word with its definition in French.',
        ['vocabulary', 'work-jobs'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'un CDD', b: 'un contrat de travail qui a une date de fin' },
          { id: 'm2', a: 'une démission', b: 'la décision de quitter son emploi' },
          { id: 'm3', a: 'un licenciement', b: 'la fin d’un contrat décidée par l’employeur' },
          { id: 'm4', a: 'un syndicat', b: 'une organisation qui défend les salariés' },
          { id: 'm5', a: 'une échéance', b: 'la date limite pour finir un travail' },
          { id: 'm6', a: 'déléguer', b: 'confier une tâche à quelqu’un d’autre' },
          { id: 'm7', a: 'le télétravail', b: 'le travail fait à distance, souvent à domicile' },
          { id: 'm8', a: 'un cadre', b: 'un salarié qui a des responsabilités d’encadrement' },
        ],
      },
    ),

    activity(
      U,
      'listen-travail',
      'listen',
      meta(
        'Listen at the office',
        'Listen to the sentence and pick what it says.',
        ['listening', 'work-jobs'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Je suis en CDD jusqu’en juin, puis je cherche un CDI.',
            'I am on a fixed-term contract until June, then I am looking for a permanent one.',
            [
              'I have a permanent contract, but I want a fixed-term one in June.',
              'I resigned in June and I am looking for temporary work.',
              'My contract ends in June because I was made redundant.',
            ],
          ),
          heard(
            'l2',
            'Mon préavis dure deux mois après ma démission.',
            'My notice period lasts two months after my resignation.',
            [
              'My notice period lasts two months after my dismissal.',
              'My sabbatical lasts two months after my resignation.',
              'My contract will be renewed in two months.',
            ],
          ),
          heard(
            'l3',
            'Pour cette échéance, il faut déléguer une partie de la charge de travail.',
            'For this deadline, part of the workload must be delegated.',
            [
              'This deadline has been delayed because of the workload.',
              'The manager has delegated the whole meeting to his team.',
              'The workload was reduced by cancelling the deadline.',
            ],
          ),
          heard(
            'l4',
            'Le syndicat négocie une augmentation de la rémunération.',
            'The union is negotiating a pay rise.',
            [
              'The union is refusing any pay rise.',
              'The employer has dismissed the union representative.',
              'The employees are negotiating a longer holiday.',
            ],
          ),
          heard(
            'l5',
            'Elle a choisi une reconversion professionnelle à quarante ans.',
            'She chose a career change at forty.',
            [
              'She was made redundant at forty.',
              'She retired at forty after a sabbatical.',
              'She started her first job at forty.',
            ],
          ),
          heard(
            'l6',
            'Le télétravail améliore la conciliation entre vie professionnelle et vie personnelle.',
            'Remote working improves the balance between work and private life.',
            [
              'Remote working makes it harder to balance work and private life.',
              'Remote working is more productive than office work.',
              'Working hours are the main cause of conflict between colleagues.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-registers',
      'sortit',
      meta(
        'Familier, courant or soutenu?',
        'Sort the words by the register they belong to.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'Which register does the word belong to?',
        buckets: [
          { id: 'fam', label: 'Familier (friends)', emoji: '😎' },
          { id: 'cou', label: 'Courant (everyday)', emoji: '🙂' },
          { id: 'sou', label: 'Soutenu (formal, written)', emoji: '🎩' },
        ],
        items: cards('r', [
          ['le boulot', 'fam', 'work (slang)'],
          ['bosser', 'fam', 'to work (slang)'],
          ['bouffer', 'fam', 'to eat (slang)'],
          ['se tirer', 'fam', 'to leave (slang)'],
          ['le travail', 'cou', 'work'],
          ['travailler', 'cou', 'to work'],
          ['manger', 'cou', 'to eat'],
          ['partir', 'cou', 'to leave'],
          ['le labeur', 'sou', 'toil (literary)'],
          ['œuvrer', 'sou', 'to work towards (formal)'],
          ['se restaurer', 'sou', 'to have something to eat (formal)'],
          ['prendre congé', 'sou', 'to take one’s leave (formal)'],
        ]),
      },
    ),

    activity(
      U,
      'sort-email',
      'sortit',
      meta(
        'Email or text message?',
        'Sort the phrases by where they belong: a formal email or a message to a friend.',
        ['grammar', L, 'work-jobs'],
        2,
        5,
      ),
      {
        instruction: 'Who would write this?',
        buckets: [
          { id: 'formal', label: 'Formal email', emoji: '📧' },
          { id: 'friend', label: 'Message to a friend', emoji: '💬' },
        ],
        items: cards('e', [
          [
            'Je vous prie d’agréer l’expression de mes salutations distinguées.',
            'formal',
            'Yours faithfully (very formal).',
          ],
          [
            'Je me tiens à votre disposition pour un entretien.',
            'formal',
            'I am at your disposal for an interview.',
          ],
          [
            'Veuillez trouver ci-joint mon curriculum vitæ.',
            'formal',
            'Please find my CV attached.',
          ],
          [
            'Pourriez-vous m’indiquer quand vous êtes disponible ?',
            'formal',
            'Could you tell me when you are free?',
          ],
          ['Je suis crevé, j’ai trop bossé.', 'friend', 'I am wiped out, I worked too much.'],
          ['T’es dispo ce soir ?', 'friend', 'Are you free tonight?'],
          ['Balance-moi le doc quand tu peux.', 'friend', 'Send me the file when you can.'],
          ['Salut, ça va ? À plus !', 'friend', 'Hi, how are you? See you!'],
        ]),
      },
    ),

    activity(
      U,
      'gap-registers',
      'gapfill',
      meta(
        'Choose the register',
        'Pick the phrase that fits a formal situation.',
        ['grammar', L, 'work-jobs'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            '___ de bien vouloir m’envoyer votre devis.',
            'Je vous prie',
            {
              'Tu peux': 'Tu is informal; a formal email uses vous.',
              'Balance-moi': 'This is slang and too direct for a formal email.',
              'Veux-tu': 'Tu is informal; a formal email uses vous.',
            },
            'I would be grateful if you could send me your quote.',
            'Je vous prie de bien vouloir… = a polite formal request.',
          ),
          gh(
            'g2',
            'Je vous prie d’agréer, Madame, l’expression de mes ___.',
            'salutations distinguées',
            {
              bisous: 'Bisous is for family and close friends.',
              amitiés: 'Amitiés is for friends, not for a formal letter.',
              'à plus': 'À plus is slang and informal.',
            },
            'Yours faithfully.',
            'A very formal closing.',
          ),
          gh(
            'g3',
            'Pourriez-vous m’indiquer ___ vous serez disponible ?',
            'quand',
            {
              'c’est quand que': 'This is an informal question structure.',
              'quand c’est que': 'This is spoken and informal.',
              'est-ce que quand': 'This mixes two question structures.',
            },
            'Could you tell me when you will be available?',
            'In formal writing, use an indirect question.',
          ),
          gh(
            'g4',
            'Dans un courrier, on écrit : « Je ___ pas disponible. »',
            'ne suis',
            {
              suis: 'Dropping ne is typical of spoken French.',
              'n’suis': 'This contraction is informal and spoken.',
              'ne sont': 'Sont does not agree with je.',
            },
            'In a letter, one writes: “I am not available.”',
            'Formal writing keeps both parts of the negation.',
          ),
          gh(
            'g5',
            'Quel mot est courant ? « Il y a beaucoup de ___ . »',
            'travail',
            {
              boulot: 'Boulot is familiar.',
              taf: 'Taf is slang.',
              turbin: 'Turbin is slang.',
            },
            'Which word is neutral? “There is a lot of work.”',
            'Travail is neutral; boulot and taf are slang.',
          ),
          gh(
            'g6',
            'Au téléphone avec la directrice : « Bonjour, ___ parler à Madame Durand ? »',
            'je voudrais',
            {
              'j’veux': 'This is too abrupt and informal.',
              'tu peux': 'Tu is informal and the sentence needs a polite wish.',
              'faut que je': 'This is informal and demanding.',
            },
            'On the phone to the director: “Hello, I would like to speak to Madame Durand.”',
            'Je voudrais = a polite request.',
          ),
          gh(
            'g7',
            'Dans une lettre de motivation : « Je me tiens ___ votre disposition. »',
            'à',
            {
              en: 'The fixed expression is à votre disposition.',
              de: 'The fixed expression is à votre disposition.',
              sur: 'The fixed expression is à votre disposition.',
            },
            'In a cover letter: “I am at your disposal.”',
            'À votre disposition = at your disposal.',
          ),
          gh(
            'g8',
            'Pour ouvrir un courrier à une personne inconnue : « ___, »',
            'Madame, Monsieur',
            {
              Salut: 'Salut is informal.',
              Coucou: 'Coucou is very informal.',
              'Mon cher': 'Mon cher is too personal for a stranger.',
            },
            'To open a letter to an unknown person: “Dear Sir or Madam,”',
            'The standard formal opening.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the word',
        'Type the neutral or formal word that is missing.',
        ['grammar', L, 'work-jobs'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Familier : « Je bosse. » Courant : « Je ___. »',
            'travaille',
            'Informal: “I’m working.” Neutral: “I work.”',
            'Bosser → travailler.',
          ),
          typed(
            't2',
            'Familier : « Il a trop de boulot. » Courant : « Il a trop de ___. »',
            'travail',
            'Informal: “He has too much work.” Neutral: “He has too much work.”',
            'Boulot → travail.',
          ),
          typed(
            't3',
            'Familier : « On bouffe ? » Courant : « On ___ ? »',
            'mange',
            'Informal: “Shall we eat?” Neutral: “Shall we eat?”',
            'Bouffer → manger.',
          ),
          typed(
            't4',
            'Soutenu : « Veuillez ___ mes salutations distinguées. »',
            'agréer',
            'Formal: “Please accept my kind regards.”',
            'Veuillez agréer = please accept.',
          ),
          typed(
            't5',
            'Courant : « Je ne sais pas. » Familier : « Je sais ___. »',
            'pas',
            'Neutral: “I don’t know.” Informal: “I dunno.”',
            'In speech, ne is dropped: je sais pas.',
          ),
          typed(
            't6',
            'Soutenu : « Je vous ___ de bien vouloir me répondre. »',
            'prie',
            'Formal: “I ask you to kindly reply to me.”',
            'Je vous prie de = a formal request.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Write the formal email',
        'Put the words in order to build formal sentences.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'I would be grateful if you could send me this document.',
            ['Je', 'vous', 'serais', 'reconnaissant', 'de', 'm’envoyer', 'ce', 'document.'],
            { extra: ['tu'] },
          ),
          sent(
            'b2',
            'Please find my CV attached.',
            ['Veuillez', 'trouver', 'ci-joint', 'mon', 'CV.'],
            { extra: ['salut'] },
          ),
          sent(
            'b3',
            'I am at your disposal for an interview.',
            ['Je', 'me', 'tiens', 'à', 'votre', 'disposition', 'pour', 'un', 'entretien.'],
            { extra: ['dispo'] },
          ),
          sent(
            'b4',
            'Could you tell me when you are free?',
            ['Pourriez-vous', 'm’indiquer', 'quand', 'vous', 'êtes', 'disponible?'],
            { extra: ['t’es'] },
          ),
          sent(
            'b5',
            'I am writing to apply for the position of manager.',
            ['Je', 'vous', 'écris', 'pour', 'postuler', 'au', 'poste', 'de', 'responsable.'],
            { extra: ['bosser'] },
          ),
          sent(
            'b6',
            'I remain at your disposal and thank you in advance.',
            [
              'Je',
              'reste',
              'à',
              'votre',
              'disposition',
              'et',
              'vous',
              'remercie',
              'par',
              'avance.',
            ],
            { extra: ['te'] },
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
        'Two conversations: a formal interview and a chat with a colleague.',
        ['communication', 'work-jobs'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'A formal interview',
            emoji: '🤝',
            setting: 'You apply for a manager position.',
            turns: [
              say(
                'La recruteuse',
                'Bonjour, merci d’être venu. Pourquoi souhaitez-vous ce poste ?',
                'Hello, thank you for coming. Why do you want this position?',
              ),
              you(
                'Je souhaite évoluer vers un poste à responsabilités et mettre mes compétences au service de votre équipe.',
                [
                  'Franchement, le boulot m’intéresse parce que je cherche du fric.',
                  'This is slang and unsuited to an interview.',
                ],
                ['Je sais pas, c’est tout.', 'It is informal and does not answer the question.'],
              ),
              say(
                'La recruteuse',
                'Quel est, selon vous, votre principal atout ?',
                'What do you think is your main asset?',
              ),
              you(
                'Ma capacité à déléguer et à respecter les échéances.',
                [
                  'J’suis un mec cool, on s’entend bien.',
                  'This is informal and does not describe a professional asset.',
                ],
                ['Je n’ai aucun atout.', 'It would end the interview and is not a good answer.'],
              ),
            ],
          },
          {
            id: 'colleague',
            title: 'A chat with a colleague',
            emoji: '☕',
            setting: 'A colleague asks if you finished your report, and the boss joins in.',
            turns: [
              say(
                'Léo',
                'T’as fini ton rapport ? Moi je galère avec le mien.',
                'Have you finished your report? I’m struggling with mine.',
              ),
              you(
                'Presque ! Je finis demain matin. Je t’envoie le plan si tu veux.',
                [
                  'Je ne suis point prête, cher collègue.',
                  'This is too formal and unnatural between colleagues.',
                ],
                ['Fiche-moi la paix !', 'This is rude.'],
              ),
              say(
                'La directrice',
                'Bonjour à tous. Où en est le rapport ?',
                'Hello everyone. Where are we with the report?',
              ),
              you(
                'Bonjour Madame. Il sera terminé demain matin, je vous l’enverrai par courriel.',
                [
                  'Salut ! Je te l’envoie demain, t’inquiète.',
                  'Salut and tu are too informal for the director.',
                ],
                [
                  'Ça avance, mais j’ai trop de taf.',
                  'Taf is slang and you complain to the director.',
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
        'Register blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'work-jobs'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Bosser” is a familiar word for “travailler”.', true),
          tf('b2', 'In a formal email, you write “tu”.', false, 'You write vous.'),
          tf('b3', 'Dropping “ne” in “Je sais pas” is typical of speech.', true),
          tf('b4', '“Veuillez agréer” closes a formal letter.', true),
          tf(
            'b5',
            '“Salut” is appropriate for a first email to a recruiter.',
            false,
            'Use Madame, Monsieur.',
          ),
          tf('b6', '“Œuvrer” is a formal verb.', true),
          tf('b7', '“Un CDI” is a permanent contract.', true),
          tf('b8', '“Un préavis” is a pay rise.', false, 'It is a period of notice.'),
          tf('b9', '“Déléguer” means to give a task to someone else.', true),
          tf('b10', '“Une échéance” is a deadline.', true),
          tf('b11', '“Un licenciement” is a resignation.', false, 'It is a dismissal.'),
          tf('b12', '“Cordialement” is a neutral closing for an email.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: work words and registers.',
        ['vocabulary', 'grammar', L, 'work-jobs'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “un syndicat”?', 'a trade union', [
            'a company',
            'a contract',
            'a salary',
          ]),
          qh(
            'c2',
            'Quel mot est familier ?',
            'le boulot',
            {
              'le travail': 'Le travail is neutral.',
              'le labeur': 'Le labeur is literary.',
              'l’emploi': 'L’emploi is neutral.',
            },
            L,
          ),
          q('c3', '“Solliciter” means …', 'to ask for formally', [
            'to promise',
            'to refuse',
            'to delegate',
          ]),
          qh(
            'c4',
            'Quelle formule ferme un courrier formel ?',
            'Je vous prie d’agréer mes salutations distinguées.',
            {
              'À plus !': 'À plus is slang.',
              'Bises.': 'Bises is for relatives and friends.',
              'Tchao.': 'Tchao is informal.',
            },
            L,
          ),
          q('c5', '“Une échéance” is …', 'a deadline', ['a delay', 'a task', 'a meeting']),
          qh(
            'c6',
            'Comment demander poliment à un client ?',
            'Pourriez-vous me préciser votre adresse ?',
            {
              'Tu me files ton adresse ?': 'Tu and the verb filer are informal.',
              'C’est quoi ton adresse ?': 'This is informal.',
              'Ton adresse, vite !': 'This is rude and informal.',
            },
            L,
          ),
          q('c7', '“Un atout” is …', 'an asset', ['a risk', 'a rule', 'a shortage']),
          qh(
            'c8',
            'Comment dit-on « Je ne sais pas » dans un courrier formel ?',
            'Je ne sais pas',
            {
              'Je sais pas': 'Dropping ne is typical of speech.',
              'J’sais pas': 'This contraction is informal.',
              'Chais pas': 'This is very informal speech.',
            },
            L,
          ),
          q('c9', '“Une reconversion professionnelle” is …', 'a career change', [
            'a promotion',
            'a retirement',
            'a dismissal',
          ]),
          qh(
            'c10',
            'Quel verbe est soutenu ?',
            'œuvrer',
            {
              bosser: 'Bosser is familiar.',
              travailler: 'Travailler is neutral.',
              taffer: 'Taffer is slang.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
