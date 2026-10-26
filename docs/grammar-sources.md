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

## Limits of the research

- The Deutsche Welle learner pages could not be fetched, and the Duden grammar pages are not freely readable, so the
  lessons lean on Wikipedia and Wiktionary for rules. Details those pages do not state (for example the order of
  dative and accusative pronouns, or the vowel change of the modal verbs) follow common textbook rules and the
  generated forms in `src/lib/german`.
- A native speaker (or a second authoritative grammar such as the Duden Grammatik) should still review each topic
  before the lessons are treated as final.
