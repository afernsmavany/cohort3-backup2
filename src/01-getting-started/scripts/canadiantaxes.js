
//let input = document.getElementById("input");

document.getElementById("click").addEventListener("click", onButtonClicked);

function onButtonClicked() {
  let userInput = parseFloat(input.value);
   output.textContent = functions.taxSlabs(userInput);
};

const functions = {

  taxSlabs: (userInput) => {
    if (userInput <= 47630)
      return (userInput * (0.15));
    if (userInput > 47630 && userInput <= 95259)
      return functions.slabTwo(userInput);
    if (userInput > 95259 && userInput <= 147667)
      return functions.slabThree(userInput);
    if (userInput > 147667 && userInput <= 210371)
      return functions.slabFour(userInput);
    return functions.slabFive(userInput);
  },

  slabTwo: (userInput) => {
    let two = ((userInput  - 47630) * ((20.5*100)/userInput)) + 7145;
    return two;
  },

  slabThree: (userInput) => {
    let three = ((userInput  - 95259) * ((26*100)/userInput)) + 16908;
    return three;
  },

  slabFour: (userInput) => {
    let four = ((userInput  - 147667) * ((29*100)/userInput)) + 30535;
    return four;
  },

  slabFive: (userInput) => {
    let five = ((userInput  - 210371) * ((33*100)/userInput)) + 48719;
    return five;
  },
};

// export default functions;
