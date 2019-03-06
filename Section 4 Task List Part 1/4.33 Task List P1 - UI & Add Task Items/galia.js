// UI 
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// load event listener
loadEventListener();

function loadEventListener() {
    form.addEventListener('submit', addTask);

    //remove task list
    taskList.addEventListener('click', removeTask);

    //clear task list
    clearBtn.addEventListener('click', clearTasks);

    //filter tasks
    filter.addEventListener('keyup',filterTasks);
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('please enter something');
    }

    //create list item
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);

    //create delete link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    //clear value
    taskInput.value = '';

    //prevent default
    e.preventDefault();
}

//remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

//Note
//querySelectorAll returns a node list vs. 
//getElementByClass returns html collection that must be converted to Array to use forEach.