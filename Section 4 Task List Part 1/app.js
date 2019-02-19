// Define UI variables
const form = document.querySelector('#task-form'); // Form
const taskInput = document.querySelector('#task'); // New task input
const filter = document.querySelector('#filter'); // Filter input field
const taskList = document.querySelector('.collection'); // ul
const clearBtn = document.querySelector('.clear-tasks'); //button

// Load all event listeners
loadEventListener();

// Load 
function loadEventListener() {
  // Add task event
  form.addEventListener('submit', addTask);

}
// Add Task
function addTask(e) {
  // if empty value
  if(taskInput.value === '') {
    alert('add a task');
  } 

  // Create li element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';


  e.preventDefault();
}