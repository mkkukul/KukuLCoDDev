let submitBtn = document.getElementById("submit-btn");

let generateGif = () => {
    //display loader until gif load
    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    document.querySelector(".wrapper").style.display = "none";

    //Get search value (default => laugh)
    let q = document.getElementById("search-box").value;
    //We need 10 gifs to be displayed in result
    let gifCount = 10;
    //API URL =
    let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
    document.querySelector(".wrapper").innerHTML = "";