/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

	PSEUDO CODE:
	- first check if head === null then break and return null

	- otherwise do:
		- set cur = head, prev = null
		- use a while loop that check if cur exist than iterate and do the following 
		  inside the loop
		  	- var temp = cur
		  	- move the cur to the next: cur = temp.next
		  	- assign temp.next to be the prev
		  	- assign pre to be the temp or the previous node
		- outside the while loop return prev which is the head in our new list
*/
class Node{
  constructor(val, next = null){
    this.val = val
    this.next = next
  }
}

function reverseLinkedList(head) {
	if(head === null) return null;

	let prev = null;
	let cur = head;

	while(cur) {
		// saves cur to be use for next iteration
		let temp = cur;
		// moves cur to next
		cur = temp.next;
		// assign next to prev
		temp.next = prev;
		// assign pre to cur node
		prev = temp;
	}
	return prev;
}
reverseLinkedList(head.val);



// recursively
var reverseLinkedListRecursively = function(head) {
	if(!head) return null;

	let reverse = (cur, prev) => {
		// assigning last node to the head
		if(cur.next === null) {
			head = cur;
			head.next = prev;
			return head;
		}
		// otherwise we call reverse again until cur.next = null
		let next = cur.next;
		cur.next = prev;
		reverse(cur, prev);
	}
	// calling reverse 
	reverse(head, null);
	return head;
}









