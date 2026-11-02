import { reflexiveFr } from '@/lib/french/conjugation';
import { passeComposeAvoir } from '@/lib/french/passeCompose';
import { passeCompose, passeComposeReflexive } from '@/lib/french/tenses';
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

/** French A1.2, units 1 to 8: routine, events, home, holidays, health, work, nature and learning French. */
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
  {
    id: 'fr-a12-object-pronouns',
    title: 'le, la, l’, les',
    tagline: 'Say “it” and “them” without repeating the noun',
    level: LEVEL,
    summary:
      'Le, la, l’ and les replace a known thing and go right before the verb: je la prends. With an infinitive they go before the infinitive. In the negative ne comes before the pronoun, and in the passé composé the pronoun goes before avoir.',
    sections: [
      section(
        'forms',
        'Which pronoun?',
        p(
          'Instead of repeating a noun that was already mentioned, use a **direct object pronoun**. It has the same gender and number as the noun it replaces.',
        ),
        table(
          'Direct object pronouns for things.',
          ['Noun', 'Pronoun', 'Example'],
          [
            ['le lit (masculine)', 'le', 'Je le prends.'],
            ['la lampe (feminine)', 'la', 'Je la prends.'],
            ['l’armoire (vowel)', 'l’', 'Je l’aime.'],
            ['les rideaux (plural)', 'les', 'Il les répare.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'The pronoun comes before the verb, the opposite of the English word order: je prends la lampe becomes je la prends.',
          'Le and la both become l’ before a vowel or a silent h.',
        ),
      ),
      section(
        'position',
        'Where does it go?',
        p(
          'The pronoun stands directly before the conjugated verb. With **aller** or **vouloir** + infinitive it stands before the infinitive. In the negative, **ne** goes before the pronoun and **pas** after the verb. In the passé composé the pronoun goes before **avoir**.',
        ),
        table(
          'The same sentence in four patterns.',
          ['Pattern', 'Example'],
          [
            ['Present', 'Je la prends.'],
            ['Negative', 'Je ne la prends pas.'],
            ['With an infinitive', 'Je vais la prendre.'],
            ['Passé composé', 'Je l’ai prise.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je prends la.  ✓ Je la prends.',
          '✗ Je la ne prends pas.  ✓ Je ne la prends pas.',
          '✗ Je vais prendre la.  ✓ Je vais la prendre.',
        ),
        examples(
          [
            'Le plombier répare la douche. Il la répare.',
            'The plumber repairs the shower. He repairs it.',
          ],
          [
            'Tu aimes ces fauteuils ? Oui, je les aime.',
            'Do you like these armchairs? Yes, I like them.',
          ],
        ),
      ),
    ],
    related: ['fr-negation', 'fr-passe-compose-avoir', 'fr-y'],
    sources: [S.cod, FR.personalPronoun],
  },
  {
    id: 'fr-y',
    title: 'The little word y',
    tagline: 'Replace “there” with a single letter',
    level: LEVEL,
    summary:
      'Y replaces a place introduced by à, dans, chez or en. It stands before the verb, like le, la and les: j’y vais. In the negative ne goes before y, and with an infinitive y goes before the infinitive.',
    sections: [
      section(
        'use',
        'One letter for a whole place',
        p(
          'When the place is already known, do not repeat it. **Y** means *there*: *Tu vas à la cave ? — Oui, j’y vais.* It replaces a phrase such as **à la cave**, **dans la chambre** or **en ville**.',
        ),
        table(
          'A place phrase and its replacement with y.',
          ['With the place', 'With y'],
          [
            ['Je vais à la cave.', 'J’y vais.'],
            ['Nous habitons dans cet immeuble.', 'Nous y habitons.'],
            ['Il est dans la cuisine.', 'Il y est.'],
            ['Tu ne vas pas à la cave.', 'Tu n’y vas pas.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'Y always comes right before the verb, never at the end of the sentence.',
          'Before a vowel, je and ne drop their vowel: j’y vais, je n’y vais pas.',
        ),
      ),
      section(
        'position',
        'Position with an infinitive',
        p(
          'With **aller** + infinitive, y stands before the infinitive: *Je vais y aller. Nous allons y habiter.* In the negative the two parts of **ne … pas** wrap the verb that is conjugated: *Je ne vais pas y aller.*',
        ),
        mistake(
          'Watch out',
          '✗ Je vais là.  ✓ J’y vais.',
          '✗ Nous allons y.  ✓ Nous y allons.',
          '✗ Je y vais.  ✓ J’y vais.',
        ),
        examples(
          [
            'Tu vas au garage ? — Non, je n’y vais pas.',
            'Are you going to the garage? — No, I am not going there.',
          ],
          ['Ils vont y habiter l’an prochain.', 'They are going to live there next year.'],
        ),
      ),
    ],
    related: ['fr-a12-object-pronouns', 'fr-futur-proche', 'fr-negation'],
    sources: [S.y, FR.aller],
  },
  {
    id: 'fr-rules',
    title: 'Rules and orders',
    tagline: 'How signs and house rules are written',
    level: LEVEL,
    summary:
      'Written rules on signs use the infinitive (Ne pas fumer) or il est interdit de + infinitive. To tell someone directly, use the imperative (Fermez la porte !). In the negative ne … pas wraps the verb.',
    sections: [
      section(
        'written',
        'On a sign: the infinitive',
        p(
          'A sign speaks to everybody, so it uses the **infinitive**: *Ne pas fumer. Ne pas entrer. Ne pas déranger.* A more formal rule uses **il est interdit de** + infinitive, from *interdit* (forbidden).',
        ),
        table(
          'Two ways to write a rule.',
          ['Short', 'Formal'],
          [
            ['Ne pas fumer.', 'Il est interdit de fumer.'],
            ['Ne pas faire de bruit.', 'Il est interdit de faire du bruit.'],
            ['Ne pas stationner.', 'Il est interdit de stationner ici.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'In a negative infinitive, ne pas stay together before the verb: ne pas fumer, not ne fumer pas.',
        ),
      ),
      section(
        'orders',
        'To a person: the imperative',
        p(
          'When you speak to someone, use the **imperative**: it is the present tense of tu, nous or vous without the pronoun. For -er verbs the tu form loses its -s: *tu fermes* becomes *ferme*. In the negative **ne … pas** wraps the verb: *Ne faites pas de bruit !*',
        ),
        table(
          'The imperative of fermer and faire.',
          ['Form', 'fermer', 'faire (negative)'],
          [
            ['tu', 'Ferme la porte !', 'Ne fais pas de bruit !'],
            ['nous', 'Fermons la porte !', 'Ne faisons pas de bruit !'],
            ['vous', 'Fermez la porte !', 'Ne faites pas de bruit !'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Ne fumer pas ici.  ✓ Ne pas fumer ici.',
          '✗ Tu fermes la porte ! (as an order)  ✓ Ferme la porte !',
          '✗ Ne pas faites de bruit !  ✓ Ne faites pas de bruit !',
        ),
        examples(
          ['Il est interdit de fumer dans l’immeuble.', 'Smoking is forbidden in the building.'],
          ['Ne laissez pas vos clés dehors !', 'Do not leave your keys outside!'],
        ),
      ),
    ],
    related: ['fr-imperative', 'fr-negation'],
    sources: [FR.imperative, S.interdit],
  },
  {
    id: 'fr-place-more',
    title: 'au-dessus de, au milieu de …',
    tagline: 'Say exactly where something is',
    level: LEVEL,
    summary:
      'Longer place words end in de: au-dessus de, en dessous de, au milieu de, autour de, à l’intérieur de, au fond de. De joins the article: du (de + le) and des (de + les), but de la and de l’ stay.',
    sections: [
      section(
        'words',
        'Place words that end in de',
        p(
          'You already know **sur**, **sous**, **devant**, **derrière** and **à côté de**. These longer expressions work like **à côté de**: they take **de** and then the place.',
        ),
        table(
          'Place expressions with de.',
          ['Expression', 'Meaning', 'Example'],
          [
            ['au-dessus de', 'above', 'La lampe est au-dessus de la table.'],
            ['en dessous de', 'below', 'Le chat est en dessous du lit.'],
            ['au milieu de', 'in the middle of', 'Le tapis est au milieu du salon.'],
            ['autour de', 'around', 'Les chaises sont autour de la table.'],
            ['à l’intérieur de', 'inside', 'Les clés sont à l’intérieur de la boîte.'],
            ['au fond de', 'at the back of', 'La cave est au fond du couloir.'],
          ],
        ),
      ),
      section(
        'de-article',
        'de joins the article',
        p(
          '**De** merges with **le** and **les**: de + le = **du**, de + les = **des**. With **la** and **l’** nothing changes.',
        ),
        table(
          'De + article.',
          ['Noun', 'de + article', 'Example'],
          [
            ['le salon', 'du', 'au milieu du salon'],
            ['la table', 'de la', 'autour de la table'],
            ['l’armoire', 'de l’', 'au-dessus de l’armoire'],
            ['les placards', 'des', 'au fond des placards'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ au milieu de le salon.  ✓ au milieu du salon.',
          '✗ autour la table.  ✓ autour de la table.',
          '✗ au-dessus du la lampe.  ✓ au-dessus de la lampe.',
        ),
        examples(
          ['Le miroir est au-dessus du lavabo.', 'The mirror is above the sink.'],
          [
            'Les enfants jouent au milieu du jardin.',
            'The children play in the middle of the garden.',
          ],
        ),
      ),
    ],
    related: ['fr-articles', 'fr-place-prepositions', 'fr-contractions'],
    sources: [S.auDessus, FR.contraction],
  },
  {
    id: 'fr-a12-comparison',
    title: 'plus, moins, aussi … que',
    tagline: 'Which hotel is cheaper? Which beach is nicer?',
    level: LEVEL,
    summary:
      'Compare two things with plus, moins or aussi + adjective + que. The adjective agrees with the first noun. Bon is the exception: its comparative is meilleur, never plus bon.',
    sections: [
      section(
        'three-degrees',
        'More, less, as',
        p(
          'Put the little word before the adjective and **que** before the thing you compare with. **Plus** means *more*, **moins** means *less*, **aussi** means *as … as*.',
        ),
        table(
          'Three ways to compare.',
          ['Degree', 'Pattern', 'Example'],
          [
            ['more', 'plus + adjective + que', 'Le train est plus rapide que le bus.'],
            ['less', 'moins + adjective + que', 'La ville est moins tranquille que la campagne.'],
            ['as … as', 'aussi + adjective + que', 'L’hôtel est aussi cher que l’auberge.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'The adjective does not change form for the comparison, but it still agrees with the first noun: la chambre est moins chère, les prix sont moins chers.',
          'Que becomes qu’ before a vowel: plus grand qu’avant.',
        ),
      ),
      section(
        'meilleur',
        'bon becomes meilleur',
        p(
          'The adjective **bon** (good) has its own comparative: **meilleur**, **meilleure**, **meilleurs**, **meilleures**. French never says *plus bon*. For *less good*, use **moins bon**.',
        ),
        mistake(
          'Watch out',
          '✗ Cet hôtel est plus bon que l’autre.  ✓ Cet hôtel est meilleur que l’autre.',
          '✗ La chambre est moins cher.  ✓ La chambre est moins chère.',
          '✗ Il est plus grand de moi.  ✓ Il est plus grand que moi.',
        ),
        examples(
          ['Le camping est moins cher que l’hôtel.', 'The campsite is cheaper than the hotel.'],
          ['Cette plage est meilleure pour les enfants.', 'This beach is better for children.'],
        ),
      ),
    ],
    related: ['fr-adjectives', 'fr-adjective-position', 'fr-a12-cetait'],
    sources: [S.plus, S.aussi, S.meilleur],
  },
  {
    id: 'fr-a12-partir',
    title: 'partir, sortir, dormir',
    tagline: '-ir verbs that do not follow finir',
    level: LEVEL,
    summary:
      'Partir, sortir and dormir are -ir verbs without -iss-. The singular drops the last consonant of the stem and adds -s, -s, -t (je pars, tu pars, il part); the plural is regular (nous partons).',
    sections: [
      section(
        'forms',
        'One pattern for three verbs',
        table(
          'Present tense of partir, sortir and dormir.',
          ['Person', 'partir', 'sortir', 'dormir'],
          [
            ['je', 'pars', 'sors', 'dors'],
            ['tu', 'pars', 'sors', 'dors'],
            ['il/elle/on', 'part', 'sort', 'dort'],
            ['nous', 'partons', 'sortons', 'dormons'],
            ['vous', 'partez', 'sortez', 'dormez'],
            ['ils/elles', 'partent', 'sortent', 'dorment'],
          ],
        ),
        tip(
          'Spot the pattern',
          'Compare with finir: nous finissons, but nous partons. There is no -iss- in these verbs.',
          'In the singular the t of part- and the m of dorm- disappear: je pars, je dors.',
        ),
      ),
      section(
        'use',
        'Where to? With what?',
        p(
          '**Partir** takes **à** or **en** for a destination (*partir à Rome, partir en France*) and **de** for the starting point (*partir de Paris*). **Sortir** means to go out, and **sortir avec** means to go out with someone.',
        ),
        mistake(
          'Watch out',
          '✗ Je part demain.  ✓ Je pars demain.',
          '✗ Nous partissons à midi.  ✓ Nous partons à midi.',
          '✗ Il dormt bien.  ✓ Il dort bien.',
        ),
        examples(
          ['Je pars en vacances lundi.', 'I am leaving on holiday on Monday.'],
          ['Ils dorment dans une tente.', 'They are sleeping in a tent.'],
        ),
      ),
    ],
    related: ['fr-ir-verbs', 'fr-aller', 'fr-a12-pc-etre'],
    sources: [S.partir, S.sortir, S.dormir],
  },
  {
    id: 'fr-a12-pc-etre',
    title: 'The passé composé with être',
    tagline: 'Je suis allé, elle est arrivée',
    level: LEVEL,
    summary:
      'Verbs of movement and change (aller, arriver, partir, rester, sortir, venir …) form the passé composé with être. The participle then agrees with the subject: elle est allée, nous sommes partis.',
    sections: [
      section(
        'forms',
        'être instead of avoir',
        p(
          'Most verbs take **avoir** (*j’ai mangé*). A small group takes **être** in the present plus the participle. The participle behaves like an adjective: add **-e** for a woman and **-s** for several people.',
        ),
        table(
          'aller in the passé composé.',
          ['Person', 'masculine', 'feminine'],
          FRENCH_PRONOUNS.map((pr) => [
            pr,
            passeCompose('aller')[pr],
            passeCompose('aller', { feminine: true })[pr],
          ]),
        ),
        tip(
          'Spot the pattern',
          'Je suis allé / allée and tu es allé / allée sound the same: the agreement shows only in writing.',
          'Nous sommes allés, vous êtes allés and ils sont allés add -s; elles sont allées adds -es.',
        ),
      ),
      section(
        'which-verbs',
        'Which verbs take être?',
        p(
          'Learn them as a group: **aller, venir, arriver, partir, rester, sortir, entrer, rentrer, tomber, monter, descendre, naître, mourir**. All other verbs you know (visiter, réserver, prendre, dormir …) take avoir.',
        ),
        table(
          'être or avoir?',
          ['être (je suis …)', 'avoir (j’ai …)'],
          [
            ['je suis allé à la mer', 'j’ai visité le musée'],
            ['elle est arrivée hier', 'elle a réservé une chambre'],
            ['nous sommes restés', 'nous avons dormi'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ J’ai allé à Nice.  ✓ Je suis allé à Nice.',
          '✗ Elle est arrivé hier.  ✓ Elle est arrivée hier.',
          '✗ Je n’ai pas resté.  ✓ Je ne suis pas resté.',
        ),
        examples(
          ['Mes parents sont partis lundi.', 'My parents left on Monday.'],
          ['Léa n’est pas restée à l’hôtel.', 'Léa did not stay at the hotel.'],
        ),
      ),
    ],
    related: ['fr-passe-compose-avoir', 'fr-aller', 'fr-negation'],
    sources: [S.passeCompose, FR.aller, S.arriver, S.rester],
  },
  {
    id: 'fr-a12-cetait',
    title: 'c’était, il y avait',
    tagline: 'Describing a place or a holiday in the past',
    level: LEVEL,
    summary:
      'To describe how things were, use c’était (it was), il y avait (there was, there were) and il faisait beau (the weather was nice). These phrases do not change for singular or plural.',
    sections: [
      section(
        'phrases',
        'Three phrases to describe the past',
        p(
          'The tense that describes a situation in the past is the **imparfait**. For now you only need three fixed phrases, built from verbs you already know: *être* → **c’était**, *avoir* → **il y avait**, *faire* → **il faisait**.',
        ),
        table(
          'Present and past.',
          ['Now', 'Then'],
          [
            ['C’est super.', 'C’était super.'],
            ['Il y a une piscine.', 'Il y avait une piscine.'],
            ['Il fait beau.', 'Il faisait beau.'],
            ['Le paysage est magnifique.', 'Le paysage était magnifique.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'The endings -ais, -ait, -aient sound the same: était, avait and faisait all end in the sound [ɛ].',
          'Il y avait does not become il y avaient with a plural: il y avait des touristes.',
        ),
      ),
      section(
        'when',
        'Describing or telling what happened?',
        p(
          'Use **c’était** and **il y avait** to *describe* (the weather, the hotel, how it felt). Use the **passé composé** to say what *happened*: *Nous sommes allés à la plage. C’était super !*',
        ),
        mistake(
          'Watch out',
          '✗ Hier, c’est super.  ✓ Hier, c’était super.',
          '✗ Il y avaient des touristes.  ✓ Il y avait des touristes.',
          '✗ Il y avait beau.  ✓ Il faisait beau.',
        ),
        examples(
          ['À l’hôtel, il y avait une piscine.', 'At the hotel there was a swimming pool.'],
          ['Il faisait beau et c’était tranquille.', 'The weather was nice and it was quiet.'],
        ),
      ),
    ],
    related: ['fr-etre-avoir', 'fr-a12-pc-etre', 'fr-time-markers'],
    sources: [S.imparfait, S.etreConj],
  },
  {
    id: 'fr-a12-avoir-mal',
    title: 'avoir mal à',
    tagline: 'Where does it hurt?',
    level: LEVEL,
    summary:
      'Say where it hurts with avoir mal à + the part of the body. À joins the article: à + le = au, à + les = aux; à la and à l’ do not change.',
    sections: [
      section(
        'pattern',
        'avoir mal + à + article + body part',
        p(
          'French uses **avoir** (not être) with **mal**: *J’ai mal à la tête* literally means *I have pain at the head*. The verb agrees with the person, and the body part comes after **à**.',
        ),
        table(
          'À and the article.',
          ['Body part', 'à + article', 'Example'],
          [
            ['la tête (feminine)', 'à la', 'J’ai mal à la tête.'],
            ['le dos (masculine)', 'au', 'Il a mal au dos.'],
            ['l’oreille (vowel)', 'à l’', 'Nous avons mal à l’oreille.'],
            ['les dents (plural)', 'aux', 'Elle a mal aux dents.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'It is the same à + le = au and à + les = aux you know from au café and aux toilettes.',
        ),
      ),
      section(
        'mistakes',
        'Common mistakes',
        mistake(
          'Watch out',
          '✗ Je suis mal à la tête.  ✓ J’ai mal à la tête.',
          '✗ Il a mal à le dos.  ✓ Il a mal au dos.',
          '✗ Elle a mal à les dents.  ✓ Elle a mal aux dents.',
        ),
        examples(
          ['Tu as mal au pied ?', 'Does your foot hurt?'],
          ['J’ai mal à la gorge depuis hier.', 'I have had a sore throat since yesterday.'],
        ),
      ),
    ],
    related: ['fr-contractions', 'fr-etre-avoir', 'fr-a12-devoir-falloir'],
    sources: [S.mal, FR.contraction],
  },
  {
    id: 'fr-a12-devoir-falloir',
    title: 'devoir and il faut',
    tagline: 'What you must do, and what you must not do',
    level: LEVEL,
    summary:
      'Devoir is irregular (je dois, nous devons, ils doivent) and takes an infinitive. Il faut + infinitive says what is needed in general; il ne faut pas means you must not.',
    sections: [
      section(
        'devoir',
        'devoir + infinitive',
        table(
          'Present tense of devoir.',
          ['Person', 'devoir'],
          [
            ['je', 'dois'],
            ['tu', 'dois'],
            ['il/elle/on', 'doit'],
            ['nous', 'devons'],
            ['vous', 'devez'],
            ['ils/elles', 'doivent'],
          ],
        ),
        p(
          'Use it like **vouloir** and **pouvoir**: the second verb stays in the infinitive. *Je dois aller chez le médecin.* In the negative, **ne … pas** wraps **devoir**: *Vous ne devez pas fumer.*',
        ),
      ),
      section(
        'il-faut',
        'il faut: a general rule',
        p(
          '**Il faut** (from *falloir*) has only the form *il*. It talks about what is necessary for anybody. Followed by an infinitive: *Il faut se reposer.* **Il ne faut pas** is a prohibition, not “you do not need to”.',
        ),
        mistake(
          'Watch out',
          '✗ Je dois-je reposer.  ✓ Je dois me reposer.',
          '✗ Il faut pas fumer.  ✓ Il ne faut pas fumer.',
          '✗ Vous devoir rester au lit.  ✓ Vous devez rester au lit.',
        ),
        examples(
          [
            'Il faut prendre ce sirop trois fois par jour.',
            'You need to take this syrup three times a day.',
          ],
          ['Nous devons appeler les secours.', 'We must call the emergency services.'],
        ),
      ),
    ],
    related: ['fr-prendre-vouloir', 'fr-negation', 'fr-rules'],
    sources: [S.devoir, S.falloir, S.pouvoir],
  },
  {
    id: 'fr-a12-lui-leur',
    title: 'lui and leur',
    tagline: 'Replace “to him / to her” and “to them”',
    level: LEVEL,
    summary:
      'Lui replaces à + one person (man or woman) and leur replaces à + several people. Both go before the verb. They are used after parler, téléphoner, donner, dire, demander and répondre.',
    sections: [
      section(
        'forms',
        'One person or several?',
        p(
          'With **parler à**, **téléphoner à**, **donner à**, **dire à**, **demander à** and **répondre à** the person is introduced by **à**. Replace *à + person* with **lui** (one person) or **leur** (several people). Men and women both take lui.',
        ),
        table(
          'Replace à + person.',
          ['With à + person', 'With the pronoun'],
          [
            ['Je téléphone à ma mère.', 'Je lui téléphone.'],
            ['Je parle au médecin.', 'Je lui parle.'],
            ['Il parle aux patients.', 'Il leur parle.'],
            ['Tu ne réponds pas à tes amis.', 'Tu ne leur réponds pas.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'Like le, la and les, lui and leur stand right before the verb, and ne goes before them: je ne lui réponds pas.',
          'Leur as a pronoun never takes an -s, and it is never written with an apostrophe.',
        ),
      ),
      section(
        'le-or-lui',
        'le/la or lui?',
        p(
          'Ask yourself whether the verb takes **à**. *Je regarde Paul → je le regarde* (no à). *Je téléphone à Paul → je lui téléphone* (à). The pronouns for **me**, **te**, **nous** and **vous** stay the same for both kinds of verb.',
        ),
        mistake(
          'Watch out',
          '✗ Je le téléphone.  ✓ Je lui téléphone.',
          '✗ Il leurs parle.  ✓ Il leur parle.',
          '✗ Je téléphone lui.  ✓ Je lui téléphone.',
        ),
        examples(
          [
            'Le pharmacien nous explique la pommade.',
            'The pharmacist explains the ointment to us.',
          ],
          ['Je leur demande un conseil.', 'I ask them for advice.'],
        ),
      ),
    ],
    related: ['fr-a12-object-pronouns', 'fr-pronouns'],
    sources: [S.lui, S.leur, S.coi],
  },
  {
    id: 'fr-a12-pc-pronominal',
    title: 'Pronominal verbs in the past',
    tagline: 'Je me suis blessé, elle s’est reposée',
    level: LEVEL,
    summary:
      'Pronominal verbs always form the passé composé with être: the pronoun, then être, then the participle. The participle agrees with the subject, and ne … pas wraps the pronoun and être.',
    sections: [
      section(
        'forms',
        'Pronoun + être + participle',
        table(
          'Passé composé of se blesser (masculine / feminine).',
          ['Person', 'masculine', 'feminine'],
          FRENCH_PRONOUNS.map((pr) => [
            pr,
            passeComposeReflexive('blesser')[pr],
            passeComposeReflexive('blesser', { feminine: true })[pr],
          ]),
        ),
        tip(
          'Spot the pattern',
          'The small pronoun (me, te, se, nous, vous, se) comes first, then être, then the participle: je me suis blessé.',
          'Me and te become m’ and t’ before a vowel: tu t’es reposé.',
        ),
      ),
      section(
        'negative',
        'Saying no, and the agreement',
        p(
          'Put **ne** before the pronoun and **pas** after **être**: *Je ne me suis pas reposé.* The participle agrees with the subject, as with all verbs that take être: *Elle s’est blessée.* After a body part, it stays unchanged: *Elle s’est cassé le bras.*',
        ),
        mistake(
          'Watch out',
          '✗ Je m’ai blessé.  ✓ Je me suis blessé.',
          '✗ Elle s’est blessé.  ✓ Elle s’est blessée.',
          '✗ Je me ne suis pas reposé.  ✓ Je ne me suis pas reposé.',
        ),
        examples(
          ['Hier, je me suis blessé au genou.', 'Yesterday I hurt my knee.'],
          ['Nous nous sommes reposés tout le week-end.', 'We rested all weekend.'],
        ),
      ),
    ],
    related: ['fr-pronominal', 'fr-a12-pc-etre', 'fr-negation'],
    sources: [S.pronominal, S.pronominalForm, S.passeCompose],
  },
  {
    id: 'fr-a12-because',
    title: 'pourquoi, parce que, alors',
    tagline: 'Ask for a reason, give a reason, say the result',
    level: LEVEL,
    summary:
      'Ask for a reason with pourquoi and answer with parce que (parce qu’ before a vowel). Alors introduces the result of what you just said.',
    sections: [
      section(
        'reason',
        'Why? Because',
        p(
          '**Pourquoi** asks *why*. The answer starts with **parce que**. Before **il**, **elle**, **on**, **un** or **une** it shortens to **parce qu’**. Do not mix them up: *pourquoi* is the question, *parce que* the answer.',
        ),
        table(
          'Reason and result.',
          ['Word', 'Use', 'Example'],
          [
            ['pourquoi', 'asks for a reason', 'Pourquoi tu restes au lit ?'],
            ['parce que', 'gives the reason', 'Parce que j’ai de la fièvre.'],
            ['alors', 'gives the result', 'J’ai de la fièvre, alors je reste au lit.'],
          ],
        ),
      ),
      section(
        'order',
        'Reason first or result first',
        p(
          'You can give either one first. *Je reste au lit parce que je suis malade* and *Je suis malade, alors je reste au lit* say the same thing in two orders. Parce que needs a full sentence after it, not just a noun.',
        ),
        mistake(
          'Watch out',
          '✗ Pourquoi que tu restes au lit ?  ✓ Pourquoi tu restes au lit ?',
          '✗ Parce que la fièvre.  ✓ Parce que j’ai de la fièvre.',
          '✗ Elle reste parce que est malade.  ✓ Elle reste parce qu’elle est malade.',
        ),
        examples(
          [
            '– Pourquoi tu tousses ? – Parce que je suis enrhumé.',
            '– Why are you coughing? – Because I have a cold.',
          ],
          ['Il est tombé, alors il a mal au genou.', 'He fell, so his knee hurts.'],
        ),
      ),
    ],
    related: ['fr-questions', 'fr-a12-devoir-falloir'],
    sources: [S.pourquoi, S.parceQue],
  },
  {
    id: 'fr-a12-savoir-pouvoir',
    title: 'savoir, pouvoir, vouloir',
    tagline: 'What you can do, what you may do, what you want',
    level: LEVEL,
    summary:
      'Savoir is a skill you have learnt, pouvoir is a possibility or permission, vouloir is a wish. All three are irregular and are followed by an infinitive.',
    sections: [
      section(
        'forms',
        'Three irregular verbs',
        table(
          'Present tense.',
          ['Person', 'savoir', 'pouvoir', 'vouloir'],
          [
            ['je', 'sais', 'peux', 'veux'],
            ['tu', 'sais', 'peux', 'veux'],
            ['il/elle/on', 'sait', 'peut', 'veut'],
            ['nous', 'savons', 'pouvons', 'voulons'],
            ['vous', 'savez', 'pouvez', 'voulez'],
            ['ils/elles', 'savent', 'peuvent', 'veulent'],
          ],
        ),
        tip(
          'Spot the pattern',
          'The three singular forms of pouvoir and vouloir sound alike: je peux, tu peux, il peut. They end in -x, -x, -t.',
          'Savoir has no -x: je sais, tu sais, il sait.',
        ),
      ),
      section(
        'meaning',
        'savoir or pouvoir?',
        p(
          'Use **savoir** for something you learnt: *Je sais nager* (I learnt it). Use **pouvoir** for a possibility, permission or a request: *Je peux venir demain* (I am free), *Je peux entrer ?* (May I?). English “can” covers both, French keeps them apart.',
        ),
        mistake(
          'Watch out',
          '✗ Je peux conduire. (meaning: I learnt it)  ✓ Je sais conduire.',
          '✗ Elle peut parler quatre langues. (a skill)  ✓ Elle sait parler quatre langues.',
          '✗ Je sais venir demain.  ✓ Je peux venir demain.',
        ),
        examples(
          ['Il sait utiliser ce logiciel.', 'He knows how to use this software.'],
          ['Vous pouvez commencer lundi ?', 'Can you start on Monday?'],
        ),
      ),
    ],
    related: ['fr-prendre-vouloir', 'fr-a12-devoir-falloir'],
    sources: [S.savoir, S.pouvoir, FR.vouloir],
  },
  {
    id: 'fr-a12-si-present',
    title: 'si + present',
    tagline: 'If you want, you can',
    level: LEVEL,
    summary:
      'After si (if) the verb is in the present, never the future. The result can be the present, the near future (aller + infinitive) or an order.',
    sections: [
      section(
        'pattern',
        'si + present, then …',
        p(
          '**Si** introduces a condition that is possible. The verb after si is in the **present**; the result can be the present, the near future or the imperative.',
        ),
        table(
          'Three results after si + present.',
          ['Result', 'Example'],
          [
            ['present', 'Si tu as le temps, tu peux m’aider.'],
            ['near future', 'Si elle réussit, elle va déménager.'],
            ['imperative', 'Si vous cherchez un emploi, envoyez votre CV.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'The two halves can swap places: Tu peux m’aider si tu as le temps. The condition still has si + present.',
          'Si + il becomes s’il, but si + elle stays si elle.',
        ),
      ),
      section(
        'mistakes',
        'No future after si',
        mistake(
          'Watch out',
          '✗ Si tu viendras, je serai content.  ✓ Si tu viens, je serai content.',
          '✗ Si il pleut, je reste.  ✓ S’il pleut, je reste.',
          '✗ Je reste si elle pleut.  ✓ Je reste s’il pleut.',
        ),
        examples(
          ['Si tu veux, tu peux venir.', 'If you want, you can come.'],
          ['S’il y a trop de travail, il démissionne.', 'If there is too much work, he resigns.'],
        ),
      ),
    ],
    related: ['fr-futur-proche', 'fr-imperative'],
    sources: [S.si],
  },
  {
    id: 'fr-a12-depuis-pendant',
    title: 'depuis and pendant',
    tagline: 'Since when? For how long?',
    level: LEVEL,
    summary:
      'Depuis + present says how long something has lasted until now and gives its starting point. Pendant + passé composé says how long something lasted in the past.',
    sections: [
      section(
        'contrast',
        'Still going on, or finished?',
        table(
          'depuis and pendant.',
          ['Word', 'Situation', 'Example'],
          [
            ['depuis + present', 'still true now', 'Je travaille ici depuis trois ans.'],
            ['depuis + a date', 'still true now', 'J’habite à Lyon depuis 2019.'],
            ['pendant + passé composé', 'finished', 'J’ai travaillé en Italie pendant deux ans.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'English uses “have been … for” for depuis (I have been working here for three years), and French simply uses the present.',
        ),
      ),
      section(
        'others',
        'depuis, pendant, il y a, dans',
        p(
          'Do not mix them up: **depuis** looks from now back to the start; **pendant** gives the length of a past period; **il y a** says how long *ago* something happened (you learnt it in unit 2); **dans** says how long *from now*.',
        ),
        mistake(
          'Watch out',
          '✗ Je travaille ici pendant trois ans.  ✓ Je travaille ici depuis trois ans.',
          '✗ J’ai habité à Nice depuis cinq ans. (and I left)  ✓ J’ai habité à Nice pendant cinq ans.',
        ),
        examples(
          [
            'Elle cherche un emploi depuis janvier.',
            'She has been looking for a job since January.',
          ],
          ['Il a dormi pendant dix heures.', 'He slept for ten hours.'],
        ),
      ),
    ],
    related: ['fr-time-markers', 'fr-passe-compose-avoir'],
    sources: [S.depuis, S.pendant],
  },
  {
    id: 'fr-a12-qui-que',
    title: 'qui and que',
    tagline: 'A job that I like, a boss who is nice',
    level: LEVEL,
    summary:
      'Qui and que join two sentences. Qui replaces the subject of the second part, que replaces its object. Que becomes qu’ before a vowel.',
    sections: [
      section(
        'subject-object',
        'Subject: qui, object: que',
        p(
          'Instead of repeating a noun, use a **relative pronoun**. Ask what the noun does in the second part. If it is the *subject* (it does the action), use **qui**. If it is the *object* (it receives the action), use **que**.',
        ),
        table(
          'qui or que?',
          ['Two sentences', 'Joined'],
          [
            ['J’ai un patron. Il est sympa.', 'J’ai un patron qui est sympa.'],
            ['C’est un métier. Il me plaît.', 'C’est un métier qui me plaît.'],
            ['Voici le poste. Je cherche ce poste.', 'Voici le poste que je cherche.'],
            ['C’est un métier. Elle aime ce métier.', 'C’est un métier qu’elle aime.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'After qui comes the verb. After que comes a subject (je, elle, mon ami …) and then the verb.',
          'Que becomes qu’ before a vowel: qu’elle, qu’il, qu’on. Qui never changes.',
        ),
      ),
      section(
        'mistakes',
        'Common mistakes',
        mistake(
          'Watch out',
          '✗ Le collègue que travaille ici.  ✓ Le collègue qui travaille ici.',
          '✗ Le poste qui je cherche.  ✓ Le poste que je cherche.',
          '✗ Le métier que elle aime.  ✓ Le métier qu’elle aime.',
        ),
        examples(
          ['La société qui m’a embauché est grande.', 'The company that hired me is big.'],
          ['Le métier que j’aime est difficile.', 'The job I like is difficult.'],
        ),
      ),
    ],
    related: ['fr-pronouns', 'fr-a12-object-pronouns'],
    sources: [S.relative, S.qui, S.que],
  },
  {
    id: 'fr-a12-intensity',
    title: 'très, trop, assez, un peu',
    tagline: 'How much? Very, too, quite, a little',
    level: LEVEL,
    summary:
      'Très, assez, trop and un peu go before an adjective or adverb. With a verb use beaucoup, trop or un peu after it. Before a noun add de: trop de travail.',
    sections: [
      section(
        'scale',
        'A scale of degree',
        table(
          'From little to too much.',
          ['Word', 'Meaning', 'Example'],
          [
            ['un peu', 'a little', 'Le salaire est un peu bas.'],
            ['assez', 'fairly', 'Le salaire est assez bon.'],
            ['très', 'very', 'Le poste est très intéressant.'],
            ['trop', 'too (much)', 'Ce travail est trop difficile.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'Très modifies adjectives and adverbs only: très bien, très tard. It never goes with a verb.',
        ),
      ),
      section(
        'with-verbs',
        'With a verb, with a noun',
        p(
          'After a verb use **beaucoup** (a lot), **trop** (too much) or **un peu** (a little): *Il travaille beaucoup. Elle parle un peu.* Before a noun add **de**: *beaucoup de travail, trop de collègues, assez de temps, un peu de patience*.',
        ),
        mistake(
          'Watch out',
          '✗ Il aime très son travail.  ✓ Il aime beaucoup son travail.',
          '✗ J’ai trop travail.  ✓ J’ai trop de travail.',
          '✗ Elle est beaucoup motivée.  ✓ Elle est très motivée.',
        ),
        examples(
          ['Je suis très content de mon poste.', 'I am very happy with my job.'],
          ['Nous avons assez de temps.', 'We have enough time.'],
        ),
      ),
    ],
    related: ['fr-quantities', 'fr-a12-comparison'],
    sources: [S.tres, S.trop, S.assez, FR.beaucoup, FR.peu],
  },
  {
    id: 'fr-a12-quantity-compare',
    title: 'plus de, moins de, autant de',
    tagline: 'More noise, less pollution, as many trees',
    level: LEVEL,
    summary:
      'Compare quantities of a noun with plus de, moins de or autant de, then que. De becomes d’ before a vowel: autant d’arbres que de maisons.',
    sections: [
      section(
        'pattern',
        'Comparing nouns',
        p(
          'You already know **plus … que** with adjectives. With a **noun** the little word is followed by **de**: *Il y a plus de bruit en ville.* There is no article after it.',
        ),
        table(
          'Comparing quantities.',
          ['Meaning', 'Pattern', 'Example'],
          [
            ['more', 'plus de + noun (+ que)', 'Il y a plus de bruit en ville qu’à la campagne.'],
            ['less', 'moins de + noun (+ que)', 'Il y a moins de pollution à la campagne.'],
            ['as much / as many', 'autant de + noun (+ que)', 'J’ai autant de travail que toi.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'De becomes d’ before a vowel: plus d’arbres, moins d’habitants, autant d’animaux.',
          'Que also elides: qu’à la campagne, qu’ici.',
        ),
      ),
      section(
        'versus',
        'plus que, plus de',
        mistake(
          'Watch out',
          '✗ Il y a plus bruit en ville.  ✓ Il y a plus de bruit en ville.',
          '✗ Il y a plus du bruit.  ✓ Il y a plus de bruit.',
          '✗ J’ai aussi de travail que toi.  ✓ J’ai autant de travail que toi.',
        ),
        examples(
          ['Il y a moins de circulation ici.', 'There is less traffic here.'],
          ['Nous avons autant d’arbres que de maisons.', 'We have as many trees as houses.'],
        ),
      ),
    ],
    related: ['fr-a12-comparison', 'fr-quantities', 'fr-partitive'],
    sources: [S.plus, S.autant, FR.beaucoup],
  },
  {
    id: 'fr-a12-en',
    title: 'The pronoun en',
    tagline: 'Do you have any? Yes, I have three',
    level: LEVEL,
    summary:
      'En replaces du, de la, des or de + a noun that was already named. It stands right before the verb. A number or quantity stays after the verb: j’en ai trois, il y en a beaucoup.',
    sections: [
      section(
        'use',
        'One word instead of de + noun',
        p(
          'When a noun with **du**, **de la**, **des** or **de** is already known, do not repeat it: replace it with **en**. It goes right before the verb, like le, la, les and y.',
        ),
        table(
          'Noun phrase and en.',
          ['With the noun', 'With en'],
          [
            ['Tu veux du pain ?', 'Oui, j’en veux.'],
            ['Vous avez des poules ?', 'Non, nous n’en avons pas.'],
            ['Il y a des vaches ?', 'Oui, il y en a dix.'],
            ['Tu as trois lapins ?', 'Oui, j’en ai trois.'],
          ],
        ),
        tip(
          'Spot the pattern',
          'A number or a quantity word (trois, beaucoup, un peu) stays after the verb: j’en ai trois.',
          'In the negative ne goes before en: je n’en ai pas, il n’y en a pas.',
        ),
      ),
      section(
        'mistakes',
        'Common mistakes',
        mistake(
          'Watch out',
          '✗ J’ai trois.  ✓ J’en ai trois.',
          '✗ Je en veux.  ✓ J’en veux.',
          '✗ Nous avons n’en pas.  ✓ Nous n’en avons pas.',
        ),
        examples(
          [
            'Combien de lapins as-tu ? J’en ai trois.',
            'How many rabbits do you have? I have three.',
          ],
          ['Il y en a beaucoup dans le champ.', 'There are lots of them in the field.'],
        ),
      ),
    ],
    related: ['fr-partitive', 'fr-quantities', 'fr-a12-object-pronouns', 'fr-y'],
    sources: [S.en, FR.partitive],
  },
  {
    id: 'fr-a12-adverbs',
    title: 'Adverbs in -ment',
    tagline: 'Slowly, calmly, completely',
    level: LEVEL,
    summary:
      'Many French adverbs end in -ment. Take the feminine form of the adjective and add -ment: lent, lente, lentement. If the adjective already ends in -e, add -ment: calmement. The adverb goes after the verb.',
    sections: [
      section(
        'forms',
        'How to build them',
        table(
          'Adjective, feminine, adverb.',
          ['Adjective', 'Feminine', 'Adverb'],
          [
            ['lent', 'lente', 'lentement'],
            ['complet', 'complète', 'complètement'],
            ['heureux', 'heureuse', 'heureusement'],
            ['calme', 'calme', 'calmement'],
            ['rapide', 'rapide', 'rapidement'],
          ],
        ),
        tip(
          'Spot the pattern',
          'Think of English -ly: slow → slowly. In French the base is the feminine adjective.',
          'The adverb is invariable: it never takes -e or -s.',
        ),
      ),
      section(
        'position',
        'Where does it go?',
        p(
          'A short adverb goes right **after the verb**: *Il marche lentement.* In the passé composé it usually stands between the helping verb and the participle: *Elle a complètement changé de vie.* Some common adverbs are not built this way: **bien**, **mal**, **vite**.',
        ),
        mistake(
          'Watch out',
          '✗ Elle vit calme.  ✓ Elle vit calmement.',
          '✗ Il court rapidment.  ✓ Il court rapidement.',
          '✗ Il marche vitement.  ✓ Il marche vite.',
        ),
        examples(
          ['Elle travaille tranquillement dans son jardin.', 'She works quietly in her garden.'],
          ['Ils ont heureusement trouvé une maison.', 'Luckily they found a house.'],
        ),
      ),
    ],
    related: ['fr-adjectives', 'fr-gender', 'fr-a12-intensity'],
    sources: [S.ment, S.adverb],
  },
];
