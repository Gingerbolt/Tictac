// business logic goes here
function Box(coords, empty, val) {
  this.coords = [];
  this.empty = empty;  // will be Boolean - yes or no
  this.val = val;  // value equivalent to mark; "x" = 1, "y" = 2
};

var globalCoords = {text1: [0, 0], text2: [0, 1], text3: [0, 2], text4: [1, 0], text5: [1, 1], text6: [1, 2], text7: [2, 0], text8: [2, 1], text9: [2, 2]};

function Board(idx, fullrow) {
  this.fullrow = fullrow; // Boolean
};

function isLine() {
  if ((box1 === box2 === box3 ) || (box4 === box5 === box6) || (box7 === box8 === box9) || (box1 === box4 === box7) || (box2 === box5 === box8) || (box3 === box6 === box9) || (box1 === box5 === box9) || (box3 === box5 === box7)) {
    Board.fullrow = true;
    return Board.fullrow;
  };
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
  $("input#text1").val("");
  $("input#text2").val("");
  $("input#text3").val("");
  $("input#text4").val("");
  $("input#text5").val("");
  $("input#text6").val("");
  $("input#text7").val("");
  $("input#text8").val("");
  $("input#text9").val("");
};

function resetPlayers() {
  $("input#player-1-name").val("");
  $("input#player-2-name").val("");
};

function convertMark (mark) {
  if (mark === "x") {
    var markval = 1;
  } else if (mark === "o") {
    var markval = 2;
  } else {
    var markval = 0;
  }
  return markval;
};

function isEqual (arg1, arg2, arg3) {
  if ((arg1 === arg2) && (arg2 == arg3)) {
    console.log("You win!")
  };
};

function isAWin (arg) {
  console.log("hello");
  if (arg === 3) {
    Player1wins = Player1.wins += 1;
    return Player1Wins;
  } else if (arg === 6) {
    Player2Wins = Player2.wins += 1;
    return Player2Wins;
  };
};

  // (box1 === "x" && box2 === "x" && box3 === "x") || (box1 === "o" && box2 === "o" && box3 === "o")

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
  var Player1Name, Player2Name, number, round, whoseTurn, gameOver, totalScore, Player1, Player2, newPlayers, mark, first, wins, box1, box2, box3, box4, box5, box6, box7, box8, box9, val1, val2, val3, row1, row2, row3, col1, col2, col3, diag1, diag2, arg, Player1Wins, Player2Wins;

  var lines = [row1, row2, row3, col1, col2, col3, diag1, diag2];

  var row1 = box1 + box2 + box3;
  var row2 = box4 + box5 + box6;
  var row3 = box7 + box8 + box9;
  var col1 = box1 + box4 + box7;
  var col2 = box2 + box5 + box8;
  var col3 = box3 + box6 + box9;
  var diag1 = box1 + box5 + box9;
  var diag2 = box3 + box5 + box7;

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

  $("form#form1").submit(function(event) {
      event.preventDefault();
      box1 = $("input#text1").val().toLowerCase();
      box1 = convertMark(box1);
      console.log(box1);
      return box1;
  });
  $("form#form2").submit(function(event) {
      event.preventDefault();
      box2 = $("input#text2").val().toLowerCase();
      box2 = convertMark(box2);
      console.log(box2);
      return box1;
  });
  $("form#form3").submit(function(event) {
      event.preventDefault();
      box3 = $("input#text3").val().toLowerCase();
      box3 = convertMark(box3);
      console.log(box3);
  });
  $("form#form4").submit(function(event) {
      event.preventDefault();
      box4 = $("input#text4").val().toLowerCase();
      box4 = convertMark(box4);
      console.log(box4);
  });
  $("form#form5").submit(function(event) {
      event.preventDefault();
      box5 = $("input#text5").val().toLowerCase();
      box5 = convertMark(box5);
      console.log(box5);
  });
  $("form#form6").submit(function(event) {
      event.preventDefault();
      box6 = $("input#text6").val().toLowerCase();
      box6 = convertMark(box6);
      console.log(box6);
  });
  $("form#form7").submit(function(event) {
      event.preventDefault();
      box7 = $("input#text7").val().toLowerCase();
      box7 = convertMark(box7);
      console.log(box7);
  });
  $("form#form8").submit(function(event) {
      event.preventDefault();
      box8 = $("input#text8").val().toLowerCase();
      box8 = convertMark(box8);
      console.log(box8);
  });
  $("form#form9").submit(function(event) {
      event.preventDefault();
      box9 = $("input#text9").val().toLowerCase();
      box9 = convertMark(box9);
      console.log(box9);
  });

  lines.forEach(function(line) {
    if (isAWin(line) === true){
      var result = "You win!"
    } else {
      var result = "Next player"
    }
    $("h2").show()
    $("h2").text(result)
  });
  // isEqual(arg1, arg2, arg3);
  // console.log(convertMark("x"));
  // console.log(convertMark("o"));
  // console.log("The winning total is: " + isAWin(box4, box5, box6));




});
