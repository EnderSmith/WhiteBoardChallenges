'use strict';

require('jest');

const sumDigitsOfPower = require('../../lib/sum-digits-of-power');

describe('sumDigitsOfPower()', () => {
  describe('valid input', () => {
    it('returns the sum of the digits of the power', () => {
      expect(sumDigitsOfPower(2,3)).toBe(8);
      expect(sumDigitsOfPower(3,3)).toBe(9);
      expect(sumDigitsOfPower(4,3)).toBe(10);
    });
    it('returns the sum of digits in a power that includes decimals', () => {
      expect(sumDigitsOfPower(3,.3)).toBe(71);
    });
    it('returns the sum of digits in a power, when power is negative', () => {
      expect(sumDigitsOfPower(-3,3)).toBe(9);
    });
    it('returns the sum of digits in a power, when exponent is negative', () => {
      expect(sumDigitsOfPower(3,-3)).toBe(58);
    });
  });
  describe('invalid input', () => {
    it('throws for NaN', () => {
      expect(() => { sumDigitsOfPower(1,{obj:'ect'}) }).toThrow('input');
      expect(() => { sumDigitsOfPower([1],3) }).toThrow('input');
    });
    it('throws for undefined', () => {
      expect(() => { sumDigitsOfPower(1) }).toThrow('input');
    });
    it('throws for square root of negative numbers', () => {
      expect(() => { sumDigitsOfPower(-2,.5) }).toThrow('Calculation');
    });
  });
});
