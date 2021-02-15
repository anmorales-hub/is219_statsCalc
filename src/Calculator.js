const Calculation = require('.models/Calculation');
const Sum = require('./Operations/Addition')

class Calculator {
    static Calculations = []
    //Static methods can be called without instantiating = good for actions
    static Sum(a,b) {
        //create new object, good for data + actions
          let calculation = new Calculation(a,b,Sum);
          Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

}

module.exports = Calculator;