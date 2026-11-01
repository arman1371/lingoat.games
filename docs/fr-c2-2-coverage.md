# French C2.2 – syllabus research and plan

C2.2 is the last half-level of French in Lingoat, the counterpart of German C2.2. Level id `fr-c2-2`; unit and activity
ids start with `fr-c2-2-`; content lives in `src/content/fr-c2-2/`; grammar tags, mini lessons and full lessons are
prefixed `fr-c22-`. The French content has **not yet been reviewed by a native speaker**.

## Sources (what was actually read)

| Source                                                                                                    | What it contributes                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UNAV, Français C2.2 A (ISSA), teaching guide 2025-26 (`asignatura.unav.edu`)                              | A university C2 course: "at C2 there is no grammar or conjugation", the course widens vocabulary, word nuance, proverbs and sayings, and introduces literary French (classical theatre, poems, fables) and press texts.     |
| France Éducation international, DALF C2 demo subject (Sciences, via the Scribbr copy of the official PDF) | Exam shape: report on a 15-minute document, argued point of view, debate with the jury; two domains (lettres et sciences humaines, sciences); written synthesis from a ~2,000-word file.                                    |
| DALF C2 LSH oral calibration sheet (University of Calgary copy of the FEI training material)              | What the C2 grid rewards: faithful, objective report; a structured argument with connectors; nuancing and specifying a position; a wide lexicon for rephrasing and nuance; correct, flexible morphosyntax and modalisation. |
| Université de Fribourg, Centre de langues, "B2-C2 Renforcement grammatical I"                             | The grammar a B2-C2 course still revises: tenses and agreement of the past participle, passé simple and antérieur, the subjunctive.                                                                                         |
| Wikipédia: Participe présent, Gérondif, Adjectif verbal; Wiktionnaire: fatigant                           | The rules behind the unit 1 grammar lesson (see `docs/grammar-sources.md`).                                                                                                                                                 |

**Could not be read:** the official DALF C2 pages and the candidate manual of France Éducation international (bot
protection, HTTP 403), the Riba thesis on the C1/C2 specification (access denied), the Édito C1 table of contents (only the
publisher's sales pages came back), and the table of contents of the Grammaire progressive and Vocabulaire progressif
perfectionnement. There is therefore **no official list of C2 topics**; the unit themes below are the same cultural
domains as German C2.2 (arts, literature, heritage, law, civil society, climate, idioms) and are supported by the
UNAV guide (literature, theatre, press, proverbs) and by the humanities/society domains of the DALF C2 oral. Before
release, check the list against the CEFR Companion Volume and the Riba C1/C2 specification.

## Split with French C2.1

C2.1 (`fr-c2-1`, another thread) takes registers and word nuances, humour and irony, narrative tenses (présent
historique, passé simple, passé antérieur), cause and consequence connectors, concession, opposition and hypothesis,
the subjunctive with sequence of tenses and reported speech, information structure (mise en relief, nominalisation),
French and EU institutions, debate and argumentation. C2.2 therefore takes the cultural domains, proverbs and
figures of style, and a different set of C2 grammar points:

| #   | Unit (id suffix)                       | Domain                                         | Grammar (tag / mini lesson)                                               | Status |
| --- | -------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- | ------ |
| 1   | Arts et expositions (`arts`)           | exhibitions, art market, judging a work        | participe présent, gérondif, adjectif verbal (`fr-c22-participe-present`) | done   |
| 2   | Littérature et théâtre (`litterature`) | books, publishing, stage                       | past participle agreement in hard cases (`fr-c22-accord-participe`)       | done   |
| 3   | Cinéma et spectacle (`cinema`)         | film, festivals, criticism                     | the passive and its alternatives (`fr-c22-passif`)                        | done   |
| 4   | Patrimoine et histoire (`patrimoine`)  | heritage, history, francophonie                | complex relative clauses (`fr-c22-relatives`)                             | done   |
| 5   | Droit et justice (`droit`)             | courts, rights, contracts                      | advanced negation (`fr-c22-negation`)                                     | done   |
| 6   | Médias et société (`medias`)           | press, freedom of expression, misinformation   | conditional of reserve and distance markers (`fr-c22-modalisation`)       | done   |
| 7   | Engagement citoyen                     | associations, volunteering, civil society      | the infinitive (infinitif passé, avant de, après avoir, de peur de)       | next   |
| 8   | Climat et environnement                | climate, energy, biodiversity                  | agreement with quantifiers and collectives (la plupart, plus d’un, tout)  | next   |
| 9   | Proverbes et figures de style          | proverbs, idioms, métaphore, litote, antithèse | figures of style                                                          | next   |

Each unit aims at 10 to 16 games with at least 6 of the 13 engines, an easy first game and a final "… challenge". The
clock and market engines are not used at this level. Word cards are checked against all earlier French levels by the
vocabulary-integrity test in `src/content/fr-c2-2/content.test.ts`.

## Limits

- The spelling pairs of the participe présent and the adjectif verbal: the Wikipedia page confirms -guant/-gant,
  -quant/-cant and -ant/-ent; the Wiktionnaire page confirms fatigant/fatiguant. Provocant/provoquant, différent/différant
  and négligent/négligeant follow the same pattern but were **not** checked on a fetched page.
- Mini lessons and full lessons follow common textbook teaching of the points; a native speaker should review them.
