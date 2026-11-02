import { futurSimple, imparfait } from '@/lib/french/tenses';
import type { FrenchForms } from '@/lib/french/conjugation';
import { FRENCH_PRONOUNS } from '@/lib/persons';
import { examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR21_SOURCES as S } from './sources-fr-a2-1';

const LEVEL = 'fr-a2-1';

/** One column per verb, forms from a tense generator in `src/lib/french/tenses`. */
const formsTable = (
  caption: string,
  verbs: readonly string[],
  make: (verb: string) => FrenchForms,
) => {
  const all = verbs.map((v) => make(v));
  return table(
    caption,
    ['Person', ...verbs],
    FRENCH_PRONOUNS.map((pr) => [pr, ...all.map((f) => f[pr])]),
  );
};
const imparfaitTable = (caption: string, verbs: readonly string[]) =>
  formsTable(caption, verbs, imparfait);

/** French A2.1, units 3 to 8: memories, housing, portraits, the future, cooking and school. */
export const FR21_TOPICS_B: GrammarTopic[] = [
  // ---- unit 3: souvenirs ----------------------------------------------------------------------
  {
    id: 'fr-a21-imparfait',
    title: 'The imparfait: forms',
    tagline: 'Nous habitons → j’habitais: one stem, six endings',
    level: LEVEL,
    summary:
      'The imparfait is the tense of memories and descriptions. Its stem is the nous form of the present without -ons, and the endings are the same for every verb: -ais, -ais, -ait, -ions, -iez, -aient. Only être has an irregular stem (ét-).',
    sections: [
      section(
        'forms',
        'Stem and endings',
        p(
          'Take the **nous** form of the present, drop **-ons** and add the endings. *Nous habitons → habit-*, *nous finissons → finiss-*, *nous faisons → fais-*, *nous allons → all-*.',
        ),
        imparfaitTable('Imparfait of five common verbs.', [
          'être',
          'avoir',
          'aller',
          'faire',
          'finir',
        ]),
        tip(
          'Only être is irregular',
          'Its stem is ét- (j’étais, nous étions), but the endings are the regular ones.',
        ),
      ),
      section(
        'spelling',
        'Spelling and sound',
        p(
          'The endings **-ais, -ait, -aient** sound the same (/ɛ/), so je jouais, il jouait and ils jouaient are pronounced alike: only the spelling tells the person. Before **-ions** and **-iez** verbs in **-ger** and **-cer** keep their sound: *nous mangions* (not mangeions), *nous commencions* but *je commençais*.',
        ),
        mistake(
          'Watch out',
          '✗ Ils jouait au foot.  ✓ Ils jouaient au foot.',
          '✗ Nous mangeons dehors, avant.  ✓ Avant, nous mangions dehors.',
          '✗ J’avait un vélo.  ✓ J’avais un vélo.',
        ),
        examples(
          ['Nous habitions à la campagne.', 'We lived in the countryside.'],
          ['Tu avais un chien noir.', 'You had a black dog.'],
          ['Vous étiez très jeunes.', 'You were very young.'],
        ),
      ),
    ],
    related: ['fr-a21-imparfait-use', 'fr-a21-futur', 'fr-etre-avoir'],
    sources: [S.imparfait, S.etre, S.avoir],
  },
  {
    id: 'fr-a21-imparfait-use',
    title: 'Imparfait: habits and descriptions',
    tagline: 'Chaque été, il faisait beau: the tense of the background',
    level: LEVEL,
    summary:
      'The imparfait describes what used to be or what used to happen: habits, states, the weather, people and places in the past. It does not say when something started or ended.',
    sections: [
      section(
        'when',
        'When to use it',
        table(
          'The two jobs of the imparfait.',
          ['Job', 'Example'],
          [
            ['A habit in the past', 'Chaque été, nous allions à la mer.'],
            ['A description', 'La maison était grande et vieille.'],
            ['The weather', 'Il pleuvait et il faisait froid.'],
            ['A feeling or state', 'J’étais heureux, je n’avais pas peur.'],
          ],
        ),
        p(
          'Words that often signal an habit: *autrefois*, *à l’époque*, *quand j’étais petit*, *chaque été / tous les jours / le dimanche*, *souvent*, *toujours*.',
        ),
      ),
      section(
        'now-then',
        'Then and now',
        table(
          'The same verb now and in the past.',
          ['Present', 'Imparfait'],
          [
            ['J’habite à Paris.', 'Avant, j’habitais à la campagne.'],
            ['Il y a un supermarché.', 'Il y avait une ferme.'],
            ['Il fait froid.', 'Il faisait froid.'],
            ['Les enfants jouent sur l’écran.', 'Les enfants jouaient dehors.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Autrefois, j’habite à la campagne.  ✓ Autrefois, j’habitais à la campagne.',
          '✗ Il y a avait un jardin.  ✓ Il y avait un jardin.',
        ),
        examples(
          [
            'Quand j’étais petit, je jouais dans la forêt.',
            'When I was little, I played in the forest.',
          ],
          ['Autrefois, on n’avait pas de téléphone.', 'In the past, we had no phone.'],
        ),
      ),
    ],
    related: ['fr-a21-imparfait', 'fr-a21-imparfait-pc', 'fr-time-markers'],
    sources: [S.imparfaitGeneral, S.imparfait],
  },
  {
    id: 'fr-a21-en',
    title: 'The pronoun en',
    tagline: 'J’en veux, il y en a trois: replacing “of it, of them”',
    level: LEVEL,
    summary:
      'En replaces du, de la, des or de + a noun, and a noun after a number or an expression of quantity. It stands right before the verb; the number or quantity word stays at the end. En also replaces de + a place you come from.',
    sections: [
      section(
        'replace',
        'What en replaces',
        table(
          'En instead of de + noun.',
          ['With the noun', 'With en'],
          [
            ['Tu veux du pain ?', 'Oui, j’en veux.'],
            ['Tu as des frères ?', 'J’en ai deux.'],
            ['Il y a de la neige ?', 'Non, il n’y en a pas.'],
            ['Elle parle de son enfance.', 'Elle en parle.'],
            ['Je reviens de la campagne.', 'J’en reviens.'],
          ],
        ),
        p(
          'The **number** or the **quantity word** (*beaucoup, assez, trois, un peu*) is kept: *J’en ai trois. Il y en a beaucoup.* With **un** or **une** keep it too: *Tu as une voiture ? Oui, j’en ai une.*',
        ),
      ),
      section(
        'position',
        'Where does en go?',
        table(
          'The position of en.',
          ['Case', 'Example'],
          [
            ['Present tense', 'Nous en voulons.'],
            ['Negative', 'Je n’en ai pas.'],
            ['Passé composé', 'J’en ai pris beaucoup.'],
            ['Infinitive (futur proche)', 'Je vais en prendre.'],
            ['Imperative', 'Prends-en ! N’en prends pas !'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je veux en.  ✓ J’en veux.',
          '✗ J’ai deux.  ✓ J’en ai deux.',
          '✗ Je n’ai pas en.  ✓ Je n’en ai pas.',
        ),
        tip(
          'En or y?',
          'En comes from de (some of it, from there); y comes from à (to there). *Tu viens de Lyon ? J’en viens. Tu vas à Lyon ? J’y vais.*',
        ),
      ),
    ],
    related: ['fr-partitive', 'fr-quantities', 'fr-a21-y'],
    sources: [S.en],
  },
  // ---- unit 4: logement -----------------------------------------------------------------------
  {
    id: 'fr-a21-relatives',
    title: 'qui, que, où',
    tagline: 'One sentence instead of two: the flat that I like',
    level: LEVEL,
    summary:
      'Relative pronouns join two sentences. Qui replaces the subject, que (qu’) replaces the direct object, où replaces a place or a time.',
    sections: [
      section(
        'three',
        'Three pronouns',
        table(
          'Which pronoun?',
          ['Pronoun', 'It replaces', 'Example'],
          [
            [
              'qui',
              'the subject (who/which does the action)',
              'J’ai un voisin qui joue de la guitare.',
            ],
            [
              'que / qu’',
              'the direct object (who/what is acted on)',
              'L’appartement que nous avons visité est lumineux.',
            ],
            [
              'où',
              'a place or a time',
              'La rue où j’habite est calme. Le jour où nous avons emménagé …',
            ],
          ],
        ),
        p(
          'A quick test: after **qui** comes a **verb** (*qui habite*). After **que** comes a **subject** (*que j’aime, que tu as acheté*). **Que** becomes **qu’** before a vowel: *le quartier qu’il aime*.',
        ),
      ),
      section(
        'details',
        'Details that cause mistakes',
        p(
          'Qui never loses its **i** (there is no *qu’* for the subject). With **que** in the passé composé the participle agrees with the object in front of the verb: *la lampe qu’elle a choisie*.',
        ),
        mistake(
          'Watch out',
          '✗ L’appartement qui j’ai visité.  ✓ L’appartement que j’ai visité.',
          '✗ Le voisin que habite en face.  ✓ Le voisin qui habite en face.',
          '✗ La rue que j’habite.  ✓ La rue où j’habite.',
        ),
        examples(
          [
            'Je cherche un studio qui est près du métro.',
            'I am looking for a studio that is near the metro.',
          ],
          ['La lampe qu’elle a choisie est belle.', 'The lamp she chose is beautiful.'],
          ['Le quartier où je suis né est calme.', 'The district where I was born is quiet.'],
        ),
      ),
    ],
    related: ['fr-a21-comparison', 'fr-demonstratives', 'fr-place-prepositions'],
    sources: [S.pronomRelatif, S.que],
  },
  {
    id: 'fr-a21-comparison',
    title: 'plus, moins … que',
    tagline: 'Plus grand que, moins cher que, meilleur, mieux',
    level: LEVEL,
    summary:
      'To compare, put plus (more) or moins (less) before an adjective or adverb and que (than) before the second term. With nouns use plus de / moins de. The comparatives of bon and bien are irregular: meilleur and mieux.',
    sections: [
      section(
        'regular',
        'Regular comparisons',
        table(
          'Comparing with plus and moins.',
          ['Structure', 'Example'],
          [
            ['plus + adjective + que', 'La cuisine est plus grande que le salon.'],
            ['moins + adjective + que', 'Ce studio est moins cher que l’autre.'],
            ['plus de / moins de + noun + que', 'Il y a moins de bruit qu’avant.'],
            ['verb + plus / moins que', 'Je travaille plus que toi.'],
          ],
        ),
        p(
          'The adjective **agrees** with the first term: *la cuisine est plus grande*. **Que** becomes **qu’** before a vowel: *qu’avant, qu’en province*.',
        ),
      ),
      section(
        'irregular',
        'Meilleur and mieux',
        table(
          'Two irregular comparatives.',
          ['Positive', 'Comparative', 'Example'],
          [
            ['bon (adjective)', 'meilleur(e)(s)', 'Ce canapé est meilleur que l’autre.'],
            ['bien (adverb)', 'mieux', 'Je dors mieux dans ce lit.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ plus bon  ✓ meilleur',
          '✗ Je dors plus bien.  ✓ Je dors mieux.',
          '✗ plus grand de moi  ✓ plus grand que moi',
        ),
        tip(
          'Meilleur or mieux?',
          'Meilleur describes a noun and agrees with it (une meilleure idée). Mieux modifies a verb and never changes (elle chante mieux).',
        ),
      ),
    ],
    related: ['fr-a21-equality', 'fr-superlative', 'fr-adjectives'],
    sources: [S.comparatif],
  },
  {
    id: 'fr-a21-condition',
    title: 'si + présent',
    tagline: 'Si tu veux, viens: conditions and advice',
    level: LEVEL,
    summary:
      'A condition that is possible is introduced by si followed by the present tense. The result is in the present or the imperative: Si tu as le temps, viens.',
    sections: [
      section(
        'structure',
        'si + present, then present or imperative',
        table(
          'The pattern.',
          ['If-part (si + present)', 'Result', 'Meaning'],
          [
            ['Si tu cherches un studio,', 'regarde les annonces.', 'advice (imperative)'],
            ['Si vous voulez,', 'vous pouvez visiter demain.', 'permission (present)'],
            ['Si on habite ensemble,', 'on paie moins de loyer.', 'general truth (present)'],
          ],
        ),
        p(
          '**Si** elides before **il / ils** only: *s’il pleut, s’ils viennent* but *si elle vient, si on part*. Nothing else changes: the verb after si stays in the **present**.',
        ),
      ),
      section(
        'mistakes',
        'Common mistakes',
        mistake(
          'Watch out',
          '✗ Si tu auras le temps, viens.  ✓ Si tu as le temps, viens.',
          '✗ Si il y a un balcon …  ✓ S’il y a un balcon …',
          '✗ Si tu veux, tu peut venir.  ✓ Si tu veux, tu peux venir.',
        ),
        tip(
          'Order',
          'The si-part can come second without a comma: Viens visiter si tu as le temps.',
        ),
        examples(
          [
            'Si tu as le temps, passe voir l’appartement.',
            'If you have time, come and see the flat.',
          ],
          [
            'S’il y a un balcon, je prends l’appartement.',
            'If there is a balcony, I will take the flat.',
          ],
        ),
      ),
    ],
    related: ['fr-a21-si-futur', 'fr-imperative', 'fr-a21-modals'],
    sources: [S.si],
  },
  // ---- unit 5: portrait -----------------------------------------------------------------------
  {
    id: 'fr-a21-equality',
    title: 'aussi … que, autant de',
    tagline: 'As tall as, as many as, the same',
    level: LEVEL,
    summary:
      'Equality is expressed with aussi + adjective + que, autant de + noun + que and verb + autant que. Le même, la même, les mêmes means “the same”.',
    sections: [
      section(
        'as',
        'As … as',
        table(
          'Equality.',
          ['Structure', 'Example'],
          [
            ['aussi + adjective / adverb + que', 'Elle est aussi grande que son frère.'],
            ['autant de + noun + que', 'J’ai autant d’amis que toi.'],
            ['verb + autant que', 'Il travaille autant que moi.'],
            ['ne … pas aussi / autant …', 'Ce n’est pas aussi simple que je pensais.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il est autant grand que moi.  ✓ Il est aussi grand que moi.',
          '✗ J’ai aussi d’amis que toi.  ✓ J’ai autant d’amis que toi.',
        ),
      ),
      section(
        'same',
        'The same',
        p(
          '**Même** is an adjective placed before the noun and agrees with it: *le même âge, la même ville, les mêmes goûts*. After **même** use **que** for the comparison: *Elle a le même sac que moi.*',
        ),
        table(
          'Le même.',
          ['Masculine', 'Feminine'],
          [
            ['le même âge', 'la même ville'],
            ['les mêmes goûts', 'les mêmes idées'],
          ],
        ),
        examples(
          ['Il est aussi sportif que son frère.', 'He is as sporty as his brother.'],
          ['Elle a autant de patience que moi.', 'She has as much patience as I do.'],
          ['Nous avons les mêmes goûts.', 'We have the same tastes.'],
        ),
      ),
    ],
    related: ['fr-a21-comparison', 'fr-adjectives', 'fr-plurals'],
    sources: [S.aussi, S.autant, S.comparatif],
  },
  {
    id: 'fr-a21-chaque-tout',
    title: 'chaque, tout, tous',
    tagline: 'Every, all, everybody: one word, many forms',
    level: LEVEL,
    summary:
      'Chaque (each, every) is invariable and goes before a singular noun. Tout is an adjective that agrees: tout, toute, tous, toutes. Chacun means “each one” and stands alone.',
    sections: [
      section(
        'chaque',
        'Chaque and chacun',
        p(
          '**Chaque** never changes and is followed by a singular noun: *chaque personne, chaque jour*. **Chacun / chacune** replaces the noun: *Chacun a ses goûts.* Do not write *chaque jours* or *chaques*.',
        ),
      ),
      section(
        'tout',
        'The four forms of tout',
        table(
          'Tout, toute, tous, toutes.',
          ['Form', 'Used with', 'Example'],
          [
            ['tout / tout le', 'masculine singular', 'tout le temps, tout le monde'],
            ['toute / toute la', 'feminine singular', 'toute la famille'],
            ['tous les', 'masculine plural', 'tous les jours, tous mes amis'],
            ['toutes les', 'feminine plural', 'toutes les filles, toutes ses sœurs'],
          ],
        ),
        p(
          '**Tous les deux / toutes les deux** means “both”: *Ils sont tous les deux timides.* **Tout le monde** means “everybody” and takes a singular verb: *Tout le monde est différent.*',
        ),
        mistake(
          'Watch out',
          '✗ Tous le monde est là.  ✓ Tout le monde est là.',
          '✗ Chaque personnes est différente.  ✓ Chaque personne est différente.',
        ),
        examples(
          ['Chaque personne est différente.', 'Every person is different.'],
          ['Toute la famille est venue.', 'The whole family came.'],
          ['Tous mes amis sont sportifs.', 'All my friends are sporty.'],
        ),
      ),
    ],
    related: ['fr-plurals', 'fr-a21-equality', 'fr-articles'],
    sources: [S.chaque, S.tout],
  },
  {
    id: 'fr-a21-possessive-pronouns',
    title: 'le mien, la tienne',
    tagline: 'Mine, yours, theirs: possessives that stand alone',
    level: LEVEL,
    summary:
      'A possessive pronoun replaces possessive + noun and agrees with the noun it replaces, not with the owner: le mien, la mienne, les miens, les miennes.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Possessive pronouns.',
          ['Owner', 'Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem. pl.'],
          [
            ['je', 'le mien', 'la mienne', 'les miens', 'les miennes'],
            ['tu', 'le tien', 'la tienne', 'les tiens', 'les tiennes'],
            ['il / elle', 'le sien', 'la sienne', 'les siens', 'les siennes'],
            ['nous', 'le nôtre', 'la nôtre', 'les nôtres', 'les nôtres'],
            ['vous', 'le vôtre', 'la vôtre', 'les vôtres', 'les vôtres'],
            ['ils / elles', 'le leur', 'la leur', 'les leurs', 'les leurs'],
          ],
        ),
        p(
          'The article **le / la / les** is always part of the pronoun. Use it where English says *mine, yours, hers*: *Ton sac est vert, le mien est noir.*',
        ),
      ),
      section(
        'use',
        'Agreement and contractions',
        p(
          'The pronoun agrees with the **thing owned**: *ma clé → la mienne* even if the owner is a man. After **à** and **de** the article contracts: *Je pense à mes enfants et toi, tu penses aux tiens. Voici mon avis, et le vôtre ?*',
        ),
        mistake(
          'Watch out',
          '✗ Où est la tien ?  ✓ Où est la tienne ?',
          '✗ Ton sac est vert, mien est noir.  ✓ … le mien est noir.',
          '✗ Notre maison et la leurs.  ✓ Notre maison et la leur.',
        ),
        examples(
          ['Voici ma clé ; où est la tienne ?', 'Here is my key; where is yours?'],
          ['Nos voisins sont sympas, et les vôtres ?', 'Our neighbours are nice, and yours?'],
          [
            'Mes enfants sont sportifs, les siens sont timides.',
            'My children are sporty, hers are shy.',
          ],
        ),
      ),
    ],
    related: ['fr-possessives', 'fr-a21-equality', 'fr-contractions'],
    sources: [S.pronomPossessif],
  },
];
