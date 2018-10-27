/*
Write a function that takes a string and counts the number of 
letters and numbers contains the string:
i.e:
	'programming is fun 100!'
	=> { '0': 2,
		  '1': 1,
		  p: 1,
		  r: 2,
		  o: 1,
		  g: 2,
		  a: 1,
		  m: 2,
		  i: 2,
		  n: 2,
		  s: 1,
		  f: 1,
		  u: 1 
		}
*/

function charCount(str) {
	let hash = {};
	for(let char of str) {
		char = char.toLowerCase();
		if(/[a-z0-9]/.test(char)) {
		// set the char to 1 or adds 1 if the hash[char] exist
			hash[char] = ++hash[char]|| 1;
		}
	}
	return hash;
}
charCount('programming is fun 100!') ;

