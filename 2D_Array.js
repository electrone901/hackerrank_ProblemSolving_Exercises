/*
Write a function that defines an hourglass in  to be a subset of values with indices falling in 
this pattern in 's graphical representation:
a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

In this case
	  y=0 y=1 and so on
x=0		1 1 1 0 0 0
x=1		0 1 0 0 0 0
so on..	1 1 1 0 0 0
		0 0 0 0 0 0
		0 0 0 0 0 0
		0 0 0 0 0 0
*/

function hourglassSum(arr) {
	let max = 0;
	for (let x = 0; x < 4; x++) {
		for(let y = 0; y < 4; y++) {
			let a = arr[x][y];
			let b = arr[x][y+1];
			let c = arr[x][y+2];
			let d = arr[x+1][y+1];
			let e = arr[x+2][y];
			let f = arr[x+2][y+1];
			let g = arr[x+2][y+2];
			let sum = a + b + c + d + e + f + g;

			if(sum > max) {
				max = sum;
			}
		}
	}
	return max;
}