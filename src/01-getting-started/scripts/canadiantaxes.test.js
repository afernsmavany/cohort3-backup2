import functions from './canadiantaxes.js'

// $1.00	⇒	$.15
// $2.00	⇒	$.30
// $50,000	⇒	$7,630.35
// $100,000	⇒	$18,541.11
// $150,000	⇒	$31,211.10
// $250,000	⇒	$61,796.26

test('Check tax payable', () => {
  expect(functions.taxSlabs(1)).toEqual(0.15)
});

test('Check tax payable', () => {
  expect(functions.taxSlabs(2)).toEqual(0.30)
});

test('Check tax payable', () => {
  expect(functions.taxSlabs(50000)).toEqual(7630)
});

test('Check tax payable', () => {
  expect(functions.taxSlabs(100000)).toEqual(18541)
});

test('Check tax payable', () => {
  expect(functions.taxSlabs(150000)).toEqual(31211)
});

test('Check tax payable', () => {
  expect(functions.taxSlabs(250000)).toEqual(61796)
});