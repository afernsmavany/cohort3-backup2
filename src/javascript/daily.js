
// 5th Daily: More Array Work - (October 16-17) 
// Continue from yesterday. Read the article:
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d 
// Read the documentation on the following and create examples of each one:
//   slice
//   splice
//   forEach
//   map
//   reduce
//   filter
//   sort

const functions = {

  sliceFunc: () => {
    let cities = ['Paris', 'Calgary', 'Mumbai', 'Philadelphia'];
    let slicedCities = cities.slice(1);
    return slicedCities;
  },

  spliceFunc: () => {
    let cars = ['Ferrari', 'Bugatti', 'Maserati'];
    cars.splice(1, 0, 'Lotus');
    return cars;
  },

  forEachLoop: (arr) => {
    let arrArray = [];
    arr.forEach(function (item) {
      arrArray.push(item);
    });
    return arrArray;
  },

  mapFunc: () => {
    const array = [1, 2, 3];
    const mapArr = array.map(number => {
      return number * 8;
    })
    return mapArr;
  },

  reduceFunc: () => {
    const array2 = [1, 2, 3,];
    const reduceArr = array2.reduce((acc, curr) =>
      acc + curr);
    return reduceArr;
  },

  filterFunc: () => {
    const array1 = [18, 25, 35, 48, 60];
    const filterArr = array1.filter(number =>
      (number > 15 && number % 3 === 0)
    );
    return filterArr;
  },

  sortFunc: () => {
    const array3 = [8, 9, 10,];
    const sortedArr = array3.sort();
    return sortedArr;
  },

  /*	1st Daily - AssertEquals (October 7, 2019)
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



