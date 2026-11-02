# French C1.2 – syllabus research and plan

French C1.2 is the second half of CEFR C1 in Lingoat, the same job C1.2 does for German: demanding texts, fluent
and well-structured expression on society, culture and science. The French content has **not yet been reviewed by a
native speaker**.

Level id `fr-c1-2`; unit and activity ids start with `fr-c1-2-`; content lives in `src/content/fr-c1-2/`. Route
prefix `/fr`; speech voice `fr-FR`. Grammar tags and mini lessons are prefixed `fr-c12-`, full lessons are in
`src/content/grammar/fr-c1-2.ts` (topic level `fr-c1-2`).

## Sources (what was actually read)

| Source                                                                                         | What it contributes                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Université Savoie Mont Blanc, DUEF C1 syllabus 2024–2025][duef]                               | A 12-week C1 programme with themes, vocabulary fields and grammar: justice, democracy, change, climate, culture, feminism · **le jeu** (participe présent, gérondif, adjectif verbal) · **la famille** (registres de langue) · **vieillir** (reprise pronominale et nominale) · **santé** (temps du récit au passé) · **solidarité** (modaliser son discours) |
| [Université Savoie Mont Blanc, CU-FLE C1 summer programme][summer]                             | Eight themes with goals, grammar and cultural knowledge. The July half (sport and leisure with expression du but and complex relative pronouns; ecology with futur and gérondif; history and society with concordance des temps) and the Francophonie / registres weeks                                                                                       |
| [Université de Bâle, Sprachenzentrum – French course programme][basel]                         | Maps C1.2 to Édito C1 chapters 7 to 12 (no themes listed on the page)                                                                                                                                                                                                                                                                                         |
| [Édito C1, Klett page][klett] and Didier's description of the 2018 edition                     | The C1 course book: 12 thematic lessons in the new edition, a DALF C1 mock exam, argumentative essay, summary, synthesis and oral presentation as the production tasks; themes include media education, gender, literature, ethics, history, work                                                                                                             |
| [NOVA FCSH Lisboa, Français C1.2 programme][lisbon]                                            | A C1.2 course built around "Regards croisés": identity, languages and cultures, representations and stereotypes                                                                                                                                                                                                                                               |
| [UCLouvain, LFRAN1501 (objective C1)][uclouvain]                                               | Humour and cinema as the two axes of a C1 general course                                                                                                                                                                                                                                                                                                      |
| [Université de Fribourg, Centre de langues – C1–C2 academic French][fribourg]                  | Synthesis, reformulation, organising a written text and argumentation (the basis of the last unit)                                                                                                                                                                                                                                                            |
| [France Éducation international, DALF C1][dalf] and the Aix-Marseille / Nancy-Metz exam sheets | Exam format: synthesis and argumentative essay in the written production, monologue plus interaction in the oral part                                                                                                                                                                                                                                         |

Read as search-result summaries only (the pages themselves were not opened): UCLouvain, Fribourg, Avignon and the DALF C1 format.

Not retrievable or not used: the official DALF C1 description pages of France Éducation international are
bot-blocked in the build environment (the search-result summaries of the exam format were used, not the page itself),
the table of contents of Édito C1 units 7 to 12 and of Alter Ego+ 5 could not be found online (the Didier and Klett
pages describe the book but do not list the units), and the Université d'Avignon DU C1 syllabus could not be read
as text. **Before release, check the unit list against the DALF C1 exam description.**

[duef]: https://www.univ-smb.fr/accents/wp-content/uploads/sites/9/2025/03/syllabus-du-c1-2024-2025.pdf
[summer]: https://www.univ-smb.fr/accents/wp-content/uploads/sites/9/2024/02/syllabus-c1_un-ete-alpin_cours-de-francais-accents.pdf
[basel]: https://sprachenzentrum.unibas.ch/en/angebot/einstufung/franzoesisch/french-course-program-overview
[klett]: https://www.klett-sprachen.de/edito-c1-2e-edition/t-521/9783125300828
[lisbon]: https://fenix.letras.ulisboa.pt/downloadFile/281582350893149/Programa%20Turma%20Frances%20C1.2-2022-2023.docx
[uclouvain]: https://uclouvain.be/cours-lfran1501
[fribourg]: https://www.unifr.ch/centredelangues/en/courses/semester/catalog/3767
[dalf]: https://www.france-education-international.fr/article/dalf-c1

## How the units were chosen

A topic became a unit when at least two of the sources above treat it at C1. The sibling level C1.1 is built in a
parallel thread; to keep the halves apart, C1.2 takes the **second half of the Savoie DUEF programme**
(games, family, ageing, health, solidarity), the July half of the summer programme (sport, ecology, history) and the
themes of the C1.2 courses (identities, humour and cinema, Francophonie), and ends like the exam does, with
argumentation. Justice, democracy, change, culture and feminism are left to C1.1.

| #   | Unit (id suffix)                     | Themes                                                         | Grammar                                                         | Sources                     |
| --- | ------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------- |
| 1   | Quitte ou double ! (`jeu`)           | games, gambling, addiction, prevention, play therapy           | participe présent, gérondif, adjectif verbal                    | DUEF                        |
| 2   | Ma belle famille (`famille`)         | filiation, family types, tensions, upbringing and transmission | registres de langue                                             | DUEF                        |
| 3   | Vieillir : une aventure (`vieillir`) | ageing, housing, retirement, "bien vieillir"                   | reprise pronominale et nominale                                 | DUEF                        |
| 4   | Santé 3.0 (`sante`)                  | consultation, treatment, disability, medical ethics, science   | temps du récit au passé                                         | DUEF                        |
| 5   | Solidarité (`solidarite`)            | mutual help, volunteering, motives                             | modaliser son discours                                          | DUEF                        |
| 6   | Sport et loisirs (`sport`)           | sport, health, leisure, advice                                 | expression du but, pronoms relatifs composés                    | summer programme            |
| 7   | Écologie (`ecologie`)                | activism, pollution, diet and environment                      | futur, participe présent et gérondif                            | summer programme, DUEF      |
| 8   | Histoire et société (`histoire`)     | nation, citizens, eras, capital punishment, globalisation      | expression du passé, concordance des temps, marqueurs temporels | summer programme            |
| 9   | Regards croisés (`identites`)        | identity, languages and cultures, stereotypes, laïcité         | nuance and comparison                                           | Lisbon, summer programme    |
| 10  | Rire et cinéma (`humour`)            | humour, film, appreciation                                     | expression de l'appréciation                                    | UCLouvain, summer programme |
| 11  | La Francophonie (`francophonie`)     | francophone world, varieties of French, imagery                | prépositions, hypothèse                                         | summer programme            |
| 12  | Argumenter (`argumenter`)            | synthesis, argumentative essay, oral presentation              | connecteurs logiques, indicatif ou subjonctif                   | DALF C1, Fribourg, DUEF     |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge".
Vocabulary cards are not repeated across units or earlier French levels (checked by `content.test.ts`; levels built in
parallel are checked once they are on `main`).

## Build plan

1. Level plumbing, e2e entry, grammar lessons and unit 1 (`jeu`, 15 games). **Done.**
2. Units 2 to 12, one PR per unit, each with its grammar lessons (tags `fr-c12-…`, mini lessons, full lessons,
   `unitTopics.ts`) and its row in the e2e spec.
