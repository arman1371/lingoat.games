import { vocabList } from '../builders';
import {
  activity,
  cards,
  g,
  meta,
  q,
  qs,
  say,
  sent,
  tf,
  unitFr,
  vocabGames,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b2-1-migrations';

const people = vocabList(U, 'Migration and exile', [
  ['la migration', 'migration', '🧳'],
  ['un migrant', 'a migrant', '🚶'],
  ['un exil', 'an exile', '🛤️'],
  ['un réfugié', 'a refugee', '🏕️'],
  ['un demandeur d’asile', 'an asylum seeker', '📄'],
  ['un passeur', 'a smuggler, ferryman', '🚤'],
  ['une frontière', 'a border', '🛂'],
  ['un sans-papiers', 'an undocumented person', '📭'],
  ['l’intégration', 'integration', '🧩'],
  ['le regroupement familial', 'family reunification', '👨‍👩‍👧'],
  ['un expatrié', 'an expatriate', '✈️'],
  ['le mal du pays', 'homesickness', '🏠'],
  ['le titre de séjour', 'residence permit', '🪪'],
  ['la naturalisation', 'naturalisation', '🇫🇷'],
]);

const reasons = vocabList(U, 'Reasons for leaving', [
  ['la guerre', 'war', '💣'],
  ['la misère', 'poverty, destitution', '🥣'],
  ['le chômage', 'unemployment', '📉'],
  ['un exode', 'an exodus', '🚸'],
  ['le déracinement', 'uprooting', '🌱'],
  ['la persécution', 'persecution', '⛓️'],
  ['un conflit', 'a conflict', '⚔️'],
  ['la sécheresse', 'drought', '🏜️'],
  ['la fuite des cerveaux', 'brain drain', '🧠'],
  ['une bourse', 'a grant, scholarship', '🎓'],
  ['la discrimination', 'discrimination', '🚷'],
  ['la xénophobie', 'xenophobia', '😠'],
]);

const phrases = vocabList(U, 'Explaining why', [
  [
    'Elle est partie parce qu’elle ne trouvait pas de travail.',
    'She left because she could not find work.',
    '💼',
  ],
  ['Puisque tu connais la ville, guide-nous.', 'Since you know the city, guide us.', '🧭'],
  [
    'Comme il n’avait pas de papiers, il ne pouvait pas travailler.',
    'As he had no papers, he could not work.',
    '📄',
  ],
  ['Ils ont fui à cause de la guerre.', 'They fled because of the war.', '🏃'],
  [
    'Grâce à une association, il a obtenu un titre de séjour.',
    'Thanks to an association, he got a residence permit.',
    '🤝',
  ],
  ['Faute de moyens, elle n’a pas pu partir.', 'For lack of means, she could not leave.', '💸'],
  [
    'À force de persévérer, il a obtenu la nationalité.',
    'By dint of persevering, he obtained nationality.',
    '🏅',
  ],
  [
    'J’ai le mal du pays, d’autant que ma famille me manque.',
    'I am homesick, all the more since I miss my family.',
    '💔',
  ],
]);

const vocab = [...people, ...reasons, ...phrases];

const KIND: [string, 'conj' | 'prep', string][] = [
  ['Il est parti parce qu’il avait peur.', 'conj', 'He left because he was afraid.'],
  ['Il est parti à cause de la guerre.', 'prep', 'He left because of the war.'],
  ['Comme il n’avait pas de papiers, il a attendu.', 'conj', 'As he had no papers, he waited.'],
  ['Grâce à son frère, il a trouvé un toit.', 'prep', 'Thanks to his brother, he found a roof.'],
  ['Puisque tu es là, aide-moi.', 'conj', 'Since you are here, help me.'],
  ['En raison du chômage, beaucoup émigrent.', 'prep', 'Because of unemployment, many emigrate.'],
  ['Étant donné qu’il pleut, restons ici.', 'conj', 'Given that it is raining, let us stay here.'],
  ['Faute d’argent, elle est restée.', 'prep', 'For lack of money, she stayed.'],
  [
    'Elle pleurait, car elle avait le mal du pays.',
    'conj',
    'She was crying, for she was homesick.',
  ],
  ['À force de travailler, il a réussi.', 'prep', 'By dint of working, he succeeded.'],
  [
    'Du fait que la frontière est fermée, ils attendent.',
    'conj',
    'Because the border is closed, they wait.',
  ],
  ['Il a été expulsé en raison de son retard.', 'prep', 'He was expelled because of his delay.'],
];

export const migrations: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'Migrations',
    subtitle: 'Talk about leaving, arriving and welcoming, and explain why with cause connectors',
    emoji: '🧳',
    goals: [
      'Talk about migration, exile and integration',
      'Explain the reasons for a departure',
      'Choose between parce que, puisque, comme, car and à cause de, grâce à, faute de',
    ],
    grammar: ['Cause with a conjunction', 'Cause with a preposition'],
    vocabFields: ['Migration and exile', 'Reasons for leaving', 'Explaining why'],
  }),
  vocab,
  activities: [
    ...vocabGames(U, 'migration', {
      a: {
        title: 'Migration and exile',
        description: 'People and situations of migration.',
        words: people,
      },
      b: { title: 'Reasons for leaving', description: 'Why people move.', words: reasons },
      listen: [
        'un réfugié',
        'une frontière',
        'l’intégration',
        'le mal du pays',
        'la guerre',
        'le chômage',
        'la sécheresse',
        'la discrimination',
      ],
      spell: [
        ['unscramble', 'frontière', 'border', '🛂', 'une frontière'],
        ['unscramble', 'réfugié', 'refugee', '🏕️', 'un réfugié'],
        ['type', 'intégration', 'integration', '🧩', 'l’intégration'],
        ['type', 'chômage', 'unemployment', '📉', 'le chômage'],
        ['type', 'misère', 'poverty', '🥣', 'la misère'],
      ],
    }),

    activity(
      U,
      'gap-conj',
      'gapfill',
      meta(
        'Because…',
        'Parce que, puisque, comme, car, étant donné que.',
        ['grammar', 'fr-cause-conjunctions', 'migration'],
        2,
        4,
        'fr-cause-conjunctions',
      ),
      {
        items: [
          g(
            'c1',
            'Elle est partie ___ elle ne trouvait pas de travail.',
            'parce qu’',
            [
              ['à cause de', 'À cause de is followed by a noun, not a verb.'],
              [
                'puisqu’',
                'Puisque gives a reason that the listener already knows; here it is new.',
              ],
              ['comme', 'Comme introduces a reason at the start of the sentence.'],
            ],
            'She left because she could not find work.',
            'Parce que gives a new reason.',
          ),
          g(
            'c2',
            '___ tu connais bien la ville, tu peux nous guider.',
            'Puisque',
            [
              ['Parce que', 'The reason is known to both: puisque.'],
              ['Car', 'Car never starts a sentence.'],
              ['À cause de', 'À cause de is followed by a noun.'],
            ],
            'Since you know the city well, you can guide us.',
            'Puisque: a reason both people know.',
          ),
          g(
            'c3',
            '___ il n’avait pas de papiers, il ne pouvait pas travailler.',
            'Comme',
            [
              ['Car', 'Car never starts a sentence.'],
              ['Donc', 'Donc introduces a result, not a reason.'],
              ['Grâce à', 'Grâce à is followed by a noun.'],
            ],
            'As he had no papers, he could not work.',
            'Comme at the start of a sentence gives the reason.',
          ),
          g(
            'c4',
            'Elle est restée, ___ son fils était malade.',
            'car',
            [
              ['comme', 'Comme goes at the start of the sentence.'],
              ['à cause de', 'À cause de is followed by a noun.'],
              ['donc', 'Donc introduces a result.'],
            ],
            'She stayed, for her son was ill.',
            'Car follows a comma and adds a reason.',
          ),
          g(
            'c5',
            '___ le consulat est fermé, il faut revenir demain.',
            'Étant donné que',
            [
              ['Afin que', 'Afin que expresses a purpose.'],
              ['Bien que', 'Bien que expresses concession.'],
              ['Alors que', 'Alors que expresses opposition.'],
            ],
            'Given that the consulate is closed, you must come back tomorrow.',
            'Étant donné que, vu que, du fait que: a reason, with the indicative.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-prep',
      'gapfill',
      meta(
        'Because of, thanks to',
        'À cause de, grâce à, en raison de, faute de, à force de.',
        ['grammar', 'fr-cause-prepositions', 'migration'],
        3,
        4,
        'fr-cause-prepositions',
      ),
      {
        items: [
          g(
            'p1',
            'Il a pu obtenir un visa ___ l’aide d’une association.',
            'grâce à',
            [
              ['à cause de', 'À cause de suggests a negative cause.'],
              ['parce que', 'Parce que is followed by a verb.'],
              ['puisque', 'Puisque is followed by a verb.'],
            ],
            'He was able to get a visa thanks to an association’s help.',
            'Grâce à: a positive cause.',
          ),
          g(
            'p2',
            'Ils ont fui ___ la guerre.',
            'à cause de',
            [
              ['grâce à', 'Grâce à is positive; war is not.'],
              ['parce que', 'Parce que is followed by a verb.'],
              ['car', 'Car is followed by a verb.'],
            ],
            'They fled because of the war.',
            'À cause de: a negative or neutral cause.',
          ),
          g(
            'p3',
            'Il n’a pas pu partir ___ visa.',
            'faute de',
            [
              ['grâce à', 'Grâce à would mean he had a visa.'],
              ['parce que', 'Parce que is followed by a verb.'],
              ['puisque', 'Puisque is followed by a verb.'],
            ],
            'He could not leave for lack of a visa.',
            'Faute de + noun = for lack of.',
          ),
          g(
            'p4',
            'Il a été expulsé ___ son retard de paiement.',
            'en raison de',
            [
              ['puisque', 'Puisque is followed by a verb.'],
              ['car', 'Car is followed by a verb.'],
              ['grâce à', 'Grâce à is positive; an expulsion is not.'],
            ],
            'He was expelled because of his late payment.',
            'En raison de: formal, neutral.',
          ),
          g(
            'p5',
            'À ___ de chercher, il a fini par trouver un travail.',
            'force',
            [
              ['faute', 'Faute de means “for lack of”.'],
              ['cause', 'À cause de does not take an infinitive here.'],
              ['raison', 'En raison de is a different expression.'],
            ],
            'By dint of searching, he finally found a job.',
            'À force de + infinitive: by dint of.',
          ),
          g(
            'p6',
            '___ de temps, il n’a pas pu terminer son dossier.',
            'Faute',
            [
              ['Grâce', 'Grâce à would mean he had time.'],
              ['Parce', 'Parce que is followed by a verb.'],
              ['Puisque', 'Puisque is followed by a verb.'],
            ],
            'For lack of time, he could not finish his file.',
            'Faute de + noun.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-kind',
      'sortit',
      meta(
        'Verb or noun?',
        'After the connector, is there a clause or a noun?',
        ['grammar', 'fr-cause-conjunctions', 'fr-cause-prepositions', 'migration'],
        2,
        4,
        'fr-cause-conjunctions',
      ),
      {
        instruction:
          'Is the cause introduced by a conjunction (+ clause) or a preposition (+ noun)?',
        buckets: [
          { id: 'conj', label: 'conjunction + clause', emoji: '🧱' },
          { id: 'prep', label: 'preposition + noun', emoji: '🏷️' },
        ],
        items: cards('k', KIND),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'fr-cause-conjunctions', 'fr-cause-prepositions'],
        2,
        4,
      ),
      {
        items: [
          sent(
            's1',
            'They left because of the war.',
            ['Ils', 'sont', 'partis', 'à', 'cause', 'de', 'la', 'guerre.'],
            { extra: ['parce'], lesson: 'fr-cause-prepositions' },
          ),
          sent(
            's2',
            'As he had no papers, he could not work.',
            [
              'Comme',
              'il',
              'n’avait',
              'pas',
              'de',
              'papiers,',
              'il',
              'ne',
              'pouvait',
              'pas',
              'travailler.',
            ],
            { extra: ['Car'], lesson: 'fr-cause-conjunctions' },
          ),
          sent(
            's3',
            'Thanks to this association, he found housing.',
            ['Grâce', 'à', 'cette', 'association,', 'il', 'a', 'trouvé', 'un', 'logement.'],
            { extra: ['cause'], lesson: 'fr-cause-prepositions' },
          ),
          sent('s4', 'Since you are here, help me.', ['Puisque', 'tu', 'es', 'là,', 'aide-moi.'], {
            extra: ['Parce'],
            lesson: 'fr-cause-conjunctions',
          }),
          sent(
            's5',
            'She stayed for lack of money.',
            ['Elle', 'est', 'restée', 'faute', 'd’argent.'],
            { extra: ['grâce'], lesson: 'fr-cause-prepositions' },
          ),
        ],
      },
    ),

    activity(
      U,
      'quiz-text',
      'quiz',
      meta(
        'Understand the reasons',
        'Read the sentence and pick its meaning.',
        ['communication', 'migration'],
        2,
        3,
      ),
      {
        questions: [
          qs(
            'r1',
            'Il a quitté son pays à cause de la persécution.',
            'He left his country because of persecution.',
            [
              'He left his country thanks to persecution.',
              'He persecuted his country.',
              'He will leave because of the law.',
            ],
          ),
          qs(
            'r2',
            'Grâce au regroupement familial, elle a retrouvé son mari.',
            'Thanks to family reunification, she found her husband again.',
            [
              'She lost her husband because of reunification.',
              'Her husband refused the reunification.',
              'She regrouped her family in secret.',
            ],
          ),
          qs(
            'r3',
            'Faute de papiers, ils sont restés à la frontière.',
            'For lack of papers, they stayed at the border.',
            [
              'With their papers, they crossed the border.',
              'They forgot the papers at home.',
              'The border was opened for them.',
            ],
          ),
          qs(
            'r4',
            'Puisque la frontière est fermée, nous devons attendre.',
            'Since the border is closed, we must wait.',
            [
              'Because the border is open, we leave.',
              'The border will close soon.',
              'We closed the border ourselves.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Explain your reasons',
        'Tell why you left, and react to a story.',
        ['communication', 'migration'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'why',
            title: 'Why did you come?',
            emoji: '🧳',
            setting: 'A neighbour asks why you moved to France. Use vous.',
            turns: [
              say(
                'Mme Roux',
                'Pourquoi avez-vous quitté votre pays ?',
                'Why did you leave your country?',
              ),
              you(
                'À cause du chômage, mais aussi parce que j’avais envie de découvrir autre chose.',
                [
                  'À cause du chômage, mais aussi à cause que j’avais envie de découvrir autre chose.',
                  'À cause de is followed by a noun; use parce que before a clause.',
                ],
                [
                  'Grâce au chômage, mais aussi parce que j’avais envie de découvrir autre chose.',
                  'Grâce à is positive; unemployment is not.',
                ],
              ),
              say('Mme Roux', 'Et ça n’a pas été trop difficile ?', 'And it wasn’t too hard?'),
              you(
                'Si, j’avais le mal du pays, d’autant que ma famille me manquait.',
                [
                  'Si, j’avais le mal du pays, car ma famille me manquait tellement hier.',
                  'The sentence mixes tenses: hier does not fit the imparfait.',
                ],
                [
                  'Si, j’avais le mal du pays, grâce à ma famille.',
                  'Grâce à would mean the family caused the homesickness in a good way.',
                ],
              ),
            ],
          },
          {
            id: 'office',
            title: 'At the prefecture',
            emoji: '🏛️',
            setting: 'At the office, you explain a delay in your file. Use vous.',
            turns: [
              say('L’agent', 'Votre dossier est incomplet.', 'Your file is incomplete.'),
              you(
                'Je suis désolé, faute de temps, je n’ai pas pu tout rassembler.',
                [
                  'Je suis désolé, grâce au temps, je n’ai pas pu tout rassembler.',
                  'Grâce à would mean you had time.',
                ],
                [
                  'Je suis désolé, parce de temps, je n’ai pas pu tout rassembler.',
                  'Parce que needs a verb: faute de temps.',
                ],
              ),
              say(
                'L’agent',
                'Il vous manque le titre de séjour.',
                'You are missing the residence permit.',
              ),
              you(
                'Comme il a été perdu, j’ai fait une demande de duplicata.',
                [
                  'Car il a été perdu, j’ai fait une demande de duplicata.',
                  'Car does not start a sentence: use comme.',
                ],
                [
                  'Comme il a été naturalisé, j’ai fait une demande de duplicata.',
                  'This does not make sense for a document.',
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
        'Cause blitz',
        'True or false? Beat the clock!',
        ['grammar', 'fr-cause-conjunctions', 'fr-cause-prepositions'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', '“À cause de” is followed by a noun.', true),
          tf('b2', '“Grâce à” introduces a positive cause.', true),
          tf(
            'b3',
            '“Car” can start a sentence.',
            false,
            'Car follows a comma and never begins a sentence.',
          ),
          tf('b4', '“Puisque” gives a reason that the listener already knows.', true),
          tf('b5', '“Faute de” means “thanks to”.', false, 'Faute de means for lack of.'),
          tf('b6', '“Parce que” is followed by a verb.', true),
          tf('b7', '“À force de” is followed by an infinitive or a noun.', true),
          tf('b8', '“Un passeur” can be someone who helps people cross a border.', true),
          tf('b9', '“La sécheresse” means “flood”.', false, 'La sécheresse is drought.'),
          tf(
            'b10',
            '“Un sans-papiers” has a residence permit.',
            false,
            'A sans-papiers has no documents.',
          ),
          tf('b11', '“Comme” can introduce a cause at the start of a sentence.', true),
          tf('b12', '“Le déracinement” is the feeling of being uprooted.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Migration challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'migration'],
        3,
        4,
      ),
      {
        questions: [
          q(
            'c1',
            'Complete: “Il a obtenu un emploi ___ son diplôme.”',
            'grâce à',
            ['à cause de', 'parce que', 'faute de'],
            undefined,
            'fr-cause-prepositions',
          ),
          q(
            'c2',
            'Complete: “Ils attendent, ___ la frontière est fermée.”',
            'car',
            ['à cause de', 'grâce à', 'faute de'],
            undefined,
            'fr-cause-conjunctions',
          ),
          q(
            'c3',
            'Complete: “___ d’argent, elle n’a pas voyagé.”',
            'Faute',
            ['Grâce', 'Puisque', 'Car'],
            undefined,
            'fr-cause-prepositions',
          ),
          q(
            'c4',
            'Complete: “___ vous êtes là, signez ici.”',
            'Puisque',
            ['À cause de', 'Faute de', 'Grâce à'],
            undefined,
            'fr-cause-conjunctions',
          ),
          q('c5', 'Which word means “a refugee”?', 'un réfugié', [
            'un passeur',
            'un expatrié',
            'un migrant',
          ]),
          q('c6', 'Which phrase means “homesickness”?', 'le mal du pays', [
            'le titre de séjour',
            'le regroupement familial',
            'la fuite des cerveaux',
          ]),
          q('c7', '“Le chômage” means …', 'unemployment', ['drought', 'a grant', 'war']),
          q('c8', 'Which connector gives a cause that is negative?', 'à cause de', [
            'grâce à',
            'afin de',
            'malgré',
          ]),
        ],
      },
    ),
  ],
};
