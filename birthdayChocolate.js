// Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. 
// She decides to share a contiguous segment of the bar selected such that the length of the segment 
// matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. 
// You must determine how many ways she can divide the chocolate.

// Consider the chocolate bar as an array of squares
// She wants to find segments summing to Ron's birth day,  with a length equalling his birth 
// onth, . In this case, there are two segments meeting her criteria:  and .

// Sample Input 0

// arr =  1 2 1 3 2
// target =3  slices=2
// Sample Output = 2 because: arr[0]+ a[1] = target , arr[1]+ a[2] = target ✓✓

function birthday(arr, target, slices) {
	var counter =0;
	var sum =0;
	for(var i=0; i<arr.length; i++) {
		var startIndex = i;
		for(var j=0; j<slices; j++) {
			sum += arr[startIndex + j];
		}
		if(sum == target) {
			counter++;
		}
		sum =0;
	}
	return counter;
}
birthday([1,2,1,3,2],3,2);