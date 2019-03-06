// Buid UI
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearTask = document.querySelector('#clear-tasks');

// Call Event Listener
loadEventListener();

// Load Event Listener
function loadEventListener() {
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Please fill this out!');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    e.preventDefault();

}

