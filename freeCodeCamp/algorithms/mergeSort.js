'use strict';
/* ORIGINAL CHALLENGE
Algorithms: Implement Merge Sort
Another intermediate sorting algorithm that is very common is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const subLeft = mergeSort(arr.slice(0, mid));
  const subRight = mergeSort(arr.slice(mid));

  const merge = (node1, node2) => {
    const result = [];
    while (node1.length > 0 && node2.length > 0) {
      result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    }
    return result.concat(node1.length ? node1 : node2);
  };
  return merge(subLeft, subRight);
}

// test array:
// console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

const speedTest = require('../../common/speedTest.js');
const test = require('../../common/test.js');

// 4ms
console.log(speedTest(20, mergeSort));
test(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]), [
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

/*
mergeSort is a function.
mergeSort returns a sorted array (least to greatest).
mergeSort returns an array that is unchanged except for order.
mergeSort should not use the built-in .sort() method.
*/
