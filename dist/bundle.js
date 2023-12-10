/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ship, tile, gameboard } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nlet board1 = gameboard(10,10);\n\n\nconsole.log('It works');\n\nlet twolengthbutton = document.createElement('button'); \ntwolengthbutton.id = '2length';\ntwolengthbutton.textContent = 'Two Length Ship';\ndocument.body.appendChild(twolengthbutton);\n\nlet threelengthbutton = document.createElement('button');\nthreelengthbutton.id = '3length';\nthreelengthbutton.textContent = 'Three Length Ship';\ndocument.body.appendChild(threelengthbutton)\n\nlet fourthlengthbutton = document.createElement('button');\nfourthlengthbutton.id = '4length';\nfourthlengthbutton.textContent = 'Four Length Ship';\ndocument.body.appendChild(fourthlengthbutton);\n\nlet fivelengthbutton = document.createElement('button'); \nfivelengthbutton.id = '5length';\nfivelengthbutton.textContent = 'Five Length Ship';\ndocument.body.appendChild(fivelengthbutton);\n\ntwolengthbutton.classList.add('shipclasses');\nthreelengthbutton.classList.add('shipclasses');\nfourthlengthbutton.classList.add('shipclasses');\nfivelengthbutton.classList.add('shipclasses');\n\nlet shipclasses = document.querySelectorAll('.shipclasses')\n\nlet gameboardDOM = document.createElement('div');\ngameboardDOM.classList.add('gameboardDOM');\ngameboardDOM.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 500px; height: 500px; display: flex; flex-wrap: wrap; align-items: flex-start');\ngameboardDOM.tiles = [];\n\nlet length;\n\n\n\nlet tileDOMfactory = function(xamount,yamount, somecontainer) {\n\n    for (let y = yamount - 1; y >= 0; y--) {\n\n\n        for (let x = 0; x < xamount; x++) {\n\n\n            let tileDOM = document.createElement('div');\n            tileDOM.classList.add('tileDOM', 'unused');\n            tileDOM.id = `${x}, ${y}`;\n            tileDOM.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 50px; height: 50px;');\n            tileDOM[\"x-coordinate\"] = x;\n            tileDOM[\"y-coordinate\"] = y;\n\n            somecontainer.appendChild(tileDOM);\n            somecontainer.tiles.push(tileDOM);\n\n        }\n\n\n    }\n\n    /*\n\n    let x_coordinate = x;\n    let y_coordinate = y;\n\n    let tileDOM = document.createElement('div');\n    tileDOM.classList.add('unused');\n\n    tileDOM.id = `${x_coordinate}, ${y_coordinate}`;\n    tileDOM.setAttribute('style', '  box-sizing: border-box; outline: 1px solid black; width: 200px; height; 200px;  ')\n\n\n    */\n}\n\ntileDOMfactory(10,10, gameboardDOM);\n\n////Testing\n\n/*\n\nconsole.log(board1.placedShips.currentlyPlacing);\nconsole.log(shipclasses)\n\nshipclasses.forEach((shipclass) => {\n\n    shipclass.addEventListener('click', function() {\n\n        console.log(shipclass.id)\n\n    })\n\n\n})\n\n*/\n\n////\n\n\n\ndocument.body.appendChild(gameboardDOM);\n\n\nlet tileDOMs = document.querySelectorAll('.tileDOM');\n\nshipclasses.forEach((shipclass) => {\n\n    shipclass.addEventListener('click', function shipclassListener() {\n        board1.placedShips.currentlyPlacing = shipclass.id\n\n\n        if (shipclass.id === `2length`) {\n\n            length = 2\n\n        }\n            \n        if (shipclass.id === `3length`) {\n\n            length = 3\n\n        }\n            \n        if (shipclass.id === `4length`) {\n\n            length = 4\n\n        }\n            \n        if (shipclass.id === `5length`) {\n\n            length = 5\n\n        }\n        \n\n            \n\n        if (board1.placedShips[shipclass.id] > 0) {\n\n            \n\n            tileDOMs.forEach((tileDOM) => {\n\n            \n                tileDOM.addEventListener('mouseover', shiphover)\n                //tileDOM.addEventListener('mouseout', shiphoverout(e))\n                //tileDOM.addEventListener('rightClick', shipflip(e))\n                //tileDOM.addEventListener('click', shipplace(e))\n\n            })\n            \n            \n\n\n        }   else {\n\n            return\n\n        }\n    \n        \n\n    })\n\n})\n\n\n\nlet shiphover = function(e) {\n\n    let tileDOMinner;\n    console.log(length)\n\n    if (e.target.classList.contains('tileDOM')) {\n\n\n        tileDOMinner = e.target;\n        \n\n    }   else {\n\n\n        return\n\n    }   \n\n    //-> include section for hoverout so that hover and unused do not stay if simply being hovered over (DONE)\n\n    \n\n    let hoverorientation = board1.placedShips.currentShipOrientation;\n    let counter = 0;\n    let shipcoordinates = [];\n    let hoveredtiles = [];\n\n\n    switch(hoverorientation) {\n        case 'right':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] + counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'left':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] - counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'up':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] + counter}`);\n                counter++\n            }\n        case 'down':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] - counter}`);\n                counter++\n            }\n\n    }\n\n    //console.log(length)\n\n    for (let x = 0; x < gameboardDOM.tiles.length; x++) {\n\n        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {\n\n            hoveredtiles.push(gameboardDOM.tiles[x]);\n\n        }\n\n    }\n\n\n    \n    const hasUnusedinList = (example) => example.classList.contains('unused');\n    if (hoveredtiles.every(hasUnusedinList) && hoveredtiles.length === length) {\n        for (let x = 0; x < hoveredtiles.length; x++) {\n\n            hoveredtiles[x].classList.add('hovered');\n            //console.log(hoveredtiles);\n            //console.log('hello');\n\n        }\n\n        console.log(hoveredtiles)\n\n    }   else {\n\n        return //not enough for the hovered section\n    }\n    \n\n\n}\n\n\n\n\n\n\n\n\n\n\n//console.log(tileDOMs)\n\n/*\nconsole.log(shipclasses)\nconsole.log(tileDOMs);\nconsole.log(gameboardDOM)\nconsole.log(gameboardDOM.tiles)\n*/\n\n//console.log(gameboardDOM.tiles[0][\"x-coordinate\"])\n\n//console.log(tileDOMs[9][\"x-coordinate\"]);\n//console.log(tileDOMs[9][\"y-coordinate\"]);\n\n//gameboardDOM.tiles.push(9);\n\n//console.log(gameboardDOM);\n//console.log(gameboardDOM.tiles)\n\n/*\nlet GameboardDOMFactory = function() {\n\n    let gameboardDOM = document.createElement('div');\n    gameboardDOM.classList.add('gameboardDOM');\n\n    //contain information for \n\n}\n\n*/\n\n\n\n\n\n////////////////////////////////Determining ship length\n\n/*\nlet length;\n\nlet shipLengthDecider = function() {\n\n    if (shipclass.id === `2length`) {\n\n        length = 2\n\n    }\n        \n    if (shipclass.id === `3length`) {\n\n        length = 3\n\n    }\n        \n    if (shipclass.id === `4length`) {\n\n        length = 4\n\n    }\n        \n    if (shipclass.id === `5length`) {\n\n        length = 5\n\n    }\n\n}\n*/\n\n////////////////////////////////\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("let ship = function(length, x_coordinate, y_coordinate, ship_name) {\n\n    let times_hit = 0;\n    let isSunk = function(times_hit) {\n\n        if (times_hit >= length) {\n\n            return true\n        }   else {\n            return false\n        }\n    };\n\n    return {length, times_hit, x_coordinate, y_coordinate, ship_name, isSunk};\n\n\n}\n\nlet tile = function(x_coordinate, y_coordinate) {\n\n\n    let ship = 5;\n\n\n    return {x_coordinate, y_coordinate, ship}\n}\n\n\n\nlet gameboard = function(x_size, y_size) {\n\n    \n\n    let tiles = [];\n    \n    for (let y = 0; y < y_size; y++) {\n\n        for (let x = 0; x < x_size; x++) {\n\n            let boardtile = tile(x,y)\n\n            tiles.push(boardtile);\n        }\n\n    }\n\n    let placedShips = {\n\n        currentlyPlacing: '',\n        currentShipOrientation: 'right',\n        '2length': 3,\n        '3length': 3,\n        '4length': 2,\n        '5length': 2\n\n\n    };\n    \n\n    return {x_size, y_size, tiles, placedShips};\n\n}\n\n\nlet player = function() {\n\n    return 1 ;\n\n}\n\n\n\n\n\n\n/////////////////////////////////////////////////////////////\nmodule.exports = {\n\n    ship,\n    tile,\n    gameboard,\n\n};\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;