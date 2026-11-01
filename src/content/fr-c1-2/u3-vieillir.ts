import { activity, vocabList } from '../builders';
import {
  cards,
  dictated,
  gap,
  npc,
  q,
  scene,
  scrambled,
  tf,
  typed,
  unitFrC12,
  vocabBlock,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c1-2-vieillir';

const vocab = vocabList(U, 'Vieillesse et retraite', [
  ['le vieillissement', 'ageing (of a population)', '⏳'],
  ['le troisième âge', 'old age, senior citizens', '👴'],
  ['la personne âgée', 'elderly person', '👵'],
  ['la retraite', 'retirement', '🏖️'],
  ['le retraité', 'retired person', '🧑‍🦳'],
  ['la pension de retraite', 'retirement pension', '💶'],
  ['cotiser', 'to pay contributions', '🧾'],
  ['partir à la retraite', 'to retire', '🚪'],
  ['la maison de retraite', 'retirement home', '🏥'],
  ['l’EHPAD', 'nursing home (for dependent elderly people)', '🏨'],
  ['le maintien à domicile', 'care at home', '🏠'],
  ['l’aidant', 'family carer', '🤲'],
  ['l’autonomie', 'independence, self-sufficiency', '🚶'],
  ['l’isolement', 'isolation', '🏝️'],
  ['la solitude', 'loneliness', '🪑'],
  ['le lien intergénérationnel', 'bond between generations', '🔄'],
  ['le papy-boom', 'retirement of the baby-boom generation', '📈'],
  ['l’espérance de vie', 'life expectancy', '📊'],
  ['la longévité', 'longevity', '♾️'],
  ['le bien-vieillir', 'ageing well', '🌿'],
  ['rester actif', 'to stay active', '🏃'],
  ['prendre de l’âge', 'to get older', '🎂'],
  ['avoir un coup de vieux', 'to suddenly look much older', '😮‍💨'],
  ['la ride', 'wrinkle', '〰️'],
  ['les cheveux blancs', 'grey hair', '🤍'],
  ['la mémoire', 'memory', '🧠'],
  ['l’oubli', 'forgetfulness, lapse of memory', '🫥'],
  ['la maladie d’Alzheimer', 'Alzheimer’s disease', '🌫️'],
  ['l’arthrose', 'osteoarthritis', '🦴'],
  ['la canne', 'walking stick', '🦯'],
  ['le déambulateur', 'walking frame', '🛒'],
  ['la sagesse', 'wisdom', '🦉'],
  ['léguer', 'to bequeath, to hand down', '🎁'],
  ['l’âgisme', 'ageism', '🚷'],
]);

export const vieillir: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 3,
    title: 'Vieillir : une aventure',
    subtitle: 'Ageing, retirement and care – and avoiding repetition with pronouns and nouns',
    emoji: '🧓',
    goals: [
      'Talk about ageing, retirement and care for older people',
      'Discuss isolation and links between generations',
      'Resume a noun with the right pronoun (reprise pronominale)',
      'Resume a noun with a synonym or demonstrative phrase (reprise nominale)',
    ],
    grammar: ['Reprise pronominale', 'Reprise nominale'],
    vocabFields: ['Vieillesse et retraite'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-ageing', vocab, {
      first: 'Ageing and retirement',
      firstText: 'Words for old age, pensions, retirement and care.',
      second: 'Health, memory and wisdom',
      secondText: 'Words for the signs of age, health problems and what older people pass on.',
    }),

    activity(
      U,
      'quiz-definitions',
      'quiz',
      {
        title: 'Which word is defined?',
        description: 'Read the definition in French and find the word.',
        tags: ['vocabulary', 'fr-c12-ageing'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        questions: [
          q(
            'd1',
            'Argent versé chaque mois à une personne qui ne travaille plus.',
            'la pension de retraite',
            ['la mise', 'le gain', 'la cotisation sociale'],
          ),
          q('d2', 'Personne de la famille qui s’occupe d’un proche dépendant.', 'l’aidant', [
            'le retraité',
            'le cadet',
            'le conjoint',
          ]),
          q('d3', 'Fait de vivre longtemps.', 'la longévité', [
            'la sagesse',
            'l’oubli',
            'l’arthrose',
          ]),
          q('d4', 'Discrimination fondée sur l’âge.', 'l’âgisme', [
            'l’isolement',
            'la solitude',
            'le papy-boom',
          ]),
          q('d5', 'Bâton qui aide à marcher.', 'la canne', [
            'le déambulateur',
            'la ride',
            'la mémoire',
          ]),
          q('d6', 'Sentiment de celui qui n’a personne à qui parler.', 'la solitude', [
            'l’autonomie',
            'la sagesse',
            'la longévité',
          ]),
          q('d7', 'Capacité de faire les choses sans l’aide des autres.', 'l’autonomie', [
            'l’isolement',
            'le vieillissement',
            'la retraite',
          ]),
          q('d8', 'Laisser ses biens ou ses valeurs à la génération suivante.', 'léguer', [
            'cotiser',
            'prendre de l’âge',
            'rester actif',
          ]),
        ],
      },
    ),

    activity(
      U,
      'sort-reprise',
      'sortit',
      {
        title: 'Pronoun or noun phrase?',
        description:
          'The capitals show how a sentence picks up what it said before: with a pronoun or with a noun phrase.',
        tags: ['grammar', 'fr-c12-reprise-pronominale', 'fr-c12-reprise-nominale'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'How is the earlier word picked up?',
        buckets: [
          { id: 'pronominale', label: 'reprise pronominale', emoji: '👤' },
          { id: 'nominale', label: 'reprise nominale', emoji: '🏷️' },
        ],
        items: [
          ...cards('pronominale', [
            ['Marie a 80 ans. ELLE vit seule.', 'Marie is 80. She lives alone.'],
            ['Des EHPAD, il y EN a peu.', 'There are few nursing homes.'],
            [
              'J’ai vu mes grands-parents. Je LEUR ai offert des fleurs.',
              'I saw my grandparents. I gave them flowers.',
            ],
            [
              'Deux seniors sont venus : L’UN est médecin, L’AUTRE ancien maire.',
              'Two seniors came: one is a doctor, the other a former mayor.',
            ],
            [
              'Les retraités voyagent plus. CELA change le tourisme.',
              'Retirees travel more. This changes tourism.',
            ],
          ]),
          ...cards('nominale', [
            [
              'Un vieil homme traversait la rue. CET HOMME portait une canne.',
              'An old man was crossing the street. This man carried a stick.',
            ],
            [
              'La longévité augmente. CE PHÉNOMÈNE pose question.',
              'Longevity is rising. This phenomenon raises questions.',
            ],
            [
              'Mme Durand a fêté ses cent ans. LA DOYENNE DU VILLAGE a reçu des fleurs.',
              'Mme Durand turned 100. The village’s oldest resident got flowers.',
            ],
            [
              'Les rides apparaissent avec l’âge. CES SIGNES inquiètent beaucoup.',
              'Wrinkles appear with age. These signs worry many people.',
            ],
            [
              'Le papy-boom commence. CE VIEILLISSEMENT DE LA POPULATION coûtera cher.',
              'The baby-boomers retire. This ageing of the population will be costly.',
            ],
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-pronouns',
      'gapfill',
      {
        title: 'Which pronoun picks it up?',
        description: 'Choose the pronoun that takes up the earlier word.',
        tags: ['grammar', 'fr-c12-reprise-pronominale'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          gap(
            'p1',
            'Les retraités sont nombreux. ___ votent beaucoup.',
            'Ils',
            ['Ils', 'Eux', 'Les', 'Leur'],
            'Retirees are numerous. They vote a lot.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'A subject pronoun takes up the noun: Ils = les retraités.',
            },
          ),
          gap(
            'p2',
            'Ma grand-mère vit seule. Je ___ rends visite chaque semaine.',
            'lui',
            ['lui', 'la', 'elle', 'y'],
            'My grandmother lives alone. I visit her every week.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'rendre visite à quelqu’un: the indirect object pronoun is lui.',
              why: { la: 'The verb is rendre visite à: use the indirect pronoun lui, not la.' },
            },
          ),
          gap(
            'p3',
            'Des maisons de retraite, il y ___ a peu.',
            'en',
            ['en', 'y', 'les', 'leur'],
            'There are few retirement homes.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'en takes up a noun introduced by de or a quantity: des maisons → en.',
            },
          ),
          gap(
            'p4',
            'Elle vit à la campagne et elle ___ est heureuse.',
            'y',
            ['y', 'en', 'lui', 'là'],
            'She lives in the country and is happy there.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'y takes up a place introduced by à, dans or en: à la campagne → y.',
            },
          ),
          gap(
            'p5',
            'Deux aînés sont venus : ___ est médecin, l’autre est ancien maire.',
            'l’un',
            ['l’un', 'un', 'lui', 'celui'],
            'Two seniors came: one is a doctor, the other a former mayor.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'l’un … l’autre shares out two people already mentioned.',
            },
          ),
          gap(
            'p6',
            'Les retraités voyagent davantage. ___ change le tourisme.',
            'Cela',
            ['Cela', 'Celui', 'Ceux', 'Lui'],
            'Retirees travel more. This changes tourism.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'cela (ça) takes up a whole idea, not a single noun.',
            },
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-nominal',
      'gapfill',
      {
        title: 'Which noun phrase picks it up?',
        description: 'Choose the demonstrative phrase with the right agreement.',
        tags: ['grammar', 'fr-c12-reprise-nominale'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        items: [
          gap(
            'n1',
            'Le vieillissement s’accélère. ___ pose un défi économique.',
            'Ce phénomène',
            ['Ce phénomène', 'Cette phénomène', 'Ces phénomène', 'Cet phénomène'],
            'Ageing is speeding up. This phenomenon is an economic challenge.',
            {
              lesson: 'fr-c12-reprise-nominale',
              explanation: 'A new noun that sums up the idea, with ce: phénomène is masculine.',
            },
          ),
          gap(
            'n2',
            'Une dame âgée traversait la rue. ___ portait un lourd sac.',
            'Cette dame',
            ['Cette dame', 'Ce dame', 'Cet dame', 'Ces dame'],
            'An old lady was crossing the street. This lady was carrying a heavy bag.',
            {
              lesson: 'fr-c12-reprise-nominale',
            },
          ),
          gap(
            'n3',
            'Les structures pour seniors manquent de personnel. ___ recrutent beaucoup.',
            'Ces structures',
            ['Ces structures', 'Ce structures', 'Cette structures', 'Cet structures'],
            'Facilities for seniors lack staff. These facilities recruit a lot.',
            {
              lesson: 'fr-c12-reprise-nominale',
            },
          ),
          gap(
            'n4',
            'Un vieil arbre domine la place. ___ a plus de trois cents ans.',
            'Cet arbre',
            ['Cet arbre', 'Ce arbre', 'Cette arbre', 'Ces arbre'],
            'An old tree dominates the square. This tree is over 300 years old.',
            {
              lesson: 'fr-c12-reprise-nominale',
              explanation: 'Before a vowel the masculine demonstrative is cet: cet arbre.',
            },
          ),
          gap(
            'n5',
            'L’État finance les retraites. ___ doit trouver de nouvelles ressources.',
            'Il',
            ['Il', 'Ce', 'Cet', 'Lui'],
            'The State finances pensions. It has to find new resources.',
            {
              lesson: 'fr-c12-reprise-pronominale',
              explanation: 'Here a simple pronoun is enough: no need for a heavier noun phrase.',
            },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-synonyms',
      'quiz',
      {
        title: 'Find the right substitute',
        description: 'Pick the noun phrase that best picks up the earlier word.',
        tags: ['grammar', 'fr-c12-reprise-nominale'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          q(
            'r1',
            'Mme Martin, 92 ans, vit en maison de retraite. ___ a gardé le sourire.',
            'La nonagénaire',
            ['La quarantenaire', 'La mineure', 'La débutante'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
          q(
            'r2',
            'On a construit un EHPAD à Brest. ___ accueille 80 résidents.',
            'Cet établissement',
            ['Cette personne', 'Cet outil', 'Ce vêtement'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
          q(
            'r3',
            'Le papy-boom inquiète les économistes. ___ va peser sur les retraites.',
            'Ce phénomène démographique',
            ['Ce phénomène musical', 'Cette tempête', 'Cet article de loi'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
          q(
            'r4',
            'Victor Hugo est mort en 1885. ___ avait 83 ans.',
            'L’auteur des Misérables',
            ['L’auteur de Candide', 'Le héros du roman', 'Le roi de France'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
          q(
            'r5',
            'Les seniors utilisent Internet. ___ découvrent aussi les réseaux sociaux.',
            'Ces retraités',
            ['Ces enfants', 'Ces animaux', 'Ces élèves'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put the words in order – each sentence picks up an earlier word.',
        tags: ['grammar', 'fr-c12-reprise-pronominale', 'fr-c12-reprise-nominale'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'People live longer: this phenomenon changes society.',
            words: [
              'On',
              'vit',
              'plus',
              'longtemps :',
              'ce',
              'phénomène',
              'change',
              'la',
              'société.',
            ],
            lesson: 'fr-c12-reprise-nominale',
          },
          {
            id: 's2',
            translation: 'My grandmother lives alone; I visit her every week.',
            words: [
              'Ma',
              'grand-mère',
              'vit',
              'seule,',
              'je',
              'lui',
              'rends',
              'visite',
              'chaque',
              'semaine.',
            ],
            lesson: 'fr-c12-reprise-pronominale',
          },
          {
            id: 's3',
            translation: 'There are few retirement homes.',
            words: ['Des', 'maisons', 'de', 'retraite,', 'il', 'y', 'en', 'a', 'peu.'],
            lesson: 'fr-c12-reprise-pronominale',
          },
          {
            id: 's4',
            translation: 'Two seniors came: one is a doctor, the other a former mayor.',
            words: [
              'Deux',
              'seniors',
              'sont',
              'venus :',
              'l’un',
              'est',
              'médecin,',
              'l’autre',
              'ancien',
              'maire.',
            ],
            lesson: 'fr-c12-reprise-pronominale',
          },
          {
            id: 's5',
            translation: 'Retirees travel more; this is changing tourism.',
            words: [
              'Les',
              'retraités',
              'voyagent',
              'davantage,',
              'cela',
              'transforme',
              'le',
              'tourisme.',
            ],
            lesson: 'fr-c12-reprise-pronominale',
          },
          {
            id: 's6',
            translation:
              'Mme Durand turned a hundred: the oldest resident of the village received flowers.',
            words: [
              'Mme',
              'Durand',
              'a',
              'cent',
              'ans :',
              'la',
              'doyenne',
              'du',
              'village',
              'a',
              'reçu',
              'des',
              'fleurs.',
            ],
            lesson: 'fr-c12-reprise-nominale',
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'fr-c12-ageing'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          scrambled('p1', 'retraite', 'retirement', '🏖️'),
          scrambled('p2', 'longévité', 'longevity', '♾️'),
          typed('p3', 'l’espérance de vie', 'life expectancy', '📊'),
          typed('p4', 'le déambulateur', 'walking frame', '🛒'),
          dictated('p5', 'le troisième âge', 'old age'),
          dictated('p6', 'le maintien à domicile', 'care at home'),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Talking about old age',
        description: 'Three conversations: a visit, a pension office and a debate.',
        tags: ['communication', 'fr-c12-ageing'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        scenes: [
          scene(
            'visit',
            'A visit to grandma',
            '👵',
            'You visit your grandmother in a retirement home.',
            npc(
              'Mamie',
              'Tu viens souvent me voir, c’est gentil. Je me sens un peu seule ici.',
              'You come to see me often, that’s kind. I feel a little lonely here.',
            ),
            you(
              'Je sais, mamie. Je viendrai plus souvent, je te le promets.',
              [
                'Je sais, mamie. Je vais y venir plus souvent, je la promets.',
                'The pronoun for the promise is le (= that), not la.',
              ],
              [
                'Ce n’est pas grave, la solitude est un phénomène.',
                'True but cold – it does not answer her.',
              ],
            ),
            npc(
              'Mamie',
              'Et ton frère ? Il ne vient plus ?',
              'And your brother? He doesn’t come any more?',
            ),
            you(
              'Si, je lui ai parlé hier : il passera dimanche.',
              [
                'Si, je l’ai parlé hier : il passera dimanche.',
                'Parler à quelqu’un takes lui, not le.',
              ],
              ['Si, j’en ai parlé hier à lui.', 'Awkward: use the pronoun lui before the verb.'],
            ),
          ),
          scene(
            'pension',
            'At the pension office',
            '🏛️',
            'You ask about your retirement.',
            npc(
              'L’employée',
              'Bonjour, que puis-je faire pour vous ?',
              'Hello, what can I do for you?',
            ),
            you(
              'Bonjour, je voudrais savoir à quel âge je pourrai partir à la retraite.',
              [
                'Bonjour, je veux savoir à quel âge je partirai la retraite.',
                'The expression is partir à la retraite.',
              ],
              ['Salut, c’est quand ma retraite ?', 'Too casual for an official office.'],
            ),
            npc(
              'L’employée',
              'Cela dépend du nombre de trimestres cotisés.',
              'It depends on the number of quarters you have paid in.',
            ),
            you(
              'Je vois. J’en ai cotisé cent soixante, il me semble.',
              [
                'Je vois. J’y ai cotisé cent soixante.',
                'En replaces a quantity with de; y does not fit.',
              ],
              ['Je vois. Je les ai cotisés cent soixante.', 'With a number you need en, not les.'],
            ),
          ),
          scene(
            'debate',
            'A neighbourhood debate',
            '🏘️',
            'A resident argues for shared housing between students and seniors.',
            npc(
              'Léa',
              'Un étudiant chez une personne âgée : cette cohabitation crée du lien intergénérationnel.',
              'A student living with an older person: this cohabitation creates bonds between generations.',
            ),
            you(
              'Oui, et cette solution lutte aussi contre l’isolement des seniors.',
              [
                'Oui, et ce solution lutte aussi contre l’isolement.',
                'Solution is feminine: cette solution.',
              ],
              [
                'Oui, et ça lutte aussi contre l’âgisme, tu vois.',
                'Too casual and vague for this debate.',
              ],
            ),
            npc(
              'Léa',
              'Exactement. Les jeunes y gagnent un logement, les aînés une présence.',
              'Exactly. The young gain housing there, the older gain company.',
            ),
          ),
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      {
        title: 'Ageing blitz',
        description: 'True or false? Words and ways to avoid repetition.',
        tags: ['grammar', 'fr-c12-reprise-pronominale', 'fr-c12-reprise-nominale'],
        difficulty: 3,
        estMinutes: 3,
      },
      {
        seconds: 60,
        statements: [
          tf(
            'b1',
            '“Ils” in “Les retraités votent. Ils pèsent lourd.” is a reprise pronominale.',
            true,
          ),
          tf('b2', '“Ce phénomène” can sum up a whole idea mentioned before.', true),
          tf('b3', '“En” can take up a noun introduced by “de” or a quantity.', true),
          tf(
            'b4',
            '“Y” usually takes up a person.',
            false,
            'Y takes up a place or a thing introduced by à; for a person use lui or leur.',
          ),
          tf('b5', 'Before a vowel the masculine demonstrative is “cet”.', true),
          tf('b6', '“L’auteur des Misérables” can replace “Victor Hugo” in a text.', true),
          tf(
            'b7',
            '“Une personne âgée” is the same as “un jeune”.',
            false,
            'Âgée means elderly; a jeune is a young person.',
          ),
          tf('b8', '“Cotiser” means to pay contributions.', true),
          tf('b9', '“L’EHPAD” is a type of nursing home.', true),
          tf(
            'b10',
            '“L’isolement” and “la longévité” mean the same.',
            false,
            'Isolation is being cut off from others; longevity is a long life.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Words and reprise in one final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c12-ageing'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          q('c1', '“Prendre de l’âge” means …', 'to get older', [
            'to retire',
            'to inherit',
            'to stay active',
          ]),
          q(
            'c2',
            'Mes grands-parents sont fatigués. Je ___ rends visite.',
            'leur',
            ['les', 'lui', 'y'],
            { lesson: 'fr-c12-reprise-pronominale' },
          ),
          q('c3', 'Des places en maison de retraite, il y ___ a peu.', 'en', ['y', 'les', 'leur'], {
            lesson: 'fr-c12-reprise-pronominale',
          }),
          q(
            'c4',
            'Un vieux monsieur passait. ___ portait une canne.',
            'Cet homme',
            ['Ce homme', 'Cette homme', 'Ces homme'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
          q('c5', 'Which word means “wisdom”?', 'la sagesse', ['la ride', 'l’oubli', 'la canne']),
          q(
            'c6',
            'The baby-boomers are retiring. ___ coûtera cher à l’État.',
            'Ce vieillissement',
            ['Cette retraite active', 'Ces cheveux', 'Cet oubli'],
            { lesson: 'fr-c12-reprise-nominale' },
          ),
          q('c7', 'Care at home is called …', 'le maintien à domicile', [
            'le troisième âge',
            'le papy-boom',
            'l’arthrose',
          ]),
          q(
            'c8',
            'Which sentence avoids repeating “les retraités”?',
            'Les retraités votent beaucoup : ils pèsent sur les élections.',
            [
              'Les retraités votent beaucoup : les retraités pèsent sur les élections.',
              'Les retraités votent beaucoup : le pèsent sur les élections.',
              'Les retraités votent beaucoup : leur pèsent sur les élections.',
            ],
            { lesson: 'fr-c12-reprise-pronominale' },
          ),
        ],
      },
    ),
  ],
};
