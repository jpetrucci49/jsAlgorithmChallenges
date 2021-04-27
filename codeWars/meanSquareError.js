/*
  Complete the function that

  accepts two arrays of equal length
  compares the value each member in one array to the corresponding member in the other
  squares the absolute value difference between those two values
  and returns the average of those squared absolute value difference between each member pair.
  solution([1,2,3], [4,5,6]) // should === 9 ((9 + 9 + 9) / 3)
   solution([10, 20, 10, 2], [10, 25, 5, -2])
  // should === 16.5 ((0 + 25 + 25 + 16) / 4)
   solution([-1,0], [0,-1]) // should === 1 ((1 + 1) / 2) Complete the function that

  accepts two arrays of equal length
  compares the value each member in one array to the corresponding member in the other
  squares the absolute value difference between those two values
  and returns the average of those squared absolute value difference between each member pair.
  solution([1,2,3], [4,5,6]) // should === 9 ((9 + 9 + 9) / 3)
   solution([10, 20, 10, 2], [10, 25, 5, -2])
  // should === 16.5 ((0 + 25 + 25 + 16) / 4)
   solution([-1,0], [0,-1]) // should === 1 ((1 + 1) / 2)
*/
/*
const meanSquare = (arr1, arr2) => {
  return arr1.map((e,i) => {
    const e2 = arr2[i];
    const abs = Math.abs(e - e2);
    return abs*abs;
  })
  return absDiff.reduce((a,e) => a+e) / arr1.length;
}
*/
/***** REFACTOR *****/
const meanSquare = (arr1, arr2) =>
  arr1
    .map((e, i) => {
      const e2 = arr2[i];
      const abs = Math.abs(e - e2);
      return abs * abs;
    })
    .reduce((a, e) => a + e) / arr1.length;

// Test
const test = require('../common/test.js');

test(meanSquare([-1, 0], [0, -1]), 1);
