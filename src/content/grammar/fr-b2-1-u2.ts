import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 2 (Parcours de vie). */
export const FRB21_U2_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-participle-agreement',
    title: 'Agreement of the past participle',
    tagline: 'When née, trouvées and rencontrées take their endings',
    level: LEVEL,
    summary:
      'The past participle of a compound tense changes like an adjective in three cases only: with être it agrees with the subject, with avoir it agrees with a direct object placed before the verb, and in pronominal verbs it agrees with the reflexive pronoun when that is the direct object.',
    sections: [
      section(
        'etre',
        'With être: the subject decides',
        p(
          'Verbs that take **être** (aller, venir, arriver, partir, naître, mourir, rester, tomber …) agree with the subject in gender and number. Add **-e** for feminine, **-s** for plural.',
        ),
        table(
          'Agreement with être.',
          ['Subject', 'Example'],
          [
            ['masculine singular', 'Mon père est né à Oran.'],
            ['feminine singular', 'Ma grand-mère est née en 1940.'],
            ['masculine plural', 'Mes frères sont partis à dix-huit ans.'],
            ['feminine plural', 'Mes sœurs sont parties à dix-huit ans.'],
          ],
        ),
      ),
      section(
        'avoir',
        'With avoir: only an object before the verb',
        p(
          'With **avoir** the participle does **not** agree with the subject. It agrees with the **direct object** only if that object stands **before** the verb: as a pronoun (*je les ai vus*), as the relative pronoun **que** (*les photos que j’ai trouvées*) or in a question (*quelle ville as-tu choisie ?*).',
        ),
        compare(
          {
            title: 'Object before the verb',
            question: 'Is the direct object in front of the verb?',
            example: 'La maison qu’ils ont achetée appartenait à leur grand-père.',
          },
          {
            title: 'Object after the verb',
            question: 'Does the object come after it?',
            example: 'Ils ont acheté une maison.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Les lettres qu’elle a écrit.  ✓ Les lettres qu’elle a écrites.',
          '✗ Elle a écrite une lettre.  ✓ Elle a écrit une lettre.',
        ),
      ),
      section(
        'pronominal',
        'Pronominal verbs',
        p(
          'The auxiliary is always **être**, but the participle agrees with the reflexive pronoun **only when it is the direct object**. Ask: *se* stands for “whom?” (direct) or “to whom?” (indirect).',
        ),
        table(
          'Direct or indirect?',
          ['Sentence', 'Why'],
          [
            ['Elles se sont rencontrées.', 'rencontrer quelqu’un: se is direct, agreement'],
            ['Elles se sont parlé.', 'parler à quelqu’un: se is indirect, no agreement'],
            ['Elle s’est lavée.', 'laver quelqu’un: se is direct, agreement'],
            [
              'Elle s’est lavé les mains.',
              'the direct object (les mains) comes after, no agreement',
            ],
          ],
        ),
        tip(
          'Quick test',
          'If you can replace the pronoun by “à lui / à elle / à eux”, the pronoun is indirect and the participle stays unchanged (se parler, se téléphoner, se sourire).',
        ),
        examples(
          ['Elles se sont connues à l’université.', 'They met at university.'],
          ['Ils se sont écrit pendant des années.', 'They wrote to each other for years.'],
        ),
      ),
    ],
    related: ['fr-plus-que-parfait'],
    sources: [S.participe, S.passeCompose],
  },
  {
    id: 'fr-time-conjunctions',
    title: 'Conjunctions of time',
    tagline: 'quand, dès que, avant que, jusqu’à ce que',
    level: LEVEL,
    summary:
      'Conjunctions of time put events in order. Most of them take the indicative, but avant que, jusqu’à ce que and en attendant que take the subjunctive. If both verbs have the same subject, French prefers a preposition with an infinitive.',
    sections: [
      section(
        'mood',
        'Indicative or subjunctive?',
        table(
          'The mood depends on the conjunction.',
          ['Mood', 'Conjunctions', 'Example'],
          [
            ['indicative', 'quand, lorsque', 'Quand j’étais petit, je rêvais d’être pilote.'],
            ['indicative', 'dès que, aussitôt que', 'Je t’appelle dès que j’arrive.'],
            [
              'indicative',
              'après que',
              'Après qu’il a obtenu son diplôme, il a cherché du travail.',
            ],
            [
              'indicative',
              'pendant que, tandis que, depuis que',
              'Depuis qu’il est à la retraite, il peint.',
            ],
            ['subjunctive', 'avant que', 'Appelle-moi avant que je parte.'],
            [
              'subjunctive',
              'jusqu’à ce que, en attendant que',
              'Je reste jusqu’à ce que tu reviennes.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Avant que tu pars.  ✓ Avant que tu partes.',
          '✗ Après qu’il ait fini.  ✓ Après qu’il a fini. (the indicative is the standard rule)',
        ),
        tip(
          'Why après que is odd',
          'Avant que needs the subjunctive because the event has not happened yet. Après que speaks about something that has happened, so it stays in the indicative, although many French speakers say it wrongly.',
        ),
      ),
      section(
        'same-subject',
        'Same subject: use the infinitive',
        p(
          'When the two verbs share a subject, use a preposition instead of a conjunction: **avant de**, **jusqu’à**, **en attendant de**, **après avoir / être + participle**.',
        ),
        compare(
          {
            title: 'Two subjects',
            question: 'Different people?',
            example: 'Il est parti avant que j’arrive.',
          },
          {
            title: 'One subject',
            question: 'Same person?',
            example: 'Il a étudié avant de changer de pays.',
          },
        ),
        examples(
          [
            'Après avoir quitté son pays, il a appris le français.',
            'After leaving his country, he learned French.',
          ],
          ['Je reste jusqu’à ce que tu reviennes.', 'I am staying until you come back.'],
        ),
      ),
    ],
    related: ['fr-participle-agreement'],
    sources: [S.conjonction, S.circonstancielle],
  },
];
