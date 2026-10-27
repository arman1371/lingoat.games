import { compare, examples, list, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { C1_SOURCES as S } from './sources-c1';

const LEVEL = 'c1-2';

export const C12_TOPICS: GrammarTopic[] = [
  {
    id: 'adjective-complements',
    title: 'Adjectives with prepositions',
    tagline: 'stolz auf, abhängig von, bereit zu',
    level: LEVEL,
    summary:
      'Many adjectives and participles need a fixed preposition and a case, just like verbs: stolz auf (+ Akk.), abhängig von (+ Dat.), angewiesen auf (+ Akk.), bereit zu (+ Dat.), überzeugt von (+ Dat.). Learn them with the case; with a clause use da(r)- + preposition: Ich bin stolz darauf, dass …',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Just as verbs have fixed prepositions (warten **auf**, denken **an**), many adjectives and participles do too. The preposition is part of the adjective and cannot be chosen freely, and it **decides the case** of the noun that follows.',
        ),
        examples(
          ['Sie ist stolz auf ihre Arbeit.', 'She is proud of her work. (auf + Akk.)'],
          ['Er ist von dem Plan überzeugt.', 'He is convinced of the plan. (von + Dat.)'],
          ['Wir sind auf Ihre Hilfe angewiesen.', 'We depend on your help. (auf + Akk.)'],
        ),
      ),
      section(
        'list',
        'Adjectives worth learning',
        table(
          'Adjectives and participles with a fixed preposition and case.',
          ['With + accusative', 'With + dative'],
          [
            [
              'stolz auf, eifersüchtig auf, neugierig auf, gespannt auf',
              'abhängig von, überzeugt von, begeistert von, enttäuscht von',
            ],
            [
              'angewiesen auf, gewöhnt an, verliebt in, verwickelt in',
              'zufrieden mit, einverstanden mit, vertraut mit',
            ],
            [
              'verantwortlich für, dankbar für, bekannt für, typisch für, offen für',
              'fähig zu, bereit zu, schuld an, reich an',
            ],
            [
              'froh über, enttäuscht über, erstaunt über',
              'arm an, beteiligt an, interessiert an, verschieden von',
            ],
          ],
        ),
        p(
          'The preposition and the case do not change, but the **meaning** can depend on it: **enttäuscht von** (a person or the result) and **enttäuscht über** (a fact) are both used. A good dictionary lists the pattern next to the adjective.',
        ),
      ),
      section(
        'clauses',
        'With a dass-clause or zu-infinitive',
        p(
          'When the complement is a whole clause, **da(r)- + preposition** points to it, just as with verbs: **darauf, davon, dafür, daran, darüber, damit, dazu**. It can be left out before a zu-infinitive with some adjectives (bereit, fähig).',
        ),
        table(
          'Noun, pronoun, clause.',
          ['With a noun', 'With a clause'],
          [
            ['Ich bin stolz auf meinen Sohn.', 'Ich bin stolz darauf, dass er gewonnen hat.'],
            [
              'Wir sind auf die Spenden angewiesen.',
              'Wir sind darauf angewiesen, dass alle mithelfen.',
            ],
            [
              'Er ist von dem Plan überzeugt.',
              'Er ist davon überzeugt, dass der Plan funktioniert.',
            ],
            ['Sie ist zur Mitarbeit bereit.', 'Sie ist bereit, Verantwortung zu übernehmen.'],
          ],
        ),
        p(
          'For a **question**, use wo(r)- for things and the preposition + wen / wem for people: **Worauf** ist sie stolz? – **Auf wen** ist sie stolz?',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ stolz für ihre Arbeit  ✓ stolz auf ihre Arbeit',
          '✗ abhängig auf dem Chef  ✓ abhängig vom Chef',
          '✗ Ich bin stolz, dass du gewonnen hast.  ✓ Ich bin stolz darauf, dass du gewonnen hast.',
          '✗ Ich bin zufrieden von meiner Arbeit.  ✓ Ich bin zufrieden mit meiner Arbeit.',
        ),
      ),
    ],
    related: ['accusative', 'dative'],
    sources: [S.government, S.prepositions],
  },
  {
    id: 'advanced-connectors',
    title: 'Advanced connectors',
    tagline: 'Linking sentences by meaning and by word order',
    level: LEVEL,
    summary:
      'Adverbs like allerdings, vielmehr, folglich, andernfalls, infolgedessen, mittlerweile take position 1 and the verb follows. Conjunctions like sofern, falls, wenngleich, indem, sodass, ohne dass, dadurch, dass send the verb to the end of their clause.',
    sections: [
      section(
        'types',
        'Check the type first',
        p(
          'For every connector you need to know **which kind it is**, because that decides where the verb goes. At C1 you meet many more of them, but the three types are the same as before.',
        ),
        table(
          'The three types.',
          ['Type', 'Position', 'Verb', 'Example'],
          [
            [
              'Conjunction (und, aber, denn, sondern, oder)',
              'position 0',
              'after the subject',
              'Er ist erfahren, aber er ist unsicher.',
            ],
            [
              'Subordinating conjunction (weil, sofern, indem, ohne dass)',
              'start of the clause',
              'at the end',
              'Sie sparte, indem sie auf das Auto verzichtete.',
            ],
            [
              'Adverb (allerdings, folglich, dennoch)',
              'position 1, or in the middle',
              'position 2',
              'Das Angebot ist gut; allerdings ist es teuer.',
            ],
          ],
        ),
      ),
      section(
        'overview',
        'Connectors by meaning',
        table(
          'Adverbs (verb in position 2) and conjunctions (verb at the end).',
          ['Meaning', 'Adverbs', 'Conjunctions'],
          [
            [
              'addition',
              'außerdem, zudem, überdies, darüber hinaus',
              'sowohl … als auch, nicht nur … sondern auch',
            ],
            ['contrast', 'hingegen, demgegenüber, dagegen', 'während, wohingegen'],
            [
              'concession',
              'dennoch, gleichwohl, nichtsdestotrotz, immerhin',
              'obwohl, wenngleich, obgleich',
            ],
            ['reason', 'nämlich (never in position 1), schließlich', 'weil, da, zumal'],
            ['result', 'folglich, somit, infolgedessen, daher', 'sodass, dermaßen … dass'],
            [
              'condition',
              'andernfalls, ansonsten',
              'sofern, falls, vorausgesetzt (dass), es sei denn',
            ],
            [
              'time',
              'zuvor, daraufhin, anschließend, inzwischen, mittlerweile',
              'bevor, sobald, nachdem, solange',
            ],
            ['manner, means', 'dadurch, damit', 'indem, dadurch dass, ohne dass, anstatt dass'],
          ],
        ),
      ),
      section(
        'details',
        'Details that matter',
        list(
          '**nämlich** explains the preceding sentence and stands in the middle of its clause: Er konnte nicht kommen. Er war **nämlich** krank. It is never in position 1.',
          '**zumal** means “especially as” and sends the verb to the end: Wir bleiben, zumal es regnet.',
          '**sofern** (if, provided) is more formal than falls and wenn: Sofern es Ihnen passt, kommen wir morgen.',
          '**indem** names the means: Sie sparte, indem sie auf das Auto verzichtete. Do not use it for two actions that merely happen at the same time (that is während).',
          '**vielmehr** corrects a statement: Er ist nicht faul, vielmehr überfordert.',
          '**allerdings** restricts what was just said: Das Hotel ist schön. Allerdings ist es teuer.',
        ),
        examples(
          [
            'Der Plan ist riskant. Dennoch lohnt er sich.',
            'The plan is risky. Nevertheless it is worth it.',
          ],
          [
            'Sie hat viel Erfahrung, zumal sie schon im Ausland gearbeitet hat.',
            'She has a lot of experience, especially as she has worked abroad.',
          ],
          [
            'Er verließ den Raum, ohne dass jemand es bemerkte.',
            'He left the room without anyone noticing.',
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Das Angebot ist gut; allerdings es ist teuer.  ✓ … allerdings ist es teuer.',
          '✗ Nämlich war er krank.  ✓ Er war nämlich krank.',
          '✗ Sie sparte, indem sie verzichtete auf das Auto.  ✓ Sie sparte, indem sie auf das Auto verzichtete.',
          '✗ Während sie arbeitete, indem sie telefonierte. (indem is for means, not time)',
        ),
        tip(
          'Writing well',
          'Do not repeat the same connector in a paragraph. A good text mixes adverbs (position 1) with conjunctions (verb at the end), so the sentences do not all have the same shape.',
        ),
      ),
    ],
    related: ['formal-connectors', 'conjunctions'],
    sources: [S.conjunctionAdverb, S.conjunction, S.concessiveClause],
  },
  {
    id: 'conditional-clauses',
    title: 'Conditions without wenn',
    tagline: 'Sollte es …, Hätte ich …, es sei denn',
    level: LEVEL,
    summary:
      'A condition can be expressed by moving the verb to position 1: Sollte es Probleme geben, … (if there should be) · Hätte ich Zeit, würde ich helfen. · Wäre er pünktlich gewesen, … Other links: es sei denn, (dass) (unless), vorausgesetzt, (dass) (provided that), selbst wenn (even if).',
    sections: [
      section(
        'types',
        'Real and unreal conditions',
        p('A conditional sentence names a condition and its consequence. Three types are usual.'),
        table(
          'The three types of conditions.',
          ['Type', 'Tense / mood', 'Example'],
          [
            ['Real (present or future)', 'present tense', 'Wenn sie kommt, sprechen wir mit ihr.'],
            [
              'Unreal, present (unlikely)',
              'Konjunktiv II',
              'Wenn sie käme, würde ich mit ihr sprechen.',
            ],
            [
              'Unreal, past (impossible)',
              'Konjunktiv II with hätte / wäre + Partizip II',
              'Wenn sie gekommen wäre, hätte ich mit ihr gesprochen.',
            ],
          ],
        ),
      ),
      section(
        'inverted',
        'The verb in position 1',
        p(
          'Instead of **wenn** the finite verb can open the clause, and the clause then has no conjunction. The main clause often starts with **dann** or **so**. This is common in writing and in formal speech.',
        ),
        table(
          'Conditions without wenn.',
          ['With wenn', 'Verb first'],
          [
            [
              'Wenn es Probleme geben sollte, rufen Sie an.',
              'Sollte es Probleme geben, rufen Sie an.',
            ],
            ['Wenn ich Zeit hätte, würde ich helfen.', 'Hätte ich Zeit, würde ich helfen.'],
            [
              'Wenn er pünktlich gewesen wäre, hätten wir den Zug erreicht.',
              'Wäre er pünktlich gewesen, hätten wir den Zug erreicht.',
            ],
            ['Wenn Sie Fragen haben, melden Sie sich.', 'Haben Sie Fragen, melden Sie sich.'],
          ],
          0,
        ),
        p(
          '**Sollte** + infinitive says that the condition is unlikely but possible, and it is polite in letters. It can be used with real consequences: Sollte es regnen, **bleiben wir zu Hause**.',
        ),
      ),
      section(
        'others',
        'Other ways to express conditions',
        table(
          'Conditional links.',
          ['Link', 'Meaning', 'Verb', 'Example'],
          [
            ['falls', 'in case', 'at the end', 'Falls du Zeit hast, ruf mich an.'],
            ['sofern', 'provided that', 'at the end', 'Sofern es Ihnen passt, kommen wir morgen.'],
            [
              'vorausgesetzt, (dass)',
              'provided that',
              'at the end',
              'Wir kommen, vorausgesetzt, dass es nicht regnet.',
            ],
            [
              'es sei denn, (dass)',
              'unless',
              'position 2 (or at the end after dass)',
              'Wir beginnen pünktlich, es sei denn, der Chef verspätet sich.',
            ],
            [
              'selbst wenn / auch wenn',
              'even if',
              'at the end',
              'Selbst wenn es regnet, gehen wir.',
            ],
            [
              'andernfalls, ansonsten',
              'otherwise',
              'position 2',
              'Bitte zahlen Sie; andernfalls müssen wir mahnen.',
            ],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Wenn ich hätte Zeit, …  ✓ Wenn ich Zeit hätte, …',
          '✗ Hätte ich Zeit, dann ich würde helfen.  ✓ Hätte ich Zeit, dann würde ich helfen.',
          '✗ Wenn ich Zeit gehabt hätte, würde ich gekommen. (needs the past)  ✓ … wäre ich gekommen.',
        ),
      ),
    ],
    related: ['polite-forms', 'conjunctions'],
    sources: [S.conditionalClause, S.concessiveClause],
  },
  {
    id: 'infinitive-perfect',
    title: 'Infinitive in the past',
    tagline: 'ohne gefragt zu haben, gelesen zu haben',
    level: LEVEL,
    summary:
      'To say that the action in the infinitive clause happened earlier, use Partizip II + haben or sein + zu: ohne gefragt zu haben, (an)statt gekommen zu sein, Er behauptet, das Buch gelesen zu haben.',
    sections: [
      section(
        'form',
        'The form',
        p(
          'The **infinitive perfect** is the Partizip II of the verb + **zu** + **haben** or **sein** (the same helper as in the Perfekt). The helper is the last word of the infinitive group.',
        ),
        table(
          'Infinitive present and infinitive perfect.',
          ['Infinitive (present)', 'Infinitive (perfect)'],
          [
            ['lesen zu', 'gelesen zu haben'],
            ['sagen zu', 'gesagt zu haben'],
            ['kommen zu', 'gekommen zu sein'],
            ['sein zu', 'gewesen zu sein'],
            ['aufstehen zu', 'aufgestanden zu sein'],
            ['gesehen werden zu (passive)', 'gesehen worden zu sein'],
          ],
        ),
      ),
      section(
        'when',
        'When to use it',
        p(
          'It shows that the action of the infinitive happened **before** the action of the main verb. The subject of the infinitive is the same as the subject of the main verb.',
        ),
        examples(
          ['Er behauptet, das Buch gelesen zu haben.', 'He claims to have read the book.'],
          ['Sie ging, ohne sich verabschiedet zu haben.', 'She left without having said goodbye.'],
          ['Ich bin froh, dich getroffen zu haben.', 'I am glad to have met you.'],
          ['Statt gekommen zu sein, rief er an.', 'Instead of having come, he called.'],
        ),
        compare(
          {
            title: 'Present infinitive',
            question: 'At the same time or later',
            example: 'Ich hoffe, ihn zu treffen.',
          },
          {
            title: 'Infinitive perfect',
            question: 'Earlier than the main verb',
            example: 'Ich bereue, ihn getroffen zu haben.',
          },
        ),
      ),
      section(
        'verbs',
        'Where it appears',
        list(
          'After verbs of saying and thinking: behaupten, glauben, meinen, vorgeben, zugeben, leugnen (Sie leugnet, dort gewesen zu sein).',
          'After feelings about the past: bereuen, bedauern, sich freuen, froh sein, stolz sein (Er bedauert, nicht geholfen zu haben).',
          'After prepositions: ohne … zu, (an)statt … zu, with the meaning “already done” (ohne gefragt zu haben).',
          'After scheinen and the modality verbs: Er scheint die Aufgabe verstanden zu haben.',
        ),
        p(
          'If the subjects are different, use a **dass-clause** instead: Ich bin froh, **dass du gekommen bist**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ ohne gefragt haben zu  ✓ ohne gefragt zu haben',
          '✗ Er behauptet, hat das Buch gelesen.  ✓ Er behauptet, das Buch gelesen zu haben.',
          '✗ gegangen zu haben  ✓ gegangen zu sein (gehen takes sein)',
        ),
      ),
    ],
    related: ['perfekt'],
    sources: [S.infinitive, S.participle2],
  },
  {
    id: 'modality-verbs',
    title: 'Modality verbs with zu',
    tagline: 'scheinen, drohen, pflegen, vermögen, brauchen',
    level: LEVEL,
    summary:
      'Some verbs behave like modal verbs but take an infinitive with zu: scheinen zu (seem), drohen zu (threaten), pflegen zu (usually do), vermögen zu (be able), haben zu / sein zu (must / can be). The past is formed with the infinitive in the past: Er scheint gegangen zu sein.',
    sections: [
      section(
        'what',
        'Between a main verb and a modal verb',
        p(
          'A real modal verb (können, müssen) takes an infinitive **without zu**. A small group of verbs takes the infinitive **with zu** but has a modal-like meaning: it does not say what happens, but how, how likely or how often. They are common in formal and written German.',
        ),
        table(
          'Modality verbs.',
          ['Verb', 'Meaning', 'Example'],
          [
            ['scheinen zu', 'it seems that', 'Er scheint müde zu sein.'],
            ['drohen zu', 'threatens to (a bad outcome)', 'Das Projekt droht zu scheitern.'],
            [
              'versprechen zu',
              'promises to (a good outcome)',
              'Der Abend verspricht, schön zu werden.',
            ],
            ['pflegen zu', 'usually does, is in the habit of', 'Er pflegt montags früh zu kommen.'],
            ['vermögen zu', 'is able to (literary)', 'Sie vermag zu überzeugen.'],
            ['brauchen zu', 'needs to (mostly negative)', 'Du brauchst nicht zu kommen.'],
            ['haben zu', 'must', 'Sie haben die Gebühr zu zahlen.'],
            ['sein zu', 'must be / can be', 'Der Antrag ist einzureichen.'],
          ],
        ),
      ),
      section(
        'past',
        'Talking about the past',
        p(
          'The modality verb stays in the present tense, and the **infinitive perfect** (Partizip II + haben / sein + zu) shows the earlier event. The sentence then refers to something that already happened.',
        ),
        examples(
          ['Er scheint gegangen zu sein.', 'He seems to have left.'],
          [
            'Sie scheint die Aufgabe verstanden zu haben.',
            'She seems to have understood the task.',
          ],
          ['Das Gebäude drohte einzustürzen.', 'The building threatened to collapse.'],
        ),
      ),
      section(
        'scheinen',
        'scheinen and brauchen',
        list(
          '**scheinen** expresses an impression, not hearsay: Er scheint zu schlafen (it looks as if he sleeps). For hearsay use the modal verb sollen.',
          'The alternative to scheinen is an **es-clause**: Es scheint, dass er schläft.',
          '**brauchen** is used in the negative or with **nur** and replaces nicht müssen: Du **brauchst** nicht zu kommen. = Du musst nicht kommen. In everyday speech zu is often left out; in correct writing it stands.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er scheint müde sein.  ✓ Er scheint müde zu sein.',
          '✗ Du brauchst nicht kommen. (in writing)  ✓ Du brauchst nicht zu kommen.',
          '✗ Er scheint hat gegangen.  ✓ Er scheint gegangen zu sein.',
          '✗ Das Projekt droht scheitern.  ✓ Das Projekt droht zu scheitern.',
        ),
      ),
    ],
    related: ['modal-verbs', 'subjective-modals'],
    sources: [S.modalVerb, S.infinitive],
  },
  {
    id: 'participial-clauses',
    title: 'Participles and participial clauses',
    tagline: 'die von der Bank gewährte Hilfe · Zu Hause angekommen, …',
    level: LEVEL,
    summary:
      'Present participle (-d) = ongoing, past participle = finished or passive: die steigenden Preise, das gelöste Problem. An extended attribute puts everything between article and noun: die von der Bank gewährte Hilfe. A participial phrase can replace a clause: Am Ziel angekommen, ruhte er sich aus.',
    sections: [
      section(
        'extended',
        'The extended attribute',
        p(
          'The participle before a noun can have its own complements: an agent, an object, an adverb. All of them stand **between the article and the participle**. It reads like a relative clause squeezed into the noun phrase, typical of academic, legal and journalistic writing.',
        ),
        table(
          'Reading an extended attribute.',
          ['Extended attribute', 'As a relative clause'],
          [
            ['die von der Bank gewährte Hilfe', 'die Hilfe, die von der Bank gewährt wurde'],
            ['der von Forschern entwickelte Test', 'der Test, der von Forschern entwickelt wurde'],
            ['die seit Jahren steigenden Preise', 'die Preise, die seit Jahren steigen'],
            [
              'die bis Ende Mai einzureichenden Unterlagen',
              'die Unterlagen, die bis Ende Mai eingereicht werden müssen',
            ],
          ],
        ),
        tip(
          'How to read it',
          'Find the article at the beginning and the noun at the end. Everything between them belongs to the noun. The participle is the last word before the noun, and the words before it (agent, time, place) belong to it.',
        ),
      ),
      section(
        'phrases',
        'Participial phrases instead of clauses',
        p(
          'A participle at the start of a sentence can replace an adverbial clause. The **subject of the phrase is the subject of the main clause**, and the phrase is separated by a comma. Partizip I means “at the same time”; Partizip II means “earlier” or “passive”.',
        ),
        table(
          'Clause and participial phrase.',
          ['Clause', 'Participial phrase'],
          [
            ['Während sie lächelte, begrüßte sie die Gäste.', 'Lächelnd begrüßte sie die Gäste.'],
            ['Nachdem er zu Hause angekommen war, rief er an.', 'Zu Hause angekommen, rief er an.'],
            [
              'Weil er vom Regen überrascht wurde, flüchtete er ins Café.',
              'Vom Regen überrascht, flüchtete er ins Café.',
            ],
            ['Da sie müde war, ging sie früh ins Bett.', 'Müde vom Tag, ging sie früh ins Bett.'],
          ],
        ),
      ),
      section(
        'compare',
        'Attribute or phrase?',
        compare(
          {
            title: 'Attribute',
            question: 'Inside the noun phrase',
            example: 'Der von Forschern entwickelte Test ist genau.',
          },
          {
            title: 'Phrase',
            question: 'Replaces a clause, with a comma',
            example: 'Von Forschern entwickelt, ist der Test genau.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Zu Hause angekommen, klingelte das Telefon. (the phone did not arrive)  ✓ Zu Hause angekommen, hörte ich das Telefon klingeln.',
          '✗ die von der Bank gewährte Hilfen  ✓ die von der Bank gewährten Hilfen',
          '✗ die lösende Aufgabe (if you mean “must be solved”)  ✓ die zu lösende Aufgabe',
        ),
        tip(
          'In speech',
          'Long extended attributes are for writing. When speaking, use a relative clause: die Hilfe, die die Bank gewährt hat.',
        ),
      ),
    ],
    related: ['participial-attributes', 'perfekt'],
    sources: [S.participialConstruction, S.participle1, S.participle2],
  },
  {
    id: 'passive-substitutes',
    title: 'Passive substitutes',
    tagline: 'Saying the passive without werden',
    level: LEVEL,
    summary:
      'Instead of werden + participle, German uses: sein + zu + infinitive (Das ist zu beweisen = kann bewiesen werden), -bar / -lich adjectives (lösbar), sich lassen + infinitive (Das lässt sich lösen), bekommen + participle (Er bekam das Geld überwiesen) and the gerundive (die zu lösende Aufgabe).',
    sections: [
      section(
        'overview',
        'Overview',
        p(
          'The passive puts the **action** in the centre and leaves out who does it. German has many other ways to do the same, and a good writer chooses them to avoid repeating **wird … gemacht**. Several of them also add a modal meaning (“can”, “must”).',
        ),
        table(
          'Passive and substitutes.',
          ['Passive', 'Substitute', 'Meaning added'],
          [
            ['Der Fehler kann leicht behoben werden.', 'Der Fehler ist leicht zu beheben.', 'can'],
            ['Der Antrag muss geprüft werden.', 'Der Antrag ist zu prüfen.', 'must'],
            [
              'Das Problem kann gelöst werden.',
              'Das Problem lässt sich lösen. / Das Problem ist lösbar.',
              'can',
            ],
            ['Die Aufgabe, die gelöst werden muss, …', 'die zu lösende Aufgabe', 'must'],
            [
              'Ihr wird die Rechnung zugeschickt.',
              'Sie bekommt die Rechnung zugeschickt.',
              'receiver as subject',
            ],
            ['Das wird hier nicht gemacht.', 'Man macht das hier nicht.', 'person in general'],
          ],
        ),
      ),
      section(
        'forms',
        'The substitutes',
        list(
          '**sein + zu + infinitive:** Das Formular ist bis Freitag abzugeben. The subject is the thing that is done.',
          '**sich lassen + infinitive:** Das Fenster lässt sich nicht öffnen. “Can be done”, never “must”.',
          '**-bar, -lich, -fähig, -wert:** lösbar, erhältlich, lieferbar, speicherfähig, lesenswert. “Can be …ed” or “worth …ing”.',
          '**bekommen / erhalten / kriegen + participle:** Er bekam das Geld überwiesen. The person who receives something becomes the subject.',
          '**man:** Man kann das beweisen. = Das kann bewiesen werden.',
          '**reflexive verbs:** Das Buch verkauft sich gut. Das versteht sich von selbst.',
          '**noun-verb phrases with finden, erfahren, erhalten:** Die Idee findet große Zustimmung. (= wird sehr geschätzt)',
        ),
        examples(
          [
            'Die Unterlagen sind unverzüglich vorzulegen.',
            'The documents must be presented without delay.',
          ],
          ['Der Antrag ist nicht mehr zu retten.', 'The application can no longer be saved.'],
          ['Sie bekommt die Rechnung zugeschickt.', 'The bill is being sent to her.'],
        ),
      ),
      section(
        'when',
        'When to choose which',
        table(
          'Choosing a substitute.',
          ['If you want to say …', 'Use'],
          [
            ['something is possible', 'sich lassen, -bar, sein … zu'],
            ['something is obligatory', 'sein … zu, haben … zu, zu + Partizip I'],
            ['the person receiving is the focus', 'bekommen + Partizip II'],
            ['the action is general', 'man'],
            ['the style should be short and formal', 'sein … zu, Partizip-attributes'],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Das Problem ist lösen zu. (word order)  ✓ Das Problem ist zu lösen.',
          '✗ Das lässt sich nicht gelöst.  ✓ Das lässt sich nicht lösen.',
          '✗ Er bekam das Geld überweisen.  ✓ Er bekam das Geld überwiesen.',
        ),
      ),
    ],
    related: ['modal-alternatives', 'participial-attributes'],
    sources: [S.gerundive, S.supportVerb, S.modalVerb],
  },
  {
    id: 'quantities-graphs',
    title: 'Describing numbers and graphs',
    tagline: 'Shares, changes and comparisons',
    level: LEVEL,
    summary:
      'Shares: die Hälfte, ein Drittel, jeder Vierte. Approximation: rund, knapp, etwa, über. Change: steigen / sinken um (the difference) or auf (the new value), von … auf …; sich verdoppeln. Comparison: im Vergleich zu (+ Dat.), doppelt so hoch wie.',
    sections: [
      section(
        'shares',
        'Shares and proportions',
        p(
          'Fractions are formed from the ordinal number + **-el**: drit**t**-el → **Drittel**, vier**t**-el → **Viertel**, fünf**t**-el → **Fünftel**. For one half use **die Hälfte**. Fractions are neuter and not declined: **ein Drittel der Betriebe**. With ordinals, **jeder Zweite / Dritte / Vierte** means “one in two / three / four”.',
        ),
        table(
          'Ways to state a share.',
          ['Form', 'Example'],
          [
            ['die Hälfte der …', 'Die Hälfte der Befragten stimmte zu.'],
            ['ein Drittel, drei Viertel', 'Knapp ein Drittel der Betriebe arbeitet ökologisch.'],
            ['jeder Zweite / Dritte', 'Jeder Dritte arbeitet in Teilzeit.'],
            ['x Prozent (%)', 'Der Anteil der Frauen liegt bei 45 Prozent.'],
            ['die Mehrheit / Minderheit', 'Die Mehrheit der Studierenden wohnt in einer WG.'],
          ],
        ),
      ),
      section(
        'approx',
        'Approximate numbers',
        table(
          'Words that soften a number.',
          ['Meaning', 'Words', 'Example'],
          [
            [
              'about',
              'rund, etwa, ungefähr, circa',
              'Rund 40 Prozent nutzen das Internet täglich.',
            ],
            ['a little less', 'knapp, fast, beinahe', 'Knapp 40 Prozent …'],
            ['a little more', 'gut, über, mehr als', 'Gut 40 Prozent …'],
            ['at least / at most', 'mindestens, höchstens', 'Mindestens 200 Personen kamen.'],
          ],
        ),
      ),
      section(
        'change',
        'Describing a change',
        p(
          'For rising and falling, the preposition says whether you give the **difference** or the **new value**: **um** = by how much, **auf** = to what value, **von … auf** = from … to.',
        ),
        table(
          'Verbs and nouns of change.',
          ['Direction', 'Verbs', 'Nouns'],
          [
            [
              'up',
              'steigen, wachsen, zunehmen, anwachsen',
              'der Anstieg, das Wachstum, die Zunahme',
            ],
            [
              'down',
              'sinken, fallen, abnehmen, zurückgehen',
              'der Rückgang, die Abnahme, der Einbruch (sharp fall)',
            ],
            ['no change', 'stagnieren, gleich bleiben, sich nicht verändern', 'die Stagnation'],
            ['up and down', 'schwanken', 'die Schwankung'],
            ['multiply', 'sich verdoppeln, verdreifachen, halbieren', 'die Verdoppelung'],
          ],
        ),
        examples(
          ['Der Anteil stieg von 5 % auf 12 %.', 'The share rose from 5% to 12%.'],
          ['Die Zahl wuchs um 20 %.', 'The number grew by 20%.'],
          ['Die Kosten haben sich verdoppelt.', 'The costs have doubled.'],
          ['Ein Rückgang auf 8 % ist zu erwarten.', 'A fall to 8% is expected.'],
        ),
      ),
      section(
        'compare',
        'Comparing figures',
        table(
          'Phrases for comparisons.',
          ['Phrase', 'Example'],
          [
            ['doppelt / dreimal so viel wie', 'Er verdient doppelt so viel wie sie.'],
            ['im Vergleich zu (+ Dat.)', 'Im Vergleich zum Vorjahr sank die Zahl um 3 %.'],
            ['gegenüber (+ Dat.)', 'Gegenüber 2010 ist der Verbrauch gestiegen.'],
            ['im Gegensatz zu (+ Dat.)', 'Im Gegensatz zu den Städten wächst das Land nicht.'],
            ['während', 'In Deutschland steigt die Zahl, während sie in Spanien sinkt.'],
          ],
        ),
        p(
          'To introduce a graph: **Die Grafik zeigt …, Aus der Tabelle geht hervor, dass …, Laut der Statistik …**',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Die Zahl stieg auf 20 % (if you mean “by 20%”)  ✓ Die Zahl stieg um 20 %.',
          '✗ ein Dritte der Betriebe  ✓ ein Drittel der Betriebe',
          '✗ im Vergleich zu dem Jahr  ✓ im Vergleich zum Vorjahr',
          '✗ doppelt so viel als  ✓ doppelt so viel wie',
        ),
      ),
    ],
    related: ['comparison', 'ordinal-numbers'],
    sources: [S.numerals, S.prepositions],
  },
  {
    id: 'written-prepositions',
    title: 'aufgrund, infolge, anhand …',
    tagline: 'Prepositions of formal and written German',
    level: LEVEL,
    summary:
      'Formal German uses prepositions with the genitive: aufgrund, infolge, angesichts, anlässlich, bezüglich, hinsichtlich, mithilfe, anhand, zugunsten, seitens, innerhalb, außerhalb, oberhalb, unterhalb. After them the noun is genitive: des/der + noun (-(e)s for masculine and neuter).',
    sections: [
      section(
        'what',
        'What they are',
        p(
          'Many prepositions that replace whole clauses in formal writing take the **genitive**. They are common in news, official letters, reports and academic text, and rarely used in everyday speech, where people use a conjunction or a simpler preposition instead.',
        ),
        table(
          'Genitive prepositions in formal German.',
          ['Meaning', 'Prepositions', 'Example'],
          [
            [
              'cause',
              'aufgrund, infolge, angesichts, mangels, dank',
              'Aufgrund des Regens fiel das Fest aus.',
            ],
            ['occasion', 'anlässlich', 'Anlässlich des Jubiläums gibt es ein Fest.'],
            ['topic', 'bezüglich, hinsichtlich', 'Hinsichtlich der Kosten gibt es keine Bedenken.'],
            ['means', 'anhand, mithilfe, mittels', 'Anhand der Daten lässt sich das belegen.'],
            [
              'benefit, side',
              'zugunsten, zulasten, seitens',
              'Die Mittel wurden zugunsten der Schulen umverteilt.',
            ],
            [
              'place and time',
              'innerhalb, außerhalb, oberhalb, unterhalb, inmitten',
              'Innerhalb der Stadt gilt Tempo 30.',
            ],
            ['concession', 'trotz, ungeachtet', 'Ungeachtet der Warnungen ging er weiter.'],
          ],
        ),
      ),
      section(
        'genitive',
        'The genitive',
        p(
          'After these prepositions the noun is in the **genitive**: **des / eines** + masculine or neuter noun + **-(e)s**; **der / einer** + feminine noun; **der** + plural. Without an article, masculine and neuter nouns still take **-s**, and the adjective ends in **-en**.',
        ),
        table(
          'The genitive after a preposition.',
          ['Gender', 'With article', 'Without article'],
          [
            ['masculine', 'aufgrund des Regens', 'aufgrund starken Regens'],
            ['neuter', 'infolge des Wetters', 'infolge schlechten Wetters'],
            ['feminine', 'infolge der Verspätung', 'infolge großer Verspätung'],
            ['plural', 'anhand der Daten', 'anhand neuer Daten'],
          ],
        ),
        p(
          'If the noun stands without an article or other word that shows the genitive, speakers often use **von + dative** instead: **anhand von Daten**, **aufgrund von Missverständnissen**, **innerhalb von zwei Wochen**.',
        ),
      ),
      section(
        'use',
        'Using them',
        list(
          'They are the key tool of **nominal style**: Weil es regnete → aufgrund des Regens.',
          '**anhand** means “by means of” and is used with evidence: anhand von Beispielen.',
          '**innerhalb** also expresses time frames: innerhalb eines Monats, innerhalb von drei Tagen.',
          '**wegen, trotz, während, statt** also take the genitive in formal German; the dative is accepted in speech.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ aufgrund dem Regen  ✓ aufgrund des Regens',
          '✗ anhand die Daten  ✓ anhand der Daten',
          '✗ hinsichtlich dem Preis  ✓ hinsichtlich des Preises',
          '✗ aufgrund des Regen  ✓ aufgrund des Regens (masculine nouns take -(e)s)',
        ),
        tip(
          'Register',
          'Use these prepositions in writing. In conversation, use weil, wegen or a clause instead, because the genitive prepositions sound formal.',
        ),
      ),
    ],
    related: ['nominal-style', 'formal-connectors'],
    sources: [S.prepositions, S.nominalStyle],
  },
];
