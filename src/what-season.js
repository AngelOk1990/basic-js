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
 
 function getSeason(date) {
   let result
   let index = date.getMonth()
   if (!date) {
    return 'Unable to determine the time of year!'
  }
    if (!(date instanceof Date)) { 
   throw new Error('Invalid date!') 
  }
   if (index < 2 || index > 10) {
    result = 'winter'
  } if (index >= 2 && index <= 4) {
    result = 'spring'
  } if (index >= 5 && index <= 7) {
    result = 'summer'
  }
  if (index >= 8 && index <= 10) {
    result = 'autumn(fall)'
  
}
return result
}

module.exports = {
  getSeason
};
