import { conditionnel } from '@/lib/french/conditional';
import {
  conditionnelPasse,
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
];
