import { passeComposeReflexive } from '@/lib/french/tenses';
import { activity, byDe, flashcards, listen, quizEmoji, vocabList } from '../builders';
import {
  gap,
  meta,
  presentTable,
  q,
  say,
  sent,
  tf,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-a1-2-sante';

const body = vocabList(U, 'The body', [
  ['la tête', 'head', '🗣️'],
  ['le cou', 'neck', '🦒'],
  ['le menton', 'chin', '🧔'],
  ['le bras', 'arm', '💪'],
  ['le doigt', 'finger', '☝️'],
  ['le dos', 'back', '🔙'],
  ['le ventre', 'belly, stomach', '🫃'],
  ['la jambe', 'leg', '🦵'],
  ['la joue', 'cheek', '😊'],
  ['le pied', 'foot', '🦶'],
  ['l’œil', 'eye', '👁️'],
  ['l’oreille', 'ear', '👂'],
  ['la bouche', 'mouth', '👄'],
  ['la dent', 'tooth', '🦷'],
  ['la gorge', 'throat', '🗯️'],
  ['le sang', 'blood', '🩸'],
  ['le visage', 'face', '😀'],
  ['le front', 'forehead', '🙂'],
]);

const doctor = vocabList(U, 'At the doctor’s', [
  ['le médecin', 'doctor', '🧑‍⚕️'],
  ['la consultation', 'appointment, consultation', '🩺'],
  ['l’ordonnance', 'prescription', '📄'],
  ['la maladie', 'illness', '🤒'],
  ['malade', 'ill, sick', '🤧'],
  ['la température', 'temperature', '🌡️'],
  ['la migraine', 'migraine', '🤯'],
  ['tousser', 'to cough', '🤧'],
  ['l’angine', 'tonsillitis, sore throat', '😷'],
  ['éternuer', 'to sneeze', '🥶'],
  ['le symptôme', 'symptom', '🔎'],
  ['avoir mal à …', 'to have a pain in …', '🤕'],
  ['se sentir', 'to feel', '🫥'],
  ['aller mieux', 'to feel better', '🙂'],
]);

const pharmacy = vocabList(U, 'At the pharmacy', [
  ['le pharmacien de garde', 'duty pharmacist', '🌙'],
  ['le pharmacien', 'pharmacist', '🧑‍🔬'],
  ['le médicament', 'medicine', '💉'],
  ['le cachet', 'tablet, pill', '⚪'],
  ['les gouttes', 'drops', '💧'],
  ['la pommade', 'ointment', '🧴'],
  ['le bandage', 'bandage', '🩹'],
  ['le thermomètre', 'thermometer', '🌡️'],
  ['sur ordonnance', 'on prescription', '📝'],
  ['trois fois par jour', 'three times a day', '3️⃣'],
]);

const advice = vocabList(U, 'Advice and emergencies', [
  ['le conseil', 'piece of advice', '💡'],
  ['Il vaut mieux …', 'It is better to …', '👍'],
  ['consulter', 'to see (a doctor)', '🩺'],
  ['prendre rendez-vous', 'to make an appointment', '📅'],
  ['Soigne-toi bien !', 'Take care of yourself!', '💐'],
  ['le médecin de garde', 'doctor on call', '🚑'],
  ['l’ambulance', 'ambulance', '🚑'],
  ['les pompiers', 'firefighters', '🚒'],
  ['Au secours !', 'Help!', '🆘'],
  ['appeler les secours', 'to call the emergency services', '📞'],
]);

const accidents = vocabList(U, 'Accidents and bad luck', [
  ['l’accident', 'accident', '💥'],
  ['la blessure', 'injury', '🩸'],
  ['se faire mal', 'to hurt oneself', '🤕'],
  ['se casser', 'to break (a limb)', '🦴'],
  ['le plâtre', 'plaster cast', '🦽'],
  ['glisser', 'to slip', '🧊'],
  ['la chance', 'luck', '🍀'],
  ['Pas de chance !', 'Bad luck!', '😬'],
  ['Quelle malchance !', 'What bad luck!', '🙃'],
  ['Ce n’est pas grave.', 'It is not serious.', '😌'],
]);

const vocab = [...body, ...doctor, ...pharmacy, ...advice, ...accidents];

const pictureQuiz = byDe(
  vocab,
  'la tête',
  'le pied',
  'la dent',
  'l’oreille',
  'le visage',
  'le menton',
  'le thermomètre',
  'le bandage',
);

const heard = byDe(
  vocab,
  'la migraine',
  'l’angine',
  'l’ordonnance',
  'le médicament',
  'le médecin de garde',
  'le symptôme',
  'Au secours !',
);

export const sante: UnitContent = {
  unit: unitFr({
    id: U,
    order: 5,
    title: 'Pas de chance !',
    subtitle: 'Say what hurts, see a doctor, buy medicine and give advice',
    emoji: '🤒',
    goals: [
      'Name the parts of the body and say what hurts',
      'Explain a problem to a doctor or a pharmacist',
      'Give advice and say what you must do',
      'Tell what happened after an accident',
    ],
    grammar: [
      'avoir mal à + body part',
      'devoir and il faut',
      'lui and leur',
      'The passé composé of pronominal verbs',
      'pourquoi and parce que',
    ],
    vocabFields: [
      'The body',
      'At the doctor’s',
      'At the pharmacy',
      'Advice and emergencies',
      'Accidents and bad luck',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-body',
      'flashcards',
      meta('The body', 'Head, back, hands and feet.', ['vocabulary', 'health-body'], 1, 4),
      flashcards(body),
    ),

    activity(
      U,
      'flash-doctor',
      'flashcards',
      meta(
        'Doctor and pharmacy',
        'Symptoms, medicine and what the doctor writes.',
        ['vocabulary', 'health-body'],
        1,
        4,
      ),
      flashcards([...doctor, ...pharmacy]),
    ),

    activity(
      U,
      'flash-advice',
      'flashcards',
      meta(
        'Advice, emergencies and bad luck',
        'What to say when things go wrong.',
        ['vocabulary', 'health-body', 'mishaps-regrets'],
        1,
        4,
      ),
      flashcards([...advice, ...accidents]),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'Body and care',
        'Look at the picture and pick the word.',
        ['vocabulary', 'health-body'],
        1,
        3,
      ),
      quizEmoji(pictureQuiz, [...body, ...doctor, ...pharmacy], 4),
    ),

    activity(
      U,
      'listen-symptoms',
      'listen',
      meta(
        'Listen to the symptoms',
        'Listen to the word and pick its meaning.',
        ['listening', 'health-body'],
        2,
        3,
      ),
      listen(heard, vocab),
    ),

    activity(
      U,
      'conj-devoir',
      'conjugation',
      {
        ...meta(
          'devoir and pouvoir',
          'Two irregular verbs for duty and permission.',
          ['grammar', 'fr-a12-devoir-falloir'],
          2,
          4,
        ),
        lesson: 'fr-a12-devoir-falloir',
      },
      {
        tables: [
          presentTable(
            'devoir',
            'must, to have to',
            ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'],
            ['je', 'il/elle/on', 'nous'],
          ),
          presentTable(
            'pouvoir',
            'can, to be able to',
            ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'],
            ['tu', 'vous', 'ils/elles'],
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-pronominal-pc',
      'conjugation',
      {
        ...meta(
          'Pronominal verbs in the past',
          'Me suis, t’es, s’est: always être, and the participle agrees (shown for men).',
          ['grammar', 'fr-a12-pc-pronominal'],
          2,
          4,
        ),
        lesson: 'fr-a12-pc-pronominal',
      },
      {
        tables: [
          {
            id: 'pc-se-blesser',
            verb: 'se blesser',
            meaning: 'to hurt oneself – passé composé',
            forms: passeComposeReflexive('blesser'),
            blanks: ['je', 'il/elle/on', 'nous'],
          },
          {
            id: 'pc-se-reposer',
            verb: 'se reposer',
            meaning: 'to rest – passé composé',
            forms: passeComposeReflexive('reposer'),
            blanks: ['tu', 'vous', 'ils/elles'],
          },
          {
            id: 'pc-se-soigner',
            verb: 'se soigner',
            meaning: 'to look after oneself – passé composé',
            forms: passeComposeReflexive('soigner'),
            blanks: ['je', 'nous', 'ils/elles'],
          },
        ],
      },
    ),

    activity(
      U,
      'gap-avoir-mal',
      'gapfill',
      {
        ...meta(
          'Where does it hurt?',
          'À + the body part: au, à la, à l’ or aux.',
          ['grammar', 'fr-a12-avoir-mal', 'health-body'],
          2,
          4,
        ),
        lesson: 'fr-a12-avoir-mal',
      },
      {
        items: [
          gap(
            'm1',
            'J’ai mal ___ tête.',
            'à la',
            ['à la', 'au', 'aux', 'à l’'],
            'I have a headache.',
            'Tête is feminine: à la tête.',
          ),
          gap(
            'm2',
            'Il a mal ___ dos.',
            'au',
            ['au', 'à la', 'aux', 'à l’'],
            'He has a backache.',
            'Dos is masculine: à + le = au.',
          ),
          gap(
            'm3',
            'Elle a mal ___ dents.',
            'aux',
            ['aux', 'au', 'à la', 'à l’'],
            'She has toothache.',
            'Dents is plural: à + les = aux.',
          ),
          gap(
            'm4',
            'Nous avons mal ___ oreille.',
            'à l’',
            ['à l’', 'à la', 'au', 'aux'],
            'Our ear hurts.',
            'Oreille starts with a vowel: à l’oreille.',
          ),
          gap(
            'm5',
            'Tu as mal ___ pied ?',
            'au',
            ['au', 'à la', 'aux', 'à l’'],
            'Does your foot hurt?',
            'Pied is masculine: au pied.',
          ),
          gap(
            'm6',
            'J’ai mal ___ gorge.',
            'à la',
            ['à la', 'au', 'aux', 'à l’'],
            'I have a sore throat.',
            'Gorge is feminine: à la gorge.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-devoir',
      'gapfill',
      {
        ...meta(
          'devoir or il faut?',
          'Say what you must do, and what you must not do.',
          ['grammar', 'fr-a12-devoir-falloir', 'health-body'],
          2,
          4,
        ),
        lesson: 'fr-a12-devoir-falloir',
      },
      {
        items: [
          gap(
            'd1',
            'Vous ___ prendre ce sirop trois fois par jour.',
            'devez',
            ['devez', 'dois', 'doit', 'devons'],
            'You must take this syrup three times a day.',
            'Vous goes with devez.',
          ),
          gap(
            'd2',
            'Je ___ aller chez le médecin.',
            'dois',
            ['dois', 'doit', 'devons', 'doivent'],
            'I have to go to the doctor.',
            'Je goes with dois.',
          ),
          gap(
            'd3',
            'Il ___ se reposer.',
            'faut',
            ['faut', 'fait', 'doit', 'devoir'],
            'You need to rest.',
            'Il faut + infinitive: you need to.',
          ),
          gap(
            'd4',
            'Il ne ___ pas fumer quand on est malade.',
            'faut',
            ['faut', 'fait', 'doit', 'devez'],
            'You must not smoke when you are ill.',
            'Il ne faut pas + infinitive means you must not.',
          ),
          gap(
            'd5',
            'Les enfants ___ rester au lit.',
            'doivent',
            ['doivent', 'doit', 'devons', 'dois'],
            'The children have to stay in bed.',
            'Ils/elles goes with doivent.',
          ),
          gap(
            'd6',
            'Nous ___ appeler les secours.',
            'devons',
            ['devons', 'devez', 'doivent', 'doit'],
            'We must call the emergency services.',
            'Nous goes with devons.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-lui-leur',
      'gapfill',
      {
        ...meta(
          'lui or leur?',
          'Replace “to him / to her” and “to them”.',
          ['grammar', 'fr-a12-lui-leur', 'health-body'],
          2,
          4,
        ),
        lesson: 'fr-a12-lui-leur',
      },
      {
        items: [
          gap(
            'l1',
            'Tu téléphones à ta mère ? – Oui, je ___ téléphone.',
            'lui',
            ['lui', 'leur', 'la', 'les'],
            'Are you calling your mother? – Yes, I am calling her.',
            'Téléphoner à + one person: lui.',
          ),
          gap(
            'l2',
            'Le médecin parle aux patients. Il ___ parle lentement.',
            'leur',
            ['leur', 'lui', 'les', 'le'],
            'The doctor talks to the patients. He talks to them slowly.',
            'Parler à + several people: leur.',
          ),
          gap(
            'l3',
            'Je donne le médicament à Paul. Je ___ donne le médicament.',
            'lui',
            ['lui', 'leur', 'le', 'la'],
            'I give Paul the medicine. I give him the medicine.',
            'Donner à + one person: lui.',
          ),
          gap(
            'l4',
            'Le pharmacien ___ explique la pommade. (à nous)',
            'nous',
            ['nous', 'lui', 'leur', 'les'],
            'The pharmacist explains the ointment to us.',
            'Nous stays nous, before the verb.',
          ),
          gap(
            'l5',
            'Tu demandes un conseil à tes amis ? – Oui, je ___ demande un conseil.',
            'leur',
            ['leur', 'lui', 'les', 'leurs'],
            'Are you asking your friends for advice? – Yes, I am asking them for advice.',
            'Demander à + several people: leur (no -s).',
          ),
          gap(
            'l6',
            'Il ne ___ répond pas.',
            'lui',
            ['lui', 'leur', 'le', 'la'],
            'He does not answer him / her.',
            'Répondre à + one person: lui; ne goes before it.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-pc-pronominal',
      'gapfill',
      {
        ...meta(
          'What happened?',
          'The passé composé of pronominal verbs.',
          ['grammar', 'fr-a12-pc-pronominal', 'mishaps-regrets'],
          2,
          4,
        ),
        lesson: 'fr-a12-pc-pronominal',
      },
      {
        items: [
          gap(
            'p1',
            'Hier, je ___ blessé au genou.',
            'me suis',
            ['me suis', 'm’ai', 'me ai', 'je suis'],
            'Yesterday I hurt my knee.',
            'Pronominal verbs take être: je me suis blessé.',
          ),
          gap(
            'p2',
            'Elle s’est ___ le bras.',
            'cassé',
            ['cassé', 'cassée', 'cassés', 'casser'],
            'She broke her arm.',
            'Here the participle stays cassé (the arm is the object).',
          ),
          gap(
            'p3',
            'Nous nous ___ reposés tout le week-end.',
            'sommes',
            ['sommes', 'avons', 'sont', 'êtes'],
            'We rested all weekend.',
            'Nous nous sommes reposés: être, plural -s.',
          ),
          gap(
            'p4',
            'Tu ne ___ pas soigné ?',
            't’es',
            ['t’es', 't’as', 'te es', 'tu es'],
            'Did you not look after yourself?',
            'Te + es becomes t’es. In a question with ne, pas follows: tu ne t’es pas soigné.',
          ),
          gap(
            'p5',
            'Mes amis se sont ___ sur la glace.',
            'blessés',
            ['blessés', 'blessé', 'blessées', 'blesser'],
            'My friends hurt themselves on the ice.',
            'Amis is masculine plural: blessés.',
          ),
          gap(
            'p6',
            'Elle ne s’est pas ___ .',
            'blessée',
            ['blessée', 'blessé', 'blessés', 'blessées'],
            'She did not hurt herself.',
            'Elle is feminine singular: blessée.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-because',
      'gapfill',
      {
        ...meta(
          'pourquoi or parce que?',
          'Ask for a reason and give one.',
          ['grammar', 'fr-a12-because', 'health-body'],
          2,
          4,
        ),
        lesson: 'fr-a12-because',
      },
      {
        items: [
          gap(
            'b1',
            '___ tu restes au lit ?',
            'Pourquoi',
            ['Pourquoi', 'Parce que', 'Comment', 'Quand'],
            'Why are you staying in bed?',
            'Pourquoi asks for a reason.',
          ),
          gap(
            'b2',
            'Je reste au lit ___ j’ai de la fièvre.',
            'parce que',
            ['parce que', 'pourquoi', 'alors', 'quand'],
            'I am staying in bed because I have a fever.',
            'Parce que introduces the reason.',
          ),
          gap(
            'b3',
            'J’ai de la fièvre, ___ je reste au lit.',
            'alors',
            ['alors', 'parce que', 'pourquoi', 'puis'],
            'I have a fever, so I am staying in bed.',
            'Alors introduces the consequence.',
          ),
          gap(
            'b4',
            'Elle ne vient pas ___ elle est malade.',
            'parce qu’',
            ['parce qu’', 'parce que', 'pourquoi', 'alors'],
            'She is not coming because she is ill.',
            'Parce que becomes parce qu’ before il, elle, on, un, une.',
          ),
          gap(
            'b5',
            '– Pourquoi tu tousses ? – ___ je suis enrhumé.',
            'Parce que',
            ['Parce que', 'Pourquoi', 'Alors', 'Mais'],
            '– Why are you coughing? – Because I have a cold.',
            'Answer pourquoi with parce que.',
          ),
          gap(
            'b6',
            'Pierre est tombé, ___ il a mal au genou.',
            'alors',
            ['alors', 'parce que', 'pourquoi', 'mais'],
            'Pierre fell, so his knee hurts.',
            'Alors gives the result.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'health-body'],
        2,
        4,
      ),
      {
        items: [
          {
            ...sent('s1', 'I have a headache.', ['J’ai', 'mal', 'à', 'la', 'tête.'], {
              extra: ['au'],
            }),
            lesson: 'fr-a12-avoir-mal' as const,
          },
          {
            ...sent('s2', 'You must rest.', ['Vous', 'devez', 'vous', 'reposer.'], {
              extra: ['dois'],
            }),
            lesson: 'fr-a12-devoir-falloir' as const,
          },
          {
            ...sent(
              's3',
              'The doctor gives her a prescription.',
              ['Le', 'médecin', 'lui', 'donne', 'une', 'ordonnance.'],
              { extra: ['leur'] },
            ),
            lesson: 'fr-a12-lui-leur' as const,
          },
          {
            ...sent(
              's4',
              'I hurt my foot yesterday.',
              ['Hier,', 'je', 'me', 'suis', 'blessé', 'au', 'pied.'],
              { extra: ['ai'] },
            ),
            lesson: 'fr-a12-pc-pronominal' as const,
          },
          {
            ...sent('s5', 'You must not smoke.', ['Il', 'ne', 'faut', 'pas', 'fumer.'], {
              extra: ['doit'],
            }),
            lesson: 'fr-a12-devoir-falloir' as const,
          },
          {
            ...sent(
              's6',
              'I am staying at home because I am ill.',
              ['Je', 'reste', 'chez', 'moi', 'parce', 'que', 'je', 'suis', 'malade.'],
              { extra: ['pourquoi'] },
            ),
            lesson: 'fr-a12-because' as const,
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'At the doctor’s and at the pharmacy',
        'Explain what hurts, then buy your medicine.',
        ['communication', 'health-body'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'doctor',
            title: 'At the doctor’s',
            emoji: '🩺',
            setting: 'You go to the doctor with a cold. Use vous.',
            turns: [
              say('Le médecin', 'Bonjour. Qu’est-ce qui ne va pas ?', 'Hello. What is wrong?'),
              you(
                'J’ai mal à la gorge et je tousse depuis hier.',
                ['J’ai mal au gorge et je tousse depuis hier.', 'Gorge is feminine: à la gorge.'],
                [
                  'Je suis mal à la gorge et je tousse depuis hier.',
                  'You say j’ai mal à …, with avoir.',
                ],
              ),
              say(
                'Le médecin',
                'Vous avez de la fièvre ? Il faut prendre votre température.',
                'Do you have a fever? You need to take your temperature.',
              ),
              you(
                'Oui, un peu. Je dois rester au lit ?',
                ['Oui, un peu. Je doit rester au lit ?', 'The je form of devoir is dois.'],
                [
                  'Oui, un peu. Je dois restez au lit ?',
                  'After devoir the verb stays in the infinitive: rester.',
                ],
              ),
            ],
          },
          {
            id: 'pharmacy',
            title: 'At the pharmacy',
            emoji: '💊',
            setting: 'You buy medicine with a prescription. Use vous.',
            turns: [
              say(
                'Le pharmacien',
                'Bonjour. Vous avez une ordonnance ?',
                'Hello. Do you have a prescription?',
              ),
              you(
                'Oui, la voilà. Le médecin me l’a donnée ce matin.',
                [
                  'Oui, la voilà. Le médecin la a donné ce matin.',
                  'La + a becomes l’a, and the pronoun goes before the helping verb.',
                ],
                [
                  'Oui, le voilà. Le médecin me l’a donnée ce matin.',
                  'Ordonnance is feminine: la voilà.',
                ],
              ),
              say(
                'Le pharmacien',
                'Très bien. Prenez ce sirop trois fois par jour. Ne prenez pas de comprimés avec.',
                'Very good. Take this syrup three times a day. Do not take tablets with it.',
              ),
              you(
                'D’accord, merci. Je vais me soigner et me reposer.',
                [
                  'D’accord, merci. Je vais soigner et reposer.',
                  'Both verbs are pronominal: me soigner, me reposer.',
                ],
                [
                  'D’accord, merci. Je vais me soignes et me reposes.',
                  'After aller the verb stays in the infinitive.',
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
        'Health blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', 'health-body'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Le dos” is the back.', true),
          tf(
            'b2',
            '“La dent” means “the ear”.',
            false,
            'La dent is the tooth. The ear is l’oreille.',
          ),
          tf('b3', '“J’ai mal à la tête” means “I have a headache”.', true),
          tf(
            'b4',
            '“J’ai mal au main” is correct.',
            false,
            'Main is feminine: j’ai mal à la main.',
          ),
          tf('b5', '“Il ne faut pas fumer” means “You must not smoke”.', true),
          tf('b6', '“Nous devons” is the nous form of devoir.', true),
          tf('b7', '“Tu lui parles” replaces “Tu parles à Marie”.', true),
          tf(
            'b8',
            '“Je leur parle” replaces “Je parle à Marie”.',
            false,
            'Marie is one person, so lui. Leur is for several people.',
          ),
          tf('b9', '“Je me suis blessé” uses être.', true),
          tf(
            'b10',
            '“Je m’ai blessé” is correct.',
            false,
            'Pronominal verbs take être: je me suis blessé.',
          ),
          tf('b11', '“Parce que” gives a reason.', true),
          tf('b12', '“Pas de chance !” means “Good luck!”.', false, 'It means bad luck!'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'health-body'],
        3,
        4,
      ),
      {
        questions: [
          {
            ...q('c1', 'Complete: “J’ai mal ___ dents.”', 'aux', ['au', 'à la', 'à l’']),
            lesson: 'fr-a12-avoir-mal' as const,
          },
          {
            ...q('c2', 'Complete: “Il ne ___ pas manger trop de sucre.”', 'faut', [
              'fait',
              'doit',
              'devez',
            ]),
            lesson: 'fr-a12-devoir-falloir' as const,
          },
          {
            ...q(
              'c3',
              'Replace “à ses parents”: “Il téléphone à ses parents.”',
              'Il leur téléphone.',
              ['Il lui téléphone.', 'Il les téléphone.', 'Il téléphone leur.'],
            ),
            lesson: 'fr-a12-lui-leur' as const,
          },
          {
            ...q('c4', 'Which sentence is correct?', 'Elle s’est blessée.', [
              'Elle a blessée.',
              'Elle s’a blessée.',
              'Elle est blessée soi.',
            ]),
            lesson: 'fr-a12-pc-pronominal' as const,
          },
          {
            ...q('c5', 'Complete: “Je reste au lit ___ je suis fatigué.”', 'parce que', [
              'pourquoi',
              'alors',
              'quand',
            ]),
            lesson: 'fr-a12-because' as const,
          },
          q('c6', 'What does “l’ordonnance” mean?', 'prescription', [
            'pharmacy',
            'appointment',
            'tablet',
          ]),
          q('c7', 'What does “le médecin de garde” mean?', 'doctor on call', [
            'fire brigade',
            'pharmacy',
            'waiting room',
          ]),
          q('c8', 'What do you say to a sick friend?', 'Bon rétablissement !', [
            'Bon appétit !',
            'Bon voyage !',
            'Bonne année !',
          ]),
        ],
      },
    ),
  ],
};
