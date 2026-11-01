import { byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  activity,
  cards,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  tf,
  typed,
  unitFrC22,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c2-2-expressions';
const LESSON = 'fr-c22-figures' as const;

const locutions = vocabList(U, 'Idioms of daily life', [
  ['poser un lapin', 'to stand someone up', '🐇'],
  ['avoir le cafard', 'to feel down', '🪳'],
  ['coûter les yeux de la tête', 'to cost a fortune', '👀'],
  ['tomber dans les pommes', 'to faint', '🍎'],
  ['casser les pieds à quelqu’un', 'to annoy someone', '🦶'],
  ['avoir un chat dans la gorge', 'to have a frog in one’s throat', '🐈'],
  ['mettre son grain de sel', 'to butt in', '🧂'],
  ['se jeter à l’eau', 'to take the plunge', '🏊'],
  ['avoir le bras long', 'to have influence', '💪'],
  ['prendre la mouche', 'to take offence', '🪰'],
  ['raconter des salades', 'to tell tall tales', '🥗'],
  ['être au bout du rouleau', 'to be at the end of one’s tether', '🧻'],
  ['avoir un poil dans la main', 'to be lazy', '🖐️'],
]);

const proverbes = vocabList(U, 'Proverbs', [
  ['Petit à petit, l’oiseau fait son nid', 'Little by little, one gets there', '🐦'],
  ['Qui sème le vent récolte la tempête', 'You reap what you sow (trouble)', '🌪️'],
  ['L’habit ne fait pas le moine', 'Do not judge by appearances', '🧥'],
  ['Chat échaudé craint l’eau froide', 'Once bitten, twice shy', '🐱'],
  ['Rien ne sert de courir, il faut partir à point', 'Slow and steady wins', '🐢'],
  ['Pierre qui roule n’amasse pas mousse', 'A rolling stone gathers no moss', '🪨'],
  ['Il n’y a pas de fumée sans feu', 'There is no smoke without fire', '🔥'],
  ['Un tiens vaut mieux que deux tu l’auras', 'A bird in the hand is worth two in the bush', '✋'],
  ['La nuit porte conseil', 'Sleep on it', '🌙'],
  ['Qui vivra verra', 'Time will tell', '⏳'],
  ['À bon entendeur, salut', 'A word to the wise', '👂'],
  ['Les petits ruisseaux font les grandes rivières', 'Small things add up', '🌊'],
  ['Aide-toi, le ciel t’aidera', 'Heaven helps those who help themselves', '🙏'],
]);

const vocab = [...locutions, ...proverbes];
const grammarTags = ['grammar', LESSON, 'fr-c22-expressions'] as const;

export const expressions: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 9,
    title: 'Proverbes et figures de style',
    subtitle: 'Understand idioms and proverbs, and name the figures of style in a text',
    emoji: '🎭',
    goals: [
      'Understand and use common idioms and proverbs',
      'Recognise the main figures of style in literary and everyday texts',
      'Tell a métaphore from a comparaison and a litote from an hyperbole',
    ],
    grammar: [
      'Métaphore (no comparison word) and comparaison (comme).',
      'Litote, hyperbole and euphémisme: saying less, more or softer.',
      'Antithèse and oxymore: contrast between parts or inside a phrase.',
      'Métonymie, synecdoque, personnification and anaphore.',
    ],
    vocabFields: ['Idioms of daily life', 'Proverbs'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-locutions',
      'flashcards',
      meta(
        'Idioms of daily life',
        'Poser un lapin, avoir le cafard: sayings you hear every day.',
        ['vocabulary', 'fr-c22-expressions'],
        1,
        4,
      ),
      flashcards(locutions),
    ),

    activity(
      U,
      'flash-proverbes',
      'flashcards',
      meta(
        'Proverbs',
        'Thirteen classic French proverbs and what they mean.',
        ['vocabulary', 'fr-c22-expressions'],
        1,
        4,
      ),
      flashcards(proverbes),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Idioms in pictures',
        'Which idiom does the picture suggest?',
        ['vocabulary', 'fr-c22-expressions'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          locutions,
          'poser un lapin',
          'avoir le cafard',
          'tomber dans les pommes',
          'avoir un chat dans la gorge',
          'mettre son grain de sel',
          'se jeter à l’eau',
          'raconter des salades',
          'être au bout du rouleau',
        ),
      ),
    ),

    activity(
      U,
      'listen-proverbes',
      'listen',
      meta(
        'Hear the proverbs',
        'Listen and pick the meaning.',
        ['listening', 'fr-c22-expressions'],
        2,
        4,
      ),
      listen(proverbes),
    ),

    activity(
      U,
      'memory-proverbes',
      'memory',
      meta(
        'Proverb memory',
        'Match each proverb with its meaning.',
        ['vocabulary', 'fr-c22-expressions'],
        2,
        4,
      ),
      memory(
        byDe(
          proverbes,
          'Petit à petit, l’oiseau fait son nid',
          'Qui sème le vent récolte la tempête',
          'L’habit ne fait pas le moine',
          'Chat échaudé craint l’eau froide',
          'Pierre qui roule n’amasse pas mousse',
          'Il n’y a pas de fumée sans feu',
          'La nuit porte conseil',
          'Qui vivra verra',
        ),
      ),
    ),

    activity(
      U,
      'spell-figures',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-expressions'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-metaphore',
            mode: 'unscramble',
            answer: 'métaphore',
            hint: 'image without a comparison word',
            emoji: '🖼️',
            speak: 'la métaphore',
          },
          {
            id: 'sp-hyperbole',
            mode: 'unscramble',
            answer: 'hyperbole',
            hint: 'deliberate exaggeration',
            emoji: '📣',
            speak: 'l’hyperbole',
          },
          {
            id: 'sp-litote',
            mode: 'type',
            answer: 'litote',
            hint: 'saying less to suggest more',
            emoji: '🤏',
            speak: 'la litote',
          },
          {
            id: 'sp-oxymore',
            mode: 'type',
            answer: 'oxymore',
            hint: 'two contradictory words together',
            emoji: '⚡',
            speak: 'l’oxymore',
          },
          dictation('d1', 'L’habit ne fait pas le moine.', 'Clothes do not make the man.'),
          dictation('d2', 'Cette ville est une jungle.', 'This city is a jungle.'),
        ],
      },
    ),

    activity(
      U,
      'gap-figures',
      'gapfill',
      meta(
        'Name the figure',
        'Choose the figure of style that fits the sentence.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Dans « Cette ville est une jungle », il y a une ___ : pas de mot de comparaison.',
              'métaphore',
              ['métaphore', 'comparaison', 'litote', 'antithèse'],
              'In “This city is a jungle” there is a metaphor: no comparison word.',
              'A métaphore replaces one thing by another without a comparison word.',
            ),
            {
              comparaison: 'A comparaison needs a word such as comme.',
              litote: 'A litote says less to suggest more.',
              antithèse: 'An antithèse opposes two ideas in parallel.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Dans « Il est fort comme un lion », il y a une ___.',
              'comparaison',
              ['comparaison', 'métaphore', 'hyperbole', 'oxymore'],
              'In “He is as strong as a lion” there is a comparison.',
              'The word comme links the two things: this is a comparaison.',
            ),
            {
              métaphore: 'A métaphore has no comparison word, and here comme is present.',
              hyperbole: 'An hyperbole exaggerates; this phrase only compares.',
              oxymore: 'An oxymore joins two contradictory words.',
            },
          ),
          withWhy(
            gap(
              'g3',
              '« Va, je ne te hais point » est une ___ : on dit moins pour suggérer plus.',
              'litote',
              ['litote', 'hyperbole', 'antithèse', 'euphémisme'],
              '“Go, I do not hate you at all” is a litotes: saying less to suggest more.',
              'A litote denies the opposite to affirm strongly (ne te hais point = je t’aime).',
            ),
            {
              hyperbole: 'An hyperbole says more, not less.',
              antithèse: 'An antithèse sets two opposites side by side.',
              euphémisme: 'An euphémisme softens something harsh instead of affirming by denying.',
            },
          ),
          withWhy(
            gap(
              'g4',
              '« J’ai attendu une éternité » est une ___.',
              'hyperbole',
              ['hyperbole', 'litote', 'oxymore', 'antithèse'],
              '“I waited an eternity” is a hyperbole.',
              'An hyperbole is a deliberate exaggeration.',
            ),
            {
              litote: 'A litote understates.',
              oxymore: 'An oxymore pairs two contradictory words.',
              antithèse: 'An antithèse opposes two terms.',
            },
          ),
          withWhy(
            gap(
              'g5',
              '« Une obscure clarté » réunit deux mots contraires : c’est un ___.',
              'oxymore',
              ['oxymore', 'antithèse', 'euphémisme', 'synecdoque'],
              '“An obscure clarity” joins two opposite words: an oxymoron.',
              'An oxymore puts two contradictory words together in one phrase.',
            ),
            {
              antithèse: 'An antithèse opposes two parts in parallel, not inside a single phrase.',
              euphémisme: 'An euphémisme softens a harsh word.',
              synecdoque: 'A synecdoque takes a part for the whole.',
            },
          ),
          withWhy(
            gap(
              'g6',
              '« Boire un verre » désigne le contenu par le contenant : c’est une ___.',
              'métonymie',
              ['métonymie', 'métaphore', 'personnification', 'anaphore'],
              '“Drinking a glass” names the content by its container: a metonymy.',
              'A métonymie replaces a word by another to which it is logically linked.',
            ),
            {
              métaphore: 'A métaphore relies on a resemblance, not on a logical link.',
              personnification: 'A personnification gives human traits to a thing.',
              anaphore: 'An anaphore repeats a word at the start of clauses.',
            },
          ),
          typed(
            't1',
            'Dire « il nous a quittés » pour « il est mort » est un ___.',
            'euphémisme',
            'Saying “he has left us” for “he is dead” is a euphemism.',
            'An euphémisme softens a harsh word.',
          ),
          typed(
            't2',
            'Répéter le même mot en tête de phrases successives est une ___.',
            'anaphore',
            'Repeating the same word at the start of successive sentences is an anaphora.',
            'The anaphore builds rhythm.',
          ),
          typed(
            't3',
            'Donner des traits humains à une chose (« la mer rit ») est une ___.',
            'personnification',
            'Giving human traits to a thing is a personification.',
            'Personnification: the sea laughs.',
          ),
          typed(
            't4',
            'Dire « cent voiles » pour « cent bateaux » est une ___.',
            'synecdoque',
            'Saying “a hundred sails” for “a hundred boats” is a synecdoche.',
            'A synecdoque takes the part for the whole.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-figures',
      'sortit',
      meta('Which figure?', 'Métaphore, comparaison, hyperbole or litote?', [...grammarTags], 2, 5),
      {
        instruction: 'Which figure of style is it?',
        buckets: [
          { id: 'metaphore', label: 'Métaphore', emoji: '🖼️' },
          { id: 'comparaison', label: 'Comparaison', emoji: '⚖️' },
          { id: 'hyperbole', label: 'Hyperbole', emoji: '📣' },
          { id: 'litote', label: 'Litote', emoji: '🤏' },
        ],
        items: cards('f', [
          ['cette ville est une jungle', 'metaphore', 'this city is a jungle'],
          ['son rire de pluie fraîche', 'metaphore', 'her laughter of fresh rain'],
          ['le temps est un voleur', 'metaphore', 'time is a thief'],
          ['fort comme un lion', 'comparaison', 'strong as a lion'],
          ['la musique me prend comme une mer', 'comparaison', 'music takes me like a sea'],
          ['rapide comme l’éclair', 'comparaison', 'quick as lightning'],
          ['je meurs de faim', 'hyperbole', 'I am dying of hunger'],
          ['j’ai attendu une éternité', 'hyperbole', 'I waited an eternity'],
          ['un bruit à réveiller les morts', 'hyperbole', 'a noise to wake the dead'],
          ['va, je ne te hais point', 'litote', 'go, I do not hate you at all'],
          ['ce n’est pas mal du tout', 'litote', 'it is not bad at all'],
          ['il n’est pas bête', 'litote', 'he is not stupid'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-figures',
      'quiz',
      meta('Spot the figure', 'Which figure of style is in the quotation?', [...grammarTags], 3, 6),
      {
        questions: [
          q(
            't1',
            '« Je vis, je meurs ; je me brûle et me noie » (Louise Labé)',
            'une antithèse',
            ['une métaphore', 'une litote', 'une anaphore'],
            'Opposed terms set against each other in parallel: an antithèse.',
          ),
          q(
            't2',
            '« Éphémère immortel » (Paul Valéry)',
            'un oxymore',
            ['une métonymie', 'une personnification', 'une litote'],
            'Two contradictory words together in one phrase: an oxymore.',
          ),
          q(
            't3',
            '« C’était au temps où Bruxelles chantait » (Jacques Brel)',
            'une métonymie',
            ['une comparaison', 'une anaphore', 'une litote'],
            'Bruxelles stands for its inhabitants: a métonymie.',
          ),
          q(
            't4',
            '« Leurs bras désespérés » (les arbres, Marcel Proust)',
            'une personnification',
            ['une hyperbole', 'une litote', 'une antithèse'],
            'Trees are given human arms and feelings: a personnification.',
          ),
          q(
            't5',
            '« Mon bras qu’avec respect toute l’Espagne admire » (Corneille)',
            'une synecdoque',
            ['une métaphore', 'une comparaison', 'une anaphore'],
            'The arm stands for the whole person: a synecdoque.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the proverb',
        'Put the words in the right order.',
        ['vocabulary', 'fr-c22-expressions'],
        2,
        5,
      ),
      {
        items: [
          sent(
            's1',
            'Little by little, the bird builds its nest.',
            ['Petit', 'à', 'petit,', 'l’oiseau', 'fait', 'son', 'nid.'],
            { extra: ['grand'] },
          ),
          sent(
            's2',
            'There is no smoke without fire.',
            ['Il', 'n’y', 'a', 'pas', 'de', 'fumée', 'sans', 'feu.'],
            { extra: ['rien'] },
          ),
          sent(
            's3',
            'Clothes do not make the man.',
            ['L’habit', 'ne', 'fait', 'pas', 'le', 'moine.'],
            { extra: ['robe'] },
          ),
          sent('s4', 'Sleep on it.', ['La', 'nuit', 'porte', 'conseil.'], { extra: ['jour'] }),
          sent(
            's5',
            'Whoever sows the wind reaps the storm.',
            ['Qui', 'sème', 'le', 'vent', 'récolte', 'la', 'tempête.'],
            { extra: ['pluie'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Café, office and classroom',
        'Use idioms, proverbs and figures of style.',
        ['communication', 'fr-c22-expressions'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'cafe',
            title: 'At the café',
            emoji: '☕',
            setting: 'You talk to a friend about your week. Use tu.',
            turns: [
              say('Julie', 'Tu as l’air fatigué…', 'You look tired…'),
              you(
                'Oui, j’ai le cafard depuis lundi.',
                ['Oui, j’ai la cafard depuis lundi.', 'Cafard is masculine: avoir le cafard.'],
                ['Oui, je suis le cafard depuis lundi.', 'The idiom uses avoir, not être.'],
              ),
              say('Julie', 'Et ton rendez-vous avec Marc ?', 'And your date with Marc?'),
              you(
                'Il m’a posé un lapin, je n’en reviens pas.',
                [
                  'Il m’a posé un lapins, je n’en reviens pas.',
                  'The expression is fixed: poser un lapin.',
                ],
                [
                  'Il me a posé un lapin, je n’en reviens pas.',
                  'Me becomes m’ before a vowel: m’a.',
                ],
              ),
            ],
          },
          {
            id: 'bureau',
            title: 'At the office',
            emoji: '💼',
            setting: 'You talk to a colleague about a slow project. Use vous.',
            turns: [
              say('Votre collègue', 'Le projet avance lentement.', 'The project is moving slowly.'),
              you(
                'Petit à petit, l’oiseau fait son nid.',
                ['Petit à petit, l’oiseau fait son lit.', 'The proverb ends with nid (nest).'],
                ['Petit à petit, l’oiseau fais son nid.', 'Third person singular: fait.'],
              ),
              say(
                'Votre collègue',
                'Certains disent que ça ne marchera pas.',
                'Some say it will not work.',
              ),
              you(
                'Chat échaudé craint l’eau froide : donnons-leur du temps.',
                [
                  'Chat échaudé craint l’eau chaude : donnons-leur du temps.',
                  'In the proverb the scalded cat fears cold water.',
                ],
                [
                  'Chat échaudés craint l’eau froide : donnons-leur du temps.',
                  'Chat is singular, so échaudé.',
                ],
              ),
            ],
          },
          {
            id: 'classe',
            title: 'In the classroom',
            emoji: '📚',
            setting: 'You discuss a poem with your teacher. Use vous.',
            turns: [
              say(
                'Le professeur',
                'Que pensez-vous de ce texte ?',
                'What do you think of this text?',
              ),
              you(
                'Le poète emploie une métaphore : sa ville est une jungle.',
                [
                  'Le poète emploie un métaphore : sa ville est une jungle.',
                  'Métaphore is feminine: une métaphore.',
                ],
                [
                  'Le poète emploie une comparaison : sa ville est une jungle.',
                  'There is no comparison word such as comme, so it is a métaphore.',
                ],
              ),
              say('Le professeur', 'Et la fin du poème ?', 'And the end of the poem?'),
              you(
                'C’est une litote : « ce n’est pas mal » veut dire « c’est très bien ».',
                [
                  'C’est un litote : « ce n’est pas mal » veut dire « c’est très bien ».',
                  'Litote is feminine: une litote.',
                ],
                [
                  'C’est une hyperbole : « ce n’est pas mal » veut dire « c’est très bien ».',
                  'An hyperbole exaggerates; here the speaker says less.',
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
        'Figures and sayings blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-expressions'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'A métaphore has no comparison word.', true),
          tf(
            'b2',
            '“Fort comme un lion” is a métaphore.',
            false,
            'It contains comme: it is a comparaison.',
          ),
          tf('b3', 'A litote says less to suggest more.', true),
          tf('b4', 'An hyperbole is a deliberate exaggeration.', true),
          tf('b5', 'An oxymore puts two contradictory words together.', true),
          tf('b6', '“Il nous a quittés” for “il est mort” is an euphémisme.', true),
          tf('b7', 'A métonymie replaces a word by a logically linked one.', true),
          tf('b8', 'A personnification gives human traits to a thing.', true),
          tf(
            'b9',
            'A proverb has a known author.',
            false,
            'Proverbs are anonymous popular wisdom.',
          ),
          tf('b10', '“Poser un lapin” means to stand someone up.', true),
          tf('b11', '“Tomber dans les pommes” means to eat apples.', false, 'It means to faint.'),
          tf('b12', '“Avoir le cafard” means to feel down.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Rhetoric challenge',
        'Sayings and figures of style in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q('c1', 'Que veut dire « coûter les yeux de la tête » ?', 'to cost a fortune', [
            'to be very beautiful',
            'to be hard to see',
            'to make one cry',
          ]),
          withLesson(
            q(
              'c2',
              '« Rapide comme l’éclair » est ___.',
              'une comparaison',
              ['une métaphore', 'une litote', 'une antithèse'],
              'The word comme makes it a comparaison.',
            ),
            LESSON,
          ),
          q('c3', 'Que veut dire « Qui vivra verra » ?', 'time will tell', [
            'live and let live',
            'seeing is believing',
            'he who laughs last',
          ]),
          withLesson(
            q(
              'c4',
              '« Je meurs de faim » est ___.',
              'une hyperbole',
              ['une litote', 'un oxymore', 'une anaphore'],
              'It exaggerates deliberately.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « mettre son grain de sel » ?', 'to butt in', [
            'to add seasoning',
            'to save money',
            'to be stubborn',
          ]),
          withLesson(
            q(
              'c6',
              '« Ce n’est pas mal du tout » est ___.',
              'une litote',
              ['une hyperbole', 'une personnification', 'une synecdoque'],
              'It says less to suggest more.',
            ),
            LESSON,
          ),
          q('c7', 'Que veut dire « La nuit porte conseil » ?', 'sleep on it', [
            'the night is dangerous',
            'work at night',
            'dream big',
          ]),
          withLesson(
            q(
              'c8',
              '« Éphémère immortel » est ___.',
              'un oxymore',
              ['une comparaison', 'une métonymie', 'une anaphore'],
              'Two contradictory words in one phrase.',
            ),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
