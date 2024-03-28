let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.querySelector("#search-btn");
let result = document.getElementById("result");

// Function to get the data from API
let getMovie =() => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // If input field is empty
    if (movieName.length <= 0){
        result.innerHTML = `<h3 class="msg"> Please enter a Movie Name!</h3>`;
    }
    

}