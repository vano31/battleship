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


    let ship = 5;


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
    

    return {x_size, y_size, tiles};

}


let player = function() {

    return 1 ;

}






/////////////////////////////////////////////////////////////
module.exports = {

    ship,
    tile,
    gameboard,

};