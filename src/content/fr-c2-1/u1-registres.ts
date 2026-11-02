import { activity, byDe, flashcards, listen, quizDeEn, spell, unit, vocabList } from '../builders';
import type { UnitContent } from './types';

const U = 'fr-c2-1-registres';

const familiar = vocabList(U, 'Familiar words', [
  ['boulot', 'job, work (informal)', '💼'],
  ['bagnole', 'car (informal)', '🚗'],
  ['fric', 'money, cash (informal)', '💶'],
  ['bouffer', 'to eat (informal)', '🍽️'],
  ['gosse', 'kid (informal)', '🧒'],
  ['baraque', 'house, place (informal)', '🏚️'],
  ['crevé', 'exhausted (informal)', '😵'],
  ['avoir la trouille', 'to be scared stiff (informal)', '😱'],
  ['piquer', 'to nick, to pinch (informal)', '🫳'],
  ['se marrer', 'to have a laugh (informal)', '😄'],
  ['se barrer', 'to clear off (informal)', '🏃'],
  ['clamser', 'to kick the bucket (very informal)', '💀'],
]);

const formal = vocabList(U, 'Formal words', [
  ['labeur', 'toil, labour (literary)', '⚒️'],
  ['automobile', 'motor car (formal)', '🚘'],
  ['deniers', 'funds, public money (formal)', '🏛️'],
  ['se sustenter', 'to take some food (formal, often humorous)', '🥘'],
  ['progéniture', 'offspring (formal)', '👶'],
  ['demeure', 'residence, dwelling (formal)', '🏰'],
  ['harassé', 'worn out (formal)', '😓'],
  ['craindre', 'to fear (formal)', '😨'],
  ['dérober', 'to steal (formal)', '🕵️'],
  ['s’esclaffer', 'to burst out laughing (formal)', '🤣'],
  ['se retirer', 'to withdraw, to leave (formal)', '🚪'],
  ['décéder', 'to pass away (formal)', '🕯️'],
]);

const nuance = vocabList(U, 'Verbs with a shade of meaning', [
  ['scruter', 'to scan closely', '🔍'],
  ['épier', 'to watch in secret', '🕵️'],
  ['toiser', 'to look up and down with contempt', '🧐'],
  ['contempler', 'to gaze at, to take in', '🌅'],
  ['entrevoir', 'to catch a glimpse of', '👀'],
  ['chuchoter', 'to whisper', '🤫'],
  ['marmonner', 'to mutter', '😒'],
  ['bredouiller', 'to stammer out', '😰'],
  ['vociférer', 'to shout angrily', '🤬'],
  ['rétorquer', 'to retort, to answer back', '↩️'],
  ['flâner', 'to stroll for pleasure', '🚶'],
  ['arpenter', 'to pace up and down', '📐'],
  ['errer', 'to roam without a goal', '🌫️'],
  ['se faufiler', 'to slip through', '🐍'],
]);

const derived = vocabList(U, 'Prefixes and suffixes', [
  ['inlassable', 'tireless', '🔁'],
  ['irréprochable', 'beyond reproach', '😇'],
  ['insaisissable', 'elusive', '🫥'],
  ['méconnaissable', 'unrecognisable', '🎭'],
  ['inavouable', 'too shameful to admit', '🤐'],
  ['indélébile', 'indelible', '🖋️'],
  ['déconseiller', 'to advise against', '🚫'],
  ['surestimer', 'to overestimate', '📈'],
  ['sous-estimer', 'to underestimate', '📉'],
  ['démystifier', 'to take the mystery out of', '🪄'],
]);

const vocab = [...familiar, ...formal, ...nuance, ...derived];

const seeing = byDe(nuance, 'scruter', 'épier', 'toiser', 'contempler', 'entrevoir');
const speaking = byDe(nuance, 'chuchoter', 'marmonner', 'bredouiller', 'vociférer', 'rétorquer');
const walking = byDe(nuance, 'flâner', 'arpenter', 'errer', 'se faufiler');
const verbsOfSightAndSpeech = [...seeing, ...speaking];

