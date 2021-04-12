/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [...names];
  for (let i = 1; i < names.length; i++) {
    for (let j = 0; j < i; j++) {
      let count = 0;
      for (let x = 0; x < i; x++) {
        if (names[i] === names[x]) {
          count++;
        }
      }
      if (names[i] === arr[j]) {
        if (names[i] === names[j]) {
          arr[i] = `${arr[i]}(${count})`;
        } else {
          arr[i] = `${arr[i]}(1)`;
        }
      }
    }
  }
  return arr;
}

module.exports = renameFiles;
