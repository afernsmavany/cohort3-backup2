let numInput = 0;
let originArr = [];
let optionA = "";
let optionB = "";
let optionC = 0;

const arrayFunc = {

  adding: () => {
    if 
    (numInput === NaN) {
      optionA = "Input is not a valid number";
    }
    else 
    (numInput !== NaN) 
    { originArr.push(numInput);
      optionA = "Number has been added to the array";
    }
    return optionA;
  },
  
  showing: () => {
      optionB += originArr.toString(numInput);
      return optionB;
  },

  totalling: () => {
    optionC = originArr.reduce((acc, cur) => {
     acc + cur});
      return optionC; 
  },

  clearing: () => {
    originArr.length = 0;
    return originArr;
  }, 

    };

export default arrayFunc;

// const arrayFunc = {

//   adding: () => {
//     //if (Number.isNaN(numInput)) {
//      console.log(numInput);  
//       if (typeof numInput === 'string' || numInput instanceof String) {
//     optionA = "Input is not a valid number";
//     }
//     else if (typeof numInput === 'number' && isFinite(numInput))
//     { 
//       originArr.push(numInput);
//       optionA = "Number has been added to the array";  
//     }
//     //console.log
//     //return (originArr.toString());
//      return optionA;
//   },
// };