`use strict`;

const arraysShare = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  };
  resultsArray = [];
  for (const i in arr1) {
    for (const j in arr2) {
      if (arr1[i] === arr2[j]) {
        resultsArray.push(arr1[i]);
      };
    };
  };
  return resultsArray;
};

module.exports = arraysShare;
