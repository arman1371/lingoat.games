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

const U = 'fr-c1-1-ville';
const L = 'fr-c11-subjunctive' as const;

const urbanisme = vocabList(U, 'Town planning and mobility', [
  ['l’urbanisme', 'town planning', '🏙️'],
  ['un aménagement', 'a development, a layout', '🏗️'],
  ['la mobilité douce', 'active travel (walking, cycling)', '🚲'],
  ['une piste cyclable', 'a cycle path', '🛣️'],
  ['les transports en commun', 'public transport', '🚇'],
  ['un embouteillage', 'a traffic jam', '🚗'],
  ['une zone piétonne', 'a pedestrian zone', '🚶'],
  ['un espace vert', 'a green space', '🌳'],
  ['le logement social', 'social housing', '🏢'],
  ['la gentrification', 'gentrification', '🏘️'],
  ['l’étalement urbain', 'urban sprawl', '📈'],
  ['une friche', 'a brownfield site', '🏚️'],
  ['la rénovation', 'renovation', '🔨'],
  ['le covoiturage', 'car sharing', '🚙'],
  ['un quartier défavorisé', 'a deprived neighbourhood', '📉'],
  ['la concertation', 'public consultation', '🗣️'],
]);

const ecologie = vocabList(U, 'Climate and the environment', [
  ['le réchauffement climatique', 'global warming', '🌡️'],
  ['la transition écologique', 'the ecological transition', '♻️'],
  ['les énergies renouvelables', 'renewable energy', '☀️'],
  ['l’empreinte carbone', 'the carbon footprint', '👣'],
  ['le tri sélectif', 'waste sorting', '🗑️'],
  ['le compostage', 'composting', '🍂'],
  ['la biodiversité', 'biodiversity', '🦋'],
  ['la sobriété énergétique', 'energy saving, frugality', '💡'],
  ['une canicule', 'a heatwave', '🔥'],
  ['une inondation', 'a flood', '🌊'],
  ['la sécheresse', 'drought', '🏜️'],
  ['un panneau solaire', 'a solar panel', '🔆'],
  ['une éolienne', 'a wind turbine', '🌬️'],
  ['préserver', 'to protect, to preserve', '🛡️'],
  ['polluer', 'to pollute', '🏭'],
  ['les gaz à effet de serre', 'greenhouse gases', '☁️'],
]);

const vocab = [...urbanisme, ...ecologie];

