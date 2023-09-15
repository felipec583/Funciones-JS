// Función para crear divs
function createDivBox(bgColor) {
  const newDiv = document.createElement("div");
  const body = document.querySelector("body");
  body.append(newDiv);
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = bgColor;
  newDiv.style.border = "black solid";
}

function colorBox(variable, bgColor = "white") {
  variable.style.height = "200px";
  variable.style.width = "200px";
  variable.style.backgroundColor = bgColor;
  variable.style.border = "black solid";
}
let color;
const keyDiv = document.querySelector("#key");
colorBox(keyDiv);

document.addEventListener("keydown", (e) => {
  if (e.key === "a") color = "pink";
  else if (e.key === "s") color = "orange";
  else if (e.key === "d") color = "cyan";
  else if (e.key === "q") createDivBox("purple");
  else if (e.key === "w") createDivBox("grey");
  else if (e.key === "e") createDivBox("#6F4E37");
  keyDiv.style.backgroundColor = color;
});
