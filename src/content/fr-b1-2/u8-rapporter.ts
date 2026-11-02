import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  dictation,
  gap,
  imparfaitTable,
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

const U = 'fr-b1-2-rapporter';
const REP = 'fr-b12-reported-speech' as const;
const INV = 'fr-b12-inversion' as const;

const messages = vocabList(U, 'Messages and complaints', [
  ['la plainte', 'complaint', '😤'],
  ['la lettre de réclamation', 'letter of complaint', '✉️'],
  ['le formulaire', 'form', '📄'],
  ['la demande', 'request', '🙋'],
  ['la déclaration', 'statement', '🎤'],
  ['la rumeur', 'rumour', '🗣️'],
  ['le témoignage', 'testimony', '👁️'],
  ['le compte rendu', 'report, minutes', '🗒️'],
  ['l’interlocuteur', 'person you speak to', '☎️'],
  ['la réponse', 'answer', '💬'],
  ['le courrier', 'mail, post', '📬'],
  ['l’accusé de réception', 'acknowledgement of receipt', '✅'],
]);

const verbs = vocabList(U, 'Verbs of saying', [
  ['annoncer', 'to announce', '📣'],
  ['déclarer', 'to declare', '🎙️'],
  ['affirmer', 'to claim, to state', '☝️'],
  ['prétendre', 'to claim (doubtfully)', '🤨'],
  ['assurer', 'to assure', '🤝'],
  ['avouer', 'to confess', '😬'],
  ['ajouter', 'to add', '➕'],
  ['expliquer', 'to explain', '🧑‍🏫'],
  ['répondre', 'to answer', '↩️'],
  ['prévenir', 'to warn, to inform', '⚠️'],
  ['rapporter', 'to report, to bring back', '🔁'],
  ['se renseigner', 'to find out', '🔎'],
]);

const formal = vocabList(U, 'Formal letters', [
  ['Madame, Monsieur', 'Dear Sir or Madam', '✉️'],
  ['je me permets de vous écrire', 'I am writing to you', '🖋️'],
  ['dans l’attente de votre réponse', 'awaiting your reply', '⏳'],
  ['veuillez agréer mes salutations', 'yours faithfully', '🤝'],
  ['je vous prie de', 'I ask you to', '🙏'],
  ['suite à', 'following', '↪️'],
  ['ci-joint', 'enclosed', '📎'],
  ['à ce sujet', 'on this subject', '📌'],
]);

const phrases = vocabList(U, 'Phrases', [
  ['Il a dit qu’il viendrait demain.', 'He said that he would come tomorrow.', '🗓️'],
  ['Elle m’a demandé si j’avais le formulaire.', 'She asked me whether I had the form.', '📄'],
  ['Pourriez-vous m’indiquer le tarif ?', 'Could you tell me the price?', '💶'],
  ['Quand cet employé est-il arrivé ?', 'When did this employee arrive?', '🕘'],
  ['Le directeur a annoncé qu’il partait.', 'The director announced that he was leaving.', '📣'],
]);

const vocab = [...messages, ...verbs, ...formal, ...phrases];
const mean = (w: string) => byDe(vocab, w)[0]!.en;

const STYLE: [string, 'direct' | 'reported', string][] = [
  ['Il dit : « Je suis fatigué. »', 'direct', 'He says, “I am tired.”'],
  ['Elle demande : « Où est la gare ? »', 'direct', 'She asks, “Where is the station?”'],
  ['Il a dit : « Je viendrai demain. »', 'direct', 'He said, “I will come tomorrow.”'],
  ['« Qu’est-ce que tu veux ? » demande-t-il.', 'direct', '“What do you want?” he asks.'],
  ['Il dit qu’il est fatigué.', 'reported', 'He says that he is tired.'],
  ['Elle demande où est la gare.', 'reported', 'She asks where the station is.'],
  [
    'Il a dit qu’il viendrait le lendemain.',
    'reported',
    'He said that he would come the next day.',
  ],
  ['Il demande ce que je veux.', 'reported', 'He asks what I want.'],
];

