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
This principle states that
