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

const U = 'fr-b2-1-ville';

const green = vocabList(U, 'The sustainable city', [
  ['un véhicule électrique', 'an electric vehicle', '🔌'],
  ['les transports doux', 'soft mobility (walking, cycling)', '🚲'],
  ['une zone à faibles émissions', 'a low-emission zone', '🌫️'],
  ['le covoiturage', 'carpooling', '🚗'],
  ['une borne de recharge', 'a charging point', '⚡'],
  ['le tri sélectif', 'waste sorting', '♻️'],
  ['le compostage', 'composting', '🍂'],
  ['un îlot de chaleur', 'an urban heat island', '🌡️'],
  ['la végétalisation', 'greening', '🌿'],
  ['un éco-quartier', 'an eco-district', '🏘️'],
  ['la sobriété', 'sobriety, using less', '🪫'],
  ['une éolienne', 'a wind turbine', '🌬️'],
  ['une canicule', 'a heatwave', '🥵'],
  ['un vélo en libre-service', 'a bike-share bike', '🚴'],
]);

const citizens = vocabList(U, 'Citizens and heritage', [
  ['un citoyen', 'a citizen', '🧑‍🤝‍🧑'],
  ['la concertation', 'consultation', '🗣️'],
  ['un référendum', 'a referendum', '🗳️'],
  ['une association de quartier', 'a neighbourhood association', '🏘️'],
  ['un budget participatif', 'a participatory budget', '🗳️'],
  ['la préservation', 'preservation', '🛡️'],
  ['une démolition', 'a demolition', '🏚️'],
  ['un classement', 'a listing (of a building)', '📜'],
  ['un monument historique', 'a historic monument', '🏰'],
  ['la réhabilitation', 'rehabilitation, restoration', '🛠️'],
  ['un jardin partagé', 'a community garden', '🥕'],
  ['une initiative citoyenne', 'a citizens’ initiative', '💡'],
]);

const phrases = vocabList(U, 'Talking about the future city', [
  [
    'La vieille gare sera transformée en bibliothèque.',
    'The old station will be turned into a library.',
    '🚉',
  ],
  [
    'Le centre-ville a été rendu piéton l’an dernier.',
    'The city centre was made pedestrian last year.',
    '🚶',
  ],
  ['Ce quartier se visite à pied.', 'This district is visited on foot.', '👟'],
  ['Les vélos se louent à la gare.', 'Bikes can be rented at the station.', '🚲'],
  [
    'Bien que la ville soit polluée, les habitants y restent.',
    'Although the city is polluted, the inhabitants stay.',
    '🌫️',
  ],
  [
    'Alors que la mairie défend ce projet, les riverains s’y opposent.',
    'While the council defends this project, residents oppose it.',
    '🏛️',
  ],
  [
    'Malgré les protestations, le projet a été voté.',
    'Despite the protests, the project was voted through.',
    '🗳️',
  ],
  ['Même si c’est cher, c’est nécessaire.', 'Even if it is expensive, it is necessary.', '💶'],
]);

const vocab = [...green, ...citizens, ...phrases];

const KIND: [string, 'subj' | 'ind' | 'noun', string][] = [
  [
    'Bien que la ville soit polluée, on y reste.',
    'subj',
    'Although the city is polluted, we stay.',
  ],
  ['Quoiqu’il fasse chaud, nous sortons.', 'subj', 'Although it is hot, we go out.'],
  ['Bien qu’il y ait du bruit, il dort.', 'subj', 'Although there is noise, he sleeps.'],
  [
    'Alors que la mairie défend ce projet, les riverains s’y opposent.',
    'ind',
    'While the council defends this project, residents oppose it.',
  ],
  ['Même s’il pleut, nous irons au marché.', 'ind', 'Even if it rains, we will go to the market.'],
  ['Tandis que certains partent, d’autres arrivent.', 'ind', 'While some leave, others arrive.'],
  ['Même si c’est cher, c’est nécessaire.', 'ind', 'Even if it is expensive, it is necessary.'],
  ['Malgré la pluie, le marché a eu lieu.', 'noun', 'Despite the rain, the market took place.'],
  [
    'En dépit des protestations, le projet est voté.',
    'noun',
    'In spite of the protests, the project is voted.',
  ],
  ['Malgré le bruit, il dort.', 'noun', 'Despite the noise, he sleeps.'],
  [
    'Il fait froid ; pourtant, les terrasses sont pleines.',
    'ind',
    'It is cold; yet the terraces are full.',
  ],
  ['Malgré la canicule, ils ont marché.', 'noun', 'Despite the heatwave, they walked.'],
];

