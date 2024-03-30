let  result = document.getElementById("result");
let searchBtn = document.getElementById("#search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
searchBtn.addEventListener( "click",()=> {
    let userInp = document.getElementById("user-inp").value;
    if(userInp.length == 0){
        result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
    }else {
        fetch(url + userInp)
        .then((responce)=> responce.json())
        .then((data)=>{
            let myMeal  = data.meals[0];
            console.log(myMeal);
            console.log(myMeal.strMealThumb);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strMealThumb);
            

        }
    }
} );