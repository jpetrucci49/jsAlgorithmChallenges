'use strict'
/******** Selection sort — O(n**2) - The time complexity is quadratic.**************/
/*
Find the minimal element and swap it with the first element of an array. Next,
just sort the rest of the array, without the first element, in the same way.
Notice that after k iterations (repetition of everything inside the loop) the first k elements
will be sorted in the right order (this type of a property is called the loop invariant).
*/

const selectionSort = (A) => {
	const n = A.length;
	for (k in A){
		let minimal = k;
		for (let j = k * 1 + 1; j < n; j++){
			A[j] < A[minimal] ? minimal = j : '';
		}
		const temp = A[k];
		A[k] = A[minimal];
		A[minimal] = temp; // swap A[k] and A[minimal]
	}
	return A;
}

// console.log(selectionSort([1,3,2,29,2,11,32,1,2,3,2,34,4,5,5,6,6,7,8,6,5,4,4,4,5,5,56,6,6]));

/********  Counting sort — O(n + k) **************/
/*
First, count the elements in the array of counters (see chapter 2). Next, just iterate
through the array of counters in increasing order.
Notice that we have to know the range of the sorted values. If all the elements are in the
set {0, 1, . . . , k}, then the array used for counting should be of size k + 1. The limitation here
may be available memory.
*/
const countingSort = (A, k) => {
	const n = A.length;
	let count = new Array((k + 1)).fill(0)
	for (let i = 0; i < n; i++){
		count[A[i]] += 1;
	}
	let p = 0;
	for (let i = 0; i < (k + 1); i++){
		for (let j = 0; j < count[i]; j++){
			A[p] = i;
			p += 1;
		}
	}
	return A
}

// console.log(countingSort([1,3,2], 3)) // the 3 here represents the max value.

/************ Merge sort - O(n log n).********/
/*
Divide the unsorted array into two halves, sort each half separately and then just
merge them. After the split, each part is halved again.
We repeat this algorithm until we end up with individual elements, which are sorted by
definition. The merging of two sorted arrays consisting of k elements takes O(k) time; just
repeatedly choose the lower of the first elements of the two merged parts.
The length of the array is halved on each iteration. In this way, we get consecutive levels
with 1, 2, 4, 8, . . . slices. For each level, the merging of the all consecutive pairs of slices requires
O(n) time. The number of levels is O(log n), so the total time complexity is O(n log n) (read
more at http://en.wikipedia.org/wiki/Merge_sort).
*/


// Split the array into halves and merge them recursively
function mergeSort (arr) {
	if (arr.length === 1) {
	// return once we hit an array with a single item
		return arr;
	}

	const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
	const left = arr.slice(0, middle); // items on the left side
	const right = arr.slice(middle); // items on the right side

	return merge(
	    mergeSort(left),
    	mergeSort(right)
	);
}

// compare the arrays item by item and return the concatenated result
const merge = (left, right) => {
	const result = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < left.length && indexRight < right.length) {
		if (left[indexLeft] < right[indexRight]) {
			result.push(left[indexLeft]);
			indexLeft++;
		} else {
			result.push(right[indexRight]);
			indexRight++;
	    }
	}
	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]


/*********** Exercise **************/
/*
Problem: You are given a zero-indexed array A consisting of n > 0 integers; you must return
the number of unique values in array A.
Solution O(n log n): First, sort array A; similar values will then be next to each other.
Finally, just count the number of distinct pairs in adjacent cells.
*/

// const distinct = (A) => {
// 	const n = A.length;
// 	A.sort((a, b) => a - b);
// 	let result = 1;
// 	for (let i = 1; i < n; i++){
// 		if (A[i] != A[i - 1]){
// 			result += 1;
// 		}
// 	}
// 	return result;
// }

const distinct = (A) => {
	return mergeSort(A).reduce((a,e,i,ar) => {
		if (!a[e]) {
			a[e] = 1;
			a.count++;
		}
		return a
	}, {count: 0}).count
}
console.log(distinct([2,1,2,3,4,5,3,4])) // 5 unique values

/**************
const countingSort = (array, max) => {
	const counts = new Array(max + 1);
	counts.fill(0);
	array.forEach(value => counts[value]++);

	const result = [];
	let resultIndex = 0;

	counts.forEach((count, index) => {
		for (let i = 0; i < count; i++) {
			result[resultIndex] = index;
			resultIndex++;
		}
	});

	return result;
};

mocha.setup("bdd");
const { assert } = chai;

describe("Counting Sort", () => {
	it("Should implement counting sort", () => {
		assert.deepEqual(countingSort([4, 3, 2, 1, 0], 4), [0, 1, 2, 3, 4]);
		assert.deepEqual(countingSort([4, 3, 1, 2, 3], 4), [1, 2, 3, 3, 4]);
	});
});

mocha.run();
******************/
