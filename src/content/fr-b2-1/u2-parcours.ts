import { vocabList } from '../builders';
import {
  activity,
  cards,
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

const U = 'fr-b2-1-parcours';

const stages = vocabList(U, 'Stages of life', [
  ['la vieillesse', 'old age', '👵'],
  ['la petite enfance', 'early childhood', '🧒'],
  ['la puberté', 'puberty', '🧑‍🎤'],
  ['la majorité', 'coming of age', '🎂'],
  ['l’âge adulte', 'adulthood', '🧑‍💼'],
  ['le troisième âge', 'old age, senior years', '🧓'],
  ['le décès', 'death', '🕯️'],
  ['une génération', 'a generation', '👪'],
  ['un souvenir', 'a memory', '💭'],
  ['le deuil', 'mourning, bereavement', '🖤'],
  ['les fiançailles', 'engagement', '💍'],
  ['le baptême', 'baptism', '⛪'],
  ['un tournant', 'a turning point', '↪️'],
  ['un événement marquant', 'a landmark event', '📌'],
]);

const family = vocabList(U, 'Family ties and adoption', [
  ['l’adoption', 'adoption', '🍼'],
  ['un orphelin', 'an orphan', '🧸'],
  ['une famille d’accueil', 'a foster family', '🏡'],
  ['l’aîné', 'the eldest', '1️⃣'],
  ['le cadet', 'the youngest', '🔚'],
  ['une fratrie', 'siblings', '👫'],
  ['un jumeau', 'a twin', '👯'],
  ['un ancêtre', 'an ancestor', '🪦'],
  ['la descendance', 'descendants', '🌿'],
  ['la tutelle', 'guardianship', '🛡️'],
  ['un parrain', 'a godfather', '🎩'],
  ['les aïeux', 'forefathers', '📜'],
]);

const phrases = vocabList(U, 'Telling your life', [
  ['Je suis l’aîné d’une fratrie de quatre.', 'I am the eldest of four children.', '1️⃣'],
  ['Ça a été un tournant dans ma vie.', 'It was a turning point in my life.', '↪️'],
  ['Je garde un souvenir ému de cette période.', 'I keep a fond memory of that time.', '💭'],
  ['Mes grands-parents m’ont élevé.', 'My grandparents raised me.', '👴'],
  ['Elle a fait le deuil de son père.', 'She came to terms with her father’s death.', '🖤'],
  ['Il est parti à la retraite il y a deux ans.', 'He retired two years ago.', '🏖️'],
  ['Après mon bac, j’ai quitté la maison.', 'After my baccalauréat, I left home.', '🎒'],
  ['À l’époque, tout allait très vite.', 'Back then, everything went very fast.', '⏱️'],
]);

const vocab = [...stages, ...family, ...phrases];

const MOOD: [string, 'ind' | 'subj', string][] = [
  ['Je t’appelle dès que j’arrive.', 'ind', 'I will call you as soon as I arrive.'],
  ['Il a changé après qu’il a perdu son père.', 'ind', 'He changed after he lost his father.'],
  ['Quand j’étais jeune, je voyageais beaucoup.', 'ind', 'When I was young, I travelled a lot.'],
  [
    'Lorsqu’elle est née, ses parents vivaient à Oran.',
    'ind',
    'When she was born, her parents lived in Oran.',
  ],
  ['Depuis qu’il est à la retraite, il peint.', 'ind', 'Since he retired, he has been painting.'],
  ['Pendant que nous dînions, il a téléphoné.', 'ind', 'While we were having dinner, he phoned.'],
  ['Je reste ici jusqu’à ce que tu reviennes.', 'subj', 'I am staying here until you come back.'],
  ['Appelle-moi avant que je parte.', 'subj', 'Call me before I leave.'],
  ['Attends en attendant que le médecin arrive.', 'subj', 'Wait until the doctor arrives.'],
  [
    'Il a économisé jusqu’à ce qu’il puisse acheter une maison.',
    'subj',
    'He saved until he could buy a house.',
  ],
  ['Rentrons avant qu’il fasse nuit.', 'subj', 'Let us go home before it gets dark.'],
  [
    'Elle a étudié pendant que ses frères travaillaient.',
    'ind',
    'She studied while her brothers worked.',
  ],
];

export const parcours: UnitContent = {
  unit: unitFr({
    id: U,
    order: 2,
    title: 'Parcours de vie',
    subtitle: 'Tell a life from birth to retirement: family ties, memories and the order of events',
    emoji: '🧭',
    goals: [
      'Talk about the stages of a life and about family ties',
      'Agree the past participle correctly',
      'Order events in time with quand, dès que, avant que, jusqu’à ce que',
    ],
    grammar: ['Agreement of the past participle', 'Conjunctions of time'],
    vocabFields: ['Stages of life', 'Family ties and adoption', 'Telling your life'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'life-stages', {
      a: {
        title: 'Stages of life',
        description: 'From early childhood to old age.',
        words: stages,
      },
      b: {
        title: 'Family ties and adoption',
        description: 'Words for family and origins.',
        words: family,
      },
      listen: [
        'la vieillesse',
        'le troisième âge',
        'le deuil',
        'un tournant',
        'l’adoption',
        'un orphelin',
        'un jumeau',
        'un ancêtre',
      ],
      spell: [
        ['unscramble', 'vieillesse', 'old age', '👵', 'la vieillesse'],
        ['unscramble', 'souvenir', 'memory', '💭', 'un souvenir'],
        ['type', 'puberté', 'puberty', '🧑‍🎤', 'la puberté'],
        ['type', 'tournant', 'turning point', '↪️', 'un tournant'],
        ['type', 'jumeau', 'twin', '👯', 'un jumeau'],
      ],
    }),

    activity(
      U,
      'gap-agreement',
      'gapfill',
      meta(
        'Agree the participle',
        'Does the past participle agree, and with what?',
        ['grammar', 'fr-participle-agreement', 'life-stages'],
        2,
        4,
        'fr-participle-agreement',
      ),
      {
        items: [
          g(
            'a1',
            'Ma grand-mère est ___ en 1940.',
            'née',
            [
              ['né', 'With être the participle agrees with the subject: grand-mère is feminine.'],
              ['nés', 'There is one grandmother, so no plural.'],
              ['nées', 'There is one grandmother, so no plural.'],
            ],
            'My grandmother was born in 1940.',
            'Être: the participle agrees with the subject.',
          ),
          g(
            'a2',
            'Les photos que j’ai ___ datent de mon enfance.',
            'trouvées',
            [
              [
                'trouvé',
                'The object (les photos) comes before the verb: the participle agrees with it.',
              ],
              ['trouvés', 'Photos is feminine plural: trouvées.'],
              ['trouvée', 'Photos is plural: trouvées.'],
            ],
            'The photos I found date from my childhood.',
            'Avoir: agreement with the object only when it stands before the verb.',
          ),
          g(
            'a3',
            'Elles se sont ___ à l’école.',
            'rencontrées',
            [
              [
                'rencontré',
                'Se is the direct object (they met each other): the participle agrees.',
              ],
              ['rencontrés', 'The subject is feminine: rencontrées.'],
              ['rencontrée', 'The subject is plural: rencontrées.'],
            ],
            'They met at school.',
            'Pronominal verb with se as direct object: agreement.',
          ),
          g(
            'a4',
            'Elles se sont ___ pendant des heures.',
            'parlé',
            [
              ['parlées', 'Parler à quelqu’un: se is an indirect object, so no agreement.'],
              ['parlés', 'Parler à quelqu’un: se is an indirect object, so no agreement.'],
              ['parlée', 'Parler à quelqu’un: se is an indirect object, so no agreement.'],
            ],
            'They talked to each other for hours.',
            'Se stands for “to each other” (indirect object): no agreement.',
          ),
          g(
            'a5',
            'La maison qu’ils ont ___ appartenait à leur grand-père.',
            'achetée',
            [
              ['acheté', 'La maison (que) comes before the verb: the participle agrees.'],
              ['achetés', 'Maison is singular.'],
              ['achetées', 'Maison is singular.'],
            ],
            'The house they bought belonged to their grandfather.',
            'Que stands for la maison: feminine singular.',
          ),
          g(
            'a6',
            'Mes sœurs sont ___ à dix-huit ans.',
            'parties',
            [
              ['partis', 'The subject is feminine: parties.'],
              ['parti', 'With être the participle agrees with the subject: sœurs is plural.'],
              ['partie', 'Sœurs is plural: parties.'],
            ],
            'My sisters left at eighteen.',
            'Être: feminine plural.',
          ),
          g(
            'a7',
            'Elle s’est ___ les mains avant le repas.',
            'lavé',
            [
              ['lavée', 'The direct object (les mains) comes after the verb: no agreement.'],
              ['lavés', 'The direct object (les mains) comes after the verb: no agreement.'],
              ['lavées', 'The direct object (les mains) comes after the verb: no agreement.'],
            ],
            'She washed her hands before the meal.',
            'The object comes after: the participle stays unchanged.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-time',
      'gapfill',
      meta(
        'Before, after, until',
        'Choose the right mood and form after a conjunction of time.',
        ['grammar', 'fr-time-conjunctions', 'life-stages'],
        3,
        4,
        'fr-time-conjunctions',
      ),
      {
        items: [
          g(
            't1',
            'Je resterai ici jusqu’à ce que tu ___.',
            'reviennes',
            [
              ['reviens', 'Jusqu’à ce que is followed by the subjunctive.'],
              ['reviendras', 'Jusqu’à ce que is followed by the subjunctive.'],
              ['reviendrais', 'Jusqu’à ce que is followed by the subjunctive.'],
            ],
            'I will stay here until you come back.',
            'Jusqu’à ce que + subjunctive.',
          ),
          g(
            't2',
            'Appelle-moi avant que je ___.',
            'parte',
            [
              ['pars', 'Avant que is followed by the subjunctive.'],
              ['partirai', 'Avant que is followed by the subjunctive.'],
              ['suis parti', 'Avant que is followed by the subjunctive.'],
            ],
            'Call me before I leave.',
            'Avant que + subjunctive.',
          ),
          g(
            't3',
            'Après qu’il ___ son diplôme, il a cherché du travail.',
            'a obtenu',
            [
              [
                'ait obtenu',
                'Après que is followed by the indicative (the subjunctive is a common slip).',
              ],
              ['obtienne', 'Après que is followed by the indicative.'],
              ['obtenait', 'The imparfait does not show that the degree came first.'],
            ],
            'After he got his degree, he looked for a job.',
            'Après que + indicative (usually passé composé).',
          ),
          g(
            't4',
            'Quand j’___ petit, je rêvais d’être pilote.',
            'étais',
            [
              ['sois', 'Quand is followed by the indicative.'],
              ['serai', 'This is a memory: past, not future.'],
              ['fus', 'That is the literary passé simple, not used in speech.'],
            ],
            'When I was little, I dreamed of becoming a pilot.',
            'Quand + indicative.',
          ),
          g(
            't5',
            'Pendant que les enfants ___, nous préparions le repas.',
            'jouaient',
            [
              ['jouent', 'The main verb is in the past: the second action is too.'],
              ['joueront', 'The main verb is in the past: the second action is too.'],
              ['aient joué', 'Pendant que is followed by the indicative.'],
            ],
            'While the children played, we prepared the meal.',
            'Pendant que + indicative; two actions at the same time.',
          ),
          g(
            't6',
            'Depuis que nous ___ à Lyon, nous voyons moins nos cousins.',
            'habitons',
            [
              ['habitions', 'The situation still goes on: present.'],
              ['habiterions', 'Depuis que is followed by the indicative, not the conditional.'],
              ['aient habité', 'Depuis que is followed by the indicative, not the subjunctive.'],
            ],
            'Since we have lived in Lyon, we see our cousins less.',
            'Depuis que + indicative.',
          ),
          g(
            't7',
            'Il a fait ses études avant ___ de pays.',
            'de changer',
            [
              ['qu’il change', 'Same subject in both parts: avant de + infinitive.'],
              ['changer', 'Avant needs de before the infinitive.'],
              ['qu’il a changé', 'Same subject: avant de + infinitive.'],
            ],
            'He studied before changing countries.',
            'Same subject: avant de + infinitive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-mood',
      'sortit',
      meta(
        'Indicative or subjunctive?',
        'Which mood follows the conjunction of time?',
        ['grammar', 'fr-time-conjunctions', 'life-stages'],
        2,
        4,
        'fr-time-conjunctions',
      ),
      {
        instruction: 'Is the verb after the conjunction in the indicative or the subjunctive?',
        buckets: [
          { id: 'ind', label: 'indicative', emoji: '🟢' },
          { id: 'subj', label: 'subjunctive', emoji: '🔵' },
        ],
        items: cards('m', MOOD),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-participle-agreement', 'fr-time-conjunctions'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'The letters she wrote are in a box.',
            ['Les', 'lettres', 'qu’elle', 'a', 'écrites', 'sont', 'dans', 'une', 'boîte.'],
            { extra: ['écrit'], lesson: 'fr-participle-agreement' },
          ),
          sent(
            's2',
            'My sister was born before the war.',
            ['Ma', 'sœur', 'est', 'née', 'avant', 'la', 'guerre.'],
            { extra: ['né'], lesson: 'fr-participle-agreement' },
          ),
          sent(
            's3',
            'We stayed with her until she was better.',
            [
              'Nous',
              'sommes',
              'restés',
              'avec',
              'elle',
              'jusqu’à',
              'ce',
              'qu’elle',
              'aille',
              'mieux.',
            ],
            { extra: ['va'], lesson: 'fr-time-conjunctions' },
          ),
          sent(
            's4',
            'As soon as he retired, he left Paris.',
            ['Dès', 'qu’il', 'a', 'pris', 'sa', 'retraite,', 'il', 'a', 'quitté', 'Paris.'],
            { lesson: 'fr-time-conjunctions' },
          ),
          sent(
            's5',
            'They got to know each other at university.',
            ['Ils', 'se', 'sont', 'connus', 'à', 'l’université.'],
            { extra: ['connu'], lesson: 'fr-participle-agreement' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Understand the story',
        'Read a sentence about a life and pick its meaning.',
        ['communication', 'life-stages'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Je suis l’aîné d’une fratrie de quatre enfants.',
            'I am the eldest of four children.',
            ['I am the youngest of four children.', 'I have four children.', 'I am an only child.'],
          ),
          qs(
            'r2',
            'Mes grands-parents m’ont élevé après le décès de ma mère.',
            'My grandparents raised me after my mother’s death.',
            [
              'My grandparents died after my mother.',
              'My mother raised me with my grandparents.',
              'I raised my grandparents.',
            ],
          ),
          qs(
            'r3',
            'Elle a rencontré son mari dès qu’elle a eu dix-huit ans.',
            'She met her husband as soon as she turned eighteen.',
            [
              'She met her husband before she was eighteen.',
              'She married at eighteen.',
              'She turned eighteen the day before their meeting.',
            ],
          ),
          qs(
            'r4',
            'Cette adoption a été un tournant dans leur vie.',
            'This adoption was a turning point in their life.',
            [
              'This adoption never happened.',
              'This adoption was a mistake.',
              'They adopted a turning child.',
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
        'Tell your story',
        'Talk about your family and a turning point.',
        ['communication', 'life-stages'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'family',
            title: 'Family tree',
            emoji: '🌳',
            setting: 'A colleague asks about your family. Use vous.',
            turns: [
              say('Hélène', 'Vous avez des frères et sœurs ?', 'Do you have brothers and sisters?'),
              you(
                'Oui, je suis l’aîné d’une fratrie de trois.',
                [
                  'Oui, je suis le cadet d’une fratrie de trois, c’est moi le plus âgé.',
                  'The cadet is the youngest: contradicts “le plus âgé”.',
                ],
                [
                  'Oui, je suis un ancêtre de trois enfants.',
                  'An ancêtre is an ancestor, not a sibling.',
                ],
              ),
              say(
                'Hélène',
                'Et vos parents, ils vivent près de chez vous ?',
                'And your parents, do they live near you?',
              ),
              you(
                'Mon père est à la retraite et ma mère a fait le deuil de sa sœur.',
                [
                  'Mon père est à la naissance et ma mère a fait le deuil de sa sœur.',
                  'La naissance is birth, not retirement.',
                ],
                [
                  'Mon père est à la retraite et ma mère a fait le baptême de sa sœur.',
                  'Faire le deuil means to mourn.',
                ],
              ),
            ],
          },
          {
            id: 'turning',
            title: 'A turning point',
            emoji: '↪️',
            setting: 'A friend asks what changed your life. Use tu.',
            turns: [
              say('Malik', 'Qu’est-ce qui a changé ta vie ?', 'What changed your life?'),
              you(
                'Ça a été un tournant : j’ai quitté la maison dès que j’ai eu mon bac.',
                [
                  'Ça a été un tournant : j’ai quitté la maison avant que j’ai eu mon bac.',
                  'Avant que needs the subjunctive: avant que j’aie mon bac.',
                ],
                [
                  'Ça a été un tournant : j’ai quitté la maison après que je suis né.',
                  'This does not fit the story (leaving home after birth).',
                ],
              ),
              say('Malik', 'Tu as regretté ?', 'Did you regret it?'),
              you(
                'Non, je garde un souvenir ému de cette période.',
                [
                  'Non, je garde un souvenir ému de ces périodes de deuil.',
                  'This changes the meaning: a happy memory is what is meant.',
                ],
                [
                  'Non, je gardais un souvenir ému demain.',
                  'Demain (tomorrow) does not go with a past tense.',
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
        'Life blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-participle-agreement', 'fr-time-conjunctions'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Elle est née en 1990” needs an agreement: née.', true),
          tf('b2', '“Après qu’il est parti” takes the indicative.', true),
          tf(
            'b3',
            '“Avant que tu pars” is correct.',
            false,
            'Avant que takes the subjunctive: avant que tu partes.',
          ),
          tf(
            'b4',
            'With avoir, the participle agrees with an object that stands before the verb.',
            true,
          ),
          tf(
            'b5',
            '“La lettre que j’ai écrit” is correct.',
            false,
            'Que stands for la lettre: la lettre que j’ai écrite.',
          ),
          tf('b6', '“Un jumeau” is a twin.', true),
          tf('b7', '“Le deuil” means a birthday party.', false, 'Le deuil is mourning.'),
          tf('b8', 'Jusqu’à ce que is followed by the subjunctive.', true),
          tf(
            'b9',
            '“Elles se sont parlé” has no agreement because se is an indirect object.',
            true,
          ),
          tf(
            'b10',
            '“Le cadet” is the eldest child.',
            false,
            'Le cadet is the youngest; l’aîné is the eldest.',
          ),
          tf('b11', 'Avant de + infinitive is used when both verbs have the same subject.', true),
          tf('b12', '“Pendant que” introduces an action that happens at the same time.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Life story challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'life-stages'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Les enfants qu’elle a ___ sont devenus médecins.”',
            'élevés',
            ['élevé', 'élevées', 'élever'],
            undefined,
            'fr-participle-agreement',
          ),
          q(
            'c2',
            'Complete: “Elles se sont ___ la main.”',
            'serré',
            ['serrées', 'serrés', 'serrée'],
            undefined,
            'fr-participle-agreement',
          ),
          q(
            'c3',
            'Complete: “Reste jusqu’à ce qu’il ___.”',
            'soit guéri',
            ['est guéri', 'sera guéri', 'serait guéri'],
            undefined,
            'fr-time-conjunctions',
          ),
          q(
            'c4',
            'Complete: “Je suis rentré avant ___ pleuve.”',
            'qu’il',
            ['de', 'que il', 'qu’il a'],
            undefined,
            'fr-time-conjunctions',
          ),
          q('c5', 'Which word means “a generation”?', 'une génération', [
            'une fratrie',
            'une descendance',
            'un tournant',
          ]),
          q('c6', 'Which word means “a foster family”?', 'une famille d’accueil', [
            'une famille de tutelle',
            'une famille aînée',
            'une famille d’aïeux',
          ]),
          q('c7', '“Il est parti à la retraite” means …', 'He retired.', [
            'He went on holiday.',
            'He was born.',
            'He left a restaurant.',
          ]),
          q('c8', 'How do you say “as soon as she arrives”?', 'dès qu’elle arrive', [
            'avant qu’elle arrive',
            'jusqu’à ce qu’elle arrive',
            'depuis qu’elle arrive',
          ]),
        ],
      },
    ),
  ],
};
