// 2696. Minimum String Length After Removing Substrings
function minLength(s: string): number {
  // You are given a string s consisting only of uppercase English letters.
  // You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
  // Return the minimum possible length of the resulting string that you can obtain.
  // Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
  // 
  // Because they never overlap, theres no point in choosing to not remove it.
  // So you must always remove it when you find it.
  // So we can just iterate through backwards, removing them as wel go, and return remaining len
  let currentString = s
  while(currentString != currentString.replaceAll(/(AB|CD)/g,"")){
      currentString = currentString.replaceAll(/(AB|CD)/g,"")
  }
  return currentString.length
};