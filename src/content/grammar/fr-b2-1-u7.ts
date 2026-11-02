import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 7 (Démarches et voyages). */
export const FRB21_U7_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-purpose',
    title: 'Expressing a purpose',
    tagline: 'pour, afin de, pour que, afin que, de peur que',
    level: LEVEL,
    summary:
      'A purpose says what an action is for. With one subject, use pour or afin de and an infinitive. With a new subject, use pour que or afin que and the subjunctive. De peur que and de crainte que express a purpose to avoid something.',
    sections: [
      section(
        'same',
        'One subject: the infinitive',
        p(
          'When the person who acts is the same in both parts, use a preposition and an infinitive: **pour**, **afin de**, **dans le but de**, **en vue de**, **de manière à**, **de façon à**. The negative goes before the infinitive: *pour ne pas*, *afin de ne pas*.',
        ),
        table(
          'Prepositions of purpose.',
          ['Expression', 'Register', 'Example'],
          [
            [
              'pour + infinitive',
              'everyday',
              'Il a pris rendez-vous pour renouveler son titre de séjour.',
            ],
            [
              'afin de + infinitive',
              'formal',
              'Il a apporté une copie afin de prouver son identité.',
            ],
            [
              'de manière à / de façon à',
              'neutral',
              'Elle a réservé tôt de manière à obtenir un tarif réduit.',
            ],
            [
              'dans le but de / en vue de',
              'formal, written',
              'Dans le but de découvrir la région, nous avons loué une voiture.',
            ],
            [
              'de peur de / de crainte de',
              'to avoid something',
              'Je me dépêche de peur de rater le train.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je viens pour que je signe.  ✓ Je viens pour signer.',
          '✗ Il a réservé tôt afin qu’obtenir un tarif réduit.  ✓ Il a réservé tôt afin d’obtenir un tarif réduit.',
        ),
      ),
      section(
        'new',
        'A new subject: the subjunctive',
        p(
          'When the subject changes, use a conjunction followed by the **subjunctive**: **pour que**, **afin que**, **de façon que**, **de peur que**, **de crainte que**. A purpose is a goal that is not yet reached, so the subjunctive is used.',
        ),
        compare(
          {
            title: 'Same subject',
            question: 'Does the same person act and aim?',
            example: 'Il explique pour être compris.',
          },
          {
            title: 'New subject',
            question: 'Is the aim for someone else?',
            example: 'Il explique pour que nous comprenions.',
          },
        ),
        tip(
          'With de peur que',
          'De peur que and de crainte que are often followed by ne explétif in written French: *de peur qu’il ne se perde*. It is optional and has no negative meaning.',
        ),
        examples(
          [
            'Je vous écris pour que vous examiniez mon dossier.',
            'I am writing so that you examine my file.',
          ],
          [
            'Il a envoyé le dossier en recommandé de peur qu’il se perde.',
            'He sent the file registered for fear it would get lost.',
          ],
        ),
      ),
    ],
    related: ['fr-subjunctive-or-infinitive'],
    sources: [S.circonstancielle, S.conjonction],
  },
];
