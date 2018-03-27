'use strict';

const validate = (car) => {
  if (typeof(car) !== 'object') {
    return false;
  } else if (!car.hasOwnProperty('value')) {
    return false;
  } else if (!car.hasOwnProperty('next')) {
    return false; 
  } else if (typeof(car.value) !== 'number') {
    return false;
  } else if (typeof(car.next) !== 'object') {
    return false;
  } else return true;
};

module.exports = validate;