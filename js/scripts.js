// business logic goes here
function Box(coords, empty, mark) {
  this.coords = coords;
  this.empty = empty;  // will be Boolean - yes or no
  this.mark = mark;  // will be Boolean - X or O
};

function Board(idx, fullrow) {
  this.fullrow = fullrow; // Boolean
};

function Player(playerName, mark, first, wins) {
  this.playerName = playerName;
  this.mark = mark;  // "X" or "O"
  this.first = first;  // Boolean - true or false
  this.wins = wins;  // number
};

function Game(round, whoseTurn, gameOver, totalScore) {
  // this.number = number;  // global game number in sequence of games
  this.players = [];  // 2-item array with each player's name
  this.round = round;  // number; automatically incremented after both players play
  this.whoseTurn = whoseTurn;  // Player1 or Player2; game keeping track of whose turn it is
  this.gameOver = gameOver;  // Boolean - true or false
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

function isEqual (box1, box2, box3) {
  if ((box1 === box2) && (box2 == box3)) {
    console.log("You win!")
  };

  // (box1 === "x" && box2 === "x" && box3 === "x") || (box1 === "o" && box2 === "o" && box3 === "o")
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
  var Player1Name, Player2Name, number, round, whoseTurn, gameOver, totalScore, Player1, Player2, newPlayers, mark, first, wins, box00, box01, box02, box10, box11, box12, box20, box21, box22;
  var newGame = new Game([], 0, Player1, false, 0);

  $("button#players").click(function(event) {
    event.preventDefault();
    Player1Name = $("input#player-1-name").val();
    Player2Name = $("input#player-2-name").val();
      // console.log(Player1Name);
      // console.log(Player2Name);
    Player1 = new Player(Player1Name, "X", true, 0);
    Player2 = new Player(Player2Name, "O", false, 0);
      // console.log(Player1);
      // console.log(Player2);
      // console.log(newPlayers);
    newGame.players.push(Player1, Player2);
      // console.log(newGame.players);
    resetPlayers();
  });

  $("button#play").click(function(event) {
    event.preventDefault();
    // onclick, create new game with game board, players, etc.
    // write text input fields prompting for players' names
    resetBoard();
  });

  $("form#form00").submit(function(event) {
      event.preventDefault();
      box00 = $("input#text00").val().toLowerCase();
      console.log(box00);
  });
  $("form#form01").submit(function(event) {
      event.preventDefault();
      box01 = $("input#text01").val().toLowerCase();
      console.log(box01);
  });
  $("form#form02").submit(function(event) {
      event.preventDefault();
      box02 = $("input#text02").val().toLowerCase();
      console.log(box02);
  });
  $("form#form10").submit(function(event) {
      event.preventDefault();
      box10 = $("input#text10").val().toLowerCase();
      console.log(box10);
  });
  $("form#form11").submit(function(event) {
      event.preventDefault();
      box11 = $("input#text11").val().toLowerCase();
      console.log(box11);
  });
  $("form#form12").submit(function(event) {
      event.preventDefault();
      box12 = $("input#text12").val().toLowerCase();
      console.log(box12);
  });
  $("form#form20").submit(function(event) {
      event.preventDefault();
      box20 = $("input#text20").val().toLowerCase();
      console.log(box20);
  });
  $("form#form21").submit(function(event) {
      event.preventDefault();
      box21 = $("input#text21").val().toLowerCase();
      console.log(box21);
  });
  $("form#form22").submit(function(event) {
      event.preventDefault();
      box22 = $("input#text22").val().toLowerCase();
      console.log(box22);
  });

  isEqual(box00, box01, box02);
});
