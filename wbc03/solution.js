'use strict';

const validate = require(`./validate`);

const traverse = (engine) => {
  if (!validate(engine)) return null;
  let car = engine;
  let count = car.value;
  while (car.next !== null) {
    car = car.next;
    if (!validate(car)) return null;
    count += car.value;
  };
  return count;
};

module.exports = traverse;