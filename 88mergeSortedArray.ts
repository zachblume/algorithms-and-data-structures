// https://leetcode.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // m+n is originial nums1.length, n is original nums2.length
  let j = m - 1;
  let k = n - 1;
  // Go backwards through m+n steps, filling nums1 backwards
  // with whichever arr has the bigger item, using j as cursor for nums1
  // and k as cursor for nums2
  for (let i = m + n - 1; i >= 0; i--) {
    if (nums1[j] >= nums2[k] || k < 0) {
      nums1[i] = nums1[j]
      j--
    } else {
      // Move the second arr to the first one, decrement
      nums1[i] = nums2[k]
      k--
    }
  }
};
