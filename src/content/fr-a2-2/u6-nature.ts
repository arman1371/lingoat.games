import { activity, byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import { gap, mc, npc, unitFr, you, type UnitContent } from './helpers';

const U = 'fr-a2-2-nature';

const landscape = vocabList(U, 'Landscapes and places', [
  ['un sentier', 'a path, a trail', '🥾'],
  ['une colline', 'a hill', '⛰️'],
  ['une falaise', 'a cliff', '🪨'],
  ['un lac', 'a lake', '🏞️'],
  ['une rivière', 'a river', '🌊'],
  ['une vallée', 'a valley', '🌄'],
  ['un sommet', 'a summit', '🏔️'],
  ['une grotte', 'a cave', '🕳️'],
  ['une prairie', 'a meadow', '🌾'],
  ['un volcan', 'a volcano', '🌋'],
  ['une île', 'an island', '🏝️'],
  ['un glacier', 'a glacier', '🧊'],
  ['une réserve naturelle', 'a nature reserve', '🦌'],
  ['un parc national', 'a national park', '🌲'],
]);

const wildlife = vocabList(U, 'Animals and plants', [
  ['un renard', 'a fox', '🦊'],
  ['un cerf', 'a stag', '🦌'],
  ['un écureuil', 'a squirrel', '🐿️'],
  ['un hérisson', 'a hedgehog', '🦔'],
  ['un sanglier', 'a wild boar', '🐗'],
  ['un aigle', 'an eagle', '🦅'],
  ['une abeille', 'a bee', '🐝'],
  ['un papillon', 'a butterfly', '🦋'],
  ['une fourmi', 'an ant', '🐜'],
  ['un champignon', 'a mushroom', '🍄'],
  ['un chêne', 'an oak', '🌳'],
  ['une fougère', 'a fern', '🌿'],
]);

const outdoors = vocabList(U, 'Outdoors, fear and protest', [
  ['une tente', 'a tent', '⛺'],
  ['un sac à dos', 'a backpack', '🎒'],
  ['une boussole', 'a compass', '🧭'],
  ['un feu de camp', 'a campfire', '🔥'],
  ['une pétition', 'a petition', '📝'],
  ['protéger', 'to protect', '🛡️'],
  ['J’ai peur des serpents.', 'I am afraid of snakes.', '🐍'],
  ['Je suis capable de marcher dix kilomètres.', 'I am able to walk ten kilometres.', '💪'],
  ['Je suis tout à fait d’accord.', 'I completely agree.', '👍'],
  ['Je ne suis pas d’accord du tout.', 'I do not agree at all.', '👎'],
  ['Il est interdit de cueillir les fleurs.', 'It is forbidden to pick the flowers.', '🚫'],
  ['Il faut protéger la nature !', 'We must protect nature!', '🌍'],
]);

const vocab = [...landscape, ...wildlife, ...outdoors];

const meaningQuiz = byDe(
  vocab,
  'un sentier',
  'une falaise',
  'une vallée',
  'une prairie',
  'un écureuil',
  'un hérisson',
  'une boussole',
  'une pétition',
);

/** [command, bucket, English] for the imperative sort */
const COMMANDS: [string, 'after' | 'before', string][] = [
  ['Vas-y !', 'after', 'Go on!'],
  ['N’y va pas !', 'before', 'Do not go there!'],
  ['Prends-en.', 'after', 'Take some.'],
  ['N’en prends pas.', 'before', 'Do not take any.'],
  ['Dis-le-moi.', 'after', 'Tell it to me.'],
  ['Ne me le dis pas.', 'before', 'Do not tell it to me.'],
  ['Parlez-en !', 'after', 'Talk about it!'],
  ['Ne lui parlez pas.', 'before', 'Do not talk to him.'],
  ['Montre-la-nous.', 'after', 'Show it to us.'],
  ['Ne les touchez pas.', 'before', 'Do not touch them.'],
];

export const nature: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'Soif de nature',
    subtitle: 'Go out into nature, say what you fear and can do, and take a stand',
    emoji: '🌲',
    goals: [
      'Give orders and advice with pronouns: vas-y, prends-en, ne le touche pas',
      'Say what something is for: pour, afin de, pour que',
      'Approve, protest and describe what is done to nature',
    ],
    grammar: [
      'The imperative with pronouns (y, en, le, la, les)',
      'Purpose: pour, afin de, pour que, afin que',
      'The passive voice: être + participle + par',
    ],
    vocabFields: ['Landscapes and places', 'Animals and plants', 'Outdoors, fear and protest'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-landscape',
      'flashcards',
      {
        title: 'Landscapes and places',
        description: 'Trails, lakes, summits and parks.',
        tags: ['vocabulary', 'environment'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(landscape),
    ),

    activity(
      U,
      'flash-wildlife',
      'flashcards',
      {
        title: 'Animals and plants',
        description: 'The wildlife you may meet on a walk.',
        tags: ['vocabulary', 'environment'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(wildlife),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Read the word and pick its meaning.',
        tags: ['vocabulary', 'environment'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(meaningQuiz, [...landscape, ...wildlife], 4),
    ),

    activity(
      U,
      'listen-nature',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'environment'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'une colline',
          'un sommet',
          'une grotte',
          'un renard',
          'un cerf',
          'une abeille',
          'un papillon',
          'une tente',
        ),
        [...landscape, ...wildlife, ...outdoors],
      ),
    ),

    activity(
      U,
      'spell-nature',
      'spell',
      {
        title: 'Spell the nature words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'environment'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-sentier',
            mode: 'unscramble',
            answer: 'sentier',
            hint: 'trail',
            emoji: '🥾',
            speak: 'un sentier',
          },
          {
            id: 'sp-renard',
            mode: 'unscramble',
            answer: 'renard',
            hint: 'fox',
            emoji: '🦊',
            speak: 'un renard',
          },
          {
            id: 'sp-ecureuil',
            mode: 'type',
            answer: 'écureuil',
            hint: 'squirrel',
            emoji: '🐿️',
            speak: 'un écureuil',
          },
          {
            id: 'sp-boussole',
            mode: 'type',
            answer: 'boussole',
            hint: 'compass',
            emoji: '🧭',
            speak: 'une boussole',
          },
          {
            id: 'sp-papillon',
            mode: 'dictation',
            answer: 'papillon',
            hint: 'Type what you hear (a butterfly)',
            emoji: '🦋',
            speak: 'un papillon',
          },
        ],
      },
    ),

    activity(
      U,
      'sort-imperative',
      'sortit',
      {
        title: 'Before or after the verb?',
        description:
          'Where does the pronoun stand: after the verb (command) or before it (prohibition)?',
        tags: ['grammar', 'fr-a22-imperative-pronouns'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-a22-imperative-pronouns',
      },
      {
        instruction: 'Is the pronoun after the verb (with a hyphen) or before it?',
        buckets: [
          { id: 'after', label: 'Command: after the verb', emoji: '➡️' },
          { id: 'before', label: 'Prohibition: before the verb', emoji: '⛔' },
        ],
        items: COMMANDS.map(([text, bucket, translation], i) => ({
          id: `i${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-imperative',
      'gapfill',
      {
        title: 'Commands with pronouns',
        description: 'Add the right pronoun to the command.',
        tags: ['grammar', 'fr-a22-imperative-pronouns', 'environment'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-imperative-pronouns',
      },
      {
        items: [
          gap(
            'i1',
            'Tu veux des champignons ? Prends-___ !',
            'en',
            ['y', 'le', 'lui'],
            'Do you want some mushrooms? Take some!',
            'En replaces des champignons and follows the verb in a command.',
          ),
          gap(
            'i2',
            'Le sentier est magnifique. Vas-___ !',
            'y',
            ['en', 'le', 'lui'],
            'The trail is beautiful. Go on!',
            'Y replaces à + place. Vas-y keeps its s before y.',
          ),
          gap(
            'i3',
            'Cette boussole est utile. Donne-___-moi, s’il te plaît.',
            'la',
            ['lui', 'leur', 'y'],
            'This compass is useful. Give it to me, please.',
            'The direct pronoun comes first: donne-la-moi.',
          ),
          gap(
            'i4',
            'N’___ allez pas : le sentier est fermé !',
            'y',
            ['en', 'le', 'lui'],
            'Do not go there: the trail is closed!',
            'In a negative command the pronoun is before the verb: n’y allez pas.',
          ),
          gap(
            'i5',
            'Cet écureuil est timide. Ne ___ touche pas !',
            'le',
            ['lui', 'en', 'y'],
            'This squirrel is shy. Do not touch it!',
            'Toucher takes a direct object: ne le touche pas.',
          ),
          gap(
            'i6',
            'Tu as des photos ? Montre-___-nous !',
            'les',
            ['leur', 'lui', 'y'],
            'Do you have photos? Show them to us!',
            'Direct pronoun first, then nous: montre-les-nous.',
          ),
          gap(
            'i7',
            'On part à six heures : levez-___ tôt !',
            'vous',
            ['nous', 'te', 'se'],
            'We leave at six: get up early!',
            'The reflexive pronoun follows the verb in a command: levez-vous.',
          ),
          gap(
            'i8',
            'Tu es fatigué ? Ne ___ lève pas trop tard !',
            'te',
            ['toi', 'tu', 'se'],
            'Are you tired? Do not get up too late!',
            'In a negative command it is te, before the verb.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-purpose',
      'gapfill',
      {
        title: 'Pour, afin de, pour que',
        description: 'Pick the word that says what something is for.',
        tags: ['grammar', 'fr-a22-purpose', 'environment'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-purpose',
      },
      {
        items: [
          gap(
            'p1',
            'Nous partons tôt ___ éviter la chaleur.',
            'pour',
            ['pour que', 'afin que', 'à cause de'],
            'We leave early to avoid the heat.',
            'Same subject: pour + infinitive.',
          ),
          gap(
            'p2',
            'Je prends une boussole ___ nous ne nous perdions pas.',
            'pour que',
            ['pour', 'afin de', 'de peur de'],
            'I take a compass so that we do not get lost.',
            'A new subject needs pour que + subjunctive.',
          ),
          gap(
            'p3',
            'Il met des bottes ___ ne pas glisser.',
            'afin de',
            ['afin que', 'pour que', 'à cause de'],
            'He puts on boots so as not to slip.',
            'Same subject: afin de + infinitive (a little more formal than pour).',
          ),
          gap(
            'p4',
            'On a créé ce parc ___ les animaux soient protégés.',
            'pour que',
            ['pour', 'afin de', 'sans'],
            'This park was created so that the animals are protected.',
            'The subject changes (on / les animaux): pour que + subjunctive.',
          ),
          gap(
            'p5',
            'Elle signe la pétition ___ protéger la forêt.',
            'pour',
            ['pour que', 'afin que', 'grâce à'],
            'She signs the petition to protect the forest.',
            'Same subject: pour + infinitive.',
          ),
          gap(
            'p6',
            'Je t’explique le chemin ___ tu le trouves facilement.',
            'pour que',
            ['pour', 'afin de', 'sans'],
            'I explain the way to you so that you find it easily.',
            'New subject (tu): pour que + subjunctive.',
          ),
          gap(
            'p7',
            'Nous ramassons nos déchets ___ laisser la nature propre.',
            'afin de',
            ['afin que', 'pour que', 'sans'],
            'We pick up our rubbish in order to leave nature clean.',
            'Same subject: afin de + infinitive.',
          ),
          gap(
            'p8',
            'Les guides parlent doucement ___ les oiseaux ne s’envolent pas.',
            'afin que',
            ['afin de', 'pour', 'grâce à'],
            'The guides speak softly so that the birds do not fly away.',
            'A new subject needs afin que + subjunctive.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-passive',
      'gapfill',
      {
        title: 'The passive voice',
        description: 'Complete the passive sentence: être + participle.',
        tags: ['grammar', 'fr-a22-passive', 'environment'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-passive',
      },
      {
        items: [
          gap(
            'v1',
            'Ce parc ___ par l’État.',
            'est protégé',
            ['protège', 'est protégée', 'a protégé'],
            'This park is protected by the State.',
            'Present passive: est + participle (agreeing with parc, masculine).',
          ),
          gap(
            'v2',
            'Les arbres ___ par la tempête.',
            'ont été abattus',
            ['ont abattu', 'sont abattu', 'a été abattus'],
            'The trees were felled by the storm.',
            'Passé composé passive: ont été + participle, agreeing with les arbres.',
          ),
          gap(
            'v3',
            'Cette réserve ___ chaque année par des milliers de visiteurs.',
            'est visitée',
            ['visite', 'est visité', 'a visité'],
            'This reserve is visited by thousands of visitors every year.',
            'The participle agrees with réserve (feminine): visitée.',
          ),
          gap(
            'v4',
            'Le sentier ___ à cause de la neige.',
            'a été fermé',
            ['a fermé', 'est fermée', 'fermait'],
            'The trail was closed because of the snow.',
            'A one-time event in the past: a été + participle.',
          ),
          gap(
            'v5',
            'Les animaux sont nourris ___ les gardiens.',
            'par',
            ['de', 'à', 'pour'],
            'The animals are fed by the keepers.',
            'The agent of a passive is introduced by par.',
          ),
          gap(
            'v6',
            'La forêt ___ par un incendie en 2019.',
            'a été détruite',
            ['a été détruit', 'a détruit', 'est détruire'],
            'The forest was destroyed by a fire in 2019.',
            'Feminine subject: a été détruite.',
          ),
          gap(
            'v7',
            '« Le garde ouvre la porte. » → La porte ___ par le garde.',
            'est ouverte',
            ['est ouvert', 'ouvre', 'a ouvert'],
            'The door is opened by the ranger.',
            'The object of the active sentence becomes the subject: la porte est ouverte.',
          ),
          gap(
            'v8',
            'Le lac est entouré ___ montagnes.',
            'de',
            ['par', 'à', 'avec'],
            'The lake is surrounded by mountains.',
            'With verbs of state (entouré, couvert, rempli) de is common.',
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
        tags: ['grammar', 'environment'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'Go on, the trail is wonderful!',
            words: ['Vas-y,', 'le', 'sentier', 'est', 'magnifique !'],
            extra: ['Y'],
            lesson: 'fr-a22-imperative-pronouns',
          },
          {
            id: 's2',
            translation: 'Do not touch it!',
            words: ['Ne', 'le', 'touche', 'pas !'],
            extra: ['lui'],
            lesson: 'fr-a22-imperative-pronouns',
          },
          {
            id: 's3',
            translation: 'Take a little of it.',
            words: ['Prenez-en', 'un', 'peu.'],
            extra: ['y'],
            lesson: 'fr-a22-imperative-pronouns',
          },
          {
            id: 's4',
            translation: 'We leave early to avoid the heat.',
            words: ['Nous', 'partons', 'tôt', 'pour', 'éviter', 'la', 'chaleur.'],
            extra: ['afin'],
            lesson: 'fr-a22-purpose',
          },
          {
            id: 's5',
            translation: 'This park is protected by the State.',
            words: ['Ce', 'parc', 'est', 'protégé', 'par', 'l’État.'],
            extra: ['de'],
            lesson: 'fr-a22-passive',
          },
          {
            id: 's6',
            translation: 'The trees were felled by the storm.',
            words: ['Les', 'arbres', 'ont', 'été', 'abattus', 'par', 'la', 'tempête.'],
            extra: ['abattu'],
            lesson: 'fr-a22-passive',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-expressions',
      'flashcards',
      {
        title: 'Outdoors, fear and protest',
        description: 'Gear, fear, ability, agreement and protest.',
        tags: ['vocabulary', 'communication', 'environment'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(outdoors),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'A reserve, a hike, a petition',
        description: 'Ask the guide, plan a walk with a friend and take a stand.',
        tags: ['communication', 'environment'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'reserve',
            title: 'At the nature reserve',
            emoji: '🦌',
            setting: 'You visit a reserve. You say vous to the guide.',
            turns: [
              npc(
                'Le guide',
                'Bienvenue dans la réserve ! Vous avez des questions ?',
                'Welcome to the reserve! Do you have any questions?',
              ),
              you(
                'Oui, j’ai peur des serpents : est-ce qu’il y en a ici ?',
                [
                  'Oui, j’ai peur des serpents : est-ce qu’il y a eux ici ?',
                  'Des serpents is a quantity: replace it with en (il y en a).',
                ],
                [
                  'Oui, j’ai peur de serpents : est-ce qu’il y en a ici ?',
                  'Avoir peur des serpents: the article is des.',
                ],
              ),
              npc(
                'Le guide',
                'Il y en a quelques-uns, mais ils sont très discrets. Ne les touchez pas, c’est tout.',
                'There are a few, but they are very discreet. Just do not touch them.',
              ),
              you(
                'Entendu. Et des champignons, je peux en cueillir ?',
                [
                  'Entendu. Et des champignons, je peux y cueillir ?',
                  'Y replaces à + place. A quantity of something is en.',
                ],
                [
                  'Entendu. Et des champignons, je peux les cueillir de ?',
                  'Des champignons is an indefinite quantity, so use en before the infinitive.',
                ],
              ),
              npc(
                'Le guide',
                'Non, c’est interdit. Les champignons sont protégés par la loi.',
                'No, it is forbidden. Mushrooms are protected by law.',
              ),
              you(
                'Compris. Cette réserve est vraiment bien gardée !',
                [
                  'Compris. Cette réserve est vraiment bien gardé !',
                  'The participle agrees with réserve (feminine): gardée.',
                ],
                [
                  'Compris. Cette réserve a vraiment bien gardée !',
                  'The passive is est + participle, not a form of avoir.',
                ],
              ),
            ],
          },
          {
            id: 'hike',
            title: 'Planning a hike',
            emoji: '🥾',
            setting: 'You plan a Saturday walk with your friend Nina. You say tu to each other.',
            turns: [
              npc(
                'Nina',
                'On part en randonnée samedi ? Il faut partir tôt.',
                'Shall we go hiking on Saturday? We have to leave early.',
              ),
              you(
                'Bonne idée ! Levons-nous à six heures pour éviter la chaleur.',
                [
                  'Bonne idée ! Levons-nous à six heures pour que éviter la chaleur.',
                  'The subject does not change, so use pour + infinitive.',
                ],
                [
                  'Bonne idée ! Nous levons-nous à six heures pour éviter la chaleur.',
                  'In a command the pronoun follows the verb: levons-nous.',
                ],
              ),
              npc(
                'Nina',
                'D’accord. Et si on prenait une boussole ?',
                'OK. And what if we took a compass?',
              ),
              you(
                'Oui, prenons-en une pour que nous ne nous perdions pas.',
                [
                  'Oui, prenons-y une pour que nous ne nous perdions pas.',
                  'Une of something is replaced by en, not y.',
                ],
                [
                  'Oui, prenons-en une pour ne pas que nous nous perdions.',
                  'Say pour que nous ne nous perdions pas: ne … pas goes round the verb.',
                ],
              ),
              npc(
                'Nina',
                'Super. N’oublie pas ton sac à dos !',
                'Great. Do not forget your backpack!',
              ),
              you(
                'Ne t’inquiète pas, je l’ai déjà préparé.',
                [
                  'Ne t’inquiète pas, je lui ai déjà préparé.',
                  'Le sac à dos is a thing and a direct object: le / l’, not lui.',
                ],
                [
                  'Ne inquiète-toi pas, je l’ai déjà préparé.',
                  'In a negative command the pronoun is before the verb: ne t’inquiète pas.',
                ],
              ),
            ],
          },
          {
            id: 'petition',
            title: 'A petition',
            emoji: '📝',
            setting: 'A neighbour, Mme Roux, speaks to you about a forest. You say vous to her.',
            turns: [
              npc(
                'Mme Roux',
                'Bonjour ! Vous avez entendu parler du projet d’autoroute dans la forêt ?',
                'Hello! Have you heard about the motorway project in the forest?',
              ),
              you(
                'Oui, et je ne suis pas d’accord du tout : cette forêt doit être protégée.',
                [
                  'Oui, et je ne suis pas d’accord du tout : cette forêt doit être protégé.',
                  'The participle agrees with forêt (feminine): protégée.',
                ],
                [
                  'Oui, et je ne suis pas d’accord du tout : cette forêt doit protégée.',
                  'The passive infinitive is être + participle: doit être protégée.',
                ],
              ),
              npc(
                'Mme Roux',
                'Nous avons lancé une pétition. Signez-la pour que le projet soit abandonné !',
                'We have launched a petition. Sign it so that the project is abandoned!',
              ),
              you(
                'Avec plaisir, je la signe tout de suite.',
                [
                  'Avec plaisir, je lui signe tout de suite.',
                  'La pétition is a direct object: la.',
                ],
                [
                  'Avec plaisir, je signe-la tout de suite.',
                  'Outside commands the pronoun stands before the verb: je la signe.',
                ],
              ),
              npc(
                'Mme Roux',
                'Merci beaucoup ! Parlez-en à vos voisins.',
                'Thank you very much! Tell your neighbours about it.',
              ),
              you(
                'Bien sûr, j’en parle à tout le monde dès ce soir.',
                [
                  'Bien sûr, j’y parle à tout le monde dès ce soir.',
                  'Parler de … is replaced by en, not y.',
                ],
                [
                  'Bien sûr, j’en parle tout le monde dès ce soir.',
                  'Parler à quelqu’un needs the preposition à: à tout le monde.',
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
      {
        title: 'Nature blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'environment', 'fr-a22-passive'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“Vas-y” keeps the s before y.', isTrue: true },
          {
            id: 'b2',
            text: '“Ne prends-en pas” is correct.',
            isTrue: false,
            explanation: 'In a negative command the pronoun is before the verb: n’en prends pas.',
          },
          { id: 'b3', text: '“Donne-le-moi” has the pronouns in the right order.', isTrue: true },
          {
            id: 'b4',
            text: '“Pour que” is followed by the subjunctive.',
            isTrue: true,
          },
          {
            id: 'b5',
            text: '“Pour que partir tôt” is correct.',
            isTrue: false,
            explanation: 'With the same subject use pour + infinitive: pour partir tôt.',
          },
          { id: 'b6', text: '“Afin de” is a more formal “pour”.', isTrue: true },
          {
            id: 'b7',
            text: 'The agent of a passive sentence is introduced by “par”.',
            isTrue: true,
          },
          {
            id: 'b8',
            text: '“La forêt est détruit” is correct.',
            isTrue: false,
            explanation: 'The participle agrees with forêt: la forêt est détruite.',
          },
          { id: 'b9', text: '“Un écureuil” is a squirrel.', isTrue: true },
          {
            id: 'b10',
            text: '“Un sommet” is a valley.',
            isTrue: false,
            explanation: 'Un sommet is a summit. A valley is une vallée.',
          },
          { id: 'b11', text: '“Une boussole” helps you find the direction.', isTrue: true },
          {
            id: 'b12',
            text: '“Je suis tout à fait d’accord” means I completely agree.',
            isTrue: true,
          },
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
        tags: ['vocabulary', 'grammar', 'environment'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          mc('c1', 'Complete: “Tu veux du pain ? Prends-___ !”', 'en', ['y', 'le', 'lui'], {
            lesson: 'fr-a22-imperative-pronouns',
          }),
          mc(
            'c2',
            'Complete: “Le lac est beau. N’___ nage pas, c’est interdit !”',
            'y',
            ['en', 'le', 'lui'],
            {
              lesson: 'fr-a22-imperative-pronouns',
            },
          ),
          mc(
            'c3',
            'Complete: “Je prends une tente ___ nous dormions dehors.”',
            'pour que',
            ['pour', 'afin de', 'sans'],
            {
              lesson: 'fr-a22-purpose',
            },
          ),
          mc(
            'c4',
            'Complete: “Elle part tôt ___ éviter les touristes.”',
            'afin de',
            ['afin que', 'pour que', 'sans'],
            {
              lesson: 'fr-a22-purpose',
            },
          ),
          mc(
            'c5',
            'Turn into the passive: “Le gardien ferme la grotte.”',
            'La grotte est fermée par le gardien.',
            [
              'La grotte ferme le gardien.',
              'La grotte est fermé par le gardien.',
              'Le gardien est fermé par la grotte.',
            ],
            { lesson: 'fr-a22-passive' },
          ),
          mc(
            'c6',
            'Complete: “Ces papillons ___ par les enfants.”',
            'sont observés',
            ['observent', 'sont observé', 'ont observé'],
            {
              lesson: 'fr-a22-passive',
            },
          ),
          mc('c7', '“Un hérisson” is …', 'a hedgehog', ['a boar', 'an eagle', 'a fern']),
          mc('c8', 'You do not agree. What do you say?', 'Je ne suis pas d’accord du tout.', [
            'Je suis tout à fait d’accord.',
            'J’ai peur des serpents.',
            'Il faut protéger la nature !',
          ]),
        ],
      },
    ),
  ],
};
