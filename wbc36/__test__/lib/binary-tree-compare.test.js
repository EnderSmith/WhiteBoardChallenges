'use strict';

require('jest');

const binaryTreeCompare = require('../../lib/binary-tree-compare');
const MockBinaryTree = require('../mock/bi-tree');

describe('binaryTreeCompare()', () => {
  describe('valid input', () => {
    it('returns true if trees have matching stucture', () => {
      const mBT = new MockBinaryTree();
      expect(binaryTreeCompare(mBT.exampleA, mBT.exampleA)).toBe(true);
      expect(binaryTreeCompare(mBT.exampleB, mBT.exampleB)).toBe(true);
      expect(binaryTreeCompare(mBT.exampleC, mBT.exampleC)).toBe(true);
    });
    it('returns false if trees dont have matching stucture', () => {
      const mBT = new MockBinaryTree();
      expect(binaryTreeCompare(mBT.exampleA, mBT.exampleB)).toBe(false);
      expect(binaryTreeCompare(mBT.exampleB, mBT.exampleC)).toBe(false);
      expect(binaryTreeCompare(mBT.exampleC, mBT.exampleA)).toBe(false);
    });
  });
  describe('invalid input', () => {
    it('throws for undefined', () => {
      const mBT = new MockBinaryTree();
      expect(() => { binaryTreeCompare() }).toThrow('input');
      expect(() => { binaryTreeCompare(mBT.exampleA) }).toThrow('input');
      expect(() => { binaryTreeCompare(undefined, mBT.exampleA) }).toThrow('input');
    });
    it('throws for non BinaryTree input', () => {
      const mBT = new MockBinaryTree();
      expect(() => { binaryTreeCompare(mBT.exampleA, {obj:'ect'}) }).toThrow('input');
      expect(() => { binaryTreeCompare({obj:'ect'}, mBT.exampleB) }).toThrow('input');
      expect(() => { binaryTreeCompare({obj:'ect'}, {obj:'ect'}) }).toThrow('input');
    });
  });
});
