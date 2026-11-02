import { byDe, flashcards, quizDeEn, vocabList } from '../builders';
import {
  activity,
  cards,
  condPastTable,
  condTable,
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

const U = 'fr-c1-1-numerique';
const L = 'fr-c11-modality' as const;

const numerique = vocabList(U, 'Digital technology', [
  ['un réseau de neurones', 'a neural network', '🕸️'],
  ['une donnée personnelle', 'a piece of personal data', '🔐'],
  ['les données personnelles', 'personal data', '🗂️'],
  ['la protection des données', 'data protection', '🛡️'],
  ['une cyberattaque', 'a cyberattack', '💣'],
  ['le hameçonnage', 'phishing', '🎣'],
  ['la fracture numérique', 'the digital divide', '🕳️'],
  ['une plateforme', 'a platform', '🧱'],
  ['l’informatique en nuage', 'cloud computing', '☁️'],
  ['un robot conversationnel', 'a chatbot', '💬'],
  ['la reconnaissance faciale', 'facial recognition', '🙂'],
  ['la surveillance de masse', 'mass surveillance', '👁️'],
  ['un objet connecté', 'a connected device', '⌚'],
  ['un logiciel malveillant', 'malware', '🦠'],
  ['un logiciel libre', 'open-source software', '🧑‍💻'],
  ['le piratage', 'hacking, piracy', '🏴‍☠️'],
]);

const avenir = vocabList(U, 'Innovation and the future', [
  ['une innovation', 'an innovation', '💡'],
  ['un exploit', 'a feat', '🏅'],
  ['une prouesse', 'a feat', '🏅'],
  ['la robotisation', 'robotisation', '🦾'],
  ['l’automatisation', 'automation', '⚙️'],
  ['les métiers de demain', 'the jobs of tomorrow', '🔮'],
  ['la réalité virtuelle', 'virtual reality', '🥽'],
  ['la sobriété numérique', 'digital sobriety (using less tech)', '🌿'],
  ['l’économie de l’attention', 'the attention economy', '👁️'],
  ['un déchet électronique', 'electronic waste', '🗑️'],
  ['une mutation', 'a profound change', '🦎'],
  ['bouleverser', 'to upend, to disrupt', '🌪️'],
  ['révolutionner', 'to revolutionise', '🔄'],
  ['anticiper', 'to anticipate', '🔭'],
  ['appréhender', 'to dread, to apprehend', '😟'],
  ['un brevet', 'a patent', '📑'],
]);

const vocab = [...numerique, ...avenir];

export const numeriqueUnit: UnitContent = {
  unit: unitFr({
    id: U,
    order: 11,
    title: 'Numérique et avenir',
    subtitle: 'AI, data and innovation, with the language of certainty and doubt',
    emoji: '🤖',
    goals: [
      'Discuss artificial intelligence, data protection and cyber risks',
      'Weigh innovation against its costs for jobs and the planet',
      'Show how sure you are: certainly, probably, perhaps, according to …',
    ],
    grammar: [
      'Certainty: il est certain que, sans aucun doute, manifestement + indicatif',
      'Possibility and doubt: peut-être, il se peut que, il est peu probable que + subjonctif',
      'Reported, unconfirmed information: selon, d’après, à en croire + conditionnel',
    ],
    vocabFields: ['Digital technology', 'Innovation and the future'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-numerique',
      'flashcards',
      meta(
        'Digital technology',
        'Un algorithme, le hameçonnage, la fracture numérique – the words of digital life.',
        ['vocabulary', 'digital-world'],
        1,
        4,
      ),
      flashcards(numerique),
    ),

    activity(
      U,
      'flash-avenir',
      'flashcards',
      meta(
        'Innovation and the future',
        'Une avancée, la robotisation, bouleverser – the words of change.',
        ['vocabulary', 'future-technology'],
        1,
        4,
      ),
      flashcards(avenir),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'digital-world'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'le hameçonnage',
          'la fracture numérique',
          'l’informatique en nuage',
          'un logiciel libre',
          'l’économie de l’attention',
          'une prouesse',
          'bouleverser',
          'appréhender',
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
        ['vocabulary', 'future-technology'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'un algorithme', b: 'une suite d’instructions que suit un ordinateur' },
          { id: 'm2', a: 'le piratage', b: 'l’accès illégal à un système informatique' },
          { id: 'm3', a: 'un brevet', b: 'un titre qui protège une invention' },
          { id: 'm4', a: 'anticiper', b: 'prévoir et se préparer à l’avance' },
          { id: 'm5', a: 'une mutation', b: 'un changement profond et durable' },
          {
            id: 'm6',
            a: 'les données personnelles',
            b: 'les informations qui permettent d’identifier quelqu’un',
          },
          { id: 'm7', a: 'une avancée', b: 'un progrès important' },
          { id: 'm8', a: 'révolutionner', b: 'changer radicalement' },
        ],
      },
    ),

    activity(
      U,
      'listen-numerique',
      'listen',
      meta(
        'Listen to the tech news',
        'Listen to the sentence and pick what it says.',
        ['listening', 'digital-world'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'Selon les experts, la cyberattaque aurait commencé lundi soir.',
            'According to the experts, the cyberattack would have started on Monday evening.',
            [
              'The experts confirm that the cyberattack ended on Monday evening.',
              'According to the experts, the hacker has been arrested on Monday.',
              'The experts deny that there was a cyberattack.',
            ],
          ),
          heard(
            'l2',
            'Il est peu probable que cette application protège vraiment nos données.',
            'It is unlikely that this app really protects our data.',
            [
              'It is certain that this app protects our data.',
              'It is likely that this app sells our data.',
              'This app has been updated to protect our data.',
            ],
          ),
          heard(
            'l3',
            'Sans aucun doute, l’intelligence artificielle va bouleverser les métiers de demain.',
            'Without a doubt, artificial intelligence will upend the jobs of tomorrow.',
            [
              'Perhaps artificial intelligence will upend the jobs of tomorrow.',
              'Artificial intelligence has already upended the jobs of today.',
              'Artificial intelligence will probably create no new jobs.',
            ],
          ),
          heard(
            'l4',
            'Peut-être pourrons-nous bientôt réduire nos déchets électroniques.',
            'Perhaps we will soon be able to reduce our electronic waste.',
            [
              'We will certainly reduce our electronic waste soon.',
              'We could never recycle our electronic waste.',
              'The waste of the factory was reduced last week.',
            ],
          ),
          heard(
            'l5',
            'Il paraît que la fracture numérique touche encore beaucoup de villages.',
            'Apparently the digital divide still affects many villages.',
            [
              'The digital divide has disappeared from many villages.',
              'The villages are asking for the divide to be studied.',
              'The digital divide affects only large cities.',
            ],
          ),
          heard(
            'l6',
            'Il se peut que la reconnaissance faciale soit interdite dans la rue.',
            'It may be that facial recognition will be banned in the street.',
            [
              'Facial recognition is already banned in the street.',
              'Facial recognition is certainly allowed in the street.',
              'The street has been fitted with facial recognition.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-certainty',
      'sortit',
      meta(
        'How sure is the speaker?',
        'Sort the expressions by the degree of certainty they show.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'How sure is the speaker?',
        buckets: [
          { id: 'sure', label: 'Certain (indicatif)', emoji: '✅' },
          { id: 'maybe', label: 'Possible or doubtful', emoji: '🤔' },
          { id: 'report', label: 'Reported, not confirmed (conditionnel)', emoji: '🗞️' },
        ],
        items: cards('m', [
          ['il est certain que', 'sure', 'it is certain that'],
          ['sans aucun doute', 'sure', 'without any doubt'],
          ['manifestement', 'sure', 'obviously'],
          ['il est évident que', 'sure', 'it is obvious that'],
          ['peut-être', 'maybe', 'perhaps'],
          ['il se peut que', 'maybe', 'it may be that'],
          ['il est peu probable que', 'maybe', 'it is unlikely that'],
          ['je doute que', 'maybe', 'I doubt that'],
          ['selon la presse', 'report', 'according to the press'],
          ['d’après les experts', 'report', 'according to the experts'],
          ['à en croire les rumeurs', 'report', 'if the rumours are to be believed'],
          ['il paraît que', 'report', 'apparently, it seems that'],
        ]),
      },
    ),

    activity(
      U,
      'conj-conditionnel',
      'conjugation',
      meta(
        'The reporting conditional',
        'Complete the conditionnel présent and passé used to report unconfirmed news.',
        ['grammar', L],
        3,
        5,
      ),
      {
        tables: [
          condTable('être', 'to be', ['il/elle/on', 'ils/elles']),
          condTable('aller', 'to go', ['il/elle/on', 'ils/elles']),
          condTable('savoir', 'to know', ['il/elle/on', 'je']),
          condTable('pouvoir', 'to be able to', ['il/elle/on', 'ils/elles']),
          condPastTable('faire', 'to do, to make', ['il/elle/on', 'ils/elles']),
          condPastTable('avoir', 'to have', ['il/elle/on', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-modality',
      'gapfill',
      meta(
        'Choose the right shade',
        'Pick the verb form that matches how sure the speaker is.',
        ['grammar', L, 'digital-world'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'Selon le ministre, le nombre de cyberattaques ___ doublé.',
            'aurait',
            {
              a: 'The present perfect states it as a fact; selon + conditional marks it as reported.',
              avait: 'The plus-que-parfait looks back from another past moment.',
              ait: 'The subjunctive does not follow selon.',
            },
            'According to the minister, the number of cyberattacks has doubled (reportedly).',
            'Reported news: conditionnel passé.',
          ),
          gh(
            'g2',
            'Il se peut que l’application ___ bientôt payante.',
            'soit',
            {
              est: 'Il se peut que needs the subjunctive.',
              sera: 'Il se peut que does not take the future.',
              serait: 'Il se peut que does not take the conditional.',
            },
            'It may be that the app will soon be paid.',
            'A possibility: subjonctif.',
          ),
          gh(
            'g3',
            'Il est certain que ce progrès ___ utile.',
            'sera',
            {
              soit: 'Certainty takes the indicative, not the subjunctive.',
              serait: 'The conditional would weaken a statement of certainty.',
              fût: 'This literary subjunctive does not follow a certainty.',
            },
            'It is certain that this progress will be useful.',
            'Certainty: indicatif.',
          ),
          gh(
            'g4',
            'Il semble que ce logiciel ___ des failles.',
            'ait',
            {
              a: 'Il semble que (impersonal) normally takes the subjunctive.',
              aura: 'Il semble que does not take the future.',
              avait: 'Il semble que does not take the imparfait.',
            },
            'It seems that this software has flaws.',
            'Il semble que + subjonctif (but il me semble que + indicatif).',
          ),
          gh(
            'g5',
            'À en croire les experts, la 5G ___ risquée.',
            'serait',
            {
              est: 'The present states it as a fact; à en croire calls for the conditional.',
              soit: 'The subjunctive does not follow à en croire.',
              sera: 'The future does not mark a reported claim.',
            },
            'If the experts are to be believed, 5G would be risky.',
            'Reported claim: conditionnel.',
          ),
          gh(
            'g6',
            'Il est peu probable que la plateforme ___ fermée.',
            'soit',
            {
              sera: 'Il est peu probable que needs the subjunctive.',
              serait: 'Il est peu probable que does not take the conditional.',
              est: 'Il est peu probable que needs the subjunctive.',
            },
            'It is unlikely that the platform will be closed.',
            'Improbability: subjonctif.',
          ),
          gh(
            'g7',
            'Il est évident que l’IA ___ des limites.',
            'a',
            {
              ait: 'Il est évident que states a certainty: indicative.',
              aurait: 'The conditional weakens a certainty.',
              aie: 'This is a first-person subjunctive form.',
            },
            'It is obvious that AI has limits.',
            'Certainty: indicatif.',
          ),
          gh(
            'g8',
            'Peut-être ___ vous avez raison.',
            'que',
            {
              'qu’': 'Elision happens only before a vowel; vous begins with a consonant.',
              'ce que': 'Ce que cannot follow peut-être.',
              de: 'De does not follow peut-être.',
            },
            'Perhaps you are right.',
            'Peut-être que + indicative, or peut-être with inversion.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the verb',
        'Type the right form of the verb in brackets.',
        ['grammar', L, 'future-technology'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Selon la presse, le ministre ___ (démissionner) hier.',
            'aurait démissionné',
            'According to the press, the minister reportedly resigned yesterday.',
            'Reported news about the past: conditionnel passé.',
          ),
          typed(
            't2',
            'Il est peu probable que cette application ___ (être) gratuite.',
            'soit',
            'It is unlikely that this app will be free.',
            'Subjonctif of être: qu’elle soit.',
          ),
          typed(
            't3',
            'Il se peut qu’elle ___ (avoir) raison.',
            'ait',
            'She may be right.',
            'Subjonctif of avoir: qu’elle ait.',
          ),
          typed(
            't4',
            'Apparemment, les serveurs ___ (être) en panne.',
            'sont',
            'Apparently the servers are down.',
            'Apparemment + indicatif.',
          ),
          typed(
            't5',
            'À en croire les rumeurs, la société ___ (vouloir) racheter son concurrent.',
            'voudrait',
            'If the rumours are to be believed, the company wants to buy its competitor.',
            'Reported claim: conditionnel.',
          ),
          typed(
            't6',
            'Peut-être ___-nous résoudre ce problème.',
            'pourrons',
            'Perhaps we will be able to solve this problem.',
            'Peut-être at the start often triggers inversion: pourrons-nous.',
            ['pouvons'],
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
        'Put the words in order. Pick the right mood and tense.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'According to the experts, the attack would have started on Monday.',
            ['Selon', 'les', 'experts,', 'l’attaque', 'aurait', 'commencé', 'lundi.'],
            { extra: ['a'] },
          ),
          sent(
            'b2',
            'It is unlikely that this app will be free.',
            ['Il', 'est', 'peu', 'probable', 'que', 'cette', 'application', 'soit', 'gratuite.'],
            { extra: ['sera'] },
          ),
          sent(
            'b3',
            'Apparently, the servers are down.',
            ['Apparemment,', 'les', 'serveurs', 'sont', 'en', 'panne.'],
            { extra: ['soient'] },
          ),
          sent(
            'b4',
            'Perhaps we will find a solution.',
            ['Peut-être', 'trouverons-nous', 'une', 'solution.'],
            { extra: ['trouvons'] },
          ),
          sent(
            'b5',
            'It may be that she is right.',
            ['Il', 'se', 'peut', 'qu’elle', 'ait', 'raison.'],
            { extra: ['a'] },
          ),
          sent(
            'b6',
            'This innovation will without any doubt change everything.',
            ['Cette', 'innovation', 'va', 'sans', 'aucun', 'doute', 'tout', 'changer.'],
            { extra: ['changerait'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Talking about technology',
        'Two conversations: an interview about AI and a phishing message.',
        ['communication', 'digital-world'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'An interview about AI',
            emoji: '🎙️',
            setting: 'A radio host asks you about artificial intelligence and jobs.',
            turns: [
              say(
                'Le journaliste',
                'L’intelligence artificielle va-t-elle supprimer beaucoup d’emplois ?',
                'Is artificial intelligence going to remove many jobs?',
              ),
              you(
                'Il est certain que certains métiers vont changer, mais il est peu probable que tous disparaissent.',
                [
                  'Il est certain que tous les métiers disparaissent.',
                  'This is an exaggerated claim stated as a certainty.',
                ],
                [
                  'Je ne sais pas, je suis fatigué.',
                  'This avoids the question and is unprofessional.',
                ],
              ),
              say(
                'Le journaliste',
                'On dit qu’une grande entreprise aurait déjà remplacé ses conseillers par des robots.',
                'It is said that a big company has already replaced its advisers with robots (reportedly).',
              ),
              you(
                'Selon certaines sources, oui, mais il faudrait vérifier avant de l’affirmer.',
                [
                  'Oui, c’est sûr et certain, tout le monde le sait.',
                  'The claim is only reported; you cannot present it as proven.',
                ],
                [
                  'Peut-être que non, c’est inventé.',
                  'You have no evidence to say it is invented.',
                ],
              ),
            ],
          },
          {
            id: 'phishing',
            title: 'A suspicious message',
            emoji: '🎣',
            setting: 'A friend shows you a message that asks for his bank password.',
            turns: [
              say(
                'Karim',
                'Ma banque m’a envoyé un message : je dois entrer mon mot de passe. C’est normal ?',
                'My bank sent me a message: I have to enter my password. Is that normal?',
              ),
              you(
                'Manifestement, c’est du hameçonnage. Il se peut que le site soit une copie.',
                [
                  'Manifestement, c’est ta banque, entre ton mot de passe.',
                  'This is dangerous advice that ignores the signs of phishing.',
                ],
                [
                  'Il se peut que le site est une copie.',
                  'Il se peut que needs the subjunctive: soit.',
                ],
              ),
              say(
                'Karim',
                'Mais le logo a l’air vrai. Que faire ?',
                'But the logo looks real. What should I do?',
              ),
              you(
                'Ne clique pas. Appelle ta banque : il est peu probable qu’elle te demande ton mot de passe par message.',
                [
                  'Clique vite, avant que le message disparaisse.',
                  'Rushing is exactly what phishing relies on.',
                ],
                [
                  'Il est peu probable qu’elle te demande ton mot de passe, donc clique.',
                  'The conclusion does not follow from the doubt.',
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
        'Certainty blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'digital-world'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“Il est certain que” is followed by the indicative.', true),
          tf('b2', '“Il se peut que” is followed by the subjunctive.', true),
          tf('b3', '“Selon” + conditional presents a claim as reported and unconfirmed.', true),
          tf(
            'b4',
            '“Il est peu probable que” is followed by the future.',
            false,
            'It takes the subjunctive.',
          ),
          tf('b5', '“Peut-être” can be followed by inversion: “Peut-être viendra-t-il”.', true),
          tf(
            'b6',
            '“Apparemment” is followed by the subjunctive.',
            false,
            'It is an adverb, with the indicative.',
          ),
          tf('b7', '“Un algorithme” is a computer virus.', false, 'It is a set of instructions.'),
          tf('b8', '“Le hameçonnage” is phishing.', true),
          tf('b9', '“Redouter” means to look forward to.', false, 'It means to dread.'),
          tf('b10', '“Un brevet” protects an invention.', true),
          tf('b11', '“La fracture numérique” is a gap in access to digital tools.', true),
          tf(
            'b12',
            '“L’obsolescence programmée” means that a product is built to last forever.',
            false,
            'It means it is designed to wear out.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: digital words and degrees of certainty.',
        ['vocabulary', 'grammar', L, 'digital-world'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “une cyberattaque”?', 'a cyberattack', [
            'a software update',
            'a secure password',
            'a data backup',
          ]),
          qh(
            'c2',
            'D’après la police, le pirate ___ arrêté hier.',
            'aurait été',
            {
              est: 'The present states it as a fact; d’après calls for the conditional.',
              soit: 'The subjunctive does not follow d’après.',
              sera: 'The future does not fit a past event.',
            },
            L,
          ),
          q('c3', '“Bouleverser” means …', 'to upend', ['to confirm', 'to repair', 'to patent']),
          qh(
            'c4',
            'Il est évident que la sécurité ___ importante.',
            'est',
            {
              soit: 'A certainty takes the indicative.',
              serait: 'The conditional weakens the certainty.',
              fût: 'This literary subjunctive does not follow a certainty.',
            },
            L,
          ),
          q('c5', '“Une prouesse” is …', 'a feat', ['a failure', 'a rumour', 'a patent']),
          qh(
            'c6',
            'Il se peut que nous ___ bientôt une nouvelle version.',
            'ayons',
            {
              avons: 'Il se peut que needs the subjunctive.',
              aurons: 'Il se peut que does not take the future.',
              aurions: 'Il se peut que does not take the conditional.',
            },
            L,
          ),
          q('c7', '“Un déchet électronique” is …', 'electronic waste', [
            'an electric wire',
            'a computer screen',
            'a power cut',
          ]),
          qh(
            'c8',
            'Sans aucun doute, ce robot ___ de nombreuses tâches.',
            'accomplit',
            {
              accomplisse: 'Certainty takes the indicative.',
              accomplirait: 'The conditional weakens the certainty.',
              accomplît: 'This literary subjunctive does not follow a certainty.',
            },
            L,
          ),
          q('c9', '“La sobriété numérique” is …', 'using digital tools less', [
            'a faster internet',
            'a type of software',
            'a data law',
          ]),
          qh(
            'c10',
            'À en croire certains, ce téléphone ___ révolutionnaire.',
            'serait',
            {
              est: 'The present states it as a fact; à en croire calls for the conditional.',
              soit: 'The subjunctive does not follow à en croire.',
              sera: 'The future does not mark a reported claim.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
