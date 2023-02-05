/**
 * @param {string} s
 * @return {number}
 */
let hash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let number = 0;
  for (let i = s.length - 1; i > -1; i--) {
    let char = s[i];
    let prev = s[i - 1];
    let two = prev + char;
    switch (two) {
      case "IV":
        number += 4;
        i--;
        break;
      case "IX":
        number += 9;
        i--;
        break;
      case "XL":
        number += 40;
        i--;
        break;
      case "XC":
        number += 90;
        i--;
        break;
      case "CD":
        number += 400;
        i--;
        break;
      case "CM":
        number += 900;
        i--;
        break;
      default:
        number += hash[char];
        break;
    }
  }
  return number;
};
