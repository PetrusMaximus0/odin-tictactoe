/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    background-color: beige;
}

h1{
    font-size: 2em;
}

h2,h1,h3{
    margin: 0;
    text-align: center;
}

li{
    list-style: none;
}

.grid-container{
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 5rem;
}

.board-tile{
    padding: 0;
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: grey;
    margin: -1px;

    font-family: sans-serif;
    font-size: 3em;
    font-weight:100;
    color: darkred;
}

.board-container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    
    width: 300px;
    height: 300px;
}

.restart {
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: grey;
    padding: 0.5rem 1rem;
    border-radius: 0.85rem;
}

.content-wrapper{
    display: grid;
    grid-template-rows: auto 1fr auto;
    justify-items: center;
    gap:2rem;

    border-radius: 1rem;
    background-color: lightskyblue;

    padding:2rem 3rem;
}
.nav-wrapper{
    display: grid;
    grid-template-rows: auto auto 1fr;
    justify-items: center;
    align-content: start;
    gap:2rem;

    border-radius: 1rem;
    background-color: lightskyblue;

    padding:2rem 3rem;
}

.options-cards{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2em;

    background-color: lightgreen;
    border-radius:1rem;       

    padding:1rem;
    width: 100%;
}

.options{
    display: flex;
    flex-direction: column;
    gap: 2em;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;;IAEZ,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;;IAElC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,QAAQ;;IAER,mBAAmB;IACnB,8BAA8B;;IAE9B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,oBAAoB;IACpB,QAAQ;;IAER,mBAAmB;IACnB,8BAA8B;;IAE9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;;IAEP,4BAA4B;IAC5B,kBAAkB;;IAElB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ","sourcesContent":["body{\n    background-color: beige;\n}\n\nh1{\n    font-size: 2em;\n}\n\nh2,h1,h3{\n    margin: 0;\n    text-align: center;\n}\n\nli{\n    list-style: none;\n}\n\n.grid-container{\n    display: grid;\n    grid-template-columns: auto auto 1fr;\n    gap: 5rem;\n}\n\n.board-tile{\n    padding: 0;\n    background-color: white;\n    border-width: 1px;\n    border-style: solid;\n    border-color: grey;\n    margin: -1px;\n\n    font-family: sans-serif;\n    font-size: 3em;\n    font-weight:100;\n    color: darkred;\n}\n\n.board-container{\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    \n    width: 300px;\n    height: 300px;\n}\n\n.restart {\n    background-color: white;\n    border-width: 1px;\n    border-style: solid;\n    border-color: grey;\n    padding: 0.5rem 1rem;\n    border-radius: 0.85rem;\n}\n\n.content-wrapper{\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    justify-items: center;\n    gap:2rem;\n\n    border-radius: 1rem;\n    background-color: lightskyblue;\n\n    padding:2rem 3rem;\n}\n.nav-wrapper{\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    justify-items: center;\n    align-content: start;\n    gap:2rem;\n\n    border-radius: 1rem;\n    background-color: lightskyblue;\n\n    padding:2rem 3rem;\n}\n\n.options-cards{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:2em;\n\n    background-color: lightgreen;\n    border-radius:1rem;       \n\n    padding:1rem;\n    width: 100%;\n}\n\n.options{\n    display: flex;\n    flex-direction: column;\n    gap: 2em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(setName, restartGame, advanceGame) {
    // Tiles
    const tileButtons = document.querySelectorAll(".board-tile")
    for ( let i = 0 ; i< tileButtons.length; i++){
        tileButtons[i].addEventListener("click", () =>{
        advanceGame(i);  
        })
    }

    // Restart/Start button
    const reStartButton = document.querySelector(".restart");
    reStartButton.addEventListener("click", () => {
        restartGame(); 
    })

    // Name Input
    const inputName = document.querySelector(".player-name-form");
    inputName.addEventListener("submit", (event)=>{

        //prevent default submission
        event.preventDefault();
        
        //get info from form
        let playerName = document.getElementById("name").value;

        //update name in player
        setName(playerName);    
    })
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* binding */ actions),
/* harmony export */   isDraw: () => (/* binding */ isDraw),
/* harmony export */   isTerminal: () => (/* binding */ isTerminal),
/* harmony export */   result: () => (/* binding */ result),
/* harmony export */   toMove: () => (/* binding */ toMove),
/* harmony export */   utility: () => (/* binding */ utility)
/* harmony export */ });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



//Returns the player whose turn is to play
function toMove(state){
    let tilesFilled = 0;

    state.boardTiles.forEach(tile => {
        if(tile.token !== "") tilesFilled++; 
    });

    if (tilesFilled % 2 !== 0) {
        return state.initialMax;
    }else{
        return state.initialMin;
    }
}

//Returns true if the game is in a Terminal stage.
//Only check for a draw after checking for a win. This avoids returning fake draws when the winning move is the last move.
function isTerminal(state){
    
    const playerWin = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])().checkWin(state.initialMin);
    const cpuWin = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])().checkWin(state.initialMax);
    const gameDraw = isDraw(state);
    
    return (playerWin || cpuWin || gameDraw);
}

//Returns the utility based on the state of the game (NOT based on which player's turn it is).
function utility(state, player){
    if((0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])().checkWin(state.initialMax)) {
        return 1;
    }else if ((0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])().checkWin(state.initialMin)){
        return -1;
    }else{
        return 0;
    }        
}

//Returns an array of permitted actions on a given game state.
function actions(state){
    const actions = [];
    for (let i = 0 ; i < state.boardTiles.length; i++) {
        if(state.boardTiles[i].token === '') {
            actions.push(i);
        }       
    }
    return actions;
}

