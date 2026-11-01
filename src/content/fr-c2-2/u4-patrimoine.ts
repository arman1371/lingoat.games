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

const U = 'fr-c2-2-patrimoine';
const LESSON = 'fr-c22-relatives' as const;

const sites = vocabList(U, 'Heritage sites', [
  ['le patrimoine', 'heritage', '🏛️'],
  ['le monument historique', 'listed historic monument', '🏰'],
  ['le vestige', 'relic, remnant', '🏺'],
  ['les fouilles', 'archaeological excavations', '⛏️'],
  ['le classement', 'official listing (of a monument)', '📋'],
  ['la sauvegarde', 'safeguarding', '🛟'],
  ['la charpente', 'timber frame', '🪵'],
  ['la voûte', 'vault', '⛪'],
  ['le beffroi', 'belfry', '🔔'],
  ['la citadelle', 'citadel', '🏯'],
  ['le rempart', 'rampart, defensive wall', '🧱'],
  ['le chantier', 'building site', '🚧'],
  ['les Journées du patrimoine', 'Heritage Days', '🗓️'],
]);

const histoire = vocabList(U, 'History and the French-speaking world', [
  ['le règne', 'reign', '👑'],
  ['la dynastie', 'dynasty', '🧬'],
  ['l’occupation', 'occupation', '🪖'],
  ['la colonisation', 'colonisation', '🚢'],
  ['la décolonisation', 'decolonisation', '🕊️'],
  ['la francophonie', 'the French-speaking world', '🌍'],
  ['l’Hexagone', 'mainland France', '🇫🇷'],
  ['le métissage', 'cultural mixing', '🎨'],
  ['le créole', 'creole language', '🏝️'],
  ['le témoignage', 'testimony, eyewitness account', '🎙️'],
  ['les archives', 'archives', '🗄️'],
  ['la mémoire collective', 'collective memory', '🧠'],
  ['le tournant', 'turning point', '↪️'],
]);

const vocab = [...sites, ...histoire];
const grammarTags = ['grammar', LESSON, 'fr-c22-patrimoine'] as const;

