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
  tf,
  typed,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-c1-1-culture';
const L = 'fr-c11-emphasis' as const;

const arts = vocabList(U, 'Art and live performance', [
  ['un vernissage', 'an exhibition opening', '🥂'],
  ['une rétrospective', 'a retrospective', '🕰️'],
  ['un commissaire d’exposition', 'an exhibition curator', '🖼️'],
  ['un chef-d’œuvre', 'a masterpiece', '🏆'],
  ['une œuvre', 'a work (of art)', '🎨'],
  ['un mécène', 'a patron, a sponsor', '💎'],
  ['le patrimoine', 'heritage', '🏛️'],
  ['une toile', 'a canvas, a painting', '🖌️'],
  ['une installation', 'an art installation', '🧱'],
  ['la mise en scène', 'staging, direction (theatre)', '🎭'],
  ['un metteur en scène', 'a stage director', '🎬'],
  ['une troupe', 'a theatre company', '👥'],
  ['le spectacle vivant', 'live performance', '🎪'],
  ['une représentation', 'a performance', '🎟️'],
  ['la scène', 'the stage, the scene', '🎤'],
  ['les coulisses', 'backstage', '🚪'],
]);

const cinema = vocabList(U, 'Cinema and creation', [
  ['un long-métrage', 'a feature film', '🎞️'],
  ['un court-métrage', 'a short film', '📽️'],
  ['un documentaire', 'a documentary', '📹'],
  ['un scénario', 'a screenplay', '📝'],
  ['un tournage', 'a film shoot', '🎥'],
  ['le montage', 'editing', '✂️'],
  ['la bande originale', 'the soundtrack', '🎼'],
  ['une avant-première', 'a preview screening', '🌟'],
  ['la critique', 'the reviews, criticism', '🗞️'],
  ['un coup de cœur', 'a favourite, a love at first sight', '❤️'],
  ['un film culte', 'a cult film', '🔥'],
  ['le septième art', 'cinema (“the seventh art”)', '🍿'],
  ['une adaptation', 'an adaptation', '📖'],
  ['l’inspiration', 'inspiration', '💡'],
  ['la création', 'creation', '✨'],
  ['une affiche', 'a poster', '🪧'],
]);

const vocab = [...arts, ...cinema];

