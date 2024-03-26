let images =["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake";)
    });
    setTimeout(function(die){
        die.classList.remove("shake");
    });
    let dieOneValue = mat.floor(math.random()*6);
}