export const patrimoine: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 4,
    title: 'Patrimoine et histoire',
    subtitle: 'Talk about heritage, history and the French-speaking world with complex relatives',
    emoji: '🏰',
    goals: [
      'Talk about monuments, excavations and how a country protects its heritage',
      'Discuss history, memory and the French-speaking world',
      'Choose between dont, où, lequel (and its contractions) and ce dont',
    ],
    grammar: [
      'dont replaces de + noun: la cathédrale dont nous parlons.',
      'Preposition + lequel/laquelle/lesquels, with auquel and duquel: le château dans lequel il habite.',
      'where dont is impossible: au bout de laquelle, au pied desquels.',
      'ce dont, ce que, ce qui and où for time and place.',
    ],
    vocabFields: ['Heritage sites', 'History and the French-speaking world'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-sites',
      'flashcards',
      meta(
        'Heritage sites',
        'Vestige, beffroi, rempart: the words of monuments and excavations.',
        ['vocabulary', 'fr-c22-patrimoine'],
        1,
        4,
      ),
      flashcards(sites),
    ),

    activity(
      U,
      'flash-histoire',
      'flashcards',
      meta(
        'History and the French-speaking world',
        'Règne, métissage, mémoire collective: words for discussing the past.',
        ['vocabulary', 'fr-c22-patrimoine'],
        1,
        4,
      ),
      flashcards(histoire),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Sites and ruins',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-patrimoine'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          sites,
          'le monument historique',
          'le vestige',
          'les fouilles',
          'la voûte',
          'le beffroi',
          'la citadelle',
          'le rempart',
          'le chantier',
        ),
      ),
    ),

    activity(
      U,
      'listen-histoire',
      'listen',
      meta(
        'Hear the historians',
        'Listen and pick the meaning.',
        ['listening', 'fr-c22-patrimoine'],
        2,
        4,
      ),
      listen(histoire),
    ),

    activity(
      U,
      'memory-histoire',
      'memory',
      meta(
        'Historian’s memory',
        'Match each word with its meaning.',
        ['vocabulary', 'fr-c22-patrimoine'],
        2,
        4,
      ),
      memory(
        byDe(
          histoire,
          'le règne',
          'la dynastie',
          'l’occupation',
          'la colonisation',
          'la décolonisation',
          'la francophonie',
          'le métissage',
          'le témoignage',
        ),
      ),
    ),

    activity(
      U,
      'spell-sites',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-patrimoine'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-beffroi',
            mode: 'unscramble',
            answer: 'beffroi',
            hint: 'belfry',
            emoji: '🔔',
            speak: 'le beffroi',
          },
          {
            id: 'sp-charpente',
            mode: 'unscramble',
            answer: 'charpente',
            hint: 'timber frame',
            emoji: '🪵',
            speak: 'la charpente',
          },
          {
            id: 'sp-rempart',
            mode: 'type',
            answer: 'rempart',
            hint: 'rampart, defensive wall',
            emoji: '🧱',
            speak: 'le rempart',
          },
          {
            id: 'sp-vestige',
            mode: 'type',
            answer: 'vestige',
            hint: 'relic, remnant',
            emoji: '🏺',
            speak: 'le vestige',
          },
          dictation(
            'd1',
            'La citadelle est classée monument historique.',
            'The citadel is listed as a historic monument.',
          ),
          dictation(
            'd2',
            'Les archives dont vous parlez sont fermées.',
            'The archives you are talking about are closed.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-relatifs',
      'gapfill',
      meta(
        'dont, lequel, où or ce dont?',
        'Choose the relative pronoun that fits.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'La cathédrale ___ nous parlons date du XIIe siècle.',
              'dont',
              ['dont', 'que', 'laquelle', 'où'],
              'The cathedral we are talking about dates from the twelfth century.',
              'Parler de takes de, and dont stands for de + noun.',
            ),
            {
              que: 'Que is the direct object; parler needs de, so you need dont.',
              laquelle: 'Laquelle needs a preposition in front of it (de laquelle).',
              où: 'Où is for a place or a time, not for what is talked about.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Le château ___ il a hérité est classé.',
              'dont',
              ['dont', 'que', 'duquel', 'auquel'],
              'The castle he inherited is listed.',
              'Hériter de: dont replaces de + le château.',
            ),
            {
              que: 'Hériter is followed by de, so que (direct object) does not fit.',
              duquel: 'Duquel is used after a preposition + noun, not for a verb’s own de.',
              auquel: 'Hériter takes de, not à.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'La rue au bout ___ se trouve le beffroi est fermée.',
              'de laquelle',
              ['de laquelle', 'dont', 'de qui', 'duquel'],
              'The street at the end of which the belfry stands is closed.',
              'After au bout de, dont is impossible: use de + lequel, here de laquelle for rue.',
            ),
            {
              dont: 'Dont cannot follow a noun introduced by a preposition (au bout de).',
              'de qui': 'De qui is for people, and rue is a thing.',
              duquel: 'Rue is feminine: de laquelle.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Le monument ___ nous nous sommes intéressés est protégé.',
              'auquel',
              ['auquel', 'dont', 'que', 'lequel'],
              'The monument we became interested in is protected.',
              'S’intéresser à: à + lequel contracts to auquel.',
            ),
            {
              dont: 'S’intéresser takes à, not de.',
              que: 'Que is a direct object, but the verb needs à.',
              lequel: 'À + lequel contracts: auquel.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Les fouilles ___ on a découvert ce vestige ont duré dix ans.',
              'pendant lesquelles',
              ['pendant lesquelles', 'dont', 'que', 'pendant que'],
              'The excavations during which this relic was found lasted ten years.',
              'Pendant is a preposition, so it needs lesquelles, agreeing with fouilles.',
            ),
            {
              dont: 'Pendant is not de, so dont does not fit.',
              que: 'Que cannot follow a preposition.',
              'pendant que':
                'Pendant que is a conjunction and needs a clause with its own subject.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Je sais ___ tu rêves : visiter la citadelle.',
              'ce dont',
              ['ce dont', 'ce que', 'ce qui', 'dont'],
              'I know what you dream of: visiting the citadel.',
              'Rêver de + no antecedent noun: ce dont.',
            ),
            {
              'ce que': 'Rêver takes de: ce dont.',
              'ce qui': 'Ce qui is a subject, but tu is already the subject.',
              dont: 'Without an antecedent you need ce dont.',
            },
          ),
          typed(
            't1',
            'Les remparts, ___ la construction date du XVIIe siècle, protégeaient la ville.',
            'dont',
            'The ramparts, whose construction dates from the seventeenth century, protected the town.',
            'Dont links a noun to its owner: dont la construction.',
          ),
          typed(
            't2',
            'Les archives ___ on a trouvé ce témoignage sont ouvertes.',
            'dans lesquelles',
            'The archives in which this testimony was found are open.',
            'Preposition + lequel, agreeing with archives (feminine plural). Où is also possible.',
            ['où'],
          ),
          typed(
            't3',
            'C’est exactement ___ nous avons besoin.',
            'ce dont',
            'That is exactly what we need.',
            'Avoir besoin de: ce dont.',
          ),
          typed(
            't4',
            'Les historiens avec ___ j’ai travaillé sont réputés.',
            'lesquels',
            'The historians I worked with are renowned.',
            'Lesquels for people after a preposition; qui is also possible.',
            ['qui'],
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-relatifs',
      'sortit',
      meta(
        'Which relative?',
        'dont, preposition + lequel, où or ce + pronoun?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'Which relative pronoun is used in this phrase?',
        buckets: [
          { id: 'dont', label: 'dont (de + noun)', emoji: '🔗' },
          { id: 'lequel', label: 'preposition + lequel', emoji: '🧭' },
          { id: 'ou', label: 'où (place or time)', emoji: '📍' },
          { id: 'ce', label: 'ce dont / ce que / ce qui', emoji: '💭' },
        ],
        items: cards('r', [
          ['la ville dont il est originaire', 'dont', 'the town he comes from'],
          ['le site dont on parle', 'dont', 'the site people are talking about'],
          ['le livre dont l’auteur est inconnu', 'dont', 'the book whose author is unknown'],
          ['le château dans lequel il habite', 'lequel', 'the castle in which he lives'],
          ['les fouilles pendant lesquelles', 'lequel', 'the excavations during which'],
          ['les sites auxquels je pense', 'lequel', 'the sites I am thinking of'],
          ['la ville où je suis né', 'ou', 'the town where I was born'],
          ['l’année où le beffroi a brûlé', 'ou', 'the year the belfry burned down'],
          ['le jour où ils ont ouvert', 'ou', 'the day they opened'],
          ['ce dont je rêve', 'ce', 'what I dream of'],
          ['ce qui m’étonne', 'ce', 'what surprises me'],
          ['ce que nous cherchons', 'ce', 'what we are looking for'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-join',
      'quiz',
      meta(
        'Join the sentences',
        'Combine two sentences with the right relative pronoun.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            'j1',
            'Le beffroi est classé. Je vous parle de ce beffroi.',
            'Le beffroi dont je vous parle est classé.',
            [
              'Le beffroi que je vous parle est classé.',
              'Le beffroi lequel je vous parle est classé.',
              'Le beffroi où je vous parle est classé.',
            ],
            'Parler de: dont replaces de ce beffroi.',
          ),
          q(
            'j2',
            'La ville est splendide. J’habite dans cette ville.',
            'La ville où j’habite est splendide.',
            [
              'La ville dont j’habite est splendide.',
              'La ville que j’habite est splendide.',
              'La ville laquelle j’habite est splendide.',
            ],
            'Où replaces a place. (Dans laquelle is also correct.)',
          ),
          q(
            'j3',
            'Ce sont des remparts. Les enfants jouent sur ces remparts.',
            'Ce sont des remparts sur lesquels les enfants jouent.',
            [
              'Ce sont des remparts dont les enfants jouent.',
              'Ce sont des remparts que les enfants jouent.',
              'Ce sont des remparts sur lequel les enfants jouent.',
            ],
            'Preposition + lesquels, agreeing with remparts (masculine plural).',
          ),
          q(
            'j4',
            'L’historien est célèbre. Son livre a reçu un prix.',
            'L’historien dont le livre a reçu un prix est célèbre.',
            [
              'L’historien que le livre a reçu un prix est célèbre.',
              'L’historien duquel le livre a reçu un prix est célèbre.',
              'L’historien lequel le livre a reçu un prix est célèbre.',
            ],
            'Dont expresses possession (whose) directly before the noun, with the article.',
          ),
          q(
            'j5',
            'Voici les archives. Je travaille dans ces archives.',
            'Voici les archives dans lesquelles je travaille.',
            [
              'Voici les archives dont je travaille.',
              'Voici les archives que je travaille.',
              'Voici les archives dans lesquels je travaille.',
            ],
            'Dans + lesquelles, feminine plural.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build the sentence', 'Put the words in the right order.', [...grammarTags], 2, 5),
      {
        items: [
          sent(
            's1',
            'The cathedral we are talking about is listed.',
            ['La', 'cathédrale', 'dont', 'nous', 'parlons', 'est', 'classée.'],
            { extra: ['que'] },
          ),
          sent(
            's2',
            'The town where he was born has a belfry.',
            ['La', 'ville', 'où', 'il', 'est', 'né', 'possède', 'un', 'beffroi.'],
            { extra: ['dont'] },
          ),
          sent(
            's3',
            'The excavations during which we found this relic lasted ten years.',
            [
              'Les',
              'fouilles',
              'pendant',
              'lesquelles',
              'nous',
              'avons',
              'trouvé',
              'ce',
              'vestige',
              'ont',
              'duré',
              'dix',
              'ans.',
            ],
            { extra: ['lesquels'] },
          ),
          sent('s4', 'I know what you dream of.', ['Je', 'sais', 'ce', 'dont', 'tu', 'rêves.'], {
            extra: ['que'],
          }),
          sent(
            's5',
            'The historian whose book won a prize is famous.',
            ['L’historien', 'dont', 'le', 'livre', 'a', 'reçu', 'un', 'prix', 'est', 'célèbre.'],
            { extra: ['duquel'] },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Citadel, archives and French in the world',
        'Visit a monument, search the archives and talk about languages.',
        ['communication', 'fr-c22-patrimoine'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'citadelle',
            title: 'At the citadel',
            emoji: '🏯',
            setting: 'A guide shows your group a citadel. Use vous.',
            turns: [
              say(
                'Le guide',
                'Voici la citadelle dont nous parlions hier.',
                'Here is the citadel we were talking about yesterday.',
              ),
              you(
                'C’est le monument auquel je m’intéresse depuis longtemps.',
                [
                  'C’est le monument dont je m’intéresse depuis longtemps.',
                  'S’intéresser takes à, so you need auquel.',
                ],
                [
                  'C’est le monument que je m’intéresse depuis longtemps.',
                  'Que cannot replace à + monument.',
                ],
              ),
              say(
                'Le guide',
                'Les remparts ont été construits au XVIIe siècle.',
                'The ramparts were built in the seventeenth century.',
              ),
              you(
                'Les remparts au pied desquels nous sommes sont impressionnants.',
                [
                  'Les remparts au pied dont nous sommes sont impressionnants.',
                  'Dont cannot follow a preposition + noun (au pied de).',
                ],
                [
                  'Les remparts au pied lesquels nous sommes sont impressionnants.',
                  'The preposition de must be kept: au pied desquels.',
                ],
              ),
            ],
          },
          {
            id: 'archives',
            title: 'In the archives',
            emoji: '🗄️',
            setting: 'You are researching the Occupation and talk to an archivist. Use vous.',
            turns: [
              say(
                'L’archiviste',
                'Que cherchez-vous exactement ?',
                'What exactly are you looking for?',
              ),
              you(
                'Je cherche ce dont mon grand-père parlait : un témoignage sur l’Occupation.',
                [
                  'Je cherche ce que mon grand-père parlait : un témoignage sur l’Occupation.',
                  'Parler de: you need ce dont.',
                ],
                [
                  'Je cherche ce qui mon grand-père parlait : un témoignage sur l’Occupation.',
                  'Ce qui is a subject, but mon grand-père is already the subject.',
                ],
              ),
              say(
                'L’archiviste',
                'Il y a un registre dont j’ai la clé.',
                'There is a register for which I have the key.',
              ),
              you(
                'Merci. Le registre dont vous avez la clé est-il consultable ?',
                [
                  'Merci. Le registre que vous avez la clé est-il consultable ?',
                  'Avoir la clé de: dont replaces de + le registre.',
                ],
                [
                  'Merci. Le registre où vous avez la clé est-il consultable ?',
                  'Où is for a place or a time.',
                ],
              ),
            ],
          },
          {
            id: 'francophonie',
            title: 'French around the world',
            emoji: '🌍',
            setting: 'Two friends talk about the history of French in North America. Use tu.',
            turns: [
              say(
                'Inès',
                'Tu sais pourquoi on parle français au Québec ?',
                'Do you know why French is spoken in Quebec?',
              ),
              you(
                'C’est l’histoire d’une colonie dont la langue a survécu.',
                [
                  'C’est l’histoire d’une colonie que la langue a survécu.',
                  'Dont is needed: la langue de cette colonie.',
                ],
                [
                  'C’est l’histoire d’une colonie laquelle la langue a survécu.',
                  'Laquelle needs a preposition.',
                ],
              ),
              say(
                'Inès',
                'Ce qui m’étonne, c’est le métissage des langues.',
                'What surprises me is the mixing of languages.',
              ),
              you(
                'Oui, c’est ce dont on parle peu à l’école.',
                [
                  'Oui, c’est ce que on parle peu à l’école.',
                  'Parler de: you need ce dont, not ce que.',
                ],
                [
                  'Oui, c’est ce qui on parle peu à l’école.',
                  'Ce qui is a subject, but on is already the subject.',
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
        'Heritage and relatives blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-patrimoine'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Dont replaces de + a noun.', true),
          tf(
            'b2',
            '“La ville dont j’habite” is correct.',
            false,
            'Use où (la ville où j’habite) or dans laquelle.',
          ),
          tf(
            'b3',
            '“La rue au bout dont est le beffroi” is correct.',
            false,
            'After a preposition + noun use de laquelle: au bout de laquelle.',
          ),
          tf(
            'b4',
            'After a preposition other than de, a thing is introduced by lequel and its forms.',
            true,
          ),
          tf('b5', '“Auquel” is the contraction of à + lequel.', true),
          tf('b6', '“Ce dont” has no noun in front of it.', true),
          tf('b7', '“Où” can refer to a time as well as a place.', true),
          tf(
            'b8',
            '“Le château que je rêve” is correct.',
            false,
            'Rêver takes de: le château dont je rêve.',
          ),
          tf('b9', '“Les vestiges” are the remains of the past.', true),
          tf('b10', '“Un beffroi” is a type of bridge.', false, 'It is a belfry, a bell tower.'),
          tf('b11', '“Les fouilles” are archaeological excavations.', true),
          tf(
            'b12',
            '“La décolonisation” is the arrival of settlers.',
            false,
            'It is the end of colonial rule.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Heritage guide challenge',
        'Vocabulary and relative pronouns in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          withLesson(
            q(
              'c1',
              'Le site ___ il s’occupe est inscrit à l’UNESCO.',
              'dont',
              ['que', 'auquel', 'où'],
              'S’occuper de: dont.',
            ),
            LESSON,
          ),
          q('c2', 'Que veut dire « le vestige » ?', 'a remnant of the past', [
            'a type of vault',
            'the guardian of a site',
            'a heritage tax',
          ]),
          withLesson(
            q(
              'c3',
              'Voici les murs derrière ___ on a découvert un trésor.',
              'lesquels',
              ['lequel', 'dont', 'lesquelles'],
              'Preposition + lesquels, agreeing with murs (masculine plural).',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c4',
              'Je ne comprends pas ___ vous me reprochez.',
              'ce que',
              ['ce dont', 'ce qui', 'dont'],
              'Reprocher quelque chose à quelqu’un: the thing is a direct object, so ce que.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « le rempart » ?', 'a defensive wall', [
            'a bell tower',
            'a vault',
            'a building site',
          ]),
          withLesson(
            q(
              'c6',
              'La période ___ la ville fut occupée reste douloureuse.',
              'où',
              ['dont', 'que', 'laquelle'],
              'Où also stands for a period of time.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c7',
              'Les archives ___ j’ai besoin ne sont pas numérisées.',
              'dont',
              ['que', 'auxquelles', 'où'],
              'Avoir besoin de: dont.',
            ),
            LESSON,
          ),
          q('c8', 'Que veut dire « la décolonisation » ?', 'the end of colonial rule', [
            'the start of an occupation',
            'the founding of a dynasty',
            'the restoration of a monument',
          ]),
        ],
      },
    ),
  ],
};
