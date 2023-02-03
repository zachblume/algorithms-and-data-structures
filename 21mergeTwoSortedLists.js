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
var mergeTwoLists = function (head1, head2) {
  // Make left less than or equal to right
  if (head1.val <= head2.val) { let left = head1, right = head2; }
  else { let left = head2, right = head1; }
  // Go until we run out
  while ((typeof left !== "undefined") || (typeof right !== "undefined")) {
    if (left.next.val <= right.val) {
      // Move forward
      if (left.next) left = left.next
      else { return left }
    } else {
      // Unshift right node into left list
      let tmp = left.next;
      left.next = new ListNode(right.val, null);
      right = right.next;
    }
  }
  return left;
};