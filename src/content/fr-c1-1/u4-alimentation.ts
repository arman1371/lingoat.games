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
  subjTable,
  tf,
  typed,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-c1-1-alimentation';
const L = 'fr-c11-concession' as const;

const conso = vocabList(U, 'What we eat and buy', [
  ['la malbouffe', 'junk food', '🍟'],
  ['une alimentation équilibrée', 'a balanced diet', '🥗'],
  ['le circuit court', 'the short supply chain, direct from producer', '🧑‍🌾'],
  ['un produit du terroir', 'a local speciality product', '🧀'],
  ['l’agriculture biologique', 'organic farming', '🌱'],
  ['un label', 'a quality label', '🏷️'],
  ['un additif', 'an additive', '⚗️'],
  ['un emballage', 'packaging', '📦'],
  ['le gaspillage alimentaire', 'food waste', '🗑️'],
  ['la date limite de consommation', 'the use-by date', '📅'],
  ['le commerce équitable', 'fair trade', '🤝'],
  ['un pesticide', 'a pesticide', '☠️'],
  ['la grande distribution', 'large-scale retail, supermarkets', '🛒'],
  ['une denrée', 'a foodstuff', '🌾'],
  ['la souveraineté alimentaire', 'food sovereignty', '🚜'],
  ['un régime végétalien', 'a vegan diet', '🥦'],
]);

const table = vocabList(U, 'Gastronomy and the table', [
  ['la gastronomie', 'gastronomy, fine food', '👨‍🍳'],
  ['un mets', 'a dish (formal)', '🍽️'],
  ['un gourmet', 'a person who loves fine food', '😋'],
  ['un amuse-bouche', 'a bite-sized starter', '🥂'],
  ['une spécialité régionale', 'a regional speciality', '🗺️'],
  ['déguster', 'to taste, to savour', '👅'],
  ['savourer', 'to relish', '😌'],
  ['mijoter', 'to simmer, to stew', '🍲'],
  ['assaisonner', 'to season', '🧂'],
  ['un convive', 'a guest at the table', '🧑‍🤝‍🧑'],
  ['l’art de la table', 'the art of the table', '🍴'],
  ['un sommelier', 'a wine waiter', '🍷'],
  ['une carte des vins', 'a wine list', '📜'],
  ['un plat mijoté', 'a slow-cooked dish', '🥘'],
  ['un repas gastronomique', 'a gastronomic meal', '🥩'],
  ['une recette de famille', 'a family recipe', '📖'],
]);

const vocab = [...conso, ...table];