//Returns true if the given game state is a draw.
function isDraw(state){
    let tilesFilled = 0;
    state.boardTiles.forEach(tile => {
        if(tile.token !== "") tilesFilled++;
    })
    return (tilesFilled === 9);
}

//Returns a new state given a previous state and a legal move.
function result(state, move){
    const newState = (0,_gameState__WEBPACK_IMPORTED_MODULE_0__["default"])(state.initialMin, state.initialMax, state.boardTiles);
    let currentPlayer = toMove(newState);
    let isMax = currentPlayer === state.initialMax;
    const token =  isMax ? "O" : "X";

    //Check if the move is legal.
    if(newState.boardTiles[move].token === ""){
        //Apply the move
        newState.boardTiles[move].token = token;

        //Add the move to the list of player moves.
        isMax ? newState.initialMax += (0b1 << move) : newState.initialMin += (0b1 << move) ;

    }else{
        console.error("Wrong move!");
    }

    return newState;
}


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const tiles = [];
    let tilesFilled = 0;

    //
    for(let i = 0; i < 9; i++){
        tiles.push({token: ''})                
    }

    //
    function setToken(index, token){
        if (tiles[index].token === ""){
            tiles[index].token = token;
            tilesFilled++;
            return true;
        }else{
            console.error("Spot is taken");
            return false;
        }
    }

    //
    function resetBoard(){
        for(let i = 0; i<tiles.length; i++){
            tiles[i].token = "";
        }
        tilesFilled = 0;
    }

    function getTilesFilled(){
        return tilesFilled;
    }
   
    return {getTilesFilled, tiles, setToken, resetBoard};
};

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameState)
/* harmony export */ });
function gameState(player1, player2, oldBoardTiles) {

    //board State
    const boardTiles = JSON.parse(JSON.stringify(oldBoardTiles));
        
    //players
    const initialMax = player2;
    const initialMin = player1;

    return {boardTiles, initialMax, initialMin};
}

/***/ }),

/***/ "./src/minimax.js":
/*!************************!*\
  !*** ./src/minimax.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maxValue: () => (/* binding */ maxValue),
/* harmony export */   minValue: () => (/* binding */ minValue),
/* harmony export */   miniMaxSearch: () => (/* binding */ miniMaxSearch)
/* harmony export */ });
function miniMaxSearch(game, state){ 
    const {value, move} = maxValue(game, state);
    return move;
}

function maxValue(game, state){
    if(game.isTerminal(state)) 
        return {value: game.utility(state, game.toMove(state)), move: null};
    
    let value = -Infinity;
    let move = null;
    
    const validMoves = game.actions(state);
    validMoves.forEach(validMove => {
        let {value: value2} = minValue(game, game.result(state, validMove));
        if(value2 > value){
            value = value2;
            move = validMove;
        }
        
    });

    return {value, move};
}

function minValue(game, state){

    if(game.isTerminal(state)) 
        return {value: game.utility(state, game.toMove(state)), move: null};

    let value = Infinity;
    let move = null;
    const validMoves = game.actions(state);

    validMoves.forEach(validMove => {
        let {value: value2} = maxValue(game, game.result(state, validMove));
        if(value2 < value){
            value = value2;
            move = validMove;
        }
        
    });

    return {value, move};
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, token) {
    let wins = 0;
    let playerMoves = 0b000000000;
    function addMove(move){
        playerMoves = playerMoves + (0b1 << move);
    };
    function resetMoves(){
        playerMoves = 0b000000000;
    }
    function getPlayerMoves(){return playerMoves};
    function getName() {return name};
    function setName(newName) {name = newName};
    function getToken() {return token};
    function setToken(newToken) {token = newToken};
    function getWins(){return wins};
    function incrementWins(){wins +=1};
    function checkWin( moves = playerMoves ){
        const winningCombos = [
            0b000000111,
            0b000111000,
            0b111000000,
            0b100010001,
            0b001001001,
            0b010010010,
            0b100100100,
            0b001010100,
        ]
        let value = false;
        winningCombos.forEach(combo=>{
            if(combo === (moves & combo)){
                value = true;
            }
        })
         return value;
    }

    return {
        addMove,
        resetMoves,
        getPlayerMoves,
        getName,
        setName,
        getToken,
        setToken,
        getWins,
        incrementWins,
        checkWin,
    }
}

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const tileButtons = document.querySelectorAll(".board-tile");
    const playerName = document.querySelector(".player > .name");
    const victories = document.querySelectorAll(".victories");
    const tokens = document.querySelectorAll(".token");
    const gameMessage = document.querySelector(".message");
    const restartButton = document.querySelector(".restart");

    function updatePlayerToken(index, token) {
        tokens[index].textContent = `Token: ${token}`;
    }

    function updateGameMessage(message) {
        gameMessage.textContent = `${message}`;
    }

    function updateVictories(value1, value2) {
        victories[0].textContent = `Wins: ${value1}`;
        victories[1].textContent = `Wins: ${value2}`;
    }

    function updateName(name){
        playerName.textContent = `${name}`;
    }

    function updateTile(index, token){
        tileButtons[index].textContent = `${token}`;
    }

    function resetTiles(){
        tileButtons.forEach(tile=> {
            tile.textContent = "";
        });
    }

    function updateRestartButton(value){
        restartButton.textContent = `${value}`;
    }
    // Return an object with the inner functions
    return {
        updatePlayerToken,
        updateGameMessage,
        updateVictories,
        updateName,
        updateTile,
        resetTiles,
        updateRestartButton,
    };  
}    
    


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _minimax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minimax */ "./src/minimax.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");








