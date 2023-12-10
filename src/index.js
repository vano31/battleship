const { tile } = require("./ship");

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


document.body.appendChild(gameboardDOM);
let tileDOMs = document.querySelectorAll('.tileDOM');










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





