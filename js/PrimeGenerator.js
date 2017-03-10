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
    //Create array
    var a = new Array(100);
    //Initialize to 1
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
    for (var i = 2; i < a.length; i++){
        if (a[i]){
            for (var count = 0; count < a.length; count++){
                var display =+ count;
                document.getElementById("prime").innerHTML = (display + ". " + a + "<br>");
            }
        } //document.getElementById("prime").innerHTML = (display + a + "<br>");
    }
}
window.addEventListener("load", start, false);