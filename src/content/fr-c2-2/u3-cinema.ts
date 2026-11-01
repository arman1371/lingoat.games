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

const U = 'fr-c2-2-cinema';
const LESSON = 'fr-c22-passif' as const;

const film = vocabList(U, 'Making a film', [
  ['le réalisateur', 'film director', '🎥'],
  ['le scénariste', 'screenwriter', '✒️'],
  ['le long-métrage', 'feature film', '🎞️'],
  ['le court-métrage', 'short film', '📽️'],
  ['le tournage', 'shooting', '🎬'],
  ['le plan-séquence', 'long take, one-shot scene', '🔭'],
  ['le générique', 'credits', '📃'],
  ['la bande-annonce', 'trailer', '📣'],
  ['le doublage', 'dubbing', '🎙️'],
  ['le sous-titrage', 'subtitling', '💬'],
  ['l’affiche', 'poster', '🪧'],
  ['la séance', 'screening, performance', '🕘'],
  ['le palmarès', 'list of award winners', '🏅'],
]);

const critique = vocabList(U, 'Film language and live performance', [
  ['le huis clos', 'story set in one closed place', '🚪'],
  ['le film choral', 'ensemble film', '🎭'],
  ['le chef-opérateur', 'director of photography', '📷'],
  ['la bande originale', 'soundtrack', '🎼'],
  ['le hors-champ', 'what is outside the frame', '🔲'],
  ['le gros plan', 'close-up', '🔍'],
  ['le montage', 'editing', '✂️'],
  ['le retour en arrière', 'flashback', '⏪'],
  ['la mise en abyme', 'story within the story', '🪞'],
  ['le spectacle vivant', 'live performance', '🎪'],
  ['le chorégraphe', 'choreographer', '💃'],
  ['la tournée', 'tour', '🚌'],
  ['l’avant-première', 'preview, premiere', '🥂'],
]);

const vocab = [...film, ...critique];
const grammarTags = ['grammar', LESSON, 'fr-c22-cinema'] as const;

