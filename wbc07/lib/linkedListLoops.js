'use strict';


const linkedListLoops = module.exports = function(linkedList) {
  const err = new Error(`\n\nERROR: please input a linked list\n\tExample:\n\t{ head: { value: 3, next: { value: 1, next: null } } }\n`);
  if (typeof(linkedList) !== 'object') {
    throw err;
  } else if  (!linkedList.hasOwnProperty('head')) {
    throw err;
  } else if (!linkedList.head) {
    throw err;
  } else if (!linkedList.head.hasOwnProperty('next')) {
    throw err;
  }
  const ll = Object.assign({}, linkedList);
  let length = 0;
  let current = ll.head;
  while (!current.hasOwnProperty('flag')) {
    current.flag = true;
    if (current.next === null) {
      return false;
    }
    current = current.next;
  };
  return true;
}
