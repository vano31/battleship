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

    return {x_coordinate, y_coordinate}
}



let gameboard = function(x_size, y_size) {

    let tile_amount = x_size * y_size;

    return {x_size, y_size, tile_amount};

}






/////////////////////////////////////////////////////////////
module.exports = {

    ship,
    tile,
    gameboard,

};