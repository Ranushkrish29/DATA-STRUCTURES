// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order, and each 
//     of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//     Example :
//   2 -->  4 --> 3 
//   5 -->  6 --> 4 
// ------------------
//   7 -->  0 --> 8 
// Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 243 + 564 = 708.

//program

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * param {ListNode} l1
 * param {ListNode} l2
 * return {ListNode}
 */
var addtwolinkedlist = function (l1, l2) {
    let sum = 0,
        dummyhead = new ListNode(0),
        result = dummyhead;

    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        dummyhead.next = new ListNode(sum % 10);
        dummyhead = dummyhead.next;
        sum = sum > 9 ? 1 : 0;
    }
    if (sum) {
        dummyhead.next = new ListNode(sum);
    }
    return result.next;
}

//output



///converting given list to  linked list 

function addtwolinkedlistfun(list1, list2) {
    let linkedlist1, linkedlist2;
    for (let i of list1) {
        console.log(i);
    }
}

console.log(addtwolinkedlistfun([2, 4, 3], [5, 6, 4]))//[  7 -->  0 --> 8  ]
console.log(addtwolinkedlistfun([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))//[ 8 --> 9 --> 9 --> 9 --> 0 --> 0 --> 0 --> 1 ]

