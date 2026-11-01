import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import { subjTable, unitFr, type UnitContent } from './helpers';

const U = 'fr-b1-1-ensemble';

const housing = vocabList(U, 'Housing and neighbours', [
  ['emménager', 'to move in', '📦'],
  ['déménager', 'to move out, to move house', '🚚'],
  ['le locataire', 'tenant', '🔑'],
  ['le propriétaire', 'owner, landlord', '🏠'],
  ['le loyer', 'rent', '💶'],
  ['les charges', 'service charges', '🧾'],
  ['la colocation', 'flat share', '👯'],
  ['le colocataire', 'flatmate', '🛋️'],
  ['l’immeuble', 'block of flats', '🏢'],
  ['le palier', 'landing', '🪜'],
  ['l’ascenseur', 'lift', '🛗'],
  ['le gardien', 'caretaker', '🧑‍🔧'],
  ['le voisin', 'neighbour', '🧑‍🤝‍🧑'],
  ['le bruit', 'noise', '🔊'],
  ['la cour', 'courtyard', '🌳'],
]);

const living = vocabList(U, 'Living together', [
  ['partager', 'to share', '🤝'],
  ['rendre service', 'to do someone a favour', '🙌'],
  ['un coup de main', 'a helping hand', '🖐️'],
  ['la fête des voisins', 'neighbours’ party', '🎉'],
  ['s’entendre bien', 'to get along well', '😊'],
  ['respecter', 'to respect', '🙇'],
  ['déranger', 'to disturb', '🙉'],
  ['se plaindre', 'to complain', '😤'],
  ['le vivre-ensemble', 'living together, community spirit', '🏘️'],
  ['la convivialité', 'friendly atmosphere', '🥂'],
  ['accueillir', 'to welcome', '🚪'],
  ['le règlement', 'house rules, regulations', '📜'],
  ['le tapage nocturne', 'night-time disturbance', '🌙'],
  ['un malentendu', 'a misunderstanding', '🤷'],
]);

const phrases = vocabList(U, 'Interest, advice and good wishes', [
  ['Ça m’intéresse beaucoup.', 'That interests me a lot.', '🤩'],
  ['Ça a l’air passionnant !', 'That sounds fascinating!', '✨'],
  ['Raconte-moi ça !', 'Tell me about it!', '🗣️'],
  ['Il est interdit de …', 'It is forbidden to …', '🚫'],
  ['On a le droit de …', 'We are allowed to …', '✅'],
  ['Il faut que …', 'It is necessary that …', '❗'],
  ['Il vaut mieux que …', 'It is better if …', '💡'],
  ['Je te conseille de …', 'I advise you to …', '🧭'],
  ['Félicitations !', 'Congratulations!', '🎊'],
  ['Tous mes vœux de bonheur !', 'All my best wishes for your happiness!', '💐'],
  ['Je te souhaite une bonne installation.', 'I wish you a good settling in.', '🏡'],
  ['Bonne continuation !', 'All the best for what comes next!', '🍀'],
]);

const vocab = [...housing, ...living, ...phrases];

const pictureQuiz = byDe(
  housing,
  'l’ascenseur',
  'l’immeuble',
  'le loyer',
  'le bruit',
  'déménager',
  'la cour',
);

/** [sentence, bucket, English] for the obligation / ban / permission sort */
const RULE_CARDS: [string, 'must' | 'banned' | 'allowed', string][] = [
  ['Il faut que tu fermes la porte.', 'must', 'You have to close the door.'],
  ['Vous devez payer le loyer le 5.', 'must', 'You must pay the rent on the 5th.'],
  ['Il faut trier les déchets.', 'must', 'You have to sort the rubbish.'],
  ['Il est obligatoire de signer le règlement.', 'must', 'You are required to sign the rules.'],
  ['Il est interdit de fumer sur le palier.', 'banned', 'Smoking on the landing is forbidden.'],
  [
    'On ne doit pas faire de bruit après 22 heures.',
    'banned',
    'You must not make noise after 10 pm.',
  ],
  [
    'Il est défendu de jeter des papiers dans la cour.',
    'banned',
    'Throwing paper into the courtyard is not allowed.',
  ],
  [
    'Il ne faut pas laisser de vélo dans l’escalier.',
    'banned',
    'You must not leave a bike on the stairs.',
  ],
  ['On a le droit d’inviter des amis.', 'allowed', 'You are allowed to invite friends.'],
  ['Vous pouvez utiliser la cour.', 'allowed', 'You may use the courtyard.'],
  [
    'Il est permis de recevoir des invités le week-end.',
    'allowed',
    'Having guests at the weekend is allowed.',
  ],
  ['Tu peux utiliser ma machine à laver.', 'allowed', 'You can use my washing machine.'],
];

