function pintar(variable, color = "green") {
  variable.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");

ele.addEventListener("click", (e) => {
  pintar(e.target, "yellow");
});
