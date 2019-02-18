// Mouse Events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLick
clearBtn.addEventListener('click',runEvent);

// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter - on main element
card.addEventListener('mouseenter', runEvent);

// Mouseleave - on main element
card.addEventListener('mouseleave', runEvent);

// Mouseover - on main element and all elements inside
card.addEventListener('mouseover', runEvent);

// Mouseout - on main element and all elements inside
card.addEventListener('mouseout', runEvent);

// Mousemove - any move inside of the element
card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX}  MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
