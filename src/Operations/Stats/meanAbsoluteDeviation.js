const Math = require("mathjs");
const Difference = require("../subtraction");

function MeanAbsoluteDeviation(values) {
    let mean = Math.mean(values);
    return Math.mean(values.map(function(n){
        return Math.abs(Difference(n,mean));
    }));
}
module.exports = MeanAbsoluteDeviation;