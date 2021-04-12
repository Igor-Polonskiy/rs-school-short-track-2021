/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mymatrix = [];
  matrix.forEach((element, index) => {
    mymatrix[index] = [];
    element.forEach((e, i) => {
      mymatrix[index][i] = 0;
    });
  });
  matrix.forEach((element, index) => {
    element.forEach((e, i) => {
      if (e === true) {
        if (index === 0 && i === 0) {
          mymatrix[index + 1][i]++;
          mymatrix[index + 1][i + 1]++;
          mymatrix[index][i + 1]++;
        } else if (index === 0 && i === element.length - 1) {
          mymatrix[index + 1][i]++;
          mymatrix[index + 1][i - 1]++;
          mymatrix[index][i - 1]++;
        } else if (index === 0 && i > 0 && i < element.length - 1) {
          mymatrix[index + 1][i]++;
          mymatrix[index + 1][i - 1]++;
          mymatrix[index][i - 1]++;
          mymatrix[index + 1][i + 1]++;
          mymatrix[index][i + 1]++;
        } else if (index === matrix.length - 1 && i === 0) {
          mymatrix[index - 1][i]++;
          mymatrix[index - 1][i + 1]++;
          mymatrix[index][i + 1]++;
        } else if (index === matrix.length - 1 && i === element.length - 1) {
          mymatrix[index - 1][i]++;
          mymatrix[index - 1][i - 1]++;
          mymatrix[index][i - 1]++;
        } else if (index === matrix.length - 1 && i > 0 && i < element.length - 1) {
          mymatrix[index - 1][i]++;
          mymatrix[index - 1][i - 1]++;
          mymatrix[index][i - 1]++;
          mymatrix[index - 1][i + 1]++;
          mymatrix[index][i + 1]++;
        } else if (i === 0) {
          mymatrix[index - 1][i]++;
          mymatrix[index - 1][i + 1]++;
          mymatrix[index][i + 1]++;
          mymatrix[index + 1][i + 1]++;
          mymatrix[index + 1][i]++;
        } else if (i === element.length - 1) {
          mymatrix[index - 1][i]++;
          mymatrix[index - 1][i - 1]++;
          mymatrix[index][i - 1]++;
          mymatrix[index + 1][i - 1]++;
          mymatrix[index + 1][i]++;
        } else {
          mymatrix[index - 1][i]++;
          mymatrix[index - 1][i + 1]++;
          mymatrix[index - 1][i - 1]++;
          mymatrix[index + 1][i]++;
          mymatrix[index + 1][i + 1]++;
          mymatrix[index + 1][i - 1]++;
          mymatrix[index][i + 1]++;
          mymatrix[index][i - 1]++;
        }

        // mymatrix[index][i] = 0;
      }
    });
  });
  return mymatrix;
}

module.exports = minesweeper;
