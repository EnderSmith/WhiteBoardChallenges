## Whiteboard Challenge 17

### Problem Domain:

*Write a function that accepts the root of a tree as it's argument, and returns an array of nodes, if any, which have no children.*

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### sumKTree.js
```js
'use strict';

const KTree = require('../model/k-tree');

const sumKTree = function(tree) {
  if (!(tree instanceof KTree)) throw (`Error: Invalid input: ${tree}`);
  if (tree.root === null) return null;

  let total = 0;

  tree.breadthFirstSearch((currentNode) => {
    total += currentNode.value.value;
  });
  return total;
};

module.exports = sumKTree;
```

### Demo:

```sh
$ node

> const i = require(`./index`);

> const kTree = new i.mock.KTree().threeLevelTree;
// creates mockup of a k-tree

> i.fn.sumKTree(kTree);
// returns total sum:
// 36
```

### Tests: jest

```sh
$ npm test
// 95.05% coverage
// (k-tree, tree-node constructors not covered)
```

### Linter: eslint

```sh
$ npm run linter
```
