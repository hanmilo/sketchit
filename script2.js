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

let userPixelSelect = 64;
// let userColorSelect = "lightseagreen";

function appendBody() {
    // console.log("appendBody");
    queryBody.appendChild(buttonNewSketch);
    queryBody.appendChild(buttonResetSketch);
};

// function stringPixel(PixelValue) {
//     console.log("stringPixel");
//     PixelValue.toString();
//     PixelValue += "px";
// };

function stringPercent(OpacityValue) {
    let StoreValue = OpacityValue;
    StoreValue.toString();
    StoreValue += "%";
    return StoreValue;
};

function randomColor() {
    return Math.floor(Math.random() * 255 + 1);
}

function randomColorSelect() {
    let ColorSelect = "rgb(";

    for (i = 1; i <= 3; i++) {
        ColorSelect += randomColor() + " ";
    };
    ColorSelect += "/ 50%)";
    // console.log(ColorSelect);
    return ColorSelect;
}

function genCanvas(PixelSelect) {
    // console.log("genCanvas: Start");
    appendBody();

    for (let y = 1; y <= PixelSelect; y++) {
        const divGridRow = document.createElement("div");
        divGridRow.className = "divGridRow";
        for (let x = 1; x <= PixelSelect; x++) {
            const divGridBox = document.createElement("div");
            divGridBox.className = "divGridBox";
            let opacityPercent = 40;

            divGridBox.addEventListener("mouseover", () => {
                divGridBox.style["background-color"] = randomColorSelect();
                divGridBox.style["border"] = "1px hidden inherit";
                divGridBox.style["opacity"] = stringPercent(opacityPercent);
                console.log(opacityPercent);
                if (opacityPercent < 100) {
                    opacityPercent += 10;
                };
            });

            divGridRow.appendChild(divGridBox);
        }
        divCanvas.appendChild(divGridRow);
    }
    queryBody.appendChild(divCanvas);
    // console.log("genCanvas: End");
};

buttonNewSketch.addEventListener("click", () => {
    divCanvas.textContent = "";
    userPixelSelect = prompt("How many pixels per row & column? (Max: 100)", 64);
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