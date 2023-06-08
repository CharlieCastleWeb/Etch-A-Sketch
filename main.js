
let color, sideSquares;
const BOARD_WIDTH = 600;

const colorPicker = document.querySelector("#color");
const sideSquaresSlider = document.querySelector("#side-squares");
const display = document.querySelector("#display");

colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
    console.log(color);
});

sideSquaresSlider.addEventListener("change", () => {
    sideSquares = sideSquaresSlider.value;
    console.log(sideSquares);
    displaySquares(sideSquares);
});

const displaySquares = (squaresNum) => {
        
        for ( let i=0; i < squaresNum*squaresNum; i++) {
            let div = document.createElement("div");
            div.style.width = `${100/squaresNum}%`
            div.id = `${i}`;
            div.classList.add("square");
            display.append(div);
        }
}

const setSquareDimensions = (width, squaresNum) => {
    return width/squaresNum;
}


displaySquares(16);

