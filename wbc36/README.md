## Whiteboard Challenge 33

### Problem Domain:

Write a function which takes two binary search trees as arguments, and compares them for structural likeness.
* If they are structurally identical, return true
* Else return false

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### utils.js
```js
'use strict';

const BinaryTree = require('../model/bi-tree');

const binaryTreeCompare = function(treeA, treeB) {
  if (!treeA || !treeB) throw new Error(`Error: Invalid input: ${treeA}, ${treeB}`);
  if (!treeA.hasOwnProperty('root') || (treeA.hasOwnProperty('left') && treeA.hasOwnProperty('right'))) throw new Error(`Error: Invalid input: ${treeA}, ${treeB}`);
  if (!treeB.hasOwnProperty('root') || (treeB.hasOwnProperty('left') && treeB.hasOwnProperty('right'))) throw new Error(`Error: Invalid input: ${treeA}, ${treeB}`);

  if(!treeA.root || !treeB.root) return (treeA.toString() === treeB.toString());
  return (treeA.inOrderTraversal_checkStructure().toString() === treeB.inOrderTraversal_checkStructure().toString())
};

module.exports = binaryTreeCompare;

```

### Demo:

```sh
$ node

> const binaryTreeCompare = require(`./index`).binaryTreeCompare;

> const Mock = require('./__test__/mock/bi-tree');

> const s = binaryTreeCompare(new Mock.exampleC, new Mock.exampleC);
// => true

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
