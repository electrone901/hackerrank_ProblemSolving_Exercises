/*
The way sort works is depending in the condition:
 if a < b then print a first meaning smallest firt  1 < 5 yes so =>  1, 5 => ascending
 if a > b then bigger numbers first because a > b :. 1 > 5 no so print => 5,1  => descending 
 
*/

function sorted(ar) {
  ar.sort((a,b) => a > b ? -1: 1);
  console.log(ar);
  ar.sort((a,b) => a < b ? -1: 1);
  console.log(ar)
}
sorted([4,12,8]);