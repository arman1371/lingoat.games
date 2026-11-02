import { vocabList } from '../builders';
import {
  act,
  blitz,
  cards,
  challenge,
  definitions,
  dictated,
  gap,
  npc,
  q,
  scene,
  scrambled,
  sent,
  tf,
  typed,
  unitFrC12,
  vocabBlock,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c1-2-francophonie';

const vocab = vocabList(U, 'Francophonie et diversité du français', [
  [
    'l’Organisation internationale de la Francophonie',
    'the international organisation of French-speaking countries',
    '🌐',
  ],
  ['le francophone', 'French speaker', '🗣️'],
  ['la langue officielle', 'official language', '🏛️'],
  ['la langue véhiculaire', 'lingua franca', '🔗'],
  ['le créole', 'creole language', '🌴'],
  ['le Maghreb', 'the Maghreb', '🐪'],
  ['les Antilles', 'the West Indies', '🏝️'],
  ['la Suisse romande', 'French-speaking Switzerland', '🏔️'],
  ['la communauté francophone', 'French-speaking community', '🧑‍🤝‍🧑'],
  ['l’influence culturelle', 'cultural influence', '🎭'],
  ['la coopération', 'cooperation', '🤝'],
  ['la diversité linguistique', 'linguistic diversity', '🔠'],
  ['le régionalisme', 'regional expression', '📍'],
  ['le belgicisme', 'Belgian French expression', '🍟'],
  ['le québécisme', 'Quebec French expression', '🍁'],
  ['septante', 'seventy (Belgium, Switzerland)', '7️⃣'],
  ['nonante', 'ninety (Belgium, Switzerland)', '9️⃣'],
  ['la poutine', 'poutine (Quebec dish)', '🍟'],
  ['le chandail', 'sweater (Quebec)', '🧥'],
  ['la tuque', 'woolly hat (Quebec)', '🧶'],
  ['le dépanneur', 'corner shop (Quebec)', '🏪'],
  ['l’emprunt', 'loanword', '📥'],
  ['l’anglicisme', 'anglicism', '🇬🇧'],
  ['le néologisme', 'new word', '🆕'],
  ['l’argot', 'slang', '🗣️'],
  ['la féminisation des noms de métier', 'feminisation of job titles', '👩‍🔬'],
  ['la norme', 'standard, norm', '📏'],
  ['l’oralité', 'oral tradition, orality', '🎙️'],
  ['le conteur', 'storyteller', '📖'],
  ['le slameur', 'slam poet', '🎤'],
  ['la littérature-monde', 'world literature in French', '📚'],
  ['le patrimoine linguistique', 'linguistic heritage', '🏺'],
  ['le multilinguisme', 'multilingualism', '🗺️'],
  ['propager', 'to spread (a language, an idea)', '📡'],
]);

export const francophonie: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 11,
    title: 'La Francophonie',
    subtitle: 'French around the world – with geographic prepositions and hypothesis',
    emoji: '🌐',
    goals: [
      'Talk about French-speaking regions, regionalisms and loanwords',
      'Use en, au, aux, à and de, du, des with countries and cities',
      'Express a hypothesis: si, au cas où, à condition que, à moins que',
    ],
    grammar: ['Prépositions géographiques', 'L’hypothèse'],
    vocabFields: ['Francophonie et diversité du français'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-francophonie', vocab, {
      first: 'The French-speaking world',
      firstText: 'Words for regions, languages and cooperation.',
      second: 'Words and expressions',
      secondText: 'Regionalisms, loanwords and the voices of French.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-francophonie'],
      2,
      definitions([
        [
          'Mot ou expression propre à une région où l’on parle français.',
          'le régionalisme',
          ['l’emprunt', 'le néologisme', 'la norme'],
        ],
        [
          'Mot qui vient d’une autre langue.',
          'l’emprunt',
          ['le verlan', 'le créole', 'la diaspora'],
        ],
        [
          'Mot nouveau, créé récemment.',
          'le néologisme',
          ['l’anglicisme', 'le régionalisme', 'le belgicisme'],
        ],
        [
          'Langue officielle d’un pays ou langue qui permet à des peuples de se comprendre.',
          'la langue véhiculaire',
          ['la langue officielle', 'le créole', 'la diaspora'],
        ],
        [
          'Ensemble des personnes d’un même peuple dispersées dans le monde.',
          'la diaspora',
          ['la coopération', 'le multilinguisme', 'le rayonnement'],
        ],
        [
          'Argot qui inverse les syllabes des mots.',
          'le verlan',
          ['le créole', 'le slameur', 'le conteur'],
        ],
        [
          'Personne qui raconte des histoires à voix haute.',
          'le conteur',
          ['le slameur', 'le francophone', 'l’interprète'],
        ],
        [
          'Fait de faire passer un savoir ou une langue aux générations suivantes.',
          'transmettre',
          ['s’adapter', 'revendiquer', 'commémorer'],
        ],
      ]),
    ),

    act(
      U,
      'sort-geo',
      'sortit',
      'Which preposition?',
      'The preposition in capitals goes with a place. Sort by the rule.',
      ['grammar', 'fr-c12-prepositions-geo'],
      3,
      {
        instruction: 'En, au, aux or à?',
        buckets: [
          { id: 'en', label: 'en (fem. country)', emoji: '🇧🇪' },
          { id: 'au', label: 'au (masc. country)', emoji: '🇨🇦' },
          { id: 'aux', label: 'aux (plural)', emoji: '🏝️' },
          { id: 'a', label: 'à (city)', emoji: '🏙️' },
        ],
        items: [
          ...cards('en', [
            ['Elle vit EN Belgique.', 'She lives in Belgium.'],
            ['Nous allons EN Tunisie.', 'We are going to Tunisia.'],
            ['Il travaille EN Côte d’Ivoire.', 'He works in Côte d’Ivoire.'],
          ]),
          ...cards('au', [
            ['Ils habitent AU Québec.', 'They live in Quebec.'],
            ['Elle étudie AU Sénégal.', 'She studies in Senegal.'],
            ['Nous passons un mois AU Cameroun.', 'We are spending a month in Cameroon.'],
          ]),
          ...cards('aux', [
            ['Il est né AUX Antilles.', 'He was born in the West Indies.'],
            ['Ils partent AUX Seychelles.', 'They are leaving for the Seychelles.'],
            ['Elle vit AUX États-Unis.', 'She lives in the United States.'],
          ]),
          ...cards('a', [
            ['Je suis née À Dakar.', 'I was born in Dakar.'],
            ['Nous passons Noël À Montréal.', 'We spend Christmas in Montreal.'],
            ['Elle travaille À Bruxelles.', 'She works in Brussels.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-hypothese',
      'sortit',
      'Which kind of hypothesis?',
      'Sort the conditions by the tenses they use.',
      ['grammar', 'fr-c12-hypothese'],
      3,
      {
        instruction: 'Real, unreal now, or unreal past?',
        buckets: [
          { id: 'reel', label: 'possible: si + présent → futur', emoji: '✅' },
          { id: 'irreel', label: 'unreal now: si + imparfait → conditionnel', emoji: '💭' },
          { id: 'passe', label: 'unreal past: si + plus-que-parfait', emoji: '⏪' },
        ],
        items: [
          ...cards('reel', [
            [
              'Si nous allons à Québec, nous goûterons la poutine.',
              'If we go to Quebec City, we will try poutine.',
            ],
            [
              'S’il fait beau, nous visiterons Dakar à pied.',
              'If it is nice, we will tour Dakar on foot.',
            ],
            [
              'Si tu viens, je te présenterai mes amis belges.',
              'If you come, I will introduce you to my Belgian friends.',
            ],
          ]),
          ...cards('irreel', [
            [
              'Si je vivais au Maroc, je parlerais arabe.',
              'If I lived in Morocco, I would speak Arabic.',
            ],
            [
              'Si on avait plus de temps, on voyagerait en Afrique.',
              'If we had more time, we would travel in Africa.',
            ],
            [
              'Si elle parlait créole, elle comprendrait ce chant.',
              'If she spoke Creole, she would understand this song.',
            ],
          ]),
          ...cards('passe', [
            [
              'Si j’avais su, je serais allé au Sénégal.',
              'If I had known, I would have gone to Senegal.',
            ],
            [
              'Si elle avait appris le créole, elle aurait compris.',
              'If she had learned Creole, she would have understood.',
            ],
            [
              'Si nous étions partis plus tôt, nous aurions vu le festival.',
              'If we had left earlier, we would have seen the festival.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'gap-geo',
      'gapfill',
      'En, au, aux, à, de, du, des',
      'Choose the right preposition with the place.',
      ['grammar', 'fr-c12-prepositions-geo'],
      3,
      {
        items: [
          gap(
            'g1',
            'Elle habite ___ Sénégal depuis cinq ans.',
            'au',
            ['au', 'en', 'aux', 'à'],
            'She has lived in Senegal for five years.',
            {
              lesson: 'fr-c12-prepositions-geo',
              explanation: 'Sénégal is masculine: au Sénégal.',
            },
          ),
          gap(
            'g2',
            'Nous passons nos vacances ___ Tunisie.',
            'en',
            ['en', 'au', 'aux', 'à'],
            'We spend our holidays in Tunisia.',
            {
              lesson: 'fr-c12-prepositions-geo',
              explanation: 'Feminine country (or one that starts with a vowel): en.',
            },
          ),
          gap(
            'g3',
            'Il est né ___ Antilles.',
            'aux',
            ['aux', 'en', 'au', 'à'],
            'He was born in the West Indies.',
            {
              lesson: 'fr-c12-prepositions-geo',
              explanation: 'Plural place names take aux.',
            },
          ),
          gap(
            'g4',
            'Je suis arrivé ___ Bruxelles hier.',
            'à',
            ['à', 'en', 'au', 'aux'],
            'I arrived in Brussels yesterday.',
            {
              lesson: 'fr-c12-prepositions-geo',
              explanation: 'Cities take à.',
            },
          ),
          gap(
            'g5',
            'Il revient ___ Cameroun ce soir.',
            'du',
            ['du', 'de', 'des', 'd’'],
            'He is coming back from Cameroon tonight.',
            {
              lesson: 'fr-c12-prepositions-geo',
              explanation: 'Masculine country, coming from: du.',
            },
          ),
          gap(
            'g6',
            'Elle vient ___ Suisse.',
            'de',
            ['de', 'du', 'des', 'en'],
            'She comes from Switzerland.',
            {
              lesson: 'fr-c12-prepositions-geo',
              explanation: 'Feminine country, coming from: de (no article).',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-hypothese',
      'gapfill',
      'Express a hypothesis',
      'Choose the connector or the verb form that fits.',
      ['grammar', 'fr-c12-hypothese'],
      3,
      {
        items: [
          gap(
            'h1',
            'Si nous ___ à Québec, nous goûterons la poutine.',
            'allons',
            ['allons', 'irons', 'irions', 'sommes allés'],
            'If we go to Quebec City, we will try poutine.',
            {
              lesson: 'fr-c12-hypothese',
              explanation: 'Real condition: si + present, result in the future.',
              why: { irons: 'Never put the future right after si in a condition.' },
            },
          ),
          gap(
            'h2',
            'Si je parlais créole, je ___ ce chant.',
            'comprendrais',
            ['comprendrais', 'comprendrai', 'comprenais', 'aurais compris'],
            'If I spoke Creole, I would understand this song.',
            {
              lesson: 'fr-c12-hypothese',
              explanation: 'Unreal present: si + imparfait → conditionnel.',
            },
          ),
          gap(
            'h3',
            'Si elle avait appris le créole, elle ___ compris.',
            'aurait',
            ['aurait', 'avait', 'a', 'aura'],
            'If she had learned Creole, she would have understood.',
            {
              lesson: 'fr-c12-hypothese',
              explanation: 'Unreal past: si + plus-que-parfait → conditionnel passé.',
            },
          ),
          gap(
            'h4',
            'Je viendrai ___ condition que tu m’invites.',
            'à',
            ['à', 'de', 'en', 'sans'],
            'I will come provided that you invite me.',
            { lesson: 'fr-c12-hypothese', explanation: 'À condition que + subjunctive.' },
          ),
          gap(
            'h5',
            'Prends un parapluie ___ où il pleuvrait.',
            'au cas',
            ['au cas', 'à moins', 'de peur', 'en raison'],
            'Take an umbrella in case it rains.',
            { lesson: 'fr-c12-hypothese', explanation: 'Au cas où + conditional.' },
          ),
          gap(
            'h6',
            'Nous partirons demain, à moins qu’il ne ___.',
            'pleuve',
            ['pleuve', 'pleut', 'pleuvra', 'pleuvait'],
            'We will leave tomorrow unless it rains.',
            {
              lesson: 'fr-c12-hypothese',
              explanation: 'À moins que + subjunctive (often with a pleonastic ne).',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'sentences',
      'sentence',
      'Build the sentence',
      'Put the words in order – places and hypotheses.',
      ['grammar', 'fr-c12-prepositions-geo', 'fr-c12-hypothese'],
      3,
      {
        items: [
          sent(
            's1',
            'Elle habite au Sénégal depuis cinq ans.',
            'She has lived in Senegal for five years.',
            'fr-c12-prepositions-geo',
          ),
          sent(
            's2',
            'Nous passons nos vacances en Tunisie.',
            'We spend our holidays in Tunisia.',
            'fr-c12-prepositions-geo',
          ),
          sent(
            's3',
            'Il revient du Cameroun ce soir.',
            'He is coming back from Cameroon tonight.',
            'fr-c12-prepositions-geo',
          ),
          sent(
            's4',
            'Si nous allons à Québec, nous goûterons la poutine.',
            'If we go to Quebec City, we will try poutine.',
            'fr-c12-hypothese',
          ),
          sent(
            's5',
            'Si je parlais créole, je comprendrais ce chant.',
            'If I spoke Creole, I would understand this song.',
            'fr-c12-hypothese',
          ),
          sent(
            's6',
            'Je viendrai à condition que tu m’invites.',
            'I will come provided you invite me.',
            'fr-c12-hypothese',
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'spell-words',
      'spell',
      'Spell the words',
      'Unscramble, type and write what you hear. Accents are optional here.',
      ['spelling', 'fr-c12-francophonie'],
      2,
      {
        items: [
          scrambled('p1', 'créole', 'creole language', '🌴'),
          scrambled('p2', 'diaspora', 'diaspora', '🧭'),
          typed('p3', 'l’anglicisme', 'anglicism', '🇬🇧'),
          typed('p4', 'le dépanneur', 'corner shop (Quebec)', '🏪'),
          dictated('p5', 'la langue officielle', 'official language'),
          dictated('p6', 'la diversité linguistique', 'linguistic diversity'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'Around the French-speaking world',
      'Three conversations: a trip, a word and a plan.',
      ['communication', 'fr-c12-francophonie'],
      3,
      {
        scenes: [
          scene(
            'trip',
            'Planning a trip',
            '✈️',
            'You talk about where to travel next year.',
            npc(
              'Awa',
              'Tu irais où si tu pouvais partir en Francophonie ?',
              'Where would you go if you could travel in the French-speaking world?',
            ),
            you(
              'J’irais au Québec, puis aux Antilles si j’avais assez d’argent.',
              [
                'J’irais en Québec, puis à Antilles si j’avais assez d’argent.',
                'Québec is masculine: au Québec; Antilles is plural: aux Antilles.',
              ],
              ['Je n’irais nulle part.', 'It does not answer with a place.'],
            ),
            npc(
              'Awa',
              'Moi, je suis née à Dakar. Je rentre au Sénégal cet été.',
              'I was born in Dakar. I am going back to Senegal this summer.',
            ),
            you(
              'Bonne idée ! Si j’avais su, je serais venu avec toi.',
              [
                'Bonne idée ! Si j’aurais su, je venais avec toi.',
                'Never use the conditional after si.',
              ],
              ['Bonne idée ! Tu viens de Sénégal ?', 'Du Sénégal: masculine country takes du.'],
            ),
          ),
          scene(
            'word',
            'A new word',
            '🍁',
            'A Quebec friend uses an unfamiliar word.',
            npc(
              'Mathieu',
              'Je vais au dépanneur chercher une tuque, il fait froid.',
              'I am going to the corner shop to get a woolly hat, it is cold.',
            ),
            you(
              'Un dépanneur ? En France, on dirait une supérette. J’adore les régionalismes !',
              [
                'Un dépanneur ? En France, on dire une supérette. J’adore les régionalismes !',
                'After on, use the conditional: on dirait.',
              ],
              [
                'Je ne comprends rien, ton français est faux.',
                'Rude – regionalisms are not mistakes.',
              ],
            ),
            npc(
              'Mathieu',
              'Chez nous, on dit aussi septante en Belgique et en Suisse.',
              'In our world they also say septante in Belgium and Switzerland.',
            ),
            you(
              'Oui ! Septante et nonante sont plus logiques que soixante-dix.',
              [
                'Oui ! Soixante-dix et nonante sont plus logiques.',
                'Pair the words correctly: septante with nonante.',
              ],
              ['Non, je ne crois pas aux nombres.', 'It does not respond to the point.'],
            ),
          ),
          scene(
            'plan',
            'A plan with a condition',
            '📆',
            'You plan a French-speaking festival day.',
            npc(
              'Léna',
              'On ira au festival samedi, à moins qu’il pleuve.',
              'We will go to the festival on Saturday, unless it rains.',
            ),
            you(
              'D’accord, prenons un imperméable au cas où il pleuvrait.',
              [
                'D’accord, prenons un imperméable au cas où il pleuvra.',
                'Au cas où takes the conditional: pleuvrait.',
              ],
              ['D’accord, je reste chez moi.', 'It does not follow the plan.'],
            ),
            npc(
              'Léna',
              'Super. Je viendrai à condition que tu apportes ta guitare.',
              'Great. I will come provided you bring your guitar.',
            ),
            you(
              'Entendu, je l’apporterai.',
              ['Entendu, je l’apportais.', 'A promise needs the future: apporterai.'],
              ['Entendu, je ne l’apporterai pas.', 'It contradicts “Entendu”.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Francophonie blitz',
      'True or false? Words, places and hypotheses.',
      ['grammar', 'fr-c12-prepositions-geo', 'fr-c12-hypothese'],
      [
        tf('b1', 'One says “en Belgique”.', true),
        tf('b2', 'One says “à Québec” for the city and “au Québec” for the province.', true),
        tf('b3', 'One says “aux États-Unis”.', true),
        tf('b4', 'Cities take “en”.', false, 'Cities take à: à Dakar, à Bruxelles.'),
        tf('b5', 'After “si” in a real condition you use the present.', true),
        tf(
          'b6',
          'After “si” you can use the conditional.',
          false,
          'Never; use the imparfait or the plus-que-parfait.',
        ),
        tf('b7', '“À condition que” is followed by the subjunctive.', true),
        tf('b8', '“Au cas où” is followed by the conditional.', true),
        tf('b9', '“Septante” is used in Belgium and Switzerland for seventy.', true),
        tf(
          'b10',
          '“Un anglicism” is a word from German.',
          false,
          'An anglicism comes from English.',
        ),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-francophonie'],
      [
        q('c1', 'Elle vit ___ Canada.', 'au', ['en', 'aux', 'à'], {
          lesson: 'fr-c12-prepositions-geo',
        }),
        q('c2', 'Nous sommes ___ Madagascar.', 'à', ['au', 'en', 'aux'], {
          lesson: 'fr-c12-prepositions-geo',
        }),
        q(
          'c3',
          'Si tu venais, nous ___ ensemble.',
          'chanterions',
          ['chanterons', 'chantions', 'chantons'],
          {
            lesson: 'fr-c12-hypothese',
          },
        ),
        q('c4', '“Un emprunt” is …', 'a loanword', ['a dialect', 'a pun', 'an accent']),
        q('c5', 'Il revient ___ Maroc.', 'du', ['de', 'des', 'au'], {
          lesson: 'fr-c12-prepositions-geo',
        }),
        q('c6', 'Je viendrai à condition que tu ___ là.', 'sois', ['es', 'seras', 'étais'], {
          lesson: 'fr-c12-hypothese',
        }),
        q(
          'c7',
          'Prends un manteau ___ où il ferait froid.',
          'au cas',
          ['à moins', 'pour', 'bien'],
          {
            lesson: 'fr-c12-hypothese',
          },
        ),
        q('c8', '“La diaspora” means …', 'a people spread around the world', [
          'a language family',
          'a treaty',
          'a dialect',
        ]),
      ],
    ),
  ],
};
