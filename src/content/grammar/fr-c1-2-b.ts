import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c1-2';

/** French C1.2, units 2 to 6: family, ageing, health, solidarity, sport. */
export const FRC12_TOPICS_B: GrammarTopic[] = [
  {
    id: 'fr-c12-registres',
    title: 'Registres de langue',
    tagline: 'Same idea, different words for different people',
    level: LEVEL,
    summary:
      'French has several registers: populaire and familier for friends, courant for everyday situations, soutenu for formal or written French. Choose by the person you speak to and the medium.',
    sections: [
      section(
        'registers',
        'The registers',
        table(
          'One idea, three registers.',
          ['Familier', 'Courant', 'Soutenu'],
          [
            ['une bagnole', 'une voiture', 'une automobile'],
            ['bouffer', 'manger', 'se restaurer'],
            ['le boulot', 'le travail', 'le labeur'],
            ['un bouquin', 'un livre', 'un ouvrage'],
            ['J’en sais rien.', 'Je ne sais pas.', 'Je ne saurais vous le dire.'],
            ['T’as vu ça ?', 'Tu as vu ça ?', 'Avez-vous vu cela ?'],
          ],
        ),
        p(
          'Between the familier and the courant, speech often drops **ne** (*je sais pas*), uses **on** for *nous* and shortens words. Formal and written French keeps **ne**, uses inversion and prefers precise, rarer words.',
        ),
      ),
      section(
        'choose',
        'Choosing the right one',
        compare(
          {
            title: 'Familier',
            question: 'Friends, family, SMS?',
            example: 'Tu viens bouffer ce soir ?',
          },
          {
            title: 'Courant',
            question: 'Colleagues, shops, most situations?',
            example: 'Vous venez dîner ce soir ?',
          },
          {
            title: 'Soutenu',
            question: 'Letters, speeches, official texts?',
            example: 'Seriez-vous des nôtres pour le dîner ?',
          },
        ),
        tip(
          'Safe choice',
          'When in doubt use the courant register. Slang can offend in a formal setting, and very formal French sounds stiff among friends.',
        ),
        mistake(
          'Watch out',
          '✗ Je vous prie d’excuser mon gamin, il était crevé. (mixed registers in one letter)',
          '✓ Je vous prie de bien vouloir excuser l’absence de mon fils, qui était souffrant.',
        ),
      ),
    ],
    related: ['fr-c12-questions', 'fr-tu-vous'],
    sources: [S.registre],
  },
  {
    id: 'fr-c12-questions',
    title: 'Asking questions (3 ways)',
    tagline: 'Intonation, est-ce que or inversion',
    level: LEVEL,
    summary:
      'Casual: raise your voice (Tu viens ?). Neutral: est-ce que + normal order. Formal: invert verb and pronoun (Viens-tu ?). Add -t- after a vowel (A-t-elle appelé ?).',
    sections: [
      section(
        'three',
        'The three forms',
        table(
          'The same question in three registers.',
          ['Intonation', 'Est-ce que', 'Inversion'],
          [
            ['Tu viens ?', 'Est-ce que tu viens ?', 'Viens-tu ?'],
            [
              'Vous avez des enfants ?',
              'Est-ce que vous avez des enfants ?',
              'Avez-vous des enfants ?',
            ],
            ['Tu habites où ?', 'Où est-ce que tu habites ?', 'Où habites-tu ?'],
          ],
        ),
        p(
          'The first form is spoken, the third is written or formal. The question word can come last in casual speech (*Tu habites où ?*) but comes first with **est-ce que** and with inversion.',
        ),
      ),
      section(
        'inversion',
        'Inversion in detail',
        p(
          'Put the pronoun after the verb and join them with a hyphen: *Parlez-vous français ?* If the verb ends in a vowel and the pronoun is il, elle or on, add **-t-**: *A-t-elle appelé ? Parle-t-on français ici ?* With a noun subject keep the noun and add the matching pronoun: *Tes parents sont-ils venus ?*',
        ),
        examples(
          ['Où habitent tes grands-parents ?', 'Where do your grandparents live?'],
          ['Pourquoi est-ce qu’il est parti ?', 'Why did he leave?'],
          ['Les enfants sont-ils d’accord ?', 'Do the children agree?'],
        ),
        mistake(
          'Watch out',
          '✗ Est-ce que tu viens-tu ?  ✓ Est-ce que tu viens ? (do not combine two forms)',
          '✗ Elle a-t-elle appelé ?  ✓ A-t-elle appelé ?',
        ),
      ),
    ],
    related: ['fr-c12-registres', 'fr-questions'],
    sources: [S.interrogative, S.registre],
  },
  {
    id: 'fr-c12-reprise-pronominale',
    title: 'Avoiding repetition with pronouns',
    tagline: 'Il, lui, en, y, l’un … l’autre, cela',
    level: LEVEL,
    summary:
      'A text picks up an earlier word with a pronoun: il, elle, le, lui, leur, en, y, l’un … l’autre, cela. Each pronoun must point to one clear antecedent.',
    sections: [
      section(
        'pronouns',
        'Which pronoun takes up what?',
        table(
          'The most useful pronouns of reprise.',
          ['Earlier element', 'Pronoun', 'Example'],
          [
            [
              'a person or thing, subject',
              'il, elle, ils, elles',
              'Marie a 80 ans. Elle vit seule.',
            ],
            ['direct object', 'le, la, les', 'Ses voisins l’aident.'],
            ['à + person', 'lui, leur', 'Je lui rends visite.'],
            ['de + noun, or a quantity', 'en', 'Des EHPAD, il y en a peu.'],
            ['à, dans, en + place or thing', 'y', 'Elle vit à la campagne et y est heureuse.'],
            ['two people or things', 'l’un … l’autre', 'L’un est médecin, l’autre maire.'],
            ['a whole idea', 'cela, ça', 'Les seniors voyagent. Cela change le tourisme.'],
          ],
        ),
      ),
      section(
        'clarity',
        'Keeping it clear',
        p(
          'Use a pronoun when there is **one** obvious antecedent close by. If two nouns of the same gender and number could be meant, repeat the noun or use ce dernier (the last one mentioned) or celui-ci / celle-ci.',
        ),
        examples(
          [
            'Le directeur a reçu l’employé ; ce dernier était inquiet.',
            'The manager received the employee; the latter was worried.',
          ],
          [
            'J’ai deux oncles : l’un vit à Lyon, l’autre à Nice.',
            'I have two uncles: one lives in Lyon, the other in Nice.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je l’ai parlé hier.  ✓ Je lui ai parlé hier. (parler à quelqu’un → lui)',
          '✗ Des places, il y les a peu.  ✓ Des places, il y en a peu.',
        ),
      ),
    ],
    related: ['fr-c12-reprise-nominale'],
    sources: [S.anaphore],
  },
  {
    id: 'fr-c12-reprise-nominale',
    title: 'Avoiding repetition with noun phrases',
    tagline: 'Ce phénomène, cette dame, l’auteur des Misérables',
    level: LEVEL,
    summary:
      'A noun phrase can pick up an earlier word: ce, cet, cette or ces + a noun, a synonym, a more general word, a description, or a noun that sums up the previous idea.',
    sections: [
      section(
        'ways',
        'Ways to pick up a noun',
        table(
          'Types of reprise nominale.',
          ['Type', 'Example'],
          [
            [
              'same noun + demonstrative',
              'Un vieil arbre domine la place. Cet arbre a trois cents ans.',
            ],
            ['synonym', 'Les seniors … ces retraités'],
            ['more general word', 'Le chêne … l’arbre'],
            ['description', 'Victor Hugo … l’auteur des Misérables'],
            ['noun that sums up an idea', 'Le papy-boom commence. Ce phénomène coûtera cher.'],
          ],
        ),
        p(
          'The demonstrative must agree: **ce** (masculine), **cet** (masculine before a vowel), **cette** (feminine), **ces** (plural).',
        ),
      ),
      section(
        'why',
        'Why use them?',
        p(
          'Pronouns avoid repetition; noun phrases avoid repetition **and** add information or a point of view: *cette cohabitation*, *ce vieillissement de la population*. They give a written text its cohesion and are typical of essays and articles.',
        ),
        compare(
          {
            title: 'Pronoun',
            question: 'The antecedent is close and clear',
            example: 'L’État finance les retraites. Il doit trouver de nouvelles ressources.',
          },
          {
            title: 'Noun phrase',
            question: 'You want to name, sum up or comment',
            example: 'Le vieillissement s’accélère. Ce phénomène pose un défi économique.',
          },
        ),
        tip(
          'Style',
          'In a long text vary the substitutes: repeating the same demonstrative phrase (ce phénomène … ce phénomène) sounds heavy.',
        ),
      ),
    ],
    related: ['fr-c12-reprise-pronominale', 'fr-demonstratives'],
    sources: [S.anaphore],
  },
  {
    id: 'fr-c12-recit-passe',
    title: 'Imparfait, passé composé, plus-que-parfait',
    tagline: 'Background, event, and what came before',
    level: LEVEL,
    summary:
      'Use the imparfait for the setting, the passé composé for events that move the story on, and the plus-que-parfait for what had already happened.',
    sections: [
      section(
        'roles',
        'Three tenses, three jobs',
        table(
          'What each tense does in a story.',
          ['Tense', 'Job', 'Example'],
          [
            [
              'imparfait',
              'background, states, habits',
              'Il pleuvait. Le patient souffrait depuis longtemps.',
            ],
            [
              'passé composé',
              'events, one after another',
              'Le médecin est arrivé et a posé le diagnostic.',
            ],
            ['plus-que-parfait', 'before the main past moment', 'Il avait oublié son ordonnance.'],
          ],
          2,
        ),
        p(
          'The **plus-que-parfait** is the imparfait of **avoir** or **être** plus the past participle: *j’avais pris, elle était tombée, nous étions partis*. Verbs that take être in the passé composé take it here too.',
        ),
      ),
      section(
        'together',
        'Telling a story',
        examples(
          [
            'Quand je suis arrivé aux urgences, il y avait beaucoup de monde.',
            'When I got to the ER, there were lots of people.',
          ],
          [
            'Elle s’était cassé la jambe, alors elle est allée à l’hôpital.',
            'She had broken her leg, so she went to hospital.',
          ],
        ),
        compare(
          {
            title: 'Imparfait',
            question: 'What was going on?',
            example: 'Il dormait quand le médecin est arrivé.',
          },
          {
            title: 'Passé composé',
            question: 'What happened?',
            example: 'Le médecin est arrivé à midi.',
          },
          {
            title: 'Plus-que-parfait',
            question: 'What had already happened?',
            example: 'Il avait déjà pris un cachet.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Quand j’arrivais, il y a eu beaucoup de monde.  ✓ Quand je suis arrivé, il y avait beaucoup de monde.',
          '✗ Je suis allé parce que je me suis cassé la jambe.  ✓ Je suis allé à l’hôpital parce que je m’étais cassé la jambe.',
        ),
      ),
    ],
    related: ['fr-c12-passe-simple'],
    sources: [S.imparfait, S.plusQueParfait],
  },
  {
    id: 'fr-c12-passe-simple',
    title: 'The passé simple',
    tagline: 'The tense of written narration',
    level: LEVEL,
    summary:
      'The passé simple tells finished events in writing, mostly in the third person. Learn to recognise it: -a and -èrent, -it and -irent, -ut and -urent, plus irregular stems.',
    sections: [
      section(
        'forms',
        'Forms',
        table(
          'Passé simple of common verbs.',
          ['Verb', 'il / elle', 'ils / elles'],
          [
            ['parler', 'parla', 'parlèrent'],
            ['finir', 'finit', 'finirent'],
            ['être', 'fut', 'furent'],
            ['avoir', 'eut', 'eurent'],
            ['faire', 'fit', 'firent'],
            ['venir', 'vint', 'vinrent'],
            ['naître', 'naquit', 'naquirent'],
            ['mourir', 'mourut', 'moururent'],
          ],
        ),
        p(
          'The endings depend on the verb group: after the -é participle verbs take **-ai, -as, -a, -âmes, -âtes, -èrent**; after -i they take **-is, -is, -it, -îmes, -îtes, -irent**; after -u they take **-us, -us, -ut, -ûmes, -ûtes, -urent**.',
        ),
      ),
      section(
        'use',
        'When it is used',
        p(
          'It tells completed events of a story in **writing**: novels, history books, tales. In speech and in everyday writing the passé composé replaces it. The imparfait still describes the background: *Il pleuvait. Le docteur ouvrit la porte et entra.*',
        ),
        examples(
          ['Napoléon naquit à Ajaccio en 1769.', 'Napoleon was born in Ajaccio in 1769.'],
          ['Elle poussa un cri et tomba.', 'She cried out and fell.'],
        ),
        tip(
          'Reading tip',
          'Look for -a, -it, -ut, -int and -èrent / -irent endings in a text: they signal the passé simple. You will meet it in literature far more than you will ever need to write it.',
        ),
      ),
    ],
    related: ['fr-c12-recit-passe'],
    sources: [S.passeSimple],
  },
  {
    id: 'fr-c12-modalisation',
    title: 'Modalisation: how sure are you?',
    tagline: 'Show certainty, possibility or doubt',
    level: LEVEL,
    summary:
      'Modalisation shows how far the speaker stands behind what they say. Choose an expression of certainty, possibility or doubt, and remember which mood follows it: indicative or subjunctive.',
    sections: [
      section(
        'scale',
        'From certain to doubtful',
        table(
          'Expressions by degree of certainty.',
          ['Degree', 'Expressions', 'Mood'],
          [
            [
              'Certainty',
              'il est évident / certain / clair que, sans aucun doute, assurément',
              'indicative',
            ],
            ['Probability', 'il est probable que, apparemment, sans doute', 'indicative'],
            [
              'Possibility',
              'peut-être que, il se peut que, il est possible que',
              'peut-être que + indicative; il se peut / il est possible que + subjunctive',
            ],
            ['Doubt', 'je doute que, il est douteux que, je ne suis pas sûr que', 'subjunctive'],
          ],
        ),
        examples(
          ['Il est évident que la pauvreté recule.', 'It is obvious that poverty is falling.'],
          ['Il se peut que nous manquions de bénévoles.', 'We may run short of volunteers.'],
          ['Je doute que cela suffise.', 'I doubt that this will be enough.'],
        ),
      ),
      section(
        'distance',
        'Taking your distance',
        p(
          'To report a claim without taking responsibility for it, use **selon**, **d’après**, **apparemment**, **il paraît que** or the conditional: *Selon l’ONG, les réfugiés seraient plus nombreux.* The conditional of journalism says: “I report it, I cannot confirm it.”',
        ),
        mistake(
          'Watch out',
          '✗ Je doute qu’il viendra.  ✓ Je doute qu’il vienne.',
          '✗ Il est évident qu’il soit là.  ✓ Il est évident qu’il est là.',
        ),
        tip(
          'Rule of thumb',
          'The more certain you are, the more likely the indicative: certainty → indicative, doubt → subjunctive. “Peut-être que” is the exception to remember: it takes the indicative.',
        ),
      ),
    ],
    related: ['fr-c12-subjonctif-present'],
    sources: [S.subjonctif, S.conditionnel],
  },
  {
    id: 'fr-c12-subjonctif-present',
    title: 'The present subjunctive',
    tagline: 'The mood of wishes, duty and doubt',
    level: LEVEL,
    summary:
      'The present subjunctive is used after que when the speaker expresses a wish, a necessity, a feeling or a doubt. Regular verbs build it from the ils form; a handful of verbs are irregular.',
    sections: [
      section(
        'forms',
        'Forms',
        p(
          'Take the **ils / elles** form of the present, drop **-ent**, and add **-e, -es, -e, -ions, -iez, -ent**: *ils parlent → que je parle, que nous parlions*; *ils finissent → que je finisse*. Nous and vous look like the imparfait.',
        ),
        table(
          'Irregular subjunctives.',
          ['Verb', 'que je …', 'que nous …', 'qu’ils …'],
          [
            ['être', 'sois', 'soyons', 'soient'],
            ['avoir', 'aie', 'ayons', 'aient'],
            ['aller', 'aille', 'allions', 'aillent'],
            ['faire', 'fasse', 'fassions', 'fassent'],
            ['pouvoir', 'puisse', 'puissions', 'puissent'],
            ['savoir', 'sache', 'sachions', 'sachent'],
          ],
        ),
      ),
      section(
        'triggers',
        'When to use it',
        table(
          'Common triggers.',
          ['Meaning', 'Examples'],
          [
            ['Wish, will', 'vouloir que, souhaiter que, préférer que'],
            ['Necessity', 'il faut que, il est important que, il est nécessaire que'],
            ['Feeling', 'être content que, regretter que, avoir peur que'],
            ['Doubt', 'douter que, ne pas penser que, il est douteux que'],
            ['Conjunctions', 'bien que, pour que, avant que, à moins que, jusqu’à ce que'],
          ],
        ),
        examples(
          ['Il faut que nous aidions les réfugiés.', 'We must help the refugees.'],
          ['Je veux qu’elle vienne.', 'I want her to come.'],
          ['Bien qu’il soit fatigué, il reste.', 'Although he is tired, he stays.'],
        ),
        mistake(
          'Watch out',
          '✗ Je pense qu’il vienne.  ✓ Je pense qu’il vient.  (affirmative penser → indicative)',
          '✗ Je ne pense pas qu’il vient.  ✓ Je ne pense pas qu’il vienne.  (negative → subjunctive)',
        ),
        tip(
          'Same subject?',
          'When the subject does not change, use the infinitive instead: *Je veux partir.* but *Je veux que tu partes.* Avoid the subjunctive when there is only one person involved.',
        ),
      ),
    ],
    related: ['fr-c12-modalisation'],
    sources: [S.subjonctif],
  },
  {
    id: 'fr-c12-but',
    title: 'Expressing purpose',
    tagline: 'Say what you do something for',
    level: LEVEL,
    summary:
      'To say why you do something, use pour or afin de with an infinitive when the subject stays the same. When the subject changes, use pour que or afin que with the subjunctive.',
    sections: [
      section(
        'forms',
        'Choosing the structure',
        table(
          'Purpose expressions.',
          ['Situation', 'Structure', 'Example'],
          [
            [
              'Same subject',
              'pour / afin de / de façon à + infinitive',
              'Elle s’entraîne pour gagner.',
            ],
            [
              'New subject',
              'pour que / afin que / de façon à ce que + subjunctive',
              'On installe un écran pour que tous voient le match.',
            ],
            [
              'Avoiding something',
              'de peur que / de crainte que + subjunctive',
              'Elle parle bas de peur que l’arbitre l’entende.',
            ],
          ],
        ),
        examples(
          ['Il court afin de battre son record.', 'He runs to break his record.'],
          ['Le coach crie pour que nous l’entendions.', 'The coach shouts so that we hear him.'],
        ),
      ),
      section(
        'register',
        'Style and traps',
        p(
          '**Afin de / afin que** sound more formal than **pour / pour que**. Do not use pour que when the subject is the same: say *Je m’échauffe pour éviter une blessure*, not *pour que j’évite*. With **de peur que**, written French often adds a *ne* with no negative meaning: *de peur qu’il ne tombe*.',
        ),
        mistake(
          'Watch out',
          '✗ Elle s’entraîne pour qu’elle gagne.  ✓ Elle s’entraîne pour gagner.',
          '✗ Je parle pour que tu comprends.  ✓ Je parle pour que tu comprennes.',
        ),
      ),
    ],
    related: ['fr-c12-subjonctif-present'],
    sources: [S.subjonctif, S.proposition],
  },
  {
    id: 'fr-c12-relatifs-composes',
    title: 'Compound relative pronouns',
    tagline: 'lequel, auquel, duquel and dont',
    level: LEVEL,
    summary:
      'After a preposition, lequel and its forms take up a thing and agree with it. À and de contract with the plural and masculine forms. Dont replaces de + noun.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Compound relative pronouns.',
          ['Form', 'Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem. pl.'],
          [
            ['basic', 'lequel', 'laquelle', 'lesquels', 'lesquelles'],
            ['à +', 'auquel', 'à laquelle', 'auxquels', 'auxquelles'],
            ['de +', 'duquel', 'de laquelle', 'desquels', 'desquelles'],
          ],
        ),
        examples(
          ['Le stade dans lequel ils jouent est neuf.', 'The stadium they play in is new.'],
          [
            'La compétition à laquelle elle participe commence.',
            'The competition she takes part in starts.',
          ],
          [
            'Le terrain à côté duquel nous campons est inondé.',
            'The field next to which we are camping is flooded.',
          ],
        ),
      ),
      section(
        'qui-dont',
        'Persons and dont',
        p(
          'After a preposition a **person** is usually taken up by **qui**: *l’entraîneur avec qui je travaille*. **Dont** replaces **de + noun** for things and persons: *le sport dont je rêve* (rêver de), *le club dont il est membre* (membre de). But after a preposition of place such as *à côté de*, use **duquel**.',
        ),
        mistake(
          'Watch out',
          '✗ Le sport dont je rêve de.  ✓ Le sport dont je rêve.',
          '✗ Les épreuves lesquelles elle participe.  ✓ Les épreuves auxquelles elle participe.',
        ),
      ),
    ],
    related: ['fr-c12-but'],
    sources: [S.pronomRelatif],
  },
  {
    id: 'fr-c12-futur-anterieur',
    title: 'The futur antérieur',
    tagline: 'What will have happened by then',
    level: LEVEL,
    summary:
      'The futur antérieur shows an action that will already be finished before another future action or a future date. It is built with avoir or être in the futur simple plus the past participle.',
    sections: [
      section(
        'forms',
        'Forms',
        table(
          'Futur antérieur of three verbs.',
          ['Person', 'finir (avoir)', 'faire (avoir)', 'partir (être)'],
          [
            ['je', 'aurai fini', 'aurai fait', 'serai parti(e)'],
            ['tu', 'auras fini', 'auras fait', 'seras parti(e)'],
            ['il / elle / on', 'aura fini', 'aura fait', 'sera parti(e)'],
            ['nous', 'aurons fini', 'aurons fait', 'serons parti(e)s'],
            ['vous', 'aurez fini', 'aurez fait', 'serez parti(e)(s)'],
            ['ils / elles', 'auront fini', 'auront fait', 'seront parti(e)s'],
          ],
        ),
        p(
          'Verbs that take **être** in the passé composé (aller, partir, venir, arriver, the reflexive verbs) take **être** here too, and the participle agrees with the subject.',
        ),
      ),
      section(
        'use',
        'When to use it',
        examples(
          [
            'Quand nous aurons fini le tri, nous sortirons.',
            'When we have finished sorting, we will go out.',
          ],
          [
            'D’ici 2040, la ville aura réduit ses émissions.',
            'By 2040 the city will have cut its emissions.',
          ],
          [
            'Il aura oublié son sac.',
            'He has probably forgotten his bag. (a guess about the past)',
          ],
        ),
        p(
          'Typical triggers are **quand, lorsque, dès que, aussitôt que, une fois que, après que** and **d’ici** + a future date. The main clause is usually in the **futur simple**. The same tense can express a guess about something that has already happened.',
        ),
        mistake(
          'Watch out',
          '✗ Quand nous finirons, nous sortirons.  ✓ Quand nous aurons fini, nous sortirons.',
          '✗ Elle aura partie.  ✓ Elle sera partie.',
        ),
      ),
    ],
    related: ['fr-c12-recit-passe'],
    sources: [S.futurAnterieur],
  },
  {
    id: 'fr-c12-cause-consequence',
    title: 'Cause and consequence',
    tagline: 'Link what happens to why it happens',
    level: LEVEL,
    summary:
      'Cause and consequence connectors link two ideas in either direction. Learn which ones introduce the cause and which introduce the result, and which take a noun, a verb or a full clause.',
    sections: [
      section(
        'cause',
        'Cause',
        table(
          'Expressing cause.',
          ['Connector', 'Followed by', 'Nuance'],
          [
            ['parce que', 'clause', 'new information'],
            ['puisque', 'clause', 'known to both speakers'],
            ['comme', 'clause (start of sentence)', 'neutral'],
            ['car', 'clause (written)', 'explanation'],
            ['grâce à', 'noun', 'positive cause'],
            ['à cause de', 'noun', 'negative or neutral cause'],
            ['en raison de', 'noun', 'formal'],
          ],
        ),
        examples(
          [
            'Les récoltes baissent à cause de la canicule.',
            'Harvests fall because of the heatwave.',
          ],
          ['La ville recycle plus grâce au tri.', 'The city recycles more thanks to sorting.'],
        ),
      ),
      section(
        'consequence',
        'Consequence',
        table(
          'Expressing consequence.',
          ['Connector', 'Example'],
          [
            ['donc, alors', 'Il pleut, donc nous restons.'],
            [
              'par conséquent, c’est pourquoi',
              'Les prix montent ; c’est pourquoi nous économisons.',
            ],
            ['si bien que, de sorte que', 'Il a peu plu, si bien que le fleuve est à sec.'],
            ['tellement / si … que', 'Il est tellement fatigué qu’il s’endort.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il pleut, parce que nous restons.  ✓ Nous restons parce qu’il pleut.',
          '✗ Grâce de la sécheresse, les prix montent.  ✓ À cause de la sécheresse, les prix montent.',
        ),
      ),
    ],
    related: ['fr-c12-futur-anterieur'],
    sources: [S.proposition],
  },
  {
    id: 'fr-c12-concordance',
    title: 'Concordance des temps',
    tagline: 'Report what was said, in the right tense',
    level: LEVEL,
    summary:
      'When the verb of saying is in the past, the reported verb moves one step back in time. When it is in the present, nothing changes.',
    sections: [
      section(
        'shift',
        'The shift',
        table(
          'Direct speech and reported speech after a past verb.',
          ['Direct speech', 'Reported speech', 'Example'],
          [
            ['présent', 'imparfait', 'Il a dit qu’il habitait à Lyon.'],
            ['passé composé', 'plus-que-parfait', 'Il a dit qu’il avait visité le musée.'],
            ['futur simple', 'conditionnel présent', 'Il a dit qu’il viendrait.'],
            ['futur antérieur', 'conditionnel passé', 'Il a dit qu’il aurait fini.'],
          ],
        ),
        examples(
          ['Il dit qu’il viendra.', 'He says he will come. (present reporting verb: no shift)'],
          ['Il a dit qu’il viendrait.', 'He said he would come.'],
        ),
      ),
      section(
        'time',
        'Time words change too',
        table(
          'Time expressions in reported speech.',
          ['Direct', 'Reported'],
          [
            ['aujourd’hui', 'ce jour-là'],
            ['hier', 'la veille'],
            ['demain', 'le lendemain'],
            ['maintenant', 'à ce moment-là'],
            ['dans trois jours', 'trois jours plus tard'],
            ['il y a trois jours', 'trois jours avant / plus tôt'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Elle a dit qu’elle viendra demain.  ✓ Elle a dit qu’elle viendrait le lendemain.',
          '✗ Il a dit qu’il a visité le musée.  ✓ Il a dit qu’il avait visité le musée.',
        ),
      ),
    ],
    related: ['fr-c12-recit-passe', 'fr-c12-marqueurs-temporels'],
    sources: [S.concordance, S.plusQueParfait, S.conditionnel],
  },
  {
    id: 'fr-c12-marqueurs-temporels',
    title: 'Time markers',
    tagline: 'depuis, pendant, il y a, dans, en, dès',
    level: LEVEL,
    summary:
      'Choose the time marker by the question it answers: since when, for how long, how long ago, in how long, how fast, from when, until when.',
    sections: [
      section(
        'markers',
        'Which one?',
        table(
          'Common time markers.',
          ['Marker', 'Use', 'Example'],
          [
            ['depuis', 'start of a state that continues', 'Ils vivent ici depuis 1990.'],
            ['pendant', 'a duration that is over', 'La guerre a duré pendant six ans.'],
            ['il y a', 'how long ago', 'Napoléon est mort il y a deux siècles.'],
            ['dans', 'how long from now', 'Le musée ouvre dans trois mois.'],
            ['en', 'year, month, or time needed', 'Il a bâti le pont en deux ans.'],
            ['dès / à partir de', 'starting point', 'Dès 1789, le peuple se soulève.'],
            ['jusqu’à', 'end point', 'Jusqu’en 1962, l’Algérie était française.'],
            ['au cours de / lors de', 'during an event', 'Lors de la bataille, il fut blessé.'],
          ],
        ),
        examples(
          [
            'Elle étudie l’histoire depuis dix ans.',
            'She has been studying history for ten years.',
          ],
          [
            'Elle a étudié l’histoire pendant dix ans.',
            'She studied history for ten years. (it is over)',
          ],
        ),
      ),
      section(
        'traps',
        'Common traps',
        p(
          '**Depuis** goes with a present or imparfait verb for a state that continues; **pendant** goes with a past tense for a completed period. **Il y a** looks back and **dans** looks ahead, both counted from now. **En** answers “how long did it take?”, **dans** answers “when will it start?”.',
        ),
        mistake(
          'Watch out',
          '✗ J’habite ici pendant dix ans.  ✓ J’habite ici depuis dix ans.',
          '✗ Il est mort dans deux siècles.  ✓ Il est mort il y a deux siècles.',
        ),
      ),
    ],
    related: ['fr-c12-concordance'],
    sources: [S.imparfait, S.proposition],
  },
  {
    id: 'fr-c12-concession',
    title: 'Concession',
    tagline: 'Admit a fact, then contrast it',
    level: LEVEL,
    summary:
      'Concession accepts a fact that could have prevented the main idea, and states the main idea anyway. Each connector takes its own structure: subjunctive, indicative, noun or infinitive.',
    sections: [
      section(
        'connectors',
        'Connectors and structures',
        table(
          'Expressing concession.',
          ['Connector', 'Followed by', 'Example'],
          [
            [
              'bien que, quoique',
              'subjunctive',
              'Bien qu’elle soit étrangère, elle se sent chez elle.',
            ],
            ['même si', 'indicative', 'Même si c’est dur, on s’adapte.'],
            ['malgré, en dépit de', 'noun', 'Malgré son accent, il se fait comprendre.'],
            ['avoir beau', 'infinitive', 'Il a beau chercher, il ne trouve rien.'],
            [
              'pourtant, cependant, néanmoins, toutefois',
              'new sentence',
              'Il parle bien ; pourtant, il garde un accent.',
            ],
            ['certes … mais', 'two clauses', 'Certes il a raison, mais je ne suis pas d’accord.'],
          ],
        ),
      ),
      section(
        'traps',
        'Common traps',
        examples(
          ['Même s’il pleut, nous sortons.', 'Even if it rains, we go out.'],
          ['Bien qu’il pleuve, nous sortons.', 'Although it is raining, we go out.'],
        ),
        mistake(
          'Watch out',
          '✗ Bien qu’il est fatigué, il travaille.  ✓ Bien qu’il soit fatigué, il travaille.',
          '✗ Malgré qu’il pleut.  ✓ Malgré la pluie. / Bien qu’il pleuve.',
        ),
        tip(
          'Same meaning, different grammar',
          'Bien que, malgré and pourtant say almost the same thing; pick by what comes next: a clause in the subjunctive, a noun, or a new sentence.',
        ),
      ),
    ],
    related: ['fr-c12-subjonctif-present'],
    sources: [S.subjonctif, S.proposition],
  },
  {
    id: 'fr-c12-indefinis',
    title: 'Indefinite adjectives and pronouns',
    tagline: 'certains, plusieurs, chacun, aucun, quiconque',
    level: LEVEL,
    summary:
      'Indefinite words speak about people or things without saying exactly which: some, several, each, none. Learn which ones are singular, which are plural, and which need ne.',
    sections: [
      section(
        'list',
        'The main ones',
        table(
          'Indefinite words by meaning.',
          ['Meaning', 'Words', 'Example'],
          [
            [
              'some, several',
              'certains, plusieurs, quelques, la plupart',
              'Certains pensent que c’est facile.',
            ],
            ['all, each', 'tout / tous / toute, chacun, chaque', 'Chacun a ses racines.'],
            [
              'none',
              'aucun(e) … ne, nul … ne, personne … ne, rien … ne',
              'Aucune solution n’est simple.',
            ],
            [
              'anyone',
              'quiconque, n’importe qui',
              'Quiconque s’installe ici doit apprendre la langue.',
            ],
          ],
        ),
      ),
      section(
        'agreement',
        'Agreement',
        p(
          '**Chacun, aucun, nul, personne** are singular: *chacun a*, *personne ne vient*. **Certains, plusieurs, tous** are plural: *plusieurs sont venus*. **Aucun** and **chaque** agree with the noun in gender: *aucune solution*, *chaque personne*. **Tout** is an adjective (*tout le monde*, *toute la ville*, *tous les jours*) or a pronoun (*tous sont venus*, *tout est possible*).',
        ),
        examples(
          ['Certains sont partis, d’autres sont restés.', 'Some left, others stayed.'],
          ['Aucun préjugé ne résiste à la rencontre.', 'No prejudice survives meeting people.'],
        ),
        mistake(
          'Watch out',
          '✗ Chacun ont leur idée.  ✓ Chacun a son idée.',
          '✗ Aucun solution.  ✓ Aucune solution.',
        ),
      ),
    ],
    related: ['fr-c12-concession'],
    sources: [S.proposition],
  },
  {
    id: 'fr-c12-appreciation',
    title: 'Giving an appreciation',
    tagline: 'Praise, nuance or criticise a film or a show',
    level: LEVEL,
    summary:
      'To review a film or show, choose expressions of praise, reservation or criticism, and watch the mood after your opinion verb.',
    sections: [
      section(
        'expressions',
        'Useful expressions',
        table(
          'Opinions about a film.',
          ['Tone', 'Expressions'],
          [
            ['Praise', 'j’ai adoré, ça m’a beaucoup plu, un vrai régal, je le recommande vivement'],
            [
              'Reservation',
              'plutôt réussi, mais …, correct sans plus, inégal, la fin m’a laissé sur ma faim',
            ],
            [
              'Criticism',
              'ça m’a ennuyé, c’est prévisible, les dialogues sont plats, je suis resté sur ma faim',
            ],
            ['Opinion', 'à mon avis, selon moi, je trouve que, il me semble que'],
          ],
        ),
        examples(
          [
            'J’ai adoré ce film, le scénario est brillant.',
            'I loved this film, the screenplay is brilliant.',
          ],
          [
            'Il est plutôt réussi, mais la fin m’a déçu.',
            'It is rather good, but the ending disappointed me.',
          ],
        ),
      ),
      section(
        'mood',
        'Which mood?',
        p(
          'In the affirmative, **je trouve que, je pense que, il me semble que** + **indicative**. In the negative or a question, the **subjunctive** is common: *Je ne trouve pas que ce soit drôle.* **Feelings** (être ravi / content / déçu que) always take the **subjunctive**: *Je suis ravi que tu aies aimé.*',
        ),
        mistake(
          'Watch out',
          '✗ Je trouve que ce soit drôle.  ✓ Je trouve que c’est drôle.',
          '✗ Je suis ravi que tu as aimé.  ✓ Je suis ravi que tu aies aimé.',
        ),
      ),
    ],
    related: ['fr-c12-conditionnel', 'fr-c12-subjonctif-present'],
    sources: [S.subjonctif],
  },
  {
    id: 'fr-c12-conditionnel',
    title: 'The conditional',
    tagline: 'Politeness, hypothesis, rumour and regret',
    level: LEVEL,
    summary:
      'The conditional is built on the future stem with the imparfait endings. It is used for polite requests, hypotheses, unconfirmed information and regrets.',
    sections: [
      section(
        'forms',
        'Forms',
        table(
          'Conditional present.',
          ['Verb', 'je', 'nous', 'ils'],
          [
            ['être', 'serais', 'serions', 'seraient'],
            ['avoir', 'aurais', 'aurions', 'auraient'],
            ['aller', 'irais', 'irions', 'iraient'],
            ['pouvoir', 'pourrais', 'pourrions', 'pourraient'],
            ['vouloir', 'voudrais', 'voudrions', 'voudraient'],
            ['aimer', 'aimerais', 'aimerions', 'aimeraient'],
          ],
        ),
        p(
          'The **past** conditional is the conditional of **avoir / être** + the participle: *j’aurais dû*, *il serait venu*.',
        ),
      ),
      section(
        'uses',
        'Uses',
        table(
          'Four main uses.',
          ['Use', 'Example'],
          [
            ['Polite request', 'Je voudrais deux places. · Pourriez-vous baisser le son ?'],
            ['Hypothesis', 'Si j’avais le temps, j’irais au festival.'],
            ['Unconfirmed news', 'Le film sortirait en mai, selon la presse.'],
            ['Regret, unreal past', 'Si j’avais su, je serais venu. · J’aurais dû voir ce film.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Si j’aurais le temps, j’irais.  ✓ Si j’avais le temps, j’irais.',
          '✗ Si j’avais su, je viendrais.  ✓ Si j’avais su, je serais venu.',
        ),
      ),
    ],
    related: ['fr-c12-appreciation', 'fr-c12-concordance'],
    sources: [S.conditionnel],
  },
];
