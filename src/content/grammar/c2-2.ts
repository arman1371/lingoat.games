import { compare, examples, list, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { C2_SOURCES as S } from './sourcesC2';

const LEVEL = 'c2-2';

export const C22_TOPICS: GrammarTopic[] = [
  {
    id: 'c22-participial-attributes',
    title: 'Participles before nouns',
    tagline: 'die steigenden Preise, das restaurierte Gemälde',
    level: LEVEL,
    summary:
      'Partizip I (infinitive + d) is active and simultaneous: die strahlende Farbe. Partizip II usually has a passive, completed meaning: das gemalte Bild. Both take adjective endings and can be extended with details placed before them.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **participle** can stand in front of a noun like an adjective. It then takes the normal **adjective endings** and shortens a relative clause: die Preise, die steigen → **die steigenden Preise**. Written German uses this a lot because it makes sentences compact.',
        ),
        table(
          'The two participles as attributes.',
          ['Participle', 'Formed by', 'Meaning', 'Example'],
          [
            [
              'Partizip I',
              'infinitive + d',
              'active, at the same time',
              'die steigenden Preise = die Preise, die steigen',
            ],
            [
              'Partizip II',
              'ge-…-t / ge-…-en',
              'passive, completed (transitive verbs)',
              'das restaurierte Gemälde = das Gemälde, das restauriert wurde',
            ],
            [
              'Partizip II',
              'ge-…-t / ge-…-en',
              'active, completed (verbs with sein)',
              'der angekommene Gast = der Gast, der angekommen ist',
            ],
          ],
        ),
      ),
      section(
        'extended',
        'Extended participial attributes',
        p(
          'Everything that belongs to the participle (an agent, a time, an object, an adverb) goes **between the article and the participle**. The noun comes last. The whole block is read from the end: first the noun, then the participle, then the details.',
        ),
        examples(
          [
            'das vom Künstler 1912 gemalte Bild',
            'the picture painted by the artist in 1912 = das Bild, das 1912 vom Künstler gemalt wurde',
          ],
          [
            'der seit Jahren geschlossene Saal',
            'the hall that has been closed for years = der Saal, der seit Jahren geschlossen ist',
          ],
          [
            'der eifrig ein Buch lesende Mann',
            'the man eagerly reading a book = der Mann, der eifrig ein Buch liest',
          ],
        ),
        p(
          'To understand one, turn it into a relative clause: find the noun, decide whether the participle is active (Partizip I, or Partizip II of a sein-verb) or passive (Partizip II of a transitive verb), and rebuild the details around it.',
        ),
      ),
      section(
        'limits',
        'What is possible',
        list(
          '**Partizip I** works with almost every verb, but the meaning is always active and simultaneous: der singende Vogel.',
          '**Partizip II of transitive verbs** is passive: das gesungene Lied.',
          '**Partizip II of intransitive verbs** with haben (laufen, schlafen) cannot be used as an attribute. Verbs of change with sein can: der eingeschlafene Hund, die verwelkte Blume.',
        ),
        compare(
          {
            title: 'Relative clause',
            question: 'Fully explicit',
            example: 'das Bild, das vom Künstler gemalt wurde',
          },
          {
            title: 'Participial attribute',
            question: 'Compact, written',
            example: 'das vom Künstler gemalte Bild',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ das Bild gemalte  ✓ das gemalte Bild (the participle is before the noun)',
          '✗ die lesende Buch  ✓ das gelesene Buch (a book does not read: passive meaning needs Partizip II)',
          '✗ der gelaufene Mann  ✓ der Mann, der gelaufen ist (laufen has no attributive Partizip II)',
          '✗ ein steigende Preis  ✓ ein steigender Preis (adjective ending)',
        ),
        tip(
          'Style',
          'If an extended attribute needs more than one breath to read, break it up into a relative clause again.',
        ),
      ),
    ],
    related: ['c22-gerundive', 'c22-passive-forms'],
    sources: [S.participle],
  },
  {
    id: 'c22-subjective-modals',
    title: 'Modal verbs that judge or report',
    tagline: 'Er soll reich sein. Das muss ein Irrtum gewesen sein.',
    level: LEVEL,
    summary:
      'With an infinitive (or a perfect infinitive: gelesen haben) modal verbs can report or assess: er soll = it is said that he; er will = he claims; er muss = surely; er dürfte = probably; er kann nicht = surely not. Modality verbs such as scheinen and drohen do something similar.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Modal verbs have two jobs. In the **objective** use they describe an obligation, permission or ability: Er soll heute kommen (he has been told to). In the **subjective** (epistemic) use the speaker says how sure they are about a statement or whose claim it is: Er soll reich sein (it is said that he is rich). Here the modal verb is about the speaker’s assessment, not about the subject’s duty.',
        ),
        table(
          'The subjective meanings.',
          ['Modal verb', 'Meaning', 'Example'],
          [
            [
              'sollen',
              'it is said (hearsay)',
              'Der Autor soll zehn Jahre an dem Roman gearbeitet haben.',
            ],
            [
              'wollen',
              'he/she claims (speaker doubts)',
              'Er will drei Jahre in Madrid gelebt haben.',
            ],
            ['müssen', 'surely, I conclude', 'Das muss ein Irrtum gewesen sein.'],
            ['dürfte', 'probably', 'Sie dürfte schon zu Hause sein.'],
            ['könnte / mag', 'perhaps; admittedly', 'Das könnte stimmen. – Das mag sein.'],
            ['kann nicht', 'surely not', 'Das kann nicht stimmen.'],
          ],
        ),
      ),
      section(
        'past',
        'Past reference: the perfect infinitive',
        p(
          'The subjective modal verb stays in the **present**. To speak about the past, put the infinitive into the perfect: **participle + haben / sein**. The verb that makes the claim is not in the past; the event is.',
        ),
        examples(
          ['Sie will das Buch nie gelesen haben.', 'She claims never to have read the book.'],
          ['Er muss gestern nach Berlin gefahren sein.', 'He must have gone to Berlin yesterday.'],
          [
            'Der Zeuge soll den Täter gesehen haben.',
            'The witness is said to have seen the offender.',
          ],
        ),
        p(
          'Do not mix this up with the objective Perfekt: Er hat arbeiten müssen (he was obliged to work) has the modal verb itself in the past and uses the double infinitive.',
        ),
      ),
      section(
        'modality',
        'Modality verbs',
        p(
          'A few other verbs with **zu + infinitive** judge an event in a similar way. They are not modal verbs, but they work like a comment on the infinitive.',
        ),
        table(
          'Modality verbs with zu.',
          ['Verb', 'Meaning', 'Example'],
          [
            ['scheinen', 'seems to', 'Mein Plan schien zu funktionieren.'],
            ['drohen', 'is in danger of, threatens to', 'Das Projekt droht zu scheitern.'],
            ['versprechen', 'promises to (be)', 'Das Wetter verspricht schön zu werden.'],
            ['pflegen', 'usually does', 'Er pflegt früh aufzustehen.'],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er will das Buch gelesen.  ✓ Er will das Buch gelesen haben. (perfect infinitive needs haben / sein)',
          '✗ Das muss nicht stimmen. (meant: surely not)  ✓ Das kann nicht stimmen.',
          '✗ Er hat reich sein sollen. (not for hearsay)  ✓ Er soll reich sein.',
          '✗ Er scheint arbeitet.  ✓ Er scheint zu arbeiten.',
        ),
      ),
    ],
    related: ['modal-verbs', 'perfekt'],
    sources: [S.epistemic, S.sollen, S.wollen, S.scheinen, S.drohen],
  },
  {
    id: 'c22-passive-forms',
    title: 'Passive in every tense',
    tagline: 'Das Tor wird geöffnet. Das Tor ist geöffnet.',
    level: LEVEL,
    summary:
      'The Vorgangspassiv (process) is werden + participle in every tense: wurde gebaut, ist gebaut worden, wird gebaut werden. The Zustandspassiv (state) is sein + participle: Das Tor ist geöffnet. In the Perfekt it is worden, not geworden.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The passive puts the **action or its result** in the foreground and lets the doer fade. German has two passives: the **Vorgangspassiv** (werden-passive) describes the process, the **Zustandspassiv** (sein-passive) describes the resulting state.',
        ),
        compare(
          { title: 'Process', question: 'What is happening?', example: 'Die Tür wird geöffnet.' },
          { title: 'State', question: 'What is the result?', example: 'Die Tür ist geöffnet.' },
        ),
      ),
      section(
        'tenses',
        'Process passive in all tenses',
        table(
          'Vorgangspassiv of “bauen”.',
          ['Tense', 'Form', 'Example'],
          [
            ['Präsens', 'wird + Partizip II', 'Das Haus wird gebaut.'],
            ['Präteritum', 'wurde + Partizip II', 'Das Haus wurde gebaut.'],
            ['Perfekt', 'ist + Partizip II + worden', 'Das Haus ist gebaut worden.'],
            ['Plusquamperfekt', 'war + Partizip II + worden', 'Das Haus war gebaut worden.'],
            ['Futur I', 'wird + Partizip II + werden', 'Das Haus wird gebaut werden.'],
          ],
        ),
        p(
          'The Perfekt and Plusquamperfekt of the passive always use **sein**, even when the active verb takes haben (Man hat das Haus gebaut → Das Haus ist gebaut worden). The participle of the auxiliary **werden** is **worden** (without ge-). **geworden** is the participle of werden as a full verb: Er ist Arzt geworden.',
        ),
      ),
      section(
        'state',
        'State passive and modal verbs',
        table(
          'Process or state?',
          ['Process (werden)', 'State (sein)'],
          [
            ['Das Museum wird um 18 Uhr geschlossen.', 'Das Museum ist montags geschlossen.'],
            ['Die Tür wurde geöffnet.', 'Die Tür war geöffnet.'],
            ['Der Vertrag wird unterschrieben.', 'Der Vertrag ist unterschrieben.'],
          ],
        ),
        list(
          '**With a modal verb** the passive infinitive is werden at the end: Das muss geprüft werden. In the past: Das hat geprüft werden müssen / Das muss geprüft worden sein (subjective).',
          '**Agent:** a person is introduced with **von + Dat.** (von der Behörde), a cause or means with **durch + Akk.** (durch den Sturm). The state passive takes a von-agent only in restricted cases.',
          '**Impersonal passive:** no subject is needed: Hier darf nicht geraucht werden.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Das Haus ist gebaut geworden.  ✓ Das Haus ist gebaut worden.',
          '✗ Das Museum wird montags geschlossen. (when you mean the state)  ✓ Das Museum ist montags geschlossen.',
          '✗ Das Haus hat gebaut worden.  ✓ Das Haus ist gebaut worden.',
          '✗ Das muss prüfen werden.  ✓ Das muss geprüft werden.',
        ),
      ),
    ],
    related: ['perfekt', 'c22-passive-alternatives', 'c22-gerundive'],
    sources: [S.passive],
  },
  {
    id: 'c22-gerundive',
    title: 'zu + Partizip I',
    tagline: 'die zu erwartende Entscheidung',
    level: LEVEL,
    summary:
      'zu + Partizip I before a noun means “that can or must be …ed”: die zu erwartende Entscheidung = die Entscheidung, die erwartet werden muss. In the predicate the same idea is sein + zu + infinitive: Der Antrag ist zu prüfen.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The **Gerundiv** (zu-Partizip) is an adjective formed from the verb with **zu + Partizip I**. Its meaning is **passive**, and it usually expresses a necessity (must be …ed) or, when negated, an impossibility (cannot be …ed). It takes adjective endings and stands before the noun. It is typical of official and legal German.',
        ),
        table(
          'zu-Partizip and the relative clause it replaces.',
          ['Gerundiv', 'Relative clause', 'Meaning'],
          [
            [
              'die zu erwartende Entscheidung',
              'die Entscheidung, die erwartet werden muss/kann',
              'expected',
            ],
            [
              'der noch zu zahlende Betrag',
              'der Betrag, der noch gezahlt werden muss',
              'still to be paid',
            ],
            [
              'das nicht zu unterschätzende Risiko',
              'das Risiko, das nicht unterschätzt werden darf',
              'must not be underestimated',
            ],
            [
              'ein nicht zu leugnender Erfolg',
              'ein Erfolg, der nicht geleugnet werden kann',
              'cannot be denied',
            ],
          ],
        ),
      ),
      section(
        'forms',
        'Forming it',
        list(
          '**Inseparable or simple verbs:** zu stands in front of the participle: das zu lesende Buch, die zu erwartende Entscheidung.',
          '**Separable verbs:** zu sits between prefix and verb, in one word: das abzuschließende Verfahren, die einzuhaltende Frist.',
          '**Endings** follow the adjective declension: der zu prüfende Antrag, eines zu prüfenden Antrags.',
          '**As a noun:** der/die Auszubildende, das zu Lobende.',
        ),
      ),
      section(
        'predicate',
        'In the predicate: sein + zu + infinitive',
        p(
          'The same meaning without a noun uses **sein + zu + infinitive**, sometimes called the modal passive. It can mean *must* or *can*, depending on the verb and context.',
        ),
        examples(
          ['Der Antrag ist bis Freitag zu prüfen.', 'The application must be checked by Friday.'],
          ['Die Frist ist einzuhalten.', 'The deadline has to be kept.'],
          ['Das Problem ist leicht zu lösen.', 'The problem can easily be solved.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ die erwartende Entscheidung (the decision is waiting)  ✓ die zu erwartende Entscheidung',
          '✗ das zu abschließende Verfahren  ✓ das abzuschließende Verfahren',
          '✗ die zu erwarten Entscheidung  ✓ die zu erwartende Entscheidung (-d)',
          '✗ Die Frist ist zu einhalten.  ✓ Die Frist ist einzuhalten.',
        ),
      ),
    ],
    related: ['c22-participial-attributes', 'c22-passive-alternatives'],
    sources: [S.gerundive, S.participle, S.passive],
  },
  {
    id: 'c22-formal-genitive',
    title: 'Formal genitive prepositions',
    tagline: 'angesichts, aufgrund, hinsichtlich, seitens, zwecks',
    level: LEVEL,
    summary:
      'Written and official German uses many prepositions with the genitive: angesichts (in view of), infolge (as a result of), aufgrund (because of), hinsichtlich (regarding), seitens (on the part of), zwecks (for the purpose of), mittels (by means of), zugunsten (in favour of).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Many prepositions that govern the **genitive** belong to written and administrative language. They let you say precisely what a relationship is: reason, purpose, means, topic or source. You will meet them in contracts, reports, letters from authorities and newspapers.',
        ),
        table(
          'Formal genitive prepositions by function.',
          ['Function', 'Preposition', 'Example'],
          [
            [
              'reason',
              'angesichts, infolge, aufgrund',
              'Angesichts der steigenden Kosten wurde der Bau gestoppt.',
            ],
            ['purpose', 'zwecks', 'Zwecks Klärung des Sachverhalts wurde ein Gutachten eingeholt.'],
            [
              'means, basis',
              'mittels, anhand',
              'Mittels eines Verfahrens wurden die Daten ermittelt.',
            ],
            [
              'topic',
              'hinsichtlich, bezüglich',
              'Hinsichtlich Ihrer Anfrage müssen wir Ihnen mitteilen …',
            ],
            ['source, side', 'seitens', 'Seitens der Behörde gab es keine Bedenken.'],
            [
              'advantage, disadvantage',
              'zugunsten, zulasten',
              'Das Urteil fiel zugunsten der Kläger aus.',
            ],
            ['concession', 'ungeachtet, trotz', 'Ungeachtet der Warnungen reiste er ab.'],
            [
              'place, time',
              'innerhalb, außerhalb, während',
              'innerhalb der Frist, außerhalb des Gebäudes',
            ],
          ],
        ),
      ),
      section(
        'details',
        'Details that matter',
        list(
          '**angesichts** points to a fact that is visible or known at the moment: Angesichts dieser Sachlage … It is a reason with a note of “given that”.',
          '**aufgrund** is written as one word and takes the genitive. The adverb form is aufgrund **von** + dative: aufgrund von Berichten.',
          '**seitens** names the side something comes from: Proteste seitens der Opposition.',
          '**wegen** and **trotz** also take the genitive in writing; the dative (wegen dem Wetter) is common in speech.',
          'When the genitive form is not visible (a plural without an article) use **von** with the dative: aufgrund von Daten, innerhalb von drei Tagen.',
        ),
        compare(
          {
            title: 'wegen',
            question: 'Neutral reason',
            example: 'Wegen des Wetters fiel das Fest aus.',
          },
          {
            title: 'aufgrund',
            question: 'Formal reason',
            example: 'Aufgrund des Wetters fiel das Fest aus.',
          },
          {
            title: 'angesichts',
            question: 'Reason given what is known',
            example: 'Angesichts des Wetters fiel das Fest aus.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ aufgrund dem schlechten Wetter  ✓ aufgrund des schlechten Wetters',
          '✗ hinsichtlich auf Ihre Anfrage  ✓ hinsichtlich Ihrer Anfrage',
          '✗ aufgrund Berichte  ✓ aufgrund von Berichten',
          '✗ seitens die Behörde  ✓ seitens der Behörde',
        ),
        tip(
          'Register',
          'In an email to a friend say wegen or weil. Keep this list for formal writing, where it sounds precise rather than stiff.',
        ),
      ),
    ],
    related: ['c21-nominal-style', 'c21-contrast-cause'],
    sources: [S.prepositions, S.angesichts, S.hinsichtlich, S.aufgrund, S.seitens],
  },
  {
    id: 'c22-prefix-verbs',
    title: 'Separable or inseparable?',
    tagline: 'übersetzen with two meanings',
    level: LEVEL,
    summary:
      'The prefixes durch-, hinter-, über-, um-, unter- and wider- can be separable (stressed particle, literal meaning, ge- in the participle) or inseparable (stressed stem, figurative meaning, no ge-). The same infinitive can mean two different things.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Most German prefixes are clearly one of two kinds. **be-, ver-, er-, ent-** are always inseparable. **an-, auf-, aus-, mit-** are always separable. Six prefixes, however, can be both: **durch-, hinter-, über-, um-, unter-, wider-**. The verb then exists twice, and the stress shows which one it is: a stressed **particle** (separable) or an unstressed **prefix** (inseparable).',
        ),
        table(
          'The same infinitive, two verbs.',
          ['Infinitive', 'Separable (stressed particle)', 'Inseparable (stressed stem)'],
          [
            [
              'übersetzen',
              'Er setzt uns über. = ferries us across',
              'Er übersetzt den Text. = translates',
            ],
            [
              'umstellen',
              'Wir stellen die Möbel um. = rearrange',
              'Die Polizei umstellt das Haus. = surrounds',
            ],
            [
              'unterstellen',
              'Wir stellen uns unter. = take shelter',
              'Er unterstellt ihr Absicht. = imputes',
            ],
            [
              'durchlaufen',
              'Der Kaffee läuft durch. = runs through',
              'Er durchläuft die Ausbildung. = completes',
            ],
          ],
        ),
      ),
      section(
        'forms',
        'What changes in the forms',
        table(
          'Forms of übersetzen and umstellen.',
          ['Form', 'Separable', 'Inseparable'],
          [
            ['present (er)', 'setzt … über', 'übersetzt'],
            ['Partizip II', 'übergesetzt, umgestellt', 'übersetzt, umstellt'],
            ['infinitive with zu', 'überzusetzen, umzustellen', 'zu übersetzen, zu umstellen'],
            ['stress', 'on the particle: ÜBERsetzen', 'on the stem: überSETzen'],
          ],
        ),
        p(
          'In a separable verb the prefix moves to the end of a main clause and **ge-** is inserted between prefix and participle. An inseparable verb never splits and has **no ge-**. Separable meanings tend to be literal and spatial, inseparable ones figurative or abstract.',
        ),
      ),
      section(
        'tips',
        'How to decide',
        list(
          '**Listen to the stress** when you hear the word; the stress is on the first syllable for separable verbs.',
          '**Look at the object and the meaning:** a physical movement points to separable, an idea or an abstract action to inseparable.',
          '**Check the participle:** if it has ge- inside, the verb is separable.',
          '**wider-** is nearly always inseparable: widersprechen, widerlegen, widerspiegeln.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er hat den Text übergesetzt.  ✓ Er hat den Text übersetzt. (übergesetzt = ferried)',
          '✗ Die Polizei stellte das Haus um. (rearranged)  ✓ Die Polizei umstellte das Haus.',
          '✗ Er hat mir widergesprochen.  ✓ Er hat mir widersprochen. (widersprechen never splits, no ge-)',
          '✗ Er hat das Schild umfahren. (meant: knocked it over)  ✓ Er hat das Schild umgefahren. (umfahren without ge- means to drive around it)',
        ),
      ),
    ],
    related: ['separable-verbs', 'c22-passive-forms'],
    sources: [S.prefixVerbs],
  },
  {
    id: 'c22-passive-alternatives',
    title: 'Ways to avoid the passive',
    tagline: 'Das lässt sich lösen. Das ist lösbar.',
    level: LEVEL,
    summary:
      'Instead of werden + participle you can use man, sich lassen + infinitive (can be solved), sein + zu + infinitive (must/can be done), an adjective in -bar or -lich, or the bekommen-passive (Er bekommt das Buch geschenkt).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The passive leaves out the doer. German has other ways to do the same job that sound lighter or add a nuance of possibility or necessity. They are called **Passiversatzformen** or **Passivumschreibungen**. All of them can paraphrase one sentence: Das Mehl wird gesiebt.',
        ),
        table(
          'Passive and its alternatives for “Das Problem wird gelöst.”.',
          ['Form', 'Example', 'Nuance'],
          [
            ['man + active', 'Man löst das Problem.', 'general, no agent'],
            ['sich lassen + infinitive', 'Das Problem lässt sich lösen.', 'possible'],
            ['sein + zu + infinitive', 'Das Problem ist zu lösen.', 'must or can be done'],
            ['-bar / -lich adjective', 'Das Problem ist lösbar.', 'possible'],
            [
              'bekommen + Partizip II',
              'Er bekommt das Buch geschenkt.',
              'the receiver is the subject',
            ],
          ],
        ),
      ),
      section(
        'details',
        'How each one works',
        list(
          '**man** is an active sentence with an unspecified subject: Man darf hier nicht rauchen.',
          '**sich lassen** with an infinitive means *can be …ed*; the object becomes the subject: Das Mehl lässt sich sieben.',
          '**sein + zu** expresses necessity (Der Vertrag ist bis Freitag zu unterschreiben) or possibility (Das ist leicht zu klären).',
          '**-bar / -lich adjectives** state the possibility as a property: lösbar, nachvollziehbar, verständlich, unvermeidlich.',
          '**bekommen / kriegen + Partizip II** (the receiver passive): the dative object of the active becomes the subject: Der Lehrer nahm dem Schüler das Handy ab. → Der Schüler bekam das Handy abgenommen. It works only with some verbs.',
          '**Noun-verb combinations** also avoid the passive: zur Anwendung kommen, in Betracht gezogen werden → in Betracht kommen.',
        ),
      ),
      section(
        'compare',
        'Possible or necessary?',
        compare(
          { title: 'sich lassen', question: 'Can it be done?', example: 'Das lässt sich lösen.' },
          {
            title: 'sein + zu',
            question: 'Must (or can) it be done?',
            example: 'Das ist zu lösen.',
          },
          { title: '-bar', question: 'Is it solvable?', example: 'Das ist lösbar.' },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Das Problem lässt sich zu lösen.  ✓ Das Problem lässt sich lösen. (no zu)',
          '✗ Das Problem ist lösen zu.  ✓ Das Problem ist zu lösen.',
          '✗ Das Problem lässt lösen.  ✓ Das Problem lässt sich lösen. (sich is needed)',
          '✗ Er wird das Buch geschenkt.  ✓ Er bekommt das Buch geschenkt.',
        ),
      ),
    ],
    related: ['c22-passive-forms', 'c22-gerundive', 'c21-word-formation'],
    sources: [S.passiveParaphrase, S.passive],
  },
  {
    id: 'c22-nuance-particles',
    title: 'Modal particles and adverbs',
    tagline: 'ja, doch, eben, halt, wohl, schon, immerhin',
    level: LEVEL,
    summary:
      'Particles colour a sentence without changing what it says: doch (contrary to expectation), ja (as you know), eben / halt (it cannot be changed), wohl (probably), eigentlich (actually), schon (admittedly), immerhin (at least). They are unstressed, never stand first and cannot be negated.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          '**Modal particles** (Abtönungspartikeln) show the speaker’s attitude: surprise, shared knowledge, resignation, impatience. They do not change whether a sentence is true; they change the *tone*. They are frequent in spoken German and in dialogues, and learners often skip them because they cannot be translated one-to-one.',
        ),
        table(
          'Common particles and what they signal.',
          ['Particle', 'Signals', 'Example'],
          [
            ['ja', 'something known or surprising', 'Das ist ja interessant!'],
            [
              'doch',
              'contrary to expectation; softens an order',
              'Du hast es doch versprochen! – Komm doch mit!',
            ],
            [
              'eben / halt',
              'it cannot be changed (resignation)',
              'Das ist eben so. – Das ist halt so.',
            ],
            ['wohl', 'probably', 'Er ist wohl schon gegangen.'],
            [
              'schon',
              'admittedly; or “who cares”',
              'Das ist schon richtig, aber … – Was hat der schon zu sagen?',
            ],
            ['eigentlich', 'actually, in fact', 'Was wolltest du eigentlich sagen?'],
            [
              'mal',
              'softens a request or adds impatience',
              'Komm mal her! – Machst du das endlich mal?',
            ],
            ['denn', 'real interest in a question', 'Was ist das denn?'],
            ['etwa', 'surprised or suspicious question', 'Hast du etwa schon gegessen?'],
            ['immerhin', 'at least, after all', 'Immerhin hat er es versucht.'],
            ['ohnehin / eh', 'in any case (an extra reason)', 'Ich muss ohnehin in die Stadt.'],
          ],
        ),
      ),
      section(
        'rules',
        'How they behave',
        list(
          '**They do not change form** and cannot be negated, asked about, or joined with und / oder.',
          '**They are unstressed** and stand in the **middle field**, not in first position: Das ist **ja** interessant. A stressed or fronted word is another word: Doch! as an answer is not a particle.',
          '**Many have a twin in another word class:** ja (answer), doch (answer), schon (already), wohl (well), eigentlich (adjective).',
          '**immerhin** and a few others are the exception: they can stand in first position without changing meaning.',
        ),
        compare(
          { title: 'ja', question: 'You know it already', example: 'Das ist ja bekannt.' },
          {
            title: 'doch',
            question: 'It contradicts what was expected',
            example: 'Das ist doch bekannt!',
          },
          { title: 'eben', question: 'There is nothing to be done', example: 'Das ist eben so.' },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ja, das ist interessant. (an answer, not a particle)  ✓ Das ist ja interessant.',
          '✗ Das ist nicht ja interessant.  ✓ Das ist nicht so interessant. (particles are not negated)',
          '✗ Halt das ist so.  ✓ Das ist halt so. (not in first position)',
          '✗ Too many particles in a formal text.  ✓ Use them in dialogues and speeches, sparingly in reports.',
        ),
      ),
    ],
    related: ['c21-concession', 'c21-text-cohesion'],
    sources: [S.modalParticles],
  },
];
