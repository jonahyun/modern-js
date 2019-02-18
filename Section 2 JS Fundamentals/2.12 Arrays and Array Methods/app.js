// Create some arrays
const numbers = [32,23,23,53,2]; //1st way
const numbers2 = new Array(22,24,34,54,64); //2nd way
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val; 

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];


//Insert into array
numbers[2] = 100;

//Find inde of value
val = numbers.indexOf(2);

//Mutating Arrays
// add to the end
numbers.push(240); 

// add to front
numbers.unshift(120); 

// removes from back
numbers.pop(); 

// removes from front
numbers.shift(); 

// Splice values
numbers.splice(1,1);

// Reverse array
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sort array
val = fruit.sort();
val = numbers.sort(); //this sorts by first number - not right

// use the compare function to sort correctly
val = numbers.sort(function(x,y){
    return x - y;
});

// Reverse sort
val = numbers.sort(function(x,y){
    return y - x;
});

// Find
function under50(num){
   return num < 50;
}
val = numbers.find(under50); // returned first number under 50

console.log(numbers);
console.log(val);