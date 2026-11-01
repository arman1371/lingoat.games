import { compare, examples, frConjugationTable, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-a1-1';

/** French A1.1, units 5 to 8: free time, food, town, time and weather. */
export const FR11_TOPICS_B: GrammarTopic[] = [
  {
    id: 'fr-likes',
    title: 'J’aime, je déteste …',
    tagline: 'Saying what you like and dislike',
    level: LEVEL,
    summary:
      'Aimer, adorer and détester are regular -er verbs. Before a noun use the definite article, even for things in general. Before an activity use the infinitive.',
    sections: [
      section(
        'verbs',
        'The verbs',
        frConjugationTable('Present tense of aimer, adorer and détester.', [
          'aimer',
          'adorer',
          'détester',
        ]),
        table(
          'From love to hate.',
          ['Feeling', 'Example'],
          [
            ['😍', 'J’adore la musique.'],
            ['🙂', 'J’aime beaucoup le sport.'],
            ['👍', 'J’aime le chocolat.'],
            ['👎', 'Je n’aime pas le café.'],
            ['😠', 'Je déteste cuisiner.'],
          ],
        ),
      ),
      section(
        'after',
        'What comes after the verb',
        p(
          'Before a noun use **le, la, l’, les**, even when you mean the thing in general: *J’aime le café* (coffee as such). Before an activity use the **infinitive**: *J’aime danser.* *Nous détestons cuisiner.*',
        ),
        mistake(
          'Watch out',
          '✗ J’aime café.  ✓ J’aime le café.',
          '✗ J’aime le danser.  ✓ J’aime danser.',
          '✗ Elle adores les chats.  ✓ Elle adore les chats.',
        ),
        examples(
          ['Elle adore les chats.', 'She loves cats.'],
          ['J’aime beaucoup la musique.', 'I like music a lot.'],
        ),
      ),
    ],
    related: ['fr-er-verbs', 'fr-negation'],
    sources: [S.aimer],
  },
  {
    id: 'fr-negation',
    title: 'ne … pas',
    tagline: 'How do I say no?',
    level: LEVEL,
    summary:
      'Put ne before the verb and pas after it. Before a vowel ne becomes n’. After pas, un, une, du, de la and des turn into de, but le, la and les stay.',
    sections: [
      section(
        'basic',
        'ne … pas around the verb',
        table(
          'Affirmative and negative.',
          ['Affirmative', 'Negative'],
          [
            ['Je parle anglais.', 'Je ne parle pas anglais.'],
            ['J’aime danser.', 'Je n’aime pas danser.'],
            ['Je joue au tennis.', 'Je ne joue pas au tennis.'],
          ],
        ),
        p(
          'In speech people often drop **ne** (*je sais pas*). In writing and in lessons keep both parts. Answer a negative statement with **moi non plus** (me neither); answer a positive one with **moi aussi**.',
        ),
      ),
      section(
        'de',
        'After pas: de',
        p(
          'An article that means “a” or “some” turns into **de** (**d’** before a vowel) after a negation: there is no quantity at all. **Le, la, les** stay, because they point to a particular thing.',
        ),
        table(
          'Articles after a negation.',
          ['Affirmative', 'Negative'],
          [
            ['J’ai un frère.', 'Je n’ai pas de frère.'],
            ['Il mange du pain.', 'Il ne mange pas de pain.'],
            ['Elle a des amis.', 'Elle n’a pas d’amis.'],
            ['J’aime le café.', 'Je n’aime pas le café.'],
          ],
          3,
        ),
        mistake(
          'Watch out',
          '✗ Je n’ai pas un frère.  ✓ Je n’ai pas de frère.',
          '✗ Je pas parle anglais.  ✓ Je ne parle pas anglais.',
        ),
        tip(
          'After être nothing changes',
          'C’est un chat. → Ce n’est pas un chat. The article stays after être.',
        ),
      ),
    ],
    related: ['fr-partitive', 'fr-likes'],
    sources: [S.negation],
  },
  {
    id: 'fr-jouer-faire',
    title: 'jouer à, jouer de, faire de',
    tagline: 'Which preposition goes with which activity?',
    level: LEVEL,
    summary:
      'Games and sports take jouer à, instruments take jouer de, and most other activities take faire de. Faire is irregular.',
    sections: [
      section(
        'which',
        'Three patterns',
        table(
          'Jouer and faire with activities.',
          ['Activity', 'Pattern', 'Example'],
          [
            ['game, sport', 'jouer à', 'Je joue au football. Il joue aux cartes.'],
            ['instrument', 'jouer de', 'Elle joue du piano. Il joue de la guitare.'],
            ['other activity', 'faire de', 'Nous faisons du sport. Je fais de la natation.'],
          ],
        ),
        p(
          'À and de merge with **le** and **les**: *au football*, *du piano*. With **la** and **l’** they stay apart: *à la pétanque*, *de la guitare*.',
        ),
      ),
      section(
        'verbs',
        'jouer and faire',
        frConjugationTable('Present tense of jouer and faire.', ['jouer', 'faire']),
        mistake(
          'Watch out',
          '✗ Je joue le football.  ✓ Je joue au football.',
          '✗ Je joue guitare.  ✓ Je joue de la guitare.',
          '✗ Vous faisez du sport.  ✓ Vous faites du sport.',
        ),
      ),
    ],
    related: ['fr-contractions', 'fr-likes'],
    sources: [S.jouer, S.faire],
  },
  {
    id: 'fr-partitive',
    title: 'du, de la, des',
    tagline: 'Some bread, some water, some vegetables',
    level: LEVEL,
    summary:
      'To say “some” of something you cannot count, use the partitive: du (masculine), de la (feminine), de l’ (before a vowel) and des (plural). After a negation it becomes de.',
    sections: [
      section(
        'forms',
        'The partitive',
        table(
          'Three kinds of article.',
          ['Kind', 'Forms', 'Example'],
          [
            ['definite', 'le, la, l’, les', 'Je préfère le café.'],
            ['indefinite', 'un, une, des', 'Je prends un croissant.'],
            ['partitive', 'du, de la, de l’, des', 'Je mange du pain. Il boit de l’eau.'],
          ],
          2,
        ),
      ),
      section(
        'when',
        'Which one do I need?',
        compare(
          {
            title: 'le, la, les',
            question: 'A particular thing, or a thing in general',
            example: 'J’aime le fromage.',
          },
          {
            title: 'du, de la, des',
            question: 'Some, an amount, not counted',
            example: 'Je mange du fromage.',
          },
        ),
        p(
          'You can count a croissant (**un croissant**) but not bread (**du pain**). After a negation the partitive becomes **de**: *Je ne mange pas de viande.*',
        ),
        mistake(
          'Watch out',
          '✗ Je mange pain.  ✓ Je mange du pain.',
          '✗ Je ne bois pas du lait.  ✓ Je ne bois pas de lait.',
        ),
      ),
    ],
    related: ['fr-quantities', 'fr-negation'],
    sources: [S.partitive, S.definite],
  },
  {
    id: 'fr-quantities',
    title: 'un peu de, beaucoup de',
    tagline: 'How much, how many?',
    level: LEVEL,
    summary:
      'After a quantity use de on its own, with no article. De becomes d’ before a vowel. Pas de works the same way.',
    sections: [
      section(
        'words',
        'Quantities',
        table(
          'Words of quantity are followed by de.',
          ['Quantity', 'Example'],
          [
            ['un peu de', 'un peu de fromage'],
            ['beaucoup de', 'beaucoup de légumes'],
            ['trop de, assez de', 'trop de sucre, assez de pain'],
            ['un kilo de', 'un kilo de pommes'],
            ['une bouteille de', 'une bouteille d’eau'],
            ['un verre de, une tasse de', 'un verre de lait, une tasse de thé'],
            ['combien de ?', 'Combien de pommes ?'],
          ],
        ),
      ),
      section(
        'rule',
        'No article after de',
        p(
          'The article disappears: **beaucoup de pain**, not *beaucoup du pain*. The same happens after **pas**: *Je ne mange pas de viande.* Before a vowel write **d’**: *une bouteille d’eau*.',
        ),
        mistake(
          'Watch out',
          '✗ beaucoup du pain  ✓ beaucoup de pain',
          '✗ un kilo des pommes  ✓ un kilo de pommes',
          '✗ une bouteille de eau  ✓ une bouteille d’eau',
        ),
      ),
    ],
    related: ['fr-partitive', 'fr-negation'],
    sources: [S.beaucoup, S.peu],
  },
  {
    id: 'fr-prendre-vouloir',
    title: 'prendre, vouloir, boire',
    tagline: 'Three irregular verbs for the café',
    level: LEVEL,
    summary:
      'Prendre, vouloir and boire are irregular. To order politely, say je voudrais (I would like) instead of je veux.',
    sections: [
      section(
        'forms',
        'The forms',
        frConjugationTable('Present tense of prendre, vouloir and boire.', [
          'prendre',
          'vouloir',
          'boire',
        ]),
        p(
          'The pattern of **prendre** is shared by **apprendre** and **comprendre**: *je comprends, ils comprennent*.',
        ),
      ),
      section(
        'ordering',
        'Ordering politely',
        examples(
          ['Je voudrais un thé, s’il vous plaît.', 'I would like a tea, please.'],
          ['Vous voulez du thé ?', 'Would you like some tea?'],
          ['Ils boivent de l’eau.', 'They drink water.'],
        ),
        mistake(
          'Watch out',
          '✗ Je prend du pain.  ✓ Je prends du pain.',
          '✗ Ils prendent un café.  ✓ Ils prennent un café.',
        ),
        tip(
          'je veux vs je voudrais',
          'Je veux un café is blunt. In a café or a shop say Je voudrais un café, s’il vous plaît.',
        ),
      ),
    ],
    related: ['fr-partitive', 'fr-ir-verbs'],
    sources: [S.prendre, S.vouloir, S.boire],
  },
  {
    id: 'fr-ir-verbs',
    title: 'Regular -ir verbs',
    tagline: 'finir, choisir, réussir',
    level: LEVEL,
    summary:
      'Verbs like finir and choisir take the endings -is, -is, -it, -issons, -issez, -issent. The stem gets longer in the plural.',
    sections: [
      section(
        'forms',
        'The forms',
        frConjugationTable('Present tense of finir and choisir.', ['finir', 'choisir']),
        p(
          'The plural adds **-iss-**: *nous finissons*, *vous choisissez*, *ils finissent*. Other verbs of this type: grandir, réussir, remplir, réfléchir.',
        ),
      ),
      section(
        'careful',
        'Not every -ir verb',
        p(
          'Many verbs in **-ir** do **not** follow this pattern: *partir*, *sortir*, *venir*, *dormir* are irregular. Learn them one at a time.',
        ),
        mistake(
          'Watch out',
          '✗ nous finons  ✓ nous finissons',
          '✗ Je finit à midi.  ✓ Je finis à midi.',
        ),
        examples(
          ['Je choisis le menu.', 'I choose the set menu.'],
          ['Nous finissons à midi.', 'We finish at noon.'],
        ),
      ),
    ],
    related: ['fr-er-verbs', 'fr-prendre-vouloir'],
    sources: [S.finir],
  },
  {
    id: 'fr-contractions',
    title: 'au, aux, du, des',
    tagline: 'When à and de merge with the article',
    level: LEVEL,
    summary:
      'À and de merge with le and les: à + le = au, à + les = aux, de + le = du, de + les = des. With la and l’ nothing merges.',
    sections: [
      section(
        'table',
        'The merged forms',
        table(
          'à and de with the definite article.',
          ['Article', 'à + article', 'de + article'],
          [
            ['le', 'au', 'du'],
            ['la', 'à la', 'de la'],
            ['l’', 'à l’', 'de l’'],
            ['les', 'aux', 'des'],
          ],
        ),
        examples(
          ['Je vais au musée.', 'I am going to the museum.'],
          ['Elle va à la banque.', 'She is going to the bank.'],
          ['Le parc est près du marché.', 'The park is near the market.'],
        ),
      ),
      section(
        'careful',
        'Do not mix them up',
        p(
          'The **du** and **des** here are merged forms of *de + le* and *de + les*: **près du parc** (near the park). In **du pain** (some bread) they are partitive articles. The shape is the same, the job is different.',
        ),
        tip(
          'Cities and countries',
          'Cities take à with no article: à Paris. Feminine countries take en: en France. Masculine countries take au: au Canada. Plural ones take aux: aux États-Unis.',
        ),
        mistake(
          'Watch out',
          '✗ Je vais à le musée.  ✓ Je vais au musée.',
          '✗ Le parc est près de le marché.  ✓ Le parc est près du marché.',
        ),
      ),
    ],
    related: ['fr-place-prepositions', 'fr-aller'],
    sources: [S.contraction, S.preposition],
  },
  {
    id: 'fr-place-prepositions',
    title: 'dans, sur, devant, près de …',
    tagline: 'Where is it?',
    level: LEVEL,
    summary:
      'Some prepositions of place take the noun directly: dans, sur, sous, devant, derrière, entre. Others end in de and merge with the article: près du parc, loin de la gare.',
    sections: [
      section(
        'direct',
        'Prepositions that take the noun directly',
        table(
          'Direct prepositions of place.',
          ['Preposition', 'Meaning', 'Example'],
          [
            ['dans', 'in', 'Le sac est dans la voiture.'],
            ['sur', 'on', 'Le livre est sur la table.'],
            ['sous', 'under', 'Le chat est sous la chaise.'],
            ['devant', 'in front of', 'Un taxi est devant l’hôtel.'],
            ['derrière', 'behind', 'Le parc est derrière l’école.'],
            ['entre', 'between', 'La banque est entre la poste et la gare.'],
          ],
        ),
      ),
      section(
        'with-de',
        'Prepositions with de',
        table(
          'Prepositions that end in de.',
          ['Preposition', 'Meaning', 'Example'],
          [
            ['à côté de', 'next to', 'à côté du musée'],
            ['en face de', 'opposite', 'en face de la gare'],
            ['près de', 'near', 'près de l’école'],
            ['loin de', 'far from', 'loin des magasins'],
            ['à gauche de, à droite de', 'on the left, right of', 'à gauche de la banque'],
          ],
        ),
        p('The **de** merges with **le** and **les** (*du*, *des*), as on the contractions page.'),
        mistake(
          'Watch out',
          '✗ près le parc  ✓ près du parc',
          '✗ en face la gare  ✓ en face de la gare',
        ),
      ),
    ],
    related: ['fr-contractions', 'fr-aller'],
    sources: [S.preposition, S.contraction],
  },
  {
    id: 'fr-aller',
    title: 'aller',
    tagline: 'Going places',
    level: LEVEL,
    summary:
      'Aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont. After it use à plus the place, or chez plus a person.',
    sections: [
      section(
        'forms',
        'The forms',
        frConjugationTable('Present tense of aller.', ['aller']),
        p(
          'Aller also asks and answers “how are you?”: **Comment allez-vous ?** – **Je vais bien.**',
        ),
      ),
      section(
        'where',
        'Where to?',
        p(
          'Use **à** with the place and merge it with the article (*au musée*, *à la gare*, *aux magasins*). For a **person** or a business use **chez**: *Je vais chez Léa. Nous allons chez le médecin.* To ask the way say **Pour aller à la gare, s’il vous plaît ?**',
        ),
        examples(
          ['Je vais à la poste.', 'I am going to the post office.'],
          ['Vous allez au musée ?', 'Are you going to the museum?'],
          ['Ils vont à l’école.', 'They are going to school.'],
        ),
        mistake(
          'Watch out',
          '✗ Je vas à la gare.  ✓ Je vais à la gare.',
          '✗ Nous allez au marché.  ✓ Nous allons au marché.',
          '✗ Je vais en la gare.  ✓ Je vais à la gare.',
        ),
      ),
    ],
    related: ['fr-contractions', 'fr-futur-proche'],
    sources: [S.aller],
  },
  {
    id: 'fr-imperative',
    title: 'The imperative',
    tagline: 'Giving directions and instructions',
    level: LEVEL,
    summary:
      'To give directions use the verb without a pronoun. The vous form is the same as in the present. The tu form of -er verbs and of aller loses its -s.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Imperative of common verbs.',
          ['Verb', 'tu', 'nous', 'vous'],
          [
            ['tourner', 'tourne', 'tournons', 'tournez'],
            ['traverser', 'traverse', 'traversons', 'traversez'],
            ['prendre', 'prends', 'prenons', 'prenez'],
            ['aller', 'va', 'allons', 'allez'],
            ['être', 'sois', 'soyons', 'soyez'],
            ['avoir', 'aie', 'ayons', 'ayez'],
          ],
          3,
        ),
        p(
          'There is no subject pronoun: **Tournez à gauche.** The **nous** form means “let us”: *Allons-y !* The final **-s** of tu returns before *y* or *en*: *Vas-y !*',
        ),
      ),
      section(
        'use',
        'Giving directions',
        examples(
          ['Tournez à gauche.', 'Turn left.'],
          ['Traverse la rue.', 'Cross the street.'],
          ['Va tout droit.', 'Go straight on.'],
        ),
        p(
          'To say “do not”, put **ne … pas** around the verb: *Ne tournez pas à droite.* Add **s’il vous plaît** (or **s’il te plaît** with tu) to be polite.',
        ),
        mistake(
          'Watch out',
          '✗ Tu tournes à gauche !  ✓ Tourne à gauche !',
          '✗ Tournes à gauche !  ✓ Tourne à gauche !',
        ),
      ),
    ],
    related: ['fr-aller', 'fr-place-prepositions'],
    sources: [S.imperative],
  },
  {
    id: 'fr-demonstratives',
    title: 'ce, cet, cette, ces',
    tagline: 'This, that, these, those',
    level: LEVEL,
    summary:
      'Use ce before a masculine noun, cet before a masculine noun that starts with a vowel sound, cette before a feminine noun and ces before a plural. The same word means this and that.',
    sections: [
      section(
        'forms',
        'The four forms',
        table(
          'Demonstrative adjectives.',
          ['Noun', 'Form', 'Example'],
          [
            ['masculine, consonant', 'ce', 'ce pull, ce manteau'],
            ['masculine, vowel or mute h', 'cet', 'cet hiver, cet hôtel'],
            ['feminine', 'cette', 'cette robe, cette écharpe'],
            ['plural', 'ces', 'ces chaussures, ces amis'],
          ],
        ),
        p(
          'The same word means “this” and “that”. To separate two things add **-ci** (here) or **-là** (there) after the noun: *ce pull-ci, ce pull-là*.',
        ),
      ),
      section(
        'careful',
        'Gender decides, not the first letter',
        p(
          'Before a vowel a masculine noun takes **cet** (*cet été*), but a feminine noun keeps **cette** (*cette écharpe*). Times of day work the same way: **ce matin**, **cet après-midi**, **ce soir**, **cette semaine**.',
        ),
        mistake(
          'Watch out',
          '✗ ce hiver  ✓ cet hiver',
          '✗ cet robe  ✓ cette robe',
          '✗ ce écharpe  ✓ cette écharpe',
        ),
      ),
    ],
    related: ['fr-articles', 'fr-possessives'],
    sources: [S.demonstrative],
  },
  {
    id: 'fr-futur-proche',
    title: 'The near future: aller + infinitive',
    tagline: 'What is going to happen?',
    level: LEVEL,
    summary:
      'To say what is going to happen, use aller in the present plus an infinitive: je vais jouer, il va pleuvoir. In the negative ne … pas goes around aller.',
    sections: [
      section(
        'form',
        'How it is built',
        table(
          'aller in the present + infinitive.',
          ['Person', 'aller', 'infinitive', 'Example'],
          [
            ['je', 'vais', 'jouer', 'Je vais jouer au tennis.'],
            ['tu', 'vas', 'manger', 'Tu vas manger ici ?'],
            ['il / elle / on', 'va', 'pleuvoir', 'Il va pleuvoir.'],
            ['nous', 'allons', 'voyager', 'Nous allons voyager en été.'],
            ['vous', 'allez', 'prendre', 'Vous allez prendre le train ?'],
            ['ils / elles', 'vont', 'finir', 'Ils vont finir à midi.'],
          ],
        ),
        p('Only **aller** changes. The second verb always stays in the **infinitive**.'),
      ),
      section(
        'use',
        'When to use it',
        p(
          'The near future talks about plans and things that are about to happen: **demain**, **ce soir**, **la semaine prochaine**, **bientôt**. The present describes now or a habit: *Je joue au tennis* (I play, or I am playing).',
        ),
        compare(
          {
            title: 'Present',
            question: 'Now or a habit',
            example: 'Je joue au tennis.',
          },
          {
            title: 'aller + infinitive',
            question: 'Soon, a plan',
            example: 'Je vais jouer au tennis.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Je vais joue au tennis.  ✓ Je vais jouer au tennis.',
          '✗ Je ne vas pas sortir.  ✓ Je ne vais pas sortir.',
        ),
      ),
    ],
    related: ['fr-aller', 'fr-negation'],
    sources: [S.futurProche, S.aller],
  },
  {
    id: 'fr-adjective-position',
    title: 'Where does the adjective go?',
    tagline: 'un petit pull rouge',
    level: LEVEL,
    summary:
      'Most adjectives follow the noun: une robe rouge. A few short, common ones go before it: petit, grand, beau, joli, jeune, vieux, bon, mauvais. Colours and nationalities always come after.',
    sections: [
      section(
        'before',
        'Adjectives before the noun',
        table(
          'Common adjectives that go before the noun (beauty, age, goodness, size).',
          ['Group', 'Adjectives', 'Example'],
          [
            ['beauty', 'beau, joli', 'une jolie robe'],
            ['age', 'jeune, vieux, nouveau', 'un jeune homme'],
            ['goodness', 'bon, mauvais', 'un bon manteau'],
            ['size', 'petit, grand, gros', 'un grand pull'],
          ],
        ),
        tip(
          'beau changes',
          'Beau becomes bel before a vowel (un bel hôtel) and belle in the feminine (une belle robe).',
        ),
      ),
      section(
        'after',
        'Everything else comes after',
        p(
          '**Colours** and **nationalities** always follow the noun, and so do most other adjectives. When a noun has two, the short one goes before and the colour after: **un petit pull rouge**.',
        ),
        examples(
          ['Un pull rouge.', 'A red jumper.'],
          ['Une étudiante française.', 'A French student.'],
          ['Elle porte un grand manteau noir.', 'She is wearing a big black coat.'],
        ),
        mistake(
          'Watch out',
          '✗ un rouge pull  ✓ un pull rouge',
          '✗ un français étudiant  ✓ un étudiant français',
        ),
      ),
    ],
    related: ['fr-adjectives', 'fr-demonstratives'],
    sources: [S.adjective],
  },
];
