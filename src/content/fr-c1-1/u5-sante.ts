import { byDe, flashcards, quizDeEn, vocabList } from '../builders';
import {
  activity,
  cards,
  gh,
  heard,
  meta,
  q,
  qh,
  say,
  sent,
  tf,
  typed,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-c1-1-sante';
const L = 'fr-c11-pronouns' as const;

const soins = vocabList(U, 'The health system', [
  ['la Sécurité sociale', 'the national social security system', '🏥'],
  ['une mutuelle', 'a supplementary health insurance', '🛡️'],
  ['un remboursement', 'a reimbursement', '💶'],
  ['un certificat médical', 'a medical certificate', '📝'],
  ['le médecin traitant', 'the registered family doctor', '🩺'],
  ['un spécialiste', 'a specialist', '🧑‍⚕️'],
  ['un traitement', 'a treatment', '💊'],
  ['un effet secondaire', 'a side effect', '⚠️'],
  ['une posologie', 'a dosage', '🔢'],
  ['un dépistage', 'a screening', '🔬'],
  ['la vaccination', 'vaccination', '💉'],
  ['une épidémie', 'an epidemic', '🦠'],
  ['la prévention', 'prevention', '🚧'],
  ['un diagnostic', 'a diagnosis', '📋'],
  ['un arrêt maladie', 'sick leave', '🛌'],
  ['une pénurie de médicaments', 'a drug shortage', '📉'],
]);

const bienEtre = vocabList(U, 'Stress and well-being', [
  ['le stress', 'stress', '😰'],
  ['le surmenage', 'overwork, exhaustion', '🥵'],
  ['l’épuisement professionnel', 'burnout', '🔋'],
  ['l’hygiène de vie', 'lifestyle habits', '🧘'],
  ['la sédentarité', 'a sedentary lifestyle', '🛋️'],
  ['le sommeil', 'sleep', '😴'],
  ['la méditation', 'meditation', '🧎'],
  ['la pleine conscience', 'mindfulness', '🌸'],
  ['décompresser', 'to unwind', '🌬️'],
  ['se ressourcer', 'to recharge, to get back to basics', '🌳'],
  ['soulager', 'to relieve', '🤲'],
  ['se rétablir', 'to recover, to get back on one’s feet', '🌱'],
  ['la rémission', 'remission', '🎗️'],
  ['l’anxiété', 'anxiety', '😟'],
  ['un trouble', 'a disorder, a disturbance', '🌀'],
  ['le repos', 'rest', '🛏️'],
]);

const vocab = [...soins, ...bienEtre];

export const sante: UnitContent = {
  unit: unitFr({
    id: U,
    order: 5,
    title: 'Santé et bien-être',
    subtitle: 'The health system, stress and rest, with the pronouns y and en',
    emoji: '🩺',
    goals: [
      'Understand how the French health system and a prescription work',
      'Talk about stress, rest and lifestyle habits',
      'Replace words with y and en, and combine two pronouns in the right order',
    ],
    grammar: [
      'En: de + noun, a quantity (j’en ai besoin, j’en prends deux)',
      'Y: à / chez / dans + place or thing (j’y vais, j’y pense)',
      'Double pronouns: me le, le lui, lui en, y en; after a positive imperative: donnez-le-moi, parlez-en',
    ],
    vocabFields: ['The health system', 'Stress and well-being'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-soins',
      'flashcards',
      meta(
        'The health system',
        'Une mutuelle, un dépistage, un arrêt maladie – how care works.',
        ['vocabulary', 'health-fitness'],
        1,
        4,
      ),
      flashcards(soins),
    ),

    activity(
      U,
      'flash-bien-etre',
      'flashcards',
      meta(
        'Stress and well-being',
        'Le surmenage, décompresser, la pleine conscience – the words of rest.',
        ['vocabulary', 'stress-decisions'],
        1,
        4,
      ),
      flashcards(bienEtre),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'health-fitness'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'une mutuelle',
          'une posologie',
          'un dépistage',
          'un arrêt maladie',
          'le surmenage',
          'se ressourcer',
          'la rémission',
          'soulager',
        ),
        vocab,
      ),
    ),

    activity(
      U,
      'memory-definitions',
      'memory',
      meta(
        'Word and definition',
        'Match each word with its definition in French.',
        ['vocabulary', 'health-fitness'],
        2,
        4,
      ),
      {
        pairs: [
          {
            id: 'm1',
            a: 'un certificat médical',
            b: 'le papier où le médecin atteste un état de santé',
          },
          { id: 'm2', a: 'un remboursement', b: 'l’argent rendu par l’assurance' },
          { id: 'm3', a: 'un effet secondaire', b: 'une réaction non voulue d’un médicament' },
          { id: 'm4', a: 'la prévention', b: 'l’ensemble des gestes qui évitent la maladie' },
          { id: 'm5', a: 'se rétablir', b: 'retrouver la santé après une maladie' },
          { id: 'm6', a: 'décompresser', b: 'se détendre après une période de tension' },
          { id: 'm7', a: 'le surmenage', b: 'une fatigue due à un excès de travail' },
          { id: 'm8', a: 'une épidémie', b: 'une maladie qui touche beaucoup de monde' },
        ],
      },
    ),

    activity(
      U,
      'listen-sante',
      'listen',
      meta(
        'Listen to the doctor',
        'Listen to the sentence and pick what it says.',
        ['listening', 'health-fitness'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Mon médecin traitant m’a prescrit un traitement de dix jours.',
            'My family doctor prescribed me a ten-day treatment.',
            [
              'My specialist cancelled my treatment after ten days.',
              'My family doctor gave me sick leave for ten days.',
              'My doctor will treat me again in ten days.',
            ],
          ),
          heard(
            'l2',
            'La mutuelle rembourse une partie de la consultation.',
            'The supplementary insurance reimburses part of the consultation.',
            [
              'The social security covers the whole consultation.',
              'The insurance refuses to cover the consultation.',
              'The consultation is free for everyone.',
            ],
          ),
          heard(
            'l3',
            'Le stress et le manque de sommeil peuvent causer des troubles.',
            'Stress and lack of sleep can cause disorders.',
            [
              'Stress and a lot of sleep can cure disorders.',
              'Sleep and meditation help to prevent stress.',
              'Disorders can only be caused by an epidemic.',
            ],
          ),
          heard(
            'l4',
            'Le dépistage est gratuit, alors n’hésitez pas à en parler à votre médecin.',
            'Screening is free, so do not hesitate to talk to your doctor about it.',
            [
              'The vaccination is compulsory, so ask your doctor about it.',
              'Screening is expensive, so ask your insurance first.',
              'The doctor will test you for free when you hesitate.',
            ],
          ),
          heard(
            'l5',
            'Elle est en arrêt maladie depuis un mois pour épuisement professionnel.',
            'She has been on sick leave for a month because of burnout.',
            [
              'She has been on holiday for a month to recover from stress.',
              'She changed jobs a month ago after a long illness.',
              'She returned to work this month after her sick leave.',
            ],
          ),
          heard(
            'l6',
            'Cette pénurie de médicaments inquiète beaucoup de patients.',
            'This drug shortage worries many patients.',
            [
              'This new drug is worrying many doctors.',
              'This epidemic is causing a shortage of beds.',
              'Many patients are asking for a different dosage.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-pronouns',
      'sortit',
      meta(
        'Which pronoun replaces it?',
        'Sort the sentences by the pronoun that replaces the underlined idea.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'Which pronoun replaces the second part of the sentence?',
        buckets: [
          { id: 'y', label: 'y (à / chez / dans + place or thing)', emoji: '📍' },
          { id: 'en', label: 'en (de + noun, or a quantity)', emoji: '🧩' },
          { id: 'direct', label: 'le / la / les (a direct object)', emoji: '🎯' },
        ],
        items: cards('p', [
          ['Elle va à la pharmacie.', 'y', 'She goes to the pharmacy. (Elle y va.)'],
          ['Je pense à mon traitement.', 'y', 'I am thinking of my treatment. (J’y pense.)'],
          [
            'Il s’habitue à ce nouveau rythme.',
            'y',
            'He is getting used to this new rhythm. (Il s’y habitue.)',
          ],
          ['Nous allons chez le médecin.', 'y', 'We are going to the doctor. (Nous y allons.)'],
          [
            'Nous parlons de nos symptômes.',
            'en',
            'We are talking about our symptoms. (Nous en parlons.)',
          ],
          ['Il a pris deux comprimés.', 'en', 'He took two tablets. (Il en a pris deux.)'],
          [
            'Elle se souvient de la consultation.',
            'en',
            'She remembers the consultation. (Elle s’en souvient.)',
          ],
          ['J’ai besoin de repos.', 'en', 'I need rest. (J’en ai besoin.)'],
          [
            'Je vois le médecin demain.',
            'direct',
            'I am seeing the doctor tomorrow. (Je le vois.)',
          ],
          [
            'Tu prends tes médicaments.',
            'direct',
            'You are taking your medication. (Tu les prends.)',
          ],
          ['Elle écoute son médecin.', 'direct', 'She listens to her doctor. (Elle l’écoute.)'],
          ['Il a oublié l’ordonnance.', 'direct', 'He forgot the prescription. (Il l’a oubliée.)'],
        ]),
      },
    ),

    activity(
      U,
      'gap-pronouns',
      'gapfill',
      meta(
        'Choose the pronoun',
        'Pick the pronoun that replaces the words in the question.',
        ['grammar', L, 'health-fitness'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'Tu penses à ton traitement ? – Oui, j’___ pense tous les jours.',
            'y',
            {
              en: 'En replaces de + noun; penser takes à.',
              le: 'Le is a direct object, but penser à takes y for a thing.',
              lui: 'Lui replaces à + a person, not a thing.',
            },
            'Do you think about your treatment? – Yes, I think about it every day.',
            'Penser à + thing → y.',
          ),
          gh(
            'g2',
            'Vous avez besoin de repos ? – Oui, j’___ ai besoin.',
            'en',
            {
              y: 'Y replaces à + noun; avoir besoin takes de.',
              le: 'Le is a direct object, but avoir besoin is followed by de.',
              lui: 'Lui replaces à + a person.',
            },
            'Do you need rest? – Yes, I need it.',
            'Avoir besoin de + noun → en.',
          ),
          gh(
            'g3',
            'Tu as pris des vitamines ? – Oui, j’___ ai pris.',
            'en',
            {
              y: 'Y replaces a place or à + thing.',
              les: 'Des vitamines is indefinite, so the pronoun en is needed.',
              leur: 'Leur replaces à + people.',
            },
            'Did you take any vitamins? – Yes, I took some.',
            'Des + noun (an unspecified amount) → en.',
          ),
          gh(
            'g4',
            'Le médecin vous a donné l’ordonnance ? – Oui, il me ___ donnée.',
            'l’a',
            {
              'en a': 'L’ordonnance is definite, so en does not fit.',
              'y a': 'Y replaces a place, not a thing you are given.',
              'm’a': 'Me is already there; we need the direct object la.',
            },
            'Did the doctor give you the prescription? – Yes, he gave it to me.',
            'Me + la → me l’a donnée.',
          ),
          gh(
            'g5',
            'Vous avez des symptômes ? Parlez-___ à votre médecin.',
            'en',
            {
              y: 'Parler de → en, not y.',
              les: 'Des symptômes is indefinite; use en.',
              lui: 'Lui already replaces à votre médecin.',
            },
            'Do you have symptoms? Talk to your doctor about it.',
            'After a positive imperative the pronoun follows the verb: parlez-en.',
          ),
          gh(
            'g6',
            'Il m’a prescrit des antibiotiques. – Il m’___ a prescrit.',
            'en',
            {
              y: 'Y replaces places or à + thing.',
              les: 'Les would need a definite noun.',
              'l’': 'L’ would need a definite noun.',
            },
            'He prescribed me antibiotics. – He prescribed me some.',
            'Me before en: il m’en a prescrit.',
          ),
          gh(
            'g7',
            'Elle ne va pas chez le dentiste. – Elle n’___ va pas.',
            'y',
            {
              en: 'En replaces de + noun, but here the preposition is chez.',
              le: 'Le is a direct object, not a place.',
              lui: 'Lui replaces à + a person; chez + place → y.',
            },
            'She does not go to the dentist. – She does not go there.',
            'Chez / à / dans + place → y.',
          ),
          gh(
            'g8',
            'Tu as parlé du dépistage à ta sœur ? – Oui, je ___ en ai parlé.',
            'lui',
            {
              leur: 'Leur is plural: ta sœur is one person.',
              y: 'Y never combines with en.',
              la: 'La is a direct object; parler takes à + person.',
            },
            'Did you talk to your sister about the screening? – Yes, I told her about it.',
            'Lui comes before en: je lui en ai parlé.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the pronoun',
        'Type the pronoun that is missing.',
        ['grammar', L, 'health-fitness'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Tu fais du sport ? – Oui, j’___ fais deux fois par semaine.',
            'en',
            'Do you play sport? – Yes, I do twice a week.',
            'Faire du sport → en (a partitive).',
          ),
          typed(
            't2',
            'Tu vas à la pharmacie ? – Oui, j’___ vais maintenant.',
            'y',
            'Are you going to the pharmacy? – Yes, I am going there now.',
            'A place with à → y.',
          ),
          typed(
            't3',
            'Le médecin t’a donné des conseils ? – Oui, il m’___ a donné.',
            'en',
            'Did the doctor give you advice? – Yes, he gave me some.',
            'En stands right before the auxiliary: il m’en a donné.',
          ),
          typed(
            't4',
            'Elle a donné la boîte à son fils : elle la ___ a donnée.',
            'lui',
            'She gave the box to her son: she gave it to him.',
            'Le / la comes before lui: elle la lui a donnée.',
          ),
          typed(
            't5',
            'Du sirop ? Prenez-___ trois fois par jour.',
            'en',
            'Some syrup? Take some three times a day.',
            'Positive imperative: the pronoun follows the verb.',
          ),
          typed(
            't6',
            'Tu as vu tes amis ? – Oui, je ___ ai vus hier.',
            'les',
            'Did you see your friends? – Yes, I saw them yesterday.',
            'Direct object plural: les.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Put the words in order. Two pronouns go before the verb in a fixed order.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent('b1', 'I gave him some.', ['Je', 'lui', 'en', 'ai', 'donné.'], { extra: ['y'] }),
          sent('b2', 'He prescribed them to me.', ['Il', 'me', 'les', 'a', 'prescrits.'], {
            extra: ['en'],
          }),
          sent('b3', 'Do not talk to them about it.', ['Ne', 'leur', 'en', 'parlez', 'pas.'], {
            extra: ['y'],
          }),
          sent('b4', 'She is going there tomorrow.', ['Elle', 'y', 'va', 'demain.'], {
            extra: ['en'],
          }),
          sent('b5', 'I am not taking any.', ['Je', 'n’en', 'prends', 'pas.'], { extra: ['n’y'] }),
          sent('b6', 'We explained it to her.', ['Nous', 'le', 'lui', 'avons', 'expliqué.'], {
            extra: ['en'],
          }),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'At the doctor and the pharmacy',
        'Two conversations: a consultation and a prescription.',
        ['communication', 'health-fitness'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'doctor',
            title: 'At the doctor’s',
            emoji: '🩺',
            setting: 'You are exhausted and talk to your family doctor.',
            turns: [
              say(
                'Le médecin',
                'Alors, qu’est-ce qui vous amène ? Vous avez l’air épuisé.',
                'So, what brings you here? You look exhausted.',
              ),
              you(
                'Je dors très mal et je suis stressé. J’en ai assez.',
                [
                  'Je dors très bien, j’y pense toujours.',
                  'This contradicts the symptoms and the pronoun does not fit.',
                ],
                [
                  'Je voudrais acheter une mutuelle.',
                  'That does not answer the doctor’s question.',
                ],
              ),
              say(
                'Le médecin',
                'Vous avez déjà parlé de ce surmenage à votre employeur ?',
                'Have you already talked to your employer about this overwork?',
              ),
              you(
                'Non, je ne lui en ai pas encore parlé.',
                ['Non, je ne lui y ai pas parlé.', 'Y and en never combine with lui like this.'],
                [
                  'Oui, je les en ai parlé.',
                  'Parler takes à + person, so lui, and en comes after it.',
                ],
              ),
            ],
          },
          {
            id: 'pharmacy',
            title: 'At the pharmacy',
            emoji: '💊',
            setting: 'You hand in a prescription and ask about the dosage.',
            turns: [
              say(
                'Le pharmacien',
                'Bonjour, vous avez votre ordonnance ?',
                'Hello, do you have your prescription?',
              ),
              you(
                'Oui, la voici. Pouvez-vous m’expliquer la posologie ?',
                [
                  'Non, je l’ai oubliée, mais je n’en ai pas besoin.',
                  'Without the prescription the pharmacist cannot give you the medicine.',
                ],
                [
                  'Oui, donnez-moi-en un mois.',
                  'You were asked for the prescription, not how much you want.',
                ],
              ),
              say(
                'Le pharmacien',
                'Bien sûr. Prenez-en un le matin et un le soir, pendant sept jours.',
                'Of course. Take one in the morning and one in the evening, for seven days.',
              ),
              you(
                'Et s’il y a des effets secondaires, je dois vous en parler ?',
                [
                  'Et s’il y a des effets secondaires, je dois y en parler ?',
                  'Y cannot be combined with en here; the person is addressed with vous.',
                ],
                [
                  'Les effets secondaires ne m’intéressent pas.',
                  'This ignores the pharmacist’s advice and is not a question.',
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
        'Pronoun blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'health-fitness'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“En” can replace “de + noun”.', true),
          tf('b2', '“Y” can replace “à + a place”.', true),
          tf('b3', 'In “Je lui en ai parlé”, lui comes before en.', true),
          tf('b4', 'In “Il me le donne”, le comes before me.', false, 'Me comes before le.'),
          tf(
            'b5',
            'After a positive imperative the pronoun goes after the verb: “Parlez-en”.',
            true,
          ),
          tf(
            'b6',
            '“Y” and “en” are placed after the verb in a negative sentence.',
            false,
            'In a negative sentence the pronouns stay before the verb.',
          ),
          tf(
            'b7',
            '“Un certificat médical” is a doctor’s written statement about your health.',
            true,
          ),
          tf('b8', '“Se rétablir” means to fall ill.', false, 'Se rétablir means to recover.'),
          tf('b9', '“Un dépistage” is a screening test.', true),
          tf('b10', '“Se ressourcer” means to recharge.', true),
          tf(
            'b11',
            '“Le surmenage” is the result of too little work.',
            false,
            'It results from too much work.',
          ),
          tf('b12', 'With “donnez-m’en”, me becomes m’ before en.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: health words and pronouns.',
        ['vocabulary', 'grammar', L, 'health-fitness'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “un effet secondaire”?', 'a side effect', [
            'a second opinion',
            'a treatment',
            'a diagnosis',
          ]),
          qh(
            'c2',
            'Tu as du temps pour le sport ? – Oui, j’___ ai.',
            'en',
            {
              y: 'Y replaces à + place or thing.',
              le: 'Du temps is a partitive; use en.',
              lui: 'Lui replaces à + a person.',
            },
            L,
          ),
          q('c3', '“Décompresser” means …', 'to unwind', [
            'to compress',
            'to diagnose',
            'to vaccinate',
          ]),
          qh(
            'c4',
            'Tu vas chez le médecin ? – Oui, j’___ vais demain.',
            'y',
            {
              en: 'Chez le médecin is a place: use y.',
              le: 'Le is a direct object, not a place.',
              lui: 'Lui replaces à + a person; here the doctor is a place.',
            },
            L,
          ),
          q('c5', 'What does “la prévention” do?', 'It helps avoid illness.', [
            'It reimburses doctors.',
            'It prescribes drugs.',
            'It treats burnout.',
          ]),
          qh(
            'c6',
            'Tu lui as donné la clé ? – Oui, je la ___ ai donnée.',
            'lui',
            {
              leur: 'Leur is plural.',
              y: 'Y is never used with la in this way.',
              en: 'En does not replace the definite la clé.',
            },
            L,
          ),
          q('c7', '“Un trouble” is …', 'a disorder', ['a treatment', 'a rest', 'a shortage']),
          qh(
            'c8',
            'Du sirop ? Prenez-___ après le repas.',
            'en',
            {
              y: 'Y replaces a place.',
              le: 'Du sirop is a partitive, so use en.',
              lui: 'Lui replaces à + a person.',
            },
            L,
          ),
          q('c9', '“Une mutuelle” is …', 'a supplementary insurance', [
            'a family doctor',
            'a specialist',
            'a hospital',
          ]),
          qh(
            'c10',
            'Il m’a prescrit des vitamines. – Il m’___ a prescrit.',
            'en',
            {
              y: 'Y replaces a place.',
              les: 'Des vitamines is indefinite: use en.',
              leur: 'Leur replaces à + people.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
