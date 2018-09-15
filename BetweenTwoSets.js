// Between Two Sets
// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

// For example, given the arrays  and , there are two numbers between them:  and . , ,  and  for the first value. Similarly, ,  and , .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// a: an array of integers
// b: an array of integers

// Pseudo Code:
   // 1 - Find minimum from array a
   // 2 - Find max from array b
   // 3 - loop throught (i= minA; i<maxB; i++)
   // 4 - check if every element isFactorOf: i % ele ===0
   // 5 - check if every element isFactorFor: ele % i ===0
   // 6 - if it is increament the counter
   // 7 - return counter


function getTotalX(a, b) {
	let minA = Math.min(...a);
	let maxB = Math.max(...b);
	let counter = 0;
	let isFactorOf = (ele, i) => i % ele ===0;
	let isFactorFor = (ele, i) => ele % i ===0;

	for(let i = minA; i <= maxB; i++) {
		if(a.every(ele => isFactorOf(ele,i))) {
			if(b.every(ele => isFactorFor(ele, i))) {
				counter++;
			}
		}
	}
	return counter;
}
getTotalX([2,4], [16,32,96]); // => output: 3
