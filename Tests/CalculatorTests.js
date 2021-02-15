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
