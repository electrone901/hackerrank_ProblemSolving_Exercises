/*
Time Planner
Implement a function meetingPlanner that given the availability, slotsA and 
slotsB, of two people and a meeting duration dur, returns the earliest time 
slot that works for both of them and is of duration dur. If there is no common 
time slot that satisfies the duration requirement, return an empty array.

Time is given in a Unix format called Epoch, which is a nonnegative integer 
holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 
1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an 
epoch array of size two. The first epoch in a pair represents the start time of 
a slot. The second epoch is the end time of that slot. The input variable dur is 
a positive integer that represents the duration of a meeting in seconds. 
The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability 
are disjointed, i.e, time slots in a person’s availability don’t overlap. 
Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.

Examples:

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: []

		NOTES:
		This problem test how you think about looping through each item and 
		compare them agaist each other. The idea is to compare every 
			sA[i][0], sB[j][0] and sA[i][1], sB[j][1] and take the max & min.

		PSEUDO CODE:
			1: loop through the array and compare each element agaist the others
			2: use iA, iB =0 to loop through a while loop:
				2.1:  while(iA < sA.length && iB < sB.length)
				2.2: get start = Max(sA[iA][0], sB[iB][0])
				2.3: get end = Min(sA[iA][1], sB[iB][1])
	        3: check if(d <= start - end) if true then return start, start + d
	        4: increament the smaller  if(sA[iA][1] < sB[iB][1]) iA++
	        5: else iB++
	        6: return [] // if nothing match the time 

*/

function meetingPlanner(sA, sB, dur) {
	let iA = 0;
	let iB = 0;
	while(iA < sA.length && iB < sB.length) {
		let start = Math.max(sA[iA][0], sB[iB][0]);
		let end = Math.min(sA[iA][1], sB[iB][1]);
		if(dur <= end - start) {
			return [start, start + dur];
		}
		if(sA[iA][1] <sB[iB][1]) {
			iA++
		}
		else {
			iB++;
		}
	}
	return [];
}
