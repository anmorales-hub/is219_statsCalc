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
Design patterns are solutions to common problems in software design, acting as sort of blueprints that can solve a recurring problem in code. Unlike UI libraries like Bootstrap, design patterns are more concept-based, meaning you can't just copy and paste a design pattern into your own program. There are 3 types of design patterns: **creational patterns**, which provde object creation mechanisms that increase flexibility and reusability of code, **structural patterns** which assemble classes into large, flexible, and efficient structures, and **behavioral patterns** which optimize communication between objects.

## Creational Pattern - Singleton
Singleton is a creational design patten that is used to create a single, globally accessible instance of a class. This is beneficial for the calculator program since it ensures that no other instances will overwrite or interefere with the existing Calculator class. Since we would eventually be storing all our calculation results in a single Calculator instance, this is important in making sure that our data is not scattered across multiple calculators. In addition, its global accessibility would make it easily referenced from anywhere in the program. To implement a Singleton, the user would have to create a 'getInstance' method that stores the an object and returns it in subsequent calls. Below is a pseudocode of a Singleton implementation:
```
// The Database class defines the `getInstance` method that lets
// clients access the same instance of a database connection
// throughout the program.
class Database is
    // The field for storing the singleton instance should be
    // declared static.
    private static field instance: Database

    // The singleton's constructor should always be private to
    // prevent direct construction calls with the `new`
    // operator.
    private constructor Database() is
        // Some initialization code, such as the actual
        // connection to a database server.
        // ...

    // The static method that controls access to the singleton
    // instance.
    public static method getInstance() is
        if (Database.instance == null) then
            acquireThreadLock() and then
                // Ensure that the instance hasn't yet been
                // initialized by another thread while this one
                // has been waiting for the lock's release.
                if (Database.instance == null) then
                    Database.instance = new Database()
        return Database.instance

    // Finally, any singleton should define some business logic
    // which can be executed on its instance.
    public method query(sql) is
        // For instance, all database queries of an app go
        // through this method. Therefore, you can place
        // throttling or caching logic here.
        // ...

class Application is
    method main() is
        Database foo = Database.getInstance()
        foo.query("SELECT ...")
        // ...
        Database bar = Database.getInstance()
        bar.query("SELECT ...")
        // The variable `bar` will contain the same object as
        // the variable `foo`.
```
