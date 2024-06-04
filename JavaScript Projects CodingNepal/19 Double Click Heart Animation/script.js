// Select the container and heart elements from the DOM
const container = document.querySelector(".container"),
  heart = document.querySelector(".heart");
// Add a double-click event listener to the container
container.addEventListener("dblclick", (e) => {
    // Calculate the x and y position of the double-click event
  let xValue = e.clientX - e.target.offsetLeft,