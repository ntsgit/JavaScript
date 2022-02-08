console.log('Hello World');

let firstName = 'Mosh';
console.log(firstName);

// rules for naming variables:
// cannot be reserved keyword let, if, else, var etc
// should be meaningful
// cannot start with number
// connot contain space or hyphen (-), use camel notation
// are case-sensitive


const interestRate = 0.3;
//interestRate=1;  // const cannot be overwritten, error in the console
console.log(interestRate);

// primitive and reference types
// primitives - string, number, Booleans, null, undefined

let hisName = 'Mosh'; // string literal
let age = 30; // number literal
let isApproved = true; //boolean literal
let newName = undefined; //or just let newName; will be undefined variable
let selectedColor = null;


// js is a dynamic language which means the type of a variable can change in runtime
// use typeof operator in browser console to check for the type of varaible, by assigining different value, type can be changed


//reference types - objects, array, functions
//objects
let person = {
    pName: 'Mosh',
    pAge: 30
};

//dot notation
person.pName = 'John';
//bracket notation
let selection = 'pName';
person[selection] = 'Mary'; // accesing dynamicly when we don't know which property we will need to access
console.log(person.pName);

// arrays 
let selectedColours = ['red', 'blue']; // array literal and initializes MT array?
selectedColours[2] = '2';
console.log(selectedColours.length);

//functions 
function greet(name, lastName) {                // name is a parameterof the greet function, input for this function
    console.log('Hello ' + name + " " + lastName);
}

greet('John', 'Tucker');                        // John is an argument for greet function, the value which will supply parameter for this function
greet('Mary', 'Bloody');

// calcualting value
function square(number) {
    return number * number;
}

console.log(square(2));

// operators
let x = 10;
let y = 3;
//console.log(x + y);
//console.log(x * y);
//console.log(x / y);
//console.log(x % y); // remainder
//console.log(x ** y); // x^y

//increment ++
console.log(x++);
console.log(++x);
//decrement --
//equality strict === ensures both operands have same type and value; lose == converts the right side into the same type, different !==

//if a customer has more than 100 points they are 'gold' customer otherwise they are 'silver' --- lesson 6-terrnary operators
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//swapping variables
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
