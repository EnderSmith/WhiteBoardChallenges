'use strict';

const SLL = require('../model/sll');

const binaryTreeToSortedSLL = function(tree) {
  if (!tree) throw new Error(`Error: Invalid input: ${tree}`);
  if (!tree.hasOwnProperty('root')) throw new Error(`Error: Invalid input: ${tree}`);

  const sortedSLL = new SLL();

  const treeArray = tree.inOrderTraversal_var();

  if (!treeArray) return null;

  treeArray.sort((a, b) => a - b).forEach(element => {
    sortedSLL.insertEnd(element);
  });

  return sortedSLL;
};

module.exports = binaryTreeToSortedSLL;
