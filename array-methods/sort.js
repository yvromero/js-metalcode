const products = ['cuaderno', 'lapiz', 'borrador', 'regla', 'sacapuntas'];
// products.sort();

const sortedProducts = [...products].sort();
// onsole.log(sortedProducts);
// console.log(products);


const numbers = [10, 2, 4, 1, 6, 5, 7, 8, 11];
const notSortedNumbers = numbers.sort();
console.log(notSortedNumbers);


const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const sortedNumbersDesc = numbers.sort((a, b) => b - a);
console.log(sortedNumbersDesc);

const people = [
   {name: 'Pedro', age: 20},
   {name: 'Ana', age: 12},
   {name: 'Luis', age: 22},
   {name: 'Maria', age: 33},
   {name: 'Carlos', age: 52},
   {name: 'Frank', age: 11},
];

const sortedPeople = [...people].sort((a, b) => a.age - b.age);
console.log(sortedPeople);

const sortedPeopleDesc = [...people].sort((a, b) => b.name.localeCompare(a.name));
console.log(sortedPeopleDesc);
