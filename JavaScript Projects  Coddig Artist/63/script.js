let canvas = document.getElementById("scratch");
let context = canvas.getContext("2d");

const init = () => {
    let gradientColor = context.createLinearGradient(0, 0, 135, 135);
    gradientColor.addColorStop(0, "#c3a3f1");