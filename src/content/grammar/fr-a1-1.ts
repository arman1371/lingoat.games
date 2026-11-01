import { compare, examples, frConjugationTable, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-a1-1';

/** French A1.1, units 1 to 4: greetings, introductions, numbers and family. */
export const FR11_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-tu-vous',
    title: 'tu or vous?',
    tagline: 'Which “you” do I use?',
    level: LEVEL,
    summary:
      'French has two words for “you”. Use tu with people you know well and vous with strangers, with anyone you owe respect and with several people at once. The verb ending changes with the pronoun.',
    sections: [
      section(
        'when',
        'When to use which',
        p(
          'English has one “you”. French chooses between **tu** (close and informal) and **vous** (polite, distant or plural). The choice also tells the other person how you see them.',
        ),
        table(
          'tu and vous compared.',
          ['Situation', 'tu', 'vous'],
          [
            [
              'Who',
              'a friend, a family member, a child, a classmate',
              'a stranger, your boss, your teacher, a shop assistant, an older person',
            ],
            ['How many', 'one person', 'one person (polite) or several people'],
            ['Greeting', 'Salut ! Ça va ?', 'Bonjour, madame. Vous allez bien ?'],
            ['Verb (parler)', 'tu parles', 'vous parlez'],
          ],
        ),
      ),
      section(
        'switching',
        'Switching and common mistakes',
        p(
          'When you are unsure, start with **vous**. Moving to **tu** is normally something the other person offers, and it is easier among young people and in many workplaces. Using tu with a stranger can sound rude, while vous with a friend sounds cold.',
        ),
        mistake(
          'Watch out',
          '✗ Bonjour, madame. Comment vas-tu ?  ✓ Bonjour, madame. Comment allez-vous ?',
          '✗ Salut, Léa ! Comment allez-vous ?  ✓ Salut, Léa ! Comment vas-tu ?',
        ),
        tip(
          'Vous also means “you all”',
          'Bonjour à tous. Vous êtes prêts ? is said to a group, even of friends.',
        ),
        examples(
          ['Salut, Léa ! Tu vas bien ?', 'Hi, Léa! Are you well? (a friend)'],
          [
            'Bonjour, madame. Vous parlez français ?',
            'Hello, madam. Do you speak French? (polite)',
          ],
          ['Les enfants, vous êtes prêts ?', 'Children, are you ready? (several people)'],
        ),
      ),
    ],
    related: ['fr-questions', 'fr-pronouns'],
    sources: [S.tuVous],
  },
  {
    id: 'fr-questions',
    title: 'Asking questions',
    tagline: 'How do I ask how someone is, or anything else?',
    level: LEVEL,
    summary:
      'You can ask a yes/no question by raising your voice, by starting with est-ce que, or by turning the verb and pronoun round. Question words such as comment, où and combien open the others.',
    sections: [
      section(
        'how-are-you',
        'How are you?',
        p(
          'With **tu** ask **Comment vas-tu ?**, with **vous** ask **Comment allez-vous ?**. The verb comes first and is joined to the pronoun by a hyphen. Among friends the voice is enough: **Ça va ?** goes up at the end, and the answer is **Oui, ça va bien.**',
        ),
        examples(
          ['Comment vas-tu ?', 'How are you? (tu)'],
          ['Comment allez-vous ?', 'How are you? (vous)'],
          ['Ça va ? – Oui, ça va bien.', 'All right? – Yes, I am fine.'],
        ),
      ),
      section(
        'yes-no',
        'Three ways to ask yes or no',
        table(
          'The same question in three registers.',
          ['Way', 'Example', 'Where you hear it'],
          [
            ['Raise your voice', 'Tu parles français ?', 'everyday speech'],
            ['est-ce que', 'Est-ce que tu parles français ?', 'speech and writing'],
            ['Turn verb and pronoun round', 'Parles-tu français ?', 'careful or written French'],
          ],
          0,
        ),
        p(
          'All three mean the same. Start with the first two: they keep the word order of a statement.',
        ),
      ),
      section(
        'question-words',
        'Question words',
        table(
          'Question words used from the first units.',
          ['Word', 'Meaning', 'Example'],
          [
            ['comment', 'how', 'Comment tu t’appelles ?'],
            ['où', 'where', 'Où habites-tu ?'],
            ['quel / quelle', 'which, what', 'Quel âge as-tu ?'],
            ['combien', 'how much, how many', 'Combien ça coûte ?'],
            ['qui', 'who', 'Qui est-ce ?'],
            ['quand', 'when', 'Quand est-ce que tu viens ?'],
          ],
        ),
        tip(
          'A hyphen and a -t-',
          'Turned round, a verb that ends in a vowel gets -t- before il, elle or on: Parle-t-il français ?',
        ),
      ),
    ],
    related: ['fr-tu-vous', 'fr-pronouns'],
    sources: [S.interrogative],
  },
  {
    id: 'fr-pronouns',
    title: 'Subject pronouns',
    tagline: 'je, tu, il, elle, on, nous, vous, ils, elles',
    level: LEVEL,
    summary:
      'The pronoun decides the verb form. Il, elle and on share one form, and so do ils and elles. In everyday speech on means “we”. Before a vowel je becomes j’.',
    sections: [
      section(
        'pronouns',
        'The pronouns',
        table(
          'Subject pronouns and what they stand for.',
          ['Pronoun', 'Meaning', 'Example'],
          [
            ['je (j’)', 'I', 'Je parle. J’habite à Paris.'],
            ['tu', 'you (one friend)', 'Tu parles.'],
            ['il / elle', 'he, she, or a thing', 'Il parle. Elle est grande.'],
            ['on', 'one, we, people', 'On habite à Lyon.'],
            ['nous', 'we', 'Nous parlons.'],
            ['vous', 'you (polite or several)', 'Vous parlez.'],
            ['ils / elles', 'they', 'Ils parlent. Elles parlent.'],
          ],
        ),
        p(
          '**Il** and **elle** replace any noun: *le livre* → il, *la table* → elle. **Ils** stands for a group of men, or a mixed group; **elles** only for a group of women.',
        ),
      ),
      section(
        'verb-forms',
        'One pronoun, one verb form',
        frConjugationTable('Present tense of two regular -er verbs.', ['parler', 'habiter']),
        mistake(
          'Watch out',
          '✗ Je aime le café.  ✓ J’aime le café.',
          '✗ On habitons à Lyon.  ✓ On habite à Lyon.',
        ),
        tip(
          'on = nous in speech',
          'On habite à Lyon means the same as Nous habitons à Lyon, but the verb takes the il form.',
        ),
      ),
    ],
    related: ['fr-etre-avoir', 'fr-er-verbs'],
    sources: [S.personalPronoun, S.parler],
  },
  {
    id: 'fr-etre-avoir',
    title: 'être and avoir',
    tagline: 'The two verbs you cannot do without',
    level: LEVEL,
    summary:
      'Être (to be) and avoir (to have) are irregular, so learn them as they are. Être says who you are and where you are from, avoir says what you have and how old you are.',
    sections: [
      section(
        'forms',
        'The forms',
        frConjugationTable('Present tense of être and avoir.', ['être', 'avoir']),
      ),
      section(
        'etre',
        'Using être',
        p(
          'Use **être** for identity, origin, jobs and descriptions. After a job or nationality there is **no article**: *Je suis étudiante.* *Nous sommes de Lyon.*',
        ),
        examples(
          ['Je suis étudiante.', 'I am a student.'],
          ['Nous sommes de Lyon.', 'We are from Lyon.'],
          ['Il est médecin.', 'He is a doctor.'],
        ),
      ),
      section(
        'avoir',
        'Using avoir',
        p(
          'Use **avoir** for what you have, and for your **age**. Il y a (from y avoir) means “there is” or “there are”.',
        ),
        examples(
          ['Elle a un frère.', 'She has a brother.'],
          ['J’ai vingt ans.', 'I am twenty years old.'],
          ['Il y a trois chambres.', 'There are three bedrooms.'],
        ),
        mistake(
          'Watch out',
          '✗ Je suis vingt ans.  ✓ J’ai vingt ans.',
          '✗ Tu as français.  ✓ Tu es français.',
        ),
      ),
    ],
    related: ['fr-pronouns', 'fr-cest-il-est'],
    sources: [S.etre, S.avoir],
  },
  {
    id: 'fr-er-verbs',
    title: 'Regular -er verbs',
    tagline: 'parler, habiter, aimer and hundreds more',
    level: LEVEL,
    summary:
      'Drop -er and add -e, -es, -e, -ons, -ez, -ent. Only nous and vous sound different from the infinitive stem. Before a vowel or a mute h, je becomes j’.',
    sections: [
      section(
        'endings',
        'The endings',
        table(
          'Endings of regular -er verbs.',
          ['Person', 'Ending', 'parler'],
          [
            ['je', '-e', 'je parle'],
            ['tu', '-es', 'tu parles'],
            ['il / elle / on', '-e', 'il parle'],
            ['nous', '-ons', 'nous parlons'],
            ['vous', '-ez', 'vous parlez'],
            ['ils / elles', '-ent', 'ils parlent'],
          ],
        ),
        p(
          'In speech **parle**, **parles** and **parlent** sound exactly the same. The ending is only written.',
        ),
      ),
      section(
        'examples',
        'More verbs, and a spelling point',
        frConjugationTable('Three regular -er verbs.', ['habiter', 'aimer', 'manger']),
        p(
          'Verbs in **-ger** and **-cer** keep the sound of the stem: *nous mangeons*, *nous commençons*.',
        ),
        mistake(
          'Watch out',
          '✗ Je parles français.  ✓ Je parle français.',
          '✗ Nous parlez français.  ✓ Nous parlons français.',
          '✗ Je habite à Nice.  ✓ J’habite à Nice.',
        ),
        tip(
          'Not every verb is regular',
          'Aller, être, avoir and faire are irregular. Learn them one by one.',
        ),
      ),
    ],
    related: ['fr-pronouns', 'fr-etre-avoir'],
    sources: [S.parler, S.aimer],
  },
  {
    id: 'fr-articles',
    title: 'le, la, l’, les',
    tagline: 'Every noun comes with an article',
    level: LEVEL,
    summary:
      'Every French noun is masculine or feminine, so learn it with its article. Before a vowel or a mute h, le and la become l’. The plural is les for both genders; the indefinite articles are un, une and des.',
    sections: [
      section(
        'forms',
        'The articles',
        table(
          'Definite and indefinite articles.',
          ['Noun', 'Definite (the)', 'Indefinite (a, some)'],
          [
            ['masculine', 'le professeur', 'un professeur'],
            ['feminine', 'la ville', 'une ville'],
            ['before a vowel', 'l’école, l’ami', 'une école, un ami'],
            ['plural', 'les étudiants', 'des étudiants'],
          ],
        ),
        p(
          'The article is part of the word. Write **le pain**, **la table**, **l’eau** in your notes, not just *pain*.',
        ),
      ),
      section(
        'use',
        'Definite or indefinite?',
        compare(
          {
            title: 'le, la, l’, les',
            question: 'A known or general thing',
            example: 'J’aime le café.',
          },
          {
            title: 'un, une, des',
            question: 'One of several, or something new',
            example: 'J’ai un frère.',
          },
        ),
        tip(
          'Clues for the gender',
          'Words in -tion and -té are usually feminine (la nationalité, la ville); words in -age and -ment are usually masculine (le fromage, le moment). There are exceptions, so check a dictionary.',
        ),
        mistake('Watch out', '✗ le école  ✓ l’école', '✗ J’aime café.  ✓ J’aime le café.'),
      ),
    ],
    related: ['fr-gender', 'fr-plurals'],
    sources: [S.definite, S.indefinite, S.gender],
  },
  {
    id: 'fr-gender',
    title: 'Masculine and feminine',
    tagline: 'étudiant or étudiante?',
    level: LEVEL,
    summary:
      'Nationalities and many jobs have a feminine form, usually made by adding -e. Some endings change more, and words that already end in -e stay the same.',
    sections: [
      section(
        'patterns',
        'Making the feminine',
        table(
          'Common patterns for nationalities and jobs.',
          ['Pattern', 'Masculine', 'Feminine'],
          [
            ['add -e', 'étudiant, français', 'étudiante, française'],
            ['-ien → -ienne', 'italien, pharmacien', 'italienne, pharmacienne'],
            ['-ier → -ière', 'infirmier', 'infirmière'],
            ['-eur → -euse', 'vendeur', 'vendeuse'],
            ['-teur → -trice', 'acteur', 'actrice'],
            ['already -e: no change', 'suisse, journaliste', 'suisse, journaliste'],
          ],
        ),
      ),
      section(
        'use',
        'Using them',
        examples(
          ['Il est français. Elle est française.', 'He is French. She is French.'],
          ['Il est italien. Elle est italienne.', 'He is Italian. She is Italian.'],
          ['Il est suisse. Elle est suisse.', 'He is Swiss. She is Swiss.'],
        ),
        tip(
          'Lower case and no article',
          'Nationalities and languages are written with a small letter: je parle français. After être a job takes no article: elle est médecin.',
        ),
        mistake(
          'Watch out',
          '✗ Elle est italien.  ✓ Elle est italienne.',
          '✗ Elle est une infirmière.  ✓ Elle est infirmière.',
        ),
      ),
    ],
    related: ['fr-articles', 'fr-adjectives'],
    sources: [S.feminine, S.gender],
  },
  {
    id: 'fr-possessives',
    title: 'mon, ma, mes',
    tagline: 'My, your, his, her … and who they agree with',
    level: LEVEL,
    summary:
      'A possessive agrees with the thing owned, not with the owner. So son frère means “his brother” or “her brother”. Before a vowel the feminine singular takes mon, ton or son.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Possessive adjectives.',
          ['Owner', 'masculine', 'feminine', 'plural'],
          [
            ['my', 'mon', 'ma', 'mes'],
            ['your (tu)', 'ton', 'ta', 'tes'],
            ['his, her', 'son', 'sa', 'ses'],
            ['our', 'notre', 'notre', 'nos'],
            ['your (vous)', 'votre', 'votre', 'vos'],
            ['their', 'leur', 'leur', 'leurs'],
          ],
        ),
      ),
      section(
        'agreement',
        'Agreement and the vowel rule',
        p(
          'Look at the noun, not at the owner: **sa sœur** can be his sister or her sister. Before a feminine noun that starts with a vowel, French uses the masculine form so the words flow: **mon amie**, **ton école**.',
        ),
        examples(
          ['Paul et son frère.', 'Paul and his brother.'],
          ['Léa et sa tante.', 'Léa and her aunt.'],
          ['Mon amie habite à Lyon.', 'My (female) friend lives in Lyon.'],
        ),
        mistake('Watch out', '✗ ma amie  ✓ mon amie', '✗ Léa et son sœur  ✓ Léa et sa sœur'),
      ),
    ],
    related: ['fr-articles', 'fr-adjectives'],
    sources: [S.possessive],
  },
  {
    id: 'fr-adjectives',
    title: 'Adjectives agree',
    tagline: 'grand, grande, grands, grandes',
    level: LEVEL,
    summary:
      'An adjective takes the gender and number of its noun: add -e for the feminine and -s for the plural. Some endings change more, and adjectives ending in -e keep one form for both genders.',
    sections: [
      section(
        'forms',
        'Four forms',
        table(
          'Agreement of adjectives.',
          ['Pattern', 'masc.', 'fem.', 'masc. pl.', 'fem. pl.'],
          [
            ['add -e, -s', 'grand', 'grande', 'grands', 'grandes'],
            ['already -e', 'jeune', 'jeune', 'jeunes', 'jeunes'],
            ['-if → -ive', 'sportif', 'sportive', 'sportifs', 'sportives'],
            ['double the l', 'gentil', 'gentille', 'gentils', 'gentilles'],
            ['-ien → -ienne', 'italien', 'italienne', 'italiens', 'italiennes'],
            ['-eux → -euse', 'heureux', 'heureuse', 'heureux', 'heureuses'],
          ],
        ),
      ),
      section(
        'agreement',
        'Agreement in a sentence',
        examples(
          ['Mon père est grand. Ma mère est grande.', 'My father is tall. My mother is tall.'],
          ['Mes frères sont sportifs.', 'My brothers are sporty.'],
          ['Léa et Paul sont gentils.', 'Léa and Paul are kind.'],
        ),
        p(
          'When an adjective describes both masculine and feminine nouns, it takes the **masculine plural**.',
        ),
        mistake(
          'Watch out',
          '✗ Ma mère est grand.  ✓ Ma mère est grande.',
          '✗ Mes sœurs sont sportif.  ✓ Mes sœurs sont sportives.',
        ),
      ),
    ],
    related: ['fr-gender', 'fr-adjective-position'],
    sources: [S.adjective, S.feminine],
  },
  {
    id: 'fr-cest-il-est',
    title: 'C’est or il est?',
    tagline: 'Who is it, and what is it like?',
    level: LEVEL,
    summary:
      'Use c’est to say who or what something is, with a noun that has an article or a possessive. Use il est or elle est to describe a person you have already named, with an adjective or a job.',
    sections: [
      section(
        'compare',
        'Two different jobs',
        compare(
          {
            title: 'C’est …',
            question: 'Who or what is it?',
            example: 'C’est mon frère.',
          },
          {
            title: 'Il est … / Elle est …',
            question: 'What is he or she like?',
            example: 'Il est grand.',
          },
        ),
        p(
          'First you introduce with **c’est**, then you describe with **il est** or **elle est**: *C’est mon frère. Il est grand.*',
        ),
      ),
      section(
        'patterns',
        'The patterns',
        table(
          'Which one goes with what.',
          ['Pattern', 'Example'],
          [
            ['c’est + article or possessive + noun', 'C’est un étudiant. C’est mon frère.'],
            ['c’est + name', 'C’est Léa.'],
            ['il / elle est + adjective', 'Elle est sympa.'],
            ['il / elle est + job (no article)', 'Elle est médecin.'],
            ['c’est + adjective, about things in general', 'C’est super ! C’est loin ?'],
            ['ce sont + plural', 'Ce sont mes parents.'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ C’est médecin.  ✓ Elle est médecin.',
          '✗ Il est mon frère.  ✓ C’est mon frère.',
        ),
        tip(
          'In speech',
          'You will often hear C’est mes parents instead of Ce sont mes parents. Both are common.',
        ),
      ),
    ],
    related: ['fr-etre-avoir', 'fr-adjectives'],
    sources: [S.cest, S.etre],
  },
  {
    id: 'fr-plurals',
    title: 'Plurals',
    tagline: 'un frère, des frères',
    level: LEVEL,
    summary:
      'Most nouns add a silent -s in the plural, so you hear the plural only in the article: le, la and l’ become les, and un and une become des. Nouns in -eau, -eu and -al change differently.',
    sections: [
      section(
        'rules',
        'Making the plural',
        table(
          'Plural patterns.',
          ['Pattern', 'Singular', 'Plural'],
          [
            ['add -s', 'un frère', 'des frères'],
            ['-eau → -eaux', 'un bateau', 'des bateaux'],
            ['-eu → -eux', 'un jeu', 'des jeux'],
            ['-al → -aux', 'un animal', 'des animaux'],
            ['-s, -x, -z stay', 'un fils, un prix', 'des fils, des prix'],
          ],
        ),
      ),
      section(
        'sound',
        'You hear the article, not the noun',
        p(
          '**frère** and **frères** sound the same. What you hear is the article: *le frère* – *les frères*, *un ami* – *des amis*. Before a vowel the **s** of les and des is pronounced like a z: *les amis*.',
        ),
        examples(
          ['la sœur, les sœurs', 'sister, sisters'],
          ['un enfant, des enfants', 'a child, children'],
          ['mon cousin, mes cousins', 'my cousin, my cousins'],
        ),
        mistake('Watch out', '✗ des animals  ✓ des animaux', '✗ des bateaus  ✓ des bateaux'),
      ),
    ],
    related: ['fr-articles', 'fr-possessives'],
    sources: [S.number, S.indefinite],
  },
];
