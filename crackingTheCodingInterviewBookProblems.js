/* Page 70
 * 'There is an O(N) algorithm!'
 * Given a smaller string s and a bigger string b, design an
 * algorithm to find all permutations of the shorter string
 * within the longer one. Print the location each permutation.
 */
const findPermutations = (needle, haystack) => {
  // Store a array of location solutions
  let locations = [];

  // This is a named constraint that helps us get to O(haystack)
  // instead of O(needle) because: needle < haystack = true
  if (needle.length > haystack.length) console.error("But the book promised!!");

  // Let's make a hash of the needle characters and their presence count
  let needleHash = new Map();
  Array.from(needle).forEach((char) =>
    needleHash.set(char, needleHash.has(char) ? needleHash.get(char) + 1 : 1)
  );

  // Store a moving window's counter/cursor
  let cursor = new Map();

  // Loop through again for cursor/counter magic
  for (let i = 0; i < haystack.length; i++) {
    // Get the current character at this haystack position
    let char = haystack[i];

    // If this character is present in the needle
    if (needleHash.has(char)) {
      // Then increment the current for this character
      cursor.set(char, cursor.has(char) ? cursor.get(char) + 1 : 1);
    }

    // Let's clearly define the window begin position and store its character
    // If i = 3 and needle.length = 4, then windowBeginIndex = 0 and windowBeginChar = haystack[0]
    let windowBeginIndex = i - needle.length + 1;
    let windowBeginChar = haystack[windowBeginIndex];

    // If the current cursor matches the needleHash, then this is the last item of a solution
    // So let's add a solution to the locations array, i.e. of needle.length character back
    if (compareMaps(cursor, needleHash)) locations.push(windowBeginIndex);

    // If the windowBeginChar is in the cursor, we need to decrement the cursor by the windowBeginChar
    if (i >= needle.length - 1 && cursor.has(windowBeginChar)) {
      cursor.set(windowBeginChar, cursor.get(windowBeginChar) - 1);
    }
  }

  return locations;
};

// A little Map comparison method
// Since the hash length (i.e., # of chars in the alphabet)
// has no relation to N, this is O(1)
var compareMaps = (a, b) => {
  if (a.size !== b.size) return false;
  for (let [key, val] of a) {
    // If second Map doesn't has key, the Maps don't match
    if (!b.has(key)) return false;
    // If the values of each map don't match on this key, ditto
    if (val !== b.get(key)) return false;
  }
  return true;
};

// Example from book
let needle = "abbc";
let haystack = "cbabadcbbabbcbabaabccbabc";
let result = findPermutations(needle, haystack);
console.log(result);
