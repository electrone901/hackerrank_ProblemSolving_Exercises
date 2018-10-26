/*

John Watson knows of an operation called a right circular rotation on an array of integers. 
One rotation operation moves the last array element to the first position and shifts all 
remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an 
array of integers. Sherlock is to perform the rotation operation a number of times then determine 
he value of the element at a given position.

For each array, perform a number of right circular rotations and return the value of the element 
at a given index.

For example, array , number of rotations,  and indices to check, . 
First we perform the two rotations: 
 
Now return the values from the zero-based indices  and  as indicated in the  array. 
 

======== PSEUDO CODE ===
The Actual vision of the problem is to solve it by without
 actually making any rotations, because rotation takes 
 more time and space. Thats why you may get timeout errors 
 if you try to solve it by rotations. We gotta have to 
 solve it by doing calculations. 
 Example: write a simple
  logic to determine what will be the output after k rotations
  if K is equal to N then no rotations needed coz the array will 
  be the same as original after rotations.

  STEPS:
  	1 - 
*/
function isBalanced(srt) {
	if(str === null) {
		console.log(true);
	}

	let str = str.split('');
	let stack = [];

	for(let i=0; i < str.length; i++) {
		if(isParenthesiss(str[i])) {
			if(isOpenParenthesis(str[i])) {
				stack.push(str[i]);
			}
			else {
				if(stack.length === 0) {
					return console.log(false);
				}
				let top = stack.pop(); //pop off the top
				if(!matches(top, str[i])) {
					return console.log(false);
				}
			}
		}
	}
}

function  isParenthesiss(char) {
	let str = '{}[]()';
	if(str.indexOf(char) > -1) {
		return true;
	}
	else {
		return false;
	}
}

function isOpenParenthesis(openChar) {
	let str = '({[';
	for(let i=0; i < str.length; i++) {
		if()
	}
}















