//Selecting the eye div
let eye_ref = document.querySelectorAll(".eye");

//mousemove for devices with mouse aand touchmove for touchcreen devices
let events = ["mousemove", "touchmove"];
//Check for touch screen
function isTouchDevice() {
    try {
      document.createEvent("TouchEvent");