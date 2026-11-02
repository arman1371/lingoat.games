# French A2.1 – syllabus research and plan

French A2.1 is the first half of CEFR A2, the same job A2.1 does for German: tell a life story in the past, talk about
leisure, memories, housing, people, the future, cooking and school. The French content has **not yet been reviewed by
a native speaker**.

Level id `fr-a2-1`; unit and activity ids start with `fr-a2-1-`; content lives in `src/content/fr-a2-1/`. Grammar tags
and mini lessons are prefixed `fr-a21-` so they cannot clash with the ones of the parallel French levels. Route prefix
`/fr`; speech voice `fr-FR`.

## Sources (what was actually read)

| Source                                                                                                | What it contributes                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [LMU Sprachenzentrum, "Français A 2.1 – Table des matières d'après le manuel Édito A2 (Didier)"][lmu] | The first half of a widely used A2 course book as six units (Nouvelles vies · Je me souviens · Comme à la maison · Tous pareils, tous différents · En route vers le futur ! · En cuisine) with communicative goals, grammar and vocabulary fields. This is the main model for the unit list.                                                                             |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul]                      | The A2 descriptor (CECRL 2001, p. 25), the communicative aims (life path, past and future, comparing, advice, description), the vocabulary themes (activities, arts, food, people, clothes, health, housing, education, work, computing) and the language objectives (passé composé, imparfait, futur simple, negatives, time markers, comparison, relatives, pronouns). |
| [Università di Bolzano, Français A2.1 syllabus (Prêt-à-parler 2)][unibz]                              | A second, independent A2.1 course outline: daily routine, neighbourhood, school memories, appearance and personality, health, shopping, education. Confirms the passé composé / imparfait / comparative / `en` / direct-object-pronoun core of A2.1.                                                                                                                     |

The official DELF A2 pages of France Éducation international (and the FEI page for DELF A2 specifically) could not be
opened from the build environment (they answer "Accès refusé" to automated requests), so they are **not** used as a
source yet. Before release, check the unit list against the exam description.

[lmu]: https://cms-cdn.lmu.de/media/50-zentren/sprachenzentrum/downloads/kursinhalte-franzoesisch-a2.1.pdf
[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf
[unibz]: https://guide.unibz.it/assets/languages/language-courses/sillabi/Other-languages/Francais-A2.1-v2.pdf

## Units

The six Édito A2 units are the backbone; the SUL référentiel adds education and customs themes. Eight units, each of 10
to 16 games with at least 6 engines, an easy first game and a final "… challenge". Vocabulary cards are never repeated
from an earlier French level (the content test checks this against `fr-a1-1` and `fr-a1-2`).

| #   | Unit (id suffix)               | Édito A2 unit / source                          | Communicative goals                                                       | Grammar                                                                                                              |
| --- | ------------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | Nouvelles vies (`parcours`)    | Unité 1 – Nouvelles vies                        | tell a life story, studies and work, creative jobs                        | passé composé (avoir / être), irregular participles, ne … rien / personne / jamais / plus, il y a / pendant / depuis |
| 2   | Sorties et culture (`sorties`) | Unité 1 (loisirs), SUL "loisirs, arts"          | suggest, accept and refuse an outing, talk about culture and open-air fun | invitations, `on`, pronoun `y`, passé composé of pronominal verbs                                                    |
| 3   | Je me souviens (`souvenirs`)   | Unité 2 – Je me souviens                        | tell a memory, say what you liked, describe landscapes and the weather    | imparfait, pronouns `y` and `en`, adjective position                                                                 |
| 4   | Comme à la maison (`logement`) | Unité 3 – Comme à la maison                     | describe and rent a flat, express disappointment, console someone         | relative pronouns qui / que / où, comparison, condition with si                                                      |
| 5   | Tous différents (`portrait`)   | Unité 4 – Tous pareils, tous différents         | describe looks and character, pay a compliment                            | comparison of equivalence, chaque / tout, possessive pronouns                                                        |
| 6   | Vers le futur (`futur`)        | Unité 5 – En route vers le futur !              | make predictions and plans, describe what a thing is for, technology      | futur simple, si + présent + futur, on                                                                               |
| 7   | En cuisine (`cuisine`)         | Unité 6 – En cuisine                            | follow a recipe, order and complain in a restaurant                       | quantities and `en`, obligation and prohibition, ne … que                                                            |
| 8   | École et formation (`etudes`)  | SUL "système éducatif", unibz "school memories" | talk about school and training                                            | imparfait and passé composé together, cause (parce que, à cause de, grâce à)                                         |

## Build plan

1. Foundations and unit 1: `src/lib/french/tenses.ts` (passé composé, imparfait and futur simple generated from the
   infinitive, with tests), the `fr-a2-1` pack with its shared tests and an e2e spec, the level switched to
   `available`, tags, mini lessons. **Done** with unit 1 (`parcours`, 16 games).
2. Units 2 to 8 in one pull request (Arman: one PR per level). Each unit brings its full grammar lessons
   (`src/content/grammar/fr-a2-1.ts` and `fr-a2-1-b.ts`), because the grammar test requires every French unit to link
   written topics. **Done:** all eight units, 16 games each (see the table above).

**Overlap with French A1.2:** A1.2 already teaches pronominal verbs, ne … jamais, d’abord / ensuite / enfin, the passé composé
with avoir and il y a / dans / dernier. A2.1 therefore adds the être auxiliary, irregular participles, rien / personne /
plus / pas encore and pendant / depuis / en, and re-uses the A1.2 words only inside exercises, never as new word cards.

**Overlap inside A2.1 and with A1:** the content test checks that no word card repeats an earlier French level or another
unit of A2.1. Words that A1.1, A1.2 or unit 1 already teach (for example _l'enfance_, _grandir_, _mince_, _timide_,
_drôle_, _l'addition_, _le serveur_, _le baccalauréat_, _le diplôme_, _emménager_) are used inside sentences only; the new
cards use other words (_la nostalgie_, _svelte_, _réservé_, _rigolo_, _le plat du jour_, _le brevet_ …).

**Sources for units 3 to 8:** the same three course outlines (LMU / Édito A2 units 2 to 6, SUL référentiel, unibz). The
Édito unit "Tous pareils, tous différents" gives unit 5, "En route vers le futur !" unit 6 and "En cuisine" unit 7; unit 8 comes from the SUL education
theme and the unibz "school memories" topic. As for units 1 and 2, the DELF pages could not be read.
