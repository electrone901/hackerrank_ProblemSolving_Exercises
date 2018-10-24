/*
An integer  is a divisor of an integer  if the remainder of .

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for ,  is a divisor of  each time it occurs so the answer is ).

Function Description

Complete the findDigits function in the editor below. It should return an integer representing the number of digits of  that are divisors of .

findDigits has the following parameter(s):

n: an integer to analyze
Input Format

The first line is an integer, , indicating the number of test cases. 
The  subsequent lines each contain an integer, .
	

	PSEUDO:
	 - take the numb and convert it to str & split by character
	 - then loop through it, convert current element to number 
	 	& check if the reminder  = 0 if true counter++;
	 - return counter

*/


function findDigits(n) {
    let str = n.toString().split('');
    let counter = 0;
    for(let i=0; i<str.length; i++) {
     let convertToNumb = parseInt(str[i]);
        if(n % convertToNumb === 0) {
            counter++;
        }
    }
    return counter;
}



