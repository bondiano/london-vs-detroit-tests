import { calculateDiscount } from '../../src/discount.service.js';
import { bill } from '../../src/billing.service.js';

jest.mock('../../src/discount.service.js');

beforeEach(() => {
  calculateDiscount.mockClear();
});

test('correct bill function call', () => {
  const user = { money: 100 };
  calculateDiscount.mockReturnValue(40);

  bill(user, 80);

  expect(calculateDiscount).toBeCalledWith(80);
  expect(user.money).toEqual(60);
});

test('call bill funtion with exeption', () => {
  const user = { money: 100 }; // dummy
  calculateDiscount.mockReturnValue(300);

  expect(() => bill(user, 300)).toThrowError();
});
