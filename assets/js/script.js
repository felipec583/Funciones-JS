/* function pintar() {
  ";
}
 */

const pintar = (ele, color = "green") => {
  ele.style.backgroundColor = color;
};

const ele = document.getElementById("ele1");
pintar(ele);
ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});

alert("bobi");
