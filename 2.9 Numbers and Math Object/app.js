// Numbers and Math Object

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.9); // roundiong
val = Math.ceil(2.3); // round up
val = Math.floor(2.8); // round down
val = Math.sqrt(64); // square root
val = Math.abs(-3); // absolute
val = Math.pow(8,2); // power to
val = Math.min(2,3,242,34,3,3);
val = Math.max(2,3,242,34,3,3);
val = Math.random(); // gives random decimal

// need whole number
val = Math.random() * 5; //it gives number 0 to 4
val = Math.floor(Math.random() * 5 + 1)// add number and round down. 

console.log(val);