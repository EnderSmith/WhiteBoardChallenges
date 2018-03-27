## Whiteboard Challenge 14

### Problem Domain:

*Write a function called `dedupe(head)` that accepts the head of a linked list as it's argument, and returns a new linked list*
    - Use a stack to identify any consecutive duplication, and remove them from the list.

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### dedupe.js
```js
'use strict';

const SLL = require('./sll');
const Stack = require('./stack')

const dedupe = function(head) {
  if (head === null) return null;
  if (!head.hasOwnProperty('value') || !head.hasOwnProperty('next')) throw (`Error: Invalid input: ${head}`);
  const deduped = new SLL();
  const stack = new Stack();

  let currentNode = head;

  deduped.insertEnd(currentNode.value);
  stack.push(currentNode)

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    if (stack.peek().value !== currentNode.value) deduped.insertEnd(currentNode.value);
    stack.push(currentNode.value);
  }
  return deduped;
};

module.exports = dedupe;
```

### Demo:

```sh
$ node

> const i = require(`./index`);

> const sllWithDuplicates = new i.Mk().sllWithDuplicates;
// { value: 0, next: { value: 1, next: { value: 1, next: { value: 2, next: { value: 3, next: { value: 3, next: null } } } } } }

> i.dedupe(sllWithDuplicates);
// returns { value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }
// (duplicates have been removed)
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
