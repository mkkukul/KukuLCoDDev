let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = (parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat