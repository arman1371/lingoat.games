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

const U = 'fr-c1-1-famille';
const L = 'fr-c11-reprise' as const;

const famille = vocabList(U, 'Family models', [
  ['la parentalité', 'parenthood', '👨‍👩‍👧'],
  ['une famille recomposée', 'a blended family', '🧩'],
  ['la monoparentalité', 'single parenthood', '👩‍👦'],
  ['la garde alternée', 'shared custody', '🔄'],
  ['le congé parental', 'parental leave', '🍼'],
  ['un beau-parent', 'a step-parent', '🤝'],
  ['la fratrie', 'brothers and sisters', '👫'],
  ['la filiation', 'parentage, descent', '🌳'],
  ['un héritage', 'an inheritance, a legacy', '🏺'],
  ['la transmission', 'passing on (values, knowledge)', '📜'],
  ['élever', 'to raise (a child)', '🧸'],
  ['éduquer', 'to educate, to bring up', '📚'],
  ['une crèche', 'a nursery', '🛝'],
  ['l’autorité parentale', 'parental authority', '⚖️'],
  ['un aîné', 'the eldest child, an elder', '🥇'],
  ['le lien intergénérationnel', 'the link between generations', '🔗'],
]);

const generations = vocabList(U, 'Generations and ageing', [
  ['le vieillissement', 'ageing (of a population)', '⏳'],
  ['la dépendance', 'dependency (needing care)', '🦯'],
  ['un aidant', 'a family carer', '🫶'],
  ['une maison de retraite', 'a retirement home', '🏡'],
  ['le troisième âge', 'old age, the senior years', '👵'],
  ['le fossé des générations', 'the generation gap', '↔️'],
  ['la crise d’adolescence', 'teenage rebellion', '🧑‍🎤'],
  ['un jeune adulte', 'a young adult', '🧑'],
  ['l’autonomie', 'independence', '🕊️'],
  ['la majorité', 'coming of age, the age of majority', '🎂'],
  ['s’émanciper', 'to break free, to become independent', '🦋'],
  ['quitter le nid', 'to leave the nest', '🐦'],
  ['transmettre', 'to pass on', '🎁'],
  ['cohabiter', 'to live together', '🏠'],
  ['la solidarité entre les générations', 'solidarity between generations', '🤲'],
  ['la retraite par répartition', 'pay-as-you-go pensions', '💰'],
]);

const vocab = [...famille, ...generations];

