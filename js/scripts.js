// business logic goes here
function Box(coords, empty, mark) {
  this.coords = coords;
  this.empty = empty;  // will be Boolean - yes or no
  this.mark = mark;  // will be Boolean - X or O
};

function Board(idx, fullrow) {
  this.fullrow = fullrow; // Boolean
};

function Player(playerName, mark, first, playerTurn, wins) {
  this.playerName = playerName;
  this.mark = mark;
  this.first = first;
  this.playerTurn = playerTurn;  // Boolean; player keeping track of whether it's their turn or not
  this.wins = wins;
};

function Game(number, players, round, whoseTurn, gameOver, gameScore) {
  this.number = number;  // global game number in sequence of games
  this.players = players;  // 2-item array with each player's name
  this.round = round;  // automatically incremented after both players play
  this.whoseTurn = whoseTurn;  // game keeping track of whose turn it is
  this.gameOver = gameOver;  // Boolean - yes or no
  this.gameScore = gameScore;
};


// user-interface logic goes here
$(document).ready(function() {
  $("button#play").click(function(event) {
    // onclick, create new game with game board, players, etc.
  });
});
