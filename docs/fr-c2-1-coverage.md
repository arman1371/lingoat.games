# French C2.1 – syllabus research and plan

C2.1 is the first half of the C2 level for French (C2.2 is built in a sibling thread, `fr-c2-2`). Like German C2.1, it teaches
what is new at the top of the scale and does not re-teach earlier vocabulary: `src/content/fr-c2-1/content.test.ts` forbids
repeating a word card of an earlier French level (list the levels in `EARLIER_FRENCH` when they land on main). The French
content has **not yet been reviewed by a native speaker**.

Level id `fr-c2-1`; unit and activity ids start with `fr-c2-1-`; content lives in `src/content/fr-c2-1/`. Grammar tags and
mini lessons start with `fr-c21-`.

## What the research could and could not find

C2 is thinly documented, for French as for German. The official DELF/DALF pages of France Éducation international (DALF C2
description, candidate manual) answered **403 / access denied** from the build environment and could not be read. The
Riba / Beacco reference book _Niveaux C1/C2 pour le français_ (Didier 2016) is only known from catalogue entries; its thesis
version on HAL was blocked too. No C2 course book (Édito C1, Grammaire progressive perfectionnement) publishes its table of
contents in a readable form. The unit list therefore rests on the university course descriptions below, which are the best
that could be read, and on one rule: **a topic became a unit only when at least two sources point to it.** The weakest unit is
marked.

## Sources (what was actually read)

