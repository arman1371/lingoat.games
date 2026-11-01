import { vocabList } from '../builders';
import {
  activity,
  cards,
  frForms,
  g,
  meta,
  q,
  qs,
  say,
  sent,
  tf,
  unitFr,
  vocabGames,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b2-1-sante';

const symptoms = vocabList(U, 'Symptoms and health problems', [
  ['une courbature', 'an ache (after exercise)', '💪'],
  ['une crampe', 'a cramp', '⚡'],
  ['le vertige', 'dizziness, vertigo', '😵‍💫'],
  ['une migraine', 'a migraine', '🤯'],
  ['une entorse', 'a sprain', '🦶'],
  ['une fracture', 'a fracture', '🦴'],
  ['la tension', 'blood pressure', '🩺'],
  ['le surmenage', 'overwork, burnout', '🥵'],
  ['l’insomnie', 'insomnia', '🌙'],
  ['un symptôme', 'a symptom', '🌡️'],
  ['une maladie chronique', 'a chronic illness', '♾️'],
  ['la fatigue', 'tiredness', '😴'],
  ['le stress', 'stress', '😰'],
  ['un diagnostic', 'a diagnosis', '📋'],
]);

const care = vocabList(U, 'Treatment, prevention and sport', [
  ['un traitement', 'a treatment', '💊'],
  ['la posologie', 'dosage', '🥄'],
  ['un effet secondaire', 'a side effect', '⚠️'],
  ['le dépistage', 'screening', '🔬'],
  ['la rééducation', 'rehabilitation', '🏃'],
  ['un kinésithérapeute', 'a physiotherapist', '🧑‍⚕️'],
  ['une hospitalisation', 'a hospital stay', '🏥'],
  ['la prévention', 'prevention', '🛡️'],
  ['le dopage', 'doping', '💉'],
  ['un échauffement', 'a warm-up', '🤸'],
  ['la récupération', 'recovery', '🛌'],
  ['une mutuelle', 'supplementary health insurance', '🧾'],
]);

const phrases = vocabList(U, 'Giving and asking for advice', [
  [
    'À votre place, je consulterais un spécialiste.',
    'In your place, I would see a specialist.',
    '👩‍⚕️',
  ],
  ['Vous devriez vous reposer.', 'You should rest.', '🛌'],
  ['Il vaut mieux que vous évitiez le sucre.', 'It is better that you avoid sugar.', '🍬'],
  ['Je te conseille de dormir davantage.', 'I advise you to sleep more.', '😴'],
  ['Ce traitement a des effets secondaires.', 'This treatment has side effects.', '⚠️'],
  ['Il faut que je prenne rendez-vous.', 'I need to make an appointment.', '📅'],
  ['Pourriez-vous m’indiquer un bon kiné ?', 'Could you recommend a good physio?', '🙋'],
  ['Ça fait trois jours que j’ai mal à la tête.', 'I have had a headache for three days.', '🤕'],
]);

const vocab = [...symptoms, ...care, ...phrases];

const ADVICE: [string, 'soft' | 'firm', string][] = [
  ['Vous devriez vous reposer.', 'soft', 'You should rest.'],
  ['À votre place, je me reposerais.', 'soft', 'In your place, I would rest.'],
  ['Pourquoi ne pas vous reposer ?', 'soft', 'Why not rest?'],
  ['Je vous conseille de vous reposer.', 'soft', 'I advise you to rest.'],
  ['Il vaudrait mieux que vous dormiez.', 'soft', 'It would be better if you slept.'],
  ['Vous pourriez essayer le yoga.', 'soft', 'You could try yoga.'],
  ['Vous devez vous reposer.', 'firm', 'You must rest.'],
  ['Il faut que vous vous reposiez.', 'firm', 'You have to rest.'],
  ['Reposez-vous !', 'firm', 'Rest!'],
  ['Il est interdit de fumer ici.', 'firm', 'Smoking is forbidden here.'],
  ['Il est obligatoire de se vacciner.', 'firm', 'Vaccination is compulsory.'],
  ['Prenez ce médicament trois fois par jour.', 'firm', 'Take this medicine three times a day.'],
];

export const sante: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Santé !',
    subtitle: 'Describe health problems, talk about treatment and sport, and give advice with tact',
    emoji: '🩺',
    goals: [
      'Describe symptoms, treatments and prevention',
      'Give advice politely with the conditional',
      'Give firmer advice with the imperative, il faut que and il vaut mieux que',
    ],
    grammar: ['The conditional for advice and politeness', 'Giving advice'],
    vocabFields: [
      'Symptoms and health problems',
      'Treatment, prevention and sport',
      'Giving and asking for advice',
    ],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'health-advice', {
      a: {
        title: 'Symptoms and problems',
        description: 'Words for what is wrong.',
        words: symptoms,
      },
      b: { title: 'Treatment and prevention', description: 'Care, sport and doping.', words: care },
      listen: [
        'une courbature',
        'le vertige',
        'une migraine',
        'l’insomnie',
        'un traitement',
        'la posologie',
        'le dopage',
        'un échauffement',
      ],
      spell: [
        ['unscramble', 'migraine', 'migraine', '🤯', 'une migraine'],
        ['unscramble', 'traitement', 'treatment', '💊', 'un traitement'],
        ['type', 'insomnie', 'insomnia', '🌙', 'l’insomnie'],
        ['type', 'dépistage', 'screening', '🔬', 'le dépistage'],
        ['type', 'entorse', 'sprain', '🦶', 'une entorse'],
      ],
    }),

    activity(
      U,
      'gap-conditional',
      'gapfill',
      meta(
        'Advice with the conditional',
        'The conditional softens advice, wishes and requests.',
        ['grammar', 'fr-conditionnel-present', 'health-advice'],
        2,
        4,
        'fr-conditionnel-present',
      ),
      {
        items: [
          g(
            'c1',
            'À ta place, je ___ un médecin.',
            'consulterais',
            [
              ['consulte', 'After “à ta place” the advice is in the conditional.'],
              ['consulterai', 'The future states a plan; the conditional gives advice.'],
              ['consultais', 'The imparfait is a past tense, not a conditional.'],
            ],
            'In your place, I would see a doctor.',
            'Conditional = futur stem + imparfait ending.',
          ),
          g(
            'c2',
            'Vous ___ vous reposer un peu.',
            'devriez',
            [
              ['devez', 'Devez is an order; devriez is softer advice.'],
              ['devrez', 'That is a future, not a conditional.'],
              ['deviez', 'That is the imparfait: not advice.'],
            ],
            'You should rest a little.',
            'Devoir in the conditional gives advice.',
          ),
          g(
            'c3',
            '___-vous m’indiquer un bon kiné ?',
            'Pourriez',
            [
              ['Pourrez', 'The future asks about later; the conditional asks politely.'],
              ['Pouviez', 'The imparfait is not a polite request.'],
              ['Puissiez', 'That is the subjunctive: not used for a request like this.'],
            ],
            'Could you recommend a good physio?',
            'A polite request: conditional of pouvoir.',
          ),
          g(
            'c4',
            'Si j’étais toi, je ne ___ pas si tard.',
            'mangerais',
            [
              ['mangeais', 'After si + imparfait, the main clause takes the conditional.'],
              ['mangerai', 'After si + imparfait, the main clause takes the conditional.'],
              ['mange', 'After si + imparfait, the main clause takes the conditional.'],
            ],
            'If I were you, I would not eat so late.',
            'Si + imparfait → conditional.',
          ),
          g(
            'c5',
            'Je ___ bien arrêter de fumer, mais c’est difficile.',
            'voudrais',
            [
              ['voulais', 'The conditional expresses a wish that is not yet reality.'],
              ['voudrai', 'The future would make it a promise.'],
              ['veuille', 'That is the subjunctive: not used here.'],
            ],
            'I would like to stop smoking, but it is hard.',
            'A wish: conditional of vouloir.',
          ),
          g(
            'c6',
            'Selon la presse, ce vaccin ___ efficace à 90 %.',
            'serait',
            [
              ['est', 'The conditional shows the information is not confirmed.'],
              ['sera', 'The future speaks of later, not of reported information.'],
              ['était', 'The imparfait would put it in the past.'],
            ],
            'According to the press, this vaccine would be 90% effective.',
            'The conditional of reported, unconfirmed information.',
          ),
          g(
            'c7',
            'Ce ___ mieux de se coucher tôt.',
            'serait',
            [
              ['sera', 'Advice is softened with the conditional.'],
              ['était', 'The imparfait is a past tense here.'],
              ['soit', 'The subjunctive does not follow ce here.'],
            ],
            'It would be better to go to bed early.',
            'Être in the conditional: serais, serait …',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-advice',
      'gapfill',
      meta(
        'Ways to advise',
        'Imperative, il faut que, il vaut mieux que and verbs of advice.',
        ['grammar', 'fr-giving-advice', 'health-advice'],
        3,
        4,
        'fr-giving-advice',
      ),
      {
        items: [
          g(
            'a1',
            'Il vaut mieux que tu ___ chez le médecin.',
            'ailles',
            [
              ['vas', 'Il vaut mieux que is followed by the subjunctive.'],
              ['iras', 'Il vaut mieux que is followed by the subjunctive.'],
              ['irais', 'Il vaut mieux que is followed by the subjunctive.'],
            ],
            'It is better that you go to the doctor.',
            'Il vaut mieux que + subjunctive.',
          ),
          g(
            'a2',
            'Il faut que vous ___ plus d’eau.',
            'buviez',
            [
              ['buvez', 'Il faut que is followed by the subjunctive.'],
              ['boirez', 'Il faut que is followed by the subjunctive.'],
              ['boiriez', 'Il faut que is followed by the subjunctive.'],
            ],
            'You have to drink more water.',
            'Il faut que + subjunctive.',
          ),
          g(
            'a3',
            'Si vous avez mal, ___ un cachet.',
            'prenez',
            [
              ['vous prenez', 'The imperative has no subject pronoun.'],
              ['prendre', 'The imperative uses the conjugated form.'],
              ['prendriez', 'The conditional is advice; the imperative is an instruction.'],
            ],
            'If you are in pain, take a tablet.',
            'Imperative: the vous form without the pronoun.',
          ),
          g(
            'a4',
            'Je vous conseille ___ plus souvent.',
            'de marcher',
            [
              ['marcher', 'Conseiller à quelqu’un de + infinitive.'],
              ['que de marcher', 'Conseiller de + infinitive, without que.'],
              ['à marcher', 'Conseiller de + infinitive, not à.'],
            ],
            'I advise you to walk more often.',
            'Conseiller de + infinitive.',
          ),
          g(
            'a5',
            '___-toi bien !',
            'Soigne',
            [
              ['Soignes', 'In the tu imperative of -er verbs the final s disappears.'],
              ['Soigner', 'The imperative uses the conjugated form.'],
              ['Soignez', 'Soignez is the vous form; here the pronoun is toi.'],
            ],
            'Take good care of yourself!',
            'Tu imperative of -er verbs: no -s.',
          ),
          g(
            'a6',
            'Il est conseillé ___ beaucoup d’eau.',
            'de boire',
            [
              ['boire', 'Il est conseillé de + infinitive.'],
              ['que boire', 'Il est conseillé de + infinitive.'],
              ['à boire', 'Il est conseillé de + infinitive.'],
            ],
            'It is advisable to drink a lot of water.',
            'Il est conseillé de + infinitive.',
          ),
          g(
            'a7',
            'Il vaudrait mieux que vous ___ le sport pendant une semaine.',
            'arrêtiez',
            [
              ['arrêtez', 'Il vaudrait mieux que is followed by the subjunctive.'],
              ['arrêterez', 'Il vaudrait mieux que is followed by the subjunctive.'],
              ['arrêteriez', 'Il vaudrait mieux que is followed by the subjunctive.'],
            ],
            'It would be better if you stopped sport for a week.',
            'Il vaudrait mieux que + subjunctive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-advice',
      'sortit',
      meta(
        'Soft or firm?',
        'Is it a gentle suggestion or a firm instruction?',
        ['grammar', 'fr-giving-advice', 'fr-conditionnel-present', 'health-advice'],
        2,
        4,
        'fr-giving-advice',
      ),
      {
        instruction: 'Is this a soft suggestion or a firm instruction?',
        buckets: [
          { id: 'soft', label: 'soft advice', emoji: '🌤️' },
          { id: 'firm', label: 'firm instruction', emoji: '🛑' },
        ],
        items: cards('a', ADVICE),
      },
    ),

    activity(
      U,
      'conj-conditional',
      'conjugation',
      meta(
        'The conditional',
        'Fill in the conditional forms of four verbs.',
        ['grammar', 'fr-conditionnel-present'],
        3,
        4,
      ),
      {
        tables: [
          frForms(
            'cond-devoir',
            'devoir (conditionnel)',
            'must, ought to',
            ['devrais', 'devrais', 'devrait', 'devrions', 'devriez', 'devraient'],
            ['je', 'il/elle/on', 'vous'],
            'fr-conditionnel-present',
          ),
          frForms(
            'cond-pouvoir',
            'pouvoir (conditionnel)',
            'can, could',
            ['pourrais', 'pourrais', 'pourrait', 'pourrions', 'pourriez', 'pourraient'],
            ['tu', 'nous', 'ils/elles'],
            'fr-conditionnel-present',
          ),
          frForms(
            'cond-faire',
            'faire (conditionnel)',
            'to do, to make',
            ['ferais', 'ferais', 'ferait', 'ferions', 'feriez', 'feraient'],
            ['je', 'vous', 'ils/elles'],
            'fr-conditionnel-present',
          ),
          frForms(
            'cond-aller',
            'aller (conditionnel)',
            'to go',
            ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
            ['tu', 'il/elle/on', 'nous'],
            'fr-conditionnel-present',
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
        ['grammar', 'fr-conditionnel-present', 'fr-giving-advice'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'In your place, I would see a specialist.',
            ['À', 'votre', 'place,', 'je', 'consulterais', 'un', 'spécialiste.'],
            { extra: ['consulterai'], lesson: 'fr-conditionnel-present' },
          ),
          sent(
            's2',
            'You should drink more water.',
            ['Vous', 'devriez', 'boire', 'plus', 'd’eau.'],
            { extra: ['devrez'], lesson: 'fr-conditionnel-present' },
          ),
          sent(
            's3',
            'It is better that you go to bed early.',
            ['Il', 'vaut', 'mieux', 'que', 'vous', 'vous', 'couchiez', 'tôt.'],
            { extra: ['couchez'], lesson: 'fr-giving-advice' },
          ),
          sent(
            's4',
            'I advise you to see a physiotherapist.',
            ['Je', 'vous', 'conseille', 'de', 'voir', 'un', 'kinésithérapeute.'],
            { extra: ['que'], lesson: 'fr-giving-advice' },
          ),
          sent(
            's5',
            'Could you tell me where the pharmacy is?',
            ['Pourriez-vous', 'me', 'dire', 'où', 'est', 'la', 'pharmacie ?'],
            { extra: ['Pourrez-vous'], lesson: 'fr-conditionnel-present' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Understand the advice',
        'Read what the doctor says and pick its meaning.',
        ['communication', 'health-advice'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Vous devriez dormir davantage et éviter le stress.',
            'You should sleep more and avoid stress.',
            [
              'You must sleep less and avoid sport.',
              'You slept more and avoided stress.',
              'You will sleep more because of stress.',
            ],
          ),
          qs(
            'r2',
            'Ce médicament peut avoir des effets secondaires.',
            'This medicine may have side effects.',
            [
              'This medicine has no effect.',
              'This medicine replaces a treatment.',
              'This medicine is only for sports people.',
            ],
          ),
          qs(
            'r3',
            'Il faudrait faire un dépistage chaque année.',
            'One should be screened every year.',
            [
              'A screening is forbidden every year.',
              'The screening was done last year.',
              'Nobody needs a screening.',
            ],
          ),
          qs(
            'r4',
            'Après l’entorse, la rééducation durera six semaines.',
            'After the sprain, rehabilitation will last six weeks.',
            [
              'The sprain lasted six weeks before rehabilitation.',
              'Rehabilitation caused the sprain.',
              'There is no rehabilitation after a sprain.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'At the doctor’s',
        'Describe your problem and ask for advice.',
        ['communication', 'health-advice'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'doctor',
            title: 'At the doctor’s',
            emoji: '🩺',
            setting: 'You see a doctor about constant tiredness. Use vous.',
            turns: [
              say('Le médecin', 'Qu’est-ce qui vous arrive ?', 'What is the matter?'),
              you(
                'Ça fait trois semaines que je dors mal et j’ai des vertiges.',
                [
                  'Ça fait trois semaines que je dormirais mal et j’ai des vertiges.',
                  'Ça fait + a real fact: use the present.',
                ],
                [
                  'Ça fait trois semaines que je dors mal et j’ai une fracture.',
                  'A fracture does not fit these symptoms.',
                ],
              ),
              say(
                'Le médecin',
                'Vous devriez vous reposer. Il faut aussi que je prenne votre tension.',
                'You should rest. I also need to take your blood pressure.',
              ),
              you(
                'D’accord. Est-ce que vous me conseilleriez un traitement ?',
                [
                  'D’accord. Est-ce que vous me conseillerez un traitement hier ?',
                  'Hier does not go with a future.',
                ],
                [
                  'D’accord. Est-ce que vous me conseilliez un dopage ?',
                  'Doping is not a treatment.',
                ],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'Advice for a friend',
            emoji: '🏃',
            setting: 'A friend has hurt their ankle running. Use tu.',
            turns: [
              say(
                'Inès',
                'Je me suis fait une entorse et je veux reprendre le sport.',
                'I sprained my ankle and I want to start sport again.',
              ),
              you(
                'À ta place, j’attendrais la fin de la rééducation.',
                [
                  'À ta place, j’attendrai la fin de la rééducation.',
                  'Advice after “à ta place” takes the conditional.',
                ],
                [
                  'À ta place, j’attendais la fin de l’échauffement.',
                  'This changes the idea and uses the imparfait.',
                ],
              ),
              say(
                'Inès',
                'Et tu crois que je pourrais courir dans un mois ?',
                'And do you think I could run in a month?',
              ),
              you(
                'Il vaut mieux que tu demandes à ton kiné.',
                [
                  'Il vaut mieux que tu demandes à ton dopage.',
                  'Un dopage is not a person you can ask.',
                ],
                [
                  'Il vaut mieux que tu demandais à ton kiné.',
                  'Il vaut mieux que needs the subjunctive: demandes.',
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
        ['grammar', 'fr-conditionnel-present', 'fr-giving-advice'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Vous devriez vous reposer” is polite advice.', true),
          tf('b2', 'The conditional is built from the futur stem and imparfait endings.', true),
          tf(
            'b3',
            '“Il faut que tu vas chez le médecin” is correct.',
            false,
            'Il faut que takes the subjunctive: que tu ailles.',
          ),
          tf(
            'b4',
            '“Je te conseille de dormir” needs “que”.',
            false,
            'Conseiller à quelqu’un de + infinitive.',
          ),
          tf('b5', 'After “si + imparfait”, the main clause is in the conditional.', true),
          tf(
            'b6',
            '“Soignes-toi !” is the correct tu imperative.',
            false,
            'Without s: Soigne-toi !',
          ),
          tf('b7', '“La posologie” tells you how much medicine to take.', true),
          tf(
            'b8',
            '“Une courbature” is a broken bone.',
            false,
            'A broken bone is une fracture; une courbature is an ache.',
          ),
          tf('b9', 'The conditional can show that news is not confirmed.', true),
          tf(
            'b10',
            '“Le dopage” is part of a normal warm-up.',
            false,
            'Le dopage is doping; a warm-up is un échauffement.',
          ),
          tf('b11', '“Pourriez-vous m’aider ?” is more polite than “Pouvez-vous m’aider ?”.', true),
          tf('b12', '“La rééducation” follows an injury.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Health challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'health-advice'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Tu ___ voir un spécialiste.” (advice)',
            'devrais',
            ['dois', 'devras', 'devais'],
            undefined,
            'fr-conditionnel-present',
          ),
          q(
            'c2',
            'Complete: “Il vaut mieux que nous ___ tôt.”',
            'partions',
            ['partons', 'partirons', 'partirions'],
            undefined,
            'fr-giving-advice',
          ),
          q(
            'c3',
            'Complete: “Si j’avais mal, je ___ un médecin.”',
            'consulterais',
            ['consulterai', 'consulte', 'consultais'],
            undefined,
            'fr-conditionnel-present',
          ),
          q(
            'c4',
            'Which sentence gives the softest advice?',
            'À ta place, je me reposerais.',
            ['Repose-toi !', 'Tu dois te reposer.', 'Il faut que tu te reposes.'],
            undefined,
            'fr-giving-advice',
          ),
          q('c5', 'Which word means “a symptom”?', 'un symptôme', [
            'un diagnostic',
            'un traitement',
            'une mutuelle',
          ]),
          q('c6', 'Which word means “side effect”?', 'un effet secondaire', [
            'une prévention',
            'une posologie',
            'un dépistage',
          ]),
          q('c7', '“Je souffre d’une maladie chronique” means …', 'I have a long-term illness.', [
            'I have a sudden fever.',
            'I work in a clinic.',
            'I take part in a competition.',
          ]),
          q('c8', 'What do you call the exercises before sport?', 'un échauffement', [
            'une récupération',
            'une rééducation',
            'un surmenage',
          ]),
        ],
      },
    ),
  ],
};
