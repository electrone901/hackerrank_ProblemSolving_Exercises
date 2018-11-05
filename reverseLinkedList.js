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
		let temp = cur;
		cur = temp.next;
		temp.next = prev;
		prev = temp;
	}
	return prev;
}
reverseLinkedList(head.val);
