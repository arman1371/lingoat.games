import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c1-2';

/** French C1.2, units 2 to 6: family, ageing, health, solidarity, sport. */
export const FRC12_TOPICS_B: GrammarTopic[] = [
  {
    id: 'fr-c12-registres',
    title: 'Registres de langue',
    tagline: 'Same idea, different words for different people',
    level: LEVEL,
    summary:
      'French has several registers: populaire and familier for friends, courant for everyday situations, soutenu for formal or written French. Choose by the person you speak to and the medium.',
    sections: [
      section(
        'registers',
        'The registers',
        table(
          'One idea, three registers.',
          ['Familier', 'Courant', 'Soutenu'],
          [
            ['une bagnole', 'une voiture', 'une automobile'],
            ['bouffer', 'manger', 'se restaurer'],
            ['le boulot', 'le travail', 'le labeur'],
            ['un bouquin', 'un livre', 'un ouvrage'],
            ['J’en sais rien.', 'Je ne sais pas.', 'Je ne saurais vous le dire.'],
            ['T’as vu ça ?', 'Tu as vu ça ?', 'Avez-vous vu cela ?'],
          ],
        ),
        p(
          'Between the familier and the courant, speech often drops **ne** (*je sais pas*), uses **on** for *nous* and shortens words. Formal and written French keeps **ne**, uses inversion and prefers precise, rarer words.',
        ),
      ),
      section(
        'choose',
        'Choosing the right one',
        compare(
          {
            title: 'Familier',
            question: 'Friends, family, SMS?',
            example: 'Tu viens bouffer ce soir ?',
          },
          {
            title: 'Courant',
            question: 'Colleagues, shops, most situations?',
            example: 'Vous venez dîner ce soir ?',
          },
          {
            title: 'Soutenu',
            question: 'Letters, speeches, official texts?',
            example: 'Seriez-vous des nôtres pour le dîner ?',
          },
        ),
        tip(
          'Safe choice',
          'When in doubt use the courant register. Slang can offend in a formal setting, and very formal French sounds stiff among friends.',
        ),
        mistake(
          'Watch out',
          '✗ Je vous prie d’excuser mon gamin, il était crevé. (mixed registers in one letter)',
          '✓ Je vous prie de bien vouloir excuser l’absence de mon fils, qui était souffrant.',
        ),
      ),
    ],
    related: ['fr-c12-questions', 'fr-tu-vous'],
    sources: [S.registre],
  },
  {
    id: 'fr-c12-questions',
    title: 'Asking questions (3 ways)',
    tagline: 'Intonation, est-ce que or inversion',
    level: LEVEL,
    summary:
      'Casual: raise your voice (Tu viens ?). Neutral: est-ce que + normal order. Formal: invert verb and pronoun (Viens-tu ?). Add -t- after a vowel (A-t-elle appelé ?).',
    sections: [
      section(
        'three',
        'The three forms',
        table(
          'The same question in three registers.',
          ['Intonation', 'Est-ce que', 'Inversion'],
          [
            ['Tu viens ?', 'Est-ce que tu viens ?', 'Viens-tu ?'],
            [
              'Vous avez des enfants ?',
              'Est-ce que vous avez des enfants ?',
              'Avez-vous des enfants ?',
            ],
            ['Tu habites où ?', 'Où est-ce que tu habites ?', 'Où habites-tu ?'],
          ],
        ),
        p(
          'The first form is spoken, the third is written or formal. The question word can come last in casual speech (*Tu habites où ?*) but comes first with **est-ce que** and with inversion.',
        ),
      ),
      section(
        'inversion',
        'Inversion in detail',
        p(
          'Put the pronoun after the verb and join them with a hyphen: *Parlez-vous français ?* If the verb ends in a vowel and the pronoun is il, elle or on, add **-t-**: *A-t-elle appelé ? Parle-t-on français ici ?* With a noun subject keep the noun and add the matching pronoun: *Tes parents sont-ils venus ?*',
        ),
        examples(
          ['Où habitent tes grands-parents ?', 'Where do your grandparents live?'],
          ['Pourquoi est-ce qu’il est parti ?', 'Why did he leave?'],
          ['Les enfants sont-ils d’accord ?', 'Do the children agree?'],
        ),
        mistake(
          'Watch out',
          '✗ Est-ce que tu viens-tu ?  ✓ Est-ce que tu viens ? (do not combine two forms)',
          '✗ Elle a-t-elle appelé ?  ✓ A-t-elle appelé ?',
        ),
      ),
    ],
    related: ['fr-c12-registres', 'fr-questions'],
    sources: [S.interrogative, S.registre],
  },
];
