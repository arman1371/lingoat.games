import { conjugate } from '@/lib/german/conjugation';
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
import { B2_SOURCES as S } from './sources-b2';

const LEVEL = 'b2-2';

export const B22_TOPICS: GrammarTopic[] = [
  {
    id: 'noun-prepositions',
    title: 'More nouns with fixed prepositions',
    tagline: 'Angst vor or Angst um? Streit um or Streit mit?',
    level: LEVEL,
    summary:
      'Some nouns take two different prepositions with different meanings (Angst vor = afraid of, Angst um = worried about). Learn each noun with its preposition and case, and ask with wo(r)- for things or preposition + wer / wen / wem for people.',
    sections: [
      section(
        'more',
        'Nouns for relationships and society',
        p(
          'You already know the principle: a noun asks for one preposition and that preposition asks for one case. Here are more nouns from the topics of relationships, family and diversity.',
        ),
        table(
          'Nouns with a fixed preposition.',
          ['Noun', 'Preposition + case', 'Example'],
          [
            ['die Hoffnung', 'auf + accusative', 'die Hoffnung auf einen Neuanfang'],
            ['der Einfluss', 'auf + accusative', 'der Einfluss der Eltern auf die Kinder'],
            ['das Vorurteil', 'gegen + accusative', 'Vorurteile gegen Fremde'],
            ['die Toleranz', 'gegenüber + dative', 'Toleranz gegenüber anderen Lebensformen'],
            ['die Ursache', 'für + accusative', 'die Ursache für den Streit'],
            ['der Grund', 'für + accusative', 'der Grund für die Trennung'],
            ['der Beitrag', 'zu + dative', 'ein Beitrag zur Integration'],
            ['die Beziehung', 'zu + dative', 'die Beziehung zu den Großeltern'],
            ['das Problem', 'mit + dative', 'Probleme mit den Nachbarn'],
            ['der Unterschied', 'zwischen + dative', 'der Unterschied zwischen den Generationen'],
          ],
        ),
      ),
      section(
        'two',
        'Same noun, two prepositions',
        p(
          'A few nouns change their meaning with the preposition. Look at the preposition first, then at what the sentence says.',
        ),
        compare(
          {
            title: 'Angst vor + dative',
            question: 'afraid of',
            example: 'Er hat Angst vor dem Hund.',
          },
          {
            title: 'Angst um + accusative',
            question: 'worried about someone or something',
            example: 'Er hat Angst um seinen Bruder.',
          },
        ),
        compare(
          {
            title: 'Streit um + accusative',
            question: 'a quarrel over a thing',
            example: 'der Streit um das Erbe',
          },
          {
            title: 'Streit mit + dative',
            question: 'a quarrel with a person',
            example: 'der Streit mit dem Nachbarn',
          },
        ),
      ),
      section(
        'questions',
        'Asking about them',
        p(
          'Ask about a **thing** with **wo(r)- + preposition**: **Worauf** hofft er? **Wofür** ist er verantwortlich? Ask about a **person** with the **preposition + question word**: **Auf wen** hofft er? **Mit wem** streitet sie? Before a vowel the **r** appears: wo**r**auf, wo**r**über, wo**r**an.',
        ),
        examples(
          ['Wovor hat sie Angst? – Vor dem Alleinsein.', 'What is she afraid of? – Being alone.'],
          ['Vor wem hat sie Angst? – Vor ihrem Chef.', 'Who is she afraid of? – Her boss.'],
          ['Worauf hofft er? – Auf eine Antwort.', 'What does he hope for? – An answer.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Vorurteile für Fremde  ✓ Vorurteile gegen Fremde',
          '✗ Er hat Angst vor seinen Bruder. (when you mean “worried about”)  ✓ Er hat Angst um seinen Bruder.',
          '✗ Mit was streitet sie?  ✓ Womit streitet sie? (a thing) · Mit wem streitet sie? (a person)',
        ),
      ),
    ],
    related: ['nouns-with-prepositions', 'adjective-prepositions', 'dative'],
    sources: [S.object, S.pronominalAdverb, S.angst],
  },
  {
    id: 'comparative-clauses',
    title: 'Comparing with als and wie',
    tagline: 'genauso … wie · schöner, als ich dachte · anders als',
    level: LEVEL,
    summary:
      'Equal: so / genauso … wie. Unequal: comparative + als. Both can introduce a whole clause with the verb at the end, often in the Plusquamperfekt (schöner, als ich gedacht hatte). anders als compares unlike things; je nachdem, ob … says that it depends.',
    sections: [
      section(
        'basic',
        'Equal and unequal',
        table(
          'Comparing with a word or a clause.',
          ['Meaning', 'Pattern', 'Example'],
          [
            ['equal', 'so / genauso + adjective + wie', 'Sie ist genauso alt, wie er aussieht.'],
            [
              'more or less',
              'comparative + als',
              'Das Studium war schwerer, als ich gedacht hatte.',
            ],
            ['different', 'anders + als', 'Sie ist ganz anders, als man sagt.'],
          ],
        ),
        p(
          'The part after **wie** or **als** can be a single word (**Er ist größer als ich**) or a whole subordinate clause with the verb at the end.',
        ),
      ),
      section(
        'clause',
        'Comparing with a clause',
        p(
          'When you compare reality with an **earlier expectation**, the clause after **als** often stands in the **Plusquamperfekt** (it is about something before the moment now): **Es war billiger, als ich gedacht hatte.** If the expectation is about the same time, the present or Präteritum is enough: **Martin kocht besser, als Robert annimmt.**',
        ),
        examples(
          [
            'Es war genauso teuer, wie ich erwartet hatte.',
            'It was just as expensive as I had expected.',
          ],
          [
            'Das Studium war schwerer, als ich gedacht hatte.',
            'The studies were harder than I had thought.',
          ],
          [
            'Er verhält sich anders, als wir erwartet haben.',
            'He behaves differently from what we expected.',
          ],
        ),
      ),
      section(
        'manner',
        'Comparisons of manner',
        p(
          'For things that really are the case use **wie** (equal) and **als** (different). For an **imagined** comparison use **als ob** or **als wenn** with Konjunktiv II: **Er tut, als ob er alles wüsste.**',
        ),
        compare(
          { title: 'real', question: 'wie / als', example: 'Es ist so, wie du sagst.' },
          {
            title: 'imagined',
            question: 'als ob + Konjunktiv II',
            example: 'Es ist, als ob die Zeit stillstünde.',
          },
        ),
      ),
      section(
        'depends',
        'It depends: je nachdem',
        p(
          '**je nachdem, ob / wie / was / wo …** says that the answer varies with a circumstance: **Wir fahren mit dem Auto oder der Bahn, je nachdem, wie das Wetter wird.** The verb goes to the end.',
        ),
        mistake(
          'Watch out',
          '✗ Er ist größer wie ich.  ✓ Er ist größer als ich.',
          '✗ Er ist so groß als ich.  ✓ Er ist so groß wie ich.',
          '✗ Sie ist anders wie ich.  ✓ Sie ist anders als ich.',
          '✗ Es war besser, als ich habe gedacht.  ✓ Es war besser, als ich gedacht hatte.',
        ),
      ),
    ],
    related: ['comparison', 'conjunctions', 'perfekt'],
    sources: [S.comparativeClause],
  },
  {
    id: 'modal-hearsay',
    title: 'sollen and wollen: reporting claims',
    tagline: 'Er soll berühmt sein. Er will es nicht gewusst haben.',
    level: LEVEL,
    summary:
      'sollen = “it is said that” (you only heard it), wollen = “claims that” (the subject says it about themselves, and you doubt it). For the past put the infinitive Perfekt after the modal: Er soll krank gewesen sein.',
    sections: [
      section(
        'what',
        'Two modal verbs that report',
        p(
          'Modal verbs usually say what someone **must, may, can or wants to do**. Two of them can also **pass on information** whose truth the speaker does not vouch for.',
        ),
        table(
          'sollen and wollen as reporting verbs.',
          ['Verb', 'Meaning', 'Who said it?', 'Example'],
          [
            [
              'sollen',
              'it is said that …',
              'other people (press, rumour)',
              'Der Koch soll berühmt sein.',
            ],
            ['wollen', 'claims that …', 'the subject itself', 'Der Koch will berühmt sein.'],
          ],
        ),
        compare(
          {
            title: 'sollen: a rumour',
            question: 'others say so',
            example: 'Die Suppe soll sehr gesund sein.',
          },
          {
            title: 'wollen: a claim',
            question: 'he says so himself',
            example: 'Er will das nie gesagt haben.',
          },
        ),
      ),
      section(
        'forms',
        'The forms',
        conjugationTable('Present of sollen and wollen.', ['sollen', 'wollen'], {
          sollen: conjugate('sollen'),
          wollen: conjugate('wollen'),
        }),
        p(
          'Use the present form of the modal and the **infinitive** of the main verb at the end. The meaning “reporting” is not a different form: it is the context that tells it apart from “must” and “wants to”.',
        ),
      ),
      section(
        'past',
        'About the past',
        p(
          'To say that something is **reported to have happened**, use the **infinitive Perfekt** (participle + haben / sein) at the end. The modal itself stays in the present.',
        ),
        table(
          'Present and past with sollen and wollen.',
          ['Verb', 'About now', 'About the past'],
          [
            ['sollen', 'Er soll reich sein.', 'Er soll reich gewesen sein.'],
            ['sollen', 'Das Dorf soll schön sein.', 'Der Fahrer soll langsam gefahren sein.'],
            ['wollen', 'Sie will es wissen.', 'Sie will es nicht gewusst haben.'],
            ['wollen', 'Er will in Madrid leben.', 'Er will drei Jahre in Madrid gelebt haben.'],
          ],
        ),
      ),
      section(
        'versus',
        'Not the same as the everyday meaning',
        table(
          'Everyday meaning and reporting meaning.',
          ['Sentence', 'Meaning'],
          [
            ['Ich soll Wasser holen.', 'I am told to fetch water. (an order)'],
            [
              'Der Politiker soll Wasser gestohlen haben.',
              'The politician is said to have stolen water.',
            ],
            ['Er will ein Haus kaufen.', 'He wants to buy a house.'],
            ['Er will ein Haus gekauft haben.', 'He claims to have bought a house.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Er soll gewesen krank.  ✓ Er soll krank gewesen sein.',
          '✗ Sie will es nicht gewusst.  ✓ Sie will es nicht gewusst haben.',
          '✗ Er soll krank sein gewesen.  ✓ Er soll krank gewesen sein.',
        ),
      ),
    ],
    related: ['modal-verbs', 'perfekt', 'konjunktiv-1'],
    sources: [S.sollen, S.wollen, S.modalVerbs],
  },
  {
    id: 'consecutive-connectors',
    title: 'Expressing consequences',
    tagline: 'sodass, so … dass, folglich, somit, zu … als dass',
    level: LEVEL,
    summary:
      'sodass and so … dass start a clause with the verb at the end. In a new main clause folglich, infolgedessen, somit, daher and deshalb are followed directly by the verb. zu … , als dass + Konjunktiv II means “too … to”.',
    sections: [
      section(
        'clause',
        'The result in a clause',
        p(
          'A **consecutive clause** says what **follows** from the main clause. The connector starts a subordinate clause: the finite verb goes to the end.',
        ),
        table(
          'Connectors that start a clause.',
          ['Connector', 'Example'],
          [
            ['sodass / so dass', 'Es regnete stark, sodass das Fest ausfiel.'],
            ['so + adjective … dass', 'Es regnete so stark, dass das Fest ausfiel.'],
            ['derart … dass (formal)', 'Er war derart müde, dass er sofort einschlief.'],
          ],
        ),
        p(
          'In **so … dass** the word **so** (or **derart**) stands in the main clause before the adjective or adverb and gives the degree.',
        ),
      ),
      section(
        'adverbs',
        'The result in a new sentence',
        p(
          'The connectors **folglich** (consequently), **infolgedessen** (as a result), **somit** (thus, so), **daher** and **deshalb** are adverbs. They fill position 1, so the **verb comes next**: **Er hatte kaum Zeit. Folglich musste er absagen.**',
        ),
        table(
          'Adverbs that state a consequence.',
          ['Word', 'Feeling', 'Example'],
          [
            [
              'folglich',
              'logical conclusion',
              'Die Preise sind gestiegen. Folglich kaufen weniger Leute ein.',
            ],
            [
              'infolgedessen',
              'as a result of that, formal',
              'Der Zug fiel aus. Infolgedessen kamen wir zu spät.',
            ],
            ['somit', 'thus, so', 'Er hatte keinen Führerschein, somit musste Holger fahren.'],
            ['daher / deshalb', 'for this reason', 'Es regnet. Deshalb bleiben wir zu Hause.'],
          ],
        ),
      ),
      section(
        'zu',
        'Too … to: zu … als dass',
        p(
          'For a **negative consequence** you can use **zu + adjective … , als dass + Konjunktiv II**: the result is not possible because it is too much. With the same subject **zu … um … zu** is simpler.',
        ),
        examples(
          [
            'Die Miete ist zu hoch, als dass ich sie zahlen könnte.',
            'The rent is too high for me to pay it.',
          ],
          [
            'Es ist zu spät, als dass wir noch helfen könnten.',
            'It is too late for us to still help.',
          ],
          [
            'Wir sind zu weit gekommen, um jetzt aufzugeben.',
            'We have come too far to give up now.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Er hatte kaum Zeit, folglich er musste absagen.  ✓ Folglich musste er absagen.',
          '✗ Es regnete so stark, sodass das Fest ausfiel.  ✓ Es regnete so stark, dass das Fest ausfiel. (or: …, sodass …)',
          '✗ Die Miete ist zu hoch, als dass ich sie zahle.  ✓ … als dass ich sie zahlen könnte.',
        ),
      ),
    ],
    related: ['causal-expressions', 'conjunctions', 'word-order'],
    sources: [S.consecutiveClause, S.folglich, S.infolgedessen, S.somit],
  },
  {
    id: 'irgend-pronouns',
    title: 'irgend-, einige, manche, mehrere, sämtliche',
    tagline: 'Indefinite words',
    level: LEVEL,
    summary:
      'irgend- makes a word indefinite (irgendwer, irgendetwas, irgendein, irgendwo). For quantities use einige, manche, mehrere, etliche or sämtliche (all); after them the adjective takes the plural ending of an adjective without article: einige gute Ideen.',
    sections: [
      section(
        'irgend',
        'irgend-: “any”, “some”',
        p(
          'The prefix **irgend-** stresses that it does not matter which person, thing or place, or that you do not know. Many pronouns take it.',
        ),
        table(
          'Words with irgend-.',
          ['Word', 'Meaning', 'Example'],
          [
            [
              'irgendjemand / irgendwer',
              'somebody, anybody',
              'Hat irgendjemand meinen Schlüssel gesehen?',
            ],
            ['irgendetwas / irgendwas', 'something, anything', 'Hast du irgendetwas gehört?'],
            [
              'irgendein, irgendeine …',
              'some … or other, any',
              'Du kannst mit irgendeinem der Fahrräder fahren.',
            ],
            ['irgendwo / irgendwohin', 'somewhere', 'Ich habe das irgendwo gelesen.'],
            ['irgendwann', 'sometime', 'Irgendwann will ich nach Japan reisen.'],
          ],
        ),
        p(
          '**irgendein** is singular and declines like **ein**, with an extra **-e-** in some forms (irgend**einem**, irgend**einer**, irgend**eines**).',
        ),
      ),
      section(
        'quantity',
        'Words for a quantity',
        table(
          'Indefinite quantity words.',
          ['Word', 'Meaning', 'Example'],
          [
            ['einige', 'a few, some', 'Wir müssen noch einige Änderungen vornehmen.'],
            ['mehrere', 'several (more than two)', 'Mehrere Nachbarn haben sich beschwert.'],
            ['manche', 'some (but not all), a number of', 'Manche Menschen trainieren täglich.'],
            ['etliche', 'quite a few', 'Etliche Gäste blieben bis spät.'],
            ['sämtliche', 'all, every single one (formal)', 'Sämtliche Kosten werden erstattet.'],
          ],
        ),
        p(
          '**mehrere** is plural only (mehrere, mehrerer, mehreren, mehrere). **einige** and **manche** are mainly plural too.',
        ),
      ),
      section(
        'endings',
        'Adjective endings after them',
        p(
          'After **einige, mehrere, etliche** an adjective has the endings it would have **without an article**: nominative and accusative **-e**, dative **-en**, genitive **-er**. After **manche** and **sämtliche** the same strong ending is usual in the nominative and accusative, though the weak **-en** is also found.',
        ),
        examples(
          ['einige gute Ideen', 'a few good ideas'],
          ['mit einigen guten Ideen', 'with a few good ideas'],
          ['mehrere junge Leute', 'several young people'],
          ['sämtliche neuen Mitarbeiter · sämtliche neue Mitarbeiter', 'all the new employees'],
        ),
        mistake(
          'Watch out',
          '✗ mit einige gute Ideen  ✓ mit einigen guten Ideen',
          '✗ mehrere Nachbar  ✓ mehrere Nachbarn',
        ),
      ),
    ],
    related: ['plurals', 'articles', 'negation'],
    sources: [S.indefinitePronouns, S.irgendein, S.mehrere, S.einige],
  },
  {
    id: 'modal-clauses',
    title: 'How? By what means?',
    tagline: 'indem, dadurch dass, durch, mithilfe, ohne dass',
    level: LEVEL,
    summary:
      'indem (by …ing) and dadurch, dass give the means in a clause with the verb at the end. Shorter: durch + accusative, mithilfe von + dative, mittels + genitive. ohne dass / ohne … zu name what is missing.',
    sections: [
      section(
        'means',
        'The means: indem and dadurch, dass',
        p(
          'A clause with **indem** answers **Wie? Auf welche Weise?** It names the **method**. **dadurch, dass** means the same and is a bit more formal. Both send the verb to the end, and both subjects are the same person or thing.',
        ),
        examples(
          [
            'Man bleibt fit, indem man regelmäßig trainiert.',
            'You stay fit by exercising regularly.',
          ],
          [
            'Er verbesserte sich dadurch, dass er jeden Tag übte.',
            'He improved by practising every day.',
          ],
        ),
        tip(
          'Do not confuse',
          'indem can be old-fashioned for “while” (temporal), but today it nearly always means “by …ing”.',
        ),
      ),
      section(
        'noun',
        'The means as a noun',
        table(
          'Ways to name a means without a clause.',
          ['Expression', 'Case', 'Example'],
          [
            ['durch', 'accusative', 'Er löste das Problem durch Nachdenken.'],
            [
              'mithilfe von',
              'dative (mithilfe + genitive is also found)',
              'Mithilfe einer App zählt sie ihre Schritte.',
            ],
            ['mittels', 'genitive (formal)', 'Der Text wurde mittels eines Programms übersetzt.'],
            ['mit', 'dative', 'Sie reist mit dem Zug.'],
          ],
        ),
      ),
      section(
        'ohne',
        'What is missing: ohne dass, ohne … zu',
        p(
          '**ohne dass** (verb at the end) and **ohne … zu + infinitive** say that something happens **without** something else. Use **zu** when both parts have the same subject, **dass** when the subjects differ.',
        ),
        compare(
          {
            title: 'same subject',
            question: 'ohne … zu',
            example: 'Er ging, ohne sich zu verabschieden.',
          },
          {
            title: 'different subjects',
            question: 'ohne dass',
            example: 'Er ging, ohne dass jemand es merkte.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Man bleibt fit, indem regelmäßig trainieren.  ✓ Man bleibt fit, indem man regelmäßig trainiert.',
          '✗ Er ging, ohne dass sich zu verabschieden.  ✓ Er ging, ohne sich zu verabschieden.',
          '✗ durch einem Programm  ✓ durch ein Programm',
        ),
      ),
    ],
    related: ['conjunctions', 'accusative', 'es-dass'],
    sources: [S.modalClause, S.indem, S.dadurch],
  },
  {
    id: 'extended-participle',
    title: 'The extended participle',
    tagline: 'das vom Kunden bestellte Produkt',
    level: LEVEL,
    summary:
      'Before a noun a participle can carry more information: article + extra information + participle with an adjective ending + noun. Partizip I (-d) means “at the same time”, Partizip II “finished” or passive. Check by turning it into a relative clause.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The extended participle packs a whole relative clause in front of a noun. It is typical of written and official German, and it is why some sentences look long and heavy. **Read it from the noun backwards.**',
        ),
        table(
          'The same idea as an extended participle and as a relative clause.',
          ['Extended participle', 'Relative clause'],
          [
            [
              'das vom Kunden bestellte Produkt',
              'das Produkt, das der Kunde bestellt hat / das vom Kunden bestellt wurde',
            ],
            ['die ständig wachsende Zahl', 'die Zahl, die ständig wächst'],
            ['die an der Uni studierenden Frauen', 'die Frauen, die an der Uni studieren'],
            ['ein seit Jahren geplantes Projekt', 'ein Projekt, das seit Jahren geplant wird'],
          ],
        ),
      ),
      section(
        'forms',
        'Partizip I and Partizip II',
        p(
          '**Partizip I** = infinitive + **-d** (lachen → lachend). It is always **active** and happens **at the same time** as the main verb: **die steigenden Preise** = die Preise, die steigen. **Partizip II** looks back: with a **transitive** verb it is **passive** (**das bestellte Produkt** = das bestellt wurde), with a verb of movement or change that uses **sein** it is **active** (**die gestern angekommenen Gäste** = die angekommen sind).',
        ),
        table(
          'Which participle?',
          ['Participle', 'Time', 'Meaning', 'Example'],
          [
            ['Partizip I', 'at the same time', 'active', 'die lachenden Kinder'],
            ['Partizip II (transitive)', 'before', 'passive', 'das reparierte Handy'],
            ['Partizip II (movement, change)', 'before', 'active', 'die angekommenen Gäste'],
          ],
        ),
      ),
      section(
        'order',
        'Order and endings',
        p(
          'The pattern is **article – extra information – participle – noun**. The participle takes the ending of an adjective (it follows the article and the case): **das bestellte Produkt**, **dem bestellten Produkt**, **ein bestelltes Produkt**. Everything between the article and the participle belongs to the participle.',
        ),
        examples(
          [
            'das vom Kunden gestern bestellte Produkt',
            'the product the customer ordered yesterday',
          ],
          [
            'Wir prüfen die bei uns eingegangenen Anfragen.',
            'We check the enquiries that have come in with us.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ das bestellt Produkt  ✓ das bestellte Produkt (adjective ending)',
          '✗ die wachsend Zahl  ✓ die wachsende Zahl',
          '✗ das Produkt bestellte vom Kunden  ✓ das vom Kunden bestellte Produkt',
        ),
      ),
    ],
    related: ['comparison', 'perfekt', 'state-passive'],
    sources: [S.participle1],
  },
  {
    id: 'adversative-connectors',
    title: 'Expressing contrast',
    tagline: 'wohingegen, demgegenüber, im Gegensatz zu, einerseits … andererseits',
    level: LEVEL,
    summary:
      'während and wohingegen start a clause with the verb at the end. dagegen, hingegen, jedoch and demgegenüber open a main clause, so the verb follows directly. im Gegensatz zu takes the dative; einerseits … andererseits weighs two sides.',
    sections: [
      section(
        'clause',
        'A clause with a contrast',
        p(
          'You know **während** from the contrast lesson in B2.1. **wohingegen** (whereas) works the same way and sounds more written: the verb goes to the end.',
        ),
        examples(
          [
            'Er mag Berge, wohingegen sie das Meer liebt.',
            'He likes mountains, whereas she loves the sea.',
          ],
          ['Er ging nach Hause, wohingegen sie dablieb.', 'He went home, whereas she stayed.'],
        ),
      ),
      section(
        'adverbs',
        'Adverbs: the verb is next',
        table(
          'Words that contrast, with the verb in position 2.',
          ['Word', 'Example'],
          [
            ['hingegen', 'Sie lebt in der Stadt, er hingegen wohnt auf dem Land.'],
            ['dagegen', 'Die Preise steigen. Die Löhne bleiben dagegen gleich.'],
            ['jedoch', 'Der Plan war gut, jedoch fehlte das Geld.'],
            ['demgegenüber', 'Demgegenüber können neue Modelle viel mehr. (formal)'],
          ],
        ),
        p(
          '**demgegenüber** is formal and written. It sets something against a fact that was just mentioned. All four can stand in position 1 or after the subject or verb.',
        ),
      ),
      section(
        'noun',
        'Contrast with a noun: im Gegensatz zu',
        p(
          '**im Gegensatz zu + dative** puts two things side by side: **Im Gegensatz zu Wien ist Graz ruhiger.** The preposition **zu** needs the dative: zum Segelfliegen, zu anderen Ländern.',
        ),
      ),
      section(
        'einerseits',
        'einerseits … andererseits',
        p(
          'To weigh two sides, introduce the first with **einerseits** and the second with **andererseits**. Both are adverbs: the verb stays in position 2 right after them (or after the subject).',
        ),
        examples(
          [
            'Einerseits ist die Stadt teuer, andererseits bietet sie viele Chancen.',
            'On the one hand the city is expensive, on the other hand it offers many chances.',
          ],
          [
            'Die Landwirtschaft ist einerseits Opfer des Klimawandels, andererseits trägt sie dazu bei.',
            'Agriculture is on the one hand a victim of climate change, on the other hand it contributes to it.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Er mag Berge, wohingegen sie liebt das Meer.  ✓ … wohingegen sie das Meer liebt.',
          '✗ Hingegen sie wohnt auf dem Land.  ✓ Hingegen wohnt sie auf dem Land.',
          '✗ Im Gegensatz zu Wien Graz ist ruhiger.  ✓ Im Gegensatz zu Wien ist Graz ruhiger.',
        ),
      ),
    ],
    related: ['adversative', 'conjunctions', 'word-order'],
    sources: [
      S.adversativeClause,
      S.wohingegen,
      S.hingegen,
      S.demgegenueber,
      S.gegensatz,
      S.einerseits,
    ],
  },
  {
    id: 'concessive-advanced',
    title: 'Despite that: concessive connectors',
    tagline: 'obgleich, wenngleich, dennoch, zwar … aber, trotz, ungeachtet',
    level: LEVEL,
    summary:
      'obwohl, obgleich, wenngleich and auch wenn start clauses with the verb at the end. dennoch and trotzdem open a main clause: verb second. zwar … aber / jedoch concede a point before the counter-argument. trotz and ungeachtet take the genitive.',
    sections: [
      section(
        'clauses',
        'Clauses with the verb at the end',
        p(
          'A **concessive clause** names something that would usually prevent the main statement but does not. **obwohl** is the neutral word. **obgleich** and **wenngleich** mean the same and sound more written.',
        ),
        table(
          'Concessive conjunctions.',
          ['Conjunction', 'Style', 'Example'],
          [
            ['obwohl', 'neutral', 'Obwohl er erkältet ist, geht er zur Arbeit.'],
            ['obgleich', 'written', 'Er geht zur Arbeit, obgleich er stark erkältet ist.'],
            [
              'wenngleich',
              'written',
              'Viele fahren mit dem Auto, wenngleich es schneller wäre, das Rad zu nehmen.',
            ],
            ['auch wenn', 'neutral, also for the unreal', 'Auch wenn es teuer ist, kaufe ich es.'],
          ],
        ),
      ),
      section(
        'adverbs',
        'Adverbs: dennoch, trotzdem, zwar … aber',
        p(
          '**dennoch** and **trotzdem** are adverbs: they take position 1 or come after the verb, and the verb stays in position 2. **zwar … aber / jedoch** admit a point first and then argue against it.',
        ),
        examples(
          [
            'Es regnete, dennoch gingen wir spazieren.',
            'It was raining, nevertheless we went for a walk.',
          ],
          [
            'Er ist zwar jung, aber sehr erfahren.',
            'He is young, it is true, but very experienced.',
          ],
          [
            'Die Aufgabe war zwar leicht, jedoch dauerte sie lange.',
            'The task was easy, but it took long.',
          ],
        ),
      ),
      section(
        'prepositions',
        'With a noun: trotz and ungeachtet',
        table(
          'Prepositions of concession.',
          ['Preposition', 'Case', 'Style', 'Example'],
          [
            [
              'trotz',
              'genitive (dative in some regions)',
              'neutral',
              'Sie gingen trotz des Regens spazieren.',
            ],
            [
              'ungeachtet',
              'genitive, may follow the noun',
              'formal',
              'Ungeachtet der Rückschläge gibt er nicht auf.',
            ],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Dennoch wir gingen spazieren.  ✓ Dennoch gingen wir spazieren.',
          '✗ Obgleich er ist erkältet, geht er zur Arbeit.  ✓ Obgleich er erkältet ist, geht er zur Arbeit.',
          '✗ Trotz dem Regen gingen sie spazieren. (rather spoken)  ✓ Trotz des Regens gingen sie spazieren.',
        ),
      ),
    ],
    related: ['auch-wenn', 'conjunctions', 'causal-expressions'],
    sources: [S.concessiveClause, S.obgleich, S.wenngleich, S.trotz, S.ungeachtet],
  },
  {
    id: 'perfekt-double-infinitive',
    title: 'Perfekt with a double infinitive',
    tagline: 'Ich habe ihn kommen hören. Wir haben das Auto reparieren lassen.',
    level: LEVEL,
    summary:
      'With a modal verb or with hören, sehen, lassen + infinitive the Perfekt uses a second infinitive instead of the participle: Ich habe ihn kommen hören. In a subordinate clause haben stands before the two infinitives: …, weil ich ihn habe kommen hören.',
    sections: [
      section(
        'rule',
        'The rule',
        p(
          'Normally the Perfekt has **haben** or **sein** and a **participle** (gemacht). If the verb has another **infinitive** next to it, the participle is replaced by an **infinitive**. This is the **Ersatzinfinitiv** (double infinitive).',
        ),
        table(
          'Without and with a second infinitive.',
          ['Without an infinitive', 'With an infinitive'],
          [
            ['Ich habe das nicht gewollt.', 'Ich habe das nicht tun wollen.'],
            ['Er hat es nicht gekonnt.', 'Er hat nicht kommen können.'],
            ['Sie hat es gesehen.', 'Sie hat es kommen sehen.'],
            ['Er hat das Buch zu Hause gelassen.', 'Er hat das Buch zu Hause liegen lassen.'],
          ],
        ),
      ),
      section(
        'verbs',
        'Which verbs?',
        list(
          'all **modal verbs**: können, müssen, wollen, sollen, dürfen, mögen',
          '**lassen**: Wir haben das Auto reparieren lassen.',
          '**sehen, hören, fühlen** + infinitive: Ich habe sie singen hören.',
          '**helfen** and **brauchen**: both forms occur, the double infinitive is common.',
        ),
        p(
          'The auxiliary is **haben**. With a modal verb you can also just use the **Präteritum** (**Ich musste gehen**), which is usually simpler in speech.',
        ),
      ),
      section(
        'order',
        'Word order in a subordinate clause',
        p(
          'In a subordinate clause the conjugated verb normally goes last. Here it moves **in front of the two infinitives**: **… dass er hat gehen müssen**, **… weil ich ihn habe kommen hören.**',
        ),
        compare(
          {
            title: 'main clause',
            question: 'haben in position 2',
            example: 'Er hat gehen müssen.',
          },
          {
            title: 'subordinate clause',
            question: 'haben before the infinitives',
            example: 'Er sagte, dass er hat gehen müssen.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Ich habe ihn kommen gehört.  ✓ Ich habe ihn kommen hören.',
          '✗ Er hat gehen gemusst.  ✓ Er hat gehen müssen.',
          '✗ Sie sagte, dass sie hat müssen gehen.  ✓ Sie sagte, dass sie hat gehen müssen.',
          '✗ Ich habe das Auto repariert lassen.  ✓ Ich habe das Auto reparieren lassen.',
        ),
      ),
    ],
    related: ['perfekt', 'modal-verbs', 'word-order'],
    sources: [S.doubleInfinitive, S.modalVerbs, S.lassen],
  },
  {
    id: 'adjective-prepositions',
    title: 'Adjectives with fixed prepositions',
    tagline: 'stolz auf, zufrieden mit, abhängig von',
    level: LEVEL,
    summary:
      'Many adjectives need a fixed preposition and case: stolz auf + accusative, zufrieden mit + dative, abhängig von + dative, verantwortlich für + accusative, interessiert an + dative, bereit zu + dative. Ask with wo(r)-; before a clause use da(r)-.',
    sections: [
      section(
        'what',
        'Adjective + preposition',
        p(
          'Like verbs and nouns, some adjectives are tied to **one preposition**, and the preposition fixes the **case**. Learn them as a pair.',
        ),
        examples(
          ['Sie ist stolz auf ihre Tochter.', 'She is proud of her daughter.'],
          ['Wir sind mit dem Service zufrieden.', 'We are satisfied with the service.'],
          ['Er ist von seinen Eltern abhängig.', 'He is dependent on his parents.'],
        ),
      ),
      section(
        'table',
        'Common pairs',
        table(
          'Adjectives with a fixed preposition.',
          ['Adjective', 'Preposition + case', 'Example'],
          [
            ['stolz', 'auf + accusative', 'stolz auf die Leistung'],
            ['neugierig', 'auf + accusative', 'neugierig auf das Ergebnis'],
            ['angewiesen', 'auf + accusative', 'auf Hilfe angewiesen'],
            ['verantwortlich', 'für + accusative', 'verantwortlich für die Kasse'],
            ['bekannt', 'für + accusative', 'bekannt für seinen Humor'],
            ['zufrieden', 'mit + dative', 'zufrieden mit dem Ergebnis'],
            ['abhängig', 'von + dative', 'abhängig von der Technik'],
            ['begeistert', 'von + dative', 'begeistert von der Stadt'],
            ['überzeugt', 'von + dative', 'überzeugt von der Idee'],
            ['interessiert', 'an + dative', 'interessiert an Kunst'],
            ['reich', 'an + dative', 'reich an Erfahrung'],
            ['bereit', 'zu + dative', 'bereit zum Kompromiss'],
            ['froh', 'über + accusative', 'froh über die Nachricht'],
          ],
        ),
      ),
      section(
        'questions',
        'Questions and clauses',
        p(
          'Ask about a thing with **wo(r)- + preposition**: **Worauf** ist die Stadt stolz? **Womit** bist du zufrieden? For a person use preposition + wer / wen / wem: **Auf wen** ist sie stolz? Before a **dass**-clause or a **zu**-infinitive use **da(r)- + preposition**: **Ich bin stolz darauf, dass du es geschafft hast.**',
        ),
        examples(
          [
            'Das Projekt, worauf die Stadt stolz ist, ist ein Park.',
            'The project that the city is proud of is a park.',
          ],
          ['Er ist bereit dazu, mehr zu zahlen.', 'He is ready to pay more.'],
        ),
        mistake(
          'Watch out',
          '✗ stolz von seiner Tochter  ✓ stolz auf seine Tochter',
          '✗ zufrieden von dem Service  ✓ zufrieden mit dem Service',
          '✗ Ich bin stolz, dass du gewonnen hast.  ✓ Ich bin stolz darauf, dass du gewonnen hast.',
          '✗ Mit was bist du zufrieden?  ✓ Womit bist du zufrieden?',
        ),
      ),
    ],
    related: ['nouns-with-prepositions', 'noun-prepositions', 'accusative'],
    sources: [S.object, S.pronominalAdverb],
  },
  {
    id: 'modal-assumption',
    title: 'Assumptions with modal verbs',
    tagline: 'Er muss krank sein. Das dürfte stimmen. Das kann nicht sein.',
    level: LEVEL,
    summary:
      'Present: muss (sure), dürfte (probably), könnte (maybe) + infinitive. Past: modal + infinitive Perfekt: Er muss es vergessen haben. kann nicht … sein means it is impossible. wohl and vielleicht weaken a guess.',
    sections: [
      section(
        'what',
        'Guessing with modal verbs',
        p(
          'Modal verbs can express how **sure** you are about something. This use is called **epistemic**. The sentence is not about duty or permission, it is a **conclusion or guess**.',
        ),
        table(
          'Degrees of certainty.',
          ['Verb', 'Certainty', 'Example'],
          [
            ['muss', 'very sure (conclusion)', 'Er muss krank sein.'],
            ['dürfte', 'probably', 'Das dürfte strafbar sein.'],
            ['könnte / kann', 'possibly', 'Das könnte Phishing sein.'],
            ['kann nicht', 'impossible', 'Das kann nicht stimmen.'],
          ],
        ),
        compare(
          {
            title: 'conclusion',
            question: 'from clues',
            example: 'Du musst Annekes Schwester sein.',
          },
          { title: 'guess', question: 'probably', example: 'Er dürfte schon zu Hause sein.' },
        ),
      ),
      section(
        'present',
        'About now',
        conjugationTable('Present of müssen, dürfen and können.', ['müssen', 'dürfen', 'können'], {
          müssen: conjugate('müssen'),
          dürfen: conjugate('dürfen'),
          können: conjugate('können'),
        }),
        p(
          'For “probably” the modal **dürfen** stands in the **Konjunktiv II**: **dürfte** (er / sie / es), **dürften** (wir / sie), and the main verb is an infinitive at the end. **können** can also appear in the Konjunktiv II (**könnte**) for a weaker guess.',
        ),
      ),
      section(
        'past',
        'About the past',
        p(
          'To guess about the **past** put the **infinitive Perfekt** (participle + haben / sein) at the end. The modal stays in the present (muss) or Konjunktiv II (dürfte, könnte).',
        ),
        table(
          'Present and past.',
          ['About now', 'About the past'],
          [
            ['Er muss krank sein.', 'Er muss krank gewesen sein.'],
            ['Er muss das Passwort kennen.', 'Er muss das Passwort vergessen haben.'],
            ['Sie dürfte zu Hause sein.', 'Sie dürfte schon abgereist sein.'],
            ['Das könnte Betrug sein.', 'Das könnte Betrug gewesen sein.'],
            ['Das kann nicht stimmen.', 'Er kann es nicht gewesen sein.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Er muss krank gewesen.  ✓ Er muss krank gewesen sein.',
          '✗ Er muss vergessen das Passwort haben.  ✓ Er muss das Passwort vergessen haben.',
          '✗ Das darf nicht stimmen. (= not allowed)  ✓ Das kann nicht stimmen. (= impossible)',
        ),
        tip(
          'Without a modal',
          'Futur I and II also express an assumption: Er wird schon schlafen. Er wird den Zug verpasst haben. Add wohl or vielleicht to weaken any of these guesses.',
        ),
      ),
    ],
    related: ['assumptions', 'modal-verbs', 'modal-hearsay'],
    sources: [S.muessen, S.duerfen, S.koennen, S.modalVerbs],
  },
];
