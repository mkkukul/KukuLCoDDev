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

//Win Game Display
const stopGame = () => {
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
};

//Drag & Drop Functions
function dragStart(e) {
    if (isTouchDevice()) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
      //Start movement for touch
      moveElement = true;
      currentElement = e.target;
    } else {
      //For non touch devices set data to be transfered
      e.dataTransfer.setData("text", e.target.id);
    }
}

//Events fired on the drop target
function dragOver(e) {
    e.preventDefault();
}

//For touchscreen movement
const touchMove = (e) => {
    if (moveElement) {
      e.preventDefault();
      let newX = e.touches[0].clientX;
      let newY = e.touches[0].clientY;
      let currentSelectedElement = document.getElementById(e.target.id);
      currentSelectedElement.parentElement.style.top =
        currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
      currentSelectedElement.parentElement.style.left =
        currentSelectedElement.parentElement.offsetLeft -
        (initialX - newX) +
        "px";
      initialX = newX;
      initialY - newY;
    }
};


const drop = (e) => {
    e.preventDefault();
    //For touch screen
    if (isTouchDevice()) {
      moveElement = false;
      //Select country name div using the custom attribute
      const currentDrop = document.querySelector(`div[data-id='${e.target.id}']`);
      //Get boundaries of div
      const currentDropBound = currentDrop.getBoundingClientRect();
      //if the position of flag falls inside the bounds of the countru name
      if (
        initialX >= currentDropBound.left &&
        initialX <= currentDropBound.right &&
        initialY >= currentDropBound.top &&
        initialY <= currentDropBound.bottom
      ) {
        currentDrop.classList.add("dropped");
        //hide actual image
        currentElement.classList.add("hide");
        currentDrop.innerHTML = ``;
        //Insert new img element
        currentDrop.insertAdjacentHTML(
          "afterbegin",
          `<img src= "${currentElement.id}.png">`
        );
        count += 1;
      }
    } else {
        //Access data
        const draggedElementData = e.dataTransfer.getData("text");
        //Get custom attribute value
        const droppableElementData = e.target.getAttribute("data-id");
        if (draggedElementData === droppableElementData) {
          const draggedElement = document.getElementById(draggedElementData);
          //dropped class
          e.target.classList.add("dropped");
          //hide current img
          draggedElement.classList.add("hide");
          //draggable set to false
          draggedElement.setAttribute("draggable", "false");
          e.target.innerHTML = ``;
          //insert new img
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<img src="${draggedElementData}.png">`
          );
          count += 1;
        }
    }
    