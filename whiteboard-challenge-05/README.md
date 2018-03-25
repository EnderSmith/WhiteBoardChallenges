## Whiteboard Challenge 05

### Problem Domain:

*Write a function that returns the middle node in a singly linked list*
```
Given [25, nxt]->[01, nxt]->[15, nxt]->[33, nxt]->[04, nxt]

Return [15, nxt]
```


## Demo:

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

## Tests: jest

```sh
$ npm test
// 100% coverage
```

## Linter: eslint

```sh
$ npm run linter
```
