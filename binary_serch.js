/**
 * Performs a binary search on the  array. This method can either be
 * @param {*} searchElement The item to search for within the array.
 * @return {Number} The index of the element which defaults to -1 when not found.
 */


var list = [10,12,7,9,0,100];

function binary_serch(ar, value) {
	let high = ar.length - 1;
	let low = 0;
	let mid = 0;

	while(low <= high) {
		mid = Math.floor((low+high/2));
		if(value === ar[mid]) {
			return ar[mid];
		}
		else if(value > ar[mid]) {
			low = mid +1;
		}
		else {
			high = mid -1;
		}
	}
	return -1;
}
list.sort((a,b) => {
	return a-b;
})
console.log('list', list);
console.log(binary_serch(list, 1));

