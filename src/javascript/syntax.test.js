import functions from './syntax'

test('Check if number', () => {
    expect(functions.number(34)).toBe("true")
});

test('Check if string', () => {
    expect(functions.isString("hello")).toBe("string")
});

test('Check if boolean', () => {
    expect(functions.isBoolean(true)).toBe("true")
});

test('Check if array', () => {
    expect(functions.isArray([1,2,3])).toBe(true)
});

test('Check if object', () => {
    expect(functions.isObject({B:1})).toBe(true)
});

test('Check if undefined', () => {
    expect(functions.isUndefined()).toBe(true)
});

test('Check If Else', () => {
    expect(functions.ifElse(3,6)).toEqual(6)
});

test('Check if parameters received', () => {
    expect(functions.parameter()).toBe(undefined)
});

test('Check if function returns', () => {
    expect(functions.returns()).toBe(undefined)
});

test('Check if adds element to front of array', () => {
    expect(functions.arrayFront([1,2,3], 4)).toEqual([4,1,2,3])
});

test('Check if adds element to end of array', () => {
    expect(functions.arrayEnd([1,2,3], 4)).toEqual([1,2,3,4])
});

test('Check if updates value in array', () => {
    expect(functions.arrayUpdate([1,2,3], 0, 87)).toEqual([87,2,3])
});

test('Check if For Loop works', () => {
    expect(functions.forLoop([1,2,3])).toEqual([1,2,3])
});

// test('Check if For In Loop works', () => {
//     expect(functions.forInLoop({})).toEqual({})
// });

test('Check if While Loop works', () => {
    expect(functions.whileLoop([1,2,3])).toEqual([4,4,5])
});