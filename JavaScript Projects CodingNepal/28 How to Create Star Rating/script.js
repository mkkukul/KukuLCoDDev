// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
    / Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {