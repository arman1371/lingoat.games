# French A1.2 – syllabus research and plan

A1.2 is the second half of CEFR A1 in French, the same job A1.2 does for German: describe your day, family events,
your home, a holiday, your health, study and work, living in town or in the countryside, and talking about learning
French. It continues [French A1.1](fr-a1-1-coverage.md). The French content has **not yet been reviewed by a native
speaker**.

Level id `fr-a1-2`; unit and activity ids start with `fr-a1-2-`; content lives in `src/content/fr-a1-2/`. Route prefix
`/fr`; speech voice `fr-FR`.

## Sources (what was actually read)

| Source                                                                                           | What it contributes                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Édito A1, guide pédagogique (Didier 2016)][edito] – overview page of units 6 to 12              | The second half of the course book as seven units: Félicitations ! · Chez moi · Bonnes vacances ! · Pas de chance ! · Beau travail ! · Au grand air · C'était bien ?. Each overview page lists communication goals, grammar (passé composé with avoir and être, object pronouns, y, comparisons, obligation, si + présent, relative pronouns qui / que …) and vocabulary fields. Main model for units 2 to 8. |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul] – level A1 page | Confirms the daily routine as an A1 theme ("les activités quotidiennes", "habitudes quotidiennes, un emploi du temps"), the transport / holiday / travel vocabulary, the passé composé (formation and agreement with être) and "raconter une expérience personnelle au passé". Basis for unit 1.                                                                                                              |

Checked against the French A1.1 pages (`docs/fr-a1-1-coverage.md`): the Édito units 0 to 5 are A1.1, units 6 to 12 are
A1.2, which is why the Édito sommaire is the unit list here.

**What could not be read:** the LMU Sprachenzentrum "Français A 1.2" table of contents (the A1.1 sibling file exists,
the A1.2 URL returns 404) and the official DELF A1 page of France Éducation international (bot-blocked). Before
release, check the unit list against the DELF A1 exam description.

[edito]: https://www.klett-sprachen.de/downloads/14159/guide-pedagogique-a1/pdf
[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf

## How the units were chosen

Édito has seven second-half units; the SUL référentiel adds the daily routine, which A1.1 only touches (days and the
time of day, no routine verbs). That makes eight units, the same size as French A1.1:

| #   | Unit (id suffix)               | Édito unit          | Communicative goals                                                  | Grammar                                                                                                       |
| --- | ------------------------------ | ------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1   | Ma journée (`journee`)         | SUL (daily habits)  | describe a routine, say how often, put the day in order, give a time | pronominal verbs, toujours / souvent / ne … jamais, d'abord / enfin, vers / de … à                            |
| 2   | Félicitations ! (`fetes`)      | 6 Félicitations !   | family events, congratulate, describe looks and character            | passé composé with avoir, past and future time markers                                                        |
| 3   | Chez moi (`logement`)          | 7 Chez moi          | rooms, furniture, report a problem at home, house rules              | object pronouns le / la / l' / les, more place prepositions, y, obligation and prohibition                    |
| 4   | Bonnes vacances ! (`vacances`) | 8 Bonnes vacances ! | book and plan a trip, say a preference, write a postcard             | comparison with plus / moins / aussi … que, -ir verbs (partir), passé composé with être, c'était / il y avait |
| 5   | Pas de chance ! (`sante`)      | 9 Pas de chance !   | body, doctor and pharmacy, complain, explain, give advice            | pronominal passé composé, devoir / falloir, lui / leur, pourquoi / parce que                                  |
| 6   | Beau travail ! (`travail`)     | 10 Beau travail !   | university and work, ability, goals                                  | si + présent, depuis / pendant, qui / que, intensity                                                          |
| 7   | Au grand air (`nature`)        | 11 Au grand air     | town and countryside, nature, a change of life                       | plus de / moins de + noun, comparison of equality, y                                                          |
| 8   | C'était bien ? (`langues`)     | 12 C'était bien ?   | learning French, difficulties, encourage, agree and disagree         | me / te / nous / vous as objects, review of the tenses                                                        |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge".
Vocabulary cards are never repeated across French levels: `src/content/fr-a1-2/content.test.ts` compares A1.2 with every
earlier French level.

## Build plan

1. Plumbing: level entry in `levels.ts`, tags and mini lessons prefixed `fr-`, full grammar lessons
   (`src/content/grammar/fr-a1-2.ts`, topic level `fr-a1-2`), unit links in `unitTopics.ts`, e2e entry.
   **Done** with unit 1.
2. Units, one pull request each. **Unit 1 (`journee`, 16 games) is done.** Units 2 to 8 follow, each with its
   grammar lessons so that every `fr-` mini lesson has its full lesson.

## Unit 1 – Ma journée (`journee`)

- Vocabulary fields: Morning and evening (10) · Daily activities (10) · Parts of the day (9) · How often, and in what
  order (16).
- Grammar: pronominal verbs (`fr-pronominal`), frequency adverbs and ne … jamais (`fr-frequency`), sequence words and
  clock prepositions (`fr-sequence`).
- Games: 4 flashcard sets, picture quiz, listening, pronominal conjugation tables, 3 gap fills, sentence builder,
  spelling, dialogue (3 scenes), blitz, challenge.
