//DOM Elements
const boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".image");
//Loop through each boxes element
boxes.forEach((box) => {
    //When a draggable element dragged over a box element
    box.addEventListener("dragover", (e) =>
        e.preventDefault(); //Prevent default behaviour
    box.classList.add("hovered");
  }); 