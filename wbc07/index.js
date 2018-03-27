'use strict';

const linkedListLoops = require('./lib/linkedListLoops');

module.exports = function main(linkedList) {
  try {
    linkedListLoops(linkedList);
  } catch (error) {
    console.error(error);
  }
};
