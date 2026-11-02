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
  {
    id: 'fr-c11-pronouns',
    title: 'The pronouns y and en',
    tagline: 'How do I replace a place, a thing or a quantity, and combine two pronouns?',
    level: LEVEL,
    summary:
      'En replaces de + noun or a quantity; y replaces à, chez or dans + place or thing. Both stand before the verb. When two pronouns meet, they follow a fixed order: me, te, nous, vous, then le, la, les, then lui, leur, then y, then en. After a positive imperative they follow the verb, joined by hyphens.',
    sections: [
      section(
        'y-en',
        'What y and en replace',
        p(
          '**En** takes the place of a group introduced by **de** (*parler de, avoir besoin de*), of a **partitive** (*du sport, des vitamines*) or of a noun with a **quantity** (*deux comprimés → j’en ai pris deux*). **Y** takes the place of **à, chez, dans, sur** + a place or a thing (*aller à la pharmacie, penser à son traitement*). With a person, **à** is replaced by **lui / leur**.',
        ),
        table(
          'En and y.',
          ['Pronoun', 'Replaces', 'Example'],
          [
            ['en', 'de + noun', 'Vous avez besoin de repos ? – J’en ai besoin.'],
            [
              'en',
              'a partitive or a quantity',
              'Tu fais du sport ? – J’en fais deux fois par semaine.',
            ],
            ['y', 'à / chez / dans + place', 'Tu vas chez le médecin ? – J’y vais demain.'],
            ['y', 'à + thing', 'Tu penses à ton traitement ? – J’y pense tous les jours.'],
            ['lui / leur', 'à + person', 'Tu parles à ta sœur ? – Je lui parle.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je pense à lui.  ✓ for a person, but ✓ J’y pense for a thing.',
          '✗ Je vais en la pharmacie.  ✓ J’y vais.',
        ),
      ),
      section(
        'order',
        'Two pronouns before the verb',
        p(
          'When two object pronouns appear together, the order never changes. Think of it as a ladder: **me / te / nous / vous** come first, then **le / la / les**, then **lui / leur**, then **y**, and **en** is always last. Before a vowel, me becomes **m’**, le and la become **l’**.',
        ),
        table(
          'Order of the pronouns.',
          ['Step', 'Pronouns', 'Example'],
          [
            ['1', 'me, te, se, nous, vous', 'Il me les a prescrits.'],
            ['2', 'le, la, les', 'Nous le lui avons expliqué.'],
            ['3', 'lui, leur', 'Je lui en ai donné.'],
            ['4', 'y', 'Il y en a trois.'],
            ['5', 'en', 'Il m’en a parlé.'],
          ],
        ),
        tip(
          'Negation',
          'In a negative sentence, **ne** goes before the pronouns and **pas** after the verb: *Je ne lui en ai pas parlé.*',
        ),
      ),
      section(
        'imperative',
        'The positive imperative',
        p(
          'After a positive command, the pronouns follow the verb, joined by hyphens: **direct** (le, la, les) first, then **moi / toi / lui / nous / vous / leur**, then **y / en**. Moi and toi become **m’ / t’** before en: *donnez-m’en, vas-y, parlez-en*. In a negative command, the usual order comes back: *ne leur en parlez pas*.',
        ),
        examples(
          [
            'Vous avez des symptômes ? Parlez-en à votre médecin.',
            'You have symptoms? Talk to your doctor about it.',
          ],
          ['Donnez-le-moi, s’il vous plaît.', 'Give it to me, please.'],
          ['Ne leur en parlez pas !', 'Do not tell them about it!'],
        ),
        compare(
          {
            title: 'Je lui en ai donné.',
            question: 'Statement: lui before en',
            example: 'Je lui en ai donné.',
          },
          {
            title: 'Donnez-lui-en.',
            question: 'Positive command: after the verb',
            example: 'Donnez-lui-en.',
          },
          {
            title: 'Ne lui en donnez pas.',
            question: 'Negative command: before the verb again',
            example: 'Ne lui en donnez pas.',
          },
        ),
      ),
    ],
    related: ['fr-object-pronouns'],
    sources: [S.personalPronoun, S.imperative, S.pronEn, S.pronY],
  },
  {
    id: 'fr-c11-subjunctive',
    title: 'Subjunctive: wish, need, feeling, doubt',
    tagline: 'When do I need the subjonctif after que, and when not?',
    level: LEVEL,
    summary:
      'The subjonctif follows a clause that expresses will, necessity, feeling or doubt, when the subject of the second verb is different. If the subject stays the same, French uses an infinitive. A clause that states a certainty or a fact keeps the indicative. Penser que and croire que take the indicative, but turn to the subjonctif in a negative sentence or a question about doubt.',
    sections: [
      section(
        'triggers',
        'What triggers the subjonctif',
        p(
          'The **subjonctif** is not a tense but a **mood**: it presents the action as wished, needed, felt or doubted rather than stated as a fact. Four families of expressions call for it.',
        ),
        table(
          'Triggers of the subjonctif.',
          ['Family', 'Expressions', 'Example'],
          [
            [
              'Will, order, advice',
              'vouloir que, souhaiter que, exiger que, il vaut mieux que',
              'Je veux que tu prennes le vélo.',
            ],
            [
              'Necessity',
              'il faut que, il est nécessaire que, il est important que',
              'Il faut que nous réduisions notre empreinte carbone.',
            ],
            [
              'Feeling',
              'regretter que, être content / surpris que, avoir peur que',
              'Nous regrettons que la ville n’ait pas plus d’espaces verts.',
            ],
            [
              'Doubt, improbability',
              'douter que, il est peu probable que, ne pas penser que',
              'Je doute que ce projet réduise les embouteillages.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il faut que nous prenons le bus.  ✓ Il faut que nous prenions le bus.',
          '✗ Je veux que tu viendras.  ✓ Je veux que tu viennes.',
        ),
      ),
      section(
        'same-subject',
        'Same subject: use the infinitive',
        p(
          'When the person who wishes, feels or doubts is also the person who acts, French drops **que** and uses the **infinitive**. Compare *Je veux partir* (I want to leave) with *Je veux que tu partes* (I want you to leave). For necessity, *il faut* can take either: *il faut partir* (in general) or *il faut que tu partes* (someone specific).',
        ),
        compare(
          {
            title: 'Same subject',
            question: 'Infinitive',
            example: 'Je veux laisser ma voiture à la maison.',
          },
          {
            title: 'Different subject',
            question: 'Que + subjonctif',
            example: 'Je veux que tu laisses ta voiture à la maison.',
          },
          {
            title: 'General statement',
            question: 'Il faut + infinitive',
            example: 'Il faut trier ses déchets.',
          },
        ),
      ),
      section(
        'certainty',
        'Certainty keeps the indicative',
        p(
          'Expressions of **certainty** and **report** state a fact: *je sais que, il est évident que, je pense que, il me semble que, il est clair que*. They take the **indicatif**. But *je ne pense pas que* and *penses-tu que… ?* express doubt, so they take the **subjonctif**.',
        ),
        examples(
          ['Je pense que le maire a raison.', 'I think the mayor is right.'],
          ['Je ne pense pas que ce projet soit utile.', 'I do not think this project is useful.'],
          ['Il est évident que nous devons agir vite.', 'It is obvious that we must act quickly.'],
        ),
        tip(
          'Irregular subjunctives',
          'Learn the main irregular forms by heart: **être** (sois, soit, soyons), **avoir** (aie, ait, ayons), **aller** (aille, allions), **faire** (fasse), **pouvoir** (puisse), **savoir** (sache), **vouloir** (veuille). The other verbs follow the rule you saw in the concession unit.',
        ),
      ),
    ],
    related: ['fr-c11-concession'],
    sources: [S.subjonctifWp, S.falloir, S.douter, S.souhaiter],
  },
  {
    id: 'fr-c11-reprise',
    title: 'Avoiding repetition: celui, ce qui, dont',
    tagline: 'How do I refer back to a noun or an idea without repeating it?',
    level: LEVEL,
    summary:
      'A C1 text avoids repeating a word. Celui, celle, ceux and celles replace a noun and are completed by de, qui, que, où or -ci / -là. Ce qui, ce que, ce dont and ce à quoi sum up an idea. After a preposition, relative pronouns become lequel, auquel, duquel; dont replaces de + noun. Le premier … le second, ce dernier and celui-ci also keep track of what you mentioned.',
    sections: [
      section(
        'celui',
        'Celui, celle, ceux, celles',
        p(
          'These demonstrative pronouns stand for a noun you have just used and agree with it in **gender and number**. They are never alone: they need **de** (*celui de mon frère*), a relative clause (*celle que j’aime, ceux qui habitent ici*) or the particles **-ci / -là** (*celui-ci* = this one, the latter; *celui-là* = that one, the former).',
        ),
        table(
          'Celui and its forms.',
          ['Form', 'With', 'Example'],
          [
            [
              'celui / celle',
              'de + noun',
              'Ma voiture est vieille, mais celle de mon père est neuve.',
            ],
            [
              'ceux / celles',
              'qui, que, où',
              'Ceux qui travaillent aujourd’hui financent les retraites.',
            ],
            [
              'celui-ci / celui-là',
              'nothing',
              'J’ai deux frères : celui-ci est médecin, celui-là professeur.',
            ],
          ],
        ),
      ),
      section(
        'ce',
        'Ce qui, ce que, ce dont, ce à quoi',
        p(
          'To sum up an **idea** or a thing without a noun, use **ce** + a relative pronoun. The pronoun follows the function: **ce qui** is the subject (*ce qui compte*), **ce que** is the direct object (*ce que tu dis*), **ce dont** goes with a verb that takes **de** (*ce dont j’ai besoin*) and **ce à quoi** goes with **à** (*ce à quoi je pense*).',
        ),
        table(
          'Summing up an idea.',
          ['Pronoun', 'Function', 'Example'],
          [
            ['ce qui', 'subject', 'Ce qui compte, c’est la famille.'],
            ['ce que / ce qu’', 'direct object', 'Je ne comprends pas ce que tu veux dire.'],
            ['ce dont', 'de + …', 'C’est exactement ce dont j’ai besoin.'],
            ['ce à quoi', 'à + …', 'Voilà ce à quoi je pense.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ce que me plaît.  ✓ Ce qui me plaît.',
          '✗ Ce que j’ai besoin.  ✓ Ce dont j’ai besoin.',
        ),
      ),
      section(
        'relative',
        'Relative pronouns after a preposition',
        p(
          'When the relative pronoun follows a preposition, a person usually needs **qui** (*la personne à qui je parle*) and a thing needs **lequel, laquelle, lesquels, lesquelles**. With **à** they contract: **auquel, auxquels, auxquelles**; with **de**: **duquel, desquels, desquelles**. But **dont** replaces **de + noun** for people and things alike. **Où** replaces a place or a time.',
        ),
        compare(
          {
            title: 'dont',
            question: 'de + noun',
            example: 'Le médecin dont je parle est mon voisin.',
          },
          {
            title: 'auquel',
            question: 'à + noun',
            example: 'Les amis auxquels je pense habitent loin.',
          },
          {
            title: 'où',
            question: 'place or time',
            example: 'La maison où j’ai grandi est à vendre.',
          },
        ),
        tip(
          'Ordering ideas',
          'To keep track of two things: *le premier … le second* (or *l’un … l’autre*). *Ce dernier* and *celui-ci* point to the last one mentioned.',
        ),
      ),
    ],
    related: ['fr-c11-pronouns'],
    sources: [S.demonstrativePronoun, S.relativePronoun, S.anaphora, S.celui, S.lequel, S.dont],
  },
  {
    id: 'fr-c11-emphasis',
    title: 'Highlighting with c’est … qui / que',
    tagline: 'How do I put one word or idea in the spotlight?',
    level: LEVEL,
    summary:
      'French puts an element in the spotlight with a frame rather than by stress. C’est … qui highlights a subject and c’est … que an object, a place or a time. Ce qui, ce que and ce dont … c’est highlight a whole clause. Dislocation moves a word to the start or end and repeats it with a pronoun. These structures are common in speech and in reviews.',
    sections: [
      section(
        'cleft',
        'C’est … qui and c’est … que',
        p(
          'Put the word to highlight between **c’est** and **qui / que**. **Qui** is used when the highlighted word is the **subject** of the verb that follows (*C’est le réalisateur qui a choisi cette musique*). **Que** is used for an **object** (*C’est ce film que j’ai préféré*) and for a **place or time** (*C’est à Cannes que le film a été présenté*). With a plural subject: **ce sont … qui**. After c’est, a person is a stressed pronoun: *c’est moi / toi / elle / eux qui*.',
        ),
        table(
          'Cleft sentences.',
          ['Structure', 'Highlights', 'Example'],
          [
            ['c’est … qui', 'subject', 'C’est elle qui a écrit le scénario.'],
            ['ce sont … qui', 'plural subject', 'Ce sont les acteurs qui ont improvisé.'],
            ['c’est … que', 'object', 'C’est ce film que j’ai préféré.'],
            ['c’est … que', 'place or time', 'C’est en 1959 que la Nouvelle Vague est née.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ C’est ce film qui j’ai préféré.  ✓ C’est ce film que j’ai préféré.',
          '✗ C’est à Cannes où le film a été présenté.  ✓ C’est à Cannes que le film a été présenté.',
        ),
      ),
      section(
        'pseudo-cleft',
        'Ce qui … c’est: highlighting a whole clause',
        p(
          'To highlight a clause, start with **ce qui** (subject), **ce que** (object) or **ce dont / ce à quoi** (with de / à), and close with **c’est** + the highlighted element: *Ce qui m’a plu, c’est la mise en scène.* *Ce que je retiens, c’est l’émotion.* *Ce dont je me souviens, c’est de la dernière scène.*',
        ),
        examples(
          ['Ce qui compte, c’est le message.', 'What matters is the message.'],
          ['Ce que j’admire, c’est son courage.', 'What I admire is his courage.'],
          ['Ce dont j’ai besoin, c’est d’inspiration.', 'What I need is inspiration.'],
        ),
      ),
      section(
        'dislocation',
        'Dislocation',
        p(
          'In **dislocation**, an element is moved to the start (or end) of the sentence and repeated by a pronoun: *Cette exposition, je l’ai adorée. Les acteurs, ils ont été formidables.* Or the pronoun comes first: *Je l’ai adorée, cette exposition.* This is natural in speech and in informal reviews.',
        ),
        compare(
          {
            title: 'Plain',
            question: 'No emphasis',
            example: 'J’ai adoré cette exposition.',
          },
          {
            title: 'Cleft',
            question: 'Emphasis with a frame',
            example: 'C’est cette exposition que j’ai adorée.',
          },
          {
            title: 'Dislocation',
            question: 'Emphasis by moving',
            example: 'Cette exposition, je l’ai adorée.',
          },
        ),
      ),
    ],
    related: ['fr-c11-reprise'],
    sources: [S.cleft, S.dislocation, S.emphasis, S.cest],
  },
  {
    id: 'fr-c11-narrative-tenses',
    title: 'Narrative tenses',
    tagline: 'How do I tell a story in the past, as in a novel?',
    level: LEVEL,
    summary:
      'A story in the past uses three layers. The imparfait sets the scene and describes habits and states. The passé composé (in speech) or the passé simple (in written narration) moves the plot forward with completed events. The plus-que-parfait goes back to what had already happened. At C1 you must recognise the passé simple, even if you rarely write it.',
    sections: [
      section(
        'layers',
        'Scene, event, earlier event',
        p(
          'The **imparfait** is the camera that stays on the scene: weather, places, feelings, habits (*Il pleuvait. Les rues étaient vides.*). The **passé composé** or **passé simple** is the action that interrupts it (*Soudain, la porte s’ouvrit.*). The **plus-que-parfait** is the flashback (*Elle avait oublié son manteau.*).',
        ),
        table(
          'The layers of a story.',
          ['Layer', 'Tense', 'Example'],
          [
            ['Scene, habit, state', 'imparfait', 'Il faisait nuit quand le train arriva.'],
            ['Event in speech', 'passé composé', 'Il a téléphoné à minuit.'],
            ['Event in a novel', 'passé simple', 'Il ouvrit la porte et entra.'],
            ['Earlier event', 'plus-que-parfait', 'Il était déjà parti.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il plut ce soir-là.  ✓ Il pleuvait ce soir-là. (the weather is background)',
          '✗ Elle a oublié son manteau avant de sortir (earlier event).  ✓ Elle avait oublié son manteau.',
        ),
      ),
      section(
        'passe-simple',
        'The passé simple',
        p(
          'The **passé simple** is rarely spoken, but you meet it in every novel, in tales and in history. Most readers only need the **third persons**, *il / elle* and *ils / elles*. Verbs in **-er** take **-a** and **-èrent**; most others take **-it** and **-irent** or **-ut** and **-urent**. A few are irregular and worth learning: *être* (fut, furent), *avoir* (eut, eurent), *faire* (fit, firent), *venir* (vint, vinrent).',
        ),
        table(
          'Passé simple, third persons.',
          ['Verb', 'il / elle', 'ils / elles'],
          [
            ['parler', 'parla', 'parlèrent'],
            ['finir', 'finit', 'finirent'],
            ['prendre', 'prit', 'prirent'],
            ['être', 'fut', 'furent'],
            ['avoir', 'eut', 'eurent'],
            ['faire', 'fit', 'firent'],
            ['venir', 'vint', 'vinrent'],
          ],
        ),
        tip(
          'In speech',
          'In conversation, use the passé composé where a novel uses the passé simple: *Il ouvrit la porte* in a book becomes *Il a ouvert la porte* in speech.',
        ),
      ),
      section(
        'plus-que-parfait',
        'The plus-que-parfait',
        p(
          'The **plus-que-parfait** is the **imparfait** of **avoir** or **être** plus the **past participle**: *j’avais fini, elle était partie, nous nous étions réveillés*. It shows that an action was **already finished** before another past moment, and it explains causes (*Elle était triste car son frère était parti*).',
        ),
        examples(
          [
            'Elle avait déjà fermé la fenêtre quand il est arrivé.',
            'She had already closed the window when he arrived.',
          ],
          [
            'Le narrateur évoque une enfance qu’il avait oubliée.',
            'The narrator evokes a childhood he had forgotten.',
          ],
        ),
        compare(
          {
            title: 'imparfait',
            question: 'Background',
            example: 'Il pleuvait.',
          },
          {
            title: 'passé simple / composé',
            question: 'Event',
            example: 'Il ouvrit la porte.',
          },
          {
            title: 'plus-que-parfait',
            question: 'Earlier event',
            example: 'Il avait fermé la porte.',
          },
        ),
      ),
    ],
    related: ['fr-c11-si-clauses'],
    sources: [S.passeSimple, S.passeCompose, S.imparfaitWp, S.pqp, S.passeAnterieur],
  },
];
