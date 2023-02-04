/**
 * 21. Merge Two Sorted Lists
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (a, b) {
  if (!a ?? !b) return a ? a : b
  // Make left less than or equal to right
  let left = null, right = null;
  if (a.val <= b.val) { left = a, right = b; }
  else { left = b, right = a; }

  // Store head for end
  let head = left;

  // Go until we run out
  while (left && right) {
    if (left?.next?.val <= right?.val) {
      // Move forward
      left = left.next
    } else {
      // Unshift right node into left list
      left.next = new ListNode(right.val, left.next);
      right = right.next;
    }
  }
  if (right) left.next = right;

  // Return new head node of merged lists,
  return head;
};