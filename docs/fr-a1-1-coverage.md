# French A1.1 – syllabus research and plan

French is the second language of Lingoat (pilot). A1.1 is the first half of CEFR A1, the same job A1.1 does for
German: greet people, introduce yourself, numbers, family, likes, food, getting around town. The French content has
**not yet been reviewed by a native speaker**.

Level id `fr-a1-1`; unit and activity ids start with `fr-a1-1-`; content lives in `src/content/fr-a1-1/`. Route
prefix `/fr`; speech voice `fr-FR`.

## Sources (what was actually read)

| Source                                                                                                | What it contributes                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LMU Sprachenzentrum, "Français A 1.1 – Table des matières d'après le manuel Édito A1 (Didier)"][lmu] | The first half of a widely used A1 course book as five units (Je suis… · Près de moi · Qu'est-ce qu'on mange ? · C'est où ? · C'est tendance !), each with communicative goals, grammar and vocabulary fields. This is the main model for the unit list.                                                                                 |
| [Édito A1, guide pédagogique (Didier 2016), sommaire][edito]                                          | Confirms the book's structure: unit 0 "Bienvenue !", then Et vous ? · On va où ? · Qu'est-ce qu'on mange ? · Les soldes, c'est parti ! · C'est quoi le programme ? for the first half; the second half (Félicitations !, Chez moi, Bonnes vacances, Pas de chance !, Beau travail !, Au grand air, C'était bien ?) is A1.2.              |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul]                      | The A1 descriptor (CECRL 2001, p. 25), communicative aims (introduce yourself, likes, greet, tu/vous, shops and restaurants, date and time, directions, weather), vocabulary themes, and the language objectives (present of être, avoir, aller, faire; regular verbs; negation; articles; adjectives; prepositions of place; "il y a"). |

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

| #   | Unit (id suffix)                | Communicative goals                                                | Grammar                                                                                        |
| --- | ------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 1   | Bonjour ! (`bonjour`)           | greet, say goodbye, ask how someone is, thank, tu or vous          | questions with "Comment …", tu / vous                                                          |
| 2   | Je me présente (`presenter`)    | give name, nationality, job, where you live; ask the same          | subject pronouns, être, avoir, s'appeler, parler, habiter; articles le / la / l' / les; "quel" |
| 3   | Les nombres (`nombres`)         | numbers 0 to 100, age, phone number, prices                        | il y a, "avoir … ans", numbers 70 to 99                                                        |
| 4   | Ma famille (`famille`)          | present your family, describe people                               | possessives mon / ma / mes …, adjectives (gender and number), c'est / il est                   |
| 5   | Goûts et loisirs (`loisirs`)    | say what you like, ask about hobbies                               | -er verbs, aimer / adorer / détester, ne … pas, jouer à / faire de                             |
| 6   | À table ! (`table`)             | buy food, order in a restaurant, talk about meals                  | partitive articles, un peu de / beaucoup de, prendre / vouloir, -ir verbs (choisir, finir)     |
| 7   | En ville (`ville`)              | name places, ask the way, understand a simple route                | prepositions of place, à la / au / à l' / aux, the imperative, aller                           |
| 8   | Jours, heure et météo (`temps`) | days, months, seasons, telling the time, weather, what people wear | futur proche, demonstratives ce / cette / ces, adjectives before and after the noun            |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge",
like the German units. Vocabulary cards of one unit are not repeated in another.

## Build plan

1. Language plumbing for a second pack: level loader, content / playability test harness for non-German
   content, `fr-a1-1` level switched to `available`, e2e entry. **Done** with unit 1.
2. Unit 1 as a complete vertical slice (all engines used there), then units 2 to 8 in small PRs.
   **Units 1 (`bonjour`, 15 games), 2 (`presenter`, 16 games), 3 (`nombres`, 16 games), 4 (`famille`, 16 games), 5 (`loisirs`, 16 games), 6 (`table`, 16 games), 7 (`ville`, 16 games) and 8 (`temps`, 16 games) are done: every A1.1 unit exists.** Conjugation works in French
   (`frTable`); numbers, phone numbers read in pairs and letter names come from `src/lib/french/numbers.ts`. French clock phrases (`src/lib/french/time.ts`) and prices (`priceToFrench`) are in; `src/lib/spoken.ts` picks the language for the Clock master and Market stand.
3. French grammar lessons: **done** for A1.1 (25 topics in `src/content/grammar/fr-a1-1.ts` and `fr-a1-1-b.ts`, one per `fr-` mini lesson, linked from the units in `unitTopics.ts`; sources in `docs/grammar-sources.md`). The Grammar tab lists them per language.

