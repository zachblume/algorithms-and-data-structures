/**
 * 1480. Running Sum of 1d Array
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (nums[i - 1] || 0);
  }
  return nums;
};
