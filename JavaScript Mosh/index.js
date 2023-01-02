let name = 'Abdullah';
console.log(name);
const interestRate = 0.3;
// we can not reassign const
// like let interestRate = 1
console.log(interestRate)
let age = 30;
let isApproved = true;
let firstName = undefined; // also a value
let selectColour = null; // reassign the value later
let type = typeof(firstName);
console.log(type);

// ***odject

let person = {
    name: 'Abdullah',
    age: 30

};

console.log(person);
// dot notation
person.age = 18;
//bracket notation
person['name'] = 'Hasan';
console.log(person.age);
console.log(person.name);

// ***array

let colour = ['red', 'blue'];
colour[2] =  1;
console.log(colour);
colourType = typeof(colour);
console.log(colourType);
console.log(colour.length);

// ***function

function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet('Hasan', 'Abdullah');

function square(number) {
    return number * number;
}

console.log(square(2));