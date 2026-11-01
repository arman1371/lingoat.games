import { byDe, flashcards, quizDeEn, vocabList } from '../builders';
import {
  activity,
  cards,
  condPastTable,
  condTable,
  gh,
  heard,
  meta,
  qh,
  q,
  say,
  sent,
  tf,
  typed,
  unitFr,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-c1-1-societe';
const L = 'fr-c11-si-clauses' as const;

const citoyen = vocabList(U, 'Citizenship and politics', [
  ['la citoyenneté', 'citizenship', '🪪'],
  ['le scrutin', 'the ballot, the vote', '🗳️'],
  ['l’abstention', 'abstention, not voting', '🙅'],
  ['une circonscription', 'a constituency', '🗺️'],
  ['un mandat', 'a term of office, a mandate', '📜'],
  ['un député', 'a member of parliament', '🏛️'],
  ['un projet de loi', 'a bill', '📃'],
  ['une réforme', 'a reform', '🔧'],
  ['la laïcité', 'secularism', '🕊️'],
  ['le service public', 'the public service', '🏥'],
  ['un référendum', 'a referendum', '☑️'],
  ['une pétition', 'a petition', '✍️'],
  ['une manifestation', 'a demonstration', '🪧'],
  ['une grève', 'a strike', '✊'],
  ['le pouvoir d’achat', 'purchasing power', '💶'],
  ['la démocratie participative', 'participatory democracy', '🙋'],
]);

const engagement = vocabList(U, 'Commitment and associations', [
  ['le bénévolat', 'volunteering', '🤝'],
  ['un bénévole', 'a volunteer', '🙋‍♂️'],
  ['une association', 'a non-profit association', '🏘️'],
  ['une ONG', 'an NGO', '🌍'],
  ['un militant', 'an activist, a campaigner', '📣'],
  ['s’engager', 'to get involved, to commit oneself', '🫱'],
  ['la solidarité', 'solidarity', '🫂'],
  ['une cotisation', 'a membership fee', '💳'],
  ['un don', 'a donation', '🎁'],
  ['une collecte de fonds', 'a fund-raising drive', '🪙'],
  ['mobiliser', 'to mobilise, to rally', '📢'],
  ['sensibiliser', 'to raise awareness', '💡'],
  ['plaider pour', 'to argue for, to plead for', '⚖️'],
  ['une tribune', 'an opinion piece, a platform', '🎙️'],
  ['l’intérêt général', 'the public interest', '🌐'],
  ['la cohésion sociale', 'social cohesion', '🧩'],
  ['un élu', 'an elected representative', '🎖️'],
]);

const vocab = [...citoyen, ...engagement];

export const societe: UnitContent = {
  unit: unitFr({
    id: U,
    order: 2,
    title: 'Société et engagement',
    subtitle: 'Voting, protest and volunteering, with hypotheses introduced by si',
    emoji: '🗳️',
    goals: [
      'Talk about elections, public services and the way a citizen can act',
      'Describe how you get involved: volunteering, associations, petitions and protest',
      'Express a real, an unlikely and an impossible condition with si, au cas où and sauf si',
    ],
    grammar: [
      'Si + présent → présent, futur or impératif (a real condition)',
      'Si + imparfait → conditionnel présent (an unlikely or imagined condition)',
      'Si + plus-que-parfait → conditionnel passé (a missed chance)',
      'Au cas où + conditionnel; sauf si; à condition que + subjonctif',
    ],
    vocabFields: ['Citizenship and politics', 'Commitment and associations'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-citoyen',
      'flashcards',
      meta(
        'Citizenship and politics',
        'Le scrutin, un mandat, une réforme – how a democracy works.',
        ['vocabulary', 'politics-society'],
        1,
        4,
      ),
      flashcards(citoyen),
    ),

    activity(
      U,
      'flash-engagement',
      'flashcards',
      meta(
        'Commitment and associations',
        'Le bénévolat, une cotisation, sensibiliser – the words of getting involved.',
        ['vocabulary', 'society-volunteering'],
        1,
        4,
      ),
      flashcards(engagement),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning of the key words.',
        ['vocabulary', 'politics-society'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'le scrutin',
          'un mandat',
          'la laïcité',
          'une circonscription',
          'une cotisation',
          'sensibiliser',
          'l’intérêt général',
          'plaider pour',
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
        ['vocabulary', 'society-volunteering'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'le scrutin', b: 'le moment où les citoyens votent' },
          { id: 'm2', a: 'un mandat', b: 'la durée pendant laquelle un élu exerce sa fonction' },
          { id: 'm3', a: 'une grève', b: 'l’arrêt collectif du travail pour protester' },
          { id: 'm4', a: 'un bénévole', b: 'quelqu’un qui aide sans être payé' },
          {
            id: 'm5',
            a: 'une pétition',
            b: 'un texte signé par beaucoup de gens pour demander quelque chose',
          },
          { id: 'm6', a: 'l’abstention', b: 'le fait de ne pas voter' },
          { id: 'm7', a: 'une cotisation', b: 'la somme qu’on paie pour être membre' },
          { id: 'm8', a: 'un référendum', b: 'un vote où tous répondent par oui ou par non' },
        ],
      },
    ),

    activity(
      U,
      'listen-societe',
      'listen',
      meta(
        'Listen to the debate',
        'Listen to the sentence and pick what it says.',
        ['listening', 'politics-society'],
        2,
        4,
      ),
      {
        items: [
          heard(
            'l1',
            'L’abstention a été très forte lors du dernier scrutin.',
            'Abstention was very high at the last election.',
            [
              'Turnout was very high at the last referendum.',
              'The last election was cancelled because of a strike.',
              'The deputy resigned after the last election.',
            ],
          ),
          heard(
            'l2',
            'Les bénévoles de l’association organisent une collecte de fonds.',
            'The association’s volunteers are organising a fund-raising drive.',
            [
              'The association’s members are paying their annual fee.',
              'The NGO’s activists are starting a strike.',
              'The volunteers are leaving the association.',
            ],
          ),
          heard(
            'l3',
            'La pétition a recueilli dix mille signatures en deux jours.',
            'The petition collected ten thousand signatures in two days.',
            [
              'The bill collected ten thousand votes in two days.',
              'The demonstration gathered ten thousand people in two weeks.',
              'The petition was rejected after two days.',
            ],
          ),
          heard(
            'l4',
            'Le projet de loi sera débattu après le référendum.',
            'The bill will be debated after the referendum.',
            [
              'The referendum will be held after the bill is passed.',
              'The bill was withdrawn before the referendum.',
              'The reform will be voted on by the deputies tomorrow.',
            ],
          ),
          heard(
            'l5',
            'Cette ONG cherche à sensibiliser les jeunes à la solidarité.',
            'This NGO is trying to raise young people’s awareness of solidarity.',
            [
              'This association is looking for young volunteers to collect donations.',
              'This NGO wants to mobilise young people for a strike.',
              'This union is asking young people for a membership fee.',
            ],
          ),
          heard(
            'l6',
            'Les syndicats appellent à la grève si la réforme est adoptée.',
            'The unions are calling a strike if the reform is passed.',
            [
              'The unions called off the strike because the reform was withdrawn.',
              'The deputies are voting on the reform after the strike.',
              'The unions have welcomed the reform.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-si',
      'sortit',
      meta(
        'Real, imagined or too late?',
        'Sort the hypotheses by the tenses they use after si.',
        ['grammar', L],
        2,
        5,
      ),
      {
        instruction: 'Which kind of condition is it?',
        buckets: [
          { id: 'real', label: 'Real: si + présent', emoji: '✅' },
          { id: 'imagined', label: 'Imagined: si + imparfait', emoji: '💭' },
          { id: 'late', label: 'Too late: si + plus-que-parfait', emoji: '⏪' },
        ],
        items: cards('c', [
          ['Si tu votes, tu auras ton mot à dire.', 'real', 'If you vote, you will have your say.'],
          [
            'Si le prix augmente, nous ferons grève.',
            'real',
            'If the price goes up, we will strike.',
          ],
          [
            'Si vous signez la pétition, elle sera envoyée au maire.',
            'real',
            'If you sign the petition, it will be sent to the mayor.',
          ],
          [
            'Si j’avais plus de temps, je deviendrais bénévole.',
            'imagined',
            'If I had more time, I would become a volunteer.',
          ],
          [
            'Si les citoyens participaient davantage, la démocratie serait plus vivante.',
            'imagined',
            'If citizens took part more, democracy would be livelier.',
          ],
          [
            'Si elle était élue, elle réformerait l’école.',
            'imagined',
            'If she were elected, she would reform the school system.',
          ],
          [
            'Si tu avais voté, tu aurais pu choisir.',
            'late',
            'If you had voted, you could have had a say.',
          ],
          [
            'S’ils avaient mieux communiqué, la mobilisation aurait été plus forte.',
            'late',
            'If they had communicated better, the mobilisation would have been stronger.',
          ],
          [
            'Si la loi avait été adoptée plus tôt, nous aurions évité cette crise.',
            'late',
            'If the law had been passed earlier, we would have avoided this crisis.',
          ],
          [
            'Si j’avais su, je me serais engagé plus tôt.',
            'late',
            'If I had known, I would have got involved sooner.',
          ],
        ]),
      },
    ),

    activity(
      U,
      'conj-conditionnel',
      'conjugation',
      meta(
        'Conditional forms',
        'Complete the conditionnel présent and passé of the verbs of the unit.',
        ['grammar', L],
        3,
        5,
      ),
      {
        tables: [
          condTable('voter', 'to vote', ['je', 'nous']),
          condTable('pouvoir', 'to be able to', ['tu', 'ils/elles']),
          condTable('vouloir', 'to want', ['il/elle/on', 'vous']),
          condPastTable('faire', 'to do, to make', ['je', 'nous']),
          condPastTable('avoir', 'to have', ['tu', 'ils/elles']),
        ],
      },
    ),

    activity(
      U,
      'gap-si',
      'gapfill',
      meta(
        'Choose the tense after si',
        'Pick the verb form that fits the hypothesis.',
        ['grammar', L, 'politics-society'],
        2,
        5,
      ),
      {
        items: [
          gh(
            'g1',
            'Si tu ___ la pétition, elle aura plus de poids.',
            'signes',
            {
              signerais: 'After si, never use the conditional: a real condition takes the present.',
              signeras: 'After si, never use the future: a real condition takes the present.',
              'aurais signé': 'The past conditional never follows si.',
            },
            'If you sign the petition, it will carry more weight.',
            'A real condition: si + présent, then the result in the futur.',
          ),
          gh(
            'g2',
            'Si j’avais le temps, je ___ bénévole.',
            'deviendrais',
            {
              deviendrai:
                'The future goes with si + présent; si + imparfait needs the conditional.',
              devenais: 'The imparfait belongs in the si-clause; the result takes the conditional.',
              'serais devenu':
                'The past conditional is for something that did not happen in the past.',
            },
            'If I had the time, I would become a volunteer.',
            'An imagined condition: si + imparfait, then the conditionnel présent.',
          ),
          gh(
            'g3',
            'Si les électeurs ___ davantage, le taux de participation augmenterait.',
            'participaient',
            {
              participeraient: 'After si, never use the conditional – use the imparfait.',
              participent: 'The present would give a real condition; the result is a conditional.',
              'avaient participé':
                'The plus-que-parfait would need a conditionnel passé in the result.',
            },
            'If voters took part more, turnout would go up.',
            'Si + imparfait pairs with the conditionnel présent.',
          ),
          gh(
            'g4',
            'Si nous avions voté, nous ___ le résultat.',
            'aurions changé',
            {
              changerions: 'The present conditional does not fit a missed past chance.',
              'avions changé': 'The plus-que-parfait is for the si-clause, not for the result.',
              changeons: 'The present does not express an impossible past hypothesis.',
            },
            'If we had voted, we would have changed the result.',
            'A missed chance: si + plus-que-parfait, then the conditionnel passé.',
          ),
          gh(
            'g5',
            'Je prends un parapluie au cas où il ___.',
            'pleuvrait',
            {
              pleuvra: 'Au cas où is followed by the conditional, not the future.',
              pleuve: 'Au cas où does not take the subjunctive.',
              pleut: 'Au cas où takes the conditional, not the present.',
            },
            'I am taking an umbrella in case it rains.',
            'Au cas où + conditionnel: a precaution against a possibility.',
          ),
          gh(
            'g6',
            'Nous irons à la marche, ___ le temps est trop mauvais.',
            'sauf si',
            {
              'à moins que': 'À moins que needs the subjunctive (… ne soit trop mauvais).',
              'au cas où': 'Au cas où needs a conditional and expresses a precaution.',
              puisque: 'Puisque gives a reason; it does not make an exception.',
            },
            'We will go to the march, unless the weather is too bad.',
            'Sauf si + indicatif states the one case that cancels the plan.',
          ),
          gh(
            'g7',
            'Si elle ___ élue, elle réformerait l’école.',
            'était',
            {
              serait: 'After si, never use the conditional.',
              sera: 'After si, never use the future.',
              fut: 'The passé simple is not used for a hypothesis in everyday French.',
            },
            'If she were elected, she would reform the school.',
            'Si + imparfait, then the conditionnel présent.',
          ),
          gh(
            'g8',
            'Si j’avais su, je ne ___ pas abstenu.',
            'me serais',
            {
              'm’étais': 'That is plus-que-parfait, the tense of the si-clause.',
              'me suis': 'The passé composé does not express an impossible hypothesis.',
              'm’avais': 'Reflexive verbs take être, never avoir.',
            },
            'If I had known, I would not have abstained.',
            'Conditionnel passé of a reflexive verb: je me serais abstenu.',
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
        ['grammar', L, 'society-volunteering'],
        3,
        5,
      ),
      {
        items: [
          typed(
            't1',
            'Si tu ___ (voter) demain, tu auras ton mot à dire.',
            'votes',
            'If you vote tomorrow, you will have your say.',
            'Real condition: the present after si.',
          ),
          typed(
            't2',
            'Si nous ___ (avoir) un budget, nous organiserions un concert.',
            'avions',
            'If we had a budget, we would organise a concert.',
            'Imagined condition: the imparfait after si.',
          ),
          typed(
            't3',
            'Si vous aviez signé la pétition, la mairie ___ (réagir).',
            'aurait réagi',
            'If you had signed the petition, the town hall would have reacted.',
            'Missed chance: the conditionnel passé in the result.',
          ),
          typed(
            't4',
            'Au cas où il ___ (pleuvoir), la réunion aurait lieu dans la salle.',
            'pleuvrait',
            'In case it rains, the meeting would take place in the hall.',
            'Au cas où is followed by the conditional.',
          ),
          typed(
            't5',
            'S’il ___ (venir) plus tôt, il aurait trouvé une place.',
            'était venu',
            'If he had come earlier, he would have found a seat.',
            'Plus-que-parfait of venir (être as auxiliary).',
          ),
          typed(
            't6',
            'Nous aurions gagné si nous nous ___ (se mobiliser) plus tôt.',
            'étions mobilisés',
            'We would have won if we had mobilised earlier.',
            'Plus-que-parfait of a reflexive verb: nous nous étions mobilisés.',
            ['étions mobilisées', 'étions mobilisé'],
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the hypothesis',
        'Put the words in order. Check the tenses on both sides of si.',
        ['grammar', L],
        3,
        5,
      ),
      {
        items: [
          sent(
            'b1',
            'If you sign the petition, it will be sent to the mayor.',
            ['Si', 'vous', 'signez', 'la', 'pétition,', 'elle', 'sera', 'envoyée', 'au', 'maire.'],
            { extra: ['signerez'] },
          ),
          sent(
            'b2',
            'If I had more time, I would become a volunteer.',
            ['Si', 'j’avais', 'plus', 'de', 'temps,', 'je', 'deviendrais', 'bénévole.'],
            {
              extra: ['deviendrai'],
              alsoAccept: ['Je deviendrais bénévole si j’avais plus de temps.'],
            },
          ),
          sent('b3', 'If citizens took part more, democracy would be livelier.', [
            'Si',
            'les',
            'citoyens',
            'participaient',
            'davantage,',
            'la',
            'démocratie',
            'serait',
            'plus',
            'vivante.',
          ]),
          sent(
            'b4',
            'If we had mobilised sooner, we would have won.',
            [
              'Si',
              'nous',
              'nous',
              'étions',
              'mobilisés',
              'plus',
              'tôt,',
              'nous',
              'aurions',
              'gagné.',
            ],
            { extra: ['gagnerions'] },
          ),
          sent(
            'b5',
            'I will bring a banner in case it rains.',
            ['J’apporterai', 'une', 'banderole', 'au', 'cas', 'où', 'il', 'pleuvrait.'],
            { extra: ['pleuvra'] },
          ),
          sent(
            'b6',
            'We will go to the march unless it rains.',
            ['Nous', 'irons', 'à', 'la', 'marche', 'sauf', 's’il', 'pleut.'],
            { extra: ['pleuve'] },
          ),
        ],
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Getting involved',
        'Two conversations: joining an association and convincing a friend to vote.',
        ['communication', 'society-volunteering'],
        3,
        5,
      ),
      {
        scenes: [
          {
            id: 'association',
            title: 'At the association',
            emoji: '🤝',
            setting: 'You would like to volunteer at a local food bank.',
            turns: [
              say(
                'La responsable',
                'Bonjour ! Vous souhaitez devenir bénévole ?',
                'Hello! Would you like to become a volunteer?',
              ),
              you(
                'Oui, si vous avez besoin de monde, je pourrais venir deux soirs par semaine.',
                [
                  'Oui, si vous aurez besoin de monde, je viendrai.',
                  'After si, the future is not used: say si vous avez besoin.',
                ],
                [
                  'Non, je cherche seulement à payer ma cotisation.',
                  'That does not answer the question about volunteering.',
                ],
              ),
              say(
                'La responsable',
                'Parfait. Et si vous étiez disponible le samedi, ce serait encore mieux.',
                'Perfect. And if you were free on Saturdays, that would be even better.',
              ),
              you(
                'Si j’avais su, je me serais libéré plus tôt, mais je peux essayer le mois prochain.',
                [
                  'Si j’aurais su, je me serais libéré plus tôt.',
                  'Never put the conditional after si: use j’avais su.',
                ],
                ['Le samedi est un scrutin, donc non.', 'This makes no sense as an answer.'],
              ),
            ],
          },
          {
            id: 'vote',
            title: 'Convincing a friend to vote',
            emoji: '🗳️',
            setting: 'A friend tells you he will not vote on Sunday.',
            turns: [
              say(
                'Malik',
                'Dimanche, je ne vote pas. Mon vote ne changera rien.',
                'On Sunday I am not voting. My vote will not change anything.',
              ),
              you(
                'Si tout le monde pensait comme toi, personne ne voterait !',
                [
                  'Si tout le monde pensera comme toi, personne ne votera.',
                  'Si is not followed by the future.',
                ],
                [
                  'Tu as raison, l’abstention est une bonne solution.',
                  'You are supposed to convince him, not agree.',
                ],
              ),
              say(
                'Malik',
                'Peut-être. Mais je n’aime aucun candidat.',
                'Maybe. But I do not like any of the candidates.',
              ),
              you(
                'Alors vote blanc, au cas où tu voudrais exprimer ton désaccord.',
                [
                  'Alors vote blanc, au cas où tu veux exprimer ton désaccord.',
                  'Au cas où is followed by the conditional, not the present.',
                ],
                [
                  'Alors tu ne peux pas te plaindre.',
                  'Too blunt, and it does not give him an option.',
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
        'Si blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'grammar', L, 'politics-society'],
        2,
        3,
      ),
      {
        seconds: 60,
        statements: [
          tf(
            'b1',
            'After “si”, the verb can be in the future.',
            false,
            'Never: Si tu viens, … (present).',
          ),
          tf(
            'b2',
            'After “si”, the verb can be in the conditional.',
            false,
            'The conditional is for the result clause.',
          ),
          tf('b3', 'Si + imparfait leads to the conditionnel présent.', true),
          tf('b4', 'Si + plus-que-parfait leads to the conditionnel passé.', true),
          tf('b5', '“Au cas où” is followed by the conditional.', true),
          tf('b6', '“Une grève” is a strike.', true),
          tf(
            'b7',
            '“Un bénévole” is paid for his work.',
            false,
            'Un bénévole is an unpaid volunteer.',
          ),
          tf('b8', '“L’abstention” means that many people vote.', false, 'It means not voting.'),
          tf('b9', '“Une cotisation” is a membership fee.', true),
          tf('b10', '“Sauf si” introduces an exception.', true),
          tf('b11', 'The si-clause can come after the result clause.', true),
          tf('b12', '“Un mandat” is a petition.', false, 'Un mandat is a term of office.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'A mixed final quiz: society words and hypotheses.',
        ['vocabulary', 'grammar', L, 'politics-society'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'What is “un mandat”?', 'a term of office', ['a petition', 'a strike', 'a bill']),
          qh(
            'c2',
            'Si nous ___ plus de bénévoles, nous ouvririons tous les jours.',
            'avions',
            {
              aurions: 'After si, never use the conditional.',
              aurons: 'After si, never use the future.',
              avons: 'The present would not match a conditional result.',
            },
            L,
          ),
          q('c3', 'Which word means “donation”?', 'un don', [
            'une cotisation',
            'un mandat',
            'une tribune',
          ]),
          qh(
            'c4',
            'Si tu avais lu le programme, tu ___ autrement.',
            'aurais voté',
            {
              voterais: 'The past hypothesis needs the conditionnel passé.',
              'avais voté': 'That is the tense of the si-clause, not of the result.',
              votes: 'The present does not fit a missed past chance.',
            },
            L,
          ),
          q('c5', '“Sensibiliser” means …', 'to raise awareness', [
            'to mobilise voters',
            'to sign a petition',
            'to collect money',
          ]),
          qh(
            'c6',
            'Prenons un manteau, au cas où il ___ froid.',
            'ferait',
            {
              fera: 'Au cas où is followed by the conditional.',
              fasse: 'Au cas où does not take the subjunctive.',
              fait: 'Au cas où does not take the present.',
            },
            L,
          ),
          q('c7', 'What is “le service public”?', 'the public service', [
            'secularism',
            'the ballot',
            'a mandate',
          ]),
          qh(
            'c8',
            'Si les députés ___ la réforme, la grève s’arrêtera.',
            'retirent',
            {
              retireront: 'After si, never use the future.',
              retireraient: 'After si, never use the conditional.',
              retiraient:
                'The imparfait would give an unlikely condition; the result is in the future.',
            },
            L,
          ),
          q('c9', 'Who is “un élu”?', 'someone who has been voted into office', [
            'someone who votes blank',
            'someone who volunteers',
            'someone who organises a strike',
          ]),
          qh(
            'c10',
            'Nous manifesterons, ___ il neige.',
            'sauf s’',
            {
              'à moins qu’': 'À moins que needs the subjunctive.',
              'au cas où': 'Au cas où needs the conditional and a precaution.',
              'puisqu’': 'Puisque gives a known reason, not an exception.',
            },
            L,
          ),
        ],
      },
    ),
  ],
};
