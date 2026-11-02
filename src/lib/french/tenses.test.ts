import {
  presentFr,
  futurSimple,
  imparfait,
  participle,
  passeCompose,
  passeComposeReflexive,
} from './tenses';

const row = (f: Record<string, string>) => Object.values(f);

describe('participle', () => {
  it.each([
    ['parler', 'parlé'],
    ['manger', 'mangé'],
    ['finir', 'fini'],
    ['vendre', 'vendu'],
    ['faire', 'fait'],
    ['prendre', 'pris'],
    ['naître', 'né'],
    ['écrire', 'écrit'],
    ['vivre', 'vécu'],
  ])('%s → %s', (verb, expected) => {
    expect(participle(verb)).toBe(expected);
  });

  it('refuses a verb it has no rule for', () => {
    expect(() => participle('xyz')).toThrow();
  });
});

describe('passeCompose', () => {
  it('uses avoir for most verbs', () => {
    expect(row(passeCompose('parler'))).toEqual([
      'ai parlé',
      'as parlé',
      'a parlé',
      'avons parlé',
      'avez parlé',
      'ont parlé',
    ]);
  });

  it('uses être, with agreement, for the movement verbs', () => {
    expect(row(passeCompose('aller'))).toEqual([
      'suis allé',
      'es allé',
      'est allé',
      'sommes allés',
      'êtes allés',
      'sont allés',
    ]);
    expect(passeCompose('partir', { feminine: true })['il/elle/on']).toBe('est partie');
    expect(passeCompose('naître', { feminine: true })['ils/elles']).toBe('sont nées');
  });

  it('builds the pronominal passé composé with elision', () => {
    expect(row(passeComposeReflexive('marier'))).toEqual([
      'me suis marié',
      't’es marié',
      's’est marié',
      'nous sommes mariés',
      'vous êtes mariés',
      'se sont mariés',
    ]);
    expect(passeComposeReflexive('installer', { feminine: true })['tu']).toBe('t’es installée');
  });
});

describe('imparfait', () => {
  it('takes the stem of the nous form', () => {
    expect(row(imparfait('finir'))).toEqual([
      'finissais',
      'finissais',
      'finissait',
      'finissions',
      'finissiez',
      'finissaient',
    ]);
    expect(imparfait('faire').nous).toBe('faisions');
    expect(imparfait('prendre').vous).toBe('preniez');
  });

  it('keeps the sound of g and c', () => {
    expect(imparfait('manger')['je']).toBe('mangeais');
    expect(imparfait('manger').nous).toBe('mangions');
    expect(imparfait('commencer')['je']).toBe('commençais');
    expect(imparfait('commencer').nous).toBe('commencions');
  });

  it('treats être as the exception', () => {
    expect(row(imparfait('être'))).toEqual([
      'étais',
      'étais',
      'était',
      'étions',
      'étiez',
      'étaient',
    ]);
  });
});

describe('futurSimple', () => {
  it('adds the endings to the infinitive', () => {
    expect(row(futurSimple('parler'))).toEqual([
      'parlerai',
      'parleras',
      'parlera',
      'parlerons',
      'parlerez',
      'parleront',
    ]);
    expect(futurSimple('prendre')['je']).toBe('prendrai');
    expect(futurSimple('finir').nous).toBe('finirons');
  });

  it('knows the irregular stems and spelling changes', () => {
    expect(futurSimple('être')['je']).toBe('serai');
    expect(futurSimple('aller').nous).toBe('irons');
    expect(futurSimple('venir')['ils/elles']).toBe('viendront');
    expect(futurSimple('acheter')['tu']).toBe('achèteras');
    expect(futurSimple('payer')['je']).toBe('paierai');
  });
});

describe('presentFr', () => {
  it('knows devoir and falls back to the regular conjugator', () => {
    expect(row(presentFr('devoir'))).toEqual([
      'dois',
      'dois',
      'doit',
      'devons',
      'devez',
      'doivent',
    ]);
    expect(presentFr('pouvoir')['je']).toBe('peux');
    expect(presentFr('aimer').nous).toBe('aimons');
  });
});
