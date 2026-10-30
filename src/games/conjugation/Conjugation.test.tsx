import { screen } from '@testing-library/react';
import { conjugateFr } from '@/lib/french/conjugation';
import { conjugate } from '@/lib/german/conjugation';
import { renderGame } from '@/test/render';
import Conjugation from './Conjugation';
import { conjugationWhy, gradeTable } from './logic';

const forms = conjugate('sein');
const config = {
  tables: [
    {
      id: 'sein',
      verb: 'sein',
      meaning: 'to be',
      forms,
      blanks: ['ich', 'du'] as ('ich' | 'du')[],
    },
  ],
};

describe('gradeTable', () => {
  it('grades each blank and the overall verdict', () => {
    expect(gradeTable(forms, ['ich', 'du'], { ich: 'bin', du: 'bist' }).overall).toBe('correct');
    expect(gradeTable(forms, ['ich', 'du'], { ich: 'bin', du: 'bis' })).toMatchObject({
      overall: 'wrong',
      cells: { ich: 'correct', du: 'wrong' },
    });
    expect(gradeTable({ ...forms, ich: 'heiße' }, ['ich'], { ich: 'heisse' }).overall).toBe(
      'almost',
    );
    expect(gradeTable(forms, ['ich'], {}).overall).toBe('wrong');
  });
});

describe('Conjugation', () => {
  it('shows the given forms as text and blanks as inputs', () => {
    renderGame(Conjugation, config);
    expect(screen.getByLabelText('ich')).toBeInTheDocument();
    expect(screen.getByLabelText('du')).toBeInTheDocument();
    expect(screen.getByText('ist')).toBeInTheDocument(); // er/sie/es is given
    expect(screen.getByRole('button', { name: 'Check' })).toBeDisabled();
  });

  it('accepts the right forms', async () => {
    const { user, onFinish } = renderGame(Conjugation, config);
    await user.type(screen.getByLabelText('ich'), 'bin');
    await user.type(screen.getByLabelText('du'), 'bist');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    expect(screen.getByTestId('mark-ich')).toHaveTextContent('✓');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1, total: 1 }));
  });

  it('marks wrong cells with the correct form', async () => {
    const { user, onFinish } = renderGame(Conjugation, config);
    await user.type(screen.getByLabelText('ich'), 'bin');
    await user.type(screen.getByLabelText('du'), 'bin{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByTestId('mark-du')).toHaveTextContent('✗ bist');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, mistakes: ['sein'] }),
    );
  });

  it('inserts umlauts into the focused cell', async () => {
    const wollen = {
      tables: [
        {
          id: 'k',
          verb: 'können',
          meaning: 'can',
          forms: conjugate('können'),
          blanks: ['wir'] as 'wir'[],
        },
      ],
    };
    const { user } = renderGame(Conjugation, wollen);
    const input = screen.getByLabelText('wir');
    await user.type(input, 'k');
    await user.click(screen.getByRole('button', { name: 'ö' }));
    await user.type(input, 'nnen');
    expect(input).toHaveValue('können');
  });
});

describe('conjugationWhy', () => {
  it('names the person whose form was typed', () => {
    const values = { ich: 'bist', du: 'bist' };
    const { cells } = gradeTable(forms, ['ich', 'du'], values);
    expect(conjugationWhy(forms, cells, values)).toBe(
      '“bist” is the du form – for ich it is “bin”.',
    );
    expect(conjugationWhy(forms, { ich: 'wrong' }, { ich: 'xyz' })).toBeUndefined();
  });

  it('shows the why and the lesson after a wrong table', async () => {
    const { user } = renderGame(Conjugation, {
      tables: [{ ...config.tables[0]!, lesson: 'verb-conjugation' as const }],
    });
    await user.type(screen.getByLabelText('ich'), 'ist');
    await user.type(screen.getByLabelText('du'), 'bist{Enter}');
    await user.click(screen.getByTestId('why'));
    expect(screen.getByTestId('mistake-why')).toHaveTextContent('“ist” is the er/sie/es form');
    expect(screen.getByTestId('mini-lesson')).toBeInTheDocument();
  });
});

describe('Conjugation in French', () => {
  const fr = conjugateFr('avoir');
  const frConfig = {
    tables: [
      {
        id: 'avoir',
        verb: 'avoir',
        meaning: 'to have',
        forms: fr,
        blanks: ['je', 'tu'] as ('je' | 'tu')[],
      },
    ],
  };

  it('lists the six French persons and elides je before a vowel', () => {
    renderGame(Conjugation, frConfig);
    expect(screen.getByLabelText('j’')).toBeInTheDocument();
    expect(screen.getByLabelText('tu')).toBeInTheDocument();
    expect(screen.getByText('avons')).toBeInTheDocument(); // nous is given
    expect(screen.queryByLabelText('ich')).not.toBeInTheDocument();
  });

  it('accepts the right forms and names the person whose form was typed', async () => {
    const { user } = renderGame(Conjugation, frConfig);
    await user.type(screen.getByLabelText('j’'), 'ai');
    await user.type(screen.getByLabelText('tu'), 'ai');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(conjugationWhy(fr, { tu: 'wrong' }, { tu: 'ai' })).toBe(
      '“ai” is the je form – for tu it is “as”.',
    );
  });

  it('treats a missing accent as almost', () => {
    const forms = conjugateFr('être');
    expect(gradeTable(forms, ['vous'], { vous: 'etes' }).overall).toBe('almost');
  });
});
