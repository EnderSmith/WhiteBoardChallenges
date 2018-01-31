`use strict`;

const loop = require('../lib/loop');
require('jest');

describe(`loop`, () => {
  it(`should run the callback, count number of times`, () => {
    let looped = 0;
    loop(3, () => {
      looped++;
    });
    expect(looped).toBe(3);
  });
  it(`should loop 0 times if count is not a number`, () => {
    let looped = 0;
    loop('boop', () => {
      looped++;
    });
    expect(looped).toBe(0);
  });
  it(`should loop 0 times if callback is not a function`, () => {

  });
  it(`should loop 0 times if count is less than 1`, () => {
    let looped = 0;
    loop(0, () => {
      looped++;
    });
    expect(looped).toBe(0);
  });
  it(`should return null if count is greater than 50`, () => {
    let looped = 0;
    loop(51, () => {
      looped++;
    });
    expect(looped).toBe(0);
  });
});
