let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
//API URL
let url = " https://meme-api.herokuapp.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function To Get Random Meme
let getMeme = () => {
    //Choose a random subreddit from the subreddits array
    let randomSubreddit =