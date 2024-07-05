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
let userColorSelect = "lightseagreen";

function appendBody() {
    console.log("appendBody");
    queryBody.appendChild(buttonNewSketch);
    queryBody.appendChild(buttonResetSketch);
};

function stringPixel(PixelValue) {
    console.log("stringPixel");
    PixelValue.toString();
    PixelValue += "px";
}

function genCanvas(PixelSelect, ColorSelect) {
    console.log("genCanvas: Start");
    appendBody();
    // sizingCanvas(PixelSelect);
    for (let y = 1; y <= PixelSelect; y++) {
        const divGridRow = document.createElement("div");
        divGridRow.className = "divGridRow";
        // divGridRow.style["height"] = stringPixel(500/PixelSelect);
        // divGridRow.style["width"] = "100%";
        
        for (let x = 1; x <= PixelSelect; x++) {
            const divGridBox = document.createComment("div");
            divGridBox.className = "divGridBox";
            // divGridBox.style["height"] = "100%";
            // divGridBox.style["width"] = "100%";
            divGridBox.addEventListener("mouseover", () => {
                divGridBox.style["background-color"] = ColorSelect;
                divGridBox.style["border-color"] = ColorSelect;
                divGridBox.style["border"] = "1px dotted";
            });
            divGridRow.appendChild(divGridBox);
        }
        divCanvas.appendChild(divGridRow);
    }
    queryBody.appendChild(divCanvas);
    console.log("genCanvas: End");
}

// function sizingCanvas(PixelSelect) {
//     console.log("sizingCanvas");
//     let heightCanvas = 500;
//     let widthCanvas = 500;
//     // let heightGridRow = heightCanvas/PixelSelect;
//     // let widthGridRow = "100%";

//     divCanvas.style["height"] = stringPixel(heightCanvas);
//     divCanvas.style["width"] = stringPixel(widthCanvas);
//     // divGridRow.style["height"] = stringPixel(heightGridRow);
//     // divGridRow.style["width"] = widthGridRow;
//     // divGridBox.style["height"] = "100%";
//     // divGridBox.style["width"] = "100%";
// };

buttonNewSketch.addEventListener("click", () => {
    userPixelSelect = prompt("How many pixels per row & column? (Max: 100)", 32);
    if (userPixelSelect > 100) {
        userPixelSelect = 100;
    };
    genCanvas(userPixelSelect, userColorSelect);
});

buttonResetSketch.addEventListener("click", () => {
    genCanvas(userPixelSelect, userColorSelect);
});

appendBody();