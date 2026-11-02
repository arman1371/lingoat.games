import { compare, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b2-2';

/** French B2.2, units 7 to 12: economy, history, territories, society, climate, debate. */
export const FR22B_TOPICS_C: GrammarTopic[] = [
  {
    id: 'fr-b22-concession',
    title: 'Contrast and concession',
    tagline: 'bien que · même si · malgré · pourtant',
    level: LEVEL,
    summary:
      'Concession admits a fact and then opposes another. Bien que, quoique and sans que take the subjunctive; même si, alors que and tandis que take the indicative; malgré and en dépit de take a noun; avoir beau takes an infinitive.',
    sections: [
      section(
        'connectors',
        'Connectors and what follows',
        table(
          'Concession connectors.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['bien que, quoique', 'subjunctive', 'Bien qu’il soit cher, il se vend bien.'],
            [
              'même si, alors que, tandis que',
              'indicative',
              'Même si les prix montent, nous continuons.',
            ],
            ['malgré, en dépit de', 'a noun', 'Malgré la crise, les exportations progressent.'],
            ['avoir beau', 'infinitive', 'Il a beau essayer, il échoue.'],
            [
              'pourtant, cependant, néanmoins',
              'a new clause',
              'Le produit est cher ; pourtant, il se vend bien.',
            ],
            [
              'certes … mais',
              'concession + objection',
              'Certes, le prix est élevé, mais la qualité est excellente.',
            ],
          ],
        ),
      ),
      section(
        'traps',
        'Frequent mistakes',
        mistake(
          'Watch out',
          '✗ Bien que il est riche.  ✓ Bien qu’il soit riche.',
          '✗ Malgré il pleut.  ✓ Malgré la pluie. / Bien qu’il pleuve.',
          '✗ Il a beau essaie.  ✓ Il a beau essayer.',
        ),
        tip(
          'Same subject',
          'When both clauses share a subject, a participle or a noun phrase is often lighter: Bien que fatigué, il a continué.',
        ),
      ),
    ],
    related: ['fr-b22-comparison', 'fr-b22-cause'],
    sources: [S.subordinateAdverbial, S.connector],
  },
  {
    id: 'fr-b22-comparison',
    title: 'Comparing',
    tagline: 'plus … plus · de plus en plus · autant … que',
    level: LEVEL,
    summary:
      'Compare with plus, moins or aussi + adjective/adverb + que, and with plus de, moins de or autant de + noun + que. Bon has the comparative meilleur, bien has mieux. Plus … plus, de plus en plus and d’autant plus … que express proportion and progression.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Degrees of comparison.',
          ['Meaning', 'Adjective / adverb', 'Noun'],
          [
            ['more', 'plus rapide que', 'plus de clients que'],
            ['less', 'moins cher que', 'moins de dettes que'],
            ['as much', 'aussi rapide que', 'autant de clients que'],
          ],
        ),
        p(
          'Irregular forms: **bon → meilleur** (adjective), **bien → mieux** (adverb). The superlative adds the article: *le plus intéressant*, *le moins cher*, *le meilleur*.',
        ),
      ),
      section(
        'proportion',
        'Proportion and progression',
        compare(
          {
            title: 'plus … plus',
            question: 'proportion',
            example: 'Plus on dépense, plus on s’endette.',
          },
          {
            title: 'de plus en plus',
            question: 'progression',
            example: 'De plus en plus de gens achètent d’occasion.',
          },
          {
            title: 'd’autant plus … que',
            question: 'all the more as',
            example: 'Ils sont d’autant plus exigeants que les prix augmentent.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Elle travaille meilleur que lui.  ✓ Elle travaille mieux que lui.',
          '✗ Elle gagne autant comme moi.  ✓ Elle gagne autant que moi.',
        ),
      ),
    ],
    related: ['fr-b22-concession'],
    sources: [S.comparative, S.superlative],
  },
];
