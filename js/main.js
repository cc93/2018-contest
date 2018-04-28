import '../css/main.css'
import Util from './util.js'

'use strict'

const TEMPLATES = {
    game: `<section class="game-container">
    <header class="game-header">
        <h2 class="game-title">2048</h2>
        <button class="new-game">NEW GAME</button>
        <ul class="game-best-score-box">
            <li>BEST</li>
            <li class="game-best-score">0</li>
        </ul>
        <ul class="game-score-box">
            <li>SCORE</li>
            <li class="game-score">0</li>
        </ul>
    </header>
    <div class="game-wrapper">
        <table class="grids-table">
            <tbody class="grids-container">
            </tbody>
        </table>
        <div class="tiles-container"></div>
        <div class="game-overlay">
            <p class="game-result lose">Game Over!</p>
            <button class="game-retry">Play again</button>
        </div>
    </div>
</section>`,

}

const SETTINGS = {
    rowLen: 4,
    colLen: 4,
    target: 2048,
}


class Grids {
    constructor(el) {
        this.container = el
        this.rowLen = SETTINGS.rowLen
        this.colLen = SETTINGS.colLen
        // grid content
        this.contents = []
        // init contents
        this.clearContents()
        this.render()
    }

    render() {
        // render HTML, iterate to generate tbody content
        let s = ''
        for (let ri = 0; ri < this.rowLen; ri++) {
            s += `<tr>`
            for (let ci = 0; ci < this.colLen; ci++) {
                s += `<td></td>`
            }
            s += `</tr>`
        }
        this.container.innerHTML = s
    }

    clearContents() {
        for (let ri = 0; ri < this.rowLen; ri++) {
            this.contents[ri] = []
            for (let ci = 0; ci < this.colLen; ci++) {
                this.contents[ri][ci] = null
            }
        }
    }

    forEachContent(rowCallback, colCallback) {
        for (let ri = 0; ri < this.rowLen; ri++) {
            if (typeof rowCallback === 'function') {
                // cb(item, index, array)
                rowCallback(this.contents[ri], ri, this.contents)
            }
            for (let ci = 0; ci < this.colLen; ci++) {
                if (typeof colCallback === 'function') {
                    // cb(item, index, array)
                    colCallback(this.contents[ri][ci], ci, this.contents)
                }
            }
        }

    }

    getEmptyGridsPos() {
        const arr = []
        for (let ri = 0; ri < this.rowLen; ri++) {
            for (let ci = 0; ci < this.colLen; ci++) {
                if (this.contents[ri][ci] === null) {
                    arr.push([ri, ci])
                }
            }
        }
        return arr
    }
}

class Tile {

    constructor(value = 2, rowIndex = 0, colIndex = 0) {
        if (Tile.tilesContainer === undefined) {
            throw new Error('Tile must be assigned a container in Tils.tilesContainer')
        }
        this.container = Tile.tilesContainer
        this.status = {
            merged: false,
            moved: false,
            new: true
        }
        let [outer, inner] = this.render(rowIndex, colIndex, value)
        this.element = outer
        this.innerEl = inner
        // init value
        this._value = value
        this._rowIndex = rowIndex
        this._colIndex = colIndex
    }

    set value(value) {
        let oldValue = this._value
        this._value = value
        this.innerEl.innerText = value
        this.innerEl.className = this.innerEl.className.replace(
            /tile-value-(\d+)/, `tile-value-${value}`)
        // only merge action can change value
        this.element.className += ' tile-merged'
        // flag isMerges
        this.status.merged = true
        // emit events
        let cbs = Tile.events['tileValueChanged']
        if (cbs !== undefined) {
            cbs.forEach((cb) => {
                cb({
                    type: 'tileValueChanged',
                    tile: this,
                    newValue: value,
                    oldValue: oldValue
                })
            })
        }
    }

    get value() {
        return this._value
    }

    set rowIndex(rowIndex) {
        this.element.className = this.element.className.replace(
            /tile-(\d+)-(\d+)/, `tile-${rowIndex}-$2`)
        this._rowIndex = rowIndex
        this.status.moved = true
    }

