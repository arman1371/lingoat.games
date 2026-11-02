import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  gaps,
  meta,
  presentTable,
  quizRows,
  say,
  sentRows,
  sortCards,
  spellRows,
  tfRows,
  unitFr21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-portrait';

const faces = vocabList(U, 'Face and looks', [
  ['la silhouette', 'figure / outline', '🕴️'],
  ['la barbe', 'beard', '🧔'],
  ['la moustache', 'moustache', '🥸'],
  ['le sourcil', 'eyebrow', '🤨'],
  ['le front', 'forehead', '🤕'],
  ['le menton', 'chin', '🫦'],
  ['la joue', 'cheek', '😊'],
  ['la peau', 'skin', '🖐️'],
  ['la fossette', 'dimple', '☺️'],
  ['le tatouage', 'tattoo', '🐉'],
  ['la coiffure', 'hairstyle', '💇'],
  ['les cils', 'eyelashes', '👁️'],
]);

const looks = vocabList(U, 'Describing a body', [
  ['svelte', 'slim', '🧘'],
  ['maigre', 'skinny', '🦴'],
  ['costaud', 'sturdy / strong', '🏋️'],
  ['bronzé', 'tanned', '🏖️'],
  ['pâle', 'pale', '👻'],
  ['dégarni', 'balding', '🧑‍🦲'],
  ['barbu', 'bearded', '🧙'],
  ['ridé', 'wrinkled', '🧓'],
  ['élancé', 'tall and slender', '🦒'],
  ['trapu', 'stocky', '🐻'],
]);

const character = vocabList(U, 'Character', [
  ['généreux', 'generous', '🎁'],
  ['avare', 'stingy', '🪙'],
  ['réservé', 'reserved', '🤐'],
  ['bavard', 'talkative', '💬'],
  ['têtu', 'stubborn', '🐂'],
  ['paresseux', 'lazy', '🦥'],
  ['courageux', 'brave', '🦁'],
  ['sensible', 'sensitive', '🥹'],
  ['rigolo', 'funny', '🤡'],
  ['jaloux', 'jealous', '😒'],
  ['poli', 'polite', '🙇'],
  ['malin', 'clever / sly', '🦊'],
]);

const phrases = vocabList(U, 'Compliments and resemblance', [
  ['Ça te va bien !', 'It suits you!', '👗'],
  ['Tu as l’air en forme !', 'You look well!', '💪'],
  ['Quel beau sourire !', 'What a lovely smile!', '😁'],
  ['Tu as bon goût.', 'You have good taste.', '👌'],
  ['ressembler à', 'to look like', '👯'],
  ['avoir l’air', 'to look / to seem', '🧐'],
  ['Il ressemble à son père.', 'He looks like his father.', '👨‍👦'],
  ['Ils se ressemblent beaucoup.', 'They look very much alike.', '👭'],
  ['Elle a l’air fatiguée.', 'She looks tired.', '😴'],
  ['Chacun a ses goûts.', 'Everyone has their tastes.', '🎨'],
  ['Sois toi-même !', 'Be yourself!', '🌟'],
]);

const vocab = [...faces, ...looks, ...character, ...phrases];

const EQ = 'fr-a21-equality' as const;
const CT = 'fr-a21-chaque-tout' as const;
const PP = 'fr-a21-possessive-pronouns' as const;

