Battleship Project --> Project Planning #3 --> Action Reaction Notes



**ALL ACTIONS ARE USER INPUTS, NOT NECESSARILY ACTIONS COMPLETED BY COMPUTER CALCULATIONS
**Specific Functions


--------------------------------------------------------------------------------------------

Main Goals  

1. Create ShipFactory()
2. Create GameboardFactory()
3. Create PlayerFactory()
4. Create Vs CPU Mode ***Minimum needed for application
    a. Make a way for CPU to randomly place ships on board
    b. Make a way for player to place ships on board
5. Create VS Player Mode
    a. Create a handoff mode
6. Create a random online mode






---------------------------------------------------------------------------------------------

ACTION - Home Page Loaded
    - R0 - ****ACTION**** Choose Game Mode
    

ACTION - Choose Game Mode
    - R0 - ****ACTION**** Choose CPU
    - R0 - ****ACTION**** Choose Versus


ACTION - Choose CPU
    - R0 - Player1 created (User)
        -R1 - Player1 Gameboard Created
            - R2 - Player1 Ships Generated
                - ** - Check if number of placed ship left is 0
                    - *** - Number of ships left is 0
                        - R4 - ****ACTION**** Player1 Presses START Button
                    - *** - Number of ships left is not 0
                        - R3 - ****ACTION**** Player1 Ships Placed on Player1 Gameboard
                            - ** - Check if number of placed ship left is 0
                            

    - R0 - Player2 created (CPU)
        - R1 - Player2 Gameboard Created 
            - R2 - Player2 Ships Generated
                - ** - Check if number of placed ships left is 0
                    - *** - Number of ships left is 0
                    - *** - Number of ships left is not 0  
                        - R3 - Player2 Ships Randomly Placed on Player2 Gameboard


***At what point is the number of ships going to be determined and understood?
***It makes sense for the number of ships needed to be placed to be calculated after ships are generated but before they are placed


ACTION - Player1 Ships Placed on Player1 Gameboard
    - R0 - ****ACTION**** Player1 Chooses Ship 
        - R1 - is ship placed?
            - R2 - Yes
                - R3 - RETURN - Ship placed


ACTION - Player1 Chooses Ship 
    - R0 - ****ACTION**** Player1 Chooses a Coordinate for Ship
        - R1 - is ship placed?
            - R2 - Yes
                - R3 - RETURN - Ship placed


ACTION - Player1 Chooses a Coordinate for Ship
    - R0 - Check if tile has been used
        - R1 - Tile not used
            - R2 - Tile is selected for ship
                - R3 - Subtract 1 tile from number of tiles needed for ship left
                    - R4 - Check if number of tiles needed for ship left is 0
                        - R5 - Number of tiles left for ship is 0
                            - R6 - RETURN - Ship placed
                        - R5 - Number of tiles left for ship is NOT 0
                            - R6 - Place the end tile for that ship
                                - R7 - Subtract 1 tile from number of tiles needed for ship left
                                - R7 - Check if end tile has the right slope
                                    - R8 - End Tile has the same X value OR Y Value as first tile clicked
                                        - R9 - Check if number of tiles left for ship is equal to ship tile total number - 2
                                            - R10 - It is equal
                                                - R11 - Find all tiles in between first tile and end tile that have the same slope
                                                    - R12 - First tile and end tile have the same X value
                                                        - R13 - Find all tiles that have the Y values in between first tile Y and end tile Y with the same X value
                                                            - R14 - Select those tiles for the ships
                                                                - R15 - Subtract the number of those tiles from the number of tiles left for the ship
                                                                - R5 - Number of tiles left for ship is  0
                                                    - R12 - First tile and end tile have the same Y value
                                                        - R13 - Find all tiles that have the X values in between first tile X and end tile X with the same Y value
                                                            - R14 - Select those tiles for the ships
                                                                - R15 - Subtract the number of those tiles from the number of tiles left for the ship
                                                                - R5 - Number of tiles left for ship is  0
                                            - R10 - It is not equal
                                                - R11 - Remove end tile
                                                - R11 - Add 1 tile to number of tiles needed for ship left
                                                - R5 - Number of tiles left for ship is NOT 0
                                    - R8 - End Tile does not have the same X value or Y value as first tile clicked
                                        - R9 - Tile not placed
                                        - R5 - Number of tiles left for ship is NOT 0
        - R1 - Tile already used
            - R2 - Tile not selected for ship
                - R3 - ****ACTION**** Player1 Chooses a Coordinate for Ship



