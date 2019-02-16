s// Type Conversion

let val;

// Number to string
val = String(5);
val = String(4+4);

//Bool to string
val = String(true);

//Date to string
val = String(new Date());

//Array to String
val = String([1,2,3,4,5])

//toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true); // this will give 1
val = Number(false); // this will give 0
val = Number(null); // this gives 0
val = Number('Hello'); // this give NaN - not a number
val = Number([1,2,3]); // this give NaN

//parseInt();
val = parseInt('1000.01'); // only gives whole number, no decimals
val = parseFloat('100.01') // shows decimals


// Output
console.log(val);
console.log(typeof val);
//console.log(val.length); //length only works on strings
console.log(val.toFixed(2)); // it allows give decimals

// Type Cohersion
// javascript does it for us.
const val1 = '5';
const val2 = 6;
//const sum = val1 + val2;

// if we want numbers we can
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);