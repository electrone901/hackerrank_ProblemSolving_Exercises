/*
Given an array and a val remove all instances of the values = val
in place an return the new length. Don't llocate extra space, 
should be doing  with 0(1)

 i.e 
 ar = [3,2,2,3], val = 3
 return [2,2] => length = 2
*/

function removeElements(ar, val) {
	for(let i=0; i<ar.length; i++) {
		if(ar[i] === val) {
			ar.splice(i, 1);
		}
	}
	return ar.length;
}
removeElements([3,2,2,3], 3); //