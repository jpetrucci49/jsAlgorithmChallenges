'use strict'
/* ORIGINAL CHALLENGE

Story
A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

All the animals are out and some of them are eating each other!

It's a Zoo Disaster!
Here is a list of zoo animals, and what they can eat

antelope eats grass
big-fish eats little-fish
bug eats leaves
bear eats big-fish
bear eats bug
bear eats chicken
bear eats cow
bear eats leaves
bear eats sheep
chicken eats bug
cow eats grass
fox eats chicken
fox eats sheep
giraffe eats leaves
lion eats antelope
lion eats cow
panda eats leaves
sheep eats grass
Kata Task
INPUT
A comma-separated string representing all the things at the zoo

TASK
Figure out who eats who until no more eating is possible.

OUTPUT
A list of strings (refer to the example below) where:

The first element is the initial zoo (same as INPUT)
The last element is a comma-separated string of what the zoo looks like when all the eating has finished
All other elements (2nd to last-1) are of the form X eats Y describing what happened
Notes
Animals can only eat things beside them

Animals always eat to their LEFT before eating to their RIGHT

Always the LEFTMOST animal capable of eating will eat before any others

Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

Example
INPUT
"fox,bug,chicken,grass,sheep"
1	fox can't eat bug
"fox,bug,chicken,grass,sheep"
2	bug can't eat anything
"fox,bug,chicken,grass,sheep"
3	chicken eats bug
"fox,chicken,grass,sheep"
4	fox eats chicken
"fox,grass,sheep"
5	fox can't eat grass
"fox,grass,sheep"
6	grass can't eat anything
"fox,grass,sheep"
7	sheep eats grass
"fox,sheep"
8	fox eats sheep
"fox"
OUTPUT
["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]
*/

// Steps broken down
/*
  Fistly, knowing input structure. It will be a coma separated string. No spaces between. 'lion,sheep,grass,bug'
  Output will be an array. index 0 will be the input string.
    Index 1 through the Second to last will be the order of feasting.
    In the format of 'predator eats prey'. The last index will be a coma separated string in the same format
    as the input string.
    total output should appear ['lion,sheep,grass,bug', 'lion eats sheep', 'bug eats grass', 'lion,bug']
*/
const whoEatsWho = (zoo) => {
  // Store the foodChain in an object
  const foodChain = {
    antelope: ['grass'],
    'big-fish': ['little-fish'],
    bug: ['leaves'],
    bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
    chicken: ['bug'],
    cow: ['grass'],
    fox: ['chicken', 'sheep'],
    giraffe: ['leaves'],
    lion: ['antelope', 'cow'],
    panda: ['leaves'],
    sheep: ['grass']
  };
  // input will need to be itterable. split into an Array.
  let animals = zoo.split(',')
  // Loop through the animals in the list.
  // Rules state animals on the left eat first, and animals eat to the left first.
  // This means every time an animal eats, the loop needs to hop back to check if prefious animal can eat right, before it is eaten.
  let i = 0
  while (i < animals.length){
    console.log('loop', i)

    i++
  }
  return [zoo]
};
console.log(whoEatsWho('fox,bug,chicken,grass,sheep'))
// expected: ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]
