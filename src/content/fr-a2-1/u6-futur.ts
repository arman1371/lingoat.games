import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  futurTable,
  gaps,
  meta,
  quizRows,
  say,
  sentRows,
  sortCards,
  spellRows,
  tfRows,
  unitFr21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-futur';

const tech = vocabList(U, 'Technology of tomorrow', [
  ['le robot', 'robot', '🤖'],
  ['la voiture électrique', 'electric car', '🔋'],
  ['le drone', 'drone', '🚁'],
  ['le panneau solaire', 'solar panel', '🔆'],
  ['l’imprimante 3D', '3D printer', '🖨️'],
  ['l’intelligence artificielle', 'artificial intelligence', '🦾'],
  ['le télétravail', 'working from home', '🧑‍💻'],
  ['la ville intelligente', 'smart city', '🏙️'],
  ['la planète', 'planet', '🪐'],
  ['la fusée', 'rocket', '🚀'],
  ['le satellite', 'satellite', '🛰️'],
  ['le casque de réalité virtuelle', 'VR headset', '🥽'],
]);

const ideas = vocabList(U, 'Plans and predictions', [
  ['l’avenir', 'future', '🔮'],
  ['la prédiction', 'prediction', '🃏'],
  ['le projet', 'plan / project', '📐'],
  ['l’espoir', 'hope', '🌅'],
  ['l’ambition', 'ambition', '🎯'],
  ['le progrès', 'progress', '📈'],
  ['l’inventeur', 'inventor', '🧑‍🔬'],
  ['le défi', 'challenge', '🏁'],
  ['la découverte', 'discovery', '🔬'],
  ['l’horoscope', 'horoscope', '♈'],
]);

const verbs = vocabList(U, 'Verbs of the future', [
  ['prévoir', 'to forecast / to plan', '🔭'],
  ['espérer', 'to hope', '🤞'],
  ['imaginer', 'to imagine', '🎨'],
  ['inventer', 'to invent', '💡'],
  ['découvrir', 'to discover', '🧭'],
  ['remplacer', 'to replace', '🔄'],
  ['disparaître', 'to disappear', '🫥'],
  ['permettre de', 'to allow / to make it possible to', '✅'],
  ['servir à', 'to be used for', '🛠️'],
]);

const phrases = vocabList(U, 'Talking about tomorrow', [
  ['À quoi ça sert ?', 'What is it used for?', '❓'],
  ['Ça sert à voyager.', 'It is used for travelling.', '🧳'],
  ['C’est fait pour aider.', 'It is made to help.', '🤝'],
  ['À l’avenir, …', 'In the future, …', '🔭'],
  ['Dans dix ans, …', 'In ten years, …', '🔟'],
  ['Un jour, …', 'One day, …', '🌤️'],
  ['Qui vivra verra.', 'Time will tell.', '⏳'],
  ['J’ai l’intention de partir.', 'I intend to leave.', '🚪'],
  ['Je prévois de déménager.', 'I plan to move.', '📦'],
  ['On verra bien.', 'We’ll see.', '🤷'],
]);

const vocab = [...tech, ...ideas, ...verbs, ...phrases];

const FUT = 'fr-a21-futur' as const;
const IRR = 'fr-a21-futur-irregular' as const;
const SI = 'fr-a21-si-futur' as const;

