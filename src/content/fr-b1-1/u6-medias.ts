import { byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  meta,
  pcTable,
  q,
  say,
  sent,
  sortCards,
  tf,
  unitFr,
  withLesson,
  you,
  type UnitContent,
} from './helpers';

const U = 'fr-b1-1-medias';

const press = vocabList(U, 'News and the press', [
  ['l’actualité', 'current affairs', '📰'],
  ['la une', 'front page', '🗞️'],
  ['le titre', 'headline, title', '🔠'],
  ['le reportage', 'report', '🎥'],
  ['le reporter', 'reporter', '🎙️'],
  ['la rédaction', 'editorial team', '🖋️'],
  ['l’enquête', 'investigation', '🔎'],
  ['l’éditorial', 'editorial', '✍️'],
  ['le quotidien', 'daily newspaper', '📅'],
  ['l’hebdomadaire', 'weekly magazine', '🗓️'],
  ['la chaîne d’information', 'news channel', '📺'],
  ['le lecteur', 'reader', '👓'],
]);

const social = vocabList(U, 'Social networks', [
  ['le réseau social', 'social network', '🌐'],
  ['publier', 'to post, to publish', '📤'],
  ['diffuser', 'to broadcast, to spread', '🔁'],
  ['le fil d’actualité', 'news feed', '📜'],
  ['l’abonné', 'follower, subscriber', '👤'],
  ['la rumeur', 'rumour', '🗣️'],
  ['la fausse information', 'fake news', '🚫'],
  ['l’influenceur', 'influencer', '🤳'],
  ['la notification', 'notification', '🔔'],
  ['le commentaire', 'comment', '💬'],
  ['vérifier une source', 'to check a source', '✅'],
  ['la liberté d’expression', 'freedom of expression', '🕊️'],
]);

const reporting = vocabList(U, 'Reporting what is said', [
  ['annoncer', 'to announce', '📢'],
  ['révéler', 'to reveal', '🔓'],
  ['affirmer', 'to claim', '☝️'],
  ['démentir', 'to deny', '🙅'],
  ['dénoncer', 'to denounce', '🚨'],
  ['selon', 'according to', '📍'],
  ['d’après', 'according to', '📌'],
  ['rapporter', 'to report', '🧾'],
]);

const vocab = [...press, ...social, ...reporting];

const VOICE_CARDS: [string, 'active' | 'passive', string][] = [
  ['Le journaliste publie l’article.', 'active', 'The journalist publishes the article.'],
  [
    'L’article est publié par le journaliste.',
    'passive',
    'The article is published by the journalist.',
  ],
  ['La rédaction a vérifié la source.', 'active', 'The editorial team checked the source.'],
  [
    'La source a été vérifiée par la rédaction.',
    'passive',
    'The source was checked by the editorial team.',
  ],
  [
    'Des milliers de personnes partagent la vidéo.',
    'active',
    'Thousands of people share the video.',
  ],
  [
    'La vidéo est partagée par des milliers de personnes.',
    'passive',
    'The video is shared by thousands of people.',
  ],
  ['Le ministre a démenti la rumeur.', 'active', 'The minister denied the rumour.'],
  [
    'La rumeur a été démentie par le ministre.',
    'passive',
    'The rumour was denied by the minister.',
  ],
  ['On annoncera les résultats demain.', 'active', 'They will announce the results tomorrow.'],
  ['Les résultats seront annoncés demain.', 'passive', 'The results will be announced tomorrow.'],
];

