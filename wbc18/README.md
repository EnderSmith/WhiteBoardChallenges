## Whiteboard Challenge 18

### Problem Domain:

*Write a function which will return the max child count of a node within a k-ary tree*

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
