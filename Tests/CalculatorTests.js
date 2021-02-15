const Calculator = require('../src/Calculator');

test('Calculator adding 2 numbers',() => {
    //assign results of calc addition method to an object, calc returns an object
    let result = Calculator.Sum(1,2);
    //'expect' used to test result correctness
    expect(result).toBe(3);
});

test('Calculator subtracting 2 numbers',() => {
    //assign results of calc difference method to an object, calc returns an object
    let result = Calculator.Difference(2,1);
    //'expect' used to test result correctness
    expect(result).toBe(1);
});

test('Calculator multiplying 2 numbers',() => {
    //assign results of calc product method to an object, calc returns an object
    let result = Calculator.Product(2,3);
    //'expect' used to test result correctness
    expect(result).toBe(6);
});

test('Calculator dividing 2 numbers',() => {
    //assign results of calc quotient method to an object, calc returns an object
    let result = Calculator.Quotient(6,2);
    //'expect' used to test result correctness
    expect(result).toBe(3);
});

test('Calculator squaring a number',() => {
    //assign results of calc Square method to an object, calc returns an object
    let result = Calculator.Square(8);
    //'expect' used to test result correctness
    expect(result).toBe(64);
});

