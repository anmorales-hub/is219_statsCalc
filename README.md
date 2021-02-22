[![Build Status](https://travis-ci.com/anmorales-hub/is219HW1.svg?branch=master)](https://travis-ci.com/anmorales-hub/is219HW1)
[![Coverage Status](https://coveralls.io/repos/github/anmorales-hub/is219HW1/badge.svg?branch=master)](https://coveralls.io/github/anmorales-hub/is219HW1?branch=master)

# OOP
## Encapsulation
The first principle of object-oriented programming is encapsulation. In simple terms, encapsulation means that nothing outside of an object can directly access the data inside; it maintains a private state. However, the private variables of an object can still be modified by public methods.

## Abstraction
The next object-oriented programming principle is abstraction. The idea of abstraction means that a person should only know the key elements of a program. For example, the calculator has a function that takes 2 numbers and adds them together. In terms of functionality, the user would not need to know how the numbers are being added, only that the numbers will be added. Essentially, it's not caring about how a function works, only about what it does.

## Inheritance
Inheritance is the third object-oriented programming principle. Inheritance allows one class to copy, or inherit, all the methods, variables, etc. from another class. Imagine many different types of cars, for instance. While there are many types such as a Honda or a Lamborghini, they each derive a common set of properties from a base 'car' class. Here is an example of inheritance in terms of our calculator:
``` class Calculator {
      sum(){
      . . . .
  }
} 
```

```class StatsCalc extends Calculator{
      . . . .
} 
```

In this example, the new class 'StatsCalc' takes on the properties of the 'Calculator' class. In this case, it would inherit the sum function, as well as any other data that might be encapsulated within the Calculator class.

## Polymorphism
Polymorphism is the last of the object-oriented programming principles. Imagine telling a dog, a spider, and a human to walk. Each of these creatures have a different number of legs, and as a result, they walk in different ways. Despite these differences, each creature can carry out the common task of walking, using different methods to do so. This is essentially polymorphism. Although each function would perform the same task, they have different ways of doing so. This becomes more applicable when you consider data types; an addition function will likely work differently when given an input of 2 integers as opposed to an input of 2 floats. Polymorphism would help work around this issue while acheieving the same goal.

***
