// Keyboard & Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const formValue = document.querySelector('h5');
const select = document.querySelector('select');

//clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// keydown
taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keyup', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input - any type of input, type, paste, blur, etc.
// taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    console.log(e.target.value);

    // kind of like data binding
    formValue.innerText = e.target.value; 


    // Get input value
    // console.log(taskInput.value);
    //e.preventDefault();
}