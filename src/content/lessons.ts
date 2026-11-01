import type { TagId } from './tags';

/**
 * Mini grammar lessons shown after a wrong answer (never after a vocabulary/meaning mistake).
 * One lesson per grammar tag: the id is the tag id, so an activity tagged `accusative` gets the
 * accusative lesson without any extra authoring. Items can point at a lesson explicitly with
 * `lesson: '…'` when their activity mixes several grammar points.
 */
export interface Lesson {
  title: string;
  /** one to three short sentences, in English */
  rule: string;
  /** two or three German examples; "→" separates a form from its use */
  examples: readonly string[];
}

export const LESSONS = {
  'word-order': {
    title: 'Verb in position 2',
    rule: 'In a German statement the conjugated verb is always the second element. If something else (time, place, an object) comes first, the subject moves behind the verb. Other verb parts (infinitive, participle, separable prefix) go to the very end.',
    examples: [
      'Ich gehe heute ins Kino.',
      'Heute gehe ich ins Kino.',
      'Am Montag muss ich früh aufstehen.',
    ],
  },
  questions: {
    title: 'Asking questions',
    rule: 'W-questions start with the question word and the verb comes second: Wo wohnst du? Yes/no questions start with the verb: Wohnst du in Berlin?',
    examples: ['Woher kommst du?', 'Was machst du am Wochenende?', 'Hast du Zeit?'],
  },
  pronouns: {
    title: 'Personal pronouns',
    rule: 'The pronoun decides the verb ending. du is for one person you know well, ihr for several, Sie (capital S) is the polite form for one or more people and takes the same verb form as sie (they).',
    examples: ['ich bin · du bist · er/sie/es ist', 'wir sind · ihr seid · sie/Sie sind'],
  },
  'verb-conjugation': {
    title: 'Present tense endings',
    rule: 'Take the stem (infinitive minus -en) and add the ending for the person: -e, -st, -t, -en, -t, -en. Stems ending in -t/-d add an e (du arbeitest), and many strong verbs change their vowel in the du and er/sie/es forms (du fährst, er liest).',
    examples: [
      'ich spiele · du spielst · er spielt',
      'wir spielen · ihr spielt · sie spielen',
      'fahren → du fährst, er fährt',
    ],
  },
  articles: {
    title: 'der, die, das',
    rule: 'Every noun has a gender: der (masculine), die (feminine) or das (neuter); the plural is always die. Learn each noun with its article. Some endings help: -ung, -heit, -keit, -schaft, -ion → die; -chen, -lein, -um → das; -ling, -ismus → der.',
    examples: ['die Zeitung, die Freiheit, die Station', 'das Mädchen, das Museum', 'der Frühling'],
  },
  negation: {
    title: 'nicht or kein?',
    rule: 'kein negates a noun that would have ein or no article (kein Auto, keine Zeit). nicht negates everything else: verbs, adjectives, names and nouns with der/die/das. kein takes the same endings as ein.',
    examples: [
      'Ich habe ein Auto. → Ich habe kein Auto.',
      'Ich habe Zeit. → Ich habe keine Zeit.',
      'Das ist nicht mein Auto. · Ich komme nicht.',
    ],
  },
  plurals: {
    title: 'Plural forms',
    rule: 'German has several plural patterns, so learn the plural with the noun. Common ones: feminine nouns in -e/-ung add -(e)n, many masculine nouns add -e (often with umlaut), neuter one-syllable nouns often add -er with umlaut, foreign words add -s. The plural article is always die.',
    examples: [
      'die Lampe → die Lampen · die Zeitung → die Zeitungen',
      'der Stuhl → die Stühle · das Buch → die Bücher',
      'das Auto → die Autos',
    ],
  },
  possessives: {
    title: 'mein, dein, sein, ihr …',
    rule: 'The stem shows the owner (mein = my, sein = his, ihr = her/their, Ihr = your, polite). The ending agrees with the thing owned and works like ein/kein: -e for feminine and plural, -en for masculine accusative.',
    examples: [
      'mein Bruder · meine Schwester · meine Eltern',
      'Ich besuche meinen Bruder.',
      'Das ist ihr Hund. (her / their dog)',
    ],
  },
  'prepositions-of-time': {
    title: 'Time words: um, am, im, seit, vor …',
    rule: 'um for clock times, am for days and parts of the day, im for months and seasons. seit = since/for (still going on), vor = ago or before, ab = from (a start in the future), bis = until, nach = after. seit, vor, nach and ab take the dative.',
    examples: [
      'um 8 Uhr · am Freitag · im Juli',
      'Ich wohne seit einem Jahr hier. · Ich bin vor einem Jahr gekommen.',
      'Ab Montag arbeite ich bis 17 Uhr.',
    ],
  },
  'separable-verbs': {
    title: 'Separable verbs',
    rule: 'In a main clause and in the imperative the prefix splits off and goes to the end: aufstehen → Ich stehe um 7 Uhr auf. With a modal verb or in a weil-clause the verb stays together at the end. In the Perfekt, ge- goes between prefix and verb: eingekauft, angerufen.',
    examples: [
      'Der Zug fährt um 9 Uhr ab.',
      'Ich muss früh aufstehen.',
      'Perfekt: Ich habe eingekauft.',
    ],
  },
  accusative: {
    title: 'Accusative (Wen? Was?)',
    rule: 'The direct object is in the accusative. Only the masculine changes: der → den, ein → einen, kein → keinen. Feminine, neuter and plural look like the nominative.',
    examples: [
      'Der Tisch ist neu. → Ich kaufe den Tisch.',
      'Ich habe einen Bruder.',
      'Ich nehme die Suppe und das Wasser.',
    ],
  },
  'modal-verbs': {
    title: 'Modal verbs',
    rule: 'The modal verb is conjugated in position 2 and the main verb goes to the end in the infinitive. ich and er/sie/es have the same form, with no ending: ich kann, er kann.',
    examples: [
      'Ich kann heute nicht kommen.',
      'Er muss morgen arbeiten.',
      'ich will · du willst · er will',
    ],
  },
  dative: {
    title: 'Dative (Wem?)',
    rule: 'The dative shows the receiver and follows dative prepositions. Articles: der/das → dem, die → der, plural → den (+ -n on the noun). ein → einem/einer.',
    examples: ['Ich gebe dem Mann das Buch.', 'Sie hilft der Frau.', 'mit den Kindern'],
  },
  'object-pronouns': {
    title: 'mich or mir?',
    rule: 'Accusative pronouns are direct objects: mich, dich, ihn, sie, es, uns, euch, Sie. Dative pronouns are receivers and follow verbs like helfen, gefallen, gehören, danken: mir, dir, ihm, ihr, ihm, uns, euch, Ihnen.',
    examples: ['Ich sehe ihn. (accusative)', 'Ich helfe ihm. (dative)', 'Das Kleid gefällt mir.'],
  },
  'two-way-prepositions': {
    title: 'Wo? or Wohin?',
    rule: 'in, an, auf, über, unter, vor, hinter, neben, zwischen take the dative for a location (Wo?) and the accusative for a movement to a place (Wohin?). in dem → im, in das → ins, an dem → am.',
    examples: [
      'Wo? Ich bin im Kino. (dative)',
      'Wohin? Ich gehe ins Kino. (accusative)',
      'Das Bild hängt an der Wand. · Ich hänge das Bild an die Wand.',
    ],
  },
  imperative: {
    title: 'The imperative',
    rule: 'du-form: stem without -st and without du (Komm! Nimm!). ihr-form: like the present tense without ihr (Kommt!). Sie-form: verb first, then Sie (Kommen Sie!). Vowel change a→ä does not happen in the du-imperative: Fahr!',
    examples: ['du kommst → Komm!', 'ihr kommt → Kommt!', 'Sie kommen → Kommen Sie bitte!'],
  },
  'past-tense': {
    title: 'Präteritum',
    rule: 'Regular verbs add -te (ich wohnte), strong verbs change their vowel (fahren → fuhr, lesen → las). ich and er/sie/es have the same form; the other persons add -st, -en, -t, -en. In speaking, sein, haben and the modal verbs use it most.',
    examples: [
      'ich war · du warst · wir waren',
      'ich wohnte · wir wohnten',
      'er fuhr · wir fuhren · sie las',
    ],
  },
  perfekt: {
    title: 'The Perfekt',
    rule: 'haben or sein in position 2 + the participle at the end. Verbs of movement or change (gehen, fahren, kommen, aufstehen) and sein/bleiben use sein. Regular participles: ge-…-t (gespielt), strong ones: ge-…-en (gefahren). Verbs in -ieren and with be-/ver-/er- have no ge-.',
    examples: [
      'Ich habe Fußball gespielt.',
      'Wir sind nach Berlin gefahren.',
      'Er hat telefoniert. · Ich habe das Buch bezahlt.',
    ],
  },
  comparison: {
    title: 'Comparing: -er als, am -sten',
    rule: 'Comparative: adjective + -er + als (schneller als). Superlative: am + adjective + -sten (am schnellsten). Equal: so … wie. Short adjectives often add an umlaut (alt → älter); gut, viel, gern are irregular.',
    examples: [
      'Der Zug ist schneller als der Bus.',
      'Er ist so groß wie ich.',
      'gut → besser → am besten · gern → lieber → am liebsten',
    ],
  },
  'ordinal-numbers': {
    title: 'Ordinal numbers and dates',
    rule: 'Up to 19 add -te (der zweite), from 20 add -ste (der zwanzigste). Exceptions: erste, dritte, siebte, achte. For dates use am + -ten: am ersten Mai.',
    examples: [
      'der erste, der dritte, der siebte',
      'Heute ist der zwanzigste März.',
      'am 3. (dritten) Juni',
    ],
  },
  conjunctions: {
    title: 'und, oder, aber, denn, sondern',
    rule: 'These conjunctions join two main clauses and do not change the word order: the verb stays in position 2 after them. denn gives a reason (like weil, but without the verb at the end); sondern corrects a negative (nicht …, sondern …).',
    examples: [
      'Ich bleibe zu Hause, denn ich bin krank.',
      'Ich komme mit, aber ich habe wenig Zeit.',
      'Ich trinke nicht Tee, sondern Kaffee.',
    ],
  },
  'polite-forms': {
    title: 'Polite requests',
    rule: 'Use Konjunktiv II forms to sound polite: Könnten Sie …? Würden Sie …? Ich hätte gern … Ich möchte … The main verb goes to the end.',
    examples: [
      'Könnten Sie mir bitte helfen?',
      'Würden Sie das Fenster öffnen?',
      'Ich hätte gern einen Kaffee.',
    ],
  },
  'reflexive-verbs': {
    title: 'Reflexive verbs',
    rule: 'The reflexive pronoun refers back to the subject: mich, dich, sich, uns, euch, sich. If the sentence already has an accusative object, the pronoun is dative: mir, dir (Ich wasche mir die Hände).',
    examples: [
      'Ich freue mich. · Er freut sich.',
      'Wir treffen uns um 8.',
      'Ich putze mir die Zähne.',
    ],
  },
  genitive: {
    title: 'Possession with names',
    rule: 'Add -s to a name without an apostrophe: Annas Auto. In spoken German, von + dative is common: das Auto von Anna. With articles the genitive uses des/der: das Auto des Vaters.',
    examples: ['Peters Schwester', 'die Wohnung von meiner Mutter', 'das Ende des Films'],
  },
  'indefinite-pronouns': {
    title: 'man, jemand, einer, welche',
    rule: 'man (one/people) takes the er/sie/es verb form. jemand/niemand are people, etwas/nichts are things. To replace a noun use einer/eins/eine (accusative masculine: einen), keiner/keins/keine, and welche for plurals without an article.',
    examples: [
      'Hier darf man nicht rauchen.',
      'Brauchen Sie einen Termin? – Ja, ich brauche einen.',
      'Hast du Fotos? – Ja, ich habe welche. · Nein, ich habe keine.',
    ],
  },
  'subordinate-clauses': {
    title: 'Verb at the end',
    rule: 'After weil, wenn, dass, ob, obwohl and other subordinating words the conjugated verb goes to the end of the clause. If the sentence starts with this clause, the main clause starts with its verb.',
    examples: [
      'Ich komme nicht, weil ich krank bin.',
      'Wenn es regnet, bleibe ich zu Hause.',
      'Ich glaube, dass er morgen kommt.',
    ],
  },
  connectors: {
    title: 'deshalb, trotzdem, dann',
    rule: 'These words take position 1 in their clause, so the verb comes right after them and the subject follows: deshalb gehe ich. They are not like weil – the verb does not go to the end.',
    examples: [
      'Ich bin müde, deshalb gehe ich ins Bett.',
      'Es regnet, trotzdem gehen wir spazieren.',
      'Zuerst esse ich, dann lerne ich.',
    ],
  },
  superlative: {
    title: 'The superlative',
    rule: 'After a verb use am + -sten (Er läuft am schnellsten). Before a noun use the article + -ste/-sten with an adjective ending (der schnellste Läufer). Adjectives in -t, -d, -s, -z add -esten (am ältesten).',
    examples: ['Sie singt am schönsten.', 'Das ist der höchste Berg.', 'gut → am besten'],
  },
  'dative-prepositions': {
    title: 'mit, von, zu, seit …',
    rule: 'aus, bei, mit, nach, seit, von, zu (and gegenüber) always take the dative. zu dem → zum, zu der → zur, von dem → vom, bei dem → beim.',
    examples: [
      'Ich fahre mit dem Bus.',
      'Ich gehe zur Ärztin. · Ich gehe zum Bahnhof.',
      'seit einem Jahr',
    ],
  },
  'konjunktiv-2': {
    title: 'Konjunktiv II',
    rule: 'Use it for wishes, unreal situations and advice. sein, haben and modal verbs have their own forms (wäre, hätte, könnte, müsste, sollte); most other verbs use würde + infinitive at the end.',
    examples: [
      'Wenn ich Zeit hätte, würde ich reisen.',
      'Ich wäre gern am Meer.',
      'An deiner Stelle würde ich mehr schlafen.',
    ],
  },
  'relative-clauses': {
    title: 'Relative clauses',
    rule: 'The relative pronoun takes its gender and number from the noun it describes and its case from its role in the relative clause. The forms are like der/die/das, except dative plural denen. The verb goes to the end.',
    examples: [
      'Der Mann, der dort steht, ist mein Chef.',
      'Der Film, den ich gesehen habe, war gut.',
      'Die Freunde, denen ich helfe, wohnen hier.',
    ],
  },
  'indirect-questions': {
    title: 'Indirect questions',
    rule: 'Inside a sentence (Können Sie mir sagen, …? Ich weiß nicht, …) a W-question keeps its question word and a yes/no question uses ob. In both cases the verb goes to the end.',
    examples: [
      'Wann fährt der Zug? → Wissen Sie, wann der Zug fährt?',
      'Kommt er? → Ich weiß nicht, ob er kommt.',
    ],
  },
  'temporal-clauses': {
    title: 'als, wenn, bis, seitdem',
    rule: 'als is for one event in the past, wenn for repeated events or the present/future. bis = until, seitdem = since then. All of them send the verb to the end.',
    examples: [
      'Als ich klein war, wohnten wir in Köln.',
      'Immer wenn es regnet, lese ich.',
      'Warte, bis ich komme.',
    ],
  },
  'purpose-clauses': {
    title: 'damit or um … zu?',
    rule: 'Use um … zu + infinitive when both parts have the same subject. Use damit with a conjugated verb at the end when the subjects are different.',
    examples: [
      'Ich lerne Deutsch, um in Berlin zu arbeiten.',
      'Ich erkläre es langsam, damit du es verstehst.',
    ],
  },
  passive: {
    title: 'The passive',
    rule: 'werden (conjugated, position 2) + participle at the end. The focus is on what happens, not on who does it; the person can be added with von + dative.',
    examples: [
      'Das Paket wird morgen geliefert.',
      'Die Briefe werden sortiert.',
      'Präteritum: Das Haus wurde 1900 gebaut.',
    ],
  },
  'verbs-with-prepositions': {
    title: 'Verbs with fixed prepositions',
    rule: 'Many verbs need a fixed preposition with a fixed case – learn them together: warten auf + Akk., sich freuen auf/über + Akk., träumen von + Dat., sich interessieren für + Akk. Questions and pointing words use wo(r)-/da(r)- + preposition: Worauf? Darauf.',
    examples: [
      'Ich warte auf den Bus.',
      'Sie interessiert sich für Kunst.',
      'Wovon träumst du? – Davon, …',
    ],
  },
  'adjective-endings': {
    title: 'Adjective endings',
    rule: 'After der/die/das the ending is -e in the nominative singular (and feminine/neuter accusative), otherwise -en. After ein/kein/mein the adjective shows the gender where the article does not: -er (m), -es (n). With no article the adjective takes the article ending itself.',
    examples: [
      'der neue Mantel · den neuen Mantel · mit dem neuen Mantel',
      'ein neuer Mantel · ein neues Hemd · eine neue Jacke',
      'heißer Kaffee · mit kaltem Wasser',
    ],
  },
  'n-declension': {
    title: 'n-Deklination',
    rule: 'Some masculine nouns (many people and animals ending in -e, and words like Herr, Mensch, Student, Kollege) add -n or -en in every case except the nominative singular.',
    examples: [
      'der Kollege → Ich frage den Kollegen.',
      'der Herr → Sehr geehrter Herr … · mit Herrn Weber',
      'der Student → dem Studenten',
    ],
  },
  'word-formation': {
    title: 'Building words',
    rule: 'In a compound noun the last word decides the article and the meaning: die Tür + der Schlüssel → der Türschlüssel. Suffixes also fix the gender: -ung, -heit, -keit → die; -chen → das; -er (person) → der.',
    examples: ['das Haus + die Tür → die Haustür', 'wohnen → die Wohnung', 'frei → die Freiheit'],
  },
  lassen: {
    title: 'lassen',
    rule: 'lassen + infinitive means having something done by someone else (or allowing it). lassen is conjugated in position 2 (du lässt, er lässt), the infinitive goes to the end.',
    examples: [
      'Ich lasse mein Auto reparieren.',
      'Er lässt sich die Haare schneiden.',
      'Lass mich das machen!',
    ],
  },
  'route-prepositions': {
    title: 'durch, entlang, vorbei',
    rule: 'durch + accusative = through, den Fluss entlang (accusative, after the noun) = along, an … vorbei + dative = past. They describe a route, not a destination.',
    examples: [
      'Wir gehen durch den Park.',
      'Fahren Sie die Straße entlang.',
      'Gehen Sie an der Kirche vorbei.',
    ],
  },
  plusquamperfekt: {
    title: 'Plusquamperfekt',
    rule: 'Use it for something that happened before another past event. Form: hatte/war (simple past of haben/sein) + participle at the end. After nachdem the clause is in the Plusquamperfekt and the main clause in the Präteritum or Perfekt.',
    examples: [
      'Ich hatte schon gegessen. · Sie war schon gegangen.',
      'Nachdem er gefrühstückt hatte, ging er zur Arbeit.',
    ],
  },
  'concessive-clauses': {
    title: 'obwohl and trotzdem',
    rule: 'Both express a contrast you would not expect. obwohl starts a subordinate clause, so the verb goes to the end. trotzdem is an adverb that links two main clauses: it takes position 1 and the verb follows directly.',
    examples: ['Obwohl es regnet, gehe ich spazieren.', 'Es regnet. Trotzdem gehe ich spazieren.'],
  },
  'genitive-prepositions': {
    title: 'wegen, trotz, während',
    rule: 'These prepositions take the genitive: des/eines + noun with -s or -es for masculine and neuter, der/einer for feminine and plural. In everyday speech you often hear the dative, but in writing use the genitive.',
    examples: ['wegen des Wetters · trotz der Kälte', 'während der Arbeit · innerhalb einer Woche'],
  },
  'infinitive-zu': {
    title: 'Infinitive with zu',
    rule: 'After many verbs and expressions (versuchen, vergessen, anfangen, Lust haben, es ist wichtig) the second verb is an infinitive with zu at the end of the clause. With separable verbs zu goes between prefix and verb. statt … zu and ohne … zu work the same way.',
    examples: [
      'Ich versuche, mehr Sport zu machen.',
      'Vergiss nicht, die Tür abzuschließen.',
      'Er ging, ohne Tschüss zu sagen.',
    ],
  },
  'two-part-conjunctions': {
    title: 'Two-part conjunctions',
    rule: 'Some conjunctions come in pairs: nicht nur … sondern auch (not only … but also), sowohl … als auch (both … and), entweder … oder (either … or), weder … noch (neither … nor), zwar … aber (admittedly … but).',
    examples: [
      'Sie spricht nicht nur Deutsch, sondern auch Spanisch.',
      'Wir fahren entweder mit dem Zug oder mit dem Bus.',
      'Ich habe weder Zeit noch Geld.',
    ],
  },
  'adjectives-as-nouns': {
    title: 'Adjectives as nouns',
    rule: 'An adjective can become a noun for a person: it is written with a capital letter but keeps its adjective ending, which depends on the article and the case, just like before a noun.',
    examples: [
      'der Bekannte · ein Bekannter · eine Bekannte',
      'die Erwachsenen · mit einem Verwandten',
    ],
  },
  'futur-1': {
    title: 'Futur I',
    rule: 'werden (conjugated, position 2) + infinitive at the end. It is used for plans, promises and predictions; for simple plans Germans usually prefer the present tense with a time word.',
    examples: [
      'Ich werde nächstes Jahr in Berlin studieren.',
      'Es wird morgen regnen.',
      'Wirst du mir helfen?',
    ],
  },
  'konjunktiv-2-past': {
    title: 'Konjunktiv II of the past',
    rule: 'For unreal situations and regrets in the past: hätte or wäre + participle at the end. Use wäre with verbs that form the Perfekt with sein. With a modal verb: hätte + infinitive + modal infinitive.',
    examples: [
      'Ich hätte früher aufstehen sollen.',
      'Wenn ich das gewusst hätte, wäre ich gekommen.',
    ],
  },
  'formal-connectors': {
    title: 'andernfalls, folglich, hingegen',
    rule: 'These adverbs link two main clauses and take position 1, so the verb follows directly: andernfalls (otherwise), folglich / somit (consequently), dennoch (nevertheless), hingegen (whereas). außer wenn and es sei denn introduce an exception.',
    examples: [
      'Wir müssen sparen; andernfalls reicht das Geld nicht.',
      'Der Zug fällt aus; folglich kommen wir zu spät.',
      'Wir fahren, außer wenn es schneit.',
    ],
  },
  'subjective-modals': {
    title: 'Subjective modal verbs',
    rule: 'Modal verbs can also report or guess. sollen = people say, wollen = he/she claims, müssen = I am sure, dürfte = probably, könnte = perhaps. For the past the infinitive Perfekt follows: gewesen sein, gemacht haben.',
    examples: [
      'Der Minister soll zurückgetreten sein. (people say)',
      'Er will nichts gewusst haben. (he claims)',
      'Das muss ein Irrtum sein. (I am sure)',
    ],
  },
  'concessive-restrictive': {
    title: 'wenngleich, es sei denn',
    rule: 'obgleich / obschon / wenngleich work like obwohl (verb at the end). Restrictions: es sei denn (unless, verb in position 2), außer wenn and nur dass (verb at the end). so sehr … auch means no matter how much.',
    examples: [
      'Obgleich er müde war, arbeitete er weiter.',
      'Er konnte sie nicht überzeugen, so sehr er sich auch bemühte.',
      'Wir kommen, es sei denn, es schneit.',
    ],
  },
  'es-functions': {
    title: 'The many jobs of es',
    rule: 'es can be required (Es regnet. Es geht um … Es gibt …), a pointer to a clause that follows (Ich bereue es, dass …), or an optional filler in position 1 (Es kamen viele Gäste). The filler disappears when another element takes position 1.',
    examples: [
      'Es geht um die Zukunft.',
      'Ich bereue es, dass ich nichts gesagt habe.',
      'Es kamen viele Gäste. → Heute kamen viele Gäste.',
    ],
  },
  intensifiers: {
    title: 'Graduating adjectives',
    rule: 'Adverbs set the strength of an adjective: ziemlich, recht, ganz < sehr, äußerst, höchst, überaus < zu (too much). They stand right before the adjective and are never declined; only the adjective takes the ending.',
    examples: [
      'ein äußerst netter Kollege',
      'Das ist ziemlich teuer.',
      'Die Aufgabe ist höchst anspruchsvoll.',
    ],
  },
  'unreal-consecutive': {
    title: 'so … dass and zu … als dass',
    rule: 'so … dass reports a real result. zu … als dass + Konjunktiv II says the result is impossible (too … to). sodass introduces a plain result. The clause after dass / sodass / als dass has the verb at the end.',
    examples: [
      'Es war so heiß, dass alle ins Wasser gingen.',
      'Er ist zu klug, als dass er darauf hereinfiele.',
      'Es regnete stark, sodass die Straße gesperrt wurde.',
    ],
  },
  'participial-attributes': {
    title: 'Participles before nouns',
    rule: 'Partizip I (infinitive + d) is active and happening now: die steigenden Preise. Partizip II is completed or passive: die gestiegenen Preise, das gelöste Problem. zu + Partizip I means must be done: die zu zahlende Rechnung. All take adjective endings.',
    examples: ['die wachsende Bedeutung', 'der geprüfte Antrag', 'die zu zahlende Rechnung'],
  },
  'prefix-verbs': {
    title: 'Separable or inseparable?',
    rule: 'Stressed prefixes (an-, auf-, aus-, ein-, mit-, vor-) split off: Er gibt auf. Unstressed prefixes (be-, ent-, er-, ver-, zer-, miss-) never split and the participle has no ge-: verzichtet. über-, um-, unter-, durch- can be both and change the meaning.',
    examples: [
      'Er gibt nicht auf. · Er verzichtet auf alles.',
      'Sie übersetzt den Text. · Der Fährmann setzt uns über.',
      'aufgegeben · verzichtet (no ge-)',
    ],
  },
  'nominal-style': {
    title: 'Nominal style',
    rule: 'Formal and written German packs a clause into a noun phrase: Weil es regnet → wegen des Regens; Als er ankam → bei seiner Ankunft; Indem man liest → durch Lesen. Nouns in -ung, -heit, -keit, -ion do the work, and the preposition shows the logic.',
    examples: [
      'Als er ankam, … → Bei seiner Ankunft …',
      'Weil es regnet, … → Wegen des Regens …',
      'Indem man liest, lernt man. → Durch Lesen lernt man.',
    ],
  },
  'modal-alternatives': {
    title: 'sein … zu and sich lassen',
    rule: 'Formal German often replaces a modal verb: sein + zu + infinitive (must / can be done), sich lassen + infinitive (can be done), haben + zu + infinitive (must do). These structures often express the passive with a modal verb.',
    examples: [
      'Der Antrag ist bis Freitag einzureichen. (must be submitted)',
      'Das Problem lässt sich lösen. (can be solved)',
      'Die Mitglieder haben den Beitrag zu zahlen.',
    ],
  },
  // ---- B2.2 ----
  'noun-prepositions': {
    title: 'Nouns with fixed prepositions',
    rule: 'Many nouns take a fixed preposition that has to be learnt with the noun and its case: die Angst vor + Dat., die Hoffnung auf + Akk., das Interesse an + Dat., der Streit um + Akk. In questions the preposition joins wo(r)-: Worauf hoffst du?',
    examples: [
      'die Angst vor dem Versagen',
      'die Hoffnung auf einen Neuanfang',
      'das Interesse an Kunst',
    ],
  },
  'comparative-clauses': {
    title: 'Comparing with als and wie',
    rule: 'Equal: so / genauso … wie. Unequal: comparative + als. Both can introduce a whole clause with the verb at the end, often in the Plusquamperfekt: schöner, als ich gedacht hatte. anders als and ganz anders, als … compare unlike things; je nachdem, ob … says it depends.',
    examples: [
      'Es war genauso teuer, wie ich erwartet hatte.',
      'Das Studium war schwerer, als ich gedacht hatte.',
      'Sie ist ganz anders, als man sagt.',
    ],
  },
  'modal-hearsay': {
    title: 'sollen and wollen: reporting claims',
    rule: 'sollen = “it is said that” (you heard it from others), wollen = “claims that” (the subject says it of themselves). For things in the past use the infinitive Perfekt: haben / sein at the end after the participle.',
    examples: [
      'Der Koch soll sehr berühmt sein.',
      'Er will das nie gesagt haben.',
      'Die Suppe soll sehr gesund sein.',
    ],
  },
  'consecutive-connectors': {
    title: 'Expressing consequences',
    rule: 'sodass / so … dass start a clause with the verb at the end. In a new main clause folglich, infolgedessen, somit and daher are followed by the verb. zu … , als dass + Konjunktiv II means “too … to”: Es ist zu spät, als dass wir noch helfen könnten.',
    examples: [
      'Er hatte kaum Zeit, folglich musste er absagen.',
      'Es regnete so stark, dass das Fest ausfiel.',
      'Die Miete ist zu hoch, als dass ich sie zahlen könnte.',
    ],
  },
  'irgend-pronouns': {
    title: 'irgend-, manche, sämtliche',
    rule: 'irgend- makes a word indefinite: irgendwer, irgendetwas, irgendwo, irgendein. For quantities use einige, manche, mehrere, etliche, sämtliche (all) or jeglich-; after them adjectives take plural endings: manche junge Leute, einige gute Ideen.',
    examples: [
      'Hat irgendjemand meinen Schlüssel gesehen?',
      'Manche Menschen trainieren täglich.',
      'Sämtliche Kosten werden erstattet.',
    ],
  },
  'modal-clauses': {
    title: 'How? By what means?',
    rule: 'indem (by …ing) and dadurch, dass give the means in a clause with the verb at the end. Short forms: durch + accusative, mithilfe von + dative, mittels + genitive. ohne … zu / ohne dass name what is missing.',
    examples: [
      'Man bleibt fit, indem man regelmäßig trainiert.',
      'Er verbesserte sich dadurch, dass er jeden Tag übte.',
      'Mithilfe einer App zählt sie ihre Schritte.',
    ],
  },
  'extended-participle': {
    title: 'The extended participle',
    rule: 'Before a noun a participle can carry extra information: article + information + participle with adjective ending + noun. Partizip I (-d) = at the same time (die lachenden Kinder), Partizip II = finished or passive (das in Köln gegründete Unternehmen). Check by turning it into a relative clause.',
    examples: [
      'das vom Kunden bestellte Produkt',
      'die an der Uni studierenden Frauen',
      'ein seit Jahren geplantes Projekt',
    ],
  },
  'adversative-connectors': {
    title: 'Expressing contrast',
    rule: 'während and wohingegen start a clause with the verb at the end. dagegen, hingegen, jedoch and demgegenüber begin a main clause, so the verb follows them directly. im Gegensatz zu takes the dative; einerseits … andererseits weighs two sides.',
    examples: [
      'Er mag Berge, wohingegen sie das Meer liebt.',
      'Sie lebt in der Stadt, er hingegen wohnt auf dem Land.',
      'Im Gegensatz zu Wien ist Graz ruhiger.',
    ],
  },
  'concessive-advanced': {
    title: 'Despite that: concessive connectors',
    rule: 'obwohl, obgleich, wenngleich and auch wenn start clauses with the verb at the end. dennoch and trotzdem open a main clause: verb second. zwar … aber / jedoch concede a point before the counter-argument. trotz and ungeachtet take the genitive.',
    examples: [
      'Wenngleich es teuer ist, kaufe ich es.',
      'Es regnete, dennoch gingen wir spazieren.',
      'Er ist zwar jung, aber sehr erfahren.',
    ],
  },
  'perfekt-double-infinitive': {
    title: 'Perfekt with a double infinitive',
    rule: 'With modal verbs and with hören, sehen, lassen + infinitive the Perfekt uses the infinitive instead of the participle: Ich habe ihn kommen hören. In a subordinate clause haben stands before the two infinitives: …, weil ich ihn habe kommen hören.',
    examples: [
      'Wir haben das Auto reparieren lassen.',
      'Ich habe sie singen hören.',
      'Er sagte, dass er hat gehen müssen.',
    ],
  },
  'adjective-prepositions': {
    title: 'Adjectives with fixed prepositions',
    rule: 'Many adjectives need a fixed preposition and case: stolz auf + Akk., zufrieden mit + Dat., abhängig von + Dat., verantwortlich für + Akk., interessiert an + Dat., bereit zu + Dat. Questions use wo(r)-: Worauf bist du stolz?',
    examples: [
      'Sie ist stolz auf ihre Tochter.',
      'Wir sind mit dem Service zufrieden.',
      'Er ist von seinen Eltern abhängig.',
    ],
  },
  'modal-assumption': {
    title: 'Assumptions with modal verbs',
    rule: 'Present: muss (sure), dürfte (probably), könnte (maybe) + infinitive. Past: modal + infinitive Perfekt: Er muss es vergessen haben. kann nicht … sein means it is impossible. Add wohl or vielleicht for a weaker guess.',
    examples: [
      'Er muss krank sein.',
      'Sie dürfte schon abgereist sein.',
      'Das kann nicht stimmen.',
    ],
  },
  // ---- B1.2 ----
  'je-desto': {
    title: 'je … desto / umso',
    rule: 'je + comparative starts a subordinate clause (verb at the end). desto or umso + comparative starts the main clause, and its verb comes right after the comparative word group.',
    examples: [
      'Je mehr ich arbeite, desto müder bin ich.',
      'Je früher wir anfangen, umso schneller sind wir fertig.',
    ],
  },
  'als-ob': {
    title: 'als ob + Konjunktiv II',
    rule: 'als ob (as if) compares with something that is not true. It starts a subordinate clause with the verb at the end, usually in the Konjunktiv II (wäre, hätte, würde + infinitive, or hätte / wäre + participle for the past).',
    examples: [
      'Er tut so, als ob er alles wüsste.',
      'Du siehst aus, als ob du nicht geschlafen hättest.',
    ],
  },
  'participles-as-adjectives': {
    title: 'Participles as adjectives',
    rule: 'Partizip I (infinitive + d: lachend) describes something happening at the same time: das lachende Kind. Partizip II (gekocht, repariert) describes something finished or passive: das reparierte Handy. Before a noun both take normal adjective endings.',
    examples: [
      'ein schlafender Hund · die steigenden Preise',
      'das gekochte Ei · ein gebrauchtes Fahrrad',
    ],
  },
  'modal-particles': {
    title: 'doch, ja, mal, denn, eigentlich',
    rule: 'Modal particles add a tone, not facts. denn makes questions friendlier, mal and doch soften requests, ja marks something both speakers know, doch also shows surprise or protest, eigentlich (actually) changes the topic or limits a statement. They come after the verb and are not stressed.',
    examples: ['Was machst du denn hier?', 'Komm doch mal vorbei!', 'Das weißt du ja.'],
  },
  'indem-ohne-dass': {
    title: 'indem, ohne dass, statt dass',
    rule: 'indem (by …ing) says how something is done. ohne dass / ohne … zu (without …ing) says what does not happen, statt dass / statt … zu (instead of) names the alternative. All start a clause with the verb at the end; use zu when both parts have the same subject.',
    examples: [
      'Man hilft, indem man Zeit spendet.',
      'Er ging, ohne dass jemand es merkte.',
      'Sie half, statt nur zu reden.',
    ],
  },
  'passive-past': {
    title: 'Passive in the past',
    rule: 'Präteritum passive: wurde + participle (Die Mauer wurde 1961 gebaut.). Perfekt passive: ist + participle + worden – worden, not geworden. The doer is added with von + dative, a cause with durch + accusative.',
    examples: [
      'Die Mauer wurde 1961 gebaut.',
      'Die Grenze ist 1989 geöffnet worden.',
      'Das Gesetz wurde vom Parlament beschlossen.',
    ],
  },
  'relative-wo-was': {
    title: 'Relative clauses with wo and was',
    rule: 'wo refers to a place (die Stadt, wo …) and can replace in dem / in der. was refers to alles, nichts, etwas, vieles, das (pronoun), to a superlative used as a noun (das Beste, was …) or to a whole clause. The verb goes to the end.',
    examples: [
      'Das ist die Stadt, wo ich geboren bin.',
      'Alles, was du brauchst, ist hier.',
      'Er kam pünktlich, was mich überraschte.',
    ],
  },
  'nicht-position': {
    title: 'Where does nicht go?',
    rule: 'To negate the whole sentence, nicht goes as far to the end as possible, but before the second verb part, before most adverbs of manner and place, and before prepositional objects. To negate one word, nicht stands right before it (often with sondern).',
    examples: [
      'Ich kenne den Künstler nicht.',
      'Das Stück hat mir nicht gefallen.',
      'Nicht das Bild, sondern der Rahmen ist alt.',
    ],
  },
  'consecutive-clauses': {
    title: 'sodass and so … dass',
    rule: 'sodass and so … dass give a consequence (so that, with the result that). Both start a subordinate clause with the verb at the end. With so … dass, so stands before an adjective in the main clause.',
    examples: [
      'Es regnete stark, sodass das Fest ausfiel.',
      'Der Vortrag war so lang, dass alle müde wurden.',
    ],
  },
  // ---- B2.1 ----
  'nouns-with-prepositions': {
    title: 'Nouns and adjectives with prepositions',
    rule: 'Many nouns and adjectives need a fixed preposition, and it decides the case: die Angst vor + dative, das Interesse an + dative, der Wunsch nach + dative, stolz auf + accusative. Learn the preposition with the word. Before a clause use da(r)-: Ich bin stolz darauf, dass …',
    examples: [
      'die Angst vor dem Alleinsein · das Interesse an Kunst',
      'Sie ist stolz auf ihre Tochter. · Er ist mit dem Ergebnis zufrieden.',
      'Ich bin stolz darauf, dass du es geschafft hast.',
    ],
  },
  'middle-field': {
    title: 'Order in the Mittelfeld',
    rule: 'Between the verb in position 2 and the final verb part, adverbials usually go time – reason – manner – place. Pronouns come before nouns; two pronouns: accusative before dative (Er schenkt ihn ihr); two nouns: dative before accusative.',
    examples: [
      'Ich fahre morgen wegen des Termins mit dem Zug nach Berlin.',
      'Er schenkt ihr einen Ring. · Er schenkt ihn ihr.',
    ],
  },
  'konjunktiv-1': {
    title: 'Reported speech: Konjunktiv I',
    rule: 'Reports and news repeat what somebody else said with Konjunktiv I: stem + -e, -est, -e, -en, -et, -en (sein: er sei). If the form looks like the present (sie haben, wir kommen), use Konjunktiv II instead (sie hätten, sie kämen). In speaking the indicative is common.',
    examples: [
      'Die Forscherin sagt, man solle weniger Fleisch essen.',
      'Er sagte, er sei müde und habe keine Zeit.',
      'Sie sagten, sie hätten viel zu tun.',
    ],
  },
  'causal-expressions': {
    title: 'Giving reasons: aufgrund, dank, da',
    rule: 'Besides weil and wegen: da starts a subordinate clause (often at the beginning); aufgrund, infolge and angesichts take the genitive; dank names a positive reason; aus and vor + noun without an article give emotional reasons (aus Angst, vor Müdigkeit). deshalb and daher start a main clause.',
    examples: [
      'Aufgrund des Lärms konnte ich nicht schlafen.',
      'Dank des Trainings fühle ich mich fitter.',
      'Da ich Rückenschmerzen habe, mache ich Yoga.',
    ],
  },
  assumptions: {
    title: 'Making assumptions',
    rule: 'To say what is probably true, use Futur I for the present (Er wird zu Hause sein) and Futur II for the past: werden + participle + haben/sein (Er wird den Zug verpasst haben). wohl, sicher and vermutlich often join in. müssen and dürfte also express a strong assumption.',
    examples: [
      'Sie wird schon schlafen.',
      'Er wird den Bus verpasst haben.',
      'Das muss ein Missverständnis gewesen sein.',
    ],
  },
  'es-dass': {
    title: 'es and dass-clauses',
    rule: 'es can point ahead to a dass-clause or infinitive clause: Ich finde es schade, dass du gehst. If the clause comes first, es disappears: Dass du gehst, finde ich schade. With a verb + preposition use darauf, darüber …: Ich warte darauf, dass … With the same subject use an infinitive with zu.',
    examples: [
      'Ich finde es schade, dass du schon gehst.',
      'Ich verlasse mich darauf, dass du kommst.',
      'Ich hoffe, dich bald zu sehen.',
    ],
  },
  'state-passive': {
    title: 'Zustandspassiv: sein + participle',
    rule: 'werden + participle describes a process (Die Tür wird geschlossen), sein + participle describes the result (Die Tür ist geschlossen). The agent is rarely named; if so, von names a person and durch a cause or means.',
    examples: [
      'Die Tür wird geschlossen. → Die Tür ist geschlossen.',
      'Der Bericht ist schon geschrieben.',
      'Das Dach wurde durch den Sturm beschädigt. Jetzt ist es beschädigt.',
    ],
  },
  'temporal-connectors': {
    title: 'solange, sobald, ehe, seitdem',
    rule: 'solange = for as long as, sobald = as soon as, ehe = bevor (before), seitdem = since then, sooft = whenever. All start a subordinate clause, so the conjugated verb goes to the end. If the clause comes first, the main clause continues with the verb in position 1.',
    examples: [
      'Solange es regnet, bleibe ich zu Hause.',
      'Sobald ich fertig bin, rufe ich dich an.',
      'Seitdem er in Berlin wohnt, geht er oft ins Museum.',
    ],
  },
  'noun-verb-phrases': {
    title: 'Noun-verb phrases',
    rule: 'Formal German often replaces a single verb with a fixed noun + verb phrase: eine Entscheidung treffen (entscheiden), zur Verfügung stellen, in Anspruch nehmen, in Frage kommen. The noun carries the meaning, the verb is fixed. The verb is conjugated as usual and goes to the end in subordinate clauses.',
    examples: [
      'Wir treffen morgen eine Entscheidung.',
      'Dieses Angebot kommt für mich nicht in Frage.',
      'Der Verein stellt Räume zur Verfügung.',
    ],
  },
  'relative-wer': {
    title: 'wer / wen / wem … clauses',
    rule: 'wer, wen, wem start a clause about people in general (“whoever”). The case of wer/wen/wem is decided by the verb inside that clause; the main clause often continues with der, den or dem. Verb at the end of the wer-clause.',
    examples: [
      'Wer zu spät kommt, muss draußen warten.',
      'Wem die Miete zu hoch ist, der sucht eine Genossenschaft.',
      'Wen die Nachbarn stören, der sollte mit ihnen reden.',
    ],
  },
  'conditional-b2': {
    title: 'falls, sofern and clauses without wenn',
    rule: 'falls and sofern (provided that) are formal alternatives to wenn. You can also drop wenn and put the verb first: Hätte ich mehr Zeit, würde ich reisen. Without a clause: bei + dative (bei Regen). andernfalls and ansonsten (otherwise) start a main clause with the verb next.',
    examples: [
      'Sofern kein Einspruch kommt, gilt der Vertrag.',
      'Hätten wir mehr Platz, würden wir umziehen.',
      'Zahlen Sie pünktlich. Andernfalls müssen Sie eine Gebühr zahlen.',
    ],
  },
  'text-cohesion': {
    title: 'Reference words that link sentences',
    rule: 'da(r)- + preposition (dadurch, dafür, damit, darüber, dabei) points back to something just mentioned. It must match the preposition of the verb: sich ärgern über → darüber. Use it to link sentences without repeating words.',
    examples: [
      'Der Akku ist leer. Dadurch schaltet sich das Gerät aus.',
      'Viele Jugendliche spielen online. Darüber streiten sie oft mit ihren Eltern.',
      'Sie hat einen Podcast gegründet. Damit erreicht sie viele Menschen.',
    ],
  },
  'passive-alternatives': {
    title: 'Passive alternatives',
    rule: 'Instead of werden + participle you can use sich lassen + infinitive (can be done), sein + zu + infinitive (can or must be done), adjectives in -bar (erklärbar) or man. The meaning is often “possible” or “necessary”, not just a plain passive.',
    examples: [
      'Das Problem lässt sich lösen.',
      'Die Aufgabe ist leicht zu lösen.',
      'Der Antrag ist bis Freitag abzugeben.',
    ],
  },
  'auch-wenn': {
    title: 'auch wenn, selbst wenn, zwar … aber',
    rule: 'auch wenn (even if) and selbst wenn (even if, a less likely case) start a subordinate clause with the verb at the end. zwar … aber/jedoch concedes in the first clause and contrasts in the second. dennoch and allerdings are adverbs with the verb next.',
    examples: [
      'Auch wenn es regnet, machen wir einen Ausflug.',
      'Selbst wenn ich Zeit hätte, käme ich nicht mit.',
      'Die Stadt ist zwar teuer, aber wunderschön.',
    ],
  },
  adversative: {
    title: 'Contrasts: während, dagegen, hingegen',
    rule: 'To contrast two facts, während (whereas) starts a subordinate clause. dagegen, hingegen and jedoch are adverbs: they take position 1, or come after the verb, and the verb stays in position 2. aber and doch stand in position 0.',
    examples: [
      'Während die einen online einkaufen, gehen die anderen lieber in den Laden.',
      'Die Preise steigen. Die Löhne bleiben dagegen gleich.',
      'Der Norden ist reich. Der Süden hat hingegen Probleme.',
    ],
  },
  nominalisation: {
    title: 'Nominalisation: verbs and adjectives as nouns',
    rule: 'Formal texts turn verbs and adjectives into nouns: -ung (entscheiden → die Entscheidung), no suffix (steigen → der Anstieg), infinitive (lesen → das Lesen), -keit/-heit (möglich → die Möglichkeit). The subject becomes a genitive or a von-phrase: die Entscheidung des Chefs.',
    examples: [
      'Man entscheidet → die Entscheidung',
      'Die Preise steigen. → der Anstieg der Preise',
      'Es ist möglich. → die Möglichkeit',
    ],
  },
  // ---- C1.2 ----
  'passive-substitutes': {
    title: 'Passive substitutes',
    rule: 'Instead of werden + participle, German uses: sein + zu + infinitive (Das ist zu beweisen = kann bewiesen werden), -bar / -lich adjectives (lösbar), sich lassen + infinitive (Das lässt sich lösen), bekommen + participle (Er bekam das Geld überwiesen) and the gerundive (die zu lösende Aufgabe).',
    examples: [
      'Der Fehler ist leicht zu beheben. = kann leicht behoben werden',
      'Das Problem lässt sich nicht lösen.',
      'Sie bekommt die Rechnung zugeschickt.',
    ],
  },
  'participial-clauses': {
    title: 'Participles and participial clauses',
    rule: 'Present participle (-d) = ongoing, past participle = finished or passive: die steigenden Preise, das gelöste Problem. An extended attribute puts everything between article and noun: die von der Bank gewährte Hilfe. A participial phrase can replace a clause: Am Ziel angekommen, ruhte er sich aus.',
    examples: [
      'die wachsende Stadt · das gelöste Rätsel',
      'der von Forschern entwickelte Test',
      'Müde vom Tag, ging sie früh ins Bett.',
    ],
  },
  'written-prepositions': {
    title: 'aufgrund, infolge, anhand …',
    rule: 'Formal German uses prepositions with the genitive: aufgrund, infolge, angesichts, anlässlich, bezüglich, hinsichtlich, mithilfe, anhand, zugunsten, seitens, innerhalb, außerhalb, oberhalb, unterhalb. After them the noun is genitive: des/der + noun (-(e)s for masculine and neuter).',
    examples: [
      'Aufgrund des Regens fiel das Fest aus.',
      'Anhand der Daten lässt sich das belegen.',
      'Hinsichtlich der Kosten gibt es keine Bedenken.',
    ],
  },
  'advanced-connectors': {
    title: 'Advanced connectors',
    rule: 'Adverbs like allerdings, vielmehr, folglich, andernfalls, infolgedessen, mittlerweile take position 1 and the verb follows. Conjunctions like sofern, falls, wenngleich, indem, sodass, ohne dass, dadurch, dass send the verb to the end of their clause.',
    examples: [
      'Das Angebot ist gut; allerdings ist es teuer.',
      'Sofern es Ihnen passt, kommen wir morgen.',
      'Sie sparte, indem sie auf das Auto verzichtete.',
    ],
  },
  'adjective-complements': {
    title: 'Adjectives with prepositions',
    rule: 'Many adjectives and participles need a fixed preposition and a case, just like verbs: stolz auf (+ Akk.), abhängig von (+ Dat.), angewiesen auf (+ Akk.), bereit zu (+ Dat.), überzeugt von (+ Dat.). Learn them with the case; with a clause use da(r)- + preposition: Ich bin stolz darauf, dass …',
    examples: [
      'Sie ist stolz auf ihre Arbeit.',
      'Wir sind darauf angewiesen, dass alle mithelfen.',
      'Er ist von dem Plan überzeugt.',
    ],
  },
  'infinitive-perfect': {
    title: 'Infinitive in the past',
    rule: 'To say that an action in the infinitive clause happened earlier, use the Partizip II + haben or sein + zu at the end: ohne gefragt zu haben, (an)statt gekommen zu sein, Er behauptet, das Buch gelesen zu haben.',
    examples: [
      'Er ging, ohne sich verabschiedet zu haben.',
      'Sie behauptet, nie dort gewesen zu sein.',
      'Ich bin froh, dich getroffen zu haben.',
    ],
  },
  'modality-verbs': {
    title: 'Modality verbs with zu',
    rule: 'Some verbs behave like modal verbs but take an infinitive with zu: scheinen zu (seem), drohen zu (threaten), pflegen zu (usually do), vermögen zu (be able), haben zu / sein zu (must / can be). The past is formed with the infinitive in the past: Er scheint gegangen zu sein.',
    examples: [
      'Das Projekt droht zu scheitern.',
      'Er pflegt montags früh zu kommen.',
      'Sie scheint die Aufgabe verstanden zu haben.',
    ],
  },
  'conditional-clauses': {
    title: 'Conditions without wenn',
    rule: 'A condition can be expressed by moving the verb to position 1: Sollte es Probleme geben, … (if there should be) · Hätte ich Zeit, würde ich helfen. · Wäre er pünktlich gewesen, … Other links: es sei denn, (dass) (unless), vorausgesetzt, (dass) (provided that), selbst wenn (even if).',
    examples: [
      'Sollte es Probleme geben, rufen Sie an.',
      'Hätte ich Zeit gehabt, wäre ich gekommen.',
      'Wir beginnen pünktlich, es sei denn, der Chef verspätet sich.',
    ],
  },
  'quantities-graphs': {
    title: 'Describing numbers and graphs',
    rule: 'Shares: die Hälfte, ein Drittel, jeder Vierte. Approximation: rund, knapp, etwa, über. Change: steigen / sinken um (the difference) or auf (the new value), von … auf …; sich verdoppeln. Comparison: im Vergleich zu (+ Dat.), doppelt so hoch wie.',
    examples: [
      'Der Anteil stieg von 5 % auf 12 %.',
      'Die Zahl wuchs um 20 %.',
      'Knapp ein Drittel der Betriebe arbeitet ökologisch.',
    ],
  },
  'c21-word-formation': {
    title: 'Suffixes and prefixes',
    rule: '-bar = can be …ed (lösbar), -los = without (hilflos), -reich / -voll = rich in (erfolgreich), -sam / -haft = having the quality (aufmerksam, fehlerhaft), -mäßig = according to (regelmäßig). Nouns: -keit/-heit/-ung/-schaft/-nis (all feminine except -nis, which is often neuter).',
    examples: [
      'lösen → lösbar · Hilfe → hilflos · Erfolg → erfolgreich',
      'offen → die Offenheit · verständigen → die Verständigung',
      'un-, miss-, ur-: unklar, missverstehen, uralt',
    ],
  },
  'c21-noun-verb': {
    title: 'Noun-verb combinations',
    rule: 'Fixed pairs of a noun and a verb carry the meaning of a single verb in formal writing: Kritik üben (kritisieren), in Betracht ziehen (erwägen). The verb is often only a carrier and the noun cannot be swapped or changed freely, so learn them as a block. Passive meaning: zur Verfügung stehen.',
    examples: [
      'Wir ziehen diese Möglichkeit in Betracht.',
      'Die Firma stellt Mitarbeitern Räume zur Verfügung.',
      'Er übte scharfe Kritik an dem Plan.',
    ],
  },
  'c21-contrast-cause': {
    title: 'Contrast and cause clauses',
    rule: 'während / wohingegen = whereas (contrast), (an)statt dass = instead of, zumal = especially as (an added reason), dadurch, dass = because of the fact that. All are subordinating: the finite verb goes to the end. nämlich cannot start a sentence; it gives a reason in a main clause.',
    examples: [
      'Sie spart, während er jeden Cent ausgibt.',
      'Wir sollten warten, zumal die Zahlen unklar sind.',
      'Er ist müde. Er hat nämlich kaum geschlafen.',
    ],
  },
  'c21-consecutive': {
    title: 'Formal result clauses',
    rule: 'derart / dermaßen / so + adjective … dass stresses the degree and the result; the dass-clause ends with the verb. In a main clause, folglich, infolgedessen, somit, mithin and demnach draw a conclusion: they take position 1, the verb is second.',
    examples: [
      'Das Netz war derart langsam, dass die Konferenz abbrach.',
      'Die Daten fehlen. Folglich lässt sich nichts beweisen.',
      'Die Kosten sinken. Somit wird die Technik erschwinglich.',
    ],
  },
  'c21-futur-2': {
    title: 'Futur II',
    rule: 'werden + participle + haben/sein at the end. It expresses that something will be finished by a future time (Bis 2040 werden wir …gelöst haben) or a guess about the past (Er wird es vergessen haben = he has probably forgotten it).',
    examples: [
      'Bis Freitag werde ich den Bericht geschrieben haben.',
      'Sie wird den Zug verpasst haben.',
      'In zehn Jahren wird sich viel verändert haben.',
    ],
  },
  'c21-reported-speech': {
    title: 'Konjunktiv I (reported speech)',
    rule: 'Reported speech uses Konjunktiv I: stem + -e, -est, -e, -en, -et, -en (er habe, sie komme, sei for sein). If it looks like the indicative (ich/wir/sie: haben), use Konjunktiv II instead (sie hätten). Past events: sei/habe + participle. Typical in news reports.',
    examples: [
      'Der Minister sagte, er habe keine Kenntnis davon.',
      'Die Forscher erklärten, die Methode sei sicher.',
      'Sie sagten, sie hätten keine Zeit gehabt.',
    ],
  },
  'c21-nominal-style': {
    title: 'Nominal style',
    rule: 'Formal texts replace clauses by prepositional phrases: weil → wegen / aufgrund + genitive, obwohl → trotz + genitive, indem → durch + accusative, wenn → bei + dative, nachdem → nach + dative, ohne zu → ohne + noun. The verb becomes a noun (verzögern → die Verzögerung).',
    examples: [
      'Weil der Zug Verspätung hatte, … → Aufgrund der Verspätung des Zuges …',
      'Indem man spart, … → Durch Sparen …',
      'Er schrieb, ohne zu zögern. → Er schrieb ohne Zögern.',
    ],
  },
  'c21-unreal': {
    title: 'Unreal comparisons and hindsight',
    rule: 'als ob / als wenn + Konjunktiv II (verb at the end), or als + verb in position 2: Er tut, als ob er schliefe / als schliefe er. Unreal conditions can drop wenn: Hätte ich das gewusst, wäre ich gekommen. Criticism after the fact: hätte + infinitive + modal infinitive (Du hättest anrufen müssen).',
    examples: [
      'Sie tut so, als ob sie nichts wüsste.',
      'Hätte ich das gewusst, wäre ich früher gekommen.',
      'Wir hätten das früher entscheiden sollen.',
    ],
  },
  'c21-text-cohesion': {
    title: 'Linking sentences',
    rule: 'Pronominal adverbs (dabei, dadurch, dafür, daraufhin) and connectors (zudem, außerdem, hingegen, demgegenüber, ferner) tie sentences together without repeating nouns. Most take position 1 and the verb follows directly. da(r)- + preposition refers to the whole sentence before.',
    examples: [
      'Er sanierte das Haus. Dabei entdeckte er alte Fresken.',
      'Das Konzept überzeugt. Zudem ist es günstig.',
      'Die Preise stiegen. Daraufhin kauften weniger Leute.',
    ],
  },
  'c21-concession': {
    title: 'Concession in writing',
    rule: 'wenngleich, obgleich, wenn auch = although (verb at the end). allerdings, freilich, indes = however (main clause, verb after it). so … auch + adjective = however … (So klug er auch ist, …). Use them to admit a point before you weigh it.',
    examples: [
      'Wenngleich der Plan mutig ist, bleibt das Risiko hoch.',
      'Das stimmt, allerdings fehlen die Belege.',
      'So gut die Idee auch klingt, sie ist zu teuer.',
    ],
  },
  // ---- C2.2 ----
  'c22-participial-attributes': {
    title: 'Participles before nouns',
    rule: 'Partizip I (infinitive + d) is active and simultaneous: die strahlende Farbe = die Farbe, die strahlt. Partizip II usually has a passive, completed meaning: das gemalte Bild = das Bild, das gemalt wurde. Both take adjective endings and can be extended by details placed before them.',
    examples: [
      'die steigenden Preise · das restaurierte Gemälde',
      'das vom Künstler 1912 gemalte Bild',
      'der seit Jahren geschlossene Saal',
    ],
  },
  'c22-subjective-modals': {
    title: 'Modal verbs that judge or report',
    rule: 'With an infinitive (or a perfect infinitive: gelesen haben) modal verbs report or assess: er soll = it is said that he; er will = he claims; er muss = surely; er dürfte / könnte = probably / perhaps; er kann nicht = surely not. Past reference: modal + participle + haben / sein.',
    examples: [
      'Der Autor soll zehn Jahre an dem Roman gearbeitet haben.',
      'Sie will das Buch nie gelesen haben.',
      'Das muss ein Irrtum gewesen sein.',
    ],
  },
  'c22-passive-forms': {
    title: 'Passive in every tense',
    rule: 'Vorgangspassiv = werden + participle (the process): wurde gebaut, ist gebaut worden (worden, not geworden), wird gebaut werden. Zustandspassiv = sein + participle (the resulting state): Das Tor ist geöffnet. With a modal verb: Das muss geprüft werden.',
    examples: [
      'Das Denkmal wurde 1895 enthüllt.',
      'Es ist saniert worden.',
      'Das Museum ist montags geschlossen.',
    ],
  },
  'c22-gerundive': {
    title: 'zu + Partizip I',
    rule: 'zu + Partizip I before a noun means "that can or must be …-ed": die zu erwartende Entscheidung = die Entscheidung, die erwartet werden muss. With a separable verb zu sits inside: das abzuschließende Verfahren. In predicates the same idea is sein + zu + infinitive: Der Antrag ist zu prüfen.',
    examples: [
      'die zu erwartende Entscheidung',
      'das nicht zu unterschätzende Risiko',
      'Die Frist ist einzuhalten.',
    ],
  },
  'c22-formal-genitive': {
    title: 'Formal genitive prepositions',
    rule: 'Written and official German uses many prepositions with the genitive: angesichts (in view of), infolge (as a result of), aufgrund (because of), hinsichtlich (regarding), seitens (on the part of), zwecks (for the purpose of), mittels (by means of), zugunsten (in favour of), anstelle (instead of).',
    examples: [
      'angesichts der steigenden Kosten',
      'infolge eines Formfehlers · seitens der Behörde',
      'zugunsten der Kläger',
    ],
  },
  'c22-prefix-verbs': {
    title: 'Separable or inseparable?',
    rule: 'über-, unter-, um-, durch-, hinter- and wider- can be separable (stressed prefix, literal meaning) or inseparable (stressed stem, figurative meaning, no ge- in the participle). Compare: Er setzt uns über (ferries us across) with Er übersetzt den Text (translates).',
    examples: [
      'Sie fährt das Schild um. · Sie umfährt die Baustelle.',
      'Er stellt sich unter. · Er unterstellt ihr Absicht.',
    ],
  },
  'c22-passive-alternatives': {
    title: 'Ways to avoid the passive',
    rule: 'Instead of werden + participle you can use man (Man löst das Problem), sich lassen + infinitive (Das lässt sich lösen = can be solved), sein + zu + infinitive (Das ist zu lösen), an adjective in -bar or -lich (lösbar, verständlich) or bekommen + participle (Er bekommt das Buch geschenkt).',
    examples: [
      'Das Problem lässt sich lösen.',
      'Der Vertrag ist bis Freitag zu unterschreiben.',
      'Die Regel ist nicht nachvollziehbar.',
    ],
  },
  'c22-nuance-particles': {
    title: 'Modal particles and adverbs',
    rule: 'Particles colour a sentence without changing what it says: doch (contrary to expectation), ja (as you know), eben / halt (it cannot be changed), wohl (probably), eigentlich (actually), schon (admittedly), immerhin (at least). They are unstressed, never stand first and cannot be negated.',
    examples: ['Das ist ja interessant!', 'Das ist eben so.', 'Du hast es doch versprochen!'],
  },
  // ---- French C1.2 ---------------------------------------------------------------------------
  'fr-c12-participe-present': {
    title: 'The present participle (-ant)',
    rule: 'Take the nous form of the present, drop -ons and add -ant: jouons → jouant, finissons → finissant, faisons → faisant. Three verbs are irregular: être → étant, avoir → ayant, savoir → sachant. The participle never agrees; it replaces a qui clause or gives a reason.',
    examples: [
      'Je cherche un joueur connaissant les règles. (= qui connaît)',
      'Étant endetté, il a vendu sa voiture. (= comme il était endetté)',
      'Ayant tout perdu, elle a arrêté de jouer.',
    ],
  },
  'fr-c12-gerondif': {
    title: 'The gérondif: en + -ant',
    rule: 'en + the -ant form says how or when something happens: by doing it (means), while doing it (simultaneity), or if you do it (condition). It never agrees, and its subject is the subject of the main verb. tout en … -ant stresses that two things happen together, often in contrast.',
    examples: [
      'On apprend les règles en jouant.',
      'Il a perdu gros en jouant au casino.',
      'Elle travaille tout en écoutant de la musique.',
    ],
  },
  'fr-c12-adjectif-verbal': {
    title: 'Adjectif verbal or participe présent?',
    rule: 'The adjectif verbal describes a noun and agrees with it: une partie passionnante, des résultats décevants. The participle is invariable and acts like a verb. Some pairs are spelled differently: fatiguant (participle) / fatigant (adjective), convainquant / convaincant, provoquant / provocant, différant / différent.',
    examples: [
      'Une soirée fatigante. · En se fatiguant trop, il a perdu.',
      'Des arguments convaincants. · En convainquant ses amis, …',
      'Des règles différentes. · Des règles différant de celles-ci …',
    ],
  },
  'fr-c12-registres': {
    title: 'Familier, courant, soutenu',
    rule: 'The same idea has several registers: familier (casual, among friends), courant (neutral, everyday) and soutenu (formal, written). Adapt to the person you talk to and the medium. Familiar speech often drops ne and uses on; formal French uses inversion and richer words.',
    examples: [
      'une bagnole (familier) · une voiture (courant) · une automobile (soutenu)',
      'J’en sais rien. · Je ne sais pas. · Je l’ignore.',
      'On bouffe où ? · On mange où ? · Où souhaitez-vous dîner ?',
    ],
  },
  'fr-c12-questions': {
    title: 'Three ways to ask a question',
    rule: 'Intonation (Tu viens ?) is casual. Est-ce que + normal word order is neutral (Est-ce que tu viens ?). Inversion is formal and written (Viens-tu ?). With il, elle or on after a vowel add -t-: A-t-elle appelé ? With a noun subject: Tes parents sont-ils venus ?',
    examples: [
      'Vous avez des enfants ? · Est-ce que vous avez des enfants ? · Avez-vous des enfants ?',
      'A-t-elle téléphoné ?',
      'Où est-ce que tes grands-parents habitent ?',
    ],
  },
  'fr-c12-reprise-pronominale': {
    title: 'Avoiding repetition with pronouns',
    rule: 'A text picks up what it has said with pronouns: il, elle, ils for subjects, le, la, les, lui, leur for objects, en for de + noun or a quantity, y for à + place or thing, l’un … l’autre to share out two, cela or ça for a whole idea. The pronoun must refer to one clear antecedent.',
    examples: [
      'Marie a 80 ans. Elle vit seule. Je lui rends visite.',
      'Des maisons de retraite, il y en a peu. · Elle vit à la campagne et y est heureuse.',
      'Deux seniors sont venus : l’un est médecin, l’autre ancien maire.',
    ],
  },
  'fr-c12-reprise-nominale': {
    title: 'Avoiding repetition with noun phrases',
    rule: 'A noun phrase can also pick up an earlier word: ce, cet, cette or ces + the same noun, a synonym, a more general word (hyperonym), a description, or a noun that sums up a whole idea (ce phénomène). It adds information and avoids heavy repetition in written French.',
    examples: [
      'Un vieil homme passait. Cet homme portait une canne.',
      'Le papy-boom commence. Ce phénomène démographique coûtera cher.',
      'Victor Hugo est mort en 1885. L’auteur des Misérables avait 83 ans.',
    ],
  },
  'fr-c12-recit-passe': {
    title: 'Imparfait, passé composé, plus-que-parfait',
    rule: 'The imparfait gives the background: states, descriptions, habits. The passé composé gives the events that move the story on. The plus-que-parfait (imparfait of avoir or être + participle) shows what had already happened before another past moment. Together they build a story.',
    examples: [
      'Il pleuvait quand le médecin est arrivé.',
      'Elle avait oublié son ordonnance, alors le pharmacien a appelé.',
      'Chaque matin, il prenait ses cachets.',
    ],
  },
  'fr-c12-passe-simple': {
    title: 'The passé simple',
    rule: 'The passé simple is the tense of written narration: novels, history, tales. You mostly meet the third person. -er verbs: -a, -èrent. -ir verbs: -it, -irent. Many others: -ut, -urent (il eut, il fut, il mourut), or irregular stems (il fit, il vint, il naquit). Learn to recognise it; you rarely say it.',
    examples: [
      'Il ouvrit la porte et entra.',
      'Elle fut surprise. · Ils eurent peur.',
      'Napoléon naquit en 1769. · Louis XIV mourut en 1715.',
    ],
  },
  // ---- French A1.1 -------------------------------------------------------------------------
  'fr-tu-vous': {
    title: 'tu or vous?',
    rule: 'Use tu with friends, family, children and people your age you know well. Use vous with strangers, your boss, your teacher and shop staff, and always when you speak to more than one person. Switch to tu only when the other person offers it.',
    examples: [
      'Salut, Léa ! Tu vas bien ? → friend',
      'Bonjour, madame. Vous allez bien ? → a stranger',
      'Bonjour à tous. Vous êtes prêts ? → several people',
    ],
  },
  'fr-questions': {
    title: 'Asking how someone is',
    rule: 'Comment asks about the manner. With tu the question is Comment vas-tu ?, with vous it is Comment allez-vous ? (verb first, joined to the pronoun by a hyphen). Among friends the voice is enough: Ça va ? goes up at the end.',
    examples: ['Comment vas-tu ?', 'Comment allez-vous ?', 'Ça va ? – Oui, ça va bien.'],
  },
  'fr-pronouns': {
    title: 'Subject pronouns',
    rule: 'The pronoun decides the verb form: je, tu, il/elle/on, nous, vous, ils/elles. Il, elle and on share one form, and so do ils and elles. In everyday speech on means “we” and takes the il form. Before a vowel je becomes j’.',
    examples: [
      'je parle · tu parles · il/elle/on parle',
      'nous parlons · vous parlez · ils/elles parlent',
      'On habite à Lyon. = Nous habitons à Lyon.',
    ],
  },
  'fr-etre-avoir': {
    title: 'être and avoir',
    rule: 'The two most important verbs are irregular, so learn them as they are. être: suis, es, est, sommes, êtes, sont. avoir: ai, as, a, avons, avez, ont. Use être for who you are, where you are from and your job: no article after it.',
    examples: ['Je suis étudiante.', 'Nous sommes de Lyon.', 'Elle a un frère.'],
  },
  'fr-er-verbs': {
    title: 'Regular -er verbs',
    rule: 'Drop -er and add -e, -es, -e, -ons, -ez, -ent: parler gives je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent. Only nous and vous sound different. Before a vowel or a mute h, je becomes j’: j’habite.',
    examples: ['Je parle français.', 'J’habite à Paris.', 'Ils habitent à Nice.'],
  },
  'fr-articles': {
    title: 'le, la, l’, les',
    rule: 'Every noun is masculine (le) or feminine (la), so learn the article with the noun. Before a vowel or a mute h both become l’. The plural is les for both genders. The indefinite articles are un / une, and des in the plural.',
    examples: [
      'le professeur · la ville · l’école',
      'les étudiants · des amis',
      'un livre · une table',
    ],
  },
  'fr-gender': {
    title: 'Masculine and feminine',
    rule: 'Nationalities and jobs have a feminine form, usually with -e added: étudiant, étudiante. The endings -ien and -ier become -ienne and -ière. Some words do not change: suisse, journaliste. After être you use no article.',
    examples: [
      'Il est français. Elle est française.',
      'Il est italien. Elle est italienne.',
      'Il est suisse. Elle est suisse.',
    ],
  },
  'fr-possessives': {
    title: 'mon, ma, mes',
    rule: 'The possessive agrees with the thing owned, not with the owner: mon père, ma mère, mes parents. Singular masculine / feminine / plural: mon, ma, mes (my), ton, ta, tes (your), son, sa, ses (his or her). Before a vowel the feminine takes mon: mon amie.',
    examples: [
      'mon frère · ma sœur · mes parents',
      'ton père · ta mère · tes cousins',
      'Paul et son frère · Léa et sa tante',
    ],
  },
  'fr-adjectives': {
    title: 'Adjectives agree',
    rule: 'An adjective agrees with the noun: add -e for the feminine and -s for the plural (grand, grande, grands, grandes). Some change more: sportif becomes sportive, gentil becomes gentille. Adjectives ending in -e keep one form for both genders: jeune, sympa.',
    examples: [
      'Mon père est grand. Ma mère est grande.',
      'Mes frères sont sportifs.',
      'Léa est gentille.',
    ],
  },
  'fr-cest-il-est': {
    title: 'C’est or il est?',
    rule: 'To say who someone is, use c’est with a noun that has an article or a possessive. To describe them, use il est or elle est with an adjective, or with a job without an article. So: C’est mon frère. Il est grand. Elle est médecin.',
    examples: ['C’est mon frère. Il est grand.', 'C’est Léa. Elle est sympa.', 'Elle est médecin.'],
  },
  'fr-plurals': {
    title: 'Plurals',
    rule: 'Most nouns add a silent -s in the plural, so you hear the plural only in the article: le, la and l’ become les, and un and une become des. Nouns in -eau and -al change differently: un bateau, des bateaux; un animal, des animaux.',
    examples: ['un frère, des frères', 'la sœur, les sœurs', 'un enfant, des enfants'],
  },
  'fr-pronominal': {
    title: 'Pronominal verbs',
    rule: 'A pronominal verb has a small pronoun before it that matches the subject: je me lève, tu te laves, il se couche, nous nous reposons, vous vous habillez, elles se promènent. Me, te and se become m’, t’ and s’ before a vowel or h: je m’habille. In the negative ne goes before the pronoun.',
    examples: [
      'Je me lève à sept heures.',
      'Elle s’habille vite.',
      'Nous ne nous couchons pas tôt.',
    ],
  },
  'fr-frequency': {
    title: 'How often?',
    rule: 'Short adverbs of frequency (toujours, souvent, rarement, parfois) go right after the verb: il se lève toujours tôt. Tous les jours, d’habitude and parfois can also open the sentence. Never is ne … jamais around the verb, without pas: je ne me couche jamais tard.',
    examples: [
      'Je me douche toujours le matin.',
      'Parfois, nous dînons dehors.',
      'Il ne fait jamais la vaisselle.',
    ],
  },
  'fr-sequence': {
    title: 'First, then, finally',
    rule: 'Order a day with d’abord, ensuite (or puis) and enfin. Avant and après come before a noun: avant le dîner, après le travail. For times use à (à sept heures), vers for around (vers huit heures) and de … à … for from … to (de neuf heures à midi).',
    examples: [
      'D’abord, je me lève. Ensuite, je mange.',
      'Je rentre vers six heures.',
      'Je travaille de neuf heures à cinq heures.',
    ],
  },
  'fr-passe-compose-avoir': {
    title: 'The passé composé with avoir',
    rule: 'To say what happened, use avoir in the present plus the past participle: j’ai mangé, tu as fini, nous avons attendu. Participles: -er → -é, -ir → -i, -re → -u; some are irregular (fait, pris, eu, été). In the negative ne … pas wraps avoir: je n’ai pas mangé.',
    examples: [
      'Hier, j’ai regardé un film.',
      'Nous avons fêté son anniversaire.',
      'Il n’a pas fini.',
    ],
  },
  'fr-time-markers': {
    title: 'Past and future time markers',
    rule: 'Look back with hier, avant-hier and il y a + a length of time (il y a deux jours). Look ahead with demain, après-demain and dans + a length of time (dans deux jours). Dernier (last) and prochain (next) follow the noun and agree with it: la semaine dernière, le mois prochain.',
    examples: [
      'Hier soir, j’ai dîné chez eux.',
      'Elle a eu un bébé il y a deux jours.',
      'Samedi prochain, nous partons.',
    ],
  },
  'fr-likes': {
    title: 'J’aime, je déteste …',
    rule: 'Aimer, adorer and détester are regular -er verbs. Before a noun use the definite article, even for things in general: j’aime le café, elle adore les chats. Before an activity use the infinitive: j’aime danser. Add beaucoup for more: j’aime beaucoup la musique.',
    examples: ['J’aime le chocolat.', 'Elle adore les chats.', 'Nous détestons cuisiner.'],
  },
  'fr-negation': {
    title: 'ne … pas',
    rule: 'Put ne before the verb and pas after it: je ne parle pas. Before a vowel ne becomes n’: je n’aime pas. After pas, un, une and des turn into de: j’ai un frère, but je n’ai pas de frère. Moi non plus answers a negative sentence.',
    examples: ['Je ne joue pas au tennis.', 'Elle n’aime pas danser.', 'Je n’ai pas de sœur.'],
  },
  'fr-jouer-faire': {
    title: 'jouer à, jouer de, faire de',
    rule: 'Games and sports take jouer à: jouer au football. Instruments take jouer de: jouer du piano. Other activities take faire de: faire du sport, faire de la natation. Faire is irregular: je fais, tu fais, il fait, nous faisons, vous faites, ils font.',
    examples: ['Je joue au football.', 'Il joue de la guitare.', 'Nous faisons du sport.'],
  },
  'fr-partitive': {
    title: 'du, de la, des',
    rule: 'To say some of something, use the partitive: du (masculine), de la (feminine), de l’ (before a vowel), des (plural). After a negative it becomes de. Compare with le, la, les, which point to a particular thing or to a thing in general.',
    examples: ['Je mange du pain.', 'Elle prend de la soupe.', 'Il boit de l’eau.'],
  },
  'fr-quantities': {
    title: 'un peu de, beaucoup de',
    rule: 'After a quantity use de alone, with no article: un peu de fromage, beaucoup de légumes, un kilo de pommes, une bouteille d’eau. De becomes d’ before a vowel. Pas de works the same way: je ne mange pas de viande.',
    examples: ['Un kilo de pommes.', 'Beaucoup de légumes.', 'Une bouteille d’eau.'],
  },
  'fr-prendre-vouloir': {
    title: 'prendre, vouloir, boire',
    rule: 'These verbs are irregular. Prendre: je prends, il prend, nous prenons, ils prennent. Vouloir: je veux, il veut, nous voulons, ils veulent. Boire: je bois, nous buvons, ils boivent. To order politely say je voudrais.',
    examples: ['Je prends du pain.', 'Vous voulez du thé ?', 'Ils boivent de l’eau.'],
  },
  'fr-ir-verbs': {
    title: 'Regular -ir verbs',
    rule: 'Verbs like choisir and finir take the endings -is, -is, -it, -issons, -issez, -issent. Their stem gets longer in the plural: je choisis, nous choisissons, ils choisissent.',
    examples: ['Je choisis le menu.', 'Il finit son repas.', 'Nous finissons à midi.'],
  },
  'fr-contractions': {
    title: 'au, aux, du, des',
    rule: 'The words à and de merge with le and les: à + le = au, à + les = aux, de + le = du, de + les = des. With la and l’ nothing merges: à la gare, à l’école, de la gare, de l’hôtel. So: je vais au musée, mais je vais à la poste.',
    examples: ['Je vais au musée.', 'Elle va à la banque.', 'Le parc est près du marché.'],
  },
  'fr-place-prepositions': {
    title: 'dans, sur, devant, près de …',
    rule: 'Some prepositions of place take the noun directly: dans, sur, sous, devant, derrière, entre. Others end in de and merge with the article: près du parc, loin de la gare, à côté de l’école, en face des magasins.',
    examples: [
      'Le livre est sur la table.',
      'La banque est entre la poste et la gare.',
      'L’école est en face du parc.',
    ],
  },
  'fr-aller': {
    title: 'aller',
    rule: 'Aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont. To say where you go use à plus the place: je vais à la gare, nous allons au marché. Ask the way with Pour aller à … ?',
    examples: ['Je vais à la poste.', 'Vous allez au musée ?', 'Ils vont à l’école.'],
  },
  'fr-imperative': {
    title: 'The imperative',
    rule: 'To give directions, use the verb without a pronoun. The vous form is the same as in the present: tournez, allez, prenez. The tu form of -er verbs loses its -s: tourne, traverse. Aller is va for tu. Add s’il vous plaît to be polite.',
    examples: ['Tournez à gauche.', 'Traverse la rue.', 'Va tout droit.'],
  },
  'fr-demonstratives': {
    title: 'ce, cet, cette, ces',
    rule: 'Use ce before a masculine noun (ce pull), cet before a masculine noun that starts with a vowel sound (cet hiver), cette before a feminine noun (cette robe) and ces before a plural (ces chaussures). The same word means this and that.',
    examples: ['Ce pull est noir.', 'Cet hiver, il neige.', 'J’aime cette robe.'],
  },
  'fr-futur-proche': {
    title: 'The near future: aller + infinitive',
    rule: 'To say what is going to happen, use aller in the present plus an infinitive: je vais jouer, nous allons voyager, il va pleuvoir. In the negative ne … pas goes around aller: je ne vais pas sortir.',
    examples: [
      'Demain, je vais jouer au tennis.',
      'Nous allons voyager en été.',
      'Il va pleuvoir.',
    ],
  },
  'fr-adjective-position': {
    title: 'Where does the adjective go?',
    rule: 'Most adjectives follow the noun: une robe rouge, un pull noir. A few short, common ones go before it: petit, grand, beau, joli, jeune, bon. Colours and nationalities always come after. With both: une petite robe rouge.',
    examples: ['Un pull rouge.', 'Une petite robe.', 'Un grand manteau noir.'],
  },
  // ---- French A2.1 ---------------------------------------------------------------------------
  'fr-a21-passe-compose': {
    title: 'Passé composé with être',
    rule: 'Aller, venir, arriver, partir, entrer, sortir, rester, tomber, naître, mourir and all pronominal verbs form the passé composé with être, not avoir. The participle then agrees with the subject: elle est partie, ils sont partis, nous nous sommes mariés.',
    examples: ['Elle est née en 1995.', 'Nous sommes arrivés hier.', 'Je me suis installé à Lyon.'],
  },
  'fr-a21-participles': {
    title: 'Irregular past participles',
    rule: 'Regular verbs make the participle from the infinitive: -er → -é (parlé), -ir → -i (fini), -re → -u (vendu). Many common verbs are irregular and must be learned: avoir → eu, être → été, faire → fait, prendre → pris, voir → vu, écrire → écrit, vivre → vécu.',
    examples: ['J’ai fait un stage.', 'Il a vécu à Rome.', 'Nous avons pris une décision.'],
  },
  'fr-a21-negatives': {
    title: 'ne … rien, personne, plus, pas encore',
    rule: 'Ne goes before the verb. In the passé composé rien, jamais, plus and pas encore stand between the auxiliary and the participle (je n’ai rien dit); personne comes after the participle (je n’ai vu personne). As a subject, rien and personne come first: personne n’est venu.',
    examples: ['Elle n’a pas encore trouvé d’emploi.', 'Je n’ai vu personne.', 'Rien n’a changé.'],
  },
  'fr-a21-time-markers': {
    title: 'pendant, depuis, en',
    rule: 'Pendant gives how long something lasted and is over (j’ai travaillé pendant trois ans). Depuis says that something started in the past and still goes on, with the present tense (j’habite ici depuis 2020). En + year or month gives the moment (en 1998, en mai). Il y a + duration means ago.',
    examples: [
      'Il a vécu à Nice pendant dix ans.',
      'Elle travaille ici depuis mars.',
      'Je suis né en 1998.',
    ],
  },
  // ---- French A2.2 ----
  'fr-object-pronouns': {
    title: 'Object pronouns: le, la, les, lui, leur',
    rule: 'Le, la, l’ and les replace a direct object (a person or thing with no preposition). Lui (one person) and leur (several) replace à + a person. Me, te, nous and vous work for both. The pronoun stands before the verb, or before the infinitive: je le vois, je vais lui téléphoner.',
    examples: ['Je le prends.', 'Je lui téléphone.', 'Je ne la trouve pas.'],
  },
  'fr-superlative': {
    title: 'The superlative: le plus, le meilleur',
    rule: 'For adjectives use le / la / les + plus (more) or moins (less) + adjective; the article agrees with the noun. Bon becomes le meilleur, bien becomes le mieux. For adverbs the article is always le: le plus vite.',
    examples: [
      'C’est la plus grande ville.',
      'C’est le meilleur médecin.',
      'Elle court le plus vite.',
    ],
  },
  'fr-interrogative-pronouns': {
    title: 'Qui, que, quoi, lequel',
    rule: 'Qui asks about a person. For things use qu’est-ce qui (subject) and qu’est-ce que or que (object); after a preposition or at the end of the question use quoi. Lequel, laquelle, lesquels and lesquelles ask “which one(s)?” and agree with the noun.',
    examples: ['Qui a appelé ?', 'Qu’est-ce que vous prenez ?', 'Laquelle est pour moi ?'],
  },
} as const satisfies Record<string, Lesson>;