Open points: French nouns carry their article inside the word ("le pain", "l'eau"), because the `article` field
is German-only (der / die / das); the field that holds the target-language text is still named `de`.

## Cross-check against the official DELF A1 page

Arman supplied the official page [DELF tout public, niveau A1](https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a1)
(France Éducation international, saved as a PDF because the site blocks automated access; read on 2026-11-02). It
lists no topics or vocabulary. It gives the "can do" statements for the level and the exam format: oral
comprehension (4 exercises, 20 min), written comprehension (4 exercises, 30 min), written production (a form and a
message of at least 40 words, 30 min) and an individual oral production (5 to 7 min, three parts), each out of 25.

| "Je choisis le DELF A1 si je peux …"              | Where A1.1 teaches it                                                                    |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| me présenter et présenter quelqu'un               | units 1, 2 and 4 (introductions, être, mon / ma, c'est / il est)                         |
| comprendre des annonces et instructions orales    | listen games in every unit, directions and the imperative (unit 7)                       |
| comprendre des textes courts et simples           | quiz and dialogue games, menus and prices (unit 6), directions (unit 7)                  |
| remplir un formulaire (nom, nationalité, adresse) | units 2 and 3 (nationalities, age, phone number, address, the alphabet)                  |
| écrire une carte postale simple et brève          | **gap**: the spell and sentence games build words and sentences, nothing asks for a text |
| répondre à des questions simples sur moi          | units 1 to 3 and 5 (dialogues, likes, family)                                            |
| poser des questions simples                       | units 1 and 3 (comment, quel âge), unit 6 (ordering), unit 7 (où, asking the way)        |
| acheter quelque chose et payer                    | unit 6 (market game with French prices, restaurant dialogue)                             |

What the exam asks that the app cannot do yet: **speaking** (no engine records or scores speech; text-to-speech only
plays French) and **free writing** (the 40-word message; the engines check answers against known solutions). These
two skills would need a new kind of game, which is out of scope while only the 13 existing engines are used.

## Cross-check against a DELF A1 curriculum overview

Arman also supplied a three-page "Curriculum overview for DELF A1" from a language school
([PDF](https://www.dyplus.com.ng/wp-content/uploads/2020/08/Updated-Curriculum-For-DELF-A1.pdf)), read on 2026-11-02.
It is a school's teaching plan, **not** the official DELF référentiel (it is useful because it names topics, which the
official page does not), and it spreads all of A1 over nine units, so the later units belong to A1.2. Result for A1.1:

| Topic in the overview                                                          | Status in A1.1                                                                      |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| greetings, introducing oneself, être / s'appeler, countries and nationalities  | covered: units 1 and 2                                                              |
| numbers to 99, alphabet, days and months, time, weather                        | covered: units 3 and 8                                                              |
| articles, avoir, possessives, regular -er verbs, negation, quel, likes         | covered: units 2 to 5                                                               |
| place in town, giving directions, faire, near future, imperative, on = we      | covered: units 5, 7 and 8                                                           |
| professions and gender, describing someone, family, colours                    | covered: units 2, 4 and 8                                                           |
| buying and selling, restaurant menu, quantities (pas de, assez / trop de), -ir | covered: unit 6                                                                     |
| devoir, pouvoir + infinitive, il faut + infinitive                             | **gap**: vouloir only; no unit teaches devoir, pouvoir or il faut                   |
| prepositions with countries (en France, au Canada, aux États-Unis)             | **thin**: only a tip in the "au, aux, du, des" lesson, no game                      |
| tonic pronouns (moi, toi, lui …)                                               | **thin**: only "moi non plus" in unit 5                                             |
| the verb dire, making an appointment                                           | **gap**: appointment only as a plan in the unit 8 dialogue                          |
| pronominal verbs, passé composé, avoir mal à, recent past                      | not A1.1: belong to French A1.2 (daily routine, health), as in the overview's units |
| pronunciation (liaison, nasal vowels, eu / œu, s as [s] or [z])                | **gap**: the app has listening games but no pronunciation lessons                   |

Suggested follow-up for the French A1.2 thread: devoir / pouvoir / il faut and the tonic pronouns are the A1.1 items
the overview teaches early, so they fit in its first units. Direct and indirect object pronouns, relative qui / que, en, comparatives and the imparfait in the overview are for the
A1.2 and A2 threads to place.
