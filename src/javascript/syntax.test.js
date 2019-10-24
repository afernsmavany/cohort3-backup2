import functions from './syntax'

test('Check if number', () => {
    expect(functions.number(34)).toBe("true")
    expect(functions.number("abc")).toBe("false")
});

test('Check if string', () => {
    expect(functions.isString("hello")).toBe("string")
});

test('Check if boolean', () => {
    expect(functions.isBoolean(true)).toBe("true")
    expect(functions.isBoolean("dtr")).toBe("false")
});

test('Check if array', () => {
    expect(functions.isArray([1, 2, 3])).toBe(true)
    expect(functions.isArray("today")).toBe(false)
});

test('Check if object', () => {
    expect(functions.isObject({ B: 1 })).toBe(true)
    expect(functions.isObject("hello")).toBe(false)
});

test('Check if undefined', () => {
    expect(functions.isUndefined()).toBe(true)
    expect(functions.isUndefined("Hello")).toBe(false)
});

test('Check If Else', () => {
    expect(functions.ifElse(3, 6)).toEqual(6)
    expect(functions.ifElse(19, 18)).toEqual(19)
});

test('Check if parameters received', () => {
    expect(functions.parameter()).toBe(undefined)
    expect(functions.parameter(24,14)).toBe(24)
});

test('Check if function returns', () => {
    expect(functions.returns()).toBe(undefined)
    expect(functions.returns(345, 178)).toBe(345)
});

test('Check if adds element to front of array', () => {
    expect(functions.arrayFront([1, 2, 3], 4)).toEqual([4, 1, 2, 3])
});

test('Check if adds element to end of array', () => {
    expect(functions.arrayEnd([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
});

test('Check if updates value in array', () => {
    expect(functions.arrayUpdate([1, 2, 3], 0, 87)).toEqual([87, 2, 3])
});

test('Check if For Loop works', () => {
    expect(functions.forLoop([0, 1, 2, 3])).toEqual([0, 1, 2, 3])
});

test('Check if For In Loop works', () => {
    expect(functions.forInLoop()).toEqual("Jerry Seinfeld 12 ")
});

test('Check if While Loop works', () => {
    expect(functions.whileLoop([7, 8, 9])).toEqual([7, 8, 9])
});

test('Check if Do While Loop works', () => {
    expect(functions.doWhileLoop([5, 6, 7])).toEqual([5])
});

test('Check if For Each Loop works', () => {
    expect(functions.forEachLoop([5, 6, 7])).toEqual([5, 6, 7])
});

test('Check for object declared', () => {
    expect(functions.declareObject({ name: "James", age: 57 })).toEqual(("James is 57"))
});

test('Check object lookup key to retrieve value', () => {
    expect(functions.lookupKey("name")).toEqual("Suzie")
});