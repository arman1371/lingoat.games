import { byDe, flashcards, listen, memory, quizDeEn, vocabList } from '../builders';
import {
  activity,
  cards,
  frForms,
  g,
  meta,
  q,
  qs,
  say,
  sent,
  tf,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b2-1-identite';

const identity = vocabList(U, 'Identity and origins', [
  ['l’identité', 'identity', '🪪'],
  ['les origines', 'origins', '🌱'],
  ['les racines', 'roots', '🌳'],
  ['le sentiment d’appartenance', 'sense of belonging', '🫂'],
  ['la double nationalité', 'dual nationality', '🛂'],
  ['l’héritage', 'heritage', '🎁'],
  ['la langue maternelle', 'mother tongue', '👩‍🍼'],
  ['un accent', 'an accent', '🗣️'],
  ['un stéréotype', 'a stereotype', '🧱'],
  ['un préjugé', 'a prejudice', '🚫'],
  ['les coutumes', 'customs', '🎎'],
  ['le pays d’origine', 'country of origin', '🗺️'],
  ['un compatriote', 'a fellow countryman', '🤝'],
  ['un immigré', 'an immigrant', '🧳'],
  ['la diaspora', 'the diaspora', '🌍'],
  ['le métissage', 'cultural mixing', '🎨'],
]);

const traits = vocabList(U, 'Personality traits', [
  ['chaleureux', 'warm, friendly', '🤗'],
  ['réservé', 'reserved', '🤐'],
  ['têtu', 'stubborn', '🐂'],
  ['sensible', 'sensitive', '💧'],
  ['ouvert d’esprit', 'open-minded', '🪟'],
  ['curieux', 'curious', '🔎'],
  ['ambitieux', 'ambitious', '🚀'],
  ['rigoureux', 'meticulous, rigorous', '📐'],
  ['fier', 'proud', '🦚'],
  ['spontané', 'spontaneous', '🎲'],
  ['sincère', 'sincere', '💯'],
  ['discret', 'discreet', '🤫'],
]);

const phrases = vocabList(U, 'Talking about yourself', [
  ['Je suis originaire de Lyon.', 'I come from Lyon (originally).', '📍'],
  ['Mes parents ont immigré en France.', 'My parents emigrated to France.', '✈️'],
  ['Je me sens à la fois français et algérien.', 'I feel both French and Algerian.', '⚖️'],
  ['J’ai grandi à la campagne.', 'I grew up in the countryside.', '🌾'],
  ['Mes racines sont en Bretagne.', 'My roots are in Brittany.', '🌊'],
  ['Je tiens à mes traditions.', 'I am attached to my traditions.', '🕯️'],
  ['Ça fait partie de moi.', 'It is part of who I am.', '🧩'],
  ['Je ne me reconnais pas dans cette image.', 'I do not recognise myself in this picture.', '🪞'],
]);

const vocab = [...identity, ...traits, ...phrases];

const SORT: [string, 'imp' | 'pc' | 'pqp', string][] = [
  ['Nous allions chez mamie tous les dimanches.', 'imp', 'We went to Grandma’s every Sunday.'],
  ['Il était très timide.', 'imp', 'He was very shy.'],
  ['Elle parlait arabe à la maison.', 'imp', 'She spoke Arabic at home.'],
  ['Il pleuvait ce jour-là.', 'imp', 'It was raining that day.'],
  ['Il a quitté son pays en 1990.', 'pc', 'He left his country in 1990.'],
  ['Nous avons déménagé en mai.', 'pc', 'We moved in May.'],
  ['Elle a obtenu la nationalité française.', 'pc', 'She obtained French nationality.'],
  ['Soudain, le téléphone a sonné.', 'pc', 'Suddenly the phone rang.'],
  ['Il avait déjà quitté son pays.', 'pqp', 'He had already left his country.'],
  ['Nous étions arrivés la veille.', 'pqp', 'We had arrived the day before.'],
  ['Elle n’avait jamais vu la mer.', 'pqp', 'She had never seen the sea.'],
  ['J’avais appris le français à l’école.', 'pqp', 'I had learned French at school.'],
];

export const identite: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'Identités',
    subtitle: 'Say who you are, where you come from and how you were: past tenses in a life story',
    emoji: '🪪',
    goals: [
      'Describe your origins, your roots and your sense of belonging',
      'Describe a personality with precise adjectives',
      'Tell what happened and what things were like in the past',
    ],
    grammar: ['Imparfait or passé composé', 'The plus-que-parfait'],
    vocabFields: ['Identity and origins', 'Personality traits', 'Talking about yourself'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-identity',
      'flashcards',
      meta(
        'Identity and origins',
        'Learn the words of identity and belonging.',
        ['vocabulary', 'identity-origins'],
        1,
        4,
      ),
      flashcards(identity),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning.',
        ['vocabulary', 'identity-origins'],
        1,
        3,
      ),
      quizDeEn(identity, identity, 4),
    ),

    activity(
      U,
      'flash-traits',
      'flashcards',
      meta(
        'Personality traits',
        'Adjectives to describe a character.',
        ['vocabulary', 'identity-origins'],
        1,
        3,
      ),
      flashcards(traits),
    ),

    activity(
      U,
      'memory-traits',
      'memory',
      meta(
        'Traits memory',
        'Match each trait with its meaning.',
        ['vocabulary', 'identity-origins'],
        2,
        3,
      ),
      memory(traits.slice(0, 8)),
    ),

    activity(
      U,
      'listen-identity',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'identity-origins'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'les racines',
          'un préjugé',
          'l’héritage',
          'le métissage',
          'chaleureux',
          'têtu',
          'discret',
          'fier',
        ),
        [...identity, ...traits],
      ),
    ),

    activity(
      U,
      'gap-imparfait-pc',
      'gapfill',
      meta(
        'Scene or event?',
        'Imparfait for the background and habits, passé composé for what happened.',
        ['grammar', 'fr-imparfait-pc', 'identity-origins'],
        2,
        4,
      ),
      {
        items: [
          g(
            'a1',
            'Quand j’étais petit, nous ___ chaque été chez ma grand-mère.',
            'allions',
            [
              ['sommes allés', 'A habit (“every summer”) is told with the imparfait.'],
              ['irons', 'This is the past, not the future.'],
              ['allâmes', 'That is the literary passé simple, not used in speech.'],
            ],
            'When I was little, we went to my grandmother’s every summer.',
            'A repeated habit in the past: imparfait.',
          ),
          g(
            'a2',
            'Hier, j’___ une lettre de mon oncle d’Alger.',
            'ai reçu',
            [
              ['recevais', 'One event on a precise day (“hier”) is told with the passé composé.'],
              ['avais reçu', 'The plus-que-parfait needs a later past event to compare with.'],
              ['reçois', 'This is the present.'],
            ],
            'Yesterday I received a letter from my uncle in Algiers.',
            'A single completed event: passé composé.',
          ),
          g(
            'a3',
            'Il ___ très timide quand il est arrivé en France.',
            'était',
            [
              ['a été', 'A state at the time of another action is the background: imparfait.'],
              ['sera', 'This is the past, not the future.'],
              ['fut', 'That is the literary passé simple, not used in speech.'],
            ],
            'He was very shy when he arrived in France.',
            'A state in the background of an event: imparfait.',
          ),
          g(
            'a4',
            'Pendant que ma mère ___ en français, mon père répondait en arabe.',
            'parlait',
            [
              ['a parlé', 'Two actions going on at the same time are both in the imparfait.'],
              ['avait parlé', 'Nothing here happened before the other action.'],
              ['parle', 'This is the present.'],
            ],
            'While my mother spoke French, my father answered in Arabic.',
            'Two simultaneous actions in progress: imparfait.',
          ),
          g(
            'a5',
            'Un jour, mon père ___ la décision de quitter le pays.',
            'a pris',
            [
              ['prenait', '“Un jour” introduces one event: passé composé.'],
              ['avait pris', 'The plus-que-parfait needs a later past event to compare with.'],
              ['prend', 'This is the present.'],
            ],
            'One day my father made the decision to leave the country.',
            'One event on one day: passé composé.',
          ),
          g(
            'a6',
            'Je ___ mes devoirs quand le téléphone a sonné.',
            'faisais',
            [
              ['ai fait', 'An action in progress that is interrupted is in the imparfait.'],
              ['avais fait', 'The homework was not finished before the call: it was in progress.'],
              ['fais', 'This is the present.'],
            ],
            'I was doing my homework when the phone rang.',
            'The action in progress is the imparfait, the interruption the passé composé.',
          ),
          g(
            'a7',
            'En 1998, ma famille ___ à Montréal.',
            'a déménagé',
            [
              ['déménageait', 'A dated single event is told with the passé composé.'],
              ['avait déménagé', 'The plus-que-parfait needs a later past event to compare with.'],
              ['déménage', 'This is the present.'],
            ],
            'In 1998 my family moved to Montreal.',
            'A dated, completed event: passé composé.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-tenses',
      'sortit',
      meta(
        'Which past tense?',
        'Imparfait, passé composé or plus-que-parfait?',
        ['grammar', 'fr-imparfait-pc', 'fr-plus-que-parfait', 'identity-origins'],
        2,
        4,
        'fr-imparfait-pc',
      ),
      {
        instruction: 'Which past tense is each sentence in?',
        buckets: [
          { id: 'imp', label: 'imparfait', emoji: '🎞️' },
          { id: 'pc', label: 'passé composé', emoji: '📸' },
          { id: 'pqp', label: 'plus-que-parfait', emoji: '⏮️' },
        ],
        items: cards('t', SORT),
      },
    ),

    activity(
      U,
      'conj-pasts',
      'conjugation',
      meta(
        'Imparfait and plus-que-parfait',
        'Fill in the forms: the imparfait of two verbs, the plus-que-parfait with avoir and être.',
        ['grammar', 'fr-imparfait-pc', 'fr-plus-que-parfait'],
        2,
        4,
      ),
      {
        tables: [
          frForms(
            'imp-grandir',
            'grandir (imparfait)',
            'to grow up',
            [
              'grandissais',
              'grandissais',
              'grandissait',
              'grandissions',
              'grandissiez',
              'grandissaient',
            ],
            ['je', 'il/elle/on', 'nous'],
            'fr-imparfait-pc',
          ),
          frForms(
            'imp-vivre',
            'vivre (imparfait)',
            'to live',
            ['vivais', 'vivais', 'vivait', 'vivions', 'viviez', 'vivaient'],
            ['tu', 'vous', 'ils/elles'],
            'fr-imparfait-pc',
          ),
          frForms(
            'pqp-quitter',
            'quitter (plus-que-parfait)',
            'to leave (avoir)',
            [
              'avais quitté',
              'avais quitté',
              'avait quitté',
              'avions quitté',
              'aviez quitté',
              'avaient quitté',
            ],
            ['je', 'nous', 'ils/elles'],
            'fr-plus-que-parfait',
          ),
          frForms(
            'pqp-arriver',
            'arriver (plus-que-parfait)',
            'to arrive (être)',
            [
              'étais arrivé',
              'étais arrivé',
              'était arrivé',
              'étions arrivés',
              'étiez arrivés',
              'étaient arrivés',
            ],
            ['tu', 'il/elle/on', 'vous'],
            'fr-plus-que-parfait',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-plus-que-parfait',
      'gapfill',
      meta(
        'Before the story',
        'The plus-que-parfait: what had already happened.',
        ['grammar', 'fr-plus-que-parfait', 'identity-origins'],
        3,
        4,
      ),
      {
        items: [
          g(
            'p1',
            'Quand nous sommes arrivés à la gare, le train ___ déjà.',
            'était parti',
            [
              [
                'est parti',
                'The train left before we arrived: plus-que-parfait, not passé composé.',
              ],
              ['partait', 'The imparfait does not show that the train had already gone.'],
              ['avait parti', 'Partir takes être: était parti.'],
            ],
            'When we arrived at the station, the train had already left.',
            'Partir takes être, so était parti.',
          ),
          g(
            'p2',
            'Elle m’a dit qu’elle ___ ses clés.',
            'avait perdu',
            [
              ['a perdu', 'The loss comes before her words: plus-que-parfait.'],
              ['perdait', 'The imparfait would mean she was losing them as she spoke.'],
              ['était perdu', 'Perdre takes avoir: avait perdu.'],
            ],
            'She told me she had lost her keys.',
            'Perdre takes avoir.',
          ),
          g(
            'p3',
            'J’ai compris pourquoi il était triste : il ___ son pays.',
            'avait quitté',
            [
              ['a quitté', 'The departure comes before his sadness: plus-que-parfait.'],
              ['quittait', 'The imparfait would mean he was in the middle of leaving.'],
              ['était quitté', 'Quitter takes avoir: avait quitté.'],
            ],
            'I understood why he was sad: he had left his country.',
            'Quitter takes avoir.',
          ),
          g(
            'p4',
            'Je ne savais pas qu’ils ___ en France avant 1990.',
            'étaient arrivés',
            [
              [
                'sont arrivés',
                'After “je ne savais pas” the earlier event is in the plus-que-parfait.',
              ],
              ['avaient arrivé', 'Arriver takes être: étaient arrivés.'],
              ['arrivaient', 'The imparfait would mean they were arriving at that time.'],
            ],
            'I did not know they had arrived in France before 1990.',
            'Arriver takes être, and the participle agrees: arrivés.',
          ),
          g(
            'p5',
            'Elle n’___ jamais vu la neige avant d’arriver en France.',
            'avait',
            [
              ['a', 'Before another past moment the auxiliary is in the imparfait: avait.'],
              ['était', 'Voir takes avoir: elle avait vu.'],
              ['aurait', 'That is the conditional, not a past tense.'],
            ],
            'She had never seen snow before arriving in France.',
            'The auxiliary of the plus-que-parfait is in the imparfait: avait vu.',
          ),
          g(
            'p6',
            'Il parlait sans accent car il ___ vécu dix ans à Lyon.',
            'avait',
            [
              ['a', 'Before another past moment the auxiliary is in the imparfait: avait.'],
              ['était', 'Vivre takes avoir: il avait vécu.'],
              ['aurait', 'That is the conditional, not a past tense.'],
            ],
            'He spoke without an accent because he had lived in Lyon for ten years.',
            'Vivre takes avoir: avait vécu.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-imparfait-pc', 'fr-plus-que-parfait'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'When I was little, we spoke Arabic at home.',
            ['Quand', 'j’étais', 'petit,', 'nous', 'parlions', 'arabe', 'à', 'la', 'maison.'],
            { extra: ['avons parlé'], lesson: 'fr-imparfait-pc' },
          ),
          sent(
            's2',
            'My parents had left their country before my birth.',
            ['Mes', 'parents', 'avaient', 'quitté', 'leur', 'pays', 'avant', 'ma', 'naissance.'],
            { extra: ['ont'], lesson: 'fr-plus-que-parfait' },
          ),
          sent(
            's3',
            'She was born in Dakar but grew up in France.',
            ['Elle', 'est', 'née', 'à', 'Dakar', 'mais', 'a', 'grandi', 'en', 'France.'],
            { extra: ['était'], lesson: 'fr-imparfait-pc' },
          ),
          sent(
            's4',
            'I have always felt both French and Senegalese.',
            [
              'Je',
              'me',
              'suis',
              'toujours',
              'senti',
              'à',
              'la',
              'fois',
              'français',
              'et',
              'sénégalais.',
            ],
            { extra: ['sentais'], lesson: 'fr-imparfait-pc' },
          ),
          sent(
            's5',
            'As a child, I dreamed of travelling.',
            ['Enfant,', 'je', 'rêvais', 'de', 'voyager.'],
            { extra: ['ai rêvé'], lesson: 'fr-imparfait-pc' },
          ),
        ],
      },
    ),

    activity(
      U,
      'spell-identity',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words of identity. Accents are optional.',
        ['spelling', 'identity-origins'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp1',
            mode: 'unscramble',
            answer: 'appartenance',
            hint: 'belonging',
            emoji: '🫂',
            speak: 'l’appartenance',
          },
          {
            id: 'sp2',
            mode: 'unscramble',
            answer: 'héritage',
            hint: 'heritage',
            emoji: '🎁',
            speak: 'l’héritage',
          },
          {
            id: 'sp3',
            mode: 'type',
            answer: 'préjugé',
            hint: 'prejudice',
            emoji: '🚫',
            speak: 'un préjugé',
          },
          {
            id: 'sp4',
            mode: 'type',
            answer: 'chaleureux',
            hint: 'warm, friendly',
            emoji: '🤗',
            speak: 'chaleureux',
          },
          {
            id: 'sp5',
            mode: 'type',
            answer: 'sincère',
            hint: 'sincere',
            emoji: '💯',
            speak: 'sincère',
          },
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Understand the story',
        'Read a sentence of a life story and pick its meaning.',
        ['communication', 'identity-origins'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Je suis né à Oran, mais j’ai grandi à Lyon.',
            'I was born in Oran but grew up in Lyon.',
            [
              'I was born in Lyon but grew up in Oran.',
              'I live in Oran and work in Lyon.',
              'I grew up in Oran and moved to Lyon.',
            ],
          ),
          qs(
            'r2',
            'À la maison, nous parlions arabe ; à l’école, français.',
            'At home we spoke Arabic; at school, French.',
            [
              'At home we spoke French; at school, Arabic.',
              'We speak Arabic at school today.',
              'At home and at school we spoke Arabic.',
            ],
          ),
          qs(
            'r3',
            'Aujourd’hui, je me sens à la fois algérien et français.',
            'Today I feel both Algerian and French.',
            [
              'Today I feel neither Algerian nor French.',
              'Today I am sometimes Algerian, sometimes French.',
              'Today I feel more French than Algerian.',
            ],
          ),
          qs(
            'r4',
            'Mes parents avaient quitté Oran avant ma naissance.',
            'My parents had left Oran before I was born.',
            [
              'My parents left Oran after I was born.',
              'My parents were leaving Oran when I was born.',
              'My parents still live in Oran.',
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
        'Talk about your origins',
        'Introduce your background to a colleague and a friend.',
        ['communication', 'identity-origins'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'colleague',
            title: 'A new colleague',
            emoji: '🧑‍💼',
            setting: 'At work, you chat with a new colleague. Use vous.',
            turns: [
              say(
                'Camille',
                'Vous avez un petit accent. D’où venez-vous ?',
                'You have a slight accent. Where do you come from?',
              ),
              you(
                'Je suis originaire de Marseille, mais mes parents ont immigré d’Italie.',
                [
                  'Je suis originaire de Marseille, mais mes parents immigrent d’Italie.',
                  'Say what happened before: ont immigré.',
                ],
                [
                  'Je suis originaire à Marseille, mais mes parents ont immigré d’Italie.',
                  'You come from a city: originaire de.',
                ],
              ),
              say(
                'Camille',
                'Et vous parliez italien à la maison ?',
                'And did you speak Italian at home?',
              ),
              you(
                'Oui, nous parlions italien avec ma grand-mère.',
                [
                  'Oui, nous avons parlé italien avec ma grand-mère.',
                  'A habit (“with my grandmother”) is in the imparfait.',
                ],
                [
                  'Oui, nous parlerons italien avec ma grand-mère.',
                  'You are talking about the past, not the future.',
                ],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'Childhood memories',
            emoji: '🧒',
            setting: 'You talk about your childhood with a friend. You say tu.',
            turns: [
              say('Inès', 'Tu as grandi où, toi ?', 'Where did you grow up?'),
              you(
                'J’ai grandi à la campagne. On avait un grand jardin.',
                [
                  'J’ai grandi à la campagne. On a eu un grand jardin.',
                  'Describing the scene: avait.',
                ],
                [
                  'J’ai grandi à la campagne. On aura un grand jardin.',
                  'You are talking about the past, not the future.',
                ],
              ),
              say(
                'Inès',
                'Moi, j’habitais en ville. Je ne connaissais pas les vaches !',
                'I lived in town. I did not know cows!',
              ),
              you(
                'Moi, je n’avais jamais vu la mer avant mes quinze ans.',
                [
                  'Moi, je n’ai jamais vu la mer avant mes quinze ans.',
                  'Before another past moment: avais vu.',
                ],
                [
                  'Moi, je ne verrai jamais la mer avant mes quinze ans.',
                  'You are talking about the past, not the future.',
                ],
              ),
            ],
          },
          {
            id: 'stereotype',
            title: 'A stereotype',
            emoji: '🧱',
            setting: 'A neighbour says something about “the French”. Answer politely, with vous.',
            turns: [
              say(
                'Un voisin',
                'Les Français sont tous râleurs, non ?',
                'The French are all grumblers, aren’t they?',
              ),
              you(
                'Je ne crois pas. C’est un préjugé : chacun est différent.',
                [
                  'Oui, c’est vrai, tous les Français sont râleurs.',
                  'This repeats the stereotype instead of questioning it.',
                ],
                [
                  'Je ne crois pas. C’est un héritage : chacun est différent.',
                  'An héritage is something you inherit, not a false idea: un préjugé.',
                ],
              ),
              say(
                'Un voisin',
                'Vous avez raison, je généralise.',
                'You are right, I am generalising.',
              ),
              you(
                'Pas de problème ! On a tous des stéréotypes.',
                [
                  'Enchanté, on se tutoie ?',
                  'You already know each other: no need to introduce yourselves.',
                ],
                ['Bon appétit !', 'This is not a meal.'],
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
        'Identity blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-imparfait-pc', 'fr-plus-que-parfait'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Quand j’étais enfant, je jouais dehors” describes a habit in the past.', true),
          tf(
            'b2',
            'The passé composé is used to set the scene and describe a background.',
            false,
            'The scene is set with the imparfait.',
          ),
          tf('b3', '“Il avait déjà quitté la maison” is in the plus-que-parfait.', true),
          tf(
            'b4',
            'The plus-que-parfait shows an action that came before another past action.',
            true,
          ),
          tf(
            'b5',
            '“Elle avait arrivé à midi” is correct.',
            false,
            'Arriver takes être: elle était arrivée.',
          ),
          tf('b6', '“Nous avons grandi en Bretagne” tells a finished fact about the past.', true),
          tf(
            'b7',
            'In “Il pleuvait quand je suis sorti”, the rain is the background action.',
            true,
          ),
          tf(
            'b8',
            '“Le préjugé” means “heritage”.',
            false,
            'Un préjugé is a prejudice; l’héritage is heritage.',
          ),
          tf('b9', '“Les racines” means “roots”.', true),
          tf(
            'b10',
            '“Réservé” describes someone who talks a lot.',
            false,
            'Réservé means reserved, the opposite of talkative.',
          ),
          tf(
            'b11',
            'The plus-que-parfait is built with avoir or être in the imparfait + past participle.',
            true,
          ),
          tf(
            'b12',
            '“Chaleureux” is a synonym of “froid”.',
            false,
            'Chaleureux means warm, froid means cold.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Identity challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'identity-origins'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Quand j’étais petit, je ___ souvent chez mes cousins.”',
            'allais',
            ['suis allé', 'irai', 'étais allé'],
            undefined,
            'fr-imparfait-pc',
          ),
          q(
            'c2',
            'Complete: “Hier, il ___ sa nationalité française.”',
            'a obtenu',
            ['obtenait', 'avait obtenu', 'obtient'],
            undefined,
            'fr-imparfait-pc',
          ),
          q(
            'c3',
            'Complete: “Quand je suis arrivé, elle ___ déjà.”',
            'était partie',
            ['est partie', 'avait parti', 'partait'],
            undefined,
            'fr-plus-que-parfait',
          ),
          q(
            'c4',
            'Complete: “Nous ___ quitté notre village avant la guerre.”',
            'avions',
            ['étions', 'avons', 'aurions'],
            undefined,
            'fr-plus-que-parfait',
          ),
          q('c5', 'Which word means “a fixed, simplified idea about a group”?', 'un stéréotype', [
            'un héritage',
            'un accent',
            'un compatriote',
          ]),
          q('c6', '“Je tiens à mes traditions” means …', 'I am attached to my traditions.', [
            'I do not like my traditions.',
            'I hold my traditions in my hand.',
            'I am changing my traditions.',
          ]),
          q('c7', 'Which adjective describes someone who does not change his mind?', 'têtu', [
            'sincère',
            'curieux',
            'spontané',
          ]),
          q(
            'c8',
            'How do you say “I feel both French and Algerian”?',
            'Je me sens à la fois français et algérien.',
            [
              'Je suis sentir français et algérien.',
              'Je me sens ni français ni algérien.',
              'Je sens à la fois français et algérien.',
            ],
          ),
        ],
      },
    ),
  ],
};
