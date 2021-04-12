/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = [...arr];
  const myarr = arr.filter((item) => item !== -1);
  myarr.sort((a, b) => a - b);
  arr1.forEach((element, index) => {
    if (element === -1) {
      myarr.splice(index, 0, element);
    }
  });
  return myarr;
}

module.exports = sortByHeight;
