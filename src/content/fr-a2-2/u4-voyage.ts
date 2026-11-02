import { activity, byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import { gap, mc, npc, unitFr, you, type UnitContent } from './helpers';

const U = 'fr-a2-2-voyage';

const travel = vocabList(U, 'Travelling', [
  ['un voyageur', 'a traveller', '🧳'],
  ['un séjour', 'a stay', '🛌'],
  ['une valise', 'a suitcase', '💼'],
  ['un bagage', 'a piece of luggage', '🎒'],
  ['un passeport', 'a passport', '🛂'],
  ['la douane', 'customs', '🛃'],
  ['un vol', 'a flight', '✈️'],
  ['une escale', 'a stopover', '🛬'],
  ['un aéroport', 'an airport', '🛫'],
  ['une réservation', 'a booking', '📝'],
  ['annuler', 'to cancel', '❌'],
  ['une correspondance', 'a connection', '🔀'],
  ['une navette', 'a shuttle', '🚐'],
  ['une compagnie', 'an airline, a company', '🏢'],
]);

const tourism = vocabList(U, 'Tourism and places', [
  ['un touriste', 'a tourist', '📸'],
  ['un guide', 'a guide', '🧭'],
  ['un monument', 'a monument', '🏛️'],
  ['une visite guidée', 'a guided tour', '🚶'],
  ['un office de tourisme', 'a tourist office', 'ℹ️'],
  ['un dépliant', 'a leaflet', '📄'],
  ['un paysage', 'a landscape', '🏞️'],
  ['un souvenir', 'a souvenir, a memory', '🎁'],
  ['une plage', 'a beach', '🏖️'],
  ['un hébergement', 'accommodation', '🏨'],
  ['une auberge', 'an inn', '🏡'],
  ['un camping', 'a campsite', '⛺'],
]);

const story = vocabList(U, 'Telling a story and reacting', [
  ['une aventure', 'an adventure', '🗺️'],
  ['une mésaventure', 'a mishap', '🙃'],
  ['soudain', 'suddenly', '⚡'],
  ['tout à coup', 'all of a sudden', '💥'],
  ['à ce moment-là', 'at that moment', '⏱️'],
  ['Quel dommage !', 'What a pity!', '😕'],
  ['Ça m’énerve !', 'That annoys me!', '😠'],
  ['C’est inadmissible !', 'That is unacceptable!', '🚫'],
  ['Quelle déception !', 'What a disappointment!', '😞'],
  ['Je n’en peux plus !', 'I cannot take any more!', '😩'],
  ['Ce n’est pas de ma faute.', 'It is not my fault.', '🙅'],
  ['Heureusement, tout s’est bien passé.', 'Luckily, everything went well.', '😅'],
]);

const vocab = [...travel, ...tourism, ...story];

const meaningQuiz = byDe(
  vocab,
  'un séjour',
  'la douane',
  'une escale',
  'une correspondance',
  'une navette',
  'un dépliant',
  'un paysage',
  'une mésaventure',
);

/** [clause, bucket, English] for the imparfait / passé composé sort */
const NARRATION: [string, 'background' | 'event', string][] = [
  ['Il faisait beau.', 'background', 'The weather was fine.'],
  ['Nous sommes arrivés à midi.', 'event', 'We arrived at noon.'],
  ['Les enfants dormaient.', 'background', 'The children were sleeping.'],
  ['Soudain, le train s’est arrêté.', 'event', 'Suddenly the train stopped.'],
  ['C’était un petit village.', 'background', 'It was a small village.'],
  ['J’ai perdu mon passeport.', 'event', 'I lost my passport.'],
  ['Il y avait beaucoup de touristes.', 'background', 'There were a lot of tourists.'],
  ['Elle a pris un taxi.', 'event', 'She took a taxi.'],
  ['Nous étions fatigués.', 'background', 'We were tired.'],
  ['Ils ont réservé une chambre.', 'event', 'They booked a room.'],
];

export const voyage: UnitContent = {
  unit: unitFr({
    id: U,
    order: 4,
    title: 'Envie d’ailleurs ?',
    subtitle: 'Plan a trip, get information, tell a travel story and react when things go wrong',
    emoji: '🧳',
    goals: [
      'Tell a story: what happened and what the situation was',
      'Ask for travel information and book a place',
      'React to something annoying or disappointing',
    ],
    grammar: [
      'Passé composé and imparfait in a story',
      'Agreement of the past participle',
      'Demonstrative pronouns: celui, celle, ceux, celles',
    ],
    vocabFields: ['Travelling', 'Tourism and places', 'Telling a story and reacting'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-travel',
      'flashcards',
      {
        title: 'Travelling',
        description: 'Luggage, flights and bookings.',
        tags: ['vocabulary', 'weather-travel', 'travel-mobility'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(travel),
    ),

    activity(
      U,
      'flash-tourism',
      'flashcards',
      {
        title: 'Tourism and places',
        description: 'Sights, guides and places to stay.',
        tags: ['vocabulary', 'tourism'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(tourism),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Read the word and pick its meaning.',
        tags: ['vocabulary', 'tourism'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(meaningQuiz, [...travel, ...tourism], 4),
    ),

    activity(
      U,
      'listen-travel',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'weather-travel', 'tourism'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'un passeport',
          'un vol',
          'une réservation',
          'annuler',
          'un touriste',
          'un monument',
          'une plage',
          'un camping',
        ),
        [...travel, ...tourism],
      ),
    ),

    activity(
      U,
      'spell-travel',
      'spell',
      {
        title: 'Spell the travel words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'weather-travel'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-valise',
            mode: 'unscramble',
            answer: 'valise',
            hint: 'suitcase',
            emoji: '💼',
            speak: 'une valise',
          },
          {
            id: 'sp-passeport',
            mode: 'unscramble',
            answer: 'passeport',
            hint: 'passport',
            emoji: '🛂',
            speak: 'un passeport',
          },
          {
            id: 'sp-aeroport',
            mode: 'type',
            answer: 'aéroport',
            hint: 'airport',
            emoji: '🛫',
            speak: 'un aéroport',
          },
          {
            id: 'sp-paysage',
            mode: 'type',
            answer: 'paysage',
            hint: 'landscape',
            emoji: '🏞️',
            speak: 'un paysage',
          },
          {
            id: 'sp-depliant',
            mode: 'dictation',
            answer: 'dépliant',
            hint: 'Type what you hear (a leaflet)',
            emoji: '📄',
            speak: 'un dépliant',
          },
        ],
      },
    ),

    activity(
      U,
      'conj-imparfait',
      'conjugation',
      {
        title: 'The imparfait',
        description: 'Fill in the imparfait: j’étais, nous avions, ils faisaient.',
        tags: ['grammar', 'fr-a22-narration'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a22-narration',
      },
      {
        tables: [
          {
            id: 'etre',
            verb: 'être',
            meaning: 'to be (imparfait)',
            forms: {
              je: 'étais',
              tu: 'étais',
              'il/elle/on': 'était',
              nous: 'étions',
              vous: 'étiez',
              'ils/elles': 'étaient',
            },
            blanks: ['je', 'il/elle/on', 'ils/elles'],
          },
          {
            id: 'avoir',
            verb: 'avoir',
            meaning: 'to have (imparfait)',
            forms: {
              je: 'avais',
              tu: 'avais',
              'il/elle/on': 'avait',
              nous: 'avions',
              vous: 'aviez',
              'ils/elles': 'avaient',
            },
            blanks: ['tu', 'nous', 'ils/elles'],
          },
          {
            id: 'faire',
            verb: 'faire',
            meaning: 'to do, to make (imparfait)',
            forms: {
              je: 'faisais',
              tu: 'faisais',
              'il/elle/on': 'faisait',
              nous: 'faisions',
              vous: 'faisiez',
              'ils/elles': 'faisaient',
            },
            blanks: ['je', 'nous', 'vous'],
          },
          {
            id: 'aller',
            verb: 'aller',
            meaning: 'to go (imparfait)',
            forms: {
              je: 'allais',
              tu: 'allais',
              'il/elle/on': 'allait',
              nous: 'allions',
              vous: 'alliez',
              'ils/elles': 'allaient',
            },
            blanks: ['tu', 'il/elle/on', 'vous'],
          },
          {
            id: 'prendre',
            verb: 'prendre',
            meaning: 'to take (imparfait)',
            forms: {
              je: 'prenais',
              tu: 'prenais',
              'il/elle/on': 'prenait',
              nous: 'prenions',
              vous: 'preniez',
              'ils/elles': 'prenaient',
            },
            blanks: ['je', 'nous', 'ils/elles'],
          },
          {
            id: 'voir',
            verb: 'voir',
            meaning: 'to see (imparfait)',
            forms: {
              je: 'voyais',
              tu: 'voyais',
              'il/elle/on': 'voyait',
              nous: 'voyions',
              vous: 'voyiez',
              'ils/elles': 'voyaient',
            },
            blanks: ['tu', 'nous', 'vous'],
          },
          {
            id: 'pouvoir',
            verb: 'pouvoir',
            meaning: 'to be able to (imparfait)',
            forms: {
              je: 'pouvais',
              tu: 'pouvais',
              'il/elle/on': 'pouvait',
              nous: 'pouvions',
              vous: 'pouviez',
              'ils/elles': 'pouvaient',
            },
            blanks: ['je', 'il/elle/on', 'ils/elles'],
          },
          {
            id: 'visiter',
            verb: 'visiter',
            meaning: 'to visit (imparfait)',
            forms: {
              je: 'visitais',
              tu: 'visitais',
              'il/elle/on': 'visitait',
              nous: 'visitions',
              vous: 'visitiez',
              'ils/elles': 'visitaient',
            },
            blanks: ['je', 'nous', 'vous'],
          },
        ],
      },
    ),

    activity(
      U,
      'sort-narration',
      'sortit',
      {
        title: 'Setting or event?',
        description: 'Is it the background (imparfait) or something that happened (passé composé)?',
        tags: ['grammar', 'fr-a22-narration', 'weather-travel'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-a22-narration',
      },
      {
        instruction: 'Does the sentence describe the setting or tell an event?',
        buckets: [
          { id: 'background', label: 'Setting (imparfait)', emoji: '🌄' },
          { id: 'event', label: 'Event (passé composé)', emoji: '⚡' },
        ],
        items: NARRATION.map(([text, bucket, translation], i) => ({
          id: `n${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-narration',
      'gapfill',
      {
        title: 'Tell the story',
        description: 'Imparfait or passé composé? Pick the right tense.',
        tags: ['grammar', 'fr-a22-narration', 'weather-travel'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-narration',
      },
      {
        items: [
          gap(
            't1',
            'Quand je suis arrivé à l’aéroport, il ___ beaucoup.',
            'pleuvait',
            ['a plu', 'pleut', 'pleuvrait'],
            'When I arrived at the airport, it was raining a lot.',
            'A situation in the background takes the imparfait.',
          ),
          gap(
            't2',
            'Nous ___ la valise quand le taxi est arrivé.',
            'fermions',
            ['avons fermé', 'fermerions', 'fermons'],
            'We were closing the suitcase when the taxi arrived.',
            'An action in progress, interrupted by another, is in the imparfait.',
          ),
          gap(
            't3',
            'Hier, nous ___ le château pendant trois heures.',
            'avons visité',
            ['visitions', 'visitons', 'visiterions'],
            'Yesterday we visited the castle for three hours.',
            'A finished action with a clear limit is in the passé composé.',
          ),
          gap(
            't4',
            'Il y ___ beaucoup de monde quand nous sommes entrés.',
            'avait',
            ['a eu', 'aura', 'aurait'],
            'There were a lot of people when we went in.',
            'Description of the scene: imparfait.',
          ),
          gap(
            't5',
            'Tout à coup, le guide ___ la porte.',
            'a ouvert',
            ['ouvrait', 'ouvre', 'ouvrirait'],
            'All of a sudden the guide opened the door.',
            'Tout à coup introduces a new event: passé composé.',
          ),
          gap(
            't6',
            'Quand j’étais petit, nous ___ toujours à la mer.',
            'allions',
            ['sommes allés', 'allons', 'irions'],
            'When I was small, we always went to the sea.',
            'A habit in the past is in the imparfait.',
          ),
          gap(
            't7',
            'Pendant que nous attendions le bus, il ___ à pleuvoir.',
            'a commencé',
            ['commençait', 'commence', 'commencerait'],
            'While we were waiting for the bus, it started to rain.',
            'A new event interrupts the waiting: passé composé.',
          ),
          gap(
            't8',
            'Le vol ___ annulé parce qu’il y avait trop de vent.',
            'a été',
            ['était', 'est', 'serait'],
            'The flight was cancelled because there was too much wind.',
            'The cancellation is an event (passé composé); the wind is the background.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-participle',
      'gapfill',
      {
        title: 'Agree the participle',
        description: 'Choose the right ending of the past participle.',
        tags: ['grammar', 'fr-a22-participle-agreement', 'weather-travel'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-participle-agreement',
      },
      {
        items: [
          gap(
            'a1',
            'Elle est ___ à Rome en juin.',
            'allée',
            ['allé', 'allés', 'allées'],
            'She went to Rome in June.',
            'With être the participle agrees with the subject: elle → allée.',
          ),
          gap(
            'a2',
            'Ils sont ___ à l’hôtel à midi.',
            'arrivés',
            ['arrivé', 'arrivée', 'arrivées'],
            'They arrived at the hotel at noon.',
            'With être the participle agrees with the subject: ils → arrivés.',
          ),
          gap(
            'a3',
            'La valise que j’ai ___ est bleue.',
            'perdue',
            ['perdu', 'perdus', 'perdues'],
            'The suitcase that I lost is blue.',
            'With avoir the participle agrees with the direct object placed before it: la valise (que) → perdue.',
          ),
          gap(
            'a4',
            'Voici les photos que nous avons ___ à Nice.',
            'prises',
            ['prise', 'pris', 'prit'],
            'Here are the photos we took in Nice.',
            'Les photos (que) comes before the verb: prises.',
          ),
          gap(
            'a5',
            '— Tu as vu Marie ? — Oui, je l’ai ___ à la gare.',
            'vue',
            ['vu', 'vus', 'vues'],
            '“Did you see Marie?” “Yes, I saw her at the station.”',
            'L’ stands for Marie (feminine) and comes before the verb: vue.',
          ),
          gap(
            'a6',
            'Elles se sont ___ à l’aéroport.',
            'retrouvées',
            ['retrouvé', 'retrouvés', 'retrouvée'],
            'They met up at the airport.',
            'Reflexive verbs use être: the participle agrees with the subject, elles → retrouvées.',
          ),
          gap(
            'a7',
            'Nous avons ___ la ville à pied.',
            'visité',
            ['visitée', 'visités', 'visitées'],
            'We visited the town on foot.',
            'The object comes after avoir, so there is no agreement.',
          ),
          gap(
            'a8',
            '— Et les billets ? — Je les ai ___ hier.',
            'achetés',
            ['acheté', 'achetée', 'achetées'],
            '“And the tickets?” “I bought them yesterday.”',
            'Les (masculine plural) comes before the verb: achetés.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-demonstratives',
      'gapfill',
      {
        title: 'Celui, celle, ceux, celles',
        description: 'Pick the demonstrative pronoun that matches the noun.',
        tags: ['grammar', 'fr-a22-demonstrative-pronouns', 'tourism'],
        difficulty: 2,
        estMinutes: 4,
        lesson: 'fr-a22-demonstrative-pronouns',
      },
      {
        items: [
          gap(
            'd1',
            '— Quelle valise est la tienne ? — ___ de droite.',
            'Celle',
            ['Celui', 'Ceux', 'Ce'],
            '“Which suitcase is yours?” “The one on the right.”',
            'La valise is feminine singular: celle.',
          ),
          gap(
            'd2',
            'Je préfère cet hôtel à ___ de l’an dernier.',
            'celui',
            ['celle', 'ceux', 'ce'],
            'I prefer this hotel to last year’s.',
            'L’hôtel is masculine singular: celui.',
          ),
          gap(
            'd3',
            'Tu prends ces billets-ci ou ___-là ?',
            'ceux',
            ['celui', 'celles', 'ce'],
            'Are you taking these tickets or those?',
            'Les billets is masculine plural: ceux.',
          ),
          gap(
            'd4',
            'Ma chambre est plus calme que ___ de mon frère.',
            'celle',
            ['celui', 'ceux', 'celles'],
            'My room is quieter than my brother’s.',
            'La chambre is feminine singular: celle.',
          ),
          gap(
            'd5',
            'De toutes les plages, ___ qui me plaît est la plus petite.',
            'celle',
            ['celui', 'ceux', 'ce'],
            'Of all the beaches, the one I like is the smallest.',
            'La plage is feminine singular: celle (qui …).',
          ),
          gap(
            'd6',
            'Voici deux guides : ___-ci est gratuit, l’autre est payant.',
            'celui',
            ['celle', 'ceux', 'ce'],
            'Here are two guides: this one is free, the other costs money.',
            'Le guide is masculine singular: celui-ci.',
          ),
          gap(
            'd7',
            'Les photos de Léa sont belles, mais ___ de Paul sont meilleures.',
            'celles',
            ['ceux', 'celle', 'celui'],
            'Léa’s photos are beautiful, but Paul’s are better.',
            'Les photos is feminine plural: celles.',
          ),
          gap(
            'd8',
            'Tous les touristes sont partis, sauf ___ qui dormaient encore.',
            'ceux',
            ['celles', 'celui', 'ce'],
            'All the tourists left, except those who were still asleep.',
            'Ceux refers to a group of people: ceux qui …',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'weather-travel'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'When we arrived, it was raining.',
            words: ['Quand', 'nous', 'sommes', 'arrivés,', 'il', 'pleuvait.'],
            extra: ['avons'],
            lesson: 'fr-a22-narration',
          },
          {
            id: 's2',
            translation: 'The one I lost was red.',
            words: ['Celle', 'que', 'j’ai', 'perdue', 'était', 'rouge.'],
            extra: ['perdu'],
            lesson: 'fr-a22-participle-agreement',
          },
          {
            id: 's3',
            translation: 'I prefer my brother’s.',
            words: ['Je', 'préfère', 'celui', 'de', 'mon', 'frère.'],
            extra: ['celle'],
            lesson: 'fr-a22-demonstrative-pronouns',
          },
          {
            id: 's4',
            translation: 'She left very early this morning.',
            words: ['Elle', 'est', 'partie', 'très', 'tôt', 'ce', 'matin.'],
            extra: ['parti'],
            lesson: 'fr-a22-participle-agreement',
          },
          {
            id: 's5',
            translation: 'Suddenly the train stopped.',
            words: ['Soudain,', 'le', 'train', 's’est', 'arrêté.'],
            extra: ['s’était'],
            lesson: 'fr-a22-narration',
          },
          {
            id: 's6',
            translation: 'The suitcases we bought are heavy.',
            words: ['Les', 'valises', 'que', 'nous', 'avons', 'achetées', 'sont', 'lourdes.'],
            extra: ['acheté'],
            lesson: 'fr-a22-participle-agreement',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-story',
      'flashcards',
      {
        title: 'Telling a story and reacting',
        description: 'Link events and react to something annoying or disappointing.',
        tags: ['vocabulary', 'communication', 'mishaps-regrets'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(story),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'At the station, a story, a complaint',
        description: 'Choose a train, tell a holiday story and react to a problem at the hotel.',
        tags: ['communication', 'weather-travel', 'tourism'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'station',
            title: 'Choosing a train',
            emoji: '🚆',
            setting: 'You ask for information at the station. You say vous to the clerk.',
            turns: [
              npc(
                'L’employé',
                'Bonjour ! Il y a deux trains pour Lyon : un à 9 h et un à 11 h.',
                'Hello! There are two trains to Lyon: one at 9 and one at 11.',
              ),
              you(
                'Je prends celui de 11 h, s’il vous plaît.',
                [
                  'Je prends celle de 11 h, s’il vous plaît.',
                  'Train is masculine, so the pronoun is celui.',
                ],
                [
                  'Je prends ce de 11 h, s’il vous plaît.',
                  'Ce cannot stand alone before de. Use celui (le train).',
                ],
              ),
              npc(
                'L’employé',
                'Très bien. Vous voulez aussi un hébergement à Lyon ?',
                'Fine. Would you like accommodation in Lyon too?',
              ),
              you(
                'Oui, je cherche un hôtel proche de la gare, comme celui que mon collègue a réservé.',
                [
                  'Oui, je cherche un hôtel proche de la gare, comme celle que mon collègue a réservé.',
                  'Hôtel is masculine: celui.',
                ],
                [
                  'Oui, je cherche un hôtel proche de la gare, comme celui que mon collègue a réservée.',
                  'The participle agrees with the object before it: l’hôtel is masculine, so réservé.',
                ],
              ),
              npc(
                'L’employé',
                'Je vous donne le dépliant de l’office de tourisme.',
                'I will give you the tourist office leaflet.',
              ),
            ],
          },
          {
            id: 'holiday',
            title: 'A holiday story',
            emoji: '🏖️',
            setting: 'You tell your friend Camille about your trip. You say tu to each other.',
            turns: [
              npc(
                'Camille',
                'Alors, ces vacances en Bretagne ? Raconte !',
                'So, that holiday in Brittany? Tell me!',
              ),
              you(
                'C’était super ! Il faisait beau et nous avons visité des villages magnifiques.',
                [
                  'C’était super ! Il a fait beau et nous visitions des villages magnifiques.',
                  'Weather as the setting takes the imparfait; the visits are events in the passé composé.',
                ],
                [
                  'C’est super ! Il faisait beau et nous avons visité des villages magnifiques.',
                  'Telling the story in the past, say c’était.',
                ],
              ),
              npc('Camille', 'Et vous avez eu des problèmes ?', 'And did you have any problems?'),
              you(
                'Oui, un jour, j’ai perdu mon passeport, mais heureusement je l’ai retrouvé.',
                [
                  'Oui, un jour, je perdais mon passeport, mais heureusement je l’ai retrouvé.',
                  'A single event in the past takes the passé composé: j’ai perdu.',
                ],
                [
                  'Oui, un jour, j’ai perdu mon passeport, mais heureusement je l’ai retrouvée.',
                  'Passeport is masculine, so there is no extra -e: retrouvé.',
                ],
              ),
              npc(
                'Camille',
                'Quelle aventure ! Tu as des photos ?',
                'What an adventure! Do you have photos?',
              ),
              you(
                'Oui, voici celles de la plage.',
                ['Oui, voici ceux de la plage.', 'Photos is feminine plural: celles.'],
                [
                  'Oui, voici celle de la plage.',
                  'The plural noun photos needs the plural pronoun celles.',
                ],
              ),
            ],
          },
          {
            id: 'hotel',
            title: 'A problem at the hotel',
            emoji: '😠',
            setting: 'Your room is not what you booked. You say vous to the receptionist.',
            turns: [
              npc(
                'Le réceptionniste',
                'Bonsoir. Un problème ?',
                'Good evening. Is something wrong?',
              ),
              you(
                'Oui, c’est inadmissible : la chambre que j’ai réservée avait un balcon.',
                [
                  'Oui, c’est inadmissible : la chambre que j’ai réservé avait un balcon.',
                  'The participle agrees with la chambre, which comes before: réservée.',
                ],
                [
                  'Oui, c’est inadmissible : la chambre que j’ai réservée aurait un balcon.',
                  'In the past story, the description takes the imparfait: avait.',
                ],
              ),
              npc(
                'Le réceptionniste',
                'Je suis désolé. Celle-ci est la seule qui soit libre ce soir.',
                'I am sorry. This one is the only one free tonight.',
              ),
              you(
                'Quelle déception ! Pouvez-vous me donner celle de demain, alors ?',
                [
                  'Quelle déception ! Pouvez-vous me donner celui de demain, alors ?',
                  'La chambre is feminine: celle.',
                ],
                [
                  'Quelle déception ! Pouvez-vous me donner ceux de demain, alors ?',
                  'One room, so the singular celle.',
                ],
              ),
              npc(
                'Le réceptionniste',
                'Bien sûr, madame. Je m’en occupe tout de suite.',
                'Of course, madam. I will see to it right away.',
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
      {
        title: 'Travel blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'weather-travel', 'fr-a22-narration'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'The imparfait describes the setting of a story.', isTrue: true },
          {
            id: 'b2',
            text: '“Soudain, il pleuvait” is the right tense for a sudden event.',
            isTrue: false,
            explanation: 'A sudden event takes the passé composé: soudain, il a plu.',
          },
          {
            id: 'b3',
            text: '“Elle est allée” has an -e because the subject is feminine.',
            isTrue: true,
          },
          {
            id: 'b4',
            text: '“La valise que j’ai perdu” is correct.',
            isTrue: false,
            explanation: 'The object la valise comes first, so the participle agrees: perdue.',
          },
          { id: 'b5', text: '“Ceux” stands for a masculine plural noun.', isTrue: true },
          {
            id: 'b6',
            text: '“Celui” can stand for “la plage”.',
            isTrue: false,
            explanation: 'La plage is feminine: celle.',
          },
          { id: 'b7', text: '“Nous avons visité la ville” needs no agreement.', isTrue: true },
          { id: 'b8', text: '“Une escale” is a stopover.', isTrue: true },
          {
            id: 'b9',
            text: '“La douane” is a tourist office.',
            isTrue: false,
            explanation: 'La douane is customs. A tourist office is un office de tourisme.',
          },
          { id: 'b10', text: '“Annuler” means to cancel.', isTrue: true },
          {
            id: 'b11',
            text: '“Ils se sont retrouvé” is correct.',
            isTrue: false,
            explanation: 'With être the participle agrees with the subject: ils se sont retrouvés.',
          },
          { id: 'b12', text: '“Quel dommage !” expresses regret.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'weather-travel'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          mc(
            'c1',
            'Complete: “Il ___ nuit quand nous sommes partis.”',
            'faisait',
            ['a fait', 'fait', 'ferait'],
            {
              lesson: 'fr-a22-narration',
            },
          ),
          mc(
            'c2',
            'Complete: “Hier, j’___ un train très tôt.”',
            'ai pris',
            ['prenais', 'prends', 'prendrais'],
            {
              lesson: 'fr-a22-narration',
            },
          ),
          mc(
            'c3',
            'Complete: “Les touristes sont ___ à neuf heures.”',
            'arrivés',
            ['arrivé', 'arrivées', 'arrivée'],
            {
              lesson: 'fr-a22-participle-agreement',
            },
          ),
          mc(
            'c4',
            'Complete: “Les cartes que j’ai ___ sont utiles.”',
            'achetées',
            ['acheté', 'achetée', 'achetés'],
            {
              lesson: 'fr-a22-participle-agreement',
            },
          ),
          mc(
            'c5',
            'Complete: “Quelle chambre ? — ___ du premier étage.”',
            'Celle',
            ['Celui', 'Ceux', 'Celles'],
            {
              lesson: 'fr-a22-demonstrative-pronouns',
            },
          ),
          mc('c6', 'Complete: “Ces billets ou ___-là ?”', 'ceux', ['celui', 'celle', 'celles'], {
            lesson: 'fr-a22-demonstrative-pronouns',
          }),
          mc('c7', '“Une mésaventure” is …', 'a mishap', [
            'a landscape',
            'a stopover',
            'a souvenir',
          ]),
          mc('c8', 'Your flight is cancelled. What do you say?', 'C’est inadmissible !', [
            'Heureusement, tout s’est bien passé.',
            'Je voudrais une plage.',
            'Soudain, un touriste.',
          ]),
        ],
      },
    ),
  ],
};
