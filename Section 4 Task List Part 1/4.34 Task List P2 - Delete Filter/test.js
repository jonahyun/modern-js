//UI variables
const form = document.querySelector('form');
const newTask = document.querySelector('#task');
const filter = document.querySelector('#filter');
const collection = document.querySelector('.collection');
const clearTask = document.querySelector('#clear-tasks');

//call loadEventListener
loadEventListener();

// loadEventListener
function loadEventListener() {
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if(newTask.value === '') {
        alert('Please enter something!');
    }
    // create li element
    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(newTask.value));
    collection.appendChild(li);

    // create delete icon
    const deleteIcon = document.createElement('a');
    deleteIcon.className = 'delete-item secondary-content';
    deleteIcon.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteIcon);

    newTask.value = '';

    e.preventDefault();
}