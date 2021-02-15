const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/addition');
const Difference = require('../src/Operations/subtraction');


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
}

test('Test get results for Difference function',() => {
    //test get results func vv
    let op = Difference;
    let calculation = new Calculation(2,1,op);
    expect(calculation.GetResults()).toBe(1);
}