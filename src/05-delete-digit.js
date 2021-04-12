/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr2 = str.split('');
  const arr = str.split('');

  arr.sort();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === arr[0]) {
      arr2.splice(i, 1);
      break;
    }
  }
  const num = Number(arr2.join(''));
  return num;
}

module.exports = deleteDigit;
