## Whiteboard Challenge 15

### Problem Domain:

*Write a function that accepts the root of a tree as it's argument, and returns an array of nodes, if any, which have no children.*

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### findKTreeLeaves.js
```js
'use strict';

const KTree = require('../model/k-tree');

const findKTreeLeaves = function(root) {
  if (root === null) return [];
  if (!root || !root.hasOwnProperty('children')) throw new Error(`Error: Invalid input ${root}`);

  let leaves = [];
  const tree = new KTree();
  tree.root = root;

  tree.breadthFirstSearch((currentNode) => {
    if (!currentNode.value.children[0]) leaves.push(currentNode.value);
  });
  return leaves;
};

module.exports = findKTreeLeaves;
```

### Demo:

```sh
$ node

> const i = require(`./index`);

> const kTree = new i.mock.KTree().threeLevelTree;
// creates mockup of a k-tree

> i.fn.findKTreeLeaves(kTree.root);
// returns leaves in an array:
// [ { value: 4, children: [] }, { value: 5, children: [] }, { value: 6, children: [] }, { value: 7, children: [] }, { value: 8, children: [] }]
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
