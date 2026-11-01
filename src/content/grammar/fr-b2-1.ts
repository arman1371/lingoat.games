import { FRB21_U4_TOPICS } from './fr-b2-1-u4';
import { FRB21_U3_TOPICS } from './fr-b2-1-u3';
import { FRB21_U2_TOPICS } from './fr-b2-1-u2';
import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1: topics are added unit by unit. */
export const FRB21_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-imparfait-pc',
    title: 'Imparfait or passé composé?',
    tagline: 'Setting the scene or telling what happened',
    level: LEVEL,
    summary:
      'The imparfait describes the scene: habits, states and actions in progress. The passé composé tells the events: what happened once and is finished. Stories use both, the imparfait as the background and the passé composé as the line of events.',
    sections: [
      section(
        'imparfait',
        'Forming the imparfait',
        p(
          'Take the **nous** form of the present, drop **-ons** and add the endings. *Nous parlons* gives **parl-**, *nous finissons* gives **finiss-**. The only exception is **être**, whose stem is **ét-**.',
        ),
        table(
          'The imparfait of three verbs.',
          ['Person', 'Ending', 'parler', 'finir', 'être'],
          [
            ['je', '-ais', 'parlais', 'finissais', 'étais'],
            ['tu', '-ais', 'parlais', 'finissais', 'étais'],
            ['il/elle/on', '-ait', 'parlait', 'finissait', 'était'],
            ['nous', '-ions', 'parlions', 'finissions', 'étions'],
            ['vous', '-iez', 'parliez', 'finissiez', 'étiez'],
            ['ils/elles', '-aient', 'parlaient', 'finissaient', 'étaient'],
          ],
        ),
        p(
          'Spelling keeps the sound of the stem: *nous mangions* but *je mangeais*, *nous commencions* but *je commençais*.',
        ),
      ),
      section(
        'choose',
        'Scene or event?',
        compare(
          {
            title: 'imparfait',
            question: 'What was it like? What used to happen? What was going on?',
            example: 'Quand j’étais petit, nous allions chez ma grand-mère chaque été.',
          },
          {
            title: 'passé composé',
            question: 'What happened once, and is over?',
            example: 'En 1998, ma famille a déménagé à Montréal.',
          },
          {
            title: 'both together',
            question: 'What was going on when something happened?',
            example: 'Je faisais mes devoirs quand le téléphone a sonné.',
          },
        ),
        p(
          'The imparfait does not say when an action began or ended, so the listener needs a moment of reference: *Avant, je faisais beaucoup de sport.* The passé composé can state a fact about the past without such a reference: *Il a appris le français.*',
        ),
      ),
      section(
        'signals',
        'Words that point the way',
        table(
          'Time words are hints, not rules: check what the sentence means.',
          ['Time words', 'Usual tense', 'Example'],
          [
            [
              'souvent, toujours, chaque été, tous les jours',
              'imparfait',
              'Il venait toujours le dimanche.',
            ],
            [
              'à l’époque, autrefois, pendant que',
              'imparfait',
              'Pendant que je lisais, il dormait.',
            ],
            [
              'hier, un jour, soudain, en 1998',
              'passé composé',
              'Soudain, la porte s’est ouverte.',
            ],
            [
              'quand, ce jour-là',
              'both, depending on the meaning',
              'Quand il est entré, nous dînions.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Hier, il pleuvait à midi et il a arrêté.  ✓ Hier, il pleuvait quand je suis sorti.',
          '✗ Quand j’ai été petit, …  ✓ Quand j’étais petit, …',
          '✗ Chaque été, nous sommes allés à la mer.  ✓ Chaque été, nous allions à la mer.',
        ),
        tip(
          'A test',
          'Ask yourself: could a film show this as a single moment? Then it is an event (passé composé). If it is the setting or a repeated routine, it is a scene (imparfait).',
        ),
        examples(
          [
            'Elle était timide quand elle est arrivée en France.',
            'She was shy when she arrived in France.',
          ],
          [
            'Mes parents parlaient arabe, moi je répondais en français.',
            'My parents spoke Arabic, I answered in French.',
          ],
        ),
      ),
    ],
    related: ['fr-plus-que-parfait'],
    sources: [S.imparfait, S.passeCompose],
  },
  {
    id: 'fr-plus-que-parfait',
    title: 'The plus-que-parfait',
    tagline: 'What had already happened',
    level: LEVEL,
    summary:
      'The plus-que-parfait looks back from a past moment to something that had already happened before it. It is the auxiliary (avoir or être) in the imparfait plus the past participle.',
    sections: [
      section(
        'formation',
        'Forming the plus-que-parfait',
        p(
          'Use **avoir** or **être** in the imparfait and add the past participle. The choice of the auxiliary and the agreement of the participle are the same as in the passé composé.',
        ),
        table(
          'The plus-que-parfait with avoir and with être.',
          ['Person', 'quitter (avoir)', 'arriver (être)'],
          [
            ['je', 'j’avais quitté', 'j’étais arrivé(e)'],
            ['tu', 'tu avais quitté', 'tu étais arrivé(e)'],
            ['il/elle/on', 'il avait quitté', 'elle était arrivée'],
            ['nous', 'nous avions quitté', 'nous étions arrivé(e)s'],
            ['vous', 'vous aviez quitté', 'vous étiez arrivé(e)(s)'],
            ['ils/elles', 'ils avaient quitté', 'elles étaient arrivées'],
          ],
        ),
        p(
          'Verbs of movement and change such as **aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber** and all pronominal verbs take **être**. The participle then agrees with the subject. All other verbs take **avoir**.',
        ),
      ),
      section(
        'use',
        'When to use it',
        compare(
          {
            title: 'Before another past event',
            question: 'Which event came first?',
            example: 'Quand nous sommes arrivés, le train était déjà parti.',
          },
          {
            title: 'In reported speech',
            question: 'What did someone say about an earlier event?',
            example: 'Elle m’a dit qu’elle avait perdu ses clés.',
          },
          {
            title: 'A wish about the past',
            question: 'What did not happen? (si + plus-que-parfait)',
            example: 'Si j’avais su, je serais resté chez moi.',
          },
        ),
        p(
          'Put the earlier event in the plus-que-parfait and the later one in the passé composé or the imparfait. If the two events are told in the order they happened, you do not need the plus-que-parfait.',
        ),
        mistake(
          'Watch out',
          '✗ Elle avait arrivé à midi.  ✓ Elle était arrivée à midi.',
          '✗ Il a déjà quitté son pays quand je l’ai connu.  ✓ Il avait déjà quitté son pays quand je l’ai connu.',
          '✗ Elles étaient parti.  ✓ Elles étaient parties.',
        ),
        examples(
          [
            'Elle n’avait jamais vu la neige avant d’arriver en France.',
            'She had never seen snow before coming to France.',
          ],
          ['Je savais qu’ils étaient nés à Dakar.', 'I knew they had been born in Dakar.'],
        ),
      ),
    ],
    related: ['fr-imparfait-pc'],
    sources: [S.plusQueParfait, S.passeCompose],
  },
  ...FRB21_U2_TOPICS,
  ...FRB21_U3_TOPICS,
  ...FRB21_U4_TOPICS,
];
