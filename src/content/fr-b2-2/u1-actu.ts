import { activity, byDe, flashcards, listen, memory, quizDeEn, vocabList } from '../builders';
import { unitFr, type UnitContent } from './helpers';

const U = 'fr-b2-2-actu';

const press = vocabList(U, 'The press and the news', [
  ['l’actualité', 'the news, current affairs', '📰'],
  ['la presse écrite', 'the print press', '🗞️'],
  ['un quotidien', 'a daily newspaper', '📅'],
  ['un hebdomadaire', 'a weekly magazine', '📖'],
  ['la une', 'the front page', '🔝'],
  ['un gros titre', 'a headline', '🔠'],
  ['un éditorial', 'an editorial', '✍️'],
  ['un reportage', 'a news report', '🎥'],
  ['une enquête', 'an investigation', '🔎'],
  ['une dépêche', 'a news agency wire', '📠'],
  ['un correspondant', 'a correspondent', '🌍'],
  ['la rédaction', 'the editorial team, the newsroom', '🏢'],
  ['un abonné', 'a subscriber', '🔔'],
  ['une chaîne d’info en continu', 'a rolling news channel', '📺'],
]);

const disinfo = vocabList(U, 'Disinformation and fact-checking', [
  ['la désinformation', 'disinformation', '🎭'],
  ['une rumeur', 'a rumour', '🗣️'],
  ['un canular', 'a hoax', '🃏'],
  ['la propagande', 'propaganda', '📢'],
  ['une photo truquée', 'a doctored photo', '🖼️'],
  ['un lanceur d’alerte', 'a whistleblower', '🚨'],
  ['un algorithme', 'an algorithm', '🧮'],
  ['une bulle de filtres', 'a filter bubble', '🫧'],
  ['la censure', 'censorship', '🚫'],
  ['la liberté de la presse', 'freedom of the press', '🕊️'],
  ['vérifier', 'to check, to verify', '✅'],
  ['recouper', 'to cross-check (sources)', '🔀'],
  ['démentir', 'to deny, to refute', '❌'],
  ['décrypter', 'to decode, to analyse closely', '🔓'],
  ['relayer', 'to pass on, to share', '🔁'],
  ['fiable', 'reliable', '🛡️'],
]);

const verbs = vocabList(U, 'Verbs for reporting what people say', [
  ['affirmer', 'to state, to claim', '💬'],
  ['déclarer', 'to declare, to state', '🎙️'],
  ['annoncer', 'to announce', '📣'],
  ['préciser', 'to specify, to add for clarity', '🎯'],
  ['souligner', 'to stress, to point out', '🖍️'],
  ['rappeler', 'to remind, to recall', '⏰'],
  ['reconnaître', 'to admit, to acknowledge', '🙇'],
  ['avouer', 'to confess', '😬'],
  ['assurer', 'to assure, to maintain', '🤝'],
  ['prétendre', 'to claim (and doubt it)', '🤨'],
  ['nier', 'to deny', '🙅'],
  ['rétorquer', 'to retort', '↩️'],
  ['s’interroger sur', 'to wonder about, to question', '🤔'],
]);

const opinion = vocabList(U, 'Judging the media', [
  ['un parti pris', 'a bias, a fixed stance', '⚖️'],
  ['tendancieux', 'biased, tendentious', '↗️'],
  ['sensationnel', 'sensationalist', '⚡'],
  ['accrocheur', 'catchy, attention-grabbing', '🪝'],
  ['approfondi', 'in-depth', '🔬'],
  ['superficiel', 'superficial', '🌫️'],
  ['une polémique', 'a controversy', '🔥'],
  ['l’audience', 'the audience, the ratings', '📊'],
  ['la couverture médiatique', 'media coverage', '📡'],
  ['un sondage', 'an opinion poll', '📋'],
  ['l’esprit critique', 'critical thinking', '🧠'],
  ['s’informer', 'to keep oneself informed', '📚'],
]);

const vocab = [...press, ...disinfo, ...verbs, ...opinion];

const quizWords = byDe(
  vocab,
  'la une',
  'un gros titre',
  'une enquête',
  'la rédaction',
  'une rumeur',
  'un canular',
  'démentir',
  'recouper',
  'fiable',
  'prétendre',
  'avouer',
  'tendancieux',
  'approfondi',
  'un sondage',
);

