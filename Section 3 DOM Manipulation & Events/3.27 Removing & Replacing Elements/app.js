// Remove and Replace, how to manipulate class, change, remove, etc.

// Replace Element
// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('New Task List'));

// Step 1. Get the old heading
const oldHeading = document.getElementById('task-title');
// Step 2. Goto Parent
const cardAction = document.querySelector('.card-action');
// Step3. Replace
cardAction.replaceChild(newHeading, oldHeading);


// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
link.removeAttribute()
val = link;

console.log(newHeading);
console.log(val);