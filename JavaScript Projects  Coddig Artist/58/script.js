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

    //Make a call to API
    fetch(finalURL)
    .then((resp) => resp.json())
    .then((info) => {
    console.log(info.data);
    //All gifs
    let gifsData = info.data;
    gifsData.forEach((gif) => {
        //Generate cards for every gif
        let container = document.createElement("div");
        container.classList.add("container");
        let iframe = document.createElement("img");
        console.log(gif);
        iframe.setAttribute("src", gif.images.downsized_medium.url);
        iframe.onload = () => {
          //if iframes has loaded correctly reduce the count when each gif loads
          gifCount--;
          if (gifCount == 0) {
            //If all gifs have loaded then hide loader and display gifs UI
            loader.style.display = "none";
            document.querySelector(".wrapper").style.display = "grid";
          }
        };
        container.append(iframe);
        //Copy link button
        let copyBtn = document.createElement("button");
        copyBtn.innerText = "Copy Link";
        copyBtn.onclick = () => {
