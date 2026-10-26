# Grammar lesson sources

The full grammar lessons (`src/content/grammar/`) are written in our own words. Every rule was checked against the
pages below, which were fetched and read while writing; the same list is kept with each topic (`sources`, not shown
on the lesson page). The German content has **not yet been reviewed by a native speaker**.

Forms in tables are generated from `src/lib/german` where possible (articles, conjugation, Präteritum, Konjunktiv II,
ordinals), so they are covered by the unit tests of those helpers.

## A1.1 and A1.2 (22 topics)

| Topic                          | Pages read                                                                                                                                                                                                                        |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verb in position 2             | [Verbzweitstellung](https://de.wikipedia.org/wiki/Verbzweitstellung)                                                                                                                                                              |
| Asking questions               | [Fragesatz](https://de.wikipedia.org/wiki/Fragesatz)                                                                                                                                                                              |
| Personal pronouns              | [Personalpronomen](https://de.wikipedia.org/wiki/Personalpronomen)                                                                                                                                                                |
| Present tense endings          | [Starkes Verb](https://de.wikipedia.org/wiki/Starkes_Verb)                                                                                                                                                                        |
| der, die, das                  | [Genus](https://de.wikipedia.org/wiki/Genus), [Artikel (Wortart)](<https://de.wikipedia.org/wiki/Artikel_(Wortart)>)                                                                                                              |
| nicht or kein?                 | Wiktionary [kein](https://de.wiktionary.org/wiki/kein), [nicht](https://de.wiktionary.org/wiki/nicht)                                                                                                                             |
| Plural forms                   | [Plural](https://de.wikipedia.org/wiki/Plural), [Dativ](https://de.wikipedia.org/wiki/Dativ) (dative plural -n)                                                                                                                   |
| mein, dein, sein, ihr …        | [Possessivpronomen](https://de.wikipedia.org/wiki/Possessivpronomen)                                                                                                                                                              |
| Time words                     | Wiktionary [um](https://de.wiktionary.org/wiki/um), [seit](https://de.wiktionary.org/wiki/seit), [vor](https://de.wiktionary.org/wiki/vor)                                                                                        |
| Separable verbs                | [Trennbares Verb](https://de.wikipedia.org/wiki/Trennbares_Verb), [Partizip II](https://de.wikipedia.org/wiki/Partizip_II)                                                                                                        |
| Accusative                     | [Akkusativ](https://de.wikipedia.org/wiki/Akkusativ), [Artikel (Wortart)](<https://de.wikipedia.org/wiki/Artikel_(Wortart)>)                                                                                                      |
| Modal verbs                    | [Modalverb](https://de.wikipedia.org/wiki/Modalverb)                                                                                                                                                                              |
| Dative                         | [Duden: Dativ](https://www.duden.de/rechtschreibung/Dativ), [Dativ](https://de.wikipedia.org/wiki/Dativ), [Dativobjekt](https://de.wikipedia.org/wiki/Dativobjekt), [Präposition](https://de.wikipedia.org/wiki/Pr%C3%A4position) |
| mich or mir?                   | [Personalpronomen](https://de.wikipedia.org/wiki/Personalpronomen), [Dativobjekt](https://de.wikipedia.org/wiki/Dativobjekt)                                                                                                      |
| Wo? or Wohin?                  | [Präposition](https://de.wikipedia.org/wiki/Pr%C3%A4position), Wiktionary [vor](https://de.wiktionary.org/wiki/vor)                                                                                                               |
| The imperative                 | [Imperativ (Modus)](<https://de.wikipedia.org/wiki/Imperativ_(Modus)>)                                                                                                                                                            |
| Präteritum                     | [Präteritum](https://de.wikipedia.org/wiki/Pr%C3%A4teritum)                                                                                                                                                                       |
| The Perfekt                    | [Perfekt](https://de.wikipedia.org/wiki/Perfekt), [Partizip II](https://de.wikipedia.org/wiki/Partizip_II)                                                                                                                        |
| Comparing                      | [Komparation](https://de.wikipedia.org/wiki/Komparation)                                                                                                                                                                          |
| Ordinal numbers                | [Zahlwort](https://de.wikipedia.org/wiki/Zahlwort)                                                                                                                                                                                |
| und, oder, aber, denn, sondern | [Konjunktion (Wortart)](<https://de.wikipedia.org/wiki/Konjunktion_(Wortart)>)                                                                                                                                                    |
| Polite requests                | [Konjunktiv im Deutschen](https://de.wikipedia.org/wiki/Konjunktiv_II)                                                                                                                                                            |

## C2.1 and C2.2 (18 topics)

Shared reference list for both levels: `src/content/grammar/sourcesC2.ts`. All pages below were fetched and read; where a
page did not state a detail, the lesson follows common textbook rules and is marked in "Limits".

| Topic                            | Pages read                                                                                                                                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Suffixes and prefixes (C2.1)     | [Wortbildung](https://de.wikipedia.org/wiki/Wortbildung), Wiktionary suffix entries -bar, -los, -sam, -haft, -mäßig, -keit, -nis, -schaft, -ung                                                                                 |
| Noun-verb combinations           | [Funktionsverbgefüge](https://de.wikipedia.org/wiki/Funktionsverbgef%C3%BCge), [Nominalstil](https://de.wikipedia.org/wiki/Nominalstil)                                                                                         |
| Contrast and cause clauses       | Wiktionary [wohingegen](https://de.wiktionary.org/wiki/wohingegen), [zumal](https://de.wiktionary.org/wiki/zumal), [nämlich](https://de.wiktionary.org/wiki/n%C3%A4mlich), [indes](https://de.wiktionary.org/wiki/indes)        |
| Formal result clauses            | Wiktionary [derart](https://de.wiktionary.org/wiki/derart), [folglich](https://de.wiktionary.org/wiki/folglich), [infolgedessen](https://de.wiktionary.org/wiki/infolgedessen), [mithin](https://de.wiktionary.org/wiki/mithin) |
| Futur II                         | [Futur II](https://de.wikipedia.org/wiki/Futur_II)                                                                                                                                                                              |
| Konjunktiv I (reported speech)   | [Indirekte Rede](https://de.wikipedia.org/wiki/Indirekte_Rede), [Konjunktiv I](https://de.wikipedia.org/wiki/Konjunktiv_I)                                                                                                      |
| Nominal style                    | [Nominalstil](https://de.wikipedia.org/wiki/Nominalstil), [Funktionsverbgefüge](https://de.wikipedia.org/wiki/Funktionsverbgef%C3%BCge), [Präposition](https://de.wikipedia.org/wiki/Pr%C3%A4position)                          |
| Unreal comparisons and hindsight | [Konjunktiv II](https://de.wikipedia.org/wiki/Konjunktiv_II), [Konditionalsatz](https://de.wikipedia.org/wiki/Konditionalsatz)                                                                                                  |
| Linking sentences                | [Pronominaladverb](https://de.wikipedia.org/wiki/Pronominaladverb), [Konnektor (Grammatik)](<https://de.wikipedia.org/wiki/Konnektor_(Grammatik)>), Wiktionary zudem, hingegen, daraufhin                                       |
| Concession in writing            | [Konzessivsatz](https://de.wikipedia.org/wiki/Konzessivsatz), Wiktionary wenngleich, allerdings, freilich, indes                                                                                                                |
| Participles before nouns (C2.2)  | [Partizip](https://de.wikipedia.org/wiki/Partizip)                                                                                                                                                                              |
| Modal verbs that judge or report | Wiktionary epistemisch, sollen, wollen, scheinen, drohen                                                                                                                                                                        |
| Passive in every tense           | [Passiv (Grammatik)](<https://de.wikipedia.org/wiki/Passiv_(Grammatik)>)                                                                                                                                                        |
| zu + Partizip I                  | [Gerundiv](https://de.wikipedia.org/wiki/Gerundiv), [Partizip](https://de.wikipedia.org/wiki/Partizip), [Passiv (Grammatik)](<https://de.wikipedia.org/wiki/Passiv_(Grammatik)>)                                                |
| Formal genitive prepositions     | [Präposition](https://de.wikipedia.org/wiki/Pr%C3%A4position), Wiktionary angesichts, hinsichtlich, aufgrund, seitens                                                                                                           |
| Separable or inseparable?        | [Präfix- und Partikelverben im Deutschen](https://de.wikipedia.org/wiki/Pr%C3%A4fix-_und_Partikelverben_im_Deutschen)                                                                                                           |
| Ways to avoid the passive        | [Passivumschreibung](https://de.wikipedia.org/wiki/Passivumschreibung), [Passiv (Grammatik)](<https://de.wikipedia.org/wiki/Passiv_(Grammatik)>)                                                                                |
| Modal particles and adverbs      | [Abtönungspartikel](https://de.wikipedia.org/wiki/Abt%C3%B6nungspartikel)                                                                                                                                                       |

C2.2 unit 9 (`c2-2-stellung`) has no grammar tag of its own; it links the C2.1 topics on concession and linking sentences.

Not found or not stating the detail, so the lessons follow common textbook rules there: the -reich / -voll suffixes (the
Wiktionary page could not be fetched), the shift of time and place words in reported speech, the epistemic meanings of
müssen, dürfte and können and the modality verbs versprechen and pflegen, the dative with `von` after genitive
prepositions without a visible genitive, and the -keit / -heit choice (the page gives tendencies, not a full rule).

## Limits of the research

- The Deutsche Welle learner pages could not be fetched, and the Duden grammar pages are not freely readable, so the
  lessons lean on Wikipedia and Wiktionary for rules. Details those pages do not state (for example the order of
  dative and accusative pronouns, or the vowel change of the modal verbs) follow common textbook rules and the
  generated forms in `src/lib/german`.
- A native speaker (or a second authoritative grammar such as the Duden Grammatik) should still review each topic
  before the lessons are treated as final.
