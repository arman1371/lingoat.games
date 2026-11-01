import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { pcTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-a1-2-fetes';

const family = vocabList(U, 'Family and relatives', [
  ['les grands-parents', 'grandparents', '👴'],
  ['le petit-fils', 'grandson', '👦'],
  ['la petite-fille', 'granddaughter', '👧'],
  ['le neveu', 'nephew', '🧒'],
  ['la nièce', 'niece', '👩‍🦱'],
  ['le beau-père', 'father-in-law, stepfather', '👨‍🦳'],
  ['la belle-mère', 'mother-in-law, stepmother', '👵'],
  ['le beau-frère', 'brother-in-law', '🧔'],
  ['la belle-sœur', 'sister-in-law', '👱‍♀️'],
  ['le voisin', 'neighbour (man)', '🏘️'],
  ['la voisine', 'neighbour (woman)', '🏠'],
  ['célibataire', 'single', '🙋'],
  ['marié, mariée', 'married', '💍'],
  ['divorcé, divorcée', 'divorced', '📄'],
  ['veuf, veuve', 'widowed', '🕯️'],
]);

const events = vocabList(U, 'Celebrations and life events', [
  ['la naissance', 'birth', '🍼'],
  ['le mariage', 'wedding', '💒'],
  ['l’anniversaire', 'birthday', '🎂'],
  ['la fête', 'party, celebration', '🥳'],
  ['le cadeau', 'present', '🎁'],
  ['le faire-part', 'announcement card', '💌'],
  ['naître', 'to be born', '👶'],
  ['se marier', 'to get married', '🤵'],
  ['déménager', 'to move house', '📦'],
  ['fêter', 'to celebrate', '🎊'],
  ['inviter', 'to invite', '📨'],
  ['offrir', 'to give (a present)', '🎀'],
  ['souhaiter', 'to wish', '🌟'],
]);

const wishes = vocabList(U, 'Congratulations and wishes', [
  ['Félicitations !', 'Congratulations!', '🎉'],
  ['Bravo !', 'Well done!', '👏'],
  ['Joyeux anniversaire !', 'Happy birthday!', '🎈'],
  ['Bonne année !', 'Happy New Year!', '🎆'],
  ['Joyeux Noël !', 'Merry Christmas!', '🎄'],
  ['Tous mes vœux de bonheur !', 'All my best wishes for happiness!', '💐'],
  ['Meilleurs vœux', 'Best wishes', '✉️'],
  ['Je te souhaite …', 'I wish you …', '🌠'],
]);

const looks = vocabList(U, 'Looks and character', [
  ['mince', 'slim', '🧍'],
  ['fort, forte', 'strong', '💪'],
  ['beau, belle', 'handsome, beautiful', '😍'],
  ['laid, laide', 'ugly', '😖'],
  ['roux, rousse', 'red-haired', '🦊'],
  ['châtain', 'brown (hair)', '🌰'],
  ['chauve', 'bald', '🥚'],
  ['les cheveux', 'hair', '💇'],
  ['les yeux', 'eyes', '👀'],
  ['long, longue', 'long', '📏'],
  ['court, courte', 'short', '✂️'],
  ['bouclé, bouclée', 'curly', '🌀'],
  ['raide', 'straight', '📐'],
  ['drôle', 'funny', '🤣'],
  ['timide', 'shy', '😳'],
  ['sérieux, sérieuse', 'serious', '🧐'],
  ['généreux, généreuse', 'generous', '🤲'],
  ['calme', 'calm', '🧘'],
  ['intelligent, intelligente', 'intelligent', '🧠'],
  ['souriant, souriante', 'cheerful, smiling', '😊'],
  ['paresseux, paresseuse', 'lazy', '🦥'],
]);

const markers = vocabList(U, 'Past and future', [
  ['hier soir', 'last night', '🌙'],
  ['hier matin', 'yesterday morning', '🌄'],
  ['avant-hier', 'the day before yesterday', '⏮️'],
  ['après-demain', 'the day after tomorrow', '⏭️'],
  ['samedi dernier', 'last Saturday', '6️⃣'],
  ['la semaine dernière', 'last week', '⬅️'],
  ['le mois dernier', 'last month', '📆'],
  ['l’année dernière', 'last year', '🗓️'],
  ['la semaine prochaine', 'next week', '➡️'],
  ['le mois prochain', 'next month', '📅'],
  ['l’année prochaine', 'next year', '🔜'],
  ['il y a deux jours', 'two days ago', '⏪'],
  ['dans deux jours', 'in two days', '⏩'],
]);

const vocab = [...family, ...events, ...wishes, ...looks, ...markers];

const pictureQuiz = byDe(
  vocab,
  'le mariage',
  'le cadeau',
  'l’anniversaire',
  'le faire-part',
  'la naissance',
  'déménager',
  'Joyeux Noël !',
  'Bonne année !',
);

const heard = byDe(
  vocab,
  'Félicitations !',
  'Bravo !',
  'Joyeux anniversaire !',
  'Bonne année !',
  'Joyeux Noël !',
  'Tous mes vœux de bonheur !',
  'Je te souhaite …',
);

/** [infinitive, bucket, English] for the participle sort */
const PARTICIPLE_CARDS: [string, 'e' | 'i' | 'u' | 'irr', string][] = [
  ['parler', 'e', 'to speak'],
  ['manger', 'e', 'to eat'],
  ['inviter', 'e', 'to invite'],
  ['regarder', 'e', 'to watch'],
  ['finir', 'i', 'to finish'],
  ['choisir', 'i', 'to choose'],
  ['dormir', 'i', 'to sleep'],
  ['attendre', 'u', 'to wait'],
  ['vendre', 'u', 'to sell'],
  ['répondre', 'u', 'to answer'],
  ['faire', 'irr', 'to do, to make'],
  ['prendre', 'irr', 'to take'],
  ['avoir', 'irr', 'to have'],
  ['être', 'irr', 'to be'],
];

/** [word, bucket, English] for the looks / character sort */
const TRAIT_CARDS: [string, 'look' | 'trait', string][] = [
  ['mince', 'look', 'slim'],
  ['roux', 'look', 'red-haired'],
  ['chauve', 'look', 'bald'],
  ['bouclé', 'look', 'curly'],
  ['long', 'look', 'long'],
  ['raide', 'look', 'straight'],
  ['drôle', 'trait', 'funny'],
  ['timide', 'trait', 'shy'],
  ['sérieux', 'trait', 'serious'],
  ['généreux', 'trait', 'generous'],
  ['paresseux', 'trait', 'lazy'],
  ['calme', 'trait', 'calm'],
];

export const fetes: UnitContent = {
  unit: unitFr({
    id: U,
    order: 2,
    title: 'Félicitations !',
    subtitle: 'Talk about your family, celebrations and what people look like',
    emoji: '🎉',
    goals: [
      'Present your family and say who is married or single',
      'Congratulate someone and make a wish',
      'Describe how a person looks and what they are like',
      'Say what happened and when',
    ],
    grammar: [
      'The passé composé with avoir: j’ai mangé, il a fini',
      'Past and future time markers: hier, la semaine dernière, il y a, dans',
      'Adjectives for looks and character',
    ],
    vocabFields: [
      'Family and relatives',
      'Celebrations and life events',
      'Congratulations and wishes',
      'Looks and character',
      'Past and future',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-family',
      'flashcards',
      {
        title: 'Relatives and family status',
        description: 'Grandchildren, in-laws, neighbours, single or married.',
        tags: ['vocabulary', 'family'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(family),
    ),

    activity(
      U,
      'flash-events',
      'flashcards',
      {
        title: 'Celebrations',
        description: 'Weddings, birthdays, presents and the verbs that go with them.',
        tags: ['vocabulary', 'celebrations'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(events),
    ),

    activity(
      U,
      'flash-wishes',
      'flashcards',
      {
        title: 'Congratulations and wishes',
        description: 'What to say at a birthday, a birth or New Year.',
        tags: ['vocabulary', 'celebrations', 'greetings'],
        difficulty: 1,
        estMinutes: 2,
      },
      flashcards(wishes),
    ),

    activity(
      U,
      'flash-looks',
      'flashcards',
      {
        title: 'Looks and character',
        description: 'Describe hair, eyes and personality.',
        tags: ['vocabulary', 'describing-people'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(looks),
    ),

    activity(
      U,
      'flash-markers',
      'flashcards',
      {
        title: 'Past and future',
        description: 'Last week, next month, two days ago, in two days.',
        tags: ['vocabulary', 'events-plans'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(markers),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'Which celebration?',
        description: 'Look at the picture and pick the word.',
        tags: ['vocabulary', 'celebrations'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, [...events, ...wishes], 4),
    ),

    activity(
      U,
      'listen-wishes',
      'listen',
      {
        title: 'Listen to the wishes',
        description: 'Listen to the greeting and pick its meaning.',
        tags: ['listening', 'celebrations'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(heard, wishes),
    ),

    activity(
      U,
      'conj-passe-compose',
      'conjugation',
      {
        title: 'The passé composé',
        description: 'avoir in the present, then the past participle.',
        tags: ['grammar', 'fr-passe-compose-avoir'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          pcTable('manger-1', 'manger', 'mangé', 'to eat', ['je', 'tu', 'il/elle/on']),
          pcTable('finir-1', 'finir', 'fini', 'to finish', ['nous', 'vous', 'ils/elles']),
          pcTable('attendre-1', 'attendre', 'attendu', 'to wait', ['je', 'nous', 'ils/elles']),
          pcTable('faire-1', 'faire', 'fait', 'to do, to make', ['tu', 'il/elle/on', 'vous']),
          pcTable('prendre-1', 'prendre', 'pris', 'to take', ['je', 'tu', 'nous']),
        ],
      },
    ),

    activity(
      U,
      'sort-participles',
      'sortit',
      {
        title: 'Which participle?',
        description: 'Sort the infinitive by the ending of its past participle.',
        tags: ['grammar', 'fr-passe-compose-avoir'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-passe-compose-avoir',
      },
      {
        instruction: 'Which ending does the past participle have?',
        buckets: [
          { id: 'e', label: '-é: parlé', emoji: '🗣️' },
          { id: 'i', label: '-i: fini', emoji: '🏁' },
          { id: 'u', label: '-u: attendu', emoji: '⏳' },
          { id: 'irr', label: 'irregular: fait, pris, eu, été', emoji: '⚠️' },
        ],
        items: PARTICIPLE_CARDS.map(([text, bucket, translation], i) => ({
          id: `p${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-passe-compose',
      'gapfill',
      {
        title: 'What did you do?',
        description: 'Pick the auxiliary or the past participle.',
        tags: ['grammar', 'fr-passe-compose-avoir', 'celebrations'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-passe-compose-avoir',
      },
      {
        items: [
          {
            id: 'g1',
            text: 'Hier soir, j’ai ___ un film.',
            answer: 'regardé',
            options: ['regardé', 'regarder', 'regarde', 'regardez'],
            translation: 'Last night I watched a film.',
            explanation: 'The participle of an -er verb ends in -é: j’ai regardé.',
          },
          {
            id: 'g2',
            text: 'Nous ___ fêté son anniversaire.',
            answer: 'avons',
            options: ['avons', 'sommes', 'avez', 'a'],
            translation: 'We celebrated his birthday.',
            explanation: 'With nous the auxiliary is avons: nous avons fêté.',
          },
          {
            id: 'g3',
            text: 'Elle a ___ un cadeau.',
            answer: 'choisi',
            options: ['choisi', 'choisir', 'choisit', 'choisis'],
            translation: 'She chose a present.',
            explanation: 'The participle of an -ir verb ends in -i: elle a choisi.',
          },
          {
            id: 'g4',
            text: 'Nous avons ___ nos amis pendant une heure.',
            answer: 'attendu',
            options: ['attendu', 'attendre', 'attendé', 'attends'],
            translation: 'We waited for our friends for an hour.',
            explanation: 'The participle of a -re verb ends in -u: nous avons attendu.',
          },
          {
            id: 'g5',
            text: 'Qu’est-ce que vous avez ___ hier ?',
            answer: 'fait',
            options: ['fait', 'faire', 'fais', 'faisé'],
            translation: 'What did you do yesterday?',
            explanation: 'Faire is irregular: its participle is fait.',
          },
          {
            id: 'g6',
            text: 'Elle a ___ un café.',
            answer: 'pris',
            options: ['pris', 'prendu', 'prendre', 'prend'],
            translation: 'She had a coffee.',
            explanation: 'Prendre is irregular: its participle is pris.',
          },
          {
            id: 'g7',
            text: 'Je n’ai pas ___ le gâteau.',
            answer: 'mangé',
            options: ['mangé', 'mange', 'manger', 'mangez'],
            translation: 'I did not eat the cake.',
            explanation:
              'Ne … pas wraps the auxiliary, then comes the participle: je n’ai pas mangé.',
          },
          {
            id: 'g8',
            text: 'Ils ___ eu un bébé.',
            answer: 'ont',
            options: ['ont', 'sont', 'a', 'avons'],
            translation: 'They had a baby.',
            explanation: 'With ils the auxiliary is ont: ils ont eu.',
          },
          {
            id: 'g9',
            text: 'Tu ___ invité tous tes amis ?',
            answer: 'as',
            options: ['as', 'a', 'es', 'ai'],
            translation: 'Did you invite all your friends?',
            explanation: 'With tu the auxiliary is as: tu as invité.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-markers',
      'gapfill',
      {
        title: 'When did it happen?',
        description: 'Look back with hier and il y a, look ahead with demain and dans.',
        tags: ['grammar', 'fr-time-markers', 'events-plans'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-time-markers',
      },
      {
        items: [
          {
            id: 't1',
            text: 'Nous avons fêté Noël l’année ___.',
            answer: 'dernière',
            options: ['dernière', 'dernier', 'prochaine', 'prochain'],
            translation: 'We celebrated Christmas last year.',
            explanation: 'L’année is feminine, so dernière: l’année dernière.',
          },
          {
            id: 't2',
            text: 'Le mariage est le mois ___.',
            answer: 'prochain',
            options: ['prochain', 'prochaine', 'dernier', 'dernière'],
            translation: 'The wedding is next month.',
            explanation: 'Le mois is masculine, and prochain looks ahead: le mois prochain.',
          },
          {
            id: 't3',
            text: 'Ma nièce est née ___ deux jours.',
            answer: 'il y a',
            options: ['il y a', 'dans', 'en', 'pour'],
            translation: 'My niece was born two days ago.',
            explanation: 'Il y a + a length of time looks back: two days ago.',
          },
          {
            id: 't4',
            text: 'Mon cousin arrive ___ deux jours.',
            answer: 'dans',
            options: ['dans', 'il y a', 'en', 'à'],
            translation: 'My cousin arrives in two days.',
            explanation: 'Dans + a length of time looks ahead: in two days.',
          },
          {
            id: 't5',
            text: '___ soir, j’ai dîné chez mes grands-parents.',
            answer: 'Hier',
            options: ['Hier', 'Demain', 'Aujourd’hui', 'Avant'],
            translation: 'Last night I had dinner at my grandparents’.',
            explanation: 'Hier soir means last night. The passé composé talks about the past.',
          },
          {
            id: 't6',
            text: '___, nous allons fêter son anniversaire.',
            answer: 'Demain',
            options: ['Demain', 'Hier', 'Avant-hier', 'Il y a'],
            translation: 'Tomorrow we are going to celebrate his birthday.',
            explanation: 'Aller + infinitive talks about the future, so demain.',
          },
          {
            id: 't7',
            text: 'Samedi ___, j’ai invité mes cousins.',
            answer: 'dernier',
            options: ['dernier', 'prochain', 'dernière', 'hier'],
            translation: 'Last Saturday I invited my cousins.',
            explanation: 'Samedi is masculine, and dernier looks back: samedi dernier.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-traits',
      'sortit',
      {
        title: 'Looks or character?',
        description: 'Does the word describe how someone looks or what they are like?',
        tags: ['vocabulary', 'describing-people'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Does the word describe looks or character?',
        buckets: [
          { id: 'look', label: 'Looks', emoji: '👀' },
          { id: 'trait', label: 'Character', emoji: '🧠' },
        ],
        items: TRAIT_CARDS.map(([text, bucket, translation], i) => ({
          id: `t${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
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
            translation: 'Yesterday I watched a film.',
            words: ['Hier,', 'j’ai', 'regardé', 'un', 'film.'],
            extra: ['regarder'],
            lesson: 'fr-passe-compose-avoir',
          },
          {
            id: 's2',
            translation: 'We did not eat the cake.',
            words: ['Nous', 'n’avons', 'pas', 'mangé', 'le', 'gâteau.'],
            extra: ['sommes'],
            lesson: 'fr-passe-compose-avoir',
          },
          {
            id: 's3',
            translation: 'My sister celebrated her birthday last week.',
            words: ['Ma', 'sœur', 'a', 'fêté', 'son', 'anniversaire', 'la', 'semaine', 'dernière.'],
            extra: ['prochaine'],
            lesson: 'fr-time-markers',
          },
          {
            id: 's4',
            translation: 'My brother is tall and funny.',
            words: ['Mon', 'frère', 'est', 'grand', 'et', 'drôle.'],
            extra: ['grande'],
            lesson: 'fr-adjectives',
          },
          {
            id: 's5',
            translation: 'She has long curly hair.',
            words: ['Elle', 'a', 'les', 'cheveux', 'longs', 'et', 'bouclés.'],
            extra: ['long'],
            lesson: 'fr-adjectives',
          },
          {
            id: 's6',
            translation: 'The wedding is next month.',
            words: ['Le', 'mariage', 'est', 'le', 'mois', 'prochain.'],
            extra: ['dernier'],
            lesson: 'fr-time-markers',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Family, news and a party',
        description: 'Show a photo, share good news and talk about a birthday.',
        tags: ['communication', 'family', 'celebrations'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'photo',
            title: 'A family photo',
            emoji: '🖼️',
            setting: 'Your friend Léa looks at a photo of your family. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Léa',
                text: 'C’est qui, sur la photo ?',
                translation: 'Who is that in the photo?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'C’est ma belle-sœur. Elle est mince et très drôle.', correct: true },
                  {
                    text: 'C’est mon belle-sœur. Elle est mince et très drôle.',
                    correct: false,
                    feedback: 'Belle-sœur is feminine: ma belle-sœur.',
                  },
                  {
                    text: 'C’est ma belle-sœur. Il est mince et très drôle.',
                    correct: false,
                    feedback: 'She is a woman, so elle est mince.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Et elle a des enfants ?',
                translation: 'And does she have children?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Oui, elle a deux fils. Ce sont mes neveux.', correct: true },
                  {
                    text: 'Oui, elle a deux fils. C’est mon neveu.',
                    correct: false,
                    feedback: 'There are two sons, so use the plural: ce sont mes neveux.',
                  },
                  {
                    text: 'Oui, elle a deux fils. Ce sont mes nièces.',
                    correct: false,
                    feedback: 'Sons are neveux. Nièces are girls.',
                  },
                ],
              },
            ],
          },
          {
            id: 'news',
            title: 'Good news',
            emoji: '👶',
            setting: 'Your friend Hugo tells you some news. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Hugo',
                text: 'Ma sœur a eu un bébé !',
                translation: 'My sister has had a baby!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Félicitations ! Je suis très content pour elle.', correct: true },
                  {
                    text: 'Joyeux anniversaire ! Je suis très content pour elle.',
                    correct: false,
                    feedback: 'Joyeux anniversaire is for a birthday, not for a birth.',
                  },
                  {
                    text: 'Bonne année ! Je suis très content pour elle.',
                    correct: false,
                    feedback: 'Bonne année is only for New Year. Say félicitations.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Hugo',
                text: 'Merci ! Le bébé est né hier soir.',
                translation: 'Thank you! The baby was born last night.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Quelle bonne nouvelle ! Tu as téléphoné à tes parents ?',
                    correct: true,
                  },
                  {
                    text: 'Quelle bonne nouvelle ! Tu es téléphoné à tes parents ?',
                    correct: false,
                    feedback: 'Téléphoner takes avoir: tu as téléphoné.',
                  },
                  {
                    text: 'Quelle bonne nouvelle ! Tu as téléphoner à tes parents ?',
                    correct: false,
                    feedback: 'After avoir use the participle téléphoné, not the infinitive.',
                  },
                ],
              },
            ],
          },
          {
            id: 'party',
            title: 'Birthday party',
            emoji: '🎂',
            setting: 'Your friend Camille asks about your birthday. You say tu to each other.',
            turns: [
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Qu’est-ce que tu as fait pour ton anniversaire l’année dernière ?',
                translation: 'What did you do for your birthday last year?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'J’ai invité mes amis et nous avons mangé un gâteau.',
                    correct: true,
                  },
                  {
                    text: 'J’ai invité mes amis et nous sommes mangé un gâteau.',
                    correct: false,
                    feedback: 'Manger takes avoir: nous avons mangé.',
                  },
                  {
                    text: 'Je invité mes amis et nous avons mangé un gâteau.',
                    correct: false,
                    feedback: 'The auxiliary is missing: j’ai invité.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Et cette année ?',
                translation: 'And this year?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Samedi prochain, je vais faire une grande fête !', correct: true },
                  {
                    text: 'Samedi dernier, je vais faire une grande fête !',
                    correct: false,
                    feedback: 'Dernier looks back. For the future use prochain.',
                  },
                  {
                    text: 'Samedi prochain, j’ai fait une grande fête !',
                    correct: false,
                    feedback:
                      'Prochain is the future: use aller + infinitive, not the passé composé.',
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
        title: 'Celebration blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'grammar', 'celebrations'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          {
            id: 'b1',
            text: '“Félicitations !” is what you say to congratulate someone.',
            isTrue: true,
          },
          { id: 'b2', text: '“Le neveu” means “nephew”.', isTrue: true },
          { id: 'b3', text: '“La belle-mère” can mean “mother-in-law”.', isTrue: true },
          {
            id: 'b4',
            text: '“Hier soir” means “tomorrow evening”.',
            isTrue: false,
            explanation: 'Hier soir is last night. Tomorrow evening is demain soir.',
          },
          {
            id: 'b5',
            text: '“Il y a deux jours” means “in two days”.',
            isTrue: false,
            explanation: 'Il y a looks back: two days ago. In two days is dans deux jours.',
          },
          { id: 'b6', text: '“J’ai mangé” is correct.', isTrue: true },
          {
            id: 'b7',
            text: '“J’ai mange” is correct for “I ate”.',
            isTrue: false,
            explanation: 'The participle of manger is mangé, with the accent.',
          },
          { id: 'b8', text: '“Il a fini” is correct.', isTrue: true },
          {
            id: 'b9',
            text: '“Nous sommes regardé” is correct.',
            isTrue: false,
            explanation: 'Regarder takes avoir: nous avons regardé.',
          },
          { id: 'b10', text: '“Fait” is the past participle of faire.', isTrue: true },
          { id: 'b11', text: '“La semaine prochaine” means “next week”.', isTrue: true },
          {
            id: 'b12',
            text: '“Drôle” means “serious”.',
            isTrue: false,
            explanation: 'Drôle is funny. Serious is sérieux.',
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
        tags: ['vocabulary', 'grammar', 'celebrations'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “Elle ___ choisi un cadeau.”',
            options: ['a', 'as', 'ont', 'est'],
            answer: 'a',
            lesson: 'fr-passe-compose-avoir',
          },
          {
            id: 'c2',
            prompt: 'What is the past participle of “faire”?',
            options: ['fait', 'fais', 'faite', 'faisé'],
            answer: 'fait',
            lesson: 'fr-passe-compose-avoir',
          },
          {
            id: 'c3',
            prompt: 'How do you say “We celebrated”?',
            options: [
              'Nous avons fêté.',
              'Nous sommes fêté.',
              'Nous avons fêter.',
              'Nous fêtons avons.',
            ],
            answer: 'Nous avons fêté.',
            lesson: 'fr-passe-compose-avoir',
          },
          {
            id: 'c4',
            prompt: '“La semaine dernière” means …',
            options: ['last week', 'next week', 'this week', 'every week'],
            answer: 'last week',
            lesson: 'fr-time-markers',
          },
          {
            id: 'c5',
            prompt: 'Which expression looks ahead in time?',
            options: ['dans deux jours', 'il y a deux jours', 'hier soir', 'avant-hier'],
            answer: 'dans deux jours',
            lesson: 'fr-time-markers',
          },
          {
            id: 'c6',
            prompt: 'How do you say “I did not invite Paul”?',
            options: [
              'Je n’ai pas invité Paul.',
              'Je ne pas ai invité Paul.',
              'Je n’ai invité pas Paul.',
              'Je ai n’pas invité Paul.',
            ],
            answer: 'Je n’ai pas invité Paul.',
            lesson: 'fr-passe-compose-avoir',
          },
          {
            id: 'c7',
            prompt: '“Joyeux anniversaire !” means …',
            options: ['Happy birthday!', 'Happy New Year!', 'Congratulations!', 'Merry Christmas!'],
            answer: 'Happy birthday!',
          },
          {
            id: 'c8',
            prompt: 'What does “célibataire” mean?',
            options: ['single', 'married', 'divorced', 'widowed'],
            answer: 'single',
          },
        ],
      },
    ),
  ],
};
