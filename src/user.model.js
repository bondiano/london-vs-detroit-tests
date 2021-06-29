// @ts-check

let i = 0;

const getUserId = () => {
  i += 1;

  return i;
};

export class User {
  constructor(name, initMoney, bonusPercent) {
    this.id = getUserId();
    this.name = name;
    this.money = initMoney;
    this.bonusPercent = bonusPercent;
  }
}
