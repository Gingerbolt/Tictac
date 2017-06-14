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
  // this.number = number;  // global game number in sequence of games
  this.players = players;  // 2-item array with each player's name
  this.round = round;  // automatically incremented after both players play
  this.whoseTurn = whoseTurn;  // game keeping track of whose turn it is
  this.gameOver = gameOver;  // Boolean - yes or no
  this.gameScore = gameScore;
};

function newGame() {
  // reset game board and boxes to ""; create new players
  $("input#text00").val("");
  $("input#text01").val("");
  $("input#text02").val("");
  $("input#text10").val("");
  $("input#text11").val("");
  $("input#text12").val("");
  $("input#text20").val("");
  $("input#text21").val("");
  $("input#text22").val("");
};


// user-interface logic goes here
$(document).ready(function() {
  $("button#play").click(function(event) {
    // onclick, create new game with game board, players, etc.
    newGame();
  });
});
