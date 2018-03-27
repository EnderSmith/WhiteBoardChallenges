'use strict';

function arrayData(numArray) {
  const arrayDataObj = {};
  arrayDataObj.max = Math.max(...numArray);
  arrayDataObj.min = Math.min(...numArray);
  arrayDataObj.avg = (numArray.reduce(sumCallback) / numArray.length);
  return arrayDataObj;
};

function sumCallback(previousValue, currentValue) {
  return previousValue + currentValue;
};