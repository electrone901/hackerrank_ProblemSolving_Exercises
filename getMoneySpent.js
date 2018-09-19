/*
Monica wants to buy a keyboard and a USB drive from her favorite electronics store. 
The store has several models of each. Monica wants to spend as much as possible for the  items, 
given her budget.

Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the 
amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, 
print -1 instead. She will buy only the two required items.

For example, suppose she has  to spend. Three types of keyboards cost . Two USB drives cost . She could 
purchase a , or a . She chooses the latter. She can't buy more than  items so she can't spend exactly.

Function Description

Complete the getMoneySpent function in the editor below. It should return the maximum total price for the two items within Monica's budget, or  if she cannot afford both items.

getMoneySpent has the following parameter(s):

keyboards: an array of integers representing keyboard prices
drives: an array of integers representing drive prices
b: the units of currency in Monica's budget

============= PSEUDO CODE:  =======
	1 - loop through k = keyboard's array: outside
	2 - loop through u = usb's array: inside
	3 - check temp = k[i] + u[j] <= budget then check max
		3.1 - if(temp > max) max =temp
	4 - check if max == 0 then return max else return max;

*/

function getMoneySpent(keyboards, drives, b) {
    let max =0;
    for(let i=0; i<keyboards.length; i++) {
        for(let j=0; j<drives.length; j++) {
            let temp =keyboards[i] + drives[j];
            if( temp<= b) {
                if(temp > max) max = temp;
            }
        }
    }
    if(max == 0) {
        return -1;
    }
    else return max;
}
getMoneySpent(10,[3,1,2],[5,2,8]);//9












