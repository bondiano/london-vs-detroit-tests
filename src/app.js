// @ts-check

import { bill, addMoney } from './billing.service.js';
import { User } from './user.model.js';

/**
 * @typedef {Object} UserDTO
 * @property {String} name
 * @property {Number} money
 * @property {Number} bonusPercent
 */

/**
 * Создаем новое приложение центра оплаты
 * @param {UserDTO[]} users
 */
export const createBillingCenterApp = (users) => {
  // eslint-disable-next-line max-len
  const customers = users.map(({ name, money, bonusPercent }) => new User(name, money, bonusPercent));

  return ({
    getCustomers: () => customers,
    addUser: ({ name, money }) => {
      customers.push(new User(name, money));
    },
    bill,
    addMoney,
  });
};
