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

const U = 'fr-c1-2-argumenter';

const vocab = vocabList(U, 'Argumentation et débat', [
  ['l’argument', 'argument', '💬'],
  ['le contre-argument', 'counter-argument', '↩️'],
  ['la thèse', 'thesis', '📌'],
  ['la problématique', 'central question, issue', '❓'],
  ['le plan', 'outline, structure', '🗂️'],
  ['l’introduction', 'introduction', '🚪'],
  ['la conclusion', 'conclusion', '🏁'],
  ['le paragraphe', 'paragraph', '¶'],
  ['la transition', 'transition', '🌉'],
  ['la preuve', 'proof, evidence', '🔍'],
  ['la statistique', 'statistic', '📊'],
  ['le raisonnement', 'reasoning', '🧮'],
  ['la nuance', 'nuance', '🎚️'],
  ['la prise de position', 'taking a stand', '🚩'],
  ['défendre un point de vue', 'to defend a point of view', '🛡️'],
  ['réfuter', 'to refute', '❌'],
  ['nuancer', 'to qualify, to add nuance', '🌗'],
  ['convaincre', 'to convince', '🤝'],
  ['persuader', 'to persuade', '🗣️'],
  ['démontrer', 'to demonstrate', '📐'],
  ['affirmer', 'to assert', '☝️'],
  ['contester', 'to challenge, to dispute', '🙅'],
  ['concéder', 'to concede', '🏳️'],
  ['objecter', 'to object', '✋'],
  ['illustrer', 'to illustrate', '🖼️'],
  ['conclure', 'to conclude', '🔚'],
  ['le débat', 'debate', '🎙️'],
  ['l’orateur', 'speaker', '🧑‍🎤'],
  ['l’auditoire', 'audience', '👥'],
  ['la rhétorique', 'rhetoric', '🎭'],
  ['l’éloquence', 'eloquence', '🪶'],
  ['le parti pris', 'bias', '⚖️'],
  ['l’esprit critique', 'critical thinking', '🔎'],
  ['la synthèse', 'summary, synthesis', '🧩'],
  ['la reformulation', 'rewording', '🔁'],
]);

