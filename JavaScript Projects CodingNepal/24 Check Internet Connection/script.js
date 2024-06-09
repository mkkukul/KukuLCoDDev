const popup = document.querySelector(".popup"),
  wifiIcon = document.querySelector(".icon i"),
  popupTitle = document.querySelector(".popup .title"),
  popupDesc = document.querySelector(".desc"),
  reconnectBtn = document.querySelector(".reconnect");

let isOnline = true,
  intervalId,
  timer = 10;
const checkConnection = async () => {
    try {
        // Try to fetch random data from the API. If the status code is between 
        // 200 and 300, the network connection is considered online 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
