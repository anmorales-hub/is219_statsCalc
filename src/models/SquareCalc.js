class Calculation {
    //constructor is the first method called after instantiaion and usually sets object properties
    constructor(a,op) {
        //"this" is interal reference of the object to access internal methods and properties
        this.a = a;
        this.op = op;
    }
    //getresults method returns results of calculation
    GetResults() {
        return this.op(this.a);
    }
}

module.exports = SquareCalc;