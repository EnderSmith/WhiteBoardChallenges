## Whiteboard Challenge 33

### Problem Domain:

Write a function while takes two arguments, a base number and an exponential, and returns the sum of the return value's digits.

For example: fn(2, 15) => 32768 => 26

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### utils.js
```js
'use strict';

const sumDigitsOfPower = function(base, exponent) {
  if (typeof(base) !== 'number' || typeof(exponent) !== 'number') throw new Error(`Error: Invalid input: ${base}, ${exponent}`);

  if (isNaN(base**exponent)) throw new Error(`Error: Calculation failed`);

  const e = (base**exponent);
  const separate = e.toString().split('');
  const sum = parseFloat(separate.reduce((a, b) =>  (b !== '.' && b !== '-') ? (~~a + ~~b) : a));
  return sum;
};

module.exports = sumDigitsOfPower;
```

### Demo:

```sh
$ node

> const sumDigitsOfPower = require(`./index`).sumDigitsOfPower;

> const s = sumDigitsOfPower(4,3)
// => 10

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
