## Whiteboard Challenge 10

### Problem Domain:


1. *Write a function `checkBraces()` to examine whether the pairs and the orders of `{` and `}` are correct in a string, using a Stack.*

2. *Write a function that accepts `n` and a sorted array as it's arguments, and implement binary search on the array using `n` as the value to search.*
    - If found, return the value `n` and the location in the array as `{value: n, index: i}`
    - Else return `null`

### Solution:

#### Big O:
*time:* O(n)
*space:* O(1)

#### checkBraces.js
```js
'use strict';

const Stack = require('./stack');

const checkBraces = function(string) {
  if (typeof(string) !== 'string' || string === undefined) throw new Error(`Error: Invalid input: ${string}`);
  let search = true;
  let stack = new Stack();

  while (search) {
    const brace = /{|}/.exec(string);
    if (brace === null) {
       search = false;
    } else {
      string = string.slice(brace.index+1);
      if (brace[0] === '{') {
        stack.push('{');
      } else {
        if (stack.size < 1) return false;
        stack.pop();
      }
    }
  }
  if (stack.size > 0) return false;
  return true;
};

module.exports = checkBraces;
```


#### Big O:
*time:* O(logn)
*space:* O(1)

### binary-array-search.js
```js
'use strict';

const binaryArraySearch = function(array, n) {
  if(!array || typeof(array) !== 'object' || !array.hasOwnProperty('length') || isNaN(n)) throw Error(`Error: Invalid input: ${array}, ${n}`);
  let bottom = 0;
  let top = array.length - 1;
  let center;
  let guess;

  while (bottom <= top) {
    center = (bottom + top) / 2 | 0;
    guess = array[center];
    if (guess < n) bottom = center + 1;
    else if (guess > n) top = center - 1;
    else return { value: n, index: center };
  }
  return null;
};

module.exports = binaryArraySearch;
```

### Demo:

```sh
$ node

> const i = require(`./index`);

> i.checkBraces('{}{{}{}}');
// returns true

> i.checkBraces('{ value: 8, next: { value: 4, next: null } }');
// returns true

> i.checkBraces('{');
// returns false


> i.binaryArraySearch([1,8,7,20], 8);
// returns { value: 8, index: 1 }

> i.binaryArraySearch([1,8,7,20], 5);
// returns null

```

### Tests: jest

```sh
$ npm test
// 100% coverage
```

### Linter: eslint

```sh
$ npm run linter
```
