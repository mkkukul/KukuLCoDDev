//Initial References
let draggableObjects;
let dropPoints;
const startButton = document.getElementById("start");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const dragContainer = document.querySelector(".draggable-objects");
const dropContainer = document.querySelector(".drop-points");
const data = [
  "belgium",
  "bhutan",
  "brazil",
  "china",
  "cuba",
  "ecuador",
  "georgia",
  "germany",
  "hong-kong",
  "india",
  "iran",
  "myanmar",
  "norway",
  "spain",
  "sri-lanka",
  "sweden",
  "switzerland",
  "united-states",
  "uruguay",
  "wales",
];
let deviceType = "";
let initialX = 0,
  initialY = 0;
let currentElement = "";
let moveElement = false;

//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create Touch Event (It would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

let count = 0;

//Random value from Array
const randomValueGenerator = () => {
    return data[Math.floor(Math.random() * data.length)];
};