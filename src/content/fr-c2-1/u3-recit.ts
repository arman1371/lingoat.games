import { FRENCH_PRONOUNS, type FrenchPronoun } from '@/lib/persons';
import { activity, byDe, flashcards, listen, memory, quizDeEn, unit, vocabList } from '../builders';
import type { ConfigOf } from '../schema';
import type { UnitContent } from './types';

const U = 'fr-c2-1-recit';

const events = vocabList(U, 'Events in a story', [
  ['surgir', 'to appear suddenly', '👤'],
  ['survenir', 'to happen unexpectedly', '⚡'],
  ['s’écrier', 'to cry out', '📢'],
  ['s’ensuivre', 'to follow as a result', '➡️'],
  ['se dérouler', 'to take place, to unfold', '🎞️'],
  ['s’abattre', 'to swoop down on, to crash down', '🌩️'],
  ['s’engouffrer', 'to rush into', '🌀'],
  ['tressaillir', 'to start, to flinch', '😲'],
  ['accourir', 'to rush up', '🏃'],
  ['rebrousser chemin', 'to turn back', '↩️'],
  ['se raviser', 'to change one’s mind', '🔄'],
  ['demeurer', 'to remain, to stay (literary)', '🧱'],
]);

const times = vocabList(U, 'Time in a story', [
  ['sur-le-champ', 'on the spot, at once', '⏱️'],
  ['dès lors', 'from then on, therefore', '📍'],
  ['sitôt', 'as soon as (literary)', '⚡'],
  ['à peine', 'hardly, no sooner', '🌬️'],
  ['au bout de', 'after (a length of time)', '⌛'],
  ['peu après', 'shortly after', '🕑'],
  ['à l’aube', 'at dawn', '🌄'],
  ['à la tombée de la nuit', 'at nightfall', '🌆'],
  ['tantôt', 'at times (tantôt … tantôt: now … now)', '🔁'],
]);

const vocab = [...events, ...times];

type Table = ConfigOf<'conjugation'>['tables'][number];
type Six = [string, string, string, string, string, string];

/** A passé simple table: the forms are written out, because `src/lib/french` only conjugates the present. */
function simpleTable(
  id: string,
  verb: string,
  meaning: string,
  forms: Six,
  blanks: FrenchPronoun[],
): Table {
  return {
    id,
    verb: `${verb} (passé simple)`,
    meaning,
    forms: Object.fromEntries(FRENCH_PRONOUNS.map((p, i) => [p, forms[i]])) as Table['forms'],
    blanks,
    lesson: 'fr-c21-passe-simple',
  };
}

const tenseItems: [string, string, string][] = [
  ['Il ouvrit la porte et entra.', 'simple', 'He opened the door and went in.'],
  ['La nuit tomba.', 'simple', 'Night fell.'],
  ['Elle comprit enfin la vérité.', 'simple', 'At last she understood the truth.'],
  ['Ils partirent à l’aube.', 'simple', 'They left at dawn.'],
  ['Il pleuvait depuis des heures.', 'imperfect', 'It had been raining for hours.'],
  ['Elle regardait par la fenêtre.', 'imperfect', 'She was looking out of the window.'],
  ['Les enfants jouaient dans la cour.', 'imperfect', 'The children were playing in the yard.'],
  ['C’était un soir d’hiver.', 'imperfect', 'It was a winter evening.'],
  ['En 1789, le peuple prend la Bastille.', 'present', 'In 1789 the people take the Bastille.'],
  ['En 1969, l’homme marche sur la Lune.', 'present', 'In 1969 man walks on the Moon.'],
  ['Napoléon meurt à Sainte-Hélène en 1821.', 'present', 'Napoleon dies on Saint Helena in 1821.'],
  [
    'Elle ouvre la lettre : tout s’effondre.',
    'present',
    'She opens the letter: everything collapses.',
  ],
];

