import { byDe, flashcards, listen, memory, quizEmoji, vocabList } from '../builders';
import {
  activity,
  cards,
  dictation,
  gap,
  meta,
  q,
  say,
  sent,
  tf,
  typed,
  unitFrC22,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'fr-c2-2-engagement';
const LESSON = 'fr-c22-infinitif' as const;

const assos = vocabList(U, 'Associations and volunteering', [
  ['le bénévolat', 'volunteering', '🤝'],
  ['l’adhérent', 'member (of an association)', '🪪'],
  ['la cotisation', 'membership fee', '💶'],
  ['l’assemblée générale', 'general meeting', '🗳️'],
  ['la subvention', 'grant, public funding', '🏦'],
  ['le mécénat', 'corporate sponsorship, patronage', '🎁'],
  ['la collecte de fonds', 'fundraising', '💰'],
  ['la maraude', 'night outreach to homeless people', '🚶'],
  ['l’aide alimentaire', 'food aid', '🥫'],
  ['le service civique', 'civic service (voluntary national service)', '🎽'],
  ['le tissu associatif', 'network of associations', '🕸️'],
  ['le plaidoyer', 'advocacy', '📣'],
  ['la permanence', 'drop-in office hours', '🕑'],
]);

const citoyen = vocabList(U, 'Civil society and democratic life', [
  ['la société civile', 'civil society', '🌐'],
  ['la pétition', 'petition', '✍️'],
  ['la concertation', 'public consultation', '💬'],
  ['la démocratie participative', 'participatory democracy', '🙋'],
  ['le budget participatif', 'participatory budget', '🧾'],
  ['le conseil de quartier', 'neighbourhood council', '🏘️'],
  ['l’abstention', 'abstention, not voting', '🚫'],
  ['le bulletin blanc', 'blank ballot', '⬜'],
  ['la tribune', 'opinion piece, platform', '📰'],
  ['le collectif', 'collective, citizens’ group', '👥'],
  ['le groupe de pression', 'lobby, pressure group', '🧲'],
  ['la désobéissance civile', 'civil disobedience', '✊'],
  ['le rassemblement', 'gathering, rally', '📢'],
]);

const vocab = [...assos, ...citoyen];
const grammarTags = ['grammar', LESSON, 'fr-c22-engagement'] as const;

export const engagement: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 7,
    title: 'Engagement citoyen',
    subtitle: 'Talk about associations and civic life, and use the infinitive with precision',
    emoji: '🤝',
    goals: [
      'Describe how an association works and what volunteers do',
      'Discuss petitions, consultations and civic participation',
      'Use the past infinitive and the infinitive after avant de, après, pour, sans and de peur de',
    ],
    grammar: [
      'The past infinitive: après avoir signé, après être arrivés.',
      'Prepositions with the infinitive: avant de, pour, sans, afin de, de peur de.',
      'The negative infinitive: ne pas avoir signé, pour ne pas perdre.',
      'Same subject in both clauses: otherwise use a conjunction.',
    ],
    vocabFields: ['Associations and volunteering', 'Civil society and democratic life'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-assos',
      'flashcards',
      meta(
        'Associations and volunteering',
        'Bénévolat, cotisation, maraude: how civil society works.',
        ['vocabulary', 'fr-c22-engagement'],
        1,
        4,
      ),
      flashcards(assos),
    ),

    activity(
      U,
      'flash-citoyen',
      'flashcards',
      meta(
        'Civil society and democratic life',
        'Pétition, concertation, abstention: the words of civic life.',
        ['vocabulary', 'fr-c22-engagement'],
        1,
        4,
      ),
      flashcards(citoyen),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Civic life in pictures',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-engagement'],
        1,
        4,
      ),
      quizEmoji(
        byDe(
          assos,
          'le bénévolat',
          'la cotisation',
          'l’assemblée générale',
          'la subvention',
          'la collecte de fonds',
          'la maraude',
          'l’aide alimentaire',
          'la permanence',
        ),
      ),
    ),

    activity(
      U,
      'listen-citoyen',
      'listen',
      meta(
        'Hear the meeting',
        'Listen and pick the meaning.',
        ['listening', 'fr-c22-engagement'],
        2,
        4,
      ),
      listen(citoyen),
    ),

    activity(
      U,
      'memory-citoyen',
      'memory',
      meta(
        'Citizen memory',
        'Match each civic term with its meaning.',
        ['vocabulary', 'fr-c22-engagement'],
        2,
        4,
      ),
      memory(
        byDe(
          citoyen,
          'la société civile',
          'la pétition',
          'la concertation',
          'le budget participatif',
          'l’abstention',
          'le bulletin blanc',
          'le collectif',
          'le rassemblement',
        ),
      ),
    ),

    activity(
      U,
      'spell-assos',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-engagement'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-benevolat',
            mode: 'unscramble',
            answer: 'bénévolat',
            hint: 'volunteering',
            emoji: '🤝',
            speak: 'le bénévolat',
          },
          {
            id: 'sp-petition',
            mode: 'unscramble',
            answer: 'pétition',
            hint: 'petition',
            emoji: '✍️',
            speak: 'la pétition',
          },
          {
            id: 'sp-cotisation',
            mode: 'type',
            answer: 'cotisation',
            hint: 'membership fee',
            emoji: '💶',
            speak: 'la cotisation',
          },
          {
            id: 'sp-abstention',
            mode: 'type',
            answer: 'abstention',
            hint: 'abstention, not voting',
            emoji: '🚫',
            speak: 'l’abstention',
          },
          dictation(
            'd1',
            'Après avoir signé la pétition, ils sont allés à la mairie.',
            'After signing the petition, they went to the town hall.',
          ),
          dictation(
            'd2',
            'Avant de voter, lisez le programme.',
            'Before voting, read the programme.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-infinitif',
      'gapfill',
      meta(
        'Which infinitive?',
        'Choose the form that completes the sentence.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'Après ___ la pétition, ils sont allés à la mairie.',
              'avoir signé',
              ['avoir signé', 'signer', 'signé', 'avoir signer'],
              'After signing the petition, they went to the town hall.',
              'Après is followed by the past infinitive: avoir + participle.',
            ),
            {
              signer: 'After après the action must be marked as completed: avoir signé.',
              signé: 'The participle alone needs avoir in front of it.',
              'avoir signer': 'After avoir you need the participle (signé), not the infinitive.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Avant ___ distribuer les repas, les bénévoles se lavent les mains.',
              'de',
              ['de', 'que', 'à', 'pour'],
              'Before distributing the meals, the volunteers wash their hands.',
              'Avant de + infinitive, when both verbs have the same subject.',
            ),
            {
              que: 'Avant que needs a subject and a subjunctive.',
              à: 'Avant takes de, not à, before an infinitive.',
              pour: 'Pour means “in order to”.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Après ___ rentrés, ils ont rédigé le compte rendu.',
              'être',
              ['être', 'avoir', 'étant', 'sont'],
              'After getting back, they wrote the report.',
              'Rentrer is conjugated with être, so the past infinitive is être rentré(s).',
            ),
            {
              avoir: 'Rentrer takes être in the compound tenses.',
              étant: 'Étant is a participle, which does not follow après.',
              sont: 'After après an infinitive is needed, not a conjugated verb.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Ils se sont tus de peur de ___ remarqués.',
              'être',
              ['être', 'avoir', 'sont', 'soient'],
              'They kept quiet for fear of being noticed.',
              'De peur de takes an infinitive; the passive infinitive is être remarqué(s).',
            ),
            {
              avoir: 'Remarquer is passive here: être remarqués.',
              sont: 'After de peur de a conjugated verb is not possible.',
              soient: 'The subjunctive goes with de peur que, not with de peur de.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Je regrette de ___ avoir signé la pétition.',
              'ne pas',
              ['ne pas', 'pas ne', 'pas', 'ne'],
              'I regret not having signed the petition.',
              'In an infinitive, ne pas stay together in front of the verb or auxiliary.',
            ),
            {
              'pas ne': 'Ne comes before pas.',
              pas: 'The negation needs ne as well.',
              ne: 'Pas is missing.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Pour ___ aux élections, il faut être inscrit.',
              'voter',
              ['voter', 'vote', 'votant', 'voté'],
              'To vote in the elections, you must be registered.',
              'Pour is followed by an infinitive.',
            ),
            {
              vote: 'This is a conjugated form or a noun.',
              votant: 'The present participle does not follow pour.',
              voté: 'The participle would need avoir: pour avoir voté.',
            },
          ),
          typed(
            't1',
            'Après ___ fini leur maraude, ils ont dîné.',
            'avoir',
            'After finishing their rounds, they had dinner.',
            'Past infinitive: avoir + participle.',
          ),
          typed(
            't2',
            'Avant ___ prendre la parole, elle a salué l’assemblée.',
            'de',
            'Before speaking, she greeted the meeting.',
            'Avant de + infinitive.',
          ),
          typed(
            't3',
            'Après être ___ à la mairie, ils ont déposé le dossier.',
            'arrivés',
            'After arriving at the town hall, they handed in the file.',
            'With être the participle agrees with the subject: ils, so arrivés.',
          ),
          typed(
            't4',
            'Il regrette de ne pas ___ aidé les voisins.',
            'avoir',
            'He regrets not having helped the neighbours.',
            'Negative past infinitive: ne pas avoir aidé.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-infinitif',
      'sortit',
      meta(
        'Which kind of infinitive?',
        'Present infinitive, past infinitive, or negative infinitive?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'Which infinitive is it?',
        buckets: [
          { id: 'present', label: 'Present infinitive', emoji: '▶️' },
          { id: 'passe', label: 'Past infinitive', emoji: '⏪' },
          { id: 'neg', label: 'Negative infinitive', emoji: '🚫' },
        ],
        items: cards('i', [
          [
            'avant de voter, il a lu le programme',
            'present',
            'before voting, he read the programme',
          ],
          ['pour s’engager, il faut du temps', 'present', 'to get involved takes time'],
          ['ils sont partis sans parler', 'present', 'they left without speaking'],
          [
            'afin de convaincre, elle a pris la parole',
            'present',
            'to convince them, she spoke up',
          ],
          ['après avoir signé la pétition', 'passe', 'after signing the petition'],
          ['après être arrivés à la mairie', 'passe', 'after arriving at the town hall'],
          ['il regrette d’avoir manqué la réunion', 'passe', 'he regrets missing the meeting'],
          ['sans avoir prévenu personne', 'passe', 'without having told anyone'],
          ['il a décidé de ne pas voter', 'neg', 'he decided not to vote'],
          ['il a promis de ne plus mentir', 'neg', 'he promised not to lie any more'],
          [
            'pour ne pas perdre de temps, ils ont divisé les tâches',
            'neg',
            'to avoid losing time, they shared out the tasks',
          ],
          ['elle a décidé de ne pas se présenter', 'neg', 'she decided not to stand'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-transform',
      'quiz',
      meta(
        'Join with an infinitive',
        'Combine the two sentences with a preposition and an infinitive.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            't1',
            'Ils ont signé la pétition. Ensuite, ils sont allés à la mairie.',
            'Après avoir signé la pétition, ils sont allés à la mairie.',
            [
              'Après signé la pétition, ils sont allés à la mairie.',
              'Après avoir signer la pétition, ils sont allés à la mairie.',
              'Après signer la pétition, ils sont allés à la mairie.',
            ],
            'Après takes the past infinitive: avoir + participle.',
          ),
          q(
            't2',
            'Elle est rentrée. Ensuite, elle a rédigé le compte rendu.',
            'Après être rentrée, elle a rédigé le compte rendu.',
            [
              'Après avoir rentrée, elle a rédigé le compte rendu.',
              'Après être rentré, elle a rédigé le compte rendu.',
              'Après rentrée, elle a rédigé le compte rendu.',
            ],
            'Rentrer takes être and the participle agrees with elle.',
          ),
          q(
            't3',
            'Il vérifie la liste. Puis il distribue les repas.',
            'Avant de distribuer les repas, il vérifie la liste.',
            [
              'Avant distribuer les repas, il vérifie la liste.',
              'Avant que distribuer les repas, il vérifie la liste.',
              'Avant de il distribue les repas, il vérifie la liste.',
            ],
            'Avant de + infinitive when both verbs share the subject.',
          ),
          q(
            't4',
            'Ils se sont tus parce qu’ils avaient peur qu’on les remarque.',
            'Ils se sont tus de peur d’être remarqués.',
            [
              'Ils se sont tus de peur de être remarqués.',
              'Ils se sont tus de peur d’être remarqué.',
              'Ils se sont tus de peur qu’être remarqués.',
            ],
            'Same subject: de peur de + infinitive; de becomes d’ before être.',
          ),
          q(
            't5',
            'Je regrette : je n’ai pas signé la pétition.',
            'Je regrette de ne pas avoir signé la pétition.',
            [
              'Je regrette de pas ne avoir signé la pétition.',
              'Je regrette de ne avoir pas signé la pétition.',
              'Je regrette ne pas d’avoir signé la pétition.',
            ],
            'Ne pas stay together before the auxiliary of the past infinitive.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta('Build the sentence', 'Put the words in the right order.', [...grammarTags], 2, 5),
      {
        items: [
          sent(
            's1',
            'After signing the petition, they went to the town hall.',
            [
              'Après',
              'avoir',
              'signé',
              'la',
              'pétition,',
              'ils',
              'sont',
              'allés',
              'à',
              'la',
              'mairie.',
            ],
            { extra: ['signer'] },
          ),
          sent(
            's2',
            'Before voting, read the programme.',
            ['Avant', 'de', 'voter,', 'lisez', 'le', 'programme.'],
            { extra: ['que'] },
          ),
          sent(
            's3',
            'She regrets not having helped.',
            ['Elle', 'regrette', 'de', 'ne', 'pas', 'avoir', 'aidé.'],
            { extra: ['jamais'] },
          ),
          sent(
            's4',
            'They kept quiet for fear of being noticed.',
            ['Ils', 'se', 'sont', 'tus', 'de', 'peur', 'd’être', 'remarqués.'],
            { extra: ['avoir'] },
          ),
          sent(
            's5',
            'After arriving late, he missed the vote.',
            ['Après', 'être', 'arrivé', 'en', 'retard,', 'il', 'a', 'raté', 'le', 'vote.'],
            { extra: ['avoir'] },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Volunteer, meeting and mayor',
        'Talk about civic life with the right infinitive.',
        ['communication', 'fr-c22-engagement'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'benevole',
            title: 'Joining an association',
            emoji: '🙋',
            setting: 'You want to become a volunteer and talk to the coordinator. Use vous.',
            turns: [
              say(
                'La coordinatrice',
                'Pourquoi voulez-vous devenir bénévole ?',
                'Why do you want to become a volunteer?',
              ),
              you(
                'Après avoir lu votre rapport, j’ai voulu m’engager.',
                [
                  'Après lire votre rapport, j’ai voulu m’engager.',
                  'Après needs the past infinitive: avoir lu.',
                ],
                [
                  'Après avoir lu votre rapport, j’ai voulu m’engagé.',
                  'After vouloir the verb stays in the infinitive: m’engager.',
                ],
              ),
              say(
                'La coordinatrice',
                'Avez-vous déjà fait de la maraude ?',
                'Have you already done night outreach?',
              ),
              you(
                'Non, et je regrette de ne pas l’avoir fait plus tôt.',
                [
                  'Non, et je regrette ne pas de l’avoir fait plus tôt.',
                  'De comes right after regretter: de ne pas l’avoir fait.',
                ],
                ['Non, et je regrette de pas ne l’avoir fait plus tôt.', 'Ne comes before pas.'],
              ),
            ],
          },
          {
            id: 'assemblee',
            title: 'After the general meeting',
            emoji: '🗳️',
            setting: 'You talk to a fellow member after a meeting. Use tu.',
            turns: [
              say(
                'Hugo',
                'Tu as voté pour le budget participatif ?',
                'Did you vote for the participatory budget?',
              ),
              you(
                'Oui, après avoir lu les propositions.',
                [
                  'Oui, après lu les propositions.',
                  'Après needs avoir in front of the participle.',
                ],
                [
                  'Oui, après avoir lis les propositions.',
                  'After avoir the participle is needed: lu.',
                ],
              ),
              say(
                'Hugo',
                'Pourquoi tu n’as rien dit en réunion ?',
                'Why did you say nothing in the meeting?',
              ),
              you(
                'Je me suis tu de peur de me tromper.',
                [
                  'Je me suis tu de peur me tromper.',
                  'De peur must be followed by de before an infinitive.',
                ],
                [
                  'Je me suis tu de peur que me tromper.',
                  'With the same subject, use de peur de + infinitive instead of que.',
                ],
              ),
            ],
          },
          {
            id: 'maire',
            title: 'With the mayor',
            emoji: '🏛️',
            setting: 'You represent a neighbourhood council and talk to the mayor. Use vous.',
            turns: [
              say(
                'Le maire',
                'Que proposez-vous pour le quartier ?',
                'What do you suggest for the neighbourhood?',
              ),
              you(
                'Avant de décider, il faudrait consulter les habitants.',
                [
                  'Avant décider, il faudrait consulter les habitants.',
                  'Avant takes de before an infinitive.',
                ],
                [
                  'Avant de décidé, il faudrait consulter les habitants.',
                  'After de the verb is an infinitive: décider.',
                ],
              ),
              say(
                'Le maire',
                'Nous avons déjà tout décidé.',
                'We have already decided everything.',
              ),
              you(
                'Pour ne pas perdre la confiance des habitants, il faut les écouter.',
                [
                  'Pour pas ne perdre la confiance des habitants, il faut les écouter.',
                  'The negative infinitive uses ne pas, in that order.',
                ],
                [
                  'Pour ne perdre pas la confiance des habitants, il faut les écouter.',
                  'In an infinitive ne and pas stay together before the verb.',
                ],
              ),
            ],
          },
        ],
      },
    ),

    activity(
      U,
      'blitz',
      'blitz',
      meta(
        'Civic life and infinitive blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-engagement'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Après takes the past infinitive: après avoir signé.', true),
          tf('b2', '“Après signer” is correct French.', false, 'Say après avoir signé.'),
          tf('b3', 'Avant takes de before an infinitive.', true),
          tf('b4', 'In the negative infinitive, ne and pas both stand before the verb.', true),
          tf('b5', '“Ne pas avoir signé” is a negative past infinitive.', true),
          tf('b6', 'After être, the participle agrees with the subject: après être arrivés.', true),
          tf('b7', 'De peur de is followed by an infinitive when the subject is the same.', true),
          tf('b8', 'Pour can be followed by an infinitive.', true),
          tf('b9', '“Le bénévole” is paid for his work.', false, 'A volunteer works without pay.'),
          tf('b10', 'A cotisation is a membership fee.', true),
          tf(
            'b11',
            '“L’abstention” means voting twice.',
            false,
            'It means staying away from the vote.',
          ),
          tf('b12', 'A pétition collects signatures.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Citizen challenge',
        'Vocabulary and the infinitive in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q('c1', 'Que veut dire « la maraude » ?', 'night outreach to homeless people', [
            'a public consultation',
            'a membership fee',
            'a protest march',
          ]),
          withLesson(
            q(
              'c2',
              'Après ___ le formulaire, elle l’a envoyé.',
              'avoir rempli',
              ['remplir', 'rempli', 'avoir remplir'],
              'Après + past infinitive.',
            ),
            LESSON,
          ),
          q('c3', 'Que veut dire « un bulletin blanc » ?', 'a blank ballot', [
            'a voting card',
            'an election result',
            'a campaign leaflet',
          ]),
          withLesson(
            q(
              'c4',
              'Ils sont partis sans ___ prévenu personne.',
              'avoir',
              ['être', 'de', 'ne'],
              'Sans avoir + participle: without having told anyone.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « la subvention » ?', 'a grant, public funding', [
            'a petition',
            'a membership fee',
            'a volunteer contract',
          ]),
          withLesson(
            q(
              'c6',
              'Elle a décidé de ___ se présenter.',
              'ne pas',
              ['pas ne', 'pas', 'ne'],
              'The negative infinitive: ne pas + verb.',
            ),
            LESSON,
          ),
          q('c7', 'Que veut dire « le groupe de pression » ?', 'a lobby', [
            'a neighbourhood council',
            'a charity',
            'a trade union',
          ]),
          withLesson(
            q(
              'c8',
              'Ils se taisent de peur ___ perdre leur emploi.',
              'de',
              ['que', 'à', 'pour'],
              'Same subject: de peur de + infinitive.',
            ),
            LESSON,
          ),
        ],
      },
    ),
  ],
};
