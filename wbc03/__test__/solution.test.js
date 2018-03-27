`use strict`;

const traverse = require(`../solution.js`);
require(`jest`);

describe(`traverse()`, function() {
  describe(`#happy case`, () => {
    it(`should return the sum of all 'value's`, () => {
      expect(traverse({ value: 1, next: { value: 2, next: { value: 5, next: null } } })).toBe(8);
    });
  });
  describe(`#return null cases`, () => {
    it(`should return null if input is not an object literal`, () => {
      expect(traverse('{not: actually, an: object}')).toBeNull();
    });
    it(`should return null if engine doesn't have 'value' key`, () => {
      expect(traverse({next: {}})).toBeNull();
    });
    it(`should return null if engine object doesn't have 'next' key`, () => {
      expect(traverse({value: 1})).toBeNull();
    });
    it(`should return null if engine.value is not a number`, () => {
      expect(traverse({next: {}, value: 'lots'})).toBeNull();
    });
    it(`should return null if engine.next is other than an object or null`, () => {
      expect(traverse({next: 'caboose', value: 1})).toBeNull();
    });
    it(`should NOT return null if engine.next is null`, () => {
      expect(traverse({next: null, value: 1})).not.toBeNull();
    });
  });
});
