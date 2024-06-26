const passwordInput = document.querySelector(".password-box input"),
  copyIcon = document.querySelector(".password-box .copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
  sliderNumber = document.querySelector(".range-box .slider-number"),
  generateButton = document.querySelector(".generate-button");

//Characters of alphabet(a-z/A-Z), numbers(0-9) and Symbols($%&[]...)
let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";
