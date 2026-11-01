import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c1-2';

/** French C1.2, unit 1 (games): the three jobs of the -ant form. */
export const FRC12_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c12-participe-present',
    title: 'Participe présent (-ant)',
    tagline: 'A verb form that never agrees',
    level: LEVEL,
    summary:
      'Take the nous form of the present, drop -ons and add -ant. Only être, avoir and savoir are irregular. The participle does not agree, and in writing it replaces a qui clause or gives a reason.',
    sections: [
      section(
        'forms',
        'How to form it',
        table(
          'From the nous form to the participle.',
          ['Infinitive', 'nous …', 'Participe présent'],
          [
            ['jouer', 'nous jouons', 'jouant'],
            ['finir', 'nous finissons', 'finissant'],
            ['faire', 'nous faisons', 'faisant'],
            ['prendre', 'nous prenons', 'prenant'],
            ['manger', 'nous mangeons', 'mangeant'],
            ['commencer', 'nous commençons', 'commençant'],
            ['être', '(nous sommes)', 'étant'],
            ['avoir', '(nous avons)', 'ayant'],
            ['savoir', '(nous savons)', 'sachant'],
          ],
          6,
        ),
        tip(
          'Spelling',
          'Verbs in -ger and -cer keep their e and ç before -ant: mangeant, commençant.',
        ),
      ),
      section(
        'uses',
        'What it does in a sentence',
        p(
          'The participle works like a verb: it can have an object, an adverb or a negation, and it **never agrees**. It is typical of written French and has two main jobs.',
        ),
        compare(
          {
            title: 'Replaces qui + verb',
            question: 'Which person or thing?',
            example: 'Je cherche un joueur connaissant les règles. (= qui connaît)',
          },
          {
            title: 'Gives a reason or a circumstance',
            question: 'Why? Under what circumstances?',
            example: 'Étant endetté, il a vendu sa voiture. (= comme il était endetté)',
          },
        ),
        p(
          'For an action that happened **before** the main verb use the compound participle: **ayant** or **étant** + past participle. *Ayant tout perdu, elle a arrêté de jouer.*',
        ),
        examples(
          [
            'Sachant que la partie était perdue, il a abandonné.',
            'Knowing the game was lost, he gave up.',
          ],
          [
            'Les joueurs gagnant beaucoup restent discrets.',
            'Players who win a lot stay discreet.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Elle a une voisine connaissante les règles.  ✓ … connaissant les règles. (with a complement the participle is invariable)',
          '✗ Savant que tout était perdu …  ✓ Sachant que tout était perdu …',
        ),
      ),
    ],
    related: ['fr-c12-gerondif', 'fr-c12-adjectif-verbal'],
    sources: [S.participePresentFr, S.participePresent, S.savoir],
  },
  {
    id: 'fr-c12-gerondif',
    title: 'Gérondif (en jouant)',
    tagline: 'How, when or if: en + -ant',
    level: LEVEL,
    summary:
      'The gérondif is en followed by the -ant form. It says how or when something happens, it never agrees, and its subject is always the subject of the main verb.',
    sections: [
      section(
        'form',
        'Form and rule',
        p(
          'Put **en** in front of the participle: *en jouant, en finissant, en faisant*. Être, avoir and savoir use their irregular stems: *en étant, en ayant, en sachant*. The gérondif has no endings of its own and no subject of its own: the person who acts is the subject of the main verb.',
        ),
        examples(
          ['Il a perdu gros en jouant au casino.', 'He lost a lot by playing at the casino.'],
          [
            'Elle progresse en s’entraînant chaque jour.',
            'She makes progress by training every day.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il s’est ruiné en parié.  ✓ Il s’est ruiné en pariant.',
          '✗ En jouant, la nuit est passée vite.  ✓ En jouant, nous n’avons pas vu la nuit passer. (the same person acts)',
        ),
      ),
      section(
        'values',
        'What it can express',
        table(
          'Common meanings of the gérondif.',
          ['Meaning', 'Example'],
          [
            ['by (means, manner)', 'On apprend les règles en jouant.'],
            ['while (at the same time)', 'Il parle en riant.'],
            ['if (condition)', 'En jouant mieux, tu gagnerais.'],
            ['while still … (opposition)', 'Elle regarde le match tout en travaillant.'],
          ],
        ),
        tip(
          'tout en + -ant',
          'Add tout to stress that two actions happen together, often when they do not fit together: tout en regardant le match, il faisait ses devoirs.',
        ),
      ),
    ],
    related: ['fr-c12-participe-present', 'fr-c12-adjectif-verbal'],
    sources: [S.gerondif, S.participePresentFr],
  },
  {
    id: 'fr-c12-adjectif-verbal',
    title: 'Adjectif verbal (passionnant)',
    tagline: 'When the -ant word is an adjective',
    level: LEVEL,
    summary:
      'An adjectif verbal describes a noun and agrees with it like any adjective. The participle stays invariable. A few pairs differ in spelling, such as fatigant (adjective) and fatiguant (participle).',
    sections: [
      section(
        'agree',
        'It agrees like any adjective',
        p(
          'Test it: if you can put **très** in front of the word, or replace it with another adjective, it is an adjectif verbal and it agrees: *une partie très passionnante, des résultats décevants*.',
        ),
        table(
          'Adjective or participle?',
          ['Test', 'Adjectif verbal', 'Participe présent'],
          [
            ['Agreement', 'yes: passionnante, décevants', 'never'],
            ['Object or adverb', 'no', 'possible: connaissant les règles'],
            ['Can follow être or très', 'yes: Ce jeu est captivant.', 'no'],
            ['Example', 'Des parties passionnantes.', 'Des joueurs gagnant beaucoup.'],
          ],
        ),
        examples(
          ['Ce jeu de société est vraiment captivant.', 'This board game is really captivating.'],
          ['Les résultats ont été décevants.', 'The results were disappointing.'],
        ),
      ),
      section(
        'spelling',
        'Different spelling',
        p(
          'Some verbs spell the adjective differently from the participle. Learn the pairs; a mix-up is a typical written mistake.',
        ),
        table(
          'Adjective and participle side by side.',
          ['Adjectif verbal', 'Participe présent'],
          [
            ['une soirée fatigante', 'en se fatiguant'],
            ['des arguments convaincants', 'en convainquant ses amis'],
            ['un ton provocant', 'en provoquant le jury'],
            ['des règles différentes', 'des règles différant de celles-ci'],
          ],
        ),
        tip(
          'Rule of thumb',
          'The adjective often keeps the sound of the infinitive in a simpler spelling: fatigant (no u), convaincant (c, not qu), différent (-ent).',
        ),
      ),
    ],
    related: ['fr-c12-participe-present', 'fr-c12-gerondif', 'fr-adjectives'],
    sources: [S.participePresent, S.fatigant, S.convaincant],
  },
];
