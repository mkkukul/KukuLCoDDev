let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector(".container");
let error = document.getElementById("error");
let imageDisplay = document.getElementById("image-display");


const fileHandler = (file, name, type) => {
    if (type.split("/")[0] !== "image") {
      //File Type Error
      error.innerText = "Please upload an image file";
      return false;
    }
    error.innerText = "";
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {