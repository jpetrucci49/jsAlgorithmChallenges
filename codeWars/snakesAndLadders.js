'use strict'
/* ORIGINAL CHALLENGE

Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)
 
  [https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/snakesandladders.jpg]

Task
   Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
   
The Board
  [https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/snakesandladdersboard.jpg]

Rules
 	1.  There are two players and both start off the board on square 0.

  2.  Player 1 starts and alternates with player 2.

  3.  You follow the numbers up the board in order 1=>100

  4.  If the value of both die are the same then that player will have another go.

  5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

  6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

  7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

Returns
 	Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

  Return Game over! if a player has won and another player tries to play.

  Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
*/
class Player {
  constructor(num) {
    this.position = 0;
    this.num = num;
  }
}

class SnakesLadders {
  constructor() {
    this.p1 = new Player(1);
    this.p2 = new Player(2);
    this.player = this.p1;
    this.board = {16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80, 2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 78: 98, 87: 94,};
    this.gameOver = false;
  }
  
  play(die1, die2) {
    if (this.gameOver) {
      return 'Game over!';
    }
    this.player.position += die1 + die2;
    if (this.player.position > 100) {
      this.player.position = 100 - (this.player.position - 100);
    } 
    const endMove = this.player.position;
    
    if (endMove === 100){
      this.gameOver = true;
    }
    if (this.board.hasOwnProperty(endMove)){
      this.player.position = this.board[endMove];
    }
    const result = `Player ${this.player.num} ${this.player.position === 100 ? 'Wins!' : 'is on square ' + this.player.position}`;
    if (die1 !== die2){
      this.player = (this.player === this.p1 ? this.p2 : this.p1);
    }
    return result
  }
};

// console.log(cardsConverter([0, 51, 1]));
// console.log(cardsConverter(['Ac', 'Ks', '2c']));
// cardsConverter([0, 51, 1]) should return ['Ac', '2c', 'Ks']
// cardsConverter(['Ac', 'Ks', '2c']) should return [0, 1, 51]

// Tests
const test = require('../common/test.js');
var game = new SnakesLadders();

test(game.play(1, 1), "Player 1 is on square 38");
test(game.play(1, 5), "Player 1 is on square 44");
test(game.play(6, 2), "Player 2 is on square 31");
test(game.play(1, 1), "Player 1 is on square 25");
test(game.play(2, 1), "Player 1 is on square 84");
test(game.play(3, 2), "Player 2 is on square 44");
test(game.play(2, 1), "Player 1 is on square 94");
test(game.play(4, 3), "Player 2 is on square 67");
test(game.play(3, 4), "Player 1 is on square 80");
test(game.play(6, 5), "Player 2 is on square 98");
test(game.play(6, 1), "Player 1 is on square 94");
test(game.play(1, 3), "Player 2 is on square 98");
test(game.play(3, 3), "Player 1 Wins!");
test(game.play(1, 1), "Game over!");

