const queryBody = document.querySelector("body");
queryBody.classList.add("queryBody");

const divGridRow = document.createElement("div");
divGridRow.classList.add("divGridRow");
divGridRow.style["margin"] = "0px";
// divGridRow.style["border"] = "1px dotted black";

const divGridBox = document.createElement("div");
divGridBox.classList.add("divGridBox");
divGridBox.style["border"] = "2px solid black";
divGridBox.style["padding"] = "10px";

// console.log("Done: Initializing");

for (x = 1; x <= 16; x++) {
    divGridRow.textContent = "";
    for (y = 1; y <= 16; y++) {
        // divGridBox.textContent = x + ", " + y;
        divGridRow.appendChild(divGridBox.cloneNode(true));
        // console.log("Done: divGridBox" + "-" + x + ", " + y);
    };
    queryBody.appendChild(divGridRow.cloneNode(true));
    // console.log("Done: divGridRow");
};

divGridBox.addEventListener("click", () => {
    if (divGridBox.style["backgroundColor"] == "") {
        divGridBox.style["backgroundColor"] = "lightseagreen";
    }
    else {
        divGridBox.style["backgroundColor"] = "";
    };
    console.log("Clicked")
});