/*
Island Count

Given a 2D array binaryMatrix of 0s and 1s, implement a function 
getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell 
in binaryMatrix is considered adjacent to another cell if they are next to each 
either on the same row or column. Note that two values of 1 are not part of the 
same island if they’re sharing only a mutual “corner” (i.e. they are diagonally 
neighbors).

Explain and code the most efficient solution possible and analyze its time and 
space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.

This problem is very similar to counting the number of connected components in an
Undirected Graph. However, Graph Theory isn’t necessary to solve this problem 
or to understand its solution. In an undirected graph, a connected component 
is a group of vertices in which every vertex is connected to at least one other 
vertex. In a similar way, an island in the matrix is a group of adjacent 
(connected) 1s.

## PSEUDO CODE:
To solve this problem:
	1: traverse the matrix and if(cell == 1) then
		- Change that cell and all its vertically and horizontally 
		  (but not diagonally) adjacent 1s into -1s this is to avoid 
		  recounting of islands.

	2: Increment islands++
	3: Expanding from a cell whose value is 1 to other adjacent 1s in Matrix is 
	   similar to running a Breadth-First Search (BFS) or a Depth-First Search (DFS).

	4: In our case, we’ll avoid using a recursion and instead opt for an 
	   iterative approach to expand to all adjacent 1s. We do so by using queue 
	   that holds the next indices to visit. We keep expanding to other 
	   adjacent 1s as long as the queue is not empty. Whenever we encounter a 
	   value of -1 in our traversal, we ignore it since it is part on an island we’ve already counted.

*/

function getNumberOfIslands(matrix) {

	var rows = matrix.length;
	var cols = matrix[0].length;
	var islands = 0;

	for(var i=0; i < rows; i++) {
		for(var j=0; j < cols; j++) {
			if(matrix[i][j] == 1) {
				markIslands(matrix, rows, cols, i, j);
				islands++;
			}
		}
	}

}
function  markIslands(matrix, rows, cols, i, j) {
	var q = [];
	q.push(i,j);

	while(q.length > 0) {
		var item = q.pop();
		var x = item[0];
		var y = item[1];

		if(matrix[x][y] == 1) {
			matrix[x][y] = -1;
			pushIfValid(q, rows, cols, x-1, y);
			pushIfValid(q, rows, cols, x+1, y);
			pushIfValid(q, rows, cols, x, y-1);
			pushIfValid(q, rows, cols, x, y+1);
		}

	}
}

function pushIfValid(q, rows, cols, x-1, y) {
	if(x >= 0 && x < rows && y >= 0 && y < cols) {
		q.push([x, y]);
	}
}

getNumberOfIslands([ 
	[0,    1,    0,    1,    0],
	[0,    0,    1,    1,    1],
	[1,    0,    0,    1,    0],
	[0,    1,    1,    0,    0],
	[1,    0,    1,    0,    1] 
]); //=> 6







