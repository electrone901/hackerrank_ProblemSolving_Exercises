/*

3478220676 nancy rivera
Array Index & Element Equality
The naive solution is to iterate over all the values in the input array and return an index i for which the condition arr[i] == i is met. This takes a linear, O(N), time complexity.

To do better, we should recognize that the sequence of i (array indices) and the sequence of arr[i] (array values) are both strictly monotonically increasing sequences. If we subtract i from both sides of the equation arr[i] = i we get arr[i] - i = 0.

While we can use this to define another array diffArr where diffArr[i] = arr[i] - i and perform a Binary Search for 0 in diffArr, it’s unnecessary. Instead, we can simply modify the binary search condition to arr[i] - i == 0 (instead of the condition diffArr[i] == 0).

So why is it important for the search condition to form a monotonically increasing sequence?

It’s important because otherwise there is no guarantee that the resulting sequence is sorted and binary search works only on sorted sequences. Recall that if an array consists of monotonically increasing values, then it’s sorted by definition (in an ascending order).

To make sure we found the first element that satisfies arr[i] - i == 0, if in the binary search process we find an element that satisfies arr[i] - i == 0, we proceed to check if its the first element in the array, or that the element before it does not satisfy the condition. If not - we continue with the binary search, since this is not the first element that satisfies the condition.

We can now proceed to implementing the algorithm.

Pseudocode:

function indexEqualsValueSearch(arr):
    start = 0
    end = arr.length - 1

    while (start <= end):
        i = round((start+end)/2)
        if (arr[i] - i < 0):
            start = i+1
        else if (arr[i] - i == 0) and ((i == 0) or (arr[i-1] - (i-1) < 0)):
            return i
        else:
            end = i-1

    return -1
Time Complexity: O(log(N)) since we use a binary search where the input size is reduced 
in half on each step. Calculating arr[i] - i as the condition instead of arr[i] is done
 in constant time and has no impact on the asymptotic time complexity.

Space Complexity: it’s O(1) since we’re only a constant amount of memory 
(i.e. the variables start and end).

for(var i = 0; i<ar.length; i++) {
    if(ar[i] > ar[i+1]) {
      flip(ar[i], ar[i+1])
    }
  }
  nancy rivera
*/


function indexEqualsValueSearch(ar) {
    let start = 0;
    let end = ar.length-1;

    while(start <= end) {
        let i = Math.floor((start+end)/2);
        if(ar[i] - i < 0) {
            start = i +1;
        }
        else if(ar[i] - i === 0) {
            return i;
        }
        else {
            end = i - 1;
        }
    }
    return -1;
}

indexEqualsValueSearch([-8,0,1,3,5]);










