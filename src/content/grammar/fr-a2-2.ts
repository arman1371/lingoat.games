import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR22_SOURCES as S } from './sources-fr-a2-2';

const LEVEL = 'fr-a2-2';

/** French A2.2: one block of topics per unit, in unit order. */
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

  // ---- Unit 2 (Dans les médias) ----
  {
    id: 'fr-a22-cause-consequence',
    title: 'Cause and consequence: parce que, donc',
    tagline: 'How do I give a reason, and say what follows?',
    level: LEVEL,
    summary:
      'Parce que, car, grâce à and à cause de give a reason. Donc, alors and du coup give the result. Grâce à and à cause de are followed by a noun, parce que by a full clause.',
    sections: [
      section(
        'cause',
        'Giving a reason',
        p(
          '**Parce que** answers the question *pourquoi ?* and is followed by a clause: **je lis la presse en ligne parce que c’est gratuit**. **Car** means the same but is written style and never starts an answer. **Puisque** gives a reason the listener already knows.',
        ),
        table(
          'Ways to give a cause.',
          ['Word', 'followed by', 'example'],
          [
            ['parce que / car', 'a clause', 'Je regarde le journal parce que j’aime les infos.'],
            ['grâce à', 'a noun (good cause)', 'Grâce à cette appli, je suis informé.'],
            ['à cause de', 'a noun (bad cause)', 'À cause du bruit, je ne peux pas écouter.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Parce que la grève, le train est en retard.  ✓ À cause de la grève, le train est en retard.',
          '✗ Pourquoi ? Car j’aime ça.  ✓ Pourquoi ? Parce que j’aime ça.',
        ),
      ),
      section(
        'consequence',
        'Saying what follows',
        p(
          '**Donc** (so), **alors** (then, so) and **du coup** (as a result, spoken) introduce the result. They stand after the first idea, not at the beginning of the whole sentence.',
        ),
        examples(
          [
            'Il pleut, donc je reste devant la télé.',
            'It is raining, so I stay in front of the TV.',
          ],
          [
            'Je n’ai plus de batterie, alors je ne peux pas regarder la vidéo.',
            'My battery is dead, so I cannot watch the video.',
          ],
        ),
      ),
    ],
    related: ['fr-sequence', 'fr-questions'],
    sources: [S.subordinatingConjunction, S.graceA, S.donc, S.aCauseDe],
  },
  {
    id: 'fr-a22-subjunctive',
    title: 'The subjunctive after il faut que',
    tagline: 'What happens to the verb after il faut que?',
    level: LEVEL,
    summary:
      'After il faut que, vouloir que and bien que the verb is in the subjunctive. Regular verbs take the ils stem plus -e, -es, -e, -ions, -iez, -ent; être, avoir, aller and faire are irregular.',
    sections: [
      section(
        'forms',
        'Forming the subjunctive',
        p(
          'The subjunctive follows **que**. Take the **ils** form of the present, remove **-ent**, and add the endings **-e, -es, -e, -ions, -iez, -ent**. The nous and vous forms usually look like the imparfait.',
        ),
        table(
          'Regular subjunctive endings.',
          ['Person', 'parler', 'finir', 'lire'],
          [
            ['que je', 'parle', 'finisse', 'lise'],
            ['que tu', 'parles', 'finisses', 'lises'],
            ['qu’il / elle', 'parle', 'finisse', 'lise'],
            ['que nous', 'parlions', 'finissions', 'lisions'],
            ['que vous', 'parliez', 'finissiez', 'lisiez'],
            ['qu’ils / elles', 'parlent', 'finissent', 'lisent'],
          ],
        ),
        table(
          'Irregular verbs.',
          ['Person', 'être', 'avoir', 'aller', 'faire'],
          [
            ['que je', 'sois', 'aie', 'aille', 'fasse'],
            ['que tu', 'sois', 'aies', 'ailles', 'fasses'],
            ['qu’il / elle', 'soit', 'ait', 'aille', 'fasse'],
            ['que nous', 'soyons', 'ayons', 'allions', 'fassions'],
            ['que vous', 'soyez', 'ayez', 'alliez', 'fassiez'],
            ['qu’ils / elles', 'soient', 'aient', 'aillent', 'fassent'],
          ],
        ),
      ),
      section(
        'when',
        'When to use it',
        p(
          'Use the subjunctive after **il faut que** (it is necessary that), **vouloir que**, **il vaut mieux que** and **bien que** (although). If the subject does not change, use the infinitive instead: **il faut lire** (in general), **je veux lire**.',
        ),
        examples(
          ['Il faut que je lise cet article.', 'I must read this article.'],
          ['Je veux que tu regardes ce documentaire.', 'I want you to watch this documentary.'],
          ['Il faut que nous soyons informés.', 'We have to be informed.'],
        ),
        mistake(
          'Watch out',
          '✗ Il faut que je vais au cinéma.  ✓ Il faut que j’aille au cinéma.',
          '✗ Je veux que je lise.  ✓ Je veux lire. (same subject, so an infinitive)',
        ),
      ),
    ],
    related: ['fr-prendre-vouloir', 'fr-aller'],
    sources: [S.subjunctive],
  },
  {
    id: 'fr-a22-pronoun-order',
    title: 'Two object pronouns: je te le donne',
    tagline: 'What if there are two pronouns before the verb?',
    level: LEVEL,
    summary:
      'Two pronouns stand before the verb in a fixed order: me / te / nous / vous, then le / la / les, then lui / leur, then y, then en. In a positive command the direct pronoun comes first: donne-le-moi.',
    sections: [
      section(
        'order',
        'The order before the verb',
        p(
          'When a direct and an indirect object are both replaced, the pronouns follow a fixed order. With **me, te, nous, vous** the person comes first; with **lui** and **leur** the direct pronoun comes first.',
        ),
        table(
          'Order of the pronouns.',
          ['1st', '2nd', '3rd', '4th', '5th'],
          [['me, te, nous, vous', 'le, la, l’, les', 'lui, leur', 'y', 'en']],
        ),
        examples(
          ['Je te le dis.', 'I tell it to you.'],
          ['Elle me les envoie.', 'She sends them to me.'],
          ['Je le lui donne.', 'I give it to him.'],
          ['Il m’en parle.', 'He talks to me about it.'],
        ),
      ),
      section(
        'imperative',
        'In commands',
        p(
          'In the **positive** imperative the pronouns come after the verb, joined by hyphens, with the direct pronoun first: **donne-le-moi**, **envoyez-la-nous**. Me becomes **moi** at the end. In the **negative** the normal order returns: **ne me le donne pas**.',
        ),
        mistake(
          'Watch out',
          '✗ Je lui le donne.  ✓ Je le lui donne.',
          '✗ Donne-moi-le.  ✓ Donne-le-moi.',
        ),
      ),
    ],
    related: ['fr-object-pronouns', 'fr-imperative'],
    sources: [S.personalPronoun],
  },
  {
    id: 'fr-a22-adverbs-ment',
    title: 'Adverbs in -ment',
    tagline: 'How do I say how something is done?',
    level: LEVEL,
    summary:
      'Add -ment to the feminine adjective (lente → lentement). After a vowel add it to the masculine (vrai → vraiment). -ant and -ent adjectives give -amment and -emment. Bon gives bien and mauvais gives mal.',
    sections: [
      section(
        'forms',
        'Forming adverbs',
        p(
          'Adverbs of manner say **how** something happens. Most are built from the **adjective**. They never change for gender or number.',
        ),
        table(
          'Rules for -ment.',
          ['Type', 'adjective', 'adverb'],
          [
            ['normal: feminine + -ment', 'lent(e)', 'lentement'],
            ['ends in a vowel: masculine + -ment', 'vrai', 'vraiment'],
            ['-ant becomes -amment', 'constant', 'constamment'],
            ['-ent becomes -emment', 'évident', 'évidemment'],
            ['irregular', 'bon / mauvais', 'bien / mal'],
          ],
        ),
      ),
      section(
        'place',
        'Where they go',
        p(
          'A short adverb stands right after the verb: **il parle lentement**. In the passé composé it often stands between avoir and the participle: **il a bien parlé**. Sentence adverbs such as **heureusement** or **malheureusement** usually start the sentence.',
        ),
        examples(
          ['Heureusement, il y a des sous-titres.', 'Luckily, there are subtitles.'],
          ['La journaliste répond poliment.', 'The journalist answers politely.'],
          ['Il a vraiment aimé le film.', 'He really liked the film.'],
        ),
        mistake(
          'Watch out',
          '✗ Elle parle bonne.  ✓ Elle parle bien.',
          '✗ évidentement  ✓ évidemment',
        ),
      ),
    ],
    related: ['fr-adjectives', 'fr-frequency'],
    sources: [S.adverb],
  },
];
