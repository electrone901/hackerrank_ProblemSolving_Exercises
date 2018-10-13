/*
A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

For example, there are  prisoners and  pieces of candy. The prisoners arrange themselves in seats numbered to . Let's suppose two is drawn from the hat. Prisoners receive candy at positions . The prisoner to be warned sits in chair number .

Function Description:Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

saveThePrisoner has the following parameter(s):

n: an integer, the number of prisoners
m: an integer, the number of sweets
s: an integer, the chair number to begin passing out sweets from

PSEUDO CODE:
1 - 

EXPLANATION: 
	Because we need to give a candy to each prisioner until we run out, we need to iterate a faster way is:
	 - to add numb of candies + startingPoint - 1 because we start giving sweets at prisoner[id-1]. 
	 - if you have more sweets than prisoners you go back to the startingpoint. you just need the rest, so use %.
	 	with "(sweets + (id-1)) % prisoners" you get the rest the reminder 
*/


function saveThePrisoner(p, c, s) {
    let calc = (c + s - 1) % p;
    if(calc % p === 0){
        return p;
    }
    else{
        return calc;
    }
}