/**
 * Write a function that takes head of link list and n position from the end list 
   and returns the head.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeToReturn = head;
    let pointer1 = head;
    let pointer2 = head;
    
    //loops n times, in this case loops 2 times. 
    //Now  pointer2 = pointer2.next.next, pointer2.val = 3           
    for(let i = 0; i<n; i++) {
        pointer2 = pointer2.next;
        console.log('i',i, 'val', pointer2.val);
        console.log('pointer2', pointer2)
    }
    
    // if pointer2 does't exist thenremove the head of the list
    if(!pointer2) {
        return nodeToReturn.next;
    }
    
    // Move both pointers until pointer2 reach the end
    while(pointer2.next) {
        
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    
    // Now pointer1 is 1 node before the n to remove 
    // so we just assign pointer1.next = pointer1.next.next
    pointer1.next = pointer1.next.next;
    return nodeToReturn;
};
