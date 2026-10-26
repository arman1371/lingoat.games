import { conjugate, PRONOUNS } from '@/lib/german/conjugation';
import { konjunktiv1, konjunktiv1Perfect } from '@/lib/german/konjunktiv1';
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

const LEVEL = 'b2-1';

const werden = conjugate('werden');
const sein = conjugate('sein');

export const B21_TOPICS: GrammarTopic[] = [
  {
    id: 'nouns-with-prepositions',
    title: 'Nouns with prepositions',
    tagline: 'die Angst vor …, das Interesse an …',
    level: LEVEL,
    summary:
      'Many nouns need one fixed preposition, and the preposition decides the case: die Angst vor dem Test (dative), die Hoffnung auf einen Neuanfang (accusative). Learn the preposition together with the noun.',
    sections: [
      section(
        'what',
        'What it is',
        p(
          'In **Ich warte auf den Bus** the preposition **auf** is not chosen freely: the verb *warten* demands it. Nouns and adjectives work the same way. The noun **Angst** always goes with **vor**, the noun **Interesse** with **an**. The whole phrase, preposition included, is what the sentence needs, and the case after the preposition is fixed too.',
        ),
        examples(
          ['Sie hat Angst vor dem Alleinsein.', 'She is afraid of being alone.'],
          ['Sein Interesse an Kunst ist groß.', 'His interest in art is great.'],
          [
            'Ich habe großes Verständnis für deine Lage.',
            'I have great understanding for your situation.',
          ],
        ),
      ),
      section(
        'table',
        'Common nouns and their prepositions',
        table(
          'Nouns with a fixed preposition and the case that follows.',
          ['Noun', 'Preposition + case', 'Example'],
          [
            ['die Angst', 'vor + dative', 'die Angst vor dem Versagen'],
            ['der Respekt', 'vor + dative', 'der Respekt vor dem Alter'],
            ['das Interesse', 'an + dative', 'das Interesse an Musik'],
            ['der Zweifel', 'an + dative', 'Zweifel an der Aussage'],
            ['die Kritik', 'an + dative', 'Kritik an dem Plan'],
            ['die Hoffnung', 'auf + accusative', 'die Hoffnung auf Besserung'],
            ['der Stolz', 'auf + accusative', 'der Stolz auf die Kinder'],
            ['die Eifersucht', 'auf + accusative', 'die Eifersucht auf den Bruder'],
            ['die Freude', 'über + accusative', 'die Freude über das Geschenk'],
            ['der Ärger', 'über + accusative', 'der Ärger über den Lärm'],
            ['das Verständnis', 'für + accusative', 'Verständnis für die Probleme'],
            ['der Streit', 'um + accusative', 'der Streit um das Erbe'],
            ['der Wunsch', 'nach + dative', 'der Wunsch nach Ruhe'],
            ['die Sehnsucht', 'nach + dative', 'die Sehnsucht nach Heimat'],
            ['das Verhältnis', 'zu + dative', 'das Verhältnis zu den Eltern'],
            ['die Abhängigkeit', 'von + dative', 'die Abhängigkeit von der Technik'],
          ],
        ),
      ),
      section(
        'verbs',
        'Often like the verb, but not always',
        p(
          'A noun often keeps the preposition of the verb it comes from: **hoffen auf** → die Hoffnung **auf**, **Angst haben vor** → die Angst **vor**, **sich ärgern über** → der Ärger **über**. But not always, so check each one: **sich interessieren für** but das Interesse **an**.',
        ),
        compare(
          {
            title: 'Verb',
            question: 'sich interessieren …',
            example: 'Ich interessiere mich für Kunst.',
          },
          {
            title: 'Noun',
            question: 'das Interesse …',
            example: 'Mein Interesse an Kunst ist groß.',
          },
        ),
      ),
      section(
        'clauses',
        'Before a clause or a question',
        p(
          'A noun can take a **dass**-clause or a **zu**-infinitive directly: **die Hoffnung, dass alles gut wird**, **die Angst, allein zu sein**. Adjectives and verbs use **da(r)- + preposition** as a signpost: **Ich bin stolz darauf, dass du es geschafft hast.** In questions about things the preposition joins **wo(r)-**: **Wovor** hast du Angst? For people use the preposition and a question word: **Vor wem** hast du Angst?',
        ),
        examples(
          [
            'Die Hoffnung, bald zu gewinnen, gab ihnen Kraft.',
            'The hope of winning soon gave them strength.',
          ],
          [
            'Worauf freust du dich? – Auf den Urlaub.',
            'What are you looking forward to? – The holiday.',
          ],
          ['Auf wen wartest du? – Auf meine Schwester.', 'Who are you waiting for? – My sister.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ das Interesse für Kunst  ✓ das Interesse an Kunst',
          '✗ die Angst von dem Test  ✓ die Angst vor dem Test',
          '✗ die Hoffnung für eine Lösung  ✓ die Hoffnung auf eine Lösung',
          '✗ Ich habe Angst vor dem Test, dass ich durchfalle.  ✓ Ich habe Angst davor, dass ich durchfalle.',
        ),
      ),
    ],
    related: ['dative', 'accusative', 'adjective-prepositions'],
    sources: [S.object, S.pronominalAdverb],
  },
  {
    id: 'middle-field',
    title: 'Order in the Mittelfeld',
    tagline: 'What goes where between the two verb parts?',
    level: LEVEL,
    summary:
      'Between the finite verb and the final verb part (the Mittelfeld) the usual order is: pronouns first, then nouns; adverbials as time – reason – manner – place. Two pronouns: accusative before dative.',
    sections: [
      section(
        'what',
        'What the Mittelfeld is',
        p(
          'The conjugated verb stands in position 2, and the rest of the verb (participle, infinitive, separable prefix) stands at the end of the clause. Everything in between is the **Mittelfeld** (middle field). Several objects and adverbials can pile up there, and German has habits for their order. They are defaults, not laws: a speaker can move something forward for emphasis.',
        ),
        examples([
          'Ich habe dir gestern wegen des Staus eine Nachricht geschickt.',
          'I sent you a message yesterday because of the traffic jam.',
        ]),
      ),
      section(
        'objects',
        'Pronouns and objects',
        list(
          '**Pronouns before nouns:** Er schenkt **ihr** einen Ring. Ich gebe **es** dem Mann.',
          '**Two pronouns:** accusative before dative: Er schenkt **ihn ihr**. Ich gebe **es ihm**. (Subject pronoun first of all: Heute gibt **er es ihr**.)',
          '**Two nouns:** usually the dative (the person) before the accusative (the thing): Er schenkt **der Frau einen Ring**.',
          'A **short, known** element tends to come early, a **long or new** element late: that is why pronouns are first.',
        ),
        table(
          'Order of two objects.',
          ['Objects', 'Order', 'Example'],
          [
            ['pronoun + pronoun', 'accusative, dative', 'Ich gebe es ihm.'],
            ['pronoun + noun', 'pronoun first', 'Ich gebe ihm das Buch. · Ich gebe es dem Mann.'],
            ['noun + noun', 'dative, accusative', 'Ich gebe dem Mann das Buch.'],
          ],
        ),
      ),
      section(
        'adverbials',
        'Time – reason – manner – place',
        p(
          'Adverbials usually follow the pattern **te-ka-mo-lo**: **te**mporal, **ka**usal, **mo**dal, **lo**kal. It is only the neutral order; the new or most important piece of information goes last.',
        ),
        table(
          'The usual order of adverbials.',
          ['Kind', 'Question', 'Example'],
          [
            ['temporal', 'Wann?', 'morgen'],
            ['kausal', 'Warum?', 'wegen des Termins'],
            ['modal', 'Wie?', 'mit dem Zug'],
            ['lokal', 'Wo? Wohin?', 'nach Berlin'],
          ],
        ),
        examples([
          'Ich fahre morgen wegen des Termins mit dem Zug nach Berlin.',
          'I am going to Berlin by train tomorrow because of the appointment.',
        ]),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er schenkt ihr ihn.  ✓ Er schenkt ihn ihr.',
          '✗ Ich gebe dem Mann es.  ✓ Ich gebe es dem Mann.',
          '✗ Ich fahre nach Berlin mit dem Zug morgen. (clumsy)  ✓ Ich fahre morgen mit dem Zug nach Berlin.',
        ),
        tip(
          'Emphasis',
          'You can put any element in front of the verb to stress it: Mit dem Zug fahre ich morgen nach Berlin. The order in the Mittelfeld then stays the same.',
        ),
      ),
    ],
    related: ['word-order', 'object-pronouns', 'dative'],
    sources: [S.middleFieldSaarland, S.middleFieldElon],
  },
  {
    id: 'konjunktiv-1',
    title: 'Reported speech: Konjunktiv I',
    tagline: 'Er sagt, er sei müde.',
    level: LEVEL,
    summary:
      'To report what someone else said, written German uses Konjunktiv I (er sei, sie habe, er komme). If a Konjunktiv I form looks like the normal present, use Konjunktiv II instead (sie hätten, sie kämen).',
    sections: [
      section(
        'what',
        'What it is for',
        p(
          'When you report another person’s words, you can keep a distance from the statement: you only pass it on, you do not vouch for it. **Konjunktiv I** marks this. You find it in news reports, minutes, interviews and academic writing. In everyday speech most people simply use the indicative (**Er hat gesagt, dass er müde ist.**) or a **dass**-clause.',
        ),
        compare(
          {
            title: 'Direct speech',
            question: 'the exact words',
            example: 'Er sagt: „Ich bin müde.“',
          },
          { title: 'Reported speech', question: 'passed on', example: 'Er sagt, er sei müde.' },
        ),
      ),
      section(
        'forms',
        'The forms',
        p(
          'Take the infinitive without **-en** and add **-e, -est, -e, -en, -et, -en**. Only **sein** is irregular (er **sei**, no ending). Strong verbs keep the infinitive stem, so there is no vowel change: er **fahre**, not er fährt.',
        ),
        conjugationTable(
          'Konjunktiv I of four important verbs.',
          ['sein', 'haben', 'kommen', 'können'],
          {
            sein: konjunktiv1('sein'),
            haben: konjunktiv1('haben'),
            kommen: konjunktiv1('kommen'),
            können: konjunktiv1('können'),
          },
        ),
        p(
          'The **er / sie / es** form is the one that differs clearly from the indicative (er kommt → er **komme**). The forms for **ich**, **wir** and **sie** (plural) are often the same as the indicative, and then the reader cannot see that it is reported speech.',
        ),
      ),
      section(
        'tenses',
        'Which tense?',
        p(
          'The tense of Konjunktiv I follows the **time of the original statement**, not the tense of the introducing verb (sagte, sagt). There are three forms.',
        ),
        table(
          'Direct speech and reported speech.',
          ['Time of the statement', 'Direct speech', 'Reported speech'],
          [
            ['at the same time', '„Ich bin müde.“', 'Er sagte, er sei müde.'],
            [
              'earlier',
              '„Ich habe schlecht geschlafen.“',
              `Er sagte, er ${konjunktiv1Perfect('geschlafen', 'haben')['er/sie/es']} schlecht.`,
            ],
            [
              'earlier (movement)',
              '„Ich bin nach Hause gefahren.“',
              `Er sagte, er ${konjunktiv1Perfect('gefahren', 'sein')['er/sie/es']}.`,
            ],
            ['later', '„Ich komme morgen.“', 'Er sagte, er werde morgen kommen.'],
          ],
        ),
        p(
          'The past uses **habe / sei + participle**, the future **werde + infinitive**. Questions are reported with **ob** or the question word: **Sie fragte, ob er Zeit habe.**',
        ),
      ),
      section(
        'replacement',
        'When Konjunktiv I looks like the indicative',
        p(
          'If the Konjunktiv I form is identical to the indicative present, you cannot tell that it is reported speech. In that case use **Konjunktiv II**; if that is identical to the Präteritum too, use **würde + infinitive**.',
        ),
        table(
          'Replacing an unclear Konjunktiv I.',
          ['Direct speech', 'Konjunktiv I (unclear)', 'Use instead'],
          [
            [
              '„Wir haben keine Zeit.“',
              'sie haben keine Zeit',
              'Sie sagten, sie **hätten** keine Zeit.',
            ],
            [
              '„Wir sind müde.“',
              'sie sind müde (but: sie seien)',
              'Sie sagten, sie **seien** müde.',
            ],
            [
              '„Wir kommen morgen.“',
              'sie kommen morgen',
              'Sie sagten, sie **kämen** morgen. / sie **würden** morgen kommen.',
            ],
            [
              '„Ich habe viel zu tun.“',
              'ich habe viel zu tun',
              'Er sagte, er **hätte** viel zu tun.',
            ],
          ],
          0,
        ),
        tip(
          'Without Konjunktiv',
          'You can also report with a dass-clause in the indicative (Er sagt, dass er müde ist) or with a source phrase: Laut dem Bericht … / Nach Angaben der Polizei …',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Der Minister sagte, er ist krank. (in a formal report)  ✓ Der Minister sagte, er sei krank.',
          '✗ Die Kollegen sagten, sie haben keine Zeit.  ✓ Die Kollegen sagten, sie hätten keine Zeit.',
          '✗ Er sagte, er hat gearbeitet.  ✓ Er sagte, er habe gearbeitet.',
        ),
      ),
    ],
    related: ['perfekt', 'polite-forms', 'conjunctions'],
    sources: [S.indirectSpeech, S.subjunctive],
  },
  {
    id: 'causal-expressions',
    title: 'Giving reasons',
    tagline: 'weil, da, aufgrund, dank, aus, vor …',
    level: LEVEL,
    summary:
      'Reasons can be a clause (weil, da, denn), a main-clause adverb (deshalb, daher) or a noun phrase: aufgrund / infolge / angesichts + genitive, dank + dative (or genitive), aus and vor + noun without an article.',
    sections: [
      section(
        'clauses',
        'Reasons in a sentence',
        p('The question is always **Warum?** The word you pick decides the word order.'),
        table(
          'Reasons with a verb.',
          ['Word', 'Verb position', 'Example'],
          [
            [
              'weil',
              'end (subordinate clause)',
              'Ich bleibe zu Hause, weil ich Rückenschmerzen habe.',
            ],
            [
              'da',
              'end; the reason is known, often first',
              'Da ich Rückenschmerzen habe, bleibe ich zu Hause.',
            ],
            [
              'denn',
              'position 2 (main clause, position 0)',
              'Ich bleibe zu Hause, denn ich habe Rückenschmerzen.',
            ],
            [
              'deshalb / daher / deswegen',
              'position 2 right after the word',
              'Ich habe Rückenschmerzen. Deshalb bleibe ich zu Hause.',
            ],
          ],
        ),
        p(
          'Use **weil** to answer a direct “Warum?” and **da** when the listener already knows the reason or when the reason comes first.',
        ),
      ),
      section(
        'prepositions',
        'Reasons with a noun',
        p(
          'In formal and written German you often name the reason as a noun. The preposition decides the case.',
        ),
        table(
          'Prepositions that give a reason.',
          ['Preposition', 'Case', 'Meaning', 'Example'],
          [
            ['wegen', 'genitive (spoken: dative)', 'neutral or negative reason', 'wegen des Lärms'],
            [
              'aufgrund',
              'genitive (aufgrund von + dative)',
              'formal, on the basis of',
              'aufgrund des Lärms',
            ],
            [
              'infolge',
              'genitive (infolge von + dative)',
              'as a result of',
              'infolge der Erkrankung',
            ],
            ['angesichts', 'genitive', 'in view of, given', 'angesichts der Lage'],
            ['dank', 'dative (genitive is spreading)', 'a positive reason', 'dank deiner Hilfe'],
            ['aus', 'dative, no article', 'motive, on purpose', 'aus Angst, aus Neugier'],
            [
              'vor',
              'dative, no article',
              'direct reaction, not controlled',
              'vor Müdigkeit, vor Freude',
            ],
          ],
        ),
        table(
          'The genitive article (for aufgrund, infolge, angesichts, wegen).',
          ['masc.', 'fem.', 'neut.', 'plural'],
          [['des (+ -s)', 'der', 'des (+ -s)', 'der']],
        ),
        compare(
          {
            title: 'dank',
            question: 'a good reason',
            example: 'Dank des Trainings fühle ich mich fitter.',
          },
          {
            title: 'wegen / aufgrund',
            question: 'any reason',
            example: 'Aufgrund des Lärms konnte ich nicht schlafen.',
          },
          {
            title: 'angesichts',
            question: 'given a situation',
            example: 'Angesichts der Preise spare ich.',
          },
        ),
      ),
      section(
        'aus-vor',
        'aus or vor?',
        p(
          '**aus + emotion** gives the **motive** behind something you do on purpose: aus Mitleid helfen, aus Neugier fragen. **vor + emotion or state** names the cause of a **reaction** that you do not control: vor Kälte zittern, vor Freude weinen, vor Müdigkeit einschlafen. Both stand without an article.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ aufgrund dem Lärm  ✓ aufgrund des Lärms',
          '✗ Deshalb ich bleibe zu Hause.  ✓ Deshalb bleibe ich zu Hause.',
          '✗ Ich bleibe zu Hause, denn ich Rückenschmerzen habe.  ✓ … denn ich habe Rückenschmerzen.',
          '✗ Er weinte aus Freude. (a reaction)  ✓ Er weinte vor Freude.',
        ),
      ),
    ],
    related: ['conjunctions', 'dative', 'nominalisation'],
    sources: [S.causalClause, S.aufgrund, S.angesichts, S.dank, S.infolge],
  },
  {
    id: 'assumptions',
    title: 'Making assumptions',
    tagline: 'Er wird schon schlafen. Er wird den Zug verpasst haben.',
    level: LEVEL,
    summary:
      'Futur I with wohl or schon says what is probably true now (Er wird zu Hause sein). Futur II says what probably happened (Er wird den Zug verpasst haben): werden + participle + haben / sein.',
    sections: [
      section(
        'what',
        'Assumption, not prediction',
        p(
          'German often uses **werden** not to talk about the future but to say what the speaker **assumes**. Adverbs such as **wohl, schon, sicher, vermutlich, wahrscheinlich** make the guess clear.',
        ),
        examples(
          ['Sie wird schon schlafen.', 'She is probably asleep. (now)'],
          ['Er wird wohl zu Hause sein.', 'He is probably at home.'],
          ['Er wird den Zug verpasst haben.', 'He will have missed the train. (= probably he did)'],
        ),
      ),
      section(
        'forms',
        'Futur II',
        p(
          'The **Futur II** (also called Futur perfekt) is **werden** + **participle** + **haben** or **sein** at the end. The auxiliary is the same as in the Perfekt: **sein** for verbs of movement and change of state, **haben** for the rest.',
        ),
        table(
          'Futur II of machen (haben) and abreisen (sein).',
          ['Person', 'machen', 'abreisen'],
          PRONOUNS.map((pr) => [pr, `${werden[pr]} gemacht haben`, `${werden[pr]} abgereist sein`]),
        ),
        p(
          'Two uses: an assumption about the **past** (**Er wird wohl geschlafen haben.**), and an action that will be **finished by a later point in the future** (**Bis morgen werde ich den Text geschrieben haben.**).',
        ),
      ),
      section(
        'scale',
        'How sure are you?',
        table(
          'Expressing different degrees of certainty.',
          ['Certainty', 'Present', 'Past'],
          [
            ['almost sure', 'Er muss zu Hause sein.', 'Er muss den Zug verpasst haben.'],
            [
              'probable',
              'Er wird wohl / dürfte zu Hause sein.',
              'Er wird den Zug wohl verpasst haben. / Er dürfte ihn verpasst haben.',
            ],
            [
              'possible',
              'Er könnte zu Hause sein. · vielleicht',
              'Er könnte den Zug verpasst haben.',
            ],
          ],
        ),
        p('Modal verbs for assumptions get their own lesson.'),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er wird den Zug verpasst.  ✓ Er wird den Zug verpasst haben.',
          '✗ Er wird gestern krank sein. (past time)  ✓ Er wird gestern krank gewesen sein.',
          '✗ Sie wird abgereist haben.  ✓ Sie wird abgereist sein.',
        ),
        tip(
          'Futur I for facts',
          'For plans about the future German normally uses the present (Morgen fahre ich nach Berlin). Futur I with wohl or schon signals a guess.',
        ),
      ),
    ],
    related: ['perfekt', 'modal-verbs', 'modal-assumption'],
    sources: [S.future2],
  },
  {
    id: 'es-dass',
    title: 'es and dass-clauses',
    tagline: 'Ich finde es schade, dass …',
    level: LEVEL,
    summary:
      'A dass-clause can be the subject or the object of a sentence. es often points ahead to it (Ich finde es schade, dass du gehst); with a verb + preposition use darauf, darüber … (Ich warte darauf, dass du kommst). With the same subject use zu + infinitive.',
    sections: [
      section(
        'clause',
        'The dass-clause',
        p(
          'A **dass**-clause says what you know, think or feel. It can be the **subject** (**Es ist bekannt, dass der Tag 24 Stunden hat.**) or the **object** (**Ich wusste, dass …**) of the main verb. The verb goes to the end.',
        ),
        examples(
          [
            'Ich finde es schade, dass du schon gehst.',
            'I think it is a pity that you are leaving already.',
          ],
          ['Es ist wichtig, dass wir pünktlich sind.', 'It is important that we are on time.'],
        ),
      ),
      section(
        'es',
        'es as a signpost',
        p(
          'With adjectives and some verbs **es** points ahead to the clause that follows (**Ich finde es schade, dass …**). If the **dass**-clause comes first, **es** disappears: **Dass du schon gehst, finde ich schade.** In a sentence like **Es ist wichtig, dass …** the es is the placeholder subject.',
        ),
        compare(
          {
            title: 'clause last',
            question: 'with es',
            example: 'Ich finde es toll, dass du kommst.',
          },
          { title: 'clause first', question: 'no es', example: 'Dass du kommst, finde ich toll.' },
        ),
      ),
      section(
        'darauf',
        'Verbs with a preposition: darauf, darüber …',
        p(
          'If the verb takes a fixed preposition, the signpost is **da(r)- + preposition**: **Ich warte darauf, dass du kommst.** Use the same preposition as in **warten auf** or **sich ärgern über**.',
        ),
        table(
          'Verb + preposition → signpost.',
          ['Verb', 'Signpost', 'Example'],
          [
            ['warten auf', 'darauf', 'Ich warte darauf, dass der Bus kommt.'],
            ['sich verlassen auf', 'darauf', 'Ich verlasse mich darauf, dass du kommst.'],
            ['sich freuen über', 'darüber', 'Sie freut sich darüber, dass er anruft.'],
            ['sich ärgern über', 'darüber', 'Ich ärgere mich darüber, dass er zu spät ist.'],
            ['sich erinnern an', 'daran', 'Ich erinnere mich daran, dass wir uns trafen.'],
            ['Angst haben vor', 'davor', 'Sie hat Angst davor, dass er geht.'],
          ],
        ),
      ),
      section(
        'infinitive',
        'dass or zu + infinitive?',
        p(
          'If the subject of both parts is the **same person**, use **zu + infinitive**. If the subjects are **different**, you need a **dass**-clause.',
        ),
        table(
          'Same or different subject.',
          ['Same subject', 'Different subjects'],
          [
            ['Ich hoffe, dich bald zu sehen.', 'Ich hoffe, dass du bald kommst.'],
            ['Ich freue mich darauf, euch zu besuchen.', 'Ich freue mich darauf, dass ihr kommt.'],
            [
              'Er findet es wichtig, pünktlich zu sein.',
              'Er findet es wichtig, dass wir pünktlich sind.',
            ],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Ich ärgere mich dass du spät bist.  ✓ Ich ärgere mich darüber, dass du spät bist.',
          '✗ Ich hoffe, dass ich dich bald sehe. (works, but wordy)  ✓ Ich hoffe, dich bald zu sehen.',
          '✗ Ich freue mich darauf, dass ich euch besuche.  ✓ Ich freue mich darauf, euch zu besuchen.',
          '✗ Dass du kommst, ich finde es toll.  ✓ Dass du kommst, finde ich toll.',
        ),
      ),
    ],
    related: ['conjunctions', 'modal-verbs', 'word-order'],
    sources: [S.contentClause, S.expletive, S.pronominalAdverb],
  },
  {
    id: 'state-passive',
    title: 'Zustandspassiv: sein + participle',
    tagline: 'Die Tür wird geschlossen. Die Tür ist geschlossen.',
    level: LEVEL,
    summary:
      'werden + participle describes a process (Die Tür wird geschlossen); sein + participle describes the result (Die Tür ist geschlossen). An agent, if named, is introduced with von (a person) or durch (a cause or means).',
    sections: [
      section(
        'what',
        'Process or result?',
        p(
          'The normal passive (**Vorgangspassiv**) is formed with **werden** and shows an action in progress. The **Zustandspassiv** (state passive) is formed with **sein** and shows the **state that results** from an action: **Die Tür ist geschlossen** means that nobody has to close it any more.',
        ),
        compare(
          {
            title: 'Vorgangspassiv',
            question: 'werden + participle: the process',
            example: 'Das Geschäft wird um 9 Uhr geöffnet.',
          },
          {
            title: 'Zustandspassiv',
            question: 'sein + participle: the result',
            example: 'Das Geschäft ist von 9 bis 18 Uhr geöffnet.',
          },
        ),
      ),
      section(
        'forms',
        'The forms',
        table(
          'Vorgangspassiv and Zustandspassiv in three tenses.',
          ['Tense', 'Process (werden)', 'State (sein)'],
          [
            [
              'Präsens',
              `Der Vertrag ${werden['er/sie/es']} unterschrieben.`,
              `Der Vertrag ${sein['er/sie/es']} unterschrieben.`,
            ],
            ['Präteritum', 'Der Vertrag wurde unterschrieben.', 'Der Vertrag war unterschrieben.'],
            [
              'Futur',
              'Der Vertrag wird unterschrieben werden.',
              'Der Vertrag wird unterschrieben sein.',
            ],
          ],
        ),
        p(
          'Only verbs that describe an action with a **result** form a state passive: öffnen, schließen, reparieren, buchen, ausverkaufen, verschieben. A verb that describes only a lasting activity does not.',
        ),
      ),
      section(
        'agent',
        'Naming the doer: von or durch',
        p(
          'Normally the doer is not mentioned. If it is: **von + dative** names a **person or institution** (the real agent), **durch + accusative** names a **cause or means**.',
        ),
        examples(
          [
            'Der Vertrag wurde von der Chefin unterschrieben.',
            'The contract was signed by the boss.',
          ],
          [
            'Das Dach wurde durch den Sturm beschädigt. Jetzt ist es beschädigt.',
            'The roof was damaged by the storm. Now it is damaged.',
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Das Museum wird montags geschlossen. (you mean: it is closed)  ✓ Das Museum ist montags geschlossen.',
          '✗ Der Bericht ist gerade geschrieben. (still in progress)  ✓ Der Bericht wird gerade geschrieben.',
          '✗ Das Fenster wurde durch Frau Meier geöffnet.  ✓ Das Fenster wurde von Frau Meier geöffnet.',
        ),
      ),
    ],
    related: ['perfekt', 'past-tense', 'passive-alternatives'],
    sources: [S.statePassive, S.passive],
  },
  {
    id: 'temporal-connectors',
    title: 'solange, sobald, ehe, seitdem',
    tagline: 'Timing with clauses',
    level: LEVEL,
    summary:
      'solange (as long as), sobald (as soon as), ehe (before), seitdem (since then), sooft (whenever) and bis (until) start a subordinate clause: the verb goes to the end. If that clause comes first, the main clause continues with the verb.',
    sections: [
      section(
        'list',
        'The connectors',
        table(
          'Temporal conjunctions.',
          ['Conjunction', 'Meaning', 'Example'],
          [
            ['solange', 'for as long as (duration)', 'Solange es regnet, bleibe ich zu Hause.'],
            ['sobald', 'as soon as (the moment)', 'Sobald ich fertig bin, rufe ich dich an.'],
            [
              'ehe',
              'before (= bevor; a bit formal)',
              'Der Winter muss enden, ehe der Frühling kommt.',
            ],
            [
              'seitdem',
              'since then (from a point on)',
              'Seitdem er in Berlin wohnt, geht er oft ins Museum.',
            ],
            ['sooft', 'whenever, every time', 'Sooft ich ihn sehe, grüßt er freundlich.'],
            ['bis', 'until (the end point)', 'Ich warte, bis du fertig bist.'],
          ],
        ),
      ),
      section(
        'order',
        'Word order',
        p(
          'All of them are **subordinating conjunctions**: the finite verb goes to the **end** of their clause. If the temporal clause stands in front, it counts as position 1, so the main clause starts with its verb.',
        ),
        compare(
          {
            title: 'clause last',
            question: 'main clause first',
            example: 'Ich rufe dich an, sobald ich fertig bin.',
          },
          {
            title: 'clause first',
            question: 'verb of the main clause next',
            example: 'Sobald ich fertig bin, rufe ich dich an.',
          },
        ),
        p(
          '**seitdem** can also be an **adverb**. Then it only fills position 1 and the verb stays in position 2: **Das Gesetz gilt seit 1985. Seitdem haben sich viele Dinge geändert.** Only the conjunction is written as one word: **solange**. In **Ich bin so lange gelaufen, bis meine Beine schmerzten** the adverb **so lange** is two words.',
        ),
      ),
      section(
        'tense',
        'Tenses',
        list(
          'For the future use the **present** in both clauses: Sobald ich Zeit habe, melde ich mich.',
          'With **seitdem** the main clause often has the Perfekt or Präsens: Seitdem sie Yoga macht, schläft sie besser.',
          'If one event happened before the other in the past, use the **Plusquamperfekt** in the earlier clause: Seitdem wir erfahren hatten, wie teuer es war, sparten wir.',
        ),
        mistake(
          'Watch out',
          '✗ Ich warte, bis du nicht fertig bist.  ✓ Ich warte, bis du fertig bist. (no “nicht”)',
          '✗ Sobald ich komme an, rufe ich dich an.  ✓ Sobald ich ankomme, rufe ich dich an.',
          '✗ Seitdem er wohnt in Berlin, …  ✓ Seitdem er in Berlin wohnt, …',
          '✗ Solange es regnet, ich bleibe zu Hause.  ✓ Solange es regnet, bleibe ich zu Hause.',
        ),
      ),
    ],
    related: ['prepositions-of-time', 'conjunctions', 'separable-verbs'],
    sources: [S.temporalClause, S.solange, S.sobald, S.ehe, S.seitdem, S.sooft, S.bis],
  },
  {
    id: 'noun-verb-phrases',
    title: 'Noun-verb phrases',
    tagline: 'eine Entscheidung treffen, in Anspruch nehmen',
    level: LEVEL,
    summary:
      'Formal German often says an action with a fixed noun + verb phrase (eine Entscheidung treffen) instead of one verb (entscheiden). The noun carries the meaning, the verb is only a partner that you must learn together with it.',
    sections: [
      section(
        'what',
        'What they are',
        p(
          'In a **Nomen-Verb-Verbindung** (also called *Funktionsverbgefüge*) the verb has lost most of its own meaning and only works as a function verb: **in Kraft treten** has nothing to do with “stepping”. The meaning sits in the noun, so you must learn the **whole phrase** with its preposition and article.',
        ),
        examples(
          ['Wir treffen morgen eine Entscheidung.', 'We will make a decision tomorrow.'],
          [
            'Dieses Angebot kommt für mich nicht in Frage.',
            'This offer is out of the question for me.',
          ],
          ['Der Verein stellt Räume zur Verfügung.', 'The club provides rooms.'],
        ),
      ),
      section(
        'table',
        'Phrases to know',
        table(
          'Common noun-verb phrases and a plain alternative.',
          ['Phrase', 'Meaning', 'Plain alternative'],
          [
            ['eine Entscheidung treffen', 'to make a decision', 'entscheiden'],
            ['in Anspruch nehmen', 'to make use of, claim', 'beanspruchen'],
            ['zur Verfügung stellen', 'to provide, make available', 'bereitstellen'],
            ['in Frage kommen', 'to be an option', '–'],
            ['in Frage stellen', 'to question', 'bezweifeln'],
            ['in Erwägung ziehen', 'to consider', 'erwägen'],
            ['zur Kenntnis nehmen', 'to take note of', 'wahrnehmen'],
            ['Kritik üben an + Dativ', 'to criticise', 'kritisieren'],
            ['Rücksicht nehmen auf + Akkusativ', 'to be considerate of', 'berücksichtigen'],
            ['zum Ausdruck bringen', 'to express', 'ausdrücken'],
            ['in Kraft treten', 'to come into force', '–'],
          ],
        ),
        p('Not every phrase has a one-word alternative. Some have none at all.'),
      ),
      section(
        'grammar',
        'How they behave',
        list(
          'The **verb is conjugated** as usual: Er **trifft** eine Entscheidung. Sie **hat** eine Entscheidung **getroffen**.',
          'They are negated with **nicht**, like a simple verb: Er setzte die Maschine **nicht** in Betrieb.',
          'The noun part **cannot be replaced by a pronoun or asked for**; you cannot say “Wozu bringst du es?”.',
          'Function verbs follow a pattern: **kommen / stehen / geraten** show a process or state (zur Anwendung kommen, unter Druck stehen), **stellen / bringen / setzen** cause it (zur Diskussion stellen, in Gang setzen).',
          'The noun can take an adjective, which one verb could not: **eine schwere Entscheidung** treffen.',
        ),
        tip(
          'Style',
          'These phrases make a text sound formal and official. In speech and plain writing a single verb is often better: Wir entscheiden morgen.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ eine Entscheidung machen  ✓ eine Entscheidung treffen',
          '✗ zu Verfügung stellen  ✓ zur Verfügung stellen',
          '✗ in die Frage kommen  ✓ in Frage kommen',
          '✗ Ich nehme das Angebot nicht in Anspruch, kein.  ✓ Ich nehme das Angebot nicht in Anspruch.',
        ),
      ),
    ],
    related: ['nominalisation', 'passive-alternatives'],
    sources: [S.functionVerbs],
  },
  {
    id: 'relative-wer',
    title: 'wer / wen / wem … clauses',
    tagline: 'Wer zu spät kommt, …',
    level: LEVEL,
    summary:
      'wer, wen, wem and wessen start a clause about people in general (“whoever”). Their case comes from the verb inside that clause; the main clause often continues with der, den or dem. The verb of the wer-clause goes to the end.',
    sections: [
      section(
        'what',
        'Clauses without a noun to refer to',
        p(
          'An ordinary relative clause belongs to a noun (**der Mann, der …**). A **wer**-clause has no noun: it talks about **anybody who** or **everybody who**. It is used for rules, advice, notices and proverbs.',
        ),
        examples(
          ['Wer zu spät kommt, muss draußen warten.', 'Whoever comes late has to wait outside.'],
          ['Wer eine Wohnung sucht, braucht Geduld.', 'Anyone looking for a flat needs patience.'],
          [
            'Wem die Miete zu hoch ist, der sucht eine Genossenschaft.',
            'Whoever finds the rent too high looks for a cooperative.',
          ],
        ),
      ),
      section(
        'cases',
        'The case',
        table(
          'wer-clauses by case; the second column often continues the main clause.',
          ['Case', 'Pronoun', 'Main clause', 'Example'],
          [
            ['nominative', 'wer', 'der', 'Wer nicht zahlt, (der) muss gehen.'],
            ['accusative', 'wen', 'den', 'Wen die Nachbarn stören, den bitte ich zu mir.'],
            ['dative', 'wem', 'dem', 'Wem es nicht gefällt, (der) kann gehen.'],
            ['genitive', 'wessen', 'dessen', 'Wessen Auto im Weg steht, der muss es entfernen.'],
          ],
        ),
        p(
          'Two verbs decide two cases. The case of **wer / wen / wem** comes from the verb **inside the wer-clause** (stören + accusative → wen), the case of **der / den / dem** from the verb of the **main clause** (bitten + accusative → den). If both cases are the same, **der** is often dropped: **Wer rastet, der rostet** or **Wer rastet, rostet.** If they differ, keep it: **Wen die Nachbarn stören, dem rate ich zu reden.**',
        ),
      ),
      section(
        'compare',
        'wer or der?',
        compare(
          {
            title: 'with a noun',
            question: 'der Mann, der …',
            example: 'Der Mann, der nebenan wohnt, ist Arzt.',
          },
          {
            title: 'without a noun',
            question: 'wer …',
            example: 'Wer nebenan wohnt, ist Arzt. (whoever)',
          },
        ),
        p(
          'For things use **was**: **Alles, was du brauchst, ist hier.** and **Was glänzt, ist nicht immer Gold.**',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Der eine Wohnung sucht, braucht Geduld. (general)  ✓ Wer eine Wohnung sucht, braucht Geduld.',
          '✗ Wer die Nachbarn stören, …  ✓ Wen die Nachbarn stören, … (stören takes the accusative)',
          '✗ Wer zu spät kommt, muss er draußen warten.  ✓ Wer zu spät kommt, muss draußen warten.',
        ),
      ),
    ],
    related: ['dative', 'accusative', 'word-order'],
    sources: [S.relativeClause],
  },
  {
    id: 'conditional-b2',
    title: 'falls, sofern and clauses without wenn',
    tagline: 'Hätte ich mehr Zeit, … · Andernfalls …',
    level: LEVEL,
    summary:
      'falls (in case) and sofern (provided that) are alternatives to wenn. You can also drop wenn and put the verb first (Hätte ich mehr Zeit, würde ich reisen). Andernfalls (otherwise) starts a main clause, and bei + dative gives a condition as a noun.',
    sections: [
      section(
        'types',
        'Three kinds of conditions',
        table(
          'Real and unreal conditions.',
          ['Kind', 'Verb form', 'Example'],
          [
            ['real (possible)', 'present', 'Wenn sie kommt, spreche ich mit ihr.'],
            ['unreal, present', 'Konjunktiv II', 'Wenn sie käme, würde ich mit ihr sprechen.'],
            [
              'unreal, past',
              'hätte / wäre + participle',
              'Wenn sie gekommen wäre, hätte ich mit ihr gesprochen.',
            ],
          ],
        ),
      ),
      section(
        'falls',
        'wenn, falls, sofern',
        table(
          'Conjunctions for a condition.',
          ['Word', 'Meaning', 'Example'],
          [
            ['wenn', 'if; also “whenever”', 'Wenn es regnet, bleibe ich zu Hause.'],
            [
              'falls',
              'in case (a possible, maybe unlikely case)',
              'Ich rufe an, falls du Probleme hast.',
            ],
            [
              'sofern',
              'provided that (a precondition, formal)',
              'Ich fliege im September, sofern mein Chef den Urlaub genehmigt.',
            ],
          ],
        ),
        p('All three send the verb to the end. falls and sofern cannot mean “whenever”.'),
      ),
      section(
        'verb-first',
        'Without wenn: verb first',
        p(
          'You can drop **wenn** and put the verb at the start. This is common with Konjunktiv II (**Hätte ich … / Wäre er …**) and with **sollte** in formal texts. The main clause then often continues with **dann** or with the verb.',
        ),
        examples(
          [
            'Hätte ich mehr Zeit, würde ich öfter reisen.',
            'If I had more time I would travel more often.',
          ],
          [
            'Wäre die Miete niedriger, würden wir bleiben.',
            'If the rent were lower we would stay.',
          ],
          ['Sollten Sie Fragen haben, rufen Sie uns an.', 'Should you have questions, call us.'],
          [
            'Kommst du früh, können wir noch essen gehen.',
            'If you come early we can still go for a meal.',
          ],
        ),
      ),
      section(
        'otherwise',
        'Otherwise: andernfalls, ansonsten, bei',
        p(
          '**andernfalls** and **ansonsten** (otherwise) stand in a new sentence and take position 1: the verb follows. With a noun you can say the same with **bei + dative**: **bei Regen**, **bei Verspätung**.',
        ),
        examples(
          [
            'Zahlen Sie pünktlich. Andernfalls müssen Sie eine Gebühr zahlen.',
            'Pay on time. Otherwise you have to pay a fee.',
          ],
          ['Bei Regen fällt das Fest aus.', 'If it rains, the party is cancelled.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Hätte ich mehr Zeit, ich würde reisen.  ✓ Hätte ich mehr Zeit, würde ich reisen.',
          '✗ Falls er kommt, er bringt Kuchen.  ✓ Falls er kommt, bringt er Kuchen.',
          '✗ Andernfalls Sie müssen zahlen.  ✓ Andernfalls müssen Sie zahlen.',
        ),
      ),
    ],
    related: ['polite-forms', 'conjunctions', 'word-order'],
    sources: [S.conditionalClause, S.falls, S.sofern],
  },
  {
    id: 'text-cohesion',
    title: 'Reference words that link sentences',
    tagline: 'dadurch, damit, dafür, darüber, daran, dabei',
    level: LEVEL,
    summary:
      'da(r)- + preposition (dadurch, damit, dafür, darüber, dabei) points back to something just mentioned. It must fit the preposition of the verb: sich ärgern über → darüber. Use it to link sentences without repeating words.',
    sections: [
      section(
        'what',
        'Pointing back',
        p(
          'A text hangs together because its sentences refer to each other. One way is a **pronominal adverb**: **da(r)-** plus a preposition. It replaces **preposition + something (not a person)** that you have just said.',
        ),
        examples(
          ['Heute ist Freitag. Darüber freue ich mich.', 'Today is Friday. I am happy about that.'],
          [
            'Der Akku ist leer. Dadurch schaltet sich das Gerät aus.',
            'The battery is empty. Because of that the device switches off.',
          ],
          [
            'Sie hat einen Podcast gegründet. Damit erreicht sie viele Menschen.',
            'She started a podcast. With it she reaches many people.',
          ],
        ),
      ),
      section(
        'meaning',
        'The most useful words',
        table(
          'Reference words and what they mean.',
          ['Word', 'Meaning', 'Example'],
          [
            [
              'dadurch',
              'by that means, because of that',
              'Er schläft wenig. Dadurch ist er oft müde.',
            ],
            ['damit', 'with that', 'Sie lernt jeden Tag. Damit verbessert sie sich schnell.'],
            [
              'dafür',
              'for that, in return, on the other hand',
              'Er ist nicht groß, dafür aber schnell.',
            ],
            ['darüber', 'about that', 'Es gab Streit. Darüber sprechen sie nicht gern.'],
            ['daran', 'on / of that', 'Sie war krank. Daran erinnert er sich noch.'],
            [
              'dabei',
              'in doing so, at the same time',
              'Er repariert das Rad und hört dabei Musik.',
            ],
          ],
        ),
        p(
          'The **r** appears before a vowel: **da + auf = darauf**, **da + über = darüber**, but **da + mit = damit**.',
        ),
      ),
      section(
        'rule',
        'Match the preposition of the verb',
        p(
          'Take the preposition your verb needs: **sich ärgern über** → **darüber**, **denken an** → **daran**, **Wert legen auf** → **darauf**. For **people** use preposition + pronoun: **Sie denkt an ihn** (not “daran”). **damit** is also a conjunction for purpose with the verb at the end: **Ich spare, damit ich reisen kann.**',
        ),
        table(
          'Different ways to avoid repeating a word.',
          ['Means', 'Example'],
          [
            ['pronoun', 'Mein Vater ist Arzt. Er arbeitet im Krankenhaus.'],
            ['pronominal adverb', 'Das Gesetz ist neu. Darüber wird viel diskutiert.'],
            [
              'synonym or umbrella word',
              'Das Auto ist alt. Der Wagen verbraucht viel. Das Fahrzeug soll weg.',
            ],
            ['connector', 'Er war krank. Deshalb kam er nicht.'],
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Er ärgert sich dadurch.  ✓ Er ärgert sich darüber.',
          '✗ Sie hat einen Freund. Sie denkt oft daran.  ✓ … Sie denkt oft an ihn.',
          '✗ Ich warte dafür, dass du anrufst.  ✓ Ich warte darauf, dass du anrufst.',
        ),
      ),
    ],
    related: ['es-dass', 'conjunctions', 'nouns-with-prepositions'],
    sources: [S.pronominalAdverb, S.cohesion, S.damit, S.dadurch],
  },
  {
    id: 'passive-alternatives',
    title: 'Passive alternatives',
    tagline: 'Das lässt sich lösen. · Das ist zu lösen. · lösbar',
    level: LEVEL,
    summary:
      'Instead of werden + participle German often uses sich lassen + infinitive, sein + zu + infinitive, an adjective in -bar, or man. They usually mean “can be done” or “must be done”. A passive without a subject (Hier wird gearbeitet) fits where the doer does not matter.',
    sections: [
      section(
        'overview',
        'The alternatives at a glance',
        table(
          'Ways to say something passive.',
          ['Structure', 'Meaning', 'Example'],
          [
            ['werden + participle', 'plain passive', 'Das Problem wird gelöst.'],
            ['sich lassen + infinitive', 'can be done', 'Das Problem lässt sich lösen.'],
            ['sein + zu + infinitive', 'can or must be done', 'Das Problem ist zu lösen.'],
            ['adjective in -bar', 'can be done', 'Das Problem ist lösbar.'],
            ['man + active verb', 'by people in general', 'Man kann das Problem lösen.'],
            [
              'bekommen + participle',
              'the receiver is the subject',
              'Er bekommt das Paket geschickt.',
            ],
          ],
        ),
      ),
      section(
        'details',
        'How each one works',
        list(
          '**sich lassen + infinitive:** possibility. The infinitive has no zu: **Die Oberfläche lässt sich gut behandeln.** Negated: Das lässt sich nicht beweisen.',
          '**sein + zu + infinitive:** either “can” (**Der Fehler ist leicht zu beheben**) or “must” (**Der Antrag ist bis Freitag einzureichen**). Context decides. It works only with verbs that have an accusative object.',
          '**-bar:** the adjective means “capable of being …”: lösbar, erklärbar, lieferbar. With **un-** it means “cannot be …”: unlösbar.',
          '**man:** an active sentence that does not name the doer: Man darf hier nicht rauchen = Hier darf nicht geraucht werden.',
          '**bekommen / erhalten / kriegen + participle:** the person who receives something becomes the subject: Der Schüler bekam das Handy abgenommen.',
        ),
      ),
      section(
        'impersonal',
        'The passive without a subject',
        p(
          'A verb without an accusative object can also be made passive. There is **no subject**; **es** only appears as a placeholder in position 1 when nothing else stands there.',
        ),
        examples(
          ['Hier wird gearbeitet.', 'People work here. / Work is going on here.'],
          [
            'Es wurde viel getanzt. · Gestern wurde viel getanzt.',
            'There was a lot of dancing. · Yesterday there was a lot of dancing.',
          ],
          ['Hier darf nicht geraucht werden.', 'Smoking is not allowed here.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Das Problem lässt sich zu lösen.  ✓ Das Problem lässt sich lösen.',
          '✗ Hier wird es gearbeitet.  ✓ Hier wird gearbeitet.',
          '✗ Das Problem ist lösen zu.  ✓ Das Problem ist zu lösen.',
        ),
      ),
    ],
    related: ['state-passive', 'noun-verb-phrases', 'modal-verbs'],
    sources: [S.passive, S.lassen, S.bar],
  },
  {
    id: 'auch-wenn',
    title: 'auch wenn, selbst wenn, zwar … aber',
    tagline: 'Even if, even though, although … but …',
    level: LEVEL,
    summary:
      'auch wenn and selbst wenn start a subordinate clause (verb at the end): auch wenn for a fact or a possibility, selbst wenn for an unlikely case. zwar … aber / jedoch concedes a point. dennoch and allerdings are adverbs: the verb follows them directly.',
    sections: [
      section(
        'what',
        'Giving way, and carrying on',
        p(
          'A **concession** says: something would usually stop you, but it does not. The expected result does not happen (**Auch wenn es regnet, gehen wir spazieren.**). German has clauses with the verb at the end and adverbs that keep the verb in position 2.',
        ),
        table(
          'Concessive expressions in this lesson.',
          ['Expression', 'Meaning', 'Verb position', 'Example'],
          [
            ['obwohl', 'although (a fact)', 'end', 'Obwohl es regnet, gehen wir spazieren.'],
            [
              'auch wenn',
              'even if / even though',
              'end',
              'Auch wenn es regnet, gehen wir spazieren.',
            ],
            [
              'selbst wenn',
              'even if (unlikely)',
              'end',
              'Selbst wenn ich Zeit hätte, käme ich nicht mit.',
            ],
            [
              'zwar … aber / jedoch',
              'it is true … but',
              'position 2',
              'Die Stadt ist zwar teuer, aber wunderschön.',
            ],
            [
              'dennoch / allerdings',
              'nevertheless / however',
              'position 2',
              'Es regnet. Dennoch gehen wir spazieren.',
            ],
          ],
        ),
      ),
      section(
        'wenn',
        'auch wenn or selbst wenn?',
        compare(
          {
            title: 'auch wenn',
            question: 'a fact or an open possibility',
            example: 'Auch wenn er müde ist, kommt er mit.',
          },
          {
            title: 'selbst wenn',
            question: 'an unlikely or imagined case',
            example: 'Selbst wenn er müde wäre, käme er mit.',
          },
        ),
        p(
          'After **selbst wenn** you often meet **Konjunktiv II** (hätte, wäre, käme, würde + infinitive). You can intensify the concession with **noch so**: **Auch wenn sie noch so müde war, …** Do not use **trotzdem** as a conjunction with the verb at the end; it is an adverb.',
        ),
      ),
      section(
        'zwar',
        'zwar … aber and dennoch',
        p(
          '**zwar** admits a point in the first part, **aber** or **jedoch** introduces the counter-argument. **aber** stands in position 0 and does not change the word order; **jedoch** and **dennoch** take position 1 or sit after the verb, and the verb stays in position 2.',
        ),
        examples(
          [
            'Er ist zwar jung, aber sehr erfahren.',
            'He is young, it is true, but very experienced.',
          ],
          ['Das Zimmer ist zwar klein, jedoch sehr hell.', 'The room is small, but very bright.'],
          [
            'Sie war krank. Dennoch ging sie zur Arbeit.',
            'She was ill. Nevertheless she went to work.',
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Auch wenn es regnet, wir gehen spazieren.  ✓ Auch wenn es regnet, gehen wir spazieren.',
          '✗ Dennoch ich gehe zur Arbeit.  ✓ Dennoch gehe ich zur Arbeit.',
          '✗ Obwohl es regnet, aber wir gehen spazieren.  ✓ Obwohl es regnet, gehen wir spazieren.',
        ),
      ),
    ],
    related: ['conjunctions', 'polite-forms', 'conditional-b2'],
    sources: [S.concessiveClause, S.conditionalClause],
  },
  {
    id: 'adversative',
    title: 'Contrasts: während, dagegen, hingegen',
    tagline: 'On the one hand … on the other hand …',
    level: LEVEL,
    summary:
      'To contrast two facts, während (whereas) starts a subordinate clause. dagegen, hingegen and jedoch are adverbs: they take position 1 or come after the subject, and the verb stays in position 2. aber and doch stand in position 0.',
    sections: [
      section(
        'what',
        'Two facts side by side',
        p(
          'A **contrast** compares two things that are different: it is not a concession (where one thing was expected to stop the other). It needs two comparable statements: **Der Norden ist reich, der Süden hat Probleme.**',
        ),
        examples(
          [
            'Die Preise steigen. Die Löhne bleiben dagegen gleich.',
            'Prices rise. Wages, by contrast, stay the same.',
          ],
          [
            'Hunde können gut schwimmen, Katzen hingegen scheuen das Wasser.',
            'Dogs can swim well, cats on the other hand avoid water.',
          ],
        ),
      ),
      section(
        'table',
        'The words',
        table(
          'Words for a contrast.',
          ['Word', 'Kind', 'Verb', 'Example'],
          [
            [
              'während',
              'subordinating conjunction',
              'end',
              'Während die einen online einkaufen, gehen die anderen lieber in den Laden.',
            ],
            [
              'dagegen',
              'adverb',
              'position 2',
              'Die Preise steigen. Die Löhne bleiben dagegen gleich.',
            ],
            [
              'hingegen',
              'adverb',
              'position 2',
              'Der Norden ist reich. Der Süden hat hingegen Probleme.',
            ],
            [
              'jedoch',
              'adverb / conjunction-like',
              'position 2',
              'Sie wollten fahren, jedoch wurde nichts daraus.',
            ],
            ['aber / doch', 'conjunction', 'position 0', 'Er ist jung, aber erfahren.'],
          ],
        ),
        p(
          '**Warning:** **während** also means **“while”** (at the same time). Only the context shows which: **Während ich zu Fuß gehe, fährt mein Sohn mit dem Auto** is a contrast.',
        ),
      ),
      section(
        'position',
        'Where do dagegen and hingegen go?',
        p(
          'They can open the sentence (**Hingegen hat der Süden Probleme.**) or come **after the subject or the verb**: **Der Süden hat hingegen Probleme. / Der Süden hingegen hat Probleme.** The conjugated verb is always in position 2.',
        ),
        mistake(
          'Watch out',
          '✗ Während er arbeitet, sie schläft.  ✓ Während er arbeitet, schläft sie.',
          '✗ Dagegen die Löhne bleiben gleich.  ✓ Dagegen bleiben die Löhne gleich.',
          '✗ Die Preise steigen, dagegen die Löhne bleiben gleich.  ✓ … dagegen bleiben die Löhne gleich.',
        ),
      ),
    ],
    related: ['conjunctions', 'word-order', 'comparison'],
    sources: [S.adversativeClause, S.hingegen, S.jedoch],
  },
  {
    id: 'nominalisation',
    title: 'Nominalisation',
    tagline: 'Verbs and adjectives as nouns',
    level: LEVEL,
    summary:
      'Formal texts turn verbs and adjectives into nouns: -ung (entscheiden → die Entscheidung), no suffix (steigen → der Anstieg), infinitive (lesen → das Lesen), -keit / -heit (möglich → die Möglichkeit). The subject becomes a genitive or a von-phrase: die Entscheidung des Chefs.',
    sections: [
      section(
        'what',
        'What and why',
        p(
          'In **Nominalstil** (nominal style) the information sits in nouns instead of verbs. This makes texts shorter and more formal: news, official letters, academic writing. You need it to read these texts and to write them.',
        ),
        examples(
          ['Die Preise steigen. → der Anstieg der Preise', 'Prices rise. → the rise in prices'],
          ['Man entscheidet. → die Entscheidung', 'someone decides → the decision'],
        ),
      ),
      section(
        'forms',
        'How to build the noun',
        table(
          'Typical patterns.',
          ['Pattern', 'Gender', 'Example'],
          [
            ['verb + -ung', 'die', 'entscheiden → die Entscheidung · ernähren → die Ernährung'],
            ['adjective + -keit', 'die', 'möglich → die Möglichkeit · sicher → die Sicherheit'],
            ['adjective + -heit', 'die', 'schön → die Schönheit · gesund → die Gesundheit'],
            [
              'verb stem, no suffix',
              'varies: learn it',
              'steigen → der Anstieg · verzichten → der Verzicht',
            ],
            ['infinitive', 'das', 'lesen → das Lesen · essen → das Essen'],
            ['adjective + -e', 'die', 'lang → die Länge · hoch → die Höhe'],
          ],
        ),
        p(
          'Nouns in **-ung**, **-keit** and **-heit** are always **feminine**. For the others learn the article with the word.',
        ),
      ),
      section(
        'clauses',
        'From clause to noun phrase',
        p(
          'The **subject** and the **object** of the verb become **genitive attributes** (or von + dative). Conjunctions become **prepositions**, and the verb becomes a noun.',
        ),
        table(
          'Same meaning as a clause and as a noun phrase.',
          ['Clause', 'Noun phrase'],
          [
            ['Dass die Preise gestiegen sind, …', 'Der Anstieg der Preise …'],
            ['Weil die Preise gestiegen sind, …', 'Wegen des Anstiegs der Preise …'],
            ['Wenn man isst, …', 'Beim Essen …'],
            ['Nachdem er angekommen war, …', 'Nach seiner Ankunft …'],
            ['Bevor die Wahl stattfindet, …', 'Vor der Wahl …'],
            ['Obwohl es teuer ist, …', 'Trotz der hohen Kosten …'],
            ['Indem man spart, …', 'Durch Sparen …'],
          ],
        ),
        tip(
          'Genitive',
          'The genitive follows the noun: die Entscheidung des Chefs, der Anstieg der Preise. Masculine and neuter nouns add -s or -es: des Anstiegs, des Beginns.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ das Möglichkeit  ✓ die Möglichkeit',
          '✗ die Entscheidung von dem Chef  ✓ die Entscheidung des Chefs',
          '✗ wegen die Preise  ✓ wegen der Preise',
        ),
      ),
    ],
    related: ['noun-verb-phrases', 'causal-expressions', 'plurals'],
    sources: [S.nominalisation],
  },
];
