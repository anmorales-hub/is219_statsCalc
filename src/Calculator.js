const Calculation = require('./models/Calculation');
const Sum = require('./Operations/addition');
const Difference = require('./Operations/subtraction');
const Product = require('./Operations/product');
const Quotient = require('./Operations/divide');
const Square = require('./Operations/square');

class Calculator {
    static Calculations = []
    //Static methods can be called without instantiating = good for actions
    static Sum(a,b) {
        //create new object, good for data + actions
          let calculation = new Calculation(a,b,Sum);
          Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Difference(a,b) {
        //create new object, good for data + actions
        let calculation = new Calculation(a,b, Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Product(a,b) {
        //create new object, good for data + actions
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Quotient(a,b) {
        //create new object, good for data + actions
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Square(a) {
        //create new object, good for data + actions
        let calculation = new Calculation(a,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}

module.exports = Calculator;