export const ville: UnitContent = {
  unit: unitFr({
    id: U,
    order: 12,
    title: 'La ville de demain',
    subtitle:
      'Imagine the city of the future, debate projects and say who does what with the passive and with concession',
    emoji: '🌆',
    goals: [
      'Talk about ecology, mobility and citizen action in the city',
      'Use the passive voice and the pronominal passive',
      'Express opposition and concession with bien que, alors que, malgré, même si',
    ],
    grammar: ['The passive and the pronominal passive', 'Opposition and concession'],
    vocabFields: ['The sustainable city', 'Citizens and heritage', 'Talking about the future city'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'future-city', {
      a: {
        title: 'The sustainable city',
        description: 'Mobility, energy and nature in town.',
        words: green,
      },
      b: {
        title: 'Citizens and heritage',
        description: 'Citizen action and protecting buildings.',
        words: citizens,
      },
      listen: [
        'le covoiturage',
        'le tri sélectif',
        'une canicule',
        'une éolienne',
        'un citoyen',
        'un référendum',
        'une démolition',
        'la réhabilitation',
      ],
      spell: [
        ['unscramble', 'canicule', 'heatwave', '🥵', 'une canicule'],
        ['unscramble', 'référendum', 'a referendum', '🗳️', 'un référendum'],
        ['type', 'compostage', 'composting', '🍂', 'le compostage'],
        ['type', 'citoyen', 'citizen', '🧑‍🤝‍🧑', 'un citoyen'],
        ['type', 'sobriété', 'sobriety', '🪫', 'la sobriété'],
      ],
    }),

    activity(
      U,
      'gap-passive',
      'gapfill',
      meta(
        'Active or passive?',
        'Be + participle, or se + verb.',
        ['grammar', 'fr-passive', 'future-city'],
        3,
        4,
        'fr-passive',
      ),
      {
        items: [
          g(
            'p1',
            'La vieille gare ___ en bibliothèque l’an prochain.',
            'sera transformée',
            [
              ['sera transformé', 'The participle agrees with gare: transformée.'],
              ['transformera', 'The station does not act: use the passive.'],
              ['a été transformée', 'The passé composé does not fit “l’an prochain”.'],
            ],
            'The old station will be turned into a library next year.',
            'Passive: être + participle, with agreement.',
          ),
          g(
            'p2',
            'Ces rues ___ par la mairie.',
            'ont été rénovées',
            [
              ['ont rénové', 'The streets do not act: use the passive.'],
              ['ont été rénové', 'The participle agrees with rues: rénovées.'],
              ['sont rénové', 'The tense and the agreement are wrong.'],
            ],
            'These streets were renovated by the council.',
            'Passé composé passive: ont été + participle.',
          ),
          g(
            'p3',
            'Le projet ___ par une association.',
            'a été proposé',
            [
              ['a proposé', 'The project does not act: use the passive.'],
              ['a été proposée', 'Projet is masculine: proposé.'],
              ['est proposée', 'Projet is masculine, and the tense does not match.'],
            ],
            'The project was proposed by an association.',
            'A été proposé: masculine singular.',
          ),
          g(
            'p4',
            'Ce quartier ___ à pied.',
            'se visite',
            [
              ['est visite', 'Use the participle (visité) or the pronominal form.'],
              ['se visitent', 'Quartier is singular: se visite.'],
              ['visite', 'Without se, the sentence becomes active.'],
            ],
            'This district is visited on foot.',
            'Pronominal passive: se + verb for general facts.',
          ),
          g(
            'p5',
            'Les vélos ___ à la gare.',
            'se louent',
            [
              ['se loue', 'Vélos is plural: se louent.'],
              ['sont loue', 'Use the participle or the pronominal form.'],
              ['louent', 'Without se, the sentence becomes active.'],
            ],
            'Bikes can be rented at the station.',
            'Pronominal passive: se louent.',
          ),
          g(
            'p6',
            'La loi a été votée ___ le conseil municipal.',
            'par',
            [
              ['de', 'The agent of an action is introduced by par.'],
              ['à', 'The agent of an action is introduced by par.'],
              ['pour', 'The agent of an action is introduced by par.'],
            ],
            'The law was voted by the city council.',
            'The agent: par.',
          ),
          g(
            'p7',
            'Les déchets ne ___ pas dans la rue.',
            'se jettent',
            [
              ['se jette', 'Déchets is plural: se jettent.'],
              ['sont jette', 'Use the participle or the pronominal form.'],
              ['jettent', 'Without se, the sentence becomes active.'],
            ],
            'Waste is not thrown in the street.',
            'Pronominal passive: se jettent.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-concession',
      'gapfill',
      meta(
        'Although, despite',
        'Opposition and concession.',
        ['grammar', 'fr-concession', 'future-city'],
        3,
        4,
        'fr-concession',
      ),
      {
        items: [
          g(
            'c1',
            'Bien que la ville ___ polluée, les habitants y restent.',
            'soit',
            [
              ['est', 'Bien que is followed by the subjunctive.'],
              ['sera', 'Bien que is followed by the subjunctive.'],
              ['serait', 'Bien que is followed by the subjunctive.'],
            ],
            'Although the city is polluted, the inhabitants stay.',
            'Bien que + subjunctive.',
          ),
          g(
            'c2',
            '___ la pluie, le marché a eu lieu.',
            'Malgré',
            [
              ['Bien que', 'Bien que is followed by a verb, here there is a noun.'],
              ['Quoique', 'Quoique is followed by a verb, here there is a noun.'],
              ['Pourtant', 'Pourtant is an adverb: it cannot introduce a noun.'],
            ],
            'Despite the rain, the market took place.',
            'Malgré + noun.',
          ),
          g(
            'c3',
            'Même s’il ___ cher, c’est nécessaire.',
            'est',
            [
              ['soit', 'Même si is followed by the indicative.'],
              ['sera', 'After si, the future is not used.'],
              ['serait', 'Même si + present for a real possibility.'],
            ],
            'Even if it is expensive, it is necessary.',
            'Même si + indicative.',
          ),
          g(
            'c4',
            'Il fait froid ; ___, les terrasses sont pleines.',
            'pourtant',
            [
              ['car', 'Car gives a reason, not a contrast.'],
              ['donc', 'Donc gives a result, not a contrast.'],
              ['puisque', 'Puisque gives a reason, not a contrast.'],
            ],
            'It is cold; yet the terraces are full.',
            'Pourtant, cependant: contrast.',
          ),
          g(
            'c5',
            '___ la mairie défend ce projet, les riverains s’y opposent.',
            'Alors que',
            [
              ['Parce que', 'Parce que gives a reason, not an opposition.'],
              ['Pour que', 'Pour que expresses a purpose.'],
              ['Afin que', 'Afin que expresses a purpose.'],
            ],
            'While the council defends this project, residents oppose it.',
            'Alors que + indicative: opposition.',
          ),
          g(
            'c6',
            'Quoiqu’il ___ tard, nous continuons.',
            'soit',
            [
              ['est', 'Quoique is followed by the subjunctive.'],
              ['sera', 'Quoique is followed by the subjunctive.'],
              ['était', 'Quoique is followed by the subjunctive.'],
            ],
            'Although it is late, we keep going.',
            'Quoique + subjunctive.',
          ),
          g(
            'c7',
            'Ce projet est utile ; ___, il coûte trop cher.',
            'cependant',
            [
              ['donc', 'Donc gives a result, not a contrast.'],
              ['car', 'Car gives a reason, not a contrast.'],
              ['parce que', 'Parce que gives a reason, not a contrast.'],
            ],
            'This project is useful; however, it costs too much.',
            'Cependant: contrast.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-concession',
      'sortit',
      meta(
        'What follows?',
        'Subjunctive, indicative or a noun?',
        ['grammar', 'fr-concession', 'future-city'],
        2,
        4,
        'fr-concession',
      ),
      {
        instruction: 'What does the connector of opposition or concession take?',
        buckets: [
          { id: 'subj', label: 'subjunctive', emoji: '🔵' },
          { id: 'ind', label: 'indicative', emoji: '🟢' },
          { id: 'noun', label: 'a noun', emoji: '🏷️' },
        ],
        items: cards('k', KIND),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-passive', 'fr-concession'],
        3,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'The old station was turned into a library.',
            ['La', 'vieille', 'gare', 'a', 'été', 'transformée', 'en', 'bibliothèque.'],
            { extra: ['transformé'], lesson: 'fr-passive' },
          ),
          sent(
            's2',
            'Bikes can be rented at the station.',
            ['Les', 'vélos', 'se', 'louent', 'à', 'la', 'gare.'],
            { extra: ['sont'], lesson: 'fr-passive' },
          ),
          sent(
            's3',
            'Although the city is polluted, people stay.',
            ['Bien', 'que', 'la', 'ville', 'soit', 'polluée,', 'on', 'y', 'reste.'],
            { extra: ['est'], lesson: 'fr-concession' },
          ),
          sent(
            's4',
            'Despite the protests, the project was voted.',
            ['Malgré', 'les', 'protestations,', 'le', 'projet', 'a', 'été', 'voté.'],
            { extra: ['Bien'], lesson: 'fr-concession' },
          ),
          sent(
            's5',
            'Even if it is expensive, it is necessary.',
            ['Même', 'si', 'c’est', 'cher,', 'c’est', 'nécessaire.'],
            { extra: ['soit'], lesson: 'fr-concession' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Read the news',
        'Read the sentence from a news report and pick its meaning.',
        ['communication', 'future-city'],
        3,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Une zone à faibles émissions sera créée dans le centre-ville.',
            'A low-emission zone will be created in the city centre.',
            [
              'A low-emission zone was closed in the centre.',
              'The centre will create emissions.',
              'Nobody creates zones in the centre.',
            ],
          ),
          qs(
            'r2',
            'Malgré la canicule, les jardins partagés ont été sauvés par les habitants.',
            'Despite the heatwave, the community gardens were saved by the residents.',
            [
              'Because of the heatwave, the gardens were destroyed.',
              'The residents saved the heatwave.',
              'The gardens saved the residents.',
            ],
          ),
          qs(
            'r3',
            'Alors que la mairie défend la démolition, une pétition demande le classement du bâtiment.',
            'While the council defends demolition, a petition asks for the building to be listed.',
            [
              'The council signed the petition.',
              'The petition supports the demolition.',
              'The building was listed yesterday.',
            ],
          ),
          qs('r4', 'Ce parc se ferme à 22 heures.', 'This park closes at 10 p.m.', [
            'This park is closed by the neighbours.',
            'This park opens at 10 p.m.',
            'Someone closes this park every day.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Debate the project',
        'Discuss a city project at a meeting and with a neighbour.',
        ['communication', 'future-city'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'meeting',
            title: 'A public meeting',
            emoji: '🗳️',
            setting: 'At a public meeting you ask about a city project. Use vous.',
            turns: [
              say(
                'Le maire',
                'Le parking sera remplacé par un jardin partagé.',
                'The car park will be replaced by a community garden.',
              ),
              you(
                'Bien que ce projet soit intéressant, je m’inquiète pour le stationnement.',
                [
                  'Bien que ce projet est intéressant, je m’inquiète pour le stationnement.',
                  'Bien que is followed by the subjunctive: soit.',
                ],
                [
                  'Malgré que ce projet soit intéressant, je m’inquiète pour le stationnement.',
                  'Prefer bien que; malgré takes a noun.',
                ],
              ),
              say(
                'Le maire',
                'Des places seront créées près de la gare.',
                'Spaces will be created near the station.',
              ),
              you(
                'Merci. Une pétition avait été lancée par les riverains, et elle a été entendue.',
                [
                  'Merci. Une pétition avait lancé les riverains, et elle a entendu.',
                  'Use the passive: avait été lancée, a été entendue.',
                ],
                [
                  'Merci. Une pétition avait été lancé par les riverains, et elle a été entendu.',
                  'Pétition is feminine: lancée, entendue.',
                ],
              ),
            ],
          },
          {
            id: 'neighbour',
            title: 'A neighbour',
            emoji: '🏘️',
            setting: 'You chat with a neighbour about your district. Use tu.',
            turns: [
              say(
                'Aline',
                'Le quartier a beaucoup changé, non ?',
                'The district has changed a lot, hasn’t it?',
              ),
              you(
                'Oui, mais ça se voit surtout dans les rues piétonnes.',
                [
                  'Oui, mais ça voit surtout dans les rues piétonnes.',
                  'Use the pronominal passive: ça se voit.',
                ],
                ['Oui, mais ça se vois surtout dans les rues piétonnes.', 'Se voit, third person.'],
              ),
              say(
                'Aline',
                'Même s’il y a plus de bruit, j’aime ce côté vivant.',
                'Even if there is more noise, I like this lively side.',
              ),
              you(
                'Moi aussi, malgré les travaux, je ne regrette rien.',
                [
                  'Moi aussi, bien que les travaux, je ne regrette rien.',
                  'Bien que takes a verb; malgré takes a noun.',
                ],
                [
                  'Moi aussi, malgré que les travaux, je ne regrette rien.',
                  'Malgré takes a noun directly.',
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
        'City of tomorrow blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-passive', 'fr-concession'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'In the passive the participle agrees with the subject.', true),
          tf('b2', '“Ce vin se boit frais” is a pronominal passive.', true),
          tf('b3', '“Bien que” is followed by the subjunctive.', true),
          tf(
            'b4',
            '“Même si” is followed by the subjunctive.',
            false,
            'Même si is followed by the indicative.',
          ),
          tf('b5', '“Malgré” is followed by a noun.', true),
          tf('b6', '“Le maire a été élu par les habitants” is a passive sentence.', true),
          tf('b7', '“Alors que” can express an opposition.', true),
          tf('b8', '“Pourtant” means “therefore”.', false, 'Pourtant means however or yet.'),
          tf('b9', '“Une canicule” is a heatwave.', true),
          tf('b10', '“La sobriété” means using more.', false, 'La sobriété means using less.'),
          tf('b11', '“Un classement” can protect a building.', true),
          tf('b12', '“Le covoiturage” is carpooling.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'City of tomorrow challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'future-city'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Ces bâtiments ___ par un architecte célèbre.”',
            'ont été construits',
            ['ont construit', 'sont construit', 'ont été construit'],
            undefined,
            'fr-passive',
          ),
          q(
            'c2',
            'Complete: “Les tickets ___ aux guichets.”',
            'se vendent',
            ['se vend', 'vendent', 'sont vend'],
            undefined,
            'fr-passive',
          ),
          q(
            'c3',
            'Complete: “___ il pleuve, la fête aura lieu.”',
            'Bien qu’',
            ['Malgré', 'Même si', 'Pourtant'],
            undefined,
            'fr-concession',
          ),
          q(
            'c4',
            'Complete: “___ le bruit, il dort bien.”',
            'Malgré',
            ['Bien que', 'Alors que', 'Quoique'],
            undefined,
            'fr-concession',
          ),
          q('c5', 'Which phrase means “a heat island”?', 'un îlot de chaleur', [
            'un panneau solaire',
            'un éco-quartier',
            'une borne de recharge',
          ]),
          q('c6', 'Which word means “a petition”?', 'une pétition', [
            'une concertation',
            'une démolition',
            'un classement',
          ]),
          q('c7', '“La végétalisation” means …', 'greening', [
            'pollution',
            'demolition',
            'composting',
          ]),
          q('c8', 'Which word means “a community garden”?', 'un jardin partagé', [
            'un budget participatif',
            'un citoyen',
            'un éco-quartier',
          ]),
        ],
      },
    ),
  ],
};
