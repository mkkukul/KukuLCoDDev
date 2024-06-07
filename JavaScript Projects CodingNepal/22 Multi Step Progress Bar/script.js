//DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");

  let currentStep = 1;
// function that updates the current step and updates the DOM
const updateSteps = (e) => {