export const rapporter: UnitContent = {
  unit: unitFr({
    id: U,
    order: 8,
    title: 'Rapporter',
    subtitle: 'Report what people said, write a formal complaint and ask polite questions',
    emoji: '🗣️',
    goals: [
      'Report statements and questions (il a dit que …, elle a demandé si …)',
      'Change the tenses and time words when reporting in the past',
      'Ask formal questions with inversion and write a short complaint',
    ],
    grammar: [
      'Discours indirect',
      'Concordance des temps',
      'Questions avec inversion',
      'Formules de lettre formelle',
    ],
    vocabFields: ['Messages and complaints', 'Verbs of saying', 'Formal letters', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-messages',
      'flashcards',
      meta(
        'Messages and complaints',
        'Words for requests, forms and letters.',
        ['vocabulary', 'communication'],
        1,
        4,
      ),
      flashcards(messages),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What does it show?',
        'Look at the picture and pick the word.',
        ['vocabulary', 'communication'],
        1,
        3,
      ),
      quizEmoji(
        byDe(
          vocab,
          'la plainte',
          'la lettre de réclamation',
          'le formulaire',
          'la demande',
          'la rumeur',
          'le compte rendu',
          'la réponse',
          'le courrier',
        ),
        messages,
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
        ['vocabulary', 'communication'],
        2,
        3,
      ),
      memory(
        byDe(
          vocab,
          'annoncer',
          'déclarer',
          'affirmer',
          'prétendre',
          'assurer',
          'avouer',
          'prévenir',
          'se renseigner',
        ),
      ),
    ),

    activity(
      U,
      'listen-messages',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'communication'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la déclaration',
          'le témoignage',
          'l’interlocuteur',
          'ajouter',
          'expliquer',
          'rapporter',
          'suite à',
          'ci-joint',
        ),
        vocab.slice(0, 36),
      ),
    ),

    activity(
      U,
      'flash-formal',
      'flashcards',
      meta('A formal letter', 'Phrases for a polite complaint letter.', ['vocabulary', INV], 2, 4),
      flashcards([...formal, ...verbs.slice(0, 4)]),
    ),

    activity(
      U,
      'spell-messages',
      'spell',
      meta(
        'Spell the messages',
        'Unscramble, type and write what you hear. Accents are optional.',
        ['spelling', 'communication'],
        2,
        4,
      ),
      {
        items: [
          sp('sp-plainte', 'unscramble', 'plainte', mean('la plainte'), '😤', 'la plainte'),
          sp('sp-rumeur', 'unscramble', 'rumeur', mean('la rumeur'), '🗣️', 'la rumeur'),
          sp('sp-formulaire', 'type', 'formulaire', mean('le formulaire'), '📄', 'le formulaire'),
          sp('sp-courrier', 'type', 'courrier', mean('le courrier'), '📬', 'le courrier'),
          dictation('sp-affirmer', 'affirmer', 'to state', 'affirmer'),
          dictation('sp-temoignage', 'témoignage', 'testimony', 'le témoignage'),
        ],
      },
    ),

    activity(
      U,
      'sort-speech',
      'sortit',
      meta(
        'Direct or reported?',
        'Is the speech quoted word for word or reported?',
        ['grammar', REP],
        2,
        3,
      ),
      {
        instruction: 'Is it direct speech or reported speech?',
        buckets: [
          { id: 'direct', label: 'Direct speech', emoji: '💬' },
          { id: 'reported', label: 'Reported speech', emoji: '🗒️' },
        ],
        items: sortCards('d', STYLE),
      },
    ),

    activity(
      U,
      'conj-imparfait',
      'conjugation',
      meta(
        'The imparfait',
        'The tense that follows a past verb of saying.',
        ['grammar', REP],
        2,
        4,
      ),
      {
        tables: [
          imparfaitTable('dire-1', 'dire', 'to say', ['je', 'tu', 'il/elle/on']),
          imparfaitTable('demander-1', 'demander', 'to ask', ['nous', 'vous', 'ils/elles']),
          imparfaitTable('repondre-1', 'répondre', 'to answer', ['je', 'nous', 'ils/elles']),
          imparfaitTable('annoncer-1', 'annoncer', 'to announce', ['tu', 'il/elle/on', 'nous']),
          imparfaitTable('vouloir-1', 'vouloir', 'to want', ['je', 'vous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-reported',
      'gapfill',
      meta(
        'Report it',
        'Complete the reported sentence with the right tense.',
        ['grammar', REP],
        3,
        5,
      ),
      {
        items: [
          gap(
            'g1',
            'Il a dit : « Je suis fatigué. » → Il a dit qu’il ___ fatigué.',
            'était',
            ['était', 'est', 'sera'],
            'He said he was tired.',
            'After a past verb of saying, the present becomes the imparfait.',
          ),
          gap(
            'g2',
            'Elle a dit : « Je viendrai. » → Elle a dit qu’elle ___.',
            'viendrait',
            ['viendrait', 'viendra', 'viendrais'],
            'She said she would come.',
            'The future becomes the conditional.',
          ),
          gap(
            'g3',
            'Il a demandé : « Tu as le formulaire ? » → Il a demandé si j’___ le formulaire.',
            'avais',
            ['avais', 'ai', 'avait'],
            'He asked whether I had the form.',
            'A yes/no question uses si, and the imparfait.',
          ),
          gap(
            'g4',
            'Elle demande : « Où est la gare ? » → Elle demande où ___ la gare.',
            'est',
            ['est', 'était', 'sera'],
            'She asks where the station is.',
            'After a present verb of saying, the tense does not change.',
          ),
          gap(
            'g5',
            'Il a dit : « Je suis parti hier. » → Il a dit qu’il ___ parti la veille.',
            'était',
            ['était', 'est', 'sera'],
            'He said he had left the day before.',
            'The passé composé becomes the plus-que-parfait; hier becomes la veille.',
          ),
          gap(
            'g6',
            'Il a demandé : « Que veux-tu ? » → Il a demandé ce que je ___.',
            'voulais',
            ['voulais', 'veux', 'voudrai'],
            'He asked what I wanted.',
            'Que becomes ce que, and the present becomes the imparfait.',
          ),
          gap(
            'g7',
            'Elle a dit : « Demain, je pars. » → Elle a dit que le ___, elle partait.',
            'lendemain',
            ['lendemain', 'demain', 'hier'],
            'She said that the next day she was leaving.',
            'Demain becomes le lendemain in the past.',
          ),
          gap(
            'g8',
            'Elle a dit : « J’ai fini. » → Elle a dit qu’elle ___ fini.',
            'avait',
            ['avait', 'a', 'aurait'],
            'She said she had finished.',
            'Passé composé → plus-que-parfait.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-inversion',
      'gapfill',
      meta('Formal questions', 'Complete the question with inversion.', ['grammar', INV], 3, 4),
      {
        items: [
          gap(
            'c1',
            '___-vous m’indiquer le tarif, s’il vous plaît ?',
            'Pourriez',
            ['Pourriez', 'Pourrez', 'Pouvaient'],
            'Could you tell me the price, please?',
            'A polite formal question: pourriez-vous.',
          ),
          gap(
            'c2',
            'Où ___-vous ?',
            'habitez',
            ['habitez', 'habitent', 'habité'],
            'Where do you live?',
            'Inversion: verb + pronoun joined by a hyphen.',
          ),
          gap(
            'c3',
            'Quand Paul est-___ arrivé ?',
            'il',
            ['il', 'elle', 'ils'],
            'When did Paul arrive?',
            'The pronoun repeats the subject: Paul est-il.',
          ),
          gap(
            'c4',
            'A-___-il déjà répondu ?',
            't',
            ['t', 'n', 's'],
            'Has he already answered?',
            'A -t- is added between two vowels: a-t-il.',
          ),
          gap(
            'c5',
            'Pourquoi ___-elle cette plainte ?',
            'écrit',
            ['écrit', 'écrivent', 'écrire'],
            'Why is she writing this complaint?',
            'Écrit-elle: the verb comes first, the pronoun follows.',
          ),
          gap(
            'c6',
            'Qu’___-vous décidé ?',
            'avez',
            ['avez', 'êtes', 'ont'],
            'What have you decided?',
            'Inversion with the auxiliary: avez-vous décidé.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', REP], 3, 4),
      {
        items: [
          sent(
            's1',
            'He said that he would come tomorrow.',
            ['Il', 'a', 'dit', 'qu’il', 'viendrait', 'le', 'lendemain.'],
            { extra: ['viendra'] },
          ),
          sent(
            's2',
            'She asked me whether I had the form.',
            ['Elle', 'm’a', 'demandé', 'si', 'j’avais', 'le', 'formulaire.'],
            { extra: ['ai'] },
          ),
          sent('s3', 'Could you tell me the price?', [
            'Pourriez-vous',
            'm’indiquer',
            'le',
            'tarif',
            '?',
          ]),
          sent('s4', 'Where do you live?', ['Où', 'habitez-vous', '?'], { extra: ['êtes'] }),
          sent('s5', 'I am writing to you following our meeting.', [
            'Je',
            'me',
            'permets',
            'de',
            'vous',
            'écrire',
            'suite',
            'à',
            'notre',
            'rencontre.',
          ]),
          sent('s6', 'He asked what I wanted.', [
            'Il',
            'a',
            'demandé',
            'ce',
            'que',
            'je',
            'voulais.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'What did they say?',
        'Report a message and ask a polite question.',
        ['communication', 'grammar'],
        3,
        6,
      ),
      {
        scenes: [
          scene(
            'message',
            'Reporting a message',
            '📞',
            'You pass on a message to your colleague Nadia. You say tu.',
            [
              say(
                'Nadia',
                'Le directeur a téléphoné ? Qu’est-ce qu’il a dit ?',
                'Did the director call? What did he say?',
              ),
              you(
                'Il a dit qu’il viendrait demain matin.',
                [
                  'Il a dit qu’il viendra demain matin.',
                  'After a past verb of saying, the future becomes the conditional: viendrait.',
                ],
                [
                  'Il a dit qu’il vient demain matin.',
                  'The present does not fit a message already given in the past.',
                ],
              ),
              say('Nadia', 'Et il a demandé quelque chose ?', 'And did he ask for anything?'),
              you(
                'Oui, il a demandé si le dossier était prêt.',
                [
                  'Oui, il a demandé si le dossier est prêt.',
                  'In the past, the present becomes the imparfait: était.',
                ],
                [
                  'Oui, il a demandé que le dossier est prêt.',
                  'A yes/no question is reported with si, not que.',
                ],
              ),
            ],
          ),
          scene(
            'guichet',
            'At the counter',
            '🏛️',
            'You ask for information at an office. Use vous.',
            [
              say('L’employé', 'Bonjour, je vous écoute.', 'Hello, I am listening.'),
              you(
                'Bonjour, pourriez-vous m’indiquer comment remplir ce formulaire ?',
                [
                  'Bonjour, vous pourriez m’indiquer comment remplir ce formulaire ?',
                  'Correct but informal; formal questions use inversion: pourriez-vous.',
                ],
                [
                  'Bonjour, pourrez-vous m’indiquer comment remplir ce formulaire ?',
                  'Pourrez is the future; a polite request needs pourriez.',
                ],
              ),
              say(
                'L’employé',
                'Bien sûr. Avez-vous votre pièce d’identité ?',
                'Of course. Do you have your ID?',
              ),
              you(
                'Oui, la voici. Merci de votre aide.',
                [
                  'Oui, la voilà. Merci pour votre aide.',
                  'Acceptable but la voici is the usual formal form.',
                ],
                ['Oui, la voici. Merci à votre aide.', 'Say merci de / pour votre aide.'],
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
      meta('Reported speech blitz', 'True or false? Beat the clock!', ['grammar', REP], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', 'After a past verb of saying, the present becomes the imparfait.', true),
          tf('b2', 'After a past verb of saying, the future becomes the conditional.', true),
          tf('b3', 'The passé composé becomes the plus-que-parfait in reported speech.', true),
          tf('b4', '“Demain” becomes “le lendemain” in the past.', true),
          tf('b5', '“Hier” becomes “la veille” in the past.', true),
          tf('b6', 'A yes/no question is reported with “que”.', false, 'It is reported with si.'),
          tf('b7', '“Que” becomes “ce que” in a reported question.', true),
          tf(
            'b8',
            'After “Il dit que”, the tense changes.',
            false,
            'After a present verb of saying nothing changes.',
          ),
          tf('b9', '“Veux-tu” is an inverted question.', true),
          tf('b10', 'A -t- is added in “a-t-il”.', true),
          tf('b11', '“Prétendre” expresses doubt about the claim.', true),
          tf('b12', '“Le courrier” means the mail.', true),
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
        ['vocabulary', 'grammar', 'communication'],
        3,
        4,
      ),
      {
        questions: [
          q('c1', '“Il a dit : « Je pars. »” becomes …', 'Il a dit qu’il partait.', [
            'Il a dit qu’il part.',
            'Il a dit qu’il partira.',
            'Il a dit qu’il parte.',
          ]),
          q('c2', 'Complete: “Elle a demandé ___ j’avais faim.”', 'si', ['que', 'qui', 'quoi']),
          q('c3', 'Which is a formal question?', 'Pourriez-vous m’aider ?', [
            'Tu m’aides ?',
            'Vous m’aidez ?',
            'Est-ce que vous m’aidez ?',
          ]),
          q('c4', 'What does “le lendemain” mean?', 'the next day', [
            'the day before',
            'today',
            'last week',
          ]),
          q('c5', 'What does “avouer” mean?', 'to confess', ['to announce', 'to warn', 'to add']),
          q('c6', 'Complete: “A-___-elle téléphoné ?”', 't', ['n', 's', 'l']),
          q('c7', '“Dans l’attente de votre réponse” is used …', 'at the end of a letter', [
            'to start a speech',
            'to refuse',
            'to joke',
          ]),
          q('c8', '“Il a dit qu’il viendrait” — viendrait is …', 'the conditional', [
            'the future',
            'the imparfait',
            'the present',
          ]),
        ],
      },
    ),
  ],
};
