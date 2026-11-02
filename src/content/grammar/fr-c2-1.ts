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
];
