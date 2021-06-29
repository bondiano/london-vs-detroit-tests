// @ts-check

import { calculateDiscount } from '../../src/discount.service.js';

const expectedByAmount = [
  {
    expected: 8,
    amount: 40,
  },
  {
    expected: 20,
    amount: 100,
  },
];

test.each(expectedByAmount)('discount for $amount calculate correctly', ({ expected, amount }) => {
  expect(calculateDiscount(amount)).toEqual(expected);
});
