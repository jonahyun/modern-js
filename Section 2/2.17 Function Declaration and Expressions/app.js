// Functions Declation & Expression

// Function Declation
function greet(firstName = 'steve', lastName = 'smith') {
    // Putting default value for ES5 - old way
    // if(typeof firstName === 'undefined') {firstName = 'John'}
    // if(typeof lastName === 'undefined') {lastName = 'Doe'}

    //console.log('hello');
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());

// Function Expression
// putting a function as variable assignment
// usually you leave as anonymous function (no function name) and also close with semicolon because it's a variable
const square = function(x) {
    return x*x;
}; 
console.log(square(8));


// IMMEDIATELY INVOCKABLE FUNCITON EXPRESSION - IIFEs
// Declare and run at the same time, useful in certain design patterns like module patterns
(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log('IIFE hello ' + name);
})('brad');

// Property Methods
// When function is inside of object, it's called method
const todo = {
    add: function() {
        console.log('add todo..');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();
