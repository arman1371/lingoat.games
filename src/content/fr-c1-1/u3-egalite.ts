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

const U = 'fr-c1-1-egalite';
const L = 'fr-c11-affixes' as const;

const inegalites = vocabList(U, 'Inequality and discrimination', [
  ['l’égalité des chances', 'equal opportunities', '⚖️'],
  ['une inégalité', 'an inequality', '📉'],
  ['une discrimination', 'discrimination', '🚫'],
  ['un préjugé', 'a prejudice', '💭'],
  ['un stéréotype', 'a stereotype', '🎭'],
  ['le racisme', 'racism', '✋'],
  ['le sexisme', 'sexism', '♀️'],
  ['la parité', 'gender parity', '👫'],
  ['un plafond de verre', 'a glass ceiling', '🪟'],
  ['l’écart salarial', 'the pay gap', '💶'],
  ['la précarité', 'insecurity, hardship', '🏚️'],
  ['l’exclusion', 'exclusion', '⛔'],
  ['un handicap', 'a disability', '♿'],
  ['l’accessibilité', 'accessibility', '🚪'],
  ['une minorité', 'a minority', '🔹'],
  ['le harcèlement', 'harassment, bullying', '😠'],
]);

const inclusion = vocabList(U, 'Inclusion and diversity', [
  ['l’intégration', 'integration', '🧩'],
  ['le vivre-ensemble', 'living together, social harmony', '🏘️'],
  ['la tolérance', 'tolerance', '🕊️'],
  ['la bienveillance', 'kindness, goodwill', '💛'],
  ['la mixité', 'social or gender mix', '🔀'],
  ['la diversité', 'diversity', '🌈'],
  ['le métissage', 'cultural mixing', '🌍'],
  ['le communautarisme', 'communitarianism (withdrawal into groups)', '🚧'],
  ['dénoncer', 'to denounce, to call out', '📢'],
  ['lutter contre', 'to fight against', '🥊'],
  ['accueillir', 'to welcome', '🤗'],
  ['stigmatiser', 'to stigmatise', '🏷️'],
  ['marginaliser', 'to marginalise', '↘️'],
  ['inclusif', 'inclusive', '🫶'],
  ['valoriser', 'to value, to promote', '🏅'],
  ['l’égalité femmes-hommes', 'equality between women and men', '⚧️'],
]);

const vocab = [...inegalites, ...inclusion];

