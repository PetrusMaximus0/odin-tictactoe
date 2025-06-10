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
    justify-content: center;
    gap: 5rem;
    max-width: 24rem;
    margin: 0 auto;    
}

@media screen and (min-width: 1080px) {
    .grid-container{
        grid-template-columns: 24rem 24rem;
    }
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI;QACI,kCAAkC;IACtC;AACJ;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;;IAEZ,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;;IAElC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,QAAQ;;IAER,mBAAmB;IACnB,8BAA8B;;IAE9B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,oBAAoB;IACpB,QAAQ;;IAER,mBAAmB;IACnB,8BAA8B;;IAE9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;;IAEP,4BAA4B;IAC5B,kBAAkB;;IAElB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ","sourcesContent":["body{\n    background-color: beige;\n}\n\nh1{\n    font-size: 2em;\n}\n\nh2,h1,h3{\n    margin: 0;\n    text-align: center;\n}\n\nli{\n    list-style: none;\n}\n\n.grid-container{\n    display: grid;\n    justify-content: center;\n    gap: 5rem;\n    max-width: 24rem;\n    margin: 0 auto;    \n}\n\n@media screen and (min-width: 1080px) {\n    .grid-container{\n        grid-template-columns: 24rem 24rem;\n    }\n}\n\n.board-tile{\n    padding: 0;\n    background-color: white;\n    border-width: 1px;\n    border-style: solid;\n    border-color: grey;\n    margin: -1px;\n\n    font-family: sans-serif;\n    font-size: 3em;\n    font-weight:100;\n    color: darkred;\n}\n\n.board-container{\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    \n    width: 300px;\n    height: 300px;\n}\n\n.restart {\n    background-color: white;\n    border-width: 1px;\n    border-style: solid;\n    border-color: grey;\n    padding: 0.5rem 1rem;\n    border-radius: 0.85rem;\n}\n\n.content-wrapper{\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    justify-items: center;\n    gap:2rem;\n\n    border-radius: 1rem;\n    background-color: lightskyblue;\n\n    padding:2rem 3rem;\n}\n.nav-wrapper{\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    justify-items: center;\n    align-content: start;\n    gap:2rem;\n\n    border-radius: 1rem;\n    background-color: lightskyblue;\n\n    padding:2rem 3rem;\n}\n\n.options-cards{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:2em;\n\n    background-color: lightgreen;\n    border-radius:1rem;       \n\n    padding:1rem;\n    width: 100%;\n}\n\n.options{\n    display: flex;\n    flex-direction: column;\n    gap: 2em;\n}\n"],"sourceRoot":""}]);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXRpY3RhY3RvZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9zcmMvZ2FtZVN0YXRlLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL21pbmltYXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2UvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRpY3RhY3RvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10aWN0YWN0b2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdGljdGFjdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG5oMXtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuaDIsaDEsaDN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmdyaWQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cmVtO1xuICAgIG1heC13aWR0aDogMjRyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87ICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcbiAgICAuZ3JpZC1jb250YWluZXJ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRyZW0gMjRyZW07XG4gICAgfVxufVxuXG4uYm9hcmQtdGlsZXtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgIG1hcmdpbjogLTFweDtcblxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtd2VpZ2h0OjEwMDtcbiAgICBjb2xvcjogZGFya3JlZDtcbn1cblxuLmJvYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIFxuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ucmVzdGFydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC44NXJlbTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOjJyZW07XG5cbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcblxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xufVxuLm5hdi13cmFwcGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBnYXA6MnJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuXG4gICAgcGFkZGluZzoycmVtIDNyZW07XG59XG5cbi5vcHRpb25zLWNhcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6MmVtO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOjFyZW07ICAgICAgIFxuXG4gICAgcGFkZGluZzoxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksa0NBQWtDO0lBQ3RDO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7O0lBRVosdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0NBQWtDOztJQUVsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsUUFBUTs7SUFFUixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixRQUFROztJQUVSLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLE9BQU87O0lBRVAsNEJBQTRCO0lBQzVCLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmgyLGgxLGgze1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgIFxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcXG4gICAgLmdyaWQtY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHJlbSAyNHJlbTtcXG4gICAgfVxcbn1cXG5cXG4uYm9hcmQtdGlsZXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XFxuICAgIG1hcmdpbjogLTFweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBmb250LXdlaWdodDoxMDA7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIFxcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjg1cmVtO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjJyZW07XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG5cXG4gICAgcGFkZGluZzoycmVtIDNyZW07XFxufVxcbi5uYXYtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6MnJlbTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcblxcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcXG59XFxuXFxuLm9wdGlvbnMtY2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MmVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOjFyZW07ICAgICAgIFxcblxcbiAgICBwYWRkaW5nOjFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3B0aW9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzZXROYW1lLCByZXN0YXJ0R2FtZSwgYWR2YW5jZUdhbWUpIHtcbiAgICAvLyBUaWxlc1xuICAgIGNvbnN0IHRpbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC10aWxlXCIpXG4gICAgZm9yICggbGV0IGkgPSAwIDsgaTwgdGlsZUJ1dHRvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aWxlQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGFkdmFuY2VHYW1lKGkpOyAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUmVzdGFydC9TdGFydCBidXR0b25cbiAgICBjb25zdCByZVN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0XCIpO1xuICAgIHJlU3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVzdGFydEdhbWUoKTsgXG4gICAgfSlcblxuICAgIC8vIE5hbWUgSW5wdXRcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1uYW1lLWZvcm1cIik7XG4gICAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KT0+e1xuXG4gICAgICAgIC8vcHJldmVudCBkZWZhdWx0IHN1Ym1pc3Npb25cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIC8vZ2V0IGluZm8gZnJvbSBmb3JtXG4gICAgICAgIGxldCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vdXBkYXRlIG5hbWUgaW4gcGxheWVyXG4gICAgICAgIHNldE5hbWUocGxheWVyTmFtZSk7ICAgIFxuICAgIH0pXG59IiwiaW1wb3J0IGdhbWVTdGF0ZSBmcm9tIFwiLi9nYW1lU3RhdGVcIlxyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiXHJcblxyXG4vL1JldHVybnMgdGhlIHBsYXllciB3aG9zZSB0dXJuIGlzIHRvIHBsYXlcclxuZXhwb3J0IGZ1bmN0aW9uIHRvTW92ZShzdGF0ZSl7XHJcbiAgICBsZXQgdGlsZXNGaWxsZWQgPSAwO1xyXG5cclxuICAgIHN0YXRlLmJvYXJkVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICBpZih0aWxlLnRva2VuICE9PSBcIlwiKSB0aWxlc0ZpbGxlZCsrOyBcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aWxlc0ZpbGxlZCAlIDIgIT09IDApIHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuaW5pdGlhbE1heDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5pbml0aWFsTWluO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1JldHVybnMgdHJ1ZSBpZiB0aGUgZ2FtZSBpcyBpbiBhIFRlcm1pbmFsIHN0YWdlLlxyXG4vL09ubHkgY2hlY2sgZm9yIGEgZHJhdyBhZnRlciBjaGVja2luZyBmb3IgYSB3aW4uIFRoaXMgYXZvaWRzIHJldHVybmluZyBmYWtlIGRyYXdzIHdoZW4gdGhlIHdpbm5pbmcgbW92ZSBpcyB0aGUgbGFzdCBtb3ZlLlxyXG5leHBvcnQgZnVuY3Rpb24gaXNUZXJtaW5hbChzdGF0ZSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHBsYXllcldpbiA9IFBsYXllcigpLmNoZWNrV2luKHN0YXRlLmluaXRpYWxNaW4pO1xyXG4gICAgY29uc3QgY3B1V2luID0gUGxheWVyKCkuY2hlY2tXaW4oc3RhdGUuaW5pdGlhbE1heCk7XHJcbiAgICBjb25zdCBnYW1lRHJhdyA9IGlzRHJhdyhzdGF0ZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAocGxheWVyV2luIHx8IGNwdVdpbiB8fCBnYW1lRHJhdyk7XHJcbn1cclxuXHJcbi8vUmV0dXJucyB0aGUgdXRpbGl0eSBiYXNlZCBvbiB0aGUgc3RhdGUgb2YgdGhlIGdhbWUgKE5PVCBiYXNlZCBvbiB3aGljaCBwbGF5ZXIncyB0dXJuIGl0IGlzKS5cclxuZXhwb3J0IGZ1bmN0aW9uIHV0aWxpdHkoc3RhdGUsIHBsYXllcil7XHJcbiAgICBpZihQbGF5ZXIoKS5jaGVja1dpbihzdGF0ZS5pbml0aWFsTWF4KSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfWVsc2UgaWYgKFBsYXllcigpLmNoZWNrV2luKHN0YXRlLmluaXRpYWxNaW4pKXtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0gICAgICAgIFxyXG59XHJcblxyXG4vL1JldHVybnMgYW4gYXJyYXkgb2YgcGVybWl0dGVkIGFjdGlvbnMgb24gYSBnaXZlbiBnYW1lIHN0YXRlLlxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9ucyhzdGF0ZSl7XHJcbiAgICBjb25zdCBhY3Rpb25zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzdGF0ZS5ib2FyZFRpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoc3RhdGUuYm9hcmRUaWxlc1tpXS50b2tlbiA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGkpO1xyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWN0aW9ucztcclxufVxyXG5cclxuLy9SZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGdhbWUgc3RhdGUgaXMgYSBkcmF3LlxyXG5leHBvcnQgZnVuY3Rpb24gaXNEcmF3KHN0YXRlKXtcclxuICAgIGxldCB0aWxlc0ZpbGxlZCA9IDA7XHJcbiAgICBzdGF0ZS5ib2FyZFRpbGVzLmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgaWYodGlsZS50b2tlbiAhPT0gXCJcIikgdGlsZXNGaWxsZWQrKztcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKHRpbGVzRmlsbGVkID09PSA5KTtcclxufVxyXG5cclxuLy9SZXR1cm5zIGEgbmV3IHN0YXRlIGdpdmVuIGEgcHJldmlvdXMgc3RhdGUgYW5kIGEgbGVnYWwgbW92ZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdChzdGF0ZSwgbW92ZSl7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IGdhbWVTdGF0ZShzdGF0ZS5pbml0aWFsTWluLCBzdGF0ZS5pbml0aWFsTWF4LCBzdGF0ZS5ib2FyZFRpbGVzKTtcclxuICAgIGxldCBjdXJyZW50UGxheWVyID0gdG9Nb3ZlKG5ld1N0YXRlKTtcclxuICAgIGxldCBpc01heCA9IGN1cnJlbnRQbGF5ZXIgPT09IHN0YXRlLmluaXRpYWxNYXg7XHJcbiAgICBjb25zdCB0b2tlbiA9ICBpc01heCA/IFwiT1wiIDogXCJYXCI7XHJcblxyXG4gICAgLy9DaGVjayBpZiB0aGUgbW92ZSBpcyBsZWdhbC5cclxuICAgIGlmKG5ld1N0YXRlLmJvYXJkVGlsZXNbbW92ZV0udG9rZW4gPT09IFwiXCIpe1xyXG4gICAgICAgIC8vQXBwbHkgdGhlIG1vdmVcclxuICAgICAgICBuZXdTdGF0ZS5ib2FyZFRpbGVzW21vdmVdLnRva2VuID0gdG9rZW47XHJcblxyXG4gICAgICAgIC8vQWRkIHRoZSBtb3ZlIHRvIHRoZSBsaXN0IG9mIHBsYXllciBtb3Zlcy5cclxuICAgICAgICBpc01heCA/IG5ld1N0YXRlLmluaXRpYWxNYXggKz0gKDBiMSA8PCBtb3ZlKSA6IG5ld1N0YXRlLmluaXRpYWxNaW4gKz0gKDBiMSA8PCBtb3ZlKSA7XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldyb25nIG1vdmUhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB0aWxlcyA9IFtdO1xuICAgIGxldCB0aWxlc0ZpbGxlZCA9IDA7XG5cbiAgICAvL1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA5OyBpKyspe1xuICAgICAgICB0aWxlcy5wdXNoKHt0b2tlbjogJyd9KSAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHNldFRva2VuKGluZGV4LCB0b2tlbil7XG4gICAgICAgIGlmICh0aWxlc1tpbmRleF0udG9rZW4gPT09IFwiXCIpe1xuICAgICAgICAgICAgdGlsZXNbaW5kZXhdLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICB0aWxlc0ZpbGxlZCsrO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNwb3QgaXMgdGFrZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aWxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aWxlc1tpXS50b2tlbiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGlsZXNGaWxsZWQgPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRpbGVzRmlsbGVkKCl7XG4gICAgICAgIHJldHVybiB0aWxlc0ZpbGxlZDtcbiAgICB9XG4gICBcbiAgICByZXR1cm4ge2dldFRpbGVzRmlsbGVkLCB0aWxlcywgc2V0VG9rZW4sIHJlc2V0Qm9hcmR9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lU3RhdGUocGxheWVyMSwgcGxheWVyMiwgb2xkQm9hcmRUaWxlcykge1xyXG5cclxuICAgIC8vYm9hcmQgU3RhdGVcclxuICAgIGNvbnN0IGJvYXJkVGlsZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9sZEJvYXJkVGlsZXMpKTtcclxuICAgICAgICBcclxuICAgIC8vcGxheWVyc1xyXG4gICAgY29uc3QgaW5pdGlhbE1heCA9IHBsYXllcjI7XHJcbiAgICBjb25zdCBpbml0aWFsTWluID0gcGxheWVyMTtcclxuXHJcbiAgICByZXR1cm4ge2JvYXJkVGlsZXMsIGluaXRpYWxNYXgsIGluaXRpYWxNaW59O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1pbmlNYXhTZWFyY2goZ2FtZSwgc3RhdGUpeyBcbiAgICBjb25zdCB7dmFsdWUsIG1vdmV9ID0gbWF4VmFsdWUoZ2FtZSwgc3RhdGUpO1xuICAgIHJldHVybiBtb3ZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4VmFsdWUoZ2FtZSwgc3RhdGUpe1xuICAgIGlmKGdhbWUuaXNUZXJtaW5hbChzdGF0ZSkpIFxuICAgICAgICByZXR1cm4ge3ZhbHVlOiBnYW1lLnV0aWxpdHkoc3RhdGUsIGdhbWUudG9Nb3ZlKHN0YXRlKSksIG1vdmU6IG51bGx9O1xuICAgIFxuICAgIGxldCB2YWx1ZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgbW92ZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmFsaWRNb3ZlcyA9IGdhbWUuYWN0aW9ucyhzdGF0ZSk7XG4gICAgdmFsaWRNb3Zlcy5mb3JFYWNoKHZhbGlkTW92ZSA9PiB7XG4gICAgICAgIGxldCB7dmFsdWU6IHZhbHVlMn0gPSBtaW5WYWx1ZShnYW1lLCBnYW1lLnJlc3VsdChzdGF0ZSwgdmFsaWRNb3ZlKSk7XG4gICAgICAgIGlmKHZhbHVlMiA+IHZhbHVlKXtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUyO1xuICAgICAgICAgICAgbW92ZSA9IHZhbGlkTW92ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxuICAgIHJldHVybiB7dmFsdWUsIG1vdmV9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWluVmFsdWUoZ2FtZSwgc3RhdGUpe1xuXG4gICAgaWYoZ2FtZS5pc1Rlcm1pbmFsKHN0YXRlKSkgXG4gICAgICAgIHJldHVybiB7dmFsdWU6IGdhbWUudXRpbGl0eShzdGF0ZSwgZ2FtZS50b01vdmUoc3RhdGUpKSwgbW92ZTogbnVsbH07XG5cbiAgICBsZXQgdmFsdWUgPSBJbmZpbml0eTtcbiAgICBsZXQgbW92ZSA9IG51bGw7XG4gICAgY29uc3QgdmFsaWRNb3ZlcyA9IGdhbWUuYWN0aW9ucyhzdGF0ZSk7XG5cbiAgICB2YWxpZE1vdmVzLmZvckVhY2godmFsaWRNb3ZlID0+IHtcbiAgICAgICAgbGV0IHt2YWx1ZTogdmFsdWUyfSA9IG1heFZhbHVlKGdhbWUsIGdhbWUucmVzdWx0KHN0YXRlLCB2YWxpZE1vdmUpKTtcbiAgICAgICAgaWYodmFsdWUyIDwgdmFsdWUpe1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZTI7XG4gICAgICAgICAgICBtb3ZlID0gdmFsaWRNb3ZlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt2YWx1ZSwgbW92ZX07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdG9rZW4pIHtcbiAgICBsZXQgd2lucyA9IDA7XG4gICAgbGV0IHBsYXllck1vdmVzID0gMGIwMDAwMDAwMDA7XG4gICAgZnVuY3Rpb24gYWRkTW92ZShtb3ZlKXtcbiAgICAgICAgcGxheWVyTW92ZXMgPSBwbGF5ZXJNb3ZlcyArICgwYjEgPDwgbW92ZSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiByZXNldE1vdmVzKCl7XG4gICAgICAgIHBsYXllck1vdmVzID0gMGIwMDAwMDAwMDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFBsYXllck1vdmVzKCl7cmV0dXJuIHBsYXllck1vdmVzfTtcbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge3JldHVybiBuYW1lfTtcbiAgICBmdW5jdGlvbiBzZXROYW1lKG5ld05hbWUpIHtuYW1lID0gbmV3TmFtZX07XG4gICAgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7cmV0dXJuIHRva2VufTtcbiAgICBmdW5jdGlvbiBzZXRUb2tlbihuZXdUb2tlbikge3Rva2VuID0gbmV3VG9rZW59O1xuICAgIGZ1bmN0aW9uIGdldFdpbnMoKXtyZXR1cm4gd2luc307XG4gICAgZnVuY3Rpb24gaW5jcmVtZW50V2lucygpe3dpbnMgKz0xfTtcbiAgICBmdW5jdGlvbiBjaGVja1dpbiggbW92ZXMgPSBwbGF5ZXJNb3ZlcyApe1xuICAgICAgICBjb25zdCB3aW5uaW5nQ29tYm9zID0gW1xuICAgICAgICAgICAgMGIwMDAwMDAxMTEsXG4gICAgICAgICAgICAwYjAwMDExMTAwMCxcbiAgICAgICAgICAgIDBiMTExMDAwMDAwLFxuICAgICAgICAgICAgMGIxMDAwMTAwMDEsXG4gICAgICAgICAgICAwYjAwMTAwMTAwMSxcbiAgICAgICAgICAgIDBiMDEwMDEwMDEwLFxuICAgICAgICAgICAgMGIxMDAxMDAxMDAsXG4gICAgICAgICAgICAwYjAwMTAxMDEwMCxcbiAgICAgICAgXVxuICAgICAgICBsZXQgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgd2lubmluZ0NvbWJvcy5mb3JFYWNoKGNvbWJvPT57XG4gICAgICAgICAgICBpZihjb21ibyA9PT0gKG1vdmVzICYgY29tYm8pKXtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkTW92ZSxcbiAgICAgICAgcmVzZXRNb3ZlcyxcbiAgICAgICAgZ2V0UGxheWVyTW92ZXMsXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIGdldFRva2VuLFxuICAgICAgICBzZXRUb2tlbixcbiAgICAgICAgZ2V0V2lucyxcbiAgICAgICAgaW5jcmVtZW50V2lucyxcbiAgICAgICAgY2hlY2tXaW4sXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aWxlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtdGlsZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIgPiAubmFtZVwiKTtcbiAgICBjb25zdCB2aWN0b3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpY3Rvcmllc1wiKTtcbiAgICBjb25zdCB0b2tlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRva2VuXCIpO1xuICAgIGNvbnN0IGdhbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlXCIpO1xuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRcIik7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJUb2tlbihpbmRleCwgdG9rZW4pIHtcbiAgICAgICAgdG9rZW5zW2luZGV4XS50ZXh0Q29udGVudCA9IGBUb2tlbjogJHt0b2tlbn1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUdhbWVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHttZXNzYWdlfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmljdG9yaWVzKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgICAgIHZpY3Rvcmllc1swXS50ZXh0Q29udGVudCA9IGBXaW5zOiAke3ZhbHVlMX1gO1xuICAgICAgICB2aWN0b3JpZXNbMV0udGV4dENvbnRlbnQgPSBgV2luczogJHt2YWx1ZTJ9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOYW1lKG5hbWUpe1xuICAgICAgICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbGUoaW5kZXgsIHRva2VuKXtcbiAgICAgICAgdGlsZUJ1dHRvbnNbaW5kZXhdLnRleHRDb250ZW50ID0gYCR7dG9rZW59YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFRpbGVzKCl7XG4gICAgICAgIHRpbGVCdXR0b25zLmZvckVhY2godGlsZT0+IHtcbiAgICAgICAgICAgIHRpbGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXN0YXJ0QnV0dG9uKHZhbHVlKXtcbiAgICAgICAgcmVzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgfVxuICAgIC8vIFJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgaW5uZXIgZnVuY3Rpb25zXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlUGxheWVyVG9rZW4sXG4gICAgICAgIHVwZGF0ZUdhbWVNZXNzYWdlLFxuICAgICAgICB1cGRhdGVWaWN0b3JpZXMsXG4gICAgICAgIHVwZGF0ZU5hbWUsXG4gICAgICAgIHVwZGF0ZVRpbGUsXG4gICAgICAgIHJlc2V0VGlsZXMsXG4gICAgICAgIHVwZGF0ZVJlc3RhcnRCdXR0b24sXG4gICAgfTsgIFxufSAgICBcbiAgICBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSBcIi4vcmVuZGVyZXJcIlxuaW1wb3J0IGluaXRDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJcIlxuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIlxuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuaW1wb3J0ICogYXMgbWluaU1heCBmcm9tIFwiLi9taW5pbWF4XCJcbmltcG9ydCAqIGFzIGdhbWUgZnJvbSBcIi4vZ2FtZVwiXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL2dhbWVTdGF0ZVwiXG4vL1xuZnVuY3Rpb24gcmVzdGFydEdhbWUoKXtcbiAgICBpZihnYW1lU3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICByZW5kZXJlcigpLnVwZGF0ZVJlc3RhcnRCdXR0b24oXCJSRVNUQVJUXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgdGhlIGdhbWUhXCIpO1xuICAgIH1cbiAgICBnYW1lT25nb2luZyA9IHRydWU7XG4gICAgYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIHBsYXllcjEucmVzZXRNb3ZlcygpO1xuICAgIHBsYXllcjIucmVzZXRNb3ZlcygpO1xuXG4gICAgLy9yZXNldCBib2FyZCB0aWxlc1xuICAgIHJlbmRlcmVyKCkudXBkYXRlR2FtZU1lc3NhZ2UoXCJHYW1lIG9uIVwiKTtcbiAgICByZW5kZXJlcigpLnVwZGF0ZVZpY3RvcmllcyhwbGF5ZXIxLmdldFdpbnMoKSwgcGxheWVyMi5nZXRXaW5zKCkpO1xuICAgIHJlbmRlcmVyKCkucmVzZXRUaWxlcygpO1xuICAgIFxufVxuXG4vL2FkZCBhIG1vdmVcbmZ1bmN0aW9uIGFkZFBsYXllck1vdmUocGxheWVyLCBwbHkpe1xuICAgIC8vUHJvY2VzcyBwbGF5ZXIxIG1vdmVcbiAgICBpZihib2FyZC50aWxlc1twbHldLnRva2VuID09PSBcIlwiKSB7XG4gICAgICAgIC8vcHJvY2VzcyB0aGUgbW92ZVxuICAgICAgICBwbGF5ZXIuYWRkTW92ZShwbHkpO1xuICAgICAgICBib2FyZC5zZXRUb2tlbihwbHksIHBsYXllci5nZXRUb2tlbigpKTtcblxuICAgICAgICAvL3VwZGF0ZSB0aGUgRE9NXG4gICAgICAgIHJlbmRlcmVyKCkudXBkYXRlVGlsZShwbHksIHBsYXllci5nZXRUb2tlbigpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBNb3ZlLlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy9cbmZ1bmN0aW9uIGFkdmFuY2VHYW1lKHBseSl7XG4gICAgaWYoZ2FtZU9uZ29pbmcgPT09IHRydWUpe1xuXG4gICAgICAgIC8vUHJvY2VzcyBwbGF5ZXIxIG1vdmVcbiAgICAgICAgaWYoIWFkZFBsYXllck1vdmUocGxheWVyMSwgcGx5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBsYXllck1vdmUhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBpZiBwbGF5ZXIxIGhhcyB3b24gdGhlIGdhbWVcbiAgICAgICAgaWYocGxheWVyMS5jaGVja1dpbigpKXsgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGxheWVyMS5pbmNyZW1lbnRXaW5zKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllcjEgd2lucyFcIik7XG4gICAgICAgICAgICByZW5kZXJlcigpLnVwZGF0ZUdhbWVNZXNzYWdlKGAke3BsYXllcjEuZ2V0TmFtZSgpfSB3aW5zIWApO1xuICAgICAgICAgICAgcmVuZGVyZXIoKS51cGRhdGVWaWN0b3JpZXMocGxheWVyMS5nZXRXaW5zKCksIHBsYXllcjIuZ2V0V2lucygpKTtcbiAgICAgICAgICAgIGdhbWVPbmdvaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9jaGVjayBmb3IgYSBkcmF3XG4gICAgICAgIGlmKGJvYXJkLmdldFRpbGVzRmlsbGVkKCkgPT09IDkpe1xuICAgICAgICAgICAgcmVuZGVyZXIoKS51cGRhdGVHYW1lTWVzc2FnZShcIlRoZSBnYW1lIGVuZGVkIGluIGEgZHJhdyFcIik7XG4gICAgICAgICAgICBnYW1lT25nb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIGVuZHMgaW4gYSBkcmF3IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJvY2VzcyBhIENQVSBwbGF5XG4gICAgICAgIC8vY3B1UmFuZG9tTW92ZSgpO1xuICAgICAgICBjb25zdCBjcHVNb3ZlID0gY3B1TWluaU1heE1vdmUoKTtcblxuICAgICAgICBpZighYWRkUGxheWVyTW92ZShwbGF5ZXIyLCBjcHVNb3ZlKSl7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBDUFUgbW92ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBpZiB0aGUgY3B1IGhhcyB3b24gdGhlIGdhbWVcbiAgICAgICAgaWYocGxheWVyMi5jaGVja1dpbigpKXtcbiAgICAgICAgICAgIHBsYXllcjIuaW5jcmVtZW50V2lucygpO1xuICAgICAgICAgICAgcmVuZGVyZXIoKS51cGRhdGVHYW1lTWVzc2FnZShgJHtwbGF5ZXIyLmdldE5hbWUoKX0gd2lucyFgKTtcbiAgICAgICAgICAgIHJlbmRlcmVyKCkudXBkYXRlVmljdG9yaWVzKHBsYXllcjEuZ2V0V2lucygpLCBwbGF5ZXIyLmdldFdpbnMoKSk7XG4gICAgICAgICAgICBnYW1lT25nb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoXCJDbGljayB0aGUgUmVzdGFydC9TdGFydCBidXR0b24gdG8gYmVnaW4gcGxheWluZyFcIik7XG4gICAgfVxufVxuXG4vL1xuZnVuY3Rpb24gaW5pdEdhbWUoKXtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZ1wiKTtcbiAgICBsZXQgZ2FtZU1lc3NhZ2UgPSBcIlN0YXJ0IGEgbmV3IGdhbWUhXCI7XG5cbiAgICAvL0luaXRpYWxpemUgdGhlIHZpc3VhbHNcbiAgICByZW5kZXJlcigpLnVwZGF0ZUdhbWVNZXNzYWdlKGdhbWVNZXNzYWdlKTtcbiAgICByZW5kZXJlcigpLnVwZGF0ZVBsYXllclRva2VuKDAsIHBsYXllcjEuZ2V0VG9rZW4oKSk7XG4gICAgcmVuZGVyZXIoKS51cGRhdGVQbGF5ZXJUb2tlbigxLCBwbGF5ZXIyLmdldFRva2VuKCkpO1xuICAgIHJlbmRlcmVyKCkudXBkYXRlVmljdG9yaWVzKDAsIDApO1xuICAgIHJlbmRlcmVyKCkudXBkYXRlTmFtZShwbGF5ZXIxLmdldE5hbWUoKSlcblxufVxuXG4vL1xuZnVuY3Rpb24gY3B1UmFuZG9tTW92ZSgpe1xuICAgIC8vc2V0IHVwIGNvbXB1dGVyIG1vdmUuIHRlbXBvcmFyeSBzb2x1dGlvblxuICAgIGZvcihsZXQgaSA9IDA7IGk8MTAwMDsgaSsrKXtcbiAgICAgICAgbGV0IG1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOCk7XG4gICAgICAgIGlmKGFkZFBsYXllck1vdmUocGxheWVyMiwgbW92ZSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL1xuZnVuY3Rpb24gY3B1TWluaU1heE1vdmUoKXtcbiAgICBjb25zdCBnYW1lU3RhdGUgPSBHYW1lU3RhdGUocGxheWVyMS5nZXRQbGF5ZXJNb3ZlcygpLCBwbGF5ZXIyLmdldFBsYXllck1vdmVzKCksIGJvYXJkLnRpbGVzKTsgICAgICAgXG4gICAgY29uc3QgbW92ZSA9IG1pbmlNYXgubWluaU1heFNlYXJjaChnYW1lLCBnYW1lU3RhdGUpO1xuICAgIHJldHVybiBtb3ZlO1xufVxuXG4vL1xuZnVuY3Rpb24gc2V0UGxheWVyTmFtZShwbGF5ZXJOYW1lKXtcbiAgICByZW5kZXJlcigpLnVwZGF0ZU5hbWUocGxheWVyTmFtZSk7Ly91cGRhdGUgaW4gdGhlIGRvbVxuICAgIHBsYXllcjEuc2V0TmFtZShwbGF5ZXJOYW1lKTsvL3VwZGF0ZSBpbiB0aGUgcGxheWVyIHN0YXRlXG59XG5cbi8vYmluZCBDb250cm9sbGVyXG5pbml0Q29udHJvbGxlcihzZXRQbGF5ZXJOYW1lLCByZXN0YXJ0R2FtZSwgYWR2YW5jZUdhbWUpO1xuXG4vL2luc3RhbnRpYXRlIHBsYXllcnNcbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXJcIiwgXCJYXCIpO1xuY29uc3QgcGxheWVyMiA9IHBsYXllcihcIkNQVVwiLCBcIk9cIik7XG5cbi8vaW5zdGFudGlhdGUgdGhlIGdhbWUgYm9hcmQsIHdoaWNoIGNvbnRhaW5zIHRoZSBnYW1lIHN0YXRlLlxuY29uc3QgYm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuLy9pbml0aWFsaXNlIGdhbWUgdmFyaWFibGVzXG5sZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbmxldCBnYW1lT25nb2luZyA9IGZhbHNlO1xuXG4vL0luaXRpYWxpc2VcbmluaXRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=