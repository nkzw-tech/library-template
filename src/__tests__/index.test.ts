import { expect, test } from 'vite-plus/test';

test('apples', () => {
  expect('apple').not.toEqual('banana');
});
