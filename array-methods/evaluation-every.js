// every()
// Tests whether all elements in the array pass the test implemented by the provided
// function. It returns true if all elements pass the test, otherwise it returns false.

const beers = [
  { name: 'IPA', alcohol: 6.5 },
  { name: 'Stout', alcohol: 8.0 },
  { name: 'Lager', alcohol: 5.0 },
  { name: 'Pilsener', alcohol: 4.5 },
  { name: 'Wheat Beer', alcohol: 5.5 },
];

const allBeersAreStrong = beers.every(beer => beer.alcohol > 6.0);
console.log(`All beers are strong: ${allBeersAreStrong}`);

// Another example
const numbers = [1, 2, 3, 4, 5];
const allEveryNumbers = numbers.every(
  (num) => num % 2 === 0
);
console.log(allEveryNumbers); // true