import { activity, byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  gap,
  meta,
  presentTable,
  say,
  sent,
  sortCards,
  tf,
  unitFr21,
  withLesson,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-a2-1-sorties';

const places = vocabList(U, 'Places to go out', [
  ['le théâtre', 'theatre', '🎭'],
  ['l’opéra', 'opera house', '🎼'],
  ['la galerie d’art', 'art gallery', '🖼️'],
  ['le stade', 'stadium', '🏟️'],
  ['la piscine', 'swimming pool', '🏊'],
  ['la patinoire', 'ice rink', '⛸️'],
  ['le zoo', 'zoo', '🦁'],
  ['le château', 'castle', '🏰'],
  ['la discothèque', 'nightclub', '🪩'],
  ['le cirque', 'circus', '🤹'],
  ['le festival', 'festival', '🎸'],
  ['le parc d’attractions', 'theme park', '🎢'],
]);

const things = vocabList(U, 'Shows and tickets', [
  ['le concert', 'concert', '🎶'],
  ['l’exposition', 'exhibition', '🏺'],
  ['le spectacle', 'show', '🎪'],
  ['la pièce de théâtre', 'play', '📜'],
  ['le film', 'film', '🎬'],
  ['la séance', 'screening / performance', '🎞️'],
  ['le billet', 'ticket', '🎟️'],
  ['la réservation', 'booking', '📝'],
  ['la file d’attente', 'queue', '🚶'],
  ['l’entrée', 'entrance / admission', '🚪'],
  ['le programme', 'programme', '📋'],
  ['l’affiche', 'poster', '🪧'],
]);

const verbs = vocabList(U, 'Going out', [
  ['sortir', 'to go out', '🌃'],
  ['réserver', 'to book', '📅'],
  ['proposer', 'to suggest', '💡'],
  ['accepter', 'to accept', '👍'],
  ['refuser', 'to refuse', '👎'],
  ['se retrouver', 'to meet up', '🤝'],
  ['s’amuser', 'to have fun', '🎉'],
  ['s’ennuyer', 'to be bored', '🥱'],
  ['applaudir', 'to applaud', '👏'],
]);

const phrases = vocabList(U, 'Inviting and answering', [
  ['Ça te dit de sortir ?', 'Do you feel like going out?', '🌆'],
  ['Tu as envie d’aller au théâtre ?', 'Do you fancy going to the theatre?', '🎭'],
  ['On y va ?', 'Shall we go?', '🚶'],
  ['Pourquoi pas ?', 'Why not?', '🤔'],
  ['Bonne idée !', 'Good idea!', '💡'],
  ['Avec plaisir !', 'With pleasure!', '😊'],
  ['Désolé, je ne peux pas.', 'Sorry, I can’t.', '🙁'],
  ['Je suis pris ce soir.', 'I’m busy tonight.', '📆'],
  ['Dommage !', 'Too bad!', '😕'],
  ['On se retrouve où ?', 'Where shall we meet?', '📍'],
  ['Rendez-vous à huit heures.', 'Let’s meet at eight.', '🕗'],
]);

const vocab = [...places, ...things, ...verbs, ...phrases];

export const sorties: UnitContent = {
  unit: unitFr21({
    id: U,
    order: 2,
    title: 'Sorties et culture',
    subtitle: 'Suggest an outing, accept or refuse, and book tickets',
    emoji: '🎭',
    goals: [
      'Suggest, accept and refuse an outing',
      'Say what you can, must and want to do',
      'Replace a place with y',
    ],
    grammar: ['Inviting and answering', 'pouvoir, devoir, vouloir', 'The pronoun y'],
    vocabFields: ['Places to go out', 'Shows and tickets', 'Going out', 'Inviting and answering'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-places',
      'flashcards',
      meta(
        'Where to go out',
        'Theatres, stadiums, zoos: places for an evening or a weekend.',
        ['vocabulary', 'culture-outings'],
        1,
        3,
      ),
      flashcards(places),
    ),

    activity(
      U,
      'flash-things',
      'flashcards',
      meta(
        'Shows and tickets',
        'Words for concerts, films, bookings and tickets.',
        ['vocabulary', 'culture-outings'],
        1,
        3,
      ),
      flashcards(things),
    ),

    activity(
      U,
      'quiz-emoji',
      'quiz',
      meta(
        'What is this?',
        'Name the place or the event from the picture.',
        ['vocabulary', 'culture-outings'],
        1,
        3,
      ),
      quizEmoji(
        [...places.slice(0, 6), ...things.slice(0, 2), ...things.slice(5, 8)],
        [...places, ...things],
      ),
    ),

    activity(
      U,
      'listen-outings',
      'listen',
      meta(
        'Listen: outings',
        'Listen to the word and pick its meaning.',
        ['listening', 'culture-outings'],
        2,
        3,
      ),
      listen(
        [
          ...byDe(vocab, 'le théâtre', 'le stade', 'la patinoire', 'le château'),
          ...byDe(vocab, 'le billet', 'l’exposition', 'la file d’attente', 'réserver'),
        ],
        vocab,
      ),
    ),

    activity(
      U,
      'memory-culture',
      'memory',
      meta(
        'Going-out memory',
        'Find the pairs: French word and English meaning.',
        ['vocabulary', 'culture-outings'],
        1,
        3,
      ),
      memory([
        ...byDe(vocab, 'le zoo', 'le cirque', 'le festival', 'la discothèque'),
        ...byDe(vocab, 'sortir', 'accepter', 'refuser', 'applaudir'),
      ]),
    ),

    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Inviting and answering',
        'Phrases to suggest an outing, say yes or say no politely.',
        ['vocabulary', 'communication', 'culture-outings'],
        1,
        3,
      ),
      flashcards([...phrases, ...verbs]),
    ),

    activity(
      U,
      'conj-modals',
      'conjugation',
      meta(
        'pouvoir, devoir, vouloir',
        'Three irregular verbs that are followed by an infinitive.',
        ['grammar', 'fr-a21-modals'],
        2,
        4,
      ),
      {
        tables: [
          presentTable('pouvoir', 'can / to be able to', ['je', 'nous', 'ils/elles']),
          presentTable('devoir', 'must / to have to', ['tu', 'il/elle/on', 'vous']),
          presentTable('vouloir', 'to want', ['je', 'il/elle/on', 'nous']),
          presentTable(
            'pouvoir',
            'can / to be able to',
            ['tu', 'vous', 'il/elle/on'],
            'pres-pouvoir-2',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-modals',
      'gapfill',
      meta(
        'Can, must, want',
        'Choose the right form of pouvoir, devoir or vouloir.',
        ['grammar', 'fr-a21-modals', 'culture-outings'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'm1',
            'Tu ___ venir au concert avec nous ?',
            'peux',
            ['peux', 'peut', 'pouvons', 'pouvez'],
            'Can you come to the concert with us?',
            'Pouvoir with tu: peux. The next verb stays in the infinitive.',
          ),
          gap(
            'm2',
            'Nous ___ réserver les billets avant samedi.',
            'devons',
            ['devons', 'devez', 'doit', 'dois'],
            'We have to book the tickets before Saturday.',
            'Devoir with nous: devons.',
          ),
          gap(
            'm3',
            'Elle ne ___ pas sortir : elle est malade.',
            'peut',
            ['peut', 'peux', 'peuvent', 'pouvons'],
            'She cannot go out: she is ill.',
            'Elle takes the il form: peut. Ne … pas goes around it.',
          ),
          gap(
            'm4',
            'Vous ___ voir cette exposition ?',
            'voulez',
            ['voulez', 'voulons', 'veulent', 'veux'],
            'Do you want to see this exhibition?',
            'Vouloir with vous: voulez.',
          ),
          gap(
            'm5',
            'Ils ___ partir tôt pour éviter la file d’attente.',
            'doivent',
            ['doivent', 'doit', 'devons', 'dois'],
            'They have to leave early to avoid the queue.',
            'Devoir with ils: doivent.',
          ),
          gap(
            'm6',
            'Je ne ___ pas venir ce soir.',
            'peux',
            ['peux', 'peut', 'pouvons'],
            'I cannot come tonight.',
            'Pouvoir with je: peux.',
          ),
          gap(
            'm7',
            'On ___ prendre le métro pour aller au stade.',
            'peut',
            ['peut', 'peuvent', 'peux', 'pouvons'],
            'We can take the metro to get to the stadium.',
            'On takes the il form: on peut.',
          ),
        ].map((item) => withLesson('fr-a21-modals', item)),
      },
    ),

    activity(
      U,
      'sort-answers',
      'sortit',
      meta(
        'Yes or no?',
        'Sort the answers: do they accept the invitation or refuse it?',
        ['grammar', 'fr-a21-invitations', 'communication'],
        2,
        3,
      ),
      {
        instruction: 'Does the answer accept or refuse the invitation?',
        buckets: [
          { id: 'accept', label: 'Accepting', emoji: '👍' },
          { id: 'refuse', label: 'Refusing', emoji: '👎' },
        ],
        items: sortCards('s', [
          ['Bonne idée !', 'accept', 'Good idea!'],
          ['Avec plaisir !', 'accept', 'With pleasure!'],
          ['Pourquoi pas ?', 'accept', 'Why not?'],
          ['D’accord, on y va !', 'accept', 'OK, let’s go!'],
          ['Volontiers !', 'accept', 'Gladly!'],
          ['Désolé, je ne peux pas.', 'refuse', 'Sorry, I can’t.'],
          ['Je suis pris ce soir.', 'refuse', 'I’m busy tonight.'],
          ['Non merci, pas ce soir.', 'refuse', 'No thanks, not tonight.'],
          ['Ce n’est pas possible.', 'refuse', 'That’s not possible.'],
          ['Je ne suis pas libre samedi.', 'refuse', 'I’m not free on Saturday.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-invitations',
      'gapfill',
      meta(
        'Suggest and answer',
        'Complete invitations and answers.',
        ['grammar', 'fr-a21-invitations', 'communication'],
        2,
        4,
      ),
      {
        items: [
          gap(
            'i1',
            'Ça te ___ d’aller au cinéma ?',
            'dit',
            ['dit', 'dis', 'dire', 'disent'],
            'Do you feel like going to the cinema?',
            'Ça te dit de + infinitive is the usual way to suggest something.',
          ),
          gap(
            'i2',
            'Tu as ___ d’aller au concert ?',
            'envie',
            ['envie', 'voulu', 'raison', 'faim'],
            'Do you fancy going to the concert?',
            'Avoir envie de + infinitive means to feel like doing something.',
          ),
          gap(
            'i3',
            '— On va au théâtre samedi ? — Oui, ___ idée !',
            'bonne',
            ['bonne', 'bon', 'bien', 'belle'],
            'Shall we go to the theatre on Saturday? Yes, good idea!',
            'Idée is feminine, so bonne idée.',
          ),
          gap(
            'i4',
            '— Tu viens au zoo ? — Désolé, je ne ___ pas.',
            'peux',
            ['peux', 'peut', 'pouvez', 'suis'],
            'Are you coming to the zoo? Sorry, I can’t.',
            'Je ne peux pas is the polite way to refuse.',
          ),
          gap(
            'i5',
            '— On se retrouve ___ ? — Devant le théâtre.',
            'où',
            ['où', 'quand', 'qui', 'comment'],
            'Where shall we meet? In front of the theatre.',
            'The answer gives a place, so the question is où.',
          ),
          gap(
            'i6',
            'Je ___ pris ce soir.',
            'suis',
            ['suis', 'ai', 'vais', 'fais'],
            'I’m busy tonight.',
            'Être pris means to be busy (taken).',
          ),
          gap(
            'i7',
            'Rendez-vous ___ huit heures devant l’entrée.',
            'à',
            ['à', 'en', 'de', 'pour'],
            'Let’s meet at eight in front of the entrance.',
            'À gives the clock time.',
          ),
        ].map((item) => withLesson('fr-a21-invitations', item)),
      },
    ),

    activity(
      U,
      'gap-y',
      'gapfill',
      meta(
        'Replace the place with y',
        'Y stands for “there” and goes in front of the verb.',
        ['grammar', 'fr-a21-y'],
        3,
        4,
      ),
      {
        items: [
          gap(
            'y1',
            '— Tu vas au stade ? — Oui, j’___ vais.',
            'y',
            ['y', 'en', 'le', 'la'],
            'Are you going to the stadium? Yes, I’m going there.',
            'Y replaces à + a place: au stade → y.',
          ),
          gap(
            'y2',
            '— On va au cirque ? — Oui, on ___ va !',
            'y',
            ['y', 'en', 'le', 'lui'],
            'Shall we go to the circus? Yes, let’s go there!',
            'Y goes right before the verb.',
          ),
          gap(
            'y3',
            '— Tu connais le château ? — Non, je n’___ suis jamais allé.',
            'y',
            ['y', 'en', 'le', 'lui'],
            'Do you know the castle? No, I’ve never been there.',
            'In the passé composé y goes before the auxiliary, after n’.',
          ),
          gap(
            'y4',
            'Elle adore ce parc : elle ___ va tous les jours.',
            'y',
            ['y', 'en', 'le', 'la'],
            'She loves this park: she goes there every day.',
            'Y replaces the place, here à ce parc.',
          ),
          gap(
            'y5',
            '— Vous allez à la piscine ? — Non, nous n’___ allons pas.',
            'y',
            ['y', 'en', 'la', 'leur'],
            'Are you going to the swimming pool? No, we’re not going there.',
            'In the negative ne goes before y and pas after the verb.',
          ),
          gap(
            'y6',
            'Allons-___ !',
            'y',
            ['y', 'en', 'le', 'là'],
            'Let’s go!',
            'After an imperative y follows with a hyphen: allons-y, vas-y.',
          ),
          gap(
            'y7',
            '— Il est à la patinoire ? — Oui, il ___ est.',
            'y',
            ['y', 'en', 'la', 'lui'],
            'Is he at the ice rink? Yes, he’s there.',
            'Y can replace à + place after être too.',
          ),
        ].map((item) => withLesson('fr-a21-y', item)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words of an invitation in the right order.',
        ['grammar', 'communication', 'culture-outings'],
        2,
        4,
      ),
      {
        items: [
          withLesson(
            'fr-a21-invitations',
            sent(
              's1',
              'Do you feel like going to the theatre?',
              ['Ça', 'te', 'dit', 'd’aller', 'au', 'théâtre ?'],
              { extra: ['du'] },
            ),
          ),
          withLesson(
            'fr-a21-modals',
            sent(
              's2',
              'We have to book the tickets.',
              ['Nous', 'devons', 'réserver', 'les', 'billets.'],
              {
                extra: ['devez'],
              },
            ),
          ),
          withLesson(
            'fr-a21-modals',
            sent(
              's3',
              'I cannot come on Saturday.',
              ['Je', 'ne', 'peux', 'pas', 'venir', 'samedi.'],
              {
                extra: ['peut'],
              },
            ),
          ),
          withLesson(
            'fr-a21-y',
            sent('s4', 'They are going there tonight.', ['Ils', 'y', 'vont', 'ce', 'soir.'], {
              extra: ['en'],
            }),
          ),
          withLesson(
            'fr-a21-invitations',
            sent('s5', 'Where shall we meet?', ['On', 'se', 'retrouve', 'où ?']),
          ),
          withLesson(
            'fr-a21-y',
            sent('s6', 'I have never been there.', ['Je', 'n’y', 'suis', 'jamais', 'allé.'], {
              extra: ['en'],
            }),
          ),
        ],
      },
    ),

    activity(
      U,
      'spell-culture',
      'spell',
      meta(
        'Spell the going-out words',
        'Unscramble and type words for culture and outings. Accents are optional here.',
        ['spelling', 'culture-outings'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-theatre',
            mode: 'unscramble',
            answer: 'théâtre',
            hint: 'theatre',
            emoji: '🎭',
            speak: 'le théâtre',
          },
          {
            id: 'sp-exposition',
            mode: 'unscramble',
            answer: 'exposition',
            hint: 'exhibition',
            emoji: '🏺',
            speak: 'l’exposition',
          },
          {
            id: 'sp-spectacle',
            mode: 'type',
            answer: 'spectacle',
            hint: 'show',
            emoji: '🎪',
            speak: 'le spectacle',
          },
          {
            id: 'sp-billet',
            mode: 'type',
            answer: 'billet',
            hint: 'ticket',
            emoji: '🎟️',
            speak: 'le billet',
          },
          {
            id: 'sp-reservation',
            mode: 'type',
            answer: 'réservation',
            hint: 'booking',
            emoji: '📝',
            speak: 'la réservation',
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Going out',
        'Accept an invitation, say no politely and buy tickets.',
        ['communication', 'culture-outings'],
        2,
        5,
      ),
      {
        scenes: [
          {
            id: 'invitation',
            title: 'An invitation',
            emoji: '🎭',
            setting: 'Chloé invites you out. You say tu to each other.',
            turns: [
              say(
                'Chloé',
                'Salut ! Ça te dit d’aller au théâtre samedi ?',
                'Hi! Do you feel like going to the theatre on Saturday?',
              ),
              you(
                'Oui, bonne idée !',
                ['Oui, bon idée !', 'Idée is feminine: bonne idée.'],
                [
                  'Oui, je ne peux pas !',
                  'That is a refusal. To accept say bonne idée or avec plaisir.',
                ],
              ),
              say(
                'Chloé',
                'Super ! On se retrouve devant l’entrée à huit heures.',
                'Great! Let’s meet in front of the entrance at eight.',
              ),
              you(
                'D’accord, j’y vais.',
                ['D’accord, je y vais.', 'Je and y meet: j’y vais.'],
                ['D’accord, j’y allez.', 'With je the verb is vais: j’y vais.'],
              ),
            ],
          },
          {
            id: 'no-thanks',
            title: 'Saying no politely',
            emoji: '🙁',
            setting: 'Karim asks you to a concert, but you are busy.',
            turns: [
              say(
                'Karim',
                'Tu viens au concert ce soir ?',
                'Are you coming to the concert tonight?',
              ),
              you(
                'Désolé, je ne peux pas : je suis pris.',
                ['Désolé, je ne peut pas : je suis pris.', 'With je, pouvoir is peux.'],
                [
                  'Désolé, je ne pas peux : je suis pris.',
                  'Ne … pas goes around the verb: je ne peux pas.',
                ],
              ),
              say('Karim', 'Dommage ! Et dimanche ?', 'Too bad! What about Sunday?'),
              you(
                'Dimanche, je veux bien !',
                [
                  'Dimanche, je dois bien !',
                  'Devoir means must. Je veux bien means I’d be glad to.',
                ],
                ['Dimanche, j’ai bien !', 'Use vouloir: je veux bien.'],
              ),
            ],
          },
          {
            id: 'box-office',
            title: 'At the box office',
            emoji: '🎟️',
            setting: 'You buy tickets for a show. You say vous.',
            turns: [
              say('Le caissier', 'Bonjour, vous désirez ?', 'Hello, what would you like?'),
              you(
                'Je voudrais deux billets pour le spectacle.',
                ['Je voudrais deux billet pour le spectacle.', 'Two tickets: billets, with an -s.'],
                [
                  'Je veux deux billets pour spectacle.',
                  'Be polite with je voudrais and keep the article: pour le spectacle.',
                ],
              ),
              say(
                'Le caissier',
                'Voilà vos billets. Le spectacle commence à vingt heures.',
                'Here are your tickets. The show starts at eight p.m.',
              ),
              you(
                'Merci, où est l’entrée ?',
                [
                  'Merci, où est le entrée ?',
                  'Entrée is feminine and starts with a vowel: l’entrée.',
                ],
                ['Merci, où l’entrée est ?', 'Question order: où est l’entrée ?'],
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
        'Going-out blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'culture-outings', 'fr-a21-modals'],
        2,
        2,
      ),
      {
        seconds: 45,
        statements: [
          tf('b1', '“Ça te dit d’aller au cinéma ?” is an invitation.', true),
          tf('b2', '“Je ne peux pas” means “I don’t want to”.', false, 'It means I can’t.'),
          tf('b3', '“Nous devons partir” means “we have to leave”.', true),
          tf('b4', '“Il peut” is the il form of pouvoir.', true),
          tf('b5', '“Vous pouvons” is correct.', false, 'Vous pouvez, nous pouvons.'),
          tf('b6', '“Allons-y !” means “Let’s go!”.', true),
          tf('b7', '“J’y vais” can replace “je vais au théâtre”.', true),
          tf('b8', '“Je vais y au cinéma” is correct.', false, 'Y goes before the verb: j’y vais.'),
          tf('b9', '“Un billet” is a ticket.', true),
          tf(
            'b10',
            '“Dommage !” is what you say when you are happy.',
            false,
            'Dommage means too bad.',
          ),
          tf('b11', '“Je n’y suis jamais allé” is correct.', true),
          tf('b12', '“Ils doivent” is the ils form of devoir.', true),
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
        ['vocabulary', 'grammar', 'culture-outings'],
        3,
        4,
      ),
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which answer accepts an invitation?',
            options: ['Avec plaisir !', 'Dommage !', 'Je suis pris.', 'Ce n’est pas possible.'],
            answer: 'Avec plaisir !',
            lesson: 'fr-a21-invitations' as const,
          },
          {
            id: 'c2',
            prompt: 'Complete: “Nous ___ réserver les places.”',
            options: ['devons', 'devez', 'doit', 'dois'],
            answer: 'devons',
            lesson: 'fr-a21-modals' as const,
          },
          {
            id: 'c3',
            prompt: 'Complete: “Elle ne ___ pas venir.”',
            options: ['peut', 'peux', 'peuvent', 'pouvez'],
            answer: 'peut',
            lesson: 'fr-a21-modals' as const,
          },
          {
            id: 'c4',
            prompt: '“Tu vas au zoo ?” – “Oui, ___ ”',
            options: ['j’y vais.', 'je vais y.', 'j’en vais.', 'je le vais.'],
            answer: 'j’y vais.',
            lesson: 'fr-a21-y' as const,
          },
          {
            id: 'c5',
            prompt: 'Which sentence is correct?',
            options: [
              'Je n’y suis jamais allé.',
              'Je ne suis jamais y allé.',
              'Je n’ai y jamais allé.',
              'Je y ne suis jamais allé.',
            ],
            answer: 'Je n’y suis jamais allé.',
            lesson: 'fr-a21-y' as const,
          },
          {
            id: 'c6',
            prompt: 'Which phrase suggests an outing?',
            options: [
              'Ça te dit de sortir ?',
              'Dommage !',
              'Rendez-vous à huit heures.',
              'Je suis pris.',
            ],
            answer: 'Ça te dit de sortir ?',
            lesson: 'fr-a21-invitations' as const,
          },
          {
            id: 'c7',
            prompt: '“La file d’attente” is …',
            options: ['the queue', 'the entrance', 'the programme', 'the poster'],
            answer: 'the queue',
          },
          {
            id: 'c8',
            prompt: 'Complete: “Vous ___ voir le film ?”',
            options: ['voulez', 'veulent', 'voulons', 'veux'],
            answer: 'voulez',
            lesson: 'fr-a21-modals' as const,
          },
        ],
      },
    ),
  ],
};
