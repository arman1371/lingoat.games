import {
  activity,
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  spell,
  unit,
  vocabList,
} from '../builders';
import type { UnitContent } from './types';

const U = 'fr-c2-1-institutions';

const france = vocabList(U, 'French institutions', [
  ['le quinquennat', 'the five-year presidential term', '5️⃣'],
  ['la cohabitation', 'power-sharing between a president and an opposing majority', '🤝'],
  ['la dissolution', 'dissolution of the Assemblée nationale', '🔚'],
  ['la motion de censure', 'vote of no confidence', '🗳️'],
  ['le Conseil constitutionnel', 'the Constitutional Council', '⚖️'],
  ['la commission mixte paritaire', 'joint committee of both chambers', '👥'],
  ['le scrutin', 'the ballot, the vote', '📮'],
  ['le suffrage universel', 'universal suffrage', '🧑‍🤝‍🧑'],
  ['le contreseing', 'countersignature', '✍️'],
]);

const europe = vocabList(U, 'European institutions', [
  ['la directive', 'directive (must be transposed)', '📐'],
  ['le règlement', 'regulation (directly applicable)', '📏'],
  ['la codécision', 'ordinary legislative procedure', '🔗'],
  ['la zone euro', 'the eurozone', '💶'],
  ['le Haut Représentant', 'High Representative', '🎖️'],
  ['le comité de conciliation', 'conciliation committee', '🕊️'],
  ['la présidence tournante', 'rotating presidency', '🔄'],
  ['le député européen', 'Member of the European Parliament', '🇪🇺'],
  ['la Cour des comptes', 'Court of Auditors', '🧮'],
]);

const powers = vocabList(U, 'What institutions do', [
  ['promulguer', 'to promulgate (a law)', '🖋️'],
  ['ratifier', 'to ratify', '✅'],
  ['abroger', 'to repeal', '🗑️'],
  ['amender', 'to amend', '✏️'],
  ['légiférer', 'to legislate', '📚'],
  ['siéger', 'to sit (in an assembly)', '🪑'],
  ['saisir', 'to refer a matter to (a court)', '📨'],
  ['transposer', 'to transpose (into national law)', '🔀'],
]);

const vocab = [...france, ...europe, ...powers];

const whereItems: [string, string, string][] = [
  ['le Sénat', 'france', 'the Senate'],
  ['le Conseil constitutionnel', 'france', 'the Constitutional Council'],
  ['le quinquennat', 'france', 'the five-year term'],
  ['la motion de censure', 'france', 'the no-confidence motion'],
  ['la cohabitation', 'france', 'cohabitation'],
  ['l’Assemblée nationale', 'france', 'the National Assembly'],
  ['la Commission européenne', 'eu', 'the European Commission'],
  ['la Banque centrale européenne', 'eu', 'the European Central Bank'],
  ['la Cour de justice', 'eu', 'the Court of Justice (of the EU)'],
  ['le Parlement européen', 'eu', 'the European Parliament'],
  ['la directive', 'eu', 'the directive'],
  ['le Haut Représentant', 'eu', 'the High Representative'],
];

const quizWords = vocab.filter(
  (v) => !['le contreseing', 'la zone euro', 'la Cour des comptes', 'siéger'].includes(v.de),
);

