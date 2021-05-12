'use strict';
/* ORIGINAL CHALLENGE
Algorithms: Implement Quick Sort
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/
function quickSort(array) {
  // change code below this line
  if (array.length <= 1) {
    return array;
  }
  const [pivot, less, more] = [array.pop(), [], []];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    curr < pivot ? less.push(curr) : more.push(curr);
  }

  return quickSort(less).concat(pivot, quickSort(more));
}

const speedTest = require('../../common/speedTest.js');
const test = require('../../common/test.js');

// 3.5ms
console.log(speedTest(20, quickSort));
test(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]), [
  1,
  1,
  2,
  2,
  4,
  8,
  32,
  43,
  43,
  55,
  63,
  92,
  123,
  123,
  234,
  345,
  5643,
]);

// quickSort([1,2,3,4,2,3,4,2]);
// console.log(quickSort([1,2,4,5,7,2,4,6,7,3,2,1]));
// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

/*
quickSort is a function.
quickSort returns a sorted array (least to greatest).
quickSort returns an array that is unchanged except for order.
quickSort should not use the built-in .sort() method.
*/
