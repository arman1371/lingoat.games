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

const U = 'fr-c1-2-identites';

const vocab = vocabList(U, 'Identités et diversité', [
  ['l’identité', 'identity', '🪪'],
  ['le sentiment d’appartenance', 'sense of belonging', '🫂'],
  ['les origines', 'origins', '🌱'],
  ['les racines', 'roots', '🌳'],
  ['le déracinement', 'uprooting', '🪴'],
  ['l’immigration', 'immigration', '🛬'],
  ['l’expatrié', 'expat', '🧳'],
  ['la double culture', 'dual cultural background', '🌍'],
  ['le métissage', 'cultural and ethnic mixing', '🎨'],
  ['la diversité', 'diversity', '🌈'],
  ['la discrimination', 'discrimination', '🚷'],
  ['le préjugé', 'prejudice', '🙈'],
  ['le stéréotype', 'stereotype', '🎭'],
  ['la tolérance', 'tolerance', '🕊️'],
  ['le vivre-ensemble', 'living together in harmony', '🏘️'],
  ['la citoyenneté', 'citizenship', '🗳️'],
  ['la nationalité', 'nationality', '🛂'],
  ['la naturalisation', 'naturalisation', '📄'],
  ['le dépaysement', 'feeling of being in a foreign place', '🏜️'],
  ['le choc culturel', 'culture shock', '⚡'],
  ['le mal du pays', 'homesickness', '🏠'],
  ['le plurilinguisme', 'plurilingualism', '🗣️'],
  ['la langue maternelle', 'mother tongue', '👩‍🍼'],
  ['l’accent', 'accent', '🎙️'],
  ['le dialecte', 'dialect', '🗨️'],
  ['le bilinguisme', 'bilingualism', '🔤'],
  ['l’interprète', 'interpreter', '🎧'],
  ['s’intégrer', 'to integrate, to fit in', '🧩'],
  ['s’adapter', 'to adapt', '🦎'],
  ['revendiquer', 'to claim, to demand', '📣'],
  ['assumer', 'to own up to, to embrace', '💪'],
  ['se sentir étranger', 'to feel like a foreigner', '🥀'],
  ['le brassage culturel', 'cultural mix', '🥣'],
  ['l’ouverture d’esprit', 'open-mindedness', '🔓'],
]);

