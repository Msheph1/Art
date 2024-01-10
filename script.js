let size = 16;
let curColor = "black";
createGrid(16);
function createGrid(x) {
  size = x;
  for (let i = 0; i < x * x; i++) {
    let temp = document.createElement("div");
    temp.classList.add("square");
    temp.style.cssText =
      "height: " + 420 / size + "px; width: " + 420 / size + "px;";
    temp.addEventListener("click", function () {
      console.log(size);
      if (curColor !== "rainbow") {
        console.log("working");
        temp.style.cssText =
          "background-color:" +
          curColor +
          "; height: " +
          420 / size +
          "px; width: " +
          420 / size +
          "px;";
      } else {
        temp.style.cssText =
          "background-image: linear-gradient(to right,red,orange,yellow,green,blue,purple); height: " +
          420 / size +
          "px; width: " +
          420 / size +
          "px;";
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
  createGrid(size);
});

document.querySelector(".size-btn").addEventListener("click", function () {
  let size = prompt("Enter new grid size: ");

  removeGrid();
  createGrid(size);
});

let colors = document.querySelectorAll(".color");
colors.forEach(function (color) {
  color.addEventListener("click", function () {
    curColor = color.getAttribute("data-text");
  });
});