    get rowIndex() {
        return this._rowIndex
    }

    set colIndex(colIndex) {
        this.element.className = this.element.className.replace(
            /tile-(\d+)-(\d+)/, `tile-$1-${colIndex}`)
        this._colIndex = colIndex
        this.status.moved = true
    }

    get colIndex() {
        return this._colIndex
    }

    render(rowIndex, colIndex, value) {
        let div = document.createElement('div')
        div.className = `tile tile-${rowIndex}-${colIndex} tile-new`
        let inner = document.createElement('div')
        inner.className = `tile-inner tile-value-${value}`
        inner.innerText = value
        div.appendChild(inner)
        this.container.appendChild(div)
        this.status.new = true
        return [div, inner]
    }

    static addEventHandler(type, cb) {
        let event = Tile.events[type]
        if (Tile.events[type] === undefined) {
            Tile.events[type] = []
        }
        Tile.events[type].push(cb)
    }
    resetStatus() {
        this.status.moved = false
        this.status.merged = false
        this.status.new = false
        this.element.className = this.element.className.replace('tile-merged', '')
        this.element.className = this.element.className.replace('tile-new', '')
    }
}

Tile.events = {}

class Game {
    get score() {
        return this._score
    }

    set score(value) {
        this._score = value
        this.scoreEl.innerText = value
    }

    constructor(el) {
        // render template
        el.innerHTML = TEMPLATES.game
        this.container = el.querySelector('.game-container')
        this.grids = new Grids(el.querySelector('.grids-container'))
        Tile.tilesContainer = el.querySelector('.tiles-container')
        this.scoreEl = el.querySelector('.game-score')
        this._score = 0
        this.btnNewGame = el.querySelector('.new-game')
        this.gameResultEl = el.querySelector('.game-result')
        this.btnRetry = el.querySelector('.game-retry')
        this.overlay = el.querySelector('.game-overlay')

        // fix events context
        this.gameEvents = this.gameEvents.bind(this)
        document.addEventListener('click', this.gameEvents)
        // self defined events
        Tile.addEventHandler('tileValueChanged', this.gameEvents)
        this.newGame()
    }

    newGame() {
        this.grids.clearContents()
        Tile.tilesContainer.innerHTML = ''
        this.overlay.style.display = 'none'
        this.score = 0
        document.addEventListener('keydown', this.gameEvents)
        // create 2 initial tiles
        this.newRandomTiles(2)
    }

    gameEvents(ev) {
        ev = ev || event
        switch (ev.type) {
            case 'click': {
                if (ev.target === this.btnNewGame ||
                    ev.target === this.btnRetry) {
                    this.newGame()
                }
                break
            }
            case 'keydown': {
                const keyMap = {
                    '37': 'left',
                    '38': 'up',
                    '39': 'right',
                    '40': 'down'
                }
                let direction = keyMap[ev.keyCode + '']
                if (direction !== undefined) {
                    ev.preventDefault()
                    this.resetTilesStatus()
                    this.moveTiles(direction)
                    this.checkTilesStatus()
                }
                break
            }
            case 'tileValueChanged': {
                // check if win
                if (ev.newValue === SETTINGS.target) {
                    this.setGameResult('win')
                }
            }
        }
    }

    resetTilesStatus() {
        this.grids.forEachContent(null, function (tile) {
            if (tile === null) return
            tile.resetStatus()
        })
    }

    checkTilesStatus() {
        let someTileChanged = false
        this.grids.forEachContent(null, function (tile) {
            if (tile === null) return
            if (tile.status.moved || tile.status.merged) {
                someTileChanged = true
                // todo: break inner and outer loop
            }
        })
        // if none tile changed, no new tile
        if (someTileChanged) {
            this.newRandomTiles(1)
        } else {
            // check if game over
            let emptyPos = this.grids.getEmptyGridsPos()
            if (emptyPos.length === 0 && !this.hasValueEqualedAdjTiles()) {
                // alert('Game over!')
                this.setGameResult('lose')
            }
        }
    }

