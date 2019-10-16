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
let first = obj.fname;
let last = obj.lname;
let email = first + "." + last + "@evolveu.ca";
return email;
}

};