/** [root, bucket, English] for the in- / im- / il- / ir- sort */
const PREFIX_CARDS: [string, 'in' | 'im' | 'il' | 'ir', string][] = [
  ['utile', 'in', 'useful → inutile'],
  ['connu', 'in', 'known → inconnu'],
  ['correct', 'in', 'correct → incorrect'],
  ['possible', 'im', 'possible → impossible'],
  ['poli', 'im', 'polite → impoli'],
  ['mobile', 'im', 'mobile → immobile'],
  ['légal', 'il', 'legal → illégal'],
  ['lisible', 'il', 'legible → illisible'],
  ['limité', 'il', 'limited → illimité'],
  ['réel', 'ir', 'real → irréel'],
  ['régulier', 'ir', 'regular → irrégulier'],
  ['responsable', 'ir', 'responsible → irresponsable'],
];

/** [sentence, bucket, English] for the plus / jamais / que / rien-personne sort */
const NEGATION_CARDS: [string, 'plus' | 'jamais' | 'que' | 'nobody', string][] = [
  ['Je n’habite plus ici.', 'plus', 'I no longer live here.'],
  ['Il n’y a plus d’ascenseur.', 'plus', 'There is no lift any more.'],
  ['Nous ne sommes plus colocataires.', 'plus', 'We are no longer flatmates.'],
  ['Elle ne rend jamais service.', 'jamais', 'She never does anyone a favour.'],
  ['Ils ne participent jamais à la fête.', 'jamais', 'They never take part in the party.'],
  ['Tu ne respectes jamais le règlement.', 'jamais', 'You never respect the rules.'],
  ['Nous n’avons qu’une clé.', 'que', 'We have only one key.'],
  ['Il n’y a que deux chambres.', 'que', 'There are only two bedrooms.'],
  ['Je ne paie que les charges.', 'que', 'I only pay the service charges.'],
  ['Je ne vois personne sur le palier.', 'nobody', 'I see nobody on the landing.'],
  ['Il ne dit rien.', 'nobody', 'He says nothing.'],
  ['Personne ne répond.', 'nobody', 'Nobody answers.'],
];

