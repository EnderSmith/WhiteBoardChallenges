## Whiteboard Challenge 27

### Problem Domain:

*Write a function which will return the max child count of a node within a k-ary tree*

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### utils.js
```js
'use strict';

const rotate2dArray = function(array2d) {
  if (!array2d || !array2d.length || !array2d[0].length) throw new Error(`Error: Invalid input: ${array2d}`);
  const startHeight = array2d.length;
  // O(n)
  const startWidth = array2d.reduce((prev, curr) => prev.length < curr.length ? curr : prev).length;
  // O(1)
  let startWidthIndex = 0;
  let startHeightIndex = 0;
  const outputArray2d = [];
  // O(n)
  while (startWidthIndex < startWidth) {
    if (startHeightIndex === 0) outputArray2d[startWidthIndex] = [];

    let startValue = array2d[startHeightIndex][startWidthIndex];
    if (startValue !== undefined) outputArray2d[startWidthIndex][startHeight - startHeightIndex - 1] = startValue;

    if (startHeightIndex === startHeight - 1) startWidthIndex++;
    startHeightIndex = (startHeightIndex + 1) % startHeight;
  }
  return outputArray2d;
};

module.exports = rotate2dArray;
```

### Demo:

```sh
$ node

> const rotate = require(`./index`).rotate2dArray;

> const a = [[0,1,2],[3,4,5,6],[7,8,9]];
// [
//   [ 0, 1, 2 ],
//   [ 3, 4, 5, 6 ],
//   [ 7, 8, 9 ],
// ]

> const a_rotated = rotate(a);
// [
//   [ 7, 3, 0 ],
//   [ 8, 4, 1 ],
//   [ 9, 5, 2 ],
//   [ *, 6]
// ]
//
// * === undefined


```

### Tests: jest

```sh
$ npm test
// 96.56% coverage
// (k-tree, tree-node constructors not covered)
```

### Linter: eslint

```sh
$ npm run linter
```
