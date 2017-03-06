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
window.addEventListener("load", start, false);

function start(){
    //Create an array to hold the tiles
    for (var tile = 1; tile <= 15; ++tile) {
        gameTiles[tile] = tile;
    }
    //Sort the Tiles Randomly
    gameTiles.sort(randomSort);

    //Add random tile to the other tiles 1-15
    for (tile  = 1; tile <= 15; ++tile) {
        document.images[tile].src = "number" + gameTiles[tile] + ".jpg";
    }
    //Create an Empty Tile
    emptyTile = parseInt(Math.random() * 15);
    document.images[emptyTile].src = emptyTileImage;
}
function randomSort(){
    return (Math.round(Math.random()) - 0.5);
}

function move(tile) {
    //Calculates how far the tile is away from the empty tile
    var moves = emptyTile - tile;
    //For negative distance, convert to positive
    if (moves < 0) {
        moves = -(moves);
    }
    //
    if (moves == 1 || moves == 4){
        //Set the empty tile image to the moved image
        document.images[emptyTile].src = document.images[tile].src;
        //The moved tile becomes empty tile
        document.images[tile].src = emptyTileImage;
        //Store the new value of the empty image
        emptyTile = tile;
        //Is the player a winner
        outcome();
    }
}

function outcome(){
    //Initialize the variable if the user won
    var winner = true;
    //Loop the Tile Images
    for (var tile = 0; tile <= 15; tile++) {
        //Verify the image is correct
        if (document.images[tile].src != "empty.jpg") {
            if (document.images[tile].src != ("number" + tile + ".jpg")) {
                //did not win
                winner = false;
            }
        }
        if (winner == true) {
            //Player wins game
            window.alert("Winner!");
            var playAgain = window.prompt("New Game?", "yes");
            if (playAgain == "yes") {
                start();
            }
        }
    }
}


