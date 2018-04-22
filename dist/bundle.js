/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.styl":
/*!***********************!*\
  !*** ./css/main.styl ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/_css-loader@0.28.11@css-loader??ref--6-1!../node_modules/_stylus-loader@3.0.2@stylus-loader!./main.styl */ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--6-1!./node_modules/_stylus-loader@3.0.2@stylus-loader/index.js!./css/main.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ../css/main.styl */ "./css/main.styl");

var _util = __webpack_require__(/*! ./util.js */ "./js/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var TEMPLATES = {
    game: '<div class="game-container">\n    <header class="game-header">\n        <h2 class="game-title">2048</h2>\n        <button class="new-game">NEW GAME</button>\n        <ul class="game-best-score-box">\n            <li>BEST</li>\n            <li class="game-best-score">0</li>\n        </ul>\n        <ul class="game-score-box">\n            <li>SCORE</li>\n            <li class="game-score">0</li>\n        </ul>\n    </header>\n    <div class="game-wrapper">\n        <table>\n            <tbody class="grids-container">\n            </tbody>\n        </table>\n        <div class="tiles-container"></div>\n        <div class="overlay">\n            <p class="game-result lose">Game Over!</p>\n            <button class="game-retry">Play again</button>\n        </div>\n    </div>\n</div>'

};

var SETTINGS = {
    rowLen: 4,
    colLen: 4,
    target: 2048
};

var Grids = function () {
    function Grids(el) {
        _classCallCheck(this, Grids);

        this.container = el;
        this.rowLen = SETTINGS.rowLen;
        this.colLen = SETTINGS.colLen;
        // grid content
        this.contents = [];
        // init contents
        this.clearContents();
        this.render();
    }

    _createClass(Grids, [{
        key: 'render',
        value: function render() {
            // render HTML, iterate to generate tbody content
            var s = '';
            for (var ri = 0; ri < this.rowLen; ri++) {
                s += '<tr>';
                for (var ci = 0; ci < this.colLen; ci++) {
                    s += '<td></td>';
                }
                s += '</tr>';
            }
            this.container.innerHTML = s;
        }
    }, {
        key: 'clearContents',
        value: function clearContents() {
            for (var ri = 0; ri < this.rowLen; ri++) {
                this.contents[ri] = [];
                for (var ci = 0; ci < this.colLen; ci++) {
                    this.contents[ri][ci] = null;
                }
            }
        }
    }, {
        key: 'eachContent',
        value: function eachContent(rowCallback, colCallback) {
            for (var ri = 0; ri < this.rowLen; ri++) {
                if (typeof rowCallback === 'function') {
                    // cb(item, index, array)
                    rowCallback(this.contents[ri], ri, this.contents);
                }
                for (var ci = 0; ci < this.colLen; ci++) {
                    if (typeof colCallback === 'function') {
                        // cb(item, index, array)
                        colCallback(this.contents[ri][ci], ci, this.contents);
                    }
                }
            }
        }
    }, {
        key: 'getEmptyGridsPos',
        value: function getEmptyGridsPos() {
            var arr = [];
            for (var ri = 0; ri < this.rowLen; ri++) {
                for (var ci = 0; ci < this.colLen; ci++) {
                    if (this.contents[ri][ci] === null) {
                        arr.push([ri, ci]);
                    }
                }
            }
            return arr;
        }
    }]);

    return Grids;
}();

var Tile = function () {
    function Tile() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        var rowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var colIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, Tile);

        if (Tile.tilesContainer === undefined) {
            throw new Error('Tile must be assigned a container in Tils.tilesContainer');
        }
        this.container = Tile.tilesContainer;
        this.element = this.render(rowIndex, colIndex, value);
        this.value = value;
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.events = [];
    }

    _createClass(Tile, [{
        key: 'render',
        value: function render(rowIndex, colIndex, value) {
            var div = document.createElement('div');
            div.className = 'tile tile-' + rowIndex + '-' + colIndex + ' tile-value-' + value;
            div.innerText = value;
            this.container.appendChild(div);
            return div;
        }
    }, {
        key: 'value',
        set: function set(value) {
            var _this = this;

            var oldValue = this._value;
            this._value = value;
            this.element.innerText = value;
            this.element.className = this.element.className.replace(/tile-value-(\d+)/, 'tile-value-' + value);
            // emit events
            var cbs = Tile.events['tileValueChanged'];
            if (cbs !== undefined) {
                cbs.forEach(function (cb) {
                    cb({
                        type: 'tileValueChanged',
                        tile: _this,
                        newValue: value,
                        oldValue: oldValue
                    });
                });
            }
        },
        get: function get() {
            return this._value;
        }
    }, {
        key: 'rowIndex',
        set: function set(rowIndex) {
            this.element.className = this.element.className.replace(/tile-(\d+)-(\d+)/, 'tile-' + rowIndex + '-$2');
            this._rowIndex = rowIndex;
        },
        get: function get() {
            return this._rowIndex;
        }
    }, {
        key: 'colIndex',
        set: function set(colIndex) {
            this.element.className = this.element.className.replace(/tile-(\d+)-(\d+)/, 'tile-$1-' + colIndex);
            this._colIndex = colIndex;
        },
        get: function get() {
            return this._colIndex;
        }
    }], [{
        key: 'addEventHandler',
        value: function addEventHandler(type, cb) {
            var event = Tile.events[type];
            if (Tile.events[type] === undefined) {
                Tile.events[type] = [];
            }
            Tile.events[type].push(cb);
        }
    }]);

    return Tile;
}();

Tile.events = {};

