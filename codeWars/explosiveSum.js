/* ORIGINAL CHALLENGE
How many ways can you make the sum of a number?
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

Examples
Basic
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
sum(10) // 42

Explosive
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/

function sum(num) {
  const stash = [];
  const reduce = (num, num2) => {
    if (num < 1 || num2 < 1) return 0;
    if (num == 1 || num2 == 1) return 1;
    if (num < num2) {
      !stash[num] && (stash[num] = []);
      !stash[num][num] && (stash[num][num] = reduce(num, num));
      return stash[num][num];
    }
    if (num == num2) {
      !stash[num] && (stash[num] = []);
      !stash[num][num2 - 1] && (stash[num][num2 - 1] = reduce(num, num2 - 1));
      return stash[num][num2 - 1] + 1;
    }
    if (num > num2) {
      !stash[num] && (stash[num] = []);
      !stash[num][num2 - 1] && (stash[num][num2 - 1] = reduce(num, num2 - 1));
      !stash[num - num2] && (stash[num - num2] = []);
      !stash[num - num2][num2] && (stash[num - num2][num2] = reduce(num - num2, num2));
      return stash[num][num2 - 1] + stash[num - num2][num2];
    }
  };
  return reduce(num, num);
}

// Tests
const test = require('../common/test.js');

test(sum(1), 1);
test(sum(2), 2);
test(sum(3), 3);
test(sum(4), 5);
test(sum(5), 7);
