// business logic goes here
function Box(coords, empty, mark) {
  this.coords = coords;
  this.empty = empty;  // will be Boolean - yes or no
  this.mark = mark;  // will be Boolean - X or O
};

function Board(idx, fullrow) {
  this.fullrow = fullrow; // Boolean
};

function Player(playerName, playerNum, mark, first, wins) {
  this.playerName = playerName;
  this.playerNum = playerNum;
  this.mark = mark;
  this.first = first;
  this.wins = wins;
};

function Game(number, players, round, whoseTurn, gameOver, totalScore) {
  // this.number = number;  // global game number in sequence of games
  this.players = [];  // 2-item array with each player's name
  this.round = round;  // automatically incremented after both players play
  this.whoseTurn = whoseTurn;  // game keeping track of whose turn it is
  this.gameOver = gameOver;  // Boolean - yes or no
  this.totalScore = totalScore;  // numeric
};

function resetBoard() {
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

function resetPlayers() {
  $("input#player-1-name").val("");
  $("input#player-2-name").val("");
};

  // newPlayer = new Player(playerName, mark, first, wins);
//   var players = [];
//   var nicole = new Player("Nicole", "X", true, 0);
//   console.log(nicole);
//   var jason = new Player("Jason", "0", false, 0);
//   console.log(jason);
//   newGame.players.forEach(function(playerName) {
//     players.push(playerName);
//   });
//   console.log(newGame.players);
// };


// user-interface logic goes here
$(document).ready(function() {
  var Player1Name;
  var Player2Name;
  // var playerName;
  // var newPlayer;
  $("button#players").click(function(event) {
    event.preventDefault();
    Player1Name = $("input#player-1-name").val();
    Player2Name = $("input#player-2-name").val();
    console.log(Player1Name);
    console.log(Player2Name);
    resetPlayers();
  });

  $("button#play").click(function(event) {
    event.preventDefault();
    // onclick, create new game with game board, players, etc.
    // write text input fields prompting for players' names
    resetBoard();
  });
});
