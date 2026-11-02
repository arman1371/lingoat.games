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
];
