## Whiteboard Challenge 05

### Problem Domain:

*Write a function which accepts `n` and a linked list as it's arguments, and will return the nth from last node in a linked list*
```
Given n: 3, sll: [25, nxt]->[01, nxt]->[15, nxt]->[33, nxt]->[04, nxt]
Return [01, nxt]
```

### Solution:

#### Big O:
*time:* O(n)
*space:* O(1)

#### findNthNodeFromEnd.js
```js
'use strict';

const SLL = require('./sll');

const findNthNodeFromEnd = function (n, sll) {
  if (isNaN(n)) throw new Error(`Error: Invalid input: ${n}`);
  if (!sll || !sll.hasOwnProperty('head')) throw new Error(`ERR: invalid input: ${sll}`);

  if (n < 0) return null;

  let nMarker = sll.head;
  let nthNodeFromEnd = sll.head;
  while (n > 0) {
    if (nMarker.next === null) return null;
    nMarker = nMarker.next;
    n--;
  }

  while (nMarker.next) {
    nMarker = nMarker.next;
    nthNodeFromEnd = nthNodeFromEnd.next
  }

  return nthNodeFromEnd;
}

module.exports = findNthNodeFromEnd;
```

### Demo:

```sh
$ node

> const index = require(`./index`);

> const threeFromEnd = new index.Mk().threeFromEnd;
// generates premade singly linked list with four nodes total

> index.findNthNodeFromEnd(2, threeFromEnd);
// returns second node from end
// { value: 1, next: { value: 2, next: { value: 3, next: null } } }
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
