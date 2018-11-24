/*
Write a function that takes a matrix and returns the bigest square 
you can form.
*/

function largestSquare(matrix) {
	let cache = matrix.slice();
	let result = 0;

	for(let i=0; i<matrix.length; i++) {
		for(let j=0; j<matrix[i].length; j++) {

			if(i == 0 || j==0) { continue}
			else if(matrix[i][j] > 0) {
				cache[i][j] = 1 + Math.min(cache[i][j-1], cache[i-1][j], cache[i-1][j-1]);
			}
			if(cache[i][j] > result) {
				result = cache[i][j];
			}
		}
	}
	return result;
}
largestSquare(matrix = [
  [1,1,0,1,0],
  [0,1,1,1,0],
  [1,1,1,1,0],
  [0,1,1,1,1]
]);