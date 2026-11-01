import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';
import { FRENCH_PRONOUNS } from '@/lib/persons';
import { subjunctiveFr } from '@/lib/french/subjunctive';

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
];
