import { compare, examples, list, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { C1_SOURCES as S } from './sources-c1';

const LEVEL = 'c1-1';

export const C11_TOPICS: GrammarTopic[] = [
  {
    id: 'formal-connectors',
    title: 'andernfalls, folglich, hingegen',
    tagline: 'Connectors that link two sentences precisely',
    level: LEVEL,
    summary:
      'Adverb connectors such as andernfalls, folglich, dennoch and hingegen link two main clauses and behave like any adverb: they can take position 1, and the verb follows directly. außer wenn sends the verb to the end, while es sei denn is followed by a clause with the verb in position 2.',
    sections: [
      section(
        'what',
        'What they do',
        p(
          'Beyond **und, aber, weil** and **obwohl**, formal German has a large set of connectors that say exactly how two statements relate: result, contrast, concession or alternative. The ones in this lesson are **adverbs** (grammarians call them Konjunktionaladverbien). They are not conjunctions: they do not change the word order of the clause they stand in. They are placed like any other adverb, so the finite verb stays in **position 2**.',
        ),
        examples(
          [
            'Wir müssen sparen; andernfalls reicht das Geld nicht.',
            'We have to save; otherwise the money will not be enough.',
          ],
          [
            'Der Zug fällt aus; folglich kommen wir zu spät.',
            'The train is cancelled; consequently we will be late.',
          ],
          [
            'Peter ist sehr ordentlich, Maria hingegen ist chaotisch.',
            'Peter is very tidy, whereas Maria is chaotic.',
          ],
        ),
      ),
      section(
        'meanings',
        'The most useful connectors',
        table(
          'Adverb connectors by meaning.',
          ['Meaning', 'Connectors', 'Example'],
          [
            [
              'otherwise',
              'andernfalls, ansonsten, sonst',
              'Bitte zahlen Sie bis Freitag; andernfalls fallen Gebühren an.',
            ],
            [
              'consequently',
              'folglich, somit, demnach, infolgedessen',
              'Die Preise stiegen; folglich sank die Nachfrage.',
            ],
            [
              'nevertheless',
              'dennoch, gleichwohl, trotzdem',
              'Es war riskant; dennoch haben wir es versucht.',
            ],
            [
              'whereas, in contrast',
              'hingegen, dagegen, demgegenüber',
              'Die Stadt ist laut, das Dorf hingegen ist ruhig.',
            ],
            [
              'however (a restriction)',
              'allerdings, jedoch',
              'Das Angebot ist gut; allerdings ist es teuer.',
            ],
            ['rather, on the contrary', 'vielmehr', 'Er ist nicht faul, vielmehr überfordert.'],
            [
              'in addition',
              'außerdem, zudem, überdies',
              'Die Wohnung ist hell; zudem liegt sie zentral.',
            ],
          ],
        ),
        p(
          'Most of them are written after a full stop or a semicolon, but they can also move into the middle of their clause (the verb is still in position 2): **Das Angebot ist gut. Es ist allerdings teuer.**',
        ),
      ),
      section(
        'position',
        'Position and verb',
        p(
          'Three kinds of connectors exist, and the difference is the position of the verb. Check which kind you have before you build the sentence.',
        ),
        table(
          'Three kinds of connectors.',
          ['Kind', 'Examples', 'Verb', 'Sentence'],
          [
            [
              'Conjunction (position 0)',
              'und, aber, denn, sondern',
              'after the subject',
              'Er ist müde, aber er arbeitet.',
            ],
            [
              'Subordinating conjunction',
              'weil, obwohl, außer wenn',
              'at the end',
              'Er arbeitet, obwohl er müde ist.',
            ],
            [
              'Adverb connector',
              'dennoch, folglich, andernfalls',
              'position 2 (inverted)',
              'Er ist müde; dennoch arbeitet er.',
            ],
          ],
          2,
        ),
        p(
          'Because the adverb takes position 1, the **subject moves behind the verb**: dennoch **arbeitet er**, not dennoch er arbeitet.',
        ),
      ),
      section(
        'exceptions',
        'Exceptions: außer wenn and es sei denn',
        p(
          'Both introduce an exception (“unless”), but they behave differently. **außer wenn** is a subordinating conjunction, so the verb goes to the end. After **es sei denn** a clause follows in normal main-clause order (verb in position 2); it is separated by a comma, and **dass** is optional (with dass the verb goes to the end).',
        ),
        compare(
          {
            title: 'außer wenn',
            question: 'Verb at the end',
            example: 'Wir fahren, außer wenn es schneit.',
          },
          {
            title: 'es sei denn',
            question: 'Verb in position 2',
            example: 'Wir fahren, es sei denn, es schneit.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er ist müde; dennoch er arbeitet.  ✓ Er ist müde; dennoch arbeitet er.',
          '✗ Wir fahren, außer wenn es schneit nicht.  ✓ Wir fahren, außer wenn es schneit.',
          '✗ Er arbeitet, obwohl er müde ist, trotzdem. (one connector is enough)  ✓ Er arbeitet, obwohl er müde ist.',
        ),
        tip(
          'In your own writing',
          'Vary the connectors: use hingegen or demgegenüber instead of repeating aber, and folglich or somit instead of repeating deshalb.',
        ),
      ),
    ],
    related: ['conjunctions', 'word-order'],
    sources: [S.conjunctionAdverb, S.conjunction, S.concessiveClause],
  },
  {
    id: 'subjective-modals',
    title: 'Subjective modal verbs',
    tagline: 'Modal verbs that report, guess or doubt',
    level: LEVEL,
    summary:
      'Besides ability and obligation, modal verbs can express how sure the speaker is. sollen = people say, wollen = he or she claims, müssen = I am sure, dürfte = probably, könnte = perhaps. For something earlier use the infinitive perfect: gewesen sein, gemacht haben.',
    sections: [
      section(
        'what',
        'Two meanings of one verb',
        p(
          'Every modal verb has an **objective** meaning (permission, ability, obligation: Er muss arbeiten = he has to work) and many have a **subjective** meaning, where the speaker says how certain a statement is. The subject is not “forced” to do anything; the speaker is **assessing** the situation.',
        ),
        examples(
          ['Er muss arbeiten.', 'He has to work. (objective)'],
          ['Er muss krank sein.', 'He must be ill. (subjective: I am sure)'],
          [
            'Der Minister soll zurückgetreten sein.',
            'The minister is said to have resigned. (subjective: people say)',
          ],
        ),
      ),
      section(
        'meanings',
        'The meanings',
        table(
          'Subjective use of the modal verbs.',
          ['Modal verb', 'The speaker says …', 'Example'],
          [
            ['müssen', 'I am almost sure (a logical conclusion)', 'Das muss ein Irrtum sein.'],
            ['dürfte', 'It is probable', 'Sie dürfte bald da sein.'],
            ['könnte', 'It is possible, perhaps', 'Das könnte stimmen.'],
            ['kann', 'It is possible (nicht: it is impossible)', 'Er kann es nicht gewesen sein.'],
            [
              'sollen',
              'People say / it is reported (the speaker doubts or does not vouch for it)',
              'Das Café soll sehr gut sein.',
            ],
            ['wollen', 'The subject claims, says of himself', 'Er will nichts gewusst haben.'],
          ],
        ),
        p(
          '**sollen** and **wollen** are the “hearsay” modals. With sollen someone else says it; with wollen the **subject** himself or herself says it: Er **will** reich gewesen sein (he claims it), Er **soll** reich gewesen sein (people say so).',
        ),
      ),
      section(
        'past',
        'Talking about the past',
        p(
          'The modal stays in the **present tense** (or Konjunktiv II: dürfte, könnte), and the **infinitive perfect** shows that the event is earlier: Partizip II + **haben** or **sein**.',
        ),
        table(
          'Present and past with the subjective modals.',
          ['Now', 'Earlier'],
          [
            ['Er muss krank sein.', 'Er muss krank gewesen sein.'],
            ['Sie soll viel verdienen.', 'Sie soll viel verdient haben.'],
            ['Er will nichts wissen.', 'Er will nichts gewusst haben.'],
            ['Das dürfte ein Fehler sein.', 'Das dürfte ein Fehler gewesen sein.'],
          ],
        ),
      ),
      section(
        'compare',
        'Same verb, different meaning',
        compare(
          {
            title: 'Objective',
            question: 'Obligation, permission, ability',
            example: 'Sie soll das Zimmer aufräumen. (someone told her to)',
          },
          {
            title: 'Subjective',
            question: 'Assessment by the speaker',
            example: 'Sie soll sehr reich sein. (people say so)',
          },
        ),
        p(
          'Other words can carry the same meanings: **wahrscheinlich, vermutlich, sicherlich, angeblich** (soll / will), **anscheinend**. The modal verb makes the sentence shorter and more formal.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er muss nicht krank sein (to say “he cannot be ill”)  ✓ Er kann nicht krank sein.',
          '✗ Er muss krank gewesen.  ✓ Er muss krank gewesen sein.',
          '✗ Er hat krank sein müssen. (this is the objective meaning: “he had to be ill”)  ✓ Er muss krank gewesen sein.',
        ),
      ),
    ],
    related: ['modal-verbs', 'perfekt'],
    sources: [S.modalVerb, S.infinitive],
  },
  {
    id: 'nominal-style',
    title: 'Nominal style',
    tagline: 'Packing a clause into a noun phrase',
    level: LEVEL,
    summary:
      'Formal and written German often replaces a clause with a noun phrase: Weil es regnet → wegen des Regens; Als er ankam → bei seiner Ankunft; Indem man liest → durch Lesen. Nouns in -ung, -heit, -keit and -ion do the work, and the preposition shows the logic.',
    sections: [
      section(
        'what',
        'Verbal style and nominal style',
        p(
          'In **verbal style** the action is a verb: Der Minister weigerte sich. In **nominal style** it becomes a noun, and a general verb is added: Die **Weigerung** des Ministers führte zu Streit. Nominal style is compact (it saves subordinate clauses) and typical of administrative, scientific and technical texts, news reports and formal letters. In speech and stories German is mostly verbal.',
        ),
        examples(
          [
            'Der Minister weigerte sich, was zu Streit führte.',
            'The minister refused, which led to a dispute. (verbal)',
          ],
          [
            'Die Weigerung des Ministers führte zu Streit.',
            'The minister’s refusal led to a dispute. (nominal)',
          ],
        ),
      ),
      section(
        'clauses',
        'From clause to noun phrase',
        table(
          'The logic stays; the preposition carries it.',
          ['Clause (verbal)', 'Noun phrase (nominal)'],
          [
            ['Weil es stark regnete, …', 'Wegen / Aufgrund des starken Regens, …'],
            ['Obwohl es regnete, …', 'Trotz des Regens, …'],
            ['Als er ankam, …', 'Bei seiner Ankunft, …'],
            ['Nachdem sie das Studium beendet hatte, …', 'Nach Abschluss des Studiums, …'],
            ['Während der Film lief, …', 'Während des Films, …'],
            ['Indem man viel liest, lernt man …', 'Durch viel Lesen lernt man …'],
            ['Wenn Probleme auftreten, …', 'Bei Problemen, …'],
            ['Er kam, um zu helfen.', 'Er kam zur Hilfe.'],
            ['Ohne dass sie fragte, …', 'Ohne ihre Frage, …'],
          ],
        ),
        p(
          'The subject of the clause becomes a **genitive** attribute (or von + dative): dass die Preise steigen → **der Anstieg der Preise**; dass der Minister ankündigte → **die Ankündigung des Ministers**.',
        ),
      ),
      section(
        'nouns',
        'The nouns you need',
        list(
          '**-ung** from verbs: entscheiden → die Entscheidung, entwickeln → die Entwicklung, verbessern → die Verbesserung.',
          '**-heit / -keit** from adjectives: wahr → die Wahrheit, möglich → die Möglichkeit, flexibel → die Flexibilität.',
          '**-ion / -ation / -ierung** from foreign verbs: reduzieren → die Reduktion, informieren → die Information.',
          '**No suffix** (the stem of the verb): beginnen → der Beginn, verlaufen → der Verlauf, abreisen → die Abreise; or the infinitive as a noun: das Lesen.',
        ),
        p(
          'Often a **general verb** is needed to replace the verb you removed: erfolgen (take place), stattfinden, vornehmen (carry out), führen zu, sich ergeben. “Die Prüfung erfolgt durch den Lehrer” replaces “Der Lehrer prüft”.',
        ),
      ),
      section(
        'phrases',
        'Noun-verb phrases',
        p(
          'A typical feature of nominal style is the **noun-verb phrase** (Funktionsverbgefüge): a noun plus a verb with little meaning of its own. Many have a one-word equivalent, but not all.',
        ),
        table(
          'Noun-verb phrases and their one-word forms.',
          ['Phrase', 'Verb', 'Meaning'],
          [
            ['in Betracht ziehen', 'erwägen', 'to consider'],
            ['Kritik üben an', 'kritisieren', 'to criticise'],
            ['zur Verfügung stellen', '–', 'to make available'],
            ['Rücksicht nehmen auf', '–', 'to take into consideration'],
            ['in Kraft treten', '–', 'to come into force'],
            ['zur Anzeige bringen', 'anzeigen', 'to report to the police'],
          ],
        ),
        tip(
          'Style',
          'Too many nominal phrases make a text stiff. Use nominal style for formal texts and to shorten long sentences; switch back to verbs when you want the text to sound lively.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ wegen dem Regen (in a formal text)  ✓ wegen des Regens',
          '✗ nach Abschluss das Studiums  ✓ nach Abschluss des Studiums',
          '✗ Die Entwicklung der neue Technik  ✓ Die Entwicklung der neuen Technik',
        ),
      ),
    ],
    related: ['formal-connectors', 'conjunctions'],
    sources: [S.nominalStyle, S.supportVerb, S.prepositions],
  },
  {
    id: 'es-functions',
    title: 'The many jobs of es',
    tagline: 'Required es, pointer es and filler es',
    level: LEVEL,
    summary:
      'es can be required by the verb (Es regnet. Es geht um …), a pointer to a clause that follows (Ich bereue es, dass …), or an optional filler in position 1 (Es kamen viele Gäste). The filler disappears when another element takes position 1.',
    sections: [
      section(
        'three',
        'Three different es',
        p(
          'The small word **es** has three jobs in German, and each one follows its own rule. The question to ask is: **can I leave es out?**',
        ),
        table(
          'The three functions of es.',
          ['Function', 'What it does', 'Example'],
          [
            [
              'Required (formal subject)',
              'The verb needs es; it has no meaning',
              'Es regnet. Es gibt ein Problem.',
            ],
            [
              'Pointer (Korrelat)',
              'Points ahead to a dass- or zu-clause',
              'Ich bereue es, dass ich nichts gesagt habe.',
            ],
            [
              'Filler (Platzhalter)',
              'Fills position 1 so the subject can follow the verb',
              'Es kamen viele Gäste.',
            ],
          ],
        ),
      ),
      section(
        'required',
        'es is required',
        p(
          'Weather verbs, expressions of time and a long list of fixed phrases have **es** as a formal subject. It cannot be dropped, and it does not refer to anything.',
        ),
        list(
          '**Weather and time:** Es regnet. Es ist spät. Es wird dunkel.',
          '**Existence:** Es gibt keinen Grund zur Sorge.',
          '**Fixed phrases:** Es geht um die Zukunft. Es handelt sich um einen Fehler. Es kommt auf den Preis an. Es dauert lange. Es fällt mir schwer, …',
          '**Feelings and senses:** Es freut mich. Es tut mir leid. Mir ist kalt, but Es ist kalt.',
        ),
      ),
      section(
        'pointer',
        'es points to a clause',
        p(
          'A **dass-clause** or a **zu-infinitive** can be the object of a verb. Then **es** may stand in the main clause as a pointer. With some verbs it is required, with others it is optional.',
        ),
        examples(
          [
            'Ich finde es toll, dass du kommst.',
            'I think it’s great that you are coming. (es required)',
          ],
          [
            'Ich bereue (es), dass ich nichts gesagt habe.',
            'I regret that I said nothing. (es optional)',
          ],
          ['Er hat es geschafft, das Rennen zu gewinnen.', 'He managed to win the race.'],
          ['Es freut mich, dass du kommst.', 'I am glad that you are coming.'],
        ),
        p(
          'The pointer **disappears** when the clause moves to position 1: **Dass du kommst, freut mich.** (not “… freut es mich”). With verbs that need a preposition the pointer is **da(r)- + preposition**: Ich warte **darauf**, dass du anrufst.',
        ),
      ),
      section(
        'filler',
        'es as a filler in position 1',
        p(
          'German main clauses need something in position 1. When the subject comes after the verb and nothing else is in front, **es** can fill position 1. The verb agrees with the **real subject**, not with es.',
        ),
        table(
          'The filler es appears only in position 1.',
          ['With filler es', 'Another element in position 1'],
          [
            ['Es kamen viele Gäste.', 'Heute kamen viele Gäste.'],
            ['Es wird hier getanzt.', 'Hier wird getanzt.'],
            ['Es fehlt noch ein Zeuge.', 'Noch fehlt ein Zeuge.'],
          ],
        ),
        p(
          'In the second column es is gone; it is **never** used in the middle of the sentence for this purpose.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Heute es kamen viele Gäste.  ✓ Heute kamen viele Gäste.',
          '✗ Dass du kommst, freut es mich.  ✓ Dass du kommst, freut mich.',
          '✗ Es kam viele Gäste.  ✓ Es kamen viele Gäste. (the verb agrees with the subject)',
          '✗ Regnet.  ✓ Es regnet. (the formal subject is required)',
        ),
      ),
    ],
    related: ['word-order', 'pronouns'],
    sources: [S.expletive, S.conjunctionAdverb],
  },
  {
    id: 'intensifiers',
    title: 'Graduating adjectives',
    tagline: 'How strong is it? ziemlich, sehr, äußerst, zu',
    level: LEVEL,
    summary:
      'Adverbs set the strength of an adjective: ziemlich, recht, ganz < sehr, äußerst, höchst, überaus < zu (too much). They stand right before the adjective and are never declined; only the adjective takes the ending.',
    sections: [
      section(
        'what',
        'What they do',
        p(
          'A **Steigerungspartikel** (intensifier) says that a property is below, at or above the level the speaker considers normal. It stands **directly before** the adjective (or another adverb) and does not change its form. The adjective takes the ending as usual.',
        ),
        examples(
          ['ein äußerst netter Kollege', 'an extremely nice colleague'],
          ['Das ist ziemlich teuer.', 'That is rather expensive.'],
          ['Die Aufgabe ist höchst anspruchsvoll.', 'The task is highly demanding.'],
        ),
      ),
      section(
        'scale',
        'The scale',
        table(
          'Intensifiers from weak to excessive.',
          ['Strength', 'Words', 'Example'],
          [
            ['a little', 'etwas, ein bisschen, ein wenig', 'Das Zimmer ist etwas klein.'],
            ['moderately', 'ziemlich, recht, ganz, einigermaßen', 'Der Film war recht gut.'],
            [
              'very',
              'sehr, wirklich, besonders, ausgesprochen',
              'Sie ist ausgesprochen freundlich.',
            ],
            [
              'extremely',
              'äußerst, höchst, überaus, ungemein, außerordentlich',
              'Das Risiko ist äußerst gering.',
            ],
            ['too much', 'zu, allzu, viel zu', 'Die Suppe ist viel zu salzig.'],
          ],
        ),
        p(
          'Careful with **ganz**: **ganz gut** means “fairly good”, not “completely good”. The word **genug** (enough) follows the adjective: Das ist **groß genug**.',
        ),
      ),
      section(
        'comparative',
        'With comparatives',
        p(
          '**sehr** does not combine with a comparative. Use **viel, weit, deutlich, wesentlich** or **noch** (and **etwas** for a small difference).',
        ),
        table(
          'Intensifiers with the comparative and the superlative.',
          ['Form', 'Example'],
          [
            ['viel / weit / deutlich + comparative', 'Das Auto ist viel schneller.'],
            ['noch + comparative', 'Das Wetter wird noch schlechter.'],
            ['etwas + comparative', 'Mein Bruder ist etwas älter.'],
            [
              'bei Weitem / aller- + superlative',
              'Er ist bei Weitem der beste Spieler. Das ist das allerbeste Ergebnis.',
            ],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ ein sehr besserer Plan  ✓ ein viel besserer Plan',
          '✗ ein äußerstes netter Kollege  ✓ ein äußerst netter Kollege (äußerst is not declined)',
          '✗ genug groß  ✓ groß genug',
        ),
        tip(
          'Variety',
          'Repeating sehr in every sentence sounds flat. Use besonders, äußerst or ausgesprochen for emphasis, and recht or ziemlich to soften a statement.',
        ),
      ),
    ],
    related: ['comparison'],
    sources: [S.degreeParticle],
  },
  {
    id: 'modal-alternatives',
    title: 'sein … zu and sich lassen',
    tagline: 'Formal ways to say must, can and may be done',
    level: LEVEL,
    summary:
      'Formal German often replaces a modal verb: sein + zu + infinitive (must / can be done), sich lassen + infinitive (can be done), haben + zu + infinitive (must do). These structures often express the passive with a modal verb.',
    sections: [
      section(
        'overview',
        'The structures',
        p(
          'Instead of **muss / kann … werden** (passive with a modal verb), instructions, laws and reports prefer a short active form. Three patterns cover most cases.',
        ),
        table(
          'Modal verb and its alternative.',
          ['Meaning', 'With a modal', 'Alternative'],
          [
            [
              'must be done',
              'Der Antrag muss bis Freitag eingereicht werden.',
              'Der Antrag ist bis Freitag einzureichen.',
            ],
            [
              'can be done',
              'Der Fehler kann leicht behoben werden.',
              'Der Fehler ist leicht zu beheben.',
            ],
            ['can be done', 'Das Problem kann gelöst werden.', 'Das Problem lässt sich lösen.'],
            [
              'cannot be done',
              'Das kann nicht erklärt werden.',
              'Das ist nicht zu erklären. / Das lässt sich nicht erklären.',
            ],
            [
              'must do (active)',
              'Die Mitglieder müssen den Beitrag zahlen.',
              'Die Mitglieder haben den Beitrag zu zahlen.',
            ],
          ],
        ),
      ),
      section(
        'sein-zu',
        'sein + zu + infinitive',
        p(
          'The subject is the thing that is done, as in the passive. The meaning is **“must be”** (obligation) or **“can be”** (possibility), and context decides. **nicht zu** often means “cannot be”. With a separable verb **zu** goes between the prefix and the verb: **einzureichen, abzugeben, anzumelden**.',
        ),
        examples(
          [
            'Die Anmeldung ist bis zum 1. Mai abzugeben.',
            'The registration must be handed in by 1 May.',
          ],
          ['Der Unterschied ist kaum zu erkennen.', 'The difference can hardly be seen.'],
          ['Das ist nicht zu übersehen.', 'That cannot be overlooked.'],
        ),
      ),
      section(
        'lassen',
        'sich lassen + infinitive',
        p(
          '**sich lassen** means **“can be done”** and nothing more, which makes it clearer than sein … zu. The thing that is done is the subject; the person who does it is not mentioned. **nicht** makes it “cannot be done”. Add an adverb for the manner: **gut, leicht, schwer**.',
        ),
        examples(
          ['Das Fenster lässt sich nicht öffnen.', 'The window cannot be opened.'],
          ['Das Buch lässt sich gut lesen.', 'The book reads well.'],
          ['Daraus lässt sich schließen, dass …', 'From this one can conclude that …'],
        ),
      ),
      section(
        'haben',
        'haben, bleiben and stehen + zu',
        list(
          '**haben + zu** is **active** and means “must”: Sie haben die Gebühr zu zahlen. (= Sie müssen die Gebühr zahlen.) A passive meaning needs sein + zu.',
          '**bleiben + zu** means “remains to be done”: Es bleibt abzuwarten, ob … (it remains to be seen whether).',
          '**stehen + zu** means “is to be expected”: Es steht zu erwarten, dass … (formal).',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Der Antrag ist einzureichen werden.  ✓ Der Antrag ist einzureichen.',
          '✗ Der Antrag ist zu einreichen.  ✓ Der Antrag ist einzureichen. (zu inside the separable verb)',
          '✗ Das lässt sich nicht gelöst.  ✓ Das lässt sich nicht lösen.',
        ),
        tip(
          'Where you see them',
          'These patterns are typical of forms, rules, instructions and official letters. In conversation, people use the modal verb or man kann.',
        ),
      ),
    ],
    related: ['modal-verbs', 'separable-verbs'],
    sources: [S.gerundive, S.modalVerb, S.infinitive],
  },
  {
    id: 'participial-attributes',
    title: 'Participles before nouns',
    tagline: 'die steigenden Preise, das gelöste Problem',
    level: LEVEL,
    summary:
      'Partizip I (infinitive + d) is active and happening now: die steigenden Preise. Partizip II is completed or passive: die gestiegenen Preise, das gelöste Problem. zu + Partizip I means must or can be done: die zu zahlende Rechnung. All take adjective endings.',
    sections: [
      section(
        'forms',
        'Forms and meaning',
        p(
          'A participle can stand before a noun like an adjective. Which participle you choose tells the reader who does what, and when.',
        ),
        table(
          'Participles used as attributes.',
          ['Form', 'Meaning', 'Example'],
          [
            [
              'Partizip I (steigend)',
              'active, at the same time',
              'die steigenden Preise (prices that are rising)',
            ],
            [
              'Partizip II of a transitive verb (gelöst)',
              'passive, completed',
              'das gelöste Problem (the problem that has been solved)',
            ],
            [
              'Partizip II of a verb with sein (gestiegen)',
              'active, completed',
              'die gestiegenen Preise (prices that have risen)',
            ],
            [
              'zu + Partizip I (zu zahlend)',
              'must or can be done',
              'die zu zahlende Rechnung (the bill that has to be paid)',
            ],
          ],
        ),
        p(
          'The **Partizip I** is the infinitive + **d**: steigen → steigend, lächeln → lächelnd, sein → seiend, tun → tuend. It is always active.',
        ),
      ),
      section(
        'endings',
        'Endings',
        p(
          'The participle takes the usual adjective endings. After der / die / das it ends in **-e** or **-en**, after ein it follows the pattern of the article.',
        ),
        table(
          'Participles with adjective endings (nominative).',
          ['Article', 'masculine', 'feminine', 'neuter', 'plural'],
          [
            [
              'after the definite article',
              'der steigende Preis',
              'die wachsende Bedeutung',
              'das gelöste Problem',
              'die gestiegenen Preise',
            ],
            [
              'after ein-',
              'ein steigender Preis',
              'eine wachsende Bedeutung',
              'ein gelöstes Problem',
              'keine gestiegenen Preise',
            ],
            [
              'without article',
              'steigender Preis',
              'wachsende Bedeutung',
              'gelöstes Problem',
              'gestiegene Preise',
            ],
          ],
        ),
      ),
      section(
        'which',
        'Which participle?',
        list(
          '**Transitive verb:** Partizip I = active (die lösende Methode = the method that solves), Partizip II = passive (das gelöste Problem = the problem that is solved). For “must be solved” use zu + Partizip I: das zu lösende Problem.',
          '**Verb with sein (movement, change):** only Partizip II: der gestiegene Preis, der abgereiste Gast.',
          '**Intransitive verb with haben:** only Partizip I: der schlafende Mann, die lachenden Kinder.',
        ),
        examples(
          ['Der Antrag wurde geprüft. → der geprüfte Antrag', 'the examined application'],
          ['Die Preise steigen. → die steigenden Preise', 'the rising prices'],
          [
            'Die Rechnung muss bezahlt werden. → die zu bezahlende Rechnung',
            'the bill that has to be paid',
          ],
        ),
      ),
      section(
        'nouns',
        'Participles as nouns',
        p(
          'Many participles have become nouns and keep the adjective ending: **der Studierende** (die Studierende, die Studierenden), **der / die Auszubildende**, **der Angestellte**, **der Vorsitzende**, **das Gesagte**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ die lösende Aufgabe (if you mean: the task that has to be solved)  ✓ die zu lösende Aufgabe',
          '✗ der geschlafene Mann  ✓ der schlafende Mann',
          '✗ die steigende Preise  ✓ die steigenden Preise',
          '✗ ein gestiegende Preis  ✓ ein gestiegener Preis',
        ),
      ),
    ],
    related: ['perfekt'],
    sources: [S.participle1, S.participle2, S.gerundive, S.participialConstruction],
  },
  {
    id: 'prefix-verbs',
    title: 'Separable or inseparable?',
    tagline: 'Which prefix splits off, and what happens to the participle',
    level: LEVEL,
    summary:
      'Stressed prefixes (an-, auf-, aus-, ein-, mit-, vor-) split off: Er gibt auf. Unstressed prefixes (be-, ent-, er-, ver-, zer-, miss-) never split and the participle has no ge-: verzichtet. über-, um-, unter-, durch- can be both and change the meaning.',
    sections: [
      section(
        'rule',
        'The rule',
        p(
          'Whether a prefix splits off is decided by the **stress**. A prefix that carries the stress is **separable**; a prefix that is unstressed is **inseparable** and stays on the verb.',
        ),
        table(
          'Three groups of prefixes.',
          ['Group', 'Prefixes', 'Present', 'Perfekt', 'zu-infinitive'],
          [
            [
              'Separable (stressed)',
              'ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-',
              'Er gibt auf.',
              'aufgegeben',
              'aufzugeben',
            ],
            [
              'Inseparable (unstressed)',
              'be-, emp-, ent-, er-, ge-, miss-, ver-, zer-',
              'Er verzichtet.',
              'verzichtet',
              'zu verzichten',
            ],
            [
              'Both',
              'durch-, über-, um-, unter-, hinter-, wieder-',
              'see below',
              'see below',
              'see below',
            ],
          ],
        ),
      ),
      section(
        'both',
        'Prefixes that can be both',
        p(
          'With **durch-, über-, um-, unter-** the stress decides. Separable (stress on the prefix) usually keeps the **literal** meaning; inseparable (stress on the verb) usually has a **figurative** meaning.',
        ),
        table(
          'The same verb in two versions.',
          ['Separable (literal)', 'Inseparable (figurative)'],
          [
            [
              'Der Fährmann setzt uns über. (ferries us across)',
              'Sie übersetzt den Text. (translates)',
            ],
            [
              'Er fährt das Schild um. (knocks it over)',
              'Er umfährt das Schild. (drives around it)',
            ],
            [
              'Ich lese das Buch durch. (read it through)',
              'Ich durchschaue den Plan. (see through it)',
            ],
            ['Sie holt das Buch wieder. (fetches it again)', 'Sie wiederholt die Frage. (repeats)'],
          ],
        ),
        p(
          'In the Perfekt: **übergesetzt / umgefahren / durchgelesen / wiedergeholt** (ge- in the middle) versus **übersetzt / umfahren / durchschaut / wiederholt** (no ge-).',
        ),
      ),
      section(
        'meaning',
        'What the unstressed prefixes mean',
        table(
          'Common meanings of inseparable prefixes.',
          ['Prefix', 'Idea', 'Examples'],
          [
            [
              'be-',
              'makes a verb transitive or adds a goal',
              'steigen → besteigen, antworten → beantworten',
            ],
            ['ent-', 'away from, start', 'entfernen, entstehen, entdecken'],
            ['er-', 'reach a result, start', 'erreichen, erklären, erblühen'],
            ['ver-', 'wrong, away, change, finish', 'verlaufen, verkaufen, verbrennen, verblühen'],
            ['zer-', 'into pieces', 'zerbrechen, zerstören, zerreißen'],
            ['miss-', 'wrong, bad', 'missverstehen, missbrauchen, misslingen'],
          ],
        ),
        p(
          'The participle of all inseparable verbs has **no ge-**: besucht, entdeckt, erklärt, verkauft, zerstört, **missverstanden**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er hat geverzichtet.  ✓ Er hat verzichtet. (no ge- on inseparable verbs)',
          '✗ Er hat das Buch gewiederholt.  ✓ Er hat das Buch wiederholt.',
          '✗ Ich habe dich gemissverstanden.  ✓ Ich habe dich missverstanden.',
        ),
        tip(
          'How to know',
          'Listen for the stress: ÜBERsetzen (ferry) vs übersETzen (translate). A dictionary shows the stress, and it tells you whether the verb is separable.',
        ),
      ),
    ],
    related: ['separable-verbs', 'perfekt'],
    sources: [S.separableVerb, S.participle2],
  },
  {
    id: 'unreal-consecutive',
    title: 'so … dass and zu … als dass',
    tagline: 'Real results and impossible results',
    level: LEVEL,
    summary:
      'so … dass reports a real result. zu … als dass + Konjunktiv II says the result is impossible (too … to). sodass introduces a plain result. The clause after dass / sodass / als dass has the verb at the end.',
    sections: [
      section(
        'what',
        'Consequence clauses',
        p(
          'A **Konsekutivsatz** says what follows from a quality or an event. German has patterns for a **real** result (it happened) and an **unreal** result (it is impossible or does not happen).',
        ),
        table(
          'Patterns for results.',
          ['Pattern', 'Meaning', 'Example'],
          [
            [
              'so + adjective + dass',
              'real result of a degree',
              'Es war so heiß, dass alle ins Wasser gingen.',
            ],
            [
              'sodass / so dass',
              'real result (a fact)',
              'Es regnete stark, sodass die Straße gesperrt wurde.',
            ],
            [
              'zu + adjective + als dass + Konjunktiv II',
              'impossible result',
              'Er ist zu klug, als dass er darauf hereinfiele.',
            ],
            [
              'zu + adjective + um … zu',
              'impossible result, same subject',
              'Er ist zu klug, um darauf hereinzufallen.',
            ],
            [
              'adjective + genug + um … zu',
              'possible result',
              'Sie ist alt genug, um allein zu reisen.',
            ],
          ],
        ),
      ),
      section(
        'real',
        'The real result',
        p(
          'With **so … dass** the word **so** stands before the adjective in the main clause and **dass** starts the result clause (verb at the end). A noun can be pointed to with **solch- / derart / dermaßen**. **sodass** is written as one word or two and introduces a result that does not depend on a degree.',
        ),
        examples(
          [
            'Das Buch war so spannend, dass ich es in einer Nacht las.',
            'The book was so exciting that I read it in one night.',
          ],
          [
            'Sie sprach so leise, dass niemand sie verstand.',
            'She spoke so quietly that nobody understood her.',
          ],
        ),
      ),
      section(
        'unreal',
        'zu … als dass',
        p(
          'To say that a quality is **too strong for** something to happen, German uses **zu** + adjective in the main clause and **als dass** in the result clause. The verb goes to the end and is in **Konjunktiv II**, because the result is unreal. A modal verb is common: **könnte, würde, dürfte**.',
        ),
        examples(
          [
            'Der Text ist zu schwierig, als dass ich ihn verstehen könnte.',
            'The text is too difficult for me to understand it.',
          ],
          [
            'Es ist zu spät, als dass wir noch etwas ändern könnten.',
            'It is too late for us to change anything.',
          ],
          [
            'Der Fehler war zu groß, als dass man ihn hätte übersehen können.',
            'The mistake was too big to have been overlooked.',
          ],
        ),
        p(
          'When both clauses have the **same subject**, the shorter version **zu … um … zu** is usual: Der Text ist zu schwierig, **um** ihn **zu** verstehen. With different subjects you need **als dass**.',
        ),
      ),
      section(
        'compare',
        'sodass or damit?',
        compare(
          {
            title: 'sodass',
            question: 'What is the result? (a fact)',
            example: 'Er sprach laut, sodass alle ihn hörten.',
          },
          {
            title: 'damit',
            question: 'What is the purpose? (an intention)',
            example: 'Er sprach laut, damit alle ihn hören.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Es ist zu schwer, dass ich es verstehe.  ✓ Es ist zu schwer, als dass ich es verstehen könnte.',
          '✗ Er ist zu müde, als dass er arbeitet.  ✓ Er ist zu müde, als dass er arbeiten könnte.',
          '✗ so schwer, als dass  ✓ so schwer, dass',
        ),
      ),
    ],
    related: ['conjunctions', 'modal-verbs'],
    sources: [S.consecutiveClause, S.infinitive],
  },
  {
    id: 'concessive-restrictive',
    title: 'wenngleich, es sei denn',
    tagline: 'Conceding and restricting a statement',
    level: LEVEL,
    summary:
      'obgleich / obschon / wenngleich work like obwohl (verb at the end). Restrictions: es sei denn (unless, verb in position 2), außer wenn and nur dass (verb at the end). so sehr … auch means no matter how much.',
    sections: [
      section(
        'concession',
        'Concession: even though',
        p(
          'A **concessive clause** names something that would normally prevent the main statement, but does not. **obwohl** is the usual word; formal and written German adds several more. They all send the verb to the end.',
        ),
        table(
          'Concessive conjunctions.',
          ['Conjunction', 'Use', 'Example'],
          [
            ['obwohl', 'neutral, common', 'Obwohl er müde war, arbeitete er weiter.'],
            [
              'obgleich, obschon, wenngleich',
              'written, formal',
              'Wenngleich der Plan Risiken birgt, ist er sinnvoll.',
            ],
            ['wenn auch', 'concedes a point', 'Er hat gewonnen, wenn auch knapp.'],
            ['auch wenn', 'even if (hypothetical)', 'Auch wenn es regnet, gehen wir spazieren.'],
          ],
        ),
        p(
          '**obwohl** is for a fact (he was tired). **auch wenn** can introduce a fact as well, but it is the normal choice for “even if” (it might rain). The main clause needs no trotzdem; the concessive clause and the main clause are already in contrast.',
        ),
      ),
      section(
        'sehr-auch',
        'so sehr … auch, wie … auch',
        p(
          'These constructions mean **“no matter how …”**. The word order is that of a subordinate clause (verb at the end), and **auch** follows in the clause. The main clause that follows starts with the verb.',
        ),
        examples(
          [
            'So sehr er sich auch bemühte, er konnte sie nicht überzeugen.',
            'However hard he tried, he could not convince her.',
          ],
          [
            'Wie klug er auch ist, diese Aufgabe überfordert ihn.',
            'No matter how clever he is, this task is too much for him.',
          ],
        ),
      ),
      section(
        'zwar',
        'zwar … aber',
        p(
          '**zwar** admits a point and **aber / jedoch / allerdings** then restricts it. The verb is in position 2 in both parts (zwar is an adverb, aber is a conjunction in position 0).',
        ),
        examples(
          [
            'Er ist zwar jung, aber sehr erfahren.',
            'He is young, it is true, but very experienced.',
          ],
          [
            'Das Auto ist zwar teuer, es verbraucht jedoch wenig.',
            'The car is expensive, but it uses little.',
          ],
        ),
      ),
      section(
        'restriction',
        'Restriction: unless, except that',
        table(
          'Restricting words.',
          ['Word', 'Meaning', 'Verb', 'Example'],
          [
            ['es sei denn', 'unless', 'position 2', 'Wir kommen, es sei denn, es schneit.'],
            [
              'es sei denn, dass',
              'unless',
              'at the end',
              'Wir kommen, es sei denn, dass es schneit.',
            ],
            ['außer wenn', 'except when', 'at the end', 'Wir kommen, außer wenn es schneit.'],
            ['außer dass', 'except that', 'at the end', 'Es war toll, außer dass es regnete.'],
            [
              'nur dass',
              'only (the problem is) that',
              'at the end',
              'Die Idee ist gut, nur dass sie zu teuer ist.',
            ],
          ],
          0,
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Obwohl er war müde, …  ✓ Obwohl er müde war, …',
          '✗ Wenngleich er müde war, aber er arbeitete.  ✓ Wenngleich er müde war, arbeitete er. (no aber)',
          '✗ Wir kommen, außer wenn schneit es.  ✓ Wir kommen, außer wenn es schneit.',
        ),
        compare(
          {
            title: 'Concession',
            question: 'Something should stop it, but does not',
            example: 'Obwohl es regnet, gehen wir.',
          },
          {
            title: 'Restriction',
            question: 'An exception to the statement',
            example: 'Wir gehen, es sei denn, es regnet.',
          },
        ),
      ),
    ],
    related: ['formal-connectors', 'conjunctions'],
    sources: [S.concessiveClause, S.conjunction],
  },
];
