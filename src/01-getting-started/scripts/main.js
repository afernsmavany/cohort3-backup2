import functions from './functions.js';
import calFunc from './calculator.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// -----Calculator: ----------------------------------------------

add.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final1 = calFunc.addNumbers(num1, num2); 
    resultFinal.innerText = final1});

subtract.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final2 = calFunc.subNumbers(num1, num2); 
    resultFinal.innerText = final2});

divide.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final3 = calFunc.divNumbers(num1, num2); 
    resultFinal.innerText = final3});

multiply.addEventListener("click", () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let final4 = calFunc.mulNumbers(num1, num2); 
    resultFinal.innerText = final4});
