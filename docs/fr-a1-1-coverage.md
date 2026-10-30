# French A1.1 – syllabus research and plan

French is the second language of Lingoat (pilot). A1.1 is the first half of CEFR A1, the same job A1.1 does for
German: greet people, introduce yourself, numbers, family, likes, food, getting around town. The French content has
**not yet been reviewed by a native speaker**.

Level id `fr-a1-1`; unit and activity ids start with `fr-a1-1-`; content lives in `src/content/fr-a1-1/`. Route
prefix `/fr`; speech voice `fr-FR`.

## Sources (what was actually read)

| Source                                                                                                                                       | What it contributes                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [LMU Sprachenzentrum, "Français A 1.1 – Table des matières d'après le manuel Édito A1 (Didier)"][lmu]                                        | The first half of a widely used A1 course book as five units (Je suis… · Près de moi · Qu'est-ce qu'on mange ? · C'est où ? · C'est tendance !), each with communicative goals, grammar and vocabulary fields. This is the main model for the unit list.                                                                   |
| [Édito A1, guide pédagogique (Didier 2016), sommaire][edito]                                                                                 | Confirms the book's structure: unit 0 "Bienvenue !", then Et vous ? · On va où ? · Qu'est-ce qu'on mange ? · Les soldes, c'est parti ! · C'est quoi le programme ? for the first half; the second half (Félicitations !, Chez moi, Bonnes vacances, Pas de chance !, Beau travail !, Au grand air, C'était bien ?) is A1.2. |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul]                                                             | The A1 descriptor (CECRL 2001, p. 25), communicative aims (introduce yourself, likes, greet, tu/vous, shops and restaurants, date and time, directions, weather), vocabulary themes, and the language objectives (present of être, avoir, aller, faire; regular verbs; negation; articles; adjectives; prepositions of place; "il y a"). |

The official DELF A1 page of France Éducation international could not be opened from the build environment (it
blocks automated access), so it is **not** used as a source yet. Before release, check the unit list against its
exam description.

[lmu]: https://cms-cdn.lmu.de/media/50-zentren/sprachenzentrum/downloads/kursinhalt-franz-a1_1-neu.pdf
[edito]: https://www.klett-sprachen.de/downloads/14159/guide-pedagogique-a1/pdf
[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf

## How the units were chosen

The five Édito units of A1.1 cover: introducing yourself and personal information, where you live / likes /
family / jobs, food and shopping, the town and directions, and clothes / weather / describing things. The SUL
référentiel adds the first-contact rituals (greeting, tu/vous, thanking, leave-taking), numbers and dates. Together
that gives eight units, the same size as German A1.1:

| #   | Unit (id suffix)                    | Communicative goals                                                                      | Grammar                                                                                       |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1   | Bonjour ! (`bonjour`)               | greet, say goodbye, ask how someone is, thank, tu or vous                                | questions with "Comment …", tu / vous                                                          |
| 2   | Je me présente (`presenter`)        | give name, nationality, job, where you live; ask the same                                | subject pronouns, être, avoir, s'appeler, parler, habiter; articles le / la / l' / les; "quel" |
| 3   | Les nombres (`nombres`)             | numbers 0 to 100, age, phone number, prices                                              | il y a, "avoir … ans", numbers 70 to 99                                                       |
| 4   | Ma famille (`famille`)              | present your family, describe people                                                     | possessives mon / ma / mes …, adjectives (gender and number), c'est / il est                  |
| 5   | Goûts et loisirs (`loisirs`)        | say what you like, ask about hobbies                                                     | -er verbs, aimer / adorer / détester, ne … pas, jouer à / faire de                            |
| 6   | À table ! (`table`)                 | buy food, order in a restaurant, talk about meals                                        | partitive articles, un peu de / beaucoup de, prendre / vouloir, -ir verbs (choisir, finir)     |
| 7   | En ville (`ville`)                  | name places, ask the way, understand a simple route                                      | prepositions of place, à la / au / à l' / aux, the imperative, aller                           |
| 8   | Jours, heure et météo (`temps`)     | days, months, seasons, telling the time, weather, what people wear                       | futur proche, demonstratives ce / cette / ces, adjectives before and after the noun           |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge",
like the German units. Vocabulary cards of one unit are not repeated in another.

## Build plan

1. Language plumbing for a second pack: level loader, content / playability test harness for non-German
   content, `fr-a1-1` level switched to `available`, e2e entry.
2. Unit 1 as a complete vertical slice (all engines used there), then units 2 to 8 in small PRs.
3. French grammar lessons (`src/content/grammar/fr-a1-1.ts`) after the units, using the Grammar tab per language.

Open points: French nouns carry their article inside the word ("le pain", "l'eau"), because the `article` field
is German-only (der / die / das); the field that holds the target-language text is still named `de`.
