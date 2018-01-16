'use strict';

const highestTwoValues = (numArray) => {
  const output = {};
  if (!Array.isArray(numArray) || numArray.length <= 1) {
    return null;
  };
  for (const i in numArray) {
    if (isNaN(numArray[i])) {
      return null;
    };
  };
  const numArraySorted = numArray.sort((a, b) => { return a - b });
  output.highest = numArraySorted[numArraySorted.length - 1];
  output.secondHighest = numArraySorted[numArraySorted.length - 2];
  return output;
};

module.exports = highestTwoValues;