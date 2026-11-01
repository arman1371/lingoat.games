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

  // ---- Unit 3 (Consommer responsable) ----
  {
    id: 'fr-a22-conditional',
    title: 'The present conditional: je voudrais',
    tagline: 'How do I ask politely, wish for something or give advice?',
    level: LEVEL,
    summary:
      'The conditional is the future stem plus the imparfait endings. Use it for polite requests (je voudrais), wishes, advice (tu devrais) and the result of an imaginary condition.',
    sections: [
      section(
        'forms',
        'Forming the conditional',
        p(
          'Take the stem of the **future** (the infinitive for regular verbs, with the final -e dropped for -re verbs) and add the endings of the **imparfait**: **-ais, -ais, -ait, -ions, -iez, -aient**. Irregular verbs keep their irregular future stem.',
        ),
        table(
          'Common conditional forms.',
          ['Person', 'aimer', 'vouloir', 'pouvoir', 'être'],
          [
            ['je', 'aimerais', 'voudrais', 'pourrais', 'serais'],
            ['tu', 'aimerais', 'voudrais', 'pourrais', 'serais'],
            ['il / elle / on', 'aimerait', 'voudrait', 'pourrait', 'serait'],
            ['nous', 'aimerions', 'voudrions', 'pourrions', 'serions'],
            ['vous', 'aimeriez', 'voudriez', 'pourriez', 'seriez'],
            ['ils / elles', 'aimeraient', 'voudraient', 'pourraient', 'seraient'],
          ],
        ),
        p(
          'Other irregular stems: **avoir → aur-**, **aller → ir-**, **faire → fer-**, **devoir → devr-**, **savoir → saur-**, **venir → viendr-**.',
        ),
      ),
      section(
        'use',
        'When to use it',
        table(
          'Uses of the conditional.',
          ['Use', 'example'],
          [
            ['polite request', 'Pourriez-vous m’aider ?'],
            ['wish', 'Je voudrais un renseignement.'],
            ['advice', 'Tu devrais acheter d’occasion.'],
            ['imaginary result', 'Si j’avais le temps, je réparerais tout.'],
          ],
        ),
        examples(
          ['Je voudrais réparer mon vélo.', 'I would like to repair my bike.'],
          ['Ça serait plus écologique.', 'That would be more ecological.'],
          [
            'Si nous jetions moins, nous aurions moins de déchets.',
            'If we threw away less, we would have less waste.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Si j’aurais le temps, je réparerais.  ✓ Si j’avais le temps, je réparerais.',
          '✗ Je voudrai un renseignement.  ✓ Je voudrais un renseignement.',
        ),
        tip(
          'Je veux or je voudrais?',
          'Je veux sounds like an order. In shops and offices say je voudrais or pourriez-vous.',
        ),
      ),
    ],
    related: ['fr-prendre-vouloir', 'fr-futur-proche'],
    sources: [S.conditional],
  },
  {
    id: 'fr-a22-gerund',
    title: 'The gerund: en réparant',
    tagline: 'How do I say how, or while, I do something?',
    level: LEVEL,
    summary:
      'En + the -ant form says how or while: en achetant, en faisant. Only être, avoir and savoir are irregular. The subject is the same as in the main verb.',
    sections: [
      section(
        'forms',
        'Forming the gerund',
        p(
          'Take the **nous** form of the present, remove **-ons**, and add **-ant**. Put **en** in front. The gerund never changes.',
        ),
        table(
          'Gerund forms.',
          ['Infinitive', 'nous form', 'gerund'],
          [
            ['acheter', 'nous achetons', 'en achetant'],
            ['finir', 'nous finissons', 'en finissant'],
            ['faire', 'nous faisons', 'en faisant'],
            ['prendre', 'nous prenons', 'en prenant'],
            ['être', '(irregular)', 'en étant'],
            ['avoir', '(irregular)', 'en ayant'],
            ['savoir', '(irregular)', 'en sachant'],
          ],
        ),
      ),
      section(
        'use',
        'What it expresses',
        p(
          'The gerund answers **comment ?** (how) or says that two actions happen **at the same time**. Both actions have the **same subject**.',
        ),
        examples(
          [
            'On économise de l’argent en achetant d’occasion.',
            'You save money by buying second-hand.',
          ],
          [
            'Il écoute la radio en réparant la lampe.',
            'He listens to the radio while repairing the lamp.',
          ],
          ['En étant prudent, on évite les erreurs.', 'By being careful, you avoid mistakes.'],
        ),
        mistake(
          'Watch out',
          '✗ en acheter  ✓ en achetant',
          '✗ J’ai trouvé la solution en cherchent.  ✓ …en cherchant.',
        ),
      ),
    ],
    related: ['fr-er-verbs', 'fr-ir-verbs'],
    sources: [S.gerund],
  },
  {
    id: 'fr-a22-noun-complements',
    title: 'Noun complements: en, à, de',
    tagline: 'How do I say what an object is made of or used for?',
    level: LEVEL,
    summary:
      'En gives the material (une table en bois), à gives the use (une machine à laver), and de gives the content or the kind (un verre de lait, un sac de sport).',
    sections: [
      section(
        'three',
        'En, à and de',
        p(
          'A **noun complement** is a second noun that tells you more about the first. It is introduced by a small word, usually without an article.',
        ),
        table(
          'Which small word?',
          ['Word', 'meaning', 'example'],
          [
            ['en', 'material', 'une table en bois, un pull en laine'],
            ['à', 'use, purpose', 'une machine à laver, une tasse à café'],
            ['de', 'content, kind', 'un verre de lait, un sac de sport'],
          ],
        ),
        compare(
          {
            title: 'À + noun',
            question: 'What is it used for?',
            example: 'une tasse à café (a cup for coffee)',
          },
          {
            title: 'De + noun',
            question: 'What is inside it?',
            example: 'une tasse de café (a cup of coffee)',
          },
        ),
      ),
      section(
        'extra',
        'More examples',
        examples(
          ['une boîte à outils', 'a toolbox'],
          ['une bouteille d’eau', 'a bottle of water'],
          ['un sac en papier', 'a paper bag'],
          ['une salle de bains', 'a bathroom'],
        ),
        mistake(
          'Watch out',
          '✗ une table de bois  ✓ une table en bois',
          '✗ une brosse pour dents  ✓ une brosse à dents',
        ),
      ),
    ],
    related: ['fr-articles', 'fr-contractions'],
    sources: [S.nounComplement],
  },

  // ---- Unit 4 (Envie d’ailleurs ?) ----
  {
    id: 'fr-a22-narration',
    title: 'Telling a story: imparfait and passé composé',
    tagline: 'Which past tense do I use in a story?',
    level: LEVEL,
    summary:
      'The imparfait sets the scene (weather, descriptions, habits, an action in progress). The passé composé reports the events that move the story forward.',
    sections: [
      section(
        'forms',
        'The imparfait',
        p(
          'Take the **nous** form of the present, remove **-ons**, and add **-ais, -ais, -ait, -ions, -iez, -aient**. The only irregular stem is **être → ét-**.',
        ),
        table(
          'Imparfait forms.',
          ['Person', 'visiter', 'prendre', 'être'],
          [
            ['je', 'visitais', 'prenais', 'étais'],
            ['tu', 'visitais', 'prenais', 'étais'],
            ['il / elle / on', 'visitait', 'prenait', 'était'],
            ['nous', 'visitions', 'prenions', 'étions'],
            ['vous', 'visitiez', 'preniez', 'étiez'],
            ['ils / elles', 'visitaient', 'prenaient', 'étaient'],
          ],
        ),
      ),
      section(
        'use',
        'Setting and events',
        compare(
          {
            title: 'Imparfait',
            question: 'What was the situation?',
            example: 'Il faisait beau. Nous étions fatigués.',
          },
          {
            title: 'Passé composé',
            question: 'What happened?',
            example: 'Nous sommes arrivés à midi.',
          },
        ),
        examples(
          ['Il pleuvait quand nous sommes arrivés.', 'It was raining when we arrived.'],
          ['Je dormais quand le téléphone a sonné.', 'I was sleeping when the phone rang.'],
          [
            'Quand j’étais petit, nous allions toujours à la mer.',
            'When I was small, we always went to the sea.',
          ],
        ),
        tip(
          'Signal words',
          'Soudain, tout à coup, ce jour-là and hier introduce an event (passé composé). Toujours, souvent, d’habitude and chaque été go with the imparfait.',
        ),
        mistake(
          'Watch out',
          '✗ Soudain, il pleuvait.  ✓ Soudain, il a plu.',
          '✗ Il a fait beau et nous étions heureux.  ✓ Il faisait beau et nous étions heureux.',
        ),
      ),
    ],
    related: ['fr-a21-passe-compose', 'fr-sequence'],
    sources: [S.imparfait, S.passeCompose],
  },
  {
    id: 'fr-a22-participle-agreement',
    title: 'Agreement of the past participle',
    tagline: 'When does the participle take an -e or an -s?',
    level: LEVEL,
    summary:
      'With être the participle agrees with the subject. With avoir it agrees with a direct object that stands before the verb; otherwise it does not change.',
    sections: [
      section(
        'etre',
        'With être',
        p(
          'The participle of verbs conjugated with **être** (and of reflexive verbs) agrees with the **subject** in gender and number.',
        ),
        table(
          'Agreement with être.',
          ['Subject', 'aller', 'arriver'],
          [
            ['il', 'allé', 'arrivé'],
            ['elle', 'allée', 'arrivée'],
            ['ils', 'allés', 'arrivés'],
            ['elles', 'allées', 'arrivées'],
          ],
        ),
      ),
      section(
        'avoir',
        'With avoir',
        p(
          'The participle agrees with the **direct object only if it stands before the verb**: in a relative clause with **que**, or as a pronoun (**le, la, l’, les**). If the object follows, nothing changes.',
        ),
        examples(
          ['La valise que j’ai perdue est bleue.', 'The suitcase that I lost is blue.'],
          ['Marie ? Je l’ai vue à la gare.', 'Marie? I saw her at the station.'],
          ['Nous avons visité la ville.', 'We visited the town.'],
        ),
        mistake(
          'Watch out',
          '✗ Elle est allé à Rome.  ✓ Elle est allée à Rome.',
          '✗ Les photos que j’ai pris.  ✓ Les photos que j’ai prises.',
        ),
      ),
    ],
    related: ['fr-a21-participles', 'fr-pronominal'],
    sources: [S.participleAgreement],
  },
  {
    id: 'fr-a22-demonstrative-pronouns',
    title: 'Celui, celle, ceux, celles',
    tagline: 'How do I say “this one”, “the one” or “those”?',
    level: LEVEL,
    summary:
      'Celui, celle, ceux and celles replace a noun that was already mentioned. They are followed by -ci or -là, by de + noun, or by qui / que.',
    sections: [
      section(
        'forms',
        'Forms and endings',
        table(
          'Demonstrative pronouns.',
          ['Gender', 'singular', 'plural'],
          [
            ['masculine', 'celui', 'ceux'],
            ['feminine', 'celle', 'celles'],
          ],
        ),
        p(
          'They never stand alone. Add **-ci** (near) or **-là** (far), **de + noun** (belonging) or **qui / que** (a relative clause).',
        ),
        examples(
          ['Celle-ci est moins chère que celle-là.', 'This one is cheaper than that one.'],
          ['Je prends celui de 11 h.', 'I take the 11 o’clock one.'],
          ['Ceux qui partent tôt doivent réserver.', 'Those who leave early must book.'],
        ),
      ),
      section(
        'choose',
        'Choosing the right form',
        p(
          'The pronoun has the **gender and number of the noun it replaces**: **la chambre → celle**, **les billets → ceux**. For people in general use **ceux qui…**.',
        ),
        mistake(
          'Watch out',
          '✗ Je préfère ce de mon frère.  ✓ Je préfère celui de mon frère.',
          '✗ Celui-ci chambre est calme.  ✓ Celle-ci est calme. (no noun after the pronoun)',
        ),
      ),
    ],
    related: ['fr-demonstratives'],
    sources: [S.demonstrativePronoun],
  },

  // ---- Unit 5 (De jolis parcours) ----
  {
    id: 'fr-a22-cleft',
    title: 'Emphasis: c’est … qui / que',
    tagline: 'How do I put the stress on one word?',
    level: LEVEL,
    summary:
      'Put the word you want to stress between c’est and qui or que. Qui replaces a subject, que replaces an object or a complement. Ce qui, ce que and ce dont stress a whole idea.',
    sections: [
      section(
        'cest',
        'C’est … qui, c’est … que',
        p(
          'A **cleft sentence** pulls one word to the front to stress it. After **c’est** and the stressed word, use **qui** if that word is the **subject** of the verb, and **que** if it is the **object** or a **complement** of place, time or cause.',
        ),
        table(
          'Stressing with c’est.',
          ['Stressed word', 'link', 'example'],
          [
            ['subject', 'qui', 'C’est Marie qui a trouvé ce stage.'],
            ['object', 'que', 'C’est ce métier que je veux faire.'],
            ['place / time / cause', 'que', 'C’est à Lyon que j’ai fait mes études.'],
          ],
        ),
        p(
          'With a stress pronoun the verb agrees with it: **c’est moi qui ai écrit la lettre**, **c’est toi qui as gagné**.',
        ),
      ),
      section(
        'ce',
        'Ce qui, ce que, ce dont',
        p(
          'To stress a whole idea, start with **ce qui** (subject), **ce que** (object) or **ce dont** (verb with de), then **c’est**.',
        ),
        examples(
          ['Ce qui m’intéresse, c’est la médecine.', 'What interests me is medicine.'],
          [
            'Ce que je cherche, c’est un emploi à temps partiel.',
            'What I am looking for is a part-time job.',
          ],
          ['Ce dont j’ai besoin, c’est d’un stage.', 'What I need is an internship.'],
        ),
        mistake(
          'Watch out',
          '✗ C’est ce poste qui je veux.  ✓ C’est ce poste que je veux.',
          '✗ C’est moi qui a écrit.  ✓ C’est moi qui ai écrit.',
        ),
      ),
    ],
    related: ['fr-pronouns', 'fr-a22-pronoun-order'],
    sources: [S.cleft],
  },
  {
    id: 'fr-a22-reported-speech',
    title: 'Reported speech in the present',
    tagline: 'How do I say what someone said?',
    level: LEVEL,
    summary:
      'With a reporting verb in the present the tense stays the same. Statements take que, yes / no questions take si, commands take de + infinitive. The pronouns change with the speaker.',
    sections: [
      section(
        'types',
        'Statements, questions and commands',
        table(
          'Direct → reported.',
          ['Type', 'direct speech', 'reported speech'],
          [
            ['statement', 'Léa : « Je cherche un stage. »', 'Léa dit qu’elle cherche un stage.'],
            [
              'yes / no question',
              'Elle : « Tu as un diplôme ? »',
              'Elle me demande si j’ai un diplôme.',
            ],
            [
              'question word',
              'Il : « Où travaillez-vous ? »',
              'Il nous demande où nous travaillons.',
            ],
            [
              'what?',
              'Elle : « Qu’est-ce que tu cherches ? »',
              'Elle me demande ce que je cherche.',
            ],
            ['command', 'Le professeur : « Travaillez ! »', 'Il nous dit de travailler.'],
          ],
        ),
      ),
      section(
        'rules',
        'What changes',
        p(
          'The **tense** stays when the reporting verb is in the present. The **pronouns and possessives** follow the speaker (je → il, ton → mon, …). Questions lose the **inversion** and the question mark. Negative commands: **de ne pas + infinitive**.',
        ),
        examples(
          [
            'Mon père me dit de ne pas partir trop tard.',
            'My father tells me not to leave too late.',
          ],
          [
            'Ils disent qu’ils ont un entretien demain.',
            'They say they have an interview tomorrow.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Elle me demande que j’ai un diplôme.  ✓ Elle me demande si j’ai un diplôme.',
          '✗ Il demande où travaillez-vous.  ✓ Il demande où nous travaillons.',
        ),
      ),
    ],
    related: ['fr-questions', 'fr-imperative'],
    sources: [S.reportedSpeech],
  },
  {
    id: 'fr-a22-pronoun-y',
    title: 'The pronouns y and en',
    tagline: 'How do I replace a place or a thing after à or de?',
    level: LEVEL,
    summary:
      'Y replaces à, dans, en or chez + a place or a thing. En replaces de + a place or a thing, or a quantity. Both go before the verb.',
    sections: [
      section(
        'y',
        'Y: there, about it',
        p(
          '**Y** replaces **à / dans / en / chez + a place** (**j’y vais**) or **à + a thing** (**je pense à mon examen → j’y pense**). For a person, use **lui** or **leur** instead.',
        ),
        examples(
          [
            '— Tu vas à la fac ? — Oui, j’y vais tous les jours.',
            'Do you go to university? Yes, I go there every day.',
          ],
          ['Elle y habite depuis 2020.', 'She has lived there since 2020.'],
          ['Nous y sommes allés ce matin.', 'We went there this morning.'],
        ),
      ),
      section(
        'en',
        'En: from there, about it',
        p(
          '**En** replaces **de + a place** (**je reviens de la fac → j’en reviens**) or **de + a thing** (**il parle de son stage → il en parle**), and a quantity.',
        ),
        compare(
          {
            title: 'Y',
            question: 'à + place or thing',
            example: 'Je pense à l’examen. → J’y pense.',
          },
          {
            title: 'En',
            question: 'de + place or thing',
            example: 'Je parle de l’examen. → J’en parle.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Je lui pense.  ✓ J’y pense. (a thing, not a person)',
          '✗ J’en vais.  ✓ J’y vais.',
        ),
      ),
    ],
    related: ['fr-a22-pronoun-order', 'fr-object-pronouns'],
    sources: [S.yPronoun],
  },
];
