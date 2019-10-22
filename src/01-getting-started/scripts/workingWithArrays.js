let numInput = 0;
let originArr = [];
let optionA = "";
let optionB = "";
let optionC = 0;

const arrayFunc = {

  adding: (numInput) => {
    if 
    (typeof numInput != 'number') {
      optionA = "Input is not a valid number";
    }
    else { originArr.push(numInput);
      optionA = "Number has been added to the array";
    }
    return optionA;
  },
  
  showing: (originArr) => {
      optionB += originArr.toString(numInput);
      return optionB;
  },

  totalling: (originArr) => {
    const reducer = (acc, cur) => acc + cur;
    optionC = originArr.reduce(reducer);
    return optionC; 
  },

  clearing: () => {
    originArr.length = 0;
    return originArr;
  }, 

    };

export default arrayFunc;

