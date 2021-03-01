[![Build Status](https://travis-ci.com/anmorales-hub/is219HW1.svg?branch=master)](https://travis-ci.com/anmorales-hub/is219HW1)
[![Coverage Status](https://coveralls.io/repos/github/anmorales-hub/is219HW1/badge.svg?branch=master)](https://coveralls.io/github/anmorales-hub/is219HW1?branch=master)

# OOP
## Encapsulation
The first principle of object-oriented programming is encapsulation. In simple terms, encapsulation means that nothing outside of an object can directly access the data inside; it maintains a private state. However, the private variables of an object can still be modified by public methods.

## Abstraction
The next object-oriented programming principle is abstraction. The idea of abstraction means that a person should only know the key elements of a program. For example, the calculator has a function that takes 2 numbers and adds them together. In terms of functionality, the user would not need to know how the numbers are being added, only that the numbers will be added. Essentially, it's not caring about how a function works, only about what it does.

## Inheritance
Inheritance is the third object-oriented programming principle. Inheritance allows one class to copy, or inherit, all the methods, variables, etc. from another class. Imagine many different types of cars, for instance. While there are many types such as a Honda or a Lamborghini, they each derive a common set of properties from a base 'car' class. Here is an example of inheritance in terms of our calculator:
``` 
class Calculator {
      sum(){
      . . . .
  }
} 
```

```
class StatsCalc extends Calculator{
      . . . .
} 
```

In this example, the new class 'StatsCalc' takes on the properties of the 'Calculator' class. In this case, it would inherit the sum function, as well as any other data that might be encapsulated within the Calculator class.

## Polymorphism
Polymorphism is the last of the object-oriented programming principles. Imagine telling a dog, a spider, and a human to walk. Each of these creatures have a different number of legs, and as a result, they walk in different ways. Despite these differences, each creature can carry out the common task of walking, using different methods to do so. This is essentially polymorphism. Although each function would perform the same task, they have different ways of doing so. This becomes more applicable when you consider data types; an addition function will likely work differently when given an input of 2 integers as opposed to an input of 2 floats. Polymorphism would help work around this issue while acheieving the same goal.

*** 
# S.O.L.I.D 
## S - Single Responsibility Principle
As the name implies, this principle involves making sure that each function does only a single task. With eah function having a single task, this makes it easy to read, navigate, and debug potentially complex code. One example of the Single Responsibility Principle in the calculator code is seen here:
```
function Addition (a,b) {
    return a + b;
}
```
In this function, anyone can tell just by the name that it is meant to *add* two numbers together. Giving the function a single task in addition to giving it a name that indicates exactly what it's supposed to do would help make code very easily navigable.

## O - Open-Closed Principle
This principle states that JS modules should be closed to modification, but open to extension. This means that you shouldn't have to manually change code. Here is an example in terms of the calculator program:
```
class Calculator {
    static Calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static clearList(){
        this.Calculations = [];
    }
}
```
The Open-Closed Princicple is seen here in the clearList function. Rather than having to open the code and manually clear the list of calculations, the code has been *extended* with the clearList function which accomplishes that task while avoiding the need to modify pre-existing code. 

## L - Liskov Substitution Principle
The Liskov Substitution Principle basically ensures that a parent and a child class can be used interchangably without errors. View this example from the Calculator program:
```
static Sum(a,b) {
      return a + b;
}
```
```
static Sum(a,b) {
          let calculation = new Calculation(a,b,Sum);
          Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
 ```
 If the first chunk of code were inherited by a class with the second chunk of code, the two would be able to be used interchangibly. While the child pushes a sum into a list of calculations, the parent adds the numbers without the second step. Regardless, using either sum function would not result in an error.
 
 ## I - Interface Segregation
 As the name implies, interface segregation means segregating interfaces (of course). Basically, this principle states that if a program doesn't need an interface, it shouldn't have it. It's important to keep your code simple and avoid anything that might be unnecessary or inconvenient. Look at the following code:
 ```
function Addition (a,b) {
    return a + b;
}
module.exports = Addition;
```
Note how it has absoolutely no fluff or anything that isn't needed. It contains the straightforward addition function and a line of code to export that function; nothing more and nothing less.

## D - Dependency Inversion Principle
This principle states that higher level modules should be reusable and unaffected by lower level modules while both should depend on abstractions. Take a look at the following code: 
``` 
let calculation = new Calculation.Create(a,b,Sum);
```
In this code, the create method uses the Sum method as a parameter can be changed to any other operation (subtraction, product, etc.) without having to change the initial method.

*** 
# Design Patterns
Design patterns are solutions to common problems in software design, acting as sort of blueprints that can solve a recurring problem in code. Unlike UI libraries like Bootstrap, design patterns are more concept-based, meaning you can't just copy and paste a design pattern into your own program. There are 3 types of design patterns: **creational patterns**, which provde object creation mechanisms that increase flexibility and reusability of code, **structural patterns** which essentially help obtain new functionalities without messing with existing ones, and **behavioral patterns** which optimize communication between objects.

## Creational Pattern - Singleton
Singleton is a creational design patten that is used to create a single, globally accessible instance of a class. This is beneficial for the calculator program since it ensures that no other instances will overwrite or interefere with the existing Calculator class. Since we would eventually be storing all our calculation results in a single Calculator instance, this is important in making sure that our data is not scattered across multiple calculators. In addition, its global accessibility would make it easily referenced from anywhere in the program. To implement a Singleton, the user would have to create a 'getInstance' method that stores the an object and returns it in subsequent calls. Below is an example of a Singleton implementation:
```
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo
```
## Structural Pattern - Facade
The Facade pattern involves creating a simplified public interface that hides a program's complexities from the user. In a sense, this can be boiled down to the implementation of abstraction. In terms of the Calculator program, a facade would be useful in simplifying the math process for the user. They would only be interested in providing input and receiving output; anything in between those outcomes is not something the user is concerned or worried about.  Below is a code example of a facade:
```
let currentId = 0;

class ComplaintRegistry {
  registerComplaint(customer, type, details) {
    const id = ComplaintRegistry._uniqueIdGenerator();
    let registry;
    if (type === 'service') {
      registry = new ServiceComplaints();
    } else {
      registry = new ProductComplaints();
    }
    return registry.addComplaint({ id, customer, details });
  }

  static _uniqueIdGenerator() {
    return ++currentId;
  }
}

class Complaints {
  constructor() {
    this.complaints = [];
  }

  addComplaint(complaint) {
    this.complaints.push(complaint);
    return this.replyMessage(complaint);
  }

  getComplaint(id) {
    return this.complaints.find(complaint => complaint.id === id);
  }

  replyMessage(complaint) {}
}

class ProductComplaints extends Complaints {
  constructor() {
    super();
    if (ProductComplaints.exists) {
      return ProductComplaints.instance;
    }
    ProductComplaints.instance = this;
    ProductComplaints.exists = true;
    return this;
  }

  replyMessage({ id, customer, details }) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
  }
}

class ServiceComplaints extends Complaints {
  constructor() {
    super();
    if (ServiceComplaints.exists) {
      return ServiceComplaints.instance;
    }
    ServiceComplaints.instance = this;
    ServiceComplaints.exists = true;
    return this;
  }

  replyMessage({ id, customer, details }) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.`;
  }
}

// usage
const registry = new ComplaintRegistry();

const reportService = registry.registerComplaint('Martha', 'service', 'availability');
// 'Complaint No. 1 reported by Martha regarding availability have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.'

const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color');
// 'Complaint No. 2 reported by Jane regarding faded color have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.'
```
Note how even though there are many methods and classes, they all stem from the 'ComplaintRegistry' class which is what the user would be dealing with. 

Here is a crude example of a Facade in the Calculator program:
```
class Calculation {
    //constructor is the first method called after instantiaion and usually sets object properties
    constructor(a,b,op) {
        //"this" is interal reference of the object to access internal methods and properties
        this.a = a;
        this.b = b;
        this.op = op;
    }
    //getresults method returns results of calculation
    GetResults() {
        return this.op(this.a,this.b);
    }
}

module.exports = Calculation;
```
This code simplifies the math operation process. Rather than providing steps that are potentially irrelevant to the user, this code takes two numbers and an operation, executes it, and obtains the results of the calculation. It's simple and does not go into detail about any potentally complex code that happens behind the scenes.

## Behavioral Pattern - Strategy
Strategy is a pattern that lets you define a family of algorithms into a separate class while making their objects interchangable. One notable example in the Calculator program is the use of the Calculation class:
```
class Calculation {
    //constructor is the first method called after instantiaion and usually sets object properties
    constructor(a,b,op) {
        //"this" is interal reference of the object to access internal methods and properties
        this.a = a;
        this.b = b;
        this.op = op;
    }
    //getresults method returns results of calculation
    GetResults() {
        return this.op(this.a,this.b);
    }
}
```
In this example, the Calculation class groups together the use of an operation, as well as a function to return the result. 
