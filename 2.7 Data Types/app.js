// PRIMITIVE

// String
const name = 'john doe';
// Numbers
const age = 45;

console.log(typeof name);
console.log(typeof age);


// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car); // results object which is js bug

// Undefined
let test;
console.log(typeof test);

// Symbols
const sym = Symbol();
console.log(typeof sym);

// REFERENDCE TYPES - ALL will come back as Objects
// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const address = {
    city: 'cincinnati',
    state: 'oh'
}
console.log(typeof address);

const today = new Date();
console.log(typeof today);