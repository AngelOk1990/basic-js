const { NotImplementedError } = require('../extensions/index.js');
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
//  let cats = []
function countCats(matrix) {
  let count = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    if(matrix[i][j] === '^^') {
    count += 1
    }
    // break
  }
  }
  return count;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//     if(matrix[i][j] === '^^') {
//       cats.push(matrix[i][j]);
//     }
//     if (cats.length === 0) {
//       return '0'
//     }
//   }
// }
//   return cats.length;
}

module.exports = {
  countCats
};
