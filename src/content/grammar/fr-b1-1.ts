import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';
import { FRENCH_PRONOUNS } from '@/lib/persons';
import { subjunctiveFr } from '@/lib/french/subjunctive';
import type { FrenchForms } from '@/lib/french/conjugation';
import { imparfait } from '@/lib/french/tenses';
import { plusQueParfait } from '@/lib/french/moreTenses';

const LEVEL = 'fr-b1-1';

/** A table of present subjunctive forms generated from `src/lib/french/subjunctive.ts`. */
function subjunctiveTable(caption: string, verbs: readonly string[]) {
  const all = verbs.map((v) => subjunctiveFr(v));
  return table(
    caption,
    ['que …', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
}

/** A table of generated forms (one column per verb) for any tense function from `src/lib/french`. */
function formsTable(caption: string, verbs: readonly string[], tense: (v: string) => FrenchForms) {
  const all = verbs.map((v) => tense(v));
  return table(
    caption,
    ['Person', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
}

/** French B1.1, unit 1: living together (subjunctive, obligation, advice, negations, prefixes). */
export const FR_B11_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-b11-subjunctive',
    title: 'The present subjunctive',
    tagline: 'What follows il faut que?',
    level: LEVEL,
    summary:
      'After il faut que, il vaut mieux que, vouloir que and expressions of feeling or doubt, the verb after que is in the subjunctive. Take the ils stem and add -e, -es, -e, -ions, -iez, -ent. A few verbs have irregular stems.',
    sections: [
      section(
        'form',
        'How the subjunctive is formed',
        p(
          'Take the **ils form** of the present and drop **-ent**: *ils parlent* → **parl-**, *ils prennent* → **prenn-**. Add **-e, -es, -e, -ions, -iez, -ent**. For **nous** and **vous** the stem of *nous* is used instead (*nous prenons* → **que nous prenions**), so the endings -ions and -iez sound like the imparfait.',
        ),
        subjunctiveTable('Regular and stem-changing verbs after “que”.', [
          'parler',
          'finir',
          'prendre',
          'venir',
        ]),
        tip(
          'Same as the present',
          'For -er verbs the je, tu, il and ils forms look like the present: il faut que tu parles. Only nous and vous (parlions, parliez) and the irregular verbs show the subjunctive clearly.',
        ),
      ),
      section(
        'irregular',
        'Irregular verbs',
        p(
          'Seven common verbs do not follow the ils-stem rule. Learn them as sets: **être, avoir, aller, faire, pouvoir, savoir, vouloir**.',
        ),
        subjunctiveTable('Irregular subjunctive stems.', [
          'être',
          'avoir',
          'aller',
          'faire',
          'pouvoir',
          'savoir',
          'vouloir',
        ]),
        mistake(
          'Watch out',
          '✗ Il faut que tu viens.  ✓ Il faut que tu viennes.',
          '✗ Il faut que je suis à l’heure.  ✓ Il faut que je sois à l’heure.',
          '✗ Il faut que nous allons au bureau.  ✓ Il faut que nous allions au bureau.',
        ),
      ),
      section(
        'when',
        'When it is used',
        p(
          'The subjunctive follows **que** after expressions of necessity (*il faut que, il est important que*), advice (*il vaut mieux que*), wish or will (*vouloir que, souhaiter que*), feeling (*être content que*) and doubt (*douter que*). The subject of the **que** clause is a new one; with the same subject use the infinitive: *Je veux partir* but *Je veux que tu partes*.',
        ),
        examples(
          ['Il faut que vous veniez à la réunion.', 'You have to come to the meeting.'],
          ['Il vaut mieux que nous partions tôt.', 'It is better if we leave early.'],
          ['Je veux que tu sois heureux.', 'I want you to be happy.'],
        ),
      ),
    ],
    related: ['fr-b11-obligation', 'fr-b11-advice'],
    sources: [S.subjunctive, S.falloir],
  },
  {
    id: 'fr-b11-obligation',
    title: 'Must, forbidden, allowed',
    tagline: 'How do I say what you have to do, must not do or may do?',
    level: LEVEL,
    summary:
      'Il faut + infinitive and devoir say what you have to do, il est interdit de and il ne faut pas say what is not allowed, on a le droit de and on peut say what is allowed. A new subject after il faut needs que + subjunctive.',
    sections: [
      section(
        'three',
        'Three meanings, three groups of phrases',
        table(
          'Obligation, ban and permission.',
          ['Meaning', 'Phrases', 'Example'],
          [
            [
              'obligation',
              'il faut + inf. · devoir + inf. · il est obligatoire de',
              'Il faut trier les déchets.',
            ],
            [
              'ban',
              'il est interdit de · il est défendu de · il ne faut pas · on ne doit pas',
              'Il est interdit de fumer.',
            ],
            [
              'permission',
              'on a le droit de · il est permis de · on peut · on est autorisé à',
              'On a le droit d’inviter des amis.',
            ],
          ],
        ),
        p(
          'After **de** and after **devoir** or **pouvoir** the verb is an **infinitive**. *Il est interdit de fumer*, *Vous devez payer*, *On peut utiliser la cour*.',
        ),
      ),
      section(
        'faut',
        'il faut: infinitive or que + subjunctive',
        p(
          '**Il faut** + infinitive speaks of a general rule: *Il faut respecter le règlement.* To say who must do it, use **il faut que** + subjunctive: *Il faut que tu respectes le règlement.* **Il ne faut pas** is a ban, not “you do not have to”: *Il ne faut pas faire de bruit.* To say that something is not necessary use **il n’est pas nécessaire de** or **tu n’as pas besoin de**.',
        ),
        compare(
          {
            title: 'il faut + infinitive',
            question: 'A rule for everybody',
            example: 'Il faut fermer la porte.',
          },
          {
            title: 'il faut que + subjunctive',
            question: 'A rule for one person',
            example: 'Il faut que tu fermes la porte.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Il est interdit fumer.  ✓ Il est interdit de fumer.',
          '✗ Il faut que fermer la porte.  ✓ Il faut que tu fermes la porte.',
          '✗ Il ne faut pas payer (you must not pay).  ✓ Il n’est pas nécessaire de payer (you need not pay).',
        ),
      ),
    ],
    related: ['fr-b11-subjunctive', 'fr-b11-advice'],
    sources: [S.falloir, S.subjunctive],
  },
  {
    id: 'fr-b11-advice',
    title: 'Giving advice',
    tagline: 'How do I tell someone what to do without being rude?',
    level: LEVEL,
    summary:
      'Use je te conseille de + infinitive, tu devrais + infinitive or pourquoi ne pas + infinitive. After il vaut mieux use the infinitive for a general tip and que + subjunctive when you name the person.',
    sections: [
      section(
        'patterns',
        'The usual patterns',
        table(
          'Ways to give advice.',
          ['Pattern', 'Verb form', 'Example'],
          [
            ['Je te conseille de …', 'infinitive', 'Je te conseille de parler à ta voisine.'],
            ['Tu devrais …', 'infinitive', 'Tu devrais lire le règlement.'],
            ['Pourquoi ne pas …', 'infinitive', 'Pourquoi ne pas inviter les voisins ?'],
            ['Il vaut mieux …', 'infinitive', 'Il vaut mieux parler avant de signer.'],
            ['Il vaut mieux que …', 'subjunctive', 'Il vaut mieux que tu parles avant de signer.'],
          ],
        ),
        p(
          '**Conseiller** takes the person with **à** (or as a pronoun) and then **de** + infinitive: *Je conseille à Léa de partir*, *Je te conseille de partir*. To advise against, use **déconseiller**: *Je te déconseille d’y aller.*',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Je te conseille que tu pars.  ✓ Je te conseille de partir.',
          '✗ Il vaut mieux que tu parler.  ✓ Il vaut mieux que tu parles.',
          '✗ Tu devrais de lire.  ✓ Tu devrais lire.',
        ),
        tip(
          'Soften the advice',
          'Devrais is the conditional of devoir. It sounds gentler than the plain tu dois (you must): Tu devrais lire le règlement.',
        ),
        examples(
          ['Je vous conseille de prévenir le gardien.', 'I advise you to tell the caretaker.'],
          ['Il vaut mieux que nous nettoyions le palier.', 'It is better if we clean the landing.'],
        ),
      ),
    ],
    related: ['fr-b11-subjunctive', 'fr-b11-obligation'],
    sources: [S.conseiller, S.subjunctive],
  },
  {
    id: 'fr-b11-restriction',
    title: 'ne … que, ne … ni … ni, aucun',
    tagline: 'How do I say “only”, “neither … nor” and “not one”?',
    level: LEVEL,
    summary:
      'Ne … que means “only” and is not a real negation. Ne … ni … ni … means “neither … nor”, aucun(e) means “not one”. Rien and personne can also be the subject of the sentence.',
    sections: [
      section(
        'forms',
        'Restriction and the other negative words',
        table(
          'Forms and meanings.',
          ['Form', 'Meaning', 'Example'],
          [
            ['ne … que', 'only', 'Nous n’avons qu’une clé.'],
            ['ne … ni … ni …', 'neither … nor', 'Je n’ai ni balcon ni jardin.'],
            ['ne … aucun(e)', 'not one, no', 'Je n’ai aucun problème.'],
            ['ne … rien', 'nothing', 'Il ne dit rien.'],
            ['ne … personne', 'nobody', 'Je ne vois personne.'],
          ],
        ),
        p(
          '**Ne … que** limits the quantity but does not deny it, so the article stays: *Il n’y a que des voisins calmes.* It is the same as **seulement**. **Ne … ni … ni …** drops **un, une, du, des**: *Je n’ai ni frère ni sœur.* The definite article stays: *Il n’aime ni le bruit ni la foule.* **Aucun** is always singular and agrees in gender: *aucun voisin, aucune clé.* You already know **ne … pas, plus and jamais**: these work the same way around the verb.',
        ),
      ),
      section(
        'position',
        'Position and subject',
        p(
          'In the **passé composé** **ne** goes before the auxiliary. **Rien** comes before the participle, **personne**, **que**, **aucun** and the second **ni** after it: *Je n’ai rien dit. Je n’ai vu personne. Je n’ai payé que le loyer.* **Rien**, **personne**, **aucun** and **ni … ni** can open the sentence. **Ne** then goes before the verb and there is no **pas**: *Personne ne répond. Rien n’est cassé. Aucun voisin ne se plaint.*',
        ),
        compare(
          {
            title: 'ne … pas',
            question: 'A plain no',
            example: 'Je n’ai pas de clé.',
          },
          {
            title: 'ne … que',
            question: 'Only that much, but not zero',
            example: 'Je n’ai qu’une clé.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Il y a que deux chambres.  ✓ Il n’y a que deux chambres.',
          '✗ Personne ne répond pas.  ✓ Personne ne répond.',
          '✗ Je n’ai aucuns problèmes.  ✓ Je n’ai aucun problème.',
        ),
        tip(
          'In speech',
          'In casual speech ne is often dropped (il y a que deux chambres, j’ai rien dit). Write and learn the full pair.',
        ),
      ),
    ],
    related: ['fr-negation'],
    sources: [S.negation],
  },
  {
    id: 'fr-b11-negative-prefixes',
    title: 'in-, im-, il-, ir-',
    tagline: 'How do I make the opposite of a word?',
    level: LEVEL,
    summary:
      'The prefix in- gives the opposite of an adjective: utile → inutile. Before b, p and m it is written im-, before l il- and before r ir-.',
    sections: [
      section(
        'rule',
        'One prefix, four spellings',
        table(
          'The spelling follows the next letter.',
          ['Prefix', 'Before', 'Examples'],
          [
            ['in-', 'most letters', 'utile → inutile · connu → inconnu · correct → incorrect'],
            ['im-', 'b, p, m', 'possible → impossible · poli → impoli · mobile → immobile'],
            ['il-', 'l', 'légal → illégal · lisible → illisible · limité → illimité'],
            ['ir-', 'r', 'réel → irréel · régulier → irrégulier · responsable → irresponsable'],
          ],
        ),
        p(
          'Before **l**, **m** and **r** the consonant is doubled. Not every opposite is made with this prefix: *content → mécontent*, *heureux → malheureux*, *poli → impoli*. Learn the opposite together with the word.',
        ),
      ),
      section(
        'other',
        'Other ways to say the opposite',
        examples(
          ['Il est impatient.', 'He is impatient.'],
          ['Cette règle est illogique.', 'This rule is illogical.'],
          ['C’est un plan irréaliste.', 'It is an unrealistic plan.'],
        ),
        mistake(
          'Watch out',
          '✗ inpossible  ✓ impossible',
          '✗ inlégal  ✓ illégal',
          '✗ inrégulier  ✓ irrégulier',
        ),
        tip(
          'Stress and meaning',
          'In- also exists with another meaning (“in, into”): un invité is a guest, not “not invited”. The negative prefix is mostly found on adjectives.',
        ),
      ),
    ],
    related: ['fr-b11-restriction'],
    sources: [S.prefixIn],
  },
  // ---- unit 2: Souvenirs de famille ------------------------------------------------------------
  {
    id: 'fr-b11-imparfait-pc',
    title: 'Imparfait or passé composé?',
    tagline: 'Which past tense do I use in a story?',
    level: LEVEL,
    summary:
      'The imparfait sets the scene: states, habits and actions in progress. The passé composé tells the events that move the story forward. Most stories use both.',
    sections: [
      section(
        'imparfait',
        'The imparfait',
        p(
          'Take the **nous** form of the present, drop **-ons** and add **-ais, -ais, -ait, -ions, -iez, -aient**: *nous habitons* → **j’habitais**. The only exception is **être**: **j’étais**.',
        ),
        formsTable(
          'The imparfait of five verbs.',
          ['habiter', 'finir', 'faire', 'avoir', 'être'],
          imparfait,
        ),
        tip(
          'Spelling',
          'Verbs in -ger and -cer keep the sound before -ais (je mangeais, je commençais) but not before -ions (nous mangions, nous commencions).',
        ),
      ),
      section(
        'choice',
        'Scene or event?',
        compare(
          {
            title: 'imparfait',
            question: 'What was the situation? What did you do regularly?',
            example: 'Il faisait beau. Nous habitions près de la mer.',
          },
          {
            title: 'passé composé',
            question: 'What happened, once, and finished?',
            example: 'Un jour, nous avons déménagé.',
          },
        ),
        p(
          'The two tenses often meet in one sentence: the **imparfait** is the action in progress and the **passé composé** is what interrupts it: *Nous regardions un film quand la lumière s’est éteinte.* A **repeated** action is a habit and takes the imparfait (*chaque été, nous allions …*); a **dated, single** action takes the passé composé (*en 1995, mes parents ont déménagé*).',
        ),
        mistake(
          'Watch out',
          '✗ Quand j’ai été petit, j’habitais à Lyon.  ✓ Quand j’étais petit, j’habitais à Lyon.',
          '✗ Soudain, le téléphone sonnait.  ✓ Soudain, le téléphone a sonné.',
          '✗ Chaque été, nous sommes allés chez mamie.  ✓ Chaque été, nous allions chez mamie.',
        ),
      ),
    ],
    related: ['fr-b11-narration', 'fr-b11-reflexive-agreement'],
    sources: [S.imparfait, S.passeCompose],
  },
  {
    id: 'fr-b11-narration',
    title: 'Connectors of a story',
    tagline: 'How do I put the events of a story in order?',
    level: LEVEL,
    summary:
      'Time words tell the listener whether you are setting the scene or reporting an event. Scene words go with the imparfait, event words with the passé composé.',
    sections: [
      section(
        'words',
        'Scene words and event words',
        table(
          'Connectors and the tense that usually follows.',
          ['Connector', 'Meaning', 'Usual tense'],
          [
            ['autrefois, à l’époque', 'in the past, at that time', 'imparfait'],
            ['pendant que', 'while', 'imparfait'],
            ['un jour, ce jour-là', 'one day, that day', 'passé composé'],
            ['soudain, tout à coup', 'suddenly', 'passé composé'],
            ['au moment où', 'at the moment when', 'imparfait or passé composé'],
            ['la veille, le lendemain', 'the day before, the next day', 'either'],
            ['finalement', 'in the end', 'passé composé'],
          ],
        ),
        p(
          'Use **la veille** and **le lendemain** (not *hier* and *demain*) in a story about the past: they are measured from the day you are talking about. *Il est parti la veille de mon anniversaire.*',
        ),
      ),
      section(
        'example',
        'A short story',
        examples(
          [
            'Je cuisinais pendant que mon frère regardait la télé.',
            'I was cooking while my brother watched TV.',
          ],
          ['Soudain, quelqu’un a frappé à la porte.', 'Suddenly someone knocked at the door.'],
          ['Le lendemain, nous avons visité la ville.', 'The next day we visited the town.'],
        ),
        mistake(
          'Watch out',
          '✗ Pendant que je cuisine, mon frère a regardé la télé (mixed tenses).  ✓ Pendant que je cuisinais, mon frère regardait la télé.',
          '✗ Hier est la veille de mon départ (in a story).  ✓ La veille de mon départ …',
        ),
      ),
    ],
    related: ['fr-b11-imparfait-pc'],
    sources: [S.imparfait, S.passeCompose],
  },
  {
    id: 'fr-b11-reflexive-agreement',
    title: 'Reflexive verbs in the passé composé',
    tagline: 'When does the participle of a pronominal verb agree?',
    level: LEVEL,
    summary:
      'Pronominal verbs take être. The participle agrees with the reflexive pronoun if it is the direct object, and stays unchanged if it is an indirect object or if a direct object follows.',
    sections: [
      section(
        'rule',
        'Agree or not?',
        table(
          'Agreement with se.',
          ['Case', 'Agreement', 'Example'],
          [
            ['se = direct object', 'agrees', 'Elle s’est levée. Ils se sont retrouvés.'],
            [
              'se = indirect object (à quelqu’un)',
              'no agreement',
              'Ils se sont parlé. Elles se sont écrit.',
            ],
            ['direct object after the verb', 'no agreement', 'Elle s’est lavé les mains.'],
          ],
        ),
        p(
          'Ask: does the verb take **à** + person? *Parler à, écrire à, téléphoner à, sourire à* → **no agreement**. If not, the pronoun is the direct object and the participle agrees in gender and number with the subject: *Les deux sœurs se sont réconciliées.*',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Elle s’est levé à six heures.  ✓ Elle s’est levée à six heures.',
          '✗ Elles se sont parlées.  ✓ Elles se sont parlé.',
          '✗ Elle s’est lavée les mains.  ✓ Elle s’est lavé les mains.',
        ),
        tip(
          'Check with être',
          'The auxiliary is always être: nous nous sommes disputés. Never avoir: ✗ nous nous avons disputés.',
        ),
      ),
    ],
    related: ['fr-b11-imparfait-pc'],
    sources: [S.passeCompose],
  },
  {
    id: 'fr-b11-relatives',
    title: 'qui, que, dont, où',
    tagline: 'Join two sentences with one relative pronoun',
    level: LEVEL,
    summary:
      'A relative pronoun replaces a noun and links two clauses. Its form depends on its function: qui is the subject, que the direct object, dont replaces de + noun, où a place or a time.',
    sections: [
      section(
        'rule',
        'Which pronoun?',
        table(
          'Relative pronouns.',
          ['Pronoun', 'Function', 'Example'],
          [
            ['qui', 'subject', 'La collègue qui m’aide est très sympa.'],
            ['que (qu’)', 'direct object', 'Le poste que je cherche est à Lyon.'],
            ['dont', 'replaces de + noun', 'C’est l’entreprise dont je rêve.'],
            ['où', 'place or time', 'Le bureau où je travaille est calme.'],
          ],
        ),
        p(
          'Ask what the pronoun does in its own clause. If a **verb follows directly** (*qui travaille*), it is the subject: **qui**. If a **subject follows** (*que je cherche*), it is the object: **que**. If the verb needs **de** (*parler de, rêver de, avoir besoin de*), use **dont**.',
        ),
        examples(
          [
            'J’ai un collègue qui parle cinq langues.',
            'I have a colleague who speaks five languages.',
          ],
          [
            'Le projet dont je m’occupe est important.',
            'The project I am in charge of is important.',
          ],
          ['Le jour où j’ai démissionné, il pleuvait.', 'The day I resigned, it was raining.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Le poste qui je cherche.  ✓ Le poste que je cherche.',
          '✗ Le projet que je parle.  ✓ Le projet dont je parle (parler de).',
          '✗ Le projet dont je parle de.  ✓ Le projet dont je parle.',
        ),
        tip(
          'Not translated like in English',
          'English can drop the pronoun (“the job I want”). French never can: le poste **que** je veux.',
        ),
      ),
    ],
    related: ['fr-b11-opinion'],
    sources: [S.relative],
  },
  {
    id: 'fr-b11-opinion',
    title: 'Giving an opinion',
    tagline: 'Say what you think, contrast ideas and confirm them',
    level: LEVEL,
    summary:
      'Introduce your opinion with à mon avis, selon moi, il me semble que or je suis convaincu que. Structure an argument with d’une part … d’autre part, contrast with par contre or en revanche and confirm with en effet.',
    sections: [
      section(
        'phrases',
        'Phrases for an argument',
        table(
          'Opinion, contrast and reason.',
          ['Job', 'Phrases'],
          [
            ['give your opinion', 'à mon avis, selon moi, il me semble que, en ce qui me concerne'],
            ['be sure', 'je suis convaincu que, je suis certain que'],
            ['structure', 'd’une part … d’autre part'],
            ['contrast', 'par contre, en revanche, cependant, pourtant'],
            ['confirm or explain', 'en effet, car, puisque, parce que'],
          ],
        ),
        p(
          '**À mon avis** and **selon moi** are followed by a full sentence without *que*. **Il me semble que** and **je suis convaincu que** need **que** and the indicative: *Je suis convaincu que le télétravail est l’avenir.*',
        ),
        examples(
          [
            'À mon avis, le télétravail fait gagner du temps.',
            'In my opinion, working from home saves time.',
          ],
          [
            'Il gagne moins ; en revanche, il est libre.',
            'He earns less; on the other hand, he is free.',
          ],
          ['En effet, c’est plus calme à la maison.', 'Indeed, it is quieter at home.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ À mon avis que le travail est important.  ✓ À mon avis, le travail est important.',
          '✗ Selon moi, je pense que …  ✓ Selon moi, … (or: Je pense que …).',
        ),
        tip(
          'par contre or en revanche?',
          'Both mean “on the other hand”. En revanche is a little more formal, so prefer it in writing.',
        ),
      ),
    ],
    related: ['fr-b11-relatives', 'fr-b11-purpose'],
    sources: [S.connector],
  },
  {
    id: 'fr-b11-purpose',
    title: 'pour, afin de, pour que',
    tagline: 'Say what you do something for',
    level: LEVEL,
    summary:
      'To express a purpose, use pour or afin de + infinitive when both verbs have the same subject. When the subject changes, use pour que or afin que + subjunctive.',
    sections: [
      section(
        'rule',
        'Same subject or new subject?',
        table(
          'Expressing a purpose.',
          ['Situation', 'Construction', 'Example'],
          [
            ['same subject', 'pour / afin de + infinitive', 'Je travaille pour gagner ma vie.'],
            [
              'different subject',
              'pour que / afin que + subjunctive',
              'Je travaille pour que ma famille soit heureuse.',
            ],
          ],
        ),
        subjunctiveTable('Verbs you need after pour que.', ['prendre', 'pouvoir', 'être', 'avoir']),
        p(
          '**Afin de / afin que** are slightly more formal than **pour / pour que**. The subjunctive forms are the ones from unit 1.',
        ),
        examples(
          [
            'Elle apprend l’anglais afin de trouver un meilleur poste.',
            'She learns English in order to find a better job.',
          ],
          [
            'Il explique le projet pour que tout le monde comprenne.',
            'He explains the project so that everybody understands.',
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Je travaille pour que je gagne ma vie.  ✓ Je travaille pour gagner ma vie.',
          '✗ Il explique pour que tout le monde comprend.  ✓ … pour que tout le monde comprenne.',
          '✗ Elle étudie afin que trouver un poste.  ✓ Elle étudie afin de trouver un poste.',
        ),
      ),
    ],
    related: ['fr-b11-subjunctive'],
    sources: [S.subordinate, S.subjunctive],
  },
  {
    id: 'fr-b11-certainty',
    title: 'Certainty: indicative or subjunctive',
    tagline: 'How sure are you? The mood tells it',
    level: LEVEL,
    summary:
      'Expressions of certainty (je pense que, je suis sûr que, il est évident que) take the indicative. Expressions of doubt, denial or possibility (je doute que, je ne pense pas que, il est possible que, il se peut que) take the subjunctive.',
    sections: [
      section(
        'rule',
        'Which mood?',
        table(
          'Certainty and doubt.',
          ['Meaning', 'Expressions', 'Mood'],
          [
            [
              'certain',
              'je suis sûr que, il est évident que, il est certain que, je pense que, je crois que',
              'indicative',
            ],
            ['probable', 'il est probable que', 'indicative'],
            [
              'doubt, denial, possibility',
              'je doute que, il est douteux que, je ne pense pas que, je ne crois pas que, il est possible que, il se peut que',
              'subjunctive',
            ],
          ],
        ),
        p(
          'The negative flips the mood: *Je pense que c’est utile* (indicative) but *Je ne pense pas que ce **soit** utile* (subjunctive). The irregular subjunctives you need most are **être** (que ce soit), **avoir** (que j’aie), **aller** (que j’aille) and **savoir** (que je sache).',
        ),
        subjunctiveTable('Irregular verbs after doubt.', ['être', 'avoir', 'aller', 'savoir']),
        examples(
          ['Je suis sûr que tu as raison.', 'I am sure you are right.'],
          [
            'Je doute que cette marque soit vraiment locale.',
            'I doubt this brand is really local.',
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Je ne pense pas que c’est utile.  ✓ Je ne pense pas que ce soit utile.',
          '✗ Je doute que tu as raison.  ✓ Je doute que tu aies raison.',
          '✗ Je pense que ce soit utile.  ✓ Je pense que c’est utile.',
        ),
        tip(
          'Same subject, no que',
          'If the subject does not change, use the infinitive: je doute de pouvoir venir, not ✗ je doute que je puisse venir.',
        ),
      ),
    ],
    related: ['fr-b11-subjunctive', 'fr-b11-comparison'],
    sources: [S.subjunctive],
  },
  {
    id: 'fr-b11-comparison',
    title: 'plus … que, le plus, meilleur',
    tagline: 'Compare things and say which is the best',
    level: LEVEL,
    summary:
      'Compare adjectives with plus / moins / aussi + adjective + que, and amounts with plus de / moins de / autant de + noun + que. The superlative adds the article: le plus, la plus, les plus. Bon becomes meilleur and bien becomes mieux.',
    sections: [
      section(
        'rule',
        'Comparative and superlative',
        table(
          'Degrees of comparison.',
          ['Degree', 'Adjective / adverb', 'Noun'],
          [
            ['more', 'plus cher que', 'plus de bruit que'],
            ['less', 'moins cher que', 'moins de bruit que'],
            ['equal', 'aussi cher que', 'autant de bruit que'],
            ['the most', 'le / la / les plus cher(s)', 'le plus de bruit'],
          ],
        ),
        table(
          'Irregular forms.',
          ['Basic', 'Comparative', 'Superlative'],
          [
            ['bon (adjective)', 'meilleur(e)(s)', 'le / la / les meilleur(e)(s)'],
            ['bien (adverb)', 'mieux', 'le mieux'],
          ],
        ),
        p(
          'The article of the superlative agrees with the noun: *le marché le plus animé*, *la plateforme la plus pratique*. After a superlative, **de** means “in”: *le plus beau de la ville*.',
        ),
        examples(
          ['Ce magasin est moins cher que l’autre.', 'This shop is cheaper than the other one.'],
          ['Elle cuisine mieux que moi.', 'She cooks better than me.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ plus bon, plus bonne  ✓ meilleur, meilleure',
          '✗ Elle cuisine meilleur que moi.  ✓ Elle cuisine mieux que moi.',
          '✗ C’est plus beau de la ville.  ✓ C’est le plus beau de la ville.',
        ),
      ),
    ],
    related: ['fr-b11-certainty', 'fr-b11-adj-place'],
    sources: [S.comparative, S.superlative],
  },
  {
    id: 'fr-b11-adj-place',
    title: 'Place of the adjective',
    tagline: 'Before or after the noun?',
    level: LEVEL,
    summary:
      'Most French adjectives follow the noun. A few short and very common ones come before it: beau, bon, petit, grand, jeune, vieux, nouveau, joli, gros, mauvais. When two adjectives are used, each goes in its own place.',
    sections: [
      section(
        'rule',
        'Before or after?',
        table(
          'Position of the adjective.',
          ['Position', 'Adjectives', 'Example'],
          [
            [
              'before the noun',
              'beau, bon, petit, grand, jeune, vieux, nouveau, joli, gros, mauvais',
              'un petit panier, une jolie robe',
            ],
            [
              'after the noun',
              'colours, shapes, nationalities, most other adjectives',
              'une robe rouge, un sac rond, un fromage français',
            ],
            ['both', 'one before and one after', 'une jolie robe rouge'],
          ],
        ),
        p(
          'Before a masculine noun that starts with a vowel, **beau, nouveau, vieux** become **bel, nouvel, vieil**: *un bel appartement, un nouvel emploi*. Some adjectives change meaning with the place: *un ancien élève* (a former pupil), *une maison ancienne* (an old house).',
        ),
        examples(
          ['Elle a un vieux vélo rouge.', 'She has an old red bike.'],
          [
            'Nous cherchons un grand appartement lumineux.',
            'We are looking for a big, bright flat.',
          ],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ un panier petit  ✓ un petit panier',
          '✗ une rouge voiture  ✓ une voiture rouge',
          '✗ un beau appartement  ✓ un bel appartement',
        ),
      ),
    ],
    related: ['fr-b11-comparison'],
    sources: [S.adjective],
  },
  {
    id: 'fr-b11-pqp',
    title: 'Plus-que-parfait',
    tagline: 'What had already happened?',
    level: LEVEL,
    summary:
      'The plus-que-parfait expresses an action that was finished before another past moment. It is the imparfait of avoir or être plus the past participle. The choice of auxiliary is the same as in the passé composé.',
    sections: [
      section(
        'form',
        'How it is formed',
        formsTable(
          'avoir or être in the imparfait + participle.',
          ['finir', 'prendre', 'aller'],
          (v) => plusQueParfait(v),
        ),
        p(
          'With **être** the participle agrees with the subject: *elles étaient parties*. Pronominal verbs also take être: *je m’étais levé tôt*.',
        ),
      ),
      section(
        'use',
        'When to use it',
        p(
          'Use it for the earlier of two past events: *Quand je suis arrivé, le film **avait** déjà **commencé**.* It is also used after verbs of saying and thinking in the past: *Il m’a dit qu’il **avait** déjà **mangé**.*',
        ),
        examples(
          [
            'Elle avait déjà visité le Maroc avant d’y vivre.',
            'She had already visited Morocco before living there.',
          ],
          ['Nous étions partis tôt.', 'We had left early.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Quand je suis arrivé, il a déjà mangé.  ✓ Quand je suis arrivé, il avait déjà mangé.',
          '✗ Nous avions partis.  ✓ Nous étions partis.',
        ),
      ),
    ],
    related: ['fr-b11-imparfait-pc', 'fr-b11-chronology'],
    sources: [S.plusQueParfait],
  },
  {
    id: 'fr-b11-en-y',
    title: 'The pronouns en and y',
    tagline: 'Replace a place, a thing or a quantity',
    level: LEVEL,
    summary:
      'En replaces de + noun or a quantity; y replaces à / dans / sur + a place or a thing. Both stand before the verb (before the auxiliary in the passé composé, before the infinitive otherwise).',
    sections: [
      section(
        'rule',
        'En or y?',
        table(
          'Two small pronouns.',
          ['Pronoun', 'Replaces', 'Example'],
          [
            ['en', 'de + noun (from, about)', 'Tu viens de Dakar ? — J’en viens.'],
            ['en', 'a quantity or du / de la / des + noun', 'Tu as des cousins ? — J’en ai trois.'],
            ['y', 'à / au / dans / chez + a place', 'Tu vas au Maroc ? — J’y vais.'],
            ['y', 'à + a thing (penser à, répondre à)', 'Tu penses à ton pays ? — J’y pense.'],
          ],
        ),
        p(
          'Position: *J’y suis allé. Je veux y aller. Je n’en ai pas.* In the affirmative imperative they follow the verb: *Vas-y ! Prends-en !* (the -s of va and prends reappears before y and en). For **people**, use the stressed pronoun instead of y: *Je pense à elle.*',
        ),
        examples(
          ['Il n’y est jamais allé.', 'He has never been there.'],
          ['Nous en avons discuté hier.', 'We discussed it yesterday.'],
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Je suis allé y.  ✓ J’y suis allé.',
          '✗ J’ai trois.  ✓ J’en ai trois.',
          '✗ Je pense à lui → j’y pense (for a person).  ✓ Je pense à lui.',
        ),
      ),
    ],
    related: ['fr-b11-pqp'],
    sources: [S.en, S.y],
  },
  {
    id: 'fr-b11-chronology',
    title: 'avant de, après avoir, dès que',
    tagline: 'Put events in order',
    level: LEVEL,
    summary:
      'Avant de + infinitive and après avoir / être + participle link two actions of the same subject. Dès que + verb means as soon as. Il y a, depuis and au bout de place an event in time.',
    sections: [
      section(
        'rule',
        'Words for order and time',
        table(
          'Chronology.',
          ['Expression', 'Meaning', 'Example'],
          [
            ['avant de + infinitive', 'before (doing)', 'Avant de partir, j’ai fait ma valise.'],
            [
              'après avoir / être + participle',
              'after (having)',
              'Après avoir mangé, elle est sortie.',
            ],
            ['dès que + verb', 'as soon as', 'Je t’appellerai dès que j’arriverai.'],
            ['il y a + period', 'ago', 'Il a déménagé il y a trois ans.'],
            ['depuis + period', 'for, since (still true)', 'Il habite à Abidjan depuis cinq ans.'],
            ['au bout de + period', 'after a period', 'Au bout de deux mois, il parlait bien.'],
          ],
        ),
        p(
          'After **dès que**, use the **future** (not the present) for a coming event, as in *quand*. For reflexive verbs: *Après m’être installé, j’ai cherché un travail.*',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Avant partir, …  ✓ Avant de partir, …',
          '✗ Après manger, …  ✓ Après avoir mangé, …',
          '✗ Il habite ici il y a cinq ans.  ✓ Il habite ici depuis cinq ans.',
        ),
      ),
    ],
    related: ['fr-b11-pqp', 'fr-b11-narration'],
    sources: [S.connector],
  },
  {
    id: 'fr-b11-passive',
    title: 'The passive voice',
    tagline: 'The article is published by the journalist',
    level: LEVEL,
    summary:
      'The passive puts the object of the action first. It is formed with être (in the tense of the active verb) plus the past participle, which agrees with the subject. The doer, if mentioned, follows par.',
    sections: [
      section(
        'form',
        'How it is formed',
        table(
          'From active to passive.',
          ['Tense', 'Active', 'Passive'],
          [
            [
              'present',
              'Le journaliste publie l’article.',
              'L’article est publié par le journaliste.',
            ],
            [
              'passé composé',
              'La rédaction a vérifié la source.',
              'La source a été vérifiée par la rédaction.',
            ],
            ['future', 'On annoncera les résultats.', 'Les résultats seront annoncés.'],
          ],
        ),
        p(
          'The participle always agrees with the **new subject**: *la rumeur a été démentie, les photos sont partagées*. In the passé composé, **été** never changes. Use **par** for the doer; **de** appears with feelings (*aimé de tous*).',
        ),
        tip(
          'On instead of the passive',
          'French often avoids the passive: *On annonce les résultats demain* or *Les résultats s’annoncent demain* are more natural in speech.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ La rumeur a été démenti.  ✓ La rumeur a été démentie.',
          '✗ Les photos sont été partagées.  ✓ Les photos ont été partagées.',
          '✗ L’article a publié par le journaliste.  ✓ L’article a été publié par le journaliste.',
        ),
      ),
    ],
    related: ['fr-b11-nominalisation'],
    sources: [S.passive],
  },
  {
    id: 'fr-b11-nominalisation',
    title: 'Headlines: verb → noun',
    tagline: 'Les prix augmentent → L’augmentation des prix',
    level: LEVEL,
    summary:
      'Press headlines often use a noun phrase instead of a sentence. Many nouns come from a verb: -er → -ation, -ir → -ssement, -ir → -ure, or an irregular noun like la baisse. Learn the noun together with the verb.',
    sections: [
      section(
        'rule',
        'From verb to noun',
        table(
          'Common patterns.',
          ['Verb', 'Noun', 'Headline'],
          [
            ['augmenter', 'l’augmentation', 'L’augmentation des prix'],
            ['arriver', 'l’arrivée', 'L’arrivée du président'],
            ['découvrir', 'la découverte', 'La découverte d’un virus'],
            ['décider', 'la décision', 'La décision du gouvernement'],
            ['baisser', 'la baisse', 'La baisse du chômage'],
            ['ouvrir', 'l’ouverture', 'L’ouverture d’un musée'],
          ],
        ),
        p(
          'The subject of the verb becomes **de + noun**: *le chômage baisse → la baisse du chômage*. The gender of the noun follows its ending: nouns in **-tion, -sion, -ure, -ée** are feminine, nouns in **-ment** are masculine (*un changement*).',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ Baisser du chômage  ✓ La baisse du chômage',
          '✗ Le création d’un club  ✓ La création d’un club',
        ),
      ),
    ],
    related: ['fr-b11-passive'],
    sources: [S.nominalisation],
  },
  {
    id: 'fr-b11-adverbs',
    title: 'Adverbs in -ment',
    tagline: 'Add -ment to the feminine adjective',
    level: LEVEL,
    summary:
      'Most French adverbs of manner end in -ment. Take the feminine form of the adjective and add -ment (lent → lentement). After a vowel add -ment to the masculine (vrai → vraiment). Adjectives in -ent and -ant give -emment and -amment.',
    sections: [
      section(
        'rule',
        'How to form them',
        table(
          'Adverbs in -ment.',
          ['Adjective', 'Adverb', 'Rule'],
          [
            ['lent / lente', 'lentement', 'feminine + -ment'],
            ['heureux / heureuse', 'heureusement', 'feminine + -ment'],
            ['vrai', 'vraiment', 'ends in a vowel: + -ment'],
            ['évident', 'évidemment', '-ent → -emment'],
            ['constant', 'constamment', '-ant → -amment'],
            ['gentil', 'gentiment', 'irregular'],
          ],
        ),
        p(
          'The adverb goes after the verb (*Il répond rapidement*), before an adjective (*vraiment intéressant*) or at the start of a sentence (*Heureusement, personne n’a été blessé*). Some common adverbs are not formed this way: **bien, mal, vite, mieux**.',
        ),
      ),
      section(
        'mistakes',
        'Typical mistakes',
        mistake(
          'Watch out',
          '✗ évidentment  ✓ évidemment',
          '✗ Il parle bonnement français.  ✓ Il parle bien français.',
          '✗ Elle répond rapide.  ✓ Elle répond rapidement.',
        ),
      ),
    ],
    related: ['fr-b11-passive'],
    sources: [S.adverb],
  },
];
