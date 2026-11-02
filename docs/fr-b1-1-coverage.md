# French B1.1 – syllabus research and plan

French B1.1 is the first half of CEFR B1, the same job B1.1 does for German: talk about experiences, give and
justify opinions, handle everyday situations in detail. Level id `fr-b1-1`; unit and activity ids start with
`fr-b1-1-`; content lives in `src/content/fr-b1-1/`. The French content has **not yet been reviewed by a native
speaker**. Follow `docs/fr-a1-1-coverage.md` for the conventions that all French levels share.

## Sources (what was actually read)

| Source                                                                           | What it contributes                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Alliance Française Leeds, "4-Skill B1 – Curriculum"][leeds]                     | Unit list of _Édito B1_ (Didier, 2018) with communication, grammar and vocabulary per unit: Vivre ensemble · Le goût des nôtres · Travailler autrement · Date limite de consommation · Le français dans le monde · Médias en masse (units 1 to 6), then Et si on partait · La planète en héritage · Un tour en ville · Soif d'apprendre · Il va y avoir du sport · Cultiver les talents (7 to 12). |
| [Universität Basel, Sprachenzentrum, French course overview][basel]              | Confirms the split: French B1.1 uses _Édito B1_ chapters 1 to 6, B1.2 chapters 7 to 12. This is why B1.1 follows units 1 to 6.                                                                                                                                                                                                                                                                     |
| [LMU Sprachenzentrum, "Inhalte B1 (u. 1 – u. 3)" from _Saison 3_ (Didier)][lmu]  | A second course book for the first half of B1: Prendre le temps · Apprendre autrement · Développer son esprit critique, with communication, grammar (but, souhait, pronoms possessifs, relative pronouns, past participle, passive, conditional of uncertainty) and vocabulary fields.                                                                                                             |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul] | The B1 descriptor (CECRL 2001), the communicative aims (advise, describe people, narrate, express feelings, hypotheses, argue, report), vocabulary themes and the language objectives (subjunctive, tenses of the past, pronouns, relative pronouns, negation, passive, reported speech).                                                                                                          |
| [Hueber, _Alter Ego 3_ Guide pédagogique, sommaire and introduction][ae3]        | Confirms the shape of a B1 course: nine dossiers, around 120 hours, preparing for the DELF B1. The dossier titles themselves were not in the pages that could be read.                                                                                                                                                                                                                             |

**Could not be read:** the official DELF B1 description of France Éducation international (the site blocks automated
access, error ERR-BOT-403), the full table of contents of _Édito B1_ from the publisher, and the dossier titles of
_Alter Ego 3_. Before release, check the unit list against the DELF B1 exam description.

