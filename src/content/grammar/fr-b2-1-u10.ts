import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 10 (Cités). */
export const FRB21_U10_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-relative-pronouns',
    title: 'Relative pronouns: qui, que, où, dont',
    tagline:
      'La ville qui attire, la ville que j’aime, la ville où j’habite, la ville dont je parle',
    level: LEVEL,
    summary:
      'A relative pronoun joins a clause to a noun and replaces it in the clause. Qui replaces a subject, que a direct object, où a place or a time, dont something introduced by de.',
    sections: [
      section(
        'four',
        'Four pronouns, four jobs',
        table(
          'What each pronoun replaces.',
          ['Pronoun', 'Replaces', 'Example'],
          [
            ['qui', 'the subject', 'C’est une ville qui attire beaucoup de touristes.'],
            ['que (qu’)', 'the direct object', 'Le quartier que je préfère est le centre.'],
            [
              'où',
              'a place or a time',
              'La ville où j’habite est calme. Le jour où nous sommes arrivés, il pleuvait.',
            ],
            ['dont', 'de + noun', 'Voici l’architecte dont je t’ai parlé.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ La ville que j’habite.  ✓ La ville où j’habite.',
          '✗ Le film que je parle.  ✓ Le film dont je parle.',
          '✗ Les gens que vivent ici.  ✓ Les gens qui vivent ici.',
        ),
        tip(
          'Quick test',
          'Look at what follows the pronoun. If a verb follows directly, use qui. If a subject and a verb follow, use que (or où / dont).',
        ),
      ),
      section(
        'dont',
        'Dont in detail',
        p(
          '**Dont** replaces **de + noun**. It appears with verbs and adjectives that take de (*parler de, avoir besoin de, rêver de, être fier de*) and it means **whose** when it shows possession: *une ville dont le patrimoine est exceptionnel.* After dont, the noun keeps its article and comes right after the pronoun.',
        ),
        compare(
          {
            title: 'with de',
            question: 'Does the verb take de?',
            example: 'Le projet dont tout le monde parle.',
          },
          {
            title: 'whose',
            question: 'Does it show possession?',
            example: 'Une ville dont le patrimoine est exceptionnel.',
          },
        ),
        examples(
          ['Les gens qui vivent ici aiment le calme.', 'The people who live here like the quiet.'],
          ['La rue où je suis né a disparu.', 'The street where I was born has disappeared.'],
        ),
      ),
    ],
    related: ['fr-relative-ce'],
    sources: [S.relatif, S.relative],
  },
  {
    id: 'fr-relative-ce',
    title: 'Ce qui, ce que, ce dont',
    tagline: 'Ce qui me plaît, ce que je cherche, ce dont j’ai besoin',
    level: LEVEL,
    summary:
      'When there is no noun to refer back to, French uses ce + qui, que or dont to mean “what” or “the thing that”. The choice follows the same logic as qui, que and dont: subject, direct object, de + idea.',
    sections: [
      section(
        'forms',
        'The three forms',
        table(
          'Without an antecedent.',
          ['Form', 'Role', 'Example'],
          [
            ['ce qui', 'subject', 'Ce qui me plaît, c’est le calme.'],
            ['ce que (ce qu’)', 'direct object', 'Ce que je cherche, c’est un appartement.'],
            ['ce dont', 'de + idea', 'Ce dont j’ai besoin, c’est d’un espace vert.'],
            ['ce à quoi', 'à + idea', 'Ce à quoi je pense, c’est mon voyage.'],
          ],
        ),
        p(
          'After **tout**, **rien** and **quelque chose** the form is the same: *Tout ce qui brille n’est pas or. Je ne comprends rien à ce qui se passe.* The highlighting phrase *Ce qui … c’est …* is very common in speech.',
        ),
        mistake(
          'Watch out',
          '✗ Ce que me plaît.  ✓ Ce qui me plaît.',
          '✗ Ce que j’ai besoin.  ✓ Ce dont j’ai besoin.',
        ),
        examples(
          ['Dis-moi ce que tu penses.', 'Tell me what you think.'],
          ['C’est exactement ce dont je rêvais.', 'It is exactly what I was dreaming of.'],
        ),
      ),
      section(
        'link',
        'Same logic as qui, que, dont',
        compare(
          {
            title: 'With a noun',
            question: 'Is there a noun before?',
            example: 'La chose qui me plaît, c’est le calme.',
          },
          {
            title: 'Without a noun',
            question: 'Is it “what”?',
            example: 'Ce qui me plaît, c’est le calme.',
          },
        ),
        tip(
          'Choose quickly',
          'If the verb needs “de” (avoir besoin de, rêver de, parler de), choose ce dont. If a subject follows (je, tu, il …), choose ce que. If a verb follows directly, choose ce qui.',
        ),
      ),
    ],
    related: ['fr-relative-pronouns'],
    sources: [S.relatif, S.relative],
  },
];
