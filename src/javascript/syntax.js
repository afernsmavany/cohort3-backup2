/*define attributes / variables
      number
      string
      boolean
      array
      dictionary / objects
      undefined
sample if / else
functions
      parameters
      returns
arrays
      add to the front
      add to the end
      update values
loops 
      for
      for/in
      while
      do while
      forEach (with array and function)
Objects / Dictionaries
      declare object
      lookup key to retrieve value*/

const functions = {
      number: (num) => {
            if (typeof num == 'number') {
                  return "true";
            }
            return "false";
      },

      isString: (str) => {
            if (typeof str == "string") { return "string"; }
      },

      isBoolean: (boo) => {
            if (typeof true == 'boolean') {
                  return "true";
            }
            return "false";
      },

      isArray: (arr) => {
            if (Array.isArray(arr) == true) {
                  return true;
            }
            return false;
      },

      isObject: (obj) => {
            if (typeof obj == 'object') {
                  return true;
            }
            return false;
      },

      isUndefined: (undef) => {
            if (typeof undef == 'undefined') {
                  return true;
            }
            return false;
      },

      ifElse: (a, b) => {
            if (a > b) {
                  return a;
            }
            return b;
      },

      parameter: (a, b) => {
            if (a > b) {
                  return a;
            }
            return b;
      },

      returns: (a, b) => {
            if (a > b) {
                  return a;
            }
            return b;
      },

      arrayFront: (arr, num) => {
            arr.unshift(num);
            return arr;
      },

      arrayEnd: (arr, num) => {
            arr.push(num);
            return arr;
      },

      arrayUpdate: (arr, index1, input1) => {
            arr[index1] = input1;
            return arr;
      },

      forLoop: (arr) => {
            let newArray = [];
            for (let i = 0; i < arr.length; i++) {
                  newArray.push(i);
            }
            return newArray;
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

      forEachLoop: (arr) => {
            let arrArray = [];
            arr.forEach(function (item) {
                  arrArray.push(item);
            });
            return arrArray;
      },

      declareObject: (obj) => {
            let result = obj.name + " is " + obj.age;
            return result;
      },

      lookupKey: (key) => {
            const person = { name: "Suzie", age: 17 };
            let result = person[key];
            return result;
      }

};

export default functions;