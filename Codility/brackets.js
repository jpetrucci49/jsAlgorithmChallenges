'use strict';
/* ORIGINAL CHALLENGE
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
*/

/******** time complexity: O(N) ***********/

function brackets(S) {
  if (S.length % 2 !== 0) {
    return 0;
  }
  const open = '[{('.split('');
  const rev = (x) => (x === '[' ? ']' : x === '{' ? '}' : x === '(' ? ')' : -1);
  const stack = [];
  for (let i in S) {
    const c = S[i];
    if (open.indexOf(c) > -1) {
      stack.push(c);
    } else {
      if (stack.length === 0 || c !== rev(stack.pop())) {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// Tests
const test = require('../common/test.js');

test(brackets('{[()()]}'), 1);
test(brackets('([)()]'), 0);