export const medias: UnitContent = {
  unit: unitFr({
    id: U,
    order: 6,
    title: 'Médias en masse',
    subtitle: 'Talk about the news, social networks and reporting an event',
    emoji: '📰',
    goals: [
      'Understand and discuss news and social networks',
      'Report an event with the passive voice',
      'Read headlines built with nouns and use adverbs in -ment',
    ],
    grammar: ['The passive voice', 'Headlines: verbs become nouns', 'Adverbs in -ment'],
    vocabFields: ['News and the press', 'Social networks', 'Reporting what is said'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-press',
      'flashcards',
      meta(
        'News and the press',
        'Words for newspapers and journalists.',
        ['vocabulary', 'media-news'],
        1,
        4,
      ),
      flashcards(press),
    ),
    activity(
      U,
      'flash-social',
      'flashcards',
      meta(
        'Social networks',
        'Words for posting, sharing and checking.',
        ['vocabulary', 'internet-media'],
        1,
        4,
      ),
      flashcards(social),
    ),
    activity(
      U,
      'flash-reporting',
      'flashcards',
      meta(
        'Reporting what is said',
        'Verbs and phrases to report news.',
        ['vocabulary', 'media-news'],
        1,
        3,
      ),
      flashcards(reporting),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the meaning of the media words.',
        ['vocabulary', 'media-news'],
        1,
        3,
      ),
      quizDeEn(
        byDe(
          vocab,
          'la une',
          'l’enquête',
          'l’hebdomadaire',
          'le fil d’actualité',
          'la rumeur',
          'la fausse information',
          'démentir',
          'dénoncer',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'listen-medias',
      'listen',
      meta(
        'Listen and pick',
        'Listen to the word and pick its meaning.',
        ['listening', 'media-news'],
        2,
        3,
      ),
      listen(
        byDe(
          vocab,
          'le reportage',
          'la rédaction',
          'le quotidien',
          'l’influenceur',
          'la notification',
          'la liberté d’expression',
          'révéler',
          'd’après',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'gap-passive',
      'gapfill',
      {
        ...meta(
          'Make it passive',
          'Choose the right passive form.',
          ['grammar', 'fr-b11-passive', 'media-news'],
          2,
          5,
        ),
        lesson: 'fr-b11-passive',
      },
      {
        items: [
          gap(
            'p1',
            'Cet article ___ hier par notre rédaction.',
            'a été publié',
            ['a été publié', 'a publié', 'est publiant', 'avait publié'],
            'This article was published yesterday by our editorial team.',
            'Passive in the past: a été + participle.',
          ),
          gap(
            'p2',
            'Les résultats ___ demain à la télévision.',
            'seront annoncés',
            ['seront annoncés', 'ont annoncé', 'sera annoncé', 'sont annoncé'],
            'The results will be announced tomorrow on TV.',
            'Future passive; the participle agrees with résultats (plural).',
          ),
          gap(
            'p3',
            'La rumeur ___ par le ministre.',
            'a été démentie',
            ['a été démentie', 'a été démenti', 'a démentie', 'est démentis'],
            'The rumour was denied by the minister.',
            'The participle agrees with rumeur (feminine singular).',
          ),
          gap(
            'p4',
            'Les photos ___ par des milliers de personnes.',
            'sont partagées',
            ['sont partagées', 'est partagé', 'sont partagés', 'ont partagées'],
            'The photos are shared by thousands of people.',
            'Present passive: sont + feminine plural participle.',
          ),
          gap(
            'p5',
            'Le journal ___ chaque matin dans toute la ville.',
            'est distribué',
            ['est distribué', 'est distribuée', 'distribue', 'a distribué'],
            'The newspaper is delivered every morning across the city.',
            'Journal is masculine singular.',
          ),
          gap(
            'p6',
            'Cette information ___ avant-hier par deux sources.',
            'a été confirmée',
            ['a été confirmée', 'a été confirmé', 'a confirmé', 'est confirmées'],
            'This information was confirmed the day before yesterday by two sources.',
            'Information is feminine.',
          ),
          gap(
            'p7',
            'Les témoins ___ par une journaliste.',
            'ont été interviewés',
            [
              'ont été interviewés',
              'sont été interviewés',
              'ont étés interviewés',
              'ont eu interviewé',
            ],
            'The witnesses were interviewed by a journalist.',
            'Ont été + plural participle; été never agrees.',
          ),
          gap(
            'p8',
            'Le reportage ___ par la presse locale.',
            'a été repris',
            ['a été repris', 'a été reprise', 'a repris', 'était reprises'],
            'The report was picked up by the local press.',
            'Reportage is masculine singular.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-voice',
      'sortit',
      {
        ...meta(
          'Active or passive?',
          'Sort the sentences by voice.',
          ['grammar', 'fr-b11-passive'],
          2,
          4,
        ),
        lesson: 'fr-b11-passive',
      },
      {
        instruction: 'Is the sentence active or passive?',
        buckets: [
          { id: 'active', label: 'Active', emoji: '🎯' },
          { id: 'passive', label: 'Passive', emoji: '🔄' },
        ],
        items: sortCards('v', VOICE_CARDS),
      },
    ),
    activity(
      U,
      'gap-headlines',
      'gapfill',
      {
        ...meta(
          'Read the headline',
          'Turn the verb into the noun used in a headline.',
          ['grammar', 'fr-b11-nominalisation', 'media-news'],
          2,
          5,
        ),
        lesson: 'fr-b11-nominalisation',
      },
      {
        items: [
          gap(
            'n1',
            'Les prix augmentent. → Titre : « L’___ des prix »',
            'augmentation',
            ['augmentation', 'augmenter', 'augmenté', 'augmentant'],
            'Prices rise. → The rise in prices.',
            'Verbs in -er often give a noun in -ation.',
          ),
          gap(
            'n2',
            'Le président arrive à Paris. → « L’___ du président à Paris »',
            'arrivée',
            ['arrivée', 'arriver', 'arrivé', 'arrivant'],
            'The president arrives in Paris. → The president’s arrival in Paris.',
            'Arriver → l’arrivée.',
          ),
          gap(
            'n3',
            'On a découvert un virus. → « La ___ d’un virus »',
            'découverte',
            ['découverte', 'découvrir', 'découvert', 'découvrant'],
            'A virus was found. → The discovery of a virus.',
            'Découvrir → la découverte.',
          ),
          gap(
            'n4',
            'Le gouvernement décide. → « La ___ du gouvernement »',
            'décision',
            ['décision', 'décider', 'décidé', 'décidant'],
            'The government decides. → The government’s decision.',
            'Décider → la décision.',
          ),
          gap(
            'n5',
            'Les élèves manifestent. → « La ___ des élèves »',
            'manifestation',
            ['manifestation', 'manifester', 'manifesté', 'manifestant'],
            'Pupils demonstrate. → The pupils’ demonstration.',
            'Manifester → la manifestation.',
          ),
          gap(
            'n6',
            'Le chômage baisse. → « La ___ du chômage »',
            'baisse',
            ['baisse', 'baisser', 'baissé', 'baissant'],
            'Unemployment falls. → The fall in unemployment.',
            'Baisser → la baisse.',
          ),
          gap(
            'n7',
            'Un musée ouvre. → « L’___ d’un musée »',
            'ouverture',
            ['ouverture', 'ouvrir', 'ouvert', 'ouvrant'],
            'A museum opens. → The opening of a museum.',
            'Ouvrir → l’ouverture.',
          ),
          gap(
            'n8',
            'Un club se crée. → « La ___ d’un club »',
            'création',
            ['création', 'créer', 'créé', 'créant'],
            'A club is created. → The creation of a club.',
            'Créer → la création.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-adverbs',
      'gapfill',
      {
        ...meta(
          'Adverbs in -ment',
          'Turn the adjective into an adverb.',
          ['grammar', 'fr-b11-adverbs'],
          2,
          4,
        ),
        lesson: 'fr-b11-adverbs',
      },
      {
        items: [
          gap(
            'a1',
            'rapide → Il répond ___.',
            'rapidement',
            ['rapidement', 'rapidment', 'rapide', 'rapidément'],
            'quick → He answers quickly.',
            'Feminine adjective (rapide) + -ment.',
          ),
          gap(
            'a2',
            'lent → Elle parle ___.',
            'lentement',
            ['lentement', 'lentment', 'lentemment', 'lent'],
            'slow → She speaks slowly.',
            'Feminine form lente + -ment.',
          ),
          gap(
            'a3',
            'évident → ___, c’est faux.',
            'Évidemment',
            ['Évidemment', 'Évidentment', 'Évident', 'Évidement'],
            'obvious → Obviously, it is false.',
            '-ent → -emment.',
          ),
          gap(
            'a4',
            'constant → Il se plaint ___.',
            'constamment',
            ['constamment', 'constantment', 'constantement', 'constant'],
            'constant → He complains constantly.',
            '-ant → -amment.',
          ),
          gap(
            'a5',
            'vrai → C’est ___ intéressant.',
            'vraiment',
            ['vraiment', 'vraiement', 'vraîment', 'vrayment'],
            'true → It is really interesting.',
            'Vrai ends in a vowel: vrai + ment.',
          ),
          gap(
            'a6',
            'heureux → ___, personne n’a été blessé.',
            'Heureusement',
            ['Heureusement', 'Heureuxment', 'Heureux', 'Heureusment'],
            'happy → Fortunately, nobody was hurt.',
            'Feminine heureuse + -ment.',
          ),
          gap(
            'a7',
            'complet → Il a ___ changé.',
            'complètement',
            ['complètement', 'completement', 'complètment', 'complet'],
            'complete → He has completely changed.',
            'Feminine complète + -ment.',
          ),
          gap(
            'a8',
            'gentil → Elle sourit ___.',
            'gentiment',
            ['gentiment', 'gentillement', 'gentilment', 'gentil'],
            'kind → She smiles kindly.',
            'Gentil → gentiment (irregular spelling).',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-participles',
      'conjugation',
      {
        ...meta(
          'Participles for the passive',
          'The passé composé of regular -er verbs gives you the participle.',
          ['grammar', 'fr-b11-passive'],
          2,
          4,
        ),
        lesson: 'fr-b11-passive',
      },
      {
        tables: [
          pcTable('publier', 'to publish', ['je', 'nous', 'ils/elles']),
          pcTable('partager', 'to share', ['tu', 'vous', 'il/elle/on']),
          pcTable('annoncer', 'to announce', ['je', 'tu', 'ils/elles']),
          pcTable('confirmer', 'to confirm', ['nous', 'vous', 'il/elle/on']),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build a sentence',
        'Put the words in the right order.',
        ['grammar', 'media-news'],
        2,
        4,
      ),
      {
        items: [
          withLesson(
            'fr-b11-passive',
            sent(
              's1',
              'The article was published yesterday.',
              ['L’article', 'a', 'été', 'publié', 'hier.'],
              { extra: ['publiée'] },
            ),
          ),
          withLesson(
            'fr-b11-passive',
            sent(
              's2',
              'The photos were shared by thousands of people.',
              [
                'Les',
                'photos',
                'ont',
                'été',
                'partagées',
                'par',
                'des',
                'milliers',
                'de',
                'personnes.',
              ],
              { extra: ['partagé'] },
            ),
          ),
          withLesson(
            'fr-b11-passive',
            sent('s3', 'The rumour has been denied.', ['La', 'rumeur', 'a', 'été', 'démentie.'], {
              extra: ['démenti'],
            }),
          ),
          withLesson(
            'fr-b11-nominalisation',
            sent('s4', 'The opening of a museum.', ['L’ouverture', 'd’un', 'musée.'], {
              extra: ['ouvrir'],
            }),
          ),
          withLesson(
            'fr-b11-adverbs',
            sent(
              's5',
              'Fortunately, nobody was hurt.',
              ['Heureusement,', 'personne', 'n’a', 'été', 'blessé.'],
              { extra: ['Heureux,'] },
            ),
          ),
          withLesson(
            'fr-b11-adverbs',
            sent('s6', 'She answers quickly.', ['Elle', 'répond', 'rapidement.'], {
              extra: ['rapide'],
            }),
          ),
        ],
      },
    ),
    activity(
      U,
      'spell-medias',
      'spell',
      meta(
        'Spell the words',
        'Unscramble and type words from the unit. Accents are optional here.',
        ['spelling', 'media-news'],
        2,
        3,
      ),
      {
        items: [
          {
            id: 'sp-journaliste',
            mode: 'unscramble',
            answer: 'journaliste',
            hint: 'journalist',
            emoji: '🎙️',
            speak: 'le journaliste',
          },
          {
            id: 'sp-reportage',
            mode: 'unscramble',
            answer: 'reportage',
            hint: 'report',
            emoji: '🎥',
            speak: 'le reportage',
          },
          {
            id: 'sp-redaction',
            mode: 'type',
            answer: 'rédaction',
            hint: 'editorial team',
            emoji: '🖋️',
            speak: 'la rédaction',
          },
          dictation('sp-actualite', 'actualité', 'current affairs', 'l’actualité'),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Talking about the news',
        'A headline at work, a rumour online and a radio interview.',
        ['communication', 'media-news'],
        2,
        6,
      ),
      {
        scenes: [
          {
            id: 'headline',
            title: 'A headline at work',
            emoji: '📰',
            setting: 'You chat with your colleague Léa during the break. Use tu.',
            turns: [
              say(
                'Léa',
                'Tu as lu le journal ce matin ?',
                'Did you read the newspaper this morning?',
              ),
              you(
                'Oui, j’ai vu le titre : « La baisse du chômage ».',
                [
                  'Oui, j’ai vu le titre : « Baisser du chômage ».',
                  'In a headline use a noun, not an infinitive: la baisse.',
                ],
                [
                  'Oui, j’ai vu le titre : « La baissé du chômage ».',
                  'The noun is la baisse, not the participle.',
                ],
              ),
              say(
                'Léa',
                'Selon l’article, cette information a été confirmée.',
                'According to the article, this information has been confirmed.',
              ),
              you(
                'Oui, elle a été confirmée par deux sources.',
                [
                  'Oui, elle a été confirmé par deux sources.',
                  'The participle agrees with elle (information): confirmée.',
                ],
                [
                  'Oui, elle est été confirmée par deux sources.',
                  'The passive in the past is a été + participle.',
                ],
              ),
              say('Léa', 'Tu crois que c’est vrai ?', 'Do you think it is true?'),
              you(
                'Évidemment, mais je veux vérifier la source.',
                [
                  'Évidentment, mais je veux vérifier la source.',
                  'The adverb of évident is évidemment.',
                ],
                ['Évident, mais je veux vérifier la source.', 'Use the adverb, not the adjective.'],
              ),
            ],
          },
          {
            id: 'rumour',
            title: 'A rumour online',
            emoji: '🚨',
            setting: 'You talk to your friend Malik. Use tu.',
            turns: [
              say(
                'Malik',
                'Regarde, la vidéo est partagée par des milliers de personnes !',
                'Look, the video is being shared by thousands of people!',
              ),
              you(
                'Oui, mais je pense que c’est une fausse information.',
                [
                  'Oui, mais je pense que c’est un fausse information.',
                  'Information is feminine: une fausse information.',
                ],
                [
                  'Oui, mais je pense que ce soit une fausse information.',
                  'Je pense que + indicative.',
                ],
              ),
              say(
                'Malik',
                'Le ministre a démenti la rumeur, non ?',
                'The minister denied the rumour, didn’t he?',
              ),
              you(
                'Oui, la rumeur a été démentie ce matin.',
                ['Oui, la rumeur a été démenti ce matin.', 'Rumeur is feminine: démentie.'],
                [
                  'Oui, la rumeur a démentie ce matin.',
                  'Without été the sentence is no longer passive.',
                ],
              ),
              say('Malik', 'Et qui a publié la vidéo ?', 'And who posted the video?'),
              you('Un influenceur l’a publiée hier.', [
                'Un influenceur l’a publié hier.',
                'The pronoun l’ stands for la vidéo (feminine): publiée.',
              ]),
            ],
          },
          {
            id: 'radio',
            title: 'A radio interview',
            emoji: '🎙️',
            setting: 'A journalist, Mme Roux, interviews you about your town. Use vous.',
            turns: [
              say(
                'Mme Roux',
                'Qu’est-ce qui s’est passé dans votre quartier ?',
                'What happened in your neighbourhood?',
              ),
              you(
                'Un nouveau centre culturel a été ouvert la semaine dernière.',
                [
                  'Un nouveau centre culturel a ouvert été la semaine dernière.',
                  'The order is a été ouvert.',
                ],
                [
                  'Un nouveau centre culturel a été ouverte la semaine dernière.',
                  'Centre is masculine: ouvert.',
                ],
              ),
              say(
                'Mme Roux',
                'Comment les habitants ont-ils réagi ?',
                'How did the residents react?',
              ),
              you(
                'Ils sont vraiment contents.',
                ['Ils sont vrai contents.', 'Use the adverb vraiment before an adjective.'],
                ['Ils sont vraiement contents.', 'The adverb is spelt vraiment.'],
              ),
              say('Mme Roux', 'Et qu’affirme le maire ?', 'And what does the mayor claim?'),
              you('D’après lui, l’ouverture a attiré beaucoup de monde.', [
                'D’après lui, ouvrir a attiré beaucoup de monde.',
                'After an article-like position use the noun: l’ouverture.',
              ]),
            ],
          },
        ],
      },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      meta('Media blitz', 'True or false? Beat the clock!', ['grammar', 'media-news'], 2, 2),
      {
        seconds: 45,
        statements: [
          tf('b1', 'The passive is être + past participle.', true),
          tf('b2', 'In the passive the participle agrees with the subject.', true),
          tf('b3', '“La rumeur a été démenti” is correct.', false, 'Rumeur is feminine: démentie.'),
          tf('b4', 'The agent of a passive sentence is introduced by par.', true),
          tf('b5', 'Headlines often use a noun instead of a verb.', true),
          tf('b6', '“La baisse du chômage” is a noun phrase.', true),
          tf('b7', 'The adverb of rapide is rapidement.', true),
          tf(
            'b8',
            'The adverb of évident is évidentment.',
            false,
            'Adjectives in -ent give -emment: évidemment.',
          ),
          tf('b9', 'Constant gives constamment.', true),
          tf('b10', 'La une is the front page.', true),
          tf('b11', 'Démentir means to confirm.', false, 'Démentir means to deny.'),
          tf(
            'b12',
            'Un quotidien is a weekly magazine.',
            false,
            'A quotidien is a daily; the weekly is an hebdomadaire.',
          ),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Show what you know: a mixed final quiz.',
        ['vocabulary', 'grammar', 'media-news'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            'fr-b11-passive',
            q('c1', 'Complete: “Les résultats ___ hier soir.”', 'ont été annoncés', [
              'ont été annoncé',
              'a été annoncés',
              'ont annoncés',
            ]),
          ),
          withLesson(
            'fr-b11-passive',
            q(
              'c2',
              'Make it passive: “Un journaliste a écrit l’article.”',
              'L’article a été écrit par un journaliste.',
              [
                'L’article est écrit un journaliste.',
                'L’article a écrit par un journaliste.',
                'Un journaliste a été écrit l’article.',
              ],
            ),
          ),
          withLesson(
            'fr-b11-nominalisation',
            q('c3', 'Headline noun for “augmenter”:', 'l’augmentation', [
              'l’augmenter',
              'l’augmenté',
              'l’augmentant',
            ]),
          ),
          withLesson(
            'fr-b11-nominalisation',
            q('c4', 'Headline noun for “arriver”:', 'l’arrivée', [
              'l’arriver',
              'l’arrivant',
              'l’arrivement',
            ]),
          ),
          withLesson(
            'fr-b11-adverbs',
            q('c5', 'Adverb of “constant”:', 'constamment', [
              'constantement',
              'constantment',
              'constanment',
            ]),
          ),
          withLesson(
            'fr-b11-adverbs',
            q('c6', 'Adverb of “heureux”:', 'heureusement', [
              'heureuxment',
              'heureusment',
              'heureuse',
            ]),
          ),
          q('c7', '“Un influenceur” is …', 'someone with a large social network audience', [
            'a news channel',
            'a journalist’s editor',
            'a rumour',
          ]),
          q('c8', '“La fausse information” means …', 'fake news', [
            'an old edition',
            'a press card',
            'a front page',
          ]),
        ],
      },
    ),
  ],
};
