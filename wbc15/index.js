'use strict';

module.exports = {
  fn: {
    findKTreeLeaves: require('./lib/findKTreeLeaves'),
    dedupe: require('./lib/dedupe'),
    findNthNodeFromEnd: require('./lib/findNthNodeFromEnd'),
    findIntersect: require('./lib/findIntersect'),
    findCenter: require('./lib/findCenter'),
  },
  model: {
    SLL: require('./model/sll'),
    Queue: require('./model/queue'),
    Stack: require('./model/stack'),
    Node: require('./model/nd'),
    KTree: require('./model/k-tree'),
  },
  mock: {
    SLL: require('./__test__/mock/sll'),
    KTree: require('./__test__/mock/k-tree'),
  },
};
