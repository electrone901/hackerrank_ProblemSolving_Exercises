/*
Write a function that takes an sorted array and returns 
the sum of two items equals to 0;
*/

function sumZero(ar) {
  let left = 0;
  let right = ar.length -1;
  while(left < right) {
    let sum = ar[left] + ar[right];
    if(sum === 0) {
      return [ar[left], ar[right]];
    }
    else if(sum > 0) {
      right--;
    }
    else {
      left++;
    }
  }
}
sumZero([-2,-1, 0, 1,3]);  //=> [-1,1]