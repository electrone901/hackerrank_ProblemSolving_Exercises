/*
Largets Sum Contiguous Subarray
Write an efficient program to find the sum of contiguous subarray within 
one dimensional array of numbers which has the largest sum   
        E.g:
        ar = [-2, -3, 4, -1, -2, 1, 5, -3]
        ANSWER: 7

        PSEUDOCODE

*/

const ar = [-2, -3, 4, -1, -2, 1, 5, -3];
const sumMax = (ar) => {
    let max = 0;
    let temp = 0;

    for(let i = 0; i < ar.length; i++) {
        temp += ar[i];
        if(temp < 0) temp = 0;
        else if(max < temp) max = temp;
    }
    return max;
}
console.log(sumMax(ar)); //SHOULD RETURN 7
