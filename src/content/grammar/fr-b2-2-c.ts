import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b2-2';

/** French B2.2, units 7 to 12: economy, history, territories, society, climate, debate. */
export const FR22B_TOPICS_C: GrammarTopic[] = [
  {
    id: 'fr-b22-concession',
    title: 'Contrast and concession',
    tagline: 'bien que · même si · malgré · pourtant',
    level: LEVEL,
    summary:
      'Concession admits a fact and then opposes another. Bien que, quoique and sans que take the subjunctive; même si, alors que and tandis que take the indicative; malgré and en dépit de take a noun; avoir beau takes an infinitive.',
    sections: [
      section(
        'connectors',
        'Connectors and what follows',
        table(
          'Concession connectors.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['bien que, quoique', 'subjunctive', 'Bien qu’il soit cher, il se vend bien.'],
            [
              'même si, alors que, tandis que',
              'indicative',
              'Même si les prix montent, nous continuons.',
            ],
            ['malgré, en dépit de', 'a noun', 'Malgré la crise, les exportations progressent.'],
            ['avoir beau', 'infinitive', 'Il a beau essayer, il échoue.'],
            [
              'pourtant, cependant, néanmoins',
              'a new clause',
              'Le produit est cher ; pourtant, il se vend bien.',
            ],
            [
              'certes … mais',
              'concession + objection',
              'Certes, le prix est élevé, mais la qualité est excellente.',
            ],
          ],
        ),
      ),
      section(
        'traps',
        'Frequent mistakes',
        mistake(
          'Watch out',
          '✗ Bien que il est riche.  ✓ Bien qu’il soit riche.',
          '✗ Malgré il pleut.  ✓ Malgré la pluie. / Bien qu’il pleuve.',
          '✗ Il a beau essaie.  ✓ Il a beau essayer.',
        ),
        tip(
          'Same subject',
          'When both clauses share a subject, a participle or a noun phrase is often lighter: Bien que fatigué, il a continué.',
        ),
      ),
    ],
    related: ['fr-b22-comparison', 'fr-b22-cause'],
    sources: [S.subordinateAdverbial, S.connector],
  },
  {
    id: 'fr-b22-comparison',
    title: 'Comparing',
    tagline: 'plus … plus · de plus en plus · autant … que',
    level: LEVEL,
    summary:
      'Compare with plus, moins or aussi + adjective/adverb + que, and with plus de, moins de or autant de + noun + que. Bon has the comparative meilleur, bien has mieux. Plus … plus, de plus en plus and d’autant plus … que express proportion and progression.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Degrees of comparison.',
          ['Meaning', 'Adjective / adverb', 'Noun'],
          [
            ['more', 'plus rapide que', 'plus de clients que'],
            ['less', 'moins cher que', 'moins de dettes que'],
            ['as much', 'aussi rapide que', 'autant de clients que'],
          ],
        ),
        p(
          'Irregular forms: **bon → meilleur** (adjective), **bien → mieux** (adverb). The superlative adds the article: *le plus intéressant*, *le moins cher*, *le meilleur*.',
        ),
      ),
      section(
        'proportion',
        'Proportion and progression',
        compare(
          {
            title: 'plus … plus',
            question: 'proportion',
            example: 'Plus on dépense, plus on s’endette.',
          },
          {
            title: 'de plus en plus',
            question: 'progression',
            example: 'De plus en plus de gens achètent d’occasion.',
          },
          {
            title: 'd’autant plus … que',
            question: 'all the more as',
            example: 'Ils sont d’autant plus exigeants que les prix augmentent.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Elle travaille meilleur que lui.  ✓ Elle travaille mieux que lui.',
          '✗ Elle gagne autant comme moi.  ✓ Elle gagne autant que moi.',
        ),
      ),
    ],
    related: ['fr-b22-concession'],
    sources: [S.comparative, S.superlative],
  },
  {
    id: 'fr-b22-passe-simple',
    title: 'The passé simple',
    tagline: 'Il fut · ils prirent · elle naquit',
    level: LEVEL,
    summary:
      'The passé simple is the tense of written narration. At B2 you must recognise it, above all the third person singular and plural, and be able to place it next to the imparfait. In speech the passé composé replaces it.',
    sections: [
      section(
        'forms',
        'Forms to recognise',
        table(
          'Endings of the passé simple.',
          ['Group', 'il / elle', 'ils / elles', 'Example'],
          [
            ['-er verbs', '-a', '-èrent', 'il arriva, ils arrivèrent'],
            ['-ir, -re verbs', '-it', '-irent', 'il finit, ils prirent'],
            ['-oir, -ir irregular', '-ut', '-urent', 'il fut, il eut, il mourut'],
            ['venir, tenir', '-int', '-inrent', 'il vint, ils vinrent'],
          ],
        ),
        table(
          'Irregular forms you will meet often.',
          ['Infinitive', 'il / elle', 'ils / elles'],
          [
            ['être', 'fut', 'furent'],
            ['avoir', 'eut', 'eurent'],
            ['faire', 'fit', 'firent'],
            ['dire', 'dit', 'dirent'],
            ['voir', 'vit', 'virent'],
            ['naître', 'naquit', 'naquirent'],
          ],
        ),
      ),
      section(
        'use',
        'Where it is used',
        p(
          'The **passé simple** appears in history books, novels and press reports of the past. It states **completed events**, one after another: *Il entra, regarda autour de lui et sortit.* In conversation and in everyday writing French uses the **passé composé** instead: *Il est entré, il a regardé et il est sorti.*',
        ),
        tip(
          'Do you have to produce it?',
          'Not in speech. Produce the third person (il fut, ils prirent) if you write narrative; recognise all forms when you read.',
        ),
      ),
    ],
    related: ['fr-b22-plus-que-parfait'],
    sources: [S.passeSimple],
  },
  {
    id: 'fr-b22-plus-que-parfait',
    title: 'Narrative tenses',
    tagline: 'Il pleuvait quand ils arrivèrent · il avait déjà quitté',
    level: LEVEL,
    summary:
      'In a story the passé simple or passé composé gives the events, the imparfait the background and habits, and the plus-que-parfait the actions that had already happened.',
    sections: [
      section(
        'roles',
        'Three tenses, three roles',
        table(
          'How the tenses work together.',
          ['Tense', 'Role', 'Example'],
          [
            ['passé simple / passé composé', 'the events in sequence', 'Ils arrivèrent à midi.'],
            ['imparfait', 'background, description, habit', 'Il pleuvait, la ville était calme.'],
            [
              'plus-que-parfait',
              'what had happened before',
              'Le roi avait signé le traité deux ans plus tôt.',
            ],
          ],
        ),
        p(
          'The **plus-que-parfait** is the imparfait of *avoir* or *être* plus the participle: *j’avais fini*, *elle était partie*, *nous nous étions levés*. It often follows verbs of saying and remembering in the past: *Il dit qu’il avait perdu la bataille.*',
        ),
      ),
      section(
        'contrast',
        'Choosing the tense',
        compare(
          { title: 'imparfait', question: 'the scene', example: 'Le soleil se levait…' },
          {
            title: 'passé simple',
            question: 'the new event',
            example: '…quand l’armée entra dans la ville.',
          },
          {
            title: 'plus-que-parfait',
            question: 'before that',
            example: 'La population avait déjà fui.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Il a dit qu’il a oublié.  ✓ Il a dit qu’il avait oublié.',
          '✗ Il pleuvait quand ils arrivaient.  ✓ Il pleuvait quand ils arrivèrent. / sont arrivés.',
        ),
      ),
    ],
    related: ['fr-b22-passe-simple', 'fr-b22-si-clauses'],
    sources: [S.pluperfect, S.passeSimple],
  },
  {
    id: 'fr-b22-participle-agreement',
    title: 'Past participle agreement',
    tagline: 'Les photos que j’ai prises · elle s’est installée',
    level: LEVEL,
    summary:
      'The past participle agrees with the subject after être, with a preceding direct object after avoir, and with the subject of a pronominal verb when se is a direct object. Fait before an infinitive and participles with a following object stay invariable.',
    sections: [
      section(
        'rules',
        'The four cases',
        table(
          'When does the participle agree?',
          ['Case', 'Rule', 'Example'],
          [
            ['être', 'agrees with the subject', 'Elles sont parties.'],
            ['avoir + COD before', 'agrees with the COD', 'Les photos que j’ai prises.'],
            ['avoir + COD after', 'invariable', 'J’ai pris les photos.'],
            ['pronominal, se = direct object', 'agrees with the subject', 'Elle s’est installée.'],
            [
              'pronominal, se = indirect object',
              'invariable',
              'Ils se sont parlé / serré la main.',
            ],
            ['fait + infinitive', 'invariable', 'La maison qu’il a fait construire.'],
          ],
        ),
        tip(
          'Quick test',
          'Ask the question quoi? or qui? after the verb. If the answer is before the participle (que, les, la, quels…), agree. If there is no such answer, or it comes after, do not.',
        ),
      ),
      section(
        'traps',
        'Frequent mistakes',
        mistake(
          'Watch out',
          '✗ Les photos que j’ai pris.  ✓ Les photos que j’ai prises.',
          '✗ Ils se sont serrés la main.  ✓ Ils se sont serré la main.',
          '✗ Elle s’est faite construire une maison.  ✓ Elle s’est fait construire une maison.',
        ),
      ),
    ],
    related: ['fr-b22-present-participle'],
    sources: [S.participleAgreement, S.pastParticiple],
  },
  {
    id: 'fr-b22-present-participle',
    title: 'Gérondif and participe présent',
    tagline: 'En créant · les habitants vivant ici · une rue passante',
    level: LEVEL,
    summary:
      'Three -ant forms look alike but behave differently: the gérondif (en + -ant, how or when), the participe présent (replaces qui + verb or gives a reason, invariable) and the adjectif verbal (an adjective that agrees).',
    sections: [
      section(
        'three',
        'Three forms with -ant',
        table(
          'Gérondif, participe présent and adjectif verbal.',
          ['Form', 'Function', 'Agrees?', 'Example'],
          [
            [
              'gérondif',
              'how, when, why: the same subject',
              'no',
              'En créant des parcs, la mairie agit.',
            ],
            [
              'participe présent',
              'like qui + verb, or a cause',
              'no',
              'Les habitants vivant en banlieue…',
            ],
            ['adjectif verbal', 'describes a noun', 'yes', 'une ville accueillante'],
          ],
        ),
        p(
          'Some adjectives are spelt differently from the participle: **convaincant** (convainquant), **fatigant** (fatiguant), **différent** (différant), **précédent** (précédant).',
        ),
      ),
      section(
        'use',
        'Using them well',
        compare(
          {
            title: 'gérondif',
            question: 'en + -ant',
            example: 'Elle s’est blessée en faisant du vélo.',
          },
          {
            title: 'participe présent',
            question: '-ant alone',
            example: 'Jugeant le projet inutile, ils ont voté contre.',
          },
          { title: 'adjectif verbal', question: 'agrees', example: 'des chiffres convaincants' },
        ),
        mistake(
          'Watch out',
          '✗ En traversé le centre.  ✓ En traversant le centre.',
          '✗ Les habitants vivants en banlieue.  ✓ Les habitants vivant en banlieue.',
        ),
        tip(
          'Compound form',
          'Ayant / étant + participle expresses an earlier action: Ayant refusé le projet, le maire a démissionné.',
        ),
      ),
    ],
    related: ['fr-b22-participle-agreement'],
    sources: [S.presentParticiple, S.gerund],
  },
  {
    id: 'fr-b22-purpose',
    title: 'Expressing purpose',
    tagline: 'pour que · afin que · afin de · de peur que',
    level: LEVEL,
    summary:
      'Purpose answers pourquoi in the sense of what for. With two subjects it takes que + subjunctive (pour que, afin que, de peur que). With one subject French uses the infinitive (pour, afin de, de peur de).',
    sections: [
      section(
        'forms',
        'Subjunctive or infinitive',
        table(
          'Purpose connectors.',
          ['Same subject → infinitive', 'Different subjects → subjunctive', 'Meaning'],
          [
            ['pour, afin de', 'pour que, afin que', 'so that, in order to'],
            ['dans le but de, en vue de', 'dans le but que, de façon que', 'with the aim of'],
            ['de peur de, de crainte de', 'de peur que (+ ne), de crainte que', 'for fear of'],
          ],
        ),
        examples(
          ['Il milite pour que chacun soit entendu.', 'He campaigns so that everyone is heard.'],
          [
            'Elle s’engage afin de défendre les plus faibles.',
            'She gets involved to defend the weakest.',
          ],
          [
            'Il parle bas de peur qu’on ne l’entende.',
            'He speaks low for fear of being overheard.',
          ],
        ),
      ),
      section(
        'traps',
        'Frequent mistakes',
        mistake(
          'Watch out',
          '✗ Je viens pour que je t’aide.  ✓ Je viens pour t’aider.',
          '✗ Pour que tout le monde est d’accord.  ✓ Pour que tout le monde soit d’accord.',
        ),
        tip(
          'Cause or purpose?',
          'Parce que tells why something happened (a cause, indicative). Pour que tells what it is done for (a purpose, subjunctive).',
        ),
      ),
    ],
    related: ['fr-b22-conditional-past', 'fr-b22-consequence'],
    sources: [S.subordinateAdverbial, S.subjunctive],
  },
  {
    id: 'fr-b22-conditional-past',
    title: 'The conditionnel passé',
    tagline: 'J’aurais dû · il aurait démissionné',
    level: LEVEL,
    summary:
      'The conditionnel passé (aurais / serais + participle) expresses regret and reproach, the result of an unreal past condition, and reported news that is not confirmed.',
    sections: [
      section(
        'forms',
        'Forms and uses',
        table(
          'Three main uses.',
          ['Use', 'Example', 'Meaning'],
          [
            ['regret, reproach', 'J’aurais dû t’écouter.', 'I should have listened to you.'],
            [
              'unreal past result',
              'Si j’avais su, je serais venu.',
              'If I had known, I would have come.',
            ],
            [
              'unconfirmed news',
              'Le ministre aurait démissionné.',
              'The minister has reportedly resigned.',
            ],
          ],
        ),
        p(
          'It is built with the **conditionnel** of *avoir* or *être* plus the **past participle**: *j’aurais fait*, *elle serait partie*, *ils auraient été informés*. The same rules decide the auxiliary and the agreement as in the passé composé.',
        ),
      ),
      section(
        'press',
        'Press and prudence',
        p(
          'Journalists use the conditionnel passé to report **something not yet verified**: *Deux personnes auraient été blessées*. The present conditional does the same for present or future facts: *Le ministre démissionnerait*.',
        ),
        mistake(
          'Watch out',
          '✗ J’avais dû t’écouter (for a regret).  ✓ J’aurais dû t’écouter.',
          '✗ Si j’aurais su, je serais venu.  ✓ Si j’avais su, je serais venu.',
        ),
      ),
    ],
    related: ['fr-b22-si-clauses', 'fr-b22-purpose'],
    sources: [S.conditionalPast, S.conditional],
  },
  {
    id: 'fr-b22-time-relations',
    title: 'Time connectors',
    tagline: 'avant que · jusqu’à ce que · après que · dès que',
    level: LEVEL,
    summary:
      'Connectors of time decide the mood: avant que, jusqu’à ce que and en attendant que take the subjunctive; après que, dès que, pendant que, lorsque and au moment où take the indicative.',
    sections: [
      section(
        'moods',
        'Which mood?',
        table(
          'Time connectors by mood.',
          ['Mood', 'Connectors', 'Example'],
          [
            [
              'subjunctive',
              'avant que, jusqu’à ce que, en attendant que, d’ici à ce que',
              'Agissons avant qu’il ne soit trop tard.',
            ],
            [
              'indicative',
              'après que, dès que, aussitôt que, une fois que',
              'Dès qu’il arrivera, nous commencerons.',
            ],
            [
              'indicative',
              'pendant que, tandis que, lorsque, quand',
              'Pendant que tu dormais, il a neigé.',
            ],
            [
              'indicative',
              'au moment où, le jour où, chaque fois que',
              'Au moment où la loi a été votée, personne n’y croyait.',
            ],
          ],
        ),
        tip(
          'Après que',
          'Careful French uses the indicative after après que (après qu’ils sont partis). The subjunctive is often heard but is considered incorrect.',
        ),
      ),
      section(
        'same-subject',
        'Same subject: preposition + infinitive',
        p(
          'When both clauses share a subject, prefer **avant de + infinitive** (*Je lis avant de dormir*) and **après + past infinitive** (*Après avoir lu, je dors*). **Jusqu’à ce que** keeps its clause.',
        ),
        mistake(
          'Watch out',
          '✗ Avant qu’il vient.  ✓ Avant qu’il vienne.',
          '✗ Attends jusqu’il vienne.  ✓ Attends jusqu’à ce qu’il vienne.',
        ),
      ),
    ],
    related: ['fr-b22-futur-anterieur', 'fr-b22-subj-or-inf'],
    sources: [S.subordinateAdverbial, S.subjunctive],
  },
  {
    id: 'fr-b22-futur-anterieur',
    title: 'The futur antérieur',
    tagline: 'Dès que j’aurai fini · d’ici 2030 nous aurons réduit',
    level: LEVEL,
    summary:
      'The futur antérieur (future of avoir or être + participle) presents an action as completed before another future moment. It follows quand, dès que, lorsque, une fois que and après que when the main verb is in the future.',
    sections: [
      section(
        'form',
        'Form and use',
        table(
          'Futur antérieur.',
          ['Verb', 'Forms', 'Example'],
          [
            [
              'finir (avoir)',
              'j’aurai fini, tu auras fini …',
              'Quand j’aurai fini, je t’appellerai.',
            ],
            [
              'arriver (être)',
              'je serai arrivé(e), nous serons arrivé(e)s …',
              'Quand nous serons arrivés, nous mangerons.',
            ],
            [
              'se lever (être)',
              'je me serai levé(e) …',
              'Dès qu’elle se sera levée, elle partira.',
            ],
          ],
        ),
        p(
          'Use it after **quand, lorsque, dès que, aussitôt que, une fois que, après que** when the main clause is in the **future**: *Une fois que la loi sera votée, elle s’appliquera.* It also gives a **deadline**: *D’ici 2030, le pays aura réduit ses émissions.*',
        ),
      ),
      section(
        'probability',
        'A guess about the past',
        p(
          'The futur antérieur can express a **supposition about the past**: *Il n’est pas là ; il aura oublié.* (He is not here; he has probably forgotten.)',
        ),
        compare(
          { title: 'futur simple', question: 'the second action', example: 'Je t’appellerai.' },
          {
            title: 'futur antérieur',
            question: 'the first, completed action',
            example: 'Quand j’aurai fini…',
          },
        ),
        mistake(
          'Watch out',
          '✗ Quand j’aurai fini, je t’appelle (in a formal text).  ✓ Quand j’aurai fini, je t’appellerai.',
          '✗ Dès qu’il a fini, il partira.  ✓ Dès qu’il aura fini, il partira.',
        ),
      ),
    ],
    related: ['fr-b22-time-relations', 'fr-b22-conditional-past'],
    sources: [S.pluperfect, S.connector],
  },
  {
    id: 'fr-b22-articulators',
    title: 'Logical connectors',
    tagline: 'd’abord · en outre · en revanche · par conséquent',
    level: LEVEL,
    summary:
      'Connectors give an argument its structure: they order the steps, add a point, contrast, concede and conclude. Choosing them well is the difference between a list of ideas and a reasoned text.',
    sections: [
      section(
        'functions',
        'What each connector does',
        table(
          'Connectors by function.',
          ['Function', 'Connectors', 'Example'],
          [
            [
              'order',
              'd’abord, ensuite, enfin, en conclusion',
              'D’abord, il faut comprendre ; ensuite, on peut agir.',
            ],
            [
              'addition',
              'de plus, en outre, par ailleurs, de surcroît',
              'Ce choix est rentable ; en outre, il protège l’environnement.',
            ],
            [
              'contrast',
              'en revanche, toutefois, cependant, néanmoins, pourtant',
              'L’idée est séduisante ; toutefois, elle est difficile à appliquer.',
            ],
            [
              'concession',
              'certes … mais, il est vrai que … mais',
              'Certes, le coût est élevé, mais les bénéfices sont réels.',
            ],
            [
              'consequence',
              'donc, ainsi, par conséquent, c’est pourquoi',
              'Les données sont claires ; par conséquent, il faut agir.',
            ],
            ['new subject', 'quant à, en ce qui concerne', 'Quant à moi, je préfère attendre.'],
          ],
        ),
      ),
      section(
        'plan',
        'A simple plan',
        p(
          'A short argument follows: **thesis** → **argument 1** (*d’abord*) → **argument 2** (*en outre*) → **objection and reply** (*certes … mais*) → **conclusion** (*en conclusion*). Use each connector once; repeating *mais* or *donc* makes the text heavy.',
        ),
        mistake(
          'Watch out',
          '✗ Pourtant il est riche, donc il est heureux.  ✓ Pourtant il est riche, il n’est pas heureux.',
          '✗ Quand à moi, je préfère attendre.  ✓ Quant à moi, je préfère attendre.',
        ),
      ),
    ],
    related: ['fr-b22-register', 'fr-b22-concession'],
    sources: [S.connector],
  },
  {
    id: 'fr-b22-register',
    title: 'Register: familiar to formal',
    tagline: 'un bouquin · un livre · un ouvrage',
    level: LEVEL,
    summary:
      'French has three broad registers: familiar, standard and formal. They differ in vocabulary, in grammar (ne, inversion, tu / vous) and in set formulas, above all in formal letters and emails.',
    sections: [
      section(
        'words',
        'Vocabulary and grammar',
        table(
          'Three registers.',
          ['Familiar', 'Standard', 'Formal'],
          [
            ['un bouquin', 'un livre', 'un ouvrage'],
            ['du fric', 'de l’argent', 'des fonds'],
            ['bosser', 'travailler', 'œuvrer'],
            [
              'J’ai pas pu venir.',
              'Je n’ai pas pu venir.',
              'Je n’ai pu me rendre à votre invitation.',
            ],
            ['Tu peux m’aider ?', 'Pouvez-vous m’aider ?', 'Auriez-vous l’obligeance de m’aider ?'],
          ],
        ),
      ),
      section(
        'letters',
        'Formal letters and emails',
        examples(
          ['Je vous prie de bien vouloir m’excuser.', 'Please excuse me.'],
          ['Auriez-vous l’amabilité de m’indiquer…', 'Would you be so kind as to tell me…'],
          ['Veuillez agréer mes salutations distinguées.', 'Yours faithfully.'],
        ),
        tip(
          'Adapt, do not pile up',
          'Do not mix registers in one text: a formal letter keeps vous, ne and inversion from start to finish. In a message to a friend, formal formulas sound ironic.',
        ),
        mistake(
          'Watch out',
          '✗ Veuillez agréez mes salutations.  ✓ Veuillez agréer mes salutations.',
          '✗ Je vous prie de bien vouloir m’excusant.  ✓ Je vous prie de bien vouloir m’excuser.',
        ),
      ),
    ],
    related: ['fr-b22-articulators'],
    sources: [S.register, S.connector],
  },
];
