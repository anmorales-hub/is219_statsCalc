const Mean = require("../src/Operations/Stats/mean");
const Median = require("../src/Operations/Stats/median")

test('Test the Mean Function', () => {
    let values = [1,2,3,3.6,4.4];
    expect(Mean(values)).toBe(2.8);
});

test('Test the Median function', () => {
   let values = [1,2,3,4,5,6,7];
   expect(Median(values)).toBe(4);
});