import functions from './basicDom.js';

test('Check children', () => {
  expect(functions.displayChild(orderedList)).toEqual("Item 1", "Item 2", "Item 3");
});