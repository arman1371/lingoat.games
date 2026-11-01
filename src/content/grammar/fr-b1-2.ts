import { futurSimple } from '@/lib/french/tenses';
import { FRENCH_PRONOUNS } from '@/lib/persons';
import { examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b1-2';

const futureTable = (caption: string, verbs: readonly string[]) =>
  table(
    caption,
    ['Person', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...verbs.map((v) => futurSimple(v)[pr])]),
  );

/** French B1.2: the full lessons of the level, in teaching order. */
export const FRB12_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-futur-simple',
    title: 'The simple future',
    tagline: 'What will happen, and what will I do?',
    level: LEVEL,
    summary:
      'The simple future is one word: the infinitive (without the e of -re verbs) plus -ai, -as, -a, -ons, -ez, -ont. A dozen common verbs have an irregular stem, but the endings are always the same. Use it for plans, predictions, promises, and after quand when the action is still to come.',
    sections: [
      section(
        'form',
        'How it is built',
        p(
          'Start from the **infinitive**. For verbs in **-re** drop the final **e** (prendre → prendr-). Then add the endings, which are the same for every verb: **-ai, -as, -a, -ons, -ez, -ont**. They look like the present of *avoir*, and that is where they come from.',
        ),
        futureTable('Regular verbs in the simple future.', [
          'partir',
          'réserver',
          'prendre',
          'finir',
        ]),
        p(
          'Verbs in **-er** with a spelling change keep it in every form: *j’achèterai, nous appellerons, tu paieras, il jettera.* The future stem is the same as in the conditional (unit 3).',
        ),
      ),
      section(
        'irregular',
        'Irregular stems',
        p(
          'Some very common verbs have a **new stem that ends in -r**. Learn the stem once; the endings do not change. Pronunciation helps: the **r** is always heard.',
        ),
        futureTable('Verbs with an irregular stem.', ['être', 'avoir', 'aller', 'faire']),
        table(
          'More irregular stems.',
          ['Infinitive', 'Stem', 'Example'],
          [
            ['venir', 'viendr-', 'Elle viendra samedi.'],
            ['voir', 'verr-', 'Nous verrons la mer.'],
            ['pouvoir', 'pourr-', 'Tu pourras dormir.'],
            ['vouloir', 'voudr-', 'Ils voudront rester.'],
            ['savoir', 'saur-', 'Je saurai demain.'],
            ['envoyer', 'enverr-', 'J’enverrai un message.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ J’allerai en Italie.  ✓ J’irai en Italie.',
          '✗ Tu faiseras ta valise.  ✓ Tu feras ta valise.',
          '✗ Je prendrerai le train.  ✓ Je prendrai le train.',
        ),
      ),
      section(
        'use',
        'When to use it',
        p(
          'Use the simple future for **plans and predictions** (*L’été prochain, nous irons en Grèce*), for **promises** (*Je t’appellerai ce soir*) and for **instructions** (*Vous confirmerez la réservation*). In everyday speech the near future with *aller* (*je vais partir*) often replaces it for what is about to happen; the simple future sounds a little more distant or more certain.',
        ),
        tip(
          'quand + future',
          'After quand, lorsque, dès que and aussitôt que French uses the future when the action is still to come: Quand j’arriverai, je t’appellerai. English says “When I arrive”.',
        ),
        examples(
          ['Nous partirons samedi matin.', 'We will leave on Saturday morning.'],
          ['Demain, il fera beau.', 'Tomorrow the weather will be fine.'],
          [
            'Quand j’aurai l’argent, je réserverai un gîte.',
            'When I have the money, I will book a cottage.',
          ],
        ),
      ),
    ],
    related: ['fr-futur-proche', 'fr-aller'],
    sources: [S.futurSimple, S.aller],
  },
];