ACTION - Player1 Presses START Button (Choose CPU)
    - R0 - ****ACTION**** Player1 Presses Tile on Player2 Grid 
        

ACTION - Player1 Presses Tile on Player2 Grid 
    - R0 - Player2 (CPU) Barred From Pressing Tile on Player1 Grid
    - R0 - Check if Tile contains ship
        - R1 - Tile does not contain ship
            - R2 - Turn Switch
            - R2 - ****ACTION**** Player2 (CPU) Presses Tile on Player1 Grid 
        - R1 - Tile does contain ship
            - R2 - Check if Selected Ship is Sunk
                - R3 - Selected Ship is Sunk
                    - R4 - Player2 Ship counted as sunk in Player2 Gameboard
                        - R5 - Check if Player2 Gameboard has all ships sunk
                            - R6 - Player2 Gameboard has no ships
                                - R7 - Game Over, Player1 Wins
                                    - R8 - All ship data and Gameboard data is wiped
                                        - R9 - Prompt For Either Play Again or Go Back to Home Page
                                            - R10 - ****ACTION**** Choose CPU
                                            - R10 - ****ACTION**** Home Page Loaded
                                        
                            - R6 - Player2 Gameboard has some ships left
                                - R7 - ****ACTION**** Player1 Presses Tile on Player2 Grid
                - R3 - Selected Ship is not Sunk
                    - R4 - ****ACTION**** Player1 Presses Tile on Player2 Grid


ACTION - Player2 (CPU) Presses Tile on Player1 Grid 
    - R0 - Player1 (Player) Barred From Pressing Tile on Player1 Grid
    - R0 - Random Tile is Selected by CPU
        - R1 - Check if Tile contains ship
            - R2 - Tile does not contain ship
                - R3 - Turn Switch
                - R3 - ****ACTION**** Player1 Presses Tile on Player2 Grid
            - R2 - Tile does contain ship
                - R3 - Check if Selected Ship is Sunk
                    - R4 - Selected Ship is Sunk
                        - R5 - Player1 Ship Counted as Sunk in Player1 Gameboard
                            - R6 - Check if Player1 Gameboard has all ships sunk
                                - R7 - Player1 Gameboard has no ships
                                    - R8 - Game Over, Player2 Wins
                                        - R9 - All ship data and Gameboard data is wiped
                                            - R10 - Prompt For Either Play Again or Go Back to Home Page
                                                - R11 - ****ACTION**** Choose CPU
                                                - R11 - ****ACTION**** Home Page Loaded

                                - R7 - Player1 Gameboard has some ships left
                                    - R8 - ****ACTION**** Player2 (CPU) Presses Tile on Player1 Grid
                    - R4 - Selected Ship is Not Sunk
                        - R5 - ****ACTION**** Player2 (CPU) Presses Tile on Player1 Grid


ACTION - Choose VERSUS
    -

--------------------------------------------------------------------------


Battleship Project --> Project Planning #7 --> 3 Main Objects
- Ship
- Gameboard
- Player



--------------------------------------------------------------------------

2lengthbutton, id = 2length, class = shipclasses
3lengthbutton, id = 3length, class = shipclasses
4lengthbutton, id = 4length, class = shipclasses
5lengthbutton, id = 5length, class = shipclasses

gameboardDOM, class = .gameboardDOM, has tiles of list [] with list of tileDOMs
tileDOM, id = `${x-coordinate}, ${y-coordinate}`, class of either .used, .unused, .sink, or .hovered, will always have class of .tileDOM--> at beginning they all start at .unused
(NOT gameboardDOM) gameboard.placedShips = {2length: 3, 3length: 3, 4length: 2, 5length: 2, currentlyPlacing: none, currentShipOrientation: right}

let shipclasses = document.querySelectorAll(".shipclasses")
let gameboardDOM = document.querySelector(".gameboardDOM")
let tileDOMs = document.querySelectorAll(".tileDOM") //might be a problem because the tileDOMs are not objects


//import tiles array of objects from a different file, connected to gameboard object on that same file so that we can get use this information- we need to make it so that eact JS tileDOM object will have an x_coordinate key-value pair
//and y_coordinate key-value pair


///////////////////////////////////////////////////////////////////// This part of code not needed since DOM objects can also have attributes
let importedTiles = gameboard.tiles;

