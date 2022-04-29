const { NotImplementedError } = require('../extensions/index.js');


/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n)
let newStr
let num = 0
  // throw new NotImplementedError('Not implemented');
  for (let i = 0; i < str.length; i++) {
    newStr = str.slice(0, i) + str.slice(i + 1)
    if (Number(newStr) > num) {
      num = Number(newStr)
    }
  }
  return num
}

module.exports = {
  deleteDigit
};
