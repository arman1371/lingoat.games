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

const U = 'fr-c1-2-sport';

const vocab = vocabList(U, 'Sport de haut niveau', [
  ['l’entraînement', 'training session', '🏋️'],
  ['l’échauffement', 'warm-up', '🔥'],
  ['l’endurance', 'stamina', '🫁'],
  ['le dépassement de soi', 'pushing one’s limits', '🧗'],
  ['le record', 'record', '🏅'],
  ['battre un record', 'to break a record', '💥'],
  ['la performance', 'performance, achievement', '📈'],
  ['le dopage', 'doping', '💉'],
  ['le podium', 'podium', '🥇'],
  ['la médaille', 'medal', '🎖️'],
  ['les Jeux olympiques', 'the Olympic Games', '🔥'],
  ['la flamme olympique', 'Olympic flame', '🕯️'],
  ['le sportif de haut niveau', 'elite athlete', '🏃'],
  ['le marathon', 'marathon', '🏃‍♀️'],
  ['la course à pied', 'running (as a sport)', '👟'],
  ['le dossard', 'race bib', '🔢'],
  ['la compétition', 'competition', '🏆'],
  ['le classement', 'ranking, standings', '📋'],
  ['la finale', 'final', '🏁'],
  ['le supporter', 'fan, supporter', '📣'],
  ['la mi-temps', 'half-time', '⏸️'],
  ['la prolongation', 'extra time', '⏱️'],
  ['la défaite', 'defeat', '😞'],
  ['la victoire', 'victory', '🎉'],
  ['remporter', 'to win, to carry off', '🏆'],
  ['la blessure', 'injury', '🩹'],
  ['le kiné', 'physiotherapist', '💆'],
  ['la licence sportive', 'club membership licence', '🪪'],
  ['le fair-play', 'fair play', '🤝'],
  ['l’esprit d’équipe', 'team spirit', '👥'],
  ['la persévérance', 'perseverance', '🧱'],
  ['le sport-santé', 'exercise for health', '🚴'],
  ['le handisport', 'sport for disabled athletes', '♿'],
  ['le bénévole sportif', 'club volunteer', '🧢'],
]);

