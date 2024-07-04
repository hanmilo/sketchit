function gridGridGen(pixel_xy) {
    divCanvas.textContent = "";
    for (x = 1; x <= pixel_xy; x++) {
        divGridRow.textContent = "";
        for (y = 1; y <= pixel_xy; y++) {
            divGridRow.appendChild(divGridBox.cloneNode(true));
            // console.log("Done: divGridBox" + "-" + x + ", " + y);
        };
        divCanvas.appendChild(divGridRow.cloneNode(true));
        // console.log("Done: divGridRow");
    };
};

function buttonAppend() {
    queryBody.textContent = "";
    queryBody.appendChild(buttonNewSketch);
    queryBody.appendChild(buttonResetSketch);
    queryBody.appendChild(divCanvas);
};

const queryBody = document.querySelector("body");
queryBody.classList.add("queryBody");

const divCanvas = document.createElement("div");
divCanvas.classList.add("divCanvas");
divCanvas.style["height"] = "500px";
divCanvas.style["width"] = "500px";

const divGridRow = document.createElement("div");
divGridRow.classList.add("divGridRow");
divGridRow.style["height"] = "100%";
divGridRow.style["width"] = "100%";
// divGridRow.style["border"] = "1px dotted black";

const divGridBox = document.createElement("div");
divGridBox.classList.add("divGridBox");
divGridBox.style["border"] = "1px dotted gray";
divGridBox.style["height"] = "100%";
divGridBox.style["width"] = "100%";

let holdGridPixel = 0;

const buttonNewSketch = document.createElement("button");
buttonNewSketch.classList.add("buttonNewSketch");
buttonNewSketch.textContent = "New Sketch";
buttonNewSketch.addEventListener("click", () => {
    let selectGridPixel = prompt("How many pixels per row & column? (Max: 100)", 32);
    if (selectGridPixel > 100) {
        selectGridPixel = 100;
    }
    holdGridPixel = selectGridPixel;

    buttonAppend();
    gridGridGen(selectGridPixel);
});

queryBody.appendChild(buttonNewSketch);

const buttonResetSketch = document.createElement("button");
buttonResetSketch.classList.add("buttonResetSketch");
buttonResetSketch.textContent = "Reset Sketch";
buttonResetSketch.addEventListener("click", () => {
    
    buttonAppend();
    gridGridGen(holdGridPixel);
});