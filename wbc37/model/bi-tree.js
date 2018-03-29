'use strict';

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  inOrderTraversal_checkStructure() {
    if (!this.root) return null;
    return this._inOrderTraversal_checkStructure(this.root, []);
  }

  _inOrderTraversal_checkStructure(root, resultArray) {
    if (root === null) return null;

    let leftResult = this._inOrderTraversal_checkStructure(root.left, resultArray);
    if (leftResult !== null) resultArray.push('left');
    resultArray.push('root');
    let rightResult = this._inOrderTraversal_checkStructure(root.right, resultArray);
    if (rightResult !== null) resultArray.push('right');

    return resultArray;
  }

  inOrderTraversal_var() {
    if (!this.root) return null;
    return this._inOrderTraversal_var(this.root, []);
  }

  _inOrderTraversal_var(root, resultArray) {
    if (root === null) return null;

    let leftResult = this._inOrderTraversal_var(root.left, resultArray);
    let rightResult = this._inOrderTraversal_var(root.right, resultArray);

    resultArray.push(root.value);

    return resultArray;
  }
};

module.exports = BinaryTree;
