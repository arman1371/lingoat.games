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

const U = 'fr-b2-1-cites';

const cityLife = vocabList(U, 'City life', [
  ['une métropole', 'a metropolis', '🌆'],
  ['une banlieue', 'a suburb', '🏘️'],
  ['un arrondissement', 'a district (of Paris, Lyon…)', '🗼'],
  ['un boulevard', 'a boulevard', '🛣️'],
  ['une ruelle', 'a narrow lane', '🚶'],
  ['un gratte-ciel', 'a skyscraper', '🏙️'],
  ['un immeuble', 'a (block of) building', '🏢'],
  ['un espace vert', 'a green space', '🌳'],
  ['la circulation', 'traffic', '🚗'],
  ['un embouteillage', 'a traffic jam', '🚦'],
  ['un piéton', 'a pedestrian', '🚶‍♀️'],
  ['une piste cyclable', 'a cycle path', '🚲'],
  ['un citadin', 'a city dweller', '🧑‍🤝‍🧑'],
  ['l’étalement urbain', 'urban sprawl', '🗺️'],
]);

const oldNew = vocabList(U, 'Old city, new city', [
  ['un centre historique', 'a historic centre', '🏛️'],
  ['une muraille', 'a city wall', '🧱'],
  ['une cathédrale', 'a cathedral', '⛪'],
  ['un marché couvert', 'a covered market', '🥖'],
  ['la rénovation', 'renovation', '🛠️'],
  ['l’urbanisme', 'urban planning', '📐'],
  ['un projet d’aménagement', 'a development project', '🏗️'],
  ['une friche', 'wasteland, brownfield', '🌾'],
  ['une agglomération', 'a built-up area, conurbation', '🌇'],
  ['un rond-point', 'a roundabout', '🔄'],
  ['une rue piétonne', 'a pedestrian street', '🚷'],
  ['un riverain', 'a resident (of a street)', '🏠'],
]);

const phrases = vocabList(U, 'Describing a city', [
  [
    'La ville où j’ai grandi a beaucoup changé.',
    'The city where I grew up has changed a lot.',
    '📍',
  ],
  [
    'Le quartier que je préfère est le centre historique.',
    'The district I prefer is the historic centre.',
    '❤️',
  ],
  [
    'C’est une ville qui attire beaucoup de touristes.',
    'It is a city that attracts many tourists.',
    '📸',
  ],
  ['Voici l’architecte dont je t’ai parlé.', 'Here is the architect I told you about.', '👷'],
  [
    'Paris est une ville dont le patrimoine est exceptionnel.',
    'Paris is a city whose heritage is exceptional.',
    '🗼',
  ],
  [
    'Les rues où il y a des arbres sont plus agréables.',
    'The streets where there are trees are more pleasant.',
    '🌳',
  ],
  ['Ce qui me plaît, c’est le calme.', 'What I like is the calm.', '😌'],
  ['Ce dont j’ai besoin, c’est d’un espace vert.', 'What I need is a green space.', '🌿'],
]);

const vocab = [...cityLife, ...oldNew, ...phrases];

const ROLE: [string, 'subj' | 'obj' | 'where' | 'de', string][] = [
  ['Le tram qui passe ici est tout neuf.', 'subj', 'The tram that runs here is brand new.'],
  [
    'Les habitants qui vivent là aiment le calme.',
    'subj',
    'The inhabitants who live there like the quiet.',
  ],
  ['L’avenue que nous avons visitée est piétonne.', 'obj', 'The avenue we visited is pedestrian.'],
  [
    'Le projet que la mairie propose coûte cher.',
    'obj',
    'The project the city proposes is expensive.',
  ],
  ['La rue où je suis né a disparu.', 'where', 'The street where I was born has disappeared.'],
  ['Le jour où nous sommes arrivés, il pleuvait.', 'where', 'The day we arrived, it was raining.'],
  ['Le quartier dont je rêve est calme.', 'de', 'The district I dream of is quiet.'],
  ['La ville dont le maire parle est petite.', 'de', 'The city whose mayor is speaking is small.'],
  ['Le parc qui borde la rivière est gratuit.', 'subj', 'The park that borders the river is free.'],
  ['Le plan que j’ai trouvé est ancien.', 'obj', 'The map I found is old.'],
  [
    'La place où les marchés ont lieu est ancienne.',
    'where',
    'The square where the markets are held is old.',
  ],
  [
    'Le projet dont tout le monde parle sera voté.',
    'de',
    'The project everyone is talking about will be voted on.',
  ],
];

