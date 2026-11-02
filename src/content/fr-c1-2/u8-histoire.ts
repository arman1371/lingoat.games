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

const U = 'fr-c1-2-histoire';

const vocab = vocabList(U, 'Histoire et mémoire', [
  ['le Moyen Âge', 'the Middle Ages', '🏰'],
  ['la Renaissance', 'the Renaissance', '🎨'],
  ['les Lumières', 'the Enlightenment', '🕯️'],
  ['la Révolution française', 'the French Revolution', '🇫🇷'],
  ['la monarchie', 'monarchy', '👑'],
  ['la dynastie', 'dynasty', '🏯'],
  ['le règne', 'reign', '🪑'],
  ['l’empire', 'empire', '🦅'],
  ['la conquête', 'conquest', '⚔️'],
  ['la bataille', 'battle', '🛡️'],
  ['le soulèvement', 'uprising', '✊'],
  ['le traité', 'treaty', '📜'],
  ['l’occupation', 'occupation (by a foreign army)', '🪖'],
  ['la Résistance', 'the Resistance (WWII)', '🕊️'],
  ['la Libération', 'the Liberation (1944)', '🎆'],
  ['la colonisation', 'colonisation', '🚢'],
  ['la décolonisation', 'decolonisation', '🗽'],
  ['l’indépendance', 'independence', '🏳️'],
  ['l’abolition', 'abolition', '⛓️'],
  ['l’exode', 'mass exodus', '🧳'],
  ['le siècle', 'century', '💯'],
  ['l’époque', 'period, era', '⏳'],
  ['la chronologie', 'chronology', '📅'],
  ['l’historien', 'historian', '🧑‍🏫'],
  ['les archives', 'archives', '🗄️'],
  ['le témoignage', 'testimony, eyewitness account', '🗣️'],
  ['le patrimoine', 'heritage', '🏛️'],
  ['le monument', 'monument', '🗼'],
  ['la mémoire collective', 'collective memory', '🧠'],
  ['le devoir de mémoire', 'duty to remember', '🕯️'],
  ['commémorer', 'to commemorate', '🌹'],
  ['la fouille archéologique', 'archaeological dig', '⛏️'],
  ['marquer un tournant', 'to mark a turning point', '↪️'],
  ['tomber dans l’oubli', 'to fall into oblivion', '🌫️'],
]);

