let draggableElem = document.getElementById( "draggable-elem" );
let initialX = 0,
    initialY =0;
let moveElement = false;

let events = {
    mouse:{
        down: "mousedown",
        up:   "mouseup",
        move: "mousemove"
    },
    touch: {
        down: "touchstart",
        up:   "touchend",
        move: "touchmove"
    },
};
let deviceType = "";