export const identites: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 9,
    title: 'Qui suis-je ? Identités',
    subtitle: 'Identity, belonging and diversity – with concession and indefinites',
    emoji: '🪪',
    goals: [
      'Talk about identity, origins, languages and living in another culture',
      'Make a concession with bien que, même si, malgré, pourtant, certes … mais',
      'Use indefinite words: certains, plusieurs, aucun, chacun, quiconque',
    ],
    grammar: ['Concession', 'Adjectifs et pronoms indéfinis'],
    vocabFields: ['Identités et diversité'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-identity', vocab, {
      first: 'Origins and belonging',
      firstText: 'Words for identity, roots, citizenship and mixing cultures.',
      second: 'Languages and fitting in',
      secondText: 'Words for languages, culture shock, prejudice and adapting.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-identity'],
      2,
      definitions([
        [
          'Sentiment d’être loin de chez soi et de s’ennuyer de son pays.',
          'le mal du pays',
          ['le dépaysement', 'le déracinement', 'le choc culturel'],
        ],
        [
          'Opinion toute faite, souvent injuste, sur un groupe de personnes.',
          'le préjugé',
          ['la tolérance', 'l’accent', 'la diversité'],
        ],
        [
          'Fait de bien vivre ensemble malgré les différences.',
          'le vivre-ensemble',
          ['le brassage culturel', 'la citoyenneté', 'le bilinguisme'],
        ],
        [
          'Langue apprise en premier, dans la famille.',
          'la langue maternelle',
          ['le dialecte', 'le plurilinguisme', 'l’accent'],
        ],
        [
          'Personne qui traduit à l’oral d’une langue à une autre.',
          'l’interprète',
          ['l’expatrié', 'l’immigré', 'le militant'],
        ],
        [
          'Fait de devenir officiellement citoyen d’un pays.',
          'la naturalisation',
          ['la nationalité', 'l’immigration', 'l’identité'],
        ],
        [
          'Façon particulière de prononcer une langue.',
          'l’accent',
          ['le dialecte', 'le stéréotype', 'la traduction'],
        ],
        [
          'Choisir de dire ouvertement qui l’on est.',
          'assumer',
          ['revendiquer', 's’adapter', 's’intégrer'],
        ],
      ]),
    ),

    act(
      U,
      'sort-concession',
      'sortit',
      'Which structure follows?',
      'The word in capitals expresses a concession. What comes after it?',
      ['grammar', 'fr-c12-concession'],
      3,
      {
        instruction: 'Subjunctive, indicative or a noun?',
        buckets: [
          { id: 'subjonctif', label: 'subjunctive', emoji: '🟣' },
          { id: 'indicatif', label: 'indicative', emoji: '🟢' },
          { id: 'nom', label: 'noun', emoji: '📦' },
        ],
        items: [
          ...cards('subjonctif', [
            [
              'BIEN QU’elle SOIT étrangère, elle se sent chez elle.',
              'Although she is a foreigner, she feels at home.',
            ],
            [
              'QUOIQU’il PARLE bien, il garde un accent.',
              'Although he speaks well, he keeps an accent.',
            ],
            ['BIEN QUE ce soit difficile, ils s’adaptent.', 'Although it is hard, they adapt.'],
          ]),
          ...cards('indicatif', [
            ['MÊME SI elle a peur, elle part.', 'Even if she is afraid, she leaves.'],
            ['MÊME SI c’est dur, on s’adapte.', 'Even if it is hard, one adapts.'],
            [
              'CERTES il a raison, MAIS je ne suis pas d’accord.',
              'True, he is right, but I disagree.',
            ],
          ]),
          ...cards('nom', [
            ['MALGRÉ la distance, ils restent proches.', 'Despite the distance, they stay close.'],
            [
              'EN DÉPIT DE ses origines, il est vu comme un étranger.',
              'In spite of his origins, he is seen as a foreigner.',
            ],
            [
              'MALGRÉ son accent, elle se fait comprendre.',
              'Despite her accent, she makes herself understood.',
            ],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-indefinis',
      'sortit',
      'What does the indefinite express?',
      'Sort the indefinite words in capitals by their meaning.',
      ['grammar', 'fr-c12-indefinis'],
      3,
      {
        instruction: 'Quantity, totality or none?',
        buckets: [
          { id: 'quantite', label: 'some / several', emoji: '🔢' },
          { id: 'totalite', label: 'all / each', emoji: '💯' },
          { id: 'aucun', label: 'none', emoji: '🚫' },
        ],
        items: [
          ...cards('quantite', [
            ['CERTAINS pensent que l’intégration est facile.', 'Some think integration is easy.'],
            ['PLUSIEURS langues se parlent ici.', 'Several languages are spoken here.'],
            ['QUELQUES amis m’ont aidé.', 'A few friends helped me.'],
          ]),
          ...cards('totalite', [
            ['CHACUN a ses racines.', 'Everyone has their roots.'],
            ['TOUS les élèves viennent d’ailleurs.', 'All the pupils come from elsewhere.'],
            ['TOUTE la ville fête la diversité.', 'The whole city celebrates diversity.'],
          ]),
          ...cards('aucun', [
            ['AUCUN préjugé ne résiste à la rencontre.', 'No prejudice survives meeting people.'],
            ['PERSONNE ne devrait se sentir étranger.', 'Nobody should feel like a foreigner.'],
            ['NUL ne choisit son lieu de naissance.', 'No one chooses their birthplace.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'gap-concession',
      'gapfill',
      'Make a concession',
      'Choose the connector and the right mood.',
      ['grammar', 'fr-c12-concession'],
      3,
      {
        items: [
          gap(
            'c1',
            'Bien qu’elle ___ ici depuis dix ans, elle se sent étrangère.',
            'vive',
            ['vive', 'vit', 'vivra', 'vivait'],
            'Although she has lived here for ten years, she feels foreign.',
            { lesson: 'fr-c12-concession', explanation: 'Bien que + subjunctive: qu’elle vive.' },
          ),
          gap(
            'c2',
            'Même si tu ___ peur, parle avec ton voisin.',
            'as',
            ['as', 'aies', 'avais', 'aurais'],
            'Even if you are afraid, talk to your neighbour.',
            {
              lesson: 'fr-c12-concession',
              explanation: 'Même si + indicative (present here).',
              why: { aies: 'Même si takes the indicative, not the subjunctive.' },
            },
          ),
          gap(
            'c3',
            '___ son accent, elle se fait très bien comprendre.',
            'Malgré',
            ['Malgré', 'Bien que', 'Même si', 'Parce que'],
            'Despite her accent, she makes herself understood very well.',
            {
              lesson: 'fr-c12-concession',
              explanation: 'Malgré + noun: son accent is a noun phrase.',
            },
          ),
          gap(
            'c4',
            'Il a ___ chercher du travail, personne ne l’a embauché.',
            'beau',
            ['beau', 'bien', 'mal', 'bon'],
            'However hard he looked for work, nobody hired him.',
            {
              lesson: 'fr-c12-concession',
              explanation: 'Avoir beau + infinitive: the effort is in vain.',
            },
          ),
          gap(
            'c5',
            'Il parle français ; ___, il garde un fort accent.',
            'pourtant',
            ['pourtant', 'parce que', 'car', 'donc'],
            'He speaks French; yet he keeps a strong accent.',
            {
              lesson: 'fr-c12-concession',
              explanation: 'Pourtant, cependant, néanmoins and toutefois add a contrast.',
            },
          ),
          gap(
            'c6',
            '___ ils soient très différents, ils s’entendent bien.',
            'Quoiqu’',
            ['Quoiqu’', 'Parce qu’', 'Pour qu’', 'Dès qu’'],
            'Although they are very different, they get along well.',
            {
              lesson: 'fr-c12-concession',
              explanation: 'Quoique + subjunctive, like bien que.',
            },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-indefinis',
      'gapfill',
      'Indefinite words',
      'Choose the indefinite adjective or pronoun that fits.',
      ['grammar', 'fr-c12-indefinis'],
      3,
      {
        items: [
          gap(
            'i1',
            '___ pensent que l’intégration prend du temps ; d’autres non.',
            'Certains',
            ['Certains', 'Aucun', 'Chacun', 'Quiconque'],
            'Some think integration takes time; others do not.',
            { lesson: 'fr-c12-indefinis', explanation: 'Certains … d’autres shares out a group.' },
          ),
          gap(
            'i2',
            '___ ne devrait être jugé sur son accent.',
            'Personne',
            ['Personne', 'Plusieurs', 'Certains', 'Tous'],
            'Nobody should be judged on their accent.',
            {
              lesson: 'fr-c12-indefinis',
              explanation: 'Personne … ne is a negative indefinite pronoun.',
            },
          ),
          gap(
            'i3',
            '___ a le droit de garder sa culture.',
            'Chacun',
            ['Chacun', 'Aucun', 'Plusieurs', 'Quelques'],
            'Everyone has the right to keep their culture.',
            { lesson: 'fr-c12-indefinis', explanation: 'Chacun is singular: chacun a.' },
          ),
          gap(
            'i4',
            'Il n’y a ___ solution simple.',
            'aucune',
            ['aucune', 'aucun', 'plusieurs', 'tout'],
            'There is no simple solution.',
            {
              lesson: 'fr-c12-indefinis',
              explanation: 'Aucun agrees with solution (feminine): aucune.',
            },
          ),
          gap(
            'i5',
            '___ qui s’installe ici doit apprendre la langue.',
            'Quiconque',
            ['Quiconque', 'Certains', 'Chacun', 'Aucun'],
            'Anyone who settles here must learn the language.',
            {
              lesson: 'fr-c12-indefinis',
              explanation: 'Quiconque = anyone who, literary and formal.',
            },
          ),
          gap(
            'i6',
            '___ les habitants de la rue viennent d’un autre pays.',
            'Tous',
            ['Tous', 'Tout', 'Toute', 'Aucun'],
            'All the residents of the street come from another country.',
            { lesson: 'fr-c12-indefinis', explanation: 'Tous + les + masculine plural noun.' },
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
      'Put the words in order – concession and indefinites.',
      ['grammar', 'fr-c12-concession', 'fr-c12-indefinis'],
      3,
      {
        items: [
          sent(
            's1',
            'Bien qu’elle soit étrangère, elle se sent chez elle.',
            'Although she is a foreigner, she feels at home.',
            'fr-c12-concession',
          ),
          sent(
            's2',
            'Malgré son accent, il se fait très bien comprendre.',
            'Despite his accent, he makes himself understood very well.',
            'fr-c12-concession',
          ),
          sent(
            's3',
            'Même si c’est difficile, nous nous adaptons.',
            'Even if it is hard, we adapt.',
            'fr-c12-concession',
          ),
          sent(
            's4',
            'Certains pensent que l’intégration est facile.',
            'Some think that integration is easy.',
            'fr-c12-indefinis',
          ),
          sent(
            's5',
            'Chacun a le droit de garder ses racines.',
            'Everyone has the right to keep their roots.',
            'fr-c12-indefinis',
          ),
          sent(
            's6',
            'Aucun préjugé ne résiste à la rencontre.',
            'No prejudice survives an encounter.',
            'fr-c12-indefinis',
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
      ['spelling', 'fr-c12-identity'],
      2,
      {
        items: [
          scrambled('p1', 'identité', 'identity', '🪪'),
          scrambled('p2', 'préjugé', 'prejudice', '🙈'),
          typed('p3', 'le dépaysement', 'feeling of being abroad', '🏜️'),
          typed('p4', 'le métissage', 'cultural mixing', '🎨'),
          dictated('p5', 'le sentiment d’appartenance', 'sense of belonging'),
          dictated('p6', 'la langue maternelle', 'mother tongue'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'Talking about identity',
      'Three conversations: a new arrival, a language question and a debate.',
      ['communication', 'fr-c12-identity'],
      3,
      {
        scenes: [
          scene(
            'arrival',
            'A new arrival',
            '🧳',
            'A colleague has just moved to your city.',
            npc(
              'Amina',
              'Je suis ici depuis un mois, mais j’ai encore le mal du pays.',
              'I have been here for a month, but I am still homesick.',
            ),
            you(
              'C’est normal. Même si c’est dur au début, on finit par s’adapter.',
              [
                'C’est normal. Même si c’est dur au début, on finisse par s’adapter.',
                'Même si takes the indicative: on finit.',
              ],
              ['Ce n’est pas grave, rentre chez toi.', 'Unkind – she wants support.'],
            ),
            npc(
              'Amina',
              'Certains me disent que je parle bien, d’autres que j’ai un accent.',
              'Some tell me I speak well, others that I have an accent.',
            ),
            you(
              'Ton accent fait ton charme. Aucun accent n’est un défaut.',
              [
                'Ton accent fait ton charme. Aucune accent n’est un défaut.',
                'Accent is masculine: aucun accent.',
              ],
              ['Ton accent est horrible.', 'Rude and hurtful.'],
            ),
          ),
          scene(
            'language',
            'Two languages at home',
            '🗣️',
            'A friend explains how they grew up.',
            npc(
              'Karim',
              'À la maison, nous parlons deux langues. Ma langue maternelle est l’arabe.',
              'At home we speak two languages. My mother tongue is Arabic.',
            ),
            you(
              'Le bilinguisme est une chance. Bien que ce soit parfois compliqué, non ?',
              [
                'Le bilinguisme est une chance. Bien que c’est parfois compliqué, non ?',
                'Bien que takes the subjunctive: que ce soit.',
              ],
              ['Le bilinguisme ne sert à rien.', 'Dismissive of his experience.'],
            ),
            npc(
              'Karim',
              'Parfois, oui. Mais chacun de mes enfants parle les deux sans accent.',
              'Sometimes, yes. But each of my children speaks both without an accent.',
            ),
            you(
              'Magnifique ! Malgré les difficultés, ils ont gardé leurs racines.',
              [
                'Magnifique ! Malgré qu’il y avait des difficultés, ils ont gardé leurs racines.',
                'Malgré takes a noun: malgré les difficultés.',
              ],
              ['Magnifique ! Je déteste cette langue.', 'That is offensive.'],
            ),
          ),
          scene(
            'debate',
            'A neighbourhood debate',
            '🏘️',
            'A resident worries about stereotypes in the district.',
            npc(
              'Lucie',
              'Certains habitants ont des préjugés, pourtant le quartier est très mélangé.',
              'Some residents have prejudices, yet the district is very mixed.',
            ),
            you(
              'Certes, mais la rencontre est le meilleur remède contre les stéréotypes.',
              [
                'Certes, parce que la rencontre est le meilleur remède.',
                'Certes … mais is the right pair; parce que does not fit.',
              ],
              ['Je m’en fiche des stéréotypes.', 'Not constructive in a neighbourhood debate.'],
            ),
            npc(
              'Lucie',
              'Exactement. Quiconque connaît ses voisins change d’avis.',
              'Exactly. Anyone who knows their neighbours changes their mind.',
            ),
            you(
              'Alors organisons une fête, afin que tous les habitants se rencontrent.',
              [
                'Alors organisons une fête, afin que tous les habitants se rencontrent pas.',
                'The negation changes the meaning.',
              ],
              ['Alors n’organisons rien du tout.', 'It does not follow from what she said.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Identity blitz',
      'True or false? Words, concession and indefinites.',
      ['grammar', 'fr-c12-concession', 'fr-c12-indefinis'],
      [
        tf('b1', '“Bien que” is followed by the subjunctive.', true),
        tf('b2', '“Même si” is followed by the indicative.', true),
        tf('b3', '“Malgré” is followed by a noun.', true),
        tf('b4', '“Avoir beau” + infinitive expresses a vain effort.', true),
        tf('b5', '“Pourtant” introduces a cause.', false, 'It introduces a contrast.'),
        tf('b6', '“Chacun” is a plural pronoun.', false, 'Chacun is singular.'),
        tf('b7', '“Aucun” can be used with “ne” for a negative sentence.', true),
        tf('b8', '“Le mal du pays” is homesickness.', true),
        tf(
          'b9',
          '“Un préjugé” is a well-founded fact.',
          false,
          'It is an opinion formed in advance.',
        ),
        tf('b10', '“Quiconque” means “anyone who”.', true),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-identity'],
      [
        q('c1', 'Bien qu’il ___ difficile, nous continuons.', 'soit', ['est', 'sera', 'était'], {
          lesson: 'fr-c12-concession',
        }),
        q('c2', '“Le déracinement” means …', 'uprooting', [
          'integration',
          'tolerance',
          'diversity',
        ]),
        q(
          'c3',
          '___ la fatigue, elle a terminé le projet.',
          'Malgré',
          ['Bien que', 'Même si', 'Quoique'],
          {
            lesson: 'fr-c12-concession',
          },
        ),
        q('c4', '___ a droit au respect.', 'Chacun', ['Plusieurs', 'Tous', 'Certains'], {
          lesson: 'fr-c12-indefinis',
        }),
        q('c5', 'Même si elle ___ fatiguée, elle chante.', 'est', ['soit', 'serait', 'fût'], {
          lesson: 'fr-c12-concession',
        }),
        q('c6', 'Il n’y a ___ réponse simple.', 'aucune', ['aucun', 'chaque', 'plusieurs'], {
          lesson: 'fr-c12-indefinis',
        }),
        q('c7', '“S’intégrer” means …', 'to fit in', ['to leave', 'to translate', 'to claim']),
        q('c8', 'Which word introduces a contrast?', 'néanmoins', ['car', 'donc', 'puisque'], {
          lesson: 'fr-c12-concession',
        }),
      ],
    ),
  ],
};
