const people = [
  { name: 'Carlos', age: 42 },
  { name: 'Ana', age: 21 },
  { name: 'Maria', age: 13 },
  { name: 'Luis', age: 12 },
];

// Currying example
// A curried function returns another function instead of taking all arguments at once
const filterAge = minimunAge => person => person.age >= minimunAge;

// Partial application: create a reusable function with 'minimumAge = 18'
const isLegalAge = filterAge(18);

// Now we can use the curried function directly as a callback
const legalAgePeople = people.filter(isLegalAge);

console.log(legalAgePeople); // [ { name: 'Carlos', age: 42 }, { name: 'Ana', age: 21 } ]

// To remember

// Currying = transform a function of multiple arguments into a sequence of functions that each take one argument
// Partial application = pre-fill some arguments and get a new specialized function
// Curried functions are composable and reusable


// Normal function (multi-args)
const add = (a, b) => a + b;

// Curried version
const addCurried = a => b => a + b;

// Partial application: pre-fill 'a = 5'
const addFive = addCurried(5);

console.log(addFive(3)); // 8
console.log(addFive(10)); // 15

// To remember

// addCurried returns a new function waiting for the second number
// With addFive we "lock" the first argument (a = 5), so we can reuse it
// Useful when you want specialized functions (addTax, addDiscount, etc.)


// Curried function: first choose a greeting, then a name
const greet = greeting => name => `${greeting}, ${name}!`;

// Partial application: fix the greeting
const sayHello = greet("Hello");
const sayHi = greet("Hi");

console.log(sayHello("Carlos")); // "Hello, Carlos!"
console.log(sayHi("Ana"));       // "Hi, Ana!"

// To remember

// The first function fixes the style ("Hello" or "Hi")

// The second one takes the dynamic value (name)

// This shows how currying helps with reusability and avoiding repetition