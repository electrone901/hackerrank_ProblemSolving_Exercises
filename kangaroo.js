/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

For example, kangaroo  starts at  with a jump distance  and kangaroo  starts at  with a jump distance of . After one jump, they are both at , (, ), so our answer is YES.

Function Description

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2

*/

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    var counter =0;
    var k1 = x1;
    var k2 = x2;
    var answer = "";
    
    //check if k1<k2 && v1<v2 then "NO"
    if(k1 < k2 && v1 < v2) {
        answer = "NO";
        return answer;
    }
    
    // loop through 
    for(var i=0; i<10000; i++) {
        k1 += v1;
        k2 += v2;
        if(k1 == k2) {
            counter++;
            break;
        }
    }
    // check for counter!=0 if true print "YES"
    if(counter !=0) {
        answer = "YES";
        return answer;
    }
    else {
        answer = "NO";
        return answer;
    }
}