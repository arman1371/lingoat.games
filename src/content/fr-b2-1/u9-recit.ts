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

const U = 'fr-b2-1-recit';

const story = vocabList(U, 'Storytelling', [
  ['un récit', 'a story, an account', '📖'],
  ['un narrateur', 'a narrator', '🎙️'],
  ['un personnage', 'a character', '🎭'],
  ['une intrigue', 'a plot', '🧵'],
  ['un dénouement', 'an ending, a resolution', '🏁'],
  ['un rebondissement', 'a twist', '🔄'],
  ['un roman', 'a novel', '📚'],
  ['une nouvelle', 'a short story', '📄'],
  ['une anecdote', 'an anecdote', '💬'],
  ['un chapitre', 'a chapter', '🔖'],
  ['un héros', 'a hero', '🦸'],
  ['une légende', 'a legend', '🐉'],
  ['un conte', 'a tale', '🧚'],
  ['un romancier', 'a novelist', '✍️'],
]);

const time = vocabList(U, 'Time in a story', [
  ['soudain', 'suddenly', '⚡'],
  ['aussitôt', 'immediately', '💨'],
  ['dès lors', 'from then on', '➡️'],
  ['peu à peu', 'little by little', '🐢'],
  ['à l’improviste', 'unexpectedly', '🎁'],
  ['tout à coup', 'all of a sudden', '💥'],
  ['au fil du temps', 'as time went by', '⏳'],
  ['jadis', 'long ago', '🏺'],
  ['naguère', 'not long ago, formerly', '🕰️'],
  ['par la suite', 'afterwards', '⏭️'],
  ['sur ces entrefaites', 'at that moment', '🎬'],
  ['un beau jour', 'one fine day', '🌤️'],
]);

const phrases = vocabList(U, 'Lines from a story', [
  ['Il ouvrit la porte et entra.', 'He opened the door and went in.', '🚪'],
  ['Elle comprit aussitôt qu’il mentait.', 'She understood at once that he was lying.', '🤥'],
  ['Ils partirent à l’aube.', 'They left at dawn.', '🌅'],
  [
    'Quand il eut fini son récit, personne ne dit un mot.',
    'When he had finished his story, nobody said a word.',
    '🤫',
  ],
  [
    'Dès qu’elle fut arrivée, la pluie commença.',
    'As soon as she had arrived, the rain began.',
    '🌧️',
  ],
  [
    'Un beau jour, un étranger vint au village.',
    'One fine day, a stranger came to the village.',
    '🧳',
  ],
  ['Il fit un pas, puis s’arrêta.', 'He took a step, then stopped.', '🛑'],
  ['Jadis, le roi vivait dans ce château.', 'Long ago, the king lived in this castle.', '🏰'],
]);

const vocab = [...story, ...time, ...phrases];

const TENSE: [string, 'ps' | 'pc' | 'imp', string][] = [
  ['Il ouvrit la porte.', 'ps', 'He opened the door.'],
  ['Il a ouvert la porte.', 'pc', 'He opened the door.'],
  ['Il ouvrait la porte.', 'imp', 'He was opening the door.'],
  ['Elle comprit tout de suite.', 'ps', 'She understood at once.'],
  ['Elle a compris tout de suite.', 'pc', 'She understood at once.'],
  ['Elle comprenait tout.', 'imp', 'She understood everything.'],
  ['Ils partirent à l’aube.', 'ps', 'They left at dawn.'],
  ['Ils sont partis à l’aube.', 'pc', 'They left at dawn.'],
  ['Ils partaient chaque matin.', 'imp', 'They left every morning.'],
  ['Un étranger vint au village.', 'ps', 'A stranger came to the village.'],
  ['Il faisait nuit.', 'imp', 'It was dark.'],
  ['Il fit un pas.', 'ps', 'He took a step.'],
];

