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

const U = 'fr-c1-2-solidarite';

const vocab = vocabList(U, 'Solidarité et engagement', [
  ['la solidarité', 'solidarity', '🤝'],
  ['le bénévolat', 'volunteering', '🙋'],
  ['le bénévole', 'volunteer', '🧑‍🤝‍🧑'],
  ['l’association', 'non-profit association', '🏢'],
  ['l’ONG', 'NGO', '🌐'],
  ['le don', 'donation', '🎁'],
  ['le donateur', 'donor', '💝'],
  ['la collecte', 'collection drive', '📦'],
  ['l’aide humanitaire', 'humanitarian aid', '🚑'],
  ['l’urgence', 'emergency', '🚨'],
  ['le sans-abri', 'homeless person', '🛌'],
  ['la précarité', 'insecurity (of income or housing)', '📉'],
  ['la pauvreté', 'poverty', '🪙'],
  ['l’exclusion', 'social exclusion', '🚫'],
  ['l’entraide', 'mutual help', '🫶'],
  ['le partage', 'sharing', '🍰'],
  ['s’engager', 'to commit oneself', '✊'],
  ['l’engagement', 'commitment', '📝'],
  ['le secours', 'rescue, relief', '🛟'],
  ['secourir', 'to come to the aid of', '🆘'],
  ['la banque alimentaire', 'food bank', '🥫'],
  ['la distribution', 'handing out (of food or goods)', '🍞'],
  ['le réfugié', 'refugee', '🧳'],
  ['l’accueil', 'welcome, reception', '🚪'],
  ['accueillir', 'to welcome, to take in', '🏠'],
  ['l’hébergement', 'accommodation, shelter', '🛏️'],
  ['le mécénat', 'corporate sponsorship', '🏛️'],
  ['la cause', 'cause', '🎗️'],
  ['soutenir', 'to support', '💪'],
  ['parrainer', 'to sponsor (a person or project)', '🧑‍🏫'],
  ['la mobilisation', 'mobilisation, rallying', '📣'],
  ['le militant', 'activist', '🪧'],
  ['l’action caritative', 'charitable work', '❤️'],
  ['le tissu associatif', 'network of local associations', '🕸️'],
]);

