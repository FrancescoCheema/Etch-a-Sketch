let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

const grayBtn = document.querySelector('.gray-btn');
const blackBtn = document.querySelector('.black-btn')
const whiteBtn = document.querySelector('.white-btn')
const resetBtn = document.querySelector('.reset-btn')
grayBtn.addEventListener('click', grayScale)
blackBtn.addEventListener('click', hover)
whiteBtn.addEventListener('click', colorWhite)

function grid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div')
        square.classList.add('gridItem')
        square.style.border = "1px solid white";

        board.appendChild(square)
    };
};

function hover() {
    let gridItem = document.querySelectorAll('div.gridItem')

    gridItem.forEach(square => {
        square.addEventListener('mouseenter', function() {
            square.style.background = "black";
        });
    });
};

function colorWhite() {
    let gridItem = document.querySelectorAll('div.gridItem')

    gridItem.forEach(square => {
        square.addEventListener('mouseenter', function() {
            square.style.background = "white";
        });
    });
};

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
