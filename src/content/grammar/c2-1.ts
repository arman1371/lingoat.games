import { conjugate } from '@/lib/german/conjugation';
import { konjunktiv1 } from '@/lib/german/konjunktiv1';
import {
  compare,
  conjugationTable,
  examples,
  list,
  mistake,
  p,
  section,
  table,
  tip,
} from './build';
import type { GrammarTopic } from './schema';
import { C2_SOURCES as S } from './sourcesC2';

const LEVEL = 'c2-1';

const WERDEN = conjugate('werden');
const futur2Rows = (['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const).map((pr) => [
  pr,
  `${WERDEN[pr]} … geschrieben haben`,
  `${WERDEN[pr]} … angekommen sein`,
]);

export const C21_TOPICS: GrammarTopic[] = [
  {
    id: 'c21-word-formation',
    title: 'Suffixes and prefixes',
    tagline: 'How one word grows into a family: lösen, lösbar, die Lösung',
    level: LEVEL,
    summary:
      'Suffixes turn a word into another word class (Erfolg → erfolgreich, offen → die Offenheit). Learning the common endings lets you work out new words and know the article of a noun at once.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'German builds new words in two main ways. **Composition** joins whole words (Umwelt + Schutz → Umweltschutz). **Derivation** adds an ending (a **suffix**) or a beginning (a **prefix**) to a base word. A suffix usually changes the **word class**: a verb becomes an adjective (lösen → lösbar) or a noun (lösen → die Lösung). Because the suffix decides the word class, it also tells you a lot about the noun’s gender.',
        ),
        examples(
          ['lösen → lösbar → die Lösbarkeit', 'to solve → solvable → solvability'],
          ['der Erfolg → erfolgreich', 'success → successful'],
          ['offen → die Offenheit', 'open → openness'],
        ),
      ),
      section(
        'adjectives',
        'Adjective suffixes',
        table(
          'The common adjective suffixes at C2.',
          ['Suffix', 'Meaning', 'Built from', 'Example'],
          [
            ['-bar', 'can be …ed', 'verb', 'lösen → lösbar, tragen → tragbar'],
            ['-los', 'without', 'noun', 'die Hilfe → hilflos, der Appetit → appetitlos'],
            [
              '-reich / -voll',
              'rich in, full of',
              'noun',
              'der Erfolg → erfolgreich, der Wert → wertvoll',
            ],
            [
              '-sam',
              'having the quality; inclined to',
              'verb or noun',
              'biegen → biegsam, die Aufmerksamkeit → aufmerksam',
            ],
            ['-haft', 'having, like', 'noun', 'der Fehler → fehlerhaft, der Scherz → scherzhaft'],
            [
              '-mäßig',
              'according to; in terms of',
              'noun',
              'die Regel → regelmäßig, die Zahl → zahlenmäßig',
            ],
          ],
        ),
        p(
          '**-bar** says that something *can* be done to it; the base is usually a transitive verb (abrufbar, tragbar) and some verbs lose their preposition on the way (verfügen über → verfügbar). **-mäßig** sometimes needs a linking sound: alters**mäßig** (with -s-), zahlen**mäßig** (with -en-). With the meaning “in terms of” (arbeitsmäßig überlastet) it is a flexible, productive ending; in the meaning “according to” it is fixed in words like regelmäßig.',
        ),
        compare(
          { title: '-bar', question: 'Can it be done?', example: 'Das Problem ist lösbar.' },
          { title: '-los', question: 'Is something missing?', example: 'Er war hilflos.' },
          {
            title: '-reich / -voll',
            question: 'Is there a lot of it?',
            example: 'Sie ist erfolgreich.',
          },
        ),
      ),
      section(
        'nouns',
        'Noun suffixes and their article',
        table(
          'Noun suffixes and the gender they give.',
          ['Suffix', 'Built from', 'Gender', 'Example'],
          [
            ['-ung', 'verb', 'die', 'verständigen → die Verständigung'],
            ['-heit', 'adjective', 'die', 'offen → die Offenheit'],
            [
              '-keit',
              'adjective (often in -ig, -lich, -sam, -bar)',
              'die',
              'aufmerksam → die Aufmerksamkeit',
            ],
            ['-schaft', 'noun or adjective', 'die', 'Freund → die Freundschaft'],
            [
              '-nis',
              'verb or adjective',
              'das (some: die)',
              'das Hindernis, das Geheimnis, die Erkenntnis',
            ],
          ],
        ),
        p(
          '**-ung** forms the action or its result: die Erfindung (the inventing, or the invention). **-keit** follows longer adjectives, especially those that already end in -ig, -lich, -sam or -bar (Möglichkeit, Aufmerksamkeit, Lösbarkeit); **-heit** is used after short or other adjectives (Kindheit, Offenheit). The plural of -nis nouns doubles the s: das Hindernis → die Hindernis**se**.',
        ),
      ),
      section(
        'prefixes',
        'Prefixes that change the meaning',
        list(
          '**un-** negates: klar → **un**klar, möglich → **un**möglich.',
          '**ur-** means original or extreme: alt → **ur**alt, die Angst → die **Ur**angst.',
          '**miss-** means wrongly or badly: verstehen → **miss**verstehen, der Erfolg → der **Miss**erfolg.',
        ),
        tip(
          'How to use word families',
          'When you meet an unknown word with a familiar ending, strip the suffix and look at the base: unverfügbar → verfügen über → “not available”.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ das Möglichkeit  ✓ die Möglichkeit (-keit is always feminine)',
          '✗ die Hindernis  ✓ das Hindernis (-nis is mostly neuter)',
          '✗ die Aufmerksamheit  ✓ die Aufmerksamkeit (after -sam it is -keit)',
          '✗ hilfelos  ✓ hilflos (the base loses its -e)',
        ),
      ),
    ],
    related: ['c21-nominal-style', 'c21-noun-verb'],
    sources: [
      S.wordFormation,
      S.suffixBar,
      S.suffixLos,
      S.suffixSam,
      S.suffixHaft,
      S.suffixMaessig,
      S.suffixKeit,
      S.suffixNis,
      S.suffixSchaft,
      S.suffixUng,
    ],
  },
  {
    id: 'c21-noun-verb',
    title: 'Noun-verb combinations',
    tagline: 'Kritik üben instead of kritisieren',
    level: LEVEL,
    summary:
      'In formal German many meanings are carried by a fixed pair of noun and verb: the noun holds the meaning, the verb is mostly a carrier. Learn each pair as one block, with its preposition and article.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **noun-verb combination** (Nomen-Verb-Verbindung, also Funktionsverbgefüge) is a fixed phrase in which the noun carries the meaning and the verb has lost most of its own meaning. Together they work as **one predicate**, often with the same sense as a single verb: **Kritik üben** = kritisieren, **in Betracht ziehen** = erwägen.',
        ),
        examples(
          [
            'Wir ziehen diese Möglichkeit in Betracht.',
            'We are taking this possibility into consideration.',
          ],
          ['Er übte scharfe Kritik an dem Plan.', 'He sharply criticised the plan.'],
          [
            'Die Firma stellt den Mitarbeitern Räume zur Verfügung.',
            'The firm makes rooms available to employees.',
          ],
        ),
      ),
      section(
        'list',
        'Common combinations',
        table(
          'Combinations used in formal writing, with the single verb of the same meaning.',
          ['Combination', 'Single verb', 'Example'],
          [
            ['Kritik üben (an + Dat.)', 'kritisieren', 'Sie übt Kritik an der Entscheidung.'],
            ['in Betracht ziehen', 'erwägen', 'Wir ziehen einen Umzug in Betracht.'],
            ['zur Verfügung stellen', 'bereitstellen', 'Das Amt stellt Formulare zur Verfügung.'],
            ['in Anspruch nehmen', 'nutzen', 'Viele nehmen die Beratung in Anspruch.'],
            [
              'eine Entscheidung treffen',
              'entscheiden',
              'Der Vorstand trifft heute eine Entscheidung.',
            ],
            ['in Frage stellen', 'bezweifeln', 'Die Studie stellt die Methode in Frage.'],
            ['unter Beweis stellen', 'beweisen', 'Sie stellte ihr Können unter Beweis.'],
            ['zum Ausdruck bringen', 'ausdrücken', 'Er brachte seine Sorge zum Ausdruck.'],
          ],
        ),
      ),
      section(
        'properties',
        'How they behave',
        list(
          '**They are fixed.** You cannot swap the noun or change its article freely: in Betracht ziehen, not “in Betrachtung ziehen”.',
          '**The noun cannot be replaced by a pronoun.** You do not say “Wir ziehen es in ihn”.',
          '**Negation applies to the whole phrase:** Er setzte die Maschine **nicht** in Betrieb.',
          '**The verb shows the type of event.** Compare in Kraft **treten** (it starts to apply) with in Kraft **setzen** (someone makes it apply), and in Kraft **sein** (it applies).',
          '**Some have a passive meaning:** zur Verfügung stehen (to be available), in Frage kommen (to be a candidate).',
        ),
        examples(
          ['Das Gesetz tritt morgen in Kraft.', 'The law comes into force tomorrow.'],
          ['Die Regierung setzt das Gesetz in Kraft.', 'The government puts the law into force.'],
        ),
      ),
      section(
        'compare',
        'Combination or single verb?',
        compare(
          {
            title: 'Single verb',
            question: 'Short and direct',
            example: 'Wir erwägen einen Umzug.',
          },
          {
            title: 'Noun-verb combination',
            question: 'Formal and precise',
            example: 'Wir ziehen einen Umzug in Betracht.',
          },
        ),
        p(
          'These combinations belong to written, official and academic German. Too many of them make a text stiff, so use a single verb when it says the same thing. Keep the combination when no single verb exists or when you want to add a nuance: zur Verzweiflung bringen has no one-word equivalent.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Kritik machen  ✓ Kritik üben (the verb is fixed)',
          '✗ in Betrachtung ziehen  ✓ in Betracht ziehen',
          '✗ eine Entscheidung machen  ✓ eine Entscheidung treffen',
          '✗ Wir stellen es zur Verfügung nicht.  ✓ Wir stellen es nicht zur Verfügung.',
        ),
      ),
    ],
    related: ['c21-nominal-style', 'c21-word-formation'],
    sources: [S.supportVerbs, S.nominalStyle],
  },
  {
    id: 'c21-contrast-cause',
    title: 'Contrast and cause clauses',
    tagline: 'während, wohingegen, zumal, nämlich, dadurch dass',
    level: LEVEL,
    summary:
      'wohingegen, während and indes introduce a contrast; zumal adds a further reason; nämlich gives a reason in a main clause; dadurch dass explains the cause. The first four conjunctions send the verb to the end, nämlich never opens a sentence.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Two ideas often need more than a plain **weil** or **aber**. German has precise connectors for a **contrast** between two facts (whereas) and for an **additional reason** (especially as, after all). They let you argue in longer, better connected sentences.',
        ),
        table(
          'Contrast and cause connectors.',
          ['Connector', 'Meaning', 'Verb position', 'Example'],
          [
            ['während', 'whereas (contrast)', 'end', 'Sie spart, während er jeden Cent ausgibt.'],
            [
              'wohingegen',
              'whereas, while (contrast)',
              'end',
              'Er ging nach Hause, wohingegen sie dablieb.',
            ],
            ['indes', 'whereas (formal)', 'end', 'Er wechselte den Job, indes sie blieb.'],
            [
              'zumal',
              'especially as, all the more as',
              'end',
              'Wir sollten warten, zumal die Zahlen unklar sind.',
            ],
            [
              'dadurch, dass',
              'because of the fact that',
              'end',
              'Er sparte Zeit, dadurch dass er online buchte.',
            ],
            [
              'nämlich',
              'you see, namely (gives the reason)',
              'verb 2, nämlich in the middle',
              'Er ist müde. Er hat nämlich kaum geschlafen.',
            ],
          ],
        ),
      ),
      section(
        'details',
        'How each one works',
        list(
          '**während / wohingegen / indes** are subordinating conjunctions: a comma before them, finite verb at the end. They contrast two parallel facts. The temporal **während** (at the same time) is a different use; the context shows which one is meant.',
          '**zumal** gives a reason on top of the main one: “and especially because …”. It also exists as an adverb meaning “especially” in front of a phrase: Die Gebühr ist hoch, zumal für Familien. As a conjunction it takes a clause with the verb at the end.',
          '**dadurch, dass** names the cause or the means: the **dadurch** often stays in the main clause and **dass** opens the clause (Er sparte Zeit, dadurch dass er online buchte).',
          '**nämlich** is an adverb used to give a reason that the listener may know or can accept. It stands inside the clause, usually after the verb, and **never in the first position**.',
        ),
      ),
      section(
        'compare',
        'weil, zumal or nämlich?',
        compare(
          {
            title: 'weil',
            question: 'The reason',
            example: 'Wir warten, weil die Zahlen unklar sind.',
          },
          {
            title: 'zumal',
            question: 'An extra reason on top',
            example: 'Wir warten, zumal die Zahlen unklar sind.',
          },
          {
            title: 'nämlich',
            question: 'A reason in a second sentence',
            example: 'Wir warten. Die Zahlen sind nämlich unklar.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Nämlich hat er kaum geschlafen.  ✓ Er hat nämlich kaum geschlafen.',
          '✗ …, zumal die Zahlen sind unklar.  ✓ …, zumal die Zahlen unklar sind.',
          '✗ Sie spart, wohingegen ist er großzügig.  ✓ Sie spart, wohingegen er großzügig ist.',
          '✗ Wir warten, zumal die Zahlen unklar sind. (as the only reason)  ✓ Use zumal only to add a reason to one already given.',
        ),
      ),
    ],
    related: ['conjunctions', 'c21-concession'],
    sources: [S.wohingegen, S.zumal, S.naemlich, S.indes],
  },
  {
    id: 'c21-consecutive',
    title: 'Formal result clauses',
    tagline: 'derart … dass, folglich, infolgedessen, somit, mithin',
    level: LEVEL,
    summary:
      'derart / dermaßen … dass stresses a degree and its result (verb at the end). folglich, infolgedessen, somit, mithin and demnach draw a conclusion from the previous sentence (verb second).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A result can be expressed inside one sentence or by linking two sentences. With **derart … dass** the first part says *how much*, the **dass**-clause says *what followed*. With connectors such as **folglich** a new sentence states the **consequence** of the one before.',
        ),
      ),
      section(
        'degree',
        'Degree and result: derart / dermaßen … dass',
        p(
          '**derart** (in such a way) and **dermaßen** (to such a degree) stand in front of an adjective or verb and point forward to a **dass**-clause. The clause has the verb at the end. They are stronger than the simple **so … dass** you know from B1.2.',
        ),
        examples(
          [
            'Das Netz war derart langsam, dass die Konferenz abbrach.',
            'The network was so slow that the conference broke off.',
          ],
          [
            'Die Kosten stiegen dermaßen, dass das Projekt scheiterte.',
            'Costs rose so much that the project failed.',
          ],
          [
            'Das Schriftstück ist derart zerstört, dass man es kaum lesen kann.',
            'The document is so damaged that it can hardly be read.',
          ],
        ),
      ),
      section(
        'connectors',
        'Conclusion connectors',
        table(
          'Connectors that draw a conclusion from the previous sentence.',
          ['Connector', 'Nuance', 'Example'],
          [
            [
              'folglich',
              'logical consequence',
              'Die Daten fehlen. Folglich lässt sich nichts beweisen.',
            ],
            [
              'infolgedessen',
              'as a result of what was just said',
              'Das Schiff brach entzwei und war infolgedessen manövrierunfähig.',
            ],
            [
              'somit',
              'thus, so (conclusion)',
              'Die Kosten sinken. Somit wird die Technik erschwinglich.',
            ],
            [
              'mithin',
              'therefore, which means (elevated)',
              'Die Armut steigt. Mithin scheitert das System.',
            ],
            [
              'demnach',
              'accordingly, according to this',
              'Die Zahlen sind falsch. Demnach ist der Bericht wertlos.',
            ],
          ],
        ),
        p(
          'These are adverbs, not conjunctions. They start the new sentence in position 1 (**Folglich lässt sich …**) or stand in the middle field after the verb (**Die Daten fehlen; es lässt sich folglich nichts beweisen**). The verb is **second** either way. They are formal and fit reports and essays, less so a casual chat.',
        ),
      ),
      section(
        'compare',
        'sodass, derart … dass or folglich?',
        compare(
          { title: 'sodass', question: 'Plain result', example: 'Es regnete, sodass wir blieben.' },
          {
            title: 'derart … dass',
            question: 'Degree and result',
            example: 'Es regnete derart stark, dass wir blieben.',
          },
          {
            title: 'folglich',
            question: 'Conclusion in a new sentence',
            example: 'Es regnete. Folglich blieben wir.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ …, dass die Konferenz brach ab.  ✓ …, dass die Konferenz abbrach.',
          '✗ Folglich wir können nichts beweisen.  ✓ Folglich können wir nichts beweisen.',
          '✗ Er ist müde, folglich hat er wenig geschlafen.  ✓ Er hat wenig geschlafen, folglich ist er müde. (folglich names the consequence, never the cause)',
        ),
      ),
    ],
    related: ['conjunctions', 'c21-contrast-cause', 'c21-text-cohesion'],
    sources: [S.derart, S.folglich, S.infolgedessen, S.mithin],
  },
  {
    id: 'c21-futur-2',
    title: 'Futur II',
    tagline: 'It will have happened by then – or: he has probably forgotten',
    level: LEVEL,
    summary:
      'Futur II = werden + Partizip II + haben / sein. It says that something will be finished by a time in the future, or it expresses a guess about the past (usually with wohl).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The **Futur II** (future perfect) combines the future auxiliary **werden** with the **Partizip II** and the infinitive **haben** or **sein**. It looks at the future and sees an action as already completed. A second use, very common in speech, is a **supposition about the past**.',
        ),
        table(
          'Forms of the Futur II.',
          ['Person', 'with haben (schreiben)', 'with sein (ankommen)'],
          futur2Rows,
        ),
        p(
          'Use **haben** or **sein** as in the Perfekt: Ich habe geschrieben → ich werde geschrieben haben; er ist angekommen → er wird angekommen sein. In a subordinate clause the finite **werde** goes to the very end: …, wenn ich meinen Führerschein gemacht haben **werde**.',
        ),
      ),
      section(
        'uses',
        'Two uses',
        list(
          '**Completed before a point in the future.** Often with a time phrase such as bis, in zehn Jahren: Bis Freitag werde ich den Bericht geschrieben haben.',
          '**Supposition about the past.** The speaker guesses what has already happened; **wohl** makes the guess clearer: Er wird es vergessen haben (he has probably forgotten it). Sie wird den Zug verpasst haben.',
        ),
        examples(
          [
            'In zehn Jahren wird sich viel verändert haben.',
            'In ten years a lot will have changed.',
          ],
          ['Er wird wohl verschlafen haben.', 'He has probably overslept.'],
          ['Was wird er sich dabei gedacht haben?', 'What can he have been thinking? (rhetorical)'],
        ),
      ),
      section(
        'compare',
        'Futur I, Perfekt or Futur II?',
        compare(
          {
            title: 'Futur I',
            question: 'What will happen?',
            example: 'Ich werde den Bericht schreiben.',
          },
          {
            title: 'Perfekt',
            question: 'What is done now?',
            example: 'Ich habe den Bericht geschrieben.',
          },
          {
            title: 'Futur II',
            question: 'What will be done by then?',
            example: 'Ich werde den Bericht geschrieben haben.',
          },
        ),
        p(
          'In everyday speech the **Perfekt** often replaces the Futur II for completion in the future: Nächstes Jahr um diese Zeit habe ich meinen Führerschein gemacht. The Futur II is more frequent in writing and for guesses.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er wird angekommen haben.  ✓ Er wird angekommen sein. (ankommen takes sein)',
          '✗ Ich werde geschrieben.  ✓ Ich werde geschrieben haben. (the infinitive of haben / sein is missing)',
          '✗ Er hat es wohl vergessen haben werden.  ✓ Er wird es wohl vergessen haben.',
        ),
      ),
    ],
    related: ['perfekt', 'c21-reported-speech'],
    sources: [S.futur2],
  },
  {
    id: 'c21-reported-speech',
    title: 'Konjunktiv I (reported speech)',
    tagline: 'Er sagte, er habe keine Zeit.',
    level: LEVEL,
    summary:
      'Konjunktiv I reports what someone said without taking responsibility for it: stem + -e, -est, -e, -en, -et, -en (er habe, sie komme, sei for sein). If a form looks like the indicative, use Konjunktiv II instead.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          '**Reported speech** (indirekte Rede) passes on what someone else said. It is typical of newspapers, reports and academic texts. The mood **Konjunktiv I** signals that the content is a statement of someone else, whether true or not. The report can be a **dass**-clause or a main clause with the verb in second position.',
        ),
        examples(
          [
            'Der Minister sagte, er habe keine Kenntnis davon.',
            'The minister said he had no knowledge of it.',
          ],
          ['Sie erklärte, dass die Methode sicher sei.', 'She explained that the method was safe.'],
          ['Er fragte, ob ich ihm helfen könne.', 'He asked whether I could help him.'],
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          'Take the infinitive stem and add **-e, -est, -e, -en, -et, -en**. Strong verbs do not change their vowel (er fahre, not er fährt). Only **sein** is irregular.',
        ),
        conjugationTable(
          'Konjunktiv I in the present.',
          ['sein', 'haben', 'kommen', 'können', 'werden'],
          {
            sein: konjunktiv1('sein'),
            haben: konjunktiv1('haben'),
            kommen: konjunktiv1('kommen'),
            können: konjunktiv1('können'),
            werden: konjunktiv1('werden'),
          },
        ),
        table(
          'Time in reported speech: the form follows the time of the original statement.',
          ['Original statement', 'Reported', 'Example'],
          [
            ['present (“Ich bin müde.”)', 'Konjunktiv I present', 'Er sagte, er sei müde.'],
            [
              'past (“Ich habe gearbeitet.”)',
              'sei / habe + Partizip II',
              'Er sagte, er habe gearbeitet.',
            ],
            [
              'future (“Ich komme morgen.”)',
              'werde + infinitive',
              'Er sagte, er werde am nächsten Tag kommen.',
            ],
          ],
        ),
      ),
      section(
        'substitute',
        'When to use Konjunktiv II instead',
        p(
          'The Konjunktiv I of the **ich, wir and sie (plural)** forms is usually the same as the indicative (wir kommen, sie haben). The reader could not tell that it is reported speech, so you use **Konjunktiv II** instead, and **würde + infinitive** if the Konjunktiv II form is also the same as the indicative past.',
        ),
        table(
          'Which form to choose (example: kommen / haben).',
          ['Person', 'Indicative', 'Konjunktiv I', 'Use in reported speech'],
          [
            ['ich', 'ich komme', 'ich komme (same)', 'ich käme'],
            ['er / sie / es', 'er kommt', 'er komme', 'er komme'],
            ['wir', 'wir kommen', 'wir kommen (same)', 'wir kämen'],
            ['sie (they)', 'sie haben', 'sie haben (same)', 'sie hätten'],
          ],
        ),
        examples(
          ['Sie sagten, sie hätten keine Zeit gehabt.', 'They said they had had no time.'],
          [
            'Die Kinder berichten, sie gingen in die Schule.',
            'The children report that they go to school. (gehen: Konjunktiv I = indicative, so Konjunktiv II)',
          ],
        ),
      ),
      section(
        'shift',
        'Pronouns, time words and questions',
        list(
          '**Pronouns follow the reporter’s point of view:** „Ich kann dir kein Geld leihen.“ → Er sagte, er könne mir kein Geld leihen.',
          '**Time and place words shift** when the report is made later or elsewhere: heute → an diesem Tag, gestern → am Vortag, morgen → am nächsten Tag, hier → dort.',
          '**Questions become ob- or W-clauses** with no question mark: „Kannst du helfen?“ → Er fragte, ob ich helfen könne.',
          '**Verbs that introduce reports:** sagen, erklären, behaupten, betonen, berichten, bestreiten, vermuten.',
        ),
      ),
      section(
        'compare',
        'Konjunktiv I or indicative?',
        p(
          'After **laut**, **zufolge**, **nach** or **gemäß** the verb is usually in the indicative: Laut dem Bericht steigen die Preise. In the news the Konjunktiv I is not always used consistently, and linguists disagree on whether Konjunktiv II also signals doubt.',
        ),
        compare(
          {
            title: 'Direct speech',
            question: 'Quotation',
            example: 'Er sagte: „Ich habe keine Zeit.“',
          },
          {
            title: 'Reported speech',
            question: 'Distance from the content',
            example: 'Er sagte, er habe keine Zeit.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er sagte, er hat keine Zeit.  ✓ Er sagte, er habe keine Zeit.',
          '✗ Sie sagten, sie haben Zeit.  ✓ Sie sagten, sie hätten Zeit.',
          '✗ Er sagte, er ist müde gewesen.  ✓ Er sagte, er sei müde gewesen.',
          '✗ Er sagte, er fährt.  ✓ Er sagte, er fahre. (the vowel does not change)',
        ),
      ),
    ],
    related: ['polite-forms', 'c21-unreal'],
    sources: [S.indirectSpeech, S.konjunktiv1],
  },
  {
    id: 'c21-nominal-style',
    title: 'Nominal style',
    tagline: 'From “weil der Zug Verspätung hatte” to “aufgrund der Verspätung des Zuges”',
    level: LEVEL,
    summary:
      'Formal texts replace clauses with noun phrases: verbs become nouns, conjunctions become prepositions (weil → wegen / aufgrund + Gen., obwohl → trotz + Gen., indem → durch + Akk.). The text becomes shorter and denser.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'There are two styles for the same content. The **verbal style** uses verbs and subordinate clauses; the **nominal style** puts the content into nouns and prepositional phrases. Official, academic and technical German prefers the nominal style because it packs a lot of information into few words. It is the focus of the reformulation task in the Goethe C2 exam.',
        ),
        examples(
          [
            'Weil der Zug Verspätung hatte, kamen wir zu spät.',
            'Because the train was late, we arrived late. (verbal)',
          ],
          [
            'Aufgrund der Verspätung des Zuges kamen wir zu spät.',
            'Because of the train’s delay, we arrived late. (nominal)',
          ],
        ),
      ),
      section(
        'table',
        'The conversions',
        table(
          'Clause → noun phrase.',
          ['Clause', 'Phrase', 'Example'],
          [
            ['weil, da', 'wegen / aufgrund + Gen.', 'Weil er krank war → Wegen seiner Krankheit'],
            ['obwohl', 'trotz + Gen.', 'Obwohl es regnete → Trotz des Regens'],
            ['indem', 'durch + Akk.', 'Indem man spart → Durch Sparen'],
            [
              'wenn (condition)',
              'bei + Dat. / im Falle + Gen.',
              'Wenn es Probleme gibt → Bei Problemen / Im Falle von Problemen',
            ],
            ['nachdem', 'nach + Dat.', 'Nachdem er gegessen hatte → Nach dem Essen'],
            [
              'ohne zu / ohne dass',
              'ohne + Akk.',
              'Er schrieb, ohne zu zögern → Er schrieb ohne Zögern',
            ],
            [
              'um … zu, damit',
              'zu + Dat. / zwecks + Gen.',
              'Um die Information bereitzustellen → Zur Bereitstellung der Information',
            ],
          ],
        ),
        list(
          '**The verb becomes a noun:** verzögern → die Verzögerung, sich weigern → die Weigerung, ankommen → die Ankunft.',
          '**The subject becomes a genitive:** Der Minister weigert sich. → die Weigerung des Ministers.',
          '**Tense and mood are lost.** The phrase has no tense, so context must show the time.',
          '**A light verb is needed when the main verb has moved into the noun:** Die Verzögerung erfolgte … , Der Bericht kam zur Veröffentlichung.',
        ),
      ),
      section(
        'compare',
        'Verbal or nominal?',
        compare(
          {
            title: 'Verbal style',
            question: 'Lively and clear',
            example: 'Weil die Preise stiegen, protestierten viele.',
          },
          {
            title: 'Nominal style',
            question: 'Dense and formal',
            example: 'Wegen der Preissteigerungen kam es zu Protesten.',
          },
        ),
        p(
          'Use the nominal style in reports, abstracts and official letters. In essays and speeches vary the two: too many nouns make a text lifeless, too many clauses make it long. In writing the genitive stays after wegen and trotz; the dative is widespread in speech.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Wegen dem Regen  ✓ Wegen des Regens (in formal writing)',
          '✗ Durch zu sparen  ✓ Durch Sparen (a noun after durch, not an infinitive with zu)',
          '✗ Trotz es regnete  ✓ Trotz des Regens',
          '✗ nach Essen  ✓ nach dem Essen (the noun needs an article)',
        ),
      ),
    ],
    related: ['c21-noun-verb', 'c21-word-formation'],
    sources: [S.nominalStyle, S.supportVerbs, S.prepositions],
  },
  {
    id: 'c21-unreal',
    title: 'Unreal comparisons and hindsight',
    tagline: 'Hätte ich das gewusst … / Er tut, als ob er schliefe',
    level: LEVEL,
    summary:
      'Konjunktiv II marks the unreal: als ob / als + Konjunktiv II for “as if”, hätte / wäre + participle for what did not happen, and verb-first conditionals (Hätte ich das gewusst, …). Criticism after the fact: Du hättest anrufen müssen.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The **Konjunktiv II** (Irrealis) expresses what is not real: an invented condition, an imagined comparison or a past that cannot be changed. At C2 you recognise it in three forms: the **unreal comparison**, the **conditional without wenn** and **hindsight** with modal verbs.',
        ),
        table(
          'Real and unreal conditions.',
          ['Type', 'Meaning', 'Example'],
          [
            ['real', 'possible in the present or future', 'Wenn sie kommt, spreche ich mit ihr.'],
            [
              'unreal present',
              'improbable or contrary to fact',
              'Wenn sie käme, würde ich mit ihr sprechen.',
            ],
            [
              'unreal past',
              'did not happen',
              'Wenn sie gekommen wäre, hätte ich mit ihr gesprochen.',
            ],
          ],
          2,
        ),
      ),
      section(
        'als-ob',
        'Unreal comparisons: als ob / als',
        p(
          'Comparisons that describe an impression, not a fact, use Konjunktiv II. Either **als ob** with the verb at the end, or **als** with the verb directly after it.',
        ),
        examples(
          ['Sie tut so, als ob sie nichts wüsste.', 'She acts as if she knew nothing.'],
          ['Er tut, als schliefe er.', 'He acts as if he were asleep.'],
          [
            'Ich fühlte mich, als wäre ich allein auf der Erde.',
            'I felt as if I were alone on earth.',
          ],
        ),
      ),
      section(
        'no-wenn',
        'The condition without wenn',
        p(
          'You can drop **wenn** and put the conjugated verb in first position. The rest of the clause stays the same, and the main clause often starts with **dann** or goes on directly.',
        ),
        examples(
          [
            'Hätte ich das gewusst, wäre ich früher gekommen.',
            'Had I known that, I would have come earlier.',
          ],
          [
            'Wärest du früher aufgestanden, hättest du den Termin nicht verpasst.',
            'Had you got up earlier, you would not have missed the appointment.',
          ],
        ),
        compare(
          {
            title: 'With wenn',
            question: 'Verb at the end',
            example: 'Wenn ich das gewusst hätte, wäre ich früher gekommen.',
          },
          {
            title: 'Without wenn',
            question: 'Verb first',
            example: 'Hätte ich das gewusst, wäre ich früher gekommen.',
          },
        ),
      ),
      section(
        'hindsight',
        'Hindsight and criticism after the fact',
        p(
          'For a past duty that was missed use **hätte + infinitive + modal infinitive**: the modal verb stays in the infinitive (not the participle) when it is used with another infinitive.',
        ),
        examples(
          ['Du hättest anrufen müssen.', 'You should have called.'],
          ['Wir hätten das früher entscheiden sollen.', 'We should have decided that earlier.'],
          ['Er hätte das wissen können.', 'He could have known that.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Wenn ich hätte gewusst, …  ✓ Wenn ich das gewusst hätte, … (the auxiliary goes to the end)',
          '✗ Du hättest anrufen gemusst.  ✓ Du hättest anrufen müssen. (infinitive of the modal)',
          '✗ Er tut, als ob er schläft.  ✓ Er tut, als ob er schliefe. (also: als schliefe er)',
          '✗ Wenn ich es gewusst hätte, ich wäre gekommen.  ✓ …, wäre ich gekommen. (verb second in the main clause)',
        ),
      ),
    ],
    related: ['polite-forms', 'c21-reported-speech'],
    sources: [S.konjunktiv2, S.conditional],
  },
  {
    id: 'c21-text-cohesion',
    title: 'Linking sentences',
    tagline: 'dabei, dadurch, daraufhin, zudem, hingegen',
    level: LEVEL,
    summary:
      'Pronominal adverbs (da(r)- + preposition) and connectors (zudem, außerdem, hingegen, daraufhin) tie sentences together without repeating nouns. Most stand in first position and the verb follows directly.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A good text is not a row of separate sentences. **Cohesion** means the sentences are visibly joined: a pronoun or adverb picks up what came before, and a connector says how the next sentence relates to it. In German two groups do this work: **pronominal adverbs** (dabei, dadurch, dafür …) and **adverb connectors** (zudem, hingegen, daraufhin …).',
        ),
      ),
      section(
        'pronominal',
        'Pronominal adverbs: da(r)- + preposition',
        p(
          'A pronominal adverb replaces a preposition plus a pronoun for a **thing or an idea**. Before a vowel it becomes **dar-**: darauf, darüber, darum, daran. They refer back to a noun or to a whole sentence. For people use a personal pronoun instead: Ich warte auf **ihn**, not “darauf”.',
        ),
        table(
          'Pronominal adverbs in the text.',
          ['Word', 'Meaning', 'Example'],
          [
            [
              'dabei',
              'at the same time, in doing so',
              'Er sanierte das Haus. Dabei entdeckte er alte Fresken.',
            ],
            [
              'dadurch',
              'by that means, as a result',
              'Die Kosten sanken. Dadurch wurde die Technik erschwinglich.',
            ],
            ['dafür', 'in return, for that', 'Das Büro ist klein. Dafür liegt es zentral.'],
            [
              'daraufhin',
              'after that; as a result',
              'Die Preise stiegen. Daraufhin kauften weniger Leute.',
            ],
          ],
        ),
      ),
      section(
        'connectors',
        'Connectors by function',
        table(
          'Adverb connectors, grouped by what they do.',
          ['Function', 'Connectors', 'Example'],
          [
            [
              'adding',
              'zudem, außerdem, ferner, überdies',
              'Das Konzept überzeugt. Zudem ist es günstig.',
            ],
            ['contrasting', 'hingegen, demgegenüber, indes', 'Inge gewann, Hans hingegen verlor.'],
            [
              'result / reaction',
              'daraufhin, dadurch, folglich',
              'Die Firma kündigte. Daraufhin streikten die Arbeiter.',
            ],
          ],
        ),
        p(
          'These connectors are adverbs, so they do not change the word order of the clause: usually they stand in first position and the **verb is second**, or they sit in the middle field. They do not send the verb to the end.',
        ),
      ),
      section(
        'compare',
        'Conjunction or adverb connector?',
        compare(
          {
            title: 'Conjunction',
            question: 'Verb at the end',
            example: 'Das Konzept überzeugt, weil es günstig ist.',
          },
          {
            title: 'Adverb connector',
            question: 'Verb second',
            example: 'Das Konzept überzeugt. Zudem ist es günstig.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Zudem es ist günstig.  ✓ Zudem ist es günstig.',
          '✗ Ich warte darauf auf ihn.  ✓ Ich warte auf ihn.',
          '✗ Dadurch die Kosten sanken.  ✓ Dadurch sanken die Kosten.',
        ),
      ),
    ],
    related: ['conjunctions', 'c21-contrast-cause', 'c21-consecutive'],
    sources: [S.pronominalAdverb, S.connector, S.zudem, S.hingegen, S.daraufhin],
  },
  {
    id: 'c21-concession',
    title: 'Concession in writing',
    tagline: 'wenngleich, so … auch, allerdings, freilich',
    level: LEVEL,
    summary:
      'obgleich, wenngleich and wenn auch are formal forms of obwohl (verb at the end). allerdings, freilich and indes are adverbs that grant a point and add a limit (verb second). so … auch means “however …”.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **concession** admits a fact that seems to speak against your statement, and then says that your statement still holds. In debates and essays it is the move “yes, but …”: you show that you saw the opposing point before you weigh it.',
        ),
      ),
      section(
        'conjunctions',
        'Concessive conjunctions: the verb goes to the end',
        table(
          'Conjunctions for “although”.',
          ['Conjunction', 'Register', 'Example'],
          [
            ['obwohl', 'neutral', 'Obwohl der Plan mutig ist, bleibt das Risiko hoch.'],
            [
              'obgleich, obschon, wiewohl',
              'formal',
              'Obgleich die Zahlen stimmen, bleibt Skepsis.',
            ],
            ['wenngleich', 'formal', 'Wenngleich der Plan mutig ist, bleibt das Risiko hoch.'],
            [
              'wenn … auch / auch wenn',
              'neutral to formal',
              'Auch wenn sie müde war, ließ sie sich nichts anmerken.',
            ],
          ],
        ),
        p(
          'All of these are subordinating conjunctions: finite verb at the end of the clause. The main clause that follows starts with its verb, or with **so / dennoch / doch** and then the verb: Wenn sie auch noch so müde war, so ließ sie sich doch nichts anmerken.',
        ),
        examples(
          [
            'So klug er auch ist, so hat er doch den Fehler übersehen.',
            'However clever he is, he overlooked the mistake.',
          ],
          [
            'So gut die Idee auch klingt, so ist sie doch zu teuer.',
            'However good the idea sounds, it is too expensive.',
          ],
        ),
      ),
      section(
        'adverbs',
        'Concessive adverbs: the verb is second',
        table(
          'Adverbs that grant a point and add a limit.',
          ['Adverb', 'Meaning', 'Example'],
          [
            [
              'allerdings',
              'however, though (limits the first part)',
              'Das stimmt, allerdings fehlen die Belege.',
            ],
            [
              'freilich',
              'admittedly, however',
              'Freilich muss man auch bemerken, dass er selten gewann.',
            ],
            ['indes / indessen', 'however', 'Du solltest indes die Form bewahren.'],
            ['trotzdem', 'nevertheless', 'Es regnete. Trotzdem gingen wir.'],
            ['wie dem auch sei', 'be that as it may', 'Wie dem auch sei, wir müssen entscheiden.'],
          ],
        ),
        p(
          '**allerdings** has a second, spoken use: stressed and alone it means “indeed!” (Tut es weh? – Allerdings!). In writing it is the unstressed “however”. As a conjunction trotzdem (with the verb at the end) exists but is considered non-standard; use obwohl instead and keep trotzdem as an adverb.',
        ),
      ),
      section(
        'compare',
        'Which one in which position?',
        compare(
          {
            title: 'Conjunction',
            question: 'Verb at the end',
            example: 'Wenngleich der Plan mutig ist, bleibt das Risiko hoch.',
          },
          {
            title: 'Adverb',
            question: 'Verb second',
            example: 'Der Plan ist mutig; allerdings bleibt das Risiko hoch.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Wenngleich der Plan ist mutig, …  ✓ Wenngleich der Plan mutig ist, …',
          '✗ Allerdings das Risiko bleibt hoch.  ✓ Allerdings bleibt das Risiko hoch.',
          '✗ Obwohl … , aber …  ✓ Obwohl … , … (no aber after an obwohl-clause)',
          '✗ So klug er auch ist, aber …  ✓ So klug er auch ist, so …',
        ),
      ),
    ],
    related: ['conjunctions', 'c21-contrast-cause'],
    sources: [S.concessiveClause, S.wenngleich, S.allerdings, S.freilich, S.indes],
  },
];