export const institutions: UnitContent = {
  unit: unit({
    id: U,
    levelId: 'fr-c2-1',
    order: 8,
    title: 'Institutions',
    subtitle: 'How France and the European Union make and apply laws',
    emoji: '🏛️',
    goals: [
      'Name the main French and European institutions and what each does',
      'Use the verbs of lawmaking: promulguer, ratifier, abroger, amender, légiférer',
      'Read and write acronyms correctly: gender, plural and pronunciation',
    ],
    grammar: ['Acronyms and institution names'],
    vocabFields: ['French institutions', 'European institutions', 'What institutions do'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-france',
      'flashcards',
      {
        title: 'French institutions',
        description: 'The terms of the Fifth Republic.',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(france),
    ),

    activity(
      U,
      'flash-europe',
      'flashcards',
      {
        title: 'European institutions',
        description: 'The terms of the European Union.',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 1,
        estMinutes: 4,
      },
      flashcards(europe),
    ),

    activity(
      U,
      'flash-powers',
      'flashcards',
      {
        title: 'What institutions do',
        description: 'Verbs for making, changing and checking laws.',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 2,
        estMinutes: 3,
      },
      flashcards(powers),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Match the term with its meaning.',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(
        byDe(
          vocab,
          'le quinquennat',
          'la cohabitation',
          'la motion de censure',
          'le suffrage universel',
          'la directive',
          'le règlement',
          'la codécision',
          'promulguer',
          'abroger',
        ),
        quizWords,
        4,
      ),
    ),

    activity(
      U,
      'listen-terms',
      'listen',
      {
        title: 'Listen and pick the meaning',
        description: 'Listen to the term and choose what it means.',
        tags: ['listening', 'vocabulary', 'fr-c21-institutions'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'la dissolution',
          'le scrutin',
          'le Haut Représentant',
          'ratifier',
          'amender',
          'légiférer',
        ),
        quizWords,
      ),
    ),

    activity(
      U,
      'memory-terms',
      'memory',
      {
        title: 'Institutions memory',
        description: 'Match the term with its meaning.',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 2,
        estMinutes: 3,
      },
      memory(
        byDe(
          vocab,
          'la commission mixte paritaire',
          'le Conseil constitutionnel',
          'le comité de conciliation',
          'la présidence tournante',
          'le député européen',
          'saisir',
          'transposer',
          'la dissolution',
        ),
      ),
    ),

    activity(
      U,
      'sort-where',
      'sortit',
      {
        title: 'France or the European Union?',
        description: 'Which level of government does the institution or term belong to?',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        instruction: 'Where does it belong?',
        buckets: [
          { id: 'france', label: 'France', emoji: '🇫🇷' },
          { id: 'eu', label: 'European Union', emoji: '🇪🇺' },
        ],
        items: whereItems.map(([text, bucket, translation], i) => ({
          id: `w${i + 1}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-powers',
      'gapfill',
      {
        title: 'Which verb does the institution use?',
        description: 'Choose the verb of lawmaking that fits the sentence.',
        tags: ['vocabulary', 'fr-c21-institutions'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 'p1',
            text: 'Le président ___ la loi dans les quinze jours.',
            answer: 'promulgue',
            options: ['promulgue', 'ratifie', 'abroge', 'siège'],
            translation: 'The president promulgates the law within fifteen days.',
          },
          {
            id: 'p2',
            text: 'Les États membres ___ le traité.',
            answer: 'ratifient',
            options: ['ratifient', 'abrogent', 'amendent', 'siègent'],
            translation: 'The member states ratify the treaty.',
          },
          {
            id: 'p3',
            text: 'Le Parlement a ___ l’ancienne loi.',
            answer: 'abrogé',
            options: ['abrogé', 'promulgué', 'ratifié', 'saisi'],
            translation: 'Parliament has repealed the old law.',
          },
          {
            id: 'p4',
            text: 'Les députés ___ le projet pour le rendre plus social.',
            answer: 'amendent',
            options: ['amendent', 'abrogent', 'siègent', 'légifèrent'],
            translation: 'The deputies amend the bill to make it more social.',
          },
          {
            id: 'p5',
            text: 'Seul le Parlement peut ___ dans ce domaine.',
            answer: 'légiférer',
            options: ['légiférer', 'ratifier', 'saisir', 'siéger'],
            translation: 'Only Parliament can legislate in this area.',
          },
          {
            id: 'p6',
            text: 'Le Sénat ___ au palais du Luxembourg.',
            answer: 'siège',
            options: ['siège', 'promulgue', 'abroge', 'ratifie'],
            translation: 'The Senate sits in the Luxembourg Palace.',
          },
          {
            id: 'p7',
            text: 'Soixante députés ont ___ le Conseil constitutionnel.',
            answer: 'saisi',
            options: ['saisi', 'amendé', 'siégé', 'légiféré'],
            translation: 'Sixty deputies referred the matter to the Constitutional Council.',
          },
          {
            id: 'p8',
            text: 'Une directive doit être ___ en droit national.',
            answer: 'transposée',
            options: ['transposée', 'promulguée', 'abrogée', 'saisie'],
            translation: 'A directive must be transposed into national law.',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-acronyms',
      'gapfill',
      {
        title: 'Gender and plural of acronyms',
        description: 'An acronym takes the gender of its core noun and no plural -s.',
        tags: ['grammar', 'fr-c21-acronyms'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 'a1',
            text: '___ SNCF a annoncé des retards.',
            answer: 'La',
            options: ['La', 'Le', 'L’', 'Un'],
            translation: 'The SNCF (railway company) announced delays.',
            why: { Le: 'SNCF stands for “Société nationale…”, and société is feminine.' },
          },
          {
            id: 'a2',
            text: '___ CIO a choisi la ville organisatrice.',
            answer: 'Le',
            options: ['Le', 'La', 'Les', 'Une'],
            translation: 'The IOC chose the host city.',
            why: {
              La: 'CIO stands for “Comité international olympique”, and comité is masculine.',
            },
          },
          {
            id: 'a3',
            text: '___ BCE a relevé ses taux.',
            answer: 'La',
            options: ['La', 'Le', 'Un', 'Les'],
            translation: 'The ECB has raised its rates.',
            why: { Le: 'BCE stands for “Banque centrale européenne”, and banque is feminine.' },
          },
          {
            id: 'a4',
            text: 'Plusieurs ___ ont protesté devant le siège.',
            answer: 'ONG',
            options: ['ONG', 'ONGs', 'ONG’s', 'ONGS'],
            translation: 'Several NGOs protested outside the headquarters.',
            why: { ONGs: 'Acronyms take no plural s in French.' },
          },
          {
            id: 'a5',
            text: 'Il y a trente ___ dans la bibliothèque.',
            answer: 'BD',
            options: ['BD', 'BDs', 'BD’s', 'BDS'],
            translation: 'There are thirty comics in the library.',
            why: { BDs: 'Des BD, des CD: no plural s on an acronym.' },
          },
          {
            id: 'a6',
            text: 'On lit « OTAN » comme un mot : c’est un ___.',
            answer: 'acronyme',
            options: ['acronyme', 'sigle', 'symbole', 'abréviation'],
            translation: 'OTAN is read as a word: it is an acronym.',
            why: { sigle: 'A sigle is read letter by letter, like SNCF.' },
          },
        ],
      },
    ),

    activity(
      U,
      'spell-words',
      'spell',
      {
        title: 'Spell the terms',
        description: 'Unscramble, type and write down the verbs and nouns of institutions.',
        tags: ['spelling', 'fr-c21-institutions'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          ...spell(byDe(vocab, 'légiférer', 'promulguer'), 'unscramble').items,
          ...spell(byDe(vocab, 'ratifier'), 'type').items,
          ...spell(byDe(vocab, 'abroger'), 'dictation').items,
          {
            id: 'sp-quinquennat',
            mode: 'unscramble',
            answer: 'quinquennat',
            hint: 'the five-year presidential term',
            emoji: '5️⃣',
            speak: 'le quinquennat',
          },
          {
            id: 'sp-cohabitation',
            mode: 'type',
            answer: 'cohabitation',
            hint: 'power-sharing between a president and an opposing majority',
            emoji: '🤝',
            speak: 'la cohabitation',
          },
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build the sentence',
        description: 'Put sentences about institutions in order.',
        tags: ['grammar', 'fr-c21-institutions'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'The president is elected for five years by universal suffrage.',
            words: [
              'Le',
              'président',
              'est',
              'élu',
              'pour',
              'cinq',
              'ans',
              'au',
              'suffrage',
              'universel.',
            ],
          },
          {
            id: 's2',
            translation: 'Only the National Assembly can overthrow the government.',
            words: [
              'Seule',
              'l’Assemblée',
              'nationale',
              'peut',
              'renverser',
              'le',
              'gouvernement.',
            ],
          },
          {
            id: 's3',
            translation: 'The European Commission proposes the laws of the Union.',
            words: ['La', 'Commission', 'européenne', 'propose', 'les', 'lois', 'de', 'l’Union.'],
          },
          {
            id: 's4',
            translation: 'A directive must be transposed into national law.',
            words: ['Une', 'directive', 'doit', 'être', 'transposée', 'en', 'droit', 'national.'],
          },
          {
            id: 's5',
            translation: 'Parliament legislates and checks the government’s action.',
            words: [
              'Le',
              'Parlement',
              'légifère',
              'et',
              'contrôle',
              'l’action',
              'du',
              'gouvernement.',
            ],
          },
          {
            id: 's6',
            translation: 'During cohabitation, the government depends on Parliament.',
            words: [
              'Pendant',
              'la',
              'cohabitation,',
              'le',
              'gouvernement',
              'dépend',
              'du',
              'Parlement.',
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'Talk about institutions',
        description: 'Explain how a law is made, how Europe works and what an acronym means.',
        tags: ['communication', 'fr-c21-institutions'],
        difficulty: 3,
        estMinutes: 6,
      },
      {
        scenes: [
          {
            id: 'law',
            title: 'How is a law made?',
            emoji: '📜',
            setting: 'A visitor asks you how a law is adopted in France.',
            turns: [
              {
                kind: 'npc',
                who: 'Un visiteur',
                text: 'Qui vote les lois en France ?',
                translation: 'Who votes laws in France?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Le Parlement : l’Assemblée nationale et le Sénat.', correct: true },
                  {
                    text: 'Le Conseil constitutionnel, seul.',
                    correct: false,
                    feedback:
                      'The Constitutional Council checks that laws respect the Constitution.',
                  },
                  {
                    text: 'Le président, seul.',
                    correct: false,
                    feedback: 'The president promulgates the law, but Parliament votes it.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Un visiteur',
                text: 'Et si les deux assemblées ne sont pas d’accord ?',
                translation: 'And if the two chambers disagree?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'On réunit une commission mixte paritaire.',
                    correct: true,
                  },
                  {
                    text: 'On dissout le Sénat.',
                    correct: false,
                    feedback: 'Only the Assemblée nationale can be dissolved.',
                  },
                ],
              },
            ],
          },
          {
            id: 'europe',
            title: 'How does Europe work?',
            emoji: '🇪🇺',
            setting: 'A student asks you about the European Union.',
            turns: [
              {
                kind: 'npc',
                who: 'Une étudiante',
                text: 'Qui propose les lois européennes ?',
                translation: 'Who proposes European laws?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'En général, la Commission européenne.', correct: true },
                  {
                    text: 'La Banque centrale européenne.',
                    correct: false,
                    feedback: 'The ECB runs the monetary policy of the eurozone.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Une étudiante',
                text: 'Et la différence entre une directive et un règlement ?',
                translation: 'And the difference between a directive and a regulation?',
              },
              {
                kind: 'you',
                options: [
                  {
                    text: 'La directive doit être transposée ; le règlement s’applique directement.',
                    correct: true,
                  },
                  {
                    text: 'Le règlement doit être transposé ; la directive s’applique directement.',
                    correct: false,
                    feedback: 'It is the other way round.',
                  },
                ],
              },
            ],
          },
          {
            id: 'acronym',
            title: 'What does it stand for?',
            emoji: '🔤',
            setting: 'A colleague is confused by acronyms in a newspaper.',
            turns: [
              {
                kind: 'npc',
                who: 'Paul',
                text: '« La BCE » ou « le BCE » ?',
                translation: '“La BCE” or “le BCE”?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'La BCE : banque est féminin.', correct: true },
                  {
                    text: 'Le BCE : c’est un sigle.',
                    correct: false,
                    feedback: 'The gender follows the core noun, banque: feminine.',
                  },
                ],
              },
              {
                kind: 'npc',
                who: 'Paul',
                text: 'Et au pluriel, « des ONGs » ?',
                translation: 'And in the plural, “des ONGs”?',
              },
              {
                kind: 'you',
                options: [
                  { text: 'Non : des ONG, sans s.', correct: true },
                  {
                    text: 'Oui, comme en anglais.',
                    correct: false,
                    feedback: 'French acronyms take no plural s.',
                  },
                ],
              },
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
        title: 'Institutions blitz',
        description: 'True or false? Beat the clock!',
        tags: ['grammar', 'fr-c21-institutions'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: 'The French president is elected for five years.', isTrue: true },
          {
            id: 'b2',
            text: 'Only the Assemblée nationale can bring down the government.',
            isTrue: true,
          },
          {
            id: 'b3',
            text: 'The Sénat has 577 members.',
            isTrue: false,
            explanation: 'The Sénat has 348 senators; 577 is the number of députés.',
          },
          { id: 'b4', text: 'A directive must be transposed into national law.', isTrue: true },
          { id: 'b5', text: 'A règlement applies directly in every member state.', isTrue: true },
          {
            id: 'b6',
            text: 'The Conseil européen brings together the ministers of the 27 states.',
            isTrue: false,
            explanation:
              'It brings together the heads of state or government; the ministers sit in the Council of the EU.',
          },
          {
            id: 'b7',
            text: 'The European Court of Auditors has judicial power.',
            isTrue: false,
            explanation: 'Despite its name it has no judicial power.',
          },
          { id: 'b8', text: '“La SNCF” is feminine because société is feminine.', isTrue: true },
          {
            id: 'b9',
            text: '“Des ONGs” is the correct plural of ONG.',
            isTrue: false,
            explanation: 'Acronyms take no plural s: des ONG.',
          },
          {
            id: 'b10',
            text: 'Cohabitation means a president and a parliamentary majority from opposing camps.',
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
        title: 'Institutions challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'fr-c21-institutions', 'fr-c21-acronyms'],
        difficulty: 3,
        estMinutes: 5,
      },
      {
        questions: [
          {
            id: 'c1',
            prompt: 'Which institution can check that a law respects the Constitution?',
            options: [
              'le Conseil constitutionnel',
              'la Commission européenne',
              'la Banque centrale européenne',
              'la Cour des comptes',
            ],
            answer: 'le Conseil constitutionnel',
          },
          {
            id: 'c2',
            prompt: 'What does “le quinquennat” mean?',
            options: [
              'the five-year presidential term',
              'the five chambers',
              'the fifth republic',
              'the fifth article',
            ],
            answer: 'the five-year presidential term',
          },
          {
            id: 'c3',
            prompt: 'Which act has to be transposed into national law?',
            options: ['la directive', 'le règlement', 'la décision', 'la codécision'],
            answer: 'la directive',
          },
          {
            id: 'c4',
            prompt: 'Which verb means “to repeal”?',
            options: ['abroger', 'ratifier', 'amender', 'promulguer'],
            answer: 'abroger',
          },
          {
            id: 'c5',
            prompt: 'Which article fits: “___ OTAN”? It is read as a word, so it is an …',
            options: ['acronyme', 'sigle', 'abréviation', 'symbole'],
            answer: 'acronyme',
            lesson: 'fr-c21-acronyms',
          },
          {
            id: 'c6',
            prompt: 'Which plural is correct?',
            options: [
              'Plusieurs ONG ont protesté.',
              'Plusieurs ONGs ont protesté.',
              'Plusieurs ONG’s ont protesté.',
              'Plusieurs ONGS ont protesté.',
            ],
            answer: 'Plusieurs ONG ont protesté.',
            lesson: 'fr-c21-acronyms',
          },
          {
            id: 'c7',
            prompt: 'Which gender is correct for the European Central Bank?',
            options: ['la BCE', 'le BCE', 'un BCE', 'l’BCE'],
            answer: 'la BCE',
            lesson: 'fr-c21-acronyms',
          },
          {
            id: 'c8',
            prompt: 'Which verb means “to sit (in an assembly)”?',
            options: ['siéger', 'saisir', 'légiférer', 'amender'],
            answer: 'siéger',
          },
        ],
      },
    ),
  ],
};