const registerItems: [string, string, string][] = [
  ['On est partis à huit heures.', 'speech', 'We left at eight.'],
  ['Ils partirent à huit heures.', 'novel', 'They left at eight.'],
  ['Il est tombé et il s’est cassé le bras.', 'speech', 'He fell and broke his arm.'],
  ['Il tomba et se cassa le bras.', 'novel', 'He fell and broke his arm.'],
  ['Elle a ouvert la porte et elle est entrée.', 'speech', 'She opened the door and came in.'],
  ['Elle ouvrit la porte et entra.', 'novel', 'She opened the door and came in.'],
  ['Dès qu’il a eu fini, il est sorti.', 'speech', 'As soon as he had finished, he went out.'],
  ['Dès qu’il eut fini, il sortit.', 'novel', 'As soon as he had finished, he went out.'],
];

export const recit: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 3,
    title: 'Temps du récit',
    subtitle: 'Tell a story: passé simple, imparfait, passé antérieur and the historic present',
    emoji: '📖',
    goals: [
      'Read and write the passé simple and the passé antérieur',
      'Choose between the passé simple and the imparfait in a story',
      'Know when a story is told in the present, and when speech avoids the passé simple',
    ],
    grammar: ['Passé simple', 'Narrative tenses'],
    vocabFields: ['Events in a story', 'Time in a story'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-events',
      'flashcards',
      {
        title: 'Things that happen in a story',
        description: 'Verbs for sudden events, movement and reactions.',
        tags: ['vocabulary', 'fr-c21-narration'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(events),
    ),

    activity(
      U,
      'flash-times',
      'flashcards',
      {
        title: 'Time in a story',
        description: 'Expressions that place events in time.',
        tags: ['vocabulary', 'fr-c21-narration'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(times),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the verbs and expressions of a story with their meaning.',
        tags: ['vocabulary', 'fr-c21-narration'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'surgir',
          's’écrier',
          'tressaillir',
          'accourir',
          'rebrousser chemin',
          'se raviser',
          'à peine',
          'sur-le-champ',
          'à l’aube',
        ),
        vocab.filter((v) => !['survenir', 'demeurer', 'dès lors', 'peu après'].includes(v.de)),
        4,
      ),
    ),

    activity(
      U,
      'listen-story',
      'listen',
      {
        title: 'Listen to the story words',
        description: 'Listen and pick what the word or expression means.',
        tags: ['listening', 'vocabulary', 'fr-c21-narration'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(vocab, 'surgir', 'accourir', 'tressaillir', 'se raviser', 'à l’aube', 'sur-le-champ'),
        vocab.filter((v) => !['survenir', 'demeurer', 'dès lors', 'peu après'].includes(v.de)),
      ),
    ),

    activity(
      U,
      'memory-story',
      'memory',
      {
        title: 'Story memory',
        description: 'Match the word with its meaning.',
        tags: ['vocabulary', 'fr-c21-narration'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'surgir',
          'survenir',
          'se dérouler',
          's’engouffrer',
          'rebrousser chemin',
          'au bout de',
          'à la tombée de la nuit',
          'sitôt',
        ),
      ),
    ),

    activity(
      U,
      'sort-tenses',
      'sortit',
      {
        title: 'Which narrative tense?',
        description: 'Sort the sentences by the tense that tells the story.',
        tags: ['grammar', 'fr-c21-narrative-tenses'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Which tense does the narrator use?',
        buckets: [
          { id: 'simple', label: 'Passé simple (event)', emoji: '➡️' },
          { id: 'imperfect', label: 'Imparfait (background)', emoji: '🖼️' },
          { id: 'present', label: 'Présent historique', emoji: '📰' },
        ],
        items: tenseItems.map(([text, bucket, translation], i) => ({
          id: `t${i + 1}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-narrative',
      'gapfill',
      {
        title: 'Event or background?',
        description: 'Choose the tense that fits the story.',
        tags: ['grammar', 'fr-c21-narrative-tenses'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'n1',
            text: 'Il ___ depuis l’aube quand le facteur frappa à la porte.',
            answer: 'pleuvait',
            options: ['pleuvait', 'plut', 'pleuvra', 'pleuvrait'],
            translation: 'It had been raining since dawn when the postman knocked at the door.',
            why: {
              plut: 'The passé simple would be a single event; the rain is the ongoing background.',
            },
          },
          {
            id: 'n2',
            text: 'Il y a deux siècles, la pluie tombait quand le facteur ___ à la porte.',
            answer: 'frappa',
            options: ['frappa', 'frappait', 'frappera', 'frapperait'],
            translation:
              'Two centuries ago the rain was falling when the postman knocked at the door.',
            why: {
              frappait: 'The knock is one event that interrupts the background: passé simple.',
            },
          },
          {
            id: 'n3',
            text: 'Soudain, la porte ___ et un inconnu entra.',
            answer: 's’ouvrit',
            options: ['s’ouvrit', 's’ouvrait', 's’ouvrira', 's’ouvrirait'],
            translation: 'Suddenly the door opened and a stranger came in.',
            why: { 's’ouvrait': '“Soudain” marks a sudden event, so the passé simple.' },
          },
          {
            id: 'n4',
            text: 'Chaque matin, elle ___ la même route pour aller à l’usine.',
            answer: 'prenait',
            options: ['prenait', 'prit', 'prendra', 'prendrait'],
            translation: 'Every morning she took the same road to the factory.',
            why: { prit: 'A repeated habit (“chaque matin”) takes the imparfait.' },
          },
          {
            id: 'n5',
            text: 'À peine eut-elle ___ la lettre qu’elle comprit tout.',
            answer: 'lu',
            options: ['lu', 'lut', 'lisait', 'lire'],
            translation: 'Hardly had she read the letter when she understood everything.',
            why: { lut: 'After “eut” you need a past participle: eut lu is the passé antérieur.' },
          },
          {
            id: 'n6',
            text: 'Ce soir-là, tout le village ___ dans la salle des fêtes.',
            answer: 'se réunit',
            options: ['se réunit', 'se réunissait', 'se réunira', 'se réunirait'],
            translation: 'That evening the whole village gathered in the village hall.',
            why: { 'se réunissait': '“Ce soir-là” is one evening, not a habit: passé simple.' },
          },
          {
            id: 'n7',
            text: 'Elle avait peur : la nuit ___ noire et le vent soufflait fort.',
            answer: 'était',
            options: ['était', 'fut', 'sera', 'serait'],
            translation: 'She was afraid: the night was black and the wind was blowing hard.',
            why: { fut: 'This describes the scene, so the imparfait, as with “soufflait”.' },
          },
          {
            id: 'n8',
            text: 'Il ___ de sa chaise, ouvrit la fenêtre et cria.',
            answer: 'se leva',
            options: ['se leva', 'se levait', 'se lèvera', 'se lèverait'],
            translation: 'He got up from his chair, opened the window and shouted.',
            why: {
              'se levait':
                'A chain of events (se leva, ouvrit, cria) takes the passé simple throughout.',
            },
          },
        ],
      },
    ),

    activity(
      U,
      'conj-regular',
      'conjugation',
      {
        title: 'The passé simple of regular verbs',
        description: 'Parler and regarder end in -a, finir in -it: fill in the forms.',
        tags: ['grammar', 'fr-c21-passe-simple'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        tables: [
          simpleTable(
            'parler-1',
            'parler',
            'to speak',
            ['parlai', 'parlas', 'parla', 'parlâmes', 'parlâtes', 'parlèrent'],
            ['il/elle/on', 'ils/elles', 'nous'],
          ),
          simpleTable(
            'finir-1',
            'finir',
            'to finish',
            ['finis', 'finis', 'finit', 'finîmes', 'finîtes', 'finirent'],
            ['je', 'vous', 'ils/elles'],
          ),
          simpleTable(
            'regarder-1',
            'regarder',
            'to look at',
            ['regardai', 'regardas', 'regarda', 'regardâmes', 'regardâtes', 'regardèrent'],
            ['je', 'nous', 'ils/elles'],
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-irregular',
      'conjugation',
      {
        title: 'The passé simple of irregular verbs',
        description: 'Être, avoir, faire, venir and prendre have their own stems.',
        tags: ['grammar', 'fr-c21-passe-simple'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        tables: [
          simpleTable(
            'etre-1',
            'être',
            'to be',
            ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
            ['je', 'il/elle/on', 'ils/elles'],
          ),
          simpleTable(
            'avoir-1',
            'avoir',
            'to have',
            ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
            ['tu', 'nous', 'ils/elles'],
          ),
          simpleTable(
            'faire-1',
            'faire',
            'to do, to make',
            ['fis', 'fis', 'fit', 'fîmes', 'fîtes', 'firent'],
            ['je', 'il/elle/on', 'ils/elles'],
          ),
          simpleTable(
            'venir-1',
            'venir',
            'to come',
            ['vins', 'vins', 'vint', 'vînmes', 'vîntes', 'vinrent'],
            ['il/elle/on', 'nous', 'ils/elles'],
          ),
          simpleTable(
            'prendre-1',
            'prendre',
            'to take',
            ['pris', 'pris', 'prit', 'prîmes', 'prîtes', 'prirent'],
            ['tu', 'il/elle/on', 'vous'],
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-infinitive',
      'quiz',
      {
        title: 'Which verb is it?',
        description: 'Find the infinitive behind a passé simple form.',
        tags: ['grammar', 'fr-c21-passe-simple'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          ['ils vinrent', 'venir', ['venir', 'vendre', 'vivre', 'vaincre']],
          ['il fut', 'être', ['être', 'fuir', 'fondre', 'fouler']],
          ['elles eurent', 'avoir', ['avoir', 'ouvrir', 'éteindre', 'essuyer']],
          ['il fit', 'faire', ['faire', 'finir', 'fixer', 'fendre']],
          ['nous vîmes', 'voir', ['voir', 'venir', 'vivre', 'vouloir']],
          ['elle prit', 'prendre', ['prendre', 'prier', 'prévoir', 'produire']],
          ['ils dirent', 'dire', ['dire', 'devoir', 'dormir', 'danser']],
          ['elle naquit', 'naître', ['naître', 'nager', 'nuire', 'nettoyer']],
        ].map(([prompt, answer, options], i) => ({
          id: `v${i + 1}`,
          prompt: prompt as string,
          answer: answer as string,
          options: options as string[],
        })),
      },
    ),

    activity(
      U,
      'sort-speech-novel',
      'sortit',
      {
        title: 'In conversation or in a novel?',
        description: 'The same events are told differently when you speak and when you write.',
        tags: ['grammar', 'fr-c21-narrative-tenses'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        instruction: 'Where would you say or read this?',
        buckets: [
          { id: 'speech', label: 'In conversation', emoji: '💬' },
          { id: 'novel', label: 'In a novel', emoji: '📖' },
        ],
        items: registerItems.map(([text, bucket, translation], i) => ({
          id: `r${i + 1}`,
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
        title: 'Tell it in order',
        description: 'Build sentences in the tenses of a story.',
        tags: ['grammar', 'fr-c21-narrative-tenses'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'When he had finished his speech, the crowd applauded.',
            words: [
              'Quand',
              'il',
              'eut',
              'terminé',
              'son',
              'discours,',
              'la',
              'foule',
              'applaudit.',
            ],
          },
          {
            id: 's2',
            translation: 'She looked out of the window; it was raining.',
            words: ['Elle', 'regarda', 'par', 'la', 'fenêtre ;', 'il', 'pleuvait.'],
          },
          {
            id: 's3',
            translation: 'Hardly had he arrived when the storm broke.',
            words: ['À', 'peine', 'fut-il', 'arrivé', 'que', 'l’orage', 'éclata.'],
          },
          {
            id: 's4',
            translation: 'At nightfall they turned back.',
            words: ['À', 'la', 'tombée', 'de', 'la', 'nuit,', 'ils', 'rebroussèrent', 'chemin.'],
          },
          {
            id: 's5',
            translation: 'He changed his mind on the spot.',
            words: ['Il', 'se', 'ravisa', 'sur-le-champ.'],
          },
          {
            id: 's6',
            translation: 'A cry rang out and everyone rushed up.',
            words: ['Un', 'cri', 'retentit', 'et', 'tout', 'le', 'monde', 'accourut.'],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Tell it your way',
        description: 'A weekend story told aloud, a novel opening and a history lesson.',
        tags: ['communication', 'fr-c21-narration'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'weekend',
            title: 'Tell me about your weekend',
            emoji: '💬',
            setting: 'Léa is your friend. You tell her your weekend out loud.',
            turns: [
              {
                kind: 'npc',
                who: 'Léa',
                text: 'Raconte-moi ton week-end !',
                translation: 'Tell me about your weekend!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Samedi, il pleuvait, alors on est restés à la maison.', correct: true },
                  {
                    text: 'Samedi, il plut, alors nous restâmes à la maison.',
                    correct: false,
                    feedback:
                      'The passé simple sounds bookish aloud: speak with passé composé and imparfait.',
                  },
                  {
                    text: 'Samedi, il pleuvra, alors on restera à la maison.',
                    correct: false,
                    feedback: 'That is the future, but the weekend is over.',
                  },
                ],
              },
              { kind: 'npc', who: 'Léa', text: 'Et dimanche ?', translation: 'And Sunday?' },
              {
                kind: 'you',
                options: [
                  { text: 'Dimanche, on est allés à la plage.', correct: true },
                  {
                    text: 'Dimanche, nous allâmes à la plage.',
                    correct: false,
                    feedback: 'In conversation, avoid the passé simple of the first person plural.',
                  },
                ],
              },
            ],
          },
          {
            id: 'novel',
            title: 'The opening of a novel',
            emoji: '📖',
            setting: 'Your editor reads the start: « Il était minuit. La ville dormait. »',
            turns: [
              {
                kind: 'npc',
                who: 'Éditrice',
                text: 'Bien. Et ensuite, que se passe-t-il ?',
                translation: 'Good. And what happens next?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Soudain, un cri retentit dans la nuit.', correct: true },
                  {
                    text: 'Soudain, un cri retentissait dans la nuit.',
                    correct: false,
                    feedback: 'A sudden event moves the story on: passé simple, not imparfait.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Éditrice',
                text: 'Et le héros, que fait-il ?',
                translation: 'And the hero, what does he do?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il se leva, ouvrit la fenêtre et écouta.', correct: true },
                  {
                    text: 'Il se levait, ouvrait la fenêtre et écoutait.',
                    correct: false,
                    feedback: 'A chain of actions needs the passé simple for each step.',
                  },
                ],
              },
            ],
          },
          {
            id: 'history',
            title: 'A lively history lesson',
            emoji: '🏛️',
            setting: 'A teacher asks how to make a historical account more vivid.',
            turns: [
              {
                kind: 'npc',
                who: 'Le professeur',
                text: 'Comment rend-on le récit de l’histoire plus vivant ?',
                translation: 'How do you make an account of history livelier?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Avec le présent historique : « En 1789, le peuple prend la Bastille. »',
                    correct: true,
                  },
                  {
                    text: 'Avec le futur antérieur : « En 1789, le peuple aura pris la Bastille. »',
                    correct: false,
                    feedback: 'The future perfect looks ahead; it does not narrate the past.',
                  },
                  {
                    text: 'Avec le conditionnel : « En 1789, le peuple prendrait la Bastille. »',
                    correct: false,
                    feedback: 'The conditional signals doubt or hearsay, not vividness.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Le professeur',
                text: 'Peut-on raconter toute une histoire au présent ?',
                translation: 'Can you tell a whole story in the present?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Non, il alterne avec des temps du passé pour le décor.',
                    correct: true,
                  },
                  {
                    text: 'Oui, il remplace tous les autres temps.',
                    correct: false,
                    feedback:
                      'The historic present alternates with past tenses; it cannot carry the narrative alone.',
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
        title: 'Narrative blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-passe-simple', 'fr-c21-narrative-tenses'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'The passé simple is mainly a written tense.', isTrue: true },
          {
            id: 'b2',
            text: 'The imparfait pushes the story forward event by event.',
            isTrue: false,
            explanation: 'The passé simple moves the story on; the imparfait gives the background.',
          },
          { id: 'b3', text: '“Il fut” is the passé simple of “être”.', isTrue: true },
          { id: 'b4', text: '“Ils vinrent” comes from “venir”.', isTrue: true },
          {
            id: 'b5',
            text: '“Nous parlâmes” is the passé simple of “parler”.',
            isTrue: true,
          },
          {
            id: 'b6',
            text: 'The passé antérieur is built with the imparfait of avoir or être.',
            isTrue: false,
            explanation: 'It uses the passé simple of the auxiliary: il eut fini.',
          },
          {
            id: 'b7',
            text: '“Dès qu’il eut fini, il partit” uses the passé antérieur.',
            isTrue: true,
          },
          {
            id: 'b8',
            text: 'In a friendly chat you naturally say “nous allâmes”.',
            isTrue: false,
            explanation: 'In conversation use the passé composé: on est allés, nous sommes allés.',
          },
          { id: 'b9', text: 'The historic present makes past events feel vivid.', isTrue: true },
          {
            id: 'b10',
            text: 'A whole narrative can be told in the historic present alone.',
            isTrue: false,
            explanation: 'It alternates with past tenses.',
          },
          {
            id: 'b11',
            text: '“À peine” can open a sentence with inversion: À peine fut-il arrivé…',
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
        tags: ['vocabulary', 'grammar', 'fr-c21-passe-simple', 'fr-c21-narrative-tenses'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Passé simple of “ils/elles” + chanter:',
            options: ['chantèrent', 'chantaient', 'chanteront', 'ont chanté'],
            answer: 'chantèrent',
            lesson: 'fr-c21-passe-simple',
          },
          {
            id: 'c2',
            prompt: 'Passé simple of “nous” + avoir:',
            options: ['eûmes', 'avions', 'aurons', 'avons eu'],
            answer: 'eûmes',
            lesson: 'fr-c21-passe-simple',
          },
          {
            id: 'c3',
            prompt: 'The passé antérieur of “finir”, third person singular:',
            options: ['il eut fini', 'il avait fini', 'il finit', 'il a fini'],
            answer: 'il eut fini',
            lesson: 'fr-c21-passe-simple',
          },
          {
            id: 'c4',
            prompt: 'Which tense gives the background of a scene in a story?',
            options: ['l’imparfait', 'le passé simple', 'le passé antérieur', 'le futur'],
            answer: 'l’imparfait',
            lesson: 'fr-c21-narrative-tenses',
          },
          {
            id: 'c5',
            prompt: 'Which verb means “to appear suddenly”?',
            options: ['surgir', 'demeurer', 's’ensuivre', 'se dérouler'],
            answer: 'surgir',
          },
          {
            id: 'c6',
            prompt: 'Which expression means “at nightfall”?',
            options: ['à la tombée de la nuit', 'à l’aube', 'sur-le-champ', 'au bout de'],
            answer: 'à la tombée de la nuit',
          },
          {
            id: 'c7',
            prompt: 'You tell friends about last weekend. Which sentence sounds natural?',
            options: [
              'On est allés au cinéma.',
              'Nous allâmes au cinéma.',
              'On allera au cinéma.',
              'On irait au cinéma.',
            ],
            answer: 'On est allés au cinéma.',
            lesson: 'fr-c21-narrative-tenses',
          },
          {
            id: 'c8',
            prompt: '“En 1789, le peuple prend la Bastille” uses …',
            options: ['the historic present', 'the passé simple', 'the future', 'the imparfait'],
            answer: 'the historic present',
            lesson: 'fr-c21-narrative-tenses',
          },
        ],
      },
    ),
  ],
};
