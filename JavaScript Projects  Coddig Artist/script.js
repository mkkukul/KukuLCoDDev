let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
    //Geolocation APU is used to get geographical position of a user and is available inside the navigator object
    if (navigator.geolocation) {