export const sport: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 6,
    title: 'Vive le sport !',
    subtitle: 'Competition, training and the Games – with purpose clauses and compound relatives',
    emoji: '🏅',
    goals: [
      'Talk about competition, training, injuries and the Olympic Games',
      'Express purpose with pour, afin de, pour que and afin que',
      'Use lequel, auquel, duquel and dont to link clauses',
    ],
    grammar: ['L’expression du but', 'Pronoms relatifs composés'],
    vocabFields: ['Sport de haut niveau'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-sport', vocab, {
      first: 'Training and competition',
      firstText: 'Words for training, records, medals and the Games.',
      second: 'Fans, results and health',
      secondText: 'Words for supporters, defeat, injury and sport for everyone.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-sport'],
      2,
      definitions([
        [
          'Série d’exercices avant l’effort, pour préparer le corps.',
          'l’échauffement',
          ['la rééducation', 'la mi-temps', 'le classement'],
        ],
        [
          'Substance interdite qui améliore artificiellement les résultats.',
          'le dopage',
          ['le fair-play', 'l’endurance', 'la licence sportive'],
        ],
        [
          'Capacité de tenir un effort longtemps.',
          'l’endurance',
          ['la persévérance', 'la performance', 'l’entraînement'],
        ],
        [
          'Course de plus de quarante kilomètres.',
          'le marathon',
          ['la finale', 'le dossard', 'la prolongation'],
        ],
        [
          'Période supplémentaire quand le match est nul.',
          'la prolongation',
          ['la mi-temps', 'la défaite', 'la finale'],
        ],
        [
          'Numéro qu’un coureur porte sur sa poitrine.',
          'le dossard',
          ['le podium', 'la médaille', 'le record'],
        ],
        [
          'Professionnel qui aide un sportif blessé à récupérer par des exercices.',
          'le kiné',
          ['le supporter', 'le bénévole sportif', 'le militant'],
        ],
        [
          'Respect des règles et de l’adversaire.',
          'le fair-play',
          ['le dépassement de soi', 'l’esprit d’équipe', 'la compétition'],
        ],
      ]),
    ),

    act(
      U,
      'sort-but',
      'sortit',
      'Same subject or not?',
      'The word in capitals expresses purpose. Does the subject stay the same?',
      ['grammar', 'fr-c12-but'],
      2,
      {
        instruction: 'Infinitive or subjunctive?',
        buckets: [
          { id: 'infinitif', label: 'same subject → infinitive', emoji: '1️⃣' },
          { id: 'subjonctif', label: 'new subject → subjunctive', emoji: '2️⃣' },
        ],
        items: [
          ...cards('infinitif', [
            ['Elle s’entraîne POUR gagner.', 'She trains in order to win.'],
            ['Il court AFIN DE battre son record.', 'He runs in order to break his record.'],
            [
              'Nous nous échauffons DE FAÇON À éviter les blessures.',
              'We warm up so as to avoid injuries.',
            ],
            ['Ils achètent des billets POUR voir la finale.', 'They buy tickets to see the final.'],
          ]),
          ...cards('subjonctif', [
            [
              'Le coach crie POUR QUE les joueurs l’entendent.',
              'The coach shouts so that the players hear him.',
            ],
            [
              'On installe des écrans AFIN QUE tout le monde voie le match.',
              'Screens are installed so that everyone can see the match.',
            ],
            [
              'Elle parle doucement DE PEUR QUE l’arbitre l’entende.',
              'She speaks softly for fear that the referee will hear her.',
            ],
            [
              'Ils vendent des maillots POUR QUE le club survive.',
              'They sell shirts so that the club survives.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-relatifs',
      'sortit',
      'Which relative pronoun?',
      'The pronoun in capitals links two clauses. Sort by what it refers to.',
      ['grammar', 'fr-c12-relatifs-composes'],
      3,
      {
        instruction: 'What does the pronoun refer to?',
        buckets: [
          { id: 'chose', label: 'thing → prep. + lequel', emoji: '📦' },
          { id: 'personne', label: 'person → prep. + qui', emoji: '🧑' },
          { id: 'dont', label: 'dont (de + …)', emoji: '🔗' },
        ],
        items: [
          ...cards('chose', [
            ['Le stade DANS LEQUEL ils jouent est neuf.', 'The stadium in which they play is new.'],
            [
              'La compétition À LAQUELLE elle participe est difficile.',
              'The competition she takes part in is hard.',
            ],
            [
              'Les épreuves AUXQUELLES il s’est préparé durent trois jours.',
              'The events he prepared for last three days.',
            ],
          ]),
          ...cards('personne', [
            ['L’entraîneur AVEC QUI je travaille est sévère.', 'The coach I work with is strict.'],
            ['La joueuse POUR QUI j’ai voté a gagné.', 'The player I voted for won.'],
            [
              'Les athlètes À QUI il parle sont des champions.',
              'The athletes he is talking to are champions.',
            ],
          ]),
          ...cards('dont', [
            ['Le sport DONT je rêve est l’escalade.', 'The sport I dream of is climbing.'],
            ['Le club DONT elle est membre recrute.', 'The club she belongs to is recruiting.'],
            [
              'La victoire DONT ils sont fiers est historique.',
              'The victory they are proud of is historic.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'gap-but',
      'gapfill',
      'Express the purpose',
      'Choose the conjunction or preposition that expresses purpose.',
      ['grammar', 'fr-c12-but'],
      3,
      {
        items: [
          gap(
            'b1',
            'Elle s’entraîne chaque matin ___ gagner la finale.',
            'pour',
            ['pour', 'pour que', 'de peur que', 'bien que'],
            'She trains every morning to win the final.',
            {
              lesson: 'fr-c12-but',
              explanation: 'Same subject: pour + infinitive.',
              why: {
                'pour que':
                  'Pour que needs a new subject and a subjunctive verb; here only “elle” acts.',
              },
            },
          ),
          gap(
            'b2',
            'Le club recrute des bénévoles afin que les enfants ___ s’entraîner.',
            'puissent',
            ['puissent', 'peuvent', 'pouvoir', 'pourront'],
            'The club recruits volunteers so that the children can train.',
            {
              lesson: 'fr-c12-but',
              explanation: 'Afin que + subjunctive: qu’ils puissent.',
            },
          ),
          gap(
            'b3',
            'Il s’échauffe longuement ___ éviter une blessure.',
            'afin d’',
            ['afin d’', 'afin qu’', 'pour qu’', 'à condition d’'],
            'He warms up for a long time to avoid an injury.',
            {
              lesson: 'fr-c12-but',
              explanation: 'Same subject and an infinitive: afin d’ + infinitive.',
            },
          ),
          gap(
            'b4',
            'On a installé un écran géant pour que tout le monde ___ la finale.',
            'voie',
            ['voie', 'voit', 'verra', 'voir'],
            'A giant screen was installed so that everyone can see the final.',
            {
              lesson: 'fr-c12-but',
              explanation: 'Pour que + subjunctive: que tout le monde voie.',
            },
          ),
          gap(
            'b5',
            'Elle parle bas ___ que l’arbitre l’entende.',
            'de peur',
            ['de peur', 'afin', 'pour', 'parce'],
            'She speaks quietly for fear that the referee will hear her.',
            {
              lesson: 'fr-c12-but',
              explanation: 'De peur que expresses a purpose to avoid something: subjunctive.',
            },
          ),
          gap(
            'b6',
            'Ils s’exercent ___ à ce que chacun connaisse son rôle.',
            'de façon',
            ['de façon', 'à cause', 'depuis', 'malgré'],
            'They practise so that everyone knows their role.',
            {
              lesson: 'fr-c12-but',
              explanation: 'De façon à ce que + subjunctive is another way to express purpose.',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-relatifs',
      'gapfill',
      'Choose the relative pronoun',
      'Pick the pronoun that fits the preposition and the noun it replaces.',
      ['grammar', 'fr-c12-relatifs-composes'],
      3,
      {
        items: [
          gap(
            'r1',
            'Le stade dans ___ se déroule la finale est immense.',
            'lequel',
            ['lequel', 'laquelle', 'lesquels', 'dont'],
            'The stadium in which the final takes place is huge.',
            {
              lesson: 'fr-c12-relatifs-composes',
              explanation: 'Le stade is masculine singular and follows dans: dans lequel.',
            },
          ),
          gap(
            'r2',
            'La compétition à ___ elle participe est difficile.',
            'laquelle',
            ['laquelle', 'lequel', 'lesquelles', 'dont'],
            'The competition she takes part in is hard.',
            {
              lesson: 'fr-c12-relatifs-composes',
              explanation: 'Participer à + feminine singular: à laquelle.',
            },
          ),
          gap(
            'r3',
            'Les épreuves ___ elle s’est préparée durent trois jours.',
            'auxquelles',
            ['auxquelles', 'auxquels', 'lesquelles', 'dont'],
            'The events she prepared for last three days.',
            {
              lesson: 'fr-c12-relatifs-composes',
              explanation: 'À + lesquelles contract to auxquelles.',
            },
          ),
          gap(
            'r4',
            'Le club ___ il est président recrute des jeunes.',
            'dont',
            ['dont', 'duquel', 'lequel', 'que'],
            'The club of which he is president is recruiting young people.',
            {
              lesson: 'fr-c12-relatifs-composes',
              explanation: 'Être président de → dont.',
            },
          ),
          gap(
            'r5',
            'La joueuse avec ___ je m’entraîne a battu un record.',
            'qui',
            ['qui', 'laquelle', 'dont', 'que'],
            'The player I train with has broken a record.',
            {
              lesson: 'fr-c12-relatifs-composes',
              explanation: 'After a preposition, a person is usually referred to by qui.',
            },
          ),
          gap(
            'r6',
            'Le terrain à côté ___ nous campons est inondé.',
            'duquel',
            ['duquel', 'dont', 'lequel', 'de qui'],
            'The field next to which we are camping is flooded.',
            {
              lesson: 'fr-c12-relatifs-composes',
              explanation: 'À côté de + lequel contract: à côté duquel.',
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
      'Put the words in order – purpose and relative clauses.',
      ['grammar', 'fr-c12-but', 'fr-c12-relatifs-composes'],
      3,
      {
        items: [
          sent(
            's1',
            'Elle s’entraîne chaque jour pour battre son record.',
            'She trains every day to break her record.',
            'fr-c12-but',
          ),
          sent(
            's2',
            'On installe un écran afin que tous les supporters voient le match.',
            'A screen is installed so that all the fans can see the match.',
            'fr-c12-but',
          ),
          sent(
            's3',
            'Le stade dans lequel ils jouent est tout neuf.',
            'The stadium they play in is brand new.',
            'fr-c12-relatifs-composes',
          ),
          sent(
            's4',
            'La compétition à laquelle elle participe commence demain.',
            'The competition she is taking part in starts tomorrow.',
            'fr-c12-relatifs-composes',
          ),
          sent(
            's5',
            'Le sport dont je rêve est l’escalade.',
            'The sport I dream of is climbing.',
            'fr-c12-relatifs-composes',
          ),
          sent(
            's6',
            'Il parle bas de peur que l’arbitre l’entende.',
            'He speaks quietly for fear that the referee will hear him.',
            'fr-c12-but',
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
      ['spelling', 'fr-c12-sport'],
      2,
      {
        items: [
          scrambled('p1', 'médaille', 'medal', '🎖️'),
          scrambled('p2', 'blessure', 'injury', '🩹'),
          typed('p3', 'l’échauffement', 'warm-up', '🔥'),
          typed('p4', 'le kiné', 'physiotherapist', '💆'),
          dictated('p5', 'la flamme olympique', 'Olympic flame'),
          dictated('p6', 'l’esprit d’équipe', 'team spirit'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'Sport conversations',
      'Three conversations: a club, an injury and a final.',
      ['communication', 'fr-c12-sport'],
      3,
      {
        scenes: [
          scene(
            'club',
            'Joining a club',
            '🏃',
            'You sign up at a running club.',
            npc(
              'Karim',
              'Bonjour ! Vous voulez vous inscrire au club ?',
              'Hello! Do you want to join the club?',
            ),
            you(
              'Oui, je cherche un club où je puisse progresser en endurance.',
              [
                'Oui, je cherche un club où je peux progresser en endurance.',
                'After a search for something that may not exist, the subjunctive is better: où je puisse.',
              ],
              [
                'Non, merci, je regarde seulement la télé.',
                'He asked about signing up; this is off topic.',
              ],
            ),
            npc(
              'Karim',
              'Parfait. Il faut une licence sportive pour que nous puissions vous assurer.',
              'Perfect. You need a licence so that we can insure you.',
            ),
            you(
              'D’accord, je prépare mes papiers afin que l’inscription soit rapide.',
              [
                'D’accord, je prépare mes papiers afin que l’inscription est rapide.',
                'Afin que needs the subjunctive: soit.',
              ],
              [
                'D’accord, je prépare mes papiers pour gagne du temps.',
                'Pour + infinitive: pour gagner.',
              ],
            ),
          ),
          scene(
            'injury',
            'An injury',
            '🩹',
            'You talk to the club physio after an injury.',
            npc(
              'La kiné',
              'Alors, quelle est la blessure dont vous souffrez ?',
              'So, what is the injury you are suffering from?',
            ),
            you(
              'Une déchirure à la cuisse, dont je me suis aperçu pendant l’échauffement.',
              [
                'Une déchirure à la cuisse, laquelle je me suis aperçu pendant l’échauffement.',
                'S’apercevoir de takes dont, not laquelle.',
              ],
              ['Pas de blessure, je mange du chocolat.', 'That does not answer her question.'],
            ),
            npc(
              'La kiné',
              'Je vous prescris des séances de rééducation, auxquelles vous devrez venir deux fois par semaine.',
              'I am prescribing physio sessions, which you will have to attend twice a week.',
            ),
            you(
              'Très bien, je viendrai afin de reprendre vite le sport.',
              [
                'Très bien, je viendrai afin que je reprendre vite le sport.',
                'Same subject: use afin de + infinitive.',
              ],
              ['Très bien, je ne viendrai jamais.', 'That ignores her advice.'],
            ),
          ),
          scene(
            'final',
            'Before the final',
            '🏆',
            'A friend and you talk about tonight’s final.',
            npc(
              'Inès',
              'Tu viens voir la finale ? Il faut que tu sois là !',
              'Are you coming to watch the final? You have to be there!',
            ),
            you(
              'Bien sûr ! Le bar où nous regarderons le match est déjà réservé.',
              [
                'Bien sûr ! Le bar dont nous regarderons le match est déjà réservé.',
                'The place where: où, not dont.',
              ],
              ['Non, je déteste le sport.', 'It does not fit this friendly exchange.'],
            ),
            npc(
              'Inès',
              'Super. Moi, j’ai peur que nos joueurs perdent.',
              'Great. I am afraid our players will lose.',
            ),
            you(
              'Ne t’inquiète pas, je suis sûr qu’ils gagneront.',
              [
                'Ne t’inquiète pas, je suis sûr qu’ils gagnent.',
                'Referring to the future, use gagneront.',
              ],
              ['Ne t’inquiète pas, je doute qu’ils gagnent.', 'This adds to her worry.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Sport blitz',
      'True or false? Words, purpose and relative pronouns.',
      ['grammar', 'fr-c12-but', 'fr-c12-relatifs-composes'],
      [
        tf('b1', '“Pour que” is followed by the subjunctive.', true),
        tf('b2', '“Afin de” is followed by an infinitive.', true),
        tf(
          'b3',
          'When the subject stays the same, “pour + infinitive” is the normal choice.',
          true,
        ),
        tf('b4', '“À + lesquels” becomes “auxquels”.', true),
        tf('b5', '“De + lequel” becomes “duquel”.', true),
        tf('b6', '“Dont” replaces a complement introduced by “de”.', true),
        tf('b7', '“La mi-temps” is a record.', false, 'It is the break in the middle of a match.'),
        tf('b8', '“Le dopage” is allowed in the Olympic Games.', false, 'It is forbidden.'),
        tf('b9', '“Remporter” means to lose.', false, 'It means to win.'),
        tf('b10', '“De peur que” is followed by the subjunctive.', true),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-sport'],
      [
        q('c1', '“La défaite” is the opposite of …', 'la victoire', [
          'la finale',
          'le record',
          'la blessure',
        ]),
        q('c2', 'Il s’entraîne ___ gagner.', 'pour', ['pour que', 'afin que', 'de peur que'], {
          lesson: 'fr-c12-but',
        }),
        q(
          'c3',
          'Le coach crie pour que nous l’___.',
          'entendions',
          ['entendons', 'entendrons', 'entendre'],
          {
            lesson: 'fr-c12-but',
          },
        ),
        q(
          'c4',
          'La salle dans ___ elle s’entraîne est fermée.',
          'laquelle',
          ['lequel', 'dont', 'lesquelles'],
          {
            lesson: 'fr-c12-relatifs-composes',
          },
        ),
        q('c5', '“Le dossard” is a …', 'race bib', ['medal', 'whistle', 'stopwatch']),
        q(
          'c6',
          'Les courses ___ il rêve sont très longues.',
          'dont',
          ['auxquelles', 'lesquelles', 'qui'],
          {
            lesson: 'fr-c12-relatifs-composes',
          },
        ),
        q(
          'c7',
          'Les épreuves ___ elle participe sont difficiles.',
          'auxquelles',
          ['dont', 'lesquelles', 'que'],
          {
            lesson: 'fr-c12-relatifs-composes',
          },
        ),
        q('c8', '“Remporter” means …', 'to win', ['to lose', 'to train', 'to warm up']),
      ],
    ),
  ],
};
