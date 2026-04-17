/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function (heights) {
  const expect = heights.toSorted((a, b) => a - b);
  let x = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expect[i]) { x++; }
  }

  return x;
};
