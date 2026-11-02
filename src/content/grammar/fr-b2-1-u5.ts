import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 5 (Sentiments et jugements). */
export const FRB21_U5_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-subjunctive-or-infinitive',
    title: 'Subjunctive or infinitive?',
    tagline: 'Je suis content d’être ici, je suis content que tu sois ici',
    level: LEVEL,
    summary:
      'When the subject of both verbs is the same, French prefers the infinitive (with de or à if the main verb needs it). When the subjects differ, que + subjunctive is used. Many verbs of feeling, wish and necessity work this way.',
    sections: [
      section(
        'rule',
        'One subject or two?',
        compare(
          {
            title: 'Same subject',
            question: 'Is it the same person in both parts?',
            example: 'Je suis content d’être ici.',
          },
          {
            title: 'Different subjects',
            question: 'Does a new person appear?',
            example: 'Je suis content que tu sois ici.',
          },
          {
            title: 'General statement',
            question: 'Is nobody named?',
            example: 'Il faut partir plus tôt.',
          },
        ),
        table(
          'Common verbs and expressions.',
          ['Same subject', 'Different subjects'],
          [
            ['Je suis content d’être là.', 'Je suis content que tu sois là.'],
            ['Elle a peur d’arriver en retard.', 'Elle a peur que son fils arrive en retard.'],
            ['Je veux partir.', 'Je veux que tu partes.'],
            ['Il faut partir.', 'Il faut que nous partions.'],
            ['Je regrette de ne pas t’avoir écouté.', 'Je regrette que tu ne m’aies pas écouté.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je suis content que je sois ici.  ✓ Je suis content d’être ici.',
          '✗ Elle a peur qu’elle arrive en retard.  ✓ Elle a peur d’arriver en retard.',
          '✗ Il faut que partir.  ✓ Il faut partir.',
        ),
        examples(
          ['Je veux que vous soyez à l’heure.', 'I want you to be on time.'],
          ['Il est content d’avoir réussi.', 'He is glad to have succeeded.'],
        ),
      ),
      section(
        'verbs',
        'Which verbs follow this rule?',
        p(
          'Feelings (**être content / heureux / triste / surpris de**, **avoir peur de**, **regretter de**), wishes (**vouloir**, **souhaiter**, **préférer**) and necessity (**il faut**, **il est important de**) all work this way. Verbs of declaring and thinking (*je pense que*, *je dis que*) do not: they keep the indicative with que.',
        ),
        tip(
          'Quick check',
          'Say the sentence with “I … that I …”. If it sounds odd in English (“I am glad that I am here”), French will use the infinitive.',
        ),
      ),
    ],
    related: ['fr-subjonctif-passe'],
    sources: [S.subjonctif, S.conjonctive],
  },
  {
    id: 'fr-subjonctif-passe',
    title: 'The past subjunctive',
    tagline: 'Je regrette que tu sois parti, bien qu’il ait plu',
    level: LEVEL,
    summary:
      'The past subjunctive is avoir or être in the present subjunctive plus the past participle. Use it when the action in the subordinate clause happened before the action of the main verb, or when it is already finished.',
    sections: [
      section(
        'formation',
        'Forming the past subjunctive',
        p(
          'The auxiliary is the same as in the passé composé. Put it in the **present subjunctive** (aie, sois …) and add the participle. The participle agrees under the same rules.',
        ),
        table(
          'Two examples.',
          ['Person', 'finir (avoir)', 'venir (être)'],
          [
            ['que je', 'aie fini', 'sois venu(e)'],
            ['que tu', 'aies fini', 'sois venu(e)'],
            ['qu’il/elle', 'ait fini', 'soit venu(e)'],
            ['que nous', 'ayons fini', 'soyons venu(e)s'],
            ['que vous', 'ayez fini', 'soyez venu(e)(s)'],
            ['qu’ils/elles', 'aient fini', 'soient venu(e)s'],
          ],
        ),
      ),
      section(
        'use',
        'Present or past?',
        compare(
          {
            title: 'Present subjunctive',
            question: 'Same time or later?',
            example: 'Je suis content que tu viennes demain.',
          },
          {
            title: 'Past subjunctive',
            question: 'Already finished, or earlier?',
            example: 'Je suis content que tu sois venu hier.',
          },
        ),
        tip(
          'Bien que',
          'Bien que, quoique and avant que also take the subjunctive. *Bien qu’il ait travaillé toute la nuit, il n’était pas fatigué.* The same-subject infinitive has a past form too: *Elle est fière d’avoir réussi.*',
        ),
        mistake(
          'Watch out',
          '✗ Je regrette qu’il est parti.  ✓ Je regrette qu’il soit parti.',
          '✗ Je suis ravi que tu as réussi.  ✓ Je suis ravi que tu aies réussi.',
        ),
        examples(
          ['Il est dommage qu’elle soit partie si tôt.', 'It is a pity she left so early.'],
          ['Je ne crois pas qu’ils aient compris.', 'I do not think they understood.'],
        ),
      ),
    ],
    related: ['fr-subjunctive-or-infinitive'],
    sources: [S.subjonctifPasse, S.subjonctif],
  },
];
