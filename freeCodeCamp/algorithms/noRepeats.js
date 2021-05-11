'use strict';
/* ORIGINAL CHALLENGE
Algorithms: No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function permAlone(str) {
  var regex = /(.)\1+/g;
  const getAllPermutations = (string) => {
    var results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }

    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  };
  return getAllPermutations(str).filter((e) => !e.match(regex)).length;
}

const test = require('../../common/test.js');

// 4ms

test(permAlone('aab'), 2);
test(permAlone('aaa'), 0);
test(permAlone('aabb'), 8);
test(permAlone('abcdefa'), 3600);
test(permAlone('abfdefa'), 2640);
test(permAlone('zzzzzzzz'), 0);
test(permAlone('a'), 1);
test(permAlone('aaab'), 0);
test(permAlone('aaabb'), 12);

/*
permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.
*/