for (let x = 0; x < importedTiles.length; x++) {

    for (let y = 0; y < tileDOMs.length; y++>) {

        if (tileDOMs[y].id === `${importedTiles[x].x-coordinate}, ${importedTiles[x].y-coordinate}`) {

            tileDOMs[y].x-coordinate = importedTiles[x].x-coordinate;
            tileDOMs[y].y-coordinate = importedTiles[x].y-coordinate;

        }

    }

}

gameboardDOM.tiles = tileDOMs;
/////////////////////////////////////////////////////////////////////

shipclasses.forEach(shipclass) {

    shipclass.addEventListener('click', function shipclassListener() {
        gameboard.placedShips.currentlyPlacing = shipclass.id
        let length;
        if shipclass.id = 2length
            length = 2
        if shipclass.id = 3length
            length = 3
        if shipclass.id = 4length
            length = 4
        if shipclass.id = 5length
            length = 5

        if gameboard.placedShips[shipclass.id] > 0

            tileDOMs.forEach(tileDOM) {

                tileDOM.addEventListener('mouseover', shiphover(e))
                tileDOM.addEventListener('mouseout', shiphoverout(e))
                tileDOM.addEventListener('rightClick', shipflip(e))
                tileDOM.addEventListener('click', shipplace(e))

            }

           
        else 
            return?

    })

}

shiphover(e) {

    if (e.target.classList.contains('.tileDOM')) {

        let tileDOMinner = e.target;

    }   else {

        return

    }   

    -> include section for hoverout so that hover and unused do not stay if simply being hovered over (DONE)

    let hoverorientation = gameboard.placedShips.currentShipOrientation;
    let counter = 0;
    let shipcoordinates = [];
    let hoveredtiles = [];
    switch(hoverorientation) {
        case 'right':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate + counter}, ${tileDOMinner.y-coordinate}`);
                counter++
            }
        case 'left':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate - counter}, ${tileDOMinner.y-coordinate}`);
                counter++
            }
        case 'up':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate}, ${tileDOMinner.y-coordinate + counter}`);
                counter++
            }
        case 'down':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate}, ${tileDOMinner.y-coordinate - counter}`);
                counter++
            }

    }

    for (let x = 0; x < gameboardDOM.tiles.length; x++) {

        if shipcoordinates.includes(gameboardDOM.tiles[x].id) {

            hoveredtiles.push(gameboardDOM.tiles[x]);

        }

    }

    const hasUnusedinList = (tileDOMinner) => tileDOMinner.classlist.contains('unused');
    if (hoveredtiles.every(hasUnusedinList)) {
        for (let x = 0; x < hoveredtiles.length; x++) {

            hoveredtiles[x].classList.add('.hovered')

        }
    }   else {

        return //not enough for the hovered section
    }


}





shiphoverout(e) {

    //copy of shiphover() up until...

    const hasUnusedinList = (tileDOMinner) => tileDOMinner.classlist.contains('unused');
    if (hoveredtiles.every(hasUnusedinList)) {
        for (let x = 0; x < hoveredtiles.length; x++) {

            hoveredtiles[x].classList.remove('.hovered')

        }
    }   else {
        return //not enough for the hovered section
    }



}


shipflip(e) {
    //-> include a place that redos shiphover for that tile in order to account for the flipped orientation (DONE)
    //-> include section that removes existing .hovered from old tileDOMs that are no longer highlighted (DONE)

    if (e.target.classList.contains('.tileDOM')) {

        let tileDOMinner = e.target;

    }   else {

        return
    } 

    let direction = ['down', 'left', 'up', 'right'];
    let olddirection = direction.indexOf(`${gameboard.placedships.currentshiporientation}`);

    let counter = 0;
    let oldcoordinates = [];

    switch(olddirection) {
        case: 'right':
            while (counter < length) {
                oldcoordinates.push(`${tileDOMinner.x-coordinate + counter}, ${tileDOMinner.y-coordinate}`);
                counter++
            }

        case: 'down':

            while (counter < length) {
                oldcoordinates.push(`${tileDOMinner.x-coordinate}, ${tileDOMinner.y-coordinate - counter}`);
                counter++
            }


        case: 'left':

            while (counter < length) {
                oldcoordinates.push(`${tileDOMinner.x-coordinate - counter}, ${tileDOMinner.y-coordinate}`);
                counter++
            }

        case: 'up':

        while (counter < length) {
                oldcoordinates.push(`${tileDOMinner.x-coordinate}, ${tileDOMinner.y-coordinate + counter}`);
                counter++
            }

    }


    if (olddirection === 3) {

        gameboard.placedship.currentShipOrientation = direction[0];

        oldcoordinates.forEach(coordinate => {
            coordinate.classList.remove('.hovered')
        })

        shiphover(tileDOMinner);

    }   else {

        gameboard.placedship.currentShipOrientation = direction[olddirectionnumber + 1];

        oldcoordinates.forEach(coordinate => {
            coordinate.classList.remove('.hovered')
        })

        shiphover(tileDOMinner);

    }

}

