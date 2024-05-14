let canvas = document.getElementById("scratch");
let context = canvas.getContext("2d");

const init = () => {
  let gradientColor = context.createLinearGradient(0, 0, 135, 135);
  gradientColor.addColorStop(0, "#c3a3f1");
  gradientColor.addColorStop(1, "#6414e9");
  context.fillStyle = gradientColor;
  context.fillRect(0, 0, 200, 200);
};
//initially mouse X and mouse Y positions are 0
let mouseX = 0;
let mouseY = 0;
let isDragged = false;
//Events for touch and mouse
let events = {
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },