let draggableElem = document.getElementById("draggable-elem"); // Sürüklenebilir öğeyi seç

let initialX = 0,
  initialY = 0; // Başlangıç X ve Y değerleri
let moveElement = false; // Öğenin hareket durumu

//Events Object (Olaylar Nesnesi)
let events = {
  mouse: {
    down: "mousedown", // Fare basıldığında
    move: "mousemove", // Fare hareket ettirildiğinde
    up: "mouseup", // Fare bırakıldığında
  },
  touch: {
    down: "touchstart", // Dokunma başladığında
    move: "touchmove", // Dokunma sürüklendiğinde
    up: "touchend", // Dokunma sonlandığında
  },
};

let deviceType = ""; // Cihaz türü

//Dokunmatik cihazı tespit et
const isTouchDevice = () => {
  try {
    // TouchEvent oluşturmayı deneriz (masaüstü için başarısız olur ve hata fırlatır)
    document.createEvent("TouchEvent");
    deviceType = "touch"; // Cihaz türünü dokunmatik olarak ayarla
    return true;
  } catch (e) {
    deviceType = "mouse"; // Cihaz türünü fare olarak ayarla
    return false;
  }
};

isTouchDevice(); // Dokunmatik cihazı tespit et

//Başlangıç (fare basıldığında / dokunma başladığında)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault(); // Varsayılan davranışı engelle
  // Başlangıç x ve y noktaları
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  // Hareketi başlat
  moveElement = true;
});

//Hareket
draggableElem.addEventListener(events[deviceType].move, (e) => {
  // hareket == true ise yeni X ve Y'ye göre üst ve sol değerlerini ayarla ve herhangi bir ofseti kaldır
  if (moveElement) {
    e.preventDefault(); // Varsayılan davranışı engelle
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

//fare bırakıldığında / dokunma sonlandığında
draggableElem.addEventListener(events[deviceType].up, (stopMovement = (e) => {
  moveElement = false; // Hareketi durdur
}));

draggableElem.addEventListener("mouseleave", stopMovement); // Öğe fareyi terk ettiğinde hareketi durdur
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false; // Hareketi durdur
});
