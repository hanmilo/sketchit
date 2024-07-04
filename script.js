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

function stringPixel(pixel_value) {
    pixel_value.toString();
    return pixel_value += "px";
};

function stringPercent(pixel_value) {
    pixel_value.toString();
    return pixel_value += "%";
};

function divGridRow_Resize(pixel_xy) {
    let heightCanvas = 500;
    let widthCanvas = 500;
    let heightGridRow = heightCanvas/pixel_xy;
    let widthGridRow = 100;
    
    divCanvas.style["height"] = stringPixel(heightCanvas);
    divCanvas.style["width"] = stringPixel(widthCanvas);
    divGridRow.style["height"] = stringPixel(heightGridRow);
    divGridRow.style["width"] = stringPercent(widthGridRow);
};

const queryBody = document.querySelector("body");
queryBody.classList.add("queryBody");

const divCanvas = document.createElement("div");
divCanvas.classList.add("divCanvas");

const divGridRow = document.createElement("div");
divGridRow.classList.add("divGridRow");

const divGridBox = document.createElement("div");
divGridBox.classList.add("divGridBox");
divGridBox.style["border"] = "1px dotted gray";
divGridBox.style["height"] = "100%";
divGridBox.style["width"] = "100%";

// const queryAllGridBox = document.querySelectorAll(".divGridRow");
// queryAllGridBox.forEach(divGridBox => {
//     divGridBox.addEventListener("mouseenter", () => {
//         divGridBox.style["backgroundColor"] = "lightseagreen";
//         console.log("mouseenter");
//     });
// });

// divGridBox.addEventListener("mouseover", () => {
//     divGridBox.style.backgroundColor = "lightskyblue";
//     // divGridBox.style["background-color"] = () => {
//     //     var letters = '0123456789ABCDEF';
//     //     var color = '#';
//     //     for (var i = 0; i < 6; i++) {
//     //         color += letters[Math.floor(Math.random() * 16)];
//     //     };
//     //     return color;
//     // };
// });

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

    divGridRow_Resize(selectGridPixel);
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