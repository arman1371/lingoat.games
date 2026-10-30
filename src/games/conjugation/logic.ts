import { checkAnswer, type AnswerVerdict } from '@/lib/answer-check';
import { personFormWhy } from '@/lib/german/forms';
import { personsOf, type Person } from '@/lib/persons';

export type CellVerdicts = Partial<Record<Person, AnswerVerdict>>;
export type Forms = Partial<Record<Person, string>>;

export function gradeTable(
  forms: Forms,
  blanks: readonly Person[],
  values: Forms,
): { cells: CellVerdicts; overall: AnswerVerdict } {
  const cells: CellVerdicts = {};
  for (const p of blanks) cells[p] = checkAnswer(values[p] ?? '', forms[p] ?? '');
  const verdicts = Object.values(cells);
  const overall: AnswerVerdict = verdicts.includes('wrong')
    ? 'wrong'
    : verdicts.includes('almost')
      ? 'almost'
      : 'correct';
  return { cells, overall };
}

/** The rows of a table, in display order: the six persons of the language its forms are written in. */
export const pronounOrder = (forms: Forms): readonly Person[] => personsOf(forms) ?? [];

/** Why the first wrong cell is wrong, when the learner wrote the form of another person. */
export function conjugationWhy(
  forms: Forms,
  cells: CellVerdicts,
  values: Forms,
): string | undefined {
  const persons = pronounOrder(forms);
  for (const p of persons) {
    if (cells[p] !== 'wrong') continue;
    const why = personFormWhy(forms, p, values[p] ?? '', persons);
    if (why) return why;
  }
  return undefined;
}
