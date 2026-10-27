import { conjugatePreterite, konjunktiv2, PRONOUNS } from '@/lib/german/conjugation';
import { compare, examples, list, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { B1_SOURCES as S } from './sources-b1';

const LEVEL = 'b1-2';

export const B12_TOPICS: GrammarTopic[] = [
  {
    id: 'je-desto',
    title: 'je … desto / umso',
    tagline: 'The more …, the more …',
    level: LEVEL,
    summary:
      'je + comparative starts a subordinate clause (verb at the end); desto or umso + comparative starts the main clause, with the verb right after the comparative: Je mehr ich arbeite, desto müder bin ich.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'The pattern **je … desto** links two comparatives and says that two things **grow together**: when the first changes, the second changes in the same direction. English: “the more …, the more …”.',
        ),
        examples(
          ['Je mehr ich arbeite, desto müder bin ich.', 'The more I work, the more tired I am.'],
          [
            'Je früher wir anfangen, umso schneller sind wir fertig.',
            'The earlier we start, the sooner we are done.',
          ],
          [
            'Je länger ich das Bild betrachtete, umso deutlicher wurde mir seine Schönheit.',
            'The longer I looked at the picture, the clearer its beauty became.',
          ],
        ),
      ),
      section(
        'order',
        'Word order',
        table(
          'The two halves of the sentence.',
          ['Part', 'Clause 1', 'Clause 2'],
          [
            ['Start', 'je + comparative', 'desto / umso + comparative'],
            [
              'Verb',
              'at the end (subordinate clause)',
              'directly after the comparative (position 2 of the whole sentence)',
            ],
            ['Example', 'Je mehr Überstunden ich mache,', 'desto müder bin ich.'],
          ],
        ),
        p(
          '**desto** and **umso** mean the same; umso is a little more common in writing. The comparative is the **adjective or adverb with -er** (müder, schneller, besser), or **mehr / weniger**. The comparative words of je and desto do not have to be the same kind: Je **mehr** ich übe, desto **besser** spreche ich.',
        ),
        p(
          'In short or spoken versions desto can be left out, and je can be repeated: **Je länger geredet wurde, je weniger kam die Diskussion voran.** A very short form without verbs is also possible: **Je mehr, umso besser.**',
        ),
      ),
      section(
        'comparatives',
        'Comparatives you need',
        table(
          'Regular and irregular comparatives.',
          ['Positive', 'Comparative', 'Example'],
          [
            ['viel', 'mehr', 'Je mehr, desto besser.'],
            ['wenig', 'weniger', 'Je weniger ich schlafe, desto schlechter fühle ich mich.'],
            ['gut', 'besser', 'Je besser ich bin, desto mehr Spaß habe ich.'],
            ['gern', 'lieber', 'Je länger ich hier wohne, desto lieber mag ich die Stadt.'],
            ['früh', 'früher', 'Je früher, desto besser.'],
            ['groß', 'größer', 'Je größer die Stadt, desto lauter ist sie.'],
          ],
        ),
      ),
      section(
        'je-other',
        'Other uses of je',
        list(
          '**je = ever** in questions and negative statements: Hast du das je gesehen? Das ist die beste Idee, die ich je gehört habe.',
          '**je nachdem** = depending on: Je nachdem, wie das Wetter ist, gehen wir spazieren.',
          '**je nach** + noun (dative) = depending on: je nach Testergebnis.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Je mehr ich arbeite, desto ich bin müder.  ✓ Je mehr ich arbeite, desto müder bin ich.',
          '✗ Je mehr ich arbeite, desto müde bin ich.  ✓ … desto müder bin ich.',
          '✗ Je mehr ich arbeite, desto müder ich bin.  ✓ … desto müder bin ich.',
        ),
      ),
    ],
    related: ['comparison', 'word-order'],
    sources: [S.je],
  },
  {
    id: 'als-ob',
    title: 'als ob + Konjunktiv II',
    tagline: 'It looks as if …, he acts as if …',
    level: LEVEL,
    summary:
      'als ob (as if) starts a subordinate clause for a comparison that is not true or not sure. The verb stands at the end, usually in the Konjunktiv II: Er tut so, als ob er alles wüsste.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          '**als ob** compares something with an **imagined situation**: it is how things seem, not how they are. The synonyms **als wenn** and **wie wenn** are also possible, **als ob** is the most common.',
        ),
        examples(
          ['Er tut so, als ob er alles wüsste.', 'He acts as if he knew everything.'],
          [
            'Du siehst aus, als ob du nicht geschlafen hättest.',
            'You look as if you had not slept.',
          ],
          ['Es sieht so aus, als ob es regnen würde.', 'It looks as if it was going to rain.'],
        ),
      ),
      section(
        'form',
        'Which verb form?',
        p(
          'The verb goes to the **end** of the als ob clause and is usually in the **Konjunktiv II**, because the comparison is unreal. For the present use **wäre, hätte, könnte, wüsste** or **würde + infinitive**. For something earlier use **hätte / wäre + participle**.',
        ),
        table(
          'als ob with the present and the past Konjunktiv II.',
          ['Time', 'Konjunktiv II', 'Example'],
          [
            [
              'now',
              'wäre, hätte, könnte, wüsste, würde + infinitive',
              'Er tut so, als ob er Zeit hätte.',
            ],
            ['earlier', 'hätte / wäre + participle', 'Er tut so, als ob er nichts gehört hätte.'],
          ],
        ),
        table(
          'wäre and hätte.',
          ['Person', 'sein', 'haben'],
          PRONOUNS.map((pr) => [pr, konjunktiv2('sein')[pr], konjunktiv2('haben')[pr]]),
        ),
      ),
      section(
        'variants',
        'Variants',
        list(
          '**als + verb:** the same meaning with the verb right after als: Er tut so, als wüsste er alles. (no ob, so the verb is in position 2 of the als clause)',
          '**Real impressions** can also be in the indicative, above all after es sieht so aus / es scheint: Es sieht so aus, als ob es regnet.',
          '**so tun, als ob** = to pretend, **aussehen, als ob** = to look as if, **sich fühlen, als ob** = to feel as if.',
        ),
      ),
      section(
        'compare',
        'als ob or wenn?',
        compare(
          {
            title: 'als ob',
            question: 'unreal comparison',
            example: 'Er spricht, als ob er Deutscher wäre.',
          },
          {
            title: 'wenn',
            question: 'condition',
            example: 'Wenn er Deutscher wäre, würde er besser sprechen.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er tut so, als er alles wüsste.  ✓ Er tut so, als ob er alles wüsste.',
          '✗ Du siehst aus, als ob du hättest nicht geschlafen.  ✓ … als ob du nicht geschlafen hättest.',
          '✗ Er tut so, als ob er würde alles wissen.  ✓ Er tut so, als ob er alles wissen würde.',
        ),
      ),
    ],
    related: ['polite-forms', 'perfekt'],
    sources: [S.alsOb, S.subjunctive],
  },
  {
    id: 'participles-as-adjectives',
    title: 'Participles as adjectives',
    tagline: 'das lachende Kind, das gekochte Ei',
    level: LEVEL,
    summary:
      'Partizip I (lachend) describes an action happening at the same time; Partizip II (gekocht) describes a finished action or state. Before a noun both take normal adjective endings.',
    sections: [
      section(
        'form',
        'How they are formed',
        table(
          'Partizip I and Partizip II.',
          ['Participle', 'Formation', 'Examples'],
          [
            [
              'Partizip I',
              'infinitive + d',
              'lachen → lachend, steigen → steigend, lächeln → lächelnd',
            ],
            [
              'Partizip II',
              'ge- + stem + -t / -en (like the Perfekt)',
              'kochen → gekocht, buchen → gebucht, anmelden → angemeldet',
            ],
          ],
        ),
        p(
          'Verbs ending in **-eln / -ern** drop the e (lächelnd, wandernd). **sein** and **tun** form **seiend** and **tuend**, which are rare.',
        ),
      ),
      section(
        'meaning',
        'What they mean',
        p(
          '**Partizip I** is **active** and **simultaneous**: the noun is doing something right now. **Partizip II** looks at a **completed action or its result**; with most verbs it is **passive** (something was done to the noun).',
        ),
        table(
          'Partizip I or Partizip II?',
          ['Partizip I (active, now)', 'Partizip II (finished or passive)'],
          [
            [
              'kochendes Wasser (the water is boiling)',
              'gekochtes Wasser (the water has been boiled)',
            ],
            [
              'die liebende Mutter (a mother who loves)',
              'die geliebte Mutter (a mother who is loved)',
            ],
            [
              'die steigenden Preise (prices that are rising)',
              'die gestiegenen Preise (prices that have risen)',
            ],
            [
              'ein überzeugendes Argument (it convinces)',
              'ein überzeugter Kunde (he has been convinced)',
            ],
          ],
        ),
        p(
          'Partizip II of **verbs of change or movement with sein** has an **active** meaning: das **eingeschlafene** Kind (has fallen asleep), die **eingetroffenen** Gäste (have arrived), das **verrostete** Fahrrad (has rusted). Verbs that do not change anything, such as schlafen, rarely form this participle: say **ein schlafendes Kind**, not ein geschlafenes Kind.',
        ),
      ),
      section(
        'endings',
        'The endings',
        p(
          'A participle before a noun is declined **like an adjective**: the ending depends on the article, the gender and the case.',
        ),
        table(
          'Endings in the nominative (the masculine accusative is den lachenden Mann / einen lachenden Mann).',
          ['Article', 'masc.', 'fem.', 'neut.', 'plural'],
          [
            [
              'der / die / das',
              'der lachende Mann',
              'die lachende Frau',
              'das lachende Kind',
              'die lachenden Kinder',
            ],
            [
              'ein / eine',
              'ein lachender Mann',
              'eine lachende Frau',
              'ein lachendes Kind',
              'lachende Kinder',
            ],
          ],
        ),
        p(
          'Participles can also be **compared** (die gelungenste Vorstellung), take **un-** (unpassend, unbezahlt) and be the base of a **compound** (handgemacht). They can become nouns, too: **die Studierenden**, **der Reisende**, **der Angestellte** (see adjectives as nouns).',
        ),
      ),
      section(
        'predicative',
        'Not after sein',
        p(
          'Partizip I is almost always an **attribute before a noun**. After sein it is rare: say Das Argument ist **überzeugend**, but not ✗ Der Mann ist lesend. Partizip II after sein is possible, but then it is often the passive of the state: Der Kurs **ist ausgebucht**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ ein steigende Preis  ✓ ein steigender Preis',
          '✗ der Mann ist lesend  ✓ der lesende Mann / der Mann liest',
          '✗ ein geschlafenes Kind  ✓ ein schlafendes Kind',
        ),
      ),
    ],
    related: ['adjectives-as-nouns', 'perfekt'],
    sources: [S.participle1, S.participle2],
  },
  {
    id: 'modal-particles',
    title: 'doch, ja, mal, denn, eigentlich',
    tagline: 'Small words that give a sentence its tone',
    level: LEVEL,
    summary:
      'Modal particles add attitude, not facts: denn makes questions friendlier, mal and doch soften requests, ja marks what both speakers know, eigentlich limits a statement. They stand after the verb and are not stressed.',
    sections: [
      section(
        'what',
        'What they are',
        p(
          '**Modal particles** (Abtönungspartikeln) show how the speaker feels about a statement: interested, surprised, impatient, friendly. They do not change what the sentence says, and many have no direct English translation. They are very common in spoken German.',
        ),
        table(
          'The most important particles.',
          ['Particle', 'What it adds', 'Example'],
          [
            ['denn', 'interest in a question; friendly', 'Was machst du denn hier?'],
            ['doch', 'softens an imperative; protest', 'Komm doch mal vorbei!'],
            ['mal', 'makes a request light and short', 'Kannst du das mal machen?'],
            ['ja', 'something both of you know; surprise', 'Das weißt du ja. / Das ist ja witzig!'],
            ['eigentlich', 'by the way; “actually”', 'Wie spät ist es eigentlich?'],
            ['eben / halt', 'resignation; it is just so', 'Das ist eben so.'],
            ['schon', 'doubt about the relevance', 'Was kann ich da schon tun?'],
          ],
        ),
      ),
      section(
        'rules',
        'How they behave',
        list(
          'They stand **in the middle of the sentence**, usually right after the verb and the subject pronoun: Hast du **denn** Zeit?',
          'They **cannot be the first word** of the sentence and are normally not stressed.',
          'They **cannot be negated** and cannot be linked with und or oder.',
          'Many particles are **also normal words**: ja and doch can be answers (“Doch!”), denn is also a conjunction (Ich bleibe, denn ich bin müde), mal is part of einmal.',
          'You can use two together; **doch mal** is a typical pair: Komm doch mal her.',
        ),
      ),
      section(
        'use',
        'When to use which',
        table(
          'Typical uses.',
          ['Situation', 'Particle', 'Example'],
          [
            ['Be friendly in a question', 'denn', 'Wie heißt du denn?'],
            ['Ask for something lightly', 'mal', 'Gib mir mal das Salz.'],
            ['Suggest or invite', 'doch (mal)', 'Komm doch zu uns!'],
            ['Remind someone of what is clear', 'ja', 'Du weißt ja, wie das ist.'],
            ['Change the topic', 'eigentlich', 'Was macht ihr eigentlich am Wochenende?'],
          ],
        ),
        tip(
          'Good to know',
          'Particles belong to informal speaking. In formal letters, e-mails and exams use them sparingly, and never pile several up.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Denn was machst du hier?  ✓ Was machst du denn hier?',
          '✗ Doch komm mal vorbei!  ✓ Komm doch mal vorbei!',
          '✗ Ja das ist witzig! (as a particle at the start)  ✓ Das ist ja witzig!',
        ),
      ),
    ],
    related: ['questions', 'imperative', 'word-order'],
    sources: [S.modalParticles],
  },
  {
    id: 'indem-ohne-dass',
    title: 'indem, ohne dass, statt dass',
    tagline: 'How? Without what? Instead of what?',
    level: LEVEL,
    summary:
      'indem (by …ing) says how something is done. ohne dass / ohne … zu (without …ing) and statt dass / statt … zu (instead of …ing) say what does not happen or what happens instead. The verb stands at the end.',
    sections: [
      section(
        'what',
        'What they do',
        table(
          'Three ways to describe an action.',
          ['Connector', 'Meaning', 'Example'],
          [
            ['indem', 'by …ing (the means)', 'Man hilft, indem man Zeit spendet.'],
            ['ohne dass / ohne … zu', 'without …ing', 'Er ging, ohne dass jemand es merkte.'],
            [
              'statt dass / statt … zu',
              'instead of …ing',
              'Statt dass er hilft, bleibt er zu Hause.',
            ],
          ],
        ),
        p(
          '**indem** answers the question **Wie?** (how?). It is the same as **dadurch, dass**: Er erreicht sein Ziel, indem er alle finanziellen Mittel einsetzt.',
        ),
      ),
      section(
        'order',
        'Word order',
        p(
          'All three start a **subordinate clause**: the finite verb goes to the end. **indem** always needs a finite verb with its own subject and **never takes zu**.',
        ),
        examples(
          ['Man spart Geld, indem man weniger heizt.', 'You save money by heating less.'],
          ['Sie hat mir geholfen, ohne dass sie es wusste.', 'She helped me without knowing it.'],
          [
            'Statt dass er uns zu Hilfe kommt, bleibt er lieber zu Hause.',
            'Instead of coming to help us, he prefers to stay at home.',
          ],
        ),
      ),
      section(
        'zu',
        'dass or zu?',
        p(
          'If **both parts have the same subject**, you can use the shorter **ohne … zu** or **statt … zu** (an infinitive with zu and a comma): Er ging, ohne zu bezahlen. Sie bleibt sitzen, statt uns zu helfen. If the subjects are **different**, you need **ohne dass** / **statt dass**: Er ging, ohne dass jemand es merkte.',
        ),
        table(
          'Same subject or different subject.',
          ['Same subject', 'Different subjects'],
          [
            [
              'Sie ging, ohne sich zu verabschieden.',
              'Sie ging, ohne dass wir uns verabschiedeten.',
            ],
            [
              'Statt zu lernen, schaut er fern.',
              'Statt dass er lernt, schaut seine Schwester fern.',
            ],
          ],
        ),
      ),
      section(
        'compare',
        'indem or um … zu?',
        compare(
          {
            title: 'indem',
            question: 'Wie? (the means)',
            example: 'Man spart Geld, indem man weniger heizt.',
          },
          {
            title: 'um … zu',
            question: 'Wozu? (the aim)',
            example: 'Man heizt weniger, um Geld zu sparen.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Man hilft, indem man Zeit zu spenden.  ✓ Man hilft, indem man Zeit spendet.',
          '✗ Er ging, ohne dass zu bezahlen.  ✓ Er ging, ohne zu bezahlen.',
          '✗ Man spart Geld, indem man heizt weniger.  ✓ Man spart Geld, indem man weniger heizt.',
        ),
      ),
    ],
    related: ['infinitive-zu', 'conjunctions', 'word-order'],
    sources: [S.indem, S.ohne, S.statt],
  },
  {
    id: 'passive-past',
    title: 'The passive in the past',
    tagline: 'Die Mauer wurde 1961 gebaut.',
    level: LEVEL,
    summary:
      'Präteritum passive: wurde + participle. Perfekt passive: ist + participle + worden (not geworden). The doer is added with von + dative, the cause or means with durch + accusative.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'In the **passive** the thing that is done to something becomes the subject, and **who does it** is less important. In the active sentence the accusative object becomes the subject of the passive sentence.',
        ),
        table(
          'Active and passive.',
          ['Active', 'Passive'],
          [
            ['Der Staat baute die Mauer 1961.', 'Die Mauer wurde 1961 (vom Staat) gebaut.'],
            ['Das Parlament beschloss das Gesetz.', 'Das Gesetz wurde vom Parlament beschlossen.'],
          ],
        ),
      ),
      section(
        'forms',
        'The tenses',
        p(
          'The passive uses **werden** + **participle**. For the past use **wurde** (Präteritum). The Perfekt and Plusquamperfekt use **sein** + participle + **worden**.',
        ),
        table(
          'The passive of bauen in all tenses.',
          ['Tense', 'Form', 'Example'],
          [
            ['Präsens', 'wird + participle', 'Die Brücke wird gebaut.'],
            ['Präteritum', 'wurde + participle', 'Die Brücke wurde gebaut.'],
            ['Perfekt', 'ist + participle + worden', 'Die Brücke ist gebaut worden.'],
            ['Plusquamperfekt', 'war + participle + worden', 'Die Brücke war gebaut worden.'],
            ['Futur I', 'wird + participle + werden', 'Die Brücke wird gebaut werden.'],
          ],
        ),
        table(
          'wurde in the Präteritum.',
          ['Person', 'wurde', 'Präteritum passive'],
          PRONOUNS.map((pr) => [
            pr,
            conjugatePreterite('werden')[pr],
            `${conjugatePreterite('werden')[pr]} gerufen`,
          ]),
        ),
      ),
      section(
        'worden',
        'worden or geworden?',
        p(
          'The participle of **werden** has two forms. **worden** (without ge-) belongs to the **passive**. **geworden** is for **werden as a full verb** (to become).',
        ),
        compare(
          {
            title: 'passive: worden',
            question: 'something is done to the subject',
            example: 'Die Grenze ist 1989 geöffnet worden.',
          },
          {
            title: 'full verb: geworden',
            question: 'to become',
            example: 'Er ist Arzt geworden.',
          },
        ),
      ),
      section(
        'agent',
        'Who did it?',
        p(
          'The doer is optional and is added with **von + dative** (people, groups, institutions): Das Gesetz wurde **vom Parlament** beschlossen. A **cause or means** takes **durch + accusative**: Das Dorf wurde **durch ein Erdbeben** zerstört.',
        ),
        p(
          'In a **subordinate clause** the verbs stand at the end; the auxiliary comes last: … , weil die Mauer 1961 gebaut **wurde**. … , dass die Grenze 1989 geöffnet worden **ist**. With a **modal verb** the passive infinitive comes before it: Der Blutdruck **musste** gemessen **werden**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Die Grenze ist 1989 geöffnet geworden.  ✓ Die Grenze ist 1989 geöffnet worden.',
          '✗ Das Gesetz wurde von das Parlament beschlossen.  ✓ Das Gesetz wurde vom Parlament beschlossen.',
          '✗ Die Mauer hat 1961 gebaut worden.  ✓ Die Mauer ist 1961 gebaut worden.',
        ),
      ),
    ],
    related: ['past-tense', 'perfekt', 'futur-1', 'modal-verbs'],
    sources: [S.passive, S.werden],
  },
  {
    id: 'relative-wo-was',
    title: 'Relative clauses with wo and was',
    tagline: 'die Stadt, wo ich wohne – alles, was du brauchst',
    level: LEVEL,
    summary:
      'wo refers to a place (die Stadt, wo …). was refers to alles, nichts, etwas, vieles, das, to a superlative used as a noun (das Beste) or to a whole clause. The verb goes to the end.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A relative clause adds information about a word in the main clause. Besides **der, die, das**, two other relative words are very common: **wo** for places and **was** for things that cannot be counted or for a whole sentence.',
        ),
      ),
      section(
        'wo',
        'wo: for places and times',
        p(
          '**wo** refers to a **place** and replaces **in dem / in der / an dem …**: Das ist die Bar, **wo** ich mich einmal die Woche mit meinen Freunden treffe. It is the normal choice after **place names without an article**: In Hamburg, **wo** ich geboren bin, … It can also refer to a **time**: Zu dem Zeitpunkt, **wo** es an der Tür klingelte, …',
        ),
        table(
          'wo or a preposition + relative pronoun.',
          ['with preposition', 'with wo'],
          [
            ['Das ist die Stadt, in der ich wohne.', 'Das ist die Stadt, wo ich wohne.'],
            [
              'Das Haus, in dem ich geboren bin, ist alt.',
              'Das Haus, wo ich geboren bin, ist alt.',
            ],
          ],
        ),
        p(
          'Do not use wo for **people**. In some regions you hear **Kennst du die Frau, wo am Steuer saß?**, but the standard form is **die Frau, die am Steuer saß**.',
        ),
      ),
      section(
        'was',
        'was: after alles, nichts, etwas …',
        table(
          'When to use was.',
          ['After', 'Example'],
          [
            ['alles, nichts, etwas, vieles, einiges, manches', 'Alles, was du brauchst, ist hier.'],
            ['das (a pronoun)', 'Das, was du sagst, stimmt.'],
            ['a superlative used as a noun', 'Das ist das Beste, was ich kenne.'],
            ['a whole clause', 'Er kam pünktlich, was mich überraschte.'],
          ],
        ),
        p(
          'With a **preposition**, **was** becomes **wo(r) + preposition**: Alles, **worauf** du Lust hast. Nichts, **womit** ich gerechnet habe. Das Einzige, **wofür** ich Zeit habe.',
        ),
        p(
          'Use **das**, not was, after a **concrete neuter noun**: **das Auto, das** ich gekauft habe, **das Haus, das** er baut.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Alles, das du brauchst, ist hier.  ✓ Alles, was du brauchst, ist hier.',
          '✗ Das Beste, das ich kenne, …  ✓ Das Beste, was ich kenne, …',
          '✗ Das Auto, was ich gekauft habe, …  ✓ Das Auto, das ich gekauft habe, …',
          '✗ Alles, auf was du Lust hast, …  ✓ Alles, worauf du Lust hast, …',
        ),
      ),
    ],
    related: ['word-order', 'dative'],
    sources: [S.relative, S.was, S.wo],
  },
  {
    id: 'nicht-position',
    title: 'Where does nicht go?',
    tagline: 'Negating the whole sentence or one part',
    level: LEVEL,
    summary:
      'To negate the whole sentence, nicht stands as far to the end as possible, but before the second verb part, before prepositional phrases and before most adjectives. To negate one word, nicht stands right in front of it, often with sondern.',
    sections: [
      section(
        'rule',
        'Two kinds of negation',
        p(
          'There are two different things you can negate. With **sentence negation** (Satznegation) the whole statement is false: Es regnet **nicht**. With **partial negation** (Teilnegation) only one part is wrong, and you often correct it with **sondern**: Nicht das Bild, sondern der Rahmen ist alt.',
        ),
      ),
      section(
        'sentence',
        'Negating the whole sentence',
        table(
          'Where nicht stands.',
          ['nicht stands …', 'Example'],
          [
            ['at the end of a simple sentence', 'Ich kenne den Künstler nicht.'],
            [
              'before the second verb part (participle, infinitive, separable prefix)',
              'Das Stück hat mir nicht gefallen. Ich kann heute nicht kommen. Er steht nicht auf.',
            ],
            [
              'before a predicative adjective or noun',
              'Das Stück ist nicht gut. Er ist nicht mein Freund.',
            ],
            [
              'before a prepositional phrase or a place',
              'Ich gehe nicht ins Theater. Sie wohnt nicht in Berlin.',
            ],
            ['before an adverb of manner', 'Er singt nicht gern. Sie spielt nicht gut Klavier.'],
            ['after time words', 'Ich habe gestern nicht gearbeitet.'],
          ],
        ),
        p(
          'In a **subordinate clause** nicht stands before the verb at the end: … , weil ich ihn **nicht** kenne. … , dass er **nicht** gekommen ist.',
        ),
      ),
      section(
        'partial',
        'Negating one part',
        p(
          'Put **nicht directly in front of** the word or phrase that is wrong. Often the correct information follows after **sondern**.',
        ),
        examples(
          [
            'Ich fahre nicht nach Berlin, sondern nach Hamburg.',
            'I am not going to Berlin but to Hamburg.',
          ],
          [
            'Nicht ich habe das gesagt, sondern mein Bruder.',
            'It was not I who said that but my brother.',
          ],
          [
            'Laura hat einen Job nicht weit weg gefunden.',
            'Laura did not find a job far away (she found one nearby).',
          ],
        ),
      ),
      section(
        'kein',
        'nicht or kein?',
        p(
          'A noun with an **indefinite article or no article** is negated with **kein**, not with nicht: Ich habe **kein** Auto. A noun with a **definite article or a possessive** is negated with **nicht**: Ich kenne den Künstler **nicht**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ich kenne nicht den Künstler.  ✓ Ich kenne den Künstler nicht.',
          '✗ Das Stück hat mir gefallen nicht.  ✓ Das Stück hat mir nicht gefallen.',
          '✗ Ich habe nicht ein Auto.  ✓ Ich habe kein Auto.',
        ),
      ),
    ],
    related: ['negation', 'word-order', 'conjunctions'],
    sources: [S.nicht, S.negation, S.sondern],
  },
  {
    id: 'consecutive-clauses',
    title: 'sodass and so … dass',
    tagline: 'Saying what the result was',
    level: LEVEL,
    summary:
      'sodass and so … dass give the result of something (with the result that). Both start a subordinate clause with the verb at the end. With so … dass, so stands before an adjective in the main clause.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **consecutive clause** says what **follows** from a fact in the main clause. It comes **after** the main clause and is separated by a comma.',
        ),
        examples(
          [
            'Es regnete stark, sodass das Fest ausfiel.',
            'It rained heavily, so the party was cancelled.',
          ],
          [
            'Der Vortrag war so lang, dass alle müde wurden.',
            'The talk was so long that everyone got tired.',
          ],
          [
            'Er ist so krank, dass er zum Arzt muss.',
            'He is so ill that he has to go to the doctor.',
          ],
        ),
      ),
      section(
        'forms',
        'sodass or so … dass?',
        table(
          'The two patterns.',
          ['Feature', 'sodass', 'so … dass'],
          [
            [
              'Meaning',
              'a result of the whole situation',
              'a result of a degree: how much / how very',
            ],
            ['Main clause', 'nothing special', 'so + adjective, adverb or viel / wenig'],
            ['Spelling', 'sodass (also: so dass)', 'so and dass are separate words'],
            [
              'Example',
              'Er hat sich verletzt, sodass er nicht spielen konnte.',
              'Er hat sich so verletzt, dass er nicht spielen konnte.',
            ],
          ],
        ),
        p(
          'In both patterns the **verb goes to the end** of the clause: …, sodass das Fest **ausfiel**.',
        ),
      ),
      section(
        'compare',
        'sodass or deshalb?',
        p(
          '**deshalb, deswegen, daher** and **darum** express the same idea in a **main clause**: the verb follows directly after them.',
        ),
        table(
          'Result in a subordinate clause and in a main clause.',
          ['Subordinate clause', 'Main clause'],
          [
            ['Es regnete, sodass das Fest ausfiel.', 'Es regnete. Deshalb fiel das Fest aus.'],
            ['Er war krank, sodass er zu Hause blieb.', 'Er war krank. Darum blieb er zu Hause.'],
          ],
        ),
      ),
      section(
        'damit',
        'Result or purpose?',
        compare(
          {
            title: 'sodass',
            question: 'what happened as a result',
            example: 'Er sprach laut, sodass alle ihn verstanden.',
          },
          {
            title: 'damit',
            question: 'what the speaker wanted',
            example: 'Er sprach laut, damit alle ihn verstehen.',
          },
        ),
      ),
      section(
        'too',
        'Too … to',
        p(
          'For a **negative result** use **zu … um … zu**: Wir sind **zu** weit gekommen, **um** jetzt **aufzugeben**. In formal German there is also **zu … als dass** with the Konjunktiv II: Das Risiko ist **zu** groß, **als dass** wir es eingehen **könnten**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Es regnete stark, sodass fiel das Fest aus.  ✓ Es regnete stark, sodass das Fest ausfiel.',
          '✗ Es regnete. Deshalb das Fest fiel aus.  ✓ Es regnete. Deshalb fiel das Fest aus.',
          '✗ Er ist zu müde, um arbeiten.  ✓ Er ist zu müde, um zu arbeiten.',
        ),
      ),
    ],
    related: ['conjunctions', 'concessive-clauses', 'infinitive-zu'],
    sources: [S.consecutive, S.sodass],
  },
];
