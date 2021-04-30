'use strict';
/* ORIGINAL CHALLENGE
Write a function

function solution(A);

that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// This is a faster call at O(N*log(N)) or O(N), as the array is only looped once
// function solution(A) {
//     return A.reduce((a,e,i,ar) => {
//         a[e] ? a.count-- : a[e] = true;
//         return a;
//     }, {count: A.length}).count;
// }

/************ REFACTOR with filter **********/

// function solution(A) {
//     return A.filter((e,i,ar) => ar.indexOf(e) === i).length;
// }

/*********** REFACTOR to one line using function expression. **********/
// This is actually slower at O(N**2) because of the call to ar.indexOf() re-looping the array.
const distinct = (A) => A.filter((e, i, ar) => ar.indexOf(e) === i).length;

const test = require('../common/test.js');

test(distinct([2, 1, 1, 2, 3, 1]), 3); // The number of unique values in the string is 3. 1, 2 and 3.