export const cinema: UnitContent = {
  unit: unitFrC22({
    id: U,
    order: 3,
    title: 'Cinéma et spectacle',
    subtitle: 'Talk about films and live shows, and use the passive and its alternatives',
    emoji: '🎬',
    goals: [
      'Talk about making a film, its language and a night at the cinema or the theatre',
      'Form the passive in every tense and choose between par and de',
      'Avoid the passive with on, a pronominal verb or se faire + infinitive',
    ],
    grammar: [
      'The passive: être + past participle, the participle agrees with the subject.',
      'The agent: par (an action) or de (feelings, description).',
      'Alternatives: on + active verb, se vendre (pronominal passive), se faire + infinitive, the impersonal il a été décidé de.',
    ],
    vocabFields: ['Making a film', 'Film language and live performance'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-film',
      'flashcards',
      meta(
        'Making a film',
        'Réalisateur, tournage, doublage: the words of film-making.',
        ['vocabulary', 'fr-c22-cinema'],
        1,
        4,
      ),
      flashcards(film),
    ),

    activity(
      U,
      'flash-critique',
      'flashcards',
      meta(
        'Film language and live performance',
        'Gros plan, hors-champ, mise en abyme: how critics talk.',
        ['vocabulary', 'fr-c22-cinema'],
        1,
        4,
      ),
      flashcards(critique),
    ),

    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta(
        'Behind the camera',
        'Name the word for the picture.',
        ['vocabulary', 'fr-c22-cinema'],
        1,
        4,
      ),
      quizEmoji([
        ...byDe(film, 'le réalisateur', 'le long-métrage', 'la bande-annonce', 'l’affiche'),
        ...byDe(film, 'le doublage'),
        ...byDe(critique, 'le montage', 'le gros plan', 'la bande originale'),
      ]),
    ),

    activity(
      U,
      'listen-critique',
      'listen',
      meta(
        'Hear the critics',
        'Listen and pick the meaning.',
        ['listening', 'fr-c22-cinema'],
        2,
        4,
      ),
      listen(critique),
    ),

    activity(
      U,
      'memory-critique',
      'memory',
      meta(
        'Film critic’s memory',
        'Match each film term with its meaning.',
        ['vocabulary', 'fr-c22-cinema'],
        2,
        4,
      ),
      memory(
        byDe(
          critique,
          'le huis clos',
          'le film choral',
          'le chef-opérateur',
          'la bande originale',
          'le hors-champ',
          'le gros plan',
          'le montage',
          'le retour en arrière',
        ),
      ),
    ),

    activity(
      U,
      'spell-film',
      'spell',
      meta(
        'Spell it',
        'Unscramble, type and write what you hear. Accents are optional here.',
        ['spelling', 'fr-c22-cinema'],
        2,
        5,
      ),
      {
        items: [
          {
            id: 'sp-tournage',
            mode: 'unscramble',
            answer: 'tournage',
            hint: 'shooting',
            emoji: '🎬',
            speak: 'le tournage',
          },
          {
            id: 'sp-generique',
            mode: 'unscramble',
            answer: 'générique',
            hint: 'credits',
            emoji: '📃',
            speak: 'le générique',
          },
          {
            id: 'sp-doublage',
            mode: 'type',
            answer: 'doublage',
            hint: 'dubbing',
            emoji: '🎙️',
            speak: 'le doublage',
          },
          {
            id: 'sp-palmares',
            mode: 'type',
            answer: 'palmarès',
            hint: 'list of award winners',
            emoji: '🏅',
            speak: 'le palmarès',
          },
          dictation(
            'd1',
            'Le film a été doublé en trois langues.',
            'The film was dubbed into three languages.',
          ),
          dictation('d2', 'Le réalisateur s’est fait applaudir.', 'The director was applauded.'),
        ],
      },
    ),

    activity(
      U,
      'gap-passif',
      'gapfill',
      meta('Passive or not?', 'Choose the form that fits the sentence.', [...grammarTags], 2, 6),
      {
        items: [
          withWhy(
            gap(
              'g1',
              'La bande-annonce ___ hier soir.',
              'a été diffusée',
              ['a été diffusée', 'a diffusé', 'a été diffusé', 'est diffusé'],
              'The trailer was broadcast last night.',
              'Passive in the past: a été + participle, which agrees with bande-annonce (feminine).',
            ),
            {
              'a diffusé': 'That is active: the trailer would be broadcasting something.',
              'a été diffusé': 'The participle agrees with the subject: bande-annonce is feminine.',
              'est diffusé': 'Hier needs a past tense: a été, not est.',
            },
          ),
          withWhy(
            gap(
              'g2',
              'Le tournage ___ par la pluie.',
              'a été interrompu',
              ['a été interrompu', 'a interrompu', 'a été interrompue', 's’est interrompu'],
              'The shooting was interrupted by the rain.',
              'The rain is the agent: a passive with par. Tournage is masculine, so the participle is interrompu.',
            ),
            {
              'a interrompu': 'That is active, with the shooting as the one that interrupts.',
              'a été interrompue': 'Tournage is masculine: no -e.',
              's’est interrompu': 'A reflexive verb would say the shooting stopped itself.',
            },
          ),
          withWhy(
            gap(
              'g3',
              'Le film a été primé ___ un jury international.',
              'par',
              ['par', 'de', 'avec', 'pour'],
              'The film was awarded a prize by an international jury.',
              'Par introduces the agent of a concrete action; de is rather used with feelings or description (aimé de tous, couvert de gloire).',
            ),
            {
              de: 'De is rare with a concrete action such as awarding a prize.',
              avec: 'Avec would mean “together with”, not the agent.',
              pour: 'Pour does not introduce an agent.',
            },
          ),
          withWhy(
            gap(
              'g4',
              'Les billets ___ en ligne.',
              'se vendent',
              ['se vendent', 'se vend', 'vendent', 'sont vend'],
              'Tickets are sold online.',
              'The pronominal passive says that something is usually done, without naming who does it: se + verb agreeing with billets.',
            ),
            {
              'se vend': 'Billets is plural: se vendent.',
              vendent: 'Without se the tickets would be doing the selling.',
              'sont vend': 'The passive needs the participle vendus, not vend.',
            },
          ),
          withWhy(
            gap(
              'g5',
              'Le réalisateur ___ applaudir à la fin de la séance.',
              's’est fait',
              ['s’est fait', 'a fait', 's’est faite', 'est fait'],
              'The director was applauded at the end of the screening.',
              'Se faire + infinitive turns the subject into the one who undergoes the action. Faire stays invariable.',
            ),
            {
              'a fait': 'Without se the director would be making others applaud.',
              's’est faite': 'Faire before an infinitive never agrees.',
              'est fait': 'The auxiliary of a reflexive verb is être, with the pronoun s’.',
            },
          ),
          withWhy(
            gap(
              'g6',
              'Il a été décidé ___ prolonger le festival.',
              'de',
              ['de', 'que', 'par', 'à'],
              'It was decided to extend the festival.',
              'The impersonal passive il a été décidé is followed by de + infinitive, or by que + a clause.',
            ),
            {
              que: 'Que needs a clause with its own subject; here an infinitive follows.',
              par: 'Par would introduce an agent, which is not named here.',
              à: 'Décider takes de before an infinitive.',
            },
          ),
          typed(
            't1',
            'Les acteurs ont été ___ (applaudir) longuement.',
            'applaudis',
            'The actors were applauded for a long time.',
            'Passive: ont été + participle, which agrees with acteurs: masculine plural.',
          ),
          typed(
            't2',
            'Le film a été ___ (doubler) en trois langues.',
            'doublé',
            'The film was dubbed into three languages.',
            'Film is masculine singular: doublé.',
          ),
          typed(
            't3',
            'La Palme d’or a été ___ (décerner) à une cinéaste.',
            'décernée',
            'The Palme d’or was awarded to a woman director.',
            'The participle agrees with the subject, la Palme d’or: feminine singular.',
          ),
          typed(
            't4',
            'Les places ne ___ (se vendre) plus à la caisse.',
            'se vendent',
            'Seats are no longer sold at the box office.',
            'Pronominal passive: se + verb agreeing with places (plural).',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'sort-formes',
      'sortit',
      meta('Which way to say it?', 'Passive, on, pronominal or se faire?', [...grammarTags], 2, 5),
      {
        instruction: 'How is the idea of “being acted on” expressed?',
        buckets: [
          { id: 'passive', label: 'être + participle', emoji: '📜' },
          { id: 'on', label: 'on + active verb', emoji: '👥' },
          { id: 'pronominal', label: 'se + verb', emoji: '🔁' },
          { id: 'faire', label: 'se faire / se voir + infinitive', emoji: '🎯' },
        ],
        items: cards('f', [
          ['le film a été primé', 'passive', 'the film was awarded a prize'],
          ['les rôles seront distribués demain', 'passive', 'the parts will be given out tomorrow'],
          ['la scène est tournée de nuit', 'passive', 'the scene is shot at night'],
          ['on a projeté trois courts-métrages', 'on', 'three short films were shown'],
          ['on dit que le film est excellent', 'on', 'the film is said to be excellent'],
          ['on applaudit longuement', 'on', 'there is long applause'],
          ['ce film se regarde en famille', 'pronominal', 'this film is watched with the family'],
          ['les billets se vendent vite', 'pronominal', 'tickets sell fast'],
          ['cette réplique se cite souvent', 'pronominal', 'this line is often quoted'],
          ['il s’est fait huer', 'faire', 'he was booed'],
          ['elle se fait remarquer', 'faire', 'she gets noticed'],
          ['le film se voit décerner un prix', 'faire', 'the film is awarded a prize'],
        ]),
      },
    ),

    activity(
      U,
      'quiz-transform',
      'quiz',
      meta('Change the voice', 'Rewrite the sentence as asked.', [...grammarTags], 3, 6),
      {
        questions: [
          q(
            't1',
            'Le jury a primé le film.',
            'Le film a été primé par le jury.',
            [
              'Le film est primé le jury.',
              'Le film a été primée par le jury.',
              'Le film a primé par le jury.',
            ],
            'Keep the tense of the auxiliary (a été) and agree the participle with the new subject.',
          ),
          q(
            't2',
            'Un critique célèbre présentera les films.',
            'Les films seront présentés par un critique célèbre.',
            [
              'Les films sont présentés par un critique célèbre.',
              'Les films seront présenté par un critique célèbre.',
              'Les films auront présentés par un critique célèbre.',
            ],
            'A future active becomes a future passive: seront + participle agreeing with films.',
          ),
          q(
            't3',
            'On a doublé le film en français.',
            'Le film a été doublé en français.',
            [
              'Le film a été doublée en français.',
              'Le film est doublé en français.',
              'Le film s’a doublé en français.',
            ],
            'On disappears and the object becomes the subject: a été doublé.',
          ),
          q(
            't4',
            'Ces billets sont vendus en ligne. (avec se)',
            'Ces billets se vendent en ligne.',
            [
              'Ces billets se sont vendus en ligne.',
              'Ces billets vendent en ligne.',
              'Ces billets se vend en ligne.',
            ],
            'The pronominal passive keeps the present tense and agrees with billets.',
          ),
          q(
            't5',
            'La foule a applaudi le réalisateur. (avec se faire)',
            'Le réalisateur s’est fait applaudir par la foule.',
            [
              'Le réalisateur s’est applaudi par la foule.',
              'Le réalisateur a fait applaudir par la foule.',
              'Le réalisateur s’est fait applaudi par la foule.',
            ],
            'Se faire is followed by the infinitive, and faire does not agree.',
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
            'The film was shot in Marseille.',
            ['Le', 'film', 'a', 'été', 'tourné', 'à', 'Marseille.'],
            { extra: ['tournée'] },
          ),
          sent('s2', 'Tickets sell quickly.', ['Les', 'billets', 'se', 'vendent', 'vite.'], {
            extra: ['vend'],
          }),
          sent(
            's3',
            'The director got himself booed.',
            ['Le', 'réalisateur', 's’est', 'fait', 'huer.'],
            { extra: ['faite'] },
          ),
          sent(
            's4',
            'It was decided to extend the festival.',
            ['Il', 'a', 'été', 'décidé', 'de', 'prolonger', 'le', 'festival.'],
            { extra: ['décidée'] },
          ),
          sent(
            's5',
            'The audience applauded for a long time.',
            ['On', 'a', 'applaudi', 'longuement.'],
            {
              extra: ['applaudit'],
            },
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'After the film, at the box office, at the festival',
        'Talk about a film with the right voice.',
        ['communication', 'fr-c22-cinema'],
        3,
        6,
      ),
      {
        scenes: [
          {
            id: 'sortie',
            title: 'Leaving the cinema',
            emoji: '🍿',
            setting: 'You leave a screening with a friend. Use tu.',
            turns: [
              say('Camille', 'Alors, ce film, il t’a plu ?', 'So, did you like this film?'),
              you(
                'Beaucoup ! Le scénario a été écrit par une débutante, et ça se voit.',
                [
                  'Beaucoup ! Le scénario a écrit par une débutante, et ça se voit.',
                  'The passive needs été: a été écrit.',
                ],
                [
                  'Beaucoup ! Le scénario a été écrite par une débutante, et ça se voit.',
                  'Scénario is masculine: écrit.',
                ],
              ),
              say('Camille', 'Et la musique ?', 'And the music?'),
              you(
                'La bande originale a été composée en studio, et elle s’écoute très bien.',
                [
                  'La bande originale a été composé en studio, et elle s’écoute très bien.',
                  'La bande originale is feminine: composée.',
                ],
                [
                  'La bande originale a composée en studio, et elle s’écoute très bien.',
                  'The passive needs été: a été composée.',
                ],
              ),
            ],
          },
          {
            id: 'billetterie',
            title: 'At the box office',
            emoji: '🎟️',
            setting: 'You want tickets for the evening screening. Use vous.',
            turns: [
              say(
                'La caissière',
                'Bonsoir. Nous n’avons plus de places pour la séance de vingt heures.',
                'Good evening. We have no seats left for the eight o’clock screening.',
              ),
              you(
                'Les billets se vendent donc très vite ?',
                ['Les billets se vend donc très vite ?', 'Billets is plural: se vendent.'],
                [
                  'Les billets sont vend donc très vite ?',
                  'The passive would need the participle vendus; the pronominal form is simpler: se vendent.',
                ],
              ),
              say(
                'La caissière',
                'Oui. Mais il a été décidé d’ajouter une séance à vingt-deux heures.',
                'Yes. But it was decided to add a screening at ten o’clock.',
              ),
              you(
                'Très bien : le film sera-t-il projeté en version originale ?',
                [
                  'Très bien : le film sera-t-il projeter en version originale ?',
                  'The future passive needs the participle: projeté.',
                ],
                [
                  'Très bien : le film sera-t-il projetée en version originale ?',
                  'Film is masculine: projeté.',
                ],
              ),
            ],
          },
          {
            id: 'festival',
            title: 'At the festival',
            emoji: '🏆',
            setting: 'A journalist interviews you, a young director, at a festival. Use vous.',
            turns: [
              say(
                'La journaliste',
                'Votre film vient de se voir décerner un prix important.',
                'Your film has just been awarded an important prize.',
              ),
              you(
                'Oui, je me suis fait féliciter par tout le jury, c’est un honneur.',
                [
                  'Oui, je me suis fait félicité par tout le jury, c’est un honneur.',
                  'After se faire the verb stays in the infinitive: féliciter.',
                ],
                [
                  'Oui, je m’ai fait féliciter par tout le jury, c’est un honneur.',
                  'Reflexive verbs take être: je me suis fait.',
                ],
              ),
              say(
                'La journaliste',
                'Le tournage a-t-il été difficile ?',
                'Was the shooting difficult?',
              ),
              you(
                'Il a été interrompu par la pluie, mais l’équipe a tenu bon.',
                [
                  'Il a interrompu par la pluie, mais l’équipe a tenu bon.',
                  'The passive needs été: a été interrompu.',
                ],
                [
                  'Il a été interrompue par la pluie, mais l’équipe a tenu bon.',
                  'Il stands for le tournage, masculine: interrompu.',
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
        'Cinema and passive blitz',
        'True or false? Beat the clock!',
        ['vocabulary', 'fr-c22-cinema'],
        2,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'The passive is formed with être + past participle.', true),
          tf('b2', 'The participle of a passive verb agrees with the subject.', true),
          tf(
            'b3',
            '“Le film a été tournée” is correct.',
            false,
            'Film is masculine: le film a été tourné.',
          ),
          tf('b4', 'The agent of a passive verb is introduced by par or de.', true),
          tf('b5', '“Ces billets se vendent en ligne” is a pronominal passive.', true),
          tf(
            'b6',
            '“Il s’est fait applaudir” means that he applauded someone.',
            false,
            'It means that he was applauded.',
          ),
          tf(
            'b7',
            'An intransitive verb such as dormir can normally be turned into a passive.',
            false,
            'Only transitive verbs with a direct object have a passive.',
          ),
          tf('b8', '“On” + active verb is a common way to avoid the passive.', true),
          tf(
            'b9',
            '“Un long-métrage” is a short film.',
            false,
            'It is a feature film. The short film is un court-métrage.',
          ),
          tf('b10', '“Le doublage” replaces the original voices with another language.', true),
          tf('b11', '“Un plan-séquence” is a scene filmed without a cut.', true),
          tf(
            'b12',
            '“Le hors-champ” is what you see in the foreground.',
            false,
            'It is what lies outside the frame.',
          ),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Cinema critic challenge',
        'Vocabulary and the passive in one round.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          withLesson(
            q(
              'c1',
              'Le film a été (produire) par une jeune société.',
              'produit',
              ['produite', 'produits', 'produire'],
              'The participle agrees with the subject, film: masculine singular.',
            ),
            LESSON,
          ),
          q('c2', 'Que veut dire « la bande-annonce » ?', 'the trailer', [
            'the soundtrack',
            'the credits',
            'the poster',
          ]),
          withLesson(
            q(
              'c3',
              'Les billets ___ en ligne.',
              'se vendent',
              ['se vend', 'sont vend', 'vendent'],
              'Pronominal passive: se + verb agreeing with billets.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c4',
              'La Palme d’or a été (décerner) à une cinéaste.',
              'décernée',
              ['décerné', 'décernés', 'décernées'],
              'The participle agrees with the feminine singular subject.',
            ),
            LESSON,
          ),
          q('c5', 'Que veut dire « le gros plan » ?', 'the close-up', [
            'the long take',
            'the editing',
            'the flashback',
          ]),
          withLesson(
            q(
              'c6',
              'Le réalisateur s’est fait ___ par le public.',
              'huer',
              ['hué', 'hués', 'huée'],
              'Se faire is followed by an infinitive.',
            ),
            LESSON,
          ),
          withLesson(
            q(
              'c7',
              'Quelle phrase évite le passif ?',
              'On a projeté le film en avant-première.',
              [
                'Le film a été projeté en avant-première.',
                'Le film est projeté en avant-première.',
                'Le film sera projeté en avant-première.',
              ],
              'On + active verb avoids the passive.',
            ),
            LESSON,
          ),
          q('c8', 'Que veut dire « un retour en arrière » ?', 'a flashback', [
            'a rewind button',
            'a remake',
            'a sequel',
          ]),
        ],
      },
    ),
  ],
};
