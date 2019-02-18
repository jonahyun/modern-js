// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element - x
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// APpend link into li
li.appendChild(link);


// Append lis as child as ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);