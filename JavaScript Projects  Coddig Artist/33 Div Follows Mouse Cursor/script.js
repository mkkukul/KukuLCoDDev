let myDiv = document.getElementById("my-div");
//Detect touch device
function isTouchDevice() {
    try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
    } catch (e) {
    return false;
  }
}

const move = (e) => {
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try {