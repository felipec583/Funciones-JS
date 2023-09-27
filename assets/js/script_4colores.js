const firstBox = document.querySelector("#first-box");
const secondBox = document.querySelector("#second-box");
const thirdBox = document.querySelector("#third-box");
const fourthBox = document.querySelector("#fourth-box");

function createColoredBox(variable, bgColor) {
  variable.style.height = "200px";
  variable.style.width = "200px";
  variable.style.backgroundColor = bgColor;
}

const coloredBoxFunctionStack = () => {
  createColoredBox(firstBox, "blue");
  createColoredBox(secondBox, "red");
  createColoredBox(thirdBox, "green");
  createColoredBox(fourthBox, "yellow");
};

window.addEventListener("load", coloredBoxFunctionStack);

const coloredBox = {
  "first-box": "blue",
  "second-box": "red",
  "third-box": "green",
  "fourth-box": "yellow",
};

document.body.addEventListener("click", (e) => {
  if (e.target.style.backgroundColor === "black") {
    e.target.style.backgroundColor = coloredBox[e.target.getAttribute("id")];
  } else if (!(e.target === document.body)) {
    e.target.style.backgroundColor = "black";
  }
});
