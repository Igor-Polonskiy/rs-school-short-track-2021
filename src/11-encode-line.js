/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str2 = '';
  let sum = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      if (i === str.length - 1) {
        str2 = `${str2}${sum + 1}${str[i - 1]}`;
      } else sum++;
    } else if (str[i] !== str[i - 1]) {
      if (sum > 1) {
        str2 = `${str2}${sum}${str[i - 1]}`;
      } else str2 = `${str2}${str[i - 1]}`;
      if (i === str.length - 1) {
        str2 = `${str2}${str[i]}`;
      } else sum = 1;
    }
  }
  return str2;
}

module.exports = encodeLine;
