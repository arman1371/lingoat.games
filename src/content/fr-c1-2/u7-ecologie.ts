import { vocabList } from '../builders';
import {
  act,
  blitz,
  cards,
  challenge,
  conj,
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

const U = 'fr-c1-2-ecologie';

const vocab = vocabList(U, 'Climat et transition écologique', [
  ['le réchauffement climatique', 'global warming', '🌡️'],
  ['l’effet de serre', 'greenhouse effect', '🏭'],
  ['les émissions de CO₂', 'CO₂ emissions', '☁️'],
  ['la transition écologique', 'ecological transition', '🔄'],
  ['les énergies renouvelables', 'renewable energy', '♻️'],
  ['l’éolienne', 'wind turbine', '🌬️'],
  ['le panneau solaire', 'solar panel', '☀️'],
  ['la sobriété énergétique', 'energy frugality', '💡'],
  ['le gaspillage', 'waste (of food or resources)', '🗑️'],
  ['le tri sélectif', 'sorting of waste for recycling', '🚮'],
  ['le compost', 'compost', '🍂'],
  ['l’empreinte carbone', 'carbon footprint', '👣'],
  ['la biodiversité', 'biodiversity', '🦋'],
  ['l’espèce menacée', 'endangered species', '🐼'],
  ['la déforestation', 'deforestation', '🪓'],
  ['la sécheresse', 'drought', '🏜️'],
  ['l’inondation', 'flood', '🌊'],
  ['la canicule', 'heatwave', '🥵'],
  ['la fonte des glaciers', 'melting of the glaciers', '🧊'],
  ['l’élévation du niveau de la mer', 'sea-level rise', '📈'],
  ['l’agriculture biologique', 'organic farming', '🥕'],
  ['le circuit court', 'short supply chain, local sourcing', '🚜'],
  ['la consommation responsable', 'responsible consumption', '🛒'],
  ['l’obsolescence programmée', 'planned obsolescence', '📱'],
  ['la mobilité douce', 'soft mobility (walking, cycling)', '🚲'],
  ['le covoiturage', 'carpooling', '🚗'],
  ['le zéro déchet', 'zero waste', '🫙'],
  ['polluer', 'to pollute', '🏭'],
  ['préserver', 'to preserve', '🛡️'],
  ['reboiser', 'to replant with trees', '🌳'],
  ['l’écogeste', 'small eco-friendly action', '🌱'],
  ['l’éco-anxiété', 'climate anxiety', '😟'],
  ['le lanceur d’alerte', 'whistleblower', '📢'],
  ['la sensibilisation', 'awareness-raising', '🎓'],
]);

export const ecologie: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 7,
    title: 'Sauvons la planète !',
    subtitle: 'Climate and the energy transition – with the futur antérieur, cause and consequence',
    emoji: '🌍',
    goals: [
      'Talk about climate change, energy and everyday eco-gestures',
      'Say that something will have happened before something else (futur antérieur)',
      'Link causes and consequences precisely',
    ],
    grammar: ['Futur antérieur', 'Cause et conséquence'],
    vocabFields: ['Climat et transition écologique'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-ecology', vocab, {
      first: 'Climate and energy',
      firstText: 'Words for warming, emissions, energy and waste.',
      second: 'Nature and action',
      secondText: 'Words for biodiversity, weather extremes, farming and everyday actions.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-ecology'],
      2,
      definitions([
        [
          'Quantité de gaz à effet de serre produite par une personne ou une activité.',
          'l’empreinte carbone',
          ['la sobriété énergétique', 'le compost', 'la biodiversité'],
        ],
        [
          'Période de températures très élevées pendant plusieurs jours.',
          'la canicule',
          ['la sécheresse', 'l’inondation', 'la fonte des glaciers'],
        ],
        [
          'Fait de réduire sa consommation d’énergie.',
          'la sobriété énergétique',
          ['le covoiturage', 'le tri sélectif', 'l’écogeste'],
        ],
        [
          'Machine qui transforme la force du vent en électricité.',
          'l’éolienne',
          ['le panneau solaire', 'le circuit court', 'le compost'],
        ],
        [
          'Fait de planter des arbres là où la forêt a disparu.',
          'reboiser',
          ['polluer', 'préserver', 'gaspiller'],
        ],
        [
          'Fait de partager sa voiture avec d’autres passagers.',
          'le covoiturage',
          ['la mobilité douce', 'le zéro déchet', 'le circuit court'],
        ],
        [
          'Fait de conserver volontairement un produit pour qu’il tombe en panne.',
          'l’obsolescence programmée',
          ['le gaspillage', 'le tri sélectif', 'la déforestation'],
        ],
        [
          'Personne qui révèle des faits graves cachés au public.',
          'le lanceur d’alerte',
          ['le militant', 'le bénévole', 'le donateur'],
        ],
      ]),
    ),

    act(
      U,
      'sort-futurs',
      'sortit',
      'Futur simple or futur antérieur?',
      'Decide which future tense the verb in capitals is in.',
      ['grammar', 'fr-c12-futur-anterieur'],
      2,
      {
        instruction: 'Which future?',
        buckets: [
          { id: 'simple', label: 'futur simple', emoji: '➡️' },
          { id: 'anterieur', label: 'futur antérieur', emoji: '⏮️' },
        ],
        items: [
          ...cards('simple', [
            ['Demain, nous TRIERONS les déchets.', 'Tomorrow we will sort the waste.'],
            ['Dans dix ans, la mer MONTERA encore.', 'In ten years the sea will rise again.'],
            [
              'Quand il FERA chaud, on évitera la voiture.',
              'When it is hot, we will avoid the car.',
            ],
            ['Elle PRENDRA le vélo.', 'She will take the bike.'],
          ]),
          ...cards('anterieur', [
            [
              'Quand nous AURONS FINI le tri, nous sortirons.',
              'When we have finished sorting, we will go out.',
            ],
            [
              'Dès qu’il AURA PLU, la sécheresse reculera.',
              'As soon as it has rained, the drought will ease.',
            ],
            [
              'D’ici 2030, ils AURONT REBOISÉ cent hectares.',
              'By 2030 they will have replanted a hundred hectares.',
            ],
            [
              'Elle SERA PARTIE avant la fin du débat.',
              'She will have left before the end of the debate.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-cause',
      'sortit',
      'Cause or consequence?',
      'The expression in capitals links two ideas. Does it introduce the cause or the consequence?',
      ['grammar', 'fr-c12-cause-consequence'],
      3,
      {
        instruction: 'Cause or consequence?',
        buckets: [
          { id: 'cause', label: 'cause', emoji: '🔙' },
          { id: 'consequence', label: 'consequence', emoji: '🔜' },
        ],
        items: [
          ...cards('cause', [
            [
              'Les glaciers fondent PARCE QUE le climat se réchauffe.',
              'Glaciers melt because the climate is warming.',
            ],
            [
              'EN RAISON DE la sécheresse, les récoltes baissent.',
              'Because of the drought, harvests are falling.',
            ],
            ['GRÂCE AU tri, la ville recycle plus.', 'Thanks to sorting, the city recycles more.'],
            ['PUISQUE tu y vas, prends le vélo.', 'Since you are going, take the bike.'],
          ]),
          ...cards('consequence', [
            [
              'Il y a trop d’émissions ; PAR CONSÉQUENT, le climat change.',
              'There are too many emissions; consequently the climate is changing.',
            ],
            [
              'La ville est TELLEMENT polluée QU’on y étouffe.',
              'The city is so polluted that one can hardly breathe.',
            ],
            [
              'Il a plu très peu, SI BIEN QUE le fleuve est à sec.',
              'It rained very little, so the river is dry.',
            ],
            [
              'Le prix de l’énergie monte ; C’EST POURQUOI nous économisons.',
              'The price of energy is rising; that is why we are saving.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'conj-futur-anterieur',
      'conjugation',
      'Futur antérieur forms',
      'Fill in the futur antérieur: avoir in the future + the past participle.',
      ['grammar', 'fr-c12-futur-anterieur'],
      3,
      {
        tables: [
          conj(
            'finir',
            'to finish',
            ['aurai fini', 'auras fini', 'aura fini', 'aurons fini', 'aurez fini', 'auront fini'],
            'fr-c12-futur-anterieur',
          ),
          conj(
            'faire',
            'to do, to make',
            ['aurai fait', 'auras fait', 'aura fait', 'aurons fait', 'aurez fait', 'auront fait'],
            'fr-c12-futur-anterieur',
          ),
          conj(
            'voir',
            'to see',
            ['aurai vu', 'auras vu', 'aura vu', 'aurons vu', 'aurez vu', 'auront vu'],
            'fr-c12-futur-anterieur',
          ),
          conj(
            'prendre',
            'to take',
            ['aurai pris', 'auras pris', 'aura pris', 'aurons pris', 'aurez pris', 'auront pris'],
            'fr-c12-futur-anterieur',
          ),
          conj(
            'être',
            'to be',
            ['aurai été', 'auras été', 'aura été', 'aurons été', 'aurez été', 'auront été'],
            'fr-c12-futur-anterieur',
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-futur-anterieur',
      'gapfill',
      'Will have done',
      'Choose the verb form: futur simple or futur antérieur.',
      ['grammar', 'fr-c12-futur-anterieur'],
      3,
      {
        items: [
          gap(
            'f1',
            'Quand nous ___ le tri, nous sortirons les poubelles.',
            'aurons fait',
            ['aurons fait', 'ferons', 'avons fait', 'faisions'],
            'When we have done the sorting, we will take the bins out.',
            {
              lesson: 'fr-c12-futur-anterieur',
              explanation: 'The sorting comes first, then the bins: futur antérieur after quand.',
            },
          ),
          gap(
            'f2',
            'Dès qu’elle ___ son compost, elle plantera des tomates.',
            'aura préparé',
            ['aura préparé', 'préparera', 'a préparé', 'préparait'],
            'As soon as she has prepared her compost, she will plant tomatoes.',
            {
              lesson: 'fr-c12-futur-anterieur',
            },
          ),
          gap(
            'f3',
            'D’ici 2040, la ville ___ ses émissions de moitié.',
            'aura réduit',
            ['aura réduit', 'a réduit', 'réduira', 'réduisait'],
            'By 2040 the city will have halved its emissions.',
            {
              lesson: 'fr-c12-futur-anterieur',
              explanation: 'D’ici + a future date asks for the futur antérieur: finished by then.',
            },
          ),
          gap(
            'f4',
            'Demain, je ___ à vélo.',
            'irai',
            ['irai', 'serai allé', 'suis allé', 'allais'],
            'Tomorrow I will go by bike.',
            {
              lesson: 'fr-c12-futur-anterieur',
              explanation: 'A simple future action with no earlier one: futur simple.',
              why: {
                'serai allé': 'There is no earlier future action here, so futur simple is enough.',
              },
            },
          ),
          gap(
            'f5',
            'Une fois que les glaciers ___ fondu, il sera trop tard.',
            'auront',
            ['auront', 'seront', 'ont', 'avaient'],
            'Once the glaciers have melted, it will be too late.',
            {
              lesson: 'fr-c12-futur-anterieur',
              explanation: 'Fondre uses avoir: auront fondu.',
            },
          ),
          gap(
            'f6',
            'Elle ___ déjà partie quand vous arriverez.',
            'sera',
            ['sera', 'aura', 'est', 'était'],
            'She will already have left when you arrive.',
            {
              lesson: 'fr-c12-futur-anterieur',
              explanation: 'Partir takes être: elle sera partie.',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-cause',
      'gapfill',
      'Link cause and effect',
      'Choose the connector that fits the logic of the sentence.',
      ['grammar', 'fr-c12-cause-consequence'],
      3,
      {
        items: [
          gap(
            'c1',
            'Il n’a presque pas plu, ___ la sécheresse est sévère.',
            'si bien que',
            ['si bien que', 'parce que', 'puisque', 'grâce à'],
            'It has hardly rained, so the drought is severe.',
            {
              lesson: 'fr-c12-cause-consequence',
              explanation: 'Si bien que introduces a consequence.',
              why: {
                'parce que': 'Parce que introduces a cause; here the second clause is the result.',
              },
            },
          ),
          gap(
            'c2',
            'La ville recycle davantage ___ au tri sélectif.',
            'grâce',
            ['grâce', 'à cause', 'malgré', 'afin'],
            'The city recycles more thanks to waste sorting.',
            {
              lesson: 'fr-c12-cause-consequence',
              explanation: 'Grâce à gives a positive cause.',
            },
          ),
          gap(
            'c3',
            'Les récoltes baissent ___ de la canicule.',
            'à cause',
            ['à cause', 'grâce', 'bien que', 'afin'],
            'Harvests are falling because of the heatwave.',
            {
              lesson: 'fr-c12-cause-consequence',
              explanation: 'À cause de gives a negative cause.',
            },
          ),
          gap(
            'c4',
            'Elle a pris le train ___ elle voulait réduire son empreinte carbone.',
            'parce qu’',
            ['parce qu’', 'c’est pourquoi', 'donc', 'si bien qu’'],
            'She took the train because she wanted to cut her carbon footprint.',
            {
              lesson: 'fr-c12-cause-consequence',
            },
          ),
          gap(
            'c5',
            'Il est tellement fatigué ___ il ne peut plus marcher.',
            'qu’',
            ['qu’', 'que', 'car', 'donc'],
            'He is so tired that he can no longer walk.',
            {
              lesson: 'fr-c12-cause-consequence',
              explanation: 'Tellement … que links an intensity to its consequence.',
            },
          ),
          gap(
            'c6',
            '___ vous avez une voiture, pensez au covoiturage.',
            'Puisque',
            ['Puisque', 'Donc', 'Parce que', 'Alors que'],
            'Since you have a car, think about carpooling.',
            {
              lesson: 'fr-c12-cause-consequence',
              explanation: 'Puisque gives a cause already known to the listener.',
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
      'Put the words in order – the futur antérieur and links of cause.',
      ['grammar', 'fr-c12-futur-anterieur', 'fr-c12-cause-consequence'],
      3,
      {
        items: [
          sent(
            's1',
            'Quand nous aurons fini le tri, nous sortirons les poubelles.',
            'When we have finished sorting, we will take the bins out.',
            'fr-c12-futur-anterieur',
          ),
          sent(
            's2',
            'D’ici 2040, la ville aura réduit ses émissions.',
            'By 2040 the city will have cut its emissions.',
            'fr-c12-futur-anterieur',
          ),
          sent(
            's3',
            'Il a peu plu, si bien que le fleuve est à sec.',
            'It rained little, so the river is dry.',
            'fr-c12-cause-consequence',
          ),
          sent(
            's4',
            'La ville recycle davantage grâce au tri sélectif.',
            'The city recycles more thanks to waste sorting.',
            'fr-c12-cause-consequence',
          ),
          sent(
            's5',
            'Les récoltes baissent à cause de la canicule.',
            'Harvests are falling because of the heatwave.',
            'fr-c12-cause-consequence',
          ),
          sent(
            's6',
            'Elle sera partie avant la fin du débat.',
            'She will have left before the end of the debate.',
            'fr-c12-futur-anterieur',
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
      ['spelling', 'fr-c12-ecology'],
      2,
      {
        items: [
          scrambled('p1', 'sécheresse', 'drought', '🏜️'),
          scrambled('p2', 'canicule', 'heatwave', '🥵'),
          typed('p3', 'le covoiturage', 'carpooling', '🚗'),
          typed('p4', 'la biodiversité', 'biodiversity', '🦋'),
          dictated('p5', 'les énergies renouvelables', 'renewable energy'),
          dictated('p6', 'l’empreinte carbone', 'carbon footprint'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'Talking about the planet',
      'Three conversations: at home, in a meeting and a debate.',
      ['communication', 'fr-c12-ecology'],
      3,
      {
        scenes: [
          scene(
            'home',
            'Eco-gestures at home',
            '🏠',
            'You talk to your flatmate about the bins.',
            npc(
              'Théo',
              'Tu as encore jeté une bouteille dans la poubelle normale !',
              'You have thrown a bottle into the normal bin again!',
            ),
            you(
              'Oups, pardon. Je ferai plus attention au tri sélectif.',
              [
                'Oups, pardon. Je ferais plus attention au tri sélectif hier.',
                'Mixed-up time: use the future for a promise.',
              ],
              [
                'Et alors ? Ce n’est qu’une bouteille.',
                'Dismissive – Théo wants you to take it seriously.',
              ],
            ),
            npc(
              'Théo',
              'Quand tu auras fini ton repas, on videra le compost ensemble.',
              'When you have finished your meal, we will empty the compost together.',
            ),
            you(
              'D’accord, dès que j’aurai rangé la cuisine, je viendrai.',
              [
                'D’accord, dès que j’ai rangé la cuisine, je viendrai.',
                'The tidying comes first: use j’aurai rangé.',
              ],
              ['D’accord, quand je rangerai hier.', 'The time words do not fit.'],
            ),
          ),
          scene(
            'meeting',
            'A town-hall meeting',
            '🏛️',
            'You ask the mayor about the city’s plans.',
            npc(
              'Le maire',
              'Nous aurons installé des panneaux solaires sur toutes les écoles d’ici 2030.',
              'We will have installed solar panels on all the schools by 2030.',
            ),
            you(
              'Très bien, mais la transition écologique coûte cher. Qui paiera ?',
              [
                'Très bien, mais la transition écologique coûtait cher. Qui payait ?',
                'The question looks to the future: use the futur simple.',
              ],
              ['Je m’en fiche du prix.', 'Impolite and not constructive in a meeting.'],
            ),
            npc(
              'Le maire',
              'Grâce aux aides de l’État, la ville paiera moins.',
              'Thanks to State aid, the city will pay less.',
            ),
            you(
              'Parfait. C’est pourquoi je soutiendrai ce projet.',
              [
                'Parfait. Parce que je soutiendrai ce projet.',
                'Parce que introduces a cause; here you draw a conclusion: c’est pourquoi.',
              ],
              ['Parfait. Je ne soutiendrai rien du tout.', 'It contradicts “parfait”.'],
            ),
          ),
          scene(
            'debate',
            'Climate anxiety',
            '😟',
            'A friend is worried about the future.',
            npc(
              'Nina',
              'Je souffre d’éco-anxiété : tellement de forêts disparaissent !',
              'I suffer from climate anxiety: so many forests are disappearing!',
            ),
            you(
              'Je te comprends. La sensibilisation progresse, si bien que de plus en plus de gens agissent.',
              [
                'Je te comprends. La sensibilisation progresse, parce que de plus en plus de gens agissent.',
                'Here the second part is the result: si bien que.',
              ],
              ['Ne t’en fais pas, rien ne changera.', 'That is the opposite of reassuring.'],
            ),
            npc(
              'Nina',
              'Tu crois qu’on aura réussi à limiter le réchauffement un jour ?',
              'Do you think we will have managed to limit warming one day?',
            ),
            you(
              'Je l’espère. Si chacun fait un écogeste, nous y arriverons.',
              [
                'Je l’espère. Si chacun fera un écogeste, nous y arriverons.',
                'After si, the present is used (not the future).',
              ],
              ['Je l’espère. Tout est déjà fini.', 'Not helpful and not accurate.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Planet blitz',
      'True or false? Words, futur antérieur and cause.',
      ['grammar', 'fr-c12-futur-anterieur', 'fr-c12-cause-consequence'],
      [
        tf(
          'b1',
          'The futur antérieur is built with avoir or être in the future + a past participle.',
          true,
        ),
        tf(
          'b2',
          '“Quand nous aurons fini” means that finishing comes before the main action.',
          true,
        ),
        tf('b3', '“Elle sera partie” is a futur antérieur.', true),
        tf(
          'b4',
          '“Grâce à” introduces a negative cause.',
          false,
          'It gives a positive cause; à cause de is neutral or negative.',
        ),
        tf('b5', '“Par conséquent” introduces a consequence.', true),
        tf('b6', '“Puisque” gives a cause the listener already knows.', true),
        tf('b7', '“La canicule” is a period of intense cold.', false, 'It is a heatwave.'),
        tf('b8', '“Reboiser” means to cut down trees.', false, 'It means to plant trees again.'),
        tf('b9', '“Le covoiturage” means sharing a car journey.', true),
        tf('b10', '“Si bien que” introduces a cause.', false, 'It introduces a consequence.'),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-ecology'],
      [
        q('c1', 'Dès qu’il ___ , nous partirons.', 'aura fini', ['finira', 'a fini', 'finissait'], {
          lesson: 'fr-c12-futur-anterieur',
        }),
        q('c2', '“Le gaspillage” means …', 'waste', ['recycling', 'compost', 'pollution']),
        q(
          'c3',
          'Les récoltes baissent ___ la sécheresse.',
          'en raison de',
          ['afin de', 'bien que', 'donc'],
          {
            lesson: 'fr-c12-cause-consequence',
          },
        ),
        q(
          'c4',
          'D’ici 2050, nous ___ nos émissions.',
          'aurons réduit',
          ['réduisons', 'avons réduit', 'réduisions'],
          {
            lesson: 'fr-c12-futur-anterieur',
          },
        ),
        q(
          'c5',
          'Which connector expresses a consequence?',
          'c’est pourquoi',
          ['parce que', 'puisque', 'grâce à'],
          {
            lesson: 'fr-c12-cause-consequence',
          },
        ),
        q('c6', '“Les énergies renouvelables” are …', 'renewable energy', [
          'fossil fuels',
          'waste',
          'heating',
        ]),
        q(
          'c7',
          'Il est ___ fatigué qu’il s’endort.',
          'tellement',
          ['parce que', 'donc', 'puisque'],
          {
            lesson: 'fr-c12-cause-consequence',
          },
        ),
        q('c8', 'Elle ___ déjà partie quand nous arriverons.', 'sera', ['aura', 'est', 'était'], {
          lesson: 'fr-c12-futur-anterieur',
        }),
      ],
    ),
  ],
};
