import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-famille';

const vocab = vocabList(U, 'Family', [
  ['le père', 'father', '👨'],
  ['la mère', 'mother', '👩'],
  ['les parents', 'parents', '👪'],
  ['le frère', 'brother', '👦'],
  ['la sœur', 'sister', '👧'],
  ['les enfants', 'children', '🧒'],
  ['le fils', 'son', '👨‍👦'],
  ['la fille', 'daughter / girl', '👩‍👧'],
  ['le grand-père', 'grandfather', '👴'],
  ['la grand-mère', 'grandmother', '👵'],
  ['l’oncle', 'uncle', '🧔'],
  ['la tante', 'aunt', '💁'],
  ['le cousin', 'cousin (m.)', '🧑'],
  ['la cousine', 'cousin (f.)', '👱‍♀️'],
  ['le mari', 'husband', '🤵'],
  ['la femme', 'wife / woman', '👰'],
  ['le bébé', 'baby', '👶'],
  ['la famille', 'family', '👨‍👩‍👧‍👦'],
  ['l’ami', 'friend (m.)', '🧑‍🤝‍🧑'],
  ['l’amie', 'friend (f.)', '👭'],
  ['grand', 'tall / big (m.)', '📏'],
  ['grande', 'tall / big (f.)', '🦒'],
  ['petit', 'small (m.)', '🐭'],
  ['petite', 'small (f.)', '🐜'],
  ['gentil', 'kind (m.)', '😊'],
  ['gentille', 'kind (f.)', '🥰'],
  ['sportif', 'sporty (m.)', '🏃'],
  ['sportive', 'sporty (f.)', '🏃‍♀️'],
  ['blond', 'blond (m.)', '👱'],
  ['blonde', 'blonde (f.)', '👱‍♀️'],
  ['brun', 'dark-haired (m.)', '🧑‍🦱'],
  ['brune', 'dark-haired (f.)', '👩‍🦱'],
  ['sympa', 'nice (m. and f.)', '😄'],
  ['jeune', 'young (m. and f.)', '🌱'],
  ['mon', 'my (m.)', '👈'],
  ['ma', 'my (f.)', '🫵'],
  ['mes', 'my (plural)', '🫴'],
  ['ton', 'your (m.)', '👉'],
  ['ta', 'your (f.)', '☝️'],
  ['tes', 'your (plural)', '✌️'],
  ['son', 'his / her (m.)', '🧍'],
  ['sa', 'his / her (f.)', '🧍‍♀️'],
  ['ses', 'his / her (plural)', '🧍‍♂️'],
  ['Voici ma famille.', 'Here is my family.', '🖼️'],
  ['C’est mon frère.', 'This is my brother.', '🫶'],
  ['Tu as des frères et sœurs ?', 'Do you have brothers and sisters?', '❓'],
  ['J’ai un frère et une sœur.', 'I have a brother and a sister.', '🧑‍🤝‍🧑'],
  ['Je suis fils unique.', 'I am an only child (boy).', '🥇'],
  ['Je suis fille unique.', 'I am an only child (girl).', '🥈'],
  ['Comment est ta mère ?', 'What is your mother like?', '🔍'],
]);

const family = vocab.slice(0, 20);
const adjectives = vocab.slice(20, 34);
const phrases = vocab.slice(43);

const emojiFamily = byDe(
  vocab,
  'le père',
  'la mère',
  'le grand-père',
  'la grand-mère',
  'le bébé',
  'la famille',
  'le frère',
  'la sœur',
);

const meaning = (word: string) => byDe(vocab, word)[0]!.en;

/** A family pair, masculine on the left. */
const PAIRS = [
  ['le père', 'la mère'],
  ['le frère', 'la sœur'],
  ['le fils', 'la fille'],
  ['le grand-père', 'la grand-mère'],
  ['l’oncle', 'la tante'],
  ['le cousin', 'la cousine'],
] as const;

