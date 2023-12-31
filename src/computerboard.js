const { ship, tile, gameboard } = require("./ship");

let board2 = gameboard(10, 10);


///Roadmap for computerboard.js
/* ALL THIS WILL BE SCRAPPED

Create board for computer player (board2)

Send board2 to index.js

In index.js, turn board2 into a boardDOM

Create a function that will go through all ships in an order and will keep going until all ships of a certain type depleted
    - Object compboardshipcounterplacer()
        - 

Create a function that takes each ship from the function above, and gives it random coordinates that do not intersect with each other

    - function will first have an array of all unused coordinate spaces
    - function will take the next ship in line
    - function will take a random coordinate space from earlier array
    - function will take a random direction (right, left, up or down)
    - function will calculate how many coordinate spaces and which ones (in which direction) 
    - function will look through entire array of unused coordinate to see if those coordinates decided in previous step are there
        - if coordinates are not there, switch direction
            - if all directions have been used, choose a new random coordinate and repeat all steps
        - if coordinates there:
            - mark those coordinates with the ship property/respective key-value
            - remove those coordinates from that original array with unused coordinate spaces
    - function will know if all ships in board2 have been used up (are all equal 0 in amount)

Create a function that sees what coordinates in the ship have been marked

Create a function that takes the array of coordinates that have been marked and colors them in the gameboardDOM for board2

*/

/*




*/




///Roadmap for Triggering start of game







///Roadmap for flow of game between computer and player


