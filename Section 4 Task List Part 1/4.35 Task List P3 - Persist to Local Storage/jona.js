// UI - create variables
const form = document.querySelector('#task-form');
const newTask = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');


// call loadEventListener
loadEventListener();

// loadEventListener
function loadEventListener() {
    // add task
    form.addEventListener('submit', addTask);

    // delete task
    taskList.addEventListener('click', removeTask);

    // clear task
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks
    filter.addEventListener('keyup', filterTasks);



}

function addTask(e) {
    if(newTask.value === '') {
        alert('please enter a value');
    }

    // create li
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(newTask.value));

    taskList.appendChild(li);

    // create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);


    // Store in LS
    storeTaskInLocalStorage(newTask.value);

    // reset field
    newTask.value = '';

    e.preventDefault();
}


// store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks() {
    taskList.innerHTML = '';
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "display";
        } else {
            task.style.display = "none";
        }
    });
}

// function filterTasks(e) {
//     const text = e.target.value.toLowerCase();
//     document.querySelectorAll('.collection-item').forEach(function(task){
//         const item = task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text) != -1) {
//             task.style.display = 'block';
//         } else {
//             task.style.display = 'none';
//         }
//     });
// }