export const cites: UnitContent = {
  unit: unitFr({
    id: U,
    order: 10,
    title: 'Cités',
    subtitle: 'Describe cities, old and new, with relative clauses: qui, que, où, dont',
    emoji: '🏙️',
    goals: [
      'Describe a city, its districts and its heritage',
      'Link ideas with the relative pronouns qui, que, où and dont',
      'Use ce qui, ce que and ce dont to point at an idea',
    ],
    grammar: ['Relative pronouns qui, que, où, dont', 'Ce qui, ce que, ce dont'],
    vocabFields: ['City life', 'Old city, new city', 'Describing a city'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'cities', {
      a: { title: 'City life', description: 'Words for urban life.', words: cityLife },
      b: { title: 'Old city, new city', description: 'Heritage and planning.', words: oldNew },
      listen: [
        'une banlieue',
        'un gratte-ciel',
        'un embouteillage',
        'un piéton',
        'une muraille',
        'une cathédrale',
        'l’urbanisme',
        'une friche',
      ],
      spell: [
        ['unscramble', 'banlieue', 'suburb', '🏘️', 'une banlieue'],
        ['unscramble', 'boulevard', 'boulevard', '🛣️', 'un boulevard'],
        ['type', 'circulation', 'traffic', '🚗', 'la circulation'],
        ['type', 'cathédrale', 'cathedral', '⛪', 'une cathédrale'],
        ['type', 'immeuble', 'building', '🏢', 'un immeuble'],
      ],
    }),

    activity(
      U,
      'gap-relative',
      'gapfill',
      meta(
        'Qui, que, où, dont',
        'Pick the relative pronoun that fits.',
        ['grammar', 'fr-relative-pronouns', 'cities'],
        2,
        4,
        'fr-relative-pronouns',
      ),
      {
        items: [
          g(
            'r1',
            'La ville ___ j’habite est très calme.',
            'où',
            [
              ['que', 'A place needs où, not que.'],
              ['qui', 'Qui replaces the subject; here “j’habite” has its own subject.'],
              ['dont', 'Dont replaces de + noun; there is no “de” here.'],
            ],
            'The city where I live is very quiet.',
            'Où replaces a place or a time.',
          ),
          g(
            'r2',
            'Le quartier ___ je préfère est le centre.',
            'que',
            [
              ['qui', 'Qui replaces the subject; “je” is already the subject.'],
              ['où', 'Où replaces a place, but here the district is the object of préférer.'],
              ['dont', 'Préférer takes no “de”.'],
            ],
            'The district I prefer is the centre.',
            'Que replaces the direct object.',
          ),
          g(
            'r3',
            'C’est une ville ___ attire beaucoup de touristes.',
            'qui',
            [
              ['que', 'Que replaces an object; the city is the subject of attire.'],
              ['où', 'Où replaces a place or a time.'],
              ['dont', 'Dont replaces de + noun.'],
            ],
            'It is a city that attracts many tourists.',
            'Qui replaces the subject.',
          ),
          g(
            'r4',
            'Voici l’architecte ___ je t’ai parlé.',
            'dont',
            [
              ['que', 'Parler de quelqu’un: use dont.'],
              ['qui', 'Parler de quelqu’un: use dont.'],
              ['où', 'Où replaces a place or a time.'],
            ],
            'Here is the architect I told you about.',
            'Dont replaces de + noun (parler de).',
          ),
          g(
            'r5',
            'Paris est une ville ___ le patrimoine est exceptionnel.',
            'dont',
            [
              ['que', 'Le patrimoine de la ville: use dont for “whose”.'],
              ['où', 'Où replaces a place, not a possessor.'],
              ['qui', 'Qui replaces the subject.'],
            ],
            'Paris is a city whose heritage is exceptional.',
            'Dont also means “whose”.',
          ),
          g(
            'r6',
            'Le jour ___ nous sommes arrivés, il pleuvait.',
            'où',
            [
              ['que', 'A day needs où as a time word.'],
              ['dont', 'Dont replaces de + noun.'],
              ['qui', 'Qui replaces the subject.'],
            ],
            'The day we arrived, it was raining.',
            'Où also replaces a time.',
          ),
          g(
            'r7',
            'Les gens ___ vivent ici aiment le calme.',
            'qui',
            [
              ['que', 'Que replaces an object; the people are the subject of vivent.'],
              ['où', 'Où replaces a place or a time.'],
              ['dont', 'Dont replaces de + noun.'],
            ],
            'The people who live here like the quiet.',
            'Qui replaces the subject.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-ce',
      'gapfill',
      meta(
        'Ce qui, ce que, ce dont',
        'Point to an idea without a noun.',
        ['grammar', 'fr-relative-ce', 'cities'],
        3,
        4,
        'fr-relative-ce',
      ),
      {
        items: [
          g(
            'e1',
            '___ me plaît, c’est le calme.',
            'Ce qui',
            [
              ['Ce que', 'Ce que replaces an object; here it is the subject of plaît.'],
              ['Ce dont', 'Plaire takes no “de”.'],
              ['Ce où', 'Ce où is not a French pattern.'],
            ],
            'What I like is the calm.',
            'Ce qui = what, as subject.',
          ),
          g(
            'e2',
            '___ je cherche, c’est un appartement.',
            'Ce que',
            [
              ['Ce qui', 'Je is the subject, so you need the object form.'],
              ['Ce dont', 'Chercher takes no “de”.'],
              ['Ce à quoi', 'Chercher takes no “à”.'],
            ],
            'What I am looking for is a flat.',
            'Ce que = what, as object.',
          ),
          g(
            'e3',
            '___ j’ai besoin, c’est d’un espace vert.',
            'Ce dont',
            [
              ['Ce que', 'Avoir besoin de: use ce dont.'],
              ['Ce qui', 'Avoir besoin de: use ce dont.'],
              ['Ce où', 'Ce où is not a French pattern.'],
            ],
            'What I need is a green space.',
            'Ce dont replaces de + idea.',
          ),
          g(
            'e4',
            'Dis-moi ___ tu penses.',
            'ce que',
            [
              ['ce qui', 'Tu is the subject, so you need the object form.'],
              ['ce dont', 'Penser takes no “de” here.'],
              ['ce où', 'Ce où is not a French pattern.'],
            ],
            'Tell me what you think.',
            'Ce que = object.',
          ),
          g(
            'e5',
            'Je ne comprends pas ___ se passe.',
            'ce qui',
            [
              ['ce que', 'The verb se passe has no subject yet, so use ce qui.'],
              ['ce dont', 'Se passer takes no “de”.'],
              ['ce où', 'Ce où is not a French pattern.'],
            ],
            'I do not understand what is happening.',
            'Ce qui = subject.',
          ),
          g(
            'e6',
            'C’est exactement ___ je rêvais.',
            'ce dont',
            [
              ['ce que', 'Rêver de: use ce dont.'],
              ['ce qui', 'Rêver de: use ce dont.'],
              ['ce où', 'Ce où is not a French pattern.'],
            ],
            'It is exactly what I was dreaming of.',
            'Rêver de → ce dont.',
          ),
          g(
            'e7',
            'Tout ___ brille n’est pas or.',
            'ce qui',
            [
              ['ce que', 'Brille has no other subject: ce qui.'],
              ['ce dont', 'Briller takes no “de”.'],
              ['tout', 'Tout is already in the sentence.'],
            ],
            'All that glitters is not gold.',
            'Tout ce qui + verb.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-role',
      'sortit',
      meta(
        'What does it replace?',
        'Subject, object, place or time, or de + noun?',
        ['grammar', 'fr-relative-pronouns', 'cities'],
        2,
        4,
        'fr-relative-pronouns',
      ),
      {
        instruction: 'What does the relative pronoun replace?',
        buckets: [
          { id: 'subj', label: 'subject (qui)', emoji: '1️⃣' },
          { id: 'obj', label: 'direct object (que)', emoji: '🎯' },
          { id: 'where', label: 'place or time (où)', emoji: '📍' },
          { id: 'de', label: 'de + noun (dont)', emoji: '🔗' },
        ],
        items: cards('r', ROLE),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-relative-pronouns', 'fr-relative-ce'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'The city where I grew up has changed.',
            ['La', 'ville', 'où', 'j’ai', 'grandi', 'a', 'changé.'],
            { extra: ['que'], lesson: 'fr-relative-pronouns' },
          ),
          sent(
            's2',
            'This is the project everyone is talking about.',
            ['C’est', 'le', 'projet', 'dont', 'tout', 'le', 'monde', 'parle.'],
            { extra: ['que'], lesson: 'fr-relative-pronouns' },
          ),
          sent(
            's3',
            'The tram that crosses the city is new.',
            ['Le', 'tram', 'qui', 'traverse', 'la', 'ville', 'est', 'neuf.'],
            { extra: ['que'], lesson: 'fr-relative-pronouns' },
          ),
          sent(
            's4',
            'What I like is the old centre.',
            ['Ce', 'qui', 'me', 'plaît,', 'c’est', 'le', 'vieux', 'centre.'],
            { extra: ['que'], lesson: 'fr-relative-ce' },
          ),
          sent(
            's5',
            'What I need is a green space.',
            ['Ce', 'dont', 'j’ai', 'besoin,', 'c’est', 'd’un', 'espace', 'vert.'],
            { extra: ['que'], lesson: 'fr-relative-ce' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Understand the city',
        'Read the sentence and pick its meaning.',
        ['communication', 'cities'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'La banlieue où il habite est bien desservie par le métro.',
            'The suburb where he lives is well served by the metro.',
            [
              'He lives far from the metro in the suburb.',
              'The metro serves only the city centre.',
              'The suburb has no transport.',
            ],
          ),
          qs(
            'r2',
            'La rue dont les riverains se plaignent sera fermée à la circulation.',
            'The street the residents complain about will be closed to traffic.',
            [
              'The residents will close the street themselves.',
              'The street will be wider for traffic.',
              'The residents enjoy the street.',
            ],
          ),
          qs(
            'r3',
            'Ce que les citadins réclament, ce sont plus d’espaces verts.',
            'What city dwellers are asking for is more green spaces.',
            [
              'City dwellers refuse green spaces.',
              'City dwellers cut down the trees.',
              'City dwellers ask for more roundabouts.',
            ],
          ),
          qs(
            'r4',
            'La friche qui était abandonnée devient un parc.',
            'The brownfield that was abandoned is becoming a park.',
            [
              'The park is becoming a wasteland.',
              'The brownfield is a famous building.',
              'The park was abandoned by the friche.',
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
        'Talk about a city',
        'Describe where you live and what you would change.',
        ['communication', 'cities'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'home',
            title: 'Where do you live?',
            emoji: '📍',
            setting: 'You tell a new colleague about your district. Use vous.',
            turns: [
              say('Julie', 'Vous habitez dans quel quartier ?', 'Which district do you live in?'),
              you(
                'J’habite dans un quartier qui est très calme et où il y a beaucoup d’arbres.',
                [
                  'J’habite dans un quartier que est très calme et où il y a beaucoup d’arbres.',
                  'Qui replaces the subject (le quartier est calme).',
                ],
                [
                  'J’habite dans un quartier qui est très calme et dont il y a beaucoup d’arbres.',
                  'Où replaces a place: où il y a des arbres.',
                ],
              ),
              say('Julie', 'Et qu’est-ce qui vous manque ?', 'And what do you miss?'),
              you(
                'Ce dont j’ai besoin, c’est d’une piste cyclable.',
                ['Ce que j’ai besoin, c’est d’une piste cyclable.', 'Avoir besoin de: ce dont.'],
                [
                  'Ce qui j’ai besoin, c’est d’une piste cyclable.',
                  'J’ai is the subject: use ce dont, not ce qui.',
                ],
              ),
            ],
          },
          {
            id: 'council',
            title: 'A public meeting',
            emoji: '🏛️',
            setting: 'At a public meeting, you speak about a project. Use vous.',
            turns: [
              say(
                'Le maire',
                'Quelle est votre question sur le projet ?',
                'What is your question about the project?',
              ),
              you(
                'C’est le projet dont tout le monde parle : quand sera-t-il voté ?',
                [
                  'C’est le projet que tout le monde parle : quand sera-t-il voté ?',
                  'Parler de: dont.',
                ],
                [
                  'C’est le projet qui tout le monde parle : quand sera-t-il voté ?',
                  'Qui cannot be followed by a new subject.',
                ],
              ),
              say(
                'Le maire',
                'Au mois de juin. La friche que nous rénovons deviendra un parc.',
                'In June. The wasteland we are renovating will become a park.',
              ),
              you(
                'Parfait, c’est exactement ce que les riverains attendent.',
                [
                  'Parfait, c’est exactement ce qui les riverains attendent.',
                  'Les riverains is the subject, so you need ce que.',
                ],
                [
                  'Parfait, c’est exactement ce dont les riverains attendent.',
                  'Attendre takes no “de”.',
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
        'City blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-relative-pronouns', 'fr-relative-ce'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Qui” replaces the subject of the relative clause.', true),
          tf('b2', '“Que” replaces the direct object.', true),
          tf('b3', '“La ville dont j’habite” is correct.', false, 'Say la ville où j’habite.'),
          tf('b4', '“Dont” can mean “whose”.', true),
          tf('b5', '“Le jour où il est parti” uses où for time.', true),
          tf('b6', '“Ce qui me plaît” uses ce qui because it is the subject.', true),
          tf(
            'b7',
            '“Ce que j’ai besoin” is correct.',
            false,
            'Avoir besoin de: ce dont j’ai besoin.',
          ),
          tf('b8', '“Un piéton” is someone on foot.', true),
          tf('b9', '“Une friche” is a block of flats.', false, 'Une friche is a wasteland.'),
          tf('b10', '“La rénovation” means demolition.', false, 'La rénovation is renovation.'),
          tf('b11', '“Qui” elides before a vowel.', false, 'Qui does not elide; que becomes qu’.'),
          tf('b12', '“Une muraille” is a city wall.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'City challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'cities'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “La rue ___ nous habitons est piétonne.”',
            'où',
            ['que', 'qui', 'dont'],
            undefined,
            'fr-relative-pronouns',
          ),
          q(
            'c2',
            'Complete: “Le film ___ je parle est sorti hier.”',
            'dont',
            ['que', 'qui', 'où'],
            undefined,
            'fr-relative-pronouns',
          ),
          q(
            'c3',
            'Complete: “Les gens ___ nous avons rencontrés sont sympas.”',
            'que',
            ['qui', 'dont', 'où'],
            undefined,
            'fr-relative-pronouns',
          ),
          q(
            'c4',
            'Complete: “Je sais ___ tu veux.”',
            'ce que',
            ['ce qui', 'ce dont', 'que'],
            undefined,
            'fr-relative-ce',
          ),
          q('c5', 'Which word means “a pedestrian”?', 'un piéton', [
            'un citadin',
            'un riverain',
            'un maire',
          ]),
          q('c6', 'Which word means “traffic”?', 'la circulation', [
            'la rénovation',
            'l’urbanisme',
            'la banlieue',
          ]),
          q('c7', '“Un rond-point” is …', 'a roundabout', ['a bridge', 'a square', 'a tower']),
          q('c8', '“L’étalement urbain” means …', 'urban sprawl', [
            'urban renewal',
            'a city wall',
            'the city centre',
          ]),
        ],
      },
    ),
  ],
};
