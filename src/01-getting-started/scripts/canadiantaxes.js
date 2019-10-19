
const taxFunc = {

  taxSlabs: (userInput) => {
    if (userInput <= 47630)
      return (userInput * (0.15));
    if (userInput > 47630 && userInput <= 95259)
      return taxFunc.slabTwo(userInput);
    if (userInput > 95259 && userInput <= 147667)
      return taxFunc.slabThree(userInput);
    if (userInput > 147667 && userInput <= 210371)
      return taxFunc.slabFour(userInput);
    return taxFunc.slabFive(userInput);
  },

  slabTwo: (userInput) => {
    let two = ((userInput - 47630) * 0.205) + 7145;
    return two;
  },
  slabThree: (userInput) => {
    let three = ((userInput - 95259) * 0.26) + 16908;
    return three;
  },
  slabFour: (userInput) => {
    let four = ((userInput - 147667) * 0.29) + 30535;
    return four;
  },
  slabFive: (userInput) => {
    let five = ((userInput - 210371) * 0.33) + 48719;
    return five;
  },
};

export default taxFunc;
