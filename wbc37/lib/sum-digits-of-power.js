'use strict';

const sumDigitsOfPower = function(base, exponent) {
  if (typeof(base) !== 'number' || typeof(exponent) !== 'number') throw new Error(`Error: Invalid input: ${base}, ${exponent}`);

  if (isNaN(base**exponent)) throw new Error(`Error: Calculation failed`);

  const e = (base**exponent);
  const separate = e.toString().split('');
  const sum = parseFloat(separate.reduce((a, b) =>  (b !== '.' && b !== '-') ? (~~a + ~~b) : a));
  return sum;
};

module.exports = sumDigitsOfPower;