export type LessonId = keyof typeof LESSONS;
export const LESSON_IDS = Object.keys(LESSONS) as LessonId[];

export function isLessonId(value: string): value is LessonId {
  return Object.hasOwn(LESSONS, value);
}

/** Tags that only describe a broad area; a more specific grammar tag on the same activity wins. */
const BROAD: readonly TagId[] = [
  'verb-conjugation',
  'word-order',
  'questions',
  'pronouns',
  'articles',
];

/** A tag whose lesson already explains the listed tags (e.g. Wo?/Wohin? covers dative and accusative). */
const COVERS: Partial<Record<TagId, readonly TagId[]>> = {
  'two-way-prepositions': ['dative', 'accusative'],
  'dative-prepositions': ['dative', 'prepositions-of-time'],
  'adjective-endings': ['accusative', 'dative', 'comparison'],
  'object-pronouns': ['accusative', 'dative'],
  'reflexive-verbs': ['accusative', 'dative'],
  'n-declension': ['accusative', 'dative'],
  'konjunktiv-2': ['polite-forms'],
  'als-ob': ['konjunktiv-2', 'subordinate-clauses'],
  'je-desto': ['comparison', 'subordinate-clauses'],
  'indem-ohne-dass': ['subordinate-clauses', 'infinitive-zu'],
  'consecutive-clauses': ['subordinate-clauses'],
  'relative-wo-was': ['relative-clauses', 'subordinate-clauses'],
  'passive-past': ['passive', 'past-tense', 'perfekt'],
  'participles-as-adjectives': ['adjective-endings', 'perfekt'],
  'nicht-position': ['negation', 'word-order'],
  comparison: ['superlative'],
  'relative-clauses': ['subordinate-clauses'],
  'indirect-questions': ['subordinate-clauses', 'questions'],
  'temporal-clauses': ['subordinate-clauses'],
  'purpose-clauses': ['subordinate-clauses'],
  'route-prepositions': ['two-way-prepositions'],
  possessives: ['accusative'],
  'separable-verbs': ['verb-conjugation'],
  'modal-verbs': ['verb-conjugation'],
  'verbs-with-prepositions': ['accusative', 'dative'],
  'verb-conjugation': ['pronouns'],
  'konjunktiv-1': ['konjunktiv-2'],
  'modal-hearsay': ['modal-verbs', 'perfekt'],
  'modal-assumption': ['modal-verbs', 'perfekt'],
  'perfekt-double-infinitive': ['perfekt', 'modal-verbs'],
  'concessive-advanced': ['concessive-clauses', 'subordinate-clauses', 'connectors'],
  'consecutive-connectors': ['subordinate-clauses', 'connectors'],
  'adversative-connectors': ['subordinate-clauses', 'connectors'],
  'modal-clauses': ['subordinate-clauses', 'infinitive-zu'],
  'comparative-clauses': ['comparison', 'subordinate-clauses'],
  'relative-wer': ['relative-clauses', 'subordinate-clauses'],
  'passive-alternatives': ['passive'],
  'extended-participle': ['adjective-endings'],
  'adjective-prepositions': ['verbs-with-prepositions'],
  'noun-prepositions': ['verbs-with-prepositions'],
};

/**
 * The lesson for a set of activity tags, or undefined when the activity mixes several grammar
 * points (then items must name their lesson) or is not a grammar activity at all. Only activities
 * with the `grammar` skill qualify, so vocabulary games that merely mention articles stay quiet.
 */
export function lessonForTags(tags: readonly TagId[]): LessonId | undefined {
  if (!tags.includes('grammar')) return undefined;
  const points = tags.filter((t): t is TagId & LessonId => isLessonId(t));
  const covered = new Set(points.flatMap((t) => COVERS[t] ?? []));
  const left = points.filter((t) => !covered.has(t));
  const specific = left.filter((t) => !BROAD.includes(t));
  if (specific.length === 1) return specific[0];
  if (specific.length === 0 && left.length === 1) return left[0];
  return undefined;
}
