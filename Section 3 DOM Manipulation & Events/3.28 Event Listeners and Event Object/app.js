// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('hello world');
//     //e.preventDefault();
// });

// Better to have named function then anaynous function.
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e) {
    //console.log('click')
    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    
    // change the button text
    e.target.innerText ='Hello';

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // coord event relative to the window
    val = e.clientY;
    val = e.clientX;

    // coord event relative to the element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);
}
