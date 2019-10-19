import calFunc from './calculator'

test('Check if adds', () => {
    expect(calFunc.addNumbers(2,4)).toBe(6);
    expect(calFunc.addNumbers(8,18)).toBe(26);
});

test('Check if subtracts', () => {
    expect(calFunc.subNumbers(10,8)).toBe(2);
    expect(calFunc.subNumbers(104,8)).toBe(96);
});

test('Check if divides', () => {
    expect(calFunc.divNumbers(50, 5)).toBe(10);
    expect(calFunc.divNumbers(125, 5)).toBe(25);
});

test('Check if multiplies', () => {
    expect(calFunc.mulNumbers(9, 7)).toBe(63);
    expect(calFunc.mulNumbers(12, 11)).toBe(132);

});
