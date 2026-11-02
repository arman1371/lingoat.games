import { activity, byDe, flashcards, listen, quizDeEn, vocabList } from '../builders';
import { gap, mc, npc, unitFr, you, type UnitContent } from './helpers';

const U = 'fr-a2-2-parcours';

const studies = vocabList(U, 'Studies and training', [
  ['une formation', 'a training course', '🎓'],
  ['une mention', 'an honours grade', '📜'],
  ['une licence', 'a bachelor’s degree', '🏅'],
  ['un master', 'a master’s degree', '🎖️'],
  ['une bourse', 'a grant', '💰'],
  ['un cursus', 'a course of study', '📚'],
  ['une filière', 'a field of study', '🧬'],
  ['une inscription', 'an enrolment', '🖋️'],
  ['un stagiaire', 'an intern', '🧑‍💼'],
  ['passer un concours', 'to sit a competitive exam', '✅'],
  ['échouer', 'to fail', '❌'],
  ['une matière', 'a subject', '📖'],
  ['une faculté', 'a university department', '🏛️'],
  ['un amphithéâtre', 'a lecture hall', '🎤'],
]);

const work = vocabList(U, 'Work and applications', [
  ['le chômage', 'unemployment', '💼'],
  ['une offre d’emploi', 'a job offer', '🪑'],
  ['une candidature', 'an application', '📨'],
  ['un entretien', 'an interview', '🤝'],
  ['une lettre de motivation', 'a cover letter', '✉️'],
  ['une expérience', 'experience', '🛠️'],
  ['une compétence', 'a skill', '🧠'],
  ['un salaire', 'a salary', '💶'],
  ['un contrat', 'a contract', '🖊️'],
  ['un employeur', 'an employer', '🏢'],
  ['un recruteur', 'a recruiter', '🕵️'],
  ['postuler', 'to apply', '📤'],
  ['embaucher', 'to hire', '🧑‍🔧'],
]);

const letters = vocabList(U, 'Thanking and writing formally', [
  ['Madame, Monsieur,', 'Dear Sir or Madam,', '👋'],
  ['Je vous écris pour…', 'I am writing to…', '✍️'],
  ['Suite à votre annonce…', 'Following your advertisement…', '📰'],
  ['Je vous remercie de votre réponse.', 'Thank you for your reply.', '🙏'],
  ['Je tiens à vous remercier.', 'I would like to thank you.', '💐'],
  ['Merci infiniment !', 'Thank you so much!', '🤗'],
  ['Je reste à votre disposition.', 'I remain at your disposal.', '📞'],
  ['Je vous prie de m’excuser.', 'Please excuse me.', '🙇'],
  ['Veuillez agréer mes salutations distinguées.', 'Yours faithfully.', '🖋️'],
  ['Cordialement,', 'Kind regards,', '🤝'],
  ['Pourriez-vous me confirmer la date ?', 'Could you confirm the date?', '📅'],
  ['Avec mes remerciements,', 'With my thanks,', '🌟'],
]);

const vocab = [...studies, ...work, ...letters];

const meaningQuiz = byDe(
  vocab,
  'une formation',
  'une licence',
  'une bourse',
  'une matière',
  'une candidature',
  'un entretien',
  'une compétence',
  'embaucher',
);

/** [direct speech, bucket, English] for the reported-speech sort */
const SPEECH: [string, 'statement' | 'question' | 'command', string][] = [
  ['Je travaille à Lyon.', 'statement', 'I work in Lyon.'],
  ['Tu travailles à Lyon ?', 'question', 'Do you work in Lyon?'],
  ['Travaille bien !', 'command', 'Work well!'],
  ['Nous cherchons un stage.', 'statement', 'We are looking for an internship.'],
  ['Vous avez un diplôme ?', 'question', 'Do you have a degree?'],
  ['Postule maintenant !', 'command', 'Apply now!'],
  ['Elle réussit toujours ses examens.', 'statement', 'She always passes her exams.'],
  ['Est-ce que tu veux un café ?', 'question', 'Do you want a coffee?'],
  ['Envoyez votre CV !', 'command', 'Send your CV!'],
];