const POSSESSIVE_CARDS: [string, 'mon' | 'ma' | 'mes', string][] = [
  ['père', 'mon', 'father'],
  ['frère', 'mon', 'brother'],
  ['oncle', 'mon', 'uncle'],
  ['amie', 'mon', 'friend (f.), starts with a vowel'],
  ['mère', 'ma', 'mother'],
  ['sœur', 'ma', 'sister'],
  ['tante', 'ma', 'aunt'],
  ['famille', 'ma', 'family'],
  ['parents', 'mes', 'parents'],
  ['enfants', 'mes', 'children'],
  ['cousins', 'mes', 'cousins'],
  ['sœurs', 'mes', 'sisters'],
];

const CEST_CARDS: [string, 'cest' | 'est', string][] = [
  ['mon père', 'cest', 'my father'],
  ['ma sœur', 'cest', 'my sister'],
  ['Léa', 'cest', 'Léa'],
  ['une amie', 'cest', 'a friend (f.)'],
  ['grand', 'est', 'tall'],
  ['gentille', 'est', 'kind (f.)'],
  ['médecin', 'est', 'doctor'],
  ['sportif', 'est', 'sporty'],
];

export const famille: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Ma famille',
    subtitle: 'Introduce your family and say what people are like',
    emoji: '👨‍👩‍👧‍👦',
    goals: [
      'Name the people in a family',
      'Say my, your, his and her with mon, ma and mes',
      'Describe people with adjectives that agree',
    ],
    grammar: ['mon, ma, mes', 'Adjectives agree', 'C’est / il est', 'Plural nouns'],
    vocabFields: ['Family', 'Possessives', 'Phrases'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-family',
      'flashcards',
      {
        title: 'The family',
        description: 'Learn the family words, with le, la or l’.',
        tags: ['vocabulary', 'family'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(family),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'Who is this?',
        description: 'Look at the picture and pick the family member.',
        tags: ['vocabulary', 'family'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(emojiFamily, emojiFamily, 4),
    ),

    activity(
      U,
      'memory-pairs',
      'memory',
      {
        title: 'Man and woman',
        description: 'Match each family member with the matching woman or man.',
        tags: ['vocabulary', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      { pairs: PAIRS.map(([m, f], i) => ({ id: `p${i}`, a: m, b: f })) },
    ),

    activity(
      U,
      'listen-family',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the family word and pick its meaning.',
        tags: ['listening', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'le père',
          'la mère',
          'le frère',
          'la sœur',
          'le fils',
          'la fille',
          'la tante',
          'l’oncle',
        ),
        family,
      ),
    ),

    activity(
      U,
      'sort-possessives',
      'sortit',
      {
        title: 'mon, ma or mes?',
        description: 'Which word for “my” goes with each noun?',
        tags: ['grammar', 'fr-possessives', 'family'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-possessives',
      },
      {
        instruction: 'Which “my” goes with the noun?',
        buckets: [
          { id: 'mon', label: 'mon (m.)', emoji: '👈' },
          { id: 'ma', label: 'ma (f.)', emoji: '🫵' },
          { id: 'mes', label: 'mes (plural)', emoji: '🫴' },
        ],
        items: POSSESSIVE_CARDS.map(([text, bucket, translation], i) => ({
          id: `n${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-possessives',
      'gapfill',
      {
        title: 'My, your, his, her',
        description: 'Pick the possessive that agrees with the noun.',
        tags: ['grammar', 'fr-possessives', 'family'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-possessives',
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Voici ___ mère.',
            answer: 'ma',
            options: ['ma', 'mon', 'mes'],
            translation: 'Here is my mother.',
            explanation: 'Mère is feminine singular, so “my” is ma.',
          },
          {
            id: 'g2',
            text: 'Voici ___ parents.',
            answer: 'mes',
            options: ['mes', 'mon', 'ma'],
            translation: 'Here are my parents.',
            explanation: 'Parents is plural: mes.',
          },
          {
            id: 'g3',
            text: 'Léa, c’est ___ sœur ?',
            answer: 'ta',
            options: ['ta', 'ton', 'tes'],
            translation: 'Léa, is that your sister?',
            explanation: 'You say tu to Léa, and sœur is feminine: ta.',
          },
          {
            id: 'g4',
            text: 'Paul aime ___ grand-mère.',
            answer: 'sa',
            options: ['sa', 'son', 'ses'],
            translation: 'Paul loves his grandmother.',
            explanation: 'Grand-mère is feminine, so sa. The gender of the owner does not matter.',
          },
          {
            id: 'g5',
            text: 'Léa et ___ frère habitent à Lyon.',
            answer: 'son',
            options: ['son', 'sa', 'ses'],
            translation: 'Léa and her brother live in Lyon.',
            explanation: 'Frère is masculine: son, even though Léa is a woman.',
          },
          {
            id: 'g6',
            text: 'C’est ___ amie Sophie.',
            answer: 'mon',
            options: ['mon', 'ma', 'mes'],
            translation: 'This is my friend Sophie.',
            explanation: 'Before a vowel the feminine uses mon: mon amie.',
          },
          {
            id: 'g7',
            text: 'J’ai deux sœurs. ___ sœurs sont grandes.',
            answer: 'Mes',
            options: ['Mes', 'Ma', 'Mon'],
            translation: 'I have two sisters. My sisters are tall.',
            explanation: 'Sœurs is plural: mes.',
          },
          {
            id: 'g8',
            text: 'Léa aime ___ enfants.',
            answer: 'ses',
            options: ['ses', 'son', 'sa'],
            translation: 'Léa loves her children.',
            explanation: 'Enfants is plural: ses.',
          },
        ].map((i) => ({ ...i, lesson: 'fr-possessives' as const })),
      },
    ),

    activity(
      U,
      'flash-adjectives',
      'flashcards',
      {
        title: 'Describing people',
        description: 'Adjectives in their masculine and feminine form.',
        tags: ['vocabulary', 'describing-people'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(adjectives),
    ),

    activity(
      U,
      'gap-adjectives',
      'gapfill',
      {
        title: 'Make it agree',
        description: 'Choose the form of the adjective that fits the noun.',
        tags: ['grammar', 'fr-adjectives', 'describing-people'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-adjectives',
      },
      {
        items: [
          {
            id: 'a1',
            text: 'Mon père est ___.',
            answer: 'grand',
            options: ['grand', 'grande', 'grands'],
            translation: 'My father is tall.',
            explanation: 'A man: no ending to add.',
          },
          {
            id: 'a2',
            text: 'Ma mère est ___.',
            answer: 'grande',
            options: ['grande', 'grand', 'grandes'],
            translation: 'My mother is tall.',
            explanation: 'A woman: add -e.',
          },
          {
            id: 'a3',
            text: 'Mes frères sont ___.',
            answer: 'sportifs',
            options: ['sportifs', 'sportif', 'sportives'],
            translation: 'My brothers are sporty.',
            explanation: 'Masculine plural: add -s.',
          },
          {
            id: 'a4',
            text: 'Ma sœur est ___.',
            answer: 'sportive',
            options: ['sportive', 'sportif', 'sportives'],
            translation: 'My sister is sporty.',
            explanation: 'Feminine of sportif is sportive (-f becomes -ve).',
          },
          {
            id: 'a5',
            text: 'Léa est ___.',
            answer: 'gentille',
            options: ['gentille', 'gentil', 'gentilles'],
            translation: 'Léa is kind.',
            explanation: 'Feminine of gentil is gentille (-l is doubled).',
          },
          {
            id: 'a6',
            text: 'Mon oncle est ___.',
            answer: 'blond',
            options: ['blond', 'blonde', 'blonds'],
            translation: 'My uncle is blond.',
            explanation: 'A man: blond, with no -e.',
          },
          {
            id: 'a7',
            text: 'Ma tante est ___.',
            answer: 'brune',
            options: ['brune', 'brun', 'brunes'],
            translation: 'My aunt is dark-haired.',
            explanation: 'A woman: add -e.',
          },
          {
            id: 'a8',
            text: 'Mes sœurs sont ___.',
            answer: 'petites',
            options: ['petites', 'petite', 'petits', 'petit'],
            translation: 'My sisters are small.',
            explanation: 'Feminine plural: -e and -s.',
          },
        ].map((i) => ({ ...i, lesson: 'fr-adjectives' as const })),
      },
    ),

    activity(
      U,
      'sort-cest-il-est',
      'sortit',
      {
        title: 'C’est or il est?',
        description: 'Name a person with c’est, or describe them with il est or elle est.',
        tags: ['grammar', 'fr-cest-il-est', 'family'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-cest-il-est',
      },
      {
        instruction: 'Which beginning goes with the word?',
        buckets: [
          { id: 'cest', label: 'C’est …', emoji: '👉' },
          { id: 'est', label: 'Il est / Elle est …', emoji: '📏' },
        ],
        items: CEST_CARDS.map(([text, bucket, translation], i) => ({
          id: `c${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-plurals',
      'gapfill',
      {
        title: 'One or many?',
        description: 'Plural nouns: les, des and the noun itself.',
        tags: ['grammar', 'fr-plurals', 'family'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-plurals',
      },
      {
        items: [
          {
            id: 'p1',
            text: 'Voici ___ frères de Léa.',
            answer: 'les',
            options: ['les', 'le', 'la', 'l’'],
            translation: 'Here are Léa’s brothers.',
            explanation: 'Plural: les.',
          },
          {
            id: 'p2',
            text: 'J’ai ___ cousins à Paris.',
            answer: 'des',
            options: ['des', 'un', 'une'],
            translation: 'I have cousins in Paris.',
            explanation: 'Plural of un and une is des.',
          },
          {
            id: 'p3',
            text: 'Elle a deux ___.',
            answer: 'filles',
            options: ['filles', 'fille', 'sœur'],
            translation: 'She has two daughters.',
            explanation: 'After deux the noun takes the plural -s (silent when you speak).',
          },
          {
            id: 'p4',
            text: '___ parents de Tom sont gentils.',
            answer: 'Les',
            options: ['Les', 'Le', 'La', 'L’'],
            translation: 'Tom’s parents are kind.',
            explanation: 'Parents is plural: les.',
          },
          {
            id: 'p5',
            text: 'Ils ont trois ___.',
            answer: 'enfants',
            options: ['enfants', 'enfant', 'enfante'],
            translation: 'They have three children.',
            explanation: 'Trois asks for the plural: enfants.',
          },
        ].map((i) => ({ ...i, lesson: 'fr-plurals' as const })),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'family', 'describing-people'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'This is my brother.',
            words: ['C’est', 'mon', 'frère.'],
            extra: ['ma'],
            lesson: 'fr-cest-il-est',
          },
          {
            id: 's2',
            translation: 'My sister is tall.',
            words: ['Ma', 'sœur', 'est', 'grande.'],
            extra: ['grand'],
            lesson: 'fr-adjectives',
          },
          {
            id: 's3',
            translation: 'I have two brothers.',
            words: ['J’ai', 'deux', 'frères.'],
            lesson: 'fr-plurals',
          },
          {
            id: 's4',
            translation: 'Do you have brothers and sisters?',
            words: ['Tu', 'as', 'des', 'frères', 'et', 'sœurs ?'],
            lesson: 'fr-questions',
          },
          {
            id: 's5',
            translation: 'Her grandmother is young.',
            words: ['Sa', 'grand-mère', 'est', 'jeune.'],
            extra: ['Son'],
            lesson: 'fr-possessives',
          },
          {
            id: 's6',
            translation: 'My parents are kind.',
            words: ['Mes', 'parents', 'sont', 'gentils.'],
            extra: ['Mon'],
            lesson: 'fr-possessives',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-family',
      'spell',
      {
        title: 'Spell the family',
        description: 'Unscramble and type family words. Accents are optional here.',
        tags: ['spelling', 'family'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-famille',
            mode: 'unscramble',
            answer: 'famille',
            hint: 'family',
            emoji: '👨‍👩‍👧‍👦',
            speak: 'la famille',
          },
          {
            id: 'sp-cousine',
            mode: 'unscramble',
            answer: 'cousine',
            hint: meaning('la cousine'),
            emoji: '👱‍♀️',
            speak: 'la cousine',
          },
          {
            id: 'sp-soeur',
            mode: 'type',
            answer: 'sœur',
            hint: 'sister',
            emoji: '👧',
            speak: 'la sœur',
          },
          {
            id: 'sp-grand-mere',
            mode: 'type',
            answer: 'grand-mère',
            hint: 'grandmother',
            emoji: '👵',
            speak: 'la grand-mère',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Talking about family',
        description: 'Phrases for showing photos and describing your family.',
        tags: ['vocabulary', 'family'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(phrases),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Family talk',
        description: 'A photo, brothers and sisters, and describing a parent.',
        tags: ['communication', 'family'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'photo',
            title: 'A family photo',
            emoji: '🖼️',
            setting: 'Léa shows you a photo of her family. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Regarde ! Voici ma famille.',
                translation: 'Look! Here is my family.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'C’est ton père ?', correct: true },
                  {
                    text: 'C’est ta père ?',
                    correct: false,
                    feedback: 'Père is masculine: ton père.',
                  },
                  {
                    text: 'C’est tes père ?',
                    correct: false,
                    feedback: 'Tes goes with a plural noun. Père is singular: ton père.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Oui, c’est mon père. Et là, c’est ma mère.',
                translation: 'Yes, this is my father. And there, that is my mother.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Elle est jeune !', correct: true },
                  {
                    text: 'Il est jeune !',
                    correct: false,
                    feedback: 'You speak about the mother, so say elle.',
                  },
                  {
                    text: 'C’est jeune !',
                    correct: false,
                    feedback: 'To describe someone, say il est or elle est, not c’est.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Oui, elle a trente-neuf ans.',
                translation: 'Yes, she is 39.',
              },
            ],
          },
          {
            id: 'siblings',
            title: 'Brothers and sisters',
            emoji: '🧑‍🤝‍🧑',
            setting: 'You chat with Tom at the start of the class.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Tu as des frères et sœurs ?',
                translation: 'Do you have brothers and sisters?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, j’ai un frère et une sœur.', correct: true },
                  {
                    text: 'Oui, j’ai un frères et une sœur.',
                    correct: false,
                    feedback: 'After un the noun is singular: un frère.',
                  },
                  {
                    text: 'Oui, je suis un frère et une sœur.',
                    correct: false,
                    feedback: 'To say what you have, use avoir: j’ai.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Moi, je suis fils unique. Ton frère, il a quel âge ?',
                translation: 'I am an only child. How old is your brother?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il a douze ans.', correct: true },
                  {
                    text: 'Il est douze ans.',
                    correct: false,
                    feedback: 'In French you have an age: il a douze ans.',
                  },
                  {
                    text: 'Elle a douze ans.',
                    correct: false,
                    feedback: 'You speak about your brother, so say il.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Il est jeune !',
                translation: 'He is young!',
              },
            ],
          },
          {
            id: 'mother',
            title: 'Describe your parents',
            emoji: '👩',
            setting: 'Madame Martin, your host, asks about your family. Use vous with her.',
            turns: [
              {
                kind: 'npc',
                who: 'Mme Martin',
                text: 'Comment est votre mère ?',
                translation: 'What is your mother like?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Elle est grande et blonde.', correct: true },
                  {
                    text: 'Il est grande et blonde.',
                    correct: false,
                    feedback: 'Your mother is a woman: elle est.',
                  },
                  {
                    text: 'Elle est grand et blond.',
                    correct: false,
                    feedback: 'For a woman the adjectives take -e: grande et blonde.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Mme Martin',
                text: 'Et votre père ?',
                translation: 'And your father?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il est petit et brun.', correct: true },
                  {
                    text: 'Il est petite et brune.',
                    correct: false,
                    feedback: 'Your father is a man: petit et brun, without -e.',
                  },
                  {
                    text: 'C’est petit et brun.',
                    correct: false,
                    feedback: 'To describe someone, say il est, not c’est.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Mme Martin',
                text: 'Ils sont gentils, je pense !',
                translation: 'They are kind, I think!',
              },
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Family blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'family', 'fr-possessives'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Ma mère” is correct, “mon mère” is not.', isTrue: true },
          { id: 'b2', text: '“Mes” goes with plural nouns: mes parents.', isTrue: true },
          { id: 'b3', text: '“Mon amie” is correct for a female friend.', isTrue: true },
          { id: 'b4', text: '“Son frère” can mean his brother or her brother.', isTrue: true },
          {
            id: 'b5',
            text: '“Elle est grand” is correct.',
            isTrue: false,
            explanation: 'Elle est grande: the feminine adds -e.',
          },
          {
            id: 'b6',
            text: '“Mes sœurs sont gentils” is correct.',
            isTrue: false,
            explanation: 'Sœurs is feminine plural: gentilles.',
          },
          { id: 'b7', text: '“C’est mon frère” introduces a person.', isTrue: true },
          { id: 'b8', text: '“Un frère” becomes “des frères” in the plural.', isTrue: true },
          {
            id: 'b9',
            text: '“Sympa” has a separate form for women.',
            isTrue: false,
            explanation: 'Sympa, like jeune, has one form for men and women.',
          },
          { id: 'b10', text: '“La cousine” is a female cousin.', isTrue: true },
          { id: 'b11', text: '“La femme” can mean wife.', isTrue: true },
          { id: 'b12', text: '“Je suis fille unique” is said by a girl.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'family'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'How do you say “my sister”?',
            options: ['ma sœur', 'mon sœur', 'mes sœur', 'la sœur de'],
            answer: 'ma sœur',
            lesson: 'fr-possessives',
          },
          {
            id: 'c2',
            prompt: 'Complete (my): “Voici ___ parents.”',
            options: ['mes', 'mon', 'ma', 'sa'],
            answer: 'mes',
            lesson: 'fr-possessives',
          },
          {
            id: 'c3',
            prompt: 'Complete (her): “Léa et ___ mère.”',
            options: ['sa', 'son', 'ses', 'mon'],
            answer: 'sa',
            lesson: 'fr-possessives',
          },
          {
            id: 'c4',
            prompt: 'Complete: “Ma tante est ___.”',
            options: ['gentille', 'gentil', 'gentils', 'gentilles'],
            answer: 'gentille',
            lesson: 'fr-adjectives',
          },
          {
            id: 'c5',
            prompt: 'Which sentence introduces a person?',
            options: ['C’est mon oncle.', 'Il est mon oncle.', 'Elle est oncle.', 'Ce est oncle.'],
            answer: 'C’est mon oncle.',
            lesson: 'fr-cest-il-est',
          },
          {
            id: 'c6',
            prompt: 'What is the plural of “la sœur”?',
            options: ['les sœurs', 'le sœurs', 'les sœur', 'la sœurs'],
            answer: 'les sœurs',
            lesson: 'fr-plurals',
          },
          {
            id: 'c7',
            prompt: '“Je suis fils unique” means …',
            options: [
              'I am an only child (boy)',
              'I have a son',
              'I have only one father',
              'I am the son of a brother',
            ],
            answer: 'I am an only child (boy)',
          },
          {
            id: 'c8',
            prompt: 'Which adjective has the same form for men and women?',
            options: ['sympa', 'grand', 'petit', 'blond'],
            answer: 'sympa',
            lesson: 'fr-adjectives',
          },
        ],
      },
    ),
  ],
};
