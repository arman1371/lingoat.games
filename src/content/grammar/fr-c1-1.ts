import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c1-1';

/** French C1.1: the grammar of the units, one topic per mini lesson. */
export const FRC11_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c11-connectors',
    title: 'Connectors: cause, consequence, addition',
    tagline: 'How do I link reasons, results and extra arguments precisely?',
    level: LEVEL,
    summary:
      'At C1 you choose the connector for the register and for the grammar around it. Cause: car, parce que, puisque, comme and étant donné que take a clause; grâce à, à cause de, en raison de and faute de take a noun. Consequence: donc, par conséquent, c’est pourquoi, si bien que. Addition: de plus, en outre, par ailleurs.',
    sections: [
      section(
        'cause',
        'Giving a reason',
        p(
          'French has several ways to say “because”, and they are not interchangeable. **Parce que** is the neutral answer to *pourquoi ?*. **Car** is more written: it joins two clauses and never opens a sentence. **Puisque** presents a reason that the listener already knows or accepts. **Comme** opens the sentence, and **étant donné que** is a formal choice.',
        ),
        table(
          'Connectors that introduce a reason (followed by a clause).',
          ['Connector', 'How it behaves', 'Example'],
          [
            [
              'parce que',
              'answers pourquoi; works in speech and writing',
              'Il hésite parce que la source est douteuse.',
            ],
            [
              'car',
              'written; joins two clauses with a comma before it',
              'Il hésite, car la source est douteuse.',
            ],
            [
              'puisque',
              'the reason is already known or obvious',
              'Puisque tout le monde en parle, vérifions.',
            ],
            [
              'comme',
              'opens the sentence; the main clause follows',
              'Comme il pleuvait, le reportage a été tourné en studio.',
            ],
            [
              'étant donné que',
              'formal; the reason is a given fact',
              'Étant donné que la source est anonyme, je doute.',
            ],
          ],
        ),
        p(
          'Before a **noun group** you need a preposition instead: **grâce à** (the cause has a good effect), **à cause de** (a bad effect or a reproach), **en raison de** (neutral and formal, common in announcements) and **faute de** (for lack of).',
        ),
        table(
          'Connectors that introduce a reason (followed by a noun).',
          ['Connector', 'Tone of the result', 'Example'],
          [
            ['grâce à', 'positive', 'Le site a gagné des abonnés grâce à son enquête.'],
            [
              'à cause de',
              'negative or blaming',
              'La manifestation a été annulée à cause de la grève.',
            ],
            [
              'en raison de',
              'neutral, formal',
              'Le site a été fermé en raison de plusieurs plaintes.',
            ],
            ['faute de', 'something is missing', 'Le procès a été abandonné faute de preuves.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Car il pleuvait, nous sommes restés.  ✓ Comme il pleuvait, nous sommes restés.',
          '✗ Grâce à la grève, le train est annulé.  ✓ À cause de la grève, le train est annulé.',
          '✗ À cause de il pleuvait.  ✓ À cause de la pluie. / Parce qu’il pleuvait.',
        ),
      ),
      section(
        'consequence',
        'Giving a result',
        p(
          'To say what follows from a fact, use **donc** (neutral and short), **par conséquent** or **ainsi** (more formal), **c’est pourquoi** (the result of what you have just said) or **si bien que** (a result stated in the same sentence). They are all followed by the indicative.',
        ),
        table(
          'Connectors that introduce a result.',
          ['Connector', 'Position', 'Example'],
          [
            [
              'donc',
              'movable: before or after the verb',
              'Les ventes ont baissé, donc la rédaction a réduit ses coûts. / … la rédaction a donc réduit ses coûts.',
            ],
            [
              'par conséquent',
              'after a full stop or a semicolon, with a comma',
              'L’information était fausse ; par conséquent, le journal l’a retirée.',
            ],
            [
              'c’est pourquoi',
              'at the start of a new clause',
              'Les lecteurs ont perdu confiance ; c’est pourquoi le journal a changé de ligne.',
            ],
            [
              'si bien que',
              'joins two clauses in one sentence',
              'Les ventes ont chuté, si bien que le journal a dû réduire sa rédaction.',
            ],
          ],
        ),
        tip(
          'Donc moves',
          'Donc is an adverb, so it can sit after the verb: *Il a donc décidé de publier.* The other connectors stay in front of the clause.',
        ),
      ),
      section(
        'addition',
        'Adding an argument and explaining',
        p(
          'To stack arguments, use **de plus**, **en outre** (more formal), **par ailleurs** (a different side of the question) or **de surcroît** (literary). They usually open the sentence and are followed by a comma. **En effet** does something different: it introduces the explanation or the proof of what you have just said.',
        ),
        examples(
          [
            'L’article est bien documenté. De plus, il cite des sources variées.',
            'The article is well documented. What is more, it cites varied sources.',
          ],
          [
            'Ce reportage est excellent ; par ailleurs, il est très bien illustré.',
            'This report is excellent; besides, it is very well illustrated.',
          ],
          [
            'La vidéo est fausse. En effet, elle a été montée.',
            'The video is fake. Indeed, it was edited.',
          ],
        ),
        compare(
          {
            title: 'de plus / en outre / par ailleurs',
            question: 'Another argument',
            example: 'Il parle trois langues. De plus, il connaît le terrain.',
          },
          {
            title: 'en effet',
            question: 'The proof of what I said',
            example: 'La vidéo est fausse. En effet, elle a été montée.',
          },
          {
            title: 'donc / par conséquent',
            question: 'What follows from it',
            example: 'La vidéo est fausse ; par conséquent, nous la retirons.',
          },
        ),
      ),
    ],
    related: [],
    sources: [S.connectors, S.coordination, S.puisque, S.graceA],
  },
];
