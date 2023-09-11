const firstBox = document.querySelector("#first-box");
const secondBox = document.querySelector("#second-box");
const thirdBox = document.querySelector("#third-box");
const fourthBox = document.querySelector("#fourth-box");

function createColoredBox(variable, bgColor) {
  variable.style.height = "200px";
  variable.style.width = "200px";
  variable.style.backgroundColor = bgColor;
}

createColoredBox(firstBox, "blue");
createColoredBox(secondBox, "red");
createColoredBox(thirdBox, "green");
createColoredBox(fourthBox, "yellow");

document.body.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "black";
});

/* const addBlackBgColor = (eventHandler) => {
  eventHandler.addEventListener("click", () => {
    eventHandler.style.backgroundColor = "black";
  });
};

addBlackBgColor(firstBox);
addBlackBgColor(secondBox);
addBlackBgColor(thirdBox);
addBlackBgColor(fourthBox);
 */
