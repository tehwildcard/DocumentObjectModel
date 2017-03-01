/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

var gameTiles = new Array (16);
var emptyTile; 
var emptyTileImage = "empty.jpg"; 


function start(){
  // Create an array to hold the tiles
  for (var tile = 0; tile <= 15; tile++){
    gameTiles[tile] = tile;
  }
  //Sort the Tiles Randomly
  gameTiles.sort(randomSort);

  //Add Images for Tiles 1-15
  for (var tile = 0; tile <= 15; tile++){
    document.images[tile].src = gameTiles[tile] + ".jpg";
  }
  //Create an Empty Tile
  emptyTile = parseInt(Math.random() * 15);
  document.images[emptyTile].src = emptyTileImage;
}		

function move(tile){
  // determine if chosen tile is a valid move
  // see how far tile is from empty
  var moves = emptyTile - tile;
  // if distance is negative, make it positive
  if (moves < 0){
    moves = -(moves);
  }
  // tile distance of 1 is valid left or right, 4 is valid above or below
  if (moves == 1 || moves == 4){
    // set the source of the empty tile as the source of the moved tile
    document.images[emptyTile].src = document.images[tile].src;
    // set the source of the moved tile as empty
    document.images[tile].src = emptyTileImage;
    // hold the new position of empty
    emptyTile = tile;
    // check the status of the puzzle
    gameStatus();
  }
}

function gameStatus(){
  //Initialize the variable if the user won
  var winner = true;
  // loop the Tile Images
  for (var tile = 0; tile <= 15; tile++){
    //Verify the image is correct
    if (document.images[tile].src != "empty.jpg"){
      if (document.images[tile].src != """ + tile + ".jpg"){
          //did not win
          winner = false;
      }
    }
  if (winner == true){
    //Player wins puzzle
    window.alert("Winner!");
    var playAgain = window.prompt("New Game?", "Yes");
    if (playAgain == "Yes"){
      start();
    }
  }
}

function randomSort(a, b){
  return (Math.round(Math.random()) - 0.5);
}


window.addEventListener("load", start, false);