export const registres: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 1,
    title: 'Registres et nuances',
    subtitle: 'Choose the word that fits the situation, from slang to literary French',
    emoji: '🎚️',
    goals: [
      'Tell familiar, standard and formal words apart',
      'Pick the verb with the right shade of meaning',
      'Read the meaning of a word from its prefix or suffix',
    ],
    grammar: ['Prefixes and suffixes'],
    vocabFields: [
      'Familiar words',
      'Formal words',
      'Verbs with a shade of meaning',
      'Prefixes and suffixes',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-familiar',
      'flashcards',
      {
        title: 'Familiar words',
        description: 'Meet the words you hear in the street and among friends.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(familiar),
    ),

    activity(
      U,
      'flash-formal',
      'flashcards',
      {
        title: 'Formal and literary words',
        description: 'Meet the words you read in letters, speeches and novels.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(formal),
    ),

    activity(
      U,
      'flash-nuance',
      'flashcards',
      {
        title: 'Verbs with a shade of meaning',
        description: 'Looking, speaking and walking: each verb says more than the plain one.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(nuance),
    ),

    activity(
      U,
      'quiz-nuance',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match each verb of looking or speaking with its shade of meaning.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(verbsOfSightAndSpeech, verbsOfSightAndSpeech, 4),
    ),

    activity(
      U,
      'sort-register',
      'sortit',
      {
        title: 'Familiar, standard or formal?',
        description: 'Sort the words by the register they belong to.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Which register is this word?',
        buckets: [
          { id: 'familiar', label: 'Familiar', emoji: '🗣️' },
          { id: 'standard', label: 'Standard', emoji: '💬' },
          { id: 'formal', label: 'Formal', emoji: '🎩' },
        ],
        items: [
          ['boulot', 'familiar', 'job (informal)'],
          ['bagnole', 'familiar', 'car (informal)'],
          ['fric', 'familiar', 'money (informal)'],
          ['bouffer', 'familiar', 'to eat (informal)'],
          ['crevé', 'familiar', 'exhausted (informal)'],
          ['se marrer', 'familiar', 'to have a laugh (informal)'],
          ['travail', 'standard', 'work'],
          ['voiture', 'standard', 'car'],
          ['argent', 'standard', 'money'],
          ['manger', 'standard', 'to eat'],
          ['fatigué', 'standard', 'tired'],
          ['rire', 'standard', 'to laugh'],
          ['labeur', 'formal', 'toil (literary)'],
          ['automobile', 'formal', 'motor car (formal)'],
          ['deniers', 'formal', 'public funds (formal)'],
          ['se sustenter', 'formal', 'to take some food (formal)'],
          ['harassé', 'formal', 'worn out (formal)'],
          ['s’esclaffer', 'formal', 'to burst out laughing (formal)'],
        ].map(([text, bucket, translation], i) => ({
          id: `r${i + 1}`,
          text: text!,
          bucket: bucket!,
          speak: text!,
          translation: translation!,
        })),
      },
    ),

    activity(
      U,
      'memory-twins',
      'memory',
      {
        title: 'Same meaning, other register',
        description: 'Match the familiar word with its formal twin.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        pairs: [
          ['bagnole', 'automobile'],
          ['fric', 'deniers'],
          ['gosse', 'progéniture'],
          ['baraque', 'demeure'],
          ['crevé', 'harassé'],
          ['piquer', 'dérober'],
          ['se marrer', 's’esclaffer'],
        ].map(([a, b], i) => ({ id: `t${i + 1}`, a: a!, b: b! })),
      },
    ),

    activity(
      U,
      'listen-nuance',
      'listen',
      {
        title: 'Which shade of meaning?',
        description: 'Listen to the verb and pick what it means.',
        tags: ['listening', 'vocabulary', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          nuance,
          'chuchoter',
          'vociférer',
          'marmonner',
          'scruter',
          'épier',
          'flâner',
          'arpenter',
          'contempler',
        ),
        [...verbsOfSightAndSpeech, ...walking],
      ),
    ),

    activity(
      U,
      'gap-nuance',
      'gapfill',
      {
        title: 'The right verb',
        description: 'Choose the verb that fits the scene.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Les élèves ___ pour que le professeur ne les entende pas.',
            answer: 'chuchotent',
            options: ['chuchotent', 'vocifèrent', 'arpentent', 'épient'],
            translation: 'The pupils whisper so that the teacher cannot hear them.',
          },
          {
            id: 'g2',
            text: 'Furieux, le conducteur ___ des insultes par la vitre.',
            answer: 'vocifère',
            options: ['vocifère', 'chuchote', 'flâne', 'contemple'],
            translation: 'Furious, the driver shouts insults through the window.',
          },
          {
            id: 'g3',
            text: 'Le dimanche, nous aimons ___ le long du canal, sans but précis.',
            answer: 'flâner',
            options: ['flâner', 'arpenter', 'épier', 'toiser'],
            translation: 'On Sundays we like to stroll along the canal with no goal.',
            explanation: '“Arpenter” means to pace up and down, usually with worry or purpose.',
          },
          {
            id: 'g4',
            text: 'Il ___ la pièce, l’air inquiet, en attendant les résultats.',
            answer: 'arpente',
            options: ['arpente', 'flâne', 'scrute', 'bredouille'],
            translation: 'He paces the room, looking worried, waiting for the results.',
          },
          {
            id: 'g5',
            text: 'Le détective ___ la photo à la loupe pour trouver un indice.',
            answer: 'scrute',
            options: ['scrute', 'contemple', 'toise', 'entrevoit'],
            translation: 'The detective scans the photo with a magnifying glass for a clue.',
          },
          {
            id: 'g6',
            text: 'Devant le tableau, elle ___ longuement les couleurs.',
            answer: 'contemple',
            options: ['contemple', 'épie', 'toise', 'marmonne'],
            translation: 'In front of the painting she gazes at the colours for a long time.',
          },
          {
            id: 'g7',
            text: 'Gêné, il ___ quelques mots d’excuse sans oser me regarder.',
            answer: 'bredouille',
            options: ['bredouille', 'vocifère', 'rétorque', 'arpente'],
            translation:
              'Embarrassed, he stammers out a few words of apology without daring to look at me.',
          },
          {
            id: 'g8',
            text: '— Je n’ai rien à vous dire, ___-t-il sèchement.',
            answer: 'rétorque',
            options: ['rétorque', 'marmonne', 'toise', 'flâne'],
            translation: '“I have nothing to say to you,” he retorts curtly.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-families',
      'sortit',
      {
        title: 'Looking, speaking or walking?',
        description: 'Sort the verbs by the action they describe.',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Which kind of action is it?',
        buckets: [
          { id: 'look', label: 'Looking', emoji: '👁️' },
          { id: 'speak', label: 'Speaking', emoji: '🗣️' },
          { id: 'walk', label: 'Walking', emoji: '🚶' },
        ],
        items: [
          ...seeing.map((v) => ({ v, bucket: 'look' })),
          ...speaking.map((v) => ({ v, bucket: 'speak' })),
          ...walking.map((v) => ({ v, bucket: 'walk' })),
        ].map(({ v, bucket }) => ({
          id: v.id,
          text: v.de,
          bucket,
          speak: v.de,
          translation: v.en,
        })),
      },
    ),

    activity(
      U,
      'sort-prefixes',
      'sortit',
      {
        title: 'What does the prefix do?',
        description:
          'Sort the words by what their prefix adds: not, undo, or too much and too little.',
        tags: ['grammar', 'vocabulary', 'fr-c21-word-formation'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'What does the prefix of this word do?',
        buckets: [
          { id: 'not', label: 'in-, im-, ir-, il- (not)', emoji: '🚫' },
          { id: 'undo', label: 'dé-, dés-, mé- (undo, wrongly)', emoji: '↩️' },
          { id: 'degree', label: 'sur-, sous- (too much, too little)', emoji: '📏' },
        ],
        items: [
          ['inlassable', 'not', 'tireless'],
          ['irréprochable', 'not', 'beyond reproach'],
          ['insaisissable', 'not', 'elusive'],
          ['inavouable', 'not', 'too shameful to admit'],
          ['indélébile', 'not', 'indelible'],
          ['illisible', 'not', 'unreadable'],
          ['déconseiller', 'undo', 'to advise against'],
          ['démystifier', 'undo', 'to take the mystery out of'],
          ['méconnaissable', 'undo', 'unrecognisable'],
          ['désobéir', 'undo', 'to disobey'],
          ['dévisser', 'undo', 'to unscrew'],
          ['surestimer', 'degree', 'to overestimate'],
          ['sous-estimer', 'degree', 'to underestimate'],
          ['surpeuplé', 'degree', 'overcrowded'],
          ['sous-payé', 'degree', 'underpaid'],
        ].map(([text, bucket, translation], i) => ({
          id: `p${i + 1}`,
          text: text!,
          bucket: bucket!,
          speak: text!,
          translation: translation!,
        })),
      },
    ),

    activity(
      U,
      'gap-formation',
      'gapfill',
      {
        title: 'Find the derived word',
        description: 'Read the meaning in the prefix and fill in the word.',
        tags: ['grammar', 'vocabulary', 'fr-c21-word-formation'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'f1',
            text: 'Cette tache est ___ : on ne peut pas l’effacer.',
            answer: 'indélébile',
            options: ['indélébile', 'illisible', 'insaisissable', 'inavouable'],
            translation: 'This stain is indelible: it cannot be rubbed out.',
            why: {
              illisible: '“Illisible” describes a text you cannot read.',
              insaisissable: '“Insaisissable” describes someone you cannot catch or grasp.',
            },
          },
          {
            id: 'f2',
            text: 'Une employée qui travaille sans jamais se fatiguer est ___.',
            answer: 'inlassable',
            options: ['inlassable', 'irréprochable', 'insaisissable', 'méconnaissable'],
            translation: 'An employee who works without ever tiring is tireless.',
            why: {
              irréprochable:
                '“Irréprochable” means there is nothing to criticise, not that she never tires.',
            },
          },
          {
            id: 'f3',
            text: 'Son comportement est parfait : il est tout à fait ___.',
            answer: 'irréprochable',
            options: ['irréprochable', 'inlassable', 'inavouable', 'indélébile'],
            translation: 'His behaviour is perfect: it is beyond reproach.',
            why: {
              inavouable: '“Inavouable” is the opposite idea: something too shameful to admit.',
            },
          },
          {
            id: 'f4',
            text: 'Le suspect est ___ : la police n’arrive pas à l’attraper.',
            answer: 'insaisissable',
            options: ['insaisissable', 'irréprochable', 'indélébile', 'illisible'],
            translation: 'The suspect is elusive: the police cannot catch them.',
          },
          {
            id: 'f5',
            text: 'Après des mois de maladie, il était ___ : je ne l’ai pas reconnu.',
            answer: 'méconnaissable',
            options: ['méconnaissable', 'inlassable', 'inavouable', 'irréprochable'],
            translation: 'After months of illness he was unrecognisable: I did not know him.',
            why: {
              inlassable: '“Inlassable” means tireless, which says nothing about how he looked.',
            },
          },
          {
            id: 'f6',
            text: 'Il ___ le prix de la maison : elle vaut bien plus.',
            answer: 'sous-estime',
            options: ['sous-estime', 'surestime', 'déconseille', 'démystifie'],
            translation: 'He underestimates the price of the house: it is worth much more.',
            why: {
              surestime: 'The prefix sur- means too much: he would be guessing too high.',
              déconseille: '“Déconseiller” means to advise against something.',
            },
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the shades',
        description:
          'Unscramble, type and write down words with accents. Accents are optional here.',
        tags: ['spelling', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(nuance, 'chuchoter'), 'unscramble').items,
          {
            id: 'sp-deconseiller',
            mode: 'type',
            answer: 'déconseiller',
            hint: 'to advise against',
            emoji: '🚫',
            speak: 'déconseiller',
          },
          {
            id: 'sp-irreprochable',
            mode: 'type',
            answer: 'irréprochable',
            hint: 'beyond reproach',
            emoji: '😇',
            speak: 'irréprochable',
          },
          {
            id: 'sp-flaner',
            mode: 'dictation',
            answer: 'flâner',
            hint: 'Type what you hear (to stroll for pleasure)',
            emoji: '🚶',
            speak: 'flâner',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a formal or a familiar sentence',
        description: 'Put the words in order: some sentences are formal, some are not.',
        tags: ['communication', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'I would like to speak with the director. (formal)',
            words: ['Je', 'souhaiterais', 'm’entretenir', 'avec', 'le', 'directeur.'],
            extra: ['causer'],
          },
          {
            id: 's2',
            translation: 'Could you tell me where the station is? (formal)',
            words: ['Pourriez-vous', 'm’indiquer', 'où', 'se', 'trouve', 'la', 'gare ?'],
          },
          {
            id: 's3',
            translation: 'Are you coming? We are eating! (informal)',
            words: ['Tu', 'viens ?', 'On', 'bouffe !'],
            extra: ['sustente'],
          },
          {
            id: 's4',
            translation: 'He passed away peacefully last night. (formal)',
            words: ['Il', 'est', 'décédé', 'paisiblement', 'la', 'nuit', 'dernière.'],
          },
          {
            id: 's5',
            translation: 'Our offspring were worn out after the journey. (formal, humorous)',
            words: ['Notre', 'progéniture', 'était', 'harassée', 'après', 'le', 'voyage.'],
          },
          {
            id: 's6',
            translation: 'I am knackered, we are off. (informal)',
            words: ['Je', 'suis', 'crevé,', 'on', 'se', 'barre.'],
            extra: ['retire'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Say it in the right register',
        description: 'A job interview, a chat with a friend and a letter to the mayor.',
        tags: ['communication', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'interview',
            title: 'A job interview',
            emoji: '💼',
            setting: 'You meet Madame Roux, the head of a firm. Stay formal.',
            turns: [
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Bonjour, asseyez-vous. Qu’est-ce qui vous amène ?',
                translation: 'Good morning, take a seat. What brings you here?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je souhaiterais postuler au poste de responsable.', correct: true },
                  {
                    text: 'Salut ! Je veux le boulot de chef.',
                    correct: false,
                    feedback: '“Salut” and “boulot” are far too familiar for an interview.',
                  },
                  {
                    text: 'Je suis venu pour le fric, pas pour le plaisir.',
                    correct: false,
                    feedback: '“Fric” is slang, and the sentence would not impress a director.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Parlez-moi de votre dernier emploi.',
                translation: 'Tell me about your last job.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'J’y ai travaillé cinq ans, avec beaucoup de sérieux.',
                    correct: true,
                  },
                  {
                    text: 'Franchement, c’était la galère et je me suis barré.',
                    correct: false,
                    feedback: '“La galère” and “je me suis barré” are informal speech.',
                  },
                  {
                    text: 'J’ai accompli mon labeur dans la souffrance, madame.',
                    correct: false,
                    feedback: '“Labeur” is literary and the sentence sounds theatrical.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Madame Roux',
                text: 'Très bien, nous reviendrons vers vous.',
                translation: 'Very good, we will get back to you.',
              },
            ],
          },
          {
            id: 'friend',
            title: 'A chat with a friend',
            emoji: '🧑‍🤝‍🧑',
            setting: 'Tom is your friend. Keep it relaxed.',
            turns: [
              {
                kind: 'npc',
                who: 'Tom',
                text: 'T’as vu ma nouvelle bagnole ?',
                translation: 'Have you seen my new car?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Waouh, elle est super ! Tu l’as achetée où ?', correct: true },
                  {
                    text: 'Votre automobile est fort élégante, monsieur.',
                    correct: false,
                    feedback: 'That is how you would speak to a stranger, not to Tom.',
                  },
                  {
                    text: 'J’ai l’honneur de vous féliciter pour cette acquisition.',
                    correct: false,
                    feedback: 'Far too stiff between friends.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Tom',
                text: 'Je suis crevé. On va bouffer un truc ?',
                translation: 'I am exhausted. Shall we grab something to eat?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Bonne idée, je meurs de faim !', correct: true },
                  {
                    text: 'Je me sustenterais volontiers, cher ami.',
                    correct: false,
                    feedback: 'Funny, but “se sustenter” is far too formal for a chat like this.',
                  },
                  {
                    text: 'Veuillez m’excuser, je dois me retirer.',
                    correct: false,
                    feedback: 'That is a formal way to leave, and Tom has just invited you to eat.',
                  },
                ],
              },
            ],
          },
          {
            id: 'letter',
            title: 'A letter to the mayor',
            emoji: '✉️',
            setting: 'You write to the mayor about a broken streetlight. A colleague helps you.',
            turns: [
              {
                kind: 'npc',
                who: 'Colleague',
                text: 'Comment commence-t-on une lettre au maire ?',
                translation: 'How do you begin a letter to the mayor?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Monsieur le Maire,', correct: true },
                  {
                    text: 'Salut le maire,',
                    correct: false,
                    feedback: 'An official letter never begins with “Salut”.',
                  },
                  {
                    text: 'Cher Jean-Pierre,',
                    correct: false,
                    feedback: 'You do not know the mayor personally, so use his title.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Colleague',
                text: 'Et pour la formule de politesse, à la fin ?',
                translation: 'And for the closing formula at the end?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Veuillez agréer, Monsieur le Maire, l’expression de mes salutations distinguées.',
                    correct: true,
                  },
                  {
                    text: 'Bisous et à plus !',
                    correct: false,
                    feedback: 'That is how you sign off to a friend.',
                  },
                  {
                    text: 'Bon, voilà, ciao !',
                    correct: false,
                    feedback: 'Far too casual for an official letter.',
                  },
                ],
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
        title: 'Register blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'fr-c21-registers'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Bagnole” is an informal word for a car.', isTrue: true },
          {
            id: 'b2',
            text: '“Automobile” is more informal than “voiture”.',
            isTrue: false,
            explanation: '“Automobile” is more formal; “voiture” is the standard word.',
          },
          { id: 'b3', text: '“Décéder” is a formal way to say “mourir”.', isTrue: true },
          {
            id: 'b4',
            text: 'You would write “Salut” to open a letter to a mayor.',
            isTrue: false,
            explanation: 'Open an official letter with “Monsieur le Maire,” or “Madame la Maire,”.',
          },
          { id: 'b5', text: '“Chuchoter” means to speak very quietly.', isTrue: true },
          {
            id: 'b6',
            text: '“Vociférer” means to whisper.',
            isTrue: false,
            explanation: 'It means to shout angrily.',
          },
          { id: 'b7', text: '“Flâner” is to walk with no hurry for pleasure.', isTrue: true },
          {
            id: 'b8',
            text: '“Un homme inlassable” is a man who tires quickly.',
            isTrue: false,
            explanation: 'In- means not: “inlassable” is tireless.',
          },
          { id: 'b9', text: '“Sous-estimer” is the opposite of “surestimer”.', isTrue: true },
          {
            id: 'b10',
            text: '“Fric” and “deniers” both mean money, in different registers.',
            isTrue: true,
          },
          {
            id: 'b11',
            text: '“Épier” means to look at something proudly.',
            isTrue: false,
            explanation: '“Épier” is to watch someone in secret.',
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
        tags: ['vocabulary', 'grammar', 'fr-c21-registers', 'fr-c21-word-formation'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'You write to a minister. Which word for “money” fits a formal speech?',
            options: ['deniers', 'fric', 'blé', 'thune'],
            answer: 'deniers',
          },
          {
            id: 'c2',
            prompt: 'Which word is the familiar twin of “gosse” in formal French?',
            options: ['progéniture', 'baraque', 'demeure', 'labeur'],
            answer: 'progéniture',
          },
          {
            id: 'c3',
            prompt: 'Which verb describes watching someone secretly?',
            options: ['épier', 'contempler', 'toiser', 'entrevoir'],
            answer: 'épier',
          },
          {
            id: 'c4',
            prompt: 'Which verb describes looking at someone with contempt?',
            options: ['toiser', 'scruter', 'contempler', 'épier'],
            answer: 'toiser',
          },
          {
            id: 'c5',
            prompt: 'Which verb means “to pace up and down”?',
            options: ['arpenter', 'flâner', 'errer', 'se faufiler'],
            answer: 'arpenter',
          },
          {
            id: 'c6',
            prompt: 'A tache indélébile is a stain that …',
            options: ['cannot be removed', 'is easy to remove', 'is hard to see', 'is new'],
            answer: 'cannot be removed',
            lesson: 'fr-c21-word-formation',
          },
          {
            id: 'c7',
            prompt: 'Which prefix means “too little”?',
            options: ['sous-', 'sur-', 'dé-', 'ir-'],
            answer: 'sous-',
            lesson: 'fr-c21-word-formation',
          },
          {
            id: 'c8',
            prompt: 'At the end of an official letter you write …',
            options: [
              'Veuillez agréer mes salutations distinguées.',
              'Bisous !',
              'À plus !',
              'Ciao !',
            ],
            answer: 'Veuillez agréer mes salutations distinguées.',
          },
        ],
      },
    ),
  ],
};
