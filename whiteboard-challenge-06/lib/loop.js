`use strict`;

const loop = module.exports = function(count, callback) {
  if ( !(typeof callback === "function" && typeof callback.nodeType !== "number") ) {
    return;
  }
  if ( count === 0 || count > 50 || isNaN(count) ) {
    return;
  }
  count--;
  callback();
  loop(count, callback);
};
