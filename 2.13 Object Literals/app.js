// Object Literals

const person = {
   firstName: 'Steve',
   lastName: 'Smith',
   age: 42,
   email: 'steve@gmail.com',
   hobbies: ['music', 'sports'],
   address: {
      city: 'miami',
      state: 'florida'
   },
   getBirthYear: function() {
      return 2019 - this.age;
   }
}

let val;

val = person

// Get specific person
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
   {name: 'John', age:30},
   {name: 'Mike', age:23},
   {name: 'Sarah', age: 23}
];

for(let i = 0; i< people.length; i++) {
   console.log(people[i].name); 

}