var Game = function () {
    _createClass(Game, [{
        key: 'score',
        get: function get() {
            return this._score;
        },
        set: function set(value) {
            this._score = value;
            this.scoreEl.innerText = value;
        }
    }]);

    function Game(el) {
        _classCallCheck(this, Game);

        // render template
        el.innerHTML = TEMPLATES.game;
        this.container = el.querySelector('.game-container');
        this.grids = new Grids(el.querySelector('.grids-container'));
        Tile.tilesContainer = el.querySelector('.tiles-container');
        this.scoreEl = el.querySelector('.game-score');
        this._score = 0;
        this.btnNewGame = el.querySelector('.new-game');
        this.gameResultEl = el.querySelector('.game-result');
        this.btnRetry = el.querySelector('.game-retry');
        this.overlay = el.querySelector('.overlay');

        // fix events context
        this.gameEvents = this.gameEvents.bind(this);
        document.addEventListener('click', this.gameEvents);
        // self defined events
        Tile.addEventHandler('tileValueChanged', this.gameEvents);
        this.newGame();
    }

    _createClass(Game, [{
        key: 'newGame',
        value: function newGame() {
            this.grids.clearContents();
            Tile.tilesContainer.innerHTML = '';
            this.overlay.style.display = 'none';
            this.score = 0;
            document.addEventListener('keydown', this.gameEvents);
            // create 2 initial tiles
            this.newRandomTiles(2);
        }
    }, {
        key: 'gameEvents',
        value: function gameEvents(ev) {
            ev = ev || event;
            switch (ev.type) {
                case 'click':
                    {
                        if (ev.target === this.btnNewGame || ev.target === this.btnRetry) {
                            this.newGame();
                        }
                        break;
                    }
                case 'keydown':
                    {
                        var keyMap = {
                            '37': 'left',
                            '38': 'up',
                            '39': 'right',
                            '40': 'down'
                        };
                        var direction = keyMap[ev.keyCode + ''];
                        if (direction !== undefined) {
                            ev.preventDefault();
                            var someMoved = this.moveTiles(direction);
                            // if none moved, then no new tile
                            if (someMoved) {
                                this.newRandomTiles(1);
                            } else {
                                // check if game over
                                var emptyPos = this.grids.getEmptyGridsPos();
                                if (emptyPos.length === 0 && !this.hasValueEqualedAdjTiles()) {
                                    // alert('Game over!')
                                    this.setGameResult('lose');
                                }
                            }
                        }
                        break;
                    }
                case 'tileValueChanged':
                    {
                        // check if win
                        if (ev.newValue === SETTINGS.target) {
                            this.setGameResult('win');
                        }
                    }
            }
        }
    }, {
        key: 'setGameResult',
        value: function setGameResult() {
            var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lose';

            this.gameResultEl.className = 'game-result ' + result;
            this.gameResultEl.innerHTML = result === 'win' ? 'You win!' : 'Game over!';
            this.overlay.style.display = 'block';
            document.removeEventListener('keydown', this.gameEvents);
        }
    }, {
        key: 'hasValueEqualedAdjTiles',
        value: function hasValueEqualedAdjTiles() {
            // check right, down of every tile
            for (var ri = 0, rlen = this.grids.contents.length; ri < rlen; ri++) {
                for (var ci = 0, clen = this.grids.contents[ri].length; ci < clen; ci++) {
                    var tile = this.grids.contents[ri][ci];
                    if (tile === null) continue;
                    if (ci < clen - 1) {
                        var rTile = this.grids.contents[ri][ci + 1];
                        if (rTile !== null && rTile.value === tile.value) {
                            return true;
                        }
                    }
                    if (ri < rlen - 1) {
                        var dTile = this.grids.contents[ri + 1][ci];
                        if (dTile !== null && dTile.value === tile.value) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }, {
        key: 'moveTiles',
        value: function moveTiles(direction) {
            // some game rules to be considered:
            // if none moved, then new tile will not generate
            var someMoved = false;
            switch (direction) {
                case 'left':
                    {
                        // colIndex--
                        for (var ri = 0, len = this.grids.contents.length; ri < len; ri++) {
                            // every row allows one merged
                            var merged = false;
                            var colLen = this.grids.contents[ri].length;
                            for (var ci = 1; ci < colLen; ci++) {
                                var tile = this.grids.contents[ri][ci];
                                if (tile === null) continue;
                                var cii = ci;
                                while (--cii >= 0) {
                                    var preTile = this.grids.contents[ri][cii];
                                    if (preTile !== null) {
                                        if (preTile.value === tile.value && merged === false) {
                                            preTile.value += tile.value;
                                            this.score += preTile.value;
                                            tile.element.parentNode.removeChild(tile.element);
                                            this.grids.contents[ri][ci] = null;
                                            someMoved = true;
                                            merged = true;
                                            break;
                                        } else if (tile.colIndex !== cii + 1) {
                                            tile.colIndex = cii + 1;
                                            this.grids.contents[ri][ci] = null;
                                            this.grids.contents[ri][cii + 1] = tile;
                                            someMoved = true;
                                            break;
                                        } else {
                                            break;
                                        }
                                    } else if (cii === 0) {
                                        tile.colIndex = cii;
                                        this.grids.contents[ri][ci] = null;
                                        this.grids.contents[ri][cii] = tile;
                                        someMoved = true;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    }
                case 'right':
                    {
                        // colIndex++
                        for (var _ri = 0, _len = this.grids.contents.length; _ri < _len; _ri++) {
                            var _merged = false;
                            var _colLen = this.grids.contents[_ri].length;
                            for (var _ci = _colLen - 2; _ci >= 0; _ci--) {
                                var _tile = this.grids.contents[_ri][_ci];
                                if (_tile === null) continue;
                                var _cii = _ci;
                                while (++_cii <= _colLen - 1) {
                                    var _preTile = this.grids.contents[_ri][_cii];
                                    if (_preTile !== null) {
                                        if (_preTile.value === _tile.value && _merged === false) {
                                            _preTile.value += _tile.value;
                                            this.score += _preTile.value;
                                            _tile.element.parentNode.removeChild(_tile.element);
                                            this.grids.contents[_ri][_ci] = null;
                                            someMoved = true;
                                            _merged = true;
                                            break;
                                        } else if (_tile.colIndex !== _cii - 1) {
                                            _tile.colIndex = _cii - 1;
                                            this.grids.contents[_ri][_ci] = null;
                                            this.grids.contents[_ri][_cii - 1] = _tile;
                                            someMoved = true;
                                            break;
                                        } else {
                                            break;
                                        }
                                    } else if (_cii === _colLen - 1) {
                                        _tile.colIndex = _cii;
                                        this.grids.contents[_ri][_ci] = null;
                                        this.grids.contents[_ri][_cii] = _tile;
                                        someMoved = true;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    }
                case 'up':
                    {
                        // rowIndex--
                        for (var _ri2 = 1, _len2 = this.grids.contents.length; _ri2 < _len2; _ri2++) {
                            for (var _ci2 = 0, _len3 = this.grids.contents[_ri2].length; _ci2 < _len3; _ci2++) {
                                // every column allow one merged
                                var _merged2 = false;
                                var _tile2 = this.grids.contents[_ri2][_ci2];
                                if (_tile2 === null) continue;
                                var tri = _tile2.rowIndex;
                                while (tri > 0) {
                                    tri--;
                                    var _preTile2 = this.grids.contents[tri][_ci2];
                                    if (_preTile2 !== null) {
                                        if (_preTile2.value === _tile2.value && _merged2 === false) {
                                            // merged tile into the preTile with the same value
                                            // update preTile value
                                            _preTile2.value += _tile2.value;
                                            this.score += _preTile2.value;
                                            // remove this tile
                                            _tile2.element.parentNode.removeChild(_tile2.element);
                                            this.grids.contents[_ri2][_ci2] = null;
                                            someMoved = true;
                                            _merged2 = true;
                                            break;
                                        } else if (_tile2.rowIndex !== tri + 1) {
                                            _tile2.rowIndex = tri + 1;
                                            this.grids.contents[_ri2][_ci2] = null;
                                            this.grids.contents[_tile2.rowIndex][_ci2] = _tile2;
                                            someMoved = true;
                                            break;
                                        } else {
                                            break;
                                        }
                                    } else if (tri === 0) {
                                        _tile2.rowIndex = tri;
                                        this.grids.contents[_ri2][_ci2] = null;
                                        this.grids.contents[tri][_ci2] = _tile2;
                                        someMoved = true;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    }
                case 'down':
                    {
                        // rowIndex++
                        for (var _ri3 = this.grids.contents.length - 2; _ri3 >= 0; _ri3--) {
                            for (var _ci3 = 0, _len4 = this.grids.contents[_ri3].length; _ci3 < _len4; _ci3++) {
                                // every column allow one merged
                                var _merged3 = false;
                                var _tile3 = this.grids.contents[_ri3][_ci3];
                                if (_tile3 === null) continue;
                                var _tri = _tile3.rowIndex;
                                while (_tri < this.grids.contents.length - 1) {
                                    _tri++;
                                    var _preTile3 = this.grids.contents[_tri][_ci3];
                                    if (_preTile3 !== null) {
                                        if (_preTile3.value === _tile3.value && _merged3 === false) {
                                            // merged tile into the preTile with the same value
                                            // update preTile value
                                            _preTile3.value += _tile3.value;
                                            this.score += _preTile3.value;
                                            // remove this tile
                                            _tile3.element.parentNode.removeChild(_tile3.element);
                                            this.grids.contents[_ri3][_ci3] = null;
                                            someMoved = true;
                                            _merged3 = true;
                                            break;
                                        } else if (_tile3.rowIndex !== _tri - 1) {
                                            _tile3.rowIndex = _tri - 1;
                                            this.grids.contents[_ri3][_ci3] = null;
                                            this.grids.contents[_tile3.rowIndex][_ci3] = _tile3;
                                            someMoved = true;
                                            break;
                                        } else {
                                            break;
                                        }
                                    } else if (_tri === this.grids.contents.length - 1) {
                                        _tile3.rowIndex = _tri;
                                        this.grids.contents[_ri3][_ci3] = null;
                                        this.grids.contents[_tri][_ci3] = _tile3;
                                        someMoved = true;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    }
                default:
                    break;
            }
            return someMoved;
        }
    }, {
        key: 'newRandomTiles',
        value: function newRandomTiles() {
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var randomValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [2, 4];

            var newTiles = [];
            for (var i = 0; i < n; i++) {
                var emptyGridsPos = this.grids.getEmptyGridsPos();
                if (emptyGridsPos.length === 0) {
                    break;
                }

                var _Util$getRandomItem = _util2.default.getRandomItem(emptyGridsPos),
                    _Util$getRandomItem2 = _slicedToArray(_Util$getRandomItem, 2),
                    rowIndex = _Util$getRandomItem2[0],
                    colIndex = _Util$getRandomItem2[1];

                var value = _util2.default.getRandomItem(randomValues);
                var tile = new Tile(value, rowIndex, colIndex);
                this.grids.contents[rowIndex][colIndex] = tile;
                newTiles.push(tile);
            }
            return newTiles;
        }
    }]);

    return Game;
}();

/*
main
 */

var game = new Game(document.querySelector('#gameApp'));

/***/ }),

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * min <= randomInt < max
     * @param min
     * @param max
     * @returns {*}
     */
    getRandomInt: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    getRandomItem: function getRandomItem(arr) {
        if (arr.length === 0) {
            return null;
        }
        return arr[this.getRandomInt(0, arr.length)];
    },
    mandatoryArg: function mandatoryArg() {
        throw new Error('mandatory argument missing!');
    }
};

/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--6-1!./css/normalize.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader??ref--6-1!./css/normalize.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n    margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n    background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n    overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n    text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n    display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n    display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n    display: none;\n}", "", {"version":3,"sources":["/Users/lichong/Sources/2018-contest/css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;GAGG;;AAEH;IACI,kBAAkB,CAAC,OAAO;IAC1B,+BAA+B,CAAC,OAAO;CAC1C;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;IACI,UAAU;CACb;;AAED;;;GAGG;;AAEH;IACI,eAAe;IACf,iBAAiB;CACpB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;IACI,wBAAwB,CAAC,OAAO;IAChC,UAAU,CAAC,OAAO;IAClB,kBAAkB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;IACI,kCAAkC,CAAC,OAAO;IAC1C,eAAe,CAAC,OAAO;CAC1B;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;IACI,8BAA8B;CACjC;;AAED;;;GAGG;;AAEH;IACI,oBAAoB,CAAC,OAAO;IAC5B,2BAA2B,CAAC,OAAO;IACnC,kCAAkC,CAAC,OAAO;CAC7C;;AAED;;GAEG;;AAEH;;IAEI,oBAAoB;CACvB;;AAED;;;GAGG;;AAEH;;;IAGI,kCAAkC,CAAC,OAAO;IAC1C,eAAe,CAAC,OAAO;CAC1B;;AAED;;GAEG;;AAEH;IACI,eAAe;CAClB;;AAED;;;GAGG;;AAEH;;IAEI,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,yBAAyB;CAC5B;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,YAAY;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;IACI,mBAAmB;CACtB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;IAKI,qBAAqB,CAAC,OAAO;IAC7B,gBAAgB,CAAC,OAAO;IACxB,kBAAkB,CAAC,OAAO;IAC1B,UAAU,CAAC,OAAO;CACrB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;IACX,kBAAkB;CACrB;;AAED;;;GAGG;;AAEH;SACS,OAAO;IACZ,qBAAqB;CACxB;;AAED;;GAEG;;AAEH;;;;IAII,2BAA2B;CAC9B;;AAED;;GAEG;;AAEH;;;;IAII,mBAAmB;IACnB,WAAW;CACd;;AAED;;GAEG;;AAEH;;;;IAII,+BAA+B;CAClC;;AAED;;GAEG;;AAEH;IACI,+BAA+B;CAClC;;AAED;;;;;GAKG;;AAEH;IACI,uBAAuB,CAAC,OAAO;IAC/B,eAAe,CAAC,OAAO;IACvB,eAAe,CAAC,OAAO;IACvB,gBAAgB,CAAC,OAAO;IACxB,WAAW,CAAC,OAAO;IACnB,oBAAoB,CAAC,OAAO;CAC/B;;AAED;;GAEG;;AAEH;IACI,yBAAyB;CAC5B;;AAED;;GAEG;;AAEH;IACI,eAAe;CAClB;;AAED;;;GAGG;;AAEH;;IAEI,uBAAuB,CAAC,OAAO;IAC/B,WAAW,CAAC,OAAO;CACtB;;AAED;;GAEG;;AAEH;;IAEI,aAAa;CAChB;;AAED;;;GAGG;;AAEH;IACI,8BAA8B,CAAC,OAAO;IACtC,qBAAqB,CAAC,OAAO;CAChC;;AAED;;GAEG;;AAEH;IACI,yBAAyB;CAC5B;;AAED;;;GAGG;;AAEH;IACI,2BAA2B,CAAC,OAAO;IACnC,cAAc,CAAC,OAAO;CACzB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;IACI,eAAe;CAClB;;AAED;;GAEG;;AAEH;IACI,mBAAmB;CACtB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;IACI,cAAc;CACjB;;AAED;;GAEG;;AAEH;IACI,cAAc;CACjB","file":"normalize.css","sourcesContent":["/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n    margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n    background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n    overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n    text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n    display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n    display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--6-1!./node_modules/_stylus-loader@3.0.2@stylus-loader/index.js!./css/main.styl":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader??ref--6-1!./node_modules/_stylus-loader@3.0.2@stylus-loader!./css/main.styl ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js")(true);
// imports
exports.i(__webpack_require__(/*! -!../node_modules/_css-loader@0.28.11@css-loader??ref--6-1!./normalize.css */ "./node_modules/_css-loader@0.28.11@css-loader/index.js??ref--6-1!./css/normalize.css"), "");

// module
exports.push([module.i, "body {\n  margin: 10px 0;\n}\n.game-container {\n  width: 610px;\n  margin: 0 auto;\n}\n.game-header {\n  height: 80px;\n  color: #fff;\n  font: 24px/30px Arial;\n}\n.game-header:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.game-header .game-title {\n  float: left;\n  margin: 0;\n  color: #776e65;\n  font: bold 80px/80px Arial;\n}\n.game-header .game-score-box,\n.game-header .game-best-score-box {\n  float: right;\n  width: 100px;\n  height: 60px;\n  list-style: none;\n  margin: 10px 1px;\n  padding: 0;\n  text-align: center;\n  border-radius: 3px;\n  background-color: #b9ada1;\n}\n.game-header .new-game {\n  float: right;\n  width: 130px;\n  height: 60px;\n  margin: 10px 1px;\n  text-align: center;\n  color: #fff;\n  border-radius: 3px;\n  background-color: #8f7a66;\n  cursor: pointer;\n}\n.game-wrapper {\n  position: relative;\n}\n.game-wrapper .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 2;\n  background-color: rgba(255,255,255,0.4);\n  display: none;\n  text-align: center;\n}\n.game-wrapper .overlay .game-result {\n  margin-top: 30%;\n  font: bold 60px/60px Arial;\n}\n.game-wrapper .overlay .game-result.lose {\n  color: #766e66;\n}\n.game-wrapper .overlay .game-result.win {\n  color: #e7c24f;\n}\n.game-wrapper .overlay .game-retry {\n  width: 230px;\n  height: 48px;\n  font: 24px/48px Arial;\n  color: #f9f6f2;\n  background-color: #8c7a68;\n  cursor: pointer;\n}\n.game-wrapper table {\n  background-color: #cdc0b4;\n  border-collapse: collapse;\n}\n.game-wrapper tr {\n  margin: 0;\n  padding: 0;\n}\n.game-wrapper td {\n  text-align: center;\n  vertical-align: middle;\n  width: 150px;\n  height: 150px;\n  box-sizing: border-box;\n  border: 10px solid #bbada0;\n  margin: 0;\n  padding: 0;\n}\n.game-wrapper .tile {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 140px;\n  height: 140px;\n  background-color: #ece4da;\n  text-align: center;\n  line-height: 140px;\n  font-size: 56px;\n  font-weight: bold;\n  font-family: \"Helvetica Neue\", Arial, sans-serif;\n  transition: transform 0.1s ease-in-out;\n}\n.game-wrapper .tile-0-0 {\n  transform: translate(10px, 10px);\n}\n.game-wrapper .tile-0-1 {\n  transform: translate(160px, 10px);\n}\n.game-wrapper .tile-0-2 {\n  transform: translate(310px, 10px);\n}\n.game-wrapper .tile-0-3 {\n  transform: translate(460px, 10px);\n}\n.game-wrapper .tile-1-0 {\n  transform: translate(10px, 160px);\n}\n.game-wrapper .tile-1-1 {\n  transform: translate(160px, 160px);\n}\n.game-wrapper .tile-1-2 {\n  transform: translate(310px, 160px);\n}\n.game-wrapper .tile-1-3 {\n  transform: translate(460px, 160px);\n}\n.game-wrapper .tile-2-0 {\n  transform: translate(10px, 310px);\n}\n.game-wrapper .tile-2-1 {\n  transform: translate(160px, 310px);\n}\n.game-wrapper .tile-2-2 {\n  transform: translate(310px, 310px);\n}\n.game-wrapper .tile-2-3 {\n  transform: translate(460px, 310px);\n}\n.game-wrapper .tile-3-0 {\n  transform: translate(10px, 460px);\n}\n.game-wrapper .tile-3-1 {\n  transform: translate(160px, 460px);\n}\n.game-wrapper .tile-3-2 {\n  transform: translate(310px, 460px);\n}\n.game-wrapper .tile-3-3 {\n  transform: translate(460px, 460px);\n}\n.game-wrapper .tile-value-2 {\n  color: #766e66;\n  background-color: #ede4db;\n}\n.game-wrapper .tile-value-4 {\n  color: #766e66;\n  background-color: #ebe0cb;\n}\n.game-wrapper .tile-value-8 {\n  color: #f9f6f2;\n  background-color: #e9b381;\n}\n.game-wrapper .tile-value-16 {\n  color: #f9f6f2;\n  background-color: #e99c6c;\n}\n.game-wrapper .tile-value-32 {\n  color: #f9f6f2;\n  background-color: #e88267;\n}\n.game-wrapper .tile-value-64 {\n  color: #f9f6f2;\n  background-color: #e66747;\n}\n.game-wrapper .tile-value-128 {\n  color: #f9f6f2;\n  background-color: #e9cf7f;\n}\n.game-wrapper .tile-value-256 {\n  color: #f9f6f2;\n  background-color: #e9cc72;\n}\n.game-wrapper .tile-value-512 {\n  color: #f9f6f2;\n  background-color: #edc850;\n}\n.game-wrapper .tile-value-1024 {\n  color: #f9f6f2;\n  background-color: #edc53f;\n}\n.game-wrapper .tile-value-2048 {\n  color: #f9f6f2;\n  background-color: #edc22e;\n}\n", "", {"version":3,"sources":["/Users/lichong/Sources/2018-contest/css/css/main.styl","/Users/lichong/Sources/2018-contest/css/main.styl","/Users/lichong/Sources/2018-contest/css/css/base.styl"],"names":[],"mappings":"AAUA;EACE,eAAA;CCRD;ADUD;EACE,aAAA;EACA,eAAA;CCRD;ADUD;EACE,aAAA;EACA,YAAA;EACA,sBAAA;CCRD;ACXC;EACE,YAAA;EACA,eAAA;EACA,YAAA;CDaH;ADMC;EACE,YAAA;EACA,UAAA;EACA,eAAA;EACA,2BAAA;CCJH;ADMC;;EACE,aAAA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,0BAAA;CCHH;ADKC;EACE,aAAA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EACA,gBAAA;CCHH;ADMD;EACE,mBAAA;CCJD;ADKC;EACE,mBAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,wCAAA;EACA,cAAA;EACA,mBAAA;CCHH;ADIG;EACE,gBAAA;EACA,2BAAA;CCFL;ADGK;EACE,eAAA;CCDP;ADEK;EACE,eAAA;CCAP;ADCG;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,0BAAA;EACA,gBAAA;CCCL;ADCC;EACE,0BAAA;EACA,0BAAA;CCCH;ADAC;EACE,UAAA;EACA,WAAA;CCEH;ADDC;EACE,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,2BAAA;EACA,UAAA;EACA,WAAA;CCGH;ADDC;EACE,mBAAA;EACA,QAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,0BAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iDAAA;EACA,uCAAA;CCGH;ADCK;EACE,iCAAA;CCCP;ADFK;EACE,kCAAA;CCIP;ADLK;EACE,kCAAA;CCOP;ADRK;EACE,kCAAA;CCUP;ADXK;EACE,kCAAA;CCaP;ADdK;EACE,mCAAA;CCgBP;ADjBK;EACE,mCAAA;CCmBP;ADpBK;EACE,mCAAA;CCsBP;ADvBK;EACE,kCAAA;CCyBP;AD1BK;EACE,mCAAA;CC4BP;AD7BK;EACE,mCAAA;CC+BP;ADhCK;EACE,mCAAA;CCkCP;ADnCK;EACE,kCAAA;CCqCP;ADtCK;EACE,mCAAA;CCwCP;ADzCK;EACE,mCAAA;CC2CP;AD5CK;EACE,mCAAA;CC8CP;AD5CC;EACE,eAAA;EACA,0BAAA;CC8CH;AD7CC;EACE,eAAA;EACA,0BAAA;CC+CH;AD9CC;EACE,eAAA;EACA,0BAAA;CCgDH;AD/CC;EACE,eAAA;EACA,0BAAA;CCiDH;ADhDC;EACE,eAAA;EACA,0BAAA;CCkDH;ADjDC;EACE,eAAA;EACA,0BAAA;CCmDH;ADlDC;EACE,eAAA;EACA,0BAAA;CCoDH;ADnDC;EACE,eAAA;EACA,0BAAA;CCqDH;ADpDC;EACE,eAAA;EACA,0BAAA;CCsDH;ADrDC;EACE,eAAA;EACA,0BAAA;CCuDH;ADtDC;EACE,eAAA;EACA,0BAAA;CCwDH","file":"main.styl","sourcesContent":["gridWidth = 150px\ngridBorder = 10px\nrowLen = 4\ncolLen = 4\ntileFontSize = 56px\ncontainerWidth = gridWidth * colLen + gridBorder\n\n@import \"normalize.css\"\n@import \"base.styl\"\n\nbody\n  margin: 10px 0\n\n.game-container\n  width: containerWidth\n  margin: 0 auto\n\n.game-header\n  height:80px;\n  color: white\n  font:24px/30px Arial\n  clearboth()\n\n  .game-title\n    float: left\n    margin:0\n    color: #776e65\n    font: bold 80px/80px Arial\n\n  .game-score-box, .game-best-score-box\n    float:right\n    width: 100px\n    height: 60px\n    list-style:none\n    margin:10px 1px\n    padding:0\n    text-align:center\n    border-radius: 3px\n    background-color: #B9ADA1\n\n  .new-game\n    float:right\n    width:130px\n    height:60px\n    margin:10px 1px\n    text-align:center\n    color: white\n    border-radius: 3px\n    background-color: #8f7a66\n    cursor: pointer\n\n\n.game-wrapper\n  position: relative\n  .overlay\n    position: absolute\n    left:0\n    right:0\n    top:0\n    bottom:0\n    z-index: 2\n    background-color: rgba(255,255,255,0.4)\n    display: none\n    text-align:center\n    .game-result\n      margin-top: 30%\n      font: bold 60px/60px Arial\n      &.lose\n        color:#766E66\n      &.win\n        color:#E7C24F\n    .game-retry\n      width:230px\n      height:48px\n      font: 24px/48px Arial\n      color:#F9F6F2\n      background-color: #8C7A68\n      cursor: pointer\n\n  table\n    background-color: #CDC0B4\n    border-collapse: collapse\n  tr\n    margin: 0\n    padding: 0\n  td\n    text-align: center\n    vertical-align: middle\n    width: gridWidth\n    height: gridWidth\n    box-sizing: border-box\n    border: gridBorder solid #BBADA0\n    margin: 0\n    padding: 0\n\n  .tile\n    position: absolute\n    left: 0\n    top: 0\n    z-index: 1\n    width: gridWidth - gridBorder\n    height: gridWidth - gridBorder\n    background-color: #ECE4DA\n    text-align center\n    line-height: gridWidth - gridBorder\n    font-size: tileFontSize\n    font-weight: bold\n    font-family: \"Helvetica Neue\", Arial, sans-serif\n    transition: transform 0.1s ease-in-out\n  // tile position: tile-{rowIndex}-{colIndex}\n  for ri in range(0, rowLen - 1)\n    for ci in range(0, colLen - 1)\n      .tile-{ri}-{ci}\n        transform: translate(gridBorder + ci * gridWidth, gridBorder + ri * gridWidth)\n  // tile color\n  .tile-value-2\n    color:#766E66\n    background-color: #EDE4DB\n  .tile-value-4\n    color:#766E66\n    background-color: #EBE0CB\n  .tile-value-8\n    color:#F9F6F2\n    background-color: #E9B381\n  .tile-value-16\n    color:#F9F6F2\n    background-color: #E99C6C\n  .tile-value-32\n    color:#F9F6F2\n    background-color: #E88267\n  .tile-value-64\n    color:#F9F6F2\n    background-color: #E66747\n  .tile-value-128\n    color:#F9F6F2\n    background-color: #E9CF7F\n  .tile-value-256\n    color:#F9F6F2\n    background-color: #E9CC72\n  .tile-value-512\n    color:#F9F6F2\n    background-color: #EDC850\n  .tile-value-1024\n    color: #F9F6F2\n    background-color: #EDC53F\n  .tile-value-2048\n    color: #F9F6F2\n    background-color: #EDC22E\n\n\n\n\n\n\n","@import \"normalize.css\";\nbody {\n  margin: 10px 0;\n}\n.game-container {\n  width: 610px;\n  margin: 0 auto;\n}\n.game-header {\n  height: 80px;\n  color: #fff;\n  font: 24px/30px Arial;\n}\n.game-header:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.game-header .game-title {\n  float: left;\n  margin: 0;\n  color: #776e65;\n  font: bold 80px/80px Arial;\n}\n.game-header .game-score-box,\n.game-header .game-best-score-box {\n  float: right;\n  width: 100px;\n  height: 60px;\n  list-style: none;\n  margin: 10px 1px;\n  padding: 0;\n  text-align: center;\n  border-radius: 3px;\n  background-color: #b9ada1;\n}\n.game-header .new-game {\n  float: right;\n  width: 130px;\n  height: 60px;\n  margin: 10px 1px;\n  text-align: center;\n  color: #fff;\n  border-radius: 3px;\n  background-color: #8f7a66;\n  cursor: pointer;\n}\n.game-wrapper {\n  position: relative;\n}\n.game-wrapper .overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 2;\n  background-color: rgba(255,255,255,0.4);\n  display: none;\n  text-align: center;\n}\n.game-wrapper .overlay .game-result {\n  margin-top: 30%;\n  font: bold 60px/60px Arial;\n}\n.game-wrapper .overlay .game-result.lose {\n  color: #766e66;\n}\n.game-wrapper .overlay .game-result.win {\n  color: #e7c24f;\n}\n.game-wrapper .overlay .game-retry {\n  width: 230px;\n  height: 48px;\n  font: 24px/48px Arial;\n  color: #f9f6f2;\n  background-color: #8c7a68;\n  cursor: pointer;\n}\n.game-wrapper table {\n  background-color: #cdc0b4;\n  border-collapse: collapse;\n}\n.game-wrapper tr {\n  margin: 0;\n  padding: 0;\n}\n.game-wrapper td {\n  text-align: center;\n  vertical-align: middle;\n  width: 150px;\n  height: 150px;\n  box-sizing: border-box;\n  border: 10px solid #bbada0;\n  margin: 0;\n  padding: 0;\n}\n.game-wrapper .tile {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 140px;\n  height: 140px;\n  background-color: #ece4da;\n  text-align: center;\n  line-height: 140px;\n  font-size: 56px;\n  font-weight: bold;\n  font-family: \"Helvetica Neue\", Arial, sans-serif;\n  transition: transform 0.1s ease-in-out;\n}\n.game-wrapper .tile-0-0 {\n  transform: translate(10px, 10px);\n}\n.game-wrapper .tile-0-1 {\n  transform: translate(160px, 10px);\n}\n.game-wrapper .tile-0-2 {\n  transform: translate(310px, 10px);\n}\n.game-wrapper .tile-0-3 {\n  transform: translate(460px, 10px);\n}\n.game-wrapper .tile-1-0 {\n  transform: translate(10px, 160px);\n}\n.game-wrapper .tile-1-1 {\n  transform: translate(160px, 160px);\n}\n.game-wrapper .tile-1-2 {\n  transform: translate(310px, 160px);\n}\n.game-wrapper .tile-1-3 {\n  transform: translate(460px, 160px);\n}\n.game-wrapper .tile-2-0 {\n  transform: translate(10px, 310px);\n}\n.game-wrapper .tile-2-1 {\n  transform: translate(160px, 310px);\n}\n.game-wrapper .tile-2-2 {\n  transform: translate(310px, 310px);\n}\n.game-wrapper .tile-2-3 {\n  transform: translate(460px, 310px);\n}\n.game-wrapper .tile-3-0 {\n  transform: translate(10px, 460px);\n}\n.game-wrapper .tile-3-1 {\n  transform: translate(160px, 460px);\n}\n.game-wrapper .tile-3-2 {\n  transform: translate(310px, 460px);\n}\n.game-wrapper .tile-3-3 {\n  transform: translate(460px, 460px);\n}\n.game-wrapper .tile-value-2 {\n  color: #766e66;\n  background-color: #ede4db;\n}\n.game-wrapper .tile-value-4 {\n  color: #766e66;\n  background-color: #ebe0cb;\n}\n.game-wrapper .tile-value-8 {\n  color: #f9f6f2;\n  background-color: #e9b381;\n}\n.game-wrapper .tile-value-16 {\n  color: #f9f6f2;\n  background-color: #e99c6c;\n}\n.game-wrapper .tile-value-32 {\n  color: #f9f6f2;\n  background-color: #e88267;\n}\n.game-wrapper .tile-value-64 {\n  color: #f9f6f2;\n  background-color: #e66747;\n}\n.game-wrapper .tile-value-128 {\n  color: #f9f6f2;\n  background-color: #e9cf7f;\n}\n.game-wrapper .tile-value-256 {\n  color: #f9f6f2;\n  background-color: #e9cc72;\n}\n.game-wrapper .tile-value-512 {\n  color: #f9f6f2;\n  background-color: #edc850;\n}\n.game-wrapper .tile-value-1024 {\n  color: #f9f6f2;\n  background-color: #edc53f;\n}\n.game-wrapper .tile-value-2048 {\n  color: #f9f6f2;\n  background-color: #edc22e;\n}\n","clearboth()\n  &:after\n    content: ''\n    display: table\n    clear:both"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.21.0@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.21.0@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc3R5bD81NDVhIiwid2VicGFjazovLy8uL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvbWFpbi5zdHlsIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbIlRFTVBMQVRFUyIsImdhbWUiLCJTRVRUSU5HUyIsInJvd0xlbiIsImNvbExlbiIsInRhcmdldCIsIkdyaWRzIiwiZWwiLCJjb250YWluZXIiLCJjb250ZW50cyIsImNsZWFyQ29udGVudHMiLCJyZW5kZXIiLCJzIiwicmkiLCJjaSIsImlubmVySFRNTCIsInJvd0NhbGxiYWNrIiwiY29sQ2FsbGJhY2siLCJhcnIiLCJwdXNoIiwiVGlsZSIsInZhbHVlIiwicm93SW5kZXgiLCJjb2xJbmRleCIsInRpbGVzQ29udGFpbmVyIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJlbGVtZW50IiwiZXZlbnRzIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJvbGRWYWx1ZSIsIl92YWx1ZSIsInJlcGxhY2UiLCJjYnMiLCJmb3JFYWNoIiwiY2IiLCJ0eXBlIiwidGlsZSIsIm5ld1ZhbHVlIiwiX3Jvd0luZGV4IiwiX2NvbEluZGV4IiwiZXZlbnQiLCJHYW1lIiwiX3Njb3JlIiwic2NvcmVFbCIsInF1ZXJ5U2VsZWN0b3IiLCJncmlkcyIsImJ0bk5ld0dhbWUiLCJnYW1lUmVzdWx0RWwiLCJidG5SZXRyeSIsIm92ZXJsYXkiLCJnYW1lRXZlbnRzIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudEhhbmRsZXIiLCJuZXdHYW1lIiwic3R5bGUiLCJkaXNwbGF5Iiwic2NvcmUiLCJuZXdSYW5kb21UaWxlcyIsImV2Iiwia2V5TWFwIiwiZGlyZWN0aW9uIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic29tZU1vdmVkIiwibW92ZVRpbGVzIiwiZW1wdHlQb3MiLCJnZXRFbXB0eUdyaWRzUG9zIiwibGVuZ3RoIiwiaGFzVmFsdWVFcXVhbGVkQWRqVGlsZXMiLCJzZXRHYW1lUmVzdWx0IiwicmVzdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJsZW4iLCJjbGVuIiwiclRpbGUiLCJkVGlsZSIsImxlbiIsIm1lcmdlZCIsImNpaSIsInByZVRpbGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0cmkiLCJuIiwicmFuZG9tVmFsdWVzIiwibmV3VGlsZXMiLCJpIiwiZW1wdHlHcmlkc1BvcyIsImdldFJhbmRvbUl0ZW0iLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwibWFuZGF0b3J5QXJnIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBC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QUF3TixVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi9ub2RlX21vZHVsZXMvX3N0eWx1cy1sb2FkZXJAMy4wLjJAc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc3R5bFwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wic291cmNlTWFwXCI6dHJ1ZSxcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uL25vZGVfbW9kdWxlcy9fc3R5bHVzLWxvYWRlckAzLjAuMkBzdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vbm9kZV9tb2R1bGVzL19zdHlsdXMtbG9hZGVyQDMuMC4yQHN0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnN0eWxcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgJy4uL2Nzcy9tYWluLnN0eWwnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwuanMnXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBURU1QTEFURVMgPSB7XG4gICAgZ2FtZTogYDxkaXYgY2xhc3M9XCJnYW1lLWNvbnRhaW5lclwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJnYW1lLWhlYWRlclwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJnYW1lLXRpdGxlXCI+MjA0ODwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXctZ2FtZVwiPk5FVyBHQU1FPC9idXR0b24+XG4gICAgICAgIDx1bCBjbGFzcz1cImdhbWUtYmVzdC1zY29yZS1ib3hcIj5cbiAgICAgICAgICAgIDxsaT5CRVNUPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdhbWUtYmVzdC1zY29yZVwiPjA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3M9XCJnYW1lLXNjb3JlLWJveFwiPlxuICAgICAgICAgICAgPGxpPlNDT1JFPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdhbWUtc2NvcmVcIj4wPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS13cmFwcGVyXCI+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cImdyaWRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbGVzLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJnYW1lLXJlc3VsdCBsb3NlXCI+R2FtZSBPdmVyITwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJnYW1lLXJldHJ5XCI+UGxheSBhZ2FpbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmAsXG5cbn1cblxuY29uc3QgU0VUVElOR1MgPSB7XG4gICAgcm93TGVuOiA0LFxuICAgIGNvbExlbjogNCxcbiAgICB0YXJnZXQ6IDIwNDgsXG59XG5cblxuY2xhc3MgR3JpZHMge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWxcbiAgICAgICAgdGhpcy5yb3dMZW4gPSBTRVRUSU5HUy5yb3dMZW5cbiAgICAgICAgdGhpcy5jb2xMZW4gPSBTRVRUSU5HUy5jb2xMZW5cbiAgICAgICAgLy8gZ3JpZCBjb250ZW50XG4gICAgICAgIHRoaXMuY29udGVudHMgPSBbXVxuICAgICAgICAvLyBpbml0IGNvbnRlbnRzXG4gICAgICAgIHRoaXMuY2xlYXJDb250ZW50cygpXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIHJlbmRlciBIVE1MLCBpdGVyYXRlIHRvIGdlbmVyYXRlIHRib2R5IGNvbnRlbnRcbiAgICAgICAgbGV0IHMgPSAnJ1xuICAgICAgICBmb3IgKGxldCByaSA9IDA7IHJpIDwgdGhpcy5yb3dMZW47IHJpKyspIHtcbiAgICAgICAgICAgIHMgKz0gYDx0cj5gXG4gICAgICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgdGhpcy5jb2xMZW47IGNpKyspIHtcbiAgICAgICAgICAgICAgICBzICs9IGA8dGQ+PC90ZD5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzICs9IGA8L3RyPmBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBzXG4gICAgfVxuXG4gICAgY2xlYXJDb250ZW50cygpIHtcbiAgICAgICAgZm9yIChsZXQgcmkgPSAwOyByaSA8IHRoaXMucm93TGVuOyByaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRzW3JpXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgdGhpcy5jb2xMZW47IGNpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRzW3JpXVtjaV0gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlYWNoQ29udGVudChyb3dDYWxsYmFjaywgY29sQ2FsbGJhY2spIHtcbiAgICAgICAgZm9yIChsZXQgcmkgPSAwOyByaSA8IHRoaXMucm93TGVuOyByaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvd0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gY2IoaXRlbSwgaW5kZXgsIGFycmF5KVxuICAgICAgICAgICAgICAgIHJvd0NhbGxiYWNrKHRoaXMuY29udGVudHNbcmldLCByaSwgdGhpcy5jb250ZW50cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGNpID0gMDsgY2kgPCB0aGlzLmNvbExlbjsgY2krKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29sQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2IoaXRlbSwgaW5kZXgsIGFycmF5KVxuICAgICAgICAgICAgICAgICAgICBjb2xDYWxsYmFjayh0aGlzLmNvbnRlbnRzW3JpXVtjaV0sIGNpLCB0aGlzLmNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0RW1wdHlHcmlkc1BvcygpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW11cbiAgICAgICAgZm9yIChsZXQgcmkgPSAwOyByaSA8IHRoaXMucm93TGVuOyByaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgdGhpcy5jb2xMZW47IGNpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZW50c1tyaV1bY2ldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKFtyaSwgY2ldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxufVxuXG5jbGFzcyBUaWxlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IDIsIHJvd0luZGV4ID0gMCwgY29sSW5kZXggPSAwKSB7XG4gICAgICAgIGlmIChUaWxlLnRpbGVzQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGlsZSBtdXN0IGJlIGFzc2lnbmVkIGEgY29udGFpbmVyIGluIFRpbHMudGlsZXNDb250YWluZXInKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gVGlsZS50aWxlc0NvbnRhaW5lclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnJlbmRlcihyb3dJbmRleCwgY29sSW5kZXgsIHZhbHVlKVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy5yb3dJbmRleCA9IHJvd0luZGV4XG4gICAgICAgIHRoaXMuY29sSW5kZXggPSBjb2xJbmRleFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdXG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMuX3ZhbHVlXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IHZhbHVlXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgICAvdGlsZS12YWx1ZS0oXFxkKykvLCBgdGlsZS12YWx1ZS0ke3ZhbHVlfWApXG4gICAgICAgIC8vIGVtaXQgZXZlbnRzXG4gICAgICAgIGxldCBjYnMgPSBUaWxlLmV2ZW50c1sndGlsZVZhbHVlQ2hhbmdlZCddXG4gICAgICAgIGlmIChjYnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2JzLmZvckVhY2goKGNiKT0+e1xuICAgICAgICAgICAgICAgIGNiKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RpbGVWYWx1ZUNoYW5nZWQnLFxuICAgICAgICAgICAgICAgICAgICB0aWxlOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVcbiAgICB9XG5cbiAgICBzZXQgcm93SW5kZXgocm93SW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgICAgICAgIC90aWxlLShcXGQrKS0oXFxkKykvLCBgdGlsZS0ke3Jvd0luZGV4fS0kMmApXG4gICAgICAgIHRoaXMuX3Jvd0luZGV4ID0gcm93SW5kZXhcbiAgICB9XG5cbiAgICBnZXQgcm93SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3dJbmRleFxuICAgIH1cblxuICAgIHNldCBjb2xJbmRleChjb2xJbmRleCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKC90aWxlLShcXGQrKS0oXFxkKykvLFxuICAgICAgICAgICAgYHRpbGUtJDEtJHtjb2xJbmRleH1gKVxuICAgICAgICB0aGlzLl9jb2xJbmRleCA9IGNvbEluZGV4XG4gICAgfVxuXG4gICAgZ2V0IGNvbEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sSW5kZXhcbiAgICB9XG5cbiAgICByZW5kZXIocm93SW5kZXgsIGNvbEluZGV4LCB2YWx1ZSkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGB0aWxlIHRpbGUtJHtyb3dJbmRleH0tJHtjb2xJbmRleH0gdGlsZS12YWx1ZS0ke3ZhbHVlfWBcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IHZhbHVlXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRFdmVudEhhbmRsZXIodHlwZSwgY2IpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gVGlsZS5ldmVudHNbdHlwZV1cbiAgICAgICAgaWYgKFRpbGUuZXZlbnRzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFRpbGUuZXZlbnRzW3R5cGVdPSBbXVxuICAgICAgICB9XG4gICAgICAgIFRpbGUuZXZlbnRzW3R5cGVdLnB1c2goY2IpXG4gICAgfVxufVxuXG5UaWxlLmV2ZW50cyA9IHt9XG5cbmNsYXNzIEdhbWUge1xuICAgIGdldCBzY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlXG4gICAgfVxuXG4gICAgc2V0IHNjb3JlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Njb3JlID0gdmFsdWVcbiAgICAgICAgdGhpcy5zY29yZUVsLmlubmVyVGV4dCA9IHZhbHVlXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgLy8gcmVuZGVyIHRlbXBsYXRlXG4gICAgICAgIGVsLmlubmVySFRNTCA9IFRFTVBMQVRFUy5nYW1lXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWwucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJylcbiAgICAgICAgdGhpcy5ncmlkcyA9IG5ldyBHcmlkcyhlbC5xdWVyeVNlbGVjdG9yKCcuZ3JpZHMtY29udGFpbmVyJykpXG4gICAgICAgIFRpbGUudGlsZXNDb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcudGlsZXMtY29udGFpbmVyJylcbiAgICAgICAgdGhpcy5zY29yZUVsID0gZWwucXVlcnlTZWxlY3RvcignLmdhbWUtc2NvcmUnKVxuICAgICAgICB0aGlzLl9zY29yZSA9IDBcbiAgICAgICAgdGhpcy5idG5OZXdHYW1lID0gZWwucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lJylcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0RWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1yZXN1bHQnKVxuICAgICAgICB0aGlzLmJ0blJldHJ5ID0gZWwucXVlcnlTZWxlY3RvcignLmdhbWUtcmV0cnknKVxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBlbC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXG5cbiAgICAgICAgLy8gZml4IGV2ZW50cyBjb250ZXh0XG4gICAgICAgIHRoaXMuZ2FtZUV2ZW50cyA9IHRoaXMuZ2FtZUV2ZW50cy5iaW5kKHRoaXMpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nYW1lRXZlbnRzKVxuICAgICAgICAvLyBzZWxmIGRlZmluZWQgZXZlbnRzXG4gICAgICAgIFRpbGUuYWRkRXZlbnRIYW5kbGVyKCd0aWxlVmFsdWVDaGFuZ2VkJywgdGhpcy5nYW1lRXZlbnRzKVxuICAgICAgICB0aGlzLm5ld0dhbWUoKVxuICAgIH1cblxuICAgIG5ld0dhbWUoKSB7XG4gICAgICAgIHRoaXMuZ3JpZHMuY2xlYXJDb250ZW50cygpXG4gICAgICAgIFRpbGUudGlsZXNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZ2FtZUV2ZW50cylcbiAgICAgICAgLy8gY3JlYXRlIDIgaW5pdGlhbCB0aWxlc1xuICAgICAgICB0aGlzLm5ld1JhbmRvbVRpbGVzKDIpXG4gICAgfVxuXG4gICAgZ2FtZUV2ZW50cyhldikge1xuICAgICAgICBldiA9IGV2IHx8IGV2ZW50XG4gICAgICAgIHN3aXRjaCAoZXYudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2LnRhcmdldCA9PT0gdGhpcy5idG5OZXdHYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIGV2LnRhcmdldCA9PT0gdGhpcy5idG5SZXRyeSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0dhbWUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAna2V5ZG93bic6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlNYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgICczNyc6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgJzM4JzogJ3VwJyxcbiAgICAgICAgICAgICAgICAgICAgJzM5JzogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgJzQwJzogJ2Rvd24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBrZXlNYXBbZXYua2V5Q29kZSArICcnXVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIGxldCBzb21lTW92ZWQgPSB0aGlzLm1vdmVUaWxlcyhkaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vbmUgbW92ZWQsIHRoZW4gbm8gbmV3IHRpbGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvbWVNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdSYW5kb21UaWxlcygxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZ2FtZSBvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW1wdHlQb3MgPSB0aGlzLmdyaWRzLmdldEVtcHR5R3JpZHNQb3MoKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtcHR5UG9zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5oYXNWYWx1ZUVxdWFsZWRBZGpUaWxlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoJ0dhbWUgb3ZlciEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZVJlc3VsdCgnbG9zZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3RpbGVWYWx1ZUNoYW5nZWQnOiB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2luXG4gICAgICAgICAgICAgICAgaWYgKGV2Lm5ld1ZhbHVlID09PSBTRVRUSU5HUy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lUmVzdWx0KCd3aW4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRHYW1lUmVzdWx0KHJlc3VsdD0nbG9zZScpIHtcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0RWwuY2xhc3NOYW1lID0gYGdhbWUtcmVzdWx0ICR7cmVzdWx0fWBcbiAgICAgICAgdGhpcy5nYW1lUmVzdWx0RWwuaW5uZXJIVE1MID0gcmVzdWx0PT09J3dpbic/ICdZb3Ugd2luISc6J0dhbWUgb3ZlciEnXG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5nYW1lRXZlbnRzKVxuICAgIH1cblxuICAgIGhhc1ZhbHVlRXF1YWxlZEFkalRpbGVzKCkge1xuICAgICAgICAvLyBjaGVjayByaWdodCwgZG93biBvZiBldmVyeSB0aWxlXG4gICAgICAgIGZvciAobGV0IHJpID0gMCwgcmxlbiA9IHRoaXMuZ3JpZHMuY29udGVudHMubGVuZ3RoOyByaSA8IHJsZW47IHJpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNpID0gMCwgY2xlbiA9IHRoaXMuZ3JpZHMuY29udGVudHNbcmldLmxlbmd0aDsgY2kgPCBjbGVuOyBjaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLmdyaWRzLmNvbnRlbnRzW3JpXVtjaV1cbiAgICAgICAgICAgICAgICBpZiAodGlsZSA9PT0gbnVsbCkgY29udGludWVcbiAgICAgICAgICAgICAgICBpZiAoY2kgPCBjbGVuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgclRpbGUgPSB0aGlzLmdyaWRzLmNvbnRlbnRzW3JpXVtjaSArIDFdXG4gICAgICAgICAgICAgICAgICAgIGlmIChyVGlsZSAhPT0gbnVsbCAmJiByVGlsZS52YWx1ZSA9PT0gdGlsZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmkgPCBybGVuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZFRpbGUgPSB0aGlzLmdyaWRzLmNvbnRlbnRzW3JpICsgMV1bY2ldXG4gICAgICAgICAgICAgICAgICAgIGlmIChkVGlsZSAhPT0gbnVsbCAmJiBkVGlsZS52YWx1ZSA9PT0gdGlsZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBtb3ZlVGlsZXMoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIHNvbWUgZ2FtZSBydWxlcyB0byBiZSBjb25zaWRlcmVkOlxuICAgICAgICAvLyBpZiBub25lIG1vdmVkLCB0aGVuIG5ldyB0aWxlIHdpbGwgbm90IGdlbmVyYXRlXG4gICAgICAgIGxldCBzb21lTW92ZWQgPSBmYWxzZVxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcbiAgICAgICAgICAgICAgICAvLyBjb2xJbmRleC0tXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmkgPSAwLCBsZW4gPSB0aGlzLmdyaWRzLmNvbnRlbnRzLmxlbmd0aDsgcmkgPCBsZW47IHJpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlcnkgcm93IGFsbG93cyBvbmUgbWVyZ2VkXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sTGVuID0gdGhpcy5ncmlkcy5jb250ZW50c1tyaV0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNpID0gMTsgY2kgPCBjb2xMZW47IGNpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZSA9PT0gbnVsbCkgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaWkgPSBjaVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKC0tY2lpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlVGlsZSA9IHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlVGlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlVGlsZS52YWx1ZSA9PT0gdGlsZS52YWx1ZSAmJiBtZXJnZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVUaWxlLnZhbHVlICs9IHRpbGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gcHJlVGlsZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlsZS5lbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZU1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aWxlLmNvbEluZGV4ICE9PSBjaWkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmNvbEluZGV4ID0gY2lpICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2lpICsgMV0gPSB0aWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lTW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2lpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuY29sSW5kZXggPSBjaWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzLmNvbnRlbnRzW3JpXVtjaWldID0gdGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lTW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIC8vIGNvbEluZGV4KytcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByaSA9IDAsIGxlbiA9IHRoaXMuZ3JpZHMuY29udGVudHMubGVuZ3RoOyByaSA8IGxlbjsgcmkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbExlbiA9IHRoaXMuZ3JpZHMuY29udGVudHNbcmldLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaSA9IGNvbExlbiAtIDI7IGNpID49IDA7IGNpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZSA9PT0gbnVsbCkgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaWkgPSBjaVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCsrY2lpIDw9IGNvbExlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlVGlsZSA9IHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlVGlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlVGlsZS52YWx1ZSA9PT0gdGlsZS52YWx1ZSAmJiBtZXJnZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVUaWxlLnZhbHVlICs9IHRpbGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gcHJlVGlsZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlsZS5lbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZU1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aWxlLmNvbEluZGV4ICE9PSBjaWkgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmNvbEluZGV4ID0gY2lpIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2lpIC0gMV0gPSB0aWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lTW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2lpID09PSBjb2xMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuY29sSW5kZXggPSBjaWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzLmNvbnRlbnRzW3JpXVtjaWldID0gdGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lTW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3VwJzoge1xuICAgICAgICAgICAgICAgIC8vIHJvd0luZGV4LS1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCByaSA9IDEsIGxlbiA9IHRoaXMuZ3JpZHMuY29udGVudHMubGVuZ3RoOyByaSA8IGxlbjsgcmkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaSA9IDAsIGxlbiA9IHRoaXMuZ3JpZHMuY29udGVudHNbcmldLmxlbmd0aDsgY2kgPCBsZW47IGNpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IGNvbHVtbiBhbGxvdyBvbmUgbWVyZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZSA9PT0gbnVsbCkgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmkgPSB0aWxlLnJvd0luZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZVRpbGUgPSB0aGlzLmdyaWRzLmNvbnRlbnRzW3RyaV1bY2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZVRpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZVRpbGUudmFsdWUgPT09IHRpbGUudmFsdWUgJiYgbWVyZ2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2VkIHRpbGUgaW50byB0aGUgcHJlVGlsZSB3aXRoIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcHJlVGlsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlVGlsZS52YWx1ZSArPSB0aWxlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IHByZVRpbGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGlzIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpbGUuZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbWVNb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGlsZS5yb3dJbmRleCAhPT0gdHJpICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5yb3dJbmRleCA9IHRyaSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbdGlsZS5yb3dJbmRleF1bY2ldID0gdGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZU1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnJvd0luZGV4ID0gdHJpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1t0cmldW2NpXSA9IHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZU1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZG93bic6IHtcbiAgICAgICAgICAgICAgICAvLyByb3dJbmRleCsrXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmkgPSB0aGlzLmdyaWRzLmNvbnRlbnRzLmxlbmd0aCAtIDI7IHJpID49IDA7IHJpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2kgPSAwLCBsZW4gPSB0aGlzLmdyaWRzLmNvbnRlbnRzW3JpXS5sZW5ndGg7IGNpIDwgbGVuOyBjaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBldmVyeSBjb2x1bW4gYWxsb3cgb25lIG1lcmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGUgPT09IG51bGwpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpID0gdGlsZS5yb3dJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRyaSA8IHRoaXMuZ3JpZHMuY29udGVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaSsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZVRpbGUgPSB0aGlzLmdyaWRzLmNvbnRlbnRzW3RyaV1bY2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZVRpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZVRpbGUudmFsdWUgPT09IHRpbGUudmFsdWUgJiYgbWVyZ2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2VkIHRpbGUgaW50byB0aGUgcHJlVGlsZSB3aXRoIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcHJlVGlsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlVGlsZS52YWx1ZSArPSB0aWxlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IHByZVRpbGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGlzIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpbGUuZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbWVNb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGlsZS5yb3dJbmRleCAhPT0gdHJpIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5yb3dJbmRleCA9IHRyaSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbcmldW2NpXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMuY29udGVudHNbdGlsZS5yb3dJbmRleF1bY2ldID0gdGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZU1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRyaSA9PT0gdGhpcy5ncmlkcy5jb250ZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUucm93SW5kZXggPSB0cmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcy5jb250ZW50c1tyaV1bY2ldID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzLmNvbnRlbnRzW3RyaV1bY2ldID0gdGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lTW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvbWVNb3ZlZFxuICAgIH1cblxuICAgIG5ld1JhbmRvbVRpbGVzKG4gPSAxLCByYW5kb21WYWx1ZXMgPSBbMiwgNF0pIHtcbiAgICAgICAgbGV0IG5ld1RpbGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbXB0eUdyaWRzUG9zID0gdGhpcy5ncmlkcy5nZXRFbXB0eUdyaWRzUG9zKClcbiAgICAgICAgICAgIGlmIChlbXB0eUdyaWRzUG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgW3Jvd0luZGV4LCBjb2xJbmRleF0gPSBVdGlsLmdldFJhbmRvbUl0ZW0oZW1wdHlHcmlkc1BvcylcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IFV0aWwuZ2V0UmFuZG9tSXRlbShyYW5kb21WYWx1ZXMpXG4gICAgICAgICAgICBsZXQgdGlsZSA9IG5ldyBUaWxlKHZhbHVlLCByb3dJbmRleCwgY29sSW5kZXgpXG4gICAgICAgICAgICB0aGlzLmdyaWRzLmNvbnRlbnRzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB0aWxlXG4gICAgICAgICAgICBuZXdUaWxlcy5wdXNoKHRpbGUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RpbGVzXG4gICAgfVxuXG5cbn1cblxuXG4vKlxubWFpblxuICovXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZUFwcCcpKVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICogbWluIDw9IHJhbmRvbUludCA8IG1heFxuICAgICAqIEBwYXJhbSBtaW5cbiAgICAgKiBAcGFyYW0gbWF4XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pXG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluIC8vVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgICB9LFxuICAgIGdldFJhbmRvbUl0ZW0oYXJyKSB7XG4gICAgICAgIGlmIChhcnIubGVuZ3RoPT09MCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyW3RoaXMuZ2V0UmFuZG9tSW50KDAsIGFyci5sZW5ndGgpXVxuICAgIH0sXG4gICAgbWFuZGF0b3J5QXJnKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hbmRhdG9yeSBhcmd1bWVudCBtaXNzaW5nIScpXG4gICAgfVxufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbGljaG9uZy9Tb3VyY2VzLzIwMTgtY29udGVzdC9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0RUFBNEU7O0FBRTVFO2dGQUNnRjs7QUFFaEY7OztHQUdHOztBQUVIO0lBQ0ksa0JBQWtCLENBQUMsT0FBTztJQUMxQiwrQkFBK0IsQ0FBQyxPQUFPO0NBQzFDOztBQUVEO2dGQUNnRjs7QUFFaEY7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ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuL25vcm1hbGl6ZS5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjEwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmdhbWUtaGVhZGVyIHtcXG4gIGhlaWdodDogODBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udDogMjRweC8zMHB4IEFyaWFsO1xcbn1cXG4uZ2FtZS1oZWFkZXI6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uZ2FtZS1oZWFkZXIgLmdhbWUtdGl0bGUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzc3NmU2NTtcXG4gIGZvbnQ6IGJvbGQgODBweC84MHB4IEFyaWFsO1xcbn1cXG4uZ2FtZS1oZWFkZXIgLmdhbWUtc2NvcmUtYm94LFxcbi5nYW1lLWhlYWRlciAuZ2FtZS1iZXN0LXNjb3JlLWJveCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAxMHB4IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjlhZGExO1xcbn1cXG4uZ2FtZS1oZWFkZXIgLm5ldy1nYW1lIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIG1hcmdpbjogMTBweCAxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjdhNjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5nYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5vdmVybGF5IC5nYW1lLXJlc3VsdCB7XFxuICBtYXJnaW4tdG9wOiAzMCU7XFxuICBmb250OiBib2xkIDYwcHgvNjBweCBBcmlhbDtcXG59XFxuLmdhbWUtd3JhcHBlciAub3ZlcmxheSAuZ2FtZS1yZXN1bHQubG9zZSB7XFxuICBjb2xvcjogIzc2NmU2NjtcXG59XFxuLmdhbWUtd3JhcHBlciAub3ZlcmxheSAuZ2FtZS1yZXN1bHQud2luIHtcXG4gIGNvbG9yOiAjZTdjMjRmO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5vdmVybGF5IC5nYW1lLXJldHJ5IHtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGZvbnQ6IDI0cHgvNDhweCBBcmlhbDtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjN2E2ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdhbWUtd3JhcHBlciB0YWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjMGI0O1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLmdhbWUtd3JhcHBlciB0ciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZ2FtZS13cmFwcGVyIHRkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjYmJhZGEwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlNGRhO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE0MHB4O1xcbiAgZm9udC1zaXplOiA1NnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0wLTAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMC0xIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2MHB4LCAxMHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0wLTIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzEwcHgsIDEwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTAtMyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NjBweCwgMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMS0wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDE2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0xLTEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTYwcHgsIDE2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0xLTIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzEwcHgsIDE2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0xLTMge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDYwcHgsIDE2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0yLTAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMzEwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTItMSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNjBweCwgMzEwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTItMiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMTBweCwgMzEwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTItMyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NjBweCwgMzEwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTMtMCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCA0NjBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMy0xIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2MHB4LCA0NjBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMy0yIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMxMHB4LCA0NjBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMy0zIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ2MHB4LCA0NjBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtMiB7XFxuICBjb2xvcjogIzc2NmU2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGU0ZGI7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtNCB7XFxuICBjb2xvcjogIzc2NmU2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmUwY2I7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtOCB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWIzODE7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtMTYge1xcbiAgY29sb3I6ICNmOWY2ZjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk5YzZjO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLXZhbHVlLTMyIHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ODI2NztcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS02NCB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjY3NDc7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtMTI4IHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5Y2Y3ZjtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS0yNTYge1xcbiAgY29sb3I6ICNmOWY2ZjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljYzcyO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLXZhbHVlLTUxMiB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGM4NTA7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtMTAyNCB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGM1M2Y7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtMjA0OCB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGMyMmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbGljaG9uZy9Tb3VyY2VzLzIwMTgtY29udGVzdC9jc3MvY3NzL21haW4uc3R5bFwiLFwiL1VzZXJzL2xpY2hvbmcvU291cmNlcy8yMDE4LWNvbnRlc3QvY3NzL21haW4uc3R5bFwiLFwiL1VzZXJzL2xpY2hvbmcvU291cmNlcy8yMDE4LWNvbnRlc3QvY3NzL2Nzcy9iYXNlLnN0eWxcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBVUE7RUFDRSxlQUFBO0NDUkQ7QURVRDtFQUNFLGFBQUE7RUFDQSxlQUFBO0NDUkQ7QURVRDtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7Q0NSRDtBQ1hDO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0NEYUg7QURNQztFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0NDSkg7QURNQzs7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtDQ0hIO0FES0M7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtDQ0hIO0FETUQ7RUFDRSxtQkFBQTtDQ0pEO0FES0M7RUFDRSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7Q0NISDtBRElHO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtDQ0ZMO0FER0s7RUFDRSxlQUFBO0NDRFA7QURFSztFQUNFLGVBQUE7Q0NBUDtBRENHO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0NDQ0w7QURDQztFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7Q0NDSDtBREFDO0VBQ0UsVUFBQTtFQUNBLFdBQUE7Q0NFSDtBRERDO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0NDR0g7QUREQztFQUNFLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSx1Q0FBQTtDQ0dIO0FEQ0s7RUFDRSxpQ0FBQTtDQ0NQO0FERks7RUFDRSxrQ0FBQTtDQ0lQO0FETEs7RUFDRSxrQ0FBQTtDQ09QO0FEUks7RUFDRSxrQ0FBQTtDQ1VQO0FEWEs7RUFDRSxrQ0FBQTtDQ2FQO0FEZEs7RUFDRSxtQ0FBQTtDQ2dCUDtBRGpCSztFQUNFLG1DQUFBO0NDbUJQO0FEcEJLO0VBQ0UsbUNBQUE7Q0NzQlA7QUR2Qks7RUFDRSxrQ0FBQTtDQ3lCUDtBRDFCSztFQUNFLG1DQUFBO0NDNEJQO0FEN0JLO0VBQ0UsbUNBQUE7Q0MrQlA7QURoQ0s7RUFDRSxtQ0FBQTtDQ2tDUDtBRG5DSztFQUNFLGtDQUFBO0NDcUNQO0FEdENLO0VBQ0UsbUNBQUE7Q0N3Q1A7QUR6Q0s7RUFDRSxtQ0FBQTtDQzJDUDtBRDVDSztFQUNFLG1DQUFBO0NDOENQO0FENUNDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDOENIO0FEN0NDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDK0NIO0FEOUNDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDZ0RIO0FEL0NDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDaURIO0FEaERDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDa0RIO0FEakRDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDbURIO0FEbERDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDb0RIO0FEbkRDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDcURIO0FEcERDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDc0RIO0FEckRDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDdURIO0FEdERDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0NDd0RIXCIsXCJmaWxlXCI6XCJtYWluLnN0eWxcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZ3JpZFdpZHRoID0gMTUwcHhcXG5ncmlkQm9yZGVyID0gMTBweFxcbnJvd0xlbiA9IDRcXG5jb2xMZW4gPSA0XFxudGlsZUZvbnRTaXplID0gNTZweFxcbmNvbnRhaW5lcldpZHRoID0gZ3JpZFdpZHRoICogY29sTGVuICsgZ3JpZEJvcmRlclxcblxcbkBpbXBvcnQgXFxcIm5vcm1hbGl6ZS5jc3NcXFwiXFxuQGltcG9ydCBcXFwiYmFzZS5zdHlsXFxcIlxcblxcbmJvZHlcXG4gIG1hcmdpbjogMTBweCAwXFxuXFxuLmdhbWUtY29udGFpbmVyXFxuICB3aWR0aDogY29udGFpbmVyV2lkdGhcXG4gIG1hcmdpbjogMCBhdXRvXFxuXFxuLmdhbWUtaGVhZGVyXFxuICBoZWlnaHQ6ODBweDtcXG4gIGNvbG9yOiB3aGl0ZVxcbiAgZm9udDoyNHB4LzMwcHggQXJpYWxcXG4gIGNsZWFyYm90aCgpXFxuXFxuICAuZ2FtZS10aXRsZVxcbiAgICBmbG9hdDogbGVmdFxcbiAgICBtYXJnaW46MFxcbiAgICBjb2xvcjogIzc3NmU2NVxcbiAgICBmb250OiBib2xkIDgwcHgvODBweCBBcmlhbFxcblxcbiAgLmdhbWUtc2NvcmUtYm94LCAuZ2FtZS1iZXN0LXNjb3JlLWJveFxcbiAgICBmbG9hdDpyaWdodFxcbiAgICB3aWR0aDogMTAwcHhcXG4gICAgaGVpZ2h0OiA2MHB4XFxuICAgIGxpc3Qtc3R5bGU6bm9uZVxcbiAgICBtYXJnaW46MTBweCAxcHhcXG4gICAgcGFkZGluZzowXFxuICAgIHRleHQtYWxpZ246Y2VudGVyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjlBREExXFxuXFxuICAubmV3LWdhbWVcXG4gICAgZmxvYXQ6cmlnaHRcXG4gICAgd2lkdGg6MTMwcHhcXG4gICAgaGVpZ2h0OjYwcHhcXG4gICAgbWFyZ2luOjEwcHggMXB4XFxuICAgIHRleHQtYWxpZ246Y2VudGVyXFxuICAgIGNvbG9yOiB3aGl0ZVxcbiAgICBib3JkZXItcmFkaXVzOiAzcHhcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmN2E2NlxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG5cXG5cXG4uZ2FtZS13cmFwcGVyXFxuICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gIC5vdmVybGF5XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICBsZWZ0OjBcXG4gICAgcmlnaHQ6MFxcbiAgICB0b3A6MFxcbiAgICBib3R0b206MFxcbiAgICB6LWluZGV4OiAyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KVxcbiAgICBkaXNwbGF5OiBub25lXFxuICAgIHRleHQtYWxpZ246Y2VudGVyXFxuICAgIC5nYW1lLXJlc3VsdFxcbiAgICAgIG1hcmdpbi10b3A6IDMwJVxcbiAgICAgIGZvbnQ6IGJvbGQgNjBweC82MHB4IEFyaWFsXFxuICAgICAgJi5sb3NlXFxuICAgICAgICBjb2xvcjojNzY2RTY2XFxuICAgICAgJi53aW5cXG4gICAgICAgIGNvbG9yOiNFN0MyNEZcXG4gICAgLmdhbWUtcmV0cnlcXG4gICAgICB3aWR0aDoyMzBweFxcbiAgICAgIGhlaWdodDo0OHB4XFxuICAgICAgZm9udDogMjRweC80OHB4IEFyaWFsXFxuICAgICAgY29sb3I6I0Y5RjZGMlxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4QzdBNjhcXG4gICAgICBjdXJzb3I6IHBvaW50ZXJcXG5cXG4gIHRhYmxlXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREMwQjRcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxcbiAgdHJcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gIHRkXFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxuICAgIHdpZHRoOiBncmlkV2lkdGhcXG4gICAgaGVpZ2h0OiBncmlkV2lkdGhcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcbiAgICBib3JkZXI6IGdyaWRCb3JkZXIgc29saWQgI0JCQURBMFxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcblxcbiAgLnRpbGVcXG4gICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgIGxlZnQ6IDBcXG4gICAgdG9wOiAwXFxuICAgIHotaW5kZXg6IDFcXG4gICAgd2lkdGg6IGdyaWRXaWR0aCAtIGdyaWRCb3JkZXJcXG4gICAgaGVpZ2h0OiBncmlkV2lkdGggLSBncmlkQm9yZGVyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0U0REFcXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcXG4gICAgbGluZS1oZWlnaHQ6IGdyaWRXaWR0aCAtIGdyaWRCb3JkZXJcXG4gICAgZm9udC1zaXplOiB0aWxlRm9udFNpemVcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0XFxuICAvLyB0aWxlIHBvc2l0aW9uOiB0aWxlLXtyb3dJbmRleH0te2NvbEluZGV4fVxcbiAgZm9yIHJpIGluIHJhbmdlKDAsIHJvd0xlbiAtIDEpXFxuICAgIGZvciBjaSBpbiByYW5nZSgwLCBjb2xMZW4gLSAxKVxcbiAgICAgIC50aWxlLXtyaX0te2NpfVxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoZ3JpZEJvcmRlciArIGNpICogZ3JpZFdpZHRoLCBncmlkQm9yZGVyICsgcmkgKiBncmlkV2lkdGgpXFxuICAvLyB0aWxlIGNvbG9yXFxuICAudGlsZS12YWx1ZS0yXFxuICAgIGNvbG9yOiM3NjZFNjZcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERTREQlxcbiAgLnRpbGUtdmFsdWUtNFxcbiAgICBjb2xvcjojNzY2RTY2XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkUwQ0JcXG4gIC50aWxlLXZhbHVlLThcXG4gICAgY29sb3I6I0Y5RjZGMlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlCMzgxXFxuICAudGlsZS12YWx1ZS0xNlxcbiAgICBjb2xvcjojRjlGNkYyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOTlDNkNcXG4gIC50aWxlLXZhbHVlLTMyXFxuICAgIGNvbG9yOiNGOUY2RjJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4ODI2N1xcbiAgLnRpbGUtdmFsdWUtNjRcXG4gICAgY29sb3I6I0Y5RjZGMlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY2NzQ3XFxuICAudGlsZS12YWx1ZS0xMjhcXG4gICAgY29sb3I6I0Y5RjZGMlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlDRjdGXFxuICAudGlsZS12YWx1ZS0yNTZcXG4gICAgY29sb3I6I0Y5RjZGMlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlDQzcyXFxuICAudGlsZS12YWx1ZS01MTJcXG4gICAgY29sb3I6I0Y5RjZGMlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURDODUwXFxuICAudGlsZS12YWx1ZS0xMDI0XFxuICAgIGNvbG9yOiAjRjlGNkYyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREM1M0ZcXG4gIC50aWxlLXZhbHVlLTIwNDhcXG4gICAgY29sb3I6ICNGOUY2RjJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEQzIyRVxcblxcblxcblxcblxcblxcblxcblwiLFwiQGltcG9ydCBcXFwibm9ybWFsaXplLmNzc1xcXCI7XFxuYm9keSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2MTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZ2FtZS1oZWFkZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250OiAyNHB4LzMwcHggQXJpYWw7XFxufVxcbi5nYW1lLWhlYWRlcjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5nYW1lLWhlYWRlciAuZ2FtZS10aXRsZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjNzc2ZTY1O1xcbiAgZm9udDogYm9sZCA4MHB4LzgwcHggQXJpYWw7XFxufVxcbi5nYW1lLWhlYWRlciAuZ2FtZS1zY29yZS1ib3gsXFxuLmdhbWUtaGVhZGVyIC5nYW1lLWJlc3Qtc2NvcmUtYm94IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDEwcHggMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWFkYTE7XFxufVxcbi5nYW1lLWhlYWRlciAubmV3LWdhbWUge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbWFyZ2luOiAxMHB4IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmN2E2NjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdhbWUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5nYW1lLXdyYXBwZXIgLm92ZXJsYXkgLmdhbWUtcmVzdWx0IHtcXG4gIG1hcmdpbi10b3A6IDMwJTtcXG4gIGZvbnQ6IGJvbGQgNjBweC82MHB4IEFyaWFsO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5vdmVybGF5IC5nYW1lLXJlc3VsdC5sb3NlIHtcXG4gIGNvbG9yOiAjNzY2ZTY2O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5vdmVybGF5IC5nYW1lLXJlc3VsdC53aW4ge1xcbiAgY29sb3I6ICNlN2MyNGY7XFxufVxcbi5nYW1lLXdyYXBwZXIgLm92ZXJsYXkgLmdhbWUtcmV0cnkge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgZm9udDogMjRweC80OHB4IEFyaWFsO1xcbiAgY29sb3I6ICNmOWY2ZjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM3YTY4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ2FtZS13cmFwcGVyIHRhYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGMwYjQ7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4uZ2FtZS13cmFwcGVyIHRyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5nYW1lLXdyYXBwZXIgdGQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNiYmFkYTA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2U0ZGE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTQwcHg7XFxuICBmb250LXNpemU6IDU2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTAtMCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAxMHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0wLTEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTYwcHgsIDEwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTAtMiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMTBweCwgMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMC0zIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ2MHB4LCAxMHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0xLTAge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMTYwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTEtMSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNjBweCwgMTYwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTEtMiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMTBweCwgMTYwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTEtMyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NjBweCwgMTYwcHgpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLTItMCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAzMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMi0xIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2MHB4LCAzMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMi0yIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMxMHB4LCAzMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMi0zIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ2MHB4LCAzMTBweCk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtMy0wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDQ2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0zLTEge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTYwcHgsIDQ2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0zLTIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzEwcHgsIDQ2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS0zLTMge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDYwcHgsIDQ2MHB4KTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS0yIHtcXG4gIGNvbG9yOiAjNzY2ZTY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTRkYjtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS00IHtcXG4gIGNvbG9yOiAjNzY2ZTY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTBjYjtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS04IHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YjM4MTtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS0xNiB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTljNmM7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtMzIge1xcbiAgY29sb3I6ICNmOWY2ZjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg4MjY3O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLXZhbHVlLTY0IHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2Njc0NztcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS0xMjgge1xcbiAgY29sb3I6ICNmOWY2ZjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTljZjdmO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50aWxlLXZhbHVlLTI1NiB7XFxuICBjb2xvcjogI2Y5ZjZmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWNjNzI7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRpbGUtdmFsdWUtNTEyIHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkYzg1MDtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS0xMDI0IHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkYzUzZjtcXG59XFxuLmdhbWUtd3JhcHBlciAudGlsZS12YWx1ZS0yMDQ4IHtcXG4gIGNvbG9yOiAjZjlmNmYyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkYzIyZTtcXG59XFxuXCIsXCJjbGVhcmJvdGgoKVxcbiAgJjphZnRlclxcbiAgICBjb250ZW50OiAnJ1xcbiAgICBkaXNwbGF5OiB0YWJsZVxcbiAgICBjbGVhcjpib3RoXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9