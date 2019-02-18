// Event Bubbling & Deletgation

// Event Bubbling through the Dom, ex. if event happens in li, it bubbles to parent and grandparent, etc.

// Event Delegation is opposite, event listener happens in parent and using logic to target child element, you use it when target other similar elements or if you dynamically added something using javscript


// // Event Bubbling
// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//     console.log('col');
// });


// Event Delegation before example - other sibling item does not work.
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem)

// Event delegation - start from parent then drill into specific element
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }

}

