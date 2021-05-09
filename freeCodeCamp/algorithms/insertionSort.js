'use strict';
/* ORIGINAL CHALLENGE
Algorithms: Implement Insertion Sort
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

console.log(insertionSort([1, 2, 3, 3, 6, 3, 2, 1, 3, 1, 8, 4, 7, 3, 2, 4]));

const speedTest = require('../../common/speedTest.js');

// 700ms
console.log(speedTest(20, insertionSort));

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

/*
insertionSort is a function.
insertionSort returns a sorted array (least to greatest).
insertionSort returns an array that is unchanged except for order.
insertionSort should not use the built-in .sort() method.
*/
