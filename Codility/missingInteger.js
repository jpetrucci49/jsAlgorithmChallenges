'use strict';
/* ORIGINAL CHALLENGE
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function missingInteger(A) {
  var count = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      count[A[i]] = true;
    }
  }
  for (i = 1; i <= count.length; i++) {
    if (!count[i]) {
      return i;
    }
  }
  return 1;
}

const test = require('../common/test.js');

test(missingInteger([1, 3, 6, 4, 1, 2]), 5);
test(missingInteger([1, 2, 3]), 4);
test(missingInteger([-1, -3]), 1);
