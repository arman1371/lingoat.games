import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c1-1';

/** French C1.1: the grammar of the units, one topic per mini lesson. */
export const FRC11_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c11-connectors',
    title: 'Connectors: cause, consequence, addition',
    tagline: 'How do I link reasons, results and extra arguments precisely?',
    level: LEVEL,
    summary:
      'At C1 you choose the connector for the register and for the grammar around it. Cause: car, parce que, puisque, comme and étant donné que take a clause; grâce à, à cause de, en raison de and faute de take a noun. Consequence: donc, par conséquent, c’est pourquoi, si bien que. Addition: de plus, en outre, par ailleurs.',
    sections: [
      section(
        'cause',
        'Giving a reason',
        p(
          'French has several ways to say “because”, and they are not interchangeable. **Parce que** is the neutral answer to *pourquoi ?*. **Car** is more written: it joins two clauses and never opens a sentence. **Puisque** presents a reason that the listener already knows or accepts. **Comme** opens the sentence, and **étant donné que** is a formal choice.',
        ),
        table(
          'Connectors that introduce a reason (followed by a clause).',
          ['Connector', 'How it behaves', 'Example'],
          [
            [
              'parce que',
              'answers pourquoi; works in speech and writing',
              'Il hésite parce que la source est douteuse.',
            ],
            [
              'car',
              'written; joins two clauses with a comma before it',
              'Il hésite, car la source est douteuse.',
            ],
            [
              'puisque',
              'the reason is already known or obvious',
              'Puisque tout le monde en parle, vérifions.',
            ],
            [
              'comme',
              'opens the sentence; the main clause follows',
              'Comme il pleuvait, le reportage a été tourné en studio.',
            ],
            [
              'étant donné que',
              'formal; the reason is a given fact',
              'Étant donné que la source est anonyme, je doute.',
            ],
          ],
        ),
        p(
          'Before a **noun group** you need a preposition instead: **grâce à** (the cause has a good effect), **à cause de** (a bad effect or a reproach), **en raison de** (neutral and formal, common in announcements) and **faute de** (for lack of).',
        ),
        table(
          'Connectors that introduce a reason (followed by a noun).',
          ['Connector', 'Tone of the result', 'Example'],
          [
            ['grâce à', 'positive', 'Le site a gagné des abonnés grâce à son enquête.'],
            [
              'à cause de',
              'negative or blaming',
              'La manifestation a été annulée à cause de la grève.',
            ],
            [
              'en raison de',
              'neutral, formal',
              'Le site a été fermé en raison de plusieurs plaintes.',
            ],
            ['faute de', 'something is missing', 'Le procès a été abandonné faute de preuves.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Car il pleuvait, nous sommes restés.  ✓ Comme il pleuvait, nous sommes restés.',
          '✗ Grâce à la grève, le train est annulé.  ✓ À cause de la grève, le train est annulé.',
          '✗ À cause de il pleuvait.  ✓ À cause de la pluie. / Parce qu’il pleuvait.',
        ),
      ),
      section(
        'consequence',
        'Giving a result',
        p(
          'To say what follows from a fact, use **donc** (neutral and short), **par conséquent** or **ainsi** (more formal), **c’est pourquoi** (the result of what you have just said) or **si bien que** (a result stated in the same sentence). They are all followed by the indicative.',
        ),
        table(
          'Connectors that introduce a result.',
          ['Connector', 'Position', 'Example'],
          [
            [
              'donc',
              'movable: before or after the verb',
              'Les ventes ont baissé, donc la rédaction a réduit ses coûts. / … la rédaction a donc réduit ses coûts.',
            ],
            [
              'par conséquent',
              'after a full stop or a semicolon, with a comma',
              'L’information était fausse ; par conséquent, le journal l’a retirée.',
            ],
            [
              'c’est pourquoi',
              'at the start of a new clause',
              'Les lecteurs ont perdu confiance ; c’est pourquoi le journal a changé de ligne.',
            ],
            [
              'si bien que',
              'joins two clauses in one sentence',
              'Les ventes ont chuté, si bien que le journal a dû réduire sa rédaction.',
            ],
          ],
        ),
        tip(
          'Donc moves',
          'Donc is an adverb, so it can sit after the verb: *Il a donc décidé de publier.* The other connectors stay in front of the clause.',
        ),
      ),
      section(
        'addition',
        'Adding an argument and explaining',
        p(
          'To stack arguments, use **de plus**, **en outre** (more formal), **par ailleurs** (a different side of the question) or **de surcroît** (literary). They usually open the sentence and are followed by a comma. **En effet** does something different: it introduces the explanation or the proof of what you have just said.',
        ),
        examples(
          [
            'L’article est bien documenté. De plus, il cite des sources variées.',
            'The article is well documented. What is more, it cites varied sources.',
          ],
          [
            'Ce reportage est excellent ; par ailleurs, il est très bien illustré.',
            'This report is excellent; besides, it is very well illustrated.',
          ],
          [
            'La vidéo est fausse. En effet, elle a été montée.',
            'The video is fake. Indeed, it was edited.',
          ],
        ),
        compare(
          {
            title: 'de plus / en outre / par ailleurs',
            question: 'Another argument',
            example: 'Il parle trois langues. De plus, il connaît le terrain.',
          },
          {
            title: 'en effet',
            question: 'The proof of what I said',
            example: 'La vidéo est fausse. En effet, elle a été montée.',
          },
          {
            title: 'donc / par conséquent',
            question: 'What follows from it',
            example: 'La vidéo est fausse ; par conséquent, nous la retirons.',
          },
        ),
      ),
    ],
    related: [],
    sources: [S.connectors, S.coordination, S.puisque, S.graceA],
  },
  {
    id: 'fr-c11-si-clauses',
    title: 'Hypotheses with si',
    tagline: 'How do I say what would happen, or would have happened, if …?',
    level: LEVEL,
    summary:
      'A hypothesis has two parts, and the tenses are paired. A real condition is si + présent, with the présent, the futur or the impératif in the result. An imagined condition is si + imparfait with the conditionnel présent. A missed chance is si + plus-que-parfait with the conditionnel passé. Si itself never takes the future or the conditional.',
    sections: [
      section(
        'three-types',
        'Three kinds of condition',
        p(
          'French pairs the tense of the **si-clause** with the tense of the **result**. The first part is always in the indicative, and it is the *result* that carries the conditional. Learn the three pairs as blocks.',
        ),
        table(
          'The three pairs.',
          ['Kind', 'Si-clause', 'Result', 'Example'],
          [
            [
              'Real or likely',
              'si + présent',
              'présent, futur or impératif',
              'Si tu votes, tu auras ton mot à dire.',
            ],
            [
              'Imagined, unlikely',
              'si + imparfait',
              'conditionnel présent',
              'Si j’avais le temps, je deviendrais bénévole.',
            ],
            [
              'Too late, impossible',
              'si + plus-que-parfait',
              'conditionnel passé',
              'Si nous avions voté, nous aurions changé le résultat.',
            ],
          ],
        ),
        mistake(
          'Never after si',
          '✗ Si j’aurais le temps, je viendrais.  ✓ Si j’avais le temps, je viendrais.',
          '✗ Si tu viendras, on commencera.  ✓ Si tu viens, on commencera.',
        ),
        tip(
          'Two orders',
          'The si-clause can come second: *Je deviendrais bénévole si j’avais le temps.* The tenses stay the same; only the comma disappears. Before *il* and *ils*, **si** becomes **s’** (*s’il*, *s’ils*), but not before *elle*.',
        ),
      ),
      section(
        'forms',
        'Building the conditional',
        p(
          'The **conditionnel présent** takes the stem of the future (*voter-*, *pourr-*, *ser-*) and the endings of the imparfait: **-ais, -ais, -ait, -ions, -iez, -aient**. The **conditionnel passé** is the conditional of **avoir** or **être** plus the past participle: *j’aurais voté*, *elle serait venue*, *je me serais engagé*.',
        ),
        table(
          'Conditionnel présent and passé.',
          ['Person', 'voter (présent)', 'faire (passé)'],
          [
            ['je', 'voterais', 'aurais fait'],
            ['tu', 'voterais', 'aurais fait'],
            ['il/elle/on', 'voterait', 'aurait fait'],
            ['nous', 'voterions', 'aurions fait'],
            ['vous', 'voteriez', 'auriez fait'],
            ['ils/elles', 'voteraient', 'auraient fait'],
          ],
        ),
        p(
          'The si-clause of a missed chance uses the **plus-que-parfait**: the imparfait of the auxiliary plus the participle (*j’avais su, elle était partie, nous nous étions mobilisés*).',
        ),
      ),
      section(
        'other-markers',
        'Other ways to set a condition',
        p(
          '**Au cas où** expresses a precaution against a possibility and is followed by the **conditionnel**. **Sauf si** states the one case that cancels what you said, and takes the indicative. **À condition que** and **à moins que** take the **subjonctif**.',
        ),
        examples(
          [
            'Je prends un parapluie au cas où il pleuvrait.',
            'I am taking an umbrella in case it rains.',
          ],
          [
            'Nous irons à la marche, sauf si le temps est trop mauvais.',
            'We will go to the march, unless the weather is too bad.',
          ],
          ['Je viendrai à condition que tu m’aides.', 'I will come on condition that you help me.'],
        ),
        compare(
          {
            title: 'si + présent',
            question: 'It can really happen',
            example: 'Si tu signes, la mairie réagira.',
          },
          {
            title: 'si + imparfait',
            question: 'It is imagined or unlikely',
            example: 'Si tu signais, la mairie réagirait.',
          },
          {
            title: 'si + plus-que-parfait',
            question: 'It is too late',
            example: 'Si tu avais signé, la mairie aurait réagi.',
          },
        ),
      ),
    ],
    related: ['fr-c11-connectors'],
    sources: [S.conditional, S.presentConditional, S.pastConditional, S.pqp, S.si, S.auCasOu],
  },
  {
    id: 'fr-c11-affixes',
    title: 'Prefixes and suffixes',
    tagline: 'How do I build and decode words like injuste, égalité, marginaliser?',
    level: LEVEL,
    summary:
      'Many C1 words are built from a base plus a prefix or suffix. Prefixes change the meaning: in- (im-, il-, ir-) and dé(s)- give the opposite, anti- means against, sous- and sur- mean under and over. Suffixes change the word class: -ité, -tion, -isme, -ment and -ance make nouns, -able and -if make adjectives, -iser makes verbs. A suffix also tells you the gender of the noun.',
    sections: [
      section(
        'prefixes',
        'Prefixes that change the meaning',
        p(
          'The most useful prefix at C1 gives the **opposite**: **in-** (injuste, inacceptable). Its spelling follows the next letter: **im-** before b, m and p (*impossible*), **il-** before l (*illégal*) and **ir-** before r (*irréel*). **Dé(s)-** and **mé-** also reverse or damage the base (*désavantage*, *méconnaître*).',
        ),
        table(
          'Prefixes of this unit.',
          ['Prefix', 'Meaning', 'Example'],
          [
            ['in- / im- / il- / ir-', 'not, the opposite', 'injuste, impossible, illégal, irréel'],
            ['dé- / dés-', 'reversal, removal', 'désavantage, déstigmatiser'],
            ['mé- / mal-', 'wrongly, badly', 'méconnaître, malhonnête'],
            ['anti-', 'against', 'antiraciste'],
            ['sous- / sur-', 'under / over', 'sous-payé, surpayé'],
            ['pluri- / multi-', 'several', 'pluriculturel, multiculturel'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ inlégal, inpossible, inréel.  ✓ illégal, impossible, irréel.',
          '✗ inclusif = not inclusive.  ✓ In- is part of the root of inclusif: it means inclusive.',
        ),
      ),
      section(
        'noun-suffixes',
        'Suffixes that make nouns, and give the gender',
        p(
          'A noun suffix tells you the gender. **-ité, -tion / -ation, -ance / -ence** and **-esse** make **feminine** nouns; **-isme, -ment** and **-age** make **masculine** nouns. So you can predict *la tolérance*, *la discrimination* but *le racisme*, *le traitement*.',
        ),
        table(
          'Noun suffixes.',
          ['Suffix', 'Gender', 'Built from', 'Example'],
          [
            ['-ité', 'feminine', 'adjective', 'égal → l’égalité, divers → la diversité'],
            ['-tion / -ation', 'feminine', 'verb in -er', 'discriminer → la discrimination'],
            ['-ance / -ence', 'feminine', 'verb or adjective', 'tolérer → la tolérance'],
            ['-isme', 'masculine', 'noun or adjective', 'sexiste → le sexisme'],
            ['-ment', 'masculine', 'verb', 'traiter → le traitement'],
            ['-age', 'masculine', 'verb or noun', 'métisser → le métissage'],
          ],
        ),
        tip(
          'Exceptions',
          'Gender rules have exceptions (*un silence* is masculine), but for the suffixes above they are very reliable. Use them when you meet a new abstract noun.',
        ),
      ),
      section(
        'adjective-verb-suffixes',
        'Suffixes that make adjectives and verbs',
        p(
          '**-able / -ible** means “that can be …ed” (*acceptable*, *crédible*). **-if / -ive** describes a quality (*inclusif*, *inclusive*). **-iser** and **-ifier** make verbs that mean “make …” (*égal → égaliser*, *marginal → marginaliser*, *simple → simplifier*).',
        ),
        examples(
          ['Ce comportement est inacceptable.', 'This behaviour is unacceptable.'],
          ['Il faut égaliser les salaires.', 'Salaries must be equalised.'],
          ['Cette école veut être plus inclusive.', 'This school wants to be more inclusive.'],
        ),
        compare(
          {
            title: 'in- + base',
            question: 'The opposite',
            example: 'injuste, impossible, illégal',
          },
          {
            title: 'base + -ité / -tion',
            question: 'A noun',
            example: 'l’égalité, la discrimination',
          },
          {
            title: 'base + -iser',
            question: 'A verb meaning “make …”',
            example: 'égaliser, marginaliser',
          },
        ),
      ),
    ],
    related: ['fr-c11-connectors'],
    sources: [S.prefix, S.suffix, S.affix, S.prefixList, S.suffixList],
  },
  {
    id: 'fr-c11-concession',
    title: 'Concession: although, even if, despite',
    tagline: 'How do I admit a fact and still defend my view?',
    level: LEVEL,
    summary:
      'Concession admits a fact that seems to contradict your point, and then holds the point. Bien que and quoique are followed by the subjonctif; même si, alors que and tandis que by the indicatif. Malgré and en dépit de are followed by a noun group. Pourtant, cependant, néanmoins and toutefois are adverbs that link two sentences.',
    sections: [
      section(
        'clauses',
        'Concession clauses: which mood?',
        p(
          'The conjunction decides the mood. **Bien que** and **quoique** (and the literary **encore que**) introduce a fact you accept, and the verb is in the **subjonctif**. **Même si**, **alors que** and **tandis que** are followed by the **indicatif**, and **si** never takes the future or the conditional.',
        ),
        table(
          'Concession conjunctions.',
          ['Expression', 'Then', 'Example'],
          [
            [
              'bien que, quoique',
              'subjonctif',
              'Bien qu’il soit très occupé, il cuisine tous les soirs.',
            ],
            ['même si', 'indicatif', 'Même si c’est plus cher, j’achète bio.'],
            [
              'alors que, tandis que',
              'indicatif',
              'Elle est végétarienne alors que son mari adore la viande.',
            ],
            ['malgré, en dépit de', 'noun group', 'Malgré la pluie, le marché est ouvert.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Bien qu’il est occupé.  ✓ Bien qu’il soit occupé.',
          '✗ Même s’il soit cher.  ✓ Même s’il est cher.',
          '✗ Malgré qu’il pleuve.  ✓ Malgré la pluie. / Bien qu’il pleuve.',
        ),
      ),
      section(
        'subjunctive',
        'Forming the subjonctif présent',
        p(
          'For most verbs, take the **ils/elles** form of the present, drop **-ent**, and add **-e, -es, -e, -ent**; **nous** and **vous** keep the imparfait-like **-ions, -iez**. A handful of verbs are irregular: **être, avoir, aller, faire, pouvoir, savoir, vouloir**.',
        ),
        table(
          'Subjonctif présent.',
          ['Person', 'finir', 'prendre', 'faire', 'être'],
          [
            ['que je', 'finisse', 'prenne', 'fasse', 'sois'],
            ['que tu', 'finisses', 'prennes', 'fasses', 'sois'],
            ['qu’il/elle/on', 'finisse', 'prenne', 'fasse', 'soit'],
            ['que nous', 'finissions', 'prenions', 'fassions', 'soyons'],
            ['que vous', 'finissiez', 'preniez', 'fassiez', 'soyez'],
            ['qu’ils/elles', 'finissent', 'prennent', 'fassent', 'soient'],
          ],
        ),
      ),
      section(
        'adverbs',
        'Pourtant, cependant, néanmoins',
        p(
          'These adverbs link two sentences. **Pourtant** opens a statement that surprises after the first one; **cependant** and **néanmoins** are more formal; **toutefois** often appears after the first word of the clause. They are never followed by the subjonctif, because they are not conjunctions.',
        ),
        examples(
          [
            'Ce fromage sent très fort. Pourtant, il est délicieux.',
            'This cheese smells very strong. Yet it is delicious.',
          ],
          [
            'Le plat est simple ; néanmoins, il est excellent.',
            'The dish is simple; nevertheless, it is excellent.',
          ],
        ),
        compare(
          {
            title: 'bien que + subjonctif',
            question: 'Although (a clause)',
            example: 'Bien qu’il pleuve, nous sortons.',
          },
          {
            title: 'malgré + noun',
            question: 'Despite (a noun)',
            example: 'Malgré la pluie, nous sortons.',
          },
          {
            title: 'pourtant + new sentence',
            question: 'Yet (an adverb)',
            example: 'Il pleut. Pourtant, nous sortons.',
          },
        ),
      ),
    ],
    related: ['fr-c11-si-clauses'],
    sources: [S.subjonctifWp, S.subordCirc, S.bienQue, S.quoique, S.pourtant, S.cependant],
  },
];
