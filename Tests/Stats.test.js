const Mean = require("../src/Operations/Stats/mean");
const Median = require("../src/Operations/Stats/median");
const MeanAbsoluteDev = require("../src/Operations/Stats/meanAbsoluteDeviation");

test('Test the Mean Function', () => {
    let values = [1,2,3,3.6,4.4];
    expect(Mean(values)).toBe(2.8);
});

test('Test the Median Function', () => {
    let values = [2,4,6,8,10,12];
    expect(Median(values)).toBe(7);
});

test('Test the Mean Absolute Deviation Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(MeanAbsoluteDev(values)).toBe(2.3280000000000003);
});