import { byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  imparfaitTable,
  meta,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  withLesson,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-1-souvenirs';

const family = vocabList(U, 'Family ties', [
  ['la fratrie', 'siblings, brothers and sisters', '👨‍👩‍👧‍👦'],
  ['l’aîné', 'the eldest child', '1️⃣'],
  ['le demi-frère', 'half-brother', '🧑'],
  ['le parrain', 'godfather', '🎩'],
  ['la marraine', 'godmother', '🧚'],
  ['le cadet', 'the younger child', '🧒'],
  ['le conjoint', 'spouse, partner', '💍'],
  ['l’ancêtre', 'ancestor', '🕰️'],
  ['la génération', 'generation', '👪'],
  ['l’héritage', 'inheritance, heritage', '🏺'],
  ['les retrouvailles', 'reunion', '🤗'],
  ['le lien', 'bond, link', '🔗'],
  ['la ressemblance', 'resemblance', '🪞'],
  ['le foyer', 'household, home', '🏡'],
]);

const relations = vocabList(U, 'Relationships', [
  ['se disputer', 'to quarrel', '💢'],
  ['se réconcilier', 'to make up', '🕊️'],
  ['se ressembler', 'to look alike', '👯'],
  ['se confier', 'to confide in each other', '🤫'],
  ['s’occuper de', 'to look after', '🧸'],
  ['élever', 'to raise (a child)', '🍼'],
  ['hériter', 'to inherit', '📜'],
  ['se fâcher', 'to get angry', '😠'],
  ['se moquer de', 'to make fun of', '🤭'],
  ['adopter', 'to adopt', '🫶'],
  ['rester en contact', 'to stay in touch', '📱'],
  ['perdre de vue', 'to lose touch with', '👋'],
]);

const story = vocabList(U, 'Telling a story', [
  ['à l’époque', 'at that time', '⌛'],
  ['autrefois', 'in the past', '🕯️'],
  ['un jour', 'one day', '📆'],
  ['ce jour-là', 'that day', '🗓️'],
  ['soudain', 'suddenly', '⚡'],
  ['tout à coup', 'all of a sudden', '💥'],
  ['pendant que', 'while', '🔁'],
  ['au moment où', 'at the moment when', '🎯'],
  ['la veille', 'the day before', '🌙'],
  ['le lendemain', 'the next day', '🌅'],
  ['finalement', 'in the end', '🏁'],
]);

const vocab = [...family, ...relations, ...story];

const TENSE_CARDS: [string, 'imp' | 'pc', string][] = [
  ['Il faisait beau.', 'imp', 'The weather was nice (background).'],
  ['Nous habitions près de la mer.', 'imp', 'We lived near the sea.'],
  ['Ma grand-mère cuisinait tous les dimanches.', 'imp', 'My grandmother cooked every Sunday.'],
  ['J’avais dix ans.', 'imp', 'I was ten years old.'],
  ['Elle portait une robe bleue.', 'imp', 'She was wearing a blue dress.'],
  ['Autrefois, on écrivait des lettres.', 'imp', 'In the past people wrote letters.'],
  ['Soudain, le téléphone a sonné.', 'pc', 'Suddenly the phone rang.'],
  ['Un jour, nous avons déménagé.', 'pc', 'One day we moved house.'],
  ['Elle est née en 1990.', 'pc', 'She was born in 1990.'],
  ['Il a ouvert la porte.', 'pc', 'He opened the door.'],
  ['Hier, j’ai retrouvé mon cousin.', 'pc', 'Yesterday I met my cousin again.'],
  ['Ils se sont mariés en juin.', 'pc', 'They got married in June.'],
];

export const souvenirs: UnitContent = {
  unit: unitFr({
    id: U,
    order: 2,
    title: 'Souvenirs de famille',
    subtitle: 'Talk about your family, share memories and tell a story in the past',
    emoji: '👪',
    goals: [
      'Describe family ties and relationships',
      'Tell a memory with the imparfait and the passé composé',
      'Link the events of a story and agree reflexive verbs in the past',
    ],
    grammar: [
      'Imparfait or passé composé?',
      'Connectors of a story',
      'Agreement of reflexive verbs in the passé composé',
    ],
    vocabFields: ['Family ties', 'Relationships', 'Telling a story'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-family',
      'flashcards',
      meta(
        'Family ties',
        'Siblings, spouses, godparents and ancestors.',
        ['vocabulary', 'family'],
        1,
        4,
      ),
      flashcards(family),
    ),
    activity(
      U,
      'flash-relations',
      'flashcards',
      meta(
        'Relationships',
        'Quarrelling, making up and staying in touch.',
        ['vocabulary', 'family', 'friendship'],
        1,
        4,
      ),
      flashcards(relations),
    ),
    activity(
      U,
      'flash-story',
      'flashcards',
      meta(
        'Telling a story',
        'Words that place the events of a story in time.',
        ['vocabulary', 'life-stages'],
        1,
        3,
      ),
      flashcards(story),
    ),
    activity(
      U,
      'quiz-story',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the meaning of the family and story words.',
        ['vocabulary', 'family'],
        1,
        3,
      ),
      quizDeEn(
        byDe(
          vocab,
          'le parrain',
          'le conjoint',
          'les retrouvailles',
          'se réconcilier',
          'la veille',
          'soudain',
          'autrefois',
          'le lien',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'listen-family',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'family'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'la fratrie',
          'la marraine',
          'l’aîné',
          'l’ancêtre',
          'la génération',
          'se disputer',
          'élever',
          'le lendemain',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'conj-imparfait',
      'conjugation',
      {
        ...meta(
          'The imparfait',
          'Take the nous stem and add -ais, -ais, -ait, -ions, -iez, -aient.',
          ['grammar', 'fr-b11-imparfait-pc'],
          2,
          4,
        ),
        lesson: 'fr-b11-imparfait-pc',
      },
      {
        tables: [
          imparfaitTable('habiter', 'to live', ['je', 'tu', 'ils/elles']),
          imparfaitTable('finir', 'to finish', ['nous', 'vous', 'il/elle/on']),
          imparfaitTable('faire', 'to do', ['je', 'nous', 'ils/elles']),
          imparfaitTable('avoir', 'to have', ['tu', 'il/elle/on', 'vous']),
          imparfaitTable('être', 'to be', ['je', 'nous', 'ils/elles']),
        ],
      },
    ),
    activity(
      U,
      'sort-tense',
      'sortit',
      {
        ...meta(
          'Scene or event?',
          'Imparfait sets the scene, passé composé tells the event.',
          ['grammar', 'fr-b11-imparfait-pc', 'family'],
          2,
          4,
        ),
        lesson: 'fr-b11-imparfait-pc',
      },
      {
        instruction: 'Is the sentence a scene or habit, or a single event?',
        buckets: [
          { id: 'imp', label: 'Imparfait: scene, habit', emoji: '🎞️' },
          { id: 'pc', label: 'Passé composé: event', emoji: '⚡' },
        ],
        items: sortCards('t', TENSE_CARDS),
      },
    ),
    activity(
      U,
      'gap-tense',
      'gapfill',
      {
        ...meta(
          'Which past tense?',
          'Choose the imparfait or the passé composé.',
          ['grammar', 'fr-b11-imparfait-pc', 'family'],
          2,
          5,
        ),
        lesson: 'fr-b11-imparfait-pc',
      },
      {
        items: [
          gap(
            't1',
            'Quand j’___ petit, nous passions l’été chez mes grands-parents.',
            'étais',
            ['étais', 'ai été', 'serai', 'suis'],
            'When I was little we spent the summer at my grandparents’.',
            'A state in the past, no beginning or end: imparfait.',
          ),
          gap(
            't2',
            'Un jour, mon oncle ___ à l’improviste.',
            'est arrivé',
            ['est arrivé', 'arrivait', 'arrivera', 'arrive'],
            'One day my uncle turned up unannounced.',
            'One day marks a single event: passé composé, with être.',
          ),
          gap(
            't3',
            'Chaque dimanche, ma tante ___ un gâteau.',
            'préparait',
            ['préparait', 'a préparé', 'prépare', 'préparera'],
            'Every Sunday my aunt made a cake.',
            'A repeated habit in the past: imparfait.',
          ),
          gap(
            't4',
            'Hier, ils ___ leurs cousins à la gare.',
            'ont retrouvé',
            ['ont retrouvé', 'retrouvaient', 'retrouvent', 'retrouveront'],
            'Yesterday they met their cousins at the station.',
            'A single event yesterday: passé composé.',
          ),
          gap(
            't5',
            'Il ___ très froid ce soir-là.',
            'faisait',
            ['faisait', 'a fait', 'fait', 'fera'],
            'It was very cold that evening.',
            'Weather as the setting of a story: imparfait.',
          ),
          gap(
            't6',
            'Nous ___ un film quand la lumière s’est éteinte.',
            'regardions',
            ['regardions', 'avons regardé', 'regardons', 'regarderons'],
            'We were watching a film when the light went out.',
            'The action in progress is the imparfait, the interruption the passé composé.',
          ),
          gap(
            't7',
            'En 1995, mes parents ___ à Lyon.',
            'ont déménagé',
            ['ont déménagé', 'déménageaient', 'déménagent', 'déménageront'],
            'In 1995 my parents moved to Lyon.',
            'A dated one-time event: passé composé.',
          ),
          gap(
            't8',
            'Pendant que je dormais, mon frère ___ la porte.',
            'a fermé',
            ['a fermé', 'fermait', 'ferme', 'fermera'],
            'While I was sleeping, my brother closed the door.',
            'One completed action next to a background action: passé composé.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-story',
      'gapfill',
      {
        ...meta(
          'Link the story',
          'Pick the connector that fits the event.',
          ['grammar', 'fr-b11-narration'],
          2,
          4,
        ),
        lesson: 'fr-b11-narration',
      },
      {
        items: [
          gap(
            'c1',
            'Je préparais le dîner ___ mon frère regardait la télé.',
            'pendant que',
            ['pendant que', 'soudain', 'le lendemain', 'finalement'],
            'I was cooking while my brother watched TV.',
            'Pendant que links two actions that happen at the same time.',
          ),
          gap(
            'c2',
            'Nous mangions quand, ___, quelqu’un a frappé à la porte.',
            'soudain',
            ['soudain', 'autrefois', 'pendant que', 'la veille'],
            'We were eating when suddenly someone knocked.',
            'Soudain introduces a sudden event.',
          ),
          gap(
            'c3',
            'Nous sommes arrivés très tard. ___, nous avons visité la ville.',
            'Le lendemain',
            ['Le lendemain', 'La veille', 'Autrefois', 'Pendant que'],
            'We arrived very late. The next day we visited the town.',
            'Le lendemain = the day after.',
          ),
          gap(
            'c4',
            '___, les familles vivaient souvent ensemble.',
            'Autrefois',
            ['Autrefois', 'Soudain', 'Le lendemain', 'Tout à coup'],
            'In the past families often lived together.',
            'Autrefois sets a general scene in the past: imparfait follows.',
          ),
          gap(
            'c5',
            'Il est parti la ___ de mon anniversaire.',
            'veille',
            ['veille', 'lendemain', 'époque', 'moment'],
            'He left the day before my birthday.',
            'La veille = the day before.',
          ),
          gap(
            'c6',
            'J’allais sortir ___ le téléphone a sonné.',
            'au moment où',
            ['au moment où', 'pendant que', 'autrefois', 'le lendemain'],
            'I was about to go out when the phone rang.',
            'Au moment où = at the moment when.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-reflexive',
      'gapfill',
      {
        ...meta(
          'Does the participle agree?',
          'Reflexive verbs in the passé composé: agree or not?',
          ['grammar', 'fr-b11-reflexive-agreement', 'family'],
          3,
          4,
        ),
        lesson: 'fr-b11-reflexive-agreement',
      },
      {
        items: [
          gap(
            'r1',
            'Elle s’est ___ à six heures.',
            'levée',
            ['levée', 'levé', 'levés', 'lever'],
            'She got up at six.',
            'Se is the direct object and refers to a woman: levée.',
          ),
          gap(
            'r2',
            'Ils se sont ___ au téléphone.',
            'parlé',
            ['parlé', 'parlés', 'parlée', 'parler'],
            'They talked on the phone.',
            'Parler à: se is an indirect object, so no agreement.',
          ),
          gap(
            'r3',
            'Elle s’est ___ les mains.',
            'lavé',
            ['lavé', 'lavée', 'lavés', 'laver'],
            'She washed her hands.',
            'The direct object (les mains) comes after, so the participle stays lavé.',
          ),
          gap(
            'r4',
            'Les deux sœurs se sont ___ après la dispute.',
            'réconciliées',
            ['réconciliées', 'réconcilié', 'réconciliés', 'réconcilier'],
            'The two sisters made up after the quarrel.',
            'Se is the direct object, feminine plural: réconciliées.',
          ),
          gap(
            'r5',
            'Mes cousins se sont ___ à la gare.',
            'retrouvés',
            ['retrouvés', 'retrouvé', 'retrouvées', 'retrouver'],
            'My cousins met at the station.',
            'Se is the direct object, masculine plural: retrouvés.',
          ),
          gap(
            'r6',
            'Elles se sont ___ des messages.',
            'écrit',
            ['écrit', 'écrites', 'écrits', 'écrire'],
            'They wrote each other messages.',
            'Écrire à quelqu’un: se is indirect, and the object des messages comes after.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta('Build a sentence', 'Put the words in the right order.', ['grammar', 'family'], 2, 4),
      {
        items: [
          withLesson(
            'fr-b11-imparfait-pc',
            sent(
              's1',
              'When I was little, we went to my grandparents’ every summer.',
              ['Quand', 'j’étais', 'petit,', 'nous', 'allions', 'chez', 'mes', 'grands-parents.'],
              { extra: ['sommes allés'] },
            ),
          ),
          withLesson(
            'fr-b11-imparfait-pc',
            sent(
              's2',
              'One day, my cousin arrived without warning.',
              ['Un', 'jour,', 'mon', 'cousin', 'est', 'arrivé', 'sans', 'prévenir.'],
              { extra: ['arrivait'] },
            ),
          ),
          withLesson(
            'fr-b11-reflexive-agreement',
            sent(
              's3',
              'They made up after the quarrel.',
              ['Ils', 'se', 'sont', 'réconciliés', 'après', 'la', 'dispute.'],
              { extra: ['ont'] },
            ),
          ),
          withLesson(
            'fr-b11-narration',
            sent(
              's4',
              'She was cooking while I was setting the table.',
              ['Elle', 'cuisinait', 'pendant', 'que', 'je', 'mettais', 'la', 'table.'],
              { extra: ['a cuisiné'] },
            ),
          ),
          withLesson(
            'fr-b11-reflexive-agreement',
            sent(
              's5',
              'The next day, we met at my uncle’s.',
              ['Le', 'lendemain,', 'nous', 'nous', 'sommes', 'retrouvés', 'chez', 'mon', 'oncle.'],
              { extra: ['avons'] },
            ),
          ),
          withLesson(
            'fr-b11-imparfait-pc',
            sent(
              's6',
              'At that time my godmother lived in Brittany.',
              ['À', 'l’époque,', 'ma', 'marraine', 'habitait', 'en', 'Bretagne.'],
              { extra: ['a habité'] },
            ),
          ),
        ],
      },
    ),
    activity(
      U,
      'spell-family',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words from the unit. Accents are optional here.',
        ['spelling', 'family'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-generation',
            mode: 'unscramble',
            answer: 'génération',
            hint: 'generation',
            emoji: '👪',
            speak: 'la génération',
          },
          {
            id: 'sp-ancetre',
            mode: 'unscramble',
            answer: 'ancêtre',
            hint: 'ancestor',
            emoji: '🕰️',
            speak: 'l’ancêtre',
          },
          {
            id: 'sp-retrouvailles',
            mode: 'type',
            answer: 'retrouvailles',
            hint: 'reunion',
            emoji: '🤗',
            speak: 'les retrouvailles',
          },
          dictation('sp-heritage', 'héritage', 'inheritance', 'l’héritage'),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Family stories',
        'Share memories with a cousin, listen to a grandmother and make up with a brother.',
        ['communication', 'family'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'reunion',
            title: 'A family reunion',
            emoji: '🤗',
            setting: 'You meet your cousin Julie again after ten years. Use tu.',
            turns: [
              say(
                'Julie',
                'Ça fait dix ans ! Tu te souviens de la maison de papi ?',
                'It has been ten years! Do you remember grandad’s house?',
              ),
              you(
                'Bien sûr ! Chaque été, nous allions là-bas et nous jouions dans le jardin.',
                [
                  'Bien sûr ! Chaque été, nous sommes allés là-bas et nous avons joué dans le jardin.',
                  'A habit repeated “every summer” needs the imparfait: nous allions, nous jouions.',
                ],
                [
                  'Bien sûr ! Chaque été, nous irons là-bas et nous jouerons dans le jardin.',
                  'Irons and jouerons are the future; you are remembering the past.',
                ],
              ),
              say(
                'Julie',
                'Et le jour où tu es tombé de l’arbre ?',
                'And the day you fell out of the tree?',
              ),
              you(
                'Oui ! J’avais huit ans et je suis tombé en plein repas.',
                [
                  'Oui ! J’ai eu huit ans et je tombais en plein repas.',
                  'An age is a state: j’avais huit ans. The one-time fall is the passé composé: je suis tombé.',
                ],
                [
                  'Oui ! J’avais huit ans et je tombais en plein repas.',
                  'The fall happened once: je suis tombé.',
                ],
              ),
              say('Julie', 'On s’est bien amusés, non ?', 'We had fun, didn’t we?'),
              you('Oui, nous nous sommes bien amusés !', [
                'Oui, nous nous sommes bien amusé !',
                'The participle agrees with nous (plural): amusés.',
              ]),
            ],
          },
          {
            id: 'grandmother',
            title: 'Grandma’s story',
            emoji: '👵',
            setting: 'Your grandmother tells how she met your grandfather. Use tu.',
            turns: [
              say(
                'Mamie',
                'Un jour, pendant que je gardais les vaches, un orage a éclaté.',
                'One day, while I was minding the cows, a storm broke.',
              ),
              you(
                'Et alors ? Qu’est-ce que tu as fait ?',
                [
                  'Et alors ? Qu’est-ce que tu faisais ?',
                  'You ask about her reaction after the storm broke: passé composé, tu as fait.',
                ],
                [
                  'Et alors ? Qu’est-ce que tu feras ?',
                  'The story is in the past, not the future.',
                ],
              ),
              say(
                'Mamie',
                'Je me suis réfugiée dans une grange. Tout à coup, j’ai entendu un bruit.',
                'I took shelter in a barn. All of a sudden I heard a noise.',
              ),
              you('Et ensuite ? Qu’est-ce qui s’est passé ?', [
                'Et ensuite ? Qu’est-ce qui se passait ?',
                'You ask about the next event in the story: passé composé, s’est passé.',
              ]),
              say(
                'Mamie',
                'C’était ton grand-père ! Nous nous sommes mariés l’année suivante.',
                'It was your grandfather! We got married the following year.',
              ),
              you(
                'Quelle belle histoire ! Vous vous êtes rencontrés grâce à un orage !',
                [
                  'Quelle belle histoire ! Vous vous avez rencontrés grâce à un orage !',
                  'Pronominal verbs take être in the passé composé: vous vous êtes rencontrés.',
                ],
                [
                  'Quelle belle histoire ! Vous êtes rencontrés grâce à un orage !',
                  'Do not drop the reflexive pronoun: vous vous êtes rencontrés.',
                ],
              ),
            ],
          },
          {
            id: 'making-up',
            title: 'Making up',
            emoji: '🕊️',
            setting: 'You and your brother Marc had a quarrel yesterday. Use tu.',
            turns: [
              say(
                'Marc',
                'Je suis désolé pour hier. On s’est disputés pour rien.',
                'I am sorry about yesterday. We quarrelled over nothing.',
              ),
              you(
                'Ce n’est pas grave. Je crois que nous nous sommes fâchés trop vite.',
                [
                  'Ce n’est pas grave. Je crois que nous nous sommes fâché trop vite.',
                  'The participle agrees with nous: fâchés.',
                ],
                [
                  'Ce n’est pas grave. Je crois que nous avons fâchés trop vite.',
                  'Se fâcher takes être: nous nous sommes fâchés.',
                ],
              ),
              say(
                'Marc',
                'Tu te rappelles quand nous étions petits ? On se disputait toujours pour la télécommande.',
                'Do you remember when we were little? We always quarrelled over the remote control.',
              ),
              you('Oui ! Et maman disait toujours : « Vous êtes impossibles ! »', [
                'Oui ! Et maman dira toujours : « Vous êtes impossibles ! »',
                'You are remembering the past, and toujours means a habit: disait.',
              ]),
            ],
          },
        ],
      },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      meta('Memory blitz', 'True or false? Beat the clock!', ['grammar', 'family'], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Quand j’étais petit” introduces the background in the imparfait.', true),
          tf(
            'b2',
            '“Soudain, le téléphone sonnait” is correct.',
            false,
            'Soudain introduces a single event: le téléphone a sonné.',
          ),
          tf('b3', 'In “Elle s’est levée” the participle agrees with the subject.', true),
          tf(
            'b4',
            '“Ils se sont parlés” is correct.',
            false,
            'Parler à: se is an indirect object, so no agreement: ils se sont parlé.',
          ),
          tf('b5', '“Autrefois” points to the past.', true),
          tf('b6', '“Pendant que” links two actions that happen at the same time.', true),
          tf(
            'b7',
            '“Le lendemain” means the day before.',
            false,
            'Le lendemain is the next day. The day before is la veille.',
          ),
          tf('b8', '“Le parrain” is the godfather.', true),
          tf(
            'b9',
            '“Les retrouvailles” means a quarrel.',
            false,
            'Les retrouvailles is a reunion.',
          ),
          tf('b10', 'In “Elle s’est lavé les mains” the participle does not agree.', true),
          tf('b11', '“Il faisait beau” describes the weather as the background of a story.', true),
          tf(
            'b12',
            '“Hier, j’habitais à Paris pendant une minute” is the usual way to tell a single event.',
            false,
            'A single completed event takes the passé composé.',
          ),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'family'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            'fr-b11-imparfait-pc',
            q('c1', 'Complete: “Quand j’___ enfant, j’habitais à Lyon.”', 'étais', [
              'ai été',
              'serai',
              'suis',
            ]),
          ),
          withLesson(
            'fr-b11-imparfait-pc',
            q('c2', 'Complete: “Un jour, il ___ une lettre.”', 'a reçu', [
              'recevait',
              'recevra',
              'reçoit',
            ]),
          ),
          withLesson(
            'fr-b11-imparfait-pc',
            q('c3', 'Which sentence tells a single event?', 'Le téléphone a sonné.', [
              'Le téléphone sonnait.',
              'Le téléphone sonne.',
              'Le téléphone sonnera.',
            ]),
          ),
          withLesson(
            'fr-b11-reflexive-agreement',
            q('c4', 'Complete: “Elle s’est ___ à huit heures.” (se lever)', 'levée', [
              'levé',
              'levés',
              'lever',
            ]),
          ),
          withLesson(
            'fr-b11-reflexive-agreement',
            q('c5', 'Complete: “Ils se sont ___ un message.” (écrire à quelqu’un)', 'écrit', [
              'écrits',
              'écrite',
              'écrire',
            ]),
          ),
          q('c6', '“La veille” means …', 'the day before', [
            'the next day',
            'a week later',
            'that evening',
          ]),
          withLesson(
            'fr-b11-narration',
            q('c7', 'Complete: “Je cuisinais ___ mon frère mettait la table.”', 'pendant que', [
              'soudain',
              'le lendemain',
              'tout à coup',
            ]),
          ),
          withLesson(
            'fr-b11-narration',
            q('c8', 'Which connector introduces a sudden event?', 'Soudain', [
              'Autrefois',
              'Pendant que',
              'Chaque été',
            ]),
          ),
        ],
      },
    ),
  ],
};
