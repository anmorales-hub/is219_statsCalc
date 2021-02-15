const Calculator = require('../src/Calculator');

test('Calculator adding 2 numbers',() => {
    //assign results of calc addition method to an object, calc returns an object
    let result = Calculator.Addition(1,2);
    //'expect' used to test result correctness
    expect(result).toBe(3);
});
