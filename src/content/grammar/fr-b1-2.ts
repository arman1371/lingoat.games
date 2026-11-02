import { conditionnel } from '@/lib/french/conditional';
import {
  conditionnelPasse,
  futurAnterieur,
  gerondif,
  participePresent,
  plusQueParfait,
} from '@/lib/french/compound';
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

const conditionalTable = (caption: string, verbs: readonly string[]) =>
  table(
    caption,
    ['Person', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...verbs.map((v) => conditionnel(v)[pr])]),
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
  {
    id: 'fr-b12-future-choice',
    title: 'Which future to use',
    tagline: 'Present, aller + infinitive or simple future?',
    level: LEVEL,
    summary:
      'French has three ways to talk about the future. The present suits timetables and fixed arrangements, aller + infinitive suits what is about to happen, and the simple future suits plans, predictions and promises, and follows quand, lorsque and dès que.',
    sections: [
      section(
        'three-ways',
        'Three ways to look ahead',
        table(
          'Choosing the form.',
          ['Form', 'Use it for', 'Example'],
          [
            [
              'Present',
              'timetables, fixed arrangements, a very close future',
              'Le car part à huit heures.',
            ],
            [
              'aller + infinitive',
              'what is about to happen, what you can see coming, what you decide now',
              'Regarde le ciel : il va pleuvoir.',
            ],
            [
              'Simple future',
              'plans further away, predictions, promises, instructions',
              'L’été prochain, nous irons en Corse.',
            ],
          ],
        ),
        p(
          'The forms overlap in everyday speech: *Demain, je pars* and *Demain, je partirai* are both possible. The difference is a feeling of distance: the further away or the less certain, the more likely the simple future.',
        ),
      ),
      section(
        'clauses',
        'Time clauses: quand, lorsque, dès que',
        p(
          'After **quand**, **lorsque**, **dès que** and **aussitôt que**, French uses the **simple future** when the action is still to come, even though English uses the present: *Dès qu’il fera beau, nous partirons.* (“As soon as the weather is fine, we will leave.”) The main clause is future too.',
        ),
        examples(
          [
            'Quand j’arriverai au sommet, je prendrai une photo.',
            'When I get to the top, I will take a photo.',
          ],
          [
            'Lorsque la tempête sera passée, nous repartirons.',
            'When the storm is over, we will set off again.',
          ],
          ['D’ici deux jours, le brouillard se lèvera.', 'Within two days the fog will clear.'],
        ),
        mistake(
          'Watch out',
          '✗ Dès qu’il fait beau, nous partirons.  ✓ Dès qu’il fera beau, nous partirons.',
          '✗ Je vais pleuvoir.  ✓ Il va pleuvoir. (the weather verb is impersonal)',
        ),
        tip(
          'Time words',
          'demain, après-demain, la semaine prochaine, bientôt, prochainement and d’ici + time all point forward. Dans + time counts from now: dans deux jours = in two days’ time.',
        ),
      ),
    ],
    related: ['fr-futur-simple', 'fr-futur-proche'],
    sources: [S.futurSimple],
  },
  {
    id: 'fr-b12-si-clauses',
    title: 'Si… clauses',
    tagline: 'If it rains… if I were rich…',
    level: LEVEL,
    summary:
      'A si clause sets a condition. For something that can really happen, use si + present and then the present, the future or the imperative. For something imaginary or unlikely, use si + imparfait and then the conditional. The future and the conditional never follow si.',
    sections: [
      section(
        'two-types',
        'Possible or imaginary?',
        table(
          'The two common patterns.',
          ['Meaning', 'si clause', 'Main clause', 'Example'],
          [
            [
              'Real possibility',
              'present',
              'future, present or imperative',
              'Si tu viens, on sortira.',
            ],
            [
              'Imaginary or unlikely',
              'imparfait',
              'conditional',
              'Si j’avais le temps, je voyagerais.',
            ],
          ],
        ),
        p(
          'The choice depends on how **likely** the speaker thinks the condition is, not on the time. *Si je gagne au loto, j’achèterai une maison* is a hope; *Si je gagnais au loto, j’achèterais une maison* is a dream.',
        ),
        futureTable('The future in the main clause of a real condition.', ['sortir', 'être']),
        conditionalTable('The conditional in the main clause of an imaginary condition.', [
          'sortir',
          'être',
        ]),
      ),
      section(
        'never',
        'What never follows si',
        p(
          'After **si** (“if”) French never uses the future or the conditional. The condition stays in the present or the imparfait; only the main clause carries the future or the conditional.',
        ),
        mistake(
          'Watch out',
          '✗ Si j’aurai le temps, je viendrai.  ✓ Si j’ai le temps, je viendrai.',
          '✗ Si j’aurais le temps, je viendrais.  ✓ Si j’avais le temps, je viendrais.',
        ),
        tip(
          'Indirect questions',
          'In “Je me demande s’il viendra” si means “whether”, and the future is allowed there. It only follows si when si means “if”.',
        ),
        p(
          'Before **il** and **ils**, si becomes **s’**: *s’il pleut, s’ils viennent*. It does not elide before elle or on.',
        ),
      ),
      section(
        'order',
        'Order and variations',
        p(
          'The si clause can come first or second: *Si tu veux, je t’aide* or *Je t’aide si tu veux.* When it comes first, a comma follows. For a real condition the main clause can also be an **imperative**: *Si tu as froid, ferme la fenêtre.*',
        ),
        examples(
          [
            'Si vous prenez ce train, vous arriverez à midi.',
            'If you take this train, you will arrive at noon.',
          ],
          [
            'Si nous avions un chien, nous marcherions plus.',
            'If we had a dog, we would walk more.',
          ],
          ['Si tu as soif, bois de l’eau.', 'If you are thirsty, drink some water.'],
        ),
      ),
    ],
    related: ['fr-b12-conditional', 'fr-futur-simple'],
    sources: [S.phraseConditionnelle, S.conditionnel],
  },
  {
    id: 'fr-b12-conditional',
    title: 'The conditional',
    tagline: 'Would, could, should: wishes and polite requests',
    level: LEVEL,
    summary:
      'The conditional present is the stem of the simple future plus the endings of the imparfait. It expresses an imaginary result, a polite request, advice, a wish or an unconfirmed fact. The three modal verbs vouloir, pouvoir and devoir are the most common.',
    sections: [
      section(
        'form',
        'How it is built',
        p(
          'Take the **future stem** (the form that ends in -r-) and add the **endings of the imparfait**: **-ais, -ais, -ait, -ions, -iez, -aient**. The r is always heard: *je viendrais*.',
        ),
        conditionalTable('Regular and irregular verbs in the conditional.', [
          'voyager',
          'prendre',
          'aller',
          'avoir',
        ]),
        table(
          'Future and conditional side by side.',
          ['Verb', 'Future (je)', 'Conditional (je)'],
          [
            ['être', futurSimple('être')['je'], conditionnel('être')['je']],
            ['faire', futurSimple('faire')['je'], conditionnel('faire')['je']],
            ['pouvoir', futurSimple('pouvoir')['je'], conditionnel('pouvoir')['je']],
            ['vouloir', futurSimple('vouloir')['je'], conditionnel('vouloir')['je']],
          ],
        ),
        p(
          'Compare the endings with the imparfait: *je finissais, je finirais*. The stem differs, the endings are the same.',
        ),
      ),
      section(
        'use',
        'What it is used for',
        table(
          'Common uses.',
          ['Use', 'Example'],
          [
            ['Polite request', 'Pourriez-vous m’aider ?'],
            ['Wish', 'Je voudrais un billet pour Nice.'],
            ['Advice', 'Tu devrais te reposer.'],
            ['Imaginary result', 'Nous irions en Corse.'],
            ['Unconfirmed information', 'Il y aurait un retard.'],
          ],
        ),
        tip(
          'Softening',
          'Je veux un café is direct; Je voudrais un café is polite. Pourriez-vous… ? and Auriez-vous… ? are the usual ways to ask politely in a shop or at an office.',
        ),
      ),
      section(
        'watch',
        'Watch out',
        mistake(
          'Common slips',
          '✗ Je voudrai un billet.  ✓ Je voudrais un billet. (voudrai is the future)',
          '✗ Si j’irais, je verrais.  ✓ Si j’allais, je verrais.',
        ),
        examples(
          ['Je voudrais réserver une chambre.', 'I would like to book a room.'],
          ['À ta place, je prendrais le train.', 'In your place I would take the train.'],
          ['Nous pourrions partir demain.', 'We could leave tomorrow.'],
        ),
      ),
    ],
    related: ['fr-b12-si-clauses', 'fr-futur-simple'],
    sources: [S.conditionnel, S.phraseConditionnelle],
  },
  {
    id: 'fr-b12-past-hypotheses',
    title: 'Regrets and the past',
    tagline: 'If I had known… I should have…',
    level: LEVEL,
    summary:
      'The plus-que-parfait (j’avais su) and the past conditional (je serais venu) let you talk about a past that did not happen. Together they form the third type of si sentence, and with devoir and pouvoir they express regrets and reproaches: j’aurais dû, tu aurais pu.',
    sections: [
      section(
        'pqp',
        'The plus-que-parfait',
        p(
          'The **plus-que-parfait** is the **imparfait** of *avoir* or *être* plus the **past participle**. It describes something that had already happened before another past moment: *Quand je suis arrivé, elle était déjà partie.* The same verbs take *être* as in the passé composé, and the participle agrees with the subject.',
        ),
        table(
          'Plus-que-parfait of three verbs.',
          ['Person', 'finir', 'prendre', 'partir (elle)'],
          FRENCH_PRONOUNS.map((pr) => [
            pr,
            plusQueParfait('finir')[pr],
            plusQueParfait('prendre')[pr],
            plusQueParfait('partir', { feminine: true })[pr],
          ]),
        ),
      ),
      section(
        'cond-past',
        'The past conditional',
        p(
          'The **conditionnel passé** is the **conditional** of *avoir* or *être* plus the **past participle**. It says what would have happened, or what you should or could have done.',
        ),
        table(
          'Past conditional of three verbs.',
          ['Person', 'faire', 'aller', 'devoir'],
          FRENCH_PRONOUNS.map((pr) => [
            pr,
            conditionnelPasse('faire')[pr],
            conditionnelPasse('aller')[pr],
            conditionnelPasse('devoir')[pr],
          ]),
        ),
        examples(
          ['J’aurais dû vous écouter.', 'I should have listened to you.'],
          ['Tu aurais pu me prévenir !', 'You could have warned me!'],
          ['Nous serions restés plus longtemps.', 'We would have stayed longer.'],
        ),
      ),
      section(
        'si',
        'Si + plus-que-parfait',
        p(
          'For an imaginary **past**, put the **si** clause in the plus-que-parfait and the main clause in the past conditional: *Si j’avais su, je serais venu.* As always, the conditional never follows si.',
        ),
        table(
          'The three types of si sentence.',
          ['Meaning', 'si clause', 'Main clause'],
          [
            ['Possible', 'present', 'future'],
            ['Imaginary now', 'imparfait', 'conditional'],
            ['Imaginary past', 'plus-que-parfait', 'past conditional'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Si j’aurais su, je serais venu.  ✓ Si j’avais su, je serais venu.',
          '✗ J’ai dû vous écouter. (for a regret)  ✓ J’aurais dû vous écouter.',
        ),
      ),
    ],
    related: ['fr-b12-si-clauses', 'fr-b12-conditional'],
    sources: [S.plusQueParfait, S.conditionnel],
  },
  {
    id: 'fr-b12-prepositions',
    title: 'Verbs with prepositions',
    tagline: 'Participer à, dépendre de, lutter contre',
    level: LEVEL,
    summary:
      'Many French verbs and adjectives need a fixed preposition before their complement, and it often differs from English. The preposition must be learned with the verb. After à and de remember the contractions: au, aux, du, des.',
    sections: [
      section(
        'ad',
        'Verbs with à and de',
        table(
          'Common verbs and adjectives.',
          ['With à', 'With de'],
          [
            ['participer à un projet', 'dépendre de la pluie'],
            ['s’intéresser à l’écologie', 'se soucier de l’avenir'],
            ['contribuer à un changement', 's’occuper du tri'],
            ['être sensible à un problème', 'être capable de changer'],
            ['être favorable à une loi', 'être responsable de la planète'],
          ],
        ),
        p(
          'Before a **noun**, the preposition combines with the article: **à + le = au, à + les = aux, de + le = du, de + les = des**. Before an **infinitive** the preposition stays alone: *Il est capable de changer.*',
        ),
      ),
      section(
        'others',
        'Other prepositions',
        p(
          'Some verbs take a different preposition, and some take none at all. Learn them as a block: **lutter contre** (to fight against), **compter sur** (to count on), **attendre** (to wait for, no preposition), **penser à** (to think of) but **penser que** (to think that).',
        ),
        examples(
          ['Nous luttons contre le gaspillage.', 'We fight against waste.'],
          ['Vous pouvez compter sur nous.', 'You can count on us.'],
          ['J’attends le bus.', 'I am waiting for the bus.'],
        ),
        mistake(
          'Watch out',
          '✗ Je m’occupe le tri.  ✓ Je m’occupe du tri.',
          '✗ Il participe de la réunion.  ✓ Il participe à la réunion.',
          '✗ J’attends pour le bus.  ✓ J’attends le bus.',
        ),
      ),
    ],
    related: ['fr-contractions'],
    sources: [S.preposition, S.contraction],
  },
  {
    id: 'fr-b12-gerondif',
    title: 'The gérondif',
    tagline: 'Parler en marchant, apprendre en pratiquant',
    level: LEVEL,
    summary:
      'The gérondif is en + the participe présent (en parlant, en finissant). It never changes. It shows that two actions happen at the same time, how something is done, or a condition. Its subject is always the subject of the main verb.',
    sections: [
      section(
        'form',
        'How it is built',
        p(
          'Take the **nous** form of the present, drop **-ons** and add **-ant**: *nous parlons → parlant, nous finissons → finissant, nous faisons → faisant*. Put **en** in front. Three verbs are irregular: **être → étant, avoir → ayant, savoir → sachant**.',
        ),
        table(
          'Participe présent and gérondif.',
          ['Infinitive', 'Participe présent', 'Gérondif'],
          ['parler', 'finir', 'prendre', 'faire', 'aller', 'savoir'].map((v) => [
            v,
            participePresent(v),
            gerondif(v),
          ]),
        ),
        tip(
          'Invariable',
          'The gérondif never agrees with anything: Elles chantent en marchant. Only the main verb changes.',
        ),
      ),
      section(
        'use',
        'What it expresses',
        table(
          'Three meanings.',
          ['Meaning', 'Example'],
          [
            ['At the same time', 'Elle chante en cuisinant.'],
            ['The way (by doing)', 'On apprend en pratiquant.'],
            ['Condition (if)', 'En partant tôt, vous éviterez les bouchons.'],
          ],
        ),
        p(
          'Both actions must have the **same subject**: *Je l’ai vu en sortant* means that I was going out. With two subjects, use a relative clause or quand.',
        ),
        mistake(
          'Watch out',
          '✗ Elle parle en marche.  ✓ Elle parle en marchant.',
          '✗ Ils parlent en marchants.  ✓ Ils parlent en marchant.',
          '✗ En étant sorti, … (to say “after”)  ✓ Après être sorti, …',
        ),
      ),
    ],
    related: ['fr-b12-connectors', 'fr-b12-prepositions'],
    sources: [S.gerondif, S.participePresent],
  },
  {
    id: 'fr-b12-connectors',
    title: 'Linking words',
    tagline: 'D’abord, de plus, cependant, en somme',
    level: LEVEL,
    summary:
      'Connectors give a talk or a text its structure. They order ideas, add arguments, contrast, concede a point, give examples and conclude. Placed at the start of a sentence or clause, they are usually followed by a comma.',
    sections: [
      section(
        'types',
        'What connectors do',
        table(
          'Connectors by function.',
          ['Function', 'Connectors'],
          [
            ['Order', 'd’abord, ensuite, puis, enfin'],
            ['Add', 'de plus, d’ailleurs, en effet'],
            ['Contrast', 'cependant, pourtant, en revanche'],
            ['Concede', 'certes … mais'],
            ['Illustrate / reformulate', 'par exemple, autrement dit'],
            ['Conclude', 'en somme, en résumé'],
          ],
        ),
      ),
      section(
        'use',
        'Using them well',
        p(
          '**En effet** confirms and explains the previous sentence (*Il est fatigué. En effet, il a peu dormi.*). **Pourtant** and **cependant** contrast with what was expected: *Il pleut ; pourtant, nous sortons.* **En revanche** compares two things: *La ville est bruyante ; en revanche, la campagne est calme.*',
        ),
        examples(
          [
            'Certes, c’est cher, mais c’est utile.',
            'Admittedly it is expensive, but it is useful.',
          ],
          [
            'Le vélo est rapide ; de plus, il est écologique.',
            'The bike is fast; moreover, it is ecological.',
          ],
          ['En somme, nous sommes d’accord.', 'In short, we agree.'],
        ),
        mistake(
          'Watch out',
          '✗ Pourtant, mais c’est cher.  ✓ Certes, mais c’est cher.',
          '✗ Pourtant il est riche, il est malheureux.  ✓ Il est riche ; pourtant, il est malheureux.',
        ),
      ),
    ],
    related: ['fr-b12-gerondif', 'fr-sequence'],
    sources: [S.connecteur, S.cependant],
  },
  {
    id: 'fr-b12-indefinite',
    title: 'Indefinite pronouns',
    tagline: 'Quelqu’un, personne, plusieurs, la plupart',
    level: LEVEL,
    summary:
      'Indefinite pronouns refer to people, things or amounts without naming them exactly. Personne and rien are negative and go with ne. Plusieurs, certains and aucun can be combined with en, and la plupart is followed by des + plural noun.',
    sections: [
      section(
        'overview',
        'People, things and amounts',
        table(
          'The main indefinite pronouns.',
          ['Group', 'Positive', 'Negative'],
          [
            ['People', 'quelqu’un, tout le monde, chacun', 'personne … ne / ne … personne'],
            ['Things', 'quelque chose, tout, n’importe quoi', 'rien … ne / ne … rien'],
            ['Amounts', 'plusieurs, certains, la plupart (des)', 'aucun(e) … ne / ne … aucun(e)'],
          ],
        ),
        p(
          '**Personne** and **rien** can be the subject (*Personne n’a rien dit*) or the object (*Je n’ai vu personne*). In a compound tense, **rien** sits before the participle (*Je n’ai rien vu*) and **personne** after it (*Je n’ai vu personne*).',
        ),
      ),
      section(
        'agreement',
        'Verb and noun agreement',
        p(
          '**Chacun** and **aucun** are singular: *Chacun a son avis.* **Plusieurs** and **certains** are plural: *Plusieurs sont partis.* **La plupart des** + plural noun takes a plural verb: *La plupart des gens respectent les règles.* **Aucun** has a feminine form, **aucune**.',
        ),
        tip(
          'With en',
          'When the noun is dropped, en stays in the sentence and the pronoun gives the amount: Des fresques ? Il y en a plusieurs. / Je n’en ai vu aucune.',
        ),
        examples(
          ['Personne n’a protesté.', 'Nobody protested.'],
          ['Certains aiment, d’autres non.', 'Some like it, others do not.'],
          ['J’en ai vu plusieurs.', 'I saw several of them.'],
        ),
        mistake(
          'Watch out',
          '✗ Chacun ont leur avis.  ✓ Chacun a son avis.',
          '✗ Je n’ai vu rien.  ✓ Je n’ai rien vu.',
          '✗ Je n’ai pas vu personne.  ✓ Je n’ai vu personne.',
        ),
      ),
    ],
    related: ['fr-negation', 'fr-object-pronouns'],
    sources: [S.indefini, S.negation],
  },
  {
    id: 'fr-b12-reported-speech',
    title: 'Reported speech',
    tagline: 'Il a dit qu’il viendrait',
    level: LEVEL,
    summary:
      'Reported speech tells what someone said without quoting. Statements use que, yes/no questions use si, and other questions use the question word (with ce que for que). When the introducing verb is in the past, the tenses and time words shift.',
    sections: [
      section(
        'basics',
        'Statements and questions',
        table(
          'From direct to reported speech.',
          ['Direct', 'Reported'],
          [
            ['Il dit : « Je suis fatigué. »', 'Il dit qu’il est fatigué.'],
            ['Elle demande : « Tu as faim ? »', 'Elle demande si j’ai faim.'],
            ['Il demande : « Où est la gare ? »', 'Il demande où est la gare.'],
            ['Il demande : « Que veux-tu ? »', 'Il demande ce que je veux.'],
          ],
        ),
        p(
          'Pronouns and possessives change with the point of view: *« Je t’aime »* becomes *Il dit qu’il m’aime* when you report it to the person addressed. The word order is that of a statement, with **no inversion**.',
        ),
      ),
      section(
        'tenses',
        'Agreement of tenses',
        p(
          'When the introducing verb is in the **past** (*il a dit, elle demandait*), the tenses of the original sentence shift back one step. If the introducing verb is in the present, nothing changes.',
        ),
        table(
          'Shifts after a past verb of saying.',
          ['Direct speech', 'Reported speech'],
          [
            ['présent', 'imparfait'],
            ['passé composé', 'plus-que-parfait'],
            ['futur simple', 'conditionnel présent'],
            ['futur proche (je vais partir)', 'aller à l’imparfait (il allait partir)'],
          ],
        ),
        table(
          'Time words shift too.',
          ['Direct', 'Reported (in the past)'],
          [
            ['demain', 'le lendemain'],
            ['hier', 'la veille'],
            ['aujourd’hui', 'ce jour-là'],
            ['maintenant', 'à ce moment-là'],
            ['la semaine prochaine', 'la semaine suivante'],
          ],
        ),
        examples(
          ['Il a dit : « Je viendrai demain. »', 'He said: “I will come tomorrow.”'],
          ['Il a dit qu’il viendrait le lendemain.', 'He said that he would come the next day.'],
          ['Elle a demandé si nous avions fini.', 'She asked whether we had finished.'],
        ),
        mistake(
          'Watch out',
          '✗ Il a dit qu’il viendra demain.  ✓ Il a dit qu’il viendrait le lendemain.',
          '✗ Elle a demandé que j’avais faim.  ✓ Elle a demandé si j’avais faim.',
        ),
      ),
    ],
    related: ['fr-b12-inversion', 'fr-b12-past-hypotheses'],
    sources: [S.discoursIndirect, S.concordance],
  },
  {
    id: 'fr-b12-inversion',
    title: 'Formal questions',
    tagline: 'Où habitez-vous ? Pourriez-vous… ?',
    level: LEVEL,
    summary:
      'Formal French questions invert the verb and the subject pronoun and join them with a hyphen. A noun subject stays in front and is repeated by a pronoun. A -t- separates two vowels. Inversion is common in writing, at offices and in polite requests.',
    sections: [
      section(
        'form',
        'How to invert',
        table(
          'Three ways to ask the same question.',
          ['Style', 'Example'],
          [
            ['Intonation (everyday)', 'Vous habitez où ?'],
            ['Est-ce que (neutral)', 'Où est-ce que vous habitez ?'],
            ['Inversion (formal)', 'Où habitez-vous ?'],
          ],
        ),
        p(
          'Put the **verb first** and the **pronoun after it**, with a **hyphen**: *Parlez-vous français ? Avez-vous votre passeport ?* In a compound tense only the **auxiliary** is inverted: *Avez-vous décidé ?*',
        ),
      ),
      section(
        'details',
        'Nouns and -t-',
        p(
          'A **noun subject** is not inverted: it stays first and a pronoun is added: *Paul est-il arrivé ? Vos parents ont-ils répondu ?* When the verb ends in a vowel and the pronoun is il, elle or on, add **-t-**: *A-t-il répondu ? Parle-t-elle anglais ?*',
        ),
        tip(
          'Polite requests',
          'Pourriez-vous… ? and Auriez-vous… ? are the standard polite request forms in shops and offices. Je voudrais… is the polite statement.',
        ),
        examples(
          ['Pourriez-vous m’indiquer le tarif ?', 'Could you tell me the price?'],
          ['Quand votre collègue est-il arrivé ?', 'When did your colleague arrive?'],
          ['A-t-elle déjà répondu ?', 'Has she already answered?'],
        ),
        mistake(
          'Watch out',
          '✗ Paul est arrivé-t-il ?  ✓ Paul est-il arrivé ?',
          '✗ A il répondu ?  ✓ A-t-il répondu ?',
        ),
      ),
    ],
    related: ['fr-b12-reported-speech', 'fr-b12-conditional'],
    sources: [S.discoursIndirect],
  },
  {
    id: 'fr-b12-compound-relatives',
    title: 'lequel, auquel, dont',
    tagline: 'The method with which I study',
    level: LEVEL,
    summary:
      'After a preposition, French uses lequel, laquelle, lesquels and lesquelles, which agree with the noun they replace. With à they combine into auquel, auxquels and auxquelles; with de they give duquel, desquels and desquelles, but dont usually replaces de + noun and also means “whose”.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Lequel and its contractions.',
          [
            'Combined with',
            'Masculine singular',
            'Feminine singular',
            'Masculine plural',
            'Feminine plural',
          ],
          [
            ['preposition +', 'lequel', 'laquelle', 'lesquels', 'lesquelles'],
            ['à +', 'auquel', 'à laquelle', 'auxquels', 'auxquelles'],
            ['de +', 'duquel', 'de laquelle', 'desquels', 'desquelles'],
          ],
        ),
        p(
          'Use them after **any preposition** (*avec, dans, pour, sans, sur…*) for things: *La méthode avec laquelle j’étudie est efficace.* For people **qui** also works: *les amis avec qui je révise.*',
        ),
      ),
      section(
        'dont',
        'Dont',
        p(
          '**Dont** replaces **de + noun** and links the clause to its antecedent: *le livre dont j’ai besoin* (avoir besoin **de** ce livre), *le sujet dont elle parle*. It also means **“whose”**: *l’étudiant dont le mémoire est prêt.* Dont is followed by the subject of its clause, never by a preposition.',
        ),
        examples(
          ['Le professeur auquel j’ai écrit m’a répondu.', 'The teacher I wrote to answered me.'],
          [
            'Les examens auxquels je pense sont difficiles.',
            'The exams I am thinking of are hard.',
          ],
          ['Voilà le livre dont j’ai besoin.', 'Here is the book I need.'],
        ),
        mistake(
          'Watch out',
          '✗ Le livre que j’ai besoin.  ✓ Le livre dont j’ai besoin.',
          '✗ Le cours que je participe.  ✓ Le cours auquel je participe.',
          '✗ La salle dans lequel nous révisons.  ✓ La salle dans laquelle nous révisons.',
        ),
      ),
    ],
    related: ['fr-b12-prepositions', 'fr-interrogative-pronouns'],
    sources: [S.relatif],
  },
  {
    id: 'fr-b12-cause-consequence',
    title: 'Cause and consequence',
    tagline: 'Parce que, grâce à, donc, tellement… que',
    level: LEVEL,
    summary:
      'French has separate connectors for the cause (why?) and for the consequence (so what?). With a noun, choose à cause de for a negative cause and grâce à for a positive one. Donc, c’est pourquoi, si bien que and tellement… que introduce the result.',
    sections: [
      section(
        'cause',
        'Giving the cause',
        table(
          'Connectors of cause.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['parce que', 'a clause', 'Il est absent parce qu’il est malade.'],
            ['car', 'a clause (formal)', 'Il est absent, car il est malade.'],
            ['puisque', 'a clause (known reason)', 'Puisque tu le sais, dis-le.'],
            ['comme', 'a clause (at the start)', 'Comme il pleut, nous restons ici.'],
            ['à cause de', 'a noun (negative)', 'À cause de la grève, il marche.'],
            ['grâce à', 'a noun (positive)', 'Grâce à toi, j’ai réussi.'],
            ['en raison de', 'a noun (formal)', 'En raison de la tempête, le vol est annulé.'],
          ],
        ),
        p(
          '**Parce que** answers *pourquoi ?* and can stand alone. **Car** cannot start a sentence. **Comme** always comes first: *Comme il pleut, …* Do not confuse **à cause de** (blame) with **grâce à** (credit).',
        ),
      ),
      section(
        'consequence',
        'Giving the consequence',
        table(
          'Connectors of consequence.',
          ['Connector', 'Example'],
          [
            ['donc', 'Il pleut ; donc nous restons ici.'],
            ['alors', 'Il pleut, alors nous restons ici.'],
            ['par conséquent', 'Le pont est fermé ; par conséquent, il faut faire un détour.'],
            ['c’est pourquoi', 'Il y a une grève, c’est pourquoi les bus sont rares.'],
            ['si bien que', 'Il a neigé, si bien que les routes sont fermées.'],
            ['tellement / si … que', 'Il a tellement plu que la route est inondée.'],
          ],
        ),
        tip(
          'tellement … que',
          'Put tellement before the verb or an adjective and que before the result: Il est tellement fatigué qu’il dort. Use tant de for nouns: Il y a tant de monde que nous ne passons pas.',
        ),
        mistake(
          'Watch out',
          '✗ Grâce à la panne, nous sommes en retard.  ✓ À cause de la panne, nous sommes en retard.',
          '✗ Car il pleut, nous restons.  ✓ Comme il pleut, nous restons.',
        ),
      ),
    ],
    related: ['fr-b12-connectors', 'fr-b12-participe-present'],
    sources: [S.cause, S.consequence],
  },
  {
    id: 'fr-b12-participe-present',
    title: 'The present participle',
    tagline: 'Étant malade, il est resté au lit',
    level: LEVEL,
    summary:
      'The participe présent is formed like the gérondif without en. It is invariable and, in writing, gives the cause or the circumstances of the main action. Both verbs must have the same subject. Do not confuse it with the gérondif, which has en and tells how or when.',
    sections: [
      section(
        'form',
        'Form',
        table(
          'Participe présent of common verbs.',
          ['Infinitive', 'Participe présent'],
          ['parler', 'finir', 'prendre', 'faire', 'être', 'avoir', 'savoir'].map((v) => [
            v,
            participePresent(v),
          ]),
        ),
        p(
          'Take the **nous** form of the present, remove **-ons** and add **-ant**. The three exceptions are **étant**, **ayant** and **sachant**.',
        ),
      ),
      section(
        'use',
        'Use',
        p(
          'The participe présent gives a **reason** (*Étant fatiguée, elle est partie*), often at the start of a sentence in formal or written French. In everyday speech parce que or comme replaces it. With a different subject, use a relative clause: *un homme qui parle* (not a participle).',
        ),
        examples(
          ['Ayant peur, il a appelé la police.', 'Being afraid, he called the police.'],
          ['Sachant la réponse, elle a levé la main.', 'Knowing the answer, she raised her hand.'],
          ['Roulant trop vite, il a perdu le contrôle.', 'Driving too fast, he lost control.'],
        ),
        mistake(
          'Watch out',
          '✗ Elles étantes malades…  ✓ Étant malades, elles…',
          '✗ Ils parlent en marchants.  ✓ Ils parlent en marchant. (the gérondif never agrees either)',
        ),
      ),
    ],
    related: ['fr-b12-gerondif', 'fr-b12-cause-consequence'],
    sources: [S.participePresent, S.gerondif],
  },
  {
    id: 'fr-b12-double-pronouns',
    title: 'Two pronouns together',
    tagline: 'Je te le donne, il leur en parle',
    level: LEVEL,
    summary:
      'When a verb has two object pronouns, they follow a fixed order before the verb: me, te, nous, vous come before le, la, les; le, la, les come before lui and leur; y and en always come last. In a negative sentence ne goes before the pronouns and pas after the verb.',
    sections: [
      section(
        'order',
        'The order',
        table(
          'Order of two object pronouns.',
          ['First', 'Then', 'Example'],
          [
            ['me, te, nous, vous', 'le, la, les', 'Il me la prête.'],
            ['le, la, les', 'lui, leur', 'Je le lui donne.'],
            ['me, te, se, nous, vous, lui, leur', 'y', 'Il m’y emmène.'],
            ['me, te, se, nous, vous, lui, leur', 'en', 'Elle leur en offre.'],
          ],
        ),
        p(
          'Two third-person pronouns need the pattern **le / la / les + lui / leur**: *Je le lui donne*, never *je lui le donne*. Combinations such as *me lui* or *lui leur* do not exist. If both **y** and **en** appear, **y** comes first (*il y en a*).',
        ),
      ),
      section(
        'forms',
        'Tenses and the imperative',
        p(
          'In compound tenses the pronouns stand before the **auxiliary**: *Je te les ai donnés.* In a **negative** sentence: *Je ne te le prête pas.* In the **affirmative imperative** they follow the verb with hyphens, and the order changes to **direct object first**: *Donne-le-moi ! Parlez-lui-en !* Moi and toi replace me and te.',
        ),
        examples(
          [
            'Tu me prêtes ton maillot ? — Oui, je te le prête.',
            'Will you lend me your shirt? — Yes, I will lend it to you.',
          ],
          [
            'Elle parle du match à Léa ? — Oui, elle lui en parle.',
            'Does she talk to Léa about the match? — Yes, she talks to her about it.',
          ],
          ['Donne-le-moi !', 'Give it to me!'],
        ),
        mistake(
          'Watch out',
          '✗ Je lui le donne.  ✓ Je le lui donne.',
          '✗ Il en lui parle.  ✓ Il lui en parle.',
        ),
      ),
    ],
    related: ['fr-object-pronouns', 'fr-b12-emphasis'],
    sources: [S.pronounComplement],
  },
  {
    id: 'fr-b12-emphasis',
    title: 'C’est … qui / que',
    tagline: 'It is Paul who scored',
    level: LEVEL,
    summary:
      'To highlight one word, French frames it with c’est … qui when it is the subject and c’est … que when it is an object or a circumstance of place, time or manner. Before a plural noun or ils, use ce sont. After c’est moi qui, the verb agrees with the person.',
    sections: [
      section(
        'qui-que',
        'Qui or que?',
        table(
          'Stressing a word.',
          ['Stressed word', 'Frame', 'Example'],
          [
            ['subject', 'c’est … qui', 'C’est Paul qui a marqué.'],
            ['object', 'c’est … que', 'C’est ce match que j’ai préféré.'],
            ['place or time', 'c’est … que', 'C’est à Lyon que nous jouons.'],
            ['plural', 'ce sont … qui / que', 'Ce sont les fans qui chantent.'],
          ],
        ),
        p(
          'The stressed word is **moved to the front**: *Paul a marqué* becomes *C’est Paul qui a marqué.* Use it to correct, to contrast or to give a piece of information more force. With a pronoun use the stressed form: **c’est moi / toi / lui qui…**',
        ),
      ),
      section(
        'agreement',
        'Agreement',
        p(
          'After **c’est moi qui** the verb agrees with *moi*: *C’est moi qui ai gagné.* After **c’est toi qui**: *C’est toi qui as gagné.* After **c’est nous qui**: *C’est nous qui avons gagné.* With a noun, the verb is third person: *C’est Paul qui a gagné.*',
        ),
        examples(
          ['C’est moi qui ai gagné.', 'It was me who won.'],
          ['C’est demain que commence le tournoi.', 'It is tomorrow that the tournament starts.'],
          ['Ce sont les supporters qui chantent.', 'It is the fans who sing.'],
        ),
        mistake(
          'Watch out',
          '✗ C’est Paul que a marqué.  ✓ C’est Paul qui a marqué.',
          '✗ C’est moi qui a gagné.  ✓ C’est moi qui ai gagné.',
        ),
      ),
    ],
    related: ['fr-b12-double-pronouns', 'fr-b12-compound-relatives'],
    sources: [S.miseEnRelief],
  },
  {
    id: 'fr-b12-futur-anterieur',
    title: 'The future perfect',
    tagline: 'Quand j’aurai fini…',
    level: LEVEL,
    summary:
      'The futur antérieur is the futur simple of avoir or être plus the past participle. It names an action that will be completed before another future action or before a given moment. After quand, lorsque, dès que and aussitôt que it often sits next to a simple future.',
    sections: [
      section(
        'form',
        'How it is built',
        table(
          'Futur antérieur of three verbs.',
          ['Person', 'finir', 'arriver', 'partir (elle)'],
          FRENCH_PRONOUNS.map((pr) => [
            pr,
            futurAnterieur('finir')[pr],
            futurAnterieur('arriver')[pr],
            futurAnterieur('partir', { feminine: true })[pr],
          ]),
        ),
        p(
          'The auxiliary is the same as in the passé composé, and the participle agrees with the subject for être verbs (*elle sera partie, elles seront parties*).',
        ),
      ),
      section(
        'use',
        'When to use it',
        p(
          'Use it for an action that will be **finished first**: *Quand j’aurai fini, je t’appellerai.* (finish, then call). It also expresses completion by a certain time: *Demain à midi, l’équipe aura gagné la finale.* Compare the simple future in both clauses, where the actions happen together or in no special order.',
        ),
        examples(
          [
            'Dès qu’il sera arrivé, nous commencerons.',
            'As soon as he has arrived, we will start.',
          ],
          ['Elle sera rentrée avant vingt heures.', 'She will have come home before eight.'],
          [
            'Quand tu auras fait ton choix, dis-le-moi.',
            'When you have made your choice, tell me.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Quand j’ai fini, je t’appellerai.  ✓ Quand j’aurai fini, je t’appellerai.',
          '✗ Dès qu’il arrivera, nous aurons commencé.  ✓ Dès qu’il sera arrivé, nous commencerons.',
        ),
      ),
    ],
    related: ['fr-futur-simple', 'fr-b12-past-hypotheses'],
    sources: [S.futurAnterieur],
  },
  {
    id: 'fr-b12-opposition',
    title: 'Contrast and concession',
    tagline: 'Alors que, bien que, malgré',
    level: LEVEL,
    summary:
      'To contrast two facts, French uses alors que, tandis que and au contraire. To concede a point despite an obstacle, it uses bien que with the subjunctive, même si with the indicative, malgré and en dépit de with a noun, and néanmoins or toutefois between clauses.',
    sections: [
      section(
        'contrast',
        'Contrast: two things side by side',
        table(
          'Contrast.',
          ['Connector', 'Example'],
          [
            ['alors que', 'Il aime la peinture, alors qu’elle préfère la sculpture.'],
            ['tandis que', 'Je préfère le cinéma, tandis que mon frère aime le théâtre.'],
            ['au contraire', 'Il n’est pas timide ; au contraire, il adore parler.'],
          ],
        ),
        p(
          '**Alors que** and **tandis que** link two clauses that are in opposition. **Au contraire** corrects a previous idea.',
        ),
      ),
      section(
        'concession',
        'Concession: despite an obstacle',
        table(
          'Concession.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['bien que', 'subjunctive', 'Bien qu’il pleuve, nous sortons.'],
            ['même si', 'indicative', 'Même s’il pleut, nous sortirons.'],
            ['malgré', 'a noun', 'Malgré la pluie, nous sortons.'],
            ['en dépit de', 'a noun', 'En dépit des critiques, elle a réussi.'],
            ['néanmoins, toutefois', 'a new clause', 'Il est jeune ; néanmoins, il joue bien.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Bien qu’il est tard…  ✓ Bien qu’il soit tard…',
          '✗ Malgré il pleut…  ✓ Malgré la pluie… / Bien qu’il pleuve…',
          '✗ Même si il pleut  ✓ Même s’il pleut (si elides before il)',
        ),
      ),
    ],
    related: ['fr-b12-connectors', 'fr-b12-cause-consequence'],
    sources: [S.concession, S.bienQue],
  },
  {
    id: 'fr-b12-passe-simple',
    title: 'The passé simple',
    tagline: 'Il ouvrit la porte et entra',
    level: LEVEL,
    summary:
      'The passé simple is the past tense of novels, tales and history books. You need to recognise it when you read, but you rarely use it when you speak: the passé composé takes its place. It is found mostly in the third person singular and plural.',
    sections: [
      section(
        'forms',
        'Forms to recognise',
        table(
          'Passé simple of four verbs.',
          ['Person', 'parler', 'finir', 'être', 'avoir'],
          [
            ['il / elle', 'parla', 'finit', 'fut', 'eut'],
            ['ils / elles', 'parlèrent', 'finirent', 'furent', 'eurent'],
            ['je', 'parlai', 'finis', 'fus', 'eus'],
            ['nous', 'parlâmes', 'finîmes', 'fûmes', 'eûmes'],
          ],
        ),
        p(
          'Verbs in **-er** end in **-a** / **-èrent** in the third person; most other regular verbs in **-it** / **-irent**. Irregular ones to know: *il dit, il fit, il vit, il prit, il vint (venir), il naquit, il mourut, il eut, il fut.*',
        ),
      ),
      section(
        'use',
        'Where you meet it',
        p(
          'The passé simple tells **completed events in a story**, often in a sequence, while the imparfait describes the background: *Il pleuvait quand il ouvrit la porte.* In conversation, emails and news, the passé composé is used instead: *Il a ouvert la porte.*',
        ),
        examples(
          ['Il ouvrit la porte et entra.', 'He opened the door and went in.'],
          ['Elle naquit en 1850.', 'She was born in 1850.'],
          ['Ils furent très surpris.', 'They were very surprised.'],
        ),
        tip(
          'Reading tip',
          'If a past form ends in -a, -it or -ent (with -èrent / -irent) and has no auxiliary, think passé simple: replace it mentally by the passé composé to understand it.',
        ),
      ),
    ],
    related: ['fr-b12-past-hypotheses', 'fr-b12-reported-speech'],
    sources: [S.passeSimple],
  },
];
