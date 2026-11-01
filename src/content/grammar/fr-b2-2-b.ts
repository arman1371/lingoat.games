import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b2-2';

/** French B2.2, units 2 to 6: health, solidarity, justice, culture, science. */
export const FR22B_TOPICS_B: GrammarTopic[] = [
  {
    id: 'fr-b22-subj-or-inf',
    title: 'Subjunctive or infinitive?',
    tagline: 'Il faut que tu dormes · Je veux dormir',
    level: LEVEL,
    summary:
      'Will, necessity, feeling and doubt are followed by the subjunctive. When both verbs have the same subject French prefers the infinitive. Belief and certainty take the indicative.',
    sections: [
      section(
        'when',
        'When the subjunctive is needed',
        p(
          'The subjunctive follows expressions of **will** (*vouloir que*, *tenir à ce que*), **necessity** (*il faut que*, *il est essentiel que*), **feeling** (*être content que*, *regretter que*, *craindre que*) and **doubt** (*douter que*, *il se peut que*). It is built on the *ils* form of the present: *ils prennent* → *que je prenne*, but *nous* and *vous* keep the imparfait stem: *que nous prenions*.',
        ),
        table(
          'Irregular subjunctives that must be learned.',
          ['Verb', 'que je / tu / il', 'que nous / vous', 'que ils'],
          [
            ['être', 'sois / sois / soit', 'soyons / soyez', 'soient'],
            ['avoir', 'aie / aies / ait', 'ayons / ayez', 'aient'],
            ['aller', 'aille / ailles / aille', 'allions / alliez', 'aillent'],
            ['faire', 'fasse / fasses / fasse', 'fassions / fassiez', 'fassent'],
            ['pouvoir', 'puisse / puisses / puisse', 'puissions / puissiez', 'puissent'],
          ],
        ),
        examples(
          ['Il faut que tu boives plus d’eau.', 'You have to drink more water.'],
          ['Je doute qu’elle ait le courage.', 'I doubt she has the courage.'],
        ),
      ),
      section(
        'same-subject',
        'Same subject: the infinitive',
        p(
          'When the subject of both verbs is the same, drop **que** and use the **infinitive**. If the subjects differ, the subjunctive is needed. Impersonal expressions without a named subject also take the infinitive: *il vaut mieux prévenir*.',
        ),
        compare(
          {
            title: 'Same subject',
            question: 'Je veux + infinitive',
            example: 'Je veux me coucher plus tôt.',
          },
          {
            title: 'Two subjects',
            question: 'Je veux que + subjunctive',
            example: 'Je veux que tu te couches plus tôt.',
          },
          {
            title: 'Belief or certainty',
            question: 'indicative',
            example: 'Je pense qu’il est malade.',
          },
        ),
        tip(
          'Negation changes the mood',
          'Je pense qu’il est malade (indicative). Je ne pense pas qu’il soit malade (subjunctive): doubt appears once the belief is denied or questioned.',
        ),
        mistake(
          'Watch out',
          '✗ Il faut que tu fais attention.  ✓ Il faut que tu fasses attention.',
          '✗ Je veux que je parte.  ✓ Je veux partir.',
        ),
      ),
    ],
    related: ['fr-b22-ne-expletif', 'fr-b22-reported-speech'],
    sources: [S.subjunctive],
  },
  {
    id: 'fr-b22-ne-expletif',
    title: 'The ne explétif',
    tagline: 'Je crains qu’il ne pleuve',
    level: LEVEL,
    summary:
      'Careful French adds a ne that carries no negation after verbs of fear, avant que, à moins que, de peur que and comparatives. It is optional and mostly written; a real negation still needs pas.',
    sections: [
      section(
        'where',
        'Where it appears',
        table(
          'Expressions that can take a ne without negative meaning.',
          ['After', 'Example', 'Meaning'],
          [
            [
              'craindre que, avoir peur que',
              'Je crains qu’il ne pleuve.',
              'I am afraid it will rain.',
            ],
            ['avant que', 'Partons avant qu’il ne pleuve.', 'Let us leave before it rains.'],
            [
              'à moins que',
              'Venez, à moins que vous ne soyez occupé.',
              'Come, unless you are busy.',
            ],
            [
              'de peur que',
              'Il parle bas de peur qu’on ne l’entende.',
              'He speaks softly for fear of being heard.',
            ],
            [
              'plus … que',
              'Il court plus vite que je ne pensais.',
              'He runs faster than I thought.',
            ],
          ],
        ),
        p(
          'The verb after these expressions is in the **subjunctive** (except after a comparative). The **ne** is dropped in speech and is never required.',
        ),
      ),
      section(
        'real',
        'Do not confuse it with a real negation',
        p(
          'A real negation uses **ne … pas** (or *jamais*, *rien* …). Compare *Je crains qu’il ne vienne* (I fear he will come) with *Je crains qu’il ne vienne pas* (I fear he will not come).',
        ),
        compare(
          {
            title: 'ne explétif',
            question: 'no negative meaning',
            example: 'Je crains qu’elle ne soit malade.',
          },
          {
            title: 'real negation',
            question: 'ne … pas',
            example: 'Je crains qu’elle ne soit pas malade.',
          },
        ),
        mistake(
          'Watch out',
          '✗ I fear she is ill → Je crains qu’elle ne soit pas malade.',
          '✓ I fear she is ill → Je crains qu’elle soit malade / qu’elle ne soit malade.',
        ),
      ),
    ],
    related: ['fr-b22-subj-or-inf'],
    sources: [S.subjunctive],
  },
];
