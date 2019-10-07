console.log("Hello World from Basic.js");

const input = document.getElementById("input");
const button = document.getElementById("click");
const printResult = document.getElementById("textSize");

function onButtonClicked (){
  let userInput = Number(input.value);
  let sizeResult = size(userInput);
  printResult.textContent = sizeResult;
  console.log(userInput + 1);
}

function size(num){
  if (num < 10) {
    return "small";
} else if (num <= 19) {
    return "medium";
} else {
    return "large";
}
}

button.addEventListener("click", onButtonClicked)

