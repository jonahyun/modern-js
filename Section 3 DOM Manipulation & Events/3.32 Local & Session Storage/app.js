// local storage 
// must be string
// localStorage and sessionStorage works exactly same, but localStorage is store until cache removed and sessionStorage removes when browser is closed or session is over.

// set local storage item
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('name') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('name'));
    }
    tasks.push(task);

   
    localStorage.setItem('name', JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('name'));

tasks.forEach(function(task){
    console.log(task);
});