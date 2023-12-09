console.log('It works');

let twolengthbutton = document.createElement('button'); 
twolengthbutton.id = '2length';

let threelengthbutton = document.createElement('button');
threelengthbutton.id = '3length';

let fourthlengthbutton = document.createElement('button');
fourthlengthbutton.id = '4length';

let fivelengthbutton = document.createElement('button'); 
fivelengthbutton.id = '5length';

twolengthbutton.classList.add('shipclasses');
threelengthbutton.classList.add('shipclasses');
fourthlengthbutton.classList.add('shipclasses');
fivelengthbutton.classList.add('shipclasses');

let tileDOMfactory = function(x,y) {

    let x_coordinate = x;
    let y_coordinate = y;

    let tileDOM = document.createElement('div');
    tileDOM.classList.add('unused');

    tileDOM.id = `${x_coordinate}, ${y_coordinate}`;
    tileDOM.setAttribute('style', '  box-sizing: border-box; outline: 1px solid black; width: 200px; height; 200px;  ')


}

let GameboardDOMFactory = function() {

    let gameboardDOM = document.createElement('div');
    gameboardDOM.classList.add('gameboardDOM');

    //contain information for 



}

let shipclasses = document.querySelectorAll('.shipclasses')

