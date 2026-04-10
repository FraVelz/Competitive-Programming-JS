/**
 * @param {string[]} operations
 * @return {number}
 */

var finalValueAfterOperations = function (operations) {
  let x = 0

  for (e of operations) {
    if (e[1] === '+') ++x
    else --x
  }

  return x
};