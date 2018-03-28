## Whiteboard Challenge 31

### Problem Domain:

Given two arrays, write a function to compute their intersection

example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### utils.js
```js
'use strict';

const findArrayIntersect = function(arrayA, arrayB) {
  if(!arrayA || !arrayB || !Array.isArray(arrayA) || !Array.isArray(arrayB)) throw new Error(`Error: Invalid input: ${arrayA}, ${arrayB}`);
  // O(n^2) [bad]
  const intersectionArray = [];
  for (let indexA = 0; indexA < arrayA.length; indexA++) {
    for (let indexB = 0; indexB < arrayB.length; indexB++) {
      if (arrayA[indexA] === arrayB[indexB]) {
        if (!intersectionArray.includes(arrayA[indexA])) intersectionArray.push(arrayA[indexA]);
        break;
      }
    }
  }
  return intersectionArray;
};

module.exports = findArrayIntersect;
```

### Demo:

```sh
$ node

> const findArrayIntersect = require(`./index`).findArrayIntersect;

> const w = findArrayIntersect([3,2,1], [1,2,5])
// => [1,2]

```

### Tests: jest

```sh
$ npm test
// 95.26% coverage
// (k-tree, tree-node constructors not covered)
```

### Linter: eslint

```sh
$ npm run linter
```
