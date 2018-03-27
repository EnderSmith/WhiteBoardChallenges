`use strict`;

const validate = require(`../validate`);
require(`jest`);

describe(`validate()`, function() {
  describe(`#return true case`, () => {
    it(`should return true when a valid train object is input: {value:2,next:{value:15,next:null}}`, () => {
      expect(validate({value:2,next:{value:15,next:null}})).toBe(true);
    });
  });
  describe(`#return false cases`, () => {
    it(`should return false if input is not an object literal`, () => {
      expect(validate('{not: actually, an: object}')).toBe(false);
    });
    it(`should return false if car doesn't have 'value' key`, () => {
      expect(validate({next: {}})).toBe(false);
    });
    it(`should return false if car object doesn't have 'next' key`, () => {
      expect(validate({value: 1})).toBe(false);
    });
    it(`should return false if car.value is not a number`, () => {
      expect(validate({next: {}, value: 'lots'})).toBe(false);
    });
    it(`should return false if car.next is other than an object or null`, () => {
      expect(validate({next: 'caboose', value: 1})).toBe(false);
    });
    it(`should NOT return null if car.next is null`, () => {
      expect(validate({next: null, value: 1})).not.toBe(false);
    });
  });
});