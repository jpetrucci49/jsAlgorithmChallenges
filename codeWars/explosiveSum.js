function sum(num) {
    const stash = [];
    const reduce = (num, num2) => {
      if(num < 1 || num2 < 1) return 0;
      if(num == 1 || num2 == 1) return 1;
      if(num < num2) {
        !stash[num] && (stash[num] = []);
        !stash[num][num] && (stash[num][num] = reduce(num, num));
        return stash[num][num];
      }
      if(num == num2){
        !stash[num] && (stash[num] = []);
        !stash[num][num2 - 1] && (stash[num][num2 - 1] = reduce(num, num2 - 1));
        return stash[num][num2 - 1] + 1;
      }
      if(num > num2){
        !stash[num] && (stash[num] = []);
        !stash[num][num2 - 1] && (stash[num][num2 - 1] = reduce(num, num2 - 1));
        !stash[num - num2] && (stash[num - num2] = []);
        !stash[num - num2][num2] && (stash[num - num2][num2] = reduce((num - num2), num2))
        return stash[num][num2 - 1] + stash[num - num2][num2]
      }
    }
    return reduce(num, num);
  }


// Tests
const test = require('../common/test.js');

test(sum(1), 1);
test(sum(2), 2);
test(sum(3), 3);
test(sum(4), 5);
test(sum(5), 7);
