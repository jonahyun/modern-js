// var, let, const

// var name = "john doe";
// console.log(name);
// name = 'steve smith';
// console.log(name);

// //Initialize var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// // var can include letters, numbers, _, $

// // Multi word vars
// var firstName = "John"; // Camel Case
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case
// var firstname;

// LET
let name;
name = "john doe";
console.log(name);
name = 'steve smith';
console.log(name);

// CONST
const cname = 'john';
console.log(cname);
// can not be reassigned 
// Have to assign a value

const person = {
    name: 'bob',
    age: 30
}
person.name = 'chris';
person.age = 12;
console.table(person);
console.log(person.age);
// can not be reassigned but can change value inside of of it.

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);