| Source                                                                                                                         | What it contributes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Universidad de Navarra, [Français C2.1A, teaching guide 2026-27][unav1] (**UN1**)                                              | Communicative resources (structured, nuanced discourse, defending a thesis, synthesising several sources, negotiation); grammar (complete mastery of tenses and moods, discursive values of tenses: présent historique, imparfait narratif, futur de conjecture; complex logical connectors; information structure: thématisation, focalisation; complex subordination); lexis (idioms, specialised terminology, abstract vocabulary); cultural themes (French and European political institutions, history, heritage, intellectual life and debates, humour, irony, cultural references). |
| Universidad de Navarra, [Français C2.2A, teaching guide 2025-26][unav2] (**UN2**)                                              | States that C2 is about vocabulary, nuances of words and proverbs rather than new grammar; dictation, press and literary texts, essays, document syntheses, debates and presentations, classical theatre, fables and poems.                                                                                                                                                                                                                                                                                                                                                                |
| UCLouvain, [LFRAN1501 Français, objectif C1][uclouvain] (**UCL**)                                                              | Humour and cinema as axes; complex sentences, all tenses, prefixes and suffixes, figures of speech and registers; expressing cause, consequence, hypothesis, concession and opposition; outcomes: document synthesis, critical opinion.                                                                                                                                                                                                                                                                                                                                                    |
| Université de Fribourg, [B2-C2 Français langue étrangère: Renforcement grammatical I][unifr] (**UFR**)                         | Tense relations and anteriority, past participle agreement, passé simple and passé antérieur, the subjunctive after conjunctions and verbs of opinion, relative clauses with the subjunctive, subjunctive or infinitive.                                                                                                                                                                                                                                                                                                                                                                   |
| [Wikipédia, Registre de langue][reg]; Wiktionnaire [Annexe: Préfixes][pre] and [Annexe: Suffixes][suf] (**WP**)                | Definitions and examples of familier / courant / soutenu / littéraire (trépasser, mourir, passer l'arme à gauche), prefix and suffix meanings used in the unit 1 lesson. The prefix page was only read up to the letter D: the meanings of mé-, sur- and sous- follow common teaching.                                                                                                                                                                                                                                                                                                     |
| Search snippets only, not opened: Reflex'Français C1/C2 course listing (reported speech, sequence of tenses, past subjunctive) | Weak support for the reported speech and sequence-of-tenses units; treated as a hint, not as evidence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

[unav1]: https://asignatura.unav.edu/francais-c21a/
[unav2]: https://asignatura.unav.edu/francais-c22-a-issa
[uclouvain]: https://uclouvain.be/cours-2024-lfran1501
[unifr]: https://www.unifr.ch/centredelangues/en/courses/semester/catalog/4951
[reg]: https://fr.wikipedia.org/wiki/Registre_de_langue
[pre]: https://fr.wiktionary.org/wiki/Annexe:Pr%C3%A9fixes_en_fran%C3%A7ais
[suf]: https://fr.wiktionary.org/wiki/Annexe:Suffixes_en_fran%C3%A7ais

## How C2 was split into C2.1 and C2.2

Agreed with the C2.2 thread. No source divides C2 into halves, so the split is a decision.

| Half                         | Topics                                                                                                                                                | Grammar and register                                                                                                                                                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **C2.1** (this level)        | registers and word nuance · humour and irony · French and EU institutions · debate                                                                    | word formation · narrative tenses (présent historique, passé simple, passé antérieur) · cause and consequence · concession, opposition, hypothesis · subjunctive, sequence of tenses, reported speech · mise en relief and nominalisation |
| **C2.2** (sibling, not here) | arts · literature and theatre · cinema · heritage, history, francophonie · law · media · civil society · climate · proverbs, idioms, figures of style | participe présent, gérondif · past participle agreement · passive and alternatives · complex relatives · advanced negation · conditional of reserve · infinitive · agreement with quantifiers                                             |

## Units

| #   | Unit (id suffix)                         | Evidence (at least two)                                                                          | Status                            |
| --- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------- |
| 1   | Registres et nuances (`registres`)       | UCL (registers, prefixes, suffixes) · UN2 (nuances of words) · UN1 (idioms, abstract lexis) · WP | done, 16 games                    |
| 2   | Humour et ironie (`humour`)              | UN1 (humour, irony, cultural references) · UCL (humour, wordplay)                                | done, 13 games                    |
| 3   | Temps du récit (`recit`)                 | UN1 (discursive values of tenses) · UFR (passé simple, passé antérieur)                          | done, 15 games                    |
| 4   | Cause et conséquence (`cause`)           | UCL · UN1 (complex logical connectors)                                                           | done, 14 games                    |
| 5   | Concession et hypothèse (`concession`)   | UCL (concession, opposition, hypothesis) · UN1                                                   | done, 14 games                    |
| 6   | Subjonctif et concordance (`subjonctif`) | UFR (subjunctive) · UN1 (complete mastery of moods) · Reflex'Français (snippet only)             | done, 15 games                    |
| 7   | Mise en relief (`relief`)                | UN1 (thématisation, focalisation) · UCL (complex sentences)                                      | done, 14 games                    |
| 8   | Institutions (`institutions`)            | UN1 (French and European institutions) only                                                      | done, 14 games, **single source** |
| 9   | Débat et argumentation (`debat`)         | UN1 (defending a thesis, synthesis) · UN2 (debates, essays) · UCL (critical opinion, synthesis)  | done, 14 games                    |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge". Vocabulary
cards are not repeated across units or earlier French levels. All nine units are in one pull request, with a full lesson for every `fr-c21-` mini lesson.

## Result

129 games and 254 vocabulary cards in 9 units, 13 grammar topics. Tags: topics `fr-c21-registers`, `fr-c21-humour`,
`fr-c21-narration`, `fr-c21-logic`, `fr-c21-mood`, `fr-c21-style`, `fr-c21-institutions`, `fr-c21-debate`; grammar
`fr-c21-word-formation`, `fr-c21-wordplay`, `fr-c21-passe-simple`, `fr-c21-narrative-tenses`, `fr-c21-cause-consequence`,
`fr-c21-concession`, `fr-c21-subjunctive`, `fr-c21-reported-speech`, `fr-c21-emphasis`, `fr-c21-nominalisation`,
`fr-c21-acronyms`, `fr-c21-argument`.

## What was checked in units 4 to 9, and what was not

Pages that were fetched and read are listed per topic in `docs/grammar-sources.md`. Several rules are textbook teaching that
no fetched page states:

- Unit 4: the difference between parce que (new reason) and puisque (known reason) only follows the Wiktionnaire gloss;
  that tellement … que and si bien que take the indicative, and ce n'est pas que + subjunctive, are textbook teaching.
  The Wikipédia page on subordinating conjunctions lists the connectors by value but states no moods.
- Unit 5: quand bien même + conditional, au cas où + conditional (the Académie française only), and quoique + subjunctive
  come from Wiktionnaire. The si-clause sequences (si + present → future etc.) and à condition que / pourvu que / à moins que
  - subjunctive are textbook teaching, supported by the Wikipédia list of subjunctive conjunctions.
- Unit 6: Wikipédia (Subjonctif, Concordance des temps, Discours indirect) state the tense shifts, the time words
  (hier → la veille, demain → le lendemain) and the exception for timeless truths. The page does not treat indirect
  questions with si, so that rule is textbook teaching. The subjunctive imparfait is mentioned only as marginal.
- Unit 7: Wikipédia (Phrase clivée, Dislocation, Nominalisation) support c'est … qui / que, dislocation and the
  definition and written-language use of nominalisation. The ce qui / ce que / ce dont … c'est construction is not on the
  clefted-sentence page, so it follows textbook teaching. The Mise en relief page treats a different, text-linguistic sense
  and was not used.
- Unit 8: this unit has a **single source in the syllabus research** (Navarra C2.1A lists French and European institutions).
  The content is checked against Wikipédia: Institutions de l'Union européenne (read up to character 100 000 of 141 539),
  the Cinquième République page (first 100 000 of 299 770 characters; article 49.3 was not covered) and Sigle. The page on
  capital letters answered 404, so the typographic rule for institution names follows common practice.
- Unit 9: Wikipédia (Argumentation) was read; it has nothing on counter-arguments or concession. Connecteur logique
  (linguistique) gives the categories (enumeration, opposition, concession, conclusion) but not every connector used here.
  The Débat page has none of the debate vocabulary (modérateur, temps de parole, réplique), which follows common usage.
