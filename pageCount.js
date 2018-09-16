/*
Function Description

Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.

pageCount has the following parameter(s):

n: the number of pages in the book
p: the page number to turn to
Input Format

The first line contains an integer , the number of pages in the book. 
The second line contains an integer, , the page that Brie's teacher wants her to turn to.

PSEUDO CODE:
 1 - find front = floor(p/2) => divide by 2 because every time you turn you adding 2 pages
 2 - find back = floor(n/2) - front  => divide by 2 because every turn you adding 2 and minus 
 			     						front because we are looking for the back. 
 3 - return the smallest between front and back

*/
function pageCount(n,p) {
	let front = Math.floor(p/2);
	let back = Math.floor(n/2) - front;
	if(front < back) {
		return front;
	} 
	else {
		return back;
	}
}
pageCount(5,4); //=> 0
// pageCount(6,2); //=> 1