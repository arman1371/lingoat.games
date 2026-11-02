import { compare, examples, mistake, p, section, table, tip } from './build';
import type { GrammarTopic } from './schema';
import { FR_SOURCES as S } from './sources-fr';

const LEVEL = 'fr-b2-2';

/** French B2.2, units 2 to 6: health, solidarity, justice, culture, science. */
export const FR22B_TOPICS_B: GrammarTopic[] = [
  {
    id: 'fr-b22-subj-or-inf',
    title: 'Subjunctive or infinitive?',
    tagline: 'Il faut que tu dormes · Je veux dormir',
    level: LEVEL,
    summary:
      'Will, necessity, feeling and doubt are followed by the subjunctive. When both verbs have the same subject French prefers the infinitive. Belief and certainty take the indicative.',
    sections: [
      section(
        'when',
        'When the subjunctive is needed',
        p(
          'The subjunctive follows expressions of **will** (*vouloir que*, *tenir à ce que*), **necessity** (*il faut que*, *il est essentiel que*), **feeling** (*être content que*, *regretter que*, *craindre que*) and **doubt** (*douter que*, *il se peut que*). It is built on the *ils* form of the present: *ils prennent* → *que je prenne*, but *nous* and *vous* keep the imparfait stem: *que nous prenions*.',
        ),
        table(
          'Irregular subjunctives that must be learned.',
          ['Verb', 'que je / tu / il', 'que nous / vous', 'que ils'],
          [
            ['être', 'sois / sois / soit', 'soyons / soyez', 'soient'],
            ['avoir', 'aie / aies / ait', 'ayons / ayez', 'aient'],
            ['aller', 'aille / ailles / aille', 'allions / alliez', 'aillent'],
            ['faire', 'fasse / fasses / fasse', 'fassions / fassiez', 'fassent'],
            ['pouvoir', 'puisse / puisses / puisse', 'puissions / puissiez', 'puissent'],
          ],
        ),
        examples(
          ['Il faut que tu boives plus d’eau.', 'You have to drink more water.'],
          ['Je doute qu’elle ait le courage.', 'I doubt she has the courage.'],
        ),
      ),
      section(
        'same-subject',
        'Same subject: the infinitive',
        p(
          'When the subject of both verbs is the same, drop **que** and use the **infinitive**. If the subjects differ, the subjunctive is needed. Impersonal expressions without a named subject also take the infinitive: *il vaut mieux prévenir*.',
        ),
        compare(
          {
            title: 'Same subject',
            question: 'Je veux + infinitive',
            example: 'Je veux me coucher plus tôt.',
          },
          {
            title: 'Two subjects',
            question: 'Je veux que + subjunctive',
            example: 'Je veux que tu te couches plus tôt.',
          },
          {
            title: 'Belief or certainty',
            question: 'indicative',
            example: 'Je pense qu’il est malade.',
          },
        ),
        tip(
          'Negation changes the mood',
          'Je pense qu’il est malade (indicative). Je ne pense pas qu’il soit malade (subjunctive): doubt appears once the belief is denied or questioned.',
        ),
        mistake(
          'Watch out',
          '✗ Il faut que tu fais attention.  ✓ Il faut que tu fasses attention.',
          '✗ Je veux que je parte.  ✓ Je veux partir.',
        ),
      ),
    ],
    related: ['fr-b22-ne-expletif', 'fr-b22-reported-speech'],
    sources: [S.subjunctive],
  },
  {
    id: 'fr-b22-ne-expletif',
    title: 'The ne explétif',
    tagline: 'Je crains qu’il ne pleuve',
    level: LEVEL,
    summary:
      'Careful French adds a ne that carries no negation after verbs of fear, avant que, à moins que, de peur que and comparatives. It is optional and mostly written; a real negation still needs pas.',
    sections: [
      section(
        'where',
        'Where it appears',
        table(
          'Expressions that can take a ne without negative meaning.',
          ['After', 'Example', 'Meaning'],
          [
            [
              'craindre que, avoir peur que',
              'Je crains qu’il ne pleuve.',
              'I am afraid it will rain.',
            ],
            ['avant que', 'Partons avant qu’il ne pleuve.', 'Let us leave before it rains.'],
            [
              'à moins que',
              'Venez, à moins que vous ne soyez occupé.',
              'Come, unless you are busy.',
            ],
            [
              'de peur que',
              'Il parle bas de peur qu’on ne l’entende.',
              'He speaks softly for fear of being heard.',
            ],
            [
              'plus … que',
              'Il court plus vite que je ne pensais.',
              'He runs faster than I thought.',
            ],
          ],
        ),
        p(
          'The verb after these expressions is in the **subjunctive** (except after a comparative). The **ne** is dropped in speech and is never required.',
        ),
      ),
      section(
        'real',
        'Do not confuse it with a real negation',
        p(
          'A real negation uses **ne … pas** (or *jamais*, *rien* …). Compare *Je crains qu’il ne vienne* (I fear he will come) with *Je crains qu’il ne vienne pas* (I fear he will not come).',
        ),
        compare(
          {
            title: 'ne explétif',
            question: 'no negative meaning',
            example: 'Je crains qu’elle ne soit malade.',
          },
          {
            title: 'real negation',
            question: 'ne … pas',
            example: 'Je crains qu’elle ne soit pas malade.',
          },
        ),
        mistake(
          'Watch out',
          '✗ I fear she is ill → Je crains qu’elle ne soit pas malade.',
          '✓ I fear she is ill → Je crains qu’elle soit malade / qu’elle ne soit malade.',
        ),
      ),
    ],
    related: ['fr-b22-subj-or-inf'],
    sources: [S.subjunctive],
  },
  {
    id: 'fr-b22-passive',
    title: 'The passive voice',
    tagline: 'Les repas sont servis par les bénévoles',
    level: LEVEL,
    summary:
      'The passive turns the object of an active sentence into the subject: être in the tense of the active verb plus a past participle that agrees with the subject. The agent is introduced by par, or by de after verbs of state and feeling.',
    sections: [
      section(
        'form',
        'Forming the passive',
        p(
          'Take the **object** of the active sentence as the new subject, put **être** in the same tense as the active verb, add the **past participle** (agreeing with the subject), and introduce the doer with **par**.',
        ),
        table(
          'The same sentence in several tenses.',
          ['Tense', 'Active', 'Passive'],
          [
            [
              'présent',
              'L’association aide les familles.',
              'Les familles sont aidées par l’association.',
            ],
            [
              'passé composé',
              'Le maire a remercié les bénévoles.',
              'Les bénévoles ont été remerciés par le maire.',
            ],
            ['futur', 'On distribuera les dons demain.', 'Les dons seront distribués demain.'],
            [
              'subjonctif',
              'Il faut que l’on respecte les droits.',
              'Il faut que les droits soient respectés.',
            ],
          ],
        ),
        tip(
          'Active or passive?',
          'Only verbs with a direct object can be made passive. Elle est partie is not a passive: partir takes être as an auxiliary in the passé composé.',
        ),
      ),
      section(
        'agent',
        'Par or de?',
        p(
          'Use **par** when someone or something acts (*organisé par des bénévoles*). **De** appears with states, feelings and descriptions (*entouré de jardins*, *aimé de tous*, *couvert de neige*). When the doer is unknown or unimportant the agent is simply left out: *Les repas sont servis à 19 h.*',
        ),
        compare(
          {
            title: 'par',
            question: 'an agent acts',
            example: 'La collecte est organisée par les bénévoles.',
          },
          {
            title: 'de',
            question: 'a state or a feeling',
            example: 'La salle était remplie de bénévoles.',
          },
        ),
        mistake(
          'Watch out',
          '✗ Les familles sont aidés.  ✓ Les familles sont aidées.',
          '✗ Le toit est couvert par neige.  ✓ Le toit est couvert de neige.',
        ),
      ),
    ],
    related: ['fr-b22-se-faire', 'fr-b22-subj-or-inf'],
    sources: [S.passive],
  },
  {
    id: 'fr-b22-se-faire',
    title: 'Se faire + infinitive',
    tagline: 'Il s’est fait voler son sac',
    level: LEVEL,
    summary:
      'Se faire + infinitive reports something that happens to the subject, often something unpleasant. It is a lively alternative to the passive. Things can also be subjects of a pronominal passive: ce vin se boit frais.',
    sections: [
      section(
        'sefaire',
        'Something happens to you',
        p(
          '**Se faire** + **infinitive** is very common in speech: *Il s’est fait agresser*, *Elle s’est fait licencier*. The verb after *faire* is always an **infinitive** and the participle *fait* stays **invariable**, even with a feminine or plural subject.',
        ),
        examples(
          ['Il s’est fait voler son téléphone.', 'He had his phone stolen.'],
          ['Elles se sont fait aider par une voisine.', 'They got help from a neighbour.'],
          ['Je me suis fait renvoyer du magasin.', 'I got thrown out of the shop.'],
        ),
        mistake(
          'Watch out',
          '✗ Il s’est fait volé son sac.  ✓ Il s’est fait voler son sac.',
          '✗ Elle s’est faite licencier.  ✓ Elle s’est fait licencier.',
        ),
      ),
      section(
        'pronominal-passive',
        'The pronominal passive',
        p(
          'A **thing** can be the subject of a **reflexive-looking verb** that has a passive meaning, with no agent: *Le riz se vend en vrac*, *Cela ne se dit pas*, *Ce vin se boit frais*. It describes how things are normally done.',
        ),
        compare(
          {
            title: 'être + participle',
            question: 'a specific event',
            example: 'Le riz a été vendu hier.',
          },
          { title: 'se + verb', question: 'a general habit', example: 'Le riz se vend en vrac.' },
        ),
      ),
    ],
    related: ['fr-b22-passive'],
    sources: [S.passive, S.pronominalVoice],
  },
  {
    id: 'fr-b22-si-clauses',
    title: 'Si clauses',
    tagline: 'Si j’avais su, je serais venu',
    level: LEVEL,
    summary:
      'French has three si-systems: real possibility (si + présent → futur), unreal present (si + imparfait → conditionnel) and unreal past (si + plus-que-parfait → conditionnel passé). Si is never followed by the conditional.',
    sections: [
      section(
        'systems',
        'The three systems',
        table(
          'Tenses on each side of the si-clause.',
          ['Meaning', 'After si', 'Main clause', 'Example'],
          [
            [
              'real, possible',
              'présent',
              'futur (or présent, impératif)',
              'Si tu portes plainte, il paiera.',
            ],
            [
              'unreal, now',
              'imparfait',
              'conditionnel présent',
              'Si j’étais juge, je ferais autrement.',
            ],
            [
              'unreal, past',
              'plus-que-parfait',
              'conditionnel passé',
              'S’il avait menti, il aurait été condamné.',
            ],
          ],
        ),
        tip(
          'Never after si',
          'The conditional and the future never follow si in a condition. Say si j’avais su, not si j’aurais su. Si can mean whether in an indirect question (Je me demande s’il viendra): there the future is allowed.',
        ),
      ),
      section(
        'forms',
        'Building the forms',
        p(
          'The **conditionnel présent** is the future stem plus the imparfait endings: *je serais*, *tu irais*, *nous pourrions*. The **plus-que-parfait** is the imparfait of *avoir* or *être* plus the participle: *j’avais su*, *elle était partie*. The **conditionnel passé** is the conditionnel of *avoir* or *être* plus the participle: *j’aurais su*, *elle serait partie*.',
        ),
        mistake(
          'Watch out',
          '✗ Si j’aurais le temps, je viendrais.  ✓ Si j’avais le temps, je viendrais.',
          '✗ Si j’avais su, je viendrais.  ✓ Si j’avais su, je serais venu.',
        ),
      ),
    ],
    related: ['fr-b22-condition'],
    sources: [S.conditionalClause, S.conditional, S.conditionalPast, S.pluperfect],
  },
  {
    id: 'fr-b22-condition',
    title: 'Conditions: à condition que, au cas où',
    tagline: 'à condition que · à moins que · au cas où · sauf si',
    level: LEVEL,
    summary:
      'Besides si, French expresses a condition with connectors that decide the mood: subjunctive after à condition que, à moins que and pourvu que, conditional after au cas où, indicative after sauf si and même si.',
    sections: [
      section(
        'connectors',
        'Connectors and moods',
        table(
          'Condition connectors.',
          ['Connector', 'Meaning', 'Mood', 'Example'],
          [
            [
              'à condition que',
              'provided that',
              'subjunctive',
              'Je signe à condition que vous lisiez le texte.',
            ],
            [
              'pourvu que',
              'as long as',
              'subjunctive',
              'Pourvu qu’il soit honnête, tout ira bien.',
            ],
            [
              'à moins que',
              'unless',
              'subjunctive (+ ne)',
              'Il paiera, à moins qu’il ne fasse appel.',
            ],
            [
              'au cas où',
              'in case',
              'conditional',
              'Prends un avocat au cas où il y aurait un procès.',
            ],
            [
              'sauf si',
              'unless, except if',
              'indicative',
              'Il gagnera, sauf si le tribunal annule tout.',
            ],
            ['même si', 'even if', 'indicative (like si)', 'Même s’il avait raison, il perdrait.'],
          ],
        ),
      ),
      section(
        'tips',
        'Choosing between them',
        compare(
          { title: 'à moins que', question: '+ subjunctive', example: 'à moins qu’il ne vienne' },
          { title: 'sauf si', question: '+ indicative', example: 'sauf s’il vient' },
          { title: 'au cas où', question: '+ conditional', example: 'au cas où il viendrait' },
        ),
        mistake(
          'Watch out',
          '✗ au cas où il ait un problème.  ✓ au cas où il aurait un problème.',
          '✗ à condition que vous lisez.  ✓ à condition que vous lisiez.',
        ),
      ),
    ],
    related: ['fr-b22-si-clauses', 'fr-b22-ne-expletif'],
    sources: [S.conditionalClause, S.subjunctive],
  },
  {
    id: 'fr-b22-superlative-subj',
    title: 'Subjunctive after superlatives',
    tagline: 'C’est le plus beau film que j’aie vu',
    level: LEVEL,
    summary:
      'A relative clause that qualifies a superlative, le seul, l’unique, le premier, le dernier or a negative antecedent (personne, rien, aucun) takes the subjunctive in careful French. A plain statement of certainty keeps the indicative.',
    sections: [
      section(
        'when',
        'When the subjunctive follows',
        table(
          'Antecedents that call for the subjunctive.',
          ['Antecedent', 'Example'],
          [
            ['le plus / le moins / le meilleur', 'C’est le meilleur film que j’aie vu.'],
            [
              'le seul, l’unique, le premier, le dernier',
              'Elle est la seule artiste qui sache me surprendre.',
            ],
            ['personne, rien, aucun, peu de', 'Il n’y a personne qui puisse la remplacer.'],
            [
              'chercher un… qui (not yet found)',
              'Elle cherche un réalisateur qui comprenne son projet.',
            ],
          ],
        ),
        p(
          'The relative clause expresses an **opinion or an evaluation**, not a fact. When the speaker simply states something certain, the **indicative** stays: *Je sais que c’est le premier film qu’il a tourné*.',
        ),
      ),
      section(
        'forms',
        'Forms to know',
        p(
          'Many of these sentences need the past subjunctive: **que j’aie vu**, **que nous ayons lu**, **qu’il ait été**. It is the subjunctive of *avoir* or *être* plus the participle. Note that the verb agrees with the antecedent: *la seule œuvre qui soit capable*.',
        ),
        mistake(
          'Watch out',
          '✗ C’est la seule qui m’aie ému.  ✓ C’est la seule qui m’ait ému.',
          '✗ Je ne connais personne qui peut le faire.  ✓ Je ne connais personne qui puisse le faire.',
        ),
      ),
    ],
    related: ['fr-b22-subj-or-inf', 'fr-b22-verb-prep'],
    sources: [S.subjunctive],
  },
  {
    id: 'fr-b22-verb-prep',
    title: 'Verbs with à / de, y and en',
    tagline: 'Je m’y intéresse · Il en parle',
    level: LEVEL,
    summary:
      'Each verb has its own construction: with à, with de, or with a direct object. The complement that follows à is replaced by y (things) and the one that follows de by en.',
    sections: [
      section(
        'prepositions',
        'Which preposition?',
        table(
          'Common verbs by construction.',
          ['With à', 'With de', 'Direct object'],
          [
            ['s’intéresser à', 'parler de', 'regarder'],
            ['assister à', 'rêver de', 'écouter'],
            ['participer à', 's’inspirer de', 'critiquer'],
            ['se consacrer à', 'dépendre de', 'apprécier'],
            ['penser à', 'se souvenir de', 'attendre'],
          ],
        ),
        mistake(
          'Watch out',
          '✗ Il rêve à devenir réalisateur.  ✓ Il rêve de devenir réalisateur.',
          '✗ J’écoute à la musique.  ✓ J’écoute la musique.',
        ),
      ),
      section(
        'pronouns',
        'Replacing the complement',
        p(
          'For things, **à + noun → y** and **de + noun → en**: *Tu penses à l’exposition ? — Oui, j’y pense.* *Tu te souviens de ce roman ? — Oui, je m’en souviens.* With people, penser à / s’intéresser à keep the stressed pronoun: *Je pense à lui.*',
        ),
        compare(
          { title: 'à + thing', question: 'y', example: 'Il s’y intéresse.' },
          { title: 'de + thing', question: 'en', example: 'Il en parle.' },
          {
            title: 'à + person (penser, s’intéresser)',
            question: 'à + stressed pronoun',
            example: 'Je pense à elle.',
          },
        ),
      ),
    ],
    related: ['fr-b22-superlative-subj'],
    sources: [S.preposition, S.personalPronoun],
  },
];
