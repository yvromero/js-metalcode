// forEach()
// Executes a provided function once for each array element
// Does not return a value and does not transform the array

const numbers = [1, 2, 3, 4];
// iterate and log each element * 2
numbers.forEach((num) =>
 console.log(num * 2));


const names = ['Yv', 'Emma', 'Frank', 'Jean'];
// iterate with access to element and its index
resultname = names.forEach((name, index) => 
 console.log(`Name: ${name}, Index: ${index}`)
);
// console.log(resultName) => undefined, because forEach has no return