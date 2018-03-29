'use strict';

const BinaryTree = require('../../model/bi-tree');
const SLL = require('../../model/sll');

class MockBinaryTree {
  constructor() {
    this.emptyBinaryTree = new BinaryTree();
    this.exampleA = new BinaryTree();
    this.exampleB = new BinaryTree();
    this.exampleC = new BinaryTree();
    this.exampleD = new BinaryTree();

    this.exampleA.root = { left: null, right: null, value: 0 };
    this.exampleB.root = { left: null, right: { left: null, right: null, value: 1 }, value: 0 };
    this.exampleC.root = { left: { left: null, right: null, value: 1 }, right: { left: { left: null, right: null, value: 3 }, right: null, value: 2 }, value: 0 }
    this.exampleD.root = { left: { left: null, right: null, value: 0 }, right: { left: { left: null, right: null, value: 2 }, right: { left: null, right: null, value: 100 }, value: 2 }, value: 50 }

    this.exampleA_sortedSLL = new SLL();
    this.exampleB_sortedSLL = new SLL();
    this.exampleC_sortedSLL = new SLL();
    this.exampleD_sortedSLL = new SLL();

    this.exampleA_sortedSLL.head = { value: 0, next: null };
    this.exampleB_sortedSLL.head = { value: 0, next: { value: 1, next: null } };
    this.exampleC_sortedSLL.head = { value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: null } } } };
    this.exampleD_sortedSLL.head = { value: 0, next: { value: 2, next: { value: 2, next: { value: 50, next: { value: 100, next: null } } } } };

  }
};

module.exports = MockBinaryTree;
