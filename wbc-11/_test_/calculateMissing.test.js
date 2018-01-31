'use strict';

const calcMissing = require('../lib/calculateMissing');
require('jest');

describe('calculateMissing', function() {
  beforeEach(() => {
    this.completeArr = [];
    for (let i = 99; i >= 0; i--) this.completeArr[i] = i + 1;
    this.splicedArr = [];
    for (let i = 99; i >= 0; i--) this.splicedArr[i] = i + 1;
    this.splicedArr.splice(49, 1);
   });

  describe('valid input', () => {
    it('should return expected value', () => {
      expect(calcMissing(this.splicedArr)).toBe(50);
    });
  });

  describe('invalid input', () => {
    it('should throw error if numArray is missing more than one', () => {
      this.doubleSplicedArr = this.splicedArr;
      this.doubleSplicedArr.splice(0, 1);
      expect(() => { calcMissing(this.doubleSplicedArr) }).toThrow(/too short/);
    });
    it('should throw error if numArray is too long', () => {
      this.longArray = this.completeArr;
      this.longArray.push(101);
      expect(() => { calcMissing(this.longArray); }).toThrow(/too long/);
    });
    it('should throw err if numArray contains non numbers', () => {
      this.splicedArr[1] = null;
      expect(() => { calcMissing(this.splicedArr) }).toThrow(/numbers/);
      this.splicedArr[1] = undefined;
      expect(() => { calcMissing(this.splicedArr) }).toThrow(/numbers/);
      this.splicedArr[1] = 'str';
      expect(() => { calcMissing(this.splicedArr) }).toThrow(/numbers/);
    });
  });
});
