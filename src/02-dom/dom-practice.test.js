import dFunctions from './dom-practice.js';

test('console the parameter passed to the event listener', () => {
  const newDiv = document.createElement('div');
  dFunctions.addCard(idplay, 1);
});

test('to test addCard', () => {
  const newParent = document.createElement('div');
  dFunctions.addCard(newParent, 1);
  dFunctions.addCard(newParent, 2);
  dFunctions.addCard(newParent, 3);
  expect(dFunctions.whatCards(newParent)).toBe([1, 2, 3]);

});
