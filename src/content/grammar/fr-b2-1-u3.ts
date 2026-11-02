import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 3 (Santé !). */
export const FRB21_U3_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-conditionnel-present',
    title: 'The conditional for advice',
    tagline: 'devriez, pourriez, voudrais: softening what you say',
    level: LEVEL,
    summary:
      'The conditional is formed with the future stem and the imparfait endings. In everyday French it softens advice and requests, expresses a wish, reports information you cannot confirm, and answers a si-clause in the imparfait.',
    sections: [
      section(
        'formation',
        'Forming the conditional',
        p(
          'Take the stem of the **future** (which ends in **-r**) and add the **imparfait endings**: -ais, -ais, -ait, -ions, -iez, -aient. Regular verbs use the infinitive (*consulter → consulterais*), irregular verbs keep their future stem.',
        ),
        table(
          'Four useful verbs.',
          ['Person', 'devoir', 'pouvoir', 'faire', 'aller'],
          [
            ['je', 'devrais', 'pourrais', 'ferais', 'irais'],
            ['tu', 'devrais', 'pourrais', 'ferais', 'irais'],
            ['il/elle/on', 'devrait', 'pourrait', 'ferait', 'irait'],
            ['nous', 'devrions', 'pourrions', 'ferions', 'irions'],
            ['vous', 'devriez', 'pourriez', 'feriez', 'iriez'],
            ['ils/elles', 'devraient', 'pourraient', 'feraient', 'iraient'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je consulterai un médecin à ta place.  ✓ À ta place, je consulterais un médecin.',
          '✗ Vous devrez vous reposer. (an order or a prediction)  ✓ Vous devriez vous reposer. (advice)',
        ),
      ),
      section(
        'use',
        'What it is used for',
        compare(
          {
            title: 'Advice',
            question: 'What would you suggest?',
            example: 'Vous devriez vous reposer.',
          },
          {
            title: 'Polite request',
            question: 'How do you ask kindly?',
            example: 'Pourriez-vous m’indiquer un bon kiné ?',
          },
          {
            title: 'Unconfirmed news',
            question: 'Is it only reported?',
            example: 'Selon la presse, ce vaccin serait efficace à 90 %.',
          },
        ),
        p('The conditional also expresses a wish: *Je voudrais arrêter de fumer.*'),
        tip(
          'With si',
          'Si + imparfait gives the condition and the main clause takes the conditional: *Si j’étais toi, je ne mangerais pas si tard.* Never put the conditional after si.',
        ),
        examples(
          ['À ta place, je consulterais un médecin.', 'In your place, I would see a doctor.'],
          ['Ce serait mieux de se coucher tôt.', 'It would be better to go to bed early.'],
        ),
      ),
    ],
    related: ['fr-giving-advice'],
    sources: [S.conditionnel],
  },
  {
    id: 'fr-giving-advice',
    title: 'Giving advice',
    tagline: 'From gentle suggestion to firm instruction',
    level: LEVEL,
    summary:
      'French has a ladder of ways to advise. The conditional and conseiller de are gentle, the imperative and il faut que are firm. Il faut que and il vaut mieux que are followed by the subjunctive.',
    sections: [
      section(
        'ladder',
        'The ladder of advice',
        table(
          'From soft to firm.',
          ['Strength', 'Structure', 'Example'],
          [
            ['softest', 'conditional', 'Vous pourriez essayer le yoga.'],
            [
              'soft',
              'je vous conseille de + infinitive',
              'Je vous conseille de marcher plus souvent.',
            ],
            ['soft', 'il vaudrait mieux que + subjunctive', 'Il vaudrait mieux que vous dormiez.'],
            [
              'medium',
              'il vaut mieux que + subjunctive',
              'Il vaut mieux que tu ailles chez le médecin.',
            ],
            ['firm', 'il faut que + subjunctive', 'Il faut que vous buviez plus d’eau.'],
            ['firmest', 'imperative', 'Reposez-vous !'],
          ],
        ),
        p(
          '**Conseiller**, **recommander** and **suggérer** take **de + infinitive** when you speak to the person: *Je te conseille de dormir.* The passive form is **Il est conseillé de + infinitive**.',
        ),
      ),
      section(
        'imperative',
        'The imperative',
        p(
          'The imperative has three forms (tu, nous, vous) and no subject pronoun. It is the present tense, but **-er verbs drop the s** in the tu form: *Tu soignes → Soigne-toi !* The negative goes round the verb: *Ne prenez pas ce médicament.*',
        ),
        table(
          'Imperative of prendre and se reposer.',
          ['Form', 'prendre', 'se reposer'],
          [
            ['tu', 'Prends !', 'Repose-toi !'],
            ['nous', 'Prenons !', 'Reposons-nous !'],
            ['vous', 'Prenez !', 'Reposez-vous !'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il vaut mieux que tu vas chez le médecin.  ✓ Il vaut mieux que tu ailles chez le médecin.',
          '✗ Je te conseille que dormir.  ✓ Je te conseille de dormir.',
        ),
        examples(
          ['Il faut que vous buviez plus d’eau.', 'You have to drink more water.'],
          ['Soigne-toi bien !', 'Take good care of yourself!'],
        ),
      ),
    ],
    related: ['fr-conditionnel-present'],
    sources: [S.imperatif, S.subjonctif],
  },
];
