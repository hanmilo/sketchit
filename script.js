function gridGridGen(pixel_xy) {
    for (x = 1; x <= pixel_xy; x++) {
        divGridRow.textContent = "";
        for (y = 1; y <= pixel_xy; y++) {
            // divGridBox.textContent = x + ", " + y;
            divGridRow.appendChild(divGridBox.cloneNode(true));
            // console.log("Done: divGridBox" + "-" + x + ", " + y);
        };
        queryBody.appendChild(divGridRow.cloneNode(true));
        // console.log("Done: divGridRow");
    };
};

function buttonAppend() {
    queryBody.textContent = "";
    queryBody.appendChild(buttonNewSketch);
    queryBody.appendChild(buttonResetSketch);
};

const queryBody = document.querySelector("body");
queryBody.classList.add("queryBody");

const divGridRow = document.createElement("div");
divGridRow.classList.add("divGridRow");
divGridRow.style["margin"] = "0px";
// divGridRow.style["border"] = "1px dotted black";

let pixel_density = 5;
pixel_density.toString();
pixel_density += "px";

const divGridBox = document.createElement("div");
divGridBox.classList.add("divGridBox");
divGridBox.style["border"] = "1px dotted gray";
divGridBox.style["padding"] = pixel_density;

let holdGridPixel = 0;

const buttonNewSketch = document.createElement("button");
buttonNewSketch.classList.add("buttonNewSketch");
buttonNewSketch.textContent = "New Sketch";
buttonNewSketch.addEventListener("click", () => {
    let selectGridPixel = prompt("How many pixels per row & column?", 32);
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