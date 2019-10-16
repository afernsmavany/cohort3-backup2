/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
const functions = {
  assertEquals: (num1, num2) => {
    if (num1 == num2) {
      return true;
    }
    else {
      console.log("the two values are not the same:");
      console.log(`p1--> ${num1}`);
      console.log(`p2--> ${num2}`);
      return false;
    }
  },

  // 2nd Daily (9th Oct, 2019):

  makeEmailArr: (arr) => {
    let first = arr[0].toLowerCase();
    let last = arr[1].toLowerCase();
    let email = first + "." + last + "@evolveu.ca";
    return email;
  },

  // 3rd Daily (11th Oct, 2019):
  makeEmailObj: (obj) => {
    return (obj.fname.toLowerCase() +
      "." + obj.lname.toLowerCase() +
      "@evolveu.ca"
    );
  },


// 4th Daily: Prepare for Array Work - October 15, 2019
// Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:
// **Basics
//     for
//     while
//     do while
// **Next Level
//     for in
//     for of

forLoop: (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
        newArray.push(i);
  }
  return newArray;
},

whileLoop: (arr) => {
  let arrayTwo = [];
  let i = 7;
  while (i < 10) {
        arrayTwo.push(i);
        i++;
  }
  return arrayTwo;
},

doWhileLoop: (arr) => {
  let arrayOne = [];
  let i = 5;
  do {
        arrayOne.push(i);
        i++;
  } while (i < 5);
  return arrayOne;
},

forInLoop: (obj) => {
  let users = { fName: "Jerry", lName: "Seinfeld", age: 12 };
  let result = "";
  let i;
  for (i in users) {
        result += users[i] + " ";
  };
  return result;
},

forOfLoop: (arr) => {
    let resultArr = [];
    for (const i of arr) {
    resultArr.push(i);
  }
   return resultArr;
  },
  
};
export default functions;