export const recit: UnitContent = {
  unit: unitFr({
    id: U,
    order: 9,
    title: 'Lire un récit',
    subtitle:
      'Read a story and tell an anecdote: recognise the passé simple and the passé antérieur',
    emoji: '📖',
    goals: [
      'Understand a narrative text written in the passé simple',
      'Recognise the passé antérieur after quand, dès que, après que',
      'Tell an anecdote with time markers',
    ],
    grammar: ['The passé simple (recognition)', 'The passé antérieur (recognition)'],
    vocabFields: ['Storytelling', 'Time in a story', 'Lines from a story'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'reading-stories', {
      a: { title: 'Storytelling', description: 'Words for books and plots.', words: story },
      b: { title: 'Time in a story', description: 'Words that move a story forward.', words: time },
      listen: [
        'un narrateur',
        'une intrigue',
        'un dénouement',
        'un rebondissement',
        'soudain',
        'aussitôt',
        'peu à peu',
        'jadis',
      ],
      spell: [
        ['unscramble', 'personnage', 'character', '🎭', 'un personnage'],
        ['unscramble', 'dénouement', 'ending', '🏁', 'un dénouement'],
        ['type', 'anecdote', 'anecdote', '💬', 'une anecdote'],
        ['type', 'chapitre', 'chapter', '🔖', 'un chapitre'],
        ['type', 'aussitôt', 'immediately', '💨', 'aussitôt'],
      ],
    }),

    activity(
      U,
      'gap-simple',
      'gapfill',
      meta(
        'In a novel',
        'Pick the passé simple that fits the story.',
        ['grammar', 'fr-passe-simple', 'reading-stories'],
        3,
        4,
        'fr-passe-simple',
      ),
      {
        items: [
          g(
            's1',
            'Il ouvrit la porte et ___.',
            'entra',
            [
              ['entre', 'The sentence is told in the past, in the passé simple.'],
              ['entrait', 'The imparfait describes a background, not a new event.'],
              [
                'est entré',
                'The passé composé belongs to speech; this narrative uses the passé simple.',
              ],
            ],
            'He opened the door and went in.',
            'Entrer: il entra.',
          ),
          g(
            's2',
            'Ils ___ à l’aube.',
            'partirent',
            [
              ['partent', 'The text is told in the past.'],
              ['partaient', 'A single departure is an event: passé simple.'],
              [
                'sont partis',
                'The passé composé belongs to speech; this narrative uses the passé simple.',
              ],
            ],
            'They left at dawn.',
            'Partir: ils partirent.',
          ),
          g(
            's3',
            'Elle ___ aussitôt qu’il mentait.',
            'comprit',
            [
              ['comprend', 'The text is told in the past.'],
              ['comprenait', '“Aussitôt” marks a sudden event: passé simple.'],
              [
                'a compris',
                'The passé composé belongs to speech; this narrative uses the passé simple.',
              ],
            ],
            'She understood at once that he was lying.',
            'Comprendre: elle comprit.',
          ),
          g(
            's4',
            'Un beau jour, un étranger ___ au village.',
            'vint',
            [
              ['venait', 'Un beau jour introduces one event: passé simple.'],
              ['viens', 'The text is told in the past.'],
              ['venu', 'A participle cannot be the main verb here.'],
            ],
            'One fine day, a stranger came to the village.',
            'Venir: il vint.',
          ),
          g(
            's5',
            'Il ___ un pas, puis s’arrêta.',
            'fit',
            [
              ['fait', 'The text is told in the past.'],
              ['faisait', 'A single movement is an event: passé simple.'],
              ['fis', 'Fis is the je or tu form; here the subject is il.'],
            ],
            'He took a step, then stopped.',
            'Faire: il fit.',
          ),
          g(
            's6',
            'Les soldats ___ la ville avant la nuit.',
            'prirent',
            [
              ['prennent', 'The text is told in the past.'],
              ['prenaient', 'A single action ended before nightfall: passé simple.'],
              ['prise', 'A participle cannot be the main verb here.'],
            ],
            'The soldiers took the town before night.',
            'Prendre: ils prirent.',
          ),
          g(
            's7',
            'Il ___ le prix et rentra chez lui.',
            'reçut',
            [
              ['recevait', 'A single event in a sequence: passé simple.'],
              ['recevra', 'The text is told in the past.'],
              ['reçu', 'A participle cannot be the main verb here.'],
            ],
            'He received the prize and went home.',
            'Recevoir: il reçut.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-anterior',
      'gapfill',
      meta(
        'Before the story',
        'The passé antérieur: one event just before another.',
        ['grammar', 'fr-passe-anterieur', 'reading-stories'],
        3,
        4,
        'fr-passe-anterieur',
      ),
      {
        items: [
          g(
            'a1',
            'Quand il ___ fini son récit, personne ne dit un mot.',
            'eut',
            [
              [
                'avait',
                'After quand with a passé simple, the earlier single event takes the passé antérieur.',
              ],
              ['a', 'The passé composé belongs to speech.'],
              ['aura', 'The future does not fit a past story.'],
            ],
            'When he had finished his story, nobody said a word.',
            'Passé antérieur: passé simple of avoir + participle.',
          ),
          g(
            'a2',
            'Dès qu’elle ___ arrivée, la pluie commença.',
            'fut',
            [
              ['était', 'The earlier single event takes the passé antérieur.'],
              ['est', 'The passé composé belongs to speech.'],
              ['sera', 'The future does not fit a past story.'],
            ],
            'As soon as she had arrived, the rain began.',
            'Arriver takes être: elle fut arrivée.',
          ),
          g(
            'a3',
            'Après qu’ils ___ mangé, ils sortirent.',
            'eurent',
            [
              ['avaient', 'The earlier single event takes the passé antérieur.'],
              ['ont', 'The passé composé belongs to speech.'],
              ['auront', 'The future does not fit a past story.'],
            ],
            'After they had eaten, they went out.',
            'Ils eurent mangé.',
          ),
          g(
            'a4',
            'Aussitôt qu’il ___ parti, elle pleura.',
            'fut',
            [
              ['était', 'The earlier single event takes the passé antérieur.'],
              ['est', 'The passé composé belongs to speech.'],
              ['soit', 'The subjunctive does not fit here.'],
            ],
            'As soon as he had left, she cried.',
            'Partir takes être: il fut parti.',
          ),
          g(
            'a5',
            'Lorsqu’il ___ compris, il se tut.',
            'eut',
            [
              ['avait', 'The earlier single event takes the passé antérieur.'],
              ['a', 'The passé composé belongs to speech.'],
              ['ait', 'The subjunctive does not fit here.'],
            ],
            'When he had understood, he fell silent.',
            'Il eut compris.',
          ),
          g(
            'a6',
            'Dès que les voyageurs ___ descendus, le train repartit.',
            'furent',
            [
              ['étaient', 'The earlier single event takes the passé antérieur.'],
              ['sont', 'The passé composé belongs to speech.'],
              ['soient', 'The subjunctive does not fit here.'],
            ],
            'As soon as the travellers had got off, the train left again.',
            'Descendre takes être: ils furent descendus.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-tense',
      'sortit',
      meta(
        'Which tense?',
        'Passé simple, passé composé or imparfait?',
        ['grammar', 'fr-passe-simple', 'reading-stories'],
        2,
        4,
        'fr-passe-simple',
      ),
      {
        instruction: 'Is the verb in the passé simple, the passé composé or the imparfait?',
        buckets: [
          { id: 'ps', label: 'passé simple', emoji: '📖' },
          { id: 'pc', label: 'passé composé', emoji: '🗣️' },
          { id: 'imp', label: 'imparfait', emoji: '🎞️' },
        ],
        items: cards('t', TENSE),
      },
    ),

    activity(
      U,
      'conj-simple',
      'conjugation',
      meta(
        'The passé simple',
        'Fill in the forms you will meet in books.',
        ['grammar', 'fr-passe-simple'],
        3,
        4,
      ),
      {
        tables: [
          frForms(
            'ps-parler',
            'parler (passé simple)',
            'to speak',
            ['parlai', 'parlas', 'parla', 'parlâmes', 'parlâtes', 'parlèrent'],
            ['je', 'il/elle/on', 'ils/elles'],
            'fr-passe-simple',
          ),
          frForms(
            'ps-finir',
            'finir (passé simple)',
            'to finish',
            ['finis', 'finis', 'finit', 'finîmes', 'finîtes', 'finirent'],
            ['tu', 'il/elle/on', 'ils/elles'],
            'fr-passe-simple',
          ),
          frForms(
            'ps-etre',
            'être (passé simple)',
            'to be',
            ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
            ['je', 'il/elle/on', 'ils/elles'],
            'fr-passe-simple',
          ),
          frForms(
            'ps-faire',
            'faire (passé simple)',
            'to do',
            ['fis', 'fis', 'fit', 'fîmes', 'fîtes', 'firent'],
            ['tu', 'il/elle/on', 'ils/elles'],
            'fr-passe-simple',
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
        ['grammar', 'fr-passe-simple', 'fr-passe-anterieur'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'He opened the door and went in.',
            ['Il', 'ouvrit', 'la', 'porte', 'et', 'entra.'],
            { extra: ['ouvrait'], lesson: 'fr-passe-simple' },
          ),
          sent(
            's2',
            'One fine day, a stranger came to the village.',
            ['Un', 'beau', 'jour,', 'un', 'étranger', 'vint', 'au', 'village.'],
            { extra: ['venait'], lesson: 'fr-passe-simple' },
          ),
          sent(
            's3',
            'When he had finished, nobody said a word.',
            ['Quand', 'il', 'eut', 'fini,', 'personne', 'ne', 'dit', 'un', 'mot.'],
            { extra: ['avait'], lesson: 'fr-passe-anterieur' },
          ),
          sent(
            's4',
            'As soon as she had arrived, the rain began.',
            ['Dès', 'qu’elle', 'fut', 'arrivée,', 'la', 'pluie', 'commença.'],
            { extra: ['était'], lesson: 'fr-passe-anterieur' },
          ),
          sent(
            's5',
            'They left at dawn and walked all day.',
            ['Ils', 'partirent', 'à', 'l’aube', 'et', 'marchèrent', 'toute', 'la', 'journée.'],
            { extra: ['partaient'], lesson: 'fr-passe-simple' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Read the story',
        'Read the lines of a story and pick their meaning.',
        ['communication', 'reading-stories'],
        3,
        4,
      ),
      {
        questions: [
          qs(
            'r1',
            'Il frappa à la porte, mais personne ne répondit.',
            'He knocked at the door, but nobody answered.',
            [
              'He knocks at the door and nobody answers.',
              'He was knocking when nobody answered.',
              'He will knock but nobody will answer.',
            ],
          ),
          qs(
            'r2',
            'Quand elle eut lu la lettre, elle pleura longtemps.',
            'When she had read the letter, she cried for a long time.',
            [
              'When she reads the letter, she cries for a long time.',
              'She cried before reading the letter.',
              'She would read the letter and cry.',
            ],
          ),
          qs(
            'r3',
            'Sur ces entrefaites, le héros reçut une étrange nouvelle.',
            'At that moment, the hero received strange news.',
            [
              'The hero received the news yesterday.',
              'The hero was writing a short story.',
              'The hero will receive strange news.',
            ],
          ),
          qs(
            'r4',
            'Peu à peu, le narrateur comprit la vérité.',
            'Little by little, the narrator understood the truth.',
            [
              'The narrator understands the truth suddenly.',
              'The narrator hides the truth.',
              'The narrator was understanding the truth every day.',
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
        'Talk about a book',
        'Discuss a novel and tell an anecdote.',
        ['communication', 'reading-stories'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'bookclub',
            title: 'A book club',
            emoji: '📚',
            setting: 'You discuss a novel with a friend. Use tu.',
            turns: [
              say('Nina', 'Alors, tu as aimé le roman ?', 'So, did you like the novel?'),
              you(
                'Oui, surtout l’intrigue et le dénouement, avec un beau rebondissement.',
                [
                  'Oui, surtout l’intrigue et le dénouement, avec un beau chapitre naufrage.',
                  'This invents a detail that does not fit.',
                ],
                [
                  'Oui, surtout le narrateur et le dénouement, avec un beau guichet.',
                  'A guichet is a counter, not a part of a story.',
                ],
              ),
              say(
                'Nina',
                'Moi, j’ai trouvé le début un peu lent.',
                'I found the beginning a bit slow.',
              ),
              you(
                'C’est vrai, mais peu à peu l’histoire devient passionnante.',
                [
                  'C’est vrai, mais jadis l’histoire devient passionnante.',
                  'Jadis means long ago: it does not fit the present.',
                ],
                [
                  'C’est vrai, mais soudain l’histoire devient lente.',
                  'This contradicts what you mean.',
                ],
              ),
            ],
          },
          {
            id: 'anecdote',
            title: 'An anecdote',
            emoji: '💬',
            setting: 'A colleague asks you to tell a funny story. Use vous.',
            turns: [
              say('Marc', 'Racontez-nous une anecdote de voyage !', 'Tell us a travel anecdote!'),
              you(
                'Un beau jour, nous sommes arrivés à l’improviste chez des amis.',
                [
                  'Un beau jour, nous arrivions à l’improviste chez des amis.',
                  'One event on one day: passé composé.',
                ],
                [
                  'Un beau jour, nous arriverons à l’improviste chez des amis.',
                  'You are telling a past story.',
                ],
              ),
              say('Marc', 'Et alors ?', 'And then?'),
              you(
                'Aussitôt, ils nous ont invités à dîner.',
                [
                  'Aussitôt, ils nous invitent à dîner demain.',
                  'This does not match a past story.',
                ],
                [
                  'Jadis, ils nous ont invités à dîner aussitôt.',
                  'The word order and time marker do not fit.',
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
        'Story blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-passe-simple', 'fr-passe-anterieur'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'The passé simple is mostly used in written narrative.', true),
          tf('b2', '“Il fit” is the passé simple of faire.', true),
          tf(
            'b3',
            '“Ils partirent” is in the imparfait.',
            false,
            'It is the passé simple of partir.',
          ),
          tf(
            'b4',
            'The passé antérieur is built with avoir or être in the passé simple + participle.',
            true,
          ),
          tf(
            'b5',
            '“Quand il eut fini” describes something that happened before the next event.',
            true,
          ),
          tf(
            'b6',
            'In speech, French uses the passé simple for past events.',
            false,
            'In speech French uses the passé composé.',
          ),
          tf(
            'b7',
            '“Un dénouement” is the beginning of a story.',
            false,
            'Un dénouement is the ending.',
          ),
          tf('b8', '“Jadis” means “long ago”.', true),
          tf('b9', '“Elle fut” is the passé simple of être.', true),
          tf('b10', '“Tout à coup” means “suddenly”.', true),
          tf('b11', '“Un conte” is a kind of bill.', false, 'Un conte is a tale.'),
          tf('b12', '“Il vint” is the passé simple of venir.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Story challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'reading-stories'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'What is the infinitive of “il vit”?',
            'voir',
            ['vivre', 'venir', 'vouloir'],
            undefined,
            'fr-passe-simple',
          ),
          q(
            'c2',
            'What is the infinitive of “ils dirent”?',
            'dire',
            ['dormir', 'devoir', 'donner'],
            undefined,
            'fr-passe-simple',
          ),
          q(
            'c3',
            'Complete: “Dès qu’il ___ arrivé, il téléphona.”',
            'fut',
            ['était', 'est', 'soit'],
            undefined,
            'fr-passe-anterieur',
          ),
          q(
            'c4',
            'Complete: “Quand ils ___ dîné, ils sortirent.”',
            'eurent',
            ['avaient', 'ont', 'auront'],
            undefined,
            'fr-passe-anterieur',
          ),
          q('c5', 'Which word means “a plot”?', 'une intrigue', [
            'un dénouement',
            'une nouvelle',
            'un chapitre',
          ]),
          q('c6', 'Which word means “a twist”?', 'un rebondissement', [
            'un narrateur',
            'un conte',
            'un roman',
          ]),
          q('c7', '“Au fil du temps” means …', 'as time went by', [
            'on time',
            'in the wire',
            'at the same time',
          ]),
          q('c8', '“Naguère” means …', 'not long ago', [
            'never',
            'tomorrow',
            'for a long time to come',
          ]),
        ],
      },
    ),
  ],
};
