const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const month = ['winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn (fall)', 'autumn (fall)', 'autumn (fall)']
 
 function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  let result = date.getMonth()
  return month[result]
}

module.exports = {
  getSeason
};
