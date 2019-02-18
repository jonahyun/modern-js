const firstName = 'william';
const lastName = 'johnson';
const age = 30;
const str = 'Hello there my name is jona'
const tags = 'angular, javascript, react, web design'

let val;
val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, name is ' + firstName + 'and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length - this is property not a method, so it does not need ()
val = firstName.length;


// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l');  // it looks for first l letter
val = firstName.lastIndexOf('l');

// chartAt()
val = firstName.charAt('2');  // shows l

//Get last character
val = firstName.charAt(firstName.length - 1)  // common formula dealing with strings.

// substring()
val = firstName.substring(0,4); // shows will
val = firstName.slice(0,4) // also shows will

// split() - can come in handy - turns into array
val = str.split(' '); // split based on space
val = tags.split(','); // tuns to array

// replace()
val = str.replace('jona', 'cisol');

// includes()
val = str.includes('Hello'); // shows true or false

console.log(val);