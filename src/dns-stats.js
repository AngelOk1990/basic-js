const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  return domains.reduce((result, item) => {
   let arr = item.split('.')
   let arrReverse = []
   for (let i = 0; i < arr.length; i++) {
    for (i = 0; i < arr.length; i++) {
      arrReverse[i] = arr[(arr.length - 1) - i]
   }
   }
   let world = ''
   for (let name of arrReverse) {
     world += `.${name}`
     if(!result[world]) {
       result = {...result, [world]: 1}
     } else {
      result = {...result, [world]: result[world] + 1}
     }
   }
   return result
  }, {})
}

module.exports = {
  getDNSStats
};
