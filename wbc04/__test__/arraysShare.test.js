`use strict`;

const arraysShare = require(`../lib/arraysShare`);
require(`jest`);

describe(`arraysShare()`, () => {
  const arr1 = ['mike','sue','tom','kathy','henry'];
  const arr2 = ['howey','jim','sue','jennifer','kathy','hank','alex'];
  describe(`#expected input`, () => {
    it(`should return null if inputs are not both array`, () => {
      expect(arraysShare(1, [])).toBeNull();
      expect(arraysShare([], 2)).toBeNull();
      expect(arraysShare(1, 2)).toBeNull();
    });
  });
  describe(`#expected output`, () => {
    it(`should return array of shared values if input arrays share values`, () => {
      expect(arraysShare(arr1, arr2)).toEqual(['sue','kathy']);
    });
    it(`should return an empty array, if input arrays do not share any values`, () => {
      const expected = arraysShare(['not'], ['shared']);
      expect(expected).toBeInstanceOf(Array);
      expect(expected.length).toBe(0);
    });
    it(`should return an array if inputs are arrays`, () => {
      expect(arraysShare([], [])).toBeInstanceOf(Array);
    });
  });
});
