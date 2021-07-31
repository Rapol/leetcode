function sumLinkedList(l1, l2, carry) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    const sum = l1Val + l2Val + carry;
    const newCarry = Math.floor(sum/10);
    const firstDigit = sum % 10;
    return {
        firstDigit,
        carry: newCarry,
    }
}

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
    const result = new ListNode();
    let curResult = result;
    let carry = 0;
    while(curL1 || curL2 || carry > 0) {
        const sumResult = sumLinkedList(curL1, curL2, carry);
        carry = sumResult.carry;
        curResult.val = sumResult.firstDigit
        curL1 = curL1 ? curL1.next : null;
        curL2 = curL2 ? curL2.next : null;
        if(curL1 || curL2 || carry > 0) {
            curResult.next = new ListNode();
            curResult = curResult.next;
        }
    }
    return result;
};