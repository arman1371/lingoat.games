import { compare, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b2-2';

/** French B2.2, units 7 to 12: economy, history, territories, society, climate, debate. */
export const FR22B_TOPICS_C: GrammarTopic[] = [
  {
    id: 'fr-b22-concession',
    title: 'Contrast and concession',
    tagline: 'bien que · même si · malgré · pourtant',
    level: LEVEL,
    summary:
      'Concession admits a fact and then opposes another. Bien que, quoique and sans que take the subjunctive; même si, alors que and tandis que take the indicative; malgré and en dépit de take a noun; avoir beau takes an infinitive.',
    sections: [
      section(
        'connectors',
        'Connectors and what follows',
        table(
          'Concession connectors.',
          ['Connector', 'Followed by', 'Example'],
          [
            ['bien que, quoique', 'subjunctive', 'Bien qu’il soit cher, il se vend bien.'],
            [
              'même si, alors que, tandis que',
              'indicative',
              'Même si les prix montent, nous continuons.',
            ],
            ['malgré, en dépit de', 'a noun', 'Malgré la crise, les exportations progressent.'],
            ['avoir beau', 'infinitive', 'Il a beau essayer, il échoue.'],
            [
              'pourtant, cependant, néanmoins',
              'a new clause',
              'Le produit est cher ; pourtant, il se vend bien.',
            ],
            [
              'certes … mais',
              'concession + objection',
              'Certes, le prix est élevé, mais la qualité est excellente.',
            ],
          ],
        ),
      ),
      section(
        'traps',
        'Frequent mistakes',
        mistake(
          'Watch out',
          '✗ Bien que il est riche.  ✓ Bien qu’il soit riche.',
          '✗ Malgré il pleut.  ✓ Malgré la pluie. / Bien qu’il pleuve.',
          '✗ Il a beau essaie.  ✓ Il a beau essayer.',
        ),
        tip(
          'Same subject',
          'When both clauses share a subject, a participle or a noun phrase is often lighter: Bien que fatigué, il a continué.',
        ),
      ),
    ],
    related: ['fr-b22-comparison', 'fr-b22-cause'],
    sources: [S.subordinateAdverbial, S.connector],
  },
  {
    id: 'fr-b22-comparison',
    title: 'Comparing',
    tagline: 'plus … plus · de plus en plus · autant … que',
    level: LEVEL,
    summary:
      'Compare with plus, moins or aussi + adjective/adverb + que, and with plus de, moins de or autant de + noun + que. Bon has the comparative meilleur, bien has mieux. Plus … plus, de plus en plus and d’autant plus … que express proportion and progression.',
    sections: [
      section(
        'forms',
        'The forms',
        table(
          'Degrees of comparison.',
          ['Meaning', 'Adjective / adverb', 'Noun'],
          [
            ['more', 'plus rapide que', 'plus de clients que'],
            ['less', 'moins cher que', 'moins de dettes que'],
            ['as much', 'aussi rapide que', 'autant de clients que'],
          ],
        ),
        p(
          'Irregular forms: **bon → meilleur** (adjective), **bien → mieux** (adverb). The superlative adds the article: *le plus intéressant*, *le moins cher*, *le meilleur*.',
        ),
      ),
      section(
        'proportion',
        'Proportion and progression',
        compare(
          {
            title: 'plus … plus',
            question: 'proportion',
            example: 'Plus on dépense, plus on s’endette.',
          },
          {
            title: 'de plus en plus',
            question: 'progression',
            example: 'De plus en plus de gens achètent d’occasion.',
          },
          {
            title: 'd’autant plus … que',
            question: 'all the more as',
            example: 'Ils sont d’autant plus exigeants que les prix augmentent.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Elle travaille meilleur que lui.  ✓ Elle travaille mieux que lui.',
          '✗ Elle gagne autant comme moi.  ✓ Elle gagne autant que moi.',
        ),
      ),
    ],
    related: ['fr-b22-concession'],
    sources: [S.comparative, S.superlative],
  },
  {
    id: 'fr-b22-passe-simple',
    title: 'The passé simple',
    tagline: 'Il fut · ils prirent · elle naquit',
    level: LEVEL,
    summary:
      'The passé simple is the tense of written narration. At B2 you must recognise it, above all the third person singular and plural, and be able to place it next to the imparfait. In speech the passé composé replaces it.',
    sections: [
      section(
        'forms',
        'Forms to recognise',
        table(
          'Endings of the passé simple.',
          ['Group', 'il / elle', 'ils / elles', 'Example'],
          [
            ['-er verbs', '-a', '-èrent', 'il arriva, ils arrivèrent'],
            ['-ir, -re verbs', '-it', '-irent', 'il finit, ils prirent'],
            ['-oir, -ir irregular', '-ut', '-urent', 'il fut, il eut, il mourut'],
            ['venir, tenir', '-int', '-inrent', 'il vint, ils vinrent'],
          ],
        ),
        table(
          'Irregular forms you will meet often.',
          ['Infinitive', 'il / elle', 'ils / elles'],
          [
            ['être', 'fut', 'furent'],
            ['avoir', 'eut', 'eurent'],
            ['faire', 'fit', 'firent'],
            ['dire', 'dit', 'dirent'],
            ['voir', 'vit', 'virent'],
            ['naître', 'naquit', 'naquirent'],
          ],
        ),
      ),
      section(
        'use',
        'Where it is used',
        p(
          'The **passé simple** appears in history books, novels and press reports of the past. It states **completed events**, one after another: *Il entra, regarda autour de lui et sortit.* In conversation and in everyday writing French uses the **passé composé** instead: *Il est entré, il a regardé et il est sorti.*',
        ),
        tip(
          'Do you have to produce it?',
          'Not in speech. Produce the third person (il fut, ils prirent) if you write narrative; recognise all forms when you read.',
        ),
      ),
    ],
    related: ['fr-b22-plus-que-parfait'],
    sources: [S.passeSimple],
  },
  {
    id: 'fr-b22-plus-que-parfait',
    title: 'Narrative tenses',
    tagline: 'Il pleuvait quand ils arrivèrent · il avait déjà quitté',
    level: LEVEL,
    summary:
      'In a story the passé simple or passé composé gives the events, the imparfait the background and habits, and the plus-que-parfait the actions that had already happened.',
    sections: [
      section(
        'roles',
        'Three tenses, three roles',
        table(
          'How the tenses work together.',
          ['Tense', 'Role', 'Example'],
          [
            ['passé simple / passé composé', 'the events in sequence', 'Ils arrivèrent à midi.'],
            ['imparfait', 'background, description, habit', 'Il pleuvait, la ville était calme.'],
            [
              'plus-que-parfait',
              'what had happened before',
              'Le roi avait signé le traité deux ans plus tôt.',
            ],
          ],
        ),
        p(
          'The **plus-que-parfait** is the imparfait of *avoir* or *être* plus the participle: *j’avais fini*, *elle était partie*, *nous nous étions levés*. It often follows verbs of saying and remembering in the past: *Il dit qu’il avait perdu la bataille.*',
        ),
      ),
      section(
        'contrast',
        'Choosing the tense',
        compare(
          { title: 'imparfait', question: 'the scene', example: 'Le soleil se levait…' },
          {
            title: 'passé simple',
            question: 'the new event',
            example: '…quand l’armée entra dans la ville.',
          },
          {
            title: 'plus-que-parfait',
            question: 'before that',
            example: 'La population avait déjà fui.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Il a dit qu’il a oublié.  ✓ Il a dit qu’il avait oublié.',
          '✗ Il pleuvait quand ils arrivaient.  ✓ Il pleuvait quand ils arrivèrent. / sont arrivés.',
        ),
      ),
    ],
    related: ['fr-b22-passe-simple', 'fr-b22-si-clauses'],
    sources: [S.pluperfect, S.passeSimple],
  },
  {
    id: 'fr-b22-participle-agreement',
    title: 'Past participle agreement',
    tagline: 'Les photos que j’ai prises · elle s’est installée',
    level: LEVEL,
    summary:
      'The past participle agrees with the subject after être, with a preceding direct object after avoir, and with the subject of a pronominal verb when se is a direct object. Fait before an infinitive and participles with a following object stay invariable.',
    sections: [
      section(
        'rules',
        'The four cases',
        table(
          'When does the participle agree?',
          ['Case', 'Rule', 'Example'],
          [
            ['être', 'agrees with the subject', 'Elles sont parties.'],
            ['avoir + COD before', 'agrees with the COD', 'Les photos que j’ai prises.'],
            ['avoir + COD after', 'invariable', 'J’ai pris les photos.'],
            ['pronominal, se = direct object', 'agrees with the subject', 'Elle s’est installée.'],
            [
              'pronominal, se = indirect object',
              'invariable',
              'Ils se sont parlé / serré la main.',
            ],
            ['fait + infinitive', 'invariable', 'La maison qu’il a fait construire.'],
          ],
        ),
        tip(
          'Quick test',
          'Ask the question quoi? or qui? after the verb. If the answer is before the participle (que, les, la, quels…), agree. If there is no such answer, or it comes after, do not.',
        ),
      ),
      section(
        'traps',
        'Frequent mistakes',
        mistake(
          'Watch out',
          '✗ Les photos que j’ai pris.  ✓ Les photos que j’ai prises.',
          '✗ Ils se sont serrés la main.  ✓ Ils se sont serré la main.',
          '✗ Elle s’est faite construire une maison.  ✓ Elle s’est fait construire une maison.',
        ),
      ),
    ],
    related: ['fr-b22-present-participle'],
    sources: [S.participleAgreement, S.pastParticiple],
  },
  {
    id: 'fr-b22-present-participle',
    title: 'Gérondif and participe présent',
    tagline: 'En créant · les habitants vivant ici · une rue passante',
    level: LEVEL,
    summary:
      'Three -ant forms look alike but behave differently: the gérondif (en + -ant, how or when), the participe présent (replaces qui + verb or gives a reason, invariable) and the adjectif verbal (an adjective that agrees).',
    sections: [
      section(
        'three',
        'Three forms with -ant',
        table(
          'Gérondif, participe présent and adjectif verbal.',
          ['Form', 'Function', 'Agrees?', 'Example'],
          [
            [
              'gérondif',
              'how, when, why: the same subject',
              'no',
              'En créant des parcs, la mairie agit.',
            ],
            [
              'participe présent',
              'like qui + verb, or a cause',
              'no',
              'Les habitants vivant en banlieue…',
            ],
            ['adjectif verbal', 'describes a noun', 'yes', 'une ville accueillante'],
          ],
        ),
        p(
          'Some adjectives are spelt differently from the participle: **convaincant** (convainquant), **fatigant** (fatiguant), **différent** (différant), **précédent** (précédant).',
        ),
      ),
      section(
        'use',
        'Using them well',
        compare(
          {
            title: 'gérondif',
            question: 'en + -ant',
            example: 'Elle s’est blessée en faisant du vélo.',
          },
          {
            title: 'participe présent',
            question: '-ant alone',
            example: 'Jugeant le projet inutile, ils ont voté contre.',
          },
          { title: 'adjectif verbal', question: 'agrees', example: 'des chiffres convaincants' },
        ),
        mistake(
          'Watch out',
          '✗ En traversé le centre.  ✓ En traversant le centre.',
          '✗ Les habitants vivants en banlieue.  ✓ Les habitants vivant en banlieue.',
        ),
        tip(
          'Compound form',
          'Ayant / étant + participle expresses an earlier action: Ayant refusé le projet, le maire a démissionné.',
        ),
      ),
    ],
    related: ['fr-b22-participle-agreement'],
    sources: [S.presentParticiple, S.gerund],
  },
];
