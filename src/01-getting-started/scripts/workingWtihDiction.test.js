import objFunc from './workingWithDiction'

test('Check if "adding" function works', () => {
  expect(objFunc("QC")).toEqual("Quebec");
  expect(objFunc("ab")).toEqual("Alberta");
  expect(objFunc("tr")).toEqual("Not a valid province code");
});