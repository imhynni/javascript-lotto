const {
  NAN_ERROR,
  REMAINDER_ERROR,
  COUNT_ERROR,
  RANGE_ERROR,
} = require("./Constants");

const checkNaN = (amount) => {
  if (isNaN(Number(amount))) return true;
};

const checkRemainder = (amount) => {
  if (parseInt(amount) % 1000 !== 0) return true;
};

const checkPurchaseAmount = (amount) => {
  if (checkNaN(amount)) throw NAN_ERROR;
  if (checkRemainder(amount)) throw REMAINDER_ERROR;
};

const checkSeparator = (numbers) => {};

const checkNumberCount = (numbers) => {
  if (numbers.length !== 6) return true;
};

const checkRange = (numbers) => {
  for (const number of numbers) {
    if (Number(number) < 1 || Number(number) > 45) return true;
  }
};

const checkLottoNumbers = (numbers) => {
  const splitNumbers = numbers.split(",");
  if (checkNumberCount(splitNumbers)) throw COUNT_ERROR;
  if (checkRange(splitNumbers)) throw RANGE_ERROR;
  for (const number of splitNumbers) {
    if (checkNaN(Number(number))) throw NAN_ERROR;
  }
};

const checkBonusNumber = (number) => {
  if (checkNaN(number)) throw NAN_ERROR;
};

module.exports = {
  checkPurchaseAmount: checkPurchaseAmount,
  checkLottoNumbers: checkLottoNumbers,
  checkBonusNumber: checkBonusNumber,
};
