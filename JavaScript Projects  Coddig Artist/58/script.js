let submitBtn = document.getElementById("submit-btn");

let generateGif = () => {
    //display loader until gif load
    let loader = document.querySelector(".loader");
    loader.style.display = "block";