type Gap = {
  id: string;
  text: string;
  answer: string;
  options: string[];
  translation: string;
  explanation: string;
  why?: Record<string, string>;
};

const reportedGaps: Gap[] = [
  {
    id: 'r1',
    text: 'Elle a dit qu’elle ___ fatiguée.',
    answer: 'était',
    options: ['était', 'est', 'sera', 'a été'],
    translation: 'She said she was tired. (« Je suis fatiguée. »)',
    explanation: 'After a past verb of saying, the present becomes the imparfait: est → était.',
    why: {
      est: 'The present stays only after a verb of saying in the present.',
      sera: 'The original is a present, not a future.',
      'a été': 'The original is a present, not a passé composé.',
    },
  },
  {
    id: 'r2',
    text: 'Il a affirmé qu’il ___ l’information.',
    answer: 'avait vérifié',
    options: ['avait vérifié', 'a vérifié', 'vérifiait', 'vérifierait'],
    translation: 'He stated that he had checked the information. (« J’ai vérifié l’information. »)',
    explanation: 'The passé composé becomes the plus-que-parfait: a vérifié → avait vérifié.',
    why: {
      'a vérifié': 'After a past verb the passé composé shifts back to the plus-que-parfait.',
      vérifiait: 'The imparfait would translate a present, not a passé composé.',
      vérifierait: 'The conditional translates a future, not a passé composé.',
    },
  },
  {
    id: 'r3',
    text: 'La journaliste a promis qu’elle ___ son enquête.',
    answer: 'publierait',
    options: ['publierait', 'publiera', 'publiait', 'avait publié'],
    translation:
      'The journalist promised she would publish her investigation. (« Je publierai … »)',
    explanation:
      'After a past verb the simple future becomes the conditional: publierai → publierait.',
    why: {
      publiera: 'In careful French the future shifts to the conditional after a past verb.',
      publiait: 'The imparfait would translate a present.',
      'avait publié': 'The plus-que-parfait would translate a passé composé.',
    },
  },
  {
    id: 'r4',
    text: 'Le journaliste explique que le dossier ___ complet.',
    answer: 'est',
    options: ['est', 'était', 'sera', 'serait'],
    translation: 'The journalist explains that the file is complete. (« Le dossier est complet. »)',
    explanation: 'When the verb of saying is in the present, the reported verb does not shift.',
    why: {
      était: 'No shift is needed after explique (present).',
      sera: 'The original is a present, not a future.',
      serait: 'No shift is needed after explique (present).',
    },
  },
  {
    id: 'r5',
    text: 'Elle a précisé qu’il ___ ce jour-là.',
    answer: 'pleuvait',
    options: ['pleuvait', 'pleut', 'pleuvrait', 'a plu'],
    translation: 'She specified that it was raining that day. (« Il pleuvait. »)',
    explanation:
      'The imparfait, the plus-que-parfait and the conditional do not change in reported speech.',
    why: {
      pleut: 'The original is already in the past (imparfait).',
      pleuvrait: 'That would translate a future.',
      'a plu': 'A passé composé does not fit after a past verb of saying.',
    },
  },
  {
    id: 'r6',
    text: 'Elle m’a demandé ___ j’avais lu l’article.',
    answer: 'si',
    options: ['si', 'que', 'ce que', 'ce qui'],
    translation: 'She asked me whether I had read the article. (« Tu as lu l’article ? »)',
    explanation: 'A yes/no question becomes a clause with si in reported speech.',
    why: {
      que: 'Que introduces a statement, not a yes/no question.',
      'ce que': 'Ce que replaces a question word (que / qu’est-ce que), not a yes/no question.',
      'ce qui': 'Ce qui replaces a question word, not a yes/no question.',
    },
  },
  {
    id: 'r7',
    text: 'Il a assuré qu’il ___ terminé avant midi.',
    answer: 'aurait',
    options: ['aurait', 'avait', 'aura', 'a'],
    translation: 'He assured us that he would have finished before noon. (« J’aurai terminé … »)',
    explanation:
      'The futur antérieur becomes the conditional passé: aurai terminé → aurait terminé.',
    why: {
      avait: 'That would give the plus-que-parfait, which translates a passé composé.',
      aura: 'The future shifts to the conditional after a past verb.',
      a: 'That would be a passé composé, which does not translate a futur antérieur.',
    },
  },
  {
    id: 'r8',
    text: 'Il a demandé ___ les lecteurs pensaient de cette rumeur.',
    answer: 'ce que',
    options: ['ce que', 'si', 'ce qui', 'que'],
    translation:
      'He asked what the readers thought of this rumour. (« Qu’est-ce que les lecteurs pensent … ? »)',
    explanation: 'Qu’est-ce que / que (object) becomes ce que in reported speech.',
    why: {
      si: 'Si is for yes/no questions; this question has a question word.',
      'ce qui': 'Ce qui replaces a subject (qu’est-ce qui); here the readers are the subject.',
      que: 'After demander, a question word needs ce que, not a bare que.',
    },
  },
];

