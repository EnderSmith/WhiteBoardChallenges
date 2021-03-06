'use strict';

module.exports = {
  fn: {
    dedupe: require('./lib/dedupe'),
    findCenter: require('./lib/findCenter'),
    findIntersect: require('./lib/findIntersect'),
    findKTreeLeaves: require('./lib/findKTreeLeaves'),
    findNthNodeFromEnd: require('./lib/findNthNodeFromEnd'),
    sumKTree: require('./lib/sumKTree'),
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
