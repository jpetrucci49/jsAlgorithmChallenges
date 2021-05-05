'use strict';
/* ORIGINAL CHALLENGE
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
*/
/* slow double loop method
function solution(A) {
    let passes = 0;
    let target = A[0];
    for(i in A) {
		if (A[i] == target){
			for (let j = i; j < A.length; j++){
				if (A[j] != target){
					passes++
				}
			}
		}
        A[i] === 0 ? target++ : passes+=target;
    }
    return passes > 1000000000 ? -1 : passes;
}
*/
/******* REFACTOR *********/

// function solution(A) {
//     let passes = 0;
//     let target = 0;
//     for(i in A) {
//         A[i] === 0 ? target++ : passes+=target;
//     }
//     return passes > 1000000000 ? -1 : passes;
// }

/***** Round 2 *******/

function passingCars(A) {
  return A.reduce(
    (a, e, i, ar) => {
      if (a.overflow) {
        a.passed = -1;
        ar.splice(1);
        return a;
      }
      e === 0 ? a.carTally++ : (a.passed += a.carTally);
      a.passed > 1000000000 ? (a.overflow = true) : '';
      return a;
    },
    { carTally: 0, passed: 0 },
  ).passed;
}

const test = require('../common/test.js');

test(passingCars([0, 1, 0, 1, 1]), 5);
