'use strict';
/* ORIGINAL CHALLENGE
Algorithms: Implement Bubble Sort
This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

function bubbleSort(array) {
  // change code below this line
  let finished = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      // same as ---
      // const temp = array[i];
      // array[i] = array[i+1];
      // array[i+1] = temp;
      finished = false;
    }
  }
  return finished ? array : bubbleSort(array);
  // change code above this line
}
// console.log(bubbleSort([1,3,2,1,2,3,4,1,1,3,4,5,7,9,0,1,1,1,1,1,]))
// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
/*
bubbleSort is a function.
bubbleSort returns a sorted array (least to greatest).
bubbleSort returns an array that is unchanged except for order.
bubbleSort should not use the built-in .sort() method.
*/
const bubbleSort2 = (array) => {
  if (array.length < 2) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }
  const last = array.splice(array.length - 1);
  return bubbleSort2(array).concat(last);
};
const bubbleSort3 = (array) => {
  if (array.length < 2) {
    return array;
  }
  let least = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    if (array[i] < array[least]) {
      least = i;
    }
  }
  const smallest = array.splice(least, 1);
  const largest = array.splice(array.length - 1);
  return smallest.concat(bubbleSort3(array)).concat(largest);
};
// console.log(bubbleSort2([1,2,4,5,6,3,2,4,5,6,4,3,3,5,6,7,77,6,2]))

const speedTest = require('../../common/speedTest.js');

// 700ms
console.log(speedTest(20, bubbleSort));

// 300ms
console.log(speedTest(20, bubbleSort2));

// 200ms
console.log(speedTest(20, bubbleSort3));