export const alimentation: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Manger, produire, consommer',
    subtitle: 'Food, farming and fine dining, with the language of concession',
    emoji: '🥘',
    goals: [
      'Discuss what we eat: organic, local, waste, labels and supermarkets',
      'Talk about gastronomy and describe a meal with precision',
      'Concede a point and still defend your view: bien que, même si, malgré, pourtant',
    ],
    grammar: [
      'Bien que, quoique + subjonctif',
      'Même si, alors que, tandis que + indicatif',
      'Malgré, en dépit de + noun; pourtant, cependant, néanmoins, toutefois',
    ],
    vocabFields: ['What we eat and buy', 'Gastronomy and the table'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-conso',
      'flashcards',
      meta(
        'What we eat and buy',
        'Le circuit court, un label, le gaspillage – the words of consumption.',
        ['vocabulary', 'minimalism-diet'],
        1,
        4,
      ),
      flashcards(conso),
    ),

    activity(
      U,
      'flash-table',
      'flashcards',
      meta(
        'Gastronomy and the table',
        'Un mets, déguster, mijoter – the words of fine food.',
        ['vocabulary', 'food-drinks'],
        1,
        4,
      ),
      flashcards(table),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'minimalism-diet'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'le circuit court',
          'un additif',
          'la date limite de consommation',
          'une denrée',
          'un convive',
          'assaisonner',
          'un amuse-bouche',
          'la souveraineté alimentaire',
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
        ['vocabulary', 'food-drinks'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'la malbouffe', b: 'une nourriture peu saine, souvent grasse ou sucrée' },
          { id: 'm2', a: 'un label', b: 'une marque qui garantit une qualité' },
          {
            id: 'm3',
            a: 'le gaspillage alimentaire',
            b: 'la nourriture qu’on jette sans l’utiliser',
          },
          { id: 'm4', a: 'un sommelier', b: 'le spécialiste du vin dans un restaurant' },
          { id: 'm5', a: 'mijoter', b: 'cuire doucement pendant longtemps' },
          { id: 'm6', a: 'un emballage', b: 'ce qui enveloppe un produit' },
          { id: 'm7', a: 'un convive', b: 'une personne invitée à un repas' },
          { id: 'm8', a: 'déguster', b: 'goûter lentement pour apprécier' },
        ],
      },
    ),

    activity(
      U,
      'listen-conso',
      'listen',
      meta(
        'Listen to the market report',
        'Listen to the sentence and pick what it says.',
        ['listening', 'food-drinks'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Bien que le bio coûte plus cher, beaucoup de familles en achètent.',
            'Although organic food costs more, many families buy it.',
            [
              'Because organic food is cheaper, many families buy it.',
              'Many families have stopped buying organic food because it costs more.',
              'Organic food costs the same as ordinary food.',
            ],
          ),
          heard(
            'l2',
            'Le gaspillage alimentaire reste un problème malgré les nouvelles lois.',
            'Food waste remains a problem despite the new laws.',
            [
              'Food waste has disappeared thanks to the new laws.',
              'The new laws will soon end food waste.',
              'Food waste is a problem because of the new laws.',
            ],
          ),
          heard(
            'l3',
            'Le sommelier nous a conseillé un vin de la région.',
            'The wine waiter recommended a wine from the region.',
            [
              'The wine waiter refused to serve us a local wine.',
              'The chef advised us to order a dessert from the region.',
              'The sommelier asked us for the wine list.',
            ],
          ),
          heard(
            'l4',
            'Cette recette de famille mijote pendant trois heures.',
            'This family recipe simmers for three hours.',
            [
              'This family recipe is ready in three minutes.',
              'This regional speciality is eaten after three hours.',
              'This family recipe requires three kinds of seasoning.',
            ],
          ),
          heard(
            'l5',
            'Même si les produits du terroir sont chers, ils sont meilleurs.',
            'Even if local specialities are expensive, they are better.',
            [
              'Because local products are expensive, they are better.',
              'Local products are cheaper, but they are not as good.',
              'Supermarkets sell local products at a lower price.',
            ],
          ),
          heard(
            'l6',
            'La date limite de consommation est indiquée sur l’emballage.',
            'The use-by date is shown on the packaging.',
            [
              'The packaging has to be thrown away after the use-by date.',
              'The label shows where the product comes from.',
              'The additives are listed on the label.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-concession',
      'sortit',
      meta(
        'What follows the connector?',
        'Sort the concession words by what comes after them.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'What does the expression need after it?',
        buckets: [
          { id: 'subj', label: 'A verb in the subjonctif', emoji: '🔷' },
          { id: 'ind', label: 'A verb in the indicatif', emoji: '🟩' },
          { id: 'noun', label: 'A noun group', emoji: '🏷️' },
          { id: 'adv', label: 'Nothing: an adverb inside the clause', emoji: '➡️' },
        ],
        items: cards('c', [
          ['bien que', 'subj', 'although (+ subjunctive)'],
          ['quoique', 'subj', 'although (+ subjunctive)'],
          ['encore que', 'subj', 'although, even though (+ subjunctive, literary)'],
          ['même si', 'ind', 'even if (+ indicative)'],
          ['alors que', 'ind', 'whereas, while (+ indicative)'],
          ['tandis que', 'ind', 'whereas (+ indicative)'],
          ['malgré', 'noun', 'despite (+ noun)'],
          ['en dépit de', 'noun', 'in spite of (+ noun)'],
          ['pourtant', 'adv', 'yet, however'],
          ['cependant', 'adv', 'however'],
          ['néanmoins', 'adv', 'nevertheless'],
          ['toutefois', 'adv', 'however, nonetheless'],
        ]),
      },
    ),

    activity(
      U,
      'conj-subjonctif',
      'conjugation',
      meta(
        'Subjunctive forms',
        'Complete the subjonctif présent after bien que.',
        ['grammar', L],
        3,
        5,
      ),
      {
        tables: [
          subjTable('finir', 'to finish', ['je', 'ils/elles']),
          subjTable('prendre', 'to take', ['tu', 'nous']),
          subjTable('faire', 'to do, to make', ['il/elle/on', 'vous']),
          subjTable('pouvoir', 'to be able to', ['je', 'vous']),
          subjTable('être', 'to be', ['tu', 'ils/elles']),
          subjTable('aller', 'to go', ['nous', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-concession',
      'gapfill',
      meta(
        'Choose the concession',
        'Pick the connector or the verb form that fits.',
        ['grammar', L, 'food-drinks'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            '___ il soit très occupé, il cuisine tous les soirs.',
            'Bien qu’',
            {
              'Même s’': 'Même si takes the indicative, but soit is subjunctive.',
              'Parce qu’': 'Parce que gives a reason, but this sentence contrasts two facts.',
              Pourtant: 'Pourtant is an adverb; it cannot open a clause with a subjunctive verb.',
            },
            'Although he is very busy, he cooks every evening.',
            'Bien que + subjonctif.',
          ),
          gh(
            'g2',
            'Même s’il ___ cher, j’achète bio.',
            'est',
            {
              soit: 'Même si is always followed by the indicative.',
              serait: 'After si, never use the conditional.',
              sera: 'After si, never use the future.',
            },
            'Even if it is expensive, I buy organic.',
            'Même si + indicatif (present here).',
          ),
          gh(
            'g3',
            'Bien qu’elle ___ végétarienne, elle mange du poisson.',
            'soit',
            {
              est: 'Bien que is followed by the subjunctive, not the indicative.',
              serait: 'Bien que does not take the conditional.',
              sera: 'Bien que does not take the future.',
            },
            'Although she is a vegetarian, she eats fish.',
            'Bien que + subjonctif: elle soit.',
          ),
          gh(
            'g4',
            'Ce fromage sent très fort. ___, il est délicieux.',
            'Pourtant',
            {
              'Bien que':
                'Bien que introduces a subordinate clause and cannot start a new sentence like this.',
              'Parce que': 'Parce que would give a reason, not a contrast.',
              Donc: 'Donc introduces a result, not a contrast.',
            },
            'This cheese smells very strong. Yet it is delicious.',
            'Pourtant opens a sentence that contradicts what you expect.',
          ),
          gh(
            'g5',
            '___ le prix élevé, le restaurant est complet.',
            'Malgré',
            {
              'Bien que': 'Bien que needs a verb in the subjunctive; a noun follows here.',
              'Même si': 'Même si needs a verb in the indicative; a noun follows here.',
              Pourtant: 'Pourtant is an adverb, not a preposition.',
            },
            'Despite the high price, the restaurant is full.',
            'Malgré + noun group.',
          ),
          gh(
            'g6',
            'Le plat est simple ; ___, il est excellent.',
            'néanmoins',
            {
              'grâce à': 'Grâce à introduces a cause before a noun.',
              'afin que': 'Afin que expresses a purpose.',
              car: 'Car would give a reason, not a contrast.',
            },
            'The dish is simple; nevertheless, it is excellent.',
            'Néanmoins marks a contrast, like pourtant or cependant.',
          ),
          gh(
            'g7',
            'Bien qu’ils ___ faim, ils attendent les autres.',
            'aient',
            {
              ont: 'Bien que needs the subjunctive: aient.',
              auraient: 'Bien que does not take the conditional.',
              auront: 'Bien que does not take the future.',
            },
            'Although they are hungry, they wait for the others.',
            'Subjonctif of avoir: qu’ils aient.',
          ),
          gh(
            'g8',
            'Même si ce légume ___ de loin, il est bio.',
            'vient',
            {
              vienne: 'Même si is followed by the indicative.',
              viendrait: 'After si, never use the conditional.',
              viendra: 'After si, never use the future.',
            },
            'Even if this vegetable comes from far away, it is organic.',
            'Même si + indicatif.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the verb',
        'Type the right form of the verb in brackets.',
        ['grammar', L, 'food-drinks'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Bien qu’elle ___ (finir) tard, elle prépare le dîner.',
            'finisse',
            'Although she finishes late, she prepares dinner.',
            'Subjonctif of finir: qu’elle finisse.',
          ),
          typed(
            't2',
            'Bien que nous ___ (prendre) le métro, nous arrivons en retard.',
            'prenions',
            'Although we take the metro, we arrive late.',
            'Subjonctif of prendre with nous: que nous prenions.',
          ),
          typed(
            't3',
            'Même si tu ___ (être) gourmand, fais attention.',
            'es',
            'Even if you are greedy, be careful.',
            'Même si takes the indicative: tu es.',
          ),
          typed(
            't4',
            'Quoiqu’il ___ (faire) froid, ils déjeunent dehors.',
            'fasse',
            'Although it is cold, they eat lunch outside.',
            'Subjonctif of faire: qu’il fasse.',
          ),
          typed(
            't5',
            'Bien que vous ___ (pouvoir) venir, vous restez chez vous.',
            'puissiez',
            'Although you could come, you are staying at home.',
            'Subjonctif of pouvoir: que vous puissiez.',
          ),
          typed(
            't6',
            '___ ses efforts, le gâteau est raté.',
            'Malgré',
            'Despite his efforts, the cake is a failure.',
            'Malgré + noun group.',
            ['En dépit de'],
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
        'Put the words in order. Watch the mood after each connector.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'Although the dish is simple, it is delicious.',
            ['Bien', 'que', 'le', 'plat', 'soit', 'simple,', 'il', 'est', 'délicieux.'],
            { extra: ['même'] },
          ),
          sent(
            'b2',
            'Even if the bread is dear, we buy it.',
            ['Même', 'si', 'le', 'pain', 'est', 'cher,', 'nous', 'l’achetons.'],
            { extra: ['soit'] },
          ),
          sent('b3', 'Despite the rain, the market is open.', [
            'Malgré',
            'la',
            'pluie,',
            'le',
            'marché',
            'est',
            'ouvert.',
          ]),
          sent(
            'b4',
            'The cheese is strong; however, we adore it.',
            ['Le', 'fromage', 'est', 'fort;', 'pourtant,', 'nous', 'l’adorons.'],
            { extra: ['bien que'] },
          ),
          sent('b5', 'She is vegetarian whereas her husband loves meat.', [
            'Elle',
            'est',
            'végétarienne',
            'alors',
            'que',
            'son',
            'mari',
            'adore',
            'la',
            'viande.',
          ]),
          sent(
            'b6',
            'Although they have little time, they cook everything themselves.',
            [
              'Bien',
              'qu’ils',
              'aient',
              'peu',
              'de',
              'temps,',
              'ils',
              'cuisinent',
              'tout',
              'eux-mêmes.',
            ],
            { extra: ['ont'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'At the market and at the restaurant',
        'Two conversations: choosing organic and ordering at a gastronomic restaurant.',
        ['communication', 'food-drinks'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'market',
            title: 'At the organic market',
            emoji: '🧺',
            setting: 'A friend asks why you pay more for organic vegetables.',
            turns: [
              say(
                'Lucie',
                'Pourquoi tu achètes bio ? C’est tellement plus cher !',
                'Why do you buy organic? It is so much more expensive!',
              ),
              you(
                'Même si c’est plus cher, je préfère savoir d’où viennent mes légumes.',
                ['Même si c’est plus cher, je ne l’achète pas.', 'That contradicts what you do.'],
                [
                  'Parce que le bio est moins cher.',
                  'That is not true, and it does not match the question.',
                ],
              ),
              say(
                'Lucie',
                'Mais le bio vient parfois de très loin.',
                'But organic food sometimes comes from very far away.',
              ),
              you(
                'C’est vrai ; pourtant, j’essaie d’acheter en circuit court quand je peux.',
                [
                  'Bien que ce soit vrai, je n’achète jamais en circuit court.',
                  'It does not follow from what you said earlier.',
                ],
                ['Donc le bio est inutile.', 'This ignores that you were making a concession.'],
              ),
            ],
          },
          {
            id: 'restaurant',
            title: 'At the restaurant',
            emoji: '🍷',
            setting: 'You are at a gastronomic restaurant and speak to the sommelier.',
            turns: [
              say(
                'Le sommelier',
                'Bonsoir. Que prendrez-vous comme boisson avec votre plat mijoté ?',
                'Good evening. What will you have to drink with your stew?',
              ),
              you(
                'Bien que je ne sois pas expert, je voudrais un vin de la région. Que me conseillez-vous ?',
                [
                  'Bien que je ne suis pas expert, je voudrais un vin.',
                  'Bien que is followed by the subjunctive: je ne sois pas.',
                ],
                ['La carte des vins est trop longue.', 'It does not answer the question.'],
              ),
              say(
                'Le sommelier',
                'Je vous conseille un rouge du terroir, léger malgré sa puissance.',
                'I recommend a local red, light despite its strength.',
              ),
              you(
                'Parfait, je le déguste volontiers, même s’il est un peu cher.',
                [
                  'Parfait, je le déguste volontiers, même s’il soit un peu cher.',
                  'Même si is followed by the indicative.',
                ],
                [
                  'Non, je préfère de l’eau avec de la malbouffe.',
                  'This contradicts the whole setting.',
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
        'Concession blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'food-drinks'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Bien que” is followed by the subjunctive.', true),
          tf(
            'b2',
            '“Même si” is followed by the subjunctive.',
            false,
            'Même si takes the indicative.',
          ),
          tf('b3', '“Malgré” is followed by a noun group.', true),
          tf(
            'b4',
            '“Pourtant” introduces a subordinate clause with a verb in the subjunctive.',
            false,
            'Pourtant is an adverb.',
          ),
          tf('b5', '“Quoique” has the same use as “bien que”.', true),
          tf('b6', 'After “même si”, the future is possible.', false, 'Never after si.'),
          tf('b7', '“Une denrée” is a foodstuff.', true),
          tf('b8', '“Un convive” is a cook.', false, 'A convive is a guest at a meal.'),
          tf('b9', '“Mijoter” means to cook slowly.', true),
          tf('b10', '“Néanmoins” and “cependant” both express a contrast.', true),
          tf(
            'b11',
            '“Le circuit court” means that food travels through many middlemen.',
            false,
            'It means few or no middlemen.',
          ),
          tf('b12', '“Alors que” can express a contrast.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: food words and concession.',
        ['vocabulary', 'grammar', L, 'food-drinks'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “un amuse-bouche”?', 'a bite-sized starter', [
            'a dessert',
            'a drink',
            'a wine list',
          ]),
          qh(
            'c2',
            '___ elle soit pressée, elle prend le temps de déjeuner.',
            'Bien qu’',
            {
              'Parce qu’': 'Parce que gives a reason, not a contrast.',
              'Même s’': 'Même si takes the indicative; soit is subjunctive.',
              Donc: 'Donc introduces a result.',
            },
            L,
          ),
          q('c3', '“Le gaspillage alimentaire” means …', 'food waste', [
            'organic farming',
            'a quality label',
            'a use-by date',
          ]),
          qh(
            'c4',
            'Même si le plat ___ simple, il est bon.',
            'est',
            {
              soit: 'Même si is followed by the indicative.',
              serait: 'After si, never use the conditional.',
              sera: 'After si, never use the future.',
            },
            L,
          ),
          q('c5', 'Who is “un sommelier”?', 'the wine specialist in a restaurant', [
            'the cook',
            'the guest',
            'the supplier',
          ]),
          qh(
            'c6',
            'Le menu est court ; ___, tout est excellent.',
            'cependant',
            {
              'bien que': 'Bien que introduces a subordinate clause.',
              malgré: 'Malgré is followed by a noun.',
              'afin que': 'Afin que expresses a purpose.',
            },
            L,
          ),
          qh(
            'c7',
            'Bien que nous ___ faim, nous attendons.',
            'ayons',
            {
              avons: 'Bien que needs the subjunctive: ayons.',
              aurons: 'Bien que does not take the future.',
              aurions: 'Bien que does not take the conditional.',
            },
            L,
          ),
          q('c8', 'What is “un label”?', 'a quality label', [
            'a recipe',
            'a packaging',
            'an additive',
          ]),
          qh(
            'c9',
            '___ la crise, les restaurants ont rouvert.',
            'Malgré',
            {
              'Bien que': 'Bien que needs a verb in the subjunctive.',
              'Même si': 'Même si needs a verb in the indicative.',
              Pourtant: 'Pourtant is an adverb, not a preposition.',
            },
            L,
          ),
          q('c10', '“Savourer” means …', 'to relish', ['to season', 'to throw away', 'to order']),
        ],
      },
    ),
  ],
};
