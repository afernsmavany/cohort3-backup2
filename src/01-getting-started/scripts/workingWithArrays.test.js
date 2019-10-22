import arrayFunc from './workingWithArrays'

test('Check if "adding" function works', () => {
  expect(arrayFunc.adding(34)).toEqual("Number has been added to the array");
  expect(arrayFunc.adding("abc")).toEqual("Input is not a valid number");
});

test('Check if "showing" function works', () => {
  expect(arrayFunc.showing([2,4,6])).toEqual("2,4,6");
});

test('Check if "totalling" function works', () => {
  expect(arrayFunc.totalling([34,25,54])).toEqual(113)
});

test('Check if "clearing" function works', () => {
  expect(arrayFunc.clearing([34])).toEqual([])
});