export const argumenter: UnitContent = {
  unit: unitFrC12({
    id: U,
    order: 12,
    title: 'Pour ou contre ?',
    subtitle: 'Argue and defend a point of view – with connectors and indicative or subjunctive',
    emoji: '⚖️',
    goals: [
      'Structure an argument with the right logical connectors',
      'Choose between indicative and subjunctive after conjunctions and verbs of opinion',
      'Present, nuance and refute a point of view in writing and speech',
    ],
    grammar: ['Connecteurs logiques', 'Indicatif ou subjonctif'],
    vocabFields: ['Argumentation et débat'],
  }),
  vocab,
  activities: [
    ...vocabBlock(U, 'fr-c12-argumentation', vocab, {
      first: 'Structuring a text',
      firstText: 'Words for thesis, plan, proof and conclusion.',
      second: 'Debating and persuading',
      secondText: 'Verbs and nouns for defending, refuting and convincing.',
    }),

    act(
      U,
      'quiz-definitions',
      'quiz',
      'Which word is defined?',
      'Read the definition in French and find the word.',
      ['vocabulary', 'fr-c12-argumentation'],
      2,
      definitions([
        [
          'Idée principale que l’on cherche à défendre.',
          'la thèse',
          ['la nuance', 'la transition', 'la synthèse'],
        ],
        [
          'Prouver qu’une affirmation est fausse.',
          'réfuter',
          ['illustrer', 'concéder', 'affirmer'],
        ],
        [
          'Ensemble des personnes qui écoutent un orateur.',
          'l’auditoire',
          ['l’orateur', 'le débat', 'la rhétorique'],
        ],
        [
          'Admettre qu’un adversaire a en partie raison.',
          'concéder',
          ['contester', 'objecter', 'démontrer'],
        ],
        [
          'Idée ou fait qui soutient un raisonnement.',
          'l’argument',
          ['la problématique', 'la conclusion', 'le parti pris'],
        ],
        [
          'Jugement formé d’avance, qui empêche d’être objectif.',
          'le parti pris',
          ['l’esprit critique', 'la nuance', 'la reformulation'],
        ],
        [
          'Fait de dire la même chose avec d’autres mots.',
          'la reformulation',
          ['la synthèse', 'la transition', 'le résumé'],
        ],
        [
          'Art de bien parler pour convaincre.',
          'la rhétorique',
          ['l’éloquence', 'le débat', 'l’introduction'],
        ],
      ]),
    ),

    act(
      U,
      'sort-connecteurs',
      'sortit',
      'What does the connector do?',
      'Sort the connectors in capitals by their function in an argument.',
      ['grammar', 'fr-c12-connecteurs'],
      3,
      {
        instruction: 'Add, oppose, structure or conclude?',
        buckets: [
          { id: 'addition', label: 'add', emoji: '➕' },
          { id: 'opposition', label: 'oppose', emoji: '↔️' },
          { id: 'structure', label: 'structure', emoji: '🗂️' },
          { id: 'conclusion', label: 'conclude', emoji: '🏁' },
        ],
        items: [
          ...cards('addition', [
            ['EN OUTRE, ce projet coûte moins cher.', 'Moreover, this project costs less.'],
            ['DE PLUS, il respecte l’environnement.', 'What is more, it respects the environment.'],
            ['D’AILLEURS, personne ne s’y oppose.', 'Besides, nobody opposes it.'],
          ]),
          ...cards('opposition', [
            ['EN REVANCHE, le délai reste long.', 'On the other hand, the delay remains long.'],
            ['OR, les chiffres montrent le contraire.', 'Yet the figures show the opposite.'],
            ['PAR CONTRE, les risques sont réels.', 'On the other hand, the risks are real.'],
          ]),
          ...cards('structure', [
            ['D’ABORD, examinons les faits.', 'First, let us look at the facts.'],
            ['ENSUITE, nous verrons les solutions.', 'Then, we will see the solutions.'],
            ['ENFIN, nous évaluerons l’impact.', 'Finally, we will assess the impact.'],
          ]),
          ...cards('conclusion', [
            ['EN SOMME, le projet est viable.', 'In sum, the project is viable.'],
            ['AINSI, on peut conclure à son utilité.', 'Thus, we can conclude it is useful.'],
            ['EN DÉFINITIVE, je soutiens cette idée.', 'Ultimately, I support this idea.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'sort-modes',
      'sortit',
      'Indicative or subjunctive?',
      'Which mood follows the conjunction in capitals?',
      ['grammar', 'fr-c12-indicatif-subjonctif'],
      3,
      {
        instruction: 'Which mood?',
        buckets: [
          { id: 'indicatif', label: 'indicative', emoji: '🟢' },
          { id: 'subjonctif', label: 'subjunctive', emoji: '🟣' },
        ],
        items: [
          ...cards('indicatif', [
            ['APRÈS QU’il a parlé, la salle a applaudi.', 'After he spoke, the room applauded.'],
            ['PENDANT QUE tu parles, je prends des notes.', 'While you speak, I take notes.'],
            [
              'TANDIS QUE l’un défend la thèse, l’autre la réfute.',
              'While one defends the thesis, the other refutes it.',
            ],
            [
              'ALORS QUE tout le monde hésite, elle tranche.',
              'While everyone hesitates, she decides.',
            ],
            [
              'PARCE QU’il est sûr de lui, il convainc.',
              'Because he is sure of himself, he convinces.',
            ],
          ]),
          ...cards('subjonctif', [
            [
              'AVANT QU’il parle, relisons nos notes.',
              'Before he speaks, let us reread our notes.',
            ],
            ['Je parlerai JUSQU’À CE QUE vous compreniez.', 'I will speak until you understand.'],
            ['Il est parti SANS QU’on le voie.', 'He left without anyone seeing him.'],
            [
              'Je le crois, BIEN QU’il se trompe parfois.',
              'I believe him, although he is sometimes wrong.',
            ],
            ['POUR QUE tout soit clair, je reformule.', 'So that everything is clear, I reword.'],
          ]),
        ],
      },
    ),

    act(
      U,
      'gap-connecteurs',
      'gapfill',
      'Pick the connector',
      'Choose the connector that fits the logic.',
      ['grammar', 'fr-c12-connecteurs'],
      3,
      {
        items: [
          gap(
            'c1',
            'Ce plan est efficace ; ___, il est peu coûteux.',
            'de plus',
            ['de plus', 'en revanche', 'pourtant', 'ainsi'],
            'This plan is effective; moreover, it is cheap.',
            {
              lesson: 'fr-c12-connecteurs',
              explanation: 'De plus adds a further argument in the same direction.',
            },
          ),
          gap(
            'c2',
            'Le projet est utile ; ___, il pose des problèmes de financement.',
            'en revanche',
            ['en revanche', 'de plus', 'ainsi', 'd’abord'],
            'The project is useful; on the other hand, it raises funding problems.',
            {
              lesson: 'fr-c12-connecteurs',
              explanation: 'En revanche introduces an opposing point.',
            },
          ),
          gap(
            'c3',
            '___, examinons le problème ; ensuite, proposons des solutions.',
            'D’abord',
            ['D’abord', 'Enfin', 'En somme', 'Pourtant'],
            'First, let us look at the problem; then, let us suggest solutions.',
            {
              lesson: 'fr-c12-connecteurs',
              explanation: 'D’abord, ensuite, enfin structure the order of the text.',
            },
          ),
          gap(
            'c4',
            '___, on peut conclure que cette réforme est nécessaire.',
            'En définitive',
            ['En définitive', 'En outre', 'Pourtant', 'D’ailleurs'],
            'Ultimately, we can conclude that this reform is necessary.',
            {
              lesson: 'fr-c12-connecteurs',
              explanation: 'En définitive, en somme and bref introduce the conclusion.',
            },
          ),
          gap(
            'c5',
            'Certes, cette idée est séduisante, ___ elle est irréaliste.',
            'mais',
            ['mais', 'donc', 'car', 'ainsi'],
            'True, this idea is appealing, but it is unrealistic.',
            {
              lesson: 'fr-c12-connecteurs',
              explanation: 'Certes … mais concedes a point before disagreeing.',
            },
          ),
          gap(
            'c6',
            'Il a étudié le sujet ; ___, il a très bien répondu.',
            'ainsi',
            ['ainsi', 'pourtant', 'en revanche', 'or'],
            'He studied the subject; thus he answered very well.',
            { lesson: 'fr-c12-connecteurs', explanation: 'Ainsi introduces the result.' },
          ),
        ],
      },
      5,
    ),

    act(
      U,
      'gap-modes',
      'gapfill',
      'Which mood after the conjunction?',
      'Choose the verb form: indicative or subjunctive.',
      ['grammar', 'fr-c12-indicatif-subjonctif'],
      3,
      {
        items: [
          gap(
            'm1',
            'Après qu’il ___ parlé, la salle a applaudi.',
            'a',
            ['a', 'ait', 'eût', 'aura'],
            'After he had spoken, the room applauded.',
            {
              lesson: 'fr-c12-indicatif-subjonctif',
              explanation:
                'Après que takes the indicative, although people often misuse the subjunctive.',
              why: { ait: 'Après que takes the indicative (unlike avant que).' },
            },
          ),
          gap(
            'm2',
            'Avant qu’il ne ___, relisons nos notes.',
            'parle',
            ['parle', 'parlera', 'parle-t-il', 'parlait'],
            'Before he speaks, let us reread our notes.',
            {
              lesson: 'fr-c12-indicatif-subjonctif',
              explanation: 'Avant que + subjunctive (often with ne).',
            },
          ),
          gap(
            'm3',
            'Je resterai jusqu’à ce que vous ___.',
            'compreniez',
            ['compreniez', 'comprenez', 'comprendrez', 'compreniez-vous'],
            'I will stay until you understand.',
            { lesson: 'fr-c12-indicatif-subjonctif', explanation: 'Jusqu’à ce que + subjunctive.' },
          ),
          gap(
            'm4',
            'Pendant que tu ___, je prends des notes.',
            'parles',
            ['parles', 'parlais', 'parlerais', 'parle'],
            'While you speak, I take notes.',
            { lesson: 'fr-c12-indicatif-subjonctif', explanation: 'Pendant que + indicative.' },
          ),
          gap(
            'm5',
            'Il est parti sans qu’on le ___.',
            'voie',
            ['voie', 'voit', 'verra', 'voyait'],
            'He left without anyone seeing him.',
            {
              lesson: 'fr-c12-indicatif-subjonctif',
              explanation: 'Sans que + subjunctive (with the same subject, use sans + infinitive).',
            },
          ),
          gap(
            'm6',
            'Il est parti ___ nous voir.',
            'sans',
            ['sans', 'sans que', 'avant que', 'jusqu’à ce que'],
            'He left without seeing us.',
            {
              lesson: 'fr-c12-indicatif-subjonctif',
              explanation: 'Same subject: sans + infinitive, not sans que.',
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
      'Put the words in order – connectors and moods.',
      ['grammar', 'fr-c12-connecteurs', 'fr-c12-indicatif-subjonctif'],
      3,
      {
        items: [
          sent(
            's1',
            'Ce plan est efficace ; de plus, il coûte peu.',
            'This plan is effective; moreover, it costs little.',
            'fr-c12-connecteurs',
          ),
          sent(
            's2',
            'Certes, l’idée est séduisante, mais elle est irréaliste.',
            'True, the idea is appealing, but it is unrealistic.',
            'fr-c12-connecteurs',
          ),
          sent(
            's3',
            'En définitive, je soutiens cette réforme.',
            'Ultimately, I support this reform.',
            'fr-c12-connecteurs',
          ),
          sent(
            's4',
            'Après qu’il a parlé, la salle a applaudi.',
            'After he spoke, the room applauded.',
            'fr-c12-indicatif-subjonctif',
          ),
          sent(
            's5',
            'Je parlerai jusqu’à ce que vous compreniez.',
            'I will speak until you understand.',
            'fr-c12-indicatif-subjonctif',
          ),
          sent(
            's6',
            'Il est parti sans qu’on le voie.',
            'He left without anyone seeing him.',
            'fr-c12-indicatif-subjonctif',
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
      ['spelling', 'fr-c12-argumentation'],
      2,
      {
        items: [
          scrambled('p1', 'argument', 'argument', '💬'),
          scrambled('p2', 'rhétorique', 'rhetoric', '🎭'),
          typed('p3', 'la problématique', 'central question', '❓'),
          typed('p4', 'l’éloquence', 'eloquence', '🪶'),
          dictated('p5', 'l’esprit critique', 'critical thinking'),
          dictated('p6', 'la prise de position', 'taking a stand'),
        ],
      },
    ),

    act(
      U,
      'dialogues',
      'dialogue',
      'In a debate',
      'Three conversations: a class debate, an oral exam and a conclusion.',
      ['communication', 'fr-c12-argumentation'],
      3,
      {
        scenes: [
          scene(
            'class',
            'A class debate',
            '🎙️',
            'The topic is “Faut-il interdire les téléphones à l’école ?”.',
            npc(
              'La professeure',
              'Qui veut commencer ? Quelle est votre prise de position ?',
              'Who wants to start? What is your stand?',
            ),
            you(
              'Je suis pour l’interdiction : d’abord, elle améliore la concentration.',
              [
                'Je suis pour l’interdiction : d’abord, elle améliorer la concentration.',
                'Use a conjugated verb: améliore.',
              ],
              ['Je ne sais pas, je dis ça comme ça.', 'No position and no argument.'],
            ),
            npc('La professeure', 'Un contre-argument ?', 'A counter-argument?'),
            you(
              'Certes, c’est utile, mais cet outil peut aussi aider à apprendre.',
              [
                'Certes, c’est utile, donc cet outil peut aussi aider.',
                'Certes calls for mais, not donc.',
              ],
              ['Non, aucun argument.', 'The point of the exercise is to argue.'],
            ),
          ),
          scene(
            'oral',
            'An oral exam',
            '🎓',
            'You present a point of view to the examiner.',
            npc(
              'L’examinateur',
              'Pouvez-vous introduire votre problématique ?',
              'Can you introduce your central question?',
            ),
            you(
              'Bien sûr. Je me demanderai si le télétravail est un progrès.',
              [
                'Bien sûr. Je demander si le télétravail est un progrès.',
                'Use a conjugated verb: je me demanderai.',
              ],
              ['Bien sûr, c’est trop long à expliquer.', 'It avoids the question.'],
            ),
            npc(
              'L’examinateur',
              'Et comment allez-vous structurer votre exposé ?',
              'And how will you structure your talk?',
            ),
            you(
              'D’abord, les avantages ; ensuite, les limites ; enfin, ma conclusion.',
              [
                'Ainsi, les avantages ; donc, les limites ; car, ma conclusion.',
                'Those connectors do not mark a sequence.',
              ],
              ['Je ne sais pas encore.', 'Not a good answer in an exam.'],
            ),
          ),
          scene(
            'conclusion',
            'A conclusion',
            '🏁',
            'You close a debate.',
            npc(
              'Le modérateur',
              'Il nous reste une minute pour conclure.',
              'We have one minute left to conclude.',
            ),
            you(
              'En définitive, je soutiens cette réforme, bien qu’elle ne soit pas parfaite.',
              [
                'En définitive, je soutiens cette réforme, bien qu’elle n’est pas parfaite.',
                'Bien que takes the subjunctive: soit.',
              ],
              ['Finalement, tout ça m’ennuie.', 'Not a conclusion.'],
            ),
            npc(
              'Le modérateur',
              'Merci. Quelqu’un souhaite nuancer ?',
              'Thank you. Does anyone want to qualify this?',
            ),
            you(
              'Oui : je concède ce point, pourtant la mise en œuvre me semble difficile.',
              [
                'Oui : je concède ce point, donc la mise en œuvre me semble difficile.',
                'Pourtant marks the contrast, not donc.',
              ],
              ['Non, je suis d’accord avec tout.', 'It does not nuance anything.'],
            ),
          ),
        ],
      },
      5,
    ),

    blitz(
      U,
      'Debate blitz',
      'True or false? Words, connectors and moods.',
      ['grammar', 'fr-c12-connecteurs', 'fr-c12-indicatif-subjonctif'],
      [
        tf('b1', '“En revanche” introduces an opposing point.', true),
        tf('b2', '“De plus” adds an argument in the same direction.', true),
        tf('b3', '“Après que” takes the indicative.', true),
        tf('b4', '“Avant que” takes the indicative.', false, 'It takes the subjunctive.'),
        tf('b5', '“Sans” + infinitive is used when the subject stays the same.', true),
        tf('b6', '“Jusqu’à ce que” takes the subjunctive.', true),
        tf('b7', '“Réfuter” means to confirm.', false, 'It means to prove false.'),
        tf('b8', '“Concéder” means to admit a point.', true),
        tf('b9', '“L’auditoire” is the speaker.', false, 'It is the audience.'),
        tf('b10', '“Pourtant” introduces a cause.', false, 'It introduces a contrast.'),
      ],
    ),

    challenge(
      U,
      ['vocabulary', 'grammar', 'fr-c12-argumentation'],
      [
        q(
          'c1',
          'Avant qu’il ___, relisons nos notes.',
          'parle',
          ['parlera', 'parle-t-il', 'parlait'],
          {
            lesson: 'fr-c12-indicatif-subjonctif',
          },
        ),
        q('c2', '“Nuancer” means …', 'to qualify', ['to refute', 'to repeat', 'to dispute']),
        q(
          'c3',
          'Which connector concludes?',
          'en somme',
          ['en outre', 'd’ailleurs', 'en revanche'],
          {
            lesson: 'fr-c12-connecteurs',
          },
        ),
        q('c4', 'Après qu’elle ___ parlé, nous avons voté.', 'a', ['ait', 'eût', 'aura'], {
          lesson: 'fr-c12-indicatif-subjonctif',
        }),
        q('c5', '“La problématique” is …', 'the central issue', [
          'the audience',
          'the proof',
          'the ending',
        ]),
        q(
          'c6',
          'Il est parti ___ dire au revoir.',
          'sans',
          ['sans que', 'avant que', 'après que'],
          {
            lesson: 'fr-c12-indicatif-subjonctif',
          },
        ),
        q(
          'c7',
          'Which connector adds an argument?',
          'de plus',
          ['en revanche', 'pourtant', 'ainsi'],
          {
            lesson: 'fr-c12-connecteurs',
          },
        ),
        q(
          'c8',
          'Pendant que nous ___, il écoutait.',
          'parlions',
          ['parlions-nous', 'parlerions', 'parlions-le'],
          {
            lesson: 'fr-c12-indicatif-subjonctif',
          },
        ),
      ],
    ),
  ],
};
