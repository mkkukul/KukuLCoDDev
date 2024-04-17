let myDiv = document.getElementById("my-div");
//Detect touch device
function isTouchDevice() {
    try {
        //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");