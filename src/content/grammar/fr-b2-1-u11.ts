import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 11 (Logement). */
export const FRB21_U11_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-lequel',
    title: 'Compound relatives: lequel, auquel, duquel',
    tagline: 'L’appartement dans lequel j’habite, les problèmes auxquels nous faisons face',
    level: LEVEL,
    summary:
      'After a preposition, a thing is referred to with lequel, laquelle, lesquels or lesquelles, which agree with the noun. With à and de they contract: auquel, auxquels, auxquelles and duquel, desquels, desquelles.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Agreement and contractions.',
          ['Preposition', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'],
          [
            ['after dans, par, pour, avec …', 'lequel', 'laquelle', 'lesquels', 'lesquelles'],
            ['with à', 'auquel', 'à laquelle', 'auxquels', 'auxquelles'],
            ['with de', 'duquel', 'de laquelle', 'desquels', 'desquelles'],
          ],
        ),
        p(
          'The pronoun agrees with the **noun it replaces**, not with the verb: *l’appartement dans lequel*, *la fenêtre par laquelle*, *les murs entre lesquels*.',
        ),
        mistake(
          'Watch out',
          '✗ La fenêtre par lequel on voit la mer.  ✓ La fenêtre par laquelle on voit la mer.',
          '✗ Les problèmes à lesquels nous faisons face.  ✓ Les problèmes auxquels nous faisons face.',
        ),
        examples(
          [
            'La raison pour laquelle j’ai déménagé est simple.',
            'The reason why I moved is simple.',
          ],
          [
            'Les questions auxquelles il a répondu étaient difficiles.',
            'The questions he answered were hard.',
          ],
        ),
      ),
      section(
        'duquel',
        'Duquel after a prepositional phrase',
        p(
          'Prepositional phrases that end in **de** (au pied de, au centre de, à côté de, près de, au bout de) take **duquel / de laquelle**, not dont: *l’immeuble au pied duquel il y a un parc.* The same applies to **à l’intérieur de** and **à cause de**.',
        ),
        tip(
          'Spot the preposition',
          'Look at the verb or expression before the pronoun. Penser à, tenir à, répondre à, être confronté à → auquel. Au centre de, près de → duquel.',
        ),
      ),
    ],
    related: ['fr-relative-choice', 'fr-relative-pronouns'],
    sources: [S.relatif, S.relative],
  },
  {
    id: 'fr-relative-choice',
    title: 'Choosing the right relative pronoun',
    tagline: 'qui, dont, où or lequel?',
    level: LEVEL,
    summary:
      'For people after a preposition use preposition + qui. For things use lequel and its forms. Dont replaces de + noun, also to say whose. Où replaces a place or a time and often avoids a heavy dans lequel.',
    sections: [
      section(
        'choose',
        'A decision path',
        table(
          'Which pronoun?',
          ['Situation', 'Pronoun', 'Example'],
          [
            ['subject', 'qui', 'La personne qui partage l’appartement est sympa.'],
            ['direct object', 'que', 'La personne que je connais est sympa.'],
            [
              'person after a preposition',
              'à / chez / avec + qui',
              'L’ami chez qui j’habite est absent.',
            ],
            [
              'thing after a preposition',
              'dans / par / pour + lequel',
              'La fenêtre par laquelle on voit la mer.',
            ],
            ['de + noun, whose', 'dont', 'La cuisine dont les murs sont blancs est lumineuse.'],
            ['place or time', 'où', 'La ville où je travaille est loin.'],
          ],
        ),
        compare(
          {
            title: 'où',
            question: 'Place or time?',
            example: 'La ville où je travaille.',
          },
          {
            title: 'dans laquelle',
            question: 'Formal alternative',
            example: 'La ville dans laquelle je travaille.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Le propriétaire à lequel je paie.  ✓ Le propriétaire à qui je paie.',
          '✗ L’immeuble au pied dont il y a un parc.  ✓ L’immeuble au pied duquel il y a un parc.',
        ),
        examples(
          [
            'Le propriétaire à qui je paie le loyer est absent.',
            'The landlord I pay the rent to is away.',
          ],
          [
            'La cuisine dont les murs sont blancs est lumineuse.',
            'The kitchen whose walls are white is bright.',
          ],
        ),
      ),
      section(
        'tip',
        'Simplifying',
        tip(
          'Keep it light',
          'In speech, où and dont replace most heavy forms. In formal writing you will need lequel and duquel for the prepositions that dont and où cannot replace.',
        ),
        p(
          'When a sentence feels heavy, split it in two: *Voici l’appartement. J’y habite.* → *Voici l’appartement où j’habite.*',
        ),
      ),
    ],
    related: ['fr-lequel'],
    sources: [S.relatif, S.relative],
  },
];
