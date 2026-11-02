import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 12 (La ville de demain). */
export const FRB21_U12_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-passive',
    title: 'The passive and the pronominal passive',
    tagline: 'La gare sera transformée. Ce quartier se visite à pied.',
    level: LEVEL,
    summary:
      'In the passive voice the object of the active sentence becomes the subject: être + past participle, with the doer introduced by par. French also uses a pronominal passive (se + verb) for general facts, and often prefers on or an active sentence.',
    sections: [
      section(
        'passive',
        'Être + past participle',
        p(
          'The tense is carried by **être**; the participle **agrees with the subject**. The agent, if given, comes after **par** (or sometimes **de** with feelings and states).',
        ),
        table(
          'Active and passive.',
          ['Active', 'Passive'],
          [
            ['La mairie rénove ces rues.', 'Ces rues sont rénovées par la mairie.'],
            ['La mairie a rénové ces rues.', 'Ces rues ont été rénovées par la mairie.'],
            ['On transformera la gare.', 'La gare sera transformée.'],
            ['Le conseil vote la loi.', 'La loi est votée par le conseil.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Les rues ont été rénové.  ✓ Les rues ont été rénovées.',
          '✗ La loi a été votée de le conseil.  ✓ La loi a été votée par le conseil.',
        ),
      ),
      section(
        'pronominal',
        'The pronominal passive',
        p(
          'With a thing as subject, **se + verb** states what is normally done: *Ce quartier se visite à pied. Les vélos se louent à la gare. Ça ne se fait pas.* There is no agent, and the verb agrees with the subject.',
        ),
        compare(
          {
            title: 'être + participle',
            question: 'A specific event?',
            example: 'Le parc a été fermé hier.',
          },
          {
            title: 'se + verb',
            question: 'A general rule or habit?',
            example: 'Ce parc se ferme à 22 heures.',
          },
        ),
        tip(
          'Avoid the passive',
          'French often avoids it. *On a rénové ces rues* sounds more natural in speech than *Ces rues ont été rénovées*. Use the passive when the doer is unknown, unimportant or when you want to focus on the thing.',
        ),
        examples(
          [
            'La loi a été votée par le conseil municipal.',
            'The law was voted by the city council.',
          ],
          ['Les déchets ne se jettent pas dans la rue.', 'Waste is not thrown in the street.'],
        ),
      ),
    ],
    related: ['fr-concession'],
    sources: [S.voixPassive, S.voixPronominale],
  },
  {
    id: 'fr-concession',
    title: 'Opposition and concession',
    tagline: 'bien que, alors que, même si, malgré, pourtant',
    level: LEVEL,
    summary:
      'Opposition contrasts two facts (alors que, tandis que, en revanche). Concession admits a fact but says the result is not what you expect (bien que, quoique, même si, malgré, pourtant, cependant). Bien que and quoique take the subjunctive, même si and alors que the indicative, malgré a noun.',
    sections: [
      section(
        'table',
        'Connectors and what they take',
        table(
          'Opposition and concession.',
          ['Connector', 'Takes', 'Example'],
          [
            [
              'bien que, quoique',
              'subjunctive',
              'Bien que la ville soit polluée, les habitants y restent.',
            ],
            [
              'alors que, tandis que',
              'indicative',
              'Alors que la mairie défend ce projet, les riverains s’y opposent.',
            ],
            ['même si', 'indicative (no future)', 'Même si c’est cher, c’est nécessaire.'],
            ['malgré, en dépit de', 'a noun', 'Malgré la pluie, le marché a eu lieu.'],
            [
              'pourtant, cependant, toutefois',
              'a new sentence or clause',
              'Il fait froid ; pourtant, les terrasses sont pleines.',
            ],
            [
              'en revanche, par contre',
              'contrast between two facts',
              'Le centre est calme ; en revanche, la banlieue est bruyante.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Bien que la ville est polluée.  ✓ Bien que la ville soit polluée.',
          '✗ Malgré que le projet soit utile.  ✓ Bien que le projet soit utile. / Malgré son utilité.',
          '✗ Même s’il sera cher.  ✓ Même s’il est cher.',
        ),
      ),
      section(
        'choose',
        'Verb or noun?',
        compare(
          {
            title: 'with a verb',
            question: 'Is there a clause?',
            example: 'Bien qu’il pleuve, nous sortons.',
          },
          {
            title: 'with a noun',
            question: 'Is there only a noun?',
            example: 'Malgré la pluie, nous sortons.',
          },
        ),
        tip(
          'Malgré que',
          'Many French people say *malgré que*, but careful writing avoids it. Use *bien que* or *quoique* before a verb and *malgré* before a noun.',
        ),
        examples(
          ['Quoiqu’il soit tard, nous continuons.', 'Although it is late, we keep going.'],
          [
            'Ce projet est utile ; cependant, il coûte trop cher.',
            'This project is useful; however, it costs too much.',
          ],
        ),
      ),
    ],
    related: ['fr-passive', 'fr-cause-prepositions'],
    sources: [S.conjonction, S.circonstancielle],
  },
];
