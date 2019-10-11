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
              if (typeof num == 'number') {return "true";
              }
            return "false";
            },
       
            isString: (str) => {
                if (typeof str == "string") 
                {return "string";}
            },
 
            isBoolean: (boo) => {
                  if (typeof true == 'boolean') {return "true";
                  }
                  return "false";
                  },
            
            isArray: (arr) => {
                  if (Array.isArray(arr)== true) {return true;
                  }
                  return false;
                  },

            isObject: (obj) => {
                  if (typeof obj == 'object') {return true;
                  }
                  return false;
                  },

            isUndefined: (undef) => {
                  if (typeof undef == 'undefined') {return true;
                  }
                  return false;
                  },

            ifElse: (a, b) => {
                  if (a > b) {return a;
                  }
                  return b;
                  },

            parameter: (a, b) => {
                  if (a > b) {return a;
                  }
                  return b;
                  },

            returns: (a, b) => {
                  if (a > b) {return a;
                  }
                  return b;
                  },

            arrayFront : (arr, num) => {
                  arr.unshift(num);
                  return arr;
                  },    
                     
            arrayEnd : (arr, num) => {
                  arr.push(num);
                  return arr;
                  },    

            arrayUpdate : (arr, index1, input1) => {
                  arr[index1] = input1;
                  return arr;
                  },
   
            forLoop : (arr) => {
                  for (let i = 0; i <= b; i++) {
                  let greeting = "Hello";
                  let greetingNum = greeting + [i];    
                  }
                  return greetingNum;
                  },

            // forLoop : (arr) => {
            //       let newArr = [];
            //       let b = arr.length;
            //       for (let i = 0; i <= b; i++) {
            //       newArr.push([i]);     
            //       }
            //       return newArr;
            //       },

            // forInLoop : (obj) => {
            //       for (let property1 in object1) {
            //       var pair = {key3: "value3"};
            //       obj = {...obj, ...pair};
            //       }
            //       return newArr;
            //       },

            // whileLoop : (arr) => {
            //       let newArr = [];
            //       while (i < 10) {
            //       // statement += "The number is " + i;
            //       // i++;
            //       newArr.push[i];         
            // }
            // },
      };

export default functions;