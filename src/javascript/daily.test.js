
import functions from './daily'

// 5th Daily: More Array Work - (October 16-17): 

test('Check if Slice works', () => {
    expect(functions.sliceFunc(['Paris', 'Calgary', 'Mumbai', 'Philadelphia'])).toEqual(['Mumbai', 'Philadelphia'])
});

test('Check if Splice works', () => {
    expect(functions.spliceFunc(['Ferrari', 'Bugatti', 'Maserati'])).toEqual(['Ferrari', 'Lotus', 'Bugatti', 'Maserati'])
});

test('Check if For Each Loop works', () => {
    expect(functions.forEachLoop([5, 6, 7])).toEqual([5, 6, 7])
});

test('Check if Map method works', () => {
    expect(functions.mapFunc([1, 2, 3])).toEqual([8, 16, 24])
});

test('Check if Reduce method works', () => {
    expect(functions.reduceFunc([1, 2, 3])).toEqual(6)
});

test('Check if Filter method works', () => {
    expect(functions.filterFunc([18, 25, 35, 48, 60])).toEqual([18, 48, 60])
});

test('Check if Sort method works', () => {
    expect(functions.sortFunc([8, 9, 10])).toEqual([10, 8, 9])
});

// 1st Daily (7th Oct, 2019):

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

// 4th Daily: Prepare for Array Work - October 15, 2019

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