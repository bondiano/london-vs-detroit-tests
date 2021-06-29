// @ts-check

const STARS_COUNT = 200;

/**
 * Считаем скидку исходя из звезд в небе
 * @param {Number} amount
 * @returns {Number}
 */
export const calculateDiscount = (amount) => amount * (STARS_COUNT / 1000);
