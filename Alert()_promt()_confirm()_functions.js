//alert() :- Display message .
// prompt() :- shows a message , input text . It returns the text on ok or, if Cancel button or Esc is clicked, null .
// confirm() :- shows a message , confirm with "OK" or "Cancel". It returns true for OK and false for Cancel/Esc .

//Note :- All these pause script execution and don't allow the visitor to interact 
// with the rest of the page until the window has been dismissed.


// for alert
alert("Hello Sir");


// for prompt
let age = prompt("Enter your age");

if (age != null) {
    document.write(`Your age is ${age}`);
} else {
    document.write(`Age field was blank`);
}