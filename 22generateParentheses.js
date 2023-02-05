/**
 * 22. Generate Parentheses
 * Given n pairs of parentheses, write a function to generate all
 * combinations of well-formed parentheses.
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Edge cases
  if (n < 1) return [];
  if (n == 1) return ["()"];

  let solutions = [];

  // Closures
  let nextLevel = generateParenthesis(n - 1);
  solutions.push(...nextLevel.map((a) => "(" + a + ")"));
  solutions.push(...nextLevel.map((a) => "()" + a));
  nextLevel.forEach((a) => {
    if (!isBalanced(a)) solutions.push(a + "()");
  });

  return solutions;
};
function isBalanced(s) {
  return s.replaceAll("()", "") == "";
}
