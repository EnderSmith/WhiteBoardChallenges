'use strict';

const BinaryTree = require('../model/bi-tree');

const binaryTreeCompare = function(treeA, treeB) {
  if (!treeA || !treeB) throw new Error(`Error: Invalid input: ${treeA}, ${treeB}`);
  if (!treeA.hasOwnProperty('root') || (treeA.hasOwnProperty('left') && treeA.hasOwnProperty('right'))) throw new Error(`Error: Invalid input: ${treeA}, ${treeB}`);
  if (!treeB.hasOwnProperty('root') || (treeB.hasOwnProperty('left') && treeB.hasOwnProperty('right'))) throw new Error(`Error: Invalid input: ${treeA}, ${treeB}`);

  if(!treeA.root || !treeB.root) return (treeA.toString() === treeB.toString());
  return (treeA.inOrderTraversal_checkStructure().toString() === treeB.inOrderTraversal_checkStructure().toString())
};

module.exports = binaryTreeCompare;
