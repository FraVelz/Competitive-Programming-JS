/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let i = 0;

  for (let e of hours) {
    if (e >= target) { ++i }
  }

  return i;
};

//  Menos eficiente, crea un array en memoria
// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//   return hours.filter(h => h >= target).length;
// };
