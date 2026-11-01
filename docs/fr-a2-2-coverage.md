# French A2.2 – syllabus research and plan

French A2.2 is the second half of CEFR A2 (Waystage), the counterpart of German A2.2. The French content has **not yet
been reviewed by a native speaker**.

Level id `fr-a2-2`; unit and activity ids start with `fr-a2-2-`; content lives in `src/content/fr-a2-2/`. The level is
built unit by unit, one pull request per unit, like French A1.1.

## Sources (what was actually read)

| Source                                                                                                | What it contributes                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LMU Sprachenzentrum, "Français A 2.2 – Table des matières d'après le manuel Édito A2 (Didier)"][lmu] | The model for the unit list: Édito A2 units 7 to 12 (À votre santé !, Dans les médias, Consommer responsable, Envie d'ailleurs ?, De jolis parcours, Soif de nature), each with communicative goals, grammar and vocabulary fields. Its A2.1 counterpart covers units 1 to 6. |
| [France Éducation international, DELF tout public niveau A2][delf]                                    | Exam format and the CEFR scale statements for A2 (short texts on concrete topics, simple connected sentences with "et", "mais", "parce que", written messages of 60 words).                                                                                                   |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul]                      | The A2 communicative aims, vocabulary themes and language objectives (interrogation, présent by verb bases, imparfait and passé composé in narration, relative pronouns, COD / COI, negation, adverbs, noun complements, cause, consequence and purpose).                     |
| Université de Bâle, Sprachenzentrum, French course overview                                           | Confirms the split: A2.2 follows Édito A2, chapters 7 to 12.                                                                                                                                                                                                                  |

The DELF page, which was bot-blocked when A1.1 was written, could be read this time. The Édito A2 book itself (and its
guide pédagogique) could not be read; the unit list comes from the LMU table of contents. Before release, compare the
units with the DELF A2 sample papers.

[lmu]: https://cms-cdn.lmu.de/media/50-zentren/sprachenzentrum/downloads/kursinhalte-franzoesisch-a2.2-neu.pdf
[delf]: https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a2
[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf

## Units

| #   | Unit (id suffix)                    | Édito A2 unit           | Communicative goals                                                              | Grammar                                                                                            |
| --- | ----------------------------------- | ----------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | À votre santé ! (`sante`)           | 7 À votre santé !       | advise, talk about health problems, give your point of view                      | COD and COI pronouns, superlative, interrogative pronouns                                          |
| 2   | Dans les médias (`medias`)          | 8 Dans les médias       | say what you prefer, show interest, write a positive or negative review          | cause and consequence, subjunctive of necessity, order of pronouns, adverbs in -ment               |
| 3   | Consommer responsable (`consommer`) | 9 Consommer responsable | wish, advise, ask for and offer a service                                        | present conditional, gerund, noun complements (en, de, à)                                          |
| 4   | Envie d'ailleurs ? (`voyage`)       | 10 Envie d'ailleurs ?   | structure a story, ask for travel information, visit a place, react to annoyance | passé composé and imparfait in narration, agreement of the past participle, demonstrative pronouns |
| 5   | De jolis parcours (`parcours`)      | 11 De jolis parcours    | talk about studies and projects, thank, write a formal message                   | cleft sentences (c'est … qui / que), reported speech in the present, the pronoun y                 |
| 6   | Soif de nature (`nature`)           | 12 Soif de nature       | express fear and ability, approve, protest                                       | imperative with pronouns, purpose (pour, afin de), passive voice                                   |

Passé composé, imparfait, y and en, relative pronouns, the comparison and the simple future belong to Édito units 1 to 6
(French A2.1) and are only reused here. The SUL list adds the noun complements (matière, usage) and the adverbs in
-ment, which sit in units 3 and 2. Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first
game and a final "… challenge". Word cards are never repeated: `content.test.ts` compares every card with the French
levels that come before A2.2 (A1.1, A1.2, A2.1, as soon as they are in the repository) and inside the level.

## Build status

1. Level plumbing (catalogue entry, content and playability tests, e2e spec, accessibility pages) and unit 1 `sante`
   (16 games, three grammar lessons): **done**.
2. Units 2 to 6: open.
