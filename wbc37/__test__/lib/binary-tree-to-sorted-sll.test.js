'use strict';

require('jest');

const binaryToSortedSLL = require('../../lib/binary-tree-to-sorted-sll');
const MockBinaryTree = require('../mock/bi-tree');

describe('binaryToSortedSLL()', () => {
  describe('valid input', () => {
    it('returns sorted SLL', () => {
      const mBT = new MockBinaryTree();
      expect(binaryToSortedSLL(mBT.exampleA)).toMatchObject(mBT.exampleA_sortedSLL);
      expect(binaryToSortedSLL(mBT.exampleB)).toMatchObject(mBT.exampleB_sortedSLL);
    });
    it('returns sorted SLL with duplicates and non consecutive bi-tree', () => {
      const mBT = new MockBinaryTree();
      expect(binaryToSortedSLL(mBT.exampleC)).toMatchObject(mBT.exampleC_sortedSLL);
    });
    it('returns null for empty bi-tree', () => {
      const mBT = new MockBinaryTree();
      expect(binaryToSortedSLL(mBT.emptyBinaryTree)).toBeNull();
    });
  });
  describe('invalid input', () => {
    it('throws for undefined', () => {
      const mBT = new MockBinaryTree();
      expect(() => { binaryToSortedSLL() }).toThrow('input');
    });
    it('throws for non BinaryTree input', () => {
      const mBT = new MockBinaryTree();
      expect(() => { binaryToSortedSLL(1) }).toThrow('input');
      expect(() => { binaryToSortedSLL({obj:'ect'}) }).toThrow('input');
    });
  });
});
