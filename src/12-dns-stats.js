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
  let arr = [];
  const obj = {};
  arr = domains.map((element) => element.split('.').reverse());
  arr.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (i === 0) {
        if (obj[`.${element[i]}`]) {
          obj[`.${element[i]}`] = obj[`.${element[i]}`] + 1;
        } else obj[`.${element[i]}`] = 1;
      } else {
        let item = '';
        for (let j = 0; j <= i; j++) {
          item = `${item}.${element[j]}`;
        }
        if (obj[`${item}`]) {
          obj[`${item}`] = obj[`${item}`] + 1;
        } else obj[`${item}`] = 1;
      }
    }
  });
  return obj;
}

module.exports = getDNSStats;
