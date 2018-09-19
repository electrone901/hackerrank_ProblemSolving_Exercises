6
4 6 5 3 3 1
Sample Output 0

3
Explanation 0

We choose the following multiset of integers from the array: . Each pair in the multiset has an 
absolute difference (i.e.,  and ), so we print the number of chosen integers, , as our answer.

[4 6 5 3 3 1] divide this into elements that has absolute difference <= 1

 => [3 3 4]
 => [5 6]
 => [1]
 	return the max


function pickingNumbers(ar) {
	for(var i=0; i<ar.length; i++) {
		if(ar[i])
	}
}
pickingNumbers([4,6, 5, 3 ,3,1]);




// here
int pickingNumbers(int a_count, int* a) {
    int b[101] = {0};
    int i;

    for (i = 0; i < a_count; i++) {
        int j = a[i];
        b[j]++;
    }

    int max = 0;
    for (i = 1; i < 101; i++) {
        if (b[i] == 0) continue;
        if (b[i] + b[i + 1] > max) max = b[i] + b[i + 1];
    }

    return max;
}
