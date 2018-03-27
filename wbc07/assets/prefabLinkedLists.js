'use strict';

const prefab = module.exports = {
  looping: {
    head: {
      value: 3,
      next: {
        value: 5,
        next: null
      }
    }
  },
  nonlooping: {
    head: {
      value: 3,
      next: {
        value: 5,
        next: null
      }
    }
  }
};

prefab.looping.head.next.next = prefab.looping.head;
