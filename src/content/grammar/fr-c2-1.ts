import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c2-1';

/** French C2.1: full lessons, one per `fr-c21-` mini lesson. Add the topics of a unit with the unit. */
export const FRC21_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c21-word-formation',
    title: 'Prefixes and suffixes',
    tagline: 'Read a new word from its parts',
    level: LEVEL,
    summary:
      'A prefix changes the meaning of a word (in- = not, dé- = undo, sur- = too much, sous- = too little). A suffix usually changes the word class (-able makes an adjective, -ation a noun, -ment an adverb).',
    sections: [
      section(
        'prefixes',
        'Prefixes change the meaning',
        p(
          'At C2 you meet many words you have never seen. Most of them are built from a root and a prefix or suffix, so you can often guess the meaning. A prefix keeps the word class and changes the idea.',
        ),
        table(
          'Common prefixes and what they add.',
          ['Prefix', 'Meaning', 'Examples'],
          [
            [
              'in-, im-, il-, ir-',
              'not, the opposite',
              'inlassable, impensable, illisible, irréprochable',
            ],
            [
              'dé-, dés-',
              'undo, remove, the opposite of an action',
              'déconseiller, démystifier, désobéir',
            ],
            ['mé-, més-', 'wrongly, badly', 'méconnaissable, méfiance, mésentente'],
            ['sur-', 'too much, above', 'surestimer, surpeuplé, surcharger'],
            ['sous-', 'too little, below', 'sous-estimer, sous-payé, sous-alimenté'],
          ],
        ),
        examples(
          ['Cette tache est indélébile.', 'This stain is indelible (it cannot be rubbed out).'],
          ['Il a sous-estimé la difficulté.', 'He underestimated the difficulty.'],
          ['Le suspect reste insaisissable.', 'The suspect remains elusive.'],
        ),
      ),
      section(
        'spelling',
        'Spelling and traps',
        p(
          'The negative **in-** changes before some letters: **im-** before b, m and p (impensable), **il-** before l (illisible) and **ir-** before r (irréprochable).',
        ),
        mistake(
          'Watch out',
          '✗ inlisible  ✓ illisible',
          '✗ inréprochable  ✓ irréprochable',
          '✗ sur-estimer (underestimate)  ✓ sous-estimer',
        ),
        tip(
          'Not every in- is negative',
          'In-, im- and ir- can also be part of the root: insister, important, irriter. If the word without the prefix does not exist, it is probably not a prefix.',
        ),
      ),
      section(
        'suffixes',
        'Suffixes change the word class',
        p(
          'A suffix goes after the root and usually gives a new word class. Knowing the suffix tells you whether a word is a noun, an adjective or an adverb.',
        ),
        table(
          'Common suffixes and the word class they make.',
          ['Suffix', 'Makes', 'Idea', 'Examples'],
          [
            ['-able, -ible', 'adjective', 'can be …ed', 'aimable, visible, accessible'],
            ['-ation', 'noun', 'the action', 'augmentation, incitation'],
            ['-ité', 'noun', 'a characteristic', 'vivacité, félicité'],
            ['-esse', 'noun', 'a quality', 'gentillesse, petitesse'],
            ['-eur', 'noun', 'the person who does it', 'buveur, raseur'],
            ['-ment', 'adverb', 'the manner', 'naturellement, automatiquement'],
          ],
        ),
      ),
    ],
    related: ['fr-adjectives'],
    sources: [S.prefixes, S.suffixes],
  },
  {
    id: 'fr-c21-wordplay',
    title: 'Homophones and paronyms',
    tagline: 'Words that sound or look alike',
    level: LEVEL,
    summary:
      'Homophones are pronounced the same and spelt differently (mer, mère, maire). Paronyms are nearly alike in form but have different meanings (effraction / infraction). Puns (calembours) are built on both, and on words with several meanings.',
    sections: [
      section(
        'homophones',
        'Homophones: same sound, different spelling',
        p(
          'French has many homophones, which is a frequent source of spelling mistakes. They differ in writing, so context and grammar tell you which one to write. Words that are spelt the same but pronounced differently are **homographs** (ferment, the verb, and ferment, the noun).',
        ),
        examples(
          ['La mer est calme.', 'The sea is calm.'],
          ['Ma mère est maire de la ville.', 'My mother is the mayor of the town.'],
          [
            'Il suit un cours. – Je suis en retard.',
            'Suit (follows) and suis (am) sound the same.',
          ],
        ),
        tip(
          'Check the sentence, not the sound',
          'When two words sound the same, ask what role the word plays: a noun, a verb, a preposition? That tells you the spelling.',
        ),
      ),
      section(
        'paronyms',
        'Paronyms: nearly alike, different meaning',
        p(
          '**Paronyms** differ by one sound or one letter, so they are easy to mix up, even for native speakers. At C2 the exact word matters, especially in legal, economic and formal writing.',
        ),
        table(
          'Paronyms met in this unit and what they mean.',
          ['Pair', 'First word', 'Second word'],
          [
            [
              'effraction / infraction',
              'forced entry, a break-in',
              'an offence, a breach of a rule',
            ],
            ['éminent / imminent', 'distinguished', 'about to happen'],
            ['conjecture / conjoncture', 'a guess', 'the economic situation'],
            ['collusion / collision', 'a secret agreement to cheat', 'a crash'],
            ['prodigue / prodige', 'wasteful with money', 'a wonder, a gifted child'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ une chute éminente du gouvernement  ✓ une chute imminente',
          '✗ la conjecture économique  ✓ la conjoncture économique',
        ),
      ),
      section(
        'puns',
        'Puns play on both',
        p(
          'A **calembour** is a word game based on homophony and polysemy, one word with several meanings. A small change in intonation can steer a sentence towards one meaning or the other, so puns often work better aloud than in writing. To catch a pun, ask which second meaning or which look-alike word the speaker is pointing at.',
        ),
      ),
    ],
    related: ['fr-c21-word-formation'],
    sources: [S.paronymy, S.homophone, S.pun],
  },
  {
    id: 'fr-c21-passe-simple',
    title: 'Passé simple and passé antérieur',
    tagline: 'The tense of written narration',
    level: LEVEL,
    summary:
      'The passé simple tells completed events in writing, mostly in the third person. Its forms follow the past participle: -é verbs end in -ai, -a, -èrent; -i verbs in -is, -it, -irent; -u verbs in -us, -ut, -urent. The passé antérieur is the passé simple of avoir or être plus a participle.',
    sections: [
      section(
        'forms',
        'Forms',
        p(
          'The passé simple is rarely spoken, but you meet it in novels, history books and formal speeches, so you must recognise every form. Three patterns cover most verbs, depending on the past participle.',
        ),
        table(
          'The three regular patterns of the passé simple.',
          ['Participle', 'Example', 'je', 'il / elle', 'nous', 'ils / elles'],
          [
            ['-é', 'parler', 'parlai', 'parla', 'parlâmes', 'parlèrent'],
            ['-i', 'finir', 'finis', 'finit', 'finîmes', 'finirent'],
            ['-u', 'courir', 'courus', 'courut', 'courûmes', 'coururent'],
          ],
        ),
        table(
          'Irregular stems to learn by heart.',
          ['Infinitive', 'je', 'il / elle', 'nous', 'ils / elles'],
          [
            ['être', 'fus', 'fut', 'fûmes', 'furent'],
            ['avoir', 'eus', 'eut', 'eûmes', 'eurent'],
            ['faire', 'fis', 'fit', 'fîmes', 'firent'],
            ['venir', 'vins', 'vint', 'vînmes', 'vinrent'],
            ['prendre', 'pris', 'prit', 'prîmes', 'prirent'],
          ],
        ),
        tip(
          'Spot the verb',
          'Look at the ending to find the group, then the stem: “ils vinrent” is venir, “il fit” is faire, “elle prit” is prendre.',
        ),
      ),
      section(
        'anterieur',
        'The passé antérieur',
        p(
          'The **passé antérieur** is the passé simple of avoir or être followed by the past participle. It expresses an action finished just before another action told in the passé simple, usually after **dès que**, **quand**, **aussitôt que** or **à peine**.',
        ),
        examples(
          [
            'Dès qu’il eut fini de parler, il partit.',
            'As soon as he had finished speaking, he left.',
          ],
          [
            'À peine fut-il arrivé que l’orage éclata.',
            'Hardly had he arrived when the storm broke.',
          ],
          [
            'Quand elle eut lu la lettre, elle comprit.',
            'When she had read the letter, she understood.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Dès qu’il avait fini, il partit.  ✓ Dès qu’il eut fini, il partit.',
          '✗ Il eut parti.  ✓ Il fut parti. (partir takes être)',
        ),
      ),
      section(
        'use',
        'When to use it, when to avoid it',
        p(
          'In writing the passé simple is mostly used for the third person, singular and plural, in narration. In everyday speech and in personal writing the **passé composé** takes its place: *il ouvrit la porte* in a novel, *il a ouvert la porte* in a conversation. Do not speak in the passé simple: it sounds like a book.',
        ),
      ),
    ],
    related: ['fr-c21-narrative-tenses'],
    sources: [S.passeSimple, S.passeAnterieur],
  },
  {
    id: 'fr-c21-narrative-tenses',
    title: 'Tenses of a story',
    tagline: 'Events, background and vivid present',
    level: LEVEL,
    summary:
      'Foreground events take the passé simple, background and habits take the imparfait, and what happened earlier takes the plus-que-parfait or passé antérieur. The historic present makes the past vivid but alternates with past tenses.',
    sections: [
      section(
        'foreground',
        'Foreground and background',
        p(
          'The choice between the passé simple and the imparfait is not about how long an action lasted. The passé simple brings the **main events** forward, one after another. The imparfait gives the **setting**: descriptions, habits, and what was going on when something happened.',
        ),
        compare(
          {
            title: 'passé simple',
            question: 'What happened next?',
            example: 'Il ouvrit la porte, alluma la lumière et cria.',
          },
          {
            title: 'imparfait',
            question: 'What was it like? What was going on?',
            example: 'Il pleuvait et le vent soufflait.',
          },
        ),
        examples(
          [
            'Il pleuvait depuis l’aube quand le facteur frappa.',
            'It had been raining since dawn when the postman knocked.',
          ],
          ['Chaque matin, elle prenait la même route.', 'Every morning she took the same road.'],
        ),
        mistake(
          'Watch out',
          '✗ Il se levait, ouvrait la fenêtre et écoutait. (a chain of events)  ✓ Il se leva, ouvrit la fenêtre et écouta.',
        ),
      ),
      section(
        'present',
        'The historic present',
        p(
          'The **présent historique** narrates past events in the present to make them vivid. It is common in journalism and history writing. It cannot carry a narrative alone: it alternates with past tenses, the present for the essential facts and the past for background and explanations.',
        ),
        examples(
          [
            'En 1789, le peuple de Paris prend la Bastille.',
            'In 1789 the people of Paris take the Bastille.',
          ],
          ['Napoléon meurt à Sainte-Hélène en 1821.', 'Napoleon dies on Saint Helena in 1821.'],
        ),
      ),
      section(
        'earlier',
        'What happened earlier, and speech',
        p(
          'For an action before the main events use the **plus-que-parfait** (il avait fini) or, in a formal narrative after dès que, quand or à peine, the **passé antérieur** (il eut fini). Aloud, tell the whole story with the passé composé for events and the imparfait for the background.',
        ),
        table(
          'The same story in writing and in speech.',
          ['In a novel', 'In conversation'],
          [
            ['Il tomba et se cassa le bras.', 'Il est tombé et il s’est cassé le bras.'],
            ['Dès qu’il eut fini, il sortit.', 'Dès qu’il a eu fini, il est sorti.'],
            [
              'Il pleuvait ; ils restèrent chez eux.',
              'Il pleuvait, alors on est restés à la maison.',
            ],
          ],
        ),
      ),
    ],
    related: ['fr-c21-passe-simple'],
    sources: [S.passeSimple, S.presentHistorique],
  },
  {
    id: 'fr-c21-cause-consequence',
    title: 'Cause and consequence',
    tagline: 'Give a reason, draw a result',
    level: LEVEL,
    summary:
      'Connectors of cause (parce que, puisque, étant donné que, faute de, grâce à) and of consequence (si bien que, de sorte que, au point de, par conséquent) differ in meaning, in what follows them and in the mood of the verb.',
    sections: [
      section(
        'cause',
        'Giving a reason',
        p(
          'The choice depends on how the reason is presented. **Parce que** gives new information. **Puisque** refers to a reason the listener already knows. **Étant donné que** and **vu que** are more formal. Before a noun, a clause connector does not work: use a preposition.',
        ),
        table(
          'Connectors of cause and what follows them.',
          ['Connector', 'Followed by', 'Idea', 'Example'],
          [
            [
              'parce que',
              'clause (indicative)',
              'new reason',
              'Il est absent parce qu’il est malade.',
            ],
            ['puisque', 'clause (indicative)', 'known reason', 'Puisque vous le dites, j’accepte.'],
            [
              'étant donné que, vu que',
              'clause (indicative)',
              'given that (formal)',
              'Vu que le train est en retard, partons.',
            ],
            ['en raison de', 'noun', 'because of', 'En raison de la grève, le vol est annulé.'],
            [
              'faute de',
              'noun or infinitive',
              'for lack of (negative)',
              'Faute de temps, nous renonçons.',
            ],
            ['grâce à', 'noun', 'thanks to (positive)', 'Grâce à vous, j’ai réussi.'],
          ],
        ),
        examples(
          ['Puisque vous êtes là, aidez-moi.', 'Since you are here, help me.'],
          ['Il a échoué faute de préparation.', 'He failed for lack of preparation.'],
          ['Elle a gagné grâce à son travail.', 'She won thanks to her work.'],
        ),
      ),
      section(
        'doubt',
        'A reason you doubt, and a reason you add',
        p(
          '**Sous prétexte que** shows that you doubt the reason given. **D’autant que** adds a further reason to one already given. **À force de** + infinitive means “through doing it again and again”.',
        ),
        compare(
          {
            title: 'sous prétexte que',
            question: 'You doubt the reason',
            example: 'Il est resté chez lui sous prétexte qu’il était malade.',
          },
          {
            title: 'd’autant que',
            question: 'You add a reason',
            example: 'Je reste, d’autant que le film est gratuit.',
          },
        ),
        mistake(
          'Watch out',
          '✗ à cause de bonheur (a positive reason)  ✓ grâce au bonheur',
          '✗ parce que la grève  ✓ à cause de la grève / en raison de la grève',
          '✗ faute que temps  ✓ faute de temps',
        ),
      ),
      section(
        'consequence',
        'Drawing a result',
        p(
          'A result is introduced by **si bien que**, **au point que** or **tellement … que**, followed by the indicative when the result really happened. Between two sentences use **par conséquent**, **de ce fait**, **en conséquence** or **d’où** + noun.',
        ),
        table(
          'Connectors of consequence.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['si bien que', 'indicative', 'Il a trop mangé, si bien qu’il est malade.'],
            ['tellement … que', 'indicative', 'Il pleut tellement que la rue est inondée.'],
            ['au point de', 'infinitive', 'Il était ému au point de ne plus pouvoir parler.'],
            [
              'par conséquent, de ce fait',
              'new sentence',
              'Les prix ont doublé ; par conséquent, les ventes ont chuté.',
            ],
            ['d’où', 'noun', 'La crise s’est aggravée, d’où une hausse du chômage.'],
          ],
        ),
      ),
      section(
        'mood',
        'De sorte que: result or purpose',
        p(
          '**De sorte que** has two meanings. For a result that really happened, it takes the **indicative**. For a purpose that is not yet reached, it takes the **subjunctive**, like **pour que**. A verb of cause such as **entraîner**, **engendrer**, **déclencher** or **découler de** can replace a connector.',
        ),
        compare(
          {
            title: 'Result: indicative',
            question: 'It happened',
            example: 'Il a bien parlé, de sorte que tous ont compris.',
          },
          {
            title: 'Purpose: subjunctive',
            question: 'It is the aim',
            example: 'Parlez lentement de sorte que tous comprennent.',
          },
        ),
        tip(
          'Denying a reason',
          'To say that something is not the reason, use ce n’est pas que + subjunctive: Ce n’est pas qu’il soit paresseux, mais il manque de temps. (This pattern follows common textbook teaching.)',
        ),
      ),
    ],
    related: ['fr-c21-concession'],
    sources: [S.subConjunction, S.puisque, S.deSorteQue],
  },
  {
    id: 'fr-c21-concession',
    title: 'Concession and hypothesis',
    tagline: 'Concede, contrast and imagine',
    level: LEVEL,
    summary:
      'Concession (bien que, quoique, quand bien même, en dépit de), opposition (alors que, tandis que, en revanche) and condition (si, au cas où, à condition que, à moins que) take different moods: subjunctive, indicative or conditional.',
    sections: [
      section(
        'concession',
        'Conceding a point',
        p(
          'A concession says “this is true, but it does not change the outcome”. **Bien que**, **quoique** and **encore que** take the **subjunctive**. **Quand bien même** takes the **conditional**. Before a noun, use **en dépit de**. Between sentences, use **certes … toutefois / néanmoins**.',
        ),
        table(
          'Connectors of concession.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['bien que, quoique', 'subjunctive', 'Bien qu’il soit fatigué, il continue.'],
            ['quand bien même', 'conditional', 'Quand bien même vous insisteriez, je refuserais.'],
            ['en dépit de', 'noun', 'En dépit de la pluie, le match a eu lieu.'],
            [
              'certes … toutefois',
              'new clause',
              'Certes, c’est cher ; toutefois, cela vaut la peine.',
            ],
          ],
        ),
        examples(
          ['Quoique peu riche, il est généreux.', 'Although not rich, he is generous.'],
          [
            'Quand bien même seraient-ils cinq mille !',
            'Even if there were five thousand of them!',
          ],
        ),
        tip(
          'Quoique or quoi que?',
          'Quoique (one word) means “although”. Quoi que (two words) means “whatever” and always takes the subjunctive: Quoi que tu fasses, je t’aiderai.',
        ),
      ),
      section(
        'opposition',
        'Setting two facts against each other',
        p(
          '**Alors que** and **tandis que** put two facts side by side and take the **indicative**. Between sentences use **en revanche** or **à l’inverse**; **par contre** is more spoken. **Au lieu de** + infinitive means “instead of”.',
        ),
        examples(
          [
            'Il travaille alors que ses amis s’amusent.',
            'He works while his friends enjoy themselves.',
          ],
          [
            'Lyon est calme ; en revanche, Marseille est animée.',
            'Lyon is calm; on the other hand, Marseille is lively.',
          ],
        ),
      ),
      section(
        'condition',
        'Condition and hypothesis',
        p(
          '**Si** is followed by the present (then the future), by the imparfait (then the conditional), or by the plus-que-parfait (then the past conditional). **Au cas où** and **dans l’hypothèse où** take the **conditional**; the Académie française recommends only the conditional after au cas où. **À condition que**, **pourvu que**, **à moins que** and **à supposer que** take the **subjunctive**.',
        ),
        table(
          'Conditions and their moods.',
          ['Pattern', 'Meaning', 'Example'],
          [
            ['si + present → future', 'real condition', 'Si tu viens, nous irons au cinéma.'],
            [
              'si + imparfait → conditional',
              'unlikely condition',
              'Si j’avais le temps, je lirais.',
            ],
            [
              'si + plus-que-parfait → past conditional',
              'regret',
              'Si j’avais su, je ne serais pas venu.',
            ],
            ['au cas où + conditional', 'in case', 'Au cas où il pleuvrait, prends un parapluie.'],
            [
              'à condition que + subjunctive',
              'provided that',
              'Nous partons à condition qu’il fasse beau.',
            ],
            ['à moins que + subjunctive', 'unless', 'Restons, à moins que tu ne sois pressé.'],
            [
              'sauf si + indicative',
              'except if',
              'Sauf si tu changes d’avis, on part à huit heures.',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Si j’aurais le temps, je viendrais.  ✓ Si j’avais le temps, je viendrais.',
          '✗ Au cas où il pleuvra  ✓ Au cas où il pleuvrait',
          '✗ à condition que tu viendras  ✓ à condition que tu viennes',
        ),
      ),
    ],
    related: ['fr-c21-cause-consequence'],
    sources: [S.subConjunction, S.quandBienMeme, S.auCasOu, S.quoique, S.subjunctive],
  },
  {
    id: 'fr-c21-subjunctive',
    title: 'The subjunctive',
    tagline: 'When the mood changes the verb',
    level: LEVEL,
    summary:
      'The subjunctive follows verbs and expressions of will, necessity, doubt, emotion and possibility. Facts and certainty keep the indicative. Several common verbs have irregular subjunctive stems.',
    sections: [
      section(
        'when',
        'When the subjunctive is needed',
        p(
          'The subjunctive appears in a clause with **que** after a main clause that is not a plain statement of fact. It is used for what is wanted, needed, doubted, felt or merely possible, and after conjunctions such as **bien que**, **pour que**, **avant que**, **à condition que** and **à moins que**.',
        ),
        table(
          'Main clauses and the mood they require.',
          ['Idea', 'Examples', 'Mood'],
          [
            [
              'will, necessity',
              'vouloir que, exiger que, il faut que, il importe que',
              'subjunctive',
            ],
            ['doubt, possibility', 'douter que, il se peut que, il est douteux que', 'subjunctive'],
            [
              'emotion, judgement',
              'regretter que, s’étonner que, se réjouir que, déplorer que',
              'subjunctive',
            ],
            ['certainty, opinion', 'il est certain que, je pense que, je sais que', 'indicative'],
          ],
        ),
        examples(
          ['Il faut que nous partions avant la nuit.', 'We must leave before nightfall.'],
          ['Je m’étonne que tu ne sois pas venu.', 'I am surprised that you did not come.'],
          ['Il est certain qu’elle a raison.', 'It is certain that she is right.'],
        ),
      ),
      section(
        'forms',
        'Forms of the present and the past subjunctive',
        p(
          'Most verbs form the present subjunctive from the **ils** form of the present: ils partent → que je parte. Six verbs are irregular. The **past subjunctive** is formed with the subjunctive of avoir or être and the past participle: qu’il soit parti, qu’elle ait fini. It shows an action that is already completed.',
        ),
        table(
          'Irregular present subjunctives.',
          ['Person', 'être', 'avoir', 'aller', 'faire', 'savoir'],
          [
            ['que je', 'sois', 'aie', 'aille', 'fasse', 'sache'],
            ['que tu', 'sois', 'aies', 'ailles', 'fasses', 'saches'],
            ['qu’il', 'soit', 'ait', 'aille', 'fasse', 'sache'],
            ['que nous', 'soyons', 'ayons', 'allions', 'fassions', 'sachions'],
            ['que vous', 'soyez', 'ayez', 'alliez', 'fassiez', 'sachiez'],
            ['qu’ils', 'soient', 'aient', 'aillent', 'fassent', 'sachent'],
          ],
        ),
      ),
      section(
        'sequence',
        'Sequence of tenses and the imperfect subjunctive',
        p(
          'After a main verb in the past, formal written French can use the **imparfait du subjonctif** (je priais pour qu’il m’aimât) or the plus-que-parfait of the subjunctive. This sequence is rare and mostly literary: in modern French the present or the past subjunctive is used instead.',
        ),
        mistake(
          'Watch out',
          '✗ Je pense qu’il vienne.  ✓ Je pense qu’il vient. (affirmative opinion: indicative)',
          '✗ Il faut que tu es patient.  ✓ Il faut que tu sois patient.',
          '✗ Je regrette qu’il a oublié.  ✓ Je regrette qu’il ait oublié.',
        ),
        tip(
          'Negated opinion',
          'After a negated or questioned verb of thought, the subjunctive is optional and stresses doubt; the indicative stresses that the fact is real: Je ne pense pas qu’il vienne.',
        ),
      ),
    ],
    related: ['fr-c21-concession', 'fr-c21-reported-speech'],
    sources: [S.subjunctive, S.concordance],
  },
  {
    id: 'fr-c21-reported-speech',
    title: 'Reported speech in the past',
    tagline: 'Pass on what someone said',
    level: LEVEL,
    summary:
      'In reported speech after a past verb of saying, the tenses move back one step, the time and place words change, a yes/no question is introduced by si and a general truth keeps its tense.',
    sections: [
      section(
        'tenses',
        'The tenses move back',
        p(
          'When the introducing verb (**il a dit**, **elle a affirmé**) is in the past, the verb of the reported clause changes. When it is in the present or future, nothing changes. The imparfait, the plus-que-parfait and the conditional stay as they are.',
        ),
        table(
          'Tense shifts after a past verb of saying.',
          ['Direct speech', 'Reported speech'],
          [
            ['« Je suis fatigué. » (présent)', 'Il a dit qu’il était fatigué. (imparfait)'],
            ['« J’ai fini. » (passé composé)', 'Elle a dit qu’elle avait fini. (plus-que-parfait)'],
            ['« Je viendrai. » (futur)', 'Il a dit qu’il viendrait. (conditionnel)'],
            [
              '« J’aurai fini. » (futur antérieur)',
              'Elle a dit qu’elle aurait fini. (conditionnel passé)',
            ],
          ],
        ),
        examples(
          ['Il dit qu’il est malade.', 'He says he is ill. (present verb: no shift)'],
          [
            'Le professeur a rappelé que la Terre est ronde.',
            'The teacher reminded us that the Earth is round. (general truth)',
          ],
        ),
      ),
      section(
        'words',
        'Time and place words, questions',
        p('The words that point to the moment of speaking move to the narrator’s point of view.'),
        table(
          'Time and place words in reported speech.',
          ['Direct speech', 'Reported speech'],
          [
            ['hier', 'la veille'],
            ['demain', 'le lendemain'],
            ['maintenant', 'alors'],
            ['ici', 'là'],
          ],
        ),
        compare(
          {
            title: 'Direct',
            question: 'Original words',
            example: 'Il m’a demandé : « Tu viens ? »',
          },
          {
            title: 'Reported',
            question: 'Yes/no question with si',
            example: 'Il m’a demandé si je venais.',
          },
        ),
      ),
      section(
        'verbs',
        'Choosing the verb of saying',
        p(
          'A neutral **dire** can be replaced by a verb that shows attitude: **affirmer** (to claim), **avouer** (to admit), **répliquer** (to retort), **objecter** (to object), **souligner** (to stress), **prétendre** (to claim without proof) or **insinuer** (to hint).',
        ),
        mistake(
          'Watch out',
          '✗ Il a dit qu’il viendra demain.  ✓ Il a dit qu’il viendrait le lendemain.',
          '✗ Il m’a demandé que je venais.  ✓ Il m’a demandé si je venais.',
        ),
      ),
    ],
    related: ['fr-c21-subjunctive', 'fr-c21-narrative-tenses'],
    sources: [S.indirectSpeech, S.concordance],
  },
  {
    id: 'fr-c21-emphasis',
    title: 'Emphasis',
    tagline: 'Put the spotlight on one element',
    level: LEVEL,
    summary:
      'French stresses one element by framing it with c’est … qui / que, by a ce qui / ce que … c’est sentence, or by dislocation: the element is detached at the start or end of the sentence and taken up by a pronoun.',
    sections: [
      section(
        'cleft',
        'C’est … qui, c’est … que',
        p(
          'The cleft sentence frames one element between a presentative (**c’est**, **ce sont**) and a relative pronoun. **Qui** stands for the subject, **que** for an object or a complement. The stressed element excludes the alternatives: C’est Louis Jouvet qui a créé ces pièces (and not someone else).',
        ),
        table(
          'Cleft sentences.',
          ['Stressed element', 'Pronoun', 'Example'],
          [
            ['subject', 'qui', 'C’est Paul qui a cassé le vase.'],
            ['direct object', 'que', 'C’est ce film que nous avons vu hier.'],
            ['place or time', 'que', 'C’est demain que nous partons.'],
            ['with a preposition', 'que', 'C’est à toi que je parle.'],
            [
              'plural noun (careful writing)',
              'qui / que',
              'Ce sont les enfants qui font le bruit.',
            ],
          ],
        ),
        examples(
          [
            'C’est Louis Jouvet qui a créé ces pièces.',
            'It was Louis Jouvet who created these plays.',
          ],
          [
            'Ce sont les pièces de Giraudoux que Jouvet a créées.',
            'It was Giraudoux’s plays that Jouvet created.',
          ],
        ),
      ),
      section(
        'pseudo',
        'Ce qui, ce que, ce dont … c’est',
        p(
          'To stress an idea in a longer sentence, put it after **c’est** and introduce it with **ce qui** (subject), **ce que** (object) or **ce dont** (a verb with de): Ce qui m’intéresse, c’est la musique. After ce dont … c’est the preposition de returns: Ce dont j’ai besoin, c’est de temps.',
        ),
        examples(
          ['Ce qui compte, c’est de participer.', 'What matters is taking part.'],
          ['Ce que je veux, c’est du calme.', 'What I want is some peace.'],
          ['Ce dont j’ai besoin, c’est de temps.', 'What I need is time.'],
        ),
      ),
      section(
        'dislocation',
        'Dislocation',
        p(
          'A **dislocation** detaches an element at the beginning (left) or at the end (right) of the sentence. A pronoun takes it up inside the clause. It is very common in speech and also used in writing for emphasis.',
        ),
        table(
          'Left and right dislocation.',
          ['Left', 'Right'],
          [
            [
              'Les pièces de Giraudoux, Jouvet les a créées.',
              'Jouvet les a créées, les pièces de Giraudoux.',
            ],
            ['Ce livre, je l’ai lu deux fois.', 'Je l’ai lu deux fois, ce livre.'],
            ['Les voisins, on ne les voit jamais.', 'On ne les voit jamais, les voisins.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ce livre, je lis.  ✓ Ce livre, je le lis.',
          '✗ C’est Hugo que l’a écrit.  ✓ C’est Hugo qui l’a écrit.',
          '✗ Ce que m’intéresse, c’est ça.  ✓ Ce qui m’intéresse, c’est ça.',
        ),
      ),
    ],
    related: ['fr-c21-nominalisation', 'fr-c21-cause-consequence'],
    sources: [S.cleft, S.dislocation],
  },
  {
    id: 'fr-c21-nominalisation',
    title: 'Nominalisation',
    tagline: 'Pack a verb into a noun',
    level: LEVEL,
    summary:
      'Nominalisation turns a verb or an adjective into a noun. It makes written French denser and is typical of articles, reports and headlines.',
    sections: [
      section(
        'what',
        'What nominalisation does',
        p(
          'A nominalisation changes a word that is not a noun into a noun. It is particularly used in written language: it shortens a sentence and increases the density of a text. A verbal sentence becomes a noun phrase that can be the subject of a new clause.',
        ),
        table(
          'From a sentence with a verb to a noun phrase.',
          ['Verbal sentence', 'Noun phrase'],
          [
            ['Les prix ont flambé.', 'La flambée des prix inquiète.'],
            ['La situation s’aggrave.', 'L’aggravation de la situation inquiète.'],
            ['Le ministre a démissionné.', 'La démission du ministre a surpris.'],
            ['Les négociations ont abouti.', 'L’aboutissement des négociations est un succès.'],
          ],
        ),
      ),
      section(
        'forms',
        'How the noun is formed',
        p(
          'Many nouns are formed with a suffix: **-ation / -ion** (aggravation, opposition), **-ment** (aboutissement, développement) and **-ée** (flambée). Others are the bare stem (le report, le recul, l’essor) or an infinitive used as a noun (le coucher). French cannot nominalise every infinitive: we say le coucher but not le dormir.',
        ),
        examples(
          ['Le déroulement de la réunion a été long.', 'The course of the meeting was long.'],
          [
            'L’émergence de ce parti a bouleversé la scène politique.',
            'The emergence of this party upset the political scene.',
          ],
        ),
        tip(
          'Style',
          'Nominalisations are typical of the press and of formal writing; in speech, prefer the verb. Adjectives can be nominalised too: pauvre → le pauvre, beau → le beau.',
        ),
      ),
    ],
    related: ['fr-c21-emphasis', 'fr-c21-word-formation'],
    sources: [S.nominalisation],
  },
  {
    id: 'fr-c21-acronyms',
    title: 'Acronyms and institution names',
    tagline: 'Read and write UE, BCE, SNCF and ONG',
    level: LEVEL,
    summary:
      'Institutions are named by acronyms. A sigle is read letter by letter, an acronyme as a word. The acronym takes the gender of the core noun of the full name and does not take a plural s.',
    sections: [
      section(
        'kinds',
        'Sigle or acronyme?',
        p(
          'A **sigle** is read letter by letter: SNCF is read “ès-ène-cé-èf”. An **acronyme** is pronounced as a word: OTAN, Unesco, Medef. Some abbreviations can be read both ways, depending on the speaker: ONU, PIB.',
        ),
        table(
          'Sigle or acronyme.',
          ['Abbreviation', 'Full name', 'Read as'],
          [
            ['SNCF', 'Société nationale des chemins de fer français', 'letters'],
            ['BCE', 'Banque centrale européenne', 'letters'],
            ['OTAN', 'Organisation du traité de l’Atlantique nord', 'a word'],
            ['ONG', 'organisation non gouvernementale', 'letters'],
          ],
        ),
      ),
      section(
        'gender',
        'Gender and plural',
        p(
          'The acronym takes the **gender of the core noun** of the full name: la SNCF (société), le CIO (comité), la BCE (banque), le FBI (bureau), la CIA (agence). Acronyms take **no plural s** in French: des ONG, des BD, des CD.',
        ),
        examples(
          ['La BCE a relevé ses taux.', 'The ECB has raised its rates.'],
          ['Le CIO a choisi la ville.', 'The IOC chose the city.'],
          ['Plusieurs ONG ont protesté.', 'Several NGOs protested.'],
        ),
        mistake(
          'Watch out',
          '✗ le BCE  ✓ la BCE (banque is feminine)',
          '✗ des ONGs  ✓ des ONG',
          '✗ des BD’s  ✓ des BD',
        ),
      ),
      section(
        'writing',
        'Writing acronyms and institution names',
        p(
          'The recommended style is capital letters without full stops: CNES, RATP, UE. The trend is to drop the stops even in letter-by-letter acronyms (IVG, SOS). Very common acronyms that are easy to pronounce may be written with only an initial capital: Unesco, Euratom. The institutions themselves are named with a capital on the first word: l’Assemblée nationale, le Conseil constitutionnel (common typographic practice).',
        ),
        tip(
          'In a text',
          'The first time, write the full name and put the acronym in brackets: la Banque centrale européenne (BCE). After that the acronym is enough.',
        ),
      ),
    ],
    related: ['fr-c21-emphasis'],
    sources: [S.sigle, S.euInstitutions, S.fifthRepublic],
  },
  {
    id: 'fr-c21-argument',
    title: 'Structuring an argument',
    tagline: 'Defend a thesis and answer the other side',
    level: LEVEL,
    summary:
      'An argument consists of a thesis and the arguments that support it. Connectors mark the steps: listing, opposition, concession and conclusion. A counter-example is enough to refute a general thesis.',
    sections: [
      section(
        'parts',
        'The parts of an argument',
        p(
          'An argumentation has a **conclusion** and one or more supporting elements, the **prémisses** or **arguments**. It presents arguments in support of a **thèse** or against it, and stays open to **réfutation**. An argument can rest on a concrete example, on a comparison, or on the authority of its author (**argument d’autorité**). A **contre-exemple** refutes a thesis by showing a case that contradicts it.',
        ),
        table(
          'The vocabulary of an argument.',
          ['Word', 'What it is', 'Example'],
          [
            ['la thèse', 'the position defended', 'Je défends la thèse du télétravail partiel.'],
            ['l’argument', 'a reason that supports it', 'Cet argument est étayé par trois études.'],
            [
              'le contre-exemple',
              'a case that contradicts a claim',
              'Un contre-exemple suffit à réfuter cette thèse.',
            ],
            ['la réfutation', 'proof that a claim is wrong', 'La réfutation est claire.'],
          ],
        ),
      ),
      section(
        'connectors',
        'Connectors that structure the line of reasoning',
        p(
          'A **connecteur** is a word or phrase that links two propositions. In an argument, connectors tell the listener what each step does: **list** the points, **oppose** or **restrict** a claim, or **conclude**.',
        ),
        table(
          'Connectors by function.',
          ['Function', 'Connectors'],
          [
            ['list the points', 'tout d’abord, en premier lieu, ensuite, en second lieu, enfin'],
            ['oppose or restrict', 'cependant, toutefois, en revanche, pourtant'],
            ['grant a point', 'certes … toutefois, il est vrai que … mais'],
            ['conclude', 'donc, en définitive, pour conclure, en conclusion'],
          ],
        ),
        examples(
          [
            'Certes, ce plan est ambitieux ; toutefois, il reste réaliste.',
            'Admittedly this plan is ambitious; however, it remains realistic.',
          ],
          [
            'En premier lieu, le budget ; en second lieu, le calendrier.',
            'In the first place, the budget; secondly, the schedule.',
          ],
        ),
      ),
      section(
        'positions',
        'Taking a position',
        p(
          'Verbs show how you stand towards an idea: **étayer** (to support), **réfuter** (to refute), **nuancer** (to qualify), **contester** (to dispute), **cautionner** (to lend support), **dénoncer** (to denounce), **trancher** (to settle) and **plaider en faveur de** (to argue for).',
        ),
        mistake(
          'Watch out',
          '✗ Un contre-exemple permet d’étayer une thèse générale.  ✓ … de réfuter une thèse générale.',
          '✗ plaider contre en faveur de  ✓ plaider en faveur de (or plaider contre)',
          '✗ Donc, ce plan est ambitieux ; toutefois…  ✓ Certes, ce plan est ambitieux ; toutefois…',
        ),
        tip(
          'In a debate',
          'The **modérateur** gives the floor, each **orateur** has a fixed **temps de parole**, and a **réplique** answers what was just said.',
        ),
      ),
    ],
    related: ['fr-c21-concession', 'fr-c21-cause-consequence'],
    sources: [S.argumentation, S.connectors, S.debate],
  },
];