//
function restartGame(){
    if(gameStarted === false) {
        gameStarted = true;
        (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateRestartButton("RESTART");
        console.log("Started the game!");
    }
    gameOngoing = true;
    board.resetBoard();
    player1.resetMoves();
    player2.resetMoves();

    //reset board tiles
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateGameMessage("Game on!");
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateVictories(player1.getWins(), player2.getWins());
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().resetTiles();
    
}

//add a move
function addPlayerMove(player, ply){
    //Process player1 move
    if(board.tiles[ply].token === "") {
        //process the move
        player.addMove(ply);
        board.setToken(ply, player.getToken());

        //update the DOM
        (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateTile(ply, player.getToken());
        return true;
    }else{
        console.log("Invalid Move.");
        return false;
    }
}

//
function advanceGame(ply){
    if(gameOngoing === true){

        //Process player1 move
        if(!addPlayerMove(player1, ply)) {
            console.log("Invalid playerMove!");
            return;
        }

        //check if player1 has won the game
        if(player1.checkWin()){         
            
            player1.incrementWins();
            console.log("Player1 wins!");
            (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateGameMessage(`${player1.getName()} wins!`);
            (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateVictories(player1.getWins(), player2.getWins());
            gameOngoing = false;
            return;

        }
        
        //check for a draw
        if(board.getTilesFilled() === 9){
            (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateGameMessage("The game ended in a draw!");
            gameOngoing = false;
            console.log("Game ends in a draw!");
            return;
        }

        //process a CPU play
        //cpuRandomMove();
        const cpuMove = cpuMiniMaxMove();

        if(!addPlayerMove(player2, cpuMove)){
            console.error("Invalid CPU move");
            return;

        }

        //check if the cpu has won the game
        if(player2.checkWin()){
            player2.incrementWins();
            (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateGameMessage(`${player2.getName()} wins!`);
            (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateVictories(player1.getWins(), player2.getWins());
            gameOngoing = false;
            return;
        }

    }else{
        alert("Click the Restart/Start button to begin playing!");
    }
}

//
function initGame(){
    console.log("Initializing");
    let gameMessage = "Start a new game!";

    //Initialize the visuals
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateGameMessage(gameMessage);
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updatePlayerToken(0, player1.getToken());
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updatePlayerToken(1, player2.getToken());
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateVictories(0, 0);
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateName(player1.getName())

}

//
function cpuRandomMove(){
    //set up computer move. temporary solution
    for(let i = 0; i<1000; i++){
        let move = Math.floor(Math.random()*8);
        if(addPlayerMove(player2, move)) {
            break;
        }
    }
}

//
function cpuMiniMaxMove(){
    const gameState = (0,_gameState__WEBPACK_IMPORTED_MODULE_7__["default"])(player1.getPlayerMoves(), player2.getPlayerMoves(), board.tiles);       
    const move = _minimax__WEBPACK_IMPORTED_MODULE_5__.miniMaxSearch(_game__WEBPACK_IMPORTED_MODULE_6__, gameState);
    return move;
}

//
function setPlayerName(playerName){
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])().updateName(playerName);//update in the dom
    player1.setName(playerName);//update in the player state
}

//bind Controller
(0,_controller__WEBPACK_IMPORTED_MODULE_2__["default"])(setPlayerName, restartGame, advanceGame);

//instantiate players
const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("Player", "X");
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])("CPU", "O");

//instantiate the game board, which contains the game state.
const board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__["default"])();

//initialise game variables
let gameStarted = false;
let gameOngoing = false;

//Initialise
initGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBUSx3QkFBd0IsbUJBQW1CO0FBQy9ELFlBQVkscURBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFRLHdCQUF3QixtQkFBbUI7QUFDL0QsWUFBWSxxREFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkscURBQVE7QUFDWixJQUFJLHFEQUFRO0FBQ1osSUFBSSxxREFBUTtBQUNaLElBQUkscURBQVE7QUFDWixJQUFJLHFEQUFROztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFTO0FBQy9CLGlCQUFpQixtREFBcUIsQ0FBQyxrQ0FBSTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRLDBCQUEwQjtBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSx1REFBYzs7QUFFZDtBQUNBLGdCQUFnQixtREFBTTtBQUN0QixnQkFBZ0IsbURBQU07O0FBRXRCO0FBQ0EsY0FBYyxzREFBUzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9zcmMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL21pbmltYXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG5oMXtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuaDIsaDEsaDN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmdyaWQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyO1xuICAgIGdhcDogNXJlbTtcbn1cblxuLmJvYXJkLXRpbGV7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICBtYXJnaW46IC0xcHg7XG5cbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDoxMDA7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5ib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnJlc3RhcnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuODVyZW07XG59XG5cbi5jb250ZW50LXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDoycmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG5cbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcbn1cbi5uYXYtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOjJyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcblxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xufVxuXG4ub3B0aW9ucy1jYXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOjJlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czoxcmVtOyAgICAgICBcblxuICAgIHBhZGRpbmc6MXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7O0lBRVosdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0NBQWtDOztJQUVsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsUUFBUTs7SUFFUixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixRQUFROztJQUVSLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLE9BQU87O0lBRVAsNEJBQTRCO0lBQzVCLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmgyLGgxLGgze1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBnYXA6IDVyZW07XFxufVxcblxcbi5ib2FyZC10aWxle1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgbWFyZ2luOiAtMXB4O1xcblxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuODVyZW07XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MnJlbTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcblxcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcXG59XFxuLm5hdi13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDoycmVtO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuXFxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xcbn1cXG5cXG4ub3B0aW9ucy1jYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoyZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6MXJlbTsgICAgICAgXFxuXFxuICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vcHRpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNldE5hbWUsIHJlc3RhcnRHYW1lLCBhZHZhbmNlR2FtZSkge1xuICAgIC8vIFRpbGVzXG4gICAgY29uc3QgdGlsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXRpbGVcIilcbiAgICBmb3IgKCBsZXQgaSA9IDAgOyBpPCB0aWxlQnV0dG9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRpbGVCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgYWR2YW5jZUdhbWUoaSk7ICBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZXN0YXJ0L1N0YXJ0IGJ1dHRvblxuICAgIGNvbnN0IHJlU3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRcIik7XG4gICAgcmVTdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXN0YXJ0R2FtZSgpOyBcbiAgICB9KVxuXG4gICAgLy8gTmFtZSBJbnB1dFxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW5hbWUtZm9ybVwiKTtcbiAgICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpPT57XG5cbiAgICAgICAgLy9wcmV2ZW50IGRlZmF1bHQgc3VibWlzc2lvblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgLy9nZXQgaW5mbyBmcm9tIGZvcm1cbiAgICAgICAgbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XG5cbiAgICAgICAgLy91cGRhdGUgbmFtZSBpbiBwbGF5ZXJcbiAgICAgICAgc2V0TmFtZShwbGF5ZXJOYW1lKTsgICAgXG4gICAgfSlcbn0iLCJpbXBvcnQgZ2FtZVN0YXRlIGZyb20gXCIuL2dhbWVTdGF0ZVwiXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCJcclxuXHJcbi8vUmV0dXJucyB0aGUgcGxheWVyIHdob3NlIHR1cm4gaXMgdG8gcGxheVxyXG5leHBvcnQgZnVuY3Rpb24gdG9Nb3ZlKHN0YXRlKXtcclxuICAgIGxldCB0aWxlc0ZpbGxlZCA9IDA7XHJcblxyXG4gICAgc3RhdGUuYm9hcmRUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgIGlmKHRpbGUudG9rZW4gIT09IFwiXCIpIHRpbGVzRmlsbGVkKys7IFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRpbGVzRmlsbGVkICUgMiAhPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5pbml0aWFsTWF4O1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLmluaXRpYWxNaW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vUmV0dXJucyB0cnVlIGlmIHRoZSBnYW1lIGlzIGluIGEgVGVybWluYWwgc3RhZ2UuXHJcbi8vT25seSBjaGVjayBmb3IgYSBkcmF3IGFmdGVyIGNoZWNraW5nIGZvciBhIHdpbi4gVGhpcyBhdm9pZHMgcmV0dXJuaW5nIGZha2UgZHJhd3Mgd2hlbiB0aGUgd2lubmluZyBtb3ZlIGlzIHRoZSBsYXN0IG1vdmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Rlcm1pbmFsKHN0YXRlKXtcclxuICAgIFxyXG4gICAgY29uc3QgcGxheWVyV2luID0gUGxheWVyKCkuY2hlY2tXaW4oc3RhdGUuaW5pdGlhbE1pbik7XHJcbiAgICBjb25zdCBjcHVXaW4gPSBQbGF5ZXIoKS5jaGVja1dpbihzdGF0ZS5pbml0aWFsTWF4KTtcclxuICAgIGNvbnN0IGdhbWVEcmF3ID0gaXNEcmF3KHN0YXRlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChwbGF5ZXJXaW4gfHwgY3B1V2luIHx8IGdhbWVEcmF3KTtcclxufVxyXG5cclxuLy9SZXR1cm5zIHRoZSB1dGlsaXR5IGJhc2VkIG9uIHRoZSBzdGF0ZSBvZiB0aGUgZ2FtZSAoTk9UIGJhc2VkIG9uIHdoaWNoIHBsYXllcidzIHR1cm4gaXQgaXMpLlxyXG5leHBvcnQgZnVuY3Rpb24gdXRpbGl0eShzdGF0ZSwgcGxheWVyKXtcclxuICAgIGlmKFBsYXllcigpLmNoZWNrV2luKHN0YXRlLmluaXRpYWxNYXgpKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9ZWxzZSBpZiAoUGxheWVyKCkuY2hlY2tXaW4oc3RhdGUuaW5pdGlhbE1pbikpe1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSAgICAgICAgXHJcbn1cclxuXHJcbi8vUmV0dXJucyBhbiBhcnJheSBvZiBwZXJtaXR0ZWQgYWN0aW9ucyBvbiBhIGdpdmVuIGdhbWUgc3RhdGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25zKHN0YXRlKXtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHN0YXRlLmJvYXJkVGlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihzdGF0ZS5ib2FyZFRpbGVzW2ldLnRva2VuID09PSAnJykge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goaSk7XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBhY3Rpb25zO1xyXG59XHJcblxyXG4vL1JldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZ2FtZSBzdGF0ZSBpcyBhIGRyYXcuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RyYXcoc3RhdGUpe1xyXG4gICAgbGV0IHRpbGVzRmlsbGVkID0gMDtcclxuICAgIHN0YXRlLmJvYXJkVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICBpZih0aWxlLnRva2VuICE9PSBcIlwiKSB0aWxlc0ZpbGxlZCsrO1xyXG4gICAgfSlcclxuICAgIHJldHVybiAodGlsZXNGaWxsZWQgPT09IDkpO1xyXG59XHJcblxyXG4vL1JldHVybnMgYSBuZXcgc3RhdGUgZ2l2ZW4gYSBwcmV2aW91cyBzdGF0ZSBhbmQgYSBsZWdhbCBtb3ZlLlxyXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0KHN0YXRlLCBtb3ZlKXtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0gZ2FtZVN0YXRlKHN0YXRlLmluaXRpYWxNaW4sIHN0YXRlLmluaXRpYWxNYXgsIHN0YXRlLmJvYXJkVGlsZXMpO1xyXG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSB0b01vdmUobmV3U3RhdGUpO1xyXG4gICAgbGV0IGlzTWF4ID0gY3VycmVudFBsYXllciA9PT0gc3RhdGUuaW5pdGlhbE1heDtcclxuICAgIGNvbnN0IHRva2VuID0gIGlzTWF4ID8gXCJPXCIgOiBcIlhcIjtcclxuXHJcbiAgICAvL0NoZWNrIGlmIHRoZSBtb3ZlIGlzIGxlZ2FsLlxyXG4gICAgaWYobmV3U3RhdGUuYm9hcmRUaWxlc1ttb3ZlXS50b2tlbiA9PT0gXCJcIil7XHJcbiAgICAgICAgLy9BcHBseSB0aGUgbW92ZVxyXG4gICAgICAgIG5ld1N0YXRlLmJvYXJkVGlsZXNbbW92ZV0udG9rZW4gPSB0b2tlbjtcclxuXHJcbiAgICAgICAgLy9BZGQgdGhlIG1vdmUgdG8gdGhlIGxpc3Qgb2YgcGxheWVyIG1vdmVzLlxyXG4gICAgICAgIGlzTWF4ID8gbmV3U3RhdGUuaW5pdGlhbE1heCArPSAoMGIxIDw8IG1vdmUpIDogbmV3U3RhdGUuaW5pdGlhbE1pbiArPSAoMGIxIDw8IG1vdmUpIDtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiV3JvbmcgbW92ZSFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRpbGVzID0gW107XG4gICAgbGV0IHRpbGVzRmlsbGVkID0gMDtcblxuICAgIC8vXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDk7IGkrKyl7XG4gICAgICAgIHRpbGVzLnB1c2goe3Rva2VuOiAnJ30pICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIC8vXG4gICAgZnVuY3Rpb24gc2V0VG9rZW4oaW5kZXgsIHRva2VuKXtcbiAgICAgICAgaWYgKHRpbGVzW2luZGV4XS50b2tlbiA9PT0gXCJcIil7XG4gICAgICAgICAgICB0aWxlc1tpbmRleF0udG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIHRpbGVzRmlsbGVkKys7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU3BvdCBpcyB0YWtlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgZnVuY3Rpb24gcmVzZXRCb2FyZCgpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRpbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRpbGVzW2ldLnRva2VuID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aWxlc0ZpbGxlZCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGlsZXNGaWxsZWQoKXtcbiAgICAgICAgcmV0dXJuIHRpbGVzRmlsbGVkO1xuICAgIH1cbiAgIFxuICAgIHJldHVybiB7Z2V0VGlsZXNGaWxsZWQsIHRpbGVzLCBzZXRUb2tlbiwgcmVzZXRCb2FyZH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVTdGF0ZShwbGF5ZXIxLCBwbGF5ZXIyLCBvbGRCb2FyZFRpbGVzKSB7XHJcblxyXG4gICAgLy9ib2FyZCBTdGF0ZVxyXG4gICAgY29uc3QgYm9hcmRUaWxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2xkQm9hcmRUaWxlcykpO1xyXG4gICAgICAgIFxyXG4gICAgLy9wbGF5ZXJzXHJcbiAgICBjb25zdCBpbml0aWFsTWF4ID0gcGxheWVyMjtcclxuICAgIGNvbnN0IGluaXRpYWxNaW4gPSBwbGF5ZXIxO1xyXG5cclxuICAgIHJldHVybiB7Ym9hcmRUaWxlcywgaW5pdGlhbE1heCwgaW5pdGlhbE1pbn07XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWluaU1heFNlYXJjaChnYW1lLCBzdGF0ZSl7IFxuICAgIGNvbnN0IHt2YWx1ZSwgbW92ZX0gPSBtYXhWYWx1ZShnYW1lLCBzdGF0ZSk7XG4gICAgcmV0dXJuIG1vdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhWYWx1ZShnYW1lLCBzdGF0ZSl7XG4gICAgaWYoZ2FtZS5pc1Rlcm1pbmFsKHN0YXRlKSkgXG4gICAgICAgIHJldHVybiB7dmFsdWU6IGdhbWUudXRpbGl0eShzdGF0ZSwgZ2FtZS50b01vdmUoc3RhdGUpKSwgbW92ZTogbnVsbH07XG4gICAgXG4gICAgbGV0IHZhbHVlID0gLUluZmluaXR5O1xuICAgIGxldCBtb3ZlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2YWxpZE1vdmVzID0gZ2FtZS5hY3Rpb25zKHN0YXRlKTtcbiAgICB2YWxpZE1vdmVzLmZvckVhY2godmFsaWRNb3ZlID0+IHtcbiAgICAgICAgbGV0IHt2YWx1ZTogdmFsdWUyfSA9IG1pblZhbHVlKGdhbWUsIGdhbWUucmVzdWx0KHN0YXRlLCB2YWxpZE1vdmUpKTtcbiAgICAgICAgaWYodmFsdWUyID4gdmFsdWUpe1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZTI7XG4gICAgICAgICAgICBtb3ZlID0gdmFsaWRNb3ZlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt2YWx1ZSwgbW92ZX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5WYWx1ZShnYW1lLCBzdGF0ZSl7XG5cbiAgICBpZihnYW1lLmlzVGVybWluYWwoc3RhdGUpKSBcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogZ2FtZS51dGlsaXR5KHN0YXRlLCBnYW1lLnRvTW92ZShzdGF0ZSkpLCBtb3ZlOiBudWxsfTtcblxuICAgIGxldCB2YWx1ZSA9IEluZmluaXR5O1xuICAgIGxldCBtb3ZlID0gbnVsbDtcbiAgICBjb25zdCB2YWxpZE1vdmVzID0gZ2FtZS5hY3Rpb25zKHN0YXRlKTtcblxuICAgIHZhbGlkTW92ZXMuZm9yRWFjaCh2YWxpZE1vdmUgPT4ge1xuICAgICAgICBsZXQge3ZhbHVlOiB2YWx1ZTJ9ID0gbWF4VmFsdWUoZ2FtZSwgZ2FtZS5yZXN1bHQoc3RhdGUsIHZhbGlkTW92ZSkpO1xuICAgICAgICBpZih2YWx1ZTIgPCB2YWx1ZSl7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlMjtcbiAgICAgICAgICAgIG1vdmUgPSB2YWxpZE1vdmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge3ZhbHVlLCBtb3ZlfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB0b2tlbikge1xuICAgIGxldCB3aW5zID0gMDtcbiAgICBsZXQgcGxheWVyTW92ZXMgPSAwYjAwMDAwMDAwMDtcbiAgICBmdW5jdGlvbiBhZGRNb3ZlKG1vdmUpe1xuICAgICAgICBwbGF5ZXJNb3ZlcyA9IHBsYXllck1vdmVzICsgKDBiMSA8PCBtb3ZlKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlc2V0TW92ZXMoKXtcbiAgICAgICAgcGxheWVyTW92ZXMgPSAwYjAwMDAwMDAwMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UGxheWVyTW92ZXMoKXtyZXR1cm4gcGxheWVyTW92ZXN9O1xuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7cmV0dXJuIG5hbWV9O1xuICAgIGZ1bmN0aW9uIHNldE5hbWUobmV3TmFtZSkge25hbWUgPSBuZXdOYW1lfTtcbiAgICBmdW5jdGlvbiBnZXRUb2tlbigpIHtyZXR1cm4gdG9rZW59O1xuICAgIGZ1bmN0aW9uIHNldFRva2VuKG5ld1Rva2VuKSB7dG9rZW4gPSBuZXdUb2tlbn07XG4gICAgZnVuY3Rpb24gZ2V0V2lucygpe3JldHVybiB3aW5zfTtcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRXaW5zKCl7d2lucyArPTF9O1xuICAgIGZ1bmN0aW9uIGNoZWNrV2luKCBtb3ZlcyA9IHBsYXllck1vdmVzICl7XG4gICAgICAgIGNvbnN0IHdpbm5pbmdDb21ib3MgPSBbXG4gICAgICAgICAgICAwYjAwMDAwMDExMSxcbiAgICAgICAgICAgIDBiMDAwMTExMDAwLFxuICAgICAgICAgICAgMGIxMTEwMDAwMDAsXG4gICAgICAgICAgICAwYjEwMDAxMDAwMSxcbiAgICAgICAgICAgIDBiMDAxMDAxMDAxLFxuICAgICAgICAgICAgMGIwMTAwMTAwMTAsXG4gICAgICAgICAgICAwYjEwMDEwMDEwMCxcbiAgICAgICAgICAgIDBiMDAxMDEwMTAwLFxuICAgICAgICBdXG4gICAgICAgIGxldCB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICB3aW5uaW5nQ29tYm9zLmZvckVhY2goY29tYm89PntcbiAgICAgICAgICAgIGlmKGNvbWJvID09PSAobW92ZXMgJiBjb21ibykpe1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRNb3ZlLFxuICAgICAgICByZXNldE1vdmVzLFxuICAgICAgICBnZXRQbGF5ZXJNb3ZlcyxcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgZ2V0VG9rZW4sXG4gICAgICAgIHNldFRva2VuLFxuICAgICAgICBnZXRXaW5zLFxuICAgICAgICBpbmNyZW1lbnRXaW5zLFxuICAgICAgICBjaGVja1dpbixcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRpbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC10aWxlXCIpO1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllciA+IC5uYW1lXCIpO1xuICAgIGNvbnN0IHZpY3RvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmljdG9yaWVzXCIpO1xuICAgIGNvbnN0IHRva2VucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9rZW5cIik7XG4gICAgY29uc3QgZ2FtZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VcIik7XG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydFwiKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBsYXllclRva2VuKGluZGV4LCB0b2tlbikge1xuICAgICAgICB0b2tlbnNbaW5kZXhdLnRleHRDb250ZW50ID0gYFRva2VuOiAke3Rva2VufWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlR2FtZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBnYW1lTWVzc2FnZS50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWN0b3JpZXModmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAgICAgdmljdG9yaWVzWzBdLnRleHRDb250ZW50ID0gYFdpbnM6ICR7dmFsdWUxfWA7XG4gICAgICAgIHZpY3Rvcmllc1sxXS50ZXh0Q29udGVudCA9IGBXaW5zOiAke3ZhbHVlMn1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hbWUobmFtZSl7XG4gICAgICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGlsZShpbmRleCwgdG9rZW4pe1xuICAgICAgICB0aWxlQnV0dG9uc1tpbmRleF0udGV4dENvbnRlbnQgPSBgJHt0b2tlbn1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VGlsZXMoKXtcbiAgICAgICAgdGlsZUJ1dHRvbnMuZm9yRWFjaCh0aWxlPT4ge1xuICAgICAgICAgICAgdGlsZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJlc3RhcnRCdXR0b24odmFsdWUpe1xuICAgICAgICByZXN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBpbm5lciBmdW5jdGlvbnNcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVQbGF5ZXJUb2tlbixcbiAgICAgICAgdXBkYXRlR2FtZU1lc3NhZ2UsXG4gICAgICAgIHVwZGF0ZVZpY3RvcmllcyxcbiAgICAgICAgdXBkYXRlTmFtZSxcbiAgICAgICAgdXBkYXRlVGlsZSxcbiAgICAgICAgcmVzZXRUaWxlcyxcbiAgICAgICAgdXBkYXRlUmVzdGFydEJ1dHRvbixcbiAgICB9OyAgXG59ICAgIFxuICAgIFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcbmltcG9ydCByZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiXG5pbXBvcnQgaW5pdENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlclwiXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiXG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiXG5pbXBvcnQgKiBhcyBtaW5pTWF4IGZyb20gXCIuL21pbmltYXhcIlxuaW1wb3J0ICogYXMgZ2FtZSBmcm9tIFwiLi9nYW1lXCJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vZ2FtZVN0YXRlXCJcbi8vXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpe1xuICAgIGlmKGdhbWVTdGFydGVkID09PSBmYWxzZSkge1xuICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHJlbmRlcmVyKCkudXBkYXRlUmVzdGFydEJ1dHRvbihcIlJFU1RBUlRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRlZCB0aGUgZ2FtZSFcIik7XG4gICAgfVxuICAgIGdhbWVPbmdvaW5nID0gdHJ1ZTtcbiAgICBib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgcGxheWVyMS5yZXNldE1vdmVzKCk7XG4gICAgcGxheWVyMi5yZXNldE1vdmVzKCk7XG5cbiAgICAvL3Jlc2V0IGJvYXJkIHRpbGVzXG4gICAgcmVuZGVyZXIoKS51cGRhdGVHYW1lTWVzc2FnZShcIkdhbWUgb24hXCIpO1xuICAgIHJlbmRlcmVyKCkudXBkYXRlVmljdG9yaWVzKHBsYXllcjEuZ2V0V2lucygpLCBwbGF5ZXIyLmdldFdpbnMoKSk7XG4gICAgcmVuZGVyZXIoKS5yZXNldFRpbGVzKCk7XG4gICAgXG59XG5cbi8vYWRkIGEgbW92ZVxuZnVuY3Rpb24gYWRkUGxheWVyTW92ZShwbGF5ZXIsIHBseSl7XG4gICAgLy9Qcm9jZXNzIHBsYXllcjEgbW92ZVxuICAgIGlmKGJvYXJkLnRpbGVzW3BseV0udG9rZW4gPT09IFwiXCIpIHtcbiAgICAgICAgLy9wcm9jZXNzIHRoZSBtb3ZlXG4gICAgICAgIHBsYXllci5hZGRNb3ZlKHBseSk7XG4gICAgICAgIGJvYXJkLnNldFRva2VuKHBseSwgcGxheWVyLmdldFRva2VuKCkpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRoZSBET01cbiAgICAgICAgcmVuZGVyZXIoKS51cGRhdGVUaWxlKHBseSwgcGxheWVyLmdldFRva2VuKCkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIE1vdmUuXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vL1xuZnVuY3Rpb24gYWR2YW5jZUdhbWUocGx5KXtcbiAgICBpZihnYW1lT25nb2luZyA9PT0gdHJ1ZSl7XG5cbiAgICAgICAgLy9Qcm9jZXNzIHBsYXllcjEgbW92ZVxuICAgICAgICBpZighYWRkUGxheWVyTW92ZShwbGF5ZXIxLCBwbHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgcGxheWVyTW92ZSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGlmIHBsYXllcjEgaGFzIHdvbiB0aGUgZ2FtZVxuICAgICAgICBpZihwbGF5ZXIxLmNoZWNrV2luKCkpeyAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwbGF5ZXIxLmluY3JlbWVudFdpbnMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyMSB3aW5zIVwiKTtcbiAgICAgICAgICAgIHJlbmRlcmVyKCkudXBkYXRlR2FtZU1lc3NhZ2UoYCR7cGxheWVyMS5nZXROYW1lKCl9IHdpbnMhYCk7XG4gICAgICAgICAgICByZW5kZXJlcigpLnVwZGF0ZVZpY3RvcmllcyhwbGF5ZXIxLmdldFdpbnMoKSwgcGxheWVyMi5nZXRXaW5zKCkpO1xuICAgICAgICAgICAgZ2FtZU9uZ29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2NoZWNrIGZvciBhIGRyYXdcbiAgICAgICAgaWYoYm9hcmQuZ2V0VGlsZXNGaWxsZWQoKSA9PT0gOSl7XG4gICAgICAgICAgICByZW5kZXJlcigpLnVwZGF0ZUdhbWVNZXNzYWdlKFwiVGhlIGdhbWUgZW5kZWQgaW4gYSBkcmF3IVwiKTtcbiAgICAgICAgICAgIGdhbWVPbmdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgZW5kcyBpbiBhIGRyYXchXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9wcm9jZXNzIGEgQ1BVIHBsYXlcbiAgICAgICAgLy9jcHVSYW5kb21Nb3ZlKCk7XG4gICAgICAgIGNvbnN0IGNwdU1vdmUgPSBjcHVNaW5pTWF4TW92ZSgpO1xuXG4gICAgICAgIGlmKCFhZGRQbGF5ZXJNb3ZlKHBsYXllcjIsIGNwdU1vdmUpKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIENQVSBtb3ZlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBjcHUgaGFzIHdvbiB0aGUgZ2FtZVxuICAgICAgICBpZihwbGF5ZXIyLmNoZWNrV2luKCkpe1xuICAgICAgICAgICAgcGxheWVyMi5pbmNyZW1lbnRXaW5zKCk7XG4gICAgICAgICAgICByZW5kZXJlcigpLnVwZGF0ZUdhbWVNZXNzYWdlKGAke3BsYXllcjIuZ2V0TmFtZSgpfSB3aW5zIWApO1xuICAgICAgICAgICAgcmVuZGVyZXIoKS51cGRhdGVWaWN0b3JpZXMocGxheWVyMS5nZXRXaW5zKCksIHBsYXllcjIuZ2V0V2lucygpKTtcbiAgICAgICAgICAgIGdhbWVPbmdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgICBhbGVydChcIkNsaWNrIHRoZSBSZXN0YXJ0L1N0YXJ0IGJ1dHRvbiB0byBiZWdpbiBwbGF5aW5nIVwiKTtcbiAgICB9XG59XG5cbi8vXG5mdW5jdGlvbiBpbml0R2FtZSgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nXCIpO1xuICAgIGxldCBnYW1lTWVzc2FnZSA9IFwiU3RhcnQgYSBuZXcgZ2FtZSFcIjtcblxuICAgIC8vSW5pdGlhbGl6ZSB0aGUgdmlzdWFsc1xuICAgIHJlbmRlcmVyKCkudXBkYXRlR2FtZU1lc3NhZ2UoZ2FtZU1lc3NhZ2UpO1xuICAgIHJlbmRlcmVyKCkudXBkYXRlUGxheWVyVG9rZW4oMCwgcGxheWVyMS5nZXRUb2tlbigpKTtcbiAgICByZW5kZXJlcigpLnVwZGF0ZVBsYXllclRva2VuKDEsIHBsYXllcjIuZ2V0VG9rZW4oKSk7XG4gICAgcmVuZGVyZXIoKS51cGRhdGVWaWN0b3JpZXMoMCwgMCk7XG4gICAgcmVuZGVyZXIoKS51cGRhdGVOYW1lKHBsYXllcjEuZ2V0TmFtZSgpKVxuXG59XG5cbi8vXG5mdW5jdGlvbiBjcHVSYW5kb21Nb3ZlKCl7XG4gICAgLy9zZXQgdXAgY29tcHV0ZXIgbW92ZS4gdGVtcG9yYXJ5IHNvbHV0aW9uXG4gICAgZm9yKGxldCBpID0gMDsgaTwxMDAwOyBpKyspe1xuICAgICAgICBsZXQgbW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo4KTtcbiAgICAgICAgaWYoYWRkUGxheWVyTW92ZShwbGF5ZXIyLCBtb3ZlKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vXG5mdW5jdGlvbiBjcHVNaW5pTWF4TW92ZSgpe1xuICAgIGNvbnN0IGdhbWVTdGF0ZSA9IEdhbWVTdGF0ZShwbGF5ZXIxLmdldFBsYXllck1vdmVzKCksIHBsYXllcjIuZ2V0UGxheWVyTW92ZXMoKSwgYm9hcmQudGlsZXMpOyAgICAgICBcbiAgICBjb25zdCBtb3ZlID0gbWluaU1heC5taW5pTWF4U2VhcmNoKGdhbWUsIGdhbWVTdGF0ZSk7XG4gICAgcmV0dXJuIG1vdmU7XG59XG5cbi8vXG5mdW5jdGlvbiBzZXRQbGF5ZXJOYW1lKHBsYXllck5hbWUpe1xuICAgIHJlbmRlcmVyKCkudXBkYXRlTmFtZShwbGF5ZXJOYW1lKTsvL3VwZGF0ZSBpbiB0aGUgZG9tXG4gICAgcGxheWVyMS5zZXROYW1lKHBsYXllck5hbWUpOy8vdXBkYXRlIGluIHRoZSBwbGF5ZXIgc3RhdGVcbn1cblxuLy9iaW5kIENvbnRyb2xsZXJcbmluaXRDb250cm9sbGVyKHNldFBsYXllck5hbWUsIHJlc3RhcnRHYW1lLCBhZHZhbmNlR2FtZSk7XG5cbi8vaW5zdGFudGlhdGUgcGxheWVyc1xuY29uc3QgcGxheWVyMSA9IHBsYXllcihcIlBsYXllclwiLCBcIlhcIik7XG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKFwiQ1BVXCIsIFwiT1wiKTtcblxuLy9pbnN0YW50aWF0ZSB0aGUgZ2FtZSBib2FyZCwgd2hpY2ggY29udGFpbnMgdGhlIGdhbWUgc3RhdGUuXG5jb25zdCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4vL2luaXRpYWxpc2UgZ2FtZSB2YXJpYWJsZXNcbmxldCBnYW1lU3RhcnRlZCA9IGZhbHNlO1xubGV0IGdhbWVPbmdvaW5nID0gZmFsc2U7XG5cbi8vSW5pdGlhbGlzZVxuaW5pdEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==