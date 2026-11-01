# French B2.1 – syllabus research and plan

French B2.1 is the first half of CEFR B2 (Vantage), the counterpart of German B2.1: argue and give opinions, talk about
society, health, migration and cities, and tell and report in the full range of past tenses. The French content has
**not yet been reviewed by a native speaker**.

Level id `fr-b2-1`; unit and activity ids start with `fr-b2-1-`; content lives in `src/content/fr-b2-1/`. Route
prefix `/fr`; speech voice `fr-FR`. Grammar tags and mini lessons start with `fr-`.

## Sources (what was actually read)

| Source                                                                                                                                                                     | What it contributes                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Alter Ego + 4 (B2), guide pédagogique (Hachette 2015), sample pages published by Hueber][ae4plus]                                                                         | Eight dossiers with their communicative goals, grammar and vocabulary fields: Identités, Santé !, Migrations, Cités, Travailler, Sensations, Francophonies, Perspectives. Dossiers 1 to 4 are the model for this level; 5 to 8 are left for B2.2.                                                              |
| [Alter Ego 4 (B2), guide pédagogique (Hachette 2008), published by Hueber][ae4]                                                                                            | The previous edition, nine dossiers: identity and immigration, love, habitat and heritage, coming of age and education, work, happiness and gastronomy, values and tolerance, regions and Europe, globalisation. Confirms identity, life stages, habitat and the passé simple / passé antérieur as B2 content. |
| [UNAM FES Iztacala, "Tableau de contenus Français 14" for Le Nouvel Édito B2, units 7 to 9][unam]                                                                          | Édito B2 grammar notions: conjunctions with the indicative or the subjunctive, subjonctif passé, feelings, certainty and doubt, expressions of purpose, comparison. Used to check the subjunctive units.                                                                                                       |
| [Sprachenzentrum Universität Basel, French course programme][basel] and [Paderborn ZfS, French B2.1][paderborn]                                                            | Two university language centres: Édito B2 units 1 to 5 are taught as B2.1 and units 6 to 10 as B2.2, and the B2.1 descriptor (opinions, arguments, differentiated feelings, structured texts). Chapter titles are not listed there.                                                                            |
| Search results listing the Édito B2 unit titles (unité 1 "À mon avis", 2 "Quelque chose à déclarer ?", 3 "Ça presse !", 4 "Partir", 5 "Histoire de…", 6 "À votre santé !") | Titles only (an older edition's table of contents); no grammar detail. Used only as a second witness for the opinion, travel and health units.                                                                                                                                                                 |

[ae4plus]: https://shop.hueber.de/media/hueber_dateien/Internet_Muster/Red6/9783190533725_Muster.pdf
[ae4]: https://edit.hueber.de/media/36/AE4_Guide_pedag.pdf
[unam]: https://sitios.iztacala.unam.mx/idiomas/wp-content/uploads/sites/26/2024/05/Niveau_14_Edito_B2_Didier.pdf
[basel]: https://sprachenzentrum.unibas.ch/en/angebot/einstufung/franzoesisch/french-course-program-overview
[paderborn]: https://www.uni-paderborn.de/en/zfs/language-courses-for-students/french/french-b21

**Not read:** the official DELF B2 exam description of France Éducation international was not opened (the site blocked
automated access for A1; it was not retried), the Klett table of contents of Édito B2 (4th edition) is not on the
product page, and a 10 MB demo PDF of an older Édito B2 could not be downloaded. Before release, check the unit list
against the DELF B2 exam description.

## How the units were chosen

A topic is a unit only when at least two of the sources above teach it. Alter Ego + 4 is the backbone: its dossiers 1 to 4
(and the matching dossiers of the 2008 edition) are B2.1, dossiers 5 to 8 (work, the senses and arts, francophonie, civic
engagement) are kept for B2.2. Because a dossier is much larger than a Lingoat unit, each one is split in two or three units
along its "Des mots et des formes" pages.

| #   | Unit (id suffix)                       | Topics and goals                                                | Grammar                                                              | Sources                                             |
| --- | -------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------- |
| 1   | Identités (`identite`)                 | origins, roots, belonging, stereotypes, personality traits      | imparfait or passé composé, plus-que-parfait                         | Alter Ego + 4 D1, Alter Ego 4 D1                    |
| 2   | Parcours de vie (`parcours`)           | life stages, family, adoption, growing up, memories             | agreement of the past participle, conjunctions of time               | Alter Ego + 4 D1, Alter Ego 4 D4                    |
| 3   | Santé ! (`sante`)                      | body, symptoms, doctors and medicines, advice, sport and doping | giving advice: conditional, impératif, il vaut mieux que             | Alter Ego + 4 D2, Édito B2 U6                       |
| 4   | Doute et certitude (`doute`)           | opinions, certainty and doubt                                   | subjonctif présent, indicative or subjunctive after verbs of opinion | Alter Ego + 4 D2, Édito B2 U7–9 (UNAM), Édito B2 U1 |
| 5   | Sentiments et jugements (`sentiments`) | feelings, judgements, apparence physique                        | subjunctive or infinitive, subjonctif passé                          | Alter Ego + 4 D2, Édito B2 U7–9 (UNAM)              |
| 6   | Migrations (`migrations`)              | reasons for moving, migrants, mobility, welcoming countries     | expressing the reason and the result                                 | Alter Ego + 4 D3, Alter Ego 4 D1, Édito B2 U4       |
| 7   | Démarches et voyages (`demarches`)     | visa, administrative letters, tourism, describing a place       | expressing a purpose (pour que, afin que)                            | Alter Ego + 4 D3, Édito B2 U4, UNAM (but)           |
| 8   | Cause et conséquence (`cause`)         | arguing: because, so that, as a result                          | cause, consequence                                                   | Alter Ego + 4 D3, Édito B2 U7–9 (UNAM)              |
| 9   | Lire un récit (`recit`)                | narrative texts, a travel novel, anecdotes                      | passé simple, passé antérieur (recognition)                          | Alter Ego + 4 D3, Alter Ego 4 D1                    |
| 10  | Cités (`cites`)                        | old and modern cities, the city of the future, small ads        | relative pronouns qui, que, où, dont                                 | Alter Ego + 4 D4, Alter Ego 4 D3                    |
| 11  | Logement (`logement`)                  | flatshares, describing a flat, complaints                       | compound relatives (lequel, auquel, duquel)                          | Alter Ego + 4 D4, Alter Ego 4 D3                    |
| 12  | La ville de demain (`ville`)           | pollution, cars and city centres, heritage, citizen action      | the passive and the pronominal passive, opposition and concession    | Alter Ego + 4 D4, Alter Ego 4 D3                    |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge". Word
cards are not repeated in another unit or in an earlier French level (`content.test.ts`).

## Build plan

1. Plumbing and **unit 1** (`identite`, 15 games): level entry in `levels.ts` (French levels are sorted in CEFR order),
   tags, mini lessons with their two full grammar lessons (`src/content/grammar/fr-b2-1.ts`), shared test harnesses, e2e
   spec. **Done.**
2. Units 2 to 12 in separate PRs. Every French mini lesson needs a full lesson, so each unit PR adds its own topics (topic level
   `fr-b2-1`, linked from the unit in `unitTopics.ts`).

French has no generator for the compound tenses, the conditional or the subjunctive yet, so the forms of these tables are
written by hand (`frForms` in `fr-b2-1/helpers.ts`).
