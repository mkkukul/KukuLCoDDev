//Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");


submit.addEventListener("click", () => {
    //Create a Date object from input value
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);

  //Check if the input dates are valid
  //If valid calculate the difference
  if (date1.getTime() && date2.getTime()) {