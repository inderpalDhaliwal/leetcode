/* Merge Two sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to serve as the head of the merged list
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1; // Append the smaller node from list1 to the merged list
            list1 = list1.next; // Move the list1 pointer forward
        } else {
            current.next = list2; // Append the smaller node from list2 to the merged list
            list2 = list2.next; // Move the list2 pointer forward
        }
        current = current.next; // Move the current pointer forward
    }

    // If there are remaining nodes in list1 or list2, append them to the merged list
    if (list1 !== null) {
        current.next = list1;
    }
    if (list2 !== null) {
        current.next = list2;
    }

    // Return the head of the merged list, which is the next node after the dummy node
    return dummy.next;
}