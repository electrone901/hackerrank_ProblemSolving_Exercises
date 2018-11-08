/*
Write a function that takes 2 linked lists and
returns the intersetion node.
*/

var getIntersectionNode = function(headA, headB) {
	if(!headA || headB) return null;
	console.log(o);

	var p1 = headA;
	var p2 = headB;

	while(p1 & p2 p1 !== p2) {
		p1 = p1.next;
		p2 = p2.next;

		// if p1 equals p2 returns p1, then goes back to the while 
		// loop then it checks and it cannot longer meet the criteria so it needs to return p1;
		if(p1 === p2) return p1;
		if(!p1) p1 = headB;
		if(!p2) p2 = headA;
	}
	return p1;

}