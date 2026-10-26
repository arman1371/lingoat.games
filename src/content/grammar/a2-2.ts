import { definiteArticle, possessive, type Case, type Gender } from '@/lib/german/articles';
import { declineAdjective, type DeclensionKind } from '@/lib/german/adjectives';
import { konjunktiv2, passiveForms } from '@/lib/german/conjugation';
import {
  compare,
  conjugationTable,
  datPlural,
  examples,
  list,
  mistake,
  p,
  section,
  table,
  tip,
} from './build';
import type { GrammarTopic } from './schema';
import { SOURCES } from './sources';

const LEVEL = 'a2-2';

const CASES: [Case, string][] = [
  ['nom', 'Nominative'],
  ['acc', 'Accusative'],
  ['dat', 'Dative'],
];
const GENDERS: Gender[] = ['m', 'f', 'n', 'pl'];

/** Noun phrases "der neue Film · die neue Band …" for every case; the endings come from the helper. */
function adjectivePhrases(
  kind: DeclensionKind,
  adjective: string,
  nouns: Record<Gender, string>,
  article: (g: Gender, c: Case) => string,
): string[][] {
  return CASES.map(([c, label]) => [
    label,
    ...GENDERS.map((g) =>
      [article(g, c), declineAdjective(adjective, kind, g, c), datPlural(nouns[g], g, c)]
        .filter(Boolean)
        .join(' '),
    ),
  ]);
}

const K2_VERBS = ['sein', 'haben', 'können', 'müssen', 'sollen'];

