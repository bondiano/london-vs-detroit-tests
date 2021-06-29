// @ts-check

import path from 'path';
import { promises as fsp } from 'fs';

import { createBillingCenterApp } from '../src/app.js';

const readFile = (dirpath, filename) => fsp.readFile(path.join(dirpath, filename), 'utf-8');
const buildFixturesPath = (...paths) => path.join(__dirname, '.', '__fixtures__', ...paths);

/**
 * @type {ReturnType<createBillingCenterApp>}
 */
let billingCenterApp;

beforeEach(async () => {
  const usersFixture = await readFile(buildFixturesPath(), 'users.json');
  const users = JSON.parse(usersFixture);

  billingCenterApp = createBillingCenterApp(users);
});

describe('Billing Center App', () => {
  describe('positive cases', () => {
    it('should add new user', () => {
      const newUser = { name: 'Cruella', money: 9999999 };

      billingCenterApp.addUser(newUser);
      const customers = billingCenterApp.getCustomers();

      expect(customers).toHaveLength(4);
      // expect(customers).toContainEqual(newUser); TODO: test contains with name
    });

    it('should bill money correctly', () => {
      const user = billingCenterApp.getCustomers()[0];

      billingCenterApp.bill(user, 10);

      expect(user.money).toEqual(38);
    });

    it('should add money correctly', () => {
      const user = billingCenterApp.getCustomers()[0];

      billingCenterApp.addMoney(user, 10);

      expect(user.money).toEqual(60);

      const userWithNegativeBonus = billingCenterApp.getCustomers()[2];

      billingCenterApp.addMoney(userWithNegativeBonus, 100);

      expect(userWithNegativeBonus.money).toEqual(690);
    });
  });

  describe('negative cases', () => {
    it('user has no enough money', () => {
      const user = billingCenterApp.getCustomers()[0];

      expect(() => billingCenterApp.bill(user, 1000)).toThrow();
    });
  });
});
