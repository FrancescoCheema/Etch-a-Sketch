let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

const gray = document.querySelector('.gray-btn');
const black = document.querySelector('.black-btn')
gray.addEventListener('click', grayScale)
black.addEventListener('click', hover)

function grid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div')
        square.classList.add('gridItem')
        square.style.border = "1px solid white";

        board.appendChild(square)
    }
}

function hover() {
    let gridItem = document.querySelectorAll('div.gridItem')

    gridItem.forEach(square => {
        square.addEventListener('mouseenter', function() {
            square.style.background = "black";
        })
    })
}

function grayScale() {
    let gridItem = document.querySelectorAll('div.gridItem')

    gridItem.forEach(square => {
        square.addEventListener('mouseenter', function() {
            square.style.background = "gray";
        });
    })
};
grid()
hover()
