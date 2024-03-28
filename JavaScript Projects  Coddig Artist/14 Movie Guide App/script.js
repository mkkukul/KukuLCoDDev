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
    // If input field is NOT empty
    else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) =>{
            //If movie exists in database
            if (data.Responce == "True"){
                result.innerHTML =`
                <div class="info">
                <img src=${data.Poster} class="poster>`
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg">
                        <h4>${data}</h4>    

                    </div>
            }
        }
    }

}