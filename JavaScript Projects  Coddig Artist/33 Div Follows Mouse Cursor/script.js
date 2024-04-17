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
        //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;