export const futur: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 6,
    title: 'Vers le futur',
    subtitle: 'Make predictions and plans, say what things are for, talk about technology',
    emoji: '🚀',
    goals: [
      'Predict and plan with the futur simple',
      'Use the irregular future stems',
      'Say what happens if: si + present + future',
    ],
    grammar: ['The futur simple', 'Irregular future stems', 'si + présent + futur'],
    vocabFields: [
      'Technology of tomorrow',
      'Plans and predictions',
      'Verbs of the future',
      'Talking about tomorrow',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-tech',
      'flashcards',
      meta(
        'Technology of tomorrow',
        'Robots, drones, solar panels and rockets.',
        ['vocabulary', 'future-technology'],
        1,
        3,
      ),
      flashcards(tech),
    ),

    activity(
      U,
      'flash-ideas',
      'flashcards',
      meta(
        'Plans and predictions',
        'Words for the future, hopes and discoveries.',
        ['vocabulary', 'future-technology', 'plans-wishes'],
        1,
        3,
      ),
      flashcards(ideas),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the invention or the idea from the picture.',
        ['vocabulary', 'future-technology'],
        1,
        3,
      ),
      quizEmoji([...tech.slice(0, 8), ...ideas.slice(0, 2)], [...tech, ...ideas]),
    ),

    activity(
      U,
      'listen-future',
      'listen',
      meta(
        'Listen: the future',
        'Listen to the word and pick its meaning.',
        ['listening', 'future-technology'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'la fusée', 'le satellite', 'le progrès', 'le défi'),
          ...byDe(vocab, 'inventer', 'remplacer', 'disparaître', 'espérer'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-future',
      'memory',
      meta(
        'Future memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'future-technology'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'le drone', 'la planète', 'l’avenir', 'l’espoir'),
        ...byDe(vocab, 'prévoir', 'imaginer', 'découvrir', 'servir à'),
      ]),
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Talking about tomorrow',
        'Verbs and phrases for predictions, plans and uses.',
        ['vocabulary', 'communication', 'plans-wishes'],
        1,
        3,
      ),
      flashcards([...verbs, ...phrases]),
    ),

    activity(
      U,
      'conj-futur',
      'conjugation',
      meta(
        'The futur simple',
        'The infinitive plus -ai, -as, -a, -ons, -ez, -ont.',
        ['grammar', FUT],
        2,
        4,
      ),
      {
        tables: [
          futurTable('parler', 'to speak', ['je', 'nous', 'ils/elles']),
          futurTable('finir', 'to finish', ['tu', 'il/elle/on', 'vous']),
          futurTable('prendre', 'to take', ['je', 'nous', 'ils/elles']),
          futurTable('être', 'to be', ['je', 'il/elle/on', 'vous']),
          futurTable('aller', 'to go', ['tu', 'nous', 'ils/elles']),
          futurTable('faire', 'to do / to make', ['je', 'vous', 'il/elle/on']),
        ],
      },
    ),

    activity(
      U,
      'gap-futur',
      'gapfill',
      meta(
        'Predict with the future',
        'Complete the regular futur simple.',
        ['grammar', FUT, 'future-technology'],
        2,
        4,
      ),
      {
        items: gaps('f', FUT, [
          [
            'L’an prochain, nous ___ en Italie.',
            'voyagerons',
            ['voyagerons', 'voyageons', 'voyagerez', 'voyageront'],
            'Next year we will travel to Italy.',
            'Infinitive + ons.',
          ],
          [
            'Dans dix ans, les robots nous ___ à la maison.',
            'aideront',
            ['aideront', 'aident', 'aiderons', 'aidera'],
            'In ten years robots will help us at home.',
            'Ils/elles: infinitive + ont.',
          ],
          [
            'Tu ___ ton projet la semaine prochaine.',
            'finiras',
            ['finiras', 'finis', 'finira', 'finirez'],
            'You will finish your project next week.',
            'Tu: infinitive + as.',
          ],
          [
            'Elle ___ le train de huit heures.',
            'prendra',
            ['prendra', 'prendras', 'prendrai', 'prendrait'],
            'She will take the eight o’clock train.',
            'Prendre loses its final -e: prendr- + a.',
          ],
          [
            'Vous ___ une application pour ça.',
            'utiliserez',
            ['utiliserez', 'utilisez', 'utiliserons', 'utiliseront'],
            'You will use an app for that.',
            'Vous: infinitive + ez.',
          ],
          [
            'Nous ___ nos projets demain.',
            'choisirons',
            ['choisirons', 'choisissons', 'choisirez', 'choisiront'],
            'We will choose our plans tomorrow.',
            'Choisir + ons.',
          ],
          [
            'Les villes ___ plus vertes.',
            'deviendront',
            ['deviendront', 'deviennent', 'devienneront', 'deviendrons'],
            'Cities will become greener.',
            'Devenir has the stem viendr- like venir.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sort-tense',
      'sortit',
      meta(
        'Near or far future?',
        'Sort the sentences: futur proche (aller + infinitive) or futur simple?',
        ['grammar', FUT],
        3,
        4,
      ),
      {
        instruction: 'Is the sentence in the futur proche or in the futur simple?',
        buckets: [
          { id: 'near', label: 'Futur proche', emoji: '⏩' },
          { id: 'simple', label: 'Futur simple', emoji: '🔭' },
        ],
        items: sortCards('s', [
          ['Je vais prendre le train.', 'near', 'I am going to take the train.'],
          ['Il va pleuvoir.', 'near', 'It is going to rain.'],
          ['Nous allons déménager.', 'near', 'We are going to move.'],
          ['Tu vas rater ton bus !', 'near', 'You are going to miss your bus!'],
          ['Elle va t’appeler.', 'near', 'She is going to call you.'],
          ['Je prendrai le train.', 'simple', 'I will take the train.'],
          ['Il pleuvra demain.', 'simple', 'It will rain tomorrow.'],
          ['Nous déménagerons l’an prochain.', 'simple', 'We will move next year.'],
          ['Tu réussiras !', 'simple', 'You will succeed!'],
          ['Elle t’appellera.', 'simple', 'She will call you.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-irregular',
      'gapfill',
      meta(
        'Irregular futures',
        'Être, aller, faire, pouvoir, voir, venir: learn the stems.',
        ['grammar', IRR],
        3,
        4,
      ),
      {
        items: gaps('g', IRR, [
          [
            'Demain, il ___ beau.',
            'fera',
            ['fera', 'fait', 'ferait', 'faira'],
            'Tomorrow the weather will be fine.',
            'Faire → fer-.',
          ],
          [
            'Nous ___ à Paris le mois prochain.',
            'irons',
            ['irons', 'allons', 'aurons', 'irez'],
            'We will go to Paris next month.',
            'Aller → ir-.',
          ],
          [
            'Je ___ là à huit heures.',
            'serai',
            ['serai', 'suis', 'aurai', 'serez'],
            'I will be there at eight.',
            'Être → ser-.',
          ],
          [
            'Tu ___ venir avec nous ?',
            'pourras',
            ['pourras', 'peux', 'pouvais', 'pourra'],
            'Will you be able to come with us?',
            'Pouvoir → pourr-.',
          ],
          [
            'Ils ___ une grande maison.',
            'auront',
            ['auront', 'ont', 'aurons', 'avront'],
            'They will have a big house.',
            'Avoir → aur-.',
          ],
          [
            'Vous ___ la fusée dans le ciel.',
            'verrez',
            ['verrez', 'voyez', 'voirez', 'verrons'],
            'You will see the rocket in the sky.',
            'Voir → verr- (two r).',
          ],
          [
            'Elle ___ nous voir demain.',
            'viendra',
            ['viendra', 'viendrait', 'venira', 'vient'],
            'She will come and see us tomorrow.',
            'Venir → viendr-.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'gap-si',
      'gapfill',
      meta(
        'If … then',
        'After si use the present; the result is in the futur simple.',
        ['grammar', SI],
        3,
        4,
      ),
      {
        items: gaps('i', SI, [
          [
            'Si j’ai le temps, je ___ à la fête.',
            'viendrai',
            ['viendrai', 'viens', 'viendrais', 'venais'],
            'If I have time, I will come to the party.',
            'Result: futur simple.',
          ],
          [
            'S’il fait beau, nous ___ à la plage.',
            'irons',
            ['irons', 'allons', 'allions', 'irions'],
            'If the weather is fine, we will go to the beach.',
            'Aller → ir-.',
          ],
          [
            'Si tu pars tôt, tu ___ à l’heure.',
            'seras',
            ['seras', 'es', 'étais', 'serait'],
            'If you leave early, you will be on time.',
            'Être → ser-, tu → -as.',
          ],
          [
            'Si elle étudie, elle ___ son examen.',
            'réussira',
            ['réussira', 'réussit', 'réussirait', 'réussissait'],
            'If she studies, she will pass her exam.',
            'Réussir + a.',
          ],
          [
            'Si vous ___ cette application, vous gagnerez du temps.',
            'utilisez',
            ['utilisez', 'utiliserez', 'utilisiez', 'utiliser'],
            'If you use this app, you will save time.',
            'After si: present, not the future.',
          ],
          [
            'Si les robots ___ le travail, nous aurons plus de loisirs.',
            'font',
            ['font', 'feront', 'faisaient', 'faisons'],
            'If robots do the work, we will have more free time.',
            'After si: present (ils font).',
          ],
          [
            'Si nous ne ___ rien, la planète souffrira.',
            'faisons',
            ['faisons', 'ferons', 'faisions', 'faites'],
            'If we do nothing, the planet will suffer.',
            'After si: present (nous faisons).',
          ],
        ]),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of a prediction in the right order.',
        ['grammar', 'future-technology'],
        2,
        4,
      ),
      {
        items: sentRows('s', [
          [
            FUT,
            'Next year we will travel to Italy.',
            ['L’année', 'prochaine,', 'nous', 'voyagerons', 'en', 'Italie.'],
            ['voyageons'],
          ],
          [
            FUT,
            'In ten years robots will help us.',
            ['Dans', 'dix', 'ans,', 'les', 'robots', 'nous', 'aideront.'],
            ['aident'],
          ],
          [
            SI,
            'If it is sunny, we will go to the beach.',
            ['S’il', 'fait', 'beau,', 'nous', 'irons', 'à', 'la', 'plage.'],
            ['allons'],
          ],
          [
            IRR,
            'I will be there at eight.',
            ['Je', 'serai', 'là', 'à', 'huit', 'heures.'],
            ['suis'],
          ],
          [IRR, 'You will be able to come.', ['Tu', 'pourras', 'venir.'], ['peux']],
          [
            SI,
            'If we leave early, we will arrive on time.',
            ['Si', 'on', 'part', 'tôt,', 'nous', 'arriverons', 'à', 'l’heure.'],
            ['arrivons'],
          ],
        ]),
      },
    ),

    activity(
      U,
      'spell-future',
      'spell',
      meta(
        'Spell the future words',
        'Unscramble and type words about technology. Accents are optional here.',
        ['spelling', 'future-technology'],
        2,
        3,
      ),
      {
        items: spellRows('sp', [
          ['unscramble', 'avenir', 'future', '🔮', 'l’avenir'],
          ['unscramble', 'fusée', 'rocket', '🚀', 'la fusée'],
          ['type', 'robot', 'robot', '🤖', 'le robot'],
          ['type', 'planète', 'planet', '🪐', 'la planète'],
          ['type', 'inventeur', 'inventor', '🧑‍🔬', 'l’inventeur'],
        ]),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Tomorrow',
        'Predict life in fifty years, make a conditional plan and ask what a gadget is for.',
        ['communication', 'future-technology'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'predictions',
            title: 'Life in fifty years',
            emoji: '🔮',
            setting: 'You chat with Inès about the future. You say tu.',
            turns: [
              say(
                'Inès',
                'Comment sera la vie dans cinquante ans ?',
                'What will life be like in fifty years?',
              ),
              you(
                'Les voitures seront électriques et nous travaillerons à la maison.',
                [
                  'Les voitures sont électriques et nous travaillons à la maison.',
                  'For a prediction use the futur simple: seront, travaillerons.',
                ],
                [
                  'Les voitures seront électriques et nous travaillerez à la maison.',
                  'Nous ends in -ons: nous travaillerons.',
                ],
              ),
              say('Inès', 'Et les robots, ils feront quoi ?', 'And the robots, what will they do?'),
              you(
                'Ils nous aideront, mais ils ne remplaceront pas les humains.',
                [
                  'Ils nous aideront, mais ils ne remplacera pas les humains.',
                  'Ils takes -ont: ils remplaceront.',
                ],
                [
                  'Ils nous aideront, mais ils ne remplacent pas les humains.',
                  'The present does not express the future: ils ne remplaceront pas.',
                ],
              ),
            ],
          },
          {
            id: 'plans',
            title: 'If I have time',
            emoji: '🎉',
            setting: 'A friend invites you to a party. You say tu.',
            turns: [
              say(
                'Sami',
                'Tu viens à la fête samedi ?',
                'Are you coming to the party on Saturday?',
              ),
              you(
                'Si j’ai le temps, je viendrai.',
                [
                  'Si j’aurai le temps, je viendrai.',
                  'After si use the present: si j’ai le temps.',
                ],
                [
                  'Si j’ai le temps, je viens.',
                  'A plan for later takes the futur simple: je viendrai.',
                ],
              ),
              say('Sami', 'Et s’il pleut ?', 'And if it rains?'),
              you(
                'S’il pleut, nous resterons à la maison.',
                ['Si il pleut, nous resterons à la maison.', 'Si + il becomes s’il.'],
                [
                  'S’il pleuvra, nous resterons à la maison.',
                  'After si use the present: s’il pleut.',
                ],
              ),
            ],
          },
          {
            id: 'gadget',
            title: 'What is it for?',
            emoji: '🚁',
            setting: 'A shop assistant shows you a drone. You say vous.',
            turns: [
              say('Le vendeur', 'Voici notre nouveau drone !', 'Here is our new drone!'),
              you(
                'À quoi ça sert ?',
                ['Pour quoi ça sert ?', 'Servir à: à quoi ça sert ?'],
                ['À quoi ça servez ?', 'Ça is a third person: ça sert.'],
              ),
              say(
                'Le vendeur',
                'Ça sert à filmer des paysages. Vous l’utiliserez souvent !',
                'It is used to film landscapes. You will use it often!',
              ),
              you(
                'Bonne idée, je l’achèterai demain.',
                [
                  'Bonne idée, je l’achèterais demain.',
                  'The futur simple ends in -ai: j’achèterai.',
                ],
                ['Bonne idée, je l’achète demain.', 'For a plan use the future: j’achèterai.'],
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
        'Future blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'future-technology', FUT],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: tfRows('b', [
          ['“Je parlerai” is the futur simple of parler.', true],
          ['“Nous finirons” is the futur simple of finir.', true],
          ['“Il sera” is the futur simple of être.', true],
          ['“J’aurai” is the futur simple of aller.', false, 'J’irai is aller; j’aurai is avoir.'],
          ['“Tu feras” is the futur simple of faire.', true],
          ['“Elles pourront” is correct.', true],
          ['“Vous verrez” has one r.', false, 'Voir has two r: verr-.'],
          ['“Si tu viendras” is correct.', false, 'After si use the present: si tu viens.'],
          ['“S’il pleut, je resterai” is correct.', true],
          ['“Le drone” is a robot.', false, 'A drone is un drone.'],
          ['“À quoi ça sert ?” asks what something is used for.', true],
          ['“Qui vivra verra” means “time will tell”.', true],
        ]),
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'future-technology'],
        3,
        4,
      ),
      {
        questions: quizRows('c', [
          ['Complete: “Demain, je ___ au cinéma.”', 'irai', ['vais', 'allerai', 'aurai'], IRR],
          ['Complete: “Nous ___ à huit heures.”', 'serons', ['sommes', 'étions', 'serez'], IRR],
          [
            'Complete: “Elle ___ le premier prix.”',
            'gagnera',
            ['gagne', 'gagnerons', 'gagnait'],
            FUT,
          ],
          [
            'Complete: “Si tu as faim, tu ___ une pizza.”',
            'mangeras',
            ['manges', 'mangeais', 'mangerais'],
            SI,
          ],
          [
            'Which sentence is correct?',
            'Si elle vient, nous irons au parc.',
            [
              'Si elle viendra, nous irons au parc.',
              'Si elle vient, nous allerons au parc.',
              'Si elle viendrait, nous irons au parc.',
            ],
            SI,
          ],
          [
            '“Le télétravail” is …',
            'working from home',
            ['a type of robot', 'a rocket', 'a holiday'],
          ],
          [
            '“Dans dix ans” means …',
            'in ten years',
            ['ten years ago', 'for ten years', 'every ten years'],
          ],
          [
            '“Ça sert à” introduces …',
            'what a thing is used for',
            ['a past event', 'a person’s name', 'a refusal'],
          ],
        ]),
      },
    ),
  ],
};
