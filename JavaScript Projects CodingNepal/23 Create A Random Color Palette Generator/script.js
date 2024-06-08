const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;
const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    
