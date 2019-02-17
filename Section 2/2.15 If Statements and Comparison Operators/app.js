// If Statements and Comparison Operators
// format
// if(something) {
//     do_something
// } else {
//     do_something_else
// }

//const id = '100';

// Assignment = equal sign;

// Equal to 
if(id == 100) {
    console.log('CORERECT');
} else {
    console.log('Incorrect');
}

// Not Equal to 
if(id != 101) {
    console.log('CORERECT');
} else {
    console.log('Incorrect');
}

// Equal to value and type
if(id === 100) {
    console.log('CORERECT');
} else {
    console.log('Incorrect');
}

// Not equal to value and type
if(id !== 100) {
    console.log('CORERECT');
} else {
    console.log('Incorrect');
}

if(typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

// Greater or Less than
if(id > 200) {
    console.log('CORERECT');
} else {
    console.log('Incorrect');
}

// If Else
const color = 'red';
if(color === 'red'){
    console.log('color is red');
} else if(color === 'blue') {
    console.log('color is blue');
} else {
    console.log('color is not red or blue')
}

// Logical Operators
const name = 'Steve';
const age = 20;

// And &&
if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age >= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} ca not run in race`);
} else {
    console.log(`${name} is register for the race`)
}

// Ternary Operator - short way of doing conditional
console.log(id === 100 ? 'Correct': 'Incorrect');

// Without braces - not suggested.
if(id === 100)
    console.log('Correct')
else 
    console.log('incorrect')