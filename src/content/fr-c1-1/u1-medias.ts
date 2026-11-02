import type { ConfigOf } from '../schema';
import { byDe, flashcards, quizDeEn, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  hint,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-c1-1-medias';

const presse = vocabList(U, 'The press', [
  ['la presse écrite', 'the print press', '📰'],
  ['un quotidien', 'a daily newspaper', '🗞️'],
  ['un hebdomadaire', 'a weekly magazine', '📆'],
  ['la une', 'the front page', '📄'],
  ['une rédaction', 'an editorial team, a newsroom', '🏢'],
  ['un chroniqueur', 'a columnist', '✒️'],
  ['un éditorial', 'an editorial', '📝'],
  ['un reportage', 'a news report, a feature', '🎥'],
  ['une enquête', 'an investigation, a survey', '🔎'],
  ['une dépêche', 'a news-agency report', '📠'],
  ['un communiqué', 'a press release, an official statement', '📢'],
  ['un scoop', 'a scoop, an exclusive', '💥'],
  ['la ligne éditoriale', 'the editorial line', '🧭'],
  ['le fil d’actualité', 'the news feed', '📲'],
  ['la revue de presse', 'the press review', '🗂️'],
  ['s’abonner', 'to subscribe', '🔔'],
]);

const desinfo = vocabList(U, 'Disinformation and checking', [
  ['une infox', 'a piece of fake news', '🚫'],
  ['une rumeur', 'a rumour', '🗣️'],
  ['un canular', 'a hoax', '🃏'],
  ['la désinformation', 'disinformation', '🌀'],
  ['la propagande', 'propaganda', '📣'],
  ['une théorie du complot', 'a conspiracy theory', '🕵️'],
  ['un complotiste', 'a conspiracy theorist', '👁️'],
  ['un démenti', 'a denial, a retraction', '❎'],
  ['recouper', 'to cross-check (information)', '🔗'],
  ['la vérification des faits', 'fact-checking', '✅'],
  ['fiable', 'reliable', '🛡️'],
  ['se propager', 'to spread', '🦠'],
  ['relayer', 'to pass on, to share', '♻️'],
  ['décrypter', 'to decode, to make sense of', '🧩'],
  ['l’esprit critique', 'critical thinking', '🧠'],
  ['la bulle de filtres', 'the filter bubble', '🫧'],
  ['un lanceur d’alerte', 'a whistleblower', '🚨'],
  ['l’éducation aux médias', 'media literacy', '🎓'],
]);

const vocab = [...presse, ...desinfo];

type SpellItem = ConfigOf<'spell'>['items'][number];

const spellItems: SpellItem[] = [
  { id: 'sp1', mode: 'unscramble', answer: 'fiable', hint: 'reliable', emoji: '🛡️' },
  { id: 'sp2', mode: 'unscramble', answer: 'recouper', hint: 'to cross-check' },
  { id: 'sp3', mode: 'unscramble', answer: 'infox', hint: 'fake news', emoji: '🚫' },
  { id: 'sp4', mode: 'type', answer: 'décrypter', hint: 'to decode', emoji: '🧩' },
  { id: 'sp5', mode: 'type', answer: 'propagande', hint: 'propaganda', emoji: '📣' },
  { id: 'sp6', mode: 'type', answer: 'rédaction', hint: 'newsroom', emoji: '🏢' },
  { id: 'sp7', mode: 'type', answer: 'éditorial', hint: 'editorial', emoji: '📝' },
];

const L = 'fr-c11-connectors' as const;

export const medias: UnitContent = {
  unit: unitFr({
    id: U,
    order: 1,
    title: 'Les médias et l’information',
    subtitle: 'The press, fake news and how to check a source, with the connectors of an argument',
    emoji: '📰',
    goals: [
      'Talk about newspapers, newsrooms and how information is produced',
      'Recognise disinformation and explain how you check a source',
      'Link reasons and results precisely: car, puisque, grâce à, par conséquent, de plus',
    ],
    grammar: [
      'Cause: car, parce que, puisque, comme, étant donné que; grâce à, à cause de, en raison de, faute de',
      'Consequence: donc, par conséquent, c’est pourquoi, si bien que',
      'Addition and explanation: de plus, en outre, par ailleurs, en effet',
    ],
    vocabFields: ['The press', 'Disinformation and checking'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-presse',
      'flashcards',
      meta(
        'The press',
        'Un quotidien, une rédaction, un scoop – how a newspaper works.',
        ['vocabulary', 'media-news'],
        1,
        4,
      ),
      flashcards(presse),
    ),

    activity(
      U,
      'flash-desinfo',
      'flashcards',
      meta(
        'Fake news and fact-checking',
        'Une infox, un démenti, recouper – the words of disinformation.',
        ['vocabulary', 'media-news'],
        1,
        4,
      ),
      flashcards(desinfo),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'media-news'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'une dépêche',
          'un communiqué',
          'la ligne éditoriale',
          'un canular',
          'un démenti',
          'recouper',
          'la bulle de filtres',
          'un lanceur d’alerte',
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
        ['vocabulary', 'media-news'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'un quotidien', b: 'un journal qui paraît chaque jour' },
          { id: 'm2', a: 'un hebdomadaire', b: 'un magazine qui paraît chaque semaine' },
          { id: 'm3', a: 'un démenti', b: 'une déclaration qui conteste une information' },
          { id: 'm4', a: 'un canular', b: 'une fausse nouvelle inventée pour amuser' },
          { id: 'm5', a: 'un scoop', b: 'une information exclusive, révélée en premier' },
          { id: 'm6', a: 'une rédaction', b: 'l’équipe des journalistes d’un média' },
          { id: 'm7', a: 'recouper', b: 'comparer plusieurs sources' },
          { id: 'm8', a: 'un lanceur d’alerte', b: 'quelqu’un qui révèle des faits cachés' },
        ],
      },
    ),

    activity(
      U,
      'listen-news',
      'listen',
      meta(
        'Listen to the news',
        'Listen to the sentence and pick what it says.',
        ['listening', 'media-news'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'La rédaction a publié un démenti ce matin.',
            'The newsroom published a retraction this morning.',
            [
              'The newsroom hired a new columnist this morning.',
              'The newsroom cancelled its weekly magazine this morning.',
              'The newsroom received a hoax this morning.',
            ],
          ),
          heard(
            'l2',
            'Cette infox s’est propagée très vite sur les réseaux sociaux.',
            'This piece of fake news spread very quickly on social media.',
            [
              'This hoax was removed very quickly from social media.',
              'This report was shared very slowly by the press.',
              'This rumour was denied very quickly by the newspaper.',
            ],
          ),
          heard(
            'l3',
            'Il faut toujours recouper ses sources avant de relayer une information.',
            'You must always cross-check your sources before sharing a piece of information.',
            [
              'You must always subscribe to a daily before reading the news.',
              'You should never share information without asking the editor.',
              'Journalists must always protect their sources from the public.',
            ],
          ),
          heard(
            'l4',
            'La une de ce quotidien est consacrée à une enquête sur la propagande.',
            'The front page of this daily is devoted to an investigation into propaganda.',
            [
              'The front page of this weekly is devoted to a report on a hoax.',
              'The editorial of this daily is devoted to the press review.',
              'This daily has published a press release about its newsroom.',
            ],
          ),
          heard(
            'l5',
            'Un lanceur d’alerte a révélé le scandale à la presse.',
            'A whistleblower revealed the scandal to the press.',
            [
              'A columnist denied the scandal in the press.',
              'A news agency reported the scandal too late.',
              'A conspiracy theorist invented the scandal.',
            ],
          ),
          heard(
            'l6',
            'Les complotistes refusent tout démenti officiel.',
            'Conspiracy theorists reject every official denial.',
            [
              'Conspiracy theorists publish every official statement.',
              'Journalists refuse every conspiracy theory.',
              'Whistleblowers ask for an official denial.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-signals',
      'sortit',
      meta(
        'Reliable or suspicious?',
        'Sort the clues: do they make a piece of news more reliable, or do they raise an alarm?',
        ['vocabulary', 'media-news'],
        2,
        4,
      ),
      {
        instruction: 'Does the clue make the news more reliable, or is it a warning sign?',
        buckets: [
          { id: 'reliable', label: 'Reliable', emoji: '🛡️' },
          { id: 'alert', label: 'Warning sign', emoji: '🚩' },
        ],
        items: [
          ...sortItems('s', [
            ['Plusieurs sources indépendantes confirment les faits.', 'reliable'],
            ['L’article cite ses sources et donne la date de publication.', 'reliable'],
            ['Le journaliste a recoupé les informations avant de publier.', 'reliable'],
            ['Le média publie un démenti quand il se trompe.', 'reliable'],
            ['Les chiffres viennent d’un institut de statistiques officiel.', 'reliable'],
            ['Partagez ce message avant qu’il soit supprimé !', 'alert'],
            ['Les médias ne veulent pas que vous le sachiez.', 'alert'],
            ['Aucune source n’est citée et l’auteur reste anonyme.', 'alert'],
            ['Le titre est en majuscules et plein de points d’exclamation.', 'alert'],
            ['Une photo sans légende ni date circule sur les réseaux.', 'alert'],
          ]).map((item, i) => ({
            ...item,
            speak: item.text,
            translation: [
              'Several independent sources confirm the facts.',
              'The article names its sources and gives the publication date.',
              'The journalist cross-checked the information before publishing.',
              'The outlet publishes a retraction when it is wrong.',
              'The figures come from an official statistics institute.',
              'Share this message before it is deleted!',
              'The media do not want you to know it.',
              'No source is cited and the author stays anonymous.',
              'The headline is in capitals and full of exclamation marks.',
              'A photo with no caption or date is going round social media.',
            ][i]!,
          })),
        ],
      },
    ),

    activity(
      U,
      'sort-connectors',
      'sortit',
      {
        ...meta(
          'Cause, consequence or addition?',
          'Sort the connectors by what they do in an argument.',
          ['grammar', L],
          2,
          4,
        ),
      },
      {
        instruction: 'What does the connector introduce?',
        buckets: [
          { id: 'cause', label: 'Cause (why?)', emoji: '❓' },
          { id: 'consequence', label: 'Consequence (so?)', emoji: '➡️' },
          { id: 'addition', label: 'Addition (and what is more?)', emoji: '➕' },
        ],
        items: [
          ['car', 'cause', 'because, for'],
          ['puisque', 'cause', 'since (the reason is known)'],
          ['comme', 'cause', 'as, since (opens the sentence)'],
          ['étant donné que', 'cause', 'given that'],
          ['donc', 'consequence', 'so, therefore'],
          ['par conséquent', 'consequence', 'consequently'],
          ['c’est pourquoi', 'consequence', 'that is why'],
          ['si bien que', 'consequence', 'so that, with the result that'],
          ['de plus', 'addition', 'moreover'],
          ['en outre', 'addition', 'furthermore'],
          ['par ailleurs', 'addition', 'besides, on another note'],
          ['de surcroît', 'addition', 'on top of that'],
        ].map(([text, bucket, translation], i) => ({
          id: `c${i + 1}`,
          text: text!,
          bucket: bucket!,
          speak: text!,
          translation: translation!,
        })),
      },
    ),

    activity(
      U,
      'spell-media',
      'spell',
      meta(
        'Spell the media words',
        'Unscramble and type the key words. Accents are optional here.',
        ['spelling', 'media-news'],
        2,
        4,
      ),
      {
        items: spellItems.map((item) => ({ ...item, speak: item.answer })),
      },
    ),

    activity(
      U,
      'dictation-news',
      'spell',
      meta(
        'News dictation',
        'Listen and type the sentence. Accents are optional here.',
        ['spelling', 'listening', 'media-news'],
        3,
        4,
      ),
      {
        items: [
          dictation('d1', 'Le journal a publié un démenti.', 'The paper published a retraction.'),
          dictation('d2', 'Cette rumeur est fausse.', 'This rumour is false.'),
          dictation('d3', 'Il faut recouper les sources.', 'You have to cross-check sources.'),
          dictation('d4', 'Un lanceur d’alerte a parlé.', 'A whistleblower has spoken.'),
          dictation('d5', 'La désinformation se propage vite.', 'Disinformation spreads quickly.'),
        ],
      },
    ),

    activity(
      U,
      'gap-connectors',
      'gapfill',
      meta(
        'Choose the connector',
        'Cause, consequence or addition: pick the connector that fits.',
        ['grammar', L, 'media-news'],
        2,
        5,
      ),
      {
        items: [
          hint(
            gap(
              'g1',
              'La rumeur s’est répandue ___ personne n’avait vérifié la source.',
              'car',
              ['car', 'donc', 'alors que', 'par conséquent'],
              'The rumour spread because nobody had checked the source.',
              'Car gives the reason for what you just said.',
            ),
            {
              donc: 'Donc introduces a result, but here the second clause is the reason.',
              'alors que': 'Alors que contrasts two facts; it does not give a reason.',
              'par conséquent': 'Par conséquent introduces a result, not a reason.',
            },
          ),
          hint(
            gap(
              'g2',
              '___ tout le monde en parle, vérifions d’abord si c’est vrai.',
              'Puisque',
              ['Puisque', 'Donc', 'Car', 'Grâce à'],
              'Since everybody is talking about it, let us first check whether it is true.',
              'Puisque gives a reason that the listener already knows.',
            ),
            {
              Donc: 'Donc links a result to what came before; it does not give a reason.',
              Car: 'Car never opens a sentence; it joins two clauses.',
              'Grâce à': 'Grâce à is followed by a noun, not by a clause.',
            },
          ),
          hint(
            gap(
              'g3',
              'Le site a gagné dix mille abonnés ___ son enquête sur la pollution.',
              'grâce à',
              ['grâce à', 'à cause de', 'puisque', 'donc'],
              'The site gained ten thousand subscribers thanks to its investigation into pollution.',
              'Grâce à + noun gives a cause with a positive result.',
            ),
            {
              'à cause de': 'À cause de blames something; the result here is positive.',
              puisque: 'Puisque needs a clause (with a verb), but a noun follows.',
              donc: 'Donc links two clauses; it cannot stand before a noun.',
            },
          ),
          hint(
            gap(
              'g4',
              'L’information était fausse ; ___, le journal l’a retirée.',
              'par conséquent',
              ['par conséquent', 'car', 'puisque', 'en raison de'],
              'The information was false; consequently, the paper took it down.',
              'Par conséquent introduces the result of what you have just said.',
            ),
            {
              car: 'Car would give the reason, but the second clause is the result.',
              puisque: 'Puisque gives a reason, but here we need a result.',
              'en raison de': 'En raison de needs a noun, not a clause.',
            },
          ),
          hint(
            gap(
              'g5',
              'L’article est bien documenté. ___, il cite des sources variées.',
              'De plus',
              ['De plus', 'Donc', 'Car', 'Si bien que'],
              'The article is well documented. What is more, it cites varied sources.',
              'De plus adds a further argument in the same direction.',
            ),
            {
              Donc: 'Donc would present the second sentence as a result of the first.',
              Car: 'Car never opens a sentence, and it would give a reason.',
              'Si bien que':
                'Si bien que introduces a result and is not used to open a new sentence.',
            },
          ),
          hint(
            gap(
              'g6',
              'La manifestation a été annulée ___ la grève.',
              'à cause de',
              ['à cause de', 'grâce à', 'puisque', 'donc'],
              'The demonstration was cancelled because of the strike.',
              'À cause de + noun gives a cause with a negative result.',
            ),
            {
              'grâce à': 'Grâce à is for a positive effect; a cancellation is not.',
              puisque: 'Puisque needs a clause with a verb, but a noun follows.',
              donc: 'Donc links two clauses; it cannot stand before a noun.',
            },
          ),
          hint(
            gap(
              'g7',
              'Les ventes ont chuté, ___ le journal a dû réduire sa rédaction.',
              'si bien que',
              ['si bien que', 'car', 'comme', 'en outre'],
              'Sales dropped, so the paper had to shrink its newsroom.',
              'Si bien que introduces a result and is followed by the indicative.',
            ),
            {
              car: 'Car would make the shrinking the reason for the drop.',
              comme: 'Comme gives a cause and normally opens the sentence.',
              'en outre': 'En outre adds a fact; it does not show a result.',
            },
          ),
          hint(
            gap(
              'g8',
              '___ il pleuvait, le reportage a été tourné en studio.',
              'Comme',
              ['Comme', 'Car', 'Donc', 'Par ailleurs'],
              'As it was raining, the report was filmed in the studio.',
              'Comme gives a cause and opens the sentence.',
            ),
            {
              Car: 'Car never opens a sentence; it joins two clauses.',
              Donc: 'Donc introduces a result and cannot open a clause that gives the reason.',
              'Par ailleurs': 'Par ailleurs adds a new point; it does not give a reason.',
            },
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Complete the connector',
        'Type the missing word of the connector.',
        ['grammar', L, 'media-news'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Le procès a été abandonné ___ de preuves.',
            'faute',
            'The trial was dropped for lack of evidence.',
            'Faute de + noun means “for lack of”: a negative cause.',
          ),
          typed(
            't2',
            'Le site a été fermé en ___ de plusieurs plaintes.',
            'raison',
            'The site was closed because of several complaints.',
            'En raison de + noun is a formal way to give a cause.',
          ),
          typed(
            't3',
            'Les lecteurs ont perdu confiance ; c’est ___ le journal a changé de ligne éditoriale.',
            'pourquoi',
            'Readers lost trust; that is why the paper changed its editorial line.',
            'C’est pourquoi introduces the result of what you have just said.',
          ),
          typed(
            't4',
            'La vidéo est fausse. En ___, elle a été montée.',
            'effet',
            'The video is fake. Indeed, it was edited.',
            'En effet introduces the explanation or proof of what you have just said.',
          ),
          typed(
            't5',
            'Ce reportage est excellent ; par ___, il est très bien illustré.',
            'ailleurs',
            'This report is excellent; besides, it is very well illustrated.',
            'Par ailleurs adds a point on another side of the question.',
          ),
          typed(
            't6',
            'Il parle trois langues et, de ___, il connaît bien le terrain.',
            'plus',
            'He speaks three languages and, what is more, he knows the field well.',
            'De plus adds a further argument.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the argument',
        'Put the words in order. Watch where the connector goes.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'Since the information is false, we are taking it down.',
            ['Puisque', 'l’information', 'est', 'fausse,', 'nous', 'la', 'retirons.'],
            { extra: ['car'] },
          ),
          sent('b2', 'The source is reliable and, what is more, it is recent.', [
            'La',
            'source',
            'est',
            'fiable',
            'et,',
            'de',
            'plus,',
            'elle',
            'est',
            'récente.',
          ]),
          sent(
            'b3',
            'Thanks to this investigation, the scandal broke.',
            ['Grâce', 'à', 'cette', 'enquête,', 'le', 'scandale', 'a', 'éclaté.'],
            { extra: ['cause'] },
          ),
          sent(
            'b4',
            'Sales fell, so the newsroom cut its costs.',
            [
              'Les',
              'ventes',
              'ont',
              'baissé,',
              'donc',
              'la',
              'rédaction',
              'a',
              'réduit',
              'ses',
              'coûts.',
            ],
            {
              alsoAccept: ['Les ventes ont baissé, la rédaction a donc réduit ses coûts.'],
              explanation: 'Donc is movable: it can stand after the verb as well.',
            },
          ),
          sent('b5', 'Given that the source is anonymous, I have my doubts.', [
            'Étant',
            'donné',
            'que',
            'la',
            'source',
            'est',
            'anonyme,',
            'je',
            'doute.',
          ]),
          sent(
            'b6',
            'The video was removed because of numerous complaints.',
            ['La', 'vidéo', 'a', 'été', 'retirée', 'en', 'raison', 'de', 'nombreuses', 'plaintes.'],
            { extra: ['grâce'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'In the newsroom and online',
        'Three conversations: checking a photo, a friend’s video and a complaint to a newspaper.',
        ['communication', 'media-news'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'newsroom',
            title: 'In the newsroom',
            emoji: '🏢',
            setting: 'You are a journalist. Your editor wants to publish a photo of the mayor.',
            turns: [
              say(
                'Camille',
                'On a reçu une photo incroyable du maire. On la publie tout de suite ?',
                'We received an incredible photo of the mayor. Do we publish it right away?',
              ),
              you(
                'Pas encore : recoupons d’abord la source, puisque personne n’a confirmé.',
                [
                  'Oui, publions-la, car tout le monde la partage.',
                  'Being shared widely is not proof that a photo is genuine.',
                ],
                [
                  'Non, c’est inutile : donc elle est sûrement vraie.',
                  'That conclusion has no evidence behind it.',
                ],
              ),
              say(
                'Camille',
                'D’accord. Qui peut contacter l’agence photo ?',
                'OK. Who can contact the photo agency?',
              ),
              you(
                'Je m’en occupe, et j’appelle aussi le service de presse de la mairie.',
                [
                  'Personne : nous n’avons pas besoin de vérifier.',
                  'Checking the source is exactly what the team has just agreed to do.',
                ],
                [
                  'Le maire, parce qu’il est célèbre.',
                  'That does not answer who will contact the agency.',
                ],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'A friend’s video',
            emoji: '📱',
            setting: 'A friend sends you a video that “proves” a conspiracy theory.',
            turns: [
              say(
                'Hugo',
                'Regarde cette vidéo ! Elle prouve que tout est truqué.',
                'Look at this video! It proves that everything is rigged.',
              ),
              you(
                'Attends, qui l’a publiée ? Je préfère vérifier avant de la relayer.',
                [
                  'Génial, je la partage à tous mes contacts !',
                  'Sharing before checking is how fake news spreads.',
                ],
                [
                  'Je la crois, puisqu’elle est sur Internet.',
                  'Being online is no reason to trust something.',
                ],
              ),
              say(
                'Hugo',
                'Tu es toujours aussi méfiant ! Les médias nous cachent la vérité.',
                'You are always so distrustful! The media hide the truth from us.',
              ),
              you(
                'Pas forcément : plusieurs rédactions ont recoupé les faits, c’est pourquoi je leur fais confiance.',
                [
                  'Tu as raison, les journalistes mentent toujours.',
                  'A sweeping claim, and it ignores that newsrooms cross-check.',
                ],
                ['Les médias, ça n’existe pas.', 'This does not respond to what Hugo said.'],
              ),
            ],
          },
          {
            id: 'complaint',
            title: 'A request for a correction',
            emoji: '☎️',
            setting: 'A newspaper made a mistake about you. You phone the editor.',
            turns: [
              say(
                'Le rédacteur en chef',
                'Rédaction du Courrier du soir, bonjour. Que puis-je faire pour vous ?',
                'Editorial office of the Courrier du soir, hello. How can I help you?',
              ),
              you(
                'Bonjour, votre article de ce matin contient une erreur à mon sujet. Je demande un démenti.',
                [
                  'Bonjour, je voudrais m’abonner à votre hebdomadaire.',
                  'You are calling about an error, not a subscription.',
                ],
                [
                  'Salut ! Ton journal est nul.',
                  'Too informal, and it does not state what you want.',
                ],
              ),
              say(
                'Le rédacteur en chef',
                'Je suis désolé. Pouvez-vous préciser l’erreur ?',
                'I am sorry. Can you specify the error?',
              ),
              you(
                'Oui : on écrit que j’ai démissionné, alors que j’ai été muté. Pourriez-vous le corriger ?',
                ['Non, je préfère ne pas en parler.', 'Then the editor cannot correct anything.'],
                [
                  'Corrigez-le, donc je m’abonne.',
                  'That is not polite and does not say what the error is.',
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
        'Media blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'media-news'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Puisque” gives a reason that the listener already knows.', true),
          tf(
            'b2',
            '“Car” can open a sentence.',
            false,
            'Car joins two clauses. To open a sentence use Comme or Puisque.',
          ),
          tf('b3', '“Grâce à” is followed by a noun group.', true),
          tf('b4', '“À cause de” usually points to a negative result.', true),
          tf(
            'b5',
            '“Donc” always has to stand at the start of its clause.',
            false,
            'Donc is movable: La rédaction a donc réduit ses coûts.',
          ),
          tf('b6', '“Par conséquent” introduces a result.', true),
          tf(
            'b7',
            'A “quotidien” is published every week.',
            false,
            'Quotidien = every day; an hebdomadaire is weekly.',
          ),
          tf('b8', 'A “démenti” is a denial of a piece of information.', true),
          tf('b9', '“Une infox” is the French word for fake news.', true),
          tf('b10', '“De plus” adds another argument.', true),
          tf(
            'b11',
            '“Recouper” means to cut something out of a newspaper.',
            false,
            'Recouper = to cross-check information against other sources.',
          ),
          tf('b12', '“Étant donné que” introduces a cause.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: media words and connectors.',
        ['vocabulary', 'grammar', L, 'media-news'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Which word means “the editorial team”?', 'une rédaction', [
            'une dépêche',
            'un communiqué',
            'un hebdomadaire',
          ]),
          q(
            'c2',
            'A friend shares a rumour without a source. What do you do first?',
            'Je recoupe l’information.',
            ['Je la relaye.', 'Je m’abonne.', 'Je la commente.'],
          ),
          hint(
            q('c3', 'Le site est fiable, ___ je m’y abonne.', 'donc', [
              'car',
              'grâce à',
              'puisque',
            ]),
            {
              car: 'Car would make the subscription the reason why the site is reliable.',
              'grâce à': 'Grâce à is followed by a noun, not a clause.',
              puisque: 'Puisque introduces a reason, but here we need a result.',
            },
            L,
          ),
          hint(
            q('c4', 'Il a réussi ___ son travail acharné.', 'grâce à', [
              'parce que',
              'puisque',
              'donc',
            ]),
            {
              'parce que': 'Parce que is followed by a clause, but a noun follows here.',
              puisque: 'Puisque is followed by a clause, but a noun follows here.',
              donc: 'Donc links two clauses.',
            },
            L,
          ),
          hint(
            q('c5', '___ la source est anonyme, je préfère attendre.', 'Puisque', [
              'Car',
              'Grâce à',
              'Donc',
            ]),
            {
              Car: 'Car never opens a sentence.',
              'Grâce à': 'Grâce à is followed by a noun, not a clause.',
              Donc: 'Donc introduces a result, not a reason.',
            },
            L,
          ),
          q('c6', 'Which clue is a warning sign?', 'Aucune source n’est citée.', [
            'Le journal publie un démenti.',
            'Plusieurs sources confirment.',
            'Le texte porte une date.',
          ]),
          q('c7', 'What is “un lanceur d’alerte”?', 'a whistleblower', [
            'a columnist',
            'a news feed',
            'a hoax',
          ]),
          hint(
            q('c8', 'Il y a eu un scandale ; ___, le ministre a démissionné.', 'par conséquent', [
              'car',
              'à cause de',
              'étant donné que',
            ]),
            {
              car: 'Car gives a reason, but here the minister’s resignation is the result.',
              'à cause de': 'À cause de needs a noun, not a clause.',
              'étant donné que': 'Étant donné que gives a reason; we need a result.',
            },
            L,
          ),
          q('c9', 'Un hebdomadaire paraît …', 'chaque semaine', [
            'chaque jour',
            'chaque mois',
            'chaque année',
          ]),
          hint(
            q('c10', 'Le film est drôle. ___, il est très bien joué.', 'De plus', [
              'Donc',
              'Car',
              'Comme',
            ]),
            {
              Donc: 'Donc would present the second sentence as a result.',
              Car: 'Car never opens a sentence.',
              Comme: 'Comme gives a cause; here we add an argument.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