shipplaced(e) {

    if (e.target.classList.contains('.tileDOM')) {

        let tileDOMinner = e.target;

    }   else {

        return
    } 

    -> include place that allows the gameboard.placedShips's number for the specific ship that was placed to be reduced by 1 each time a ship is placed (DONE)
    -> make sure gameboard.placedShips.currentlyPlacing is reset back to "non" after a ship is placed (DONE)

    let clickorientation = gameboard.placedship.currentShipOrientation;
    let counter = 0;
    let shipcoordinates = [];
    let clickedtiles = [];
    switch(clickorientation) {
        case 'right':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate + counter}, ${tileDOMinner.y-coordinate}`);
                counter++
            }
        case 'left':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate - counter}, ${tileDOMinner.y-coordinate}`);
                counter++
            }
        case 'up':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate}, ${tileDOMinner.y-coordinate + counter}`);
                counter++
            }
        case 'down':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner.x-coordinate}, ${tileDOMinner.y-coordinate - counter}`);
                counter++
            }

    }

    for (let x = 0; x < gameboardDOM.tiles.length; x++) {

        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {

            clickedtiles.push(gameboardDOM.tiles[x].id)

        }
    }

    tileDOMtotile(clickedtiles);

    const hasUnusedInList = (tileDOMinner) => tileDOMinner.classList.contains('unused');
    if (clickedtiles.every(hasUnusedInList)) {

        for (let x = 0; x < clickedtiles.length; x++) {
            clickedtiles[x].classList.add('used');
            clickedtiles[x].classList.remove('unused');
            clickedtiles[x].classList.remove('hovered');
        }

    }   else {

        return //not enough for the clicked section
    }

    gameboardPlacedShipSubtractor();

    gameboard.placedShip.currentlyPlacing = 'none';

    gameboardPlacedShipChecker();


}


    
tileDOMtotile(arrayofDOMelements) { //included in shipplaced() function

    let arrayofnonDOMtiles = [];

    for (let x = 0; x < gameboard.tiles.length; x++) {

        for (let y = 0; y < arrayofDOMelements.length; y++) {

            if (arrayofDOMelements[y].id === `${gameboard.tiles[x].x_coordinate}, ${gameboard.tiles[x].y_coordinate}`) {
                arrayofnonDOMtiles.push(gameboard.tiles[x]);
            }

        }

    }

    arrayofnonDOMtiles.foreach(tile => {
        tile.ship = gameboard.placedShip.currentlyPlacing;
    })


}



gameboardDOMfreezer() {   //in gameboardPlacedShipChecker() function

    //if all the gameboard.placedships are 0, (gotten from gameboardPlacedShipChecker) remove event listener from all the tileDOMs

    tileDOMs.forEach(tileDOM) {

        tileDOM.removeEventListener('mouseover', shiphover(e))
        tileDOM.removeEventListener('mouseout', shiphoverout(e))
        tileDOM.removeEventListener('rightClick', shipflip(e))
        tileDOM.removeEventListener('click', shipplace(e))


    }

    shipclasses.forEach(shipclass) => {
        shipclass.removeEventListener('click', shipclassListener);
    }

}

gameboardPlacedShipSubtractor() {

    //takes the shipname and subtracts gameboard.placedship of that ship by 1

    //gameboard.placedShips[gameboard.placedShips.currentlyPlacing] = gameboard.placedShips[gameboard.placedShips.currentlyPlacing] - 1;

    let currentShip = gameboard.placedShip.currentlyPLacing;

    gameboard.placedShip[currentShip] = gameboard.placedShip[currentShip] - 1;


}


gameboardPlacedShipChecker() {

    //checks if all the gameboard.placedShips are 0

    if (gameboard.placedShip.2length === 0 && gameboard.placedShip.3length === 0 && gameboard.placedShip.4length === 0 && gameboard.placedShip.5length === 0) {

        gameboardDOMfreezer();

    }

}

//Create a system for determining when both gameboards are placed