    setGameResult(result = 'lose') {
        this.gameResultEl.className = `game-result ${result}`
        this.gameResultEl.innerHTML = result === 'win' ? 'You win!' : 'Game over!'
        this.overlay.style.display = 'block'
        document.removeEventListener('keydown', this.gameEvents)
    }

    hasValueEqualedAdjTiles() {
        // check right, down of every tile
        for (let ri = 0, rlen = this.grids.contents.length; ri < rlen; ri++) {
            for (let ci = 0, clen = this.grids.contents[ri].length; ci < clen; ci++) {
                let tile = this.grids.contents[ri][ci]
                if (tile === null) continue
                if (ci < clen - 1) {
                    let rTile = this.grids.contents[ri][ci + 1]
                    if (rTile !== null && rTile.value === tile.value) {
                        return true
                    }
                }
                if (ri < rlen - 1) {
                    let dTile = this.grids.contents[ri + 1][ci]
                    if (dTile !== null && dTile.value === tile.value) {
                        return true
                    }
                }
            }
        }
        return false
    }

    moveTiles(direction) {
        // some game rules to be considered:
        // if none moved, then new tile will not generate
        switch (direction) {
            case 'left': {
                // colIndex--
                for (let ri = 0, len = this.grids.contents.length; ri < len; ri++) {
                    // every row allows one merged
                    let merged = false
                    let colLen = this.grids.contents[ri].length
                    for (let ci = 1; ci < colLen; ci++) {
                        let tile = this.grids.contents[ri][ci]
                        if (tile === null) continue
                        let cii = ci
                        while (--cii >= 0) {
                            let preTile = this.grids.contents[ri][cii]
                            if (preTile !== null) {
                                if (preTile.value === tile.value && merged === false) {
                                    preTile.value += tile.value
                                    this.score += preTile.value
                                    tile.element.parentNode.removeChild(tile.element)
                                    this.grids.contents[ri][ci] = null
                                    preTile.status.merged = true
                                    merged = true
                                    break
                                } else if (tile.colIndex !== cii + 1) {
                                    tile.colIndex = cii + 1
                                    this.grids.contents[ri][ci] = null
                                    this.grids.contents[ri][cii + 1] = tile
                                    tile.status.moved = true
                                    break
                                } else {
                                    break
                                }
                            } else if (cii === 0) {
                                tile.colIndex = cii
                                this.grids.contents[ri][ci] = null
                                this.grids.contents[ri][cii] = tile
                                tile.status.moved = true
                                break
                            }

                        }
                    }
                }
                break
            }
            case 'right': {
                // colIndex++
                for (let ri = 0, len = this.grids.contents.length; ri < len; ri++) {
                    let merged = false
                    let colLen = this.grids.contents[ri].length
                    for (let ci = colLen - 2; ci >= 0; ci--) {
                        let tile = this.grids.contents[ri][ci]
                        if (tile === null) continue
                        let cii = ci
                        while (++cii <= colLen - 1) {
                            let preTile = this.grids.contents[ri][cii]
                            if (preTile !== null) {
                                if (preTile.value === tile.value && merged === false) {
                                    preTile.value += tile.value
                                    this.score += preTile.value
                                    tile.element.parentNode.removeChild(tile.element)
                                    this.grids.contents[ri][ci] = null
                                    preTile.status.merged = true
                                    merged = true
                                    break
                                } else if (tile.colIndex !== cii - 1) {
                                    tile.colIndex = cii - 1
                                    this.grids.contents[ri][ci] = null
                                    this.grids.contents[ri][cii - 1] = tile
                                    tile.status.moved = true
                                    break
                                } else {
                                    break
                                }
                            } else if (cii === colLen - 1) {
                                tile.colIndex = cii
                                this.grids.contents[ri][ci] = null
                                this.grids.contents[ri][cii] = tile
                                tile.status.moved = true
                                break
                            }

                        }
                    }
                }
                break
            }
            case 'up': {
                // rowIndex--
                // every column allow one merged
                let merged = []
                for (let ci=0,len=this.grids.colLen; ci<len;ci++) {
                    merged[ci] = false
                }
                for (let ri = 1, len = this.grids.contents.length; ri < len; ri++) {
                    for (let ci = 0, len = this.grids.contents[ri].length; ci < len; ci++) {
                        let tile = this.grids.contents[ri][ci]
                        if (tile === null) continue
                        let tri = tile.rowIndex
                        while (--tri >= 0) {
                            let preTile = this.grids.contents[tri][ci]
                            if (preTile !== null) {
                                if (preTile.value === tile.value && merged[ci] === false) {
                                    // merged tile into the preTile with the same value
                                    // update preTile value
                                    preTile.value += tile.value
                                    this.score += preTile.value
                                    // remove this tile
                                    tile.element.parentNode.removeChild(tile.element)
                                    this.grids.contents[ri][ci] = null
                                    preTile.status.merged = true
                                    merged[ci] = true
                                    break
                                } else if (tile.rowIndex !== tri + 1) {
                                    tile.rowIndex = tri + 1
                                    this.grids.contents[ri][ci] = null
                                    this.grids.contents[tile.rowIndex][ci] = tile
                                    tile.status.moved = true
                                    break
                                } else {
                                    break
                                }
                            } else if (tri === 0) {
                                tile.rowIndex = tri
                                this.grids.contents[ri][ci] = null
                                this.grids.contents[tri][ci] = tile
                                tile.status.moved = true
                                break
                            }
                        }
                    }
                }
                break
            }
            case 'down': {
                // rowIndex++
                // every column allow one merged
                let merged = []
                for (let ci=0,len=this.grids.colLen; ci<len;ci++) {
                    merged[ci] = false
                }
                for (let ri = this.grids.contents.length - 2; ri >= 0; ri--) {
                    for (let ci = 0, len = this.grids.contents[ri].length; ci < len; ci++) {
                        let tile = this.grids.contents[ri][ci]
                        if (tile === null) continue
                        let tri = tile.rowIndex
                        while (++tri <= this.grids.contents.length - 1) {
                            let preTile = this.grids.contents[tri][ci]
                            if (preTile !== null) {
                                if (preTile.value === tile.value && merged[ci] === false) {
                                    // merged tile into the preTile with the same value
                                    // update preTile value
                                    preTile.value += tile.value
                                    this.score += preTile.value
                                    // remove this tile
                                    tile.element.parentNode.removeChild(tile.element)
                                    this.grids.contents[ri][ci] = null
                                    preTile.status.merged = true
                                    merged[ci] = true
                                    break
                                } else if (tile.rowIndex !== tri - 1) {
                                    tile.rowIndex = tri - 1
                                    this.grids.contents[ri][ci] = null
                                    this.grids.contents[tile.rowIndex][ci] = tile
                                    tile.status.moved = true
                                    break
                                } else {
                                    break
                                }
                            } else if (tri === this.grids.contents.length - 1) {
                                tile.rowIndex = tri
                                this.grids.contents[ri][ci] = null
                                this.grids.contents[tri][ci] = tile
                                tile.status.moved = true
                                break
                            }
                        }
                    }
                }
                break
            }
            default:
                break
        }
    }

    newRandomTiles(n = 1, randomValues = [2, 4]) {
        let newTiles = []
        for (let i = 0; i < n; i++) {
            let emptyGridsPos = this.grids.getEmptyGridsPos()
            if (emptyGridsPos.length === 0) {
                break
            }
            let [rowIndex, colIndex] = Util.getRandomItem(emptyGridsPos)
            let value = Util.getRandomItem(randomValues)
            let tile = new Tile(value, rowIndex, colIndex)
            this.grids.contents[rowIndex][colIndex] = tile
            newTiles.push(tile)
        }
        return newTiles
    }


}


/*
main
 */

const game = new Game(document.querySelector('#gameApp'))