export const ville: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'Ville et environnement',
    subtitle: 'Mobility, housing and climate, with the subjunctive of wish and need',
    emoji: '🏙️',
    goals: [
      'Discuss how a city can be planned and how people move around',
      'Talk about climate, energy and everyday ecological gestures',
      'Express a wish, a need, a feeling or a doubt with the subjunctive',
    ],
    grammar: [
      'Subjonctif after will and necessity: il faut que, je veux que, il vaut mieux que',
      'Subjonctif after feeling and doubt: je regrette que, je doute que, il est peu probable que',
      'Same subject → infinitive; certainty keeps the indicative: je pense que, il est évident que',
    ],
    vocabFields: ['Town planning and mobility', 'Climate and the environment'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-urbanisme',
      'flashcards',
      meta(
        'Town planning and mobility',
        'Une piste cyclable, un espace vert, la concertation – the words of the city.',
        ['vocabulary', 'city-sustainability'],
        1,
        4,
      ),
      flashcards(urbanisme),
    ),

    activity(
      U,
      'flash-ecologie',
      'flashcards',
      meta(
        'Climate and the environment',
        'L’empreinte carbone, le compostage, une canicule – the words of ecology.',
        ['vocabulary', 'climate-global'],
        1,
        4,
      ),
      flashcards(ecologie),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'city-sustainability'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'un aménagement',
          'la mobilité douce',
          'une friche',
          'l’étalement urbain',
          'la sobriété énergétique',
          'la sécheresse',
          'préserver',
          'les gaz à effet de serre',
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
        ['vocabulary', 'climate-global'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'un embouteillage', b: 'beaucoup de voitures qui n’avancent plus' },
          { id: 'm2', a: 'une zone piétonne', b: 'une rue réservée à ceux qui marchent' },
          { id: 'm3', a: 'le covoiturage', b: 'partager sa voiture avec d’autres personnes' },
          { id: 'm4', a: 'le tri sélectif', b: 'séparer les déchets selon leur matière' },
          { id: 'm5', a: 'une canicule', b: 'une période de très forte chaleur' },
          { id: 'm6', a: 'polluer', b: 'salir l’air, l’eau ou le sol' },
          {
            id: 'm7',
            a: 'une éolienne',
            b: 'une machine qui produit de l’électricité avec le vent',
          },
          { id: 'm8', a: 'la concertation', b: 'une discussion avant une décision publique' },
        ],
      },
    ),

    activity(
      U,
      'listen-ville',
      'listen',
      meta(
        'Listen to the city council',
        'Listen to the sentence and pick what it says.',
        ['listening', 'city-sustainability'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Il faut que la ville crée plus de pistes cyclables.',
            'The city must create more cycle paths.',
            [
              'The city has closed several cycle paths.',
              'The cyclists are asking the city for a new tram.',
              'The city will create more cycle paths next year.',
            ],
          ),
          heard(
            'l2',
            'Les habitants souhaitent que le centre devienne piéton.',
            'The residents want the centre to become pedestrian.',
            [
              'The residents are afraid that the centre will be closed.',
              'The council wishes to extend the parking in the centre.',
              'The residents believe that the centre is already pedestrian.',
            ],
          ),
          heard(
            'l3',
            'Je doute que ce projet réduise vraiment les embouteillages.',
            'I doubt that this project will really reduce the traffic jams.',
            [
              'I am sure that this project reduces the traffic jams.',
              'I regret that this project creates traffic jams.',
              'I hope that this project is built soon.',
            ],
          ),
          heard(
            'l4',
            'Le tri sélectif et le compostage diminuent l’empreinte carbone.',
            'Waste sorting and composting reduce the carbon footprint.',
            [
              'Waste sorting and composting increase greenhouse gases.',
              'Solar panels and wind turbines reduce the carbon footprint.',
              'Recycling and renovation are too expensive for the city.',
            ],
          ),
          heard(
            'l5',
            'Cet été, la canicule et la sécheresse ont touché tout le pays.',
            'This summer, the heatwave and the drought affected the whole country.',
            [
              'This summer, floods and storms affected the whole country.',
              'Last summer, only the south suffered from the heatwave.',
              'This winter, the drought has ended in the whole country.',
            ],
          ),
          heard(
            'l6',
            'Nous regrettons que le logement social manque dans ce quartier.',
            'We regret that social housing is lacking in this neighbourhood.',
            [
              'We are glad that social housing is being built in this neighbourhood.',
              'We know that social housing is expensive in this city.',
              'We want the neighbourhood to be renovated.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-triggers',
      'sortit',
      meta(
        'Subjunctive or indicative?',
        'Sort the expressions by the mood they need after que.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'What mood follows the expression?',
        buckets: [
          { id: 'wish', label: 'Subjonctif: will, need', emoji: '🙏' },
          { id: 'feel', label: 'Subjonctif: feeling, doubt', emoji: '💭' },
          { id: 'fact', label: 'Indicatif: certainty, report', emoji: '✅' },
        ],
        items: cards('t', [
          ['il faut que', 'wish', 'it is necessary that'],
          ['je veux que', 'wish', 'I want (someone) to'],
          ['il vaut mieux que', 'wish', 'it is better that'],
          ['je souhaite que', 'wish', 'I wish that'],
          ['je regrette que', 'feel', 'I regret that'],
          ['je suis content que', 'feel', 'I am glad that'],
          ['je doute que', 'feel', 'I doubt that'],
          ['il est peu probable que', 'feel', 'it is unlikely that'],
          ['je sais que', 'fact', 'I know that'],
          ['il est évident que', 'fact', 'it is obvious that'],
          ['je pense que', 'fact', 'I think that (affirmative)'],
          ['il me semble que', 'fact', 'it seems to me that'],
        ]),
      },
    ),

    activity(
      U,
      'conj-subjonctif',
      'conjugation',
      meta(
        'More subjunctive forms',
        'Complete the subjonctif présent of useful verbs.',
        ['grammar', L],
        3,
        5,
      ),
      {
        tables: [
          subjTable('avoir', 'to have', ['je', 'nous']),
          subjTable('savoir', 'to know', ['tu', 'ils/elles']),
          subjTable('venir', 'to come', ['il/elle/on', 'vous']),
          subjTable('vouloir', 'to want', ['je', 'vous']),
          subjTable('aller', 'to go', ['tu', 'vous']),
          subjTable('être', 'to be', ['nous', 'vous']),
        ],
      },
    ),

    activity(
      U,
      'gap-subjonctif',
      'gapfill',
      meta(
        'Choose the mood',
        'Pick the verb form that fits after que.',
        ['grammar', L, 'city-sustainability'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'Il faut que nous ___ moins de voitures en ville.',
            'prenions',
            {
              prenons: 'Il faut que needs the subjunctive: que nous prenions.',
              prendrons: 'Il faut que does not take the future.',
              prendre: 'After que, a conjugated verb is needed.',
            },
            'We must use fewer cars in town.',
            'Il faut que + subjonctif.',
          ),
          gh(
            'g2',
            'Je veux que tu ___ le vélo pour aller au travail.',
            'prennes',
            {
              prends: 'Vouloir que needs the subjunctive: que tu prennes.',
              prendras: 'Vouloir que does not take the future.',
              prendrais: 'Vouloir que does not take the conditional.',
            },
            'I want you to take the bike to go to work.',
            'Different subjects (je / tu): vouloir que + subjonctif.',
          ),
          gh(
            'g3',
            'Je veux ___ moins de déchets.',
            'produire',
            {
              'que je produise': 'The subject is the same in both parts, so use an infinitive.',
              'que tu produises': 'The subject does not change here: je veux … (I produce).',
              produise: 'A conjugated subjunctive needs que and a new subject.',
            },
            'I want to produce less waste.',
            'Same subject → infinitive, no que.',
          ),
          gh(
            'g4',
            'Je pense que le maire ___ raison.',
            'a',
            {
              ait: 'Penser que (affirmative) takes the indicative.',
              aurait: 'Penser que does not take the conditional here.',
              ayant: 'A conjugated verb is needed.',
            },
            'I think the mayor is right.',
            'Je pense que + indicatif.',
          ),
          gh(
            'g5',
            'Je ne pense pas que ce projet ___ utile.',
            'soit',
            {
              est: 'A negative penser que expresses doubt, so use the subjunctive.',
              serait: 'A negative penser que takes the subjunctive, not the conditional.',
              sera: 'A negative penser que takes the subjunctive, not the future.',
            },
            'I do not think this project is useful.',
            'Je ne pense pas que + subjonctif.',
          ),
          gh(
            'g6',
            'Nous regrettons que la ville n’___ pas plus d’espaces verts.',
            'ait',
            {
              a: 'Regretter que needs the subjunctive.',
              avait: 'Regretter que needs the subjunctive, not the imparfait.',
              aura: 'Regretter que does not take the future.',
            },
            'We regret that the city does not have more green spaces.',
            'Regretter que + subjonctif.',
          ),
          gh(
            'g7',
            'Il est peu probable que les travaux ___ finis avant l’été.',
            'soient',
            {
              sont: 'Il est peu probable que needs the subjunctive.',
              seront: 'Il est peu probable que does not take the future.',
              étaient: 'Il est peu probable que needs the subjunctive, not the imparfait.',
            },
            'It is unlikely that the works will be finished before summer.',
            'Doubt and improbability: subjonctif.',
          ),
          gh(
            'g8',
            'Il vaut mieux que vous ___ plus tôt.',
            'partiez',
            {
              partez: 'Il vaut mieux que needs the subjunctive.',
              partirez: 'Il vaut mieux que does not take the future.',
              partiriez: 'Il vaut mieux que does not take the conditional.',
            },
            'It is better that you leave earlier.',
            'Il vaut mieux que + subjonctif.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the subjunctive',
        'Type the subjonctif of the verb in brackets.',
        ['grammar', L, 'climate-global'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Il faut que nous ___ (réduire) notre empreinte carbone.',
            'réduisions',
            'We must reduce our carbon footprint.',
            'Réduire: que nous réduisions.',
          ),
          typed(
            't2',
            'Je souhaite que la ville ___ (avoir) plus de parcs.',
            'ait',
            'I wish the city had more parks.',
            'Avoir: qu’elle ait.',
          ),
          typed(
            't3',
            'Il est important que tu ___ (savoir) trier tes déchets.',
            'saches',
            'It is important that you know how to sort your waste.',
            'Savoir: que tu saches.',
          ),
          typed(
            't4',
            'Je doute qu’ils ___ (venir) en vélo.',
            'viennent',
            'I doubt that they will come by bike.',
            'Venir: qu’ils viennent.',
          ),
          typed(
            't5',
            'Nous voulons que vous ___ (aller) au conseil municipal.',
            'alliez',
            'We want you to go to the town council.',
            'Aller: que vous alliez.',
          ),
          typed(
            't6',
            'Elle est contente que tout le monde ___ (pouvoir) recycler.',
            'puisse',
            'She is glad that everybody can recycle.',
            'Pouvoir: que tout le monde puisse.',
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
        'Put the words in order. Watch the verb after que.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'We want the city to plant more trees.',
            ['Nous', 'voulons', 'que', 'la', 'ville', 'plante', 'plus', 'd’arbres.'],
            { extra: ['plantons'] },
          ),
          sent(
            'b2',
            'It is necessary that everyone sorts their waste.',
            ['Il', 'faut', 'que', 'chacun', 'trie', 'ses', 'déchets.'],
            { extra: ['trier'] },
          ),
          sent(
            'b3',
            'I want to leave my car at home.',
            ['Je', 'veux', 'laisser', 'ma', 'voiture', 'à', 'la', 'maison.'],
            { extra: ['que'] },
          ),
          sent(
            'b4',
            'I doubt that the works will be finished soon.',
            ['Je', 'doute', 'que', 'les', 'travaux', 'soient', 'bientôt', 'finis.'],
            { extra: ['seront'] },
          ),
          sent(
            'b5',
            'She is happy that the tram goes as far as the station.',
            ['Elle', 'est', 'contente', 'que', 'le', 'tram', 'aille', 'jusqu’à', 'la', 'gare.'],
            { extra: ['va'] },
          ),
          sent(
            'b6',
            'It is better that you take the bike.',
            ['Il', 'vaut', 'mieux', 'que', 'vous', 'preniez', 'le', 'vélo.'],
            { extra: ['prenez'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Giving your opinion on the city',
        'Two conversations: a public consultation and a talk with a neighbour.',
        ['communication', 'city-sustainability'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'consultation',
            title: 'A public consultation',
            emoji: '🗣️',
            setting: 'The city is asking residents what to do with a brownfield site.',
            turns: [
              say(
                'L’animatrice',
                'Nous avons une friche de deux hectares. Qu’aimeriez-vous y voir ?',
                'We have a brownfield site of two hectares. What would you like to see there?',
              ),
              you(
                'Je souhaite que la ville crée un espace vert avec des logements sociaux.',
                [
                  'Je souhaite que la ville crée un parking géant.',
                  'This is a possible opinion, but it does not match the aims of the consultation.',
                ],
                [
                  'Je souhaite de créer un espace vert.',
                  'Souhaiter que + subjunctive is needed when the subject changes.',
                ],
              ),
              say(
                'L’animatrice',
                'Merci. Certains habitants craignent le bruit des travaux.',
                'Thank you. Some residents are afraid of the noise from the works.',
              ),
              you(
                'Je comprends, mais il faut que nous pensions aux générations futures.',
                [
                  'Je comprends, mais il faut que nous pensons aux générations futures.',
                  'Il faut que needs the subjunctive: nous pensions.',
                ],
                ['Les travaux ne sont pas importants.', 'This ignores the residents’ concern.'],
              ),
            ],
          },
          {
            id: 'neighbour',
            title: 'A talk with a neighbour',
            emoji: '♻️',
            setting: 'Your neighbour does not sort his waste.',
            turns: [
              say(
                'Monsieur Lenoir',
                'Le tri sélectif, ça ne sert à rien. Je jette tout dans la même poubelle.',
                'Waste sorting is pointless. I throw everything into the same bin.',
              ),
              you(
                'Je ne pense pas que ce soit inutile. Il vaut mieux que chacun fasse un effort.',
                [
                  'Je ne pense pas que c’est inutile.',
                  'A negative penser que takes the subjunctive.',
                ],
                ['Vous avez raison, jetez tout.', 'This agrees with a harmful habit.'],
              ),
              say(
                'Monsieur Lenoir',
                'Mais je ne sais pas comment faire.',
                'But I do not know how to do it.',
              ),
              you(
                'Pas de problème : je veux que vous ayez un guide du tri, je vous l’apporte demain.',
                [
                  'Pas de problème : je veux que vous avez un guide.',
                  'Vouloir que needs the subjunctive: que vous ayez.',
                ],
                ['Tant pis pour vous.', 'This is rude and unhelpful.'],
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
        'Subjunctive blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'city-sustainability'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Il faut que” is followed by the subjunctive.', true),
          tf(
            'b2',
            '“Je sais que” is followed by the subjunctive.',
            false,
            'It states a fact: indicative.',
          ),
          tf(
            'b3',
            'When the subject does not change, French uses an infinitive: “Je veux partir”.',
            true,
          ),
          tf('b4', '“Je doute que” is followed by the subjunctive.', true),
          tf(
            'b5',
            '“Je pense que” (affirmative) takes the subjunctive.',
            false,
            'It takes the indicative.',
          ),
          tf('b6', '“Je ne pense pas que” takes the subjunctive.', true),
          tf('b7', 'The subjunctive of “avoir” is “que j’aie”.', true),
          tf('b8', 'The subjunctive of “être” is “que je suis”.', false, 'It is que je sois.'),
          tf('b9', '“Une friche” is a brownfield site.', true),
          tf('b10', '“Une canicule” is a very cold period.', false, 'It is a heatwave.'),
          tf('b11', '“Le covoiturage” means sharing a car.', true),
          tf('b12', '“Il vaut mieux que” expresses a recommendation.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: city and climate words, and the subjunctive.',
        ['vocabulary', 'grammar', L, 'city-sustainability'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “une piste cyclable”?', 'a cycle path', [
            'a bus lane',
            'a pedestrian zone',
            'a car park',
          ]),
          qh(
            'c2',
            'Il faut que tu ___ ton billet avant de monter.',
            'prennes',
            {
              prends: 'Il faut que needs the subjunctive.',
              prendras: 'Il faut que does not take the future.',
              prendrais: 'Il faut que does not take the conditional.',
            },
            L,
          ),
          q('c3', '“Préserver” means …', 'to protect', ['to pollute', 'to build', 'to waste']),
          qh(
            'c4',
            'Je sais que ce quartier ___ de bons transports.',
            'a',
            {
              ait: 'Savoir que states a fact: indicative.',
              aurait: 'Savoir que does not take the conditional.',
              ayant: 'A conjugated verb is needed.',
            },
            L,
          ),
          q('c5', 'What are “les énergies renouvelables”?', 'renewable energy sources', [
            'toxic waste',
            'public transport',
            'a type of housing',
          ]),
          qh(
            'c6',
            'Je suis content que vous ___ venus.',
            'soyez',
            {
              êtes: 'Être content que needs the subjunctive.',
              serez: 'Être content que does not take the future.',
              seriez: 'Être content que does not take the conditional.',
            },
            L,
          ),
          q('c7', '“Un embouteillage” is …', 'a traffic jam', [
            'a crossroads',
            'a bottle bank',
            'a roadwork',
          ]),
          qh(
            'c8',
            'Elle veut ___ plus de plantes dans son quartier.',
            'voir',
            {
              'qu’elle voie': 'The subject is the same: use the infinitive.',
              'que je voie': 'The subject is elle in both parts.',
              voie: 'A conjugated verb needs que.',
            },
            L,
          ),
          q('c9', 'What is “la gentrification”?', 'wealthier residents replacing poorer ones', [
            'a new tax on gas',
            'a green space project',
            'a type of renovation',
          ]),
          qh(
            'c10',
            'Il est évident que nous ___ agir vite.',
            'devons',
            {
              devions: 'Il est évident que states a fact: indicative, not subjunctive.',
              doive: 'Il est évident que states a fact: indicative, not subjunctive.',
              devrions: 'Il est évident que does not take the conditional.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
