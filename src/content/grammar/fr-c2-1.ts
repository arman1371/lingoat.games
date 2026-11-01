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
  {
    id: 'fr-c21-wordplay',
    title: 'Homophones and paronyms',
    tagline: 'Words that sound or look alike',
    level: LEVEL,
    summary:
      'Homophones are pronounced the same and spelt differently (mer, mère, maire). Paronyms are nearly alike in form but have different meanings (effraction / infraction). Puns (calembours) are built on both, and on words with several meanings.',
    sections: [
      section(
        'homophones',
        'Homophones: same sound, different spelling',
        p(
          'French has many homophones, which is a frequent source of spelling mistakes. They differ in writing, so context and grammar tell you which one to write. Words that are spelt the same but pronounced differently are **homographs** (ferment, the verb, and ferment, the noun).',
        ),
        examples(
          ['La mer est calme.', 'The sea is calm.'],
          ['Ma mère est maire de la ville.', 'My mother is the mayor of the town.'],
          ['Il suit un cours. – Je suis en retard.', 'Suit (follows) and suis (am) sound the same.'],
        ),
        tip(
          'Check the sentence, not the sound',
          'When two words sound the same, ask what role the word plays: a noun, a verb, a preposition? That tells you the spelling.',
        ),
      ),
      section(
        'paronyms',
        'Paronyms: nearly alike, different meaning',
        p(
          '**Paronyms** differ by one sound or one letter, so they are easy to mix up, even for native speakers. At C2 the exact word matters, especially in legal, economic and formal writing.',
        ),
        table(
          'Paronyms met in this unit and what they mean.',
          ['Pair', 'First word', 'Second word'],
          [
            [
              'effraction / infraction',
              'forced entry, a break-in',
              'an offence, a breach of a rule',
            ],
            ['éminent / imminent', 'distinguished', 'about to happen'],
            ['conjecture / conjoncture', 'a guess', 'the economic situation'],
            ['collusion / collision', 'a secret agreement to cheat', 'a crash'],
            ['prodigue / prodige', 'wasteful with money', 'a wonder, a gifted child'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ une chute éminente du gouvernement  ✓ une chute imminente',
          '✗ la conjecture économique  ✓ la conjoncture économique',
        ),
      ),
      section(
        'puns',
        'Puns play on both',
        p(
          'A **calembour** is a word game based on homophony and polysemy, one word with several meanings. A small change in intonation can steer a sentence towards one meaning or the other, so puns often work better aloud than in writing. To catch a pun, ask which second meaning or which look-alike word the speaker is pointing at.',
        ),
      ),
    ],
    related: ['fr-c21-word-formation'],
    sources: [S.paronymy, S.homophone, S.pun],
  },
];