export const portrait: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 5,
    title: 'Tous différents',
    subtitle: 'Describe looks and character, compare people and pay a compliment',
    emoji: '🧑‍🤝‍🧑',
    goals: [
      'Describe a person’s looks and character',
      'Say that two people are equal or alike',
      'Use chaque, tout and the possessive pronouns',
    ],
    grammar: ['aussi … que, autant de', 'chaque, tout, tous', 'le mien, la tienne'],
    vocabFields: [
      'Face and looks',
      'Describing a body',
      'Character',
      'Compliments and resemblance',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-faces',
      'flashcards',
      meta(
        'Face and looks',
        'Beards, eyebrows, dimples and hairstyles.',
        ['vocabulary', 'describing-people'],
        1,
        3,
      ),
      flashcards(faces),
    ),

    activity(
      U,
      'flash-character',
      'flashcards',
      meta(
        'Character',
        'Generous, shy, stubborn or funny: describe a personality.',
        ['vocabulary', 'describing-people', 'friendship'],
        1,
        3,
      ),
      flashcards(character),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the feature or the quality from the picture.',
        ['vocabulary', 'describing-people'],
        1,
        3,
      ),
      quizEmoji([...faces.slice(0, 5), ...character.slice(0, 7)], [...faces, ...character]),
    ),

    activity(
      U,
      'listen-people',
      'listen',
      meta(
        'Listen: people',
        'Listen to the word and pick its meaning.',
        ['listening', 'describing-people'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'la barbe', 'le menton', 'costaud', 'dégarni'),
          ...byDe(vocab, 'réservé', 'têtu', 'courageux', 'jaloux'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-looks',
      'memory',
      meta(
        'Looks memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'describing-people'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'svelte', 'maigre', 'pâle', 'bronzé'),
        ...byDe(vocab, 'avare', 'bavard', 'paresseux', 'sensible'),
      ]),
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Compliments and resemblance',
        'Pay a compliment and say who looks like whom.',
        ['vocabulary', 'communication', 'describing-people'],
        1,
        3,
      ),
      flashcards([...looks, ...phrases]),
    ),

    activity(
      U,
      'conj-people',
      'conjugation',
      meta(
        'Verbs about people',
        'Irregular verbs to talk about people you know.',
        ['grammar', 'describing-people'],
        2,
        4,
      ),
      {
        tables: [
          presentTable('connaître', 'to know (a person)', ['je', 'nous', 'ils/elles']),
          presentTable('croire', 'to believe', ['tu', 'il/elle/on', 'vous']),
          presentTable('vivre', 'to live', ['je', 'il/elle/on', 'nous']),
          presentTable('dire', 'to say', ['tu', 'vous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-equality',
      'gapfill',
      meta(
        'As … as, the same',
        'Choose aussi, autant or the right form of même.',
        ['grammar', EQ, 'describing-people'],
        2,
        4,
      ),
      {
        items: gaps('e', EQ, [
          [
            'Elle est ___ grande que son frère : ils font 1,80 m.',
            'aussi',
            ['aussi', 'plus', 'moins', 'autant'],
            'She is as tall as her brother: they are both 1.80 m.',
            'Aussi + adjective + que.',
          ],
          [
            'J’ai ___ d’amis que toi : nous en avons dix chacun.',
            'autant',
            ['autant', 'aussi', 'plus', 'moins'],
            'I have as many friends as you: we each have ten.',
            'Autant de + noun + que.',
          ],
          [
            'Nous avons ___ goûts : nous aimons les mêmes films.',
            'les mêmes',
            ['les mêmes', 'le même', 'la même', 'même'],
            'We have the same tastes: we like the same films.',
            'Goûts is plural: les mêmes.',
          ],
          [
            'Mon frère et moi, nous avons ___ âge : nous sommes jumeaux.',
            'le même',
            ['le même', 'la même', 'les mêmes', 'même'],
            'My brother and I are the same age: we are twins.',
            'Âge is masculine singular: le même.',
          ],
          [
            'Il est ___ patient que sa sœur : tous les deux sont très calmes.',
            'aussi',
            ['aussi', 'autant', 'plus', 'même'],
            'He is as patient as his sister: both are very calm.',
            'Before an adjective: aussi.',
          ],
          [
            'Elle travaille ___ que lui : huit heures par jour chacun.',
            'autant',
            ['autant', 'aussi', 'plus', 'même'],
            'She works as much as he does: eight hours a day each.',
            'After a verb: autant que.',
          ],
          [
            'Ce n’est pas ___ simple que je pensais.',
            'aussi',
            ['aussi', 'autant', 'même', 'trop'],
            'It is not as simple as I thought.',
            'Pas aussi + adjective + que.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sort-traits',
      'sortit',
      meta(
        'Quality or flaw?',
        'Sort the sentences: does the word describe a quality or a flaw?',
        ['vocabulary', 'describing-people', 'friendship'],
        2,
        3,
      ),
      {
        instruction: 'Is this a quality or a flaw?',
        buckets: [
          { id: 'quality', label: 'A quality', emoji: '😇' },
          { id: 'flaw', label: 'A flaw', emoji: '😬' },
        ],
        items: sortCards('s', [
          ['Il est généreux.', 'quality', 'He is generous.'],
          ['Elle est courageuse.', 'quality', 'She is brave.'],
          ['Il est drôle.', 'quality', 'He is funny.'],
          ['Elle est polie.', 'quality', 'She is polite.'],
          ['Il est malin.', 'quality', 'He is clever.'],
          ['Il est avare.', 'flaw', 'He is stingy.'],
          ['Elle est têtue.', 'flaw', 'She is stubborn.'],
          ['Il est paresseux.', 'flaw', 'He is lazy.'],
          ['Elle est jalouse.', 'flaw', 'She is jealous.'],
          ['Il est trop bavard.', 'flaw', 'He talks too much.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-chaque-tout',
      'gapfill',
      meta(
        'chaque, tout, tous',
        'Every, all, everybody: choose the right word.',
        ['grammar', CT],
        3,
        4,
      ),
      {
        items: gaps('t', CT, [
          [
            '___ personne est différente.',
            'Chaque',
            ['Chaque', 'Tout', 'Tous', 'Chacun'],
            'Every person is different.',
            'Chaque + singular noun.',
          ],
          [
            '___ a ses goûts et ses défauts.',
            'Chacun',
            ['Chacun', 'Chaque', 'Tout', 'Tous'],
            'Everyone has their tastes and flaws.',
            'Chacun stands alone, without a noun.',
          ],
          [
            '___ le monde a des défauts.',
            'Tout',
            ['Tout', 'Tous', 'Toute', 'Chaque'],
            'Everybody has flaws.',
            'Tout le monde is a fixed expression (singular).',
          ],
          [
            '___ mes amis sont sportifs.',
            'Tous',
            ['Tous', 'Tout', 'Toute', 'Chaque'],
            'All my friends are sporty.',
            'Masculine plural: tous.',
          ],
          [
            'Elle a invité ___ la famille.',
            'toute',
            ['toute', 'tout', 'tous', 'toutes'],
            'She invited the whole family.',
            'Famille is feminine singular: toute la famille.',
          ],
          [
            '___ ses sœurs ont les yeux bleus.',
            'Toutes',
            ['Toutes', 'Tous', 'Toute', 'Tout'],
            'All her sisters have blue eyes.',
            'Feminine plural: toutes.',
          ],
          [
            'Ils sont ___ les deux timides.',
            'tous',
            ['tous', 'tout', 'toutes', 'chaque'],
            'They are both shy.',
            'Tous les deux means both.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-possessive',
      'gapfill',
      meta(
        'Mine, yours, theirs',
        'Replace possessive + noun with le mien, la tienne …',
        ['grammar', PP],
        3,
        4,
      ),
      {
        items: gaps('p', PP, [
          [
            'Ton sac est vert, ___ est noir.',
            'le mien',
            ['le mien', 'mon', 'la mienne', 'les miens'],
            'Your bag is green, mine is black.',
            'Sac is masculine singular: le mien.',
          ],
          [
            'Voici ma clé ; où est ___ ?',
            'la tienne',
            ['la tienne', 'le tien', 'ta', 'les tiennes'],
            'Here is my key; where is yours?',
            'Clé is feminine singular: la tienne.',
          ],
          [
            'Nos voisins sont sympas, et ___ ?',
            'les vôtres',
            ['les vôtres', 'le vôtre', 'vos', 'la vôtre'],
            'Our neighbours are nice, and yours?',
            'Voisins is plural: les vôtres.',
          ],
          [
            'Ce n’est pas mon livre, c’est ___ (à elle).',
            'le sien',
            ['le sien', 'la sienne', 'son', 'le leur'],
            'It is not my book, it is hers.',
            'Livre is masculine; sien is the same for her and for him.',
          ],
          [
            'Leur maison est grande, ___ est petite.',
            'la nôtre',
            ['la nôtre', 'le nôtre', 'notre', 'les nôtres'],
            'Their house is big, ours is small.',
            'Maison is feminine singular: la nôtre.',
          ],
          [
            'J’adore mes parents. Et toi, tu aimes ___ ?',
            'les tiens',
            ['les tiens', 'le tien', 'tes', 'les siens'],
            'I love my parents. And you, do you like yours?',
            'Parents is plural: les tiens.',
          ],
          [
            'Mes enfants sont sportifs ; ___ (ceux de Lina) sont timides.',
            'les siens',
            ['les siens', 'les leurs', 'ses', 'le sien'],
            'My children are sporty; Lina’s are shy.',
            'Enfants is plural and the owner is Lina: les siens.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of a description in the right order.',
        ['grammar', 'describing-people'],
        2,
        4,
      ),
      {
        items: sentRows('s', [
          [
            EQ,
            'He is as sporty as his brother.',
            ['Il', 'est', 'aussi', 'sportif', 'que', 'son', 'frère.'],
            ['autant'],
          ],
          [
            EQ,
            'She has as much patience as I do.',
            ['Elle', 'a', 'autant', 'de', 'patience', 'que', 'moi.'],
            ['aussi'],
          ],
          [CT, 'Everybody is different.', ['Tout', 'le', 'monde', 'est', 'différent.'], ['tous']],
          [CT, 'All my friends are funny.', ['Tous', 'mes', 'amis', 'sont', 'drôles.'], ['tout']],
          [
            PP,
            'My bag is blue, yours is black.',
            ['Mon', 'sac', 'est', 'bleu,', 'le', 'tien', 'est', 'noir.'],
            ['la'],
          ],
          [EQ, 'We have the same tastes.', ['Nous', 'avons', 'les', 'mêmes', 'goûts.'], ['le']],
        ]),
      },
    ),

    activity(
      U,
      'spell-people',
      'spell',
      meta(
        'Spell the character words',
        'Unscramble and type words about people. Accents are optional here.',
        ['spelling', 'describing-people'],
        2,
        3,
      ),
      {
        items: spellRows('sp', [
          ['unscramble', 'sourcil', 'eyebrow', '🤨', 'le sourcil'],
          ['unscramble', 'courageux', 'brave', '🦁', 'courageux'],
          ['type', 'moustache', 'moustache', '🥸', 'la moustache'],
          ['type', 'réservé', 'reserved', '🤐', 'réservé'],
          ['type', 'généreux', 'generous', '🎁', 'généreux'],
        ]),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Describing people',
        'Describe a brother, pay a compliment and talk about differences.',
        ['communication', 'describing-people'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'brother',
            title: 'Your brother',
            emoji: '👬',
            setting: 'A friend asks about your brother. You say tu.',
            turns: [
              say('Léa', 'Comment est ton frère ?', 'What is your brother like?'),
              you(
                'Il est aussi grand que moi, mais il est plus timide.',
                [
                  'Il est autant grand que moi, mais il est plus timide.',
                  'Before an adjective use aussi, not autant.',
                ],
                [
                  'Il est aussi grande que moi, mais il est plus timide.',
                  'Frère is masculine: grand.',
                ],
              ),
              say('Léa', 'Et il te ressemble ?', 'And does he look like you?'),
              you(
                'Pas du tout ! Nous avons les mêmes goûts, mais pas le même caractère.',
                [
                  'Pas du tout ! Nous avons le même goûts, mais pas le même caractère.',
                  'Goûts is plural: les mêmes goûts.',
                ],
                [
                  'Pas du tout ! Nous avons les mêmes goûts, mais pas la même caractère.',
                  'Caractère is masculine: le même caractère.',
                ],
              ),
            ],
          },
          {
            id: 'compliment',
            title: 'A compliment',
            emoji: '👗',
            setting: 'At a party, you talk to Lina. You say tu.',
            turns: [
              say('Lina', 'Tu aimes ma robe ?', 'Do you like my dress?'),
              you(
                'Oui, ça te va très bien !',
                [
                  'Oui, ça te va très bon !',
                  'With aller use the adverb bien, not the adjective bon.',
                ],
                ['Oui, ça vous va très bien !', 'Lina is a friend, so say tu: ça te va bien.'],
              ),
              say(
                'Lina',
                'Merci ! Ma sœur a le même style, mais le sien est plus sobre.',
                'Thanks! My sister has the same style, but hers is more discreet.',
              ),
              you(
                'Le style de ta sœur est aussi élégant que le tien.',
                [
                  'Le style de ta sœur est aussi élégant que le tienne.',
                  'Style is masculine: le tien.',
                ],
                [
                  'Le style de ta sœur est autant élégant que le tien.',
                  'Before an adjective use aussi.',
                ],
              ),
            ],
          },
          {
            id: 'differences',
            title: 'We are all different',
            emoji: '🌍',
            setting: 'You chat with a colleague, Marc. You say tu.',
            turns: [
              say(
                'Marc',
                'Chaque personne est différente, non ?',
                'Every person is different, isn’t it?',
              ),
              you(
                'Oui, tout le monde a ses qualités et ses défauts.',
                [
                  'Oui, tous le monde a ses qualités et ses défauts.',
                  'Tout le monde is a fixed expression with tout.',
                ],
                [
                  'Oui, chaque monde a ses qualités et ses défauts.',
                  'The expression is tout le monde (everybody).',
                ],
              ),
              say(
                'Marc',
                'Et toi, tu es plutôt timide ou bavard ?',
                'And you, are you rather shy or talkative?',
              ),
              you(
                'Je suis timide, mais mes amis sont tous très bavards.',
                [
                  'Je suis timide, mais mes amis sont tout très bavards.',
                  'Tous agrees with the plural amis.',
                ],
                [
                  'Je suis timide, mais mes amis sont chaque très bavards.',
                  'Chaque only stands before a singular noun.',
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
        'People blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'describing-people', EQ],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: tfRows('b', [
          ['“Aussi grand que moi” means “as tall as me”.', true],
          ['“Autant grand que moi” is correct.', false, 'Before an adjective use aussi.'],
          ['“J’ai autant d’amis que toi” is correct.', true],
          ['“Les mêmes goûts” means “the same tastes”.', true],
          ['“Tout le monde” means “everybody”.', true],
          ['“Tous le monde” is correct.', false, 'Tout le monde, singular.'],
          [
            '“Chaque personnes” is correct.',
            false,
            'Chaque takes a singular noun: chaque personne.',
          ],
          ['“Le mien” can replace “mon sac”.', true],
          [
            '“La tienne” can replace “ma clé”.',
            false,
            'Ma clé → la mienne; la tienne replaces ta clé.',
          ],
          ['“Avare” means “generous”.', false, 'It means stingy.'],
          ['“Svelte” means “slim”.', true],
          ['“Ça te va bien” is a compliment.', true],
        ]),
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'describing-people'],
        3,
        4,
      ),
      {
        questions: quizRows('c', [
          [
            'Complete: “Elle est ___ intelligente que lui.” (the same level)',
            'aussi',
            ['autant', 'même', 'plus'],
            EQ,
          ],
          [
            'Complete: “Il a ___ de patience que moi.” (the same amount)',
            'autant',
            ['aussi', 'même', 'moins'],
            EQ,
          ],
          ['Complete: “Nous avons ___ âge.”', 'le même', ['la même', 'les mêmes', 'même'], EQ],
          ['Complete: “___ mes amis aiment le sport.”', 'Tous', ['Tout', 'Chaque', 'Toute'], CT],
          ['Complete: “___ élève a un livre.”', 'Chaque', ['Tous', 'Toutes', 'Chacun'], CT],
          [
            '“Mes clés sont ici. Où sont ___ ?” (yours)',
            'les tiennes',
            ['la tienne', 'les tiens', 'tes'],
            PP,
          ],
          ['“Timide” means …', 'shy', ['stubborn', 'brave', 'funny']],
          [
            'Which phrase is a compliment?',
            'Ça te va bien !',
            ['Ça m’énerve !', 'Quel dommage !', 'Tant pis !'],
          ],
        ]),
      },
    ),
  ],
};
