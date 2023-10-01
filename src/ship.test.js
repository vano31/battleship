const {ship, gameboard, tile} = require('./ship.js');


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

test('Make sure Gameboard of x_size and y_size generates (x_size * y_size)# of tiles', () => {

    const grid = gameboard(5,5);
    expect(grid.tile_amount).toBe(25);


})

test('Gameboard iteravely creates tiles with the specified coordinates based on ')