export const parcours: UnitContent = {
  unit: unitFr({
    id: U,
    order: 5,
    title: 'De jolis parcours',
    subtitle:
      'Talk about your studies and plans, report what others said and write a formal message',
    emoji: '🎓',
    goals: [
      'Talk about studies, training and a career path',
      'Emphasise what matters: “C’est moi qui…”, “Ce que je cherche…”',
      'Report what someone said and thank someone formally',
    ],
    grammar: [
      'Cleft sentences: c’est … qui / que, ce qui, ce que',
      'Reported speech in the present',
      'The pronouns y and en',
    ],
    vocabFields: ['Studies and training', 'Work and applications', 'Thanking and writing formally'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-studies',
      'flashcards',
      {
        title: 'Studies and training',
        description: 'Degrees, courses and internships.',
        tags: ['vocabulary', 'school-education', 'university-study'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(studies),
    ),

    activity(
      U,
      'flash-work',
      'flashcards',
      {
        title: 'Work and applications',
        description: 'Jobs, applications and interviews.',
        tags: ['vocabulary', 'job-search', 'cv-career'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(work),
    ),

    activity(
      U,
      'quiz-meaning',
      'quiz',
      {
        title: 'What does it mean?',
        description: 'Read the word and pick its meaning.',
        tags: ['vocabulary', 'cv-career'],
        difficulty: 1,
        estMinutes: 3,
      },
      quizDeEn(meaningQuiz, [...studies, ...work], 4),
    ),

    activity(
      U,
      'listen-career',
      'listen',
      {
        title: 'Listen and pick',
        description: 'Listen to the word and pick its meaning.',
        tags: ['listening', 'school-education', 'job-search'],
        difficulty: 2,
        estMinutes: 3,
      },
      listen(
        byDe(
          vocab,
          'une mention',
          'un stagiaire',
          'une inscription',
          'le chômage',
          'une offre d’emploi',
          'un salaire',
          'un contrat',
          'postuler',
        ),
        [...studies, ...work],
      ),
    ),

    activity(
      U,
      'spell-career',
      'spell',
      {
        title: 'Spell the career words',
        description: 'Unscramble, type and write what you hear. Accents are optional here.',
        tags: ['spelling', 'cv-career'],
        difficulty: 2,
        estMinutes: 3,
      },
      {
        items: [
          {
            id: 'sp-diplome',
            mode: 'unscramble',
            answer: 'diplôme',
            hint: 'degree',
            emoji: '📜',
            speak: 'un diplôme',
          },
          {
            id: 'sp-entretien',
            mode: 'unscramble',
            answer: 'entretien',
            hint: 'interview',
            emoji: '🤝',
            speak: 'un entretien',
          },
          {
            id: 'sp-candidature',
            mode: 'type',
            answer: 'candidature',
            hint: 'application',
            emoji: '📨',
            speak: 'une candidature',
          },
          {
            id: 'sp-competence',
            mode: 'type',
            answer: 'compétence',
            hint: 'skill',
            emoji: '🧠',
            speak: 'une compétence',
          },
          {
            id: 'sp-employeur',
            mode: 'dictation',
            answer: 'employeur',
            hint: 'Type what you hear (an employer)',
            emoji: '🏢',
            speak: 'un employeur',
          },
        ],
      },
    ),

    activity(
      U,
      'gap-cleft',
      'gapfill',
      {
        title: 'Emphasise with c’est … qui / que',
        description: 'Pick qui, que, dont or où to complete the emphatic sentence.',
        tags: ['grammar', 'fr-a22-cleft', 'cv-career'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-cleft',
      },
      {
        items: [
          gap(
            'c1',
            'C’est Marie ___ a trouvé ce stage.',
            'qui',
            ['que', 'dont', 'où'],
            'It is Marie who found this internship.',
            'Marie is the subject of a trouvé: c’est … qui.',
          ),
          gap(
            'c2',
            'C’est ce métier ___ je veux faire.',
            'que',
            ['qui', 'dont', 'où'],
            'This is the job I want to do.',
            'Ce métier is the object of je veux faire: c’est … que.',
          ),
          gap(
            'c3',
            'C’est moi ___ ai écrit la lettre.',
            'qui',
            ['que', 'dont', 'où'],
            'I am the one who wrote the letter.',
            'Moi is the subject: c’est moi qui (the verb stays in the je form: ai).',
          ),
          gap(
            'c4',
            'Ce ___ m’intéresse, c’est la médecine.',
            'qui',
            ['que', 'quoi', 'dont'],
            'What interests me is medicine.',
            'Ce qui replaces the subject.',
          ),
          gap(
            'c5',
            'Ce ___ je cherche, c’est un emploi à temps partiel.',
            'que',
            ['qui', 'quoi', 'dont'],
            'What I am looking for is a part-time job.',
            'Ce que replaces the object.',
          ),
          gap(
            'c6',
            'C’est à Lyon ___ j’ai fait mes études.',
            'que',
            ['qui', 'où', 'dont'],
            'It was in Lyon that I studied.',
            'To stress a place or a time use c’est … que.',
          ),
          gap(
            'c7',
            'C’est grâce à mes collègues ___ j’ai réussi.',
            'que',
            ['qui', 'dont', 'où'],
            'It is thanks to my colleagues that I succeeded.',
            'To stress a complement use c’est … que.',
          ),
          gap(
            'c8',
            'Ce ___ j’ai besoin, c’est d’un stage.',
            'dont',
            ['que', 'qui', 'quoi'],
            'What I need is an internship.',
            'Avoir besoin de → ce dont j’ai besoin.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sort-speech',
      'sortit',
      {
        title: 'Say, ask or order?',
        description: 'How do you report each sentence: dit que, demande si or dit de?',
        tags: ['grammar', 'fr-a22-reported-speech', 'cv-career'],
        difficulty: 2,
        estMinutes: 3,
        lesson: 'fr-a22-reported-speech',
      },
      {
        instruction: 'How would you report each sentence?',
        buckets: [
          { id: 'statement', label: 'dit que …', emoji: '💬' },
          { id: 'question', label: 'demande si …', emoji: '❓' },
          { id: 'command', label: 'dit de + infinitive', emoji: '☝️' },
        ],
        items: SPEECH.map(([text, bucket, translation], i) => ({
          id: `s${i}`,
          text,
          bucket,
          speak: text,
          translation,
        })),
      },
    ),

    activity(
      U,
      'gap-reported',
      'gapfill',
      {
        title: 'Report what they said',
        description: 'Turn direct speech into reported speech.',
        tags: ['grammar', 'fr-a22-reported-speech', 'cv-career'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-reported-speech',
      },
      {
        items: [
          gap(
            'r1',
            'Léa dit : « Je cherche un stage. » → Léa dit qu’elle ___ un stage.',
            'cherche',
            ['cherchait', 'chercher', 'cherchera'],
            'Léa says she is looking for an internship.',
            'The reporting verb is in the present, so the tense does not change.',
          ),
          gap(
            'r2',
            'Paul dit : « Je suis étudiant. » → Il dit qu’___ est étudiant.',
            'il',
            ['je', 'elle', 'ils'],
            'Paul says he is a student.',
            'Je becomes il when you report what Paul says.',
          ),
          gap(
            'r3',
            'Elle demande : « Tu as un diplôme ? » → Elle me demande ___ j’ai un diplôme.',
            'si',
            ['que', 'quand', 'ce que'],
            'She asks me if I have a degree.',
            'A yes / no question is reported with si.',
          ),
          gap(
            'r4',
            'Il demande : « Où travaillez-vous ? » → Il nous demande où nous ___.',
            'travaillons',
            ['travaillez', 'travaillent', 'travaillais'],
            'He asks us where we work.',
            'Vous becomes nous, and there is no inversion in reported speech.',
          ),
          gap(
            'r5',
            'Elle demande : « Qu’est-ce que tu cherches ? » → Elle me demande ___ je cherche.',
            'ce que',
            ['qu’est-ce que', 'ce qui', 'quoi'],
            'She asks me what I am looking for.',
            'Qu’est-ce que becomes ce que in reported speech.',
          ),
          gap(
            'r6',
            'Le professeur dit : « Travaillez ! » → Il nous dit ___ travailler.',
            'de',
            ['que', 'si', 'à'],
            'The teacher tells us to work.',
            'A command becomes dire de + infinitive.',
          ),
          gap(
            'r7',
            'Mon père dit : « Ne pars pas trop tard ! » → Mon père me dit de ne pas ___ trop tard.',
            'partir',
            ['pars', 'partez', 'parti'],
            'My father tells me not to leave too late.',
            'After de, the infinitive: ne pas partir.',
          ),
          gap(
            'r8',
            'Ils disent : « Nous avons un entretien demain. » → Ils disent ___ ont un entretien demain.',
            'qu’ils',
            ['que nous', 'que vous', 'que je'],
            'They say they have an interview tomorrow.',
            'Nous becomes ils when you report what they said.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-y',
      'gapfill',
      {
        title: 'Y or en?',
        description: 'Replace the place or the thing with the right pronoun.',
        tags: ['grammar', 'fr-a22-pronoun-y', 'school-education'],
        difficulty: 3,
        estMinutes: 4,
        lesson: 'fr-a22-pronoun-y',
      },
      {
        items: [
          gap(
            'y1',
            '— Tu vas à la fac ? — Oui, j’___ vais tous les jours.',
            'y',
            ['en', 'le', 'lui'],
            '“Do you go to university?” “Yes, I go there every day.”',
            'Y replaces à + a place.',
          ),
          gap(
            'y2',
            '— Tu penses à ton examen ? — Oui, j’___ pense souvent.',
            'y',
            ['en', 'le', 'lui'],
            '“Are you thinking about your exam?” “Yes, I often think about it.”',
            'Penser à + a thing: y.',
          ),
          gap(
            'y3',
            '— Elle habite à Paris ? — Oui, elle ___ habite depuis 2020.',
            'y',
            ['en', 'l’', 'lui'],
            '“Does she live in Paris?” “Yes, she has lived there since 2020.”',
            'Y replaces à / en / dans / chez + a place.',
          ),
          gap(
            'y4',
            '— Vous êtes allés au bureau ? — Oui, nous ___ sommes allés ce matin.',
            'y',
            ['en', 'le', 'lui'],
            '“Did you go to the office?” “Yes, we went there this morning.”',
            'In the passé composé, y stands before the auxiliary.',
          ),
          gap(
            'y5',
            '— Tu t’intéresses à la chimie ? — Oui, je m’___ intéresse beaucoup.',
            'y',
            ['en', 'le', 'lui'],
            '“Are you interested in chemistry?” “Yes, I am very interested in it.”',
            'S’intéresser à + a thing: y.',
          ),
          gap(
            'y6',
            '— Il répond à cette offre ? — Oui, il ___ répond aujourd’hui.',
            'y',
            ['lui', 'l’', 'en'],
            '“Is he answering this offer?” “Yes, he is answering it today.”',
            'À + a thing is replaced by y. Lui is used for a person.',
          ),
          gap(
            'y7',
            '— Tu reviens de la fac ? — Oui, j’___ reviens à l’instant.',
            'en',
            ['y', 'l’', 'lui'],
            '“Are you coming back from university?” “Yes, I have just come back from there.”',
            'En replaces de + a place: revenir de → en.',
          ),
          gap(
            'y8',
            '— Il parle de son stage ? — Oui, il ___ parle tout le temps.',
            'en',
            ['y', 'le', 'lui'],
            '“Does he talk about his internship?” “Yes, he talks about it all the time.”',
            'Parler de + a thing: en.',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      {
        title: 'Build a sentence',
        description: 'Put the words in the right order.',
        tags: ['grammar', 'cv-career'],
        difficulty: 2,
        estMinutes: 4,
      },
      {
        items: [
          {
            id: 's1',
            translation: 'She is the one who found this internship.',
            words: ['C’est', 'elle', 'qui', 'a', 'trouvé', 'ce', 'stage.'],
            extra: ['que'],
            lesson: 'fr-a22-cleft',
          },
          {
            id: 's2',
            translation: 'What I am looking for is a job.',
            words: ['Ce', 'que', 'je', 'cherche,', 'c’est', 'un', 'emploi.'],
            extra: ['qui'],
            lesson: 'fr-a22-cleft',
          },
          {
            id: 's3',
            translation: 'He says that he is looking for a position.',
            words: ['Il', 'dit', 'qu’il', 'cherche', 'un', 'poste.'],
            extra: ['si'],
            lesson: 'fr-a22-reported-speech',
          },
          {
            id: 's4',
            translation: 'She asks me if I have a degree.',
            words: ['Elle', 'me', 'demande', 'si', 'j’ai', 'un', 'diplôme.'],
            extra: ['que'],
            lesson: 'fr-a22-reported-speech',
          },
          {
            id: 's5',
            translation: 'I often think about it.',
            words: ['J’y', 'pense', 'souvent.'],
            extra: ['J’en'],
            lesson: 'fr-a22-pronoun-y',
          },
          {
            id: 's6',
            translation: 'The teacher tells us to work.',
            words: ['Le', 'professeur', 'nous', 'dit', 'de', 'travailler.'],
            extra: ['que'],
            lesson: 'fr-a22-reported-speech',
          },
        ],
      },
    ),

    activity(
      U,
      'flash-letters',
      'flashcards',
      {
        title: 'Thanking and writing formally',
        description: 'Phrases for a formal message and for saying thank you.',
        tags: ['vocabulary', 'communication', 'cv-career'],
        difficulty: 1,
        estMinutes: 3,
      },
      flashcards(letters),
    ),

    activity(
      U,
      'dialogues',
      'dialogue',
      {
        title: 'An interview, studies, a message',
        description:
          'Answer a recruiter, talk about your studies and report what the director said.',
        tags: ['communication', 'cv-career', 'school-education'],
        difficulty: 2,
        estMinutes: 5,
      },
      {
        scenes: [
          {
            id: 'interview',
            title: 'A job interview',
            emoji: '🤝',
            setting: 'You apply for a job. You say vous to the recruiter.',
            turns: [
              npc(
                'La recruteuse',
                'Bonjour. Pourquoi avez-vous postulé chez nous ?',
                'Hello. Why did you apply to us?',
              ),
              you(
                'C’est votre entreprise que je trouve la plus intéressante.',
                [
                  'C’est votre entreprise qui je trouve la plus intéressante.',
                  'Votre entreprise is the object of je trouve: c’est … que.',
                ],
                [
                  'C’est votre entreprise que je la trouve la plus intéressante.',
                  'Que already stands for the object; do not repeat it with la.',
                ],
              ),
              npc(
                'La recruteuse',
                'Vous avez déjà une expérience dans ce domaine ?',
                'Do you already have experience in this field?',
              ),
              you(
                'Oui, j’ai fait un stage chez Renault. J’y suis resté six mois.',
                [
                  'Oui, j’ai fait un stage chez Renault. J’en suis resté six mois.',
                  'Y replaces chez + a place; en would replace de + a noun.',
                ],
                [
                  'Oui, j’ai fait un stage chez Renault. Je l’ai resté six mois.',
                  'Rester is not followed by a direct object. The place is replaced by y.',
                ],
              ),
              npc(
                'La recruteuse',
                'Pouvez-vous commencer le premier mars ?',
                'Can you start on 1 March?',
              ),
              you(
                'Oui, bien sûr. Je vous remercie de votre confiance.',
                [
                  'Oui, bien sûr. Je te remercie de ta confiance.',
                  'Use vous with a recruiter, not tu.',
                ],
                [
                  'Oui, bien sûr. Je vous remercie votre confiance.',
                  'Remercier quelqu’un de quelque chose: you need de.',
                ],
              ),
            ],
          },
          {
            id: 'studies',
            title: 'Talking about studies',
            emoji: '📚',
            setting: 'You chat with Hugo, a friend from university. You say tu to each other.',
            turns: [
              npc('Hugo', 'Tu fais quoi comme études ?', 'What are you studying?'),
              you(
                'Je fais de la biologie. C’est ça qui me passionne.',
                [
                  'Je fais de la biologie. C’est ça que me passionne.',
                  'Ça is the subject of passionne, so use qui.',
                ],
                [
                  'Je fais de la biologie. C’est ça qui me passionnent.',
                  'The verb agrees with ça (singular): passionne.',
                ],
              ),
              npc('Hugo', 'Tu vas souvent à la bibliothèque ?', 'Do you often go to the library?'),
              you(
                'Oui, j’y vais tous les jours.',
                [
                  'Oui, j’en vais tous les jours.',
                  'For a place with à, use y. En replaces de + noun.',
                ],
                ['Oui, je la vais tous les jours.', 'Aller à + a place is replaced by y.'],
              ),
              npc(
                'Hugo',
                'Et ton prof, il dit quoi de l’examen ?',
                'And what does your teacher say about the exam?',
              ),
              you(
                'Il dit que l’examen est difficile, mais qu’on peut le réussir.',
                [
                  'Il dit que est l’examen difficile, mais qu’on peut le réussir.',
                  'Reported speech keeps the normal word order.',
                ],
                [
                  'Il dit si l’examen est difficile, mais qu’on peut le réussir.',
                  'Si is for questions. A statement is reported with que.',
                ],
              ),
            ],
          },
          {
            id: 'message',
            title: 'What the director said',
            emoji: '🗣️',
            setting: 'You talk to your colleague Sophie. You say tu to each other.',
            turns: [
              npc(
                'Sophie',
                'J’ai parlé à la directrice. Elle dit que tu commences lundi.',
                'I spoke to the director. She says you start on Monday.',
              ),
              you(
                'Vraiment ? Est-ce qu’elle demande si j’ai un CV à jour ?',
                [
                  'Vraiment ? Est-ce qu’elle demande que j’ai un CV à jour ?',
                  'A yes / no question is reported with si.',
                ],
                [
                  'Vraiment ? Est-ce qu’elle demande si ai-je un CV à jour ?',
                  'There is no inversion in a reported question.',
                ],
              ),
              npc(
                'Sophie',
                'Oui, et elle te dit d’apporter ton diplôme.',
                'Yes, and she tells you to bring your degree.',
              ),
              you(
                'D’accord, c’est moi qui l’apporte demain.',
                [
                  'D’accord, c’est moi que l’apporte demain.',
                  'Moi is the subject of apporte: c’est moi qui.',
                ],
                [
                  'D’accord, c’est moi qui l’apportes demain.',
                  'The verb agrees with moi (je): j’apporte.',
                ],
              ),
              npc(
                'Sophie',
                'Parfait. Je reste à ta disposition si tu as besoin de moi.',
                'Perfect. I am here if you need me.',
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
      {
        title: 'Career blitz',
        description: 'True or false? Beat the clock!',
        tags: ['vocabulary', 'cv-career', 'fr-a22-cleft'],
        difficulty: 2,
        estMinutes: 2,
      },
      {
        seconds: 45,
        statements: [
          { id: 'b1', text: '“C’est Paul qui a gagné” stresses the subject.', isTrue: true },
          {
            id: 'b2',
            text: '“C’est ce poste qui je veux” is correct.',
            isTrue: false,
            explanation: 'Ce poste is the object: c’est ce poste que je veux.',
          },
          { id: 'b3', text: '“Ce qui m’intéresse” stands for the subject.', isTrue: true },
          {
            id: 'b4',
            text: 'A yes / no question is reported with “que”.',
            isTrue: false,
            explanation: 'It is reported with si: elle demande si j’ai un CV.',
          },
          { id: 'b5', text: '“Il dit de travailler” reports a command.', isTrue: true },
          {
            id: 'b6',
            text: 'In reported speech “tu as” always stays “tu as”.',
            isTrue: false,
            explanation:
              'The pronoun changes with the speaker: Elle dit qu’elle a… / Elle me demande si j’ai…',
          },
          { id: 'b7', text: '“J’y vais” replaces “je vais à la fac”.', isTrue: true },
          {
            id: 'b8',
            text: '“Il en vient” replaces “il vient à la gare”.',
            isTrue: false,
            explanation: 'En replaces de + place. For à + place use y: il y va.',
          },
          { id: 'b9', text: '“Un stage” is an internship.', isTrue: true },
          {
            id: 'b10',
            text: '“Une bourse” is a handbag.',
            isTrue: false,
            explanation: 'Une bourse is a grant. A handbag is un sac.',
          },
          { id: 'b11', text: '“Postuler” means to apply.', isTrue: true },
          { id: 'b12', text: '“Cordialement” ends a formal message.', isTrue: true },
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      {
        title: 'Unit challenge',
        description: 'Show what you know: a mixed final quiz.',
        tags: ['vocabulary', 'grammar', 'cv-career'],
        difficulty: 3,
        estMinutes: 4,
      },
      {
        questions: [
          mc('c1', 'Complete: “C’est Anna ___ a eu le poste.”', 'qui', ['que', 'dont', 'où'], {
            lesson: 'fr-a22-cleft',
          }),
          mc(
            'c2',
            'Complete: “Ce ___ je veux, c’est un contrat.”',
            'que',
            ['qui', 'quoi', 'dont'],
            {
              lesson: 'fr-a22-cleft',
            },
          ),
          mc(
            'c3',
            'Report: “Tu as un CV ?” → Elle me demande …',
            'si j’ai un CV',
            ['que j’ai un CV', 'si as-tu un CV', 'ce que j’ai un CV'],
            {
              lesson: 'fr-a22-reported-speech',
            },
          ),
          mc(
            'c4',
            'Report: “Je suis prêt.” → Il dit …',
            'qu’il est prêt',
            ['que je suis prêt', 'si il est prêt', 'qu’il était prêt'],
            {
              lesson: 'fr-a22-reported-speech',
            },
          ),
          mc(
            'c5',
            'Complete: “— Tu vas à Lyon ? — Oui, j’___ vais demain.”',
            'y',
            ['en', 'la', 'lui'],
            {
              lesson: 'fr-a22-pronoun-y',
            },
          ),
          mc(
            'c6',
            'Complete: “— Tu as besoin de ce livre ? — Oui, j’___ ai besoin.”',
            'en',
            ['y', 'le', 'lui'],
            {
              lesson: 'fr-a22-pronoun-y',
            },
          ),
          mc('c7', '“Une candidature” is …', 'an application', [
            'an interview',
            'a salary',
            'a grant',
          ]),
          mc(
            'c8',
            'How do you end a formal letter?',
            'Veuillez agréer mes salutations distinguées.',
            ['Salut, à plus !', 'Je vous écris pour…', 'Suite à votre annonce…'],
          ),
        ],
      },
    ),
  ],
};
