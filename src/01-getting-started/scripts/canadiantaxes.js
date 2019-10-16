// let userInput = 67987;

let textInput = document.getElementById("input");
let buttonCalculate = document.getElementById("click").addEventListener("click", onButtonClicked);
let printResult = document.getElementById("output");

function onButtonClicked() {
  let userInput = Number(input.value);
   printResult.textContent = taxSlabs();
};

const functions = {

  taxSlabs: (num) => {
    if (userInput <= 47630)
      return (userInput * ((15*100)/userInput));
    if (userInput > 47630 && userInput <= 95259)
      return slabTwo();
    if (userInput > 95259 && userInput <= 147667)
      return slabThree();
    if (userInput > 147667 && userInput <= 210371)
      return slabFour();
    return slabFive();
  },

  slabTwo: () => {
    let two = ((userInput  - 47630) * ((20.5*100)/userInput)) + 7145;
    return two;
  },

  slabThree: () => {
    let three = ((userInput  - 95259) * ((26*100)/userInput)) + 16908;
    return three;
  },

  slabFour: () => {
    let four = ((userInput  - 147667) * ((29*100)/userInput)) + 30535;
    return four;
  },

  slabFive: () => {
    let five = ((userInput  - 210371) * ((33*100)/userInput)) + 48719;
    return five;
  },

};

// export default functions;
// console.log(taxSlabs(userInput));