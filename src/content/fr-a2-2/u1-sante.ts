import { activity, byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import { gap, mc, npc, unitFr, you, type UnitContent } from './helpers';

const U = 'fr-a2-2-sante';

const body = vocabList(U, 'Body and joints', [
  ['le genou', 'knee', '🦵'],
  ['la cheville', 'ankle', '🦶'],
  ['le poignet', 'wrist', '🤚'],
  ['le coude', 'elbow', '💪'],
  ['l’épaule', 'shoulder', '🤷'],
  ['la nuque', 'back of the neck', '🧣'],
  ['la hanche', 'hip', '🕺'],
  ['les poumons', 'lungs', '🫁'],
  ['l’estomac', 'stomach', '🤢'],
  ['le cœur', 'heart', '❤️'],
  ['le muscle', 'muscle', '🏋️'],
  ['l’os', 'bone', '🦴'],
  ['la peau', 'skin', '🧴'],
  ['la colonne vertébrale', 'spine', '🧍'],
]);

const illness = vocabList(U, 'Illness and injury', [
  ['la douleur', 'pain', '😣'],
  ['la fièvre', 'fever', '🌡️'],
  ['la toux', 'cough', '😷'],
  ['un rhume', 'a cold', '🤧'],
  ['la grippe', 'flu', '🤒'],
  ['une allergie', 'an allergy', '🌼'],
  ['des vertiges', 'dizziness', '😵‍💫'],
  ['un hématome', 'a bruise', '🟣'],
  ['une brûlure', 'a burn', '🔥'],
  ['une blessure', 'an injury', '🩹'],
  ['se blesser', 'to hurt oneself', '🤕'],
  ['se fouler la cheville', 'to sprain one’s ankle', '🦶'],
]);

const doctor = vocabList(U, 'Doctor, pharmacy and emergencies', [
  ['un généraliste', 'a GP', '🩺'],
  ['une ordonnance', 'a prescription', '📝'],
  ['un comprimé', 'a tablet', '💊'],
  ['un sirop', 'a cough syrup', '🧴'],
  ['une pommade', 'an ointment', '🧪'],
  ['un pansement', 'a plaster', '🩹'],
  ['une radio', 'an X-ray', '🩻'],
  ['une prise de sang', 'a blood test', '🩸'],
  ['un arrêt de travail', 'a sick note', '📄'],
  ['les urgences', 'the emergency room', '🚑'],
  ['le SAMU', 'the emergency medical service', '📞'],
  ['guérir', 'to recover', '✅'],
  ['soigner', 'to treat', '🩺'],
  ['s’allonger', 'to lie down', '🛏️'],
]);

const advice = vocabList(U, 'Idioms, advice and opinions', [
  ['avoir la pêche', 'to feel full of energy', '🍑'],
  ['avoir un coup de barre', 'to feel suddenly exhausted', '🪫'],
  ['être sur les rotules', 'to be worn out', '😮‍💨'],
  ['tomber dans les pommes', 'to faint', '🍎'],
  ['se faire du mauvais sang', 'to worry a lot', '😟'],
  ['Où avez-vous mal ?', 'Where does it hurt?', '📍'],
  ['Qu’est-ce qui ne va pas ?', 'What is wrong?', '❓'],
  ['Il vaut mieux rester au lit.', 'It is better to stay in bed.', '🛌'],
  ['Je vous conseille de consulter un médecin.', 'I advise you to see a doctor.', '👨‍⚕️'],
  ['Prenez ce sirop trois fois par jour.', 'Take this syrup three times a day.', '🧴'],
  ['Selon moi, c’est une bonne idée.', 'In my opinion, it is a good idea.', '💡'],
  ['D’après moi, c’est trop dangereux.', 'As I see it, it is too dangerous.', '⚠️'],
  ['Pour ma part, je suis d’accord.', 'For my part, I agree.', '👍'],
  ['Bon rétablissement !', 'Get well soon!', '💐'],
]);

const vocab = [...body, ...illness, ...doctor, ...advice];

const meaningQuiz = byDe(
  vocab,
  'le genou',
  'la cheville',
  'le poignet',
  'les poumons',
  'la fièvre',
  'un rhume',
  'une brûlure',
  'des vertiges',
);

/** [sentence, bucket, English] for the direct / indirect object sort */
const SORT_CARDS: [string, 'cod' | 'coi', string][] = [
  ['Je le connais.', 'cod', 'I know him.'],
  ['Je lui parle.', 'coi', 'I talk to him / her.'],
  ['Elle les appelle.', 'cod', 'She calls them.'],
  ['Elle leur téléphone.', 'coi', 'She phones them.'],
  ['Nous la voyons demain.', 'cod', 'We see her tomorrow.'],
  ['Nous lui écrivons.', 'coi', 'We write to him / her.'],
  ['Tu l’aides ?', 'cod', 'Do you help him / her?'],
  ['Tu lui réponds ?', 'coi', 'Do you answer him / her?'],
  ['Le médecin les examine.', 'cod', 'The doctor examines them.'],
  ['Le médecin leur donne un sirop.', 'coi', 'The doctor gives them a syrup.'],
  ['Je ne le trouve pas.', 'cod', 'I cannot find it.'],
  ['Je ne lui dis rien.', 'coi', 'I tell him / her nothing.'],
];

export const sante: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'À votre santé !',
    subtitle: 'Talk about your body and health, see a doctor, give advice and say what you think',
    emoji: '🩺',
    goals: [
      'Say where it hurts and describe common illnesses',
      'Understand a doctor or a pharmacist and follow their advice',
      'Give advice and say what you think',
    ],
    grammar: [
      'Object pronouns: le, la, les, lui, leur',
      'The superlative: le plus, le moins, le meilleur',
      'Interrogative pronouns: qui, que, quoi, lequel',
    ],
    vocabFields: [
      'Body and joints',
      'Illness and injury',
      'Doctor, pharmacy and emergencies',
      'Idioms, advice and opinions',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-body',
      'flashcards',
      {
        title: 'Body and joints',
        description: 'The parts of the body you need at the doctor’s.',
        tags: ['vocabulary', 'health-body'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(body),
    ),

    activity(
      U,
      'flash-illness',
      'flashcards',
      {
        title: 'Illness and injury',
        description: 'Name a pain, an illness or an injury.',
        tags: ['vocabulary', 'health-body'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(illness),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Read the word and pick its meaning.',
        tags: ['vocabulary', 'health-body'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(meaningQuiz, [...body, ...illness], 4),
    ),

    activity(
      U,
      'flash-doctor',
      'flashcards',
      {
        title: 'Doctor, pharmacy and emergencies',
        description: 'The words you hear at the doctor’s, at the pharmacy and in an emergency.',
        tags: ['vocabulary', 'health-body'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(doctor),
    ),

    activity(
      U,
      'listen-doctor',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'health-body'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'une ordonnance',
          'un comprimé',
          'une pommade',
          'un pansement',
          'une prise de sang',
          'les urgences',
          'guérir',
          's’allonger',
        ),
        doctor,
      ),
    ),

    activity(
      U,
      'spell-health',
      'spell',
      {
        title: 'Spell the health words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'health-body'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-ordonnance',
            mode: 'unscramble',
            answer: 'ordonnance',
            hint: 'prescription',
            emoji: '📝',
            speak: 'une ordonnance',
          },
          {
            id: 'sp-pansement',
            mode: 'unscramble',
            answer: 'pansement',
            hint: 'plaster',
            emoji: '🩹',
            speak: 'un pansement',
          },
          {
            id: 'sp-fievre',
            mode: 'type',
            answer: 'fièvre',
            hint: 'fever',
            emoji: '🌡️',
            speak: 'la fièvre',
          },
          {
            id: 'sp-urgences',
            mode: 'dictation',
            answer: 'urgences',
            hint: 'Type what you hear (the emergency room)',
            emoji: '🚑',
            speak: 'les urgences',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-cod',
      'gapfill',
      {
        title: 'le, la or les?',
        description: 'Replace the object with the right pronoun.',
        tags: ['grammar', 'fr-object-pronouns', 'health-body'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-object-pronouns',
      },
      {
        items: [
          gap(
            'd1',
            '— Tu prends ce comprimé ? — Oui, je ___ prends.',
            'le',
            ['la', 'les', 'lui'],
            '“Are you taking this tablet?” “Yes, I am taking it.”',
            'Comprimé is masculine singular, so the pronoun is le.',
          ),
          gap(
            'd2',
            '— Tu connais la doctoresse ? — Oui, je ___ connais bien.',
            'la',
            ['le', 'les', 'lui'],
            '“Do you know the doctor?” “Yes, I know her well.”',
            'La doctoresse is feminine singular: la.',
          ),
          gap(
            'd3',
            '— Vous prenez les comprimés ? — Oui, je ___ prends le soir.',
            'les',
            ['le', 'la', 'leur'],
            '“Do you take the tablets?” “Yes, I take them in the evening.”',
            'The plural direct object is les.',
          ),
          gap(
            'd4',
            'Le médecin examine Léa. Il ___ examine.',
            'la',
            ['lui', 'le', 'les'],
            'The doctor examines Léa. He examines her.',
            'Examiner is followed directly by its object, so la (Léa), not lui.',
          ),
          gap(
            'd5',
            'J’appelle mes parents. Je ___ appelle.',
            'les',
            ['leur', 'le', 'la'],
            'I call my parents. I call them.',
            'Appeler has a direct object: les.',
          ),
          gap(
            'd6',
            'Je cherche mon ordonnance, mais je ne ___ trouve pas.',
            'la',
            ['lui', 'le', 'les'],
            'I am looking for my prescription, but I cannot find it.',
            'Ordonnance is feminine; the pronoun stands between ne and the verb: ne la trouve pas.',
          ),
          gap(
            'd7',
            'Le docteur Moreau ? Je vais ___ voir demain.',
            'le',
            ['lui', 'la', 'les'],
            'Doctor Moreau? I am going to see him tomorrow.',
            'Voir has a direct object, and with an infinitive the pronoun goes before the infinitive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-cod-coi',
      'sortit',
      {
        title: 'Direct or indirect?',
        description: 'Does the pronoun replace a direct or an indirect object?',
        tags: ['grammar', 'fr-object-pronouns', 'health-body'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-object-pronouns',
      },
      {
        instruction: 'Does the pronoun replace a direct object or an object with à?',
        buckets: [
          { id: 'cod', label: 'Direct: le, la, les', emoji: '➡️' },
          { id: 'coi', label: 'Indirect (à): lui, leur', emoji: '💬' },
        ],
        items: SORT_CARDS.map(([text, bucket, translation], i) => ({
          id: `o${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-coi',
      'gapfill',
      {
        title: 'lui, leur, me or te?',
        description: 'Replace the person after à with the right pronoun.',
        tags: ['grammar', 'fr-object-pronouns', 'health-body'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-object-pronouns',
      },
      {
        items: [
          gap(
            'i1',
            'J’ai mal. Je téléphone à mon médecin. Je ___ téléphone.',
            'lui',
            ['leur', 'le', 'la'],
            'I am in pain. I phone my doctor. I phone him.',
            'Téléphoner à quelqu’un: the person after à becomes lui.',
          ),
          gap(
            'i2',
            'Les enfants ont de la fièvre. Je ___ donne un sirop.',
            'leur',
            ['lui', 'les', 'le'],
            'The children have a fever. I give them a syrup.',
            'Donner à quelqu’un, plural: leur.',
          ),
          gap(
            'i3',
            'Docteur, vous ___ donnez une ordonnance, s’il vous plaît ?',
            'me',
            ['lui', 'leur', 'te'],
            'Doctor, could you give me a prescription, please?',
            'For the speaker, me works for both direct and indirect objects.',
          ),
          gap(
            'i4',
            'Mamie est malade. Nous ___ rendons visite demain.',
            'lui',
            ['leur', 'la', 'te'],
            'Granny is ill. We are visiting her tomorrow.',
            'Rendre visite à quelqu’un: lui.',
          ),
          gap(
            'i5',
            'Tu es enrhumé ? Je ___ prépare une tisane.',
            'te',
            ['lui', 'se', 'leur'],
            'Do you have a cold? I will make you a herbal tea.',
            'Te means “to you” (tu).',
          ),
          gap(
            'i6',
            'Les voisins sont inquiets. Je ___ explique la situation.',
            'leur',
            ['lui', 'les', 'nous'],
            'The neighbours are worried. I explain the situation to them.',
            'Expliquer quelque chose à quelqu’un, plural: leur.',
          ),
          gap(
            'i7',
            'Le pharmacien nous parle. Il ___ explique le traitement.',
            'nous',
            ['leur', 'vous', 'lui'],
            'The pharmacist is talking to us. He explains the treatment to us.',
            'Nous is the same for direct and indirect objects.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-superlative',
      'gapfill',
      {
        title: 'The most, the best',
        description: 'le plus, le moins, le meilleur, le mieux.',
        tags: ['grammar', 'fr-superlative', 'health-body'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-superlative',
      },
      {
        items: [
          gap(
            's1',
            'C’est ___ grand hôpital de la ville.',
            'le plus',
            ['plus', 'la plus', 'le meilleur'],
            'It is the biggest hospital in the town.',
            'Superlative of an adjective: le / la / les + plus + adjective, and the article agrees with the noun.',
          ),
          gap(
            's2',
            'Cette pharmacie est ___ proche de chez moi.',
            'la plus',
            ['le plus', 'plus', 'la meilleure'],
            'This pharmacy is the closest to my home.',
            'Pharmacie is feminine: la plus proche.',
          ),
          gap(
            's3',
            'Pour mon dos, la natation est ___ sport.',
            'le meilleur',
            ['le plus bon', 'le mieux', 'meilleur'],
            'For my back, swimming is the best sport.',
            'Bon becomes meilleur: le meilleur, never le plus bon.',
          ),
          gap(
            's4',
            'Aujourd’hui, il fait 38 degrés. C’est le jour ___ chaud de l’année.',
            'le plus',
            ['le moins', 'plus', 'très'],
            'Today it is 38 degrees. It is the hottest day of the year.',
            'The most is le plus; the least is le moins.',
          ),
          gap(
            's5',
            'De tous mes amis, c’est Paul qui court ___ vite.',
            'le plus',
            ['plus', 'le mieux', 'la plus'],
            'Of all my friends, Paul runs the fastest.',
            'With an adverb the article is always le: le plus vite.',
          ),
          gap(
            's6',
            'Marie dort ___ de toute la famille.',
            'le mieux',
            ['le meilleur', 'le plus bien', 'mieux'],
            'Marie sleeps the best of the whole family.',
            'The adverb bien becomes mieux: le mieux.',
          ),
          gap(
            's7',
            'Ce sont ___ meilleurs médecins de la région.',
            'les',
            ['le', 'plus', 'ses'],
            'They are the best doctors in the region.',
            'Meilleur already means “better”, so only the article is added: les meilleurs.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-interrogatives',
      'gapfill',
      {
        title: 'Qui, que, quoi or lequel?',
        description: 'Pick the question word that fits.',
        tags: ['grammar', 'fr-interrogative-pronouns', 'health-body'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-interrogative-pronouns',
      },
      {
        items: [
          gap(
            'q1',
            '___ a téléphoné au SAMU ?',
            'Qui',
            ['Que', 'Quoi', 'Lequel'],
            'Who called the emergency service?',
            'Qui asks about a person.',
          ),
          gap(
            'q2',
            '___ vous prenez comme médicaments ?',
            'Qu’est-ce que',
            ['Qu’est-ce qui', 'Qui', 'Lequel'],
            'What medicines do you take?',
            'The thing is the object of prenez, so qu’est-ce que + subject + verb.',
          ),
          gap(
            'q3',
            '___ vous fait mal ?',
            'Qu’est-ce qui',
            ['Qu’est-ce que', 'Quoi', 'Que'],
            'What hurts you?',
            'The thing is the subject of fait mal: qu’est-ce qui.',
          ),
          gap(
            'q4',
            'Tu parles de ___ ? — De mon genou.',
            'quoi',
            ['qui', 'que', 'lequel'],
            '“What are you talking about?” “About my knee.”',
            'After a preposition, a thing is asked with quoi.',
          ),
          gap(
            'q5',
            'Tu parles de ___ ? — De mon médecin.',
            'qui',
            ['quoi', 'que', 'laquelle'],
            '“Who are you talking about?” “About my doctor.”',
            'After a preposition, a person is asked with qui.',
          ),
          gap(
            'q6',
            'Vous avez deux ordonnances. ___ est pour la pharmacie ?',
            'Laquelle',
            ['Lequel', 'Qui', 'Quoi'],
            'You have two prescriptions. Which one is for the pharmacy?',
            'Ordonnance is feminine: laquelle.',
          ),
          gap(
            'q7',
            'Il y a plusieurs sirops. ___ vous prenez ?',
            'Lequel',
            ['Laquelle', 'Lesquels', 'Quoi'],
            'There are several syrups. Which one do you take?',
            'Sirop is masculine singular: lequel.',
          ),
          gap(
            'q8',
            'Ces comprimés sont différents. ___ sont pour la toux ?',
            'Lesquels',
            ['Lequel', 'Lesquelles', 'Qui'],
            'These tablets are different. Which ones are for the cough?',
            'Comprimés is masculine plural: lesquels.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'health-body'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'The doctor gives him a prescription.',
            words: ['Le', 'médecin', 'lui', 'donne', 'une', 'ordonnance.'],
            extra: ['le'],
            lesson: 'fr-object-pronouns',
          },
          {
            id: 's2',
            translation: 'I cannot find it.',
            words: ['Je', 'ne', 'la', 'trouve', 'pas.'],
            extra: ['lui'],
            lesson: 'fr-object-pronouns',
          },
          {
            id: 's3',
            translation: 'I am going to phone her tomorrow.',
            words: ['Je', 'vais', 'lui', 'téléphoner', 'demain.'],
            extra: ['leur'],
            lesson: 'fr-object-pronouns',
          },
          {
            id: 's4',
            translation: 'What hurts you?',
            words: ['Qu’est-ce', 'qui', 'vous', 'fait', 'mal ?'],
            extra: ['que'],
            lesson: 'fr-interrogative-pronouns',
          },
          {
            id: 's5',
            translation: 'It is the best pharmacy in the district.',
            words: ['C’est', 'la', 'meilleure', 'pharmacie', 'du', 'quartier.'],
            extra: ['plus'],
            lesson: 'fr-superlative',
          },
          {
            id: 's6',
            translation: 'It is better to stay in bed.',
            words: ['Il', 'vaut', 'mieux', 'rester', 'au', 'lit.'],
            extra: ['faut'],
          },
        ],
      },
    ),

    activity(
      U,
      'flash-advice',
      'flashcards',
      {
        title: 'Idioms, advice and opinions',
        description: 'Say how you feel, give advice and say what you think.',
        tags: ['vocabulary', 'communication', 'health-body'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(advice),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'At the doctor’s, at the pharmacy',
        description: 'See the doctor, buy medicine and help a sick friend.',
        tags: ['communication', 'health-body'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'doctor',
            title: 'At the doctor’s',
            emoji: '🩺',
            setting: 'You have a sore throat. The doctor uses vous.',
            turns: [
              npc('Le docteur', 'Bonjour. Qu’est-ce qui ne va pas ?', 'Hello. What is wrong?'),
              you(
                'J’ai mal à la gorge et je tousse depuis trois jours.',
                [
                  'Je suis mal à la gorge et je tousse depuis trois jours.',
                  'To say where it hurts, use avoir mal à: j’ai mal à la gorge.',
                ],
                [
                  'J’ai mal pour la gorge et je tousse depuis trois jours.',
                  'After mal, use à: mal à la gorge.',
                ],
              ),
              npc('Le docteur', 'Vous avez de la fièvre ?', 'Do you have a fever?'),
              you(
                'Oui, un peu. Je l’ai depuis hier soir.',
                [
                  'Oui, un peu. Je lui ai depuis hier soir.',
                  'La fièvre is a direct object: l’ (la fièvre), not lui.',
                ],
                [
                  'Oui, un peu. J’ai le depuis hier soir.',
                  'The object pronoun goes before the verb: je l’ai.',
                ],
              ),
              npc(
                'Le docteur',
                'Voici une ordonnance. Prenez un comprimé matin et soir, et reposez-vous.',
                'Here is a prescription. Take one tablet morning and evening, and rest.',
              ),
              you(
                'Merci, docteur. Je vais la porter à la pharmacie.',
                [
                  'Merci, docteur. Je vais lui porter à la pharmacie.',
                  'The prescription is a thing and a direct object: la, not lui.',
                ],
                [
                  'Merci, docteur. Je vais porter la à la pharmacie.',
                  'Put the pronoun before the infinitive: je vais la porter.',
                ],
              ),
              npc('Le docteur', 'Bon rétablissement !', 'Get well soon!'),
            ],
          },
          {
            id: 'pharmacy',
            title: 'At the pharmacy',
            emoji: '💊',
            setting: 'You have a cold and ask the pharmacist for help. Use vous.',
            turns: [
              npc('Le pharmacien', 'Bonjour, je peux vous aider ?', 'Hello, can I help you?'),
              you(
                'Oui, j’ai un rhume. Qu’est-ce que vous me conseillez ?',
                [
                  'Oui, j’ai un rhume. Que vous me conseillez ?',
                  'Que needs inversion (que me conseillez-vous ?). In normal word order say qu’est-ce que.',
                ],
                [
                  'Oui, j’ai un rhume. Qui vous me conseillez ?',
                  'Qui asks about people. For a thing, use qu’est-ce que.',
                ],
              ),
              npc(
                'Le pharmacien',
                'Ce sirop est le plus efficace contre la toux.',
                'This syrup is the most effective against a cough.',
              ),
              you(
                'Je le prends, merci. Combien de fois par jour ?',
                [
                  'Je lui prends, merci. Combien de fois par jour ?',
                  'The syrup is a thing and a direct object: le, not lui.',
                ],
                [
                  'Je prends le, merci. Combien de fois par jour ?',
                  'Put the pronoun before the verb: je le prends.',
                ],
              ),
              npc(
                'Le pharmacien',
                'Trois fois par jour, après les repas. Bon rétablissement !',
                'Three times a day, after meals. Get well soon!',
              ),
            ],
          },
          {
            id: 'friend',
            title: 'A friend is ill',
            emoji: '🤒',
            setting: 'Your friend Léa is ill. You say tu to each other.',
            turns: [
              npc(
                'Léa',
                'Salut ! Je suis sur les rotules, j’ai de la fièvre.',
                'Hi! I am worn out, I have a fever.',
              ),
              you(
                'Oh non ! Je te conseille de rester au lit.',
                [
                  'Oh non ! Je te conseille rester au lit.',
                  'Conseiller is followed by de + infinitive: je te conseille de rester.',
                ],
                [
                  'Oh non ! Tu devrais restes au lit.',
                  'After devrais use the infinitive: tu devrais rester.',
                ],
              ),
              npc(
                'Léa',
                'Tu as raison. Tu peux téléphoner à ma mère pour moi ?',
                'You are right. Can you phone my mother for me?',
              ),
              you(
                'Bien sûr, je vais lui téléphoner.',
                [
                  'Bien sûr, je vais la téléphoner.',
                  'Téléphoner takes à (téléphoner à quelqu’un), so the pronoun is lui.',
                ],
                [
                  'Bien sûr, je vais leur téléphoner.',
                  'Léa’s mother is one person: lui, not leur.',
                ],
              ),
              npc(
                'Léa',
                'Merci, tu es le meilleur ami du monde !',
                'Thanks, you are the best friend in the world!',
              ),
              you(
                'De rien ! Bon rétablissement !',
                [
                  'De rien ! Bon appétit !',
                  'Bon appétit is for a meal. Wish a sick friend bon rétablissement.',
                ],
                ['De rien ! Félicitations !', 'Félicitations is for good news.'],
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
      {
        title: 'Health blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'health-body', 'fr-object-pronouns'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Le genou” is the knee.', isTrue: true },
          {
            id: 'b2',
            text: '“Le coude” is the ankle.',
            isTrue: false,
            explanation: 'Le coude is the elbow. The ankle is la cheville.',
          },
          { id: 'b3', text: '“Une ordonnance” is a prescription.', isTrue: true },
          {
            id: 'b4',
            text: '“Je lui téléphone” means “I phone him / her”.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: '“Je la téléphone” is correct for “I phone her”.',
            isTrue: false,
            explanation: 'Téléphoner takes à, so the pronoun is lui: je lui téléphone.',
          },
          {
            id: 'b6',
            text: '“Le plus bon” is the superlative of bon.',
            isTrue: false,
            explanation: 'Bon becomes meilleur: le meilleur.',
          },
          { id: 'b7', text: '“Avoir la pêche” means “to feel full of energy”.', isTrue: true },
          {
            id: 'b8',
            text: '“Tomber dans les pommes” means “to eat apples”.',
            isTrue: false,
            explanation: 'It means to faint.',
          },
          { id: 'b9', text: '“Qui” asks about a person.', isTrue: true },
          {
            id: 'b10',
            text: '“Lequel” is feminine singular.',
            isTrue: false,
            explanation: 'Lequel is masculine singular. The feminine is laquelle.',
          },
          { id: 'b11', text: '“Le SAMU” is the emergency medical service.', isTrue: true },
          { id: 'b12', text: '“Je vais le voir” means “I am going to see him”.', isTrue: true },
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
        tags: ['vocabulary', 'grammar', 'health-body'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          mc(
            'c1',
            'Complete: “Je cherche l’ordonnance. Je ne ___ trouve pas.”',
            'la',
            ['lui', 'le', 'leur'],
            {
              lesson: 'fr-object-pronouns',
            },
          ),
          mc(
            'c2',
            'Complete: “Mes parents sont malades. Je ___ rends visite.”',
            'leur',
            ['les', 'lui', 'la'],
            {
              lesson: 'fr-object-pronouns',
            },
          ),
          mc(
            'c3',
            'Complete: “Cet hôpital est ___ moderne de la région.”',
            'le plus',
            ['plus', 'la plus', 'très'],
            {
              lesson: 'fr-superlative',
            },
          ),
          mc(
            'c4',
            'Complete: “C’est ___ pharmacien de la ville.”',
            'le meilleur',
            ['le plus bon', 'le mieux', 'meilleur'],
            {
              lesson: 'fr-superlative',
            },
          ),
          mc(
            'c5',
            'Complete: “___ vous fait mal ?”',
            'Qu’est-ce qui',
            ['Qu’est-ce que', 'Qui', 'Lequel'],
            {
              lesson: 'fr-interrogative-pronouns',
            },
          ),
          mc(
            'c6',
            'Complete: “Voici deux sirops. ___ vous préférez ?”',
            'Lequel',
            ['Laquelle', 'Quoi', 'Qui'],
            {
              lesson: 'fr-interrogative-pronouns',
            },
          ),
          mc('c7', 'How do you say “Where does it hurt?” to a stranger?', 'Où avez-vous mal ?', [
            'Où êtes-vous mal ?',
            'Qu’avez-vous mal ?',
            'Où vous avez mal à ?',
          ]),
          mc('c8', 'You are completely worn out. What do you say?', 'Je suis sur les rotules.', [
            'J’ai la pêche.',
            'Je me fais du mauvais sang.',
            'Je tombe dans les pommes.',
          ]),
        ],
      },
    ),
  ],
};
