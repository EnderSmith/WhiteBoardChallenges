## Whiteboard Challenge 18

### Problem Domain:

*Write a function which will return the max child count of a node within a k-ary tree*

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### utils.js
```js
'use strict';

const map = function (inputArray, callback) {
  if (!inputArray || !callback || typeof(callback) !== 'function') throw new Error(`Error: Invalid input: ${inputArray}, ${callback}`);
  let index = 0;
  let outputArray = [];
  while(index < inputArray.length) {
    outputArray.push(callback(inputArray[index]));
    index++;
  }
  return outputArray;
};

const filter = function (inputArray, callback) {
  if (!inputArray || !callback || typeof(callback) !== 'function') throw new Error(`Error: Invalid input: ${inputArray}, ${callback}`);
  let index = 0;
  let outputArray = [];
  while(index < inputArray.length) {
    if (callback(inputArray[index])) outputArray.push(inputArray[index]);
    index++;
  }
  return outputArray;
};

const reduce = function (inputArray, callback) {
  if (!inputArray || !callback || typeof(callback) !== 'function') throw new Error(`Error: Invalid input: ${inputArray}, ${callback}`);
  let index = 0;
  let output = 0;
  while(index < inputArray.length) {
    output = callback(output || 0, inputArray[index]);
    index++;
  }
  return output;
};

module.exports = {
  map: map,
  filter: filter,
  reduce: reduce,
};
```

### Demo:

```sh
$ node

> const u = require(`./index`).utils;

> u.map([1,2,3], current => current + 1)
//returns [2,3,4]

> u.filter([1,2,3], current => current > 1)
// returns [2,3]

> u.reduce([1,2,3], (previous, current) => previous + current);
// returns 6

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
