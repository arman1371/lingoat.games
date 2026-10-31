import { activity, flashcards, vocabList } from '../builders';
import { digitsToFrench, LETTER_NAMES_FR, numberToFrench, spellOutFr } from '@/lib/french/numbers';
import { unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-1-nombres';

const NUMBERS = [...Array.from({ length: 21 }, (_, i) => i), 30, 40, 50, 60, 70, 80, 90, 100, 1000];
const numberVocab = vocabList(
  U,
  'Numbers',
  NUMBERS.map((n) => [numberToFrench(n), String(n)] as const),
);
const num = (n: number) => numberVocab.find((v) => v.en === String(n))!;

const words = vocabList(U, 'Age, phone & address', [
  ['Tu as quel âge ?', 'How old are you? (informal)', '🎂'],
  ['Quel âge avez-vous ?', 'How old are you? (formal)', '🎩'],
  ['J’ai … ans', 'I am … years old', '🎈'],
  ['Quel est ton numéro de téléphone ?', 'What is your phone number?', '📞'],
  ['le numéro de téléphone', 'phone number', '☎️'],
  ['le portable', 'mobile phone', '📱'],
  ['l’adresse', 'address', '📮'],
  ['la rue', 'street', '🛣️'],
  ['le code postal', 'postcode', '✉️'],
  ['l’adresse e-mail', 'email address', '📧'],
  ['la lettre', 'letter', '🔠'],
  ['épeler', 'to spell', '🔤'],
  ['Comment ça s’écrit ?', 'How do you spell that?', '✍️'],
  ['Pardon ?', 'Pardon?', '👂'],
  ['Encore une fois, s’il vous plaît.', 'Once more, please.', '🔁'],
  ['Il y a …', 'There is / there are …', '☝️'],
  ['plus', 'plus', '➕'],
  ['moins', 'minus', '➖'],
  ['font', 'makes / equals (in sums)', '🟰'],
]);
const vocab = [...numberVocab, ...words];

const numCard = (n: number) => ({
  id: num(n).id,
  front: String(n),
  back: numberToFrench(n),
  speak: numberToFrench(n),
});

/** Question "digits → word" with hand-picked look-alike distractors. */
const digitQuestion = (n: number, wrong: number[], explanation?: string) => ({
  id: `dq-${n}`,
  prompt: String(n),
  speak: numberToFrench(n),
  options: [n, ...wrong].map(numberToFrench),
  answer: numberToFrench(n),
  ...(explanation ? { explanation } : {}),
});
const listenQuestion = (n: number, wrong: number[]) => ({
  id: `ln-${n}`,
  speak: numberToFrench(n),
  transcript: `${numberToFrench(n)} = ${n}`,
  options: [n, ...wrong].map(String),
  answer: String(n),
});

const phone = (digits: string) => ({
  id: `ph-${digits}`,
  mode: 'dictation' as const,
  answer: digits,
  numeric: true,
  hint: 'Type the phone number you hear (digits only).',
  speak: digitsToFrench(digits),
});
const spelledName = (name: string) => ({
  id: `nm-${name.toLowerCase()}`,
  mode: 'dictation' as const,
  answer: name,
  hint: 'Type the name that is spelled out.',
  speak: spellOutFr(name),
});

const letterQuestion = (letter: string, wrong: string[]) => ({
  id: `lt-${letter}`,
  prompt: `How is “${letter.toUpperCase()}” called in French?`,
  options: [LETTER_NAMES_FR[letter]!, ...wrong],
  answer: LETTER_NAMES_FR[letter]!,
  speak: LETTER_NAMES_FR[letter]!,
});

const sentenceTrue = (n: number) => ({
  id: `t-${n}`,
  text: `${n} = ${numberToFrench(n)}`,
  isTrue: true,
});
const sentenceFalse = (n: number, other: number) => ({
  id: `f-${n}`,
  text: `${n} = ${numberToFrench(other)}`,
  isTrue: false,
  explanation: `${n} = ${numberToFrench(n)}`,
});

export const nombres: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Les nombres',
    subtitle: 'Count, give your age and phone number, and spell a name',
    emoji: '🔢',
    goals: [
      'Count from 0 to 100 and understand 70 to 99',
      'Say how old you are and give your phone number',
      'Spell words and names with the French alphabet',
    ],
    grammar: ['Numbers 0–1000', 'avoir … ans', 'il y a'],
    vocabFields: ['Numbers', 'Age, phone & address', 'Alphabet'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-numbers',
      'flashcards',
      {
        title: 'Numbers 0–20',
        description: 'Learn the numbers from zéro to vingt.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 1,
        estMinutes: 3,
      },
      { cards: Array.from({ length: 21 }, (_, i) => numCard(i)) },
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Age, phone and spelling phrases',
        description: 'The phrases you need to give your age and number.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(words),
    ),

    activity(
      U,
      'quiz-digits',
      'quiz',
      {
        title: 'Digits to words',
        description: 'Pick the French word for the number.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 1,
        estMinutes: 3,
      },
      {
        questions: [
          digitQuestion(3, [13, 2, 8]),
          digitQuestion(6, [16, 5, 7]),
          digitQuestion(9, [19, 8, 4]),
          digitQuestion(12, [2, 20, 11]),
          digitQuestion(14, [4, 40, 15]),
          digitQuestion(16, [6, 17, 15]),
          digitQuestion(20, [2, 12, 30]),
        ],
      },
    ),

    activity(
      U,
      'memory-tens',
      'memory',
      {
        title: 'The tens',
        description: 'Match 20 to 90 with their French words.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        pairs: [20, 30, 40, 50, 60, 70, 80, 90].map((n) => ({
          id: `m${n}`,
          a: String(n),
          b: numberToFrench(n),
        })),
      },
    ),

    activity(
      U,
      'sort-seventies',
      'sortit',
      {
        title: '70s, 80s or 90s?',
        description: 'France counts 70 as “sixty-ten” and 80 as “four-twenty”. Sort the numbers.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Which group does the number belong to?',
        buckets: [
          { id: '70', label: '70–79' },
          { id: '80', label: '80–89' },
          { id: '90', label: '90–99' },
        ],
        items: [71, 72, 77, 81, 83, 87, 92, 95, 99].map((n) => ({
          id: `s${n}`,
          text: numberToFrench(n),
          bucket: n >= 90 ? '90' : n >= 80 ? '80' : '70',
          speak: numberToFrench(n),
          translation: String(n),
        })),
      },
    ),

    activity(
      U,
      'listen-numbers',
      'listen',
      {
        title: 'Which number?',
        description: 'Listen and pick the number you hear.',
        tags: ['listening', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          listenQuestion(4, [14, 40, 24]),
          listenQuestion(13, [3, 30, 12]),
          listenQuestion(15, [5, 50, 16]),
          listenQuestion(18, [8, 80, 17]),
          listenQuestion(50, [15, 5, 40]),
          listenQuestion(60, [16, 6, 70]),
          listenQuestion(80, [18, 8, 90]),
        ],
      },
    ),

    activity(
      U,
      'spell-numbers',
      'spell',
      {
        title: 'Write the numbers',
        description:
          'Unscramble and type the numbers. A missing hyphen or accent is only “almost”.',
        tags: ['spelling', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          ...[13, 50].map((n) => ({
            id: `sp-${n}`,
            mode: 'unscramble' as const,
            answer: numberToFrench(n),
            hint: String(n),
            speak: numberToFrench(n),
          })),
          ...[17, 80, 60].map((n) => ({
            id: `sp-${n}`,
            mode: 'type' as const,
            answer: numberToFrench(n),
            hint: String(n),
            speak: numberToFrench(n),
          })),
        ],
      },
    ),

    activity(
      U,
      'gap-math',
      'gapfill',
      {
        title: 'Little sums',
        description: 'Complete the sums: plus, moins and font.',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'm1',
            text: 'Deux plus trois ___ cinq.',
            answer: 'font',
            options: ['font', 'fait', 'est', 'moins'],
            translation: 'Two plus three makes five.',
            explanation: 'In a sum the French say “font”: deux plus trois font cinq.',
          },
          {
            id: 'm2',
            text: 'Dix moins ___ font six.',
            answer: 'quatre',
            options: ['quatre', 'quatorze', 'quarante', 'cinq'],
            translation: 'Ten minus four makes six.',
          },
          {
            id: 'm3',
            text: 'Six ___ six font douze.',
            answer: 'plus',
            options: ['plus', 'moins', 'et', 'font'],
            translation: 'Six plus six makes twelve.',
          },
          {
            id: 'm4',
            text: 'Vingt moins cinq font ___.',
            answer: 'quinze',
            options: ['quinze', 'quatorze', 'cinquante', 'seize'],
            translation: 'Twenty minus five makes fifteen.',
          },
          {
            id: 'm5',
            text: 'Trente plus ___ font quarante.',
            answer: 'dix',
            options: ['dix', 'vingt', 'neuf', 'onze'],
            translation: 'Thirty plus ten makes forty.',
          },
        ],
      },
    ),

    activity(
      U,
      'dictation-phone',
      'spell',
      {
        title: 'Phone numbers',
        description: 'The French read a phone number in pairs. Type the digits you hear.',
        tags: ['listening', 'spelling', 'numbers'],
        difficulty: 3,
        estMinutes: 3,
      },
      { items: [phone('0612345678'), phone('0145678901'), phone('0782103456')] },
    ),

    activity(
      U,
      'alphabet',
      'quiz',
      {
        title: 'The French alphabet',
        description: 'Learn how the letters are called.',
        tags: ['vocabulary', 'alphabet'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        questions: [
          letterQuestion('b', ['pé', 'dé', 'vé']),
          letterQuestion('g', ['ji', 'cé', 'ka']),
          letterQuestion('j', ['gé', 'zède', 'ache']),
          letterQuestion('h', ['ka', 'effe', 'i']),
          letterQuestion('w', ['vé', 'ku', 'iks']),
          letterQuestion('y', ['i', 'zède', 'iks']),
          letterQuestion('e', ['i', 'a', 'o']),
          letterQuestion('i', ['e', 'ji', 'u']),
        ],
      },
    ),

    activity(
      U,
      'dictation-names',
      'spell',
      {
        title: 'Spell the name',
        description: 'The name is spelled out letter by letter. Type it.',
        tags: ['listening', 'spelling', 'alphabet'],
        difficulty: 3,
        estMinutes: 3,
      },
      { items: [spelledName('Marc'), spelledName('Dupont'), spelledName('Léa')] },
    ),

    activity(
      U,
      'gap-age',
      'gapfill',
      {
        title: 'How old are you?',
        description: 'In French you have an age: avoir, not être.',
        tags: ['grammar', 'fr-etre-avoir'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'a1',
            text: 'J’___ vingt ans.',
            answer: 'ai',
            options: ['ai', 'suis', 'as', 'a'],
            translation: 'I am twenty.',
            explanation: 'You do not “are” your age, you “have” it: j’ai vingt ans.',
          },
          {
            id: 'a2',
            text: 'Tu ___ quel âge ?',
            answer: 'as',
            options: ['as', 'es', 'a', 'ai'],
            translation: 'How old are you?',
          },
          {
            id: 'a3',
            text: 'Elle ___ dix-huit ans.',
            answer: 'a',
            options: ['a', 'est', 'as', 'ont'],
            translation: 'She is eighteen.',
          },
          {
            id: 'a4',
            text: 'Nous ___ vingt-cinq ans.',
            answer: 'avons',
            options: ['avons', 'sommes', 'avez', 'ont'],
            translation: 'We are twenty-five.',
          },
          {
            id: 'a5',
            text: 'Ils ___ quarante et un ans.',
            answer: 'ont',
            options: ['ont', 'sont', 'a', 'avons'],
            translation: 'They are forty-one.',
          },
          {
            id: 'a6',
            text: 'Il y ___ vingt étudiants.',
            answer: 'a',
            options: ['a', 'ai', 'as', 'est'],
            translation: 'There are twenty students.',
            explanation: '“Il y a” means “there is / there are”. It never changes.',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Age, phone number, spelling and sums.',
        tags: ['grammar', 'numbers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I am twenty-two.',
            words: ['J’ai', 'vingt-deux', 'ans.'],
            extra: ['suis'],
            lesson: 'fr-etre-avoir',
          },
          {
            id: 's2',
            translation: 'How old are you? (informal)',
            words: ['Tu', 'as', 'quel', 'âge ?'],
            lesson: 'fr-questions',
          },
          {
            id: 's3',
            translation: 'How do you spell that?',
            words: ['Comment', 'ça', 's’écrit ?'],
            lesson: 'fr-questions',
          },
          {
            id: 's4',
            translation: 'There are twenty students.',
            words: ['Il', 'y', 'a', 'vingt', 'étudiants.'],
            lesson: 'fr-etre-avoir',
          },
          {
            id: 's5',
            translation: 'What is your phone number? (informal)',
            words: ['Quel', 'est', 'ton', 'numéro', 'de', 'téléphone ?'],
            lesson: 'fr-questions',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Age, number, spelling',
        description: 'Three short chats: your age, your phone number and your name.',
        tags: ['communication', 'numbers'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'age',
            title: 'How old are you?',
            emoji: '🎂',
            setting: 'Léa is your age. You are twenty-two.',
            turns: [
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Tu as quel âge ?',
                translation: 'How old are you?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'J’ai vingt-deux ans.', correct: true },
                  {
                    text: 'Je suis vingt-deux ans.',
                    correct: false,
                    feedback: 'In French you have an age: “j’ai … ans”, not “je suis”.',
                  },
                  {
                    text: 'Tu as vingt-deux ans.',
                    correct: false,
                    feedback: 'You talk about yourself, so the verb is “j’ai”.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Moi, j’ai vingt et un ans.',
                translation: 'I am twenty-one.',
              },
            ],
          },
          {
            id: 'phone',
            title: 'Your phone number',
            emoji: '📞',
            setting: 'The receptionist asks for your number: 06 12 34 56 78.',
            turns: [
              {
                kind: 'npc',
                who: 'Réception',
                text: 'Quel est votre numéro de téléphone ?',
                translation: 'What is your phone number?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.',
                    correct: true,
                  },
                  {
                    text: 'Zéro six, douze, trente-quatre, cinquante-six, quatre-vingt-dix-huit.',
                    correct: false,
                    feedback: '78 is soixante-dix-huit. Quatre-vingt-dix-huit is 98.',
                  },
                  {
                    text: 'Zéro six, douze, trente-quatre, soixante-cinq, soixante-dix-huit.',
                    correct: false,
                    feedback: '56 is cinquante-six. Soixante-cinq is 65.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Réception',
                text: 'Merci. Au revoir !',
                translation: 'Thank you. Goodbye!',
              },
            ],
          },
          {
            id: 'spelling',
            title: 'Spell your name',
            emoji: '🔤',
            setting: 'Your name is Marc.',
            turns: [
              {
                kind: 'npc',
                who: 'Marie',
                text: 'Comment ça s’écrit ?',
                translation: 'How do you spell that?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'M, A, R, C.', correct: true },
                  {
                    text: 'M, A, R, K.',
                    correct: false,
                    feedback: 'Marc ends with C (cé), not K (ka).',
                  },
                  {
                    text: 'Marc.',
                    correct: false,
                    feedback: 'The question asks you to spell the name letter by letter.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Marie',
                text: 'Merci, Marc !',
                translation: 'Thank you, Marc!',
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
        title: 'Numbers blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'numbers'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          sentenceTrue(80),
          sentenceFalse(70, 60),
          sentenceTrue(71),
          sentenceTrue(99),
          sentenceFalse(40, 50),
          sentenceTrue(21),
          sentenceTrue(17),
          sentenceFalse(90, 80),
          {
            id: 'b9',
            text: 'In France you say “septante” for 70.',
            isTrue: false,
            explanation: 'France says soixante-dix. Belgium and Switzerland say septante.',
          },
          {
            id: 'b10',
            text: 'You say “je suis vingt ans” to give your age.',
            isTrue: false,
            explanation: 'Use avoir: “j’ai vingt ans”.',
          },
          {
            id: 'b11',
            text: 'French phone numbers are read in pairs of digits.',
            isTrue: true,
          },
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
        tags: ['vocabulary', 'grammar', 'numbers'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'How do you say 72?',
            options: ['soixante-douze', 'soixante-deux', 'soixante-dix-deux', 'quatre-vingt-deux'],
            answer: 'soixante-douze',
          },
          {
            id: 'c2',
            prompt: 'What number is “quatre-vingt-dix” ?',
            options: ['90', '80', '94', '19'],
            answer: '90',
            explanation: '4 × 20 + 10 = 90.',
          },
          {
            id: 'c3',
            prompt: 'Someone asks “Tu as quel âge ?” You are 20.',
            options: [
              'J’ai vingt ans.',
              'Je suis vingt ans.',
              'Tu as vingt ans.',
              'Il a vingt ans.',
            ],
            answer: 'J’ai vingt ans.',
            lesson: 'fr-etre-avoir',
          },
          {
            id: 'c4',
            prompt: 'Which number is 60?',
            options: ['soixante', 'cinquante', 'soixante-dix', 'seize'],
            answer: 'soixante',
          },
          {
            id: 'c5',
            prompt: 'How is the letter “K” called in French?',
            options: ['ka', 'ku', 'cé', 'gé'],
            answer: 'ka',
          },
          {
            id: 'c6',
            prompt: 'Complete: “Deux plus trois ___ cinq.”',
            options: ['font', 'fait', 'est', 'sont'],
            answer: 'font',
          },
          {
            id: 'c7',
            prompt: 'How do you ask someone to spell a word?',
            options: [
              'Comment ça s’écrit ?',
              'Comment ça va ?',
              'Quel âge as-tu ?',
              'Qui est-ce ?',
            ],
            answer: 'Comment ça s’écrit ?',
          },
          {
            id: 'c8',
            prompt: '“Il y a vingt étudiants” means …',
            options: [
              'There are twenty students.',
              'He has twenty students.',
              'He is twenty.',
              'Twenty students are leaving.',
            ],
            answer: 'There are twenty students.',
            lesson: 'fr-etre-avoir',
          },
        ],
      },
    ),
  ],
};