export const solidarite: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 5,
    title: 'Un monde solidaire',
    subtitle: 'Volunteering and humanitarian action – with modalisation and the subjunctive',
    emoji: '🤝',
    goals: [
      'Talk about charities, volunteering and helping people in need',
      'Say how sure you are with modalisation (certainty, probability, doubt)',
      'Form and use the present subjunctive',
    ],
    grammar: ['Modalisation', 'Subjonctif présent'],
    vocabFields: ['Solidarité et engagement'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-solidarity', vocab, {
      first: 'Helping others',
      firstText: 'Words for associations, giving and volunteering.',
      second: 'Need and welcome',
      secondText: 'Words for precarity, refugees, support and campaigning.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-solidarity'],
      2,
      definitions([
        [
          'Personne qui aide une association sans être payée.',
          'le bénévole',
          ['le donateur', 'le militant', 'le réfugié'],
        ],
        [
          'Organisation indépendante de l’État qui agit dans plusieurs pays.',
          'l’ONG',
          ['l’hébergement', 'la collecte', 'le mécénat'],
        ],
        [
          'Fait de donner de l’argent ou des objets, sans rien recevoir.',
          'le don',
          ['le partage', 'le secours', 'l’accueil'],
        ],
        [
          'Situation de celui qui n’a pas assez d’argent pour vivre.',
          'la pauvreté',
          ['la solidarité', 'la cause', 'l’urgence'],
        ],
        [
          'Aider une personne qui est en danger.',
          'secourir',
          ['parrainer', 'accueillir', 's’engager'],
        ],
        [
          'Lieu où l’on récupère et distribue de la nourriture.',
          'la banque alimentaire',
          ['le tissu associatif', 'l’action caritative', 'la distribution'],
        ],
        [
          'Fait d’être mis à l’écart de la société.',
          'l’exclusion',
          ['la précarité', 'l’entraide', 'l’engagement'],
        ],
        [
          'Personne qui a fui son pays à cause de la guerre.',
          'le réfugié',
          ['le sans-abri', 'le militant', 'le donateur'],
        ],
      ]),
    ),

    act(
      U,
      'sort-modalisation',
      'sortit',
      'How sure is the speaker?',
      'The expression in capitals shows how sure the speaker is.',
      ['grammar', 'fr-c12-modalisation'],
      2,
      {
        instruction: 'Certainty, possibility or doubt?',
        buckets: [
          { id: 'certitude', label: 'certitude', emoji: '✅' },
          { id: 'possibilite', label: 'possibilité', emoji: '🤔' },
          { id: 'doute', label: 'doute', emoji: '❓' },
        ],
        items: [
          ...cards('certitude', [
            [
              'IL EST ÉVIDENT QUE l’aide arrivera à temps.',
              'It is obvious that the help will arrive in time.',
            ],
            [
              'SANS AUCUN DOUTE, ils viendront nous aider.',
              'Without any doubt, they will come to help us.',
            ],
            [
              'ASSURÉMENT, cette cause mérite notre soutien.',
              'Certainly, this cause deserves our support.',
            ],
          ]),
          ...cards('possibilite', [
            ['PEUT-ÊTRE QUE la collecte sera un succès.', 'Perhaps the drive will be a success.'],
            ['IL SE PEUT QUE nous manquions de bénévoles.', 'We may run short of volunteers.'],
            [
              'APPAREMMENT, l’association a trouvé un local.',
              'Apparently, the association has found a venue.',
            ],
          ]),
          ...cards('doute', [
            ['JE DOUTE QUE cela suffise.', 'I doubt that this will be enough.'],
            [
              'IL EST DOUTEUX QUE le gouvernement réagisse.',
              'It is doubtful that the government will react.',
            ],
            ['JE NE SUIS PAS SÛR QUE ce soit possible.', 'I am not sure that this is possible.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-subjonctif',
      'sortit',
      'Indicative or subjunctive?',
      'Decide which mood the verb in capitals needs after the expression before it.',
      ['grammar', 'fr-c12-subjonctif-present'],
      3,
      {
        instruction: 'Which mood follows?',
        buckets: [
          { id: 'indicatif', label: 'indicatif', emoji: '🟢' },
          { id: 'subjonctif', label: 'subjonctif', emoji: '🟣' },
        ],
        items: [
          ...cards('indicatif', [
            ['Je sais qu’elle PEUT nous aider.', 'I know she can help us.'],
            ['Il est certain qu’ils VIENDRONT.', 'It is certain that they will come.'],
            ['Je crois que tout EST prêt.', 'I think everything is ready.'],
            ['Parce qu’il EST fatigué, il rentre.', 'Because he is tired, he is going home.'],
            ['Il est sûr qu’elle A raison.', 'It is sure that she is right.'],
          ]),
          ...cards('subjonctif', [
            ['Il faut que tu VIENNES demain.', 'You must come tomorrow.'],
            ['Je veux qu’elle SOIT heureuse.', 'I want her to be happy.'],
            ['Bien qu’il SOIT fatigué, il reste.', 'Although he is tired, he stays.'],
            ['Je doute qu’elle PUISSE venir.', 'I doubt that she can come.'],
            ['Pour que tout le monde MANGE, on cuisine.', 'So that everyone eats, we cook.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'conj-subjonctif',
      'conjugation',
      'Subjunctive forms',
      'Fill in the present subjunctive – after “que”: que je sois, que tu sois …',
      ['grammar', 'fr-c12-subjonctif-present'],
      3,
      {
        tables: [
          conj(
            'être',
            'to be',
            ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
            'fr-c12-subjonctif-present',
          ),
          conj(
            'avoir',
            'to have',
            ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
            'fr-c12-subjonctif-present',
          ),
          conj(
            'aller',
            'to go',
            ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'],
            'fr-c12-subjonctif-present',
          ),
          conj(
            'faire',
            'to do, to make',
            ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
            'fr-c12-subjonctif-present',
          ),
          conj(
            'pouvoir',
            'to be able to',
            ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'],
            'fr-c12-subjonctif-present',
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-modalisation',
      'gapfill',
      'Show how sure you are',
      'Choose the expression that fits the speaker’s attitude.',
      ['grammar', 'fr-c12-modalisation'],
      3,
      {
        items: [
          gap(
            'm1',
            '___ que cette association a sauvé des milliers de vies : les chiffres le prouvent.',
            'Il est certain',
            ['Il est certain', 'Il se peut', 'Je doute', 'Peut-être'],
            'It is certain that this association has saved thousands of lives: the figures prove it.',
            {
              lesson: 'fr-c12-modalisation',
              explanation:
                'The figures prove it, so the speaker is sure: il est certain que + indicative.',
            },
          ),
          gap(
            'm2',
            '___ que nous manquions de nourriture cet hiver.',
            'Il se peut',
            ['Il se peut', 'Il est évident', 'Il est certain', 'Assurément'],
            'We may run short of food this winter.',
            {
              lesson: 'fr-c12-modalisation',
              explanation: 'Il se peut que expresses a possibility and takes the subjunctive.',
            },
          ),
          gap(
            'm3',
            'Je ___ que le gouvernement augmente l’aide.',
            'doute',
            ['doute', 'sais', 'vois', 'crois'],
            'I doubt that the government will increase the aid.',
            {
              lesson: 'fr-c12-modalisation',
              explanation: 'Douter que shows doubt and is followed by the subjunctive.',
            },
          ),
          gap(
            'm4',
            '___, le centre d’accueil ouvrira lundi, mais rien n’est confirmé.',
            'Apparemment',
            ['Apparemment', 'Certainement', 'Évidemment', 'Sans aucun doute'],
            'Apparently, the reception centre will open on Monday, but nothing is confirmed.',
            {
              lesson: 'fr-c12-modalisation',
              explanation:
                'Apparemment marks information the speaker has heard but cannot confirm.',
              why: {
                Certainement:
                  'The sentence says nothing is confirmed, so it cannot show certainty.',
              },
            },
          ),
          gap(
            'm5',
            'Selon l’ONG, ___ réfugiés seront plus nombreux l’an prochain.',
            'les',
            ['les', 'des', 'ces', 'aux'],
            'According to the NGO, there will be more refugees next year.',
            {
              lesson: 'fr-c12-modalisation',
              explanation:
                'Selon … reports someone else’s claim and keeps the speaker at a distance.',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-subjonctif',
      'gapfill',
      'Which verb form?',
      'Choose the verb in the right mood: indicative or subjunctive.',
      ['grammar', 'fr-c12-subjonctif-present'],
      3,
      {
        items: [
          gap(
            's1',
            'Il faut que nous ___ les sans-abri.',
            'aidions',
            ['aidions', 'aidons', 'aiderons', 'aidâmes'],
            'We must help the homeless.',
            {
              lesson: 'fr-c12-subjonctif-present',
              explanation:
                'Il faut que + subjunctive. For nous the form is like the imparfait: aidions.',
            },
          ),
          gap(
            's2',
            'Je veux qu’elle ___ à la réunion.',
            'vienne',
            ['vienne', 'vient', 'viendra', 'venait'],
            'I want her to come to the meeting.',
            {
              lesson: 'fr-c12-subjonctif-present',
              explanation: 'Vouloir que + subjunctive: venir gives que je vienne, qu’elle vienne.',
            },
          ),
          gap(
            's3',
            'Bien que ce ___ difficile, ils continuent.',
            'soit',
            ['soit', 'est', 'sera', 'sont'],
            'Although it is difficult, they keep going.',
            {
              lesson: 'fr-c12-subjonctif-present',
              explanation: 'Bien que + subjunctive. Être gives que ce soit.',
            },
          ),
          gap(
            's4',
            'Il est important qu’ils ___ du courage.',
            'aient',
            ['aient', 'ont', 'auront', 'eurent'],
            'It is important that they have courage.',
            {
              lesson: 'fr-c12-subjonctif-present',
              explanation: 'Avoir is irregular in the subjunctive: qu’ils aient.',
            },
          ),
          gap(
            's5',
            'Je ne pense pas qu’il ___ venir.',
            'puisse',
            ['puisse', 'peut', 'pourra', 'pouvait'],
            'I do not think he can come.',
            {
              lesson: 'fr-c12-subjonctif-present',
              explanation: 'Penser in the negative expresses doubt: the subjunctive follows.',
            },
          ),
          gap(
            's6',
            'Je crois qu’il ___ venir.',
            'peut',
            ['peut', 'puisse', 'pût', 'pouvoir'],
            'I think he can come.',
            {
              lesson: 'fr-c12-subjonctif-present',
              explanation: 'Croire in the affirmative expresses belief: indicative.',
              why: { puisse: 'After croire que (affirmative) use the indicative: il peut.' },
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
      'Put the words in order – watch the mood after que.',
      ['grammar', 'fr-c12-modalisation', 'fr-c12-subjonctif-present'],
      3,
      {
        items: [
          sent(
            's1',
            'Il faut que nous aidions les réfugiés.',
            'We must help the refugees.',
            'fr-c12-subjonctif-present',
          ),
          sent(
            's2',
            'Bien que la tâche soit difficile, les bénévoles restent motivés.',
            'Although the task is difficult, the volunteers stay motivated.',
            'fr-c12-subjonctif-present',
          ),
          sent(
            's3',
            'Je doute que cette collecte suffise.',
            'I doubt that this drive will be enough.',
            'fr-c12-modalisation',
          ),
          sent(
            's4',
            'Il est évident que la pauvreté touche beaucoup de familles.',
            'It is obvious that poverty affects many families.',
            'fr-c12-modalisation',
          ),
          sent(
            's5',
            'Apparemment, l’association cherche de nouveaux bénévoles.',
            'Apparently, the association is looking for new volunteers.',
            'fr-c12-modalisation',
          ),
          sent(
            's6',
            'Pour que tout le monde mange, nous organisons une distribution.',
            'So that everyone eats, we organise a food handout.',
            'fr-c12-subjonctif-present',
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
      ['spelling', 'fr-c12-solidarity'],
      2,
      {
        items: [
          scrambled('p1', 'bénévole', 'volunteer', '🧑‍🤝‍🧑'),
          scrambled('p2', 'solidarité', 'solidarity', '🤝'),
          typed('p3', 'le réfugié', 'refugee', '🧳'),
          typed('p4', 'l’hébergement', 'accommodation, shelter', '🛏️'),
          dictated('p5', 'la banque alimentaire', 'food bank'),
          dictated('p6', 'l’action caritative', 'charitable work'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'Volunteering conversations',
      'Three conversations: signing up, a doubt and a food drive.',
      ['communication', 'fr-c12-solidarity'],
      3,
      {
        scenes: [
          scene(
            'signup',
            'Signing up',
            '📋',
            'You want to volunteer at a local association.',
            npc(
              'Sophie',
              'Bonjour ! Vous souhaitez devenir bénévole chez nous ?',
              'Hello! Would you like to become a volunteer with us?',
            ),
            you(
              'Oui, j’aimerais m’engager pour une cause utile.',
              [
                'Oui, je veux que vous me donnez du travail.',
                'Vouloir que needs the subjunctive, and the sentence is far too blunt.',
              ],
              ['Peut-être, on verra bien.', 'Too vague: she asked for a clear intention.'],
            ),
            npc(
              'Sophie',
              'Il faut que vous veniez le mardi soir pour la distribution.',
              'You need to come on Tuesday evening for the food handout.',
            ),
            you(
              'Très bien, il se peut que je sois en retard la première fois.',
              [
                'Très bien, il se peut que je suis en retard la première fois.',
                'Il se peut que needs the subjunctive: que je sois.',
              ],
              ['Non, je ne viendrai jamais.', 'That does not fit – you just signed up.'],
            ),
          ),
          scene(
            'doubt',
            'A doubt',
            '🤔',
            'A friend is sure the drive will fail; you are more careful.',
            npc(
              'Hugo',
              'La collecte va échouer, c’est certain.',
              'The drive is going to fail, that is certain.',
            ),
            you(
              'Je ne suis pas sûr que ce soit certain : on a déjà beaucoup de dons.',
              [
                'Je ne suis pas sûr que c’est certain : on a déjà beaucoup de dons.',
                'Je ne suis pas sûr que takes the subjunctive: que ce soit.',
              ],
              [
                'Tu as raison, tout est perdu.',
                'This agrees with him; you wanted to express doubt.',
              ],
            ),
            npc(
              'Hugo',
              'Admettons. Mais il faut que les gens soient informés.',
              'Fine. But people need to be informed.',
            ),
            you(
              'Tout à fait, il est évident que la mobilisation passe par l’information.',
              [
                'Tout à fait, il est douteux que la mobilisation passe par l’information.',
                'Il est douteux que expresses doubt and takes the subjunctive – here you agree.',
              ],
              ['Pas du tout, je m’en fiche.', 'Not at all what a volunteer would say here.'],
            ),
          ),
          scene(
            'drive',
            'A food drive',
            '🥫',
            'At the supermarket, a volunteer asks for donations.',
            npc(
              'Léa',
              'Bonjour, pouvez-vous donner un produit pour la banque alimentaire ?',
              'Hello, can you give a product for the food bank?',
            ),
            you(
              'Bien sûr ! Je voudrais que ce don soit utile.',
              [
                'Bien sûr ! Je voudrais que ce don est utile.',
                'Vouloir que takes the subjunctive: que ce don soit.',
              ],
              [
                'Non merci, j’ai déjà tout donné hier.',
                'Possible, but it does not continue the exchange.',
              ],
            ),
            npc(
              'Léa',
              'Merci ! Nous distribuons les paniers samedi.',
              'Thank you! We hand out the baskets on Saturday.',
            ),
            you(
              'Parfait, je viendrai vous aider.',
              ['Parfait, je viens vous aidais.', 'Wrong tense: je viendrai (future) or je viens.'],
              ['Parfait, je ne sais pas.', 'It does not answer her message.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Solidarity blitz',
      'True or false? Words, certainty and the subjunctive.',
      ['grammar', 'fr-c12-modalisation', 'fr-c12-subjonctif-present'],
      [
        tf('b1', '“Il faut que” is followed by the subjunctive.', true),
        tf(
          'b2',
          '“Je sais que” is followed by the subjunctive.',
          false,
          'Savoir que expresses certainty: indicative.',
        ),
        tf('b3', '“Bien que” is followed by the subjunctive.', true),
        tf('b4', '“Il est évident que” expresses doubt.', false, 'It expresses certainty.'),
        tf('b5', '“Apparemment” shows the speaker cannot be sure.', true),
        tf('b6', 'The subjunctive of “être” is “que je sois”.', true),
        tf('b7', 'The subjunctive of “avoir” is “que j’ai”.', false, 'It is que j’aie.'),
        tf('b8', '“Le bénévole” is paid for his work.', false, 'A volunteer is not paid.'),
        tf('b9', '“Secourir” means to come to the aid of someone.', true),
        tf('b10', 'The nous form of the subjunctive of “aider” is “aidions”.', true),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-solidarity'],
      [
        q('c1', 'A “bénévole” is a …', 'volunteer', ['donor', 'refugee', 'activist']),
        q('c2', 'Il faut que tu ___ à l’heure.', 'sois', ['es', 'seras', 'étais'], {
          lesson: 'fr-c12-subjonctif-present',
        }),
        q(
          'c3',
          'Which expression shows doubt?',
          'Je doute que',
          ['Il est évident que', 'Assurément', 'Je sais que'],
          {
            lesson: 'fr-c12-modalisation',
          },
        ),
        q('c4', 'Bien qu’elle ___ fatiguée, elle aide.', 'soit', ['est', 'sera', 'était'], {
          lesson: 'fr-c12-subjonctif-present',
        }),
        q('c5', '“L’entraide” means …', 'mutual help', ['sharing', 'sponsorship', 'rescue']),
        q('c6', 'Je pense qu’ils ___ raison.', 'ont', ['aient', 'avoir', 'auront'], {
          lesson: 'fr-c12-subjonctif-present',
        }),
        q(
          'c7',
          'Which is the subjunctive of “faire” (que je …)?',
          'fasse',
          ['fais', 'fera', 'faisais'],
          {
            lesson: 'fr-c12-subjonctif-present',
          },
        ),
        q(
          'c8',
          'Not confirmed yet: « ___, l’aide arrivera lundi. »',
          'Apparemment',
          ['Évidemment', 'Certainement', 'Sans aucun doute'],
          {
            lesson: 'fr-c12-modalisation',
          },
        ),
      ],
    ),
  ],
};
