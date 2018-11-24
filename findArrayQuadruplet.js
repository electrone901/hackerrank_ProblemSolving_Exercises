/*
Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function 
findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum 
up to s. Your function should return an array of these numbers in an ascending 
order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. 
You’re asked to return the first one you encounter (considering the results 
are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

Example:

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)


  PSEUDO CODE:
  1: check if array < 4 return []
  2: sort the array to used as `BST concept`
  3: You need 2 loops for i, j var
  4: but also you need start & end var 
  5: since we need 4 var:
      i=0 to n-3
      j=i+1 to n-2
      start = j+1 to less than end
      end = n-1
  7: var r = s - (ar[i] + ar[j])
  6: use a while loop to make a subarray:
      - while(start < end) {
          if(ar[start] + ar[end] < r) start++
          else if(ar[start] + ar[end] > r) end--
          else return [i,j, start, end] `in ascending order`
      }

  NOTES:
    OUTER LOOP RUN FIRST AND WAITS TIL 
      THE INNER LOOP FINISHES
        BUT BEFORE INNER LOOP FINISH 
          HAS TO WAIT FOR THE WHILE LOOP TO FINISH:
    i=0 loop has to wait til 
      j < n-2 so before i can increament i has to finish
        but before j finish has to do the while loop 
          and while(start < end) the while loop will continue til start >= end 
          





*/

function findArrayQuadruplet(ar, s) {
  var n = ar.length;
  if(n < 4) {
    return [];
  }
  
  ar = ar.sort();
  for(var i=0; i < n-3; i++) {
    for(var j=i+1; j < n-2; j++) {
      var r = s - (ar[i] + ar[j]);
      var start = j+1;
      var end = n-1;
      while(start < end) {
        if((ar[start] + ar[end]) < r) {
          start++;
        }
        else if((ar[start] + ar[end]) > r) {
          end--;
        }
        else {
          var a = [ar[i],ar[j],ar[start],ar[end]];
          a.sort((a,b) => { return a-b});
          return a;
        }
      }
    }
  }
  return [];
}

  
  
  