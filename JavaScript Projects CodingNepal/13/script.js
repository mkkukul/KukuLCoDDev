const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  // Generating a random color in hexadecimal format. Example: #5665E9
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};
const generateGradient = (isRandom) => {
  if (isRandom) {
    // If isRandom is true, update the colors inputs value with random color
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  // Creating a gradient string using the select menu value with color input values
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
};
