import { vocabList } from '../builders';
import {
  act,
  blitz,
  cards,
  challenge,
  conj,
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

const U = 'fr-c1-2-humour';

const vocab = vocabList(U, 'Humour et cinéma', [
  ['la blague', 'joke', '😄'],
  ['le sketch', 'comedy sketch', '🎭'],
  ['l’humoriste', 'comedian', '🎤'],
  ['le one-man-show', 'one-man show', '🕴️'],
  ['la parodie', 'parody', '🃏'],
  ['la satire', 'satire', '✒️'],
  ['l’ironie', 'irony', '😏'],
  ['le second degré', 'tongue-in-cheek tone', '🙃'],
  ['l’autodérision', 'self-mockery', '🪞'],
  ['le jeu de mots', 'pun', '🔤'],
  ['la chute', 'punchline', '🎯'],
  ['le comique de situation', 'situational comedy', '🍌'],
  ['la répartie', 'quick comeback', '⚡'],
  ['le fou rire', 'fit of laughter', '🤣'],
  ['se moquer de', 'to make fun of', '😜'],
  ['taquiner', 'to tease', '😉'],
  ['le réalisateur', 'film director', '🎬'],
  ['le scénario', 'screenplay', '📝'],
  ['le scénariste', 'screenwriter', '✍️'],
  ['la bande-annonce', 'trailer', '📽️'],
  ['le générique', 'credits', '🎞️'],
  ['le tournage', 'filming, shoot', '🎥'],
  ['le long-métrage', 'feature film', '🍿'],
  ['le court-métrage', 'short film', '⏱️'],
  ['le festival', 'festival', '🎪'],
  ['l’affiche', 'film poster', '🖼️'],
  ['la critique', 'review, criticism', '🧐'],
  ['le sous-titre', 'subtitle', '💬'],
  ['doublé', 'dubbed', '🔊'],
  ['l’intrigue', 'plot', '🧵'],
  ['le dénouement', 'ending, resolution', '🔚'],
  ['le rebondissement', 'plot twist', '🌀'],
  ['le casting', 'casting, cast', '🎟️'],
  ['la salle obscure', 'cinema (literary)', '🌑'],
]);

export const humour: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 10,
    title: 'Rions un peu !',
    subtitle: 'Humour and cinema – with giving an opinion and the conditional',
    emoji: '🎬',
    goals: [
      'Talk about humour, films and festivals',
      'Give and nuance an appreciation of a film or show',
      'Use the conditional: politeness, hypothesis, unconfirmed information and regret',
    ],
    grammar: ['Exprimer son appréciation', 'Le conditionnel'],
    vocabFields: ['Humour et cinéma'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-humour', vocab, {
      first: 'Humour',
      firstText: 'Words for jokes, comedians, irony and laughter.',
      second: 'Cinema',
      secondText: 'Words for directors, plots, trailers and festivals.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-humour'],
      2,
      definitions([
        [
          'Dernière phrase d’une blague, qui fait rire.',
          'la chute',
          ['le dénouement', 'la répartie', 'le générique'],
        ],
        [
          'Imitation comique d’une œuvre ou d’une personne.',
          'la parodie',
          ['la satire', 'l’ironie', 'le sketch'],
        ],
        [
          'Fait de se moquer de soi-même avec humour.',
          'l’autodérision',
          ['l’ironie', 'la blague', 'le second degré'],
        ],
        [
          'Personne qui écrit l’histoire et les dialogues d’un film.',
          'le scénariste',
          ['le réalisateur', 'le casting', 'l’humoriste'],
        ],
        [
          'Courte vidéo qui présente un film avant sa sortie.',
          'la bande-annonce',
          ['le générique', 'l’affiche', 'le tournage'],
        ],
        [
          'Événement où l’on projette de nombreux films.',
          'le festival',
          ['le tournage', 'le sketch', 'la critique'],
        ],
        [
          'Événement inattendu qui change le cours de l’histoire.',
          'le rebondissement',
          ['le dénouement', 'l’intrigue', 'la chute'],
        ],
        [
          'Réponse rapide et drôle à une remarque.',
          'la répartie',
          ['le jeu de mots', 'la chute', 'le fou rire'],
        ],
      ]),
    ),

    act(
      U,
      'sort-appreciation',
      'sortit',
      'Praise, reservation or criticism?',
      'Sort the opinions about a film by their tone.',
      ['grammar', 'fr-c12-appreciation'],
      2,
      {
        instruction: 'What is the tone?',
        buckets: [
          { id: 'eloge', label: 'praise', emoji: '👍' },
          { id: 'reserve', label: 'reservation', emoji: '🤷' },
          { id: 'critique', label: 'criticism', emoji: '👎' },
        ],
        items: [
          ...cards('eloge', [
            [
              'J’ai adoré ce film, le scénario est brillant.',
              'I loved this film, the screenplay is brilliant.',
            ],
            [
              'Quelle belle surprise, le jeu des acteurs est remarquable !',
              'What a nice surprise, the acting is remarkable!',
            ],
            ['Je recommande vivement ce court-métrage.', 'I highly recommend this short film.'],
          ]),
          ...cards('reserve', [
            [
              'Il est plutôt réussi, mais la fin m’a laissé sur ma faim.',
              'It is rather good, but the ending left me wanting more.',
            ],
            ['Je l’ai trouvé correct, sans plus.', 'I found it fine, nothing more.'],
            [
              'À mon avis, il est inégal : certaines scènes sont superbes, d’autres moins.',
              'In my view it is uneven: some scenes are superb, others less so.',
            ],
          ]),
          ...cards('critique', [
            ['Ce film m’a profondément ennuyé.', 'This film bored me deeply.'],
            [
              'L’intrigue est prévisible et les dialogues sont plats.',
              'The plot is predictable and the dialogue is flat.',
            ],
            ['Je ne trouve pas que ce soit drôle du tout.', 'I do not find it funny at all.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-conditionnel',
      'sortit',
      'Which use of the conditional?',
      'The verb in capitals is in the conditional. What does it express?',
      ['grammar', 'fr-c12-conditionnel'],
      3,
      {
        instruction: 'Which meaning?',
        buckets: [
          { id: 'politesse', label: 'polite request', emoji: '🙏' },
          { id: 'hypothese', label: 'hypothesis', emoji: '💭' },
          { id: 'info', label: 'unconfirmed news', emoji: '📰' },
          { id: 'regret', label: 'regret / past', emoji: '😔' },
        ],
        items: [
          ...cards('politesse', [
            ['POURRIEZ-vous baisser le son ?', 'Could you turn the sound down?'],
            ['Je VOUDRAIS deux places pour ce soir.', 'I would like two seats for tonight.'],
          ]),
          ...cards('hypothese', [
            [
              'Si j’étais réalisateur, je TOURNERAIS une comédie.',
              'If I were a director, I would shoot a comedy.',
            ],
            [
              'Si on avait le temps, on IRAIT au festival.',
              'If we had time, we would go to the festival.',
            ],
          ]),
          ...cards('info', [
            [
              'Le film SORTIRAIT en mai, selon la presse.',
              'The film is said to be coming out in May.',
            ],
            ['L’humoriste AURAIT quitté la scène.', 'The comedian has reportedly left the stage.'],
          ]),
          ...cards('regret', [
            ['J’AURAIS DÛ voir ce film.', 'I should have seen this film.'],
            ['Il AURAIT AIMÉ être acteur.', 'He would have liked to be an actor.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'conj-conditionnel',
      'conjugation',
      'Conditional forms',
      'Fill in the conditional present: future stem + imparfait endings.',
      ['grammar', 'fr-c12-conditionnel'],
      3,
      {
        tables: [
          conj(
            'être',
            'to be',
            ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'],
            'fr-c12-conditionnel',
          ),
          conj(
            'avoir',
            'to have',
            ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'],
            'fr-c12-conditionnel',
          ),
          conj(
            'pouvoir',
            'to be able to',
            ['pourrais', 'pourrais', 'pourrait', 'pourrions', 'pourriez', 'pourraient'],
            'fr-c12-conditionnel',
          ),
          conj(
            'vouloir',
            'to want',
            ['voudrais', 'voudrais', 'voudrait', 'voudrions', 'voudriez', 'voudraient'],
            'fr-c12-conditionnel',
          ),
          conj(
            'aller',
            'to go',
            ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'],
            'fr-c12-conditionnel',
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-appreciation',
      'gapfill',
      'Give your opinion',
      'Choose the expression or the mood that fits an opinion.',
      ['grammar', 'fr-c12-appreciation'],
      3,
      {
        items: [
          gap(
            'a1',
            'Ce film m’a vraiment ___ : je l’ai revu deux fois.',
            'plu',
            ['plu', 'plaît', 'plaisait', 'plaire'],
            'I really liked this film: I saw it twice.',
            { lesson: 'fr-c12-appreciation', explanation: 'Plaire in the passé composé: m’a plu.' },
          ),
          gap(
            'a2',
            'À mon ___, la fin est un peu trop longue.',
            'avis',
            ['avis', 'sens', 'point', 'opinion'],
            'In my opinion, the ending is a bit too long.',
            { lesson: 'fr-c12-appreciation', explanation: 'À mon avis = in my opinion.' },
          ),
          gap(
            'a3',
            'Je trouve que le scénario ___ original.',
            'est',
            ['est', 'soit', 'serait', 'fût'],
            'I find that the screenplay is original.',
            {
              lesson: 'fr-c12-appreciation',
              explanation: 'Je trouve que (affirmative) + indicative.',
              why: { soit: 'In the affirmative, trouver que takes the indicative.' },
            },
          ),
          gap(
            'a4',
            'Je ne trouve pas que ce film ___ drôle.',
            'soit',
            ['soit', 'est', 'sera', 'était'],
            'I do not find this film funny.',
            {
              lesson: 'fr-c12-appreciation',
              explanation: 'Negative opinion verbs often take the subjunctive.',
            },
          ),
          gap(
            'a5',
            'Je suis ravi que tu ___ aimé le spectacle.',
            'aies',
            ['aies', 'as', 'avais', 'aurais'],
            'I am delighted that you enjoyed the show.',
            {
              lesson: 'fr-c12-appreciation',
              explanation: 'A feeling (être ravi que) + subjunctive.',
            },
          ),
          gap(
            'a6',
            'Il est plutôt réussi, ___ la fin m’a déçu.',
            'mais',
            ['mais', 'donc', 'car', 'puisque'],
            'It is rather good, but the ending disappointed me.',
            { lesson: 'fr-c12-appreciation', explanation: 'Mais introduces the reservation.' },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-conditionnel',
      'gapfill',
      'Choose the conditional',
      'Choose the right form: conditional, imparfait or plus-que-parfait.',
      ['grammar', 'fr-c12-conditionnel'],
      3,
      {
        items: [
          gap(
            'k1',
            'Si j’___ le temps, j’irais au festival.',
            'avais',
            ['avais', 'aurais', 'ai', 'aurai'],
            'If I had time, I would go to the festival.',
            {
              lesson: 'fr-c12-conditionnel',
              explanation: 'Si + imparfait, then the conditional in the result clause.',
              why: { aurais: 'Never use the conditional right after si in a condition.' },
            },
          ),
          gap(
            'k2',
            'Je ___ deux places, s’il vous plaît.',
            'voudrais',
            ['voudrais', 'veux', 'voulais', 'voudrai'],
            'I would like two seats, please.',
            {
              lesson: 'fr-c12-conditionnel',
              explanation: 'The conditional makes a request more polite.',
            },
          ),
          gap(
            'k3',
            'Selon la presse, le film ___ en mai.',
            'sortirait',
            ['sortirait', 'sortira', 'sortait', 'sorte'],
            'According to the press, the film would come out in May.',
            {
              lesson: 'fr-c12-conditionnel',
              explanation: 'The conditional marks unconfirmed information.',
            },
          ),
          gap(
            'k4',
            'Si j’avais su, je ___ venu.',
            'serais',
            ['serais', 'suis', 'étais', 'sois'],
            'If I had known, I would have come.',
            {
              lesson: 'fr-c12-conditionnel',
              explanation: 'Si + plus-que-parfait → conditionnel passé: je serais venu.',
            },
          ),
          gap(
            'k5',
            'Si tu ___ plus tôt, tu aurais vu la fin.',
            'étais arrivé',
            ['étais arrivé', 'arrivais', 'arriverais', 'serais arrivé'],
            'If you had arrived earlier, you would have seen the ending.',
            {
              lesson: 'fr-c12-conditionnel',
              explanation: 'Past condition: si + plus-que-parfait.',
            },
          ),
          gap(
            'k6',
            'Nous ___ aimé voir ce festival.',
            'aurions',
            ['aurions', 'avons', 'avions', 'aurons'],
            'We would have liked to see this festival.',
            {
              lesson: 'fr-c12-conditionnel',
              explanation: 'Conditionnel passé of aimer: aurions aimé.',
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
      'Put the words in order – opinions and conditionals.',
      ['grammar', 'fr-c12-appreciation', 'fr-c12-conditionnel'],
      3,
      {
        items: [
          sent(
            's1',
            'À mon avis, le scénario est brillant.',
            'In my opinion, the screenplay is brilliant.',
            'fr-c12-appreciation',
          ),
          sent(
            's2',
            'Je ne trouve pas que ce film soit drôle.',
            'I do not find this film funny.',
            'fr-c12-appreciation',
          ),
          sent(
            's3',
            'Si j’avais le temps, j’irais au festival.',
            'If I had time, I would go to the festival.',
            'fr-c12-conditionnel',
          ),
          sent(
            's4',
            'Pourriez-vous baisser le son, s’il vous plaît ?',
            'Could you turn the sound down, please?',
            'fr-c12-conditionnel',
          ),
          sent(
            's5',
            'Le film sortirait en mai, selon la presse.',
            'The film is said to come out in May.',
            'fr-c12-conditionnel',
          ),
          sent(
            's6',
            'J’aurais dû voir ce film plus tôt.',
            'I should have seen this film earlier.',
            'fr-c12-conditionnel',
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
      ['spelling', 'fr-c12-humour'],
      2,
      {
        items: [
          scrambled('p1', 'humoriste', 'comedian', '🎤'),
          scrambled('p2', 'scénario', 'screenplay', '📝'),
          typed('p3', 'la bande-annonce', 'trailer', '📽️'),
          typed('p4', 'le dénouement', 'ending, resolution', '🔚'),
          dictated('p5', 'le comique de situation', 'situational comedy'),
          dictated('p6', 'le jeu de mots', 'pun'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'At the cinema',
      'Three conversations: tickets, a review and a festival.',
      ['communication', 'fr-c12-humour'],
      3,
      {
        scenes: [
          scene(
            'tickets',
            'At the box office',
            '🎟️',
            'You buy tickets for a comedy.',
            npc('Le caissier', 'Bonjour, que puis-je pour vous ?', 'Hello, what can I do for you?'),
            you(
              'Bonjour, je voudrais deux places pour la comédie de vingt heures.',
              [
                'Bonjour, je veux deux places pour la comédie de vingt heures.',
                'Correct but too blunt; the conditional is more polite.',
              ],
              ['Donne-moi deux places.', 'Too abrupt for a stranger.'],
            ),
            npc(
              'Le caissier',
              'Pourriez-vous me dire si vous préférez le sous-titré ou le doublé ?',
              'Could you tell me whether you prefer subtitled or dubbed?',
            ),
            you(
              'Je préférerais la version sous-titrée, ce serait plus authentique.',
              [
                'Je préfère la version sous-titrée, ce sera plus authentique.',
                'The conditional keeps the tone polite and hypothetical.',
              ],
              ['Je ne sais pas, quelle importance ?', 'Impolite and not helpful.'],
            ),
          ),
          scene(
            'review',
            'After the film',
            '🍿',
            'You and a friend compare opinions.',
            npc(
              'Chloé',
              'Alors, tu as aimé ? Moi, j’ai trouvé le scénario brillant.',
              'So, did you like it? I found the screenplay brilliant.',
            ),
            you(
              'Plutôt, mais je ne trouve pas que la fin soit très crédible.',
              [
                'Plutôt, mais je ne trouve pas que la fin est très crédible.',
                'Negative trouver que needs the subjunctive: soit.',
              ],
              ['C’était nul, point.', 'Too blunt, and it does not engage with her opinion.'],
            ),
            npc(
              'Chloé',
              'Peut-être, mais la chute m’a fait rire aux larmes.',
              'Perhaps, but the punchline made me laugh until I cried.',
            ),
            you(
              'Si j’avais lu la critique, je serais allé voir un autre film.',
              [
                'Si j’aurais lu la critique, j’irais voir un autre film.',
                'Never put the conditional after si.',
              ],
              [
                'Si j’ai lu la critique, je ne sais pas.',
                'Wrong tense for an unreal past condition.',
              ],
            ),
          ),
          scene(
            'festival',
            'A film festival',
            '🎪',
            'You talk about the programme.',
            npc(
              'Samir',
              'On dit que le réalisateur viendrait présenter son film samedi.',
              'They say the director might come to present his film on Saturday.',
            ),
            you(
              'Vraiment ? Ce serait génial, j’aurais beaucoup de questions à lui poser.',
              [
                'Vraiment ? Ce sera génial, j’avais beaucoup de questions.',
                'The event is only a possibility: use the conditional.',
              ],
              ['Pas du tout, ça m’est égal.', 'Not what the friendly tone suggests.'],
            ),
            npc(
              'Samir',
              'Si tu veux, nous pourrions réserver des places dès maintenant.',
              'If you like, we could book seats right now.',
            ),
            you(
              'Bonne idée. Nous aurions dû le faire plus tôt.',
              [
                'Bonne idée. Nous aurions fait le plus tôt.',
                'The expression is “aurions dû” + infinitive.',
              ],
              ['Mauvaise idée, je ne viendrai pas.', 'It contradicts your earlier enthusiasm.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Cinema blitz',
      'True or false? Words, opinions and the conditional.',
      ['grammar', 'fr-c12-appreciation', 'fr-c12-conditionnel'],
      [
        tf('b1', 'The conditional can make a request more polite.', true),
        tf('b2', 'After “si” in a condition, you never use the conditional.', true),
        tf('b3', '“Si j’avais su, je serais venu” is a regret about the past.', true),
        tf('b4', 'The conditional can mark information that is not confirmed.', true),
        tf(
          'b5',
          '“Je trouve que” + subjunctive is the rule in the affirmative.',
          false,
          'In the affirmative it takes the indicative.',
        ),
        tf('b6', '“Je ne trouve pas que” is often followed by the subjunctive.', true),
        tf('b7', '“La chute” is the end of a joke.', true),
        tf(
          'b8',
          '“Doublé” means that the film has subtitles.',
          false,
          'Dubbed means the voices are replaced.',
        ),
        tf('b9', '“Le générique” lists the people who made the film.', true),
        tf(
          'b10',
          '“Le réalisateur” writes the dialogue only.',
          false,
          'The director leads the shoot; the screenwriter writes.',
        ),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-humour'],
      [
        q(
          'c1',
          'Si j’avais de l’argent, je ___ ce film.',
          'financerais',
          ['financerai', 'financeais', 'finance'],
          {
            lesson: 'fr-c12-conditionnel',
          },
        ),
        q('c2', '“Le rebondissement” means …', 'plot twist', ['trailer', 'credits', 'review']),
        q('c3', 'Je ne pense pas que ce film ___ intéressant.', 'soit', ['est', 'sera', 'était'], {
          lesson: 'fr-c12-appreciation',
        }),
        q('c4', '___-vous m’indiquer la salle ?', 'Pourriez', ['Pouvez', 'Pourrez', 'Puissiez'], {
          lesson: 'fr-c12-conditionnel',
        }),
        q('c5', 'Si tu étais venu, tu ___ ri.', 'aurais', ['auras', 'avais', 'aies'], {
          lesson: 'fr-c12-conditionnel',
        }),
        q('c6', '“Se moquer de” means …', 'to make fun of', [
          'to praise',
          'to film',
          'to translate',
        ]),
        q(
          'c7',
          'Which expression gives a reservation?',
          'sans plus',
          ['à mon avis', 'je recommande', 'quel chef-d’œuvre'],
          {
            lesson: 'fr-c12-appreciation',
          },
        ),
        q('c8', 'Selon la rumeur, il ___ le rôle principal.', 'aurait', ['a', 'aura', 'avait'], {
          lesson: 'fr-c12-conditionnel',
        }),
      ],
    ),
  ],
};
