import { quizActivity } from '@/test/factories';
import { getItems, itemCount, withItems } from './items';

describe('items', () => {
  it('reads and filters items without mutating the source', () => {
    const a = quizActivity();
    expect(itemCount(a)).toBe(2);
    const sub = withItems(a, ['q2']);
    expect(getItems(sub).map((i) => i.id)).toEqual(['q2']);
    expect(itemCount(a)).toBe(2);
    expect(withItems(a, [])).toMatchObject({ id: 'act-1' });
  });
});

describe('itemLabel', () => {
  it('gives every item of every game a non-empty text', async () => {
    const { itemLabel } = await import('./items');
    const { default: a11 } = await import('./a1-1');
    for (const a of a11.activities) {
      for (const item of getItems(a))
        expect(itemLabel(a, item).text, `${a.id}::${item.id}`).toBeTruthy();
    }
  });
});
