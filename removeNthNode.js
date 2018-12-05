/*
Given a linked list, remove the n-th node from the end of list and return its 
head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

	PSEUDO CODE: 	
		1: get the list length 
		2: if n == length remove first node and reassigned to head = head.next
		3: else loop till target = length - n & get previous and reassigned to 
		   pre.next 
		4: return the list

*/


var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    let length = 0;
    let cur = head;
    // get the length
    while(cur) {
        length++;
        cur = cur.next;
    }
    
    let current = head;
    // if length is equals to n remove the first node
    if(length === n) {
        head = current.next;
        current = null;
        return head;
        
    }
    // else remove loop till target and get the previous  
    else {
        let prev = null;
        let target = length - n;
        for(let i =1; i<=target; i++) {
            prev = current;
            current = current.next;  
        }
        prev.next = current.next;  
        let remove = current;
        return head;
    }
};