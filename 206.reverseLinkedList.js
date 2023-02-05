/**
 * 206. Reverse Linked List
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let tmp, prev;
  let node = head;
  while (node) {
    // Temporarily store next pointer
    tmp = node;
    cursor = node.next;

    // Reverse next pointer
    node.next = prev ? new ListNode(prev?.val, prev?.next) : null;

    // Move forward
    node = cursor;
    prev = tmp;
  }
  return tmp;
};
