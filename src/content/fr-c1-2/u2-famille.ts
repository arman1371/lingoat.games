import { activity, vocabList } from '../builders';
import {
  cards,
  dictated,
  gap,
  npc,
  q,
  scene,
  scrambled,
  tf,
  typed,
  unitFrC12,
  vocabBlock,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c1-2-famille';

const vocab = vocabList(U, 'Famille et filiation', [
  ['la filiation', 'parentage, line of descent', '🧬'],
  ['la lignée', 'lineage, family line', '🌳'],
  ['les aïeux', 'forebears, ancestors', '🕰️'],
  ['la famille recomposée', 'blended family', '🧩'],
  ['la famille monoparentale', 'single-parent family', '👩‍👧'],
  ['la famille nombreuse', 'large family', '👨‍👩‍👧‍👦'],
  ['la fratrie', 'siblings as a group', '👭'],
  ['l’aîné', 'eldest child', '🥇'],
  ['le cadet', 'youngest or younger child', '🥉'],
  ['le jumeau', 'twin', '👯'],
  ['le conjoint', 'spouse, partner', '💍'],
  ['le PACS', 'civil partnership', '📄'],
  ['la garde alternée', 'shared custody', '⚖️'],
  ['l’héritage', 'inheritance', '🏠'],
  ['l’adoption', 'adoption', '🍼'],
  ['le foyer', 'household, family home', '🏡'],
  ['les parents d’accueil', 'foster parents', '🤲'],
  ['l’orphelin', 'orphan', '🕯️'],
  ['la parenté', 'kinship, relatives', '🔗'],
  ['le fossé des générations', 'generation gap', '↔️'],
  ['se disputer', 'to quarrel', '🗯️'],
  ['se réconcilier', 'to make up', '🤝'],
  ['bouder', 'to sulk', '😒'],
  ['être brouillé avec', 'to have fallen out with', '🚫'],
  ['l’autorité parentale', 'parental authority', '🚸'],
  ['élever', 'to raise (a child)', '🌱'],
  ['la transmission', 'passing on (values, traditions)', '📜'],
  ['gâter', 'to spoil (a child)', '🍬'],
  ['la punition', 'punishment', '⛔'],
  ['la rivalité', 'rivalry', '🥊'],
  ['s’émanciper', 'to become independent', '🕊️'],
  ['couver', 'to mollycoddle, to smother', '🐣'],
  ['materner', 'to mother, to fuss over', '🤱'],
  ['le nid', 'the family nest', '🪺'],
]);

export const famille: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 2,
    title: 'Ma belle famille !',
    subtitle: 'Family types, quarrels, upbringing – and choosing the right register',
    emoji: '👨‍👩‍👧‍👦',
    goals: [
      'Describe family types, filiation and inheritance',
      'Talk about tensions between generations and upbringing',
      'Choose between familier, courant and soutenu',
      'Ask questions in three different ways',
    ],
    grammar: ['Registres de langue', 'Three ways to ask a question'],
    vocabFields: ['Famille et filiation'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-family', vocab, {
      first: 'Family types and relations',
      firstText: 'Meet the words for blended families, siblings, custody and inheritance.',
      second: 'Quarrels and upbringing',
      secondText: 'Words for tensions, authority, upbringing and becoming independent.',
    }),

    activity(
      U,
      'quiz-definitions',
      'quiz',
      {
        title: 'Which word is defined?',
        description: 'Read the definition in French and find the word.',
        tags: ['vocabulary', 'fr-c12-family'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        questions: [
          q(
            'd1',
            'Famille où vivent des enfants issus d’unions différentes.',
            'la famille recomposée',
            ['la famille nombreuse', 'la famille monoparentale', 'la fratrie'],
          ),
          q('d2', 'Ensemble des frères et sœurs d’une même famille.', 'la fratrie', [
            'la lignée',
            'la parenté',
            'le foyer',
          ]),
          q(
            'd3',
            'Après un divorce, l’enfant vit tour à tour chez chacun de ses parents.',
            'la garde alternée',
            ['l’adoption', 'l’autorité parentale', 'la transmission'],
          ),
          q('d4', 'Biens que l’on reçoit à la mort d’un proche.', 'l’héritage', [
            'la punition',
            'la filiation',
            'le PACS',
          ]),
          q('d5', 'Le premier enfant né dans une famille.', 'l’aîné', [
            'le cadet',
            'le jumeau',
            'l’orphelin',
          ]),
          q('d6', 'Protéger un enfant de façon excessive.', 'couver', [
            'élever',
            'bouder',
            's’émanciper',
          ]),
          q('d7', 'Devenir libre et indépendant de sa famille.', 's’émanciper', [
            'se réconcilier',
            'gâter',
            'materner',
          ]),
          q(
            'd8',
            'Ne plus se parler après une dispute, sans vouloir faire le premier pas.',
            'bouder',
            ['se disputer', 'se réconcilier', 'élever'],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-register',
      'sortit',
      {
        title: 'Familier, courant or soutenu?',
        description: 'Sort the sentences by register.',
        tags: ['grammar', 'fr-c12-registres'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Which register is it?',
        buckets: [
          { id: 'familier', label: 'familier – casual', emoji: '😎' },
          { id: 'courant', label: 'courant – neutral', emoji: '🙂' },
          { id: 'soutenu', label: 'soutenu – formal', emoji: '🎩' },
        ],
        items: [
          ...cards('familier', [
            ['Il a une bagnole toute neuve.', 'He has a brand-new car.'],
            ['J’en sais rien, moi.', 'I haven’t got a clue.'],
            ['On bouffe où ce soir ?', 'Where are we eating tonight?'],
          ]),
          ...cards('courant', [
            ['Il a une voiture toute neuve.', 'He has a brand-new car.'],
            ['Je ne sais pas.', 'I don’t know.'],
            ['On mange où ce soir ?', 'Where are we eating tonight?'],
          ]),
          ...cards('soutenu', [
            ['Il possède une automobile toute neuve.', 'He owns a brand-new car.'],
            ['Je l’ignore.', 'I do not know.'],
            ['Où souhaitez-vous dîner ce soir ?', 'Where would you like to dine tonight?'],
          ]),
        ],
      },
    ),

    activity(
      U,
      'quiz-situations',
      'quiz',
      {
        title: 'What do you say?',
        description: 'Pick the sentence that suits the situation.',
        tags: ['grammar', 'fr-c12-registres'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          q(
            's1',
            'Vous écrivez à la directrice de l’école pour excuser votre fils.',
            'Je vous prie de bien vouloir excuser l’absence de mon fils.',
            [
              'Mon gamin était malade, voilà.',
              'Excuse-moi pour mon fils, il a été malade.',
              'Il est pas venu, il était crevé.',
            ],
            { lesson: 'fr-c12-registres' },
          ),
          q(
            's2',
            'Vous envoyez un SMS à votre sœur pour savoir si elle vient dîner.',
            'Tu viens bouffer ce soir ?',
            [
              'Viendrez-vous dîner ce soir ?',
              'Seriez-vous des nôtres pour le dîner ?',
              'Je m’enquiers de votre venue.',
            ],
            { lesson: 'fr-c12-registres' },
          ),
          q(
            's3',
            'Un collègue que vous connaissez peu demande où habitent vos parents.',
            'Ils habitent à Lyon, près de chez ma sœur.',
            [
              'Ils crèchent à Lyon, chez ma frangine.',
              'Ils résident à Lyon, auprès de ma sœur.',
              'À Lyon, quoi.',
            ],
            { lesson: 'fr-c12-registres' },
          ),
          q(
            's4',
            'Vous parlez à votre grand-mère de 90 ans, que vous vouvoyez avec respect.',
            'Désirez-vous que je vous aide à descendre ?',
            [
              'Tu veux que je t’aide à descendre ?',
              'Tu veux de l’aide, mamie ?',
              'Faut descendre, hein.',
            ],
            { lesson: 'fr-c12-registres' },
          ),
          q(
            's5',
            'Vous racontez à un ami que votre frère s’est mis en colère.',
            'Mon frère s’est mis en colère.',
            [
              'Mon frère s’est courroucé.',
              'Mon frère a pété les plombs, tu vois.',
              'Mon frangin est vénère.',
            ],
            { lesson: 'fr-c12-registres' },
          ),
          q(
            's6',
            'Dans un discours de mariage devant toute la famille, vous remerciez les parents.',
            'Je tiens à remercier chaleureusement les parents de la mariée.',
            [
              'Merci aux vieux de la mariée !',
              'Les parents de la mariée, c’est top.',
              'Un grand merci, les vieux.',
            ],
            { lesson: 'fr-c12-registres' },
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-questions',
      'sortit',
      {
        title: 'Three ways to ask',
        description: 'Sort the questions: intonation, est-ce que or inversion.',
        tags: ['grammar', 'fr-c12-questions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'How is the question formed?',
        buckets: [
          { id: 'intonation', label: 'intonation', emoji: '📈' },
          { id: 'estce', label: 'est-ce que', emoji: '❓' },
          { id: 'inversion', label: 'inversion', emoji: '🔄' },
        ],
        items: [
          ...cards('intonation', [
            ['Tu viens dîner ?', 'Are you coming for dinner?'],
            ['Vous avez des enfants ?', 'Do you have children?'],
            ['Ils sont partis ?', 'Have they left?'],
          ]),
          ...cards('estce', [
            ['Est-ce que tu viens dîner ?', 'Are you coming for dinner?'],
            ['Où est-ce que vous habitez ?', 'Where do you live?'],
            ['Est-ce qu’ils sont partis ?', 'Have they left?'],
          ]),
          ...cards('inversion', [
            ['Venez-vous dîner ?', 'Are you coming for dinner?'],
            ['Où habitez-vous ?', 'Where do you live?'],
            ['Sont-ils partis ?', 'Have they left?'],
            ['A-t-elle téléphoné ?', 'Did she phone?'],
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-questions',
      'gapfill',
      {
        title: 'Complete the question',
        description: 'Choose or type the missing word.',
        tags: ['grammar', 'fr-c12-questions'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          gap(
            'k1',
            '___ vous avez des frères et sœurs ?',
            'Est-ce que',
            ['Est-ce que', 'Est-ce qu’', 'Qu’est-ce que', 'Est-il que'],
            'Do you have brothers and sisters?',
            {
              lesson: 'fr-c12-questions',
              explanation: 'est-ce que is followed by the normal word order: subject, then verb.',
              why: {
                'Qu’est-ce que': 'Qu’est-ce que asks “what”. For a yes/no question use est-ce que.',
              },
            },
          ),
          gap(
            'k2',
            'Où est-ce que tes grands-parents ___ ?',
            'habitent',
            ['habitent', 'habitent-ils', 'habite', 'habiter'],
            'Where do your grandparents live?',
            {
              lesson: 'fr-c12-questions',
              why: { 'habitent-ils': 'After est-ce que there is no inversion: only “habitent”.' },
            },
          ),
          gap(
            'k3',
            'Tes parents ___-ils d’accord ?',
            'sont',
            ['sont', 'est', 'ont', 'étaient'],
            'Do your parents agree?',
            {
              lesson: 'fr-c12-questions',
              explanation:
                'With a noun subject keep the noun, then invert the verb and a matching pronoun.',
            },
          ),
          gap(
            'k4',
            'A___elle appelé sa mère ?',
            '-t-',
            ['-t-', '-', '-n-', '-s-'],
            'Did she call her mother?',
            {
              lesson: 'fr-c12-questions',
              explanation:
                'Between a verb ending in a vowel and il, elle or on you add -t-: a-t-elle.',
            },
          ),
          gap(
            'k5',
            'Est-ce que tu ___ à Noël ? (venir)',
            'viens',
            undefined,
            'Are you coming at Christmas?',
            {
              lesson: 'fr-c12-questions',
            },
          ),
          gap(
            'k6',
            '___-vous des nouvelles de votre frère ? (avoir)',
            'Avez',
            undefined,
            'Do you have news of your brother?',
            {
              lesson: 'fr-c12-questions',
              explanation:
                'Inversion: the verb comes first and is joined to the pronoun with a hyphen.',
            },
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the question',
        description: 'Put the words in order.',
        tags: ['grammar', 'fr-c12-questions'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'b1',
            translation: 'Do you have children? (formal)',
            words: ['Avez-vous', 'des', 'enfants ?'],
            lesson: 'fr-c12-questions',
          },
          {
            id: 'b2',
            translation: 'Where does your mother live? (everyday)',
            words: ['Où', 'est-ce', 'que', 'ta', 'mère', 'habite ?'],
            alsoAccept: ['Où habite ta mère ?'],
            lesson: 'fr-c12-questions',
          },
          {
            id: 'b3',
            translation: 'Are your parents coming? (formal)',
            words: ['Vos', 'parents', 'viennent-ils ?'],
            lesson: 'fr-c12-questions',
          },
          {
            id: 'b4',
            translation: 'Did she call her sister? (formal)',
            words: ['A-t-elle', 'appelé', 'sa', 'sœur ?'],
            lesson: 'fr-c12-questions',
          },
          {
            id: 'b5',
            translation: 'I could not tell you. (formal)',
            words: ['Je', 'ne', 'saurais', 'vous', 'le', 'dire.'],
            lesson: 'fr-c12-registres',
          },
          {
            id: 'b6',
            translation: 'Why did he leave? (everyday)',
            words: ['Pourquoi', 'est-ce', 'qu’il', 'est', 'parti ?'],
            alsoAccept: ['Pourquoi est-il parti ?'],
            lesson: 'fr-c12-questions',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the family words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'fr-c12-family'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          scrambled('p1', 'fratrie', 'siblings as a group', '👭'),
          scrambled('p2', 'filiation', 'parentage', '🧬'),
          typed('p3', 'la garde alternée', 'shared custody', '⚖️'),
          typed('p4', 'l’héritage', 'inheritance', '🏠'),
          dictated('p5', 'la famille recomposée', 'blended family'),
          dictated('p6', 'Je ne saurais vous le dire', 'I could not tell you'),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Family talk',
        description: 'Three conversations: a Sunday lunch, a school letter and a new family.',
        tags: ['communication', 'fr-c12-family'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        scenes: [
          scene(
            'lunch',
            'Sunday lunch',
            '🍲',
            'Your brother is sulking at the table after an argument.',
            npc('Maman', 'Alors, vous vous êtes disputés encore ?', 'So, you quarrelled again?'),
            you(
              'Oui, mais je vais me réconcilier avec lui après le dessert.',
              [
                'Oui, mais je vais me réconcilier de lui.',
                'The verb takes avec: se réconcilier avec quelqu’un.',
              ],
              [
                'Non, nous avons gâté la fratrie.',
                'Gâter means to spoil a child; it does not fit here.',
              ],
            ),
            npc(
              'Maman',
              'Bien. Vous êtes frères, ne l’oubliez pas.',
              'Good. You are brothers, don’t forget it.',
            ),
          ),
          scene(
            'letter',
            'A letter to school',
            '✉️',
            'You write to the head teacher about your daughter’s absence.',
            npc(
              'La directrice',
              'Pourquoi votre fille n’était-elle pas en classe lundi ?',
              'Why was your daughter not in class on Monday?',
            ),
            you(
              'Elle était souffrante. Je vous prie de bien vouloir excuser son absence.',
              ['Elle était crevée, désolé.', 'Too casual for a letter to a head teacher.'],
              ['Elle a séché, c’est tout.', 'That is slang and also says she skipped school.'],
            ),
            npc(
              'La directrice',
              'Très bien, merci de votre message.',
              'Very well, thank you for your message.',
            ),
          ),
          scene(
            'blended',
            'A blended family',
            '🧩',
            'A colleague asks about your family.',
            npc('Camille', 'Vous avez des enfants ?', 'Do you have children?'),
            you(
              'Oui, deux, et mon conjoint en a un autre : c’est une famille recomposée.',
              [
                'Oui, deux, et mon conjoint en a un autre : c’est une famille monoparentale.',
                'A single-parent family has one parent only.',
              ],
              [
                'Oui, deux, et mon conjoint est mon aîné.',
                'Aîné means the eldest child, not a partner.',
              ],
            ),
            npc(
              'Camille',
              'Et ça se passe bien avec la garde alternée ?',
              'And does the shared custody go well?',
            ),
            you(
              'Oui, les enfants ont deux foyers et s’y habituent bien.',
              ['Oui, les enfants ont deux nids de guêpes.', 'That is a different kind of nest!'],
              ['Non, ils bouder chaque jour.', 'The verb must be conjugated: ils boudent.'],
            ),
          ),
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Family blitz',
        description: 'True or false? Words, registers and questions.',
        tags: ['grammar', 'fr-c12-registres', 'fr-c12-questions'],
        difficulty: 3,
        estMinutes: 3,
      },
      {
        seconds: 60,
        statements: [
          tf('b1', '“Une bagnole” is a familiar word for a car.', true),
          tf(
            'b2',
            '“Trépasser” belongs to everyday speech.',
            false,
            'It is soutenu (formal, literary); the everyday word is “mourir”.',
          ),
          tf('b3', 'After “est-ce que” the verb stays in normal order.', true),
          tf('b4', '“Parle-t-elle ?” has a -t- to separate two vowels.', true),
          tf('b5', '“Où habitez-vous ?” is an inversion question.', true),
          tf(
            'b6',
            '“Viens-tu ?” is the usual way to ask a friend by SMS.',
            false,
            'Among friends the intonation question “Tu viens ?” is the norm.',
          ),
          tf(
            'b7',
            'A “famille monoparentale” has two parents.',
            false,
            'Mono- means one: a single parent.',
          ),
          tf('b8', '“L’aîné” is the first-born child.', true),
          tf('b9', '“Je l’ignore” is more formal than “Je ne sais pas”.', true),
          tf(
            'b10',
            '“Gâter un enfant” means to punish him.',
            false,
            'It means to spoil him with too many gifts or too much indulgence.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Words, registers and questions in one final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c12-family'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          q('c1', 'Le cadet, c’est …', 'le plus jeune des enfants', [
            'le premier-né',
            'le jumeau',
            'l’orphelin',
          ]),
          q(
            'c2',
            'Which question is the most formal?',
            'Avez-vous des nouvelles ?',
            [
              'Vous avez des nouvelles ?',
              'Est-ce que vous avez des nouvelles ?',
              'T’as des nouvelles ?',
            ],
            { lesson: 'fr-c12-questions' },
          ),
          q('c3', 'Tes parents ___-ils venus ?', 'sont', ['est', 'ont', 'viennent'], {
            lesson: 'fr-c12-questions',
          }),
          q(
            'c4',
            'Which sentence is familier?',
            'On bouffe où ce soir ?',
            ['Où souhaitez-vous dîner ?', 'On mange où ce soir ?', 'Où dînerons-nous ce soir ?'],
            { lesson: 'fr-c12-registres' },
          ),
          q('c5', '“Se réconcilier” means …', 'to make up after a quarrel', [
            'to quarrel',
            'to sulk',
            'to inherit',
          ]),
          q(
            'c6',
            'The register of “Je l’ignore” is …',
            'soutenu',
            ['familier', 'courant', 'populaire'],
            { lesson: 'fr-c12-registres' },
          ),
          q(
            'c7',
            'Complete: Où est-ce que vous ___ ?',
            'habitez',
            ['habitez-vous', 'habités', 'habiter'],
            { lesson: 'fr-c12-questions' },
          ),
          q('c8', 'Les enfants qui ont deux foyers vivent en …', 'garde alternée', [
            'adoption',
            'famille nombreuse',
            'tutelle parentale',
          ]),
        ],
      },
    ),
  ],
};
