const board = [
    ['r', 'h', 'b', 'q', 'k', 'b', 'h', 'r']
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
    ['r', 'h', 'b', 'q', 'k', 'b', 'h', 'r']
]

var state = false
var currentPiece
var currentCell

var cells = document.getElementsByTagName('td')
for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        getCell(this)
    }
}

function getCell(that) {
    if (!state) {
        state = true
        currentPiece = that.innerHTML
        currentCell = that
    }else {
        that.innerHTML = currentPiece
        currentCell.innerHTML = ''
        state = false
    }
}