import { byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  activity,
  cards,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  tf,
  typed,
  unitFrC22,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c2-2-climat';
const LESSON = 'fr-c22-accord-quantite' as const;

const climat = vocabList(U, 'Climate and energy', [
  ['le réchauffement climatique', 'global warming', '🌡️'],
  ['l’empreinte carbone', 'carbon footprint', '👣'],
  ['les gaz à effet de serre', 'greenhouse gases', '🏭'],
  ['la transition énergétique', 'energy transition', '🔋'],
  ['le panneau solaire', 'solar panel', '☀️'],
  ['la sobriété énergétique', 'energy sufficiency, using less', '💡'],
  ['la rénovation thermique', 'energy-efficiency retrofit', '🏠'],
  ['la neutralité carbone', 'carbon neutrality', '⚖️'],
  ['la canicule', 'heatwave', '🔥'],
  ['la montée des eaux', 'sea-level rise', '🌊'],
  ['le puits de carbone', 'carbon sink', '🌳'],
  ['la fonte des glaciers', 'melting of glaciers', '🧊'],
  ['l’adaptation', 'adaptation (to climate change)', '🛠️'],
]);

const nature = vocabList(U, 'Biodiversity and resources', [
  ['la biodiversité', 'biodiversity', '🦋'],
  ['l’espèce menacée', 'endangered species', '🐘'],
  ['la déforestation', 'deforestation', '🪓'],
  ['la surpêche', 'overfishing', '🎣'],
  ['l’écosystème', 'ecosystem', '🌿'],
  ['le microplastique', 'microplastic', '🧪'],
  ['les pesticides', 'pesticides', '☠️'],
  ['la nappe phréatique', 'groundwater table', '💧'],
  ['l’érosion des sols', 'soil erosion', '🏔️'],
  ['le braconnage', 'poaching', '🐾'],
  ['la réintroduction', 'reintroduction (of a species)', '🐺'],
  ['la zone protégée', 'protected area', '🛡️'],
  ['la pollinisation', 'pollination', '🐝'],
]);

const vocab = [...climat, ...nature];
const grammarTags = ['grammar', LESSON, 'fr-c22-climat'] as const;

export const climatUnit: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 8,
    title: 'Climat et environnement',
    subtitle: 'Discuss climate, energy and nature, and make verbs agree after quantifiers',
    emoji: '🌍',
    goals: [
      'Explain climate change, energy choices and their effects',
      'Describe biodiversity, resources and protection measures',
      'Make the verb agree after la plupart, un grand nombre de, plus d’un and with tout',
    ],
    grammar: [
      'La plupart des / bon nombre de / un grand nombre de + plural noun: plural verb.',
      'La plupart du + singular noun: singular verb; la plupart alone: plural.',
      'Plus d’un: singular verb. Collectives (une foule de…): singular or plural.',
      'Tout as adjective, pronoun and adverb: tout petit, toutes petites.',
    ],
    vocabFields: ['Climate and energy', 'Biodiversity and resources'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-climat',
      'flashcards',
      meta(
        'Climate and energy',
        'Empreinte carbone, sobriété, canicule: the language of the climate debate.',
        ['vocabulary', 'fr-c22-climat'],
        1,
        4,
      ),
      flashcards(climat),
    ),

    activity(
      U,
      'flash-nature',
      'flashcards',
      meta(
        'Biodiversity and resources',
        'Surpêche, braconnage, pollinisation: the words of nature protection.',
        ['vocabulary', 'fr-c22-climat'],
        1,
        4,
      ),
      flashcards(nature),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Climate in pictures',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-climat'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          climat,
          'le réchauffement climatique',
          'l’empreinte carbone',
          'le panneau solaire',
          'la rénovation thermique',
          'la canicule',
          'la montée des eaux',
          'le puits de carbone',
          'la fonte des glaciers',
        ),
      ),
    ),

    activity(
      U,
      'listen-nature',
      'listen',
      meta(
        'Hear the ecologist',
        'Listen and pick the meaning.',
        ['listening', 'fr-c22-climat'],
        2,
        4,
      ),
      listen(nature),
    ),

    activity(
      U,
      'memory-nature',
      'memory',
      meta(
        'Nature memory',
        'Match each environment term with its meaning.',
        ['vocabulary', 'fr-c22-climat'],
        2,
        4,
      ),
      memory(
        byDe(
          nature,
          'la biodiversité',
          'l’espèce menacée',
          'la déforestation',
          'la surpêche',
          'l’écosystème',
          'le microplastique',
          'la nappe phréatique',
          'la zone protégée',
        ),
      ),
    ),

    activity(
      U,
      'spell-climat',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-climat'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-canicule',
            mode: 'unscramble',
            answer: 'canicule',
            hint: 'heatwave',
            emoji: '🔥',
            speak: 'la canicule',
          },
          {
            id: 'sp-biodiversite',
            mode: 'unscramble',
            answer: 'biodiversité',
            hint: 'biodiversity',
            emoji: '🦋',
            speak: 'la biodiversité',
          },
          {
            id: 'sp-surpeche',
            mode: 'type',
            answer: 'surpêche',
            hint: 'overfishing',
            emoji: '🎣',
            speak: 'la surpêche',
          },
          {
            id: 'sp-braconnage',
            mode: 'type',
            answer: 'braconnage',
            hint: 'poaching',
            emoji: '🐾',
            speak: 'le braconnage',
          },
          dictation('d1', 'La plupart des espèces sont menacées.', 'Most species are threatened.'),
          dictation(
            'd2',
            'Plus d’un agriculteur a changé de méthode.',
            'More than one farmer has changed method.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-accord',
      'gapfill',
      meta('Which verb form?', 'Choose the form that agrees.', [...grammarTags], 2, 6),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'La plupart des espèces ___ menacées.',
              'sont',
              ['sont', 'est', 'était', 'soit'],
              'Most species are threatened.',
              'After la plupart des + plural noun, the verb is plural.',
            ),
            {
              est: 'The verb agrees with the plural noun espèces, not with la plupart.',
              était: 'Singular and in the imperfect: it does not fit.',
              soit: 'This is a subjunctive form and singular.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'La plupart du pays ___ en alerte rouge.',
              'est',
              ['est', 'sont', 'soit', 'étaient'],
              'Most of the country is on red alert.',
              'After la plupart du + singular noun, the verb is singular.',
            ),
            {
              sont: 'Pays is singular here (du pays), so the verb is singular.',
              soit: 'This is a subjunctive form.',
              étaient: 'Plural: it does not agree with pays.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Un grand nombre d’espèces ___ en danger.',
              'sont',
              ['sont', 'est', 'soit', 'sera'],
              'A large number of species are in danger.',
              'Un grand nombre de + plural noun takes a plural verb.',
            ),
            {
              est: 'The verb agrees with the plural noun espèces.',
              soit: 'This is a subjunctive form and singular.',
              sera: 'Singular future: it does not agree with espèces.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Plus d’un agriculteur ___ déjà changé de méthode.',
              'a',
              ['a', 'ont', 'avons', 'aient'],
              'More than one farmer has already changed method.',
              'Plus d’un takes a singular verb.',
            ),
            {
              ont: 'Plus d’un is followed by a singular verb in standard French.',
              avons: 'This is a first person plural form.',
              aient: 'A plural subjunctive does not fit.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Elle était ___ contente du résultat de la conférence.',
              'toute',
              ['toute', 'tout', 'tous', 'toutes'],
              'She was quite pleased with the outcome of the conference.',
              'Before a feminine adjective that starts with a consonant, tout agrees: toute contente.',
            ),
            {
              tout: 'Tout stays invariable before a masculine adjective, not before a feminine one with a consonant.',
              tous: 'Tous is masculine plural.',
              toutes: 'Elle is singular: toute, not toutes.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Ces glaciers, autrefois immenses, sont aujourd’hui ___ petits.',
              'tout',
              ['tout', 'tous', 'toute', 'toutes'],
              'These glaciers, once immense, are quite small today.',
              'Before a masculine adjective, the adverb tout does not change.',
            ),
            {
              tous: 'Tous would mean “all of them are small”, a different idea.',
              toute: 'Toute is feminine singular.',
              toutes: 'Toutes is feminine plural.',
            },
          ),
          typed(
            't1',
            'La plupart des habitants ___ prêts à changer leurs habitudes.',
            'sont',
            'Most inhabitants are ready to change their habits.',
            'La plupart des + plural noun: plural verb.',
          ),
          typed(
            't2',
            'Bon nombre de communes ___ déjà adopté un plan climat.',
            'ont',
            'Many towns have already adopted a climate plan.',
            'Bon nombre de + plural noun: plural verb.',
          ),
          typed(
            't3',
            'Plus d’une commune ___ signé la charte.',
            'a',
            'More than one town has signed the charter.',
            'Plus d’un(e) takes a singular verb.',
          ),
          typed(
            't4',
            'Les vagues étaient ___ grandes ce soir-là.',
            'toutes',
            'The waves were very big that evening.',
            'Before a feminine plural adjective with a consonant, tout agrees: toutes grandes.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-accord',
      'sortit',
      meta(
        'Singular, plural or both?',
        'Which verb form follows the quantifier?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'Which verb number is used?',
        buckets: [
          { id: 'plur', label: 'Plural verb', emoji: '👥' },
          { id: 'sing', label: 'Singular verb', emoji: '👤' },
          { id: 'deux', label: 'Singular or plural', emoji: '↔️' },
        ],
        items: cards('a', [
          ['la plupart des espèces sont menacées', 'plur', 'most species are threatened'],
          ['un grand nombre de communes ont réagi', 'plur', 'many towns reacted'],
          ['la plupart n’iront pas en vacances', 'plur', 'most will not go on holiday'],
          ['bon nombre de pays ont signé', 'plur', 'many countries signed'],
          ['la plupart du personnel a fait grève', 'sing', 'most of the staff went on strike'],
          ['la plupart du pays est en alerte', 'sing', 'most of the country is on alert'],
          ['plus d’un maire a protesté', 'sing', 'more than one mayor protested'],
          ['tout le monde est concerné', 'sing', 'everybody is concerned'],
          [
            'une foule de militants a / ont bloqué la route',
            'deux',
            'a crowd of activists blocked the road',
          ],
          [
            'une dizaine de bénévoles a / ont nettoyé la plage',
            'deux',
            'about ten volunteers cleaned the beach',
          ],
          [
            'une centaine d’élèves a / ont visité la réserve',
            'deux',
            'about a hundred pupils visited the reserve',
          ],
          ['une multitude de projets existe / existent', 'deux', 'a multitude of projects exist'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Say it in French',
        'Pick the sentence with the right agreement.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'Most species are threatened.',
            'La plupart des espèces sont menacées.',
            [
              'La plupart des espèces est menacée.',
              'La plupart des espèces sont menacé.',
              'La plupart de espèces sont menacées.',
            ],
            'The verb and the adjective agree with the plural noun.',
          ),
          q(
            't2',
            'Most of the country is on red alert.',
            'La plupart du pays est en alerte rouge.',
            [
              'La plupart du pays sont en alerte rouge.',
              'La plupart de le pays est en alerte rouge.',
              'La plupart des pays est en alerte rouge.',
            ],
            'Du pays is singular, so the verb is singular.',
          ),
          q(
            't3',
            'A large number of towns have reacted.',
            'Un grand nombre de communes ont réagi.',
            [
              'Un grand nombre de communes ont réagis.',
              'Un grand nombre de commune ont réagi.',
              'Un grand nombre à communes ont réagi.',
            ],
            'Plural noun after de: plural verb, and the participle with avoir stays invariable here.',
          ),
          q(
            't4',
            'More than one mayor has protested.',
            'Plus d’un maire a protesté.',
            [
              'Plus d’un maire ont protesté.',
              'Plus d’un maires a protesté.',
              'Plus un maire a protesté.',
            ],
            'Plus d’un: singular noun and singular verb.',
          ),
          q(
            't5',
            'The islands are very small. (tout as an adverb)',
            'Les îles sont toutes petites.',
            [
              'Les îles sont tout petites.',
              'Les îles sont tous petites.',
              'Les îles sont toute petites.',
            ],
            'Before a feminine adjective starting with a consonant, tout agrees.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build the sentence', 'Put the words in the right order.', [...grammarTags], 2, 5),
      {
        items: [
          sent(
            's1',
            'Most species are threatened.',
            ['La', 'plupart', 'des', 'espèces', 'sont', 'menacées.'],
            { extra: ['est'] },
          ),
          sent(
            's2',
            'More than one farmer has changed method.',
            ['Plus', 'd’un', 'agriculteur', 'a', 'changé', 'de', 'méthode.'],
            { extra: ['ont'] },
          ),
          sent(
            's3',
            'Many towns have adopted a climate plan.',
            ['Bon', 'nombre', 'de', 'communes', 'ont', 'adopté', 'un', 'plan', 'climat.'],
            { extra: ['a'] },
          ),
          sent(
            's4',
            'Most of the time, summers are hot.',
            ['La', 'plupart', 'du', 'temps,', 'les', 'étés', 'sont', 'chauds.'],
            { extra: ['des'] },
          ),
          sent(
            's5',
            'These islands are very small.',
            ['Ces', 'îles', 'sont', 'toutes', 'petites.'],
            { extra: ['tout'] },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Expert, friend and beach',
        'Talk about the planet with the right agreement.',
        ['communication', 'fr-c22-climat'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'expert',
            title: 'Interview with an expert',
            emoji: '🎙️',
            setting: 'You are a journalist and interview an ecologist. Use vous.',
            turns: [
              say(
                'L’écologue',
                'La situation de la faune est préoccupante.',
                'The situation of wildlife is worrying.',
              ),
              you(
                'La plupart des espèces sont menacées, n’est-ce pas ?',
                [
                  'La plupart des espèces est menacée, n’est-ce pas ?',
                  'The verb agrees with the plural noun espèces.',
                ],
                [
                  'La plupart d’espèces sont menacées, n’est-ce pas ?',
                  'La plupart takes des or du, not de.',
                ],
              ),
              say(
                'L’écologue',
                'Oui, et plus d’un chercheur tire la sonnette d’alarme.',
                'Yes, and more than one researcher is sounding the alarm.',
              ),
              you(
                'Un grand nombre de pays ont signé l’accord.',
                [
                  'Un grand nombre de pays ont signés l’accord.',
                  'The participle after avoir does not agree with the subject.',
                ],
                ['Un grand nombre de pays sont signé l’accord.', 'Signer takes avoir: ont signé.'],
              ),
            ],
          },
          {
            id: 'ville',
            title: 'The city climate plan',
            emoji: '🏙️',
            setting: 'You talk to a friend about the new climate plan of your city. Use tu.',
            turns: [
              say(
                'Clara',
                'Tu as vu le plan climat de la ville ?',
                'Did you see the city’s climate plan?',
              ),
              you(
                'Oui, plus d’un quartier va changer.',
                ['Oui, plus d’un quartier vont changer.', 'Plus d’un takes a singular verb.'],
                [
                  'Oui, plus d’un quartiers va changer.',
                  'Plus d’un is followed by a singular noun.',
                ],
              ),
              say(
                'Clara',
                'Et les habitants, ils en pensent quoi ?',
                'And what do the residents think?',
              ),
              you(
                'La plupart sont pour, mais certains restent sceptiques.',
                [
                  'La plupart est pour, mais certains restent sceptiques.',
                  'Used alone, la plupart takes a plural verb.',
                ],
                [
                  'La plupart sont pour, mais certains reste sceptiques.',
                  'Certains is plural: restent.',
                ],
              ),
            ],
          },
          {
            id: 'plage',
            title: 'Cleaning the beach',
            emoji: '🏖️',
            setting: 'You talk to the organiser of a beach clean-up. Use vous.',
            turns: [
              say(
                'L’organisatrice',
                'Comment sont les vagues aujourd’hui ?',
                'What are the waves like today?',
              ),
              you(
                'Elles sont toutes petites ce matin.',
                [
                  'Elles sont tout petites ce matin.',
                  'Before a feminine adjective that starts with a consonant, tout agrees: toutes petites.',
                ],
                ['Elles sont tous petites ce matin.', 'Tous is masculine.'],
              ),
              say('L’organisatrice', 'Et le sable ?', 'And the sand?'),
              you(
                'Il est tout propre : tout le monde a aidé.',
                [
                  'Il est tout propre : tout le monde ont aidé.',
                  'Tout le monde takes a singular verb.',
                ],
                [
                  'Il est tout propre : tous le monde a aidé.',
                  'Tout le monde is a fixed expression.',
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
        'Climate and agreement blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-climat'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'La plupart des + plural noun takes a plural verb.', true),
          tf('b2', 'La plupart du personnel is followed by a singular verb.', true),
          tf('b3', 'Used alone, la plupart takes a plural verb.', true),
          tf('b4', 'After un grand nombre de + plural noun the verb is plural.', true),
          tf(
            'b5',
            'Plus d’un takes a plural verb.',
            false,
            'Plus d’un usually takes a singular verb: plus d’un maire a protesté.',
          ),
          tf(
            'b6',
            'With une foule de + plural noun, both singular and plural verbs are found.',
            true,
          ),
          tf('b7', 'Tout is an adverb in “tout petit”.', true),
          tf('b8', '“Toutes petites” is correct for feminine plural adjectives.', true),
          tf(
            'b9',
            '“Tout le monde” takes a plural verb.',
            false,
            'It takes a singular verb: tout le monde est là.',
          ),
          tf('b10', 'L’empreinte carbone measures greenhouse gas emissions.', true),
          tf('b11', '“La canicule” is a cold wave.', false, 'It is a heatwave.'),
          tf('b12', '“La surpêche” is overfishing.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta('Ecologist challenge', 'Vocabulary and agreement in one round.', [...grammarTags], 3, 6),
      {
        questions: [
          q('c1', 'Que veut dire « un puits de carbone » ?', 'a carbon sink', [
            'a coal mine',
            'a power station',
            'a carbon tax',
          ]),
          withLesson(
            q(
              'c2',
              'La plupart des glaciers ___ en recul.',
              'sont',
              ['est', 'soit', 'était'],
              'The plural noun glaciers gives a plural verb.',
            ),
            LESSON,
          ),
          q('c3', 'Que veut dire « la nappe phréatique » ?', 'the groundwater table', [
            'a rainwater tank',
            'a tidal wave',
            'an irrigation canal',
          ]),
          withLesson(
            q(
              'c4',
              'Plus d’un habitant ___ signé la pétition.',
              'a',
              ['ont', 'avons', 'aient'],
              'Plus d’un: singular verb.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « la sobriété énergétique » ?', 'using less energy overall', [
            'switching to nuclear power',
            'a new tax on fuel',
            'storing electricity',
          ]),
          withLesson(
            q(
              'c6',
              'Les îles sont ___ petites sur cette carte.',
              'toutes',
              ['tout', 'tous', 'toute'],
              'Feminine plural with a consonant: toutes petites.',
            ),
            LESSON,
          ),
          q(
            'c7',
            'Que veut dire « la réintroduction » ?',
            'bringing a species back to its habitat',
            ['a ban on hunting', 'a new form of farming', 'a protected sea zone'],
          ),
          withLesson(
            q(
              'c8',
              'Bon nombre de villes ___ des plans d’adaptation.',
              'adoptent',
              ['adopte', 'adoptes', 'adoptons'],
              'Bon nombre de + plural noun: plural verb.',
            ),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
