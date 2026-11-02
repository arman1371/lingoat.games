import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 6 (Migrations). */
export const FRB21_U6_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-cause-conjunctions',
    title: 'Giving a reason: conjunctions',
    tagline: 'parce que, puisque, comme, car, étant donné que',
    level: LEVEL,
    summary:
      'Several conjunctions introduce a reason, and each has its own job. They are followed by a verb in the indicative: parce que gives new information, puisque a reason both people know, comme starts a sentence, car follows a comma.',
    sections: [
      section(
        'choose',
        'Which one to choose?',
        table(
          'The main causal conjunctions.',
          ['Conjunction', 'Use', 'Example'],
          [
            [
              'parce que',
              'a new reason, often answering “pourquoi ?”',
              'Elle est partie parce qu’elle ne trouvait pas de travail.',
            ],
            [
              'puisque',
              'a reason the listener knows already',
              'Puisque tu connais la ville, guide-nous.',
            ],
            [
              'comme',
              'a reason placed first in the sentence',
              'Comme il n’avait pas de papiers, il ne pouvait pas travailler.',
            ],
            [
              'car',
              'a written reason after a comma; never at the start',
              'Elle est restée, car son fils était malade.',
            ],
            [
              'étant donné que, vu que, du fait que',
              'formal: given that',
              'Étant donné que le consulat est fermé, revenez demain.',
            ],
            [
              'd’autant que',
              'an additional reason: all the more since',
              'J’ai le mal du pays, d’autant que ma famille me manque.',
            ],
          ],
        ),
        compare(
          {
            title: 'New information',
            question: 'Is the reason the answer to “pourquoi ?”',
            example: 'Pourquoi es-tu parti ? Parce que j’avais peur.',
          },
          {
            title: 'Known information',
            question: 'Do both people already know it?',
            example: 'Puisque tu as peur, restons ici.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Car il avait peur, il est parti.  ✓ Comme il avait peur, il est parti.',
          '✗ Elle est partie à cause qu’elle n’avait pas de travail.  ✓ Elle est partie parce qu’elle n’avait pas de travail.',
        ),
      ),
      section(
        'answer',
        'Answering “pourquoi ?”',
        p(
          'To answer a question, use **parce que**, not comme, car or puisque: *— Pourquoi êtes-vous parti ? — Parce que je ne trouvais pas de travail.* Alone, **Parce que…** can answer a question, while **car** cannot.',
        ),
        tip(
          'Mood',
          'These conjunctions take the indicative. Only “non pas que …” (not because …) is followed by the subjunctive: *Il part, non pas qu’il soit malheureux, mais il veut voyager.*',
        ),
        examples(
          ['Comme il pleuvait, nous sommes restés.', 'As it was raining, we stayed.'],
          ['Il est resté, car il avait peur.', 'He stayed, for he was afraid.'],
        ),
      ),
    ],
    related: ['fr-cause-prepositions'],
    sources: [S.conjonction, S.circonstancielle],
  },
  {
    id: 'fr-cause-prepositions',
    title: 'Giving a reason: prepositions',
    tagline: 'à cause de, grâce à, en raison de, faute de, à force de',
    level: LEVEL,
    summary:
      'To give a reason with a noun instead of a verb, use a preposition. À cause de is neutral or negative, grâce à positive, en raison de formal, faute de means lack of and à force de means by dint of repeating something.',
    sections: [
      section(
        'table',
        'The causal prepositions',
        table(
          'Followed by a noun (or an infinitive for à force de).',
          ['Preposition', 'Meaning', 'Example'],
          [
            ['à cause de', 'because of (negative or neutral)', 'Ils ont fui à cause de la guerre.'],
            ['grâce à', 'thanks to (positive)', 'Grâce à une association, il a obtenu un visa.'],
            [
              'en raison de',
              'because of (formal, neutral)',
              'Il a été expulsé en raison de son retard.',
            ],
            ['faute de', 'for lack of', 'Faute de temps, il n’a pas fini.'],
            ['à force de + infinitive', 'by dint of', 'À force de travailler, il a réussi.'],
          ],
        ),
        p(
          'Remember the contractions: **à cause du** chômage, **grâce aux** efforts, **en raison des** événements.',
        ),
        mistake(
          'Watch out',
          '✗ À cause de il pleut.  ✓ À cause de la pluie. / Parce qu’il pleut.',
          '✗ Grâce à la guerre, ils sont partis.  ✓ À cause de la guerre, ils sont partis.',
        ),
        examples(
          [
            'Grâce aux aides, ils ont pu s’installer.',
            'Thanks to the aid, they were able to settle.',
          ],
          ['Faute d’argent, elle est restée.', 'For lack of money, she stayed.'],
        ),
      ),
      section(
        'choice',
        'Conjunction or preposition?',
        compare(
          {
            title: 'Conjunction',
            question: 'Is there a verb after the connector?',
            example: 'parce qu’il avait peur',
          },
          {
            title: 'Preposition',
            question: 'Is there a noun after the connector?',
            example: 'à cause de sa peur',
          },
        ),
        tip(
          'Nominalisation',
          'Turning a verb into a noun lets you use a preposition: *parce qu’il y a eu une guerre → à cause de la guerre.* This style is common in written French.',
        ),
      ),
    ],
    related: ['fr-cause-conjunctions'],
    sources: [S.circonstancielle, S.conjonction],
  },
];
