// General Loops

//Line Seperator
function lineSeperator(section = 'New Section'){
    console.log(`----------------------- ${section} below ---------------------<`);
}
lineSeperator('For Loop');

// For Loop - you use it when how many times it will run
for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('For Loop: 2 is my favorite number')
        continue; // keep going
    }
    if(i === 5){
        console.log('For Loop Stop')
        break;
    }
    console.log('For Loop Number: ' + i);
}

lineSeperator('While Loop');

// While Loop - when you don't know how many time it run
let i = 0;
while(i < 10) {
    console.log('While Loop Number: ' + i);
    i++;
}

lineSeperator('Do While');

// DO WHile Loop - it runs at least once
let j = 100;
do {
    console.log('Do While Number: ' + j);
    j++;
} 
while(j < 10);



//Loop through arrays
const cars = ['ford','chevy','honda','toyota'];

lineSeperator('For Loop');

// using for loop
for(let x = 0; x < cars.length; x++) {
    console.log(cars[x]);
}

lineSeperator('ForEach');

// using forEach()
cars.forEach(function(car){
    console.log(car);
});

lineSeperator('ForEach Index');

// using forEach() Index and array
cars.forEach(function(car,index, array){
    console.log(`${index} : ${car}`);
    //console.log(array);
});


lineSeperator('Map');
// Map
const users = [
    {id:1, name:'john'},
    {id:2, name:'sara'},
    {id:3, name:'karen'},
    {id:4, name:'steve'}
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);


lineSeperator('For In Loop');
// For In Loop

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

// give key value pairs..first z show Key and value afterwards
for(let z in person) {
    console.log(`${z} : ${person[z]}`);
}




lineSeperator('Practice Below');
// Practice
const employees = [
    {id:132, name:'john'},
    {id:243, name:'sara'},
    {id:364, name:'karen'}
];

const employeeIds = employees.map(function(employee){
    return employee.id;
});
console.log('Employee IDs: ' + employeeIds);

// ForEach Practic
employeeIds.forEach(function(employee){
    console.log('forEach practice: ' + employee);
})
