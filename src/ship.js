let ship = function(length, x_coordinate, y_coordinate, ship_name) {

    let times_hit = 0;
    let isSunk = function(times_hit) {

        if (times_hit >= length) {

            return true
        }   else {
            return false
        }
    };

    return {length, times_hit, x_coordinate, y_coordinate, ship_name, isSunk};


}

let tile = function(x_coordinate, y_coordinate) {


    let ship = 'none';


    return {x_coordinate, y_coordinate, ship}
}



let gameboard = function(x_size, y_size) {

    

    let tiles = [];
    
    for (let y = 0; y < y_size; y++) {

        for (let x = 0; x < x_size; x++) {

            let boardtile = tile(x,y)

            tiles.push(boardtile);
        }

    }

    let placedShips = {

        currentlyPlacing: '',
        currentShipOrientation: 'right',
        '2length': 3,
        '3length': 3,
        '4length': 2,
        '5length': 2


    };
    

    return {x_size, y_size, tiles, placedShips};

}


let player = function() {

    return 1 ;

}


let board2 = gameboard(10,10);

/*

let objectlistofshiptypes = {

    "2length": 3,
    "3length": 3,
    "4length": 2,
    "5length": 2


}

*/


let shipAmountGenerator = function(twoshipamount, threeshipamount, fourshipamount, fiveshipamount) {

    return {

        "2length": twoshipamount,
        "3length": threeshipamount,
        "4length": fourshipamount,
        "5length": fiveshipamount

    }

}



let randomShipGenerator = function(gameboard, objectlistofshiptypes) {

    let direction = ["right", "down", "left", "up"];

    




}








/*

let board2 = gameboard(10,10) ---> Make board for computer

shipAmountGenerator(2length, 3length, 4length, 5length) --> Use to generate an object called objectlistofshiptypes that tells you how many of each ship type will be listed, (ie 2length: 3, which means that in the future, there will be 3 ships of length 2)

//Dont use this --> let objectlistofshiptypes = {2length : 3, 3length: 3, 4length: 2, 5length: 2} --> Template for determining how many ships will be created

randomShipGenerator(agameboard, objectlistofshiptypes ) --> generates new random ships based on board direction, makes sure each tile has the correct ship
    --> has oritentationswitcher function as a private method that is used to make sure each new ship is in a different, correct direction
    //Remember, private methods need not be tested because not everyhting needs to be tested and 
    you limit yourself to the implementation used

compboardtocompboardDOM(agameboard, agameboardDOM)
    --> takes the tiles from agameboard and makes them appear in the DOM, known as agameboardDOM




*/




/////////////////////////////////////////////////////////////
module.exports = {

    ship,
    tile,
    gameboard,
    //compboardshipcounterplacer
    shipAmountGenerator,
    randomShipGenerator

};