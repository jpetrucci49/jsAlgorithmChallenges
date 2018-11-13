'use strict'
/* ORIGINAL CHALLENGE

You are going to write a simple function - decoder/encoder for poker cards (any card game in fact).
Your task is to encode array of human readable symbols to array of codes or decode it doing this process with reversed way.

['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
[0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
Remember that the returned array must be sorted from lowest to highest code (or its symbol value).

Card suits:
name    |  symbol   |  precedence
---------------------------------
club          c            0
diamond       d            1
heart         h            2
spade         s            3
52-card deck:

  c    |     d     |    h     |    s
---------------------------------------
 0: A      13: A      26: A      39: A
 1: 2      14: 2      27: 2      40: 2
 2: 3      15: 3      28: 3      41: 3
 3: 4      16: 4      29: 4      42: 4
 4: 5      17: 5      30: 5      43: 5
 5: 6      18: 6      31: 6      44: 6
 6: 7      19: 7      32: 7      45: 7
 7: 8      20: 8      33: 8      46: 8
 8: 9      21: 9      34: 9      47: 9
 9: T      22: T      35: T      48: T
10: J      23: J      36: J      49: J
11: Q      24: Q      37: Q      50: Q
12: K      25: K      38: K      51: K
Requirements
input: array of strings (symbols)/integers (codes) you must encode/decode
output: array of integers (codes)/strings (symbols) sorted by code values ASC
if input is not defined or is not and array return null, if is empty array return empty array

You may solve my other kata which takes subject of term 'poker' Poker cards reducer
*/
/*
  Input will be an Array of card values, or card numbers.
  Output will be an Array of the inverse. If input is card values, return card numbers. If it is numbers, return values.
*/
function cardsConverter(input){
  // First, return null if input is not an array.
  if (!Array.isArray(input)){
    return null
  }
  // Otherwise, if input is an empty array return an empty array.
  if (input.length === 0){
    return []
  }
  // List the faces and suits for the cards.
  const faces = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
  const suits = ['c', 'd', 'h', 's'];
  // Function expressioon to generate a deck. Takes one parameter - desired card.
  const deck = (card) => {
    // Declare variable to store cards.
    const fullDeck = [];
    // Loop through all suits, then all faces.
    // For each face within each suit, push that card to the fullDeck
    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < faces.length; j++){
        fullDeck.push(faces[j]+suits[i]);
      }
    }
    // If the provided card matches a fullDeck index, return that value.
    // Else if the provided cards index returns anything except -1, return that index.
    // Otherwise, just return the fullDeck
    if (fullDeck[card]){
      return fullDeck[card]
    } else if(fullDeck.indexOf(card) > -1){
      return fullDeck.indexOf(card)
    }
    return fullDeck
  }
  return deck(2)
}
console.log(cardsConverter([0, 1, 51]))
// cardsConverter([0, 1, 51]) should return ['Ac', '2c', 'ks']
// cardsConverter(['Ac', '2c', 'ks']) should return [0, 1, 51]
