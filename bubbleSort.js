/*
WRITE BUBLE SORT FUNCTION THAT IT TAKES AN UNSORTED ARRAY AND RETURNS IT SORTED

	PSEUDO CODE:
		 - we gonna have 2 loops one keeps the track of the outside or i
		 - an d the other loop takes care of the inner  = j
		 - i = ar.length so that we have the full pass the first time and for every iteration decrease i
		 - j < i-1 cause we want to shrink as i gets smaller
		 - noSwaps will help us to keep track if we don't swap we break
*/

function bubbleSort(ar) {
	let noSwaps;
	for(let i=ar.length; i > 0; i--) {
		noSwaps = true;
		for(let j=0; j<i-1; j++) {
			if(ar[j] > ar[j+1]) {
				let temp = ar[j];
				ar[j] = ar[arj+1];
				ar[j+1] = temp;
				noSwaps = false;
			}

		}
		if(noSwaps) break;
	}
}