let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;
const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};
reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);
const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};
