import { reflexiveFr } from '@/lib/french/conjugation';
import { passeComposeAvoir } from '@/lib/french/passeCompose';
import { FRENCH_PRONOUNS } from '@/lib/persons';
import { examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as FR } from './sources-fr';
import { FR12_SOURCES as S } from './sources-fr-a1-2';

const LEVEL = 'fr-a1-2';

/** A table of pronominal verbs (me lève, te laves …), forms from `reflexiveFr()` in src/lib/french. */
const reflexiveTable = (caption: string, verbs: readonly string[]) => {
  const all = verbs.map((v) => reflexiveFr(v));
  return table(
    caption,
    ['Person', ...verbs.map((v) => (/^[aeiouhéè]/i.test(v) ? `s’${v}` : `se ${v}`))],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
};

/** A table of passé composé forms with avoir, one column per verb: [infinitive, participle]. */
const pcTable = (caption: string, verbs: readonly (readonly [string, string])[]) => {
  const all = verbs.map(([, participle]) => passeComposeAvoir(participle));
  return table(
    caption,
    ['Person', ...verbs.map(([v]) => v)],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
};

/** French A1.2, units 1 and 2: the daily routine, family events and descriptions. */
export const FR12_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-pronominal',
    title: 'Pronominal verbs',
    tagline: 'Why is there a little word before the verb?',
    level: LEVEL,
    summary:
      'A pronominal verb comes with a pronoun that matches the subject: me, te, se, nous, vous, se. Me, te and se shorten to m’, t’, s’ before a vowel or h. In the negative, ne goes before that pronoun.',
    sections: [
      section(
        'forms',
        'The pronoun changes with the subject',
        p(
          'Verbs like **se lever** (to get up) are built with a pronoun that points back to the subject. You cannot leave it out: *je me lève*, not *je lève* (which would mean “I raise”).',
        ),
        reflexiveTable('Present tense of three pronominal verbs.', ['lever', 'laver', 'habiller']),
        tip(
          'Spot the pattern',
          'The pronoun is me, te, se, nous, vous, se: it always repeats the person of the subject.',
          'Before a vowel or a silent h the short pronouns elide: je m’habille, tu t’habilles, elle s’habille.',
        ),
      ),
      section(
        'negative',
        'Saying no, and the infinitive',
        p(
          'Put **ne** before the pronoun and **pas** after the verb: *Je ne me lève pas tôt.* In the infinitive the pronoun stays too, and it matches the subject: *Je vais me coucher. Nous allons nous reposer.*',
        ),
        mistake(
          'Watch out',
          '✗ Je lève à sept heures.  ✓ Je me lève à sept heures.',
          '✗ Tu se laves.  ✓ Tu te laves.',
          '✗ Je me habille.  ✓ Je m’habille.',
        ),
        examples(
          ['Je me réveille à six heures.', 'I wake up at six.'],
          ['Elle s’habille vite.', 'She gets dressed quickly.'],
          ['Nous ne nous couchons pas tôt.', 'We do not go to bed early.'],
        ),
      ),
    ],
    related: ['fr-er-verbs', 'fr-negation', 'fr-frequency'],
    sources: [S.pronominal, S.pronominalForm],
  },
  {
    id: 'fr-frequency',
    title: 'How often?',
    tagline: 'Always, often, sometimes, never',
    level: LEVEL,
    summary:
      'Toujours, souvent, rarement and parfois go right after the verb. Never is ne … jamais around the verb, without pas. Tous les jours, d’habitude and parfois can also open the sentence.',
    sections: [
      section(
        'scale',
        'From always to never',
        table(
          'Frequency words, from most to least often.',
          ['Word', 'Meaning', 'Example'],
          [
            ['toujours', 'always', 'Je me lève toujours à sept heures.'],
            ['d’habitude', 'usually', 'D’habitude, je dîne à huit heures.'],
            ['souvent', 'often', 'Elle regarde souvent la télévision.'],
            ['parfois', 'sometimes', 'Nous allons parfois au marché.'],
            ['de temps en temps', 'from time to time', 'Je fais la lessive de temps en temps.'],
            ['rarement', 'rarely', 'Il se promène rarement.'],
            ['ne … jamais', 'never', 'Je ne fais jamais la vaisselle.'],
          ],
        ),
        p(
          'Short adverbs sit right **after the conjugated verb**: *Il se couche souvent tard.* Longer phrases (tous les jours, de temps en temps, d’habitude) and parfois are also common at the start: *Tous les jours, je travaille.*',
        ),
      ),
      section(
        'jamais',
        'ne … jamais',
        p(
          '**Jamais** is a negative word that works like pas: **ne** goes before the verb (and before a pronominal verb’s pronoun) and **jamais** after it. Never add pas.',
        ),
        mistake(
          'Watch out',
          '✗ Je me couche jamais tard.  ✓ Je ne me couche jamais tard.',
          '✗ Je ne mange pas jamais de viande.  ✓ Je ne mange jamais de viande.',
          '✗ Je jamais fais le ménage.  ✓ Je ne fais jamais le ménage.',
        ),
        examples(
          ['Nous ne dînons jamais avant huit heures.', 'We never have dinner before eight.'],
          ['Il n’arrive jamais en retard.', 'He never arrives late.'],
        ),
        tip(
          'In an answer',
          'In a short spoken answer jamais can stand alone: “Tu fais la vaisselle ? – Jamais !”',
        ),
      ),
    ],
    related: ['fr-negation', 'fr-pronominal', 'fr-sequence'],
    sources: [S.jamais],
  },
  {
    id: 'fr-sequence',
    title: 'First, then, finally',
    tagline: 'Putting the day in order and giving the time',
    level: LEVEL,
    summary:
      'Order a day with d’abord, ensuite or puis, and enfin. Avant and après take a noun. For clock times use à (exact), vers (around) and de … à … (from … to).',
    sections: [
      section(
        'order',
        'The order of a day',
        table(
          'Words that put events in order.',
          ['Word', 'Meaning', 'Example'],
          [
            ['d’abord', 'first', 'D’abord, je me lève.'],
            ['ensuite / puis', 'then, next', 'Ensuite, je prends le petit-déjeuner.'],
            ['enfin', 'finally', 'Enfin, je pars au travail.'],
            ['avant + noun', 'before', 'Je lis avant le dîner.'],
            ['après + noun', 'after', 'Après le travail, je fais les courses.'],
          ],
        ),
        p(
          'Use **d’abord** for the first step, **ensuite** or **puis** for the next ones and **enfin** for the last. Enfin closes a list: do not use it for the second step.',
        ),
      ),
      section(
        'time',
        'À, vers and de … à …',
        table(
          'Three ways to give a time.',
          ['Form', 'Meaning', 'Example'],
          [
            ['à + hour', 'at exactly', 'Je me lève à sept heures.'],
            ['vers + hour', 'around', 'Je rentre vers six heures.'],
            ['de … à …', 'from … to …', 'Je travaille de neuf heures à dix-sept heures.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je travaille de neuf heures vers dix-sept heures.  ✓ … de neuf heures à dix-sept heures.',
          '✗ Je rentre à vers six heures.  ✓ Je rentre vers six heures.',
        ),
        examples(
          ['Je rentre vers six heures et demie.', 'I come home around half past six.'],
          ['Nous dînons à huit heures.', 'We have dinner at eight.'],
        ),
      ),
    ],
    related: ['fr-frequency', 'fr-pronominal'],
    sources: [S.dAbord, S.vers],
  },
  {
    id: 'fr-passe-compose-avoir',
    title: 'The passé composé with avoir',
    tagline: 'How do I say what happened?',
    level: LEVEL,
    summary:
      'The passé composé is avoir in the present plus a past participle: j’ai mangé, nous avons fini. Regular participles end in -é (-er verbs), -i (-ir verbs) and -u (-re verbs); some are irregular. Ne … pas wraps avoir.',
    sections: [
      section(
        'form',
        'Avoir + past participle',
        p(
          'The **passé composé** talks about finished events. It has two parts: the present of **avoir** and the **past participle** of the verb. The participle does not change after avoir.',
        ),
        pcTable('The passé composé of manger, finir and attendre.', [
          ['manger', 'mangé'],
          ['finir', 'fini'],
          ['attendre', 'attendu'],
        ]),
        tip(
          'Form the participle',
          '-er verbs: -é (parler → parlé).',
          '-ir verbs: -i (finir → fini).',
          '-re verbs: -u (attendre → attendu).',
        ),
      ),
      section(
        'irregular',
        'Irregular participles and the negative',
        table(
          'Common irregular participles.',
          ['Infinitive', 'Participle', 'Example'],
          [
            ['avoir', 'eu', 'Ils ont eu un bébé.'],
            ['être', 'été', 'J’ai été malade.'],
            ['faire', 'fait', 'Qu’est-ce que tu as fait ?'],
            ['prendre', 'pris', 'Elle a pris un café.'],
            ['offrir', 'offert', 'Nous avons offert un cadeau.'],
          ],
        ),
        p(
          'In the negative **ne … pas** goes around **avoir**, not around the participle: *Je n’ai pas mangé.*',
        ),
        mistake(
          'Watch out',
          '✗ J’ai mange.  ✓ J’ai mangé.',
          '✗ J’ai manger.  ✓ J’ai mangé.',
          '✗ Je ne pas ai mangé.  ✓ Je n’ai pas mangé.',
        ),
        examples(
          ['Hier soir, j’ai regardé un film.', 'Last night I watched a film.'],
          ['Nous n’avons pas fini.', 'We have not finished.'],
        ),
      ),
    ],
    related: ['fr-etre-avoir', 'fr-negation', 'fr-time-markers'],
    sources: [S.passeCompose, S.manger, FR.finir, S.attendre, FR.faire, FR.prendre],
  },
  {
    id: 'fr-time-markers',
    title: 'Past and future time markers',
    tagline: 'Last week, next month, two days ago, in two days',
    level: LEVEL,
    summary:
      'Look back with hier, avant-hier and il y a + a length of time. Look ahead with demain, après-demain and dans + a length of time. Dernier and prochain follow the noun and agree with it.',
    sections: [
      section(
        'markers',
        'Looking back and looking ahead',
        table(
          'Time markers by direction.',
          ['Looking back (passé composé)', 'Looking ahead (aller + infinitive)'],
          [
            ['hier, hier soir, hier matin', 'demain, demain soir'],
            ['avant-hier', 'après-demain'],
            ['il y a deux jours', 'dans deux jours'],
            ['la semaine dernière', 'la semaine prochaine'],
            ['le mois dernier, l’année dernière', 'le mois prochain, l’année prochaine'],
          ],
        ),
        p(
          '**Il y a** + a length of time means *ago*; **dans** + a length of time means *in*. They are never interchangeable.',
        ),
      ),
      section(
        'dernier',
        'dernier and prochain',
        p(
          'With time nouns **dernier** (last) and **prochain** (next) go after the noun and agree with it: *la semaine dernière* (feminine), *le mois prochain* (masculine), *samedi dernier*.',
        ),
        mistake(
          'Watch out',
          '✗ Mon cousin arrive il y a deux jours.  ✓ Mon cousin arrive dans deux jours.',
          '✗ l’année dernier.  ✓ l’année dernière.',
          '✗ Samedi dernier, je vais faire une fête.  ✓ Samedi prochain, je vais faire une fête.',
        ),
        examples(
          ['Ma nièce a téléphoné la semaine dernière.', 'My niece called last week.'],
          ['Mon cousin arrive dans deux jours.', 'My cousin arrives in two days.'],
        ),
      ),
    ],
    related: ['fr-passe-compose-avoir', 'fr-futur-proche'],
    sources: [S.ilYA, S.dernier, S.prochain],
  },
];
