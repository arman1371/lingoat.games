import { passeCompose, presentFr } from '@/lib/french/tenses';
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

/** Present-tense table, one column per verb, forms from `presentFr` (src/lib/french/tenses). */
const presentTable = (caption: string, verbs: readonly string[]) => {
  const all = verbs.map((v) => presentFr(v));
  return table(
    caption,
    ['Person', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
};

/** French A2.1: unit 1 (past tenses, negatives, time markers) and unit 2 (outings, modals, y). */
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
  {
    id: 'fr-a21-invitations',
    title: 'Suggesting, accepting, refusing',
    tagline: 'Ça te dit de sortir ?',
    level: LEVEL,
    summary:
      'Suggest an outing with Ça te dit de + infinitive or Tu as envie de + infinitive. Accept with Bonne idée or Avec plaisir; refuse politely with Désolé, je ne peux pas and a reason.',
    sections: [
      section(
        'suggest',
        'Suggesting something',
        table(
          'Ways to suggest an outing.',
          ['Phrase', 'Meaning', 'Example'],
          [
            [
              'Ça te / vous dit de + infinitif ?',
              'Do you feel like …?',
              'Ça te dit d’aller au théâtre ?',
            ],
            [
              'Tu as / Vous avez envie de + infinitif ?',
              'Do you fancy …?',
              'Tu as envie de sortir samedi ?',
            ],
            ['On + présent ?', 'Shall we …?', 'On va au cirque ?'],
            ['On y va ?', 'Shall we go?', 'Il est huit heures : on y va ?'],
          ],
        ),
        p(
          '**Avoir envie de** expresses a wish or desire and is followed by a noun or an infinitive. With a verb, **de** shortens to **d’** before a vowel: *Ça te dit d’aller au concert ?*',
        ),
        tip(
          'Tu or vous?',
          'Ça te dit …? is for friends, Ça vous dit …? is polite. In everyday French *on* is often used instead of nous: on va au cinéma = we are going to the cinema.',
        ),
      ),
      section(
        'answer',
        'Saying yes, saying no',
        table(
          'Answers to an invitation.',
          ['Accepting', 'Refusing'],
          [
            ['Bonne idée !', 'Désolé, je ne peux pas.'],
            ['Avec plaisir !', 'Je suis pris ce soir.'],
            ['Pourquoi pas ?', 'Non merci, pas ce soir.'],
            ['D’accord, on y va !', 'Dommage, je n’ai pas le temps.'],
          ],
        ),
        p(
          'A polite refusal gives a short reason: *Désolé, je ne peux pas : je suis pris.* To fix a meeting say *On se retrouve où ?* and *Rendez-vous à huit heures devant l’entrée.*',
        ),
        mistake(
          'Watch out',
          '✗ Bon idée !  ✓ Bonne idée ! (idée is feminine)',
          '✗ Ça te dit aller au cinéma ?  ✓ Ça te dit d’aller au cinéma ?',
        ),
      ),
    ],
    related: ['fr-a21-modals', 'fr-a21-y', 'fr-futur-proche'],
    sources: [S.envie],
  },
  {
    id: 'fr-a21-modals',
    title: 'pouvoir, devoir, vouloir',
    tagline: 'Can, must, want: the verbs that lead to an infinitive',
    level: LEVEL,
    summary:
      'Pouvoir (can), devoir (must) and vouloir (want) are irregular. Each is followed directly by an infinitive; in the negative ne … pas wraps around the first verb.',
    sections: [
      section(
        'forms',
        'The present tense',
        presentTable('Present tense of pouvoir, devoir and vouloir.', [
          'pouvoir',
          'devoir',
          'vouloir',
        ]),
        p(
          'All three have **two stems**: one for je, tu, il/elle/on and ils/elles (peux, dois, veux …) and one for nous and vous (pouvons, devons, voulons). Note the **-x** in peux and veux, which devoir lacks (dois).',
        ),
        tip(
          'Je voudrais',
          'Je voudrais (I would like) is the polite form of je veux and is used to ask for tickets, a table or a favour.',
        ),
      ),
      section(
        'use',
        'With an infinitive',
        p(
          '**Pouvoir** expresses ability, possibility or permission (*Je peux venir.*). **Devoir** expresses necessity or obligation (*Nous devons réserver.*). **Vouloir** expresses a wish (*Ils veulent sortir.*). The second verb stays in the infinitive.',
        ),
        mistake(
          'Watch out',
          '✗ Je ne peut pas venir.  ✓ Je ne peux pas venir.',
          '✗ Nous devez partir.  ✓ Nous devons partir.',
          '✗ Elle ne pas peut sortir.  ✓ Elle ne peut pas sortir.',
        ),
        examples(
          ['Tu peux venir au concert ?', 'Can you come to the concert?'],
          ['Elle ne peut pas sortir : elle est malade.', 'She cannot go out: she is ill.'],
          ['Ils doivent partir tôt.', 'They have to leave early.'],
        ),
      ),
    ],
    related: ['fr-prendre-vouloir', 'fr-a21-invitations', 'fr-negation'],
    sources: [S.pouvoir, S.devoir],
  },
  {
    id: 'fr-a21-y',
    title: 'The pronoun y',
    tagline: 'J’y vais, allons-y: how to say “there”',
    level: LEVEL,
    summary:
      'Y replaces à + a place (or à + a thing) and means “there”. It goes right before the verb, before the auxiliary in the passé composé, and after an imperative with a hyphen.',
    sections: [
      section(
        'meaning',
        'What y replaces',
        table(
          'Y instead of a place.',
          ['With the place', 'With y'],
          [
            ['Je vais au stade.', 'J’y vais.'],
            ['Nous allons à la piscine.', 'Nous y allons.'],
            ['Il est à la patinoire.', 'Il y est.'],
            ['Elle va au parc tous les jours.', 'Elle y va tous les jours.'],
          ],
        ),
        p(
          '**Y** also replaces a place introduced by *dans, chez* or *sur*, and an idea introduced by *à* (*Je pense à mon examen → J’y pense*). Before a vowel **je** becomes **j’**: *j’y vais.*',
        ),
      ),
      section(
        'position',
        'Where does y go?',
        table(
          'The position of y.',
          ['Case', 'Example'],
          [
            ['Present tense', 'Tu y vas ?'],
            ['Negative', 'Nous n’y allons pas.'],
            ['Passé composé', 'Je n’y suis jamais allé.'],
            ['Infinitive (futur proche)', 'Je vais y aller.'],
            ['Imperative', 'Allons-y ! Vas-y !'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je vais y au cinéma.  ✓ J’y vais.',
          '✗ Je suis jamais y allé.  ✓ Je n’y suis jamais allé.',
          '✗ Allons y !  ✓ Allons-y !',
        ),
        tip(
          'Futur simple',
          'Before the future and conditional forms of aller the y disappears: j’irai, not j’y irai.',
        ),
      ),
    ],
    related: ['fr-aller', 'fr-futur-proche', 'fr-a21-invitations'],
    sources: [S.y],
  },
];
