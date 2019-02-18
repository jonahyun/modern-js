//Document Object
let val;

val = document;
val = document.all; // brings all html in collection
val = document.all[1]; // similar to array, you can access items in the collection
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// you can select thing without selectors: not recommended
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// access links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// you can change html collection to arrays
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script);
});


console.log(val);