# French B2.2 – syllabus research and plan

French B2.2 is the second half of CEFR B2 (Vantage), the same job B2.2 does for German: argue and report in detail on
abstract and current topics, in speech and writing, at DELF B2 level. The French content has **not yet been reviewed by a
native speaker**.

Level id `fr-b2-2`; unit and activity ids start with `fr-b2-2-`; content lives in `src/content/fr-b2-2/`. Topic and
grammar tags of this level start with `fr-b22-` (so parallel French level threads never clash on a tag id).

## Sources (what was actually read)

| Source                                                                                                               | What it contributes                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Aix-Marseille Université, SUL – Référentiel des niveaux de langue A1 à B2][sul] (section "Descriptif du niveau B2") | The B2 descriptor, the communicative aims (describe a phenomenon, tell a detailed story, express feelings, defend an opinion, argue, pose a problem and propose solutions, formulate hypotheses, imagine the future, report what others say, adapt the register), the vocabulary themes (media and current affairs, environment and climate, education, culture, specialist vocabulary) and the language objectives. This is the main model for the unit list. |
| [Université de Bâle, Sprachenzentrum – French course programme][basel]                                               | Splits the textbook Édito B2 in two courses: B2.1 = chapters 1 to 5, B2.2 = chapters 6 to 10.                                                                                                                                                                                                                                                                                                                                                                  |
| [Universidad de Huelva, Guía docente FLE B2.2 2025/26][huelva]                                                       | A B2.2 course that uses Édito B2 (Didier, 2022, twelve units), prepares for the DELF B2 and follows the CEFR Companion Volume (2018). The content list itself is an image in the PDF and could not be read.                                                                                                                                                                                                                                                    |
| [Universität Paderborn, French B2.2][paderborn]                                                                      | Emphasis on radio and television reports and interviews, summarising factual information from different sources, managing an interview.                                                                                                                                                                                                                                                                                                                        |
| Édito B2 (Didier, 4th edition), unit titles 7 to 9 as quoted in search-engine snippets of resale and copy sites      | Unit 7 about media and disinformation, unit 8 about health and well-being, unit 9 about solidarity. **Not verified** against the publisher; the full table of contents could not be opened.                                                                                                                                                                                                                                                                    |

Not readable from the build environment: the official DELF B2 description of France Éducation international (blocks
automated access), the full Édito B2 table of contents (Didier / Klett show only "twelve thematic lessons"), the Würzburg
module description (no text layer) and the Lisbon course page (HTTP 503). Before release, check the unit list against the
DELF B2 exam description.

[sul]: https://www.univ-amu.fr/system/files/media-ressource/SUL_R%C3%A9f%C3%A9rentiel%20des%20niveaux%20de%20langue%20A1%20%C3%A0%20B2.pdf
[basel]: https://sprachenzentrum.unibas.ch/en/angebot/einstufung/franzoesisch/french-course-program-overview
[huelva]: https://www.uhu.es/lenguas-modernas/sites/lenguas-modernas/files/2026-03/Guia_Docente_FLE_B2.2_25_26.pdf
[paderborn]: https://www.uni-paderborn.de/en/zfs/language-courses-for-students/french/french-b22

## How the units were chosen

The SUL B2 vocabulary themes and language objectives are divided between B2.1 and B2.2, and the topics of Édito B2
chapters 6 to 10 (media, health, solidarity) fall into B2.2. The twelve units below give the same size as German B2.2.
Themes the other French levels are likely to teach (work, housing, environment in general) are kept narrow or avoided so
that vocabulary does not collide; the content test rejects a word that an earlier French level already teaches.

| #   | Unit (id suffix)                      | Communicative goals                                        | Grammar (SUL B2 objectives)                                                     |
| --- | ------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1   | Informer et s’informer (`actu`)       | judge the press, spot disinformation, report what was said | reported speech and tense shift, c’est … qui / que, lequel / auquel / duquel    |
| 2   | Prenez soin de vous (`sante`)         | talk about health, medicine and well-being                 | subjunctive or infinitive, the “ne” explétif                                    |
| 3   | La richesse en partage (`solidarite`) | volunteering, associations, solidarity                     | the passive: classic, pronominal and se faire                                   |
| 4   | Justice et droit (`justice`)          | courts, laws, rights and duties                            | hypothesis and condition: à condition que, à moins que, sauf si, au cas où      |
| 5   | Culture et création (`culture`)       | review a film, a book, an exhibition                       | superlative + subjunctive, prepositional groups                                 |
| 6   | Sciences et innovations (`science`)   | research, technology, artificial intelligence              | cause and consequence connectors (de sorte que, d’où, à force de)               |
| 7   | Économie et consommation (`economie`) | responsible consumption, the economy                       | opposition and concession (bien que, alors que, avoir beau, même si)            |
| 8   | Histoire et mémoire (`histoire`)      | tell a story in the past                                   | passé composé / imparfait / plus-que-parfait, passé simple, futur dans le passé |
| 9   | Villes et territoires (`territoire`)  | describe a place, a region, urban change                   | comparison, agreement of the past participle                                    |
| 10  | Société et valeurs (`societe`)        | equality, generations, discrimination, values              | purpose (afin que, de manière à ce que), unreal past and conditional perfect    |
| 11  | Climat et énergie (`climat`)          | climate, energy, environmental policy                      | time relations, relative dates, frequency                                       |
| 12  | Débattre et argumenter (`debat`)      | structure an argument, formal letter, DELF B2 production   | connectors of enumeration and conclusion, registers, stressing                  |

Every unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final “… challenge”.

## Build plan

Work is split into one PR per unit, like French A1.1. Each unit PR brings its vocabulary, games, tags, mini lessons, full
grammar topics (`src/content/grammar/fr-b2-2.ts`), the `unitTopics.ts` links and an e2e entry.

1. **Unit 1 (`actu`, 16 games) is done**, together with the level plumbing (`levels.ts` entry, test harnesses, e2e
   spec, accessibility page entries). Sources of its three lessons are in `docs/grammar-sources.md`.
2. Units 2 to 12: open.

Open points: French nouns carry their article inside the word, the learned-word field is still named `de`. Conjugation
tables of tenses other than the present must be written out by hand (`src/lib/french` only generates the present).
