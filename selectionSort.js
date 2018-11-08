/*
Write a functionSort that takes an array and returns the array sorted.

NOTES:
	 - selectionSort works by finding the index of the smallest item's value and assigning to the 
	   smallest and update them in the array.

PSEUDO CODE: 
		- declare smallest;
		- compare the every element to each other and reassign smallest item's value and at the end 
		  of every pass update them.
*/

	

function selectionSort(ar) {
	let len = ar.length;
	let smallest;

	for(let i = 0; i < len; i++) {
		smallest = 1;
		for(let j = i+1; j<len; j++) {
			if(ar[j] < ar[smallest]) {
				smallest = j;
			}
		}

		// checks if the indexes are not the same swap
		if(i !== smallest) {
			let temp = ar[i];
		   	ar[i] = ar[smallest];
		   	ar[smallest] = temp;
		}
	}
	return ar;
}
selectionSort([5,3,4,1,2,0]); //=> [ 0, 1, 2, 3, 4, 5 ]


