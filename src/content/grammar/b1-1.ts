import { conjugate, conjugatePreterite, konjunktiv2, PRONOUNS } from '@/lib/german/conjugation';
import { compare, examples, list, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { B1_SOURCES as S } from './sources-b1';

const LEVEL = 'b1-1';

export const B11_TOPICS: GrammarTopic[] = [
  {
    id: 'plusquamperfekt',
    title: 'The Plusquamperfekt',
    tagline: 'What had already happened?',
    level: LEVEL,
    summary:
      'hatte or war + participle: the tense for something that happened before another past event. Nachdem + Plusquamperfekt, main clause in the Präteritum: Nachdem er gegessen hatte, ging er los.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The **Plusquamperfekt** (past perfect) looks back from a moment in the past to something that was **already over** by then. It stands to the Präteritum much as the Perfekt stands to the present: it is the “earlier” past.',
        ),
        examples(
          [
            'Sie waren sehr böse. Ich hatte wohl etwas falsch gemacht.',
            'They were very angry. I had probably done something wrong.',
          ],
          [
            'Als ich ankam, war der Zug schon abgefahren.',
            'When I arrived, the train had already left.',
          ],
          [
            'Ich hatte schon gegessen, als meine Freunde kamen.',
            'I had already eaten when my friends arrived.',
          ],
        ),
      ),
      section(
        'form',
        'How it is built',
        p(
          'Take the **Präteritum of haben or sein** (**hatte**, **war**) and add the **participle (Partizip II)** at the end. The choice of haben or sein is the same as in the Perfekt: sein for movement and change of state (gehen, fahren, aufstehen), sein and bleiben; haben for most other verbs.',
        ),
        table(
          'The Plusquamperfekt with haben and with sein.',
          ['Person', 'with haben', 'with sein'],
          PRONOUNS.map((pr) => [
            pr,
            `${conjugatePreterite('haben')[pr]} gespielt`,
            `${conjugatePreterite('sein')[pr]} gegangen`,
          ]),
        ),
        p(
          'The passive is formed in the same way: **war … worden** (Ich war gebissen worden). In a subordinate clause the auxiliary goes to the very end, after the participle: **… , nachdem er das Geld gefunden hatte.**',
        ),
      ),
      section(
        'nachdem',
        'nachdem and the sequence of tenses',
        p(
          '**nachdem** (after) starts a subordinate clause that tells what happened **first**. Put that clause in the Plusquamperfekt and the main clause, which tells what happened next, in the Präteritum. In everyday speech the main clause is usually in the Perfekt instead.',
        ),
        table(
          'Earlier event in the nachdem-clause, later event in the main clause.',
          ['Writing and stories', 'Speaking'],
          [
            [
              'Nachdem er gefrühstückt hatte, ging er zur Arbeit.',
              'Nachdem er gefrühstückt hatte, ist er zur Arbeit gegangen.',
            ],
            [
              'Nachdem er das Geld gefunden hatte, brachte er es zur Polizei.',
              'Nachdem er das Geld gefunden hatte, hat er es zur Polizei gebracht.',
            ],
          ],
        ),
        p(
          'The nachdem-clause can come first, in the middle or last. When it comes first, the main clause verb follows right after the comma (position 2 of the whole sentence). If you talk about the present or the future, use the Perfekt in the nachdem-clause and the present in the main clause: **Nachdem ich gegessen habe, gehe ich spazieren.**',
        ),
        compare(
          {
            title: 'als',
            question: 'one event in the past, at the same time',
            example: 'Als ich ankam, regnete es.',
          },
          {
            title: 'nachdem',
            question: 'one event happened before the other',
            example: 'Nachdem ich angekommen war, regnete es.',
          },
        ),
      ),
      section(
        'use',
        'When to use it',
        list(
          '**Before another past event:** Ich hatte den Schlüssel vergessen, deshalb musste ich klingeln.',
          '**After nachdem:** the earlier event is always in the Plusquamperfekt.',
          '**Not needed** when the order is clear from a time word or from the order of your sentences: Gestern bin ich aufgestanden und habe gefrühstückt.',
        ),
        tip(
          'Good to know',
          'The Plusquamperfekt is the least common past tense in German. In stories and reports you meet it next to the Präteritum; in speech you often meet it after nachdem and with words like schon and vorher.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Nachdem er hatte gegessen, ging er los.  ✓ Nachdem er gegessen hatte, ging er los.',
          '✗ Er hatte schon gegangen.  ✓ Er war schon gegangen.',
          '✗ Nachdem er gegessen hatte, er ging los.  ✓ Nachdem er gegessen hatte, ging er los.',
        ),
      ),
    ],
    related: ['perfekt', 'past-tense', 'word-order'],
    sources: [S.pluperfect, S.nachdem],
  },
  {
    id: 'concessive-clauses',
    title: 'obwohl and trotzdem',
    tagline: 'Saying “although” and “nevertheless”',
    level: LEVEL,
    summary:
      'Both express a result you would not expect. obwohl starts a subordinate clause (verb at the end); trotzdem is an adverb in a main clause (verb right after it).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **concessive** sentence names something that is true even though something else would speak against it. English uses “although” and “nevertheless”. German has two ways to say it, and they need **different word order**.',
        ),
        examples(
          [
            'Obwohl es regnet, gehe ich spazieren.',
            'Although it is raining, I am going for a walk.',
          ],
          [
            'Es regnet. Trotzdem gehe ich spazieren.',
            'It is raining. Nevertheless I am going for a walk.',
          ],
        ),
      ),
      section(
        'order',
        'Word order',
        table(
          'obwohl and trotzdem compared.',
          ['Feature', 'obwohl', 'trotzdem'],
          [
            [
              'Kind of word',
              'conjunction (starts a subordinate clause)',
              'adverb (links two main clauses)',
            ],
            ['Verb', 'at the end of the clause', 'right after trotzdem (position 2)'],
            ['Example', 'Ich gehe, obwohl ich müde bin.', 'Ich bin müde. Trotzdem gehe ich.'],
            ['Clause first', 'Obwohl ich müde bin, gehe ich.', 'Ich bin müde, trotzdem gehe ich.'],
          ],
        ),
        p(
          'After a subordinate clause that comes first, the main clause starts with its **verb**: Obwohl ich müde bin, **gehe** ich. trotzdem can also stand later in its clause: Ich gehe trotzdem.',
        ),
        p(
          'More formal words for obwohl are **obgleich**, **wenngleich** and **obschon**; they work in the same way. **(auch) wenn** also expresses “even if”: Auch wenn sie müde war, ließ sie sich nichts anmerken.',
        ),
      ),
      section(
        'compare',
        'obwohl, weil, trotzdem, deshalb',
        p(
          'obwohl and weil are opposites: **weil** gives the reason, **obwohl** the reason that did not work. trotzdem and deshalb are the opposite pair in main clauses.',
        ),
        table(
          'Reason and contrast.',
          ['Idea', 'Subordinate clause', 'Main clause'],
          [
            [
              'reason',
              'Ich bleibe zu Hause, weil ich krank bin.',
              'Ich bin krank. Deshalb bleibe ich zu Hause.',
            ],
            ['contrast', 'Ich gehe, obwohl ich krank bin.', 'Ich bin krank. Trotzdem gehe ich.'],
          ],
        ),
        p(
          'Another way to concede a point is **zwar … aber**: Es regnet zwar, aber ich gehe spazieren. Here the first clause only admits something, and aber introduces what matters.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Obwohl es regnet, ich gehe spazieren.  ✓ Obwohl es regnet, gehe ich spazieren.',
          '✗ Ich gehe, obwohl ich bin müde.  ✓ Ich gehe, obwohl ich müde bin.',
          '✗ Es regnet. Trotzdem ich gehe spazieren.  ✓ Es regnet. Trotzdem gehe ich spazieren.',
        ),
      ),
    ],
    related: ['conjunctions', 'word-order'],
    sources: [S.concessive, S.obwohl],
  },
  {
    id: 'genitive-prepositions',
    title: 'The genitive: wegen, trotz, während',
    tagline: 'Whose is it? Because of what? During what?',
    level: LEVEL,
    summary:
      'The genitive (des / der + -s / -es on masculine and neuter nouns) shows belonging and follows prepositions like wegen, trotz, während, innerhalb, außerhalb, statt and anlässlich.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The **genitive** (the “Wessen?” case) shows that something **belongs** to someone or something (das Auto **meines Vaters**, die Praxis **des Arztes**) and it follows a group of **prepositions**, mostly written German and more formal speech. The question word is **Wessen?** (whose).',
        ),
        examples(
          ['die Ergebnisse der Untersuchung', 'the results of the examination'],
          ['die Praxis des Arztes', 'the doctor’s practice'],
          [
            'Wegen des Wetters bleiben wir zu Hause.',
            'Because of the weather we are staying at home.',
          ],
        ),
      ),
      section(
        'forms',
        'The forms',
        table(
          'The articles in the nominative and the genitive; the genitive row is highlighted.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          [
            ['Nominative', 'der / ein', 'die / eine', 'das / ein', 'die'],
            ['Genitive', 'des / eines', 'der / einer', 'des / eines', 'der'],
          ],
          1,
        ),
        p(
          'Masculine and neuter nouns also add **-s** or **-es** in the genitive: des Arzt**es**, des Hauses, des Kindes. Use **-es** after s, ß, x and z (des Hauses, des Schlusses) and in many one-syllable words; use **-s** after longer words (des Computers, des Wetters). Feminine and plural nouns get **no ending**: der Frau, der Kinder.',
        ),
        p(
          'Nouns of the n-declension keep their **-n / -en** (des Kollegen, des Menschen). Names add **-s** without an article and stand in front: **Marias** Freundin, Annas Auto.',
        ),
      ),
      section(
        'prepositions',
        'The genitive prepositions',
        table(
          'The most important prepositions with the genitive.',
          ['Preposition', 'Meaning', 'Example'],
          [
            ['wegen', 'because of', 'wegen des Akzents, wegen der Prüfung'],
            ['trotz', 'despite', 'trotz des Lärms, trotz der Miete'],
            ['während', 'during', 'während der Arbeit, während des Festes'],
            ['innerhalb', 'within (time, place)', 'innerhalb einer Woche'],
            ['außerhalb', 'outside of', 'außerhalb der Öffnungszeiten'],
            ['statt / anstatt', 'instead of', 'statt des Busses'],
            ['anlässlich', 'on the occasion of (formal)', 'anlässlich des Geburtstags'],
          ],
        ),
        p(
          'These prepositions are the short form of a clause: **wegen** + noun corresponds to **weil**, **trotz** to **obwohl**, **während** to the conjunction **während**.',
        ),
        table(
          'Preposition with a noun or conjunction with a clause.',
          ['Preposition + genitive', 'Conjunction + clause'],
          [
            ['Wegen des Regens bleiben wir hier.', 'Weil es regnet, bleiben wir hier.'],
            ['Trotz des Regens gehen wir spazieren.', 'Obwohl es regnet, gehen wir spazieren.'],
            ['Während der Pause sprechen wir.', 'Während wir Pause haben, sprechen wir.'],
          ],
        ),
      ),
      section(
        'dative',
        'The dative in everyday speech',
        p(
          'In conversation you often hear the dative: **wegen dem Wetter**, **trotz dem Regen**. In writing, in exams and in formal situations use the genitive. A few cases are different: a plural noun without an article would look the same as the nominative, so the dative is normal there (**wegen Problemen**), and for time expressions **innerhalb von** + dative is common (innerhalb von zwei Wochen).',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ wegen das Wetter  ✓ wegen des Wetters',
          '✗ trotz des Lärm  ✓ trotz des Lärms',
          '✗ während der Arbeit ich höre Musik  ✓ Während der Arbeit höre ich Musik.',
        ),
      ),
    ],
    related: ['concessive-clauses', 'dative', 'possessives'],
    sources: [S.genitive, S.wegen, S.trotz, S.waehrend, S.innerhalb, S.statt],
  },
  {
    id: 'infinitive-zu',
    title: 'The infinitive with zu',
    tagline: 'Ich habe Lust, ins Kino zu gehen.',
    level: LEVEL,
    summary:
      'After many verbs, nouns and adjectives the second verb is an infinitive with zu at the end of its group: Ich versuche, mehr Sport zu machen. um … zu, ohne … zu and statt … zu work in the same way.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Some verbs and expressions need a second verb to be complete. It is an **infinitive with zu** at the **end** of the clause. If it has more words than zu and the verb (an “extended infinitive”), it is set off with a **comma**.',
        ),
        examples(
          ['Ich versuche, mehr Sport zu machen.', 'I try to do more sport.'],
          ['Es ist wichtig, pünktlich zu sein.', 'It is important to be on time.'],
          ['Ich habe Lust, im Team zu arbeiten.', 'I feel like working in a team.'],
        ),
      ),
      section(
        'when',
        'When do you need zu?',
        table(
          'What goes with a zu-infinitive.',
          ['Group', 'Examples'],
          [
            [
              'verbs',
              'anfangen, aufhören, beginnen, versuchen, vergessen, planen, hoffen, vorhaben, empfehlen',
            ],
            [
              'haben + noun',
              'Lust haben, Zeit haben, keine Lust haben, Angst haben, Probleme haben',
            ],
            ['es ist + adjective', 'es ist wichtig, schwer, einfach, schön, möglich, verboten'],
            ['verbs with es', 'es lohnt sich, es fällt mir schwer'],
          ],
        ),
        p(
          'There is **no zu** after **modal verbs** (Ich kann schwimmen), after **werden** (Ich werde schlafen), after **lassen** and after verbs of perception and movement such as **sehen**, **hören**, **bleiben** and **gehen** (Sie bleibt sitzen, Wir gehen essen).',
        ),
      ),
      section(
        'position',
        'Where does zu go?',
        p(
          'zu stands **directly before the infinitive**. With a **separable verb** zu goes **between the prefix and the verb** and everything is one word: **an**zurufen, **mit**zuarbeiten, **auf**zuräumen. In the Perfekt the group ends in **zu haben / zu sein**, in the passive in **zu werden**.',
        ),
        table(
          'zu with different kinds of verbs.',
          ['Kind of verb', 'Example'],
          [
            ['normal verb', 'Ich habe vergessen, die Rechnung zu bezahlen.'],
            ['separable verb', 'Ich habe vergessen, dich anzurufen.'],
            ['Perfekt', 'Er behauptet, die Tür abgeschlossen zu haben.'],
            ['passive', 'Sie hofft, nicht entdeckt zu werden.'],
          ],
        ),
      ),
      section(
        'um-ohne-statt',
        'um … zu, ohne … zu, statt … zu',
        p(
          'Three small conjunctions start an extended infinitive and always need a **comma**. The person who does the action is the **subject of the main clause**.',
        ),
        table(
          'um, ohne and statt with zu.',
          ['Phrase', 'Meaning', 'Example'],
          [
            ['um … zu', 'in order to (purpose)', 'Er kommt, um auszusagen.'],
            ['ohne … zu', 'without …ing', 'Er ging, ohne zu bezahlen.'],
            ['statt / anstatt … zu', 'instead of …ing', 'Sie bleibt sitzen, statt uns zu helfen.'],
          ],
        ),
        p(
          'If the other clause has a **different subject**, use a clause with its own subject: **damit**, **ohne dass**, **statt dass**.',
        ),
      ),
      section(
        'brauchen',
        'brauchen + zu',
        p(
          '**brauchen** with **nicht**, **kein** or **nur** works like a modal verb for “need”, but it takes **zu**: Du **brauchst nicht** so viel **vorzubereiten**. Sie **brauchen nur** das Formular **auszufüllen**. In the negative it replaces **müssen**: Du musst nicht kommen = Du brauchst nicht zu kommen.',
        ),
      ),
      section(
        'comma',
        'The comma',
        list(
          'Always set off an extended infinitive: Er liebt es, lange auszuschlafen.',
          'The comma is a must with um, ohne, statt, anstatt, außer and als: Sie hat trainiert, ohne zu schwitzen.',
          'No comma when the zu-infinitive is part of the verb bracket in the main clause or follows sein, haben, brauchen or scheinen: Du brauchst nicht zu kommen. Er scheint zu schlafen.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ich kann zu schwimmen.  ✓ Ich kann schwimmen.',
          '✗ Ich habe vergessen, zu anrufen.  ✓ Ich habe vergessen anzurufen.',
          '✗ Du brauchst morgen zu kommen.  ✓ Du musst morgen kommen. / Du brauchst morgen nicht zu kommen.',
        ),
      ),
    ],
    related: ['modal-verbs', 'separable-verbs', 'word-order'],
    sources: [S.infinitive, S.commaRules, S.brauchen, S.ohne, S.statt],
  },
  {
    id: 'two-part-conjunctions',
    title: 'Two-part conjunctions',
    tagline: 'nicht nur … sondern auch, weder … noch',
    level: LEVEL,
    summary:
      'Some conjunctions come in pairs and link two words, phrases or clauses: nicht nur … sondern auch, sowohl … als auch, entweder … oder, weder … noch, zwar … aber, einerseits … andererseits.',
    sections: [
      section(
        'what',
        'What they are',
        p(
          'A **two-part conjunction** puts one word in front of each of the two things you link. Together they show how the two parts relate: both, either, neither, not only.',
        ),
        table(
          'The pairs.',
          ['Pair', 'Meaning', 'Example'],
          [
            [
              'nicht nur … sondern auch',
              'not only … but also',
              'Sie spricht nicht nur Deutsch, sondern auch Spanisch.',
            ],
            ['sowohl … als auch', 'both … and', 'Sowohl sie als auch er sprechen Englisch.'],
            [
              'entweder … oder',
              'either … or (one of two)',
              'Wir fahren entweder mit dem Zug oder mit dem Bus.',
            ],
            ['weder … noch', 'neither … nor', 'Ich habe weder Zeit noch Geld.'],
            ['zwar … aber', 'admittedly … but', 'Die Wohnung ist zwar klein, aber günstig.'],
            [
              'einerseits … andererseits',
              'on the one hand … on the other',
              'Einerseits ist sie teuer, andererseits liegt sie zentral.',
            ],
          ],
        ),
      ),
      section(
        'order',
        'Word order and agreement',
        list(
          '**Two words or phrases:** the order does not change: Ich brauche weder einen Stift noch Papier.',
          '**Two clauses:** the word before the first part takes position 1, so the verb follows directly: **Zwar ist** die Wohnung klein, aber sie ist günstig. **Einerseits** möchte ich bleiben, **andererseits** habe ich Heimweh.',
          '**sowohl … als auch** takes a plural verb when two persons are linked: Sowohl sie als auch er sprechen Englisch.',
          '**weder … noch** already negates the sentence, so there is **no nicht**.',
          '**nicht nur … sondern auch:** sondern needs a comma in front of it, and the two parts should be of the same kind: nicht nur gut, sondern auch billig.',
        ),
      ),
      section(
        'compare',
        'entweder … oder or weder … noch?',
        compare(
          {
            title: 'entweder … oder',
            question: 'one of two things is true',
            example: 'Wir fahren entweder heute oder morgen.',
          },
          {
            title: 'weder … noch',
            question: 'neither of the two things is true',
            example: 'Wir fahren weder heute noch morgen.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ich habe weder keine Zeit noch Geld.  ✓ Ich habe weder Zeit noch Geld.',
          '✗ Sie spricht nicht nur Deutsch, aber auch Spanisch.  ✓ … sondern auch Spanisch.',
          '✗ Wir fahren sowohl mit dem Zug oder mit dem Bus.  ✓ … sowohl mit dem Zug als auch mit dem Bus.',
        ),
      ),
    ],
    related: ['conjunctions', 'negation'],
    sources: [S.sondern, S.weder, S.sowohl, S.entweder],
  },
  {
    id: 'adjectives-as-nouns',
    title: 'Adjectives as nouns',
    tagline: 'der Bekannte, die Erwachsenen, etwas Neues',
    level: LEVEL,
    summary:
      'An adjective can be used as a noun: it gets a capital letter but keeps its adjective ending, so it changes with article and case (der Bekannte – ein Bekannter – mit dem Bekannten).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Many words for people are adjectives or participles used as nouns: **bekannt** → **der Bekannte** (the acquaintance), **erwachsen** → **die Erwachsenen**, **angestellt** → **der Angestellte**. They are written with a **capital letter** and still **decline like an adjective**.',
        ),
        table(
          'Common examples.',
          ['Word', 'Meaning', 'Based on'],
          [
            ['der / die Bekannte', 'acquaintance', 'bekannt'],
            ['der / die Verwandte', 'relative', 'verwandt'],
            ['der / die Jugendliche', 'teenager', 'jugendlich'],
            ['der / die Erwachsene', 'adult', 'erwachsen'],
            ['der / die Deutsche', 'German person', 'deutsch'],
            ['der / die Angestellte', 'employee', 'angestellt'],
            ['der / die Kranke', 'sick person', 'krank'],
            ['der / die Studierende', 'student', 'studierend (Partizip I)'],
          ],
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          'Follow the rule for adjectives after the article: with **der / die / das** the ending is **-e** or **-en**, with **ein** the masculine nominative becomes **-er** (**ein Bekannter**) but the feminine stays **-e** (**eine Bekannte**). In the plural there is **no gender**.',
        ),
        table(
          'der Bekannte with the definite article.',
          ['Case', 'masc.', 'fem.', 'plural'],
          [
            ['Nominative', 'der Bekannte', 'die Bekannte', 'die Bekannten'],
            ['Accusative', 'den Bekannten', 'die Bekannte', 'die Bekannten'],
            ['Dative', 'dem Bekannten', 'der Bekannten', 'den Bekannten'],
            ['Genitive', 'des Bekannten', 'der Bekannten', 'der Bekannten'],
          ],
        ),
        table(
          'ein Bekannter with the indefinite article.',
          ['Case', 'masc.', 'fem.', 'plural (no article)'],
          [
            ['Nominative', 'ein Bekannter', 'eine Bekannte', 'Bekannte'],
            ['Accusative', 'einen Bekannten', 'eine Bekannte', 'Bekannte'],
            ['Dative', 'einem Bekannten', 'einer Bekannten', 'Bekannten'],
            ['Genitive', 'eines Bekannten', 'einer Bekannten', 'Bekannter'],
          ],
        ),
      ),
      section(
        'neuter',
        'Things and ideas: das Gute, etwas Neues',
        p(
          'The **neuter** form stands for things, ideas or qualities in general: **das Gute**, **das Schöne**. After **etwas, nichts, viel, alles, wenig** the ending is **-es** and the adjective is capitalised: **etwas Neues**, **nichts Besonderes**, **viel Gutes**, **alles Gute**.',
        ),
        examples(
          ['Ich habe etwas Neues gelernt.', 'I learned something new.'],
          ['Hier gibt es nichts Besonderes.', 'There is nothing special here.'],
          ['Alles Gute zum Geburtstag!', 'All the best for your birthday!'],
        ),
      ),
      section(
        'compare',
        'der Bekannte or der Kollege?',
        p(
          'Do not mix this up with the **n-declension**: nouns like **der Kollege** (den Kollegen) are nouns that simply end in -n in the cases; **der Bekannte** is an adjective, so it changes with the article: **ein Bekannter**, but **ein Kollege**.',
        ),
        compare(
          {
            title: 'adjective as noun',
            question: 'ein Bekannter / der Bekannte',
            example: 'Ich habe einen Bekannten getroffen.',
          },
          {
            title: 'n-declension noun',
            question: 'ein Kollege / der Kollege',
            example: 'Ich habe einen Kollegen getroffen.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ ein Bekannte  ✓ ein Bekannter',
          '✗ mit den Verwandte  ✓ mit den Verwandten',
          '✗ die erwachsenen  ✓ die Erwachsenen',
          '✗ etwas Neue  ✓ etwas Neues',
        ),
      ),
    ],
    related: ['genitive-prepositions', 'dative', 'articles'],
    sources: [S.substantivization, S.participle1],
  },
  {
    id: 'futur-1',
    title: 'Futur I',
    tagline: 'What will happen? werden + infinitive',
    level: LEVEL,
    summary:
      'werden in position 2 and the infinitive at the end: Ich werde nächstes Jahr in Berlin studieren. It is used for predictions, promises and guesses; for plans the present with a time word is more common.',
    sections: [
      section(
        'form',
        'How it is built',
        p(
          'The **Futur I** is made of a conjugated form of **werden** in position 2 and the **infinitive at the end** of the clause.',
        ),
        table(
          'Futur I of kommen.',
          ['Person', 'werden', 'Futur I'],
          PRONOUNS.map((pr) => [pr, conjugate('werden')[pr], `${conjugate('werden')[pr]} kommen`]),
        ),
        examples(
          ['Ich werde nächstes Jahr in Berlin studieren.', 'I will study in Berlin next year.'],
          ['Es wird morgen regnen.', 'It will rain tomorrow.'],
          ['Wirst du mir helfen?', 'Will you help me?'],
        ),
        p(
          'In a subordinate clause the two verbs go to the end, with **werden last**: Ich glaube, dass Roboter viele Arbeiten übernehmen **werden**.',
        ),
      ),
      section(
        'use',
        'When to use it',
        list(
          '**Predictions about the future:** Roboter werden viele Arbeiten übernehmen.',
          '**Promises and decisions:** Ich werde dich nie vergessen. Ich werde mehr Sport machen.',
          '**Guesses about the present** with **wohl, sicher, bestimmt:** Er wird wohl im Stau stehen. (He is probably stuck in traffic.)',
          '**A strong command** in the du form: Du wirst jetzt dein Mittagessen aufessen.',
        ),
      ),
      section(
        'present',
        'The present is often enough',
        p(
          'For plans and fixed events Germans normally use the **present tense with a time word**. Futur I is only needed when the future is not clear from the context, or for predictions and guesses.',
        ),
        table(
          'Present with a time word or Futur I.',
          ['Present + time word (normal)', 'Futur I'],
          [
            ['Nächstes Jahr ziehe ich um.', 'Nächstes Jahr werde ich umziehen.'],
            ['Morgen kommt der Techniker.', 'Der Techniker wird morgen kommen.'],
            ['Der Zug fährt um zehn Uhr.', '(unusual for timetables)'],
          ],
        ),
      ),
      section(
        'werden',
        'Three jobs of werden',
        table(
          'werden as a full verb, with the infinitive and with the participle.',
          ['Use', 'Form', 'Example'],
          [
            [
              'full verb: to become',
              'werden + noun / adjective (Perfekt: ist geworden)',
              'Er wird Arzt. Sie ist müde geworden.',
            ],
            ['Futur I', 'werden + infinitive', 'Es wird regnen.'],
            ['passive', 'werden + participle (Perfekt: ist … worden)', 'Das Auto wird repariert.'],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ich werde morgen gehe.  ✓ Ich werde morgen gehen.',
          '✗ Er wird ist krank.  ✓ Er wird wohl krank sein.',
          '✗ Ich bin Lehrer worden.  ✓ Ich bin Lehrer geworden.',
        ),
      ),
    ],
    related: ['modal-verbs', 'word-order', 'perfekt'],
    sources: [S.futur, S.werden],
  },
  {
    id: 'konjunktiv-2-past',
    title: 'Konjunktiv II of the past',
    tagline: 'What would have happened? What a pity …',
    level: LEVEL,
    summary:
      'hätte or wäre + participle at the end for unreal situations and regrets in the past: Wenn ich früher aufgestanden wäre, hätte ich den Bus nicht verpasst.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The present Konjunktiv II (Wenn ich Zeit **hätte**, **käme** ich) talks about an unreal situation **now**. The **Konjunktiv II of the past** talks about something that did **not happen** earlier, and about its imagined results or about regrets.',
        ),
        examples(
          [
            'Wenn ich das gewusst hätte, wäre ich gekommen.',
            'If I had known that, I would have come.',
          ],
          ['Ich hätte den Zug genommen.', 'I would have taken the train.'],
          ['Hätte ich doch früher angefangen!', 'If only I had started earlier!'],
        ),
      ),
      section(
        'form',
        'How it is built',
        p(
          'Use the **Konjunktiv II of haben or sein** (**hätte**, **wäre**) and the **participle at the end**. The choice of hätte or wäre is the same as in the Perfekt.',
        ),
        table(
          'Konjunktiv II of the past with haben and with sein.',
          ['Person', 'with haben', 'with sein'],
          PRONOUNS.map((pr) => [
            pr,
            `${konjunktiv2('haben')[pr]} gelernt`,
            `${konjunktiv2('sein')[pr]} gegangen`,
          ]),
        ),
        table(
          'The same sentence in three “times”.',
          ['Real (Perfekt)', 'Unreal now', 'Unreal in the past'],
          [
            [
              'Ich hatte keine Zeit, deshalb bin ich nicht gekommen.',
              'Wenn ich Zeit hätte, käme ich.',
              'Wenn ich Zeit gehabt hätte, wäre ich gekommen.',
            ],
          ],
        ),
      ),
      section(
        'if',
        'Unreal conditions and wishes',
        list(
          '**Condition in the past:** Wenn ich früher aufgestanden **wäre**, **hätte** ich den Bus nicht verpasst. Both clauses use the Konjunktiv II of the past.',
          '**Without wenn:** the verb moves to the first position: **Wäre** ich früher aufgestanden, **hätte** ich den Bus nicht verpasst.',
          '**Wish that did not come true:** **Hätte** ich doch früher angefangen! / **Wäre** ich bloß nicht so müde gewesen!',
          '**Regret or criticism:** Das **hätte** ich nicht sagen sollen. Du **hättest** mich anrufen können.',
        ),
      ),
      section(
        'modal',
        'With a modal verb',
        p(
          'With a modal verb, **hätte** is followed by **two infinitives**: the main verb first, the modal verb last. This replaces the participle of the modal verb: Ich **hätte früher aufstehen sollen**. In a subordinate clause **hätte** comes before the two infinitives: Ich ärgere mich, dass ich nicht früher **hätte** aufstehen können.',
        ),
        examples(
          ['Ich hätte früher aufstehen sollen.', 'I should have got up earlier.'],
          ['Wir hätten mehr sparen müssen.', 'We should have saved more.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Wenn ich hätte gewusst, …  ✓ Wenn ich es gewusst hätte, …',
          '✗ Wenn ich früher aufgestanden hätte, …  ✓ Wenn ich früher aufgestanden wäre, …',
          '✗ Ich hätte früher aufgestanden sollen.  ✓ Ich hätte früher aufstehen sollen.',
        ),
      ),
    ],
    related: ['plusquamperfekt', 'perfekt', 'polite-forms'],
    sources: [S.subjunctive],
  },
];
