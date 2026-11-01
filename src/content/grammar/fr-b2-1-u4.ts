import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 4 (Doute et certitude). */
export const FRB21_U4_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-subjonctif-present',
    title: 'The present subjunctive',
    tagline: 'que je sois, que tu aies, qu’il fasse',
    level: LEVEL,
    summary:
      'The subjunctive is used in subordinate clauses introduced by que after verbs and expressions of wish, doubt, necessity and feeling. Most verbs form it from the ils stem of the present plus -e, -es, -e, -ions, -iez, -ent. A few verbs have irregular forms.',
    sections: [
      section(
        'formation',
        'Forming the present subjunctive',
        p(
          'Take the **ils/elles** form of the present, remove **-ent** and add **-e, -es, -e, -ent** for je, tu, il, ils. For nous and vous the forms are the same as in the imparfait: **-ions, -iez**. *Ils prennent → que je prenne, que nous prenions.*',
        ),
        table(
          'Regular formation: parler and finir.',
          ['Person', 'parler', 'finir', 'prendre'],
          [
            ['que je', 'parle', 'finisse', 'prenne'],
            ['que tu', 'parles', 'finisses', 'prennes'],
            ['qu’il/elle/on', 'parle', 'finisse', 'prenne'],
            ['que nous', 'parlions', 'finissions', 'prenions'],
            ['que vous', 'parliez', 'finissiez', 'preniez'],
            ['qu’ils/elles', 'parlent', 'finissent', 'prennent'],
          ],
        ),
      ),
      section(
        'irregular',
        'Irregular verbs',
        table(
          'Learn these by heart.',
          ['Verb', 'je', 'nous', 'ils'],
          [
            ['être', 'sois', 'soyons', 'soient'],
            ['avoir', 'aie', 'ayons', 'aient'],
            ['aller', 'aille', 'allions', 'aillent'],
            ['faire', 'fasse', 'fassions', 'fassent'],
            ['pouvoir', 'puisse', 'puissions', 'puissent'],
            ['savoir', 'sache', 'sachions', 'sachent'],
            ['vouloir', 'veuille', 'voulions', 'veuillent'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il faut que tu es à l’heure.  ✓ Il faut que tu sois à l’heure.',
          '✗ Je doute qu’il a raison.  ✓ Je doute qu’il ait raison.',
        ),
        tip(
          'When is it used?',
          'After il faut que, vouloir que, douter que, il est possible que, bien que, avant que, pour que … The next lessons say which expressions trigger it.',
        ),
        examples(
          ['Il faut que je le fasse avant ce soir.', 'I have to do it before tonight.'],
          ['Je voudrais que vous soyez plus attentifs.', 'I would like you to be more attentive.'],
        ),
      ),
    ],
    related: ['fr-opinion-mood'],
    sources: [S.subjonctifPresent, S.subjonctif],
  },
  {
    id: 'fr-opinion-mood',
    title: 'Indicative or subjunctive after opinion verbs',
    tagline: 'Je pense qu’il a raison, je ne pense pas qu’il ait raison',
    level: LEVEL,
    summary:
      'Expressions of certainty take the indicative, expressions of doubt, possibility and denial take the subjunctive. Verbs of opinion such as penser, croire and trouver take the indicative when affirmative and usually the subjunctive when negated or questioned.',
    sections: [
      section(
        'rule',
        'Certainty or doubt?',
        compare(
          {
            title: 'indicative',
            question: 'Are you presenting it as true or likely?',
            example: 'Je pense qu’il a raison.',
          },
          {
            title: 'subjunctive',
            question: 'Do you doubt it, deny it or only consider it possible?',
            example: 'Je ne pense pas qu’il ait raison.',
          },
        ),
        table(
          'Common expressions.',
          ['Mood', 'Expressions'],
          [
            [
              'indicative',
              'je pense / crois / trouve que, je suis sûr / certain / convaincu que, il est évident / certain / probable que, il me semble que, j’espère que',
            ],
            [
              'subjunctive',
              'je doute que, il est possible / douteux / peu probable que, il se peut que, je ne pense pas / ne crois pas que, je ne suis pas sûr que',
            ],
          ],
        ),
      ),
      section(
        'details',
        'Details that matter',
        p(
          'Negation and questions turn certainty into doubt, so *penser, croire, trouver, être sûr* then take the subjunctive: *Je ne suis pas sûr qu’il soit là.* After **espérer que** the indicative is always used, even in the negative: *J’espère qu’il viendra.* **Il est probable que** takes the indicative, **il est peu probable que** the subjunctive.',
        ),
        mistake(
          'Watch out',
          '✗ Je ne pense pas qu’il vient.  ✓ Je ne pense pas qu’il vienne.',
          '✗ J’espère qu’il vienne.  ✓ J’espère qu’il viendra.',
          '✗ Il est évident qu’elle ait menti.  ✓ Il est évident qu’elle a menti.',
        ),
        examples(
          ['Je suis persuadé qu’il dit la vérité.', 'I am sure he is telling the truth.'],
          [
            'Il est peu probable qu’elle accepte ce compromis.',
            'She is unlikely to accept this compromise.',
          ],
        ),
      ),
    ],
    related: ['fr-subjonctif-present'],
    sources: [S.subjonctif, S.conjonctive],
  },
];
