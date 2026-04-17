/**
 * @param {number[]} nums
 * @return {number}
 */

// O (n^2)
var singleNumber = function (nums) {
  for (let i of nums) {
    let n = 0
    for (let j of nums) {
      if (i === j) ++n
    }

    if (n === 1) return i
  }
};

// var singleNumber = function(nums) {
//   let result = 0;

//   for (let num of nums) {
//     result ^= num;
//   }

//   return result;
// };
// res= a^a = 0  (a^0 = a) (O(n))