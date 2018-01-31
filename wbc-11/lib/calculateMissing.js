'use strict';

const calculateMissing = module.exports = function(numArr) {
  if (numArr.length < 99) throw new Error('Invalid input: array is too short');
  if (numArr.length > 100) throw new Error('Invalid input: array is too long');
  const sum = numArr.reduce((a, b) => { return a + b });
  if (isNaN(sum) || numArr.includes(null)) throw new Error('Invalid input: array must only contain numbers');
  return 5050 - sum;
};
