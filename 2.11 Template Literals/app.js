// Template literals

const name = 'sarah';
const age = 31;
const job = 'Web developer';
const city = 'Chicago';
let html;

// Without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>' + age + '</li><li>' + job + ' </li><li>' + city + '</li></ul>';

// In multi lines (es5)
html = '<ul>' +
    '<li>Name: '+ name + '</li>' +
    '<li>Name: '+ age + '</li>' +
    '<li>Name: '+ job + '</li>' +
    '<li>Name: '+ city + '</li>' +
    '</ul>';

function hello() {
    return 'hello';
}

// With template strings
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'over 30' : 'Under 30'}</li> <!-- Terniary Operator -->
    </ul>
`;


document.body.innerHTML = html;