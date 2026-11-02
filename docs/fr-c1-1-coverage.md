# French C1.1 – syllabus research and plan

French C1.1 is the first half of CEFR C1 and corresponds to German C1.1: understand demanding texts on public topics,
argue in a structured and formal register, and use the connectors, moods and tenses of written French. The French content
has **not yet been reviewed by a native speaker**.

Level id `fr-c1-1`; unit and activity ids start with `fr-c1-1-`; content lives in `src/content/fr-c1-1/`. Grammar tags,
mini lessons and full lessons are prefixed `fr-c11-` so that the French levels written in parallel never collide on a tag id.
Topic tags are shared with the other levels (`media-news`, `nutrition` …); only grammar tags are new.

## Sources (what was actually read)

| Source                                                                       | What it contributes                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Universidad de Huelva, Guía docente "Francés C1.1" 2023–24][uhu]            | A C1.1 course built on the first ten units of **Édito C1** (Didier 2018), with objectives, vocabulary, oral and written production, grammar consolidation and culture per unit: series and cinema · media education and fake news · food, livestock and slaughter · memory · love · family, assisted reproduction and grandparents · music and commitment · the book and literature · AI, transhumanism and ethics · the five senses. Main model for the unit list. |
| [EOI Talavera, programación de francés 2025–26 (C1.1 and C1.2)][eoi]         | The sequencing for **Édito C1, 2e édition**: democracy in danger · climate crisis · the new faces of culture · feminism · family and education · ageing · health 3.0 · solidarity · animal welfare. Also names the C1.1 grammar of those units: logical connectors, si (condition and hypothesis), mise en relief, prefixes and suffixes, register, reprise (cohesion), narrative tenses, modalisation, de/d'/des + plural noun.                                    |
| [Cosmopolite 5, guide pédagogique (Hachette FLE, 2019), Dossiers 1–6][cosmo] | The first six of the twelve dossiers (1–8 are C1, 9–12 C2): Désir de ville(s) · Alimentation · Prenons soin de nous · À corps et à cri · Dans quel monde vit-on ? · TAF (Travail à faire), with the communicative goals of each lesson (synthesis of documents, analysis of figures, reporting a survey, summarising a speech, press review, job interview, conflict at work …).                                                                                    |
| [CEFR global scale, Council of Europe][cefr]                                 | C1: understand a wide range of demanding, longer texts and recognise implicit meaning; express ideas fluently and spontaneously; use language flexibly for social, academic and professional purposes.                                                                                                                                                                                                                                                              |
| Hachette FLE page of Alter Ego 5 (product description only)                  | 12 dossiers under three headings (C'était hier · Réalités d'aujourd'hui · Et demain ?) and DALF C1 training; confirms the C1 register mix but gives no contents list, so it is **not** counted as unit evidence.                                                                                                                                                                                                                                                    |

[uhu]: https://uhu.es/sites/lenguas-modernas/files/2024-06/Guia_Docente_FR_C1.1_23_24.pdf
[eoi]: https://eoi-talavera.centros.castillalamancha.es/sites/eoi-talavera.centros.castillalamancha.es/files/documentos/programacion_frances_25_26.pdf
[cosmo]: https://edit.hueber.de/shared/elka/Internet_Muster/Red6/9783193833860_Muster_4.pdf
[cefr]: https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale

**Limits of the research.** The official DALF C1 pages of France Éducation international answer automated requests with
"403 / bot detected", and the Didier, Hachette and Klett pages for Édito C1 and Alter Ego 5 give no contents list, so the exam
description itself was **not** read; the exam format (documents of 1,500–2,000 words, synthesis and argumentative essay, oral
monologue and interaction) is known only from secondary school and university summaries. The Cosmopolite 5 sample stops after
Dossier 6. Both course-based sources are Édito C1; Cosmopolite 5 is the independent second source. Before release, check the unit
list against the DALF C1 exam description.

## How the units were chosen

A topic became a unit when at least two of the sources above treat it (Édito C1 counts as one source even though two documents
describe it). The grammar of a unit is what the Édito sequencing attaches to that topic.

| #   | Unit (id suffix)                       | Édito C1 (UHU 1st ed. / EOI 2nd ed.) | Cosmopolite 5        | Grammar (tag `fr-c11-…`)                   |
| --- | -------------------------------------- | ------------------------------------ | -------------------- | ------------------------------------------ |
| 1   | Les médias et l'information (`medias`) | Thème 2 · U2 (fake news)             | D6 L1 (press review) | `connectors`: cause, consequence, addition |
| 2   | Société et engagement (`societe`)      | U2 democracy, U11 solidarity         | D4 L2, D5 L2         | si: condition and hypothesis               |
| 3   | Égalité (`egalite`)                    | U6 feminism                          | D4 L2 (inequality)   | prefixes and suffixes                      |
| 4   | Alimentation (`alimentation`)          | Thème 3 · U4 (short circuits)        | D2                   | expressing a paradox and concession        |
| 5   | Santé et médecine (`sante`)            | Thème 9 · U10 (health 3.0)           | D3                   | the pronoun system: y, en, double pronouns |
| 6   | Ville et climat (`ville`)              | U4 (climate, overtourism)            | D1                   | expressing will and recommendation         |
| 7   | Famille et générations (`famille`)     | Thème 6 · U8, U9                     | D5 L4                | reprise and cohesion                       |
| 8   | Culture, séries et musique (`culture`) | Thèmes 1, 7 · U5                     | D4 L4, D5 L1         | mise en relief                             |
| 9   | Livres et poésie (`litterature`)       | Thèmes 8, 10                         | D5 L3                | narrative tenses                           |
| 10  | Monde du travail (`travail`)           | Thème 9 (robots and jobs)            | D6 L2–L4             | registers of language                      |
| 11  | Numérique et avenir (`numerique`)      | Thème 9 · U10 (chips, AI)            | –                    | modalisation                               |

All 11 units are written and ship together in one pull request (Arman's rule: one PR per French level, not one per unit):
**355 word cards and 142 games** in total. Every unit uses at least six of the 13 game engines (enforced by the content suite).

### Left out on purpose

| Candidate topic                                    | Why not a C1.1 unit                                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Love, jealousy, remorse (Édito thème 5)            | one source only; left for a possible later pack                                     |
| Animal welfare and hunting (EOI U12)               | one source; livestock vocabulary already appears in unit 4                          |
| Memory and the five senses (Édito thèmes 4 and 10) | Édito only; the science vocabulary sits in unit 5                                   |
| Vocabulary of the first fr-a1-1 units, A1.2–B2.2   | taught by their own levels; the content test fails on any repeated French word card |

## Vocabulary integrity

`src/content/fr-c1-1/content.test.ts` fails when a word card repeats a word card of an earlier French level (found by folder
name, so levels merged later are checked too). Overlap with later levels is checked by those levels' own tests. Deliberate
exceptions would go into `REVIEW_WORDS`; there are none. When French B1.1 to B2.2 and C2.1 were merged, 128 C1.1 cards
repeated their vocabulary (press, health, city, climate, culture, technology); each was replaced by a different C1 word of the
same topic, so the topic of every unit is unchanged. Sentences in games may still use an everyday word that is a card of an
earlier level; only the cards are checked.

## Unit 1 – Les médias et l'information

- 34 word cards in two lists (the press, disinformation and checking); 15 games: flashcards ×2, quiz, memory (word and French
  definition), listen, sort it ×2 (reliable or suspicious clues; cause, consequence or addition), spell, dictation, gap fill ×2
  (choose, type), sentence builder, dialogue (newsroom, a friend's video, a request for a correction), blitz and the unit
  challenge.
- Grammar lesson `fr-c11-connectors` (mini lesson plus full lesson): parce que / car / puisque / comme / étant donné que,
  grâce à / à cause de / en raison de / faute de, donc / par conséquent / c'est pourquoi / si bien que, de plus / en outre /
  par ailleurs / en effet. Wrong gap-fill options carry a one-sentence `why`.

## Units 2 to 11

Each unit has two or three word lists of about 32 cards, 12 to 13 games on at least six engines (first game difficulty 1, last
game a "challenge", dialogues, gap fills with a one-sentence `why` on each wrong option) and one full grammar lesson. The
grammar of a unit is taught in its mini lessons and checked in its gap fills, quizzes and sort-it games; the unit challenge
mixes vocabulary and grammar.

| #   | Unit                                         | Cards | Games | Lesson (`fr-c11-…`) and what it teaches                                                                                            |
| --- | -------------------------------------------- | ----- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 2   | Société et engagement (`societe`)            | 33    | 13    | `si-clauses`: si + présent / imparfait / plus-que-parfait with their result tenses; au cas où, sauf si, à condition que            |
| 3   | Égalité et diversité (`egalite`)             | 32    | 13    | `affixes`: in-/im-/il-/ir-, dé(s)-, mé-, anti-; -ité, -tion/-ation, -isme, -ment, -ance; -able/-ible, -if, -iser                   |
| 4   | Manger, produire, consommer (`alimentation`) | 32    | 13    | `concession`: bien que, quoique + subjonctif; même si, alors que, tandis que + indicatif; malgré, en dépit de; pourtant, cependant |
| 5   | Santé et bien-être (`sante`)                 | 32    | 12    | `pronouns`: en, y, double pronouns (me le, le lui, lui en, y en) and their order after a positive imperative                       |
| 6   | Ville et environnement (`ville`)             | 32    | 13    | `subjunctive`: after will, necessity, feeling and doubt; same subject → infinitive; certainty keeps the indicative                 |
| 7   | Famille et générations (`famille`)           | 32    | 12    | `reprise`: celui/celle/ceux/celles + de, qui, que, où; ce qui, ce que, ce dont, ce à quoi; lequel, auquel, duquel, dont            |
| 8   | Culture et création (`culture`)              | 32    | 12    | `emphasis`: c'est … qui / que, ce qui … c'est (pseudo-cleft) and dislocation                                                       |
| 9   | Littérature et récit (`litterature`)         | 32    | 13    | `narrative-tenses`: imparfait (scene), passé composé or passé simple (events), plus-que-parfait; recognising the passé simple      |
| 10  | Le monde du travail (`travail`)              | 32    | 13    | `registers`: vocabulary, questions and negation by register; the formal email (Madame, Monsieur; veuillez; cordialement)           |
| 11  | Numérique et avenir (`numerique`)            | 32    | 13    | `modality`: certainty (indicatif), possibility and doubt (subjonctif), reported unconfirmed information (conditionnel)             |

Tense and mood tables in the lessons come from `fr-c1-1/helpers.ts` (`conditionnel`, `subjonctif`, `plusQueParfait`,
`conditionnelPasse` and the `*Table` wrappers), tested in `helpers.test.ts`; nothing was added to the shared `src/lib/french`
so that French levels written in parallel do not conflict.

### Known limits

- Vocabulary was chosen to avoid the word cards of every earlier French level; the content test enforces it for levels merged
  before this one.
- No native speaker has checked the French; register labels (familier / courant / soutenu) and the choice of passé simple
  forms are the first things to review.
- The unit list has not been checked against the DALF C1 description (the official pages could not be read).
