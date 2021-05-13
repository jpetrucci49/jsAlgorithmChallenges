'use strict';
/* ORIGINAL CHALLENGE
Algorithms: Implement Selection Sort
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let least = i;
    for (let j = i + 1; j < array.length; j++) {
      array[j] < array[least] && (least = j);
    }
    [array[i], array[least]] = [array[least], array[i]];
  }
  return array;
}
// console.log(selectionSort([1,2,5,4,3,5,2,4,5]))

const speedTest = require('../../common/speedTest.js');
const test = require('../../common/test.js');

// 14.55ms
console.log(speedTest(20, selectionSort));
test(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]), [
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

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

/*
selectionSort is a function.
selectionSort returns a sorted array (least to greatest).
selectionSort returns an array that is unchanged except for order.
selectionSort should not use the built-in .sort() method.
*/
