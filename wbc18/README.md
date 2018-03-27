## Whiteboard Challenge 18

### Problem Domain:

*Write a function which will return the max child count of a node within a k-ary tree*

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### findKTreeMaxChildren.js
```js
'use strict';

const KTree = require('../model/k-tree');

const findKTreeMaxChildren = function(tree) {
  if (!tree || !(tree instanceof KTree)) throw new Error(`Error: Invlid input: ${tree}`);
  if (tree.root === null) return null;
  let maxChildren = 0;
  tree.breadthFirstSearch((currentNode) => {
    if (currentNode.value.children.length > maxChildren) maxChildren = currentNode.value.children.length;
  });
  return maxChildren;
};

module.exports = findKTreeMaxChildren;
```

### Demo:

```sh
$ node

> const i = require(`./index`);

> const kTree = new i.mock.KTree().threeLevelTree;
// creates mockup of a k-tree

> i.fn.findKTreeMaxChildren(kTree);
// returns max number of children in any node:
// 3
```

### Tests: jest

```sh
$ npm test
// 95.59% coverage
// (k-tree, tree-node constructors not covered)
```

### Linter: eslint

```sh
$ npm run linter
```
