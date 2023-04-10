let sqdiv;
let container = document.getElementById('container');
let divGrid = document.querySelectorAll('.hover');

function createGrids() {
    for (let i = 0; i < 16; i++)
        for (let j = 0; j < 16; j++) {
            sqdiv = document.createElement('div');
            document.getElementById('container').appendChild(sqdiv);
            sqdiv.classList = "hover";
            sqdiv.style.backgroundColor = "white";
            sqdiv.style.border = "1px solid rgb(160,160,255)";
        }
    let divGrid = document.querySelectorAll('.hover');
    divGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = 'orchid';
        })
    })
}
window.addEventListener("load", createGrids);

function changeNrSq() {
    let nrSq = prompt("Insert the number of squares per side(1-50): ");
    if (isNaN(nrSq) || !(Number.isInteger(Number(nrSq)) && Number(nrSq) > 0) || Number(nrSq) === null || Number(nrSq) <= 0 || Number(nrSq) > 50 || Number(nrSq) == "")
        alert("Please enter a valid number.")
    else {
        let divGrid = document.querySelectorAll('.hover')
        divGrid.forEach((square) => {
            square.parentNode.removeChild(square);
        })
        for (let i = 0; i < nrSq; i++)
            for (let j = 0; j < nrSq; j++) {
                sqdiv = document.createElement('div');
                document.getElementById('container').appendChild(sqdiv);
                sqdiv.classList = "hover";
                sqdiv.style.backgroundColor = "white";
                sqdiv.style.border = "1px solid rgb(160,160,255)";
                container.style.gridTemplateColumns = `repeat(${nrSq}, 1fr)`;
                container.style.gridTemplateRows = `repeat(${nrSq}, 1fr)`;
            }
        divGrid = document.querySelectorAll('.hover')
        divGrid.forEach((grid) => {
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "orchid";
            })
        })
    }
}

function randomizeColor() {
    let divGrid = document.querySelectorAll('.hover');
    divGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        })
    })
}
const colorInput = document.querySelector('.choose-color');
let selectedColor;

colorInput.addEventListener("input", changeColor)
function changeColor() {
    selectedColor = this.value;
    let divGrid = document.querySelectorAll('.hover');
    let color = document.querySelector('.choose-color').value;
    console.log(color);
    divGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = color;
        })
    })
}

let clearButton = document.querySelector('.clear-sketch');
clearButton.innerHTML = '<img src="img/clear.png"/>';

function clearSketch() {
    let divGrid = document.querySelectorAll('.hover');
    divGrid.forEach((grid) => {
        grid.style.backgroundColor = "white";
    })
}

container.addEventListener('mousemove', () => {
    container.classList.add('custom-cursor');
});
