/*
Write a function that it takes an array of integers and 
adds one to it.
i.e:
	[9,9,9] => [1,0,0,0]
	[1,2,9] => [1,3,0]
*/

function addOne(ar) {
	let carry = 1;
	for(let i = ar.length -1; i >= 0; i--) {
		let sum = ar[i] + carry;
		if(sum === 10) {
			carry = 1;
		} 
		else {
			carry = 0;
		}
		ar[i] = sum % 10;
	}

	if(carry === 1) {
		// it will take at least o(n) to copy the old data to a new block of memeory
		ar.unshift(1)
	}
	return ar;
}