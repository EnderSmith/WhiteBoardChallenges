## Whiteboard Challenge 05

### Problem Domain:

*Write a function that returns the middle node in a singly linked list*
```
Given [25, nxt]->[01, nxt]->[15, nxt]->[33, nxt]->[04, nxt]

Return [15, nxt]
```

### Solution:

#### Big O:
*time:* O(n)
*space:* O(1)

#### findCenter.js
```js
'use strict';

const findCenter = function(sll) {
  if (!sll || !sll.hasOwnProperty('head')) throw new Error(`ERR: invalid input: ${sll}`);
  if (!sll.head) return null;

  let endNode = sll.head;
  let centerNode = sll.head;
  let count = 1;

  while (endNode.next !== null) {
    endNode = endNode.next;
    count++;
    if (count !== 1 && count % 2 !== 0) centerNode = centerNode.next;
  }
  return centerNode;
};

module.exports = findCenter;
```

### Demo:

```sh
$ node

> const index = require(`./index`);

> fiveNodeSLL = new index.Mk().fiveNodeSLL;
// generates premade 5-node singly linked list:
// { head: { value: 1, next: { value: 3, next: { value: 5, next: { value: 7, next: { value: 9, next: null } } } } } }

> index.findCenter(fiveNodeSLL);
// returns center node:
// { value: 5, next: { value: 7, next: { value: 9, next: null } } }
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
