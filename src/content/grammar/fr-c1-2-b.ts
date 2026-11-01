import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-c1-2';

/** French C1.2, units 2 to 6: family, ageing, health, solidarity, sport. */
export const FRC12_TOPICS_B: GrammarTopic[] = [
  {
    id: 'fr-c12-registres',
    title: 'Registres de langue',
    tagline: 'Same idea, different words for different people',
    level: LEVEL,
    summary:
      'French has several registers: populaire and familier for friends, courant for everyday situations, soutenu for formal or written French. Choose by the person you speak to and the medium.',
    sections: [
      section(
        'registers',
        'The registers',
        table(
          'One idea, three registers.',
          ['Familier', 'Courant', 'Soutenu'],
          [
            ['une bagnole', 'une voiture', 'une automobile'],
            ['bouffer', 'manger', 'se restaurer'],
            ['le boulot', 'le travail', 'le labeur'],
            ['un bouquin', 'un livre', 'un ouvrage'],
            ['J’en sais rien.', 'Je ne sais pas.', 'Je ne saurais vous le dire.'],
            ['T’as vu ça ?', 'Tu as vu ça ?', 'Avez-vous vu cela ?'],
          ],
        ),
        p(
          'Between the familier and the courant, speech often drops **ne** (*je sais pas*), uses **on** for *nous* and shortens words. Formal and written French keeps **ne**, uses inversion and prefers precise, rarer words.',
        ),
      ),
      section(
        'choose',
        'Choosing the right one',
        compare(
          {
            title: 'Familier',
            question: 'Friends, family, SMS?',
            example: 'Tu viens bouffer ce soir ?',
          },
          {
            title: 'Courant',
            question: 'Colleagues, shops, most situations?',
            example: 'Vous venez dîner ce soir ?',
          },
          {
            title: 'Soutenu',
            question: 'Letters, speeches, official texts?',
            example: 'Seriez-vous des nôtres pour le dîner ?',
          },
        ),
        tip(
          'Safe choice',
          'When in doubt use the courant register. Slang can offend in a formal setting, and very formal French sounds stiff among friends.',
        ),
        mistake(
          'Watch out',
          '✗ Je vous prie d’excuser mon gamin, il était crevé. (mixed registers in one letter)',
          '✓ Je vous prie de bien vouloir excuser l’absence de mon fils, qui était souffrant.',
        ),
      ),
    ],
    related: ['fr-c12-questions', 'fr-tu-vous'],
    sources: [S.registre],
  },
  {
    id: 'fr-c12-questions',
    title: 'Asking questions (3 ways)',
    tagline: 'Intonation, est-ce que or inversion',
    level: LEVEL,
    summary:
      'Casual: raise your voice (Tu viens ?). Neutral: est-ce que + normal order. Formal: invert verb and pronoun (Viens-tu ?). Add -t- after a vowel (A-t-elle appelé ?).',
    sections: [
      section(
        'three',
        'The three forms',
        table(
          'The same question in three registers.',
          ['Intonation', 'Est-ce que', 'Inversion'],
          [
            ['Tu viens ?', 'Est-ce que tu viens ?', 'Viens-tu ?'],
            [
              'Vous avez des enfants ?',
              'Est-ce que vous avez des enfants ?',
              'Avez-vous des enfants ?',
            ],
            ['Tu habites où ?', 'Où est-ce que tu habites ?', 'Où habites-tu ?'],
          ],
        ),
        p(
          'The first form is spoken, the third is written or formal. The question word can come last in casual speech (*Tu habites où ?*) but comes first with **est-ce que** and with inversion.',
        ),
      ),
      section(
        'inversion',
        'Inversion in detail',
        p(
          'Put the pronoun after the verb and join them with a hyphen: *Parlez-vous français ?* If the verb ends in a vowel and the pronoun is il, elle or on, add **-t-**: *A-t-elle appelé ? Parle-t-on français ici ?* With a noun subject keep the noun and add the matching pronoun: *Tes parents sont-ils venus ?*',
        ),
        examples(
          ['Où habitent tes grands-parents ?', 'Where do your grandparents live?'],
          ['Pourquoi est-ce qu’il est parti ?', 'Why did he leave?'],
          ['Les enfants sont-ils d’accord ?', 'Do the children agree?'],
        ),
        mistake(
          'Watch out',
          '✗ Est-ce que tu viens-tu ?  ✓ Est-ce que tu viens ? (do not combine two forms)',
          '✗ Elle a-t-elle appelé ?  ✓ A-t-elle appelé ?',
        ),
      ),
    ],
    related: ['fr-c12-registres', 'fr-questions'],
    sources: [S.interrogative, S.registre],
  },
  {
    id: 'fr-c12-reprise-pronominale',
    title: 'Avoiding repetition with pronouns',
    tagline: 'Il, lui, en, y, l’un … l’autre, cela',
    level: LEVEL,
    summary:
      'A text picks up an earlier word with a pronoun: il, elle, le, lui, leur, en, y, l’un … l’autre, cela. Each pronoun must point to one clear antecedent.',
    sections: [
      section(
        'pronouns',
        'Which pronoun takes up what?',
        table(
          'The most useful pronouns of reprise.',
          ['Earlier element', 'Pronoun', 'Example'],
          [
            [
              'a person or thing, subject',
              'il, elle, ils, elles',
              'Marie a 80 ans. Elle vit seule.',
            ],
            ['direct object', 'le, la, les', 'Ses voisins l’aident.'],
            ['à + person', 'lui, leur', 'Je lui rends visite.'],
            ['de + noun, or a quantity', 'en', 'Des EHPAD, il y en a peu.'],
            ['à, dans, en + place or thing', 'y', 'Elle vit à la campagne et y est heureuse.'],
            ['two people or things', 'l’un … l’autre', 'L’un est médecin, l’autre maire.'],
            ['a whole idea', 'cela, ça', 'Les seniors voyagent. Cela change le tourisme.'],
          ],
        ),
      ),
      section(
        'clarity',
        'Keeping it clear',
        p(
          'Use a pronoun when there is **one** obvious antecedent close by. If two nouns of the same gender and number could be meant, repeat the noun or use ce dernier (the last one mentioned) or celui-ci / celle-ci.',
        ),
        examples(
          [
            'Le directeur a reçu l’employé ; ce dernier était inquiet.',
            'The manager received the employee; the latter was worried.',
          ],
          [
            'J’ai deux oncles : l’un vit à Lyon, l’autre à Nice.',
            'I have two uncles: one lives in Lyon, the other in Nice.',
          ],
        ),
        mistake(
          'Watch out',
          '✗ Je l’ai parlé hier.  ✓ Je lui ai parlé hier. (parler à quelqu’un → lui)',
          '✗ Des places, il y les a peu.  ✓ Des places, il y en a peu.',
        ),
      ),
    ],
    related: ['fr-c12-reprise-nominale'],
    sources: [S.anaphore],
  },
  {
    id: 'fr-c12-reprise-nominale',
    title: 'Avoiding repetition with noun phrases',
    tagline: 'Ce phénomène, cette dame, l’auteur des Misérables',
    level: LEVEL,
    summary:
      'A noun phrase can pick up an earlier word: ce, cet, cette or ces + a noun, a synonym, a more general word, a description, or a noun that sums up the previous idea.',
    sections: [
      section(
        'ways',
        'Ways to pick up a noun',
        table(
          'Types of reprise nominale.',
          ['Type', 'Example'],
          [
            [
              'same noun + demonstrative',
              'Un vieil arbre domine la place. Cet arbre a trois cents ans.',
            ],
            ['synonym', 'Les seniors … ces retraités'],
            ['more general word', 'Le chêne … l’arbre'],
            ['description', 'Victor Hugo … l’auteur des Misérables'],
            ['noun that sums up an idea', 'Le papy-boom commence. Ce phénomène coûtera cher.'],
          ],
        ),
        p(
          'The demonstrative must agree: **ce** (masculine), **cet** (masculine before a vowel), **cette** (feminine), **ces** (plural).',
        ),
      ),
      section(
        'why',
        'Why use them?',
        p(
          'Pronouns avoid repetition; noun phrases avoid repetition **and** add information or a point of view: *cette cohabitation*, *ce vieillissement de la population*. They give a written text its cohesion and are typical of essays and articles.',
        ),
        compare(
          {
            title: 'Pronoun',
            question: 'The antecedent is close and clear',
            example: 'L’État finance les retraites. Il doit trouver de nouvelles ressources.',
          },
          {
            title: 'Noun phrase',
            question: 'You want to name, sum up or comment',
            example: 'Le vieillissement s’accélère. Ce phénomène pose un défi économique.',
          },
        ),
        tip(
          'Style',
          'In a long text vary the substitutes: repeating the same demonstrative phrase (ce phénomène … ce phénomène) sounds heavy.',
        ),
      ),
    ],
    related: ['fr-c12-reprise-pronominale', 'fr-demonstratives'],
    sources: [S.anaphore],
  },
  {
    id: 'fr-c12-recit-passe',
    title: 'Imparfait, passé composé, plus-que-parfait',
    tagline: 'Background, event, and what came before',
    level: LEVEL,
    summary:
      'Use the imparfait for the setting, the passé composé for events that move the story on, and the plus-que-parfait for what had already happened.',
    sections: [
      section(
        'roles',
        'Three tenses, three jobs',
        table(
          'What each tense does in a story.',
          ['Tense', 'Job', 'Example'],
          [
            [
              'imparfait',
              'background, states, habits',
              'Il pleuvait. Le patient souffrait depuis longtemps.',
            ],
            [
              'passé composé',
              'events, one after another',
              'Le médecin est arrivé et a posé le diagnostic.',
            ],
            ['plus-que-parfait', 'before the main past moment', 'Il avait oublié son ordonnance.'],
          ],
          2,
        ),
        p(
          'The **plus-que-parfait** is the imparfait of **avoir** or **être** plus the past participle: *j’avais pris, elle était tombée, nous étions partis*. Verbs that take être in the passé composé take it here too.',
        ),
      ),
      section(
        'together',
        'Telling a story',
        examples(
          [
            'Quand je suis arrivé aux urgences, il y avait beaucoup de monde.',
            'When I got to the ER, there were lots of people.',
          ],
          [
            'Elle s’était cassé la jambe, alors elle est allée à l’hôpital.',
            'She had broken her leg, so she went to hospital.',
          ],
        ),
        compare(
          {
            title: 'Imparfait',
            question: 'What was going on?',
            example: 'Il dormait quand le médecin est arrivé.',
          },
          {
            title: 'Passé composé',
            question: 'What happened?',
            example: 'Le médecin est arrivé à midi.',
          },
          {
            title: 'Plus-que-parfait',
            question: 'What had already happened?',
            example: 'Il avait déjà pris un cachet.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Quand j’arrivais, il y a eu beaucoup de monde.  ✓ Quand je suis arrivé, il y avait beaucoup de monde.',
          '✗ Je suis allé parce que je me suis cassé la jambe.  ✓ Je suis allé à l’hôpital parce que je m’étais cassé la jambe.',
        ),
      ),
    ],
    related: ['fr-c12-passe-simple'],
    sources: [S.imparfait, S.plusQueParfait],
  },
  {
    id: 'fr-c12-passe-simple',
    title: 'The passé simple',
    tagline: 'The tense of written narration',
    level: LEVEL,
    summary:
      'The passé simple tells finished events in writing, mostly in the third person. Learn to recognise it: -a and -èrent, -it and -irent, -ut and -urent, plus irregular stems.',
    sections: [
      section(
        'forms',
        'Forms',
        table(
          'Passé simple of common verbs.',
          ['Verb', 'il / elle', 'ils / elles'],
          [
            ['parler', 'parla', 'parlèrent'],
            ['finir', 'finit', 'finirent'],
            ['être', 'fut', 'furent'],
            ['avoir', 'eut', 'eurent'],
            ['faire', 'fit', 'firent'],
            ['venir', 'vint', 'vinrent'],
            ['naître', 'naquit', 'naquirent'],
            ['mourir', 'mourut', 'moururent'],
          ],
        ),
        p(
          'The endings depend on the verb group: after the -é participle verbs take **-ai, -as, -a, -âmes, -âtes, -èrent**; after -i they take **-is, -is, -it, -îmes, -îtes, -irent**; after -u they take **-us, -us, -ut, -ûmes, -ûtes, -urent**.',
        ),
      ),
      section(
        'use',
        'When it is used',
        p(
          'It tells completed events of a story in **writing**: novels, history books, tales. In speech and in everyday writing the passé composé replaces it. The imparfait still describes the background: *Il pleuvait. Le docteur ouvrit la porte et entra.*',
        ),
        examples(
          ['Napoléon naquit à Ajaccio en 1769.', 'Napoleon was born in Ajaccio in 1769.'],
          ['Elle poussa un cri et tomba.', 'She cried out and fell.'],
        ),
        tip(
          'Reading tip',
          'Look for -a, -it, -ut, -int and -èrent / -irent endings in a text: they signal the passé simple. You will meet it in literature far more than you will ever need to write it.',
        ),
      ),
    ],
    related: ['fr-c12-recit-passe'],
    sources: [S.passeSimple],
  },
];
