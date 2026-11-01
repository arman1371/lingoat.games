import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c2-2';

/** French C2.2: one full lesson per unit, added unit by unit. */
export const FRC22_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-c22-participe-present',
    title: 'Participe présent, gérondif or adjectif verbal?',
    tagline: 'Three forms in -ant, three jobs',
    level: LEVEL,
    summary:
      'The participe présent is a verb form: invariable, and it keeps its object. With en it becomes the gérondif, which says how or when and shares the subject of the main verb. The adjectif verbal is an adjective: it agrees, and a few verbs spell it differently.',
    sections: [
      section(
        'three-forms',
        'Three forms that look alike',
        p(
          'All three end in **-ant**, but they behave differently. The test is simple: does the word have an object or complement like a verb, or does it describe a noun like an adjective?',
        ),
        table(
          'The three -ant forms compared.',
          ['Form', 'Job', 'Agrees?', 'Example'],
          [
            [
              'participe présent',
              'verb: replaces “qui + verb” or gives a reason',
              'no',
              'Des visiteurs admirant la toile.',
            ],
            [
              'gérondif (en + -ant)',
              'adverb: how, when, why, even if',
              'no',
              'Elle a appris en copiant les maîtres.',
            ],
            [
              'adjectif verbal',
              'adjective: describes a noun, can follow être, accepts très',
              'yes',
              'Des couleurs très éclatantes.',
            ],
          ],
          0,
        ),
        p(
          'Form them all the same way: take the **nous** form of the present, drop **-ons** and add **-ant** (nous parlons → parlant). Three verbs are irregular: **être → étant**, **avoir → ayant**, **savoir → sachant**.',
        ),
        compare(
          {
            title: 'participe présent',
            question: 'Does it have an object and no agreement?',
            example: 'Une toile représentant un port.',
          },
          {
            title: 'adjectif verbal',
            question: 'Does it only describe the noun?',
            example: 'Une œuvre saisissante.',
          },
        ),
      ),
      section(
        'gerondif',
        'The gérondif: en + -ant',
        p(
          'The gérondif is an invariable adverbial phrase. It always has **the same subject as the main verb** and often says that two actions happen together, or how something is done: *En sortant, elle a salué le guide.* With **tout en** the two actions clash or go on in parallel: *Il admire l’artiste tout en critiquant son style.*',
        ),
        examples(
          [
            'En quittant la salle, elle a salué le conservateur.',
            'On leaving the room, she greeted the curator.',
          ],
          [
            'Il a trouvé son style en expérimentant sans cesse.',
            'He found his style by constantly experimenting.',
          ],
          ['Il restaure la fresque tout en chantant.', 'He restores the fresco while singing.'],
        ),
        mistake(
          'Watch out',
          '✗ J’ai vu des visiteurs en discutant devant la fresque.  ✓ J’ai vu des visiteurs discutant devant la fresque. (the visitors chat, not “I”)',
          '✗ Elle a quitté la salle en applaudissants.  ✓ Elle a quitté la salle en applaudissant.',
        ),
      ),
      section(
        'participe',
        'The participe présent in writing',
        p(
          'Without **en** the participle belongs to a noun or to the sentence: it replaces a relative clause (*des mécènes finançant la restauration*) or gives a reason (*N’ayant plus d’argent, il a vendu son atelier*). It is typical of written and formal French. The negation goes around it: **ne … pas** (*ne connaissant pas le peintre*) or n’ayant.',
        ),
        examples(
          ['Un guide parlant trois langues.', 'A guide who speaks three languages.'],
          [
            'Ne connaissant pas le peintre, je n’ai rien acheté.',
            'Not knowing the painter, I bought nothing.',
          ],
        ),
      ),
      section(
        'spelling',
        'Spelling: when participle and adjective differ',
        p(
          'For a few verbs the adjectif verbal is spelled differently from the participe présent, even though both sound the same. Learn the pairs by their ending.',
        ),
        table(
          'Participe présent and adjectif verbal spelled differently.',
          ['Ending', 'Participe présent', 'Adjectif verbal'],
          [
            ['-guant / -gant', 'naviguant, fatiguant', 'navigant, fatigant'],
            ['-quant / -cant', 'convainquant, provoquant', 'convaincant, provocant'],
            ['-ant / -ent', 'précédant, différant', 'précédent, différent'],
            ['-geant / -gent', 'négligeant, exigeant', 'négligent, exigent'],
          ],
        ),
        tip(
          'A quick check',
          'If you can put très before the word or use it after être, it is an adjective and it agrees: *Cette visite est très fatigante.*',
        ),
      ),
    ],
    related: ['fr-adjectives'],
    sources: [S.participle, S.gerund, S.adjectifVerbal, S.fatigant],
  },
  {
    id: 'fr-c22-accord-participe',
    title: 'Agreeing the past participle',
    tagline: 'When does the participle take -e or -s?',
    level: LEVEL,
    summary:
      'With être the participle agrees with the subject. With avoir it agrees only with a direct object placed before it. Reflexive verbs agree with se when se is the direct object. Some cases stay invariable: faire + infinitive, en for a quantity, and verbs of price or duration.',
    sections: [
      section(
        'basics',
        'être and avoir',
        table(
          'Agreement of the past participle.',
          ['Auxiliary', 'Agrees with', 'Example'],
          [
            ['être', 'the subject', 'Elle est partie après le dernier acte.'],
            ['avoir, object after', 'nothing', 'Elle a lu ces pièces.'],
            ['avoir, object before', 'the object', 'Les pièces que j’ai vues étaient superbes.'],
          ],
          2,
        ),
        p(
          'The direct object can come before the verb as **que**, as a pronoun (**le, la, l’, les**) or in a question (*Quelles pièces avez-vous vues ?*). Ask yourself: *what did I see?* If the answer stands in front of the participle, agree it.',
        ),
      ),
      section(
        'reflexive',
        'Reflexive verbs',
        p(
          'In *elle s’est levée*, **se** is the direct object (she raised herself), so the participle agrees. In *elle s’est lavé les mains* the direct object is **les mains**, which follows, so there is no agreement. Verbs that take **à** (*se parler, se téléphoner, s’écrire, se plaire*) have an indirect **se**: the participle never agrees.',
        ),
        table(
          'Reflexive verbs and agreement.',
          ['Type', 'Example', 'Agreement'],
          [
            ['se = direct object', 'Elle s’est cachée.', 'yes'],
            ['direct object after', 'Elles se sont lavé les mains.', 'no'],
            ['se = indirect (à)', 'Elles se sont parlé.', 'no'],
            ['direct object before', 'Les lettres qu’elles se sont écrites.', 'yes'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Elles se sont lavées les mains.  ✓ Elles se sont lavé les mains.',
          '✗ Ils se sont parlés.  ✓ Ils se sont parlé.',
        ),
      ),
      section(
        'invariable',
        'Cases that stay invariable',
        p(
          '**Faire + infinitive** never agrees. After **devoir, pouvoir, vouloir** the participle stays invariable because the object belongs to the infinitive. With **en** standing for a quantity there is no agreement. A price or a duration is an amount, not an object: *les quarante euros que ce roman m’a coûté*.',
        ),
        examples(
          ['La pièce que le metteur en scène a fait jouer.', 'The play the director had staged.'],
          ['Voici les répliques qu’elle a dû apprendre.', 'Here are the lines she had to learn.'],
          ['Des romans, j’en ai lu beaucoup.', 'Novels, I have read many.'],
        ),
        tip(
          'With an infinitive',
          'After voir, entendre or laisser, agree only if the object does the action of the infinitive: *la comédienne que j’ai vue jouer* (she acts), but *les répliques qu’il a entendu chuchoter* (the lines are whispered).',
        ),
      ),
    ],
    related: ['fr-c22-participe-present'],
    sources: [S.pastParticipleAgreement],
  },
  {
    id: 'fr-c22-passif',
    title: 'The passive and its alternatives',
    tagline: 'Who does what, and who do we leave out?',
    level: LEVEL,
    summary:
      'The passive is être + past participle, and the participle agrees with the subject. The agent comes after par (or de). French often prefers on + active verb, a pronominal verb (se vendre) or se faire + infinitive.',
    sections: [
      section(
        'form',
        'Building the passive',
        p(
          'Only verbs with a direct object have a passive. The object becomes the subject, **être** takes the tense of the active verb, and the participle agrees with the new subject.',
        ),
        table(
          'Active and passive in several tenses.',
          ['Tense', 'Active', 'Passive'],
          [
            ['présent', 'Le jury prime le film.', 'Le film est primé par le jury.'],
            ['passé composé', 'Le jury a primé le film.', 'Le film a été primé par le jury.'],
            [
              'futur',
              'Un critique présentera les films.',
              'Les films seront présentés par un critique.',
            ],
            ['imparfait', 'On doublait les films.', 'Les films étaient doublés.'],
          ],
          1,
        ),
        p(
          'The agent is introduced by **par** for a concrete action (*primé par un jury*) and by **de** with feelings or description (*aimé de tous, couvert de gloire*). It is often left out: *Le voleur a été arrêté.*',
        ),
      ),
      section(
        'alternatives',
        'Avoiding the passive',
        p(
          'French uses the passive less than English. Four common alternatives keep the agent out of sight or put the focus where you want it.',
        ),
        table(
          'Ways to avoid the passive.',
          ['Way', 'Example', 'Use'],
          [
            ['on + active verb', 'On a projeté trois courts-métrages.', 'unnamed, general agent'],
            ['pronominal passive', 'Les billets se vendent vite.', 'a general fact about things'],
            [
              'se faire + infinitive',
              'Il s’est fait applaudir.',
              'a person who undergoes something',
            ],
            [
              'impersonal passive',
              'Il a été décidé de prolonger le festival.',
              'formal, administrative',
            ],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Le film a été tournée à Marseille.  ✓ Le film a été tourné à Marseille.',
          '✗ Il s’est fait applaudi.  ✓ Il s’est fait applaudir. (the infinitive follows, and faire does not agree)',
        ),
        tip(
          'se voir + infinitive',
          'Se voir is used for something received: *Le film se voit décerner un prix.* It is formal and fits news writing.',
        ),
      ),
    ],
    related: ['fr-c22-accord-participe'],
    sources: [S.passive],
  },
  {
    id: 'fr-c22-relatives',
    title: 'dont, lequel, ce dont',
    tagline: 'Joining sentences with the right relative pronoun',
    level: LEVEL,
    summary:
      'Dont replaces de + a noun. After every other preposition a thing takes lequel, laquelle, lesquels or lesquelles, which merge with à and de (auquel, duquel). Ce dont, ce que and ce qui stand for “what”, and où covers place and time.',
    sections: [
      section(
        'dont',
        'dont: replacing de + noun',
        p(
          'Many verbs, adjectives and nouns take **de**: *parler de, avoir besoin de, rêver de, hériter de*. When the noun after de becomes a relative, use **dont**: *La cathédrale dont nous parlons.* Dont also means “whose”, with the article in front of the noun: *L’historien dont le livre a reçu un prix.*',
        ),
        examples(
          ['Le château dont il a hérité est classé.', 'The castle he inherited is listed.'],
          ['Les archives dont j’ai besoin sont fermées.', 'The archives I need are closed.'],
          [
            'Les remparts, dont la construction date du XVIIe siècle.',
            'The ramparts, whose construction dates from the 17th century.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Le château que je rêve.  ✓ Le château dont je rêve.',
          '✗ La rue au bout dont se trouve le beffroi.  ✓ La rue au bout de laquelle se trouve le beffroi.',
        ),
      ),
      section(
        'lequel',
        'Preposition + lequel',
        p(
          'After a preposition (**dans, pendant, sur, derrière, avec** …) a thing is introduced by **lequel**, which agrees with the noun. With **à** and **de** it merges. For people, **qui** is also possible after a preposition.',
        ),
        table(
          'lequel and its contractions.',
          ['Form', 'masc. sing.', 'fem. sing.', 'masc. plural', 'fem. plural'],
          [
            ['lequel', 'lequel', 'laquelle', 'lesquels', 'lesquelles'],
            ['à + lequel', 'auquel', 'à laquelle', 'auxquels', 'auxquelles'],
            ['de + lequel', 'duquel', 'de laquelle', 'desquels', 'desquelles'],
          ],
        ),
        p(
          'Use the **de + lequel** forms when dont is not possible: after a noun with its own preposition (*au pied desquels, au bout de laquelle*).',
        ),
      ),
      section(
        'ce-ou',
        'ce dont, ce que, ce qui and où',
        p(
          'When there is no noun in front, **ce** is added: **ce qui** (subject), **ce que** (direct object) and **ce dont** (de): *Je sais ce dont tu rêves.* **Où** replaces a place or a time: *la ville où je suis né, l’année où le beffroi a brûlé.*',
        ),
        compare(
          {
            title: 'ce qui',
            question: 'Is it the subject?',
            example: 'Ce qui m’étonne, c’est le métissage.',
          },
          {
            title: 'ce que',
            question: 'Is it the direct object?',
            example: 'Je ne comprends pas ce que vous cherchez.',
          },
          {
            title: 'ce dont',
            question: 'Does the verb take de?',
            example: 'C’est exactement ce dont nous avons besoin.',
          },
        ),
        tip(
          'Quick test',
          'Look at the verb in the relative clause: is the thing its subject (qui), its object (que), or linked by de (dont) or another preposition (lequel)?',
        ),
      ),
    ],
    related: ['fr-c22-accord-participe'],
    sources: [S.relativePronoun, S.dont, S.lequel],
  },
  {
    id: 'fr-c22-negation',
    title: 'ne … que, ni … ni, ne alone',
    tagline: 'The finer points of French negation',
    level: LEVEL,
    summary:
      'Beyond ne … pas: ne … que means “only”, ni … ni means “neither … nor”, personne, rien and aucun can be subjects, and formal French can use ne alone or add an explétif ne that is not a negation.',
    sections: [
      section(
        'que-ni',
        'ne … que and ni … ni',
        p(
          '**Ne … que** is not a real negation: it means “only” and keeps the article. **Ni … ni** links two negated items and, with a verb, needs **ne** but no **pas**: *Elle n’a ni témoin ni preuve.* Un, une and des are usually dropped after ni.',
        ),
        examples(
          ['Il n’a que des preuves indirectes.', 'He has only circumstantial evidence.'],
          ['Elle n’a ni témoin ni preuve.', 'She has neither a witness nor proof.'],
          ['Il n’a ni nié ni avoué.', 'He neither denied nor confessed.'],
        ),
        mistake(
          'Watch out',
          '✗ Il n’a pas que des preuves.  ✓ Il n’a que des preuves.',
          '✗ Elle n’a pas ni témoin ni preuve.  ✓ Elle n’a ni témoin ni preuve.',
        ),
      ),
      section(
        'pronoms',
        'personne, rien, aucun and pas de',
        p(
          '**Personne**, **rien** and **aucun** can be the subject; they come first and **ne** stays before the verb, without pas: *Personne n’a parlé. Rien ne prouve cette version.* After a negation **un, une, des** become **de** (**d’** before a vowel): *Je n’ai pas de preuve.*',
        ),
        table(
          'Negative words and where they go.',
          ['Word', 'As subject', 'As object'],
          [
            ['personne', 'Personne ne parle.', 'Je ne vois personne.'],
            ['rien', 'Rien ne prouve cela.', 'Il ne dit rien.'],
            ['aucun(e)', 'Aucun témoin n’a parlé.', 'Je n’ai aucune preuve.'],
          ],
        ),
      ),
      section(
        'ne-seul',
        'ne alone and the ne explétif',
        p(
          'In formal or literary French, **ne** can stand alone with a few verbs: *je ne puis, je ne sais, il ne cesse de, elle n’ose.* Do not confuse this with the **ne explétif**, which adds no negative meaning: *Elle est plus habile qu’on ne le pensait. Je crains qu’il ne vienne.*',
        ),
        compare(
          {
            title: 'ne … pas',
            question: 'Does the sentence deny something?',
            example: 'Il n’a pas avoué.',
          },
          {
            title: 'ne seul',
            question: 'Formal verb with a negative meaning?',
            example: 'Il ne cesse de protester.',
          },
          {
            title: 'ne explétif',
            question: 'After a comparative or craindre?',
            example: 'Plus grave que je ne pensais.',
          },
        ),
        tip(
          'Quick test',
          'If you can remove the ne without changing the meaning, it is an explétif ne, not a negation.',
        ),
      ),
    ],
    related: ['fr-c22-relatives'],
    sources: [S.negation],
  },
  {
    id: 'fr-c22-modalisation',
    title: 'Reserve: conditional and distance markers',
    tagline: 'Reporting news without vouching for it',
    level: LEVEL,
    summary:
      'The conditional of reserve (conditionnel journalistique) presents a piece of information as unconfirmed. Source and distance markers (selon, d’après, soi-disant, prétendument, il semblerait que) work in the same direction. A confirmed fact stays in the indicative.',
    sections: [
      section(
        'conditionnel',
        'The conditional of reserve',
        p(
          'The press uses the conditional to report information it cannot guarantee: *Le ministre aurait démissionné.* The speaker does not take responsibility for the claim. Linguists give the value several names (conditionnel journalistique, d’emprunt, de rumeur) and disagree on how to analyse it; for learners the effect is what matters: **doubt or distance**.',
        ),
        table(
          'Same news, two degrees of certainty.',
          ['Confirmed (indicative)', 'Unconfirmed (conditional)'],
          [
            ['Le ministre a démissionné.', 'Le ministre aurait démissionné.'],
            ['Il y a dix blessés.', 'Il y aurait dix blessés.'],
            ['L’accord est signé.', 'L’accord serait signé.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Si vous auriez le temps…  ✓ Si vous aviez le temps…',
          'The conditional of reserve is for reports. It never follows si in a condition.',
        ),
      ),
      section(
        'distance',
        'Naming the source and marking doubt',
        p(
          'A named source can be added with **selon**, **d’après** or **à en croire**: *Selon la police, le suspect serait en fuite.* Adverbs and adjectives mark the speaker’s distance: **soi-disant**, **prétendument**, **prétendu**, **apparemment**. The expression **il semblerait que** is cautious and is followed by the subjunctive: *Il semblerait que le chiffre soit exagéré.*',
        ),
        examples(
          ['Selon un témoin, il était seul.', 'According to a witness, he was alone.'],
          ['Cette soi-disant exclusivité était fausse.', 'This so-called exclusive was false.'],
          ['Il semblerait que le journal ait menti.', 'It seems that the paper lied.'],
        ),
      ),
      section(
        'choisir',
        'Choosing the right degree',
        p(
          'Before writing, ask how sure you are: if an official source confirmed the fact, use the indicative; if you only have a rumour or a single source, use the conditional or a distance marker.',
        ),
        compare(
          {
            title: 'Indicative',
            question: 'Is the fact confirmed?',
            example: 'L’Élysée a confirmé la démission.',
          },
          {
            title: 'Conditional',
            question: 'Is it only reported?',
            example: 'Le ministre aurait démissionné.',
          },
          {
            title: 'Distance marker',
            question: 'Do you doubt the claim?',
            example: 'Le prétendu scandale n’existe pas.',
          },
        ),
        tip(
          'Quick test',
          'Add “paraît-il” in your head: if the sentence still sounds right, the conditional of reserve fits.',
        ),
      ),
    ],
    related: ['fr-c22-passif'],
    sources: [S.conditional],
  },
  {
    id: 'fr-c22-infinitif',
    title: 'The infinitive: past, negative, after prepositions',
    tagline: 'Saying what comes before, after and without',
    level: LEVEL,
    summary:
      'The past infinitive (avoir or être + participle) shows an action that is completed before another one, and après always takes it. Avant de, pour, sans, afin de and de peur de take an infinitive when both verbs share a subject. In the negative infinitive ne and pas stay together.',
    sections: [
      section(
        'passe',
        'The past infinitive',
        p(
          'It is built with **avoir** or **être** in the infinitive and the past participle, with the same choice of auxiliary and the same agreement as in the passé composé. It shows an action completed before another one. After **après** it is always used: *Après avoir signé la pétition, ils sont allés à la mairie.* With être the participle agrees with the subject: *Après être arrivés…*',
        ),
        table(
          'Present and past infinitive.',
          ['Infinitive', 'Present', 'Past'],
          [
            ['signer', 'signer', 'avoir signé'],
            ['arriver', 'arriver', 'être arrivé(e)(s)'],
            ['se lever', 'se lever', 's’être levé(e)(s)'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Après signer la pétition…  ✓ Après avoir signé la pétition…',
          '✗ Après avoir rentrés…  ✓ Après être rentrés…',
        ),
      ),
      section(
        'prepositions',
        'avant de, pour, sans, de peur de',
        p(
          'These prepositions take an infinitive when the two verbs have the **same subject**: *Avant de voter, lisez le programme. Ils se sont tus de peur d’être remarqués.* With a different subject, use a conjunction: *avant que, de peur que* (subjunctive). **Sans** and **pour** can also take the past infinitive: *sans avoir prévenu personne.*',
        ),
        examples(
          ['Avant de décider, il faut consulter.', 'Before deciding, you must consult.'],
          ['Elle est partie sans avoir prévenu personne.', 'She left without telling anyone.'],
          ['Il se tait de peur de se tromper.', 'He keeps quiet for fear of being wrong.'],
        ),
      ),
      section(
        'negatif',
        'The negative infinitive',
        p(
          'Put **ne pas** (or *ne plus, ne jamais, ne rien*) together before the infinitive. In the past infinitive they stand before the auxiliary: *Je regrette de ne pas avoir signé.* The object pronoun comes between pas and the verb: *de ne pas l’avoir fait.*',
        ),
        compare(
          {
            title: 'Present',
            question: 'Same time as the main verb?',
            example: 'Pour ne pas perdre de temps…',
          },
          {
            title: 'Past',
            question: 'Done before the main verb?',
            example: 'Je regrette de ne pas avoir signé.',
          },
          {
            title: 'Other subject',
            question: 'Two different subjects?',
            example: 'Avant que vous ne signiez…',
          },
        ),
        tip(
          'Quick test',
          'Ask who does both actions. If it is the same person, an infinitive works; if not, use que and the subjunctive.',
        ),
      ),
    ],
    related: ['fr-c22-accord-participe'],
    sources: [S.infinitivePast],
  },
  {
    id: 'fr-c22-accord-quantite',
    title: 'Agreement with quantifiers and tout',
    tagline: 'Which verb after la plupart, un grand nombre, plus d’un?',
    level: LEVEL,
    summary:
      'After a quantifier the verb usually agrees with the noun that follows: plural after la plupart des, bon nombre de and un grand nombre de, singular after la plupart du. Plus d’un takes a singular verb, collectives such as une foule de allow both, and tout agrees or stays invariable depending on its role.',
    sections: [
      section(
        'plupart',
        'la plupart, bon nombre, un grand nombre',
        p(
          'With **la plupart de** the verb agrees with the noun after *de*: *La plupart des espèces sont menacées* (plural), *La plupart du personnel a fait grève* (singular). Used alone, **la plupart** takes a plural verb: *La plupart n’iront pas en vacances.* **Bon nombre de** and **un grand nombre de** + plural noun also take a plural verb.',
        ),
        examples(
          ['La plupart des habitants sont favorables.', 'Most inhabitants are in favour.'],
          ['La plupart du pays est en alerte.', 'Most of the country is on alert.'],
          ['Bon nombre de communes ont réagi.', 'Many towns have reacted.'],
        ),
        mistake(
          'Watch out',
          '✗ La plupart des espèces est menacée.  ✓ La plupart des espèces sont menacées.',
          '✗ La plupart d’espèces…  ✓ La plupart des espèces…',
        ),
      ),
      section(
        'collectifs',
        'plus d’un and collective nouns',
        p(
          '**Plus d’un** is followed by a singular noun and a singular verb: *Plus d’un maire a protesté.* A **collective noun** alone takes a singular verb (*La foule est unanime*). When a plural noun follows, the verb may be singular or plural: *Une foule de militants a / ont bloqué la route.* Both agreements are found, so treat them as the writer’s choice.',
        ),
        table(
          'Quantifier and verb.',
          ['Subject', 'Verb', 'Example'],
          [
            ['la plupart des + plural', 'plural', 'La plupart des espèces sont menacées.'],
            ['la plupart du + singular', 'singular', 'La plupart du pays est en alerte.'],
            ['plus d’un + singular', 'singular', 'Plus d’un maire a protesté.'],
            [
              'une foule de + plural',
              'singular or plural',
              'Une foule de militants a / ont bloqué la route.',
            ],
          ],
        ),
      ),
      section(
        'tout',
        'tout: adjective, pronoun, adverb',
        p(
          'As an **adjective** tout agrees with the noun (*tout le monde, toute la ville, tous les jours, toutes les îles*). As an **adverb** meaning “completely” it stays invariable before a masculine adjective (*tout petit*) but agrees before a feminine adjective that starts with a consonant (*toutes petites*). Before a feminine adjective starting with a vowel, practice varies: the traditional rule keeps *tout*, yet most people now write *toute* everywhere.',
        ),
        compare(
          {
            title: 'adjective',
            question: 'Does it stand before a noun?',
            example: 'Tous les glaciers fondent.',
          },
          {
            title: 'adverb, masculine',
            question: 'Does it stand before a masculine adjective?',
            example: 'Ils sont tout petits.',
          },
          {
            title: 'adverb, feminine',
            question: 'Before a feminine adjective with a consonant?',
            example: 'Elles sont toutes petites.',
          },
        ),
        tip(
          'Quick test',
          'Replace tout by “complètement”. If that works, it is an adverb: it varies only before a feminine adjective that begins with a consonant.',
        ),
      ),
    ],
    related: ['fr-c22-accord-participe'],
    sources: [S.plupart, S.agreement, S.tout],
  },
  {
    id: 'fr-c22-figures',
    title: 'Figures of style',
    tagline: 'Naming the images, contrasts and exaggerations in a text',
    level: LEVEL,
    summary:
      'Figures of style are ways of saying something that go beyond the plain meaning. A métaphore replaces a thing by another without a comparison word, a comparaison uses comme, a litote says less, an hyperbole says more, and an oxymore joins two contradictory words.',
    sections: [
      section(
        'images',
        'Images: métaphore and comparaison',
        p(
          'Both put two things side by side. In a **comparaison** a word links them (**comme**, **tel**, **semblable à**): *La musique souvent me prend comme une mer* (Baudelaire). In a **métaphore** there is no such word: *Son rire de pluie fraîche* (Gracq), *Cette ville est une jungle.* Related figures are the **personnification** (human traits given to a thing) and the **périphrase** (a descriptive expression for a word: *le Roi des Astres* for the sun).',
        ),
        examples(
          ['Il est fort comme un lion.', 'He is as strong as a lion. (comparaison)'],
          ['Cette ville est une jungle.', 'This city is a jungle. (métaphore)'],
          ['Leurs bras désespérés.', 'Their despairing arms. (personnification of trees)'],
        ),
      ),
      section(
        'intensite',
        'More, less, softer: hyperbole, litote, euphémisme',
        p(
          'An **hyperbole** exaggerates on purpose: *J’ai attendu une éternité.* A **litote** says less to suggest more, often by denying the opposite: *Va, je ne te hais point* (Corneille). An **euphémisme** softens a harsh idea: *Il nous a quittés.* Ask yourself whether the speaker amplifies, understates by negation, or avoids a hard word.',
        ),
        compare(
          {
            title: 'hyperbole',
            question: 'Does it say much more than the facts?',
            example: 'Je meurs de faim.',
          },
          {
            title: 'litote',
            question: 'Does it deny the opposite to affirm?',
            example: 'Ce n’est pas mal du tout.',
          },
          {
            title: 'euphémisme',
            question: 'Does it soften a hard word?',
            example: 'Il nous a quittés.',
          },
        ),
      ),
      section(
        'contrastes',
        'Contrast and substitution',
        p(
          'An **antithèse** puts opposed ideas in a parallel structure: *Je vis, je meurs ; je me brûle et me noie* (Labé). An **oxymore** puts two contradictory words in one phrase: *Éphémère immortel* (Valéry). A **métonymie** replaces a word by a logically linked one (container for content, author for work, place for people: *Bruxelles chantait*); the **synecdoque** is a kind of métonymie where a part stands for the whole (*Mon bras…* for the person). An **anaphore** repeats a word at the beginning of parallel clauses.',
        ),
        tip(
          'Quick test',
          'One word standing for another? Think métonymie. Two opposites inside one phrase? Oxymore. Two opposites in parallel clauses? Antithèse.',
        ),
      ),
    ],
    related: ['fr-c22-participe-present'],
    sources: [S.figures, S.proverb],
  },
];
