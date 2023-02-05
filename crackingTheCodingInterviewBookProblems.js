/* Page 70
 * 'There is an O(N) algorithm.'
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

  // Let countmap
  let needleHash = [];

  // Loop through the haystack and make a hash
  for (let i = 0; i < needle.length; i++) {
    // Get the current character at this haystack position
    let char = neelde[i];

    //
    if (!needleHash[char]) needleHash[char] = [];
    needleHash[char][i] = true;
  }

  // Loop through again for cursor/counter magic
  for (let i = 0; i < haystack.length; i++) {
    // Get the current character at this haystack position
    let char = haystack[i];

    // If this character is present in the needle...
    if (hash[char]) {
      // Start a cursor at this positions
      cursor[i];
    }
  }

  // locations = haystackCounterHash.filter()
  console.log({ hash });

  return locations;
};

// Example from book
let needle = "abbc";
let haystack = "cbabadcbbabbcbabaabccbabc";
let result = findPermutations(needle, haystack);
console.log(result);
