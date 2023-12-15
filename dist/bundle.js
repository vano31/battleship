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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.hovered {\n\n    background-color: gray;\n\n}\n\n\n.used {\n\n    background-color: black;\n\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst { ship, tile, gameboard } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nlet board1 = gameboard(10,10);\nconsole.log(board1)\n\n\nconsole.log('It works');\n\nlet twolengthbutton = document.createElement('button'); \ntwolengthbutton.id = '2length';\ntwolengthbutton.textContent = 'Two Length Ship';\ndocument.body.appendChild(twolengthbutton);\n\nlet threelengthbutton = document.createElement('button');\nthreelengthbutton.id = '3length';\nthreelengthbutton.textContent = 'Three Length Ship';\ndocument.body.appendChild(threelengthbutton)\n\nlet fourthlengthbutton = document.createElement('button');\nfourthlengthbutton.id = '4length';\nfourthlengthbutton.textContent = 'Four Length Ship';\ndocument.body.appendChild(fourthlengthbutton);\n\nlet fivelengthbutton = document.createElement('button'); \nfivelengthbutton.id = '5length';\nfivelengthbutton.textContent = 'Five Length Ship';\ndocument.body.appendChild(fivelengthbutton);\n\ntwolengthbutton.classList.add('shipclasses');\nthreelengthbutton.classList.add('shipclasses');\nfourthlengthbutton.classList.add('shipclasses');\nfivelengthbutton.classList.add('shipclasses');\n\nlet shipclasses = document.querySelectorAll('.shipclasses')\n\nlet gameboardDOM = document.createElement('div');\ngameboardDOM.classList.add('gameboardDOM');\ngameboardDOM.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 500px; height: 500px; display: flex; flex-wrap: wrap; align-items: flex-start');\ngameboardDOM.tiles = [];\n\nlet length;\n\n\nlet tileDOMfactory = function(xamount,yamount, somecontainer) {\n\n    for (let y = yamount - 1; y >= 0; y--) {\n\n\n        for (let x = 0; x < xamount; x++) {\n\n            let tileDOM = document.createElement('div');\n            tileDOM.classList.add('tileDOM', 'unused');\n            tileDOM.id = `${x}, ${y}`;\n            tileDOM.setAttribute('style', 'box-sizing: border-box; outline: 1px solid black; width: 50px; height: 50px;');\n            tileDOM[\"x-coordinate\"] = x;\n            tileDOM[\"y-coordinate\"] = y;\n\n            somecontainer.appendChild(tileDOM);\n            somecontainer.tiles.push(tileDOM);\n\n        }\n\n    }\n\n    /*\n\n    let x_coordinate = x;\n    let y_coordinate = y;\n\n    let tileDOM = document.createElement('div');\n    tileDOM.classList.add('unused');\n\n    tileDOM.id = `${x_coordinate}, ${y_coordinate}`;\n    tileDOM.setAttribute('style', '  box-sizing: border-box; outline: 1px solid black; width: 200px; height; 200px;  ')\n\n\n    */\n}\n\ntileDOMfactory(10,10, gameboardDOM);\n\n////Testing\n\n/*\n\nconsole.log(board1.placedShips.currentlyPlacing);\nconsole.log(shipclasses)\n\nshipclasses.forEach((shipclass) => {\n\n    shipclass.addEventListener('click', function() {\n\n        console.log(shipclass.id)\n\n    })\n\n\n})\n\n*/\n\n\ndocument.body.appendChild(gameboardDOM);\n\nlet tileDOMs = document.querySelectorAll('.tileDOM');\n\nshipclasses.forEach((shipclass) => {\n\n    \n\n    shipclass.addEventListener('click', function shipclassListener() {\n        board1.placedShips.currentlyPlacing = shipclass.id\n\n        //console.log(board1)\n\n\n        if (shipclass.id === `2length`) {\n\n            length = 2\n\n        }\n            \n        if (shipclass.id === `3length`) {\n\n            length = 3\n\n        }\n            \n        if (shipclass.id === `4length`) {\n\n            length = 4\n\n        }\n            \n        if (shipclass.id === `5length`) {\n\n            length = 5\n\n        }\n        \n\n            \n\n        if (board1.placedShips[shipclass.id] > 0) {\n\n            \n\n            tileDOMs.forEach((tileDOM) => {\n\n            \n                tileDOM.addEventListener('mouseover', shiphover)\n                tileDOM.addEventListener('mouseout', shiphoverout)\n                tileDOM.addEventListener('contextmenu', shipflip)\n                tileDOM.addEventListener('click', shipplaced)\n\n            })\n            \n            \n\n\n        }   else {\n\n            return\n\n        }\n    \n        \n\n    })\n\n})\n\n\n\n\n\n//////////////shiphover function \n\nlet shiphover = function(e) {\n\n    let tileDOMinner;\n    //console.log(length)\n\n    //console.log(e);\n    //console.log(e.target)\n\n    if (e.target.classList.contains('tileDOM')) {\n\n\n        tileDOMinner = e.target;\n        \n\n    }   else {\n\n\n        return\n\n    }   \n\n    //-> include section for hoverout so that hover and unused do not stay if simply being hovered over (DONE)\n\n    \n\n    let hoverorientation = board1.placedShips.currentShipOrientation;\n    let counter = 0;\n    let shipcoordinates = [];\n    let hoveredtiles = [];\n\n\n    switch(hoverorientation) {\n        case 'right':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] + counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'left':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] - counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'up':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] + counter}`);\n                counter++\n            }\n        case 'down':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] - counter}`);\n                counter++\n            }\n\n    }\n\n    //console.log(length)\n\n    for (let x = 0; x < gameboardDOM.tiles.length; x++) {\n\n        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {\n\n            hoveredtiles.push(gameboardDOM.tiles[x]);\n\n        }\n\n    }\n\n\n    \n    const hasUnusedinList = (example) => example.classList.contains('unused');\n    if (hoveredtiles.every(hasUnusedinList) && hoveredtiles.length === length) {\n        for (let x = 0; x < hoveredtiles.length; x++) {\n\n            hoveredtiles[x].classList.add('hovered');\n            //console.log(hoveredtiles);\n            //console.log('hello');\n\n        }\n\n        //console.log(hoveredtiles)\n\n    }   else {\n\n        return //not enough for the hovered section\n    }\n    \n\n\n}\n\n/////////////////shiphoverout function \n\nlet shiphoverout = function(e) {\n\n    let tileDOMinner;\n    //console.log(length)\n\n    if (e.target.classList.contains('tileDOM')) {\n\n\n        tileDOMinner = e.target;\n        \n\n    }   else {\n\n\n        return\n\n    }   \n\n    //-> include section for hoverout so that hover and unused do not stay if simply being hovered over (DONE)\n\n    \n\n    let hoverorientation = board1.placedShips.currentShipOrientation;\n    let counter = 0;\n    let shipcoordinates = [];\n    let hoveredtiles = [];\n\n\n    switch(hoverorientation) {\n        case 'right':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] + counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'left':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] - counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'up':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] + counter}`);\n                counter++\n            }\n        case 'down':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] - counter}`);\n                counter++\n            }\n\n    }\n\n    //console.log(length)\n\n    for (let x = 0; x < gameboardDOM.tiles.length; x++) {\n\n        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {\n\n            hoveredtiles.push(gameboardDOM.tiles[x]);\n\n        }\n\n    }\n\n\n    \n    const hasUnusedinList = (example) => example.classList.contains('unused');\n    if (hoveredtiles.every(hasUnusedinList) && hoveredtiles.length === length) {\n        for (let x = 0; x < hoveredtiles.length; x++) {\n\n            hoveredtiles[x].classList.remove('hovered');\n            //console.log(hoveredtiles);\n            //console.log('hello');\n\n        }\n\n        //console.log(hoveredtiles)\n\n    }   else {\n\n        return //not enough for the hovered section\n    }\n    \n\n}\n\n////////////////shipflip function\n\nlet shipflip = function(e) {\n    //-> include a place that redos shiphover for that tile in order to account for the flipped orientation (DONE)\n    //-> include section that removes existing .hovered from old tileDOMs that are no longer highlighted (DONE)\n\n    e.preventDefault();\n    \n    tileDOMs.forEach((tileDOM) => {\n\n        tileDOM.classList.remove(\"hovered\")\n\n    });\n\n    e.target.classList.add(\"hovered\")\n\n    let tileDOMinner;\n\n    if (e.target.classList.contains('tileDOM')) {\n\n        tileDOMinner = e.target;\n\n    }   else {\n\n        return\n    } \n\n    //console.log(tileDOMinner);\n\n    let direction = ['down', 'left', 'up', 'right'];\n    //console.log(board1.placedShips.currentShipOrientation);\n\n    \n    let olddirection = direction.indexOf(`${board1.placedShips.currentShipOrientation}`);\n    //console.log(olddirection)\n\n\n    \n    let counter = 0;\n    let oldcoordinates = [];\n\n    switch(olddirection) {\n        case 'right':\n            while (counter < length) {\n                oldcoordinates.push(`${tileDOMinner[\"x-coordinate\"] + counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n\n            //console.log(oldcoordinates);\n\n\n        case 'down':\n\n            while (counter < length) {\n                oldcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] - counter}`);\n                counter++\n            }\n\n\n        case 'left':\n\n            while (counter < length) {\n                oldcoordinates.push(`${tileDOMinner[\"x-coordinate\"] - counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n\n        case 'up':\n\n        while (counter < length) {\n                oldcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] + counter}`);\n                counter++\n            }\n\n    }\n\n    //console.log(direction[0]);\n    //console.log(oldcoordinates);\n    \n\n    \n    if (olddirection === 3) {\n\n        board1.placedShips.currentShipOrientation = direction[0];\n\n        oldcoordinates.forEach(coordinate => {\n            coordinate.classList.remove('hovered')\n            //console.log(oldcoordinates);\n        })\n\n        //shiphover();\n\n    }   else {\n\n        board1.placedShips.currentShipOrientation = direction[olddirection + 1];\n\n        oldcoordinates.forEach(coordinate => {\n            coordinate.classList.remove('hovered')\n        })\n\n        //shiphover();\n\n    }\n    \n\n    \n\n}\n\n\n\n//////////shipplaced function\n\nlet shipplaced = function(e) {\n\n    let tileDOMinner;\n\n    if (e.target.classList.contains('tileDOM')) {\n\n        tileDOMinner = e.target;\n\n    }   else {\n\n        return\n    } \n\n    //-> include place that allows the gameboard.placedShips's number for the specific ship that was placed to be reduced by 1 each time a ship is placed (DONE)\n    //-> make sure gameboard.placedShips.currentlyPlacing is reset back to \"non\" after a ship is placed (DONE)\n\n    let clickorientation = board1.placedShips.currentShipOrientation;\n    let counter = 0;\n    let shipcoordinates = [];\n    let clickedtiles = [];\n    switch(clickorientation) {\n        case 'right':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] + counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'left':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"] - counter}, ${tileDOMinner[\"y-coordinate\"]}`);\n                counter++\n            }\n        case 'up':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] + counter}`);\n                counter++\n            }\n        case 'down':\n            while (counter < length) {\n                shipcoordinates.push(`${tileDOMinner[\"x-coordinate\"]}, ${tileDOMinner[\"y-coordinate\"] - counter}`);\n                counter++\n            }\n\n    }\n\n    for (let x = 0; x < gameboardDOM.tiles.length; x++) {\n\n        if (shipcoordinates.includes(gameboardDOM.tiles[x].id)) {\n\n            clickedtiles.push(gameboardDOM.tiles[x])\n\n        }\n    }\n\n    tileDOMtotile(clickedtiles);\n \n    const hasUnusedInList = (example) => example.classList.contains('unused');\n    if (clickedtiles.every(hasUnusedInList)) {\n\n        for (let x = 0; x < clickedtiles.length; x++) {\n            clickedtiles[x].classList.add('used');\n            clickedtiles[x].classList.remove('unused');\n            clickedtiles[x].classList.remove('hovered');\n        }\n\n    }   else {\n\n        return //not enough for the clicked section\n    }\n\n    gameboardPlacedShipSubtractor();\n\n    //board1.placedShips.currentlyPlacing = 'none';\n\n    gameboardPlacedShipChecker();\n    \n\n\n}\n\n\n///////////////////////tileDOMtotile() function\n\nlet tileDOMtotile = function(arrayofDOMelements) { //included in shipplaced() function\n\n    let arrayofnonDOMtiles = [];\n\n    for (let x = 0; x < board1.tiles.length; x++) {\n\n        for (let y = 0; y < arrayofDOMelements.length; y++) {\n\n            if (arrayofDOMelements[y].id === `${board1.tiles[x].x_coordinate}, ${board1.tiles[x].y_coordinate}`) {\n                arrayofnonDOMtiles.push(board1.tiles[x]);\n            }\n\n        }\n\n    }\n\n    arrayofnonDOMtiles.forEach((tile) => {\n        tile.ship = board1.placedShips.currentlyPlacing;\n    })\n\n    //console.log(board1.tiles);\n\n}\n\n\n\n\n//////////////////////gameboardPlacedShipSubtractor() function\n\nlet gameboardPlacedShipSubtractor = function() {\n\n    //takes the shipname and subtracts gameboard.placedship of that ship by 1\n\n    //gameboard.placedShips[gameboard.placedShips.currentlyPlacing] = gameboard.placedShips[gameboard.placedShips.currentlyPlacing] - 1;\n\n    //let currentShip = `${board1.placedShips.currentlyPlacing}`;\n    let currentShip = board1.placedShips.currentlyPlacing;\n    //console.log(currentShip);\n    //console.log(board1.placedShips);\n\n    //console.log(board1.placedShips[currentShip])\n\n    //board1.placedShips[currentShip]--;\n\n    //board1.placedShips[currentShip] = (board1.placedShips.currentlyPlacing[currentShip]) - 1;\n\n    //console.log(board1.placedShips);\n    \n    for (const key in board1.placedShips) {\n\n        if (board1.placedShips.hasOwnProperty(key)) {\n\n            if (key === currentShip) {\n\n                board1.placedShips[key] = board1.placedShips[key] - 1;\n    \n            }\n\n        }\n\n\n    }\n    \n    //console.log(board1);\n\n\n}\n\n\n//////////////gameboardPlacedShipChecker() function\n\nlet gameboardPlacedShipChecker = function() {\n\n    //checks if all the gameboard.placedShips are 0\n\n    if (board1.placedShips[\"2length\"] === 0 && board1.placedShips[\"3length\"] === 0 && board1.placedShips[\"4length\"] === 0 && board1.placedShips[\"5length\"] === 0) {\n\n        gameboardDOMfreezer();\n\n        console.log(\"Yo Yo Yo Yo Yo\")\n\n    }\n\n\n}\n\n\n\n////////////////gameboardDOMfreezer() function\n\nlet gameboardDOMfreezer = function() {   //in gameboardPlacedShipChecker() function\n\n    //if all the gameboard.placedships are 0, (gotten from gameboardPlacedShipChecker) remove event listener from all the tileDOMs\n\n    tileDOMs.forEach(tileDOM => {\n\n        tileDOM.removeEventListener('mouseover', shiphover)\n        tileDOM.removeEventListener('mouseout', shiphoverout)\n        tileDOM.removeEventListener('rightClick', shipflip)\n        tileDOM.removeEventListener('click', shipplaced)\n\n\n    })\n\n    console.log('yahoo yahoo')\n\n    /*\n    shipclasses.forEach(shipclass => {\n\n        shipclass.removeEventListener('click', shipclassListener)\n\n    })\n    */\n    \n    /*\n    tileDOMs.forEach(tileDOM) {\n\n        tileDOM.removeEventListener('mouseover', shiphover(e))\n        tileDOM.removeEventListener('mouseout', shiphoverout(e))\n        tileDOM.removeEventListener('rightClick', shipflip(e))\n        tileDOM.removeEventListener('click', shipplace(e))\n\n\n    }\n\n    shipclasses.forEach(shipclass) => {\n        shipclass.removeEventListener('click', shipclassListener);\n    }\n    */\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//////////////////////////////////////\n\n//console.log(tileDOMs)\n\n/*\nconsole.log(shipclasses)\nconsole.log(tileDOMs);\nconsole.log(gameboardDOM)\nconsole.log(gameboardDOM.tiles)\n*/\n\n//console.log(gameboardDOM.tiles[0][\"x-coordinate\"])\n\n//console.log(tileDOMs[9][\"x-coordinate\"]);\n//console.log(tileDOMs[9][\"y-coordinate\"]);\n\n//gameboardDOM.tiles.push(9);\n\n//console.log(gameboardDOM);\n//console.log(gameboardDOM.tiles)\n\n/*\nlet GameboardDOMFactory = function() {\n\n    let gameboardDOM = document.createElement('div');\n    gameboardDOM.classList.add('gameboardDOM');\n\n    //contain information for \n\n}\n\n*/\n\n\n\n\n\n////////////////////////////////Determining ship length\n\n/*\nlet length;\n\nlet shipLengthDecider = function() {\n\n    if (shipclass.id === `2length`) {\n\n        length = 2\n\n    }\n        \n    if (shipclass.id === `3length`) {\n\n        length = 3\n\n    }\n        \n    if (shipclass.id === `4length`) {\n\n        length = 4\n\n    }\n        \n    if (shipclass.id === `5length`) {\n\n        length = 5\n\n    }\n\n}\n*/\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("let ship = function(length, x_coordinate, y_coordinate, ship_name) {\n\n    let times_hit = 0;\n    let isSunk = function(times_hit) {\n\n        if (times_hit >= length) {\n\n            return true\n        }   else {\n            return false\n        }\n    };\n\n    return {length, times_hit, x_coordinate, y_coordinate, ship_name, isSunk};\n\n\n}\n\nlet tile = function(x_coordinate, y_coordinate) {\n\n\n    let ship = 'none';\n\n\n    return {x_coordinate, y_coordinate, ship}\n}\n\n\n\nlet gameboard = function(x_size, y_size) {\n\n    \n\n    let tiles = [];\n    \n    for (let y = 0; y < y_size; y++) {\n\n        for (let x = 0; x < x_size; x++) {\n\n            let boardtile = tile(x,y)\n\n            tiles.push(boardtile);\n        }\n\n    }\n\n    let placedShips = {\n\n        currentlyPlacing: '',\n        currentShipOrientation: 'right',\n        '2length': 3,\n        '3length': 3,\n        '4length': 2,\n        '5length': 2\n\n\n    };\n    \n\n    return {x_size, y_size, tiles, placedShips};\n\n}\n\n\nlet player = function() {\n\n    return 1 ;\n\n}\n\n\n\n\n\n\n/////////////////////////////////////////////////////////////\nmodule.exports = {\n\n    ship,\n    tile,\n    gameboard,\n\n};\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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