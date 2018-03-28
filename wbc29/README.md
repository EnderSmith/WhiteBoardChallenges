## Whiteboard Challenge 29

### Problem Domain:

Write a method to sort an array of strings so that all the anagrams are next to each other

Note - we can use a hash table to map the sorted version of a word to a list of its anagrams

example:
```javascript
sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care'])
  => ['acre', 'care', 'race', 'act', 'cat', 'tac', ]
```

### Solution:

#### Big O:
*time:* O(n)
*space:* O(n)

#### utils.js
```js
'use strict';

const HashTable = require('../model/hash-table');

const sortAnagrams = function(arrayOfWords) {
  if (!arrayOfWords || !Array.isArray(arrayOfWords)) throw new Error(`Error: Invalid input: ${arrayOfWords}`);
  let AnagramsHT = new HashTable();
  let resultArr = [];

  //place all items in the hashtable
  for (let index in arrayOfWords) {
    AnagramsHT.set(AnagramsHT.hashkey(arrayOfWords[index]), arrayOfWords[index]);
  }

  // get a list of the keys
  let AnagramKeys = Object.keys(AnagramsHT.getTable());

  // concat each key's array to the result
  for (let index in AnagramKeys) {
    resultArr = resultArr.concat(AnagramsHT.memory[AnagramKeys[index]]);
  }

  return resultArr;
};

module.exports = sortAnagrams;

```

### Demo:

```sh
$ node

> const sortAnagrams = require(`./index`).sortAnagrams;

> const w = sortAnagrams(['one', 'not', 'neo', 'gut', 'ton', 'tug'])
// ["neo", "one", "not", "ton", "gut", "tug"]


```

### Tests: jest

```sh
$ npm test
// 96.56% coverage
// (k-tree, tree-node constructors not covered)
```

### Linter: eslint

```sh
$ npm run linter
```
