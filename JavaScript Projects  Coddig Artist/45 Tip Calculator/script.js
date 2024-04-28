const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
  slider.addEventListener("input", calculateTip);
});
const billInput = document.getElementById("bill");
