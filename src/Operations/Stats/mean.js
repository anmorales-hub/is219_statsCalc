const Sum = require("../Addition");
const Quotient = require("../Divide");

function Mean(values){
    let listSum = 0;
    for(let i = 0; i < values.length; i++){ //add all numbers in a given list
        listSum = Sum(listSum, values[i]);
    }
    return Quotient(listSum,values.length); //divide sum of all numbers by length of list to give mean
}

module.exports = Mean;