[leeds]: https://static1.squarespace.com/static/56d0b039d51cd4e1cdf931e7/t/62f2b158418c771af433efd6/1660072286819/B1+curriculum.pdf
[basel]: https://sprachenzentrum.unibas.ch/en/angebot/einstufung/franzoesisch/french-course-program-overview
[lmu]: https://cms-cdn.lmu.de/media/50-zentren/sprachenzentrum/downloads/kursinhalte-franz-b1-unite-1-bis-3.pdf
[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf
[ae3]: https://shop.hueber.de/media/hueber_dateien/Internet_Inhaltsverz/Red3/978-3-19-023329-8_Inhalt.pdf

## How the units were chosen

A topic is a unit when _Édito B1_ units 1 to 6 (the B1.1 half) teach it, or when the second course book (_Saison 3_,
units 1 to 3) and the SUL référentiel for B1 agree on it. Ten units:

| #   | Unit (id suffix)                        | Source                | Communicative goals                                                     | Grammar                                                                                   |
| --- | --------------------------------------- | --------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1   | Vivre ensemble (`ensemble`)             | Édito 1               | housing, neighbours, house rules, advice, wishes and congratulations    | present subjunctive, obligation / ban / permission, advice, ne … plus / jamais / que, in- |
| 2   | Souvenirs de famille (`souvenirs`)      | Édito 2               | family, memories, telling a story in the past                           | imparfait and passé composé, time expressions, agreement of reflexive verbs in the past   |
| 3   | Travailler autrement (`travail`)        | Édito 3               | work experience, opinion on employment, motivation                      | qui / que / dont / où, opinion expressions, goal (pour, afin de, pour que)                |
| 4   | Consommer autrement (`consommer`)       | Édito 4               | certainty, point of view, describing a place, collaborative consumption | indicative or subjunctive after opinion verbs, comparison and superlative, adjectives     |
| 5   | Le français dans le monde (`monde`)     | Édito 5               | French-speaking countries, expatriation, languages                      | plus-que-parfait, en / y, double pronouns, chronology                                     |
| 6   | Médias en masse (`medias`)              | Édito 6               | news, press, social networks, reporting an event                        | nominalisation, the passive, adverbs in -ment                                             |
| 7   | Prendre le temps (`temps`)              | Saison 3, unit 1; SUL | time and weather, nature, advice, wishes                                | possessive pronouns, wishes and hopes, en / pendant / dans / pour + duration              |
| 8   | Apprendre autrement (`apprendre`)       | Saison 3, unit 2; SUL | studies and career, CV, agreement and disagreement                      | gerund, past participle agreement with avoir, agree / disagree / nuance                   |
| 9   | Esprit critique (`critique`)            | Saison 3, unit 3      | degrees of certainty, checking information, contemporary art            | se faire + infinitive, conditional for uncertain news, adverbs of certainty and doubt     |
| 10  | Caractères et sentiments (`sentiments`) | SUL B1 aims           | describe people, feelings, regrets, reproaches, hypotheses              | si + présent / imparfait, feelings with the subjunctive, past conditional for regrets     |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge".
Vocabulary cards are not repeated inside French B1.1 or from French A1.1 to A2.2 (`content.test.ts`); later French
levels are checked as they land. The grammar topics a unit teaches get a mini lesson (`lessons.ts`) and a full lesson
(`src/content/grammar/fr-b1-1.ts`) in the same PR as the unit.

## Build plan

All ten units ship in **one pull request** (Arman's rule: one PR per French level).

1. Level plumbing: level entry in `levels.ts` (French levels are listed in CEFR order), e2e spec, `subjunctiveFr`
   (`src/lib/french/subjunctive.ts`), `plusQueParfait` and `conditionnel` (`src/lib/french/moreTenses.ts`) and the
   `subjTable`, `pqpTable` and `condTable` helpers. **Done.**
2. Units 1 to 10. **Done**, 13 to 16 games each: `ensemble` (16), `souvenirs` (15), `travail` (15), `consommer`
   (15), `monde` (15), `medias` (15), `temps` (15), `apprendre` (15), `critique` (15), `sentiments` (15).
3. Per unit: three grammar points, each with a tag (`fr-b11-*`), a mini lesson (`lessons.ts`) and a full lesson
   (`src/content/grammar/fr-b1-1.ts`, listed in `unitTopics.ts`), plus an accessibility page in `e2e/a11y.spec.ts`.

## Limits of the research

Only pages that could be read were used (see Sources). The grammar lessons cite French Wikipedia and Wiktionary
pages whose existence and general content were checked while writing, but several rules below come from standard
French grammar rather than from a fetched page, and have **not been confirmed against a source**:

- the exact set of verbs and expressions taking the subjunctive or indicative (`espérer que`, `il paraît que`,
  `il semblerait que`, `pourvu que`, `à condition que`), apart from `douter que`, which the subjunctive page lists;
- `ne … que`, `ne … ni … ni`, `aucun` and the prefix rules in unit 1;
- the use of the conditional for unconfirmed news (the conditional page confirms uncertainty and hypothesis only);
- the formation of adverbs in `-ment`, the headline style of unit 6 (the nominalisation page covers verb-to-noun
  conversion in general) and the exceptions of `en` / `y` (the Wiktionary entries confirm they are pronouns);
- the position of adjectives and the BAGS list (the adjective page confirms that position varies);
- agreement of the participle after `avoir` with an object placed before (the participle page confirms the principle).

The official DELF B1 description, the full table of contents of _Édito B1_ and the _Alter Ego 3_ dossier titles could
not be read. The French content has not been reviewed by a native speaker.