export const culture: UnitContent = {
  unit: unitFr({
    id: U,
    order: 8,
    title: 'Culture et création',
    subtitle: 'Exhibitions, theatre and film, with c’est … qui and ce que … c’est',
    emoji: '🎭',
    goals: [
      'Talk about exhibitions, theatre and live performance',
      'Discuss films, reviews and creative work',
      'Highlight an element with c’est … qui / que, ce qui … c’est and dislocation',
    ],
    grammar: [
      'C’est … qui (subject), c’est … que (object or complement)',
      'Ce qui / ce que / ce dont … c’est: the pseudo-cleft',
      'Dislocation: Cette pièce, je l’ai adorée',
    ],
    vocabFields: ['Art and live performance', 'Cinema and creation'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-arts',
      'flashcards',
      meta(
        'Art and live performance',
        'Un vernissage, un mécène, la mise en scène – the words of exhibitions and theatre.',
        ['vocabulary', 'art-creativity'],
        1,
        4,
      ),
      flashcards(arts),
    ),

    activity(
      U,
      'flash-cinema',
      'flashcards',
      meta(
        'Cinema and creation',
        'Un scénario, le montage, un coup de cœur – the words of film.',
        ['vocabulary', 'cinema-creativity'],
        1,
        4,
      ),
      flashcards(cinema),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'art-creativity'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'un vernissage',
          'un mécène',
          'une rétrospective',
          'les coulisses',
          'le montage',
          'une avant-première',
          'un film culte',
          'une adaptation',
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
        ['vocabulary', 'cinema-creativity'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'un mécène', b: 'quelqu’un qui finance des artistes' },
          { id: 'm2', a: 'une troupe', b: 'un groupe de comédiens qui jouent ensemble' },
          { id: 'm3', a: 'un tournage', b: 'la période où l’on filme un film' },
          { id: 'm4', a: 'un scénario', b: 'le texte qui raconte l’histoire d’un film' },
          { id: 'm5', a: 'les coulisses', b: 'la partie du théâtre cachée au public' },
          {
            id: 'm6',
            a: 'une rétrospective',
            b: 'une exposition qui présente toute l’œuvre d’un artiste',
          },
          { id: 'm7', a: 'une avant-première', b: 'une projection avant la sortie officielle' },
          { id: 'm8', a: 'le patrimoine', b: 'les biens culturels hérités du passé' },
        ],
      },
    ),

    activity(
      U,
      'listen-culture',
      'listen',
      meta(
        'Listen to the review',
        'Listen to the sentence and pick what it says.',
        ['listening', 'cinema-creativity'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'C’est la mise en scène qui rend cette pièce exceptionnelle.',
            'It is the staging that makes this play exceptional.',
            [
              'It is the author who wrote this play for the stage.',
              'The play is exceptional because the actors improvised.',
              'This play has been staged by an exceptional troupe.',
            ],
          ),
          heard(
            'l2',
            'Ce que j’ai préféré dans le film, c’est la bande originale.',
            'What I liked best in the film was the soundtrack.',
            [
              'What I disliked in the film was the editing.',
              'What I liked best was the film poster.',
              'The film preview was my favourite event this year.',
            ],
          ),
          heard(
            'l3',
            'Le vernissage de la rétrospective a lieu jeudi soir.',
            'The opening of the retrospective takes place on Thursday evening.',
            [
              'The retrospective closes on Thursday evening.',
              'The curator is giving a talk on Thursday morning.',
              'The exhibition opening was cancelled on Thursday.',
            ],
          ),
          heard(
            'l4',
            'C’est à Cannes que ce long-métrage a été présenté en avant-première.',
            'It was in Cannes that this feature film was shown as a preview.',
            [
              'This short film was awarded a prize in Cannes.',
              'It is in Cannes that the director wrote the screenplay.',
              'The critics have rejected this film in Cannes.',
            ],
          ),
          heard(
            'l5',
            'Cette adaptation, les critiques l’ont adorée.',
            'This adaptation, the critics loved it.',
            [
              'This adaptation, the critics have refused to review it.',
              'This book, the director has adapted it twice.',
              'The adaptation was written by the critics.',
            ],
          ),
          heard(
            'l6',
            'Ce dont on se souvient, c’est de la dernière scène.',
            'What one remembers is the last scene.',
            [
              'What one forgets is the first scene.',
              'What the director remembers is the last shoot.',
              'The last scene was cut at the editing stage.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-emphasis',
      'sortit',
      meta(
        'How is it highlighted?',
        'Sort the sentences by the structure that puts a word in the spotlight.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'Which structure does the sentence use?',
        buckets: [
          { id: 'qui', label: 'C’est … qui', emoji: '👤' },
          { id: 'que', label: 'C’est … que', emoji: '🎯' },
          { id: 'pseudo', label: 'Ce qui / ce que … c’est', emoji: '💡' },
          { id: 'dislo', label: 'Dislocation (…, je l’ai …)', emoji: '↪️' },
        ],
        items: cards('e', [
          [
            'C’est le réalisateur qui a choisi cette musique.',
            'qui',
            'It is the director who chose this music.',
          ],
          ['C’est elle qui a écrit le scénario.', 'qui', 'It is she who wrote the screenplay.'],
          ['Ce sont les acteurs qui ont improvisé.', 'qui', 'It is the actors who improvised.'],
          ['C’est ce film que j’ai préféré.', 'que', 'It is this film that I preferred.'],
          [
            'C’est à Cannes que le film a été présenté.',
            'que',
            'It is in Cannes that the film was shown.',
          ],
          [
            'C’est en 1959 que la Nouvelle Vague est née.',
            'que',
            'It was in 1959 that the New Wave was born.',
          ],
          ['Ce qui m’a plu, c’est la mise en scène.', 'pseudo', 'What I liked is the staging.'],
          ['Ce que je retiens, c’est l’émotion.', 'pseudo', 'What I take away is the emotion.'],
          ['Ce dont je me souviens, c’est la musique.', 'pseudo', 'What I remember is the music.'],
          ['Cette exposition, je l’ai adorée.', 'dislo', 'This exhibition, I loved it.'],
          ['Moi, je préfère les films anciens.', 'dislo', 'Me, I prefer old films.'],
          ['Les acteurs, ils ont été formidables.', 'dislo', 'The actors, they were wonderful.'],
        ]),
      },
    ),

    activity(
      U,
      'gap-emphasis',
      'gapfill',
      meta(
        'Choose the structure',
        'Pick the word that completes the highlighted sentence.',
        ['grammar', L, 'cinema-creativity'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'C’est la metteuse en scène ___ a choisi les acteurs.',
            'qui',
            {
              que: 'The highlighted element is the subject of a choisi, so qui is used.',
              dont: 'Dont replaces de + noun.',
              où: 'Où refers to a place or time.',
            },
            'It is the stage director who chose the actors.',
            'C’est … qui when the highlighted word is the subject.',
          ),
          gh(
            'g2',
            'C’est ce spectacle ___ j’ai préféré.',
            'que',
            {
              qui: 'The highlighted word is the object of j’ai préféré: que.',
              dont: 'Préférer does not take de.',
              où: 'Où refers to a place or time.',
            },
            'It is this show that I preferred.',
            'C’est … que for an object.',
          ),
          gh(
            'g3',
            'C’est à Avignon ___ le festival a lieu.',
            'que',
            {
              qui: 'The highlighted word is a place, not a subject.',
              où: 'In a cleft sentence a place is introduced by que.',
              dont: 'Dont replaces de + noun.',
            },
            'It is in Avignon that the festival takes place.',
            'C’est + place / time + que.',
          ),
          gh(
            'g4',
            '___ m’a plu, c’est la musique.',
            'Ce qui',
            {
              'Ce que': 'The pronoun is the subject of a plu: ce qui.',
              'Ce dont': 'Plaire does not take de.',
              'Ce à quoi': 'Plaire is already in the clause.',
            },
            'What I liked was the music.',
            'Ce qui … c’est: the highlighted word is a subject.',
          ),
          gh(
            'g5',
            '___ je retiens, c’est l’émotion.',
            'Ce que',
            {
              'Ce qui': 'Je is the subject; the pronoun is the object: ce que.',
              'Ce dont': 'Retenir does not take de.',
              'Ce à quoi': 'Retenir does not take à.',
            },
            'What I take away is the emotion.',
            'Ce que … c’est: the highlighted word is an object.',
          ),
          gh(
            'g6',
            'Ce dont je me souviens, ___ la fin du film.',
            'c’est',
            {
              'il est': 'The pseudo-cleft needs c’est to introduce the highlighted word.',
              'ce sont': 'La fin is singular, so c’est is used.',
              voilà: 'Voilà does not close a pseudo-cleft sentence.',
            },
            'What I remember is the end of the film.',
            'Ce … c’est.',
          ),
          gh(
            'g7',
            'Cette pièce, je ___ ai adorée.',
            'l’',
            {
              en: 'Cette pièce is a definite thing: l’, not en.',
              y: 'Y replaces a place or à + thing.',
              lui: 'Lui replaces à + person.',
            },
            'This play, I loved it.',
            'Dislocation: the noun is repeated by a pronoun (la pièce → l’).',
          ),
          gh(
            'g8',
            'Ce ne sont pas les décors ___ m’ont marqué, ce sont les costumes.',
            'qui',
            {
              que: 'The highlighted word is the subject of m’ont marqué: qui.',
              dont: 'Marquer does not take de.',
              où: 'Où refers to a place or time.',
            },
            'It is not the sets that struck me; it is the costumes.',
            'Ce sont … qui for a plural subject.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the word',
        'Type the word that completes the highlighted sentence.',
        ['grammar', L, 'art-creativity'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'C’est ___ qui a écrit la chanson, pas lui.',
            'elle',
            'It is she who wrote the song, not him.',
            'After c’est, a stressed pronoun: elle.',
          ),
          typed(
            't2',
            'C’est lui ___ je veux voir en concert.',
            'que',
            'It is him I want to see in concert.',
            'Object: c’est … que.',
          ),
          typed(
            't3',
            'Ce ___ m’intéresse, c’est le montage.',
            'qui',
            'What interests me is the editing.',
            'Subject: ce qui.',
          ),
          typed(
            't4',
            'Ce ___ j’admire, c’est son courage.',
            'que',
            'What I admire is his courage.',
            'Object: ce que.',
          ),
          typed(
            't5',
            'Ce ___ j’ai besoin, c’est d’inspiration.',
            'dont',
            'What I need is inspiration.',
            'Avoir besoin de → ce dont.',
          ),
          typed(
            't6',
            'Ce sont mes parents ___ m’ont fait découvrir le théâtre.',
            'qui',
            'It is my parents who introduced me to the theatre.',
            'Subject plural: ce sont … qui.',
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
        'Put the words in order. Put the right word in the spotlight.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'It is the director who chose this music.',
            ['C’est', 'le', 'réalisateur', 'qui', 'a', 'choisi', 'cette', 'musique.'],
            { extra: ['que'] },
          ),
          sent(
            'b2',
            'It is this film that I preferred.',
            ['C’est', 'ce', 'film', 'que', 'j’ai', 'préféré.'],
            { extra: ['qui'] },
          ),
          sent(
            'b3',
            'What I take away is the emotion.',
            ['Ce', 'que', 'je', 'retiens,', 'c’est', 'l’émotion.'],
            { extra: ['qui'] },
          ),
          sent(
            'b4',
            'This exhibition, I loved it.',
            ['Cette', 'exposition,', 'je', 'l’ai', 'adorée.'],
            { extra: ['lui'] },
          ),
          sent(
            'b5',
            'It is in Cannes that the film was shown.',
            ['C’est', 'à', 'Cannes', 'que', 'le', 'film', 'a', 'été', 'présenté.'],
            { extra: ['où'] },
          ),
          sent(
            'b6',
            'It is not the sets that struck me, it is the costumes.',
            [
              'Ce',
              'ne',
              'sont',
              'pas',
              'les',
              'décors',
              'qui',
              'm’ont',
              'marqué,',
              'ce',
              'sont',
              'les',
              'costumes.',
            ],
            { extra: ['que'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Talking about culture',
        'Two conversations: an exhibition opening and a film with a friend.',
        ['communication', 'cinema-creativity'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'vernissage',
            title: 'An exhibition opening',
            emoji: '🥂',
            setting: 'You meet the curator at the opening of a retrospective.',
            turns: [
              say(
                'La commissaire',
                'Bonsoir ! Que pensez-vous de la rétrospective ?',
                'Good evening! What do you think of the retrospective?',
              ),
              you(
                'Ce qui m’a le plus marqué, c’est la lumière des dernières toiles.',
                [
                  'Ce que m’a le plus marqué, c’est la lumière.',
                  'The pronoun is the subject of a marqué: ce qui.',
                ],
                ['Je n’aime pas les expositions.', 'This is blunt and ends the conversation.'],
              ),
              say(
                'La commissaire',
                'C’est un mécène qui a financé ces toiles. Sans lui, rien n’aurait été possible.',
                'It was a patron who financed these paintings. Without him, nothing would have been possible.',
              ),
              you(
                'Les mécènes, ils jouent un rôle essentiel : c’est grâce à eux que le patrimoine survit.',
                [
                  'Les mécènes, ils jouent un rôle : c’est grâce à eux qui le patrimoine survit.',
                  'In c’est grâce à … que, que is needed, not qui.',
                ],
                ['Le patrimoine, ça m’est égal.', 'This ignores the curator’s point.'],
              ),
            ],
          },
          {
            id: 'film',
            title: 'A film with a friend',
            emoji: '🍿',
            setting: 'You and a friend leave the cinema.',
            turns: [
              say(
                'Sarah',
                'Alors, tu as aimé ce long-métrage ?',
                'So, did you like this feature film?',
              ),
              you(
                'Oui ! Ce film, je l’ai adoré. Ce que j’ai préféré, c’est la bande originale.',
                [
                  'Oui ! Ce film, je lui ai adoré.',
                  'Lui replaces à + a person; here the direct pronoun le is needed.',
                ],
                [
                  'Non, je n’ai rien préféré.',
                  'This contradicts what you said and ends the conversation.',
                ],
              ),
              say(
                'Sarah',
                'Moi, c’est le montage qui m’a plu. Il est très rapide.',
                'Me, it is the editing that I liked. It is very fast.',
              ),
              you(
                'C’est vrai, c’est le montage qui donne ce rythme à toute l’histoire.',
                [
                  'C’est vrai, c’est le montage que donne ce rythme.',
                  'The editing is the subject of donne: qui.',
                ],
                ['Je ne sais pas, je dormais.', 'This does not continue the conversation.'],
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
        'Emphasis blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'art-creativity'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“C’est … qui” highlights a subject.', true),
          tf(
            'b2',
            '“C’est … que” highlights a subject.',
            false,
            'It highlights an object or an adverbial.',
          ),
          tf('b3', '“Ce qui … c’est” introduces a subject in the first part.', true),
          tf('b4', '“Ce dont … c’est” goes with verbs that take de.', true),
          tf('b5', 'In a dislocation, a pronoun repeats the noun: “Ce film, je l’ai adoré”.', true),
          tf('b6', 'You say “Ce sont les acteurs qui” for a plural subject.', true),
          tf('b7', '“Un vernissage” is the opening of an exhibition.', true),
          tf('b8', '“Un mécène” is an actor.', false, 'It is a patron.'),
          tf('b9', '“Les coulisses” are the seats for the audience.', false, 'They are backstage.'),
          tf('b10', '“Le septième art” is a name for cinema.', true),
          tf(
            'b11',
            '“Un court-métrage” lasts longer than a feature film.',
            false,
            'It is a short film.',
          ),
          tf('b12', '“Une bande originale” is a film soundtrack.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: culture words and highlighting.',
        ['vocabulary', 'grammar', L, 'art-creativity'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “un chef-d’œuvre”?', 'a masterpiece', [
            'a chief editor',
            'a first draft',
            'a prize',
          ]),
          qh(
            'c2',
            'C’est ce tableau ___ j’aime le plus.',
            'que',
            {
              qui: 'The highlighted word is the object of j’aime: que.',
              dont: 'Aimer does not take de.',
              où: 'Où refers to a place or time.',
            },
            L,
          ),
          q('c3', '“Un tournage” is …', 'a film shoot', ['an exhibition', 'a poster', 'a ticket']),
          qh(
            'c4',
            '___ m’impressionne, c’est son talent.',
            'Ce qui',
            {
              'Ce que': 'The pronoun is the subject of impressionne: ce qui.',
              'Ce dont': 'Impressionner does not take de.',
              'Ce à quoi': 'Impressionner does not take à.',
            },
            L,
          ),
          q('c5', '“Une avant-première” is …', 'a preview screening', [
            'the first row',
            'a film festival',
            'a sequel',
          ]),
          qh(
            'c6',
            'C’est en mars ___ le festival commence.',
            'que',
            {
              qui: 'The highlighted word is a time, not a subject.',
              où: 'In a cleft sentence a time is introduced by que.',
              dont: 'Dont replaces de + noun.',
            },
            L,
          ),
          q('c7', '“Une troupe” is …', 'a theatre company', [
            'a stage',
            'a rehearsal',
            'an audience',
          ]),
          qh(
            'c8',
            'Cette chanson, je ___ écoute tous les jours.',
            'l’',
            {
              en: 'En does not replace a definite noun.',
              y: 'Y replaces a place or à + thing.',
              lui: 'Lui replaces à + a person.',
            },
            L,
          ),
          q('c9', '“La critique” in a newspaper is …', 'a review', [
            'a cast list',
            'a ticket',
            'a poster',
          ]),
          qh(
            'c10',
            'Ce ___ je cherche, c’est un bon scénario.',
            'que',
            {
              qui: 'Je is the subject; the pronoun is the object: ce que.',
              dont: 'Chercher does not take de.',
              'à quoi': 'Chercher takes a direct object, not à.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
