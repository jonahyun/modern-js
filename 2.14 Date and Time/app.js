// Date and Time

let val;

const today = new Date();
let birthday = new Date('9-1-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/2981');




val = today.getMonth(); //the result is 0 based, so Feb come back 1
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();  // Amount of time past since 1970

birthday.setMonth(2); //setting to March
birthday.setDate(12); // gets march 12
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(val); 

console.log(birthday);




