
let color = "#000000", 
    sideSquares = "16", 
    mouseIsDown = false;


const colorPicker = document.querySelector("#color");
const sideSquaresSlider = document.querySelector("#side-squares");
const squareNumDisplay = document.querySelector("#square-num-display");
const display = document.querySelector("#display");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");

document.addEventListener("mousedown", () => {
    
    mouseIsDown = true;
    console.log("mouse is down");
});
document.addEventListener("mouseup", () => {
    mouseIsDown = false;
    console.log("mouse is up");
});

colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
    console.log(color);
});

sideSquaresSlider.addEventListener("input", () => {
    sideSquares = sideSquaresSlider.value;
    squareNumDisplay.innerHTML = `${sideSquares} x ${sideSquares}`; 
    
});

startBtn.addEventListener("click", () => {
    displaySquares(sideSquares);
    colorPicker.disabled = true;
    sideSquaresSlider.disabled = true;
});

restartBtn.addEventListener("click", () => {
    display.innerHTML = "";
    colorPicker.disabled = false;
    sideSquaresSlider.disabled = false;
});

const displaySquares = (squaresNum) => {
        display.innerHTML = "";
        for ( let i=0; i < squaresNum*squaresNum; i++) {
            let div = document.createElement("div");
            div.style.width = `${100/squaresNum}%`
            div.id = `${i}`;
            div.classList.add("square");
            div.addEventListener("mousedown", () => {
                div.style.backgroundColor = color;
            });
            div.addEventListener("mouseenter", () => {
                if (mouseIsDown) div.style.backgroundColor = color;
            });
            display.append(div);
        }
}




//displaySquares(9);

