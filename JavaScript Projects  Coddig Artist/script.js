var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 60;
result.textContent = 0 + "/" + limit;
myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit; 