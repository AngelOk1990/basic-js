const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError('Not implemented');
 let count = 0
 let idx

 for (let i = 0; i < s1.length; i++) {
   idx = s2.indexOf(s1.charAt(i))
   if(idx > -1) {
     count ++
     s2 = s2.slice(0, idx) + s2.slice(idx + 1, s2.length)
   }
 }
 return count
}

module.exports = {
  getCommonCharacterCount
};
