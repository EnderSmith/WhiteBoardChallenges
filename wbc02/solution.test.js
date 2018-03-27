'use strict';

const highestTwoValues = require(`./solution`);
require('jest');

describe(`highestTwoValues`, () => {
  describe(`#happy case`, () => {
    it(`should return an object literal`, () => {
      expect(typeof(highestTwoValues([1,2,5]))).toBe('object');
    });
    it(`should return an object with two properties`, () => {
      expect(Object.keys(highestTwoValues([1,2,5])).length).toBe(2);
    });
    it(`should return an object with two properties whose values are the highest and second highest numbers in the array`, () => {
      const output = highestTwoValues([1,2,5]);
      expect(output.highest).toBe(5);
      expect(output.secondHighest).toBe(2);
    });
  });
  describe(`#return null cases`, () => {
    it(`should return null if input is not an array`, () => {
      expect(highestTwoValues('![]')).toBeNull();
    });
    it(`should return null if input array is not numerical`, () => {
      expect(highestTwoValues(['not', 411, 'numbers'])).toBeNull();
    });
    it(`should return null if input array does not have at least two values`, () => {
      expect(highestTwoValues([1])).toBeNull();
    });
  });
  describe(`#edge cases`, () => {
    it(`should work even if array contains negative numbers`, () => {
      const output = highestTwoValues([1,-5,-2]);
      expect(output.highest).toBe(1);
      expect(output.secondHighest).toBe(-2);
    });
    it(`should work even if array contains floating-point numbers`, () => {
      const output = highestTwoValues([1, 2.333, 5]);
      expect(output.highest).toBe(5);
      expect(output.secondHighest).toBe(2.333);
    });
  });
});