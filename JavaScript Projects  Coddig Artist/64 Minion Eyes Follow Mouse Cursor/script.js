//Selecting the eye div
let eye_ref = document.querySelectorAll(".eye");

//mousemove for devices with mouse aand touchmove for touchcreen devices
let events = ["mousemove", "touchmove"];
//Check for touch screen
function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
//Same function for both events
events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
        eye_ref.forEach((eye) => {
            /* getBoundingClientRect() method returns the position relative to the viewport */
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