const clefts: Gap[] = [
  {
    id: 'c1',
    text: 'C’est le journal ___ a publié l’enquête.',
    answer: 'qui',
    options: ['qui', 'que', 'dont', 'où'],
    translation: 'It is the paper that published the investigation.',
    explanation: 'The highlighted word is the subject of a publié: use qui.',
    why: {
      que: 'Que replaces an object, but le journal is the subject here.',
      dont: 'Dont replaces de + noun.',
      où: 'Où is for place or time.',
    },
  },
  {
    id: 'c2',
    text: 'C’est cette photo ___ tout le monde a partagée.',
    answer: 'que',
    options: ['que', 'qui', 'dont', 'où'],
    translation: 'It is this photo that everyone shared.',
    explanation: 'Cette photo is the object of a partagée: use que.',
    why: {
      qui: 'Qui replaces a subject; the subject of a partagé is tout le monde.',
      dont: 'Dont replaces de + noun.',
      où: 'Où is for place or time.',
    },
  },
  {
    id: 'c3',
    text: 'Ce ___ m’inquiète, c’est la vitesse des rumeurs.',
    answer: 'qui',
    options: ['qui', 'que', 'dont', 'quoi'],
    translation: 'What worries me is the speed of rumours.',
    explanation: 'Ce qui introduces the subject of m’inquiète.',
    why: {
      que: 'Ce que introduces an object; here ce is the subject of m’inquiète.',
      dont: 'Ce dont goes with a verb + de.',
      quoi: 'Quoi does not follow ce.',
    },
  },
  {
    id: 'c4',
    text: 'Ce ___ je veux, c’est une information vérifiée.',
    answer: 'que',
    options: ['que', 'qui', 'dont', 'quoi'],
    translation: 'What I want is verified information.',
    explanation: 'Ce que introduces the object of je veux.',
    why: {
      qui: 'Je is the subject of veux, so qui does not fit.',
      dont: 'Vouloir takes a direct object, no de.',
      quoi: 'Quoi does not follow ce.',
    },
  },
  {
    id: 'c5',
    text: 'Ce sont les réseaux sociaux ___ ont amplifié la polémique.',
    answer: 'qui',
    options: ['qui', 'que', 'dont', 'où'],
    translation: 'It is the social networks that amplified the controversy.',
    explanation: 'The highlighted plural is the subject of ont amplifié: ce sont … qui.',
    why: {
      que: 'Que replaces an object; the networks are the subject here.',
      dont: 'Dont replaces de + noun.',
      où: 'Où is for place or time.',
    },
  },
  {
    id: 'c6',
    text: 'Ce ___ nous avons besoin, c’est d’un débat honnête.',
    answer: 'dont',
    options: ['dont', 'que', 'qui', 'à quoi'],
    translation: 'What we need is an honest debate.',
    explanation: 'Avoir besoin de takes de, so the pronoun is ce dont.',
    why: {
      que: 'The verb avoir besoin needs de, which dont contains.',
      qui: 'Nous is the subject of avons, so qui does not fit.',
      'à quoi': 'Avoir besoin takes de, not à.',
    },
  },
  {
    id: 'c7',
    text: 'C’est la veille ___ le journal a démenti la nouvelle.',
    answer: 'que',
    options: ['que', 'qui', 'où', 'dont'],
    translation: 'It was the day before that the paper denied the news.',
    explanation: 'A time expression highlighted with c’est is followed by que, not qui or où.',
    why: {
      qui: 'Qui is only for a highlighted subject.',
      où: 'After c’est, a time or place complement takes que.',
      dont: 'Dont replaces de + noun.',
    },
  },
  {
    id: 'c8',
    text: 'C’est à la rédaction ___ j’ai envoyé ma lettre.',
    answer: 'que',
    options: ['que', 'qui', 'où', 'dont'],
    translation: 'It is to the newsroom that I sent my letter.',
    explanation: 'A highlighted place or indirect object with c’est is followed by que.',
    why: {
      qui: 'Qui is only for a highlighted subject.',
      où: 'After c’est, a place complement takes que.',
      dont: 'Dont replaces de + noun.',
    },
  },
];

