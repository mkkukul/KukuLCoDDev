const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");
// iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
      // This code gets the current input element and stores it in the currentInput variable
      // This code gets the next sibling element of the current input element and stores it in the nextInput variable
      // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
      const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;
      // if the value has more than one character then clear it
    if (currentInput.value.length > 1) {
        currentInput.value = "";
        return;
      }