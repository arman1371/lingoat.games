import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FRB21_SOURCES as S } from './sources-fr-b2-1';

const LEVEL = 'fr-b2-1';

/** French B2.1, unit 8 (Cause et conséquence). */
export const FRB21_U8_TOPICS: GrammarTopic[] = [
  {
    id: 'fr-consequence',
    title: 'Expressing consequence',
    tagline: 'donc, c’est pourquoi, si bien que, tellement … que',
    level: LEVEL,
    summary:
      'A consequence is the result of something. Donc, alors, c’est pourquoi and par conséquent link two statements. Si bien que, de sorte que and tellement/si … que link two clauses. Trop and assez … pour express a limit.',
    sections: [
      section(
        'connectors',
        'Connectors of consequence',
        table(
          'From informal to formal.',
          ['Connector', 'Register', 'Example'],
          [
            ['donc, alors', 'everyday', 'Il pleut, donc nous restons à la maison.'],
            [
              'c’est pourquoi, voilà pourquoi',
              'neutral',
              'Les prix ont augmenté, c’est pourquoi les ventes ont baissé.',
            ],
            [
              'par conséquent, en conséquence',
              'formal',
              'Par conséquent, le service sera fermé lundi.',
            ],
            [
              'si bien que, de sorte que + indicative',
              'neutral',
              'Il a plu, de sorte que les récoltes ont été mauvaises.',
            ],
            [
              'tellement / si / tant (de) … que + indicative',
              'neutral',
              'Il est si fatigué qu’il s’endort au travail.',
            ],
          ],
        ),
        compare(
          {
            title: 'Cause',
            question: 'Why did it happen?',
            example: 'Il a perdu son travail parce qu’il arrivait en retard.',
          },
          {
            title: 'Consequence',
            question: 'What follows?',
            example: 'Il arrivait en retard, donc il a perdu son travail.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Il a tellement plu donc la rivière a débordé.  ✓ Il a tellement plu que la rivière a débordé.',
          '✗ Il pleut, car nous restons.  ✓ Il pleut, donc nous restons.',
        ),
      ),
      section(
        'limit',
        'Too much and enough',
        p(
          '**Trop … pour** and **assez … pour** say whether a quality is sufficient. With the same subject use an infinitive; with a new subject use **pour que** and the subjunctive. **De sorte que** takes the subjunctive when it expresses a goal and the indicative when it expresses a result.',
        ),
        examples(
          ['Il est assez grand pour comprendre.', 'He is old enough to understand.'],
          [
            'Il est trop tard pour que nous partions maintenant.',
            'It is too late for us to leave now.',
          ],
        ),
        tip(
          'Result or goal?',
          'Compare *Il a organisé la réunion de sorte que tout le monde soit présent* (goal, subjunctive) and *Il a plu, de sorte que les récoltes ont été mauvaises* (result, indicative).',
        ),
      ),
    ],
    related: ['fr-cause-verbs', 'fr-cause-conjunctions'],
    sources: [S.conjonction, S.circonstancielle],
  },
  {
    id: 'fr-cause-verbs',
    title: 'Verbs of cause and effect',
    tagline: 'provoquer, entraîner, conduire à, être dû à, résulter de',
    level: LEVEL,
    summary:
      'Some verbs say that one thing causes another (provoquer, causer, entraîner, conduire à, engendrer). Others say that something is the result of another (être dû à, résulter de, découler de). Check which of the two things is the subject.',
    sections: [
      section(
        'direction',
        'Which way does the arrow point?',
        table(
          'Cause as subject, or effect as subject.',
          ['The subject is the cause', 'The subject is the effect'],
          [
            [
              'La sécheresse a provoqué une hausse des prix.',
              'La hausse des prix est due à la sécheresse.',
            ],
            [
              'Cette décision a entraîné des répercussions.',
              'Ces répercussions résultent de cette décision.',
            ],
            ['Le trafic conduit à plus de pollution.', 'La pollution découle du trafic.'],
            ['Le stress cause des maladies.', 'Les maladies viennent du stress.'],
          ],
        ),
        p(
          '**Provoquer, causer, entraîner, engendrer** take a direct object; **conduire à** and **mener à** take **à**; **être dû à** takes **à** and agrees with its subject (*des retards dus à une grève*); **résulter de** and **découler de** take **de**.',
        ),
        mistake(
          'Watch out',
          '✗ Les retards ont provoqué à la grève.  ✓ La grève a provoqué des retards.',
          '✗ Ces retards sont dus de la grève.  ✓ Ces retards sont dus à la grève.',
        ),
        examples(
          [
            'Le manque de sommeil est un facteur de stress.',
            'Lack of sleep is a factor in stress.',
          ],
          [
            'Les accidents résultent souvent de la fatigue.',
            'Accidents often result from tiredness.',
          ],
        ),
      ),
      section(
        'agree',
        'Agreement of être dû',
        p(
          '**Dû** is a participle used as an adjective, so it agrees: *un retard dû à*, *une panne due à*, *des retards dus à*, *des erreurs dues à*.',
        ),
        tip(
          'Choose the verb',
          'In an essay, vary your verbs: *entraîner* and *provoquer* for direct causes, *conduire à* for a process, *résulter de* when you start from the result.',
        ),
      ),
    ],
    related: ['fr-consequence'],
    sources: [S.circonstancielle, S.conjonction],
  },
];
