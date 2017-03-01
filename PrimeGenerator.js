/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

function start() {

  var a = new Array(100); // create array
  //initialize to 1
  for (var i = 0; i < a.length; i++){
    a[i] = 1;

  }
  isPrime(a);
  printPrime(a); 

}

function isPrime(a){
  for (i = 2; i * i < a.length; i++){
    if (a[i]){
        for (var j = 0; i * i + i * j < a.length; j++){
          a[i * i + i * j] = 0;
        }
    }
  }
}

function printPrime(a){
  var count = 0;
  for (var i = 2; i < a.length; i++){
    if (a[i]){
      document.getElementById("prime").innerHTML = a;
    }
  }
}
window.addEventListener("load", start, false);