'use strict';
/* ORIGINAL CHALLENGE
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

// function solution(A) {
//     return A.reduce((a, e, i, ar) => {
//         while (isNaN(a)) {
//             if (a[e]) {
//                 ar.splice(1);
//                 return 0;
//             } else {
//                 a[e] = true;
//                 a.total ? a.total += e : a.total = e;
//                 e > a.max || !a.max ? a.max = e : '';
//             }
//             return i === ar.length-1
//                 ? a.max * (a.max+1) / 2 !== a.total
//                     ? 0
//                     : 1
//                 : a;
//         }
//         ar.splice(1);
//         return a;
//     }, {});
// }

/************ REFACTOR, while loop un-needed **************/

function permCheck(A) {
  return A.reduce((a, e, i, ar) => {
    if (a[e]) {
      ar.splice(1);
      return 0;
    }
    a[e] = true;
    a.total ? (a.total += e) : (a.total = e);
    e > a.max || !a.max ? (a.max = e) : '';
    return i === ar.length - 1 ? ((a.max * (a.max + 1)) / 2 !== a.total ? 0 : 1) : a;
  }, {});
}

const test = require('../common/test.js');

test(permCheck([4, 1, 2, 3]), 1);
test(permCheck([4, 1, 3]), 0);
