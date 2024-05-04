let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
  //Geolocation APU is used to get geographical position of a user and is available inside the navigator object
  if (navigator.geolocation) {
    //returns position(latitude and longitude) or error
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    //For old browser i.e IE
    locationDiv.innerText = "The browser does not support geolocation";
  }
});
//Error Checks
const checkError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
            locationDiv.innerText = "Please allow access to location";
            break;
            locationDiv.innerText = "Please allow access to location";
            break;