export const ensemble: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'Vivre ensemble',
    subtitle: 'Live with neighbours and flatmates: rules, advice, good wishes',
    emoji: '🏘️',
    goals: [
      'Describe a flat and talk about neighbours and flatmates',
      'Say what you must, must not and may do',
      'Give advice and wish someone well',
    ],
    grammar: [
      'The present subjunctive after il faut que',
      'Obligation, ban and permission',
      'Giving advice',
      'ne … plus, jamais, rien, personne, que',
      'The prefixes in-, im-, il-, ir-',
    ],
    vocabFields: ['Housing and neighbours', 'Living together', 'Interest, advice and good wishes'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-housing',
      'flashcards',
      {
        title: 'Housing and neighbours',
        description: 'Moving in, renting and living in a block of flats.',
        tags: ['vocabulary', 'housing'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(housing),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      {
        title: 'Which word is this?',
        description: 'Look at the picture and pick the housing word.',
        tags: ['vocabulary', 'housing'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizEmoji(pictureQuiz, pictureQuiz, 4),
    ),

    activity(
      U,
      'listen-housing',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'housing'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          housing,
          'le locataire',
          'le propriétaire',
          'le loyer',
          'les charges',
          'le palier',
          'le gardien',
          'le colocataire',
        ),
        housing,
      ),
    ),

    activity(
      U,
      'flash-living',
      'flashcards',
      {
        title: 'Living together',
        description: 'Words for sharing, helping and getting along.',
        tags: ['vocabulary', 'living-together'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(living),
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      {
        title: 'Interest, advice and good wishes',
        description: 'Show interest, state a rule, give advice and congratulate.',
        tags: ['vocabulary', 'living-together', 'celebrations'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(phrases),
    ),

    activity(
      U,
      'sort-rules',
      'sortit',
      {
        title: 'Must, forbidden or allowed?',
        description: 'Sort the house rules by what they say.',
        tags: ['grammar', 'fr-obligation', 'living-together'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-obligation',
      },
      {
        instruction: 'Does the rule say you must, must not or may?',
        buckets: [
          { id: 'must', label: 'You must', emoji: '❗' },
          { id: 'banned', label: 'Forbidden', emoji: '🚫' },
          { id: 'allowed', label: 'Allowed', emoji: '✅' },
        ],
        items: RULE_CARDS.map(([text, bucket, translation], i) => ({
          id: `r${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-subjunctive',
      'gapfill',
      {
        title: 'Il faut que …',
        description: 'Put the verb in the subjunctive.',
        tags: ['grammar', 'fr-subjunctive', 'housing'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-subjunctive',
      },
      {
        items: [
          {
            id: 'sj1',
            text: 'Il faut que tu ___ la porte du palier.',
            answer: 'fermes',
            options: ['fermes', 'fermer', 'fermais', 'fermé'],
            translation: 'You have to close the door to the landing.',
            explanation: 'After il faut que the verb is conjugated: que tu fermes.',
            why: { fermer: 'After que the verb is conjugated, not an infinitive.' },
          },
          {
            id: 'sj2',
            text: 'Il faut que nous ___ le loyer avant le 5.',
            answer: 'payions',
            options: ['payions', 'payons', 'payer', 'payez'],
            translation: 'We have to pay the rent before the 5th.',
            explanation: 'The subjunctive of nous adds -ions to the stem: que nous payions.',
            why: { payons: 'Payons is the present indicative; after il faut que use payions.' },
          },
          {
            id: 'sj3',
            text: 'Il faut que vous ___ à la réunion des voisins.',
            answer: 'veniez',
            options: ['veniez', 'venez', 'venir', 'venais'],
            translation: 'You have to come to the neighbours’ meeting.',
            explanation: 'Vous takes the nous stem plus -iez: que vous veniez.',
            why: { venez: 'Venez is the present indicative; after il faut que use veniez.' },
          },
          {
            id: 'sj4',
            text: 'Il faut que le gardien ___ la clé.',
            answer: 'ait',
            options: ['ait', 'a', 'avoir', 'aie'],
            translation: 'The caretaker has to have the key.',
            explanation: 'Avoir has an irregular subjunctive: qu’il ait.',
            why: { a: 'A is the present indicative; the subjunctive of avoir is ait.' },
          },
          {
            id: 'sj5',
            text: 'Il faut que je ___ à l’heure demain.',
            answer: 'sois',
            options: ['sois', 'suis', 'être', 'serai'],
            translation: 'I have to be on time tomorrow.',
            explanation: 'Être has an irregular subjunctive: que je sois.',
            why: { suis: 'Suis is the present indicative; the subjunctive of être is sois.' },
          },
          {
            id: 'sj6',
            text: 'Il faut que nous ___ à la fête des voisins.',
            answer: 'allions',
            options: ['allions', 'allons', 'aillons', 'aller'],
            translation: 'We have to go to the neighbours’ party.',
            explanation: 'Aller keeps the nous stem in nous and vous: que nous allions.',
            why: { allons: 'Allons is the present indicative; after il faut que use allions.' },
          },
          {
            id: 'sj7',
            text: 'Il faut que tu ___ attention au bruit.',
            answer: 'fasses',
            options: ['fasses', 'fais', 'faire', 'faisses'],
            translation: 'You have to be careful about the noise.',
            explanation: 'Faire has an irregular subjunctive stem: que tu fasses.',
            why: { fais: 'Fais is the present indicative; the subjunctive of faire is fasses.' },
          },
        ],
      },
    ),

    activity(
      U,
      'conj-subjunctive',
      'conjugation',
      {
        title: 'The subjunctive forms',
        description: 'Fill in the forms that follow il faut que.',
        tags: ['grammar', 'fr-subjunctive'],
        difficulty: 2,
        estMinutes: 5,
        lesson: 'fr-subjunctive',
      },
      {
        tables: [
          subjTable('faire-1', 'faire', 'to do, to make', ['je', 'tu', 'il/elle/on']),
          subjTable('aller-1', 'aller', 'to go', ['nous', 'vous', 'ils/elles']),
          subjTable('etre-1', 'être', 'to be', ['je', 'nous', 'ils/elles']),
          subjTable('avoir-1', 'avoir', 'to have', ['tu', 'vous', 'ils/elles']),
          subjTable('prendre-1', 'prendre', 'to take', ['je', 'il/elle/on', 'nous']),
          subjTable('venir-1', 'venir', 'to come', ['tu', 'vous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-advice',
      'gapfill',
      {
        title: 'Good advice',
        description: 'Choose the right pattern to give advice.',
        tags: ['grammar', 'fr-advice', 'living-together'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-advice',
      },
      {
        items: [
          {
            id: 'a1',
            text: 'Je te conseille ___ parler à ton voisin.',
            answer: 'de',
            options: ['de', 'que', 'à', 'pour'],
            translation: 'I advise you to talk to your neighbour.',
            explanation: 'Conseiller is followed by de + infinitive.',
          },
          {
            id: 'a2',
            text: 'Il vaut mieux que tu ___ avant de te plaindre.',
            answer: 'parles',
            options: ['parles', 'parler', 'parlais', 'parleras'],
            translation: 'It is better if you talk before you complain.',
            explanation: 'Il vaut mieux que is followed by the subjunctive: que tu parles.',
            why: { parler: 'After que the verb is conjugated, not an infinitive.' },
          },
          {
            id: 'a3',
            text: 'Tu devrais ___ le règlement.',
            answer: 'lire',
            options: ['lire', 'lis', 'lises', 'lu'],
            translation: 'You should read the house rules.',
            explanation: 'Devoir is followed by an infinitive: tu devrais lire.',
          },
          {
            id: 'a4',
            text: 'Pourquoi ne pas ___ les voisins à la fête ?',
            answer: 'inviter',
            options: ['inviter', 'invites', 'invitez', 'invité'],
            translation: 'Why not invite the neighbours to the party?',
            explanation: 'Pourquoi ne pas is followed by an infinitive.',
          },
          {
            id: 'a5',
            text: 'Je vous conseille ___ prévenir le gardien.',
            answer: 'de',
            options: ['de', 'que', 'd’', 'à'],
            translation: 'I advise you to tell the caretaker.',
            explanation: 'Je vous conseille de + infinitive. Before prévenir the de stays de.',
          },
          {
            id: 'a6',
            text: 'Il vaut mieux que nous ___ le palier.',
            answer: 'nettoyions',
            options: ['nettoyions', 'nettoyons', 'nettoyer', 'nettoyé'],
            translation: 'It is better if we clean the landing.',
            explanation: 'With a new subject after que use the subjunctive: que nous nettoyions.',
            why: { nettoyons: 'Nettoyons is the present; after il vaut mieux que use nettoyions.' },
          },
          {
            id: 'a7',
            text: 'Il vaut mieux ___ avant de signer.',
            answer: 'lire',
            options: ['lire', 'de lire', 'que lire', 'lu'],
            translation: 'It is better to read before you sign.',
            explanation: 'A general tip with no new subject takes the plain infinitive.',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-negations',
      'sortit',
      {
        title: 'plus, jamais, que or personne?',
        description: 'Which negation is in the sentence?',
        tags: ['grammar', 'fr-negative-words', 'living-together'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-negative-words',
      },
      {
        instruction: 'Which negation does the sentence use?',
        buckets: [
          { id: 'plus', label: 'ne … plus (no longer)', emoji: '🛑' },
          { id: 'jamais', label: 'ne … jamais (never)', emoji: '♾️' },
          { id: 'que', label: 'ne … que (only)', emoji: '1️⃣' },
          { id: 'nobody', label: 'rien / personne', emoji: '🕳️' },
        ],
        items: NEGATION_CARDS.map(([text, bucket, translation], i) => ({
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
      'sort-prefixes',
      'sortit',
      {
        title: 'in-, im-, il- or ir-?',
        description: 'Which prefix makes the opposite of the word?',
        tags: ['grammar', 'fr-negative-prefixes', 'vocabulary'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-negative-prefixes',
      },
      {
        instruction: 'Which prefix gives the opposite?',
        buckets: [
          { id: 'in', label: 'in-', emoji: '➖' },
          { id: 'im', label: 'im- (b, p, m)', emoji: '🅿️' },
          { id: 'il', label: 'il- (l)', emoji: '🇱' },
          { id: 'ir', label: 'ir- (r)', emoji: '🇷' },
        ],
        items: PREFIX_CARDS.map(([text, bucket, translation], i) => ({
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
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'living-together'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'You have to make less noise.',
            words: ['Il', 'faut', 'que', 'vous', 'fassiez', 'moins', 'de', 'bruit.'],
            extra: ['faites'],
            lesson: 'fr-subjunctive',
          },
          {
            id: 's2',
            translation: 'I advise you to talk to the neighbour.',
            words: ['Je', 'te', 'conseille', 'de', 'parler', 'à', 'la', 'voisine.'],
            extra: ['que'],
            lesson: 'fr-advice',
          },
          {
            id: 's3',
            translation: 'We have only two keys.',
            words: ['Nous', 'n’avons', 'que', 'deux', 'clés.'],
            extra: ['pas'],
            lesson: 'fr-negative-words',
          },
          {
            id: 's4',
            translation: 'Smoking in the building is forbidden.',
            words: ['Il', 'est', 'interdit', 'de', 'fumer', 'dans', 'l’immeuble.'],
            extra: ['que'],
            lesson: 'fr-obligation',
          },
          {
            id: 's5',
            translation: 'It is better if you are polite.',
            words: ['Il', 'vaut', 'mieux', 'que', 'tu', 'sois', 'poli.'],
            extra: ['es'],
            lesson: 'fr-subjunctive',
          },
          {
            id: 's6',
            translation: 'She never does anyone a favour.',
            words: ['Elle', 'ne', 'rend', 'jamais', 'service.'],
            extra: ['pas'],
            lesson: 'fr-negative-words',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-housing',
      'spell',
      {
        title: 'Spell the words',
        description: 'Unscramble and type words from the unit. Accents are optional here.',
        tags: ['spelling', 'housing'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-proprietaire',
            mode: 'unscramble',
            answer: 'propriétaire',
            hint: 'owner, landlord',
            emoji: '🏠',
            speak: 'le propriétaire',
          },
          {
            id: 'sp-ascenseur',
            mode: 'unscramble',
            answer: 'ascenseur',
            hint: 'lift',
            emoji: '🛗',
            speak: 'l’ascenseur',
          },
          {
            id: 'sp-convivialite',
            mode: 'type',
            answer: 'convivialité',
            hint: 'friendly atmosphere',
            emoji: '🥂',
            speak: 'la convivialité',
          },
          {
            id: 'sp-colocation',
            mode: 'type',
            answer: 'colocation',
            hint: 'flat share',
            emoji: '👯',
            speak: 'la colocation',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Neighbours and flatmates',
        description: 'Welcome a neighbour, agree house rules and congratulate a friend.',
        tags: ['communication', 'living-together', 'housing'],
        difficulty: 2,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'new-neighbour',
            title: 'A new neighbour',
            emoji: '🚪',
            setting: 'A woman has just moved in on your landing. You do not know her: use vous.',
            turns: [
              {
                kind: 'npc',
                who: 'Mme Roche',
                text: 'Bonjour ! Je viens d’emménager au troisième étage.',
                translation: 'Hello! I have just moved in on the third floor.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Bienvenue dans l’immeuble ! Je suis votre voisin du palier.',
                    correct: true,
                  },
                  {
                    text: 'Bienvenue dans l’immeuble ! Tu habites sur le palier ?',
                    correct: false,
                    feedback: 'You are meeting a stranger: say vous, not tu.',
                  },
                  {
                    text: 'Bon appétit dans l’immeuble !',
                    correct: false,
                    feedback: 'Bon appétit is for meals. To welcome someone say bienvenue.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Mme Roche',
                text: 'Merci ! Est-ce qu’il y a des règles à respecter dans l’immeuble ?',
                translation: 'Thank you! Are there any rules to follow in the building?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Oui, il est interdit de faire du bruit après vingt-deux heures.',
                    correct: true,
                  },
                  {
                    text: 'Oui, il est interdit faire du bruit après vingt-deux heures.',
                    correct: false,
                    feedback: 'Il est interdit de + infinitive: the de is missing.',
                  },
                  {
                    text: 'Oui, on a le droit de faire du bruit après vingt-deux heures.',
                    correct: false,
                    feedback: 'That says noise is allowed: the opposite of the rule.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Mme Roche',
                text: 'D’accord. Et pour les poubelles ?',
                translation: 'All right. And what about the bins?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Il faut que vous les descendiez dans la cour avant huit heures.',
                    correct: true,
                  },
                  {
                    text: 'Il faut que vous les descendez dans la cour avant huit heures.',
                    correct: false,
                    feedback: 'After il faut que use the subjunctive: que vous descendiez.',
                  },
                  {
                    text: 'Il faut que vous les descendre dans la cour avant huit heures.',
                    correct: false,
                    feedback: 'After que the verb is conjugated (descendiez), not an infinitive.',
                  },
                ],
              },
            ],
          },
          {
            id: 'flat-share',
            title: 'Rules in the flat share',
            emoji: '🛋️',
            setting: 'You and your flatmate Théo agree on the rules together. Use tu.',
            turns: [
              {
                kind: 'npc',
                who: 'Théo',
                text: 'Alors, comment on s’organise pour le ménage ?',
                translation: 'So, how do we organise the cleaning?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Je te conseille de faire un planning pour la semaine.', correct: true },
                  {
                    text: 'Je te conseille que tu fais un planning pour la semaine.',
                    correct: false,
                    feedback: 'Conseiller is followed by de + infinitive, not que + present.',
                  },
                  {
                    text: 'Je te conseille faire un planning pour la semaine.',
                    correct: false,
                    feedback: 'You need de: je te conseille de faire.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Théo',
                text: 'Bonne idée. Et si quelqu’un met la musique trop fort ?',
                translation: 'Good idea. And if someone plays music too loud?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Il vaut mieux que nous en parlions tout de suite.', correct: true },
                  {
                    text: 'Il vaut mieux que nous en parlons tout de suite.',
                    correct: false,
                    feedback: 'After il vaut mieux que use the subjunctive: que nous parlions.',
                  },
                  {
                    text: 'Il vaut mieux que nous en parler tout de suite.',
                    correct: false,
                    feedback: 'After que the verb is conjugated: que nous parlions.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Théo',
                text: 'Et pour inviter des amis ?',
                translation: 'And what about inviting friends?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'On a le droit d’inviter des amis, mais pas la nuit.', correct: true },
                  {
                    text: 'On a le droit inviter des amis, mais pas la nuit.',
                    correct: false,
                    feedback: 'Avoir le droit de + infinitive: add d’ before inviter.',
                  },
                  {
                    text: 'Il est interdit d’inviter des amis, mais pas la nuit.',
                    correct: false,
                    feedback: 'Forbidden, “but not at night” makes no sense. You mean allowed.',
                  },
                ],
              },
            ],
          },
          {
            id: 'good-news',
            title: 'Good news',
            emoji: '🎊',
            setting: 'Your friend Inès has found a flat. Use tu.',
            turns: [
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Tu sais quoi ? J’ai trouvé un appartement, je déménage en mars !',
                translation: 'Guess what? I found a flat, I am moving in March!',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Félicitations ! Ça a l’air super, raconte-moi tout !', correct: true },
                  {
                    text: 'Merci beaucoup ! Raconte-moi tout !',
                    correct: false,
                    feedback: 'Merci is for thanking. For good news say félicitations.',
                  },
                  {
                    text: 'Bon courage ! Raconte-moi tout !',
                    correct: false,
                    feedback: 'Bon courage is for a hard task. For good news say félicitations.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'L’immeuble est calme, mais il n’y a qu’une chambre.',
                translation: 'The building is quiet, but there is only one bedroom.',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'Ce n’est pas grave, tu n’as plus besoin de colocataire !',
                    correct: true,
                  },
                  {
                    text: 'Ce n’est pas grave, tu n’as pas plus besoin de colocataire !',
                    correct: false,
                    feedback: '“No longer” is ne … plus, without pas.',
                  },
                  {
                    text: 'Ce n’est pas grave, tu n’as jamais besoin de colocataire !',
                    correct: false,
                    feedback: 'Jamais means never. She no longer needs a flatmate: ne … plus.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Inès',
                text: 'Merci ! Tu viens à la crémaillère samedi ?',
                translation: 'Thanks! Are you coming to the housewarming party on Saturday?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Avec plaisir ! Je te souhaite une bonne installation.', correct: true },
                  {
                    text: 'Avec plaisir ! Je te souhaite une bonne continuation.',
                    correct: false,
                    feedback:
                      'Bonne continuation is for someone carrying on with something. For a new home say bonne installation.',
                  },
                  {
                    text: 'Avec plaisir ! Je te souhaite bon appétit.',
                    correct: false,
                    feedback: 'Bon appétit is for a meal, not for a new home.',
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
        title: 'House rules blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-subjunctive', 'living-together'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          {
            id: 'b1',
            text: '“Il faut que tu viens” is correct.',
            isTrue: false,
            explanation: 'After il faut que use the subjunctive: que tu viennes.',
          },
          { id: 'b2', text: '“Il faut que je sois à l’heure” is correct.', isTrue: true },
          {
            id: 'b3',
            text: '“Je n’ai que dix euros” means “I have only ten euros”.',
            isTrue: true,
          },
          {
            id: 'b4',
            text: '“Je n’ai plus d’argent” means “I have never had money”.',
            isTrue: false,
            explanation: 'Ne … plus means no longer. Never is ne … jamais.',
          },
          {
            id: 'b5',
            text: '“Il est interdit de fumer” means smoking is allowed.',
            isTrue: false,
            explanation: 'Interdit means forbidden.',
          },
          { id: 'b6', text: '“On a le droit de” expresses permission.', isTrue: true },
          {
            id: 'b7',
            text: '“Impossible” is written with im- because the next letter is p.',
            isTrue: true,
          },
          {
            id: 'b8',
            text: '“Inlégal” is the opposite of “légal”.',
            isTrue: false,
            explanation: 'Before l the prefix is il-: illégal.',
          },
          { id: 'b9', text: '“Je te conseille de partir” is correct.', isTrue: true },
          {
            id: 'b10',
            text: '“Je te conseille que tu pars” is correct.',
            isTrue: false,
            explanation: 'Conseiller is followed by de + infinitive: je te conseille de partir.',
          },
          { id: 'b11', text: '“Le loyer” is what you pay each month for a flat.', isTrue: true },
          {
            id: 'b12',
            text: '“Un coup de main” is an injury to the hand.',
            isTrue: false,
            explanation: 'Un coup de main is a helping hand: donner un coup de main.',
          },
          {
            id: 'b13',
            text: '“Je ne vois personne” means “I see everybody”.',
            isTrue: false,
            explanation: 'Ne … personne means nobody.',
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
        tags: ['vocabulary', 'grammar', 'housing', 'living-together'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Complete: “Il faut que tu ___ à la réunion.” (aller)',
            options: ['ailles', 'vas', 'aller', 'allais'],
            answer: 'ailles',
            lesson: 'fr-subjunctive',
          },
          {
            id: 'c2',
            prompt: 'Complete: “Il faut que nous ___ le loyer.” (payer)',
            options: ['payions', 'payons', 'payer', 'payez'],
            answer: 'payions',
            lesson: 'fr-subjunctive',
          },
          {
            id: 'c3',
            prompt: 'Which sentence forbids smoking?',
            options: [
              'Il est interdit de fumer.',
              'On a le droit de fumer.',
              'Il faut fumer.',
              'Vous pouvez fumer.',
            ],
            answer: 'Il est interdit de fumer.',
            lesson: 'fr-obligation',
          },
          {
            id: 'c4',
            prompt: 'Which sentence gives advice correctly?',
            options: [
              'Je te conseille de partir.',
              'Je te conseille que tu pars.',
              'Je te conseille partir.',
              'Je te conseille à partir.',
            ],
            answer: 'Je te conseille de partir.',
            lesson: 'fr-advice',
          },
          {
            id: 'c5',
            prompt: 'Complete: “Nous n’avons ___ une clé.” (only)',
            options: ['qu’', 'pas', 'plus', 'jamais'],
            answer: 'qu’',
            lesson: 'fr-negative-words',
          },
          {
            id: 'c6',
            prompt: '“Elle ne rend jamais service” means …',
            options: [
              'She never helps.',
              'She no longer helps.',
              'She helps nobody.',
              'She only helps once.',
            ],
            answer: 'She never helps.',
            lesson: 'fr-negative-words',
          },
          {
            id: 'c7',
            prompt: 'What is the opposite of “légal”?',
            options: ['illégal', 'inlégal', 'imlégal', 'irlégal'],
            answer: 'illégal',
            lesson: 'fr-negative-prefixes',
          },
          {
            id: 'c8',
            prompt: 'What is the opposite of “possible”?',
            options: ['impossible', 'inpossible', 'illpossible', 'irpossible'],
            answer: 'impossible',
            lesson: 'fr-negative-prefixes',
          },
        ],
      },
    ),
  ],
};
