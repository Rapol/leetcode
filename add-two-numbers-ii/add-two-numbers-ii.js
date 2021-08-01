/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curL1 = l1;
    let curL2 = l2;
    let n1 = '';
    let n2 = '';
    // build each number as a string
    while(curL1 || curL2) {
        if(curL1) {
            n1 += curL1.val;  
        }
        if(curL2) {
            n2 += curL2.val;
        }
        curL1 = curL1 ? curL1.next : null;
        curL2 = curL2 ? curL2.next : null;
    }
    const sum = BigInt(n1) + BigInt(n2);
    const result = new ListNode();
    const sumString = sum.toString();
    // build result linked list by iterating sum as a string
    sumString.split('').reduce((acc, cur, index) => {
        acc.val = Number(cur);
        if(index !== sumString.length -1) {
            acc.next = new ListNode()
        }
        return acc.next;
    }, result);
    return result
};