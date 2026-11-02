import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b2-2';

/** French B2.2, unit 1: reported speech, highlighting with c’est … qui / que, composed relative pronouns. */
export const FR22B_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-b22-reported-speech',
    title: 'Reported speech',
    tagline: 'Elle a dit qu’elle était fatiguée',
    level: LEVEL,
    summary:
      'In reported speech the words of someone else become a clause with que, si or a question word. After a past verb of saying the tenses shift back and the time words change; after a present verb nothing shifts.',
    sections: [
      section(
        'tenses',
        'The tenses shift back after a past verb',
        p(
          'When the verb of saying is in the **passé composé** or the **imparfait** (*elle a dit*, *il annonçait*), the verb of the reported words moves one step back in time. The persons and possessives change to the viewpoint of the person who reports.',
        ),
        table(
          'Direct speech and reported speech after a verb of saying in the past.',
          ['Direct speech', 'Reported speech', 'Rule'],
          [
            ['« Je suis fatiguée. »', 'Elle a dit qu’elle était fatiguée.', 'présent → imparfait'],
            [
              '« J’ai vérifié. »',
              'Il a dit qu’il avait vérifié.',
              'passé composé → plus-que-parfait',
            ],
            [
              '« Je publierai l’enquête. »',
              'Elle a promis qu’elle publierait l’enquête.',
              'futur → conditionnel présent',
            ],
            [
              '« J’aurai terminé à midi. »',
              'Il a assuré qu’il aurait terminé à midi.',
              'futur antérieur → conditionnel passé',
            ],
            ['« Il pleuvait. »', 'Elle a précisé qu’il pleuvait.', 'imparfait stays'],
          ],
        ),
        tip(
          'No shift after a present verb',
          'Il explique que le dossier est complet. Elle dit qu’elle viendra. The reported verb keeps its tense when the verb of saying is in the present or the future.',
        ),
      ),
      section(
        'words',
        'Time and place words change',
        table(
          'Words that point to the moment of speaking are replaced in the report.',
          ['Direct speech', 'Reported speech'],
          [
            ['aujourd’hui, ce jour', 'ce jour-là'],
            ['demain', 'le lendemain'],
            ['hier', 'la veille'],
            ['maintenant', 'à ce moment-là, alors'],
            ['ici', 'là'],
            ['ce soir', 'ce soir-là'],
          ],
        ),
        examples(
          ['« Je partirai demain. »', 'I will leave tomorrow.'],
          ['Il a dit qu’il partirait le lendemain.', 'He said he would leave the next day.'],
        ),
      ),
      section(
        'questions',
        'Reporting a question',
        p(
          'A question loses its inversion and its question mark. A **yes/no question** becomes a clause with **si**. A question with a question word keeps the word, and *qu’est-ce que* becomes **ce que**, *qu’est-ce qui* becomes **ce qui**.',
        ),
        compare(
          {
            title: 'Yes/no question',
            question: '« Tu as lu l’article ? »',
            example: 'Elle m’a demandé si j’avais lu l’article.',
          },
          {
            title: 'Qu’est-ce que …',
            question: '« Qu’est-ce que vous pensez ? »',
            example: 'Il a demandé ce que nous pensions.',
          },
          {
            title: 'Qu’est-ce qui …',
            question: '« Qu’est-ce qui s’est passé ? »',
            example: 'Elle voulait savoir ce qui s’était passé.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Elle m’a demandé qu’il avait menti.  ✓ Elle m’a demandé s’il avait menti.',
          '✗ Il a dit qu’il présente un plan demain.  ✓ Il a dit qu’il présenterait un plan le lendemain.',
        ),
      ),
      section(
        'verbs',
        'Choose the verb that shows the attitude',
        p(
          '*Dire* is neutral, but a more precise verb tells the reader how the words were meant: **affirmer**, **déclarer**, **annoncer**, **préciser**, **souligner** and **rappeler** are neutral to emphatic; **reconnaître** and **avouer** admit something; **nier** and **démentir** deny it; **prétendre** says that someone claims something that may not be true.',
        ),
      ),
    ],
    related: ['fr-b22-cleft'],
    sources: [S.indirectSpeech],
  },
  {
    id: 'fr-b22-cleft',
    title: 'c’est … qui / que',
    tagline: 'C’est la presse qui a révélé l’affaire',
    level: LEVEL,
    summary:
      'To put one part of a sentence in the spotlight, frame it with c’est … qui (when it is the subject) or c’est … que (object, time, place). To stress a whole clause, start with ce qui, ce que or ce dont and finish with c’est.',
    sections: [
      section(
        'frame',
        'Frame the word you want to stress',
        p(
          'Take a plain sentence, move the stressed word after **c’est** and join the rest with **qui** or **que**. Use **qui** when the stressed word is the **subject**; use **que** (**qu’** before a vowel) for an **object** or a **time or place** complement.',
        ),
        table(
          'One plain sentence, three ways to stress it.',
          ['Stressed part', 'Sentence'],
          [
            ['subject', 'C’est le journal qui a publié l’enquête.'],
            ['object', 'C’est l’enquête que le journal a publiée.'],
            ['time', 'C’est la veille que le journal a démenti la nouvelle.'],
            ['place or person with à', 'C’est à la rédaction que j’ai envoyé ma lettre.'],
          ],
        ),
        tip(
          'Plural',
          'Before a plural noun or ils / elles, c’est becomes ce sont in careful writing: Ce sont les réseaux sociaux qui ont amplifié la polémique. In speech c’est is also common.',
        ),
      ),
      section(
        'clause',
        'Stress a whole clause: ce qui, ce que, ce dont',
        p(
          'Start with **ce** and a relative pronoun, say what you want to highlight, then **c’est**. The pronoun follows the usual rule: **ce qui** for a subject, **ce que** for an object, **ce dont** for a verb that takes de.',
        ),
        table(
          'Pseudo-cleft sentences.',
          ['Pronoun', 'Why', 'Example'],
          [
            ['ce qui', 'subject of the verb', 'Ce qui m’inquiète, c’est la vitesse des rumeurs.'],
            ['ce que', 'object of the verb', 'Ce que je veux, c’est une information vérifiée.'],
            [
              'ce dont',
              'verb + de (avoir besoin de)',
              'Ce dont nous avons besoin, c’est d’un débat honnête.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ C’est cette rumeur que a circulé.  ✓ C’est cette rumeur qui a circulé.',
          '✗ Ce que j’ai besoin, c’est d’un démenti.  ✓ Ce dont j’ai besoin, c’est d’un démenti.',
        ),
      ),
    ],
    related: ['fr-b22-reported-speech', 'fr-b22-relative-composed'],
    sources: [S.cleft],
  },
  {
    id: 'fr-b22-relative-composed',
    title: 'lequel, auquel, duquel',
    tagline: 'Le rapport auquel elle fait référence',
    level: LEVEL,
    summary:
      'After a preposition other than de, a thing is replaced by lequel, laquelle, lesquels or lesquelles. With à and de the masculine and the plural forms contract: auquel, auxquels, duquel, desquels. For people qui is usual.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Composed relative pronouns agree with the noun they replace.',
          [
            'Form',
            'masculine singular',
            'feminine singular',
            'masculine plural',
            'feminine plural',
          ],
          [
            ['lequel', 'lequel', 'laquelle', 'lesquels', 'lesquelles'],
            ['à + lequel', 'auquel', 'à laquelle', 'auxquels', 'auxquelles'],
            ['de + lequel', 'duquel', 'de laquelle', 'desquels', 'desquelles'],
          ],
          1,
        ),
        examples(
          ['Voici l’article sur lequel elle a travaillé.', 'Here is the article she worked on.'],
          ['Les raisons pour lesquelles il a menti.', 'The reasons why he lied.'],
          [
            'Le sondage à la suite duquel le ministre a démissionné.',
            'The poll after which the minister resigned.',
          ],
        ),
      ),
      section(
        'use',
        'When to use them',
        p(
          'Use them when the relative clause starts with a **preposition** such as *sur*, *avec*, *pour*, *dans*, *à la suite de*, *au sujet de*. The preposition stays in front: *le dossier dans lequel …*. For **people** the shorter form with **qui** is usual: *la collègue avec qui je travaille*.',
        ),
        compare(
          {
            title: 'dont',
            question: 'verb or noun + de, short form',
            example: 'Le sujet dont elle parle.',
          },
          {
            title: 'duquel',
            question: 'after a prepositional phrase with de',
            example: 'Le sondage à la suite duquel …',
          },
          {
            title: 'auquel',
            question: 'verb or noun + à (things)',
            example: 'Le rapport auquel elle fait référence.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Le rapport à lequel elle fait référence.  ✓ Le rapport auquel elle fait référence.',
          '✗ Le sondage à la suite dont …  ✓ Le sondage à la suite duquel …',
        ),
      ),
    ],
    related: ['fr-b22-cleft'],
    sources: [S.lequel],
  },
];
