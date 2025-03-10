const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
 let valid = true;
 if (!n instanceof Array || n.length === 0) {
   return false;
 }
   for (let i = 0; i < n.length; i++) {
     let elements = n[i].split(':');
     if (elements == 6) {
     for (let j = 0; j < elements.length; j++) {
       if (elements[j].length == 2) {
return true
       } else {
         return false
        }
     }
 }
}
}
module.exports = {
  isMAC48Address
};
