import { examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c2-1';

/** French C2.1: full lessons, one per `fr-c21-` mini lesson. Add the topics of a unit with the unit. */
export const FRC21_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c21-word-formation',
    title: 'Prefixes and suffixes',
    tagline: 'Read a new word from its parts',
    level: LEVEL,
    summary:
      'A prefix changes the meaning of a word (in- = not, dé- = undo, sur- = too much, sous- = too little). A suffix usually changes the word class (-able makes an adjective, -ation a noun, -ment an adverb).',
    sections: [
      section(
        'prefixes',
        'Prefixes change the meaning',
        p(
          'At C2 you meet many words you have never seen. Most of them are built from a root and a prefix or suffix, so you can often guess the meaning. A prefix keeps the word class and changes the idea.',
        ),
        table(
          'Common prefixes and what they add.',
          ['Prefix', 'Meaning', 'Examples'],
          [
            [
              'in-, im-, il-, ir-',
              'not, the opposite',
              'inlassable, impensable, illisible, irréprochable',
            ],
            [
              'dé-, dés-',
              'undo, remove, the opposite of an action',
              'déconseiller, démystifier, désobéir',
            ],
            ['mé-, més-', 'wrongly, badly', 'méconnaissable, méfiance, mésentente'],
            ['sur-', 'too much, above', 'surestimer, surpeuplé, surcharger'],
            ['sous-', 'too little, below', 'sous-estimer, sous-payé, sous-alimenté'],
          ],
        ),
        examples(
          ['Cette tache est indélébile.', 'This stain is indelible (it cannot be rubbed out).'],
          ['Il a sous-estimé la difficulté.', 'He underestimated the difficulty.'],
          ['Le suspect reste insaisissable.', 'The suspect remains elusive.'],
        ),
      ),
      section(
        'spelling',
        'Spelling and traps',
        p(
          'The negative **in-** changes before some letters: **im-** before b, m and p (impensable), **il-** before l (illisible) and **ir-** before r (irréprochable).',
        ),
        mistake(
          'Watch out',
          '✗ inlisible  ✓ illisible',
          '✗ inréprochable  ✓ irréprochable',
          '✗ sur-estimer (underestimate)  ✓ sous-estimer',
        ),
        tip(
          'Not every in- is negative',
          'In-, im- and ir- can also be part of the root: insister, important, irriter. If the word without the prefix does not exist, it is probably not a prefix.',
        ),
      ),
      section(
        'suffixes',
        'Suffixes change the word class',
        p(
          'A suffix goes after the root and usually gives a new word class. Knowing the suffix tells you whether a word is a noun, an adjective or an adverb.',
        ),
        table(
          'Common suffixes and the word class they make.',
          ['Suffix', 'Makes', 'Idea', 'Examples'],
          [
            ['-able, -ible', 'adjective', 'can be …ed', 'aimable, visible, accessible'],
            ['-ation', 'noun', 'the action', 'augmentation, incitation'],
            ['-ité', 'noun', 'a characteristic', 'vivacité, félicité'],
            ['-esse', 'noun', 'a quality', 'gentillesse, petitesse'],
            ['-eur', 'noun', 'the person who does it', 'buveur, raseur'],
            ['-ment', 'adverb', 'the manner', 'naturellement, automatiquement'],
          ],
        ),
      ),
    ],
    related: ['fr-adjectives'],
    sources: [S.prefixes, S.suffixes],
  },
];
