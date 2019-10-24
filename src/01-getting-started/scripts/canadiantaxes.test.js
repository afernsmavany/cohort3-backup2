import taxFunc from './canadiantaxes.js';

test('Check tax payable', () => {
  expect(taxFunc.taxSlabs(1)).toEqual(0.15)
  expect(taxFunc.taxSlabs(2)).toEqual(0.30)
  expect(taxFunc.taxSlabs(50000)).toEqual(7630.85)
  expect(taxFunc.taxSlabs(100000)).toEqual(18140.66)
  expect(taxFunc.taxSlabs(150000)).toEqual(31211.57)
  expect(taxFunc.taxSlabs(250000)).toEqual(61796.57)
});

