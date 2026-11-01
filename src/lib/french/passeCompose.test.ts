import { passeComposeAvoir } from './passeCompose';

describe('passeComposeAvoir', () => {
  it('puts the present of avoir in front of the participle', () => {
    expect(passeComposeAvoir('mangé')).toEqual({
      je: 'ai mangé',
      tu: 'as mangé',
      'il/elle/on': 'a mangé',
      nous: 'avons mangé',
      vous: 'avez mangé',
      'ils/elles': 'ont mangé',
    });
  });
});
