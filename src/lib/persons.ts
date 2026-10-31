import { PRONOUNS as GERMAN_PRONOUNS } from './german/conjugation';

/** The six persons of a French verb table. Il/elle/on and ils/elles each share one form. */
export const FRENCH_PRONOUNS = ['je', 'tu', 'il/elle/on', 'nous', 'vous', 'ils/elles'] as const;
export type FrenchPronoun = (typeof FRENCH_PRONOUNS)[number];

/** Every key a conjugation table may use. A table uses exactly one language's six. */
export const ALL_PERSONS = [...GERMAN_PRONOUNS, ...FRENCH_PRONOUNS] as const;
export type Person = (typeof ALL_PERSONS)[number];

const PERSON_SETS: readonly (readonly Person[])[] = [GERMAN_PRONOUNS, FRENCH_PRONOUNS];

/** The persons a table is written with, in display order; undefined unless it holds one full set. */
export function personsOf(forms: Partial<Record<string, string>>): readonly Person[] | undefined {
  const keys = Object.keys(forms);
  return PERSON_SETS.find((set) => keys.length === set.length && set.every((p) => forms[p]));
}

const STARTS_WITH_VOWEL = /^[aeiouyàâäéèêëîïôöùûüh]/i;

/** The label of a table row: "je" becomes "j’" in front of a vowel ("j’ai"), every other person is as is. */
export function personLabel(person: Person, form: string): string {
  return person === 'je' && STARTS_WITH_VOWEL.test(form) ? 'j’' : person;
}
