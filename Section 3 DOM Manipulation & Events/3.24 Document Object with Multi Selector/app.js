// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]); // can access like an array
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]); // can access like an array
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';


// Convert HTML collection into Array
lis = Array.from(lis);
lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index}: hello`;
});


lis.reverse();
console.log(lis);

console.log('-----------QuerySelectorAll Below-------------');

// querySelectorAll 
const qItems = document.querySelectorAll('ul.collection li.collection-item');

// Does not need to convert to Array because it's a node list
qItems.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#eee';
})

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "green";
}

console.log(qItems);