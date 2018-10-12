/*
Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to . For example, if your array is , you can create two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

pickingNumbers has the following parameter(s):

a: an array of integers
Input Format

The first line contains a single integer , the size of the array . 
The second line contains  space-separated integers .

Constraints

The answer will be .
Output Format

A single integer denoting the maximum number of integers you can choose from the array such that the absolute difference between any two of the chosen integers is .

Sample Input 0

INPUT 
4 6 5 3 3 1
Sample Output 0

OUTPUT: 3



EXPLANATION:
THIS PROBLEMS IT IS EASIER IF WE PUT IN TERMS OF FREQUENCY OF APPARENCE AND SINCE WE KNOW THE RANGE IS FROM 0 - 1 WE CAN DEDUCE
THAT IN ORDER TO GET 0 OR 1 WE CAN ONLY USE NUMBERS THAT ARE NEXT TO EACH OTHER AND THE MAX IS BASED ON THE NUMBER OF APPARENCE.

PSEUDO CODE: 

1 - Make a dictionarySet = {}
2 - Loop through the array:
	2.1 - check if dictionarySet[ar[i]] doesn't exist then dictionarySet[ar[i]] = 1;
	2.2 - if dictionarySet[ar[i]] exist then dictionarySet[ar[i]]++
3 - Now that you have the dictionarySet loop from 1 - 101 because the elements in the array are less than 101
	3.1 - everytime you are looping check if the sum of frquency of  b[i] + b[i + 1] > max:
	3.2 - if it is true assign the max to the sum to max 
4 - return max

*/

var ar = [4, 6, 5, 3, 3, 1];
function pickingNumbSets(ar) {
	let obj= {};
    let max = 0;
    for(let i=0; i<a.length; i++) {
        if(!obj[a[i]]) {
            obj[a[i]] = 1;
        }
        else {
            obj[a[i]]++;
        }
    }
    
    for(let j=0; j<=100; j++) {
        if(obj[j] == undefined){
            obj[j] = 0;
            if(obj[j] + obj[j+1] > max) {
                max = obj[j] + obj[j+1];
            }
        }
        if(obj[j+1] == undefined) {
            obj[j+1] = 0;
            if(obj[j] + obj[j+1] > max) {
                max = obj[j] + obj[j+1];
            }
        }
        if(obj[j] + obj[j+1] > max) {
            max = obj[j] + obj[j+1];
        }
    }
    return max;
}
pickingNumbSets(ar);

