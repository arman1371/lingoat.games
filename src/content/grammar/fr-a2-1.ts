import { passeCompose } from '@/lib/french/tenses';
import { FRENCH_PRONOUNS } from '@/lib/persons';
import { examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR21_SOURCES as S } from './sources-fr-a2-1';

const LEVEL = 'fr-a2-1';

/** Passé composé table with être, one column per verb (masculine forms), generated from `src/lib/french/tenses`. */
const etreTable = (caption: string, verbs: readonly string[]) => {
  const all = verbs.map((v) => passeCompose(v));
  return table(
    caption,
    ['Person', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
};

/** French A2.1: the past tenses, negatives and time markers of unit 1. */
export const FR21_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-a21-passe-compose',
    title: 'Passé composé with être',
    tagline: 'Je suis allé or j’ai allé?',
    level: LEVEL,
    summary:
      'A small group of verbs form the passé composé with être instead of avoir: aller, venir, arriver, partir, entrer, sortir, rester, tomber, naître, mourir and every pronominal verb. The participle agrees with the subject.',
    sections: [
      section(
        'which',
        'Which verbs take être?',
        p(
          'Most verbs use **avoir** (*j’ai étudié*). Many verbs of movement and change of state use **être**, and so do **all pronominal verbs**, even when they have an object (*ils se sont lavé les mains*).',
        ),
        table(
          'Common verbs with être.',
          ['Verb', 'Participle', 'Example'],
          [
            ['aller', 'allé', 'Je suis allé à Paris.'],
            ['venir', 'venu', 'Elle est venue hier.'],
            ['arriver', 'arrivé', 'Nous sommes arrivés tard.'],
            ['partir', 'parti', 'Ils sont partis en juin.'],
            ['rester', 'resté', 'Tu es resté chez toi.'],
            ['naître', 'né', 'Je suis né en 1998.'],
            ['se marier', 'marié', 'Ils se sont mariés.'],
          ],
        ),
        tip(
          'Descendre, monter, sortir, entrer, passer',
          'Some of these verbs take être when they have no object (elle est sortie) and avoir when they do (elle a sorti le chien).',
        ),
      ),
      section(
        'forms',
        'The forms and the agreement',
        etreTable('Passé composé with être (masculine forms shown).', ['aller', 'arriver']),
        p(
          'With **être** the participle agrees with the subject like an adjective: add **-e** for a woman and **-s** for several people. *Elle est allée. Ils sont allés. Elles sont allées.* With avoir the participle does not agree with the subject.',
        ),
        mistake(
          'Watch out',
          '✗ J’ai allé à Paris.  ✓ Je suis allé à Paris.',
          '✗ Elle est parti.  ✓ Elle est partie.',
          '✗ Je me ai marié.  ✓ Je me suis marié.',
        ),
        examples(
          ['Elle est née à Lyon en 1990.', 'She was born in Lyon in 1990.'],
          ['Nous nous sommes installés à Paris.', 'We settled in Paris.'],
          ['Tu t’es marié en juin ?', 'Did you get married in June?'],
        ),
      ),
    ],
    related: ['fr-passe-compose-avoir', 'fr-pronominal', 'fr-a21-participles'],
    sources: [S.passeCompose],
  },
  {
    id: 'fr-a21-participles',
    title: 'Irregular past participles',
    tagline: 'Fait, pris, eu, vu: the ones to learn by heart',
    level: LEVEL,
    summary:
      'Regular participles come from the infinitive: -er → -é, -ir → -i, -re → -u. A few very common verbs have their own participle and have to be learned.',
    sections: [
      section(
        'regular',
        'Regular endings',
        table(
          'Regular participles.',
          ['Infinitive', 'Participle', 'Example'],
          [
            ['travailler', 'travaillé', 'J’ai travaillé à Lyon.'],
            ['finir', 'fini', 'Elle a fini ses études.'],
            ['vendre', 'vendu', 'Nous avons vendu la maison.'],
          ],
        ),
        p(
          'Verbs in **-er** (the biggest group) always end in **-é**; the second-group verbs in **-ir** (finir, choisir, réussir) in **-i**; many verbs in **-re** in **-u**.',
        ),
      ),
      section(
        'irregular',
        'Irregular participles',
        table(
          'Irregular participles you meet in a life story.',
          ['Infinitive', 'Participle', 'Example'],
          [
            ['être', 'été', 'J’ai été malade.'],
            ['avoir', 'eu', 'Il a eu son bac.'],
            ['faire', 'fait', 'J’ai fait un stage.'],
            ['prendre', 'pris', 'Nous avons pris une décision.'],
            ['apprendre', 'appris', 'Elle a appris le français.'],
            ['voir', 'vu', 'Tu as vu ce film ?'],
            ['écrire', 'écrit', 'Il a écrit un roman.'],
            ['vivre', 'vécu', 'J’ai vécu à Nice.'],
            ['ouvrir', 'ouvert', 'Ils ont ouvert un café.'],
            ['obtenir', 'obtenu', 'Elle a obtenu son diplôme.'],
          ],
        ),
        tip(
          'Learn them in families',
          'Prendre, apprendre and comprendre all give pris, appris, compris. Venir, devenir and obtenir give venu, devenu, obtenu.',
        ),
        mistake(
          'Watch out',
          '✗ J’ai faisé un stage.  ✓ J’ai fait un stage.',
          '✗ Il a vivu à Rome.  ✓ Il a vécu à Rome.',
        ),
      ),
    ],
    related: ['fr-a21-passe-compose', 'fr-passe-compose-avoir', 'fr-ir-verbs'],
    sources: [S.passeCompose, S.faire, S.prendre],
  },
  {
    id: 'fr-a21-negatives',
    title: 'ne … rien, personne, plus, pas encore',
    tagline: 'Nothing, nobody, no longer, not yet',
    level: LEVEL,
    summary:
      'These negatives work like ne … pas: ne goes before the verb. In the passé composé rien, plus and pas encore stand between the auxiliary and the participle, but personne comes after the participle.',
    sections: [
      section(
        'words',
        'The negative words',
        table(
          'Negative words and their place in the passé composé.',
          ['Negative', 'Meaning', 'Example'],
          [
            ['ne … rien', 'nothing', 'Je n’ai rien mangé.'],
            ['ne … personne', 'nobody', 'Je n’ai vu personne.'],
            ['ne … jamais', 'never', 'Il n’a jamais travaillé à l’étranger.'],
            ['ne … plus', 'no longer', 'Elle n’habite plus à Paris.'],
            ['ne … pas encore', 'not yet', 'Nous n’avons pas encore fini.'],
          ],
        ),
        p(
          '**Ne** (or **n’**) goes before the conjugated verb or, in the passé composé, before the auxiliary. **Rien, jamais, plus** and **pas encore** follow the auxiliary; only **personne** goes after the participle.',
        ),
        mistake(
          'Watch out',
          '✗ Je n’ai personne vu.  ✓ Je n’ai vu personne.',
          '✗ Je n’ai vu rien.  ✓ Je n’ai rien vu.',
          '✗ Je ne mange pas rien.  ✓ Je ne mange rien.',
        ),
      ),
      section(
        'subject',
        'Rien and personne as the subject',
        p(
          'When **rien** or **personne** is the subject, it opens the sentence and **ne** follows it: *Personne n’est venu. Rien n’a changé.* There is no pas.',
        ),
        examples(
          ['Personne n’est venu à la fête.', 'Nobody came to the party.'],
          ['Rien n’a changé dans le quartier.', 'Nothing has changed in the neighbourhood.'],
        ),
        tip(
          'In speech',
          'In everyday speech the ne is often dropped (j’ai jamais dit ça, je sais pas). Write it in full in exercises and formal texts.',
        ),
      ),
    ],
    related: ['fr-negation', 'fr-frequency', 'fr-a21-passe-compose'],
    sources: [S.negation],
  },
  {
    id: 'fr-a21-time-markers',
    title: 'pendant, depuis, en',
    tagline: 'For how long, since when, and when',
    level: LEVEL,
    summary:
      'Pendant gives the length of something that is over. Depuis starts at a point in the past and goes up to now, with the present tense. En names a year or month. Il y a + duration means ago.',
    sections: [
      section(
        'compare',
        'Four ways to place an event in time',
        table(
          'Pendant, depuis, il y a and en.',
          ['Word', 'Use', 'Example'],
          [
            ['pendant', 'length of something finished', 'J’ai travaillé à Lyon pendant deux ans.'],
            ['depuis', 'started in the past, still going on', 'J’habite à Lyon depuis 2020.'],
            ['il y a', 'ago', 'J’ai déménagé il y a six mois.'],
            ['en', 'a year, a month, a season', 'Je suis né en 1998. En mai, je pars.'],
          ],
        ),
        p(
          'The tense helps: **depuis** goes with the **present** when the situation continues (*elle étudie le français depuis janvier*), **pendant** usually with the **passé composé** when it is over (*elle a étudié le français pendant un an*).',
        ),
      ),
      section(
        'mistakes',
        'Common mistakes',
        mistake(
          'Watch out',
          '✗ Je travaille ici pendant trois ans. (still true)  ✓ Je travaille ici depuis trois ans.',
          '✗ J’ai déménagé depuis un mois.  ✓ J’ai déménagé il y a un mois.',
          '✗ Je suis né à 1998.  ✓ Je suis né en 1998.',
        ),
        examples(
          [
            'Il est resté chez ses parents pendant toute son enfance.',
            'He stayed with his parents throughout his childhood.',
          ],
          ['Nous nous sommes mariés il y a dix ans.', 'We got married ten years ago.'],
        ),
      ),
    ],
    related: ['fr-time-markers', 'fr-a21-passe-compose', 'fr-futur-proche'],
    sources: [S.depuis, S.pendant],
  },
];
