import objFunc from './workingWithDiction'

test('Check if lookup function works', () => {
  expect(objFunc("qc")).toEqual("Quebec");
  expect(objFunc("ab")).toEqual("Alberta");
  expect(objFunc("tr")).toEqual("Not a valid province code");
});

