/*
Write a function that takes two strings and checks if they are an anagram

*/

function anagram(str1, str2){
	let lookup = {};
	if(str1.length !== str2.length) {
		return false;
	}

	for(let i=0; i < str1.length; i++) {
		let letter = str1[i];
		if(!lookup[letter]) {
			lookup[letter] = 1;
		}
		else {
			lookup[letter]+= 1;
		}
	} 

	for(let j=0; j < str2.length; j++) {
		let letter = str2[j];
		if(!lookup[letter]) {
			return false;
		}
		else {
			lookup[letter]--;
		}
	}
}
anagram('aaa','aan'); //false
