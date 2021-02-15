const Calculation = require('../src/models/Calculation');
const SquareCalc = require('../src/models/SquareCalc');
const Sum = require('../src/Operations/addition');
const Difference = require('../src/Operations/subtraction');
const Product = require('../src/Operations/product');
const Quotient = require('../src/Operations/divide');
const Square = require('../src/Operations/square');
const SquareRoot = require('../src/Operations/squareRoot');

test('Test of Calculation Instantiation', () =>{
    //Test instantiation of calc object
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test get results for Sum function',() => {
    //test get results func vv
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test get results for Difference function',() => {
    //test get results func vv
    let op = Difference;
    let calculation = new Calculation(2,1,op);
    expect(calculation.GetResults()).toBe(1);
});

test('Test get results for Product function',() => {
    //test get results func vv
    let op = Product;
    let calculation = new Calculation(2,3,op);
    expect(calculation.GetResults()).toBe(6);
});

test('Test get results for Quotient function',() => {
    //test get results func vv
    let op = Quotient;
    let calculation = new Calculation(6,3,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test get results for Square function',() => {
    //test get results func vv
    let op = Square;
    let calculation = new Calculation(8 ,op);
    expect(calculation.GetResults()).toBe(64);
});

test('Test get results for SquareRoot function',() => {
    //test get results func vv
    let op = SquareRoot;
    let calculation = new Calculation(64 ,op);
    expect(calculation.GetResults()).toBe(8);
});