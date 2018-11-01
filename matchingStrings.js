/*
Write a function that takes a long and short string and returns the mumber of times
the short appears in the long: i.e:
long = 'wowomgzomg';
short = 'omg';

PSEUDO CODE:
	 - outter => loop through the long str
	 - inner => loop through the short str
	 - check if the str[i] === str[j] if so increase i+j
	 - check if j === short.length -1 if so counter++
	 At the end of the outer loop return count
*/

function matchLongShortStr(long, short) {
	let counter = 0;
	for(let i =0; i < long.length; i++) {
		for(let j=0; j < short.length; j++) {
			if( short[j] !== long[i + j]) break;
			if(j === short.length-1) counter++;
		}
	}
	return counter;
}
matchLongShortStr('wowomgzomg', 'omg') // => 2