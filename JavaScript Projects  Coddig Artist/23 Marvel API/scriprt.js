let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");
let date = new Date();
console.log(date.getTime());
const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];
function displayWords(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  listContainer.innerHTML = "";
}