export const egalite: UnitContent = {
  unit: unitFr({
    id: U,
    order: 3,
    title: 'Égalité et diversité',
    subtitle: 'Discrimination, inclusion and the word families that help you read them',
    emoji: '🌈',
    goals: [
      'Describe inequalities and discrimination, and name what fights them',
      'Talk about integration, diversity and living together',
      'Build and understand words from prefixes and suffixes: injuste, illégal, égalité, marginaliser',
    ],
    grammar: [
      'Negative and opposite prefixes: in- (im-, il-, ir-), dé(s)-, mé-, anti-',
      'Noun suffixes: -ité, -tion / -ation, -isme, -ment, -ance',
      'Adjective and verb suffixes: -able / -ible, -if, -iser',
    ],
    vocabFields: ['Inequality and discrimination', 'Inclusion and diversity'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-inegalites',
      'flashcards',
      meta(
        'Inequality and discrimination',
        'Un préjugé, un plafond de verre, l’écart salarial – the words of inequality.',
        ['vocabulary', 'relationships-diversity'],
        1,
        4,
      ),
      flashcards(inegalites),
    ),

    activity(
      U,
      'flash-inclusion',
      'flashcards',
      meta(
        'Inclusion and diversity',
        'Le vivre-ensemble, la mixité, accueillir – the words of inclusion.',
        ['vocabulary', 'relationships-diversity'],
        1,
        4,
      ),
      flashcards(inclusion),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'relationships-diversity'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'un préjugé',
          'un plafond de verre',
          'l’écart salarial',
          'la parité',
          'le vivre-ensemble',
          'le communautarisme',
          'stigmatiser',
          'valoriser',
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
        ['vocabulary', 'relationships-diversity'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'un préjugé', b: 'une opinion qu’on a avant de connaître' },
          { id: 'm2', a: 'la parité', b: 'une représentation égale des femmes et des hommes' },
          { id: 'm3', a: 'l’écart salarial', b: 'la différence de salaire entre deux groupes' },
          { id: 'm4', a: 'la tolérance', b: 'l’acceptation de ce qui est différent' },
          { id: 'm5', a: 'l’exclusion', b: 'le fait de mettre quelqu’un à l’écart' },
          { id: 'm6', a: 'le harcèlement', b: 'des attaques répétées contre une personne' },
          { id: 'm7', a: 'accueillir', b: 'recevoir quelqu’un avec bienveillance' },
          { id: 'm8', a: 'l’accessibilité', b: 'la possibilité pour tous d’accéder à un lieu' },
        ],
      },
    ),

    activity(
      U,
      'listen-egalite',
      'listen',
      meta(
        'Listen to the report',
        'Listen to the sentence and pick what it says.',
        ['listening', 'relationships-diversity'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'L’écart salarial entre les femmes et les hommes reste important.',
            'The pay gap between women and men is still large.',
            [
              'The gap between rich and poor has disappeared.',
              'Women now earn more than men in every sector.',
              'The pay gap between regions is growing.',
            ],
          ),
          heard(
            'l2',
            'Beaucoup de jeunes se heurtent à un plafond de verre.',
            'Many young people run into a glass ceiling.',
            [
              'Many young people are looking for a better apartment.',
              'Many young people refuse any kind of promotion.',
              'Many young people are breaking the windows of the school.',
            ],
          ),
          heard(
            'l3',
            'L’association dénonce les préjugés et lutte contre le racisme.',
            'The association calls out prejudice and fights racism.',
            [
              'The association is welcoming newcomers and helping them integrate.',
              'The association is collecting donations for a stereotype study.',
              'The association has been denounced for discrimination.',
            ],
          ),
          heard(
            'l4',
            'Cette école accueille tous les élèves, y compris ceux qui ont un handicap.',
            'This school welcomes all pupils, including those with a disability.',
            [
              'This school excludes pupils who have a disability.',
              'This school welcomes only pupils from the neighbourhood.',
              'This school is building a new accessible library.',
            ],
          ),
          heard(
            'l5',
            'La mixité sociale favorise le vivre-ensemble.',
            'Social mix encourages living together.',
            [
              'Social mix prevents integration.',
              'Gender parity improves the pay gap.',
              'Tolerance reduces the risk of poverty.',
            ],
          ),
          heard(
            'l6',
            'Il faut éviter de stigmatiser ceux qui vivent dans la précarité.',
            'We must avoid stigmatising those who live in hardship.',
            [
              'We must help people who are looking for work.',
              'We must welcome those who live abroad.',
              'We must value those who have a disability.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-affixes',
      'sortit',
      meta(
        'What do the affixes do?',
        'Sort the words by the prefix or suffix that makes them.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'What does the affix do?',
        buckets: [
          { id: 'opposite', label: 'Prefix: the opposite', emoji: '↔️' },
          { id: 'noun', label: 'Suffix: makes a noun', emoji: '🧱' },
          { id: 'other', label: 'Suffix: makes an adjective or a verb', emoji: '🔧' },
        ],
        items: cards('a', [
          ['injuste', 'opposite', 'unfair (in- + juste)'],
          ['impossible', 'opposite', 'impossible (im- before p)'],
          ['illégal', 'opposite', 'illegal (il- before l)'],
          ['irréel', 'opposite', 'unreal (ir- before r)'],
          ['désavantage', 'opposite', 'disadvantage (dés- + avantage)'],
          ['égalité', 'noun', 'equality (égal + -ité)'],
          ['racisme', 'noun', 'racism (race + -isme)'],
          ['discrimination', 'noun', 'discrimination (discriminer + -ation)'],
          ['traitement', 'noun', 'treatment (traiter + -ment)'],
          ['tolérance', 'noun', 'tolerance (tolérer + -ance)'],
          ['acceptable', 'other', 'acceptable (accepter + -able)'],
          ['inclusif', 'other', 'inclusive (not a negative: in- is part of the root; -if)'],
          ['marginaliser', 'other', 'to marginalise (marginal + -iser)'],
          ['égaliser', 'other', 'to equalise (égal + -iser)'],
        ]),
      },
    ),

    activity(
      U,
      'sort-gender',
      'sortit',
      meta(
        'Le or la? The suffix tells you',
        'Many endings are always masculine or always feminine. Sort the nouns.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'Is the noun masculine (le) or feminine (la)?',
        buckets: [
          { id: 'm', label: 'Masculine: le', emoji: '🔵' },
          { id: 'f', label: 'Feminine: la', emoji: '🔴' },
        ],
        items: cards('g', [
          ['égalité', 'f', 'equality (-ité is feminine)'],
          ['discrimination', 'f', 'discrimination (-tion is feminine)'],
          ['tolérance', 'f', 'tolerance (-ance is feminine)'],
          ['diversité', 'f', 'diversity (-ité is feminine)'],
          ['mixité', 'f', 'social mix (-ité is feminine)'],
          ['bienveillance', 'f', 'kindness (-ance is feminine)'],
          ['racisme', 'm', 'racism (-isme is masculine)'],
          ['sexisme', 'm', 'sexism (-isme is masculine)'],
          ['communautarisme', 'm', 'communitarianism (-isme is masculine)'],
          ['traitement', 'm', 'treatment (-ment is masculine)'],
          ['harcèlement', 'm', 'harassment (-ment is masculine)'],
          ['métissage', 'm', 'cultural mixing (-age is masculine)'],
        ]),
      },
    ),

    activity(
      U,
      'gap-affixes',
      'gapfill',
      meta(
        'Build the word',
        'Pick the word that has the right prefix or suffix.',
        ['grammar', L, 'relationships-diversity'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'Le contraire de « légal » est ___.',
            'illégal',
            {
              inlégal: 'Before l, in- becomes il-.',
              délégal: 'Dé- does not make the opposite of légal.',
              antilégal: 'Anti- means “against” and this word does not exist.',
            },
            'The opposite of “legal” is “illegal”.',
            'In- becomes il- before l.',
          ),
          gh(
            'g2',
            'Le contraire de « possible » est ___.',
            'impossible',
            {
              inpossible: 'Before p, in- becomes im-.',
              dépossible: 'Dé- does not make the opposite of possible.',
              mépossible: 'Mé- does not combine with possible.',
            },
            'The opposite of “possible” is “impossible”.',
            'In- becomes im- before b, m and p.',
          ),
          gh(
            'g3',
            'Le contraire de « réel » est ___.',
            'irréel',
            {
              inréel: 'Before r, in- becomes ir-.',
              imréel: 'Im- is used before b, m and p only.',
              déréel: 'Dé- does not make the opposite of réel.',
            },
            'The opposite of “real” is “unreal”.',
            'In- becomes ir- before r.',
          ),
          gh(
            'g4',
            'Le nom qui correspond à l’adjectif « égal » est ___.',
            'l’égalité',
            {
              'l’égalisme': 'The suffix -isme names a doctrine or an attitude, not a quality.',
              'l’égalation': 'There is no such word: from égal we form égalité.',
              'l’également': 'Également is an adverb.',
            },
            'The noun of the adjective “égal” is “égalité”.',
            'The suffix -ité turns an adjective into a feminine noun of quality.',
          ),
          gh(
            'g5',
            'Le nom qui correspond au verbe « discriminer » est ___.',
            'la discrimination',
            {
              'le discriminement': 'The suffix -ment is not used for this verb.',
              'la discriminité': 'The suffix -ité forms nouns from adjectives, not from verbs.',
              'le discriminisme': 'The suffix -isme names a doctrine.',
            },
            'The noun of the verb “discriminer” is “discrimination”.',
            'Verbs in -er often give nouns in -ation.',
          ),
          gh(
            'g6',
            'Une association qui lutte contre le racisme est ___.',
            'antiraciste',
            {
              surraciste: 'Sur- means “over, above”, not “against”.',
              sousraciste: 'Sous- means “under”, and this word does not exist.',
              pluriraciste: 'Pluri- means “several”, not “against”.',
            },
            'An association that fights racism is anti-racist.',
            'Anti- means “against”.',
          ),
          gh(
            'g7',
            'Cet emploi est ___ : le salaire est trop bas pour le travail demandé.',
            'sous-payé',
            {
              surpayé: 'Sur- means “too much”: surpayé would mean overpaid.',
              dépayé: 'Dépayé means out of place in an unfamiliar setting.',
              antipayé: 'This word does not exist.',
            },
            'This job is underpaid: the salary is too low for the work required.',
            'Sous- means “under”; sur- means “over”.',
          ),
          gh(
            'g8',
            'Un comportement qu’on peut accepter est ___.',
            'acceptable',
            {
              acceptisme: 'The suffix -isme names a doctrine, not a quality.',
              acceptance: 'There is no such word. The noun is acceptation.',
              acceptif: 'There is no such word; the suffix -able means “can be …ed”.',
            },
            'A behaviour that one can accept is acceptable.',
            'The suffix -able means “that can be …ed”.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-typed',
      'gapfill',
      meta(
        'Write the derived word',
        'Type the word that comes from the word in brackets.',
        ['grammar', L, 'relationships-diversity'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Ce choix est ___ (≠ juste) envers les plus jeunes.',
            'injuste',
            'This choice is unfair to the youngest.',
            'In- + juste.',
          ),
          typed(
            't2',
            'Son comportement est ___ (≠ acceptable).',
            'inacceptable',
            'His behaviour is unacceptable.',
            'In- + acceptable.',
          ),
          typed(
            't3',
            'Sa ___ (tolérant) est connue de tous.',
            'tolérance',
            'His tolerance is known to everyone.',
            'The noun of tolérant ends in -ance.',
          ),
          typed(
            't4',
            'Il lutte contre le ___ (sexiste).',
            'sexisme',
            'He fights against sexism.',
            'The noun is formed with -isme.',
          ),
          typed(
            't5',
            'Il faut ___ (égal) les salaires.',
            'égaliser',
            'Salaries must be equalised.',
            'The verb is formed with -iser.',
          ),
          typed(
            't6',
            'Ces habitants se sentent ___ (marge) par la ville.',
            'marginalisés',
            'These residents feel marginalised by the city.',
            'The verb marginaliser; the participle agrees with the plural subject.',
            ['marginalisées'],
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
        'Put the words in order. Watch the derived words.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'Discrimination is illegal and unacceptable.',
            ['La', 'discrimination', 'est', 'illégale', 'et', 'inacceptable.'],
            { extra: ['illégal'] },
          ),
          sent('b2', 'The pay gap between women and men remains large.', [
            'L’écart',
            'salarial',
            'entre',
            'les',
            'femmes',
            'et',
            'les',
            'hommes',
            'reste',
            'important.',
          ]),
          sent('b3', 'We must fight against stereotypes and prejudice.', [
            'Il',
            'faut',
            'lutter',
            'contre',
            'les',
            'stéréotypes',
            'et',
            'les',
            'préjugés.',
          ]),
          sent(
            'b4',
            'The school wants to welcome every child.',
            ['L’école', 'veut', 'accueillir', 'chaque', 'enfant.'],
            { extra: ['exclure'] },
          ),
          sent('b5', 'Equal opportunities are not guaranteed for everyone.', [
            'L’égalité',
            'des',
            'chances',
            'n’est',
            'pas',
            'garantie',
            'pour',
            'tous.',
          ]),
          sent('b6', 'Social mix helps people live together.', [
            'La',
            'mixité',
            'sociale',
            'favorise',
            'le',
            'vivre-ensemble.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Talking about fairness',
        'Two conversations: the pay gap at work and a prejudice among friends.',
        ['communication', 'relationships-diversity'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'salary',
            title: 'The pay gap',
            emoji: '💶',
            setting:
              'A colleague tells you she earns less than a male colleague with the same job.',
            turns: [
              say(
                'Inès',
                'J’ai découvert que Paul gagne plus que moi, alors que nous faisons le même travail.',
                'I found out that Paul earns more than me, even though we do the same job.',
              ),
              you(
                'C’est inacceptable. Tu devrais en parler aux ressources humaines.',
                [
                  'C’est normal, les hommes travaillent plus.',
                  'That is a sexist prejudice, and it does not help her.',
                ],
                [
                  'Tu es sûre que c’est illégal ?',
                  'Pay discrimination is illegal, so the question does not help.',
                ],
              ),
              say(
                'Inès',
                'Oui. Mais j’ai peur d’être marginalisée si je proteste.',
                'Yes. But I am afraid of being marginalised if I protest.',
              ),
              you(
                'Je comprends, mais l’égalité salariale est un droit. Je peux t’accompagner.',
                [
                  'Alors n’en parle pas, c’est plus simple.',
                  'That accepts the injustice instead of fighting it.',
                ],
                ['Les femmes sont toujours trop sensibles.', 'This is a stereotype.'],
              ),
            ],
          },
          {
            id: 'prejudice',
            title: 'A prejudice among friends',
            emoji: '💬',
            setting: 'A friend says something stereotyped about the new neighbours.',
            turns: [
              say(
                'Paul',
                'Les nouveaux voisins viennent d’ailleurs, ils ne s’intégreront jamais.',
                'The new neighbours come from elsewhere; they will never integrate.',
              ),
              you(
                'Tu ne les connais pas : c’est un préjugé. Pourquoi ne pas les accueillir ?',
                [
                  'Tu as raison, ils sont différents.',
                  'That agrees with the prejudice instead of questioning it.',
                ],
                [
                  'Je ne dis rien, ça ne me regarde pas.',
                  'Staying silent leaves the prejudice unchallenged.',
                ],
              ),
              say(
                'Paul',
                'Bon, d’accord. Que proposes-tu ?',
                'OK, all right. What do you suggest?',
              ),
              you(
                'Invitons-les à prendre un café. Le vivre-ensemble commence par la bienveillance.',
                ['Appelons la police.', 'That is not a proportionate or welcoming response.'],
                [
                  'Évitons-les pour ne pas stigmatiser.',
                  'Avoiding them is itself a form of exclusion.',
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
        'Affix blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'relationships-diversity'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Before “l”, the prefix in- becomes il-.', true),
          tf('b2', 'Before “p”, the prefix in- becomes in-.', false, 'It becomes im-: impossible.'),
          tf('b3', 'The suffix -ité forms feminine nouns.', true),
          tf(
            'b4',
            'The suffix -isme forms feminine nouns.',
            false,
            'Nouns in -isme are masculine.',
          ),
          tf('b5', '“Anti-” means “for”.', false, 'Anti- means “against”.'),
          tf('b6', 'The suffix -able means “that can be …ed”.', true),
          tf('b7', '“Marginaliser” is formed with the suffix -iser.', true),
          tf('b8', '“Un préjugé” is an opinion formed before knowing the facts.', true),
          tf('b9', '“La parité” means equal representation of women and men.', true),
          tf('b10', '“Le harcèlement” is a kind of reward.', false, 'It is repeated attacks.'),
          tf('b11', 'Nouns in -tion are masculine.', false, 'Nouns in -tion are feminine.'),
          tf('b12', '“Sous-payé” means paid too much.', false, 'Sous- means under: underpaid.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: equality words and word families.',
        ['vocabulary', 'grammar', L, 'relationships-diversity'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “un plafond de verre”?', 'a glass ceiling', [
            'a window',
            'a salary cap',
            'a stereotype',
          ]),
          qh(
            'c2',
            'Le contraire de « lisible » est ___.',
            'illisible',
            {
              inlisible: 'Before l, in- becomes il-.',
              délisible: 'Dé- does not make the opposite of lisible.',
              antilisible: 'This word does not exist.',
            },
            L,
          ),
          q('c3', '“La mixité” means …', 'a mix of different groups', [
            'a mixture of food',
            'a lack of equality',
            'a type of discrimination',
          ]),
          qh(
            'c4',
            'Le nom de « divers » est ___.',
            'la diversité',
            {
              'le diversisme': 'The suffix -isme names a doctrine.',
              'la diversation': 'There is no such word.',
              'le diversement': 'Diversement is an adverb.',
            },
            L,
          ),
          q('c5', 'Which word is formed with -iser?', 'marginaliser', [
            'racisme',
            'tolérance',
            'inégalité',
          ]),
          qh(
            'c6',
            'Le contraire de « régulier » est ___.',
            'irrégulier',
            {
              inrégulier: 'Before r, in- becomes ir-.',
              imrégulier: 'Im- is used before b, m and p only.',
              antirégulier: 'This word does not exist.',
            },
            L,
          ),
          q('c7', 'Which noun is masculine?', 'le racisme', [
            'la tolérance',
            'la discrimination',
            'l’égalité',
          ]),
          q('c8', '“Dénoncer” means …', 'to call out publicly', [
            'to ignore quietly',
            'to welcome',
            'to compare',
          ]),
          qh(
            'c9',
            'Une règle qu’on peut appliquer est ___.',
            'applicable',
            {
              applicisme: 'The suffix -isme names a doctrine.',
              applicité: 'The suffix -ité forms nouns, not adjectives.',
              applicion: 'There is no such word.',
            },
            L,
          ),
          q('c10', 'What does “le vivre-ensemble” refer to?', 'living together in harmony', [
            'a type of housing',
            'a sharing of salaries',
            'a form of voting',
          ]),
        ],
      },
    ),
  ],
};
