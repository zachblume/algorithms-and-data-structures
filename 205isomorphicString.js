/**
 * 205. Isomorphic Strings
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but a
* character may map to itself.
 * @param {string} s - renamed to a
 * @param {string} t - renamed to b
 * @return {boolean}
 */
var isIsomorphic = function (a, b) {
  if (a.length !== b.length) return false;

  let aX = "", bX = "", hashForA = [], hashForB = [], aCounter = 0, bCounter = 0;
  for (let i = 0; i < a.length; i++) {
    let charA = a[i], charB = b[i];

    if (hashForA[charA] == undefined) {
      hashForA[charA] = aCounter;
      aCounter++;
    }
    aX += hashForA[charA] + "|";

    if (hashForB[charB] == undefined) {
      hashForB[charB] = bCounter;
      bCounter++;
    }
    bX += hashForB[charB] + "|";
  }
  console.log({ aX, bX });
  return aX == bX;
};

/* Better solution! */
var isIsomorphic = (a, b) => {
  if (a.length !== b.length) return false;

  let a2b = [], b2a = [];
  for (let i = 0; i < a.length; i++) {
    let aChar = a[i], bChar = b[i];
    if(
        (a2b[aChar] || b2a[bChar])
        &&
        (a2b[aChar] !== bChar || b2a[bChar] !== aChar)
    ) return false;
    if (!a2b[aChar]) a2b[aChar]=bChar;
    if (!b2a[bChar]) b2a[bChar]=aChar;
  }
  return true;
};