export const histoire: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 8,
    title: 'Un voyage dans l’histoire',
    subtitle: 'History and memory – with sequence of tenses and time markers',
    emoji: '🏰',
    goals: [
      'Talk about historical periods, events and heritage',
      'Report past statements with the right sequence of tenses (concordance des temps)',
      'Place events in time with depuis, il y a, pendant, en, dans and dès',
    ],
    grammar: ['Concordance des temps', 'Marqueurs temporels'],
    vocabFields: ['Histoire et mémoire'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-history', vocab, {
      first: 'Periods and events',
      firstText: 'Words for eras, power, wars and independence.',
      second: 'Memory and heritage',
      secondText: 'Words for sources, monuments and remembering the past.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-history'],
      2,
      definitions([
        ['Période de cent ans.', 'le siècle', ['l’époque', 'le règne', 'la chronologie']],
        [
          'Accord officiel écrit entre des États.',
          'le traité',
          ['la bataille', 'le soulèvement', 'l’occupation'],
        ],
        [
          'Ensemble des rois d’une même famille qui se succèdent.',
          'la dynastie',
          ['l’empire', 'la monarchie', 'la conquête'],
        ],
        [
          'Récit de quelqu’un qui a vu ou vécu un événement.',
          'le témoignage',
          ['les archives', 'le patrimoine', 'la chronologie'],
        ],
        [
          'Fait de rendre hommage à un événement ou à une personne du passé.',
          'commémorer',
          ['marquer un tournant', 'tomber dans l’oubli', 'léguer'],
        ],
        [
          'Mouvement soudain de révolte d’un groupe contre le pouvoir.',
          'le soulèvement',
          ['le traité', 'la décolonisation', 'la dynastie'],
        ],
        [
          'Ensemble des documents anciens conservés pour l’histoire.',
          'les archives',
          ['le monument', 'la fouille archéologique', 'le patrimoine'],
        ],
        [
          'Fait pour un pays de devenir libre de la domination d’un autre.',
          'l’indépendance',
          ['l’abolition', 'la conquête', 'l’exode'],
        ],
      ]),
    ),

    act(
      U,
      'sort-concordance',
      'sortit',
      'What was said originally?',
      'After a verb in the past, the reported clause shifts. Sort by the tense of the reported verb.',
      ['grammar', 'fr-c12-concordance'],
      3,
      {
        instruction: 'Which original tense does the reported verb stand for?',
        buckets: [
          { id: 'present', label: 'was present → imparfait', emoji: '▶️' },
          { id: 'passe', label: 'was past → plus-que-parfait', emoji: '⏪' },
          { id: 'futur', label: 'was future → conditionnel', emoji: '⏩' },
        ],
        items: [
          ...cards('present', [
            ['Il a dit qu’il HABITAIT à Lyon.', 'He said he lived in Lyon.'],
            [
              'Elle a expliqué que le roi RÉGNAIT depuis dix ans.',
              'She explained that the king had reigned for ten years.',
            ],
            [
              'Nous avons appris que la ville ÉTAIT occupée.',
              'We learned that the city was occupied.',
            ],
          ]),
          ...cards('passe', [
            ['Il a dit qu’il AVAIT VISITÉ le musée.', 'He said he had visited the museum.'],
            [
              'Elle a raconté que son grand-père ÉTAIT PARTI en 1940.',
              'She said her grandfather had left in 1940.',
            ],
            [
              'Ils ont répondu qu’on AVAIT SIGNÉ le traité.',
              'They answered that the treaty had been signed.',
            ],
          ]),
          ...cards('futur', [
            ['Il a promis qu’il VIENDRAIT demain.', 'He promised he would come tomorrow.'],
            [
              'Elle a annoncé que le musée OUVRIRAIT en mai.',
              'She announced that the museum would open in May.',
            ],
            [
              'Ils ont dit qu’on COMMÉMORERAIT la bataille.',
              'They said they would commemorate the battle.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-temps',
      'sortit',
      'Which time marker?',
      'Sort the time markers in capitals by what they express.',
      ['grammar', 'fr-c12-marqueurs-temporels'],
      3,
      {
        instruction: 'What does the marker express?',
        buckets: [
          { id: 'duree', label: 'duration', emoji: '⏱️' },
          { id: 'distance', label: 'distance from now', emoji: '📏' },
          { id: 'limite', label: 'starting or end point', emoji: '📍' },
        ],
        items: [
          ...cards('duree', [
            ['La guerre a duré PENDANT six ans.', 'The war lasted six years.'],
            ['Ils vivent ici DEPUIS 1990.', 'They have lived here since 1990.'],
            ['Il a construit le pont EN deux ans.', 'He built the bridge in two years.'],
          ]),
          ...cards('distance', [
            ['Napoléon est mort IL Y A deux siècles.', 'Napoleon died two centuries ago.'],
            ['Le musée ouvrira DANS trois mois.', 'The museum will open in three months.'],
            [
              'Cette église a été bâtie IL Y A huit cents ans.',
              'This church was built eight hundred years ago.',
            ],
          ]),
          ...cards('limite', [
            ['DÈS 1789, le peuple se soulève.', 'From 1789 on, the people rise up.'],
            ['JUSQU’EN 1962, l’Algérie était française.', 'Until 1962, Algeria was French.'],
            ['À PARTIR DE 1945, l’Europe se reconstruit.', 'From 1945 on, Europe rebuilds.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'gap-concordance',
      'gapfill',
      'Report in the past',
      'Choose the right tense after a verb in the past.',
      ['grammar', 'fr-c12-concordance'],
      3,
      {
        items: [
          gap(
            'c1',
            'Elle a dit qu’elle ___ à Paris à l’époque.',
            'habitait',
            ['habitait', 'habite', 'habitera', 'habiterait'],
            'She said she lived in Paris at that time.',
            {
              lesson: 'fr-c12-concordance',
              explanation: 'A present idea reported after a past verb becomes the imparfait.',
            },
          ),
          gap(
            'c2',
            'Il a expliqué que la bataille ___ eu lieu en 1815.',
            'avait',
            ['avait', 'a', 'aurait', 'avait eu'],
            'He explained that the battle had taken place in 1815.',
            {
              lesson: 'fr-c12-concordance',
              explanation:
                'A past event before the reporting moment: plus-que-parfait (avait eu lieu).',
            },
          ),
          gap(
            'c3',
            'Le guide a promis qu’on ___ le château après le déjeuner.',
            'visiterait',
            ['visiterait', 'visitera', 'visitait', 'visite'],
            'The guide promised that we would visit the castle after lunch.',
            {
              lesson: 'fr-c12-concordance',
              explanation: 'A future idea becomes the conditionnel after a past verb.',
            },
          ),
          gap(
            'c4',
            'Il m’a dit : « Je viendrai. » → Il m’a dit qu’il ___.',
            'viendrait',
            ['viendrait', 'viendra', 'venait', 'serait venu'],
            'He told me he would come.',
            {
              lesson: 'fr-c12-concordance',
            },
          ),
          gap(
            'c5',
            'Il dit qu’il ___ demain.',
            'viendra',
            ['viendra', 'viendrait', 'venait', 'était venu'],
            'He says he will come tomorrow.',
            {
              lesson: 'fr-c12-concordance',
              explanation: 'The reporting verb is in the present: no shift is needed.',
              why: {
                viendrait: 'The verb of saying is present (dit), so the future stays a future.',
              },
            },
          ),
          gap(
            'c6',
            'Les historiens ont montré que la Révolution ___ commencé avant 1789.',
            'avait',
            ['avait', 'a', 'aurait', 'avait eu'],
            'Historians showed that the Revolution had begun before 1789.',
            {
              lesson: 'fr-c12-concordance',
              explanation: 'Reporting past after a past verb: plus-que-parfait.',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-temps',
      'gapfill',
      'Pick the time marker',
      'Choose the marker that fits the sentence.',
      ['grammar', 'fr-c12-marqueurs-temporels'],
      3,
      {
        items: [
          gap(
            't1',
            'La Révolution a éclaté ___ 1789.',
            'en',
            ['en', 'dans', 'pendant', 'depuis'],
            'The Revolution broke out in 1789.',
            { lesson: 'fr-c12-marqueurs-temporels', explanation: 'En + year.' },
          ),
          gap(
            't2',
            'Elle étudie l’histoire ___ dix ans.',
            'depuis',
            ['depuis', 'pendant', 'il y a', 'dans'],
            'She has been studying history for ten years.',
            {
              lesson: 'fr-c12-marqueurs-temporels',
              explanation: 'Depuis + duration for something that continues now.',
              why: { pendant: 'Pendant would suit a finished period; she still studies it.' },
            },
          ),
          gap(
            't3',
            'Les soldats ont combattu ___ quatre ans.',
            'pendant',
            ['pendant', 'depuis', 'il y a', 'dans'],
            'The soldiers fought for four years.',
            { lesson: 'fr-c12-marqueurs-temporels', explanation: 'Pendant + a finished duration.' },
          ),
          gap(
            't4',
            'Napoléon est mort ___ plus de deux siècles.',
            'il y a',
            ['il y a', 'depuis', 'dans', 'pendant'],
            'Napoleon died more than two centuries ago.',
            {
              lesson: 'fr-c12-marqueurs-temporels',
              explanation: 'Il y a + duration looks back from today.',
            },
          ),
          gap(
            't5',
            'Le musée rouvrira ___ une semaine.',
            'dans',
            ['dans', 'il y a', 'depuis', 'pendant'],
            'The museum will reopen in a week.',
            {
              lesson: 'fr-c12-marqueurs-temporels',
              explanation: 'Dans + duration looks ahead from today.',
            },
          ),
          gap(
            't6',
            '___ 1962, l’Algérie est indépendante.',
            'Depuis',
            ['Depuis', 'Pendant', 'Il y a', 'Dans'],
            'Since 1962 Algeria has been independent.',
            {
              lesson: 'fr-c12-marqueurs-temporels',
              explanation: 'Depuis + a date marks the starting point of a continuing state.',
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
      'Put the words in order – reported speech and time markers.',
      ['grammar', 'fr-c12-concordance', 'fr-c12-marqueurs-temporels'],
      3,
      {
        items: [
          sent(
            's1',
            'Il a dit qu’il visiterait le musée.',
            'He said he would visit the museum.',
            'fr-c12-concordance',
          ),
          sent(
            's2',
            'Elle a expliqué que le roi régnait depuis dix ans.',
            'She explained that the king had been reigning for ten years.',
            'fr-c12-concordance',
          ),
          sent(
            's3',
            'Ils ont appris que le traité avait été signé.',
            'They learned that the treaty had been signed.',
            'fr-c12-concordance',
          ),
          sent(
            's4',
            'La guerre a duré pendant six ans.',
            'The war lasted six years.',
            'fr-c12-marqueurs-temporels',
          ),
          sent(
            's5',
            'Nous vivons ici depuis quarante ans.',
            'We have lived here for forty years.',
            'fr-c12-marqueurs-temporels',
          ),
          sent(
            's6',
            'Le château rouvrira dans trois mois.',
            'The castle will reopen in three months.',
            'fr-c12-marqueurs-temporels',
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
      ['spelling', 'fr-c12-history'],
      2,
      {
        items: [
          scrambled('p1', 'bataille', 'battle', '🛡️'),
          scrambled('p2', 'monarchie', 'monarchy', '👑'),
          typed('p3', 'le témoignage', 'testimony', '🗣️'),
          typed('p4', 'le patrimoine', 'heritage', '🏛️'),
          dictated('p5', 'le devoir de mémoire', 'duty to remember'),
          dictated('p6', 'la décolonisation', 'decolonisation'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'Talking about history',
      'Three conversations: a museum, a family story and an exam.',
      ['communication', 'fr-c12-history'],
      3,
      {
        scenes: [
          scene(
            'museum',
            'At the museum',
            '🏛️',
            'You join a guided tour.',
            npc(
              'La guide',
              'Ce château a été bâti il y a huit cents ans.',
              'This castle was built eight hundred years ago.',
            ),
            you(
              'Et depuis quand est-il ouvert au public ?',
              [
                'Et pendant quand est-il ouvert au public ?',
                'Pendant cannot ask about the starting point; use depuis quand.',
              ],
              ['Je n’aime pas les musées.', 'It does not continue the conversation.'],
            ),
            npc(
              'La guide',
              'Depuis 1950. On y a découvert des archives il y a dix ans.',
              'Since 1950. Archives were found there ten years ago.',
            ),
            you(
              'Intéressant ! Vous avez dit qu’on pourrait les consulter ?',
              [
                'Intéressant ! Vous avez dit qu’on pourra les consulter ?',
                'After a past verb of saying, the future becomes the conditionnel: pourrait.',
              ],
              ['Intéressant ! Je dis qu’on consultait.', 'Wrong tenses and no real question.'],
            ),
          ),
          scene(
            'family',
            'A family story',
            '👵',
            'Your grandmother tells you about the war.',
            npc(
              'Mamie',
              'En 1944, mon père m’a dit qu’il partirait avec la Résistance.',
              'In 1944 my father told me he would leave with the Resistance.',
            ),
            you(
              'Il t’avait prévenue avant de partir ?',
              [
                'Il t’a prévenue avant de partait ?',
                'After avant de use the infinitive: avant de partir.',
              ],
              ['Il te prévenait dans mille ans ?', 'It makes no sense.'],
            ),
            npc(
              'Mamie',
              'Oui. Il m’a expliqué qu’il avait signé un engagement la veille.',
              'Yes. He explained that he had signed a commitment the day before.',
            ),
            you(
              'C’est un beau témoignage, mamie. Il faut le garder pour la mémoire de la famille.',
              [
                'C’est un beau témoignage, mamie. Il faut qu’on le garde pas.',
                'Il faut que needs the subjunctive and the negation is wrong here.',
              ],
              ['Ce n’est pas intéressant.', 'Cold – not a good answer to a grandmother.'],
            ),
          ),
          scene(
            'exam',
            'A history oral exam',
            '🎓',
            'The examiner asks about the Revolution.',
            npc(
              'L’examinatrice',
              'Quand la Révolution française a-t-elle commencé ?',
              'When did the French Revolution begin?',
            ),
            you(
              'Elle a éclaté en 1789, et elle a duré pendant dix ans.',
              [
                'Elle a éclaté dans 1789, et elle a duré depuis dix ans.',
                'En + year, and pendant for a finished duration.',
              ],
              ['Je ne sais pas, madame.', 'Honest but it earns no points.'],
            ),
            npc(
              'L’examinatrice',
              'Que disaient les historiens à ce sujet ?',
              'What did historians say about this?',
            ),
            you(
              'Ils disaient que cet événement marquerait un tournant dans l’histoire.',
              [
                'Ils disaient que cet événement marquera un tournant dans l’histoire.',
                'After the imparfait, the future shifts to the conditionnel.',
              ],
              [
                'Ils disent que cet événement a marqué.',
                'The question is about what they used to say.',
              ],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'History blitz',
      'True or false? Words, reported speech and time markers.',
      ['grammar', 'fr-c12-concordance', 'fr-c12-marqueurs-temporels'],
      [
        tf('b1', 'After “Il a dit que”, a present idea becomes the imparfait.', true),
        tf('b2', 'After “Il a dit que”, a future idea becomes the conditionnel.', true),
        tf('b3', 'After “Il a dit que”, a past idea becomes the plus-que-parfait.', true),
        tf(
          'b4',
          'After “Il dit que”, the verb of the reported clause must shift.',
          false,
          'With a present reporting verb nothing shifts.',
        ),
        tf('b5', '“Depuis” is used for something that still continues.', true),
        tf('b6', '“Il y a” looks back from today; “dans” looks ahead.', true),
        tf('b7', '“Un siècle” is a period of fifty years.', false, 'A century is a hundred years.'),
        tf('b8', '“Le patrimoine” is the heritage of a country.', true),
        tf('b9', '“Les archives” are old documents kept for history.', true),
        tf('b10', '“Commémorer” means to forget.', false, 'It means to remember with a ceremony.'),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-history'],
      [
        q('c1', '“Le soulèvement” means …', 'uprising', ['treaty', 'battle', 'reign']),
        q('c2', 'Il a dit qu’il ___ le lendemain.', 'viendrait', ['viendra', 'venait', 'vient'], {
          lesson: 'fr-c12-concordance',
        }),
        q('c3', 'La guerre a duré ___ cinq ans.', 'pendant', ['depuis', 'dans', 'il y a'], {
          lesson: 'fr-c12-marqueurs-temporels',
        }),
        q(
          'c4',
          'Elle m’a dit qu’elle ___ le musée la veille.',
          'avait visité',
          ['visitait', 'visiterait', 'visite'],
          {
            lesson: 'fr-c12-concordance',
          },
        ),
        q('c5', '“Tomber dans l’oubli” means …', 'to be forgotten', [
          'to be celebrated',
          'to be built',
          'to be signed',
        ]),
        q('c6', 'Le musée ouvre ___ trois jours.', 'dans', ['il y a', 'depuis', 'pendant'], {
          lesson: 'fr-c12-marqueurs-temporels',
        }),
        q(
          'c7',
          'Which marker means “since 1962”?',
          'depuis 1962',
          ['pendant 1962', 'il y a 1962', 'dans 1962'],
          {
            lesson: 'fr-c12-marqueurs-temporels',
          },
        ),
        q('c8', '“La Libération” refers to …', 'the end of the occupation in 1944', [
          'the abolition of slavery',
          'the Renaissance',
          'the Revolution of 1789',
        ]),
      ],
    ),
  ],
};
