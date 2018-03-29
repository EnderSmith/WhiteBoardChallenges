'use strict';

const BinaryTree = require('../../model/bi-tree');

class MockBinaryTree {
  constructor() {
    this.emptyBinaryTree = new BinaryTree();
    this.exampleA = new BinaryTree();
    this.exampleB = new BinaryTree();
    this.exampleC = new BinaryTree();

    this.exampleA.root = { left: null, right: null, value: 0 };
    this.exampleB.root = { left: null, right: { left: null, right: null, value: 1 }, value: 0 };
    this.exampleC.root = { left: { left: null, right: null, value: 1 }, right: { left: { left: null, right: null, value: 3 }, right: null, value: 2 }, value: 0 }
  }
};

module.exports = MockBinaryTree;
