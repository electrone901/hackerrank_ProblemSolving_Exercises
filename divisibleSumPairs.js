/*

You are given an array of  integers.Find and print the number of  pairs 
where  i < j and  ar[i]+ ar[j] is divisible by k.

For example, [1,2,3,4,5,6] and k=5 
Our three pairs meeting the criteria are: [1,4] [2,3], [4,6] 
because the sum of them % k===0

Function Description

Complete the divisibleSumPairs function in the editor below. 
It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array 
ar: an array of integers
k: the integer to divide the pair sum by

PSEUDO CODE: 
 1 - let i=0 loop throught ar
 2 - let j=1 loop throught ar
 3 - i < j
 4 - ar[i] + ar[j]) % k ===0 : counter++
 5 - return counter 
 
*/
function divisibleSumPairs(ar, k) {
	let counter = 0;
	for(let i=0; i<ar.length; i++) {
		for(let j=1; j<ar.length; j++) {
			if(i < j) {
				if((ar[i] + ar[j]) % k ===0) {
					counter++;
				}
			}
		}
	}
	return counter;
} 
divisibleSumPairs([1,3,2,6,1,2] ,3)
