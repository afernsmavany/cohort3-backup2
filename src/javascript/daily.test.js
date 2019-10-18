
import functions from './daily'

// 5th Daily: More Array Work - (October 16-17): 

test('Check if Map method works', () => {
    expect(functions.mapFunc([1, 2, 3])).toEqual([8, 16, 24])
});

test('Check if Filter method works', () => {
    expect(functions.filterFunc([18, 25, 35, 48, 60])).toEqual([18, 48, 60])
});

test('Check if Reduce method works', () => {
    expect(functions.reduceFunc([10, 20, 30, 40, 50])).toEqual([150])
});











test('Check equality', () => {
    expect(functions.assertEquals(1, 1)).toBe(true);
    expect(functions.assertEquals("a", "b")).toBe(false);
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals(1, 2)).toBe(false);
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(true);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});

/* 2nd Daily (9th Oct, 2019):
Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

/*	3rd Daily (11th Oct, 2019):
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

test('Check if For Loop works', () => {
    expect(functions.forLoop([0, 1, 2, 3])).toEqual([0, 1, 2, 3])
});

test('Check if While Loop works', () => {
    expect(functions.whileLoop([7, 8, 9])).toEqual([7, 8, 9])
});

test('Check if Do While Loop works', () => {
    expect(functions.doWhileLoop([5, 6, 7])).toEqual([5])
});

test('Check if For In Loop works', () => {
    expect(functions.forInLoop()).toEqual("Jerry Seinfeld 12 ")
});

test('Check if For Of Loop works', () => {
    expect(functions.forOfLoop([1, 2, 3])).toEqual([1, 2, 3])
});