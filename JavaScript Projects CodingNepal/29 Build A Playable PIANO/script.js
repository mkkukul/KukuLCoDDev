const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio(`tunes/a.wav`); // by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio
  const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
  clickedKey.classList.add("active"); // adding active class to the clicked key element
  setTimeout(() => {
    // removing active class after 150 ms from the clicked key element
    clickedKey.classList.remove("active");
  }, 150);
};
