import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 9 (Lire un récit). */
export const FRB21_U9_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-passe-simple',
    title: 'The passé simple (recognition)',
    tagline: 'il ouvrit, ils partirent, elle fut',
    level: LEVEL,
    summary:
      'The passé simple is the past tense of written narrative: novels, tales, history books. It tells single events in a sequence, while the imparfait describes the background. You need to recognise it at B2; in speech the passé composé is used instead.',
    sections: [
      section(
        'use',
        'Where you meet it',
        compare(
          {
            title: 'passé simple',
            question: 'Is it a novel, a tale or a history text?',
            example: 'Il ouvrit la porte et entra.',
          },
          {
            title: 'passé composé',
            question: 'Is it speech, a letter or a news report?',
            example: 'Il a ouvert la porte et il est entré.',
          },
          {
            title: 'imparfait',
            question: 'Is it the background or a habit?',
            example: 'Il faisait nuit et il pleuvait.',
          },
        ),
        p(
          'In a story, the **passé simple** moves the plot forward and the **imparfait** gives the setting: *Il pleuvait quand l’étranger arriva.* Today you mainly read the **third person** (il, elle, ils, elles).',
        ),
      ),
      section(
        'forms',
        'Recognising the forms',
        table(
          'Endings of the third persons.',
          ['Verbs', 'il / elle', 'ils / elles', 'Examples'],
          [
            ['-er verbs', '-a', '-èrent', 'il entra, ils entrèrent'],
            ['-ir, -re (regular)', '-it', '-irent', 'il finit, ils finirent; il vendit'],
            ['-oir, -re (many irregular)', '-ut', '-urent', 'il eut, il dut, il put, il reçut'],
            ['venir, tenir', '-int', '-inrent', 'il vint, ils vinrent'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ il fait (present) for il fit.  ✓ il fit = faire; il vit = voir; il dit = dire; il prit = prendre.',
        ),
        examples(
          [
            'Un beau jour, un étranger vint au village.',
            'One fine day, a stranger came to the village.',
          ],
          ['Il fit un pas, puis s’arrêta.', 'He took a step, then stopped.'],
        ),
        tip(
          'Find the infinitive',
          'Look at the stem and the ending: *il fit → faire*, *il vit → voir*, *il vint → venir*, *il fut → être*, *il eut → avoir*.',
        ),
      ),
    ],
    related: ['fr-passe-anterieur'],
    sources: [S.passeSimple],
  },
  {
    id: 'fr-passe-anterieur',
    title: 'The passé antérieur (recognition)',
    tagline: 'quand il eut fini, dès qu’elle fut arrivée',
    level: LEVEL,
    summary:
      'The passé antérieur is a compound tense made of avoir or être in the passé simple plus the past participle. It marks an event that happened just before another event told in the passé simple, after quand, lorsque, dès que, aussitôt que and après que.',
    sections: [
      section(
        'form',
        'Form and use',
        table(
          'Examples with avoir and être.',
          ['Person', 'finir (avoir)', 'arriver (être)'],
          [
            ['il / elle', 'eut fini', 'fut arrivé(e)'],
            ['ils / elles', 'eurent fini', 'furent arrivé(e)s'],
          ],
        ),
        p(
          'It is the written counterpart of the plus-que-parfait after a time conjunction: *Quand il eut fini son récit, personne ne dit un mot.* In speech you would say *Quand il a fini son récit, personne n’a dit un mot.*',
        ),
        mistake(
          'Watch out',
          '✗ Quand il eut fini, personne ne disait un mot. (imparfait)  ✓ Quand il eut fini, personne ne dit un mot.',
        ),
        examples(
          [
            'Dès qu’elle fut arrivée, la pluie commença.',
            'As soon as she had arrived, the rain began.',
          ],
          ['Après qu’ils eurent mangé, ils sortirent.', 'After they had eaten, they went out.'],
        ),
      ),
      section(
        'compare',
        'Equivalents',
        compare(
          {
            title: 'Narrative',
            question: 'Written story',
            example: 'Quand il eut fini, il se tut.',
          },
          {
            title: 'Speech',
            question: 'Spoken account',
            example: 'Quand il a eu fini, il s’est tu.',
          },
        ),
        tip(
          'Active use',
          'At B2 you only need to recognise the passé simple and the passé antérieur. Write your own stories with the passé composé and the imparfait.',
        ),
      ),
    ],
    related: ['fr-passe-simple', 'fr-plus-que-parfait'],
    sources: [S.passeAnterieur, S.passeSimple],
  },
];
