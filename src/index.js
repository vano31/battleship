import "./style.css";
const { ship, tile, gameboard } = require("./ship");

let board1 = gameboard(10,10);


console.log('It works');

let twolengthbutton = document.createElement('button'); 
twolengthbutton.id = '2length';
twolengthbutton.textContent = 'Two Length Ship';
document.body.appendChild(twolengthbutton);

let threelengthbutton = document.createElement('button');
threelengthbutton.id = '3length';
threelengthbutton.textContent = 'Three Length Ship';
document.body.appendChild(threelengthbutton)

let fourthlengthbutton = document.createElement('button');
fourthlengthbutton.id = '4length';
fourthlengthbutton.textContent = 'Four Length Ship';
document.body.appendChild(fourthlengthbutton);

let fivelengthbutton = document.createElement('button'); 
fivelengthbutton.id = '5length';
fivelengthbutton.textContent = 'Five Length Ship';
document.body.appendChild(fivelengthbutton);

twolengthbutton.classList.add('shipclasses');
threelengthbutton.classList.add('shipclasses');
fourthlengthbutton.classList.add('shipclasses');
fivelengthbutton.classList.add('shipclasses');

let shipclasses = document.querySelectorAll('.shipclasses')

let gameboardDOM = document.createElement('div');
gameboardDOM.classList.add('gameboardDOM');
gameboardDOM.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 500px; height: 500px; display: flex; flex-wrap: wrap; align-items: flex-start');
gameboardDOM.tiles = [];

let length;



let tileDOMfactory = function(xamount,yamount, somecontainer) {

    for (let y = yamount - 1; y >= 0; y--) {


        for (let x = 0; x < xamount; x++) {


            let tileDOM = document.createElement('div');
            tileDOM.classList.add('tileDOM', 'unused');
            tileDOM.id = `${x}, ${y}`;
            tileDOM.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 50px; height: 50px;');
            tileDOM["x-coordinate"] = x;
            tileDOM["y-coordinate"] = y;

            somecontainer.appendChild(tileDOM);
            somecontainer.tiles.push(tileDOM);

        }


    }

    /*

    let x_coordinate = x;
    let y_coordinate = y;

    let tileDOM = document.createElement('div');
    tileDOM.classList.add('unused');

    tileDOM.id = `${x_coordinate}, ${y_coordinate}`;
    tileDOM.setAttribute('style', '  box-sizing: border-box; outline: 1px solid black; width: 200px; height; 200px;  ')


    */
}

tileDOMfactory(10,10, gameboardDOM);

////Testing

/*

console.log(board1.placedShips.currentlyPlacing);
console.log(shipclasses)

shipclasses.forEach((shipclass) => {

    shipclass.addEventListener('click', function() {

        console.log(shipclass.id)

    })


})

*/

////



document.body.appendChild(gameboardDOM);


let tileDOMs = document.querySelectorAll('.tileDOM');

shipclasses.forEach((shipclass) => {

    shipclass.addEventListener('click', function shipclassListener() {
        board1.placedShips.currentlyPlacing = shipclass.id


        if (shipclass.id === `2length`) {

            length = 2

        }
            
        if (shipclass.id === `3length`) {

            length = 3

        }
            
        if (shipclass.id === `4length`) {

            length = 4

        }
            
        if (shipclass.id === `5length`) {

            length = 5

        }
        

            

        if (board1.placedShips[shipclass.id] > 0) {

            

            tileDOMs.forEach((tileDOM) => {

            
                tileDOM.addEventListener('mouseover', shiphover)
                tileDOM.addEventListener('mouseout', shiphoverout)
                //tileDOM.addEventListener('rightClick', shipflip(e))
                //tileDOM.addEventListener('click', shipplace(e))

            })
            
            


        }   else {

            return

        }
    
        

    })

})


//////////////shiphover function 


