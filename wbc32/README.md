## Whiteboard Challenge 31

### Problem Domain:

[Outputs the Fibonacci sequence number at the given Fibonacci number iteratively] = whiteboardfn.fibItr(Fibonacci number)

generates a Fibonacci sequence result given a Fibonacci sequence iteratively

[Outputs the Fibonacci sequence number at the given Fibonacci number recursively] = whiteboardfn.fibRec(Fibonacci number)

generates a Fibonacci sequence result given a Fibonacci sequence recursively

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
