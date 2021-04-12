/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  let tmp = l;
  let rootNode;
  let parent;
  while (tmp) {
    if (tmp.value !== k) {
      if (!rootNode) {
        rootNode = new ListNode(tmp.value);
        parent = rootNode;
      } else {
        parent.next = new ListNode(tmp.value);
        parent = parent.next;
      }
    }
    tmp = tmp.next;
  }
  return rootNode;
}

module.exports = removeKFromList;
