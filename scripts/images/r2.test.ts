import { describe, expect, it } from 'vitest';
import { bucketUrl, OBJECT_NAME, parseList, planUpload } from './r2';

describe('parseList', () => {
  it('reads the keys and no token when the list is complete', () => {
    const xml =
      '<ListBucketResult><IsTruncated>false</IsTruncated><Contents><Key>a-b.webp</Key></Contents>' +
      '<Contents><Key>c.webp</Key></Contents></ListBucketResult>';
    expect(parseList(xml)).toEqual({ keys: ['a-b.webp', 'c.webp'], next: null });
  });

  it('returns the continuation token of a truncated list, decoded', () => {
    const xml =
      '<IsTruncated>true</IsTruncated><NextContinuationToken>1a&amp;b</NextContinuationToken>' +
      '<Contents><Key>x.webp</Key></Contents>';
    expect(parseList(xml)).toEqual({ keys: ['x.webp'], next: '1a&b' });
  });

  it('handles an empty bucket', () => {
    expect(parseList('<ListBucketResult><KeyCount>0</KeyCount></ListBucketResult>')).toEqual({
      keys: [],
      next: null,
    });
  });
});

describe('planUpload', () => {
  it('uploads only missing, valid files, in a stable order', () => {
    const plan = planUpload(
      ['b.webp', 'a.webp', 'c.webp', '.DS_Store', 'Bad.webp', 'x.png'],
      ['a.webp'],
    );
    expect(plan).toEqual({
      upload: ['b.webp', 'c.webp'],
      skip: ['a.webp'],
      ignored: ['.DS_Store', 'Bad.webp', 'x.png'],
    });
  });

  it('is a no-op on the second run', () => {
    const names = ['a-1.webp', 'b-2.webp'];
    expect(planUpload(names, names).upload).toEqual([]);
  });
});

describe('OBJECT_NAME', () => {
  it.each(['a1-1-hallo.webp', '0.webp'])('accepts %s', (n) =>
    expect(OBJECT_NAME.test(n)).toBe(true),
  );
  it.each(['../a.webp', 'a/b.webp', 'A.webp', '-a.webp', 'a.jpg', '.webp'])('rejects %s', (n) =>
    expect(OBJECT_NAME.test(n)).toBe(false),
  );
});

describe('bucketUrl', () => {
  it('points at the account endpoint', () => {
    expect(bucketUrl('abc', 'imgs')).toBe('https://abc.r2.cloudflarestorage.com/imgs');
  });
});
