/*
ARRAY METHODS THAT YOU SHOULD KNOW
*/

// FOREACH(): this method loops over arrays 
const  ar = [1,2,3,4,5];
arr.forEach(item => {
	console.log(item);
});


// INCLUDES(): checks if array includes item
const  ar = [1,2,3,4,5];
ar.includes(2); // => true
ar.includes(100); // => false



// FILTER(): creates new array with only elements passed conditios inside the providing function
// TASK: filter items greater than 3
const  ar = [1,2,3,4,5];
const filtered = ar.filter(num => num > 3);
console.log(filter); // => [4,5,6]



// MAP(): creates new array by calling provided function in every element
// TASK: add 1 to every element
const  ar = [1,2,3,4,5];
const oneAdded = ar.map(num => num +1);
console.log(oneAdded); // => [2, 3, 4, 5, 6]


// REDUCE(): applies a function against an accumulator to each element and reduce it to a single value
const  ar = [1,2,3,4,5];
const sum = ar.reduce((total, value) => total + value, 0);
console.log('sum', sum); // => 15


// SOME(): checks if at least one element passed the condition returns true :. false
const  ar = [1,2,3,4,5];
const largeNum = ar.some(num => num >4);
const smallNum = ar.some(num => num <= 0);
console.log('largeNum', largeNum);
console.log('smallNum', smallNum);













