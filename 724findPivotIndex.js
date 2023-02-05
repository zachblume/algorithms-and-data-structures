/**
 * 724. Find Pivot Index
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to
 * the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are
 * no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = (nums) => {
  let prefixSum = [],
    postfixSum = [];
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;
    postfixSum[j] = (postfixSum[j + 1] || 0) + nums[j];
    prefixSum[i] = (prefixSum[i - 1] || 0) + nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;
    if ((prefixSum[i - 1] || 0) == (postfixSum[i + 1] || 0)) return i;
  }
  return -1;
};
