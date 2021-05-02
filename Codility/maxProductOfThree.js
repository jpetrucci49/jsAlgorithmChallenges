'use strict';
/* ORIGINAL CHALLENGE
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

int solution(int A[], int N);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/
/*
These tests contain negative numbers, and the max product will be from positives,
So sort the Array with negatives in front, then multiply the first two with the last,
Then return the max of either that, or the last 3 in the array to return the maximum product.
*/

function maxProductOfThree(A) {
  if (A.length < 3) {
    throw new Error('Invalid input');
  }
  A.sort((a, b) => a - b);
  return Math.max(
    A[0] * A[1] * A[A.length - 1],
    A[A.length - 1] * A[A.length - 2] * A[A.length - 3],
  );
}

const test = require('../common/test.js');

test(maxProductOfThree([-3, 1, 2, -2, 5, 6]), 60);
