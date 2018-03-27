## Whiteboard Challenge 08

### Problem Domain:

*Write a function that accepts the `head` of two linked list as it's two arguments, and return the intersection of those two linked lists.*
```
Given [25, nxt]->[01, nxt]->[15, nxt]->[33, nxt]->[04, nxt]
      [44, nxt]->[75, nxt]---^
Return [15, nxt]
```

### Solution:

#### Big O:
*time:* O(n)
*space:* O(1) - O(n)

#### findCenter.js
```js
'use strict';

const SLL = require('./sll');

const findIntersect = function(sllHeadOne, sllHeadTwo) {
  // O(1)
  const invalidInput = !sllHeadOne || !sllHeadTwo ? true
    : !sllHeadOne.hasOwnProperty('next') || !sllHeadTwo.hasOwnProperty('next') ? true
      : !sllHeadOne.hasOwnProperty('value') || !sllHeadTwo.hasOwnProperty('value') ? true
        : false;
  if (invalidInput) throw new Error(`Error: Invalid input: ${sllHeadOne} , ${sllHeadTwo}`);

  // O(1)
  if (sllHeadOne === sllHeadTwo) return sllHeadOne;

  // O(n)
  const reversedOne = new SLL();
  const reversedTwo = new SLL();
  // O(1)
  reversedOne.head = sllHeadOne;
  reversedTwo.head = sllHeadTwo;
  // O(n)
  reversedOne.reverse();
  reversedTwo.reverse();

  // O(1)
  if (reversedOne.head.value !== reversedTwo.head.value) return null;
  // O(1)
  let current = {
    one: reversedOne.head,
    two: reversedTwo.head,
  };
  // O(1)
  let intersection = reversedOne.head;

  // O(n)
  while (current.one.next && current.two.next && current.one.next.value === current.two.next.value) {
    current.one = current.one.next;
    current.two = current.two.next;
    intersection = current.one;
  }

  // O(n)
  reversedOne.reverse();
  reversedTwo.reverse();

  // O(1)
  return intersection;
};

module.exports = findIntersect;
```

### Demo:

```sh
$ node

> const index = require(`./index`);

> intersectMain = new index.Mk().intersectMain;
// generates premade singly linked list mock that intersects other intersect mocks

> intersectSameLength = new index.Mk().intersectSameLength;
// generates premade singly linked list mock that intersects other intersect mocks

> index.findintersect(intersectMain, intersectSameLength);
// returns intersecting node
// { value: 7, next: { value: 6, next: null } }
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
