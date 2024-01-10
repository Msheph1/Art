let gridSize = 16;
let curColor = "black";
createGrid(16, 16);
function createGrid(x, y) {
  gridSize = x;
  for (let i = 0; i < x * x; i++) {
    let temp = document.createElement("div");
    temp.classList.add("square");
    temp.addEventListener("click", function () {
      if (curColor !== "rainbow") {
        temp.style.cssText = "background-color:" + curColor + ";";
      } else {
        temp.style.cssText =
          "background-image: linear-gradient(to right,red,orange,yellow,green,blue,purple);";
      }
    });
    document.querySelector(".container").appendChild(temp);
  }
}

function removeGrid() {
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach(function (square) {
    square.remove();
  });
}

document.querySelector(".clear-btn").addEventListener("click", function () {
  removeGrid();
  createGrid(gridSize, gridSize);
});

document.querySelector(".size-btn").addEventListener("click", function () {
  let size = prompt("Enter new grid size: ");
  removeGrid();
  createGrid(size, size);
  let container = document.querySelector(".container");
  container.style.cssText =
    "height: " + size * 20 + "px; width: " + size * 20 + "px;";
});

let colors = document.querySelectorAll(".color");
colors.forEach(function (color) {
  color.addEventListener("click", function () {
    curColor = color.getAttribute("data-text");
  });
});
