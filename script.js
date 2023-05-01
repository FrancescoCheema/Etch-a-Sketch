let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

const grayscaleBtn = document.querySelector('.grayscale-btn');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const resetBtn = document.querySelector('.reset-btn');
const slider = document.querySelector(".slider");
const gridSize = document.querySelector(".board-size");
grayscaleBtn.addEventListener('click', grayScale);
blackBtn.addEventListener('click', hover);
rainbowBtn.addEventListener('click', rainbow);
resetBtn.addEventListener('click', reset);
slider.addEventListener('click', resetSize )

function grid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div')
        square.classList.add('gridItem')
        square.style.border = "1px solid white";

        board.appendChild(square)
    };
};

function resetSize() {
    let newSize = document.querySelector('.slider').value;

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    for (let i = 0; i < newSize * newSize; i++) {
        let board = document.querySelector(".board");
        board.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`
        board.style.gridTemplateRows = `repeat(${newSize}, 1fr)`
        let square = document.createElement('div');
        square.classList.add('gridItem');
        square.style.border = "1px solid white";
        board.appendChild(square)
        gridSize.innerHTML = `${newSize} x ${newSize}`
    }
}

function hover() {
    let gridItem = document.querySelectorAll('div.gridItem')

    gridItem.forEach(square => {
        square.addEventListener('mouseenter', function() {
            square.style.background = "black";
        });
    });
}

function rainbow() {
    let gridItem = document.querySelectorAll('div.gridItem')
    gridItem.forEach(square => {
        square.addEventListener('mouseenter', function () {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.background = `rgba(${r},${g},${b})`
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

function reset() {
    let gridItem = document.querySelectorAll('div.gridItem')

    gridItem.forEach(square => {
        square.style.background = '';
    });
}
grid()
hover()