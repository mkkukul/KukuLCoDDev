// Get references to DOM elements
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");
// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  // add "dark" class to body and set modeSwitch text to "Light Mode"
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}
// add a click event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
    // toggle the "dark" class on the body element
    body.classList.toggle("dark");
  // check if the "dark" class is currently present on the body element
  const isDarkMode = body.classList.contains("dark");