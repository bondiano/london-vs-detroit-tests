// @ts-check

import { calculateDiscount } from './discount.service.js';

/**
 * @typedef {import('./user.model').User} User
 * */

/**
 * Списываем у юзера деньги с учетом скидки
 * @param {User} user
 * @param {Number} amount
 */
export const bill = (user, amount) => {
  const newMoneyCount = user.money - calculateDiscount(amount);

  if (newMoneyCount < 0) {
    throw new Error('User has no enough money');
  }

  // eslint-disable-next-line no-param-reassign
  user.money = newMoneyCount;
};

/**
 * добавление пользователю денег, с учетом бонусной системы
 * @param {User} user
 * @param {Number} amount
 */
export const addMoney = (user, amount) => {
  const bouns = amount * (user.bonusPercent / 100);

  // eslint-disable-next-line no-param-reassign
  user.money += bouns > 0 ? bouns : amount + bouns;
};