const relatives: Gap[] = [
  {
    id: 'l1',
    text: 'Voici l’article sur ___ elle a travaillé.',
    answer: 'lequel',
    options: ['lequel', 'laquelle', 'lesquels', 'lesquelles'],
    translation: 'Here is the article she worked on.',
    explanation: 'After sur, a masculine singular thing needs lequel.',
    why: {
      laquelle: 'Article is masculine.',
      lesquels: 'Article is singular.',
      lesquelles: 'Article is masculine singular.',
    },
  },
  {
    id: 'l2',
    text: 'Le rapport ___ elle fait référence est faux.',
    answer: 'auquel',
    options: ['auquel', 'duquel', 'lequel', 'laquelle'],
    translation: 'The report she refers to is false.',
    explanation: 'Faire référence à + masculine singular: à + lequel = auquel.',
    why: {
      duquel: 'Faire référence takes à, not de.',
      lequel: 'À and lequel contract into auquel.',
      laquelle: 'Rapport is masculine.',
    },
  },
  {
    id: 'l3',
    text: 'Les journalistes avec ___ il travaille sont indépendants.',
    answer: 'lesquels',
    options: ['lesquels', 'lesquelles', 'lequel', 'auxquels'],
    translation: 'The journalists he works with are independent.',
    explanation: 'After avec, masculine plural: lesquels (for people, avec qui also works).',
    why: {
      lesquelles: 'Journalistes is treated as masculine plural here.',
      lequel: 'Journalistes is plural.',
      auxquels: 'Avec does not contract with lesquels.',
    },
  },
  {
    id: 'l4',
    text: 'Les articles ___ elle s’intéresse sont rares.',
    answer: 'auxquels',
    options: ['auxquels', 'lesquels', 'desquels', 'auquel'],
    translation: 'The articles she is interested in are rare.',
    explanation: 'S’intéresser à + masculine plural: à + lesquels = auxquels.',
    why: {
      lesquels: 'S’intéresser needs à, which contracts into auxquels.',
      desquels: 'S’intéresser takes à, not de.',
      auquel: 'Articles is plural.',
    },
  },
  {
    id: 'l5',
    text: 'Le sondage à la suite ___ le ministre a démissionné était faux.',
    answer: 'duquel',
    options: ['duquel', 'lequel', 'auquel', 'dont'],
    translation: 'The poll after which the minister resigned was false.',
    explanation: 'À la suite de + masculine singular: de + lequel = duquel.',
    why: {
      lequel: 'De and lequel contract into duquel.',
      auquel: 'The locution takes de, not à.',
      dont: 'Dont cannot follow a prepositional phrase such as à la suite de.',
    },
  },
  {
    id: 'l6',
    text: 'Les raisons pour ___ il a menti restent floues.',
    answer: 'lesquelles',
    options: ['lesquelles', 'lesquels', 'laquelle', 'dont'],
    translation: 'The reasons why he lied remain vague.',
    explanation: 'After pour, a feminine plural thing needs lesquelles.',
    why: {
      lesquels: 'Raisons is feminine.',
      laquelle: 'Raisons is plural.',
      dont: 'Dont replaces de + noun, not pour + noun.',
    },
  },
];

/** [phrase, bucket, English] for the direct / reported time words sort */
const TIME_CARDS: [string, 'direct' | 'reported', string][] = [
  ['demain', 'direct', 'tomorrow'],
  ['hier', 'direct', 'yesterday'],
  ['ici', 'direct', 'here'],
  ['maintenant', 'direct', 'now'],
  ['aujourd’hui', 'direct', 'today'],
  ['ce soir', 'direct', 'this evening'],
  ['le lendemain', 'reported', 'the next day'],
  ['la veille', 'reported', 'the day before'],
  ['là', 'reported', 'there'],
  ['à ce moment-là', 'reported', 'at that moment'],
  ['ce jour-là', 'reported', 'that day'],
  ['ce soir-là', 'reported', 'that evening'],
];

