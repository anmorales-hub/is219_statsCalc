const Calculation = require('../src/models/Calculation');
const Addition = require('../src/Operations/Addition');

test('Test get results for Addition function',() => {
    //test get results func vv
    let op = Addition;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
}