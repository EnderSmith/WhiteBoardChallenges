'use strict';

const SLL = require('../../../lib/sll');

class Mk {
  constructor() {
    this.emptySLL = new SLL();
    this.oneNodeSLL = new SLL();
    this.twoNodeSLL = new SLL();
    this.threeNodeSLL = new SLL();
    this.fourNodeSLL = new SLL;
    this.fiveNodeSLL = new SLL();

    this.emptySLL.head = null;
    this.oneNodeSLL.head = { value: 1, next: null };
    this.twoNodeSLL.head = { value: 0, next: { value: 1, next: null } };
    this.threeNodeSLL.head = { value: 0, next: { value: .5, next: { value: 1, next: null } } };
    this.fourNodeSLL.head = { value: 0, next: { value: 2, next: { value: 4, next: { value: 6, next: null } } } };
    this.fiveNodeSLL.head = { value: 1, next: { value: 3, next: { value: 5, next: { value: 7, next: { value: 9, next: null } } } } };
  }
}



module.exports = Mk;
