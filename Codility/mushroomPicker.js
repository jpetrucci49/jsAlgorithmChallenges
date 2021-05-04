'use strict';
/* ORIGINAL CHALLENGE
You are given a non-empty, zero-indexed array A of n (1 ¬ n ¬ 100 000) integers
a0, a1, . . . , an−1 (0 ¬ ai ¬ 1 000). This array represents number of mushrooms growing on the
consecutive spots along a road. You are also given integers k and m (0 ¬ k, m < n).
A mushroom picker is at spot number k on the road and should perform m moves. In
one move she moves to an adjacent spot. She collects all the mushrooms growing on spots
she visits. The goal is to calculate the maximum number of mushrooms that the mushroom
picker can collect in m moves.
For example, consider array A such that:
2 3 7 5 1 3 9
0 1 2 3 4 5 6
The mushroom picker starts at spot k = 4 and should perform m = 6 moves. She might
move to spots 3, 2, 3, 4, 5, 6 and thereby collect 1 + 5 + 7 + 3 + 9 = 25 mushrooms. This is the
maximal number of mushrooms she can collect.
Solution O(m2): Note that the best strategy is to move in one direction optionally followed
by some moves in the opposite direction. In other words, the mushroom picker should not
change direction more than once. With this observation we can find the simplest solution.
Make the first p = 0, 1, 2, . . . , m moves in one direction, then the next m − p moves in the
opposite direction. This is just a simple simulation of the moves of the mushroom picker
which requires O(m2) time.
Solution O(n+m): A better approach is to use prefix sums. If we make p moves in one direction,
we can calculate the maximal opposite location of the mushroom picker. The mushroom
picker collects all mushrooms between these extremes. We can calculate the total number of
collected mushrooms in constant time by using prefix sums
*/

// const prefix_sums = (x) => {
// 	const n = x.length;
// 	const P = new Array(n+1).fill(0);
// 	for (let i = 1; i < n + 1; i++){
// 		P[i] = P[i - 1] + x[i - 1]
// 	}
// 	return P
// }
// const count_total = (P, x, y) => P[y + 1] - P[x];

function mushrooms(A, k, m) {
  const n = A.length;
  let result = 0;
  const pref = A.reduce((a, e, i, ar) => {
    i === 0 ? a.push(0) : '';
    i === 0 ? a.push(e) : a.push(e + a[i]);
    return a;
  }, []);
  const count_total = (P, x, y) => P[y + 1] - P[x];
  for (let i = 0; i < Math.min(m, k) + 1; i++) {
    const left_pos = k - i;
    const right_pos = Math.min(n - 1, Math.max(k, k + m - 2 * i));
    result = Math.max(result, count_total(pref, left_pos, right_pos));
  }
  for (let i = 0; i < Math.min(m + 1, n - k); i++) {
    const right_pos = k + i;
    const left_pos = Math.max(0, Math.min(k, k - (m - 2 * i)));
    result = Math.max(result, count_total(pref, left_pos, right_pos));
  }
  return result;
}
/*
I had the prefix login wrong at first with
A.reduce((a,e,i,ar) => {
	i === 0 ? a.push(e) : a.push(e + a[i-1]);
	i === ar.length -1 ? a.push(0) : '';
	return a;
}, []);
returning an array of totals starting with the value of A[0].
Prefix should have started with A[0] = 0 && A[i] = A[i] + A[i-1].
A.reduce((a,e,i,ar) => {
	i === 0 ? a.push(0) : '';
	i === 0 ? a.push(e) : a.push(e + a[i]);
	return a;
}, []);
Remove the -1 from the index calc as we insert 0 at the index of 0 first.
*/

const test = require('../common/test.js');

test(mushrooms([2, 3, 7, 5, 1, 3, 9], 4, 6), 25); // Max mushrooms is 25 collected with 6 moves, starting at index 4
