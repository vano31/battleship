const {ship, gameboard, tile, shipAmountGenerator, randomShipGenerator} = require('./ship.js');


//Ship Tests/////////////////////////////////////

test('Make sure ship object exists (is defined)', () => {

    const boat = ship(6);
    expect(boat).toBeDefined()

})


test('Ship has specified length', () => {

    const sixship = ship(6);
    expect(sixship.length).toBe(6);

})


test('Ship has attribute for times_hit', () => {

    const threeship = ship(3);
    expect(threeship.times_hit).toBe(0);

})

test('Ship has x_coordinate', () => {

    const fourship = ship(4, 0);
    expect(fourship.x_coordinate).toBe(0)

    const fiveship = ship(5, 1);
    expect(fiveship.x_coordinate).toBe(1);

})


test('Ship has y_coordinate', () => {

    const sevenship = ship(7, 0, 3);
    expect(sevenship.y_coordinate).toBe(3);

    const eightship = ship(8, 0, 4);
    expect(eightship.y_coordinate).toBe(4);

})

test('Ship has name', () => {

    const aship = ship(3, 2, 2, 'Going Merry');
    expect(aship.ship_name).toBe('Going Merry');


})

test('ship default status of isSunk is false', () => {

    const newship = ship(4, 0, 0, 'Thousand Sunny');
    expect(newship.isSunk()).toBe(false)


});


//Tile tests//////////////////////////////////////////

test('Tile exists (is defined)', () => {


    let newtile = tile();
    expect(newtile).toBeDefined();


})

test('Tile has x_coordinate and y_coordinate', () => {

    let newtile = tile(0,1);
    expect(newtile.x_coordinate).toBe(0);
    expect(newtile.y_coordinate).toBe(1)

})

test('Tile can be connected to a ship', () => {

    let newtile = tile(5,5);
    expect(newtile.ship).toBeDefined();


})




//Gameboard tests////////////////////////////////////

test('Make sure Gameboard exists (is defined)', () => {

    const grid1 = gameboard();
    expect(grid1).toBeDefined();

})


test('Make sure Gameboard x_size and y_size are stored', () => {


    const grid2 = gameboard(10, 11);
    
    expect(grid2.x_size).toBe(10);
    expect(grid2.y_size).toBe(11);



})


test('Gameboard iteravely creates tiles with the specified coordinates based on x_size and y_size', () => {


    const grid = gameboard(5,5);
    expect(grid.tiles.length).toBe(25);

    const grid2 = gameboard(8,8);
    expect(grid2.tiles.length).toBe(64);

})


test('Make sure gameboard has access to placedShips object as a key', () => {


    const grid = gameboard(5,5);
    expect(grid.placedShips).toBeDefined();

})


test('gameboard.placedShips has access to currentlyPlacing and currentShipOrientation', () => {


    const grid = gameboard(6,6);
    expect(grid.placedShips.currentlyPlacing).toBeDefined();
    expect(grid.placedShips.currentShipOrientation).toBeDefined();


})


test('Make sure gameboard.placedShip has access to the correct count of each ship type and the amount that the gameboard should hold', () => {



    const grid = gameboard(8,8);
    expect(grid.placedShips['2length']).toBe(3);
    expect(grid.placedShips['3length']).toBe(3);
    expect(grid.placedShips['4length']).toBe(2);
    expect(grid.placedShips['5length']).toBe(2)


})


////////////shipAmountGenerator Tests



test('Check that shipAmountGenerator exists', () => {

    expect(shipAmountGenerator).toBeDefined()


})


test('Check that shipAmountGenerator can produce the correct shipAmount based on the parameters inputted', () => {

    const newnumbers = shipAmountGenerator(2, 3, 4, 5);

    expect(newnumbers["2length"]).toBe(2);
    expect(newnumbers["3length"]).toBe(3);
    expect(newnumbers["4length"]).toBe(4);
    expect(newnumbers["5length"]).toBe(5);


})




/////////////// randomShipGenerator Test


test('Make Sure Random Ship Generator Exists', () => {


    expect(randomShipGenerator).toBeDefined();


})

test('Make sure randomShipGenerator produces random amount of ships', () => {

    /*let newnumbers = shipAmountGenerator(2,3,4,5);
    let newboard = 
    */

    const newnumbers = jest.fn();
    newnumbers.mockReturnValue({

        "2length": 2,
        "3length": 3,
        "4length": 4,
        "5length": 5

    })

    const newtile = jest.fn()
    newtile.mockReturnValue({
        ship : "none"
    })

    /*const newboard = jest.fn(

    );
    */
    
    /*
    newboard.mockReturnValue({
        //tiles : new Array(100).fill(newtile)
        
    })
    */

    const newboard = {

        tiles: new Array(100).fill(newtile)
        //return tiles

    }
    

    randomShipGenerator(newboard, newnumbers);

    let twolengthchecker = jest.fn();
    twolengthchecker.mockReturnValue("two");


    let threelengthchecker = jest.fn();
    threelengthchecker.mockReturnValue("three");


    let fourlengthchecker = jest.fn();
    fourlengthchecker.mockReturnValue("four");


    let fivelengthchecker = jest.fn();
    fivelengthchecker.mockReturnValue("five");

    for (let x = 0; x < newboard.tiles.length; x++) {

        if (newboard.tiles[x].ship === "2length") {

            twolengthchecker();

        }   else if (newboard.tiles[x].ship === "3length") {

            threelengthchecker();

        }   else if (newboard.tiles[x].ship === "4length") {

            fourlengthchecker();

        }   else if (newboard.tiles[x].ship === "5length") {

            fivelengthchecker();

        }   else {

            return

        }


    }


    expect(twolengthchecker).toHaveBeenCalledTimes(2);
    expect(threelengthchecker).toHaveBeenCalledTimes(3);
    expect(fourlengthchecker).toHaveBeenCalledTimes(4);
    expect(fivelengthchecker).toHaveBeenCalledTimes(5);



})

















//////////////////////////

test.skip('Gameboard has placedships object', () => {


    //const


})

test.skip('Check that player exists (is defined)', () => {

    const user = player();
    expect(user).toBeDefined();



})


