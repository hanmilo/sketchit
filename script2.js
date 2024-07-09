const queryBody = document.querySelector("body");
queryBody.className = "queryBody";

const divCanvas = document.createElement("div");
divCanvas.className = "divCanvas";

const buttonNewSketch = document.createElement("button");
buttonNewSketch.className = "buttonNewSketch";
buttonNewSketch.textContent = "New Sketch";

const buttonResetSketch = document.createElement("button");
buttonResetSketch.className = "buttonResetSketch";
buttonResetSketch.textContent = "Reset Sketch";

let userPixelSelect = 32;
// let userColorSelect = "rgb(";

function appendBody() {
    console.log("appendBody");
    queryBody.appendChild(buttonNewSketch);
    queryBody.appendChild(buttonResetSketch);
};

function stringPixel(PixelValue) {
    console.log("stringPixel");
    PixelValue.toString();
    PixelValue += "px";
};

function randomColor() {
    return Math.floor(Math.random() * 255 + 1);
}

function randomColorSelect() {
    let ColorSelect = "rgb(";

    for (i = 1; i <= 3; i++) {
        ColorSelect += randomColor() + " ";
    };
    ColorSelect += "/ 90%)";
    console.log(ColorSelect);
    return ColorSelect;
}

function genCanvas(PixelSelect) {
    console.log("genCanvas: Start");
    appendBody();

    for (let y = 1; y <= PixelSelect; y++) {
        const divGridRow = document.createElement("div");
        divGridRow.className = "divGridRow";
        for (let x = 1; x <= PixelSelect; x++) {
            const divGridBox = document.createElement("div");
            divGridBox.className = "divGridBox";

            divGridBox.addEventListener("mouseover", () => {
                divGridBox.style["background-color"] = randomColorSelect();
                divGridBox.style["border"] = "1px hidden inherit";
            });
            divGridRow.appendChild(divGridBox);
        }
        divCanvas.appendChild(divGridRow);
    }
    queryBody.appendChild(divCanvas);
    console.log("genCanvas: End");
};

buttonNewSketch.addEventListener("click", () => {
    divCanvas.textContent = "";
    userPixelSelect = prompt("How many pixels per row & column? (Max: 100)", 32);
    if ((userPixelSelect > 100) || (isNaN(userPixelSelect))) {
        userPixelSelect = 100;
    };
    genCanvas(userPixelSelect);
});

buttonResetSketch.addEventListener("click", () => {
    divCanvas.textContent = "";
    genCanvas(userPixelSelect);
});

appendBody();