export const famille7: UnitContent = {
  unit: unitFr({
    id: U,
    order: 7,
    title: 'Famille et générations',
    subtitle: 'Family models, ageing and independence, with celui, ce qui and dont',
    emoji: '👨‍👩‍👧‍👦',
    goals: [
      'Describe modern family models and what is passed from one generation to the next',
      'Talk about ageing, care and growing up',
      'Avoid repeating nouns: celui / celle, ce qui / ce que / ce dont, lequel / dont',
    ],
    grammar: [
      'Celui, celle, ceux, celles + de, qui, que, où, -ci / -là',
      'Ce qui, ce que, ce dont, ce à quoi: summing up an idea',
      'Lequel, auquel, duquel and dont after a preposition',
    ],
    vocabFields: ['Family models', 'Generations and ageing'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-famille',
      'flashcards',
      meta(
        'Family models',
        'Une famille recomposée, la garde alternée, la fratrie – the words of family.',
        ['vocabulary', 'living-together'],
        1,
        4,
      ),
      flashcards(famille),
    ),

    activity(
      U,
      'flash-generations',
      'flashcards',
      meta(
        'Generations and ageing',
        'Un aidant, le fossé des générations, s’émanciper – the words of age.',
        ['vocabulary', 'life-stages'],
        1,
        4,
      ),
      flashcards(generations),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'living-together'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'la garde alternée',
          'la fratrie',
          'la filiation',
          'un aidant',
          'cohabiter',
          'quitter le nid',
          'la majorité',
          'le congé parental',
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
        ['vocabulary', 'life-stages'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'la fratrie', b: 'l’ensemble des frères et sœurs' },
          { id: 'm2', a: 'un aidant', b: 'quelqu’un qui s’occupe d’un proche dépendant' },
          { id: 'm3', a: 'élever', b: 'prendre soin d’un enfant jusqu’à l’âge adulte' },
          { id: 'm4', a: 'transmettre', b: 'faire passer à la génération suivante' },
          { id: 'm5', a: 'l’autonomie', b: 'la capacité de décider et d’agir seul' },
          { id: 'm6', a: 'une crèche', b: 'un lieu qui garde les tout-petits' },
          { id: 'm7', a: 'le vieillissement', b: 'l’augmentation de l’âge moyen d’une population' },
          { id: 'm8', a: 's’émanciper', b: 'devenir libre et indépendant' },
        ],
      },
    ),

    activity(
      U,
      'listen-famille',
      'listen',
      meta(
        'Listen to the family',
        'Listen to the sentence and pick what it says.',
        ['listening', 'living-together'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Mes parents sont séparés : j’ai donc une garde alternée.',
            'My parents are separated, so I have shared custody.',
            [
              'My parents are retired, so I live alone.',
              'My parents are divorced, but I live with my grandmother.',
              'My parents are moving house, so I have a new nursery.',
            ],
          ),
          heard(
            'l2',
            'Ce que ma grand-mère m’a transmis, c’est sa passion pour la cuisine.',
            'What my grandmother passed on to me is her passion for cooking.',
            [
              'What my grandmother asked me for was a family recipe.',
              'My grandmother hates cooking because of her age.',
              'My grandmother’s recipes were lost after she moved.',
            ],
          ),
          heard(
            'l3',
            'La population vieillit : il y a de plus en plus d’aidants.',
            'The population is ageing: there are more and more family carers.',
            [
              'The population is growing: there are more and more nurseries.',
              'Young people are leaving: there are fewer and fewer pensioners.',
              'The government is hiring more and more doctors.',
            ],
          ),
          heard(
            'l4',
            'Ma sœur aînée a quitté le nid à dix-huit ans.',
            'My older sister left the nest at eighteen.',
            [
              'My younger sister turned eighteen last month.',
              'My older sister moved back home at eighteen.',
              'My sister moved to a retirement home at eighteen.',
            ],
          ),
          heard(
            'l5',
            'Ceux qui travaillent aujourd’hui financent les retraites.',
            'Those who work today finance the pensions.',
            [
              'Those who retire today finance the salaries.',
              'Those who studied last year have found work.',
              'Those who finance retirement homes work for the state.',
            ],
          ),
          heard(
            'l6',
            'Dans une famille recomposée, le beau-père joue souvent un rôle important.',
            'In a blended family, the step-father often plays an important role.',
            [
              'In a single-parent family, the father rarely visits.',
              'In a big family, the eldest plays an important role.',
              'In a blended family, the grandparents always raise the children.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-reprise',
      'sortit',
      meta(
        'Which kind of reprise?',
        'Sort the words and phrases by the job they do.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'What does the expression do?',
        buckets: [
          { id: 'celui', label: 'Celui, celle…: replaces a noun', emoji: '👤' },
          { id: 'ce', label: 'Ce qui, ce que…: sums up an idea', emoji: '💡' },
          { id: 'rel', label: 'Lequel, dont…: relative after a preposition', emoji: '🔗' },
        ],
        items: cards('r', [
          ['celui de mon frère', 'celui', 'my brother’s (the one of my brother)'],
          ['celles que j’aime', 'celui', 'the ones I like'],
          ['ceux qui habitent ici', 'celui', 'those who live here'],
          ['celle-là', 'celui', 'that one (feminine)'],
          ['ce qui compte', 'ce', 'what matters'],
          ['ce que tu dis', 'ce', 'what you say'],
          ['ce dont j’ai besoin', 'ce', 'what I need'],
          ['ce à quoi je pense', 'ce', 'what I am thinking about'],
          ['la personne à qui je parle', 'rel', 'the person I am talking to'],
          ['le sujet dont tu parles', 'rel', 'the subject you are talking about'],
          ['les amis auxquels je pense', 'rel', 'the friends I am thinking of'],
          ['la raison pour laquelle il part', 'rel', 'the reason why he is leaving'],
        ]),
      },
    ),

    activity(
      U,
      'gap-reprise',
      'gapfill',
      meta(
        'Choose the pronoun',
        'Pick the pronoun that avoids repeating the noun.',
        ['grammar', L, 'living-together'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'J’ai deux frères : ___ qui habite à Lyon est médecin.',
            'celui',
            {
              celle: 'Frère is masculine, so celle does not agree.',
              ceux: 'Ceux is plural; here one brother is meant.',
              ce: 'Ce cannot replace a noun directly before qui here.',
            },
            'I have two brothers: the one who lives in Lyon is a doctor.',
            'Celui qui = the one who.',
          ),
          gh(
            'g2',
            'J’aime les recettes de ma mère, mais ___ de ma grand-mère sont meilleures.',
            'celles',
            {
              celle: 'Recettes is plural, so celle does not agree.',
              ceux: 'Recettes is feminine, so ceux does not agree.',
              ce: 'Ce cannot be followed by de to replace a noun.',
            },
            'I like my mother’s recipes, but my grandmother’s are better.',
            'Celles de = the ones of (feminine plural).',
          ),
          gh(
            'g3',
            'Je ne comprends pas ___ tu veux dire.',
            'ce que',
            {
              'ce qui': 'Tu is the subject, so the pronoun is the object: ce que.',
              'ce dont': 'Vouloir dire does not take de.',
              'ce à quoi': 'Vouloir dire does not take à.',
            },
            'I do not understand what you mean.',
            'Ce que = what (object).',
          ),
          gh(
            'g4',
            '___ me plaît chez lui, c’est sa patience.',
            'Ce qui',
            {
              'Ce que': 'The pronoun is the subject of plaît, so qui is needed.',
              'Ce dont': 'Plaire does not take de.',
              'Ce à quoi': 'Plaire à is already in me plaît.',
            },
            'What I like about him is his patience.',
            'Ce qui = what (subject).',
          ),
          gh(
            'g5',
            'Voici exactement ce ___ j’ai besoin.',
            'dont',
            {
              que: 'Avoir besoin de requires dont.',
              qui: 'Qui would be the subject, but j’ai is the subject.',
              où: 'Où refers to a place or time.',
            },
            'Here is exactly what I need.',
            'Avoir besoin de → ce dont.',
          ),
          gh(
            'g6',
            'La maison ___ j’ai grandi est à vendre.',
            'où',
            {
              que: 'Que is a direct object; here the place needs où.',
              dont: 'Dont replaces de + noun, which is not the case here.',
              lequel: 'Lequel needs a preposition and agrees: dans laquelle.',
            },
            'The house where I grew up is for sale.',
            'Où replaces a place or time.',
          ),
          gh(
            'g7',
            'Les amis ___ je pense habitent à l’étranger.',
            'auxquels',
            {
              lesquels: 'Penser à needs the preposition: auxquels.',
              desquels: 'Penser takes à, not de.',
              dont: 'Dont replaces de + noun, but penser takes à.',
            },
            'The friends I am thinking of live abroad.',
            'Penser à + people → auquel / auxquels.',
          ),
          gh(
            'g8',
            'Le médecin ___ je parle est mon voisin.',
            'dont',
            {
              que: 'Parler de requires dont.',
              auquel: 'Parler de takes de, not à.',
              lequel: 'Lequel needs a preposition.',
            },
            'The doctor I am talking about is my neighbour.',
            'Parler de → dont.',
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
        ['grammar', L, 'life-stages'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Ce quartier est ancien ; ___ où j’habite est récent.',
            'celui',
            'This neighbourhood is old; the one where I live is new.',
            'Celui où = the one where.',
          ),
          typed(
            't2',
            'Mes amis et ___ de ma sœur sont venus au repas.',
            'ceux',
            'My friends and my sister’s came to the meal.',
            'Ceux de = the ones of.',
          ),
          typed(
            't3',
            'Je sais ___ qui compte pour toi : ta famille.',
            'ce',
            'I know what matters to you: your family.',
            'Ce qui = what (subject).',
          ),
          typed(
            't4',
            'C’est exactement ___ dont j’ai besoin.',
            'ce',
            'That is exactly what I need.',
            'Ce dont = what … of.',
          ),
          typed(
            't5',
            'La personne à ___ je parle est ma tante.',
            'qui',
            'The person I am talking to is my aunt.',
            'À qui for people.',
          ),
          typed(
            't6',
            'Les raisons pour ___ il est parti sont personnelles.',
            'lesquelles',
            'The reasons why he left are personal.',
            'Pour lesquelles: feminine plural.',
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
        'Put the words in order. Choose the pronoun with care.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'I like the one who lives next door.',
            ['J’aime', 'celui', 'qui', 'habite', 'à', 'côté.'],
            { extra: ['ce'] },
          ),
          sent(
            'b2',
            'This is exactly what I was talking about.',
            ['C’est', 'exactement', 'ce', 'dont', 'je', 'parlais.'],
            { extra: ['que'] },
          ),
          sent(
            'b3',
            'The house where I grew up is for sale.',
            ['La', 'maison', 'où', 'j’ai', 'grandi', 'est', 'à', 'vendre.'],
            { extra: ['que'] },
          ),
          sent(
            'b4',
            'The friends I am thinking of live abroad.',
            ['Les', 'amis', 'auxquels', 'je', 'pense', 'habitent', 'à', 'l’étranger.'],
            { extra: ['dont'] },
          ),
          sent(
            'b5',
            'What matters most is the family.',
            ['Ce', 'qui', 'compte', 'le', 'plus,', 'c’est', 'la', 'famille.'],
            { extra: ['que'] },
          ),
          sent(
            'b6',
            'I have two sons: the first is a doctor, the second a teacher.',
            [
              'J’ai',
              'deux',
              'fils :',
              'le',
              'premier',
              'est',
              'médecin,',
              'le',
              'second',
              'est',
              'professeur.',
            ],
            { extra: ['dernier'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Family conversations',
        'Two conversations: a family dinner and a talk about leaving home.',
        ['communication', 'living-together'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'dinner',
            title: 'A family dinner',
            emoji: '🍲',
            setting: 'Your grandmother asks what you remember from your childhood.',
            turns: [
              say(
                'Mamie',
                'Qu’est-ce que tu te rappelles le mieux de ton enfance ?',
                'What do you remember best about your childhood?',
              ),
              you(
                'Ce dont je me souviens le mieux, ce sont tes gâteaux du dimanche.',
                [
                  'Ce que je me souviens le mieux, ce sont tes gâteaux.',
                  'Se souvenir de requires ce dont.',
                ],
                [
                  'Rien, j’étais trop petit.',
                  'This ends the conversation and ignores the warm tone.',
                ],
              ),
              say(
                'Mamie',
                'Ah oui ! Et tu sais, ceux de ma mère étaient encore meilleurs.',
                'Ah yes! And you know, my mother’s were even better.',
              ),
              you(
                'Alors apprends-moi ses recettes : ce qui compte, c’est de les transmettre.',
                [
                  'Alors apprends-moi ses recettes : ce que compte, c’est de les transmettre.',
                  'The pronoun is the subject of compte: ce qui.',
                ],
                [
                  'Non, je préfère acheter des gâteaux.',
                  'This rejects the idea of passing on a family tradition.',
                ],
              ),
            ],
          },
          {
            id: 'home',
            title: 'Leaving home',
            emoji: '🏠',
            setting: 'Your friend is thinking of leaving his parents’ flat.',
            turns: [
              say(
                'Théo',
                'Je voudrais quitter le nid, mais mes parents ne sont pas d’accord.',
                'I would like to leave the nest, but my parents do not agree.',
              ),
              you(
                'Ce qui compte, c’est que tu sois autonome. Tu leur en as parlé ?',
                [
                  'Ce qui compte, c’est que tu es autonome.',
                  'C’est que after necessity or wish needs the subjunctive: sois.',
                ],
                [
                  'Reste chez eux toute ta vie.',
                  'This is not helpful advice and ignores his wish.',
                ],
              ),
              say(
                'Théo',
                'Oui, mais ils s’inquiètent pour l’argent dont j’aurai besoin.',
                'Yes, but they worry about the money I will need.',
              ),
              you(
                'Fais un budget : les parents d’un ami à moi l’ont fait, et celui de leur fils était très clair.',
                [
                  'Fais un budget : celle de leur fils était très clair.',
                  'Budget is masculine, so celui is needed.',
                ],
                [
                  'Demande de l’argent à tout le monde.',
                  'This does not help him plan and may upset his parents.',
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
        'Reprise blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'living-together'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Celui qui” means “the one who”.', true),
          tf('b2', '“Ce qui” is used for a subject.', true),
          tf(
            'b3',
            '“Ce que” is used for a subject.',
            false,
            'Ce que is an object; ce qui is a subject.',
          ),
          tf('b4', '“Ce dont” replaces “de + noun” in a summary.', true),
          tf('b5', '“Dont” can replace “à + noun”.', false, 'Dont replaces de + noun only.'),
          tf('b6', '“Auquel” is a contraction of “à + lequel”.', true),
          tf(
            'b7',
            '“Celui” may be used alone before a verb.',
            false,
            'It needs de, qui, que, où or -ci / -là.',
          ),
          tf('b8', '“La fratrie” means all the children of a family.', true),
          tf('b9', '“Un aidant” is an older relative.', false, 'It is a family carer.'),
          tf('b10', '“Quitter le nid” means to leave home.', true),
          tf('b11', '“S’émanciper” means to become independent.', true),
          tf('b12', '“La majorité” can mean coming of age.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: family words and pronouns.',
        ['vocabulary', 'grammar', L, 'living-together'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “une famille recomposée”?', 'a blended family', [
            'a large family',
            'a single-parent family',
            'a family of three generations',
          ]),
          qh(
            'c2',
            'Ma voiture est vieille, mais ___ de mon père est neuve.',
            'celle',
            {
              celui: 'Voiture is feminine: celle.',
              ceux: 'Voiture is singular.',
              ce: 'Ce cannot be followed by de to replace a noun.',
            },
            L,
          ),
          q('c3', '“Transmettre” means …', 'to pass on', ['to forget', 'to inherit', 'to leave']),
          qh(
            'c4',
            'Je ne sais pas ___ elle a dit.',
            'ce qu’',
            {
              'ce qui': 'Elle is the subject of a dit, so the pronoun is the object: ce que.',
              'ce dont': 'Dire does not take de here.',
              'ce à quoi': 'Dire does not take à + thing here.',
            },
            L,
          ),
          q('c5', '“Le fossé des générations” is …', 'the generation gap', [
            'a family tree',
            'an inheritance',
            'a retirement plan',
          ]),
          qh(
            'c6',
            'C’est ___ dont je rêve depuis toujours.',
            'ce',
            {
              celui: 'Celui replaces a noun; here we sum up an idea: ce dont.',
              celle: 'Celle replaces a feminine noun; here we sum up an idea: ce dont.',
              ceux: 'Ceux replaces plural nouns; here we sum up an idea: ce dont.',
            },
            L,
          ),
          q('c7', 'What does “cohabiter” mean?', 'to live together', [
            'to inherit',
            'to educate',
            'to care for',
          ]),
          qh(
            'c8',
            'Le sujet ___ nous parlons est délicat.',
            'dont',
            {
              que: 'Parler de requires dont.',
              auquel: 'Parler takes de.',
              où: 'Où refers to a place or time.',
            },
            L,
          ),
          q('c9', '“Un héritage” is …', 'an inheritance', [
            'a family name',
            'a nursery',
            'a retirement pension',
          ]),
          qh(
            'c10',
            'Les gens ___ elle travaille sont gentils.',
            'avec qui',
            {
              dont: 'Travailler avec needs the preposition: avec qui.',
              'ce que': 'Ce que cannot refer to people.',
              où: 'Où refers to a place or time.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
