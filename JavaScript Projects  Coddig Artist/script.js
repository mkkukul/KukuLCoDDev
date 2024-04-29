const result = document.querySelector(".result input");
const copyBtn = document.getElementById("copy-btn");
const sliders = document.querySelectorAll(".wrapperinput[type='range']");

let generateColor = () => {
  let rColorValue = rColor.value;
  let gColorValue = gColor.value;
  let bColorValue = bColor.value;

  let finalColor = `rgb(${rColorValue}, ${gColorValue}, ${bColorValue})`;
  result.value = finalColor;
  document.body.style.backgroundColor = finalColor;
};
