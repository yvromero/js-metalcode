// ============================
// Generic function execute
// ============================

function execute(fn){

}

const fn1Function = () => "Do something else";
const fn1String = "Do something";

console.log(fn1Function.toString());
// It's a function, and toString() returns its source code
// Output: () => "Do something else"

console.log(fn1String.toString());
// It's a string, and toString() returns its text value
// Output: "Do something"


// ============================
// Case 1: Function
// ============================

function execute(fn){ 
    console.log("Inside execute:", fn.toString());
}

const fnFunction = () => "Do something else"; 

console.log(fnFunction());
// Executes the function, returns its value, not the code
// Output: Do something else
execute(fnFunction);
// Passes the function reference to execute, fnFunction.toString() returns its source code
// Output: Inside execute: () => "Do something else"


// ============================
// Case 2: String
// ============================
function execute(fn){
    console.log("Dentro de execute:", fn.toString());
}

const fnString = "Do something";

console.log(fnString);
// Output: Do something

execute(fnString);
// Passes the string to executeString, prints its text content
// Output: Inside executeString: Do something

