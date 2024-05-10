let filterA = document.getElementById("blur");
let filterB = document.getElementById("contrast");
let filterC = document.getElementById("hue-rotate");
let filterD = document.getElementById("sepia");

let noFlipBtn = document.getElementById("no-flip");
let flipXBtn = document.getElementById("flip-x");
let flipYBtn = document.getElementById("flip-y");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");

function resetFilter() {
  filterA.value = "0";
  filterB.value = "100";
  filterC.value = "0";
  filterD.value = "0";
  noFlipBtn.checked = true;
  addFilter();
  flipImage();
}

uploadButton.onchange = () => {
  resetFilter();
  document.querySelector(".image-container").style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};
