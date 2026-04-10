/**
 * @param {string} s
 * @return {number}
 */

var scoreOfString = function (s) {
  let res = 0

  for (let i = 1; i < s.length; ++i) {
    res += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
  }

  return res
};

// Optimización minima (no recalcula el charcodeat)
var scoreOfString2 = function (s) {
  let res = 0
  let prev = s.charCodeAt(0)

  for (let i = 1; i < s.length; ++i) {
    const curr = s.charCodeAt(i)
    res += Math.abs(curr - prev)
    prev = curr
  }

  return res
};

