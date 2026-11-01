# French B1.2 – syllabus research and plan

French B1.2 is the second half of CEFR B1 ("Threshold"), the same job B1.2 does for German. It follows French A1.1
(the pilot). Level id `fr-b1-2`; unit and activity ids start with `fr-b1-2-`; content lives in `src/content/fr-b1-2/`;
route prefix `/fr`; speech voice `fr-FR`. The French content has **not yet been reviewed by a native speaker**.

## Sources (what was actually read)

| Source                                                                             | What it contributes                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Universität Basel, Sprachenzentrum – French course programme][basel]              | Its course "Französisch: B1.2" uses Édito B1 and covers **chapters 7 to 12**. This fixes which half of the book is B1.2. (The linked outline PDF only contains the title.)                                                                                                                                                                                    |
| [Alliance Française Leeds, "4-skill B1 curriculum" (Édito B1, Didier 2018)][leeds] | The twelve units of Édito B1 with communicative goals, grammar and vocabulary per unit. Units 7 to 12 (Et si on partait · La planète en héritage · Un tour en ville · Soif d'apprendre · Il va y avoir du sport · Cultiver les talents) are the model for the unit list. Leeds groups them into its own B1.4 to B1.6 blocks; only the unit contents are used. |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul]   | The B1 descriptor, communicative aims, vocabulary themes and the list of language objectives (tenses of the past, conditional, hypothesis systems, subjunctive, passive, reported speech and agreement of tenses, present participle and gerund, relative pronouns, logical connectors).                                                                      |
| [Université Paris Cité, LANSAD – Grammaire B1][paris]                              | A B1 grammar syllabus: past tenses, pronouns, the conditional, negation, simple relative pronouns, hypothesis with si, first subjunctive. Used to check the grammar order.                                                                                                                                                                                    |
| [Wikipédia: Futur simple][futur]                                                   | Endings, irregular stems and spelling of the simple future (unit 1 lesson).                                                                                                                                                                                                                                                                                   |

Not read: the Didier table of contents of Édito B1 (only the Leeds outline of it), the official DELF B1 description of
France Éducation international (bot-blocked in earlier sessions; not retried), and the Basel B1.2 outline (title only).
Before release, check the unit list against the DELF B1 exam description.

[basel]: https://sprachenzentrum.unibas.ch/en/angebot/einstufung/franzoesisch/french-course-program-overview
[leeds]: https://afleeds.org.uk/s/B1-curriculum.pdf
[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf
[paris]: https://u-paris.fr/eila/wp-content/uploads/sites/42/2022/09/Fiche-Grammaire-B1.pdf
[futur]: https://fr.wikipedia.org/wiki/Futur_simple

## How the units were chosen

Édito B1 units 1 to 6 (living together, memories and the past, work, consumption, French in the world, media) belong
to French B1.1 and are not repeated here. The six B1.2 units are split in two where they hold two topics, giving
twelve units like German B1.2. Grammar that the SUL référentiel and the Paris Cité syllabus place at B1 but Édito
teaches in units 1 to 6 (present subjunctive, plus-que-parfait, relative pronouns, nominalisation, passive) stays with
B1.1; this level only reuses it.

| #   | Unit (id suffix)                   | Édito unit                | Communicative goals                                        | Grammar                                                 |
| --- | ---------------------------------- | ------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| 1   | Et si on partait ? (`voyage`)      | 7 Et si on partait        | talk about and organise a trip, book a room or a flight    | futur simple, quand + future                            |
| 2   | Paysages et météo (`paysages`)     | 7                         | describe landscapes and the forecast, say what you will do | present / futur proche / futur simple, time markers     |
| 3   | Et si… ? (`hypotheses`)            | 7                         | make suggestions and hypotheses                            | si + présent / imparfait, conditionnel présent          |
| 4   | Regrets (`regrets`)                | 7                         | express regrets, imagine a different past                  | conditionnel passé, si + plus-que-parfait               |
| 5   | La planète en héritage (`planete`) | 8 La planète en héritage  | environment and protecting it                              | verbs and adjectives with prepositions                  |
| 6   | Convaincre (`convaincre`)          | 8                         | insist, convince, do two things at once, structure a talk  | gérondif, discourse connectors                          |
| 7   | Un tour en ville (`ville`)         | 9 Un tour en ville        | urban cleanliness, well-being, street art, complaints      | indefinite pronouns (quantities)                        |
| 8   | Rapporter (`rapporter`)            | 9                         | report speech, write a complaint, ask formal questions     | reported speech, agreement of tenses, formal questions  |
| 9   | Soif d'apprendre (`etudes`)        | 10 Soif d'apprendre       | studies and knowledge, worries, satisfaction               | compound relative pronouns                              |
| 10  | Cause et conséquence (`cause`)     | 10                        | give causes and consequences                               | cause and consequence connectors, participe présent     |
| 11  | Il va y avoir du sport (`sport`)   | 11 Il va y avoir du sport | sport and leisure, highlight, confirm / deny, future plans | double pronouns, c'est … qui / que, futur antérieur     |
| 12  | Cultiver les talents (`culture`)   | 12 Cultiver les talents   | books and art, opposition and concession                   | expressions of opposition, recognising the passé simple |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge".
Vocabulary cards are not repeated inside the level or from French A1.1 (and any earlier French level on main); the
content test checks this.

## Build plan

1. Level entry, `src/lib/french/future.ts` (futur simple and conditionnel présent forms), unit 1, its full lesson,
   e2e and a11y entries. **Done** (unit 1, `voyage`, 16 games).
2. Units 2 to 12, one PR each; forms for the other tenses (conditionnel passé, plus-que-parfait, futur antérieur,
   participe présent, gérondif) are added to `src/lib/french` as the units need them.
3. Full lessons are written with each unit (`src/content/grammar/fr-b1-2.ts`, linked in `unitTopics.ts`).