let shiphover = function(e) {

    let tileDOMinner;
    console.log(length)

    if (e.target.classList.contains('tileDOM')) {


        tileDOMinner = e.target;
        

    }   else {


        return

    }   

    //-> include section for hoverout so that hover and unused do not stay if simply being hovered over (DONE)

    

    let hoverorientation = board1.placedShips.currentShipOrientation;
    let counter = 0;
    let shipcoordinates = [];
    let hoveredtiles = [];


    switch(hoverorientation) {
        case 'right':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"] + counter}, ${tileDOMinner["y-coordinate"]}`);
                counter++
            }
        case 'left':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"] - counter}, ${tileDOMinner["y-coordinate"]}`);
                counter++
            }
        case 'up':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"]}, ${tileDOMinner["y-coordinate"] + counter}`);
                counter++
            }
        case 'down':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"]}, ${tileDOMinner["y-coordinate"] - counter}`);
                counter++
            }

    }

    //console.log(length)

    for (let x = 0; x < gameboardDOM.tiles.length; x++) {

        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {

            hoveredtiles.push(gameboardDOM.tiles[x]);

        }

    }


    
    const hasUnusedinList = (example) => example.classList.contains('unused');
    if (hoveredtiles.every(hasUnusedinList) && hoveredtiles.length === length) {
        for (let x = 0; x < hoveredtiles.length; x++) {

            hoveredtiles[x].classList.add('hovered');
            console.log(hoveredtiles);
            //console.log('hello');

        }

        console.log(hoveredtiles)

    }   else {

        return //not enough for the hovered section
    }
    


}

/////////////////shiphoverout function 

let shiphoverout = function(e) {

    let tileDOMinner;
    console.log(length)

    if (e.target.classList.contains('tileDOM')) {


        tileDOMinner = e.target;
        

    }   else {


        return

    }   

    //-> include section for hoverout so that hover and unused do not stay if simply being hovered over (DONE)

    

    let hoverorientation = board1.placedShips.currentShipOrientation;
    let counter = 0;
    let shipcoordinates = [];
    let hoveredtiles = [];


    switch(hoverorientation) {
        case 'right':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"] + counter}, ${tileDOMinner["y-coordinate"]}`);
                counter++
            }
        case 'left':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"] - counter}, ${tileDOMinner["y-coordinate"]}`);
                counter++
            }
        case 'up':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"]}, ${tileDOMinner["y-coordinate"] + counter}`);
                counter++
            }
        case 'down':
            while (counter < length) {
                shipcoordinates.push(`${tileDOMinner["x-coordinate"]}, ${tileDOMinner["y-coordinate"] - counter}`);
                counter++
            }

    }

    //console.log(length)

    for (let x = 0; x < gameboardDOM.tiles.length; x++) {

        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {

            hoveredtiles.push(gameboardDOM.tiles[x]);

        }

    }


    
    const hasUnusedinList = (example) => example.classList.contains('unused');
    if (hoveredtiles.every(hasUnusedinList) && hoveredtiles.length === length) {
        for (let x = 0; x < hoveredtiles.length; x++) {

            hoveredtiles[x].classList.remove('hovered');
            console.log(hoveredtiles);
            //console.log('hello');

        }

        console.log(hoveredtiles)

    }   else {

        return //not enough for the hovered section
    }
    

}






//////////////////////////////////////

//console.log(tileDOMs)

/*
console.log(shipclasses)
console.log(tileDOMs);
console.log(gameboardDOM)
console.log(gameboardDOM.tiles)
*/

//console.log(gameboardDOM.tiles[0]["x-coordinate"])

//console.log(tileDOMs[9]["x-coordinate"]);
//console.log(tileDOMs[9]["y-coordinate"]);

//gameboardDOM.tiles.push(9);

//console.log(gameboardDOM);
//console.log(gameboardDOM.tiles)

/*
let GameboardDOMFactory = function() {

    let gameboardDOM = document.createElement('div');
    gameboardDOM.classList.add('gameboardDOM');

    //contain information for 

}

*/





////////////////////////////////Determining ship length

/*
let length;

let shipLengthDecider = function() {

    if (shipclass.id === `2length`) {

        length = 2

    }
        
    if (shipclass.id === `3length`) {

        length = 3

    }
        
    if (shipclass.id === `4length`) {

        length = 4

    }
        
    if (shipclass.id === `5length`) {

        length = 5

    }

}
*/

////////////////////////////////