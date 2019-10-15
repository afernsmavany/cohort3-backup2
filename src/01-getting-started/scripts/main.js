import functions from './functions.js';
import dis from './calculator.js';
import solve from './calculator.js';
import clear from './calculator.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

