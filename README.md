# DocumentObjectModel
      A prime integer is an integer greater than 1 that’s evenly
      divisible only by itself and 1. The Sieve of Eratosthenes is an algorithm for finding
      prime numbers. It operates as follows:
        a) Create an array with all elements initialized to 1 (true). Array elements with
      prime indices will remain as 1. All other array elements will eventually be set to
        zero.
        b) Set the first two elements to zero, since 0 and 1 are not prime. Starting with array
      index 2, every time an array element is found whose value is 1, loop through the
      remainder of the array and set to zero every element whose index is a multiple of
      the index for the element with value 1. For array index 2, all elements beyond 2
      in the array that are multiples of 2 will be set to zero (indices 4, 6, 8, 10, etc.); for
      array index 3, all elements beyond 3 in the array that are multiples of 3 will be set
      to zero (indices 6, 9, 12, 15, etc.); and so on.
      Your program should generate all the prime numbers up to 100

      Write a web page that enables the user to play the game of 15.
      There is a 4-by-4 board (implemented as an HTML5 table) for a total of 16 slots. One of
      the slots is empty. The other slots are occupied by 15 tiles, randomly numbered from 1
      through 15. Any tile next to the currently empty slot can be moved into the currently
      empty slot by clicking on the tile. Your program should create the board with the tiles
      out of order. The user’s goal is to arrange the tiles in sequential order row by row.
      Using the DOM and the click event, write a script that allows the user to swap the
      positions of the open position and an adjacent tile. [Hint: The click event should be
      specified for each table cell.]