export const A22_TOPICS: GrammarTopic[] = [
  {
    id: 'konjunktiv-2',
    title: 'Konjunktiv II: wishes, advice, unreal “if”',
    tagline: 'ich wäre, ich hätte, ich würde …',
    level: LEVEL,
    summary:
      'Konjunktiv II talks about what is not real or only possible: wishes (Ich wäre gern …), advice (Du solltest …), polite requests (Könnten Sie …?) and unreal if-clauses (Wenn ich Zeit hätte, würde ich reisen).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Normal German (the **indicative**) says what is true: Ich habe Zeit. The **Konjunktiv II** says what is **not true, not yet true or only imagined**: Ich hätte Zeit (if I had …). It is also a way to be **polite** and to **soften** advice. For the A2 level you need just a few forms.',
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          '**sein, haben** and the **modal verbs** have their own short forms. For almost every other verb use **würde + infinitive** with the infinitive at the end.',
        ),
        conjugationTable(
          'Konjunktiv II of the most useful verbs.',
          K2_VERBS,
          Object.fromEntries(K2_VERBS.map((v) => [v, konjunktiv2(v)])),
        ),
        conjugationTable('würde + infinitive for all other verbs.', ['werden'], {
          werden: konjunktiv2('werden'),
        }),
        examples(
          ['Ich würde gern nach Spanien fahren.', 'I would like to go to Spain.'],
          ['Wir würden das Haus kaufen.', 'We would buy the house.'],
        ),
      ),
      section(
        'uses',
        'What it is used for',
        table(
          'Four jobs of the Konjunktiv II.',
          ['Use', 'Typical forms', 'Example'],
          [
            ['Wish', 'ich wäre / hätte / würde gern …', 'Ich wäre gern am Meer.'],
            ['Advice', 'du solltest …, an deiner Stelle würde ich …', 'Du solltest mehr üben.'],
            ['Polite request', 'könnten / würden / dürften Sie …', 'Könnten Sie mir helfen?'],
            [
              'Unreal “if”',
              'wenn + Konjunktiv II, … würde …',
              'Wenn ich Zeit hätte, würde ich reisen.',
            ],
          ],
        ),
      ),
      section(
        'if',
        'Unreal wenn-clauses',
        p(
          'In an **unreal** wenn-clause, the situation is imagined, not real. The **wenn-clause** has its verb at the end (in Konjunktiv II) and the **main clause** has **würde** or a short form in position 2.',
        ),
        compare(
          {
            title: 'Real (indicative)',
            question: 'It can really happen',
            example: 'Wenn ich Zeit habe, besuche ich dich.',
          },
          {
            title: 'Unreal (Konjunktiv II)',
            question: 'Only imagined',
            example: 'Wenn ich Zeit hätte, würde ich dich besuchen.',
          },
        ),
        examples(
          [
            'Wenn ich mehr Geld hätte, würde ich eine Weltreise machen.',
            'If I had more money, I would go on a world trip.',
          ],
          [
            'Wenn du früher aufstehen würdest, wärst du nicht so müde.',
            'If you got up earlier, you would not be so tired.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Wenn ich würde Zeit haben, …  ✓ Wenn ich Zeit hätte, …',
          '✗ Ich würde gern bin am Meer.  ✓ Ich wäre gern am Meer.',
          '✗ Du sollst mehr üben. (an order)  ✓ Du solltest mehr üben. (advice)',
        ),
        tip(
          'In speaking',
          'In the wenn-clause use the short form of sein and haben (wäre, hätte), and würde in the main clause.',
        ),
      ),
    ],
    related: ['polite-forms', 'modal-verbs', 'subordinate-clauses', 'temporal-clauses'],
    sources: [SOURCES.subjunctive, SOURCES.modalVerbs, SOURCES.subordinateClause],
  },
  {
    id: 'purpose-clauses',
    title: 'um … zu or damit?',
    tagline: 'What for? To do what?',
    level: LEVEL,
    summary:
      'Both say why you do something. Use um … zu + infinitive when the subject stays the same (Ich spare, um ein Auto zu kaufen) and damit + a clause when the subjects differ (Ich helfe dir, damit du fertig wirst).',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A purpose clause answers **Wozu? / Wofür?** (what for?) or **Zu welchem Zweck?**. You cannot use **weil** here: weil gives a cause, **um … zu** and **damit** give an aim.',
        ),
        compare(
          {
            title: 'weil (cause)',
            question: 'Warum? – because of what',
            example: 'Ich spare Geld, weil ich arm bin.',
          },
          {
            title: 'um … zu (aim)',
            question: 'Wozu? – in order to',
            example: 'Ich spare Geld, um ein Auto zu kaufen.',
          },
        ),
      ),
      section(
        'um-zu',
        'um … zu: the same subject',
        p(
          'When the person who acts is the **same** in both parts, use **um … zu + infinitive**. The infinitive is at the end of the clause, **zu** comes right before it, and there is **no subject** in the second part. A comma separates the parts.',
        ),
        examples(
          [
            'Ich lerne Deutsch, um in Berlin zu arbeiten.',
            'I learn German in order to work in Berlin.',
          ],
          ['Sie geht zur Bank, um Geld abzuheben.', 'She goes to the bank to withdraw money.'],
        ),
        p(
          'With a **separable verb** zu goes **between the prefix and the verb**, written as one word: ab**zu**heben, ein**zu**zahlen, an**zu**rufen.',
        ),
      ),
      section(
        'damit',
        'damit: different subjects',
        p(
          'When the second part has its **own subject**, use **damit** + a clause with the **verb at the end**. A subject that is the same as in the main clause may also use damit, but um … zu is the normal choice.',
        ),
        examples(
          [
            'Ich gebe dir die PIN, damit du Geld abheben kannst.',
            'I give you the PIN so that you can withdraw money.',
          ],
          [
            'Ich erkläre es langsam, damit alle es verstehen.',
            'I explain it slowly so that everybody understands.',
          ],
        ),
      ),
      section(
        'zum',
        'Questions and zum + noun',
        p(
          'Ask for the purpose with **Wozu?** or **Wofür?**. A short purpose can also be a noun with **zum / zur**: Das Geld ist **zum Sparen**. Ich fahre **zur Arbeit**. Das ist ein Geschenk **zum Geburtstag**.',
        ),
        examples(
          [
            'Wozu brauchst du das? – Um Geld abzuheben.',
            'What do you need that for? – To withdraw money.',
          ],
          ['Wofür sparst du? – Für ein Auto.', 'What are you saving for? – For a car.'],
        ),
        mistake(
          'Watch out',
          '✗ Ich lerne, um ich Deutsch spreche.  ✓ Ich lerne, um Deutsch zu sprechen.',
          '✗ um Geld zu abheben  ✓ um Geld abzuheben',
          '✗ Ich gebe dir die PIN, um du Geld abheben kannst.  ✓ … damit du Geld abheben kannst.',
        ),
      ),
    ],
    related: ['subordinate-clauses', 'separable-verbs', 'questions'],
    sources: [SOURCES.purposeClause, SOURCES.subordinateClause, SOURCES.separableVerbs],
  },
  {
    id: 'temporal-clauses',
    title: 'als, wenn, bis, seitdem',
    tagline: 'When did it happen?',
    level: LEVEL,
    summary:
      'als is for one event in the past, wenn for events that repeat or are in the present or future. bis = until, seitdem = since then. All of them send the verb to the end.',
    sections: [
      section(
        'list',
        'The four words',
        table(
          'Temporal conjunctions.',
          ['Word', 'Meaning', 'Example'],
          [
            ['als', 'when (one event in the past)', 'Als ich klein war, wohnten wir in Köln.'],
            ['wenn', 'when, whenever (repeated, present, future)', 'Wenn es regnet, lese ich.'],
            ['bis', 'until', 'Warte, bis ich komme.'],
            ['seitdem', 'since (then)', 'Seitdem ich hier wohne, kenne ich viele Leute.'],
          ],
        ),
        p('All four start a **subordinate clause**: the conjugated verb is at the end.'),
      ),
      section(
        'als-wenn',
        'als or wenn?',
        compare(
          {
            title: 'als',
            question: 'once, in the past',
            example: 'Als ich in Berlin war, habe ich Anna getroffen.',
          },
          {
            title: 'wenn',
            question: 'every time, or present/future',
            example: 'Immer wenn ich in Berlin bin, treffe ich Anna.',
          },
        ),
        p(
          'Ask yourself: did it happen **once in the past**? Then **als**. For anything that happens **again and again** (also in the past: **Immer wenn** …, **jedes Mal wenn** …), or that is in the **present or future**, use **wenn**.',
        ),
        examples(
          [
            'Als ich Kind war, spielte ich oft draußen.',
            'When I was a child I often played outside. (a period of the past)',
          ],
          [
            'Jedes Mal, wenn es regnete, blieben wir zu Hause.',
            'Every time it rained we stayed at home.',
          ],
          ['Wenn ich nach Hause komme, koche ich.', 'When I get home I cook.'],
        ),
      ),
      section(
        'bis-seitdem',
        'bis and seitdem',
        p(
          '**bis** names the end point (“until”), **seitdem** the starting point of something that is still going on. With the same word as a preposition you need a noun: **bis** Montag / **seit** einem Jahr. With a clause, use **bis** and **seitdem**.',
        ),
        examples(
          ['Ich warte, bis du kommst.', 'I wait until you come.'],
          [
            'Seitdem er in Wien wohnt, spricht er besser Deutsch.',
            'Since he has been living in Vienna he speaks better German.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Wenn ich klein war, …  ✓ Als ich klein war, …',
          '✗ Als ich nach Hause komme, …  ✓ Wenn ich nach Hause komme, …',
          '✗ Warte, bis kommst du.  ✓ Warte, bis du kommst.',
        ),
      ),
    ],
    related: ['subordinate-clauses', 'prepositions-of-time', 'past-tense', 'perfekt'],
    sources: [SOURCES.temporalClause, SOURCES.als, SOURCES.wenn, SOURCES.seitdem],
  },
  {
    id: 'relative-clauses',
    title: 'Relative clauses: der Mann, der …',
    tagline: 'Describe a noun with a clause',
    level: LEVEL,
    summary:
      'A relative clause adds information to a noun. The pronoun takes its gender and number from that noun and its case from its job in the relative clause. The verb goes to the end; commas on both sides.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **relative clause** says more about a noun, like “who …” or “which …”: der Kollege, **der neben mir sitzt**. It starts with a **relative pronoun** and ends with the **conjugated verb**. It is always separated by **commas**.',
        ),
        examples(
          [
            'Der Kollege, der neben mir sitzt, ist sehr nett.',
            'The colleague who sits next to me is very nice.',
          ],
          ['Das Buch, das ich lese, ist spannend.', 'The book that I am reading is exciting.'],
        ),
      ),
      section(
        'forms',
        'The pronoun',
        p(
          'The relative pronoun looks like the **definite article**. Two decisions: **gender and number** come from the noun you describe (der Kollege → masculine); **case** comes from the job of the pronoun inside the relative clause (subject → nominative, object → accusative).',
        ),
        table(
          'Relative pronouns (the dative plural is denen).',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          [
            ['Nominative (Wer? Was?)', 'der', 'die', 'das', 'die'],
            ['Accusative (Wen? Was?)', 'den', 'die', 'das', 'die'],
            ['Dative (Wem?)', 'dem', 'der', 'dem', 'denen'],
          ],
        ),
      ),
      section(
        'cases',
        'Nominative or accusative?',
        compare(
          {
            title: 'Nominative',
            question: 'the pronoun is the subject',
            example: 'Der Mann, der dort steht, ist mein Chef.',
          },
          {
            title: 'Accusative',
            question: 'the pronoun is the object',
            example: 'Der Mann, den ich kenne, ist mein Chef.',
          },
        ),
        p(
          'To find the case, check the relative clause on its own: **Der Mann steht dort** (Der Mann is the subject → **der**). **Ich kenne den Mann** (den Mann is the object → **den**). Only in the masculine singular do nominative and accusative differ; feminine, neuter and plural look the same.',
        ),
        examples(
          [
            'Die Frau, die hier arbeitet, kommt aus Polen.',
            'The woman who works here is from Poland.',
          ],
          [
            'Die Frau, die ich gestern getroffen habe, kommt aus Polen.',
            'The woman whom I met yesterday is from Poland.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Der Mann, den dort steht, …  ✓ Der Mann, der dort steht, …',
          '✗ Der Film, der ich gesehen habe, …  ✓ Der Film, den ich gesehen habe, …',
          '✗ Der Film, den ich habe gesehen, …  ✓ Der Film, den ich gesehen habe, …',
        ),
      ),
    ],
    related: ['subordinate-clauses', 'accusative', 'articles'],
    sources: [SOURCES.relativeClause, SOURCES.subordinateClause, SOURCES.article],
  },
  {
    id: 'passive',
    title: 'The passive: wird … gemacht',
    tagline: 'What happens, not who does it',
    level: LEVEL,
    summary:
      'werden (position 2) + participle (end): Das Paket wird geliefert. The passive puts the thing that is affected first; who does it can be added with von + dative or left out.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'In the **active** sentence, the subject does something: Die Post liefert das Paket. In the **passive**, the focus is on what **happens** to the thing: **Das Paket wird geliefert.** The person or thing who does it is often unknown or not important, so it is usually left out.',
        ),
        compare(
          {
            title: 'Active',
            question: 'Who does it?',
            example: 'Die Post liefert das Paket.',
          },
          {
            title: 'Passive',
            question: 'What happens?',
            example: 'Das Paket wird (von der Post) geliefert.',
          },
        ),
        p(
          'The **accusative object** of the active sentence (**das Paket**) becomes the **subject** (nominative) of the passive sentence. The old subject, if you want to mention it, comes with **von + dative**.',
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          'The passive is **werden** in the right person (position 2) and the **participle (Partizip II)** at the **end**. The participle never changes; werden does.',
        ),
        conjugationTable('Passive, present tense: werden + geliefert.', ['werden + geliefert'], {
          'werden + geliefert': passiveForms('geliefert'),
        }),
        examples(
          ['Die Briefe werden verschickt.', 'The letters are sent.'],
          ['Der Verletzte wird ins Krankenhaus gebracht.', 'The injured man is taken to hospital.'],
          [
            'Das Paket wird von einem Nachbarn angenommen.',
            'The parcel is accepted by a neighbour.',
          ],
        ),
      ),
      section(
        'tenses',
        'Other tenses and modal verbs',
        table(
          'The passive in different tenses.',
          ['Tense', 'Formula', 'Example'],
          [
            ['Present', 'werden + participle', 'Das Paket wird geliefert.'],
            ['Past (Präteritum)', 'wurde + participle', 'Das Paket wurde geliefert.'],
            ['Perfekt', 'ist + participle + worden', 'Das Paket ist geliefert worden.'],
            [
              'With a modal verb',
              'modal + participle + werden',
              'Das Paket muss geliefert werden.',
            ],
          ],
        ),
        p(
          'In the Perfekt the passive always uses **sein** and the short form **worden** (not “geworden”).',
        ),
        mistake(
          'Watch out',
          '✗ Das Paket wird liefern.  ✓ Das Paket wird geliefert.',
          '✗ Das Paket ist geliefert geworden.  ✓ Das Paket ist geliefert worden.',
          '✗ Das Paket wird von die Post geliefert.  ✓ … von der Post geliefert.',
        ),
      ),
    ],
    related: ['perfekt', 'past-tense', 'modal-verbs', 'dative'],
    sources: [SOURCES.passive, SOURCES.participle2],
  },
  {
    id: 'verbs-with-prepositions',
    title: 'Verbs with fixed prepositions',
    tagline: 'warten auf, denken an, träumen von',
    level: LEVEL,
    summary:
      'Many verbs need one particular preposition, and that preposition decides the case. Ask with wo(r)- for things and with the preposition + wen/wem for people; answer with da(r)- for things.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Many German verbs go together with a **fixed preposition**: you wait **for** the bus, but in German **auf** den Bus. The preposition belongs to the verb and often does not match the English one, so learn the verb **with** its preposition **and its case**.',
        ),
        table(
          'Verbs with a preposition.',
          ['Verb', 'Preposition + case', 'Example'],
          [
            ['warten', 'auf + acc.', 'Ich warte auf den Bus.'],
            ['denken', 'an + acc.', 'Ich denke oft an dich.'],
            ['sich freuen', 'auf / über + acc.', 'Ich freue mich auf den Urlaub.'],
            ['sich interessieren', 'für + acc.', 'Er interessiert sich für Fußball.'],
            [
              'sprechen',
              'über + acc. · mit + dat.',
              'Wir sprechen über das Wetter. · Ich spreche mit meiner Chefin.',
            ],
            ['träumen', 'von + dat.', 'Ich träume von einer Reise.'],
            ['Angst haben', 'vor + dat.', 'Sie hat Angst vor Hunden.'],
            ['teilnehmen', 'an + dat.', 'Ich nehme an dem Kurs teil.'],
            ['fragen', 'nach + dat.', 'Ich frage nach dem Weg.'],
          ],
        ),
        tip(
          'Two-way prepositions',
          'With verbs like warten auf or denken an the case does **not** depend on Wo? / Wohin? – the verb decides: auf + accusative, but an + dative with teilnehmen. Learn them as one block.',
        ),
      ),
      section(
        'ask',
        'Asking: Worauf? or Auf wen?',
        p(
          'For **things and ideas** ask with **wo(r)- + preposition**: worauf, woran, wovon, womit. For **people** ask with the **preposition + wen / wem**: auf wen, an wen, von wem, mit wem. An **r** is inserted before a vowel (wo**r**auf, wo**r**an, wo**r**über).',
        ),
        table(
          'Two kinds of question.',
          ['Question', 'About', 'Example'],
          [
            ['Worauf …? Woran …? Wovon …?', 'a thing or idea', 'Worauf wartest du? – Auf den Bus.'],
            [
              'Auf wen …? An wen …? Von wem …?',
              'a person',
              'Auf wen wartest du? – Auf meine Freundin.',
            ],
          ],
        ),
      ),
      section(
        'da',
        'Answering with da(r)-',
        p(
          'To refer to a thing you have already mentioned, use **da(r)- + preposition**: darauf, daran, davon, damit. For a person use the preposition + pronoun (auf **ihn**, an **sie**, von **ihm**). The sentence part after the verb can also be a clause or **dass**: Ich warte **darauf**, dass er anruft.',
        ),
        compare(
          {
            title: 'Thing: da(r)-',
            question: 'Wartest du auf den Bus?',
            example: 'Ja, ich warte darauf.',
          },
          {
            title: 'Person: preposition + pronoun',
            question: 'Wartest du auf deinen Bruder?',
            example: 'Ja, ich warte auf ihn.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Ich warte für den Bus.  ✓ Ich warte auf den Bus.',
          '✗ Ich träume von einen Urlaub.  ✓ Ich träume von einem Urlaub.',
        ),
      ),
    ],
    related: ['reflexive-verbs', 'accusative', 'dative', 'two-way-prepositions'],
    sources: [SOURCES.prepositionalObject, SOURCES.pronominalAdverb, SOURCES.prepositions],
  },
  {
    id: 'lassen',
    title: 'lassen',
    tagline: 'to leave, to let, to have something done',
    level: LEVEL,
    summary:
      'lassen is a full verb (leave: Ich lasse den Hund zu Hause) and a helper with an infinitive (allow: Lass mich helfen; have done: Ich lasse mein Auto reparieren). The infinitive goes to the end.',
    sections: [
      section(
        'forms',
        'The forms',
        p(
          '**lassen** changes its vowel in **du** and **er/sie/es**: du **lässt**, er **lässt**. Past: ließ. Participle: **gelassen**. Imperative: **Lass!** (du), **Lasst!** (ihr), **Lassen Sie!**',
        ),
        table(
          'lassen in the present tense.',
          ['Person', 'lassen'],
          [
            ['ich', 'lasse'],
            ['du', 'lässt'],
            ['er/sie/es', 'lässt'],
            ['wir', 'lassen'],
            ['ihr', 'lasst'],
            ['sie/Sie', 'lassen'],
          ],
        ),
      ),
      section(
        'meanings',
        'Three jobs',
        table(
          'What lassen can mean.',
          ['Meaning', 'Pattern', 'Example'],
          [
            ['leave (behind)', 'lassen + object', 'Ich lasse den Hund zu Hause.'],
            [
              'let / allow',
              'lassen + (person) + infinitive',
              'Lass mich das machen! · Sie lässt ihn schlafen.',
            ],
            [
              'have something done',
              'lassen + object + infinitive',
              'Ich lasse mein Auto reparieren.',
            ],
          ],
        ),
        examples(
          ['Lass mich in Ruhe!', 'Leave me alone!'],
          ['Wir lassen uns das Essen liefern.', 'We have the food delivered.'],
          [
            'Er lässt sich die Haare schneiden.',
            'He is having his hair cut. (someone else does it)',
          ],
        ),
        p(
          'For **having something done**, the person who does it is not named. If you do it for **yourself**, use **sich lassen**: Ich lasse **mir** die Haare schneiden (dative), because there is already an accusative object.',
        ),
      ),
      section(
        'perfekt',
        'In the Perfekt',
        p(
          'As a **full verb** (leave) it has a normal participle: Ich **habe** den Hund zu Hause **gelassen**. With **another infinitive** the Perfekt uses a **double infinitive** instead of a participle: Ich **habe** das Auto reparieren **lassen**.',
        ),
        mistake(
          'Watch out',
          '✗ du lasst  ✓ du lässt',
          '✗ Ich lasse mein Auto zu reparieren.  ✓ Ich lasse mein Auto reparieren. (no zu)',
          '✗ Ich habe das Auto repariert lassen.  ✓ Ich habe das Auto reparieren lassen.',
        ),
      ),
    ],
    related: ['modal-verbs', 'reflexive-verbs', 'perfekt'],
    sources: [SOURCES.lassen],
  },
  {
    id: 'adjective-endings',
    title: 'Adjective endings',
    tagline: 'der neue Film · ein neuer Film · neuer Film',
    level: LEVEL,
    summary:
      'An adjective before a noun gets an ending that depends on the article. After der/die/das the ending is mostly -e or -en; after ein/kein/mein it shows the gender where the article does not (-er, -es); without an article it copies the article ending. After sein it has no ending.',
    sections: [
      section(
        'when',
        'When there is an ending',
        p(
          'An adjective **before a noun** takes an ending. An adjective **after sein, werden or wirken** takes **no ending**: Der Film ist **neu**. Das Bild wirkt **traurig**.',
        ),
        compare(
          {
            title: 'Before a noun: ending',
            question: 'attributive',
            example: 'Das ist ein neuer Film.',
          },
          {
            title: 'After sein: no ending',
            question: 'predicative',
            example: 'Der Film ist neu.',
          },
        ),
      ),
      section(
        'definite',
        'After der, die, das',
        p(
          'The article already shows gender and case, so the adjective only needs **-e** or **-en**: **-e** in the nominative singular and in the feminine / neuter accusative, **-en** everywhere else.',
        ),
        table(
          'Adjective endings after der, die, das.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          adjectivePhrases(
            'definite',
            'neu',
            { m: 'Film', f: 'Band', n: 'Lied', pl: 'Lieder' },
            (g, c) => definiteArticle(g, c),
          ),
        ),
      ),
      section(
        'indefinite',
        'After ein, kein, mein',
        p(
          'ein, kein and the possessives (mein, dein …) have **no ending** in the masculine nominative and the neuter nominative / accusative. There the **adjective** must show the gender: **-er** (masc.) and **-es** (neut.). Elsewhere the endings are like those after der/die/das.',
        ),
        table(
          'Adjective endings after ein, kein, mein.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          adjectivePhrases(
            'indefinite',
            'neu',
            { m: 'Film', f: 'Band', n: 'Lied', pl: 'Lieder' },
            (g, c) => possessive('mein', g, c),
          ),
        ),
      ),
      section(
        'none',
        'Without an article',
        p(
          'If there is **no article** at all, the adjective takes the ending the **article would have had**: frisch**er** Kaffee (like der), frisch**e** Milch (like die), mit frisch**em** Brot (like dem).',
        ),
        table(
          'Adjective endings without an article.',
          ['Case', 'masc.', 'fem.', 'neut.', 'plural'],
          adjectivePhrases(
            'none',
            'frisch',
            { m: 'Kaffee', f: 'Milch', n: 'Brot', pl: 'Brötchen' },
            () => '',
          ),
        ),
      ),
      section(
        'more',
        'Good to know',
        list(
          'A few adjectives lose a letter before an ending: teuer → ein **teures** Auto, dunkel → ein **dunkles** Zimmer, hoch → ein **hohes** Haus.',
          'Comparatives and superlatives get the same endings: ein **günstigeres** Angebot, der **beste** Preis.',
          'Ask for the kind with **Was für ein …?** (Was für eine Band ist das?) and for one of several with **welch-** (Welche Band meinst du?).',
        ),
        mistake(
          'Watch out',
          '✗ ein neuer Auto  ✓ ein neues Auto',
          '✗ der neuer Film  ✓ der neue Film',
          '✗ Der Film ist neue.  ✓ Der Film ist neu.',
          '✗ mit frischen Brot  ✓ mit frischem Brot',
        ),
      ),
    ],
    related: ['articles', 'comparison', 'superlative', 'accusative', 'dative'],
    sources: [SOURCES.adjective, SOURCES.article],
  },
  {
    id: 'n-declension',
    title: 'n-Deklination',
    tagline: 'den Kollegen, dem Studenten, Herrn Weber',
    level: LEVEL,
    summary:
      'A group of masculine nouns (people and animals, many ending in -e) takes -n or -en in every case except the nominative singular: der Kollege, but den / dem / des Kollegen.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'Most nouns do not change in the singular. A small group of **masculine** nouns does: they add **-n** or **-en** in the **accusative, dative and genitive** singular – and in the plural. They are called **n-Deklination** nouns.',
        ),
        table(
          'n-Deklination, singular.',
          ['Case', 'der Kollege', 'der Student', 'der Mensch', 'der Herr'],
          [
            ['Nominative', 'der Kollege', 'der Student', 'der Mensch', 'der Herr'],
            ['Accusative', 'den Kollegen', 'den Studenten', 'den Menschen', 'den Herrn'],
            ['Dative', 'dem Kollegen', 'dem Studenten', 'dem Menschen', 'dem Herrn'],
            ['Genitive', 'des Kollegen', 'des Studenten', 'des Menschen', 'des Herrn'],
          ],
        ),
        p(
          'The plural of these nouns is the same as the accusative: die Kollegen, die Studenten, die Menschen, die Herren.',
        ),
      ),
      section(
        'which',
        'Which nouns?',
        list(
          '**Masculine people and animals ending in -e**: der Kollege, der Kunde, der Junge, der Franzose, der Löwe.',
          '**Masculine nouns ending in -ent, -ant, -ist**: der Student, der Präsident, der Tourist, der Polizist.',
          '**A few others** you should learn: der Mensch, der Herr (-n, not -en), der Nachbar.',
        ),
        tip(
          'Not every noun in -e',
          'The rule is for people and animals. **Things** do not follow it: der Käse → den Käse (not “Käsen”).',
        ),
      ),
      section(
        'sentences',
        'In sentences',
        examples(
          ['Ich kenne den Kollegen.', 'I know the colleague.'],
          ['Ich helfe dem Studenten.', 'I help the student.'],
          [
            'Guten Tag, Herr Weber. – Ich rufe Herrn Weber an.',
            'Good day, Mr Weber. – I call Mr Weber.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ich kenne den Kollege.  ✓ Ich kenne den Kollegen.',
          '✗ Ich frage der Herr.  ✓ Ich frage den Herrn.',
          '✗ mit dem Student  ✓ mit dem Studenten',
        ),
      ),
    ],
    related: ['accusative', 'dative', 'genitive', 'plurals'],
    sources: [SOURCES.kollege, SOURCES.herr, SOURCES.plural],
  },
  {
    id: 'indirect-questions',
    title: 'Indirect questions',
    tagline: 'Wissen Sie, wann der Zug fährt?',
    level: LEVEL,
    summary:
      'Inside a sentence a question becomes a subordinate clause with the verb at the end: W-word + … + verb, or ob + … + verb for yes/no questions. Typical openings are Ich weiß nicht, … and Können Sie mir sagen, …?',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'A **direct** question stands alone: Wann fährt der Zug? An **indirect** question is part of a longer sentence – it is more polite and common in service situations. It is a **subordinate clause**, so the verb goes to the end and the sentence has a comma.',
        ),
        table(
          'Direct and indirect questions.',
          ['Direct question', 'Indirect question'],
          [
            ['Wann fährt der Zug?', 'Wissen Sie, wann der Zug fährt?'],
            ['Wo ist die Post?', 'Können Sie mir sagen, wo die Post ist?'],
            ['Kommt er heute?', 'Ich weiß nicht, ob er heute kommt.'],
            ['Ist die Post geöffnet?', 'Wissen Sie, ob die Post geöffnet ist?'],
          ],
        ),
      ),
      section(
        'rules',
        'The rules',
        list(
          'A **W-question** keeps its question word (wann, wo, wie, warum, was, wer …): … , **wann** der Zug fährt.',
          'A **yes/no question** has no question word, so it needs **ob** (whether, if): … , **ob** er kommt.',
          'The **conjugated verb is last**; a separable verb stays together: … , wann der Zug **abfährt**.',
          'The whole sentence ends with a **question mark** only if the main clause is a question (Wissen Sie, …?). After “Ich weiß nicht, …” it is a full stop.',
        ),
        compare(
          {
            title: 'W-question',
            question: 'question word stays',
            example: 'Ich weiß nicht, wann das Paket kommt.',
          },
          {
            title: 'Yes/no question',
            question: 'ob + verb at the end',
            example: 'Ich weiß nicht, ob das Paket kommt.',
          },
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ich weiß nicht, wann fährt der Zug.  ✓ Ich weiß nicht, wann der Zug fährt.',
          '✗ Ich weiß nicht, wenn er kommt.  ✓ Ich weiß nicht, ob er kommt.',
          '✗ Können Sie mir sagen, wo ist die Post?  ✓ Können Sie mir sagen, wo die Post ist?',
        ),
      ),
    ],
    related: ['questions', 'subordinate-clauses', 'polite-forms'],
    sources: [SOURCES.questions, SOURCES.subordinateClause],
  },
  {
    id: 'word-formation',
    title: 'Building words',
    tagline: 'Compounds, -ung, -er/-in, -chen, un-, -los, -bar',
    level: LEVEL,
    summary:
      'In a compound the last word decides the article. Many endings fix the gender: -ung → die, -chen → das, -er → der (person), -in → die. un-, -los, -bar, -ig and -isch build adjectives.',
    sections: [
      section(
        'compounds',
        'Compound nouns',
        p(
          'German joins nouns to make new ones. The **last part** is the base word: it gives the **meaning** and the **article**. The first part describes it. Sometimes a **linking letter** (-s-, -n-, -e-) is added; there is no rule, so learn it together with the word.',
        ),
        examples(
          [
            'das Haus + die Tür → die Haustür',
            'house + door → front door (die, because Tür is feminine)',
          ],
          ['die Reise + das Büro → das Reisebüro', 'travel agency (das, because Büro is neuter)'],
          [
            'der Geburtstag + das Geschenk → das Geburtstagsgeschenk',
            'birthday present (linking -s-)',
          ],
        ),
      ),
      section(
        'nouns',
        'Noun endings that give the gender',
        table(
          'Suffixes for nouns.',
          ['Ending', 'Gender', 'From', 'Example'],
          [
            ['-ung', 'always die', 'verb', 'üben → die Übung · wohnen → die Wohnung'],
            ['-er', 'der (a person doing it)', 'verb', 'fahren → der Fahrer'],
            ['-in', 'die (a woman)', 'der-noun', 'der Fahrer → die Fahrerin'],
            ['-chen', 'always das', 'noun', 'die Katze → das Kätzchen · das Haus → das Häuschen'],
          ],
        ),
        p('-chen also makes the vowel an **umlaut** when possible (Haus → Häuschen).'),
      ),
      section(
        'adjectives',
        'Adjective prefixes and suffixes',
        table(
          'Building adjectives.',
          ['Affix', 'Meaning', 'Example'],
          [
            ['un-', 'the opposite', 'freundlich → unfreundlich'],
            ['-los', 'without', 'die Arbeit → arbeitslos'],
            ['-bar', 'can be …', 'essen → essbar'],
            ['-ig', 'having the quality of', 'die Sonne → sonnig'],
            ['-isch', 'typical of', 'der Typ → typisch'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ der Reisebüro  ✓ das Reisebüro',
          '✗ der Wohnung  ✓ die Wohnung',
          '✗ der Häuschen  ✓ das Häuschen',
        ),
      ),
    ],
    related: ['articles', 'plurals'],
    sources: [SOURCES.wordFormation, SOURCES.gender, SOURCES.article],
  },
  {
    id: 'route-prepositions',
    title: 'durch, entlang, vorbei, bis zu',
    tagline: 'Describing a route and a direction',
    level: LEVEL,
    summary:
      'durch + acc., the noun + entlang, an … vorbei + dat., um … herum, bis zu + dat., über + acc. describe a route. Wo? / Wohin? / Woher? use different prepositions: am Meer – ans Meer – vom Meer. ohne + accusative means without.',
    sections: [
      section(
        'route',
        'On the way',
        p(
          'These prepositions describe **the path** you take, not a goal. Memorise them with their case.',
        ),
        table(
          'Route prepositions.',
          ['Preposition', 'Case', 'Meaning', 'Example'],
          [
            ['durch', 'accusative', 'through', 'Gehen Sie durch den Park.'],
            ['… entlang', 'accusative (noun first)', 'along', 'Gehen Sie die Straße entlang.'],
            ['an … vorbei', 'dative', 'past', 'Gehen Sie an der Kirche vorbei.'],
            ['um … herum', 'accusative', 'around', 'Gehen Sie um die Ecke herum.'],
            ['bis zu', 'dative', 'as far as', 'Fahren Sie bis zur Ampel.'],
            ['über', 'accusative', 'over, across', 'Gehen Sie über die Brücke.'],
          ],
        ),
        tip(
          'entlang',
          '**entlang** normally stands **after** the noun and takes the accusative: die Straße entlang, den Fluss entlang.',
        ),
      ),
      section(
        'wo-wohin',
        'Wo? Wohin? Woher?',
        p(
          'Places are described with three different questions and three different preposition patterns: **Wo?** (dative), **Wohin?** (accusative or nach / zu) and **Woher?** (aus / von + dative).',
        ),
        table(
          'Where, to where, from where.',
          ['Wo? (dative)', 'Wohin? (to)', 'Woher? (from)'],
          [
            ['am Meer', 'ans Meer', 'vom Meer'],
            ['in den Bergen', 'in die Berge', 'aus den Bergen'],
            ['in der Stadt', 'in die Stadt', 'aus der Stadt'],
            ['auf dem Land', 'aufs Land', 'vom Land'],
            ['in Italien', 'nach Italien', 'aus Italien'],
          ],
        ),
        p(
          'Short forms: an + das → **ans**, auf + das → **aufs**, in + das → **ins**; an + dem → **am**, von + dem → **vom**.',
        ),
      ),
      section(
        'ohne',
        'ohne: without',
        p(
          '**ohne** always takes the **accusative**: ohne Auto, ohne meine Kamera, ohne ihn. It has no article ending of its own: **ohne** + noun.',
        ),
        mistake(
          'Watch out',
          '✗ Gehen Sie durch dem Park.  ✓ Gehen Sie durch den Park.',
          '✗ Gehen Sie an die Kirche vorbei.  ✓ Gehen Sie an der Kirche vorbei.',
          '✗ ohne meinem Auto  ✓ ohne mein Auto',
          '✗ Ich fahre in dem Meer.  ✓ Ich fahre ans Meer.',
        ),
      ),
    ],
    related: ['two-way-prepositions', 'dative-prepositions', 'imperative'],
    sources: [SOURCES.durch, SOURCES.entlang, SOURCES.vorbei, SOURCES.ohne, SOURCES.prepositions],
  },
];
