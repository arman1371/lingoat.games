import { byDe, flashcards, quizDeEn, vocabList } from '../builders';
import {
  activity,
  cards,
  frCustomTable,
  gh,
  heard,
  meta,
  pqpTable,
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

const U = 'fr-c1-1-litterature';
const L = 'fr-c11-narrative-tenses' as const;

const livres = vocabList(U, 'Books and publishing', [
  ['un récit', 'a narrative, an account', '📖'],
  ['une nouvelle', 'a short story', '📃'],
  ['un recueil', 'a collection (of poems or stories)', '📚'],
  ['un essai', 'an essay', '✒️'],
  ['un narrateur', 'a narrator', '🗣️'],
  ['l’intrigue', 'the plot', '🧵'],
  ['le dénouement', 'the outcome, the ending', '🏁'],
  ['un rebondissement', 'a twist', '🌀'],
  ['une maison d’édition', 'a publishing house', '🏢'],
  ['un éditeur', 'a publisher', '🖋️'],
  ['la rentrée littéraire', 'the autumn publishing season', '🍂'],
  ['un prix littéraire', 'a literary prize', '🏅'],
  ['un best-seller', 'a bestseller', '🚀'],
  ['une autrice', 'a woman author', '👩‍🏫'],
  ['le lectorat', 'the readership', '👥'],
  ['un tirage', 'a print run', '🖨️'],
]);

const style = vocabList(U, 'Style and storytelling', [
  ['le style', 'style', '🖌️'],
  ['une métaphore', 'a metaphor', '🪄'],
  ['l’ironie', 'irony', '😏'],
  ['le suspense', 'suspense', '😬'],
  ['un flash-back', 'a flashback', '⏪'],
  ['la fiction', 'fiction', '🦄'],
  ['l’autobiographie', 'autobiography', '🪞'],
  ['un témoignage', 'a testimony, a personal account', '🎙️'],
  ['la plume', 'the pen, the writing style', '🪶'],
  ['feuilleter', 'to leaf through', '📑'],
  ['dévorer un livre', 'to devour a book', '😋'],
  ['s’inspirer de', 'to draw inspiration from', '💡'],
  ['évoquer', 'to evoke, to mention', '💭'],
  ['relater', 'to relate, to report', '🗒️'],
  ['un lecteur assidu', 'an avid reader', '🤓'],
  ['une page blanche', 'a blank page, writer’s block', '⬜'],
]);

const vocab = [...livres, ...style];

export const litterature: UnitContent = {
  unit: unitFr({
    id: U,
    order: 9,
    title: 'Littérature et récit',
    subtitle: 'Books, publishing and storytelling, with the tenses of narration',
    emoji: '📚',
    goals: [
      'Talk about books, authors, publishing and literary prizes',
      'Analyse a story: plot, narrator, style and twists',
      'Tell a story in the past: imparfait, passé composé, passé simple and plus-que-parfait',
    ],
    grammar: [
      'Imparfait for the scene, passé composé or passé simple for the events',
      'Plus-que-parfait for what had already happened',
      'Passé simple: recognising and writing the third-person forms',
    ],
    vocabFields: ['Books and publishing', 'Style and storytelling'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-livres',
      'flashcards',
      meta(
        'Books and publishing',
        'Un récit, l’intrigue, la rentrée littéraire – the words of books.',
        ['vocabulary', 'literature-reading'],
        1,
        4,
      ),
      flashcards(livres),
    ),

    activity(
      U,
      'flash-style',
      'flashcards',
      meta(
        'Style and storytelling',
        'Une métaphore, un flash-back, la plume – the words of writing.',
        ['vocabulary', 'literature-reading'],
        1,
        4,
      ),
      flashcards(style),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'literature-reading'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'un recueil',
          'le dénouement',
          'un rebondissement',
          'le lectorat',
          'un tirage',
          'feuilleter',
          'relater',
          'une page blanche',
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
        ['vocabulary', 'literature-reading'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'une nouvelle', b: 'un récit court' },
          { id: 'm2', a: 'l’intrigue', b: 'l’enchaînement des événements d’une histoire' },
          { id: 'm3', a: 'le narrateur', b: 'celui qui raconte l’histoire' },
          { id: 'm4', a: 'un éditeur', b: 'celui qui publie les livres d’un auteur' },
          { id: 'm5', a: 'un flash-back', b: 'un retour en arrière dans le récit' },
          { id: 'm6', a: 'une métaphore', b: 'une image qui compare sans le mot « comme »' },
          { id: 'm7', a: 'un témoignage', b: 'le récit de ce qu’on a vécu' },
          { id: 'm8', a: 'un best-seller', b: 'un livre qui se vend très bien' },
        ],
      },
    ),

    activity(
      U,
      'listen-litterature',
      'listen',
      meta(
        'Listen to the book club',
        'Listen to the sentence and pick what it says.',
        ['listening', 'literature-reading'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Il pleuvait quand le narrateur ouvrit la porte.',
            'It was raining when the narrator opened the door.',
            [
              'It had rained before the narrator opened the door.',
              'The narrator closed the door when it started to rain.',
              'It is raining so the narrator opens the door.',
            ],
          ),
          heard(
            'l2',
            'Elle avait déjà écrit trois romans avant d’obtenir un prix.',
            'She had already written three novels before winning a prize.',
            [
              'She will write three novels before winning a prize.',
              'She wrote three novels after winning a prize.',
              'She has written a novel that won three prizes.',
            ],
          ),
          heard(
            'l3',
            'L’autrice s’est inspirée de sa propre enfance pour ce récit.',
            'The author drew on her own childhood for this story.',
            [
              'The author has borrowed the plot from another novel.',
              'The author wrote about her children in this story.',
              'The author asked her publisher for a new idea.',
            ],
          ),
          heard(
            'l4',
            'Le dénouement surprend le lecteur grâce à un rebondissement final.',
            'The ending surprises the reader thanks to a final twist.',
            [
              'The ending bores the reader because of a slow plot.',
              'The beginning surprises the reader with a flashback.',
              'The publisher surprises the reader with a new cover.',
            ],
          ),
          heard(
            'l5',
            'Ce roman, tiré à cent mille exemplaires, est un best-seller.',
            'This novel, printed in a hundred thousand copies, is a bestseller.',
            [
              'This novel, rejected by a hundred publishers, has never been printed.',
              'This essay was reprinted for a hundred thousand readers.',
              'This novel will be published in a hundred countries.',
            ],
          ),
          heard(
            'l6',
            'Chaque rentrée littéraire, les éditeurs attendent les prix avec impatience.',
            'Every autumn publishing season, publishers wait impatiently for the prizes.',
            [
              'Every year, writers wait impatiently for their publishers.',
              'Every summer, bookshops wait for new best-sellers.',
              'Every season, critics refuse to read new books.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-tenses',
      'sortit',
      meta(
        'Scene, event or earlier?',
        'Sort the narrative sentences by the job of the verb.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'What does the verb do in the story?',
        buckets: [
          { id: 'scene', label: 'Sets the scene: imparfait', emoji: '🎞️' },
          { id: 'event', label: 'Moves the plot: passé simple / composé', emoji: '▶️' },
          { id: 'earlier', label: 'Looks back: plus-que-parfait', emoji: '⏪' },
        ],
        items: cards('n', [
          ['Il pleuvait ce soir-là.', 'scene', 'It was raining that evening.'],
          ['Les rues étaient désertes.', 'scene', 'The streets were deserted.'],
          ['Elle avait peur du noir.', 'scene', 'She was afraid of the dark.'],
          ['Il ouvrit la porte.', 'event', 'He opened the door.'],
          ['Elle sortit en courant.', 'event', 'She ran out.'],
          ['Il a téléphoné à minuit.', 'event', 'He phoned at midnight.'],
          ['Soudain, un cri retentit.', 'event', 'Suddenly, a cry rang out.'],
          ['Elle avait oublié son manteau.', 'earlier', 'She had forgotten her coat.'],
          ['Il était déjà parti.', 'earlier', 'He had already left.'],
          ['Nous avions entendu un bruit.', 'earlier', 'We had heard a noise.'],
        ]),
      },
    ),

    activity(
      U,
      'conj-narrative',
      'conjugation',
      meta(
        'Passé simple and plus-que-parfait',
        'Complete the forms of the passé simple and the plus-que-parfait.',
        ['grammar', L],
        3,
        5,
      ),
      {
        tables: [
          frCustomTable(
            'ps-parler',
            'parler (passé simple)',
            'to speak',
            ['parlai', 'parlas', 'parla', 'parlâmes', 'parlâtes', 'parlèrent'],
            ['il/elle/on', 'ils/elles'],
          ),
          frCustomTable(
            'ps-finir',
            'finir (passé simple)',
            'to finish',
            ['finis', 'finis', 'finit', 'finîmes', 'finîtes', 'finirent'],
            ['il/elle/on', 'ils/elles'],
          ),
          frCustomTable(
            'ps-etre',
            'être (passé simple)',
            'to be',
            ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
            ['il/elle/on', 'ils/elles'],
          ),
          frCustomTable(
            'ps-avoir',
            'avoir (passé simple)',
            'to have',
            ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
            ['il/elle/on', 'ils/elles'],
          ),
          frCustomTable(
            'ps-prendre',
            'prendre (passé simple)',
            'to take',
            ['pris', 'pris', 'prit', 'prîmes', 'prîtes', 'prirent'],
            ['il/elle/on', 'ils/elles'],
          ),
          pqpTable('finir', 'to finish', ['je', 'nous']),
          pqpTable('prendre', 'to take', ['tu', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-tenses',
      'gapfill',
      meta(
        'Choose the tense',
        'Pick the verb form that fits the story.',
        ['grammar', L, 'literature-reading'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'Il ___ ce soir-là et les rues étaient vides.',
            'pleuvait',
            {
              plut: 'The passé simple marks an event, not a description of the scene.',
              'a plu': 'The passé composé marks a completed event, not the background.',
              'avait plu': 'The plus-que-parfait would mean it had rained earlier.',
            },
            'It was raining that evening and the streets were empty.',
            'Weather as a background → imparfait.',
          ),
          gh(
            'g2',
            'Soudain, la porte ___.',
            's’ouvrit',
            {
              's’ouvrait': 'The imparfait describes the background, not a sudden event.',
              's’était ouverte': 'The plus-que-parfait would mean it had opened earlier.',
              's’ouvre': 'The present does not fit a story in the past.',
            },
            'Suddenly the door opened.',
            'A sudden event → passé simple (or passé composé).',
          ),
          gh(
            'g3',
            'Elle ___ déjà fermé la fenêtre quand il est arrivé.',
            'avait',
            {
              a: 'The passé composé does not show that it happened before his arrival.',
              aura: 'The future does not fit a story in the past.',
              ait: 'That is the subjunctive, which does not fit here.',
            },
            'She had already closed the window when he arrived.',
            'An earlier action → plus-que-parfait.',
          ),
          gh(
            'g4',
            'Quand elle ___ la lettre, elle pleura.',
            'lut',
            {
              lisait: 'The imparfait would describe a repeated or continuing action.',
              'a lu': 'The passé composé would not match the passé simple pleura.',
              lirait: 'The conditional does not fit a past event.',
            },
            'When she read the letter, she cried.',
            'A single past event, with pleura → passé simple.',
          ),
          gh(
            'g5',
            'Victor Hugo ___ en 1802.',
            'naquit',
            {
              naissait: 'The imparfait describes a state, not a dated fact.',
              'était né': 'The plus-que-parfait looks back from another past moment.',
              naîtra: 'The future does not fit a past fact.',
            },
            'Victor Hugo was born in 1802.',
            'A dated fact in a narrative → passé simple.',
          ),
          gh(
            'g6',
            'Chaque été, nous ___ chez ma grand-mère.',
            'allions',
            {
              allâmes: 'The passé simple marks one event, not a repeated habit.',
              irons: 'The future does not fit a past habit.',
              'étions allés': 'The plus-que-parfait looks back from another past moment.',
            },
            'Every summer, we went to my grandmother’s.',
            'A repeated past habit → imparfait.',
          ),
          gh(
            'g7',
            'Elle était triste car son frère ___ parti.',
            'était',
            {
              fut: 'Fut parti is a literary past anterior, used after quand or dès que.',
              est: 'The passé composé does not show it happened before she was sad.',
              serait: 'The conditional does not state a fact in the past.',
            },
            'She was sad because her brother had left.',
            'était parti: plus-que-parfait of partir.',
          ),
          gh(
            'g8',
            'Il ___ nuit quand le train arriva.',
            'faisait',
            {
              fit: 'The passé simple marks an event; the weather and light are background.',
              'a fait': 'The passé composé marks an event; it does not describe the scene.',
              'avait fait': 'The plus-que-parfait would look back to an earlier moment.',
            },
            'It was dark when the train arrived.',
            'Il faisait nuit: scene → imparfait.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the verb',
        'Type the right past form of the verb in brackets.',
        ['grammar', L, 'literature-reading'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Il ___ (ouvrir) la porte et entra.',
            'ouvrit',
            'He opened the door and went in.',
            'Passé simple of ouvrir: il ouvrit.',
          ),
          typed(
            't2',
            'Elle ___ (prendre) son manteau et sortit.',
            'prit',
            'She took her coat and went out.',
            'Passé simple of prendre: elle prit.',
          ),
          typed(
            't3',
            'Les rues ___ (être) désertes ; il pleuvait.',
            'étaient',
            'The streets were deserted; it was raining.',
            'Imparfait: description of the scene.',
          ),
          typed(
            't4',
            'Il ___ (faire) beau quand ils partirent.',
            'faisait',
            'The weather was fine when they left.',
            'Imparfait: the background.',
          ),
          typed(
            't5',
            'Elle ___ (finir) sa lettre puis se coucha.',
            'finit',
            'She finished her letter then went to bed.',
            'Passé simple of finir: elle finit.',
          ),
          typed(
            't6',
            'Il avait ___ (perdre) ses clés avant de sortir.',
            'perdu',
            'He had lost his keys before going out.',
            'Past participle of perdre: perdu.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Put the words in order. Choose the tense of the story.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'It was raining and the streets were empty.',
            ['Il', 'pleuvait', 'et', 'les', 'rues', 'étaient', 'vides.'],
            { extra: ['plut'] },
          ),
          sent('b2', 'Suddenly the door opened.', ['Soudain,', 'la', 'porte', 's’ouvrit.'], {
            extra: ['s’ouvrait'],
          }),
          sent(
            'b3',
            'She had forgotten her coat.',
            ['Elle', 'avait', 'oublié', 'son', 'manteau.'],
            { extra: ['a'] },
          ),
          sent(
            'b4',
            'He took his hat and went out.',
            ['Il', 'prit', 'son', 'chapeau', 'et', 'sortit.'],
            { extra: ['prenait'] },
          ),
          sent(
            'b5',
            'When she read the letter, she cried.',
            ['Quand', 'elle', 'lut', 'la', 'lettre,', 'elle', 'pleura.'],
            { extra: ['lisait'] },
          ),
          sent(
            'b6',
            'The narrator evokes a childhood he had forgotten.',
            ['Le', 'narrateur', 'évoque', 'une', 'enfance', 'qu’il', 'avait', 'oubliée.'],
            { extra: ['oublia'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Talking about books',
        'Two conversations: a bookshop and a book club.',
        ['communication', 'literature-reading'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'bookshop',
            title: 'At the bookshop',
            emoji: '📚',
            setting: 'You ask a bookseller to recommend a novel.',
            turns: [
              say(
                'La libraire',
                'Bonjour ! Vous cherchez quelque chose en particulier ?',
                'Hello! Are you looking for something in particular?',
              ),
              you(
                'Oui, un roman avec beaucoup de suspense, mais pas un best-seller.',
                [
                  'Oui, un recueil de recettes de cuisine.',
                  'This does not match your wish for suspense.',
                ],
                ['Non, je feuillette seulement.', 'You said you needed advice.'],
              ),
              say(
                'La libraire',
                'Je vous conseille celui-ci : l’intrigue est solide et le dénouement vous surprendra.',
                'I recommend this one: the plot is solid and the ending will surprise you.',
              ),
              you(
                'Merci. L’autrice a-t-elle déjà écrit d’autres romans ?',
                [
                  'Merci. L’autrice a-t-il déjà écrit d’autres romans ?',
                  'Autrice is feminine: a-t-elle.',
                ],
                [
                  'Merci. Quel est le prix de la couverture ?',
                  'The question is not about the author.',
                ],
              ),
            ],
          },
          {
            id: 'club',
            title: 'The book club',
            emoji: '☕',
            setting: 'You tell your club about a novel you finished.',
            turns: [
              say(
                'Claire',
                'Alors, ce roman, tu l’as fini ?',
                'So, this novel, did you finish it?',
              ),
              you(
                'Oui, je l’ai dévoré en deux jours. Il pleuvait quand j’ai lu la dernière page.',
                [
                  'Oui, je l’ai dévoré en deux jours. Il plut quand je lisais la dernière page.',
                  'The weather is background: il pleuvait. The action is an event: j’ai lu.',
                ],
                ['Non, je n’ai pas commencé.', 'It contradicts what you did.'],
              ),
              say(
                'Claire',
                'Et le narrateur ? Il avait déjà compris la vérité ?',
                'And the narrator? Had he already understood the truth?',
              ),
              you(
                'Oui, il l’avait comprise bien avant, mais il la gardait pour lui.',
                [
                  'Oui, il la comprit bien avant, mais il la gardait pour lui.',
                  'To say “had understood” before another past fact, use the plus-que-parfait.',
                ],
                ['Il n’y a pas de narrateur.', 'There is a narrator in the story.'],
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
        'Narrative blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'literature-reading'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'The imparfait describes the scene of a story.', true),
          tf('b2', 'The passé simple is used mostly in written narration.', true),
          tf(
            'b3',
            'The passé simple is common in everyday conversation.',
            false,
            'It is mostly literary.',
          ),
          tf('b4', 'The plus-que-parfait expresses an action before another past action.', true),
          tf('b5', '“Il ouvrit” is the passé simple of ouvrir.', true),
          tf(
            'b6',
            '“Ils furent” is the passé simple of avoir.',
            false,
            'It is the passé simple of être.',
          ),
          tf('b7', 'The passé simple of “finir” is “il finit”.', true),
          tf('b8', '“Un recueil” is a collection of texts.', true),
          tf('b9', '“Le dénouement” is the beginning of a story.', false, 'It is the ending.'),
          tf(
            'b10',
            '“Feuilleter” means to read every word carefully.',
            false,
            'It means to leaf through.',
          ),
          tf('b11', '“Une page blanche” can mean writer’s block.', true),
          tf('b12', '“Un flash-back” is a return to an earlier moment.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: literary words and narrative tenses.',
        ['vocabulary', 'grammar', L, 'literature-reading'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “l’intrigue”?', 'the plot', ['the title', 'the cover', 'the narrator']),
          qh(
            'c2',
            'Il ___ nuit quand elle rentra.',
            'faisait',
            {
              fit: 'The passé simple marks an event, but nightfall is the background.',
              'a fait': 'The passé composé marks an event; it does not describe the scene.',
              'avait fait': 'The plus-que-parfait would look back to an earlier moment.',
            },
            L,
          ),
          q('c3', '“Évoquer” means …', 'to evoke, to mention', [
            'to read aloud',
            'to print',
            'to sell',
          ]),
          qh(
            'c4',
            'Elle ___ déjà lu le livre quand il le lui offrit.',
            'avait',
            {
              a: 'The passé composé does not show that it happened first.',
              eut: 'The past anterior is rare and needs a time conjunction.',
              aura: 'The future does not fit a story in the past.',
            },
            L,
          ),
          q('c5', 'What is “une maison d’édition”?', 'a publishing house', [
            'a bookshop',
            'a library',
            'a printing press',
          ]),
          qh(
            'c6',
            'Soudain, un cri ___ dans la nuit.',
            'retentit',
            {
              retentissait: 'The imparfait describes the background, not a sudden event.',
              'avait retenti': 'The plus-que-parfait looks back to an earlier moment.',
              retentirait: 'The conditional does not state a past event.',
            },
            L,
          ),
          q('c7', 'The passé simple of “avoir” (il) is …', 'il eut', [
            'il avait',
            'il a eu',
            'il aura',
          ]),
          qh(
            'c8',
            'Les enfants ___ dehors quand l’orage éclata.',
            'jouaient',
            {
              jouèrent: 'The passé simple marks a completed event; the activity was ongoing.',
              'ont joué': 'The passé composé does not give the background to the storm.',
              joueront: 'The future does not fit a story in the past.',
            },
            L,
          ),
          q('c9', 'What is “un tirage”?', 'a print run', ['a lottery', 'a sketch', 'a review']),
          qh(
            'c10',
            'Il ___ la porte, puis il sortit.',
            'ferma',
            {
              fermait: 'The imparfait describes a continuing action, but sortit is a sequence.',
              'avait fermé': 'The plus-que-parfait looks back to an earlier moment.',
              fermera: 'The future does not fit a story in the past.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