export const actu: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'Informer et s’informer',
    subtitle: 'Talk about the press, spot disinformation and report what others said',
    emoji: '📰',
    goals: [
      'Describe the press and the news and judge how media report',
      'Name the tools of fact-checking and talk about disinformation',
      'Report what someone said and highlight the point you want to stress',
    ],
    grammar: [
      'Reported speech: the shift of tenses and time words',
      'Highlighting with c’est … qui / que and ce qui / ce que … c’est',
      'Composed relative pronouns: lequel, auquel, duquel',
    ],
    vocabFields: [
      'The press and the news',
      'Disinformation and fact-checking',
      'Verbs for reporting what people say',
      'Judging the media',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-press',
      'flashcards',
      {
        title: 'The press and the news',
        description: 'Newspapers, reports and the people who write them.',
        tags: ['vocabulary', 'fr-b22-news'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(press),
    ),

    activity(
      U,
      'flash-disinfo',
      'flashcards',
      {
        title: 'Disinformation and fact-checking',
        description: 'Rumours, hoaxes and the words for checking them.',
        tags: ['vocabulary', 'fr-b22-disinformation'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(disinfo),
    ),

    activity(
      U,
      'flash-verbs',
      'flashcards',
      {
        title: 'Verbs for reporting speech',
        description: 'Affirmer, prétendre, reconnaître: say how someone spoke.',
        tags: ['vocabulary', 'fr-b22-news'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(verbs),
    ),

    activity(
      U,
      'flash-opinion',
      'flashcards',
      {
        title: 'Judging the media',
        description: 'Say whether coverage is in-depth, biased or sensationalist.',
        tags: ['vocabulary', 'fr-b22-news'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(opinion),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Pick the English meaning of the French word.',
        tags: ['vocabulary', 'fr-b22-news', 'fr-b22-disinformation'],
        difficulty: 2,
        estMinutes: 4,
      },
      quizDeEn(quizWords, vocab),
    ),

    activity(
      U,
      'memory-press',
      'memory',
      {
        title: 'Match the press words',
        description: 'Match each French word with its English meaning.',
        tags: ['vocabulary', 'fr-b22-news'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          press,
          'un quotidien',
          'un hebdomadaire',
          'un reportage',
          'une enquête',
          'une dépêche',
          'la une',
          'un éditorial',
          'la rédaction',
        ),
      ),
    ),

    activity(
      U,
      'listen-disinfo',
      'listen',
      {
        title: 'Listen and pick the meaning',
        description: 'Listen to the word and pick what it means.',
        tags: ['listening', 'fr-b22-disinformation'],
        difficulty: 2,
        estMinutes: 4,
      },
      listen(
        byDe(
          vocab,
          'une rumeur',
          'un canular',
          'démentir',
          'une dépêche',
          'un sondage',
          'la censure',
          'recouper',
          'une polémique',
        ),
        vocab,
      ),
    ),

    activity(
      U,
      'gap-reported',
      'gapfill',
      {
        title: 'What did she say?',
        description: 'Shift the tense when you report what someone said.',
        tags: ['grammar', 'fr-b22-reported-speech', 'fr-b22-news'],
        difficulty: 2,
        estMinutes: 5,
        lesson: 'fr-b22-reported-speech',
      },
      { items: reportedGaps },
    ),

    activity(
      U,
      'sort-time-words',
      'sortit',
      {
        title: 'Time words in reported speech',
        description: 'Which time and place words belong to direct, which to reported speech?',
        tags: ['grammar', 'fr-b22-reported-speech'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-b22-reported-speech',
      },
      {
        instruction: 'Does the word belong to the speaker’s own words or to the report?',
        buckets: [
          { id: 'direct', label: 'direct speech: « … »', emoji: '💬' },
          { id: 'reported', label: 'reported speech: il a dit que …', emoji: '📝' },
        ],
        items: TIME_CARDS.map(([text, bucket, translation], i) => ({
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
      'gap-cleft',
      'gapfill',
      {
        title: 'Put it in the spotlight',
        description: 'Stress a word with c’est … qui / que or ce qui / ce que … c’est.',
        tags: ['grammar', 'fr-b22-cleft', 'fr-b22-disinformation'],
        difficulty: 2,
        estMinutes: 5,
        lesson: 'fr-b22-cleft',
      },
      { items: clefts },
    ),

    activity(
      U,
      'gap-relative',
      'gapfill',
      {
        title: 'lequel, auquel or duquel?',
        description: 'Pick the composed relative pronoun that follows the preposition.',
        tags: ['grammar', 'fr-b22-relative-composed', 'fr-b22-news'],
        difficulty: 3,
        estMinutes: 5,
        lesson: 'fr-b22-relative-composed',
      },
      { items: relatives },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'fr-b22-news'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'He stated that he had checked the information.',
            words: ['Il', 'a', 'affirmé', 'qu’il', 'avait', 'vérifié', 'l’information.'],
            extra: ['vérifiera'],
            lesson: 'fr-b22-reported-speech',
          },
          {
            id: 's2',
            translation: 'She asked me whether I had read the editorial.',
            words: ['Elle', 'm’a', 'demandé', 'si', 'j’avais', 'lu', 'l’éditorial.'],
            extra: ['que'],
            lesson: 'fr-b22-reported-speech',
          },
          {
            id: 's3',
            translation: 'She reminded us that the investigation had lasted a year.',
            words: ['Elle', 'a', 'rappelé', 'que', 'l’enquête', 'durait', 'depuis', 'un', 'an.'],
            extra: ['durera'],
            lesson: 'fr-b22-reported-speech',
          },
          {
            id: 's4',
            translation: 'It is the newsroom that denied this rumour.',
            words: ['C’est', 'la', 'rédaction', 'qui', 'a', 'démenti', 'cette', 'rumeur.'],
            extra: ['que'],
            lesson: 'fr-b22-cleft',
          },
          {
            id: 's5',
            translation: 'What I want is a reliable source.',
            words: ['Ce', 'que', 'je', 'veux,', 'c’est', 'une', 'source', 'fiable.'],
            extra: ['qui'],
            lesson: 'fr-b22-cleft',
          },
          {
            id: 's6',
            translation: 'The article she refers to is false.',
            words: ['L’article', 'auquel', 'elle', 'fait', 'référence', 'est', 'faux.'],
            extra: ['lequel'],
            lesson: 'fr-b22-relative-composed',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-press',
      'spell',
      {
        title: 'Spell press words',
        description: 'Unscramble, type or write what you hear. Accents are optional here.',
        tags: ['spelling', 'fr-b22-news', 'fr-b22-disinformation'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'sp-desinformation',
            mode: 'unscramble',
            answer: 'désinformation',
            hint: 'disinformation',
            emoji: '🎭',
            speak: 'la désinformation',
          },
          {
            id: 'sp-redaction',
            mode: 'unscramble',
            answer: 'rédaction',
            hint: 'the newsroom',
            emoji: '🏢',
            speak: 'la rédaction',
          },
          {
            id: 'sp-hebdomadaire',
            mode: 'type',
            answer: 'hebdomadaire',
            hint: 'a weekly magazine',
            emoji: '📖',
            speak: 'un hebdomadaire',
          },
          {
            id: 'sp-propagande',
            mode: 'type',
            answer: 'propagande',
            hint: 'propaganda',
            emoji: '📢',
            speak: 'la propagande',
          },
          {
            id: 'sp-veille',
            mode: 'dictation',
            answer: 'la veille',
            hint: 'Type what you hear (the day before)',
            speak: 'la veille',
          },
          {
            id: 'sp-rumeur',
            mode: 'dictation',
            answer: 'Elle a démenti la rumeur.',
            hint: 'Type what you hear (a whole sentence)',
            speak: 'Elle a démenti la rumeur.',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'In the newsroom and with friends',
        description: 'Check a source, report what someone said and stop a rumour.',
        tags: ['communication', 'fr-b22-news', 'fr-b22-disinformation'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'newsroom',
            title: 'Checking a news wire',
            emoji: '🏢',
            setting: 'You work on a news site. Your editor Camille talks to you. You say tu.',
            turns: [
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Cette dépêche dit que le pont a été fermé. Tu as vérifié l’information ?',
                translation:
                  'This wire says that the bridge has been closed. Have you checked the information?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Pas encore, je vais recouper les sources.', correct: true },
                  {
                    text: 'Pas encore, je vais recoupe les sources.',
                    correct: false,
                    feedback: 'After aller the verb stays in the infinitive: recouper.',
                  },
                  {
                    text: 'Pas encore, je vais démentir les sources.',
                    correct: false,
                    feedback: 'Démentir means to deny. To cross-check sources is recouper.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Camille',
                text: 'Bien. Et le titre ? On veut un titre accrocheur, mais pas sensationnel.',
                translation:
                  'Good. And the headline? We want a catchy headline, but not a sensationalist one.',
              },
              {
                kind: 'you',
                options: [
                  { text: 'D’accord, je propose un titre clair et précis.', correct: true },
                  {
                    text: 'D’accord, je propose un titre tendancieux.',
                    correct: false,
                    feedback: 'Tendancieux means biased: not what an honest newsroom wants.',
                  },
                  {
                    text: 'D’accord, je propose un titre propagande.',
                    correct: false,
                    feedback:
                      'Propagande is a noun; it cannot describe the headline like an adjective.',
                  },
                ],
              },
            ],
          },
          {
            id: 'report',
            title: 'Telling a friend what was said',
            emoji: '🎙️',
            setting: 'Your friend Inès asks about last night’s interview. You say tu.',
            turns: [
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Tu as écouté le ministre hier soir ? Qu’est-ce qu’il a dit ?',
                translation: 'Did you listen to the minister last night? What did he say?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il a annoncé qu’il présenterait un plan.', correct: true },
                  {
                    text: 'Il a annoncé qu’il présentait un plan.',
                    correct: false,
                    feedback:
                      'The imparfait says what was happening. A future plan becomes the conditional: présenterait.',
                  },
                  {
                    text: 'Il a annoncé qu’il présentera un plan.',
                    correct: false,
                    feedback:
                      'In careful French the future shifts to the conditional after a past verb: présenterait.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Et les journalistes, ils lui ont demandé quoi ?',
                translation: 'And the journalists, what did they ask him?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Ils lui ont demandé s’il avait menti.', correct: true },
                  {
                    text: 'Ils lui ont demandé qu’il avait menti.',
                    correct: false,
                    feedback: 'A yes/no question becomes a clause with si in reported speech.',
                  },
                  {
                    text: 'Ils lui ont demandé s’il a menti.',
                    correct: false,
                    feedback:
                      'After a past verb the passé composé becomes the plus-que-parfait: avait menti.',
                  },
                ],
              },
            ],
          },
          {
            id: 'photo',
            title: 'A photo going round',
            emoji: '🖼️',
            setting: 'Your friend Malik wants to share a photo that is going viral. You say tu.',
            turns: [
              {
                kind: 'npc',
                who: 'Malik',
                text: 'Regarde cette photo ! Elle fait le tour des réseaux. Je la relaie ?',
                translation:
                  'Look at this photo! It is going round the networks. Shall I share it?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Attends, elle est peut-être truquée. Vérifions d’abord.',
                    correct: true,
                  },
                  {
                    text: 'Oui, relaie-la tout de suite, c’est sûr !',
                    correct: false,
                    feedback: 'Nobody has checked a source yet: sharing now may spread a hoax.',
                  },
                  {
                    text: 'Oui, fais-le : le titre est accrocheur, donc fiable.',
                    correct: false,
                    feedback: 'A catchy headline says nothing about whether the news is reliable.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Malik',
                text: 'D’accord. Mais comment on vérifie ça ?',
                translation: 'Okay. But how do we check that?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'On cherche la source d’origine et on recoupe avec d’autres médias.',
                    correct: true,
                  },
                  {
                    text: 'On demande à l’algorithme de la démentir.',
                    correct: false,
                    feedback: 'An algorithm does not check facts for you.',
                  },
                  {
                    text: 'On regarde seulement le nombre de partages.',
                    correct: false,
                    feedback: 'The number of shares measures popularity, not truth.',
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
        title: 'Press and grammar blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'grammar', 'fr-b22-news'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 50,
        statements: [
          { id: 'b1', text: '“Un quotidien” is a daily newspaper.', isTrue: true },
          {
            id: 'b2',
            text: '“Un hebdomadaire” comes out every day.',
            isTrue: false,
            explanation: 'Un hebdomadaire is a weekly. A daily is un quotidien.',
          },
          {
            id: 'b3',
            text: '“Démentir” means “to confirm”.',
            isTrue: false,
            explanation: 'Démentir means to deny or refute.',
          },
          {
            id: 'b4',
            text: 'After “Elle a dit que …”, “il est fatigué” becomes “il était fatigué”.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: '“Elle a annoncé qu’elle démissionnerait” reports a future.',
            isTrue: true,
          },
          {
            id: 'b6',
            text: 'In reported speech, “demain” becomes “le lendemain”.',
            isTrue: true,
          },
          {
            id: 'b7',
            text: '“Prétendre” is a neutral verb of saying.',
            isTrue: false,
            explanation: 'Prétendre signals doubt: he claims it, but is it true?',
          },
          {
            id: 'b8',
            text: 'In “C’est la presse qui a révélé l’affaire”, qui stands for the subject.',
            isTrue: true,
          },
          {
            id: 'b9',
            text: '“C’est cette rumeur que a circulé” is correct.',
            isTrue: false,
            explanation: 'The highlighted word is the subject: c’est cette rumeur qui a circulé.',
          },
          {
            id: 'b10',
            text: '“Ce que j’ai besoin, c’est d’un démenti” is correct.',
            isTrue: false,
            explanation: 'Avoir besoin de needs de: ce dont j’ai besoin, c’est d’un démenti.',
          },
          { id: 'b11', text: '“Auquel” is the contraction of “à” and “lequel”.', isTrue: true },
          {
            id: 'b12',
            text: '“La veille” means “the next day”.',
            isTrue: false,
            explanation: 'La veille is the day before. The next day is le lendemain.',
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
        tags: ['vocabulary', 'grammar', 'fr-b22-news'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Report: Elle a dit : « Je pars demain. » → Elle a dit qu’elle partait …',
            options: ['le lendemain', 'demain', 'hier', 'la veille'],
            answer: 'le lendemain',
            lesson: 'fr-b22-reported-speech',
          },
          {
            id: 'c2',
            prompt:
              'Report: Il a expliqué : « J’ai lu le rapport. » → Il a expliqué qu’il … le rapport.',
            options: ['avait lu', 'a lu', 'lisait', 'lirait'],
            answer: 'avait lu',
            lesson: 'fr-b22-reported-speech',
          },
          {
            id: 'c3',
            prompt: 'Complete: “C’est le journal ___ a révélé l’affaire.”',
            options: ['qui', 'que', 'dont', 'où'],
            answer: 'qui',
            lesson: 'fr-b22-cleft',
          },
          {
            id: 'c4',
            prompt: 'Complete: “Ce ___ elle a peur, c’est de la désinformation.”',
            options: ['dont', 'que', 'qui', 'quoi'],
            answer: 'dont',
            lesson: 'fr-b22-cleft',
          },
          {
            id: 'c5',
            prompt: 'Complete: “Les sources ___ je me fie sont fiables.”',
            options: ['auxquelles', 'lesquelles', 'desquelles', 'dont'],
            answer: 'auxquelles',
            lesson: 'fr-b22-relative-composed',
          },
          {
            id: 'c6',
            prompt: 'Which verb says that someone claims something and you doubt it?',
            options: ['prétendre', 'affirmer', 'assurer', 'déclarer'],
            answer: 'prétendre',
          },
          {
            id: 'c7',
            prompt: 'A “titre accrocheur” is a headline that …',
            options: ['grabs attention', 'is false', 'is very long', 'is in-depth'],
            answer: 'grabs attention',
          },
          {
            id: 'c8',
            prompt:
              'Report: Elle m’a demandé : « Tu as vu le reportage ? » → Elle m’a demandé … j’avais vu le reportage.',
            options: ['si', 'que', 'ce que', 'ce qui'],
            answer: 'si',
            lesson: 'fr-b22-reported-speech',
          },
          {
            id: 'c9',
            prompt: '“Recouper des sources” means …',
            options: [
              'to compare several sources to confirm a fact',
              'to delete a source',
              'to quote a source',
              'to hide a source',
            ],
            answer: 'to compare several sources to confirm a fact',
          },
        ],
      },
    ),
  ],
};
