'use strict';

const linkedListLoops = require('../lib/linkedListLoops');
const prefab = require('../assets/prefabLinkedLists');
require('jest');

describe(`linkedListLoops`, function() {
  it(`should return false for a non-looping linked list`, () => {
    expect(linkedListLoops(prefab.nonlooping)).toBe(false);
  });
  it(`should return true for a looping linked list`, () => {
    expect(linkedListLoops(prefab.looping)).toBe(true);
  });
  it(`should return err for input that is not a linked list`, () => {
    const lllString = () => {
      linkedListLoops('something else');
    };
    const lllEmpty = () => {
      linkedListLoops({});
    };
    expect(lllString).toThrow();
    expect(lllEmpty).toThrow();
  });
  // it(`should return err for linked list longer than 50`, () => {

  // });
});
