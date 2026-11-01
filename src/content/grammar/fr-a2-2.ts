import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR22_SOURCES as S } from './sources-fr-a2-2';

const LEVEL = 'fr-a2-2';

/** French A2.2, unit 1 (À votre santé !): object pronouns, the superlative, interrogative pronouns. */
export const FR22_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-object-pronouns',
    title: 'Object pronouns: le, la, les, lui, leur',
    tagline: 'How do I avoid repeating a person or a thing?',
    level: LEVEL,
    summary:
      'Le, la, l’ and les replace a direct object; lui and leur replace à + a person. Me, te, nous and vous do both jobs. The pronoun goes before the verb, or before the infinitive.',
    sections: [
      section(
        'forms',
        'Direct and indirect objects',
        p(
          'A **direct object** follows the verb with no preposition: **je prends le sirop**, **j’appelle Léa**. An **indirect object** needs **à**: **je téléphone à mon médecin**. Each has its own pronoun, except for the speaker and the listener.',
        ),
        table(
          'Object pronouns.',
          ['Person', 'Direct (no preposition)', 'Indirect (à + person)'],
          [
            ['me / you (tu)', 'me (m’), te (t’)', 'me (m’), te (t’)'],
            ['him, her, it', 'le, la, l’', 'lui'],
            ['us / you (vous)', 'nous, vous', 'nous, vous'],
            ['them', 'les', 'leur'],
          ],
          1,
        ),
        p(
          'Lui does not show gender: **je lui parle** means I talk to him or to her. Le, la and les also stand for things: **le sirop → je le prends**, **l’ordonnance → je l’ai**.',
        ),
      ),
      section(
        'place',
        'Where the pronoun goes',
        p(
          'The pronoun stands **directly before the verb** it belongs to. In the negative, ne goes before the pronoun and pas after the verb. With an infinitive, the pronoun stands before the infinitive. In the passé composé it stands before avoir.',
        ),
        examples(
          ['Je le connais.', 'I know him.'],
          ['Je ne la trouve pas.', 'I cannot find it.'],
          ['Je vais lui téléphoner.', 'I am going to phone her.'],
          ['Le médecin leur donne un sirop.', 'The doctor gives them a syrup.'],
        ),
        compare(
          {
            title: 'Direct',
            question: 'The verb takes its object straight away',
            example: 'J’appelle Léa. → Je l’appelle.',
          },
          {
            title: 'Indirect',
            question: 'The verb needs à before the person',
            example: 'Je téléphone à Léa. → Je lui téléphone.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Je la téléphone.  ✓ Je lui téléphone. (téléphoner à)',
          '✗ Je vais porter la.  ✓ Je vais la porter.',
        ),
        tip(
          'Check the verb',
          'Parler, téléphoner, écrire, répondre, donner and dire take à before a person. Voir, connaître, aider, appeler and chercher do not.',
        ),
      ),
    ],
    related: ['fr-pronouns', 'fr-negation'],
    sources: [S.cod, S.coi, S.personalPronoun],
  },
  {
    id: 'fr-superlative',
    title: 'The superlative: le plus, le meilleur',
    tagline: 'How do I say the biggest, the best, the least?',
    level: LEVEL,
    summary:
      'Put le, la or les before plus or moins and the adjective. Bon becomes meilleur and bien becomes mieux. With an adverb the article is always le.',
    sections: [
      section(
        'adjectives',
        'With an adjective',
        p(
          'The superlative says that something is **the most** or **the least**. Take the definite article, **plus** or **moins**, and the adjective. The article and the adjective agree with the noun. After it you can add **de** for the group.',
        ),
        table(
          'The superlative of grand.',
          ['Degree', 'masculine', 'feminine', 'plural'],
          [
            ['the most', 'le plus grand', 'la plus grande', 'les plus grand(e)s'],
            ['the least', 'le moins grand', 'la moins grande', 'les moins grand(e)s'],
          ],
        ),
        examples(
          ['C’est le plus grand hôpital de la ville.', 'It is the biggest hospital in the town.'],
          ['C’est la pharmacie la plus proche.', 'It is the closest pharmacy.'],
        ),
        p(
          'When the adjective comes after the noun, the article is repeated: **la pharmacie la plus proche**. Before the noun it appears once: **le plus grand hôpital**.',
        ),
      ),
      section(
        'irregular',
        'Irregular forms and adverbs',
        p(
          '**Bon** has its own superlative, **le meilleur**. The adverb **bien** becomes **mieux**, and with adverbs the article is always **le**: **le plus vite**, **le mieux**.',
        ),
        table(
          'Irregular comparatives and superlatives.',
          ['Word', 'better', 'the best'],
          [
            ['bon (adjective)', 'meilleur', 'le meilleur, la meilleure'],
            ['bien (adverb)', 'mieux', 'le mieux'],
          ],
        ),
        examples(
          [
            'Pour mon dos, la natation est le meilleur sport.',
            'For my back, swimming is the best sport.',
          ],
          [
            'Marie dort le mieux de toute la famille.',
            'Marie sleeps the best in the whole family.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ le plus bon  ✓ le meilleur',
          '✗ la plus grand  ✓ la plus grande (the adjective agrees)',
        ),
      ),
    ],
    related: ['fr-adjectives', 'fr-adjective-position'],
    sources: [S.degrees],
  },
  {
    id: 'fr-interrogative-pronouns',
    title: 'Qui, que, quoi, lequel',
    tagline: 'Which question word do I need?',
    level: LEVEL,
    summary:
      'Qui asks about people. For things use qu’est-ce qui (subject), qu’est-ce que or que (object) and quoi after a preposition. Lequel and its forms mean “which one?”.',
    sections: [
      section(
        'who-what',
        'Who and what',
        p(
          '**Qui** always refers to a person. For things the pronoun depends on its function in the question: the thing can be the **subject** (what hurts?) or the **object** (what do you take?).',
        ),
        table(
          'Interrogative pronouns.',
          ['Function', 'person', 'thing'],
          [
            ['subject', 'Qui vous a appelé ?', 'Qu’est-ce qui vous fait mal ?'],
            [
              'object',
              'Qui est-ce que vous voyez ?',
              'Qu’est-ce que vous prenez ? / Que prenez-vous ?',
            ],
            ['after a preposition', 'De qui parlez-vous ?', 'De quoi parlez-vous ?'],
          ],
        ),
        p(
          '**Que** is only used with inversion (**Que prenez-vous ?**). In everyday speech you ask **Vous prenez quoi ?** or use **qu’est-ce que**.',
        ),
      ),
      section(
        'which-one',
        'Which one?',
        p(
          '**Lequel** asks “which one?” among several people or things. It agrees with the noun it stands for. With à and de it merges: **auquel**, **duquel**.',
        ),
        table(
          'Lequel and its forms.',
          ['Number', 'masculine', 'feminine'],
          [
            ['singular', 'lequel', 'laquelle'],
            ['plural', 'lesquels', 'lesquelles'],
          ],
        ),
        examples(
          [
            'Il y a plusieurs sirops. Lequel vous prenez ?',
            'There are several syrups. Which one do you take?',
          ],
          [
            'Vous avez deux ordonnances. Laquelle est pour la pharmacie ?',
            'You have two prescriptions. Which one is for the pharmacy?',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Qu’est-ce que vous fait mal ?  ✓ Qu’est-ce qui vous fait mal ?',
          '✗ Qui vous prenez ?  ✓ Lequel vous prenez ? (a thing, not a person)',
        ),
      ),
    ],
    related: ['fr-questions', 'fr-object-pronouns'],
    sources: [S.interrogativePronoun],
  },
];
