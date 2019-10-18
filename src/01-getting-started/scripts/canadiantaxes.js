
//let input = document.getElementById("input");

document.getElementById("click").addEventListener("click", onButtonClicked);

let userInput;

function onButtonClicked() {
  userInput = parseFloat(input.value);
  output.textContent = functions.taxSlabs(userInput);
};

const functions = {

  taxSlabs: (userInput) => {
    if (userInput <= 47630)
      return (userInput * (0.15));
    if (userInput > 47630 && userInput <= 95259)
      return functions.slabTwo();
    if (userInput > 95259 && userInput <= 147667)
      return functions.slabThree();
    if (userInput > 147667 && userInput <= 210371)
      return functions.slabFour();
    return functions.slabFive();
  },

  slabTwo: () => {
    let two = ((userInput - 47630) * 0.205) + 7145;
    return two;
  },
  slabThree: () => {
    let three = ((userInput - 95259) * 0.26) + 16908;
    return three;
  },
  slabFour: () => {
    let four = ((userInput - 147667) * 0.29) + 30535;
    return four;
  },
  slabFive: () => {
    let five = ((userInput - 210371) * 0.33) + 48719;
    return five;
  },
};

// export default functions;
